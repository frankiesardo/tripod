// Compiled by ClojureScript 1.7.122 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
cljs.repl.print_doc = (function cljs$repl$print_doc(m){
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__4425__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4425__auto__)){
var ns = temp__4425__auto__;
return [cljs.core.str(ns),cljs.core.str("/")].join('');
} else {
return null;
}
})()),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__10427_10441 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__10428_10442 = null;
var count__10429_10443 = (0);
var i__10430_10444 = (0);
while(true){
if((i__10430_10444 < count__10429_10443)){
var f_10445 = cljs.core._nth.call(null,chunk__10428_10442,i__10430_10444);
cljs.core.println.call(null,"  ",f_10445);

var G__10446 = seq__10427_10441;
var G__10447 = chunk__10428_10442;
var G__10448 = count__10429_10443;
var G__10449 = (i__10430_10444 + (1));
seq__10427_10441 = G__10446;
chunk__10428_10442 = G__10447;
count__10429_10443 = G__10448;
i__10430_10444 = G__10449;
continue;
} else {
var temp__4425__auto___10450 = cljs.core.seq.call(null,seq__10427_10441);
if(temp__4425__auto___10450){
var seq__10427_10451__$1 = temp__4425__auto___10450;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10427_10451__$1)){
var c__5891__auto___10452 = cljs.core.chunk_first.call(null,seq__10427_10451__$1);
var G__10453 = cljs.core.chunk_rest.call(null,seq__10427_10451__$1);
var G__10454 = c__5891__auto___10452;
var G__10455 = cljs.core.count.call(null,c__5891__auto___10452);
var G__10456 = (0);
seq__10427_10441 = G__10453;
chunk__10428_10442 = G__10454;
count__10429_10443 = G__10455;
i__10430_10444 = G__10456;
continue;
} else {
var f_10457 = cljs.core.first.call(null,seq__10427_10451__$1);
cljs.core.println.call(null,"  ",f_10457);

var G__10458 = cljs.core.next.call(null,seq__10427_10451__$1);
var G__10459 = null;
var G__10460 = (0);
var G__10461 = (0);
seq__10427_10441 = G__10458;
chunk__10428_10442 = G__10459;
count__10429_10443 = G__10460;
i__10430_10444 = G__10461;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_10462 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__5088__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5088__auto__)){
return or__5088__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_10462);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_10462)))?cljs.core.second.call(null,arglists_10462):arglists_10462));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/"),cljs.core.str(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/special_forms#"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__10431 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__10432 = null;
var count__10433 = (0);
var i__10434 = (0);
while(true){
if((i__10434 < count__10433)){
var vec__10435 = cljs.core._nth.call(null,chunk__10432,i__10434);
var name = cljs.core.nth.call(null,vec__10435,(0),null);
var map__10436 = cljs.core.nth.call(null,vec__10435,(1),null);
var map__10436__$1 = ((((!((map__10436 == null)))?((((map__10436.cljs$lang$protocol_mask$partition0$ & (64))) || (map__10436.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10436):map__10436);
var doc = cljs.core.get.call(null,map__10436__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__10436__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__10463 = seq__10431;
var G__10464 = chunk__10432;
var G__10465 = count__10433;
var G__10466 = (i__10434 + (1));
seq__10431 = G__10463;
chunk__10432 = G__10464;
count__10433 = G__10465;
i__10434 = G__10466;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__10431);
if(temp__4425__auto__){
var seq__10431__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10431__$1)){
var c__5891__auto__ = cljs.core.chunk_first.call(null,seq__10431__$1);
var G__10467 = cljs.core.chunk_rest.call(null,seq__10431__$1);
var G__10468 = c__5891__auto__;
var G__10469 = cljs.core.count.call(null,c__5891__auto__);
var G__10470 = (0);
seq__10431 = G__10467;
chunk__10432 = G__10468;
count__10433 = G__10469;
i__10434 = G__10470;
continue;
} else {
var vec__10438 = cljs.core.first.call(null,seq__10431__$1);
var name = cljs.core.nth.call(null,vec__10438,(0),null);
var map__10439 = cljs.core.nth.call(null,vec__10438,(1),null);
var map__10439__$1 = ((((!((map__10439 == null)))?((((map__10439.cljs$lang$protocol_mask$partition0$ & (64))) || (map__10439.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__10439):map__10439);
var doc = cljs.core.get.call(null,map__10439__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__10439__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__10471 = cljs.core.next.call(null,seq__10431__$1);
var G__10472 = null;
var G__10473 = (0);
var G__10474 = (0);
seq__10431 = G__10471;
chunk__10432 = G__10472;
count__10433 = G__10473;
i__10434 = G__10474;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map