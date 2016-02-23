// Compiled by ClojureScript 1.7.122 {}
goog.provide('app.core');
goog.require('cljs.core');
goog.require('om.core');
goog.require('sablono.core');
goog.require('tripod.core');
goog.require('goog.events');
goog.require('goog.History');
goog.require('goog.history.EventType');
cljs.core.enable_console_print_BANG_.call(null);
app.core.db = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"artists","artists",86504217),new cljs.core.PersistentArrayMap(null, 2, [(1),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),(1),new cljs.core.Keyword(null,"name","name",1843675177),"Goya"], null),(2),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),(2),new cljs.core.Keyword(null,"name","name",1843675177),"Velasquez"], null)], null),new cljs.core.Keyword(null,"artworks","artworks",-1598729592),new cljs.core.PersistentArrayMap(null, 2, [(1),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),(1),new cljs.core.Keyword(null,"name","name",1843675177),"La maja desnuda"], null),(2),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),(2),new cljs.core.Keyword(null,"name","name",1843675177),"Las meninas"], null)], null)], null));
app.core.app_state = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
app.core.home = (function app$core$home(req){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.Keyword("app.core","home","app.core/home",1018164047),new cljs.core.Keyword(null,"title","title",636505583),"Tripod demo"], null);
});
app.core.login = (function app$core$login(req){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.Keyword("app.core","login","app.core/login",1145385267),new cljs.core.Keyword(null,"title","title",636505583),"Login"], null);
});
app.core.artist_list = (function app$core$artist_list(req){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.Keyword("app.core","artist-list","app.core/artist-list",1764211572),new cljs.core.Keyword(null,"title","title",636505583),"Artists"], null);
});
app.core.artist_detail = (function app$core$artist_detail(p__14501){
var map__14504 = p__14501;
var map__14504__$1 = ((((!((map__14504 == null)))?((((map__14504.cljs$lang$protocol_mask$partition0$ & (64))) || (map__14504.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14504):map__14504);
var id = cljs.core.get.call(null,map__14504__$1,new cljs.core.Keyword("app.core","id","app.core/id",1721650920));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.Keyword("app.core","artist-detail","app.core/artist-detail",-1642728379),new cljs.core.Keyword(null,"title","title",636505583),cljs.core.get_in.call(null,cljs.core.deref.call(null,app.core.db),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"artists","artists",86504217),id,new cljs.core.Keyword(null,"name","name",1843675177)], null)),new cljs.core.Keyword(null,"id","id",-1388402092),id], null);
});
app.core.artist_edit = (function app$core$artist_edit(p__14506){
var map__14509 = p__14506;
var map__14509__$1 = ((((!((map__14509 == null)))?((((map__14509.cljs$lang$protocol_mask$partition0$ & (64))) || (map__14509.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14509):map__14509);
var id = cljs.core.get.call(null,map__14509__$1,new cljs.core.Keyword("app.core","id","app.core/id",1721650920));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.Keyword("app.core","artist-edit","app.core/artist-edit",-706453503),new cljs.core.Keyword(null,"title","title",636505583),[cljs.core.str("Edit "),cljs.core.str(cljs.core.get_in.call(null,cljs.core.deref.call(null,app.core.db),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"artists","artists",86504217),id,new cljs.core.Keyword(null,"name","name",1843675177)], null)))].join(''),new cljs.core.Keyword(null,"id","id",-1388402092),id], null);
});
app.core.artwork_list = (function app$core$artwork_list(req){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.Keyword("app.core","artwork-list","app.core/artwork-list",957424386),new cljs.core.Keyword(null,"title","title",636505583),"Artworks"], null);
});
app.core.artwork_detail = (function app$core$artwork_detail(p__14511){
var map__14514 = p__14511;
var map__14514__$1 = ((((!((map__14514 == null)))?((((map__14514.cljs$lang$protocol_mask$partition0$ & (64))) || (map__14514.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14514):map__14514);
var id = cljs.core.get.call(null,map__14514__$1,new cljs.core.Keyword("app.core","id","app.core/id",1721650920));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.Keyword("app.core","artwork-detail","app.core/artwork-detail",1084957395),new cljs.core.Keyword(null,"title","title",636505583),cljs.core.get_in.call(null,cljs.core.deref.call(null,app.core.db),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"artworks","artworks",-1598729592),id,new cljs.core.Keyword(null,"name","name",1843675177)], null)),new cljs.core.Keyword(null,"id","id",-1388402092),id], null);
});
app.core.artwork_edit = (function app$core$artwork_edit(p__14516){
var map__14519 = p__14516;
var map__14519__$1 = ((((!((map__14519 == null)))?((((map__14519.cljs$lang$protocol_mask$partition0$ & (64))) || (map__14519.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14519):map__14519);
var id = cljs.core.get.call(null,map__14519__$1,new cljs.core.Keyword("app.core","id","app.core/id",1721650920));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.Keyword("app.core","artwork-edit","app.core/artwork-edit",1595336436),new cljs.core.Keyword(null,"title","title",636505583),[cljs.core.str("Edit "),cljs.core.str(cljs.core.get_in.call(null,cljs.core.deref.call(null,app.core.db),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"artworks","artworks",-1598729592),id,new cljs.core.Keyword(null,"name","name",1843675177)], null)))].join(''),new cljs.core.Keyword(null,"id","id",-1388402092),id], null);
});
app.core.admin = (function app$core$admin(req){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.Keyword("app.core","admin","app.core/admin",-251370759),new cljs.core.Keyword(null,"title","title",636505583),"Private section"], null);
});
app.core.id__GT_int = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword("app.core","id->int","app.core/id->int",-1985168128),new cljs.core.Keyword(null,"enter","enter",1792452624),(function (context){
return cljs.core.update.call(null,context,new cljs.core.Keyword(null,"request","request",1772954723),cljs.core.assoc,new cljs.core.Keyword("app.core","id","app.core/id",1721650920),parseInt(cljs.core.get_in.call(null,context,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"request","request",1772954723),new cljs.core.Keyword(null,"path-params","path-params",-48130597),new cljs.core.Keyword(null,"id","id",-1388402092)], null))));
})], null);
app.core.private$ = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword("app.core","private","app.core/private",-1584579374),new cljs.core.Keyword(null,"enter","enter",1792452624),(function (context){
if(cljs.core.truth_(new cljs.core.Keyword(null,"auth?","auth?",-1680451378).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,app.core.app_state)))){
return context;
} else {
return cljs.core.assoc.call(null,tripod.context.terminate.call(null,context),new cljs.core.Keyword(null,"response","response",-1068424192),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.Keyword("app.core","unauthorised","app.core/unauthorised",975766495),new cljs.core.Keyword(null,"title","title",636505583),"Unauthorised"], null));
}
})], null);
app.core.routes = tripod.core.expand_routes.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, ["/",new cljs.core.Var(function(){return app.core.home;},new cljs.core.Symbol("app.core","home","app.core/home",-1636271722,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"app.core","app.core",1762291291,null),new cljs.core.Symbol(null,"home","home",1565974218,null),"/Users/frankie/.boot/cache/tmp/Users/frankie/Documents/frankiesardo/tripod/example/web/1qr/-c4hx1l/app/core.cljs",11,1,23,23,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"req","req",1314083224,null)], null)),null,(cljs.core.truth_(app.core.home)?app.core.home.cljs$lang$test:null)])),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["/artists",new cljs.core.Var(function(){return app.core.artist_list;},new cljs.core.Symbol("app.core","artist-list","app.core/artist-list",-890224197,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"app.core","app.core",1762291291,null),new cljs.core.Symbol(null,"artist-list","artist-list",399695111,null),"/Users/frankie/.boot/cache/tmp/Users/frankie/Documents/frankiesardo/tripod/example/web/1qr/-c4hx1l/app/core.cljs",18,1,31,31,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"req","req",1314083224,null)], null)),null,(cljs.core.truth_(app.core.artist_list)?app.core.artist_list.cljs$lang$test:null)])),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["/:id",cljs.core.with_meta(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.core.id__GT_int], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"interceptors","interceptors",-1546782951),true], null)),new cljs.core.Var(function(){return app.core.artist_detail;},new cljs.core.Symbol("app.core","artist-detail","app.core/artist-detail",-2196852,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"app.core","app.core",1762291291,null),new cljs.core.Symbol(null,"artist-detail","artist-detail",977262144,null),"/Users/frankie/.boot/cache/tmp/Users/frankie/Documents/frankiesardo/tripod/example/web/1qr/-c4hx1l/app/core.cljs",20,1,35,35,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app.core","id","app.core/id",1721650920)], null)], null)], null)),null,(cljs.core.truth_(app.core.artist_detail)?app.core.artist_detail.cljs$lang$test:null)])),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["/edit",new cljs.core.Var(function(){return app.core.artist_edit;},new cljs.core.Symbol("app.core","artist-edit","app.core/artist-edit",934078024,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"app.core","app.core",1762291291,null),new cljs.core.Symbol(null,"artist-edit","artist-edit",-192085740,null),"/Users/frankie/.boot/cache/tmp/Users/frankie/Documents/frankiesardo/tripod/example/web/1qr/-c4hx1l/app/core.cljs",18,1,40,40,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app.core","id","app.core/id",1721650920)], null)], null)], null)),null,(cljs.core.truth_(app.core.artist_edit)?app.core.artist_edit.cljs$lang$test:null)]))], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["/artworks",new cljs.core.Var(function(){return app.core.artwork_list;},new cljs.core.Symbol("app.core","artwork-list","app.core/artwork-list",-1697011383,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"app.core","app.core",1762291291,null),new cljs.core.Symbol(null,"artwork-list","artwork-list",1505691141,null),"/Users/frankie/.boot/cache/tmp/Users/frankie/Documents/frankiesardo/tripod/example/web/1qr/-c4hx1l/app/core.cljs",19,1,45,45,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"req","req",1314083224,null)], null)),null,(cljs.core.truth_(app.core.artwork_list)?app.core.artwork_list.cljs$lang$test:null)])),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["/:id",cljs.core.with_meta(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.core.id__GT_int], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"interceptors","interceptors",-1546782951),true], null)),new cljs.core.Var(function(){return app.core.artwork_detail;},new cljs.core.Symbol("app.core","artwork-detail","app.core/artwork-detail",-1569478374,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"app.core","app.core",1762291291,null),new cljs.core.Symbol(null,"artwork-detail","artwork-detail",496356438,null),"/Users/frankie/.boot/cache/tmp/Users/frankie/Documents/frankiesardo/tripod/example/web/1qr/-c4hx1l/app/core.cljs",21,1,49,49,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app.core","id","app.core/id",1721650920)], null)], null)], null)),null,(cljs.core.truth_(app.core.artwork_detail)?app.core.artwork_detail.cljs$lang$test:null)])),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["/edit",new cljs.core.Var(function(){return app.core.artwork_edit;},new cljs.core.Symbol("app.core","artwork-edit","app.core/artwork-edit",-1059099333,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"app.core","app.core",1762291291,null),new cljs.core.Symbol(null,"artwork-edit","artwork-edit",-2109869361,null),"/Users/frankie/.boot/cache/tmp/Users/frankie/Documents/frankiesardo/tripod/example/web/1qr/-c4hx1l/app/core.cljs",19,1,54,54,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app.core","id","app.core/id",1721650920)], null)], null)], null)),null,(cljs.core.truth_(app.core.artwork_edit)?app.core.artwork_edit.cljs$lang$test:null)]))], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["/admin",cljs.core.with_meta(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.core.private$], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"interceptors","interceptors",-1546782951),true], null)),new cljs.core.Var(function(){return app.core.admin;},new cljs.core.Symbol("app.core","admin","app.core/admin",1389160768,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"app.core","app.core",1762291291,null),new cljs.core.Symbol(null,"admin","admin",401429900,null),"/Users/frankie/.boot/cache/tmp/Users/frankie/Documents/frankiesardo/tripod/example/web/1qr/-c4hx1l/app/core.cljs",12,1,59,59,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"req","req",1314083224,null)], null)),null,(cljs.core.truth_(app.core.admin)?app.core.admin.cljs$lang$test:null)]))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["/login",new cljs.core.Var(function(){return app.core.login;},new cljs.core.Symbol("app.core","login","app.core/login",-1509050502,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"app.core","app.core",1762291291,null),new cljs.core.Symbol(null,"login","login",1695749046,null),"/Users/frankie/.boot/cache/tmp/Users/frankie/Documents/frankiesardo/tripod/example/web/1qr/-c4hx1l/app/core.cljs",12,1,27,27,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"req","req",1314083224,null)], null)),null,(cljs.core.truth_(app.core.login)?app.core.login.cljs$lang$test:null)]))], null)], null)], null));
app.core.service = tripod.core.service.call(null,tripod.core.default_interceptors.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("tripod.core","routes","tripod.core/routes",-76496941),app.core.routes], null)));
app.core.link = (function app$core$link(var_args){
var args__6153__auto__ = [];
var len__6146__auto___14525 = arguments.length;
var i__6147__auto___14526 = (0);
while(true){
if((i__6147__auto___14526 < len__6146__auto___14525)){
args__6153__auto__.push((arguments[i__6147__auto___14526]));

var G__14527 = (i__6147__auto___14526 + (1));
i__6147__auto___14526 = G__14527;
continue;
} else {
}
break;
}

var argseq__6154__auto__ = ((((1) < args__6153__auto__.length))?(new cljs.core.IndexedSeq(args__6153__auto__.slice((1)),(0))):null);
return app.core.link.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__6154__auto__);
});

app.core.link.cljs$core$IFn$_invoke$arity$variadic = (function (route_name,p__14523){
var vec__14524 = p__14523;
var params = cljs.core.nth.call(null,vec__14524,(0),null);
return [cljs.core.str("#"),cljs.core.str(tripod.core.path_for.call(null,route_name,params))].join('');
});

app.core.link.cljs$lang$maxFixedArity = (1);

app.core.link.cljs$lang$applyTo = (function (seq14521){
var G__14522 = cljs.core.first.call(null,seq14521);
var seq14521__$1 = cljs.core.next.call(null,seq14521);
return app.core.link.cljs$core$IFn$_invoke$arity$variadic(G__14522,seq14521__$1);
});
if(typeof app.core.content !== 'undefined'){
} else {
app.core.content = (function (){var method_table__6001__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__6002__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__6003__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__6004__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__6005__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"app.core","content"),((function (method_table__6001__auto__,prefer_table__6002__auto__,method_cache__6003__auto__,cached_hierarchy__6004__auto__,hierarchy__6005__auto__){
return (function (data,owner){
return cljs.core.get_in.call(null,data,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"page","page",849072397)], null));
});})(method_table__6001__auto__,prefer_table__6002__auto__,method_cache__6003__auto__,cached_hierarchy__6004__auto__,hierarchy__6005__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__6005__auto__,method_table__6001__auto__,prefer_table__6002__auto__,method_cache__6003__auto__,cached_hierarchy__6004__auto__));
})();
}
cljs.core._add_method.call(null,app.core.content,new cljs.core.Keyword(null,"default","default",-1987822328),(function (data,owner){
if(typeof app.core.t_app$core14528 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
app.core.t_app$core14528 = (function (data,owner,meta14529){
this.data = data;
this.owner = owner;
this.meta14529 = meta14529;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
app.core.t_app$core14528.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14530,meta14529__$1){
var self__ = this;
var _14530__$1 = this;
return (new app.core.t_app$core14528(self__.data,self__.owner,meta14529__$1));
});

app.core.t_app$core14528.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14530){
var self__ = this;
var _14530__$1 = this;
return self__.meta14529;
});

app.core.t_app$core14528.prototype.om$core$IRender$ = true;

app.core.t_app$core14528.prototype.om$core$IRender$render$arity$1 = (function (this__9068__auto__){
var self__ = this;
var this__9068__auto____$1 = this;
return React.createElement("div",null,"Not found");
});

app.core.t_app$core14528.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"meta14529","meta14529",-1812467128,null)], null);
});

app.core.t_app$core14528.cljs$lang$type = true;

app.core.t_app$core14528.cljs$lang$ctorStr = "app.core/t_app$core14528";

app.core.t_app$core14528.cljs$lang$ctorPrWriter = (function (this__5686__auto__,writer__5687__auto__,opt__5688__auto__){
return cljs.core._write.call(null,writer__5687__auto__,"app.core/t_app$core14528");
});

app.core.__GT_t_app$core14528 = (function app$core$__GT_t_app$core14528(data__$1,owner__$1,meta14529){
return (new app.core.t_app$core14528(data__$1,owner__$1,meta14529));
});

}

return (new app.core.t_app$core14528(data,owner,null));
}));
cljs.core._add_method.call(null,app.core.content,new cljs.core.Keyword("app.core","home","app.core/home",1018164047),(function (data,owner){
if(typeof app.core.t_app$core14533 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
app.core.t_app$core14533 = (function (data,owner,meta14534){
this.data = data;
this.owner = owner;
this.meta14534 = meta14534;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
app.core.t_app$core14533.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14535,meta14534__$1){
var self__ = this;
var _14535__$1 = this;
return (new app.core.t_app$core14533(self__.data,self__.owner,meta14534__$1));
});

app.core.t_app$core14533.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14535){
var self__ = this;
var _14535__$1 = this;
return self__.meta14534;
});

app.core.t_app$core14533.prototype.om$core$IRender$ = true;

app.core.t_app$core14533.prototype.om$core$IRender$render$arity$1 = (function (this__9068__auto__){
var self__ = this;
var this__9068__auto____$1 = this;
return React.createElement("div",null,"Click around, have fun");
});

app.core.t_app$core14533.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"meta14534","meta14534",-340587295,null)], null);
});

app.core.t_app$core14533.cljs$lang$type = true;

app.core.t_app$core14533.cljs$lang$ctorStr = "app.core/t_app$core14533";

app.core.t_app$core14533.cljs$lang$ctorPrWriter = (function (this__5686__auto__,writer__5687__auto__,opt__5688__auto__){
return cljs.core._write.call(null,writer__5687__auto__,"app.core/t_app$core14533");
});

app.core.__GT_t_app$core14533 = (function app$core$__GT_t_app$core14533(data__$1,owner__$1,meta14534){
return (new app.core.t_app$core14533(data__$1,owner__$1,meta14534));
});

}

return (new app.core.t_app$core14533(data,owner,null));
}));
cljs.core._add_method.call(null,app.core.content,new cljs.core.Keyword("app.core","login","app.core/login",1145385267),(function (data,owner){
if(typeof app.core.t_app$core14538 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
app.core.t_app$core14538 = (function (data,owner,meta14539){
this.data = data;
this.owner = owner;
this.meta14539 = meta14539;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
app.core.t_app$core14538.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14540,meta14539__$1){
var self__ = this;
var _14540__$1 = this;
return (new app.core.t_app$core14538(self__.data,self__.owner,meta14539__$1));
});

app.core.t_app$core14538.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14540){
var self__ = this;
var _14540__$1 = this;
return self__.meta14539;
});

app.core.t_app$core14538.prototype.om$core$IRender$ = true;

app.core.t_app$core14538.prototype.om$core$IRender$render$arity$1 = (function (this__9068__auto__){
var self__ = this;
var this__9068__auto____$1 = this;
return React.createElement("div",null,React.createElement("div",null,"Click the button below to authorise, then you can navigate back to /admin"),React.createElement("button",{"onClick": ((function (this__9068__auto____$1){
return (function (){
return cljs.core.swap_BANG_.call(null,app.core.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"auth?","auth?",-1680451378),true);
});})(this__9068__auto____$1))
},"Login!"));
});

app.core.t_app$core14538.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"meta14539","meta14539",-348453511,null)], null);
});

app.core.t_app$core14538.cljs$lang$type = true;

app.core.t_app$core14538.cljs$lang$ctorStr = "app.core/t_app$core14538";

app.core.t_app$core14538.cljs$lang$ctorPrWriter = (function (this__5686__auto__,writer__5687__auto__,opt__5688__auto__){
return cljs.core._write.call(null,writer__5687__auto__,"app.core/t_app$core14538");
});

app.core.__GT_t_app$core14538 = (function app$core$__GT_t_app$core14538(data__$1,owner__$1,meta14539){
return (new app.core.t_app$core14538(data__$1,owner__$1,meta14539));
});

}

return (new app.core.t_app$core14538(data,owner,null));
}));
cljs.core._add_method.call(null,app.core.content,new cljs.core.Keyword("app.core","unauthorised","app.core/unauthorised",975766495),(function (data,owner){
if(typeof app.core.t_app$core14543 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
app.core.t_app$core14543 = (function (data,owner,meta14544){
this.data = data;
this.owner = owner;
this.meta14544 = meta14544;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
app.core.t_app$core14543.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14545,meta14544__$1){
var self__ = this;
var _14545__$1 = this;
return (new app.core.t_app$core14543(self__.data,self__.owner,meta14544__$1));
});

app.core.t_app$core14543.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14545){
var self__ = this;
var _14545__$1 = this;
return self__.meta14544;
});

app.core.t_app$core14543.prototype.om$core$IRender$ = true;

app.core.t_app$core14543.prototype.om$core$IRender$render$arity$1 = (function (this__9068__auto__){
var self__ = this;
var this__9068__auto____$1 = this;
return React.createElement("a",{"href": app.core.link.call(null,new cljs.core.Keyword("app.core","login","app.core/login",1145385267))},"Go to the login page");
});

app.core.t_app$core14543.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"meta14544","meta14544",-921810246,null)], null);
});

app.core.t_app$core14543.cljs$lang$type = true;

app.core.t_app$core14543.cljs$lang$ctorStr = "app.core/t_app$core14543";

app.core.t_app$core14543.cljs$lang$ctorPrWriter = (function (this__5686__auto__,writer__5687__auto__,opt__5688__auto__){
return cljs.core._write.call(null,writer__5687__auto__,"app.core/t_app$core14543");
});

app.core.__GT_t_app$core14543 = (function app$core$__GT_t_app$core14543(data__$1,owner__$1,meta14544){
return (new app.core.t_app$core14543(data__$1,owner__$1,meta14544));
});

}

return (new app.core.t_app$core14543(data,owner,null));
}));
cljs.core._add_method.call(null,app.core.content,new cljs.core.Keyword("app.core","admin","app.core/admin",-251370759),(function (data,owner){
if(typeof app.core.t_app$core14546 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
app.core.t_app$core14546 = (function (data,owner,meta14547){
this.data = data;
this.owner = owner;
this.meta14547 = meta14547;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
app.core.t_app$core14546.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14548,meta14547__$1){
var self__ = this;
var _14548__$1 = this;
return (new app.core.t_app$core14546(self__.data,self__.owner,meta14547__$1));
});

app.core.t_app$core14546.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14548){
var self__ = this;
var _14548__$1 = this;
return self__.meta14547;
});

app.core.t_app$core14546.prototype.om$core$IRender$ = true;

app.core.t_app$core14546.prototype.om$core$IRender$render$arity$1 = (function (this__9068__auto__){
var self__ = this;
var this__9068__auto____$1 = this;
return React.createElement("div",null,"You're viewing protected content here");
});

app.core.t_app$core14546.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"meta14547","meta14547",-29418842,null)], null);
});

app.core.t_app$core14546.cljs$lang$type = true;

app.core.t_app$core14546.cljs$lang$ctorStr = "app.core/t_app$core14546";

app.core.t_app$core14546.cljs$lang$ctorPrWriter = (function (this__5686__auto__,writer__5687__auto__,opt__5688__auto__){
return cljs.core._write.call(null,writer__5687__auto__,"app.core/t_app$core14546");
});

app.core.__GT_t_app$core14546 = (function app$core$__GT_t_app$core14546(data__$1,owner__$1,meta14547){
return (new app.core.t_app$core14546(data__$1,owner__$1,meta14547));
});

}

return (new app.core.t_app$core14546(data,owner,null));
}));
cljs.core._add_method.call(null,app.core.content,new cljs.core.Keyword("app.core","artist-list","app.core/artist-list",1764211572),(function (data,owner){
if(typeof app.core.t_app$core14551 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
app.core.t_app$core14551 = (function (data,owner,meta14552){
this.data = data;
this.owner = owner;
this.meta14552 = meta14552;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
app.core.t_app$core14551.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14553,meta14552__$1){
var self__ = this;
var _14553__$1 = this;
return (new app.core.t_app$core14551(self__.data,self__.owner,meta14552__$1));
});

app.core.t_app$core14551.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14553){
var self__ = this;
var _14553__$1 = this;
return self__.meta14552;
});

app.core.t_app$core14551.prototype.om$core$IRender$ = true;

app.core.t_app$core14551.prototype.om$core$IRender$render$arity$1 = (function (this__9068__auto__){
var self__ = this;
var this__9068__auto____$1 = this;
return React.createElement("ul",null,cljs.core.into_array.call(null,(function (){var iter__5860__auto__ = ((function (this__9068__auto____$1){
return (function app$core$iter__14554(s__14555){
return (new cljs.core.LazySeq(null,((function (this__9068__auto____$1){
return (function (){
var s__14555__$1 = s__14555;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__14555__$1);
if(temp__4425__auto__){
var s__14555__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__14555__$2)){
var c__5858__auto__ = cljs.core.chunk_first.call(null,s__14555__$2);
var size__5859__auto__ = cljs.core.count.call(null,c__5858__auto__);
var b__14557 = cljs.core.chunk_buffer.call(null,size__5859__auto__);
if((function (){var i__14556 = (0);
while(true){
if((i__14556 < size__5859__auto__)){
var map__14562 = cljs.core._nth.call(null,c__5858__auto__,i__14556);
var map__14562__$1 = ((((!((map__14562 == null)))?((((map__14562.cljs$lang$protocol_mask$partition0$ & (64))) || (map__14562.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14562):map__14562);
var id = cljs.core.get.call(null,map__14562__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var name = cljs.core.get.call(null,map__14562__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.chunk_append.call(null,b__14557,React.createElement("li",{"key": id},React.createElement("a",{"href": app.core.link.call(null,new cljs.core.Keyword("app.core","artist-detail","app.core/artist-detail",-1642728379),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),id], null))},sablono.interpreter.interpret.call(null,name))));

var G__14566 = (i__14556 + (1));
i__14556 = G__14566;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14557),app$core$iter__14554.call(null,cljs.core.chunk_rest.call(null,s__14555__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14557),null);
}
} else {
var map__14564 = cljs.core.first.call(null,s__14555__$2);
var map__14564__$1 = ((((!((map__14564 == null)))?((((map__14564.cljs$lang$protocol_mask$partition0$ & (64))) || (map__14564.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14564):map__14564);
var id = cljs.core.get.call(null,map__14564__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var name = cljs.core.get.call(null,map__14564__$1,new cljs.core.Keyword(null,"name","name",1843675177));
return cljs.core.cons.call(null,React.createElement("li",{"key": id},React.createElement("a",{"href": app.core.link.call(null,new cljs.core.Keyword("app.core","artist-detail","app.core/artist-detail",-1642728379),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),id], null))},sablono.interpreter.interpret.call(null,name))),app$core$iter__14554.call(null,cljs.core.rest.call(null,s__14555__$2)));
}
} else {
return null;
}
break;
}
});})(this__9068__auto____$1))
,null,null));
});})(this__9068__auto____$1))
;
return iter__5860__auto__.call(null,cljs.core.vals.call(null,new cljs.core.Keyword(null,"artists","artists",86504217).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,app.core.db))));
})()));
});

app.core.t_app$core14551.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"meta14552","meta14552",-368211778,null)], null);
});

app.core.t_app$core14551.cljs$lang$type = true;

app.core.t_app$core14551.cljs$lang$ctorStr = "app.core/t_app$core14551";

app.core.t_app$core14551.cljs$lang$ctorPrWriter = (function (this__5686__auto__,writer__5687__auto__,opt__5688__auto__){
return cljs.core._write.call(null,writer__5687__auto__,"app.core/t_app$core14551");
});

app.core.__GT_t_app$core14551 = (function app$core$__GT_t_app$core14551(data__$1,owner__$1,meta14552){
return (new app.core.t_app$core14551(data__$1,owner__$1,meta14552));
});

}

return (new app.core.t_app$core14551(data,owner,null));
}));
cljs.core._add_method.call(null,app.core.content,new cljs.core.Keyword("app.core","artist-detail","app.core/artist-detail",-1642728379),(function (data,owner){
if(typeof app.core.t_app$core14567 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
app.core.t_app$core14567 = (function (data,owner,meta14568){
this.data = data;
this.owner = owner;
this.meta14568 = meta14568;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
app.core.t_app$core14567.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14569,meta14568__$1){
var self__ = this;
var _14569__$1 = this;
return (new app.core.t_app$core14567(self__.data,self__.owner,meta14568__$1));
});

app.core.t_app$core14567.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14569){
var self__ = this;
var _14569__$1 = this;
return self__.meta14568;
});

app.core.t_app$core14567.prototype.om$core$IRender$ = true;

app.core.t_app$core14567.prototype.om$core$IRender$render$arity$1 = (function (this__9068__auto__){
var self__ = this;
var this__9068__auto____$1 = this;
return React.createElement("div",null,"Browse this artist selected works on Google");
});

app.core.t_app$core14567.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"meta14568","meta14568",-543519678,null)], null);
});

app.core.t_app$core14567.cljs$lang$type = true;

app.core.t_app$core14567.cljs$lang$ctorStr = "app.core/t_app$core14567";

app.core.t_app$core14567.cljs$lang$ctorPrWriter = (function (this__5686__auto__,writer__5687__auto__,opt__5688__auto__){
return cljs.core._write.call(null,writer__5687__auto__,"app.core/t_app$core14567");
});

app.core.__GT_t_app$core14567 = (function app$core$__GT_t_app$core14567(data__$1,owner__$1,meta14568){
return (new app.core.t_app$core14567(data__$1,owner__$1,meta14568));
});

}

return (new app.core.t_app$core14567(data,owner,null));
}));
cljs.core._add_method.call(null,app.core.content,new cljs.core.Keyword("app.core","artwork-list","app.core/artwork-list",957424386),(function (data,owner){
if(typeof app.core.t_app$core14572 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
app.core.t_app$core14572 = (function (data,owner,meta14573){
this.data = data;
this.owner = owner;
this.meta14573 = meta14573;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
app.core.t_app$core14572.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14574,meta14573__$1){
var self__ = this;
var _14574__$1 = this;
return (new app.core.t_app$core14572(self__.data,self__.owner,meta14573__$1));
});

app.core.t_app$core14572.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14574){
var self__ = this;
var _14574__$1 = this;
return self__.meta14573;
});

app.core.t_app$core14572.prototype.om$core$IRender$ = true;

app.core.t_app$core14572.prototype.om$core$IRender$render$arity$1 = (function (this__9068__auto__){
var self__ = this;
var this__9068__auto____$1 = this;
return React.createElement("ul",null,cljs.core.into_array.call(null,(function (){var iter__5860__auto__ = ((function (this__9068__auto____$1){
return (function app$core$iter__14575(s__14576){
return (new cljs.core.LazySeq(null,((function (this__9068__auto____$1){
return (function (){
var s__14576__$1 = s__14576;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__14576__$1);
if(temp__4425__auto__){
var s__14576__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__14576__$2)){
var c__5858__auto__ = cljs.core.chunk_first.call(null,s__14576__$2);
var size__5859__auto__ = cljs.core.count.call(null,c__5858__auto__);
var b__14578 = cljs.core.chunk_buffer.call(null,size__5859__auto__);
if((function (){var i__14577 = (0);
while(true){
if((i__14577 < size__5859__auto__)){
var map__14583 = cljs.core._nth.call(null,c__5858__auto__,i__14577);
var map__14583__$1 = ((((!((map__14583 == null)))?((((map__14583.cljs$lang$protocol_mask$partition0$ & (64))) || (map__14583.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14583):map__14583);
var id = cljs.core.get.call(null,map__14583__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var name = cljs.core.get.call(null,map__14583__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.chunk_append.call(null,b__14578,React.createElement("li",{"key": id},React.createElement("a",{"href": app.core.link.call(null,new cljs.core.Keyword("app.core","artwork-detail","app.core/artwork-detail",1084957395),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),id], null))},sablono.interpreter.interpret.call(null,name))));

var G__14587 = (i__14577 + (1));
i__14577 = G__14587;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14578),app$core$iter__14575.call(null,cljs.core.chunk_rest.call(null,s__14576__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14578),null);
}
} else {
var map__14585 = cljs.core.first.call(null,s__14576__$2);
var map__14585__$1 = ((((!((map__14585 == null)))?((((map__14585.cljs$lang$protocol_mask$partition0$ & (64))) || (map__14585.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14585):map__14585);
var id = cljs.core.get.call(null,map__14585__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var name = cljs.core.get.call(null,map__14585__$1,new cljs.core.Keyword(null,"name","name",1843675177));
return cljs.core.cons.call(null,React.createElement("li",{"key": id},React.createElement("a",{"href": app.core.link.call(null,new cljs.core.Keyword("app.core","artwork-detail","app.core/artwork-detail",1084957395),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),id], null))},sablono.interpreter.interpret.call(null,name))),app$core$iter__14575.call(null,cljs.core.rest.call(null,s__14576__$2)));
}
} else {
return null;
}
break;
}
});})(this__9068__auto____$1))
,null,null));
});})(this__9068__auto____$1))
;
return iter__5860__auto__.call(null,cljs.core.vals.call(null,new cljs.core.Keyword(null,"artworks","artworks",-1598729592).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,app.core.db))));
})()));
});

app.core.t_app$core14572.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"meta14573","meta14573",-1164950651,null)], null);
});

app.core.t_app$core14572.cljs$lang$type = true;

app.core.t_app$core14572.cljs$lang$ctorStr = "app.core/t_app$core14572";

app.core.t_app$core14572.cljs$lang$ctorPrWriter = (function (this__5686__auto__,writer__5687__auto__,opt__5688__auto__){
return cljs.core._write.call(null,writer__5687__auto__,"app.core/t_app$core14572");
});

app.core.__GT_t_app$core14572 = (function app$core$__GT_t_app$core14572(data__$1,owner__$1,meta14573){
return (new app.core.t_app$core14572(data__$1,owner__$1,meta14573));
});

}

return (new app.core.t_app$core14572(data,owner,null));
}));
cljs.core._add_method.call(null,app.core.content,new cljs.core.Keyword("app.core","artwork-detail","app.core/artwork-detail",1084957395),(function (data,owner){
if(typeof app.core.t_app$core14588 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
app.core.t_app$core14588 = (function (data,owner,meta14589){
this.data = data;
this.owner = owner;
this.meta14589 = meta14589;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
app.core.t_app$core14588.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14590,meta14589__$1){
var self__ = this;
var _14590__$1 = this;
return (new app.core.t_app$core14588(self__.data,self__.owner,meta14589__$1));
});

app.core.t_app$core14588.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14590){
var self__ = this;
var _14590__$1 = this;
return self__.meta14589;
});

app.core.t_app$core14588.prototype.om$core$IRender$ = true;

app.core.t_app$core14588.prototype.om$core$IRender$render$arity$1 = (function (this__9068__auto__){
var self__ = this;
var this__9068__auto____$1 = this;
return React.createElement("div",null,"View this artwork on high resolution on Google");
});

app.core.t_app$core14588.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"meta14589","meta14589",-1158453195,null)], null);
});

app.core.t_app$core14588.cljs$lang$type = true;

app.core.t_app$core14588.cljs$lang$ctorStr = "app.core/t_app$core14588";

app.core.t_app$core14588.cljs$lang$ctorPrWriter = (function (this__5686__auto__,writer__5687__auto__,opt__5688__auto__){
return cljs.core._write.call(null,writer__5687__auto__,"app.core/t_app$core14588");
});

app.core.__GT_t_app$core14588 = (function app$core$__GT_t_app$core14588(data__$1,owner__$1,meta14589){
return (new app.core.t_app$core14588(data__$1,owner__$1,meta14589));
});

}

return (new app.core.t_app$core14588(data,owner,null));
}));
app.core.sections = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Home",new cljs.core.Keyword("app.core","home","app.core/home",1018164047)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Artists",new cljs.core.Keyword("app.core","artist-list","app.core/artist-list",1764211572)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Artworks",new cljs.core.Keyword("app.core","artwork-list","app.core/artwork-list",957424386)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Admin",new cljs.core.Keyword("app.core","admin","app.core/admin",-251370759)], null)], null);
app.core.menu = (function app$core$menu(data,owner){
if(typeof app.core.t_app$core14604 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
app.core.t_app$core14604 = (function (menu,data,owner,meta14605){
this.menu = menu;
this.data = data;
this.owner = owner;
this.meta14605 = meta14605;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
app.core.t_app$core14604.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14606,meta14605__$1){
var self__ = this;
var _14606__$1 = this;
return (new app.core.t_app$core14604(self__.menu,self__.data,self__.owner,meta14605__$1));
});

app.core.t_app$core14604.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14606){
var self__ = this;
var _14606__$1 = this;
return self__.meta14605;
});

app.core.t_app$core14604.prototype.om$core$IRender$ = true;

app.core.t_app$core14604.prototype.om$core$IRender$render$arity$1 = (function (this__9068__auto__){
var self__ = this;
var this__9068__auto____$1 = this;
return React.createElement("ul",null,cljs.core.into_array.call(null,(function (){var iter__5860__auto__ = ((function (this__9068__auto____$1){
return (function app$core$menu_$_iter__14607(s__14608){
return (new cljs.core.LazySeq(null,((function (this__9068__auto____$1){
return (function (){
var s__14608__$1 = s__14608;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__14608__$1);
if(temp__4425__auto__){
var s__14608__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__14608__$2)){
var c__5858__auto__ = cljs.core.chunk_first.call(null,s__14608__$2);
var size__5859__auto__ = cljs.core.count.call(null,c__5858__auto__);
var b__14610 = cljs.core.chunk_buffer.call(null,size__5859__auto__);
if((function (){var i__14609 = (0);
while(true){
if((i__14609 < size__5859__auto__)){
var vec__14613 = cljs.core._nth.call(null,c__5858__auto__,i__14609);
var title = cljs.core.nth.call(null,vec__14613,(0),null);
var route = cljs.core.nth.call(null,vec__14613,(1),null);
var active_QMARK_ = cljs.core._EQ_.call(null,route,new cljs.core.Keyword(null,"page","page",849072397).cljs$core$IFn$_invoke$arity$1(self__.data));
cljs.core.chunk_append.call(null,b__14610,React.createElement("li",{"key": route},React.createElement("a",{"href": app.core.link.call(null,route), "className": sablono.util.join_classes.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((active_QMARK_)?"active":"inactive")], null))},sablono.interpreter.interpret.call(null,title))));

var G__14615 = (i__14609 + (1));
i__14609 = G__14615;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14610),app$core$menu_$_iter__14607.call(null,cljs.core.chunk_rest.call(null,s__14608__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14610),null);
}
} else {
var vec__14614 = cljs.core.first.call(null,s__14608__$2);
var title = cljs.core.nth.call(null,vec__14614,(0),null);
var route = cljs.core.nth.call(null,vec__14614,(1),null);
var active_QMARK_ = cljs.core._EQ_.call(null,route,new cljs.core.Keyword(null,"page","page",849072397).cljs$core$IFn$_invoke$arity$1(self__.data));
return cljs.core.cons.call(null,React.createElement("li",{"key": route},React.createElement("a",{"href": app.core.link.call(null,route), "className": sablono.util.join_classes.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((active_QMARK_)?"active":"inactive")], null))},sablono.interpreter.interpret.call(null,title))),app$core$menu_$_iter__14607.call(null,cljs.core.rest.call(null,s__14608__$2)));
}
} else {
return null;
}
break;
}
});})(this__9068__auto____$1))
,null,null));
});})(this__9068__auto____$1))
;
return iter__5860__auto__.call(null,app.core.sections);
})()));
});

app.core.t_app$core14604.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"menu","menu",1992786725,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"meta14605","meta14605",-2113623426,null)], null);
});

app.core.t_app$core14604.cljs$lang$type = true;

app.core.t_app$core14604.cljs$lang$ctorStr = "app.core/t_app$core14604";

app.core.t_app$core14604.cljs$lang$ctorPrWriter = (function (this__5686__auto__,writer__5687__auto__,opt__5688__auto__){
return cljs.core._write.call(null,writer__5687__auto__,"app.core/t_app$core14604");
});

app.core.__GT_t_app$core14604 = (function app$core$menu_$___GT_t_app$core14604(menu__$1,data__$1,owner__$1,meta14605){
return (new app.core.t_app$core14604(menu__$1,data__$1,owner__$1,meta14605));
});

}

return (new app.core.t_app$core14604(app$core$menu,data,owner,null));
});
app.core.root = (function app$core$root(data,owner){
if(typeof app.core.t_app$core14621 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
app.core.t_app$core14621 = (function (root,data,owner,meta14622){
this.root = root;
this.data = data;
this.owner = owner;
this.meta14622 = meta14622;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
app.core.t_app$core14621.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14623,meta14622__$1){
var self__ = this;
var _14623__$1 = this;
return (new app.core.t_app$core14621(self__.root,self__.data,self__.owner,meta14622__$1));
});

app.core.t_app$core14621.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14623){
var self__ = this;
var _14623__$1 = this;
return self__.meta14622;
});

app.core.t_app$core14621.prototype.om$core$IRender$ = true;

app.core.t_app$core14621.prototype.om$core$IRender$render$arity$1 = (function (this__9068__auto__){
var self__ = this;
var this__9068__auto____$1 = this;
return React.createElement("div",null,(function (){var attrs14624 = om.core.build.call(null,app.core.menu,self__.data);
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs14624))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["menu"], null)], null),attrs14624)):{"className": "menu"}),((cljs.core.map_QMARK_.call(null,attrs14624))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs14624)], null)));
})(),React.createElement("div",{"className": "content"},(function (){var attrs14625 = new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(self__.data);
return cljs.core.apply.call(null,React.createElement,"h3",((cljs.core.map_QMARK_.call(null,attrs14625))?sablono.interpreter.attributes.call(null,attrs14625):null),((cljs.core.map_QMARK_.call(null,attrs14625))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs14625)], null)));
})(),sablono.interpreter.interpret.call(null,om.core.build.call(null,app.core.content,self__.data))));
});

app.core.t_app$core14621.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"root","root",1191874074,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"meta14622","meta14622",-1365043910,null)], null);
});

app.core.t_app$core14621.cljs$lang$type = true;

app.core.t_app$core14621.cljs$lang$ctorStr = "app.core/t_app$core14621";

app.core.t_app$core14621.cljs$lang$ctorPrWriter = (function (this__5686__auto__,writer__5687__auto__,opt__5688__auto__){
return cljs.core._write.call(null,writer__5687__auto__,"app.core/t_app$core14621");
});

app.core.__GT_t_app$core14621 = (function app$core$root_$___GT_t_app$core14621(root__$1,data__$1,owner__$1,meta14622){
return (new app.core.t_app$core14621(root__$1,data__$1,owner__$1,meta14622));
});

}

return (new app.core.t_app$core14621(app$core$root,data,owner,null));
});
app.core._main = (function app$core$_main(){
var h_14629 = (new goog.History());
goog.events.listen(h_14629,goog.history.EventType.NAVIGATE,((function (h_14629){
return (function (p1__14626_SHARP_){
var temp__4423__auto__ = cljs.core.not_empty.call(null,p1__14626_SHARP_.token);
if(cljs.core.truth_(temp__4423__auto__)){
var token = temp__4423__auto__;
var response = app.core.service.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"uri","uri",-774711847),token], null));
cljs.core.println.call(null,new cljs.core.Symbol(null,"Response","Response",798294591,null),response);

return cljs.core.swap_BANG_.call(null,app.core.app_state,cljs.core.merge,response);
} else {
return window.location.hash = "/";
}
});})(h_14629))
);

var G__14628_14630 = h_14629;
G__14628_14630.setEnabled(true);


return om.core.root.call(null,app.core.root,app.core.app_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),document.getElementById("container")], null));
});

//# sourceMappingURL=core.js.map