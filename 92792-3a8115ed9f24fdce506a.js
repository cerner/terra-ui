"use strict";(self.webpackChunkterra_ui=self.webpackChunkterra_ui||[]).push([[92792,45627,85565,3353,5161,45865,85355,3193,4845,46647,85161,38681,15318,40411,18101,38443],{22863:function(e,a,t){var l=t(64836);a.Z=void 0;var r=l(t(67294)),n=l(t(45697)),d=l(t(47166)),i=l(t(17422)),m=d.default.bind(i.default),u={name:n.default.string.isRequired,src:n.default.string,url:n.default.string,version:n.default.string.isRequired},o=function(e){var a=e.src,t=e.name,l=e.url,n=e.version,d=r.default.createElement("a",{className:m("badge"),href:l||"https://www.npmjs.org/package/".concat(t,"/v/").concat(n)},r.default.createElement("span",{className:m("badge-name")},l?"package":"npm"),r.default.createElement("span",{className:m("badge-version")},"v".concat(n))),i=a?r.default.createElement("a",{className:m("badge"),href:a},r.default.createElement("span",{className:m("badge-name")},"github"),r.default.createElement("span",{className:m("badge-version")},"source")):void 0;return r.default.createElement("div",{className:m("badge-container")},d,i)};o.propTypes=u;var s=o;a.Z=s},79343:function(e,a,t){t.r(a),t.d(a,{default:function(){return h}});t(67294);var l=t(81254),r=t(26372),n=["components"];function d(){return d=Object.assign?Object.assign.bind():function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var l in t)Object.prototype.hasOwnProperty.call(t,l)&&(e[l]=t[l])}return e},d.apply(this,arguments)}function i(e,a){if(null==e)return{};var t,l,r=function(e,a){if(null==e)return{};var t,l,r={},n=Object.keys(e);for(l=0;l<n.length;l++)t=n[l],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(l=0;l<n.length;l++)t=n[l],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var m={},u="wrapper";function o(e){var a=e.components,t=i(e,n);return(0,l.mdx)(u,d({},m,t,{components:a,mdxType:"MDXLayout"}),(0,l.mdx)("h1",{id:"changelog"},"Changelog"),(0,l.mdx)("h2",{id:"unreleased"},"Unreleased"),(0,l.mdx)("h2",{id:"1180---june-22-2023"},"1.18.0 - (June 22, 2023)"),(0,l.mdx)("ul",null,(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("p",{parentName:"li"},"Added"),(0,l.mdx)("ul",{parentName:"li"},(0,l.mdx)("li",{parentName:"ul"},"Added screen-reader support for strikethroughs to convey an entered in error status."),(0,l.mdx)("li",{parentName:"ul"},"Added additional translations for strikethrough alt text."))),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("p",{parentName:"li"},"Fixed"),(0,l.mdx)("ul",{parentName:"li"},(0,l.mdx)("li",{parentName:"ul"},"Fixed a check related to Clinical Result strikethrough alt text for if a result unit exists or not."))),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("p",{parentName:"li"},"Changed"),(0,l.mdx)("ul",{parentName:"li"},(0,l.mdx)("li",{parentName:"ul"},"Changed FlowsheetResultCell, ResultNameHeaderCell and ResultTimeHeaderCell in clinical-result to use proper semantic html."),(0,l.mdx)("li",{parentName:"ul"},"Updated ResultTimeHeaderCell component to use ",(0,l.mdx)("inlineCode",{parentName:"li"},"<time>")," html tags for the date and time.")))),(0,l.mdx)("h2",{id:"1170---june-14-2023"},"1.17.0 - (June 14, 2023)"),(0,l.mdx)("ul",null,(0,l.mdx)("li",{parentName:"ul"},"Added",(0,l.mdx)("ul",{parentName:"li"},(0,l.mdx)("li",{parentName:"ul"},"Added screen-reader support for clinical-result icons. (Requires Jest test updates on consuming applications)"),(0,l.mdx)("li",{parentName:"ul"},"Added screen-reader support for alternative text for when no results are returned."),(0,l.mdx)("li",{parentName:"ul"},"Added screen-reader support for clinical-result FlowsheetResultCell EnteredInError."),(0,l.mdx)("li",{parentName:"ul"},"Added screen-reader support for clinical-result FlowsheetResultCell with multiple results."),(0,l.mdx)("li",{parentName:"ul"},"Added screen-reader support for clinical-result ResultNameHeaderCell. Two new optional props are added for providing a full name of the result name and unit respectively."),(0,l.mdx)("li",{parentName:"ul"},"Added screen-reader support for Blood Pressure with additional displays as a group. An additional prop is added for making the blood pressure results a group.")))),(0,l.mdx)("h2",{id:"1160---march-29-2023"},"1.16.0 - (March 29, 2023)"),(0,l.mdx)("ul",null,(0,l.mdx)("li",{parentName:"ul"},"Changed",(0,l.mdx)("ul",{parentName:"li"},(0,l.mdx)("li",{parentName:"ul"},"Updated wdio screenshots.")))),(0,l.mdx)("h2",{id:"1150---august-17-2021"},"1.15.0 - (August 17, 2021)"),(0,l.mdx)("ul",null,(0,l.mdx)("li",{parentName:"ul"},"Fixed",(0,l.mdx)("ul",{parentName:"li"},(0,l.mdx)("li",{parentName:"ul"},"Fixed incorrect prop descriptions.")))),(0,l.mdx)("h2",{id:"1140---july-21-2021"},"1.14.0 - (July 21, 2021)"),(0,l.mdx)("ul",null,(0,l.mdx)("li",{parentName:"ul"},"Changed",(0,l.mdx)("ul",{parentName:"li"},(0,l.mdx)("li",{parentName:"ul"},"Updated Jest command")))),(0,l.mdx)("h2",{id:"1130---march-25-2021"},"1.13.0 - (March 25, 2021)"),(0,l.mdx)("ul",null,(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("p",{parentName:"li"},"Changed"),(0,l.mdx)("ul",{parentName:"li"},(0,l.mdx)("li",{parentName:"ul"},"Changed Flowsheet overflow style to better handle truncation"),(0,l.mdx)("li",{parentName:"ul"},"Upgrade tests to terra-functional-testing and WebDriverIO v6"),(0,l.mdx)("li",{parentName:"ul"},"Updated screenshots with elements that are out of bound"))),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("p",{parentName:"li"},"Added"),(0,l.mdx)("ul",{parentName:"li"},(0,l.mdx)("li",{parentName:"ul"},"Added packaged themes and applying themes by context")))),(0,l.mdx)("h2",{id:"1120---january-5-2021"},"1.12.0 - (January 5, 2021)"),(0,l.mdx)("ul",null,(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("p",{parentName:"li"},"Changed"),(0,l.mdx)("ul",{parentName:"li"},(0,l.mdx)("li",{parentName:"ul"},"Removed reference to intlShape as it is no longer provided in later versions of react-intl"),(0,l.mdx)("li",{parentName:"ul"},"Removed unused react-intl imports."))),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("p",{parentName:"li"},"Fixed"),(0,l.mdx)("ul",{parentName:"li"},(0,l.mdx)("li",{parentName:"ul"},"Fixed broken links in documentation.")))),(0,l.mdx)("h2",{id:"1110---november-10-2020"},"1.11.0 - (November 10, 2020)"),(0,l.mdx)("ul",null,(0,l.mdx)("li",{parentName:"ul"},"Changed",(0,l.mdx)("ul",{parentName:"li"},(0,l.mdx)("li",{parentName:"ul"},"Update wdio tests to remove deprecated Terra.it helpers")))),(0,l.mdx)("h2",{id:"1100---august-25-2020"},"1.10.0 - (August 25, 2020)"),(0,l.mdx)("ul",null,(0,l.mdx)("li",{parentName:"ul"},"Changed",(0,l.mdx)("ul",{parentName:"li"},(0,l.mdx)("li",{parentName:"ul"},"Update browserslist-config-terra to @cerner/browserslist-config-terra v^3")))),(0,l.mdx)("h2",{id:"190---august-4-2020"},"1.9.0 - (August 4, 2020)"),(0,l.mdx)("ul",null,(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("p",{parentName:"li"},"Changed"),(0,l.mdx)("ul",{parentName:"li"},(0,l.mdx)("li",{parentName:"ul"},"Update changelog formatting"))),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("p",{parentName:"li"},"Changed"),(0,l.mdx)("ul",{parentName:"li"},(0,l.mdx)("li",{parentName:"ul"},"Update wdio due to icon changes.")))),(0,l.mdx)("h2",{id:"180---june-16-2020"},"1.8.0 - (June 16, 2020)"),(0,l.mdx)("ul",null,(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("p",{parentName:"li"},"Changed"),(0,l.mdx)("ul",{parentName:"li"},(0,l.mdx)("li",{parentName:"ul"},"Changed the description of 'resultNoData' prop for observation prop types"),(0,l.mdx)("li",{parentName:"ul"},"Changed 'ClinicalResultBloodPressure' to return early if result has an Error or doesn't have data"))),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("p",{parentName:"li"},"Added"),(0,l.mdx)("ul",{parentName:"li"},(0,l.mdx)("li",{parentName:"ul"},"Added to interpretation Bloodpressure test"),(0,l.mdx)("li",{parentName:"ul"},"Added single result bloodpressure test"),(0,l.mdx)("li",{parentName:"ul"},"Added Result hasError test"),(0,l.mdx)("li",{parentName:"ul"},"Added Result hasNoData test"),(0,l.mdx)("li",{parentName:"ul"},"Added Decorated Flowsheet test"),(0,l.mdx)("li",{parentName:"ul"},"Added Flowsheet hasError test"),(0,l.mdx)("li",{parentName:"ul"},"Added Flowsheet hasNoData test"),(0,l.mdx)("li",{parentName:"ul"},"Added Flowsheet numericOverflow test"),(0,l.mdx)("li",{parentName:"ul"},"Added '","_","BloodPressureDisplay' component to reduce clutter in 'ClinicalResultBloodPressure'"))),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("p",{parentName:"li"},"Removed"),(0,l.mdx)("ul",{parentName:"li"},(0,l.mdx)("li",{parentName:"ul"},"Removed unused test data"),(0,l.mdx)("li",{parentName:"ul"},"Removed default empty object prop from ClinicalResult and Observation.")))),(0,l.mdx)("h2",{id:"170---june-9-2020"},"1.7.0 - (June 9, 2020)"),(0,l.mdx)("ul",null,(0,l.mdx)("li",{parentName:"ul"},"Changed",(0,l.mdx)("ul",{parentName:"li"},(0,l.mdx)("li",{parentName:"ul"},"Minor file changes to comply with eslint rules")))),(0,l.mdx)("h2",{id:"160---april-28-2020"},"1.6.0 - (April 28, 2020)"),(0,l.mdx)("ul",null,(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("p",{parentName:"li"},"Added"),(0,l.mdx)("ul",{parentName:"li"},(0,l.mdx)("li",{parentName:"ul"},"Added ",(0,l.mdx)("inlineCode",{parentName:"li"},"directory")," as a sub attribute to the ",(0,l.mdx)("inlineCode",{parentName:"li"},"repository")," attribute in package.json"))),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("p",{parentName:"li"},"Removed"),(0,l.mdx)("ul",{parentName:"li"},(0,l.mdx)("li",{parentName:"ul"},'Removed "View Component Source Code" from docs in favour of source code badge')))),(0,l.mdx)("h2",{id:"150---april-22-2020"},"1.5.0 - (April 22, 2020)"),(0,l.mdx)("ul",null,(0,l.mdx)("li",{parentName:"ul"},"Fixed",(0,l.mdx)("ul",{parentName:"li"},(0,l.mdx)("li",{parentName:"ul"},"Fixed an issue with FlowsheetResultCell where status 'entered in error' and interpretations caused error text to be improperly aligned."),(0,l.mdx)("li",{parentName:"ul"},"Fixed an issue with FlowsheetResultCell where status 'entered in error' and interpretations in an extra result caused the multiple result icon to still show interpretation color.")))),(0,l.mdx)("h2",{id:"140---april-14-2020"},"1.4.0 - (April 14, 2020)"),(0,l.mdx)("ul",null,(0,l.mdx)("li",{parentName:"ul"},"Changed",(0,l.mdx)("ul",{parentName:"li"},(0,l.mdx)("li",{parentName:"ul"},"Update wdio test configuration to use root wdio config")))),(0,l.mdx)("h2",{id:"130---march-27-2020"},"1.3.0 - (March 27, 2020)"),(0,l.mdx)("ul",null,(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("p",{parentName:"li"},"Fixed"),(0,l.mdx)("ul",{parentName:"li"},(0,l.mdx)("li",{parentName:"ul"},"Fixed alpha truncation issue with FlowsheetResultCell"),(0,l.mdx)("li",{parentName:"ul"},"Fixed misnamed class in ClinicalResultBloodPresure"),(0,l.mdx)("li",{parentName:"ul"},"Fixed extra display truncation issue in ClinicalResult and ClinicalResultBloodPresure"))),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("p",{parentName:"li"},"Changed"),(0,l.mdx)("ul",{parentName:"li"},(0,l.mdx)("li",{parentName:"ul"},"Update docs to use mdx syntax.")))),(0,l.mdx)("h2",{id:"120---march-17-2020"},"1.2.0 - (March 17, 2020)"),(0,l.mdx)("ul",null,(0,l.mdx)("li",{parentName:"ul"},"Fixed",(0,l.mdx)("ul",{parentName:"li"},(0,l.mdx)("li",{parentName:"ul"},"Fixed an alignment issue with FlowsheetResultCell that caused normal interpretation results to be aligned to the left.")))),(0,l.mdx)("h2",{id:"110---march-10-2020"},"1.1.0 - (March 10, 2020)"),(0,l.mdx)("ul",null,(0,l.mdx)("li",{parentName:"ul"},"Fixed",(0,l.mdx)("ul",{parentName:"li"},(0,l.mdx)("li",{parentName:"ul"},"Fixed bug where ClinicalBloodPresure if provided both a systolic and diastolic object with ",(0,l.mdx)("inlineCode",{parentName:"li"},"resultNoData")," true, presented error result instead of no data result.")))),(0,l.mdx)("h2",{id:"100---march-6-2020"},"1.0.0 - (March 6, 2020)"),(0,l.mdx)("ul",null,(0,l.mdx)("li",{parentName:"ul"},"Initial stable release")))}o.isMDXComponent=!0;var s=["components"];function p(){return p=Object.assign?Object.assign.bind():function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var l in t)Object.prototype.hasOwnProperty.call(t,l)&&(e[l]=t[l])}return e},p.apply(this,arguments)}function x(e,a){if(null==e)return{};var t,l,r=function(e,a){if(null==e)return{};var t,l,r={},n=Object.keys(e);for(l=0;l<n.length;l++)t=n[l],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(l=0;l<n.length;l++)t=n[l],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c={},N="wrapper";function h(e){var a=e.components,t=x(e,s);return(0,l.mdx)(N,p({},c,t,{components:a,mdxType:"MDXLayout"}),(0,l.mdx)(r.C,{mdxType:"Badge"}),(0,l.mdx)(o,{mdxType:"ChangeLog"}))}h.isMDXComponent=!0},26372:function(e,a,t){t.d(a,{C:function(){return n}});var l=t(67294),r=t(22863),n=function(e){var a=e.url;return l.createElement(r.Z,{src:"https://github.com/cerner/terra-clinical/tree/main/packages/terra-clinical-result",name:"terra-clinical-result",version:"1.18.0",url:a})}},17422:function(e,a,t){t.r(a),a.default={badge:"Badges-module__badge___vex-+","badge-container":"Badges-module__badge-container___B13Mv","badge-name":"Badges-module__badge-name___jkN0m","badge-version":"Badges-module__badge-version___agZ+P"}}}]);