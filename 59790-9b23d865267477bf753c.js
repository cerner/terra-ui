"use strict";(self.webpackChunkterra_ui=self.webpackChunkterra_ui||[]).push([[59790,45627,85565,3353,5161,45865,85355,3193,4845,46647,85161,38681,15318,40411,18101,38443,11264,34319,20116,33609,12026],{22863:function(e,a,n){var l=n(64836);a.Z=void 0;var r=l(n(67294)),d=l(n(45697)),t=l(n(19845)),i=l(n(17422)),m=t.default.bind(i.default),u={name:d.default.string.isRequired,src:d.default.string,url:d.default.string,version:d.default.string.isRequired},p=function(e){var a=e.src,n=e.name,l=e.url,d=e.version,t=r.default.createElement("a",{className:m("badge"),href:l||"https://www.npmjs.org/package/".concat(n,"/v/").concat(d)},r.default.createElement("span",{className:m("badge-name")},l?"package":"npm"),r.default.createElement("span",{className:m("badge-version")},"v".concat(d))),i=a?r.default.createElement("a",{className:m("badge"),href:a},r.default.createElement("span",{className:m("badge-name")},"github"),r.default.createElement("span",{className:m("badge-version")},"source")):void 0;return r.default.createElement("div",{className:m("badge-container")},t,i)};p.propTypes=u;var o=p;a.Z=o},59790:function(e,a,n){n.r(a),n.d(a,{default:function(){return g}});n(67294);var l=n(81254),r=n(46870),d=["components"];function t(){return t=Object.assign?Object.assign.bind():function(e){for(var a=1;a<arguments.length;a++){var n=arguments[a];for(var l in n)Object.prototype.hasOwnProperty.call(n,l)&&(e[l]=n[l])}return e},t.apply(this,arguments)}function i(e,a){if(null==e)return{};var n,l,r=function(e,a){if(null==e)return{};var n,l,r={},d=Object.keys(e);for(l=0;l<d.length;l++)n=d[l],a.indexOf(n)>=0||(r[n]=e[n]);return r}(e,a);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(e);for(l=0;l<d.length;l++)n=d[l],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var m={},u="wrapper";function p(e){var a=e.components,n=i(e,d);return(0,l.mdx)(u,t({},m,n,{components:a,mdxType:"MDXLayout"}),(0,l.mdx)("h1",{id:"changelog"},"Changelog"),(0,l.mdx)("h2",{id:"unreleased"},"Unreleased"),(0,l.mdx)("h2",{id:"560---august-31-2023"},"5.6.0 - (August 31, 2023)"),(0,l.mdx)("ul",null,(0,l.mdx)("li",{parentName:"ul"},"Changed",(0,l.mdx)("ul",{parentName:"li"},(0,l.mdx)("li",{parentName:"ul"},"Locked ",(0,l.mdx)("inlineCode",{parentName:"li"},"eslint-plugin-formatjs")," to ",(0,l.mdx)("inlineCode",{parentName:"li"},"2.19.1")," so that the version of its peerDependency ",(0,l.mdx)("inlineCode",{parentName:"li"},"eslint@7")," matches that in ",(0,l.mdx)("inlineCode",{parentName:"li"},"eslint-config-terra"),".")))),(0,l.mdx)("h2",{id:"551---august-30-2023"},"5.5.1 - (August 30, 2023)"),(0,l.mdx)("ul",null,(0,l.mdx)("li",{parentName:"ul"},"Fixed"),(0,l.mdx)("li",{parentName:"ul"},"Moved ",(0,l.mdx)("inlineCode",{parentName:"li"},"eslint")," from dependencies to the correct peerDependencies section to fix npm 6 install errors. ")),(0,l.mdx)("h2",{id:"550---august-24-2023"},"5.5.0 - (August 24, 2023)"),(0,l.mdx)("ul",null,(0,l.mdx)("li",{parentName:"ul"},"Changed",(0,l.mdx)("ul",{parentName:"li"},(0,l.mdx)("li",{parentName:"ul"},"Minor dependency version bump")))),(0,l.mdx)("h2",{id:"540---february-11-2022"},"5.4.0 - (February 11, 2022)"),(0,l.mdx)("ul",null,(0,l.mdx)("li",{parentName:"ul"},"Changed",(0,l.mdx)("ul",{parentName:"li"},(0,l.mdx)("li",{parentName:"ul"},"Revert limiting upper Node version to 14.")))),(0,l.mdx)("h2",{id:"530---february-8-2022"},"5.3.0 - (February 8, 2022)"),(0,l.mdx)("ul",null,(0,l.mdx)("li",{parentName:"ul"},"Changed",(0,l.mdx)("ul",{parentName:"li"},(0,l.mdx)("li",{parentName:"ul"},"Updated component to support Node 14.")))),(0,l.mdx)("h2",{id:"520---november-16-2021"},"5.2.0 - (November 16, 2021)"),(0,l.mdx)("ul",null,(0,l.mdx)("li",{parentName:"ul"},"Changed",(0,l.mdx)("ul",{parentName:"li"},(0,l.mdx)("li",{parentName:"ul"},"Add Format-js linter.")))),(0,l.mdx)("h2",{id:"510---april-23-2021"},"5.1.0 - (April 23, 2021)"),(0,l.mdx)("ul",null,(0,l.mdx)("li",{parentName:"ul"},"Changed",(0,l.mdx)("ul",{parentName:"li"},(0,l.mdx)("li",{parentName:"ul"},"Added ",(0,l.mdx)("inlineCode",{parentName:"li"},"FullStack")," to globals for usage in full stack testing")))),(0,l.mdx)("h2",{id:"500---february-16-2021"},"5.0.0 - (February 16, 2021)"),(0,l.mdx)("ul",null,(0,l.mdx)("li",{parentName:"ul"},"Breaking",(0,l.mdx)("ul",{parentName:"li"},(0,l.mdx)("li",{parentName:"ul"},"Update to eslint ^7.19.0.")))),(0,l.mdx)("h2",{id:"451---february-9-2021"},"4.5.1 - (February 9, 2021)"),(0,l.mdx)("ul",null,(0,l.mdx)("li",{parentName:"ul"},"Fixed",(0,l.mdx)("ul",{parentName:"li"},(0,l.mdx)("li",{parentName:"ul"},"Locking into a previous version of eslint-config-airbnb is non passive, rolling back the fix for the missing peer.")))),(0,l.mdx)("h2",{id:"450---february-8-2021"},"4.5.0 - (February 8, 2021)"),(0,l.mdx)("ul",null,(0,l.mdx)("li",{parentName:"ul"},"Fixed",(0,l.mdx)("ul",{parentName:"li"},(0,l.mdx)("li",{parentName:"ul"},"Resolved missing peer dependency warning by locking into a previous version of eslint-config-airbnb.")))),(0,l.mdx)("h2",{id:"440---january-27-2021"},"4.4.0 - (January 27, 2021)"),(0,l.mdx)("ul",null,(0,l.mdx)("li",{parentName:"ul"},"Changed",(0,l.mdx)("ul",{parentName:"li"},(0,l.mdx)("li",{parentName:"ul"},"Added $ to globals for usage in WDIO spec tests")))),(0,l.mdx)("h2",{id:"430---january-5-2021"},"4.3.0 - (January 5, 2021)"),(0,l.mdx)("ul",null,(0,l.mdx)("li",{parentName:"ul"},"Changed",(0,l.mdx)("ul",{parentName:"li"},(0,l.mdx)("li",{parentName:"ul"},"Opened the node version to allow versions higher than node 10.")))),(0,l.mdx)("h2",{id:"420---november-24-2020"},"4.2.0 - (November 24, 2020)"),(0,l.mdx)("ul",null,(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("p",{parentName:"li"},"Fixed"),(0,l.mdx)("ul",{parentName:"li"},(0,l.mdx)("li",{parentName:"ul"},"The badges in the readme were pointing to an incorrect url."))),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("p",{parentName:"li"},"Changed"),(0,l.mdx)("ul",{parentName:"li"},(0,l.mdx)("li",{parentName:"ul"},"Updated eslint config file to use ",(0,l.mdx)("inlineCode",{parentName:"li"},"off"),", ",(0,l.mdx)("inlineCode",{parentName:"li"},"warn")," and ",(0,l.mdx)("inlineCode",{parentName:"li"},"error")," instead of ",(0,l.mdx)("inlineCode",{parentName:"li"},"0"),", ",(0,l.mdx)("inlineCode",{parentName:"li"},"1")," and ",(0,l.mdx)("inlineCode",{parentName:"li"},"2"),".")))),(0,l.mdx)("h2",{id:"410---august-4-2020"},"4.1.0 - (August 4, 2020)"),(0,l.mdx)("ul",null,(0,l.mdx)("li",{parentName:"ul"},"Added",(0,l.mdx)("ul",{parentName:"li"},(0,l.mdx)("li",{parentName:"ul"},"babel-eslint as parser to allow current js functionality, like optional chaining.")))),(0,l.mdx)("h2",{id:"400---may-5-2020"},"4.0.0 - (May 5, 2020)"),(0,l.mdx)("ul",null,(0,l.mdx)("li",{parentName:"ul"},"Breaking Change",(0,l.mdx)("ul",{parentName:"li"},(0,l.mdx)("li",{parentName:"ul"},"Updated to a scoped packages: @cerner/eslint-config-terra")))),(0,l.mdx)("h2",{id:"330---january-28-2020"},"3.3.0 - (January 28, 2020)"),(0,l.mdx)("ul",null,(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("p",{parentName:"li"},"Changed"),(0,l.mdx)("ul",{parentName:"li"},(0,l.mdx)("li",{parentName:"ul"},"Update copyright to include 2020"))),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("p",{parentName:"li"},"Added"),(0,l.mdx)("ul",{parentName:"li"},(0,l.mdx)("li",{parentName:"ul"},"Added new override for relative package imports within terra-dev-site example files")))),(0,l.mdx)("h2",{id:"320---november-7-2019"},"3.2.0 - (November 7, 2019)"),(0,l.mdx)("ul",null,(0,l.mdx)("li",{parentName:"ul"},"Added",(0,l.mdx)("ul",{parentName:"li"},(0,l.mdx)("li",{parentName:"ul"},"Added minimum node engine version of 8.10.0, 10.13.0, or 11.10.1 in package.json")))),(0,l.mdx)("h2",{id:"310---october-30-2019"},"3.1.0 - (October 30, 2019)"),(0,l.mdx)("ul",null,(0,l.mdx)("li",{parentName:"ul"},"Added",(0,l.mdx)("ul",{parentName:"li"},(0,l.mdx)("li",{parentName:"ul"},"Added rule override for ",(0,l.mdx)("inlineCode",{parentName:"li"},"no-multiple-empty-lines")," to warn on multiple consecutive empty lines")))),(0,l.mdx)("h2",{id:"302---october-1-2019"},"3.0.2 - (October 1, 2019)"),(0,l.mdx)("ul",null,(0,l.mdx)("li",{parentName:"ul"},"Changed",(0,l.mdx)("ul",{parentName:"li"},(0,l.mdx)("li",{parentName:"ul"},"Pin eslint-plugin-react dependency to ",(0,l.mdx)("inlineCode",{parentName:"li"},"7.14.3"))))),(0,l.mdx)("h2",{id:"301---september-6-2019"},"3.0.1 - (September 6, 2019)"),(0,l.mdx)("ul",null,(0,l.mdx)("li",{parentName:"ul"},"Changed",(0,l.mdx)("ul",{parentName:"li"},(0,l.mdx)("li",{parentName:"ul"},"Update eslint-plugin-react-hooks dependency to ",(0,l.mdx)("inlineCode",{parentName:"li"},"^2.0.1"))))),(0,l.mdx)("h2",{id:"300---august-20-2019"},"3.0.0 - (August 20, 2019)"),(0,l.mdx)("ul",null,(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("p",{parentName:"li"},"Breaking Change"),(0,l.mdx)("ul",{parentName:"li"},(0,l.mdx)("li",{parentName:"ul"},"Updated eslint peer dependency to ",(0,l.mdx)("inlineCode",{parentName:"li"},"^6.1.0")),(0,l.mdx)("li",{parentName:"ul"},"Update eslint-config-airbnb dependency to ",(0,l.mdx)("inlineCode",{parentName:"li"},"^18.0.0")),(0,l.mdx)("li",{parentName:"ul"},"Update eslint-plugin-compat dependency to ",(0,l.mdx)("inlineCode",{parentName:"li"},"^3.3.0")),(0,l.mdx)("li",{parentName:"ul"},"Enable ",(0,l.mdx)("inlineCode",{parentName:"li"},"react/jsx-wrap-multilines")," rule"),(0,l.mdx)("li",{parentName:"ul"},"Updating warning for style prop to produce an error instead of a warning"))),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("p",{parentName:"li"},"Changed"),(0,l.mdx)("ul",{parentName:"li"},(0,l.mdx)("li",{parentName:"ul"},"Replace DangerJS integration with probot-changelog"),(0,l.mdx)("li",{parentName:"ul"},"Removed rimraf devDependency and replaced with ",(0,l.mdx)("inlineCode",{parentName:"li"},"rm -rf"))))),(0,l.mdx)("h2",{id:"250---may-9-2019"},"2.5.0 - (May 9, 2019)"),(0,l.mdx)("ul",null,(0,l.mdx)("li",{parentName:"ul"},"Added",(0,l.mdx)("ul",{parentName:"li"},(0,l.mdx)("li",{parentName:"ul"},"A warning to discourage inline styles")))),(0,l.mdx)("h2",{id:"240---february-11-2019"},"2.4.0 - (February 11, 2019)"),(0,l.mdx)("ul",null,(0,l.mdx)("li",{parentName:"ul"},"Added",(0,l.mdx)("ul",{parentName:"li"},(0,l.mdx)("li",{parentName:"ul"},"Setting to eslint-plugin-compat config to denote polyfill usage for ",(0,l.mdx)("inlineCode",{parentName:"li"},"Object.values"),".")))),(0,l.mdx)("h2",{id:"230---february-6-2019"},"2.3.0 - (February 6, 2019)"),(0,l.mdx)("ul",null,(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("p",{parentName:"li"},"Added"),(0,l.mdx)("ul",{parentName:"li"},(0,l.mdx)("li",{parentName:"ul"},"React Hooks plugin and rules"))),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("p",{parentName:"li"},"Changed"),(0,l.mdx)("ul",{parentName:"li"},(0,l.mdx)("li",{parentName:"ul"},"Unlocked 'eslint-plugin-react' to ^7.12.2"),(0,l.mdx)("li",{parentName:"ul"},"Updated config rules to make react/jsx-wrap-multilines a warning for passivity")))),(0,l.mdx)("h2",{id:"220---january-2-2019"},"2.2.0 - (January 2, 2019)"),(0,l.mdx)("ul",null,(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("p",{parentName:"li"},"Added"),(0,l.mdx)("ul",{parentName:"li"},(0,l.mdx)("li",{parentName:"ul"},"Rule override to turn off the ",(0,l.mdx)("inlineCode",{parentName:"li"},"no-unused-expression")," rule for jest or wdio test files."))),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("p",{parentName:"li"},"Changed"),(0,l.mdx)("ul",{parentName:"li"},(0,l.mdx)("li",{parentName:"ul"},'Added after as globals for test files recursively under a "wdio" directory'),(0,l.mdx)("li",{parentName:"ul"},"Tempararily lock-down ",(0,l.mdx)("inlineCode",{parentName:"li"},"eslint-plugin-react"),". V7.12.0 was released with bugs and has not yet been fixed. Locking this down until a fix is released.")))),(0,l.mdx)("h2",{id:"210---august-29-2018"},"2.1.0 - (August 29, 2018)"),(0,l.mdx)("ul",null,(0,l.mdx)("li",{parentName:"ul"},"Changed",(0,l.mdx)("ul",{parentName:"li"},(0,l.mdx)("li",{parentName:"ul"},'Updated mount, shallow, and render to only be globals for test files recursively under a "jest" directory'),(0,l.mdx)("li",{parentName:"ul"},'Added before, browser, and Terra as globals for test files recursively under a "wdio" directory')))),(0,l.mdx)("h2",{id:"200---august-23-2018"},"2.0.0 - (August 23, 2018)"),(0,l.mdx)("ul",null,(0,l.mdx)("li",{parentName:"ul"},"Changed",(0,l.mdx)("ul",{parentName:"li"},(0,l.mdx)("li",{parentName:"ul"},"Update ESLint and related dependencies to ESLint v5 compatible versions"),(0,l.mdx)("li",{parentName:"ul"},"Disabled the deprecated ",(0,l.mdx)("inlineCode",{parentName:"li"},"jsx-a11y/label-has-for rule"),". More info about this rule deprecation here: ",(0,l.mdx)("a",{parentName:"li",href:"https://github.com/evcohen/eslint-plugin-jsx-a11y/releases/tag/v6.1.0"},"https://github.com/evcohen/eslint-plugin-jsx-a11y/releases/tag/v6.1.0")),(0,l.mdx)("li",{parentName:"ul"},"Replaced ",(0,l.mdx)("inlineCode",{parentName:"li"},"jsx-a11y/label-has-for")," rule with new ",(0,l.mdx)("inlineCode",{parentName:"li"},"jsx-a11y/label-has-associated-control")," rule"),(0,l.mdx)("li",{parentName:"ul"},"Disabled ",(0,l.mdx)("inlineCode",{parentName:"li"},"react/destructuring-assignment")," rule")))),(0,l.mdx)("h2",{id:"110---july-11-2018"},"1.1.0 - (July 11, 2018)"),(0,l.mdx)("ul",null,(0,l.mdx)("li",{parentName:"ul"},"Changed",(0,l.mdx)("ul",{parentName:"li"},(0,l.mdx)("li",{parentName:"ul"},"Updated 'jsx-a11y/label-has-for' to require id or nested input for label mapping")))),(0,l.mdx)("h2",{id:"101---june-19-2018"},"1.0.1 - (June 19, 2018)"),(0,l.mdx)("ul",null,(0,l.mdx)("li",{parentName:"ul"},"Changed",(0,l.mdx)("ul",{parentName:"li"},(0,l.mdx)("li",{parentName:"ul"},"Minor update to ReadMe")))),(0,l.mdx)("h2",{id:"100---june-18-2018"},"1.0.0 - (June 18, 2018)"),(0,l.mdx)("ul",null,(0,l.mdx)("li",{parentName:"ul"},"Initial stable release",(0,l.mdx)("ul",{parentName:"li"},(0,l.mdx)("li",{parentName:"ul"},"Updated to ensure travis builds successfully")))))}p.isMDXComponent=!0;var o=["components"];function s(){return s=Object.assign?Object.assign.bind():function(e){for(var a=1;a<arguments.length;a++){var n=arguments[a];for(var l in n)Object.prototype.hasOwnProperty.call(n,l)&&(e[l]=n[l])}return e},s.apply(this,arguments)}function x(e,a){if(null==e)return{};var n,l,r=function(e,a){if(null==e)return{};var n,l,r={},d=Object.keys(e);for(l=0;l<d.length;l++)n=d[l],a.indexOf(n)>=0||(r[n]=e[n]);return r}(e,a);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(e);for(l=0;l<d.length;l++)n=d[l],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c={},N="wrapper";function g(e){var a=e.components,n=x(e,o);return(0,l.mdx)(N,s({},c,n,{components:a,mdxType:"MDXLayout"}),(0,l.mdx)(r.C,{mdxType:"Badge"}),(0,l.mdx)(p,{mdxType:"ChangeLog"}))}g.isMDXComponent=!0},46870:function(e,a,n){n.d(a,{C:function(){return d}});var l=n(67294),r=n(22863),d=function(e){var a=e.url;return l.createElement(r.Z,{src:"https://github.com/cerner/terra-toolk/tree/main/packages/eslint-config-terra",name:"@cerner/eslint-config-terra",version:"5.6.0",url:a})}},17422:function(e,a,n){n.r(a),a.default={badge:"Badges-module__badge___vex-+","badge-container":"Badges-module__badge-container___B13Mv","badge-name":"Badges-module__badge-name___jkN0m","badge-version":"Badges-module__badge-version___agZ+P"}}}]);