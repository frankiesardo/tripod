(ns tripod.route-test
  (:require #?(:clj [clojure.test :refer :all]
               :cljs [cljs.test :refer-macros [deftest testing is run-tests]])
                    [tripod.fixtures :as f]
                    [clojure.walk :as walk]
                    [tripod.core :as tripod]
                    [tripod.route :as route]))

(def ^:private re? #?(:clj (partial instance? java.util.regex.Pattern) :cljs regexp?))

(defn- wrap-regex [m]
  (let [f (fn [[k v]] (if (re? v) [k (str v)] [k v]))]
    (walk/postwalk (fn [x] (if (map? x) (into {} (map f x)) x)) m)))

(deftest terse-routes-test
  (is (= (wrap-regex f/verbose-routes)
         (wrap-regex (route/expand-terse-routes f/terse-routes)))))

(deftest verbose-routes-test
  (is (= f/route-table (route/expand-verbose-routes f/verbose-routes))))

(deftest routes-test
  (is (= f/route-table (route/expand-routes f/terse-routes)))
  (is (thrown? #?(:clj Exception :cljs js/Error) (route/expand-routes :unexpected-input))))

