(ns tripod.route
  (:require [tripod.path :as path]
            [tripod.interceptor :as i]))

(defn- capture-constraints [m]
  (into {} (for [[k v] m] [k (str "(" (#?(:clj .toString :cljs .-source) v) ")")])))

(defn- update-dna [{parent-path :path :as parent-dna} {:keys [constraints interceptors path]}]
  (cond-> parent-dna
          path (path/parse-path path)
          ;; special case case where parent-path is "/" so we don't have double "//"
          path (assoc :path (str (if (and parent-path (= \/ (last parent-path)))
                                   (subs parent-path 0 (dec (count parent-path))) parent-path)
                                 path))
          constraints (update :path-constraints merge (capture-constraints constraints))
          interceptors (update :interceptors into interceptors)))

(def ^:private default-dna
  {:interceptors     []
   :path-parts       [#?(:cljs "")]
   :path-constraints {}})

(defn verify-unique-route-names
  "Each handler produces a route name and all of them must be unique"
  [route-table]
  (let [non-unique-names (->> route-table
                              (group-by :route-name)
                              (map (fn [[k v]] [k (count v)]))
                              (filter (fn [[_ v]] (> v 1)))
                              (map first))]
    (when (seq non-unique-names)
      (throw (ex-info "Route names are not unique"
                      {:non-unique-names non-unique-names})))
    route-table))

(defn expand-verbose-routes
  "Convert verbose routes to a route table"
  ([routes] (expand-verbose-routes routes default-dna))
  ([routes accumulated-dna]
   (apply concat
          (for [{:keys [handler children] :as node} routes]
            (let [dna (update-dna accumulated-dna node)]
              (cond->> (expand-verbose-routes children dna)
                       handler (cons (-> dna
                                         (assoc :route-name (:name handler))
                                         (update :interceptors into [handler])))))))))

(defn expand-terse-routes
  "Convert terse routes to verbose routes"
  [routes]
  (for [[path & more] routes]
    (let [vectors (filter vector? more)
          non-vectors (filter (complement vector?) more)
          interceptors (not-empty (apply concat (filter (comp :interceptors meta) vectors)))
          children (not-empty (filter (comp not :interceptors meta) vectors))
          constraints (not-empty (apply merge (filter (comp :constraints meta) non-vectors)))
          handler (first (filter (comp not :constraints meta) non-vectors))]
      (cond-> {:path path}
              handler (assoc :handler (i/interceptor handler))
              interceptors (assoc :interceptors (vec interceptors))
              constraints (assoc :constraints constraints)
              children (assoc :children (expand-terse-routes children))))))