(set-env!
 :source-paths    #{"src"}
 :resource-paths  #{"resources"}
 :dependencies
 '[[tripod "0.1.0-SNAPSHOT"]
   [ring/ring-defaults "0.1.5"]
   [ring/ring-json "0.4.0"]
   [pandeiro/boot-http "0.7.1-SNAPSHOT" :scope "test"]])

(require '[pandeiro.boot-http :as http])

(deftask dev []
  (comp (http/serve :port 8080 :handler 'app.core/handler) (watch)))

