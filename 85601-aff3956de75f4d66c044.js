"use strict";(self.webpackChunkterra_ui=self.webpackChunkterra_ui||[]).push([[85601,45627,85565,3353,5161,45865,85355,3193,4845,46647,85161,38681,15318,40411,18101,38443,11264,34319,20116,33609],{22863:function(e,r,a){var t=a(64836);r.Z=void 0;var o=t(a(67294)),n=t(a(45697)),d=t(a(19845)),m=t(a(17422)),l=d.default.bind(m.default),i={name:n.default.string.isRequired,src:n.default.string,url:n.default.string,version:n.default.string.isRequired},p=function(e){var r=e.src,a=e.name,t=e.url,n=e.version,d=o.default.createElement("a",{className:l("badge"),href:t||"https://www.npmjs.org/package/".concat(a,"/v/").concat(n)},o.default.createElement("span",{className:l("badge-name")},t?"package":"npm"),o.default.createElement("span",{className:l("badge-version")},"v".concat(n))),m=r?o.default.createElement("a",{className:l("badge"),href:r},o.default.createElement("span",{className:l("badge-name")},"github"),o.default.createElement("span",{className:l("badge-version")},"source")):void 0;return o.default.createElement("div",{className:l("badge-container")},d,m)};p.propTypes=i;var s=p;r.Z=s},85601:function(e,r,a){a.r(r),a.d(r,{default:function(){return p}});a(67294);var t=a(81254),o=a(58038),n=["components"];function d(){return d=Object.assign?Object.assign.bind():function(e){for(var r=1;r<arguments.length;r++){var a=arguments[r];for(var t in a)Object.prototype.hasOwnProperty.call(a,t)&&(e[t]=a[t])}return e},d.apply(this,arguments)}function m(e,r){if(null==e)return{};var a,t,o=function(e,r){if(null==e)return{};var a,t,o={},n=Object.keys(e);for(t=0;t<n.length;t++)a=n[t],r.indexOf(a)>=0||(o[a]=e[a]);return o}(e,r);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(t=0;t<n.length;t++)a=n[t],r.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var l={},i="wrapper";function p(e){var r=e.components,a=m(e,n);return(0,t.mdx)(i,d({},l,a,{components:r,mdxType:"MDXLayout"}),(0,t.mdx)(o.C,{mdxType:"Badge"}),(0,t.mdx)("h1",{id:"terra-form-textarea-upgrade-guide"},"Terra Form Textarea Upgrade Guide"),(0,t.mdx)("h2",{id:"changes-from-version-4-to-version-5"},"Changes from version 4 to version 5"),(0,t.mdx)("h3",{id:"props"},"Props"),(0,t.mdx)("h4",{id:"removed"},"Removed"),(0,t.mdx)("ul",null,(0,t.mdx)("li",{parentName:"ul"},"Removed ",(0,t.mdx)("inlineCode",{parentName:"li"},"placeholder")," prop from ",(0,t.mdx)("inlineCode",{parentName:"li"},"Textarea")," and  ",(0,t.mdx)("inlineCode",{parentName:"li"},"TextareaField"),".")),(0,t.mdx)("h3",{id:"changes-to-css-custom-properties"},"Changes to CSS Custom Properties"),(0,t.mdx)("h4",{id:"removed-1"},"Removed"),(0,t.mdx)("ul",null,(0,t.mdx)("li",{parentName:"ul"},"--terra-form-textarea-placeholder-color"),(0,t.mdx)("li",{parentName:"ul"},"--terra-form-textarea-placeholder-font-style"),(0,t.mdx)("li",{parentName:"ul"},"--terra-form-textarea-placeholder-disabled-color"),(0,t.mdx)("li",{parentName:"ul"},"--terra-form-textarea-placeholder-disabled-font-style")),(0,t.mdx)("h5",{id:"steps-to-upgrade"},"Steps to Upgrade"),(0,t.mdx)("p",null,"To upgrade from 4.0 to 5.0 each existing Textarea and TextareaField must be reviewed and updated to ensure no ",(0,t.mdx)("inlineCode",{parentName:"p"},"placeholder")," prop is passed to it. This is done to follow WCAG (",(0,t.mdx)("a",{parentName:"p",href:"https://www.w3.org/WAI/GL/low-vision-a11y-tf/wiki/Placeholder_Research"},"for more info"),")."),(0,t.mdx)("ul",null,(0,t.mdx)("li",{parentName:"ul"},(0,t.mdx)("p",{parentName:"li"},(0,t.mdx)("inlineCode",{parentName:"p"},"Textarea")," component will not be supporting ",(0,t.mdx)("inlineCode",{parentName:"p"},"placeholder")," prop and ",(0,t.mdx)("inlineCode",{parentName:"p"},"native placeholder"),". If consumers want to provide a detailed text guidance they can upgrade to ",(0,t.mdx)("inlineCode",{parentName:"p"},"TextareaField"),".")),(0,t.mdx)("li",{parentName:"ul"},(0,t.mdx)("p",{parentName:"li"},(0,t.mdx)("inlineCode",{parentName:"p"},"TextareaField")," component will not be supporting ",(0,t.mdx)("inlineCode",{parentName:"p"},"placeholder")," prop and ",(0,t.mdx)("inlineCode",{parentName:"p"},"native placeholder"),". But consumers may utilize the ",(0,t.mdx)("inlineCode",{parentName:"p"},"help")," text field properties to provide similar guidance to the user using ",(0,t.mdx)("inlineCode",{parentName:"p"},"help")," prop."))),(0,t.mdx)("h2",{id:"changes-from-version-3-to-version-4"},"Changes from version 3 to version 4"),(0,t.mdx)("h3",{id:"props-1"},"Props"),(0,t.mdx)("h4",{id:"updated"},"Updated"),(0,t.mdx)("ul",null,(0,t.mdx)("li",{parentName:"ul"},"Form Fields allowed the ",(0,t.mdx)("inlineCode",{parentName:"li"},"label")," to be a node, which potentially breaks the display when injecting other non-inline-only text elements (terra-text) or has the potential to completely break accessibility if something non-text based would be passed in."),(0,t.mdx)("li",{parentName:"ul"},(0,t.mdx)("inlineCode",{parentName:"li"},"label")," prop's type changed from node to string.")),(0,t.mdx)("h5",{id:"steps-to-upgrade-1"},"Steps to Upgrade"),(0,t.mdx)("p",null,"To upgrade from 3.0 to 4.0 each existing Textarea must be reviewed and updated to ensure only a string is being passed to the ",(0,t.mdx)("inlineCode",{parentName:"p"},"label")," props. Solutions passing node data types need to be reworked to provide only a string."),(0,t.mdx)("h2",{id:"changes-from-version-2-to-version-3"},"Changes from version 2 to version 3"),(0,t.mdx)("h3",{id:"changes-to-css-custom-properties-1"},"Changes to CSS Custom Properties"),(0,t.mdx)("h4",{id:"renamed"},"Renamed"),(0,t.mdx)("table",null,(0,t.mdx)("thead",{parentName:"table"},(0,t.mdx)("tr",{parentName:"thead"},(0,t.mdx)("th",{parentName:"tr",align:null},"Previous"),(0,t.mdx)("th",{parentName:"tr",align:null},"New"))),(0,t.mdx)("tbody",{parentName:"table"},(0,t.mdx)("tr",{parentName:"tbody"},(0,t.mdx)("td",{parentName:"tr",align:null},"--terra-form-textarea-focus-animation-background"),(0,t.mdx)("td",{parentName:"tr",align:null},"--terra-form-textarea-background-image")),(0,t.mdx)("tr",{parentName:"tbody"},(0,t.mdx)("td",{parentName:"tr",align:null},"--terra-form-textarea-focus-background-start"),(0,t.mdx)("td",{parentName:"tr",align:null},"--terra-form-textarea-background-size")),(0,t.mdx)("tr",{parentName:"tbody"},(0,t.mdx)("td",{parentName:"tr",align:null},"--terra-form-textarea-focus-keyboard-animation-size"),(0,t.mdx)("td",{parentName:"tr",align:null},"--terra-form-textarea-focus-background-size")),(0,t.mdx)("tr",{parentName:"tbody"},(0,t.mdx)("td",{parentName:"tr",align:null},"--terra-form-textarea-focus-keyboard-border-color"),(0,t.mdx)("td",{parentName:"tr",align:null},"--terra-form-textarea-focus-border-color")),(0,t.mdx)("tr",{parentName:"tbody"},(0,t.mdx)("td",{parentName:"tr",align:null},"--terra-form-textarea-focus-keyboard-border-style"),(0,t.mdx)("td",{parentName:"tr",align:null},"--terra-form-textarea-focus-border-style")),(0,t.mdx)("tr",{parentName:"tbody"},(0,t.mdx)("td",{parentName:"tr",align:null},"--terra-form-textarea-focus-keyboard-border-width"),(0,t.mdx)("td",{parentName:"tr",align:null},"--terra-form-textarea-focus-border-width")),(0,t.mdx)("tr",{parentName:"tbody"},(0,t.mdx)("td",{parentName:"tr",align:null},"--terra-form-textarea-focus-keyboard-opacity"),(0,t.mdx)("td",{parentName:"tr",align:null},"--terra-form-textarea-focus-opacity")),(0,t.mdx)("tr",{parentName:"tbody"},(0,t.mdx)("td",{parentName:"tr",align:null},"--terra-form-textarea-focus-keyboard-box-shadow-ltr"),(0,t.mdx)("td",{parentName:"tr",align:null},"--terra-form-textarea-focus-ltr-box-shadow")),(0,t.mdx)("tr",{parentName:"tbody"},(0,t.mdx)("td",{parentName:"tr",align:null},"--terra-form-textarea-focus-keyboard-box-shadow-rtl"),(0,t.mdx)("td",{parentName:"tr",align:null},"--terra-form-textarea-focus-rtl-box-shadow")),(0,t.mdx)("tr",{parentName:"tbody"},(0,t.mdx)("td",{parentName:"tr",align:null},"--terra-form-textarea-error-focus-animation-background"),(0,t.mdx)("td",{parentName:"tr",align:null},"--terra-form-textarea-error-background-image")),(0,t.mdx)("tr",{parentName:"tbody"},(0,t.mdx)("td",{parentName:"tr",align:null},"--terra-form-textarea-error-focus-keyboard-animation-size"),(0,t.mdx)("td",{parentName:"tr",align:null},"--terra-form-textarea-error-focus-background-size")),(0,t.mdx)("tr",{parentName:"tbody"},(0,t.mdx)("td",{parentName:"tr",align:null},"--terra-form-textarea-error-focus-keyboard-border-color"),(0,t.mdx)("td",{parentName:"tr",align:null},"--terra-form-textarea-error-focus-border-color")),(0,t.mdx)("tr",{parentName:"tbody"},(0,t.mdx)("td",{parentName:"tr",align:null},"--terra-form-textarea-error-focus-keyboard-border-style"),(0,t.mdx)("td",{parentName:"tr",align:null},"--terra-form-textarea-error-focus-border-style")),(0,t.mdx)("tr",{parentName:"tbody"},(0,t.mdx)("td",{parentName:"tr",align:null},"--terra-form-textarea-error-focus-keyboard-border-width"),(0,t.mdx)("td",{parentName:"tr",align:null},"--terra-form-textarea-error-focus-border-width")),(0,t.mdx)("tr",{parentName:"tbody"},(0,t.mdx)("td",{parentName:"tr",align:null},"--terra-form-textarea-error-focus-keyboard-opacity"),(0,t.mdx)("td",{parentName:"tr",align:null},"--terra-form-textarea-error-focus-opacity")),(0,t.mdx)("tr",{parentName:"tbody"},(0,t.mdx)("td",{parentName:"tr",align:null},"--terra-form-textarea-error-focus-keyboard-box-shadow-ltr"),(0,t.mdx)("td",{parentName:"tr",align:null},"--terra-form-textarea-error-focus-ltr-box-shadow")),(0,t.mdx)("tr",{parentName:"tbody"},(0,t.mdx)("td",{parentName:"tr",align:null},"--terra-form-textarea-error-focus-keyboard-box-shadow-rtl"),(0,t.mdx)("td",{parentName:"tr",align:null},"--terra-form-textarea-error-focus-rtl-box-shadow")))),(0,t.mdx)("h4",{id:"added"},"Added"),(0,t.mdx)("ul",null,(0,t.mdx)("li",{parentName:"ul"},"--terra-form-textarea-hover-background-color"),(0,t.mdx)("li",{parentName:"ul"},"--terra-form-textarea-hover-color"),(0,t.mdx)("li",{parentName:"ul"},"--terra-form-textarea-focus-background-color"),(0,t.mdx)("li",{parentName:"ul"},"--terra-form-textarea-focus-color"),(0,t.mdx)("li",{parentName:"ul"},"--terra-form-textarea-error-background-color"),(0,t.mdx)("li",{parentName:"ul"},"--terra-form-textarea-error-hover-background-color"),(0,t.mdx)("li",{parentName:"ul"},"--terra-form-textarea-error-hover-color"),(0,t.mdx)("li",{parentName:"ul"},"--terra-form-textarea-error-focus-background-color"),(0,t.mdx)("li",{parentName:"ul"},"--terra-form-textarea-error-focus-color")),(0,t.mdx)("h4",{id:"removed-2"},"Removed"),(0,t.mdx)("ul",null,(0,t.mdx)("li",{parentName:"ul"},"--terra-form-textarea-cursor")))}p.isMDXComponent=!0},58038:function(e,r,a){a.d(r,{C:function(){return n}});var t=a(67294),o=a(22863),n=function(e){var r=e.url;return t.createElement(o.Z,{src:"https://github.com/cerner/terra-core/tree/main/packages/terra-form-textarea",name:"terra-form-textarea",version:"5.31.0",url:r})}},17422:function(e,r,a){a.r(r),r.default={badge:"Badges-module__badge___vex-+","badge-container":"Badges-module__badge-container___B13Mv","badge-name":"Badges-module__badge-name___jkN0m","badge-version":"Badges-module__badge-version___agZ+P"}}}]);