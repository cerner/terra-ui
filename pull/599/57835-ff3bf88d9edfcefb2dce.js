"use strict";(self.webpackChunkterra_ui=self.webpackChunkterra_ui||[]).push([[57835,45627,37344,33667,96890,14041,27444,85565,3353,80858,17657,5161,45865,85355,3193,33315,4845,20444,26806,46647,85161,38681,17763,15318,40411,18101,38443,78996,39915,33442],{30121:function(e,t,n){t.Z=void 0;var a=d(n(67294)),r=d(n(78878)),l=d(n(80083));function d(e){return e&&e.__esModule?e:{default:e}}var i=a.default.createElement(r.default,null),o=function(){return a.default.createElement("div",null,a.default.createElement(l.default,{icon:i,text:"icon"})," ",a.default.createElement(l.default,{icon:i,text:"icon",isReversed:!0})," ",a.default.createElement(l.default,{icon:i}))};t.Z=o},66:function(e,t,n){t.Z=void 0;var a=l(n(67294)),r=l(n(80083));function l(e){return e&&e.__esModule?e:{default:e}}var d=function(){return a.default.createElement("div",null,a.default.createElement(r.default,{text:"Default"})," ",a.default.createElement(r.default,{intent:"primary",text:"Primary"})," ",a.default.createElement(r.default,{intent:"secondary",text:"Secondary"})," ",a.default.createElement(r.default,{intent:"positive",text:"Positive"})," ",a.default.createElement(r.default,{intent:"negative",text:"Negative"})," ",a.default.createElement(r.default,{intent:"warning",text:"Warning"})," ",a.default.createElement(r.default,{intent:"info",text:"Info"}))};t.Z=d},22075:function(e,t,n){t.Z=void 0;var a=l(n(67294)),r=l(n(80083));function l(e){return e&&e.__esModule?e:{default:e}}var d=function(){return a.default.createElement("div",null,a.default.createElement(r.default,{size:"tiny",text:"Tiny"})," ",a.default.createElement(r.default,{size:"small",text:"Small"})," ",a.default.createElement(r.default,{size:"medium",text:"Medium"})," ",a.default.createElement(r.default,{size:"large",text:"Large"})," ",a.default.createElement(r.default,{size:"huge",text:"Huge"}))};t.Z=d},11200:function(e,t,n){t.Z=void 0;var a=l(n(67294)),r=l(n(80083));function l(e){return e&&e.__esModule?e:{default:e}}var d=function(){return a.default.createElement("div",null,a.default.createElement(r.default,{text:"Low",visuallyHiddenText:"Risk Factor Low"})," ",a.default.createElement(r.default,{text:"Medium",visuallyHiddenText:"Risk Factor Medium"})," ",a.default.createElement(r.default,{text:"High",visuallyHiddenText:"Risk Factor High"})," ",a.default.createElement(r.default,{text:"Critical",visuallyHiddenText:"Risk Factor Critical"}))};t.Z=d},22863:function(e,t,n){var a=n(64836);t.Z=void 0;var r=a(n(67294)),l=a(n(45697)),d=a(n(47166)),i=a(n(17422)),o=d.default.bind(i.default),m={name:l.default.string.isRequired,src:l.default.string,url:l.default.string,version:l.default.string.isRequired},u=function(e){var t=e.src,n=e.name,a=e.url,l=e.version,d=r.default.createElement("a",{className:o("badge"),href:a||"https://www.npmjs.org/package/".concat(n,"/v/").concat(l)},r.default.createElement("span",{className:o("badge-name")},a?"package":"npm"),r.default.createElement("span",{className:o("badge-version")},"v".concat(l))),i=t?r.default.createElement("a",{className:o("badge"),href:t},r.default.createElement("span",{className:o("badge-name")},"github"),r.default.createElement("span",{className:o("badge-version")},"source")):void 0;return r.default.createElement("div",{className:o("badge-container")},d,i)};u.propTypes=m;var c=u;t.Z=c},49271:function(e,t,n){var a=n(64836),r=n(18698);t.Z=void 0;var l=a(n(27424)),d=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==r(e)&&"function"!=typeof e)return{default:e};var n=f(t);if(n&&n.has(e))return n.get(e);var a={},l=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var d in e)if("default"!==d&&Object.prototype.hasOwnProperty.call(e,d)){var i=l?Object.getOwnPropertyDescriptor(e,d):null;i&&(i.get||i.set)?Object.defineProperty(a,d,i):a[d]=e[d]}a.default=e,n&&n.set(e,a);return a}(n(67294)),i=a(n(45697)),o=a(n(47166)),m=n(21538),u=a(n(33864)),c=a(n(23399)),p=n(51051),s=a(n(53560));function f(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(f=function(e){return e?n:t})(e)}var x=o.default.bind(s.default),g={example:i.default.element,exampleSrc:i.default.element,exampleCssSrc:i.default.element,title:i.default.string,description:i.default.node,isExpanded:i.default.bool},y=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","true")},v=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","false")},_=function(e){var t=e.example,n=e.exampleSrc,a=e.exampleCssSrc,r=e.title,i=e.description,o=e.isExpanded,s=(0,d.useState)(o),f=(0,l.default)(s,2),g=f[0],_=f[1],b=(0,d.useState)(!1),h=(0,l.default)(b,2),O=h[0],E=h[1],N=d.default.useContext(m.ThemeContext),T=void 0!==a,j=function(){E(!O),g&&_(!g)},w=function(){_(!g),O&&E(!O)},B=function(e,t){e.nativeEvent.keyCode!==p.KEY_SPACE&&e.nativeEvent.keyCode!==p.KEY_RETURN||(e.preventDefault(),t())};return d.default.createElement("div",{className:x("template",N.className)},d.default.createElement("div",{className:x("header")},r&&d.default.createElement("h2",{className:x("title")},r)),d.default.createElement("div",{className:x("content")},i&&d.default.createElement("div",{className:x("description")},i),t),d.default.createElement("div",{className:x("footer")},n?d.default.createElement("div",{className:x("button-container")},T&&d.default.createElement("button",{type:"button",className:x("css-toggle","item",{"is-selected":O}),onClick:j,onKeyDown:function(e){return B(e,j)},onBlur:y,onMouseDown:v,tabIndex:0,"data-focus-styles-enabled":!0},d.default.createElement(u.default,{className:x("chevron")}),d.default.createElement("span",null,"CSS"),d.default.createElement(c.default,{className:x("chevron")})),d.default.createElement("button",{type:"button",className:x("code-toggle","item",{"is-selected":g}),onClick:w,onKeyDown:function(e){return B(e,w)},onBlur:y,onMouseDown:v,tabIndex:0,"data-focus-styles-enabled":!0},d.default.createElement(u.default,{className:x("chevron")}),d.default.createElement("span",null,"Code"),d.default.createElement(c.default,{className:x("chevron")}))):null,d.default.createElement("div",null,O&&d.default.createElement("div",{className:x("css")},a),g&&d.default.createElement("div",{className:x("code")},n))))};_.propTypes=g,_.defaultProps={isExpanded:!1};var b=_;t.Z=b},83160:function(e,t,n){n.r(t),n.d(t,{default:function(){return G}});var a=n(67294),r=n(81254),l=n(5334),d=n(66),i=["components"];function o(){return o=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},o.apply(this,arguments)}function m(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u={};function c(e){var t=e.components,n=m(e,i);return(0,r.mdx)("wrapper",o({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-jsx"},'import React from \'react\';\nimport Badge from \'terra-badge\';\n\nconst BadgeIntent = () => (\n  <div>\n    <Badge text="Default" />\n    {\' \'}\n    <Badge intent="primary" text="Primary" />\n    {\' \'}\n    <Badge intent="secondary" text="Secondary" />\n    {\' \'}\n    <Badge intent="positive" text="Positive" />\n    {\' \'}\n    <Badge intent="negative" text="Negative" />\n    {\' \'}\n    <Badge intent="warning" text="Warning" />\n    {\' \'}\n    <Badge intent="info" text="Info" />\n  </div>\n);\n\nexport default BadgeIntent;\n\n')))}c.isMDXComponent=!0;var p=n(49271),s=function(e){var t=e.title,n=e.description,r=e.isExpanded;return a.createElement(p.Z,{title:t||"Badge Intent",description:n,example:a.createElement(d.Z,null),exampleSrc:a.createElement(c,null),isExpanded:r})},f=n(22075),x=["components"];function g(){return g=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},g.apply(this,arguments)}function y(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var v={};function _(e){var t=e.components,n=y(e,x);return(0,r.mdx)("wrapper",g({},v,n,{components:t,mdxType:"MDXLayout"}),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-jsx"},'import React from \'react\';\nimport Badge from \'terra-badge\';\n\nconst BadgeSize = () => (\n  <div>\n    <Badge size="tiny" text="Tiny" />\n    {\' \'}\n    <Badge size="small" text="Small" />\n    {\' \'}\n    <Badge size="medium" text="Medium" />\n    {\' \'}\n    <Badge size="large" text="Large" />\n    {\' \'}\n    <Badge size="huge" text="Huge" />\n  </div>\n);\n\nexport default BadgeSize;\n\n')))}_.isMDXComponent=!0;var b=function(e){var t=e.title,n=e.description,r=e.isExpanded;return a.createElement(p.Z,{title:t||"Badge Size",description:n,example:a.createElement(f.Z,null),exampleSrc:a.createElement(_,null),isExpanded:r})},h=n(30121),O=["components"];function E(){return E=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},E.apply(this,arguments)}function N(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var T={};function j(e){var t=e.components,n=N(e,O);return(0,r.mdx)("wrapper",E({},T,n,{components:t,mdxType:"MDXLayout"}),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport IconBookmark from 'terra-icon/lib/icon/IconBookmark';\nimport Badge from 'terra-badge';\n\nconst Icon = <IconBookmark />;\n\nconst BadgeIcon = () => (\n  <div>\n    <Badge icon={Icon} text=\"icon\" />\n    {' '}\n    <Badge icon={Icon} text=\"icon\" isReversed />\n    {' '}\n    <Badge icon={Icon} />\n  </div>\n);\n\nexport default BadgeIcon;\n\n")))}j.isMDXComponent=!0;var w=function(e){var t=e.title,n=e.description,r=e.isExpanded;return a.createElement(p.Z,{title:t||"Badge Icon",description:n,example:a.createElement(h.Z,null),exampleSrc:a.createElement(j,null),isExpanded:r})},B=n(11200),C=["components"];function P(){return P=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},P.apply(this,arguments)}function S(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var R={};function D(e){var t=e.components,n=S(e,C);return(0,r.mdx)("wrapper",P({},R,n,{components:t,mdxType:"MDXLayout"}),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-jsx"},'import React from \'react\';\nimport Badge from \'terra-badge\';\n\nconst BadgeVisuallyHiddenText = () => (\n  <div>\n    <Badge text="Low" visuallyHiddenText="Risk Factor Low" />\n    {\' \'}\n    <Badge text="Medium" visuallyHiddenText="Risk Factor Medium" />\n    {\' \'}\n    <Badge text="High" visuallyHiddenText="Risk Factor High" />\n    {\' \'}\n    <Badge text="Critical" visuallyHiddenText="Risk Factor Critical" />\n  </div>\n);\n\nexport default BadgeVisuallyHiddenText;\n\n')))}D.isMDXComponent=!0;var k=function(e){var t=e.title,n=e.description,r=e.isExpanded;return a.createElement(p.Z,{title:t||"Badge Visually Hidden Text",description:n,example:a.createElement(B.Z,null),exampleSrc:a.createElement(D,null),isExpanded:r})},I=n(78530),M=["components"];function H(){return H=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},H.apply(this,arguments)}function z(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var Z={},L="wrapper";function W(e){var t=e.components,n=z(e,M);return(0,r.mdx)(L,H({},Z,n,{components:t,mdxType:"MDXLayout"}),(0,r.mdx)(I.ZP,{mdxType:"PropsTable"},(0,r.mdx)(I.X2,{key:"ROW1",mdxType:"Row"},(0,r.mdx)(I.O,{mdxType:"PropNameCell"},"children"),(0,r.mdx)(I.Di,{mdxType:"TypeCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"node\n"))),(0,r.mdx)(I.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,r.mdx)(I.mW,{mdxType:"DefaultValueCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"null\n"))),(0,r.mdx)(I.Ex,{mdxType:"DescriptionCell"},(0,r.mdx)("p",null,"Child Nodes."))),(0,r.mdx)(I.X2,{key:"ROW2",mdxType:"Row"},(0,r.mdx)(I.O,{mdxType:"PropNameCell"},"icon"),(0,r.mdx)(I.Di,{mdxType:"TypeCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"element\n"))),(0,r.mdx)(I.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,r.mdx)(I.mW,{mdxType:"DefaultValueCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"null\n"))),(0,r.mdx)(I.Ex,{mdxType:"DescriptionCell"},(0,r.mdx)("p",null,"An optional icon. Nested inline with the text when provided."))),(0,r.mdx)(I.X2,{key:"ROW3",mdxType:"Row"},(0,r.mdx)(I.O,{mdxType:"PropNameCell"},"intent"),(0,r.mdx)(I.Di,{mdxType:"TypeCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"enum: [\n  'default'\n  'primary'\n  'secondary'\n  'info'\n  'warning'\n  'positive'\n  'negative'\n],\n"))),(0,r.mdx)(I.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,r.mdx)(I.mW,{mdxType:"DefaultValueCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"'default'\n"))),(0,r.mdx)(I.Ex,{mdxType:"DescriptionCell"},(0,r.mdx)("p",null,"Sets the badge color scheme. One of ",(0,r.mdx)("inlineCode",{parentName:"p"},"default"),", ",(0,r.mdx)("inlineCode",{parentName:"p"},"primary"),", ",(0,r.mdx)("inlineCode",{parentName:"p"},"secondary"),", ",(0,r.mdx)("inlineCode",{parentName:"p"},"positive"),", ",(0,r.mdx)("inlineCode",{parentName:"p"},"negative"),", ",(0,r.mdx)("inlineCode",{parentName:"p"},"warning"),", ",(0,r.mdx)("inlineCode",{parentName:"p"},"info"),"."))),(0,r.mdx)(I.X2,{key:"ROW4",mdxType:"Row"},(0,r.mdx)(I.O,{mdxType:"PropNameCell"},"isReversed"),(0,r.mdx)(I.Di,{mdxType:"TypeCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"bool\n"))),(0,r.mdx)(I.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,r.mdx)(I.mW,{mdxType:"DefaultValueCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"false\n"))),(0,r.mdx)(I.Ex,{mdxType:"DescriptionCell"},(0,r.mdx)("p",null,"Reverses the position of the icon and text."))),(0,r.mdx)(I.X2,{key:"ROW5",mdxType:"Row"},(0,r.mdx)(I.O,{mdxType:"PropNameCell"},"size"),(0,r.mdx)(I.Di,{mdxType:"TypeCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"enum: [\n  'tiny'\n  'small'\n  'medium'\n  'large'\n  'huge'\n],\n"))),(0,r.mdx)(I.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,r.mdx)(I.mW,{mdxType:"DefaultValueCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"'small'\n"))),(0,r.mdx)(I.Ex,{mdxType:"DescriptionCell"},(0,r.mdx)("p",null,"Sets the badge size. One of ",(0,r.mdx)("inlineCode",{parentName:"p"},"tiny"),", ",(0,r.mdx)("inlineCode",{parentName:"p"},"small"),", ",(0,r.mdx)("inlineCode",{parentName:"p"},"medium"),", ",(0,r.mdx)("inlineCode",{parentName:"p"},"large"),", ",(0,r.mdx)("inlineCode",{parentName:"p"},"huge"),"."))),(0,r.mdx)(I.X2,{key:"ROW6",mdxType:"Row"},(0,r.mdx)(I.O,{mdxType:"PropNameCell"},"text"),(0,r.mdx)(I.Di,{mdxType:"TypeCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"string\n"))),(0,r.mdx)(I.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,r.mdx)(I.mW,{mdxType:"DefaultValueCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"null\n"))),(0,r.mdx)(I.Ex,{mdxType:"DescriptionCell"},(0,r.mdx)("p",null,"Sets the badge text."))),(0,r.mdx)(I.X2,{key:"ROW7",mdxType:"Row"},(0,r.mdx)(I.O,{mdxType:"PropNameCell"},"visuallyHiddenText"),(0,r.mdx)(I.Di,{mdxType:"TypeCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"string\n"))),(0,r.mdx)(I.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,r.mdx)(I.mW,{mdxType:"DefaultValueCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"undefined\n"))),(0,r.mdx)(I.Ex,{mdxType:"DescriptionCell"},(0,r.mdx)("p",null,"Text that describes the badge to a screen reader. Use this\nfor creating an accessible badge.")))))}W.isMDXComponent=!0;var X=["components"];function q(){return q=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},q.apply(this,arguments)}function V(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var A={},F="wrapper";function G(e){var t=e.components,n=V(e,X);return(0,r.mdx)(F,q({},A,n,{components:t,mdxType:"MDXLayout"}),(0,r.mdx)(l.C,{mdxType:"Badge"}),(0,r.mdx)("h1",{id:"terra-badge"},"Terra Badge"),(0,r.mdx)("p",null,"The badge component displays content classification."),(0,r.mdx)("h2",{id:"getting-started"},"Getting Started"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},"Install with ",(0,r.mdx)("a",{parentName:"li",href:"https://www.npmjs.com/"},"npmjs"),":",(0,r.mdx)("ul",{parentName:"li"},(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("inlineCode",{parentName:"li"},"npm install terra-badge"))))),(0,r.mdx)("h2",{id:"peer-dependencies"},"Peer Dependencies"),(0,r.mdx)("p",null,"This component requires the following peer dependencies be installed in your app for the component to properly function."),(0,r.mdx)("table",null,(0,r.mdx)("thead",{parentName:"table"},(0,r.mdx)("tr",{parentName:"thead"},(0,r.mdx)("th",{parentName:"tr",align:null},"Peer Dependency"),(0,r.mdx)("th",{parentName:"tr",align:null},"Version"))),(0,r.mdx)("tbody",{parentName:"table"},(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"react"),(0,r.mdx)("td",{parentName:"tr",align:null},"^16.8.5")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"react-dom"),(0,r.mdx)("td",{parentName:"tr",align:null},"^16.8.5")))),(0,r.mdx)("h2",{id:"usage"},"Usage"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-jsx"},"import Badge from 'terra-badge';\n")),(0,r.mdx)("h2",{id:"component-features"},"Component Features"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("a",{parentName:"li",href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#cross-browser-support"},"Cross-Browser Support")),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("a",{parentName:"li",href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#responsive-support"},"Responsive Support")),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("a",{parentName:"li",href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#mobile-support"},"Mobile Support"))),(0,r.mdx)("h2",{id:"examples"},"Examples"),(0,r.mdx)(s,{title:"Intent",mdxType:"BadgeIntent"}),(0,r.mdx)(b,{title:"Size",mdxType:"BadgeSize"}),(0,r.mdx)(w,{title:"Icon",mdxType:"BadgeIcon"}),(0,r.mdx)(k,{title:"VisuallyHiddenText",mdxType:"BadgeVisuallyHiddenText"}),(0,r.mdx)("h2",{id:"badge-props"},"Badge props"),(0,r.mdx)(W,{mdxType:"BadgePropsTable"}))}G.isMDXComponent=!0},5334:function(e,t,n){n.d(t,{C:function(){return l}});var a=n(67294),r=n(22863),l=function(e){var t=e.url;return a.createElement(r.Z,{src:"https://github.com/cerner/terra-core/tree/main/packages/terra-badge",name:"terra-badge",version:"3.57.0",url:t})}},17422:function(e,t,n){n.r(t),t.default={badge:"Badges-module__badge___vex-+","badge-container":"Badges-module__badge-container___B13Mv","badge-name":"Badges-module__badge-name___jkN0m","badge-version":"Badges-module__badge-version___agZ+P"}},53560:function(e,t,n){n.r(t),t.default={"clinical-lowlight-theme":"ExampleTemplate-module__clinical-lowlight-theme___rBbtD","orion-fusion-theme":"ExampleTemplate-module__orion-fusion-theme___GzA23",template:"ExampleTemplate-module__template___a4uPk",header:"ExampleTemplate-module__header___iFXV3",content:"ExampleTemplate-module__content___48m4Q",description:"ExampleTemplate-module__description___NwBJo",footer:"ExampleTemplate-module__footer___GpSoG","button-container":"ExampleTemplate-module__button-container___rAD11",css:"ExampleTemplate-module__css___+jtk1",code:"ExampleTemplate-module__code___7rC6C","css-toggle":"ExampleTemplate-module__css-toggle___chHK7","code-toggle":"ExampleTemplate-module__code-toggle___TGlE-","is-selected":"ExampleTemplate-module__is-selected___0BYwS",item:"ExampleTemplate-module__item___8FTQq",chevron:"ExampleTemplate-module__chevron___VbY7N",title:"ExampleTemplate-module__title___r+nbJ","dynamic-content":"ExampleTemplate-module__dynamic-content___k+1H7"}},63883:function(e,t,n){n.r(t),t.default={"clinical-lowlight-theme":"Badge-module__clinical-lowlight-theme___HEkHY","orion-fusion-theme":"Badge-module__orion-fusion-theme___It+wD",badge:"Badge-module__badge___0EI-A","is-reversed":"Badge-module__is-reversed___zWMua","has-icon":"Badge-module__has-icon___4tJ38",text:"Badge-module__text___gS-Ds",tiny:"Badge-module__tiny___PPn+0",small:"Badge-module__small___xdZks",medium:"Badge-module__medium___2QARy",large:"Badge-module__large___GPH+8",huge:"Badge-module__huge___A2YNe",default:"Badge-module__default___rLw0q",primary:"Badge-module__primary___-BJJ2",secondary:"Badge-module__secondary___mmmnn",positive:"Badge-module__positive___5p3-Z",negative:"Badge-module__negative___nxyZy",warning:"Badge-module__warning___Rlb6P",info:"Badge-module__info___Co9c7"}},80083:function(e,t,n){function a(e){return a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.BadgeSize=t.BadgeIntent=void 0;var r=p(n(67294)),l=p(n(45697)),d=p(n(94184)),i=p(n(47166)),o=p(n(50026)),m=p(n(29270)),u=p(n(63883)),c=["size","intent","isReversed","text","icon","visuallyHiddenText"];function p(e){return e&&e.__esModule?e:{default:e}}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function f(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){x(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function x(e,t,n){return(t=function(e){var t=function(e,t){if("object"!==a(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!==a(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===a(t)?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function g(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var y=i.default.bind(u.default);t.BadgeIntent={DEFAULT:"default",PRIMARY:"primary",SECONDARY:"secondary",INFO:"info",WARNING:"warning",POSITIVE:"positive",NEGATIVE:"negative"};t.BadgeSize={TINY:"tiny",SMALL:"small",MEDIUM:"medium",LARGE:"large",HUGE:"huge"};var v={children:l.default.node,icon:l.default.element,intent:l.default.oneOf(["default","primary","secondary","info","warning","positive","negative"]),isReversed:l.default.bool,size:l.default.oneOf(["tiny","small","medium","large","huge"]),text:l.default.string,visuallyHiddenText:l.default.string},_={children:null,icon:null,intent:"default",isReversed:!1,size:"small",text:null,visuallyHiddenText:void 0},b=function(e){var t=e.size,n=e.intent,a=e.isReversed,l=e.text,i=e.icon,p=e.visuallyHiddenText,s=g(e,c),x=r.default.useContext(o.default),v=(0,d.default)(y("badge",{"has-icon":i},{"is-reversed":a},t,n,x.className),s.className),_=l?r.default.createElement("span",{className:u.default.text,"aria-hidden":"true"},l):null,b=p?r.default.createElement(m.default,{text:p}):null,h=a?[b,_,i,s.children]:[i,b,_,s.children];return r.default.createElement.apply(r.default,["span",f(f({},s),{},{className:v})].concat(h))};b.propTypes=v,b.defaultProps=_;var h=b;t.default=h},78878:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=l(n(67294)),r=l(n(99139));function l(e){return e&&e.__esModule?e:{default:e}}function d(){return d=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},d.apply(this,arguments)}var i=function(e){var t=d({},e);return a.default.createElement(r.default,t,a.default.createElement("path",{d:"M24 34l14 14V0H10v48z"}))};i.displayName="IconBookmark",i.defaultProps={viewBox:"0 0 48 48",xmlns:"http://www.w3.org/2000/svg","data-name":"Layer 1"};var o=i;t.default=o},33864:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=l(n(67294)),r=l(n(99139));function l(e){return e&&e.__esModule?e:{default:e}}function d(){return d=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},d.apply(this,arguments)}var i=function(e){var t=d({},e);return a.default.createElement(r.default,t,a.default.createElement("path",{d:"M10.3 24L33.8 0l3.9 3.8L18 24l19.7 20.2-3.9 3.8z"}))};i.displayName="IconChevronLeft",i.defaultProps={className:"",viewBox:"0 0 48 48",xmlns:"http://www.w3.org/2000/svg","data-name":"Layer 1",isBidi:!0};var o=i;t.default=o}}]);