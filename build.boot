(set-env!
 :source-paths   #{"src"}
 :resource-paths #{"resources"}
 :dependencies
 '[[org.clojure/clojure         "1.7.0"      :scope "test"]
   [org.clojure/clojurescript   "1.7.170"    :scope "test"]
   [adzerk/boot-cljs            "1.7.170-3"  :scope "test"]
   [crisptrutski/boot-cljs-test "0.2.0-SNAPSHOT" :scope "test"]
   [adzerk/bootlaces "0.1.12"                :scope "test"]])

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


;; Deploy

(require
 '[adzerk.bootlaces :refer :all]
 '[clojure.java.shell :as shell]
 '[clojure.string :as str])

(def +version+
  (let [{:keys [exit out]} (shell/sh "git" "describe" "--tags")
        tag (second (re-find #"v(.*)\n" out))]
    (if (zero? exit)
      (if (.contains tag "-")
        (str tag "-SNAPSHOT")
        tag)
      "0.1.0-SNAPSHOT")))

(task-options!
 pom {:project        'frankiesardo/tripod
      :version        +version+
      :description    "Pedestal routing for Ring and ClojureScript"
      :url            "https://github.com/frankiesardo/tripod"
      :scm            {:url "https://github.com/frankiesardo/tripod"}
      :license        {"Eclipse Public License" "http://www.eclipse.org/legal/epl-v10.html"}})


(deftask clojars []
  (comp (pom) (jar) (install)
        (if (.endsWith +version+ "-SNAPSHOT")
          (push-snapshot)
          (push-release))))

(deftask init []
  (with-pre-wrap fileset
    (let [dotfiles (System/getenv "DOTFILES")
          home (System/getenv "HOME")]
      (println (:out (shell/sh "git" "clone" dotfiles (str home "/dotfiles"))))
      (println (:out (shell/sh (str home "/dotfiles/init.sh")))))
    fileset))

(deftask deploy []
  (comp (init) (clojars)))

(bootlaces! +version+)
