(ns tripod.path-test
  (:require #?(:clj [clojure.test :refer :all]
               :cljs [cljs.test :refer-macros [deftest testing is run-tests]])
                    [tripod.fixtures :as f]
                    [tripod.core :as tripod]
                    [tripod.path :as path]))

(deftest path-str-test
  (is (= (map :path f/paths-with-params)
         (for [{:keys [params path-parts]} f/paths-with-params]
           (path/path-str path-parts params)))))

(deftest path-for-test
  (let [path-for (tripod/path-for-routes f/route-table)]
    (is (= (map :path f/paths-with-params)
           (for [{:keys [params route-name]} f/paths-with-params]
             (path-for route-name params))))))