// Compiled by ClojureScript 1.7.122 {:static-fns true, :optimize-constants true}
goog.provide('tripod.path');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('clojure.set');
tripod.path.parse_path_token = (function tripod$path$parse_path_token(out,string){
var pred__13174 = cljs.core.re_matches;
var expr__13175 = string;
var temp__4423__auto__ = (pred__13174.cljs$core$IFn$_invoke$arity$2 ? pred__13174.cljs$core$IFn$_invoke$arity$2(/^:(.+)$/,expr__13175) : pred__13174.call(null,/^:(.+)$/,expr__13175));
if(cljs.core.truth_(temp__4423__auto__)){
var p__5811__auto__ = temp__4423__auto__;
return ((function (p__5811__auto__,temp__4423__auto__,pred__13174,expr__13175){
return (function (p__13177){
var vec__13178 = p__13177;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13178,(0),null);
var token = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13178,(1),null);
var key = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(token);
return cljs.core.assoc_in(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(out,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$path_DASH_parts], null),cljs.core.conj,key),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$path_DASH_constraints,key], null),"([^/]+)");
});})(p__5811__auto__,temp__4423__auto__,pred__13174,expr__13175))
.call(null,p__5811__auto__);
} else {
var temp__4423__auto____$1 = (pred__13174.cljs$core$IFn$_invoke$arity$2 ? pred__13174.cljs$core$IFn$_invoke$arity$2(/^\*(.+)$/,expr__13175) : pred__13174.call(null,/^\*(.+)$/,expr__13175));
if(cljs.core.truth_(temp__4423__auto____$1)){
var p__5811__auto__ = temp__4423__auto____$1;
return ((function (p__5811__auto__,temp__4423__auto____$1,temp__4423__auto__,pred__13174,expr__13175){
return (function (p__13179){
var vec__13180 = p__13179;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13180,(0),null);
var token = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13180,(1),null);
var key = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(token);
return cljs.core.assoc_in(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(out,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$path_DASH_parts], null),cljs.core.conj,key),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$path_DASH_constraints,key], null),"(.*)");
});})(p__5811__auto__,temp__4423__auto____$1,temp__4423__auto__,pred__13174,expr__13175))
.call(null,p__5811__auto__);
} else {
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(out,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$path_DASH_parts], null),cljs.core.conj,string);
}
}
});
tripod.path.parse_path = (function tripod$path$parse_path(var_args){
var args13181 = [];
var len__6146__auto___13185 = arguments.length;
var i__6147__auto___13186 = (0);
while(true){
if((i__6147__auto___13186 < len__6146__auto___13185)){
args13181.push((arguments[i__6147__auto___13186]));

var G__13187 = (i__6147__auto___13186 + (1));
i__6147__auto___13186 = G__13187;
continue;
} else {
}
break;
}

var G__13183 = args13181.length;
switch (G__13183) {
case 1:
return tripod.path.parse_path.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return tripod.path.parse_path.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13181.length)].join('')));

}
});

tripod.path.parse_path.cljs$core$IFn$_invoke$arity$1 = (function (pattern){
return tripod.path.parse_path.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$path_DASH_parts,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$path_DASH_constraints,cljs.core.PersistentArrayMap.EMPTY], null),pattern);
});

tripod.path.parse_path.cljs$core$IFn$_invoke$arity$2 = (function (accumulated_info,pattern){
var temp__4423__auto__ = cljs.core.re_matches(/\/(.*)/,pattern);
if(cljs.core.truth_(temp__4423__auto__)){
var m = temp__4423__auto__;
var vec__13184 = m;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13184,(0),null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13184,(1),null);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(tripod.path.parse_path_token,accumulated_info,clojure.string.split.cljs$core$IFn$_invoke$arity$2(path,/\//));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Invalid route pattern",new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$pattern,pattern], null));
}
});

tripod.path.parse_path.cljs$lang$maxFixedArity = 2;
tripod.path.re_escape_chars = cljs.core.set("\\.*+|?()[]{}$^");
tripod.path.re_quote = (function tripod$path$re_quote(s){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,c){
if(cljs.core.truth_((tripod.path.re_escape_chars.cljs$core$IFn$_invoke$arity$1 ? tripod.path.re_escape_chars.cljs$core$IFn$_invoke$arity$1(c) : tripod.path.re_escape_chars.call(null,c)))){
return [cljs.core.str(s__$1),cljs.core.str("\\"),cljs.core.str(c)].join('');
} else {
return [cljs.core.str(s__$1),cljs.core.str(c)].join('');
}
}),"",s);
});
tripod.path.path_regex = (function tripod$path$path_regex(p__13190){
var map__13193 = p__13190;
var map__13193__$1 = ((((!((map__13193 == null)))?((((map__13193.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13193.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13193):map__13193);
var path_parts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13193__$1,cljs.core.cst$kw$path_DASH_parts);
var path_constraints = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13193__$1,cljs.core.cst$kw$path_DASH_constraints);
var path_parts__$1 = ((((cljs.core.count(path_parts) > (1))) && (cljs.core.empty_QMARK_(cljs.core.first(path_parts))))?cljs.core.rest(path_parts):path_parts);
return cljs.core.re_pattern(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(cljs.core.repeat.cljs$core$IFn$_invoke$arity$1("/"),cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (path_parts__$1,map__13193,map__13193__$1,path_parts,path_constraints){
return (function (p1__13189_SHARP_){
var or__5088__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(path_constraints,p1__13189_SHARP_);
if(cljs.core.truth_(or__5088__auto__)){
return or__5088__auto__;
} else {
return tripod.path.re_quote(p1__13189_SHARP_);
}
});})(path_parts__$1,map__13193,map__13193__$1,path_parts,path_constraints))
,path_parts__$1))));
});
tripod.path.uri_encode = (function tripod$path$uri_encode(s){
return encodeURIComponent(s);
});
tripod.path.path_str = (function tripod$path$path_str(path_parts,params){
var path_params = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.keyword_QMARK_,path_parts);
var query_map = cljs.core.not_empty(cljs.core.select_keys(params,clojure.set.difference.cljs$core$IFn$_invoke$arity$2(cljs.core.set(cljs.core.keys(params)),cljs.core.set(path_params))));
var path = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [""], null),path_parts))?"/":clojure.string.join.cljs$core$IFn$_invoke$arity$2("/",cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (path_params,query_map){
return (function (p1__13195_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(params,p1__13195_SHARP_,p1__13195_SHARP_);
});})(path_params,query_map))
,path_parts)));
if(cljs.core.truth_(query_map)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.str,path,"?",(function (){var iter__5860__auto__ = ((function (path_params,query_map,path){
return (function tripod$path$path_str_$_iter__13206(s__13207){
return (new cljs.core.LazySeq(null,((function (path_params,query_map,path){
return (function (){
var s__13207__$1 = s__13207;
while(true){
var temp__4425__auto__ = cljs.core.seq(s__13207__$1);
if(temp__4425__auto__){
var s__13207__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(s__13207__$2)){
var c__5858__auto__ = cljs.core.chunk_first(s__13207__$2);
var size__5859__auto__ = cljs.core.count(c__5858__auto__);
var b__13209 = cljs.core.chunk_buffer(size__5859__auto__);
if((function (){var i__13208 = (0);
while(true){
if((i__13208 < size__5859__auto__)){
var vec__13214 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__5858__auto__,i__13208);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13214,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13214,(1),null);
cljs.core.chunk_append(b__13209,[cljs.core.str(cljs.core.name(k)),cljs.core.str("="),cljs.core.str(tripod.path.uri_encode(v))].join(''));

var G__13216 = (i__13208 + (1));
i__13208 = G__13216;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__13209),tripod$path$path_str_$_iter__13206(cljs.core.chunk_rest(s__13207__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__13209),null);
}
} else {
var vec__13215 = cljs.core.first(s__13207__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13215,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13215,(1),null);
return cljs.core.cons([cljs.core.str(cljs.core.name(k)),cljs.core.str("="),cljs.core.str(tripod.path.uri_encode(v))].join(''),tripod$path$path_str_$_iter__13206(cljs.core.rest(s__13207__$2)));
}
} else {
return null;
}
break;
}
});})(path_params,query_map,path))
,null,null));
});})(path_params,query_map,path))
;
return iter__5860__auto__(query_map);
})());
} else {
return path;
}
});
/**
 * Given a route table returns a path-for function.
 *   A path-for function accepts a route name and optionally a params map and returns a path string
 */
tripod.path.path_for_routes = (function tripod$path$path_for_routes(routes){
var linker_map = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$route_DASH_name,cljs.core.cst$kw$path_DASH_parts),routes));
return ((function (linker_map){
return (function() { 
var tripod$path$path_for_routes_$_path_for__delegate = function (route_name,p__13220){
var vec__13222 = p__13220;
var params = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13222,(0),null);
var temp__4423__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(linker_map,route_name);
if(cljs.core.truth_(temp__4423__auto__)){
var path_parts = temp__4423__auto__;
return tripod.path.path_str(path_parts,params);
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Route not found",new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$route_DASH_name,route_name], null));
}
};
var tripod$path$path_for_routes_$_path_for = function (route_name,var_args){
var p__13220 = null;
if (arguments.length > 1) {
var G__13223__i = 0, G__13223__a = new Array(arguments.length -  1);
while (G__13223__i < G__13223__a.length) {G__13223__a[G__13223__i] = arguments[G__13223__i + 1]; ++G__13223__i;}
  p__13220 = new cljs.core.IndexedSeq(G__13223__a,0);
} 
return tripod$path$path_for_routes_$_path_for__delegate.call(this,route_name,p__13220);};
tripod$path$path_for_routes_$_path_for.cljs$lang$maxFixedArity = 1;
tripod$path$path_for_routes_$_path_for.cljs$lang$applyTo = (function (arglist__13224){
var route_name = cljs.core.first(arglist__13224);
var p__13220 = cljs.core.rest(arglist__13224);
return tripod$path$path_for_routes_$_path_for__delegate(route_name,p__13220);
});
tripod$path$path_for_routes_$_path_for.cljs$core$IFn$_invoke$arity$variadic = tripod$path$path_for_routes_$_path_for__delegate;
return tripod$path$path_for_routes_$_path_for;
})()
;
;})(linker_map))
});
