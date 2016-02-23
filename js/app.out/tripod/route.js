// Compiled by ClojureScript 1.7.122 {:static-fns true, :optimize-constants true}
goog.provide('tripod.route');
goog.require('cljs.core');
goog.require('tripod.path');
goog.require('tripod.interceptor');
tripod.route.capture_constraints = (function tripod$route$capture_constraints(m){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__5860__auto__ = (function tripod$route$capture_constraints_$_iter__13265(s__13266){
return (new cljs.core.LazySeq(null,(function (){
var s__13266__$1 = s__13266;
while(true){
var temp__4425__auto__ = cljs.core.seq(s__13266__$1);
if(temp__4425__auto__){
var s__13266__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(s__13266__$2)){
var c__5858__auto__ = cljs.core.chunk_first(s__13266__$2);
var size__5859__auto__ = cljs.core.count(c__5858__auto__);
var b__13268 = cljs.core.chunk_buffer(size__5859__auto__);
if((function (){var i__13267 = (0);
while(true){
if((i__13267 < size__5859__auto__)){
var vec__13273 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__5858__auto__,i__13267);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13273,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13273,(1),null);
cljs.core.chunk_append(b__13268,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,[cljs.core.str("("),cljs.core.str(v.source),cljs.core.str(")")].join('')], null));

var G__13275 = (i__13267 + (1));
i__13267 = G__13275;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__13268),tripod$route$capture_constraints_$_iter__13265(cljs.core.chunk_rest(s__13266__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__13268),null);
}
} else {
var vec__13274 = cljs.core.first(s__13266__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13274,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13274,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,[cljs.core.str("("),cljs.core.str(v.source),cljs.core.str(")")].join('')], null),tripod$route$capture_constraints_$_iter__13265(cljs.core.rest(s__13266__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5860__auto__(m);
})());
});
tripod.route.update_dna = (function tripod$route$update_dna(p__13276,p__13277){
var map__13283 = p__13276;
var map__13283__$1 = ((((!((map__13283 == null)))?((((map__13283.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13283.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13283):map__13283);
var parent_dna = map__13283__$1;
var parent_path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13283__$1,cljs.core.cst$kw$path);
var map__13284 = p__13277;
var map__13284__$1 = ((((!((map__13284 == null)))?((((map__13284.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13284.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13284):map__13284);
var constraints = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13284__$1,cljs.core.cst$kw$constraints);
var interceptors = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13284__$1,cljs.core.cst$kw$interceptors);
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13284__$1,cljs.core.cst$kw$path);
var G__13287 = parent_dna;
var G__13287__$1 = (cljs.core.truth_(path)?tripod.path.parse_path.cljs$core$IFn$_invoke$arity$2(G__13287,path):G__13287);
var G__13287__$2 = (cljs.core.truth_(path)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__13287__$1,cljs.core.cst$kw$path,[cljs.core.str((cljs.core.truth_((function (){var and__5076__auto__ = parent_path;
if(cljs.core.truth_(and__5076__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("/",cljs.core.last(parent_path));
} else {
return and__5076__auto__;
}
})())?cljs.core.subs.cljs$core$IFn$_invoke$arity$3(parent_path,(0),(cljs.core.count(parent_path) - (1))):parent_path)),cljs.core.str(path)].join('')):G__13287__$1);
var G__13287__$3 = (cljs.core.truth_(constraints)?cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__13287__$2,cljs.core.cst$kw$path_DASH_constraints,cljs.core.merge,tripod.route.capture_constraints(constraints)):G__13287__$2);
var G__13287__$4 = (cljs.core.truth_(interceptors)?cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__13287__$3,cljs.core.cst$kw$interceptors,cljs.core.into,interceptors):G__13287__$3);
return G__13287__$4;
});
tripod.route.default_dna = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$interceptors,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$path_DASH_parts,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [""], null),cljs.core.cst$kw$path_DASH_constraints,cljs.core.PersistentArrayMap.EMPTY], null);
/**
 * Each handler produces a route name and all of them must be unique
 */
tripod.route.verify_unique_route_names = (function tripod$route$verify_unique_route_names(route_table){
var non_unique_names = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__13292){
var vec__13293 = p__13292;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13293,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13293,(1),null);
return (v > (1));
}),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__13294){
var vec__13295 = p__13294;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13295,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13295,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,cljs.core.count(v)], null);
}),cljs.core.group_by(cljs.core.cst$kw$route_DASH_name,route_table))));
if(cljs.core.seq(non_unique_names)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Route names are not unique",new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$non_DASH_unique_DASH_names,non_unique_names], null));
} else {
}

return route_table;
});
/**
 * Convert verbose routes to a route table
 */
tripod.route.expand_verbose_routes = (function tripod$route$expand_verbose_routes(var_args){
var args13296 = [];
var len__6146__auto___13317 = arguments.length;
var i__6147__auto___13318 = (0);
while(true){
if((i__6147__auto___13318 < len__6146__auto___13317)){
args13296.push((arguments[i__6147__auto___13318]));

var G__13319 = (i__6147__auto___13318 + (1));
i__6147__auto___13318 = G__13319;
continue;
} else {
}
break;
}

var G__13298 = args13296.length;
switch (G__13298) {
case 1:
return tripod.route.expand_verbose_routes.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return tripod.route.expand_verbose_routes.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13296.length)].join('')));

}
});

tripod.route.expand_verbose_routes.cljs$core$IFn$_invoke$arity$1 = (function (routes){
return tripod.route.expand_verbose_routes.cljs$core$IFn$_invoke$arity$2(routes,tripod.route.default_dna);
});

tripod.route.expand_verbose_routes.cljs$core$IFn$_invoke$arity$2 = (function (routes,accumulated_dna){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,(function (){var iter__5860__auto__ = (function tripod$route$iter__13299(s__13300){
return (new cljs.core.LazySeq(null,(function (){
var s__13300__$1 = s__13300;
while(true){
var temp__4425__auto__ = cljs.core.seq(s__13300__$1);
if(temp__4425__auto__){
var s__13300__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(s__13300__$2)){
var c__5858__auto__ = cljs.core.chunk_first(s__13300__$2);
var size__5859__auto__ = cljs.core.count(c__5858__auto__);
var b__13302 = cljs.core.chunk_buffer(size__5859__auto__);
if((function (){var i__13301 = (0);
while(true){
if((i__13301 < size__5859__auto__)){
var map__13311 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__5858__auto__,i__13301);
var map__13311__$1 = ((((!((map__13311 == null)))?((((map__13311.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13311.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13311):map__13311);
var node = map__13311__$1;
var handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13311__$1,cljs.core.cst$kw$handler);
var children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13311__$1,cljs.core.cst$kw$children);
cljs.core.chunk_append(b__13302,(function (){var dna = tripod.route.update_dna(accumulated_dna,node);
var G__13313 = tripod.route.expand_verbose_routes.cljs$core$IFn$_invoke$arity$2(children,dna);
var G__13313__$1 = (cljs.core.truth_(handler)?cljs.core.cons(cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(dna,cljs.core.cst$kw$route_DASH_name,cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(handler)),cljs.core.cst$kw$interceptors,cljs.core.into,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [handler], null)),G__13313):G__13313);
return G__13313__$1;
})());

var G__13321 = (i__13301 + (1));
i__13301 = G__13321;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__13302),tripod$route$iter__13299(cljs.core.chunk_rest(s__13300__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__13302),null);
}
} else {
var map__13314 = cljs.core.first(s__13300__$2);
var map__13314__$1 = ((((!((map__13314 == null)))?((((map__13314.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13314.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13314):map__13314);
var node = map__13314__$1;
var handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13314__$1,cljs.core.cst$kw$handler);
var children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13314__$1,cljs.core.cst$kw$children);
return cljs.core.cons((function (){var dna = tripod.route.update_dna(accumulated_dna,node);
var G__13316 = tripod.route.expand_verbose_routes.cljs$core$IFn$_invoke$arity$2(children,dna);
var G__13316__$1 = (cljs.core.truth_(handler)?cljs.core.cons(cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(dna,cljs.core.cst$kw$route_DASH_name,cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(handler)),cljs.core.cst$kw$interceptors,cljs.core.into,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [handler], null)),G__13316):G__13316);
return G__13316__$1;
})(),tripod$route$iter__13299(cljs.core.rest(s__13300__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5860__auto__(routes);
})());
});

tripod.route.expand_verbose_routes.cljs$lang$maxFixedArity = 2;
/**
 * Convert terse routes to verbose routes
 */
tripod.route.expand_terse_routes = (function tripod$route$expand_terse_routes(routes){
var iter__5860__auto__ = (function tripod$route$expand_terse_routes_$_iter__13336(s__13337){
return (new cljs.core.LazySeq(null,(function (){
var s__13337__$1 = s__13337;
while(true){
var temp__4425__auto__ = cljs.core.seq(s__13337__$1);
if(temp__4425__auto__){
var s__13337__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(s__13337__$2)){
var c__5858__auto__ = cljs.core.chunk_first(s__13337__$2);
var size__5859__auto__ = cljs.core.count(c__5858__auto__);
var b__13339 = cljs.core.chunk_buffer(size__5859__auto__);
if((function (){var i__13338 = (0);
while(true){
if((i__13338 < size__5859__auto__)){
var vec__13346 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__5858__auto__,i__13338);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13346,(0),null);
var more = cljs.core.nthnext(vec__13346,(1));
cljs.core.chunk_append(b__13339,(function (){var vectors = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.vector_QMARK_,more);
var non_vectors = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.complement(cljs.core.vector_QMARK_),more);
var interceptors = cljs.core.not_empty(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$interceptors,cljs.core.meta),vectors)));
var children = cljs.core.not_empty(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$3(cljs.core.not,cljs.core.cst$kw$interceptors,cljs.core.meta),vectors));
var constraints = cljs.core.not_empty(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.merge,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$constraints,cljs.core.meta),non_vectors)));
var handler = cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$3(cljs.core.not,cljs.core.cst$kw$constraints,cljs.core.meta),non_vectors));
var G__13347 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$path,path], null);
var G__13347__$1 = (cljs.core.truth_(handler)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__13347,cljs.core.cst$kw$handler,tripod.interceptor.interceptor(handler)):G__13347);
var G__13347__$2 = (cljs.core.truth_(interceptors)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__13347__$1,cljs.core.cst$kw$interceptors,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(tripod.interceptor.interceptor,interceptors)):G__13347__$1);
var G__13347__$3 = (cljs.core.truth_(constraints)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__13347__$2,cljs.core.cst$kw$constraints,constraints):G__13347__$2);
var G__13347__$4 = (cljs.core.truth_(children)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__13347__$3,cljs.core.cst$kw$children,tripod$route$expand_terse_routes(children)):G__13347__$3);
return G__13347__$4;
})());

var G__13350 = (i__13338 + (1));
i__13338 = G__13350;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__13339),tripod$route$expand_terse_routes_$_iter__13336(cljs.core.chunk_rest(s__13337__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__13339),null);
}
} else {
var vec__13348 = cljs.core.first(s__13337__$2);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13348,(0),null);
var more = cljs.core.nthnext(vec__13348,(1));
return cljs.core.cons((function (){var vectors = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.vector_QMARK_,more);
var non_vectors = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.complement(cljs.core.vector_QMARK_),more);
var interceptors = cljs.core.not_empty(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$interceptors,cljs.core.meta),vectors)));
var children = cljs.core.not_empty(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$3(cljs.core.not,cljs.core.cst$kw$interceptors,cljs.core.meta),vectors));
var constraints = cljs.core.not_empty(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.merge,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$constraints,cljs.core.meta),non_vectors)));
var handler = cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$3(cljs.core.not,cljs.core.cst$kw$constraints,cljs.core.meta),non_vectors));
var G__13349 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$path,path], null);
var G__13349__$1 = (cljs.core.truth_(handler)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__13349,cljs.core.cst$kw$handler,tripod.interceptor.interceptor(handler)):G__13349);
var G__13349__$2 = (cljs.core.truth_(interceptors)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__13349__$1,cljs.core.cst$kw$interceptors,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(tripod.interceptor.interceptor,interceptors)):G__13349__$1);
var G__13349__$3 = (cljs.core.truth_(constraints)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__13349__$2,cljs.core.cst$kw$constraints,constraints):G__13349__$2);
var G__13349__$4 = (cljs.core.truth_(children)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__13349__$3,cljs.core.cst$kw$children,tripod$route$expand_terse_routes(children)):G__13349__$3);
return G__13349__$4;
})(),tripod$route$expand_terse_routes_$_iter__13336(cljs.core.rest(s__13337__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5860__auto__(routes);
});
