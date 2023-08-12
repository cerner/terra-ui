"use strict";(self.webpackChunkterra_ui=self.webpackChunkterra_ui||[]).push([[53310,45627,37344,33667,96890,14041,27444,85565,3353,80858,17657,5161,45865,85355,3193,33315,4845,20444,26806,46647,85161,38681,17763,15318,40411,18101,38443,78996,39915,33442],{22863:function(e,t,n){var r=n(64836);t.Z=void 0;var a=r(n(67294)),l=r(n(45697)),o=r(n(47166)),d=r(n(17422)),i=o.default.bind(d.default),u={name:l.default.string.isRequired,src:l.default.string,url:l.default.string,version:l.default.string.isRequired},c=function(e){var t=e.src,n=e.name,r=e.url,l=e.version,o=a.default.createElement("a",{className:i("badge"),href:r||"https://www.npmjs.org/package/".concat(n,"/v/").concat(l)},a.default.createElement("span",{className:i("badge-name")},r?"package":"npm"),a.default.createElement("span",{className:i("badge-version")},"v".concat(l))),d=t?a.default.createElement("a",{className:i("badge"),href:t},a.default.createElement("span",{className:i("badge-name")},"github"),a.default.createElement("span",{className:i("badge-version")},"source")):void 0;return a.default.createElement("div",{className:i("badge-container")},o,d)};c.propTypes=u;var m=c;t.Z=m},49271:function(e,t,n){var r=n(64836),a=n(18698);t.Z=void 0;var l=r(n(27424)),o=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==a(e)&&"function"!=typeof e)return{default:e};var n=f(t);if(n&&n.has(e))return n.get(e);var r={},l=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var d=l?Object.getOwnPropertyDescriptor(e,o):null;d&&(d.get||d.set)?Object.defineProperty(r,o,d):r[o]=e[o]}r.default=e,n&&n.set(e,r);return r}(n(67294)),d=r(n(45697)),i=r(n(47166)),u=n(21538),c=r(n(33864)),m=r(n(23399)),s=n(51051),p=r(n(53560));function f(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(f=function(e){return e?n:t})(e)}var x=i.default.bind(p.default),y={example:d.default.element,exampleSrc:d.default.element,exampleCssSrc:d.default.element,title:d.default.string,description:d.default.node,isExpanded:d.default.bool},h=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","true")},v=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","false")},b=function(e){var t=e.example,n=e.exampleSrc,r=e.exampleCssSrc,a=e.title,d=e.description,i=e.isExpanded,p=(0,o.useState)(i),f=(0,l.default)(p,2),y=f[0],b=f[1],g=(0,o.useState)(!1),_=(0,l.default)(g,2),O=_[0],E=_[1],T=o.default.useContext(u.ThemeContext),C=void 0!==r,j=function(){E(!O),y&&b(!y)},w=function(){b(!y),O&&E(!O)},N=function(e,t){e.nativeEvent.keyCode!==s.KEY_SPACE&&e.nativeEvent.keyCode!==s.KEY_RETURN||(e.preventDefault(),t())};return o.default.createElement("div",{className:x("template",T.className)},o.default.createElement("div",{className:x("header")},a&&o.default.createElement("h2",{className:x("title")},a)),o.default.createElement("div",{className:x("content")},d&&o.default.createElement("div",{className:x("description")},d),t),o.default.createElement("div",{className:x("footer")},n?o.default.createElement("div",{className:x("button-container")},C&&o.default.createElement("button",{type:"button",className:x("css-toggle","item",{"is-selected":O}),onClick:j,onKeyDown:function(e){return N(e,j)},onBlur:h,onMouseDown:v,tabIndex:0,"data-focus-styles-enabled":!0},o.default.createElement(c.default,{className:x("chevron")}),o.default.createElement("span",null,"CSS"),o.default.createElement(m.default,{className:x("chevron")})),o.default.createElement("button",{type:"button",className:x("code-toggle","item",{"is-selected":y}),onClick:w,onKeyDown:function(e){return N(e,w)},onBlur:h,onMouseDown:v,tabIndex:0,"data-focus-styles-enabled":!0},o.default.createElement(c.default,{className:x("chevron")}),o.default.createElement("span",null,"Code"),o.default.createElement(m.default,{className:x("chevron")}))):null,o.default.createElement("div",null,O&&o.default.createElement("div",{className:x("css")},r),y&&o.default.createElement("div",{className:x("code")},n))))};b.propTypes=y,b.defaultProps={isExpanded:!1};var g=b;t.Z=g},96083:function(e,t,n){n.r(t),n.d(t,{default:function(){return ee}});var r=n(67294),a=n(81254),l=n(34749),o=n(78530),d=["components"];function i(){return i=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},i.apply(this,arguments)}function u(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c={},m="wrapper";function s(e){var t=e.components,n=u(e,d);return(0,a.mdx)(m,i({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.mdx)(o.ZP,{mdxType:"PropsTable"},(0,a.mdx)(o.X2,{key:"ROW1",mdxType:"Row"},(0,a.mdx)(o.O,{mdxType:"PropNameCell"},"children"),(0,a.mdx)(o.Di,{mdxType:"TypeCell"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"element\n"))),(0,a.mdx)(o.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,a.mdx)(o.mW,{mdxType:"DefaultValueCell"},(0,a.mdx)("p",null,"none")),(0,a.mdx)(o.Ex,{mdxType:"DescriptionCell"},(0,a.mdx)("p",null,"Child element to be displayed on the right end of the header.\nThe element passed as children will be decorated with flex attributes."))),(0,a.mdx)(o.X2,{key:"ROW2",mdxType:"Row"},(0,a.mdx)(o.O,{mdxType:"PropNameCell"},"startContent"),(0,a.mdx)(o.Di,{mdxType:"TypeCell"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"element\n"))),(0,a.mdx)(o.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,a.mdx)(o.mW,{mdxType:"DefaultValueCell"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"null\n"))),(0,a.mdx)(o.Ex,{mdxType:"DescriptionCell"},(0,a.mdx)("p",null,"Content to be displayed at the start of the header, placed before the title"))),(0,a.mdx)(o.X2,{key:"ROW3",mdxType:"Row"},(0,a.mdx)(o.O,{mdxType:"PropNameCell"},"title"),(0,a.mdx)(o.Di,{mdxType:"TypeCell"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"string\n"))),(0,a.mdx)(o.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,a.mdx)(o.mW,{mdxType:"DefaultValueCell"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"''\n"))),(0,a.mdx)(o.Ex,{mdxType:"DescriptionCell"},(0,a.mdx)("p",null,"Text to be displayed as the title in the header bar"))),(0,a.mdx)(o.X2,{key:"ROW4",mdxType:"Row"},(0,a.mdx)(o.O,{mdxType:"PropNameCell"},"endContent"),(0,a.mdx)(o.Di,{mdxType:"TypeCell"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"element\n"))),(0,a.mdx)(o.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,a.mdx)(o.mW,{mdxType:"DefaultValueCell"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"null\n"))),(0,a.mdx)(o.Ex,{mdxType:"DescriptionCell"},(0,a.mdx)("p",null,"Content to be displayed at the end of the header\nThe element passed as endContent will be wrapped in a div with flex attributes."))),(0,a.mdx)(o.X2,{key:"ROW5",mdxType:"Row"},(0,a.mdx)(o.O,{mdxType:"PropNameCell"},"isSubheader"),(0,a.mdx)(o.Di,{mdxType:"TypeCell"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"bool\n"))),(0,a.mdx)(o.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,a.mdx)(o.mW,{mdxType:"DefaultValueCell"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"false\n"))),(0,a.mdx)(o.Ex,{mdxType:"DescriptionCell"},(0,a.mdx)("p",null,"A Boolean indicating if element is a subheader.")))))}s.isMDXComponent=!0;var p=n(25295),f=["components"];function x(){return x=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},x.apply(this,arguments)}function y(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var h={};function v(e){var t=e.components,n=y(e,f);return(0,a.mdx)("wrapper",x({},h,n,{components:t,mdxType:"MDXLayout"}),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport Header from 'terra-clinical-header';\n\nconst TitleHeader = () => (\n  <Header title=\"Default Header\" />\n);\n\nexport default TitleHeader;\n\n")))}v.isMDXComponent=!0;var b=n(49271),g=function(e){var t=e.title,n=e.description,a=e.isExpanded;return r.createElement(b.Z,{title:t||"Title Header",description:n,example:r.createElement(p.Z,null),exampleSrc:r.createElement(v,null),isExpanded:a})},_=n(82333),O=["components"];function E(){return E=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},E.apply(this,arguments)}function T(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var C={};function j(e){var t=e.components,n=T(e,O);return(0,a.mdx)("wrapper",E({},C,n,{components:t,mdxType:"MDXLayout"}),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport Button from 'terra-button';\nimport Header from 'terra-clinical-header';\n\nconst TitleHeader = () => (\n  <div>\n    <Header\n      startContent={<Button text=\"Back\" />}\n      title=\"Patient Information\"\n      endContent={<Button text=\"Prescription\" />}\n    />\n  </div>\n);\n\nexport default TitleHeader;\n\n")))}j.isMDXComponent=!0;var w=function(e){var t=e.title,n=e.description,a=e.isExpanded;return r.createElement(b.Z,{title:t||"Content Header",description:n,example:r.createElement(_.Z,null),exampleSrc:r.createElement(j,null),isExpanded:a})},N=n(76516),P=["components"];function S(){return S=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},S.apply(this,arguments)}function H(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var D={};function M(e){var t=e.components,n=H(e,P);return(0,a.mdx)("wrapper",S({},D,n,{components:t,mdxType:"MDXLayout"}),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport Header from 'terra-clinical-header';\n\nconst LongTextWithButtons = () => (\n  <div>\n    <Header\n      title=\"This is a header with long text .This is an element provides a customizable header layout with a prominent title options for the elements.This component saves time and effort in designing a header from scratch and ensures consistency across a website's pages.\"\n    />\n  </div>\n);\n\nexport default LongTextWithButtons;\n\n")))}M.isMDXComponent=!0;var k=function(e){var t=e.title,n=e.description,a=e.isExpanded;return r.createElement(b.Z,{title:t||"Header Long Text",description:n,example:r.createElement(N.Z,null),exampleSrc:r.createElement(M,null),isExpanded:a})},R=n(21846),B=["components"];function W(){return W=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},W.apply(this,arguments)}function Z(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var L={};function I(e){var t=e.components,n=Z(e,B);return(0,a.mdx)("wrapper",W({},L,n,{components:t,mdxType:"MDXLayout"}),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-jsx"},'import React from \'react\';\nimport Button from \'terra-button\';\nimport Header from \'terra-clinical-header\';\n\nconst LongTextWithContent = () => (\n  <div>\n    <Header\n      startContent={<Button text="Back" />}\n      title="Patient Information for Individual Diagnosed with a Chronic Disease in the past or currently suffering: Comprehensive Medical History,Treatment Plan,and Prognosis Report"\n      endContent={<Button text="print" />}\n    >\n      <Button text="Medical History" />\n    </Header>\n  </div>\n);\n\nexport default LongTextWithContent;\n\n')))}I.isMDXComponent=!0;var X=function(e){var t=e.title,n=e.description,a=e.isExpanded;return r.createElement(b.Z,{title:t||"Header Long Text With Content",description:n,example:r.createElement(R.Z,null),exampleSrc:r.createElement(I,null),isExpanded:a})},q=n(912),A=["components"];function V(){return V=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},V.apply(this,arguments)}function F(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var G={};function K(e){var t=e.components,n=F(e,A);return(0,a.mdx)("wrapper",V({},G,n,{components:t,mdxType:"MDXLayout"}),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport Button from 'terra-button';\nimport Header from 'terra-clinical-header';\n\nconst Subheader = () => (\n  <div>\n    <Header\n      startContent={<Button text=\"Consult\" />}\n      title=\"Dr. Carl\"\n      endContent={<Button text=\"Information\" />}\n      isSubheader\n    />\n  </div>\n);\n\nexport default Subheader;\n\n")))}K.isMDXComponent=!0;var Y=function(e){var t=e.title,n=e.description,a=e.isExpanded;return r.createElement(b.Z,{title:t||"Subheader",description:n,example:r.createElement(q.Z,null),exampleSrc:r.createElement(K,null),isExpanded:a})},z=["components"];function U(){return U=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},U.apply(this,arguments)}function J(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var Q={},$="wrapper";function ee(e){var t=e.components,n=J(e,z);return(0,a.mdx)($,U({},Q,n,{components:t,mdxType:"MDXLayout"}),(0,a.mdx)(l.C,{mdxType:"Badge"}),(0,a.mdx)("h1",{id:"terra-clinical-header"},"Terra Clinical Header"),(0,a.mdx)("p",null,"A Header component that allows elements to be placed on the left and right ends of the header with a left aligned title in the center."),(0,a.mdx)("h2",{id:"getting-started"},"Getting Started"),(0,a.mdx)("ul",null,(0,a.mdx)("li",{parentName:"ul"},"Install with ",(0,a.mdx)("a",{parentName:"li",href:"https://www.npmjs.com/"},"npmjs"),":",(0,a.mdx)("ul",{parentName:"li"},(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("inlineCode",{parentName:"li"},"npm install terra-clinical-header"))))),(0,a.mdx)("h2",{id:"usage"},"Usage"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-jsx"},"import Header from 'terra-clinical-header';\n")),(0,a.mdx)("h2",{id:"component-features"},"Component Features"),(0,a.mdx)("ul",null,(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("a",{parentName:"li",href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#cross-browser-support"},"Cross-Browser Support")),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("a",{parentName:"li",href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#responsive-support"},"Responsive Support")),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("a",{parentName:"li",href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#mobile-support"},"Mobile Support"))),(0,a.mdx)("h2",{id:"example"},"Example"),(0,a.mdx)(g,{title:"Header With Title Only",mdxType:"TitleHeader"}),(0,a.mdx)(w,{title:"Header With Content",mdxType:"ContentHeader"}),(0,a.mdx)(k,{title:"Header With Long Title",mdxType:"HeaderLongText"}),(0,a.mdx)(X,{title:"Header With Long Title, Children, And Content",mdxType:"HeaderLongTextWithContent"}),(0,a.mdx)(Y,{title:"Subheader with content",mdxType:"Subheader"}),(0,a.mdx)("h2",{id:"header-props-table"},"Header Props Table"),(0,a.mdx)(s,{mdxType:"HeaderPropsTable"}))}ee.isMDXComponent=!0},34749:function(e,t,n){n.d(t,{C:function(){return l}});var r=n(67294),a=n(22863),l=function(e){var t=e.url;return r.createElement(a.Z,{src:"https://github.com/cerner/terra-clinical/tree/main/packages/terra-clinical-header",name:"terra-clinical-header",version:"3.27.0",url:t})}},17422:function(e,t,n){n.r(t),t.default={badge:"Badges-module__badge___vex-+","badge-container":"Badges-module__badge-container___B13Mv","badge-name":"Badges-module__badge-name___jkN0m","badge-version":"Badges-module__badge-version___agZ+P"}},53560:function(e,t,n){n.r(t),t.default={"clinical-lowlight-theme":"ExampleTemplate-module__clinical-lowlight-theme___rBbtD","orion-fusion-theme":"ExampleTemplate-module__orion-fusion-theme___GzA23",template:"ExampleTemplate-module__template___a4uPk",header:"ExampleTemplate-module__header___iFXV3",content:"ExampleTemplate-module__content___48m4Q",description:"ExampleTemplate-module__description___NwBJo",footer:"ExampleTemplate-module__footer___GpSoG","button-container":"ExampleTemplate-module__button-container___rAD11",css:"ExampleTemplate-module__css___+jtk1",code:"ExampleTemplate-module__code___7rC6C","css-toggle":"ExampleTemplate-module__css-toggle___chHK7","code-toggle":"ExampleTemplate-module__code-toggle___TGlE-","is-selected":"ExampleTemplate-module__is-selected___0BYwS",item:"ExampleTemplate-module__item___8FTQq",chevron:"ExampleTemplate-module__chevron___VbY7N",title:"ExampleTemplate-module__title___r+nbJ","dynamic-content":"ExampleTemplate-module__dynamic-content___k+1H7"}},4747:function(e,t,n){n.r(t),t.default={"clinical-lowlight-theme":"Header-module__clinical-lowlight-theme___UjMS9","orion-fusion-theme":"Header-module__orion-fusion-theme___6toUR","flex-header":"Header-module__flex-header___fkWPf","flex-collapse":"Header-module__flex-collapse___VFeRx",subheader:"Header-module__subheader___-k6s6","flex-fill":"Header-module__flex-fill___rJ6d7","flex-end":"Header-module__flex-end___FAH0Y","title-container":"Header-module__title-container___8iDTh",title:"Header-module__title___63-qh"}},77791:function(e,t,n){function r(e){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==r(e)&&"function"!=typeof e)return{default:e};var n=s(t);if(n&&n.has(e))return n.get(e);var a={},l=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var d=l?Object.getOwnPropertyDescriptor(e,o):null;d&&(d.get||d.set)?Object.defineProperty(a,o,d):a[o]=e[o]}a.default=e,n&&n.set(e,a);return a}(n(67294)),l=m(n(45697)),o=m(n(94184)),d=m(n(47166)),i=m(n(50026)),u=m(n(4747)),c=["children","title","startContent","endContent","isSubheader"];function m(e){return e&&e.__esModule?e:{default:e}}function s(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(s=function(e){return e?n:t})(e)}function p(){return p=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},p.apply(this,arguments)}function f(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var x=d.default.bind(u.default),y={children:l.default.element,startContent:l.default.element,title:l.default.string,endContent:l.default.element,isSubheader:l.default.bool},h=function(e){var t,n=e.children,r=e.title,l=e.startContent,d=e.endContent,u=e.isSubheader,m=f(e,c),s=(0,a.useContext)(i.default);r&&(t=a.default.createElement("div",{className:x("title-container")},a.default.createElement("h1",{className:x("title")},r)));var y=a.default.Children.map(n,(function(e){return a.default.cloneElement(e,{className:(0,o.default)([x("flex-collapse"),n.props.className])})})),h=(0,o.default)([x(["flex-header",{subheader:u},s.className]),m.className]);return a.default.createElement("header",p({},m,{className:h}),l&&a.default.createElement("div",{className:x("flex-end")},l),a.default.createElement("div",{className:x("flex-fill")},t),y,d&&a.default.createElement("div",{className:x("flex-end")},d))};h.propTypes=y,h.defaultProps={title:"",startContent:null,endContent:null,isSubheader:!1};var v=h;t.default=v},82333:function(e,t,n){t.Z=void 0;var r=o(n(67294)),a=o(n(55281)),l=o(n(77791));function o(e){return e&&e.__esModule?e:{default:e}}var d=function(){return r.default.createElement("div",null,r.default.createElement(l.default,{startContent:r.default.createElement(a.default,{text:"Back"}),title:"Patient Information",endContent:r.default.createElement(a.default,{text:"Prescription"})}))};t.Z=d},76516:function(e,t,n){t.Z=void 0;var r=l(n(67294)),a=l(n(77791));function l(e){return e&&e.__esModule?e:{default:e}}var o=function(){return r.default.createElement("div",null,r.default.createElement(a.default,{title:"This is a header with long text .This is an element provides a customizable header layout with a prominent title options for the elements.This component saves time and effort in designing a header from scratch and ensures consistency across a website's pages."}))};t.Z=o},21846:function(e,t,n){t.Z=void 0;var r=o(n(67294)),a=o(n(55281)),l=o(n(77791));function o(e){return e&&e.__esModule?e:{default:e}}var d=function(){return r.default.createElement("div",null,r.default.createElement(l.default,{startContent:r.default.createElement(a.default,{text:"Back"}),title:"Patient Information for Individual Diagnosed with a Chronic Disease in the past or currently suffering: Comprehensive Medical History,Treatment Plan,and Prognosis Report",endContent:r.default.createElement(a.default,{text:"print"})},r.default.createElement(a.default,{text:"Medical History"})))};t.Z=d},912:function(e,t,n){t.Z=void 0;var r=o(n(67294)),a=o(n(55281)),l=o(n(77791));function o(e){return e&&e.__esModule?e:{default:e}}var d=function(){return r.default.createElement("div",null,r.default.createElement(l.default,{startContent:r.default.createElement(a.default,{text:"Consult"}),title:"Dr. Carl",endContent:r.default.createElement(a.default,{text:"Information"}),isSubheader:!0}))};t.Z=d},25295:function(e,t,n){t.Z=void 0;var r=l(n(67294)),a=l(n(77791));function l(e){return e&&e.__esModule?e:{default:e}}var o=function(){return r.default.createElement(a.default,{title:"Default Header"})};t.Z=o},33864:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=l(n(67294)),a=l(n(99139));function l(e){return e&&e.__esModule?e:{default:e}}function o(){return o=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o.apply(this,arguments)}var d=function(e){var t=o({},e);return r.default.createElement(a.default,t,r.default.createElement("path",{d:"M10.3 24L33.8 0l3.9 3.8L18 24l19.7 20.2-3.9 3.8z"}))};d.displayName="IconChevronLeft",d.defaultProps={className:"",viewBox:"0 0 48 48",xmlns:"http://www.w3.org/2000/svg","data-name":"Layer 1",isBidi:!0};var i=d;t.default=i}}]);