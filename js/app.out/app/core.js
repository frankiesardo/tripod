// Compiled by ClojureScript 1.7.122 {:static-fns true, :optimize-constants true}
goog.provide('app.core');
goog.require('cljs.core');
goog.require('om.core');
goog.require('sablono.core');
goog.require('tripod.core');
goog.require('goog.events');
goog.require('goog.History');
goog.require('goog.history.EventType');
cljs.core.enable_console_print_BANG_();
app.core.db = (function (){var G__10879 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$artists,new cljs.core.PersistentArrayMap(null, 2, [(1),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$id,(1),cljs.core.cst$kw$name,"Goya"], null),(2),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$id,(2),cljs.core.cst$kw$name,"Velasquez"], null)], null),cljs.core.cst$kw$artworks,new cljs.core.PersistentArrayMap(null, 2, [(1),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$id,(1),cljs.core.cst$kw$name,"La maja desnuda"], null),(2),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$id,(2),cljs.core.cst$kw$name,"Las meninas"], null)], null)], null);
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__10879) : cljs.core.atom.call(null,G__10879));
})();
app.core.app_state = (function (){var G__10880 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__10880) : cljs.core.atom.call(null,G__10880));
})();
app.core.home = (function app$core$home(req){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$page,cljs.core.cst$kw$app$core_SLASH_home,cljs.core.cst$kw$title,"Tripod demo"], null);
});
app.core.login = (function app$core$login(req){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$page,cljs.core.cst$kw$app$core_SLASH_login,cljs.core.cst$kw$title,"Login"], null);
});
app.core.artist_list = (function app$core$artist_list(req){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$page,cljs.core.cst$kw$app$core_SLASH_artist_DASH_list,cljs.core.cst$kw$title,"Artists"], null);
});
app.core.artist_detail = (function app$core$artist_detail(p__10881){
var map__10884 = p__10881;
var map__10884__$1 = ((((!((map__10884 == null)))?((((map__10884.cljs$lang$protocol_mask$partition0$ & (64))) || (map__10884.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__10884):map__10884);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10884__$1,cljs.core.cst$kw$app$core_SLASH_id);
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$page,cljs.core.cst$kw$app$core_SLASH_artist_DASH_detail,cljs.core.cst$kw$title,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(app.core.db) : cljs.core.deref.call(null,app.core.db)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$artists,id,cljs.core.cst$kw$name], null)),cljs.core.cst$kw$id,id], null);
});
app.core.artist_edit = (function app$core$artist_edit(p__10886){
var map__10889 = p__10886;
var map__10889__$1 = ((((!((map__10889 == null)))?((((map__10889.cljs$lang$protocol_mask$partition0$ & (64))) || (map__10889.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__10889):map__10889);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10889__$1,cljs.core.cst$kw$app$core_SLASH_id);
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$page,cljs.core.cst$kw$app$core_SLASH_artist_DASH_edit,cljs.core.cst$kw$title,[cljs.core.str("Edit "),cljs.core.str(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(app.core.db) : cljs.core.deref.call(null,app.core.db)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$artists,id,cljs.core.cst$kw$name], null)))].join(''),cljs.core.cst$kw$id,id], null);
});
app.core.artwork_list = (function app$core$artwork_list(req){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$page,cljs.core.cst$kw$app$core_SLASH_artwork_DASH_list,cljs.core.cst$kw$title,"Artworks"], null);
});
app.core.artwork_detail = (function app$core$artwork_detail(p__10891){
var map__10894 = p__10891;
var map__10894__$1 = ((((!((map__10894 == null)))?((((map__10894.cljs$lang$protocol_mask$partition0$ & (64))) || (map__10894.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__10894):map__10894);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10894__$1,cljs.core.cst$kw$app$core_SLASH_id);
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$page,cljs.core.cst$kw$app$core_SLASH_artwork_DASH_detail,cljs.core.cst$kw$title,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(app.core.db) : cljs.core.deref.call(null,app.core.db)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$artworks,id,cljs.core.cst$kw$name], null)),cljs.core.cst$kw$id,id], null);
});
app.core.artwork_edit = (function app$core$artwork_edit(p__10896){
var map__10899 = p__10896;
var map__10899__$1 = ((((!((map__10899 == null)))?((((map__10899.cljs$lang$protocol_mask$partition0$ & (64))) || (map__10899.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__10899):map__10899);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10899__$1,cljs.core.cst$kw$app$core_SLASH_id);
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$page,cljs.core.cst$kw$app$core_SLASH_artwork_DASH_edit,cljs.core.cst$kw$title,[cljs.core.str("Edit "),cljs.core.str(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(app.core.db) : cljs.core.deref.call(null,app.core.db)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$artworks,id,cljs.core.cst$kw$name], null)))].join(''),cljs.core.cst$kw$id,id], null);
});
app.core.admin = (function app$core$admin(req){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$page,cljs.core.cst$kw$app$core_SLASH_admin,cljs.core.cst$kw$title,"Private section"], null);
});
app.core.id__GT_int = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,cljs.core.cst$kw$app$core_SLASH_id_DASH__GT_int,cljs.core.cst$kw$enter,(function (context){
return cljs.core.update.cljs$core$IFn$_invoke$arity$5(context,cljs.core.cst$kw$request,cljs.core.assoc,cljs.core.cst$kw$app$core_SLASH_id,(function (){var G__10901 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(context,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$request,cljs.core.cst$kw$path_DASH_params,cljs.core.cst$kw$id], null));
return parseInt(G__10901);
})());
})], null);
app.core.private$ = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$name,cljs.core.cst$kw$app$core_SLASH_private,cljs.core.cst$kw$enter,(function (context){
if(cljs.core.truth_(cljs.core.cst$kw$auth_QMARK_.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(app.core.app_state) : cljs.core.deref.call(null,app.core.app_state))))){
return context;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(tripod.context.terminate(context),cljs.core.cst$kw$response,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$page,cljs.core.cst$kw$app$core_SLASH_unauthorised,cljs.core.cst$kw$title,"Unauthorised"], null));
}
})], null);
app.core.routes = tripod.core.expand_routes(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, ["/",new cljs.core.Var(function(){return app.core.home;},cljs.core.cst$sym$app$core_SLASH_home,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[cljs.core.cst$sym$app$core,cljs.core.cst$sym$home,"/Users/frankie/.boot/cache/tmp/Users/frankie/Documents/frankiesardo/tripod/example/web/1y9/-c4hx1l/app/core.cljs",11,1,23,23,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$req], null)),null,(cljs.core.truth_(app.core.home)?app.core.home.cljs$lang$test:null)])),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["/artists",new cljs.core.Var(function(){return app.core.artist_list;},cljs.core.cst$sym$app$core_SLASH_artist_DASH_list,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[cljs.core.cst$sym$app$core,cljs.core.cst$sym$artist_DASH_list,"/Users/frankie/.boot/cache/tmp/Users/frankie/Documents/frankiesardo/tripod/example/web/1y9/-c4hx1l/app/core.cljs",18,1,31,31,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$req], null)),null,(cljs.core.truth_(app.core.artist_list)?app.core.artist_list.cljs$lang$test:null)])),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["/:id",cljs.core.with_meta(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.core.id__GT_int], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$interceptors,true], null)),new cljs.core.Var(function(){return app.core.artist_detail;},cljs.core.cst$sym$app$core_SLASH_artist_DASH_detail,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[cljs.core.cst$sym$app$core,cljs.core.cst$sym$artist_DASH_detail,"/Users/frankie/.boot/cache/tmp/Users/frankie/Documents/frankiesardo/tripod/example/web/1y9/-c4hx1l/app/core.cljs",20,1,35,35,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$keys,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$app$core_SLASH_id], null)], null)], null)),null,(cljs.core.truth_(app.core.artist_detail)?app.core.artist_detail.cljs$lang$test:null)])),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["/edit",new cljs.core.Var(function(){return app.core.artist_edit;},cljs.core.cst$sym$app$core_SLASH_artist_DASH_edit,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[cljs.core.cst$sym$app$core,cljs.core.cst$sym$artist_DASH_edit,"/Users/frankie/.boot/cache/tmp/Users/frankie/Documents/frankiesardo/tripod/example/web/1y9/-c4hx1l/app/core.cljs",18,1,40,40,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$keys,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$app$core_SLASH_id], null)], null)], null)),null,(cljs.core.truth_(app.core.artist_edit)?app.core.artist_edit.cljs$lang$test:null)]))], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["/artworks",new cljs.core.Var(function(){return app.core.artwork_list;},cljs.core.cst$sym$app$core_SLASH_artwork_DASH_list,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[cljs.core.cst$sym$app$core,cljs.core.cst$sym$artwork_DASH_list,"/Users/frankie/.boot/cache/tmp/Users/frankie/Documents/frankiesardo/tripod/example/web/1y9/-c4hx1l/app/core.cljs",19,1,45,45,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$req], null)),null,(cljs.core.truth_(app.core.artwork_list)?app.core.artwork_list.cljs$lang$test:null)])),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["/:id",cljs.core.with_meta(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.core.id__GT_int], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$interceptors,true], null)),new cljs.core.Var(function(){return app.core.artwork_detail;},cljs.core.cst$sym$app$core_SLASH_artwork_DASH_detail,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[cljs.core.cst$sym$app$core,cljs.core.cst$sym$artwork_DASH_detail,"/Users/frankie/.boot/cache/tmp/Users/frankie/Documents/frankiesardo/tripod/example/web/1y9/-c4hx1l/app/core.cljs",21,1,49,49,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$keys,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$app$core_SLASH_id], null)], null)], null)),null,(cljs.core.truth_(app.core.artwork_detail)?app.core.artwork_detail.cljs$lang$test:null)])),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["/edit",new cljs.core.Var(function(){return app.core.artwork_edit;},cljs.core.cst$sym$app$core_SLASH_artwork_DASH_edit,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[cljs.core.cst$sym$app$core,cljs.core.cst$sym$artwork_DASH_edit,"/Users/frankie/.boot/cache/tmp/Users/frankie/Documents/frankiesardo/tripod/example/web/1y9/-c4hx1l/app/core.cljs",19,1,54,54,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$keys,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$app$core_SLASH_id], null)], null)], null)),null,(cljs.core.truth_(app.core.artwork_edit)?app.core.artwork_edit.cljs$lang$test:null)]))], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["/admin",cljs.core.with_meta(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.core.private$], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$interceptors,true], null)),new cljs.core.Var(function(){return app.core.admin;},cljs.core.cst$sym$app$core_SLASH_admin,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[cljs.core.cst$sym$app$core,cljs.core.cst$sym$admin,"/Users/frankie/.boot/cache/tmp/Users/frankie/Documents/frankiesardo/tripod/example/web/1y9/-c4hx1l/app/core.cljs",12,1,59,59,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$req], null)),null,(cljs.core.truth_(app.core.admin)?app.core.admin.cljs$lang$test:null)]))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["/login",new cljs.core.Var(function(){return app.core.login;},cljs.core.cst$sym$app$core_SLASH_login,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[cljs.core.cst$sym$app$core,cljs.core.cst$sym$login,"/Users/frankie/.boot/cache/tmp/Users/frankie/Documents/frankiesardo/tripod/example/web/1y9/-c4hx1l/app/core.cljs",12,1,27,27,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$req], null)),null,(cljs.core.truth_(app.core.login)?app.core.login.cljs$lang$test:null)]))], null)], null)], null));
app.core.service = tripod.core.service(tripod.core.default_interceptors(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$tripod$core_SLASH_routes,app.core.routes], null)));
app.core.link = (function app$core$link(var_args){
var args__6153__auto__ = [];
var len__6146__auto___10906 = arguments.length;
var i__6147__auto___10907 = (0);
while(true){
if((i__6147__auto___10907 < len__6146__auto___10906)){
args__6153__auto__.push((arguments[i__6147__auto___10907]));

var G__10908 = (i__6147__auto___10907 + (1));
i__6147__auto___10907 = G__10908;
continue;
} else {
}
break;
}

var argseq__6154__auto__ = ((((1) < args__6153__auto__.length))?(new cljs.core.IndexedSeq(args__6153__auto__.slice((1)),(0))):null);
return app.core.link.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__6154__auto__);
});

app.core.link.cljs$core$IFn$_invoke$arity$variadic = (function (route_name,p__10904){
var vec__10905 = p__10904;
var params = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10905,(0),null);
return [cljs.core.str("#"),cljs.core.str(tripod.core.path_for.cljs$core$IFn$_invoke$arity$variadic(route_name,cljs.core.array_seq([params], 0)))].join('');
});

app.core.link.cljs$lang$maxFixedArity = (1);

app.core.link.cljs$lang$applyTo = (function (seq10902){
var G__10903 = cljs.core.first(seq10902);
var seq10902__$1 = cljs.core.next(seq10902);
return app.core.link.cljs$core$IFn$_invoke$arity$variadic(G__10903,seq10902__$1);
});
if(typeof app.core.content !== 'undefined'){
} else {
app.core.content = (function (){var method_table__6001__auto__ = (function (){var G__10909 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__10909) : cljs.core.atom.call(null,G__10909));
})();
var prefer_table__6002__auto__ = (function (){var G__10910 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__10910) : cljs.core.atom.call(null,G__10910));
})();
var method_cache__6003__auto__ = (function (){var G__10911 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__10911) : cljs.core.atom.call(null,G__10911));
})();
var cached_hierarchy__6004__auto__ = (function (){var G__10912 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__10912) : cljs.core.atom.call(null,G__10912));
})();
var hierarchy__6005__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$hierarchy,cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("app.core","content"),((function (method_table__6001__auto__,prefer_table__6002__auto__,method_cache__6003__auto__,cached_hierarchy__6004__auto__,hierarchy__6005__auto__){
return (function (data,owner){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(data,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$page], null));
});})(method_table__6001__auto__,prefer_table__6002__auto__,method_cache__6003__auto__,cached_hierarchy__6004__auto__,hierarchy__6005__auto__))
,cljs.core.cst$kw$default,hierarchy__6005__auto__,method_table__6001__auto__,prefer_table__6002__auto__,method_cache__6003__auto__,cached_hierarchy__6004__auto__));
})();
}
app.core.content.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$default,(function (data,owner){
if(typeof app.core.t_app$core10913 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
app.core.t_app$core10913 = (function (data,owner,meta10914){
this.data = data;
this.owner = owner;
this.meta10914 = meta10914;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
app.core.t_app$core10913.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10915,meta10914__$1){
var self__ = this;
var _10915__$1 = this;
return (new app.core.t_app$core10913(self__.data,self__.owner,meta10914__$1));
});

app.core.t_app$core10913.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10915){
var self__ = this;
var _10915__$1 = this;
return self__.meta10914;
});

app.core.t_app$core10913.prototype.om$core$IRender$ = true;

app.core.t_app$core10913.prototype.om$core$IRender$render$arity$1 = (function (this__10073__auto__){
var self__ = this;
var this__10073__auto____$1 = this;
return React.createElement("div",null,"Not found");
});

app.core.t_app$core10913.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$data,cljs.core.cst$sym$owner,cljs.core.cst$sym$meta10914], null);
});

app.core.t_app$core10913.cljs$lang$type = true;

app.core.t_app$core10913.cljs$lang$ctorStr = "app.core/t_app$core10913";

app.core.t_app$core10913.cljs$lang$ctorPrWriter = (function (this__5686__auto__,writer__5687__auto__,opt__5688__auto__){
return cljs.core._write(writer__5687__auto__,"app.core/t_app$core10913");
});

app.core.__GT_t_app$core10913 = (function app$core$__GT_t_app$core10913(data__$1,owner__$1,meta10914){
return (new app.core.t_app$core10913(data__$1,owner__$1,meta10914));
});

}

return (new app.core.t_app$core10913(data,owner,null));
}));
app.core.content.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$app$core_SLASH_home,(function (data,owner){
if(typeof app.core.t_app$core10918 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
app.core.t_app$core10918 = (function (data,owner,meta10919){
this.data = data;
this.owner = owner;
this.meta10919 = meta10919;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
app.core.t_app$core10918.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10920,meta10919__$1){
var self__ = this;
var _10920__$1 = this;
return (new app.core.t_app$core10918(self__.data,self__.owner,meta10919__$1));
});

app.core.t_app$core10918.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10920){
var self__ = this;
var _10920__$1 = this;
return self__.meta10919;
});

app.core.t_app$core10918.prototype.om$core$IRender$ = true;

app.core.t_app$core10918.prototype.om$core$IRender$render$arity$1 = (function (this__10073__auto__){
var self__ = this;
var this__10073__auto____$1 = this;
return React.createElement("div",null,"Click around, have fun");
});

app.core.t_app$core10918.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$data,cljs.core.cst$sym$owner,cljs.core.cst$sym$meta10919], null);
});

app.core.t_app$core10918.cljs$lang$type = true;

app.core.t_app$core10918.cljs$lang$ctorStr = "app.core/t_app$core10918";

app.core.t_app$core10918.cljs$lang$ctorPrWriter = (function (this__5686__auto__,writer__5687__auto__,opt__5688__auto__){
return cljs.core._write(writer__5687__auto__,"app.core/t_app$core10918");
});

app.core.__GT_t_app$core10918 = (function app$core$__GT_t_app$core10918(data__$1,owner__$1,meta10919){
return (new app.core.t_app$core10918(data__$1,owner__$1,meta10919));
});

}

return (new app.core.t_app$core10918(data,owner,null));
}));
app.core.content.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$app$core_SLASH_login,(function (data,owner){
if(typeof app.core.t_app$core10923 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
app.core.t_app$core10923 = (function (data,owner,meta10924){
this.data = data;
this.owner = owner;
this.meta10924 = meta10924;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
app.core.t_app$core10923.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10925,meta10924__$1){
var self__ = this;
var _10925__$1 = this;
return (new app.core.t_app$core10923(self__.data,self__.owner,meta10924__$1));
});

app.core.t_app$core10923.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10925){
var self__ = this;
var _10925__$1 = this;
return self__.meta10924;
});

app.core.t_app$core10923.prototype.om$core$IRender$ = true;

app.core.t_app$core10923.prototype.om$core$IRender$render$arity$1 = (function (this__10073__auto__){
var self__ = this;
var this__10073__auto____$1 = this;
var G__10931 = "div";
var G__10932 = null;
var G__10933 = React.createElement("div",null,"Click the button below to authorise, then you can navigate back to /admin");
var G__10934 = (function (){var G__10935 = "button";
var G__10936 = {"onClick": ((function (G__10935,G__10931,G__10932,G__10933,this__10073__auto____$1){
return (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app.core.app_state,cljs.core.assoc,cljs.core.cst$kw$auth_QMARK_,true);
});})(G__10935,G__10931,G__10932,G__10933,this__10073__auto____$1))
};
var G__10937 = "Login!";
return React.createElement(G__10935,G__10936,G__10937);
})();
return React.createElement(G__10931,G__10932,G__10933,G__10934);
});

app.core.t_app$core10923.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$data,cljs.core.cst$sym$owner,cljs.core.cst$sym$meta10924], null);
});

app.core.t_app$core10923.cljs$lang$type = true;

app.core.t_app$core10923.cljs$lang$ctorStr = "app.core/t_app$core10923";

app.core.t_app$core10923.cljs$lang$ctorPrWriter = (function (this__5686__auto__,writer__5687__auto__,opt__5688__auto__){
return cljs.core._write(writer__5687__auto__,"app.core/t_app$core10923");
});

app.core.__GT_t_app$core10923 = (function app$core$__GT_t_app$core10923(data__$1,owner__$1,meta10924){
return (new app.core.t_app$core10923(data__$1,owner__$1,meta10924));
});

}

return (new app.core.t_app$core10923(data,owner,null));
}));
app.core.content.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$app$core_SLASH_unauthorised,(function (data,owner){
if(typeof app.core.t_app$core10938 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
app.core.t_app$core10938 = (function (data,owner,meta10939){
this.data = data;
this.owner = owner;
this.meta10939 = meta10939;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
app.core.t_app$core10938.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10940,meta10939__$1){
var self__ = this;
var _10940__$1 = this;
return (new app.core.t_app$core10938(self__.data,self__.owner,meta10939__$1));
});

app.core.t_app$core10938.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10940){
var self__ = this;
var _10940__$1 = this;
return self__.meta10939;
});

app.core.t_app$core10938.prototype.om$core$IRender$ = true;

app.core.t_app$core10938.prototype.om$core$IRender$render$arity$1 = (function (this__10073__auto__){
var self__ = this;
var this__10073__auto____$1 = this;
var G__10941 = "a";
var G__10942 = {"href": app.core.link(cljs.core.cst$kw$app$core_SLASH_login)};
var G__10943 = "Go to the login page";
return React.createElement(G__10941,G__10942,G__10943);
});

app.core.t_app$core10938.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$data,cljs.core.cst$sym$owner,cljs.core.cst$sym$meta10939], null);
});

app.core.t_app$core10938.cljs$lang$type = true;

app.core.t_app$core10938.cljs$lang$ctorStr = "app.core/t_app$core10938";

app.core.t_app$core10938.cljs$lang$ctorPrWriter = (function (this__5686__auto__,writer__5687__auto__,opt__5688__auto__){
return cljs.core._write(writer__5687__auto__,"app.core/t_app$core10938");
});

app.core.__GT_t_app$core10938 = (function app$core$__GT_t_app$core10938(data__$1,owner__$1,meta10939){
return (new app.core.t_app$core10938(data__$1,owner__$1,meta10939));
});

}

return (new app.core.t_app$core10938(data,owner,null));
}));
app.core.content.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$app$core_SLASH_admin,(function (data,owner){
if(typeof app.core.t_app$core10944 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
app.core.t_app$core10944 = (function (data,owner,meta10945){
this.data = data;
this.owner = owner;
this.meta10945 = meta10945;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
app.core.t_app$core10944.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10946,meta10945__$1){
var self__ = this;
var _10946__$1 = this;
return (new app.core.t_app$core10944(self__.data,self__.owner,meta10945__$1));
});

app.core.t_app$core10944.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10946){
var self__ = this;
var _10946__$1 = this;
return self__.meta10945;
});

app.core.t_app$core10944.prototype.om$core$IRender$ = true;

app.core.t_app$core10944.prototype.om$core$IRender$render$arity$1 = (function (this__10073__auto__){
var self__ = this;
var this__10073__auto____$1 = this;
return React.createElement("div",null,"You're viewing protected content here");
});

app.core.t_app$core10944.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$data,cljs.core.cst$sym$owner,cljs.core.cst$sym$meta10945], null);
});

app.core.t_app$core10944.cljs$lang$type = true;

app.core.t_app$core10944.cljs$lang$ctorStr = "app.core/t_app$core10944";

app.core.t_app$core10944.cljs$lang$ctorPrWriter = (function (this__5686__auto__,writer__5687__auto__,opt__5688__auto__){
return cljs.core._write(writer__5687__auto__,"app.core/t_app$core10944");
});

app.core.__GT_t_app$core10944 = (function app$core$__GT_t_app$core10944(data__$1,owner__$1,meta10945){
return (new app.core.t_app$core10944(data__$1,owner__$1,meta10945));
});

}

return (new app.core.t_app$core10944(data,owner,null));
}));
app.core.content.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$app$core_SLASH_artist_DASH_list,(function (data,owner){
if(typeof app.core.t_app$core10949 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
app.core.t_app$core10949 = (function (data,owner,meta10950){
this.data = data;
this.owner = owner;
this.meta10950 = meta10950;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
app.core.t_app$core10949.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10951,meta10950__$1){
var self__ = this;
var _10951__$1 = this;
return (new app.core.t_app$core10949(self__.data,self__.owner,meta10950__$1));
});

app.core.t_app$core10949.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10951){
var self__ = this;
var _10951__$1 = this;
return self__.meta10950;
});

app.core.t_app$core10949.prototype.om$core$IRender$ = true;

app.core.t_app$core10949.prototype.om$core$IRender$render$arity$1 = (function (this__10073__auto__){
var self__ = this;
var this__10073__auto____$1 = this;
var G__10990 = "ul";
var G__10991 = null;
var G__10992 = cljs.core.into_array.cljs$core$IFn$_invoke$arity$1((function (){var iter__5860__auto__ = ((function (G__10990,G__10991,this__10073__auto____$1){
return (function app$core$iter__10993(s__10994){
return (new cljs.core.LazySeq(null,((function (G__10990,G__10991,this__10073__auto____$1){
return (function (){
var s__10994__$1 = s__10994;
while(true){
var temp__4425__auto__ = cljs.core.seq(s__10994__$1);
if(temp__4425__auto__){
var s__10994__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(s__10994__$2)){
var c__5858__auto__ = cljs.core.chunk_first(s__10994__$2);
var size__5859__auto__ = cljs.core.count(c__5858__auto__);
var b__10996 = cljs.core.chunk_buffer(size__5859__auto__);
if((function (){var i__10995 = (0);
while(true){
if((i__10995 < size__5859__auto__)){
var map__11015 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__5858__auto__,i__10995);
var map__11015__$1 = ((((!((map__11015 == null)))?((((map__11015.cljs$lang$protocol_mask$partition0$ & (64))) || (map__11015.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__11015):map__11015);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11015__$1,cljs.core.cst$kw$id);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11015__$1,cljs.core.cst$kw$name);
cljs.core.chunk_append(b__10996,(function (){var G__11017 = "li";
var G__11018 = {"key": id};
var G__11019 = (function (){var G__11020 = "a";
var G__11021 = {"href": app.core.link.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$app$core_SLASH_artist_DASH_detail,cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$id,id], null)], 0))};
var G__11022 = sablono.interpreter.interpret(name);
return React.createElement(G__11020,G__11021,G__11022);
})();
return React.createElement(G__11017,G__11018,G__11019);
})());

var G__11031 = (i__10995 + (1));
i__10995 = G__11031;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__10996),app$core$iter__10993(cljs.core.chunk_rest(s__10994__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__10996),null);
}
} else {
var map__11023 = cljs.core.first(s__10994__$2);
var map__11023__$1 = ((((!((map__11023 == null)))?((((map__11023.cljs$lang$protocol_mask$partition0$ & (64))) || (map__11023.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__11023):map__11023);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11023__$1,cljs.core.cst$kw$id);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11023__$1,cljs.core.cst$kw$name);
return cljs.core.cons((function (){var G__11025 = "li";
var G__11026 = {"key": id};
var G__11027 = (function (){var G__11028 = "a";
var G__11029 = {"href": app.core.link.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$app$core_SLASH_artist_DASH_detail,cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$id,id], null)], 0))};
var G__11030 = sablono.interpreter.interpret(name);
return React.createElement(G__11028,G__11029,G__11030);
})();
return React.createElement(G__11025,G__11026,G__11027);
})(),app$core$iter__10993(cljs.core.rest(s__10994__$2)));
}
} else {
return null;
}
break;
}
});})(G__10990,G__10991,this__10073__auto____$1))
,null,null));
});})(G__10990,G__10991,this__10073__auto____$1))
;
return iter__5860__auto__(cljs.core.vals(cljs.core.cst$kw$artists.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(app.core.db) : cljs.core.deref.call(null,app.core.db)))));
})());
return React.createElement(G__10990,G__10991,G__10992);
});

app.core.t_app$core10949.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$data,cljs.core.cst$sym$owner,cljs.core.cst$sym$meta10950], null);
});

app.core.t_app$core10949.cljs$lang$type = true;

app.core.t_app$core10949.cljs$lang$ctorStr = "app.core/t_app$core10949";

app.core.t_app$core10949.cljs$lang$ctorPrWriter = (function (this__5686__auto__,writer__5687__auto__,opt__5688__auto__){
return cljs.core._write(writer__5687__auto__,"app.core/t_app$core10949");
});

app.core.__GT_t_app$core10949 = (function app$core$__GT_t_app$core10949(data__$1,owner__$1,meta10950){
return (new app.core.t_app$core10949(data__$1,owner__$1,meta10950));
});

}

return (new app.core.t_app$core10949(data,owner,null));
}));
app.core.content.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$app$core_SLASH_artist_DASH_detail,(function (data,owner){
if(typeof app.core.t_app$core11032 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
app.core.t_app$core11032 = (function (data,owner,meta11033){
this.data = data;
this.owner = owner;
this.meta11033 = meta11033;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
app.core.t_app$core11032.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11034,meta11033__$1){
var self__ = this;
var _11034__$1 = this;
return (new app.core.t_app$core11032(self__.data,self__.owner,meta11033__$1));
});

app.core.t_app$core11032.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11034){
var self__ = this;
var _11034__$1 = this;
return self__.meta11033;
});

app.core.t_app$core11032.prototype.om$core$IRender$ = true;

app.core.t_app$core11032.prototype.om$core$IRender$render$arity$1 = (function (this__10073__auto__){
var self__ = this;
var this__10073__auto____$1 = this;
return React.createElement("div",null,"Browse this artist selected works on Google");
});

app.core.t_app$core11032.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$data,cljs.core.cst$sym$owner,cljs.core.cst$sym$meta11033], null);
});

app.core.t_app$core11032.cljs$lang$type = true;

app.core.t_app$core11032.cljs$lang$ctorStr = "app.core/t_app$core11032";

app.core.t_app$core11032.cljs$lang$ctorPrWriter = (function (this__5686__auto__,writer__5687__auto__,opt__5688__auto__){
return cljs.core._write(writer__5687__auto__,"app.core/t_app$core11032");
});

app.core.__GT_t_app$core11032 = (function app$core$__GT_t_app$core11032(data__$1,owner__$1,meta11033){
return (new app.core.t_app$core11032(data__$1,owner__$1,meta11033));
});

}

return (new app.core.t_app$core11032(data,owner,null));
}));
app.core.content.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$app$core_SLASH_artwork_DASH_list,(function (data,owner){
if(typeof app.core.t_app$core11037 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
app.core.t_app$core11037 = (function (data,owner,meta11038){
this.data = data;
this.owner = owner;
this.meta11038 = meta11038;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
app.core.t_app$core11037.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11039,meta11038__$1){
var self__ = this;
var _11039__$1 = this;
return (new app.core.t_app$core11037(self__.data,self__.owner,meta11038__$1));
});

app.core.t_app$core11037.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11039){
var self__ = this;
var _11039__$1 = this;
return self__.meta11038;
});

app.core.t_app$core11037.prototype.om$core$IRender$ = true;

app.core.t_app$core11037.prototype.om$core$IRender$render$arity$1 = (function (this__10073__auto__){
var self__ = this;
var this__10073__auto____$1 = this;
var G__11078 = "ul";
var G__11079 = null;
var G__11080 = cljs.core.into_array.cljs$core$IFn$_invoke$arity$1((function (){var iter__5860__auto__ = ((function (G__11078,G__11079,this__10073__auto____$1){
return (function app$core$iter__11081(s__11082){
return (new cljs.core.LazySeq(null,((function (G__11078,G__11079,this__10073__auto____$1){
return (function (){
var s__11082__$1 = s__11082;
while(true){
var temp__4425__auto__ = cljs.core.seq(s__11082__$1);
if(temp__4425__auto__){
var s__11082__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(s__11082__$2)){
var c__5858__auto__ = cljs.core.chunk_first(s__11082__$2);
var size__5859__auto__ = cljs.core.count(c__5858__auto__);
var b__11084 = cljs.core.chunk_buffer(size__5859__auto__);
if((function (){var i__11083 = (0);
while(true){
if((i__11083 < size__5859__auto__)){
var map__11103 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__5858__auto__,i__11083);
var map__11103__$1 = ((((!((map__11103 == null)))?((((map__11103.cljs$lang$protocol_mask$partition0$ & (64))) || (map__11103.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__11103):map__11103);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11103__$1,cljs.core.cst$kw$id);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11103__$1,cljs.core.cst$kw$name);
cljs.core.chunk_append(b__11084,(function (){var G__11105 = "li";
var G__11106 = {"key": id};
var G__11107 = (function (){var G__11108 = "a";
var G__11109 = {"href": app.core.link.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$app$core_SLASH_artwork_DASH_detail,cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$id,id], null)], 0))};
var G__11110 = sablono.interpreter.interpret(name);
return React.createElement(G__11108,G__11109,G__11110);
})();
return React.createElement(G__11105,G__11106,G__11107);
})());

var G__11119 = (i__11083 + (1));
i__11083 = G__11119;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__11084),app$core$iter__11081(cljs.core.chunk_rest(s__11082__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__11084),null);
}
} else {
var map__11111 = cljs.core.first(s__11082__$2);
var map__11111__$1 = ((((!((map__11111 == null)))?((((map__11111.cljs$lang$protocol_mask$partition0$ & (64))) || (map__11111.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__11111):map__11111);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11111__$1,cljs.core.cst$kw$id);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11111__$1,cljs.core.cst$kw$name);
return cljs.core.cons((function (){var G__11113 = "li";
var G__11114 = {"key": id};
var G__11115 = (function (){var G__11116 = "a";
var G__11117 = {"href": app.core.link.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$app$core_SLASH_artwork_DASH_detail,cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$id,id], null)], 0))};
var G__11118 = sablono.interpreter.interpret(name);
return React.createElement(G__11116,G__11117,G__11118);
})();
return React.createElement(G__11113,G__11114,G__11115);
})(),app$core$iter__11081(cljs.core.rest(s__11082__$2)));
}
} else {
return null;
}
break;
}
});})(G__11078,G__11079,this__10073__auto____$1))
,null,null));
});})(G__11078,G__11079,this__10073__auto____$1))
;
return iter__5860__auto__(cljs.core.vals(cljs.core.cst$kw$artworks.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(app.core.db) : cljs.core.deref.call(null,app.core.db)))));
})());
return React.createElement(G__11078,G__11079,G__11080);
});

app.core.t_app$core11037.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$data,cljs.core.cst$sym$owner,cljs.core.cst$sym$meta11038], null);
});

app.core.t_app$core11037.cljs$lang$type = true;

app.core.t_app$core11037.cljs$lang$ctorStr = "app.core/t_app$core11037";

app.core.t_app$core11037.cljs$lang$ctorPrWriter = (function (this__5686__auto__,writer__5687__auto__,opt__5688__auto__){
return cljs.core._write(writer__5687__auto__,"app.core/t_app$core11037");
});

app.core.__GT_t_app$core11037 = (function app$core$__GT_t_app$core11037(data__$1,owner__$1,meta11038){
return (new app.core.t_app$core11037(data__$1,owner__$1,meta11038));
});

}

return (new app.core.t_app$core11037(data,owner,null));
}));
app.core.content.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$app$core_SLASH_artwork_DASH_detail,(function (data,owner){
if(typeof app.core.t_app$core11120 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
app.core.t_app$core11120 = (function (data,owner,meta11121){
this.data = data;
this.owner = owner;
this.meta11121 = meta11121;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
app.core.t_app$core11120.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11122,meta11121__$1){
var self__ = this;
var _11122__$1 = this;
return (new app.core.t_app$core11120(self__.data,self__.owner,meta11121__$1));
});

app.core.t_app$core11120.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11122){
var self__ = this;
var _11122__$1 = this;
return self__.meta11121;
});

app.core.t_app$core11120.prototype.om$core$IRender$ = true;

app.core.t_app$core11120.prototype.om$core$IRender$render$arity$1 = (function (this__10073__auto__){
var self__ = this;
var this__10073__auto____$1 = this;
return React.createElement("div",null,"View this artwork on high resolution on Google");
});

app.core.t_app$core11120.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$data,cljs.core.cst$sym$owner,cljs.core.cst$sym$meta11121], null);
});

app.core.t_app$core11120.cljs$lang$type = true;

app.core.t_app$core11120.cljs$lang$ctorStr = "app.core/t_app$core11120";

app.core.t_app$core11120.cljs$lang$ctorPrWriter = (function (this__5686__auto__,writer__5687__auto__,opt__5688__auto__){
return cljs.core._write(writer__5687__auto__,"app.core/t_app$core11120");
});

app.core.__GT_t_app$core11120 = (function app$core$__GT_t_app$core11120(data__$1,owner__$1,meta11121){
return (new app.core.t_app$core11120(data__$1,owner__$1,meta11121));
});

}

return (new app.core.t_app$core11120(data,owner,null));
}));
app.core.sections = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Home",cljs.core.cst$kw$app$core_SLASH_home], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Artists",cljs.core.cst$kw$app$core_SLASH_artist_DASH_list], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Artworks",cljs.core.cst$kw$app$core_SLASH_artwork_DASH_list], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Admin",cljs.core.cst$kw$app$core_SLASH_admin], null)], null);
app.core.menu = (function app$core$menu(data,owner){
if(typeof app.core.t_app$core11199 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
app.core.t_app$core11199 = (function (menu,data,owner,meta11200){
this.menu = menu;
this.data = data;
this.owner = owner;
this.meta11200 = meta11200;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
app.core.t_app$core11199.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11201,meta11200__$1){
var self__ = this;
var _11201__$1 = this;
return (new app.core.t_app$core11199(self__.menu,self__.data,self__.owner,meta11200__$1));
});

app.core.t_app$core11199.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11201){
var self__ = this;
var _11201__$1 = this;
return self__.meta11200;
});

app.core.t_app$core11199.prototype.om$core$IRender$ = true;

app.core.t_app$core11199.prototype.om$core$IRender$render$arity$1 = (function (this__10073__auto__){
var self__ = this;
var this__10073__auto____$1 = this;
var G__11236 = "ul";
var G__11237 = null;
var G__11238 = cljs.core.into_array.cljs$core$IFn$_invoke$arity$1((function (){var iter__5860__auto__ = ((function (G__11236,G__11237,this__10073__auto____$1){
return (function app$core$menu_$_iter__11239(s__11240){
return (new cljs.core.LazySeq(null,((function (G__11236,G__11237,this__10073__auto____$1){
return (function (){
var s__11240__$1 = s__11240;
while(true){
var temp__4425__auto__ = cljs.core.seq(s__11240__$1);
if(temp__4425__auto__){
var s__11240__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(s__11240__$2)){
var c__5858__auto__ = cljs.core.chunk_first(s__11240__$2);
var size__5859__auto__ = cljs.core.count(c__5858__auto__);
var b__11242 = cljs.core.chunk_buffer(size__5859__auto__);
if((function (){var i__11241 = (0);
while(true){
if((i__11241 < size__5859__auto__)){
var vec__11259 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__5858__auto__,i__11241);
var title = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11259,(0),null);
var route = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11259,(1),null);
var active_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(route,cljs.core.cst$kw$page.cljs$core$IFn$_invoke$arity$1(self__.data));
cljs.core.chunk_append(b__11242,(function (){var G__11260 = "li";
var G__11261 = {"key": route};
var G__11262 = (function (){var G__11263 = "a";
var G__11264 = {"href": app.core.link(route), "className": sablono.util.join_classes(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((active_QMARK_)?"active":"inactive")], null))};
var G__11265 = sablono.interpreter.interpret(title);
return React.createElement(G__11263,G__11264,G__11265);
})();
return React.createElement(G__11260,G__11261,G__11262);
})());

var G__11273 = (i__11241 + (1));
i__11241 = G__11273;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__11242),app$core$menu_$_iter__11239(cljs.core.chunk_rest(s__11240__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__11242),null);
}
} else {
var vec__11266 = cljs.core.first(s__11240__$2);
var title = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11266,(0),null);
var route = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11266,(1),null);
var active_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(route,cljs.core.cst$kw$page.cljs$core$IFn$_invoke$arity$1(self__.data));
return cljs.core.cons((function (){var G__11267 = "li";
var G__11268 = {"key": route};
var G__11269 = (function (){var G__11270 = "a";
var G__11271 = {"href": app.core.link(route), "className": sablono.util.join_classes(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((active_QMARK_)?"active":"inactive")], null))};
var G__11272 = sablono.interpreter.interpret(title);
return React.createElement(G__11270,G__11271,G__11272);
})();
return React.createElement(G__11267,G__11268,G__11269);
})(),app$core$menu_$_iter__11239(cljs.core.rest(s__11240__$2)));
}
} else {
return null;
}
break;
}
});})(G__11236,G__11237,this__10073__auto____$1))
,null,null));
});})(G__11236,G__11237,this__10073__auto____$1))
;
return iter__5860__auto__(app.core.sections);
})());
return React.createElement(G__11236,G__11237,G__11238);
});

app.core.t_app$core11199.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$menu,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$data,cljs.core.cst$sym$owner], null)))], null)),cljs.core.cst$sym$data,cljs.core.cst$sym$owner,cljs.core.cst$sym$meta11200], null);
});

app.core.t_app$core11199.cljs$lang$type = true;

app.core.t_app$core11199.cljs$lang$ctorStr = "app.core/t_app$core11199";

app.core.t_app$core11199.cljs$lang$ctorPrWriter = (function (this__5686__auto__,writer__5687__auto__,opt__5688__auto__){
return cljs.core._write(writer__5687__auto__,"app.core/t_app$core11199");
});

app.core.__GT_t_app$core11199 = (function app$core$menu_$___GT_t_app$core11199(menu__$1,data__$1,owner__$1,meta11200){
return (new app.core.t_app$core11199(menu__$1,data__$1,owner__$1,meta11200));
});

}

return (new app.core.t_app$core11199(app$core$menu,data,owner,null));
});
app.core.root = (function app$core$root(data,owner){
if(typeof app.core.t_app$core11293 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
app.core.t_app$core11293 = (function (root,data,owner,meta11294){
this.root = root;
this.data = data;
this.owner = owner;
this.meta11294 = meta11294;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
app.core.t_app$core11293.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11295,meta11294__$1){
var self__ = this;
var _11295__$1 = this;
return (new app.core.t_app$core11293(self__.root,self__.data,self__.owner,meta11294__$1));
});

app.core.t_app$core11293.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11295){
var self__ = this;
var _11295__$1 = this;
return self__.meta11294;
});

app.core.t_app$core11293.prototype.om$core$IRender$ = true;

app.core.t_app$core11293.prototype.om$core$IRender$render$arity$1 = (function (this__10073__auto__){
var self__ = this;
var this__10073__auto____$1 = this;
if(cljs.core.not(cljs.core.cst$kw$page.cljs$core$IFn$_invoke$arity$1(self__.data))){
return React.createElement("div",null,"Loading..");
} else {
var G__11304 = "div";
var G__11305 = null;
var G__11306 = (function (){var attrs11298 = om.core.build.cljs$core$IFn$_invoke$arity$2(app.core.menu,self__.data);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"div",((cljs.core.map_QMARK_(attrs11298))?sablono.interpreter.attributes(sablono.normalize.merge_with_class.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["menu"], null)], null),attrs11298], 0))):{"className": "menu"}),((cljs.core.map_QMARK_(attrs11298))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs11298)], null)));
})();
var G__11307 = (function (){var G__11308 = "div";
var G__11309 = {"className": "content"};
var G__11310 = (function (){var attrs11299 = cljs.core.cst$kw$title.cljs$core$IFn$_invoke$arity$1(self__.data);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(React.createElement,"h3",((cljs.core.map_QMARK_(attrs11299))?sablono.interpreter.attributes(attrs11299):null),((cljs.core.map_QMARK_(attrs11299))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret(attrs11299)], null)));
})();
var G__11311 = sablono.interpreter.interpret(om.core.build.cljs$core$IFn$_invoke$arity$2(app.core.content,self__.data));
return React.createElement(G__11308,G__11309,G__11310,G__11311);
})();
return React.createElement(G__11304,G__11305,G__11306,G__11307);
}
});

app.core.t_app$core11293.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(cljs.core.cst$sym$root,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$arglists,cljs.core.list(cljs.core.cst$sym$quote,cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$data,cljs.core.cst$sym$owner], null)))], null)),cljs.core.cst$sym$data,cljs.core.cst$sym$owner,cljs.core.cst$sym$meta11294], null);
});

app.core.t_app$core11293.cljs$lang$type = true;

app.core.t_app$core11293.cljs$lang$ctorStr = "app.core/t_app$core11293";

app.core.t_app$core11293.cljs$lang$ctorPrWriter = (function (this__5686__auto__,writer__5687__auto__,opt__5688__auto__){
return cljs.core._write(writer__5687__auto__,"app.core/t_app$core11293");
});

app.core.__GT_t_app$core11293 = (function app$core$root_$___GT_t_app$core11293(root__$1,data__$1,owner__$1,meta11294){
return (new app.core.t_app$core11293(root__$1,data__$1,owner__$1,meta11294));
});

}

return (new app.core.t_app$core11293(app$core$root,data,owner,null));
});
app.core._main = (function app$core$_main(){
var h_11325 = (new goog.History());
var G__11320_11326 = h_11325;
var G__11321_11327 = goog.history.EventType.NAVIGATE;
var G__11322_11328 = ((function (G__11320_11326,G__11321_11327,h_11325){
return (function (p1__11312_SHARP_){
var temp__4423__auto__ = cljs.core.not_empty(p1__11312_SHARP_.token);
if(cljs.core.truth_(temp__4423__auto__)){
var token = temp__4423__auto__;
var response = (function (){var G__11323 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$uri,token], null);
return (app.core.service.cljs$core$IFn$_invoke$arity$1 ? app.core.service.cljs$core$IFn$_invoke$arity$1(G__11323) : app.core.service.call(null,G__11323));
})();
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$sym$Response,response], 0));

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(app.core.app_state,cljs.core.merge,response);
} else {
return window.location.hash = "/";
}
});})(G__11320_11326,G__11321_11327,h_11325))
;
goog.events.listen(G__11320_11326,G__11321_11327,G__11322_11328);

var G__11324_11329 = h_11325;
G__11324_11329.setEnabled(true);


return om.core.root(app.core.root,app.core.app_state,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$target,document.getElementById("container")], null));
});
