// Compiled by ClojureScript 1.7.122 {}
goog.provide('sablono.core');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('goog.string');
goog.require('sablono.normalize');
goog.require('sablono.util');
goog.require('sablono.interpreter');
goog.require('cljsjs.react');
goog.require('cljsjs.react.dom');
goog.require('clojure.string');
/**
 * Add an optional attribute argument to a function that returns a element vector.
 */
sablono.core.wrap_attrs = (function sablono$core$wrap_attrs(func){
return (function() { 
var G__11713__delegate = function (args){
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args))){
var vec__11712 = cljs.core.apply.call(null,func,cljs.core.rest.call(null,args));
var tag = cljs.core.nth.call(null,vec__11712,(0),null);
var body = cljs.core.nthnext.call(null,vec__11712,(1));
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body))){
return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.merge.call(null,cljs.core.first.call(null,body),cljs.core.first.call(null,args)),cljs.core.rest.call(null,body));
} else {
return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.first.call(null,args),body);
}
} else {
return cljs.core.apply.call(null,func,args);
}
};
var G__11713 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__11714__i = 0, G__11714__a = new Array(arguments.length -  0);
while (G__11714__i < G__11714__a.length) {G__11714__a[G__11714__i] = arguments[G__11714__i + 0]; ++G__11714__i;}
  args = new cljs.core.IndexedSeq(G__11714__a,0);
} 
return G__11713__delegate.call(this,args);};
G__11713.cljs$lang$maxFixedArity = 0;
G__11713.cljs$lang$applyTo = (function (arglist__11715){
var args = cljs.core.seq(arglist__11715);
return G__11713__delegate(args);
});
G__11713.cljs$core$IFn$_invoke$arity$variadic = G__11713__delegate;
return G__11713;
})()
;
});
sablono.core.update_arglists = (function sablono$core$update_arglists(arglists){
var iter__5860__auto__ = (function sablono$core$update_arglists_$_iter__11720(s__11721){
return (new cljs.core.LazySeq(null,(function (){
var s__11721__$1 = s__11721;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__11721__$1);
if(temp__4425__auto__){
var s__11721__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__11721__$2)){
var c__5858__auto__ = cljs.core.chunk_first.call(null,s__11721__$2);
var size__5859__auto__ = cljs.core.count.call(null,c__5858__auto__);
var b__11723 = cljs.core.chunk_buffer.call(null,size__5859__auto__);
if((function (){var i__11722 = (0);
while(true){
if((i__11722 < size__5859__auto__)){
var args = cljs.core._nth.call(null,c__5858__auto__,i__11722);
cljs.core.chunk_append.call(null,b__11723,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)));

var G__11724 = (i__11722 + (1));
i__11722 = G__11724;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11723),sablono$core$update_arglists_$_iter__11720.call(null,cljs.core.chunk_rest.call(null,s__11721__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11723),null);
}
} else {
var args = cljs.core.first.call(null,s__11721__$2);
return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)),sablono$core$update_arglists_$_iter__11720.call(null,cljs.core.rest.call(null,s__11721__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5860__auto__.call(null,arglists);
});
/**
 * Include a list of external stylesheet files.
 */
sablono.core.include_css = (function sablono$core$include_css(var_args){
var args__6153__auto__ = [];
var len__6146__auto___11730 = arguments.length;
var i__6147__auto___11731 = (0);
while(true){
if((i__6147__auto___11731 < len__6146__auto___11730)){
args__6153__auto__.push((arguments[i__6147__auto___11731]));

var G__11732 = (i__6147__auto___11731 + (1));
i__6147__auto___11731 = G__11732;
continue;
} else {
}
break;
}

var argseq__6154__auto__ = ((((0) < args__6153__auto__.length))?(new cljs.core.IndexedSeq(args__6153__auto__.slice((0)),(0))):null);
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(argseq__6154__auto__);
});

sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic = (function (styles){
var iter__5860__auto__ = (function sablono$core$iter__11726(s__11727){
return (new cljs.core.LazySeq(null,(function (){
var s__11727__$1 = s__11727;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__11727__$1);
if(temp__4425__auto__){
var s__11727__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__11727__$2)){
var c__5858__auto__ = cljs.core.chunk_first.call(null,s__11727__$2);
var size__5859__auto__ = cljs.core.count.call(null,c__5858__auto__);
var b__11729 = cljs.core.chunk_buffer.call(null,size__5859__auto__);
if((function (){var i__11728 = (0);
while(true){
if((i__11728 < size__5859__auto__)){
var style = cljs.core._nth.call(null,c__5858__auto__,i__11728);
cljs.core.chunk_append.call(null,b__11729,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null));

var G__11733 = (i__11728 + (1));
i__11728 = G__11733;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11729),sablono$core$iter__11726.call(null,cljs.core.chunk_rest.call(null,s__11727__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11729),null);
}
} else {
var style = cljs.core.first.call(null,s__11727__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null),sablono$core$iter__11726.call(null,cljs.core.rest.call(null,s__11727__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5860__auto__.call(null,styles);
});

sablono.core.include_css.cljs$lang$maxFixedArity = (0);

sablono.core.include_css.cljs$lang$applyTo = (function (seq11725){
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq11725));
});
/**
 * Include the JavaScript library at `src`.
 */
sablono.core.include_js = (function sablono$core$include_js(src){
return goog.dom.appendChild(goog.dom.getDocument().body,goog.dom.createDom("script",{"src": src}));
});
/**
 * Include Facebook's React JavaScript library.
 */
sablono.core.include_react = (function sablono$core$include_react(){
return sablono.core.include_js.call(null,"http://fb.me/react-0.12.2.js");
});
/**
 * Wraps some content in a HTML hyperlink with the supplied URL.
 */
sablono.core.link_to11734 = (function sablono$core$link_to11734(var_args){
var args__6153__auto__ = [];
var len__6146__auto___11737 = arguments.length;
var i__6147__auto___11738 = (0);
while(true){
if((i__6147__auto___11738 < len__6146__auto___11737)){
args__6153__auto__.push((arguments[i__6147__auto___11738]));

var G__11739 = (i__6147__auto___11738 + (1));
i__6147__auto___11738 = G__11739;
continue;
} else {
}
break;
}

var argseq__6154__auto__ = ((((1) < args__6153__auto__.length))?(new cljs.core.IndexedSeq(args__6153__auto__.slice((1)),(0))):null);
return sablono.core.link_to11734.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__6154__auto__);
});

sablono.core.link_to11734.cljs$core$IFn$_invoke$arity$variadic = (function (url,content){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,url)], null),content], null);
});

sablono.core.link_to11734.cljs$lang$maxFixedArity = (1);

sablono.core.link_to11734.cljs$lang$applyTo = (function (seq11735){
var G__11736 = cljs.core.first.call(null,seq11735);
var seq11735__$1 = cljs.core.next.call(null,seq11735);
return sablono.core.link_to11734.cljs$core$IFn$_invoke$arity$variadic(G__11736,seq11735__$1);
});

sablono.core.link_to = sablono.core.wrap_attrs.call(null,sablono.core.link_to11734);
/**
 * Wraps some content in a HTML hyperlink with the supplied e-mail
 *   address. If no content provided use the e-mail address as content.
 */
sablono.core.mail_to11740 = (function sablono$core$mail_to11740(var_args){
var args__6153__auto__ = [];
var len__6146__auto___11745 = arguments.length;
var i__6147__auto___11746 = (0);
while(true){
if((i__6147__auto___11746 < len__6146__auto___11745)){
args__6153__auto__.push((arguments[i__6147__auto___11746]));

var G__11747 = (i__6147__auto___11746 + (1));
i__6147__auto___11746 = G__11747;
continue;
} else {
}
break;
}

var argseq__6154__auto__ = ((((1) < args__6153__auto__.length))?(new cljs.core.IndexedSeq(args__6153__auto__.slice((1)),(0))):null);
return sablono.core.mail_to11740.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__6154__auto__);
});

sablono.core.mail_to11740.cljs$core$IFn$_invoke$arity$variadic = (function (e_mail,p__11743){
var vec__11744 = p__11743;
var content = cljs.core.nth.call(null,vec__11744,(0),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),[cljs.core.str("mailto:"),cljs.core.str(e_mail)].join('')], null),(function (){var or__5088__auto__ = content;
if(cljs.core.truth_(or__5088__auto__)){
return or__5088__auto__;
} else {
return e_mail;
}
})()], null);
});

sablono.core.mail_to11740.cljs$lang$maxFixedArity = (1);

sablono.core.mail_to11740.cljs$lang$applyTo = (function (seq11741){
var G__11742 = cljs.core.first.call(null,seq11741);
var seq11741__$1 = cljs.core.next.call(null,seq11741);
return sablono.core.mail_to11740.cljs$core$IFn$_invoke$arity$variadic(G__11742,seq11741__$1);
});

sablono.core.mail_to = sablono.core.wrap_attrs.call(null,sablono.core.mail_to11740);
/**
 * Wrap a collection in an unordered list.
 */
sablono.core.unordered_list11748 = (function sablono$core$unordered_list11748(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__5860__auto__ = (function sablono$core$unordered_list11748_$_iter__11753(s__11754){
return (new cljs.core.LazySeq(null,(function (){
var s__11754__$1 = s__11754;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__11754__$1);
if(temp__4425__auto__){
var s__11754__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__11754__$2)){
var c__5858__auto__ = cljs.core.chunk_first.call(null,s__11754__$2);
var size__5859__auto__ = cljs.core.count.call(null,c__5858__auto__);
var b__11756 = cljs.core.chunk_buffer.call(null,size__5859__auto__);
if((function (){var i__11755 = (0);
while(true){
if((i__11755 < size__5859__auto__)){
var x = cljs.core._nth.call(null,c__5858__auto__,i__11755);
cljs.core.chunk_append.call(null,b__11756,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__11757 = (i__11755 + (1));
i__11755 = G__11757;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11756),sablono$core$unordered_list11748_$_iter__11753.call(null,cljs.core.chunk_rest.call(null,s__11754__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11756),null);
}
} else {
var x = cljs.core.first.call(null,s__11754__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$unordered_list11748_$_iter__11753.call(null,cljs.core.rest.call(null,s__11754__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5860__auto__.call(null,coll);
})()], null);
});

sablono.core.unordered_list = sablono.core.wrap_attrs.call(null,sablono.core.unordered_list11748);
/**
 * Wrap a collection in an ordered list.
 */
sablono.core.ordered_list11758 = (function sablono$core$ordered_list11758(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),(function (){var iter__5860__auto__ = (function sablono$core$ordered_list11758_$_iter__11763(s__11764){
return (new cljs.core.LazySeq(null,(function (){
var s__11764__$1 = s__11764;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__11764__$1);
if(temp__4425__auto__){
var s__11764__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__11764__$2)){
var c__5858__auto__ = cljs.core.chunk_first.call(null,s__11764__$2);
var size__5859__auto__ = cljs.core.count.call(null,c__5858__auto__);
var b__11766 = cljs.core.chunk_buffer.call(null,size__5859__auto__);
if((function (){var i__11765 = (0);
while(true){
if((i__11765 < size__5859__auto__)){
var x = cljs.core._nth.call(null,c__5858__auto__,i__11765);
cljs.core.chunk_append.call(null,b__11766,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__11767 = (i__11765 + (1));
i__11765 = G__11767;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11766),sablono$core$ordered_list11758_$_iter__11763.call(null,cljs.core.chunk_rest.call(null,s__11764__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11766),null);
}
} else {
var x = cljs.core.first.call(null,s__11764__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$ordered_list11758_$_iter__11763.call(null,cljs.core.rest.call(null,s__11764__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5860__auto__.call(null,coll);
})()], null);
});

sablono.core.ordered_list = sablono.core.wrap_attrs.call(null,sablono.core.ordered_list11758);
/**
 * Create an image element.
 */
sablono.core.image11768 = (function sablono$core$image11768(var_args){
var args11769 = [];
var len__6146__auto___11772 = arguments.length;
var i__6147__auto___11773 = (0);
while(true){
if((i__6147__auto___11773 < len__6146__auto___11772)){
args11769.push((arguments[i__6147__auto___11773]));

var G__11774 = (i__6147__auto___11773 + (1));
i__6147__auto___11773 = G__11774;
continue;
} else {
}
break;
}

var G__11771 = args11769.length;
switch (G__11771) {
case 1:
return sablono.core.image11768.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.image11768.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11769.length)].join('')));

}
});

sablono.core.image11768.cljs$core$IFn$_invoke$arity$1 = (function (src){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src)], null)], null);
});

sablono.core.image11768.cljs$core$IFn$_invoke$arity$2 = (function (src,alt){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src),new cljs.core.Keyword(null,"alt","alt",-3214426),alt], null)], null);
});

sablono.core.image11768.cljs$lang$maxFixedArity = 2;

sablono.core.image = sablono.core.wrap_attrs.call(null,sablono.core.image11768);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
 * Create a field name from the supplied argument the current field group.
 */
sablono.core.make_name = (function sablono$core$make_name(name){
return cljs.core.reduce.call(null,(function (p1__11776_SHARP_,p2__11777_SHARP_){
return [cljs.core.str(p1__11776_SHARP_),cljs.core.str("["),cljs.core.str(p2__11777_SHARP_),cljs.core.str("]")].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
 * Create a field id from the supplied argument and current field group.
 */
sablono.core.make_id = (function sablono$core$make_id(name){
return cljs.core.reduce.call(null,(function (p1__11778_SHARP_,p2__11779_SHARP_){
return [cljs.core.str(p1__11778_SHARP_),cljs.core.str("-"),cljs.core.str(p2__11779_SHARP_)].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
 * Creates a new <input> element.
 */
sablono.core.input_field_STAR_ = (function sablono$core$input_field_STAR_(type,name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),type,new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value], null)], null);
});
/**
 * Creates a color input field.
 */
sablono.core.color_field11780 = (function sablono$core$color_field11780(var_args){
var args11781 = [];
var len__6146__auto___11848 = arguments.length;
var i__6147__auto___11849 = (0);
while(true){
if((i__6147__auto___11849 < len__6146__auto___11848)){
args11781.push((arguments[i__6147__auto___11849]));

var G__11850 = (i__6147__auto___11849 + (1));
i__6147__auto___11849 = G__11850;
continue;
} else {
}
break;
}

var G__11783 = args11781.length;
switch (G__11783) {
case 1:
return sablono.core.color_field11780.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.color_field11780.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11781.length)].join('')));

}
});

sablono.core.color_field11780.cljs$core$IFn$_invoke$arity$1 = (function (name__7752__auto__){
return sablono.core.color_field11780.call(null,name__7752__auto__,null);
});

sablono.core.color_field11780.cljs$core$IFn$_invoke$arity$2 = (function (name__7752__auto__,value__7753__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"color","color",-1642760596,null))].join(''),name__7752__auto__,value__7753__auto__);
});

sablono.core.color_field11780.cljs$lang$maxFixedArity = 2;

sablono.core.color_field = sablono.core.wrap_attrs.call(null,sablono.core.color_field11780);

/**
 * Creates a date input field.
 */
sablono.core.date_field11784 = (function sablono$core$date_field11784(var_args){
var args11785 = [];
var len__6146__auto___11852 = arguments.length;
var i__6147__auto___11853 = (0);
while(true){
if((i__6147__auto___11853 < len__6146__auto___11852)){
args11785.push((arguments[i__6147__auto___11853]));

var G__11854 = (i__6147__auto___11853 + (1));
i__6147__auto___11853 = G__11854;
continue;
} else {
}
break;
}

var G__11787 = args11785.length;
switch (G__11787) {
case 1:
return sablono.core.date_field11784.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.date_field11784.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11785.length)].join('')));

}
});

sablono.core.date_field11784.cljs$core$IFn$_invoke$arity$1 = (function (name__7752__auto__){
return sablono.core.date_field11784.call(null,name__7752__auto__,null);
});

sablono.core.date_field11784.cljs$core$IFn$_invoke$arity$2 = (function (name__7752__auto__,value__7753__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"date","date",177097065,null))].join(''),name__7752__auto__,value__7753__auto__);
});

sablono.core.date_field11784.cljs$lang$maxFixedArity = 2;

sablono.core.date_field = sablono.core.wrap_attrs.call(null,sablono.core.date_field11784);

/**
 * Creates a datetime input field.
 */
sablono.core.datetime_field11788 = (function sablono$core$datetime_field11788(var_args){
var args11789 = [];
var len__6146__auto___11856 = arguments.length;
var i__6147__auto___11857 = (0);
while(true){
if((i__6147__auto___11857 < len__6146__auto___11856)){
args11789.push((arguments[i__6147__auto___11857]));

var G__11858 = (i__6147__auto___11857 + (1));
i__6147__auto___11857 = G__11858;
continue;
} else {
}
break;
}

var G__11791 = args11789.length;
switch (G__11791) {
case 1:
return sablono.core.datetime_field11788.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_field11788.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11789.length)].join('')));

}
});

sablono.core.datetime_field11788.cljs$core$IFn$_invoke$arity$1 = (function (name__7752__auto__){
return sablono.core.datetime_field11788.call(null,name__7752__auto__,null);
});

sablono.core.datetime_field11788.cljs$core$IFn$_invoke$arity$2 = (function (name__7752__auto__,value__7753__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null))].join(''),name__7752__auto__,value__7753__auto__);
});

sablono.core.datetime_field11788.cljs$lang$maxFixedArity = 2;

sablono.core.datetime_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_field11788);

/**
 * Creates a datetime-local input field.
 */
sablono.core.datetime_local_field11792 = (function sablono$core$datetime_local_field11792(var_args){
var args11793 = [];
var len__6146__auto___11860 = arguments.length;
var i__6147__auto___11861 = (0);
while(true){
if((i__6147__auto___11861 < len__6146__auto___11860)){
args11793.push((arguments[i__6147__auto___11861]));

var G__11862 = (i__6147__auto___11861 + (1));
i__6147__auto___11861 = G__11862;
continue;
} else {
}
break;
}

var G__11795 = args11793.length;
switch (G__11795) {
case 1:
return sablono.core.datetime_local_field11792.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_local_field11792.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11793.length)].join('')));

}
});

sablono.core.datetime_local_field11792.cljs$core$IFn$_invoke$arity$1 = (function (name__7752__auto__){
return sablono.core.datetime_local_field11792.call(null,name__7752__auto__,null);
});

sablono.core.datetime_local_field11792.cljs$core$IFn$_invoke$arity$2 = (function (name__7752__auto__,value__7753__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null))].join(''),name__7752__auto__,value__7753__auto__);
});

sablono.core.datetime_local_field11792.cljs$lang$maxFixedArity = 2;

sablono.core.datetime_local_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_local_field11792);

/**
 * Creates a email input field.
 */
sablono.core.email_field11796 = (function sablono$core$email_field11796(var_args){
var args11797 = [];
var len__6146__auto___11864 = arguments.length;
var i__6147__auto___11865 = (0);
while(true){
if((i__6147__auto___11865 < len__6146__auto___11864)){
args11797.push((arguments[i__6147__auto___11865]));

var G__11866 = (i__6147__auto___11865 + (1));
i__6147__auto___11865 = G__11866;
continue;
} else {
}
break;
}

var G__11799 = args11797.length;
switch (G__11799) {
case 1:
return sablono.core.email_field11796.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.email_field11796.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11797.length)].join('')));

}
});

sablono.core.email_field11796.cljs$core$IFn$_invoke$arity$1 = (function (name__7752__auto__){
return sablono.core.email_field11796.call(null,name__7752__auto__,null);
});

sablono.core.email_field11796.cljs$core$IFn$_invoke$arity$2 = (function (name__7752__auto__,value__7753__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"email","email",-1238619063,null))].join(''),name__7752__auto__,value__7753__auto__);
});

sablono.core.email_field11796.cljs$lang$maxFixedArity = 2;

sablono.core.email_field = sablono.core.wrap_attrs.call(null,sablono.core.email_field11796);

/**
 * Creates a file input field.
 */
sablono.core.file_field11800 = (function sablono$core$file_field11800(var_args){
var args11801 = [];
var len__6146__auto___11868 = arguments.length;
var i__6147__auto___11869 = (0);
while(true){
if((i__6147__auto___11869 < len__6146__auto___11868)){
args11801.push((arguments[i__6147__auto___11869]));

var G__11870 = (i__6147__auto___11869 + (1));
i__6147__auto___11869 = G__11870;
continue;
} else {
}
break;
}

var G__11803 = args11801.length;
switch (G__11803) {
case 1:
return sablono.core.file_field11800.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.file_field11800.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11801.length)].join('')));

}
});

sablono.core.file_field11800.cljs$core$IFn$_invoke$arity$1 = (function (name__7752__auto__){
return sablono.core.file_field11800.call(null,name__7752__auto__,null);
});

sablono.core.file_field11800.cljs$core$IFn$_invoke$arity$2 = (function (name__7752__auto__,value__7753__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"file","file",370885649,null))].join(''),name__7752__auto__,value__7753__auto__);
});

sablono.core.file_field11800.cljs$lang$maxFixedArity = 2;

sablono.core.file_field = sablono.core.wrap_attrs.call(null,sablono.core.file_field11800);

/**
 * Creates a hidden input field.
 */
sablono.core.hidden_field11804 = (function sablono$core$hidden_field11804(var_args){
var args11805 = [];
var len__6146__auto___11872 = arguments.length;
var i__6147__auto___11873 = (0);
while(true){
if((i__6147__auto___11873 < len__6146__auto___11872)){
args11805.push((arguments[i__6147__auto___11873]));

var G__11874 = (i__6147__auto___11873 + (1));
i__6147__auto___11873 = G__11874;
continue;
} else {
}
break;
}

var G__11807 = args11805.length;
switch (G__11807) {
case 1:
return sablono.core.hidden_field11804.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.hidden_field11804.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11805.length)].join('')));

}
});

sablono.core.hidden_field11804.cljs$core$IFn$_invoke$arity$1 = (function (name__7752__auto__){
return sablono.core.hidden_field11804.call(null,name__7752__auto__,null);
});

sablono.core.hidden_field11804.cljs$core$IFn$_invoke$arity$2 = (function (name__7752__auto__,value__7753__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null))].join(''),name__7752__auto__,value__7753__auto__);
});

sablono.core.hidden_field11804.cljs$lang$maxFixedArity = 2;

sablono.core.hidden_field = sablono.core.wrap_attrs.call(null,sablono.core.hidden_field11804);

/**
 * Creates a month input field.
 */
sablono.core.month_field11808 = (function sablono$core$month_field11808(var_args){
var args11809 = [];
var len__6146__auto___11876 = arguments.length;
var i__6147__auto___11877 = (0);
while(true){
if((i__6147__auto___11877 < len__6146__auto___11876)){
args11809.push((arguments[i__6147__auto___11877]));

var G__11878 = (i__6147__auto___11877 + (1));
i__6147__auto___11877 = G__11878;
continue;
} else {
}
break;
}

var G__11811 = args11809.length;
switch (G__11811) {
case 1:
return sablono.core.month_field11808.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.month_field11808.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11809.length)].join('')));

}
});

sablono.core.month_field11808.cljs$core$IFn$_invoke$arity$1 = (function (name__7752__auto__){
return sablono.core.month_field11808.call(null,name__7752__auto__,null);
});

sablono.core.month_field11808.cljs$core$IFn$_invoke$arity$2 = (function (name__7752__auto__,value__7753__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"month","month",-319717006,null))].join(''),name__7752__auto__,value__7753__auto__);
});

sablono.core.month_field11808.cljs$lang$maxFixedArity = 2;

sablono.core.month_field = sablono.core.wrap_attrs.call(null,sablono.core.month_field11808);

/**
 * Creates a number input field.
 */
sablono.core.number_field11812 = (function sablono$core$number_field11812(var_args){
var args11813 = [];
var len__6146__auto___11880 = arguments.length;
var i__6147__auto___11881 = (0);
while(true){
if((i__6147__auto___11881 < len__6146__auto___11880)){
args11813.push((arguments[i__6147__auto___11881]));

var G__11882 = (i__6147__auto___11881 + (1));
i__6147__auto___11881 = G__11882;
continue;
} else {
}
break;
}

var G__11815 = args11813.length;
switch (G__11815) {
case 1:
return sablono.core.number_field11812.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.number_field11812.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11813.length)].join('')));

}
});

sablono.core.number_field11812.cljs$core$IFn$_invoke$arity$1 = (function (name__7752__auto__){
return sablono.core.number_field11812.call(null,name__7752__auto__,null);
});

sablono.core.number_field11812.cljs$core$IFn$_invoke$arity$2 = (function (name__7752__auto__,value__7753__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"number","number",-1084057331,null))].join(''),name__7752__auto__,value__7753__auto__);
});

sablono.core.number_field11812.cljs$lang$maxFixedArity = 2;

sablono.core.number_field = sablono.core.wrap_attrs.call(null,sablono.core.number_field11812);

/**
 * Creates a password input field.
 */
sablono.core.password_field11816 = (function sablono$core$password_field11816(var_args){
var args11817 = [];
var len__6146__auto___11884 = arguments.length;
var i__6147__auto___11885 = (0);
while(true){
if((i__6147__auto___11885 < len__6146__auto___11884)){
args11817.push((arguments[i__6147__auto___11885]));

var G__11886 = (i__6147__auto___11885 + (1));
i__6147__auto___11885 = G__11886;
continue;
} else {
}
break;
}

var G__11819 = args11817.length;
switch (G__11819) {
case 1:
return sablono.core.password_field11816.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.password_field11816.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11817.length)].join('')));

}
});

sablono.core.password_field11816.cljs$core$IFn$_invoke$arity$1 = (function (name__7752__auto__){
return sablono.core.password_field11816.call(null,name__7752__auto__,null);
});

sablono.core.password_field11816.cljs$core$IFn$_invoke$arity$2 = (function (name__7752__auto__,value__7753__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"password","password",2057553998,null))].join(''),name__7752__auto__,value__7753__auto__);
});

sablono.core.password_field11816.cljs$lang$maxFixedArity = 2;

sablono.core.password_field = sablono.core.wrap_attrs.call(null,sablono.core.password_field11816);

/**
 * Creates a range input field.
 */
sablono.core.range_field11820 = (function sablono$core$range_field11820(var_args){
var args11821 = [];
var len__6146__auto___11888 = arguments.length;
var i__6147__auto___11889 = (0);
while(true){
if((i__6147__auto___11889 < len__6146__auto___11888)){
args11821.push((arguments[i__6147__auto___11889]));

var G__11890 = (i__6147__auto___11889 + (1));
i__6147__auto___11889 = G__11890;
continue;
} else {
}
break;
}

var G__11823 = args11821.length;
switch (G__11823) {
case 1:
return sablono.core.range_field11820.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.range_field11820.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11821.length)].join('')));

}
});

sablono.core.range_field11820.cljs$core$IFn$_invoke$arity$1 = (function (name__7752__auto__){
return sablono.core.range_field11820.call(null,name__7752__auto__,null);
});

sablono.core.range_field11820.cljs$core$IFn$_invoke$arity$2 = (function (name__7752__auto__,value__7753__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"range","range",-1014743483,null))].join(''),name__7752__auto__,value__7753__auto__);
});

sablono.core.range_field11820.cljs$lang$maxFixedArity = 2;

sablono.core.range_field = sablono.core.wrap_attrs.call(null,sablono.core.range_field11820);

/**
 * Creates a search input field.
 */
sablono.core.search_field11824 = (function sablono$core$search_field11824(var_args){
var args11825 = [];
var len__6146__auto___11892 = arguments.length;
var i__6147__auto___11893 = (0);
while(true){
if((i__6147__auto___11893 < len__6146__auto___11892)){
args11825.push((arguments[i__6147__auto___11893]));

var G__11894 = (i__6147__auto___11893 + (1));
i__6147__auto___11893 = G__11894;
continue;
} else {
}
break;
}

var G__11827 = args11825.length;
switch (G__11827) {
case 1:
return sablono.core.search_field11824.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.search_field11824.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11825.length)].join('')));

}
});

sablono.core.search_field11824.cljs$core$IFn$_invoke$arity$1 = (function (name__7752__auto__){
return sablono.core.search_field11824.call(null,name__7752__auto__,null);
});

sablono.core.search_field11824.cljs$core$IFn$_invoke$arity$2 = (function (name__7752__auto__,value__7753__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"search","search",-1089495947,null))].join(''),name__7752__auto__,value__7753__auto__);
});

sablono.core.search_field11824.cljs$lang$maxFixedArity = 2;

sablono.core.search_field = sablono.core.wrap_attrs.call(null,sablono.core.search_field11824);

/**
 * Creates a tel input field.
 */
sablono.core.tel_field11828 = (function sablono$core$tel_field11828(var_args){
var args11829 = [];
var len__6146__auto___11896 = arguments.length;
var i__6147__auto___11897 = (0);
while(true){
if((i__6147__auto___11897 < len__6146__auto___11896)){
args11829.push((arguments[i__6147__auto___11897]));

var G__11898 = (i__6147__auto___11897 + (1));
i__6147__auto___11897 = G__11898;
continue;
} else {
}
break;
}

var G__11831 = args11829.length;
switch (G__11831) {
case 1:
return sablono.core.tel_field11828.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.tel_field11828.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11829.length)].join('')));

}
});

sablono.core.tel_field11828.cljs$core$IFn$_invoke$arity$1 = (function (name__7752__auto__){
return sablono.core.tel_field11828.call(null,name__7752__auto__,null);
});

sablono.core.tel_field11828.cljs$core$IFn$_invoke$arity$2 = (function (name__7752__auto__,value__7753__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"tel","tel",1864669686,null))].join(''),name__7752__auto__,value__7753__auto__);
});

sablono.core.tel_field11828.cljs$lang$maxFixedArity = 2;

sablono.core.tel_field = sablono.core.wrap_attrs.call(null,sablono.core.tel_field11828);

/**
 * Creates a text input field.
 */
sablono.core.text_field11832 = (function sablono$core$text_field11832(var_args){
var args11833 = [];
var len__6146__auto___11900 = arguments.length;
var i__6147__auto___11901 = (0);
while(true){
if((i__6147__auto___11901 < len__6146__auto___11900)){
args11833.push((arguments[i__6147__auto___11901]));

var G__11902 = (i__6147__auto___11901 + (1));
i__6147__auto___11901 = G__11902;
continue;
} else {
}
break;
}

var G__11835 = args11833.length;
switch (G__11835) {
case 1:
return sablono.core.text_field11832.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_field11832.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11833.length)].join('')));

}
});

sablono.core.text_field11832.cljs$core$IFn$_invoke$arity$1 = (function (name__7752__auto__){
return sablono.core.text_field11832.call(null,name__7752__auto__,null);
});

sablono.core.text_field11832.cljs$core$IFn$_invoke$arity$2 = (function (name__7752__auto__,value__7753__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"text","text",-150030170,null))].join(''),name__7752__auto__,value__7753__auto__);
});

sablono.core.text_field11832.cljs$lang$maxFixedArity = 2;

sablono.core.text_field = sablono.core.wrap_attrs.call(null,sablono.core.text_field11832);

/**
 * Creates a time input field.
 */
sablono.core.time_field11836 = (function sablono$core$time_field11836(var_args){
var args11837 = [];
var len__6146__auto___11904 = arguments.length;
var i__6147__auto___11905 = (0);
while(true){
if((i__6147__auto___11905 < len__6146__auto___11904)){
args11837.push((arguments[i__6147__auto___11905]));

var G__11906 = (i__6147__auto___11905 + (1));
i__6147__auto___11905 = G__11906;
continue;
} else {
}
break;
}

var G__11839 = args11837.length;
switch (G__11839) {
case 1:
return sablono.core.time_field11836.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.time_field11836.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11837.length)].join('')));

}
});

sablono.core.time_field11836.cljs$core$IFn$_invoke$arity$1 = (function (name__7752__auto__){
return sablono.core.time_field11836.call(null,name__7752__auto__,null);
});

sablono.core.time_field11836.cljs$core$IFn$_invoke$arity$2 = (function (name__7752__auto__,value__7753__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"time","time",-1268547887,null))].join(''),name__7752__auto__,value__7753__auto__);
});

sablono.core.time_field11836.cljs$lang$maxFixedArity = 2;

sablono.core.time_field = sablono.core.wrap_attrs.call(null,sablono.core.time_field11836);

/**
 * Creates a url input field.
 */
sablono.core.url_field11840 = (function sablono$core$url_field11840(var_args){
var args11841 = [];
var len__6146__auto___11908 = arguments.length;
var i__6147__auto___11909 = (0);
while(true){
if((i__6147__auto___11909 < len__6146__auto___11908)){
args11841.push((arguments[i__6147__auto___11909]));

var G__11910 = (i__6147__auto___11909 + (1));
i__6147__auto___11909 = G__11910;
continue;
} else {
}
break;
}

var G__11843 = args11841.length;
switch (G__11843) {
case 1:
return sablono.core.url_field11840.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.url_field11840.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11841.length)].join('')));

}
});

sablono.core.url_field11840.cljs$core$IFn$_invoke$arity$1 = (function (name__7752__auto__){
return sablono.core.url_field11840.call(null,name__7752__auto__,null);
});

sablono.core.url_field11840.cljs$core$IFn$_invoke$arity$2 = (function (name__7752__auto__,value__7753__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"url","url",1916828573,null))].join(''),name__7752__auto__,value__7753__auto__);
});

sablono.core.url_field11840.cljs$lang$maxFixedArity = 2;

sablono.core.url_field = sablono.core.wrap_attrs.call(null,sablono.core.url_field11840);

/**
 * Creates a week input field.
 */
sablono.core.week_field11844 = (function sablono$core$week_field11844(var_args){
var args11845 = [];
var len__6146__auto___11912 = arguments.length;
var i__6147__auto___11913 = (0);
while(true){
if((i__6147__auto___11913 < len__6146__auto___11912)){
args11845.push((arguments[i__6147__auto___11913]));

var G__11914 = (i__6147__auto___11913 + (1));
i__6147__auto___11913 = G__11914;
continue;
} else {
}
break;
}

var G__11847 = args11845.length;
switch (G__11847) {
case 1:
return sablono.core.week_field11844.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.week_field11844.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11845.length)].join('')));

}
});

sablono.core.week_field11844.cljs$core$IFn$_invoke$arity$1 = (function (name__7752__auto__){
return sablono.core.week_field11844.call(null,name__7752__auto__,null);
});

sablono.core.week_field11844.cljs$core$IFn$_invoke$arity$2 = (function (name__7752__auto__,value__7753__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"week","week",314058249,null))].join(''),name__7752__auto__,value__7753__auto__);
});

sablono.core.week_field11844.cljs$lang$maxFixedArity = 2;

sablono.core.week_field = sablono.core.wrap_attrs.call(null,sablono.core.week_field11844);
sablono.core.file_upload = sablono.core.file_field;
/**
 * Creates a check box.
 */
sablono.core.check_box11916 = (function sablono$core$check_box11916(var_args){
var args11917 = [];
var len__6146__auto___11920 = arguments.length;
var i__6147__auto___11921 = (0);
while(true){
if((i__6147__auto___11921 < len__6146__auto___11920)){
args11917.push((arguments[i__6147__auto___11921]));

var G__11922 = (i__6147__auto___11921 + (1));
i__6147__auto___11921 = G__11922;
continue;
} else {
}
break;
}

var G__11919 = args11917.length;
switch (G__11919) {
case 1:
return sablono.core.check_box11916.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.check_box11916.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.check_box11916.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11917.length)].join('')));

}
});

sablono.core.check_box11916.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.check_box11916.call(null,name,null);
});

sablono.core.check_box11916.cljs$core$IFn$_invoke$arity$2 = (function (name,checked_QMARK_){
return sablono.core.check_box11916.call(null,name,checked_QMARK_,"true");
});

sablono.core.check_box11916.cljs$core$IFn$_invoke$arity$3 = (function (name,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.check_box11916.cljs$lang$maxFixedArity = 3;

sablono.core.check_box = sablono.core.wrap_attrs.call(null,sablono.core.check_box11916);
/**
 * Creates a radio button.
 */
sablono.core.radio_button11924 = (function sablono$core$radio_button11924(var_args){
var args11925 = [];
var len__6146__auto___11928 = arguments.length;
var i__6147__auto___11929 = (0);
while(true){
if((i__6147__auto___11929 < len__6146__auto___11928)){
args11925.push((arguments[i__6147__auto___11929]));

var G__11930 = (i__6147__auto___11929 + (1));
i__6147__auto___11929 = G__11930;
continue;
} else {
}
break;
}

var G__11927 = args11925.length;
switch (G__11927) {
case 1:
return sablono.core.radio_button11924.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.radio_button11924.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.radio_button11924.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11925.length)].join('')));

}
});

sablono.core.radio_button11924.cljs$core$IFn$_invoke$arity$1 = (function (group){
return sablono.core.radio_button11924.call(null,group,null);
});

sablono.core.radio_button11924.cljs$core$IFn$_invoke$arity$2 = (function (group,checked_QMARK_){
return sablono.core.radio_button11924.call(null,group,checked_QMARK_,"true");
});

sablono.core.radio_button11924.cljs$core$IFn$_invoke$arity$3 = (function (group,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,[cljs.core.str(sablono.util.as_str.call(null,group)),cljs.core.str("-"),cljs.core.str(sablono.util.as_str.call(null,value))].join('')),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.radio_button11924.cljs$lang$maxFixedArity = 3;

sablono.core.radio_button = sablono.core.wrap_attrs.call(null,sablono.core.radio_button11924);
sablono.core.hash_key = (function sablono$core$hash_key(x){
return goog.string.hashCode(cljs.core.pr_str.call(null,x));
});
/**
 * Creates a seq of option tags from a collection.
 */
sablono.core.select_options11932 = (function sablono$core$select_options11932(coll){
var iter__5860__auto__ = (function sablono$core$select_options11932_$_iter__11941(s__11942){
return (new cljs.core.LazySeq(null,(function (){
var s__11942__$1 = s__11942;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__11942__$1);
if(temp__4425__auto__){
var s__11942__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__11942__$2)){
var c__5858__auto__ = cljs.core.chunk_first.call(null,s__11942__$2);
var size__5859__auto__ = cljs.core.count.call(null,c__5858__auto__);
var b__11944 = cljs.core.chunk_buffer.call(null,size__5859__auto__);
if((function (){var i__11943 = (0);
while(true){
if((i__11943 < size__5859__auto__)){
var x = cljs.core._nth.call(null,c__5858__auto__,i__11943);
cljs.core.chunk_append.call(null,b__11944,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__11947 = x;
var text = cljs.core.nth.call(null,vec__11947,(0),null);
var val = cljs.core.nth.call(null,vec__11947,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__11947,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono$core$select_options11932.call(null,val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)));

var G__11949 = (i__11943 + (1));
i__11943 = G__11949;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11944),sablono$core$select_options11932_$_iter__11941.call(null,cljs.core.chunk_rest.call(null,s__11942__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11944),null);
}
} else {
var x = cljs.core.first.call(null,s__11942__$2);
return cljs.core.cons.call(null,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__11948 = x;
var text = cljs.core.nth.call(null,vec__11948,(0),null);
var val = cljs.core.nth.call(null,vec__11948,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__11948,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono$core$select_options11932.call(null,val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)),sablono$core$select_options11932_$_iter__11941.call(null,cljs.core.rest.call(null,s__11942__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5860__auto__.call(null,coll);
});

sablono.core.select_options = sablono.core.wrap_attrs.call(null,sablono.core.select_options11932);
/**
 * Creates a drop-down box using the <select> tag.
 */
sablono.core.drop_down11950 = (function sablono$core$drop_down11950(var_args){
var args11951 = [];
var len__6146__auto___11954 = arguments.length;
var i__6147__auto___11955 = (0);
while(true){
if((i__6147__auto___11955 < len__6146__auto___11954)){
args11951.push((arguments[i__6147__auto___11955]));

var G__11956 = (i__6147__auto___11955 + (1));
i__6147__auto___11955 = G__11956;
continue;
} else {
}
break;
}

var G__11953 = args11951.length;
switch (G__11953) {
case 2:
return sablono.core.drop_down11950.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.drop_down11950.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11951.length)].join('')));

}
});

sablono.core.drop_down11950.cljs$core$IFn$_invoke$arity$2 = (function (name,options){
return sablono.core.drop_down11950.call(null,name,options,null);
});

sablono.core.drop_down11950.cljs$core$IFn$_invoke$arity$3 = (function (name,options,selected){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null),sablono.core.select_options.call(null,options,selected)], null);
});

sablono.core.drop_down11950.cljs$lang$maxFixedArity = 3;

sablono.core.drop_down = sablono.core.wrap_attrs.call(null,sablono.core.drop_down11950);
/**
 * Creates a text area element.
 */
sablono.core.text_area11958 = (function sablono$core$text_area11958(var_args){
var args11959 = [];
var len__6146__auto___11962 = arguments.length;
var i__6147__auto___11963 = (0);
while(true){
if((i__6147__auto___11963 < len__6146__auto___11962)){
args11959.push((arguments[i__6147__auto___11963]));

var G__11964 = (i__6147__auto___11963 + (1));
i__6147__auto___11963 = G__11964;
continue;
} else {
}
break;
}

var G__11961 = args11959.length;
switch (G__11961) {
case 1:
return sablono.core.text_area11958.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_area11958.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11959.length)].join('')));

}
});

sablono.core.text_area11958.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.text_area11958.call(null,name,null);
});

sablono.core.text_area11958.cljs$core$IFn$_invoke$arity$2 = (function (name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value], null)], null);
});

sablono.core.text_area11958.cljs$lang$maxFixedArity = 2;

sablono.core.text_area = sablono.core.wrap_attrs.call(null,sablono.core.text_area11958);
/**
 * Creates a label for an input field with the supplied name.
 */
sablono.core.label11966 = (function sablono$core$label11966(name,text){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720),sablono.core.make_id.call(null,name)], null),text], null);
});

sablono.core.label = sablono.core.wrap_attrs.call(null,sablono.core.label11966);
/**
 * Creates a submit button.
 */
sablono.core.submit_button11967 = (function sablono$core$submit_button11967(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.submit_button = sablono.core.wrap_attrs.call(null,sablono.core.submit_button11967);
/**
 * Creates a form reset button.
 */
sablono.core.reset_button11968 = (function sablono$core$reset_button11968(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"reset",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.reset_button = sablono.core.wrap_attrs.call(null,sablono.core.reset_button11968);
/**
 * Create a form that points to a particular method and route.
 *   e.g. (form-to [:put "/post"]
 *       ...)
 */
sablono.core.form_to11969 = (function sablono$core$form_to11969(var_args){
var args__6153__auto__ = [];
var len__6146__auto___11974 = arguments.length;
var i__6147__auto___11975 = (0);
while(true){
if((i__6147__auto___11975 < len__6146__auto___11974)){
args__6153__auto__.push((arguments[i__6147__auto___11975]));

var G__11976 = (i__6147__auto___11975 + (1));
i__6147__auto___11975 = G__11976;
continue;
} else {
}
break;
}

var argseq__6154__auto__ = ((((1) < args__6153__auto__.length))?(new cljs.core.IndexedSeq(args__6153__auto__.slice((1)),(0))):null);
return sablono.core.form_to11969.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__6154__auto__);
});

sablono.core.form_to11969.cljs$core$IFn$_invoke$arity$variadic = (function (p__11972,body){
var vec__11973 = p__11972;
var method = cljs.core.nth.call(null,vec__11973,(0),null);
var action = cljs.core.nth.call(null,vec__11973,(1),null);
var method_str = clojure.string.upper_case.call(null,cljs.core.name.call(null,method));
var action_uri = sablono.util.to_uri.call(null,action);
return cljs.core.vec.call(null,cljs.core.concat.call(null,((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1683182755),null,new cljs.core.Keyword(null,"post","post",269697687),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),method_str,new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null),sablono.core.hidden_field.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(3735928559)], null),"_method",method_str)], null)),body));
});

sablono.core.form_to11969.cljs$lang$maxFixedArity = (1);

sablono.core.form_to11969.cljs$lang$applyTo = (function (seq11970){
var G__11971 = cljs.core.first.call(null,seq11970);
var seq11970__$1 = cljs.core.next.call(null,seq11970);
return sablono.core.form_to11969.cljs$core$IFn$_invoke$arity$variadic(G__11971,seq11970__$1);
});

sablono.core.form_to = sablono.core.wrap_attrs.call(null,sablono.core.form_to11969);

//# sourceMappingURL=core.js.map