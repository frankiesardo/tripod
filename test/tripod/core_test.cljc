(ns tripod.core-test
  (:require [tripod.core :as tripod]
    #?(:clj  [clojure.test :refer :all]
       :cljs [cljs.test :refer-macros [deftest testing is run-tests]])))

(defn foo [_] ::foo)

(defn bar [_] ::bar)

(def routes
  (tripod/expand-routes
    [["/" #'foo
      ["/bar" #'bar]]]))

(def not-found
  {:name  ::not-found
   :error (fn [context ex]
            (when-not (-> ex ex-data :reason #{:not-found})
              (throw (:exception ex)))
            (assoc context :response ::not-found))})

(def service
  (-> {::tripod/routes       routes
       ::tripod/interceptors [not-found]}
      tripod/default-interceptors
      tripod/service))

(deftest simple
  (is (= ::foo (service {:uri "/"})))
  (is (= ::bar (service {:uri "/bar"})))
  (is (= ::not-found (service {:uri "/baz"}))))