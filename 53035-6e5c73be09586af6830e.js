"use strict";(self.webpackChunkterra_ui=self.webpackChunkterra_ui||[]).push([[53035,45627,37344,33667,96890,85565,3353,80858,14041,5161,45865,85355,27444,3193,17657,33315,4845,46647,85161,20444,38681,15318,40411,18101],{39864:function(e,t,n){function a(e){return a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a(e)}t.Z=void 0;var r,l=(r=n(67294))&&r.__esModule?r:{default:r},o=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==a(e)&&"function"!=typeof e)return{default:e};var n=d(t);if(n&&n.has(e))return n.get(e);var r={},l=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var i=l?Object.getOwnPropertyDescriptor(e,o):null;i&&(i.get||i.set)?Object.defineProperty(r,o,i):r[o]=e[o]}r.default=e,n&&n.set(e,r);return r}(n(93670));function d(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(d=function(e){return e?n:t})(e)}var i=function(){return l.default.createElement(o.default,null,l.default.createElement(o.SubsectionHeader,{title:"Default SubsectionHeader",key:"default"}))};t.Z=i},22863:function(e,t,n){var a=n(64836);t.Z=void 0;var r=a(n(67294)),l=a(n(45697)),o=a(n(47166)),d=a(n(17422)),i=o.default.bind(d.default),u={name:l.default.string.isRequired,src:l.default.string,url:l.default.string,version:l.default.string.isRequired},s=function(e){var t=e.src,n=e.name,a=e.url,l=e.version,o=r.default.createElement("a",{className:i("badge"),href:a||"https://www.npmjs.org/package/".concat(n,"/v/").concat(l)},r.default.createElement("span",{className:i("badge-name")},a?"package":"npm"),r.default.createElement("span",{className:i("badge-version")},"v".concat(l))),d=t?r.default.createElement("a",{className:i("badge"),href:t},r.default.createElement("span",{className:i("badge-name")},"github"),r.default.createElement("span",{className:i("badge-version")},"source")):void 0;return r.default.createElement("div",{className:i("badge-container")},o,d)};s.propTypes=u;var c=s;t.Z=c},49271:function(e,t,n){var a=n(64836),r=n(18698);t.Z=void 0;var l=a(n(27424)),o=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==r(e)&&"function"!=typeof e)return{default:e};var n=f(t);if(n&&n.has(e))return n.get(e);var a={},l=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var d=l?Object.getOwnPropertyDescriptor(e,o):null;d&&(d.get||d.set)?Object.defineProperty(a,o,d):a[o]=e[o]}a.default=e,n&&n.set(e,a);return a}(n(67294)),d=a(n(45697)),i=a(n(47166)),u=n(21538),s=a(n(33864)),c=a(n(23399)),m=n(51051),p=a(n(53560));function f(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(f=function(e){return e?n:t})(e)}var x=i.default.bind(p.default),b={example:d.default.element,exampleSrc:d.default.element,exampleCssSrc:d.default.element,title:d.default.string,description:d.default.node,isExpanded:d.default.bool},y=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","true")},_=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","false")},v=function(e){var t=e.example,n=e.exampleSrc,a=e.exampleCssSrc,r=e.title,d=e.description,i=e.isExpanded,p=(0,o.useState)(i),f=(0,l.default)(p,2),b=f[0],v=f[1],g=(0,o.useState)(!1),h=(0,l.default)(g,2),E=h[0],O=h[1],T=o.default.useContext(u.ThemeContext),N=void 0!==a,j=function(){O(!E),b&&v(!b)},w=function(){v(!b),E&&O(!E)},C=function(e,t){e.nativeEvent.keyCode!==m.KEY_SPACE&&e.nativeEvent.keyCode!==m.KEY_RETURN||(e.preventDefault(),t())};return o.default.createElement("div",{className:x("template",T.className)},o.default.createElement("div",{className:x("header")},r&&o.default.createElement("h2",{className:x("title")},r)),o.default.createElement("div",{className:x("content")},d&&o.default.createElement("div",{className:x("description")},d),t),o.default.createElement("div",{className:x("footer")},n?o.default.createElement("div",{className:x("button-container")},N&&o.default.createElement("button",{type:"button",className:x("css-toggle","item",{"is-selected":E}),onClick:j,onKeyDown:function(e){return C(e,j)},onBlur:y,onMouseDown:_,tabIndex:0,"data-focus-styles-enabled":!0},o.default.createElement(s.default,{className:x("chevron")}),o.default.createElement("span",null,"CSS"),o.default.createElement(c.default,{className:x("chevron")})),o.default.createElement("button",{type:"button",className:x("code-toggle","item",{"is-selected":b}),onClick:w,onKeyDown:function(e){return C(e,w)},onBlur:y,onMouseDown:_,tabIndex:0,"data-focus-styles-enabled":!0},o.default.createElement(s.default,{className:x("chevron")}),o.default.createElement("span",null,"Code"),o.default.createElement(c.default,{className:x("chevron")}))):null,o.default.createElement("div",null,E&&o.default.createElement("div",{className:x("css")},a),b&&o.default.createElement("div",{className:x("code")},n))))};v.propTypes=b,v.defaultProps={isExpanded:!1};var g=v;t.Z=g},77730:function(e,t,n){n.r(t),n.d(t,{default:function(){return j}});var a=n(67294),r=n(81254),l=n(30999),o=n(39864),d=["components"];function i(){return i=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},i.apply(this,arguments)}function u(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s={};function c(e){var t=e.components,n=u(e,d);return(0,r.mdx)("wrapper",i({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport List, { SubsectionHeader } from 'terra-list/lib/index';\n\nconst ListSubsectionHeaderExample = () => (\n  <List>\n    <SubsectionHeader title=\"Default SubsectionHeader\" key=\"default\" />\n  </List>\n);\n\nexport default ListSubsectionHeaderExample;\n\n")))}c.isMDXComponent=!0;var m=n(49271),p=function(e){var t=e.title,n=e.description,r=e.isExpanded;return a.createElement(m.Z,{title:t||"List Subsection Header",description:n,example:a.createElement(o.Z,null),exampleSrc:a.createElement(c,null),isExpanded:r})},f=n(78530),x=["components"];function b(){return b=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},b.apply(this,arguments)}function y(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var _={},v="wrapper";function g(e){var t=e.components,n=y(e,x);return(0,r.mdx)(v,b({},_,n,{components:t,mdxType:"MDXLayout"}),(0,r.mdx)(f.ZP,{mdxType:"PropsTable"},(0,r.mdx)(f.X2,{key:"ROW1",mdxType:"Row"},(0,r.mdx)(f.O,{mdxType:"PropNameCell"},"level"),(0,r.mdx)(f.Di,{mdxType:"TypeCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"enum: [\n  2\n  3\n  4\n  5\n  6\n],\n"))),(0,r.mdx)(f.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,r.mdx)(f.mW,{mdxType:"DefaultValueCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"2\n"))),(0,r.mdx)(f.Ex,{mdxType:"DescriptionCell"},(0,r.mdx)("p",null,"Optionally sets the heading level. One of ",(0,r.mdx)("inlineCode",{parentName:"p"},"2"),", ",(0,r.mdx)("inlineCode",{parentName:"p"},"3"),", ",(0,r.mdx)("inlineCode",{parentName:"p"},"4"),", ",(0,r.mdx)("inlineCode",{parentName:"p"},"5"),", ",(0,r.mdx)("inlineCode",{parentName:"p"},"6"),"."))),(0,r.mdx)(f.X2,{key:"ROW2",mdxType:"Row"},(0,r.mdx)(f.O,{mdxType:"PropNameCell"},"refCallback"),(0,r.mdx)(f.Di,{mdxType:"TypeCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"func\n"))),(0,r.mdx)(f.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,r.mdx)(f.mW,{mdxType:"DefaultValueCell"},(0,r.mdx)("p",null,"none")),(0,r.mdx)(f.Ex,{mdxType:"DescriptionCell"},(0,r.mdx)("p",null,"Function callback passthrough for the ref of the section li."))),(0,r.mdx)(f.X2,{key:"ROW3",mdxType:"Row"},(0,r.mdx)(f.O,{mdxType:"PropNameCell"},"title"),(0,r.mdx)(f.Di,{mdxType:"TypeCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"string\n"))),(0,r.mdx)(f.dS,{isRequired:!0,mdxType:"RequiredCell"}),(0,r.mdx)(f.mW,{mdxType:"DefaultValueCell"},(0,r.mdx)("p",null,"none")),(0,r.mdx)(f.Ex,{mdxType:"DescriptionCell"},(0,r.mdx)("p",null,"Title text to be placed within the subsection header.")))))}g.isMDXComponent=!0;var h=["components"];function E(){return E=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},E.apply(this,arguments)}function O(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var T={},N="wrapper";function j(e){var t=e.components,n=O(e,h);return(0,r.mdx)(N,E({},T,n,{components:t,mdxType:"MDXLayout"}),(0,r.mdx)(l.C,{mdxType:"Badge"}),(0,r.mdx)("h1",{id:"list-subsection-header"},"List Subsection Header"),(0,r.mdx)("p",null,"The list subsection header is a sub-component of the list subsection. It provides the visual representation of the subsection, but does not provided any collapsible functionality itself, it's collapsible props are for the display of the collapse/expand indicator. The subsection header should only be consumed directly when the header is static, as the actual list item collapse is handled by the subsection."),(0,r.mdx)("p",null,"When consumed by itself as an individual list item avoid enabling the collapsible properties."),(0,r.mdx)("h2",{id:"usage"},"Usage"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-jsx"},"import List, { SubsectionHeader } from 'terra-list/lib/List';\n")),(0,r.mdx)("h2",{id:"examples"},"Examples"),(0,r.mdx)(p,{mdxType:"ListSubsectionHeaderExample"}),(0,r.mdx)("h2",{id:"list-subsection-header-props"},"List Subsection Header Props"),(0,r.mdx)(g,{mdxType:"ListSubsectionHeaderPropsTable"}))}j.isMDXComponent=!0},30999:function(e,t,n){n.d(t,{C:function(){return l}});var a=n(67294),r=n(22863),l=function(e){var t=e.url;return a.createElement(r.Z,{src:"https://github.com/cerner/terra-core/tree/main/packages/terra-list",name:"terra-list",version:"4.57.0",url:t})}},17422:function(e,t,n){n.r(t),t.default={badge:"Badges-module__badge___vex-+","badge-container":"Badges-module__badge-container___B13Mv","badge-name":"Badges-module__badge-name___jkN0m","badge-version":"Badges-module__badge-version___agZ+P"}},53560:function(e,t,n){n.r(t),t.default={"orion-fusion-theme":"ExampleTemplate-module__orion-fusion-theme___GzA23",template:"ExampleTemplate-module__template___a4uPk",header:"ExampleTemplate-module__header___iFXV3",content:"ExampleTemplate-module__content___48m4Q",description:"ExampleTemplate-module__description___NwBJo",footer:"ExampleTemplate-module__footer___GpSoG","button-container":"ExampleTemplate-module__button-container___rAD11",css:"ExampleTemplate-module__css___+jtk1",code:"ExampleTemplate-module__code___7rC6C","css-toggle":"ExampleTemplate-module__css-toggle___chHK7","code-toggle":"ExampleTemplate-module__code-toggle___TGlE-","is-selected":"ExampleTemplate-module__is-selected___0BYwS",item:"ExampleTemplate-module__item___8FTQq",chevron:"ExampleTemplate-module__chevron___VbY7N",title:"ExampleTemplate-module__title___r+nbJ","dynamic-content":"ExampleTemplate-module__dynamic-content___k+1H7"}},33864:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=l(n(67294)),r=l(n(99139));function l(e){return e&&e.__esModule?e:{default:e}}function o(){return o=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},o.apply(this,arguments)}var d=function(e){var t=o({},e);return a.default.createElement(r.default,t,a.default.createElement("path",{d:"M10.3 24L33.8 0l3.9 3.8L18 24l19.7 20.2-3.9 3.8z"}))};d.displayName="IconChevronLeft",d.defaultProps={className:"",viewBox:"0 0 48 48",xmlns:"http://www.w3.org/2000/svg","data-name":"Layer 1",isBidi:!0};var i=d;t.default=i}}]);