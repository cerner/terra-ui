"use strict";(self.webpackChunkterra_ui=self.webpackChunkterra_ui||[]).push([[90167,45627,85565,3353,5161,45865,85355,3193,4845,46647,85161,38681,15318,40411,18101,38443,11264,34319],{22863:function(e,a,l){var t=l(64836);a.Z=void 0;var r=t(l(67294)),d=t(l(45697)),n=t(l(47166)),i=t(l(17422)),m=n.default.bind(i.default),u={name:d.default.string.isRequired,src:d.default.string,url:d.default.string,version:d.default.string.isRequired},o=function(e){var a=e.src,l=e.name,t=e.url,d=e.version,n=r.default.createElement("a",{className:m("badge"),href:t||"https://www.npmjs.org/package/".concat(l,"/v/").concat(d)},r.default.createElement("span",{className:m("badge-name")},t?"package":"npm"),r.default.createElement("span",{className:m("badge-version")},"v".concat(d))),i=a?r.default.createElement("a",{className:m("badge"),href:a},r.default.createElement("span",{className:m("badge-name")},"github"),r.default.createElement("span",{className:m("badge-version")},"source")):void 0;return r.default.createElement("div",{className:m("badge-container")},n,i)};o.propTypes=u;var s=o;a.Z=s},90167:function(e,a,l){l.r(a),l.d(a,{default:function(){return h}});l(67294);var t=l(81254),r=l(26372),d=["components"];function n(){return n=Object.assign?Object.assign.bind():function(e){for(var a=1;a<arguments.length;a++){var l=arguments[a];for(var t in l)Object.prototype.hasOwnProperty.call(l,t)&&(e[t]=l[t])}return e},n.apply(this,arguments)}function i(e,a){if(null==e)return{};var l,t,r=function(e,a){if(null==e)return{};var l,t,r={},d=Object.keys(e);for(t=0;t<d.length;t++)l=d[t],a.indexOf(l)>=0||(r[l]=e[l]);return r}(e,a);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(e);for(t=0;t<d.length;t++)l=d[t],a.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(r[l]=e[l])}return r}var m={},u="wrapper";function o(e){var a=e.components,l=i(e,d);return(0,t.mdx)(u,n({},m,l,{components:a,mdxType:"MDXLayout"}),(0,t.mdx)("h1",{id:"changelog"},"Changelog"),(0,t.mdx)("h2",{id:"unreleased"},"Unreleased"),(0,t.mdx)("h2",{id:"1220---september-21-2023"},"1.22.0 - (September 21, 2023)"),(0,t.mdx)("ul",null,(0,t.mdx)("li",{parentName:"ul"},(0,t.mdx)("p",{parentName:"li"},"Added"),(0,t.mdx)("ul",{parentName:"li"},(0,t.mdx)("li",{parentName:"ul"},"Added back ",(0,t.mdx)("inlineCode",{parentName:"li"},"width: 100%")," to flowsheet result cell styles removed in 1.17.0."))),(0,t.mdx)("li",{parentName:"ul"},(0,t.mdx)("p",{parentName:"li"},"Fixed"),(0,t.mdx)("ul",{parentName:"li"},(0,t.mdx)("li",{parentName:"ul"},"Fixed infinite re-render bug."))),(0,t.mdx)("li",{parentName:"ul"},(0,t.mdx)("p",{parentName:"li"},"Changed"),(0,t.mdx)("ul",{parentName:"li"},(0,t.mdx)("li",{parentName:"ul"},"Updated testing recommendations to use ",(0,t.mdx)("inlineCode",{parentName:"li"},"jest.spyOn")," instead of ",(0,t.mdx)("inlineCode",{parentName:"li"},"jest.mock"),"."),(0,t.mdx)("li",{parentName:"ul"},"Updated invalid result value check to display error state for empty results.")))),(0,t.mdx)("h2",{id:"1210---august-2-2023"},"1.21.0 - (August 2, 2023)"),(0,t.mdx)("ul",null,(0,t.mdx)("li",{parentName:"ul"},"Changed",(0,t.mdx)("ul",{parentName:"li"},(0,t.mdx)("li",{parentName:"ul"},"Locked ",(0,t.mdx)("inlineCode",{parentName:"li"},"uuid")," dependency to ",(0,t.mdx)("inlineCode",{parentName:"li"},"3.4.0")," for maximum consistency across Terra packages."),(0,t.mdx)("li",{parentName:"ul"},"Updated translations.")))),(0,t.mdx)("h2",{id:"1200---july-17-2023"},"1.20.0 - (July 17, 2023)"),(0,t.mdx)("ul",null,(0,t.mdx)("li",{parentName:"ul"},(0,t.mdx)("p",{parentName:"li"},"Added"),(0,t.mdx)("ul",{parentName:"li"},(0,t.mdx)("li",{parentName:"ul"},"Added accessibility guide."),(0,t.mdx)("li",{parentName:"ul"},"Added site documentation for Flowsheet, Time Header, and Name Header cells usage."))),(0,t.mdx)("li",{parentName:"ul"},(0,t.mdx)("p",{parentName:"li"},"Fixed"),(0,t.mdx)("ul",{parentName:"li"},(0,t.mdx)("li",{parentName:"ul"},"Fixed flickering issue related to numeric overflow in FlowsheetResultCell.")))),(0,t.mdx)("h2",{id:"1190---july-12-2023"},"1.19.0 - (July 12, 2023)"),(0,t.mdx)("ul",null,(0,t.mdx)("li",{parentName:"ul"},"Changed",(0,t.mdx)("ul",{parentName:"li"},(0,t.mdx)("li",{parentName:"ul"},"Changed ResultTimeHeaderCell to remove the ",(0,t.mdx)("inlineCode",{parentName:"li"},"<time>")," html tag for the date and time. This was causing issues and technically does not have full screen reader support."),(0,t.mdx)("li",{parentName:"ul"},"Locked ",(0,t.mdx)("inlineCode",{parentName:"li"},"uuid")," dependency to ",(0,t.mdx)("inlineCode",{parentName:"li"},"7.0.3")," for consistency across Terra packages.")))),(0,t.mdx)("h2",{id:"1180---june-22-2023"},"1.18.0 - (June 22, 2023)"),(0,t.mdx)("ul",null,(0,t.mdx)("li",{parentName:"ul"},(0,t.mdx)("p",{parentName:"li"},"Added"),(0,t.mdx)("ul",{parentName:"li"},(0,t.mdx)("li",{parentName:"ul"},"Added screen-reader support for strikethroughs to convey an entered in error status."),(0,t.mdx)("li",{parentName:"ul"},"Added additional translations for strikethrough alt text."))),(0,t.mdx)("li",{parentName:"ul"},(0,t.mdx)("p",{parentName:"li"},"Fixed"),(0,t.mdx)("ul",{parentName:"li"},(0,t.mdx)("li",{parentName:"ul"},"Fixed a check related to Clinical Result strikethrough alt text for if a result unit exists or not."))),(0,t.mdx)("li",{parentName:"ul"},(0,t.mdx)("p",{parentName:"li"},"Changed"),(0,t.mdx)("ul",{parentName:"li"},(0,t.mdx)("li",{parentName:"ul"},"Changed FlowsheetResultCell, ResultNameHeaderCell and ResultTimeHeaderCell in clinical-result to use proper semantic html."),(0,t.mdx)("li",{parentName:"ul"},"Updated ResultTimeHeaderCell component to use ",(0,t.mdx)("inlineCode",{parentName:"li"},"<time>")," html tags for the date and time.")))),(0,t.mdx)("h2",{id:"1170---june-14-2023"},"1.17.0 - (June 14, 2023)"),(0,t.mdx)("ul",null,(0,t.mdx)("li",{parentName:"ul"},"Added",(0,t.mdx)("ul",{parentName:"li"},(0,t.mdx)("li",{parentName:"ul"},"Added screen-reader support for clinical-result icons. (Requires Jest test updates on consuming applications)"),(0,t.mdx)("li",{parentName:"ul"},"Added screen-reader support for alternative text for when no results are returned."),(0,t.mdx)("li",{parentName:"ul"},"Added screen-reader support for clinical-result FlowsheetResultCell EnteredInError."),(0,t.mdx)("li",{parentName:"ul"},"Added screen-reader support for clinical-result FlowsheetResultCell with multiple results."),(0,t.mdx)("li",{parentName:"ul"},"Added screen-reader support for clinical-result ResultNameHeaderCell. Two new optional props are added for providing a full name of the result name and unit respectively."),(0,t.mdx)("li",{parentName:"ul"},"Added screen-reader support for Blood Pressure with additional displays as a group. An additional prop is added for making the blood pressure results a group.")))),(0,t.mdx)("h2",{id:"1160---march-29-2023"},"1.16.0 - (March 29, 2023)"),(0,t.mdx)("ul",null,(0,t.mdx)("li",{parentName:"ul"},"Changed",(0,t.mdx)("ul",{parentName:"li"},(0,t.mdx)("li",{parentName:"ul"},"Updated wdio screenshots.")))),(0,t.mdx)("h2",{id:"1150---august-17-2021"},"1.15.0 - (August 17, 2021)"),(0,t.mdx)("ul",null,(0,t.mdx)("li",{parentName:"ul"},"Fixed",(0,t.mdx)("ul",{parentName:"li"},(0,t.mdx)("li",{parentName:"ul"},"Fixed incorrect prop descriptions.")))),(0,t.mdx)("h2",{id:"1140---july-21-2021"},"1.14.0 - (July 21, 2021)"),(0,t.mdx)("ul",null,(0,t.mdx)("li",{parentName:"ul"},"Changed",(0,t.mdx)("ul",{parentName:"li"},(0,t.mdx)("li",{parentName:"ul"},"Updated Jest command")))),(0,t.mdx)("h2",{id:"1130---march-25-2021"},"1.13.0 - (March 25, 2021)"),(0,t.mdx)("ul",null,(0,t.mdx)("li",{parentName:"ul"},(0,t.mdx)("p",{parentName:"li"},"Changed"),(0,t.mdx)("ul",{parentName:"li"},(0,t.mdx)("li",{parentName:"ul"},"Changed Flowsheet overflow style to better handle truncation"),(0,t.mdx)("li",{parentName:"ul"},"Upgrade tests to terra-functional-testing and WebDriverIO v6"),(0,t.mdx)("li",{parentName:"ul"},"Updated screenshots with elements that are out of bound"))),(0,t.mdx)("li",{parentName:"ul"},(0,t.mdx)("p",{parentName:"li"},"Added"),(0,t.mdx)("ul",{parentName:"li"},(0,t.mdx)("li",{parentName:"ul"},"Added packaged themes and applying themes by context")))),(0,t.mdx)("h2",{id:"1120---january-5-2021"},"1.12.0 - (January 5, 2021)"),(0,t.mdx)("ul",null,(0,t.mdx)("li",{parentName:"ul"},(0,t.mdx)("p",{parentName:"li"},"Changed"),(0,t.mdx)("ul",{parentName:"li"},(0,t.mdx)("li",{parentName:"ul"},"Removed reference to intlShape as it is no longer provided in later versions of react-intl"),(0,t.mdx)("li",{parentName:"ul"},"Removed unused react-intl imports."))),(0,t.mdx)("li",{parentName:"ul"},(0,t.mdx)("p",{parentName:"li"},"Fixed"),(0,t.mdx)("ul",{parentName:"li"},(0,t.mdx)("li",{parentName:"ul"},"Fixed broken links in documentation.")))),(0,t.mdx)("h2",{id:"1110---november-10-2020"},"1.11.0 - (November 10, 2020)"),(0,t.mdx)("ul",null,(0,t.mdx)("li",{parentName:"ul"},"Changed",(0,t.mdx)("ul",{parentName:"li"},(0,t.mdx)("li",{parentName:"ul"},"Update wdio tests to remove deprecated Terra.it helpers")))),(0,t.mdx)("h2",{id:"1100---august-25-2020"},"1.10.0 - (August 25, 2020)"),(0,t.mdx)("ul",null,(0,t.mdx)("li",{parentName:"ul"},"Changed",(0,t.mdx)("ul",{parentName:"li"},(0,t.mdx)("li",{parentName:"ul"},"Update browserslist-config-terra to @cerner/browserslist-config-terra v^3")))),(0,t.mdx)("h2",{id:"190---august-4-2020"},"1.9.0 - (August 4, 2020)"),(0,t.mdx)("ul",null,(0,t.mdx)("li",{parentName:"ul"},(0,t.mdx)("p",{parentName:"li"},"Changed"),(0,t.mdx)("ul",{parentName:"li"},(0,t.mdx)("li",{parentName:"ul"},"Update changelog formatting"))),(0,t.mdx)("li",{parentName:"ul"},(0,t.mdx)("p",{parentName:"li"},"Changed"),(0,t.mdx)("ul",{parentName:"li"},(0,t.mdx)("li",{parentName:"ul"},"Update wdio due to icon changes.")))),(0,t.mdx)("h2",{id:"180---june-16-2020"},"1.8.0 - (June 16, 2020)"),(0,t.mdx)("ul",null,(0,t.mdx)("li",{parentName:"ul"},(0,t.mdx)("p",{parentName:"li"},"Changed"),(0,t.mdx)("ul",{parentName:"li"},(0,t.mdx)("li",{parentName:"ul"},"Changed the description of 'resultNoData' prop for observation prop types"),(0,t.mdx)("li",{parentName:"ul"},"Changed 'ClinicalResultBloodPressure' to return early if result has an Error or doesn't have data"))),(0,t.mdx)("li",{parentName:"ul"},(0,t.mdx)("p",{parentName:"li"},"Added"),(0,t.mdx)("ul",{parentName:"li"},(0,t.mdx)("li",{parentName:"ul"},"Added to interpretation Bloodpressure test"),(0,t.mdx)("li",{parentName:"ul"},"Added single result bloodpressure test"),(0,t.mdx)("li",{parentName:"ul"},"Added Result hasError test"),(0,t.mdx)("li",{parentName:"ul"},"Added Result hasNoData test"),(0,t.mdx)("li",{parentName:"ul"},"Added Decorated Flowsheet test"),(0,t.mdx)("li",{parentName:"ul"},"Added Flowsheet hasError test"),(0,t.mdx)("li",{parentName:"ul"},"Added Flowsheet hasNoData test"),(0,t.mdx)("li",{parentName:"ul"},"Added Flowsheet numericOverflow test"),(0,t.mdx)("li",{parentName:"ul"},"Added '","_","BloodPressureDisplay' component to reduce clutter in 'ClinicalResultBloodPressure'"))),(0,t.mdx)("li",{parentName:"ul"},(0,t.mdx)("p",{parentName:"li"},"Removed"),(0,t.mdx)("ul",{parentName:"li"},(0,t.mdx)("li",{parentName:"ul"},"Removed unused test data"),(0,t.mdx)("li",{parentName:"ul"},"Removed default empty object prop from ClinicalResult and Observation.")))),(0,t.mdx)("h2",{id:"170---june-9-2020"},"1.7.0 - (June 9, 2020)"),(0,t.mdx)("ul",null,(0,t.mdx)("li",{parentName:"ul"},"Changed",(0,t.mdx)("ul",{parentName:"li"},(0,t.mdx)("li",{parentName:"ul"},"Minor file changes to comply with eslint rules")))),(0,t.mdx)("h2",{id:"160---april-28-2020"},"1.6.0 - (April 28, 2020)"),(0,t.mdx)("ul",null,(0,t.mdx)("li",{parentName:"ul"},(0,t.mdx)("p",{parentName:"li"},"Added"),(0,t.mdx)("ul",{parentName:"li"},(0,t.mdx)("li",{parentName:"ul"},"Added ",(0,t.mdx)("inlineCode",{parentName:"li"},"directory")," as a sub attribute to the ",(0,t.mdx)("inlineCode",{parentName:"li"},"repository")," attribute in package.json"))),(0,t.mdx)("li",{parentName:"ul"},(0,t.mdx)("p",{parentName:"li"},"Removed"),(0,t.mdx)("ul",{parentName:"li"},(0,t.mdx)("li",{parentName:"ul"},'Removed "View Component Source Code" from docs in favour of source code badge')))),(0,t.mdx)("h2",{id:"150---april-22-2020"},"1.5.0 - (April 22, 2020)"),(0,t.mdx)("ul",null,(0,t.mdx)("li",{parentName:"ul"},"Fixed",(0,t.mdx)("ul",{parentName:"li"},(0,t.mdx)("li",{parentName:"ul"},"Fixed an issue with FlowsheetResultCell where status 'entered in error' and interpretations caused error text to be improperly aligned."),(0,t.mdx)("li",{parentName:"ul"},"Fixed an issue with FlowsheetResultCell where status 'entered in error' and interpretations in an extra result caused the multiple result icon to still show interpretation color.")))),(0,t.mdx)("h2",{id:"140---april-14-2020"},"1.4.0 - (April 14, 2020)"),(0,t.mdx)("ul",null,(0,t.mdx)("li",{parentName:"ul"},"Changed",(0,t.mdx)("ul",{parentName:"li"},(0,t.mdx)("li",{parentName:"ul"},"Update wdio test configuration to use root wdio config")))),(0,t.mdx)("h2",{id:"130---march-27-2020"},"1.3.0 - (March 27, 2020)"),(0,t.mdx)("ul",null,(0,t.mdx)("li",{parentName:"ul"},(0,t.mdx)("p",{parentName:"li"},"Fixed"),(0,t.mdx)("ul",{parentName:"li"},(0,t.mdx)("li",{parentName:"ul"},"Fixed alpha truncation issue with FlowsheetResultCell"),(0,t.mdx)("li",{parentName:"ul"},"Fixed misnamed class in ClinicalResultBloodPresure"),(0,t.mdx)("li",{parentName:"ul"},"Fixed extra display truncation issue in ClinicalResult and ClinicalResultBloodPresure"))),(0,t.mdx)("li",{parentName:"ul"},(0,t.mdx)("p",{parentName:"li"},"Changed"),(0,t.mdx)("ul",{parentName:"li"},(0,t.mdx)("li",{parentName:"ul"},"Update docs to use mdx syntax.")))),(0,t.mdx)("h2",{id:"120---march-17-2020"},"1.2.0 - (March 17, 2020)"),(0,t.mdx)("ul",null,(0,t.mdx)("li",{parentName:"ul"},"Fixed",(0,t.mdx)("ul",{parentName:"li"},(0,t.mdx)("li",{parentName:"ul"},"Fixed an alignment issue with FlowsheetResultCell that caused normal interpretation results to be aligned to the left.")))),(0,t.mdx)("h2",{id:"110---march-10-2020"},"1.1.0 - (March 10, 2020)"),(0,t.mdx)("ul",null,(0,t.mdx)("li",{parentName:"ul"},"Fixed",(0,t.mdx)("ul",{parentName:"li"},(0,t.mdx)("li",{parentName:"ul"},"Fixed bug where ClinicalBloodPresure if provided both a systolic and diastolic object with ",(0,t.mdx)("inlineCode",{parentName:"li"},"resultNoData")," true, presented error result instead of no data result.")))),(0,t.mdx)("h2",{id:"100---march-6-2020"},"1.0.0 - (March 6, 2020)"),(0,t.mdx)("ul",null,(0,t.mdx)("li",{parentName:"ul"},"Initial stable release")))}o.isMDXComponent=!0;var s=["components"];function p(){return p=Object.assign?Object.assign.bind():function(e){for(var a=1;a<arguments.length;a++){var l=arguments[a];for(var t in l)Object.prototype.hasOwnProperty.call(l,t)&&(e[t]=l[t])}return e},p.apply(this,arguments)}function x(e,a){if(null==e)return{};var l,t,r=function(e,a){if(null==e)return{};var l,t,r={},d=Object.keys(e);for(t=0;t<d.length;t++)l=d[t],a.indexOf(l)>=0||(r[l]=e[l]);return r}(e,a);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(e);for(t=0;t<d.length;t++)l=d[t],a.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(r[l]=e[l])}return r}var c={},N="wrapper";function h(e){var a=e.components,l=x(e,s);return(0,t.mdx)(N,p({},c,l,{components:a,mdxType:"MDXLayout"}),(0,t.mdx)(r.C,{mdxType:"Badge"}),(0,t.mdx)(o,{mdxType:"ChangeLog"}))}h.isMDXComponent=!0},26372:function(e,a,l){l.d(a,{C:function(){return d}});var t=l(67294),r=l(22863),d=function(e){var a=e.url;return t.createElement(r.Z,{src:"https://github.com/cerner/terra-clinical/tree/main/packages/terra-clinical-result",name:"terra-clinical-result",version:"1.22.0",url:a})}},17422:function(e,a,l){l.r(a),a.default={badge:"Badges-module__badge___vex-+","badge-container":"Badges-module__badge-container___B13Mv","badge-name":"Badges-module__badge-name___jkN0m","badge-version":"Badges-module__badge-version___agZ+P"}}}]);