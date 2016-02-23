// Compiled by ClojureScript 1.7.122 {:static-fns true, :optimize-constants true}
goog.provide('tripod.router');
goog.require('cljs.core');
goog.require('tripod.path');

/**
 * @interface
 */
tripod.router.Router = function(){};

tripod.router.find_route = (function tripod$router$find_route(this$,req){
if((!((this$ == null))) && (!((this$.tripod$router$Router$find_route$arity$2 == null)))){
return this$.tripod$router$Router$find_route$arity$2(this$,req);
} else {
var x__5743__auto__ = (((this$ == null))?null:this$);
var m__5744__auto__ = (tripod.router.find_route[goog.typeOf(x__5743__auto__)]);
if(!((m__5744__auto__ == null))){
return (m__5744__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5744__auto__.cljs$core$IFn$_invoke$arity$2(this$,req) : m__5744__auto__.call(null,this$,req));
} else {
var m__5744__auto____$1 = (tripod.router.find_route["_"]);
if(!((m__5744__auto____$1 == null))){
return (m__5744__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__5744__auto____$1.cljs$core$IFn$_invoke$arity$2(this$,req) : m__5744__auto____$1.call(null,this$,req));
} else {
throw cljs.core.missing_protocol("Router.find-route",this$);
}
}
}
});

tripod.router.path_matcher = (function tripod$router$path_matcher(p__13227){
var map__13233 = p__13227;
var map__13233__$1 = ((((!((map__13233 == null)))?((((map__13233.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13233.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13233):map__13233);
var route = map__13233__$1;
var path_parts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13233__$1,cljs.core.cst$kw$path_DASH_parts);
var path_params = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.keyword_QMARK_,path_parts);
var path_re = tripod.path.path_regex(route);
return ((function (path_params,path_re,map__13233,map__13233__$1,route,path_parts){
return (function (p__13235){
var map__13236 = p__13235;
var map__13236__$1 = ((((!((map__13236 == null)))?((((map__13236.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13236.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13236):map__13236);
var req = map__13236__$1;
var uri = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13236__$1,cljs.core.cst$kw$uri);
var temp__4425__auto__ = cljs.core.re_matches(path_re,uri);
if(cljs.core.truth_(temp__4425__auto__)){
var m = temp__4425__auto__;
return cljs.core.zipmap(path_params,cljs.core.rest(m));
} else {
return null;
}
});
;})(path_params,path_re,map__13233,map__13233__$1,route,path_parts))
});
/**
 * Given a sequence of routes, return a linear search router.
 *   Matches the :uri key inside the request qith the paths in the route table
 */
tripod.router.linear_search = (function tripod$router$linear_search(routes){
var matcher_routes = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__13238_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__13238_SHARP_,cljs.core.cst$kw$matcher,tripod.router.path_matcher(p1__13238_SHARP_));
}),routes);
if(typeof tripod.router.t_tripod$router13245 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {tripod.router.Router}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
tripod.router.t_tripod$router13245 = (function (linear_search,routes,matcher_routes,meta13246){
this.linear_search = linear_search;
this.routes = routes;
this.matcher_routes = matcher_routes;
this.meta13246 = meta13246;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
tripod.router.t_tripod$router13245.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (matcher_routes){
return (function (_13247,meta13246__$1){
var self__ = this;
var _13247__$1 = this;
return (new tripod.router.t_tripod$router13245(self__.linear_search,self__.routes,self__.matcher_routes,meta13246__$1));
});})(matcher_routes))
;

tripod.router.t_tripod$router13245.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (matcher_routes){
return (function (_13247){
var self__ = this;
var _13247__$1 = this;
return self__.meta13246;
});})(matcher_routes))
;

tripod.router.t_tripod$router13245.prototype.tripod$router$Router$ = true;

tripod.router.t_tripod$router13245.prototype.tripod$router$Router$find_route$arity$2 = ((function (matcher_routes){
return (function (this$,req){
var self__ = this;
var this$__$1 = this;
return cljs.core.some(((function (this$__$1,matcher_routes){
return (function (p__13248){
var map__13249 = p__13248;
var map__13249__$1 = ((((!((map__13249 == null)))?((((map__13249.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13249.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13249):map__13249);
var route = map__13249__$1;
var matcher = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13249__$1,cljs.core.cst$kw$matcher);
var temp__4425__auto__ = (matcher.cljs$core$IFn$_invoke$arity$1 ? matcher.cljs$core$IFn$_invoke$arity$1(req) : matcher.call(null,req));
if(cljs.core.truth_(temp__4425__auto__)){
var path_params = temp__4425__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(route,cljs.core.cst$kw$matcher),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(req,cljs.core.cst$kw$path_DASH_params,path_params)], null);
} else {
return null;
}
});})(this$__$1,matcher_routes))
,self__.matcher_routes);
});})(matcher_routes))
;

tripod.router.t_tripod$router13245.getBasis = ((function (matcher_routes){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$linear_DASH_search,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$routes], null))),cljs.core.cst$kw$doc,"Given a sequence of routes, return a linear search router.\n  Matches the :uri key inside the request qith the paths in the route table"], null)),cljs.core.cst$sym$routes,cljs.core.cst$sym$matcher_DASH_routes,cljs.core.cst$sym$meta13246], null);
});})(matcher_routes))
;

tripod.router.t_tripod$router13245.cljs$lang$type = true;

tripod.router.t_tripod$router13245.cljs$lang$ctorStr = "tripod.router/t_tripod$router13245";

tripod.router.t_tripod$router13245.cljs$lang$ctorPrWriter = ((function (matcher_routes){
return (function (this__5686__auto__,writer__5687__auto__,opt__5688__auto__){
return cljs.core._write(writer__5687__auto__,"tripod.router/t_tripod$router13245");
});})(matcher_routes))
;

tripod.router.__GT_t_tripod$router13245 = ((function (matcher_routes){
return (function tripod$router$linear_search_$___GT_t_tripod$router13245(linear_search__$1,routes__$1,matcher_routes__$1,meta13246){
return (new tripod.router.t_tripod$router13245(linear_search__$1,routes__$1,matcher_routes__$1,meta13246));
});})(matcher_routes))
;

}

return (new tripod.router.t_tripod$router13245(tripod$router$linear_search,routes,matcher_routes,cljs.core.PersistentArrayMap.EMPTY));
});
