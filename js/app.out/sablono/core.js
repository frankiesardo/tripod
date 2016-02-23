// Compiled by ClojureScript 1.7.122 {:static-fns true, :optimize-constants true}
goog.provide('sablono.core');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('goog.string');
goog.require('sablono.normalize');
goog.require('sablono.util');
goog.require('sablono.interpreter');
goog.require('clojure.string');
/**
 * Add an optional attribute argument to a function that returns a element vector.
 */
sablono.core.wrap_attrs = (function sablono$core$wrap_attrs(func){
return (function() { 
var G__12651__delegate = function (args){
if(cljs.core.map_QMARK_(cljs.core.first(args))){
var vec__12650 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,cljs.core.rest(args));
var tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12650,(0),null);
var body = cljs.core.nthnext(vec__12650,(1));
if(cljs.core.map_QMARK_(cljs.core.first(body))){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.vector,tag,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.first(body),cljs.core.first(args)], 0)),cljs.core.rest(body));
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.vector,tag,cljs.core.first(args),body);
}
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(func,args);
}
};
var G__12651 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__12652__i = 0, G__12652__a = new Array(arguments.length -  0);
while (G__12652__i < G__12652__a.length) {G__12652__a[G__12652__i] = arguments[G__12652__i + 0]; ++G__12652__i;}
  args = new cljs.core.IndexedSeq(G__12652__a,0);
} 
return G__12651__delegate.call(this,args);};
G__12651.cljs$lang$maxFixedArity = 0;
G__12651.cljs$lang$applyTo = (function (arglist__12653){
var args = cljs.core.seq(arglist__12653);
return G__12651__delegate(args);
});
G__12651.cljs$core$IFn$_invoke$arity$variadic = G__12651__delegate;
return G__12651;
})()
;
});
sablono.core.update_arglists = (function sablono$core$update_arglists(arglists){
var iter__5860__auto__ = (function sablono$core$update_arglists_$_iter__12660(s__12661){
return (new cljs.core.LazySeq(null,(function (){
var s__12661__$1 = s__12661;
while(true){
var temp__4425__auto__ = cljs.core.seq(s__12661__$1);
if(temp__4425__auto__){
var s__12661__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(s__12661__$2)){
var c__5858__auto__ = cljs.core.chunk_first(s__12661__$2);
var size__5859__auto__ = cljs.core.count(c__5858__auto__);
var b__12663 = cljs.core.chunk_buffer(size__5859__auto__);
if((function (){var i__12662 = (0);
while(true){
if((i__12662 < size__5859__auto__)){
var args = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__5858__auto__,i__12662);
cljs.core.chunk_append(b__12663,cljs.core.vec(cljs.core.cons(cljs.core.cst$sym$attr_DASH_map_QMARK_,args)));

var G__12666 = (i__12662 + (1));
i__12662 = G__12666;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__12663),sablono$core$update_arglists_$_iter__12660(cljs.core.chunk_rest(s__12661__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__12663),null);
}
} else {
var args = cljs.core.first(s__12661__$2);
return cljs.core.cons(cljs.core.vec(cljs.core.cons(cljs.core.cst$sym$attr_DASH_map_QMARK_,args)),sablono$core$update_arglists_$_iter__12660(cljs.core.rest(s__12661__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5860__auto__(arglists);
});
/**
 * Include a list of external stylesheet files.
 */
sablono.core.include_css = (function sablono$core$include_css(var_args){
var args__6153__auto__ = [];
var len__6146__auto___12674 = arguments.length;
var i__6147__auto___12675 = (0);
while(true){
if((i__6147__auto___12675 < len__6146__auto___12674)){
args__6153__auto__.push((arguments[i__6147__auto___12675]));

var G__12676 = (i__6147__auto___12675 + (1));
i__6147__auto___12675 = G__12676;
continue;
} else {
}
break;
}

var argseq__6154__auto__ = ((((0) < args__6153__auto__.length))?(new cljs.core.IndexedSeq(args__6153__auto__.slice((0)),(0))):null);
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(argseq__6154__auto__);
});

sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic = (function (styles){
var iter__5860__auto__ = (function sablono$core$iter__12668(s__12669){
return (new cljs.core.LazySeq(null,(function (){
var s__12669__$1 = s__12669;
while(true){
var temp__4425__auto__ = cljs.core.seq(s__12669__$1);
if(temp__4425__auto__){
var s__12669__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(s__12669__$2)){
var c__5858__auto__ = cljs.core.chunk_first(s__12669__$2);
var size__5859__auto__ = cljs.core.count(c__5858__auto__);
var b__12671 = cljs.core.chunk_buffer(size__5859__auto__);
if((function (){var i__12670 = (0);
while(true){
if((i__12670 < size__5859__auto__)){
var style = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__5858__auto__,i__12670);
cljs.core.chunk_append(b__12671,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$link,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$type,"text/css",cljs.core.cst$kw$href,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([style], 0)),cljs.core.cst$kw$rel,"stylesheet"], null)], null));

var G__12677 = (i__12670 + (1));
i__12670 = G__12677;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__12671),sablono$core$iter__12668(cljs.core.chunk_rest(s__12669__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__12671),null);
}
} else {
var style = cljs.core.first(s__12669__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$link,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$type,"text/css",cljs.core.cst$kw$href,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([style], 0)),cljs.core.cst$kw$rel,"stylesheet"], null)], null),sablono$core$iter__12668(cljs.core.rest(s__12669__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5860__auto__(styles);
});

sablono.core.include_css.cljs$lang$maxFixedArity = (0);

sablono.core.include_css.cljs$lang$applyTo = (function (seq12667){
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq12667));
});
/**
 * Include the JavaScript library at `src`.
 */
sablono.core.include_js = (function sablono$core$include_js(src){
var G__12682 = goog.dom.getDocument().body;
var G__12683 = (function (){var G__12684 = "script";
var G__12685 = {"src": src};
return goog.dom.createDom(G__12684,G__12685);
})();
return goog.dom.appendChild(G__12682,G__12683);
});
/**
 * Include Facebook's React JavaScript library.
 */
sablono.core.include_react = (function sablono$core$include_react(){
return sablono.core.include_js("http://fb.me/react-0.12.2.js");
});
/**
 * Wraps some content in a HTML hyperlink with the supplied URL.
 */
sablono.core.link_to12686 = (function sablono$core$link_to12686(var_args){
var args__6153__auto__ = [];
var len__6146__auto___12689 = arguments.length;
var i__6147__auto___12690 = (0);
while(true){
if((i__6147__auto___12690 < len__6146__auto___12689)){
args__6153__auto__.push((arguments[i__6147__auto___12690]));

var G__12691 = (i__6147__auto___12690 + (1));
i__6147__auto___12690 = G__12691;
continue;
} else {
}
break;
}

var argseq__6154__auto__ = ((((1) < args__6153__auto__.length))?(new cljs.core.IndexedSeq(args__6153__auto__.slice((1)),(0))):null);
return sablono.core.link_to12686.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__6154__auto__);
});

sablono.core.link_to12686.cljs$core$IFn$_invoke$arity$variadic = (function (url,content){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$href,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([url], 0))], null),content], null);
});

sablono.core.link_to12686.cljs$lang$maxFixedArity = (1);

sablono.core.link_to12686.cljs$lang$applyTo = (function (seq12687){
var G__12688 = cljs.core.first(seq12687);
var seq12687__$1 = cljs.core.next(seq12687);
return sablono.core.link_to12686.cljs$core$IFn$_invoke$arity$variadic(G__12688,seq12687__$1);
});

sablono.core.link_to = sablono.core.wrap_attrs(sablono.core.link_to12686);
/**
 * Wraps some content in a HTML hyperlink with the supplied e-mail
 *   address. If no content provided use the e-mail address as content.
 */
sablono.core.mail_to12692 = (function sablono$core$mail_to12692(var_args){
var args__6153__auto__ = [];
var len__6146__auto___12697 = arguments.length;
var i__6147__auto___12698 = (0);
while(true){
if((i__6147__auto___12698 < len__6146__auto___12697)){
args__6153__auto__.push((arguments[i__6147__auto___12698]));

var G__12699 = (i__6147__auto___12698 + (1));
i__6147__auto___12698 = G__12699;
continue;
} else {
}
break;
}

var argseq__6154__auto__ = ((((1) < args__6153__auto__.length))?(new cljs.core.IndexedSeq(args__6153__auto__.slice((1)),(0))):null);
return sablono.core.mail_to12692.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__6154__auto__);
});

sablono.core.mail_to12692.cljs$core$IFn$_invoke$arity$variadic = (function (e_mail,p__12695){
var vec__12696 = p__12695;
var content = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12696,(0),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$href,[cljs.core.str("mailto:"),cljs.core.str(e_mail)].join('')], null),(function (){var or__5088__auto__ = content;
if(cljs.core.truth_(or__5088__auto__)){
return or__5088__auto__;
} else {
return e_mail;
}
})()], null);
});

sablono.core.mail_to12692.cljs$lang$maxFixedArity = (1);

sablono.core.mail_to12692.cljs$lang$applyTo = (function (seq12693){
var G__12694 = cljs.core.first(seq12693);
var seq12693__$1 = cljs.core.next(seq12693);
return sablono.core.mail_to12692.cljs$core$IFn$_invoke$arity$variadic(G__12694,seq12693__$1);
});

sablono.core.mail_to = sablono.core.wrap_attrs(sablono.core.mail_to12692);
/**
 * Wrap a collection in an unordered list.
 */
sablono.core.unordered_list12700 = (function sablono$core$unordered_list12700(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ul,(function (){var iter__5860__auto__ = (function sablono$core$unordered_list12700_$_iter__12707(s__12708){
return (new cljs.core.LazySeq(null,(function (){
var s__12708__$1 = s__12708;
while(true){
var temp__4425__auto__ = cljs.core.seq(s__12708__$1);
if(temp__4425__auto__){
var s__12708__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(s__12708__$2)){
var c__5858__auto__ = cljs.core.chunk_first(s__12708__$2);
var size__5859__auto__ = cljs.core.count(c__5858__auto__);
var b__12710 = cljs.core.chunk_buffer(size__5859__auto__);
if((function (){var i__12709 = (0);
while(true){
if((i__12709 < size__5859__auto__)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__5858__auto__,i__12709);
cljs.core.chunk_append(b__12710,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,x], null));

var G__12713 = (i__12709 + (1));
i__12709 = G__12713;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__12710),sablono$core$unordered_list12700_$_iter__12707(cljs.core.chunk_rest(s__12708__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__12710),null);
}
} else {
var x = cljs.core.first(s__12708__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,x], null),sablono$core$unordered_list12700_$_iter__12707(cljs.core.rest(s__12708__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5860__auto__(coll);
})()], null);
});

sablono.core.unordered_list = sablono.core.wrap_attrs(sablono.core.unordered_list12700);
/**
 * Wrap a collection in an ordered list.
 */
sablono.core.ordered_list12714 = (function sablono$core$ordered_list12714(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ol,(function (){var iter__5860__auto__ = (function sablono$core$ordered_list12714_$_iter__12721(s__12722){
return (new cljs.core.LazySeq(null,(function (){
var s__12722__$1 = s__12722;
while(true){
var temp__4425__auto__ = cljs.core.seq(s__12722__$1);
if(temp__4425__auto__){
var s__12722__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(s__12722__$2)){
var c__5858__auto__ = cljs.core.chunk_first(s__12722__$2);
var size__5859__auto__ = cljs.core.count(c__5858__auto__);
var b__12724 = cljs.core.chunk_buffer(size__5859__auto__);
if((function (){var i__12723 = (0);
while(true){
if((i__12723 < size__5859__auto__)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__5858__auto__,i__12723);
cljs.core.chunk_append(b__12724,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,x], null));

var G__12727 = (i__12723 + (1));
i__12723 = G__12727;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__12724),sablono$core$ordered_list12714_$_iter__12721(cljs.core.chunk_rest(s__12722__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__12724),null);
}
} else {
var x = cljs.core.first(s__12722__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,x], null),sablono$core$ordered_list12714_$_iter__12721(cljs.core.rest(s__12722__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5860__auto__(coll);
})()], null);
});

sablono.core.ordered_list = sablono.core.wrap_attrs(sablono.core.ordered_list12714);
/**
 * Create an image element.
 */
sablono.core.image12728 = (function sablono$core$image12728(var_args){
var args12729 = [];
var len__6146__auto___12732 = arguments.length;
var i__6147__auto___12733 = (0);
while(true){
if((i__6147__auto___12733 < len__6146__auto___12732)){
args12729.push((arguments[i__6147__auto___12733]));

var G__12734 = (i__6147__auto___12733 + (1));
i__6147__auto___12733 = G__12734;
continue;
} else {
}
break;
}

var G__12731 = args12729.length;
switch (G__12731) {
case 1:
return sablono.core.image12728.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.image12728.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12729.length)].join('')));

}
});

sablono.core.image12728.cljs$core$IFn$_invoke$arity$1 = (function (src){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$img,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$src,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([src], 0))], null)], null);
});

sablono.core.image12728.cljs$core$IFn$_invoke$arity$2 = (function (src,alt){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$img,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$src,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([src], 0)),cljs.core.cst$kw$alt,alt], null)], null);
});

sablono.core.image12728.cljs$lang$maxFixedArity = 2;

sablono.core.image = sablono.core.wrap_attrs(sablono.core.image12728);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
 * Create a field name from the supplied argument the current field group.
 */
sablono.core.make_name = (function sablono$core$make_name(name){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (p1__12736_SHARP_,p2__12737_SHARP_){
return [cljs.core.str(p1__12736_SHARP_),cljs.core.str("["),cljs.core.str(p2__12737_SHARP_),cljs.core.str("]")].join('');
}),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(sablono.core._STAR_group_STAR_,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([name], 0))));
});
/**
 * Create a field id from the supplied argument and current field group.
 */
sablono.core.make_id = (function sablono$core$make_id(name){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (p1__12738_SHARP_,p2__12739_SHARP_){
return [cljs.core.str(p1__12738_SHARP_),cljs.core.str("-"),cljs.core.str(p2__12739_SHARP_)].join('');
}),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(sablono.core._STAR_group_STAR_,sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([name], 0))));
});
/**
 * Creates a new <input> element.
 */
sablono.core.input_field_STAR_ = (function sablono$core$input_field_STAR_(type,name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$type,type,cljs.core.cst$kw$name,sablono.core.make_name(name),cljs.core.cst$kw$id,sablono.core.make_id(name),cljs.core.cst$kw$value,value], null)], null);
});
/**
 * Creates a color input field.
 */
sablono.core.color_field12740 = (function sablono$core$color_field12740(var_args){
var args12741 = [];
var len__6146__auto___12808 = arguments.length;
var i__6147__auto___12809 = (0);
while(true){
if((i__6147__auto___12809 < len__6146__auto___12808)){
args12741.push((arguments[i__6147__auto___12809]));

var G__12810 = (i__6147__auto___12809 + (1));
i__6147__auto___12809 = G__12810;
continue;
} else {
}
break;
}

var G__12743 = args12741.length;
switch (G__12743) {
case 1:
return sablono.core.color_field12740.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.color_field12740.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12741.length)].join('')));

}
});

sablono.core.color_field12740.cljs$core$IFn$_invoke$arity$1 = (function (name__8696__auto__){
return sablono.core.color_field12740.cljs$core$IFn$_invoke$arity$2(name__8696__auto__,null);
});

sablono.core.color_field12740.cljs$core$IFn$_invoke$arity$2 = (function (name__8696__auto__,value__8697__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$color)].join(''),name__8696__auto__,value__8697__auto__);
});

sablono.core.color_field12740.cljs$lang$maxFixedArity = 2;

sablono.core.color_field = sablono.core.wrap_attrs(sablono.core.color_field12740);

/**
 * Creates a date input field.
 */
sablono.core.date_field12744 = (function sablono$core$date_field12744(var_args){
var args12745 = [];
var len__6146__auto___12812 = arguments.length;
var i__6147__auto___12813 = (0);
while(true){
if((i__6147__auto___12813 < len__6146__auto___12812)){
args12745.push((arguments[i__6147__auto___12813]));

var G__12814 = (i__6147__auto___12813 + (1));
i__6147__auto___12813 = G__12814;
continue;
} else {
}
break;
}

var G__12747 = args12745.length;
switch (G__12747) {
case 1:
return sablono.core.date_field12744.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.date_field12744.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12745.length)].join('')));

}
});

sablono.core.date_field12744.cljs$core$IFn$_invoke$arity$1 = (function (name__8696__auto__){
return sablono.core.date_field12744.cljs$core$IFn$_invoke$arity$2(name__8696__auto__,null);
});

sablono.core.date_field12744.cljs$core$IFn$_invoke$arity$2 = (function (name__8696__auto__,value__8697__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$date)].join(''),name__8696__auto__,value__8697__auto__);
});

sablono.core.date_field12744.cljs$lang$maxFixedArity = 2;

sablono.core.date_field = sablono.core.wrap_attrs(sablono.core.date_field12744);

/**
 * Creates a datetime input field.
 */
sablono.core.datetime_field12748 = (function sablono$core$datetime_field12748(var_args){
var args12749 = [];
var len__6146__auto___12816 = arguments.length;
var i__6147__auto___12817 = (0);
while(true){
if((i__6147__auto___12817 < len__6146__auto___12816)){
args12749.push((arguments[i__6147__auto___12817]));

var G__12818 = (i__6147__auto___12817 + (1));
i__6147__auto___12817 = G__12818;
continue;
} else {
}
break;
}

var G__12751 = args12749.length;
switch (G__12751) {
case 1:
return sablono.core.datetime_field12748.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_field12748.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12749.length)].join('')));

}
});

sablono.core.datetime_field12748.cljs$core$IFn$_invoke$arity$1 = (function (name__8696__auto__){
return sablono.core.datetime_field12748.cljs$core$IFn$_invoke$arity$2(name__8696__auto__,null);
});

sablono.core.datetime_field12748.cljs$core$IFn$_invoke$arity$2 = (function (name__8696__auto__,value__8697__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$datetime)].join(''),name__8696__auto__,value__8697__auto__);
});

sablono.core.datetime_field12748.cljs$lang$maxFixedArity = 2;

sablono.core.datetime_field = sablono.core.wrap_attrs(sablono.core.datetime_field12748);

/**
 * Creates a datetime-local input field.
 */
sablono.core.datetime_local_field12752 = (function sablono$core$datetime_local_field12752(var_args){
var args12753 = [];
var len__6146__auto___12820 = arguments.length;
var i__6147__auto___12821 = (0);
while(true){
if((i__6147__auto___12821 < len__6146__auto___12820)){
args12753.push((arguments[i__6147__auto___12821]));

var G__12822 = (i__6147__auto___12821 + (1));
i__6147__auto___12821 = G__12822;
continue;
} else {
}
break;
}

var G__12755 = args12753.length;
switch (G__12755) {
case 1:
return sablono.core.datetime_local_field12752.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_local_field12752.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12753.length)].join('')));

}
});

sablono.core.datetime_local_field12752.cljs$core$IFn$_invoke$arity$1 = (function (name__8696__auto__){
return sablono.core.datetime_local_field12752.cljs$core$IFn$_invoke$arity$2(name__8696__auto__,null);
});

sablono.core.datetime_local_field12752.cljs$core$IFn$_invoke$arity$2 = (function (name__8696__auto__,value__8697__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$datetime_DASH_local)].join(''),name__8696__auto__,value__8697__auto__);
});

sablono.core.datetime_local_field12752.cljs$lang$maxFixedArity = 2;

sablono.core.datetime_local_field = sablono.core.wrap_attrs(sablono.core.datetime_local_field12752);

/**
 * Creates a email input field.
 */
sablono.core.email_field12756 = (function sablono$core$email_field12756(var_args){
var args12757 = [];
var len__6146__auto___12824 = arguments.length;
var i__6147__auto___12825 = (0);
while(true){
if((i__6147__auto___12825 < len__6146__auto___12824)){
args12757.push((arguments[i__6147__auto___12825]));

var G__12826 = (i__6147__auto___12825 + (1));
i__6147__auto___12825 = G__12826;
continue;
} else {
}
break;
}

var G__12759 = args12757.length;
switch (G__12759) {
case 1:
return sablono.core.email_field12756.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.email_field12756.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12757.length)].join('')));

}
});

sablono.core.email_field12756.cljs$core$IFn$_invoke$arity$1 = (function (name__8696__auto__){
return sablono.core.email_field12756.cljs$core$IFn$_invoke$arity$2(name__8696__auto__,null);
});

sablono.core.email_field12756.cljs$core$IFn$_invoke$arity$2 = (function (name__8696__auto__,value__8697__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$email)].join(''),name__8696__auto__,value__8697__auto__);
});

sablono.core.email_field12756.cljs$lang$maxFixedArity = 2;

sablono.core.email_field = sablono.core.wrap_attrs(sablono.core.email_field12756);

/**
 * Creates a file input field.
 */
sablono.core.file_field12760 = (function sablono$core$file_field12760(var_args){
var args12761 = [];
var len__6146__auto___12828 = arguments.length;
var i__6147__auto___12829 = (0);
while(true){
if((i__6147__auto___12829 < len__6146__auto___12828)){
args12761.push((arguments[i__6147__auto___12829]));

var G__12830 = (i__6147__auto___12829 + (1));
i__6147__auto___12829 = G__12830;
continue;
} else {
}
break;
}

var G__12763 = args12761.length;
switch (G__12763) {
case 1:
return sablono.core.file_field12760.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.file_field12760.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12761.length)].join('')));

}
});

sablono.core.file_field12760.cljs$core$IFn$_invoke$arity$1 = (function (name__8696__auto__){
return sablono.core.file_field12760.cljs$core$IFn$_invoke$arity$2(name__8696__auto__,null);
});

sablono.core.file_field12760.cljs$core$IFn$_invoke$arity$2 = (function (name__8696__auto__,value__8697__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$file)].join(''),name__8696__auto__,value__8697__auto__);
});

sablono.core.file_field12760.cljs$lang$maxFixedArity = 2;

sablono.core.file_field = sablono.core.wrap_attrs(sablono.core.file_field12760);

/**
 * Creates a hidden input field.
 */
sablono.core.hidden_field12764 = (function sablono$core$hidden_field12764(var_args){
var args12765 = [];
var len__6146__auto___12832 = arguments.length;
var i__6147__auto___12833 = (0);
while(true){
if((i__6147__auto___12833 < len__6146__auto___12832)){
args12765.push((arguments[i__6147__auto___12833]));

var G__12834 = (i__6147__auto___12833 + (1));
i__6147__auto___12833 = G__12834;
continue;
} else {
}
break;
}

var G__12767 = args12765.length;
switch (G__12767) {
case 1:
return sablono.core.hidden_field12764.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.hidden_field12764.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12765.length)].join('')));

}
});

sablono.core.hidden_field12764.cljs$core$IFn$_invoke$arity$1 = (function (name__8696__auto__){
return sablono.core.hidden_field12764.cljs$core$IFn$_invoke$arity$2(name__8696__auto__,null);
});

sablono.core.hidden_field12764.cljs$core$IFn$_invoke$arity$2 = (function (name__8696__auto__,value__8697__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$hidden)].join(''),name__8696__auto__,value__8697__auto__);
});

sablono.core.hidden_field12764.cljs$lang$maxFixedArity = 2;

sablono.core.hidden_field = sablono.core.wrap_attrs(sablono.core.hidden_field12764);

/**
 * Creates a month input field.
 */
sablono.core.month_field12768 = (function sablono$core$month_field12768(var_args){
var args12769 = [];
var len__6146__auto___12836 = arguments.length;
var i__6147__auto___12837 = (0);
while(true){
if((i__6147__auto___12837 < len__6146__auto___12836)){
args12769.push((arguments[i__6147__auto___12837]));

var G__12838 = (i__6147__auto___12837 + (1));
i__6147__auto___12837 = G__12838;
continue;
} else {
}
break;
}

var G__12771 = args12769.length;
switch (G__12771) {
case 1:
return sablono.core.month_field12768.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.month_field12768.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12769.length)].join('')));

}
});

sablono.core.month_field12768.cljs$core$IFn$_invoke$arity$1 = (function (name__8696__auto__){
return sablono.core.month_field12768.cljs$core$IFn$_invoke$arity$2(name__8696__auto__,null);
});

sablono.core.month_field12768.cljs$core$IFn$_invoke$arity$2 = (function (name__8696__auto__,value__8697__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$month)].join(''),name__8696__auto__,value__8697__auto__);
});

sablono.core.month_field12768.cljs$lang$maxFixedArity = 2;

sablono.core.month_field = sablono.core.wrap_attrs(sablono.core.month_field12768);

/**
 * Creates a number input field.
 */
sablono.core.number_field12772 = (function sablono$core$number_field12772(var_args){
var args12773 = [];
var len__6146__auto___12840 = arguments.length;
var i__6147__auto___12841 = (0);
while(true){
if((i__6147__auto___12841 < len__6146__auto___12840)){
args12773.push((arguments[i__6147__auto___12841]));

var G__12842 = (i__6147__auto___12841 + (1));
i__6147__auto___12841 = G__12842;
continue;
} else {
}
break;
}

var G__12775 = args12773.length;
switch (G__12775) {
case 1:
return sablono.core.number_field12772.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.number_field12772.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12773.length)].join('')));

}
});

sablono.core.number_field12772.cljs$core$IFn$_invoke$arity$1 = (function (name__8696__auto__){
return sablono.core.number_field12772.cljs$core$IFn$_invoke$arity$2(name__8696__auto__,null);
});

sablono.core.number_field12772.cljs$core$IFn$_invoke$arity$2 = (function (name__8696__auto__,value__8697__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$number)].join(''),name__8696__auto__,value__8697__auto__);
});

sablono.core.number_field12772.cljs$lang$maxFixedArity = 2;

sablono.core.number_field = sablono.core.wrap_attrs(sablono.core.number_field12772);

/**
 * Creates a password input field.
 */
sablono.core.password_field12776 = (function sablono$core$password_field12776(var_args){
var args12777 = [];
var len__6146__auto___12844 = arguments.length;
var i__6147__auto___12845 = (0);
while(true){
if((i__6147__auto___12845 < len__6146__auto___12844)){
args12777.push((arguments[i__6147__auto___12845]));

var G__12846 = (i__6147__auto___12845 + (1));
i__6147__auto___12845 = G__12846;
continue;
} else {
}
break;
}

var G__12779 = args12777.length;
switch (G__12779) {
case 1:
return sablono.core.password_field12776.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.password_field12776.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12777.length)].join('')));

}
});

sablono.core.password_field12776.cljs$core$IFn$_invoke$arity$1 = (function (name__8696__auto__){
return sablono.core.password_field12776.cljs$core$IFn$_invoke$arity$2(name__8696__auto__,null);
});

sablono.core.password_field12776.cljs$core$IFn$_invoke$arity$2 = (function (name__8696__auto__,value__8697__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$password)].join(''),name__8696__auto__,value__8697__auto__);
});

sablono.core.password_field12776.cljs$lang$maxFixedArity = 2;

sablono.core.password_field = sablono.core.wrap_attrs(sablono.core.password_field12776);

/**
 * Creates a range input field.
 */
sablono.core.range_field12780 = (function sablono$core$range_field12780(var_args){
var args12781 = [];
var len__6146__auto___12848 = arguments.length;
var i__6147__auto___12849 = (0);
while(true){
if((i__6147__auto___12849 < len__6146__auto___12848)){
args12781.push((arguments[i__6147__auto___12849]));

var G__12850 = (i__6147__auto___12849 + (1));
i__6147__auto___12849 = G__12850;
continue;
} else {
}
break;
}

var G__12783 = args12781.length;
switch (G__12783) {
case 1:
return sablono.core.range_field12780.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.range_field12780.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12781.length)].join('')));

}
});

sablono.core.range_field12780.cljs$core$IFn$_invoke$arity$1 = (function (name__8696__auto__){
return sablono.core.range_field12780.cljs$core$IFn$_invoke$arity$2(name__8696__auto__,null);
});

sablono.core.range_field12780.cljs$core$IFn$_invoke$arity$2 = (function (name__8696__auto__,value__8697__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$range)].join(''),name__8696__auto__,value__8697__auto__);
});

sablono.core.range_field12780.cljs$lang$maxFixedArity = 2;

sablono.core.range_field = sablono.core.wrap_attrs(sablono.core.range_field12780);

/**
 * Creates a search input field.
 */
sablono.core.search_field12784 = (function sablono$core$search_field12784(var_args){
var args12785 = [];
var len__6146__auto___12852 = arguments.length;
var i__6147__auto___12853 = (0);
while(true){
if((i__6147__auto___12853 < len__6146__auto___12852)){
args12785.push((arguments[i__6147__auto___12853]));

var G__12854 = (i__6147__auto___12853 + (1));
i__6147__auto___12853 = G__12854;
continue;
} else {
}
break;
}

var G__12787 = args12785.length;
switch (G__12787) {
case 1:
return sablono.core.search_field12784.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.search_field12784.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12785.length)].join('')));

}
});

sablono.core.search_field12784.cljs$core$IFn$_invoke$arity$1 = (function (name__8696__auto__){
return sablono.core.search_field12784.cljs$core$IFn$_invoke$arity$2(name__8696__auto__,null);
});

sablono.core.search_field12784.cljs$core$IFn$_invoke$arity$2 = (function (name__8696__auto__,value__8697__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$search)].join(''),name__8696__auto__,value__8697__auto__);
});

sablono.core.search_field12784.cljs$lang$maxFixedArity = 2;

sablono.core.search_field = sablono.core.wrap_attrs(sablono.core.search_field12784);

/**
 * Creates a tel input field.
 */
sablono.core.tel_field12788 = (function sablono$core$tel_field12788(var_args){
var args12789 = [];
var len__6146__auto___12856 = arguments.length;
var i__6147__auto___12857 = (0);
while(true){
if((i__6147__auto___12857 < len__6146__auto___12856)){
args12789.push((arguments[i__6147__auto___12857]));

var G__12858 = (i__6147__auto___12857 + (1));
i__6147__auto___12857 = G__12858;
continue;
} else {
}
break;
}

var G__12791 = args12789.length;
switch (G__12791) {
case 1:
return sablono.core.tel_field12788.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.tel_field12788.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12789.length)].join('')));

}
});

sablono.core.tel_field12788.cljs$core$IFn$_invoke$arity$1 = (function (name__8696__auto__){
return sablono.core.tel_field12788.cljs$core$IFn$_invoke$arity$2(name__8696__auto__,null);
});

sablono.core.tel_field12788.cljs$core$IFn$_invoke$arity$2 = (function (name__8696__auto__,value__8697__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$tel)].join(''),name__8696__auto__,value__8697__auto__);
});

sablono.core.tel_field12788.cljs$lang$maxFixedArity = 2;

sablono.core.tel_field = sablono.core.wrap_attrs(sablono.core.tel_field12788);

/**
 * Creates a text input field.
 */
sablono.core.text_field12792 = (function sablono$core$text_field12792(var_args){
var args12793 = [];
var len__6146__auto___12860 = arguments.length;
var i__6147__auto___12861 = (0);
while(true){
if((i__6147__auto___12861 < len__6146__auto___12860)){
args12793.push((arguments[i__6147__auto___12861]));

var G__12862 = (i__6147__auto___12861 + (1));
i__6147__auto___12861 = G__12862;
continue;
} else {
}
break;
}

var G__12795 = args12793.length;
switch (G__12795) {
case 1:
return sablono.core.text_field12792.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_field12792.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12793.length)].join('')));

}
});

sablono.core.text_field12792.cljs$core$IFn$_invoke$arity$1 = (function (name__8696__auto__){
return sablono.core.text_field12792.cljs$core$IFn$_invoke$arity$2(name__8696__auto__,null);
});

sablono.core.text_field12792.cljs$core$IFn$_invoke$arity$2 = (function (name__8696__auto__,value__8697__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$text)].join(''),name__8696__auto__,value__8697__auto__);
});

sablono.core.text_field12792.cljs$lang$maxFixedArity = 2;

sablono.core.text_field = sablono.core.wrap_attrs(sablono.core.text_field12792);

/**
 * Creates a time input field.
 */
sablono.core.time_field12796 = (function sablono$core$time_field12796(var_args){
var args12797 = [];
var len__6146__auto___12864 = arguments.length;
var i__6147__auto___12865 = (0);
while(true){
if((i__6147__auto___12865 < len__6146__auto___12864)){
args12797.push((arguments[i__6147__auto___12865]));

var G__12866 = (i__6147__auto___12865 + (1));
i__6147__auto___12865 = G__12866;
continue;
} else {
}
break;
}

var G__12799 = args12797.length;
switch (G__12799) {
case 1:
return sablono.core.time_field12796.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.time_field12796.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12797.length)].join('')));

}
});

sablono.core.time_field12796.cljs$core$IFn$_invoke$arity$1 = (function (name__8696__auto__){
return sablono.core.time_field12796.cljs$core$IFn$_invoke$arity$2(name__8696__auto__,null);
});

sablono.core.time_field12796.cljs$core$IFn$_invoke$arity$2 = (function (name__8696__auto__,value__8697__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$time)].join(''),name__8696__auto__,value__8697__auto__);
});

sablono.core.time_field12796.cljs$lang$maxFixedArity = 2;

sablono.core.time_field = sablono.core.wrap_attrs(sablono.core.time_field12796);

/**
 * Creates a url input field.
 */
sablono.core.url_field12800 = (function sablono$core$url_field12800(var_args){
var args12801 = [];
var len__6146__auto___12868 = arguments.length;
var i__6147__auto___12869 = (0);
while(true){
if((i__6147__auto___12869 < len__6146__auto___12868)){
args12801.push((arguments[i__6147__auto___12869]));

var G__12870 = (i__6147__auto___12869 + (1));
i__6147__auto___12869 = G__12870;
continue;
} else {
}
break;
}

var G__12803 = args12801.length;
switch (G__12803) {
case 1:
return sablono.core.url_field12800.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.url_field12800.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12801.length)].join('')));

}
});

sablono.core.url_field12800.cljs$core$IFn$_invoke$arity$1 = (function (name__8696__auto__){
return sablono.core.url_field12800.cljs$core$IFn$_invoke$arity$2(name__8696__auto__,null);
});

sablono.core.url_field12800.cljs$core$IFn$_invoke$arity$2 = (function (name__8696__auto__,value__8697__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$url)].join(''),name__8696__auto__,value__8697__auto__);
});

sablono.core.url_field12800.cljs$lang$maxFixedArity = 2;

sablono.core.url_field = sablono.core.wrap_attrs(sablono.core.url_field12800);

/**
 * Creates a week input field.
 */
sablono.core.week_field12804 = (function sablono$core$week_field12804(var_args){
var args12805 = [];
var len__6146__auto___12872 = arguments.length;
var i__6147__auto___12873 = (0);
while(true){
if((i__6147__auto___12873 < len__6146__auto___12872)){
args12805.push((arguments[i__6147__auto___12873]));

var G__12874 = (i__6147__auto___12873 + (1));
i__6147__auto___12873 = G__12874;
continue;
} else {
}
break;
}

var G__12807 = args12805.length;
switch (G__12807) {
case 1:
return sablono.core.week_field12804.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.week_field12804.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12805.length)].join('')));

}
});

sablono.core.week_field12804.cljs$core$IFn$_invoke$arity$1 = (function (name__8696__auto__){
return sablono.core.week_field12804.cljs$core$IFn$_invoke$arity$2(name__8696__auto__,null);
});

sablono.core.week_field12804.cljs$core$IFn$_invoke$arity$2 = (function (name__8696__auto__,value__8697__auto__){
return sablono.core.input_field_STAR_([cljs.core.str(cljs.core.cst$sym$week)].join(''),name__8696__auto__,value__8697__auto__);
});

sablono.core.week_field12804.cljs$lang$maxFixedArity = 2;

sablono.core.week_field = sablono.core.wrap_attrs(sablono.core.week_field12804);
sablono.core.file_upload = sablono.core.file_field;
/**
 * Creates a check box.
 */
sablono.core.check_box12876 = (function sablono$core$check_box12876(var_args){
var args12877 = [];
var len__6146__auto___12880 = arguments.length;
var i__6147__auto___12881 = (0);
while(true){
if((i__6147__auto___12881 < len__6146__auto___12880)){
args12877.push((arguments[i__6147__auto___12881]));

var G__12882 = (i__6147__auto___12881 + (1));
i__6147__auto___12881 = G__12882;
continue;
} else {
}
break;
}

var G__12879 = args12877.length;
switch (G__12879) {
case 1:
return sablono.core.check_box12876.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.check_box12876.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.check_box12876.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12877.length)].join('')));

}
});

sablono.core.check_box12876.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.check_box12876.cljs$core$IFn$_invoke$arity$2(name,null);
});

sablono.core.check_box12876.cljs$core$IFn$_invoke$arity$2 = (function (name,checked_QMARK_){
return sablono.core.check_box12876.cljs$core$IFn$_invoke$arity$3(name,checked_QMARK_,"true");
});

sablono.core.check_box12876.cljs$core$IFn$_invoke$arity$3 = (function (name,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$type,"checkbox",cljs.core.cst$kw$name,sablono.core.make_name(name),cljs.core.cst$kw$id,sablono.core.make_id(name),cljs.core.cst$kw$value,value,cljs.core.cst$kw$checked,checked_QMARK_], null)], null);
});

sablono.core.check_box12876.cljs$lang$maxFixedArity = 3;

sablono.core.check_box = sablono.core.wrap_attrs(sablono.core.check_box12876);
/**
 * Creates a radio button.
 */
sablono.core.radio_button12884 = (function sablono$core$radio_button12884(var_args){
var args12885 = [];
var len__6146__auto___12888 = arguments.length;
var i__6147__auto___12889 = (0);
while(true){
if((i__6147__auto___12889 < len__6146__auto___12888)){
args12885.push((arguments[i__6147__auto___12889]));

var G__12890 = (i__6147__auto___12889 + (1));
i__6147__auto___12889 = G__12890;
continue;
} else {
}
break;
}

var G__12887 = args12885.length;
switch (G__12887) {
case 1:
return sablono.core.radio_button12884.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.radio_button12884.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.radio_button12884.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12885.length)].join('')));

}
});

sablono.core.radio_button12884.cljs$core$IFn$_invoke$arity$1 = (function (group){
return sablono.core.radio_button12884.cljs$core$IFn$_invoke$arity$2(group,null);
});

sablono.core.radio_button12884.cljs$core$IFn$_invoke$arity$2 = (function (group,checked_QMARK_){
return sablono.core.radio_button12884.cljs$core$IFn$_invoke$arity$3(group,checked_QMARK_,"true");
});

sablono.core.radio_button12884.cljs$core$IFn$_invoke$arity$3 = (function (group,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$type,"radio",cljs.core.cst$kw$name,sablono.core.make_name(group),cljs.core.cst$kw$id,sablono.core.make_id([cljs.core.str(sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([group], 0))),cljs.core.str("-"),cljs.core.str(sablono.util.as_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([value], 0)))].join('')),cljs.core.cst$kw$value,value,cljs.core.cst$kw$checked,checked_QMARK_], null)], null);
});

sablono.core.radio_button12884.cljs$lang$maxFixedArity = 3;

sablono.core.radio_button = sablono.core.wrap_attrs(sablono.core.radio_button12884);
sablono.core.hash_key = (function sablono$core$hash_key(x){
var G__12893 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([x], 0));
return goog.string.hashCode(G__12893);
});
/**
 * Creates a seq of option tags from a collection.
 */
sablono.core.select_options12894 = (function sablono$core$select_options12894(coll){
var iter__5860__auto__ = (function sablono$core$select_options12894_$_iter__12905(s__12906){
return (new cljs.core.LazySeq(null,(function (){
var s__12906__$1 = s__12906;
while(true){
var temp__4425__auto__ = cljs.core.seq(s__12906__$1);
if(temp__4425__auto__){
var s__12906__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(s__12906__$2)){
var c__5858__auto__ = cljs.core.chunk_first(s__12906__$2);
var size__5859__auto__ = cljs.core.count(c__5858__auto__);
var b__12908 = cljs.core.chunk_buffer(size__5859__auto__);
if((function (){var i__12907 = (0);
while(true){
if((i__12907 < size__5859__auto__)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__5858__auto__,i__12907);
cljs.core.chunk_append(b__12908,((cljs.core.sequential_QMARK_(x))?(function (){var vec__12913 = x;
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12913,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12913,(1),null);
var disabled_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12913,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$(disabled_QMARK_);
if(cljs.core.sequential_QMARK_(val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$optgroup,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$key,sablono.core.hash_key(text),cljs.core.cst$kw$label,text], null),sablono$core$select_options12894(val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$option,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$disabled,disabled_QMARK___$1,cljs.core.cst$kw$key,sablono.core.hash_key(val),cljs.core.cst$kw$value,val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$option,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$key,sablono.core.hash_key(x),cljs.core.cst$kw$value,x], null),x], null)));

var G__12915 = (i__12907 + (1));
i__12907 = G__12915;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__12908),sablono$core$select_options12894_$_iter__12905(cljs.core.chunk_rest(s__12906__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__12908),null);
}
} else {
var x = cljs.core.first(s__12906__$2);
return cljs.core.cons(((cljs.core.sequential_QMARK_(x))?(function (){var vec__12914 = x;
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12914,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12914,(1),null);
var disabled_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12914,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$(disabled_QMARK_);
if(cljs.core.sequential_QMARK_(val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$optgroup,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$key,sablono.core.hash_key(text),cljs.core.cst$kw$label,text], null),sablono$core$select_options12894(val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$option,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$disabled,disabled_QMARK___$1,cljs.core.cst$kw$key,sablono.core.hash_key(val),cljs.core.cst$kw$value,val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$option,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$key,sablono.core.hash_key(x),cljs.core.cst$kw$value,x], null),x], null)),sablono$core$select_options12894_$_iter__12905(cljs.core.rest(s__12906__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5860__auto__(coll);
});

sablono.core.select_options = sablono.core.wrap_attrs(sablono.core.select_options12894);
/**
 * Creates a drop-down box using the <select> tag.
 */
sablono.core.drop_down12916 = (function sablono$core$drop_down12916(var_args){
var args12917 = [];
var len__6146__auto___12920 = arguments.length;
var i__6147__auto___12921 = (0);
while(true){
if((i__6147__auto___12921 < len__6146__auto___12920)){
args12917.push((arguments[i__6147__auto___12921]));

var G__12922 = (i__6147__auto___12921 + (1));
i__6147__auto___12921 = G__12922;
continue;
} else {
}
break;
}

var G__12919 = args12917.length;
switch (G__12919) {
case 2:
return sablono.core.drop_down12916.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.drop_down12916.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12917.length)].join('')));

}
});

sablono.core.drop_down12916.cljs$core$IFn$_invoke$arity$2 = (function (name,options){
return sablono.core.drop_down12916.cljs$core$IFn$_invoke$arity$3(name,options,null);
});

sablono.core.drop_down12916.cljs$core$IFn$_invoke$arity$3 = (function (name,options,selected){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$select,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,sablono.core.make_name(name),cljs.core.cst$kw$id,sablono.core.make_id(name)], null),(sablono.core.select_options.cljs$core$IFn$_invoke$arity$2 ? sablono.core.select_options.cljs$core$IFn$_invoke$arity$2(options,selected) : sablono.core.select_options.call(null,options,selected))], null);
});

sablono.core.drop_down12916.cljs$lang$maxFixedArity = 3;

sablono.core.drop_down = sablono.core.wrap_attrs(sablono.core.drop_down12916);
/**
 * Creates a text area element.
 */
sablono.core.text_area12924 = (function sablono$core$text_area12924(var_args){
var args12925 = [];
var len__6146__auto___12928 = arguments.length;
var i__6147__auto___12929 = (0);
while(true){
if((i__6147__auto___12929 < len__6146__auto___12928)){
args12925.push((arguments[i__6147__auto___12929]));

var G__12930 = (i__6147__auto___12929 + (1));
i__6147__auto___12929 = G__12930;
continue;
} else {
}
break;
}

var G__12927 = args12925.length;
switch (G__12927) {
case 1:
return sablono.core.text_area12924.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_area12924.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12925.length)].join('')));

}
});

sablono.core.text_area12924.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.text_area12924.cljs$core$IFn$_invoke$arity$2(name,null);
});

sablono.core.text_area12924.cljs$core$IFn$_invoke$arity$2 = (function (name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$textarea,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$name,sablono.core.make_name(name),cljs.core.cst$kw$id,sablono.core.make_id(name),cljs.core.cst$kw$value,value], null)], null);
});

sablono.core.text_area12924.cljs$lang$maxFixedArity = 2;

sablono.core.text_area = sablono.core.wrap_attrs(sablono.core.text_area12924);
/**
 * Creates a label for an input field with the supplied name.
 */
sablono.core.label12932 = (function sablono$core$label12932(name,text){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$label,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$htmlFor,sablono.core.make_id(name)], null),text], null);
});

sablono.core.label = sablono.core.wrap_attrs(sablono.core.label12932);
/**
 * Creates a submit button.
 */
sablono.core.submit_button12933 = (function sablono$core$submit_button12933(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,"submit",cljs.core.cst$kw$value,text], null)], null);
});

sablono.core.submit_button = sablono.core.wrap_attrs(sablono.core.submit_button12933);
/**
 * Creates a form reset button.
 */
sablono.core.reset_button12934 = (function sablono$core$reset_button12934(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,"reset",cljs.core.cst$kw$value,text], null)], null);
});

sablono.core.reset_button = sablono.core.wrap_attrs(sablono.core.reset_button12934);
/**
 * Create a form that points to a particular method and route.
 *   e.g. (form-to [:put "/post"]
 *       ...)
 */
sablono.core.form_to12935 = (function sablono$core$form_to12935(var_args){
var args__6153__auto__ = [];
var len__6146__auto___12943 = arguments.length;
var i__6147__auto___12944 = (0);
while(true){
if((i__6147__auto___12944 < len__6146__auto___12943)){
args__6153__auto__.push((arguments[i__6147__auto___12944]));

var G__12945 = (i__6147__auto___12944 + (1));
i__6147__auto___12944 = G__12945;
continue;
} else {
}
break;
}

var argseq__6154__auto__ = ((((1) < args__6153__auto__.length))?(new cljs.core.IndexedSeq(args__6153__auto__.slice((1)),(0))):null);
return sablono.core.form_to12935.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__6154__auto__);
});

sablono.core.form_to12935.cljs$core$IFn$_invoke$arity$variadic = (function (p__12938,body){
var vec__12939 = p__12938;
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12939,(0),null);
var action = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12939,(1),null);
var method_str = clojure.string.upper_case(cljs.core.name(method));
var action_uri = sablono.util.to_uri(action);
return cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$get,null,cljs.core.cst$kw$post,null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$form,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$method,method_str,cljs.core.cst$kw$action,action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$form,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$method,"POST",cljs.core.cst$kw$action,action_uri], null),(function (){var G__12940 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,(3735928559)], null);
var G__12941 = "_method";
var G__12942 = method_str;
return (sablono.core.hidden_field.cljs$core$IFn$_invoke$arity$3 ? sablono.core.hidden_field.cljs$core$IFn$_invoke$arity$3(G__12940,G__12941,G__12942) : sablono.core.hidden_field.call(null,G__12940,G__12941,G__12942));
})()], null)),body));
});

sablono.core.form_to12935.cljs$lang$maxFixedArity = (1);

sablono.core.form_to12935.cljs$lang$applyTo = (function (seq12936){
var G__12937 = cljs.core.first(seq12936);
var seq12936__$1 = cljs.core.next(seq12936);
return sablono.core.form_to12935.cljs$core$IFn$_invoke$arity$variadic(G__12937,seq12936__$1);
});

sablono.core.form_to = sablono.core.wrap_attrs(sablono.core.form_to12935);
