(ns app.advanced
  (:require [om.core :as om :include-macros true]
            [om.dom :as dom]
            [tripod.core :as tripod]
            [goog.events :as events])
  (:import goog.History
           goog.history.EventType))

(set! tripod.log/*logfn* (fn [ns level & args] (when (= :info level)
                                                 (apply println ns args))))

(defn home [req] ::home)

(defn away [req] ::away)

(defn not-found [req] ::not-found)

(def routes
  (tripod/expand-routes
    [["/" #'home]
     ["/away" #'away]
     ["/*not-found" #'not-found]]))

(def service
  (-> {::tripod/routes routes}
      tripod/default-interceptors
      tripod/service))

(def app-state (atom {:text "HI"}))

(defmulti page (fn [data owner] (:page data)))

(defmethod page :default [data owner]
  (om/component (dom/p nil "Nothing else found")))

(defmethod page ::home [data owner]
  (om/component (dom/a #js {:href (str "#" (tripod/path-for ::away))} "I'm at home. Go away")))

(defmethod page ::away [data owner]
  (om/component (dom/a #js {:href (str "#" (tripod/path-for ::home))} "I'm away. Go home")))

(defn root [data owner]
  (om/component (om/build page data)))

(defn init []
  (let [h (History.)]
    (events/listen h EventType.NAVIGATE
                   #(if-let [token (not-empty (.-token %))]
                     (swap! app-state assoc :page (service {:uri token}))
                     (set! js/window.location.hash "/")))
    (doto h
      (.setEnabled true)))
  (om/root root app-state
           {:target (.getElementById js/document "container")}))

(defn reload []
  (println 'RELOADED))
