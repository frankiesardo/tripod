// Compiled by ClojureScript 1.7.122 {}
goog.provide('tripod.path');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('clojure.set');
tripod.path.parse_path_token = (function tripod$path$parse_path_token(out,string){
var pred__10055 = cljs.core.re_matches;
var expr__10056 = string;
var temp__4423__auto__ = pred__10055.call(null,/^:(.+)$/,expr__10056);
if(cljs.core.truth_(temp__4423__auto__)){
var p__5811__auto__ = temp__4423__auto__;
return ((function (p__5811__auto__,temp__4423__auto__,pred__10055,expr__10056){
return (function (p__10058){
var vec__10059 = p__10058;
var _ = cljs.core.nth.call(null,vec__10059,(0),null);
var token = cljs.core.nth.call(null,vec__10059,(1),null);
var key = cljs.core.keyword.call(null,token);
return cljs.core.assoc_in.call(null,cljs.core.update_in.call(null,out,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path-parts","path-parts",945822894)], null),cljs.core.conj,key),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path-constraints","path-constraints",1831189928),key], null),"([^/]+)");
});})(p__5811__auto__,temp__4423__auto__,pred__10055,expr__10056))
.call(null,p__5811__auto__);
} else {
var temp__4423__auto____$1 = pred__10055.call(null,/^\*(.+)$/,expr__10056);
if(cljs.core.truth_(temp__4423__auto____$1)){
var p__5811__auto__ = temp__4423__auto____$1;
return ((function (p__5811__auto__,temp__4423__auto____$1,temp__4423__auto__,pred__10055,expr__10056){
return (function (p__10060){
var vec__10061 = p__10060;
var _ = cljs.core.nth.call(null,vec__10061,(0),null);
var token = cljs.core.nth.call(null,vec__10061,(1),null);
var key = cljs.core.keyword.call(null,token);
return cljs.core.assoc_in.call(null,cljs.core.update_in.call(null,out,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path-parts","path-parts",945822894)], null),cljs.core.conj,key),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path-constraints","path-constraints",1831189928),key], null),"(.*)");
});})(p__5811__auto__,temp__4423__auto____$1,temp__4423__auto__,pred__10055,expr__10056))
.call(null,p__5811__auto__);
} else {
return cljs.core.update_in.call(null,out,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path-parts","path-parts",945822894)], null),cljs.core.conj,string);
}
}
});
tripod.path.parse_path = (function tripod$path$parse_path(var_args){
var args10062 = [];
var len__6146__auto___10066 = arguments.length;
var i__6147__auto___10067 = (0);
while(true){
if((i__6147__auto___10067 < len__6146__auto___10066)){
args10062.push((arguments[i__6147__auto___10067]));

var G__10068 = (i__6147__auto___10067 + (1));
i__6147__auto___10067 = G__10068;
continue;
} else {
}
break;
}

var G__10064 = args10062.length;
switch (G__10064) {
case 1:
return tripod.path.parse_path.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return tripod.path.parse_path.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args10062.length)].join('')));

}
});

tripod.path.parse_path.cljs$core$IFn$_invoke$arity$1 = (function (pattern){
return tripod.path.parse_path.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path-parts","path-parts",945822894),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"path-constraints","path-constraints",1831189928),cljs.core.PersistentArrayMap.EMPTY], null),pattern);
});

tripod.path.parse_path.cljs$core$IFn$_invoke$arity$2 = (function (accumulated_info,pattern){
var temp__4423__auto__ = cljs.core.re_matches.call(null,/\/(.*)/,pattern);
if(cljs.core.truth_(temp__4423__auto__)){
var m = temp__4423__auto__;
var vec__10065 = m;
var _ = cljs.core.nth.call(null,vec__10065,(0),null);
var path = cljs.core.nth.call(null,vec__10065,(1),null);
return cljs.core.reduce.call(null,tripod.path.parse_path_token,accumulated_info,clojure.string.split.call(null,path,/\//));
} else {
throw cljs.core.ex_info.call(null,"Invalid route pattern",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"pattern","pattern",242135423),pattern], null));
}
});

tripod.path.parse_path.cljs$lang$maxFixedArity = 2;
tripod.path.re_escape_chars = cljs.core.set.call(null,"\\.*+|?()[]{}$^");
tripod.path.re_quote = (function tripod$path$re_quote(s){
return cljs.core.reduce.call(null,(function (s__$1,c){
if(cljs.core.truth_(tripod.path.re_escape_chars.call(null,c))){
return [cljs.core.str(s__$1),cljs.core.str("\\"),cljs.core.str(c)].join('');
} else {
return [cljs.core.str(s__$1),cljs.core.str(c)].join('');
}
}),"",s);
});
tripod.path.path_regex = (function tripod$path$path_regex(p__10071){
var map__10074 = p__10071;
var map__10074__$1 = ((((!((map__10074 == null)))?((((map__10074.cljs$lang$protocol_mask$partition0$ & (64))) || (map__10074.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10074):map__10074);
var path_parts = cljs.core.get.call(null,map__10074__$1,new cljs.core.Keyword(null,"path-parts","path-parts",945822894));
var path_constraints = cljs.core.get.call(null,map__10074__$1,new cljs.core.Keyword(null,"path-constraints","path-constraints",1831189928));
var path_parts__$1 = ((((cljs.core.count.call(null,path_parts) > (1))) && (cljs.core.empty_QMARK_.call(null,cljs.core.first.call(null,path_parts))))?cljs.core.rest.call(null,path_parts):path_parts);
return cljs.core.re_pattern.call(null,cljs.core.apply.call(null,cljs.core.str,cljs.core.interleave.call(null,cljs.core.repeat.call(null,"/"),cljs.core.map.call(null,((function (path_parts__$1,map__10074,map__10074__$1,path_parts,path_constraints){
return (function (p1__10070_SHARP_){
var or__5088__auto__ = cljs.core.get.call(null,path_constraints,p1__10070_SHARP_);
if(cljs.core.truth_(or__5088__auto__)){
return or__5088__auto__;
} else {
return tripod.path.re_quote.call(null,p1__10070_SHARP_);
}
});})(path_parts__$1,map__10074,map__10074__$1,path_parts,path_constraints))
,path_parts__$1))));
});
tripod.path.uri_encode = (function tripod$path$uri_encode(s){
return encodeURIComponent(s);
});
tripod.path.path_str = (function tripod$path$path_str(path_parts,params){
var path_params = cljs.core.filter.call(null,cljs.core.keyword_QMARK_,path_parts);
var query_map = cljs.core.not_empty.call(null,cljs.core.select_keys.call(null,params,clojure.set.difference.call(null,cljs.core.set.call(null,cljs.core.keys.call(null,params)),cljs.core.set.call(null,path_params))));
var path = ((cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [""], null),path_parts))?"/":clojure.string.join.call(null,"/",cljs.core.map.call(null,((function (path_params,query_map){
return (function (p1__10076_SHARP_){
return cljs.core.get.call(null,params,p1__10076_SHARP_,p1__10076_SHARP_);
});})(path_params,query_map))
,path_parts)));
if(cljs.core.truth_(query_map)){
return cljs.core.apply.call(null,cljs.core.str,path,"?",(function (){var iter__5860__auto__ = ((function (path_params,query_map,path){
return (function tripod$path$path_str_$_iter__10085(s__10086){
return (new cljs.core.LazySeq(null,((function (path_params,query_map,path){
return (function (){
var s__10086__$1 = s__10086;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__10086__$1);
if(temp__4425__auto__){
var s__10086__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__10086__$2)){
var c__5858__auto__ = cljs.core.chunk_first.call(null,s__10086__$2);
var size__5859__auto__ = cljs.core.count.call(null,c__5858__auto__);
var b__10088 = cljs.core.chunk_buffer.call(null,size__5859__auto__);
if((function (){var i__10087 = (0);
while(true){
if((i__10087 < size__5859__auto__)){
var vec__10091 = cljs.core._nth.call(null,c__5858__auto__,i__10087);
var k = cljs.core.nth.call(null,vec__10091,(0),null);
var v = cljs.core.nth.call(null,vec__10091,(1),null);
cljs.core.chunk_append.call(null,b__10088,[cljs.core.str(cljs.core.name.call(null,k)),cljs.core.str("="),cljs.core.str(tripod.path.uri_encode.call(null,v))].join(''));

var G__10093 = (i__10087 + (1));
i__10087 = G__10093;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10088),tripod$path$path_str_$_iter__10085.call(null,cljs.core.chunk_rest.call(null,s__10086__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10088),null);
}
} else {
var vec__10092 = cljs.core.first.call(null,s__10086__$2);
var k = cljs.core.nth.call(null,vec__10092,(0),null);
var v = cljs.core.nth.call(null,vec__10092,(1),null);
return cljs.core.cons.call(null,[cljs.core.str(cljs.core.name.call(null,k)),cljs.core.str("="),cljs.core.str(tripod.path.uri_encode.call(null,v))].join(''),tripod$path$path_str_$_iter__10085.call(null,cljs.core.rest.call(null,s__10086__$2)));
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
return iter__5860__auto__.call(null,query_map);
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
var linker_map = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,cljs.core.juxt.call(null,new cljs.core.Keyword(null,"route-name","route-name",-932603717),new cljs.core.Keyword(null,"path-parts","path-parts",945822894)),routes));
return ((function (linker_map){
return (function() { 
var tripod$path$path_for_routes_$_path_for__delegate = function (route_name,p__10097){
var vec__10099 = p__10097;
var params = cljs.core.nth.call(null,vec__10099,(0),null);
var temp__4423__auto__ = cljs.core.get.call(null,linker_map,route_name);
if(cljs.core.truth_(temp__4423__auto__)){
var path_parts = temp__4423__auto__;
return tripod.path.path_str.call(null,path_parts,params);
} else {
throw cljs.core.ex_info.call(null,"Route not found",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"route-name","route-name",-932603717),route_name], null));
}
};
var tripod$path$path_for_routes_$_path_for = function (route_name,var_args){
var p__10097 = null;
if (arguments.length > 1) {
var G__10100__i = 0, G__10100__a = new Array(arguments.length -  1);
while (G__10100__i < G__10100__a.length) {G__10100__a[G__10100__i] = arguments[G__10100__i + 1]; ++G__10100__i;}
  p__10097 = new cljs.core.IndexedSeq(G__10100__a,0);
} 
return tripod$path$path_for_routes_$_path_for__delegate.call(this,route_name,p__10097);};
tripod$path$path_for_routes_$_path_for.cljs$lang$maxFixedArity = 1;
tripod$path$path_for_routes_$_path_for.cljs$lang$applyTo = (function (arglist__10101){
var route_name = cljs.core.first(arglist__10101);
var p__10097 = cljs.core.rest(arglist__10101);
return tripod$path$path_for_routes_$_path_for__delegate(route_name,p__10097);
});
tripod$path$path_for_routes_$_path_for.cljs$core$IFn$_invoke$arity$variadic = tripod$path$path_for_routes_$_path_for__delegate;
return tripod$path$path_for_routes_$_path_for;
})()
;
;})(linker_map))
});

//# sourceMappingURL=path.js.map