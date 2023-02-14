"use strict";(self.webpackChunkterra_ui=self.webpackChunkterra_ui||[]).push([[33559,45627,37344,85565,3353,80858,14041,5161,45865,85355,27444,3193,17657,4845,46647,33315,85161],{22863:function(e,t,n){var a=n(64836);t.Z=void 0;var r=a(n(67294)),l=a(n(45697)),o=a(n(47166)),m=a(n(17422)),d=o.default.bind(m.default),c={name:l.default.string.isRequired,src:l.default.string,url:l.default.string,version:l.default.string.isRequired},s=function(e){var t=e.src,n=e.name,a=e.url,l=e.version,o=r.default.createElement("a",{className:d("badge"),href:a||"https://www.npmjs.org/package/".concat(n,"/v/").concat(l)},r.default.createElement("span",{className:d("badge-name")},a?"package":"npm"),r.default.createElement("span",{className:d("badge-version")},"v".concat(l))),m=t?r.default.createElement("a",{className:d("badge"),href:t},r.default.createElement("span",{className:d("badge-name")},"github"),r.default.createElement("span",{className:d("badge-version")},"source")):void 0;return r.default.createElement("div",{className:d("badge-container")},o,m)};s.propTypes=c;var u=s;t.Z=u},49271:function(e,t,n){var a=n(64836),r=n(18698);t.Z=void 0;var l=a(n(27424)),o=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==r(e)&&"function"!=typeof e)return{default:e};var n=f(t);if(n&&n.has(e))return n.get(e);var a={},l=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var m=l?Object.getOwnPropertyDescriptor(e,o):null;m&&(m.get||m.set)?Object.defineProperty(a,o,m):a[o]=e[o]}a.default=e,n&&n.set(e,a);return a}(n(67294)),m=a(n(45697)),d=a(n(47166)),c=n(21538),s=a(n(33864)),u=a(n(23399)),i=n(51051),p=a(n(53560));function f(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(f=function(e){return e?n:t})(e)}var h=d.default.bind(p.default),x={example:m.default.element,exampleSrc:m.default.element,exampleCssSrc:m.default.element,title:m.default.string,description:m.default.node,isExpanded:m.default.bool},_=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","true")},v=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","false")},b=function(e){var t=e.example,n=e.exampleSrc,a=e.exampleCssSrc,r=e.title,m=e.description,d=e.isExpanded,p=(0,o.useState)(d),f=(0,l.default)(p,2),x=f[0],b=f[1],g=(0,o.useState)(!1),y=(0,l.default)(g,2),T=y[0],E=y[1],C=o.default.useContext(c.ThemeContext),O=void 0!==a,N=function(){E(!T),x&&b(!x)},w=function(){b(!x),T&&E(!T)},j=function(e,t){e.nativeEvent.keyCode!==i.KEY_SPACE&&e.nativeEvent.keyCode!==i.KEY_RETURN||(e.preventDefault(),t())};return o.default.createElement("div",{className:h("template",C.className)},o.default.createElement("div",{className:h("header")},r&&o.default.createElement("h2",{className:h("title")},r)),o.default.createElement("div",{className:h("content")},m&&o.default.createElement("div",{className:h("description")},m),t),o.default.createElement("div",{className:h("footer")},n?o.default.createElement("div",{className:h("button-container")},O&&o.default.createElement("button",{type:"button",className:h("css-toggle","item",{"is-selected":T}),onClick:N,onKeyDown:function(e){return j(e,N)},onBlur:_,onMouseDown:v,tabIndex:0,"data-focus-styles-enabled":!0},o.default.createElement(s.default,{className:h("chevron")}),o.default.createElement("span",null,"CSS"),o.default.createElement(u.default,{className:h("chevron")})),o.default.createElement("button",{type:"button",className:h("code-toggle","item",{"is-selected":x}),onClick:w,onKeyDown:function(e){return j(e,w)},onBlur:_,onMouseDown:v,tabIndex:0,"data-focus-styles-enabled":!0},o.default.createElement(s.default,{className:h("chevron")}),o.default.createElement("span",null,"Code"),o.default.createElement(u.default,{className:h("chevron")}))):null,o.default.createElement("div",null,T&&o.default.createElement("div",{className:h("css")},a),x&&o.default.createElement("div",{className:h("code")},n))))};b.propTypes=x,b.defaultProps={isExpanded:!1};var g=b;t.Z=g},71165:function(e,t,n){var a=n(64836);t.Z=void 0;var r=a(n(67294)),l=a(n(37497)),o=a(n(45397)),m=function(){return r.default.createElement(l.default,{theme:{name:"test-theme",className:"test-theme"}},r.default.createElement(o.default,null))};t.Z=m},45397:function(e,t,n){var a=n(64836);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a(n(67294)),l=a(n(47166)),o=a(n(50026)),m=a(n(52780)),d=l.default.bind(m.default),c=function(){var e=r.default.useContext(o.default);return r.default.createElement("div",{className:d("themed",e.className)},r.default.createElement("h1",null,"Theme Name: ".concat(e.name)),r.default.createElement("div",{className:d("themed-block")}))};t.default=c},29812:function(e,t,n){n.r(t),n.d(t,{default:function(){return v}});n(67294);var a=n(81254),r=n(31459),l=n(78530),o=["components"];function m(){return m=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},m.apply(this,arguments)}function d(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c={},s="wrapper";function u(e){var t=e.components,n=d(e,o);return(0,a.mdx)(s,m({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.mdx)(l.ZP,{mdxType:"PropsTable"},(0,a.mdx)(l.X2,{key:"ROW1",mdxType:"Row"},(0,a.mdx)(l.O,{mdxType:"PropNameCell"},"children"),(0,a.mdx)(l.Di,{mdxType:"TypeCell"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"element\n"))),(0,a.mdx)(l.dS,{isRequired:!0,mdxType:"RequiredCell"}),(0,a.mdx)(l.mW,{mdxType:"DefaultValueCell"},(0,a.mdx)("p",null,"none")),(0,a.mdx)(l.Ex,{mdxType:"DescriptionCell"},(0,a.mdx)("p",null,"The components to be rendered within the context of the ThemeContextProvider. Components rendered here are able to interact with ThemeContextProvider through the ThemeContext."))),(0,a.mdx)(l.X2,{key:"ROW2",mdxType:"Row"},(0,a.mdx)(l.O,{mdxType:"PropNameCell"},"theme"),(0,a.mdx)(l.Di,{mdxType:"TypeCell"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"shape: {\n  name: {\n    type: 'string',\n  },\n  className: {\n    type: 'string',\n  },\n},\n"))),(0,a.mdx)(l.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,a.mdx)(l.mW,{mdxType:"DefaultValueCell"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"{}\n"))),(0,a.mdx)(l.Ex,{mdxType:"DescriptionCell"},(0,a.mdx)("p",null,"An object containing the name and className of the selected theme.")))))}u.isMDXComponent=!0;var i=n(48632),p=["components"];function f(){return f=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},f.apply(this,arguments)}function h(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var x={},_="wrapper";function v(e){var t=e.components,n=h(e,p);return(0,a.mdx)(_,f({},x,n,{components:t,mdxType:"MDXLayout"}),(0,a.mdx)(r.C,{mdxType:"Badge"}),(0,a.mdx)("h1",{id:"terra-theme-context"},"Terra Theme Context"),(0,a.mdx)("p",null,"A provider component for the terra theme context. This component is not intended for use outside of terra-application."),(0,a.mdx)("h2",{id:"how-does-this-relate-to-terra-theme-provider"},"How does this relate to terra-theme-provider"),(0,a.mdx)("p",null,"terra-theme-provider and terra-context/ThemeContextProvider work in concert to provide all aspects of terra themeing."),(0,a.mdx)("p",null,"The terra-theme-provider component is responsible for applying the theme class to the document element on the page. This will allow any non locally scoped theme classes to be applied throughout the application."),(0,a.mdx)("p",null,"This component sets the provided theme in react context so that react components can apply locally scoped theme classes to apply the theme variables directly."),(0,a.mdx)("p",null,"These components should be given the same theme name and will be orchestrated by terra-application."),(0,a.mdx)("h2",{id:"getting-started"},"Getting Started"),(0,a.mdx)("ul",null,(0,a.mdx)("li",{parentName:"ul"},"Install with ",(0,a.mdx)("a",{parentName:"li",href:"https://www.npmjs.com/"},"npmjs"),":",(0,a.mdx)("ul",{parentName:"li"},(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("inlineCode",{parentName:"li"},"npm install terra-theme-context"))))),(0,a.mdx)("h2",{id:"usage"},"Usage"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-jsx"},"import ThemeContextProvider from 'terra-theme-context/lib/ThemeContextProvider';\n")),(0,a.mdx)("h2",{id:"examples"},"Examples"),(0,a.mdx)(i.Z,{mdxType:"ThemeContextProviderExample"}),(0,a.mdx)("h2",{id:"props-table"},"Props Table"),(0,a.mdx)(u,{mdxType:"PropsTable"}))}v.isMDXComponent=!0},48632:function(e,t,n){n.d(t,{Z:function(){return p}});var a=n(67294),r=n(71165),l=n(81254),o=["components"];function m(){return m=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},m.apply(this,arguments)}function d(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c={},s="wrapper";function u(e){var t=e.components,n=d(e,o);return(0,l.mdx)(s,m({},c,n,{components:t,mdxType:"MDXLayout"}),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport ThemeContextProvider from 'terra-theme-context/lib/ThemeContextProvider';\n\nimport ThemedComponent from './ThemedComponent';\n\nconst ThemeContextProviderExample = () => (\n  <ThemeContextProvider theme={{ name: 'test-theme', className: 'test-theme' }}>\n    <ThemedComponent />\n  </ThemeContextProvider>\n);\n\nexport default ThemeContextProviderExample;\n\n")))}u.isMDXComponent=!0;var i=n(49271),p=function(e){var t=e.title,n=e.description,l=e.isExpanded;return a.createElement(i.Z,{title:t||"Theme Context Provider Example",description:n,example:a.createElement(r.Z,null),exampleSrc:a.createElement(u,null),isExpanded:l})}},31459:function(e,t,n){n.d(t,{C:function(){return l}});var a=n(67294),r=n(22863),l=function(e){var t=e.url;return a.createElement(r.Z,{src:"https://github.com/cerner/terra-framework/tree/main/packages/terra-theme-context",name:"terra-theme-context",version:"1.8.0",url:t})}},17422:function(e,t,n){n.r(t),t.default={badge:"Badges-module__badge___vex-+","badge-container":"Badges-module__badge-container___B13Mv","badge-name":"Badges-module__badge-name___jkN0m","badge-version":"Badges-module__badge-version___agZ+P"}},53560:function(e,t,n){n.r(t),t.default={"orion-fusion-theme":"ExampleTemplate-module__orion-fusion-theme___GzA23",template:"ExampleTemplate-module__template___a4uPk",header:"ExampleTemplate-module__header___iFXV3",content:"ExampleTemplate-module__content___48m4Q",description:"ExampleTemplate-module__description___NwBJo",footer:"ExampleTemplate-module__footer___GpSoG","button-container":"ExampleTemplate-module__button-container___rAD11",css:"ExampleTemplate-module__css___+jtk1",code:"ExampleTemplate-module__code___7rC6C","css-toggle":"ExampleTemplate-module__css-toggle___chHK7","code-toggle":"ExampleTemplate-module__code-toggle___TGlE-","is-selected":"ExampleTemplate-module__is-selected___0BYwS",item:"ExampleTemplate-module__item___8FTQq",chevron:"ExampleTemplate-module__chevron___VbY7N",title:"ExampleTemplate-module__title___r+nbJ","dynamic-content":"ExampleTemplate-module__dynamic-content___k+1H7"}},52780:function(e,t,n){n.r(t),t.default={"orion-fusion-theme":"ThemedComponent-module__orion-fusion-theme___2uD2h","test-theme":"ThemedComponent-module__test-theme___4eG98",themed:"ThemedComponent-module__themed___7DVOV","themed-block":"ThemedComponent-module__themed-block___tJk6B"}},33864:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=l(n(67294)),r=l(n(99139));function l(e){return e&&e.__esModule?e:{default:e}}function o(){return o=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},o.apply(this,arguments)}var m=function(e){var t=o({},e);return a.default.createElement(r.default,t,a.default.createElement("path",{d:"M10.3 24L33.8 0l3.9 3.8L18 24l19.7 20.2-3.9 3.8z"}))};m.displayName="IconChevronLeft",m.defaultProps={className:"",viewBox:"0 0 48 48",xmlns:"http://www.w3.org/2000/svg","data-name":"Layer 1",isBidi:!0};var d=m;t.default=d}}]);