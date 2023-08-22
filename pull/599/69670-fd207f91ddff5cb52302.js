"use strict";(self.webpackChunkterra_ui=self.webpackChunkterra_ui||[]).push([[69670,45627,85565,3353,5161,45865,85355,3193,4845,46647,85161,38681,15318,40411,18101,38443],{22863:function(e,t,n){var a=n(64836);t.Z=void 0;var r=a(n(67294)),i=a(n(45697)),o=a(n(47166)),l=a(n(17422)),d=o.default.bind(l.default),m={name:i.default.string.isRequired,src:i.default.string,url:i.default.string,version:i.default.string.isRequired},u=function(e){var t=e.src,n=e.name,a=e.url,i=e.version,o=r.default.createElement("a",{className:d("badge"),href:a||"https://www.npmjs.org/package/".concat(n,"/v/").concat(i)},r.default.createElement("span",{className:d("badge-name")},a?"package":"npm"),r.default.createElement("span",{className:d("badge-version")},"v".concat(i))),l=t?r.default.createElement("a",{className:d("badge"),href:t},r.default.createElement("span",{className:d("badge-name")},"github"),r.default.createElement("span",{className:d("badge-version")},"source")):void 0;return r.default.createElement("div",{className:d("badge-container")},o,l)};u.propTypes=m;var s=u;t.Z=s},69670:function(e,t,n){n.r(t),n.d(t,{default:function(){return u}});n(67294);var a=n(81254),r=n(18778),i=["components"];function o(){return o=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},o.apply(this,arguments)}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d={},m="wrapper";function u(e){var t=e.components,n=l(e,i);return(0,a.mdx)(m,o({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.mdx)(r.C,{mdxType:"Badge"}),(0,a.mdx)("h1",{id:"terra-button-upgrade-guide"},"Terra Button Upgrade Guide"),(0,a.mdx)("h2",{id:"changes-from-version-2-to-version-3"},"Changes from version 2 to version 3"),(0,a.mdx)("h3",{id:"changes-to-css-custom-properties"},"Changes to CSS Custom Properties"),(0,a.mdx)("h4",{id:"removed"},"Removed"),(0,a.mdx)("ul",null,(0,a.mdx)("li",{parentName:"ul"},"--terra-button-vertical-padding"),(0,a.mdx)("li",{parentName:"ul"},"--terra-button-text-only-horizontal-margin"),(0,a.mdx)("li",{parentName:"ul"},"--terra-button-icon-only-horizontal-margin"),(0,a.mdx)("li",{parentName:"ul"},"--terra-button-text-and-icon-horizontal-margin"),(0,a.mdx)("li",{parentName:"ul"},"--terra-button-text-and-icon-margin-between")),(0,a.mdx)("h4",{id:"added"},"Added"),(0,a.mdx)("ul",null,(0,a.mdx)("li",{parentName:"ul"},"--terra-button-padding-bottom"),(0,a.mdx)("li",{parentName:"ul"},"--terra-button-padding-top"),(0,a.mdx)("li",{parentName:"ul"},"--terra-button-text-only-margin-left"),(0,a.mdx)("li",{parentName:"ul"},"--terra-button-text-only-margin-right"),(0,a.mdx)("li",{parentName:"ul"},"--terra-button-icon-only-margin-left"),(0,a.mdx)("li",{parentName:"ul"},"--terra-button-icon-only-margin-right"),(0,a.mdx)("li",{parentName:"ul"},"--terra-button-text-and-icon-margin-left"),(0,a.mdx)("li",{parentName:"ul"},"--terra-button-text-and-icon-margin-right"),(0,a.mdx)("li",{parentName:"ul"},"--terra-button-text-first-margin-right"),(0,a.mdx)("li",{parentName:"ul"},"--terra-button-icon-first-margin-right")),(0,a.mdx)("h2",{id:"changes-from-version-1-to-version-2"},"Changes from version 1 to version 2"),(0,a.mdx)("p",null,"With the release of terra-button v2.0.0, the button and\nbutton group components have been updated to align to the One Cerner\nStandard Design. With that alignment, there are some noted changes to these\ncomponents and components that depend on terra-button and\nterra-button-group."),(0,a.mdx)("p",null,"Check out the ",(0,a.mdx)("a",{parentName:"p",href:"https://github.com/cerner/terra-core/blob/main/packages/terra-button/CHANGELOG.md#200---february-12-2018"},"CHANGELOG for terra-button")," to view all the changes in the v2.0.0 release."),(0,a.mdx)("h2",{id:"noted-terra-button-changes"},"Noted Terra Button Changes"),(0,a.mdx)("h3",{id:"variantstypes"},"Variants/Types:"),(0,a.mdx)("ul",null,(0,a.mdx)("li",{parentName:"ul"},'"Default" got remapped to "Neutral" (gray)'),(0,a.mdx)("li",{parentName:"ul"},'"Primary" got remapped to "Emphasis" (blue)'),(0,a.mdx)("li",{parentName:"ul"},'"Link"-style button is now gone, "De-Emphasis" will be your replacement\nfor the most part in most cases.',(0,a.mdx)("ul",{parentName:"li"},(0,a.mdx)("li",{parentName:"ul"},'The de-emphasis button does not include an underline on hover - that\nis a hyperlink and you will need to use hyperlink to achieve that\nstyling. But Blue text (a de-decorated button with only a\n"key-color" as the interaction indication) still remains, and while\napps are in a "hybrid" replacement mode (Orion TRVM, BlueSteel, etc)\nfor a period of time where parts are old and parts are new, we won\'t\ndo a hover background treatment but only a dark blue color change so\nthere isn\'t a super noticeable difference. Pressing on the\nde-emphasis button will show what the hover may look like in the\nfuture. Check with UX for guidance to appropriate usage.'),(0,a.mdx)("li",{parentName:"ul"},"The OCS Clinical theme does not include this visual style of button,\nso a future theme switch will need to be evaluated by UX before a\nteam does so."))),(0,a.mdx)("li",{parentName:"ul"},"The secondary variant has been removed.")),(0,a.mdx)("h3",{id:"new-action-variant"},'New: "Action" variant'),(0,a.mdx)("ul",null,(0,a.mdx)("li",{parentName:"ul"},'Mainly added for OCS Consumer (Wellness, Patient Portal, etc), or\nnew designs needing "floating" action buttons'),(0,a.mdx)("li",{parentName:"ul"},"Check with UX before using them in any existing projects")),(0,a.mdx)("h3",{id:"new-utility-variant"},'New: "Utility" variant'),(0,a.mdx)("ul",null,(0,a.mdx)("li",{parentName:"ul"},'Not used except for construction of re-usable components, think of\nthe close "X" in a dialog'),(0,a.mdx)("li",{parentName:"ul"},"Check with UX before using them")),(0,a.mdx)("p",null,(0,a.mdx)("strong",{parentName:"p"},'Others not included on initial 2.0 release: "Secondary"(green),\n"Outline", "Positive"(green), "Negative"(red)')),(0,a.mdx)("p",null,"These can be added as requested, and made available in Terra even though\nthey are not OCS standard, mainly to assist in teams doing architecture\nreplacement (TRVM for React, BlueSteel for React, etc.) or teams in\nHybrid mode (some new React, some original app)"),(0,a.mdx)("p",null,"They will be documented as non-OCS, so that is clear teams using them\nwill require a UX eval before switching to an OCS theme (Clinical or\nConsumer) in the future."),(0,a.mdx)("h3",{id:"sizes-variant-changes"},"Sizes variant changes:"),(0,a.mdx)("ul",null,(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("p",{parentName:"li"},'"Tiny/Small/Medium/Large/Huge" : all the size varianets have been removed.')),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("p",{parentName:"li"},'"Compact" : Still available with no change.'),(0,a.mdx)("ul",{parentName:"li"},(0,a.mdx)("li",{parentName:"ul"},"May be needed for use in Tables, MPages Fusion compatibility, or a\nterra-mpagestyle-theme, reach out to UX if you want to use this.")))))}u.isMDXComponent=!0},18778:function(e,t,n){n.d(t,{C:function(){return i}});var a=n(67294),r=n(22863),i=function(e){var t=e.url;return a.createElement(r.Z,{src:"https://github.com/cerner/terra-core/tree/main/packages/terra-button",name:"terra-button",version:"3.68.0",url:t})}},17422:function(e,t,n){n.r(t),t.default={badge:"Badges-module__badge___vex-+","badge-container":"Badges-module__badge-container___B13Mv","badge-name":"Badges-module__badge-name___jkN0m","badge-version":"Badges-module__badge-version___agZ+P"}}}]);