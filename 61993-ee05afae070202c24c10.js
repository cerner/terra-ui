"use strict";(self.webpackChunkterra_ui=self.webpackChunkterra_ui||[]).push([[61993,45627,85565,3353,5161,45865,16835,85355,3193,4845,46647,85161,38681,15318,40411,18101,38443,11264],{95794:function(e,t,n){t.Z=void 0;var a=c(n(67294)),r=c(n(45697)),i=c(n(94184)),l=c(n(47166)),o=c(n(85984)),u=["newline"];function c(e){return e&&e.__esModule?e:{default:e}}function s(){return s=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},s.apply(this,arguments)}function d(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var m=l.default.bind(o.default),p={newline:r.default.oneOf([1,2,3,4,5,6,7,8])},f=function(e){var t=e.newline,n=d(e,u),r=(0,i.default)(m("whitespace","newline-".concat(t)),n.className);return a.default.createElement("div",s({},n,{className:r,"aria-hidden":"true"}))};f.propTypes=p,f.defaultProps={newline:1};t.Z=f},11348:function(e,t,n){function a(e){return a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a(e)}t.Z=void 0;var r=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=a(e)&&"function"!=typeof e)return{default:e};var n=u(t);if(n&&n.has(e))return n.get(e);var r={__proto__:null},i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var l in e)if("default"!==l&&Object.prototype.hasOwnProperty.call(e,l)){var o=i?Object.getOwnPropertyDescriptor(e,l):null;o&&(o.get||o.set)?Object.defineProperty(r,l,o):r[l]=e[l]}return r.default=e,n&&n.set(e,r),r}(n(67294)),i=o(n(55108)),l=o(n(55281));function o(e){return e&&e.__esModule?e:{default:e}}function u(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(u=function(e){return e?n:t})(e)}function c(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var a,r,i,l,o=[],u=!0,c=!1;try{if(i=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;u=!1}else for(;!(u=(a=i.call(n)).done)&&(o.push(a.value),o.length!==t);u=!0);}catch(e){c=!0,r=e}finally{try{if(!u&&null!=n.return&&(l=n.return(),Object(l)!==l))return}finally{if(c)throw r}}return o}}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return s(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return s(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function s(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}t.Z=function(){var e=c((0,r.useState)(!1),2),t=e[0],n=e[1];return r.default.createElement(r.default.Fragment,null,t&&r.default.createElement(i.default,{onDismiss:function(){return n(!1)},action:r.default.createElement(l.default,{text:"Action",variant:"emphasis",onClick:function(){}})},"The notification banner should be focused upon render when navigating via keyboard."),r.default.createElement(l.default,{isDisabled:t,text:"Trigger Alert Notification Banner Demo",onClick:function(){n(!0)}}))}},92680:function(e,t,n){t.Z=void 0;var a=u(n(67294)),r=u(n(47166)),i=u(n(55108)),l=n(34614),o=u(n(73758));function u(e){return e&&e.__esModule?e:{default:e}}var c=r.default.bind(o.default);t.Z=function(){return a.default.createElement(i.default,{type:"custom",customColorClass:c(["my-app-alert-help-example"]),customIcon:a.default.createElement(l.IconHelp,null)},a.default.createElement("span",null,"This is a",a.default.createElement("b",null," custom")," ","notification banner"))}},22863:function(e,t,n){var a=n(64836);t.Z=void 0;var r=a(n(67294)),i=a(n(45697)),l=a(n(47166)),o=a(n(17422)),u=l.default.bind(o.default),c={name:i.default.string.isRequired,src:i.default.string,url:i.default.string,version:i.default.string.isRequired},s=function(e){var t=e.src,n=e.name,a=e.url,i=e.version,l=r.default.createElement("a",{className:u("badge"),href:a||"https://www.npmjs.org/package/".concat(n,"/v/").concat(i)},r.default.createElement("span",{className:u("badge-name")},a?"package":"npm"),r.default.createElement("span",{className:u("badge-version")},"v".concat(i))),o=t?r.default.createElement("a",{className:u("badge"),href:t},r.default.createElement("span",{className:u("badge-name")},"github"),r.default.createElement("span",{className:u("badge-version")},"source")):void 0;return r.default.createElement("div",{className:u("badge-container")},l,o)};s.propTypes=c;var d=s;t.Z=d},49271:function(e,t,n){var a=n(64836),r=n(18698);t.Z=void 0;var i=a(n(27424)),l=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==r(e)&&"function"!=typeof e)return{default:e};var n=f(t);if(n&&n.has(e))return n.get(e);var a={},i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var l in e)if("default"!==l&&Object.prototype.hasOwnProperty.call(e,l)){var o=i?Object.getOwnPropertyDescriptor(e,l):null;o&&(o.get||o.set)?Object.defineProperty(a,l,o):a[l]=e[l]}a.default=e,n&&n.set(e,a);return a}(n(67294)),o=a(n(45697)),u=a(n(47166)),c=n(21538),s=a(n(33864)),d=a(n(23399)),m=n(51051),p=a(n(53560));function f(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(f=function(e){return e?n:t})(e)}var _=u.default.bind(p.default),h={example:o.default.element,exampleSrc:o.default.element,exampleCssSrc:o.default.element,title:o.default.string,description:o.default.node,isExpanded:o.default.bool},b=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","true")},y=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","false")},v=function(e){var t=e.example,n=e.exampleSrc,a=e.exampleCssSrc,r=e.title,o=e.description,u=e.isExpanded,p=(0,l.useState)(u),f=(0,i.default)(p,2),h=f[0],v=f[1],x=(0,l.useState)(!1),g=(0,i.default)(x,2),N=g[0],w=g[1],E=l.default.useContext(c.ThemeContext),O=void 0!==a,T=function(){w(!N),h&&v(!h)},j=function(){v(!h),N&&w(!N)},C=function(e,t){e.nativeEvent.keyCode!==m.KEY_SPACE&&e.nativeEvent.keyCode!==m.KEY_RETURN||(e.preventDefault(),t())};return l.default.createElement("div",{className:_("template",E.className)},l.default.createElement("div",{className:_("header")},r&&l.default.createElement("h2",{className:_("title")},r)),l.default.createElement("div",{className:_("content")},o&&l.default.createElement("div",{className:_("description")},o),t),l.default.createElement("div",{className:_("footer")},n?l.default.createElement("div",{className:_("button-container")},O&&l.default.createElement("button",{type:"button",className:_("css-toggle","item",{"is-selected":N}),onClick:T,onKeyDown:function(e){return C(e,T)},onBlur:b,onMouseDown:y,tabIndex:0,"data-focus-styles-enabled":!0},l.default.createElement(s.default,{className:_("chevron")}),l.default.createElement("span",null,"CSS"),l.default.createElement(d.default,{className:_("chevron")})),l.default.createElement("button",{type:"button",className:_("code-toggle","item",{"is-selected":h}),onClick:j,onKeyDown:function(e){return C(e,j)},onBlur:b,onMouseDown:y,tabIndex:0,"data-focus-styles-enabled":!0},l.default.createElement(s.default,{className:_("chevron")}),l.default.createElement("span",null,"Code"),l.default.createElement(d.default,{className:_("chevron")}))):null,l.default.createElement("div",null,N&&l.default.createElement("div",{className:_("css")},a),h&&l.default.createElement("div",{className:_("code")},n))))};v.propTypes=h,v.defaultProps={isExpanded:!1};var x=v;t.Z=x},40996:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=c(n(67294)),r=c(n(45697)),i=c(n(47166)),l=c(n(50026)),o=c(n(66983)),u=["children"];function c(e){return e&&e.__esModule?e:{default:e}}function s(){return s=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},s.apply(this,arguments)}function d(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var m=i.default.bind(o.default),p=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","true")},f=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","false")},_={children:r.default.string},h=function(e){var t=e.children,n=d(e,u),r=a.default.useContext(l.default),o=(0,i.default)(m(["button",r.className]),n.className);return a.default.createElement("button",s({},n,{type:"button",className:o,onBlur:p,onMouseDown:f,"data-focus-styles-enabled":!0}),t)};h.propTypes=_;t.default=h},59278:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=u(n(67294)),r=u(n(45697)),i=u(n(47166)),l=u(n(50026)),o=u(n(30866));function u(e){return e&&e.__esModule?e:{default:e}}var c=i.default.bind(o.default),s={ariaLevel:r.default.oneOf(["2","3","4","5","6"]),children:r.default.node,variant:r.default.oneOf(["ux-recommendation","caution","deprecation","maintenance","important","not-supported"])},d=function(e){var t=e.ariaLevel,n=e.variant,r=e.children,i=a.default.useContext(l.default);return a.default.createElement("div",{className:c("notice",n,i.className)},a.default.createElement("div",{className:c("accessory"),"aria-hidden":"true",focusable:"false"}),a.default.createElement("div",{role:"heading",className:c("title"),"aria-level":t},a.default.createElement("span",null,function(e){return"ux-recommendation"===e?"UX Recommendation":"caution"===e?"Caution":"deprecation"===e?"Deprecation Notice":"maintenance"===e?"In Maintenance":"important"===e?"Important":"not-supported"===e?"Hazards for Incorrect Usage":"error"}(n))),a.default.createElement("div",{className:c("children")},function(e){return"not-supported"===e?a.default.createElement(a.default.Fragment,null,a.default.createElement("p",{className:c("paragraph")},"This component was designed and tested according to the documented implementation."),a.default.createElement("p",{className:c("paragraph")},"Using the component incorrectly:",a.default.createElement("ul",{className:c("list")},a.default.createElement("li",null,"will likely result in improper composition and create accessibility issues"),a.default.createElement("li",null,"may cause erratic or broken behaviors and styles"),a.default.createElement("li",null,a.default.createElement("strong",null,"will not be supported "),"or enhanced to allow for incorrect use")))):null}(n),a.default.Children.map(r,(function(e){return"string"==typeof e?a.default.createElement("p",null,e):e}))))};d.propTypes=s,d.defaultProps={ariaLevel:"2",variant:"important"};t.default=d},47306:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=s(n(67294)),r=s(n(45697)),i=s(n(94184)),l=s(n(47166)),o=s(n(50026)),u=s(n(42620)),c=["title"];function s(e){return e&&e.__esModule?e:{default:e}}function d(){return d=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},d.apply(this,arguments)}function m(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=l.default.bind(u.default),f={title:r.default.string},_=function(e){var t=e.title,n=m(e,c),r=a.default.useContext(o.default),l=(0,i.default)(p(["placeholder",r.className]),n.className),u=p(["inner"]);return a.default.createElement("div",d({},n,{className:l}),a.default.createElement("div",{className:u},a.default.createElement("p",{className:p("title")},t)))};_.propTypes=f,_.defaultProps={title:""};t.default=_},34261:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"Button",{enumerable:!0,get:function(){return i.default}}),Object.defineProperty(t,"Notice",{enumerable:!0,get:function(){return a.default}}),Object.defineProperty(t,"Placeholder",{enumerable:!0,get:function(){return r.default}});var a=l(n(59278)),r=l(n(47306)),i=l(n(40996));function l(e){return e&&e.__esModule?e:{default:e}}},76410:function(e,t,n){n.r(t),n.d(t,{default:function(){return O}});var a=n(67294),r=n(81254),i=n(34261),l=n(42645),o=n(95794),u=n(11348),c=n(46508),s=n(92680),d=["components"];function m(){return m=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},m.apply(this,arguments)}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var f={};function _(e){var t=e.components,n=p(e,d);return(0,r.mdx)("wrapper",m({},f,n,{components:t,mdxType:"MDXLayout"}),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport classNames from 'classnames/bind';\n\nimport Alert from 'terra-alert';\nimport { IconHelp } from 'terra-icon';\nimport styles from './colors.module.scss';\n\nconst cx = classNames.bind(styles);\n\nconst CustomExampleNoTitle = () => (\n  <Alert type=\"custom\" customColorClass={cx(['my-app-alert-help-example'])} customIcon={<IconHelp />}>\n    <span>\n      This is a\n      <b> custom</b>\n      {' '}\n      notification banner\n    </span>\n  </Alert>\n);\n\nexport default CustomExampleNoTitle;\n\n")))}_.isMDXComponent=!0;var h=n(49271),b=n(91789),y=function(e){var t=e.title,n=e.description,r=e.isExpanded;return a.createElement(h.Z,{title:t||"Custom Example No Title",description:n,example:a.createElement(s.Z,null),exampleCssSrc:a.createElement(b.Z,null),exampleSrc:a.createElement(_,null),isExpanded:r})},v=n(34171),x=["components"];function g(){return g=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},g.apply(this,arguments)}function N(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var w={},E="wrapper";function O(e){var t=e.components,n=N(e,x);return(0,r.mdx)(E,g({},w,n,{components:t,mdxType:"MDXLayout"}),(0,r.mdx)(l.C,{mdxType:"Badge"}),(0,r.mdx)("h1",{id:"accessibility-guide-for-terra-alert"},"Accessibility Guide for Terra Alert"),(0,r.mdx)(i.Notice,{variant:"important",ariaLevel:"2",mdxType:"Notice"},(0,r.mdx)("p",null,"Using notifications improperly may prevent some of your users from understanding your UI.")),(0,r.mdx)(o.Z,{mdxType:"Whitespace"}),(0,r.mdx)("h2",{id:"why-is-this-important"},"Why is this important?"),(0,r.mdx)("p",null,"Terra's Alert component is a notification banner with varying criticalities that communicates cautions, errors, information, and other general information to the user in context of their workflow. As such, special consideration must be made to inform screen reader users of their presence on the page, just as sighted users' attention would be drawn to them in the visual UI."),(0,r.mdx)("h2",{id:"accessibility-considerations"},"Accessibility Considerations"),(0,r.mdx)("h3",{id:"code-considerations"},"Code Considerations"),(0,r.mdx)("h4",{id:"consistency"},"Consistency"),(0,r.mdx)("p",null,"The use of each variant of this component should be consistent in order to provide the best user experience."),(0,r.mdx)("h4",{id:"notification-criticality"},"Notification Criticality"),(0,r.mdx)("p",null,'The user only expects to be interrupted for notifications (alerts) that are of high criticality. This behavior is referred to as "assertive".'),(0,r.mdx)("p",null,'Less critical notifications should wait until the screen reader has finished reading the current item before notification content is read to the user. This behavior is referred to as "polite".'),(0,r.mdx)("p",null,"By default, Terra Alert will set the role to ",(0,r.mdx)("inlineCode",{parentName:"p"},'"alert"')," (or assertive) for the ",(0,r.mdx)("inlineCode",{parentName:"p"},"alert")," notification type and ",(0,r.mdx)("inlineCode",{parentName:"p"},'"status"')," (or polite) for all other notification types.\nTerra Alert has an optional ",(0,r.mdx)("inlineCode",{parentName:"p"},"role")," prop but should be used carefully when the default does not meet accessibility or usability expectations."),(0,r.mdx)("table",null,(0,r.mdx)("thead",{parentName:"table"},(0,r.mdx)("tr",{parentName:"thead"},(0,r.mdx)("th",{parentName:"tr",align:null},"Role"),(0,r.mdx)("th",{parentName:"tr",align:null},"Purpose"))),(0,r.mdx)("tbody",{parentName:"table"},(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"Alert"),(0,r.mdx)("td",{parentName:"tr",align:null},"See ",(0,r.mdx)(v.default,{href:"https://w3c.github.io/aria/#alert",variant:"external",mdxType:"Hyperlink"},"WAI-ARIA Alert Role"),(0,r.mdx)("a",{parentName:"td",href:"/terra-ui/components/cerner-terra-core-docs/alert/accessibility-guide"},(0,r.mdx)("sup",null,"[1]")),' - "A type of live region with important, and usually time-sensitive, information."')),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"Status"),(0,r.mdx)("td",{parentName:"tr",align:null},"See ",(0,r.mdx)(v.default,{href:"https://w3c.github.io/aria/#status",variant:"external",mdxType:"Hyperlink"},"WAI-ARIA Status Role"),(0,r.mdx)("a",{parentName:"td",href:"/terra-ui/components/cerner-terra-core-docs/alert/accessibility-guide"},(0,r.mdx)("sup",null,"[1]")),' - "A type of live region whose content is advisory information for the user but is not important enough to justify an alert, often but not necessarily presented as a status bar."')))),(0,r.mdx)("h4",{id:"alert-notification-type"},"Alert Notification Type"),(0,r.mdx)(i.Notice,{variant:"ux-recommendation",ariaLevel:"6",mdxType:"Notice"},(0,r.mdx)("p",null,"It may be more appropriate to use a modal or component with ",(0,r.mdx)("inlineCode",{parentName:"p"},"alertdialog")," if presenting the user with an alert and required action to address the alert.")),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},"The ",(0,r.mdx)("inlineCode",{parentName:"li"},'"alert"')," role/notification type will cause keyboard navigation focus to shift to the notification banner body.\nThis helps users quickly take action when it is critical but can optionally be disabled via the ",(0,r.mdx)("inlineCode",{parentName:"li"},"disableAlertActionFocus")," prop."),(0,r.mdx)("li",{parentName:"ul"},"Notifications with ",(0,r.mdx)("inlineCode",{parentName:"li"},'"alert"')," role/notification type do not need to explicitly be in an aria-live region.\nIt is recommended to separate them from less critical notification banners to prevent assistive technologies from confusing them."),(0,r.mdx)("li",{parentName:"ul"},"By default, Terra Alert uses the ",(0,r.mdx)("inlineCode",{parentName:"li"},'"alert"')," notification type.")),(0,r.mdx)("p",null,"Demo of Terra Alert with an action element."),(0,r.mdx)(u.Z,{mdxType:"AlertActionFocusDemo"}),(0,r.mdx)("h4",{id:"assistive-technologies"},"Assistive technologies"),(0,r.mdx)("p",null,"In combination with the notification criticality, screen reader users should understand the importance of the notification when presented."),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},"The ",(0,r.mdx)("inlineCode",{parentName:"li"},'"alert"')," role will interrupt the user and announce the high critical notification immediately."),(0,r.mdx)("li",{parentName:"ul"},"The ",(0,r.mdx)("inlineCode",{parentName:"li"},'"status"')," role will not interrupt the user and present politely.")),(0,r.mdx)("h4",{id:"live-regions"},"Live regions"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},"For less critical notifications (non-alerts), the notification banner should be in an ",(0,r.mdx)("inlineCode",{parentName:"li"},'aria-live="polite"')," region.",(0,r.mdx)("ul",{parentName:"li"},(0,r.mdx)("li",{parentName:"ul"},'For screen readers to pick up and announce a newly rendered notification, the notification banner must be within an aria-live region.\nTo enable assistive technologies the ability to inform the user of a less critical notification in a polite (non-interruptive) way, ensure the notification banner is\nwithin an element where aria-live="polite".'))),(0,r.mdx)("li",{parentName:"ul"},"Avoid mixing alert notifications and less critical notifications in the same region.",(0,r.mdx)("ul",{parentName:"li"},(0,r.mdx)("li",{parentName:"ul"},"The ",(0,r.mdx)("inlineCode",{parentName:"li"},'"alert"')," notification type/role implicitly has aria-live value of ",(0,r.mdx)("inlineCode",{parentName:"li"},"assertive")," and will interrupt without being in a region where aria-live was previously set.\nIt is recommended to separate critical alert notifications from less critical notification banners to prevent any confusion.")))),(0,r.mdx)("div",{"aria-label":"Example code"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre"},'import Alert from \'terra-alert\';\n\n<>\n    // This less critical notification should be in polite aria-live region so screen reader users are notified.\n    <div aria-live="polite">\n        {isOpen && (\n            <Alert type="success">\n                This notification is a less critical and should be polite.\n            </Alert>\n        )}\n    </div>\n\n    // Alert notifications are implicitly assertive, no aria-live needed\n    // It is recommended to keep these separate from polite aria-live regions.\n    <div>\n        {isOpen && (\n            <Alert type="alert">\n                This notification is a critical alert that is interruptive.\n            </Alert>\n        )}\n    </div>\n</>\n'))),(0,r.mdx)("h4",{id:"titles"},"Titles"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},"Notification banners of type ",(0,r.mdx)("inlineCode",{parentName:"li"},"custom")," should have a title provided to the ",(0,r.mdx)("inlineCode",{parentName:"li"},"title")," prop in order to be accessible."),(0,r.mdx)("li",{parentName:"ul"},"All other notification types will provide a default title. The ",(0,r.mdx)("inlineCode",{parentName:"li"},"title")," prop will override the default title and should be avoided."),(0,r.mdx)("li",{parentName:"ul"},"Screen readers will always announce the notification type by default and then the custom title if one is provided.")),(0,r.mdx)(y,{title:"Bad: Avoid notifications with no titles",mdxType:"CustomExampleNoTitle"}),(0,r.mdx)(c.Z,{title:"Good: Titles help users understand notifications",mdxType:"CustomExample"}),(0,r.mdx)("h2",{id:"linked-references"},"Linked References:"),(0,r.mdx)("ol",null,(0,r.mdx)("li",{parentName:"ol"},(0,r.mdx)("a",{parentName:"li",href:"https://w3c.github.io/aria/"},'"Accessible Rich Internet Applications (WAI-ARIA) 1.3"'),". World Wide Web Consortium. Last updated 01 May 2023. Retrieved 2 May 2023.")))}O.isMDXComponent=!0},42645:function(e,t,n){n.d(t,{C:function(){return i}});var a=n(67294),r=n(22863),i=function(e){var t=e.url;return a.createElement(r.Z,{src:"https://github.com/cerner/terra-core/tree/main/packages/terra-image",name:"terra-image",version:"3.39.0",url:t})}},85984:function(e,t,n){n.r(t),t.default={whitespace:"Whitespace-module__whitespace___nfEbP","newline-1":"Whitespace-module__newline-1___JsrIt","newline-2":"Whitespace-module__newline-2___Q0uWI","newline-3":"Whitespace-module__newline-3___Q94cX","newline-4":"Whitespace-module__newline-4___20zS-","newline-5":"Whitespace-module__newline-5___nHyJ-","newline-6":"Whitespace-module__newline-6___TGqYR","newline-7":"Whitespace-module__newline-7___4YsCl","newline-8":"Whitespace-module__newline-8___NTNEl"}},17422:function(e,t,n){n.r(t),t.default={badge:"Badges-module__badge___vex-+","badge-container":"Badges-module__badge-container___B13Mv","badge-name":"Badges-module__badge-name___jkN0m","badge-version":"Badges-module__badge-version___agZ+P"}},53560:function(e,t,n){n.r(t),t.default={"clinical-lowlight-theme":"ExampleTemplate-module__clinical-lowlight-theme___rBbtD","orion-fusion-theme":"ExampleTemplate-module__orion-fusion-theme___GzA23",template:"ExampleTemplate-module__template___a4uPk",header:"ExampleTemplate-module__header___iFXV3",content:"ExampleTemplate-module__content___48m4Q",description:"ExampleTemplate-module__description___NwBJo",footer:"ExampleTemplate-module__footer___GpSoG","button-container":"ExampleTemplate-module__button-container___rAD11",css:"ExampleTemplate-module__css___+jtk1",code:"ExampleTemplate-module__code___7rC6C","css-toggle":"ExampleTemplate-module__css-toggle___chHK7","code-toggle":"ExampleTemplate-module__code-toggle___TGlE-","is-selected":"ExampleTemplate-module__is-selected___0BYwS",item:"ExampleTemplate-module__item___8FTQq",chevron:"ExampleTemplate-module__chevron___VbY7N",title:"ExampleTemplate-module__title___r+nbJ","dynamic-content":"ExampleTemplate-module__dynamic-content___k+1H7"}},66983:function(e,t,n){n.r(t),t.default={"clinical-lowlight-theme":"Button-module__clinical-lowlight-theme___TyZWB","orion-fusion-theme":"Button-module__orion-fusion-theme___q-FcQ",button:"Button-module__button___QuCn2","is-active":"Button-module__is-active___Z8AuK"}},30866:function(e,t,n){n.r(t),t.default={"clinical-lowlight-theme":"Notice-module__clinical-lowlight-theme___aa5xV","orion-fusion-theme":"Notice-module__orion-fusion-theme___QAE-T",notice:"Notice-module__notice___GWkPA",children:"Notice-module__children___lDYsm",accessory:"Notice-module__accessory___wkLOG",title:"Notice-module__title___6H5tc","ux-recommendation":"Notice-module__ux-recommendation___N8BuK",caution:"Notice-module__caution___hPrVl",deprecation:"Notice-module__deprecation___g1drA",maintenance:"Notice-module__maintenance___kWLIZ",important:"Notice-module__important___p5DiF","not-supported":"Notice-module__not-supported___34bHd",paragraph:"Notice-module__paragraph___5h-w1",list:"Notice-module__list___M2Kxj"}},42620:function(e,t,n){n.r(t),t.default={"clinical-lowlight-theme":"Placeholder-module__clinical-lowlight-theme___Obm9K","orion-fusion-theme":"Placeholder-module__orion-fusion-theme___svHY+",placeholder:"Placeholder-module__placeholder___ZZDXd",inner:"Placeholder-module__inner___fJq9o",title:"Placeholder-module__title___teBSo"}}}]);