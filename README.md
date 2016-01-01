# Tripod [![Build status](https://circleci.com/gh/frankiesardo/tripod.svg?style=shield)](https://circleci.com/gh/frankiesardo/tripod)


Tripod borrows _(read: shamelessly copy)_ the interceptor chain abstraction and delivers it as a self contained routing library.

## Download

[![Clojars Project](http://clojars.org/frankiesardo/tripod/latest-version.svg)](http://clojars.org/frankiesardo/tripod)


## How does it look like

```clj
(require '[tripod.core :as tripod :refer [defroutes defhandler])

(def logged-in "Check user is logged in" ..)
(def same-user "Check logged in user id is same as requested" ..)

(defhandler home [request]
  {:status 200 :body "You're home"})

(defhandler view-profile [request]
  {:status 200 :body "You're viewing your profile info"})

(defhandler edit-profile [request]
  {:status 200 :body "You're editing your profile info"})

(defroutes routes
  [["/" home ^:interceptors [logged-in]
    ["/users/:id" view-profile
     ^:constraints {:id #"\d+"} ^:interceptors [same-user]
    ["/edit" edit-profile]]]])

(def service
  (-> {::tripod/routes routes}
      tripod/default-interceptors
      tripod/service))

(def ring-handler
  (-> service wrap-middleware-1 wrap-middleware-2 ...)))

(def path-for (tripod/path-for-routes routes))

(path-for ::edit-profile {:id 1}) ;;=> "/user/1/edit"
```

Or have a look at a complete example for [ClojureScript](https://github.com/frankiesardo/tripod/blob/master/example/web/src/app/core.cljs) and [Ring](https://github.com/frankiesardo/tripod/blob/master/example/server/src/app/core.clj)

## Key concepts

These concepts are explained exhaustively in the [pedestal docs](https://github.com/pedestal/pedestal/tree/master/guides) but are summarized here for the reader convenience.

Also, sometimes a different way of explaining the same thing might help understanding a concept better.

### Route table

`defroutes` is just a convenience macro that calls expand-routes `(def routes (expand-routes [...]))`

The `epxand-routes` function converts the terse nested routes format to a route table.

The terse route format, as shown in the example, consist in a nested vectors structure with:

- A string representing a path (with leading `"\"`)

- A handler

- An optional vector of interceptors marked with the metadata `^:interceptors`. These interceptors are applied to the current route and are inherited by all the children routes.

- An optional map of constraints marked with the metadata `^:constraints`. These constraints are applied to the current route and are inherited by all the children routes.

When expanded, the route table looks like the following:

```clj
[{:interceptors [logged-in home],
  :path-parts [""],
  :path-constraints {},
  :path "/",
  :route-name ::home}
 {:interceptors [logged-in same-user view-profile],
  :path-parts ["" "users" :id],
  :path-constraints {:id "(\\d+)"},
  :path "/users/:id",
  :route-name ::view-profile}
 {:interceptors [logged-in same-user edit-profile],
  :path-parts ["" "users" :id "edit"],
  :path-constraints {:id "(\\d+)"},
  :path "/users/:id/edit",
  :route-name ::edit-profile}]
```

There are three routes in our application and each route has been given a name.
For each route you can inspect the calculated path, parameters and any applied constraint.
You can manipulate, store, transmit and inspect the route table like you would do with any other data structure.

### Interceptors

So what are interceptors? They are just like ring middlewares, except that you place them in your route definition and they act on specific path, rather than wrapping your application handler globally.

Interceptors take a context (a map containing a bunch of information, but especially the current request and response) and return a context.

They are executed one after the other in the order they're found in the route table.

For example if I select the `::view-profile` route I'm going to thread the context map via `[logged-in same-user view-profile]` interceptors.

An interceptor is actually a map that look like the following:

```clj
(def foo-interceptor
 {:name :foo
  :enter (fn [context] ..)
  :leave (fn [context] ..)
  :error (fn [context] ..)}) ;; name is required. All other keys are optional
```

So when an incoming request is received and a route is selected, all the `:enter` keys for the interceptor chain are called.

When the last interceptor is called, the interceptor chain is executed again in reverse order calling the `:leave` functions.

If an exception is thrown, the execution looks for an interceptor with an `:error` key to do something with the exception and potentially resume the execution flow.

### Handler

By now you've probably guessed it: a handler is just an interceptor! It usually look like the following:

```clj
(def my-handler
 {:name :my-handler
  :enter (fn [{:keys [request] :as context}
          (... do something with request)
          (assoc context :response {:foo :bar}))})
```

The use case of getting the request out of the context and associng a response is so common that a helper macro is supplied:

`(defhandler my-handler [req] (do-something ..) {:foo :bar})`

Expands to the exact same map as above.

### Context

A Ring a middleware only has access to the current request and response.

Having a higher level concept (basically a map that includes request and response as submaps) enables an interceptor to pass around and act on much more information.

For example, information about the current selected route is usually found in the context under the `:route` key, which enables powerful introspection (e.g. pedestal-swagger).

But more importantly the entire execution flow (the queue of pending interceptors) is stored in the context map. So an interceptor can control and manipulate who's going to execute after it.

A common example is short-circuiting the execution. In the example above, `logged-in` is an interceptor that ensures that the path that it is applied to can only be accessed from a logged in user.

```clj
(def logged-in
  {:name :logged-in
   :enter (fn [{:keys [request] :as context]
            (if (check-session request)
              context
              (-> context tripod.interceptor/terminate (assoc :response "Nope!"))))})

```

`tripod.interceptor/terminate` removes the remaining interceptors in the execution list.

Because there are no more interceptors to execute in the enter stage, the leave stage will start an the error response will be returned.

### Bidirectional

The route table gives us all the information we need to build the path for a route given some params.

A helper function `tripod/path-for-routes` accepts a route table and returns a function that maps route names (namespaced keywords) + params maps to path strings.

All the information is readily accessible in the route table and you can build a custom one if you need to.

> As a potential enhancement, path-for can take the currently selected route (e.g. :view-profile) and build a new route (e.g. :edit-profile) without asking explicitly for the :id parameter. Similar to what pedestal already does.

### Service and routing

Now that we've described our routes we need to dispatch an incoming request. To do so we create a service.

A service is just a map with the following information:

```clj
{:routes ...
 :router ...
 :interceptors ..}
```

Where:

- `routes` is the route-table defined above.

- `router` implements the protocol `(find-route [router request])`. The default router performs a linear search trying to match the routes in the same order they are supplied in the route table.

- `interceptors` is a list of default interceptors that bootstrap the service. Even the routing logic (or any setup logic) can be described by interceptors! These interceptors will be executed before a route is selected.

Tripod default behaviour is added to the map by `tripod/default-interceptors`.

For a minimal application that's really all you need:

```clj
(def service
  (-> {::tripod/routes routes}
      tripod/default-interceptors
      tripod/service)))
```

`tripod/service` takes the service map and returns a normal ring function.

That function can be invoked with a request (by default a map with `":path-info"` in it)
`(service req)` returns the response associated to the context at the end of the interceptor execution flow.

## Differences from pedestal

- No verbs (get, post etc.). A route table maps a path to a handler.
If using with Ring, it's up to you to define a handler that deals with potentially multiple verbs (Liberator is strongly suggested). On the frontend verbs make no sense.

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

- Query parameters generation

- Contextual `path-for` (reuse parameters from currently selected route)

- Share a routing builder library with pedestal maybe?