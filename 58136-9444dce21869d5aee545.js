"use strict";(self.webpackChunkterra_ui=self.webpackChunkterra_ui||[]).push([[58136],{22863:function(e,t,n){var r=n(64836);t.Z=void 0;var a=r(n(67294)),o=r(n(45697)),d=r(n(47166)),l=r(n(17422)),m=d.default.bind(l.default),s={name:o.default.string.isRequired,src:o.default.string,url:o.default.string,version:o.default.string.isRequired},u=function(e){var t=e.src,n=e.name,r=e.url,o=e.version,d=a.default.createElement("a",{className:m("badge"),href:r||"https://www.npmjs.org/package/".concat(n,"/v/").concat(o)},a.default.createElement("span",{className:m("badge-name")},r?"package":"npm"),a.default.createElement("span",{className:m("badge-version")},"v".concat(o))),l=t?a.default.createElement("a",{className:m("badge"),href:t},a.default.createElement("span",{className:m("badge-name")},"github"),a.default.createElement("span",{className:m("badge-version")},"source")):void 0;return a.default.createElement("div",{className:m("badge-container")},d,l)};u.propTypes=s;var i=u;t.Z=i},49271:function(e,t,n){var r=n(64836),a=n(18698);t.Z=void 0;var o=r(n(27424)),d=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==a(e)&&"function"!=typeof e)return{default:e};var n=f(t);if(n&&n.has(e))return n.get(e);var r={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var d in e)if("default"!==d&&Object.prototype.hasOwnProperty.call(e,d)){var l=o?Object.getOwnPropertyDescriptor(e,d):null;l&&(l.get||l.set)?Object.defineProperty(r,d,l):r[d]=e[d]}r.default=e,n&&n.set(e,r);return r}(n(67294)),l=r(n(45697)),m=r(n(47166)),s=n(21538),u=r(n(33864)),i=r(n(23399)),c=n(51051),p=r(n(53560));function f(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(f=function(e){return e?n:t})(e)}var v=m.default.bind(p.default),x={example:l.default.element,exampleSrc:l.default.element,exampleCssSrc:l.default.element,title:l.default.string,description:l.default.node,isExpanded:l.default.bool},h=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","true")},y=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","false")},b=function(e){var t=e.example,n=e.exampleSrc,r=e.exampleCssSrc,a=e.title,l=e.description,m=e.isExpanded,p=(0,d.useState)(m),f=(0,o.default)(p,2),x=f[0],b=f[1],E=(0,d.useState)(!1),g=(0,o.default)(E,2),C=g[0],_=g[1],N=d.default.useContext(s.ThemeContext),O=void 0!==r,T=function(){_(!C),x&&b(!x)},w=function(){b(!x),C&&_(!C)},j=function(e,t){e.nativeEvent.keyCode!==c.KEY_SPACE&&e.nativeEvent.keyCode!==c.KEY_RETURN||(e.preventDefault(),t())};return d.default.createElement("div",{className:v("template",N.className)},d.default.createElement("div",{className:v("header")},a&&d.default.createElement("h2",{className:v("title")},a)),d.default.createElement("div",{className:v("content")},l&&d.default.createElement("div",{className:v("description")},l),t),d.default.createElement("div",{className:v("footer")},n?d.default.createElement("div",{className:v("button-container")},O&&d.default.createElement("button",{type:"button",className:v("css-toggle","item",{"is-selected":C}),onClick:T,onKeyDown:function(e){return j(e,T)},onBlur:h,onMouseDown:y,tabIndex:0,"data-focus-styles-enabled":!0},d.default.createElement(u.default,{className:v("chevron")}),d.default.createElement("span",null,"CSS"),d.default.createElement(i.default,{className:v("chevron")})),d.default.createElement("button",{type:"button",className:v("code-toggle","item",{"is-selected":x}),onClick:w,onKeyDown:function(e){return j(e,w)},onBlur:h,onMouseDown:y,tabIndex:0,"data-focus-styles-enabled":!0},d.default.createElement(u.default,{className:v("chevron")}),d.default.createElement("span",null,"Code"),d.default.createElement(i.default,{className:v("chevron")}))):null,d.default.createElement("div",null,C&&d.default.createElement("div",{className:v("css")},r),x&&d.default.createElement("div",{className:v("code")},n))))};b.propTypes=x,b.defaultProps={isExpanded:!1};var E=b;t.Z=E},68288:function(e,t,n){var r=n(64836);t.Z=void 0;var a=r(n(67294)),o=r(n(81386));n(19100).Consumer.init();var d=function(){return a.default.createElement(o.default,{src:"/raw/provider/terra-embedded-content-consumer/embedded-content-consumer/providers/basic-provider",options:{iframeAttrs:{title:"Basic content example"}}})};t.Z=d},14213:function(e,t,n){var r=n(64836);t.Z=void 0;var a=r(n(67294)),o=r(n(81386));n(19100).Consumer.init();var d=[{key:"EventA",handler:function(){document.getElementById("CustomEvent").style.border="thick dashed #0000FF"}}],l=function(){return a.default.createElement("div",{id:"CustomEvent"},a.default.createElement(o.default,{src:"/raw/provider/terra-embedded-content-consumer/embedded-content-consumer/providers/custom-event-provider",options:{iframeAttrs:{title:"Custom Event Example"}},eventHandlers:d}))};t.Z=l},34229:function(e,t,n){var r=n(64836);t.Z=void 0;var a=r(n(56690)),o=r(n(89728)),d=r(n(66115)),l=r(n(61655)),m=r(n(94993)),s=r(n(73808)),u=r(n(67294)),i=r(n(81386));function c(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=(0,s.default)(e);if(t){var a=(0,s.default)(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return(0,m.default)(this,n)}}n(19100).Consumer.init();var p=function(e){(0,l.default)(n,e);var t=c(n);function n(e){var r;return(0,a.default)(this,n),(r=t.call(this,e)).onMount=r.onMount.bind((0,d.default)(r)),r.handleEventA=r.handleEventA.bind((0,d.default)(r)),r.handleEventB=r.handleEventB.bind((0,d.default)(r)),r}return(0,o.default)(n,[{key:"handleEventA",value:function(){document.getElementById("CustomEvents").style.border="thick dashed #0000FF",this.frame.trigger("Event-Reply",{eventReply:"eventA",borderColor:"#0000FF"})}},{key:"handleEventB",value:function(){document.getElementById("CustomEvents").style.border="thick dashed #00FF00",this.frame.trigger("Event-Reply",{eventReply:"eventB",borderColor:"#00FF00"})}},{key:"onMount",value:function(e){this.frame=e}},{key:"render",value:function(){var e=[{key:"EventA",handler:this.handleEventA},{key:"EventB",handler:this.handleEventB}];return u.default.createElement("div",{id:"CustomEvents"},u.default.createElement(i.default,{src:"/raw/provider/terra-embedded-content-consumer/embedded-content-consumer/providers/custom-events-provider",options:{iframeAttrs:{title:"Custom events example"}},onMount:this.onMount,eventHandlers:e}))}}]),n}(u.default.Component);t.Z=p},67341:function(e,t,n){var r=n(64836);t.Z=void 0;var a=r(n(67294)),o=r(n(81386));n(19100).Consumer.init();var d=function(e){var t=document.getElementById("data-embedded-consumer-data-status");if(t){var n=t.contentWindow.document.getElementById("DataStatus-LifeCycleStatuses");n&&e.forEach((function(e){var t,r;n.appendChild((t=e,(r=document.createElement("li")).appendChild(document.createTextNode(t)),r))}))}},l={secret:"OAuth Secret",iframeAttrs:{title:"Embedded application lifecycle example",id:"data-embedded-consumer-data-status"}},m=function(){setTimeout((function(){d(["Mounted"])}),2e3)},s=function(){setTimeout((function(){d(["Launched"])}),3e3)},u=function(){setTimeout((function(){d(["Authorized"])}),4e3)},i=function(){return a.default.createElement(o.default,{src:"/raw/provider/terra-embedded-content-consumer/embedded-content-consumer/providers/data-status-provider",onMount:m,onLaunch:s,onAuthorize:u,options:l})};t.Z=i},58136:function(e,t,n){n.r(t),n.d(t,{default:function(){return J}});var r=n(67294),a=n(81254),o=n(10581),d=n(78530),l=["components"];function m(){return m=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},m.apply(this,arguments)}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u={},i="wrapper";function c(e){var t=e.components,n=s(e,l);return(0,a.mdx)(i,m({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.mdx)(d.ZP,{mdxType:"PropsTable"},(0,a.mdx)(d.X2,{key:"ROW1",mdxType:"Row"},(0,a.mdx)(d.O,{mdxType:"PropNameCell"},"src"),(0,a.mdx)(d.Di,{mdxType:"TypeCell"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"string\n"))),(0,a.mdx)(d.dS,{isRequired:!0,mdxType:"RequiredCell"}),(0,a.mdx)(d.mW,{mdxType:"DefaultValueCell"},(0,a.mdx)("p",null,"none")),(0,a.mdx)(d.Ex,{mdxType:"DescriptionCell"},(0,a.mdx)("p",null,"The source URL of the content to load."))),(0,a.mdx)(d.X2,{key:"ROW2",mdxType:"Row"},(0,a.mdx)(d.O,{mdxType:"PropNameCell"},"onMount"),(0,a.mdx)(d.Di,{mdxType:"TypeCell"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"func\n"))),(0,a.mdx)(d.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,a.mdx)(d.mW,{mdxType:"DefaultValueCell"},(0,a.mdx)("p",null,"none")),(0,a.mdx)(d.Ex,{mdxType:"DescriptionCell"},(0,a.mdx)("p",null,"Notifies the component that the container has been mounted. Provides a reference\nto this component to allow triggering messages on the embedded application."))),(0,a.mdx)(d.X2,{key:"ROW3",mdxType:"Row"},(0,a.mdx)(d.O,{mdxType:"PropNameCell"},"onLaunch"),(0,a.mdx)(d.Di,{mdxType:"TypeCell"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"func\n"))),(0,a.mdx)(d.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,a.mdx)(d.mW,{mdxType:"DefaultValueCell"},(0,a.mdx)("p",null,"none")),(0,a.mdx)(d.Ex,{mdxType:"DescriptionCell"},(0,a.mdx)("p",null,"Notifies the component that the container has been launched."))),(0,a.mdx)(d.X2,{key:"ROW4",mdxType:"Row"},(0,a.mdx)(d.O,{mdxType:"PropNameCell"},"onAuthorize"),(0,a.mdx)(d.Di,{mdxType:"TypeCell"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"func\n"))),(0,a.mdx)(d.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,a.mdx)(d.mW,{mdxType:"DefaultValueCell"},(0,a.mdx)("p",null,"none")),(0,a.mdx)(d.Ex,{mdxType:"DescriptionCell"},(0,a.mdx)("p",null,"Notifies the component that the container has been authorized."))),(0,a.mdx)(d.X2,{key:"ROW5",mdxType:"Row"},(0,a.mdx)(d.O,{mdxType:"PropNameCell"},"options"),(0,a.mdx)(d.Di,{mdxType:"TypeCell"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"object\n"))),(0,a.mdx)(d.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,a.mdx)(d.mW,{mdxType:"DefaultValueCell"},(0,a.mdx)("p",null,"none")),(0,a.mdx)(d.Ex,{mdxType:"DescriptionCell"},(0,a.mdx)("p",null,"The component can be configured with consumer frame options.\nSee xfc consumer configuration for details: ",(0,a.mdx)("a",{parentName:"p",href:"https://github.com/cerner/xfc"},"https://github.com/cerner/xfc")))),(0,a.mdx)(d.X2,{key:"ROW6",mdxType:"Row"},(0,a.mdx)(d.O,{mdxType:"PropNameCell"},"eventHandlers"),(0,a.mdx)(d.Di,{mdxType:"TypeCell"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"arrayOf: [{\n  shape: {\n    key: {\n      type: 'string',\n    },\n    handler: {\n      type: 'func',\n    },\n  },\n}],\n"))),(0,a.mdx)(d.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,a.mdx)(d.mW,{mdxType:"DefaultValueCell"},(0,a.mdx)("p",null,"none")),(0,a.mdx)(d.Ex,{mdxType:"DescriptionCell"},(0,a.mdx)("p",null,"A set of event handlers keyed by the event name.\nNote: Binding the event handler is necessary to make ",(0,a.mdx)("inlineCode",{parentName:"p"},"this")," work in the callback.")))))}c.isMDXComponent=!0;var p=n(68288),f=["components"];function v(){return v=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},v.apply(this,arguments)}function x(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var h={},y="wrapper";function b(e){var t=e.components,n=x(e,f);return(0,a.mdx)(y,v({},h,n,{components:t,mdxType:"MDXLayout"}),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport EmbeddedContentConsumer from 'terra-embedded-content-consumer';\nimport { Consumer } from 'xfc';\n\nConsumer.init();\n\nconst BasicConsumer = () => (\n  <EmbeddedContentConsumer\n    src=\"/raw/provider/terra-embedded-content-consumer/embedded-content-consumer/providers/basic-provider\"\n    options={{ iframeAttrs: { title: 'Basic content example' } }}\n  />\n);\n\nexport default BasicConsumer;\n\n")))}b.isMDXComponent=!0;var E=n(49271),g=function(e){var t=e.title,n=e.description,a=e.isExpanded;return r.createElement(E.Z,{title:t||"Basic Consumer",description:n,example:r.createElement(p.Z,null),exampleSrc:r.createElement(b,null),isExpanded:a})},C=n(14213),_=["components"];function N(){return N=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},N.apply(this,arguments)}function O(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var T={},w="wrapper";function j(e){var t=e.components,n=O(e,_);return(0,a.mdx)(w,N({},T,n,{components:t,mdxType:"MDXLayout"}),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport EmbeddedContentConsumer from 'terra-embedded-content-consumer';\nimport { Consumer } from 'xfc';\n\nConsumer.init();\n\nconst eventHandlers = [{\n  key: 'EventA',\n  handler: () => {\n    document.getElementById('CustomEvent').style.border = 'thick dashed #0000FF';\n  },\n}];\n\nconst CustomEventConsumer = () => (\n  <div id=\"CustomEvent\">\n    <EmbeddedContentConsumer\n      src=\"/raw/provider/terra-embedded-content-consumer/embedded-content-consumer/providers/custom-event-provider\"\n      options={{ iframeAttrs: { title: 'Custom Event Example' } }}\n      eventHandlers={eventHandlers}\n    />\n  </div>\n);\n\nexport default CustomEventConsumer;\n\n")))}j.isMDXComponent=!0;var k=function(e){var t=e.title,n=e.description,a=e.isExpanded;return r.createElement(E.Z,{title:t||"Custom Event Consumer",description:n,example:r.createElement(C.Z,null),exampleSrc:r.createElement(j,null),isExpanded:a})},R=n(34229),S=["components"];function B(){return B=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},B.apply(this,arguments)}function D(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var M={},P="wrapper";function A(e){var t=e.components,n=D(e,S);return(0,a.mdx)(P,B({},M,n,{components:t,mdxType:"MDXLayout"}),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport EmbeddedContentConsumer from 'terra-embedded-content-consumer';\nimport { Consumer } from 'xfc';\n\nConsumer.init();\n\nclass CustomEventsConsumer extends React.Component {\n  constructor(props) {\n    super(props);\n\n    this.onMount = this.onMount.bind(this);\n    this.handleEventA = this.handleEventA.bind(this);\n    this.handleEventB = this.handleEventB.bind(this);\n  }\n\n  handleEventA() {\n    document.getElementById('CustomEvents').style.border = 'thick dashed #0000FF';\n    this.frame.trigger('Event-Reply', { eventReply: 'eventA', borderColor: '#0000FF' });\n  }\n\n  handleEventB() {\n    document.getElementById('CustomEvents').style.border = 'thick dashed #00FF00';\n    this.frame.trigger('Event-Reply', { eventReply: 'eventB', borderColor: '#00FF00' });\n  }\n\n  onMount(frame) {\n    this.frame = frame;\n  }\n\n  render() {\n    const eventHandlers = [\n      {\n        key: 'EventA',\n        handler: this.handleEventA,\n      },\n      {\n        key: 'EventB',\n        handler: this.handleEventB,\n      },\n    ];\n\n    return (\n      <div id=\"CustomEvents\">\n        <EmbeddedContentConsumer\n          src=\"/raw/provider/terra-embedded-content-consumer/embedded-content-consumer/providers/custom-events-provider\"\n          options={{ iframeAttrs: { title: 'Custom events example' } }}\n          onMount={this.onMount}\n          eventHandlers={eventHandlers}\n        />\n      </div>\n    );\n  }\n}\n\nexport default CustomEventsConsumer;\n\n")))}A.isMDXComponent=!0;var L=function(e){var t=e.title,n=e.description,a=e.isExpanded;return r.createElement(E.Z,{title:t||"Custom Events Consumer",description:n,example:r.createElement(R.Z,null),exampleSrc:r.createElement(A,null),isExpanded:a})},F=n(67341),I=["components"];function Z(){return Z=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Z.apply(this,arguments)}function X(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var W={},z="wrapper";function q(e){var t=e.components,n=X(e,I);return(0,a.mdx)(z,Z({},W,n,{components:t,mdxType:"MDXLayout"}),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport EmbeddedContentConsumer from 'terra-embedded-content-consumer';\nimport { Consumer } from 'xfc';\n\nConsumer.init();\n\nconst createListItem = (itemName) => {\n  const listItem = document.createElement('li');\n  listItem.appendChild(document.createTextNode(itemName));\n\n  return listItem;\n};\n\nconst appendLifeCycleStatuses = (statuses) => {\n  const frame = document.getElementById('data-embedded-consumer-data-status');\n  if (!frame) {\n    return;\n  }\n\n  const frameContent = frame.contentWindow.document.getElementById('DataStatus-LifeCycleStatuses');\n  if (frameContent) {\n    statuses.forEach((status) => { frameContent.appendChild(createListItem(status)); });\n  }\n};\n\nconst options = { secret: 'OAuth Secret', iframeAttrs: { title: 'Embedded application lifecycle example', id: 'data-embedded-consumer-data-status' } };\n\nconst onMount = () => {\n  setTimeout(() => { appendLifeCycleStatuses(['Mounted']); }, 2000);\n};\n\nconst onLaunch = () => {\n  setTimeout(() => { appendLifeCycleStatuses(['Launched']); }, 3000);\n};\n\nconst onAuthorize = () => {\n  setTimeout(() => { appendLifeCycleStatuses(['Authorized']); }, 4000);\n};\n\nconst DataStatusConsumer = () => (\n  <EmbeddedContentConsumer\n    src=\"/raw/provider/terra-embedded-content-consumer/embedded-content-consumer/providers/data-status-provider\"\n    onMount={onMount}\n    onLaunch={onLaunch}\n    onAuthorize={onAuthorize}\n    options={options}\n  />\n);\n\nexport default DataStatusConsumer;\n\n")))}q.isMDXComponent=!0;var H=function(e){var t=e.title,n=e.description,a=e.isExpanded;return r.createElement(E.Z,{title:t||"Data Status Consumer",description:n,example:r.createElement(F.Z,null),exampleSrc:r.createElement(q,null),isExpanded:a})},V=(n(19100),["components"]);function G(){return G=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},G.apply(this,arguments)}function K(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var U={},Y="wrapper";function J(e){var t=e.components,n=K(e,V);return(0,a.mdx)(Y,G({},U,n,{components:t,mdxType:"MDXLayout"}),(0,a.mdx)(o.C,{mdxType:"Badge"}),(0,a.mdx)("h1",{id:"terra-embedded-content-consumer"},"Terra Embedded Content Consumer"),(0,a.mdx)("p",null,"The Embedded Content Consumer is the managed application component which is embedding web content within an iframe. The Embedded Content Consumer is responsible for the communication between its embedded content to its framework, such that interaction with embedded content appears seemless."),(0,a.mdx)("p",null,"Under the hood, the embedded-content-consumer utilizes an ",(0,a.mdx)("a",{parentName:"p",href:"https://www.npmjs.com/package/xfc"},(0,a.mdx)("inlineCode",{parentName:"a"},"XFC (Cross-Frame-Container)"))," Consumer to manage the iframe size and to listen for messages bridged out from the embedded content through an XFC provider."),(0,a.mdx)("p",null,"The embedded-content-consumer will use the messages sent from the embedded content to determine if updates are neeed within itself. Otherwise if the embedded content needs to be updated, embedded-content-consumer should send a reply message to the embedded content provider. Then, the embedded content will update itself when it receives the embedded-content-consumer message."),(0,a.mdx)("h2",{id:"getting-started"},"Getting Started"),(0,a.mdx)("ul",null,(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("p",{parentName:"li"},"Install with ",(0,a.mdx)("a",{parentName:"p",href:"https://www.npmjs.com/"},"npmjs"),":"),(0,a.mdx)("ul",{parentName:"li"},(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("inlineCode",{parentName:"li"},"npm install terra-embedded-content-consumer")))),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("p",{parentName:"li"},"Install the ",(0,a.mdx)("a",{parentName:"p",href:"https://www.npmjs.com/package/xfc"},(0,a.mdx)("inlineCode",{parentName:"a"},"xfc"))," peer dependency:"),(0,a.mdx)("ul",{parentName:"li"},(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("inlineCode",{parentName:"li"},"npm install xfc --save-dev")))),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("p",{parentName:"li"},"Then, initalize the XFC Consumer at the root of your application to use the ",(0,a.mdx)("inlineCode",{parentName:"p"},"terra-embedded-content-consumer"),". This will create an app broker to manage embedded applications."))),(0,a.mdx)("h2",{id:"peer-dependencies"},"Peer Dependencies"),(0,a.mdx)("p",null,"This component requires the following peer dependencies be installed in your app for the component to properly function."),(0,a.mdx)("table",null,(0,a.mdx)("thead",{parentName:"table"},(0,a.mdx)("tr",{parentName:"thead"},(0,a.mdx)("th",{parentName:"tr",align:null},"Peer Dependency"),(0,a.mdx)("th",{parentName:"tr",align:null},"Version"))),(0,a.mdx)("tbody",{parentName:"table"},(0,a.mdx)("tr",{parentName:"tbody"},(0,a.mdx)("td",{parentName:"tr",align:null},"react"),(0,a.mdx)("td",{parentName:"tr",align:null},"^16.8.5")),(0,a.mdx)("tr",{parentName:"tbody"},(0,a.mdx)("td",{parentName:"tr",align:null},"react-dom"),(0,a.mdx)("td",{parentName:"tr",align:null},"^16.8.5")),(0,a.mdx)("tr",{parentName:"tbody"},(0,a.mdx)("td",{parentName:"tr",align:null},"xfc"),(0,a.mdx)("td",{parentName:"tr",align:null},"^1.2.1")))),(0,a.mdx)("h2",{id:"usage"},"Usage"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-jsx"},"import { Consumer } from 'xfc';\nimport EmbeddedContentConsumer from 'terra-embedded-content-consumer';\nConsumer.init();\n")),(0,a.mdx)("h2",{id:"component-features"},"Component Features"),(0,a.mdx)("ul",null,(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("a",{parentName:"li",href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#cross-browser-support"},"Cross-Browser Support")),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("a",{parentName:"li",href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#responsive-support"},"Responsive Support")),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("a",{parentName:"li",href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#mobile-support"},"Mobile Support"))),(0,a.mdx)("h2",{id:"examples"},"Examples"),(0,a.mdx)(g,{title:"Basic Embedded Content Consumer",mdxType:"BasicConsumer"}),(0,a.mdx)(H,{title:"Embedded Content Consumer Lifecycle Statuses",mdxType:"DataStatusConsumer"}),(0,a.mdx)(k,{title:"Embedded Content Consumer that Listens for a Custom Event",mdxType:"CustomEventConsumer"}),(0,a.mdx)(L,{title:"Embedded Content Consumer with Seamless Communication",mdxType:"CustomEventsConsumer"}),(0,a.mdx)("h2",{id:"embedded-content-consumer-props-table"},"Embedded Content Consumer Props Table"),(0,a.mdx)(c,{mdxType:"EmbeddedContentConsumerPropsTable"}))}J.isMDXComponent=!0},10581:function(e,t,n){n.d(t,{C:function(){return o}});var r=n(67294),a=n(22863),o=function(e){var t=e.url;return r.createElement(a.Z,{src:"https://github.com/cerner/terra-framework/tree/main/packages/terra-embedded-content-consumer",name:"terra-embedded-content-consumer",version:"3.35.0",url:t})}},17422:function(e,t,n){n.r(t),t.default={badge:"Badges-module__badge___vex-+","badge-container":"Badges-module__badge-container___B13Mv","badge-name":"Badges-module__badge-name___jkN0m","badge-version":"Badges-module__badge-version___agZ+P"}},53560:function(e,t,n){n.r(t),t.default={"orion-fusion-theme":"ExampleTemplate-module__orion-fusion-theme___GzA23",template:"ExampleTemplate-module__template___a4uPk",header:"ExampleTemplate-module__header___iFXV3",content:"ExampleTemplate-module__content___48m4Q",description:"ExampleTemplate-module__description___NwBJo",footer:"ExampleTemplate-module__footer___GpSoG","button-container":"ExampleTemplate-module__button-container___rAD11",css:"ExampleTemplate-module__css___+jtk1",code:"ExampleTemplate-module__code___7rC6C","css-toggle":"ExampleTemplate-module__css-toggle___chHK7","code-toggle":"ExampleTemplate-module__code-toggle___TGlE-","is-selected":"ExampleTemplate-module__is-selected___0BYwS",item:"ExampleTemplate-module__item___8FTQq",chevron:"ExampleTemplate-module__chevron___VbY7N",title:"ExampleTemplate-module__title___r+nbJ","dynamic-content":"ExampleTemplate-module__dynamic-content___k+1H7"}},81386:function(e,t,n){var r=n(64836);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=r(n(10434)),o=r(n(70215)),d=r(n(56690)),l=r(n(89728)),m=r(n(61655)),s=r(n(94993)),u=r(n(73808)),i=r(n(67294)),c=r(n(45697)),p=n(19100),f=["src","onMount","onLaunch","onAuthorize","options","eventHandlers"];function v(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=(0,u.default)(e);if(t){var a=(0,u.default)(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return(0,s.default)(this,n)}}var x={src:c.default.string.isRequired,onMount:c.default.func,onLaunch:c.default.func,onAuthorize:c.default.func,options:c.default.object,eventHandlers:c.default.arrayOf(c.default.shape({key:c.default.string,handler:c.default.func}))},h=function(e){(0,m.default)(n,e);var t=v(n);function n(){return(0,d.default)(this,n),t.apply(this,arguments)}return(0,l.default)(n,[{key:"componentDidMount",value:function(){this.xfcFrame=p.Consumer.mount(this.embeddedContentWrapper,this.props.src,this.props.options),this.props.onMount&&this.props.onMount(this.xfcFrame),this.addEventListener("xfc.launched",this.props.onLaunch),this.addEventListener("xfc.authorized",this.props.onAuthorize),this.addEventListeners(this.props.eventHandlers)}},{key:"addEventListener",value:function(e,t){e&&t&&this.xfcFrame.on(e,t)}},{key:"addEventListeners",value:function(e){var t=this;(e||[]).forEach((function(e){return t.addEventListener(e.key,e.handler)}))}},{key:"render",value:function(){var e=this,t=this.props,n=(t.src,t.onMount,t.onLaunch,t.onAuthorize,t.options,t.eventHandlers,(0,o.default)(t,f));return i.default.createElement("div",(0,a.default)({},n,{ref:function(t){e.embeddedContentWrapper=t}}))}}]),n}(i.default.Component);h.propTypes=x;var y=h;t.default=y},33864:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=o(n(67294)),a=o(n(99139));function o(e){return e&&e.__esModule?e:{default:e}}function d(){return d=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},d.apply(this,arguments)}var l=function(e){var t=d({},e);return r.default.createElement(a.default,t,r.default.createElement("path",{d:"M10.3 24L33.8 0l3.9 3.8L18 24l19.7 20.2-3.9 3.8z"}))};l.displayName="IconChevronLeft",l.defaultProps={className:"",viewBox:"0 0 48 48",xmlns:"http://www.w3.org/2000/svg","data-name":"Layer 1",isBidi:!0};var m=l;t.default=m}}]);