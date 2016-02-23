// Compiled by ClojureScript 1.7.122 {:static-fns true, :optimize-constants true}
goog.provide('tripod.interceptor');
goog.require('cljs.core');
goog.require('clojure.string');

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
tripod.interceptor.Interceptor = (function (name,enter,leave,error,__meta,__extmap,__hash){
this.name = name;
this.enter = enter;
this.leave = leave;
this.error = error;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
tripod.interceptor.Interceptor.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5702__auto__,k__5703__auto__){
var self__ = this;
var this__5702__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__5702__auto____$1,k__5703__auto__,null);
});

tripod.interceptor.Interceptor.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5704__auto__,k13354,else__5705__auto__){
var self__ = this;
var this__5704__auto____$1 = this;
var G__13356 = (((k13354 instanceof cljs.core.Keyword))?k13354.fqn:null);
switch (G__13356) {
case "name":
return self__.name;

break;
case "enter":
return self__.enter;

break;
case "leave":
return self__.leave;

break;
case "error":
return self__.error;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k13354,else__5705__auto__);

}
});

tripod.interceptor.Interceptor.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5716__auto__,writer__5717__auto__,opts__5718__auto__){
var self__ = this;
var this__5716__auto____$1 = this;
var pr_pair__5719__auto__ = ((function (this__5716__auto____$1){
return (function (keyval__5720__auto__){
return cljs.core.pr_sequential_writer(writer__5717__auto__,cljs.core.pr_writer,""," ","",opts__5718__auto__,keyval__5720__auto__);
});})(this__5716__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__5717__auto__,pr_pair__5719__auto__,"#tripod.interceptor.Interceptor{",", ","}",opts__5718__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$name,self__.name],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$enter,self__.enter],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$leave,self__.leave],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$error,self__.error],null))], null),self__.__extmap));
});

tripod.interceptor.Interceptor.prototype.cljs$core$IIterable$ = true;

tripod.interceptor.Interceptor.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__13353){
var self__ = this;
var G__13353__$1 = this;
return (new cljs.core.RecordIter((0),G__13353__$1,4,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$name,cljs.core.cst$kw$enter,cljs.core.cst$kw$leave,cljs.core.cst$kw$error], null),cljs.core._iterator(self__.__extmap)));
});

tripod.interceptor.Interceptor.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5700__auto__){
var self__ = this;
var this__5700__auto____$1 = this;
return self__.__meta;
});

tripod.interceptor.Interceptor.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5696__auto__){
var self__ = this;
var this__5696__auto____$1 = this;
return (new tripod.interceptor.Interceptor(self__.name,self__.enter,self__.leave,self__.error,self__.__meta,self__.__extmap,self__.__hash));
});

tripod.interceptor.Interceptor.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5706__auto__){
var self__ = this;
var this__5706__auto____$1 = this;
return (4 + cljs.core.count(self__.__extmap));
});

tripod.interceptor.Interceptor.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5697__auto__){
var self__ = this;
var this__5697__auto____$1 = this;
var h__5523__auto__ = self__.__hash;
if(!((h__5523__auto__ == null))){
return h__5523__auto__;
} else {
var h__5523__auto____$1 = cljs.core.hash_imap(this__5697__auto____$1);
self__.__hash = h__5523__auto____$1;

return h__5523__auto____$1;
}
});

tripod.interceptor.Interceptor.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__5698__auto__,other__5699__auto__){
var self__ = this;
var this__5698__auto____$1 = this;
if(cljs.core.truth_((function (){var and__5076__auto__ = other__5699__auto__;
if(cljs.core.truth_(and__5076__auto__)){
var and__5076__auto____$1 = (this__5698__auto____$1.constructor === other__5699__auto__.constructor);
if(and__5076__auto____$1){
return cljs.core.equiv_map(this__5698__auto____$1,other__5699__auto__);
} else {
return and__5076__auto____$1;
}
} else {
return and__5076__auto__;
}
})())){
return true;
} else {
return false;
}
});

tripod.interceptor.Interceptor.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5711__auto__,k__5712__auto__){
var self__ = this;
var this__5711__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$name,null,cljs.core.cst$kw$enter,null,cljs.core.cst$kw$leave,null,cljs.core.cst$kw$error,null], null), null),k__5712__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5711__auto____$1),self__.__meta),k__5712__auto__);
} else {
return (new tripod.interceptor.Interceptor(self__.name,self__.enter,self__.leave,self__.error,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5712__auto__)),null));
}
});

tripod.interceptor.Interceptor.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5709__auto__,k__5710__auto__,G__13353){
var self__ = this;
var this__5709__auto____$1 = this;
var pred__13357 = cljs.core.keyword_identical_QMARK_;
var expr__13358 = k__5710__auto__;
if(cljs.core.truth_((pred__13357.cljs$core$IFn$_invoke$arity$2 ? pred__13357.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$name,expr__13358) : pred__13357.call(null,cljs.core.cst$kw$name,expr__13358)))){
return (new tripod.interceptor.Interceptor(G__13353,self__.enter,self__.leave,self__.error,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__13357.cljs$core$IFn$_invoke$arity$2 ? pred__13357.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$enter,expr__13358) : pred__13357.call(null,cljs.core.cst$kw$enter,expr__13358)))){
return (new tripod.interceptor.Interceptor(self__.name,G__13353,self__.leave,self__.error,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__13357.cljs$core$IFn$_invoke$arity$2 ? pred__13357.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$leave,expr__13358) : pred__13357.call(null,cljs.core.cst$kw$leave,expr__13358)))){
return (new tripod.interceptor.Interceptor(self__.name,self__.enter,G__13353,self__.error,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__13357.cljs$core$IFn$_invoke$arity$2 ? pred__13357.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$error,expr__13358) : pred__13357.call(null,cljs.core.cst$kw$error,expr__13358)))){
return (new tripod.interceptor.Interceptor(self__.name,self__.enter,self__.leave,G__13353,self__.__meta,self__.__extmap,null));
} else {
return (new tripod.interceptor.Interceptor(self__.name,self__.enter,self__.leave,self__.error,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5710__auto__,G__13353),null));
}
}
}
}
});

tripod.interceptor.Interceptor.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5714__auto__){
var self__ = this;
var this__5714__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$name,self__.name],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$enter,self__.enter],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$leave,self__.leave],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$error,self__.error],null))], null),self__.__extmap));
});

tripod.interceptor.Interceptor.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5701__auto__,G__13353){
var self__ = this;
var this__5701__auto____$1 = this;
return (new tripod.interceptor.Interceptor(self__.name,self__.enter,self__.leave,self__.error,G__13353,self__.__extmap,self__.__hash));
});

tripod.interceptor.Interceptor.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5707__auto__,entry__5708__auto__){
var self__ = this;
var this__5707__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5708__auto__)){
return cljs.core._assoc(this__5707__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__5708__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__5708__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5707__auto____$1,entry__5708__auto__);
}
});

tripod.interceptor.Interceptor.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$name,cljs.core.cst$sym$enter,cljs.core.cst$sym$leave,cljs.core.cst$sym$error], null);
});

tripod.interceptor.Interceptor.cljs$lang$type = true;

tripod.interceptor.Interceptor.cljs$lang$ctorPrSeq = (function (this__5736__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"tripod.interceptor/Interceptor");
});

tripod.interceptor.Interceptor.cljs$lang$ctorPrWriter = (function (this__5736__auto__,writer__5737__auto__){
return cljs.core._write(writer__5737__auto__,"tripod.interceptor/Interceptor");
});

tripod.interceptor.__GT_Interceptor = (function tripod$interceptor$__GT_Interceptor(name,enter,leave,error){
return (new tripod.interceptor.Interceptor(name,enter,leave,error,null,null,null));
});

tripod.interceptor.map__GT_Interceptor = (function tripod$interceptor$map__GT_Interceptor(G__13355){
return (new tripod.interceptor.Interceptor(cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(G__13355),cljs.core.cst$kw$enter.cljs$core$IFn$_invoke$arity$1(G__13355),cljs.core.cst$kw$leave.cljs$core$IFn$_invoke$arity$1(G__13355),cljs.core.cst$kw$error.cljs$core$IFn$_invoke$arity$1(G__13355),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__13355,cljs.core.cst$kw$name,cljs.core.array_seq([cljs.core.cst$kw$enter,cljs.core.cst$kw$leave,cljs.core.cst$kw$error], 0)),null));
});


/**
 * @interface
 */
tripod.interceptor.IntoInterceptor = function(){};

/**
 * Given a value, produce an Interceptor Record.
 */
tripod.interceptor._interceptor = (function tripod$interceptor$_interceptor(t){
if((!((t == null))) && (!((t.tripod$interceptor$IntoInterceptor$_interceptor$arity$1 == null)))){
return t.tripod$interceptor$IntoInterceptor$_interceptor$arity$1(t);
} else {
var x__5743__auto__ = (((t == null))?null:t);
var m__5744__auto__ = (tripod.interceptor._interceptor[goog.typeOf(x__5743__auto__)]);
if(!((m__5744__auto__ == null))){
return (m__5744__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5744__auto__.cljs$core$IFn$_invoke$arity$1(t) : m__5744__auto__.call(null,t));
} else {
var m__5744__auto____$1 = (tripod.interceptor._interceptor["_"]);
if(!((m__5744__auto____$1 == null))){
return (m__5744__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__5744__auto____$1.cljs$core$IFn$_invoke$arity$1(t) : m__5744__auto____$1.call(null,t));
} else {
throw cljs.core.missing_protocol("IntoInterceptor.-interceptor",t);
}
}
}
});

tripod.interceptor.interceptor;
cljs.core.PersistentArrayMap.prototype.tripod$interceptor$IntoInterceptor$ = true;

cljs.core.PersistentArrayMap.prototype.tripod$interceptor$IntoInterceptor$_interceptor$arity$1 = (function (t){
var t__$1 = this;
return tripod.interceptor.map__GT_Interceptor(t__$1);
});

cljs.core.PersistentHashMap.prototype.tripod$interceptor$IntoInterceptor$ = true;

cljs.core.PersistentHashMap.prototype.tripod$interceptor$IntoInterceptor$_interceptor$arity$1 = (function (t){
var t__$1 = this;
return tripod.interceptor.map__GT_Interceptor(t__$1);
});

(tripod.interceptor.IntoInterceptor["function"] = true);

(tripod.interceptor._interceptor["function"] = (function (t){
var G__13362 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$enter,(function (context){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(context,cljs.core.cst$kw$response,(function (){var G__13363 = cljs.core.cst$kw$request.cljs$core$IFn$_invoke$arity$1(context);
return (t.cljs$core$IFn$_invoke$arity$1 ? t.cljs$core$IFn$_invoke$arity$1(G__13363) : t.call(null,G__13363));
})());
})], null);
return (tripod.interceptor.interceptor.cljs$core$IFn$_invoke$arity$1 ? tripod.interceptor.interceptor.cljs$core$IFn$_invoke$arity$1(G__13362) : tripod.interceptor.interceptor.call(null,G__13362));
}));

cljs.core.Var.prototype.tripod$interceptor$IntoInterceptor$ = true;

cljs.core.Var.prototype.tripod$interceptor$IntoInterceptor$_interceptor$arity$1 = (function (t){
var t__$1 = this;
var map__13364 = cljs.core.meta(t__$1);
var map__13364__$1 = ((((!((map__13364 == null)))?((((map__13364.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13364.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13364):map__13364);
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13364__$1,cljs.core.cst$kw$ns);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13364__$1,cljs.core.cst$kw$name);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__13366 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(t__$1) : cljs.core.deref.call(null,t__$1));
return (tripod.interceptor.interceptor.cljs$core$IFn$_invoke$arity$1 ? tripod.interceptor.interceptor.cljs$core$IFn$_invoke$arity$1(G__13366) : tripod.interceptor.interceptor.call(null,G__13366));
})(),cljs.core.cst$kw$name,cljs.core.keyword.cljs$core$IFn$_invoke$arity$2([cljs.core.str(ns)].join(''),[cljs.core.str(name)].join('')));
});

tripod.interceptor.Interceptor.prototype.tripod$interceptor$IntoInterceptor$ = true;

tripod.interceptor.Interceptor.prototype.tripod$interceptor$IntoInterceptor$_interceptor$arity$1 = (function (t){
var t__$1 = this;
return t__$1;
});
tripod.interceptor.interceptor_name = (function tripod$interceptor$interceptor_name(n){
if(!(((n == null)) || ((n instanceof cljs.core.Keyword)))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Name must be keyword or nil",new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$name,n], null));
} else {
return n;
}
});
tripod.interceptor.interceptor_QMARK_ = (function tripod$interceptor$interceptor_QMARK_(o){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.type(o),tripod.interceptor.Interceptor);
});
tripod.interceptor.valid_interceptor_QMARK_ = (function tripod$interceptor$valid_interceptor_QMARK_(o){
var temp__4423__auto__ = (function (){var and__5076__auto__ = tripod.interceptor.interceptor_QMARK_(o);
if(cljs.core.truth_(and__5076__auto__)){
return cljs.core.vals(cljs.core.select_keys(o,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$enter,cljs.core.cst$kw$leave,cljs.core.cst$kw$error], null)));
} else {
return and__5076__auto__;
}
})();
if(cljs.core.truth_(temp__4423__auto__)){
var int_vals = temp__4423__auto__;
var and__5076__auto__ = cljs.core.some(cljs.core.identity,int_vals);
if(cljs.core.truth_(and__5076__auto__)){
var and__5076__auto____$1 = cljs.core.every_QMARK_(cljs.core.fn_QMARK_,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,int_vals));
if(and__5076__auto____$1){
var and__5076__auto____$2 = tripod.interceptor.interceptor_name(cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(o));
if(cljs.core.truth_(and__5076__auto____$2)){
return true;
} else {
return and__5076__auto____$2;
}
} else {
return and__5076__auto____$1;
}
} else {
return and__5076__auto__;
}
} else {
return false;
}
});
/**
 * Given a value, produces and returns an Interceptor (Record).
 */
tripod.interceptor.interceptor = (function tripod$interceptor$interceptor(t){
if(((!(((!((t == null)))?(((false) || (t.tripod$interceptor$IntoInterceptor$))?true:(((!t.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(tripod.interceptor.IntoInterceptor,t):false)):cljs.core.native_satisfies_QMARK_(tripod.interceptor.IntoInterceptor,t))))?(function(){throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("You're trying to use something as an interceptor\n                           that isn't supported by the protocol; Perhaps you need to extend it?",new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$t,t,cljs.core.cst$kw$type,cljs.core.type(t)], null))})():true)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(cljs.core.cst$sym$if_DASH_not,cljs.core.list(cljs.core.cst$sym$satisfies_QMARK_,cljs.core.cst$sym$IntoInterceptor,cljs.core.cst$sym$t),cljs.core.list(cljs.core.cst$sym$throw,cljs.core.list(cljs.core.cst$sym$ex_DASH_info,"You're trying to use something as an interceptor\n                           that isn't supported by the protocol; Perhaps you need to extend it?",new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$t,cljs.core.cst$sym$t,cljs.core.cst$kw$type,cljs.core.list(cljs.core.cst$sym$type,cljs.core.cst$sym$t)], null))),true)], 0)))].join('')));
}

var _PERCENT_ = tripod.interceptor._interceptor(t);
if(cljs.core.truth_(tripod.interceptor.valid_interceptor_QMARK_)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$sym$valid_DASH_interceptor_QMARK_], 0)))].join('')));
}

return _PERCENT_;
});
