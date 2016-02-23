(ns app.core
  (:require [om.core :as om :include-macros true]
            [sablono.core :refer-macros [html]]
            [tripod.core :as tripod]
            [goog.events :as events])
  (:import goog.History
           goog.history.EventType))

(enable-console-print!)

(def db
  (atom {:artists  {1 {:id   1
                       :name "Goya"}
                    2 {:id   2
                       :name "Velasquez"}}
         :artworks {1 {:id   1
                       :name "La maja desnuda"}
                    2 {:id   2
                       :name "Las meninas"}}}))

(def app-state (atom {}))

(defn home [req]
  {:page  ::home
   :title "Tripod demo"})

(defn login [req]
  {:page  ::login
   :title "Login"})

(defn artist-list [req]
  {:page  ::artist-list
   :title "Artists"})

(defn artist-detail [{:keys [::id]}]
  {:page  ::artist-detail
   :title (get-in @db [:artists id :name])
   :id    id})

(defn artist-edit [{:keys [::id]}]
  {:page  ::artist-edit
   :title (str "Edit " (get-in @db [:artists id :name]))
   :id    id})

(defn artwork-list [req]
  {:page  ::artwork-list
   :title "Artworks"})

(defn artwork-detail [{:keys [::id]}]
  {:page  ::artwork-detail
   :title (get-in @db [:artworks id :name])
   :id    id})

(defn artwork-edit [{:keys [::id]}]
  {:page  ::artwork-edit
   :title (str "Edit " (get-in @db [:artworks id :name]))
   :id    id})

(defn admin [req]
  {:page  ::admin
   :title "Private section"})

(def id->int
  {:name  ::id->int
   :enter (fn [context]
            (update context :request assoc ::id
                    (js/parseInt (get-in context [:request :path-params :id]))))})

(def private
  {:name  ::private
   :enter (fn [context]
            (if (-> @app-state :auth?)
              context
              (-> context tripod.context/terminate (assoc :response {:page  ::unauthorised
                                                                     :title "Unauthorised"}))))})

(def routes
  (tripod/expand-routes
    [["/" #'home
      ["/artists" #'artist-list
       ["/:id" ^:interceptors [id->int] #'artist-detail
        ["/edit" #'artist-edit]]]
      ["/artworks" #'artwork-list
       ["/:id" ^:interceptors [id->int] #'artwork-detail
        ["/edit" #'artwork-edit]]]
      ["/admin" ^:interceptors [private] #'admin]
      ["/login" #'login]]]))

(def service
  (-> {::tripod/routes routes}
      tripod/default-interceptors
      tripod/service))

(defn link [route-name & [params]]
  (str "#" (tripod/path-for route-name params)))

(defmulti content (fn [data owner] (get-in data [:page])))

(defmethod content :default [data owner]
  (om/component (html [:div "Not found"])))

(defmethod content ::home [data owner]
  (om/component (html [:div "Click around, have fun"])))

(defmethod content ::login [data owner]
  (om/component (html [:div
                       [:div "Click the button below to authorise, then you can navigate back to /admin"]
                       [:button {:on-click #(swap! app-state assoc :auth? true)} "Login!"]])))

(defmethod content ::unauthorised [data owner]
  (om/component (html [:a {:href (link ::login)} "Go to the login page"])))

(defmethod content ::admin [data owner]
  (om/component (html [:div "You're viewing protected content here"])))

(defmethod content ::artist-list [data owner]
  (om/component (html [:ul (for [{:keys [id name]} (-> db deref :artists vals)]
                             [:li {:key id}
                              [:a {:href (link ::artist-detail {:id id})} name]])])))

(defmethod content ::artist-detail [data owner]
  (om/component (html [:div "Browse this artist selected works on Google"])))

(defmethod content ::artwork-list [data owner]
  (om/component (html [:ul (for [{:keys [id name]} (-> db deref :artworks vals)]
                             [:li {:key id}
                              [:a {:href (link ::artwork-detail {:id id})} name]])])))

(defmethod content ::artwork-detail [data owner]
  (om/component (html [:div "View this artwork on high resolution on Google"])))

(def sections
  [["Home" ::home]
   ["Artists" ::artist-list]
   ["Artworks" ::artwork-list]
   ["Admin" ::admin]])

(defn menu [data owner]
  (om/component
    (html
      [:ul (for [[title route] sections
                 :let [active? (= route (:page data))]]
             [:li {:key route}
              [:a {:class (if active? "active" "inactive")
                   :href  (link route)} title]])])))

(defn root [data owner]
  (om/component
    (html
      [:div
       [:div.menu
        (om/build menu data)]
       [:div.content
        [:h3 (:title data)]
        (om/build content data)]])))

(defn -main []
  (let [h (History.)]
    (events/listen h EventType.NAVIGATE
                   #(if-let [token (not-empty (.-token %))]
                     (let [response (service {:uri token})]
                       (println 'Response response)
                       (swap! app-state merge response))
                     (set! js/window.location.hash "/")))
    (doto h
      (.setEnabled true)))
  (om/root root app-state
           {:target (.getElementById js/document "container")}))
