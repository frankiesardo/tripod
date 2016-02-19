(ns tripod.path
  (:require [clojure.string :as str]
            [clojure.set :as set]))

(defn- parse-path-token [out string]
  (condp re-matches string
    #"^:(.+)$" :>> (fn [[_ token]]
                     (let [key (keyword token)]
                       (-> out
                           (update-in [:path-parts] conj key)
                           (assoc-in [:path-constraints key] "([^/]+)"))))
    #"^\*(.+)$" :>> (fn [[_ token]]
                      (let [key (keyword token)]
                        (-> out
                            (update-in [:path-parts] conj key)
                            (assoc-in [:path-constraints key] "(.*)"))))
    (update-in out [:path-parts] conj string)))

(defn parse-path
  ([pattern] (parse-path {:path-parts [] :path-constraints {}} pattern))
  ([accumulated-info pattern]
   (if-let [m (re-matches #"/(.*)" pattern)]
     (let [[_ path] m]
       (reduce parse-path-token
               accumulated-info
               (str/split path #"/")))
     (throw (ex-info "Invalid route pattern" {:pattern pattern})))))

(def ^:private re-escape-chars
  (set "\\.*+|?()[]{}$^"))

(defn- re-quote [s]
  (reduce
    (fn [s c]
      (if (re-escape-chars c)
        (str s \\ c)
        (str s c))) "" s))

(defn path-regex [{:keys [path-parts path-constraints]}]
  (let [path-parts (if (and (> (count path-parts) 1)
                            (empty? (first path-parts)))
                     (rest path-parts)
                     path-parts)]
    (re-pattern
      (apply str
             (interleave (repeat "/")
                         (map #(or (get path-constraints %) (re-quote %))
                              path-parts))))))

(defn- uri-encode [s]
  #?(:clj (java.net.URLEncoder/encode s "UTF-8")
     :cljs (js/encodeURIComponent s)))

(defn path-str [path-parts params]
  (let [path-params (filter keyword? path-parts)
        query-map (not-empty (select-keys params (set/difference (set (keys params)) (set path-params))))
        path (str/join \/ (map #(get params % %) path-parts))
        path (str (when-not (str/starts-with? path "/") "/") path)]
    (if query-map
      (apply str path "?" (for [[k v] query-map] (str (name k) "=" (uri-encode v))))
      path)))

(defn path-for-routes
  "Given a route table returns a path-for function.
  A path-for function accepts a route name and optionally a params map and returns a path string"
  [routes]
  (let [linker-map (into {} (map (juxt :route-name :path-parts) routes))]
    (fn path-for [route-name & [params]]
      (if-let [path-parts (get linker-map route-name)]
        (path-str path-parts params)
        (throw (ex-info "Route not found" {:route-name route-name}))))))
