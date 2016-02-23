// Compiled by ClojureScript 1.7.122 {}
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
return m__5744__auto__.call(null,this$,req);
} else {
var m__5744__auto____$1 = (tripod.router.find_route["_"]);
if(!((m__5744__auto____$1 == null))){
return m__5744__auto____$1.call(null,this$,req);
} else {
throw cljs.core.missing_protocol.call(null,"Router.find-route",this$);
}
}
}
});

tripod.router.path_matcher = (function tripod$router$path_matcher(p__10165){
var map__10171 = p__10165;
var map__10171__$1 = ((((!((map__10171 == null)))?((((map__10171.cljs$lang$protocol_mask$partition0$ & (64))) || (map__10171.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10171):map__10171);
var route = map__10171__$1;
var path_parts = cljs.core.get.call(null,map__10171__$1,new cljs.core.Keyword(null,"path-parts","path-parts",945822894));
var path_params = cljs.core.filter.call(null,cljs.core.keyword_QMARK_,path_parts);
var path_re = tripod.path.path_regex.call(null,route);
return ((function (path_params,path_re,map__10171,map__10171__$1,route,path_parts){
return (function (p__10173){
var map__10174 = p__10173;
var map__10174__$1 = ((((!((map__10174 == null)))?((((map__10174.cljs$lang$protocol_mask$partition0$ & (64))) || (map__10174.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10174):map__10174);
var req = map__10174__$1;
var uri = cljs.core.get.call(null,map__10174__$1,new cljs.core.Keyword(null,"uri","uri",-774711847));
var temp__4425__auto__ = cljs.core.re_matches.call(null,path_re,uri);
if(cljs.core.truth_(temp__4425__auto__)){
var m = temp__4425__auto__;
return cljs.core.zipmap.call(null,path_params,cljs.core.rest.call(null,m));
} else {
return null;
}
});
;})(path_params,path_re,map__10171,map__10171__$1,route,path_parts))
});
/**
 * Given a sequence of routes, return a linear search router.
 *   Matches the :uri key inside the request qith the paths in the route table
 */
tripod.router.linear_search = (function tripod$router$linear_search(routes){
var matcher_routes = cljs.core.map.call(null,(function (p1__10176_SHARP_){
return cljs.core.assoc.call(null,p1__10176_SHARP_,new cljs.core.Keyword(null,"matcher","matcher",-452768995),tripod.router.path_matcher.call(null,p1__10176_SHARP_));
}),routes);
if(typeof tripod.router.t_tripod$router10183 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {tripod.router.Router}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
tripod.router.t_tripod$router10183 = (function (linear_search,routes,matcher_routes,meta10184){
this.linear_search = linear_search;
this.routes = routes;
this.matcher_routes = matcher_routes;
this.meta10184 = meta10184;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
tripod.router.t_tripod$router10183.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (matcher_routes){
return (function (_10185,meta10184__$1){
var self__ = this;
var _10185__$1 = this;
return (new tripod.router.t_tripod$router10183(self__.linear_search,self__.routes,self__.matcher_routes,meta10184__$1));
});})(matcher_routes))
;

tripod.router.t_tripod$router10183.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (matcher_routes){
return (function (_10185){
var self__ = this;
var _10185__$1 = this;
return self__.meta10184;
});})(matcher_routes))
;

tripod.router.t_tripod$router10183.prototype.tripod$router$Router$ = true;

tripod.router.t_tripod$router10183.prototype.tripod$router$Router$find_route$arity$2 = ((function (matcher_routes){
return (function (this$,req){
var self__ = this;
var this$__$1 = this;
return cljs.core.some.call(null,((function (this$__$1,matcher_routes){
return (function (p__10186){
var map__10187 = p__10186;
var map__10187__$1 = ((((!((map__10187 == null)))?((((map__10187.cljs$lang$protocol_mask$partition0$ & (64))) || (map__10187.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10187):map__10187);
var route = map__10187__$1;
var matcher = cljs.core.get.call(null,map__10187__$1,new cljs.core.Keyword(null,"matcher","matcher",-452768995));
var temp__4425__auto__ = matcher.call(null,req);
if(cljs.core.truth_(temp__4425__auto__)){
var path_params = temp__4425__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.dissoc.call(null,route,new cljs.core.Keyword(null,"matcher","matcher",-452768995)),cljs.core.assoc.call(null,req,new cljs.core.Keyword(null,"path-params","path-params",-48130597),path_params)], null);
} else {
return null;
}
});})(this$__$1,matcher_routes))
,self__.matcher_routes);
});})(matcher_routes))
;

tripod.router.t_tripod$router10183.getBasis = ((function (matcher_routes){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"linear-search","linear-search",-831049105,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"routes","routes",2098431689,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Given a sequence of routes, return a linear search router.\n  Matches the :uri key inside the request qith the paths in the route table"], null)),new cljs.core.Symbol(null,"routes","routes",2098431689,null),new cljs.core.Symbol(null,"matcher-routes","matcher-routes",422508206,null),new cljs.core.Symbol(null,"meta10184","meta10184",-919056202,null)], null);
});})(matcher_routes))
;

tripod.router.t_tripod$router10183.cljs$lang$type = true;

tripod.router.t_tripod$router10183.cljs$lang$ctorStr = "tripod.router/t_tripod$router10183";

tripod.router.t_tripod$router10183.cljs$lang$ctorPrWriter = ((function (matcher_routes){
return (function (this__5686__auto__,writer__5687__auto__,opt__5688__auto__){
return cljs.core._write.call(null,writer__5687__auto__,"tripod.router/t_tripod$router10183");
});})(matcher_routes))
;

tripod.router.__GT_t_tripod$router10183 = ((function (matcher_routes){
return (function tripod$router$linear_search_$___GT_t_tripod$router10183(linear_search__$1,routes__$1,matcher_routes__$1,meta10184){
return (new tripod.router.t_tripod$router10183(linear_search__$1,routes__$1,matcher_routes__$1,meta10184));
});})(matcher_routes))
;

}

return (new tripod.router.t_tripod$router10183(tripod$router$linear_search,routes,matcher_routes,cljs.core.PersistentArrayMap.EMPTY));
});

//# sourceMappingURL=router.js.map