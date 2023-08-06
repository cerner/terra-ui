"use strict";(self.webpackChunkterra_ui=self.webpackChunkterra_ui||[]).push([[2419,45627,85565,3353,5161,45865,85355,3193,4845,46647,85161,38681,15318,40411,18101,38443],{22863:function(e,a,l){var d=l(64836);a.Z=void 0;var m=d(l(67294)),n=d(l(45697)),t=d(l(47166)),i=d(l(17422)),r=t.default.bind(i.default),u={name:n.default.string.isRequired,src:n.default.string,url:n.default.string,version:n.default.string.isRequired},p=function(e){var a=e.src,l=e.name,d=e.url,n=e.version,t=m.default.createElement("a",{className:r("badge"),href:d||"https://www.npmjs.org/package/".concat(l,"/v/").concat(n)},m.default.createElement("span",{className:r("badge-name")},d?"package":"npm"),m.default.createElement("span",{className:r("badge-version")},"v".concat(n))),i=a?m.default.createElement("a",{className:r("badge"),href:a},m.default.createElement("span",{className:r("badge-name")},"github"),m.default.createElement("span",{className:r("badge-version")},"source")):void 0;return m.default.createElement("div",{className:r("badge-container")},t,i)};p.propTypes=u;var x=p;a.Z=x},2419:function(e,a,l){l.r(a),l.d(a,{default:function(){return h}});l(67294);var d=l(81254),m=l(35171),n=["components"];function t(){return t=Object.assign?Object.assign.bind():function(e){for(var a=1;a<arguments.length;a++){var l=arguments[a];for(var d in l)Object.prototype.hasOwnProperty.call(l,d)&&(e[d]=l[d])}return e},t.apply(this,arguments)}function i(e,a){if(null==e)return{};var l,d,m=function(e,a){if(null==e)return{};var l,d,m={},n=Object.keys(e);for(d=0;d<n.length;d++)l=n[d],a.indexOf(l)>=0||(m[l]=e[l]);return m}(e,a);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(d=0;d<n.length;d++)l=n[d],a.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(m[l]=e[l])}return m}var r={},u="wrapper";function p(e){var a=e.components,l=i(e,n);return(0,d.mdx)(u,t({},r,l,{components:a,mdxType:"MDXLayout"}),(0,d.mdx)("h1",{id:"changelog"},"Changelog"),(0,d.mdx)("h2",{id:"unreleased"},"Unreleased"),(0,d.mdx)("h2",{id:"3340---august-2-2023"},"3.34.0 - (August 2, 2023)"),(0,d.mdx)("ul",null,(0,d.mdx)("li",{parentName:"ul"},(0,d.mdx)("p",{parentName:"li"},"Changed"),(0,d.mdx)("ul",{parentName:"li"},(0,d.mdx)("li",{parentName:"ul"},"Locked ",(0,d.mdx)("inlineCode",{parentName:"li"},"uuid")," dependency to ",(0,d.mdx)("inlineCode",{parentName:"li"},"3.4.0")," for maximum consistency across Terra packages."))),(0,d.mdx)("li",{parentName:"ul"},(0,d.mdx)("p",{parentName:"li"},"Added"),(0,d.mdx)("ul",{parentName:"li"},(0,d.mdx)("li",{parentName:"ul"},"Added aria-labelledby attribute to ",(0,d.mdx)("em",{parentName:"li"},"DetailList")," using the list title's id attribute."))),(0,d.mdx)("li",{parentName:"ul"},(0,d.mdx)("p",{parentName:"li"},"Fixed"),(0,d.mdx)("ul",{parentName:"li"},(0,d.mdx)("li",{parentName:"ul"},"Fixed issue related to flexing in ",(0,d.mdx)("em",{parentName:"li"},"DetailList"),".")))),(0,d.mdx)("h2",{id:"3330---july-17-2023"},"3.33.0 - (July 17, 2023)"),(0,d.mdx)("ul",null,(0,d.mdx)("li",{parentName:"ul"},"Changed",(0,d.mdx)("ul",{parentName:"li"},(0,d.mdx)("li",{parentName:"ul"},"Minor dependency version bump")))),(0,d.mdx)("h2",{id:"3320---july-12-2023"},"3.32.0 - (July 12, 2023)"),(0,d.mdx)("ul",null,(0,d.mdx)("li",{parentName:"ul"},(0,d.mdx)("p",{parentName:"li"},"Changed"),(0,d.mdx)("ul",{parentName:"li"},(0,d.mdx)("li",{parentName:"ul"},"Updated ",(0,d.mdx)("em",{parentName:"li"},"DetailList")," to accept null as children."),(0,d.mdx)("li",{parentName:"ul"},"Locked ",(0,d.mdx)("inlineCode",{parentName:"li"},"uuid")," dependency to ",(0,d.mdx)("inlineCode",{parentName:"li"},"7.0.3")," for consistency across Terra packages."))),(0,d.mdx)("li",{parentName:"ul"},(0,d.mdx)("p",{parentName:"li"},"Added"),(0,d.mdx)("ul",{parentName:"li"},(0,d.mdx)("li",{parentName:"ul"},"Added accessibility guide.")))),(0,d.mdx)("h2",{id:"3310---june-22-2023"},"3.31.0 - (June 22, 2023)"),(0,d.mdx)("ul",null,(0,d.mdx)("li",{parentName:"ul"},"Added",(0,d.mdx)("ul",{parentName:"li"},(0,d.mdx)("li",{parentName:"ul"},"Added ",(0,d.mdx)("inlineCode",{parentName:"li"},"isLabelValuePairList")," prop to the DetailList component to support using a description list for label-value pairs."),(0,d.mdx)("li",{parentName:"ul"},"Added aria-labelledby attribute to DetailView ",(0,d.mdx)("inlineCode",{parentName:"li"},"<section>")," using title's id attribute."),(0,d.mdx)("li",{parentName:"ul"},"Added an example terra-graphs for ",(0,d.mdx)("inlineCode",{parentName:"li"},"graph")," prop to terra-clinical-detail-view dev site.")))),(0,d.mdx)("h2",{id:"3300---june-14-2023"},"3.30.0 - (June 14, 2023)"),(0,d.mdx)("ul",null,(0,d.mdx)("li",{parentName:"ul"},(0,d.mdx)("p",{parentName:"li"},"Changed"),(0,d.mdx)("ul",{parentName:"li"},(0,d.mdx)("li",{parentName:"ul"},"Updated the DetailView component to use semantic html elements."))),(0,d.mdx)("li",{parentName:"ul"},(0,d.mdx)("p",{parentName:"li"},"Added"),(0,d.mdx)("ul",{parentName:"li"},(0,d.mdx)("li",{parentName:"ul"},"Added ",(0,d.mdx)("inlineCode",{parentName:"li"},"level")," prop to the DetailView component to allow users to render different heading levels.")))),(0,d.mdx)("h2",{id:"3290---april-21-2023"},"3.29.0 - (April 21, 2023)"),(0,d.mdx)("ul",null,(0,d.mdx)("li",{parentName:"ul"},"Changed",(0,d.mdx)("ul",{parentName:"li"},(0,d.mdx)("li",{parentName:"ul"},"Updated the component examples.")))),(0,d.mdx)("h2",{id:"3280---march-29-2023"},"3.28.0 - (March 29, 2023)"),(0,d.mdx)("ul",null,(0,d.mdx)("li",{parentName:"ul"},"Changed",(0,d.mdx)("ul",{parentName:"li"},(0,d.mdx)("li",{parentName:"ul"},"Updated wdio screenshots.")))),(0,d.mdx)("h2",{id:"3270---july-21-2021"},"3.27.0 - (July 21, 2021)"),(0,d.mdx)("ul",null,(0,d.mdx)("li",{parentName:"ul"},"Changed",(0,d.mdx)("ul",{parentName:"li"},(0,d.mdx)("li",{parentName:"ul"},"Updated Jest command")))),(0,d.mdx)("h2",{id:"3260---march-25-2021"},"3.26.0 - (March 25, 2021)"),(0,d.mdx)("ul",null,(0,d.mdx)("li",{parentName:"ul"},"Changed",(0,d.mdx)("ul",{parentName:"li"},(0,d.mdx)("li",{parentName:"ul"},"Upgrade tests to terra-functional-testing and WebDriverIO v6")))),(0,d.mdx)("h2",{id:"3250---january-5-2021"},"3.25.0 - (January 5, 2021)"),(0,d.mdx)("ul",null,(0,d.mdx)("li",{parentName:"ul"},"Fixed",(0,d.mdx)("ul",{parentName:"li"},(0,d.mdx)("li",{parentName:"ul"},"Fixed broken links in documentation.")))),(0,d.mdx)("h2",{id:"3240---november-10-2020"},"3.24.0 - (November 10, 2020)"),(0,d.mdx)("ul",null,(0,d.mdx)("li",{parentName:"ul"},"Changed",(0,d.mdx)("ul",{parentName:"li"},(0,d.mdx)("li",{parentName:"ul"},"Update wdio tests to remove deprecated Terra.it helpers")))),(0,d.mdx)("h2",{id:"3230---august-25-2020"},"3.23.0 - (August 25, 2020)"),(0,d.mdx)("ul",null,(0,d.mdx)("li",{parentName:"ul"},"Changed",(0,d.mdx)("ul",{parentName:"li"},(0,d.mdx)("li",{parentName:"ul"},"Minor dependency version bump")))),(0,d.mdx)("h2",{id:"3220---august-4-2020"},"3.22.0 - (August 4, 2020)"),(0,d.mdx)("ul",null,(0,d.mdx)("li",{parentName:"ul"},"Changed",(0,d.mdx)("ul",{parentName:"li"},(0,d.mdx)("li",{parentName:"ul"},"updated ",(0,d.mdx)("inlineCode",{parentName:"li"},"master")," references to ",(0,d.mdx)("inlineCode",{parentName:"li"},"main"),"."),(0,d.mdx)("li",{parentName:"ul"},"Update changelog formatting")))),(0,d.mdx)("h2",{id:"3210---june-16-2020"},"3.21.0 - (June 16, 2020)"),(0,d.mdx)("ul",null,(0,d.mdx)("li",{parentName:"ul"},"Changed",(0,d.mdx)("ul",{parentName:"li"},(0,d.mdx)("li",{parentName:"ul"},"Specify divider display to prevent global styles from overriding/hiding it")))),(0,d.mdx)("h2",{id:"3200---june-9-2020"},"3.20.0 - (June 9, 2020)"),(0,d.mdx)("ul",null,(0,d.mdx)("li",{parentName:"ul"},"Changed",(0,d.mdx)("ul",{parentName:"li"},(0,d.mdx)("li",{parentName:"ul"},"Apply themes by context and directly include packaged themes.")))),(0,d.mdx)("h2",{id:"3190---april-28-2020"},"3.19.0 - (April 28, 2020)"),(0,d.mdx)("ul",null,(0,d.mdx)("li",{parentName:"ul"},(0,d.mdx)("p",{parentName:"li"},"Added"),(0,d.mdx)("ul",{parentName:"li"},(0,d.mdx)("li",{parentName:"ul"},"Added ",(0,d.mdx)("inlineCode",{parentName:"li"},"directory")," as a sub attribute to the ",(0,d.mdx)("inlineCode",{parentName:"li"},"repository")," attribute in package.json"))),(0,d.mdx)("li",{parentName:"ul"},(0,d.mdx)("p",{parentName:"li"},"Removed"),(0,d.mdx)("ul",{parentName:"li"},(0,d.mdx)("li",{parentName:"ul"},'Removed "View Component Source Code" from docs in favour of source code badge')))),(0,d.mdx)("h2",{id:"3180---april-14-2020"},"3.18.0 - (April 14, 2020)"),(0,d.mdx)("ul",null,(0,d.mdx)("li",{parentName:"ul"},"Changed",(0,d.mdx)("ul",{parentName:"li"},(0,d.mdx)("li",{parentName:"ul"},"Update wdio test configuration to use root wdio config")))),(0,d.mdx)("h2",{id:"3170---march-31-2020"},"3.17.0 - (March 31, 2020)"),(0,d.mdx)("ul",null,(0,d.mdx)("li",{parentName:"ul"},"Added",(0,d.mdx)("ul",{parentName:"li"},(0,d.mdx)("li",{parentName:"ul"},"Added wdio screenshots for clinical-lowlight-theme")))),(0,d.mdx)("h2",{id:"3160---march-17-2020"},"3.16.0 - (March 17, 2020)"),(0,d.mdx)("ul",null,(0,d.mdx)("li",{parentName:"ul"},"Changed",(0,d.mdx)("ul",{parentName:"li"},(0,d.mdx)("li",{parentName:"ul"},"Update docs to use MDX syntax")))),(0,d.mdx)("h2",{id:"3150---february-18-2020"},"3.15.0 - (February 18, 2020)"),(0,d.mdx)("ul",null,(0,d.mdx)("li",{parentName:"ul"},"Added",(0,d.mdx)("ul",{parentName:"li"},(0,d.mdx)("li",{parentName:"ul"},"Added clinical-lowlight-theme theming files")))),(0,d.mdx)("h2",{id:"3140---january-28-2020"},"3.14.0 - (January 28, 2020)"),(0,d.mdx)("ul",null,(0,d.mdx)("li",{parentName:"ul"},"Changed",(0,d.mdx)("ul",{parentName:"li"},(0,d.mdx)("li",{parentName:"ul"},"Update copyright to include 2020")))),(0,d.mdx)("h2",{id:"3130---january-22-2020"},"3.13.0 - (January 22, 2020)"),(0,d.mdx)("ul",null,(0,d.mdx)("li",{parentName:"ul"},"Added",(0,d.mdx)("ul",{parentName:"li"},(0,d.mdx)("li",{parentName:"ul"},"Added orion-fusion-theme and generated the respective reference wdio screenshots.")))),(0,d.mdx)("h2",{id:"3120---january-7-2020"},"3.12.0 - (January 7, 2020)"),(0,d.mdx)("ul",null,(0,d.mdx)("li",{parentName:"ul"},"Changed",(0,d.mdx)("ul",{parentName:"li"},(0,d.mdx)("li",{parentName:"ul"},"Minor dependency updates")))),(0,d.mdx)("h2",{id:"3110---october-30-2019"},"3.11.0 - (October 30, 2019)"),(0,d.mdx)("ul",null,(0,d.mdx)("li",{parentName:"ul"},"Changed",(0,d.mdx)("ul",{parentName:"li"},(0,d.mdx)("li",{parentName:"ul"},"Update docs to use mdx syntax")))),(0,d.mdx)("h2",{id:"3100---september-26-2019"},"3.10.0 - (September 26, 2019)"),(0,d.mdx)("ul",null,(0,d.mdx)("li",{parentName:"ul"},"Changed",(0,d.mdx)("ul",{parentName:"li"},(0,d.mdx)("li",{parentName:"ul"},"Minor dependency updates")))),(0,d.mdx)("h2",{id:"390---september-19-2019"},"3.9.0 - (September 19, 2019)"),(0,d.mdx)("ul",null,(0,d.mdx)("li",{parentName:"ul"},"Changed",(0,d.mdx)("ul",{parentName:"li"},(0,d.mdx)("li",{parentName:"ul"},"Convert SCSS files to .module.scss")))),(0,d.mdx)("h2",{id:"380---september-6-2019"},"3.8.0 - (September 6, 2019)"),(0,d.mdx)("ul",null,(0,d.mdx)("li",{parentName:"ul"},"Changed",(0,d.mdx)("ul",{parentName:"li"},(0,d.mdx)("li",{parentName:"ul"},"Removed inline styles from dev site components."),(0,d.mdx)("li",{parentName:"ul"},"Replaced Object.assign syntax with Object spread syntax"),(0,d.mdx)("li",{parentName:"ul"},"Add comments for ESlint 6"),(0,d.mdx)("li",{parentName:"ul"},"Cleaned up imports in examples and test files"),(0,d.mdx)("li",{parentName:"ul"},"Removed clinical-item-display as a dependency.")))),(0,d.mdx)("h2",{id:"370---august-14-2019"},"3.7.0 - (August 14, 2019)"),(0,d.mdx)("ul",null,(0,d.mdx)("li",{parentName:"ul"},"Changed",(0,d.mdx)("ul",{parentName:"li"},(0,d.mdx)("li",{parentName:"ul"},"Updated package.json test scripts")))),(0,d.mdx)("h2",{id:"360---july-16-2019"},"3.6.0 - (July 16, 2019)"),(0,d.mdx)("ul",null,(0,d.mdx)("li",{parentName:"ul"},(0,d.mdx)("p",{parentName:"li"},"Changed"),(0,d.mdx)("ul",{parentName:"li"},(0,d.mdx)("li",{parentName:"ul"},"Replaced inline stylings for terra-dev-site components with .scss files"),(0,d.mdx)("li",{parentName:"ul"},"Update wdio specs to use Terra.describeViewports"))),(0,d.mdx)("li",{parentName:"ul"},(0,d.mdx)("p",{parentName:"li"},"Fixed"),(0,d.mdx)("ul",{parentName:"li"},(0,d.mdx)("li",{parentName:"ul"},"Added max-width to DetailListItem resolving IE10 wrapping issue for label-value-views inside of detail-view-list.")))),(0,d.mdx)("h2",{id:"350---june-11-2019"},"3.5.0 - (June 11, 2019)"),(0,d.mdx)("ul",null,(0,d.mdx)("li",{parentName:"ul"},"Removed",(0,d.mdx)("ul",{parentName:"li"},(0,d.mdx)("li",{parentName:"ul"},"Removed node_modules from .npmignore")))),(0,d.mdx)("h2",{id:"340---march-26-2019"},"3.4.0 - (March 26, 2019)"),(0,d.mdx)("ul",null,(0,d.mdx)("li",{parentName:"ul"},(0,d.mdx)("p",{parentName:"li"},"Changed"),(0,d.mdx)("ul",{parentName:"li"},(0,d.mdx)("li",{parentName:"ul"},"Update react/react-dom peer-dependency to latest stable minor release"))),(0,d.mdx)("li",{parentName:"ul"},(0,d.mdx)("p",{parentName:"li"},"Removed"),(0,d.mdx)("ul",{parentName:"li"},(0,d.mdx)("li",{parentName:"ul"},"Removed peer dependency on terra-base"),(0,d.mdx)("li",{parentName:"ul"},"Removed baseStyles import from terra-base")))),(0,d.mdx)("h2",{id:"330---february-26-2019"},"3.3.0 - (February 26, 2019)"),(0,d.mdx)("ul",null,(0,d.mdx)("li",{parentName:"ul"},"Changed",(0,d.mdx)("ul",{parentName:"li"},(0,d.mdx)("li",{parentName:"ul"},"Minor dependency updates")))),(0,d.mdx)("h2",{id:"320---february-5-2019"},"3.2.0 - (February 5, 2019)"),(0,d.mdx)("ul",null,(0,d.mdx)("li",{parentName:"ul"},"Changed",(0,d.mdx)("ul",{parentName:"li"},(0,d.mdx)("li",{parentName:"ul"},"Minor dependency updates")))),(0,d.mdx)("h2",{id:"310---january-22-2019"},"3.1.0 - (January 22, 2019)"),(0,d.mdx)("ul",null,(0,d.mdx)("li",{parentName:"ul"},"Changed",(0,d.mdx)("ul",{parentName:"li"},(0,d.mdx)("li",{parentName:"ul"},"Dependency updates")))),(0,d.mdx)("h2",{id:"300---january-17-2019"},"3.0.0 - (January 17, 2019)"),(0,d.mdx)("ul",null,(0,d.mdx)("li",{parentName:"ul"},(0,d.mdx)("p",{parentName:"li"},"Breaking Change"),(0,d.mdx)("ul",{parentName:"li"},(0,d.mdx)("li",{parentName:"ul"},"Renamed theming variables to match new lint standards"))),(0,d.mdx)("li",{parentName:"ul"},(0,d.mdx)("p",{parentName:"li"},"Added"),(0,d.mdx)("ul",{parentName:"li"},(0,d.mdx)("li",{parentName:"ul"},"Changelog dev site doc page")))),(0,d.mdx)("h2",{id:"2170---november-21-2018"},"2.17.0 - (November 21, 2018)"),(0,d.mdx)("ul",null,(0,d.mdx)("li",{parentName:"ul"},"Changed",(0,d.mdx)("ul",{parentName:"li"},(0,d.mdx)("li",{parentName:"ul"},"Minor dependency updates")))),(0,d.mdx)("h2",{id:"2160---october-8-2018"},"2.16.0 - (October 8, 2018)"),(0,d.mdx)("ul",null,(0,d.mdx)("li",{parentName:"ul"},"Changed",(0,d.mdx)("ul",{parentName:"li"},(0,d.mdx)("li",{parentName:"ul"},"Minor dependency updates")))),(0,d.mdx)("h2",{id:"2150---october-2-2018"},"2.15.0 - (October 2, 2018)"),(0,d.mdx)("ul",null,(0,d.mdx)("li",{parentName:"ul"},"Changed",(0,d.mdx)("ul",{parentName:"li"},(0,d.mdx)("li",{parentName:"ul"},"Formatting changes per eslint v5 update")))),(0,d.mdx)("h2",{id:"2140---september-5-2018"},"2.14.0 - (September 5, 2018)"),(0,d.mdx)("ul",null,(0,d.mdx)("li",{parentName:"ul"},"Changed",(0,d.mdx)("ul",{parentName:"li"},(0,d.mdx)("li",{parentName:"ul"},"Bumped minimum react peerDependency version from ^16.2.0 to ^16.4.2"),(0,d.mdx)("li",{parentName:"ul"},"Bumped minimum react-dom peerDependency version from ^16.2.0 to ^16.4.2")))),(0,d.mdx)("h2",{id:"2130---august-30-2018"},"2.13.0 - (August 30, 2018)"),(0,d.mdx)("ul",null,(0,d.mdx)("li",{parentName:"ul"},"Changed",(0,d.mdx)("ul",{parentName:"li"},(0,d.mdx)("li",{parentName:"ul"},"Minor dependency updates")))),(0,d.mdx)("h2",{id:"2120---august-1-2018"},"2.12.0 - (August 1, 2018)"),(0,d.mdx)("ul",null,(0,d.mdx)("li",{parentName:"ul"},"Changed",(0,d.mdx)("ul",{parentName:"li"},(0,d.mdx)("li",{parentName:"ul"},"Minor updates")))),(0,d.mdx)("h2",{id:"2111---july-25-2018"},"2.11.1 - (July 25, 2018)"),(0,d.mdx)("ul",null,(0,d.mdx)("li",{parentName:"ul"},"Changed",(0,d.mdx)("ul",{parentName:"li"},(0,d.mdx)("li",{parentName:"ul"},"Patch release")))),(0,d.mdx)("h2",{id:"2110---july-25-2018"},"2.11.0 - (July 25, 2018)"),(0,d.mdx)("ul",null,(0,d.mdx)("li",{parentName:"ul"},"Changed",(0,d.mdx)("ul",{parentName:"li"},(0,d.mdx)("li",{parentName:"ul"},"Minor updates")))),(0,d.mdx)("h2",{id:"2100---july-17-2018"},"2.10.0 - (July 17, 2018)"),(0,d.mdx)("ul",null,(0,d.mdx)("li",{parentName:"ul"},"Changed",(0,d.mdx)("ul",{parentName:"li"},(0,d.mdx)("li",{parentName:"ul"},"Minor updates")))),(0,d.mdx)("h2",{id:"290---july-3-2018"},"2.9.0 - (July 3, 2018)"),(0,d.mdx)("ul",null,(0,d.mdx)("li",{parentName:"ul"},"Changed",(0,d.mdx)("ul",{parentName:"li"},(0,d.mdx)("li",{parentName:"ul"},"Minor updates")))),(0,d.mdx)("h2",{id:"280---june-28-2018"},"2.8.0 - (June 28, 2018)"),(0,d.mdx)("ul",null,(0,d.mdx)("li",{parentName:"ul"},(0,d.mdx)("p",{parentName:"li"},"Added"),(0,d.mdx)("ul",{parentName:"li"},(0,d.mdx)("li",{parentName:"ul"},"Added word-wrap property to DetailView titles and subtitles"),(0,d.mdx)("li",{parentName:"ul"},"Added test page for overflow text"))),(0,d.mdx)("li",{parentName:"ul"},(0,d.mdx)("p",{parentName:"li"},"Fixed"),(0,d.mdx)("ul",{parentName:"li"},(0,d.mdx)("li",{parentName:"ul"},"Lint in doc page")))),(0,d.mdx)("h2",{id:"270---june-19-2018"},"2.7.0 - (June 19, 2018)"),(0,d.mdx)("ul",null,(0,d.mdx)("li",{parentName:"ul"},"Changed",(0,d.mdx)("ul",{parentName:"li"},(0,d.mdx)("li",{parentName:"ul"},"Minor updates")))),(0,d.mdx)("h2",{id:"260---june-12-2018"},"2.6.0 - (June 12, 2018)"),(0,d.mdx)("ul",null,(0,d.mdx)("li",{parentName:"ul"},"Changed",(0,d.mdx)("ul",{parentName:"li"},(0,d.mdx)("li",{parentName:"ul"},"Conform to eslint updates"),(0,d.mdx)("li",{parentName:"ul"},"Added theming variables in Detail View")))),(0,d.mdx)("h2",{id:"250---may-30-2018"},"2.5.0 - (May 30, 2018)"),(0,d.mdx)("ul",null,(0,d.mdx)("li",{parentName:"ul"},"Changed",(0,d.mdx)("ul",{parentName:"li"},(0,d.mdx)("li",{parentName:"ul"},"Moved examples to src")))),(0,d.mdx)("h2",{id:"240---may-22-2018"},"2.4.0 - (May 22, 2018)"),(0,d.mdx)("ul",null,(0,d.mdx)("li",{parentName:"ul"},"Changed",(0,d.mdx)("ul",{parentName:"li"},(0,d.mdx)("li",{parentName:"ul"},"Minor dependency updates")))),(0,d.mdx)("h2",{id:"230---may-1-2018"},"2.3.0 - (May 1, 2018)"),(0,d.mdx)("ul",null,(0,d.mdx)("li",{parentName:"ul"},(0,d.mdx)("p",{parentName:"li"},"Added"),(0,d.mdx)("ul",{parentName:"li"},(0,d.mdx)("li",{parentName:"ul"},'Added new props "secondaryTitles", "accessory", and "isSmallerTitles"'))),(0,d.mdx)("li",{parentName:"ul"},(0,d.mdx)("p",{parentName:"li"},"Changed"),(0,d.mdx)("ul",{parentName:"li"},(0,d.mdx)("li",{parentName:"ul"},"Updated spacing & text sizes"),(0,d.mdx)("li",{parentName:"ul"},"Updated empty/none default prop values to undefined")))),(0,d.mdx)("h2",{id:"220---march-27-2018"},"2.2.0 - (March 27, 2018)"),(0,d.mdx)("ul",null,(0,d.mdx)("li",{parentName:"ul"},"Changed",(0,d.mdx)("ul",{parentName:"li"},(0,d.mdx)("li",{parentName:"ul"},"Updated text sizes & colors")))),(0,d.mdx)("h2",{id:"210---march-6-2018"},"2.1.0 - (March 6, 2018)"),(0,d.mdx)("ul",null,(0,d.mdx)("li",{parentName:"ul"},"Changed",(0,d.mdx)("ul",{parentName:"li"},(0,d.mdx)("li",{parentName:"ul"},"Minor dependency updates")))),(0,d.mdx)("h2",{id:"200---february-19-2018"},"2.0.0 - (February 19, 2018)"),(0,d.mdx)("ul",null,(0,d.mdx)("li",{parentName:"ul"},"Changed",(0,d.mdx)("ul",{parentName:"li"},(0,d.mdx)("li",{parentName:"ul"},"Update to React 16")))),(0,d.mdx)("h2",{id:"150---february-19-2018"},"1.5.0 - (February 19, 2018)"),(0,d.mdx)("ul",null,(0,d.mdx)("li",{parentName:"ul"},"Changed",(0,d.mdx)("ul",{parentName:"li"},(0,d.mdx)("li",{parentName:"ul"},"Minor dependency updates")))),(0,d.mdx)("h2",{id:"140---september-26-2017"},"1.4.0 - (September 26, 2017)"),(0,d.mdx)("ul",null,(0,d.mdx)("li",{parentName:"ul"},"Changed",(0,d.mdx)("ul",{parentName:"li"},(0,d.mdx)("li",{parentName:"ul"},"Remove stylelint-disable selector-class-pattern")))),(0,d.mdx)("h2",{id:"130---september-1-2017"},"1.3.0 - (September 1, 2017)"),(0,d.mdx)("ul",null,(0,d.mdx)("li",{parentName:"ul"},"Changed",(0,d.mdx)("ul",{parentName:"li"},(0,d.mdx)("li",{parentName:"ul"},"Change dependency on terra-base to v2.0.0"),(0,d.mdx)("li",{parentName:"ul"},"Update nightwatch tests and test scripts.")))),(0,d.mdx)("h2",{id:"120---august-16-2017"},"1.2.0 - (August 16, 2017)"),(0,d.mdx)("ul",null,(0,d.mdx)("li",{parentName:"ul"},(0,d.mdx)("p",{parentName:"li"},"Changed"),(0,d.mdx)("ul",{parentName:"li"},(0,d.mdx)("li",{parentName:"ul"},"Change data-class to be name spaced"))),(0,d.mdx)("li",{parentName:"ul"},(0,d.mdx)("p",{parentName:"li"},"Fixes"),(0,d.mdx)("ul",{parentName:"li"},(0,d.mdx)("li",{parentName:"ul"},"Fixed divider rendering for when graphic is not present which caused double dividers"),(0,d.mdx)("li",{parentName:"ul"},"Fixed styling that applied padding-bottom on all children")))),(0,d.mdx)("h2",{id:"111---july-27-2017"},"1.1.1 - (July 27, 2017)"),(0,d.mdx)("ul",null,(0,d.mdx)("li",{parentName:"ul"},"Changed",(0,d.mdx)("ul",{parentName:"li"},(0,d.mdx)("li",{parentName:"ul"},"Updated spacing around react-docgen comments")))),(0,d.mdx)("h2",{id:"110---july-18-2017"},"1.1.0 - (July 18, 2017)"),(0,d.mdx)("ul",null,(0,d.mdx)("li",{parentName:"ul"},(0,d.mdx)("p",{parentName:"li"},"Changed"),(0,d.mdx)("ul",{parentName:"li"},(0,d.mdx)("li",{parentName:"ul"},"Converted component to use CSS modules"),(0,d.mdx)("li",{parentName:"ul"},"Updated nightwatch test scripts"))),(0,d.mdx)("li",{parentName:"ul"},(0,d.mdx)("p",{parentName:"li"},"Removed"),(0,d.mdx)("ul",{parentName:"li"},(0,d.mdx)("li",{parentName:"ul"},"Removed nightwatch.config file")))),(0,d.mdx)("h2",{id:"100---june-28-2017"},"1.0.0 - (June 28, 2017)"),(0,d.mdx)("p",null,"Initial stable release"))}p.isMDXComponent=!0;var x=["components"];function o(){return o=Object.assign?Object.assign.bind():function(e){for(var a=1;a<arguments.length;a++){var l=arguments[a];for(var d in l)Object.prototype.hasOwnProperty.call(l,d)&&(e[d]=l[d])}return e},o.apply(this,arguments)}function s(e,a){if(null==e)return{};var l,d,m=function(e,a){if(null==e)return{};var l,d,m={},n=Object.keys(e);for(d=0;d<n.length;d++)l=n[d],a.indexOf(l)>=0||(m[l]=e[l]);return m}(e,a);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(d=0;d<n.length;d++)l=n[d],a.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(m[l]=e[l])}return m}var N={},c="wrapper";function h(e){var a=e.components,l=s(e,x);return(0,d.mdx)(c,o({},N,l,{components:a,mdxType:"MDXLayout"}),(0,d.mdx)(m.C,{mdxType:"Badge"}),(0,d.mdx)(p,{mdxType:"ChangeLog"}))}h.isMDXComponent=!0},35171:function(e,a,l){l.d(a,{C:function(){return n}});var d=l(67294),m=l(22863),n=function(e){var a=e.url;return d.createElement(m.Z,{src:"https://github.com/cerner/terra-clinical/tree/main/packages/terra-clinical-detail-view",name:"terra-clinical-detail-view",version:"3.34.0",url:a})}},17422:function(e,a,l){l.r(a),a.default={badge:"Badges-module__badge___vex-+","badge-container":"Badges-module__badge-container___B13Mv","badge-name":"Badges-module__badge-name___jkN0m","badge-version":"Badges-module__badge-version___agZ+P"}}}]);