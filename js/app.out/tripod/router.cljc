(ns tripod.router
  (:require [tripod.path :as path]))

(defprotocol Router
  (find-route [this req]))

;; =============================================
;; Linear search

(defn- path-matcher [{:keys [path-parts] :as route}]
  (let [path-params (filter keyword? path-parts)
        path-re (path/path-regex route)]
    (fn [{:keys [uri] :as req}]
      (when-let [m (re-matches path-re uri)]
        (zipmap path-params (rest m))))))

(defn linear-search
  "Given a sequence of routes, return a linear search router.
  Matches the :uri key inside the request qith the paths in the route table"
  [routes]
  (let [matcher-routes (map #(assoc % :matcher (path-matcher %)) routes)]
    (reify
      Router
      (find-route [this req]
        (some (fn [{:keys [matcher] :as route}]
                (when-let [path-params (matcher req)]
                  [(dissoc route :matcher) (assoc req :path-params path-params)]))
              matcher-routes)))))