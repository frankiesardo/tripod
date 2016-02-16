(ns tripod.interceptor-test
  (:require #?(:clj [clojure.test :refer :all]
               :cljs [cljs.test :refer-macros [deftest testing is are run-tests]])
                    [tripod.interceptor :as i]))

(defn my-handler [x] x)

(deftest interceptor-test
  (is (= (:name (i/interceptor #'my-handler)) (:name (i/interceptor {:name ::my-handler}))))
  (is (= (my-handler 'X) (:response ((:enter (i/interceptor my-handler)) {:request 'X})))))
