"use strict";(self.webpackChunkterra_ui=self.webpackChunkterra_ui||[]).push([[93221,45627,85565,3353,5161,45865,85355,3193,4845,46647,85161,38681,15318,40411,18101,38443,11264,34319,20116,33609],{22863:function(e,a,d){var m=d(64836);a.Z=void 0;var l=m(d(67294)),n=m(d(45697)),r=m(d(47166)),t=m(d(17422)),i=r.default.bind(t.default),u={name:n.default.string.isRequired,src:n.default.string,url:n.default.string,version:n.default.string.isRequired},p=function(e){var a=e.src,d=e.name,m=e.url,n=e.version,r=l.default.createElement("a",{className:i("badge"),href:m||"https://www.npmjs.org/package/".concat(d,"/v/").concat(n)},l.default.createElement("span",{className:i("badge-name")},m?"package":"npm"),l.default.createElement("span",{className:i("badge-version")},"v".concat(n))),t=a?l.default.createElement("a",{className:i("badge"),href:a},l.default.createElement("span",{className:i("badge-name")},"github"),l.default.createElement("span",{className:i("badge-version")},"source")):void 0;return l.default.createElement("div",{className:i("badge-container")},r,t)};p.propTypes=u;var x=p;a.Z=x},93221:function(e,a,d){d.r(a),d.d(a,{default:function(){return h}});d(67294);var m=d(81254),l=d(10581),n=["components"];function r(){return r=Object.assign?Object.assign.bind():function(e){for(var a=1;a<arguments.length;a++){var d=arguments[a];for(var m in d)Object.prototype.hasOwnProperty.call(d,m)&&(e[m]=d[m])}return e},r.apply(this,arguments)}function t(e,a){if(null==e)return{};var d,m,l=function(e,a){if(null==e)return{};var d,m,l={},n=Object.keys(e);for(m=0;m<n.length;m++)d=n[m],a.indexOf(d)>=0||(l[d]=e[d]);return l}(e,a);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(m=0;m<n.length;m++)d=n[m],a.indexOf(d)>=0||Object.prototype.propertyIsEnumerable.call(e,d)&&(l[d]=e[d])}return l}var i={},u="wrapper";function p(e){var a=e.components,d=t(e,n);return(0,m.mdx)(u,r({},i,d,{components:a,mdxType:"MDXLayout"}),(0,m.mdx)("h1",{id:"changelog"},"Changelog"),(0,m.mdx)("h2",{id:"unreleased"},"Unreleased"),(0,m.mdx)("h2",{id:"3430---december-18-2023"},"3.43.0 - (December 18, 2023)"),(0,m.mdx)("ul",null,(0,m.mdx)("li",{parentName:"ul"},"Changed",(0,m.mdx)("ul",{parentName:"li"},(0,m.mdx)("li",{parentName:"ul"},"Minor dependency version bump.")))),(0,m.mdx)("h2",{id:"3421---december-5-2023"},"3.42.1 - (December 5, 2023)"),(0,m.mdx)("ul",null,(0,m.mdx)("li",{parentName:"ul"},"Fixed",(0,m.mdx)("ul",{parentName:"li"},(0,m.mdx)("li",{parentName:"ul"},"Fixed XFC initialization for the Embedded Content Consumer examples.")))),(0,m.mdx)("h2",{id:"3420---december-1-2023"},"3.42.0 - (December 1, 2023)"),(0,m.mdx)("ul",null,(0,m.mdx)("li",{parentName:"ul"},"Changed",(0,m.mdx)("ul",{parentName:"li"},(0,m.mdx)("li",{parentName:"ul"},"Minor dependency version bump")))),(0,m.mdx)("h2",{id:"3410---november-29-2023"},"3.41.0 - (November 29, 2023)"),(0,m.mdx)("ul",null,(0,m.mdx)("li",{parentName:"ul"},"Added",(0,m.mdx)("ul",{parentName:"li"},(0,m.mdx)("li",{parentName:"ul"},"Added documentation relating to accessibility guidance for Embedded Content Consumer props.")))),(0,m.mdx)("h2",{id:"3400---november-9-2023"},"3.40.0 - (November 9, 2023)"),(0,m.mdx)("ul",null,(0,m.mdx)("li",{parentName:"ul"},"Added",(0,m.mdx)("ul",{parentName:"li"},(0,m.mdx)("li",{parentName:"ul"},"Added screenreader support to announce context of embedded iframe content."),(0,m.mdx)("li",{parentName:"ul"},"Added visual focus indicator on the iframe when the content doesn't have any interactable element, iframe is scrollable, and content is scrollable for keyboard only users.")))),(0,m.mdx)("h2",{id:"3390---october-3-2023"},"3.39.0 - (October 3, 2023)"),(0,m.mdx)("ul",null,(0,m.mdx)("li",{parentName:"ul"},(0,m.mdx)("p",{parentName:"li"},"Added"),(0,m.mdx)("ul",{parentName:"li"},(0,m.mdx)("li",{parentName:"ul"},"Added ",(0,m.mdx)("inlineCode",{parentName:"li"},"title")," prop for consumers to set the title of the embedded content in the iframe."))),(0,m.mdx)("li",{parentName:"ul"},(0,m.mdx)("p",{parentName:"li"},"Changed"),(0,m.mdx)("ul",{parentName:"li"},(0,m.mdx)("li",{parentName:"ul"},"Deprecated ",(0,m.mdx)("inlineCode",{parentName:"li"},"options.iframeAttrs.title")," in favor of the new ",(0,m.mdx)("inlineCode",{parentName:"li"},"title")," prop.")))),(0,m.mdx)("h2",{id:"3380---september-26-2023"},"3.38.0 - (September 26, 2023)"),(0,m.mdx)("ul",null,(0,m.mdx)("li",{parentName:"ul"},"Updated",(0,m.mdx)("ul",{parentName:"li"},(0,m.mdx)("li",{parentName:"ul"},"Updated documentation for ",(0,m.mdx)("inlineCode",{parentName:"li"},"options")," prop to include ",(0,m.mdx)("inlineCode",{parentName:"li"},"srcdoc")," iframe atttribute for inline html content in iframe.")))),(0,m.mdx)("h2",{id:"3370---july-31-2023"},"3.37.0 - (July 31, 2023)"),(0,m.mdx)("ul",null,(0,m.mdx)("li",{parentName:"ul"},"Changed",(0,m.mdx)("ul",{parentName:"li"},(0,m.mdx)("li",{parentName:"ul"},"Minor dependency version bump")))),(0,m.mdx)("h2",{id:"3360---february-14-2023"},"3.36.0 - (February 14, 2023)"),(0,m.mdx)("ul",null,(0,m.mdx)("li",{parentName:"ul"},"Changed",(0,m.mdx)("ul",{parentName:"li"},(0,m.mdx)("li",{parentName:"ul"},"Updated WDIO screenshots due to webpack-config-terra and\nterra-functional-testing upgrade.")))),(0,m.mdx)("h2",{id:"3350---march-15-2022"},"3.35.0 - (March 15, 2022)"),(0,m.mdx)("ul",null,(0,m.mdx)("li",{parentName:"ul"},"Added",(0,m.mdx)("ul",{parentName:"li"},(0,m.mdx)("li",{parentName:"ul"},"Migrate docs to terra-framework-docs.")))),(0,m.mdx)("h2",{id:"3340---september-20-2021"},"3.34.0 - (September 20, 2021)"),(0,m.mdx)("ul",null,(0,m.mdx)("li",{parentName:"ul"},"Changed",(0,m.mdx)("ul",{parentName:"li"},(0,m.mdx)("li",{parentName:"ul"},"Updated WDIO screenshots due to webpack-config-terra sass upgrade."),(0,m.mdx)("li",{parentName:"ul"},"Updated WDIO snapshots due to terra-functional-testing v2 upgrade.")))),(0,m.mdx)("h2",{id:"3330---june-8-2021"},"3.33.0 - (June 8, 2021)"),(0,m.mdx)("ul",null,(0,m.mdx)("li",{parentName:"ul"},"Changed",(0,m.mdx)("ul",{parentName:"li"},(0,m.mdx)("li",{parentName:"ul"},"Minor dependency version bump")))),(0,m.mdx)("h2",{id:"3320---april-6-2021"},"3.32.0 - (April 6, 2021)"),(0,m.mdx)("ul",null,(0,m.mdx)("li",{parentName:"ul"},"Changed",(0,m.mdx)("ul",{parentName:"li"},(0,m.mdx)("li",{parentName:"ul"},"Updated Jest command")))),(0,m.mdx)("h2",{id:"3310---march-9-2021"},"3.31.0 - (March 9, 2021)"),(0,m.mdx)("ul",null,(0,m.mdx)("li",{parentName:"ul"},"Changed",(0,m.mdx)("ul",{parentName:"li"},(0,m.mdx)("li",{parentName:"ul"},"Updated to terra-functional-testing")))),(0,m.mdx)("h2",{id:"3300---january-5-2021"},"3.30.0 - (January 5, 2021)"),(0,m.mdx)("ul",null,(0,m.mdx)("li",{parentName:"ul"},"Fixed",(0,m.mdx)("ul",{parentName:"li"},(0,m.mdx)("li",{parentName:"ul"},"Fixed broken links in documentation.")))),(0,m.mdx)("h2",{id:"3290---december-8-2020"},"3.29.0 - (December 8, 2020)"),(0,m.mdx)("ul",null,(0,m.mdx)("li",{parentName:"ul"},"Changed",(0,m.mdx)("ul",{parentName:"li"},(0,m.mdx)("li",{parentName:"ul"},"Update wdio tests to remove deprecated Terra.it helpers")))),(0,m.mdx)("h2",{id:"3280---november-10-2020"},"3.28.0 - (November 10, 2020)"),(0,m.mdx)("ul",null,(0,m.mdx)("li",{parentName:"ul"},"Fixed",(0,m.mdx)("ul",{parentName:"li"},(0,m.mdx)("li",{parentName:"ul"},"Fixed build failures due to the react/sort-comp rule")))),(0,m.mdx)("h2",{id:"3270---august-4-2020"},"3.27.0 - (August 4, 2020)"),(0,m.mdx)("ul",null,(0,m.mdx)("li",{parentName:"ul"},"Changed",(0,m.mdx)("ul",{parentName:"li"},(0,m.mdx)("li",{parentName:"ul"},"Updated Changelog format")))),(0,m.mdx)("h2",{id:"3260---july-14-2020"},"3.26.0 - (July 14, 2020)"),(0,m.mdx)("ul",null,(0,m.mdx)("li",{parentName:"ul"},"Changed",(0,m.mdx)("ul",{parentName:"li"},(0,m.mdx)("li",{parentName:"ul"},"updated ",(0,m.mdx)("inlineCode",{parentName:"li"},"master")," references to ",(0,m.mdx)("inlineCode",{parentName:"li"},"main"),"."),(0,m.mdx)("li",{parentName:"ul"},"Remove unused disable eslint directives")))),(0,m.mdx)("h2",{id:"3250---may-19-2020"},"3.25.0 - (May 19, 2020)"),(0,m.mdx)("ul",null,(0,m.mdx)("li",{parentName:"ul"},"Fixed",(0,m.mdx)("ul",{parentName:"li"},(0,m.mdx)("li",{parentName:"ul"},"Spacing typo in doc")))),(0,m.mdx)("h2",{id:"3240---april-28-2020"},"3.24.0 - (April 28, 2020)"),(0,m.mdx)("ul",null,(0,m.mdx)("li",{parentName:"ul"},(0,m.mdx)("p",{parentName:"li"},"Added"),(0,m.mdx)("ul",{parentName:"li"},(0,m.mdx)("li",{parentName:"ul"},"Added ",(0,m.mdx)("inlineCode",{parentName:"li"},"directory")," as a sub attribute to the ",(0,m.mdx)("inlineCode",{parentName:"li"},"repository")," attribute in package.json"))),(0,m.mdx)("li",{parentName:"ul"},(0,m.mdx)("p",{parentName:"li"},"Changed"),(0,m.mdx)("ul",{parentName:"li"},(0,m.mdx)("li",{parentName:"ul"},"Update wdio test configuration to use root wdio config"))),(0,m.mdx)("li",{parentName:"ul"},(0,m.mdx)("p",{parentName:"li"},"Removed"),(0,m.mdx)("ul",{parentName:"li"},(0,m.mdx)("li",{parentName:"ul"},'Removed "View Component Source Code" from docs in favour of source code badge')))),(0,m.mdx)("h2",{id:"3230---march-31-2020"},"3.23.0 - (March 31, 2020)"),(0,m.mdx)("ul",null,(0,m.mdx)("li",{parentName:"ul"},"Added",(0,m.mdx)("ul",{parentName:"li"},(0,m.mdx)("li",{parentName:"ul"},"Added clinical-lowlight-theme wdio screenshots")))),(0,m.mdx)("h2",{id:"3220---march-17-2020"},"3.22.0 - (March 17, 2020)"),(0,m.mdx)("ul",null,(0,m.mdx)("li",{parentName:"ul"},"Changed",(0,m.mdx)("ul",{parentName:"li"},(0,m.mdx)("li",{parentName:"ul"},"Update docs to use MDX syntax")))),(0,m.mdx)("h2",{id:"3210---february-18-2020"},"3.21.0 - (February 18, 2020)"),(0,m.mdx)("ul",null,(0,m.mdx)("li",{parentName:"ul"},"Added",(0,m.mdx)("ul",{parentName:"li"},(0,m.mdx)("li",{parentName:"ul"},"Added generated-themes to .npmignore")))),(0,m.mdx)("h2",{id:"3200---january-28-2020"},"3.20.0 - (January 28, 2020)"),(0,m.mdx)("ul",null,(0,m.mdx)("li",{parentName:"ul"},"Changed",(0,m.mdx)("ul",{parentName:"li"},(0,m.mdx)("li",{parentName:"ul"},"Update copyright to include 2020")))),(0,m.mdx)("h2",{id:"3190---december-10-2019"},"3.19.0 - (December 10, 2019)"),(0,m.mdx)("ul",null,(0,m.mdx)("li",{parentName:"ul"},"Added",(0,m.mdx)("ul",{parentName:"li"},(0,m.mdx)("li",{parentName:"ul"},'Added reference wdio screenshots for "orion-fusion-theme".')))),(0,m.mdx)("h2",{id:"3180---november-7-2019"},"3.18.0 - (November 7, 2019)"),(0,m.mdx)("ul",null,(0,m.mdx)("li",{parentName:"ul"},"Changed",(0,m.mdx)("ul",{parentName:"li"},(0,m.mdx)("li",{parentName:"ul"},"Resolved lint warnings for multiple empty lines")))),(0,m.mdx)("h2",{id:"3170---october-16-2019"},"3.17.0 - (October 16, 2019)"),(0,m.mdx)("ul",null,(0,m.mdx)("li",{parentName:"ul"},"Changed",(0,m.mdx)("ul",{parentName:"li"},(0,m.mdx)("li",{parentName:"ul"},"Minor dependency updates")))),(0,m.mdx)("h2",{id:"3160---october-3-2019"},"3.16.0 - (October 3, 2019)"),(0,m.mdx)("ul",null,(0,m.mdx)("li",{parentName:"ul"},"Changed",(0,m.mdx)("ul",{parentName:"li"},(0,m.mdx)("li",{parentName:"ul"},"Minor dependency updates")))),(0,m.mdx)("h2",{id:"3150---september-26-2019"},"3.15.0 - (September 26, 2019)"),(0,m.mdx)("ul",null,(0,m.mdx)("li",{parentName:"ul"},"Changed",(0,m.mdx)("ul",{parentName:"li"},(0,m.mdx)("li",{parentName:"ul"},"Minor dependency updates")))),(0,m.mdx)("h2",{id:"3140---september-19-2019"},"3.14.0 - (September 19, 2019)"),(0,m.mdx)("ul",null,(0,m.mdx)("li",{parentName:"ul"},"Changed",(0,m.mdx)("ul",{parentName:"li"},(0,m.mdx)("li",{parentName:"ul"},"Removed ",(0,m.mdx)("inlineCode",{parentName:"li"},"details")," tag from doc-site."),(0,m.mdx)("li",{parentName:"ul"},"Doc site example module import syntax modified to use package.json name resolution")))),(0,m.mdx)("h2",{id:"3130---september-6-2019"},"3.13.0 - (September 6, 2019)"),(0,m.mdx)("ul",null,(0,m.mdx)("li",{parentName:"ul"},"Changed",(0,m.mdx)("ul",{parentName:"li"},(0,m.mdx)("li",{parentName:"ul"},"Cleaned up imports in examples and test files")))),(0,m.mdx)("h2",{id:"3120---august-14-2019"},"3.12.0 - (August 14, 2019)"),(0,m.mdx)("ul",null,(0,m.mdx)("li",{parentName:"ul"},"Changed",(0,m.mdx)("ul",{parentName:"li"},(0,m.mdx)("li",{parentName:"ul"},"updated package.json test scripts")))),(0,m.mdx)("h2",{id:"3110---july-30-2019"},"3.11.0 - (July 30, 2019)"),(0,m.mdx)("ul",null,(0,m.mdx)("li",{parentName:"ul"},"Removed",(0,m.mdx)("ul",{parentName:"li"},(0,m.mdx)("li",{parentName:"ul"},"Removed DEPENDENCIES.md file")))),(0,m.mdx)("h2",{id:"3100---july-16-2019"},"3.10.0 - (July 16, 2019)"),(0,m.mdx)("ul",null,(0,m.mdx)("li",{parentName:"ul"},"Added",(0,m.mdx)("ul",{parentName:"li"},(0,m.mdx)("li",{parentName:"ul"},"Added documentation on required peerDependencies")))),(0,m.mdx)("h2",{id:"390---july-10-2019"},"3.9.0 - (July 10, 2019)"),(0,m.mdx)("ul",null,(0,m.mdx)("li",{parentName:"ul"},"Changed",(0,m.mdx)("ul",{parentName:"li"},(0,m.mdx)("li",{parentName:"ul"},"Minor dependency version bump"),(0,m.mdx)("li",{parentName:"ul"},"Fixed test routes.")))),(0,m.mdx)("h2",{id:"380---july-2-2019"},"3.8.0 - (July 2, 2019)"),(0,m.mdx)("ul",null,(0,m.mdx)("li",{parentName:"ul"},"Changed",(0,m.mdx)("ul",{parentName:"li"},(0,m.mdx)("li",{parentName:"ul"},"Renamed test and example SCSS files to end with ",(0,m.mdx)("inlineCode",{parentName:"li"},".module.scss")," extension")))),(0,m.mdx)("h2",{id:"370---june-19-2019"},"3.7.0 - (June 19, 2019)"),(0,m.mdx)("ul",null,(0,m.mdx)("li",{parentName:"ul"},"Changed",(0,m.mdx)("ul",{parentName:"li"},(0,m.mdx)("li",{parentName:"ul"},"Minor dependency version bump")))),(0,m.mdx)("h2",{id:"360---june-12-2019"},"3.6.0 - (June 12, 2019)"),(0,m.mdx)("ul",null,(0,m.mdx)("li",{parentName:"ul"},(0,m.mdx)("p",{parentName:"li"},"Removed"),(0,m.mdx)("ul",{parentName:"li"},(0,m.mdx)("li",{parentName:"ul"},"Removed node_modules from .npmignore"))),(0,m.mdx)("li",{parentName:"ul"},(0,m.mdx)("p",{parentName:"li"},"Changed"),(0,m.mdx)("ul",{parentName:"li"},(0,m.mdx)("li",{parentName:"ul"},"Removed all inline styles from Dev-site components and implemented the same styles using external css."),(0,m.mdx)("li",{parentName:"ul"},"Update tests for terra-toolkit v5 and terra-dev-site v5 changes"),(0,m.mdx)("li",{parentName:"ul"},"Update wdio spec to use Terra.describeViewports")))),(0,m.mdx)("h2",{id:"350---april-24-2019"},"3.5.0 - (April 24, 2019)"),(0,m.mdx)("ul",null,(0,m.mdx)("li",{parentName:"ul"},"Changed",(0,m.mdx)("ul",{parentName:"li"},(0,m.mdx)("li",{parentName:"ul"},"Moved packages we use solely in doc examples and tests to devDependencies")))),(0,m.mdx)("h2",{id:"340---april-18-2019"},"3.4.0 - (April 18, 2019)"),(0,m.mdx)("ul",null,(0,m.mdx)("li",{parentName:"ul"},"Added",(0,m.mdx)("ul",{parentName:"li"},(0,m.mdx)("li",{parentName:"ul"},"Within DataStatusConsumer example - add guard clause for iframe query")))),(0,m.mdx)("h2",{id:"330---april-9-2019"},"3.3.0 - (April 9, 2019)"),(0,m.mdx)("ul",null,(0,m.mdx)("li",{parentName:"ul"},(0,m.mdx)("p",{parentName:"li"},"Added"),(0,m.mdx)("ul",{parentName:"li"},(0,m.mdx)("li",{parentName:"ul"},"EmbeddedContentProviderTestTemplate for testing embedded applications"))),(0,m.mdx)("li",{parentName:"ul"},(0,m.mdx)("p",{parentName:"li"},"Changed"),(0,m.mdx)("ul",{parentName:"li"},(0,m.mdx)("li",{parentName:"ul"},"Updated existing provider examples to use the EmbeddedContentProviderTestTemplate"),(0,m.mdx)("li",{parentName:"ul"},"Changed Provider examples to use ",(0,m.mdx)("inlineCode",{parentName:"li"},".provider")," extension to fix provider examples in terra-ui"))),(0,m.mdx)("li",{parentName:"ul"},(0,m.mdx)("p",{parentName:"li"},"Removed"),(0,m.mdx)("ul",{parentName:"li"},(0,m.mdx)("li",{parentName:"ul"},"Dead code tests / examples that tested XFC implementation")))),(0,m.mdx)("h2",{id:"320---march-26-2019"},"3.2.0 - (March 26, 2019)"),(0,m.mdx)("ul",null,(0,m.mdx)("li",{parentName:"ul"},(0,m.mdx)("p",{parentName:"li"},"Changed"),(0,m.mdx)("ul",{parentName:"li"},(0,m.mdx)("li",{parentName:"ul"},"Update react/react-dom peer-dependency to latest stable minor release"))),(0,m.mdx)("li",{parentName:"ul"},(0,m.mdx)("p",{parentName:"li"},"Removed"),(0,m.mdx)("ul",{parentName:"li"},(0,m.mdx)("li",{parentName:"ul"},"Removed peer dependency on terra-base"),(0,m.mdx)("li",{parentName:"ul"},"Removed baseStyles import from terra-base")))),(0,m.mdx)("h2",{id:"310---february-5-2019"},"3.1.0 - (February 5, 2019)"),(0,m.mdx)("ul",null,(0,m.mdx)("li",{parentName:"ul"},"Changed",(0,m.mdx)("ul",{parentName:"li"},(0,m.mdx)("li",{parentName:"ul"},"Minor dependency update")))),(0,m.mdx)("h2",{id:"300---january-25-2019"},"3.0.0 - (January 25, 2019)"),(0,m.mdx)("ul",null,(0,m.mdx)("li",{parentName:"ul"},"Breaking Change",(0,m.mdx)("ul",{parentName:"li"},(0,m.mdx)("li",{parentName:"ul"},"Updated terra-core dependencies")))),(0,m.mdx)("h2",{id:"2310---january-5-2019"},"2.31.0 - (January 5, 2019)"),(0,m.mdx)("ul",null,(0,m.mdx)("li",{parentName:"ul"},"Changed",(0,m.mdx)("ul",{parentName:"li"},(0,m.mdx)("li",{parentName:"ul"},"Minor dependency update")))),(0,m.mdx)("h2",{id:"2300---january-2-2019"},"2.30.0 - (January 2, 2019)"),(0,m.mdx)("ul",null,(0,m.mdx)("li",{parentName:"ul"},"Changed",(0,m.mdx)("ul",{parentName:"li"},(0,m.mdx)("li",{parentName:"ul"},"Migrate package to the terra-framework repository"),(0,m.mdx)("li",{parentName:"ul"},"Added title attribute to example iframes.")))),(0,m.mdx)("h2",{id:"2290---november-19-2018"},"2.29.0 - (November 19, 2018)"),(0,m.mdx)("ul",null,(0,m.mdx)("li",{parentName:"ul"},"Changed",(0,m.mdx)("ul",{parentName:"li"},(0,m.mdx)("li",{parentName:"ul"},"Minor dependency version bump")))),(0,m.mdx)("h2",{id:"2280---november-13-2018"},"2.28.0 - (November 13, 2018)"),(0,m.mdx)("ul",null,(0,m.mdx)("li",{parentName:"ul"},"Changed",(0,m.mdx)("ul",{parentName:"li"},(0,m.mdx)("li",{parentName:"ul"},"Minor dependency version bump")))),(0,m.mdx)("h2",{id:"2270---november-9-2018"},"2.27.0 - (November 9, 2018)"),(0,m.mdx)("ul",null,(0,m.mdx)("li",{parentName:"ul"},"Changed",(0,m.mdx)("ul",{parentName:"li"},(0,m.mdx)("li",{parentName:"ul"},"Minor dependency version bump")))),(0,m.mdx)("h2",{id:"2260---october-24-2018"},"2.26.0 - (October 24, 2018)"),(0,m.mdx)("ul",null,(0,m.mdx)("li",{parentName:"ul"},"Changed",(0,m.mdx)("ul",{parentName:"li"},(0,m.mdx)("li",{parentName:"ul"},"Minor dependency version bump")))),(0,m.mdx)("h2",{id:"2250---october-16-2018"},"2.25.0 - (October 16, 2018)"),(0,m.mdx)("ul",null,(0,m.mdx)("li",{parentName:"ul"},"Changed",(0,m.mdx)("ul",{parentName:"li"},(0,m.mdx)("li",{parentName:"ul"},"Minor dependency version bump")))),(0,m.mdx)("h2",{id:"2240---october-8-2018"},"2.24.0 - (October 8, 2018)"),(0,m.mdx)("ul",null,(0,m.mdx)("li",{parentName:"ul"},"Changed",(0,m.mdx)("ul",{parentName:"li"},(0,m.mdx)("li",{parentName:"ul"},"Minor dependency version bump")))),(0,m.mdx)("h2",{id:"2230---september-25-2018"},"2.23.0 - (September 25, 2018)"),(0,m.mdx)("ul",null,(0,m.mdx)("li",{parentName:"ul"},"Changed",(0,m.mdx)("ul",{parentName:"li"},(0,m.mdx)("li",{parentName:"ul"},"Minor dependency version bump")))),(0,m.mdx)("h2",{id:"2221---september-6-2018"},"2.22.1 - (September 6, 2018)"),(0,m.mdx)("ul",null,(0,m.mdx)("li",{parentName:"ul"},"Changed",(0,m.mdx)("ul",{parentName:"li"},(0,m.mdx)("li",{parentName:"ul"},"Patch dependency version bump")))),(0,m.mdx)("h2",{id:"2220---september-5-2018"},"2.22.0 - (September 5, 2018)"),(0,m.mdx)("ul",null,(0,m.mdx)("li",{parentName:"ul"},"Changed",(0,m.mdx)("ul",{parentName:"li"},(0,m.mdx)("li",{parentName:"ul"},"Bumped minimum react peerDependency version from ^16.2.0 to ^16.4.2"),(0,m.mdx)("li",{parentName:"ul"},"Bumped minimum react-dom peerDependency version from ^16.2.0 to ^16.4.2")))),(0,m.mdx)("h2",{id:"2210---september-4-2018"},"2.21.0 - (September 4, 2018)"),(0,m.mdx)("ul",null,(0,m.mdx)("li",{parentName:"ul"},"Changed",(0,m.mdx)("ul",{parentName:"li"},(0,m.mdx)("li",{parentName:"ul"},"Minor dependency version bump")))),(0,m.mdx)("h2",{id:"2200---august-29-2018"},"2.20.0 - (August 29, 2018)"),(0,m.mdx)("ul",null,(0,m.mdx)("li",{parentName:"ul"},"Changed",(0,m.mdx)("ul",{parentName:"li"},(0,m.mdx)("li",{parentName:"ul"},"Minor dependency version bump")))),(0,m.mdx)("h2",{id:"2190---august-1-2018"},"2.19.0 - (August 1, 2018)"),(0,m.mdx)("ul",null,(0,m.mdx)("li",{parentName:"ul"},"Changed",(0,m.mdx)("ul",{parentName:"li"},(0,m.mdx)("li",{parentName:"ul"},"Minor dependency version bump")))),(0,m.mdx)("h2",{id:"2180---july-19-2018"},"2.18.0 - (July 19, 2018)"),(0,m.mdx)("ul",null,(0,m.mdx)("li",{parentName:"ul"},"Changed",(0,m.mdx)("ul",{parentName:"li"},(0,m.mdx)("li",{parentName:"ul"},"Add .module extension to SCSS file(s)")))),(0,m.mdx)("h2",{id:"2170---july-17-2018"},"2.17.0 - (July 17, 2018)"),(0,m.mdx)("ul",null,(0,m.mdx)("li",{parentName:"ul"},"Changed",(0,m.mdx)("ul",{parentName:"li"},(0,m.mdx)("li",{parentName:"ul"},"Minor dependency version bump"),(0,m.mdx)("li",{parentName:"ul"},"Formatting changes per eslint v4 update")))),(0,m.mdx)("h2",{id:"2160---july-10-2018"},"2.16.0 - (July 10, 2018)"),(0,m.mdx)("ul",null,(0,m.mdx)("li",{parentName:"ul"},"Changed",(0,m.mdx)("ul",{parentName:"li"},(0,m.mdx)("li",{parentName:"ul"},"Minor dependency version bump")))),(0,m.mdx)("h2",{id:"2150---july-3-2018"},"2.15.0 - (July 3, 2018)"),(0,m.mdx)("ul",null,(0,m.mdx)("li",{parentName:"ul"},"Changed",(0,m.mdx)("ul",{parentName:"li"},(0,m.mdx)("li",{parentName:"ul"},"Migrate Nightwatch -> wdio testing.")))),(0,m.mdx)("h2",{id:"2140---june-28-2018"},"2.14.0 - (June 28, 2018)"),(0,m.mdx)("ul",null,(0,m.mdx)("li",{parentName:"ul"},(0,m.mdx)("p",{parentName:"li"},"Changed"),(0,m.mdx)("ul",{parentName:"li"},(0,m.mdx)("li",{parentName:"ul"},"Minor dependency version bump"))),(0,m.mdx)("li",{parentName:"ul"},(0,m.mdx)("p",{parentName:"li"},"Added"),(0,m.mdx)("ul",{parentName:"li"},(0,m.mdx)("li",{parentName:"ul"},"Added change log to the documentation on terra-dev-site")))),(0,m.mdx)("h2",{id:"2130---june-22-2018"},"2.13.0 - (June 22, 2018)"),(0,m.mdx)("ul",null,(0,m.mdx)("li",{parentName:"ul"},"Changed",(0,m.mdx)("ul",{parentName:"li"},(0,m.mdx)("li",{parentName:"ul"},"Moved terra-base from dependency to peerDependency")))),(0,m.mdx)("h2",{id:"2120---june-12-2018"},"2.12.0 - (June 12, 2018)"),(0,m.mdx)("ul",null,(0,m.mdx)("li",{parentName:"ul"},"Changed",(0,m.mdx)("ul",{parentName:"li"},(0,m.mdx)("li",{parentName:"ul"},'Updated "test:jest" script to work on windows.')))),(0,m.mdx)("h2",{id:"2110---may-30-2018"},"2.11.0 - (May 30, 2018)"),(0,m.mdx)("ul",null,(0,m.mdx)("li",{parentName:"ul"},"Changed",(0,m.mdx)("ul",{parentName:"li"},(0,m.mdx)("li",{parentName:"ul"},"Updated structure to match terra-dev-site 1.0 and moved doc examples internal.")))),(0,m.mdx)("h2",{id:"2100---may-23-2018"},"2.10.0 - (May 23, 2018)"),(0,m.mdx)("ul",null,(0,m.mdx)("li",{parentName:"ul"},"Changed",(0,m.mdx)("ul",{parentName:"li"},(0,m.mdx)("li",{parentName:"ul"},"Minor dependency version bump")))),(0,m.mdx)("h2",{id:"290---may-16-2018"},"2.9.0 - (May 16, 2018)"),(0,m.mdx)("ul",null,(0,m.mdx)("li",{parentName:"ul"},"Changed",(0,m.mdx)("ul",{parentName:"li"},(0,m.mdx)("li",{parentName:"ul"},"Minor dependency version bump")))),(0,m.mdx)("h2",{id:"280---may-9-2018"},"2.8.0 - (May 9, 2018)"),(0,m.mdx)("ul",null,(0,m.mdx)("li",{parentName:"ul"},"Changed",(0,m.mdx)("ul",{parentName:"li"},(0,m.mdx)("li",{parentName:"ul"},"Minor dependency version bump")))),(0,m.mdx)("h2",{id:"270---may-2-2018"},"2.7.0 - (May 2, 2018)"),(0,m.mdx)("ul",null,(0,m.mdx)("li",{parentName:"ul"},"Changed",(0,m.mdx)("ul",{parentName:"li"},(0,m.mdx)("li",{parentName:"ul"},"Minor dependency version bump")))),(0,m.mdx)("h2",{id:"260---april-20-2018"},"2.6.0 - (April 20, 2018)"),(0,m.mdx)("ul",null,(0,m.mdx)("li",{parentName:"ul"},"Changed",(0,m.mdx)("ul",{parentName:"li"},(0,m.mdx)("li",{parentName:"ul"},"Minor dependency version bump")))),(0,m.mdx)("h2",{id:"250---april-15-2018"},"2.5.0 - (April 15, 2018)"),(0,m.mdx)("ul",null,(0,m.mdx)("li",{parentName:"ul"},"Changed",(0,m.mdx)("ul",{parentName:"li"},(0,m.mdx)("li",{parentName:"ul"},"Minor dependency version bump")))),(0,m.mdx)("h2",{id:"240---april-5-2018"},"2.4.0 - (April 5, 2018)"),(0,m.mdx)("ul",null,(0,m.mdx)("li",{parentName:"ul"},"Changed",(0,m.mdx)("ul",{parentName:"li"},(0,m.mdx)("li",{parentName:"ul"},"Minor dependency version bump")))),(0,m.mdx)("h2",{id:"230---march-30-2018"},"2.3.0 - (March 30, 2018)"),(0,m.mdx)("ul",null,(0,m.mdx)("li",{parentName:"ul"},"Changed",(0,m.mdx)("ul",{parentName:"li"},(0,m.mdx)("li",{parentName:"ul"},"Minor dependency version bump")))),(0,m.mdx)("h2",{id:"220---march-6-2018"},"2.2.0 - (March 6, 2018)"),(0,m.mdx)("ul",null,(0,m.mdx)("li",{parentName:"ul"},"Removed",(0,m.mdx)("ul",{parentName:"li"},(0,m.mdx)("li",{parentName:"ul"},"Removed props-table script from package.json")))),(0,m.mdx)("h2",{id:"210---february-26-2018"},"2.1.0 - (February 26, 2018)"),(0,m.mdx)("ul",null,(0,m.mdx)("li",{parentName:"ul"},"Changed",(0,m.mdx)("ul",{parentName:"li"},(0,m.mdx)("li",{parentName:"ul"},"Minor dependency version bump")))),(0,m.mdx)("h2",{id:"201---february-13-2018"},"2.0.1 - (February 13, 2018)"),(0,m.mdx)("ul",null,(0,m.mdx)("li",{parentName:"ul"},"Changed",(0,m.mdx)("ul",{parentName:"li"},(0,m.mdx)("li",{parentName:"ul"},"Updated peerDependencies")))),(0,m.mdx)("h2",{id:"200---february-12-2018"},"2.0.0 - (February 12, 2018)"),(0,m.mdx)("ul",null,(0,m.mdx)("li",{parentName:"ul"},"Changed",(0,m.mdx)("ul",{parentName:"li"},(0,m.mdx)("li",{parentName:"ul"},"Updated to use React 16")))),(0,m.mdx)("h2",{id:"1120---february-1-2018"},"1.12.0 - (February 1, 2018)"),(0,m.mdx)("ul",null,(0,m.mdx)("li",{parentName:"ul"},"Changed",(0,m.mdx)("ul",{parentName:"li"},(0,m.mdx)("li",{parentName:"ul"},"Minor dependency version bump")))),(0,m.mdx)("h2",{id:"1110---january-18-2018"},"1.11.0 - (January 18, 2018)"),(0,m.mdx)("ul",null,(0,m.mdx)("li",{parentName:"ul"},"Changed",(0,m.mdx)("ul",{parentName:"li"},(0,m.mdx)("li",{parentName:"ul"},"Minor dependency version bump")))),(0,m.mdx)("h2",{id:"1100---january-5-2018"},"1.10.0 - (January 5, 2018)"),(0,m.mdx)("ul",null,(0,m.mdx)("li",{parentName:"ul"},"Changed",(0,m.mdx)("ul",{parentName:"li"},(0,m.mdx)("li",{parentName:"ul"},"Minor dependency version bump")))),(0,m.mdx)("h2",{id:"190---november-28-2017"},"1.9.0 - (November 28, 2017)"),(0,m.mdx)("ul",null,(0,m.mdx)("li",{parentName:"ul"},"Changed",(0,m.mdx)("ul",{parentName:"li"},(0,m.mdx)("li",{parentName:"ul"},"Minor dependency version bump")))),(0,m.mdx)("h2",{id:"180---november-16-2017"},"1.8.0 - (November 16, 2017)"),(0,m.mdx)("ul",null,(0,m.mdx)("li",{parentName:"ul"},"Changed",(0,m.mdx)("ul",{parentName:"li"},(0,m.mdx)("li",{parentName:"ul"},"Minor dependency version bump")))),(0,m.mdx)("h2",{id:"170---october-31-2017"},"1.7.0 - (October 31, 2017)"),(0,m.mdx)("ul",null,(0,m.mdx)("li",{parentName:"ul"},"Changed",(0,m.mdx)("ul",{parentName:"li"},(0,m.mdx)("li",{parentName:"ul"},"Allow EmbeddedContentConsumer to trigger events on its application")))),(0,m.mdx)("h2",{id:"160---october-6-2017"},"1.6.0 - (October 6, 2017)"),(0,m.mdx)("ul",null,(0,m.mdx)("li",{parentName:"ul"},"Changed",(0,m.mdx)("ul",{parentName:"li"},(0,m.mdx)("li",{parentName:"ul"},"Minor dependency version bump")))),(0,m.mdx)("h2",{id:"150---september-26-2017"},"1.5.0 - (September 26, 2017)"),(0,m.mdx)("ul",null,(0,m.mdx)("li",{parentName:"ul"},"Changed",(0,m.mdx)("ul",{parentName:"li"},(0,m.mdx)("li",{parentName:"ul"},"Minor dependency version bump")))),(0,m.mdx)("h2",{id:"140---september-19-2017"},"1.4.0 - (September 19, 2017)"),(0,m.mdx)("ul",null,(0,m.mdx)("li",{parentName:"ul"},"Changed",(0,m.mdx)("ul",{parentName:"li"},(0,m.mdx)("li",{parentName:"ul"},"Minor dependency version bump")))),(0,m.mdx)("h2",{id:"130---september-12-2017"},"1.3.0 - (September 12, 2017)"),(0,m.mdx)("ul",null,(0,m.mdx)("li",{parentName:"ul"},"Changed",(0,m.mdx)("ul",{parentName:"li"},(0,m.mdx)("li",{parentName:"ul"},"Minor dependency version bump")))),(0,m.mdx)("h2",{id:"120---september-7-2017"},"1.2.0 - (September 7, 2017)"),(0,m.mdx)("ul",null,(0,m.mdx)("li",{parentName:"ul"},"Changed",(0,m.mdx)("ul",{parentName:"li"},(0,m.mdx)("li",{parentName:"ul"},"Minor dependency version bump")))),(0,m.mdx)("h2",{id:"110---september-5-2017"},"1.1.0 - (September 5, 2017)"),(0,m.mdx)("ul",null,(0,m.mdx)("li",{parentName:"ul"},"Changed",(0,m.mdx)("ul",{parentName:"li"},(0,m.mdx)("li",{parentName:"ul"},"Update nightwatch tests and test scripts.")))),(0,m.mdx)("h2",{id:"100---august-31-2017"},"1.0.0 - (August 31, 2017)"),(0,m.mdx)("p",null,"Initial stable release"))}p.isMDXComponent=!0;var x=["components"];function o(){return o=Object.assign?Object.assign.bind():function(e){for(var a=1;a<arguments.length;a++){var d=arguments[a];for(var m in d)Object.prototype.hasOwnProperty.call(d,m)&&(e[m]=d[m])}return e},o.apply(this,arguments)}function N(e,a){if(null==e)return{};var d,m,l=function(e,a){if(null==e)return{};var d,m,l={},n=Object.keys(e);for(m=0;m<n.length;m++)d=n[m],a.indexOf(d)>=0||(l[d]=e[d]);return l}(e,a);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(m=0;m<n.length;m++)d=n[m],a.indexOf(d)>=0||Object.prototype.propertyIsEnumerable.call(e,d)&&(l[d]=e[d])}return l}var s={},c="wrapper";function h(e){var a=e.components,d=N(e,x);return(0,m.mdx)(c,o({},s,d,{components:a,mdxType:"MDXLayout"}),(0,m.mdx)(l.C,{mdxType:"Badge"}),(0,m.mdx)(p,{mdxType:"ChangeLog"}))}h.isMDXComponent=!0},10581:function(e,a,d){d.d(a,{C:function(){return n}});var m=d(67294),l=d(22863),n=function(e){var a=e.url;return m.createElement(l.Z,{src:"https://github.com/cerner/terra-framework/tree/main/packages/terra-embedded-content-consumer",name:"terra-embedded-content-consumer",version:"3.43.0",url:a})}},17422:function(e,a,d){d.r(a),a.default={badge:"Badges-module__badge___vex-+","badge-container":"Badges-module__badge-container___B13Mv","badge-name":"Badges-module__badge-name___jkN0m","badge-version":"Badges-module__badge-version___agZ+P"}}}]);