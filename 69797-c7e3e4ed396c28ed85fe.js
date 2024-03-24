"use strict";(self.webpackChunkterra_ui=self.webpackChunkterra_ui||[]).push([[69797,17711,40092,72949,95330,7235,29616,62473,84854,38663,61044,92260,69879,47498,25117,81784,59403,37022,14641,71308,48927,98463,20844,53701],{55713:function(e,t,n){var a=n(24994);t.A=void 0;var r=a(n(96540)),o=a(n(5556)),d=a(n(67967)),i=a(n(25642)),l=d.default.bind(i.default),s={name:o.default.string.isRequired,src:o.default.string,url:o.default.string,version:o.default.string.isRequired},m=function(e){var t=e.src,n=e.name,a=e.url,o=e.version,d=r.default.createElement("a",{className:l("badge"),href:a||"https://www.npmjs.org/package/".concat(n,"/v/").concat(o)},r.default.createElement("span",{className:l("badge-name")},a?"package":"npm"),r.default.createElement("span",{className:l("badge-version")},"v".concat(o))),i=t?r.default.createElement("a",{className:l("badge"),href:t},r.default.createElement("span",{className:l("badge-name")},"github"),r.default.createElement("span",{className:l("badge-version")},"source")):void 0;return r.default.createElement("div",{className:l("badge-container")},d,i)};m.propTypes=s;t.A=m},69797:function(e,t,n){n.r(t),n.d(t,{default:function(){return m}});n(96540);var a=n(36665),r=n(58544),o=["components"];function d(){return d=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},d.apply(this,arguments)}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l={},s="wrapper";function m(e){var t=e.components,n=i(e,o);return(0,a.mdx)(s,d({},l,n,{components:t,mdxType:"MDXLayout"}),(0,a.mdx)(r.E,{mdxType:"Badge"}),(0,a.mdx)("h1",{id:"terra-date-picker-upgrade-guide"},"Terra Date Picker Upgrade Guide"),(0,a.mdx)("h2",{id:"changes-from-version-3-to-version-4"},"Changes from version 3 to version 4"),(0,a.mdx)("h3",{id:"removed-props"},"Removed props"),(0,a.mdx)("ul",null,(0,a.mdx)("li",{parentName:"ul"},"Removed ",(0,a.mdx)("inlineCode",{parentName:"li"},"releaseFocus")),(0,a.mdx)("li",{parentName:"ul"},"Removed ",(0,a.mdx)("inlineCode",{parentName:"li"},"requestFocus"))),(0,a.mdx)("h3",{id:"new-props"},"New props"),(0,a.mdx)("ul",null,(0,a.mdx)("li",{parentName:"ul"},"Added ",(0,a.mdx)("inlineCode",{parentName:"li"},"onBlur")),(0,a.mdx)("li",{parentName:"ul"},"Added ",(0,a.mdx)("inlineCode",{parentName:"li"},"onFocus"))),(0,a.mdx)("h3",{id:"changes-to-onblur-and-onfocus"},"Changes to onBlur and onFocus"),(0,a.mdx)("p",null,"The ",(0,a.mdx)("inlineCode",{parentName:"p"},"onBlur")," and ",(0,a.mdx)("inlineCode",{parentName:"p"},"onFocus")," props previously could be passed down as custom props. These props have now become first-class props. The ",(0,a.mdx)("inlineCode",{parentName:"p"},"onFocus")," prop used to be triggered when focus is moved from the date input to the calendar button or vise versa. The ",(0,a.mdx)("inlineCode",{parentName:"p"},"onFocus")," prop will still be triggered if the date picker component did not have focus and now just gained focus. However, if the focus is then moved from the date input to the calendar button or vise versa, the ",(0,a.mdx)("inlineCode",{parentName:"p"},"onFocus")," callback now would not be triggered because the focus is still within the date picker container. The ",(0,a.mdx)("inlineCode",{parentName:"p"},"onBlur")," callback now behaves similar to the ",(0,a.mdx)("inlineCode",{parentName:"p"},"onFocus")," callback where ",(0,a.mdx)("inlineCode",{parentName:"p"},"onBlur")," would not be triggered when focus is transfered from the date input to the calendar button. The ",(0,a.mdx)("inlineCode",{parentName:"p"},"onBlur")," callback would be triggered only when focus is lost from the entire date picker component."),(0,a.mdx)("h3",{id:"changes-to-filterdate"},"Changes to filterDate"),(0,a.mdx)("p",null,"The parameter in the ",(0,a.mdx)("inlineCode",{parentName:"p"},"filterDate")," callback has changed from a moment date object to an ISO string representation of the date. The reason for this change is to keep consistency with other callbacks."),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-diff"},"import React from 'react';\nimport moment from 'moment-timezone';\nimport DatePicker from 'terra-date-picker';\n\nclass Default extends React.Component {\n  constructor() {\n    super();\n    this.handleFilterDate = this.handleFilterDate.bind(this);\n  }\n\n  handleFilterDate(date) {\n+   const momentDate = moment(date)\n    const day = momentDate.day();\n    return day !== 0 && day !== 6;\n  }\n\n  render() {\n    return (\n      <DatePicker\n        name=\"date-picker\"\n        filterDate={this.handleFilterDate}\n      />\n    );\n  }\n}\n\nexport default Default;\n")),(0,a.mdx)("h2",{id:"changes-from-version-2-to-version-3"},"Changes from version 2 to version 3"),(0,a.mdx)("h3",{id:"changes-to-css-custom-properties"},"Changes to CSS Custom Properties"),(0,a.mdx)("h4",{id:"added"},"Added"),(0,a.mdx)("ul",null,(0,a.mdx)("li",{parentName:"ul"},"--terra-date-picker-input-focus-border-color"),(0,a.mdx)("li",{parentName:"ul"},"--terra-date-picker-button-border"),(0,a.mdx)("li",{parentName:"ul"},"--terra-date-picker-button-border-bottom-right-radius"),(0,a.mdx)("li",{parentName:"ul"},"--terra-date-picker-button-border-top-right-radius"),(0,a.mdx)("li",{parentName:"ul"},"--terra-date-picker-button-box-shadow"),(0,a.mdx)("li",{parentName:"ul"},"--terra-date-picker-button-color"),(0,a.mdx)("li",{parentName:"ul"},"--terra-date-picker-button-focus-border-color"),(0,a.mdx)("li",{parentName:"ul"},"--terra-date-picker-button-focus-box-shadow")))}m.isMDXComponent=!0},58544:function(e,t,n){n.d(t,{E:function(){return o}});var a=n(96540),r=n(55713),o=function(e){var t=e.url;return a.createElement(r.A,{src:"https://github.com/cerner/terra-framework/tree/main/packages/terra-date-picker",name:"terra-date-picker",version:"4.104.0",url:t})}},25642:function(e,t,n){n.r(t),t.default={badge:"Badges-module__badge___vex-+","badge-container":"Badges-module__badge-container___B13Mv","badge-name":"Badges-module__badge-name___jkN0m","badge-version":"Badges-module__badge-version___agZ+P"}}}]);