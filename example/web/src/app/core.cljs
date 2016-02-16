(ns app.core
  (:require [om.core :as om :include-macros true]
            [om.dom :as dom]
            [tripod.core :as tripod :refer-macros [defroutes defhandler]]
            [goog.events :as events])
  (:import goog.History
           goog.history.EventType))

(enable-console-print!)
(set! tripod.log/*logfn* println)

(defhandler home [req] ::home)

(defhandler away [req] ::away)

(defroutes routes
  [["/" home]
   ["/away" away]])

(def not-found
  {:name  ::not-found
   :error (fn [context ex]
            (when-not (-> ex ex-data :reason #{:not-found})
              (throw (:exception ex)))
            (set! js/window.location.hash "/")
            (assoc context :response ::not-found))})

(def service
  (-> {::tripod/routes routes
       ::tripod/interceptors [not-found]}
      tripod/default-interceptors
      tripod/service))

(let [pf (tripod/path-for-routes routes)]
  (defn path-for [route]
    (str "#" (pf route))))

(def app-state (atom {:text "HI"}))

(defmulti page (fn [data owner] (:page data)))

(defmethod page :default [data owner]
  (om/component (dom/p nil "Nothing else found")))

(defmethod page ::home [data owner]
  (om/component (dom/a #js {:href (path-for ::away)} "I'm at home. Go away")))

(defmethod page ::away [data owner]
  (om/component (dom/a #js {:href (path-for ::home)} "I'm away. Go home")))

(defn root [data owner]
  (om/component (om/build page data)))

(defn init []
  (let [h (History.)]
    (events/listen h EventType.NAVIGATE
                   #(swap! app-state assoc :page (service {:uri (.-token %)})))
    (doto h
      (.setEnabled true)))
  (om/root root app-state
           {:target (.getElementById js/document "container")}))

(defn reload []
  (println 'RELOADED))
