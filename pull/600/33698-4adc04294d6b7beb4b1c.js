"use strict";(self.webpackChunkterra_ui=self.webpackChunkterra_ui||[]).push([[33698],{14598:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.twitterButton=t.textWithBlueBorder=t.textHealthSolutionsData=t.textConsentFormData=t.textClinicalData=t.simpleText=t.settingsButton=t.menuButton=t.homeButton=t.chatButton=t.backtotopButton=t.alignExampleDivBlue=t.alignExampleDiv=void 0;var l=m(n(67294)),r=m(n(55281)),a=m(n(47166)),i=n(51051),o=m(n(79029)),d=m(n(56931)),u=m(n(46826));function m(e){return e&&e.__esModule?e:{default:e}}var p=a.default.bind(u.default),c="This example provides content containers with a fit (start and/or end region) and fill (middle region). Arrange Props have one required prop which is fill to the content to display in the body of the fill.",s=(t.simpleText=l.default.createElement("span",null,c),t.textWithBlueBorder=l.default.createElement("span",{className:p("outlined-placeholder")},c),l.default.createElement("span",null,"Clinical data is a staple resource for most health and medical research. Clinical data is either collected during the course of ongoing patient care or as part of a formal clinical trial program. For more information visit ",l.default.createElement("a",{href:"#clinical-information",onKeyDown:function(e){e.keyCode===i.KEY_SPACE&&e.preventDefault()}},"Clinical information"))),f=l.default.createElement("span",null,"Trusted clinical technology and evidence-based solutions that drive effective decision-making and outcomes across healthcare. Specialized in clinical effectiveness, research and safety.",l.default.createElement("button",{type:"button",className:p("space-around"),onClick:function(){alert("Health solutions button has been clicked")}},"View all health solutions")),x=l.default.createElement(l.default.Fragment,null,l.default.createElement(d.default,{legend:"A telemedicine consent form is used to confirm that a patient agrees to telemedicine services, which are medical services done remotely over the phone or computer."},l.default.createElement(o.default,{id:"yes",name:"inline-example",labelText:"Yes",value:"yes",isInline:!0}),l.default.createElement(o.default,{id:"no",name:"inline-example",labelText:"No",value:"no",isInline:!0})));t.textClinicalData=l.default.createElement("span",{className:p("outlined-placeholder")},s),t.textHealthSolutionsData=l.default.createElement("span",{className:p("outlined-placeholder","info-text")},f),t.textConsentFormData=l.default.createElement("span",{className:p("outlined-placeholder")},x),t.alignExampleDiv=l.default.createElement("span",{className:p("placeholder")}),t.alignExampleDivBlue=l.default.createElement("span",{className:p("highlighted-placeholder")}),t.homeButton=l.default.createElement(r.default,{className:p(["arrange-button"]),isIconOnly:!0,icon:l.default.createElement("span",{className:p(["header-icon","home"])}),onClick:function(){alert("Home button has been clicked")},text:"Home button"}),t.menuButton=l.default.createElement(r.default,{className:p(["arrange-button"]),isIconOnly:!0,icon:l.default.createElement("span",{className:p(["header-icon","menu"])}),onClick:function(){alert("Menu button has been clicked")},text:"Menu button"}),t.chatButton=l.default.createElement(r.default,{className:p(["arrange-button"]),isIconOnly:!0,icon:l.default.createElement("span",{className:p(["header-icon","chat"])}),onClick:function(){alert("Chat button has been clicked")},text:"Chat with us button"}),t.settingsButton=l.default.createElement(r.default,{className:p(["arrange-button"]),isIconOnly:!0,icon:l.default.createElement("span",{className:p(["header-icon","settings"])}),onClick:function(){alert("Settings button has been clicked")},text:"Settings button"}),t.twitterButton=l.default.createElement(r.default,{className:p(["arrange-button"]),isIconOnly:!0,icon:l.default.createElement("span",{className:p(["header-icon","twitter"])}),onClick:function(){alert("Twitter button has been clicked")},text:"Twitter button"}),t.backtotopButton=l.default.createElement(r.default,{className:p(["arrange-button"]),isIconOnly:!0,icon:l.default.createElement("span",{className:p(["header-icon","backtotop"])}),onClick:function(){alert("Back to top button has been clicked")},text:"Back to top button"})},50920:function(e,t,n){t.Z=void 0;var l=i(n(67294)),r=i(n(78490)),a=n(14598);function i(e){return e&&e.__esModule?e:{default:e}}t.Z=function(){return l.default.createElement("div",null,l.default.createElement("h3",null,"Align - Default"),l.default.createElement(r.default,{fitStart:a.homeButton,fill:a.textClinicalData,fitEnd:a.menuButton}),l.default.createElement("br",null),l.default.createElement("hr",null),l.default.createElement("h3",null,"Align - Center"),l.default.createElement(r.default,{align:"center",fitStart:a.settingsButton,fill:a.textHealthSolutionsData,fitEnd:a.chatButton}),l.default.createElement("br",null),l.default.createElement("hr",null),l.default.createElement("h3",null,"Align - Bottom"),l.default.createElement(r.default,{align:"bottom",fitStart:a.twitterButton,fill:a.textConsentFormData,fitEnd:a.backtotopButton}))}},36519:function(e,t,n){t.Z=void 0;var l=i(n(67294)),r=i(n(78490)),a=n(14598);function i(e){return e&&e.__esModule?e:{default:e}}t.Z=function(){return l.default.createElement("div",null,l.default.createElement("h3",null,"Align Fill - Default"),l.default.createElement(r.default,{fitStart:a.alignExampleDiv,fill:a.textWithBlueBorder,fitEnd:a.alignExampleDiv}),l.default.createElement("br",null),l.default.createElement("hr",null),l.default.createElement("h3",null,"Align Fill - Center"),l.default.createElement(r.default,{alignFill:"center",fitStart:a.alignExampleDiv,fill:a.textWithBlueBorder,fitEnd:a.alignExampleDiv}),l.default.createElement("br",null),l.default.createElement("hr",null),l.default.createElement("h3",null,"Align Fill - Bottom"),l.default.createElement(r.default,{alignFill:"bottom",fitStart:a.alignExampleDiv,fill:a.textWithBlueBorder,fitEnd:a.alignExampleDiv}))}},36824:function(e,t,n){t.Z=void 0;var l=i(n(67294)),r=i(n(78490)),a=n(14598);function i(e){return e&&e.__esModule?e:{default:e}}t.Z=function(){return l.default.createElement("div",null,l.default.createElement("h3",null,"Align FitEnd - Default"),l.default.createElement(r.default,{fitStart:a.alignExampleDiv,fill:a.simpleText,fitEnd:a.alignExampleDivBlue}),l.default.createElement("br",null),l.default.createElement("hr",null),l.default.createElement("h3",null,"Align FitEnd - Center"),l.default.createElement(r.default,{alignFitEnd:"center",fitStart:a.alignExampleDiv,fill:a.simpleText,fitEnd:a.alignExampleDivBlue}),l.default.createElement("br",null),l.default.createElement("hr",null),l.default.createElement("h3",null,"Align FitEnd - Bottom"),l.default.createElement(r.default,{alignFitEnd:"bottom",fitStart:a.alignExampleDiv,fill:a.simpleText,fitEnd:a.alignExampleDivBlue}))}},38956:function(e,t,n){t.Z=void 0;var l=i(n(67294)),r=i(n(78490)),a=n(14598);function i(e){return e&&e.__esModule?e:{default:e}}t.Z=function(){return l.default.createElement("div",null,l.default.createElement("h3",null,"Align FitStart - Default"),l.default.createElement(r.default,{fitStart:a.alignExampleDivBlue,fill:a.simpleText,fitEnd:a.alignExampleDiv}),l.default.createElement("br",null),l.default.createElement("hr",null),l.default.createElement("h3",null,"Align FitStart - Center"),l.default.createElement(r.default,{alignFitStart:"center",fitStart:a.alignExampleDivBlue,fill:a.simpleText,fitEnd:a.alignExampleDiv}),l.default.createElement("br",null),l.default.createElement("hr",null),l.default.createElement("h3",null,"Align FitStart - Bottom"),l.default.createElement(r.default,{alignFitStart:"bottom",fitStart:a.alignExampleDivBlue,fill:a.simpleText,fitEnd:a.alignExampleDiv}))}},33698:function(e,t,n){n.r(t),n.d(t,{default:function(){return K}});var l=n(67294),r=n(81254),a=n(86377),i=n(50920),o=["components"];function d(){return d=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var l in n)Object.prototype.hasOwnProperty.call(n,l)&&(e[l]=n[l])}return e},d.apply(this,arguments)}function u(e,t){if(null==e)return{};var n,l,r=function(e,t){if(null==e)return{};var n,l,r={},a=Object.keys(e);for(l=0;l<a.length;l++)n=a[l],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(l=0;l<a.length;l++)n=a[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var m={};function p(e){var t=e.components,n=u(e,o);return(0,r.mdx)("wrapper",d({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport Arrange from 'terra-arrange';\nimport {\n  textClinicalData, textHealthSolutionsData, textConsentFormData, homeButton, menuButton, chatButton, settingsButton, twitterButton, backtotopButton,\n} from '../common/examplesetup';\n\nconst ArrangeAlignAllContainers = () => (\n  <div>\n    <h3>Align - Default</h3>\n    <Arrange\n      fitStart={homeButton}\n      fill={textClinicalData}\n      fitEnd={menuButton}\n    />\n    <br />\n    <hr />\n    <h3>Align - Center</h3>\n    <Arrange\n      align=\"center\"\n      fitStart={settingsButton}\n      fill={textHealthSolutionsData}\n      fitEnd={chatButton}\n    />\n    <br />\n    <hr />\n    <h3>Align - Bottom</h3>\n    <Arrange\n      align=\"bottom\"\n      fitStart={twitterButton}\n      fill={textConsentFormData}\n      fitEnd={backtotopButton}\n    />\n  </div>\n);\n\nexport default ArrangeAlignAllContainers;\n\n")))}p.isMDXComponent=!0;var c=n(49271),s=function(e){var t=e.title,n=e.description,r=e.isExpanded;return l.createElement(c.Z,{title:t||"Arrange Align All Containers",description:n,example:l.createElement(i.Z,null),exampleSrc:l.createElement(p,null),isExpanded:r})},f=n(36519),x=["components"];function g(){return g=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var l in n)Object.prototype.hasOwnProperty.call(n,l)&&(e[l]=n[l])}return e},g.apply(this,arguments)}function h(e,t){if(null==e)return{};var n,l,r=function(e,t){if(null==e)return{};var n,l,r={},a=Object.keys(e);for(l=0;l<a.length;l++)n=a[l],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(l=0;l<a.length;l++)n=a[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var b={};function y(e){var t=e.components,n=h(e,x);return(0,r.mdx)("wrapper",g({},b,n,{components:t,mdxType:"MDXLayout"}),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport Arrange from 'terra-arrange';\nimport { alignExampleDiv, textWithBlueBorder } from '../common/examplesetup';\n\nconst ArrangeAlignFill = () => (\n  <div>\n    <h3>Align Fill - Default</h3>\n    <Arrange\n      fitStart={alignExampleDiv}\n      fill={textWithBlueBorder}\n      fitEnd={alignExampleDiv}\n    />\n    <br />\n    <hr />\n    <h3>Align Fill - Center</h3>\n    <Arrange\n      alignFill=\"center\"\n      fitStart={alignExampleDiv}\n      fill={textWithBlueBorder}\n      fitEnd={alignExampleDiv}\n    />\n    <br />\n    <hr />\n    <h3>Align Fill - Bottom</h3>\n    <Arrange\n      alignFill=\"bottom\"\n      fitStart={alignExampleDiv}\n      fill={textWithBlueBorder}\n      fitEnd={alignExampleDiv}\n    />\n  </div>\n);\n\nexport default ArrangeAlignFill;\n\n")))}y.isMDXComponent=!0;var E=function(e){var t=e.title,n=e.description,r=e.isExpanded;return l.createElement(c.Z,{title:t||"Arrange Align Fill",description:n,example:l.createElement(f.Z,null),exampleSrc:l.createElement(y,null),isExpanded:r})},v=n(36824),_=["components"];function O(){return O=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var l in n)Object.prototype.hasOwnProperty.call(n,l)&&(e[l]=n[l])}return e},O.apply(this,arguments)}function T(e,t){if(null==e)return{};var n,l,r=function(e,t){if(null==e)return{};var n,l,r={},a=Object.keys(e);for(l=0;l<a.length;l++)n=a[l],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(l=0;l<a.length;l++)n=a[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var D={};function A(e){var t=e.components,n=T(e,_);return(0,r.mdx)("wrapper",O({},D,n,{components:t,mdxType:"MDXLayout"}),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport Arrange from 'terra-arrange';\nimport { alignExampleDivBlue, alignExampleDiv, simpleText } from '../common/examplesetup';\n\nconst ArrangeAlignFitStart = () => (\n  <div>\n    <h3>Align FitEnd - Default</h3>\n    <Arrange\n      fitStart={alignExampleDiv}\n      fill={simpleText}\n      fitEnd={alignExampleDivBlue}\n    />\n    <br />\n    <hr />\n    <h3>Align FitEnd - Center</h3>\n    <Arrange\n      alignFitEnd=\"center\"\n      fitStart={alignExampleDiv}\n      fill={simpleText}\n      fitEnd={alignExampleDivBlue}\n    />\n    <br />\n    <hr />\n    <h3>Align FitEnd - Bottom</h3>\n    <Arrange\n      alignFitEnd=\"bottom\"\n      fitStart={alignExampleDiv}\n      fill={simpleText}\n      fitEnd={alignExampleDivBlue}\n    />\n  </div>\n);\n\nexport default ArrangeAlignFitStart;\n\n")))}A.isMDXComponent=!0;var S=function(e){var t=e.title,n=e.description,r=e.isExpanded;return l.createElement(c.Z,{title:t||"Arrange Align Fit End",description:n,example:l.createElement(v.Z,null),exampleSrc:l.createElement(A,null),isExpanded:r})},C=n(38956),N=["components"];function j(){return j=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var l in n)Object.prototype.hasOwnProperty.call(n,l)&&(e[l]=n[l])}return e},j.apply(this,arguments)}function w(e,t){if(null==e)return{};var n,l,r=function(e,t){if(null==e)return{};var n,l,r={},a=Object.keys(e);for(l=0;l<a.length;l++)n=a[l],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(l=0;l<a.length;l++)n=a[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var F={};function B(e){var t=e.components,n=w(e,N);return(0,r.mdx)("wrapper",j({},F,n,{components:t,mdxType:"MDXLayout"}),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport Arrange from 'terra-arrange';\nimport { alignExampleDiv, alignExampleDivBlue, simpleText } from '../common/examplesetup';\n\nconst ArrangeAlignFitStart = () => (\n  <div>\n    <h3>Align FitStart - Default</h3>\n    <Arrange\n      fitStart={alignExampleDivBlue}\n      fill={simpleText}\n      fitEnd={alignExampleDiv}\n    />\n    <br />\n    <hr />\n    <h3>Align FitStart - Center</h3>\n    <Arrange\n      alignFitStart=\"center\"\n      fitStart={alignExampleDivBlue}\n      fill={simpleText}\n      fitEnd={alignExampleDiv}\n    />\n    <br />\n    <hr />\n    <h3>Align FitStart - Bottom</h3>\n    <Arrange\n      alignFitStart=\"bottom\"\n      fitStart={alignExampleDivBlue}\n      fill={simpleText}\n      fitEnd={alignExampleDiv}\n    />\n  </div>\n);\n\nexport default ArrangeAlignFitStart;\n\n")))}B.isMDXComponent=!0;var R=function(e){var t=e.title,n=e.description,r=e.isExpanded;return l.createElement(c.Z,{title:t||"Arrange Align Fit Start",description:n,example:l.createElement(C.Z,null),exampleSrc:l.createElement(B,null),isExpanded:r})},P=n(78530),k=["components"];function q(){return q=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var l in n)Object.prototype.hasOwnProperty.call(n,l)&&(e[l]=n[l])}return e},q.apply(this,arguments)}function I(e,t){if(null==e)return{};var n,l,r=function(e,t){if(null==e)return{};var n,l,r={},a=Object.keys(e);for(l=0;l<a.length;l++)n=a[l],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(l=0;l<a.length;l++)n=a[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var M={},W="wrapper";function X(e){var t=e.components,n=I(e,k);return(0,r.mdx)(W,q({},M,n,{components:t,mdxType:"MDXLayout"}),(0,r.mdx)(P.ZP,{mdxType:"PropsTable"},(0,r.mdx)(P.X2,{key:"ROW1",mdxType:"Row"},(0,r.mdx)(P.O,{mdxType:"PropNameCell"},"fitStart"),(0,r.mdx)(P.Di,{mdxType:"TypeCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"element\n"))),(0,r.mdx)(P.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,r.mdx)(P.mW,{mdxType:"DefaultValueCell"},(0,r.mdx)("p",null,"none")),(0,r.mdx)(P.Ex,{mdxType:"DescriptionCell"},(0,r.mdx)("p",null,"The content to display in the body of the fitStart."))),(0,r.mdx)(P.X2,{key:"ROW2",mdxType:"Row"},(0,r.mdx)(P.O,{mdxType:"PropNameCell"},"fill"),(0,r.mdx)(P.Di,{mdxType:"TypeCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"element\n"))),(0,r.mdx)(P.dS,{isRequired:!0,mdxType:"RequiredCell"}),(0,r.mdx)(P.mW,{mdxType:"DefaultValueCell"},(0,r.mdx)("p",null,"none")),(0,r.mdx)(P.Ex,{mdxType:"DescriptionCell"},(0,r.mdx)("p",null,"The content to display in the body of the fill."))),(0,r.mdx)(P.X2,{key:"ROW3",mdxType:"Row"},(0,r.mdx)(P.O,{mdxType:"PropNameCell"},"fitEnd"),(0,r.mdx)(P.Di,{mdxType:"TypeCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"element\n"))),(0,r.mdx)(P.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,r.mdx)(P.mW,{mdxType:"DefaultValueCell"},(0,r.mdx)("p",null,"none")),(0,r.mdx)(P.Ex,{mdxType:"DescriptionCell"},(0,r.mdx)("p",null,"The content to display in the body of the fitEnd."))),(0,r.mdx)(P.X2,{key:"ROW4",mdxType:"Row"},(0,r.mdx)(P.O,{mdxType:"PropNameCell"},"align"),(0,r.mdx)(P.Di,{mdxType:"TypeCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"enum: [\n  'center'\n  'bottom'\n  'stretch'\n],\n"))),(0,r.mdx)(P.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,r.mdx)(P.mW,{mdxType:"DefaultValueCell"},(0,r.mdx)("p",null,"none")),(0,r.mdx)(P.Ex,{mdxType:"DescriptionCell"},(0,r.mdx)("p",null,"The vertical orientation of all three containers. It will override the alignment of alignFitStart, alignFill and alignFitEnd if given. One of: ",(0,r.mdx)("inlineCode",{parentName:"p"},"center"),", ",(0,r.mdx)("inlineCode",{parentName:"p"},"bottom"),", ",(0,r.mdx)("inlineCode",{parentName:"p"},"stretch"),"."))),(0,r.mdx)(P.X2,{key:"ROW5",mdxType:"Row"},(0,r.mdx)(P.O,{mdxType:"PropNameCell"},"alignFitStart"),(0,r.mdx)(P.Di,{mdxType:"TypeCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"enum: [\n  'center'\n  'bottom'\n  'stretch'\n],\n"))),(0,r.mdx)(P.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,r.mdx)(P.mW,{mdxType:"DefaultValueCell"},(0,r.mdx)("p",null,"none")),(0,r.mdx)(P.Ex,{mdxType:"DescriptionCell"},(0,r.mdx)("p",null,"The vertical orientation of fitStart. One of: ",(0,r.mdx)("inlineCode",{parentName:"p"},"center"),", ",(0,r.mdx)("inlineCode",{parentName:"p"},"bottom"),", ",(0,r.mdx)("inlineCode",{parentName:"p"},"stretch"),"."))),(0,r.mdx)(P.X2,{key:"ROW6",mdxType:"Row"},(0,r.mdx)(P.O,{mdxType:"PropNameCell"},"alignFitEnd"),(0,r.mdx)(P.Di,{mdxType:"TypeCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"enum: [\n  'center'\n  'bottom'\n  'stretch'\n],\n"))),(0,r.mdx)(P.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,r.mdx)(P.mW,{mdxType:"DefaultValueCell"},(0,r.mdx)("p",null,"none")),(0,r.mdx)(P.Ex,{mdxType:"DescriptionCell"},(0,r.mdx)("p",null,"The vertical orientation of fitEnd. One of: ",(0,r.mdx)("inlineCode",{parentName:"p"},"center"),", ",(0,r.mdx)("inlineCode",{parentName:"p"},"bottom"),", ",(0,r.mdx)("inlineCode",{parentName:"p"},"stretch"),"."))),(0,r.mdx)(P.X2,{key:"ROW7",mdxType:"Row"},(0,r.mdx)(P.O,{mdxType:"PropNameCell"},"alignFill"),(0,r.mdx)(P.Di,{mdxType:"TypeCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"enum: [\n  'center'\n  'bottom'\n  'stretch'\n],\n"))),(0,r.mdx)(P.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,r.mdx)(P.mW,{mdxType:"DefaultValueCell"},(0,r.mdx)("p",null,"none")),(0,r.mdx)(P.Ex,{mdxType:"DescriptionCell"},(0,r.mdx)("p",null,"The vertical orientation of fill. One of: ",(0,r.mdx)("inlineCode",{parentName:"p"},"center"),", ",(0,r.mdx)("inlineCode",{parentName:"p"},"bottom"),", ",(0,r.mdx)("inlineCode",{parentName:"p"},"stretch"),"."))),(0,r.mdx)(P.X2,{key:"ROW8",mdxType:"Row"},(0,r.mdx)(P.O,{mdxType:"PropNameCell"},"fitStartAttributes"),(0,r.mdx)(P.Di,{mdxType:"TypeCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"object\n"))),(0,r.mdx)(P.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,r.mdx)(P.mW,{mdxType:"DefaultValueCell"},(0,r.mdx)("p",null,"none")),(0,r.mdx)(P.Ex,{mdxType:"DescriptionCell"},(0,r.mdx)("p",null,"The attributes to be set on the fitStart wrapper element"))),(0,r.mdx)(P.X2,{key:"ROW9",mdxType:"Row"},(0,r.mdx)(P.O,{mdxType:"PropNameCell"},"fillAttributes"),(0,r.mdx)(P.Di,{mdxType:"TypeCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"object\n"))),(0,r.mdx)(P.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,r.mdx)(P.mW,{mdxType:"DefaultValueCell"},(0,r.mdx)("p",null,"none")),(0,r.mdx)(P.Ex,{mdxType:"DescriptionCell"},(0,r.mdx)("p",null,"The attributes to be set on the fill wrapper element"))),(0,r.mdx)(P.X2,{key:"ROW10",mdxType:"Row"},(0,r.mdx)(P.O,{mdxType:"PropNameCell"},"fitEndAttributes"),(0,r.mdx)(P.Di,{mdxType:"TypeCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"object\n"))),(0,r.mdx)(P.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,r.mdx)(P.mW,{mdxType:"DefaultValueCell"},(0,r.mdx)("p",null,"none")),(0,r.mdx)(P.Ex,{mdxType:"DescriptionCell"},(0,r.mdx)("p",null,"The attributes to be set on the fitEnd wrapper element")))))}X.isMDXComponent=!0;var V=["components"];function Z(){return Z=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var l in n)Object.prototype.hasOwnProperty.call(n,l)&&(e[l]=n[l])}return e},Z.apply(this,arguments)}function H(e,t){if(null==e)return{};var n,l,r=function(e,t){if(null==e)return{};var n,l,r={},a=Object.keys(e);for(l=0;l<a.length;l++)n=a[l],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(l=0;l<a.length;l++)n=a[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var L={},U="wrapper";function K(e){var t=e.components,n=H(e,V);return(0,r.mdx)(U,Z({},L,n,{components:t,mdxType:"MDXLayout"}),(0,r.mdx)(a.C,{mdxType:"Badge"}),(0,r.mdx)("h1",{id:"terra-arrange"},"Terra Arrange"),(0,r.mdx)("p",null,"The arrange component provides content containers with a fit (start and/or end region) and fill (middle region)."),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},"Terra arrange supports altering multiple CSS attributes without loss of function or information."),(0,r.mdx)("li",{parentName:"ul"},"Terra arrange supports resizing to 400%."),(0,r.mdx)("li",{parentName:"ul"},"Terra arrange supports reflow when the viewport is resized to 320x256 px without loss of information or function.")),(0,r.mdx)("h2",{id:"getting-started"},"Getting Started"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},"Install with ",(0,r.mdx)("a",{parentName:"li",href:"https://www.npmjs.com/"},"npmjs"),":",(0,r.mdx)("ul",{parentName:"li"},(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("inlineCode",{parentName:"li"},"npm install terra-arrange"))))),(0,r.mdx)("h2",{id:"peer-dependencies"},"Peer Dependencies"),(0,r.mdx)("p",null,"This component requires the following peer dependencies be installed in your app for the component to properly function."),(0,r.mdx)("table",null,(0,r.mdx)("thead",{parentName:"table"},(0,r.mdx)("tr",{parentName:"thead"},(0,r.mdx)("th",{parentName:"tr",align:null},"Peer Dependency"),(0,r.mdx)("th",{parentName:"tr",align:null},"Version"))),(0,r.mdx)("tbody",{parentName:"table"},(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"react"),(0,r.mdx)("td",{parentName:"tr",align:null},"^16.8.5")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"react-dom"),(0,r.mdx)("td",{parentName:"tr",align:null},"^16.8.5")))),(0,r.mdx)("h2",{id:"usage"},"Usage"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-jsx"},"import Arrange from 'terra-arrange';\n")),(0,r.mdx)("h2",{id:"accessibility"},"Accessibility"),(0,r.mdx)("p",null,"For further guidance, please view the full ",(0,r.mdx)("a",{parentName:"p",href:"./accessibility-guide"},"Accessibility Guide"),"."),(0,r.mdx)("h2",{id:"component-features"},"Component Features"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("a",{parentName:"li",href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#cross-browser-support"},"Cross-Browser Support")),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("a",{parentName:"li",href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#responsive-support"},"Responsive Support")),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("a",{parentName:"li",href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#mobile-support"},"Mobile Support"))),(0,r.mdx)("h2",{id:"examples"},"Examples"),(0,r.mdx)(R,{title:"Align Individual Containers - FitStart",mdxType:"ArrangeAlignFitStart"}),(0,r.mdx)(E,{title:"Align Individual Containers - Fill",mdxType:"ArrangeAlignFill"}),(0,r.mdx)(S,{title:"Align Individual Containers - FitEnd",mdxType:"ArrangeAlignFitEnd"}),(0,r.mdx)(s,{title:"Align All Containers",mdxType:"ArrangeAlignAllContainers"}),(0,r.mdx)("h2",{id:"arrange-props"},"Arrange Props"),(0,r.mdx)(X,{mdxType:"ArrangePropsTable"}))}K.isMDXComponent=!0},86377:function(e,t,n){n.d(t,{C:function(){return a}});var l=n(67294),r=n(22863),a=function(e){var t=e.url;return l.createElement(r.Z,{src:"https://github.com/cerner/terra-core/tree/main/packages/terra-arrange",name:"terra-arrange",version:"3.54.0",url:t})}},46826:function(e,t,n){n.r(t),t.default={"outlined-placeholder":"examplesetup__outlined-placeholder___2yAIj",placeholder:"examplesetup__placeholder___+FlSk","highlighted-placeholder":"examplesetup__highlighted-placeholder___VMV4x","space-around":"examplesetup__space-around___XwTYU","radio-buttons":"examplesetup__radio-buttons___NQDlI",label:"examplesetup__label___+u06l","arrange-button":"examplesetup__arrange-button___y+qmf","header-icon":"examplesetup__header-icon___20Jih",menu:"examplesetup__menu___66Gx1",home:"examplesetup__home___g1SWV",chat:"examplesetup__chat___LUClD",settings:"examplesetup__settings___+OPef",backtotop:"examplesetup__backtotop___tpJtH",twitter:"examplesetup__twitter___C-3DO"}},66633:function(e,t,n){n.r(t),t.default={arrange:"Arrange-module__arrange___hY0Ml",fill:"Arrange-module__fill___m88eq",fit:"Arrange-module__fit___tv8j-",center:"Arrange-module__center___9qfhG",bottom:"Arrange-module__bottom___8beod",stretch:"Arrange-module__stretch___eQF-k",default:"Arrange-module__default___z+O29"}},89951:function(e,t,n){n.r(t),t.default={"clinical-lowlight-theme":"RadioField-module__clinical-lowlight-theme___H55y8","orion-fusion-theme":"RadioField-module__orion-fusion-theme___Eh5Nn","radio-field":"RadioField-module__radio-field___fpXfP","is-inline":"RadioField-module__is-inline___8FRg7","legend-group":"RadioField-module__legend-group___8mMif","legend-group-hidden":"RadioField-module__legend-group-hidden___irjwu",legend:"RadioField-module__legend___7g1rE","error-icon":"RadioField-module__error-icon___+vwY3","error-icon-hidden":"RadioField-module__error-icon-hidden___diu+V",required:"RadioField-module__required___7KHDx","required-hidden":"RadioField-module__required-hidden___A0eyI",optional:"RadioField-module__optional___9DBWR","help-text":"RadioField-module__help-text___9UUSl","error-text":"RadioField-module__error-text___2mn2V"}},78490:function(e,t,n){function l(e){return l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},l(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.AlignmentTypes=void 0;var r=u(n(67294)),a=u(n(45697)),i=u(n(47166)),o=u(n(66633)),d=["fitStart","fill","fitEnd","align","alignFitStart","alignFill","alignFitEnd","fitStartAttributes","fillAttributes","fitEndAttributes"];function u(e){return e&&e.__esModule?e:{default:e}}function m(){return m=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var l in n)Object.prototype.hasOwnProperty.call(n,l)&&(e[l]=n[l])}return e},m.apply(this,arguments)}function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t,n){return(t=function(e){var t=function(e,t){if("object"!==l(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!==l(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===l(t)?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function f(e,t){if(null==e)return{};var n,l,r=function(e,t){if(null==e)return{};var n,l,r={},a=Object.keys(e);for(l=0;l<a.length;l++)n=a[l],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(l=0;l<a.length;l++)n=a[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}t.AlignmentTypes={CENTER:"center",BOTTOM:"bottom",STRETCH:"stretch"};var x=i.default.bind(o.default),g={fitStart:a.default.element,fill:a.default.element.isRequired,fitEnd:a.default.element,align:a.default.oneOf(["center","bottom","stretch"]),alignFitStart:a.default.oneOf(["center","bottom","stretch"]),alignFitEnd:a.default.oneOf(["center","bottom","stretch"]),alignFill:a.default.oneOf(["center","bottom","stretch"]),fitStartAttributes:a.default.object,fillAttributes:a.default.object,fitEndAttributes:a.default.object},h=function(e){var t=e.fitStart,n=e.fill,l=e.fitEnd,a=e.align,i=e.alignFitStart,o=e.alignFill,u=e.alignFitEnd,p=e.fitStartAttributes,s=e.fillAttributes,g=e.fitEndAttributes,h=f(e,d),b=c({},p),y=c({},s),E=c({},g);return r.default.createElement("span",m({},h,{className:x("arrange",h.className)}),r.default.createElement("span",m({},b,{className:x("fit",a||i,b.className,"fit-block")}),t),r.default.createElement("span",m({},y,{className:x("fill",a||o,y.className,"fill-block")}),n),r.default.createElement("span",m({},E,{className:x("fit",a||u,E.className)}),l))};h.propTypes=g;t.default=h},56931:function(e,t,n){function l(e){return l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},l(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=g(n(67294)),a=g(n(45697)),i=n(25387),o=g(n(94184)),d=g(n(47166)),u=g(n(50026)),m=g(n(14461)),p=g(n(29270)),c=n(51051),s=n(67217),f=g(n(89951)),x=["children","error","help","hideRequired","intl","isInvalid","isInline","isLegendHidden","legend","legendAttrs","required","showOptional"];function g(e){return e&&e.__esModule?e:{default:e}}function h(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function b(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?h(Object(n),!0).forEach((function(t){y(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):h(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function y(e,t,n){return(t=function(e){var t=function(e,t){if("object"!==l(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!==l(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===l(t)?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function E(){return E=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var l in n)Object.prototype.hasOwnProperty.call(n,l)&&(e[l]=n[l])}return e},E.apply(this,arguments)}function v(e,t){if(null==e)return{};var n,l,r=function(e,t){if(null==e)return{};var n,l,r={},a=Object.keys(e);for(l=0;l<a.length;l++)n=a[l],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(l=0;l<a.length;l++)n=a[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var _=d.default.bind(f.default),O={children:a.default.node,error:a.default.node,help:a.default.node,hideRequired:a.default.bool,intl:a.default.shape({formatMessage:a.default.func}).isRequired,isInline:a.default.bool,isInvalid:a.default.bool,isLegendHidden:a.default.bool,legend:a.default.string.isRequired,legendAttrs:a.default.object,required:a.default.bool,showOptional:a.default.bool},T=function(e){var t=e.children,n=e.error,l=e.help,a=e.hideRequired,i=e.intl,d=e.isInvalid,f=e.isInline,g=e.isLegendHidden,h=e.legend,y=e.legendAttrs,O=e.required,T=e.showOptional,D=v(e,x),A=r.default.useContext(u.default),S=(0,o.default)(_("radio-field",{"is-inline":f},A.className),D.className),C=_(["legend",y.className]),N=D.id||"terra-radio-group-".concat((0,m.default)()),j="terra-radio-field-description-".concat((0,m.default)()),w=l?"terra-radio-field-description-help-".concat((0,m.default)()):"",F=n?"terra-radio-field-description-error-".concat((0,m.default)()):"",B="".concat(j," ").concat(F," ").concat(w),R=-1!==navigator.userAgent.indexOf("Safari")&&-1===navigator.userAgent.indexOf("Chrome"),P=-1!==navigator.userAgent.indexOf("Edg"),k=R||P?"div":"legend",q=r.default.createElement(k,{id:j,className:_(["legend-group",{"legend-group-hidden":g}])},r.default.createElement("div",E({},y,{className:C}),d&&r.default.createElement("span",{className:_("error-icon")}),O&&(d||!a)&&r.default.createElement(r.default.Fragment,null,r.default.createElement("div",{"aria-hidden":"true",className:_("required")},"*"),r.default.createElement(p.default,{text:i.formatMessage({id:"Terra.form.field.required"})})),h,O&&!d&&a&&r.default.createElement("span",{className:_("required-hidden")},"*"),T&&!O&&r.default.createElement("span",{className:_("optional")},i.formatMessage({id:"Terra.form.field.optional"})),!d&&r.default.createElement("span",{className:_("error-icon-hidden")}))),I=r.default.Children.map(t,(function(e){if(e&&e.type.isRadio){var t=R?{onKeyDown:function(t){return function(e,t){var n=document.getElementById(N);if(n){var l=n.querySelectorAll("[type=radio]"),r=Array.from(l).indexOf(e.currentTarget),a=new MouseEvent("click",{bubbles:!0,cancelable:!1}),i=(0,s.findFirstFocusableItem)(l),o=(0,s.findLastFocusableItem)(l);e.nativeEvent.key===c.VALUE_DOWN||e.nativeEvent.key===c.VALUE_RIGHT?r===o&&l[i].dispatchEvent(a):e.nativeEvent.key!==c.VALUE_UP&&e.nativeEvent.key!==c.VALUE_LEFT||r===i&&l[o].dispatchEvent(a)}t&&t.props.onKeyDown&&t.props.onKeyDown()}(t,e)},onClick:function(t){return function(e,t){var n;null==e||null===(n=e.currentTarget)||void 0===n||n.focus(),t&&t.props.onClick&&t.props.onClick()}(t,e)}}:void 0;return r.default.cloneElement(e,{inputAttrs:b(b({},e.props.inputAttrs),{},{"aria-describedby":B},t)})}return e}));return r.default.createElement("fieldset",E({id:N},D,{required:O,className:S}),q,I,d&&n&&r.default.createElement("div",{id:F,className:_("error-text")},n),l&&r.default.createElement("div",{id:w,className:_("help-text")},l))};T.propTypes=O,T.defaultProps={children:null,error:null,help:null,hideRequired:!1,isInline:!1,isInvalid:!1,isLegendHidden:!1,legendAttrs:{},required:!1,showOptional:!1};t.default=(0,i.injectIntl)(T)}}]);