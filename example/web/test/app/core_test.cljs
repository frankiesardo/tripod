(ns app.core-test
  (:require [devcards.core :as dc :include-macros true :refer-macros [defcard deftest]]
            [cljs.test :as t :refer-macros [testing is]]
            [app.core :as core]))

(defcard
  "# This thows a basic usage of tripod
   Here is the same calculator being rendered as an Om application.
   ```
   (defcard om-support
     (dc/om-root om-bmi-component)
     {:height 180 :weight 80} ;; initial data
     {:inspect-data true :history true })
   ```
   ")

(deftest test-arithmetic
  (is (= (+ 0.1 0.2) 0.3) "Something foul is a float.")
  (is (map? {})))