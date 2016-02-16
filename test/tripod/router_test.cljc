(ns tripod.router-test
  (:require #?(:clj [clojure.test :refer :all]
               :cljs [cljs.test :refer-macros [deftest testing is run-tests]])
                    [tripod.fixtures :as f]
                    [tripod.router :as router]))

(deftest linear-search-test
  (let [router (router/linear-search f/route-table)]
    (is (= (map (juxt :route-name :params) f/paths-with-params)
           (for [{:keys [path]} f/paths-with-params]
             (let [[{:keys [route-name]} {:keys [path-params]}] (router/find-route router {:uri path})]
               [route-name path-params]))))))