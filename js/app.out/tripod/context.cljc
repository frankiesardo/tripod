(ns tripod.context
  (:require #?(:clj [tripod.log :as log]
               :cljs [tripod.log :as log :include-macros true])))

(def queue #?(:clj clojure.lang.PersistentQueue/EMPTY :cljs cljs.core.PersistentQueue.EMPTY))

(defn execution-id []
  #?(:clj (java.util.UUID/randomUUID) :cljs (random-uuid)))

;; TODO: liter this through the call sites below.  This will allow pattern match on the results
(defn- exception->ex-info [exception execution-id interceptor stage]
  (ex-info (str "Interceptor Exception: " #?(:clj  (.getMessage exception)
                                             :cljs (.-message exception)))
           (merge {:execution-id execution-id
                   :stage        stage
                   :interceptor  (:name interceptor)
                   :type         (type exception)
                   :exception    exception}
                  (ex-data exception))
           exception))

(defn- try-f
  "If f is not nil, invokes it on context. If f throws an exception,
  assoc's it on to context as ::error."
  [context interceptor stage]
  (let [execution-id (::execution-id context)]
    (if-let [f (get interceptor stage)]
      (try (log/debug :interceptor (:name interceptor)
                      :stage stage
                      :execution-id execution-id
                      :fn f)
           (f context)
           (catch #?(:clj Throwable :cljs js/Object) e
             (log/debug :throw e :execution-id execution-id)
             (assoc context ::error (exception->ex-info e execution-id interceptor stage))))
      (do (log/debug :interceptor (:name interceptor)
                     :skipped? true
                     :stage stage
                     :execution-id execution-id)
          context))))

(defn- try-error
  "If error-fn is not nil, invokes it on context and the current ::error
  from context."
  [context interceptor]
  (let [execution-id (::execution-id context)]
    (if-let [error-fn (get interceptor :error)]
      (let [ex (::error context)]
        (log/debug :interceptor (:name interceptor)
                   :stage :error
                   :execution-id execution-id)
        (try (error-fn (dissoc context ::error) ex)
             (catch #?(:clj Throwable :cljs js/Object) e
               (if (identical? (type e) (type (:exception ex)))
                 (do (log/debug :rethrow e :execution-id execution-id)
                     context)
                 (do (log/debug :throw e :suppressed (:exception-type ex) :execution-id execution-id)
                     (-> context
                         (assoc ::error (exception->ex-info e execution-id interceptor :error))
                         (update-in [::suppressed] conj ex)))))))
      (do (log/trace :interceptor (:name interceptor)
                     :skipped? true
                     :stage :error
                     :execution-id execution-id)
          context))))

(defn- check-terminators
  "Invokes each predicate in ::terminators on context. If any predicate
  returns true, removes ::queue from context."
  [context]
  (if (some #(% context) (::terminators context))
    (let [execution-id (::execution-id context)]
      (log/debug :in 'check-terminators
                 :terminate? true
                 :execution-id execution-id)
      (dissoc context ::queue))
    context))

#?(:cljs
   (defn with-bindings [_ res] res))

(defn- enter-all-with-binding
  "Invokes :enter functions of all Interceptors on the execution
  ::queue of context, saves them on the ::stack of context. Returns
  updated context."
  [context]
  (log/debug :in 'enter-all :execution-id (::execution-id context))
  (loop [context context]
    (let [queue (::queue context)
          stack (::stack context)]
      (log/trace :context context)
      (if (empty? queue)
        context
        (let [interceptor (peek queue)
              pre-bindings (:bindings context)
              ;old-context context
              context (-> context
                          (assoc ::queue (pop queue))
                          ;; conj on nil returns a list, acts like a stack:
                          (assoc ::stack (conj stack interceptor))
                          (try-f interceptor :enter))]
          (cond
            ;(channel? context) (go-async old-context context)
            (::error context) (dissoc context ::queue)
            (not= (:bindings context) pre-bindings) (assoc context ::rebind true)
            true (recur (check-terminators context))))))))

(defn- enter-all
  "Establish the bindings present in `context` as thread local
  bindings, and then invoke enter-all-with-binding. Conditionally
  re-establish bindings if a change in bindings is made by an
  interceptor."
  [context]
  (let [context (with-bindings (:bindings context {})
                  (enter-all-with-binding context))]
    (if (::rebind context)
      (recur (dissoc context ::rebind))
      context)))

(defn- leave-all-with-binding
  "Unwinds the context by invoking :leave functions of Interceptors on
  the ::stack of context. Returns updated context."
  [context]
  (log/debug :in 'leave-all :execution-id (::execution-id context))
  (loop [context context]
    (let [stack (::stack context)]
      (log/trace :context context)
      (if (empty? stack)
        context
        (let [interceptor (peek stack)
              pre-bindings (:bindings context)
              ;old-context context
              context (assoc context ::stack (pop stack))
              context (if (::error context)
                        (try-error context interceptor)
                        (try-f context interceptor :leave))]
          (cond
            ;(channel? context) (go-async old-context context)
            (not= (:bindings context) pre-bindings) (assoc context ::rebind true)
            true (recur context)))))))

(defn leave-all
  "Establish the bindings present in `context` as thread local
  bindings, and then invoke leave-all-with-binding. Conditionally
  re-establish bindings if a change in bindings is made by an
  interceptor."
  [context]
  (let [context (with-bindings (:bindings context {})
                  (leave-all-with-binding context))]
    (if (::rebind context)
      (recur (dissoc context ::rebind))
      context)))

(defn enqueue
  "Adds interceptors to the end of context's execution queue. Creates
  the queue if necessary. Returns updated context."
  [context & interceptors]
  (log/trace :enqueue (map :name interceptors) :context context)
  (update-in context [::queue]
             (fnil into queue)
             interceptors))

(defn enqueue*
  "Like 'enqueue' but the second argument is a sequence of interceptors
  to add to the context's execution queue."
  [context interceptors]
  (apply enqueue context interceptors))

(defn terminate
  "Removes all remaining interceptors from context's execution queue.
  This effectively short-circuits execution of Interceptors' :enter
  functions and begins executing the :leave functions."
  [context]
  (log/trace :in 'terminate :context context)
  (dissoc context ::queue))

(defn terminate-when
  "Adds pred as a terminating condition of the context. pred is a
  function that takes a context as its argument. It will be invoked
  after every Interceptor's :enter function. If pred returns logical
  true, execution will stop at that Interceptor."
  [context pred]
  (update-in context [::terminators] conj pred))

(defn- begin [context]
  (if (contains? context ::execution-id)
    context
    (let [execution-id (execution-id)]
      (log/debug :in 'begin :execution-id execution-id)
      (log/trace :context context)
      (assoc context ::execution-id execution-id))))

(defn- end [context]
  (log/debug :in 'end)
  (log/trace :context context)
  context)

(defn execute [context]
  (let [context (some-> context
                        begin
                        enter-all
                        (dissoc ::queue)
                        leave-all
                        (dissoc ::stack ::execution-id)
                        end)]
    (if-let [ex (::error context)]
      (throw ex)
      context)))
