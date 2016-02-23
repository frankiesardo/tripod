// Compiled by ClojureScript 1.7.122 {}
goog.provide('tripod.route');
goog.require('cljs.core');
goog.require('tripod.path');
goog.require('tripod.interceptor');
tripod.route.capture_constraints = (function tripod$route$capture_constraints(m){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__5860__auto__ = (function tripod$route$capture_constraints_$_iter__10201(s__10202){
return (new cljs.core.LazySeq(null,(function (){
var s__10202__$1 = s__10202;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__10202__$1);
if(temp__4425__auto__){
var s__10202__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__10202__$2)){
var c__5858__auto__ = cljs.core.chunk_first.call(null,s__10202__$2);
var size__5859__auto__ = cljs.core.count.call(null,c__5858__auto__);
var b__10204 = cljs.core.chunk_buffer.call(null,size__5859__auto__);
if((function (){var i__10203 = (0);
while(true){
if((i__10203 < size__5859__auto__)){
var vec__10207 = cljs.core._nth.call(null,c__5858__auto__,i__10203);
var k = cljs.core.nth.call(null,vec__10207,(0),null);
var v = cljs.core.nth.call(null,vec__10207,(1),null);
cljs.core.chunk_append.call(null,b__10204,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,[cljs.core.str("("),cljs.core.str(v.source),cljs.core.str(")")].join('')], null));

var G__10209 = (i__10203 + (1));
i__10203 = G__10209;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10204),tripod$route$capture_constraints_$_iter__10201.call(null,cljs.core.chunk_rest.call(null,s__10202__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10204),null);
}
} else {
var vec__10208 = cljs.core.first.call(null,s__10202__$2);
var k = cljs.core.nth.call(null,vec__10208,(0),null);
var v = cljs.core.nth.call(null,vec__10208,(1),null);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,[cljs.core.str("("),cljs.core.str(v.source),cljs.core.str(")")].join('')], null),tripod$route$capture_constraints_$_iter__10201.call(null,cljs.core.rest.call(null,s__10202__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5860__auto__.call(null,m);
})());
});
tripod.route.update_dna = (function tripod$route$update_dna(p__10210,p__10211){
var map__10217 = p__10210;
var map__10217__$1 = ((((!((map__10217 == null)))?((((map__10217.cljs$lang$protocol_mask$partition0$ & (64))) || (map__10217.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10217):map__10217);
var parent_dna = map__10217__$1;
var parent_path = cljs.core.get.call(null,map__10217__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var map__10218 = p__10211;
var map__10218__$1 = ((((!((map__10218 == null)))?((((map__10218.cljs$lang$protocol_mask$partition0$ & (64))) || (map__10218.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10218):map__10218);
var constraints = cljs.core.get.call(null,map__10218__$1,new cljs.core.Keyword(null,"constraints","constraints",422775616));
var interceptors = cljs.core.get.call(null,map__10218__$1,new cljs.core.Keyword(null,"interceptors","interceptors",-1546782951));
var path = cljs.core.get.call(null,map__10218__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var G__10221 = parent_dna;
var G__10221__$1 = (cljs.core.truth_(path)?tripod.path.parse_path.call(null,G__10221,path):G__10221);
var G__10221__$2 = (cljs.core.truth_(path)?cljs.core.assoc.call(null,G__10221__$1,new cljs.core.Keyword(null,"path","path",-188191168),[cljs.core.str((cljs.core.truth_((function (){var and__5076__auto__ = parent_path;
if(cljs.core.truth_(and__5076__auto__)){
return cljs.core._EQ_.call(null,"/",cljs.core.last.call(null,parent_path));
} else {
return and__5076__auto__;
}
})())?cljs.core.subs.call(null,parent_path,(0),(cljs.core.count.call(null,parent_path) - (1))):parent_path)),cljs.core.str(path)].join('')):G__10221__$1);
var G__10221__$3 = (cljs.core.truth_(constraints)?cljs.core.update.call(null,G__10221__$2,new cljs.core.Keyword(null,"path-constraints","path-constraints",1831189928),cljs.core.merge,tripod.route.capture_constraints.call(null,constraints)):G__10221__$2);
var G__10221__$4 = (cljs.core.truth_(interceptors)?cljs.core.update.call(null,G__10221__$3,new cljs.core.Keyword(null,"interceptors","interceptors",-1546782951),cljs.core.into,interceptors):G__10221__$3);
return G__10221__$4;
});
tripod.route.default_dna = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"interceptors","interceptors",-1546782951),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"path-parts","path-parts",945822894),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [""], null),new cljs.core.Keyword(null,"path-constraints","path-constraints",1831189928),cljs.core.PersistentArrayMap.EMPTY], null);
/**
 * Each handler produces a route name and all of them must be unique
 */
tripod.route.verify_unique_route_names = (function tripod$route$verify_unique_route_names(route_table){
var non_unique_names = cljs.core.map.call(null,cljs.core.first,cljs.core.filter.call(null,(function (p__10226){
var vec__10227 = p__10226;
var _ = cljs.core.nth.call(null,vec__10227,(0),null);
var v = cljs.core.nth.call(null,vec__10227,(1),null);
return (v > (1));
}),cljs.core.map.call(null,(function (p__10228){
var vec__10229 = p__10228;
var k = cljs.core.nth.call(null,vec__10229,(0),null);
var v = cljs.core.nth.call(null,vec__10229,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,cljs.core.count.call(null,v)], null);
}),cljs.core.group_by.call(null,new cljs.core.Keyword(null,"route-name","route-name",-932603717),route_table))));
if(cljs.core.seq.call(null,non_unique_names)){
throw cljs.core.ex_info.call(null,"Route names are not unique",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"non-unique-names","non-unique-names",1168920849),non_unique_names], null));
} else {
}

return route_table;
});
/**
 * Convert verbose routes to a route table
 */
tripod.route.expand_verbose_routes = (function tripod$route$expand_verbose_routes(var_args){
var args10230 = [];
var len__6146__auto___10249 = arguments.length;
var i__6147__auto___10250 = (0);
while(true){
if((i__6147__auto___10250 < len__6146__auto___10249)){
args10230.push((arguments[i__6147__auto___10250]));

var G__10251 = (i__6147__auto___10250 + (1));
i__6147__auto___10250 = G__10251;
continue;
} else {
}
break;
}

var G__10232 = args10230.length;
switch (G__10232) {
case 1:
return tripod.route.expand_verbose_routes.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return tripod.route.expand_verbose_routes.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args10230.length)].join('')));

}
});

tripod.route.expand_verbose_routes.cljs$core$IFn$_invoke$arity$1 = (function (routes){
return tripod.route.expand_verbose_routes.call(null,routes,tripod.route.default_dna);
});

tripod.route.expand_verbose_routes.cljs$core$IFn$_invoke$arity$2 = (function (routes,accumulated_dna){
return cljs.core.apply.call(null,cljs.core.concat,(function (){var iter__5860__auto__ = (function tripod$route$iter__10233(s__10234){
return (new cljs.core.LazySeq(null,(function (){
var s__10234__$1 = s__10234;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__10234__$1);
if(temp__4425__auto__){
var s__10234__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__10234__$2)){
var c__5858__auto__ = cljs.core.chunk_first.call(null,s__10234__$2);
var size__5859__auto__ = cljs.core.count.call(null,c__5858__auto__);
var b__10236 = cljs.core.chunk_buffer.call(null,size__5859__auto__);
if((function (){var i__10235 = (0);
while(true){
if((i__10235 < size__5859__auto__)){
var map__10243 = cljs.core._nth.call(null,c__5858__auto__,i__10235);
var map__10243__$1 = ((((!((map__10243 == null)))?((((map__10243.cljs$lang$protocol_mask$partition0$ & (64))) || (map__10243.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10243):map__10243);
var node = map__10243__$1;
var handler = cljs.core.get.call(null,map__10243__$1,new cljs.core.Keyword(null,"handler","handler",-195596612));
var children = cljs.core.get.call(null,map__10243__$1,new cljs.core.Keyword(null,"children","children",-940561982));
cljs.core.chunk_append.call(null,b__10236,(function (){var dna = tripod.route.update_dna.call(null,accumulated_dna,node);
var G__10245 = tripod.route.expand_verbose_routes.call(null,children,dna);
var G__10245__$1 = (cljs.core.truth_(handler)?cljs.core.cons.call(null,cljs.core.update.call(null,cljs.core.assoc.call(null,dna,new cljs.core.Keyword(null,"route-name","route-name",-932603717),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(handler)),new cljs.core.Keyword(null,"interceptors","interceptors",-1546782951),cljs.core.into,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [handler], null)),G__10245):G__10245);
return G__10245__$1;
})());

var G__10253 = (i__10235 + (1));
i__10235 = G__10253;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10236),tripod$route$iter__10233.call(null,cljs.core.chunk_rest.call(null,s__10234__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10236),null);
}
} else {
var map__10246 = cljs.core.first.call(null,s__10234__$2);
var map__10246__$1 = ((((!((map__10246 == null)))?((((map__10246.cljs$lang$protocol_mask$partition0$ & (64))) || (map__10246.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10246):map__10246);
var node = map__10246__$1;
var handler = cljs.core.get.call(null,map__10246__$1,new cljs.core.Keyword(null,"handler","handler",-195596612));
var children = cljs.core.get.call(null,map__10246__$1,new cljs.core.Keyword(null,"children","children",-940561982));
return cljs.core.cons.call(null,(function (){var dna = tripod.route.update_dna.call(null,accumulated_dna,node);
var G__10248 = tripod.route.expand_verbose_routes.call(null,children,dna);
var G__10248__$1 = (cljs.core.truth_(handler)?cljs.core.cons.call(null,cljs.core.update.call(null,cljs.core.assoc.call(null,dna,new cljs.core.Keyword(null,"route-name","route-name",-932603717),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(handler)),new cljs.core.Keyword(null,"interceptors","interceptors",-1546782951),cljs.core.into,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [handler], null)),G__10248):G__10248);
return G__10248__$1;
})(),tripod$route$iter__10233.call(null,cljs.core.rest.call(null,s__10234__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5860__auto__.call(null,routes);
})());
});

tripod.route.expand_verbose_routes.cljs$lang$maxFixedArity = 2;
/**
 * Convert terse routes to verbose routes
 */
tripod.route.expand_terse_routes = (function tripod$route$expand_terse_routes(routes){
var iter__5860__auto__ = (function tripod$route$expand_terse_routes_$_iter__10266(s__10267){
return (new cljs.core.LazySeq(null,(function (){
var s__10267__$1 = s__10267;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__10267__$1);
if(temp__4425__auto__){
var s__10267__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__10267__$2)){
var c__5858__auto__ = cljs.core.chunk_first.call(null,s__10267__$2);
var size__5859__auto__ = cljs.core.count.call(null,c__5858__auto__);
var b__10269 = cljs.core.chunk_buffer.call(null,size__5859__auto__);
if((function (){var i__10268 = (0);
while(true){
if((i__10268 < size__5859__auto__)){
var vec__10274 = cljs.core._nth.call(null,c__5858__auto__,i__10268);
var path = cljs.core.nth.call(null,vec__10274,(0),null);
var more = cljs.core.nthnext.call(null,vec__10274,(1));
cljs.core.chunk_append.call(null,b__10269,(function (){var vectors = cljs.core.filter.call(null,cljs.core.vector_QMARK_,more);
var non_vectors = cljs.core.filter.call(null,cljs.core.complement.call(null,cljs.core.vector_QMARK_),more);
var interceptors = cljs.core.not_empty.call(null,cljs.core.apply.call(null,cljs.core.concat,cljs.core.filter.call(null,cljs.core.comp.call(null,new cljs.core.Keyword(null,"interceptors","interceptors",-1546782951),cljs.core.meta),vectors)));
var children = cljs.core.not_empty.call(null,cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,new cljs.core.Keyword(null,"interceptors","interceptors",-1546782951),cljs.core.meta),vectors));
var constraints = cljs.core.not_empty.call(null,cljs.core.apply.call(null,cljs.core.merge,cljs.core.filter.call(null,cljs.core.comp.call(null,new cljs.core.Keyword(null,"constraints","constraints",422775616),cljs.core.meta),non_vectors)));
var handler = cljs.core.first.call(null,cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,new cljs.core.Keyword(null,"constraints","constraints",422775616),cljs.core.meta),non_vectors));
var G__10275 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"path","path",-188191168),path], null);
var G__10275__$1 = (cljs.core.truth_(handler)?cljs.core.assoc.call(null,G__10275,new cljs.core.Keyword(null,"handler","handler",-195596612),tripod.interceptor.interceptor.call(null,handler)):G__10275);
var G__10275__$2 = (cljs.core.truth_(interceptors)?cljs.core.assoc.call(null,G__10275__$1,new cljs.core.Keyword(null,"interceptors","interceptors",-1546782951),cljs.core.mapv.call(null,tripod.interceptor.interceptor,interceptors)):G__10275__$1);
var G__10275__$3 = (cljs.core.truth_(constraints)?cljs.core.assoc.call(null,G__10275__$2,new cljs.core.Keyword(null,"constraints","constraints",422775616),constraints):G__10275__$2);
var G__10275__$4 = (cljs.core.truth_(children)?cljs.core.assoc.call(null,G__10275__$3,new cljs.core.Keyword(null,"children","children",-940561982),tripod$route$expand_terse_routes.call(null,children)):G__10275__$3);
return G__10275__$4;
})());

var G__10278 = (i__10268 + (1));
i__10268 = G__10278;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10269),tripod$route$expand_terse_routes_$_iter__10266.call(null,cljs.core.chunk_rest.call(null,s__10267__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10269),null);
}
} else {
var vec__10276 = cljs.core.first.call(null,s__10267__$2);
var path = cljs.core.nth.call(null,vec__10276,(0),null);
var more = cljs.core.nthnext.call(null,vec__10276,(1));
return cljs.core.cons.call(null,(function (){var vectors = cljs.core.filter.call(null,cljs.core.vector_QMARK_,more);
var non_vectors = cljs.core.filter.call(null,cljs.core.complement.call(null,cljs.core.vector_QMARK_),more);
var interceptors = cljs.core.not_empty.call(null,cljs.core.apply.call(null,cljs.core.concat,cljs.core.filter.call(null,cljs.core.comp.call(null,new cljs.core.Keyword(null,"interceptors","interceptors",-1546782951),cljs.core.meta),vectors)));
var children = cljs.core.not_empty.call(null,cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,new cljs.core.Keyword(null,"interceptors","interceptors",-1546782951),cljs.core.meta),vectors));
var constraints = cljs.core.not_empty.call(null,cljs.core.apply.call(null,cljs.core.merge,cljs.core.filter.call(null,cljs.core.comp.call(null,new cljs.core.Keyword(null,"constraints","constraints",422775616),cljs.core.meta),non_vectors)));
var handler = cljs.core.first.call(null,cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,new cljs.core.Keyword(null,"constraints","constraints",422775616),cljs.core.meta),non_vectors));
var G__10277 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"path","path",-188191168),path], null);
var G__10277__$1 = (cljs.core.truth_(handler)?cljs.core.assoc.call(null,G__10277,new cljs.core.Keyword(null,"handler","handler",-195596612),tripod.interceptor.interceptor.call(null,handler)):G__10277);
var G__10277__$2 = (cljs.core.truth_(interceptors)?cljs.core.assoc.call(null,G__10277__$1,new cljs.core.Keyword(null,"interceptors","interceptors",-1546782951),cljs.core.mapv.call(null,tripod.interceptor.interceptor,interceptors)):G__10277__$1);
var G__10277__$3 = (cljs.core.truth_(constraints)?cljs.core.assoc.call(null,G__10277__$2,new cljs.core.Keyword(null,"constraints","constraints",422775616),constraints):G__10277__$2);
var G__10277__$4 = (cljs.core.truth_(children)?cljs.core.assoc.call(null,G__10277__$3,new cljs.core.Keyword(null,"children","children",-940561982),tripod$route$expand_terse_routes.call(null,children)):G__10277__$3);
return G__10277__$4;
})(),tripod$route$expand_terse_routes_$_iter__10266.call(null,cljs.core.rest.call(null,s__10267__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5860__auto__.call(null,routes);
});

//# sourceMappingURL=route.js.map