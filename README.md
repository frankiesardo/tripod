# Tripod

Tripod borrows _(read: shamelessly copy)_ the interceptor chain abstraction and delivers it as a self contained routing library.

## How does it look like

```clj
(require '[tripod.core :as tripod :refer [defroutes defhandler])

(defhandler home [request]
 {:status 200 :body "I'm home"})

(defhandler profile [request]
 {:status 200 :body "Your profile info"})

(defroutes routes
  [["/" home
     ["/user/:id" user]])

(def service
  (-> {::tripod/routes routes}
      tripod/default-interceptors
      tripod/service))

(def ring-handler
  (-> service wrap-middleware-1 wrap-middleware-2 ...)))

```

Or have a look at a complete example for [ClojureScript](https://github.com/frankiesardo/tripod/blob/master/example/web/src/app/core.cljs) or [Ring](https://github.com/frankiesardo/tripod/blob/master/example/server/src/app/core.clj)

## Why should you care

Because route as data and execution flow as data is a fantastic way of dealing with complexity.

TODO: write convincing stories here.

## Differences from pedestal

- No verbs (get, post etc.). A route table maps a path to a handler.
If using with Ring, it's up to you to define a handler that deals with potentially multiple verbs.
In ClojureScript verbs make no sense so a handler is called

- ClojureScript support.
A handler function must return a context with a response but since this is no http it's up to you how you want to model your routing logic.
You can go 100% side effects and swap! and atom inside your handler.
Or you can go 100% pure and return a response with something like `{:page :user :info {:name "X" ..}}` and deal with side effects after the dispatch returns.

- Route table is fully evaluated. This means no 'fancy' way of building interceptors.
Just create them manually and place them in the route table.

- No async. Could be implemented separately but this is out of scope for the moment.


## Roadmap

- More descriptive errors (if you mess up some data structure at the moment you might get some very incomprehensible errors.)

- Wiki and docs

- Core.match for exceptions

- Share a routing builder library with pedestal maybe?
