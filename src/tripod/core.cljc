(ns tripod.core
  (:require [tripod.route]
            [tripod.router :as router]
            [tripod.path :as path]
            [tripod.interceptor :as interceptor]))

#?(:clj
   (defmacro defroutes [name routes]
     `(def ~name (tripod.route/expand-routes ~routes))))

#?(:clj
   (defmacro defhandler [n argv & body]
     (let [name (keyword (name (ns-name *ns*)) (name n))]
       `(def ~n
          {:name  ~name
           :enter (fn [context#]
                    (assoc context# :response ((fn ~argv ~@body) (:request context#))))}))))

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
  (let [context (interceptor/enqueue* {} interceptors)]
    (fn [request]
      (:response (interceptor/execute (assoc context :request request))))))

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
                    (interceptor/enqueue* interceptors))))}))


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