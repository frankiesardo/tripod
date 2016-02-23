// Compiled by ClojureScript 1.7.122 {}
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
if(cljs.core.vector_QMARK_.call(null,routes)){
} else {
throw cljs.core.ex_info.call(null,"Invalid routes definition",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"routes","routes",457900162),routes], null));
}

return tripod.route.verify_unique_route_names.call(null,tripod.route.expand_verbose_routes.call(null,tripod.route.expand_terse_routes.call(null,routes)));
});
tripod.core._STAR_path_for_STAR_;
tripod.core.path_for = (function tripod$core$path_for(var_args){
var args__6153__auto__ = [];
var len__6146__auto___10015 = arguments.length;
var i__6147__auto___10016 = (0);
while(true){
if((i__6147__auto___10016 < len__6146__auto___10015)){
args__6153__auto__.push((arguments[i__6147__auto___10016]));

var G__10017 = (i__6147__auto___10016 + (1));
i__6147__auto___10016 = G__10017;
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
return cljs.core.apply.call(null,tripod.core._STAR_path_for_STAR_,route_name,options);
} else {
throw cljs.core.ex_info.call(null,"*path-for* not bound",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"route-name","route-name",-932603717),route_name], null));
}
});

tripod.core.path_for.cljs$lang$maxFixedArity = (1);

tripod.core.path_for.cljs$lang$applyTo = (function (seq10013){
var G__10014 = cljs.core.first.call(null,seq10013);
var seq10013__$1 = cljs.core.next.call(null,seq10013);
return tripod.core.path_for.cljs$core$IFn$_invoke$arity$variadic(G__10014,seq10013__$1);
});
/**
 * Given a service-map returns a handler function that accepts a request and returns a response
 */
tripod.core.service = (function tripod$core$service(p__10018){
var map__10021 = p__10018;
var map__10021__$1 = ((((!((map__10021 == null)))?((((map__10021.cljs$lang$protocol_mask$partition0$ & (64))) || (map__10021.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10021):map__10021);
var service_map = map__10021__$1;
var interceptors = cljs.core.get.call(null,map__10021__$1,new cljs.core.Keyword("tripod.core","interceptors","tripod.core/interceptors",-1003931922));
if(cljs.core.truth_(interceptors)){
} else {
throw cljs.core.ex_info.call(null,"Initial interceptor queue cannot be empty",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"service-map","service-map",628661072),service_map], null));
}

var context = tripod.context.enqueue_STAR_.call(null,cljs.core.PersistentArrayMap.EMPTY,interceptors);
return ((function (context,map__10021,map__10021__$1,service_map,interceptors){
return (function (request){
return new cljs.core.Keyword(null,"response","response",-1068424192).cljs$core$IFn$_invoke$arity$1(tripod.context.execute.call(null,cljs.core.assoc.call(null,context,new cljs.core.Keyword(null,"request","request",1772954723),request)));
});
;})(context,map__10021,map__10021__$1,service_map,interceptors))
});
tripod.core.router_interceptor = (function tripod$core$router_interceptor(p__10023){
var map__10032 = p__10023;
var map__10032__$1 = ((((!((map__10032 == null)))?((((map__10032.cljs$lang$protocol_mask$partition0$ & (64))) || (map__10032.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10032):map__10032);
var service_map = map__10032__$1;
var router = cljs.core.get.call(null,map__10032__$1,new cljs.core.Keyword("tripod.core","router","tripod.core/router",-518319433));
var routes = cljs.core.get.call(null,map__10032__$1,new cljs.core.Keyword("tripod.core","routes","tripod.core/routes",-76496941));
var router__$1 = (function (){var or__5088__auto__ = router;
if(cljs.core.truth_(or__5088__auto__)){
return or__5088__auto__;
} else {
return tripod.router.linear_search.call(null,routes);
}
})();
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword("tripod.core","router","tripod.core/router",-518319433),new cljs.core.Keyword(null,"enter","enter",1792452624),((function (router__$1,map__10032,map__10032__$1,service_map,router,routes){
return (function (p__10034){
var map__10035 = p__10034;
var map__10035__$1 = ((((!((map__10035 == null)))?((((map__10035.cljs$lang$protocol_mask$partition0$ & (64))) || (map__10035.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10035):map__10035);
var context = map__10035__$1;
var request = cljs.core.get.call(null,map__10035__$1,new cljs.core.Keyword(null,"request","request",1772954723));
if(cljs.core.truth_(new cljs.core.Keyword(null,"uri","uri",-774711847).cljs$core$IFn$_invoke$arity$1(request))){
} else {
throw cljs.core.ex_info.call(null,"Request is missing the uri",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request","request",1772954723),request], null));
}

var vec__10037 = tripod.router.find_route.call(null,router__$1,request);
var map__10038 = cljs.core.nth.call(null,vec__10037,(0),null);
var map__10038__$1 = ((((!((map__10038 == null)))?((((map__10038.cljs$lang$protocol_mask$partition0$ & (64))) || (map__10038.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10038):map__10038);
var route = map__10038__$1;
var interceptors = cljs.core.get.call(null,map__10038__$1,new cljs.core.Keyword(null,"interceptors","interceptors",-1546782951));
var req = cljs.core.nth.call(null,vec__10037,(1),null);
if(cljs.core.truth_(route)){
} else {
throw cljs.core.ex_info.call(null,"Router could not find a route for request",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"request","request",1772954723),request,new cljs.core.Keyword(null,"reason","reason",-2070751759),new cljs.core.Keyword(null,"not-found","not-found",-629079980)], null));
}

return tripod.context.enqueue_STAR_.call(null,cljs.core.assoc.call(null,cljs.core.assoc.call(null,context,new cljs.core.Keyword(null,"request","request",1772954723),req),new cljs.core.Keyword(null,"route","route",329891309),route),interceptors);
});})(router__$1,map__10032,map__10032__$1,service_map,router,routes))
], null);
});
tripod.core.linker_interceptor = (function tripod$core$linker_interceptor(p__10040){
var map__10043 = p__10040;
var map__10043__$1 = ((((!((map__10043 == null)))?((((map__10043.cljs$lang$protocol_mask$partition0$ & (64))) || (map__10043.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10043):map__10043);
var service_map = map__10043__$1;
var routes = cljs.core.get.call(null,map__10043__$1,new cljs.core.Keyword("tripod.core","routes","tripod.core/routes",-76496941));
var path_for = tripod.path.path_for_routes.call(null,routes);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword("tripod.core","linker","tripod.core/linker",282845658),new cljs.core.Keyword(null,"enter","enter",1792452624),((function (path_for,map__10043,map__10043__$1,service_map,routes){
return (function (context){
tripod.core._STAR_path_for_STAR_ = path_for;

return cljs.core.assoc_in.call(null,cljs.core.assoc_in.call(null,context,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bindings","bindings",1271397192),new cljs.core.Var(function(){return tripod.core._STAR_path_for_STAR_;},new cljs.core.Symbol("tripod.core","*path-for*","tripod.core/*path-for*",1302021021,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",-558947994),new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"dynamic","dynamic",704819571),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[true,new cljs.core.Symbol(null,"tripod.core","tripod.core",-2034464438,null),new cljs.core.Symbol(null,"*path-for*","*path-for*",-1380122066,null),"/Users/frankie/.boot/cache/tmp/Users/frankie/Documents/frankiesardo/tripod/example/web/1qr/-s81pxz/js/app.out/tripod/core.cljc",36,1,true,16,16,cljs.core.List.EMPTY,null,(cljs.core.truth_(tripod.core._STAR_path_for_STAR_)?tripod.core._STAR_path_for_STAR_.cljs$lang$test:null)]))], null),path_for),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"request","request",1772954723),new cljs.core.Keyword(null,"path-for","path-for",-931920299)], null),path_for);
});})(path_for,map__10043,map__10043__$1,service_map,routes))
], null);
});
tripod.core.logger_interceptor = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword("tripod.core","logger","tripod.core/logger",1389560008),new cljs.core.Keyword(null,"enter","enter",1792452624),(function (context){
var and__5076__auto___10045 = tripod.log._STAR_logfn_STAR_;
if(cljs.core.truth_(and__5076__auto___10045)){
tripod.log._STAR_logfn_STAR_.call(null,"tripod.core",new cljs.core.Keyword(null,"info","info",-317069002),new cljs.core.Keyword(null,"uri","uri",-774711847),cljs.core.get_in.call(null,context,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"request","request",1772954723),new cljs.core.Keyword(null,"uri","uri",-774711847)], null)));
} else {
}

return context;
})], null);
tripod.core.default_interceptors = (function tripod$core$default_interceptors(service_map){
var default_interceptors__$1 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [tripod.core.logger_interceptor,tripod.core.router_interceptor.call(null,service_map),tripod.core.linker_interceptor.call(null,service_map)], null);
return cljs.core.update.call(null,service_map,new cljs.core.Keyword("tripod.core","interceptors","tripod.core/interceptors",-1003931922),cljs.core.concat,default_interceptors__$1);
});

//# sourceMappingURL=core.js.map