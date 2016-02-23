// Compiled by ClojureScript 1.7.122 {:static-fns true, :optimize-constants true}
goog.provide('om.core');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('om.dom');
goog.require('goog.dom.dataset');
goog.require('goog.object');
goog.require('goog.ui.IdGenerator');
om.core._STAR_parent_STAR_ = null;
om.core._STAR_instrument_STAR_ = null;
om.core._STAR_descriptor_STAR_ = null;
om.core._STAR_state_STAR_ = null;
om.core._STAR_root_key_STAR_ = null;

/**
 * @interface
 */
om.core.IDisplayName = function(){};

om.core.display_name = (function om$core$display_name(this$){
if((!((this$ == null))) && (!((this$.om$core$IDisplayName$display_name$arity$1 == null)))){
return this$.om$core$IDisplayName$display_name$arity$1(this$);
} else {
var x__5743__auto__ = (((this$ == null))?null:this$);
var m__5744__auto__ = (om.core.display_name[goog.typeOf(x__5743__auto__)]);
if(!((m__5744__auto__ == null))){
return (m__5744__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5744__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5744__auto__.call(null,this$));
} else {
var m__5744__auto____$1 = (om.core.display_name["_"]);
if(!((m__5744__auto____$1 == null))){
return (m__5744__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__5744__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__5744__auto____$1.call(null,this$));
} else {
throw cljs.core.missing_protocol("IDisplayName.display-name",this$);
}
}
}
});


/**
 * @interface
 */
om.core.IInitState = function(){};

om.core.init_state = (function om$core$init_state(this$){
if((!((this$ == null))) && (!((this$.om$core$IInitState$init_state$arity$1 == null)))){
return this$.om$core$IInitState$init_state$arity$1(this$);
} else {
var x__5743__auto__ = (((this$ == null))?null:this$);
var m__5744__auto__ = (om.core.init_state[goog.typeOf(x__5743__auto__)]);
if(!((m__5744__auto__ == null))){
return (m__5744__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5744__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5744__auto__.call(null,this$));
} else {
var m__5744__auto____$1 = (om.core.init_state["_"]);
if(!((m__5744__auto____$1 == null))){
return (m__5744__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__5744__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__5744__auto____$1.call(null,this$));
} else {
throw cljs.core.missing_protocol("IInitState.init-state",this$);
}
}
}
});


/**
 * @interface
 */
om.core.IShouldUpdate = function(){};

om.core.should_update = (function om$core$should_update(this$,next_props,next_state){
if((!((this$ == null))) && (!((this$.om$core$IShouldUpdate$should_update$arity$3 == null)))){
return this$.om$core$IShouldUpdate$should_update$arity$3(this$,next_props,next_state);
} else {
var x__5743__auto__ = (((this$ == null))?null:this$);
var m__5744__auto__ = (om.core.should_update[goog.typeOf(x__5743__auto__)]);
if(!((m__5744__auto__ == null))){
return (m__5744__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5744__auto__.cljs$core$IFn$_invoke$arity$3(this$,next_props,next_state) : m__5744__auto__.call(null,this$,next_props,next_state));
} else {
var m__5744__auto____$1 = (om.core.should_update["_"]);
if(!((m__5744__auto____$1 == null))){
return (m__5744__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__5744__auto____$1.cljs$core$IFn$_invoke$arity$3(this$,next_props,next_state) : m__5744__auto____$1.call(null,this$,next_props,next_state));
} else {
throw cljs.core.missing_protocol("IShouldUpdate.should-update",this$);
}
}
}
});


/**
 * @interface
 */
om.core.IWillMount = function(){};

om.core.will_mount = (function om$core$will_mount(this$){
if((!((this$ == null))) && (!((this$.om$core$IWillMount$will_mount$arity$1 == null)))){
return this$.om$core$IWillMount$will_mount$arity$1(this$);
} else {
var x__5743__auto__ = (((this$ == null))?null:this$);
var m__5744__auto__ = (om.core.will_mount[goog.typeOf(x__5743__auto__)]);
if(!((m__5744__auto__ == null))){
return (m__5744__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5744__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5744__auto__.call(null,this$));
} else {
var m__5744__auto____$1 = (om.core.will_mount["_"]);
if(!((m__5744__auto____$1 == null))){
return (m__5744__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__5744__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__5744__auto____$1.call(null,this$));
} else {
throw cljs.core.missing_protocol("IWillMount.will-mount",this$);
}
}
}
});


/**
 * @interface
 */
om.core.IDidMount = function(){};

om.core.did_mount = (function om$core$did_mount(this$){
if((!((this$ == null))) && (!((this$.om$core$IDidMount$did_mount$arity$1 == null)))){
return this$.om$core$IDidMount$did_mount$arity$1(this$);
} else {
var x__5743__auto__ = (((this$ == null))?null:this$);
var m__5744__auto__ = (om.core.did_mount[goog.typeOf(x__5743__auto__)]);
if(!((m__5744__auto__ == null))){
return (m__5744__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5744__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5744__auto__.call(null,this$));
} else {
var m__5744__auto____$1 = (om.core.did_mount["_"]);
if(!((m__5744__auto____$1 == null))){
return (m__5744__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__5744__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__5744__auto____$1.call(null,this$));
} else {
throw cljs.core.missing_protocol("IDidMount.did-mount",this$);
}
}
}
});


/**
 * @interface
 */
om.core.IWillUnmount = function(){};

om.core.will_unmount = (function om$core$will_unmount(this$){
if((!((this$ == null))) && (!((this$.om$core$IWillUnmount$will_unmount$arity$1 == null)))){
return this$.om$core$IWillUnmount$will_unmount$arity$1(this$);
} else {
var x__5743__auto__ = (((this$ == null))?null:this$);
var m__5744__auto__ = (om.core.will_unmount[goog.typeOf(x__5743__auto__)]);
if(!((m__5744__auto__ == null))){
return (m__5744__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5744__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5744__auto__.call(null,this$));
} else {
var m__5744__auto____$1 = (om.core.will_unmount["_"]);
if(!((m__5744__auto____$1 == null))){
return (m__5744__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__5744__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__5744__auto____$1.call(null,this$));
} else {
throw cljs.core.missing_protocol("IWillUnmount.will-unmount",this$);
}
}
}
});


/**
 * @interface
 */
om.core.IWillUpdate = function(){};

om.core.will_update = (function om$core$will_update(this$,next_props,next_state){
if((!((this$ == null))) && (!((this$.om$core$IWillUpdate$will_update$arity$3 == null)))){
return this$.om$core$IWillUpdate$will_update$arity$3(this$,next_props,next_state);
} else {
var x__5743__auto__ = (((this$ == null))?null:this$);
var m__5744__auto__ = (om.core.will_update[goog.typeOf(x__5743__auto__)]);
if(!((m__5744__auto__ == null))){
return (m__5744__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5744__auto__.cljs$core$IFn$_invoke$arity$3(this$,next_props,next_state) : m__5744__auto__.call(null,this$,next_props,next_state));
} else {
var m__5744__auto____$1 = (om.core.will_update["_"]);
if(!((m__5744__auto____$1 == null))){
return (m__5744__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__5744__auto____$1.cljs$core$IFn$_invoke$arity$3(this$,next_props,next_state) : m__5744__auto____$1.call(null,this$,next_props,next_state));
} else {
throw cljs.core.missing_protocol("IWillUpdate.will-update",this$);
}
}
}
});


/**
 * @interface
 */
om.core.IDidUpdate = function(){};

om.core.did_update = (function om$core$did_update(this$,prev_props,prev_state){
if((!((this$ == null))) && (!((this$.om$core$IDidUpdate$did_update$arity$3 == null)))){
return this$.om$core$IDidUpdate$did_update$arity$3(this$,prev_props,prev_state);
} else {
var x__5743__auto__ = (((this$ == null))?null:this$);
var m__5744__auto__ = (om.core.did_update[goog.typeOf(x__5743__auto__)]);
if(!((m__5744__auto__ == null))){
return (m__5744__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5744__auto__.cljs$core$IFn$_invoke$arity$3(this$,prev_props,prev_state) : m__5744__auto__.call(null,this$,prev_props,prev_state));
} else {
var m__5744__auto____$1 = (om.core.did_update["_"]);
if(!((m__5744__auto____$1 == null))){
return (m__5744__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__5744__auto____$1.cljs$core$IFn$_invoke$arity$3(this$,prev_props,prev_state) : m__5744__auto____$1.call(null,this$,prev_props,prev_state));
} else {
throw cljs.core.missing_protocol("IDidUpdate.did-update",this$);
}
}
}
});


/**
 * @interface
 */
om.core.IWillReceiveProps = function(){};

om.core.will_receive_props = (function om$core$will_receive_props(this$,next_props){
if((!((this$ == null))) && (!((this$.om$core$IWillReceiveProps$will_receive_props$arity$2 == null)))){
return this$.om$core$IWillReceiveProps$will_receive_props$arity$2(this$,next_props);
} else {
var x__5743__auto__ = (((this$ == null))?null:this$);
var m__5744__auto__ = (om.core.will_receive_props[goog.typeOf(x__5743__auto__)]);
if(!((m__5744__auto__ == null))){
return (m__5744__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5744__auto__.cljs$core$IFn$_invoke$arity$2(this$,next_props) : m__5744__auto__.call(null,this$,next_props));
} else {
var m__5744__auto____$1 = (om.core.will_receive_props["_"]);
if(!((m__5744__auto____$1 == null))){
return (m__5744__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__5744__auto____$1.cljs$core$IFn$_invoke$arity$2(this$,next_props) : m__5744__auto____$1.call(null,this$,next_props));
} else {
throw cljs.core.missing_protocol("IWillReceiveProps.will-receive-props",this$);
}
}
}
});


/**
 * @interface
 */
om.core.IRender = function(){};

om.core.render = (function om$core$render(this$){
if((!((this$ == null))) && (!((this$.om$core$IRender$render$arity$1 == null)))){
return this$.om$core$IRender$render$arity$1(this$);
} else {
var x__5743__auto__ = (((this$ == null))?null:this$);
var m__5744__auto__ = (om.core.render[goog.typeOf(x__5743__auto__)]);
if(!((m__5744__auto__ == null))){
return (m__5744__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5744__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5744__auto__.call(null,this$));
} else {
var m__5744__auto____$1 = (om.core.render["_"]);
if(!((m__5744__auto____$1 == null))){
return (m__5744__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__5744__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__5744__auto____$1.call(null,this$));
} else {
throw cljs.core.missing_protocol("IRender.render",this$);
}
}
}
});


/**
 * @interface
 */
om.core.IRenderProps = function(){};

om.core.render_props = (function om$core$render_props(this$,props,state){
if((!((this$ == null))) && (!((this$.om$core$IRenderProps$render_props$arity$3 == null)))){
return this$.om$core$IRenderProps$render_props$arity$3(this$,props,state);
} else {
var x__5743__auto__ = (((this$ == null))?null:this$);
var m__5744__auto__ = (om.core.render_props[goog.typeOf(x__5743__auto__)]);
if(!((m__5744__auto__ == null))){
return (m__5744__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5744__auto__.cljs$core$IFn$_invoke$arity$3(this$,props,state) : m__5744__auto__.call(null,this$,props,state));
} else {
var m__5744__auto____$1 = (om.core.render_props["_"]);
if(!((m__5744__auto____$1 == null))){
return (m__5744__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__5744__auto____$1.cljs$core$IFn$_invoke$arity$3(this$,props,state) : m__5744__auto____$1.call(null,this$,props,state));
} else {
throw cljs.core.missing_protocol("IRenderProps.render-props",this$);
}
}
}
});


/**
 * @interface
 */
om.core.IRenderState = function(){};

om.core.render_state = (function om$core$render_state(this$,state){
if((!((this$ == null))) && (!((this$.om$core$IRenderState$render_state$arity$2 == null)))){
return this$.om$core$IRenderState$render_state$arity$2(this$,state);
} else {
var x__5743__auto__ = (((this$ == null))?null:this$);
var m__5744__auto__ = (om.core.render_state[goog.typeOf(x__5743__auto__)]);
if(!((m__5744__auto__ == null))){
return (m__5744__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5744__auto__.cljs$core$IFn$_invoke$arity$2(this$,state) : m__5744__auto__.call(null,this$,state));
} else {
var m__5744__auto____$1 = (om.core.render_state["_"]);
if(!((m__5744__auto____$1 == null))){
return (m__5744__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__5744__auto____$1.cljs$core$IFn$_invoke$arity$2(this$,state) : m__5744__auto____$1.call(null,this$,state));
} else {
throw cljs.core.missing_protocol("IRenderState.render-state",this$);
}
}
}
});


/**
 * @interface
 */
om.core.ICheckState = function(){};


/**
 * @interface
 */
om.core.IOmSwap = function(){};

om.core._om_swap_BANG_ = (function om$core$_om_swap_BANG_(this$,cursor,korks,f,tag){
if((!((this$ == null))) && (!((this$.om$core$IOmSwap$_om_swap_BANG_$arity$5 == null)))){
return this$.om$core$IOmSwap$_om_swap_BANG_$arity$5(this$,cursor,korks,f,tag);
} else {
var x__5743__auto__ = (((this$ == null))?null:this$);
var m__5744__auto__ = (om.core._om_swap_BANG_[goog.typeOf(x__5743__auto__)]);
if(!((m__5744__auto__ == null))){
return (m__5744__auto__.cljs$core$IFn$_invoke$arity$5 ? m__5744__auto__.cljs$core$IFn$_invoke$arity$5(this$,cursor,korks,f,tag) : m__5744__auto__.call(null,this$,cursor,korks,f,tag));
} else {
var m__5744__auto____$1 = (om.core._om_swap_BANG_["_"]);
if(!((m__5744__auto____$1 == null))){
return (m__5744__auto____$1.cljs$core$IFn$_invoke$arity$5 ? m__5744__auto____$1.cljs$core$IFn$_invoke$arity$5(this$,cursor,korks,f,tag) : m__5744__auto____$1.call(null,this$,cursor,korks,f,tag));
} else {
throw cljs.core.missing_protocol("IOmSwap.-om-swap!",this$);
}
}
}
});


/**
 * @interface
 */
om.core.IGetState = function(){};

om.core._get_state = (function om$core$_get_state(var_args){
var args11332 = [];
var len__6146__auto___11335 = arguments.length;
var i__6147__auto___11336 = (0);
while(true){
if((i__6147__auto___11336 < len__6146__auto___11335)){
args11332.push((arguments[i__6147__auto___11336]));

var G__11337 = (i__6147__auto___11336 + (1));
i__6147__auto___11336 = G__11337;
continue;
} else {
}
break;
}

var G__11334 = args11332.length;
switch (G__11334) {
case 1:
return om.core._get_state.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om.core._get_state.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11332.length)].join('')));

}
});

om.core._get_state.cljs$core$IFn$_invoke$arity$1 = (function (this$){
if((!((this$ == null))) && (!((this$.om$core$IGetState$_get_state$arity$1 == null)))){
return this$.om$core$IGetState$_get_state$arity$1(this$);
} else {
var x__5743__auto__ = (((this$ == null))?null:this$);
var m__5744__auto__ = (om.core._get_state[goog.typeOf(x__5743__auto__)]);
if(!((m__5744__auto__ == null))){
return (m__5744__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5744__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5744__auto__.call(null,this$));
} else {
var m__5744__auto____$1 = (om.core._get_state["_"]);
if(!((m__5744__auto____$1 == null))){
return (m__5744__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__5744__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__5744__auto____$1.call(null,this$));
} else {
throw cljs.core.missing_protocol("IGetState.-get-state",this$);
}
}
}
});

om.core._get_state.cljs$core$IFn$_invoke$arity$2 = (function (this$,ks){
if((!((this$ == null))) && (!((this$.om$core$IGetState$_get_state$arity$2 == null)))){
return this$.om$core$IGetState$_get_state$arity$2(this$,ks);
} else {
var x__5743__auto__ = (((this$ == null))?null:this$);
var m__5744__auto__ = (om.core._get_state[goog.typeOf(x__5743__auto__)]);
if(!((m__5744__auto__ == null))){
return (m__5744__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5744__auto__.cljs$core$IFn$_invoke$arity$2(this$,ks) : m__5744__auto__.call(null,this$,ks));
} else {
var m__5744__auto____$1 = (om.core._get_state["_"]);
if(!((m__5744__auto____$1 == null))){
return (m__5744__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__5744__auto____$1.cljs$core$IFn$_invoke$arity$2(this$,ks) : m__5744__auto____$1.call(null,this$,ks));
} else {
throw cljs.core.missing_protocol("IGetState.-get-state",this$);
}
}
}
});

om.core._get_state.cljs$lang$maxFixedArity = 2;


/**
 * @interface
 */
om.core.IGetRenderState = function(){};

om.core._get_render_state = (function om$core$_get_render_state(var_args){
var args11339 = [];
var len__6146__auto___11342 = arguments.length;
var i__6147__auto___11343 = (0);
while(true){
if((i__6147__auto___11343 < len__6146__auto___11342)){
args11339.push((arguments[i__6147__auto___11343]));

var G__11344 = (i__6147__auto___11343 + (1));
i__6147__auto___11343 = G__11344;
continue;
} else {
}
break;
}

var G__11341 = args11339.length;
switch (G__11341) {
case 1:
return om.core._get_render_state.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om.core._get_render_state.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11339.length)].join('')));

}
});

om.core._get_render_state.cljs$core$IFn$_invoke$arity$1 = (function (this$){
if((!((this$ == null))) && (!((this$.om$core$IGetRenderState$_get_render_state$arity$1 == null)))){
return this$.om$core$IGetRenderState$_get_render_state$arity$1(this$);
} else {
var x__5743__auto__ = (((this$ == null))?null:this$);
var m__5744__auto__ = (om.core._get_render_state[goog.typeOf(x__5743__auto__)]);
if(!((m__5744__auto__ == null))){
return (m__5744__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5744__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5744__auto__.call(null,this$));
} else {
var m__5744__auto____$1 = (om.core._get_render_state["_"]);
if(!((m__5744__auto____$1 == null))){
return (m__5744__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__5744__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__5744__auto____$1.call(null,this$));
} else {
throw cljs.core.missing_protocol("IGetRenderState.-get-render-state",this$);
}
}
}
});

om.core._get_render_state.cljs$core$IFn$_invoke$arity$2 = (function (this$,ks){
if((!((this$ == null))) && (!((this$.om$core$IGetRenderState$_get_render_state$arity$2 == null)))){
return this$.om$core$IGetRenderState$_get_render_state$arity$2(this$,ks);
} else {
var x__5743__auto__ = (((this$ == null))?null:this$);
var m__5744__auto__ = (om.core._get_render_state[goog.typeOf(x__5743__auto__)]);
if(!((m__5744__auto__ == null))){
return (m__5744__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5744__auto__.cljs$core$IFn$_invoke$arity$2(this$,ks) : m__5744__auto__.call(null,this$,ks));
} else {
var m__5744__auto____$1 = (om.core._get_render_state["_"]);
if(!((m__5744__auto____$1 == null))){
return (m__5744__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__5744__auto____$1.cljs$core$IFn$_invoke$arity$2(this$,ks) : m__5744__auto____$1.call(null,this$,ks));
} else {
throw cljs.core.missing_protocol("IGetRenderState.-get-render-state",this$);
}
}
}
});

om.core._get_render_state.cljs$lang$maxFixedArity = 2;


/**
 * @interface
 */
om.core.ISetState = function(){};

om.core._set_state_BANG_ = (function om$core$_set_state_BANG_(var_args){
var args11346 = [];
var len__6146__auto___11349 = arguments.length;
var i__6147__auto___11350 = (0);
while(true){
if((i__6147__auto___11350 < len__6146__auto___11349)){
args11346.push((arguments[i__6147__auto___11350]));

var G__11351 = (i__6147__auto___11350 + (1));
i__6147__auto___11350 = G__11351;
continue;
} else {
}
break;
}

var G__11348 = args11346.length;
switch (G__11348) {
case 3:
return om.core._set_state_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return om.core._set_state_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11346.length)].join('')));

}
});

om.core._set_state_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (this$,val,render){
if((!((this$ == null))) && (!((this$.om$core$ISetState$_set_state_BANG_$arity$3 == null)))){
return this$.om$core$ISetState$_set_state_BANG_$arity$3(this$,val,render);
} else {
var x__5743__auto__ = (((this$ == null))?null:this$);
var m__5744__auto__ = (om.core._set_state_BANG_[goog.typeOf(x__5743__auto__)]);
if(!((m__5744__auto__ == null))){
return (m__5744__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5744__auto__.cljs$core$IFn$_invoke$arity$3(this$,val,render) : m__5744__auto__.call(null,this$,val,render));
} else {
var m__5744__auto____$1 = (om.core._set_state_BANG_["_"]);
if(!((m__5744__auto____$1 == null))){
return (m__5744__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__5744__auto____$1.cljs$core$IFn$_invoke$arity$3(this$,val,render) : m__5744__auto____$1.call(null,this$,val,render));
} else {
throw cljs.core.missing_protocol("ISetState.-set-state!",this$);
}
}
}
});

om.core._set_state_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (this$,ks,val,render){
if((!((this$ == null))) && (!((this$.om$core$ISetState$_set_state_BANG_$arity$4 == null)))){
return this$.om$core$ISetState$_set_state_BANG_$arity$4(this$,ks,val,render);
} else {
var x__5743__auto__ = (((this$ == null))?null:this$);
var m__5744__auto__ = (om.core._set_state_BANG_[goog.typeOf(x__5743__auto__)]);
if(!((m__5744__auto__ == null))){
return (m__5744__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5744__auto__.cljs$core$IFn$_invoke$arity$4(this$,ks,val,render) : m__5744__auto__.call(null,this$,ks,val,render));
} else {
var m__5744__auto____$1 = (om.core._set_state_BANG_["_"]);
if(!((m__5744__auto____$1 == null))){
return (m__5744__auto____$1.cljs$core$IFn$_invoke$arity$4 ? m__5744__auto____$1.cljs$core$IFn$_invoke$arity$4(this$,ks,val,render) : m__5744__auto____$1.call(null,this$,ks,val,render));
} else {
throw cljs.core.missing_protocol("ISetState.-set-state!",this$);
}
}
}
});

om.core._set_state_BANG_.cljs$lang$maxFixedArity = 4;


/**
 * @interface
 */
om.core.IRenderQueue = function(){};

om.core._get_queue = (function om$core$_get_queue(this$){
if((!((this$ == null))) && (!((this$.om$core$IRenderQueue$_get_queue$arity$1 == null)))){
return this$.om$core$IRenderQueue$_get_queue$arity$1(this$);
} else {
var x__5743__auto__ = (((this$ == null))?null:this$);
var m__5744__auto__ = (om.core._get_queue[goog.typeOf(x__5743__auto__)]);
if(!((m__5744__auto__ == null))){
return (m__5744__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5744__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5744__auto__.call(null,this$));
} else {
var m__5744__auto____$1 = (om.core._get_queue["_"]);
if(!((m__5744__auto____$1 == null))){
return (m__5744__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__5744__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__5744__auto____$1.call(null,this$));
} else {
throw cljs.core.missing_protocol("IRenderQueue.-get-queue",this$);
}
}
}
});

om.core._queue_render_BANG_ = (function om$core$_queue_render_BANG_(this$,c){
if((!((this$ == null))) && (!((this$.om$core$IRenderQueue$_queue_render_BANG_$arity$2 == null)))){
return this$.om$core$IRenderQueue$_queue_render_BANG_$arity$2(this$,c);
} else {
var x__5743__auto__ = (((this$ == null))?null:this$);
var m__5744__auto__ = (om.core._queue_render_BANG_[goog.typeOf(x__5743__auto__)]);
if(!((m__5744__auto__ == null))){
return (m__5744__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5744__auto__.cljs$core$IFn$_invoke$arity$2(this$,c) : m__5744__auto__.call(null,this$,c));
} else {
var m__5744__auto____$1 = (om.core._queue_render_BANG_["_"]);
if(!((m__5744__auto____$1 == null))){
return (m__5744__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__5744__auto____$1.cljs$core$IFn$_invoke$arity$2(this$,c) : m__5744__auto____$1.call(null,this$,c));
} else {
throw cljs.core.missing_protocol("IRenderQueue.-queue-render!",this$);
}
}
}
});

om.core._empty_queue_BANG_ = (function om$core$_empty_queue_BANG_(this$){
if((!((this$ == null))) && (!((this$.om$core$IRenderQueue$_empty_queue_BANG_$arity$1 == null)))){
return this$.om$core$IRenderQueue$_empty_queue_BANG_$arity$1(this$);
} else {
var x__5743__auto__ = (((this$ == null))?null:this$);
var m__5744__auto__ = (om.core._empty_queue_BANG_[goog.typeOf(x__5743__auto__)]);
if(!((m__5744__auto__ == null))){
return (m__5744__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5744__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5744__auto__.call(null,this$));
} else {
var m__5744__auto____$1 = (om.core._empty_queue_BANG_["_"]);
if(!((m__5744__auto____$1 == null))){
return (m__5744__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__5744__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__5744__auto____$1.call(null,this$));
} else {
throw cljs.core.missing_protocol("IRenderQueue.-empty-queue!",this$);
}
}
}
});


/**
 * @interface
 */
om.core.IValue = function(){};

om.core._value = (function om$core$_value(x){
if((!((x == null))) && (!((x.om$core$IValue$_value$arity$1 == null)))){
return x.om$core$IValue$_value$arity$1(x);
} else {
var x__5743__auto__ = (((x == null))?null:x);
var m__5744__auto__ = (om.core._value[goog.typeOf(x__5743__auto__)]);
if(!((m__5744__auto__ == null))){
return (m__5744__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5744__auto__.cljs$core$IFn$_invoke$arity$1(x) : m__5744__auto__.call(null,x));
} else {
var m__5744__auto____$1 = (om.core._value["_"]);
if(!((m__5744__auto____$1 == null))){
return (m__5744__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__5744__auto____$1.cljs$core$IFn$_invoke$arity$1(x) : m__5744__auto____$1.call(null,x));
} else {
throw cljs.core.missing_protocol("IValue.-value",x);
}
}
}
});

(om.core.IValue["_"] = true);

(om.core._value["_"] = (function (x){
return x;
}));

/**
 * @interface
 */
om.core.ICursor = function(){};

om.core._path = (function om$core$_path(cursor){
if((!((cursor == null))) && (!((cursor.om$core$ICursor$_path$arity$1 == null)))){
return cursor.om$core$ICursor$_path$arity$1(cursor);
} else {
var x__5743__auto__ = (((cursor == null))?null:cursor);
var m__5744__auto__ = (om.core._path[goog.typeOf(x__5743__auto__)]);
if(!((m__5744__auto__ == null))){
return (m__5744__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5744__auto__.cljs$core$IFn$_invoke$arity$1(cursor) : m__5744__auto__.call(null,cursor));
} else {
var m__5744__auto____$1 = (om.core._path["_"]);
if(!((m__5744__auto____$1 == null))){
return (m__5744__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__5744__auto____$1.cljs$core$IFn$_invoke$arity$1(cursor) : m__5744__auto____$1.call(null,cursor));
} else {
throw cljs.core.missing_protocol("ICursor.-path",cursor);
}
}
}
});

om.core._state = (function om$core$_state(cursor){
if((!((cursor == null))) && (!((cursor.om$core$ICursor$_state$arity$1 == null)))){
return cursor.om$core$ICursor$_state$arity$1(cursor);
} else {
var x__5743__auto__ = (((cursor == null))?null:cursor);
var m__5744__auto__ = (om.core._state[goog.typeOf(x__5743__auto__)]);
if(!((m__5744__auto__ == null))){
return (m__5744__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5744__auto__.cljs$core$IFn$_invoke$arity$1(cursor) : m__5744__auto__.call(null,cursor));
} else {
var m__5744__auto____$1 = (om.core._state["_"]);
if(!((m__5744__auto____$1 == null))){
return (m__5744__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__5744__auto____$1.cljs$core$IFn$_invoke$arity$1(cursor) : m__5744__auto____$1.call(null,cursor));
} else {
throw cljs.core.missing_protocol("ICursor.-state",cursor);
}
}
}
});


/**
 * @interface
 */
om.core.IToCursor = function(){};

om.core._to_cursor = (function om$core$_to_cursor(var_args){
var args11353 = [];
var len__6146__auto___11356 = arguments.length;
var i__6147__auto___11357 = (0);
while(true){
if((i__6147__auto___11357 < len__6146__auto___11356)){
args11353.push((arguments[i__6147__auto___11357]));

var G__11358 = (i__6147__auto___11357 + (1));
i__6147__auto___11357 = G__11358;
continue;
} else {
}
break;
}

var G__11355 = args11353.length;
switch (G__11355) {
case 2:
return om.core._to_cursor.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.core._to_cursor.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11353.length)].join('')));

}
});

om.core._to_cursor.cljs$core$IFn$_invoke$arity$2 = (function (value,state){
if((!((value == null))) && (!((value.om$core$IToCursor$_to_cursor$arity$2 == null)))){
return value.om$core$IToCursor$_to_cursor$arity$2(value,state);
} else {
var x__5743__auto__ = (((value == null))?null:value);
var m__5744__auto__ = (om.core._to_cursor[goog.typeOf(x__5743__auto__)]);
if(!((m__5744__auto__ == null))){
return (m__5744__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5744__auto__.cljs$core$IFn$_invoke$arity$2(value,state) : m__5744__auto__.call(null,value,state));
} else {
var m__5744__auto____$1 = (om.core._to_cursor["_"]);
if(!((m__5744__auto____$1 == null))){
return (m__5744__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__5744__auto____$1.cljs$core$IFn$_invoke$arity$2(value,state) : m__5744__auto____$1.call(null,value,state));
} else {
throw cljs.core.missing_protocol("IToCursor.-to-cursor",value);
}
}
}
});

om.core._to_cursor.cljs$core$IFn$_invoke$arity$3 = (function (value,state,path){
if((!((value == null))) && (!((value.om$core$IToCursor$_to_cursor$arity$3 == null)))){
return value.om$core$IToCursor$_to_cursor$arity$3(value,state,path);
} else {
var x__5743__auto__ = (((value == null))?null:value);
var m__5744__auto__ = (om.core._to_cursor[goog.typeOf(x__5743__auto__)]);
if(!((m__5744__auto__ == null))){
return (m__5744__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5744__auto__.cljs$core$IFn$_invoke$arity$3(value,state,path) : m__5744__auto__.call(null,value,state,path));
} else {
var m__5744__auto____$1 = (om.core._to_cursor["_"]);
if(!((m__5744__auto____$1 == null))){
return (m__5744__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__5744__auto____$1.cljs$core$IFn$_invoke$arity$3(value,state,path) : m__5744__auto____$1.call(null,value,state,path));
} else {
throw cljs.core.missing_protocol("IToCursor.-to-cursor",value);
}
}
}
});

om.core._to_cursor.cljs$lang$maxFixedArity = 3;


/**
 * @interface
 */
om.core.ICursorDerive = function(){};

om.core._derive = (function om$core$_derive(cursor,derived,state,path){
if((!((cursor == null))) && (!((cursor.om$core$ICursorDerive$_derive$arity$4 == null)))){
return cursor.om$core$ICursorDerive$_derive$arity$4(cursor,derived,state,path);
} else {
var x__5743__auto__ = (((cursor == null))?null:cursor);
var m__5744__auto__ = (om.core._derive[goog.typeOf(x__5743__auto__)]);
if(!((m__5744__auto__ == null))){
return (m__5744__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5744__auto__.cljs$core$IFn$_invoke$arity$4(cursor,derived,state,path) : m__5744__auto__.call(null,cursor,derived,state,path));
} else {
var m__5744__auto____$1 = (om.core._derive["_"]);
if(!((m__5744__auto____$1 == null))){
return (m__5744__auto____$1.cljs$core$IFn$_invoke$arity$4 ? m__5744__auto____$1.cljs$core$IFn$_invoke$arity$4(cursor,derived,state,path) : m__5744__auto____$1.call(null,cursor,derived,state,path));
} else {
throw cljs.core.missing_protocol("ICursorDerive.-derive",cursor);
}
}
}
});

om.core.to_cursor;
(om.core.ICursorDerive["_"] = true);

(om.core._derive["_"] = (function (this$,derived,state,path){
return (om.core.to_cursor.cljs$core$IFn$_invoke$arity$3 ? om.core.to_cursor.cljs$core$IFn$_invoke$arity$3(derived,state,path) : om.core.to_cursor.call(null,derived,state,path));
}));
om.core.path = (function om$core$path(cursor){
return om.core._path(cursor);
});
om.core.value = (function om$core$value(cursor){
return om.core._value(cursor);
});
om.core.state = (function om$core$state(cursor){
return om.core._state(cursor);
});

/**
 * @interface
 */
om.core.ITransact = function(){};

om.core._transact_BANG_ = (function om$core$_transact_BANG_(cursor,korks,f,tag){
if((!((cursor == null))) && (!((cursor.om$core$ITransact$_transact_BANG_$arity$4 == null)))){
return cursor.om$core$ITransact$_transact_BANG_$arity$4(cursor,korks,f,tag);
} else {
var x__5743__auto__ = (((cursor == null))?null:cursor);
var m__5744__auto__ = (om.core._transact_BANG_[goog.typeOf(x__5743__auto__)]);
if(!((m__5744__auto__ == null))){
return (m__5744__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5744__auto__.cljs$core$IFn$_invoke$arity$4(cursor,korks,f,tag) : m__5744__auto__.call(null,cursor,korks,f,tag));
} else {
var m__5744__auto____$1 = (om.core._transact_BANG_["_"]);
if(!((m__5744__auto____$1 == null))){
return (m__5744__auto____$1.cljs$core$IFn$_invoke$arity$4 ? m__5744__auto____$1.cljs$core$IFn$_invoke$arity$4(cursor,korks,f,tag) : m__5744__auto____$1.call(null,cursor,korks,f,tag));
} else {
throw cljs.core.missing_protocol("ITransact.-transact!",cursor);
}
}
}
});


/**
 * @interface
 */
om.core.INotify = function(){};

om.core._listen_BANG_ = (function om$core$_listen_BANG_(x,key,tx_listen){
if((!((x == null))) && (!((x.om$core$INotify$_listen_BANG_$arity$3 == null)))){
return x.om$core$INotify$_listen_BANG_$arity$3(x,key,tx_listen);
} else {
var x__5743__auto__ = (((x == null))?null:x);
var m__5744__auto__ = (om.core._listen_BANG_[goog.typeOf(x__5743__auto__)]);
if(!((m__5744__auto__ == null))){
return (m__5744__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5744__auto__.cljs$core$IFn$_invoke$arity$3(x,key,tx_listen) : m__5744__auto__.call(null,x,key,tx_listen));
} else {
var m__5744__auto____$1 = (om.core._listen_BANG_["_"]);
if(!((m__5744__auto____$1 == null))){
return (m__5744__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__5744__auto____$1.cljs$core$IFn$_invoke$arity$3(x,key,tx_listen) : m__5744__auto____$1.call(null,x,key,tx_listen));
} else {
throw cljs.core.missing_protocol("INotify.-listen!",x);
}
}
}
});

om.core._unlisten_BANG_ = (function om$core$_unlisten_BANG_(x,key){
if((!((x == null))) && (!((x.om$core$INotify$_unlisten_BANG_$arity$2 == null)))){
return x.om$core$INotify$_unlisten_BANG_$arity$2(x,key);
} else {
var x__5743__auto__ = (((x == null))?null:x);
var m__5744__auto__ = (om.core._unlisten_BANG_[goog.typeOf(x__5743__auto__)]);
if(!((m__5744__auto__ == null))){
return (m__5744__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5744__auto__.cljs$core$IFn$_invoke$arity$2(x,key) : m__5744__auto__.call(null,x,key));
} else {
var m__5744__auto____$1 = (om.core._unlisten_BANG_["_"]);
if(!((m__5744__auto____$1 == null))){
return (m__5744__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__5744__auto____$1.cljs$core$IFn$_invoke$arity$2(x,key) : m__5744__auto____$1.call(null,x,key));
} else {
throw cljs.core.missing_protocol("INotify.-unlisten!",x);
}
}
}
});

om.core._notify_BANG_ = (function om$core$_notify_BANG_(x,tx_data,root_cursor){
if((!((x == null))) && (!((x.om$core$INotify$_notify_BANG_$arity$3 == null)))){
return x.om$core$INotify$_notify_BANG_$arity$3(x,tx_data,root_cursor);
} else {
var x__5743__auto__ = (((x == null))?null:x);
var m__5744__auto__ = (om.core._notify_BANG_[goog.typeOf(x__5743__auto__)]);
if(!((m__5744__auto__ == null))){
return (m__5744__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5744__auto__.cljs$core$IFn$_invoke$arity$3(x,tx_data,root_cursor) : m__5744__auto__.call(null,x,tx_data,root_cursor));
} else {
var m__5744__auto____$1 = (om.core._notify_BANG_["_"]);
if(!((m__5744__auto____$1 == null))){
return (m__5744__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__5744__auto____$1.cljs$core$IFn$_invoke$arity$3(x,tx_data,root_cursor) : m__5744__auto____$1.call(null,x,tx_data,root_cursor));
} else {
throw cljs.core.missing_protocol("INotify.-notify!",x);
}
}
}
});


/**
 * @interface
 */
om.core.IRootProperties = function(){};

om.core._set_property_BANG_ = (function om$core$_set_property_BANG_(this$,id,p,val){
if((!((this$ == null))) && (!((this$.om$core$IRootProperties$_set_property_BANG_$arity$4 == null)))){
return this$.om$core$IRootProperties$_set_property_BANG_$arity$4(this$,id,p,val);
} else {
var x__5743__auto__ = (((this$ == null))?null:this$);
var m__5744__auto__ = (om.core._set_property_BANG_[goog.typeOf(x__5743__auto__)]);
if(!((m__5744__auto__ == null))){
return (m__5744__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5744__auto__.cljs$core$IFn$_invoke$arity$4(this$,id,p,val) : m__5744__auto__.call(null,this$,id,p,val));
} else {
var m__5744__auto____$1 = (om.core._set_property_BANG_["_"]);
if(!((m__5744__auto____$1 == null))){
return (m__5744__auto____$1.cljs$core$IFn$_invoke$arity$4 ? m__5744__auto____$1.cljs$core$IFn$_invoke$arity$4(this$,id,p,val) : m__5744__auto____$1.call(null,this$,id,p,val));
} else {
throw cljs.core.missing_protocol("IRootProperties.-set-property!",this$);
}
}
}
});

om.core._remove_property_BANG_ = (function om$core$_remove_property_BANG_(this$,id,p){
if((!((this$ == null))) && (!((this$.om$core$IRootProperties$_remove_property_BANG_$arity$3 == null)))){
return this$.om$core$IRootProperties$_remove_property_BANG_$arity$3(this$,id,p);
} else {
var x__5743__auto__ = (((this$ == null))?null:this$);
var m__5744__auto__ = (om.core._remove_property_BANG_[goog.typeOf(x__5743__auto__)]);
if(!((m__5744__auto__ == null))){
return (m__5744__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5744__auto__.cljs$core$IFn$_invoke$arity$3(this$,id,p) : m__5744__auto__.call(null,this$,id,p));
} else {
var m__5744__auto____$1 = (om.core._remove_property_BANG_["_"]);
if(!((m__5744__auto____$1 == null))){
return (m__5744__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__5744__auto____$1.cljs$core$IFn$_invoke$arity$3(this$,id,p) : m__5744__auto____$1.call(null,this$,id,p));
} else {
throw cljs.core.missing_protocol("IRootProperties.-remove-property!",this$);
}
}
}
});

om.core._remove_properties_BANG_ = (function om$core$_remove_properties_BANG_(this$,id){
if((!((this$ == null))) && (!((this$.om$core$IRootProperties$_remove_properties_BANG_$arity$2 == null)))){
return this$.om$core$IRootProperties$_remove_properties_BANG_$arity$2(this$,id);
} else {
var x__5743__auto__ = (((this$ == null))?null:this$);
var m__5744__auto__ = (om.core._remove_properties_BANG_[goog.typeOf(x__5743__auto__)]);
if(!((m__5744__auto__ == null))){
return (m__5744__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5744__auto__.cljs$core$IFn$_invoke$arity$2(this$,id) : m__5744__auto__.call(null,this$,id));
} else {
var m__5744__auto____$1 = (om.core._remove_properties_BANG_["_"]);
if(!((m__5744__auto____$1 == null))){
return (m__5744__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__5744__auto____$1.cljs$core$IFn$_invoke$arity$2(this$,id) : m__5744__auto____$1.call(null,this$,id));
} else {
throw cljs.core.missing_protocol("IRootProperties.-remove-properties!",this$);
}
}
}
});

om.core._get_property = (function om$core$_get_property(this$,id,p){
if((!((this$ == null))) && (!((this$.om$core$IRootProperties$_get_property$arity$3 == null)))){
return this$.om$core$IRootProperties$_get_property$arity$3(this$,id,p);
} else {
var x__5743__auto__ = (((this$ == null))?null:this$);
var m__5744__auto__ = (om.core._get_property[goog.typeOf(x__5743__auto__)]);
if(!((m__5744__auto__ == null))){
return (m__5744__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5744__auto__.cljs$core$IFn$_invoke$arity$3(this$,id,p) : m__5744__auto__.call(null,this$,id,p));
} else {
var m__5744__auto____$1 = (om.core._get_property["_"]);
if(!((m__5744__auto____$1 == null))){
return (m__5744__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__5744__auto____$1.cljs$core$IFn$_invoke$arity$3(this$,id,p) : m__5744__auto____$1.call(null,this$,id,p));
} else {
throw cljs.core.missing_protocol("IRootProperties.-get-property",this$);
}
}
}
});


/**
 * @interface
 */
om.core.IRootKey = function(){};

om.core._root_key = (function om$core$_root_key(cursor){
if((!((cursor == null))) && (!((cursor.om$core$IRootKey$_root_key$arity$1 == null)))){
return cursor.om$core$IRootKey$_root_key$arity$1(cursor);
} else {
var x__5743__auto__ = (((cursor == null))?null:cursor);
var m__5744__auto__ = (om.core._root_key[goog.typeOf(x__5743__auto__)]);
if(!((m__5744__auto__ == null))){
return (m__5744__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5744__auto__.cljs$core$IFn$_invoke$arity$1(cursor) : m__5744__auto__.call(null,cursor));
} else {
var m__5744__auto____$1 = (om.core._root_key["_"]);
if(!((m__5744__auto____$1 == null))){
return (m__5744__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__5744__auto____$1.cljs$core$IFn$_invoke$arity$1(cursor) : m__5744__auto____$1.call(null,cursor));
} else {
throw cljs.core.missing_protocol("IRootKey.-root-key",cursor);
}
}
}
});


/**
 * @interface
 */
om.core.IAdapt = function(){};

om.core._adapt = (function om$core$_adapt(this$,other){
if((!((this$ == null))) && (!((this$.om$core$IAdapt$_adapt$arity$2 == null)))){
return this$.om$core$IAdapt$_adapt$arity$2(this$,other);
} else {
var x__5743__auto__ = (((this$ == null))?null:this$);
var m__5744__auto__ = (om.core._adapt[goog.typeOf(x__5743__auto__)]);
if(!((m__5744__auto__ == null))){
return (m__5744__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5744__auto__.cljs$core$IFn$_invoke$arity$2(this$,other) : m__5744__auto__.call(null,this$,other));
} else {
var m__5744__auto____$1 = (om.core._adapt["_"]);
if(!((m__5744__auto____$1 == null))){
return (m__5744__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__5744__auto____$1.cljs$core$IFn$_invoke$arity$2(this$,other) : m__5744__auto____$1.call(null,this$,other));
} else {
throw cljs.core.missing_protocol("IAdapt.-adapt",this$);
}
}
}
});

(om.core.IAdapt["_"] = true);

(om.core._adapt["_"] = (function (_,other){
return other;
}));
om.core.adapt = (function om$core$adapt(x,other){
return om.core._adapt(x,other);
});

/**
 * @interface
 */
om.core.IOmRef = function(){};

om.core._add_dep_BANG_ = (function om$core$_add_dep_BANG_(this$,c){
if((!((this$ == null))) && (!((this$.om$core$IOmRef$_add_dep_BANG_$arity$2 == null)))){
return this$.om$core$IOmRef$_add_dep_BANG_$arity$2(this$,c);
} else {
var x__5743__auto__ = (((this$ == null))?null:this$);
var m__5744__auto__ = (om.core._add_dep_BANG_[goog.typeOf(x__5743__auto__)]);
if(!((m__5744__auto__ == null))){
return (m__5744__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5744__auto__.cljs$core$IFn$_invoke$arity$2(this$,c) : m__5744__auto__.call(null,this$,c));
} else {
var m__5744__auto____$1 = (om.core._add_dep_BANG_["_"]);
if(!((m__5744__auto____$1 == null))){
return (m__5744__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__5744__auto____$1.cljs$core$IFn$_invoke$arity$2(this$,c) : m__5744__auto____$1.call(null,this$,c));
} else {
throw cljs.core.missing_protocol("IOmRef.-add-dep!",this$);
}
}
}
});

om.core._remove_dep_BANG_ = (function om$core$_remove_dep_BANG_(this$,c){
if((!((this$ == null))) && (!((this$.om$core$IOmRef$_remove_dep_BANG_$arity$2 == null)))){
return this$.om$core$IOmRef$_remove_dep_BANG_$arity$2(this$,c);
} else {
var x__5743__auto__ = (((this$ == null))?null:this$);
var m__5744__auto__ = (om.core._remove_dep_BANG_[goog.typeOf(x__5743__auto__)]);
if(!((m__5744__auto__ == null))){
return (m__5744__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5744__auto__.cljs$core$IFn$_invoke$arity$2(this$,c) : m__5744__auto__.call(null,this$,c));
} else {
var m__5744__auto____$1 = (om.core._remove_dep_BANG_["_"]);
if(!((m__5744__auto____$1 == null))){
return (m__5744__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__5744__auto____$1.cljs$core$IFn$_invoke$arity$2(this$,c) : m__5744__auto____$1.call(null,this$,c));
} else {
throw cljs.core.missing_protocol("IOmRef.-remove-dep!",this$);
}
}
}
});

om.core._refresh_deps_BANG_ = (function om$core$_refresh_deps_BANG_(this$){
if((!((this$ == null))) && (!((this$.om$core$IOmRef$_refresh_deps_BANG_$arity$1 == null)))){
return this$.om$core$IOmRef$_refresh_deps_BANG_$arity$1(this$);
} else {
var x__5743__auto__ = (((this$ == null))?null:this$);
var m__5744__auto__ = (om.core._refresh_deps_BANG_[goog.typeOf(x__5743__auto__)]);
if(!((m__5744__auto__ == null))){
return (m__5744__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5744__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5744__auto__.call(null,this$));
} else {
var m__5744__auto____$1 = (om.core._refresh_deps_BANG_["_"]);
if(!((m__5744__auto____$1 == null))){
return (m__5744__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__5744__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__5744__auto____$1.call(null,this$));
} else {
throw cljs.core.missing_protocol("IOmRef.-refresh-deps!",this$);
}
}
}
});

om.core._get_deps = (function om$core$_get_deps(this$){
if((!((this$ == null))) && (!((this$.om$core$IOmRef$_get_deps$arity$1 == null)))){
return this$.om$core$IOmRef$_get_deps$arity$1(this$);
} else {
var x__5743__auto__ = (((this$ == null))?null:this$);
var m__5744__auto__ = (om.core._get_deps[goog.typeOf(x__5743__auto__)]);
if(!((m__5744__auto__ == null))){
return (m__5744__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5744__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5744__auto__.call(null,this$));
} else {
var m__5744__auto____$1 = (om.core._get_deps["_"]);
if(!((m__5744__auto____$1 == null))){
return (m__5744__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__5744__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__5744__auto____$1.call(null,this$));
} else {
throw cljs.core.missing_protocol("IOmRef.-get-deps",this$);
}
}
}
});

om.core.notify_STAR_;
om.core.transact_STAR_ = (function om$core$transact_STAR_(state,cursor,korks,f,tag){
var old_state = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(state) : cljs.core.deref.call(null,state));
var path = cljs.core.into.cljs$core$IFn$_invoke$arity$2(om.core.path(cursor),korks);
var ret = ((((!((state == null)))?(((false) || (state.om$core$IOmSwap$))?true:(((!state.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(om.core.IOmSwap,state):false)):cljs.core.native_satisfies_QMARK_(om.core.IOmSwap,state)))?om.core._om_swap_BANG_(state,cursor,korks,f,tag):((cljs.core.empty_QMARK_(path))?cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(state,f):cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.update_in,path,f)
));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ret,cljs.core.cst$kw$om$core_SLASH_defer)){
return null;
} else {
var tx_data = new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$path,path,cljs.core.cst$kw$old_DASH_value,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(old_state,path),cljs.core.cst$kw$new_DASH_value,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(state) : cljs.core.deref.call(null,state)),path),cljs.core.cst$kw$old_DASH_state,old_state,cljs.core.cst$kw$new_DASH_state,(cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(state) : cljs.core.deref.call(null,state))], null);
if(!((tag == null))){
var G__11364 = cursor;
var G__11365 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(tx_data,cljs.core.cst$kw$tag,tag);
return (om.core.notify_STAR_.cljs$core$IFn$_invoke$arity$2 ? om.core.notify_STAR_.cljs$core$IFn$_invoke$arity$2(G__11364,G__11365) : om.core.notify_STAR_.call(null,G__11364,G__11365));
} else {
return (om.core.notify_STAR_.cljs$core$IFn$_invoke$arity$2 ? om.core.notify_STAR_.cljs$core$IFn$_invoke$arity$2(cursor,tx_data) : om.core.notify_STAR_.call(null,cursor,tx_data));
}
}
});
om.core.cursor_QMARK_ = (function om$core$cursor_QMARK_(x){
if(!((x == null))){
if((false) || (x.om$core$ICursor$)){
return true;
} else {
if((!x.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(om.core.ICursor,x);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(om.core.ICursor,x);
}
});
om.core.component_QMARK_ = (function om$core$component_QMARK_(x){
return (x["isOmComponent"]);
});
om.core.children = (function om$core$children(node){
var c = node.props.children;
if(cljs.core.ifn_QMARK_(c)){
return node.props.children = (c.cljs$core$IFn$_invoke$arity$1 ? c.cljs$core$IFn$_invoke$arity$1(node) : c.call(null,node));
} else {
return c;
}
});
/**
 * Given an owning Pure node return the Om props. Analogous to React
 * component props.
 */
om.core.get_props = (function om$core$get_props(var_args){
var args11368 = [];
var len__6146__auto___11372 = arguments.length;
var i__6147__auto___11373 = (0);
while(true){
if((i__6147__auto___11373 < len__6146__auto___11372)){
args11368.push((arguments[i__6147__auto___11373]));

var G__11374 = (i__6147__auto___11373 + (1));
i__6147__auto___11373 = G__11374;
continue;
} else {
}
break;
}

var G__11370 = args11368.length;
switch (G__11370) {
case 1:
return om.core.get_props.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om.core.get_props.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11368.length)].join('')));

}
});

om.core.get_props.cljs$core$IFn$_invoke$arity$1 = (function (x){
if(cljs.core.truth_(om.core.component_QMARK_(x))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(cljs.core.cst$sym$component_QMARK_,cljs.core.cst$sym$x)], 0)))].join('')));
}

return (x.props["__om_cursor"]);
});

om.core.get_props.cljs$core$IFn$_invoke$arity$2 = (function (x,korks){
if(cljs.core.truth_(om.core.component_QMARK_(x))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(cljs.core.cst$sym$component_QMARK_,cljs.core.cst$sym$x)], 0)))].join('')));
}

var korks__$1 = ((cljs.core.sequential_QMARK_(korks))?korks:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [korks], null));
var G__11371 = (x.props["__om_cursor"]);
var G__11371__$1 = ((cljs.core.seq(korks__$1))?cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(G__11371,korks__$1):G__11371);
return G__11371__$1;
});

om.core.get_props.cljs$lang$maxFixedArity = 2;
/**
 * Returns the component local state of an owning component. owner is
 * the component. An optional key or sequence of keys may be given to
 * extract a specific value. Always returns pending state.
 */
om.core.get_state = (function om$core$get_state(var_args){
var args11376 = [];
var len__6146__auto___11379 = arguments.length;
var i__6147__auto___11380 = (0);
while(true){
if((i__6147__auto___11380 < len__6146__auto___11379)){
args11376.push((arguments[i__6147__auto___11380]));

var G__11381 = (i__6147__auto___11380 + (1));
i__6147__auto___11380 = G__11381;
continue;
} else {
}
break;
}

var G__11378 = args11376.length;
switch (G__11378) {
case 1:
return om.core.get_state.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om.core.get_state.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11376.length)].join('')));

}
});

om.core.get_state.cljs$core$IFn$_invoke$arity$1 = (function (owner){
if(cljs.core.truth_(om.core.component_QMARK_(owner))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(cljs.core.cst$sym$component_QMARK_,cljs.core.cst$sym$owner)], 0)))].join('')));
}

return om.core._get_state.cljs$core$IFn$_invoke$arity$1(owner);
});

om.core.get_state.cljs$core$IFn$_invoke$arity$2 = (function (owner,korks){
if(cljs.core.truth_(om.core.component_QMARK_(owner))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(cljs.core.cst$sym$component_QMARK_,cljs.core.cst$sym$owner)], 0)))].join('')));
}

var ks = ((cljs.core.sequential_QMARK_(korks))?korks:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [korks], null));
return om.core._get_state.cljs$core$IFn$_invoke$arity$2(owner,ks);
});

om.core.get_state.cljs$lang$maxFixedArity = 2;
/**
 * Takes an owner and returns a map of global shared values for a
 * render loop. An optional key or sequence of keys may be given to
 * extract a specific value.
 */
om.core.get_shared = (function om$core$get_shared(var_args){
var args11383 = [];
var len__6146__auto___11386 = arguments.length;
var i__6147__auto___11387 = (0);
while(true){
if((i__6147__auto___11387 < len__6146__auto___11386)){
args11383.push((arguments[i__6147__auto___11387]));

var G__11388 = (i__6147__auto___11387 + (1));
i__6147__auto___11387 = G__11388;
continue;
} else {
}
break;
}

var G__11385 = args11383.length;
switch (G__11385) {
case 1:
return om.core.get_shared.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om.core.get_shared.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11383.length)].join('')));

}
});

om.core.get_shared.cljs$core$IFn$_invoke$arity$1 = (function (owner){
if((owner == null)){
return null;
} else {
return (owner.props["__om_shared"]);
}
});

om.core.get_shared.cljs$core$IFn$_invoke$arity$2 = (function (owner,korks){
if(!(cljs.core.sequential_QMARK_(korks))){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(om.core.get_shared.cljs$core$IFn$_invoke$arity$1(owner),korks);
} else {
if(cljs.core.empty_QMARK_(korks)){
return om.core.get_shared.cljs$core$IFn$_invoke$arity$1(owner);
} else {
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(om.core.get_shared.cljs$core$IFn$_invoke$arity$1(owner),korks);

}
}
});

om.core.get_shared.cljs$lang$maxFixedArity = 2;
om.core.merge_pending_state = (function om$core$merge_pending_state(owner){
var state = owner.state;
var temp__4425__auto__ = (state["__om_pending_state"]);
if(cljs.core.truth_(temp__4425__auto__)){
var pending_state = temp__4425__auto__;
var G__11391 = state;
(G__11391["__om_prev_state"] = (state["__om_state"]));

(G__11391["__om_state"] = pending_state);

(G__11391["__om_pending_state"] = null);

return G__11391;
} else {
return null;
}
});
om.core.merge_props_state = (function om$core$merge_props_state(var_args){
var args11392 = [];
var len__6146__auto___11395 = arguments.length;
var i__6147__auto___11396 = (0);
while(true){
if((i__6147__auto___11396 < len__6146__auto___11395)){
args11392.push((arguments[i__6147__auto___11396]));

var G__11397 = (i__6147__auto___11396 + (1));
i__6147__auto___11396 = G__11397;
continue;
} else {
}
break;
}

var G__11394 = args11392.length;
switch (G__11394) {
case 1:
return om.core.merge_props_state.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om.core.merge_props_state.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11392.length)].join('')));

}
});

om.core.merge_props_state.cljs$core$IFn$_invoke$arity$1 = (function (owner){
return om.core.merge_props_state.cljs$core$IFn$_invoke$arity$2(owner,null);
});

om.core.merge_props_state.cljs$core$IFn$_invoke$arity$2 = (function (owner,props){
var props__$1 = (function (){var or__5088__auto__ = props;
if(cljs.core.truth_(or__5088__auto__)){
return or__5088__auto__;
} else {
return owner.props;
}
})();
var temp__4425__auto__ = (props__$1["__om_state"]);
if(cljs.core.truth_(temp__4425__auto__)){
var props_state = temp__4425__auto__;
var state = owner.state;
(state["__om_pending_state"] = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([(function (){var or__5088__auto__ = (state["__om_pending_state"]);
if(cljs.core.truth_(or__5088__auto__)){
return or__5088__auto__;
} else {
return (state["__om_state"]);
}
})(),props_state], 0)));

return (props__$1["__om_state"] = null);
} else {
return null;
}
});

om.core.merge_props_state.cljs$lang$maxFixedArity = 2;
om.core.ref_changed_QMARK_ = (function om$core$ref_changed_QMARK_(ref){
var val = om.core.value(ref);
var val_SINGLEQUOTE_ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$3((function (){var G__11400 = om.core.state(ref);
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__11400) : cljs.core.deref.call(null,G__11400));
})(),om.core.path(ref),cljs.core.cst$kw$om$core_SLASH_not_DASH_found);
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(val,val_SINGLEQUOTE_);
});
om.core.update_refs = (function om$core$update_refs(c){
var cstate = c.state;
var refs = (cstate["__om_refs"]);
if((cljs.core.count(refs) === (0))){
return null;
} else {
return (cstate["__om_refs"] = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (cstate,refs){
return (function (ref){
var ref_val = om.core.value(ref);
var ref_state = om.core.state(ref);
var ref_path = om.core.path(ref);
var ref_val_SINGLEQUOTE_ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$3((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(ref_state) : cljs.core.deref.call(null,ref_state)),ref_path,cljs.core.cst$kw$om$core_SLASH_not_DASH_found);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(ref_val,cljs.core.cst$kw$om$core_SLASH_not_DASH_found)){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(ref_val,ref_val_SINGLEQUOTE_)){
return om.core.adapt(ref,(om.core.to_cursor.cljs$core$IFn$_invoke$arity$3 ? om.core.to_cursor.cljs$core$IFn$_invoke$arity$3(ref_val_SINGLEQUOTE_,ref_state,ref_path) : om.core.to_cursor.call(null,ref_val_SINGLEQUOTE_,ref_state,ref_path)));
} else {
return ref;
}
} else {
return null;
}
});})(cstate,refs))
,refs))));
}
});
om.core.unobserve;
om.core.pure_methods = cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$componentDidUpdate,cljs.core.cst$kw$isOmComponent,cljs.core.cst$kw$componentWillUnmount,cljs.core.cst$kw$componentWillReceiveProps,cljs.core.cst$kw$shouldComponentUpdate,cljs.core.cst$kw$render,cljs.core.cst$kw$componentWillUpdate,cljs.core.cst$kw$getInitialState,cljs.core.cst$kw$componentDidMount,cljs.core.cst$kw$getDisplayName,cljs.core.cst$kw$componentWillMount],[(function (prev_props,prev_state){
var this$ = this;
var c = om.core.children(this$);
if(((!((c == null)))?(((false) || (c.om$core$IDidUpdate$))?true:(((!c.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(om.core.IDidUpdate,c):false)):cljs.core.native_satisfies_QMARK_(om.core.IDidUpdate,c))){
var state_11423 = this$.state;
om.core.did_update(c,om.core.get_props.cljs$core$IFn$_invoke$arity$1({"props": prev_props, "isOmComponent": true}),(function (){var or__5088__auto__ = (state_11423["__om_prev_state"]);
if(cljs.core.truth_(or__5088__auto__)){
return or__5088__auto__;
} else {
return (state_11423["__om_state"]);
}
})());
} else {
}

return (this$.state["__om_prev_state"] = null);
}),true,(function (){
var this$ = this;
var c = om.core.children(this$);
var cursor = (this$.props["__om_cursor"]);
if(((!((c == null)))?(((false) || (c.om$core$IWillUnmount$))?true:(((!c.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(om.core.IWillUnmount,c):false)):cljs.core.native_satisfies_QMARK_(om.core.IWillUnmount,c))){
om.core.will_unmount(c);
} else {
}

var temp__4425__auto__ = cljs.core.seq((this$.state["__om_refs"]));
if(temp__4425__auto__){
var refs = temp__4425__auto__;
var seq__11404 = cljs.core.seq(refs);
var chunk__11405 = null;
var count__11406 = (0);
var i__11407 = (0);
while(true){
if((i__11407 < count__11406)){
var ref = chunk__11405.cljs$core$IIndexed$_nth$arity$2(null,i__11407);
(om.core.unobserve.cljs$core$IFn$_invoke$arity$2 ? om.core.unobserve.cljs$core$IFn$_invoke$arity$2(this$,ref) : om.core.unobserve.call(null,this$,ref));

var G__11424 = seq__11404;
var G__11425 = chunk__11405;
var G__11426 = count__11406;
var G__11427 = (i__11407 + (1));
seq__11404 = G__11424;
chunk__11405 = G__11425;
count__11406 = G__11426;
i__11407 = G__11427;
continue;
} else {
var temp__4425__auto____$1 = cljs.core.seq(seq__11404);
if(temp__4425__auto____$1){
var seq__11404__$1 = temp__4425__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__11404__$1)){
var c__5891__auto__ = cljs.core.chunk_first(seq__11404__$1);
var G__11428 = cljs.core.chunk_rest(seq__11404__$1);
var G__11429 = c__5891__auto__;
var G__11430 = cljs.core.count(c__5891__auto__);
var G__11431 = (0);
seq__11404 = G__11428;
chunk__11405 = G__11429;
count__11406 = G__11430;
i__11407 = G__11431;
continue;
} else {
var ref = cljs.core.first(seq__11404__$1);
(om.core.unobserve.cljs$core$IFn$_invoke$arity$2 ? om.core.unobserve.cljs$core$IFn$_invoke$arity$2(this$,ref) : om.core.unobserve.call(null,this$,ref));

var G__11432 = cljs.core.next(seq__11404__$1);
var G__11433 = null;
var G__11434 = (0);
var G__11435 = (0);
seq__11404 = G__11432;
chunk__11405 = G__11433;
count__11406 = G__11434;
i__11407 = G__11435;
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
}),(function (next_props){
var this$ = this;
var c = om.core.children(this$);
if(((!((c == null)))?(((false) || (c.om$core$IWillReceiveProps$))?true:(((!c.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(om.core.IWillReceiveProps,c):false)):cljs.core.native_satisfies_QMARK_(om.core.IWillReceiveProps,c))){
return om.core.will_receive_props(c,om.core.get_props.cljs$core$IFn$_invoke$arity$1({"props": next_props, "isOmComponent": true}));
} else {
return null;
}
}),(function (next_props,next_state){
var this$ = this;
var props = this$.props;
var state = this$.state;
var c = om.core.children(this$);
om.core.merge_props_state.cljs$core$IFn$_invoke$arity$2(this$,next_props);

if(((!((c == null)))?(((false) || (c.om$core$IShouldUpdate$))?true:(((!c.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(om.core.IShouldUpdate,c):false)):cljs.core.native_satisfies_QMARK_(om.core.IShouldUpdate,c))){
return om.core.should_update(c,om.core.get_props.cljs$core$IFn$_invoke$arity$1({"props": next_props, "isOmComponent": true}),om.core._get_state.cljs$core$IFn$_invoke$arity$1(this$));
} else {
var cursor = (props["__om_cursor"]);
var next_cursor = (next_props["__om_cursor"]);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(om.core._value(cursor),om.core._value(next_cursor))){
return true;
} else {
if(cljs.core.truth_((function (){var and__5076__auto__ = om.core.cursor_QMARK_(cursor);
if(cljs.core.truth_(and__5076__auto__)){
var and__5076__auto____$1 = om.core.cursor_QMARK_(next_cursor);
if(cljs.core.truth_(and__5076__auto____$1)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(om.core._path(cursor),om.core._path(next_cursor));
} else {
return and__5076__auto____$1;
}
} else {
return and__5076__auto__;
}
})())){
return true;
} else {
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(om.core._get_state.cljs$core$IFn$_invoke$arity$1(this$),om.core._get_render_state.cljs$core$IFn$_invoke$arity$1(this$))){
return true;
} else {
if(cljs.core.truth_((function (){var and__5076__auto__ = !((cljs.core.count((state["__om_refs"])) === (0)));
if(and__5076__auto__){
return cljs.core.some(((function (and__5076__auto__,cursor,next_cursor,props,state,c,this$){
return (function (p1__11401_SHARP_){
return om.core.ref_changed_QMARK_(p1__11401_SHARP_);
});})(and__5076__auto__,cursor,next_cursor,props,state,c,this$))
,(state["__om_refs"]));
} else {
return and__5076__auto__;
}
})())){
return true;
} else {
if(!(((props["__om_index"]) === (next_props["__om_index"])))){
return true;
} else {
return false;

}
}
}
}
}
}
}),(function (){
var this$ = this;
var c = om.core.children(this$);
var props = this$.props;
var _STAR_parent_STAR_11410 = om.core._STAR_parent_STAR_;
var _STAR_state_STAR_11411 = om.core._STAR_state_STAR_;
var _STAR_instrument_STAR_11412 = om.core._STAR_instrument_STAR_;
var _STAR_descriptor_STAR_11413 = om.core._STAR_descriptor_STAR_;
var _STAR_root_key_STAR_11414 = om.core._STAR_root_key_STAR_;
om.core._STAR_parent_STAR_ = this$;

om.core._STAR_state_STAR_ = (props["__om_app_state"]);

om.core._STAR_instrument_STAR_ = (props["__om_instrument"]);

om.core._STAR_descriptor_STAR_ = (props["__om_descriptor"]);

om.core._STAR_root_key_STAR_ = (props["__om_root_key"]);

try{if(((!((c == null)))?(((false) || (c.om$core$IRender$))?true:(((!c.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(om.core.IRender,c):false)):cljs.core.native_satisfies_QMARK_(om.core.IRender,c))){
return om.core.render(c);
} else {
if(((!((c == null)))?(((false) || (c.om$core$IRenderProps$))?true:(((!c.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(om.core.IRenderProps,c):false)):cljs.core.native_satisfies_QMARK_(om.core.IRenderProps,c))){
return om.core.render_props(c,(props["__om_cursor"]),om.core.get_state.cljs$core$IFn$_invoke$arity$1(this$));
} else {
if(((!((c == null)))?(((false) || (c.om$core$IRenderState$))?true:(((!c.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(om.core.IRenderState,c):false)):cljs.core.native_satisfies_QMARK_(om.core.IRenderState,c))){
return om.core.render_state(c,om.core.get_state.cljs$core$IFn$_invoke$arity$1(this$));
} else {
return c;

}
}
}
}finally {om.core._STAR_root_key_STAR_ = _STAR_root_key_STAR_11414;

om.core._STAR_descriptor_STAR_ = _STAR_descriptor_STAR_11413;

om.core._STAR_instrument_STAR_ = _STAR_instrument_STAR_11412;

om.core._STAR_state_STAR_ = _STAR_state_STAR_11411;

om.core._STAR_parent_STAR_ = _STAR_parent_STAR_11410;
}}),(function (next_props,next_state){
var this$ = this;
var c_11436 = om.core.children(this$);
if(((!((c_11436 == null)))?(((false) || (c_11436.om$core$IWillUpdate$))?true:(((!c_11436.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(om.core.IWillUpdate,c_11436):false)):cljs.core.native_satisfies_QMARK_(om.core.IWillUpdate,c_11436))){
var state_11437 = this$.state;
om.core.will_update(c_11436,om.core.get_props.cljs$core$IFn$_invoke$arity$1({"props": next_props, "isOmComponent": true}),om.core._get_state.cljs$core$IFn$_invoke$arity$1(this$));
} else {
}

om.core.merge_pending_state(this$);

return om.core.update_refs(this$);
}),(function (){
var this$ = this;
var c = om.core.children(this$);
var props = this$.props;
var istate = (function (){var or__5088__auto__ = (props["__om_init_state"]);
if(cljs.core.truth_(or__5088__auto__)){
return or__5088__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
var id = cljs.core.cst$kw$om$core_SLASH_id.cljs$core$IFn$_invoke$arity$1(istate);
var ret = {"__om_id": (function (){var or__5088__auto__ = id;
if(cljs.core.truth_(or__5088__auto__)){
return or__5088__auto__;
} else {
return goog.ui.IdGenerator.getInstance().getNextUniqueId();
}
})(), "__om_state": cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([((((!((c == null)))?(((false) || (c.om$core$IInitState$))?true:(((!c.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(om.core.IInitState,c):false)):cljs.core.native_satisfies_QMARK_(om.core.IInitState,c)))?om.core.init_state(c):null),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(istate,cljs.core.cst$kw$om$core_SLASH_id)], 0))};
(props["__om_init_state"] = null);

return ret;
}),(function (){
var this$ = this;
var c = om.core.children(this$);
var cursor = (this$.props["__om_cursor"]);
if(((!((c == null)))?(((false) || (c.om$core$IDidMount$))?true:(((!c.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(om.core.IDidMount,c):false)):cljs.core.native_satisfies_QMARK_(om.core.IDidMount,c))){
return om.core.did_mount(c);
} else {
return null;
}
}),(function (){
var this$ = this;
var c = om.core.children(this$);
if(((!((c == null)))?(((false) || (c.om$core$IDisplayName$))?true:(((!c.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(om.core.IDisplayName,c):false)):cljs.core.native_satisfies_QMARK_(om.core.IDisplayName,c))){
return om.core.display_name(c);
} else {
return null;
}
}),(function (){
var this$ = this;
om.core.merge_props_state.cljs$core$IFn$_invoke$arity$1(this$);

var c_11438 = om.core.children(this$);
if(((!((c_11438 == null)))?(((false) || (c_11438.om$core$IWillMount$))?true:(((!c_11438.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(om.core.IWillMount,c_11438):false)):cljs.core.native_satisfies_QMARK_(om.core.IWillMount,c_11438))){
om.core.will_mount(c_11438);
} else {
}

return om.core.merge_pending_state(this$);
})]);
om.core.specify_state_methods_BANG_ = (function om$core$specify_state_methods_BANG_(obj){
var x11440 = obj;
x11440.om$core$ISetState$ = true;

x11440.om$core$ISetState$_set_state_BANG_$arity$3 = ((function (x11440){
return (function (this$,val,render){
var this$__$1 = this;
var props = this$__$1.props;
var app_state = (props["__om_app_state"]);
(this$__$1.state["__om_pending_state"] = val);

if(cljs.core.truth_((function (){var and__5076__auto__ = !((app_state == null));
if(and__5076__auto__){
return render;
} else {
return and__5076__auto__;
}
})())){
return om.core._queue_render_BANG_(app_state,this$__$1);
} else {
return null;
}
});})(x11440))
;

x11440.om$core$ISetState$_set_state_BANG_$arity$4 = ((function (x11440){
return (function (this$,ks,val,render){
var this$__$1 = this;
var props = this$__$1.props;
var state = this$__$1.state;
var pstate = om.core._get_state.cljs$core$IFn$_invoke$arity$1(this$__$1);
var app_state = (props["__om_app_state"]);
(state["__om_pending_state"] = cljs.core.assoc_in(pstate,ks,val));

if(cljs.core.truth_((function (){var and__5076__auto__ = !((app_state == null));
if(and__5076__auto__){
return render;
} else {
return and__5076__auto__;
}
})())){
return om.core._queue_render_BANG_(app_state,this$__$1);
} else {
return null;
}
});})(x11440))
;

x11440.om$core$IGetRenderState$ = true;

x11440.om$core$IGetRenderState$_get_render_state$arity$1 = ((function (x11440){
return (function (this$){
var this$__$1 = this;
return (this$__$1.state["__om_state"]);
});})(x11440))
;

x11440.om$core$IGetRenderState$_get_render_state$arity$2 = ((function (x11440){
return (function (this$,ks){
var this$__$1 = this;
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(om.core._get_render_state.cljs$core$IFn$_invoke$arity$1(this$__$1),ks);
});})(x11440))
;

x11440.om$core$IGetState$ = true;

x11440.om$core$IGetState$_get_state$arity$1 = ((function (x11440){
return (function (this$){
var this$__$1 = this;
var state = this$__$1.state;
var or__5088__auto__ = (state["__om_pending_state"]);
if(cljs.core.truth_(or__5088__auto__)){
return or__5088__auto__;
} else {
return (state["__om_state"]);
}
});})(x11440))
;

x11440.om$core$IGetState$_get_state$arity$2 = ((function (x11440){
return (function (this$,ks){
var this$__$1 = this;
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(om.core._get_state.cljs$core$IFn$_invoke$arity$1(this$__$1),ks);
});})(x11440))
;

return x11440;
});
om.core.pure_descriptor = om.core.specify_state_methods_BANG_(cljs.core.clj__GT_js(om.core.pure_methods));
om.core.get_node;
om.core.react_id = (function om$core$react_id(x){
var id = (function (){var G__11443 = (om.core.get_node.cljs$core$IFn$_invoke$arity$1 ? om.core.get_node.cljs$core$IFn$_invoke$arity$1(x) : om.core.get_node.call(null,x));
var G__11444 = "reactid";
return goog.dom.dataset.get(G__11443,G__11444);
})();
if(cljs.core.truth_(id)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$sym$id], 0)))].join('')));
}

return id;
});
om.core.get_gstate = (function om$core$get_gstate(owner){
return (owner.props["__om_app_state"]);
});
om.core.no_local_merge_pending_state = (function om$core$no_local_merge_pending_state(owner){
var gstate = om.core.get_gstate(owner);
var spath = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$state_DASH_map,om.core.react_id(owner)], null);
var states = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(gstate) : cljs.core.deref.call(null,gstate)),spath);
if(cljs.core.truth_(cljs.core.cst$kw$pending_DASH_state.cljs$core$IFn$_invoke$arity$1(states))){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(gstate,cljs.core.update_in,spath,((function (gstate,spath,states){
return (function (states__$1){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(states__$1,cljs.core.cst$kw$previous_DASH_state,cljs.core.cst$kw$render_DASH_state.cljs$core$IFn$_invoke$arity$1(states__$1)),cljs.core.cst$kw$render_DASH_state,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.cst$kw$render_DASH_state.cljs$core$IFn$_invoke$arity$1(states__$1),cljs.core.cst$kw$pending_DASH_state.cljs$core$IFn$_invoke$arity$1(states__$1)], 0))),cljs.core.cst$kw$pending_DASH_state);
});})(gstate,spath,states))
);
} else {
return null;
}
});
om.core.mounted_QMARK_;
om.core.no_local_state_methods = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(om.core.pure_methods,cljs.core.cst$kw$getInitialState,(function (){
var this$ = this;
var c = om.core.children(this$);
var props = this$.props;
var istate = (function (){var or__5088__auto__ = (props["__om_init_state"]);
if(cljs.core.truth_(or__5088__auto__)){
return or__5088__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
var om_id = (function (){var or__5088__auto__ = cljs.core.cst$kw$om$core_SLASH_id.cljs$core$IFn$_invoke$arity$1(istate);
if(cljs.core.truth_(or__5088__auto__)){
return or__5088__auto__;
} else {
return goog.ui.IdGenerator.getInstance().getNextUniqueId();
}
})();
var state = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(istate,cljs.core.cst$kw$om$core_SLASH_id),((((!((c == null)))?(((false) || (c.om$core$IInitState$))?true:(((!c.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(om.core.IInitState,c):false)):cljs.core.native_satisfies_QMARK_(om.core.IInitState,c)))?om.core.init_state(c):null)], 0));
(props["__om_init_state"] = null);

return {"__om_id": om_id};
}),cljs.core.array_seq([cljs.core.cst$kw$componentDidMount,(function (){
var this$ = this;
var c = om.core.children(this$);
var cursor = (this$.props["__om_cursor"]);
var spath = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$state_DASH_map,om.core.react_id(this$),cljs.core.cst$kw$render_DASH_state], null);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(om.core.get_gstate(this$),cljs.core.assoc_in,spath,om.core.state);

if(((!((c == null)))?(((false) || (c.om$core$IDidMount$))?true:(((!c.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(om.core.IDidMount,c):false)):cljs.core.native_satisfies_QMARK_(om.core.IDidMount,c))){
return om.core.did_mount(c);
} else {
return null;
}
}),cljs.core.cst$kw$componentWillMount,(function (){
var this$ = this;
om.core.merge_props_state.cljs$core$IFn$_invoke$arity$1(this$);

var c_11455 = om.core.children(this$);
if(((!((c_11455 == null)))?(((false) || (c_11455.om$core$IWillMount$))?true:(((!c_11455.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(om.core.IWillMount,c_11455):false)):cljs.core.native_satisfies_QMARK_(om.core.IWillMount,c_11455))){
om.core.will_mount(c_11455);
} else {
}

if(cljs.core.truth_((om.core.mounted_QMARK_.cljs$core$IFn$_invoke$arity$1 ? om.core.mounted_QMARK_.cljs$core$IFn$_invoke$arity$1(this$) : om.core.mounted_QMARK_.call(null,this$)))){
return om.core.no_local_merge_pending_state(this$);
} else {
return null;
}
}),cljs.core.cst$kw$componentWillUnmount,(function (){
var this$ = this;
var c = om.core.children(this$);
if(((!((c == null)))?(((false) || (c.om$core$IWillUnmount$))?true:(((!c.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(om.core.IWillUnmount,c):false)):cljs.core.native_satisfies_QMARK_(om.core.IWillUnmount,c))){
om.core.will_unmount(c);
} else {
}

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(om.core.get_gstate(this$),cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$state_DASH_map], null),cljs.core.dissoc,cljs.core.array_seq([om.core.react_id(this$)], 0));

var temp__4425__auto__ = cljs.core.seq((this$.state["__om_refs"]));
if(temp__4425__auto__){
var refs = temp__4425__auto__;
var seq__11449 = cljs.core.seq(refs);
var chunk__11450 = null;
var count__11451 = (0);
var i__11452 = (0);
while(true){
if((i__11452 < count__11451)){
var ref = chunk__11450.cljs$core$IIndexed$_nth$arity$2(null,i__11452);
(om.core.unobserve.cljs$core$IFn$_invoke$arity$2 ? om.core.unobserve.cljs$core$IFn$_invoke$arity$2(this$,ref) : om.core.unobserve.call(null,this$,ref));

var G__11456 = seq__11449;
var G__11457 = chunk__11450;
var G__11458 = count__11451;
var G__11459 = (i__11452 + (1));
seq__11449 = G__11456;
chunk__11450 = G__11457;
count__11451 = G__11458;
i__11452 = G__11459;
continue;
} else {
var temp__4425__auto____$1 = cljs.core.seq(seq__11449);
if(temp__4425__auto____$1){
var seq__11449__$1 = temp__4425__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__11449__$1)){
var c__5891__auto__ = cljs.core.chunk_first(seq__11449__$1);
var G__11460 = cljs.core.chunk_rest(seq__11449__$1);
var G__11461 = c__5891__auto__;
var G__11462 = cljs.core.count(c__5891__auto__);
var G__11463 = (0);
seq__11449 = G__11460;
chunk__11450 = G__11461;
count__11451 = G__11462;
i__11452 = G__11463;
continue;
} else {
var ref = cljs.core.first(seq__11449__$1);
(om.core.unobserve.cljs$core$IFn$_invoke$arity$2 ? om.core.unobserve.cljs$core$IFn$_invoke$arity$2(this$,ref) : om.core.unobserve.call(null,this$,ref));

var G__11464 = cljs.core.next(seq__11449__$1);
var G__11465 = null;
var G__11466 = (0);
var G__11467 = (0);
seq__11449 = G__11464;
chunk__11450 = G__11465;
count__11451 = G__11466;
i__11452 = G__11467;
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
}),cljs.core.cst$kw$componentWillUpdate,(function (next_props,next_state){
var this$ = this;
var props_11468 = this$.props;
var c_11469 = om.core.children(this$);
if(((!((c_11469 == null)))?(((false) || (c_11469.om$core$IWillUpdate$))?true:(((!c_11469.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(om.core.IWillUpdate,c_11469):false)):cljs.core.native_satisfies_QMARK_(om.core.IWillUpdate,c_11469))){
var state_11470 = this$.state;
om.core.will_update(c_11469,om.core.get_props.cljs$core$IFn$_invoke$arity$1({"props": next_props, "isOmComponent": true}),om.core._get_state.cljs$core$IFn$_invoke$arity$1(this$));
} else {
}

om.core.no_local_merge_pending_state(this$);

return om.core.update_refs(this$);
}),cljs.core.cst$kw$componentDidUpdate,(function (prev_props,prev_state){
var this$ = this;
var c = om.core.children(this$);
var gstate = om.core.get_gstate(this$);
var states = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(gstate) : cljs.core.deref.call(null,gstate)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$state_DASH_map,om.core.react_id(this$)], null));
var spath = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$state_DASH_map,om.core.react_id(this$)], null);
if(((!((c == null)))?(((false) || (c.om$core$IDidUpdate$))?true:(((!c.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(om.core.IDidUpdate,c):false)):cljs.core.native_satisfies_QMARK_(om.core.IDidUpdate,c))){
var state_11471 = this$.state;
om.core.did_update(c,om.core.get_props.cljs$core$IFn$_invoke$arity$1({"props": prev_props, "isOmComponent": true}),(function (){var or__5088__auto__ = cljs.core.cst$kw$previous_DASH_state.cljs$core$IFn$_invoke$arity$1(states);
if(cljs.core.truth_(or__5088__auto__)){
return or__5088__auto__;
} else {
return cljs.core.cst$kw$render_DASH_state.cljs$core$IFn$_invoke$arity$1(states);
}
})());
} else {
}

if(cljs.core.truth_(cljs.core.cst$kw$previous_DASH_state.cljs$core$IFn$_invoke$arity$1(states))){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(gstate,cljs.core.update_in,spath,cljs.core.dissoc,cljs.core.array_seq([cljs.core.cst$kw$previous_DASH_state], 0));
} else {
return null;
}
})], 0));
om.core.no_local_descriptor = (function om$core$no_local_descriptor(methods$){
var x11475 = cljs.core.clj__GT_js(methods$);
x11475.om$core$ISetState$ = true;

x11475.om$core$ISetState$_set_state_BANG_$arity$3 = ((function (x11475){
return (function (this$,val,render){
var this$__$1 = this;
var gstate = om.core.get_gstate(this$__$1);
var spath = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$state_DASH_map,om.core.react_id(this$__$1),cljs.core.cst$kw$pending_DASH_state], null);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(om.core.get_gstate(this$__$1),cljs.core.assoc_in,spath,val);

if(cljs.core.truth_((function (){var and__5076__auto__ = !((gstate == null));
if(and__5076__auto__){
return render;
} else {
return and__5076__auto__;
}
})())){
return om.core._queue_render_BANG_(gstate,this$__$1);
} else {
return null;
}
});})(x11475))
;

x11475.om$core$ISetState$_set_state_BANG_$arity$4 = ((function (x11475){
return (function (this$,ks,val,render){
var this$__$1 = this;
return om.core._set_state_BANG_.cljs$core$IFn$_invoke$arity$3(this$__$1,cljs.core.assoc_in(om.core._get_state.cljs$core$IFn$_invoke$arity$1(this$__$1),ks,val),render);
});})(x11475))
;

x11475.om$core$IGetRenderState$ = true;

x11475.om$core$IGetRenderState$_get_render_state$arity$1 = ((function (x11475){
return (function (this$){
var this$__$1 = this;
var spath = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$state_DASH_map,om.core.react_id(this$__$1),cljs.core.cst$kw$render_DASH_state], null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((function (){var G__11476 = om.core.get_gstate(this$__$1);
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__11476) : cljs.core.deref.call(null,G__11476));
})(),spath);
});})(x11475))
;

x11475.om$core$IGetRenderState$_get_render_state$arity$2 = ((function (x11475){
return (function (this$,ks){
var this$__$1 = this;
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(om.core._get_render_state.cljs$core$IFn$_invoke$arity$1(this$__$1),ks);
});})(x11475))
;

x11475.om$core$IGetState$ = true;

x11475.om$core$IGetState$_get_state$arity$1 = ((function (x11475){
return (function (this$){
var this$__$1 = this;
if(cljs.core.truth_((om.core.mounted_QMARK_.cljs$core$IFn$_invoke$arity$1 ? om.core.mounted_QMARK_.cljs$core$IFn$_invoke$arity$1(this$__$1) : om.core.mounted_QMARK_.call(null,this$__$1)))){
var spath = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$state_DASH_map,om.core.react_id(this$__$1)], null);
var states = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((function (){var G__11477 = om.core.get_gstate(this$__$1);
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__11477) : cljs.core.deref.call(null,G__11477));
})(),spath);
var or__5088__auto__ = cljs.core.cst$kw$pending_DASH_state.cljs$core$IFn$_invoke$arity$1(states);
if(cljs.core.truth_(or__5088__auto__)){
return or__5088__auto__;
} else {
return cljs.core.cst$kw$render_DASH_state.cljs$core$IFn$_invoke$arity$1(states);
}
} else {
return (this$__$1.props["__om_init_state"]);
}
});})(x11475))
;

x11475.om$core$IGetState$_get_state$arity$2 = ((function (x11475){
return (function (this$,ks){
var this$__$1 = this;
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(om.core._get_state.cljs$core$IFn$_invoke$arity$1(this$__$1),ks);
});})(x11475))
;

return x11475;
});
om.core.valid_QMARK_ = (function om$core$valid_QMARK_(x){
if(((!((x == null)))?(((false) || (x.om$core$ICursor$))?true:(((!x.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(om.core.ICursor,x):false)):cljs.core.native_satisfies_QMARK_(om.core.ICursor,x))){
return !(cljs.core.keyword_identical_QMARK_((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(x) : cljs.core.deref.call(null,x)),cljs.core.cst$kw$om$core_SLASH_invalid));
} else {
return true;
}
});

/**
* @constructor
 * @implements {om.core.IValue}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.ICollection}
 * @implements {om.core.ITransact}
 * @implements {cljs.core.IEmptyableCollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {om.core.ICursor}
 * @implements {cljs.core.IDeref}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
om.core.MapCursor = (function (value,state,path){
this.value = value;
this.state = state;
this.path = path;
this.cljs$lang$protocol_mask$partition0$ = 2163640079;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
om.core.MapCursor.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this$,k){
var self__ = this;
var this$__$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this$__$1,k,null);
});

om.core.MapCursor.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this$,k,not_found){
var self__ = this;
var this$__$1 = this;
var v = cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(self__.value,k,cljs.core.cst$kw$om$core_SLASH_not_DASH_found);
if(!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(v,cljs.core.cst$kw$om$core_SLASH_not_DASH_found))){
return om.core._derive(this$__$1,v,self__.state,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(self__.path,k));
} else {
return not_found;
}
});

om.core.MapCursor.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (_,f,init){
var self__ = this;
var ___$1 = this;
return cljs.core._kv_reduce(self__.value,f,init);
});

om.core.MapCursor.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (_,writer,opts){
var self__ = this;
var ___$1 = this;
return cljs.core._pr_writer(self__.value,writer,opts);
});

om.core.MapCursor.prototype.om$core$ICursor$ = true;

om.core.MapCursor.prototype.om$core$ICursor$_path$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.path;
});

om.core.MapCursor.prototype.om$core$ICursor$_state$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.state;
});

om.core.MapCursor.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.meta(self__.value);
});

om.core.MapCursor.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (new om.core.MapCursor(self__.value,self__.state,self__.path));
});

om.core.MapCursor.prototype.cljs$core$ICounted$_count$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core._count(self__.value);
});

om.core.MapCursor.prototype.cljs$core$IHash$_hash$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.hash(self__.value);
});

om.core.MapCursor.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (_,other){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(om.core.cursor_QMARK_(other))){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.value,om.core._value(other));
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.value,other);
}
});

om.core.MapCursor.prototype.om$core$IValue$ = true;

om.core.MapCursor.prototype.om$core$IValue$_value$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.value;
});

om.core.MapCursor.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (new om.core.MapCursor(cljs.core.empty(self__.value),self__.state,self__.path));
});

om.core.MapCursor.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (_,k){
var self__ = this;
var ___$1 = this;
return (new om.core.MapCursor(cljs.core._dissoc(self__.value,k),self__.state,self__.path));
});

om.core.MapCursor.prototype.om$core$ITransact$ = true;

om.core.MapCursor.prototype.om$core$ITransact$_transact_BANG_$arity$4 = (function (this$,korks,f,tag){
var self__ = this;
var this$__$1 = this;
return om.core.transact_STAR_(self__.state,this$__$1,korks,f,tag);
});

om.core.MapCursor.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (_,k){
var self__ = this;
var ___$1 = this;
return cljs.core._contains_key_QMARK_(self__.value,k);
});

om.core.MapCursor.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (_,k,v){
var self__ = this;
var ___$1 = this;
return (new om.core.MapCursor(cljs.core._assoc(self__.value,k,v),self__.state,self__.path));
});

om.core.MapCursor.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if((cljs.core.count(self__.value) > (0))){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (this$__$1){
return (function (p__11481){
var vec__11482 = p__11481;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11482,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11482,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,om.core._derive(this$__$1,v,self__.state,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(self__.path,k))], null);
});})(this$__$1))
,self__.value);
} else {
return null;
}
});

om.core.MapCursor.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_,new_meta){
var self__ = this;
var ___$1 = this;
return (new om.core.MapCursor(cljs.core.with_meta(self__.value,new_meta),self__.state,self__.path));
});

om.core.MapCursor.prototype.cljs$core$ICollection$_conj$arity$2 = (function (_,o){
var self__ = this;
var ___$1 = this;
return (new om.core.MapCursor(cljs.core._conj(self__.value,o),self__.state,self__.path));
});

om.core.MapCursor.prototype.call = (function() {
var G__11483 = null;
var G__11483__2 = (function (self__,k){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return this$.cljs$core$ILookup$_lookup$arity$2(null,k);
});
var G__11483__3 = (function (self__,k,not_found){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return this$.cljs$core$ILookup$_lookup$arity$3(null,k,not_found);
});
G__11483 = function(self__,k,not_found){
switch(arguments.length){
case 2:
return G__11483__2.call(this,self__,k);
case 3:
return G__11483__3.call(this,self__,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__11483.cljs$core$IFn$_invoke$arity$2 = G__11483__2;
G__11483.cljs$core$IFn$_invoke$arity$3 = G__11483__3;
return G__11483;
})()
;

om.core.MapCursor.prototype.apply = (function (self__,args11480){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args11480)));
});

om.core.MapCursor.prototype.cljs$core$IFn$_invoke$arity$1 = (function (k){
var self__ = this;
var this$ = this;
return this$.cljs$core$ILookup$_lookup$arity$2(null,k);
});

om.core.MapCursor.prototype.cljs$core$IFn$_invoke$arity$2 = (function (k,not_found){
var self__ = this;
var this$ = this;
return this$.cljs$core$ILookup$_lookup$arity$3(null,k,not_found);
});

om.core.MapCursor.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$3((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(self__.state) : cljs.core.deref.call(null,self__.state)),self__.path,cljs.core.cst$kw$om$core_SLASH_invalid);
});

om.core.MapCursor.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$value,cljs.core.cst$sym$state,cljs.core.cst$sym$path], null);
});

om.core.MapCursor.cljs$lang$type = true;

om.core.MapCursor.cljs$lang$ctorStr = "om.core/MapCursor";

om.core.MapCursor.cljs$lang$ctorPrWriter = (function (this__5686__auto__,writer__5687__auto__,opt__5688__auto__){
return cljs.core._write(writer__5687__auto__,"om.core/MapCursor");
});

om.core.__GT_MapCursor = (function om$core$__GT_MapCursor(value,state,path){
return (new om.core.MapCursor(value,state,path));
});


/**
* @constructor
 * @implements {om.core.IValue}
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.ICollection}
 * @implements {om.core.ITransact}
 * @implements {cljs.core.IEmptyableCollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IStack}
 * @implements {om.core.ICursor}
 * @implements {cljs.core.IDeref}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.ISequential}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.ILookup}
*/
om.core.IndexedCursor = (function (value,state,path){
this.value = value;
this.state = state;
this.path = path;
this.cljs$lang$protocol_mask$partition0$ = 2180424479;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
om.core.IndexedCursor.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return cljs.core._nth.cljs$core$IFn$_invoke$arity$3(this$__$1,n,null);
});

om.core.IndexedCursor.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
return cljs.core._nth.cljs$core$IFn$_invoke$arity$3(this$__$1,n,not_found);
});

om.core.IndexedCursor.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (_,f,init){
var self__ = this;
var ___$1 = this;
return cljs.core._kv_reduce(self__.value,f,init);
});

om.core.IndexedCursor.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return om.core._derive(this$__$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(self__.value,n),self__.state,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(self__.path,n));
});

om.core.IndexedCursor.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
if((n < cljs.core._count(self__.value))){
return om.core._derive(this$__$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$3(self__.value,n,not_found),self__.state,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(self__.path,n));
} else {
return not_found;
}
});

om.core.IndexedCursor.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (_,writer,opts){
var self__ = this;
var ___$1 = this;
return cljs.core._pr_writer(self__.value,writer,opts);
});

om.core.IndexedCursor.prototype.om$core$ICursor$ = true;

om.core.IndexedCursor.prototype.om$core$ICursor$_path$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.path;
});

om.core.IndexedCursor.prototype.om$core$ICursor$_state$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.state;
});

om.core.IndexedCursor.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.meta(self__.value);
});

om.core.IndexedCursor.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (new om.core.IndexedCursor(self__.value,self__.state,self__.path));
});

om.core.IndexedCursor.prototype.cljs$core$ICounted$_count$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core._count(self__.value);
});

om.core.IndexedCursor.prototype.cljs$core$IStack$_peek$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return om.core._derive(this$__$1,cljs.core._peek(self__.value),self__.state,self__.path);
});

om.core.IndexedCursor.prototype.cljs$core$IStack$_pop$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return om.core._derive(this$__$1,cljs.core._pop(self__.value),self__.state,self__.path);
});

om.core.IndexedCursor.prototype.cljs$core$IHash$_hash$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.hash(self__.value);
});

om.core.IndexedCursor.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (_,other){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(om.core.cursor_QMARK_(other))){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.value,om.core._value(other));
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.value,other);
}
});

om.core.IndexedCursor.prototype.om$core$IValue$ = true;

om.core.IndexedCursor.prototype.om$core$IValue$_value$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.value;
});

om.core.IndexedCursor.prototype.cljs$core$IEmptyableCollection$_empty$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return (new om.core.IndexedCursor(cljs.core.empty(self__.value),self__.state,self__.path));
});

om.core.IndexedCursor.prototype.om$core$ITransact$ = true;

om.core.IndexedCursor.prototype.om$core$ITransact$_transact_BANG_$arity$4 = (function (this$,korks,f,tag){
var self__ = this;
var this$__$1 = this;
return om.core.transact_STAR_(self__.state,this$__$1,korks,f,tag);
});

om.core.IndexedCursor.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (_,k){
var self__ = this;
var ___$1 = this;
return cljs.core._contains_key_QMARK_(self__.value,k);
});

om.core.IndexedCursor.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this$,n,v){
var self__ = this;
var this$__$1 = this;
return om.core._derive(this$__$1,cljs.core._assoc_n(self__.value,n,v),self__.state,self__.path);
});

om.core.IndexedCursor.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if((cljs.core.count(self__.value) > (0))){
return cljs.core.map.cljs$core$IFn$_invoke$arity$3(((function (this$__$1){
return (function (v,i){
return om.core._derive(this$__$1,v,self__.state,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(self__.path,i));
});})(this$__$1))
,self__.value,cljs.core.range.cljs$core$IFn$_invoke$arity$0());
} else {
return null;
}
});

om.core.IndexedCursor.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_,new_meta){
var self__ = this;
var ___$1 = this;
return (new om.core.IndexedCursor(cljs.core.with_meta(self__.value,new_meta),self__.state,self__.path));
});

om.core.IndexedCursor.prototype.cljs$core$ICollection$_conj$arity$2 = (function (_,o){
var self__ = this;
var ___$1 = this;
return (new om.core.IndexedCursor(cljs.core._conj(self__.value,o),self__.state,self__.path));
});

om.core.IndexedCursor.prototype.call = (function() {
var G__11485 = null;
var G__11485__2 = (function (self__,k){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return this$.cljs$core$ILookup$_lookup$arity$2(null,k);
});
var G__11485__3 = (function (self__,k,not_found){
var self__ = this;
var self____$1 = this;
var this$ = self____$1;
return this$.cljs$core$ILookup$_lookup$arity$3(null,k,not_found);
});
G__11485 = function(self__,k,not_found){
switch(arguments.length){
case 2:
return G__11485__2.call(this,self__,k);
case 3:
return G__11485__3.call(this,self__,k,not_found);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__11485.cljs$core$IFn$_invoke$arity$2 = G__11485__2;
G__11485.cljs$core$IFn$_invoke$arity$3 = G__11485__3;
return G__11485;
})()
;

om.core.IndexedCursor.prototype.apply = (function (self__,args11484){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args11484)));
});

om.core.IndexedCursor.prototype.cljs$core$IFn$_invoke$arity$1 = (function (k){
var self__ = this;
var this$ = this;
return this$.cljs$core$ILookup$_lookup$arity$2(null,k);
});

om.core.IndexedCursor.prototype.cljs$core$IFn$_invoke$arity$2 = (function (k,not_found){
var self__ = this;
var this$ = this;
return this$.cljs$core$ILookup$_lookup$arity$3(null,k,not_found);
});

om.core.IndexedCursor.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$3((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(self__.state) : cljs.core.deref.call(null,self__.state)),self__.path,cljs.core.cst$kw$om$core_SLASH_invalid);
});

om.core.IndexedCursor.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$value,cljs.core.cst$sym$state,cljs.core.cst$sym$path], null);
});

om.core.IndexedCursor.cljs$lang$type = true;

om.core.IndexedCursor.cljs$lang$ctorStr = "om.core/IndexedCursor";

om.core.IndexedCursor.cljs$lang$ctorPrWriter = (function (this__5686__auto__,writer__5687__auto__,opt__5688__auto__){
return cljs.core._write(writer__5687__auto__,"om.core/IndexedCursor");
});

om.core.__GT_IndexedCursor = (function om$core$__GT_IndexedCursor(value,state,path){
return (new om.core.IndexedCursor(value,state,path));
});

om.core.to_cursor_STAR_ = (function om$core$to_cursor_STAR_(val,state,path){
var x11487 = cljs.core.clone(val);
x11487.cljs$core$IDeref$ = true;

x11487.cljs$core$IDeref$_deref$arity$1 = ((function (x11487){
return (function (this$){
var this$__$1 = this;
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$3((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(state) : cljs.core.deref.call(null,state)),path,cljs.core.cst$kw$om$core_SLASH_invalid);
});})(x11487))
;

x11487.om$core$ICursor$ = true;

x11487.om$core$ICursor$_path$arity$1 = ((function (x11487){
return (function (_){
var ___$1 = this;
return path;
});})(x11487))
;

x11487.om$core$ICursor$_state$arity$1 = ((function (x11487){
return (function (_){
var ___$1 = this;
return state;
});})(x11487))
;

x11487.om$core$ITransact$ = true;

x11487.om$core$ITransact$_transact_BANG_$arity$4 = ((function (x11487){
return (function (this$,korks,f,tag){
var this$__$1 = this;
return om.core.transact_STAR_(state,this$__$1,korks,f,tag);
});})(x11487))
;

x11487.cljs$core$IEquiv$ = true;

x11487.cljs$core$IEquiv$_equiv$arity$2 = ((function (x11487){
return (function (_,other){
var ___$1 = this;
if(cljs.core.truth_(om.core.cursor_QMARK_(other))){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(val,om.core._value(other));
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(val,other);
}
});})(x11487))
;

return x11487;
});
om.core.to_cursor = (function om$core$to_cursor(var_args){
var args11488 = [];
var len__6146__auto___11493 = arguments.length;
var i__6147__auto___11494 = (0);
while(true){
if((i__6147__auto___11494 < len__6146__auto___11493)){
args11488.push((arguments[i__6147__auto___11494]));

var G__11495 = (i__6147__auto___11494 + (1));
i__6147__auto___11494 = G__11495;
continue;
} else {
}
break;
}

var G__11490 = args11488.length;
switch (G__11490) {
case 1:
return om.core.to_cursor.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om.core.to_cursor.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.core.to_cursor.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11488.length)].join('')));

}
});

om.core.to_cursor.cljs$core$IFn$_invoke$arity$1 = (function (val){
return om.core.to_cursor.cljs$core$IFn$_invoke$arity$3(val,null,cljs.core.PersistentVector.EMPTY);
});

om.core.to_cursor.cljs$core$IFn$_invoke$arity$2 = (function (val,state){
return om.core.to_cursor.cljs$core$IFn$_invoke$arity$3(val,state,cljs.core.PersistentVector.EMPTY);
});

om.core.to_cursor.cljs$core$IFn$_invoke$arity$3 = (function (val,state,path){
if(cljs.core.truth_(om.core.cursor_QMARK_(val))){
return val;
} else {
if(((!((val == null)))?(((false) || (val.om$core$IToCursor$))?true:(((!val.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(om.core.IToCursor,val):false)):cljs.core.native_satisfies_QMARK_(om.core.IToCursor,val))){
return om.core._to_cursor.cljs$core$IFn$_invoke$arity$3(val,state,path);
} else {
if(cljs.core.indexed_QMARK_(val)){
return (new om.core.IndexedCursor(val,state,path));
} else {
if(cljs.core.map_QMARK_(val)){
return (new om.core.MapCursor(val,state,path));
} else {
if(((!((val == null)))?((((val.cljs$lang$protocol_mask$partition1$ & (8192))) || (val.cljs$core$ICloneable$))?true:(((!val.cljs$lang$protocol_mask$partition1$))?cljs.core.native_satisfies_QMARK_(cljs.core.ICloneable,val):false)):cljs.core.native_satisfies_QMARK_(cljs.core.ICloneable,val))){
return om.core.to_cursor_STAR_(val,state,path);
} else {
return val;

}
}
}
}
}
});

om.core.to_cursor.cljs$lang$maxFixedArity = 3;
om.core.notify_STAR_ = (function om$core$notify_STAR_(cursor,tx_data){
var state = om.core._state(cursor);
return om.core._notify_BANG_(state,tx_data,om.core.to_cursor.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(state) : cljs.core.deref.call(null,state)),state));
});
om.core.commit_BANG_;

om.core.id;

om.core.refresh_props_BANG_;
/**
 * Given an application state atom return a root cursor for it.
 */
om.core.root_cursor = (function om$core$root_cursor(atom){
if(((!((atom == null)))?((((atom.cljs$lang$protocol_mask$partition0$ & (32768))) || (atom.cljs$core$IDeref$))?true:(((!atom.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,atom):false)):cljs.core.native_satisfies_QMARK_(cljs.core.IDeref,atom))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(cljs.core.cst$sym$satisfies_QMARK_,cljs.core.cst$sym$IDeref,cljs.core.cst$sym$atom)], 0)))].join('')));
}

return om.core.to_cursor.cljs$core$IFn$_invoke$arity$3((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(atom) : cljs.core.deref.call(null,atom)),atom,cljs.core.PersistentVector.EMPTY);
});
om.core._refs = (function (){var G__11499 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__11499) : cljs.core.atom.call(null,G__11499));
})();
om.core.ref_sub_cursor = (function om$core$ref_sub_cursor(x,parent){
var x11505 = cljs.core.clone(x);
x11505.cljs$core$ICloneable$ = true;

x11505.cljs$core$ICloneable$_clone$arity$1 = ((function (x11505){
return (function (this$){
var this$__$1 = this;
return om$core$ref_sub_cursor(cljs.core.clone(x),parent);
});})(x11505))
;

x11505.om$core$IAdapt$ = true;

x11505.om$core$IAdapt$_adapt$arity$2 = ((function (x11505){
return (function (this$,other){
var this$__$1 = this;
return om$core$ref_sub_cursor(om.core.adapt(x,other),parent);
});})(x11505))
;

x11505.om$core$ICursorDerive$ = true;

x11505.om$core$ICursorDerive$_derive$arity$4 = ((function (x11505){
return (function (this$,derived,state,path){
var this$__$1 = this;
var cursor_SINGLEQUOTE_ = om.core.to_cursor.cljs$core$IFn$_invoke$arity$3(derived,state,path);
if(cljs.core.truth_(om.core.cursor_QMARK_(cursor_SINGLEQUOTE_))){
return om.core.adapt(this$__$1,cursor_SINGLEQUOTE_);
} else {
return cursor_SINGLEQUOTE_;
}
});})(x11505))
;

x11505.om$core$ITransact$ = true;

x11505.om$core$ITransact$_transact_BANG_$arity$4 = ((function (x11505){
return (function (cursor,korks,f,tag){
var cursor__$1 = this;
(om.core.commit_BANG_.cljs$core$IFn$_invoke$arity$3 ? om.core.commit_BANG_.cljs$core$IFn$_invoke$arity$3(cursor__$1,korks,f) : om.core.commit_BANG_.call(null,cursor__$1,korks,f));

return om.core._refresh_deps_BANG_(parent);
});})(x11505))
;

return x11505;
});
om.core.ref_cursor_QMARK_ = (function om$core$ref_cursor_QMARK_(x){
if(!((x == null))){
if((false) || (x.om$core$IOmRef$)){
return true;
} else {
if((!x.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(om.core.IOmRef,x);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(om.core.IOmRef,x);
}
});
/**
 * Given a cursor return a reference cursor that inherits all of the
 *   properties and methods of the cursor. Reference cursors may be
 *   observed via om.core/observe.
 */
om.core.ref_cursor = (function om$core$ref_cursor(cursor){
if(cljs.core.truth_(om.core.cursor_QMARK_(cursor))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(cljs.core.cst$sym$cursor_QMARK_,cljs.core.cst$sym$cursor)], 0)))].join('')));
}

if(cljs.core.truth_(om.core.ref_cursor_QMARK_(cursor))){
return cursor;
} else {
var path = om.core.path(cursor);
var storage = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(om.core._refs,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [path], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,(function (){var G__11514 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__11514) : cljs.core.atom.call(null,G__11514));
})())),path);
var x11515 = cljs.core.clone(cursor);
x11515.om$core$ICursorDerive$ = true;

x11515.om$core$ICursorDerive$_derive$arity$4 = ((function (x11515,path,storage){
return (function (this$,derived,state,path__$1){
var this$__$1 = this;
var cursor_SINGLEQUOTE_ = om.core.to_cursor.cljs$core$IFn$_invoke$arity$3(derived,state,path__$1);
if(cljs.core.truth_(om.core.cursor_QMARK_(cursor_SINGLEQUOTE_))){
return om.core.ref_sub_cursor(cursor_SINGLEQUOTE_,this$__$1);
} else {
return cursor_SINGLEQUOTE_;
}
});})(x11515,path,storage))
;

x11515.om$core$IOmRef$ = true;

x11515.om$core$IOmRef$_add_dep_BANG_$arity$2 = ((function (x11515,path,storage){
return (function (_,c){
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(storage,cljs.core.assoc,(om.core.id.cljs$core$IFn$_invoke$arity$1 ? om.core.id.cljs$core$IFn$_invoke$arity$1(c) : om.core.id.call(null,c)),c);
});})(x11515,path,storage))
;

x11515.om$core$IOmRef$_remove_dep_BANG_$arity$2 = ((function (x11515,path,storage){
return (function (_,c){
var ___$1 = this;
var m = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(storage,cljs.core.dissoc,(om.core.id.cljs$core$IFn$_invoke$arity$1 ? om.core.id.cljs$core$IFn$_invoke$arity$1(c) : om.core.id.call(null,c)));
if((cljs.core.count(m) === (0))){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(om.core._refs,cljs.core.dissoc,path);
} else {
return null;
}
});})(x11515,path,storage))
;

x11515.om$core$IOmRef$_refresh_deps_BANG_$arity$1 = ((function (x11515,path,storage){
return (function (_){
var ___$1 = this;
var seq__11516 = cljs.core.seq(cljs.core.vals((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(storage) : cljs.core.deref.call(null,storage))));
var chunk__11517 = null;
var count__11518 = (0);
var i__11519 = (0);
while(true){
if((i__11519 < count__11518)){
var c = chunk__11517.cljs$core$IIndexed$_nth$arity$2(null,i__11519);
om.core._queue_render_BANG_(om.core.state(cursor),c);

var G__11520 = seq__11516;
var G__11521 = chunk__11517;
var G__11522 = count__11518;
var G__11523 = (i__11519 + (1));
seq__11516 = G__11520;
chunk__11517 = G__11521;
count__11518 = G__11522;
i__11519 = G__11523;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq(seq__11516);
if(temp__4425__auto__){
var seq__11516__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__11516__$1)){
var c__5891__auto__ = cljs.core.chunk_first(seq__11516__$1);
var G__11524 = cljs.core.chunk_rest(seq__11516__$1);
var G__11525 = c__5891__auto__;
var G__11526 = cljs.core.count(c__5891__auto__);
var G__11527 = (0);
seq__11516 = G__11524;
chunk__11517 = G__11525;
count__11518 = G__11526;
i__11519 = G__11527;
continue;
} else {
var c = cljs.core.first(seq__11516__$1);
om.core._queue_render_BANG_(om.core.state(cursor),c);

var G__11528 = cljs.core.next(seq__11516__$1);
var G__11529 = null;
var G__11530 = (0);
var G__11531 = (0);
seq__11516 = G__11528;
chunk__11517 = G__11529;
count__11518 = G__11530;
i__11519 = G__11531;
continue;
}
} else {
return null;
}
}
break;
}
});})(x11515,path,storage))
;

x11515.om$core$IOmRef$_get_deps$arity$1 = ((function (x11515,path,storage){
return (function (_){
var ___$1 = this;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(storage) : cljs.core.deref.call(null,storage));
});})(x11515,path,storage))
;

x11515.om$core$ITransact$ = true;

x11515.om$core$ITransact$_transact_BANG_$arity$4 = ((function (x11515,path,storage){
return (function (cursor__$1,korks,f,tag){
var cursor__$2 = this;
(om.core.commit_BANG_.cljs$core$IFn$_invoke$arity$3 ? om.core.commit_BANG_.cljs$core$IFn$_invoke$arity$3(cursor__$2,korks,f) : om.core.commit_BANG_.call(null,cursor__$2,korks,f));

return om.core._refresh_deps_BANG_(cursor__$2);
});})(x11515,path,storage))
;

return x11515;
}
});
om.core.add_ref_to_component_BANG_ = (function om$core$add_ref_to_component_BANG_(c,ref){
var state = c.state;
var refs = (function (){var or__5088__auto__ = (state["__om_refs"]);
if(cljs.core.truth_(or__5088__auto__)){
return or__5088__auto__;
} else {
return cljs.core.PersistentHashSet.EMPTY;
}
})();
if(cljs.core.contains_QMARK_(refs,ref)){
return null;
} else {
return (state["__om_refs"] = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(refs,ref));
}
});
om.core.remove_ref_from_component_BANG_ = (function om$core$remove_ref_from_component_BANG_(c,ref){
var state = c.state;
var refs = (state["__om_refs"]);
if(cljs.core.contains_QMARK_(refs,ref)){
return (state["__om_refs"] = cljs.core.disj.cljs$core$IFn$_invoke$arity$2(refs,ref));
} else {
return null;
}
});
/**
 * Given a component and a reference cursor have the component observe
 *   the reference cursor for any data changes.
 */
om.core.observe = (function om$core$observe(c,ref){
if(cljs.core.truth_(om.core.component_QMARK_(c))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(cljs.core.cst$sym$component_QMARK_,cljs.core.cst$sym$c)], 0)))].join('')));
}

if(cljs.core.truth_(om.core.cursor_QMARK_(ref))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(cljs.core.cst$sym$cursor_QMARK_,cljs.core.cst$sym$ref)], 0)))].join('')));
}

if(cljs.core.truth_(om.core.ref_cursor_QMARK_(ref))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(cljs.core.cst$sym$ref_DASH_cursor_QMARK_,cljs.core.cst$sym$ref)], 0)))].join('')));
}

om.core.add_ref_to_component_BANG_(c,ref);

om.core._add_dep_BANG_(ref,c);

return ref;
});
om.core.unobserve = (function om$core$unobserve(c,ref){
om.core.remove_ref_from_component_BANG_(c,ref);

om.core._remove_dep_BANG_(ref,c);

return ref;
});
om.core.refresh_queued = false;
om.core.refresh_set = (function (){var G__11532 = cljs.core.PersistentHashSet.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__11532) : cljs.core.atom.call(null,G__11532));
})();
om.core.get_renderT = (function om$core$get_renderT(state){
var or__5088__auto__ = state.om$render$T;
if(cljs.core.truth_(or__5088__auto__)){
return or__5088__auto__;
} else {
return (0);
}
});
/**
 * Force a render of *all* roots. Usage of this function is almost
 *   never recommended.
 */
om.core.render_all = (function om$core$render_all(var_args){
var args11533 = [];
var len__6146__auto___11540 = arguments.length;
var i__6147__auto___11541 = (0);
while(true){
if((i__6147__auto___11541 < len__6146__auto___11540)){
args11533.push((arguments[i__6147__auto___11541]));

var G__11542 = (i__6147__auto___11541 + (1));
i__6147__auto___11541 = G__11542;
continue;
} else {
}
break;
}

var G__11535 = args11533.length;
switch (G__11535) {
case 0:
return om.core.render_all.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return om.core.render_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11533.length)].join('')));

}
});

om.core.render_all.cljs$core$IFn$_invoke$arity$0 = (function (){
return om.core.render_all.cljs$core$IFn$_invoke$arity$1(null);
});

om.core.render_all.cljs$core$IFn$_invoke$arity$1 = (function (state){
om.core.refresh_queued = false;

var seq__11536_11544 = cljs.core.seq((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(om.core.refresh_set) : cljs.core.deref.call(null,om.core.refresh_set)));
var chunk__11537_11545 = null;
var count__11538_11546 = (0);
var i__11539_11547 = (0);
while(true){
if((i__11539_11547 < count__11538_11546)){
var f_11548 = chunk__11537_11545.cljs$core$IIndexed$_nth$arity$2(null,i__11539_11547);
(f_11548.cljs$core$IFn$_invoke$arity$0 ? f_11548.cljs$core$IFn$_invoke$arity$0() : f_11548.call(null));

var G__11549 = seq__11536_11544;
var G__11550 = chunk__11537_11545;
var G__11551 = count__11538_11546;
var G__11552 = (i__11539_11547 + (1));
seq__11536_11544 = G__11549;
chunk__11537_11545 = G__11550;
count__11538_11546 = G__11551;
i__11539_11547 = G__11552;
continue;
} else {
var temp__4425__auto___11553 = cljs.core.seq(seq__11536_11544);
if(temp__4425__auto___11553){
var seq__11536_11554__$1 = temp__4425__auto___11553;
if(cljs.core.chunked_seq_QMARK_(seq__11536_11554__$1)){
var c__5891__auto___11555 = cljs.core.chunk_first(seq__11536_11554__$1);
var G__11556 = cljs.core.chunk_rest(seq__11536_11554__$1);
var G__11557 = c__5891__auto___11555;
var G__11558 = cljs.core.count(c__5891__auto___11555);
var G__11559 = (0);
seq__11536_11544 = G__11556;
chunk__11537_11545 = G__11557;
count__11538_11546 = G__11558;
i__11539_11547 = G__11559;
continue;
} else {
var f_11560 = cljs.core.first(seq__11536_11554__$1);
(f_11560.cljs$core$IFn$_invoke$arity$0 ? f_11560.cljs$core$IFn$_invoke$arity$0() : f_11560.call(null));

var G__11561 = cljs.core.next(seq__11536_11554__$1);
var G__11562 = null;
var G__11563 = (0);
var G__11564 = (0);
seq__11536_11544 = G__11561;
chunk__11537_11545 = G__11562;
count__11538_11546 = G__11563;
i__11539_11547 = G__11564;
continue;
}
} else {
}
}
break;
}

if((state == null)){
return null;
} else {
return state.om$render$T = (om.core.get_renderT(state) + (1));
}
});

om.core.render_all.cljs$lang$maxFixedArity = 1;
om.core.roots = (function (){var G__11565 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__11565) : cljs.core.atom.call(null,G__11565));
})();
om.core.valid_component_QMARK_ = (function om$core$valid_component_QMARK_(x,f){
if((function (){var or__5088__auto__ = ((!((x == null)))?(((false) || (x.om$core$IRender$))?true:(((!x.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(om.core.IRender,x):false)):cljs.core.native_satisfies_QMARK_(om.core.IRender,x));
if(or__5088__auto__){
return or__5088__auto__;
} else {
var or__5088__auto____$1 = ((!((x == null)))?(((false) || (x.om$core$IRenderProps$))?true:(((!x.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(om.core.IRenderProps,x):false)):cljs.core.native_satisfies_QMARK_(om.core.IRenderProps,x));
if(or__5088__auto____$1){
return or__5088__auto____$1;
} else {
if(!((x == null))){
if((false) || (x.om$core$IRenderState$)){
return true;
} else {
if((!x.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(om.core.IRenderState,x);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(om.core.IRenderState,x);
}
}
}
})()){
return null;
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("Invalid Om component fn, "),cljs.core.str(f.name),cljs.core.str(" does not return valid instance")].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(cljs.core.cst$sym$or,cljs.core.list(cljs.core.cst$sym$satisfies_QMARK_,cljs.core.cst$sym$IRender,cljs.core.cst$sym$x),cljs.core.list(cljs.core.cst$sym$satisfies_QMARK_,cljs.core.cst$sym$IRenderProps,cljs.core.cst$sym$x),cljs.core.list(cljs.core.cst$sym$satisfies_QMARK_,cljs.core.cst$sym$IRenderState,cljs.core.cst$sym$x))], 0)))].join('')));
}
});
om.core.valid_opts_QMARK_ = (function om$core$valid_opts_QMARK_(m){
return cljs.core.every_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 11, [cljs.core.cst$kw$descriptor,null,cljs.core.cst$kw$fn,null,cljs.core.cst$kw$instrument,null,cljs.core.cst$kw$react_DASH_key,null,cljs.core.cst$kw$key,null,cljs.core.cst$kw$init_DASH_state,null,cljs.core.cst$kw$state,null,cljs.core.cst$kw$key_DASH_fn,null,cljs.core.cst$kw$opts,null,cljs.core.cst$kw$om$core_SLASH_index,null,cljs.core.cst$kw$shared,null], null), null),cljs.core.keys(m));
});
om.core.id = (function om$core$id(owner){
return (owner.state["__om_id"]);
});
om.core.get_descriptor = (function om$core$get_descriptor(var_args){
var args11576 = [];
var len__6146__auto___11580 = arguments.length;
var i__6147__auto___11581 = (0);
while(true){
if((i__6147__auto___11581 < len__6146__auto___11580)){
args11576.push((arguments[i__6147__auto___11581]));

var G__11582 = (i__6147__auto___11581 + (1));
i__6147__auto___11581 = G__11582;
continue;
} else {
}
break;
}

var G__11578 = args11576.length;
switch (G__11578) {
case 1:
return om.core.get_descriptor.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om.core.get_descriptor.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11576.length)].join('')));

}
});

om.core.get_descriptor.cljs$core$IFn$_invoke$arity$1 = (function (f){
return om.core.get_descriptor.cljs$core$IFn$_invoke$arity$2(f,null);
});

om.core.get_descriptor.cljs$core$IFn$_invoke$arity$2 = (function (f,descriptor){
var rdesc_11584 = (function (){var or__5088__auto__ = descriptor;
if(cljs.core.truth_(or__5088__auto__)){
return or__5088__auto__;
} else {
var or__5088__auto____$1 = om.core._STAR_descriptor_STAR_;
if(cljs.core.truth_(or__5088__auto____$1)){
return or__5088__auto____$1;
} else {
return om.core.pure_descriptor;
}
}
})();
if(((goog.object.get(f,"om$descriptor") == null)) || (!((rdesc_11584 === goog.object.get(f,"om$tag"))))){
var factory_11585 = (function (){var G__11579 = React.createClass(rdesc_11584);
return React.createFactory(G__11579);
})();
goog.object.set(f,"om$descriptor",factory_11585);

goog.object.set(f,"om$tag",rdesc_11584);
} else {
}

return goog.object.get(f,"om$descriptor");
});

om.core.get_descriptor.cljs$lang$maxFixedArity = 2;
om.core.getf = (function om$core$getf(var_args){
var args11586 = [];
var len__6146__auto___11589 = arguments.length;
var i__6147__auto___11590 = (0);
while(true){
if((i__6147__auto___11590 < len__6146__auto___11589)){
args11586.push((arguments[i__6147__auto___11590]));

var G__11591 = (i__6147__auto___11590 + (1));
i__6147__auto___11590 = G__11591;
continue;
} else {
}
break;
}

var G__11588 = args11586.length;
switch (G__11588) {
case 2:
return om.core.getf.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.core.getf.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11586.length)].join('')));

}
});

om.core.getf.cljs$core$IFn$_invoke$arity$2 = (function (f,cursor){
if((f instanceof cljs.core.MultiFn)){
var dv = f.dispatch_fn.call(null,cursor,null);
return cljs.core.get_method(f,dv);
} else {
return f;
}
});

om.core.getf.cljs$core$IFn$_invoke$arity$3 = (function (f,cursor,opts){
if((f instanceof cljs.core.MultiFn)){
var dv = f.dispatch_fn.call(null,cursor,null,opts);
return cljs.core.get_method(f,dv);
} else {
return f;
}
});

om.core.getf.cljs$lang$maxFixedArity = 3;
om.core.build_STAR_ = (function om$core$build_STAR_(var_args){
var args11593 = [];
var len__6146__auto___11600 = arguments.length;
var i__6147__auto___11601 = (0);
while(true){
if((i__6147__auto___11601 < len__6146__auto___11600)){
args11593.push((arguments[i__6147__auto___11601]));

var G__11602 = (i__6147__auto___11601 + (1));
i__6147__auto___11601 = G__11602;
continue;
} else {
}
break;
}

var G__11595 = args11593.length;
switch (G__11595) {
case 2:
return om.core.build_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.core.build_STAR_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11593.length)].join('')));

}
});

om.core.build_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (f,cursor){
return om.core.build_STAR_.cljs$core$IFn$_invoke$arity$3(f,cursor,null);
});

om.core.build_STAR_.cljs$core$IFn$_invoke$arity$3 = (function (f,cursor,m){
if(cljs.core.ifn_QMARK_(f)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(cljs.core.cst$sym$ifn_QMARK_,cljs.core.cst$sym$f)], 0)))].join('')));
}

if(((m == null)) || (cljs.core.map_QMARK_(m))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(cljs.core.cst$sym$or,cljs.core.list(cljs.core.cst$sym$nil_QMARK_,cljs.core.cst$sym$m),cljs.core.list(cljs.core.cst$sym$map_QMARK_,cljs.core.cst$sym$m))], 0)))].join('')));
}

if(cljs.core.truth_(om.core.valid_opts_QMARK_(m))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.str,"build options contains invalid keys, only :key, :key-fn :react-key, ",":fn, :init-state, :state, and :opts allowed, given ",cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(", ",cljs.core.keys(m)))),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(cljs.core.cst$sym$valid_DASH_opts_QMARK_,cljs.core.cst$sym$m)], 0)))].join('')));
}

if((m == null)){
var shared = om.core.get_shared.cljs$core$IFn$_invoke$arity$1(om.core._STAR_parent_STAR_);
var ctor = om.core.get_descriptor.cljs$core$IFn$_invoke$arity$1(om.core.getf.cljs$core$IFn$_invoke$arity$2(f,cursor));
var G__11596 = {"__om_cursor": cursor, "__om_shared": shared, "__om_root_key": om.core._STAR_root_key_STAR_, "__om_app_state": om.core._STAR_state_STAR_, "__om_descriptor": om.core._STAR_descriptor_STAR_, "__om_instrument": om.core._STAR_instrument_STAR_, "children": ((function (shared,ctor){
return (function (this$){
var ret = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(cursor,this$) : f.call(null,cursor,this$));
om.core.valid_component_QMARK_(ret,f);

return ret;
});})(shared,ctor))
};
return (ctor.cljs$core$IFn$_invoke$arity$1 ? ctor.cljs$core$IFn$_invoke$arity$1(G__11596) : ctor.call(null,G__11596));
} else {
var map__11597 = m;
var map__11597__$1 = ((((!((map__11597 == null)))?((((map__11597.cljs$lang$protocol_mask$partition0$ & (64))) || (map__11597.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__11597):map__11597);
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11597__$1,cljs.core.cst$kw$key);
var key_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11597__$1,cljs.core.cst$kw$key_DASH_fn);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11597__$1,cljs.core.cst$kw$state);
var init_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11597__$1,cljs.core.cst$kw$init_DASH_state);
var opts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11597__$1,cljs.core.cst$kw$opts);
var dataf = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,cljs.core.cst$kw$fn);
var cursor_SINGLEQUOTE_ = ((!((dataf == null)))?(function (){var temp__4423__auto__ = cljs.core.cst$kw$om$core_SLASH_index.cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4423__auto__)){
var i = temp__4423__auto__;
return (dataf.cljs$core$IFn$_invoke$arity$2 ? dataf.cljs$core$IFn$_invoke$arity$2(cursor,i) : dataf.call(null,cursor,i));
} else {
return (dataf.cljs$core$IFn$_invoke$arity$1 ? dataf.cljs$core$IFn$_invoke$arity$1(cursor) : dataf.call(null,cursor));
}
})():cursor);
var rkey = ((!((key == null)))?cljs.core.get.cljs$core$IFn$_invoke$arity$2(cursor_SINGLEQUOTE_,key):((!((key_fn == null)))?(key_fn.cljs$core$IFn$_invoke$arity$1 ? key_fn.cljs$core$IFn$_invoke$arity$1(cursor_SINGLEQUOTE_) : key_fn.call(null,cursor_SINGLEQUOTE_)):cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,cljs.core.cst$kw$react_DASH_key)
));
var shared = (function (){var or__5088__auto__ = cljs.core.cst$kw$shared.cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5088__auto__)){
return or__5088__auto__;
} else {
return om.core.get_shared.cljs$core$IFn$_invoke$arity$1(om.core._STAR_parent_STAR_);
}
})();
var ctor = om.core.get_descriptor.cljs$core$IFn$_invoke$arity$2(om.core.getf.cljs$core$IFn$_invoke$arity$3(f,cursor_SINGLEQUOTE_,opts),cljs.core.cst$kw$descriptor.cljs$core$IFn$_invoke$arity$1(m));
var G__11599 = {"__om_state": state, "__om_instrument": om.core._STAR_instrument_STAR_, "children": (((opts == null))?((function (map__11597,map__11597__$1,key,key_fn,state,init_state,opts,dataf,cursor_SINGLEQUOTE_,rkey,shared,ctor){
return (function (this$){
var ret = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(cursor_SINGLEQUOTE_,this$) : f.call(null,cursor_SINGLEQUOTE_,this$));
om.core.valid_component_QMARK_(ret,f);

return ret;
});})(map__11597,map__11597__$1,key,key_fn,state,init_state,opts,dataf,cursor_SINGLEQUOTE_,rkey,shared,ctor))
:((function (map__11597,map__11597__$1,key,key_fn,state,init_state,opts,dataf,cursor_SINGLEQUOTE_,rkey,shared,ctor){
return (function (this$){
var ret = (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(cursor_SINGLEQUOTE_,this$,opts) : f.call(null,cursor_SINGLEQUOTE_,this$,opts));
om.core.valid_component_QMARK_(ret,f);

return ret;
});})(map__11597,map__11597__$1,key,key_fn,state,init_state,opts,dataf,cursor_SINGLEQUOTE_,rkey,shared,ctor))
), "__om_init_state": init_state, "key": (function (){var or__5088__auto__ = rkey;
if(cljs.core.truth_(or__5088__auto__)){
return or__5088__auto__;
} else {
return undefined;
}
})(), "__om_app_state": om.core._STAR_state_STAR_, "__om_cursor": cursor_SINGLEQUOTE_, "__om_index": cljs.core.cst$kw$om$core_SLASH_index.cljs$core$IFn$_invoke$arity$1(m), "__om_shared": shared, "__om_descriptor": om.core._STAR_descriptor_STAR_, "__om_root_key": om.core._STAR_root_key_STAR_};
return (ctor.cljs$core$IFn$_invoke$arity$1 ? ctor.cljs$core$IFn$_invoke$arity$1(G__11599) : ctor.call(null,G__11599));

}
});

om.core.build_STAR_.cljs$lang$maxFixedArity = 3;
/**
 * Builds an Om component. Takes an IRender/IRenderState instance
 * returning function f, a value, and an optional third argument
 * which may be a map of build specifications.
 * 
 * f - is a function of 2 or 3 arguments. The first argument can be
 * any value and the second argument will be the owning pure node.
 * If a map of options m is passed in this will be the third
 * argument. f must return at a minimum an IRender or IRenderState
 * instance, this instance may implement other React life cycle
 * protocols.
 * 
 * x - any value
 * 
 * m - a map the following keys are allowed:
 * 
 *   :key        - a keyword that should be used to look up the key used by
 *                 React itself when rendering sequential things.
 *   :react-key  - an explicit react key
 *   :fn         - a function to apply to the data before invoking f.
 *   :init-state - a map of initial state to pass to the component.
 *   :state      - a map of state to pass to the component, will be merged in.
 *   :opts       - a map of values. Can be used to pass side information down
 *                 the render tree.
 *   :descriptor - a JS object of React methods, will be used to
 *                 construct a React class per Om component function
 *                 encountered. defaults to pure-descriptor.
 * 
 * Example:
 * 
 *   (build list-of-gadgets x
 *      {:init-state {:event-chan ...
 *                    :narble ...}})
 *   
 */
om.core.build = (function om$core$build(var_args){
var args11604 = [];
var len__6146__auto___11607 = arguments.length;
var i__6147__auto___11608 = (0);
while(true){
if((i__6147__auto___11608 < len__6146__auto___11607)){
args11604.push((arguments[i__6147__auto___11608]));

var G__11609 = (i__6147__auto___11608 + (1));
i__6147__auto___11608 = G__11609;
continue;
} else {
}
break;
}

var G__11606 = args11604.length;
switch (G__11606) {
case 2:
return om.core.build.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.core.build.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11604.length)].join('')));

}
});

om.core.build.cljs$core$IFn$_invoke$arity$2 = (function (f,x){
return om.core.build.cljs$core$IFn$_invoke$arity$3(f,x,null);
});

om.core.build.cljs$core$IFn$_invoke$arity$3 = (function (f,x,m){
if(cljs.core.ifn_QMARK_(f)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(cljs.core.cst$sym$ifn_QMARK_,cljs.core.cst$sym$f)], 0)))].join('')));
}

if(((m == null)) || (cljs.core.map_QMARK_(m))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(cljs.core.cst$sym$or,cljs.core.list(cljs.core.cst$sym$nil_QMARK_,cljs.core.cst$sym$m),cljs.core.list(cljs.core.cst$sym$map_QMARK_,cljs.core.cst$sym$m))], 0)))].join('')));
}

if(!((om.core._STAR_instrument_STAR_ == null))){
var ret = (om.core._STAR_instrument_STAR_.cljs$core$IFn$_invoke$arity$3 ? om.core._STAR_instrument_STAR_.cljs$core$IFn$_invoke$arity$3(f,x,m) : om.core._STAR_instrument_STAR_.call(null,f,x,m));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ret,cljs.core.cst$kw$om$core_SLASH_pass)){
return om.core.build_STAR_.cljs$core$IFn$_invoke$arity$3(f,x,m);
} else {
return ret;
}
} else {
return om.core.build_STAR_.cljs$core$IFn$_invoke$arity$3(f,x,m);
}
});

om.core.build.cljs$lang$maxFixedArity = 3;
/**
 * Build a sequence of components. f is the component constructor
 * function, xs a sequence of values, and m a map of options the
 * same as provided to om.core/build.
 */
om.core.build_all = (function om$core$build_all(var_args){
var args11611 = [];
var len__6146__auto___11614 = arguments.length;
var i__6147__auto___11615 = (0);
while(true){
if((i__6147__auto___11615 < len__6146__auto___11614)){
args11611.push((arguments[i__6147__auto___11615]));

var G__11616 = (i__6147__auto___11615 + (1));
i__6147__auto___11615 = G__11616;
continue;
} else {
}
break;
}

var G__11613 = args11611.length;
switch (G__11613) {
case 2:
return om.core.build_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.core.build_all.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11611.length)].join('')));

}
});

om.core.build_all.cljs$core$IFn$_invoke$arity$2 = (function (f,xs){
return om.core.build_all.cljs$core$IFn$_invoke$arity$3(f,xs,null);
});

om.core.build_all.cljs$core$IFn$_invoke$arity$3 = (function (f,xs,m){
if(cljs.core.ifn_QMARK_(f)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(cljs.core.cst$sym$ifn_QMARK_,cljs.core.cst$sym$f)], 0)))].join('')));
}

if(((m == null)) || (cljs.core.map_QMARK_(m))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(cljs.core.cst$sym$or,cljs.core.list(cljs.core.cst$sym$nil_QMARK_,cljs.core.cst$sym$m),cljs.core.list(cljs.core.cst$sym$map_QMARK_,cljs.core.cst$sym$m))], 0)))].join('')));
}

return cljs.core.map.cljs$core$IFn$_invoke$arity$3((function (x,i){
return om.core.build.cljs$core$IFn$_invoke$arity$3(f,x,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,cljs.core.cst$kw$om$core_SLASH_index,i));
}),xs,cljs.core.range.cljs$core$IFn$_invoke$arity$0());
});

om.core.build_all.cljs$lang$maxFixedArity = 3;
om.core.setup = (function om$core$setup(state,key,tx_listen){
if(((!((state == null)))?(((false) || (state.om$core$INotify$))?true:(((!state.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(om.core.INotify,state):false)):cljs.core.native_satisfies_QMARK_(om.core.INotify,state))){
} else {
var properties_11640 = (function (){var G__11630 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__11630) : cljs.core.atom.call(null,G__11630));
})();
var listeners_11641 = (function (){var G__11631 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__11631) : cljs.core.atom.call(null,G__11631));
})();
var render_queue_11642 = (function (){var G__11632 = cljs.core.PersistentHashSet.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__11632) : cljs.core.atom.call(null,G__11632));
})();
var x11633_11643 = state;
x11633_11643.om$core$IRootProperties$ = true;

x11633_11643.om$core$IRootProperties$_set_property_BANG_$arity$4 = ((function (x11633_11643,properties_11640,listeners_11641,render_queue_11642){
return (function (_,id,k,v){
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(properties_11640,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,k], null),v);
});})(x11633_11643,properties_11640,listeners_11641,render_queue_11642))
;

x11633_11643.om$core$IRootProperties$_remove_property_BANG_$arity$3 = ((function (x11633_11643,properties_11640,listeners_11641,render_queue_11642){
return (function (_,id,k){
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(properties_11640,cljs.core.dissoc,id,k);
});})(x11633_11643,properties_11640,listeners_11641,render_queue_11642))
;

x11633_11643.om$core$IRootProperties$_remove_properties_BANG_$arity$2 = ((function (x11633_11643,properties_11640,listeners_11641,render_queue_11642){
return (function (_,id){
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(properties_11640,cljs.core.dissoc,id);
});})(x11633_11643,properties_11640,listeners_11641,render_queue_11642))
;

x11633_11643.om$core$IRootProperties$_get_property$arity$3 = ((function (x11633_11643,properties_11640,listeners_11641,render_queue_11642){
return (function (_,id,k){
var ___$1 = this;
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(properties_11640) : cljs.core.deref.call(null,properties_11640)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,k], null));
});})(x11633_11643,properties_11640,listeners_11641,render_queue_11642))
;

x11633_11643.om$core$INotify$ = true;

x11633_11643.om$core$INotify$_listen_BANG_$arity$3 = ((function (x11633_11643,properties_11640,listeners_11641,render_queue_11642){
return (function (this$,key__$1,tx_listen__$1){
var this$__$1 = this;
if((tx_listen__$1 == null)){
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(listeners_11641,cljs.core.assoc,key__$1,tx_listen__$1);
}

return this$__$1;
});})(x11633_11643,properties_11640,listeners_11641,render_queue_11642))
;

x11633_11643.om$core$INotify$_unlisten_BANG_$arity$2 = ((function (x11633_11643,properties_11640,listeners_11641,render_queue_11642){
return (function (this$,key__$1){
var this$__$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(listeners_11641,cljs.core.dissoc,key__$1);

return this$__$1;
});})(x11633_11643,properties_11640,listeners_11641,render_queue_11642))
;

x11633_11643.om$core$INotify$_notify_BANG_$arity$3 = ((function (x11633_11643,properties_11640,listeners_11641,render_queue_11642){
return (function (this$,tx_data,root_cursor){
var this$__$1 = this;
var seq__11634_11644 = cljs.core.seq((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(listeners_11641) : cljs.core.deref.call(null,listeners_11641)));
var chunk__11635_11645 = null;
var count__11636_11646 = (0);
var i__11637_11647 = (0);
while(true){
if((i__11637_11647 < count__11636_11646)){
var vec__11638_11648 = chunk__11635_11645.cljs$core$IIndexed$_nth$arity$2(null,i__11637_11647);
var __11649 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11638_11648,(0),null);
var f_11650 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11638_11648,(1),null);
(f_11650.cljs$core$IFn$_invoke$arity$2 ? f_11650.cljs$core$IFn$_invoke$arity$2(tx_data,root_cursor) : f_11650.call(null,tx_data,root_cursor));

var G__11651 = seq__11634_11644;
var G__11652 = chunk__11635_11645;
var G__11653 = count__11636_11646;
var G__11654 = (i__11637_11647 + (1));
seq__11634_11644 = G__11651;
chunk__11635_11645 = G__11652;
count__11636_11646 = G__11653;
i__11637_11647 = G__11654;
continue;
} else {
var temp__4425__auto___11655 = cljs.core.seq(seq__11634_11644);
if(temp__4425__auto___11655){
var seq__11634_11656__$1 = temp__4425__auto___11655;
if(cljs.core.chunked_seq_QMARK_(seq__11634_11656__$1)){
var c__5891__auto___11657 = cljs.core.chunk_first(seq__11634_11656__$1);
var G__11658 = cljs.core.chunk_rest(seq__11634_11656__$1);
var G__11659 = c__5891__auto___11657;
var G__11660 = cljs.core.count(c__5891__auto___11657);
var G__11661 = (0);
seq__11634_11644 = G__11658;
chunk__11635_11645 = G__11659;
count__11636_11646 = G__11660;
i__11637_11647 = G__11661;
continue;
} else {
var vec__11639_11662 = cljs.core.first(seq__11634_11656__$1);
var __11663 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11639_11662,(0),null);
var f_11664 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11639_11662,(1),null);
(f_11664.cljs$core$IFn$_invoke$arity$2 ? f_11664.cljs$core$IFn$_invoke$arity$2(tx_data,root_cursor) : f_11664.call(null,tx_data,root_cursor));

var G__11665 = cljs.core.next(seq__11634_11656__$1);
var G__11666 = null;
var G__11667 = (0);
var G__11668 = (0);
seq__11634_11644 = G__11665;
chunk__11635_11645 = G__11666;
count__11636_11646 = G__11667;
i__11637_11647 = G__11668;
continue;
}
} else {
}
}
break;
}

return this$__$1;
});})(x11633_11643,properties_11640,listeners_11641,render_queue_11642))
;

x11633_11643.om$core$IRenderQueue$ = true;

x11633_11643.om$core$IRenderQueue$_get_queue$arity$1 = ((function (x11633_11643,properties_11640,listeners_11641,render_queue_11642){
return (function (this$){
var this$__$1 = this;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(render_queue_11642) : cljs.core.deref.call(null,render_queue_11642));
});})(x11633_11643,properties_11640,listeners_11641,render_queue_11642))
;

x11633_11643.om$core$IRenderQueue$_queue_render_BANG_$arity$2 = ((function (x11633_11643,properties_11640,listeners_11641,render_queue_11642){
return (function (this$,c){
var this$__$1 = this;
if(cljs.core.contains_QMARK_((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(render_queue_11642) : cljs.core.deref.call(null,render_queue_11642)),c)){
return null;
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(render_queue_11642,cljs.core.conj,c);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(this$__$1,cljs.core.identity);
}
});})(x11633_11643,properties_11640,listeners_11641,render_queue_11642))
;

x11633_11643.om$core$IRenderQueue$_empty_queue_BANG_$arity$1 = ((function (x11633_11643,properties_11640,listeners_11641,render_queue_11642){
return (function (this$){
var this$__$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(render_queue_11642,cljs.core.empty);
});})(x11633_11643,properties_11640,listeners_11641,render_queue_11642))
;

}

return om.core._listen_BANG_(state,key,tx_listen);
});
om.core.tear_down = (function om$core$tear_down(state,key){
return om.core._unlisten_BANG_(state,key);
});
om.core.tag_root_key = (function om$core$tag_root_key(cursor,root_key){
if(cljs.core.truth_(om.core.cursor_QMARK_(cursor))){
var x11674 = cljs.core.clone(cursor);
x11674.cljs$core$ICloneable$ = true;

x11674.cljs$core$ICloneable$_clone$arity$1 = ((function (x11674){
return (function (this$){
var this$__$1 = this;
return om$core$tag_root_key(cljs.core.clone(cursor),root_key);
});})(x11674))
;

x11674.om$core$IAdapt$ = true;

x11674.om$core$IAdapt$_adapt$arity$2 = ((function (x11674){
return (function (this$,other){
var this$__$1 = this;
return om$core$tag_root_key(om.core.adapt(cursor,other),root_key);
});})(x11674))
;

x11674.om$core$IRootKey$ = true;

x11674.om$core$IRootKey$_root_key$arity$1 = ((function (x11674){
return (function (this$){
var this$__$1 = this;
return root_key;
});})(x11674))
;

return x11674;
} else {
return cursor;
}
});
/**
 * Take a component constructor function f, value an immutable tree of
 * associative data structures optionally an wrapped in an IAtom
 * instance, and a map of options and installs an Om/React render
 * loop.
 * 
 * f must return an instance that at a minimum implements IRender or
 * IRenderState (it may implement other React life cycle protocols). f
 * must take at least two arguments, the root cursor and the owning pure
 * node. A cursor is just the original data wrapped in an ICursor
 * instance which maintains path information. Only one root render
 * loop allowed per target element. om.core/root is idempotent, if
 * called again on the same target element the previous render loop
 * will be replaced.
 * 
 * Options may also include any key allowed by om.core/build to
 * customize f. In addition om.core/root supports the following
 * special options:
 * 
 * :target     - (required) a DOM element. 
 * :shared     - data to be shared by all components, see om.core/get-shared
 * :tx-listen  - a function that will listen in in transactions, should
 *               take 2 arguments - the first a map containing the
 *               path, old and new state at path, old and new global
 *               state, and transaction tag if provided.
 * :instrument - a function of three arguments that if provided will
 *               intercept all calls to om.core/build. This function should
 *               correspond to the three arity version of om.core/build.
 * :adapt      - a function to adapt the root cursor
 * :raf        - override requestAnimationFrame based rendering. If
 *               false setTimeout will be use. If given a function
 *               will be invoked instead.
 * 
 * Example:
 * 
 * (root
 *   (fn [data owner]
 *     ...)
 *   {:message :hello}
 *   {:target js/document.body})
 */
om.core.root = (function om$core$root(f,value,p__11675){
var map__11744 = p__11675;
var map__11744__$1 = ((((!((map__11744 == null)))?((((map__11744.cljs$lang$protocol_mask$partition0$ & (64))) || (map__11744.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__11744):map__11744);
var options = map__11744__$1;
var target = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11744__$1,cljs.core.cst$kw$target);
var tx_listen = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11744__$1,cljs.core.cst$kw$tx_DASH_listen);
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11744__$1,cljs.core.cst$kw$path);
var instrument = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11744__$1,cljs.core.cst$kw$instrument);
var descriptor = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11744__$1,cljs.core.cst$kw$descriptor);
var adapt = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11744__$1,cljs.core.cst$kw$adapt);
var raf = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11744__$1,cljs.core.cst$kw$raf);
if(cljs.core.ifn_QMARK_(f)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("First argument must be a function"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(cljs.core.cst$sym$ifn_QMARK_,cljs.core.cst$sym$f)], 0)))].join('')));
}

if(!((target == null))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("No target specified to om.core/root"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(cljs.core.cst$sym$not,cljs.core.list(cljs.core.cst$sym$nil_QMARK_,cljs.core.cst$sym$target))], 0)))].join('')));
}

var roots_SINGLEQUOTE__11812 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(om.core.roots) : cljs.core.deref.call(null,om.core.roots));
if(cljs.core.contains_QMARK_(roots_SINGLEQUOTE__11812,target)){
cljs.core.get.cljs$core$IFn$_invoke$arity$2(roots_SINGLEQUOTE__11812,target).call(null);
} else {
}

var watch_key = cljs.core.gensym.cljs$core$IFn$_invoke$arity$0();
var state = ((((!((value == null)))?((((value.cljs$lang$protocol_mask$partition1$ & (16384))) || (value.cljs$core$IAtom$))?true:(((!value.cljs$lang$protocol_mask$partition1$))?cljs.core.native_satisfies_QMARK_(cljs.core.IAtom,value):false)):cljs.core.native_satisfies_QMARK_(cljs.core.IAtom,value)))?value:(cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(value) : cljs.core.atom.call(null,value)));
var state__$1 = om.core.setup(state,watch_key,tx_listen);
var adapt__$1 = (function (){var or__5088__auto__ = adapt;
if(cljs.core.truth_(or__5088__auto__)){
return or__5088__auto__;
} else {
return cljs.core.identity;
}
})();
var m = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(options,cljs.core.cst$kw$target,cljs.core.array_seq([cljs.core.cst$kw$tx_DASH_listen,cljs.core.cst$kw$path,cljs.core.cst$kw$adapt,cljs.core.cst$kw$raf], 0));
var ret = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null) : cljs.core.atom.call(null,null));
var rootf = ((function (watch_key,state,state__$1,adapt__$1,m,ret,map__11744,map__11744__$1,options,target,tx_listen,path,instrument,descriptor,adapt,raf){
return (function om$core$root_$_rootf(){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(om.core.refresh_set,cljs.core.disj,om$core$root_$_rootf);

var value__$1 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(state__$1) : cljs.core.deref.call(null,state__$1));
var cursor = (function (){var G__11778 = om.core.tag_root_key((((path == null))?om.core.to_cursor.cljs$core$IFn$_invoke$arity$3(value__$1,state__$1,cljs.core.PersistentVector.EMPTY):om.core.to_cursor.cljs$core$IFn$_invoke$arity$3(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(value__$1,path),state__$1,path)),watch_key);
return (adapt__$1.cljs$core$IFn$_invoke$arity$1 ? adapt__$1.cljs$core$IFn$_invoke$arity$1(G__11778) : adapt__$1.call(null,G__11778));
})();
if(cljs.core.truth_(om.core._get_property(state__$1,watch_key,cljs.core.cst$kw$skip_DASH_render_DASH_root))){
} else {
om.core._set_property_BANG_(state__$1,watch_key,cljs.core.cst$kw$skip_DASH_render_DASH_root,true);

var c_11813 = om.dom.render((function (){var _STAR_descriptor_STAR_11779 = om.core._STAR_descriptor_STAR_;
var _STAR_instrument_STAR_11780 = om.core._STAR_instrument_STAR_;
var _STAR_state_STAR_11781 = om.core._STAR_state_STAR_;
var _STAR_root_key_STAR_11782 = om.core._STAR_root_key_STAR_;
om.core._STAR_descriptor_STAR_ = descriptor;

om.core._STAR_instrument_STAR_ = instrument;

om.core._STAR_state_STAR_ = state__$1;

om.core._STAR_root_key_STAR_ = watch_key;

try{return om.core.build.cljs$core$IFn$_invoke$arity$3(f,cursor,m);
}finally {om.core._STAR_root_key_STAR_ = _STAR_root_key_STAR_11782;

om.core._STAR_state_STAR_ = _STAR_state_STAR_11781;

om.core._STAR_instrument_STAR_ = _STAR_instrument_STAR_11780;

om.core._STAR_descriptor_STAR_ = _STAR_descriptor_STAR_11779;
}})(),target);
if(((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(ret) : cljs.core.deref.call(null,ret)) == null)){
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(ret,c_11813) : cljs.core.reset_BANG_.call(null,ret,c_11813));
} else {
}
}

var queue_11814 = om.core._get_queue(state__$1);
om.core._empty_queue_BANG_(state__$1);

if(cljs.core.empty_QMARK_(queue_11814)){
} else {
var seq__11783_11815 = cljs.core.seq(queue_11814);
var chunk__11784_11816 = null;
var count__11785_11817 = (0);
var i__11786_11818 = (0);
while(true){
if((i__11786_11818 < count__11785_11817)){
var c_11819 = chunk__11784_11816.cljs$core$IIndexed$_nth$arity$2(null,i__11786_11818);
if(cljs.core.truth_(c_11819.isMounted())){
var temp__4425__auto___11820 = (c_11819.state["__om_next_cursor"]);
if(cljs.core.truth_(temp__4425__auto___11820)){
var next_props_11821 = temp__4425__auto___11820;
(c_11819.props["__om_cursor"] = next_props_11821);

(c_11819.state["__om_next_cursor"] = null);
} else {
}

if(cljs.core.truth_((function (){var or__5088__auto__ = !((function (){var G__11788 = om.core.children(c_11819);
if(!((G__11788 == null))){
if((false) || (G__11788.om$core$ICheckState$)){
return true;
} else {
if((!G__11788.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(om.core.ICheckState,G__11788);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(om.core.ICheckState,G__11788);
}
})());
if(or__5088__auto__){
return or__5088__auto__;
} else {
return c_11819.shouldComponentUpdate(c_11819.props,c_11819.state);
}
})())){
c_11819.forceUpdate();
} else {
}
} else {
}

var G__11822 = seq__11783_11815;
var G__11823 = chunk__11784_11816;
var G__11824 = count__11785_11817;
var G__11825 = (i__11786_11818 + (1));
seq__11783_11815 = G__11822;
chunk__11784_11816 = G__11823;
count__11785_11817 = G__11824;
i__11786_11818 = G__11825;
continue;
} else {
var temp__4425__auto___11826 = cljs.core.seq(seq__11783_11815);
if(temp__4425__auto___11826){
var seq__11783_11827__$1 = temp__4425__auto___11826;
if(cljs.core.chunked_seq_QMARK_(seq__11783_11827__$1)){
var c__5891__auto___11828 = cljs.core.chunk_first(seq__11783_11827__$1);
var G__11829 = cljs.core.chunk_rest(seq__11783_11827__$1);
var G__11830 = c__5891__auto___11828;
var G__11831 = cljs.core.count(c__5891__auto___11828);
var G__11832 = (0);
seq__11783_11815 = G__11829;
chunk__11784_11816 = G__11830;
count__11785_11817 = G__11831;
i__11786_11818 = G__11832;
continue;
} else {
var c_11833 = cljs.core.first(seq__11783_11827__$1);
if(cljs.core.truth_(c_11833.isMounted())){
var temp__4425__auto___11834__$1 = (c_11833.state["__om_next_cursor"]);
if(cljs.core.truth_(temp__4425__auto___11834__$1)){
var next_props_11835 = temp__4425__auto___11834__$1;
(c_11833.props["__om_cursor"] = next_props_11835);

(c_11833.state["__om_next_cursor"] = null);
} else {
}

if(cljs.core.truth_((function (){var or__5088__auto__ = !((function (){var G__11790 = om.core.children(c_11833);
if(!((G__11790 == null))){
if((false) || (G__11790.om$core$ICheckState$)){
return true;
} else {
if((!G__11790.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(om.core.ICheckState,G__11790);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(om.core.ICheckState,G__11790);
}
})());
if(or__5088__auto__){
return or__5088__auto__;
} else {
return c_11833.shouldComponentUpdate(c_11833.props,c_11833.state);
}
})())){
c_11833.forceUpdate();
} else {
}
} else {
}

var G__11836 = cljs.core.next(seq__11783_11827__$1);
var G__11837 = null;
var G__11838 = (0);
var G__11839 = (0);
seq__11783_11815 = G__11836;
chunk__11784_11816 = G__11837;
count__11785_11817 = G__11838;
i__11786_11818 = G__11839;
continue;
}
} else {
}
}
break;
}
}

var _refs_11840 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(om.core._refs) : cljs.core.deref.call(null,om.core._refs));
if(cljs.core.empty_QMARK_(_refs_11840)){
} else {
var seq__11791_11841 = cljs.core.seq(_refs_11840);
var chunk__11792_11842 = null;
var count__11793_11843 = (0);
var i__11794_11844 = (0);
while(true){
if((i__11794_11844 < count__11793_11843)){
var vec__11795_11845 = chunk__11792_11842.cljs$core$IIndexed$_nth$arity$2(null,i__11794_11844);
var path_11846__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11795_11845,(0),null);
var cs_11847 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11795_11845,(1),null);
var cs_11848__$1 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cs_11847) : cljs.core.deref.call(null,cs_11847));
var seq__11796_11849 = cljs.core.seq(cs_11848__$1);
var chunk__11797_11850 = null;
var count__11798_11851 = (0);
var i__11799_11852 = (0);
while(true){
if((i__11799_11852 < count__11798_11851)){
var vec__11800_11853 = chunk__11797_11850.cljs$core$IIndexed$_nth$arity$2(null,i__11799_11852);
var id_11854 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11800_11853,(0),null);
var c_11855 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11800_11853,(1),null);
if(cljs.core.truth_(c_11855.shouldComponentUpdate(c_11855.props,c_11855.state))){
c_11855.forceUpdate();
} else {
}

var G__11856 = seq__11796_11849;
var G__11857 = chunk__11797_11850;
var G__11858 = count__11798_11851;
var G__11859 = (i__11799_11852 + (1));
seq__11796_11849 = G__11856;
chunk__11797_11850 = G__11857;
count__11798_11851 = G__11858;
i__11799_11852 = G__11859;
continue;
} else {
var temp__4425__auto___11860 = cljs.core.seq(seq__11796_11849);
if(temp__4425__auto___11860){
var seq__11796_11861__$1 = temp__4425__auto___11860;
if(cljs.core.chunked_seq_QMARK_(seq__11796_11861__$1)){
var c__5891__auto___11862 = cljs.core.chunk_first(seq__11796_11861__$1);
var G__11863 = cljs.core.chunk_rest(seq__11796_11861__$1);
var G__11864 = c__5891__auto___11862;
var G__11865 = cljs.core.count(c__5891__auto___11862);
var G__11866 = (0);
seq__11796_11849 = G__11863;
chunk__11797_11850 = G__11864;
count__11798_11851 = G__11865;
i__11799_11852 = G__11866;
continue;
} else {
var vec__11801_11867 = cljs.core.first(seq__11796_11861__$1);
var id_11868 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11801_11867,(0),null);
var c_11869 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11801_11867,(1),null);
if(cljs.core.truth_(c_11869.shouldComponentUpdate(c_11869.props,c_11869.state))){
c_11869.forceUpdate();
} else {
}

var G__11870 = cljs.core.next(seq__11796_11861__$1);
var G__11871 = null;
var G__11872 = (0);
var G__11873 = (0);
seq__11796_11849 = G__11870;
chunk__11797_11850 = G__11871;
count__11798_11851 = G__11872;
i__11799_11852 = G__11873;
continue;
}
} else {
}
}
break;
}

var G__11874 = seq__11791_11841;
var G__11875 = chunk__11792_11842;
var G__11876 = count__11793_11843;
var G__11877 = (i__11794_11844 + (1));
seq__11791_11841 = G__11874;
chunk__11792_11842 = G__11875;
count__11793_11843 = G__11876;
i__11794_11844 = G__11877;
continue;
} else {
var temp__4425__auto___11878 = cljs.core.seq(seq__11791_11841);
if(temp__4425__auto___11878){
var seq__11791_11879__$1 = temp__4425__auto___11878;
if(cljs.core.chunked_seq_QMARK_(seq__11791_11879__$1)){
var c__5891__auto___11880 = cljs.core.chunk_first(seq__11791_11879__$1);
var G__11881 = cljs.core.chunk_rest(seq__11791_11879__$1);
var G__11882 = c__5891__auto___11880;
var G__11883 = cljs.core.count(c__5891__auto___11880);
var G__11884 = (0);
seq__11791_11841 = G__11881;
chunk__11792_11842 = G__11882;
count__11793_11843 = G__11883;
i__11794_11844 = G__11884;
continue;
} else {
var vec__11802_11885 = cljs.core.first(seq__11791_11879__$1);
var path_11886__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11802_11885,(0),null);
var cs_11887 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11802_11885,(1),null);
var cs_11888__$1 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(cs_11887) : cljs.core.deref.call(null,cs_11887));
var seq__11803_11889 = cljs.core.seq(cs_11888__$1);
var chunk__11804_11890 = null;
var count__11805_11891 = (0);
var i__11806_11892 = (0);
while(true){
if((i__11806_11892 < count__11805_11891)){
var vec__11807_11893 = chunk__11804_11890.cljs$core$IIndexed$_nth$arity$2(null,i__11806_11892);
var id_11894 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11807_11893,(0),null);
var c_11895 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11807_11893,(1),null);
if(cljs.core.truth_(c_11895.shouldComponentUpdate(c_11895.props,c_11895.state))){
c_11895.forceUpdate();
} else {
}

var G__11896 = seq__11803_11889;
var G__11897 = chunk__11804_11890;
var G__11898 = count__11805_11891;
var G__11899 = (i__11806_11892 + (1));
seq__11803_11889 = G__11896;
chunk__11804_11890 = G__11897;
count__11805_11891 = G__11898;
i__11806_11892 = G__11899;
continue;
} else {
var temp__4425__auto___11900__$1 = cljs.core.seq(seq__11803_11889);
if(temp__4425__auto___11900__$1){
var seq__11803_11901__$1 = temp__4425__auto___11900__$1;
if(cljs.core.chunked_seq_QMARK_(seq__11803_11901__$1)){
var c__5891__auto___11902 = cljs.core.chunk_first(seq__11803_11901__$1);
var G__11903 = cljs.core.chunk_rest(seq__11803_11901__$1);
var G__11904 = c__5891__auto___11902;
var G__11905 = cljs.core.count(c__5891__auto___11902);
var G__11906 = (0);
seq__11803_11889 = G__11903;
chunk__11804_11890 = G__11904;
count__11805_11891 = G__11905;
i__11806_11892 = G__11906;
continue;
} else {
var vec__11808_11907 = cljs.core.first(seq__11803_11901__$1);
var id_11908 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11808_11907,(0),null);
var c_11909 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11808_11907,(1),null);
if(cljs.core.truth_(c_11909.shouldComponentUpdate(c_11909.props,c_11909.state))){
c_11909.forceUpdate();
} else {
}

var G__11910 = cljs.core.next(seq__11803_11901__$1);
var G__11911 = null;
var G__11912 = (0);
var G__11913 = (0);
seq__11803_11889 = G__11910;
chunk__11804_11890 = G__11911;
count__11805_11891 = G__11912;
i__11806_11892 = G__11913;
continue;
}
} else {
}
}
break;
}

var G__11914 = cljs.core.next(seq__11791_11879__$1);
var G__11915 = null;
var G__11916 = (0);
var G__11917 = (0);
seq__11791_11841 = G__11914;
chunk__11792_11842 = G__11915;
count__11793_11843 = G__11916;
i__11794_11844 = G__11917;
continue;
}
} else {
}
}
break;
}
}

return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(ret) : cljs.core.deref.call(null,ret));
});})(watch_key,state,state__$1,adapt__$1,m,ret,map__11744,map__11744__$1,options,target,tx_listen,path,instrument,descriptor,adapt,raf))
;
cljs.core.add_watch(state__$1,watch_key,((function (watch_key,state,state__$1,adapt__$1,m,ret,rootf,map__11744,map__11744__$1,options,target,tx_listen,path,instrument,descriptor,adapt,raf){
return (function (_,___$1,o,n){
if((cljs.core.not(om.core._get_property(state__$1,watch_key,cljs.core.cst$kw$ignore))) && (!((o === n)))){
om.core._set_property_BANG_(state__$1,watch_key,cljs.core.cst$kw$skip_DASH_render_DASH_root,false);
} else {
}

om.core._set_property_BANG_(state__$1,watch_key,cljs.core.cst$kw$ignore,false);

if(cljs.core.contains_QMARK_((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(om.core.refresh_set) : cljs.core.deref.call(null,om.core.refresh_set)),rootf)){
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(om.core.refresh_set,cljs.core.conj,rootf);
}

if(cljs.core.truth_(om.core.refresh_queued)){
return null;
} else {
om.core.refresh_queued = true;

if(cljs.core.fn_QMARK_(raf)){
return (raf.cljs$core$IFn$_invoke$arity$0 ? raf.cljs$core$IFn$_invoke$arity$0() : raf.call(null));
} else {
if((raf === false) || (!(typeof requestAnimationFrame !== 'undefined'))){
var G__11809 = ((function (watch_key,state,state__$1,adapt__$1,m,ret,rootf,map__11744,map__11744__$1,options,target,tx_listen,path,instrument,descriptor,adapt,raf){
return (function (){
return om.core.render_all.cljs$core$IFn$_invoke$arity$1(state__$1);
});})(watch_key,state,state__$1,adapt__$1,m,ret,rootf,map__11744,map__11744__$1,options,target,tx_listen,path,instrument,descriptor,adapt,raf))
;
var G__11810 = (16);
return setTimeout(G__11809,G__11810);
} else {
var G__11811 = ((function (watch_key,state,state__$1,adapt__$1,m,ret,rootf,map__11744,map__11744__$1,options,target,tx_listen,path,instrument,descriptor,adapt,raf){
return (function (){
return om.core.render_all.cljs$core$IFn$_invoke$arity$1(state__$1);
});})(watch_key,state,state__$1,adapt__$1,m,ret,rootf,map__11744,map__11744__$1,options,target,tx_listen,path,instrument,descriptor,adapt,raf))
;
return requestAnimationFrame(G__11811);

}
}
}
});})(watch_key,state,state__$1,adapt__$1,m,ret,rootf,map__11744,map__11744__$1,options,target,tx_listen,path,instrument,descriptor,adapt,raf))
);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(om.core.roots,cljs.core.assoc,target,((function (watch_key,state,state__$1,adapt__$1,m,ret,rootf,map__11744,map__11744__$1,options,target,tx_listen,path,instrument,descriptor,adapt,raf){
return (function (){
om.core._remove_properties_BANG_(state__$1,watch_key);

cljs.core.remove_watch(state__$1,watch_key);

om.core.tear_down(state__$1,watch_key);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(om.core.refresh_set,cljs.core.disj,rootf);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(om.core.roots,cljs.core.dissoc,target);

return ReactDOM.unmountComponentAtNode(target);
});})(watch_key,state,state__$1,adapt__$1,m,ret,rootf,map__11744,map__11744__$1,options,target,tx_listen,path,instrument,descriptor,adapt,raf))
);

return rootf();
});
/**
 * Given a DOM target remove its render loop if one exists.
 */
om.core.detach_root = (function om$core$detach_root(target){
if(cljs.core.truth_(goog.dom.isElement(target))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(cljs.core.cst$sym$gdom_SLASH_isElement,cljs.core.cst$sym$target)], 0)))].join('')));
}

var temp__4425__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(om.core.roots) : cljs.core.deref.call(null,om.core.roots)),target);
if(cljs.core.truth_(temp__4425__auto__)){
var f = temp__4425__auto__;
return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
} else {
return null;
}
});
om.core.transactable_QMARK_ = (function om$core$transactable_QMARK_(x){
if(!((x == null))){
if((false) || (x.om$core$ITransact$)){
return true;
} else {
if((!x.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(om.core.ITransact,x);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(om.core.ITransact,x);
}
});
/**
 * Given a tag, a cursor, an optional list of keys ks, mutate the tree
 *   at the path specified by the cursor + the optional keys by applying
 *   f to the specified value in the tree. An Om re-render will be
 *   triggered.
 */
om.core.transact_BANG_ = (function om$core$transact_BANG_(var_args){
var args11920 = [];
var len__6146__auto___11923 = arguments.length;
var i__6147__auto___11924 = (0);
while(true){
if((i__6147__auto___11924 < len__6146__auto___11923)){
args11920.push((arguments[i__6147__auto___11924]));

var G__11925 = (i__6147__auto___11924 + (1));
i__6147__auto___11924 = G__11925;
continue;
} else {
}
break;
}

var G__11922 = args11920.length;
switch (G__11922) {
case 2:
return om.core.transact_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.core.transact_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return om.core.transact_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11920.length)].join('')));

}
});

om.core.transact_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (cursor,f){
return om.core.transact_BANG_.cljs$core$IFn$_invoke$arity$4(cursor,cljs.core.PersistentVector.EMPTY,f,null);
});

om.core.transact_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (cursor,korks,f){
return om.core.transact_BANG_.cljs$core$IFn$_invoke$arity$4(cursor,korks,f,null);
});

om.core.transact_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (cursor,korks,f,tag){
if(cljs.core.truth_(om.core.transactable_QMARK_(cursor))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(cljs.core.cst$sym$transactable_QMARK_,cljs.core.cst$sym$cursor)], 0)))].join('')));
}

if(cljs.core.ifn_QMARK_(f)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(cljs.core.cst$sym$ifn_QMARK_,cljs.core.cst$sym$f)], 0)))].join('')));
}

var korks__$1 = (((korks == null))?cljs.core.PersistentVector.EMPTY:((cljs.core.sequential_QMARK_(korks))?korks:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [korks], null)
));
return om.core._transact_BANG_(cursor,korks__$1,f,tag);
});

om.core.transact_BANG_.cljs$lang$maxFixedArity = 4;
/**
 * Like transact! but no function provided, instead a replacement
 *   value is given.
 */
om.core.update_BANG_ = (function om$core$update_BANG_(var_args){
var args11927 = [];
var len__6146__auto___11930 = arguments.length;
var i__6147__auto___11931 = (0);
while(true){
if((i__6147__auto___11931 < len__6146__auto___11930)){
args11927.push((arguments[i__6147__auto___11931]));

var G__11932 = (i__6147__auto___11931 + (1));
i__6147__auto___11931 = G__11932;
continue;
} else {
}
break;
}

var G__11929 = args11927.length;
switch (G__11929) {
case 2:
return om.core.update_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return om.core.update_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11927.length)].join('')));

}
});

om.core.update_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (cursor,v){
if(cljs.core.truth_(om.core.cursor_QMARK_(cursor))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(cljs.core.cst$sym$cursor_QMARK_,cljs.core.cst$sym$cursor)], 0)))].join('')));
}

return om.core.transact_BANG_.cljs$core$IFn$_invoke$arity$4(cursor,cljs.core.PersistentVector.EMPTY,(function (_){
return v;
}),null);
});

om.core.update_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (cursor,korks,v){
if(cljs.core.truth_(om.core.cursor_QMARK_(cursor))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(cljs.core.cst$sym$cursor_QMARK_,cljs.core.cst$sym$cursor)], 0)))].join('')));
}

return om.core.transact_BANG_.cljs$core$IFn$_invoke$arity$4(cursor,korks,(function (_){
return v;
}),null);
});

om.core.update_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (cursor,korks,v,tag){
if(cljs.core.truth_(om.core.cursor_QMARK_(cursor))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(cljs.core.cst$sym$cursor_QMARK_,cljs.core.cst$sym$cursor)], 0)))].join('')));
}

return om.core.transact_BANG_.cljs$core$IFn$_invoke$arity$4(cursor,korks,(function (_){
return v;
}),tag);
});

om.core.update_BANG_.cljs$lang$maxFixedArity = 4;
/**
 * EXPERIMENTAL: Like transact! but does not schedule a re-render or
 *   create a transact event.
 */
om.core.commit_BANG_ = (function om$core$commit_BANG_(cursor,korks,f){
if(cljs.core.truth_(om.core.cursor_QMARK_(cursor))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(cljs.core.cst$sym$cursor_QMARK_,cljs.core.cst$sym$cursor)], 0)))].join('')));
}

if(cljs.core.ifn_QMARK_(f)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(cljs.core.cst$sym$ifn_QMARK_,cljs.core.cst$sym$f)], 0)))].join('')));
}

var key = ((((!((cursor == null)))?(((false) || (cursor.om$core$IRootKey$))?true:(((!cursor.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(om.core.IRootKey,cursor):false)):cljs.core.native_satisfies_QMARK_(om.core.IRootKey,cursor)))?om.core._root_key(cursor):null);
var app_state = om.core.state(cursor);
var korks__$1 = (((korks == null))?cljs.core.PersistentVector.EMPTY:((cljs.core.sequential_QMARK_(korks))?korks:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [korks], null)
));
var cpath = om.core.path(cursor);
var rpath = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cpath,korks__$1);
if(cljs.core.truth_(key)){
om.core._set_property_BANG_(app_state,key,cljs.core.cst$kw$ignore,true);
} else {
}

if(cljs.core.empty_QMARK_(rpath)){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(app_state,f);
} else {
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app_state,cljs.core.update_in,rpath,f);
}
});
/**
 * A helper function to get at React DOM refs. Given a owning pure node
 *   extract the DOM ref specified by name.
 */
om.core.get_node = (function om$core$get_node(var_args){
var args11936 = [];
var len__6146__auto___11940 = arguments.length;
var i__6147__auto___11941 = (0);
while(true){
if((i__6147__auto___11941 < len__6146__auto___11940)){
args11936.push((arguments[i__6147__auto___11941]));

var G__11942 = (i__6147__auto___11941 + (1));
i__6147__auto___11941 = G__11942;
continue;
} else {
}
break;
}

var G__11938 = args11936.length;
switch (G__11938) {
case 1:
return om.core.get_node.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om.core.get_node.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11936.length)].join('')));

}
});

om.core.get_node.cljs$core$IFn$_invoke$arity$1 = (function (owner){
return owner.getDOMNode();
});

om.core.get_node.cljs$core$IFn$_invoke$arity$2 = (function (owner,name){
if(typeof name === 'string'){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(cljs.core.cst$sym$string_QMARK_,cljs.core.cst$sym$name)], 0)))].join('')));
}

var G__11939 = owner.refs;
var G__11939__$1 = (((G__11939 == null))?null:(G__11939[name]));
var G__11939__$2 = (((G__11939__$1 == null))?null:G__11939__$1.getDOMNode());
return G__11939__$2;
});

om.core.get_node.cljs$lang$maxFixedArity = 2;
/**
 * A helper function to get at React refs. Given an owning pure node extract
 *   the ref specified by name.
 */
om.core.get_ref = (function om$core$get_ref(owner,name){
if(cljs.core.truth_(om.core.component_QMARK_(owner))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(cljs.core.cst$sym$component_QMARK_,cljs.core.cst$sym$owner)], 0)))].join('')));
}

if(typeof name === 'string'){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(cljs.core.cst$sym$string_QMARK_,cljs.core.cst$sym$name)], 0)))].join('')));
}

var G__11945 = owner.refs;
var G__11945__$1 = (((G__11945 == null))?null:goog.object.get(G__11945,name));
return G__11945__$1;
});
/**
 * Return true if the backing React component is mounted into the DOM.
 */
om.core.mounted_QMARK_ = (function om$core$mounted_QMARK_(owner){
return owner.isMounted();
});
/**
 * Takes a pure owning component, a sequential list of keys and value and
 * sets the state of the component. Conceptually analagous to React
 * setState. Will schedule an Om re-render.
 */
om.core.set_state_BANG_ = (function om$core$set_state_BANG_(var_args){
var args11946 = [];
var len__6146__auto___11949 = arguments.length;
var i__6147__auto___11950 = (0);
while(true){
if((i__6147__auto___11950 < len__6146__auto___11949)){
args11946.push((arguments[i__6147__auto___11950]));

var G__11951 = (i__6147__auto___11950 + (1));
i__6147__auto___11950 = G__11951;
continue;
} else {
}
break;
}

var G__11948 = args11946.length;
switch (G__11948) {
case 2:
return om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11946.length)].join('')));

}
});

om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (owner,v){
if(cljs.core.truth_(om.core.component_QMARK_(owner))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(cljs.core.cst$sym$component_QMARK_,cljs.core.cst$sym$owner)], 0)))].join('')));
}

return om.core._set_state_BANG_.cljs$core$IFn$_invoke$arity$3(owner,v,true);
});

om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (owner,korks,v){
if(cljs.core.truth_(om.core.component_QMARK_(owner))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(cljs.core.cst$sym$component_QMARK_,cljs.core.cst$sym$owner)], 0)))].join('')));
}

var ks = ((cljs.core.sequential_QMARK_(korks))?korks:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [korks], null));
return om.core._set_state_BANG_.cljs$core$IFn$_invoke$arity$4(owner,ks,v,true);
});

om.core.set_state_BANG_.cljs$lang$maxFixedArity = 3;
/**
 * EXPERIMENTAL: Same as set-state! but does not trigger re-render.
 */
om.core.set_state_nr_BANG_ = (function om$core$set_state_nr_BANG_(var_args){
var args11953 = [];
var len__6146__auto___11956 = arguments.length;
var i__6147__auto___11957 = (0);
while(true){
if((i__6147__auto___11957 < len__6146__auto___11956)){
args11953.push((arguments[i__6147__auto___11957]));

var G__11958 = (i__6147__auto___11957 + (1));
i__6147__auto___11957 = G__11958;
continue;
} else {
}
break;
}

var G__11955 = args11953.length;
switch (G__11955) {
case 2:
return om.core.set_state_nr_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.core.set_state_nr_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11953.length)].join('')));

}
});

om.core.set_state_nr_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (owner,v){
if(cljs.core.truth_(om.core.component_QMARK_(owner))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(cljs.core.cst$sym$component_QMARK_,cljs.core.cst$sym$owner)], 0)))].join('')));
}

return om.core._set_state_BANG_.cljs$core$IFn$_invoke$arity$3(owner,v,false);
});

om.core.set_state_nr_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (owner,korks,v){
if(cljs.core.truth_(om.core.component_QMARK_(owner))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(cljs.core.cst$sym$component_QMARK_,cljs.core.cst$sym$owner)], 0)))].join('')));
}

var ks = ((cljs.core.sequential_QMARK_(korks))?korks:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [korks], null));
return om.core._set_state_BANG_.cljs$core$IFn$_invoke$arity$4(owner,ks,v,false);
});

om.core.set_state_nr_BANG_.cljs$lang$maxFixedArity = 3;
/**
 * Takes a pure owning component, a sequential list of keys and a
 * function to transition the state of the component. Conceptually
 * analagous to React setState. Will schedule an Om re-render.
 */
om.core.update_state_BANG_ = (function om$core$update_state_BANG_(var_args){
var args11960 = [];
var len__6146__auto___11965 = arguments.length;
var i__6147__auto___11966 = (0);
while(true){
if((i__6147__auto___11966 < len__6146__auto___11965)){
args11960.push((arguments[i__6147__auto___11966]));

var G__11967 = (i__6147__auto___11966 + (1));
i__6147__auto___11966 = G__11967;
continue;
} else {
}
break;
}

var G__11962 = args11960.length;
switch (G__11962) {
case 2:
return om.core.update_state_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.core.update_state_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11960.length)].join('')));

}
});

om.core.update_state_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (owner,f){
if(cljs.core.truth_(om.core.component_QMARK_(owner))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(cljs.core.cst$sym$component_QMARK_,cljs.core.cst$sym$owner)], 0)))].join('')));
}

if(cljs.core.ifn_QMARK_(f)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(cljs.core.cst$sym$ifn_QMARK_,cljs.core.cst$sym$f)], 0)))].join('')));
}

return om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$2(owner,(function (){var G__11963 = om.core.get_state.cljs$core$IFn$_invoke$arity$1(owner);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__11963) : f.call(null,G__11963));
})());
});

om.core.update_state_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (owner,korks,f){
if(cljs.core.truth_(om.core.component_QMARK_(owner))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(cljs.core.cst$sym$component_QMARK_,cljs.core.cst$sym$owner)], 0)))].join('')));
}

if(cljs.core.ifn_QMARK_(f)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(cljs.core.cst$sym$ifn_QMARK_,cljs.core.cst$sym$f)], 0)))].join('')));
}

return om.core.set_state_BANG_.cljs$core$IFn$_invoke$arity$3(owner,korks,(function (){var G__11964 = om.core.get_state.cljs$core$IFn$_invoke$arity$2(owner,korks);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__11964) : f.call(null,G__11964));
})());
});

om.core.update_state_BANG_.cljs$lang$maxFixedArity = 3;
/**
 * EXPERIMENTAL: Same as update-state! but does not trigger re-render.
 */
om.core.update_state_nr_BANG_ = (function om$core$update_state_nr_BANG_(var_args){
var args11969 = [];
var len__6146__auto___11974 = arguments.length;
var i__6147__auto___11975 = (0);
while(true){
if((i__6147__auto___11975 < len__6146__auto___11974)){
args11969.push((arguments[i__6147__auto___11975]));

var G__11976 = (i__6147__auto___11975 + (1));
i__6147__auto___11975 = G__11976;
continue;
} else {
}
break;
}

var G__11971 = args11969.length;
switch (G__11971) {
case 2:
return om.core.update_state_nr_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return om.core.update_state_nr_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11969.length)].join('')));

}
});

om.core.update_state_nr_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (owner,f){
if(cljs.core.truth_(om.core.component_QMARK_(owner))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(cljs.core.cst$sym$component_QMARK_,cljs.core.cst$sym$owner)], 0)))].join('')));
}

if(cljs.core.ifn_QMARK_(f)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(cljs.core.cst$sym$ifn_QMARK_,cljs.core.cst$sym$f)], 0)))].join('')));
}

return om.core.set_state_nr_BANG_.cljs$core$IFn$_invoke$arity$2(owner,(function (){var G__11972 = om.core.get_state.cljs$core$IFn$_invoke$arity$1(owner);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__11972) : f.call(null,G__11972));
})());
});

om.core.update_state_nr_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (owner,korks,f){
if(cljs.core.truth_(om.core.component_QMARK_(owner))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(cljs.core.cst$sym$component_QMARK_,cljs.core.cst$sym$owner)], 0)))].join('')));
}

if(cljs.core.ifn_QMARK_(f)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(cljs.core.cst$sym$ifn_QMARK_,cljs.core.cst$sym$f)], 0)))].join('')));
}

return om.core.set_state_nr_BANG_.cljs$core$IFn$_invoke$arity$3(owner,korks,(function (){var G__11973 = om.core.get_state.cljs$core$IFn$_invoke$arity$2(owner,korks);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__11973) : f.call(null,G__11973));
})());
});

om.core.update_state_nr_BANG_.cljs$lang$maxFixedArity = 3;
/**
 * Utility to re-render an owner.
 */
om.core.refresh_BANG_ = (function om$core$refresh_BANG_(owner){
if(cljs.core.truth_(om.core.component_QMARK_(owner))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(cljs.core.cst$sym$component_QMARK_,cljs.core.cst$sym$owner)], 0)))].join('')));
}

return om.core.update_state_BANG_.cljs$core$IFn$_invoke$arity$2(owner,cljs.core.identity);
});
/**
 * Takes a pure owning component and an optional key or sequential
 * list of keys and returns a property in the component local state if
 * it exists. Always returns the rendered state, not the pending
 * state.
 */
om.core.get_render_state = (function om$core$get_render_state(var_args){
var args11978 = [];
var len__6146__auto___11981 = arguments.length;
var i__6147__auto___11982 = (0);
while(true){
if((i__6147__auto___11982 < len__6146__auto___11981)){
args11978.push((arguments[i__6147__auto___11982]));

var G__11983 = (i__6147__auto___11982 + (1));
i__6147__auto___11982 = G__11983;
continue;
} else {
}
break;
}

var G__11980 = args11978.length;
switch (G__11980) {
case 1:
return om.core.get_render_state.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return om.core.get_render_state.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11978.length)].join('')));

}
});

om.core.get_render_state.cljs$core$IFn$_invoke$arity$1 = (function (owner){
if(cljs.core.truth_(om.core.component_QMARK_(owner))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(cljs.core.cst$sym$component_QMARK_,cljs.core.cst$sym$owner)], 0)))].join('')));
}

return om.core._get_render_state.cljs$core$IFn$_invoke$arity$1(owner);
});

om.core.get_render_state.cljs$core$IFn$_invoke$arity$2 = (function (owner,korks){
if(cljs.core.truth_(om.core.component_QMARK_(owner))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(cljs.core.cst$sym$component_QMARK_,cljs.core.cst$sym$owner)], 0)))].join('')));
}

var ks = ((cljs.core.sequential_QMARK_(korks))?korks:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [korks], null));
return om.core._get_render_state.cljs$core$IFn$_invoke$arity$2(owner,ks);
});

om.core.get_render_state.cljs$lang$maxFixedArity = 2;
