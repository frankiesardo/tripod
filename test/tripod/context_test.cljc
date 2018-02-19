(ns tripod.context-test
  (:require #?(:clj [clojure.test :refer :all]
               :cljs [cljs.test :refer-macros [deftest testing is run-tests async]])
            #?(:clj [clojure.core.async :as async :refer [go <! >! <!!]]
               :cljs [cljs.core.async :as async :refer [<! >!] :refer-macros [go]])
            [tripod.context :as context]))

(defn trace [context direction name]
   (update-in context [::trace] (fnil conj []) [direction name]))

(defn tracer [name]
  {:name  name
   :enter #(trace % :enter name)
   :leave #(trace % :leave name)})

(defn thrower [name]
  (assoc (tracer name)
    :enter (fn [context] (throw (ex-info "Boom!" {:from name})))))

(defn catcher [name]
  (assoc (tracer name)
    :error (fn [context error]
             (update-in context [::trace] (fnil conj [])
                        [:error name :from (:from (ex-data error))]))))

(defn asyncer [name ch trace]
  (assoc (tracer name)
    :enter (fn [ctx] (go
                       (when-not (= trace (::trace ctx))
                         (throw (ex-info "Unexpected trace"
                                         {:expected trace
                                          :actual (::trace ctx)})))
                       (>! ch name)
                       (assoc ctx name ::async)))))

(deftest simple-execution-test
  (is (= {::trace [[:enter :a]
                   [:enter :b]
                   [:enter :c]
                   [:leave :c]
                   [:leave :b]
                   [:leave :a]]}
         (context/execute (context/enqueue {}
                                           (tracer :a)
                                           (tracer :b)
                                           (tracer :c))))))

#?(:cljs (deftest async-test
           (let [ch (async/chan 2)]
             (context/execute (context/enqueue {}
                                               (tracer :a)
                                               (asyncer :async-1 ch [[:enter :a]])
                                               (tracer :b)
                                               (asyncer :async-2 ch [[:enter :a]
                                                                     [:enter :b]])))
             (async done
                    (go
                      (is (= :async-1 (first (async/alts! [ch (async/timeout 100)]))))
                      (is (= :async-2 (first (async/alts! [ch (async/timeout 100)]))))
                      (done)))))
   :clj (deftest async-test
          (let [ch (async/chan 2)]
            (context/execute (context/enqueue {}
                                              (tracer :a)
                                              (asyncer :async-1 ch [[:enter :a]])
                                              (tracer :b)
                                              (asyncer :async-2 ch [[:enter :a]
                                                                    [:enter :b]])
                                              [:enter :b]))
            (is (= :async-1 (first (async/alts!! [ch (async/timeout 100)]))))
            (is (= :async-2 (first (async/alts!! [ch (async/timeout 100)])))))))

(deftest error-propagates-test
  (is (thrown? #?(:clj Exception :cljs js/Error)
               (context/execute (context/enqueue {}
                                                 (tracer :a)
                                                 (tracer :b)
                                                 (thrower :c)
                                                 (tracer :d))))))

(deftest error-caught-test
  (is (= {::trace [[:enter :a]
                   [:enter :b]
                   [:enter :c]
                   [:enter :d]
                   [:enter :e]
                   [:error :c :from :f]
                   [:leave :b]
                   [:leave :a]]}
         (context/execute (context/enqueue {}
                                           (tracer :a)
                                           (tracer :b)
                                           (catcher :c)
                                           (tracer :d)
                                           (tracer :e)
                                           (thrower :f)
                                           (tracer :g))))))


