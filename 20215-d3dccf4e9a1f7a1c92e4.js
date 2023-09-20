"use strict";(self.webpackChunkterra_ui=self.webpackChunkterra_ui||[]).push([[20215,45627,37344,33667,96890,14041,27444,85565,3353,80858,17657,5161,19260,45865,85355,33315,3193,4845,20444,26806,46647,85161,38681,17763,15318,40411,18101,38443,78996,39915,33442],{14598:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.twitterButton=t.textWithBlueBorder=t.textHealthSolutionsData=t.textConsentFormData=t.textClinicalData=t.simpleText=t.settingsButton=t.menuButton=t.homeButton=t.chatButton=t.backtotopButton=t.alignExampleDivBlue=t.alignExampleDiv=void 0;var l=d(n(67294)),a=d(n(55281)),r=d(n(47166)),i=d(n(14461)),o=n(51051),m=d(n(46826));function d(e){return e&&e.__esModule?e:{default:e}}var u=r.default.bind(m.default),c="terra-radio-group-".concat((0,i.default)()),p=function(e){var t=document.getElementById(c).querySelectorAll("[type=radio]"),n=Array.from(t).indexOf(e.currentTarget);e.key===o.VALUE_DOWN||e.key===o.VALUE_RIGHT?n===t.length-1?(t[0].focus(),t[0].checked=!0):(t[n+1].focus(),t[n+1].checked=!0):e.key!==o.VALUE_UP&&e.key!==o.VALUE_LEFT||(0===n?(t[t.length-1].focus(),t[t.length-1].checked=!0):(t[n-1].focus(),t[n-1].checked=!0))},s="This example provides content containers with a fit (start and/or end region) and fill (middle region). Arrange Props have one required prop which is fill to the content to display in the body of the fill.",f=l.default.createElement("span",null,s);t.simpleText=f;var x=l.default.createElement("span",{className:u("outlined-placeholder")},s);t.textWithBlueBorder=x;var g=l.default.createElement("span",null,"Clinical data is a staple resource for most health and medical research. Clinical data is either collected during the course of ongoing patient care or as part of a formal clinical trial program. For more information visit ",l.default.createElement("a",{href:"#clinical-information",onKeyDown:function(e){e.keyCode===o.KEY_SPACE&&e.preventDefault()}},"Clinical information")),h=l.default.createElement("span",null,"Trusted clinical technology and evidence-based solutions that drive effective decision-making and outcomes across healthcare. Specialized in clinical effectiveness, research and safety.",l.default.createElement("button",{type:"button",className:u("space-around"),onClick:function(){alert("Health solutions button has been clicked")}},"View all health solutions")),b=l.default.createElement(l.default.Fragment,null,l.default.createElement("span",null,"A telemedicine consent form is used to confirm that a patient agrees to telemedicine services, which are medical services done remotely over the phone or computer."),l.default.createElement("span",{className:u("space-around","radio-buttons"),id:c},l.default.createElement("label",{htmlFor:"yes"},l.default.createElement("input",{type:"radio",id:"yes",name:"inline-example",value:"yes",onKeyDown:p}),l.default.createElement("span",{className:u("label")},"Yes")),l.default.createElement("label",{htmlFor:"no"},l.default.createElement("input",{type:"radio",id:"no",name:"inline-example",value:"no",onKeyDown:p}),l.default.createElement("span",{className:u("label")},"No")))),E=l.default.createElement("span",{className:u("outlined-placeholder")},g);t.textClinicalData=E;var y=l.default.createElement("span",{className:u("outlined-placeholder","info-text")},h);t.textHealthSolutionsData=y;var v=l.default.createElement("span",{className:u("outlined-placeholder")},b);t.textConsentFormData=v;var _=l.default.createElement("span",{className:u("placeholder")});t.alignExampleDiv=_;var T=l.default.createElement("span",{className:u("highlighted-placeholder")});t.alignExampleDivBlue=T;var O=l.default.createElement(a.default,{className:u(["arrange-button"]),isIconOnly:!0,icon:l.default.createElement("span",{className:u(["header-icon","home"])}),onClick:function(){alert("Home button has been clicked")},text:"Home button"});t.homeButton=O;var N=l.default.createElement(a.default,{className:u(["arrange-button"]),isIconOnly:!0,icon:l.default.createElement("span",{className:u(["header-icon","menu"])}),onClick:function(){alert("Menu button has been clicked")},text:"Menu button"});t.menuButton=N;var C=l.default.createElement(a.default,{className:u(["arrange-button"]),isIconOnly:!0,icon:l.default.createElement("span",{className:u(["header-icon","chat"])}),onClick:function(){alert("Chat button has been clicked")},text:"Chat with us button"});t.chatButton=C;var D=l.default.createElement(a.default,{className:u(["arrange-button"]),isIconOnly:!0,icon:l.default.createElement("span",{className:u(["header-icon","settings"])}),onClick:function(){alert("Settings button has been clicked")},text:"Settings button"});t.settingsButton=D;var S=l.default.createElement(a.default,{className:u(["arrange-button"]),isIconOnly:!0,icon:l.default.createElement("span",{className:u(["header-icon","twitter"])}),onClick:function(){alert("Twitter button has been clicked")},text:"Twitter button"});t.twitterButton=S;var A=l.default.createElement(a.default,{className:u(["arrange-button"]),isIconOnly:!0,icon:l.default.createElement("span",{className:u(["header-icon","backtotop"])}),onClick:function(){alert("Back to top button has been clicked")},text:"Back to top button"});t.backtotopButton=A},50920:function(e,t,n){t.Z=void 0;var l=i(n(67294)),a=i(n(78490)),r=n(14598);function i(e){return e&&e.__esModule?e:{default:e}}var o=function(){return l.default.createElement("div",null,l.default.createElement("h3",null,"Align - Default"),l.default.createElement(a.default,{fitStart:r.homeButton,fill:r.textClinicalData,fitEnd:r.menuButton}),l.default.createElement("br",null),l.default.createElement("hr",null),l.default.createElement("h3",null,"Align - Center"),l.default.createElement(a.default,{align:"center",fitStart:r.settingsButton,fill:r.textHealthSolutionsData,fitEnd:r.chatButton}),l.default.createElement("br",null),l.default.createElement("hr",null),l.default.createElement("h3",null,"Align - Bottom"),l.default.createElement(a.default,{align:"bottom",fitStart:r.twitterButton,fill:r.textConsentFormData,fitEnd:r.backtotopButton}))};t.Z=o},36519:function(e,t,n){t.Z=void 0;var l=i(n(67294)),a=i(n(78490)),r=n(14598);function i(e){return e&&e.__esModule?e:{default:e}}var o=function(){return l.default.createElement("div",null,l.default.createElement("h3",null,"Align Fill - Default"),l.default.createElement(a.default,{fitStart:r.alignExampleDiv,fill:r.textWithBlueBorder,fitEnd:r.alignExampleDiv}),l.default.createElement("br",null),l.default.createElement("hr",null),l.default.createElement("h3",null,"Align Fill - Center"),l.default.createElement(a.default,{alignFill:"center",fitStart:r.alignExampleDiv,fill:r.textWithBlueBorder,fitEnd:r.alignExampleDiv}),l.default.createElement("br",null),l.default.createElement("hr",null),l.default.createElement("h3",null,"Align Fill - Bottom"),l.default.createElement(a.default,{alignFill:"bottom",fitStart:r.alignExampleDiv,fill:r.textWithBlueBorder,fitEnd:r.alignExampleDiv}))};t.Z=o},36824:function(e,t,n){t.Z=void 0;var l=i(n(67294)),a=i(n(78490)),r=n(14598);function i(e){return e&&e.__esModule?e:{default:e}}var o=function(){return l.default.createElement("div",null,l.default.createElement("h3",null,"Align FitEnd - Default"),l.default.createElement(a.default,{fitStart:r.alignExampleDiv,fill:r.simpleText,fitEnd:r.alignExampleDivBlue}),l.default.createElement("br",null),l.default.createElement("hr",null),l.default.createElement("h3",null,"Align FitEnd - Center"),l.default.createElement(a.default,{alignFitEnd:"center",fitStart:r.alignExampleDiv,fill:r.simpleText,fitEnd:r.alignExampleDivBlue}),l.default.createElement("br",null),l.default.createElement("hr",null),l.default.createElement("h3",null,"Align FitEnd - Bottom"),l.default.createElement(a.default,{alignFitEnd:"bottom",fitStart:r.alignExampleDiv,fill:r.simpleText,fitEnd:r.alignExampleDivBlue}))};t.Z=o},38956:function(e,t,n){t.Z=void 0;var l=i(n(67294)),a=i(n(78490)),r=n(14598);function i(e){return e&&e.__esModule?e:{default:e}}var o=function(){return l.default.createElement("div",null,l.default.createElement("h3",null,"Align FitStart - Default"),l.default.createElement(a.default,{fitStart:r.alignExampleDivBlue,fill:r.simpleText,fitEnd:r.alignExampleDiv}),l.default.createElement("br",null),l.default.createElement("hr",null),l.default.createElement("h3",null,"Align FitStart - Center"),l.default.createElement(a.default,{alignFitStart:"center",fitStart:r.alignExampleDivBlue,fill:r.simpleText,fitEnd:r.alignExampleDiv}),l.default.createElement("br",null),l.default.createElement("hr",null),l.default.createElement("h3",null,"Align FitStart - Bottom"),l.default.createElement(a.default,{alignFitStart:"bottom",fitStart:r.alignExampleDivBlue,fill:r.simpleText,fitEnd:r.alignExampleDiv}))};t.Z=o},22863:function(e,t,n){var l=n(64836);t.Z=void 0;var a=l(n(67294)),r=l(n(45697)),i=l(n(47166)),o=l(n(17422)),m=i.default.bind(o.default),d={name:r.default.string.isRequired,src:r.default.string,url:r.default.string,version:r.default.string.isRequired},u=function(e){var t=e.src,n=e.name,l=e.url,r=e.version,i=a.default.createElement("a",{className:m("badge"),href:l||"https://www.npmjs.org/package/".concat(n,"/v/").concat(r)},a.default.createElement("span",{className:m("badge-name")},l?"package":"npm"),a.default.createElement("span",{className:m("badge-version")},"v".concat(r))),o=t?a.default.createElement("a",{className:m("badge"),href:t},a.default.createElement("span",{className:m("badge-name")},"github"),a.default.createElement("span",{className:m("badge-version")},"source")):void 0;return a.default.createElement("div",{className:m("badge-container")},i,o)};u.propTypes=d;var c=u;t.Z=c},49271:function(e,t,n){var l=n(64836),a=n(18698);t.Z=void 0;var r=l(n(27424)),i=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==a(e)&&"function"!=typeof e)return{default:e};var n=f(t);if(n&&n.has(e))return n.get(e);var l={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if("default"!==i&&Object.prototype.hasOwnProperty.call(e,i)){var o=r?Object.getOwnPropertyDescriptor(e,i):null;o&&(o.get||o.set)?Object.defineProperty(l,i,o):l[i]=e[i]}l.default=e,n&&n.set(e,l);return l}(n(67294)),o=l(n(45697)),m=l(n(47166)),d=n(21538),u=l(n(33864)),c=l(n(23399)),p=n(51051),s=l(n(53560));function f(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(f=function(e){return e?n:t})(e)}var x=m.default.bind(s.default),g={example:o.default.element,exampleSrc:o.default.element,exampleCssSrc:o.default.element,title:o.default.string,description:o.default.node,isExpanded:o.default.bool},h=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","true")},b=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","false")},E=function(e){var t=e.example,n=e.exampleSrc,l=e.exampleCssSrc,a=e.title,o=e.description,m=e.isExpanded,s=(0,i.useState)(m),f=(0,r.default)(s,2),g=f[0],E=f[1],y=(0,i.useState)(!1),v=(0,r.default)(y,2),_=v[0],T=v[1],O=i.default.useContext(d.ThemeContext),N=void 0!==l,C=function(){T(!_),g&&E(!g)},D=function(){E(!g),_&&T(!_)},S=function(e,t){e.nativeEvent.keyCode!==p.KEY_SPACE&&e.nativeEvent.keyCode!==p.KEY_RETURN||(e.preventDefault(),t())};return i.default.createElement("div",{className:x("template",O.className)},i.default.createElement("div",{className:x("header")},a&&i.default.createElement("h2",{className:x("title")},a)),i.default.createElement("div",{className:x("content")},o&&i.default.createElement("div",{className:x("description")},o),t),i.default.createElement("div",{className:x("footer")},n?i.default.createElement("div",{className:x("button-container")},N&&i.default.createElement("button",{type:"button",className:x("css-toggle","item",{"is-selected":_}),onClick:C,onKeyDown:function(e){return S(e,C)},onBlur:h,onMouseDown:b,tabIndex:0,"data-focus-styles-enabled":!0},i.default.createElement(u.default,{className:x("chevron")}),i.default.createElement("span",null,"CSS"),i.default.createElement(c.default,{className:x("chevron")})),i.default.createElement("button",{type:"button",className:x("code-toggle","item",{"is-selected":g}),onClick:D,onKeyDown:function(e){return S(e,D)},onBlur:h,onMouseDown:b,tabIndex:0,"data-focus-styles-enabled":!0},i.default.createElement(u.default,{className:x("chevron")}),i.default.createElement("span",null,"Code"),i.default.createElement(c.default,{className:x("chevron")}))):null,i.default.createElement("div",null,_&&i.default.createElement("div",{className:x("css")},l),g&&i.default.createElement("div",{className:x("code")},n))))};E.propTypes=g,E.defaultProps={isExpanded:!1};var y=E;t.Z=y},33698:function(e,t,n){n.r(t),n.d(t,{default:function(){return K}});var l=n(67294),a=n(81254),r=n(86377),i=n(50920),o=["components"];function m(){return m=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var l in n)Object.prototype.hasOwnProperty.call(n,l)&&(e[l]=n[l])}return e},m.apply(this,arguments)}function d(e,t){if(null==e)return{};var n,l,a=function(e,t){if(null==e)return{};var n,l,a={},r=Object.keys(e);for(l=0;l<r.length;l++)n=r[l],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(l=0;l<r.length;l++)n=r[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u={};function c(e){var t=e.components,n=d(e,o);return(0,a.mdx)("wrapper",m({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport Arrange from 'terra-arrange';\nimport {\n  textClinicalData, textHealthSolutionsData, textConsentFormData, homeButton, menuButton, chatButton, settingsButton, twitterButton, backtotopButton,\n} from '../common/examplesetup';\n\nconst ArrangeAlignAllContainers = () => (\n  <div>\n    <h3>Align - Default</h3>\n    <Arrange\n      fitStart={homeButton}\n      fill={textClinicalData}\n      fitEnd={menuButton}\n    />\n    <br />\n    <hr />\n    <h3>Align - Center</h3>\n    <Arrange\n      align=\"center\"\n      fitStart={settingsButton}\n      fill={textHealthSolutionsData}\n      fitEnd={chatButton}\n    />\n    <br />\n    <hr />\n    <h3>Align - Bottom</h3>\n    <Arrange\n      align=\"bottom\"\n      fitStart={twitterButton}\n      fill={textConsentFormData}\n      fitEnd={backtotopButton}\n    />\n  </div>\n);\n\nexport default ArrangeAlignAllContainers;\n\n")))}c.isMDXComponent=!0;var p=n(49271),s=function(e){var t=e.title,n=e.description,a=e.isExpanded;return l.createElement(p.Z,{title:t||"Arrange Align All Containers",description:n,example:l.createElement(i.Z,null),exampleSrc:l.createElement(c,null),isExpanded:a})},f=n(36519),x=["components"];function g(){return g=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var l in n)Object.prototype.hasOwnProperty.call(n,l)&&(e[l]=n[l])}return e},g.apply(this,arguments)}function h(e,t){if(null==e)return{};var n,l,a=function(e,t){if(null==e)return{};var n,l,a={},r=Object.keys(e);for(l=0;l<r.length;l++)n=r[l],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(l=0;l<r.length;l++)n=r[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var b={};function E(e){var t=e.components,n=h(e,x);return(0,a.mdx)("wrapper",g({},b,n,{components:t,mdxType:"MDXLayout"}),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport Arrange from 'terra-arrange';\nimport { alignExampleDiv, textWithBlueBorder } from '../common/examplesetup';\n\nconst ArrangeAlignFill = () => (\n  <div>\n    <h3>Align Fill - Default</h3>\n    <Arrange\n      fitStart={alignExampleDiv}\n      fill={textWithBlueBorder}\n      fitEnd={alignExampleDiv}\n    />\n    <br />\n    <hr />\n    <h3>Align Fill - Center</h3>\n    <Arrange\n      alignFill=\"center\"\n      fitStart={alignExampleDiv}\n      fill={textWithBlueBorder}\n      fitEnd={alignExampleDiv}\n    />\n    <br />\n    <hr />\n    <h3>Align Fill - Bottom</h3>\n    <Arrange\n      alignFill=\"bottom\"\n      fitStart={alignExampleDiv}\n      fill={textWithBlueBorder}\n      fitEnd={alignExampleDiv}\n    />\n  </div>\n);\n\nexport default ArrangeAlignFill;\n\n")))}E.isMDXComponent=!0;var y=function(e){var t=e.title,n=e.description,a=e.isExpanded;return l.createElement(p.Z,{title:t||"Arrange Align Fill",description:n,example:l.createElement(f.Z,null),exampleSrc:l.createElement(E,null),isExpanded:a})},v=n(36824),_=["components"];function T(){return T=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var l in n)Object.prototype.hasOwnProperty.call(n,l)&&(e[l]=n[l])}return e},T.apply(this,arguments)}function O(e,t){if(null==e)return{};var n,l,a=function(e,t){if(null==e)return{};var n,l,a={},r=Object.keys(e);for(l=0;l<r.length;l++)n=r[l],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(l=0;l<r.length;l++)n=r[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var N={};function C(e){var t=e.components,n=O(e,_);return(0,a.mdx)("wrapper",T({},N,n,{components:t,mdxType:"MDXLayout"}),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport Arrange from 'terra-arrange';\nimport { alignExampleDivBlue, alignExampleDiv, simpleText } from '../common/examplesetup';\n\nconst ArrangeAlignFitStart = () => (\n  <div>\n    <h3>Align FitEnd - Default</h3>\n    <Arrange\n      fitStart={alignExampleDiv}\n      fill={simpleText}\n      fitEnd={alignExampleDivBlue}\n    />\n    <br />\n    <hr />\n    <h3>Align FitEnd - Center</h3>\n    <Arrange\n      alignFitEnd=\"center\"\n      fitStart={alignExampleDiv}\n      fill={simpleText}\n      fitEnd={alignExampleDivBlue}\n    />\n    <br />\n    <hr />\n    <h3>Align FitEnd - Bottom</h3>\n    <Arrange\n      alignFitEnd=\"bottom\"\n      fitStart={alignExampleDiv}\n      fill={simpleText}\n      fitEnd={alignExampleDivBlue}\n    />\n  </div>\n);\n\nexport default ArrangeAlignFitStart;\n\n")))}C.isMDXComponent=!0;var D=function(e){var t=e.title,n=e.description,a=e.isExpanded;return l.createElement(p.Z,{title:t||"Arrange Align Fit End",description:n,example:l.createElement(v.Z,null),exampleSrc:l.createElement(C,null),isExpanded:a})},S=n(38956),A=["components"];function w(){return w=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var l in n)Object.prototype.hasOwnProperty.call(n,l)&&(e[l]=n[l])}return e},w.apply(this,arguments)}function j(e,t){if(null==e)return{};var n,l,a=function(e,t){if(null==e)return{};var n,l,a={},r=Object.keys(e);for(l=0;l<r.length;l++)n=r[l],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(l=0;l<r.length;l++)n=r[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var B={};function F(e){var t=e.components,n=j(e,A);return(0,a.mdx)("wrapper",w({},B,n,{components:t,mdxType:"MDXLayout"}),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport Arrange from 'terra-arrange';\nimport { alignExampleDiv, alignExampleDivBlue, simpleText } from '../common/examplesetup';\n\nconst ArrangeAlignFitStart = () => (\n  <div>\n    <h3>Align FitStart - Default</h3>\n    <Arrange\n      fitStart={alignExampleDivBlue}\n      fill={simpleText}\n      fitEnd={alignExampleDiv}\n    />\n    <br />\n    <hr />\n    <h3>Align FitStart - Center</h3>\n    <Arrange\n      alignFitStart=\"center\"\n      fitStart={alignExampleDivBlue}\n      fill={simpleText}\n      fitEnd={alignExampleDiv}\n    />\n    <br />\n    <hr />\n    <h3>Align FitStart - Bottom</h3>\n    <Arrange\n      alignFitStart=\"bottom\"\n      fitStart={alignExampleDivBlue}\n      fill={simpleText}\n      fitEnd={alignExampleDiv}\n    />\n  </div>\n);\n\nexport default ArrangeAlignFitStart;\n\n")))}F.isMDXComponent=!0;var k=function(e){var t=e.title,n=e.description,a=e.isExpanded;return l.createElement(p.Z,{title:t||"Arrange Align Fit Start",description:n,example:l.createElement(S.Z,null),exampleSrc:l.createElement(F,null),isExpanded:a})},P=n(78530),R=["components"];function M(){return M=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var l in n)Object.prototype.hasOwnProperty.call(n,l)&&(e[l]=n[l])}return e},M.apply(this,arguments)}function W(e,t){if(null==e)return{};var n,l,a=function(e,t){if(null==e)return{};var n,l,a={},r=Object.keys(e);for(l=0;l<r.length;l++)n=r[l],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(l=0;l<r.length;l++)n=r[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var q={},I="wrapper";function X(e){var t=e.components,n=W(e,R);return(0,a.mdx)(I,M({},q,n,{components:t,mdxType:"MDXLayout"}),(0,a.mdx)(P.ZP,{mdxType:"PropsTable"},(0,a.mdx)(P.X2,{key:"ROW1",mdxType:"Row"},(0,a.mdx)(P.O,{mdxType:"PropNameCell"},"fitStart"),(0,a.mdx)(P.Di,{mdxType:"TypeCell"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"element\n"))),(0,a.mdx)(P.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,a.mdx)(P.mW,{mdxType:"DefaultValueCell"},(0,a.mdx)("p",null,"none")),(0,a.mdx)(P.Ex,{mdxType:"DescriptionCell"},(0,a.mdx)("p",null,"The content to display in the body of the fitStart."))),(0,a.mdx)(P.X2,{key:"ROW2",mdxType:"Row"},(0,a.mdx)(P.O,{mdxType:"PropNameCell"},"fill"),(0,a.mdx)(P.Di,{mdxType:"TypeCell"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"element\n"))),(0,a.mdx)(P.dS,{isRequired:!0,mdxType:"RequiredCell"}),(0,a.mdx)(P.mW,{mdxType:"DefaultValueCell"},(0,a.mdx)("p",null,"none")),(0,a.mdx)(P.Ex,{mdxType:"DescriptionCell"},(0,a.mdx)("p",null,"The content to display in the body of the fill."))),(0,a.mdx)(P.X2,{key:"ROW3",mdxType:"Row"},(0,a.mdx)(P.O,{mdxType:"PropNameCell"},"fitEnd"),(0,a.mdx)(P.Di,{mdxType:"TypeCell"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"element\n"))),(0,a.mdx)(P.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,a.mdx)(P.mW,{mdxType:"DefaultValueCell"},(0,a.mdx)("p",null,"none")),(0,a.mdx)(P.Ex,{mdxType:"DescriptionCell"},(0,a.mdx)("p",null,"The content to display in the body of the fitEnd."))),(0,a.mdx)(P.X2,{key:"ROW4",mdxType:"Row"},(0,a.mdx)(P.O,{mdxType:"PropNameCell"},"align"),(0,a.mdx)(P.Di,{mdxType:"TypeCell"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"enum: [\n  'center'\n  'bottom'\n  'stretch'\n],\n"))),(0,a.mdx)(P.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,a.mdx)(P.mW,{mdxType:"DefaultValueCell"},(0,a.mdx)("p",null,"none")),(0,a.mdx)(P.Ex,{mdxType:"DescriptionCell"},(0,a.mdx)("p",null,"The vertical orientation of all three containers. It will override the alignment of alignFitStart, alignFill and alignFitEnd if given. One of: ",(0,a.mdx)("inlineCode",{parentName:"p"},"center"),", ",(0,a.mdx)("inlineCode",{parentName:"p"},"bottom"),", ",(0,a.mdx)("inlineCode",{parentName:"p"},"stretch"),"."))),(0,a.mdx)(P.X2,{key:"ROW5",mdxType:"Row"},(0,a.mdx)(P.O,{mdxType:"PropNameCell"},"alignFitStart"),(0,a.mdx)(P.Di,{mdxType:"TypeCell"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"enum: [\n  'center'\n  'bottom'\n  'stretch'\n],\n"))),(0,a.mdx)(P.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,a.mdx)(P.mW,{mdxType:"DefaultValueCell"},(0,a.mdx)("p",null,"none")),(0,a.mdx)(P.Ex,{mdxType:"DescriptionCell"},(0,a.mdx)("p",null,"The vertical orientation of fitStart. One of: ",(0,a.mdx)("inlineCode",{parentName:"p"},"center"),", ",(0,a.mdx)("inlineCode",{parentName:"p"},"bottom"),", ",(0,a.mdx)("inlineCode",{parentName:"p"},"stretch"),"."))),(0,a.mdx)(P.X2,{key:"ROW6",mdxType:"Row"},(0,a.mdx)(P.O,{mdxType:"PropNameCell"},"alignFitEnd"),(0,a.mdx)(P.Di,{mdxType:"TypeCell"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"enum: [\n  'center'\n  'bottom'\n  'stretch'\n],\n"))),(0,a.mdx)(P.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,a.mdx)(P.mW,{mdxType:"DefaultValueCell"},(0,a.mdx)("p",null,"none")),(0,a.mdx)(P.Ex,{mdxType:"DescriptionCell"},(0,a.mdx)("p",null,"The vertical orientation of fitEnd. One of: ",(0,a.mdx)("inlineCode",{parentName:"p"},"center"),", ",(0,a.mdx)("inlineCode",{parentName:"p"},"bottom"),", ",(0,a.mdx)("inlineCode",{parentName:"p"},"stretch"),"."))),(0,a.mdx)(P.X2,{key:"ROW7",mdxType:"Row"},(0,a.mdx)(P.O,{mdxType:"PropNameCell"},"alignFill"),(0,a.mdx)(P.Di,{mdxType:"TypeCell"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"enum: [\n  'center'\n  'bottom'\n  'stretch'\n],\n"))),(0,a.mdx)(P.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,a.mdx)(P.mW,{mdxType:"DefaultValueCell"},(0,a.mdx)("p",null,"none")),(0,a.mdx)(P.Ex,{mdxType:"DescriptionCell"},(0,a.mdx)("p",null,"The vertical orientation of fill. One of: ",(0,a.mdx)("inlineCode",{parentName:"p"},"center"),", ",(0,a.mdx)("inlineCode",{parentName:"p"},"bottom"),", ",(0,a.mdx)("inlineCode",{parentName:"p"},"stretch"),"."))),(0,a.mdx)(P.X2,{key:"ROW8",mdxType:"Row"},(0,a.mdx)(P.O,{mdxType:"PropNameCell"},"fitStartAttributes"),(0,a.mdx)(P.Di,{mdxType:"TypeCell"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"object\n"))),(0,a.mdx)(P.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,a.mdx)(P.mW,{mdxType:"DefaultValueCell"},(0,a.mdx)("p",null,"none")),(0,a.mdx)(P.Ex,{mdxType:"DescriptionCell"},(0,a.mdx)("p",null,"The attributes to be set on the fitStart wrapper element"))),(0,a.mdx)(P.X2,{key:"ROW9",mdxType:"Row"},(0,a.mdx)(P.O,{mdxType:"PropNameCell"},"fillAttributes"),(0,a.mdx)(P.Di,{mdxType:"TypeCell"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"object\n"))),(0,a.mdx)(P.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,a.mdx)(P.mW,{mdxType:"DefaultValueCell"},(0,a.mdx)("p",null,"none")),(0,a.mdx)(P.Ex,{mdxType:"DescriptionCell"},(0,a.mdx)("p",null,"The attributes to be set on the fill wrapper element"))),(0,a.mdx)(P.X2,{key:"ROW10",mdxType:"Row"},(0,a.mdx)(P.O,{mdxType:"PropNameCell"},"fitEndAttributes"),(0,a.mdx)(P.Di,{mdxType:"TypeCell"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"object\n"))),(0,a.mdx)(P.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,a.mdx)(P.mW,{mdxType:"DefaultValueCell"},(0,a.mdx)("p",null,"none")),(0,a.mdx)(P.Ex,{mdxType:"DescriptionCell"},(0,a.mdx)("p",null,"The attributes to be set on the fitEnd wrapper element")))))}X.isMDXComponent=!0;var Z=["components"];function V(){return V=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var l in n)Object.prototype.hasOwnProperty.call(n,l)&&(e[l]=n[l])}return e},V.apply(this,arguments)}function L(e,t){if(null==e)return{};var n,l,a=function(e,t){if(null==e)return{};var n,l,a={},r=Object.keys(e);for(l=0;l<r.length;l++)n=r[l],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(l=0;l<r.length;l++)n=r[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var H={},G="wrapper";function K(e){var t=e.components,n=L(e,Z);return(0,a.mdx)(G,V({},H,n,{components:t,mdxType:"MDXLayout"}),(0,a.mdx)(r.C,{mdxType:"Badge"}),(0,a.mdx)("h1",{id:"terra-arrange"},"Terra Arrange"),(0,a.mdx)("p",null,"The arrange component provides content containers with a fit (start and/or end region) and fill (middle region)."),(0,a.mdx)("ul",null,(0,a.mdx)("li",{parentName:"ul"},"Terra arrange supports altering multiple CSS attributes without loss of function or information."),(0,a.mdx)("li",{parentName:"ul"},"Terra arrange supports resizing to 400%."),(0,a.mdx)("li",{parentName:"ul"},"Terra arrange supports reflow when the viewport is resized to 320x256 px without loss of information or function.")),(0,a.mdx)("h2",{id:"getting-started"},"Getting Started"),(0,a.mdx)("ul",null,(0,a.mdx)("li",{parentName:"ul"},"Install with ",(0,a.mdx)("a",{parentName:"li",href:"https://www.npmjs.com/"},"npmjs"),":",(0,a.mdx)("ul",{parentName:"li"},(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("inlineCode",{parentName:"li"},"npm install terra-arrange"))))),(0,a.mdx)("h2",{id:"peer-dependencies"},"Peer Dependencies"),(0,a.mdx)("p",null,"This component requires the following peer dependencies be installed in your app for the component to properly function."),(0,a.mdx)("table",null,(0,a.mdx)("thead",{parentName:"table"},(0,a.mdx)("tr",{parentName:"thead"},(0,a.mdx)("th",{parentName:"tr",align:null},"Peer Dependency"),(0,a.mdx)("th",{parentName:"tr",align:null},"Version"))),(0,a.mdx)("tbody",{parentName:"table"},(0,a.mdx)("tr",{parentName:"tbody"},(0,a.mdx)("td",{parentName:"tr",align:null},"react"),(0,a.mdx)("td",{parentName:"tr",align:null},"^16.8.5")),(0,a.mdx)("tr",{parentName:"tbody"},(0,a.mdx)("td",{parentName:"tr",align:null},"react-dom"),(0,a.mdx)("td",{parentName:"tr",align:null},"^16.8.5")))),(0,a.mdx)("h2",{id:"usage"},"Usage"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-jsx"},"import Arrange from 'terra-arrange';\n")),(0,a.mdx)("h2",{id:"accessibility"},"Accessibility"),(0,a.mdx)("p",null,"For further guidance, please view the full ",(0,a.mdx)("a",{parentName:"p",href:"./accessibility-guide"},"Accessibility Guide"),"."),(0,a.mdx)("h2",{id:"component-features"},"Component Features"),(0,a.mdx)("ul",null,(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("a",{parentName:"li",href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#cross-browser-support"},"Cross-Browser Support")),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("a",{parentName:"li",href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#responsive-support"},"Responsive Support")),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("a",{parentName:"li",href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#mobile-support"},"Mobile Support"))),(0,a.mdx)("h2",{id:"examples"},"Examples"),(0,a.mdx)(k,{title:"Align Individual Containers - FitStart",mdxType:"ArrangeAlignFitStart"}),(0,a.mdx)(y,{title:"Align Individual Containers - Fill",mdxType:"ArrangeAlignFill"}),(0,a.mdx)(D,{title:"Align Individual Containers - FitEnd",mdxType:"ArrangeAlignFitEnd"}),(0,a.mdx)(s,{title:"Align All Containers",mdxType:"ArrangeAlignAllContainers"}),(0,a.mdx)("h2",{id:"arrange-props"},"Arrange Props"),(0,a.mdx)(X,{mdxType:"ArrangePropsTable"}))}K.isMDXComponent=!0},86377:function(e,t,n){n.d(t,{C:function(){return r}});var l=n(67294),a=n(22863),r=function(e){var t=e.url;return l.createElement(a.Z,{src:"https://github.com/cerner/terra-core/tree/main/packages/terra-arrange",name:"terra-arrange",version:"3.53.0",url:t})}},46826:function(e,t,n){n.r(t),t.default={"outlined-placeholder":"examplesetup__outlined-placeholder___2yAIj",placeholder:"examplesetup__placeholder___+FlSk","highlighted-placeholder":"examplesetup__highlighted-placeholder___VMV4x","space-around":"examplesetup__space-around___XwTYU","radio-buttons":"examplesetup__radio-buttons___NQDlI",label:"examplesetup__label___+u06l","arrange-button":"examplesetup__arrange-button___y+qmf","header-icon":"examplesetup__header-icon___20Jih",menu:"examplesetup__menu___66Gx1",home:"examplesetup__home___g1SWV",chat:"examplesetup__chat___LUClD",settings:"examplesetup__settings___+OPef",backtotop:"examplesetup__backtotop___tpJtH",twitter:"examplesetup__twitter___C-3DO"}},17422:function(e,t,n){n.r(t),t.default={badge:"Badges-module__badge___vex-+","badge-container":"Badges-module__badge-container___B13Mv","badge-name":"Badges-module__badge-name___jkN0m","badge-version":"Badges-module__badge-version___agZ+P"}},53560:function(e,t,n){n.r(t),t.default={"clinical-lowlight-theme":"ExampleTemplate-module__clinical-lowlight-theme___rBbtD","orion-fusion-theme":"ExampleTemplate-module__orion-fusion-theme___GzA23",template:"ExampleTemplate-module__template___a4uPk",header:"ExampleTemplate-module__header___iFXV3",content:"ExampleTemplate-module__content___48m4Q",description:"ExampleTemplate-module__description___NwBJo",footer:"ExampleTemplate-module__footer___GpSoG","button-container":"ExampleTemplate-module__button-container___rAD11",css:"ExampleTemplate-module__css___+jtk1",code:"ExampleTemplate-module__code___7rC6C","css-toggle":"ExampleTemplate-module__css-toggle___chHK7","code-toggle":"ExampleTemplate-module__code-toggle___TGlE-","is-selected":"ExampleTemplate-module__is-selected___0BYwS",item:"ExampleTemplate-module__item___8FTQq",chevron:"ExampleTemplate-module__chevron___VbY7N",title:"ExampleTemplate-module__title___r+nbJ","dynamic-content":"ExampleTemplate-module__dynamic-content___k+1H7"}},66633:function(e,t,n){n.r(t),t.default={arrange:"Arrange-module__arrange___hY0Ml",fill:"Arrange-module__fill___m88eq",fit:"Arrange-module__fit___tv8j-",center:"Arrange-module__center___9qfhG",bottom:"Arrange-module__bottom___8beod",stretch:"Arrange-module__stretch___eQF-k",default:"Arrange-module__default___z+O29"}},78490:function(e,t,n){function l(e){return l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},l(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.AlignmentTypes=void 0;var a=d(n(67294)),r=d(n(45697)),i=d(n(47166)),o=d(n(66633)),m=["fitStart","fill","fitEnd","align","alignFitStart","alignFill","alignFitEnd","fitStartAttributes","fillAttributes","fitEndAttributes"];function d(e){return e&&e.__esModule?e:{default:e}}function u(){return u=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var l in n)Object.prototype.hasOwnProperty.call(n,l)&&(e[l]=n[l])}return e},u.apply(this,arguments)}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t,n){return(t=function(e){var t=function(e,t){if("object"!==l(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var a=n.call(e,t||"default");if("object"!==l(a))return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===l(t)?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function f(e,t){if(null==e)return{};var n,l,a=function(e,t){if(null==e)return{};var n,l,a={},r=Object.keys(e);for(l=0;l<r.length;l++)n=r[l],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(l=0;l<r.length;l++)n=r[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}t.AlignmentTypes={CENTER:"center",BOTTOM:"bottom",STRETCH:"stretch"};var x=i.default.bind(o.default),g={fitStart:r.default.element,fill:r.default.element.isRequired,fitEnd:r.default.element,align:r.default.oneOf(["center","bottom","stretch"]),alignFitStart:r.default.oneOf(["center","bottom","stretch"]),alignFitEnd:r.default.oneOf(["center","bottom","stretch"]),alignFill:r.default.oneOf(["center","bottom","stretch"]),fitStartAttributes:r.default.object,fillAttributes:r.default.object,fitEndAttributes:r.default.object},h=function(e){var t=e.fitStart,n=e.fill,l=e.fitEnd,r=e.align,i=e.alignFitStart,o=e.alignFill,d=e.alignFitEnd,c=e.fitStartAttributes,s=e.fillAttributes,g=e.fitEndAttributes,h=f(e,m),b=p({},c),E=p({},s),y=p({},g);return a.default.createElement("span",u({},h,{className:x("arrange",h.className)}),a.default.createElement("span",u({},b,{className:x("fit",r||i,b.className,"fit-block")}),t),a.default.createElement("span",u({},E,{className:x("fill",r||o,E.className,"fill-block")}),n),a.default.createElement("span",u({},y,{className:x("fit",r||d,y.className)}),l))};h.propTypes=g;var b=h;t.default=b},33864:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=r(n(67294)),a=r(n(99139));function r(e){return e&&e.__esModule?e:{default:e}}function i(){return i=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var l in n)Object.prototype.hasOwnProperty.call(n,l)&&(e[l]=n[l])}return e},i.apply(this,arguments)}var o=function(e){var t=i({},e);return l.default.createElement(a.default,t,l.default.createElement("path",{d:"M10.3 24 33.8 0l3.9 3.8L18 24l19.7 20.2-3.9 3.8z"}))};o.displayName="IconChevronLeft",o.defaultProps={viewBox:"0 0 48 48","data-name":"Layer 1",xmlns:"http://www.w3.org/2000/svg"};var m=o;t.default=m}}]);