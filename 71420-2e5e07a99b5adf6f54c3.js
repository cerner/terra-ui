"use strict";(self.webpackChunkterra_ui=self.webpackChunkterra_ui||[]).push([[71420,45627,37344,33667,96890,14041,27444,85565,3353,80858,17657,5161,19260,45865,85355,33315,3193,4845,20444,26806,46647,85161,38681,15318,40411,18101,38443,78996,39915,33442],{60197:function(e,t,a){t.Z=void 0;var n,l=(n=a(67294))&&n.__esModule?n:{default:n};t.Z=function(){return l.default.createElement("div",null,l.default.createElement("h1",null,"Global BaseStyles example"),l.default.createElement("p",null,"Sample paragraph. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliquant."),l.default.createElement("p",null,"Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."),l.default.createElement("dl",null,l.default.createElement("dt",null,"Description name"),l.default.createElement("dd",null,"Description value"),l.default.createElement("dt",null,"Description name"),l.default.createElement("dd",null,"Description value")),l.default.createElement("ol",null,l.default.createElement("li",null,"Ordered list item"),l.default.createElement("li",null,"Ordered list item",l.default.createElement("ol",null,l.default.createElement("li",null,"Nested ordered list item"))),l.default.createElement("li",null,"Ordered list item")),l.default.createElement("ul",null,l.default.createElement("li",null,"Unordered list item"),l.default.createElement("li",null,"Unordered list item",l.default.createElement("ol",null,l.default.createElement("li",null,"Nested unordered list item"))),l.default.createElement("li",null,"Unordered list item")))}},22863:function(e,t,a){var n=a(64836);t.Z=void 0;var l=n(a(67294)),r=n(a(45697)),o=n(a(47166)),d=n(a(17422)),i=o.default.bind(d.default),m={name:r.default.string.isRequired,src:r.default.string,url:r.default.string,version:r.default.string.isRequired},s=function(e){var t=e.src,a=e.name,n=e.url,r=e.version,o=l.default.createElement("a",{className:i("badge"),href:n||"https://www.npmjs.org/package/".concat(a,"/v/").concat(r)},l.default.createElement("span",{className:i("badge-name")},n?"package":"npm"),l.default.createElement("span",{className:i("badge-version")},"v".concat(r))),d=t?l.default.createElement("a",{className:i("badge"),href:t},l.default.createElement("span",{className:i("badge-name")},"github"),l.default.createElement("span",{className:i("badge-version")},"source")):void 0;return l.default.createElement("div",{className:i("badge-container")},o,d)};s.propTypes=m;var p=s;t.Z=p},49271:function(e,t,a){var n=a(64836),l=a(18698);t.Z=void 0;var r=n(a(27424)),o=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==l(e)&&"function"!=typeof e)return{default:e};var a=x(t);if(a&&a.has(e))return a.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var d=r?Object.getOwnPropertyDescriptor(e,o):null;d&&(d.get||d.set)?Object.defineProperty(n,o,d):n[o]=e[o]}n.default=e,a&&a.set(e,n);return n}(a(67294)),d=n(a(45697)),i=n(a(47166)),m=a(21538),s=n(a(33864)),p=n(a(23399)),u=a(51051),c=n(a(53560));function x(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,a=new WeakMap;return(x=function(e){return e?a:t})(e)}var f=i.default.bind(c.default),g={example:d.default.element,exampleSrc:d.default.element,exampleCssSrc:d.default.element,title:d.default.string,description:d.default.node,isExpanded:d.default.bool},b=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","true")},h=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","false")},y=function(e){var t=e.example,a=e.exampleSrc,n=e.exampleCssSrc,l=e.title,d=e.description,i=e.isExpanded,c=(0,o.useState)(i),x=(0,r.default)(c,2),g=x[0],y=x[1],v=(0,o.useState)(!1),_=(0,r.default)(v,2),N=_[0],E=_[1],T=o.default.useContext(m.ThemeContext),O=void 0!==n,w=function(){E(!N),g&&y(!g)},C=function(){y(!g),N&&E(!N)},j=function(e,t){e.nativeEvent.keyCode!==u.KEY_SPACE&&e.nativeEvent.keyCode!==u.KEY_RETURN||(e.preventDefault(),t())};return o.default.createElement("div",{className:f("template",T.className)},o.default.createElement("div",{className:f("header")},l&&o.default.createElement("h2",{className:f("title")},l)),o.default.createElement("div",{className:f("content")},d&&o.default.createElement("div",{className:f("description")},d),t),o.default.createElement("div",{className:f("footer")},a?o.default.createElement("div",{className:f("button-container")},O&&o.default.createElement("button",{type:"button",className:f("css-toggle","item",{"is-selected":N}),onClick:w,onKeyDown:function(e){return j(e,w)},onBlur:b,onMouseDown:h,tabIndex:0,"data-focus-styles-enabled":!0},o.default.createElement(s.default,{className:f("chevron")}),o.default.createElement("span",null,"CSS"),o.default.createElement(p.default,{className:f("chevron")})),o.default.createElement("button",{type:"button",className:f("code-toggle","item",{"is-selected":g}),onClick:C,onKeyDown:function(e){return j(e,C)},onBlur:b,onMouseDown:h,tabIndex:0,"data-focus-styles-enabled":!0},o.default.createElement(s.default,{className:f("chevron")}),o.default.createElement("span",null,"Code"),o.default.createElement(p.default,{className:f("chevron")}))):null,o.default.createElement("div",null,N&&o.default.createElement("div",{className:f("css")},n),g&&o.default.createElement("div",{className:f("code")},a))))};y.propTypes=g,y.defaultProps={isExpanded:!1};var v=y;t.Z=v},21897:function(e,t,a){a.r(t),a.d(t,{default:function(){return w}});var n=a(67294),l=a(81254),r=a(70761),o=a(60197),d=["components"];function i(){return i=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},i.apply(this,arguments)}function m(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var s={};function p(e){var t=e.components,a=m(e,d);return(0,l.mdx)("wrapper",i({},s,a,{components:t,mdxType:"MDXLayout"}),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\n\nconst BaseExample = () => (\n  <div>\n    <h1>Global BaseStyles example</h1>\n    <p>Sample paragraph. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliquant.</p>\n    <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>\n    <dl>\n      <dt>Description name</dt>\n      <dd>Description value</dd>\n      <dt>Description name</dt>\n      <dd>Description value</dd>\n    </dl>\n    <ol>\n      <li>Ordered list item</li>\n      <li>\n        Ordered list item\n        <ol>\n          <li>Nested ordered list item</li>\n        </ol>\n      </li>\n      <li>Ordered list item</li>\n    </ol>\n    <ul>\n      <li>Unordered list item</li>\n      <li>\n        Unordered list item\n        <ol>\n          <li>Nested unordered list item</li>\n        </ol>\n      </li>\n      <li>Unordered list item</li>\n    </ul>\n  </div>\n);\n\nexport default BaseExample;\n\n")))}p.isMDXComponent=!0;var u=a(49271),c=function(e){var t=e.title,a=e.description,l=e.isExpanded;return n.createElement(u.Z,{title:t||"Global Base Styles Example",description:a,example:n.createElement(o.Z,null),exampleSrc:n.createElement(p,null),isExpanded:l})},x=a(78530),f=["components"];function g(){return g=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},g.apply(this,arguments)}function b(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var h={},y="wrapper";function v(e){var t=e.components,a=b(e,f);return(0,l.mdx)(y,g({},h,a,{components:t,mdxType:"MDXLayout"}),(0,l.mdx)(x.ZP,{mdxType:"PropsTable"},(0,l.mdx)(x.X2,{key:"ROW1",mdxType:"Row"},(0,l.mdx)(x.O,{mdxType:"PropNameCell"},"children"),(0,l.mdx)(x.Di,{mdxType:"TypeCell"},(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-javascript"},"node\n"))),(0,l.mdx)(x.dS,{isRequired:!0,mdxType:"RequiredCell"}),(0,l.mdx)(x.mW,{mdxType:"DefaultValueCell"},(0,l.mdx)("p",null,"none")),(0,l.mdx)(x.Ex,{mdxType:"DescriptionCell"},(0,l.mdx)("p",null,"The component(s) that will be wrapped by ",(0,l.mdx)("inlineCode",{parentName:"p"},"<Base />"),"."))),(0,l.mdx)(x.X2,{key:"ROW2",mdxType:"Row"},(0,l.mdx)(x.O,{mdxType:"PropNameCell"},"locale"),(0,l.mdx)(x.Di,{mdxType:"TypeCell"},(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-javascript"},"string\n"))),(0,l.mdx)(x.dS,{isRequired:!0,mdxType:"RequiredCell"}),(0,l.mdx)(x.mW,{mdxType:"DefaultValueCell"},(0,l.mdx)("p",null,"none")),(0,l.mdx)(x.Ex,{mdxType:"DescriptionCell"},(0,l.mdx)("p",null,"The locale name."))),(0,l.mdx)(x.X2,{key:"ROW3",mdxType:"Row"},(0,l.mdx)(x.O,{mdxType:"PropNameCell"},"customMessages"),(0,l.mdx)(x.Di,{mdxType:"TypeCell"},(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-javascript"},"custom\n"))),(0,l.mdx)(x.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,l.mdx)(x.mW,{mdxType:"DefaultValueCell"},(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-javascript"},"{}\n"))),(0,l.mdx)(x.Ex,{mdxType:"DescriptionCell"},(0,l.mdx)("p",null,"Customized translations provided by consuming application only for current locale."))),(0,l.mdx)(x.X2,{key:"ROW4",mdxType:"Row"},(0,l.mdx)(x.O,{mdxType:"PropNameCell"},"strictMode"),(0,l.mdx)(x.Di,{mdxType:"TypeCell"},(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-javascript"},"bool\n"))),(0,l.mdx)(x.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,l.mdx)(x.mW,{mdxType:"DefaultValueCell"},(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-javascript"},"false\n"))),(0,l.mdx)(x.Ex,{mdxType:"DescriptionCell"},(0,l.mdx)("p",null,"Activates ",(0,l.mdx)("a",{parentName:"p",href:"https://reactjs.org/docs/strict-mode.html"},"React Strict Mode")," for descendants"))),(0,l.mdx)(x.X2,{key:"ROW5",mdxType:"Row"},(0,l.mdx)(x.O,{mdxType:"PropNameCell"},"throwOnI18nLoadError"),(0,l.mdx)(x.Di,{mdxType:"TypeCell"},(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-javascript"},"bool\n"))),(0,l.mdx)(x.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,l.mdx)(x.mW,{mdxType:"DefaultValueCell"},(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-javascript"},"false\n"))),(0,l.mdx)(x.Ex,{mdxType:"DescriptionCell"},(0,l.mdx)("p",null,"Whether or not the error should be logged and thrown if something goes wrong. When false, the error will only be logged to the\nconsole an error."))),(0,l.mdx)(x.X2,{key:"ROW6",mdxType:"Row"},(0,l.mdx)(x.O,{mdxType:"PropNameCell"},"translationsLoadingPlaceholder"),(0,l.mdx)(x.Di,{mdxType:"TypeCell"},(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-javascript"},"node\n"))),(0,l.mdx)(x.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,l.mdx)(x.mW,{mdxType:"DefaultValueCell"},(0,l.mdx)("p",null,"none")),(0,l.mdx)(x.Ex,{mdxType:"DescriptionCell"},(0,l.mdx)("p",null,"The component(s) that will be wrapped by ",(0,l.mdx)("inlineCode",{parentName:"p"},"<Base />")," ONLY in the event that translations have not been loaded yet.\nNOTE: Absolutely no locale-dependent logic should be utilized in this placeholder.")))))}v.isMDXComponent=!0;var _=["components"];function N(){return N=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},N.apply(this,arguments)}function E(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var T={},O="wrapper";function w(e){var t=e.components,a=E(e,_);return(0,l.mdx)(O,N({},T,a,{components:t,mdxType:"MDXLayout"}),(0,l.mdx)(r.C,{mdxType:"Badge"}),(0,l.mdx)("h1",{id:"terra-base"},"Terra Base"),(0,l.mdx)("p",null,"The ",(0,l.mdx)("inlineCode",{parentName:"p"},"terra-base")," component handles two main concerns, ",(0,l.mdx)("a",{parentName:"p",href:"https://engineering.cerner.com/terra-ui/#/getting-started/terra-ui/internationalization/internationalization-intro"},"application internationalization")," and global base styles."),(0,l.mdx)("p",null,"This component is designed to manage loading locale information such as translations and locale data, handling locale switching and loading state, and combining customized translation messages from an application with Terra UI component translations."),(0,l.mdx)("p",null,(0,l.mdx)("strong",{parentName:"p"},"Note:")," ",(0,l.mdx)("em",{parentName:"p"},"This component should be your root component and wrap all components in your app. This is to help ensure that the entire application is within the same configured i18n context provided by ",(0,l.mdx)("a",{parentName:"em",href:"https://github.com/formatjs/react-intl/blob/master/docs/Components.md"},"react-intl's ",(0,l.mdx)("inlineCode",{parentName:"a"},"<IntlProvider />")),".")),(0,l.mdx)("p",null,"The ",(0,l.mdx)("inlineCode",{parentName:"p"},"terra-base")," component requires the use of our ",(0,l.mdx)("a",{parentName:"p",href:"https://github.com/cerner/terra-aggregate-translations"},"aggregate-translations pre-build tool")," to ensure translations and locale data files are generated accordingly for the app."),(0,l.mdx)("p",null,"You can read more about ",(0,l.mdx)("a",{parentName:"p",href:"https://engineering.cerner.com/terra-ui/guides/terra-ui/internationalization/internationalization-intro"},"setting up Internationalization in your Terra UI app here"),"."),(0,l.mdx)("p",null,"The terra-base component also sets minimal global base styles for the application. Styles include CSS to help normalize box-sizing, global font styles, and HTML background styles."),(0,l.mdx)("h2",{id:"getting-started"},"Getting Started"),(0,l.mdx)("ul",null,(0,l.mdx)("li",{parentName:"ul"},"Install with ",(0,l.mdx)("a",{parentName:"li",href:"https://www.npmjs.com/"},"npmjs"),":",(0,l.mdx)("ul",{parentName:"li"},(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("inlineCode",{parentName:"li"},"npm install terra-base"))))),(0,l.mdx)("h2",{id:"peer-dependencies"},"Peer Dependencies"),(0,l.mdx)("p",null,"This component requires the following peer dependencies be installed in your app for the component to properly function."),(0,l.mdx)("table",null,(0,l.mdx)("thead",{parentName:"table"},(0,l.mdx)("tr",{parentName:"thead"},(0,l.mdx)("th",{parentName:"tr",align:null},"Peer Dependency"),(0,l.mdx)("th",{parentName:"tr",align:null},"Version"))),(0,l.mdx)("tbody",{parentName:"table"},(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"react"),(0,l.mdx)("td",{parentName:"tr",align:null},"^16.8.5")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"react-dom"),(0,l.mdx)("td",{parentName:"tr",align:null},"^16.8.5")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"react-intl"),(0,l.mdx)("td",{parentName:"tr",align:null},"^2.8.0")))),(0,l.mdx)("h2",{id:"usage"},"Usage"),(0,l.mdx)("p",null,"With custom app translations."),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-jsx"},"import Base from 'terra-base';\nimport App from './App'; // Your custom app component\nimport appTranslations from './aggregated-translations/en.js'; // Your aggregated app translations\n\n// This value could be sent from the server as well\nconst locale = (navigator.languages && navigator.languages[0])\n               || navigator.language\n               || navigator.userLanguage\n               || 'en';\n\n<Base locale={locale} customMessages={appTranslations}>\n  <App />\n</Base>\n")),(0,l.mdx)("p",null,"Without custom app translations."),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-jsx"},"import Base from 'terra-base';\nimport App from './App'; // Your custom app component\n\n// This value could be sent from the server as well\nconst locale = (navigator.languages && navigator.languages[0])\n               || navigator.language\n               || navigator.userLanguage\n               || 'en';\n\n<Base locale={locale}>\n  <App />\n</Base>\n")),(0,l.mdx)("h2",{id:"component-features"},"Component Features"),(0,l.mdx)("ul",null,(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("a",{parentName:"li",href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#cross-browser-support"},"Cross-Browser Support")),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("a",{parentName:"li",href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#responsive-support"},"Responsive Support")),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("a",{parentName:"li",href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#mobile-support"},"Mobile Support")),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("a",{parentName:"li",href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#internationalization-i18n"},"Internationalization Support")),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("a",{parentName:"li",href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#internationalization-i18n"},"Localization Support")),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("a",{parentName:"li",href:"https://github.com/shakacode/react_on_rails/blob/8cb06ed35cb5c2c453bcc193282b4c091574c1b7/docs/basics/i18n.md#how-to-add-i18n"},"react_on_rails Compatible")),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("a",{parentName:"li",href:"https://github.com/webpack/docs/wiki/configuration#outputpublicpath"},"CND Compatible"))),(0,l.mdx)("h2",{id:"example"},"Example"),(0,l.mdx)(c,{mdxType:"GlobalBaseStylesExample"}),(0,l.mdx)("h2",{id:"base-props"},"Base Props"),(0,l.mdx)(v,{mdxType:"BasePropsTable"}))}w.isMDXComponent=!0},70761:function(e,t,a){a.d(t,{C:function(){return r}});var n=a(67294),l=a(22863),r=function(e){var t=e.url;return n.createElement(l.Z,{src:"https://github.com/cerner/terra-core/tree/main/packages/terra-base",name:"terra-base",version:"5.50.0",url:t})}},17422:function(e,t,a){a.r(t),t.default={badge:"Badges-module__badge___vex-+","badge-container":"Badges-module__badge-container___B13Mv","badge-name":"Badges-module__badge-name___jkN0m","badge-version":"Badges-module__badge-version___agZ+P"}},53560:function(e,t,a){a.r(t),t.default={"clinical-lowlight-theme":"ExampleTemplate-module__clinical-lowlight-theme___rBbtD","orion-fusion-theme":"ExampleTemplate-module__orion-fusion-theme___GzA23",template:"ExampleTemplate-module__template___a4uPk",header:"ExampleTemplate-module__header___iFXV3",content:"ExampleTemplate-module__content___48m4Q",description:"ExampleTemplate-module__description___NwBJo",footer:"ExampleTemplate-module__footer___GpSoG","button-container":"ExampleTemplate-module__button-container___rAD11",css:"ExampleTemplate-module__css___+jtk1",code:"ExampleTemplate-module__code___7rC6C","css-toggle":"ExampleTemplate-module__css-toggle___chHK7","code-toggle":"ExampleTemplate-module__code-toggle___TGlE-","is-selected":"ExampleTemplate-module__is-selected___0BYwS",item:"ExampleTemplate-module__item___8FTQq",chevron:"ExampleTemplate-module__chevron___VbY7N",title:"ExampleTemplate-module__title___r+nbJ","dynamic-content":"ExampleTemplate-module__dynamic-content___k+1H7"}},33864:function(e,t,a){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(a(67294)),l=r(a(99139));function r(e){return e&&e.__esModule?e:{default:e}}function o(){return o=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},o.apply(this,arguments)}var d=function(e){var t=o({},e);return n.default.createElement(l.default,t,n.default.createElement("path",{d:"M10.3 24 33.8 0l3.9 3.8L18 24l19.7 20.2-3.9 3.8z"}))};d.displayName="IconChevronLeft",d.defaultProps={viewBox:"0 0 48 48","data-name":"Layer 1",xmlns:"http://www.w3.org/2000/svg"};var i=d;t.default=i}}]);