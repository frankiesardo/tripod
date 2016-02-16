(ns tripod.core
  (:require [tripod.route :as route]
            [tripod.router :as router]
            [tripod.path :as path]
            [tripod.chain :as chain]))

(defn expand-routes
  "Creates a route table out of terse routes"
  [routes]
  (when-not (vector? routes)
    (throw (ex-info "Invalid routes definition" {:routes routes})))
  (-> routes route/expand-terse-routes route/expand-verbose-routes route/verify-unique-route-names))

(defn path-for-routes
  "Given a route table returns a path-for function.
  A path-for function accepts a route name and optionally a params map and returns a path string"
  [routes]
  (let [r (into {} (map (juxt :route-name :path-parts) routes))]
    (fn path-for
      ([route-name] (path-for route-name {}))
      ([route-name params]
       (if-let [path-parts (get r route-name)]
         (path/path-str path-parts params)
         (throw (ex-info "Route not found" {:route-name route-name})))))))

(defn service
  "Given a service-map returns a handler function that accepts a request and returns a response"
  [{:keys [::interceptors] :as service-map}]
  (when-not interceptors
    (throw (ex-info "Initial interceptor queue cannot be empty" {:service-map service-map})))
  (let [context (chain/enqueue* {} interceptors)]
    (fn [request]
      (:response (chain/execute (assoc context :request request))))))



;; Defaults (TODO: better not-found logic)

(defn router-interceptor [{:keys [::router ::routes] :as service-map}]
  (let [router (or router (router/linear-search routes))]
    {:name  ::router
     :enter (fn [{:keys [request] :as context}]
              (when-not (:path-info request)
                (throw (ex-info "Request is missing path-info" {:request request})))
              (let [[{:keys [interceptors] :as route} req] (router/find-route router request)]
                (when-not route
                  (throw (ex-info "Router could not find a route for request"
                                  {:request request
                                   :reason :not-found})))
                (-> context
                    (assoc :request req)
                    (assoc :route route)
                    (chain/enqueue* interceptors))))}))


(comment
  (def logging-interceptor
    {:name  ::logging
     :enter (fn [{:keys [request] :as context}]
              (let [start-time 1]
                (log/trace 'serving)))
     :leave (fn [{:keys [response] :as context}])})

  (def catch-all-interceptor
    {:name  ::catch-all
     :error (fn [context ex]
              (assoc context :response {:exception (pr-str ex)}))})

  (defn dev-interceptors [service-map]
    (let [dev-interceptors [catch-all-interceptor]]
      (update service-map ::interceptors concat dev-interceptors))))

(defn default-interceptors [service-map]
  (let [default-interceptors [(router-interceptor service-map)]]
    (update service-map ::interceptors concat default-interceptors)))