(ns tripod.interceptor
  (:require [clojure.string :as str]))

(defrecord Interceptor [name enter leave error])

(defprotocol IntoInterceptor
  (-interceptor [t] "Given a value, produce an Interceptor Record."))

(declare interceptor)

(defn unmangle
  "Given the name of a class that implements a Clojure function, returns the function's name in Clojure. Note: If the true Clojure function name
  contains any underscores (a rare occurrence), the unmangled name will
  contain hyphens at those locations instead."
  [f]
  (let [class-name #?(:clj (.getName (class f)) :cljs (.-name f))]
    (-> class-name
        (str/replace #"^(.+)\$([^@]+)(|@.+)$" "$1/$2")
        (str/replace #"_" "-"))))

#?(:clj
   (extend-protocol IntoInterceptor
     clojure.lang.IPersistentMap
     (-interceptor [t] (map->Interceptor t))

     clojure.lang.Fn
     (-interceptor [t]
       (interceptor {:enter (fn [context]
                              (assoc context :response (t (:request context))))}))

     clojure.lang.Var
     (-interceptor [t] (let [{:keys [ns name]} (meta t)]
                         (assoc (interceptor (deref t)) :name (keyword (str ns) (str name)))))

     Interceptor
     (-interceptor [t] t))
   :cljs
   (extend-protocol IntoInterceptor

     cljs.core.PersistentArrayMap
     (-interceptor [t] (map->Interceptor t))

     cljs.core.PersistentHashMap
     (-interceptor [t] (map->Interceptor t))

     ; This is the `handler` case
     function
     (-interceptor [t]
       (interceptor {:enter (fn [context]
                              (assoc context :response (t (:request context))))}))

     cljs.core.Var
     (-interceptor [t] (let [{:keys [ns name]} (meta t)]
                         (assoc (interceptor (deref t)) :name (keyword (str ns) (str name)))))

     Interceptor
     (-interceptor [t] t)))

(defn interceptor-name
  [n]
  (if-not (or (nil? n) (keyword? n))
    (throw (ex-info "Name must be keyword or nil" {:name n}))
    n))

(defn interceptor?
  [o]
  (= (type o) Interceptor))

(defn valid-interceptor?
  [o]
  (if-let [int-vals (and (interceptor? o)
                         (vals (select-keys o [:enter :leave :error])))]
    (and (some identity int-vals)
         (every? fn? (remove nil? int-vals))
         (interceptor-name (:name o))
         true)
    false))

(defn interceptor
  "Given a value, produces and returns an Interceptor (Record)."
  [t]
  {:pre  [(if-not (satisfies? IntoInterceptor t)
            (throw (ex-info "You're trying to use something as an interceptor
                           that isn't supported by the protocol; Perhaps you need to extend it?"
                            {:t    t
                             :type (type t)}))
            true)]
   :post [valid-interceptor?]}
  (-interceptor t))
