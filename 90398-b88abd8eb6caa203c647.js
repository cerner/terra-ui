"use strict";(self.webpackChunkterra_ui=self.webpackChunkterra_ui||[]).push([[90398,45627,37344,85565,33667,96890,79482,3353,5161,45865,80858,14041,85355,16835,3193,4845,46647,27444,17657,85161,16873,38681,15318,66097,90941,40411,18101,38443,11264,79057,33315,34319,20116,33609,78996,39915,33442],{36845:function(e,t,n){t.Z=void 0;var r=u(n(67294)),a=u(n(78490)),l=u(n(39248)),o=u(n(47166)),s=u(n(18832)),i=u(n(10452));function u(e){return e&&e.__esModule?e:{default:e}}var c=o.default.bind(i.default),d=r.default.createElement("img",{className:c("image-wrapper"),height:"150",width:"150",src:s.default,alt:"placeholder"}),m=r.default.createElement("div",{className:c("text-wrapper")},"Sample text");t.Z=function(){return r.default.createElement("div",null,r.default.createElement(l.default,{colorClass:c(["attention"]),visuallyHiddenText:"Status Attention"},r.default.createElement(a.default,{fitStart:d,fill:m,alignFill:"center"})))}},41869:function(e,t,n){t.Z=void 0;var r=s(n(67294)),a=s(n(39248)),l=s(n(47166)),o=s(n(10452));function s(e){return e&&e.__esModule?e:{default:e}}var i=l.default.bind(o.default),u=r.default.createElement("div",{className:i("text-wrapper")},"Sample text");t.Z=function(){return r.default.createElement("div",null,r.default.createElement(a.default,{colorClass:i(["success"]),visuallyHiddenText:"Status Success"},u))}},11623:function(e,t,n){t.Z=void 0;var r=i(n(67294)),a=n(34614),l=i(n(39248)),o=i(n(47166)),s=i(n(10452));function i(e){return e&&e.__esModule?e:{default:e}}var u=o.default.bind(s.default),c=r.default.createElement(a.IconDue,{height:"60",width:"60"});t.Z=function(){return r.default.createElement(l.default,{colorClass:u(["info"]),visuallyHiddenText:"Status Info"},c)}},21523:function(e,t,n){t.Z=void 0;var r=i(n(67294)),a=i(n(39248)),l=i(n(47166)),o=i(n(18832)),s=i(n(10452));function i(e){return e&&e.__esModule?e:{default:e}}var u=l.default.bind(s.default),c=r.default.createElement("img",{className:u("image-wrapper"),height:"150",width:"150",src:o.default,alt:"placeholder"});t.Z=function(){return r.default.createElement(a.default,{colorClass:u(["attention"]),visuallyHiddenText:"Status Attention"},c)}},22863:function(e,t,n){var r=n(64836);t.Z=void 0;var a=r(n(67294)),l=r(n(45697)),o=r(n(47166)),s=r(n(17422)),i=o.default.bind(s.default),u={name:l.default.string.isRequired,src:l.default.string,url:l.default.string,version:l.default.string.isRequired},c=function(e){var t=e.src,n=e.name,r=e.url,l=e.version,o=a.default.createElement("a",{className:i("badge"),href:r||"https://www.npmjs.org/package/".concat(n,"/v/").concat(l)},a.default.createElement("span",{className:i("badge-name")},r?"package":"npm"),a.default.createElement("span",{className:i("badge-version")},"v".concat(l))),s=t?a.default.createElement("a",{className:i("badge"),href:t},a.default.createElement("span",{className:i("badge-name")},"github"),a.default.createElement("span",{className:i("badge-version")},"source")):void 0;return a.default.createElement("div",{className:i("badge-container")},o,s)};c.propTypes=u;var d=c;t.Z=d},49271:function(e,t,n){var r=n(64836),a=n(18698);t.Z=void 0;var l=r(n(27424)),o=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==a(e)&&"function"!=typeof e)return{default:e};var n=f(t);if(n&&n.has(e))return n.get(e);var r={},l=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var s=l?Object.getOwnPropertyDescriptor(e,o):null;s&&(s.get||s.set)?Object.defineProperty(r,o,s):r[o]=e[o]}r.default=e,n&&n.set(e,r);return r}(n(67294)),s=r(n(45697)),i=r(n(47166)),u=n(21538),c=r(n(33864)),d=r(n(23399)),m=n(51051),p=r(n(53560));function f(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(f=function(e){return e?n:t})(e)}var x=i.default.bind(p.default),b={example:s.default.element,exampleSrc:s.default.element,exampleCssSrc:s.default.element,title:s.default.string,description:s.default.node,isExpanded:s.default.bool},g=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","true")},y=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","false")},v=function(e){var t=e.example,n=e.exampleSrc,r=e.exampleCssSrc,a=e.title,s=e.description,i=e.isExpanded,p=(0,o.useState)(i),f=(0,l.default)(p,2),b=f[0],v=f[1],_=(0,o.useState)(!1),h=(0,l.default)(_,2),O=h[0],E=h[1],S=o.default.useContext(u.ThemeContext),N=void 0!==r,j=function(){E(!O),b&&v(!b)},w=function(){v(!b),O&&E(!O)},T=function(e,t){e.nativeEvent.keyCode!==m.KEY_SPACE&&e.nativeEvent.keyCode!==m.KEY_RETURN||(e.preventDefault(),t())};return o.default.createElement("div",{className:x("template",S.className)},o.default.createElement("div",{className:x("header")},a&&o.default.createElement("h2",{className:x("title")},a)),o.default.createElement("div",{className:x("content")},s&&o.default.createElement("div",{className:x("description")},s),t),o.default.createElement("div",{className:x("footer")},n?o.default.createElement("div",{className:x("button-container")},N&&o.default.createElement("button",{type:"button",className:x("css-toggle","item",{"is-selected":O}),onClick:j,onKeyDown:function(e){return T(e,j)},onBlur:g,onMouseDown:y,tabIndex:0,"data-focus-styles-enabled":!0},o.default.createElement(c.default,{className:x("chevron")}),o.default.createElement("span",null,"CSS"),o.default.createElement(d.default,{className:x("chevron")})),o.default.createElement("button",{type:"button",className:x("code-toggle","item",{"is-selected":b}),onClick:w,onKeyDown:function(e){return T(e,w)},onBlur:g,onMouseDown:y,tabIndex:0,"data-focus-styles-enabled":!0},o.default.createElement(c.default,{className:x("chevron")}),o.default.createElement("span",null,"Code"),o.default.createElement(d.default,{className:x("chevron")}))):null,o.default.createElement("div",null,O&&o.default.createElement("div",{className:x("css")},r),b&&o.default.createElement("div",{className:x("code")},n))))};v.propTypes=b,v.defaultProps={isExpanded:!1};var _=v;t.Z=_},95214:function(e,t,n){n.r(t),n.d(t,{default:function(){return U}});var r=n(67294),a=n(81254),l=n(17713),o=n(41869),s=["components"];function i(){return i=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},i.apply(this,arguments)}function u(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c={};function d(e){var t=e.components,n=u(e,s);return(0,a.mdx)("wrapper",i({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport Status from 'terra-status';\nimport classNames from 'classnames/bind';\nimport styles from './colors.module.scss';\n\nconst cx = classNames.bind(styles);\n\nconst simpleText = <div className={cx('text-wrapper')}>Sample text</div>;\n\nconst StatusDefault = () => (\n  <div>\n    <Status colorClass={cx(['success'])} visuallyHiddenText=\"Status Success\">{simpleText}</Status>\n  </div>\n);\n\nexport default StatusDefault;\n\n")))}d.isMDXComponent=!0;var m=n(49271),p=["components"];function f(){return f=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},f.apply(this,arguments)}function x(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var b={};function g(e){var t=e.components,n=x(e,p);return(0,a.mdx)("wrapper",f({},b,n,{components:t,mdxType:"MDXLayout"}),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-scss"},"/* stylelint-disable terra/custom-property-namespace*/\n@import './clinical-lowlight-theme/colors.module';\n@import './orion-fusion-theme/colors.module';\n\n:root {\n  --terra-status-attention-border-left-color: #f00;\n  --terra-status-success-border-left-color: #0f0;\n  --terra-status-info-border-left-color: rgb(0, 0, 255);\n}\n\n:local {\n  .attention {\n    border-left-color: var(--terra-status-attention-border-left-color, #f00);\n  }\n\n  .success {\n    border-left-color: var(--terra-status-success-border-left-color, #0f0);\n  }\n\n  .info {\n    border-left-color: var(--terra-status-info-border-left-color, rgb(0, 0, 255));\n  }\n\n  .image-wrapper {\n    display: block;\n  }\n\n  .text-wrapper {\n    padding: 5px;\n  }\n}\n\n")))}g.isMDXComponent=!0;var y=function(e){var t=e.title,n=e.description,a=e.isExpanded;return r.createElement(m.Z,{title:t||"Status Default",description:n,example:r.createElement(o.Z,null),exampleCssSrc:r.createElement(g,null),exampleSrc:r.createElement(d,null),isExpanded:a})},v=n(21523),_=["components"];function h(){return h=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},h.apply(this,arguments)}function O(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var E={};function S(e){var t=e.components,n=O(e,_);return(0,a.mdx)("wrapper",h({},E,n,{components:t,mdxType:"MDXLayout"}),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport Status from 'terra-status';\nimport classNames from 'classnames/bind';\nimport placeholderPic150x150 from './150x150.jpg';\nimport styles from './colors.module.scss';\n\nconst cx = classNames.bind(styles);\n\nconst image = <img className={cx('image-wrapper')} height=\"150\" width=\"150\" src={placeholderPic150x150} alt=\"placeholder\" />;\n\nconst StatusImage = () => (\n  <Status colorClass={cx(['attention'])} visuallyHiddenText=\"Status Attention\">{image}</Status>\n);\n\nexport default StatusImage;\n\n")))}S.isMDXComponent=!0;var N=function(e){var t=e.title,n=e.description,a=e.isExpanded;return r.createElement(m.Z,{title:t||"Status Image",description:n,example:r.createElement(v.Z,null),exampleCssSrc:r.createElement(g,null),exampleSrc:r.createElement(S,null),isExpanded:a})},j=n(11623),w=["components"];function T(){return T=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},T.apply(this,arguments)}function C(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var P={};function D(e){var t=e.components,n=C(e,w);return(0,a.mdx)("wrapper",T({},P,n,{components:t,mdxType:"MDXLayout"}),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport { IconDue } from 'terra-icon';\nimport Status from 'terra-status';\nimport classNames from 'classnames/bind';\nimport styles from './colors.module.scss';\n\nconst cx = classNames.bind(styles);\n\nconst icon = <IconDue height=\"60\" width=\"60\" />;\n\nconst StatusIcon = () => (\n  <Status colorClass={cx(['info'])} visuallyHiddenText=\"Status Info\">{icon}</Status>\n);\n\nexport default StatusIcon;\n\n")))}D.isMDXComponent=!0;var A=function(e){var t=e.title,n=e.description,a=e.isExpanded;return r.createElement(m.Z,{title:t||"Status Icon",description:n,example:r.createElement(j.Z,null),exampleCssSrc:r.createElement(g,null),exampleSrc:r.createElement(D,null),isExpanded:a})},k=n(36845),M=["components"];function I(){return I=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},I.apply(this,arguments)}function R(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var Z={};function X(e){var t=e.components,n=R(e,M);return(0,a.mdx)("wrapper",I({},Z,n,{components:t,mdxType:"MDXLayout"}),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport Arrange from 'terra-arrange';\nimport Status from 'terra-status';\nimport classNames from 'classnames/bind';\nimport placeholderPic150x150 from './150x150.jpg';\nimport styles from './colors.module.scss';\n\nconst cx = classNames.bind(styles);\n\nconst image = <img className={cx('image-wrapper')} height=\"150\" width=\"150\" src={placeholderPic150x150} alt=\"placeholder\" />;\nconst simpleText = <div className={cx('text-wrapper')}>Sample text</div>;\n\nconst StatusArrange = () => (\n  <div>\n    <Status colorClass={cx(['attention'])} visuallyHiddenText=\"Status Attention\">\n      <Arrange fitStart={image} fill={simpleText} alignFill=\"center\" />\n    </Status>\n  </div>\n);\n\nexport default StatusArrange;\n\n")))}X.isMDXComponent=!0;var H=function(e){var t=e.title,n=e.description,a=e.isExpanded;return r.createElement(m.Z,{title:t||"Status Arrange",description:n,example:r.createElement(k.Z,null),exampleCssSrc:r.createElement(g,null),exampleSrc:r.createElement(X,null),isExpanded:a})},q=n(78530),F=["components"];function B(){return B=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},B.apply(this,arguments)}function W(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var L={},V="wrapper";function G(e){var t=e.components,n=W(e,F);return(0,a.mdx)(V,B({},L,n,{components:t,mdxType:"MDXLayout"}),(0,a.mdx)(q.ZP,{mdxType:"PropsTable"},(0,a.mdx)(q.X2,{key:"ROW1",mdxType:"Row"},(0,a.mdx)(q.O,{mdxType:"PropNameCell"},"children"),(0,a.mdx)(q.Di,{mdxType:"TypeCell"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"node\n"))),(0,a.mdx)(q.dS,{isRequired:!0,mdxType:"RequiredCell"}),(0,a.mdx)(q.mW,{mdxType:"DefaultValueCell"},(0,a.mdx)("p",null,"none")),(0,a.mdx)(q.Ex,{mdxType:"DescriptionCell"},(0,a.mdx)("p",null,"Child node. Component to display next to the status indicator."))),(0,a.mdx)(q.X2,{key:"ROW2",mdxType:"Row"},(0,a.mdx)(q.O,{mdxType:"PropNameCell"},"visuallyHiddenText"),(0,a.mdx)(q.Di,{mdxType:"TypeCell"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"string\n"))),(0,a.mdx)(q.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,a.mdx)(q.mW,{mdxType:"DefaultValueCell"},(0,a.mdx)("p",null,"none")),(0,a.mdx)(q.Ex,{mdxType:"DescriptionCell"},(0,a.mdx)("p",null,"Visually hidden text used to convey the meaning of the status indicator to screen readers."))),(0,a.mdx)(q.X2,{key:"ROW3",mdxType:"Row"},(0,a.mdx)(q.O,{mdxType:"PropNameCell"},"colorClass"),(0,a.mdx)(q.Di,{mdxType:"TypeCell"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"string\n"))),(0,a.mdx)(q.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,a.mdx)(q.mW,{mdxType:"DefaultValueCell"},(0,a.mdx)("p",null,"none")),(0,a.mdx)(q.Ex,{mdxType:"DescriptionCell"},(0,a.mdx)("p",null,"Sets an author defined class, to control the colors of the status indicator."),(0,a.mdx)("p",null,(0,a.mdx)("img",{parentName:"p",src:"https://badgen.net/badge//IMPORTANT/blue?icon=github",alt:"IMPORTANT"}),"\nAdding ",(0,a.mdx)("inlineCode",{parentName:"p"},"var(--my-app...")," CSS variables is required for proper re-themeability when creating custom color styles ",(0,a.mdx)("em",{parentName:"p"},"(see included examples)"),".")))))}G.isMDXComponent=!0;var z=["components"];function K(){return K=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},K.apply(this,arguments)}function Y(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var Q={},J="wrapper";function U(e){var t=e.components,n=Y(e,z);return(0,a.mdx)(J,K({},Q,n,{components:t,mdxType:"MDXLayout"}),(0,a.mdx)(l.C,{mdxType:"Badge"}),(0,a.mdx)("h1",{id:"terra-status"},"Terra Status"),(0,a.mdx)("p",null,"The status component provides a customizable color indictor to signify a specific condition."),(0,a.mdx)("h2",{id:"getting-started"},"Getting Started"),(0,a.mdx)("ul",null,(0,a.mdx)("li",{parentName:"ul"},"Install with ",(0,a.mdx)("a",{parentName:"li",href:"https://www.npmjs.com/"},"npmjs"),":",(0,a.mdx)("ul",{parentName:"li"},(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("inlineCode",{parentName:"li"},"npm install terra-status"))))),(0,a.mdx)("h2",{id:"peer-dependencies"},"Peer Dependencies"),(0,a.mdx)("p",null,"This component requires the following peer dependencies be installed in your app for the component to properly function."),(0,a.mdx)("table",null,(0,a.mdx)("thead",{parentName:"table"},(0,a.mdx)("tr",{parentName:"thead"},(0,a.mdx)("th",{parentName:"tr",align:null},"Peer Dependency"),(0,a.mdx)("th",{parentName:"tr",align:null},"Version"))),(0,a.mdx)("tbody",{parentName:"table"},(0,a.mdx)("tr",{parentName:"tbody"},(0,a.mdx)("td",{parentName:"tr",align:null},"react"),(0,a.mdx)("td",{parentName:"tr",align:null},"^16.8.5")),(0,a.mdx)("tr",{parentName:"tbody"},(0,a.mdx)("td",{parentName:"tr",align:null},"react-dom"),(0,a.mdx)("td",{parentName:"tr",align:null},"^16.8.5")))),(0,a.mdx)("h2",{id:"usage"},"Usage"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-jsx"},"import Status from 'terra-status';\n")),(0,a.mdx)("h2",{id:"adding-custom-classname"},"Adding custom className"),(0,a.mdx)("p",null,"This component allows user to pass custom className. The variable must start with ",(0,a.mdx)("inlineCode",{parentName:"p"},"--my-app")," for proper re-themeability."),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-css"},":root {\n  --my-app-status-attention-color: red;\n  --my-app-status-success-color: #00ff00;\n  --my-app-status-info-color: rgb(0,0,255);\n}\n\n.attention {\n  border-left-color: var(--my-app-status-attention-color, red);\n}\n\n.success {\n  border-left-color: var(--my-app-status-success-color, #00ff00);\n}\n\n.info {\n  border-left-color: var(--my-app-status-info-color, rgb(0,0,255));\n}\n")),(0,a.mdx)("h2",{id:"component-features"},"Component Features"),(0,a.mdx)("ul",null,(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("a",{parentName:"li",href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#cross-browser-support"},"Cross-Browser Support")),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("a",{parentName:"li",href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#responsive-support"},"Responsive Support")),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("a",{parentName:"li",href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#mobile-support"},"Mobile Support"))),(0,a.mdx)("h2",{id:"examples"},"Examples"),(0,a.mdx)(y,{title:"Status with text",mdxType:"StatusDefault"}),(0,a.mdx)(N,{title:"Status with Image",mdxType:"StatusImage"}),(0,a.mdx)(A,{title:"Status with Icon",mdxType:"StatusIcon"}),(0,a.mdx)(H,{title:"Status with Arrange",mdxType:"StatusArrange"}),(0,a.mdx)("h2",{id:"status-props"},"Status Props"),(0,a.mdx)(G,{mdxType:"StatusPropsTable"}))}U.isMDXComponent=!0},17713:function(e,t,n){n.d(t,{C:function(){return l}});var r=n(67294),a=n(22863),l=function(e){var t=e.url;return r.createElement(a.Z,{src:"https://github.com/cerner/terra-core/tree/main/packages/terra-status",name:"terra-status",version:"4.62.0",url:t})}},18832:function(e,t,n){n.r(t),t.default=n.p+"51d085f765a7361bab659ffffdb9bb46.jpg"},10452:function(e,t,n){n.r(t),t.default={"clinical-lowlight-theme":"colors-module__clinical-lowlight-theme___I-h2D","orion-fusion-theme":"colors-module__orion-fusion-theme___kZ5Ob",attention:"colors-module__attention___zOcSN",success:"colors-module__success___4mPZ3",info:"colors-module__info___tL2zf","image-wrapper":"colors-module__image-wrapper___+NWH9","text-wrapper":"colors-module__text-wrapper___xrV0S"}},17422:function(e,t,n){n.r(t),t.default={badge:"Badges-module__badge___vex-+","badge-container":"Badges-module__badge-container___B13Mv","badge-name":"Badges-module__badge-name___jkN0m","badge-version":"Badges-module__badge-version___agZ+P"}},53560:function(e,t,n){n.r(t),t.default={"clinical-lowlight-theme":"ExampleTemplate-module__clinical-lowlight-theme___rBbtD","orion-fusion-theme":"ExampleTemplate-module__orion-fusion-theme___GzA23",template:"ExampleTemplate-module__template___a4uPk",header:"ExampleTemplate-module__header___iFXV3",content:"ExampleTemplate-module__content___48m4Q",description:"ExampleTemplate-module__description___NwBJo",footer:"ExampleTemplate-module__footer___GpSoG","button-container":"ExampleTemplate-module__button-container___rAD11",css:"ExampleTemplate-module__css___+jtk1",code:"ExampleTemplate-module__code___7rC6C","css-toggle":"ExampleTemplate-module__css-toggle___chHK7","code-toggle":"ExampleTemplate-module__code-toggle___TGlE-","is-selected":"ExampleTemplate-module__is-selected___0BYwS",item:"ExampleTemplate-module__item___8FTQq",chevron:"ExampleTemplate-module__chevron___VbY7N",title:"ExampleTemplate-module__title___r+nbJ","dynamic-content":"ExampleTemplate-module__dynamic-content___k+1H7"}},66633:function(e,t,n){n.r(t),t.default={arrange:"Arrange-module__arrange___hY0Ml",fill:"Arrange-module__fill___m88eq",fit:"Arrange-module__fit___tv8j-",center:"Arrange-module__center___9qfhG",bottom:"Arrange-module__bottom___8beod",stretch:"Arrange-module__stretch___eQF-k",default:"Arrange-module__default___z+O29"}},26652:function(e,t,n){n.r(t),t.default={status:"Status-module__status___9Mben"}},78490:function(e,t,n){function r(e){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.AlignmentTypes=void 0;var a=u(n(67294)),l=u(n(45697)),o=u(n(47166)),s=u(n(66633)),i=["fitStart","fill","fitEnd","align","alignFitStart","alignFill","alignFitEnd","fitStartAttributes","fillAttributes","fitEndAttributes"];function u(e){return e&&e.__esModule?e:{default:e}}function c(){return c=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},c.apply(this,arguments)}function d(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function m(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?d(Object(n),!0).forEach((function(t){p(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):d(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t,n){return(t=function(e){var t=function(e,t){if("object"!==r(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var a=n.call(e,t||"default");if("object"!==r(a))return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===r(t)?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function f(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}t.AlignmentTypes={CENTER:"center",BOTTOM:"bottom",STRETCH:"stretch"};var x=o.default.bind(s.default),b={fitStart:l.default.element,fill:l.default.element.isRequired,fitEnd:l.default.element,align:l.default.oneOf(["center","bottom","stretch"]),alignFitStart:l.default.oneOf(["center","bottom","stretch"]),alignFitEnd:l.default.oneOf(["center","bottom","stretch"]),alignFill:l.default.oneOf(["center","bottom","stretch"]),fitStartAttributes:l.default.object,fillAttributes:l.default.object,fitEndAttributes:l.default.object},g=function(e){var t=e.fitStart,n=e.fill,r=e.fitEnd,l=e.align,o=e.alignFitStart,s=e.alignFill,u=e.alignFitEnd,d=e.fitStartAttributes,p=e.fillAttributes,b=e.fitEndAttributes,g=f(e,i),y=m({},d),v=m({},p),_=m({},b);return a.default.createElement("span",c({},g,{className:x("arrange",g.className)}),a.default.createElement("span",c({},y,{className:x("fit",l||o,y.className,"fit-block")}),t),a.default.createElement("span",c({},v,{className:x("fill",l||s,v.className,"fill-block")}),n),a.default.createElement("span",c({},_,{className:x("fit",l||u,_.className)}),r))};g.propTypes=b;t.default=g},39248:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=u(n(67294)),a=u(n(45697)),l=u(n(47166)),o=u(n(29270)),s=u(n(26652)),i=["children","visuallyHiddenText","colorClass"];function u(e){return e&&e.__esModule?e:{default:e}}function c(){return c=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},c.apply(this,arguments)}function d(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var m=l.default.bind(s.default),p={children:a.default.node.isRequired,visuallyHiddenText:a.default.string,colorClass:a.default.string},f=function(e){var t=e.children,n=e.visuallyHiddenText,a=e.colorClass,l=d(e,i);return r.default.createElement("div",c({},l,{className:m("status",a,l.className)}),n&&r.default.createElement(o.default,{text:n}),t)};f.propTypes=p;t.default=f}}]);