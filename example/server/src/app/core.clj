(ns app.core
  (:require [ring.middleware.defaults :refer :all]
            [ring.middleware.json :refer :all]
            [tripod.core :as tripod :refer [defroutes defhandler]]))

(defhandler home [req]
  {:status 200 :body {:message "Home"}})

(defhandler away [req]
  {:status 200 :body {:message "Away"}})

(defhandler not-found [req]
  {:status 200 :body {:message "Not here"}})

(defroutes routes
  [["/" home]
   ["/away" away]
   ["/*not-found" not-found]])

(def service
  (-> {::tripod/routes routes}
      tripod/default-interceptors
      tripod/service))

(defn wrap-path-info [handler]
      (fn [request]
          (handler
            (if (:uri request)
              request
              (assoc request :uri (:uri request))))))

(def handler
  (-> service
      (wrap-path-info)
      (wrap-json-response)
      (wrap-json-body)
      (wrap-defaults api-defaults)))
