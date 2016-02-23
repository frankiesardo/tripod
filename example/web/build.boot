(set-env!
 :source-paths    #{"src"}
 :resource-paths  #{"resources"}
 :dependencies
 '[[org.clojure/clojurescript "1.7.122"]
   [org.omcljs/om "1.0.0-alpha22"
    :exclusions [org.clojure/clojure org.clojure/clojurescript]]
   [sablono "0.6.2"]
   [frankiesardo/tripod "0.2.0"]

   [adzerk/boot-cljs          "1.7.48-6"   :scope "test"]
   [adzerk/boot-cljs-repl     "0.2.0"      :scope "test"]
   [adzerk/boot-reload        "0.4.1"      :scope "test"]
   [pandeiro/boot-http        "0.6.3"      :scope "test"]])

(require
 '[adzerk.boot-cljs      :refer [cljs]]
 '[adzerk.boot-cljs-repl :refer [cljs-repl start-repl]]
 '[adzerk.boot-reload    :refer [reload]]
 '[pandeiro.boot-http    :refer [serve]])

(deftask build []
  (comp (cljs)))

(deftask run []
  (comp (serve)
        (watch)
        (cljs-repl)
        (reload)
        (speak)
        (build)))

(deftask development []
  (task-options! cljs   {:optimizations :none :source-map true})
  identity)

(deftask dev
  "Simple alias to run application in development mode"
  []
  (comp (development)
        (run)))