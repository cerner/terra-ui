"use strict";(self.webpackChunkterra_ui=self.webpackChunkterra_ui||[]).push([[41142,45627,37344,85565,33667,96890,79482,3353,5161,45865,80858,14041,85355,16835,3193,4845,46647,27444,17657,85161,16873,38681,15318,66097,90941,40411,18101,38443,11264,79057,33315,34319,20116,33609,78996,39915,33442],{19127:function(e,t,n){function a(e){return a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a(e)}t.Z=void 0;var l,r=(l=n(67294))&&l.__esModule?l:{default:l},o=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=a(e)&&"function"!=typeof e)return{default:e};var n=i(t);if(n&&n.has(e))return n.get(e);var l={__proto__:null},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var d=r?Object.getOwnPropertyDescriptor(e,o):null;d&&(d.get||d.set)?Object.defineProperty(l,o,d):l[o]=e[o]}return l.default=e,n&&n.set(e,l),l}(n(93670));function i(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(i=function(e){return e?n:t})(e)}t.Z=function(){return r.default.createElement(o.default,null,r.default.createElement(o.SectionHeader,{title:"Default SectionHeader",key:"default"}))}},22863:function(e,t,n){var a=n(64836);t.Z=void 0;var l=a(n(67294)),r=a(n(45697)),o=a(n(19845)),i=a(n(17422)),d=o.default.bind(i.default),u={name:r.default.string.isRequired,src:r.default.string,url:r.default.string,version:r.default.string.isRequired},s=function(e){var t=e.src,n=e.name,a=e.url,r=e.version,o=l.default.createElement("a",{className:d("badge"),href:a||"https://www.npmjs.org/package/".concat(n,"/v/").concat(r)},l.default.createElement("span",{className:d("badge-name")},a?"package":"npm"),l.default.createElement("span",{className:d("badge-version")},"v".concat(r))),i=t?l.default.createElement("a",{className:d("badge"),href:t},l.default.createElement("span",{className:d("badge-name")},"github"),l.default.createElement("span",{className:d("badge-version")},"source")):void 0;return l.default.createElement("div",{className:d("badge-container")},o,i)};s.propTypes=u;var c=s;t.Z=c},49271:function(e,t,n){var a=n(64836),l=n(18698);t.Z=void 0;var r=a(n(27424)),o=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==l(e)&&"function"!=typeof e)return{default:e};var n=f(t);if(n&&n.has(e))return n.get(e);var a={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var i=r?Object.getOwnPropertyDescriptor(e,o):null;i&&(i.get||i.set)?Object.defineProperty(a,o,i):a[o]=e[o]}a.default=e,n&&n.set(e,a);return a}(n(67294)),i=a(n(45697)),d=a(n(19845)),u=n(21538),s=a(n(33864)),c=a(n(23399)),m=n(51051),p=a(n(53560));function f(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(f=function(e){return e?n:t})(e)}var x=d.default.bind(p.default),y={example:i.default.element,exampleSrc:i.default.element,exampleCssSrc:i.default.element,title:i.default.string,description:i.default.node,isExpanded:i.default.bool},_=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","true")},b=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","false")},v=function(e){var t=e.example,n=e.exampleSrc,a=e.exampleCssSrc,l=e.title,i=e.description,d=e.isExpanded,p=(0,o.useState)(d),f=(0,r.default)(p,2),y=f[0],v=f[1],g=(0,o.useState)(!1),h=(0,r.default)(g,2),E=h[0],O=h[1],T=o.default.useContext(u.ThemeContext),N=void 0!==a,w=function(){O(!E),y&&v(!y)},C=function(){v(!y),E&&O(!E)},j=function(e,t){e.nativeEvent.keyCode!==m.KEY_SPACE&&e.nativeEvent.keyCode!==m.KEY_RETURN||(e.preventDefault(),t())};return o.default.createElement("div",{className:x("template",T.className)},o.default.createElement("div",{className:x("header")},l&&o.default.createElement("h2",{className:x("title")},l)),o.default.createElement("div",{className:x("content")},i&&o.default.createElement("div",{className:x("description")},i),t),o.default.createElement("div",{className:x("footer")},n?o.default.createElement("div",{className:x("button-container")},N&&o.default.createElement("button",{type:"button",className:x("css-toggle","item",{"is-selected":E}),onClick:w,onKeyDown:function(e){return j(e,w)},onBlur:_,onMouseDown:b,tabIndex:0,"data-focus-styles-enabled":!0},o.default.createElement(s.default,{className:x("chevron")}),o.default.createElement("span",null,"CSS"),o.default.createElement(c.default,{className:x("chevron")})),o.default.createElement("button",{type:"button",className:x("code-toggle","item",{"is-selected":y}),onClick:C,onKeyDown:function(e){return j(e,C)},onBlur:_,onMouseDown:b,tabIndex:0,"data-focus-styles-enabled":!0},o.default.createElement(s.default,{className:x("chevron")}),o.default.createElement("span",null,"Code"),o.default.createElement(c.default,{className:x("chevron")}))):null,o.default.createElement("div",null,E&&o.default.createElement("div",{className:x("css")},a),y&&o.default.createElement("div",{className:x("code")},n))))};v.propTypes=y,v.defaultProps={isExpanded:!1};var g=v;t.Z=g},58496:function(e,t,n){n.r(t),n.d(t,{default:function(){return w}});var a=n(67294),l=n(81254),r=n(30999),o=n(19127),i=["components"];function d(){return d=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},d.apply(this,arguments)}function u(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var s={};function c(e){var t=e.components,n=u(e,i);return(0,l.mdx)("wrapper",d({},s,n,{components:t,mdxType:"MDXLayout"}),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport List, { SectionHeader } from 'terra-list/lib/index';\n\nconst ListSectionHeaderExample = () => (\n  <List>\n    <SectionHeader title=\"Default SectionHeader\" key=\"default\" />\n  </List>\n);\n\nexport default ListSectionHeaderExample;\n\n")))}c.isMDXComponent=!0;var m=n(49271),p=function(e){var t=e.title,n=e.description,l=e.isExpanded;return a.createElement(m.Z,{title:t||"List Section Header",description:n,example:a.createElement(o.Z,null),exampleSrc:a.createElement(c,null),isExpanded:l})},f=n(78530),x=["components"];function y(){return y=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},y.apply(this,arguments)}function _(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var b={},v="wrapper";function g(e){var t=e.components,n=_(e,x);return(0,l.mdx)(v,y({},b,n,{components:t,mdxType:"MDXLayout"}),(0,l.mdx)(f.ZP,{mdxType:"PropsTable"},(0,l.mdx)(f.X2,{key:"ROW1",mdxType:"Row"},(0,l.mdx)(f.O,{mdxType:"PropNameCell"},"level"),(0,l.mdx)(f.Di,{mdxType:"TypeCell"},(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-javascript"},"enum: [\n  1\n  2\n  3\n  4\n  5\n  6\n],\n"))),(0,l.mdx)(f.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,l.mdx)(f.mW,{mdxType:"DefaultValueCell"},(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-javascript"},"2\n"))),(0,l.mdx)(f.Ex,{mdxType:"DescriptionCell"},(0,l.mdx)("p",null,"Optionally sets the heading level. One of ",(0,l.mdx)("inlineCode",{parentName:"p"},"1"),", ",(0,l.mdx)("inlineCode",{parentName:"p"},"2"),", ",(0,l.mdx)("inlineCode",{parentName:"p"},"3"),", ",(0,l.mdx)("inlineCode",{parentName:"p"},"4"),", ",(0,l.mdx)("inlineCode",{parentName:"p"},"5"),", ",(0,l.mdx)("inlineCode",{parentName:"p"},"6"),".\n",(0,l.mdx)("img",{parentName:"p",src:"https://badgen.net/badge/UX/Accessibility/blue",alt:"IMPORTANT"}),"\nReplace value ",(0,l.mdx)("inlineCode",{parentName:"p"},"1")," of ",(0,l.mdx)("inlineCode",{parentName:"p"},"level")," prop with other level values. Do Not use level as 1 as there should be only one H1 in a page.\nHeading value ",(0,l.mdx)("inlineCode",{parentName:"p"},"1")," will be converted as heading level ",(0,l.mdx)("inlineCode",{parentName:"p"},"2")," until it is removed in the next MVB release."))),(0,l.mdx)(f.X2,{key:"ROW2",mdxType:"Row"},(0,l.mdx)(f.O,{mdxType:"PropNameCell"},"refCallback"),(0,l.mdx)(f.Di,{mdxType:"TypeCell"},(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-javascript"},"func\n"))),(0,l.mdx)(f.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,l.mdx)(f.mW,{mdxType:"DefaultValueCell"},(0,l.mdx)("p",null,"none")),(0,l.mdx)(f.Ex,{mdxType:"DescriptionCell"},(0,l.mdx)("p",null,"Function callback passthrough for the ref of the section li."))),(0,l.mdx)(f.X2,{key:"ROW3",mdxType:"Row"},(0,l.mdx)(f.O,{mdxType:"PropNameCell"},"title"),(0,l.mdx)(f.Di,{mdxType:"TypeCell"},(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-javascript"},"string\n"))),(0,l.mdx)(f.dS,{isRequired:!0,mdxType:"RequiredCell"}),(0,l.mdx)(f.mW,{mdxType:"DefaultValueCell"},(0,l.mdx)("p",null,"none")),(0,l.mdx)(f.Ex,{mdxType:"DescriptionCell"},(0,l.mdx)("p",null,"Title text to be placed within the section header.")))))}g.isMDXComponent=!0;var h=["components"];function E(){return E=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},E.apply(this,arguments)}function O(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var T={},N="wrapper";function w(e){var t=e.components,n=O(e,h);return(0,l.mdx)(N,E({},T,n,{components:t,mdxType:"MDXLayout"}),(0,l.mdx)(r.C,{mdxType:"Badge"}),(0,l.mdx)("h1",{id:"list-section-header"},"List Section Header"),(0,l.mdx)("p",null,"The list section header is a sub-component of the list section. It provides the visual representation of the section, but does not provided any collapsible functionality itself, it's collapsible props are for the display of the collapse/expand indicator. The section header should only be consumed directly when the header is static, as the actual list item collapse is handled by the section."),(0,l.mdx)("p",null,"When consumed by itself as an individual list item avoid enabling the collapsible properties."),(0,l.mdx)("h2",{id:"usage"},"Usage"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-jsx"},"import List, { SectionHeader } from 'terra-list/lib/List';\n")),(0,l.mdx)("h2",{id:"examples"},"Examples"),(0,l.mdx)(p,{mdxType:"ListSectionHeaderExample"}),(0,l.mdx)("h2",{id:"list-section-header-props"},"List Section Header Props"),(0,l.mdx)(g,{mdxType:"ListSectionHeaderPropsTable"}))}w.isMDXComponent=!0},30999:function(e,t,n){n.d(t,{C:function(){return r}});var a=n(67294),l=n(22863),r=function(e){var t=e.url;return a.createElement(l.Z,{src:"https://github.com/cerner/terra-core/tree/main/packages/terra-list",name:"terra-list",version:"4.68.0",url:t})}},17422:function(e,t,n){n.r(t),t.default={badge:"Badges-module__badge___vex-+","badge-container":"Badges-module__badge-container___B13Mv","badge-name":"Badges-module__badge-name___jkN0m","badge-version":"Badges-module__badge-version___agZ+P"}},53560:function(e,t,n){n.r(t),t.default={"clinical-lowlight-theme":"ExampleTemplate-module__clinical-lowlight-theme___rBbtD","orion-fusion-theme":"ExampleTemplate-module__orion-fusion-theme___GzA23",template:"ExampleTemplate-module__template___a4uPk",header:"ExampleTemplate-module__header___iFXV3",content:"ExampleTemplate-module__content___48m4Q",description:"ExampleTemplate-module__description___NwBJo",footer:"ExampleTemplate-module__footer___GpSoG","button-container":"ExampleTemplate-module__button-container___rAD11",css:"ExampleTemplate-module__css___+jtk1",code:"ExampleTemplate-module__code___7rC6C","css-toggle":"ExampleTemplate-module__css-toggle___chHK7","code-toggle":"ExampleTemplate-module__code-toggle___TGlE-","is-selected":"ExampleTemplate-module__is-selected___0BYwS",item:"ExampleTemplate-module__item___8FTQq",chevron:"ExampleTemplate-module__chevron___VbY7N",title:"ExampleTemplate-module__title___r+nbJ","dynamic-content":"ExampleTemplate-module__dynamic-content___k+1H7"}},33864:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=r(n(67294)),l=r(n(99139));function r(e){return e&&e.__esModule?e:{default:e}}function o(){return o=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},o.apply(this,arguments)}var i=function(e){var t=o({},e);return a.default.createElement(l.default,t,a.default.createElement("path",{d:"M10.3 24 33.8 0l3.9 3.8L18 24l19.7 20.2-3.9 3.8z"}))};i.displayName="IconChevronLeft",i.defaultProps={viewBox:"0 0 48 48","data-name":"Layer 1",xmlns:"http://www.w3.org/2000/svg"};t.default=i}}]);