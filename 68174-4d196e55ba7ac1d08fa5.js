"use strict";(self.webpackChunkterra_ui=self.webpackChunkterra_ui||[]).push([[68174,45627,37344,33667,96890,79482,14041,85565,3353,80858,27444,5161,16835,45865,85355,3193,17657,4845,33315,46647,66097,85161,38681,15318,40411,18101,38443,78996,39915,33442],{26510:function(e,t,n){t.Z=void 0;var a=c(n(67294)),r=c(n(85134)),l=c(n(55281)),o=c(n(47166)),i=c(n(11817)),s=c(n(60502));function c(e){return e&&e.__esModule?e:{default:e}}var d=o.default.bind(s.default);t.Z=function(){return a.default.createElement("div",null,a.default.createElement("p",null,"Overflow-X Container"),a.default.createElement("div",{className:d("overflow-y-wrapper")},a.default.createElement(r.default,{tabIndex:"0"},a.default.createElement("p",{className:d("paragraph-x-wrapper")},"Entering patient details is a crucial process in healthcare facilities that involves capturing and documenting relevant information about individuals seeking medical care. Patient details need to be regularly updated to ensure accuracy and relevancy. This may involve periodic verification of personal information, updating medical history, and making necessary changes to insurance or contact details. Hospitals may request patients to review and confirm their information during subsequent visits or at designated intervals. Accurate and comprehensive patient details play a vital role in providing effective healthcare. They serve as a foundation for medical assessments, treatment planning, and continuity of care, enabling healthcare providers to deliver personalised and efficient services to patients.Begin filling out the form by entering your personal information. This usually includes your full name, contact details (such as phone number and email address), and residential address. It is crucial to provide accurate contact information as it will be used for communication and verification purposes."),a.default.createElement("div",{className:d("container-x-wrapper")},a.default.createElement(i.default,{inputId:"input-field",label:"Enter Patient Name",type:"text"})),a.default.createElement("div",{className:d("container-x-wrapper")},a.default.createElement(l.default,{text:"Submit"})))))}},8378:function(e,t,n){t.Z=void 0;var a=i(n(67294)),r=i(n(85134)),l=i(n(47166)),o=i(n(60502));function i(e){return e&&e.__esModule?e:{default:e}}var s=l.default.bind(o.default);t.Z=function(){return a.default.createElement("div",null,a.default.createElement("p",null,"Overflow-Y Container"),a.default.createElement("div",{className:s("overflow-wrapper")},a.default.createElement(r.default,{tabIndex:"0"},a.default.createElement("p",{className:s("paragraph-y-wrapper")},"Entering patient details is a crucial process in healthcare facilities that involves capturing and documenting relevant information about individuals seeking medical care. Patient details need to be regularly updated to ensure accuracy and relevancy. This may involve periodic verification of personal information, updating medical history, and making necessary changes to insurance or contact details. Hospitals may request patients to review and confirm their information during subsequent visits or at designated intervals. Accurate and comprehensive patient details play a vital role in providing effective healthcare. They serve as a foundation for medical assessments, treatment planning, and continuity of care, enabling healthcare providers to deliver personalised and efficient services to patients.Begin filling out the form by entering your personal information. This usually includes your full name, contact details (such as phone number and email address), and residential address. It is crucial to provide accurate contact information as it will be used for communication and verification purposes."))))}},22863:function(e,t,n){var a=n(64836);t.Z=void 0;var r=a(n(67294)),l=a(n(45697)),o=a(n(47166)),i=a(n(17422)),s=o.default.bind(i.default),c={name:l.default.string.isRequired,src:l.default.string,url:l.default.string,version:l.default.string.isRequired},d=function(e){var t=e.src,n=e.name,a=e.url,l=e.version,o=r.default.createElement("a",{className:s("badge"),href:a||"https://www.npmjs.org/package/".concat(n,"/v/").concat(l)},r.default.createElement("span",{className:s("badge-name")},a?"package":"npm"),r.default.createElement("span",{className:s("badge-version")},"v".concat(l))),i=t?r.default.createElement("a",{className:s("badge"),href:t},r.default.createElement("span",{className:s("badge-name")},"github"),r.default.createElement("span",{className:s("badge-version")},"source")):void 0;return r.default.createElement("div",{className:s("badge-container")},o,i)};d.propTypes=c;var p=d;t.Z=p},49271:function(e,t,n){var a=n(64836),r=n(18698);t.Z=void 0;var l=a(n(27424)),o=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==r(e)&&"function"!=typeof e)return{default:e};var n=f(t);if(n&&n.has(e))return n.get(e);var a={},l=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var i=l?Object.getOwnPropertyDescriptor(e,o):null;i&&(i.get||i.set)?Object.defineProperty(a,o,i):a[o]=e[o]}a.default=e,n&&n.set(e,a);return a}(n(67294)),i=a(n(45697)),s=a(n(47166)),c=n(21538),d=a(n(33864)),p=a(n(23399)),u=n(51051),m=a(n(53560));function f(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(f=function(e){return e?n:t})(e)}var v=s.default.bind(m.default),g={example:i.default.element,exampleSrc:i.default.element,exampleCssSrc:i.default.element,title:i.default.string,description:i.default.node,isExpanded:i.default.bool},x=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","true")},h=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","false")},y=function(e){var t=e.example,n=e.exampleSrc,a=e.exampleCssSrc,r=e.title,i=e.description,s=e.isExpanded,m=(0,o.useState)(s),f=(0,l.default)(m,2),g=f[0],y=f[1],b=(0,o.useState)(!1),_=(0,l.default)(b,2),w=_[0],E=_[1],N=o.default.useContext(c.ThemeContext),O=void 0!==a,T=function(){E(!w),g&&y(!g)},S=function(){y(!g),w&&E(!w)},j=function(e,t){e.nativeEvent.keyCode!==u.KEY_SPACE&&e.nativeEvent.keyCode!==u.KEY_RETURN||(e.preventDefault(),t())};return o.default.createElement("div",{className:v("template",N.className)},o.default.createElement("div",{className:v("header")},r&&o.default.createElement("h2",{className:v("title")},r)),o.default.createElement("div",{className:v("content")},i&&o.default.createElement("div",{className:v("description")},i),t),o.default.createElement("div",{className:v("footer")},n?o.default.createElement("div",{className:v("button-container")},O&&o.default.createElement("button",{type:"button",className:v("css-toggle","item",{"is-selected":w}),onClick:T,onKeyDown:function(e){return j(e,T)},onBlur:x,onMouseDown:h,tabIndex:0,"data-focus-styles-enabled":!0},o.default.createElement(d.default,{className:v("chevron")}),o.default.createElement("span",null,"CSS"),o.default.createElement(p.default,{className:v("chevron")})),o.default.createElement("button",{type:"button",className:v("code-toggle","item",{"is-selected":g}),onClick:S,onKeyDown:function(e){return j(e,S)},onBlur:x,onMouseDown:h,tabIndex:0,"data-focus-styles-enabled":!0},o.default.createElement(d.default,{className:v("chevron")}),o.default.createElement("span",null,"Code"),o.default.createElement(p.default,{className:v("chevron")}))):null,o.default.createElement("div",null,w&&o.default.createElement("div",{className:v("css")},a),g&&o.default.createElement("div",{className:v("code")},n))))};y.propTypes=g,y.defaultProps={isExpanded:!1};var b=y;t.Z=b},27458:function(e,t,n){n.r(t),n.d(t,{default:function(){return X}});var a=n(67294),r=n(81254),l=n(91249),o=n(8378),i=["components"];function s(){return s=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},s.apply(this,arguments)}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d={};function p(e){var t=e.components,n=c(e,i);return(0,r.mdx)("wrapper",s({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport Scroll from 'terra-scroll';\nimport classNames from 'classnames/bind';\nimport styles from './ScrollCommon.module.scss';\n\nconst cx = classNames.bind(styles);\n\nexport default () => (\n  <div>\n    <p>Overflow-Y Container</p>\n    <div className={cx('overflow-wrapper')}>\n      <Scroll tabIndex=\"0\">\n        <p className={cx('paragraph-y-wrapper')}>\n          Entering patient details is a crucial process in healthcare facilities that involves capturing and documenting relevant information about individuals seeking medical care. Patient details need to be regularly updated to ensure accuracy and relevancy. This may involve periodic verification of personal information, updating medical history, and making necessary changes to insurance or contact details. Hospitals may request patients to review and confirm their information during subsequent visits or at designated intervals. Accurate and comprehensive patient details play a vital role in providing effective healthcare. They serve as a foundation for medical assessments, treatment planning, and continuity of care, enabling healthcare providers to deliver personalised and efficient services to patients.Begin filling out the form by entering your personal information. This usually includes your full name, contact details (such as phone number and email address), and residential address. It is crucial to provide accurate contact information as it will be used for communication and verification purposes.\n        </p>\n      </Scroll>\n    </div>\n  </div>\n);\n\n")))}p.isMDXComponent=!0;var u=n(49271),m=["components"];function f(){return f=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},f.apply(this,arguments)}function v(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var g={};function x(e){var t=e.components,n=v(e,m);return(0,r.mdx)("wrapper",f({},g,n,{components:t,mdxType:"MDXLayout"}),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-scss"},":local { \n  .overflow-wrapper {\n    border: 1px dashed rgb(0, 0, 0);\n    height: 200px;\n    width: 400px;\n  }\n\n  .overflow-y-wrapper {\n    border: 1px dashed rgb(0, 0, 0);\n    height: auto;\n    width: 400px;\n  }\n\n  .paragraph-x-wrapper {\n    padding-left: 10px;\n    padding-right: 10px;\n    width: 1350px;\n  }\n  \n  .paragraph-y-wrapper {\n    padding-left: 10px;\n    padding-right: 10px;\n    width: 375px;\n  }\n\n  .container-x-wrapper {\n    padding-left: 10px;\n    padding-right: 10px;\n  }\n}\n\n")))}x.isMDXComponent=!0;var h=function(e){var t=e.title,n=e.description,r=e.isExpanded;return a.createElement(u.Z,{title:t||"Scroll Vertical",description:n,example:a.createElement(o.Z,null),exampleCssSrc:a.createElement(x,null),exampleSrc:a.createElement(p,null),isExpanded:r})},y=n(26510),b=["components"];function _(){return _=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},_.apply(this,arguments)}function w(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var E={};function N(e){var t=e.components,n=w(e,b);return(0,r.mdx)("wrapper",_({},E,n,{components:t,mdxType:"MDXLayout"}),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport Scroll from 'terra-scroll';\nimport Button from 'terra-button';\nimport classNames from 'classnames/bind';\nimport InputField from 'terra-form-input/lib/InputField';\nimport styles from './ScrollCommon.module.scss';\n\nconst cx = classNames.bind(styles);\n\nexport default () => (\n  <div>\n    <p>Overflow-X Container</p>\n    <div className={cx('overflow-y-wrapper')}>\n      <Scroll tabIndex=\"0\">\n        <p className={cx('paragraph-x-wrapper')}>\n          Entering patient details is a crucial process in healthcare facilities that involves capturing and documenting relevant information about individuals seeking medical care. Patient details need to be regularly updated to ensure accuracy and relevancy. This may involve periodic verification of personal information, updating medical history, and making necessary changes to insurance or contact details. Hospitals may request patients to review and confirm their information during subsequent visits or at designated intervals. Accurate and comprehensive patient details play a vital role in providing effective healthcare. They serve as a foundation for medical assessments, treatment planning, and continuity of care, enabling healthcare providers to deliver personalised and efficient services to patients.Begin filling out the form by entering your personal information. This usually includes your full name, contact details (such as phone number and email address), and residential address. It is crucial to provide accurate contact information as it will be used for communication and verification purposes.\n        </p>\n        <div className={cx('container-x-wrapper')}>\n          <InputField\n            inputId=\"input-field\"\n            label=\"Enter Patient Name\"\n            type=\"text\"\n          />\n        </div>\n        <div className={cx('container-x-wrapper')}>\n          <Button text=\"Submit\" />\n        </div>\n      </Scroll>\n    </div>\n  </div>\n);\n\n")))}N.isMDXComponent=!0;var O=function(e){var t=e.title,n=e.description,r=e.isExpanded;return a.createElement(u.Z,{title:t||"Scroll Horizontal",description:n,example:a.createElement(y.Z,null),exampleCssSrc:a.createElement(x,null),exampleSrc:a.createElement(N,null),isExpanded:r})},T=n(78530),S=["components"];function j(){return j=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},j.apply(this,arguments)}function C(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var P={},k="wrapper";function D(e){var t=e.components,n=C(e,S);return(0,r.mdx)(k,j({},P,n,{components:t,mdxType:"MDXLayout"}),(0,r.mdx)(T.ZP,{mdxType:"PropsTable"},(0,r.mdx)(T.X2,{key:"ROW1",mdxType:"Row"},(0,r.mdx)(T.O,{mdxType:"PropNameCell"},"children"),(0,r.mdx)(T.Di,{mdxType:"TypeCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"node\n"))),(0,r.mdx)(T.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,r.mdx)(T.mW,{mdxType:"DefaultValueCell"},(0,r.mdx)("p",null,"none")),(0,r.mdx)(T.Ex,{mdxType:"DescriptionCell"},(0,r.mdx)("p",null,"The child content to present in the scrollable region."))),(0,r.mdx)(T.X2,{key:"ROW2",mdxType:"Row"},(0,r.mdx)(T.O,{mdxType:"PropNameCell"},"refCallback"),(0,r.mdx)(T.Di,{mdxType:"TypeCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"func\n"))),(0,r.mdx)(T.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,r.mdx)(T.mW,{mdxType:"DefaultValueCell"},(0,r.mdx)("p",null,"none")),(0,r.mdx)(T.Ex,{mdxType:"DescriptionCell"},(0,r.mdx)("p",null,"Function callback for the ref of the scrollable container.")))))}D.isMDXComponent=!0;var M=["components"];function I(){return I=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},I.apply(this,arguments)}function B(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var q={},R="wrapper";function X(e){var t=e.components,n=B(e,M);return(0,r.mdx)(R,I({},q,n,{components:t,mdxType:"MDXLayout"}),(0,r.mdx)(l.C,{mdxType:"Badge"}),(0,r.mdx)("h1",{id:"terra-scroll"},"Terra Scroll"),(0,r.mdx)("p",null,"The terra-scroll is a content view that hides data accessible with scrolling and provides a refCallback. The expectation is that any consumer needing to provide a scrollable area within their implementation should be using this component, or one of our other terra components that implements Scroll."),(0,r.mdx)("p",null,"Scroll provides a menthod to access the node managing scrolling, so values such as scrollTop can be easily set, as well as the correct prefixes to consistently sytle scrolling across supported browsers."),(0,r.mdx)("p",null,"The terra-scroll expands to fill it's parent container, so parent nodes are expected to have an explicit height set."),(0,r.mdx)("h2",{id:"getting-started"},"Getting Started"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},"Install with ",(0,r.mdx)("a",{parentName:"li",href:"https://www.npmjs.com/"},"npmjs"),":",(0,r.mdx)("ul",{parentName:"li"},(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("inlineCode",{parentName:"li"},"npm install terra-scroll"))))),(0,r.mdx)("h2",{id:"peer-dependencies"},"Peer Dependencies"),(0,r.mdx)("p",null,"This component requires the following peer dependencies be installed in your app for the component to properly function."),(0,r.mdx)("table",null,(0,r.mdx)("thead",{parentName:"table"},(0,r.mdx)("tr",{parentName:"thead"},(0,r.mdx)("th",{parentName:"tr",align:null},"Peer Dependency"),(0,r.mdx)("th",{parentName:"tr",align:null},"Version"))),(0,r.mdx)("tbody",{parentName:"table"},(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"react"),(0,r.mdx)("td",{parentName:"tr",align:null},"^16.8.5")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"react-dom"),(0,r.mdx)("td",{parentName:"tr",align:null},"^16.8.5")))),(0,r.mdx)("h2",{id:"usage"},"Usage"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-js"},"import Scroll from 'terra-scroll';\n")),(0,r.mdx)("h2",{id:"component-features"},"Component Features"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("a",{parentName:"li",href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#cross-browser-support"},"Cross-Browser Support")),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("a",{parentName:"li",href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#responsive-support"},"Responsive Support")),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("a",{parentName:"li",href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#mobile-support"},"Mobile Support"))),(0,r.mdx)("h2",{id:"examples"},"Examples"),(0,r.mdx)(h,{title:"Vertical Scroll",mdxType:"ScrollVertical"}),(0,r.mdx)(O,{title:"Horizontal Scroll",mdxType:"ScrollHorizontal"}),(0,r.mdx)("h2",{id:"scroll-props"},"Scroll Props"),(0,r.mdx)(D,{mdxType:"ScrollPropsTable"}))}X.isMDXComponent=!0},91249:function(e,t,n){n.d(t,{C:function(){return l}});var a=n(67294),r=n(22863),l=function(e){var t=e.url;return a.createElement(r.Z,{src:"https://github.com/cerner/terra-core/tree/main/packages/terra-scroll",name:"terra-scroll",version:"2.35.0",url:t})}},60502:function(e,t,n){n.r(t),t.default={"overflow-wrapper":"ScrollCommon-module__overflow-wrapper___D23RF","overflow-y-wrapper":"ScrollCommon-module__overflow-y-wrapper___eFj49","paragraph-x-wrapper":"ScrollCommon-module__paragraph-x-wrapper___WhEHE","paragraph-y-wrapper":"ScrollCommon-module__paragraph-y-wrapper___pnx9j","container-x-wrapper":"ScrollCommon-module__container-x-wrapper___w5sBE"}},17422:function(e,t,n){n.r(t),t.default={badge:"Badges-module__badge___vex-+","badge-container":"Badges-module__badge-container___B13Mv","badge-name":"Badges-module__badge-name___jkN0m","badge-version":"Badges-module__badge-version___agZ+P"}},53560:function(e,t,n){n.r(t),t.default={"clinical-lowlight-theme":"ExampleTemplate-module__clinical-lowlight-theme___rBbtD","orion-fusion-theme":"ExampleTemplate-module__orion-fusion-theme___GzA23",template:"ExampleTemplate-module__template___a4uPk",header:"ExampleTemplate-module__header___iFXV3",content:"ExampleTemplate-module__content___48m4Q",description:"ExampleTemplate-module__description___NwBJo",footer:"ExampleTemplate-module__footer___GpSoG","button-container":"ExampleTemplate-module__button-container___rAD11",css:"ExampleTemplate-module__css___+jtk1",code:"ExampleTemplate-module__code___7rC6C","css-toggle":"ExampleTemplate-module__css-toggle___chHK7","code-toggle":"ExampleTemplate-module__code-toggle___TGlE-","is-selected":"ExampleTemplate-module__is-selected___0BYwS",item:"ExampleTemplate-module__item___8FTQq",chevron:"ExampleTemplate-module__chevron___VbY7N",title:"ExampleTemplate-module__title___r+nbJ","dynamic-content":"ExampleTemplate-module__dynamic-content___k+1H7"}},33864:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=l(n(67294)),r=l(n(99139));function l(e){return e&&e.__esModule?e:{default:e}}function o(){return o=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},o.apply(this,arguments)}var i=function(e){var t=o({},e);return a.default.createElement(r.default,t,a.default.createElement("path",{d:"M10.3 24 33.8 0l3.9 3.8L18 24l19.7 20.2-3.9 3.8z"}))};i.displayName="IconChevronLeft",i.defaultProps={viewBox:"0 0 48 48","data-name":"Layer 1",xmlns:"http://www.w3.org/2000/svg"};t.default=i}}]);