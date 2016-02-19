(ns app.core
    (:require [ring.middleware.defaults :refer :all]
              [ring.middleware.json :refer :all]
              [tripod.core :as tripod]))

(defn home [req]
  {:status 200 :body {:message "Home"}})

(defn away [req]
  {:status 200 :body {:message (format "Away. Here's home with some extra params %s" (tripod/path-for ::home {:foo "bar"}))}})

(defn not-found [req]
  {:status 200 :body {:message (format "Not here, try %s" (tripod/path-for ::away))}})

(def routes
  (tripod/expand-routes
    [["/" home
      ["/away" away]
      ["/*not-found" not-found]]]))

(def service
  (-> {::tripod/routes routes}
      tripod/default-interceptors
      tripod/service))

(def handler
  (-> service
      (wrap-json-response)
      (wrap-json-body)
      (wrap-defaults api-defaults)))
