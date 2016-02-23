// Compiled by ClojureScript 1.7.122 {}
goog.provide('adzerk.boot_reload.reload');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('goog.Uri');
goog.require('goog.async.DeferredList');
goog.require('goog.net.jsloader');
adzerk.boot_reload.reload.page_uri = (new goog.Uri(window.location.href));
adzerk.boot_reload.reload.ends_with_QMARK_ = (function adzerk$boot_reload$reload$ends_with_QMARK_(s,pat){
return cljs.core._EQ_.call(null,pat,cljs.core.subs.call(null,s,(cljs.core.count.call(null,s) - cljs.core.count.call(null,pat))));
});
adzerk.boot_reload.reload.reload_page_BANG_ = (function adzerk$boot_reload$reload$reload_page_BANG_(){
return window.location.reload();
});
adzerk.boot_reload.reload.normalize_href_or_uri = (function adzerk$boot_reload$reload$normalize_href_or_uri(href_or_uri){
var uri = (new goog.Uri(href_or_uri));
return adzerk.boot_reload.reload.page_uri.resolve(uri).getPath();
});
adzerk.boot_reload.reload.changed_href_QMARK_ = (function adzerk$boot_reload$reload$changed_href_QMARK_(href_or_uri,changed){
if(cljs.core.truth_(href_or_uri)){
var path = adzerk.boot_reload.reload.normalize_href_or_uri.call(null,href_or_uri);
if(cljs.core.truth_(cljs.core.not_empty.call(null,cljs.core.filter.call(null,((function (path){
return (function (p1__9911_SHARP_){
return adzerk.boot_reload.reload.ends_with_QMARK_.call(null,adzerk.boot_reload.reload.normalize_href_or_uri.call(null,p1__9911_SHARP_),path);
});})(path))
,changed)))){
return goog.Uri.parse(path);
} else {
return null;
}
} else {
return null;
}
});
adzerk.boot_reload.reload.reload_css = (function adzerk$boot_reload$reload$reload_css(changed){
var sheets = document.styleSheets;
var seq__9916 = cljs.core.seq.call(null,cljs.core.range.call(null,(0),sheets.length));
var chunk__9917 = null;
var count__9918 = (0);
var i__9919 = (0);
while(true){
if((i__9919 < count__9918)){
var s = cljs.core._nth.call(null,chunk__9917,i__9919);
var temp__4425__auto___9920 = (sheets[s]);
if(cljs.core.truth_(temp__4425__auto___9920)){
var sheet_9921 = temp__4425__auto___9920;
var temp__4425__auto___9922__$1 = adzerk.boot_reload.reload.changed_href_QMARK_.call(null,sheet_9921.href,changed);
if(cljs.core.truth_(temp__4425__auto___9922__$1)){
var href_uri_9923 = temp__4425__auto___9922__$1;
sheet_9921.ownerNode.href = href_uri_9923.makeUnique().toString();
} else {
}
} else {
}

var G__9924 = seq__9916;
var G__9925 = chunk__9917;
var G__9926 = count__9918;
var G__9927 = (i__9919 + (1));
seq__9916 = G__9924;
chunk__9917 = G__9925;
count__9918 = G__9926;
i__9919 = G__9927;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__9916);
if(temp__4425__auto__){
var seq__9916__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9916__$1)){
var c__5891__auto__ = cljs.core.chunk_first.call(null,seq__9916__$1);
var G__9928 = cljs.core.chunk_rest.call(null,seq__9916__$1);
var G__9929 = c__5891__auto__;
var G__9930 = cljs.core.count.call(null,c__5891__auto__);
var G__9931 = (0);
seq__9916 = G__9928;
chunk__9917 = G__9929;
count__9918 = G__9930;
i__9919 = G__9931;
continue;
} else {
var s = cljs.core.first.call(null,seq__9916__$1);
var temp__4425__auto___9932__$1 = (sheets[s]);
if(cljs.core.truth_(temp__4425__auto___9932__$1)){
var sheet_9933 = temp__4425__auto___9932__$1;
var temp__4425__auto___9934__$2 = adzerk.boot_reload.reload.changed_href_QMARK_.call(null,sheet_9933.href,changed);
if(cljs.core.truth_(temp__4425__auto___9934__$2)){
var href_uri_9935 = temp__4425__auto___9934__$2;
sheet_9933.ownerNode.href = href_uri_9935.makeUnique().toString();
} else {
}
} else {
}

var G__9936 = cljs.core.next.call(null,seq__9916__$1);
var G__9937 = null;
var G__9938 = (0);
var G__9939 = (0);
seq__9916 = G__9936;
chunk__9917 = G__9937;
count__9918 = G__9938;
i__9919 = G__9939;
continue;
}
} else {
return null;
}
}
break;
}
});
adzerk.boot_reload.reload.reload_img = (function adzerk$boot_reload$reload$reload_img(changed){
var images = document.images;
var seq__9944 = cljs.core.seq.call(null,cljs.core.range.call(null,(0),images.length));
var chunk__9945 = null;
var count__9946 = (0);
var i__9947 = (0);
while(true){
if((i__9947 < count__9946)){
var s = cljs.core._nth.call(null,chunk__9945,i__9947);
var temp__4425__auto___9948 = (images[s]);
if(cljs.core.truth_(temp__4425__auto___9948)){
var image_9949 = temp__4425__auto___9948;
var temp__4425__auto___9950__$1 = adzerk.boot_reload.reload.changed_href_QMARK_.call(null,image_9949.src,changed);
if(cljs.core.truth_(temp__4425__auto___9950__$1)){
var href_uri_9951 = temp__4425__auto___9950__$1;
image_9949.src = href_uri_9951.makeUnique().toString();
} else {
}
} else {
}

var G__9952 = seq__9944;
var G__9953 = chunk__9945;
var G__9954 = count__9946;
var G__9955 = (i__9947 + (1));
seq__9944 = G__9952;
chunk__9945 = G__9953;
count__9946 = G__9954;
i__9947 = G__9955;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__9944);
if(temp__4425__auto__){
var seq__9944__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9944__$1)){
var c__5891__auto__ = cljs.core.chunk_first.call(null,seq__9944__$1);
var G__9956 = cljs.core.chunk_rest.call(null,seq__9944__$1);
var G__9957 = c__5891__auto__;
var G__9958 = cljs.core.count.call(null,c__5891__auto__);
var G__9959 = (0);
seq__9944 = G__9956;
chunk__9945 = G__9957;
count__9946 = G__9958;
i__9947 = G__9959;
continue;
} else {
var s = cljs.core.first.call(null,seq__9944__$1);
var temp__4425__auto___9960__$1 = (images[s]);
if(cljs.core.truth_(temp__4425__auto___9960__$1)){
var image_9961 = temp__4425__auto___9960__$1;
var temp__4425__auto___9962__$2 = adzerk.boot_reload.reload.changed_href_QMARK_.call(null,image_9961.src,changed);
if(cljs.core.truth_(temp__4425__auto___9962__$2)){
var href_uri_9963 = temp__4425__auto___9962__$2;
image_9961.src = href_uri_9963.makeUnique().toString();
} else {
}
} else {
}

var G__9964 = cljs.core.next.call(null,seq__9944__$1);
var G__9965 = null;
var G__9966 = (0);
var G__9967 = (0);
seq__9944 = G__9964;
chunk__9945 = G__9965;
count__9946 = G__9966;
i__9947 = G__9967;
continue;
}
} else {
return null;
}
}
break;
}
});
adzerk.boot_reload.reload.reload_js = (function adzerk$boot_reload$reload$reload_js(changed,p__9970){
var map__9973 = p__9970;
var map__9973__$1 = ((((!((map__9973 == null)))?((((map__9973.cljs$lang$protocol_mask$partition0$ & (64))) || (map__9973.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9973):map__9973);
var on_jsload = cljs.core.get.call(null,map__9973__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),cljs.core.identity);
var js_files = cljs.core.filter.call(null,((function (map__9973,map__9973__$1,on_jsload){
return (function (p1__9968_SHARP_){
return adzerk.boot_reload.reload.ends_with_QMARK_.call(null,p1__9968_SHARP_,".js");
});})(map__9973,map__9973__$1,on_jsload))
,changed);
if(cljs.core.seq.call(null,js_files)){
goog.async.DeferredList.gatherResults(cljs.core.clj__GT_js.call(null,cljs.core.map.call(null,((function (js_files,map__9973,map__9973__$1,on_jsload){
return (function (p1__9969_SHARP_){
return goog.net.jsloader.load(goog.Uri.parse(p1__9969_SHARP_).makeUnique());
});})(js_files,map__9973,map__9973__$1,on_jsload))
,js_files))).addCallbacks(((function (js_files,map__9973,map__9973__$1,on_jsload){
return (function() { 
var G__9975__delegate = function (_){
return on_jsload.call(null);
};
var G__9975 = function (var_args){
var _ = null;
if (arguments.length > 0) {
var G__9976__i = 0, G__9976__a = new Array(arguments.length -  0);
while (G__9976__i < G__9976__a.length) {G__9976__a[G__9976__i] = arguments[G__9976__i + 0]; ++G__9976__i;}
  _ = new cljs.core.IndexedSeq(G__9976__a,0);
} 
return G__9975__delegate.call(this,_);};
G__9975.cljs$lang$maxFixedArity = 0;
G__9975.cljs$lang$applyTo = (function (arglist__9977){
var _ = cljs.core.seq(arglist__9977);
return G__9975__delegate(_);
});
G__9975.cljs$core$IFn$_invoke$arity$variadic = G__9975__delegate;
return G__9975;
})()
;})(js_files,map__9973,map__9973__$1,on_jsload))
,((function (js_files,map__9973,map__9973__$1,on_jsload){
return (function (e){
return console.error("Load failed:",e.message);
});})(js_files,map__9973,map__9973__$1,on_jsload))
);

if(cljs.core.truth_((window["jQuery"]))){
return jQuery(document).trigger("page-load");
} else {
return null;
}
} else {
return null;
}
});
adzerk.boot_reload.reload.reload_html = (function adzerk$boot_reload$reload$reload_html(changed){
var page_path = adzerk.boot_reload.reload.page_uri.getPath();
var html_path = (cljs.core.truth_(adzerk.boot_reload.reload.ends_with_QMARK_.call(null,page_path,"/"))?[cljs.core.str(page_path),cljs.core.str("index.html")].join(''):page_path);
if(cljs.core.truth_(adzerk.boot_reload.reload.changed_href_QMARK_.call(null,html_path,changed))){
return adzerk.boot_reload.reload.reload_page_BANG_.call(null);
} else {
return null;
}
});
adzerk.boot_reload.reload.group_log = (function adzerk$boot_reload$reload$group_log(title,things_to_log){
console.groupCollapsed(title);

var seq__9982_9986 = cljs.core.seq.call(null,things_to_log);
var chunk__9983_9987 = null;
var count__9984_9988 = (0);
var i__9985_9989 = (0);
while(true){
if((i__9985_9989 < count__9984_9988)){
var t_9990 = cljs.core._nth.call(null,chunk__9983_9987,i__9985_9989);
console.log(t_9990);

var G__9991 = seq__9982_9986;
var G__9992 = chunk__9983_9987;
var G__9993 = count__9984_9988;
var G__9994 = (i__9985_9989 + (1));
seq__9982_9986 = G__9991;
chunk__9983_9987 = G__9992;
count__9984_9988 = G__9993;
i__9985_9989 = G__9994;
continue;
} else {
var temp__4425__auto___9995 = cljs.core.seq.call(null,seq__9982_9986);
if(temp__4425__auto___9995){
var seq__9982_9996__$1 = temp__4425__auto___9995;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9982_9996__$1)){
var c__5891__auto___9997 = cljs.core.chunk_first.call(null,seq__9982_9996__$1);
var G__9998 = cljs.core.chunk_rest.call(null,seq__9982_9996__$1);
var G__9999 = c__5891__auto___9997;
var G__10000 = cljs.core.count.call(null,c__5891__auto___9997);
var G__10001 = (0);
seq__9982_9986 = G__9998;
chunk__9983_9987 = G__9999;
count__9984_9988 = G__10000;
i__9985_9989 = G__10001;
continue;
} else {
var t_10002 = cljs.core.first.call(null,seq__9982_9996__$1);
console.log(t_10002);

var G__10003 = cljs.core.next.call(null,seq__9982_9996__$1);
var G__10004 = null;
var G__10005 = (0);
var G__10006 = (0);
seq__9982_9986 = G__10003;
chunk__9983_9987 = G__10004;
count__9984_9988 = G__10005;
i__9985_9989 = G__10006;
continue;
}
} else {
}
}
break;
}

return console.groupEnd();
});
adzerk.boot_reload.reload.reload = (function adzerk$boot_reload$reload$reload(changed,opts){
adzerk.boot_reload.reload.group_log.call(null,"Reload",changed);

var G__10008 = changed;
adzerk.boot_reload.reload.reload_js.call(null,G__10008,opts);

adzerk.boot_reload.reload.reload_html.call(null,G__10008);

adzerk.boot_reload.reload.reload_css.call(null,G__10008);

adzerk.boot_reload.reload.reload_img.call(null,G__10008);

return G__10008;
});

//# sourceMappingURL=reload.js.map