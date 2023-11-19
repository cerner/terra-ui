"use strict";(self.webpackChunkterra_ui=self.webpackChunkterra_ui||[]).push([[4074],{40996:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=c(n(67294)),r=c(n(45697)),l=c(n(47166)),o=c(n(50026)),i=c(n(66983)),u=["children"];function c(e){return e&&e.__esModule?e:{default:e}}function d(){return d=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},d.apply(this,arguments)}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var m=l.default.bind(i.default),p=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","true")},f=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","false")},_={children:r.default.string},h=function(e){var t=e.children,n=s(e,u),r=a.default.useContext(o.default),i=(0,l.default)(m(["button",r.className]),n.className);return a.default.createElement("button",d({},n,{type:"button",className:i,onBlur:p,onMouseDown:f,"data-focus-styles-enabled":!0}),t)};h.propTypes=_;t.default=h},59278:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=u(n(67294)),r=u(n(45697)),l=u(n(47166)),o=u(n(50026)),i=u(n(30866));function u(e){return e&&e.__esModule?e:{default:e}}var c=l.default.bind(i.default),d={ariaLevel:r.default.oneOf(["2","3","4","5","6"]),children:r.default.node,variant:r.default.oneOf(["ux-recommendation","caution","deprecation","maintenance","important","not-supported"])},s=function(e){var t=e.ariaLevel,n=e.variant,r=e.children,l=a.default.useContext(o.default);return a.default.createElement("div",{className:c("notice",n,l.className)},a.default.createElement("div",{className:c("accessory"),"aria-hidden":"true",focusable:"false"}),a.default.createElement("div",{role:"heading",className:c("title"),"aria-level":t},a.default.createElement("span",null,function(e){return"ux-recommendation"===e?"UX Recommendation":"caution"===e?"Caution":"deprecation"===e?"Deprecation Notice":"maintenance"===e?"In Maintenance":"important"===e?"Important":"not-supported"===e?"Hazards for Incorrect Usage":"error"}(n))),a.default.createElement("div",{className:c("children")},function(e){return"not-supported"===e?a.default.createElement(a.default.Fragment,null,a.default.createElement("p",{className:c("paragraph")},"This component was designed and tested according to the documented implementation."),a.default.createElement("p",{className:c("paragraph")},"Using the component incorrectly:",a.default.createElement("ul",{className:c("list")},a.default.createElement("li",null,"will likely result in improper composition and create accessibility issues"),a.default.createElement("li",null,"may cause erratic or broken behaviors and styles"),a.default.createElement("li",null,a.default.createElement("strong",null,"will not be supported "),"or enhanced to allow for incorrect use")))):null}(n),a.default.Children.map(r,(function(e){return"string"==typeof e?a.default.createElement("p",null,e):e}))))};s.propTypes=d,s.defaultProps={ariaLevel:"2",variant:"important"};t.default=s},47306:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=d(n(67294)),r=d(n(45697)),l=d(n(94184)),o=d(n(47166)),i=d(n(50026)),u=d(n(42620)),c=["title"];function d(e){return e&&e.__esModule?e:{default:e}}function s(){return s=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},s.apply(this,arguments)}function m(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=o.default.bind(u.default),f={title:r.default.string},_=function(e){var t=e.title,n=m(e,c),r=a.default.useContext(i.default),o=(0,l.default)(p(["placeholder",r.className]),n.className),u=p(["inner"]);return a.default.createElement("div",s({},n,{className:o}),a.default.createElement("div",{className:u},a.default.createElement("p",{className:p("title")},t)))};_.propTypes=f,_.defaultProps={title:""};t.default=_},34261:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"Button",{enumerable:!0,get:function(){return l.default}}),Object.defineProperty(t,"Notice",{enumerable:!0,get:function(){return a.default}}),Object.defineProperty(t,"Placeholder",{enumerable:!0,get:function(){return r.default}});var a=o(n(59278)),r=o(n(47306)),l=o(n(40996));function o(e){return e&&e.__esModule?e:{default:e}}},4074:function(e,t,n){n.r(t),n.d(t,{default:function(){return d}});n(67294);var a=n(81254),r=n(34261),l=["components"];function o(){return o=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},o.apply(this,arguments)}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u={},c="wrapper";function d(e){var t=e.components,n=i(e,l);return(0,a.mdx)(c,o({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.mdx)("h1",{id:"polyfills"},"Polyfills"),(0,a.mdx)("p",null,"The ",(0,a.mdx)("a",{parentName:"p",href:"/terra-ui/application/terra-application/application"},"terra-application")," package requires polyfills to function in some of its supported browsers. We recommend using the ",(0,a.mdx)("a",{parentName:"p",href:"https://www.npmjs.com/package/@cerner/terra-polyfill"},"terra-polyfill")," package to ensure the minimum requirements are met for a project."),(0,a.mdx)("h2",{id:"usage"},"Usage"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-jsx"},"import '@cerner/terra-polyfill';\n")),(0,a.mdx)(r.Notice,{variant:"caution",ariaLevel:"3",mdxType:"Notice"},"The polyfill should be imported only once for an application. Duplication may lead to increased bundle sizes and decreased performance of an application."),(0,a.mdx)(r.Notice,{ariaLevel:"3",mdxType:"Notice"},"The polyfill should be imported as early as possible in an application's lifecycle to ensure that the polyfilled features are available when they are needed."),(0,a.mdx)("h2",{id:"included-polyfills"},"Included Polyfills"),(0,a.mdx)("ul",null,(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("a",{parentName:"li",href:"https://github.com/zloirock/core-js"},(0,a.mdx)("inlineCode",{parentName:"a"},"core-js"))," - Includes polyfills for ECMAScript up to 2021: promises, symbols, collections, iterators, typed arrays, many other features",(0,a.mdx)("ul",{parentName:"li"},(0,a.mdx)("li",{parentName:"ul"},"Only stable features are included by default. Any ES features under proposal will require additional polyfills if they are used."))),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("a",{parentName:"li",href:"https://www.npmjs.com/package/regenerator-runtime"},(0,a.mdx)("inlineCode",{parentName:"a"},"regenerator-runtime"))," - Standalone runtime for Regenerator-compiled generator and async functions"),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("a",{parentName:"li",href:"https://www.npmjs.com/package/whatwg-fetch"},"'whatwg-fetch'")," - A window.fetch polyfill"),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("a",{parentName:"li",href:"https://www.npmjs.com/package/abortcontroller-polyfill"},"'abortcontroller-polyfill'")," - An AbortController polyfill"),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("a",{parentName:"li",href:"https://www.npmjs.com/package/mutationobserver-shim/v/0.3.3"},"'mutationobserver-shim'")," - A polyfill for the MutationObserver API"),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("a",{parentName:"li",href:"https://www.npmjs.com/package/wicg-inert"},"HTMLElement.inert")),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/API/Node/contains"},"Node.contains")),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/API/Element/matches"},"Element.matches")),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl"},"Intl"))),(0,a.mdx)("h3",{id:"filtering-core-js-with-babel"},"Filtering ",(0,a.mdx)("inlineCode",{parentName:"h3"},"core-js")," with Babel"),(0,a.mdx)("p",null,"The set of polyfills included by core-js an be customized by modifying the ",(0,a.mdx)("inlineCode",{parentName:"p"},"@babel/preset-env")," configuration. See ",(0,a.mdx)("a",{parentName:"p",href:"https://github.com/zloirock/core-js#babelpreset-env"},"core-js documentation")," for more details."),(0,a.mdx)("p",null,"For example:"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-diff"},"module.exports = (api) => {\n  api.cache(false);\n  api.assertVersion('^7.4.4');\n\n  return {\n    presets: [\n-     '@babel/preset-env',\n+     ['@babel/preset-env', { useBuiltIns: 'entry', corejs: { version: 3.14 } }], // version should match core-js dependency version\n      '@babel/preset-react',\n    ],\n  };\n};\n")))}d.isMDXComponent=!0},66983:function(e,t,n){n.r(t),t.default={"clinical-lowlight-theme":"Button-module__clinical-lowlight-theme___TyZWB","orion-fusion-theme":"Button-module__orion-fusion-theme___q-FcQ",button:"Button-module__button___QuCn2","is-active":"Button-module__is-active___Z8AuK"}},30866:function(e,t,n){n.r(t),t.default={"clinical-lowlight-theme":"Notice-module__clinical-lowlight-theme___aa5xV","orion-fusion-theme":"Notice-module__orion-fusion-theme___QAE-T",notice:"Notice-module__notice___GWkPA",children:"Notice-module__children___lDYsm",accessory:"Notice-module__accessory___wkLOG",title:"Notice-module__title___6H5tc","ux-recommendation":"Notice-module__ux-recommendation___N8BuK",caution:"Notice-module__caution___hPrVl",deprecation:"Notice-module__deprecation___g1drA",maintenance:"Notice-module__maintenance___kWLIZ",important:"Notice-module__important___p5DiF","not-supported":"Notice-module__not-supported___34bHd",paragraph:"Notice-module__paragraph___5h-w1",list:"Notice-module__list___M2Kxj"}},42620:function(e,t,n){n.r(t),t.default={"clinical-lowlight-theme":"Placeholder-module__clinical-lowlight-theme___Obm9K","orion-fusion-theme":"Placeholder-module__orion-fusion-theme___svHY+",placeholder:"Placeholder-module__placeholder___ZZDXd",inner:"Placeholder-module__inner___fJq9o",title:"Placeholder-module__title___teBSo"}}}]);