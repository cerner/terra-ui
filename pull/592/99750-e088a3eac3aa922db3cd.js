"use strict";(self.webpackChunkterra_ui=self.webpackChunkterra_ui||[]).push([[99750,45627,37344,33667,96890,85565,3353,80858,14041,5161,45865,85355,27444,3193,17657,33315,4845,46647,85161,20444,38681,15318,40411,18101],{7638:function(e,t,n){t.Z=void 0;var r=o(n(67294)),a=o(n(62714)),l=o(n(54201));function o(e){return e&&e.__esModule?e:{default:e}}var u=function(){return r.default.createElement("div",null,r.default.createElement(l.default,{href:"http://google.com",text:"HREF Tag"}),r.default.createElement(l.default,{icon:r.default.createElement(a.default,null),href:"http://google.com",text:"Icon & Text HREF Tag"}))};t.Z=u},96592:function(e,t,n){t.Z=void 0;var r=o(n(67294)),a=o(n(62714)),l=o(n(54201));function o(e){return e&&e.__esModule?e:{default:e}}var u=function(){return r.default.createElement("div",null,r.default.createElement(l.default,{text:"Default OnClick Tag",onClick:function(){return window.alert("Tag has been clicked!")}}),r.default.createElement(l.default,{icon:r.default.createElement(a.default,null),onClick:function(){return window.alert("Tag has been clicked!")},text:"Icon & Text OnClick Tag"}))};t.Z=u},2447:function(e,t,n){t.Z=void 0;var r=o(n(67294)),a=o(n(62714)),l=o(n(54201));function o(e){return e&&e.__esModule?e:{default:e}}var u=function(){return r.default.createElement("div",null,r.default.createElement(l.default,{text:"No OnClick/HREF Tag"}),r.default.createElement(l.default,{icon:r.default.createElement(a.default,null),text:"Icon & Text - No OnClick/HREF Tag"}))};t.Z=u},22863:function(e,t,n){var r=n(64836);t.Z=void 0;var a=r(n(67294)),l=r(n(45697)),o=r(n(47166)),u=r(n(17422)),i=o.default.bind(u.default),c={name:l.default.string.isRequired,src:l.default.string,url:l.default.string,version:l.default.string.isRequired},d=function(e){var t=e.src,n=e.name,r=e.url,l=e.version,o=a.default.createElement("a",{className:i("badge"),href:r||"https://www.npmjs.org/package/".concat(n,"/v/").concat(l)},a.default.createElement("span",{className:i("badge-name")},r?"package":"npm"),a.default.createElement("span",{className:i("badge-version")},"v".concat(l))),u=t?a.default.createElement("a",{className:i("badge"),href:t},a.default.createElement("span",{className:i("badge-name")},"github"),a.default.createElement("span",{className:i("badge-version")},"source")):void 0;return a.default.createElement("div",{className:i("badge-container")},o,u)};d.propTypes=c;var p=d;t.Z=p},49271:function(e,t,n){var r=n(64836),a=n(18698);t.Z=void 0;var l=r(n(27424)),o=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==a(e)&&"function"!=typeof e)return{default:e};var n=f(t);if(n&&n.has(e))return n.get(e);var r={},l=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var u=l?Object.getOwnPropertyDescriptor(e,o):null;u&&(u.get||u.set)?Object.defineProperty(r,o,u):r[o]=e[o]}r.default=e,n&&n.set(e,r);return r}(n(67294)),u=r(n(45697)),i=r(n(47166)),c=n(21538),d=r(n(33864)),p=r(n(23399)),m=n(51051),s=r(n(53560));function f(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(f=function(e){return e?n:t})(e)}var x=i.default.bind(s.default),g={example:u.default.element,exampleSrc:u.default.element,exampleCssSrc:u.default.element,title:u.default.string,description:u.default.node,isExpanded:u.default.bool},y=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","true")},v=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","false")},b=function(e){var t=e.example,n=e.exampleSrc,r=e.exampleCssSrc,a=e.title,u=e.description,i=e.isExpanded,s=(0,o.useState)(i),f=(0,l.default)(s,2),g=f[0],b=f[1],h=(0,o.useState)(!1),T=(0,l.default)(h,2),_=T[0],O=T[1],E=o.default.useContext(c.ThemeContext),w=void 0!==r,j=function(){O(!_),g&&b(!g)},N=function(){b(!g),_&&O(!_)},C=function(e,t){e.nativeEvent.keyCode!==m.KEY_SPACE&&e.nativeEvent.keyCode!==m.KEY_RETURN||(e.preventDefault(),t())};return o.default.createElement("div",{className:x("template",E.className)},o.default.createElement("div",{className:x("header")},a&&o.default.createElement("h2",{className:x("title")},a)),o.default.createElement("div",{className:x("content")},u&&o.default.createElement("div",{className:x("description")},u),t),o.default.createElement("div",{className:x("footer")},n?o.default.createElement("div",{className:x("button-container")},w&&o.default.createElement("button",{type:"button",className:x("css-toggle","item",{"is-selected":_}),onClick:j,onKeyDown:function(e){return C(e,j)},onBlur:y,onMouseDown:v,tabIndex:0,"data-focus-styles-enabled":!0},o.default.createElement(d.default,{className:x("chevron")}),o.default.createElement("span",null,"CSS"),o.default.createElement(p.default,{className:x("chevron")})),o.default.createElement("button",{type:"button",className:x("code-toggle","item",{"is-selected":g}),onClick:N,onKeyDown:function(e){return C(e,N)},onBlur:y,onMouseDown:v,tabIndex:0,"data-focus-styles-enabled":!0},o.default.createElement(d.default,{className:x("chevron")}),o.default.createElement("span",null,"Code"),o.default.createElement(p.default,{className:x("chevron")}))):null,o.default.createElement("div",null,_&&o.default.createElement("div",{className:x("css")},r),g&&o.default.createElement("div",{className:x("code")},n))))};b.propTypes=g,b.defaultProps={isExpanded:!1};var h=b;t.Z=h},71746:function(e,t,n){n.r(t),n.d(t,{default:function(){return q}});var r=n(67294),a=n(81254),l=n(74285),o=n(96592),u=["components"];function i(){return i=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},i.apply(this,arguments)}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var d={};function p(e){var t=e.components,n=c(e,u);return(0,a.mdx)("wrapper",i({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport IconTag from 'terra-icon/lib/icon/IconTag';\nimport Tag from 'terra-tag';\n\nconst TagDefault = () => (\n  <div>\n    {/* eslint-disable no-alert */}\n    <Tag text=\"Default OnClick Tag\" onClick={() => window.alert('Tag has been clicked!')} />\n    <Tag icon={<IconTag />} onClick={() => window.alert('Tag has been clicked!')} text=\"Icon &amp; Text OnClick Tag\" />\n    {/* eslint-enable no-alert */}\n  </div>\n);\n\nexport default TagDefault;\n\n")))}p.isMDXComponent=!0;var m=n(49271),s=function(e){var t=e.title,n=e.description,a=e.isExpanded;return r.createElement(m.Z,{title:t||"Tag Default",description:n,example:r.createElement(o.Z,null),exampleSrc:r.createElement(p,null),isExpanded:a})},f=n(7638),x=["components"];function g(){return g=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},g.apply(this,arguments)}function y(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var v={};function b(e){var t=e.components,n=y(e,x);return(0,a.mdx)("wrapper",g({},v,n,{components:t,mdxType:"MDXLayout"}),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-jsx"},'import React from \'react\';\nimport IconTag from \'terra-icon/lib/icon/IconTag\';\nimport Tag from \'terra-tag\';\n\nconst HrefTag = () => (\n  <div>\n    <Tag href="http://google.com" text="HREF Tag" />\n    <Tag icon={<IconTag />} href="http://google.com" text="Icon &amp; Text HREF Tag" />\n  </div>\n);\n\nexport default HrefTag;\n\n')))}b.isMDXComponent=!0;var h=function(e){var t=e.title,n=e.description,a=e.isExpanded;return r.createElement(m.Z,{title:t||"Href Tag",description:n,example:r.createElement(f.Z,null),exampleSrc:r.createElement(b,null),isExpanded:a})},T=n(2447),_=["components"];function O(){return O=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},O.apply(this,arguments)}function E(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var w={};function j(e){var t=e.components,n=E(e,_);return(0,a.mdx)("wrapper",O({},w,n,{components:t,mdxType:"MDXLayout"}),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport IconTag from 'terra-icon/lib/icon/IconTag';\nimport Tag from 'terra-tag';\n\nconst TagFallbacks = () => (\n  <div>\n    <Tag text=\"No OnClick/HREF Tag\" />\n    <Tag icon={<IconTag />} text=\"Icon &amp; Text - No OnClick/HREF Tag\" />\n  </div>\n);\n\nexport default TagFallbacks;\n\n")))}j.isMDXComponent=!0;var N=function(e){var t=e.title,n=e.description,a=e.isExpanded;return r.createElement(m.Z,{title:t||"Tag Fallbacks",description:n,example:r.createElement(T.Z,null),exampleSrc:r.createElement(j,null),isExpanded:a})},C=n(78530),k=["components"];function P(){return P=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},P.apply(this,arguments)}function D(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var R={},S="wrapper";function M(e){var t=e.components,n=D(e,k);return(0,a.mdx)(S,P({},R,n,{components:t,mdxType:"MDXLayout"}),(0,a.mdx)(C.ZP,{mdxType:"PropsTable"},(0,a.mdx)(C.X2,{key:"ROW1",mdxType:"Row"},(0,a.mdx)(C.O,{mdxType:"PropNameCell"},"href"),(0,a.mdx)(C.Di,{mdxType:"TypeCell"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"string\n"))),(0,a.mdx)(C.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,a.mdx)(C.mW,{mdxType:"DefaultValueCell"},(0,a.mdx)("p",null,"none")),(0,a.mdx)(C.Ex,{mdxType:"DescriptionCell"},(0,a.mdx)("p",null,"Sets the href. When set will render the component as an anchor tag."))),(0,a.mdx)(C.X2,{key:"ROW2",mdxType:"Row"},(0,a.mdx)(C.O,{mdxType:"PropNameCell"},"icon"),(0,a.mdx)(C.Di,{mdxType:"TypeCell"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"element\n"))),(0,a.mdx)(C.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,a.mdx)(C.mW,{mdxType:"DefaultValueCell"},(0,a.mdx)("p",null,"none")),(0,a.mdx)(C.Ex,{mdxType:"DescriptionCell"},(0,a.mdx)("p",null,"An optional icon."))),(0,a.mdx)(C.X2,{key:"ROW3",mdxType:"Row"},(0,a.mdx)(C.O,{mdxType:"PropNameCell"},"onClick"),(0,a.mdx)(C.Di,{mdxType:"TypeCell"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"func\n"))),(0,a.mdx)(C.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,a.mdx)(C.mW,{mdxType:"DefaultValueCell"},(0,a.mdx)("p",null,"none")),(0,a.mdx)(C.Ex,{mdxType:"DescriptionCell"},(0,a.mdx)("p",null,"Callback function triggered when clicked."))),(0,a.mdx)(C.X2,{key:"ROW4",mdxType:"Row"},(0,a.mdx)(C.O,{mdxType:"PropNameCell"},"onBlur"),(0,a.mdx)(C.Di,{mdxType:"TypeCell"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"func\n"))),(0,a.mdx)(C.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,a.mdx)(C.mW,{mdxType:"DefaultValueCell"},(0,a.mdx)("p",null,"none")),(0,a.mdx)(C.Ex,{mdxType:"DescriptionCell"},(0,a.mdx)("p",null,"Callback function triggered when tag loses focus."))),(0,a.mdx)(C.X2,{key:"ROW5",mdxType:"Row"},(0,a.mdx)(C.O,{mdxType:"PropNameCell"},"onFocus"),(0,a.mdx)(C.Di,{mdxType:"TypeCell"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"func\n"))),(0,a.mdx)(C.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,a.mdx)(C.mW,{mdxType:"DefaultValueCell"},(0,a.mdx)("p",null,"none")),(0,a.mdx)(C.Ex,{mdxType:"DescriptionCell"},(0,a.mdx)("p",null,"Callback function triggered when tag gains focus."))),(0,a.mdx)(C.X2,{key:"ROW6",mdxType:"Row"},(0,a.mdx)(C.O,{mdxType:"PropNameCell"},"onKeyUp"),(0,a.mdx)(C.Di,{mdxType:"TypeCell"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"func\n"))),(0,a.mdx)(C.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,a.mdx)(C.mW,{mdxType:"DefaultValueCell"},(0,a.mdx)("p",null,"none")),(0,a.mdx)(C.Ex,{mdxType:"DescriptionCell"},(0,a.mdx)("p",null,"Callback function triggered when key is released."))),(0,a.mdx)(C.X2,{key:"ROW7",mdxType:"Row"},(0,a.mdx)(C.O,{mdxType:"PropNameCell"},"text"),(0,a.mdx)(C.Di,{mdxType:"TypeCell"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"string\n"))),(0,a.mdx)(C.dS,{isRequired:!0,mdxType:"RequiredCell"}),(0,a.mdx)(C.mW,{mdxType:"DefaultValueCell"},(0,a.mdx)("p",null,"none")),(0,a.mdx)(C.Ex,{mdxType:"DescriptionCell"},(0,a.mdx)("p",null,"Sets the tag text.")))))}M.isMDXComponent=!0;var B=["components"];function I(){return I=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},I.apply(this,arguments)}function W(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var F={},Z="wrapper";function q(e){var t=e.components,n=W(e,B);return(0,a.mdx)(Z,I({},F,n,{components:t,mdxType:"MDXLayout"}),(0,a.mdx)(l.C,{mdxType:"Badge"}),(0,a.mdx)("h1",{id:"terra-tag"},"Terra Tag"),(0,a.mdx)("p",null,"The tag component is used for tagging and provides users a way to trigger actions in the UI. Each tag should have text.\nIt can optionally display an icon along with the text."),(0,a.mdx)("h2",{id:"getting-started"},"Getting Started"),(0,a.mdx)("ul",null,(0,a.mdx)("li",{parentName:"ul"},"Install with ",(0,a.mdx)("a",{parentName:"li",href:"https://www.npmjs.com/"},"npmjs"),":",(0,a.mdx)("ul",{parentName:"li"},(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("inlineCode",{parentName:"li"},"npm install terra-tag"))))),(0,a.mdx)("h2",{id:"peer-dependencies"},"Peer Dependencies"),(0,a.mdx)("p",null,"This component requires the following peer dependencies be installed in your app for the component to properly function."),(0,a.mdx)("table",null,(0,a.mdx)("thead",{parentName:"table"},(0,a.mdx)("tr",{parentName:"thead"},(0,a.mdx)("th",{parentName:"tr",align:null},"Peer Dependency"),(0,a.mdx)("th",{parentName:"tr",align:null},"Version"))),(0,a.mdx)("tbody",{parentName:"table"},(0,a.mdx)("tr",{parentName:"tbody"},(0,a.mdx)("td",{parentName:"tr",align:null},"react"),(0,a.mdx)("td",{parentName:"tr",align:null},"^16.8.5")),(0,a.mdx)("tr",{parentName:"tbody"},(0,a.mdx)("td",{parentName:"tr",align:null},"react-dom"),(0,a.mdx)("td",{parentName:"tr",align:null},"^16.8.5")))),(0,a.mdx)("h2",{id:"usage"},"Usage"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-jsx"},"import Tag from 'terra-tag';\n")),(0,a.mdx)("h2",{id:"component-features"},"Component Features"),(0,a.mdx)("ul",null,(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("a",{parentName:"li",href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#cross-browser-support"},"Cross-Browser Support")),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("a",{parentName:"li",href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#responsive-support"},"Responsive Support")),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("a",{parentName:"li",href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#mobile-support"},"Mobile Support"))),(0,a.mdx)("h2",{id:"examples"},"Examples"),(0,a.mdx)(s,{title:"Default Tag with onClick",mdxType:"TagDefault"}),(0,a.mdx)(h,{title:"Tag with href",mdxType:"TagHref"}),(0,a.mdx)(N,{title:"Tag with no onClick or href",description:"These styles are provided for when this component is missing recommended elements for best practice use.",mdxType:"TagFallbacks"}),(0,a.mdx)("h2",{id:"tag-props"},"Tag Props"),(0,a.mdx)(M,{mdxType:"TagPropsTable"}))}q.isMDXComponent=!0},74285:function(e,t,n){n.d(t,{C:function(){return l}});var r=n(67294),a=n(22863),l=function(e){var t=e.url;return r.createElement(a.Z,{src:"https://github.com/cerner/terra-core/tree/main/packages/terra-tag",name:"terra-tag",version:"2.57.0",url:t})}},17422:function(e,t,n){n.r(t),t.default={badge:"Badges-module__badge___vex-+","badge-container":"Badges-module__badge-container___B13Mv","badge-name":"Badges-module__badge-name___jkN0m","badge-version":"Badges-module__badge-version___agZ+P"}},53560:function(e,t,n){n.r(t),t.default={"orion-fusion-theme":"ExampleTemplate-module__orion-fusion-theme___GzA23",template:"ExampleTemplate-module__template___a4uPk",header:"ExampleTemplate-module__header___iFXV3",content:"ExampleTemplate-module__content___48m4Q",description:"ExampleTemplate-module__description___NwBJo",footer:"ExampleTemplate-module__footer___GpSoG","button-container":"ExampleTemplate-module__button-container___rAD11",css:"ExampleTemplate-module__css___+jtk1",code:"ExampleTemplate-module__code___7rC6C","css-toggle":"ExampleTemplate-module__css-toggle___chHK7","code-toggle":"ExampleTemplate-module__code-toggle___TGlE-","is-selected":"ExampleTemplate-module__is-selected___0BYwS",item:"ExampleTemplate-module__item___8FTQq",chevron:"ExampleTemplate-module__chevron___VbY7N",title:"ExampleTemplate-module__title___r+nbJ","dynamic-content":"ExampleTemplate-module__dynamic-content___k+1H7"}},79572:function(e,t,n){n.r(t),t.default={"orion-fusion-theme":"Tag-module__orion-fusion-theme___Q346+",tag:"Tag-module__tag___z94Y9","is-interactive":"Tag-module__is-interactive___huWZF","is-focused":"Tag-module__is-focused___W+165",icon:"Tag-module__icon___YVFGv"}},33864:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=l(n(67294)),a=l(n(99139));function l(e){return e&&e.__esModule?e:{default:e}}function o(){return o=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o.apply(this,arguments)}var u=function(e){var t=o({},e);return r.default.createElement(a.default,t,r.default.createElement("path",{d:"M10.3 24L33.8 0l3.9 3.8L18 24l19.7 20.2-3.9 3.8z"}))};u.displayName="IconChevronLeft",u.defaultProps={className:"",viewBox:"0 0 48 48",xmlns:"http://www.w3.org/2000/svg","data-name":"Layer 1",isBidi:!0};var i=u;t.default=i},62714:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=l(n(67294)),a=l(n(99139));function l(e){return e&&e.__esModule?e:{default:e}}function o(){return o=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o.apply(this,arguments)}var u=function(e){var t=o({},e);return r.default.createElement(a.default,t,r.default.createElement("path",{d:"M23.5 1.5C22.6.7 21.9 0 21.9 0H0v21.9l1.5 1.5 23.8 23.8c.8.8 2.2.8 3.1 0l18.9-18.9c.8-.8.8-2.2 0-3.1L23.5 1.5zm-9.8 16.7c-2.5 0-4.5-2-4.5-4.5s2-4.5 4.5-4.5 4.5 2 4.5 4.5-2 4.5-4.5 4.5z"}))};u.displayName="IconTag",u.defaultProps={className:"",viewBox:"0 0 48 48",xmlns:"http://www.w3.org/2000/svg",isBidi:!0};var i=u;t.default=i},54201:function(e,t,n){function r(e){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=s(n(67294)),l=s(n(45697)),o=s(n(94184)),u=s(n(47166)),i=s(n(50026)),c=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==r(e)&&"function"!=typeof e)return{default:e};var n=m(t);if(n&&n.has(e))return n.get(e);var a={},l=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var u=l?Object.getOwnPropertyDescriptor(e,o):null;u&&(u.get||u.set)?Object.defineProperty(a,o,u):a[o]=e[o]}a.default=e,n&&n.set(e,a);return a}(n(51051)),d=s(n(79572)),p=["icon","text","href","onClick","onBlur","onFocus","onKeyUp"];function m(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(m=function(e){return e?n:t})(e)}function s(e){return e&&e.__esModule?e:{default:e}}function f(){return f=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},f.apply(this,arguments)}function x(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}function g(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,(l=a.key,o=void 0,o=function(e,t){if("object"!==r(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var a=n.call(e,t||"default");if("object"!==r(a))return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(l,"string"),"symbol"===r(o)?o:String(o)),a)}var l,o}function y(e,t){return y=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},y(e,t)}function v(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,a=h(e);if(t){var l=h(this).constructor;n=Reflect.construct(a,arguments,l)}else n=a.apply(this,arguments);return function(e,t){if(t&&("object"===r(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return b(e)}(this,n)}}function b(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function h(e){return h=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},h(e)}var T=u.default.bind(d.default),_={href:l.default.string,icon:l.default.element,onClick:l.default.func,onBlur:l.default.func,onFocus:l.default.func,onKeyUp:l.default.func,text:l.default.string.isRequired},O=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&y(e,t)}(u,e);var t,n,r,l=v(u);function u(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(t=l.call(this,e)).state={focused:!1},t.handleKeyUp=t.handleKeyUp.bind(b(t)),t.handleOnBlur=t.handleOnBlur.bind(b(t)),t}return t=u,(n=[{key:"handleOnBlur",value:function(e){this.setState({focused:!1}),this.props.onBlur&&this.props.onBlur(e)}},{key:"handleKeyUp",value:function(e){e.nativeEvent.keyCode===c.KEY_TAB&&this.setState({focused:!0}),this.props.onKeyUp&&this.props.onKeyUp(e)}},{key:"render",value:function(){var e=this.props,t=e.icon,n=e.text,r=e.href,l=e.onClick,u=(e.onBlur,e.onFocus),i=(e.onKeyUp,x(e,p)),c=this.context,d=(0,o.default)(T("tag",{"is-focused":this.state.focused},{"is-interactive":r||l},c.className),i.className),m=T("icon"),s=t?a.default.createElement("span",{className:m},t):null,g=r||l?r?"a":"button":"span";return a.default.createElement(g,f({},i,{className:d,onKeyUp:this.handleKeyUp,onBlur:this.handleOnBlur,onClick:l,onFocus:u,href:r}),s,n)}}])&&g(t.prototype,n),r&&g(t,r),Object.defineProperty(t,"prototype",{writable:!1}),u}(a.default.Component);O.propTypes=_,O.contextType=i.default;var E=O;t.default=E}}]);