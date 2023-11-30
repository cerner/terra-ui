"use strict";(self.webpackChunkterra_ui=self.webpackChunkterra_ui||[]).push([[54701,45627,37344,33667,96890,14041,27444,85565,3353,80858,17657,5161,45865,85355,3193,33315,4845,20444,26806,46647,85161,38681,17763,15318,40411,18101,38443,78996,39915,33442],{12255:function(e,t,n){t.Z=void 0;var a=o(n(67294)),r=o(n(54120)),l=o(n(80076));function o(e){return e&&e.__esModule?e:{default:e}}var d=function(){return a.default.createElement(l.default,null,a.default.createElement(r.default,null))};t.Z=d},80076:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a,r=(a=n(67294))&&a.__esModule?a:{default:a};var l=function(e){return r.default.createElement("div",null,r.default.createElement("p",null,"Since 1979, we’ve been proud to work at the intersection of health care and information technology to connect people and systems around the world."),e.children,r.default.createElement("p",null,"Before leaving Arthur Andersen & Co. to form their own company, three young friends and co-workers sat around a picnic table at Loose Creek Park in Kansas City, Missouri brainstorming business ideas. It was here that Neal Patterson, Paul Gorup and Cliff Illig conceived PGI & Associates, the company that would eventually become Cerner."))};t.default=l},77510:function(e,t,n){t.Z=void 0;var a=o(n(67294)),r=o(n(54120)),l=o(n(80076));function o(e){return e&&e.__esModule?e:{default:e}}var d=function(){return a.default.createElement(l.default,null,a.default.createElement(r.default,{text:"November 12, 1955",level:3}))};t.Z=d},8902:function(e,t,n){var a=o(n(67294)),r=o(n(54120)),l=o(n(80076));function o(e){return e&&e.__esModule?e:{default:e}}},22863:function(e,t,n){var a=n(64836);t.Z=void 0;var r=a(n(67294)),l=a(n(45697)),o=a(n(47166)),d=a(n(17422)),i=o.default.bind(d.default),m={name:l.default.string.isRequired,src:l.default.string,url:l.default.string,version:l.default.string.isRequired},u=function(e){var t=e.src,n=e.name,a=e.url,l=e.version,o=r.default.createElement("a",{className:i("badge"),href:a||"https://www.npmjs.org/package/".concat(n,"/v/").concat(l)},r.default.createElement("span",{className:i("badge-name")},a?"package":"npm"),r.default.createElement("span",{className:i("badge-version")},"v".concat(l))),d=t?r.default.createElement("a",{className:i("badge"),href:t},r.default.createElement("span",{className:i("badge-name")},"github"),r.default.createElement("span",{className:i("badge-version")},"source")):void 0;return r.default.createElement("div",{className:i("badge-container")},o,d)};u.propTypes=m;var p=u;t.Z=p},49271:function(e,t,n){var a=n(64836),r=n(18698);t.Z=void 0;var l=a(n(27424)),o=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==r(e)&&"function"!=typeof e)return{default:e};var n=f(t);if(n&&n.has(e))return n.get(e);var a={},l=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var d=l?Object.getOwnPropertyDescriptor(e,o):null;d&&(d.get||d.set)?Object.defineProperty(a,o,d):a[o]=e[o]}a.default=e,n&&n.set(e,a);return a}(n(67294)),d=a(n(45697)),i=a(n(47166)),m=n(21538),u=a(n(33864)),p=a(n(23399)),s=n(51051),c=a(n(53560));function f(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(f=function(e){return e?n:t})(e)}var x=i.default.bind(c.default),v={example:d.default.element,exampleSrc:d.default.element,exampleCssSrc:d.default.element,title:d.default.string,description:d.default.node,isExpanded:d.default.bool},g=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","true")},y=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","false")},_=function(e){var t=e.example,n=e.exampleSrc,a=e.exampleCssSrc,r=e.title,d=e.description,i=e.isExpanded,c=(0,o.useState)(i),f=(0,l.default)(c,2),v=f[0],_=f[1],b=(0,o.useState)(!1),h=(0,l.default)(b,2),E=h[0],N=h[1],T=o.default.useContext(m.ThemeContext),O=void 0!==a,w=function(){N(!E),v&&_(!v)},C=function(){_(!v),E&&N(!E)},D=function(e,t){e.nativeEvent.keyCode!==s.KEY_SPACE&&e.nativeEvent.keyCode!==s.KEY_RETURN||(e.preventDefault(),t())};return o.default.createElement("div",{className:x("template",T.className)},o.default.createElement("div",{className:x("header")},r&&o.default.createElement("h2",{className:x("title")},r)),o.default.createElement("div",{className:x("content")},d&&o.default.createElement("div",{className:x("description")},d),t),o.default.createElement("div",{className:x("footer")},n?o.default.createElement("div",{className:x("button-container")},O&&o.default.createElement("button",{type:"button",className:x("css-toggle","item",{"is-selected":E}),onClick:w,onKeyDown:function(e){return D(e,w)},onBlur:g,onMouseDown:y,tabIndex:0,"data-focus-styles-enabled":!0},o.default.createElement(u.default,{className:x("chevron")}),o.default.createElement("span",null,"CSS"),o.default.createElement(p.default,{className:x("chevron")})),o.default.createElement("button",{type:"button",className:x("code-toggle","item",{"is-selected":v}),onClick:C,onKeyDown:function(e){return D(e,C)},onBlur:g,onMouseDown:y,tabIndex:0,"data-focus-styles-enabled":!0},o.default.createElement(u.default,{className:x("chevron")}),o.default.createElement("span",null,"Code"),o.default.createElement(p.default,{className:x("chevron")}))):null,o.default.createElement("div",null,E&&o.default.createElement("div",{className:x("css")},a),v&&o.default.createElement("div",{className:x("code")},n))))};_.propTypes=v,_.defaultProps={isExpanded:!1};var b=_;t.Z=b},26805:function(e,t,n){n.r(t),n.d(t,{default:function(){return M}});var a=n(67294),r=n(81254),l=n(35300),o=n(12255),d=["components"];function i(){return i=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},i.apply(this,arguments)}function m(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u={};function p(e){var t=e.components,n=m(e,d);return(0,r.mdx)("wrapper",i({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport Divider from 'terra-divider';\nimport DividerExampleTemplate from './DividerExampleTemplate';\n\nconst DividerExample = () => (\n  <DividerExampleTemplate>\n    <Divider />\n  </DividerExampleTemplate>\n);\n\nexport default DividerExample;\n\n")))}p.isMDXComponent=!0;var s=n(49271),c=function(e){var t=e.title,n=e.description,r=e.isExpanded;return a.createElement(s.Z,{title:t||"Divider Example",description:n,example:a.createElement(o.Z,null),exampleSrc:a.createElement(p,null),isExpanded:r})},f=n(77510),x=["components"];function v(){return v=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},v.apply(this,arguments)}function g(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var y={};function _(e){var t=e.components,n=g(e,x);return(0,r.mdx)("wrapper",v({},y,n,{components:t,mdxType:"MDXLayout"}),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport Divider from 'terra-divider';\nimport DividerExampleTemplate from './DividerExampleTemplate';\n\nconst currentDate = 'November 12, 1955';\n\nconst DividerCustomExample = () => (\n  <DividerExampleTemplate>\n    <Divider text={currentDate} level={3} />\n  </DividerExampleTemplate>\n);\n\nexport default DividerCustomExample;\n\n")))}_.isMDXComponent=!0;var b=function(e){var t=e.title,n=e.description,r=e.isExpanded;return a.createElement(s.Z,{title:t||"Divider With Text",description:n,example:a.createElement(f.Z,null),exampleSrc:a.createElement(_,null),isExpanded:r})};n(8902);var h=n(78530),E=["components"];function N(){return N=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},N.apply(this,arguments)}function T(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var O={},w="wrapper";function C(e){var t=e.components,n=T(e,E);return(0,r.mdx)(w,N({},O,n,{components:t,mdxType:"MDXLayout"}),(0,r.mdx)(h.ZP,{mdxType:"PropsTable"},(0,r.mdx)(h.X2,{key:"ROW1",mdxType:"Row"},(0,r.mdx)(h.O,{mdxType:"PropNameCell"},"text"),(0,r.mdx)(h.Di,{mdxType:"TypeCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"string\n"))),(0,r.mdx)(h.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,r.mdx)(h.mW,{mdxType:"DefaultValueCell"},(0,r.mdx)("p",null,"none")),(0,r.mdx)(h.Ex,{mdxType:"DescriptionCell"},(0,r.mdx)("p",null,"String to be displayed inline with the divider. For accessibility best practices, providing a ",(0,r.mdx)("inlineCode",{parentName:"p"},"level")," should also be used whenever.\nUsing the ",(0,r.mdx)("inlineCode",{parentName:"p"},"text")," prop to make it a section heading."))),(0,r.mdx)(h.X2,{key:"ROW2",mdxType:"Row"},(0,r.mdx)(h.O,{mdxType:"PropNameCell"},"level"),(0,r.mdx)(h.Di,{mdxType:"TypeCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"enum: [\n  1\n  2\n  3\n  4\n  5\n  6\n],\n"))),(0,r.mdx)(h.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,r.mdx)(h.mW,{mdxType:"DefaultValueCell"},(0,r.mdx)("p",null,"none")),(0,r.mdx)(h.Ex,{mdxType:"DescriptionCell"},(0,r.mdx)("p",null,"Sets the heading level to One of ",(0,r.mdx)("inlineCode",{parentName:"p"},"1"),", ",(0,r.mdx)("inlineCode",{parentName:"p"},"2"),", ",(0,r.mdx)("inlineCode",{parentName:"p"},"3"),", ",(0,r.mdx)("inlineCode",{parentName:"p"},"4"),", ",(0,r.mdx)("inlineCode",{parentName:"p"},"5"),", ",(0,r.mdx)("inlineCode",{parentName:"p"},"6"),". This helps screen readers to announce appropriate heading levels.\nChanging ",(0,r.mdx)("inlineCode",{parentName:"p"},"level")," will not visually change the style of the content."))),(0,r.mdx)(h.X2,{key:"ROW3",mdxType:"Row"},(0,r.mdx)(h.O,{mdxType:"PropNameCell"},"id"),(0,r.mdx)(h.Di,{mdxType:"TypeCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"string\n"))),(0,r.mdx)(h.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,r.mdx)(h.mW,{mdxType:"DefaultValueCell"},(0,r.mdx)("p",null,"none")),(0,r.mdx)(h.Ex,{mdxType:"DescriptionCell"},(0,r.mdx)("p",null,"IDs should be used with 'aria-labelledby' to associate headings with the corresponding list, section, or page area to label regions.")))))}C.isMDXComponent=!0;var D=["components"];function j(){return j=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},j.apply(this,arguments)}function P(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var S={},k="wrapper";function M(e){var t=e.components,n=P(e,D);return(0,r.mdx)(k,j({},S,n,{components:t,mdxType:"MDXLayout"}),(0,r.mdx)(l.C,{mdxType:"Badge"}),(0,r.mdx)("h1",{id:"terra-divider"},"Terra Divider"),(0,r.mdx)("p",null,"The divider component is used to visually separate content on a layout."),(0,r.mdx)("h2",{id:"getting-started"},"Getting Started"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},"Install with ",(0,r.mdx)("a",{parentName:"li",href:"https://www.npmjs.com/"},"npmjs"),":",(0,r.mdx)("ul",{parentName:"li"},(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("inlineCode",{parentName:"li"},"npm install terra-divider"))))),(0,r.mdx)("h2",{id:"peer-dependencies"},"Peer Dependencies"),(0,r.mdx)("p",null,"This component requires the following peer dependencies be installed in your app for the component to properly function."),(0,r.mdx)("table",null,(0,r.mdx)("thead",{parentName:"table"},(0,r.mdx)("tr",{parentName:"thead"},(0,r.mdx)("th",{parentName:"tr",align:null},"Peer Dependency"),(0,r.mdx)("th",{parentName:"tr",align:null},"Version"))),(0,r.mdx)("tbody",{parentName:"table"},(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"react"),(0,r.mdx)("td",{parentName:"tr",align:null},"^16.8.5")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"react-dom"),(0,r.mdx)("td",{parentName:"tr",align:null},"^16.8.5")))),(0,r.mdx)("h2",{id:"usage"},"Usage"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-jsx"},"import Divider from 'terra-divider';\n")),(0,r.mdx)("h2",{id:"component-features"},"Component Features"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("a",{parentName:"li",href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#cross-browser-support"},"Cross-Browser Support")),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("a",{parentName:"li",href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#ltr--rtl"},"LTR/RTL Support"))),(0,r.mdx)("h2",{id:"examples"},"Examples"),(0,r.mdx)(c,{title:"Default",mdxType:"DividerExample"}),(0,r.mdx)(b,{title:"Section Divider With Custom Heading Text",mdxType:"DividerWithText"}),(0,r.mdx)("h2",{id:"divider-props"},"Divider Props"),(0,r.mdx)(C,{mdxType:"DividerPropsTable"}))}M.isMDXComponent=!0},35300:function(e,t,n){n.d(t,{C:function(){return l}});var a=n(67294),r=n(22863),l=function(e){var t=e.url;return a.createElement(r.Z,{src:"https://github.com/cerner/terra-core/tree/main/packages/terra-divider",name:"terra-divider",version:"3.38.0",url:t})}},17422:function(e,t,n){n.r(t),t.default={badge:"Badges-module__badge___vex-+","badge-container":"Badges-module__badge-container___B13Mv","badge-name":"Badges-module__badge-name___jkN0m","badge-version":"Badges-module__badge-version___agZ+P"}},53560:function(e,t,n){n.r(t),t.default={"clinical-lowlight-theme":"ExampleTemplate-module__clinical-lowlight-theme___rBbtD","orion-fusion-theme":"ExampleTemplate-module__orion-fusion-theme___GzA23",template:"ExampleTemplate-module__template___a4uPk",header:"ExampleTemplate-module__header___iFXV3",content:"ExampleTemplate-module__content___48m4Q",description:"ExampleTemplate-module__description___NwBJo",footer:"ExampleTemplate-module__footer___GpSoG","button-container":"ExampleTemplate-module__button-container___rAD11",css:"ExampleTemplate-module__css___+jtk1",code:"ExampleTemplate-module__code___7rC6C","css-toggle":"ExampleTemplate-module__css-toggle___chHK7","code-toggle":"ExampleTemplate-module__code-toggle___TGlE-","is-selected":"ExampleTemplate-module__is-selected___0BYwS",item:"ExampleTemplate-module__item___8FTQq",chevron:"ExampleTemplate-module__chevron___VbY7N",title:"ExampleTemplate-module__title___r+nbJ","dynamic-content":"ExampleTemplate-module__dynamic-content___k+1H7"}},33864:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=l(n(67294)),r=l(n(99139));function l(e){return e&&e.__esModule?e:{default:e}}function o(){return o=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},o.apply(this,arguments)}var d=function(e){var t=o({},e);return a.default.createElement(r.default,t,a.default.createElement("path",{d:"M10.3 24L33.8 0l3.9 3.8L18 24l19.7 20.2-3.9 3.8z"}))};d.displayName="IconChevronLeft",d.defaultProps={className:"",viewBox:"0 0 48 48",xmlns:"http://www.w3.org/2000/svg","data-name":"Layer 1",isBidi:!0};var i=d;t.default=i}}]);