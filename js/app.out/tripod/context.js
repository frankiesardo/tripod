// Compiled by ClojureScript 1.7.122 {:static-fns true, :optimize-constants true}
goog.provide('tripod.context');
goog.require('cljs.core');
goog.require('tripod.log');
tripod.context.queue = cljs.core.PersistentQueue.EMPTY;
tripod.context.execution_id = (function tripod$context$execution_id(){
return cljs.core.random_uuid();
});
tripod.context.exception__GT_ex_info = (function tripod$context$exception__GT_ex_info(exception,execution_id,interceptor,stage){
return cljs.core.ex_info.cljs$core$IFn$_invoke$arity$3([cljs.core.str("Interceptor Exception: "),cljs.core.str(exception.message)].join(''),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$execution_DASH_id,execution_id,cljs.core.cst$kw$stage,stage,cljs.core.cst$kw$interceptor,cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(interceptor),cljs.core.cst$kw$type,cljs.core.type(exception),cljs.core.cst$kw$exception,exception], null),cljs.core.ex_data(exception)], 0)),exception);
});
/**
 * If f is not nil, invokes it on context. If f throws an exception,
 *   assoc's it on to context as ::error.
 */
tripod.context.try_f = (function tripod$context$try_f(context,interceptor,stage){
var execution_id = cljs.core.cst$kw$tripod$context_SLASH_execution_DASH_id.cljs$core$IFn$_invoke$arity$1(context);
var temp__4423__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(interceptor,stage);
if(cljs.core.truth_(temp__4423__auto__)){
var f = temp__4423__auto__;
try{var and__5076__auto___13413 = tripod.log._STAR_logfn_STAR_;
if(cljs.core.truth_(and__5076__auto___13413)){
var G__13393_13414 = "tripod.context";
var G__13394_13415 = cljs.core.cst$kw$debug;
var G__13395_13416 = cljs.core.cst$kw$interceptor;
var G__13396_13417 = cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(interceptor);
var G__13397_13418 = cljs.core.cst$kw$stage;
var G__13398_13419 = stage;
var G__13399_13420 = cljs.core.cst$kw$execution_DASH_id;
var G__13400_13421 = execution_id;
var G__13401_13422 = cljs.core.cst$kw$fn;
var G__13402_13423 = f;
(tripod.log._STAR_logfn_STAR_.cljs$core$IFn$_invoke$arity$10 ? tripod.log._STAR_logfn_STAR_.cljs$core$IFn$_invoke$arity$10(G__13393_13414,G__13394_13415,G__13395_13416,G__13396_13417,G__13397_13418,G__13398_13419,G__13399_13420,G__13400_13421,G__13401_13422,G__13402_13423) : tripod.log._STAR_logfn_STAR_.call(null,G__13393_13414,G__13394_13415,G__13395_13416,G__13396_13417,G__13397_13418,G__13398_13419,G__13399_13420,G__13400_13421,G__13401_13422,G__13402_13423));
} else {
}

return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(context) : f.call(null,context));
}catch (e13392){if((e13392 instanceof Object)){
var e = e13392;
var and__5076__auto___13424 = tripod.log._STAR_logfn_STAR_;
if(cljs.core.truth_(and__5076__auto___13424)){
(tripod.log._STAR_logfn_STAR_.cljs$core$IFn$_invoke$arity$6 ? tripod.log._STAR_logfn_STAR_.cljs$core$IFn$_invoke$arity$6("tripod.context",cljs.core.cst$kw$debug,cljs.core.cst$kw$throw,e,cljs.core.cst$kw$execution_DASH_id,execution_id) : tripod.log._STAR_logfn_STAR_.call(null,"tripod.context",cljs.core.cst$kw$debug,cljs.core.cst$kw$throw,e,cljs.core.cst$kw$execution_DASH_id,execution_id));
} else {
}

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(context,cljs.core.cst$kw$tripod$context_SLASH_error,tripod.context.exception__GT_ex_info(e,execution_id,interceptor,stage));
} else {
throw e13392;

}
}} else {
var and__5076__auto___13425 = tripod.log._STAR_logfn_STAR_;
if(cljs.core.truth_(and__5076__auto___13425)){
var G__13403_13426 = "tripod.context";
var G__13404_13427 = cljs.core.cst$kw$debug;
var G__13405_13428 = cljs.core.cst$kw$interceptor;
var G__13406_13429 = cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(interceptor);
var G__13407_13430 = cljs.core.cst$kw$skipped_QMARK_;
var G__13408_13431 = true;
var G__13409_13432 = cljs.core.cst$kw$stage;
var G__13410_13433 = stage;
var G__13411_13434 = cljs.core.cst$kw$execution_DASH_id;
var G__13412_13435 = execution_id;
(tripod.log._STAR_logfn_STAR_.cljs$core$IFn$_invoke$arity$10 ? tripod.log._STAR_logfn_STAR_.cljs$core$IFn$_invoke$arity$10(G__13403_13426,G__13404_13427,G__13405_13428,G__13406_13429,G__13407_13430,G__13408_13431,G__13409_13432,G__13410_13433,G__13411_13434,G__13412_13435) : tripod.log._STAR_logfn_STAR_.call(null,G__13403_13426,G__13404_13427,G__13405_13428,G__13406_13429,G__13407_13430,G__13408_13431,G__13409_13432,G__13410_13433,G__13411_13434,G__13412_13435));
} else {
}

return context;
}
});
/**
 * If error-fn is not nil, invokes it on context and the current ::error
 *   from context.
 */
tripod.context.try_error = (function tripod$context$try_error(context,interceptor){
var execution_id = cljs.core.cst$kw$tripod$context_SLASH_execution_DASH_id.cljs$core$IFn$_invoke$arity$1(context);
var temp__4423__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(interceptor,cljs.core.cst$kw$error);
if(cljs.core.truth_(temp__4423__auto__)){
var error_fn = temp__4423__auto__;
var ex = cljs.core.cst$kw$tripod$context_SLASH_error.cljs$core$IFn$_invoke$arity$1(context);
var and__5076__auto___13494 = tripod.log._STAR_logfn_STAR_;
if(cljs.core.truth_(and__5076__auto___13494)){
var G__13465_13495 = "tripod.context";
var G__13466_13496 = cljs.core.cst$kw$debug;
var G__13467_13497 = cljs.core.cst$kw$interceptor;
var G__13468_13498 = cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(interceptor);
var G__13469_13499 = cljs.core.cst$kw$stage;
var G__13470_13500 = cljs.core.cst$kw$error;
var G__13471_13501 = cljs.core.cst$kw$execution_DASH_id;
var G__13472_13502 = execution_id;
(tripod.log._STAR_logfn_STAR_.cljs$core$IFn$_invoke$arity$8 ? tripod.log._STAR_logfn_STAR_.cljs$core$IFn$_invoke$arity$8(G__13465_13495,G__13466_13496,G__13467_13497,G__13468_13498,G__13469_13499,G__13470_13500,G__13471_13501,G__13472_13502) : tripod.log._STAR_logfn_STAR_.call(null,G__13465_13495,G__13466_13496,G__13467_13497,G__13468_13498,G__13469_13499,G__13470_13500,G__13471_13501,G__13472_13502));
} else {
}

try{var G__13482 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(context,cljs.core.cst$kw$tripod$context_SLASH_error);
var G__13483 = ex;
return (error_fn.cljs$core$IFn$_invoke$arity$2 ? error_fn.cljs$core$IFn$_invoke$arity$2(G__13482,G__13483) : error_fn.call(null,G__13482,G__13483));
}catch (e13473){if((e13473 instanceof Object)){
var e = e13473;
if((cljs.core.type(e) === cljs.core.type(cljs.core.cst$kw$exception.cljs$core$IFn$_invoke$arity$1(ex)))){
var and__5076__auto___13503 = tripod.log._STAR_logfn_STAR_;
if(cljs.core.truth_(and__5076__auto___13503)){
(tripod.log._STAR_logfn_STAR_.cljs$core$IFn$_invoke$arity$6 ? tripod.log._STAR_logfn_STAR_.cljs$core$IFn$_invoke$arity$6("tripod.context",cljs.core.cst$kw$debug,cljs.core.cst$kw$rethrow,e,cljs.core.cst$kw$execution_DASH_id,execution_id) : tripod.log._STAR_logfn_STAR_.call(null,"tripod.context",cljs.core.cst$kw$debug,cljs.core.cst$kw$rethrow,e,cljs.core.cst$kw$execution_DASH_id,execution_id));
} else {
}

return context;
} else {
var and__5076__auto___13504 = tripod.log._STAR_logfn_STAR_;
if(cljs.core.truth_(and__5076__auto___13504)){
var G__13474_13505 = "tripod.context";
var G__13475_13506 = cljs.core.cst$kw$debug;
var G__13476_13507 = cljs.core.cst$kw$throw;
var G__13477_13508 = e;
var G__13478_13509 = cljs.core.cst$kw$suppressed;
var G__13479_13510 = cljs.core.cst$kw$exception_DASH_type.cljs$core$IFn$_invoke$arity$1(ex);
var G__13480_13511 = cljs.core.cst$kw$execution_DASH_id;
var G__13481_13512 = execution_id;
(tripod.log._STAR_logfn_STAR_.cljs$core$IFn$_invoke$arity$8 ? tripod.log._STAR_logfn_STAR_.cljs$core$IFn$_invoke$arity$8(G__13474_13505,G__13475_13506,G__13476_13507,G__13477_13508,G__13478_13509,G__13479_13510,G__13480_13511,G__13481_13512) : tripod.log._STAR_logfn_STAR_.call(null,G__13474_13505,G__13475_13506,G__13476_13507,G__13477_13508,G__13478_13509,G__13479_13510,G__13480_13511,G__13481_13512));
} else {
}

return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(context,cljs.core.cst$kw$tripod$context_SLASH_error,tripod.context.exception__GT_ex_info(e,execution_id,interceptor,cljs.core.cst$kw$error)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tripod$context_SLASH_suppressed], null),cljs.core.conj,ex);
}
} else {
throw e13473;

}
}} else {
var and__5076__auto___13513 = tripod.log._STAR_logfn_STAR_;
if(cljs.core.truth_(and__5076__auto___13513)){
var G__13484_13514 = "tripod.context";
var G__13485_13515 = cljs.core.cst$kw$trace;
var G__13486_13516 = cljs.core.cst$kw$interceptor;
var G__13487_13517 = cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(interceptor);
var G__13488_13518 = cljs.core.cst$kw$skipped_QMARK_;
var G__13489_13519 = true;
var G__13490_13520 = cljs.core.cst$kw$stage;
var G__13491_13521 = cljs.core.cst$kw$error;
var G__13492_13522 = cljs.core.cst$kw$execution_DASH_id;
var G__13493_13523 = execution_id;
(tripod.log._STAR_logfn_STAR_.cljs$core$IFn$_invoke$arity$10 ? tripod.log._STAR_logfn_STAR_.cljs$core$IFn$_invoke$arity$10(G__13484_13514,G__13485_13515,G__13486_13516,G__13487_13517,G__13488_13518,G__13489_13519,G__13490_13520,G__13491_13521,G__13492_13522,G__13493_13523) : tripod.log._STAR_logfn_STAR_.call(null,G__13484_13514,G__13485_13515,G__13486_13516,G__13487_13517,G__13488_13518,G__13489_13519,G__13490_13520,G__13491_13521,G__13492_13522,G__13493_13523));
} else {
}

return context;
}
});
/**
 * Invokes each predicate in ::terminators on context. If any predicate
 *   returns true, removes ::queue from context.
 */
tripod.context.check_terminators = (function tripod$context$check_terminators(context){
if(cljs.core.truth_(cljs.core.some((function (p1__13524_SHARP_){
return (p1__13524_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__13524_SHARP_.cljs$core$IFn$_invoke$arity$1(context) : p1__13524_SHARP_.call(null,context));
}),cljs.core.cst$kw$tripod$context_SLASH_terminators.cljs$core$IFn$_invoke$arity$1(context)))){
var execution_id = cljs.core.cst$kw$tripod$context_SLASH_execution_DASH_id.cljs$core$IFn$_invoke$arity$1(context);
var and__5076__auto___13525 = tripod.log._STAR_logfn_STAR_;
if(cljs.core.truth_(and__5076__auto___13525)){
(tripod.log._STAR_logfn_STAR_.cljs$core$IFn$_invoke$arity$8 ? tripod.log._STAR_logfn_STAR_.cljs$core$IFn$_invoke$arity$8("tripod.context",cljs.core.cst$kw$debug,cljs.core.cst$kw$in,cljs.core.cst$sym$check_DASH_terminators,cljs.core.cst$kw$terminate_QMARK_,true,cljs.core.cst$kw$execution_DASH_id,execution_id) : tripod.log._STAR_logfn_STAR_.call(null,"tripod.context",cljs.core.cst$kw$debug,cljs.core.cst$kw$in,cljs.core.cst$sym$check_DASH_terminators,cljs.core.cst$kw$terminate_QMARK_,true,cljs.core.cst$kw$execution_DASH_id,execution_id));
} else {
}

return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(context,cljs.core.cst$kw$tripod$context_SLASH_queue);
} else {
return context;
}
});
tripod.context.with_bindings = (function tripod$context$with_bindings(_,res){
return res;
});
/**
 * Invokes :enter functions of all Interceptors on the execution
 *   ::queue of context, saves them on the ::stack of context. Returns
 *   updated context.
 */
tripod.context.enter_all_with_binding = (function tripod$context$enter_all_with_binding(context){
var and__5076__auto___13538 = tripod.log._STAR_logfn_STAR_;
if(cljs.core.truth_(and__5076__auto___13538)){
var G__13532_13539 = "tripod.context";
var G__13533_13540 = cljs.core.cst$kw$debug;
var G__13534_13541 = cljs.core.cst$kw$in;
var G__13535_13542 = cljs.core.cst$sym$enter_DASH_all;
var G__13536_13543 = cljs.core.cst$kw$execution_DASH_id;
var G__13537_13544 = cljs.core.cst$kw$tripod$context_SLASH_execution_DASH_id.cljs$core$IFn$_invoke$arity$1(context);
(tripod.log._STAR_logfn_STAR_.cljs$core$IFn$_invoke$arity$6 ? tripod.log._STAR_logfn_STAR_.cljs$core$IFn$_invoke$arity$6(G__13532_13539,G__13533_13540,G__13534_13541,G__13535_13542,G__13536_13543,G__13537_13544) : tripod.log._STAR_logfn_STAR_.call(null,G__13532_13539,G__13533_13540,G__13534_13541,G__13535_13542,G__13536_13543,G__13537_13544));
} else {
}

var context__$1 = context;
while(true){
var queue = cljs.core.cst$kw$tripod$context_SLASH_queue.cljs$core$IFn$_invoke$arity$1(context__$1);
var stack = cljs.core.cst$kw$tripod$context_SLASH_stack.cljs$core$IFn$_invoke$arity$1(context__$1);
var and__5076__auto___13545 = tripod.log._STAR_logfn_STAR_;
if(cljs.core.truth_(and__5076__auto___13545)){
(tripod.log._STAR_logfn_STAR_.cljs$core$IFn$_invoke$arity$4 ? tripod.log._STAR_logfn_STAR_.cljs$core$IFn$_invoke$arity$4("tripod.context",cljs.core.cst$kw$trace,cljs.core.cst$kw$context,context__$1) : tripod.log._STAR_logfn_STAR_.call(null,"tripod.context",cljs.core.cst$kw$trace,cljs.core.cst$kw$context,context__$1));
} else {
}

if(cljs.core.empty_QMARK_(queue)){
return context__$1;
} else {
var interceptor = cljs.core.peek(queue);
var pre_bindings = cljs.core.cst$kw$bindings.cljs$core$IFn$_invoke$arity$1(context__$1);
var context__$2 = tripod.context.try_f(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(context__$1,cljs.core.cst$kw$tripod$context_SLASH_queue,cljs.core.pop(queue)),cljs.core.cst$kw$tripod$context_SLASH_stack,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(stack,interceptor)),interceptor,cljs.core.cst$kw$enter);
if(cljs.core.truth_(cljs.core.cst$kw$tripod$context_SLASH_error.cljs$core$IFn$_invoke$arity$1(context__$2))){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(context__$2,cljs.core.cst$kw$tripod$context_SLASH_queue);
} else {
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$bindings.cljs$core$IFn$_invoke$arity$1(context__$2),pre_bindings)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(context__$2,cljs.core.cst$kw$tripod$context_SLASH_rebind,true);
} else {
var G__13546 = tripod.context.check_terminators(context__$2);
context__$1 = G__13546;
continue;

}
}
}
break;
}
});
/**
 * Establish the bindings present in `context` as thread local
 *   bindings, and then invoke enter-all-with-binding. Conditionally
 *   re-establish bindings if a change in bindings is made by an
 *   interceptor.
 */
tripod.context.enter_all = (function tripod$context$enter_all(context){
while(true){
var context__$1 = tripod.context.with_bindings(cljs.core.cst$kw$bindings.cljs$core$IFn$_invoke$arity$2(context,cljs.core.PersistentArrayMap.EMPTY),tripod.context.enter_all_with_binding(context));
if(cljs.core.truth_(cljs.core.cst$kw$tripod$context_SLASH_rebind.cljs$core$IFn$_invoke$arity$1(context__$1))){
var G__13547 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(context__$1,cljs.core.cst$kw$tripod$context_SLASH_rebind);
context = G__13547;
continue;
} else {
return context__$1;
}
break;
}
});
/**
 * Unwinds the context by invoking :leave functions of Interceptors on
 *   the ::stack of context. Returns updated context.
 */
tripod.context.leave_all_with_binding = (function tripod$context$leave_all_with_binding(context){
var and__5076__auto___13560 = tripod.log._STAR_logfn_STAR_;
if(cljs.core.truth_(and__5076__auto___13560)){
var G__13554_13561 = "tripod.context";
var G__13555_13562 = cljs.core.cst$kw$debug;
var G__13556_13563 = cljs.core.cst$kw$in;
var G__13557_13564 = cljs.core.cst$sym$leave_DASH_all;
var G__13558_13565 = cljs.core.cst$kw$execution_DASH_id;
var G__13559_13566 = cljs.core.cst$kw$tripod$context_SLASH_execution_DASH_id.cljs$core$IFn$_invoke$arity$1(context);
(tripod.log._STAR_logfn_STAR_.cljs$core$IFn$_invoke$arity$6 ? tripod.log._STAR_logfn_STAR_.cljs$core$IFn$_invoke$arity$6(G__13554_13561,G__13555_13562,G__13556_13563,G__13557_13564,G__13558_13565,G__13559_13566) : tripod.log._STAR_logfn_STAR_.call(null,G__13554_13561,G__13555_13562,G__13556_13563,G__13557_13564,G__13558_13565,G__13559_13566));
} else {
}

var context__$1 = context;
while(true){
var stack = cljs.core.cst$kw$tripod$context_SLASH_stack.cljs$core$IFn$_invoke$arity$1(context__$1);
var and__5076__auto___13567 = tripod.log._STAR_logfn_STAR_;
if(cljs.core.truth_(and__5076__auto___13567)){
(tripod.log._STAR_logfn_STAR_.cljs$core$IFn$_invoke$arity$4 ? tripod.log._STAR_logfn_STAR_.cljs$core$IFn$_invoke$arity$4("tripod.context",cljs.core.cst$kw$trace,cljs.core.cst$kw$context,context__$1) : tripod.log._STAR_logfn_STAR_.call(null,"tripod.context",cljs.core.cst$kw$trace,cljs.core.cst$kw$context,context__$1));
} else {
}

if(cljs.core.empty_QMARK_(stack)){
return context__$1;
} else {
var interceptor = cljs.core.peek(stack);
var pre_bindings = cljs.core.cst$kw$bindings.cljs$core$IFn$_invoke$arity$1(context__$1);
var context__$2 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(context__$1,cljs.core.cst$kw$tripod$context_SLASH_stack,cljs.core.pop(stack));
var context__$3 = (cljs.core.truth_(cljs.core.cst$kw$tripod$context_SLASH_error.cljs$core$IFn$_invoke$arity$1(context__$2))?tripod.context.try_error(context__$2,interceptor):tripod.context.try_f(context__$2,interceptor,cljs.core.cst$kw$leave));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$bindings.cljs$core$IFn$_invoke$arity$1(context__$3),pre_bindings)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(context__$3,cljs.core.cst$kw$tripod$context_SLASH_rebind,true);
} else {
var G__13568 = context__$3;
context__$1 = G__13568;
continue;

}
}
break;
}
});
/**
 * Establish the bindings present in `context` as thread local
 *   bindings, and then invoke leave-all-with-binding. Conditionally
 *   re-establish bindings if a change in bindings is made by an
 *   interceptor.
 */
tripod.context.leave_all = (function tripod$context$leave_all(context){
while(true){
var context__$1 = tripod.context.with_bindings(cljs.core.cst$kw$bindings.cljs$core$IFn$_invoke$arity$2(context,cljs.core.PersistentArrayMap.EMPTY),tripod.context.leave_all_with_binding(context));
if(cljs.core.truth_(cljs.core.cst$kw$tripod$context_SLASH_rebind.cljs$core$IFn$_invoke$arity$1(context__$1))){
var G__13569 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(context__$1,cljs.core.cst$kw$tripod$context_SLASH_rebind);
context = G__13569;
continue;
} else {
return context__$1;
}
break;
}
});
/**
 * Adds interceptors to the end of context's execution queue. Creates
 *   the queue if necessary. Returns updated context.
 */
tripod.context.enqueue = (function tripod$context$enqueue(var_args){
var args__6153__auto__ = [];
var len__6146__auto___13578 = arguments.length;
var i__6147__auto___13579 = (0);
while(true){
if((i__6147__auto___13579 < len__6146__auto___13578)){
args__6153__auto__.push((arguments[i__6147__auto___13579]));

var G__13580 = (i__6147__auto___13579 + (1));
i__6147__auto___13579 = G__13580;
continue;
} else {
}
break;
}

var argseq__6154__auto__ = ((((1) < args__6153__auto__.length))?(new cljs.core.IndexedSeq(args__6153__auto__.slice((1)),(0))):null);
return tripod.context.enqueue.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__6154__auto__);
});

tripod.context.enqueue.cljs$core$IFn$_invoke$arity$variadic = (function (context,interceptors){
var and__5076__auto___13581 = tripod.log._STAR_logfn_STAR_;
if(cljs.core.truth_(and__5076__auto___13581)){
var G__13572_13582 = "tripod.context";
var G__13573_13583 = cljs.core.cst$kw$trace;
var G__13574_13584 = cljs.core.cst$kw$enqueue;
var G__13575_13585 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$name,interceptors);
var G__13576_13586 = cljs.core.cst$kw$context;
var G__13577_13587 = context;
(tripod.log._STAR_logfn_STAR_.cljs$core$IFn$_invoke$arity$6 ? tripod.log._STAR_logfn_STAR_.cljs$core$IFn$_invoke$arity$6(G__13572_13582,G__13573_13583,G__13574_13584,G__13575_13585,G__13576_13586,G__13577_13587) : tripod.log._STAR_logfn_STAR_.call(null,G__13572_13582,G__13573_13583,G__13574_13584,G__13575_13585,G__13576_13586,G__13577_13587));
} else {
}

return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(context,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tripod$context_SLASH_queue], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.into,tripod.context.queue),interceptors);
});

tripod.context.enqueue.cljs$lang$maxFixedArity = (1);

tripod.context.enqueue.cljs$lang$applyTo = (function (seq13570){
var G__13571 = cljs.core.first(seq13570);
var seq13570__$1 = cljs.core.next(seq13570);
return tripod.context.enqueue.cljs$core$IFn$_invoke$arity$variadic(G__13571,seq13570__$1);
});
/**
 * Like 'enqueue' but the second argument is a sequence of interceptors
 *   to add to the context's execution queue.
 */
tripod.context.enqueue_STAR_ = (function tripod$context$enqueue_STAR_(context,interceptors){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(tripod.context.enqueue,context,interceptors);
});
/**
 * Removes all remaining interceptors from context's execution queue.
 *   This effectively short-circuits execution of Interceptors' :enter
 *   functions and begins executing the :leave functions.
 */
tripod.context.terminate = (function tripod$context$terminate(context){
var and__5076__auto___13588 = tripod.log._STAR_logfn_STAR_;
if(cljs.core.truth_(and__5076__auto___13588)){
(tripod.log._STAR_logfn_STAR_.cljs$core$IFn$_invoke$arity$6 ? tripod.log._STAR_logfn_STAR_.cljs$core$IFn$_invoke$arity$6("tripod.context",cljs.core.cst$kw$trace,cljs.core.cst$kw$in,cljs.core.cst$sym$terminate,cljs.core.cst$kw$context,context) : tripod.log._STAR_logfn_STAR_.call(null,"tripod.context",cljs.core.cst$kw$trace,cljs.core.cst$kw$in,cljs.core.cst$sym$terminate,cljs.core.cst$kw$context,context));
} else {
}

return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(context,cljs.core.cst$kw$tripod$context_SLASH_queue);
});
/**
 * Adds pred as a terminating condition of the context. pred is a
 *   function that takes a context as its argument. It will be invoked
 *   after every Interceptor's :enter function. If pred returns logical
 *   true, execution will stop at that Interceptor.
 */
tripod.context.terminate_when = (function tripod$context$terminate_when(context,pred){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(context,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tripod$context_SLASH_terminators], null),cljs.core.conj,pred);
});
tripod.context.begin = (function tripod$context$begin(context){
if(cljs.core.contains_QMARK_(context,cljs.core.cst$kw$tripod$context_SLASH_execution_DASH_id)){
return context;
} else {
var execution_id = tripod.context.execution_id();
var and__5076__auto___13589 = tripod.log._STAR_logfn_STAR_;
if(cljs.core.truth_(and__5076__auto___13589)){
(tripod.log._STAR_logfn_STAR_.cljs$core$IFn$_invoke$arity$6 ? tripod.log._STAR_logfn_STAR_.cljs$core$IFn$_invoke$arity$6("tripod.context",cljs.core.cst$kw$debug,cljs.core.cst$kw$in,cljs.core.cst$sym$begin,cljs.core.cst$kw$execution_DASH_id,execution_id) : tripod.log._STAR_logfn_STAR_.call(null,"tripod.context",cljs.core.cst$kw$debug,cljs.core.cst$kw$in,cljs.core.cst$sym$begin,cljs.core.cst$kw$execution_DASH_id,execution_id));
} else {
}

var and__5076__auto___13590 = tripod.log._STAR_logfn_STAR_;
if(cljs.core.truth_(and__5076__auto___13590)){
(tripod.log._STAR_logfn_STAR_.cljs$core$IFn$_invoke$arity$4 ? tripod.log._STAR_logfn_STAR_.cljs$core$IFn$_invoke$arity$4("tripod.context",cljs.core.cst$kw$trace,cljs.core.cst$kw$context,context) : tripod.log._STAR_logfn_STAR_.call(null,"tripod.context",cljs.core.cst$kw$trace,cljs.core.cst$kw$context,context));
} else {
}

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(context,cljs.core.cst$kw$tripod$context_SLASH_execution_DASH_id,execution_id);
}
});
tripod.context.end = (function tripod$context$end(context){
var and__5076__auto___13591 = tripod.log._STAR_logfn_STAR_;
if(cljs.core.truth_(and__5076__auto___13591)){
(tripod.log._STAR_logfn_STAR_.cljs$core$IFn$_invoke$arity$4 ? tripod.log._STAR_logfn_STAR_.cljs$core$IFn$_invoke$arity$4("tripod.context",cljs.core.cst$kw$debug,cljs.core.cst$kw$in,cljs.core.cst$sym$end) : tripod.log._STAR_logfn_STAR_.call(null,"tripod.context",cljs.core.cst$kw$debug,cljs.core.cst$kw$in,cljs.core.cst$sym$end));
} else {
}

var and__5076__auto___13592 = tripod.log._STAR_logfn_STAR_;
if(cljs.core.truth_(and__5076__auto___13592)){
(tripod.log._STAR_logfn_STAR_.cljs$core$IFn$_invoke$arity$4 ? tripod.log._STAR_logfn_STAR_.cljs$core$IFn$_invoke$arity$4("tripod.context",cljs.core.cst$kw$trace,cljs.core.cst$kw$context,context) : tripod.log._STAR_logfn_STAR_.call(null,"tripod.context",cljs.core.cst$kw$trace,cljs.core.cst$kw$context,context));
} else {
}

return context;
});
tripod.context.execute = (function tripod$context$execute(context){
var context__$1 = (function (){var G__13594 = context;
var G__13594__$1 = (((G__13594 == null))?null:tripod.context.begin(G__13594));
var G__13594__$2 = (((G__13594__$1 == null))?null:tripod.context.enter_all(G__13594__$1));
var G__13594__$3 = (((G__13594__$2 == null))?null:cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__13594__$2,cljs.core.cst$kw$tripod$context_SLASH_queue));
var G__13594__$4 = (((G__13594__$3 == null))?null:tripod.context.leave_all(G__13594__$3));
var G__13594__$5 = (((G__13594__$4 == null))?null:cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__13594__$4,cljs.core.cst$kw$tripod$context_SLASH_stack,cljs.core.array_seq([cljs.core.cst$kw$tripod$context_SLASH_execution_DASH_id], 0)));
var G__13594__$6 = (((G__13594__$5 == null))?null:tripod.context.end(G__13594__$5));
return G__13594__$6;
})();
var temp__4423__auto__ = cljs.core.cst$kw$tripod$context_SLASH_error.cljs$core$IFn$_invoke$arity$1(context__$1);
if(cljs.core.truth_(temp__4423__auto__)){
var ex = temp__4423__auto__;
throw ex;
} else {
return context__$1;
}
});
