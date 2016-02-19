(ns tripod.core
  (:require #?(:clj [tripod.log :as log]
               :cljs [tripod.log :as log :include-macros true])
                    [tripod.route :as route]
                    [tripod.router :as router]
                    [tripod.path :as path]
                    [tripod.context :as context]))

(defn expand-routes
  "Creates a route table out of terse routes"
  [routes]
  (when-not (vector? routes)
    (throw (ex-info "Invalid routes definition" {:routes routes})))
  (-> routes route/expand-terse-routes route/expand-verbose-routes route/verify-unique-route-names))

(def ^:dynamic ^:private *path-for* nil)

(defn path-for [route-name & options]
  (if *path-for*
    (apply *path-for* route-name options)
    (throw (ex-info "*path-for* not bound" {:route-name route-name}))))

(defn service
  "Given a service-map returns a handler function that accepts a request and returns a response"
  [{:keys [::interceptors] :as service-map}]
  (when-not interceptors
    (throw (ex-info "Initial interceptor queue cannot be empty" {:service-map service-map})))
  (let [context (context/enqueue* {} interceptors)]
    (fn [request]
      (:response (context/execute (assoc context :request request))))))

;; Defaults

(defn router-interceptor [{:keys [::router ::routes] :as service-map}]
  (let [router (or router (router/linear-search routes))]
    {:name  ::router
     :enter (fn [{:keys [request] :as context}]
              (when-not (:uri request)
                (throw (ex-info "Request is missing the uri" {:request request})))
              (let [[{:keys [interceptors] :as route} req] (router/find-route router request)]
                (when-not route
                  (throw (ex-info "Router could not find a route for request"
                                  {:request request
                                   :reason  :not-found})))
                (-> context
                    (assoc :request req)
                    (assoc :route route)
                    (context/enqueue* interceptors))))}))

(defn linker-interceptor [{:keys [::routes] :as service-map}]
  (let [path-for (path/path-for-routes routes)]
    {:name  ::linker
     :enter (fn [context]
              #?(:cljs (set! *path-for* path-for))
              (-> context
                  (assoc-in [:bindings #'*path-for*] path-for)
                  (assoc-in [:request :path-for] path-for)))}))

(def logger-interceptor
  {:name  ::logger
   :enter (fn [context]
            (log/info :uri (get-in context [:request :uri]))
            context)})

(defn default-interceptors [service-map]
  (let [default-interceptors [logger-interceptor
                              (router-interceptor service-map)
                              (linker-interceptor service-map)]]
    (update service-map ::interceptors concat default-interceptors)))


(comment
  (def catch-all-interceptor
    {:name  ::catch-all
     :error (fn [context ex]
              (assoc context :response {:exception (pr-str ex)}))})

  (defn dev-interceptors [service-map]
    (let [dev-interceptors [catch-all-interceptor]]
      (update service-map ::interceptors concat dev-interceptors))))