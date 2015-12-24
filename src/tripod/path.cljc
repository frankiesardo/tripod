(ns tripod.path
  (:require [clojure.string :as str]))

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

(defn path-str [path-parts params]
  (if (= [""] path-parts)
    "/"
    (str/join \/ (map #(get params % %) path-parts))))
