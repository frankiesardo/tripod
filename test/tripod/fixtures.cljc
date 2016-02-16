(ns tripod.fixtures
  (:require [tripod.interceptor :as i]))

(defn- mock [name]
  (i/map->Interceptor {:name name}))

(def foo (mock ::foo))
(def bar (mock ::bar))
(def home (mock ::home))
(def view-users (mock ::view-users))
(def check-user (mock ::check-user))
(def view-user (mock ::view-user))
(def edit-user (mock ::edit-user))
(def new-user (mock ::new-user))
(def view-stores (mock ::view-stores))
(def splat (mock ::splat))
(def path1-name (mock ::path1-name))
(def path1-age (mock ::path1-age))
(def path2-a (mock ::path2-a))
(def path2-b (mock ::path2-b))

(def terse-routes
  [["/" home ^:interceptors [foo bar]
    ["/users" view-users
     ["/new" new-user]
     ["/:id" view-user ^:interceptors [check-user]
      ["/edit" edit-user]]]
    ["/stores" view-stores]
    ["/sub/:x"
     ["/path1"
      ["/:name" ^:constraints {:name #"long|short"} path1-name]
      ["/:age" ^:constraints {:age #"[0-9]+"} path1-age]]
     ["/path2"
      ["/a" path2-a]
      ["/b" path2-b ^:constraints {:x #"\d+"}]]]
    ["/*splat" splat]]])

(def verbose-routes
  [{:path         "/"
    :handler      home
    :interceptors [foo bar]
    :children     [{:path     "/users"
                    :handler  view-users
                    :children [{:path    "/new"
                                :handler new-user}
                               {:path         "/:id"
                                :handler      view-user
                                :interceptors [check-user]
                                :children     [{:path    "/edit"
                                                :handler edit-user}]}]}
                   {:path    "/stores"
                    :handler view-stores}
                   {:path     "/sub/:x"
                    :children [{:path     "/path1"
                                :children [{:path        "/:name"
                                            :constraints {:name #"long|short"}
                                            :handler     path1-name}
                                           {:path        "/:age"
                                            :constraints {:age #"[0-9]+"}
                                            :handler     path1-age}]}
                               {:path     "/path2"
                                :children [{:path    "/a"
                                            :handler path2-a}
                                           {:path        "/b"
                                            :constraints {:x #"\d+"}
                                            :handler     path2-b}]}]}
                   {:path    "/*splat"
                    :handler splat}]}])

(def route-table
  [{:route-name       ::home
    :interceptors     [foo bar home]
    :path             "/"
    :path-parts       [""]
    :path-constraints {}}
   {:route-name       ::view-users
    :interceptors     [foo bar view-users]
    :path             "/users"
    :path-parts       ["" "users"]
    :path-constraints {}}
   {:route-name       ::new-user
    :interceptors     [foo bar new-user]
    :path             "/users/new"
    :path-parts       ["" "users" "new"]
    :path-constraints {}}
   {:route-name       ::view-user
    :interceptors     [foo bar check-user view-user]
    :path             "/users/:id"
    :path-parts       ["" "users" :id]
    :path-constraints {:id "([^/]+)"}}
   {:route-name       ::edit-user
    :interceptors     [foo bar check-user edit-user]
    :path             "/users/:id/edit"
    :path-parts       ["" "users" :id "edit"]
    :path-constraints {:id "([^/]+)"}}
   {:route-name       ::view-stores
    :interceptors     [foo bar view-stores]
    :path             "/stores"
    :path-parts       ["" "stores"]
    :path-constraints {}}
   {:interceptors     [foo bar path1-name]
    :path-parts       ["" "sub" :x "path1" :name]
    :path-constraints {:x "([^/]+)" :name "(long|short)"}
    :path             "/sub/:x/path1/:name"
    :route-name       ::path1-name}
   {:interceptors     [foo bar path1-age]
    :path-parts       ["" "sub" :x "path1" :age]
    :path-constraints {:x "([^/]+)" :age "([0-9]+)"}
    :path             "/sub/:x/path1/:age"
    :route-name       ::path1-age}
   {:interceptors     [foo bar path2-a]
    :path-parts       ["" "sub" :x "path2" "a"]
    :path-constraints {:x "([^/]+)"}
    :path             "/sub/:x/path2/a"
    :route-name       ::path2-a}
   {:interceptors     [foo bar path2-b]
    :path-parts       ["" "sub" :x "path2" "b"]
    :path-constraints {:x "(\\d+)"}
    :path             "/sub/:x/path2/b"
    :route-name       ::path2-b}
   {:route-name       ::splat
    :interceptors     [foo bar splat]
    :path             "/*splat"
    :path-parts       ["" :splat]
    :path-constraints {:splat "(.*)"}}])

(def paths-with-params
  (map
    (fn [route [path params]]
      (-> route
          (select-keys [:route-name :path-parts])
          (merge {:path   path
                  :params params})))
    route-table
    [["/" {}]
     ["/users" {}]
     ["/users/new" {}]
     ["/users/1" {:id "1"}]
     ["/users/10/edit" {:id "10"}]
     ["/stores" {}]
     ["/sub/abc/path1/long" {:x "abc" :name "long"}]
     ["/sub/abc/path1/00" {:x "abc" :age "00"}]
     ["/sub/20/path2/a" {:x "20"}]
     ["/sub/20/path2/b" {:x "20"}]
     ["/thing" {:splat "thing"}]]))