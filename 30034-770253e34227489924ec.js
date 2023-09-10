"use strict";(self.webpackChunkterra_ui=self.webpackChunkterra_ui||[]).push([[30034],{26729:function(e){var t=Object.prototype.hasOwnProperty,n="~";function a(){}function r(e,t,n){this.fn=e,this.context=t,this.once=n||!1}function l(e,t,a,l,u){if("function"!=typeof a)throw new TypeError("The listener must be a function");var o=new r(a,l||e,u),i=n?n+t:t;return e._events[i]?e._events[i].fn?e._events[i]=[e._events[i],o]:e._events[i].push(o):(e._events[i]=o,e._eventsCount++),e}function u(e,t){0==--e._eventsCount?e._events=new a:delete e._events[t]}function o(){this._events=new a,this._eventsCount=0}Object.create&&(a.prototype=Object.create(null),(new a).__proto__||(n=!1)),o.prototype.eventNames=function(){var e,a,r=[];if(0===this._eventsCount)return r;for(a in e=this._events)t.call(e,a)&&r.push(n?a.slice(1):a);return Object.getOwnPropertySymbols?r.concat(Object.getOwnPropertySymbols(e)):r},o.prototype.listeners=function(e){var t=n?n+e:e,a=this._events[t];if(!a)return[];if(a.fn)return[a.fn];for(var r=0,l=a.length,u=new Array(l);r<l;r++)u[r]=a[r].fn;return u},o.prototype.listenerCount=function(e){var t=n?n+e:e,a=this._events[t];return a?a.fn?1:a.length:0},o.prototype.emit=function(e,t,a,r,l,u){var o=n?n+e:e;if(!this._events[o])return!1;var i,f,c=this._events[o],d=arguments.length;if(c.fn){switch(c.once&&this.removeListener(e,c.fn,void 0,!0),d){case 1:return c.fn.call(c.context),!0;case 2:return c.fn.call(c.context,t),!0;case 3:return c.fn.call(c.context,t,a),!0;case 4:return c.fn.call(c.context,t,a,r),!0;case 5:return c.fn.call(c.context,t,a,r,l),!0;case 6:return c.fn.call(c.context,t,a,r,l,u),!0}for(f=1,i=new Array(d-1);f<d;f++)i[f-1]=arguments[f];c.fn.apply(c.context,i)}else{var s,p=c.length;for(f=0;f<p;f++)switch(c[f].once&&this.removeListener(e,c[f].fn,void 0,!0),d){case 1:c[f].fn.call(c[f].context);break;case 2:c[f].fn.call(c[f].context,t);break;case 3:c[f].fn.call(c[f].context,t,a);break;case 4:c[f].fn.call(c[f].context,t,a,r);break;default:if(!i)for(s=1,i=new Array(d-1);s<d;s++)i[s-1]=arguments[s];c[f].fn.apply(c[f].context,i)}}return!0},o.prototype.on=function(e,t,n){return l(this,e,t,n,!1)},o.prototype.once=function(e,t,n){return l(this,e,t,n,!0)},o.prototype.removeListener=function(e,t,a,r){var l=n?n+e:e;if(!this._events[l])return this;if(!t)return u(this,l),this;var o=this._events[l];if(o.fn)o.fn!==t||r&&!o.once||a&&o.context!==a||u(this,l);else{for(var i=0,f=[],c=o.length;i<c;i++)(o[i].fn!==t||r&&!o[i].once||a&&o[i].context!==a)&&f.push(o[i]);f.length?this._events[l]=1===f.length?f[0]:f:u(this,l)}return this},o.prototype.removeAllListeners=function(e){var t;return e?(t=n?n+e:e,this._events[t]&&u(this,t)):(this._events=new a,this._eventsCount=0),this},o.prototype.off=o.prototype.removeListener,o.prototype.addListener=o.prototype.on,o.prefixed=n,o.EventEmitter=o,e.exports=o},53416:function(e,t,n){n.r(t),t.default={"clinical-lowlight-theme":"AppPage-module__clinical-lowlight-theme___KzV8R","orion-fusion-theme":"AppPage-module__orion-fusion-theme___D9ms9","page-content":"AppPage-module__page-content___0+EQ3","themed-block":"AppPage-module__themed-block___5pI30"}},79155:function(e,t,n){n.r(t),t.default={"modal-content":"ModalPresenter-module__modal-content___Yw+9l"}},9369:function(e,t,n){n.r(t),t.default={"red-text":"PendingActionToggle-module__red-text___eUkBW"}},41241:function(e,t,n){n.r(t),t.default={"clinical-lowlight-theme":"Toolbar-module__clinical-lowlight-theme___lhZh0","orion-fusion-theme":"Toolbar-module__orion-fusion-theme___Oq6Xn",toolbar:"Toolbar-module__toolbar___XowP8",item:"Toolbar-module__item___K92Xb","start-align":"Toolbar-module__start-align___Ap05A","end-align":"Toolbar-module__end-align___WLp5E","center-align":"Toolbar-module__center-align___5f+ex"}},59377:function(e,t,n){var a=n(64836);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a(n(67294)),l=a(n(45697)),u=a(n(71171)),o=a(n(31737)),i={bannerAction:l.default.shape({text:l.default.string,onClick:l.default.func}),description:l.default.node,onRequestClose:l.default.func,variant:l.default.oneOf(["hazard-high","hazard-medium","hazard-low","error","unsatisfied","unverified","custom"]).isRequired,custom:l.default.shape({signalWord:l.default.string,iconClassName:l.default.string})},f=function(e){var t=e.bannerAction,n=e.custom,a=e.description,l=e.onRequestClose,i=e.variant,f=r.default.useContext(o.default),c=r.default.useRef((0,u.default)());return r.default.useEffect((function(){if(!f)throw new Error("A NotificationBanner was not rendered within the context of a NotificationBannerProvider. If this is unexpected, validate that the expected version of the terra-application package is installed.");f.registerNotificationBanner(c.current,{bannerAction:t,custom:n,description:a,key:c.current,onRequestClose:l,variant:i})}),[f,a,n,t,l,i]),r.default.useEffect((function(){return function(){f.unregisterNotificationBanner(c.current,i)}}),[f,i]),null};f.propTypes=i;var c=f;t.default=c},70374:function(e,t,n){var a=n(64836);Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return r.default}});var r=a(n(59377))},30034:function(e,t,n){var a=n(64836);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a(n(67294)),l=a(n(26693));t.default=function(){return r.default.createElement("div",{style:{height:"700px"}},r.default.createElement(l.default,null))}},16856:function(e,t,n){var a=n(64836),r=n(18698);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=a(n(27424)),u=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==r(e)&&"function"!=typeof e)return{default:e};var n=g(t);if(n&&n.has(e))return n.get(e);var a={},l=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var u in e)if("default"!==u&&Object.prototype.hasOwnProperty.call(e,u)){var o=l?Object.getOwnPropertyDescriptor(e,u):null;o&&(o.get||o.set)?Object.defineProperty(a,u,o):a[u]=e[u]}a.default=e,n&&n.set(e,a);return a}(n(67294)),o=a(n(45697)),i=a(n(47166)),f=n(29291),c=a(n(50963)),d=n(7591),s=n(21538),p=n(19771),m=a(n(84066)),v=a(n(9696)),h=a(n(43368)),y=a(n(24877)),b=a(n(50959)),_=a(n(53416));function g(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(g=function(e){return e?n:t})(e)}var E=i.default.bind(_.default),w=function(e){var t=e.pageName,n=(0,u.useState)(!1),a=(0,l.default)(n,2),r=a[0],o=a[1],i=(0,u.useContext)(f.ActiveBreakpointContext),_=(0,u.useContext)(d.ApplicationIntlContext),g=u.default.useContext(s.ThemeContext),w=(0,u.useState)(!1),O=(0,l.default)(w,2),P=O[0],j=O[1];if((0,u.useEffect)((function(){if(!r){var e=setTimeout((function(){o(!0)}),window.TEST_APP_TIMEOUT);return function(){clearTimeout(e)}}}),[r]),!r)return u.default.createElement(c.default,{isOpen:!0,backgroundStyle:"clear"});if(P)throw new Error("".concat(t," threw an error to test the application's error handling"));return u.default.createElement("div",{className:E("page-content",g.className)},u.default.createElement("h1",null,t),u.default.createElement("h3",null,"Configuration Properties"),u.default.createElement("p",null,"Active Breakpoint:"," ",u.default.createElement("span",null,i)),u.default.createElement("p",null,"Intl Locale:"," ",u.default.createElement("span",null,_.locale)),u.default.createElement("h3",null,"Error Handling"),u.default.createElement("p",null,"Press the button below to throw an exception that will be caught and handled by the framework"),u.default.createElement("button",{type:"button",onClick:function(){j(!0)}},"Throw Error"),u.default.createElement(m.default,null),u.default.createElement(y.default,null),u.default.createElement(v.default,null),u.default.createElement(h.default,null),u.default.createElement("h3",null,"Theming"),u.default.createElement("p",null,"The div below uses the theme context to apply styling for theme: ".concat(g.name,".")),u.default.createElement("div",{className:E("themed-block")}),u.default.createElement(b.default,null),u.default.createElement(p.ApplicationNavigationActionsContext.Consumer,null,(function(e){var t=e.actions,n=void 0===t?[]:t;return u.default.createElement("div",null,u.default.createElement("h3",null,"Layout Actions"),n.map((function(e){return u.default.createElement("button",{key:e.key,type:"button",onClick:e.onSelect,"aria-label":e.label},e.icon)})))})))};w.propTypes={pageName:o.default.string};var O=w;t.default=O},26693:function(e,t,n){var a=n(64836);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a(n(67294)),l=a(n(71298));window.TEST_APP_TIMEOUT=1e3;var u=function(){return r.default.createElement(l.default,null)};t.default=u},71298:function(e,t,n){var a=n(64836);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a(n(18698)),l=a(n(27424)),u=_(n(67294)),o=a(n(59930)),i=a(n(55281)),f=a(n(72354)),c=a(n(30217)),d=a(n(43891)),s=a(n(4959)),p=a(n(19771)),m=n(48514),v=n(52611),h=a(n(70374)),y=n(9696);function b(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(b=function(e){return e?n:t})(e)}function _(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==(0,r.default)(e)&&"function"!=typeof e)return{default:e};var n=b(t);if(n&&n.has(e))return n.get(e);var a={},l=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var u in e)if("default"!==u&&Object.prototype.hasOwnProperty.call(e,u)){var o=l?Object.getOwnPropertyDescriptor(e,u):null;o&&(o.get||o.set)?Object.defineProperty(a,u,o):a[u]=e[u]}return a.default=e,n&&n.set(e,a),a}var g=u.default.lazy((function(){return Promise.resolve().then((function(){return _(n(86881))}))})),E=u.default.lazy((function(){return Promise.resolve().then((function(){return _(n(14417))}))})),w=u.default.lazy((function(){return Promise.resolve().then((function(){return _(n(88356))}))})),O={name:"Demo User",initials:"DU"},P=function(){return u.default.createElement(v.WorkspaceContent,null,u.default.createElement("div",null,u.default.createElement("p",null,"Example Workspace Content 1")))},j=function(){return u.default.createElement(v.WorkspaceContent,{toolbar:u.default.createElement(s.default,null,u.default.createElement(i.default,{text:"Button 1",variant:"utility",icon:u.default.createElement(f.default,null)}),u.default.createElement(i.default,{text:"Button 2",variant:"utility",icon:u.default.createElement(c.default,null)}),u.default.createElement(i.default,{text:"Button 3",variant:"utility",icon:u.default.createElement(d.default,null)}))},u.default.createElement("div",null,u.default.createElement("p",null,"Example Workspace Content 2")),u.default.createElement(h.default,{variant:"hazard-low",description:"Example Notification"}))},k=function(){var e=(0,u.useContext)(m.DisclosureManagerContext),t=(0,u.useState)("page_1"),n=(0,l.default)(t,2),a=n[0],r=n[1],i=(0,u.useState)(!1),f=(0,l.default)(i,2),c=f[0],d=f[1],s=(0,u.useRef)(),v=(0,u.useRef)([{key:"page_1",text:"Page 1"},{key:"page_2",text:"Page 2"},{key:"page_3",text:"Page 3"}]);if(c)return u.default.createElement("div",null,u.default.createElement("p",null,"Logged Out"),u.default.createElement("button",{type:"button",onClick:function(){d(!1)}},"Reset"));var h,b=u.default.createElement(p.default.Workspace,{id:"application-workspace-example",initialActiveItemKey:"item-1",initialSize:{scale:0},initialIsOpen:!0},u.default.createElement(p.default.Workspace.Item,{itemKey:"item-1",label:"Item 1",render:function(){return u.default.createElement(P,null)}}),u.default.createElement(p.default.Workspace.Item,{itemKey:"item-2",label:"Item 2",render:function(){return u.default.createElement(j,null)}}),u.default.createElement(p.default.Workspace.Item,{itemKey:"item-3",label:"Item 3",render:function(){return u.default.createElement(j,null)}}),u.default.createElement(p.default.Workspace.Item,{itemKey:"item-4",label:"Item 4",render:function(){return u.default.createElement(j,null)}}),u.default.createElement(p.default.Workspace.Item,{itemKey:"item-5",label:"Item 5",render:function(){return u.default.createElement(j,null)}}),u.default.createElement(p.default.Workspace.Item,{itemKey:"item-6",label:"Item 6",render:function(){return u.default.createElement(j,null)}}));switch(a){case"page_1":h=u.default.createElement(g,null);break;case"page_2":h=u.default.createElement(E,null);break;case"page_3":h=u.default.createElement(w,null);break;default:h=null}return u.default.createElement(p.default,{titleConfig:{title:"Terra Application Demo"},workspace:b,userConfig:O,navigationItems:v.current,activeNavigationItemKey:a,onSelectNavigationItem:function(e){r(e)},extensionItems:[{key:"extension_1",icon:u.default.createElement(o.default,null),text:"Extension 1"}],onSelectExtensionItem:function(t){"extension_1"===t&&e.disclose({preferredType:"modal",size:"large",content:{key:"extension_1_modal",component:u.default.createElement(y.ModalContent,{name:"Extension Modal",onSubmit:function(){s.current&&(s.current(),s.current=void 0)}})}}).then((function(e){var t=e.dismissDisclosure;s.current=t}))},utilityItems:[{key:"utility_1",text:"Utility Item 1"}],onSelectUtilityItem:function(t){"utility_1"===t&&e.disclose({preferredType:"modal",size:"large",content:{key:"utility_1_modal",component:u.default.createElement(y.ModalContent,{name:"Utility Modal",onSubmit:function(){s.current&&(s.current(),s.current=void 0)}})}}).then((function(e){var t=e.dismissDisclosure;s.current=t}))},onSelectLogout:function(){d(!0)}},h)};t.default=k},50959:function(e,t,n){var a=n(64836),r=n(18698);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=a(n(27424)),u=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==r(e)&&"function"!=typeof e)return{default:e};var n=i(t);if(n&&n.has(e))return n.get(e);var a={},l=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var u in e)if("default"!==u&&Object.prototype.hasOwnProperty.call(e,u)){var o=l?Object.getOwnPropertyDescriptor(e,u):null;o&&(o.get||o.set)?Object.defineProperty(a,u,o):a[u]=e[u]}a.default=e,n&&n.set(e,a);return a}(n(67294)),o=a(n(91493));function i(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(i=function(e){return e?n:t})(e)}var f=function(){var e=(0,u.useState)(0),t=(0,l.default)(e,2),n=t[0],a=t[1];return(0,u.useEffect)((function(){var e=function(){a((function(e){return e+1}))};return o.default.on("increment-counter",e),function(){o.default.off("increment-counter",e)}}),[]),u.default.createElement("div",null,u.default.createElement("h3",null,"Event Emitter"),u.default.createElement("p",null,"The EventEmitter is used to facilitate communications within the application. Clicking the emitter button emits an event to the Listener to increment the value by 1."),u.default.createElement("p",null,"Emitter:"," ",u.default.createElement("button",{type:"button",onClick:function(){o.default.emit("increment-counter")}},"Emit event to increment")),u.default.createElement("p",null,"Listener:"," ",n))};t.default=f},84066:function(e,t,n){var a=n(64836),r=n(18698);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=a(n(27424)),u=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==r(e)&&"function"!=typeof e)return{default:e};var n=i(t);if(n&&n.has(e))return n.get(e);var a={},l=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var u in e)if("default"!==u&&Object.prototype.hasOwnProperty.call(e,u)){var o=l?Object.getOwnPropertyDescriptor(e,u):null;o&&(o.get||o.set)?Object.defineProperty(a,u,o):a[u]=e[u]}a.default=e,n&&n.set(e,a);return a}(n(67294)),o=a(n(50963));function i(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(i=function(e){return e?n:t})(e)}var f=function(){var e=(0,u.useState)(!1),t=(0,l.default)(e,2),n=t[0],a=t[1],r=(0,u.useRef)();return(0,u.useEffect)((function(){return function(){window.clearTimeout(r.current)}}),[]),u.default.createElement("div",null,u.default.createElement("h3",null,"Loading Overlay Presenter"),u.default.createElement("p",null,"This component uses the ApplicationLoadingOverlay to present a loading overlay over itself. The overlay in this demo is shown for 2 seconds."),u.default.createElement("p",null,u.default.createElement("button",{disabled:n,type:"button",onClick:function(){a(!0),r.current=setTimeout((function(){a(!1)}),2e3)}},"Show Loading Overlay")),u.default.createElement(o.default,{isOpen:n,backgroundStyle:"light"}))};t.default=f},9696:function(e,t,n){var a=n(64836),r=n(18698);Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.ModalContent=void 0;var l=a(n(27424)),u=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==r(e)&&"function"!=typeof e)return{default:e};var n=h(t);if(n&&n.has(e))return n.get(e);var a={},l=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var u in e)if("default"!==u&&Object.prototype.hasOwnProperty.call(e,u)){var o=l?Object.getOwnPropertyDescriptor(e,u):null;o&&(o.get||o.set)?Object.defineProperty(a,u,o):a[u]=e[u]}a.default=e,n&&n.set(e,a);return a}(n(67294)),o=a(n(45697)),i=a(n(47166)),f=a(n(85134)),c=n(29291),d=a(n(50963)),s=n(7591),p=n(48514),m=a(n(43368)),v=a(n(79155));function h(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(h=function(e){return e?n:t})(e)}var y=i.default.bind(v.default),b=function(e){var t=e.name,n=e.onSubmit,a=(0,u.useContext)(c.ActiveBreakpointContext),r=(0,u.useContext)(s.ApplicationIntlContext),o=(0,u.useContext)(p.DisclosureManagerContext),i=(0,u.useState)(!1),v=(0,l.default)(i,2),h=v[0],b=v[1],_=(0,u.useState)(!1),g=(0,l.default)(_,2),E=g[0],w=g[1],O=(0,u.useRef)();if((0,u.useEffect)((function(){if(!E){var e=setTimeout((function(){w(!0)}),2e3);return clearTimeout(O.current),function(){clearTimeout(e)}}}),[E]),!E)return u.default.createElement(u.default.Fragment,null,u.default.createElement(p.DisclosureManagerHeaderAdapter,{title:t}),u.default.createElement(d.default,{isOpen:!0,backgroundStyle:"clear"}));if(h)throw new Error("Modal Page failed to render");return u.default.createElement(u.default.Fragment,null,u.default.createElement(p.DisclosureManagerHeaderAdapter,{title:t}),u.default.createElement(f.default,null,u.default.createElement("div",{className:y("modal-content")},u.default.createElement("h2",null,t),u.default.createElement("h3",null,"Modal Dismissal"),u.default.createElement("p",null,"This modal will close when the Esc key is pressed, the Close button is pressed, or if the disclosee dismisses it when the Done button is pressed."),u.default.createElement("button",{type:"button",onClick:function(){o.registerDismissCheck((function(){return Promise.resolve()})),n()}},"Done"),u.default.createElement("h3",null,"Configuration Properties"),u.default.createElement("p",null,"Active Breakpoint:"," ",u.default.createElement("span",null,a)),u.default.createElement("p",null,"Intl Locale:"," ",u.default.createElement("span",null,r.locale)),u.default.createElement("h3",null,"Error Handling"),u.default.createElement("p",null,"Press the button below to throw an exception that will be caught and handled by the framework."),u.default.createElement("button",{type:"button",onClick:function(){b(!0)}},"Throw Error"),u.default.createElement(m.default,null))))};t.ModalContent=b,b.propTypes={name:o.default.string,onSubmit:o.default.func};var _=function(){var e=(0,u.useContext)(p.DisclosureManagerContext),t=(0,u.useRef)();return u.default.createElement("div",null,u.default.createElement("h3",null,"Modal Presenter"),u.default.createElement("p",null,"This component uses the DisclosureManagerContext to present a modal."),u.default.createElement("button",{type:"button",onClick:function(){e.disclose({preferredType:"modal",size:"large",content:{key:"modal_component_demo",component:u.default.createElement(b,{name:"Modal Component Demo",onSubmit:function(){t.current&&(t.current(),t.current=void 0)}})}}).then((function(e){var n=e.dismissDisclosure;t.current=n}))}},"Show Modal"))};t.default=_},86881:function(e,t,n){var a=n(64836);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a(n(67294)),l=a(n(16856)),u=function(){return r.default.createElement(l.default,{pageName:"Page 1",pageKey:"page_1"})};t.default=u},14417:function(e,t,n){var a=n(64836);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a(n(67294)),l=a(n(16856)),u=function(){return r.default.createElement(l.default,{pageName:"Page 2",pageKey:"page_2"})};t.default=u},88356:function(e,t,n){var a=n(64836);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a(n(67294)),l=a(n(16856)),u=function(){return r.default.createElement(l.default,{pageName:"Page 3",pageKey:"page_3"})};t.default=u},43368:function(e,t,n){var a=n(64836),r=n(18698);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=a(n(27424)),u=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==r(e)&&"function"!=typeof e)return{default:e};var n=c(t);if(n&&n.has(e))return n.get(e);var a={},l=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var u in e)if("default"!==u&&Object.prototype.hasOwnProperty.call(e,u)){var o=l?Object.getOwnPropertyDescriptor(e,u):null;o&&(o.get||o.set)?Object.defineProperty(a,u,o):a[u]=e[u]}a.default=e,n&&n.set(e,a);return a}(n(67294)),o=a(n(47166)),i=a(n(58624)),f=a(n(9369));function c(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(c=function(e){return e?n:t})(e)}var d=o.default.bind(f.default),s=function(){var e=(0,u.useState)(!1),t=(0,l.default)(e,2),n=t[0],a=t[1],r=(0,u.useState)(!1),o=(0,l.default)(r,2),f=o[0],c=o[1];return u.default.createElement("div",null,u.default.createElement("h3",null,"Unsaved Changes"),u.default.createElement("p",null,"This component uses a NavigationPrompt to register unsaved state with framework. Multiple NavigationPrompts can be rendered at the same time."),u.default.createElement("p",{className:n?d("red-text"):null},"Pending Action 1:"," ",u.default.createElement("button",{type:"button",onClick:function(){a(!n)}},n?"Disable":"Activate")),u.default.createElement("p",{className:f?d("red-text"):null},"Pending Action 2:"," ",u.default.createElement("button",{type:"button",onClick:function(){c(!f)}},f?"Disable":"Activate")),n?u.default.createElement(i.default,{description:"Pending Action 1"}):void 0,f?u.default.createElement(i.default,{description:"Pending Action 2"}):void 0)};t.default=s},24877:function(e,t,n){var a=n(64836),r=n(18698);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=a(n(27424)),u=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==r(e)&&"function"!=typeof e)return{default:e};var n=i(t);if(n&&n.has(e))return n.get(e);var a={},l=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var u in e)if("default"!==u&&Object.prototype.hasOwnProperty.call(e,u)){var o=l?Object.getOwnPropertyDescriptor(e,u):null;o&&(o.get||o.set)?Object.defineProperty(a,u,o):a[u]=e[u]}a.default=e,n&&n.set(e,a);return a}(n(67294)),o=a(n(31423));function i(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(i=function(e){return e?n:t})(e)}var f=function(){var e=(0,u.useState)(!1),t=(0,l.default)(e,2),n=t[0],a=t[1],r=(0,u.useRef)();return(0,u.useEffect)((function(){window.clearTimeout(r.current)}),[]),u.default.createElement("div",null,u.default.createElement("h3",null,"Status View Presenter"),u.default.createElement("p",null,"This component uses the ApplicationStatusOverlay to present a status view over itself. The status view in this demo is shown for 2 seconds."),u.default.createElement("p",null,u.default.createElement("button",{disabled:n,type:"button",onClick:function(){a(!0),r.current=setTimeout((function(){a(!1)}),2e3)}},"Show Status View")),n&&u.default.createElement(o.default,{message:"This is a demo status view",variant:"no-data"}))};t.default=f},7072:function(e,t,n){var a=n(64836);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=new(a(n(26729)).default);t.default=r},91493:function(e,t,n){var a=n(64836);Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return r.default}});var r=a(n(7072))},30217:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=l(n(67294)),r=l(n(99139));function l(e){return e&&e.__esModule?e:{default:e}}function u(){return u=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},u.apply(this,arguments)}var o=function(e){var t=u({},e);return a.default.createElement(r.default,t,a.default.createElement("path",{d:"M48 21H27V0h-6v21H0v6h21v21h6V27h21z"}))};o.displayName="IconAdd",o.defaultProps={viewBox:"0 0 48 48","data-name":"Layer 1",xmlns:"http://www.w3.org/2000/svg"};var i=o;t.default=i},43891:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=l(n(67294)),r=l(n(99139));function l(e){return e&&e.__esModule?e:{default:e}}function u(){return u=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},u.apply(this,arguments)}var o=function(e){var t=u({},e);return a.default.createElement(r.default,t,a.default.createElement("path",{d:"M32 8v29a8 8 0 0 1-16 0V8a5 5 0 0 1 10 0v29a2 2 0 0 1-4 0V15h-3v22a5 5 0 0 0 10 0V8a8 8 0 0 0-16 0v29a11 11 0 0 0 22 0V8z"}))};o.displayName="IconAttachment",o.defaultProps={viewBox:"0 0 48 48","data-name":"Layer 1",xmlns:"http://www.w3.org/2000/svg"};var i=o;t.default=i},72354:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=l(n(67294)),r=l(n(99139));function l(e){return e&&e.__esModule?e:{default:e}}function u(){return u=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},u.apply(this,arguments)}var o=function(e){var t=u({},e);return a.default.createElement(r.default,t,a.default.createElement("path",{d:"m.1 48 5.7-12.8 7.1 7.1zm44.8-37.6 2.5-2.5a2.05 2.05 0 0 0 0-2.9L43 .6a2.05 2.05 0 0 0-2.9 0l-2.5 2.5zm-9.4-5.2L7.6 33.1l7.3 7.3 27.9-27.9z"}))};o.displayName="IconEdit",o.defaultProps={viewBox:"0 0 48 48","data-name":"Layer 1",xmlns:"http://www.w3.org/2000/svg"};var i=o;t.default=i},59930:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=l(n(67294)),r=l(n(99139));function l(e){return e&&e.__esModule?e:{default:e}}function u(){return u=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},u.apply(this,arguments)}var o=function(e){var t=u({},e);return a.default.createElement(r.default,t,a.default.createElement("path",{d:"M24 0A14.94 14.94 0 0 0 9.1 14.9a15.52 15.52 0 0 0 1.5 6.5 14.69 14.69 0 0 0 4.1 5.1 12.06 12.06 0 0 1 4.3 6.7 2.19 2.19 0 0 0-1.1 1.8v7.8a2.11 2.11 0 0 0 2.1 2.1h1a3 3 0 1 0 6 0h.9a2.11 2.11 0 0 0 2.1-2.1V35a2.06 2.06 0 0 0-1.1-1.8 12.4 12.4 0 0 1 4.1-6.6 16.23 16.23 0 0 0 4.4-5.3 14.43 14.43 0 0 0 1.5-6.5A14.92 14.92 0 0 0 24 0zm7 24.4a15.76 15.76 0 0 0-3.9 5 11.75 11.75 0 0 0-1.2 3.6h-.2V20h2a1.54 1.54 0 0 0 1.5-1.5 1.56 1.56 0 0 0-1.6-1.5h-7a1.5 1.5 0 0 0 0 3h2v13h-.5a13.86 13.86 0 0 0-1.2-3.6 14.67 14.67 0 0 0-4.5-5.4h.1a12 12 0 0 1-4.3-9.1A11.78 11.78 0 0 1 24 3a11.93 11.93 0 0 1 11.9 11.9 12 12 0 0 1-4.9 9.5z"}))};o.displayName="IconLightbulb",o.defaultProps={viewBox:"0 0 48 48","data-name":"Layer 1",xmlns:"http://www.w3.org/2000/svg"};var i=o;t.default=i},4959:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=c(n(67294)),r=c(n(45697)),l=c(n(94184)),u=c(n(47166)),o=c(n(50026)),i=c(n(41241)),f=["align","ariaControls","ariaLabel","ariaLabelledBy","children"];function c(e){return e&&e.__esModule?e:{default:e}}function d(){return d=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},d.apply(this,arguments)}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=u.default.bind(i.default),m={align:r.default.oneOf(["start","end","center"]),ariaControls:r.default.string,ariaLabel:r.default.string,ariaLabelledBy:r.default.string,children:r.default.node},v=function(e){var t=e.align,n=e.ariaControls,r=e.ariaLabel,u=e.ariaLabelledBy,i=e.children,c=s(e,f),m=a.default.useContext(o.default),v=(0,l.default)(p("toolbar","".concat(t,"-align"),m.className),c.className),h=a.default.Children.map(i,(function(e){return e?a.default.createElement("div",{className:p("item")},e):e}));return a.default.createElement("div",d({},c,{"aria-controls":n,"aria-label":u?void 0:r,"aria-labelledby":u,className:v,role:"toolbar"}),h)};v.propTypes=m,v.defaultProps={align:"start"};var h=v;t.default=h}}]);