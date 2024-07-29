"use strict";(self.webpackChunkblazormodule=self.webpackChunkblazormodule||[]).push([[657],{317:(p,d,n)=>{n.d(d,{D:()=>m});var l=n(861),a=n(605),_=n(312);let m=(()=>{class r{constructor(e,t){this._parentElementReference=e,this._blazorStateManager=t,this._addComponentPromise=null,this._isDisposed=!1,this._hasPendingSetParameters=!1,this._parameterValues={}}ngOnInit(){var e=this;return(0,l.Z)(function*(){e._blazorStateManager.statusChanged.subscribe(t=>t?e._loadComponent():null),yield e._blazorStateManager.setBlazorAsync()})()}ngOnChanges(e){for(const t in e)this._parameterValues[t]=e[t].currentValue;this._loadComponent()}ngOnDestroy(){var e=this;setTimeout(()=>(0,l.Z)(function*(){e._isDisposed=!0,null!==e._addComponentPromise&&(yield e._addComponentPromise).dispose()}),1e3)}_loadComponent(){null===this._addComponentPromise?this._addRootComponent():this._hasPendingSetParameters||this._supplyUpdatedParameters()}_addRootComponent(){const e=this._parentElementReference.nativeElement,t=`${e.tagName.toLowerCase()}-angular`,o={...this._parameterValues};for(const[s,c]of Object.entries(this))c instanceof a.EventEmitter&&(o[s]=(...h)=>c.emit(...h));this._hasPendingSetParameters=!0,this._addComponentPromise=Blazor.rootComponents.add(e,t,o).then(s=>(this._hasPendingSetParameters=!1,s))}_supplyUpdatedParameters(){var e=this;return(0,l.Z)(function*(){if(e._hasPendingSetParameters)return;e._hasPendingSetParameters=!0;const t=yield e._addComponentPromise;e._isDisposed||(yield t.setParameters(e._parameterValues)),e._hasPendingSetParameters=!1})()}}return r.\u0275fac=function(e){return new(e||r)(a.\u0275\u0275directiveInject(a.ElementRef),a.\u0275\u0275directiveInject(_.x))},r.\u0275cmp=a.\u0275\u0275defineComponent({type:r,selectors:[["ng-component"]],features:[a.\u0275\u0275NgOnChangesFeature],decls:0,vars:0,template:function(e,t){},encapsulation:2}),r})()},312:(p,d,n)=>{n.d(d,{x:()=>m});var l=n(861),a=n(605),_=n(340);let m=(()=>{class r{constructor(){this._scriptLoaded=!1,this._blazorLoaded=!1,this.statusChanged=new a.EventEmitter}setBlazorAsync(){var e=this;return(0,l.Z)(function*(){let t=new URL("_framework/blazor.webassembly.js",_.N.blazorMicroFrontendBaseUrl);yield e.loadAndParseScriptAsync(t),yield e.startBlazorAsync()})()}removeBlazor(){let e=new URL("_framework/blazor.webassembly.js",_.N.blazorMicroFrontendBaseUrl),t=new URL("_framework/wasm/mono.js",_.N.blazorMicroFrontendBaseUrl);document.getElementsByTagName("bz-compiler")[0].innerHTML="";var o=document.querySelector("script[src='"+e+"']");o&&o.parentNode&&o.parentNode.removeChild(o);var s=document.querySelector("script[src='"+t+"']");s&&s.parentNode&&s.parentNode.removeChild(s),this._blazorLoaded=!0}resetBlazor(){var e=this;return(0,l.Z)(function*(){e.removeBlazor(),yield e.setBlazorAsync()})()}loadAndParseScriptAsync(e){var t=this;return(0,l.Z)(function*(){if(t._scriptLoaded)return!0;try{let s=yield fetch(e);if(s.ok){var o=yield s.text();o=(o=o.replaceAll("_framework/",_.N.blazorMicroFrontendBaseUrl+"_framework/")).replaceAll('credentials:"include",',"");let c=document.createElement("script");c.setAttribute("autostart","false"),c.innerHTML=o,document.head.appendChild(c),t._scriptLoaded=!0}else console.error("Error loading Blazor script.")}catch{console.error("Error loading Blazor script.")}return t._scriptLoaded})()}startBlazorAsync(){var e=this;return(0,l.Z)(function*(){return!!e._blazorLoaded||(console.debug("Loading Blazor WASM..."),window.Blazor.start().then(()=>{e._blazorLoaded=!0,console.debug("Blazor WASM loaded."),e.statusChanged.emit(!0)}).catch(o=>{console.error("Blazor WASM not loaded: "+o),e.statusChanged.emit(!1)}),e._blazorLoaded)})()}}return r.\u0275fac=function(e){return new(e||r)},r.\u0275prov=a.\u0275\u0275defineInjectable({token:r,factory:r.\u0275fac,providedIn:"any"}),r})()},657:(p,d,n)=>{n.r(d),n.d(d,{PokemonGridComponent:()=>m});var l=n(861),a=n(605),_=n(317);let m=(()=>{class r extends _.D{constructor(){super(...arguments),this.startFromId=null,this.onDataLoaded=new a.EventEmitter}ngOnInit(){var e=()=>super.ngOnInit,t=this;return(0,l.Z)(function*(){t._parameterValues.startFromId=t.startFromId,e().call(t)})()}}return r.\u0275fac=function(){let i;return function(t){return(i||(i=a.\u0275\u0275getInheritedFactory(r)))(t||r)}}(),r.\u0275cmp=a.\u0275\u0275defineComponent({type:r,selectors:[["pokemon-grid"]],inputs:{startFromId:"startFromId"},outputs:{onDataLoaded:"onDataLoaded"},features:[a.\u0275\u0275InheritDefinitionFeature],decls:0,vars:0,template:function(e,t){},encapsulation:2}),r})()},340:(p,d,n)=>{n.d(d,{N:()=>l});const l={production:!0,blazorMicroFrontendBaseUrl:"http://localhost:8080/"}},861:(p,d,n)=>{function l(u,_,m,r,i,e,t){try{var o=u[e](t),s=o.value}catch(c){return void m(c)}o.done?_(s):Promise.resolve(s).then(r,i)}function a(u){return function(){var _=this,m=arguments;return new Promise(function(r,i){var e=u.apply(_,m);function t(s){l(e,r,i,t,o,"next",s)}function o(s){l(e,r,i,t,o,"throw",s)}t(void 0)})}}n.d(d,{Z:()=>a})}}]);