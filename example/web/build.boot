(set-env!
 :source-paths    #{"src"}
 :resource-paths  #{"resources"}
 :dependencies
 '[[org.clojure/clojurescript "1.7.122"]
   [org.omcljs/om "1.0.0-alpha22"
    :exclusions [org.clojure/clojure org.clojure/clojurescript]]
   [devcards "0.2.1"
    :exclusions [org.clojure/clojure org.clojure/clojurescript
                 org.clojure/tools.reader cljsjs/react cljsjs/react-dom]]
   [tripod "0.1.0-SNAPSHOT"]

   [adzerk/boot-cljs          "1.7.48-6"   :scope "test"]
   [adzerk/boot-cljs-repl     "0.2.0"      :scope "test"]
   [adzerk/boot-reload        "0.4.1"      :scope "test"]
   [pandeiro/boot-http        "0.6.3"      :scope "test"]
   [crisptrutski/boot-cljs-test "0.2.0-SNAPSHOT" :scope "test"]])

(require
 '[adzerk.boot-cljs      :refer [cljs]]
 '[adzerk.boot-cljs-repl :refer [cljs-repl start-repl]]
 '[adzerk.boot-reload    :refer [reload]]
 '[pandeiro.boot-http    :refer [serve]]
 '[crisptrutski.boot-cljs-test :refer [test-cljs]])

(task-options!
 test-cljs {:js-env :phantom})

(deftask build []
  (comp (cljs)))

(deftask run []
  (comp (serve)
        (watch)
        (checkout :dependencies '[[tripod "0.1.0-SNAPSHOT"]])
        (cljs-repl)
        (reload)
        (speak)
        (build)))

(deftask production []
  (task-options! cljs {:optimizations :advanced})
  identity)

(deftask development []
  #_(set-env! :source-paths #(into % #{"test"})
            :resource-paths #(into % #{"devcards"}))
  (task-options! cljs   {:optimizations :none :source-map true}
                 reload {:on-jsload 'app.core/reload})
  identity)

(deftask dev
  "Simple alias to run application in development mode"
  []
  (comp (development)
        (run)))

(deftask testing []
  (set-env! :source-paths #(into % #{"test"}))
  identity)

(ns-unmap 'boot.user 'test)

(deftask test []
  (comp (testing)
        (test-cljs :exit?  true)))

(deftask autotest []
  (comp (testing)
        (watch)
        (test-cljs)))

(deftask deploy []
  (println "I'm not implemented yet")
  identity
  )
