"use strict";(self.webpackChunkterra_ui=self.webpackChunkterra_ui||[]).push([[41641],{40996:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=c(n(67294)),r=c(n(45697)),o=c(n(19845)),l=c(n(50026)),i=c(n(66983)),u=["children"];function c(e){return e&&e.__esModule?e:{default:e}}function d(){return d=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},d.apply(this,arguments)}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var f=o.default.bind(i.default),m=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","true")},p=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","false")},h={children:r.default.string},_=function(e){var t=e.children,n=s(e,u),r=a.default.useContext(l.default),i=(0,o.default)(f(["button",r.className]),n.className);return a.default.createElement("button",d({},n,{type:"button",className:i,onBlur:m,onMouseDown:p,"data-focus-styles-enabled":!0}),t)};_.propTypes=h;t.default=_},59278:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=u(n(67294)),r=u(n(45697)),o=u(n(19845)),l=u(n(50026)),i=u(n(30866));function u(e){return e&&e.__esModule?e:{default:e}}var c=o.default.bind(i.default),d={ariaLevel:r.default.oneOf(["2","3","4","5","6"]),children:r.default.node,variant:r.default.oneOf(["ux-recommendation","caution","deprecation","maintenance","important","not-supported"])},s=function(e){var t=e.ariaLevel,n=e.variant,r=e.children,o=a.default.useContext(l.default);return a.default.createElement("div",{className:c("notice",n,o.className)},a.default.createElement("div",{className:c("accessory"),"aria-hidden":"true",focusable:"false"}),a.default.createElement("div",{role:"heading",className:c("title"),"aria-level":t},a.default.createElement("span",null,function(e){return"ux-recommendation"===e?"UX Recommendation":"caution"===e?"Caution":"deprecation"===e?"Deprecation Notice":"maintenance"===e?"In Maintenance":"important"===e?"Important":"not-supported"===e?"Hazards for Incorrect Usage":"error"}(n))),a.default.createElement("div",{className:c("children")},function(e){return"not-supported"===e?a.default.createElement(a.default.Fragment,null,a.default.createElement("p",{className:c("paragraph")},"This component was designed and tested according to the documented implementation."),a.default.createElement("p",{className:c("paragraph")},"Using the component incorrectly:",a.default.createElement("ul",{className:c("list")},a.default.createElement("li",null,"will likely result in improper composition and create accessibility issues"),a.default.createElement("li",null,"may cause erratic or broken behaviors and styles"),a.default.createElement("li",null,a.default.createElement("strong",null,"will not be supported "),"or enhanced to allow for incorrect use")))):null}(n),a.default.Children.map(r,(function(e){return"string"==typeof e?a.default.createElement("p",null,e):e}))))};s.propTypes=d,s.defaultProps={ariaLevel:"2",variant:"important"};t.default=s},47306:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=d(n(67294)),r=d(n(45697)),o=d(n(93967)),l=d(n(19845)),i=d(n(50026)),u=d(n(42620)),c=["title"];function d(e){return e&&e.__esModule?e:{default:e}}function s(){return s=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},s.apply(this,arguments)}function f(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var m=l.default.bind(u.default),p={title:r.default.string},h=function(e){var t=e.title,n=f(e,c),r=a.default.useContext(i.default),l=(0,o.default)(m(["placeholder",r.className]),n.className),u=m(["inner"]);return a.default.createElement("div",s({},n,{className:l}),a.default.createElement("div",{className:u},a.default.createElement("p",{className:m("title")},t)))};h.propTypes=p,h.defaultProps={title:""};t.default=h},34261:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"Button",{enumerable:!0,get:function(){return o.default}}),Object.defineProperty(t,"Notice",{enumerable:!0,get:function(){return a.default}}),Object.defineProperty(t,"Placeholder",{enumerable:!0,get:function(){return r.default}});var a=l(n(59278)),r=l(n(47306)),o=l(n(40996));function l(e){return e&&e.__esModule?e:{default:e}}},41641:function(e,t,n){n.r(t),n.d(t,{default:function(){return d}});n(67294);var a=n(81254),r=n(34261),o=["components"];function l(){return l=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},l.apply(this,arguments)}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u={},c="wrapper";function d(e){var t=e.components,n=i(e,o);return(0,a.mdx)(c,l({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.mdx)("h1",{id:"faq"},"FAQ"),(0,a.mdx)("h2",{id:"my-components-are-visible-in-the-raw-test-route-but-cut-off-when-displayed-in-the-dev-site-frame"},"My components are visible in the raw test route but cut off when displayed in the dev site frame"),(0,a.mdx)("p",null,"When components are displayed in the raw route there is an unbroken chain of height 100%s set on the components such that test components with 100% height will fill the available area. With pages, for aesthetic reasons we do not provide a 100% height on all wrapping components. To ensure components display correctly in both raw routes and pages either use block layout or define a fixed hight above any components expecting 100% height."),(0,a.mdx)("h2",{id:"i-get-the-webpack-error-invalid-configuration-object-webpack-has-been-initialised-using-a-configuration-object-that-does-not-match-the-api-schema"},"I get the webpack error: Invalid configuration object. Webpack has been initialised using a configuration object that does not match the API schema."),(0,a.mdx)("p",null,"You can get this error when using webpack 4. Part of the TerraDevSite webpack plugin we inject an entry to build the site. Webpack requires an entry to function but when the check is performed changed between webpack 4 and 5. In webpack 4 an entry is checked prior to running the plugin where as in webpack 5 the check is performed after."),(0,a.mdx)("p",null,"To solve this issue you have two options. Upgrade to webpack 5 or add a dummy entrypoint that TerraDevSite will remove before bundling. Upgrading to webpack 5 is recommended."),(0,a.mdx)(r.Notice,{variant:"important",ariaLevel:"3",mdxType:"Notice"},(0,a.mdx)("p",null,"If you chose to add the dummy entry point it will have to resolve to a real file. It doesn't matter what file since TerraDevSite will remove it, but webpack 4 does check that the entrypoint file is real.")),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-js"},"  entry: {\n    terraDevSiteDummy: './dummy.js',\n  },\n")))}d.isMDXComponent=!0},66983:function(e,t,n){n.r(t),t.default={"clinical-lowlight-theme":"Button-module__clinical-lowlight-theme___TyZWB","orion-fusion-theme":"Button-module__orion-fusion-theme___q-FcQ",button:"Button-module__button___QuCn2","is-active":"Button-module__is-active___Z8AuK"}},30866:function(e,t,n){n.r(t),t.default={"clinical-lowlight-theme":"Notice-module__clinical-lowlight-theme___aa5xV","orion-fusion-theme":"Notice-module__orion-fusion-theme___QAE-T",notice:"Notice-module__notice___GWkPA",children:"Notice-module__children___lDYsm",accessory:"Notice-module__accessory___wkLOG",title:"Notice-module__title___6H5tc","ux-recommendation":"Notice-module__ux-recommendation___N8BuK",caution:"Notice-module__caution___hPrVl",deprecation:"Notice-module__deprecation___g1drA",maintenance:"Notice-module__maintenance___kWLIZ",important:"Notice-module__important___p5DiF","not-supported":"Notice-module__not-supported___34bHd",paragraph:"Notice-module__paragraph___5h-w1",list:"Notice-module__list___M2Kxj"}},42620:function(e,t,n){n.r(t),t.default={"clinical-lowlight-theme":"Placeholder-module__clinical-lowlight-theme___Obm9K","orion-fusion-theme":"Placeholder-module__orion-fusion-theme___svHY+",placeholder:"Placeholder-module__placeholder___ZZDXd",inner:"Placeholder-module__inner___fJq9o",title:"Placeholder-module__title___teBSo"}}}]);