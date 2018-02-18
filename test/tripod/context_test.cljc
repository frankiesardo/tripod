(ns tripod.context-test
  (:require #?(:clj [clojure.test :refer :all]
               :cljs [cljs.test :refer-macros [deftest testing is run-tests]])
            #?(:clj [clojure.core.async :as async :refer [go <!]]
               :cljs [cljs.core.async :as async :refer [<!] :refer-macros [go]])
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

(defn asyncer [name]
  (assoc (tracer name)
    :enter (fn [ctx] (go
                       (<! (async/timeout 500))
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

(comment
  (context/execute (context/enqueue {}
                                    (tracer :a)
                                    (asyncer :b)
                                    (asyncer :c)
                                    {:name :print
                                     :enter (fn [ctx] (println "i'm here!"
                                                               (:c ctx)
                                                               (:b ctx)))})))

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


