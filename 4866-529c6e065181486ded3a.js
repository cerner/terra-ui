"use strict";(self.webpackChunkterra_ui=self.webpackChunkterra_ui||[]).push([[4866,45627,85565,3353,5161,45865,85355,3193,4845,46647,85161,38681,15318,40411,18101,38443],{22863:function(e,a,d){var n=d(64836);a.Z=void 0;var l=n(d(67294)),m=n(d(45697)),t=n(d(47166)),r=n(d(17422)),i=t.default.bind(r.default),u={name:m.default.string.isRequired,src:m.default.string,url:m.default.string,version:m.default.string.isRequired},p=function(e){var a=e.src,d=e.name,n=e.url,m=e.version,t=l.default.createElement("a",{className:i("badge"),href:n||"https://www.npmjs.org/package/".concat(d,"/v/").concat(m)},l.default.createElement("span",{className:i("badge-name")},n?"package":"npm"),l.default.createElement("span",{className:i("badge-version")},"v".concat(m))),r=a?l.default.createElement("a",{className:i("badge"),href:a},l.default.createElement("span",{className:i("badge-name")},"github"),l.default.createElement("span",{className:i("badge-version")},"source")):void 0;return l.default.createElement("div",{className:i("badge-container")},t,r)};p.propTypes=u;var o=p;a.Z=o},4866:function(e,a,d){d.r(a),d.d(a,{default:function(){return h}});d(67294);var n=d(81254),l=d(20953),m=["components"];function t(){return t=Object.assign?Object.assign.bind():function(e){for(var a=1;a<arguments.length;a++){var d=arguments[a];for(var n in d)Object.prototype.hasOwnProperty.call(d,n)&&(e[n]=d[n])}return e},t.apply(this,arguments)}function r(e,a){if(null==e)return{};var d,n,l=function(e,a){if(null==e)return{};var d,n,l={},m=Object.keys(e);for(n=0;n<m.length;n++)d=m[n],a.indexOf(d)>=0||(l[d]=e[d]);return l}(e,a);if(Object.getOwnPropertySymbols){var m=Object.getOwnPropertySymbols(e);for(n=0;n<m.length;n++)d=m[n],a.indexOf(d)>=0||Object.prototype.propertyIsEnumerable.call(e,d)&&(l[d]=e[d])}return l}var i={},u="wrapper";function p(e){var a=e.components,d=r(e,m);return(0,n.mdx)(u,t({},i,d,{components:a,mdxType:"MDXLayout"}),(0,n.mdx)("h1",{id:"changelog"},"Changelog"),(0,n.mdx)("h2",{id:"unreleased"},"Unreleased"),(0,n.mdx)("h2",{id:"1360---august-8-2023"},"1.36.0 - (August 8, 2023)"),(0,n.mdx)("ul",null,(0,n.mdx)("li",{parentName:"ul"},"Added",(0,n.mdx)("ul",{parentName:"li"},(0,n.mdx)("li",{parentName:"ul"},"Added isMac helper in ",(0,n.mdx)("inlineCode",{parentName:"li"},"_DropdownListUtil.js")," file.")))),(0,n.mdx)("h2",{id:"1350---august-1-2023"},"1.35.0 - (August 1, 2023)"),(0,n.mdx)("ul",null,(0,n.mdx)("li",{parentName:"ul"},"Added",(0,n.mdx)("ul",{parentName:"li"},(0,n.mdx)("li",{parentName:"ul"},"Updated aria-label for dropdown button."),(0,n.mdx)("li",{parentName:"ul"},"Added focus styles and screenreader support to announce expand/collapse state and index for dropdown list items.")))),(0,n.mdx)("h2",{id:"1340---may-9-2023"},"1.34.0 - (May 9, 2023)"),(0,n.mdx)("ul",null,(0,n.mdx)("li",{parentName:"ul"},"Added"),(0,n.mdx)("li",{parentName:"ul"},"Added screenreader support to announce the selection state for dropdown list items.")),(0,n.mdx)("h2",{id:"1330---april-27-2023"},"1.33.0 - (April 27, 2023)"),(0,n.mdx)("ul",null,(0,n.mdx)("li",{parentName:"ul"},"Fixed",(0,n.mdx)("ul",{parentName:"li"},(0,n.mdx)("li",{parentName:"ul"},"Fixed selection logic to cycle from last option to first option and vice-versa")))),(0,n.mdx)("h2",{id:"1320---march-1-2023"},"1.32.0 - (March 1, 2023)"),(0,n.mdx)("ul",null,(0,n.mdx)("li",{parentName:"ul"},"Changed",(0,n.mdx)("ul",{parentName:"li"},(0,n.mdx)("li",{parentName:"ul"},"Minor dependency version bump")))),(0,n.mdx)("h2",{id:"1310---february-15-2023"},"1.31.0 - (February 15, 2023)"),(0,n.mdx)("ul",null,(0,n.mdx)("li",{parentName:"ul"},"Changed",(0,n.mdx)("ul",{parentName:"li"},(0,n.mdx)("li",{parentName:"ul"},"Updated wdio screenshots due to functional-testing upgrade.")))),(0,n.mdx)("h2",{id:"1300---december-7-2022"},"1.30.0 - (December 7, 2022)"),(0,n.mdx)("ul",null,(0,n.mdx)("li",{parentName:"ul"},"Changed",(0,n.mdx)("ul",{parentName:"li"},(0,n.mdx)("li",{parentName:"ul"},"Minor dependency version bump")))),(0,n.mdx)("h2",{id:"1291---december-14-2021"},"1.29.1 - (December 14, 2021)"),(0,n.mdx)("ul",null,(0,n.mdx)("li",{parentName:"ul"},"Changed",(0,n.mdx)("ul",{parentName:"li"},(0,n.mdx)("li",{parentName:"ul"},"Migrate doc to terra-core-docs.")))),(0,n.mdx)("h2",{id:"1290---september-21-2021"},"1.29.0 - (September 21, 2021)"),(0,n.mdx)("ul",null,(0,n.mdx)("li",{parentName:"ul"},"Changed",(0,n.mdx)("ul",{parentName:"li"},(0,n.mdx)("li",{parentName:"ul"},"Updated WDIO Screenshots due to webpack-config-terra sass upgrade.")))),(0,n.mdx)("h2",{id:"1280---june-8-2021"},"1.28.0 - (June 8, 2021)"),(0,n.mdx)("ul",null,(0,n.mdx)("li",{parentName:"ul"},"Changed",(0,n.mdx)("ul",{parentName:"li"},(0,n.mdx)("li",{parentName:"ul"},"Updated ",(0,n.mdx)("inlineCode",{parentName:"li"},"keycode-js")," from ",(0,n.mdx)("inlineCode",{parentName:"li"},"v2.0.1")," to ",(0,n.mdx)("inlineCode",{parentName:"li"},"v3.1.0"),".")))),(0,n.mdx)("h2",{id:"1270---april-6-2021"},"1.27.0 - (April 6, 2021)"),(0,n.mdx)("ul",null,(0,n.mdx)("li",{parentName:"ul"},"Changed",(0,n.mdx)("ul",{parentName:"li"},(0,n.mdx)("li",{parentName:"ul"},"Removed unnecessary ",(0,n.mdx)("inlineCode",{parentName:"li"},"wdio.conf.js")," file"),(0,n.mdx)("li",{parentName:"ul"},"Upgrade tests to terra-functional-testing and WebDriverIO v6"),(0,n.mdx)("li",{parentName:"ul"},"Updated Jest command")))),(0,n.mdx)("h2",{id:"1260---march-2-2021"},"1.26.0 - (March 2, 2021)"),(0,n.mdx)("ul",null,(0,n.mdx)("li",{parentName:"ul"},"Fixed",(0,n.mdx)("ul",{parentName:"li"},(0,n.mdx)("li",{parentName:"ul"},"Fixed misalignment when rendered with terra-button.")))),(0,n.mdx)("h2",{id:"1250---february-17-2021"},"1.25.0 - (February 17, 2021)"),(0,n.mdx)("ul",null,(0,n.mdx)("li",{parentName:"ul"},"Fixed",(0,n.mdx)("ul",{parentName:"li"},(0,n.mdx)("li",{parentName:"ul"},"Fixed incorrect role in ",(0,n.mdx)("inlineCode",{parentName:"li"},"Item")," from ",(0,n.mdx)("inlineCode",{parentName:"li"},"presentation")," to ",(0,n.mdx)("inlineCode",{parentName:"li"},"menuitem")," for upcoming axe-core version bump")))),(0,n.mdx)("h2",{id:"1240---january-5-2021"},"1.24.0 - (January 5, 2021)"),(0,n.mdx)("ul",null,(0,n.mdx)("li",{parentName:"ul"},(0,n.mdx)("p",{parentName:"li"},"Fixed")),(0,n.mdx)("li",{parentName:"ul"},(0,n.mdx)("p",{parentName:"li"},"Fixed broken links in documentation.")),(0,n.mdx)("li",{parentName:"ul"},(0,n.mdx)("p",{parentName:"li"},"Changed"),(0,n.mdx)("ul",{parentName:"li"},(0,n.mdx)("li",{parentName:"ul"},"Updated to be compatible with ",(0,n.mdx)("inlineCode",{parentName:"li"},"react-intl")," v2-v5"),(0,n.mdx)("li",{parentName:"ul"},"Removed usage of ",(0,n.mdx)("inlineCode",{parentName:"li"},"intlShape")),(0,n.mdx)("li",{parentName:"ul"},"Update wdio tests to remove deprecated Terra.it helpers")))),(0,n.mdx)("h2",{id:"1230---november-10-2020"},"1.23.0 - (November 10, 2020)"),(0,n.mdx)("ul",null,(0,n.mdx)("li",{parentName:"ul"},"Fixed",(0,n.mdx)("ul",{parentName:"li"},(0,n.mdx)("li",{parentName:"ul"},"Fixed build failures due to the react/sort-comp rule")))),(0,n.mdx)("h2",{id:"1220---october-13-2020"},"1.22.0 - (October 13, 2020)"),(0,n.mdx)("ul",null,(0,n.mdx)("li",{parentName:"ul"},"Fixed",(0,n.mdx)("ul",{parentName:"li"},(0,n.mdx)("li",{parentName:"ul"},"Fix to prevent modal from closing on pressing escape to close dropdown.")))),(0,n.mdx)("h2",{id:"1210---august-18-2020"},"1.21.0 - (August 18, 2020)"),(0,n.mdx)("ul",null,(0,n.mdx)("li",{parentName:"ul"},"Added",(0,n.mdx)("ul",{parentName:"li"},(0,n.mdx)("li",{parentName:"ul"},"Added an interaction media query to apply ",(0,n.mdx)("inlineCode",{parentName:"li"},"hover")," styles only on non-touch devices and removed tests for hover styles.")))),(0,n.mdx)("h2",{id:"1200---august-4-2020"},"1.20.0 - (August 4, 2020)"),(0,n.mdx)("ul",null,(0,n.mdx)("li",{parentName:"ul"},"Changed",(0,n.mdx)("ul",{parentName:"li"},(0,n.mdx)("li",{parentName:"ul"},"Minor dependency version bump")))),(0,n.mdx)("h2",{id:"1190---july-29-2020"},"1.19.0 - (July 29, 2020)"),(0,n.mdx)("ul",null,(0,n.mdx)("li",{parentName:"ul"},"Changed",(0,n.mdx)("ul",{parentName:"li"},(0,n.mdx)("li",{parentName:"ul"},"Update changelog formatting")))),(0,n.mdx)("h2",{id:"1180---july-7-2020"},"1.18.0 - (July 7, 2020)"),(0,n.mdx)("ul",null,(0,n.mdx)("li",{parentName:"ul"},"Changed",(0,n.mdx)("ul",{parentName:"li"},(0,n.mdx)("li",{parentName:"ul"},"Minor dependency version bump")))),(0,n.mdx)("h2",{id:"1170---june-23-2020"},"1.17.0 - (June 23, 2020)"),(0,n.mdx)("ul",null,(0,n.mdx)("li",{parentName:"ul"},"Changed",(0,n.mdx)("ul",{parentName:"li"},(0,n.mdx)("li",{parentName:"ul"},"Fixed dropdown not opening on pressing space in firefox, and reverted disabled tests for firefox.")))),(0,n.mdx)("h2",{id:"1160---june-11-2020"},"1.16.0 - (June 11, 2020)"),(0,n.mdx)("ul",null,(0,n.mdx)("li",{parentName:"ul"},(0,n.mdx)("p",{parentName:"li"},"Changed"),(0,n.mdx)("ul",{parentName:"li"},(0,n.mdx)("li",{parentName:"ul"},"Disabled wdio test which opens dropdown menu with space key for firefox testing. This will be re-enabled when ",(0,n.mdx)("a",{parentName:"li",href:"https://github.com/cerner/terra-core/issues/3008"},"https://github.com/cerner/terra-core/issues/3008")," is resolved."))),(0,n.mdx)("li",{parentName:"ul"},(0,n.mdx)("p",{parentName:"li"},"Removed"),(0,n.mdx)("ul",{parentName:"li"},(0,n.mdx)("li",{parentName:"ul"},"Removed duplicate test")))),(0,n.mdx)("h2",{id:"1150---june-9-2020"},"1.15.0 - (June 9, 2020)"),(0,n.mdx)("ul",null,(0,n.mdx)("li",{parentName:"ul"},"Changed",(0,n.mdx)("ul",{parentName:"li"},(0,n.mdx)("li",{parentName:"ul"},"Update wdio test configuration to use root wdio config")))),(0,n.mdx)("h2",{id:"1140---may-19-2020"},"1.14.0 - (May 19, 2020)"),(0,n.mdx)("ul",null,(0,n.mdx)("li",{parentName:"ul"},"Changed",(0,n.mdx)("ul",{parentName:"li"},(0,n.mdx)("li",{parentName:"ul"},"Apply themes by context and directly include packaged themes.")))),(0,n.mdx)("h2",{id:"1130---april-28-2020"},"1.13.0 - (April 28, 2020)"),(0,n.mdx)("ul",null,(0,n.mdx)("li",{parentName:"ul"},"Changed",(0,n.mdx)("ul",{parentName:"li"},(0,n.mdx)("li",{parentName:"ul"},'Removed "View Component Source Code" from docs in favour of source code badge'))),(0,n.mdx)("li",{parentName:"ul"},"Added",(0,n.mdx)("ul",{parentName:"li"},(0,n.mdx)("li",{parentName:"ul"},"Added clinical-lowlight-theme wdio screenshots")))),(0,n.mdx)("h2",{id:"1120---april-22-2020"},"1.12.0 - (April 22, 2020)"),(0,n.mdx)("ul",null,(0,n.mdx)("li",{parentName:"ul"},"Changed",(0,n.mdx)("ul",{parentName:"li"},(0,n.mdx)("li",{parentName:"ul"},"Updated docs for documentation link and expanded ",(0,n.mdx)("inlineCode",{parentName:"li"},"PropTypes")," for Props Table"),(0,n.mdx)("li",{parentName:"ul"},"Removed extra lines from README")))),(0,n.mdx)("h2",{id:"1110---february-18-2020"},"1.11.0 - (February 18, 2020)"),(0,n.mdx)("ul",null,(0,n.mdx)("li",{parentName:"ul"},"Added",(0,n.mdx)("ul",{parentName:"li"},(0,n.mdx)("li",{parentName:"ul"},"Added clinical-lowlight-theme theming files")))),(0,n.mdx)("h2",{id:"1100---february-4-2020"},"1.10.0 - (February 4, 2020)"),(0,n.mdx)("ul",null,(0,n.mdx)("li",{parentName:"ul"},(0,n.mdx)("p",{parentName:"li"},"Added"),(0,n.mdx)("ul",{parentName:"li"},(0,n.mdx)("li",{parentName:"ul"},"Added metaData for primary-button in SplitButton to ",(0,n.mdx)("inlineCode",{parentName:"li"},"onSelect")," callback."))),(0,n.mdx)("li",{parentName:"ul"},(0,n.mdx)("p",{parentName:"li"},"Changed"),(0,n.mdx)("ul",{parentName:"li"},(0,n.mdx)("li",{parentName:"ul"},"Changed focus behaviour of DropdownButton and SplitButton such that focus stays on button when dropdown is opened via mouse click."),(0,n.mdx)("li",{parentName:"ul"},"Update docs to use mdx syntax."))),(0,n.mdx)("li",{parentName:"ul"},(0,n.mdx)("p",{parentName:"li"},"Fixed"),(0,n.mdx)("ul",{parentName:"li"},(0,n.mdx)("li",{parentName:"ul"},"Fixed primary button issue of not getting focused on click in Firefox, Safari and IE.")))),(0,n.mdx)("h2",{id:"190---january-7-2020"},"1.9.0 - (January 7, 2020)"),(0,n.mdx)("ul",null,(0,n.mdx)("li",{parentName:"ul"},"Changed",(0,n.mdx)("ul",{parentName:"li"},(0,n.mdx)("li",{parentName:"ul"},"Minor dependency version bump")))),(0,n.mdx)("h2",{id:"180---december-3-2019"},"1.8.0 - (December 3, 2019)"),(0,n.mdx)("ul",null,(0,n.mdx)("li",{parentName:"ul"},"Added",(0,n.mdx)("ul",{parentName:"li"},(0,n.mdx)("li",{parentName:"ul"},"Added orion-fusion-theme and generated the respective reference wdio screenshots.")))),(0,n.mdx)("h2",{id:"170---october-30-2019"},"1.7.0 - (October 30, 2019)"),(0,n.mdx)("ul",null,(0,n.mdx)("li",{parentName:"ul"},(0,n.mdx)("p",{parentName:"li"},"Fixed"),(0,n.mdx)("ul",{parentName:"li"},(0,n.mdx)("li",{parentName:"ul"},"Primary button click not closing menu, when menu is open issue fixed."),(0,n.mdx)("li",{parentName:"ul"},"Multiple instances of split-button and drop-down cannot be opened simultaneously."))),(0,n.mdx)("li",{parentName:"ul"},(0,n.mdx)("p",{parentName:"li"},"Added"),(0,n.mdx)("ul",{parentName:"li"},(0,n.mdx)("li",{parentName:"ul"},"Added metaData and event to ",(0,n.mdx)("inlineCode",{parentName:"li"},"onSelect")," callback.")))),(0,n.mdx)("h2",{id:"160---october-3-2019"},"1.6.0 - (October 3, 2019)"),(0,n.mdx)("ul",null,(0,n.mdx)("li",{parentName:"ul"},"Changed",(0,n.mdx)("ul",{parentName:"li"},(0,n.mdx)("li",{parentName:"ul"},"Minor dependency version bump")))),(0,n.mdx)("h2",{id:"150---september-19-2019"},"1.5.0 - (September 19, 2019)"),(0,n.mdx)("ul",null,(0,n.mdx)("li",{parentName:"ul"},(0,n.mdx)("p",{parentName:"li"},"Changed"),(0,n.mdx)("ul",{parentName:"li"},(0,n.mdx)("li",{parentName:"ul"},"Removed ",(0,n.mdx)("inlineCode",{parentName:"li"},"details")," tag from doc-site."))),(0,n.mdx)("li",{parentName:"ul"},(0,n.mdx)("p",{parentName:"li"},"Fixed"),(0,n.mdx)("ul",{parentName:"li"},(0,n.mdx)("li",{parentName:"ul"},"Reset default margin in Safari."))),(0,n.mdx)("li",{parentName:"ul"},(0,n.mdx)("p",{parentName:"li"},"Added"),(0,n.mdx)("ul",{parentName:"li"},(0,n.mdx)("li",{parentName:"ul"},"Added en-CA translations.")))),(0,n.mdx)("h2",{id:"140---september-6-2019"},"1.4.0 - (September 6, 2019)"),(0,n.mdx)("ul",null,(0,n.mdx)("li",{parentName:"ul"},"Added",(0,n.mdx)("ul",{parentName:"li"},(0,n.mdx)("li",{parentName:"ul"},"Props table markdown file import added to doc site page")))),(0,n.mdx)("h2",{id:"130---september-3-2019"},"1.3.0 - (September 3, 2019)"),(0,n.mdx)("ul",null,(0,n.mdx)("li",{parentName:"ul"},"Changed",(0,n.mdx)("ul",{parentName:"li"},(0,n.mdx)("li",{parentName:"ul"},"Updated the 'keycode-js' version from '^1.0.4' to '^2.0.1'.")))),(0,n.mdx)("h2",{id:"120---august-21-2019"},"1.2.0 - (August 21, 2019)"),(0,n.mdx)("ul",null,(0,n.mdx)("li",{parentName:"ul"},"Changed",(0,n.mdx)("ul",{parentName:"li"},(0,n.mdx)("li",{parentName:"ul"},"Import for package version from package.json added to doc page"),(0,n.mdx)("li",{parentName:"ul"},"Cleaned up imports in examples and test files")))),(0,n.mdx)("h2",{id:"110---august-14-2019"},"1.1.0 - (August 14, 2019)"),(0,n.mdx)("ul",null,(0,n.mdx)("li",{parentName:"ul"},"Changed",(0,n.mdx)("ul",{parentName:"li"},(0,n.mdx)("li",{parentName:"ul"},"Minor dependency updates")))),(0,n.mdx)("h2",{id:"100---july-30-2019"},"1.0.0 - (July 30, 2019)"),(0,n.mdx)("ul",null,(0,n.mdx)("li",{parentName:"ul"},"Initial stable release")))}p.isMDXComponent=!0;var o=["components"];function x(){return x=Object.assign?Object.assign.bind():function(e){for(var a=1;a<arguments.length;a++){var d=arguments[a];for(var n in d)Object.prototype.hasOwnProperty.call(d,n)&&(e[n]=d[n])}return e},x.apply(this,arguments)}function s(e,a){if(null==e)return{};var d,n,l=function(e,a){if(null==e)return{};var d,n,l={},m=Object.keys(e);for(n=0;n<m.length;n++)d=m[n],a.indexOf(d)>=0||(l[d]=e[d]);return l}(e,a);if(Object.getOwnPropertySymbols){var m=Object.getOwnPropertySymbols(e);for(n=0;n<m.length;n++)d=m[n],a.indexOf(d)>=0||Object.prototype.propertyIsEnumerable.call(e,d)&&(l[d]=e[d])}return l}var c={},N="wrapper";function h(e){var a=e.components,d=s(e,o);return(0,n.mdx)(N,x({},c,d,{components:a,mdxType:"MDXLayout"}),(0,n.mdx)(l.C,{mdxType:"Badge"}),(0,n.mdx)(p,{mdxType:"ChangeLog"}))}h.isMDXComponent=!0},20953:function(e,a,d){d.d(a,{C:function(){return m}});var n=d(67294),l=d(22863),m=function(e){var a=e.url;return n.createElement(l.Z,{src:"https://github.com/cerner/terra-core/tree/main/packages/terra-dropdown-button",name:"terra-dropdown-button",version:"1.36.0",url:a})}},17422:function(e,a,d){d.r(a),a.default={badge:"Badges-module__badge___vex-+","badge-container":"Badges-module__badge-container___B13Mv","badge-name":"Badges-module__badge-name___jkN0m","badge-version":"Badges-module__badge-version___agZ+P"}}}]);