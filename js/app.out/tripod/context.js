// Compiled by ClojureScript 1.7.122 {}
goog.provide('tripod.context');
goog.require('cljs.core');
goog.require('tripod.log');
tripod.context.queue = cljs.core.PersistentQueue.EMPTY;
tripod.context.execution_id = (function tripod$context$execution_id(){
return cljs.core.random_uuid.call(null);
});
tripod.context.exception__GT_ex_info = (function tripod$context$exception__GT_ex_info(exception,execution_id,interceptor,stage){
return cljs.core.ex_info.call(null,[cljs.core.str("Interceptor Exception: "),cljs.core.str(exception.message)].join(''),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"execution-id","execution-id",153779799),execution_id,new cljs.core.Keyword(null,"stage","stage",1843544772),stage,new cljs.core.Keyword(null,"interceptor","interceptor",1127739076),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(interceptor),new cljs.core.Keyword(null,"type","type",1174270348),cljs.core.type.call(null,exception),new cljs.core.Keyword(null,"exception","exception",-335277064),exception], null),cljs.core.ex_data.call(null,exception)),exception);
});
/**
 * If f is not nil, invokes it on context. If f throws an exception,
 *   assoc's it on to context as ::error.
 */
tripod.context.try_f = (function tripod$context$try_f(context,interceptor,stage){
var execution_id = new cljs.core.Keyword("tripod.context","execution-id","tripod.context/execution-id",-1263102508).cljs$core$IFn$_invoke$arity$1(context);
var temp__4423__auto__ = cljs.core.get.call(null,interceptor,stage);
if(cljs.core.truth_(temp__4423__auto__)){
var f = temp__4423__auto__;
try{var and__5076__auto___10297 = tripod.log._STAR_logfn_STAR_;
if(cljs.core.truth_(and__5076__auto___10297)){
tripod.log._STAR_logfn_STAR_.call(null,"tripod.context",new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"interceptor","interceptor",1127739076),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(interceptor),new cljs.core.Keyword(null,"stage","stage",1843544772),stage,new cljs.core.Keyword(null,"execution-id","execution-id",153779799),execution_id,new cljs.core.Keyword(null,"fn","fn",-1175266204),f);
} else {
}

return f.call(null,context);
}catch (e10296){if((e10296 instanceof Object)){
var e = e10296;
var and__5076__auto___10298 = tripod.log._STAR_logfn_STAR_;
if(cljs.core.truth_(and__5076__auto___10298)){
tripod.log._STAR_logfn_STAR_.call(null,"tripod.context",new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"throw","throw",-1044625833),e,new cljs.core.Keyword(null,"execution-id","execution-id",153779799),execution_id);
} else {
}

return cljs.core.assoc.call(null,context,new cljs.core.Keyword("tripod.context","error","tripod.context/error",706357683),tripod.context.exception__GT_ex_info.call(null,e,execution_id,interceptor,stage));
} else {
throw e10296;

}
}} else {
var and__5076__auto___10299 = tripod.log._STAR_logfn_STAR_;
if(cljs.core.truth_(and__5076__auto___10299)){
tripod.log._STAR_logfn_STAR_.call(null,"tripod.context",new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"interceptor","interceptor",1127739076),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(interceptor),new cljs.core.Keyword(null,"skipped?","skipped?",-1422240295),true,new cljs.core.Keyword(null,"stage","stage",1843544772),stage,new cljs.core.Keyword(null,"execution-id","execution-id",153779799),execution_id);
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
var execution_id = new cljs.core.Keyword("tripod.context","execution-id","tripod.context/execution-id",-1263102508).cljs$core$IFn$_invoke$arity$1(context);
var temp__4423__auto__ = cljs.core.get.call(null,interceptor,new cljs.core.Keyword(null,"error","error",-978969032));
if(cljs.core.truth_(temp__4423__auto__)){
var error_fn = temp__4423__auto__;
var ex = new cljs.core.Keyword("tripod.context","error","tripod.context/error",706357683).cljs$core$IFn$_invoke$arity$1(context);
var and__5076__auto___10302 = tripod.log._STAR_logfn_STAR_;
if(cljs.core.truth_(and__5076__auto___10302)){
tripod.log._STAR_logfn_STAR_.call(null,"tripod.context",new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"interceptor","interceptor",1127739076),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(interceptor),new cljs.core.Keyword(null,"stage","stage",1843544772),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"execution-id","execution-id",153779799),execution_id);
} else {
}

try{return error_fn.call(null,cljs.core.dissoc.call(null,context,new cljs.core.Keyword("tripod.context","error","tripod.context/error",706357683)),ex);
}catch (e10301){if((e10301 instanceof Object)){
var e = e10301;
if((cljs.core.type.call(null,e) === cljs.core.type.call(null,new cljs.core.Keyword(null,"exception","exception",-335277064).cljs$core$IFn$_invoke$arity$1(ex)))){
var and__5076__auto___10303 = tripod.log._STAR_logfn_STAR_;
if(cljs.core.truth_(and__5076__auto___10303)){
tripod.log._STAR_logfn_STAR_.call(null,"tripod.context",new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"rethrow","rethrow",-272039341),e,new cljs.core.Keyword(null,"execution-id","execution-id",153779799),execution_id);
} else {
}

return context;
} else {
var and__5076__auto___10304 = tripod.log._STAR_logfn_STAR_;
if(cljs.core.truth_(and__5076__auto___10304)){
tripod.log._STAR_logfn_STAR_.call(null,"tripod.context",new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"throw","throw",-1044625833),e,new cljs.core.Keyword(null,"suppressed","suppressed",-5041288),new cljs.core.Keyword(null,"exception-type","exception-type",-554585100).cljs$core$IFn$_invoke$arity$1(ex),new cljs.core.Keyword(null,"execution-id","execution-id",153779799),execution_id);
} else {
}

return cljs.core.update_in.call(null,cljs.core.assoc.call(null,context,new cljs.core.Keyword("tripod.context","error","tripod.context/error",706357683),tripod.context.exception__GT_ex_info.call(null,e,execution_id,interceptor,new cljs.core.Keyword(null,"error","error",-978969032))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("tripod.context","suppressed","tripod.context/suppressed",-1825113623)], null),cljs.core.conj,ex);
}
} else {
throw e10301;

}
}} else {
var and__5076__auto___10305 = tripod.log._STAR_logfn_STAR_;
if(cljs.core.truth_(and__5076__auto___10305)){
tripod.log._STAR_logfn_STAR_.call(null,"tripod.context",new cljs.core.Keyword(null,"trace","trace",-1082747415),new cljs.core.Keyword(null,"interceptor","interceptor",1127739076),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(interceptor),new cljs.core.Keyword(null,"skipped?","skipped?",-1422240295),true,new cljs.core.Keyword(null,"stage","stage",1843544772),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"execution-id","execution-id",153779799),execution_id);
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
if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__10306_SHARP_){
return p1__10306_SHARP_.call(null,context);
}),new cljs.core.Keyword("tripod.context","terminators","tripod.context/terminators",1059682129).cljs$core$IFn$_invoke$arity$1(context)))){
var execution_id = new cljs.core.Keyword("tripod.context","execution-id","tripod.context/execution-id",-1263102508).cljs$core$IFn$_invoke$arity$1(context);
var and__5076__auto___10307 = tripod.log._STAR_logfn_STAR_;
if(cljs.core.truth_(and__5076__auto___10307)){
tripod.log._STAR_logfn_STAR_.call(null,"tripod.context",new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Symbol(null,"check-terminators","check-terminators",1126285379,null),new cljs.core.Keyword(null,"terminate?","terminate?",900425666),true,new cljs.core.Keyword(null,"execution-id","execution-id",153779799),execution_id);
} else {
}

return cljs.core.dissoc.call(null,context,new cljs.core.Keyword("tripod.context","queue","tripod.context/queue",-496348070));
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
var and__5076__auto___10308 = tripod.log._STAR_logfn_STAR_;
if(cljs.core.truth_(and__5076__auto___10308)){
tripod.log._STAR_logfn_STAR_.call(null,"tripod.context",new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Symbol(null,"enter-all","enter-all",-1805411733,null),new cljs.core.Keyword(null,"execution-id","execution-id",153779799),new cljs.core.Keyword("tripod.context","execution-id","tripod.context/execution-id",-1263102508).cljs$core$IFn$_invoke$arity$1(context));
} else {
}

var context__$1 = context;
while(true){
var queue = new cljs.core.Keyword("tripod.context","queue","tripod.context/queue",-496348070).cljs$core$IFn$_invoke$arity$1(context__$1);
var stack = new cljs.core.Keyword("tripod.context","stack","tripod.context/stack",1026657887).cljs$core$IFn$_invoke$arity$1(context__$1);
var and__5076__auto___10309 = tripod.log._STAR_logfn_STAR_;
if(cljs.core.truth_(and__5076__auto___10309)){
tripod.log._STAR_logfn_STAR_.call(null,"tripod.context",new cljs.core.Keyword(null,"trace","trace",-1082747415),new cljs.core.Keyword(null,"context","context",-830191113),context__$1);
} else {
}

if(cljs.core.empty_QMARK_.call(null,queue)){
return context__$1;
} else {
var interceptor = cljs.core.peek.call(null,queue);
var pre_bindings = new cljs.core.Keyword(null,"bindings","bindings",1271397192).cljs$core$IFn$_invoke$arity$1(context__$1);
var context__$2 = tripod.context.try_f.call(null,cljs.core.assoc.call(null,cljs.core.assoc.call(null,context__$1,new cljs.core.Keyword("tripod.context","queue","tripod.context/queue",-496348070),cljs.core.pop.call(null,queue)),new cljs.core.Keyword("tripod.context","stack","tripod.context/stack",1026657887),cljs.core.conj.call(null,stack,interceptor)),interceptor,new cljs.core.Keyword(null,"enter","enter",1792452624));
if(cljs.core.truth_(new cljs.core.Keyword("tripod.context","error","tripod.context/error",706357683).cljs$core$IFn$_invoke$arity$1(context__$2))){
return cljs.core.dissoc.call(null,context__$2,new cljs.core.Keyword("tripod.context","queue","tripod.context/queue",-496348070));
} else {
if(cljs.core.not_EQ_.call(null,new cljs.core.Keyword(null,"bindings","bindings",1271397192).cljs$core$IFn$_invoke$arity$1(context__$2),pre_bindings)){
return cljs.core.assoc.call(null,context__$2,new cljs.core.Keyword("tripod.context","rebind","tripod.context/rebind",-2146145671),true);
} else {
var G__10310 = tripod.context.check_terminators.call(null,context__$2);
context__$1 = G__10310;
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
var context__$1 = tripod.context.with_bindings.call(null,new cljs.core.Keyword(null,"bindings","bindings",1271397192).cljs$core$IFn$_invoke$arity$2(context,cljs.core.PersistentArrayMap.EMPTY),tripod.context.enter_all_with_binding.call(null,context));
if(cljs.core.truth_(new cljs.core.Keyword("tripod.context","rebind","tripod.context/rebind",-2146145671).cljs$core$IFn$_invoke$arity$1(context__$1))){
var G__10311 = cljs.core.dissoc.call(null,context__$1,new cljs.core.Keyword("tripod.context","rebind","tripod.context/rebind",-2146145671));
context = G__10311;
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
var and__5076__auto___10312 = tripod.log._STAR_logfn_STAR_;
if(cljs.core.truth_(and__5076__auto___10312)){
tripod.log._STAR_logfn_STAR_.call(null,"tripod.context",new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Symbol(null,"leave-all","leave-all",-1392219741,null),new cljs.core.Keyword(null,"execution-id","execution-id",153779799),new cljs.core.Keyword("tripod.context","execution-id","tripod.context/execution-id",-1263102508).cljs$core$IFn$_invoke$arity$1(context));
} else {
}

var context__$1 = context;
while(true){
var stack = new cljs.core.Keyword("tripod.context","stack","tripod.context/stack",1026657887).cljs$core$IFn$_invoke$arity$1(context__$1);
var and__5076__auto___10313 = tripod.log._STAR_logfn_STAR_;
if(cljs.core.truth_(and__5076__auto___10313)){
tripod.log._STAR_logfn_STAR_.call(null,"tripod.context",new cljs.core.Keyword(null,"trace","trace",-1082747415),new cljs.core.Keyword(null,"context","context",-830191113),context__$1);
} else {
}

if(cljs.core.empty_QMARK_.call(null,stack)){
return context__$1;
} else {
var interceptor = cljs.core.peek.call(null,stack);
var pre_bindings = new cljs.core.Keyword(null,"bindings","bindings",1271397192).cljs$core$IFn$_invoke$arity$1(context__$1);
var context__$2 = cljs.core.assoc.call(null,context__$1,new cljs.core.Keyword("tripod.context","stack","tripod.context/stack",1026657887),cljs.core.pop.call(null,stack));
var context__$3 = (cljs.core.truth_(new cljs.core.Keyword("tripod.context","error","tripod.context/error",706357683).cljs$core$IFn$_invoke$arity$1(context__$2))?tripod.context.try_error.call(null,context__$2,interceptor):tripod.context.try_f.call(null,context__$2,interceptor,new cljs.core.Keyword(null,"leave","leave",1022579443)));
if(cljs.core.not_EQ_.call(null,new cljs.core.Keyword(null,"bindings","bindings",1271397192).cljs$core$IFn$_invoke$arity$1(context__$3),pre_bindings)){
return cljs.core.assoc.call(null,context__$3,new cljs.core.Keyword("tripod.context","rebind","tripod.context/rebind",-2146145671),true);
} else {
var G__10314 = context__$3;
context__$1 = G__10314;
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
var context__$1 = tripod.context.with_bindings.call(null,new cljs.core.Keyword(null,"bindings","bindings",1271397192).cljs$core$IFn$_invoke$arity$2(context,cljs.core.PersistentArrayMap.EMPTY),tripod.context.leave_all_with_binding.call(null,context));
if(cljs.core.truth_(new cljs.core.Keyword("tripod.context","rebind","tripod.context/rebind",-2146145671).cljs$core$IFn$_invoke$arity$1(context__$1))){
var G__10315 = cljs.core.dissoc.call(null,context__$1,new cljs.core.Keyword("tripod.context","rebind","tripod.context/rebind",-2146145671));
context = G__10315;
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
var len__6146__auto___10318 = arguments.length;
var i__6147__auto___10319 = (0);
while(true){
if((i__6147__auto___10319 < len__6146__auto___10318)){
args__6153__auto__.push((arguments[i__6147__auto___10319]));

var G__10320 = (i__6147__auto___10319 + (1));
i__6147__auto___10319 = G__10320;
continue;
} else {
}
break;
}

var argseq__6154__auto__ = ((((1) < args__6153__auto__.length))?(new cljs.core.IndexedSeq(args__6153__auto__.slice((1)),(0))):null);
return tripod.context.enqueue.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__6154__auto__);
});

tripod.context.enqueue.cljs$core$IFn$_invoke$arity$variadic = (function (context,interceptors){
var and__5076__auto___10321 = tripod.log._STAR_logfn_STAR_;
if(cljs.core.truth_(and__5076__auto___10321)){
tripod.log._STAR_logfn_STAR_.call(null,"tripod.context",new cljs.core.Keyword(null,"trace","trace",-1082747415),new cljs.core.Keyword(null,"enqueue","enqueue",-263531092),cljs.core.map.call(null,new cljs.core.Keyword(null,"name","name",1843675177),interceptors),new cljs.core.Keyword(null,"context","context",-830191113),context);
} else {
}

return cljs.core.update_in.call(null,context,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("tripod.context","queue","tripod.context/queue",-496348070)], null),cljs.core.fnil.call(null,cljs.core.into,tripod.context.queue),interceptors);
});

tripod.context.enqueue.cljs$lang$maxFixedArity = (1);

tripod.context.enqueue.cljs$lang$applyTo = (function (seq10316){
var G__10317 = cljs.core.first.call(null,seq10316);
var seq10316__$1 = cljs.core.next.call(null,seq10316);
return tripod.context.enqueue.cljs$core$IFn$_invoke$arity$variadic(G__10317,seq10316__$1);
});
/**
 * Like 'enqueue' but the second argument is a sequence of interceptors
 *   to add to the context's execution queue.
 */
tripod.context.enqueue_STAR_ = (function tripod$context$enqueue_STAR_(context,interceptors){
return cljs.core.apply.call(null,tripod.context.enqueue,context,interceptors);
});
/**
 * Removes all remaining interceptors from context's execution queue.
 *   This effectively short-circuits execution of Interceptors' :enter
 *   functions and begins executing the :leave functions.
 */
tripod.context.terminate = (function tripod$context$terminate(context){
var and__5076__auto___10322 = tripod.log._STAR_logfn_STAR_;
if(cljs.core.truth_(and__5076__auto___10322)){
tripod.log._STAR_logfn_STAR_.call(null,"tripod.context",new cljs.core.Keyword(null,"trace","trace",-1082747415),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Symbol(null,"terminate","terminate",-1398432273,null),new cljs.core.Keyword(null,"context","context",-830191113),context);
} else {
}

return cljs.core.dissoc.call(null,context,new cljs.core.Keyword("tripod.context","queue","tripod.context/queue",-496348070));
});
/**
 * Adds pred as a terminating condition of the context. pred is a
 *   function that takes a context as its argument. It will be invoked
 *   after every Interceptor's :enter function. If pred returns logical
 *   true, execution will stop at that Interceptor.
 */
tripod.context.terminate_when = (function tripod$context$terminate_when(context,pred){
return cljs.core.update_in.call(null,context,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("tripod.context","terminators","tripod.context/terminators",1059682129)], null),cljs.core.conj,pred);
});
tripod.context.begin = (function tripod$context$begin(context){
if(cljs.core.contains_QMARK_.call(null,context,new cljs.core.Keyword("tripod.context","execution-id","tripod.context/execution-id",-1263102508))){
return context;
} else {
var execution_id = tripod.context.execution_id.call(null);
var and__5076__auto___10323 = tripod.log._STAR_logfn_STAR_;
if(cljs.core.truth_(and__5076__auto___10323)){
tripod.log._STAR_logfn_STAR_.call(null,"tripod.context",new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Symbol(null,"begin","begin",1321497208,null),new cljs.core.Keyword(null,"execution-id","execution-id",153779799),execution_id);
} else {
}

var and__5076__auto___10324 = tripod.log._STAR_logfn_STAR_;
if(cljs.core.truth_(and__5076__auto___10324)){
tripod.log._STAR_logfn_STAR_.call(null,"tripod.context",new cljs.core.Keyword(null,"trace","trace",-1082747415),new cljs.core.Keyword(null,"context","context",-830191113),context);
} else {
}

return cljs.core.assoc.call(null,context,new cljs.core.Keyword("tripod.context","execution-id","tripod.context/execution-id",-1263102508),execution_id);
}
});
tripod.context.end = (function tripod$context$end(context){
var and__5076__auto___10325 = tripod.log._STAR_logfn_STAR_;
if(cljs.core.truth_(and__5076__auto___10325)){
tripod.log._STAR_logfn_STAR_.call(null,"tripod.context",new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Symbol(null,"end","end",1372345569,null));
} else {
}

var and__5076__auto___10326 = tripod.log._STAR_logfn_STAR_;
if(cljs.core.truth_(and__5076__auto___10326)){
tripod.log._STAR_logfn_STAR_.call(null,"tripod.context",new cljs.core.Keyword(null,"trace","trace",-1082747415),new cljs.core.Keyword(null,"context","context",-830191113),context);
} else {
}

return context;
});
tripod.context.execute = (function tripod$context$execute(context){
var context__$1 = (function (){var G__10328 = context;
var G__10328__$1 = (((G__10328 == null))?null:tripod.context.begin.call(null,G__10328));
var G__10328__$2 = (((G__10328__$1 == null))?null:tripod.context.enter_all.call(null,G__10328__$1));
var G__10328__$3 = (((G__10328__$2 == null))?null:cljs.core.dissoc.call(null,G__10328__$2,new cljs.core.Keyword("tripod.context","queue","tripod.context/queue",-496348070)));
var G__10328__$4 = (((G__10328__$3 == null))?null:tripod.context.leave_all.call(null,G__10328__$3));
var G__10328__$5 = (((G__10328__$4 == null))?null:cljs.core.dissoc.call(null,G__10328__$4,new cljs.core.Keyword("tripod.context","stack","tripod.context/stack",1026657887),new cljs.core.Keyword("tripod.context","execution-id","tripod.context/execution-id",-1263102508)));
var G__10328__$6 = (((G__10328__$5 == null))?null:tripod.context.end.call(null,G__10328__$5));
return G__10328__$6;
})();
var temp__4423__auto__ = new cljs.core.Keyword("tripod.context","error","tripod.context/error",706357683).cljs$core$IFn$_invoke$arity$1(context__$1);
if(cljs.core.truth_(temp__4423__auto__)){
var ex = temp__4423__auto__;
throw ex;
} else {
return context__$1;
}
});

//# sourceMappingURL=context.js.map