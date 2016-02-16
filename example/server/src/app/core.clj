(ns app.core
  (:require [ring.middleware.defaults :refer :all]
            [ring.middleware.json :refer :all]
            [tripod.core :as tripod]))

(defn home [req]
  {:status 200 :body {:message "Home"}})

(defn away [req]
  {:status 200 :body {:message "Away"}})

(defn not-found [req]
  {:status 200 :body {:message "Not here"}})

(def routes
  (tripod/expand-routes
    [["/" #'home]
     ["/away" #'away]
     ["/*not-found" #'not-found]]))

(def service
  (-> {::tripod/routes routes}
      tripod/default-interceptors
      tripod/service))

(def handler
  (-> service
      (wrap-json-response)
      (wrap-json-body)
      (wrap-defaults api-defaults)))
