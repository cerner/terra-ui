"use strict";(self.webpackChunkterra_ui=self.webpackChunkterra_ui||[]).push([[94007,45627,85565,3353,5161,45865,85355,3193,4845,46647,85161,38681,15318,40411,18101],{22863:function(e,r,t){var a=t(64836);r.Z=void 0;var n=a(t(67294)),o=a(t(45697)),d=a(t(47166)),l=a(t(17422)),i=d.default.bind(l.default),m={name:o.default.string.isRequired,src:o.default.string,url:o.default.string,version:o.default.string.isRequired},p=function(e){var r=e.src,t=e.name,a=e.url,o=e.version,d=n.default.createElement("a",{className:i("badge"),href:a||"https://www.npmjs.org/package/".concat(t,"/v/").concat(o)},n.default.createElement("span",{className:i("badge-name")},a?"package":"npm"),n.default.createElement("span",{className:i("badge-version")},"v".concat(o))),l=r?n.default.createElement("a",{className:i("badge"),href:r},n.default.createElement("span",{className:i("badge-name")},"github"),n.default.createElement("span",{className:i("badge-version")},"source")):void 0;return n.default.createElement("div",{className:i("badge-container")},d,l)};p.propTypes=m;var u=p;r.Z=u},94007:function(e,r,t){t.r(r),t.d(r,{default:function(){return p}});t(67294);var a=t(81254),n=t(99614),o=["components"];function d(){return d=Object.assign?Object.assign.bind():function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},d.apply(this,arguments)}function l(e,r){if(null==e)return{};var t,a,n=function(e,r){if(null==e)return{};var t,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var i={},m="wrapper";function p(e){var r=e.components,t=l(e,o);return(0,a.mdx)(m,d({},i,t,{components:r,mdxType:"MDXLayout"}),(0,a.mdx)(n.C,{mdxType:"Badge"}),(0,a.mdx)("h1",{id:"terra-form-input-upgrade-guide"},"Terra Form Input Upgrade Guide"),(0,a.mdx)("h2",{id:"changes-from-version-3-to-version-4"},"Changes from version 3 to version 4"),(0,a.mdx)("h3",{id:"props"},"Props"),(0,a.mdx)("h4",{id:"removed"},"Removed"),(0,a.mdx)("ul",null,(0,a.mdx)("li",{parentName:"ul"},"Removed ",(0,a.mdx)("inlineCode",{parentName:"li"},"placeholder")," prop from ",(0,a.mdx)("inlineCode",{parentName:"li"},"Input")," and  ",(0,a.mdx)("inlineCode",{parentName:"li"},"InputField"),".")),(0,a.mdx)("h3",{id:"changes-to-css-custom-properties"},"Changes to CSS Custom Properties"),(0,a.mdx)("h4",{id:"removed-1"},"Removed"),(0,a.mdx)("ul",null,(0,a.mdx)("li",{parentName:"ul"},"--terra-form-input-placeholder-color"),(0,a.mdx)("li",{parentName:"ul"},"--terra-form-input-placeholder-font-style"),(0,a.mdx)("li",{parentName:"ul"},"--terra-form-input-placeholder-disabled-color"),(0,a.mdx)("li",{parentName:"ul"},"--terra-form-input-placeholder-disabled-font-style")),(0,a.mdx)("h5",{id:"steps-to-upgrade"},"Steps to Upgrade"),(0,a.mdx)("p",null,"To upgrade from 3.0 to 4.0 each existing Input and InputField must be reviewed and updated to ensure no ",(0,a.mdx)("inlineCode",{parentName:"p"},"placeholder")," prop is passed to it. This is done to follow WCAG (",(0,a.mdx)("a",{parentName:"p",href:"https://www.w3.org/WAI/GL/low-vision-a11y-tf/wiki/Placeholder_Research"},"for more info"),")."),(0,a.mdx)("ul",null,(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("p",{parentName:"li"},(0,a.mdx)("inlineCode",{parentName:"p"},"Input")," component will not be supporting ",(0,a.mdx)("inlineCode",{parentName:"p"},"placeholder")," prop and ",(0,a.mdx)("inlineCode",{parentName:"p"},"native placeholder"),". If consumers want to provide a detailed text guidance they can upgrade to ",(0,a.mdx)("inlineCode",{parentName:"p"},"InputField"),".")),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("p",{parentName:"li"},(0,a.mdx)("inlineCode",{parentName:"p"},"InputField")," component will not be supporting ",(0,a.mdx)("inlineCode",{parentName:"p"},"placeholder")," prop and ",(0,a.mdx)("inlineCode",{parentName:"p"},"native placeholder"),". But consumers may utilize the ",(0,a.mdx)("inlineCode",{parentName:"p"},"help")," text field properties to provide similar guidance to the user using ",(0,a.mdx)("inlineCode",{parentName:"p"},"help")," prop."))),(0,a.mdx)("h2",{id:"changes-from-version-2-to-version-3"},"Changes from version 2 to version 3"),(0,a.mdx)("h3",{id:"props-1"},"Props"),(0,a.mdx)("h4",{id:"updated"},"Updated"),(0,a.mdx)("ul",null,(0,a.mdx)("li",{parentName:"ul"},"Form Fields allowed the ",(0,a.mdx)("inlineCode",{parentName:"li"},"label")," to be a node, which potentially breaks the display when injecting other non-inline-only text elements (terra-text) or has the potential to completely break accessibility if something non-text based would be passed in."),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("inlineCode",{parentName:"li"},"label")," prop's type changed from node to string.")),(0,a.mdx)("h5",{id:"steps-to-upgrade-1"},"Steps to Upgrade"),(0,a.mdx)("p",null,"To upgrade from 2.0 to 3.0 each existing Input must be reviewed and updated to ensure only a string is being passed to the ",(0,a.mdx)("inlineCode",{parentName:"p"},"label")," prop. Solutions passing node data types need to be reworked to provide only a string."),(0,a.mdx)("h2",{id:"changes-from-version-1-to-version-2"},"Changes from version 1 to version 2"),(0,a.mdx)("h3",{id:"changes-to-css-custom-properties-1"},"Changes to CSS Custom Properties"),(0,a.mdx)("h4",{id:"renamed"},"Renamed"),(0,a.mdx)("table",null,(0,a.mdx)("thead",{parentName:"table"},(0,a.mdx)("tr",{parentName:"thead"},(0,a.mdx)("th",{parentName:"tr",align:null},"Previous"),(0,a.mdx)("th",{parentName:"tr",align:null},"New"))),(0,a.mdx)("tbody",{parentName:"table"},(0,a.mdx)("tr",{parentName:"tbody"},(0,a.mdx)("td",{parentName:"tr",align:null},"--terra-form-input-focus-animation-background"),(0,a.mdx)("td",{parentName:"tr",align:null},"--terra-form-input-background-image")),(0,a.mdx)("tr",{parentName:"tbody"},(0,a.mdx)("td",{parentName:"tr",align:null},"--terra-form-input-focus-background-start"),(0,a.mdx)("td",{parentName:"tr",align:null},"--terra-form-input-background-size")),(0,a.mdx)("tr",{parentName:"tbody"},(0,a.mdx)("td",{parentName:"tr",align:null},"--terra-form-input-focus-keyboard-animation-size"),(0,a.mdx)("td",{parentName:"tr",align:null},"--terra-form-input-focus-background-size")),(0,a.mdx)("tr",{parentName:"tbody"},(0,a.mdx)("td",{parentName:"tr",align:null},"--terra-form-input-focus-keyboard-box-shadow-ltr"),(0,a.mdx)("td",{parentName:"tr",align:null},"--terra-form-input-focus-ltr-box-shadow")),(0,a.mdx)("tr",{parentName:"tbody"},(0,a.mdx)("td",{parentName:"tr",align:null},"--terra-form-input-focus-keyboard-box-shadow-rtl"),(0,a.mdx)("td",{parentName:"tr",align:null},"--terra-form-input-focus-rtl-box-shadow")),(0,a.mdx)("tr",{parentName:"tbody"},(0,a.mdx)("td",{parentName:"tr",align:null},"--terra-form-input-error-focus-animation-background"),(0,a.mdx)("td",{parentName:"tr",align:null},"--terra-form-input-error-background-image")),(0,a.mdx)("tr",{parentName:"tbody"},(0,a.mdx)("td",{parentName:"tr",align:null},"--terra-form-input-error-focus-keyboard-animation-size"),(0,a.mdx)("td",{parentName:"tr",align:null},"--terra-form-input-error-focus-background-size")),(0,a.mdx)("tr",{parentName:"tbody"},(0,a.mdx)("td",{parentName:"tr",align:null},"--terra-form-input-error-focus-keyboard-box-shadow-ltr"),(0,a.mdx)("td",{parentName:"tr",align:null},"--terra-form-input-error-focus-ltr-box-shadow")),(0,a.mdx)("tr",{parentName:"tbody"},(0,a.mdx)("td",{parentName:"tr",align:null},"--terra-form-input-error-focus-keyboard-box-shadow-rtl"),(0,a.mdx)("td",{parentName:"tr",align:null},"--terra-form-input-error-focus-rtl-box-shadow")))),(0,a.mdx)("h4",{id:"added"},"Added"),(0,a.mdx)("ul",null,(0,a.mdx)("li",{parentName:"ul"},"--terra-form-input-hover-background-color"),(0,a.mdx)("li",{parentName:"ul"},"--terra-form-input-hover-color"),(0,a.mdx)("li",{parentName:"ul"},"--terra-form-input-focus-color"),(0,a.mdx)("li",{parentName:"ul"},"--terra-form-input-error-background-color"),(0,a.mdx)("li",{parentName:"ul"},"--terra-form-input-error-hover-background-color")))}p.isMDXComponent=!0},99614:function(e,r,t){t.d(r,{C:function(){return o}});var a=t(67294),n=t(22863),o=function(e){var r=e.url;return a.createElement(n.Z,{src:"https://github.com/cerner/terra-core/tree/main/packages/terra-form-input",name:"terra-form-input",version:"4.22.0",url:r})}},17422:function(e,r,t){t.r(r),r.default={badge:"Badges-module__badge___vex-+","badge-container":"Badges-module__badge-container___B13Mv","badge-name":"Badges-module__badge-name___jkN0m","badge-version":"Badges-module__badge-version___agZ+P"}}}]);