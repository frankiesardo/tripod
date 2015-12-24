(set-env!
 :source-paths   #{"src"}
 :resource-paths #{"resources"}
 :dependencies
 '[[org.clojure/clojure         "1.7.0"      :scope "test"]
   [org.clojure/clojurescript   "1.7.170"    :scope "test"]
   [adzerk/boot-cljs            "1.7.170-3"  :scope "test"]
   [crisptrutski/boot-cljs-test "0.2.0-SNAPSHOT" :scope "test"]])

(require
 '[adzerk.boot-cljs      :refer [cljs]]
 '[crisptrutski.boot-cljs-test :refer [test-cljs]])

(deftask testing []
  (set-env! :source-paths #(conj % "test"))
  (task-options! test-cljs :js-env :phantom)
  identity)

(ns-unmap 'boot.user 'test)

(deftask test []
  (comp (testing)
        (test-cljs :exit?  true)))

(deftask autotest []
  (comp (testing)
        (watch)
        (test-cljs)))

