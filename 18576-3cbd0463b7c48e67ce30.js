"use strict";(self.webpackChunkterra_ui=self.webpackChunkterra_ui||[]).push([[18576,45627,85565,3353,5161,45865,85355,3193,4845,46647,85161,38681,15318,40411,18101,38443],{22863:function(e,a,t){var n=t(64836);a.Z=void 0;var r=n(t(67294)),i=n(t(45697)),d=n(t(47166)),o=n(t(17422)),m=d.default.bind(o.default),l={name:i.default.string.isRequired,src:i.default.string,url:i.default.string,version:i.default.string.isRequired},p=function(e){var a=e.src,t=e.name,n=e.url,i=e.version,d=r.default.createElement("a",{className:m("badge"),href:n||"https://www.npmjs.org/package/".concat(t,"/v/").concat(i)},r.default.createElement("span",{className:m("badge-name")},n?"package":"npm"),r.default.createElement("span",{className:m("badge-version")},"v".concat(i))),o=a?r.default.createElement("a",{className:m("badge"),href:a},r.default.createElement("span",{className:m("badge-name")},"github"),r.default.createElement("span",{className:m("badge-version")},"source")):void 0;return r.default.createElement("div",{className:m("badge-container")},d,o)};p.propTypes=l;var c=p;a.Z=c},18576:function(e,a,t){t.r(a),t.d(a,{default:function(){return p}});t(67294);var n=t(81254),r=t(72509),i=["components"];function d(){return d=Object.assign?Object.assign.bind():function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},d.apply(this,arguments)}function o(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var m={},l="wrapper";function p(e){var a=e.components,t=o(e,i);return(0,n.mdx)(l,d({},m,t,{components:a,mdxType:"MDXLayout"}),(0,n.mdx)(r.C,{mdxType:"Badge"}),(0,n.mdx)("h1",{id:"terra-date-time-picker-upgrade-guide"},"Terra Date Time Picker Upgrade Guide"),(0,n.mdx)("h2",{id:"changes-from-version-3-to-version-4"},"Changes from version 3 to version 4"),(0,n.mdx)("h3",{id:"removed-props"},"Removed props"),(0,n.mdx)("ul",null,(0,n.mdx)("li",{parentName:"ul"},"Removed ",(0,n.mdx)("inlineCode",{parentName:"li"},"minDateTime")),(0,n.mdx)("li",{parentName:"ul"},"Removed ",(0,n.mdx)("inlineCode",{parentName:"li"},"maxDateTime")),(0,n.mdx)("li",{parentName:"ul"},"Removed ",(0,n.mdx)("inlineCode",{parentName:"li"},"releaseFocus")),(0,n.mdx)("li",{parentName:"ul"},"Removed ",(0,n.mdx)("inlineCode",{parentName:"li"},"requestFocus"))),(0,n.mdx)("h3",{id:"new-props"},"New props"),(0,n.mdx)("ul",null,(0,n.mdx)("li",{parentName:"ul"},"Added ",(0,n.mdx)("inlineCode",{parentName:"li"},"minDate")),(0,n.mdx)("li",{parentName:"ul"},"Added ",(0,n.mdx)("inlineCode",{parentName:"li"},"maxDate")),(0,n.mdx)("li",{parentName:"ul"},"Added ",(0,n.mdx)("inlineCode",{parentName:"li"},"onBlur")),(0,n.mdx)("li",{parentName:"ul"},"Added ",(0,n.mdx)("inlineCode",{parentName:"li"},"onFocus")),(0,n.mdx)("li",{parentName:"ul"},"Added ",(0,n.mdx)("inlineCode",{parentName:"li"},"onClickOutside"))),(0,n.mdx)("h3",{id:"changes-to-mindate-and-maxdate"},"Changes to minDate and maxDate"),(0,n.mdx)("p",null,"The time portion of the ISO date provided in the old ",(0,n.mdx)("inlineCode",{parentName:"p"},"minDateTime")," and ",(0,n.mdx)("inlineCode",{parentName:"p"},"maxDateTime")," props are now being ignored in the internal validation implementation and checking for ranges. Hence, these two props are renamed from ",(0,n.mdx)("inlineCode",{parentName:"p"},"minDateTime")," and ",(0,n.mdx)("inlineCode",{parentName:"p"},"maxDateTime")," to ",(0,n.mdx)("inlineCode",{parentName:"p"},"minDate")," and ",(0,n.mdx)("inlineCode",{parentName:"p"},"maxDate")," respectively. To uplift change ",(0,n.mdx)("inlineCode",{parentName:"p"},"minDateTime")," to ",(0,n.mdx)("inlineCode",{parentName:"p"},"minDate")," and ",(0,n.mdx)("inlineCode",{parentName:"p"},"maxDateTime")," to ",(0,n.mdx)("inlineCode",{parentName:"p"},"maxDate")," where applicable."),(0,n.mdx)("h3",{id:"changes-to-onblur-and-onfocus"},"Changes to onBlur and onFocus"),(0,n.mdx)("p",null,"The ",(0,n.mdx)("inlineCode",{parentName:"p"},"onBlur")," and ",(0,n.mdx)("inlineCode",{parentName:"p"},"onFocus")," props previously could be passed down as custom props. These props have now become first-class props. The ",(0,n.mdx)("inlineCode",{parentName:"p"},"onFocus")," prop used to be triggered when focus is moved from one date time element to another date time element of the same date-time-picker component. For example, the focus is moved from the date input to the hour input.  The ",(0,n.mdx)("inlineCode",{parentName:"p"},"onFocus")," prop will still be triggered if the date time picker component did not have focus and now just gained focus. However, if the focus is then moved from one date time element to another date time element, the ",(0,n.mdx)("inlineCode",{parentName:"p"},"onFocus")," callback now would not be triggered because the focus is still within the date time picker container. The ",(0,n.mdx)("inlineCode",{parentName:"p"},"onBlur")," callback now behaves similar to the ",(0,n.mdx)("inlineCode",{parentName:"p"},"onFocus")," callback where ",(0,n.mdx)("inlineCode",{parentName:"p"},"onBlur")," would not be triggered when focus is transfered from one date time element to another date time element of the same date-time-picker component. The ",(0,n.mdx)("inlineCode",{parentName:"p"},"onBlur")," callback would be triggered only when focus is lost from the entire date time picker component."),(0,n.mdx)("h3",{id:"changes-to-filterdate"},"Changes to filterDate"),(0,n.mdx)("p",null,"The parameter in the ",(0,n.mdx)("inlineCode",{parentName:"p"},"filterDate")," callback has changed from a moment date object to an ISO string representation of the date. The reason for this change is to keep consistency with other callbacks. To uplift create a new moment using the iSO date in the parameter."),(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-diff"},"import React from 'react';\nimport moment from 'moment-timezone';\nimport DateTimePicker from 'terra-date-time-picker';\n\nclass Default extends React.Component {\n  constructor() {\n    super();\n    this.handleFilterDate = this.handleFilterDate.bind(this);\n  }\n\n  handleFilterDate(date) {\n+   const momentDate = moment(date)\n    const day = momentDate.day();\n    return day !== 0 && day !== 6;\n  }\n\n  render() {\n    return (\n      <DateTimePicker\n        name=\"date-time-picker\"\n        filterDate={this.handleFilterDate}\n      />\n    );\n  }\n}\n\nexport default Default;\n")),(0,n.mdx)("h2",{id:"changes-from-version-2-to-version-3"},"Changes from version 2 to version 3"),(0,n.mdx)("h3",{id:"changes-to-css-custom-properties"},"Changes to CSS Custom Properties"),(0,n.mdx)("h4",{id:"renamed"},"Renamed"),(0,n.mdx)("table",null,(0,n.mdx)("thead",{parentName:"table"},(0,n.mdx)("tr",{parentName:"thead"},(0,n.mdx)("th",{parentName:"tr",align:null},"Previous"),(0,n.mdx)("th",{parentName:"tr",align:null},"New"))),(0,n.mdx)("tbody",{parentName:"table"},(0,n.mdx)("tr",{parentName:"tbody"},(0,n.mdx)("td",{parentName:"tr",align:null},"--terra-date-time-clarification-modal-background-color"),(0,n.mdx)("td",{parentName:"tr",align:null},"--terra-date-time-picker-clarification-modal-background-color")),(0,n.mdx)("tr",{parentName:"tbody"},(0,n.mdx)("td",{parentName:"tr",align:null},"--terra-date-time-clarification-modal-border"),(0,n.mdx)("td",{parentName:"tr",align:null},"--terra-date-time-picker-clarification-modal-border")),(0,n.mdx)("tr",{parentName:"tbody"},(0,n.mdx)("td",{parentName:"tr",align:null},"--terra-date-time-clarification-modal-border-radius"),(0,n.mdx)("td",{parentName:"tr",align:null},"--terra-date-time-picker-clarification-modal-border-radius")),(0,n.mdx)("tr",{parentName:"tbody"},(0,n.mdx)("td",{parentName:"tr",align:null},"--terra-date-time-clarification-modal-box-shadow"),(0,n.mdx)("td",{parentName:"tr",align:null},"--terra-date-time-picker-clarification-modal-box-shadow")),(0,n.mdx)("tr",{parentName:"tbody"},(0,n.mdx)("td",{parentName:"tr",align:null},"--terra-date-time-clarification-modal-foreground-color"),(0,n.mdx)("td",{parentName:"tr",align:null},"--terra-date-time-picker-clarification-modal-color")))),(0,n.mdx)("h4",{id:"added"},"Added"),(0,n.mdx)("ul",null,(0,n.mdx)("li",{parentName:"ul"},"--terra-date-time-picker-clarification-header-background-color"),(0,n.mdx)("li",{parentName:"ul"},"--terra-date-time-picker-clarification-header-border-bottom-color"),(0,n.mdx)("li",{parentName:"ul"},"--terra-date-time-picker-clarification-header-color"),(0,n.mdx)("li",{parentName:"ul"},"--terra-date-time-picker-clarification-header-height"),(0,n.mdx)("li",{parentName:"ul"},"--terra-date-time-picker-clarification-header-padding"),(0,n.mdx)("li",{parentName:"ul"},"--terra-date-time-picker-clarification-title-font-size"),(0,n.mdx)("li",{parentName:"ul"},"--terra-date-time-picker-clarification-title-line-height"),(0,n.mdx)("li",{parentName:"ul"},"--terra-date-time-picker-clarification-button-offset-background-color"),(0,n.mdx)("li",{parentName:"ul"},"--terra-date-time-picker-clarification-button-offset-height")))}p.isMDXComponent=!0},72509:function(e,a,t){t.d(a,{C:function(){return i}});var n=t(67294),r=t(22863),i=function(e){var a=e.url;return n.createElement(r.Z,{src:"https://github.com/cerner/terra-framework/tree/main/packages/terra-date-picker",name:"terra-date-picker",version:"4.85.0",url:a})}},17422:function(e,a,t){t.r(a),a.default={badge:"Badges-module__badge___vex-+","badge-container":"Badges-module__badge-container___B13Mv","badge-name":"Badges-module__badge-name___jkN0m","badge-version":"Badges-module__badge-version___agZ+P"}}}]);