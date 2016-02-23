// Compiled by ClojureScript 1.7.122 {:static-fns true, :optimize-constants true}
goog.provide('tripod.core');
goog.require('cljs.core');
goog.require('tripod.log');
goog.require('tripod.path');
goog.require('tripod.router');
goog.require('tripod.route');
goog.require('tripod.context');
/**
 * Creates a route table out of terse routes
 */
tripod.core.expand_routes = (function tripod$core$expand_routes(routes){
if(cljs.core.vector_QMARK_(routes)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Invalid routes definition",new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$routes,routes], null));
}

return tripod.route.verify_unique_route_names(tripod.route.expand_verbose_routes.cljs$core$IFn$_invoke$arity$1(tripod.route.expand_terse_routes(routes)));
});
tripod.core._STAR_path_for_STAR_;
tripod.core.path_for = (function tripod$core$path_for(var_args){
var args__6153__auto__ = [];
var len__6146__auto___13126 = arguments.length;
var i__6147__auto___13127 = (0);
while(true){
if((i__6147__auto___13127 < len__6146__auto___13126)){
args__6153__auto__.push((arguments[i__6147__auto___13127]));

var G__13128 = (i__6147__auto___13127 + (1));
i__6147__auto___13127 = G__13128;
continue;
} else {
}
break;
}

var argseq__6154__auto__ = ((((1) < args__6153__auto__.length))?(new cljs.core.IndexedSeq(args__6153__auto__.slice((1)),(0))):null);
return tripod.core.path_for.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__6154__auto__);
});

tripod.core.path_for.cljs$core$IFn$_invoke$arity$variadic = (function (route_name,options){
if(cljs.core.truth_(tripod.core._STAR_path_for_STAR_)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(tripod.core._STAR_path_for_STAR_,route_name,options);
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("*path-for* not bound",new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$route_DASH_name,route_name], null));
}
});

tripod.core.path_for.cljs$lang$maxFixedArity = (1);

tripod.core.path_for.cljs$lang$applyTo = (function (seq13124){
var G__13125 = cljs.core.first(seq13124);
var seq13124__$1 = cljs.core.next(seq13124);
return tripod.core.path_for.cljs$core$IFn$_invoke$arity$variadic(G__13125,seq13124__$1);
});
/**
 * Given a service-map returns a handler function that accepts a request and returns a response
 */
tripod.core.service = (function tripod$core$service(p__13129){
var map__13132 = p__13129;
var map__13132__$1 = ((((!((map__13132 == null)))?((((map__13132.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13132.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13132):map__13132);
var service_map = map__13132__$1;
var interceptors = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13132__$1,cljs.core.cst$kw$tripod$core_SLASH_interceptors);
if(cljs.core.truth_(interceptors)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Initial interceptor queue cannot be empty",new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$service_DASH_map,service_map], null));
}

var context = tripod.context.enqueue_STAR_(cljs.core.PersistentArrayMap.EMPTY,interceptors);
return ((function (context,map__13132,map__13132__$1,service_map,interceptors){
return (function (request){
return cljs.core.cst$kw$response.cljs$core$IFn$_invoke$arity$1(tripod.context.execute(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(context,cljs.core.cst$kw$request,request)));
});
;})(context,map__13132,map__13132__$1,service_map,interceptors))
});
tripod.core.router_interceptor = (function tripod$core$router_interceptor(p__13134){
var map__13143 = p__13134;
var map__13143__$1 = ((((!((map__13143 == null)))?((((map__13143.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13143.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13143):map__13143);
var service_map = map__13143__$1;
var router = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13143__$1,cljs.core.cst$kw$tripod$core_SLASH_router);
var routes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13143__$1,cljs.core.cst$kw$tripod$core_SLASH_routes);
var router__$1 = (function (){var or__5088__auto__ = router;
if(cljs.core.truth_(or__5088__auto__)){
return or__5088__auto__;
} else {
return tripod.router.linear_search(routes);
}
})();
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,cljs.core.cst$kw$tripod$core_SLASH_router,cljs.core.cst$kw$enter,((function (router__$1,map__13143,map__13143__$1,service_map,router,routes){
return (function (p__13145){
var map__13146 = p__13145;
var map__13146__$1 = ((((!((map__13146 == null)))?((((map__13146.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13146.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13146):map__13146);
var context = map__13146__$1;
var request = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13146__$1,cljs.core.cst$kw$request);
if(cljs.core.truth_(cljs.core.cst$kw$uri.cljs$core$IFn$_invoke$arity$1(request))){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Request is missing the uri",new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$request,request], null));
}

var vec__13148 = tripod.router.find_route(router__$1,request);
var map__13149 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13148,(0),null);
var map__13149__$1 = ((((!((map__13149 == null)))?((((map__13149.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13149.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13149):map__13149);
var route = map__13149__$1;
var interceptors = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13149__$1,cljs.core.cst$kw$interceptors);
var req = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13148,(1),null);
if(cljs.core.truth_(route)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Router could not find a route for request",new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$request,request,cljs.core.cst$kw$reason,cljs.core.cst$kw$not_DASH_found], null));
}

return tripod.context.enqueue_STAR_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(context,cljs.core.cst$kw$request,req),cljs.core.cst$kw$route,route),interceptors);
});})(router__$1,map__13143,map__13143__$1,service_map,router,routes))
], null);
});
tripod.core.linker_interceptor = (function tripod$core$linker_interceptor(p__13151){
var map__13154 = p__13151;
var map__13154__$1 = ((((!((map__13154 == null)))?((((map__13154.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13154.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13154):map__13154);
var service_map = map__13154__$1;
var routes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13154__$1,cljs.core.cst$kw$tripod$core_SLASH_routes);
var path_for = tripod.path.path_for_routes(routes);
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,cljs.core.cst$kw$tripod$core_SLASH_linker,cljs.core.cst$kw$enter,((function (path_for,map__13154,map__13154__$1,service_map,routes){
return (function (context){
tripod.core._STAR_path_for_STAR_ = path_for;

return cljs.core.assoc_in(cljs.core.assoc_in(context,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$bindings,new cljs.core.Var(function(){return tripod.core._STAR_path_for_STAR_;},cljs.core.cst$sym$tripod$core_SLASH__STAR_path_DASH_for_STAR_,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$private,cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$dynamic,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[true,cljs.core.cst$sym$tripod$core,cljs.core.cst$sym$_STAR_path_DASH_for_STAR_,"/Users/frankie/.boot/cache/tmp/Users/frankie/Documents/frankiesardo/tripod/example/web/1y9/-a21mwe/js/app.out/tripod/core.cljc",36,1,true,16,16,cljs.core.List.EMPTY,null,(cljs.core.truth_(tripod.core._STAR_path_for_STAR_)?tripod.core._STAR_path_for_STAR_.cljs$lang$test:null)]))], null),path_for),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$request,cljs.core.cst$kw$path_DASH_for], null),path_for);
});})(path_for,map__13154,map__13154__$1,service_map,routes))
], null);
});
tripod.core.logger_interceptor = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,cljs.core.cst$kw$tripod$core_SLASH_logger,cljs.core.cst$kw$enter,(function (context){
var and__5076__auto___13160 = tripod.log._STAR_logfn_STAR_;
if(cljs.core.truth_(and__5076__auto___13160)){
var G__13156_13161 = "tripod.core";
var G__13157_13162 = cljs.core.cst$kw$info;
var G__13158_13163 = cljs.core.cst$kw$uri;
var G__13159_13164 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(context,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$request,cljs.core.cst$kw$uri], null));
(tripod.log._STAR_logfn_STAR_.cljs$core$IFn$_invoke$arity$4 ? tripod.log._STAR_logfn_STAR_.cljs$core$IFn$_invoke$arity$4(G__13156_13161,G__13157_13162,G__13158_13163,G__13159_13164) : tripod.log._STAR_logfn_STAR_.call(null,G__13156_13161,G__13157_13162,G__13158_13163,G__13159_13164));
} else {
}

return context;
})], null);
tripod.core.default_interceptors = (function tripod$core$default_interceptors(service_map){
var default_interceptors__$1 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [tripod.core.logger_interceptor,tripod.core.router_interceptor(service_map),tripod.core.linker_interceptor(service_map)], null);
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(service_map,cljs.core.cst$kw$tripod$core_SLASH_interceptors,cljs.core.concat,default_interceptors__$1);
});
