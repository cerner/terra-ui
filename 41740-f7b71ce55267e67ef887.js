"use strict";(self.webpackChunkterra_ui=self.webpackChunkterra_ui||[]).push([[41740],{44240:function(e,t,n){t.c=void 0;var r=l(n(11504)),a=l(n(99208));function l(e){return e&&e.__esModule?e:{default:e}}t.c=function(){return r.default.createElement(a.default,{href:"https://www.cerner.com",variant:"audio",text:"Audio hyperlink"})}},96204:function(e,t,n){t.c=void 0;var r=l(n(11504)),a=l(n(99208));function l(e){return e&&e.__esModule?e:{default:e}}t.c=function(){return r.default.createElement(a.default,{href:"https://www.cerner.com",text:"Default hyperlink"})}},75264:function(e,t,n){t.c=void 0;var r=l(n(11504)),a=l(n(99208));function l(e){return e&&e.__esModule?e:{default:e}}t.c=function(){return r.default.createElement(a.default,{onClick:function(){},text:"Default hyperlink button"})}},15484:function(e,t,n){t.c=void 0;var r=l(n(11504)),a=l(n(99208));function l(e){return e&&e.__esModule?e:{default:e}}t.c=function(){return r.default.createElement(a.default,{href:"https://www.cerner.com",variant:"document",text:"Document hyperlink"})}},54408:function(e,t,n){t.c=void 0;var r=l(n(11504)),a=l(n(99208));function l(e){return e&&e.__esModule?e:{default:e}}t.c=function(){return r.default.createElement(a.default,{href:"https://www.cerner.com",variant:"external",text:"External hyperlink"})}},72544:function(e,t,n){t.c=void 0;var r=l(n(11504)),a=l(n(99208));function l(e){return e&&e.__esModule?e:{default:e}}t.c=function(){return r.default.createElement(a.default,{href:"https://www.cerner.com",variant:"image",text:"Image hyperlink"})}},59088:function(e,t,n){t.c=void 0;var r=l(n(11504)),a=l(n(99208));function l(e){return e&&e.__esModule?e:{default:e}}t.c=function(){return r.default.createElement(a.default,{href:"https://www.cerner.com",variant:"video",text:"Video hyperlink"})}},11416:function(e,t,n){var r=n(22411);t.c=void 0;var a=r(n(11504)),l=r(n(3268)),o=r(n(74824)),d=r(n(58112)),i=o.default.bind(d.default),u={name:l.default.string.isRequired,src:l.default.string,url:l.default.string,version:l.default.string.isRequired},p=function(e){var t=e.src,n=e.name,r=e.url,l=e.version,o=a.default.createElement("a",{className:i("badge"),href:r||"https://www.npmjs.org/package/".concat(n,"/v/").concat(l)},a.default.createElement("span",{className:i("badge-name")},r?"package":"npm"),a.default.createElement("span",{className:i("badge-version")},"v".concat(l))),d=t?a.default.createElement("a",{className:i("badge"),href:t},a.default.createElement("span",{className:i("badge-name")},"github"),a.default.createElement("span",{className:i("badge-version")},"source")):void 0;return a.default.createElement("div",{className:i("badge-container")},o,d)};p.propTypes=u;t.c=p},33792:function(e,t,n){var r=n(22411),a=n(59848);t.c=void 0;var l=r(n(97936)),o=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=a(e)&&"function"!=typeof e)return{default:e};var n=f(t);if(n&&n.has(e))return n.get(e);var r={__proto__:null},l=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var d=l?Object.getOwnPropertyDescriptor(e,o):null;d&&(d.get||d.set)?Object.defineProperty(r,o,d):r[o]=e[o]}return r.default=e,n&&n.set(e,r),r}(n(11504)),d=r(n(3268)),i=r(n(74824)),u=n(93048),p=r(n(72672)),c=r(n(3308)),m=n(97196),s=r(n(86896));function f(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(f=function(e){return e?n:t})(e)}var x=i.default.bind(s.default),y={example:d.default.element,exampleSrc:d.default.element,exampleCssSrc:d.default.element,title:d.default.string,description:d.default.node,isExpanded:d.default.bool},b=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","true")},v=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","false")},h=function(e){var t=e.example,n=e.exampleSrc,r=e.exampleCssSrc,a=e.title,d=e.description,i=e.isExpanded,s=(0,o.useState)(i),f=(0,l.default)(s,2),y=f[0],h=f[1],g=(0,o.useState)(!1),_=(0,l.default)(g,2),O=_[0],w=_[1],T=o.default.useContext(u.ThemeContext),j=void 0!==r,k=function(){w(!O),y&&h(!y)},C=function(){h(!y),O&&w(!O)},N=function(e,t){e.nativeEvent.keyCode!==m.KEY_SPACE&&e.nativeEvent.keyCode!==m.KEY_RETURN||(e.preventDefault(),t())};return o.default.createElement("div",{className:x("template",T.className)},o.default.createElement("div",{className:x("header")},a&&o.default.createElement("h2",{className:x("title")},a)),o.default.createElement("div",{className:x("content")},d&&o.default.createElement("div",{className:x("description")},d),t),o.default.createElement("div",{className:x("footer")},n?o.default.createElement("div",{className:x("button-container")},j&&o.default.createElement("button",{type:"button",className:x("css-toggle","item",{"is-selected":O}),onClick:k,onKeyDown:function(e){return N(e,k)},onBlur:b,onMouseDown:v,tabIndex:0,"data-focus-styles-enabled":!0},o.default.createElement(p.default,{className:x("chevron")}),o.default.createElement("span",null,"CSS"),o.default.createElement(c.default,{className:x("chevron")})),o.default.createElement("button",{type:"button",className:x("code-toggle","item",{"is-selected":y}),onClick:C,onKeyDown:function(e){return N(e,C)},onBlur:b,onMouseDown:v,tabIndex:0,"data-focus-styles-enabled":!0},o.default.createElement(p.default,{className:x("chevron")}),o.default.createElement("span",null,"Code"),o.default.createElement(c.default,{className:x("chevron")}))):null,o.default.createElement("div",null,O&&o.default.createElement("div",{className:x("css")},r),y&&o.default.createElement("div",{className:x("code")},n))))};h.propTypes=y,h.defaultProps={isExpanded:!1};t.c=h},28744:function(e,t,n){var r=n(22411),a=n(59848);t.Ke=t.qe=t.uC=t._w=void 0,Object.defineProperty(t,"WA",{enumerable:!0,get:function(){return u.Row}}),t.cp=t.aI=void 0;var l=m(n(11504)),o=r(n(3268)),d=r(n(74824)),i=n(93048),u=m(n(30603)),p=r(n(13948));function c(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(c=function(e){return e?n:t})(e)}function m(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=a(e)&&"function"!=typeof e)return{default:e};var n=c(t);if(n&&n.has(e))return n.get(e);var r={__proto__:null},l=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var d=l?Object.getOwnPropertyDescriptor(e,o):null;d&&(d.get||d.set)?Object.defineProperty(r,o,d):r[o]=e[o]}return r.default=e,n&&n.set(e,r),r}var s=d.default.bind(p.default),f={children:o.default.node},x={isRequired:o.default.bool};(t.qe=function(e){var t=e.children;return l.default.createElement(u.Cell,{className:s("bold")},t)}).propTypes=f,(t.aI=function(e){var t=e.children;return l.default.createElement(u.Cell,{className:s("code-block-override")},t)}).propTypes=f,(t.Ke=function(e){var t=e.isRequired;return l.default.createElement(u.Cell,{className:s([t?["required"]:[]])},t?"required":"optional")}).propTypes=x,(t._w=function(e){var t=e.children;return l.default.createElement(u.Cell,{className:s("code-block-override")},t)}).propTypes=f,(t.uC=function(e){var t=e.children;return l.default.createElement(u.Cell,null,t)}).propTypes=f;var y=function(e){var t=e.children,n=(0,l.useContext)(i.ThemeContext);return l.default.createElement(u.default,{paddingStyle:"compact",className:s("table",n.className)},l.default.createElement(u.Header,{className:s("header")},l.default.createElement(u.HeaderCell,null,"Prop"),l.default.createElement(u.HeaderCell,null,"Type"),l.default.createElement(u.HeaderCell,null,"Required"),l.default.createElement(u.HeaderCell,null,"Default"),l.default.createElement(u.HeaderCell,null,"Description")),l.default.createElement(u.Body,null,t))};y.propTypes=f;t.cp=y},19360:function(e,t,n){n.r(t),n.d(t,{default:function(){return fe}});var r=n(11504),a=n(69788),l=n(704),o=n(96204),d=["components"];function i(){return i=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},i.apply(this,arguments)}function u(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p={};function c(e){var t=e.components,n=u(e,d);return(0,a.mdx)("wrapper",i({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport Hyperlink from 'terra-hyperlink';\n\nexport default () => <Hyperlink href=\"https://www.cerner.com\" text=\"Default hyperlink\" />;\n\n")))}c.isMDXComponent=!0;var m=n(33792),s=function(e){var t=e.title,n=e.description,a=e.isExpanded;return r.createElement(m.c,{title:t||"Default Hyperlink",description:n,example:r.createElement(o.c,null),exampleSrc:r.createElement(c,null),isExpanded:a})},f=n(75264),x=["components"];function y(){return y=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},y.apply(this,arguments)}function b(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var v={};function h(e){var t=e.components,n=b(e,x);return(0,a.mdx)("wrapper",y({},v,n,{components:t,mdxType:"MDXLayout"}),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport Hyperlink from 'terra-hyperlink';\n\nexport default () => <Hyperlink onClick={() => {}} text=\"Default hyperlink button\" />;\n\n")))}h.isMDXComponent=!0;var g=function(e){var t=e.title,n=e.description,a=e.isExpanded;return r.createElement(m.c,{title:t||"Default Hyperlink Button",description:n,example:r.createElement(f.c,null),exampleSrc:r.createElement(h,null),isExpanded:a})},_=n(44240),O=["components"];function w(){return w=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},w.apply(this,arguments)}function T(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var j={};function k(e){var t=e.components,n=T(e,O);return(0,a.mdx)("wrapper",w({},j,n,{components:t,mdxType:"MDXLayout"}),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-jsx"},'import React from \'react\';\nimport Hyperlink from \'terra-hyperlink\';\n\nexport default () => <Hyperlink href="https://www.cerner.com" variant="audio" text="Audio hyperlink" />;\n\n')))}k.isMDXComponent=!0;var C=function(e){var t=e.title,n=e.description,a=e.isExpanded;return r.createElement(m.c,{title:t||"Audio Hyperlink",description:n,example:r.createElement(_.c,null),exampleSrc:r.createElement(k,null),isExpanded:a})},N=n(15484),E=["components"];function P(){return P=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},P.apply(this,arguments)}function R(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var D={};function S(e){var t=e.components,n=R(e,E);return(0,a.mdx)("wrapper",P({},D,n,{components:t,mdxType:"MDXLayout"}),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-jsx"},'import React from \'react\';\nimport Hyperlink from \'terra-hyperlink\';\n\nexport default () => <Hyperlink href="https://www.cerner.com" variant="document" text="Document hyperlink" />;\n\n')))}S.isMDXComponent=!0;var M=function(e){var t=e.title,n=e.description,a=e.isExpanded;return r.createElement(m.c,{title:t||"Document Hyperlink",description:n,example:r.createElement(N.c,null),exampleSrc:r.createElement(S,null),isExpanded:a})},q=n(54408),H=["components"];function I(){return I=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},I.apply(this,arguments)}function A(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var W={};function B(e){var t=e.components,n=A(e,H);return(0,a.mdx)("wrapper",I({},W,n,{components:t,mdxType:"MDXLayout"}),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-jsx"},'import React from \'react\';\nimport Hyperlink from \'terra-hyperlink\';\n\nexport default () => <Hyperlink href="https://www.cerner.com" variant="external" text="External hyperlink" />;\n\n')))}B.isMDXComponent=!0;var K=function(e){var t=e.title,n=e.description,a=e.isExpanded;return r.createElement(m.c,{title:t||"External Hyperlink",description:n,example:r.createElement(q.c,null),exampleSrc:r.createElement(B,null),isExpanded:a})},V=n(72544),X=["components"];function L(){return L=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},L.apply(this,arguments)}function U(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var F={};function J(e){var t=e.components,n=U(e,X);return(0,a.mdx)("wrapper",L({},F,n,{components:t,mdxType:"MDXLayout"}),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-jsx"},'import React from \'react\';\nimport Hyperlink from \'terra-hyperlink\';\n\nexport default () => <Hyperlink href="https://www.cerner.com" variant="image" text="Image hyperlink" />;\n\n')))}J.isMDXComponent=!0;var Y=function(e){var t=e.title,n=e.description,a=e.isExpanded;return r.createElement(m.c,{title:t||"Image Hyperlink",description:n,example:r.createElement(V.c,null),exampleSrc:r.createElement(J,null),isExpanded:a})},z=n(59088),G=["components"];function Q(){return Q=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Q.apply(this,arguments)}function Z(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var $={};function ee(e){var t=e.components,n=Z(e,G);return(0,a.mdx)("wrapper",Q({},$,n,{components:t,mdxType:"MDXLayout"}),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-jsx"},'import React from \'react\';\nimport Hyperlink from \'terra-hyperlink\';\n\nexport default () => <Hyperlink href="https://www.cerner.com" variant="video" text="Video hyperlink" />;\n\n')))}ee.isMDXComponent=!0;var te=function(e){var t=e.title,n=e.description,a=e.isExpanded;return r.createElement(m.c,{title:t||"Video Hyperlink",description:n,example:r.createElement(z.c,null),exampleSrc:r.createElement(ee,null),isExpanded:a})},ne=n(28744),re=["components"];function ae(){return ae=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ae.apply(this,arguments)}function le(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var oe={},de="wrapper";function ie(e){var t=e.components,n=le(e,re);return(0,a.mdx)(de,ae({},oe,n,{components:t,mdxType:"MDXLayout"}),(0,a.mdx)(ne.cp,{mdxType:"PropsTable"},(0,a.mdx)(ne.WA,{key:"ROW1",mdxType:"Row"},(0,a.mdx)(ne.qe,{mdxType:"PropNameCell"},"children"),(0,a.mdx)(ne.aI,{mdxType:"TypeCell"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"node\n"))),(0,a.mdx)(ne.Ke,{isRequired:!1,mdxType:"RequiredCell"}),(0,a.mdx)(ne._w,{mdxType:"DefaultValueCell"},(0,a.mdx)("p",null,"none")),(0,a.mdx)(ne.uC,{mdxType:"DescriptionCell"},(0,a.mdx)("p",null,(0,a.mdx)("img",{parentName:"p",src:"https://badgen.net/badge/prop/deprecated/red",alt:"IMPORTANT"}),"\nThis prop is deperecated and will be removed on next MVB release.\nupdate all the references to use ",(0,a.mdx)("inlineCode",{parentName:"p"},"text")," prop to add the content to display inside link."))),(0,a.mdx)(ne.WA,{key:"ROW2",mdxType:"Row"},(0,a.mdx)(ne.qe,{mdxType:"PropNameCell"},"text"),(0,a.mdx)(ne.aI,{mdxType:"TypeCell"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"string\n"))),(0,a.mdx)(ne.Ke,{isRequired:!1,mdxType:"RequiredCell"}),(0,a.mdx)(ne._w,{mdxType:"DefaultValueCell"},(0,a.mdx)("p",null,"none")),(0,a.mdx)(ne.uC,{mdxType:"DescriptionCell"},(0,a.mdx)("p",null,"The content to display inside link."))),(0,a.mdx)(ne.WA,{key:"ROW3",mdxType:"Row"},(0,a.mdx)(ne.qe,{mdxType:"PropNameCell"},"title"),(0,a.mdx)(ne.aI,{mdxType:"TypeCell"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"string\n"))),(0,a.mdx)(ne.Ke,{isRequired:!1,mdxType:"RequiredCell"}),(0,a.mdx)(ne._w,{mdxType:"DefaultValueCell"},(0,a.mdx)("p",null,"none")),(0,a.mdx)(ne.uC,{mdxType:"DescriptionCell"},(0,a.mdx)("p",null,"Additional information to display as a native tooltip on hover."))),(0,a.mdx)(ne.WA,{key:"ROW4",mdxType:"Row"},(0,a.mdx)(ne.qe,{mdxType:"PropNameCell"},"href"),(0,a.mdx)(ne.aI,{mdxType:"TypeCell"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"string\n"))),(0,a.mdx)(ne.Ke,{isRequired:!1,mdxType:"RequiredCell"}),(0,a.mdx)(ne._w,{mdxType:"DefaultValueCell"},(0,a.mdx)("p",null,"none")),(0,a.mdx)(ne.uC,{mdxType:"DescriptionCell"},(0,a.mdx)("p",null,(0,a.mdx)("img",{parentName:"p",src:"https://badgen.net/badge/UX/Accessibility/blue",alt:"IMPORTANT"}),"\nSets the href of the link. href is required for hyperlinks and should be ignored when ",(0,a.mdx)("inlineCode",{parentName:"p"},"onClick")," callback is used."))),(0,a.mdx)(ne.WA,{key:"ROW5",mdxType:"Row"},(0,a.mdx)(ne.qe,{mdxType:"PropNameCell"},"isDisabled"),(0,a.mdx)(ne.aI,{mdxType:"TypeCell"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"bool\n"))),(0,a.mdx)(ne.Ke,{isRequired:!1,mdxType:"RequiredCell"}),(0,a.mdx)(ne._w,{mdxType:"DefaultValueCell"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"false\n"))),(0,a.mdx)(ne.uC,{mdxType:"DescriptionCell"},(0,a.mdx)("p",null,(0,a.mdx)("img",{parentName:"p",src:"https://badgen.net/badge/prop/deprecated/red",alt:"IMPORTANT"}),"\nThis prop is deperecated and will be removed on next MVB release.\nDo not use this prop as Accessibility best practices are to not use hyperlinks that are disabled."))),(0,a.mdx)(ne.WA,{key:"ROW6",mdxType:"Row"},(0,a.mdx)(ne.qe,{mdxType:"PropNameCell"},"isUnderlineHidden"),(0,a.mdx)(ne.aI,{mdxType:"TypeCell"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"bool\n"))),(0,a.mdx)(ne.Ke,{isRequired:!1,mdxType:"RequiredCell"}),(0,a.mdx)(ne._w,{mdxType:"DefaultValueCell"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"false\n"))),(0,a.mdx)(ne.uC,{mdxType:"DescriptionCell"},(0,a.mdx)("p",null,(0,a.mdx)("img",{parentName:"p",src:"https://badgen.net/badge/prop/deprecated/red",alt:"IMPORTANT"}),"\nThis prop is deperecated and will be removed on next MVB release.\nDo not use this prop as Accessibility best practices are to always have hyperlinks display with an underline."))),(0,a.mdx)(ne.WA,{key:"ROW7",mdxType:"Row"},(0,a.mdx)(ne.qe,{mdxType:"PropNameCell"},"onClick"),(0,a.mdx)(ne.aI,{mdxType:"TypeCell"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"func\n"))),(0,a.mdx)(ne.Ke,{isRequired:!1,mdxType:"RequiredCell"}),(0,a.mdx)(ne._w,{mdxType:"DefaultValueCell"},(0,a.mdx)("p",null,"none")),(0,a.mdx)(ne.uC,{mdxType:"DescriptionCell"},(0,a.mdx)("p",null,(0,a.mdx)("img",{parentName:"p",src:"https://badgen.net/badge/UX/Accessibility/blue",alt:"IMPORTANT"}),"\nCallback function triggered when clicked. onClick is required to render hyperlink as a button.\n",(0,a.mdx)("inlineCode",{parentName:"p"},"onClick")," should be ignored when ",(0,a.mdx)("inlineCode",{parentName:"p"},"href")," is provided."))),(0,a.mdx)(ne.WA,{key:"ROW8",mdxType:"Row"},(0,a.mdx)(ne.qe,{mdxType:"PropNameCell"},"onBlur"),(0,a.mdx)(ne.aI,{mdxType:"TypeCell"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"func\n"))),(0,a.mdx)(ne.Ke,{isRequired:!1,mdxType:"RequiredCell"}),(0,a.mdx)(ne._w,{mdxType:"DefaultValueCell"},(0,a.mdx)("p",null,"none")),(0,a.mdx)(ne.uC,{mdxType:"DescriptionCell"},(0,a.mdx)("p",null,"Callback function triggered when hyperlink loses focus."))),(0,a.mdx)(ne.WA,{key:"ROW9",mdxType:"Row"},(0,a.mdx)(ne.qe,{mdxType:"PropNameCell"},"onFocus"),(0,a.mdx)(ne.aI,{mdxType:"TypeCell"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"func\n"))),(0,a.mdx)(ne.Ke,{isRequired:!1,mdxType:"RequiredCell"}),(0,a.mdx)(ne._w,{mdxType:"DefaultValueCell"},(0,a.mdx)("p",null,"none")),(0,a.mdx)(ne.uC,{mdxType:"DescriptionCell"},(0,a.mdx)("p",null,"Callback function triggered when hyperlink gains focus."))),(0,a.mdx)(ne.WA,{key:"ROW10",mdxType:"Row"},(0,a.mdx)(ne.qe,{mdxType:"PropNameCell"},"onKeyDown"),(0,a.mdx)(ne.aI,{mdxType:"TypeCell"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"func\n"))),(0,a.mdx)(ne.Ke,{isRequired:!1,mdxType:"RequiredCell"}),(0,a.mdx)(ne._w,{mdxType:"DefaultValueCell"},(0,a.mdx)("p",null,"none")),(0,a.mdx)(ne.uC,{mdxType:"DescriptionCell"},(0,a.mdx)("p",null,"Callback function triggered when key is pressed."))),(0,a.mdx)(ne.WA,{key:"ROW11",mdxType:"Row"},(0,a.mdx)(ne.qe,{mdxType:"PropNameCell"},"onKeyUp"),(0,a.mdx)(ne.aI,{mdxType:"TypeCell"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"func\n"))),(0,a.mdx)(ne.Ke,{isRequired:!1,mdxType:"RequiredCell"}),(0,a.mdx)(ne._w,{mdxType:"DefaultValueCell"},(0,a.mdx)("p",null,"none")),(0,a.mdx)(ne.uC,{mdxType:"DescriptionCell"},(0,a.mdx)("p",null,"Callback function triggered when key is released."))),(0,a.mdx)(ne.WA,{key:"ROW12",mdxType:"Row"},(0,a.mdx)(ne.qe,{mdxType:"PropNameCell"},"variant"),(0,a.mdx)(ne.aI,{mdxType:"TypeCell"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"enum: [\n  'default'\n  'external'\n  'image'\n  'video'\n  'audio'\n  'document'\n],\n"))),(0,a.mdx)(ne.Ke,{isRequired:!1,mdxType:"RequiredCell"}),(0,a.mdx)(ne._w,{mdxType:"DefaultValueCell"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"'default'\n"))),(0,a.mdx)(ne.uC,{mdxType:"DescriptionCell"},(0,a.mdx)("p",null,"Sets the hyperlink variant. One of ",(0,a.mdx)("inlineCode",{parentName:"p"},"default"),", ",(0,a.mdx)("inlineCode",{parentName:"p"},"external"),", ",(0,a.mdx)("inlineCode",{parentName:"p"},"image"),", ",(0,a.mdx)("inlineCode",{parentName:"p"},"video"),", ",(0,a.mdx)("inlineCode",{parentName:"p"},"audio"),", ",(0,a.mdx)("inlineCode",{parentName:"p"},"document"),".")))))}ie.isMDXComponent=!0;var ue=["components"];function pe(){return pe=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},pe.apply(this,arguments)}function ce(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var me={},se="wrapper";function fe(e){var t=e.components,n=ce(e,ue);return(0,a.mdx)(se,pe({},me,n,{components:t,mdxType:"MDXLayout"}),(0,a.mdx)(l.k,{mdxType:"Badge"}),(0,a.mdx)("h1",{id:"terra-hyperlink"},"Terra Hyperlink"),(0,a.mdx)("p",null,"The terra hyperlink component allows linking to other web pages, files, locations within the same page, email addresses, or any other URL."),(0,a.mdx)("h2",{id:"terra-hyperlink-button"},"Terra Hyperlink Button"),(0,a.mdx)("p",null,"Similar to the standard hyperlinks, there are times when applications may need to use a button element and add a onClick function to navigate the user, instead of a traditional anchor ",(0,a.mdx)("inlineCode",{parentName:"p"},"<a>")," element with an ",(0,a.mdx)("inlineCode",{parentName:"p"},"href")," attribute for URL routing."),(0,a.mdx)("p",null,"Terra Hyperlink Button can be created by providing callback / handler to ",(0,a.mdx)("inlineCode",{parentName:"p"},"onClick")," prop. Hyperlink Button is intended to communicate both visually to sighted users and to accessible users relying on assistive technology, that the interactive element is still a link, with the intention of navigating a user somewhere (contrasted with standard buttons which communicate that user can take an action)."),(0,a.mdx)("h2",{id:"getting-started"},"Getting Started"),(0,a.mdx)("ul",null,(0,a.mdx)("li",{parentName:"ul"},"Install with ",(0,a.mdx)("a",{parentName:"li",href:"https://www.npmjs.com/"},"npmjs"),":",(0,a.mdx)("ul",{parentName:"li"},(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("inlineCode",{parentName:"li"},"npm install terra-hyperlink"))))),(0,a.mdx)("h2",{id:"peer-dependencies"},"Peer Dependencies"),(0,a.mdx)("p",null,"This component requires the following peer dependencies be installed in your app for the component to properly function."),(0,a.mdx)("table",null,(0,a.mdx)("thead",{parentName:"table"},(0,a.mdx)("tr",{parentName:"thead"},(0,a.mdx)("th",{parentName:"tr",align:null},"Peer Dependency"),(0,a.mdx)("th",{parentName:"tr",align:null},"Version"))),(0,a.mdx)("tbody",{parentName:"table"},(0,a.mdx)("tr",{parentName:"tbody"},(0,a.mdx)("td",{parentName:"tr",align:null},"react"),(0,a.mdx)("td",{parentName:"tr",align:null},"^16.8.5")),(0,a.mdx)("tr",{parentName:"tbody"},(0,a.mdx)("td",{parentName:"tr",align:null},"react-dom"),(0,a.mdx)("td",{parentName:"tr",align:null},"^16.8.5")),(0,a.mdx)("tr",{parentName:"tbody"},(0,a.mdx)("td",{parentName:"tr",align:null},"react-intl"),(0,a.mdx)("td",{parentName:"tr",align:null},"^2.8.0")))),(0,a.mdx)("h2",{id:"usage"},"Usage"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-jsx"},"import Hyperlink from 'terra-hyperlink';\n")),(0,a.mdx)("h2",{id:"component-features"},"Component Features"),(0,a.mdx)("ul",null,(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("a",{parentName:"li",href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#cross-browser-support"},"Cross-Browser Support")),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("a",{parentName:"li",href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#ltr--rtl"},"LTR/RTL Support"))),(0,a.mdx)("h2",{id:"examples"},"Examples"),(0,a.mdx)(s,{mdxType:"DefaultHyperlink"}),(0,a.mdx)(g,{mdxType:"DefaultHyperlinkButton"}),(0,a.mdx)(K,{description:"An external variant adds a custom icon to indicate the destination is external to the source.",mdxType:"External"}),(0,a.mdx)(C,{description:"An audio variant adds a custom icon to indicate the content linked is audio.",mdxType:"Audio"}),(0,a.mdx)(te,{description:"A video variant adds a custom icon to indicate the content linked is a video.",mdxType:"Video"}),(0,a.mdx)(Y,{description:"An image variant adds a custom icon to indicate the content linked is an image.",mdxType:"Image"}),(0,a.mdx)(M,{description:"A document variant adds a custom icon to indicate the content linked is document (.pdf, .doc, .xls, etc.).",mdxType:"Document"}),(0,a.mdx)("h2",{id:"hyperlink-props"},"Hyperlink Props"),(0,a.mdx)(ie,{mdxType:"HyperlinkPropsTable"}))}fe.isMDXComponent=!0},704:function(e,t,n){n.d(t,{k:function(){return l}});var r=n(11504),a=n(11416),l=function(e){var t=e.url;return r.createElement(a.c,{src:"https://github.com/cerner/terra-core/tree/main/packages/terra-hyperlink",name:"terra-hyperlink",version:"2.65.0",url:t})}},58112:function(e,t,n){n.r(t),t.default={badge:"Badges-module__badge___vex-+","badge-container":"Badges-module__badge-container___B13Mv","badge-name":"Badges-module__badge-name___jkN0m","badge-version":"Badges-module__badge-version___agZ+P"}},86896:function(e,t,n){n.r(t),t.default={"clinical-lowlight-theme":"ExampleTemplate-module__clinical-lowlight-theme___rBbtD","orion-fusion-theme":"ExampleTemplate-module__orion-fusion-theme___GzA23",template:"ExampleTemplate-module__template___a4uPk",header:"ExampleTemplate-module__header___iFXV3",content:"ExampleTemplate-module__content___48m4Q",description:"ExampleTemplate-module__description___NwBJo",footer:"ExampleTemplate-module__footer___GpSoG","button-container":"ExampleTemplate-module__button-container___rAD11",css:"ExampleTemplate-module__css___+jtk1",code:"ExampleTemplate-module__code___7rC6C","css-toggle":"ExampleTemplate-module__css-toggle___chHK7","code-toggle":"ExampleTemplate-module__code-toggle___TGlE-","is-selected":"ExampleTemplate-module__is-selected___0BYwS",item:"ExampleTemplate-module__item___8FTQq",chevron:"ExampleTemplate-module__chevron___VbY7N",title:"ExampleTemplate-module__title___r+nbJ","dynamic-content":"ExampleTemplate-module__dynamic-content___k+1H7"}},13948:function(e,t,n){n.r(t),t.default={"clinical-lowlight-theme":"PropsTable-module__clinical-lowlight-theme___3pa8J","orion-fusion-theme":"PropsTable-module__orion-fusion-theme___FtP5r",bold:"PropsTable-module__bold___-z9Sz",table:"PropsTable-module__table___rzW-v",required:"PropsTable-module__required___ev190","code-block-override":"PropsTable-module__code-block-override___fF0JK"}},62008:function(e,t,n){n.r(t),t.default={"clinical-lowlight-theme":"Table-module__clinical-lowlight-theme___PqYJ8","orion-fusion-theme":"Table-module__orion-fusion-theme___d9rxf",table:"Table-module__table___eg2Mi","padding-standard":"Table-module__padding-standard___BfbC-","padding-compact":"Table-module__padding-compact___Yus6Z",striped:"Table-module__striped___n8xJe"}},29988:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=p(n(11504)),a=p(n(3268)),l=p(n(82084)),o=p(n(74824)),d=p(n(99640)),i=p(n(62008)),u=["children","disableStripes","paddingStyle"];function p(e){return e&&e.__esModule?e:{default:e}}function c(){return c=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},c.apply(this,arguments)}function m(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=o.default.bind(i.default),f={children:a.default.node.isRequired,disableStripes:a.default.bool,paddingStyle:a.default.oneOf(["none","standard","compact"])},x=function(e){var t=e.children,n=e.disableStripes,a=e.paddingStyle,o=m(e,u),i=r.default.useContext(d.default),p=(0,l.default)(s("table",{striped:!n},{"padding-standard":"standard"===a},{"padding-compact":"compact"===a},i.className),o.className);return r.default.createElement("table",c({},o,{className:p}),t)};x.propTypes=f,x.defaultProps={disableStripes:!1,paddingStyle:"none"};t.default=x},71352:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=o(n(11504)),a=o(n(3268)),l=["children"];function o(e){return e&&e.__esModule?e:{default:e}}function d(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i={children:a.default.node},u=function(e){var t=e.children,n=d(e,l);return r.default.createElement("tbody",n,t)};u.propTypes=i,u.defaultProps={children:[]};t.default=u},1320:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=o(n(11504)),a=o(n(3268)),l=["children"];function o(e){return e&&e.__esModule?e:{default:e}}function d(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i={children:a.default.node},u=function(e){var t=e.children,n=d(e,l);return r.default.createElement("td",n,t)};u.propTypes=i,u.defaultProps={children:[]};t.default=u},22224:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=d(n(11504)),a=d(n(3268)),l=d(n(52684)),o=["children"];function d(e){return e&&e.__esModule?e:{default:e}}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u={children:a.default.node},p=function(e){var t=e.children,n=i(e,o);return r.default.createElement("thead",n,r.default.createElement("tr",null,l.default.addScope(t,"col")))};p.propTypes=u,p.defaultProps={children:[]};t.default=p},5908:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=o(n(11504)),a=o(n(3268)),l=["children"];function o(e){return e&&e.__esModule?e:{default:e}}function d(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i={children:a.default.node},u=function(e){var t=e.children,n=d(e,l);return r.default.createElement("th",n,t)};u.propTypes=i,u.defaultProps={children:[]};t.default=u},74780:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=u(n(11504)),a=u(n(3268)),l=u(n(74824)),o=u(n(62008)),d=u(n(52684)),i=["children"];function u(e){return e&&e.__esModule?e:{default:e}}function p(){return p=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},p.apply(this,arguments)}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var m=l.default.bind(o.default),s={children:a.default.node},f=function(e){var t=e.children,n=c(e,i),a=m(["row"]);return r.default.createElement("tr",p({},n,{className:n.className?"".concat(a," ").concat(n.className):a}),d.default.addScope(t,"row"))};f.propTypes=s,f.defaultProps={children:[]};t.default=f},52684:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r,a=(r=n(11504))&&r.__esModule?r:{default:r};var l={addScope:function(e,t){var n=[];return a.default.Children.forEach(e,(function(e){n.push(a.default.cloneElement(e,{scope:"TableHeaderCell"===e.type.name?t:void 0}))})),n}};t.default=l},30603:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"Body",{enumerable:!0,get:function(){return a.default}}),Object.defineProperty(t,"Cell",{enumerable:!0,get:function(){return o.default}}),Object.defineProperty(t,"Header",{enumerable:!0,get:function(){return d.default}}),Object.defineProperty(t,"HeaderCell",{enumerable:!0,get:function(){return i.default}}),Object.defineProperty(t,"Row",{enumerable:!0,get:function(){return l.default}}),t.default=void 0;var r=u(n(29988)),a=u(n(71352)),l=u(n(74780)),o=u(n(1320)),d=u(n(22224)),i=u(n(5908));function u(e){return e&&e.__esModule?e:{default:e}}t.default=r.default},72672:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=l(n(11504)),a=l(n(22728));function l(e){return e&&e.__esModule?e:{default:e}}function o(){return o=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o.apply(this,arguments)}var d=function(e){var t=o({},e);return r.default.createElement(a.default,t,r.default.createElement("path",{d:"M10.3 24 33.8 0l3.9 3.8L18 24l19.7 20.2-3.9 3.8z"}))};d.displayName="IconChevronLeft",d.defaultProps={viewBox:"0 0 48 48","data-name":"Layer 1",xmlns:"http://www.w3.org/2000/svg"};t.default=d}}]);