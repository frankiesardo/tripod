(ns tripod.core-test
  (:require #?(:clj  [clojure.test :refer :all]
               :cljs [cljs.test :refer-macros [deftest testing is run-tests]])
            #?(:clj  [tripod.core :as tripod :refer [defroutes defhandler]]
               :cljs [tripod.core :as tripod :refer-macros [defroutes defhandler]])))

(defhandler foo [req] ::foo)

(defhandler bar [req] ::bar)

(defroutes routes
  [["/" foo
     ["/bar" bar]]])

(def not-found
  {:name  ::not-found
   :error (fn [context ex]
            (when-not (-> ex ex-data :reason #{:not-found})
              (throw (:exception ex)))
            (assoc context :response ::not-found))})

(def service
  (-> {::tripod/routes routes
       ::tripod/interceptors [not-found]}
      tripod/default-interceptors
      tripod/service))

(deftest simple
  (is (= ::foo (service {:path-info "/"})))
  (is (= ::bar (service {:path-info "/bar"})))
  (is (= ::not-found (service {:path-info "/baz"}))))