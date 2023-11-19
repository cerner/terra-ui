"use strict";(self.webpackChunkterra_ui=self.webpackChunkterra_ui||[]).push([[2993,45627,37344,33667,96890,79482,85565,3353,5161,80858,14041,45865,16835,85355,3193,4845,27444,17657,46647,16873,85161,66097,38681,15318,40411,18101,33315,38443,11264,78996,39915,33442,68090],{11858:function(e,t,n){t.Z=void 0;var a=o(n(67294)),r=n(51051),l=o(n(21784));function o(e){return e&&e.__esModule?e:{default:e}}var i={title:"Patient Responsibilities",isAnimated:!0},d=function(e){e.keyCode===r.KEY_SPACE&&e.preventDefault()};t.Z=function(){return a.default.createElement(l.default,{exampleProps:i},a.default.createElement("p",null,"Respect the rights and treat all healthcare workers and other patients and visitors with dignity. Comply with all hospital policies and guidelines as informed or displayed be available for any appointments made or notify the hospital as early as possible if you are unable to do so. Acknowledge that some other patient medical condition may be more urgent than yours and accept that your doctor may need to attend them first. Kindly cooperate in such situations."),a.default.createElement("p",null,"Provide us with comprehensive and accurate details about your past medical records and be complaint as regard to taking medication or following any other prescribed treatment. Accept, where applicable, adaptations to the environment to ensure a safe and secure stay in hospital with a full explanation from our staff."),a.default.createElement("p",null,"Strictly follow the ",a.default.createElement("a",{href:"#visitors-policy",onKeyDown:d},"Hospitals Visitors Policy")," ","and ccept the measures taken by the hospital to ensure personal privacy and confidentiality of medical records."))}},86109:function(e,t,n){t.Z=void 0;var a=l(n(67294)),r=l(n(21784));function l(e){return e&&e.__esModule?e:{default:e}}var o={title:"Default Example"};t.Z=function(){return a.default.createElement(r.default,{exampleProps:o},a.default.createElement("p",null,"Before leaving Arthur Andersen & Co. to form their own company, three young friends and co-workers sat around a picnic table at Loose Creek Park in Kansas City, Missouri brainstorming business ideas. It was here that Neal Patterson, Paul Gorup and Cliff Illig conceived PGI & Associates, the company that would eventually become Cerner."))}},21784:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=o(n(67294)),r=o(n(45697)),l=o(n(13626));function o(e){return e&&e.__esModule?e:{default:e}}var i={exampleProps:r.default.object.isRequired,children:r.default.node.isRequired},d=function(e){var t=e.exampleProps,n=e.children;return a.default.createElement("div",null,a.default.createElement(l.default,t,n))};d.propTypes=i;t.default=d},86817:function(e,t,n){t.Z=void 0;var a=l(n(67294)),r=l(n(21784));function l(e){return e&&e.__esModule?e:{default:e}}var o={title:"Transparent Example",isTransparent:!0};t.Z=function(){return a.default.createElement(r.default,{exampleProps:o},a.default.createElement("p",null,"Before leaving Arthur Andersen & Co. to form their own company, three young friends and co-workers sat around a picnic table at Loose Creek Park in Kansas City, Missouri brainstorming business ideas. It was here that Neal Patterson, Paul Gorup and Cliff Illig conceived PGI & Associates, the company that would eventually become Cerner."))}},22863:function(e,t,n){var a=n(64836);t.Z=void 0;var r=a(n(67294)),l=a(n(45697)),o=a(n(47166)),i=a(n(17422)),d=o.default.bind(i.default),s={name:l.default.string.isRequired,src:l.default.string,url:l.default.string,version:l.default.string.isRequired},p=function(e){var t=e.src,n=e.name,a=e.url,l=e.version,o=r.default.createElement("a",{className:d("badge"),href:a||"https://www.npmjs.org/package/".concat(n,"/v/").concat(l)},r.default.createElement("span",{className:d("badge-name")},a?"package":"npm"),r.default.createElement("span",{className:d("badge-version")},"v".concat(l))),i=t?r.default.createElement("a",{className:d("badge"),href:t},r.default.createElement("span",{className:d("badge-name")},"github"),r.default.createElement("span",{className:d("badge-version")},"source")):void 0;return r.default.createElement("div",{className:d("badge-container")},o,i)};p.propTypes=s;var c=p;t.Z=c},49271:function(e,t,n){var a=n(64836),r=n(18698);t.Z=void 0;var l=a(n(27424)),o=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==r(e)&&"function"!=typeof e)return{default:e};var n=f(t);if(n&&n.has(e))return n.get(e);var a={},l=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var i=l?Object.getOwnPropertyDescriptor(e,o):null;i&&(i.get||i.set)?Object.defineProperty(a,o,i):a[o]=e[o]}a.default=e,n&&n.set(e,a);return a}(n(67294)),i=a(n(45697)),d=a(n(47166)),s=n(21538),p=a(n(33864)),c=a(n(23399)),u=n(51051),m=a(n(53560));function f(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(f=function(e){return e?n:t})(e)}var x=d.default.bind(m.default),y={example:i.default.element,exampleSrc:i.default.element,exampleCssSrc:i.default.element,title:i.default.string,description:i.default.node,isExpanded:i.default.bool},g=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","true")},h=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","false")},b=function(e){var t=e.example,n=e.exampleSrc,a=e.exampleCssSrc,r=e.title,i=e.description,d=e.isExpanded,m=(0,o.useState)(d),f=(0,l.default)(m,2),y=f[0],b=f[1],v=(0,o.useState)(!1),O=(0,l.default)(v,2),T=O[0],_=O[1],w=o.default.useContext(s.ThemeContext),E=void 0!==a,C=function(){_(!T),y&&b(!y)},P=function(){b(!y),T&&_(!T)},j=function(e,t){e.nativeEvent.keyCode!==u.KEY_SPACE&&e.nativeEvent.keyCode!==u.KEY_RETURN||(e.preventDefault(),t())};return o.default.createElement("div",{className:x("template",w.className)},o.default.createElement("div",{className:x("header")},r&&o.default.createElement("h2",{className:x("title")},r)),o.default.createElement("div",{className:x("content")},i&&o.default.createElement("div",{className:x("description")},i),t),o.default.createElement("div",{className:x("footer")},n?o.default.createElement("div",{className:x("button-container")},E&&o.default.createElement("button",{type:"button",className:x("css-toggle","item",{"is-selected":T}),onClick:C,onKeyDown:function(e){return j(e,C)},onBlur:g,onMouseDown:h,tabIndex:0,"data-focus-styles-enabled":!0},o.default.createElement(p.default,{className:x("chevron")}),o.default.createElement("span",null,"CSS"),o.default.createElement(c.default,{className:x("chevron")})),o.default.createElement("button",{type:"button",className:x("code-toggle","item",{"is-selected":y}),onClick:P,onKeyDown:function(e){return j(e,P)},onBlur:g,onMouseDown:h,tabIndex:0,"data-focus-styles-enabled":!0},o.default.createElement(p.default,{className:x("chevron")}),o.default.createElement("span",null,"Code"),o.default.createElement(c.default,{className:x("chevron")}))):null,o.default.createElement("div",null,T&&o.default.createElement("div",{className:x("css")},a),y&&o.default.createElement("div",{className:x("code")},n))))};b.propTypes=y,b.defaultProps={isExpanded:!1};var v=b;t.Z=v},25131:function(e,t,n){n.r(t),n.d(t,{default:function(){return X}});var a=n(67294),r=n(81254),l=n(58353),o=n(86109),i=["components"];function d(){return d=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},d.apply(this,arguments)}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p={};function c(e){var t=e.components,n=s(e,i);return(0,r.mdx)("wrapper",d({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport ToggleSectionHeaderExampleTemplate from './ToggleSectionHeaderExampleTemplate';\n\nconst componentProps = {\n  title: 'Default Example',\n};\n\nconst DefaultToggleSectionHeader = () => (\n  <ToggleSectionHeaderExampleTemplate exampleProps={componentProps}>\n    <p>Before leaving Arthur Andersen & Co. to form their own company, three young friends and co-workers sat around a picnic table at Loose Creek Park in Kansas City, Missouri brainstorming business ideas. It was here that Neal Patterson, Paul Gorup and Cliff Illig conceived PGI & Associates, the company that would eventually become Cerner.</p>\n  </ToggleSectionHeaderExampleTemplate>\n);\n\nexport default DefaultToggleSectionHeader;\n\n")))}c.isMDXComponent=!0;var u=n(49271),m=function(e){var t=e.title,n=e.description,r=e.isExpanded;return a.createElement(u.Z,{title:t||"Default Toggle Section Header",description:n,example:a.createElement(o.Z,null),exampleSrc:a.createElement(c,null),isExpanded:r})},f=n(11858),x=["components"];function y(){return y=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},y.apply(this,arguments)}function g(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var h={};function b(e){var t=e.components,n=g(e,x);return(0,r.mdx)("wrapper",y({},h,n,{components:t,mdxType:"MDXLayout"}),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\n// eslint-disable-next-line import/no-extraneous-dependencies\nimport {\n  KEY_SPACE,\n} from 'keycode-js';\nimport ToggleSectionHeaderExampleTemplate from './ToggleSectionHeaderExampleTemplate';\n\nconst componentProps = {\n  title: 'Patient Responsibilities',\n  isAnimated: true,\n};\n\n// Prevent scrolling when press space bar key on anchor tag\nconst handlePreventScroll = (event) => {\n  if (event.keyCode === KEY_SPACE) {\n    event.preventDefault();\n  }\n};\n\nconst AnimatedToggleSectionHeader = () => (\n  <ToggleSectionHeaderExampleTemplate exampleProps={componentProps}>\n    <p>Respect the rights and treat all healthcare workers and other patients and visitors with dignity. Comply with all hospital policies and guidelines as informed or displayed be available for any appointments made or notify the hospital as early as possible if you are unable to do so. Acknowledge that some other patient medical condition may be more urgent than yours and accept that your doctor may need to attend them first. Kindly cooperate in such situations.</p>\n    <p>Provide us with comprehensive and accurate details about your past medical records and be complaint as regard to taking medication or following any other prescribed treatment. Accept, where applicable, adaptations to the environment to ensure a safe and secure stay in hospital with a full explanation from our staff.</p>\n    <p>\n      Strictly follow the&nbsp;\n      <a href=\"#visitors-policy\" onKeyDown={handlePreventScroll}>Hospitals Visitors Policy</a>\n      {' '}\n      and ccept the measures taken by the hospital to ensure personal privacy and confidentiality of medical records.\n    </p>\n  </ToggleSectionHeaderExampleTemplate>\n);\n\nexport default AnimatedToggleSectionHeader;\n\n")))}b.isMDXComponent=!0;var v=function(e){var t=e.title,n=e.description,r=e.isExpanded;return a.createElement(u.Z,{title:t||"Animated Toggle Section Header",description:n,example:a.createElement(f.Z,null),exampleSrc:a.createElement(b,null),isExpanded:r})},O=n(86817),T=["components"];function _(){return _=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},_.apply(this,arguments)}function w(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var E={};function C(e){var t=e.components,n=w(e,T);return(0,r.mdx)("wrapper",_({},E,n,{components:t,mdxType:"MDXLayout"}),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport ToggleSectionHeaderExampleTemplate from './ToggleSectionHeaderExampleTemplate';\n\nconst componentProps = {\n  title: 'Transparent Example',\n  isTransparent: true,\n};\n\nconst DefaultToggleSectionHeader = () => (\n  <ToggleSectionHeaderExampleTemplate exampleProps={componentProps}>\n    <p>Before leaving Arthur Andersen & Co. to form their own company, three young friends and co-workers sat around a picnic table at Loose Creek Park in Kansas City, Missouri brainstorming business ideas. It was here that Neal Patterson, Paul Gorup and Cliff Illig conceived PGI & Associates, the company that would eventually become Cerner.</p>\n  </ToggleSectionHeaderExampleTemplate>\n);\n\nexport default DefaultToggleSectionHeader;\n\n")))}C.isMDXComponent=!0;var P=function(e){var t=e.title,n=e.description,r=e.isExpanded;return a.createElement(u.Z,{title:t||"Transparent Toggle Section Header",description:n,example:a.createElement(O.Z,null),exampleSrc:a.createElement(C,null),isExpanded:r})},j=n(78530),N=["components"];function S(){return S=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},S.apply(this,arguments)}function k(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var D={},R="wrapper";function A(e){var t=e.components,n=k(e,N);return(0,r.mdx)(R,S({},D,n,{components:t,mdxType:"MDXLayout"}),(0,r.mdx)(j.ZP,{mdxType:"PropsTable"},(0,r.mdx)(j.X2,{key:"ROW1",mdxType:"Row"},(0,r.mdx)(j.O,{mdxType:"PropNameCell"},"children"),(0,r.mdx)(j.Di,{mdxType:"TypeCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"node\n"))),(0,r.mdx)(j.dS,{isRequired:!0,mdxType:"RequiredCell"}),(0,r.mdx)(j.mW,{mdxType:"DefaultValueCell"},(0,r.mdx)("p",null,"none")),(0,r.mdx)(j.Ex,{mdxType:"DescriptionCell"},(0,r.mdx)("p",null,"Content in the body of the toggle section header component that will be expanded or hidden."))),(0,r.mdx)(j.X2,{key:"ROW2",mdxType:"Row"},(0,r.mdx)(j.O,{mdxType:"PropNameCell"},"title"),(0,r.mdx)(j.Di,{mdxType:"TypeCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"string\n"))),(0,r.mdx)(j.dS,{isRequired:!0,mdxType:"RequiredCell"}),(0,r.mdx)(j.mW,{mdxType:"DefaultValueCell"},(0,r.mdx)("p",null,"none")),(0,r.mdx)(j.Ex,{mdxType:"DescriptionCell"},(0,r.mdx)("p",null,"Text to be displayed in the section header."))),(0,r.mdx)(j.X2,{key:"ROW3",mdxType:"Row"},(0,r.mdx)(j.O,{mdxType:"PropNameCell"},"level"),(0,r.mdx)(j.Di,{mdxType:"TypeCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"enum: [\n  1\n  2\n  3\n  4\n  5\n  6\n],\n"))),(0,r.mdx)(j.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,r.mdx)(j.mW,{mdxType:"DefaultValueCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"2\n"))),(0,r.mdx)(j.Ex,{mdxType:"DescriptionCell"},(0,r.mdx)("p",null,"Sets the heading level. One of h1, h2, h3, h4, h5, or h6."))),(0,r.mdx)(j.X2,{key:"ROW4",mdxType:"Row"},(0,r.mdx)(j.O,{mdxType:"PropNameCell"},"onClose"),(0,r.mdx)(j.Di,{mdxType:"TypeCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"func\n"))),(0,r.mdx)(j.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,r.mdx)(j.mW,{mdxType:"DefaultValueCell"},(0,r.mdx)("p",null,"none")),(0,r.mdx)(j.Ex,{mdxType:"DescriptionCell"},(0,r.mdx)("p",null,"Callback function triggered when toggle-section-header is closed."))),(0,r.mdx)(j.X2,{key:"ROW5",mdxType:"Row"},(0,r.mdx)(j.O,{mdxType:"PropNameCell"},"onOpen"),(0,r.mdx)(j.Di,{mdxType:"TypeCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"func\n"))),(0,r.mdx)(j.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,r.mdx)(j.mW,{mdxType:"DefaultValueCell"},(0,r.mdx)("p",null,"none")),(0,r.mdx)(j.Ex,{mdxType:"DescriptionCell"},(0,r.mdx)("p",null,"Callback function triggered when toggle-section-header is opened."))),(0,r.mdx)(j.X2,{key:"ROW6",mdxType:"Row"},(0,r.mdx)(j.O,{mdxType:"PropNameCell"},"sectionHeaderAttrs"),(0,r.mdx)(j.Di,{mdxType:"TypeCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"object\n"))),(0,r.mdx)(j.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,r.mdx)(j.mW,{mdxType:"DefaultValueCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"{}\n"))),(0,r.mdx)(j.Ex,{mdxType:"DescriptionCell"},(0,r.mdx)("p",null,"Used to set props and HTML attributes on the underlying section-header."))),(0,r.mdx)(j.X2,{key:"ROW7",mdxType:"Row"},(0,r.mdx)(j.O,{mdxType:"PropNameCell"},"isAnimated"),(0,r.mdx)(j.Di,{mdxType:"TypeCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"bool\n"))),(0,r.mdx)(j.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,r.mdx)(j.mW,{mdxType:"DefaultValueCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"false\n"))),(0,r.mdx)(j.Ex,{mdxType:"DescriptionCell"},(0,r.mdx)("p",null,"Sets the toggle-section-header to be animated when it is opened or closed."))),(0,r.mdx)(j.X2,{key:"ROW8",mdxType:"Row"},(0,r.mdx)(j.O,{mdxType:"PropNameCell"},"isInitiallyOpen"),(0,r.mdx)(j.Di,{mdxType:"TypeCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"bool\n"))),(0,r.mdx)(j.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,r.mdx)(j.mW,{mdxType:"DefaultValueCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"false\n"))),(0,r.mdx)(j.Ex,{mdxType:"DescriptionCell"},(0,r.mdx)("p",null,"Sets the toggle-section-header initial state to open."))),(0,r.mdx)(j.X2,{key:"ROW9",mdxType:"Row"},(0,r.mdx)(j.O,{mdxType:"PropNameCell"},"isTransparent"),(0,r.mdx)(j.Di,{mdxType:"TypeCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"bool\n"))),(0,r.mdx)(j.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,r.mdx)(j.mW,{mdxType:"DefaultValueCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"false\n"))),(0,r.mdx)(j.Ex,{mdxType:"DescriptionCell"},(0,r.mdx)("p",null,"Sets the background of the section header to transparent."))),(0,r.mdx)(j.X2,{key:"ROW10",mdxType:"Row"},(0,r.mdx)(j.O,{mdxType:"PropNameCell"},"isOpen"),(0,r.mdx)(j.Di,{mdxType:"TypeCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"bool\n"))),(0,r.mdx)(j.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,r.mdx)(j.mW,{mdxType:"DefaultValueCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"undefined\n"))),(0,r.mdx)(j.Ex,{mdxType:"DescriptionCell"},(0,r.mdx)("p",null,"Programmatically toggle the toggle-section-header component.")))))}A.isMDXComponent=!0;var H=["components"];function M(){return M=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},M.apply(this,arguments)}function q(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var I={},W="wrapper";function X(e){var t=e.components,n=q(e,H);return(0,r.mdx)(W,M({},I,n,{components:t,mdxType:"MDXLayout"}),(0,r.mdx)(l.C,{mdxType:"Badge"}),(0,r.mdx)("h1",{id:"terra-toggle-section-header"},"Terra Toggle Section Header"),(0,r.mdx)("p",null,"Toggle section header component that transitions content in and out with a click. "),(0,r.mdx)("h2",{id:"getting-started"},"Getting Started"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},"Install with ",(0,r.mdx)("a",{parentName:"li",href:"https://www.npmjs.com/"},"npmjs"),":",(0,r.mdx)("ul",{parentName:"li"},(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("inlineCode",{parentName:"li"},"npm install terra-toggle-section-header"))))),(0,r.mdx)("h2",{id:"peer-dependencies"},"Peer Dependencies"),(0,r.mdx)("p",null,"This component requires the following peer dependencies be installed in your app for the component to properly function."),(0,r.mdx)("table",null,(0,r.mdx)("thead",{parentName:"table"},(0,r.mdx)("tr",{parentName:"thead"},(0,r.mdx)("th",{parentName:"tr",align:null},"Peer Dependency"),(0,r.mdx)("th",{parentName:"tr",align:null},"Version"))),(0,r.mdx)("tbody",{parentName:"table"},(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"react"),(0,r.mdx)("td",{parentName:"tr",align:null},"^16.8.5")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"react-dom"),(0,r.mdx)("td",{parentName:"tr",align:null},"^16.8.5")))),(0,r.mdx)("h2",{id:"usage"},"Usage"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-jsx"},"import ToggleSectionHeader from 'terra-toggle-section-header';\n")),(0,r.mdx)("h2",{id:"accessibility"},"Accessibility"),(0,r.mdx)("p",null,"For accessibility best practices, it is recommended that consumers should always use only one h1 tag per page or view. The one h1 tag should be the page title. A section header should never be a heading level 1. "),(0,r.mdx)("h2",{id:"component-features"},"Component Features"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("a",{parentName:"li",href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#cross-browser-support"},"Cross-Browser Support")),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("a",{parentName:"li",href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#ltr--rtl"},"LTR/RTL Support"))),(0,r.mdx)("h2",{id:"examples"},"Examples"),(0,r.mdx)(m,{title:"Default",mdxType:"DefaultToggleSectionHeader"}),(0,r.mdx)(v,{title:"Animated",mdxType:"AnimatedToggleSectionHeader"}),(0,r.mdx)(P,{title:"Transparent",mdxType:"TransparentToggleSectionHeader"}),(0,r.mdx)("h2",{id:"toggle-section-header-props"},"Toggle Section Header Props"),(0,r.mdx)(A,{mdxType:"ToggleSectionHeaderPropsTable"}))}X.isMDXComponent=!0},58353:function(e,t,n){n.d(t,{C:function(){return l}});var a=n(67294),r=n(22863),l=function(e){var t=e.url;return a.createElement(r.Z,{src:"https://github.com/cerner/terra-core/tree/main/packages/terra-toggle-section-header",name:"terra-toggle-section-header",version:"2.72.0",url:t})}},17422:function(e,t,n){n.r(t),t.default={badge:"Badges-module__badge___vex-+","badge-container":"Badges-module__badge-container___B13Mv","badge-name":"Badges-module__badge-name___jkN0m","badge-version":"Badges-module__badge-version___agZ+P"}},53560:function(e,t,n){n.r(t),t.default={"clinical-lowlight-theme":"ExampleTemplate-module__clinical-lowlight-theme___rBbtD","orion-fusion-theme":"ExampleTemplate-module__orion-fusion-theme___GzA23",template:"ExampleTemplate-module__template___a4uPk",header:"ExampleTemplate-module__header___iFXV3",content:"ExampleTemplate-module__content___48m4Q",description:"ExampleTemplate-module__description___NwBJo",footer:"ExampleTemplate-module__footer___GpSoG","button-container":"ExampleTemplate-module__button-container___rAD11",css:"ExampleTemplate-module__css___+jtk1",code:"ExampleTemplate-module__code___7rC6C","css-toggle":"ExampleTemplate-module__css-toggle___chHK7","code-toggle":"ExampleTemplate-module__code-toggle___TGlE-","is-selected":"ExampleTemplate-module__is-selected___0BYwS",item:"ExampleTemplate-module__item___8FTQq",chevron:"ExampleTemplate-module__chevron___VbY7N",title:"ExampleTemplate-module__title___r+nbJ","dynamic-content":"ExampleTemplate-module__dynamic-content___k+1H7"}},33864:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=l(n(67294)),r=l(n(99139));function l(e){return e&&e.__esModule?e:{default:e}}function o(){return o=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},o.apply(this,arguments)}var i=function(e){var t=o({},e);return a.default.createElement(r.default,t,a.default.createElement("path",{d:"M10.3 24 33.8 0l3.9 3.8L18 24l19.7 20.2-3.9 3.8z"}))};i.displayName="IconChevronLeft",i.defaultProps={viewBox:"0 0 48 48","data-name":"Layer 1",xmlns:"http://www.w3.org/2000/svg"};t.default=i},13626:function(e,t,n){function a(e){return a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=s(n(67294)),l=s(n(45697)),o=s(n(16772)),i=s(n(30659)),d=["children","title","level","sectionHeaderAttrs","isAnimated","isInitiallyOpen","isTransparent","isOpen","onOpen","onClose"];function s(e){return e&&e.__esModule?e:{default:e}}function p(){return p=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},p.apply(this,arguments)}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function u(e,t,n){return(t=x(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function m(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}function f(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,x(a.key),a)}}function x(e){var t=function(e,t){if("object"!==a(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!==a(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===a(t)?t:String(t)}function y(e,t){return y=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},y(e,t)}function g(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=b(e);if(t){var l=b(this).constructor;n=Reflect.construct(r,arguments,l)}else n=r.apply(this,arguments);return function(e,t){if(t&&("object"===a(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return h(e)}(this,n)}}function h(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function b(e){return b=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},b(e)}var v={children:l.default.node.isRequired,title:l.default.string.isRequired,level:l.default.oneOf([1,2,3,4,5,6]),onClose:l.default.func,onOpen:l.default.func,sectionHeaderAttrs:l.default.object,isAnimated:l.default.bool,isInitiallyOpen:l.default.bool,isTransparent:l.default.bool,isOpen:l.default.bool},O={level:2,sectionHeaderAttrs:{},isAnimated:!1,isInitiallyOpen:!1,isTransparent:!1,isOpen:void 0},T=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&y(e,t)}(s,e);var t,n,a,l=g(s);function s(e){var t;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,s);var n=(t=l.call(this,e)).props.isInitiallyOpen,a=void 0!==n&&n;return t.state={isOpen:a},t.handleOnClick=t.handleOnClick.bind(h(t)),t.wrapOnClick=t.wrapOnClick.bind(h(t)),t}return t=s,n=[{key:"handleOnClick",value:function(e){e.preventDefault();var t=this.props,n=t.onOpen,a=t.onClose;void 0===t.isOpen&&(n&&!this.state.isOpen?n():a&&this.state.isOpen&&a(),this.setState((function(e){return{isOpen:!e.isOpen}})))}},{key:"wrapOnClick",value:function(e){var t=this;return function(n){t.handleOnClick(n),e&&e(n)}}},{key:"render",value:function(){var e=this.props,t=e.children,n=e.title,a=e.level,l=e.sectionHeaderAttrs,s=e.isAnimated,f=(e.isInitiallyOpen,e.isTransparent),x=(e.isOpen,e.onOpen,e.onClose,m(e,d)),y=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){u(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},l);return y.onClick=this.wrapOnClick(l.onClick),r.default.createElement("div",x,r.default.createElement(o.default,p({},y,{"aria-expanded":this.state.isOpen,isOpen:this.state.isOpen,level:a,text:n,isTransparent:f})),r.default.createElement(i.default,{isAnimated:s,isOpen:this.state.isOpen},t))}}],a=[{key:"getDerivedStateFromProps",value:function(e,t){return void 0!==e.isOpen&&t.isOpen!==e.isOpen?{isOpen:e.isOpen}:{isOpen:t.isOpen}}}],n&&f(t.prototype,n),a&&f(t,a),Object.defineProperty(t,"prototype",{writable:!1}),s}(r.default.Component);T.propTypes=v,T.defaultProps=O;t.default=T}}]);