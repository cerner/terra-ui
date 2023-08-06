"use strict";(self.webpackChunkterra_ui=self.webpackChunkterra_ui||[]).push([[50352,45627,37344,33667,96890,85565,3353,80858,14041,5161,45865,85355,3193,27444,4845,17657,33315,46647,85161,38681,20444,15318,40411,18101,38443,78996,39915,33442],{11858:function(e,t,n){t.Z=void 0;var r=l(n(67294)),a=l(n(21784));function l(e){return e&&e.__esModule?e:{default:e}}var o={title:"Patient Responsibilities",isAnimated:!0},i=function(){return r.default.createElement(a.default,{exampleProps:o},r.default.createElement("p",null,"Respect the rights and treat all healthcare workers and other patients and visitors with dignity. Comply with all hospital policies and guidelines as informed or displayed be available for any appointments made or notify the hospital as early as possible if you are unable to do so. Acknowledge that some other patient medical condition may be more urgent than yours and accept that your doctor may need to attend them first. Kindly cooperate in such situations."),r.default.createElement("p",null,"Provide us with comprehensive and accurate details about your past medical records and be complaint as regard to taking medication or following any other prescribed treatment. Accept, where applicable, adaptations to the environment to ensure a safe and secure stay in hospital with a full explanation from our staff."),r.default.createElement("p",null,"Strictly follow the",r.default.createElement("a",{href:"#visitors-policy"},"Hospitals Visitors Policy")," ","and ccept the measures taken by the hospital to ensure personal privacy and confidentiality of medical records."))};t.Z=i},86109:function(e,t,n){t.Z=void 0;var r=l(n(67294)),a=l(n(21784));function l(e){return e&&e.__esModule?e:{default:e}}var o={title:"Default Example"},i=function(){return r.default.createElement(a.default,{exampleProps:o},r.default.createElement("p",null,"Before leaving Arthur Andersen & Co. to form their own company, three young friends and co-workers sat around a picnic table at Loose Creek Park in Kansas City, Missouri brainstorming business ideas. It was here that Neal Patterson, Paul Gorup and Cliff Illig conceived PGI & Associates, the company that would eventually become Cerner."))};t.Z=i},21784:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=o(n(67294)),a=o(n(45697)),l=o(n(13626));function o(e){return e&&e.__esModule?e:{default:e}}var i={exampleProps:a.default.object.isRequired,children:a.default.node.isRequired},d=function(e){var t=e.exampleProps,n=e.children;return r.default.createElement("div",null,r.default.createElement(l.default,t,n))};d.propTypes=i;var p=d;t.default=p},86817:function(e,t,n){t.Z=void 0;var r=l(n(67294)),a=l(n(21784));function l(e){return e&&e.__esModule?e:{default:e}}var o={title:"Transparent Example",isTransparent:!0},i=function(){return r.default.createElement(a.default,{exampleProps:o},r.default.createElement("p",null,"Before leaving Arthur Andersen & Co. to form their own company, three young friends and co-workers sat around a picnic table at Loose Creek Park in Kansas City, Missouri brainstorming business ideas. It was here that Neal Patterson, Paul Gorup and Cliff Illig conceived PGI & Associates, the company that would eventually become Cerner."))};t.Z=i},49271:function(e,t,n){var r=n(64836),a=n(18698);t.Z=void 0;var l=r(n(27424)),o=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==a(e)&&"function"!=typeof e)return{default:e};var n=f(t);if(n&&n.has(e))return n.get(e);var r={},l=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var i=l?Object.getOwnPropertyDescriptor(e,o):null;i&&(i.get||i.set)?Object.defineProperty(r,o,i):r[o]=e[o]}r.default=e,n&&n.set(e,r);return r}(n(67294)),i=r(n(45697)),d=r(n(47166)),p=n(21538),s=r(n(33864)),c=r(n(23399)),u=n(51051),m=r(n(53560));function f(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(f=function(e){return e?n:t})(e)}var x=d.default.bind(m.default),y={example:i.default.element,exampleSrc:i.default.element,exampleCssSrc:i.default.element,title:i.default.string,description:i.default.node,isExpanded:i.default.bool},g=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","true")},h=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","false")},b=function(e){var t=e.example,n=e.exampleSrc,r=e.exampleCssSrc,a=e.title,i=e.description,d=e.isExpanded,m=(0,o.useState)(d),f=(0,l.default)(m,2),y=f[0],b=f[1],v=(0,o.useState)(!1),O=(0,l.default)(v,2),T=O[0],w=O[1],C=o.default.useContext(p.ThemeContext),E=void 0!==r,_=function(){w(!T),y&&b(!y)},P=function(){b(!y),T&&w(!T)},j=function(e,t){e.nativeEvent.keyCode!==u.KEY_SPACE&&e.nativeEvent.keyCode!==u.KEY_RETURN||(e.preventDefault(),t())};return o.default.createElement("div",{className:x("template",C.className)},o.default.createElement("div",{className:x("header")},a&&o.default.createElement("h2",{className:x("title")},a)),o.default.createElement("div",{className:x("content")},i&&o.default.createElement("div",{className:x("description")},i),t),o.default.createElement("div",{className:x("footer")},n?o.default.createElement("div",{className:x("button-container")},E&&o.default.createElement("button",{type:"button",className:x("css-toggle","item",{"is-selected":T}),onClick:_,onKeyDown:function(e){return j(e,_)},onBlur:g,onMouseDown:h,tabIndex:0,"data-focus-styles-enabled":!0},o.default.createElement(s.default,{className:x("chevron")}),o.default.createElement("span",null,"CSS"),o.default.createElement(c.default,{className:x("chevron")})),o.default.createElement("button",{type:"button",className:x("code-toggle","item",{"is-selected":y}),onClick:P,onKeyDown:function(e){return j(e,P)},onBlur:g,onMouseDown:h,tabIndex:0,"data-focus-styles-enabled":!0},o.default.createElement(s.default,{className:x("chevron")}),o.default.createElement("span",null,"Code"),o.default.createElement(c.default,{className:x("chevron")}))):null,o.default.createElement("div",null,T&&o.default.createElement("div",{className:x("css")},r),y&&o.default.createElement("div",{className:x("code")},n))))};b.propTypes=y,b.defaultProps={isExpanded:!1};var v=b;t.Z=v},11596:function(e,t,n){n.r(t),n.d(t,{default:function(){return X}});var r=n(67294),a=n(81254),l=n(58353),o=n(86109),i=["components"];function d(){return d=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},d.apply(this,arguments)}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s={};function c(e){var t=e.components,n=p(e,i);return(0,a.mdx)("wrapper",d({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport ToggleSectionHeaderExampleTemplate from './ToggleSectionHeaderExampleTemplate';\n\nconst componentProps = {\n  title: 'Default Example',\n};\n\nconst DefaultToggleSectionHeader = () => (\n  <ToggleSectionHeaderExampleTemplate exampleProps={componentProps}>\n    <p>Before leaving Arthur Andersen & Co. to form their own company, three young friends and co-workers sat around a picnic table at Loose Creek Park in Kansas City, Missouri brainstorming business ideas. It was here that Neal Patterson, Paul Gorup and Cliff Illig conceived PGI & Associates, the company that would eventually become Cerner.</p>\n  </ToggleSectionHeaderExampleTemplate>\n);\n\nexport default DefaultToggleSectionHeader;\n\n")))}c.isMDXComponent=!0;var u=n(49271),m=function(e){var t=e.title,n=e.description,a=e.isExpanded;return r.createElement(u.Z,{title:t||"Default Toggle Section Header",description:n,example:r.createElement(o.Z,null),exampleSrc:r.createElement(c,null),isExpanded:a})},f=n(11858),x=["components"];function y(){return y=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},y.apply(this,arguments)}function g(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var h={};function b(e){var t=e.components,n=g(e,x);return(0,a.mdx)("wrapper",y({},h,n,{components:t,mdxType:"MDXLayout"}),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport ToggleSectionHeaderExampleTemplate from './ToggleSectionHeaderExampleTemplate';\n\nconst componentProps = {\n  title: 'Patient Responsibilities',\n  isAnimated: true,\n};\n\nconst AnimatedToggleSectionHeader = () => (\n  <ToggleSectionHeaderExampleTemplate exampleProps={componentProps}>\n    <p>Respect the rights and treat all healthcare workers and other patients and visitors with dignity. Comply with all hospital policies and guidelines as informed or displayed be available for any appointments made or notify the hospital as early as possible if you are unable to do so. Acknowledge that some other patient medical condition may be more urgent than yours and accept that your doctor may need to attend them first. Kindly cooperate in such situations.</p>\n    <p>Provide us with comprehensive and accurate details about your past medical records and be complaint as regard to taking medication or following any other prescribed treatment. Accept, where applicable, adaptations to the environment to ensure a safe and secure stay in hospital with a full explanation from our staff.</p>\n    <p>\n      Strictly follow the\n      <a href=\"#visitors-policy\">Hospitals Visitors Policy</a>\n      {' '}\n      and ccept the measures taken by the hospital to ensure personal privacy and confidentiality of medical records.\n    </p>\n  </ToggleSectionHeaderExampleTemplate>\n);\n\nexport default AnimatedToggleSectionHeader;\n\n")))}b.isMDXComponent=!0;var v=function(e){var t=e.title,n=e.description,a=e.isExpanded;return r.createElement(u.Z,{title:t||"Animated Toggle Section Header",description:n,example:r.createElement(f.Z,null),exampleSrc:r.createElement(b,null),isExpanded:a})},O=n(86817),T=["components"];function w(){return w=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},w.apply(this,arguments)}function C(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var E={};function _(e){var t=e.components,n=C(e,T);return(0,a.mdx)("wrapper",w({},E,n,{components:t,mdxType:"MDXLayout"}),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport ToggleSectionHeaderExampleTemplate from './ToggleSectionHeaderExampleTemplate';\n\nconst componentProps = {\n  title: 'Transparent Example',\n  isTransparent: true,\n};\n\nconst DefaultToggleSectionHeader = () => (\n  <ToggleSectionHeaderExampleTemplate exampleProps={componentProps}>\n    <p>Before leaving Arthur Andersen & Co. to form their own company, three young friends and co-workers sat around a picnic table at Loose Creek Park in Kansas City, Missouri brainstorming business ideas. It was here that Neal Patterson, Paul Gorup and Cliff Illig conceived PGI & Associates, the company that would eventually become Cerner.</p>\n  </ToggleSectionHeaderExampleTemplate>\n);\n\nexport default DefaultToggleSectionHeader;\n\n")))}_.isMDXComponent=!0;var P=function(e){var t=e.title,n=e.description,a=e.isExpanded;return r.createElement(u.Z,{title:t||"Transparent Toggle Section Header",description:n,example:r.createElement(O.Z,null),exampleSrc:r.createElement(_,null),isExpanded:a})},j=n(78530),N=["components"];function S(){return S=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},S.apply(this,arguments)}function k(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var D={},R="wrapper";function A(e){var t=e.components,n=k(e,N);return(0,a.mdx)(R,S({},D,n,{components:t,mdxType:"MDXLayout"}),(0,a.mdx)(j.ZP,{mdxType:"PropsTable"},(0,a.mdx)(j.X2,{key:"ROW1",mdxType:"Row"},(0,a.mdx)(j.O,{mdxType:"PropNameCell"},"children"),(0,a.mdx)(j.Di,{mdxType:"TypeCell"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"node\n"))),(0,a.mdx)(j.dS,{isRequired:!0,mdxType:"RequiredCell"}),(0,a.mdx)(j.mW,{mdxType:"DefaultValueCell"},(0,a.mdx)("p",null,"none")),(0,a.mdx)(j.Ex,{mdxType:"DescriptionCell"},(0,a.mdx)("p",null,"Content in the body of the toggle section header component that will be expanded or hidden."))),(0,a.mdx)(j.X2,{key:"ROW2",mdxType:"Row"},(0,a.mdx)(j.O,{mdxType:"PropNameCell"},"title"),(0,a.mdx)(j.Di,{mdxType:"TypeCell"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"string\n"))),(0,a.mdx)(j.dS,{isRequired:!0,mdxType:"RequiredCell"}),(0,a.mdx)(j.mW,{mdxType:"DefaultValueCell"},(0,a.mdx)("p",null,"none")),(0,a.mdx)(j.Ex,{mdxType:"DescriptionCell"},(0,a.mdx)("p",null,"Text to be displayed in the section header."))),(0,a.mdx)(j.X2,{key:"ROW3",mdxType:"Row"},(0,a.mdx)(j.O,{mdxType:"PropNameCell"},"level"),(0,a.mdx)(j.Di,{mdxType:"TypeCell"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"enum: [\n  1\n  2\n  3\n  4\n  5\n  6\n],\n"))),(0,a.mdx)(j.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,a.mdx)(j.mW,{mdxType:"DefaultValueCell"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"2\n"))),(0,a.mdx)(j.Ex,{mdxType:"DescriptionCell"},(0,a.mdx)("p",null,"Sets the heading level. One of h1, h2, h3, h4, h5, or h6."))),(0,a.mdx)(j.X2,{key:"ROW4",mdxType:"Row"},(0,a.mdx)(j.O,{mdxType:"PropNameCell"},"onClose"),(0,a.mdx)(j.Di,{mdxType:"TypeCell"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"func\n"))),(0,a.mdx)(j.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,a.mdx)(j.mW,{mdxType:"DefaultValueCell"},(0,a.mdx)("p",null,"none")),(0,a.mdx)(j.Ex,{mdxType:"DescriptionCell"},(0,a.mdx)("p",null,"Callback function triggered when toggle-section-header is closed."))),(0,a.mdx)(j.X2,{key:"ROW5",mdxType:"Row"},(0,a.mdx)(j.O,{mdxType:"PropNameCell"},"onOpen"),(0,a.mdx)(j.Di,{mdxType:"TypeCell"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"func\n"))),(0,a.mdx)(j.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,a.mdx)(j.mW,{mdxType:"DefaultValueCell"},(0,a.mdx)("p",null,"none")),(0,a.mdx)(j.Ex,{mdxType:"DescriptionCell"},(0,a.mdx)("p",null,"Callback function triggered when toggle-section-header is opened."))),(0,a.mdx)(j.X2,{key:"ROW6",mdxType:"Row"},(0,a.mdx)(j.O,{mdxType:"PropNameCell"},"sectionHeaderAttrs"),(0,a.mdx)(j.Di,{mdxType:"TypeCell"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"object\n"))),(0,a.mdx)(j.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,a.mdx)(j.mW,{mdxType:"DefaultValueCell"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"{}\n"))),(0,a.mdx)(j.Ex,{mdxType:"DescriptionCell"},(0,a.mdx)("p",null,"Used to set props and HTML attributes on the underlying section-header."))),(0,a.mdx)(j.X2,{key:"ROW7",mdxType:"Row"},(0,a.mdx)(j.O,{mdxType:"PropNameCell"},"isAnimated"),(0,a.mdx)(j.Di,{mdxType:"TypeCell"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"bool\n"))),(0,a.mdx)(j.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,a.mdx)(j.mW,{mdxType:"DefaultValueCell"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"false\n"))),(0,a.mdx)(j.Ex,{mdxType:"DescriptionCell"},(0,a.mdx)("p",null,"Sets the toggle-section-header to be animated when it is opened or closed."))),(0,a.mdx)(j.X2,{key:"ROW8",mdxType:"Row"},(0,a.mdx)(j.O,{mdxType:"PropNameCell"},"isInitiallyOpen"),(0,a.mdx)(j.Di,{mdxType:"TypeCell"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"bool\n"))),(0,a.mdx)(j.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,a.mdx)(j.mW,{mdxType:"DefaultValueCell"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"false\n"))),(0,a.mdx)(j.Ex,{mdxType:"DescriptionCell"},(0,a.mdx)("p",null,"Sets the toggle-section-header initial state to open."))),(0,a.mdx)(j.X2,{key:"ROW9",mdxType:"Row"},(0,a.mdx)(j.O,{mdxType:"PropNameCell"},"isTransparent"),(0,a.mdx)(j.Di,{mdxType:"TypeCell"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"bool\n"))),(0,a.mdx)(j.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,a.mdx)(j.mW,{mdxType:"DefaultValueCell"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"false\n"))),(0,a.mdx)(j.Ex,{mdxType:"DescriptionCell"},(0,a.mdx)("p",null,"Sets the background of the section header to transparent."))),(0,a.mdx)(j.X2,{key:"ROW10",mdxType:"Row"},(0,a.mdx)(j.O,{mdxType:"PropNameCell"},"isOpen"),(0,a.mdx)(j.Di,{mdxType:"TypeCell"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"bool\n"))),(0,a.mdx)(j.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,a.mdx)(j.mW,{mdxType:"DefaultValueCell"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"undefined\n"))),(0,a.mdx)(j.Ex,{mdxType:"DescriptionCell"},(0,a.mdx)("p",null,"Programmatically toggle the toggle-section-header component.")))))}A.isMDXComponent=!0;var H=["components"];function M(){return M=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},M.apply(this,arguments)}function I(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var q={},W="wrapper";function X(e){var t=e.components,n=I(e,H);return(0,a.mdx)(W,M({},q,n,{components:t,mdxType:"MDXLayout"}),(0,a.mdx)(l.C,{mdxType:"Badge"}),(0,a.mdx)("h1",{id:"terra-toggle-section-header"},"Terra Toggle Section Header"),(0,a.mdx)("p",null,"Toggle section header component that transitions content in and out with a click. "),(0,a.mdx)("h2",{id:"getting-started"},"Getting Started"),(0,a.mdx)("ul",null,(0,a.mdx)("li",{parentName:"ul"},"Install with ",(0,a.mdx)("a",{parentName:"li",href:"https://www.npmjs.com/"},"npmjs"),":",(0,a.mdx)("ul",{parentName:"li"},(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("inlineCode",{parentName:"li"},"npm install terra-toggle-section-header"))))),(0,a.mdx)("h2",{id:"peer-dependencies"},"Peer Dependencies"),(0,a.mdx)("p",null,"This component requires the following peer dependencies be installed in your app for the component to properly function."),(0,a.mdx)("table",null,(0,a.mdx)("thead",{parentName:"table"},(0,a.mdx)("tr",{parentName:"thead"},(0,a.mdx)("th",{parentName:"tr",align:null},"Peer Dependency"),(0,a.mdx)("th",{parentName:"tr",align:null},"Version"))),(0,a.mdx)("tbody",{parentName:"table"},(0,a.mdx)("tr",{parentName:"tbody"},(0,a.mdx)("td",{parentName:"tr",align:null},"react"),(0,a.mdx)("td",{parentName:"tr",align:null},"^16.8.5")),(0,a.mdx)("tr",{parentName:"tbody"},(0,a.mdx)("td",{parentName:"tr",align:null},"react-dom"),(0,a.mdx)("td",{parentName:"tr",align:null},"^16.8.5")))),(0,a.mdx)("h2",{id:"usage"},"Usage"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-jsx"},"import ToggleSectionHeader from 'terra-toggle-section-header';\n")),(0,a.mdx)("h2",{id:"accessibility"},"Accessibility"),(0,a.mdx)("p",null,"For accessibility best practices, it is recommended that consumers should always use only one h1 tag per page or view. The one h1 tag should be the page title. A section header should never be a heading level 1. "),(0,a.mdx)("h2",{id:"component-features"},"Component Features"),(0,a.mdx)("ul",null,(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("a",{parentName:"li",href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#cross-browser-support"},"Cross-Browser Support")),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("a",{parentName:"li",href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#ltr--rtl"},"LTR/RTL Support"))),(0,a.mdx)("h2",{id:"examples"},"Examples"),(0,a.mdx)(m,{title:"Default",mdxType:"DefaultToggleSectionHeader"}),(0,a.mdx)(v,{title:"Animated",mdxType:"AnimatedToggleSectionHeader"}),(0,a.mdx)(P,{title:"Transparent",mdxType:"TransparentToggleSectionHeader"}),(0,a.mdx)("h2",{id:"toggle-section-header-props"},"Toggle Section Header Props"),(0,a.mdx)(A,{mdxType:"ToggleSectionHeaderPropsTable"}))}X.isMDXComponent=!0},58353:function(e,t,n){n.d(t,{C:function(){return l}});var r=n(67294),a=n(22863),l=function(e){var t=e.url;return r.createElement(a.Z,{src:"https://github.com/cerner/terra-core/tree/main/packages/terra-toggle-section-header",name:"terra-toggle-section-header",version:"2.66.0",url:t})}},53560:function(e,t,n){n.r(t),t.default={"orion-fusion-theme":"ExampleTemplate-module__orion-fusion-theme___GzA23",template:"ExampleTemplate-module__template___a4uPk",header:"ExampleTemplate-module__header___iFXV3",content:"ExampleTemplate-module__content___48m4Q",description:"ExampleTemplate-module__description___NwBJo",footer:"ExampleTemplate-module__footer___GpSoG","button-container":"ExampleTemplate-module__button-container___rAD11",css:"ExampleTemplate-module__css___+jtk1",code:"ExampleTemplate-module__code___7rC6C","css-toggle":"ExampleTemplate-module__css-toggle___chHK7","code-toggle":"ExampleTemplate-module__code-toggle___TGlE-","is-selected":"ExampleTemplate-module__is-selected___0BYwS",item:"ExampleTemplate-module__item___8FTQq",chevron:"ExampleTemplate-module__chevron___VbY7N",title:"ExampleTemplate-module__title___r+nbJ","dynamic-content":"ExampleTemplate-module__dynamic-content___k+1H7"}},33864:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=l(n(67294)),a=l(n(99139));function l(e){return e&&e.__esModule?e:{default:e}}function o(){return o=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o.apply(this,arguments)}var i=function(e){var t=o({},e);return r.default.createElement(a.default,t,r.default.createElement("path",{d:"M10.3 24L33.8 0l3.9 3.8L18 24l19.7 20.2-3.9 3.8z"}))};i.displayName="IconChevronLeft",i.defaultProps={className:"",viewBox:"0 0 48 48",xmlns:"http://www.w3.org/2000/svg","data-name":"Layer 1",isBidi:!0};var d=i;t.default=d},13626:function(e,t,n){function r(e){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=p(n(67294)),l=p(n(45697)),o=p(n(16772)),i=p(n(30659)),d=["children","title","level","sectionHeaderAttrs","isAnimated","isInitiallyOpen","isTransparent","isOpen","onOpen","onClose"];function p(e){return e&&e.__esModule?e:{default:e}}function s(){return s=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},s.apply(this,arguments)}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e,t,n){return(t=x(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function m(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}function f(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,x(r.key),r)}}function x(e){var t=function(e,t){if("object"!==r(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var a=n.call(e,t||"default");if("object"!==r(a))return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===r(t)?t:String(t)}function y(e,t){return y=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},y(e,t)}function g(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,a=b(e);if(t){var l=b(this).constructor;n=Reflect.construct(a,arguments,l)}else n=a.apply(this,arguments);return function(e,t){if(t&&("object"===r(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return h(e)}(this,n)}}function h(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function b(e){return b=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},b(e)}var v={children:l.default.node.isRequired,title:l.default.string.isRequired,level:l.default.oneOf([1,2,3,4,5,6]),onClose:l.default.func,onOpen:l.default.func,sectionHeaderAttrs:l.default.object,isAnimated:l.default.bool,isInitiallyOpen:l.default.bool,isTransparent:l.default.bool,isOpen:l.default.bool},O={level:2,sectionHeaderAttrs:{},isAnimated:!1,isInitiallyOpen:!1,isTransparent:!1,isOpen:void 0},T=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&y(e,t)}(p,e);var t,n,r,l=g(p);function p(e){var t;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,p);var n=(t=l.call(this,e)).props.isInitiallyOpen,r=void 0!==n&&n;return t.state={isOpen:r},t.handleOnClick=t.handleOnClick.bind(h(t)),t.wrapOnClick=t.wrapOnClick.bind(h(t)),t}return t=p,n=[{key:"handleOnClick",value:function(e){e.preventDefault();var t=this.props,n=t.onOpen,r=t.onClose;void 0===t.isOpen&&(n&&!this.state.isOpen?n():r&&this.state.isOpen&&r(),this.setState((function(e){return{isOpen:!e.isOpen}})))}},{key:"wrapOnClick",value:function(e){var t=this;return function(n){t.handleOnClick(n),e&&e(n)}}},{key:"render",value:function(){var e=this.props,t=e.children,n=e.title,r=e.level,l=e.sectionHeaderAttrs,p=e.isAnimated,f=(e.isInitiallyOpen,e.isTransparent),x=(e.isOpen,e.onOpen,e.onClose,m(e,d)),y=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){u(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},l);return y.onClick=this.wrapOnClick(l.onClick),a.default.createElement("div",x,a.default.createElement(o.default,s({},y,{"aria-expanded":this.state.isOpen,isOpen:this.state.isOpen,level:r,text:n,isTransparent:f})),a.default.createElement(i.default,{isAnimated:p,isOpen:this.state.isOpen},t))}}],r=[{key:"getDerivedStateFromProps",value:function(e,t){return void 0!==e.isOpen&&t.isOpen!==e.isOpen?{isOpen:e.isOpen}:{isOpen:t.isOpen}}}],n&&f(t.prototype,n),r&&f(t,r),Object.defineProperty(t,"prototype",{writable:!1}),p}(a.default.Component);T.propTypes=v,T.defaultProps=O;var w=T;t.default=w}}]);