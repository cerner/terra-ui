"use strict";(self.webpackChunkterra_ui=self.webpackChunkterra_ui||[]).push([[16404,45627,85565,3353,5161,45865,85355,3193,4845,46647,85161,38681,15318,40411,18101,38443,11264,34319],{22863:function(e,a,n){var l=n(64836);a.Z=void 0;var r=l(n(67294)),t=l(n(45697)),d=l(n(47166)),m=l(n(17422)),i=d.default.bind(m.default),u={name:t.default.string.isRequired,src:t.default.string,url:t.default.string,version:t.default.string.isRequired},o=function(e){var a=e.src,n=e.name,l=e.url,t=e.version,d=r.default.createElement("a",{className:i("badge"),href:l||"https://www.npmjs.org/package/".concat(n,"/v/").concat(t)},r.default.createElement("span",{className:i("badge-name")},l?"package":"npm"),r.default.createElement("span",{className:i("badge-version")},"v".concat(t))),m=a?r.default.createElement("a",{className:i("badge"),href:a},r.default.createElement("span",{className:i("badge-name")},"github"),r.default.createElement("span",{className:i("badge-version")},"source")):void 0;return r.default.createElement("div",{className:i("badge-container")},d,m)};o.propTypes=u;var p=o;a.Z=p},16404:function(e,a,n){n.r(a),n.d(a,{default:function(){return g}});n(67294);var l=n(81254),r=n(97583),t=["components"];function d(){return d=Object.assign?Object.assign.bind():function(e){for(var a=1;a<arguments.length;a++){var n=arguments[a];for(var l in n)Object.prototype.hasOwnProperty.call(n,l)&&(e[l]=n[l])}return e},d.apply(this,arguments)}function m(e,a){if(null==e)return{};var n,l,r=function(e,a){if(null==e)return{};var n,l,r={},t=Object.keys(e);for(l=0;l<t.length;l++)n=t[l],a.indexOf(n)>=0||(r[n]=e[n]);return r}(e,a);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);for(l=0;l<t.length;l++)n=t[l],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i={},u="wrapper";function o(e){var a=e.components,n=m(e,t);return(0,l.mdx)(u,d({},i,n,{components:a,mdxType:"MDXLayout"}),(0,l.mdx)("h1",{id:"changelog"},"ChangeLog"),(0,l.mdx)("h2",{id:"unreleased"},"Unreleased"),(0,l.mdx)("h2",{id:"501---november-8-2023"},"5.0.1 - (November 8, 2023)"),(0,l.mdx)("ul",null,(0,l.mdx)("li",{parentName:"ul"},"Fixes",(0,l.mdx)("ul",{parentName:"li"},(0,l.mdx)("li",{parentName:"ul"},"Fixed unresolved peer dependency"),(0,l.mdx)("li",{parentName:"ul"},"Corrected version of ",(0,l.mdx)("inlineCode",{parentName:"li"},"browserslist-config-terra"),". It should now pull in v4.")))),(0,l.mdx)("h2",{id:"500---october-26-2023"},"5.0.0 - (October 26, 2023)"),(0,l.mdx)("ul",null,(0,l.mdx)("li",{parentName:"ul"},"Breaking Change",(0,l.mdx)("ul",{parentName:"li"},(0,l.mdx)("li",{parentName:"ul"},"Upgraded Stylelint from 13 to 15.")))),(0,l.mdx)("h2",{id:"460---september-26-2023"},"4.6.0 - (September 26, 2023)"),(0,l.mdx)("ul",null,(0,l.mdx)("li",{parentName:"ul"},"Changed",(0,l.mdx)("ul",{parentName:"li"},(0,l.mdx)("li",{parentName:"ul"},"Minor dependency version bump")))),(0,l.mdx)("h2",{id:"450---august-31-2023"},"4.5.0 - (August 31, 2023)"),(0,l.mdx)("ul",null,(0,l.mdx)("li",{parentName:"ul"},"Changed",(0,l.mdx)("ul",{parentName:"li"},(0,l.mdx)("li",{parentName:"ul"},"Minor dependency version bump")))),(0,l.mdx)("h2",{id:"442---august-30-2023"},"4.4.2 - (August 30, 2023)"),(0,l.mdx)("ul",null,(0,l.mdx)("li",{parentName:"ul"},"Changed",(0,l.mdx)("ul",{parentName:"li"},(0,l.mdx)("li",{parentName:"ul"},"Minor dependency version bump")))),(0,l.mdx)("h2",{id:"441---august-25-2023"},"4.4.1 - (August 25, 2023)"),(0,l.mdx)("ul",null,(0,l.mdx)("li",{parentName:"ul"},"Fixed",(0,l.mdx)("ul",{parentName:"li"},(0,l.mdx)("li",{parentName:"ul"},"Removed unnecessary ",(0,l.mdx)("inlineCode",{parentName:"li"},"postinstall")," step when installing."),(0,l.mdx)("li",{parentName:"ul"},"Optimized package size by exlucding unnecessary files when publishing.")))),(0,l.mdx)("h2",{id:"440---august-24-2023"},"4.4.0 - (August 24, 2023)"),(0,l.mdx)("ul",null,(0,l.mdx)("li",{parentName:"ul"},"Changed",(0,l.mdx)("ul",{parentName:"li"},(0,l.mdx)("li",{parentName:"ul"},"Minor dependency version bump")))),(0,l.mdx)("h2",{id:"430---february-11-2022"},"4.3.0 - (February 11, 2022)"),(0,l.mdx)("ul",null,(0,l.mdx)("li",{parentName:"ul"},"Changed",(0,l.mdx)("ul",{parentName:"li"},(0,l.mdx)("li",{parentName:"ul"},"Revert limiting upper Node version to 14.")))),(0,l.mdx)("h2",{id:"420---february-8-2022"},"4.2.0 - (February 8, 2022)"),(0,l.mdx)("ul",null,(0,l.mdx)("li",{parentName:"ul"},"Changed",(0,l.mdx)("ul",{parentName:"li"},(0,l.mdx)("li",{parentName:"ul"},"Updated component to support Node 14.")))),(0,l.mdx)("h2",{id:"410---february-25-2021"},"4.1.0 - (February 25, 2021)"),(0,l.mdx)("ul",null,(0,l.mdx)("li",{parentName:"ul"},"Changed",(0,l.mdx)("ul",{parentName:"li"},(0,l.mdx)("li",{parentName:"ul"},"declaration-property-unit-whitelist is deprecated, converting to declaration-property-unit-allowed-list.")))),(0,l.mdx)("h2",{id:"400---january-5-2021"},"4.0.0 - (January 5, 2021)"),(0,l.mdx)("ul",null,(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("p",{parentName:"li"},"Breaking"),(0,l.mdx)("ul",{parentName:"li"},(0,l.mdx)("li",{parentName:"ul"},"Drop support for node versions below version 10."),(0,l.mdx)("li",{parentName:"ul"},"Require stylelint version 13."),(0,l.mdx)("li",{parentName:"ul"},"Scope package under @cerner."))),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("p",{parentName:"li"},"Changed"),(0,l.mdx)("ul",{parentName:"li"},(0,l.mdx)("li",{parentName:"ul"},"Use jest for tests."),(0,l.mdx)("li",{parentName:"ul"},"Added publish config to package.json."),(0,l.mdx)("li",{parentName:"ul"},"Opened the node version to allow versions higher than node 10.")))),(0,l.mdx)("h2",{id:"370---july-28-2020"},"3.7.0 - (July 28, 2020)"),(0,l.mdx)("ul",null,(0,l.mdx)("li",{parentName:"ul"},"Fixed",(0,l.mdx)("ul",{parentName:"li"},(0,l.mdx)("li",{parentName:"ul"},"Support scoped package names")))),(0,l.mdx)("h2",{id:"360---july-21-2020"},"3.6.0 - (July 21, 2020)"),(0,l.mdx)("ul",null,(0,l.mdx)("li",{parentName:"ul"},"Changed",(0,l.mdx)("ul",{parentName:"li"},(0,l.mdx)("li",{parentName:"ul"},"Updated the custom-property-pattern rule to not require the terra prefix")))),(0,l.mdx)("h2",{id:"350---june-9-2020"},"3.5.0 - (June 9, 2020)"),(0,l.mdx)("ul",null,(0,l.mdx)("li",{parentName:"ul"},"Changed",(0,l.mdx)("ul",{parentName:"li"},(0,l.mdx)("li",{parentName:"ul"},"Updated eslint-config-terra to @cerner/eslint-config-terra v^4.0.0")))),(0,l.mdx)("h2",{id:"340---march-31-2020"},"3.4.0 - (March 31, 2020)"),(0,l.mdx)("ul",null,(0,l.mdx)("li",{parentName:"ul"},"Removed",(0,l.mdx)("ul",{parentName:"li"},(0,l.mdx)("li",{parentName:"ul"},"Removed the ",(0,l.mdx)("inlineCode",{parentName:"li"},"suitcss/custom-property-no-outside-root")," rule as it conflicts with our themeing strategy.")))),(0,l.mdx)("h2",{id:"330---january-28-2020"},"3.3.0 - (January 28, 2020)"),(0,l.mdx)("ul",null,(0,l.mdx)("li",{parentName:"ul"},"Changed",(0,l.mdx)("ul",{parentName:"li"},(0,l.mdx)("li",{parentName:"ul"},"Added Dave as a code owner."),(0,l.mdx)("li",{parentName:"ul"},"Update copyright to include 2020")))),(0,l.mdx)("h2",{id:"320---october-3-2019"},"3.2.0 - (October 3, 2019)"),(0,l.mdx)("ul",null,(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("p",{parentName:"li"},"Added"),(0,l.mdx)("ul",{parentName:"li"},(0,l.mdx)("li",{parentName:"ul"},"Added no-extra-semicolons rule to enforce no extra semicolons"))),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("p",{parentName:"li"},"Changed"),(0,l.mdx)("ul",{parentName:"li"},(0,l.mdx)("li",{parentName:"ul"},"Updated nvmrc file to use lts/dubnium"),(0,l.mdx)("li",{parentName:"ul"},"Updated find-up dependency to ^4.0.0"),(0,l.mdx)("li",{parentName:"ul"},"Updated postcss-value-parser to ^4.0.0"),(0,l.mdx)("li",{parentName:"ul"},"Updated ESLint to v6"),(0,l.mdx)("li",{parentName:"ul"},"Updated stylelint-config-sass-guidelines to ^6.1.0"),(0,l.mdx)("li",{parentName:"ul"},"Updated stylelint-order to ^3.1.1"),(0,l.mdx)("li",{parentName:"ul"},"Updated stylelint-scss to ^3.11.0"))),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("p",{parentName:"li"},"Removed"),(0,l.mdx)("ul",{parentName:"li"},(0,l.mdx)("li",{parentName:"ul"},"Removed DangerJS integration"),(0,l.mdx)("li",{parentName:"ul"},"Removed Terra prefix from mixin pattern rule."),(0,l.mdx)("li",{parentName:"ul"},"Removed rimraf devDependency")))),(0,l.mdx)("h2",{id:"310---may-9-2019"},"3.1.0 - (May 9, 2019)"),(0,l.mdx)("ul",null,(0,l.mdx)("li",{parentName:"ul"},"Added",(0,l.mdx)("ul",{parentName:"li"},(0,l.mdx)("li",{parentName:"ul"},"Added warning to enforce a unitless line-height")))),(0,l.mdx)("h2",{id:"300---may-1-2019"},"3.0.0 - (May 1, 2019)"),(0,l.mdx)("ul",null,(0,l.mdx)("li",{parentName:"ul"},"Breaking Changes",(0,l.mdx)("ul",{parentName:"li"},(0,l.mdx)("li",{parentName:"ul"},"Added more styles to ignore list"),(0,l.mdx)("li",{parentName:"ul"},"Updated stylelint dependencies to latest major versions")))),(0,l.mdx)("h2",{id:"200---january-29-2019"},"2.0.0 - (January 29, 2019)"),(0,l.mdx)("ul",null,(0,l.mdx)("li",{parentName:"ul"},"Breaking Changes",(0,l.mdx)("ul",{parentName:"li"},(0,l.mdx)("li",{parentName:"ul"},"Enabled custom property rules to throw errors for violations")))),(0,l.mdx)("h2",{id:"151---december-19-2018"},"1.5.1 - (December 19, 2018)"),(0,l.mdx)("ul",null,(0,l.mdx)("li",{parentName:"ul"},"Fixed",(0,l.mdx)("ul",{parentName:"li"},(0,l.mdx)("li",{parentName:"ul"},"Adjusted custom-property-pseudo-selectors to not require multiple definitions of the same pseudo selector if declared in the same block")))),(0,l.mdx)("h2",{id:"150---december-5-2018"},"1.5.0 - (December 5, 2018)"),(0,l.mdx)("ul",null,(0,l.mdx)("li",{parentName:"ul"},"Changed",(0,l.mdx)("ul",{parentName:"li"},(0,l.mdx)("li",{parentName:"ul"},"Removed custom property version checking."),(0,l.mdx)("li",{parentName:"ul"},"Renamed custom-property-namespace-version to custom-property-namespace")))),(0,l.mdx)("h2",{id:"140---november-29-2018"},"1.4.0 - (November 29, 2018)"),(0,l.mdx)("ul",null,(0,l.mdx)("li",{parentName:"ul"},"Added",(0,l.mdx)("ul",{parentName:"li"},(0,l.mdx)("li",{parentName:"ul"},"Added: ",(0,l.mdx)("inlineCode",{parentName:"li"},"custom-property-no-duplicate-declaration")," rule to disallow a custom property to be declared more than once with a different fallback value")))),(0,l.mdx)("h2",{id:"130---october-30-2018"},"1.3.0 - (October 30, 2018)"),(0,l.mdx)("ul",null,(0,l.mdx)("li",{parentName:"ul"},"Added",(0,l.mdx)("ul",{parentName:"li"},(0,l.mdx)("li",{parentName:"ul"},"Added: ",(0,l.mdx)("inlineCode",{parentName:"li"},"custom-property-name")," rule to enforce custom properties be suffixed with the css style property name"),(0,l.mdx)("li",{parentName:"ul"},"Added: ",(0,l.mdx)("inlineCode",{parentName:"li"},"custom-property-namespace-version")," rule to enforce custom properties to be prefixed with a namespace and version"),(0,l.mdx)("li",{parentName:"ul"},"Added: ",(0,l.mdx)("inlineCode",{parentName:"li"},"custom-property-pattern")," rule to enforce custom properties be written in lowercase alphanumeric characters and hyphens"),(0,l.mdx)("li",{parentName:"ul"},"Added: ",(0,l.mdx)("inlineCode",{parentName:"li"},"custom-property-pseudo-selectors")," rule to enforce custom properties to include the ancestor pseudo selector names")))),(0,l.mdx)("h2",{id:"120---august-30-2018"},"1.2.0 - (August 30, 2018)"),(0,l.mdx)("ul",null,(0,l.mdx)("li",{parentName:"ul"},"Changed",(0,l.mdx)("ul",{parentName:"li"},(0,l.mdx)("li",{parentName:"ul"},"Bumped stylelint-order dependency to v1.0.0")))),(0,l.mdx)("h2",{id:"110---august-8-2018"},"1.1.0 - (August 8, 2018)"),(0,l.mdx)("ul",null,(0,l.mdx)("li",{parentName:"ul"},"Changed",(0,l.mdx)("ul",{parentName:"li"},(0,l.mdx)("li",{parentName:"ul"},"Added ",(0,l.mdx)("inlineCode",{parentName:"li"},"calc"),", ",(0,l.mdx)("inlineCode",{parentName:"li"},"cursor"),", and ",(0,l.mdx)("inlineCode",{parentName:"li"},"outline")," to ignored style list for browser support.")))),(0,l.mdx)("h2",{id:"100---june-18-2018"},"1.0.0 - (June 18, 2018)"),(0,l.mdx)("ul",null,(0,l.mdx)("li",{parentName:"ul"},"Initial stable release")))}o.isMDXComponent=!0;var p=["components"];function s(){return s=Object.assign?Object.assign.bind():function(e){for(var a=1;a<arguments.length;a++){var n=arguments[a];for(var l in n)Object.prototype.hasOwnProperty.call(n,l)&&(e[l]=n[l])}return e},s.apply(this,arguments)}function x(e,a){if(null==e)return{};var n,l,r=function(e,a){if(null==e)return{};var n,l,r={},t=Object.keys(e);for(l=0;l<t.length;l++)n=t[l],a.indexOf(n)>=0||(r[n]=e[n]);return r}(e,a);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);for(l=0;l<t.length;l++)n=t[l],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c={},N="wrapper";function g(e){var a=e.components,n=x(e,p);return(0,l.mdx)(N,s({},c,n,{components:a,mdxType:"MDXLayout"}),(0,l.mdx)(r.C,{mdxType:"Badge"}),(0,l.mdx)(o,{mdxType:"ChangeLog"}))}g.isMDXComponent=!0},97583:function(e,a,n){n.d(a,{C:function(){return t}});var l=n(67294),r=n(22863),t=function(e){var a=e.url;return l.createElement(r.Z,{src:"https://github.com/cerner/terra-toolk/tree/main/packages/stylelint-config-terra",name:"@cerner/stylelint-config-terra",version:"5.0.1",url:a})}},17422:function(e,a,n){n.r(a),a.default={badge:"Badges-module__badge___vex-+","badge-container":"Badges-module__badge-container___B13Mv","badge-name":"Badges-module__badge-name___jkN0m","badge-version":"Badges-module__badge-version___agZ+P"}}}]);