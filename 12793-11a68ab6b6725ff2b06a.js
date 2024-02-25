"use strict";(self.webpackChunkterra_ui=self.webpackChunkterra_ui||[]).push([[12793],{19789:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.twitterButton=t.textWithBlueBorder=t.textHealthSolutionsData=t.textConsentFormData=t.textClinicalData=t.simpleText=t.settingsButton=t.menuButton=t.homeButton=t.chatButton=t.backtotopButton=t.alignExampleDivBlue=t.alignExampleDiv=void 0;var l=m(n(96540)),r=m(n(23986)),a=m(n(67967)),i=n(25966),o=m(n(10719)),d=m(n(22315)),u=m(n(3609));function m(e){return e&&e.__esModule?e:{default:e}}var p=a.default.bind(u.default),c="This example provides content containers with a fit (start and/or end region) and fill (middle region). Arrange Props have one required prop which is fill to the content to display in the body of the fill.",s=(t.simpleText=l.default.createElement("span",null,c),t.textWithBlueBorder=l.default.createElement("span",{className:p("outlined-placeholder")},c),l.default.createElement("span",null,"Clinical data is a staple resource for most health and medical research. Clinical data is either collected during the course of ongoing patient care or as part of a formal clinical trial program. For more information visit ",l.default.createElement("a",{href:"#clinical-information",onKeyDown:function(e){e.keyCode===i.KEY_SPACE&&e.preventDefault()}},"Clinical information"))),f=l.default.createElement("span",null,"Trusted clinical technology and evidence-based solutions that drive effective decision-making and outcomes across healthcare. Specialized in clinical effectiveness, research and safety.",l.default.createElement("button",{type:"button",className:p("space-around"),onClick:function(){alert("Health solutions button has been clicked")}},"View all health solutions")),x=l.default.createElement(l.default.Fragment,null,l.default.createElement(d.default,{legend:"A telemedicine consent form is used to confirm that a patient agrees to telemedicine services, which are medical services done remotely over the phone or computer."},l.default.createElement(o.default,{id:"yes",name:"inline-example",labelText:"Yes",value:"yes",isInline:!0}),l.default.createElement(o.default,{id:"no",name:"inline-example",labelText:"No",value:"no",isInline:!0})));t.textClinicalData=l.default.createElement("span",{className:p("outlined-placeholder")},s),t.textHealthSolutionsData=l.default.createElement("span",{className:p("outlined-placeholder","info-text")},f),t.textConsentFormData=l.default.createElement("span",{className:p("outlined-placeholder")},x),t.alignExampleDiv=l.default.createElement("span",{className:p("placeholder")}),t.alignExampleDivBlue=l.default.createElement("span",{className:p("highlighted-placeholder")}),t.homeButton=l.default.createElement(r.default,{className:p(["arrange-button"]),isIconOnly:!0,icon:l.default.createElement("span",{className:p(["header-icon","home"])}),onClick:function(){alert("Home button has been clicked")},text:"Home button"}),t.menuButton=l.default.createElement(r.default,{className:p(["arrange-button"]),isIconOnly:!0,icon:l.default.createElement("span",{className:p(["header-icon","menu"])}),onClick:function(){alert("Menu button has been clicked")},text:"Menu button"}),t.chatButton=l.default.createElement(r.default,{className:p(["arrange-button"]),isIconOnly:!0,icon:l.default.createElement("span",{className:p(["header-icon","chat"])}),onClick:function(){alert("Chat button has been clicked")},text:"Chat with us button"}),t.settingsButton=l.default.createElement(r.default,{className:p(["arrange-button"]),isIconOnly:!0,icon:l.default.createElement("span",{className:p(["header-icon","settings"])}),onClick:function(){alert("Settings button has been clicked")},text:"Settings button"}),t.twitterButton=l.default.createElement(r.default,{className:p(["arrange-button"]),isIconOnly:!0,icon:l.default.createElement("span",{className:p(["header-icon","twitter"])}),onClick:function(){alert("Twitter button has been clicked")},text:"Twitter button"}),t.backtotopButton=l.default.createElement(r.default,{className:p(["arrange-button"]),isIconOnly:!0,icon:l.default.createElement("span",{className:p(["header-icon","backtotop"])}),onClick:function(){alert("Back to top button has been clicked")},text:"Back to top button"})},13533:function(e,t,n){t.A=void 0;var l=i(n(96540)),r=i(n(39496)),a=n(19789);function i(e){return e&&e.__esModule?e:{default:e}}t.A=function(){return l.default.createElement("div",null,l.default.createElement("h3",null,"Align - Default"),l.default.createElement(r.default,{fitStart:a.homeButton,fill:a.textClinicalData,fitEnd:a.menuButton}),l.default.createElement("br",null),l.default.createElement("hr",null),l.default.createElement("h3",null,"Align - Center"),l.default.createElement(r.default,{align:"center",fitStart:a.settingsButton,fill:a.textHealthSolutionsData,fitEnd:a.chatButton}),l.default.createElement("br",null),l.default.createElement("hr",null),l.default.createElement("h3",null,"Align - Bottom"),l.default.createElement(r.default,{align:"bottom",fitStart:a.twitterButton,fill:a.textConsentFormData,fitEnd:a.backtotopButton}))}},73413:function(e,t,n){t.A=void 0;var l=i(n(96540)),r=i(n(39496)),a=n(19789);function i(e){return e&&e.__esModule?e:{default:e}}t.A=function(){return l.default.createElement("div",null,l.default.createElement("h3",null,"Align Fill - Default"),l.default.createElement(r.default,{fitStart:a.alignExampleDiv,fill:a.textWithBlueBorder,fitEnd:a.alignExampleDiv}),l.default.createElement("br",null),l.default.createElement("hr",null),l.default.createElement("h3",null,"Align Fill - Center"),l.default.createElement(r.default,{alignFill:"center",fitStart:a.alignExampleDiv,fill:a.textWithBlueBorder,fitEnd:a.alignExampleDiv}),l.default.createElement("br",null),l.default.createElement("hr",null),l.default.createElement("h3",null,"Align Fill - Bottom"),l.default.createElement(r.default,{alignFill:"bottom",fitStart:a.alignExampleDiv,fill:a.textWithBlueBorder,fitEnd:a.alignExampleDiv}))}},32028:function(e,t,n){t.A=void 0;var l=i(n(96540)),r=i(n(39496)),a=n(19789);function i(e){return e&&e.__esModule?e:{default:e}}t.A=function(){return l.default.createElement("div",null,l.default.createElement("h3",null,"Align FitEnd - Default"),l.default.createElement(r.default,{fitStart:a.alignExampleDiv,fill:a.simpleText,fitEnd:a.alignExampleDivBlue}),l.default.createElement("br",null),l.default.createElement("hr",null),l.default.createElement("h3",null,"Align FitEnd - Center"),l.default.createElement(r.default,{alignFitEnd:"center",fitStart:a.alignExampleDiv,fill:a.simpleText,fitEnd:a.alignExampleDivBlue}),l.default.createElement("br",null),l.default.createElement("hr",null),l.default.createElement("h3",null,"Align FitEnd - Bottom"),l.default.createElement(r.default,{alignFitEnd:"bottom",fitStart:a.alignExampleDiv,fill:a.simpleText,fitEnd:a.alignExampleDivBlue}))}},6341:function(e,t,n){t.A=void 0;var l=i(n(96540)),r=i(n(39496)),a=n(19789);function i(e){return e&&e.__esModule?e:{default:e}}t.A=function(){return l.default.createElement("div",null,l.default.createElement("h3",null,"Align FitStart - Default"),l.default.createElement(r.default,{fitStart:a.alignExampleDivBlue,fill:a.simpleText,fitEnd:a.alignExampleDiv}),l.default.createElement("br",null),l.default.createElement("hr",null),l.default.createElement("h3",null,"Align FitStart - Center"),l.default.createElement(r.default,{alignFitStart:"center",fitStart:a.alignExampleDivBlue,fill:a.simpleText,fitEnd:a.alignExampleDiv}),l.default.createElement("br",null),l.default.createElement("hr",null),l.default.createElement("h3",null,"Align FitStart - Bottom"),l.default.createElement(r.default,{alignFitStart:"bottom",fitStart:a.alignExampleDivBlue,fill:a.simpleText,fitEnd:a.alignExampleDiv}))}},12793:function(e,t,n){n.r(t),n.d(t,{default:function(){return U}});var l=n(96540),r=n(36665),a=n(45647),i=n(13533),o=["components"];function d(){return d=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var l in n)Object.prototype.hasOwnProperty.call(n,l)&&(e[l]=n[l])}return e},d.apply(this,arguments)}function u(e,t){if(null==e)return{};var n,l,r=function(e,t){if(null==e)return{};var n,l,r={},a=Object.keys(e);for(l=0;l<a.length;l++)n=a[l],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(l=0;l<a.length;l++)n=a[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var m={};function p(e){var t=e.components,n=u(e,o);return(0,r.mdx)("wrapper",d({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport Arrange from 'terra-arrange';\nimport {\n  textClinicalData, textHealthSolutionsData, textConsentFormData, homeButton, menuButton, chatButton, settingsButton, twitterButton, backtotopButton,\n} from '../common/examplesetup';\n\nconst ArrangeAlignAllContainers = () => (\n  <div>\n    <h3>Align - Default</h3>\n    <Arrange\n      fitStart={homeButton}\n      fill={textClinicalData}\n      fitEnd={menuButton}\n    />\n    <br />\n    <hr />\n    <h3>Align - Center</h3>\n    <Arrange\n      align=\"center\"\n      fitStart={settingsButton}\n      fill={textHealthSolutionsData}\n      fitEnd={chatButton}\n    />\n    <br />\n    <hr />\n    <h3>Align - Bottom</h3>\n    <Arrange\n      align=\"bottom\"\n      fitStart={twitterButton}\n      fill={textConsentFormData}\n      fitEnd={backtotopButton}\n    />\n  </div>\n);\n\nexport default ArrangeAlignAllContainers;\n\n")))}p.isMDXComponent=!0;var c=n(201),s=function(e){var t=e.title,n=e.description,r=e.isExpanded;return l.createElement(c.A,{title:t||"Arrange Align All Containers",description:n,example:l.createElement(i.A,null),exampleSrc:l.createElement(p,null),isExpanded:r})},f=n(73413),x=["components"];function g(){return g=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var l in n)Object.prototype.hasOwnProperty.call(n,l)&&(e[l]=n[l])}return e},g.apply(this,arguments)}function h(e,t){if(null==e)return{};var n,l,r=function(e,t){if(null==e)return{};var n,l,r={},a=Object.keys(e);for(l=0;l<a.length;l++)n=a[l],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(l=0;l<a.length;l++)n=a[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var b={};function y(e){var t=e.components,n=h(e,x);return(0,r.mdx)("wrapper",g({},b,n,{components:t,mdxType:"MDXLayout"}),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport Arrange from 'terra-arrange';\nimport { alignExampleDiv, textWithBlueBorder } from '../common/examplesetup';\n\nconst ArrangeAlignFill = () => (\n  <div>\n    <h3>Align Fill - Default</h3>\n    <Arrange\n      fitStart={alignExampleDiv}\n      fill={textWithBlueBorder}\n      fitEnd={alignExampleDiv}\n    />\n    <br />\n    <hr />\n    <h3>Align Fill - Center</h3>\n    <Arrange\n      alignFill=\"center\"\n      fitStart={alignExampleDiv}\n      fill={textWithBlueBorder}\n      fitEnd={alignExampleDiv}\n    />\n    <br />\n    <hr />\n    <h3>Align Fill - Bottom</h3>\n    <Arrange\n      alignFill=\"bottom\"\n      fitStart={alignExampleDiv}\n      fill={textWithBlueBorder}\n      fitEnd={alignExampleDiv}\n    />\n  </div>\n);\n\nexport default ArrangeAlignFill;\n\n")))}y.isMDXComponent=!0;var v=function(e){var t=e.title,n=e.description,r=e.isExpanded;return l.createElement(c.A,{title:t||"Arrange Align Fill",description:n,example:l.createElement(f.A,null),exampleSrc:l.createElement(y,null),isExpanded:r})},E=n(32028),_=["components"];function O(){return O=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var l in n)Object.prototype.hasOwnProperty.call(n,l)&&(e[l]=n[l])}return e},O.apply(this,arguments)}function A(e,t){if(null==e)return{};var n,l,r=function(e,t){if(null==e)return{};var n,l,r={},a=Object.keys(e);for(l=0;l<a.length;l++)n=a[l],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(l=0;l<a.length;l++)n=a[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var T={};function N(e){var t=e.components,n=A(e,_);return(0,r.mdx)("wrapper",O({},T,n,{components:t,mdxType:"MDXLayout"}),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport Arrange from 'terra-arrange';\nimport { alignExampleDivBlue, alignExampleDiv, simpleText } from '../common/examplesetup';\n\nconst ArrangeAlignFitStart = () => (\n  <div>\n    <h3>Align FitEnd - Default</h3>\n    <Arrange\n      fitStart={alignExampleDiv}\n      fill={simpleText}\n      fitEnd={alignExampleDivBlue}\n    />\n    <br />\n    <hr />\n    <h3>Align FitEnd - Center</h3>\n    <Arrange\n      alignFitEnd=\"center\"\n      fitStart={alignExampleDiv}\n      fill={simpleText}\n      fitEnd={alignExampleDivBlue}\n    />\n    <br />\n    <hr />\n    <h3>Align FitEnd - Bottom</h3>\n    <Arrange\n      alignFitEnd=\"bottom\"\n      fitStart={alignExampleDiv}\n      fill={simpleText}\n      fitEnd={alignExampleDivBlue}\n    />\n  </div>\n);\n\nexport default ArrangeAlignFitStart;\n\n")))}N.isMDXComponent=!0;var C=function(e){var t=e.title,n=e.description,r=e.isExpanded;return l.createElement(c.A,{title:t||"Arrange Align Fit End",description:n,example:l.createElement(E.A,null),exampleSrc:l.createElement(N,null),isExpanded:r})},D=n(6341),S=["components"];function j(){return j=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var l in n)Object.prototype.hasOwnProperty.call(n,l)&&(e[l]=n[l])}return e},j.apply(this,arguments)}function w(e,t){if(null==e)return{};var n,l,r=function(e,t){if(null==e)return{};var n,l,r={},a=Object.keys(e);for(l=0;l<a.length;l++)n=a[l],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(l=0;l<a.length;l++)n=a[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var F={};function B(e){var t=e.components,n=w(e,S);return(0,r.mdx)("wrapper",j({},F,n,{components:t,mdxType:"MDXLayout"}),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport Arrange from 'terra-arrange';\nimport { alignExampleDiv, alignExampleDivBlue, simpleText } from '../common/examplesetup';\n\nconst ArrangeAlignFitStart = () => (\n  <div>\n    <h3>Align FitStart - Default</h3>\n    <Arrange\n      fitStart={alignExampleDivBlue}\n      fill={simpleText}\n      fitEnd={alignExampleDiv}\n    />\n    <br />\n    <hr />\n    <h3>Align FitStart - Center</h3>\n    <Arrange\n      alignFitStart=\"center\"\n      fitStart={alignExampleDivBlue}\n      fill={simpleText}\n      fitEnd={alignExampleDiv}\n    />\n    <br />\n    <hr />\n    <h3>Align FitStart - Bottom</h3>\n    <Arrange\n      alignFitStart=\"bottom\"\n      fitStart={alignExampleDivBlue}\n      fill={simpleText}\n      fitEnd={alignExampleDiv}\n    />\n  </div>\n);\n\nexport default ArrangeAlignFitStart;\n\n")))}B.isMDXComponent=!0;var R=function(e){var t=e.title,n=e.description,r=e.isExpanded;return l.createElement(c.A,{title:t||"Arrange Align Fit Start",description:n,example:l.createElement(D.A,null),exampleSrc:l.createElement(B,null),isExpanded:r})},P=n(12883),k=["components"];function I(){return I=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var l in n)Object.prototype.hasOwnProperty.call(n,l)&&(e[l]=n[l])}return e},I.apply(this,arguments)}function q(e,t){if(null==e)return{};var n,l,r=function(e,t){if(null==e)return{};var n,l,r={},a=Object.keys(e);for(l=0;l<a.length;l++)n=a[l],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(l=0;l<a.length;l++)n=a[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var M={},H="wrapper";function W(e){var t=e.components,n=q(e,k);return(0,r.mdx)(H,I({},M,n,{components:t,mdxType:"MDXLayout"}),(0,r.mdx)(P.Ay,{mdxType:"PropsTable"},(0,r.mdx)(P.fI,{key:"ROW1",mdxType:"Row"},(0,r.mdx)(P.dt,{mdxType:"PropNameCell"},"fitStart"),(0,r.mdx)(P.$d,{mdxType:"TypeCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"element\n"))),(0,r.mdx)(P.YZ,{isRequired:!1,mdxType:"RequiredCell"}),(0,r.mdx)(P.NZ,{mdxType:"DefaultValueCell"},(0,r.mdx)("p",null,"none")),(0,r.mdx)(P.Hd,{mdxType:"DescriptionCell"},(0,r.mdx)("p",null,"The content to display in the body of the fitStart."))),(0,r.mdx)(P.fI,{key:"ROW2",mdxType:"Row"},(0,r.mdx)(P.dt,{mdxType:"PropNameCell"},"fill"),(0,r.mdx)(P.$d,{mdxType:"TypeCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"element\n"))),(0,r.mdx)(P.YZ,{isRequired:!0,mdxType:"RequiredCell"}),(0,r.mdx)(P.NZ,{mdxType:"DefaultValueCell"},(0,r.mdx)("p",null,"none")),(0,r.mdx)(P.Hd,{mdxType:"DescriptionCell"},(0,r.mdx)("p",null,"The content to display in the body of the fill."))),(0,r.mdx)(P.fI,{key:"ROW3",mdxType:"Row"},(0,r.mdx)(P.dt,{mdxType:"PropNameCell"},"fitEnd"),(0,r.mdx)(P.$d,{mdxType:"TypeCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"element\n"))),(0,r.mdx)(P.YZ,{isRequired:!1,mdxType:"RequiredCell"}),(0,r.mdx)(P.NZ,{mdxType:"DefaultValueCell"},(0,r.mdx)("p",null,"none")),(0,r.mdx)(P.Hd,{mdxType:"DescriptionCell"},(0,r.mdx)("p",null,"The content to display in the body of the fitEnd."))),(0,r.mdx)(P.fI,{key:"ROW4",mdxType:"Row"},(0,r.mdx)(P.dt,{mdxType:"PropNameCell"},"align"),(0,r.mdx)(P.$d,{mdxType:"TypeCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"enum: [\n  'center'\n  'bottom'\n  'stretch'\n],\n"))),(0,r.mdx)(P.YZ,{isRequired:!1,mdxType:"RequiredCell"}),(0,r.mdx)(P.NZ,{mdxType:"DefaultValueCell"},(0,r.mdx)("p",null,"none")),(0,r.mdx)(P.Hd,{mdxType:"DescriptionCell"},(0,r.mdx)("p",null,"The vertical orientation of all three containers. It will override the alignment of alignFitStart, alignFill and alignFitEnd if given. One of: ",(0,r.mdx)("inlineCode",{parentName:"p"},"center"),", ",(0,r.mdx)("inlineCode",{parentName:"p"},"bottom"),", ",(0,r.mdx)("inlineCode",{parentName:"p"},"stretch"),"."))),(0,r.mdx)(P.fI,{key:"ROW5",mdxType:"Row"},(0,r.mdx)(P.dt,{mdxType:"PropNameCell"},"alignFitStart"),(0,r.mdx)(P.$d,{mdxType:"TypeCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"enum: [\n  'center'\n  'bottom'\n  'stretch'\n],\n"))),(0,r.mdx)(P.YZ,{isRequired:!1,mdxType:"RequiredCell"}),(0,r.mdx)(P.NZ,{mdxType:"DefaultValueCell"},(0,r.mdx)("p",null,"none")),(0,r.mdx)(P.Hd,{mdxType:"DescriptionCell"},(0,r.mdx)("p",null,"The vertical orientation of fitStart. One of: ",(0,r.mdx)("inlineCode",{parentName:"p"},"center"),", ",(0,r.mdx)("inlineCode",{parentName:"p"},"bottom"),", ",(0,r.mdx)("inlineCode",{parentName:"p"},"stretch"),"."))),(0,r.mdx)(P.fI,{key:"ROW6",mdxType:"Row"},(0,r.mdx)(P.dt,{mdxType:"PropNameCell"},"alignFitEnd"),(0,r.mdx)(P.$d,{mdxType:"TypeCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"enum: [\n  'center'\n  'bottom'\n  'stretch'\n],\n"))),(0,r.mdx)(P.YZ,{isRequired:!1,mdxType:"RequiredCell"}),(0,r.mdx)(P.NZ,{mdxType:"DefaultValueCell"},(0,r.mdx)("p",null,"none")),(0,r.mdx)(P.Hd,{mdxType:"DescriptionCell"},(0,r.mdx)("p",null,"The vertical orientation of fitEnd. One of: ",(0,r.mdx)("inlineCode",{parentName:"p"},"center"),", ",(0,r.mdx)("inlineCode",{parentName:"p"},"bottom"),", ",(0,r.mdx)("inlineCode",{parentName:"p"},"stretch"),"."))),(0,r.mdx)(P.fI,{key:"ROW7",mdxType:"Row"},(0,r.mdx)(P.dt,{mdxType:"PropNameCell"},"alignFill"),(0,r.mdx)(P.$d,{mdxType:"TypeCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"enum: [\n  'center'\n  'bottom'\n  'stretch'\n],\n"))),(0,r.mdx)(P.YZ,{isRequired:!1,mdxType:"RequiredCell"}),(0,r.mdx)(P.NZ,{mdxType:"DefaultValueCell"},(0,r.mdx)("p",null,"none")),(0,r.mdx)(P.Hd,{mdxType:"DescriptionCell"},(0,r.mdx)("p",null,"The vertical orientation of fill. One of: ",(0,r.mdx)("inlineCode",{parentName:"p"},"center"),", ",(0,r.mdx)("inlineCode",{parentName:"p"},"bottom"),", ",(0,r.mdx)("inlineCode",{parentName:"p"},"stretch"),"."))),(0,r.mdx)(P.fI,{key:"ROW8",mdxType:"Row"},(0,r.mdx)(P.dt,{mdxType:"PropNameCell"},"fitStartAttributes"),(0,r.mdx)(P.$d,{mdxType:"TypeCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"object\n"))),(0,r.mdx)(P.YZ,{isRequired:!1,mdxType:"RequiredCell"}),(0,r.mdx)(P.NZ,{mdxType:"DefaultValueCell"},(0,r.mdx)("p",null,"none")),(0,r.mdx)(P.Hd,{mdxType:"DescriptionCell"},(0,r.mdx)("p",null,"The attributes to be set on the fitStart wrapper element"))),(0,r.mdx)(P.fI,{key:"ROW9",mdxType:"Row"},(0,r.mdx)(P.dt,{mdxType:"PropNameCell"},"fillAttributes"),(0,r.mdx)(P.$d,{mdxType:"TypeCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"object\n"))),(0,r.mdx)(P.YZ,{isRequired:!1,mdxType:"RequiredCell"}),(0,r.mdx)(P.NZ,{mdxType:"DefaultValueCell"},(0,r.mdx)("p",null,"none")),(0,r.mdx)(P.Hd,{mdxType:"DescriptionCell"},(0,r.mdx)("p",null,"The attributes to be set on the fill wrapper element"))),(0,r.mdx)(P.fI,{key:"ROW10",mdxType:"Row"},(0,r.mdx)(P.dt,{mdxType:"PropNameCell"},"fitEndAttributes"),(0,r.mdx)(P.$d,{mdxType:"TypeCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"object\n"))),(0,r.mdx)(P.YZ,{isRequired:!1,mdxType:"RequiredCell"}),(0,r.mdx)(P.NZ,{mdxType:"DefaultValueCell"},(0,r.mdx)("p",null,"none")),(0,r.mdx)(P.Hd,{mdxType:"DescriptionCell"},(0,r.mdx)("p",null,"The attributes to be set on the fitEnd wrapper element")))))}W.isMDXComponent=!0;var V=["components"];function Z(){return Z=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var l in n)Object.prototype.hasOwnProperty.call(n,l)&&(e[l]=n[l])}return e},Z.apply(this,arguments)}function L(e,t){if(null==e)return{};var n,l,r=function(e,t){if(null==e)return{};var n,l,r={},a=Object.keys(e);for(l=0;l<a.length;l++)n=a[l],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(l=0;l<a.length;l++)n=a[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var Y={},X="wrapper";function U(e){var t=e.components,n=L(e,V);return(0,r.mdx)(X,Z({},Y,n,{components:t,mdxType:"MDXLayout"}),(0,r.mdx)(a.E,{mdxType:"Badge"}),(0,r.mdx)("h1",{id:"terra-arrange"},"Terra Arrange"),(0,r.mdx)("p",null,"The arrange component provides content containers with a fit (start and/or end region) and fill (middle region)."),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},"Terra arrange supports altering multiple CSS attributes without loss of function or information."),(0,r.mdx)("li",{parentName:"ul"},"Terra arrange supports resizing to 400%."),(0,r.mdx)("li",{parentName:"ul"},"Terra arrange supports reflow when the viewport is resized to 320x256 px without loss of information or function.")),(0,r.mdx)("h2",{id:"getting-started"},"Getting Started"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},"Install with ",(0,r.mdx)("a",{parentName:"li",href:"https://www.npmjs.com/"},"npmjs"),":",(0,r.mdx)("ul",{parentName:"li"},(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("inlineCode",{parentName:"li"},"npm install terra-arrange"))))),(0,r.mdx)("h2",{id:"peer-dependencies"},"Peer Dependencies"),(0,r.mdx)("p",null,"This component requires the following peer dependencies be installed in your app for the component to properly function."),(0,r.mdx)("table",null,(0,r.mdx)("thead",{parentName:"table"},(0,r.mdx)("tr",{parentName:"thead"},(0,r.mdx)("th",{parentName:"tr",align:null},"Peer Dependency"),(0,r.mdx)("th",{parentName:"tr",align:null},"Version"))),(0,r.mdx)("tbody",{parentName:"table"},(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"react"),(0,r.mdx)("td",{parentName:"tr",align:null},"^16.8.5")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"react-dom"),(0,r.mdx)("td",{parentName:"tr",align:null},"^16.8.5")))),(0,r.mdx)("h2",{id:"usage"},"Usage"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-jsx"},"import Arrange from 'terra-arrange';\n")),(0,r.mdx)("h2",{id:"accessibility"},"Accessibility"),(0,r.mdx)("p",null,"For further guidance, please view the full ",(0,r.mdx)("a",{parentName:"p",href:"./accessibility-guide"},"Accessibility Guide"),"."),(0,r.mdx)("h2",{id:"component-features"},"Component Features"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("a",{parentName:"li",href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#cross-browser-support"},"Cross-Browser Support")),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("a",{parentName:"li",href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#responsive-support"},"Responsive Support")),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("a",{parentName:"li",href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#mobile-support"},"Mobile Support"))),(0,r.mdx)("h2",{id:"examples"},"Examples"),(0,r.mdx)(R,{title:"Align Individual Containers - FitStart",mdxType:"ArrangeAlignFitStart"}),(0,r.mdx)(v,{title:"Align Individual Containers - Fill",mdxType:"ArrangeAlignFill"}),(0,r.mdx)(C,{title:"Align Individual Containers - FitEnd",mdxType:"ArrangeAlignFitEnd"}),(0,r.mdx)(s,{title:"Align All Containers",mdxType:"ArrangeAlignAllContainers"}),(0,r.mdx)("h2",{id:"arrange-props"},"Arrange Props"),(0,r.mdx)(W,{mdxType:"ArrangePropsTable"}))}U.isMDXComponent=!0},45647:function(e,t,n){n.d(t,{E:function(){return a}});var l=n(96540),r=n(55713),a=function(e){var t=e.url;return l.createElement(r.A,{src:"https://github.com/cerner/terra-core/tree/main/packages/terra-arrange",name:"terra-arrange",version:"3.56.0",url:t})}},3609:function(e,t,n){n.r(t),t.default={"outlined-placeholder":"examplesetup__outlined-placeholder___2yAIj",placeholder:"examplesetup__placeholder___+FlSk","highlighted-placeholder":"examplesetup__highlighted-placeholder___VMV4x","space-around":"examplesetup__space-around___XwTYU","radio-buttons":"examplesetup__radio-buttons___NQDlI",label:"examplesetup__label___+u06l","arrange-button":"examplesetup__arrange-button___y+qmf","header-icon":"examplesetup__header-icon___20Jih",menu:"examplesetup__menu___66Gx1",home:"examplesetup__home___g1SWV",chat:"examplesetup__chat___LUClD",settings:"examplesetup__settings___+OPef",backtotop:"examplesetup__backtotop___tpJtH",twitter:"examplesetup__twitter___C-3DO"}},92420:function(e,t,n){n.r(t),t.default={arrange:"Arrange-module__arrange___hY0Ml",fill:"Arrange-module__fill___m88eq",fit:"Arrange-module__fit___tv8j-",center:"Arrange-module__center___9qfhG",bottom:"Arrange-module__bottom___8beod",stretch:"Arrange-module__stretch___eQF-k",default:"Arrange-module__default___z+O29"}},99421:function(e,t,n){n.r(t),t.default={"clinical-lowlight-theme":"RadioField-module__clinical-lowlight-theme___H55y8","orion-fusion-theme":"RadioField-module__orion-fusion-theme___Eh5Nn","radio-field":"RadioField-module__radio-field___fpXfP","is-inline":"RadioField-module__is-inline___8FRg7","legend-group":"RadioField-module__legend-group___8mMif","legend-group-hidden":"RadioField-module__legend-group-hidden___irjwu",legend:"RadioField-module__legend___7g1rE","error-icon":"RadioField-module__error-icon___+vwY3","error-icon-hidden":"RadioField-module__error-icon-hidden___diu+V",required:"RadioField-module__required___7KHDx","required-hidden":"RadioField-module__required-hidden___A0eyI",optional:"RadioField-module__optional___9DBWR","help-text":"RadioField-module__help-text___9UUSl","error-text":"RadioField-module__error-text___2mn2V"}},39496:function(e,t,n){function l(e){return l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},l(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.AlignmentTypes=void 0;var r=u(n(96540)),a=u(n(5556)),i=u(n(67967)),o=u(n(92420)),d=["fitStart","fill","fitEnd","align","alignFitStart","alignFill","alignFitEnd","fitStartAttributes","fillAttributes","fitEndAttributes"];function u(e){return e&&e.__esModule?e:{default:e}}function m(){return m=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var l in n)Object.prototype.hasOwnProperty.call(n,l)&&(e[l]=n[l])}return e},m.apply(this,arguments)}function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t,n){var r;return r=function(e,t){if("object"!=l(e)||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!=l(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(t,"string"),(t="symbol"==l(r)?r:String(r))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function f(e,t){if(null==e)return{};var n,l,r=function(e,t){if(null==e)return{};var n,l,r={},a=Object.keys(e);for(l=0;l<a.length;l++)n=a[l],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(l=0;l<a.length;l++)n=a[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}t.AlignmentTypes={CENTER:"center",BOTTOM:"bottom",STRETCH:"stretch"};var x=i.default.bind(o.default),g={fitStart:a.default.element,fill:a.default.element.isRequired,fitEnd:a.default.element,align:a.default.oneOf(["center","bottom","stretch"]),alignFitStart:a.default.oneOf(["center","bottom","stretch"]),alignFitEnd:a.default.oneOf(["center","bottom","stretch"]),alignFill:a.default.oneOf(["center","bottom","stretch"]),fitStartAttributes:a.default.object,fillAttributes:a.default.object,fitEndAttributes:a.default.object},h=function(e){var t=e.fitStart,n=e.fill,l=e.fitEnd,a=e.align,i=e.alignFitStart,o=e.alignFill,u=e.alignFitEnd,p=e.fitStartAttributes,s=e.fillAttributes,g=e.fitEndAttributes,h=f(e,d),b=c({},p),y=c({},s),v=c({},g);return r.default.createElement("span",m({},h,{className:x("arrange",h.className)}),r.default.createElement("span",m({},b,{className:x("fit",a||i,b.className,"fit-block")}),t),r.default.createElement("span",m({},y,{className:x("fill",a||o,y.className,"fill-block")}),n),r.default.createElement("span",m({},v,{className:x("fit",a||u,v.className)}),l))};h.propTypes=g;t.default=h},22315:function(e,t,n){function l(e){return l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},l(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=g(n(96540)),a=g(n(5556)),i=n(8604),o=g(n(46942)),d=g(n(67967)),u=g(n(52103)),m=g(n(72704)),p=g(n(16524)),c=n(25966),s=n(582),f=g(n(99421)),x=["children","error","help","hideRequired","intl","isInvalid","isInline","isLegendHidden","legend","legendAttrs","required","showOptional"];function g(e){return e&&e.__esModule?e:{default:e}}function h(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function b(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?h(Object(n),!0).forEach((function(t){y(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):h(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function y(e,t,n){var r;return r=function(e,t){if("object"!=l(e)||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!=l(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(t,"string"),(t="symbol"==l(r)?r:String(r))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function v(){return v=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var l in n)Object.prototype.hasOwnProperty.call(n,l)&&(e[l]=n[l])}return e},v.apply(this,arguments)}function E(e,t){if(null==e)return{};var n,l,r=function(e,t){if(null==e)return{};var n,l,r={},a=Object.keys(e);for(l=0;l<a.length;l++)n=a[l],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(l=0;l<a.length;l++)n=a[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var _=d.default.bind(f.default),O={children:a.default.node,error:a.default.node,help:a.default.node,hideRequired:a.default.bool,intl:a.default.shape({formatMessage:a.default.func}).isRequired,isInline:a.default.bool,isInvalid:a.default.bool,isLegendHidden:a.default.bool,legend:a.default.string.isRequired,legendAttrs:a.default.object,required:a.default.bool,showOptional:a.default.bool},A=function(e){var t=e.children,n=e.error,l=e.help,a=e.hideRequired,i=e.intl,d=e.isInvalid,f=e.isInline,g=e.isLegendHidden,h=e.legend,y=e.legendAttrs,O=e.required,A=e.showOptional,T=E(e,x),N=r.default.useContext(u.default),C=(0,o.default)(_("radio-field",{"is-inline":f},N.className),T.className),D=_(["legend",y.className]),S=T.id||"terra-radio-group-".concat((0,m.default)()),j="terra-radio-field-description-".concat((0,m.default)()),w=l?"terra-radio-field-description-help-".concat((0,m.default)()):"",F=n?"terra-radio-field-description-error-".concat((0,m.default)()):"",B="".concat(j," ").concat(F," ").concat(w),R=-1!==navigator.userAgent.indexOf("Safari")&&-1===navigator.userAgent.indexOf("Chrome"),P=-1!==navigator.userAgent.indexOf("Edg"),k=R||P?"div":"legend",I=r.default.createElement(k,{id:j,className:_(["legend-group",{"legend-group-hidden":g}])},r.default.createElement("div",v({},y,{className:D}),d&&r.default.createElement("span",{className:_("error-icon")}),O&&(d||!a)&&r.default.createElement(r.default.Fragment,null,r.default.createElement("div",{"aria-hidden":"true",className:_("required")},"*"),r.default.createElement(p.default,{text:i.formatMessage({id:"Terra.form.field.required"})})),h,O&&!d&&a&&r.default.createElement("span",{className:_("required-hidden")},"*"),A&&!O&&r.default.createElement("span",{className:_("optional")},i.formatMessage({id:"Terra.form.field.optional"})),!d&&r.default.createElement("span",{className:_("error-icon-hidden")}))),q=r.default.Children.map(t,(function(e){if(e&&e.type.isRadio){var t=R?{onKeyDown:function(t){return function(e,t){var n=document.getElementById(S);if(n){var l=n.querySelectorAll("[type=radio]"),r=Array.from(l).indexOf(e.currentTarget),a=new MouseEvent("click",{bubbles:!0,cancelable:!1}),i=(0,s.findFirstFocusableItem)(l),o=(0,s.findLastFocusableItem)(l);e.nativeEvent.key===c.VALUE_DOWN||e.nativeEvent.key===c.VALUE_RIGHT?r===o&&l[i].dispatchEvent(a):e.nativeEvent.key!==c.VALUE_UP&&e.nativeEvent.key!==c.VALUE_LEFT||r===i&&l[o].dispatchEvent(a)}t&&t.props.onKeyDown&&t.props.onKeyDown()}(t,e)},onClick:function(t){return function(e,t){var n;null==e||null===(n=e.currentTarget)||void 0===n||n.focus(),t&&t.props.onClick&&t.props.onClick()}(t,e)}}:void 0;return r.default.cloneElement(e,{inputAttrs:b(b({},e.props.inputAttrs),{},{"aria-describedby":B},t)})}return e}));return r.default.createElement("fieldset",v({id:S},T,{required:O,className:C}),I,q,d&&n&&r.default.createElement("div",{id:F,className:_("error-text")},n),l&&r.default.createElement("div",{id:w,className:_("help-text")},l))};A.propTypes=O,A.defaultProps={children:null,error:null,help:null,hideRequired:!1,isInline:!1,isInvalid:!1,isLegendHidden:!1,legendAttrs:{},required:!1,showOptional:!1};t.default=(0,i.injectIntl)(A)}}]);