// Compiled by ClojureScript 1.7.122 {}
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
return cljs.core._lookup.call(null,this__5702__auto____$1,k__5703__auto__,null);
});

tripod.interceptor.Interceptor.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5704__auto__,k10282,else__5705__auto__){
var self__ = this;
var this__5704__auto____$1 = this;
var G__10284 = (((k10282 instanceof cljs.core.Keyword))?k10282.fqn:null);
switch (G__10284) {
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
return cljs.core.get.call(null,self__.__extmap,k10282,else__5705__auto__);

}
});

tripod.interceptor.Interceptor.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5716__auto__,writer__5717__auto__,opts__5718__auto__){
var self__ = this;
var this__5716__auto____$1 = this;
var pr_pair__5719__auto__ = ((function (this__5716__auto____$1){
return (function (keyval__5720__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__5717__auto__,cljs.core.pr_writer,""," ","",opts__5718__auto__,keyval__5720__auto__);
});})(this__5716__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__5717__auto__,pr_pair__5719__auto__,"#tripod.interceptor.Interceptor{",", ","}",opts__5718__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"name","name",1843675177),self__.name],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"enter","enter",1792452624),self__.enter],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"leave","leave",1022579443),self__.leave],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"error","error",-978969032),self__.error],null))], null),self__.__extmap));
});

tripod.interceptor.Interceptor.prototype.cljs$core$IIterable$ = true;

tripod.interceptor.Interceptor.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__10281){
var self__ = this;
var G__10281__$1 = this;
return (new cljs.core.RecordIter((0),G__10281__$1,4,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"enter","enter",1792452624),new cljs.core.Keyword(null,"leave","leave",1022579443),new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core._iterator.call(null,self__.__extmap)));
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
return (4 + cljs.core.count.call(null,self__.__extmap));
});

tripod.interceptor.Interceptor.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5697__auto__){
var self__ = this;
var this__5697__auto____$1 = this;
var h__5523__auto__ = self__.__hash;
if(!((h__5523__auto__ == null))){
return h__5523__auto__;
} else {
var h__5523__auto____$1 = cljs.core.hash_imap.call(null,this__5697__auto____$1);
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
return cljs.core.equiv_map.call(null,this__5698__auto____$1,other__5699__auto__);
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
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),null,new cljs.core.Keyword(null,"enter","enter",1792452624),null,new cljs.core.Keyword(null,"leave","leave",1022579443),null,new cljs.core.Keyword(null,"error","error",-978969032),null], null), null),k__5712__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__5711__auto____$1),self__.__meta),k__5712__auto__);
} else {
return (new tripod.interceptor.Interceptor(self__.name,self__.enter,self__.leave,self__.error,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__5712__auto__)),null));
}
});

tripod.interceptor.Interceptor.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5709__auto__,k__5710__auto__,G__10281){
var self__ = this;
var this__5709__auto____$1 = this;
var pred__10285 = cljs.core.keyword_identical_QMARK_;
var expr__10286 = k__5710__auto__;
if(cljs.core.truth_(pred__10285.call(null,new cljs.core.Keyword(null,"name","name",1843675177),expr__10286))){
return (new tripod.interceptor.Interceptor(G__10281,self__.enter,self__.leave,self__.error,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__10285.call(null,new cljs.core.Keyword(null,"enter","enter",1792452624),expr__10286))){
return (new tripod.interceptor.Interceptor(self__.name,G__10281,self__.leave,self__.error,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__10285.call(null,new cljs.core.Keyword(null,"leave","leave",1022579443),expr__10286))){
return (new tripod.interceptor.Interceptor(self__.name,self__.enter,G__10281,self__.error,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__10285.call(null,new cljs.core.Keyword(null,"error","error",-978969032),expr__10286))){
return (new tripod.interceptor.Interceptor(self__.name,self__.enter,self__.leave,G__10281,self__.__meta,self__.__extmap,null));
} else {
return (new tripod.interceptor.Interceptor(self__.name,self__.enter,self__.leave,self__.error,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__5710__auto__,G__10281),null));
}
}
}
}
});

tripod.interceptor.Interceptor.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5714__auto__){
var self__ = this;
var this__5714__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"name","name",1843675177),self__.name],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"enter","enter",1792452624),self__.enter],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"leave","leave",1022579443),self__.leave],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"error","error",-978969032),self__.error],null))], null),self__.__extmap));
});

tripod.interceptor.Interceptor.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5701__auto__,G__10281){
var self__ = this;
var this__5701__auto____$1 = this;
return (new tripod.interceptor.Interceptor(self__.name,self__.enter,self__.leave,self__.error,G__10281,self__.__extmap,self__.__hash));
});

tripod.interceptor.Interceptor.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5707__auto__,entry__5708__auto__){
var self__ = this;
var this__5707__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__5708__auto__)){
return cljs.core._assoc.call(null,this__5707__auto____$1,cljs.core._nth.call(null,entry__5708__auto__,(0)),cljs.core._nth.call(null,entry__5708__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__5707__auto____$1,entry__5708__auto__);
}
});

tripod.interceptor.Interceptor.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"name","name",-810760592,null),new cljs.core.Symbol(null,"enter","enter",-861983145,null),new cljs.core.Symbol(null,"leave","leave",-1631856326,null),new cljs.core.Symbol(null,"error","error",661562495,null)], null);
});

tripod.interceptor.Interceptor.cljs$lang$type = true;

tripod.interceptor.Interceptor.cljs$lang$ctorPrSeq = (function (this__5736__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"tripod.interceptor/Interceptor");
});

tripod.interceptor.Interceptor.cljs$lang$ctorPrWriter = (function (this__5736__auto__,writer__5737__auto__){
return cljs.core._write.call(null,writer__5737__auto__,"tripod.interceptor/Interceptor");
});

tripod.interceptor.__GT_Interceptor = (function tripod$interceptor$__GT_Interceptor(name,enter,leave,error){
return (new tripod.interceptor.Interceptor(name,enter,leave,error,null,null,null));
});

tripod.interceptor.map__GT_Interceptor = (function tripod$interceptor$map__GT_Interceptor(G__10283){
return (new tripod.interceptor.Interceptor(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(G__10283),new cljs.core.Keyword(null,"enter","enter",1792452624).cljs$core$IFn$_invoke$arity$1(G__10283),new cljs.core.Keyword(null,"leave","leave",1022579443).cljs$core$IFn$_invoke$arity$1(G__10283),new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(G__10283),null,cljs.core.dissoc.call(null,G__10283,new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"enter","enter",1792452624),new cljs.core.Keyword(null,"leave","leave",1022579443),new cljs.core.Keyword(null,"error","error",-978969032)),null));
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
return m__5744__auto__.call(null,t);
} else {
var m__5744__auto____$1 = (tripod.interceptor._interceptor["_"]);
if(!((m__5744__auto____$1 == null))){
return m__5744__auto____$1.call(null,t);
} else {
throw cljs.core.missing_protocol.call(null,"IntoInterceptor.-interceptor",t);
}
}
}
});

tripod.interceptor.interceptor;
cljs.core.PersistentArrayMap.prototype.tripod$interceptor$IntoInterceptor$ = true;

cljs.core.PersistentArrayMap.prototype.tripod$interceptor$IntoInterceptor$_interceptor$arity$1 = (function (t){
var t__$1 = this;
return tripod.interceptor.map__GT_Interceptor.call(null,t__$1);
});

cljs.core.PersistentHashMap.prototype.tripod$interceptor$IntoInterceptor$ = true;

cljs.core.PersistentHashMap.prototype.tripod$interceptor$IntoInterceptor$_interceptor$arity$1 = (function (t){
var t__$1 = this;
return tripod.interceptor.map__GT_Interceptor.call(null,t__$1);
});

(tripod.interceptor.IntoInterceptor["function"] = true);

(tripod.interceptor._interceptor["function"] = (function (t){
return tripod.interceptor.interceptor.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"enter","enter",1792452624),(function (context){
return cljs.core.assoc.call(null,context,new cljs.core.Keyword(null,"response","response",-1068424192),t.call(null,new cljs.core.Keyword(null,"request","request",1772954723).cljs$core$IFn$_invoke$arity$1(context)));
})], null));
}));

cljs.core.Var.prototype.tripod$interceptor$IntoInterceptor$ = true;

cljs.core.Var.prototype.tripod$interceptor$IntoInterceptor$_interceptor$arity$1 = (function (t){
var t__$1 = this;
var map__10289 = cljs.core.meta.call(null,t__$1);
var map__10289__$1 = ((((!((map__10289 == null)))?((((map__10289.cljs$lang$protocol_mask$partition0$ & (64))) || (map__10289.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10289):map__10289);
var ns = cljs.core.get.call(null,map__10289__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var name = cljs.core.get.call(null,map__10289__$1,new cljs.core.Keyword(null,"name","name",1843675177));
return cljs.core.assoc.call(null,tripod.interceptor.interceptor.call(null,cljs.core.deref.call(null,t__$1)),new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.keyword.call(null,[cljs.core.str(ns)].join(''),[cljs.core.str(name)].join('')));
});

tripod.interceptor.Interceptor.prototype.tripod$interceptor$IntoInterceptor$ = true;

tripod.interceptor.Interceptor.prototype.tripod$interceptor$IntoInterceptor$_interceptor$arity$1 = (function (t){
var t__$1 = this;
return t__$1;
});
tripod.interceptor.interceptor_name = (function tripod$interceptor$interceptor_name(n){
if(!(((n == null)) || ((n instanceof cljs.core.Keyword)))){
throw cljs.core.ex_info.call(null,"Name must be keyword or nil",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),n], null));
} else {
return n;
}
});
tripod.interceptor.interceptor_QMARK_ = (function tripod$interceptor$interceptor_QMARK_(o){
return cljs.core._EQ_.call(null,cljs.core.type.call(null,o),tripod.interceptor.Interceptor);
});
tripod.interceptor.valid_interceptor_QMARK_ = (function tripod$interceptor$valid_interceptor_QMARK_(o){
var temp__4423__auto__ = (function (){var and__5076__auto__ = tripod.interceptor.interceptor_QMARK_.call(null,o);
if(cljs.core.truth_(and__5076__auto__)){
return cljs.core.vals.call(null,cljs.core.select_keys.call(null,o,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"enter","enter",1792452624),new cljs.core.Keyword(null,"leave","leave",1022579443),new cljs.core.Keyword(null,"error","error",-978969032)], null)));
} else {
return and__5076__auto__;
}
})();
if(cljs.core.truth_(temp__4423__auto__)){
var int_vals = temp__4423__auto__;
var and__5076__auto__ = cljs.core.some.call(null,cljs.core.identity,int_vals);
if(cljs.core.truth_(and__5076__auto__)){
var and__5076__auto____$1 = cljs.core.every_QMARK_.call(null,cljs.core.fn_QMARK_,cljs.core.remove.call(null,cljs.core.nil_QMARK_,int_vals));
if(and__5076__auto____$1){
var and__5076__auto____$2 = tripod.interceptor.interceptor_name.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(o));
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
if(((!(((!((t == null)))?(((false) || (t.tripod$interceptor$IntoInterceptor$))?true:(((!t.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,tripod.interceptor.IntoInterceptor,t):false)):cljs.core.native_satisfies_QMARK_.call(null,tripod.interceptor.IntoInterceptor,t))))?(function(){throw cljs.core.ex_info.call(null,"You're trying to use something as an interceptor\n                           that isn't supported by the protocol; Perhaps you need to extend it?",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"t","t",-1397832519),t,new cljs.core.Keyword(null,"type","type",1174270348),cljs.core.type.call(null,t)], null))})():true)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"if-not","if-not",-265415609,null),cljs.core.list(new cljs.core.Symbol(null,"satisfies?","satisfies?",-433227199,null),new cljs.core.Symbol(null,"IntoInterceptor","IntoInterceptor",463136318,null),new cljs.core.Symbol(null,"t","t",242699008,null)),cljs.core.list(new cljs.core.Symbol(null,"throw","throw",595905694,null),cljs.core.list(new cljs.core.Symbol(null,"ex-info","ex-info",-539875240,null),"You're trying to use something as an interceptor\n                           that isn't supported by the protocol; Perhaps you need to extend it?",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"t","t",-1397832519),new cljs.core.Symbol(null,"t","t",242699008,null),new cljs.core.Keyword(null,"type","type",1174270348),cljs.core.list(new cljs.core.Symbol(null,"type","type",-1480165421,null),new cljs.core.Symbol(null,"t","t",242699008,null))], null))),true)))].join('')));
}

var _PERCENT_ = tripod.interceptor._interceptor.call(null,t);
if(cljs.core.truth_(tripod.interceptor.valid_interceptor_QMARK_)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"valid-interceptor?","valid-interceptor?",1438102384,null)))].join('')));
}

return _PERCENT_;
});

//# sourceMappingURL=interceptor.js.map