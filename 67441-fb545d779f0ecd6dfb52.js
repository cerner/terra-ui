"use strict";(self.webpackChunkterra_ui=self.webpackChunkterra_ui||[]).push([[67441],{22863:function(e,t,n){var r=n(64836);t.Z=void 0;var a=r(n(67294)),o=r(n(45697)),l=r(n(47166)),d=r(n(17422)),i=l.default.bind(d.default),s={name:o.default.string.isRequired,src:o.default.string,url:o.default.string,version:o.default.string.isRequired},c=function(e){var t=e.src,n=e.name,r=e.url,o=e.version,l=a.default.createElement("a",{className:i("badge"),href:r||"https://www.npmjs.org/package/".concat(n,"/v/").concat(o)},a.default.createElement("span",{className:i("badge-name")},r?"package":"npm"),a.default.createElement("span",{className:i("badge-version")},"v".concat(o))),d=t?a.default.createElement("a",{className:i("badge"),href:t},a.default.createElement("span",{className:i("badge-name")},"github"),a.default.createElement("span",{className:i("badge-version")},"source")):void 0;return a.default.createElement("div",{className:i("badge-container")},l,d)};c.propTypes=s;var u=c;t.Z=u},49271:function(e,t,n){var r=n(64836),a=n(18698);t.Z=void 0;var o=r(n(27424)),l=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==a(e)&&"function"!=typeof e)return{default:e};var n=f(t);if(n&&n.has(e))return n.get(e);var r={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var l in e)if("default"!==l&&Object.prototype.hasOwnProperty.call(e,l)){var d=o?Object.getOwnPropertyDescriptor(e,l):null;d&&(d.get||d.set)?Object.defineProperty(r,l,d):r[l]=e[l]}r.default=e,n&&n.set(e,r);return r}(n(67294)),d=r(n(45697)),i=r(n(47166)),s=n(21538),c=r(n(33864)),u=r(n(23399)),m=n(51051),p=r(n(53560));function f(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(f=function(e){return e?n:t})(e)}var v=i.default.bind(p.default),h={example:d.default.element,exampleSrc:d.default.element,exampleCssSrc:d.default.element,title:d.default.string,description:d.default.node,isExpanded:d.default.bool},b=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","true")},g=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","false")},y=function(e){var t=e.example,n=e.exampleSrc,r=e.exampleCssSrc,a=e.title,d=e.description,i=e.isExpanded,p=(0,l.useState)(i),f=(0,o.default)(p,2),h=f[0],y=f[1],E=(0,l.useState)(!1),x=(0,o.default)(E,2),C=x[0],T=x[1],_=l.default.useContext(s.ThemeContext),w=void 0!==r,O=function(){T(!C),h&&y(!h)},P=function(){y(!h),C&&T(!C)},k=function(e,t){e.nativeEvent.keyCode!==m.KEY_SPACE&&e.nativeEvent.keyCode!==m.KEY_RETURN||(e.preventDefault(),t())};return l.default.createElement("div",{className:v("template",_.className)},l.default.createElement("div",{className:v("header")},a&&l.default.createElement("h2",{className:v("title")},a)),l.default.createElement("div",{className:v("content")},d&&l.default.createElement("div",{className:v("description")},d),t),l.default.createElement("div",{className:v("footer")},n?l.default.createElement("div",{className:v("button-container")},w&&l.default.createElement("button",{type:"button",className:v("css-toggle","item",{"is-selected":C}),onClick:O,onKeyDown:function(e){return k(e,O)},onBlur:b,onMouseDown:g,tabIndex:0,"data-focus-styles-enabled":!0},l.default.createElement(c.default,{className:v("chevron")}),l.default.createElement("span",null,"CSS"),l.default.createElement(u.default,{className:v("chevron")})),l.default.createElement("button",{type:"button",className:v("code-toggle","item",{"is-selected":h}),onClick:P,onKeyDown:function(e){return k(e,P)},onBlur:b,onMouseDown:g,tabIndex:0,"data-focus-styles-enabled":!0},l.default.createElement(c.default,{className:v("chevron")}),l.default.createElement("span",null,"Code"),l.default.createElement(u.default,{className:v("chevron")}))):null,l.default.createElement("div",null,C&&l.default.createElement("div",{className:v("css")},r),h&&l.default.createElement("div",{className:v("code")},n))))};y.propTypes=h,y.defaultProps={isExpanded:!1};var E=y;t.Z=E},32298:function(e,t,n){var r=n(64836);t.Z=void 0;var a=r(n(67294)),o=r(n(47166)),l=r(n(47830)),d=r(n(75328)),i=o.default.bind(d.default),s=function(){return a.default.createElement(l.default,null,a.default.createElement("div",{className:i("content-wrapper")},a.default.createElement("h1",null,"Basic Content"),a.default.createElement("p",null,"This example demonstrates that the embedded content consumer will display the providers web content within an iframe.")))};t.Z=s},55082:function(e,t,n){var r=n(64836);t.Z=void 0;var a=r(n(56690)),o=r(n(89728)),l=r(n(66115)),d=r(n(61655)),i=r(n(94993)),s=r(n(73808)),c=r(n(67294)),u=n(19100),m=r(n(47166)),p=r(n(47830)),f=r(n(75328));function v(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=(0,s.default)(e);if(t){var a=(0,s.default)(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return(0,i.default)(this,n)}}var h=m.default.bind(f.default),b=function(e){(0,d.default)(n,e);var t=v(n);function n(e){var r;return(0,a.default)(this,n),(r=t.call(this,e)).onClick=r.onClick.bind((0,l.default)(r)),r}return(0,o.default)(n,[{key:"onClick",value:function(){u.Provider.trigger("EventA")}},{key:"render",value:function(){return c.default.createElement("div",{className:h("content-wrapper")},c.default.createElement("h1",null,"Listening to Custom Event"),c.default.createElement("p",null,"A custom event can be registered with the consumer and intiated by the provider. What this means is that the embedded-content-consumer will listen for an event message that will be sent by the embedded web content. When it receives that message, the embedded-content-consumer is then responsible for handling the message for the corresponding iframe. "),c.default.createElement("p",null,"This example demonstrates that the custom event `EventA` has been registered and received by the embedded-content-container that has been registered with the XFC Consumer app broker."),c.default.createElement("ol",null,c.default.createElement("li",null,c.default.createElement("p",null,"Click the button below for the provider (i.e. embedded web content) to send the message `EventA`.")),c.default.createElement("li",null,c.default.createElement("p",null,"The embedded-content-consumer receives this message and handles the message by adding a border to the embedded content"))),c.default.createElement("button",{id:"EventA",onClick:this.onClick,type:"button"},"Set Border Color!"))}}]),n}(c.default.Component),g=function(){return c.default.createElement(p.default,null,c.default.createElement(b,null))};t.Z=g},89766:function(e,t,n){var r=n(64836);t.Z=void 0;var a=r(n(56690)),o=r(n(89728)),l=r(n(66115)),d=r(n(61655)),i=r(n(94993)),s=r(n(73808)),c=r(n(67294)),u=n(19100),m=r(n(47166)),p=r(n(47830)),f=r(n(75328));function v(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=(0,s.default)(e);if(t){var a=(0,s.default)(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return(0,i.default)(this,n)}}var h=m.default.bind(f.default),b=function(e){(0,d.default)(n,e);var t=v(n);function n(e){var r;return(0,a.default)(this,n),(r=t.call(this,e)).addEventListener=r.addEventListener.bind((0,l.default)(r)),r.onClickA=r.onClickA.bind((0,l.default)(r)),r.onClickB=r.onClickB.bind((0,l.default)(r)),r.addEventListener("Event-Reply"),r}return(0,o.default)(n,[{key:"onClickA",value:function(){u.Provider.trigger("EventA")}},{key:"onClickB",value:function(){u.Provider.trigger("EventB")}},{key:"addEventListener",value:function(e){u.Provider.on(e,(function(e){document.getElementById("embedded-content-consumer-reply").innerHTML="embedded-content-consumer reply: ".concat(JSON.stringify(e))}))}},{key:"render",value:function(){return c.default.createElement("div",{className:h("content-wrapper")},c.default.createElement("h1",null,"Communication Between the Consumer and Embedded Content"),c.default.createElement("p",null,"Multiple custom events can be registered with the consumer and intiated by the provider to enable seamless communication. Thus the embedded-content-consumer will listen for an event message, handle it and send a reply to the provider."),c.default.createElement("p",null,"This example demonstrates that both custom events `EventA` and `EventB` has been registered and received by the embedded-content-container and that communication occurs between the consumer and embbedded content."),c.default.createElement("ol",{id:"embedded-content-custom-events-communication-explination"},c.default.createElement("li",null,c.default.createElement("p",null,"Click the button `Trigger Event A!` below for the provider (i.e. embedded web content) to send the message `EventA`.")),c.default.createElement("li",null,c.default.createElement("p",null,"The embedded-content-consumer receives this message and handles the message by adding a border around the embedded content iframe and send a reply to the provider.")),c.default.createElement("li",null,c.default.createElement("p",null,"Click the button `Trigger Event B!` below for the provider to send the second event message `EventB`.")),c.default.createElement("li",null,c.default.createElement("p",null,"The embedded-content-consumer receives this message and will change the border around the embedded content iframe and send a reply to the provider."))),c.default.createElement("p",null,"Then, to demonstrate seamless communication, click the button and read message sent by the embbedded-content-consumer to the embedded content. "),c.default.createElement("button",{id:"EventA",onClick:this.onClickA,type:"button"},"Trigger Event A!"),c.default.createElement("button",{id:"EventB",onClick:this.onClickB,type:"button"},"Trigger Event B!"),c.default.createElement("div",{id:"embedded-content-consumer-reply"},"No message has been sent."))}}]),n}(c.default.Component),g=function(){return c.default.createElement(p.default,null,c.default.createElement(b,null))};t.Z=g},21354:function(e,t,n){var r=n(64836);t.Z=void 0;var a=r(n(67294)),o=r(n(47166)),l=r(n(47830)),d=r(n(75328)),i=o.default.bind(d.default),s=function(){return a.default.createElement(l.default,null,a.default.createElement("div",{className:i("content-wrapper")},a.default.createElement("h1",null,"Embedded Application Lifecycle"),a.default.createElement("p",null,"The embedded container consumer will go through three lifecyle stages as it loads. These statuses are communicated via `data-status` attributes on the iframe wrapper and listeners can be add to listen for the lifecyle changes of the frame."),a.default.createElement("p",null,"In this example the consumer listens for each lifecyle stage and adds its status value below after a small delay (to help differentiate each lifecycle stages):"),a.default.createElement("ul",{id:"DataStatus-LifeCycleStatuses"})))};t.Z=s},67441:function(e,t,n){n.r(t),n.d(t,{default:function(){return U}});var r=n(67294),a=n(81254),o=n(10581),l=n(78530),d=["components"];function i(){return i=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},i.apply(this,arguments)}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c={},u="wrapper";function m(e){var t=e.components,n=s(e,d);return(0,a.mdx)(u,i({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.mdx)(l.ZP,{mdxType:"PropsTable"},(0,a.mdx)(l.X2,{key:"ROW1",mdxType:"Row"},(0,a.mdx)(l.O,{mdxType:"PropNameCell"},"children"),(0,a.mdx)(l.Di,{mdxType:"TypeCell"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"node\n"))),(0,a.mdx)(l.dS,{isRequired:!0,mdxType:"RequiredCell"}),(0,a.mdx)(l.mW,{mdxType:"DefaultValueCell"},(0,a.mdx)("p",null,"none")),(0,a.mdx)(l.Ex,{mdxType:"DescriptionCell"},(0,a.mdx)("p",null,"The content which will be embedded in an iframe by the XFC consumer.")))))}m.isMDXComponent=!0;var p=n(32298),f=["components"];function v(){return v=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},v.apply(this,arguments)}function h(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var b={};function g(e){var t=e.components,n=h(e,f);return(0,a.mdx)("wrapper",v({},b,n,{components:t,mdxType:"MDXLayout"}),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport classNames from 'classnames/bind';\nimport ProviderTestTemplate from 'terra-embedded-content-consumer/lib/EmbeddedContentProviderTestTemplate';\nimport styles from './EmbeddedContentConsumerCommon.module.scss';\n\nconst cx = classNames.bind(styles);\n\nconst Provider = () => (\n  <ProviderTestTemplate>\n    <div className={cx('content-wrapper')}>\n      <h1>Basic Content</h1>\n      <p>This example demonstrates that the embedded content consumer will display the providers web content within an iframe.</p>\n    </div>\n  </ProviderTestTemplate>\n);\n\nexport default Provider;\n\n")))}g.isMDXComponent=!0;var y=n(49271),E=["components"];function x(){return x=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},x.apply(this,arguments)}function C(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var T={};function _(e){var t=e.components,n=C(e,E);return(0,a.mdx)("wrapper",x({},T,n,{components:t,mdxType:"MDXLayout"}),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-scss"},":local {\n  .content-wrapper {\n    padding: 1.25rem;\n  }\n}\n\n")))}_.isMDXComponent=!0;var w=function(e){var t=e.title,n=e.description,a=e.isExpanded;return r.createElement(y.Z,{title:t||"Basic Provider Provider",description:n,example:r.createElement(p.Z,null),exampleCssSrc:r.createElement(_,null),exampleSrc:r.createElement(g,null),isExpanded:a})},O=n(55082),P=["components"];function k(){return k=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},k.apply(this,arguments)}function j(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var N={};function B(e){var t=e.components,n=j(e,P);return(0,a.mdx)("wrapper",k({},N,n,{components:t,mdxType:"MDXLayout"}),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport { Provider } from 'xfc';\nimport classNames from 'classnames/bind';\nimport ProviderTestTemplate from 'terra-embedded-content-consumer/lib/EmbeddedContentProviderTestTemplate';\nimport styles from './EmbeddedContentConsumerCommon.module.scss';\n\nconst cx = classNames.bind(styles);\n\nclass EmbeddedContent extends React.Component {\n  constructor(props) {\n    super(props);\n    this.onClick = this.onClick.bind(this);\n  }\n\n  // eslint-disable-next-line\n  onClick() {\n    Provider.trigger('EventA');\n  }\n\n  render() {\n    return (\n      <div className={cx('content-wrapper')}>\n        <h1>Listening to Custom Event</h1>\n        <p>A custom event can be registered with the consumer and intiated by the provider. What this means is that the embedded-content-consumer will listen for an event message that will be sent by the embedded web content. When it receives that message, the embedded-content-consumer is then responsible for handling the message for the corresponding iframe. </p>\n        <p>This example demonstrates that the custom event `EventA` has been registered and received by the embedded-content-container that has been registered with the XFC Consumer app broker.</p>\n        <ol>\n          <li><p>Click the button below for the provider (i.e. embedded web content) to send the message `EventA`.</p></li>\n          <li><p>The embedded-content-consumer receives this message and handles the message by adding a border to the embedded content</p></li>\n        </ol>\n        <button id=\"EventA\" onClick={this.onClick} type=\"button\">Set Border Color!</button>\n      </div>\n    );\n  }\n}\n\nconst CustomEventProvider = () => (\n  <ProviderTestTemplate>\n    <EmbeddedContent />\n  </ProviderTestTemplate>\n);\n\nexport default CustomEventProvider;\n\n")))}B.isMDXComponent=!0;var S=function(e){var t=e.title,n=e.description,a=e.isExpanded;return r.createElement(y.Z,{title:t||"Custom Event Provider Provider",description:n,example:r.createElement(O.Z,null),exampleCssSrc:r.createElement(_,null),exampleSrc:r.createElement(B,null),isExpanded:a})},A=n(89766),D=["components"];function R(){return R=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},R.apply(this,arguments)}function M(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var L={};function Z(e){var t=e.components,n=M(e,D);return(0,a.mdx)("wrapper",R({},L,n,{components:t,mdxType:"MDXLayout"}),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport { Provider } from 'xfc';\nimport classNames from 'classnames/bind';\nimport ProviderTestTemplate from 'terra-embedded-content-consumer/lib/EmbeddedContentProviderTestTemplate';\nimport styles from './EmbeddedContentConsumerCommon.module.scss';\n\nconst cx = classNames.bind(styles);\n\nclass EmbeddedContent extends React.Component {\n  constructor(props) {\n    super(props);\n    this.addEventListener = this.addEventListener.bind(this);\n    this.onClickA = this.onClickA.bind(this);\n    this.onClickB = this.onClickB.bind(this);\n\n    this.addEventListener('Event-Reply');\n  }\n\n  // eslint-disable-next-line\n  onClickA() {\n    Provider.trigger('EventA');\n  }\n\n  // eslint-disable-next-line\n  onClickB() {\n    Provider.trigger('EventB');\n  }\n\n  // eslint-disable-next-line\n  addEventListener(eventName) {\n    Provider.on(eventName, (event) => {\n      document.getElementById('embedded-content-consumer-reply').innerHTML = `embedded-content-consumer reply: ${JSON.stringify(event)}`;\n    });\n  }\n\n  render() {\n    return (\n      <div className={cx('content-wrapper')}>\n        <h1>Communication Between the Consumer and Embedded Content</h1>\n        <p>Multiple custom events can be registered with the consumer and intiated by the provider to enable seamless communication. Thus the embedded-content-consumer will listen for an event message, handle it and send a reply to the provider.</p>\n        <p>This example demonstrates that both custom events `EventA` and `EventB` has been registered and received by the embedded-content-container and that communication occurs between the consumer and embbedded content.</p>\n        <ol id=\"embedded-content-custom-events-communication-explination\">\n          <li><p>Click the button `Trigger Event A!` below for the provider (i.e. embedded web content) to send the message `EventA`.</p></li>\n          <li><p>The embedded-content-consumer receives this message and handles the message by adding a border around the embedded content iframe and send a reply to the provider.</p></li>\n          <li><p>Click the button `Trigger Event B!` below for the provider to send the second event message `EventB`.</p></li>\n          <li><p>The embedded-content-consumer receives this message and will change the border around the embedded content iframe and send a reply to the provider.</p></li>\n        </ol>\n        <p>Then, to demonstrate seamless communication, click the button and read message sent by the embbedded-content-consumer to the embedded content. </p>\n        <button id=\"EventA\" onClick={this.onClickA} type=\"button\">Trigger Event A!</button>\n        <button id=\"EventB\" onClick={this.onClickB} type=\"button\">Trigger Event B!</button>\n        <div id=\"embedded-content-consumer-reply\">No message has been sent.</div>\n      </div>\n    );\n  }\n}\n\nconst CustomEventsProvider = () => (\n  <ProviderTestTemplate>\n    <EmbeddedContent />\n  </ProviderTestTemplate>\n);\n\nexport default CustomEventsProvider;\n\n")))}Z.isMDXComponent=!0;var X=function(e){var t=e.title,n=e.description,a=e.isExpanded;return r.createElement(y.Z,{title:t||"Custom Events Provider Provider",description:n,example:r.createElement(A.Z,null),exampleCssSrc:r.createElement(_,null),exampleSrc:r.createElement(Z,null),isExpanded:a})},I=n(21354),W=["components"];function z(){return z=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},z.apply(this,arguments)}function F(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var q={};function K(e){var t=e.components,n=F(e,W);return(0,a.mdx)("wrapper",z({},q,n,{components:t,mdxType:"MDXLayout"}),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport classNames from 'classnames/bind';\nimport ProviderTestTemplate from 'terra-embedded-content-consumer/lib/EmbeddedContentProviderTestTemplate';\nimport styles from './EmbeddedContentConsumerCommon.module.scss';\n\nconst cx = classNames.bind(styles);\n\nconst DataStatusProvider2 = () => (\n  <ProviderTestTemplate>\n    <div className={cx('content-wrapper')}>\n      <h1>Embedded Application Lifecycle</h1>\n      <p>The embedded container consumer will go through three lifecyle stages as it loads. These statuses are communicated via `data-status` attributes on the iframe wrapper and listeners can be add to listen for the lifecyle changes of the frame.</p>\n      <p>In this example the consumer listens for each lifecyle stage and adds its status value below after a small delay (to help differentiate each lifecycle stages):</p>\n      <ul id=\"DataStatus-LifeCycleStatuses\" />\n    </div>\n  </ProviderTestTemplate>\n);\n\nexport default DataStatusProvider2;\n\n")))}K.isMDXComponent=!0;var G=function(e){var t=e.title,n=e.description,a=e.isExpanded;return r.createElement(y.Z,{title:t||"Data Status Provider Provider",description:n,example:r.createElement(I.Z,null),exampleCssSrc:r.createElement(_,null),exampleSrc:r.createElement(K,null),isExpanded:a})},H=["components"];function J(){return J=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},J.apply(this,arguments)}function Y(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var V={},Q="wrapper";function U(e){var t=e.components,n=Y(e,H);return(0,a.mdx)(Q,J({},V,n,{components:t,mdxType:"MDXLayout"}),(0,a.mdx)(o.C,{mdxType:"Badge"}),(0,a.mdx)("h1",{id:"testing-embedded-content"},"Testing Embedded Content"),(0,a.mdx)("p",null,"The Embedded Content Provider Test Template is a test template component which should be used to verify that the provided content does indeed resize and behave as expected when embedded in an terra-embedded-content-consumer XFC Consumer iframe. "),(0,a.mdx)("p",null,"By default, when the embedded-content-consumer provides the iframe with the url of the embedded content, it will resize the iframe's height to be the height of the content supplied in the url. This resize logic, however, does not recognize height 100% and will continoulsy re-trigger resize events until the iframe collapes with a height of zero if the root style sets height to 100%. "),(0,a.mdx)("p",null,"This test template provides the styles needed to correctly set the iframed container's height to the actual height of the provided content when the XFC's default height resizing logic is triggered."),(0,a.mdx)("h2",{id:"examples"},"Examples"),(0,a.mdx)(w,{title:" Provider for the Basic Consumer Example",mdxType:"BasicProvider"}),(0,a.mdx)(G,{title:"Provider Content for the Lifecycle Statuses Consumer Example",mdxType:"DataStatusProvider"}),(0,a.mdx)(S,{title:"Provider Content for the Custom Event Consumer Example",mdxType:"CustomEventProvider"}),(0,a.mdx)(X,{title:"Provider Content for the Seamless Communication Consumer Example",mdxType:"CustomEventsProvider"}),(0,a.mdx)("h2",{id:"embedded-content-provider-test-template-props-table"},"Embedded Content Provider Test Template Props Table"),(0,a.mdx)(m,{mdxType:"EmbeddedContentProviderTestTemplate"}))}U.isMDXComponent=!0},10581:function(e,t,n){n.d(t,{C:function(){return o}});var r=n(67294),a=n(22863),o=function(e){var t=e.url;return r.createElement(a.Z,{src:"https://github.com/cerner/terra-framework/tree/main/packages/terra-embedded-content-consumer",name:"terra-embedded-content-consumer",version:"3.37.0",url:t})}},17422:function(e,t,n){n.r(t),t.default={badge:"Badges-module__badge___vex-+","badge-container":"Badges-module__badge-container___B13Mv","badge-name":"Badges-module__badge-name___jkN0m","badge-version":"Badges-module__badge-version___agZ+P"}},53560:function(e,t,n){n.r(t),t.default={"clinical-lowlight-theme":"ExampleTemplate-module__clinical-lowlight-theme___rBbtD","orion-fusion-theme":"ExampleTemplate-module__orion-fusion-theme___GzA23",template:"ExampleTemplate-module__template___a4uPk",header:"ExampleTemplate-module__header___iFXV3",content:"ExampleTemplate-module__content___48m4Q",description:"ExampleTemplate-module__description___NwBJo",footer:"ExampleTemplate-module__footer___GpSoG","button-container":"ExampleTemplate-module__button-container___rAD11",css:"ExampleTemplate-module__css___+jtk1",code:"ExampleTemplate-module__code___7rC6C","css-toggle":"ExampleTemplate-module__css-toggle___chHK7","code-toggle":"ExampleTemplate-module__code-toggle___TGlE-","is-selected":"ExampleTemplate-module__is-selected___0BYwS",item:"ExampleTemplate-module__item___8FTQq",chevron:"ExampleTemplate-module__chevron___VbY7N",title:"ExampleTemplate-module__title___r+nbJ","dynamic-content":"ExampleTemplate-module__dynamic-content___k+1H7"}},75328:function(e,t,n){n.r(t),t.default={"content-wrapper":"EmbeddedContentConsumerCommon-module__content-wrapper___c217N"}},19702:function(e,t,n){n.r(t),t.default={}},56457:function(e,t,n){n.r(t),t.default={}},47830:function(e,t,n){var r=n(64836);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=r(n(10434)),o=r(n(70215)),l=r(n(56690)),d=r(n(89728)),i=r(n(61655)),s=r(n(94993)),c=r(n(73808)),u=r(n(67294)),m=r(n(45697));n(19702),n(56457);var p=["children"];function f(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=(0,c.default)(e);if(t){var a=(0,c.default)(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return(0,s.default)(this,n)}}var v={children:m.default.node.isRequired},h=function(e){(0,i.default)(n,e);var t=f(n);function n(){return(0,l.default)(this,n),t.apply(this,arguments)}return(0,d.default)(n,[{key:"componentDidMount",value:function(){document.body.classList.toggle("embedded-content-provider-test-template-body")}},{key:"componentWillUnmount",value:function(){document.body.classList.toggle("embedded-content-provider-test-template-body")}},{key:"render",value:function(){var e=this.props,t=e.children,n=(0,o.default)(e,p);return u.default.createElement("div",(0,a.default)({"data-embedded-content-consumer-provider-test-template":!0},n),t)}}]),n}(u.default.Component);h.propTypes=v;var b=h;t.default=b},33864:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=o(n(67294)),a=o(n(99139));function o(e){return e&&e.__esModule?e:{default:e}}function l(){return l=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},l.apply(this,arguments)}var d=function(e){var t=l({},e);return r.default.createElement(a.default,t,r.default.createElement("path",{d:"M10.3 24 33.8 0l3.9 3.8L18 24l19.7 20.2-3.9 3.8z"}))};d.displayName="IconChevronLeft",d.defaultProps={viewBox:"0 0 48 48","data-name":"Layer 1",xmlns:"http://www.w3.org/2000/svg"};var i=d;t.default=i}}]);