// Compiled by ClojureScript 1.7.122 {}
goog.provide('sablono.util');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('clojure.set');
goog.require('clojure.string');
sablono.util._STAR_base_url_STAR_ = null;

/**
 * @interface
 */
sablono.util.ToString = function(){};

/**
 * Convert a value into a string.
 */
sablono.util.to_str = (function sablono$util$to_str(x){
if((!((x == null))) && (!((x.sablono$util$ToString$to_str$arity$1 == null)))){
return x.sablono$util$ToString$to_str$arity$1(x);
} else {
var x__5743__auto__ = (((x == null))?null:x);
var m__5744__auto__ = (sablono.util.to_str[goog.typeOf(x__5743__auto__)]);
if(!((m__5744__auto__ == null))){
return m__5744__auto__.call(null,x);
} else {
var m__5744__auto____$1 = (sablono.util.to_str["_"]);
if(!((m__5744__auto____$1 == null))){
return m__5744__auto____$1.call(null,x);
} else {
throw cljs.core.missing_protocol.call(null,"ToString.to-str",x);
}
}
}
});


/**
 * @interface
 */
sablono.util.ToURI = function(){};

/**
 * Convert a value into a URI.
 */
sablono.util.to_uri = (function sablono$util$to_uri(x){
if((!((x == null))) && (!((x.sablono$util$ToURI$to_uri$arity$1 == null)))){
return x.sablono$util$ToURI$to_uri$arity$1(x);
} else {
var x__5743__auto__ = (((x == null))?null:x);
var m__5744__auto__ = (sablono.util.to_uri[goog.typeOf(x__5743__auto__)]);
if(!((m__5744__auto__ == null))){
return m__5744__auto__.call(null,x);
} else {
var m__5744__auto____$1 = (sablono.util.to_uri["_"]);
if(!((m__5744__auto____$1 == null))){
return m__5744__auto____$1.call(null,x);
} else {
throw cljs.core.missing_protocol.call(null,"ToURI.to-uri",x);
}
}
}
});

/**
 * Converts its arguments into a string using to-str.
 */
sablono.util.as_str = (function sablono$util$as_str(var_args){
var args__6153__auto__ = [];
var len__6146__auto___12009 = arguments.length;
var i__6147__auto___12010 = (0);
while(true){
if((i__6147__auto___12010 < len__6146__auto___12009)){
args__6153__auto__.push((arguments[i__6147__auto___12010]));

var G__12011 = (i__6147__auto___12010 + (1));
i__6147__auto___12010 = G__12011;
continue;
} else {
}
break;
}

var argseq__6154__auto__ = ((((0) < args__6153__auto__.length))?(new cljs.core.IndexedSeq(args__6153__auto__.slice((0)),(0))):null);
return sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(argseq__6154__auto__);
});

sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic = (function (xs){
return cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,sablono.util.to_str,xs));
});

sablono.util.as_str.cljs$lang$maxFixedArity = (0);

sablono.util.as_str.cljs$lang$applyTo = (function (seq12008){
return sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12008));
});
/**
 * Returns camel case version of the key, e.g. :http-equiv becomes :httpEquiv.
 */
sablono.util.camel_case = (function sablono$util$camel_case(k){
if(((k instanceof cljs.core.Keyword)) || (typeof k === 'string') || ((k instanceof cljs.core.Symbol))){
var vec__12013 = clojure.string.split.call(null,cljs.core.name.call(null,k),/-/);
var first_word = cljs.core.nth.call(null,vec__12013,(0),null);
var words = cljs.core.nthnext.call(null,vec__12013,(1));
if((cljs.core.empty_QMARK_.call(null,words)) || (cljs.core._EQ_.call(null,"aria",first_word)) || (cljs.core._EQ_.call(null,"data",first_word))){
return k;
} else {
return cljs.core.keyword.call(null,clojure.string.join.call(null,cljs.core.conj.call(null,cljs.core.map.call(null,clojure.string.capitalize,words),first_word)));
}
} else {
return k;
}
});
/**
 * Recursively transforms all map keys into camel case.
 */
sablono.util.camel_case_keys = (function sablono$util$camel_case_keys(m){
if(cljs.core.map_QMARK_.call(null,m)){
var ks = cljs.core.keys.call(null,m);
var kmap = cljs.core.zipmap.call(null,ks,cljs.core.map.call(null,sablono.util.camel_case,ks));
var G__12015 = clojure.set.rename_keys.call(null,m,kmap);
var G__12015__$1 = ((cljs.core.map_QMARK_.call(null,new cljs.core.Keyword(null,"style","style",-496642736).cljs$core$IFn$_invoke$arity$1(m)))?cljs.core.update_in.call(null,G__12015,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"style","style",-496642736)], null),sablono$util$camel_case_keys):G__12015);
return G__12015__$1;
} else {
return m;
}
});
/**
 * Return true if `x` is an HTML element. True when `x` is a vector
 *   and the first element is a keyword, e.g. `[:div]` or `[:div [:span "x"]`.
 */
sablono.util.element_QMARK_ = (function sablono$util$element_QMARK_(x){
return (cljs.core.vector_QMARK_.call(null,x)) && ((cljs.core.first.call(null,x) instanceof cljs.core.Keyword));
});
/**
 * Converts all HTML attributes to their DOM equivalents.
 */
sablono.util.html_to_dom_attrs = (function sablono$util$html_to_dom_attrs(attrs){
return clojure.set.rename_keys.call(null,sablono.util.camel_case_keys.call(null,attrs),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"className","className",-1983287057),new cljs.core.Keyword(null,"for","for",-1323786319),new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720)], null));
});
/**
 * Join the `classes` with a whitespace.
 */
sablono.util.join_classes = (function sablono$util$join_classes(classes){
return clojure.string.join.call(null," ",cljs.core.flatten.call(null,cljs.core.map.call(null,(function (p1__12016_SHARP_){
if(typeof p1__12016_SHARP_ === 'string'){
return p1__12016_SHARP_;
} else {
return cljs.core.seq.call(null,p1__12016_SHARP_);

}
}),classes)));
});
/**
 * Return true if the element `type` needs to be wrapped.
 */
sablono.util.wrapped_type_QMARK_ = (function sablono$util$wrapped_type_QMARK_(type){
return cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),null,new cljs.core.Keyword(null,"option","option",65132272),null,new cljs.core.Keyword(null,"input","input",556931961),null], null), null),cljs.core.keyword.call(null,type));
});
/**
 * Return the symbol of a fn that build a React element. 
 */
sablono.util.react_fn = (function sablono$util$react_fn(type){
if(cljs.core.truth_(sablono.util.wrapped_type_QMARK_.call(null,type))){
return new cljs.core.Symbol("sablono.interpreter","create-element","sablono.interpreter/create-element",748785555,null);
} else {
return new cljs.core.Symbol("js","React.createElement","js/React.createElement",1766367641,null);
}
});
cljs.core.Keyword.prototype.sablono$util$ToString$ = true;

cljs.core.Keyword.prototype.sablono$util$ToString$to_str$arity$1 = (function (x){
var x__$1 = this;
return cljs.core.name.call(null,x__$1);
});

goog.Uri.prototype.sablono$util$ToString$ = true;

goog.Uri.prototype.sablono$util$ToString$to_str$arity$1 = (function (x){
var x__$1 = this;
if(cljs.core.truth_((function (){var or__5088__auto__ = x__$1.hasDomain();
if(cljs.core.truth_(or__5088__auto__)){
return or__5088__auto__;
} else {
return ((x__$1.getPath() == null)) || (cljs.core.not.call(null,cljs.core.re_matches.call(null,/^\/.*/,x__$1.getPath())));
}
})())){
return [cljs.core.str(x__$1)].join('');
} else {
var base = [cljs.core.str(sablono.util._STAR_base_url_STAR_)].join('');
if(cljs.core.truth_(cljs.core.re_matches.call(null,/.*\/$/,base))){
return [cljs.core.str(cljs.core.subs.call(null,base,(0),(cljs.core.count.call(null,base) - (1)))),cljs.core.str(x__$1)].join('');
} else {
return [cljs.core.str(base),cljs.core.str(x__$1)].join('');
}
}
});

(sablono.util.ToString["null"] = true);

(sablono.util.to_str["null"] = (function (_){
return "";
}));

(sablono.util.ToString["number"] = true);

(sablono.util.to_str["number"] = (function (x){
return [cljs.core.str(x)].join('');
}));

(sablono.util.ToString["_"] = true);

(sablono.util.to_str["_"] = (function (x){
return [cljs.core.str(x)].join('');
}));
goog.Uri.prototype.sablono$util$ToURI$ = true;

goog.Uri.prototype.sablono$util$ToURI$to_uri$arity$1 = (function (x){
var x__$1 = this;
return x__$1;
});

(sablono.util.ToURI["_"] = true);

(sablono.util.to_uri["_"] = (function (x){
return (new goog.Uri([cljs.core.str(x)].join('')));
}));

//# sourceMappingURL=util.js.map