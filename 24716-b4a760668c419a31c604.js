"use strict";(self.webpackChunkterra_ui=self.webpackChunkterra_ui||[]).push([[24716,45627,37344,33667,96890,79482,85565,3353,80858,14041,5161,16835,45865,85355,3193,27444,4845,46647,66097,85161,38681,15318,40411,18101,38443,78996,39915,33442],{27470:function(e,t,n){t.Z=void 0;var r=l(n(67294)),a=l(n(28301));function l(e){return e&&e.__esModule?e:{default:e}}t.Z=function(){return r.default.createElement(a.default,null,r.default.createElement(a.default.Body,{isContentCentered:!0},"Content is centered"))}},78610:function(e,t,n){t.Z=void 0;var r=l(n(67294)),a=l(n(28301));function l(e){return e&&e.__esModule?e:{default:e}}t.Z=function(){return r.default.createElement("div",null,r.default.createElement(a.default,null,"Hello World!!"))}},7803:function(e,t,n){t.Z=void 0;var r=l(n(67294)),a=l(n(28301));function l(e){return e&&e.__esModule?e:{default:e}}t.Z=function(){return r.default.createElement("div",null,r.default.createElement(a.default,null,r.default.createElement(a.default.Body,null,"Hello World!!")))}},60094:function(e,t,n){t.Z=void 0;var r=o(n(67294)),a=o(n(47166)),l=o(n(28301)),d=o(n(72086));function o(e){return e&&e.__esModule?e:{default:e}}var i=a.default.bind(d.default);t.Z=function(){return r.default.createElement("div",null,r.default.createElement(l.default,null,r.default.createElement(l.default.Body,null,"Hello World Above The Line!!"),r.default.createElement("hr",{className:i("horizontal-rule")}),r.default.createElement(l.default.Body,null,"Hello World Below The Line!!")))}},80686:function(e,t,n){t.Z=void 0;var r=l(n(67294)),a=l(n(28301));function l(e){return e&&e.__esModule?e:{default:e}}t.Z=function(){return r.default.createElement("div",null,r.default.createElement(a.default,null,r.default.createElement(a.default.Body,{hasPaddingVertical:!1},"Hello World!!")))}},61150:function(e,t,n){t.Z=void 0;var r=l(n(67294)),a=l(n(28301));function l(e){return e&&e.__esModule?e:{default:e}}t.Z=function(){return r.default.createElement("div",null,r.default.createElement(a.default,null,r.default.createElement(a.default.Body,{hasPaddingHorizontal:!1},"Hello World!!")))}},55290:function(e,t,n){t.Z=void 0;var r=l(n(67294)),a=l(n(28301));function l(e){return e&&e.__esModule?e:{default:e}}t.Z=function(){return r.default.createElement("div",null,r.default.createElement(a.default,{variant:"raised"},"Hello World!!"))}},66842:function(e,t,n){t.Z=void 0;var r=l(n(67294)),a=l(n(28301));function l(e){return e&&e.__esModule?e:{default:e}}t.Z=function(){return r.default.createElement("div",null,r.default.createElement(a.default,{visuallyHiddenText:"This is a Hello World Card Introduction"},"Hello World!!"))}},22863:function(e,t,n){var r=n(64836);t.Z=void 0;var a=r(n(67294)),l=r(n(45697)),d=r(n(47166)),o=r(n(17422)),i=d.default.bind(o.default),u={name:l.default.string.isRequired,src:l.default.string,url:l.default.string,version:l.default.string.isRequired},c=function(e){var t=e.src,n=e.name,r=e.url,l=e.version,d=a.default.createElement("a",{className:i("badge"),href:r||"https://www.npmjs.org/package/".concat(n,"/v/").concat(l)},a.default.createElement("span",{className:i("badge-name")},r?"package":"npm"),a.default.createElement("span",{className:i("badge-version")},"v".concat(l))),o=t?a.default.createElement("a",{className:i("badge"),href:t},a.default.createElement("span",{className:i("badge-name")},"github"),a.default.createElement("span",{className:i("badge-version")},"source")):void 0;return a.default.createElement("div",{className:i("badge-container")},d,o)};c.propTypes=u;var m=c;t.Z=m},49271:function(e,t,n){var r=n(64836),a=n(18698);t.Z=void 0;var l=r(n(27424)),d=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==a(e)&&"function"!=typeof e)return{default:e};var n=f(t);if(n&&n.has(e))return n.get(e);var r={},l=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var d in e)if("default"!==d&&Object.prototype.hasOwnProperty.call(e,d)){var o=l?Object.getOwnPropertyDescriptor(e,d):null;o&&(o.get||o.set)?Object.defineProperty(r,d,o):r[d]=e[d]}r.default=e,n&&n.set(e,r);return r}(n(67294)),o=r(n(45697)),i=r(n(47166)),u=n(21538),c=r(n(33864)),m=r(n(23399)),p=n(51051),s=r(n(53560));function f(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(f=function(e){return e?n:t})(e)}var x=i.default.bind(s.default),y={example:o.default.element,exampleSrc:o.default.element,exampleCssSrc:o.default.element,title:o.default.string,description:o.default.node,isExpanded:o.default.bool},v=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","true")},g=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","false")},b=function(e){var t=e.example,n=e.exampleSrc,r=e.exampleCssSrc,a=e.title,o=e.description,i=e.isExpanded,s=(0,d.useState)(i),f=(0,l.default)(s,2),y=f[0],b=f[1],h=(0,d.useState)(!1),C=(0,l.default)(h,2),O=C[0],_=C[1],E=d.default.useContext(u.ThemeContext),j=void 0!==r,T=function(){_(!O),y&&b(!y)},N=function(){b(!y),O&&_(!O)},P=function(e,t){e.nativeEvent.keyCode!==p.KEY_SPACE&&e.nativeEvent.keyCode!==p.KEY_RETURN||(e.preventDefault(),t())};return d.default.createElement("div",{className:x("template",E.className)},d.default.createElement("div",{className:x("header")},a&&d.default.createElement("h2",{className:x("title")},a)),d.default.createElement("div",{className:x("content")},o&&d.default.createElement("div",{className:x("description")},o),t),d.default.createElement("div",{className:x("footer")},n?d.default.createElement("div",{className:x("button-container")},j&&d.default.createElement("button",{type:"button",className:x("css-toggle","item",{"is-selected":O}),onClick:T,onKeyDown:function(e){return P(e,T)},onBlur:v,onMouseDown:g,tabIndex:0,"data-focus-styles-enabled":!0},d.default.createElement(c.default,{className:x("chevron")}),d.default.createElement("span",null,"CSS"),d.default.createElement(m.default,{className:x("chevron")})),d.default.createElement("button",{type:"button",className:x("code-toggle","item",{"is-selected":y}),onClick:N,onKeyDown:function(e){return P(e,N)},onBlur:v,onMouseDown:g,tabIndex:0,"data-focus-styles-enabled":!0},d.default.createElement(c.default,{className:x("chevron")}),d.default.createElement("span",null,"Code"),d.default.createElement(m.default,{className:x("chevron")}))):null,d.default.createElement("div",null,O&&d.default.createElement("div",{className:x("css")},r),y&&d.default.createElement("div",{className:x("code")},n))))};b.propTypes=y,b.defaultProps={isExpanded:!1};var h=b;t.Z=h},59730:function(e,t,n){n.r(t),n.d(t,{default:function(){return He}});var r=n(67294),a=n(81254),l=n(20410),d=n(78610),o=["components"];function i(){return i=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},i.apply(this,arguments)}function u(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c={};function m(e){var t=e.components,n=u(e,o);return(0,a.mdx)("wrapper",i({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport Card from 'terra-card/lib/Card';\n\nconst CardDefault = () => (\n  <div>\n    <Card>Hello World!!</Card>\n  </div>\n);\n\nexport default CardDefault;\n\n")))}m.isMDXComponent=!0;var p=n(49271),s=function(e){var t=e.title,n=e.description,a=e.isExpanded;return r.createElement(p.Z,{title:t||"Card Default",description:n,example:r.createElement(d.Z,null),exampleSrc:r.createElement(m,null),isExpanded:a})},f=n(55290),x=["components"];function y(){return y=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},y.apply(this,arguments)}function v(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var g={};function b(e){var t=e.components,n=v(e,x);return(0,a.mdx)("wrapper",y({},g,n,{components:t,mdxType:"MDXLayout"}),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport Card from 'terra-card/lib/Card';\n\nconst CardDefault = () => (\n  <div>\n    <Card variant=\"raised\">Hello World!!</Card>\n  </div>\n);\n\nexport default CardDefault;\n\n")))}b.isMDXComponent=!0;var h=function(e){var t=e.title,n=e.description,a=e.isExpanded;return r.createElement(p.Z,{title:t||"Card Raised",description:n,example:r.createElement(f.Z,null),exampleSrc:r.createElement(b,null),isExpanded:a})},C=n(7803),O=["components"];function _(){return _=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},_.apply(this,arguments)}function E(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var j={};function T(e){var t=e.components,n=E(e,O);return(0,a.mdx)("wrapper",_({},j,n,{components:t,mdxType:"MDXLayout"}),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport Card from 'terra-card/lib/Card';\n\nconst CardPadding = () => (\n  <div>\n    <Card>\n      <Card.Body>Hello World!!</Card.Body>\n    </Card>\n  </div>\n);\n\nexport default CardPadding;\n\n")))}T.isMDXComponent=!0;var N=function(e){var t=e.title,n=e.description,a=e.isExpanded;return r.createElement(p.Z,{title:t||"Card Padding",description:n,example:r.createElement(C.Z,null),exampleSrc:r.createElement(T,null),isExpanded:a})},P=n(61150),w=["components"];function D(){return D=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},D.apply(this,arguments)}function S(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var H={};function R(e){var t=e.components,n=S(e,w);return(0,a.mdx)("wrapper",D({},H,n,{components:t,mdxType:"MDXLayout"}),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport Card from 'terra-card/lib/Card';\n\nconst CardPaddingVertical = () => (\n  <div>\n    <Card>\n      <Card.Body hasPaddingHorizontal={false}>Hello World!!</Card.Body>\n    </Card>\n  </div>\n);\n\nexport default CardPaddingVertical;\n\n")))}R.isMDXComponent=!0;var M=function(e){var t=e.title,n=e.description,a=e.isExpanded;return r.createElement(p.Z,{title:t||"Card Padding Vertical",description:n,example:r.createElement(P.Z,null),exampleSrc:r.createElement(R,null),isExpanded:a})},B=n(80686),k=["components"];function Z(){return Z=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Z.apply(this,arguments)}function W(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var X={};function V(e){var t=e.components,n=W(e,k);return(0,a.mdx)("wrapper",Z({},X,n,{components:t,mdxType:"MDXLayout"}),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport Card from 'terra-card/lib/Card';\n\nconst CardPaddingHorizontal = () => (\n  <div>\n    <Card>\n      <Card.Body hasPaddingVertical={false}>Hello World!!</Card.Body>\n    </Card>\n  </div>\n);\n\nexport default CardPaddingHorizontal;\n\n")))}V.isMDXComponent=!0;var z=function(e){var t=e.title,n=e.description,a=e.isExpanded;return r.createElement(p.Z,{title:t||"Card Padding Horizontal",description:n,example:r.createElement(B.Z,null),exampleSrc:r.createElement(V,null),isExpanded:a})},I=n(60094),q=["components"];function L(){return L=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},L.apply(this,arguments)}function A(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var G={};function K(e){var t=e.components,n=A(e,q);return(0,a.mdx)("wrapper",L({},G,n,{components:t,mdxType:"MDXLayout"}),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport classNames from 'classnames/bind';\nimport Card from 'terra-card/lib/Card';\nimport styles from './CardPaddingHR.scss';\n\nconst cx = classNames.bind(styles);\n\nconst CardPaddingHR = () => (\n  <div>\n    <Card>\n      <Card.Body>Hello World Above The Line!!</Card.Body>\n      <hr className={cx('horizontal-rule')} />\n      <Card.Body>Hello World Below The Line!!</Card.Body>\n    </Card>\n  </div>\n);\n\nexport default CardPaddingHR;\n\n")))}K.isMDXComponent=!0;var U=["components"];function Y(){return Y=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Y.apply(this,arguments)}function F(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var Q={};function J(e){var t=e.components,n=F(e,U);return(0,a.mdx)("wrapper",Y({},Q,n,{components:t,mdxType:"MDXLayout"}),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-scss"},":local {\n  .horizontal-rule {\n    border: 0 none;\n    border-top: 1px solid #c8cacb;\n    box-sizing: border-box;\n    height: 1px;\n    margin: 0;\n  }\n}\n\n")))}J.isMDXComponent=!0;var $=function(e){var t=e.title,n=e.description,a=e.isExpanded;return r.createElement(p.Z,{title:t||"Card Padding HR",description:n,example:r.createElement(I.Z,null),exampleCssSrc:r.createElement(J,null),exampleSrc:r.createElement(K,null),isExpanded:a})},ee=n(27470),te=["components"];function ne(){return ne=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ne.apply(this,arguments)}function re(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var ae={};function le(e){var t=e.components,n=re(e,te);return(0,a.mdx)("wrapper",ne({},ae,n,{components:t,mdxType:"MDXLayout"}),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport Card from 'terra-card/lib/Card';\n\nconst CardContentCentered = () => (\n  <Card>\n    <Card.Body isContentCentered>\n      Content is centered\n    </Card.Body>\n  </Card>\n);\n\nexport default CardContentCentered;\n\n")))}le.isMDXComponent=!0;var de=function(e){var t=e.title,n=e.description,a=e.isExpanded;return r.createElement(p.Z,{title:t||"Card Content Centered",description:n,example:r.createElement(ee.Z,null),exampleSrc:r.createElement(le,null),isExpanded:a})},oe=n(66842),ie=["components"];function ue(){return ue=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ue.apply(this,arguments)}function ce(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var me={};function pe(e){var t=e.components,n=ce(e,ie);return(0,a.mdx)("wrapper",ue({},me,n,{components:t,mdxType:"MDXLayout"}),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport Card from 'terra-card/lib/Card';\n\nconst CardVisuallyHiddenText = () => (\n  <div>\n    <Card visuallyHiddenText=\"This is a Hello World Card Introduction\">Hello World!!</Card>\n  </div>\n);\n\nexport default CardVisuallyHiddenText;\n\n")))}pe.isMDXComponent=!0;var se=function(e){var t=e.title,n=e.description,a=e.isExpanded;return r.createElement(p.Z,{title:t||"Card Visually Hidden Text",description:n,example:r.createElement(oe.Z,null),exampleSrc:r.createElement(pe,null),isExpanded:a})},fe=n(78530),xe=["components"];function ye(){return ye=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},ye.apply(this,arguments)}function ve(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var ge={},be="wrapper";function he(e){var t=e.components,n=ve(e,xe);return(0,a.mdx)(be,ye({},ge,n,{components:t,mdxType:"MDXLayout"}),(0,a.mdx)(fe.ZP,{mdxType:"PropsTable"},(0,a.mdx)(fe.X2,{key:"ROW1",mdxType:"Row"},(0,a.mdx)(fe.O,{mdxType:"PropNameCell"},"children"),(0,a.mdx)(fe.Di,{mdxType:"TypeCell"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"node\n"))),(0,a.mdx)(fe.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,a.mdx)(fe.mW,{mdxType:"DefaultValueCell"},(0,a.mdx)("p",null,"none")),(0,a.mdx)(fe.Ex,{mdxType:"DescriptionCell"},(0,a.mdx)("p",null,"Child Nodes"))),(0,a.mdx)(fe.X2,{key:"ROW2",mdxType:"Row"},(0,a.mdx)(fe.O,{mdxType:"PropNameCell"},"variant"),(0,a.mdx)(fe.Di,{mdxType:"TypeCell"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"enum: [\n  'default'\n  'raised'\n],\n"))),(0,a.mdx)(fe.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,a.mdx)(fe.mW,{mdxType:"DefaultValueCell"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"'default'\n"))),(0,a.mdx)(fe.Ex,{mdxType:"DescriptionCell"},(0,a.mdx)("p",null,"Sets the card variant to change the style for different use cases. One of ",(0,a.mdx)("inlineCode",{parentName:"p"},"default"),",  ",(0,a.mdx)("inlineCode",{parentName:"p"},"raised"),"."))),(0,a.mdx)(fe.X2,{key:"ROW3",mdxType:"Row"},(0,a.mdx)(fe.O,{mdxType:"PropNameCell"},"visuallyHiddenText"),(0,a.mdx)(fe.Di,{mdxType:"TypeCell"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"string\n"))),(0,a.mdx)(fe.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,a.mdx)(fe.mW,{mdxType:"DefaultValueCell"},(0,a.mdx)("p",null,"none")),(0,a.mdx)(fe.Ex,{mdxType:"DescriptionCell"},(0,a.mdx)("p",null,"Text that describes the badge to a screen reader. Use this\nif more information is needed to accurately describe\nthis card to screen reader users.")))))}he.isMDXComponent=!0;var Ce=["components"];function Oe(){return Oe=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Oe.apply(this,arguments)}function _e(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var Ee={},je="wrapper";function Te(e){var t=e.components,n=_e(e,Ce);return(0,a.mdx)(je,Oe({},Ee,n,{components:t,mdxType:"MDXLayout"}),(0,a.mdx)(fe.ZP,{mdxType:"PropsTable"},(0,a.mdx)(fe.X2,{key:"ROW1",mdxType:"Row"},(0,a.mdx)(fe.O,{mdxType:"PropNameCell"},"children"),(0,a.mdx)(fe.Di,{mdxType:"TypeCell"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"node\n"))),(0,a.mdx)(fe.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,a.mdx)(fe.mW,{mdxType:"DefaultValueCell"},(0,a.mdx)("p",null,"none")),(0,a.mdx)(fe.Ex,{mdxType:"DescriptionCell"},(0,a.mdx)("p",null,"Child Nodes"))),(0,a.mdx)(fe.X2,{key:"ROW2",mdxType:"Row"},(0,a.mdx)(fe.O,{mdxType:"PropNameCell"},"hasPaddingVertical"),(0,a.mdx)(fe.Di,{mdxType:"TypeCell"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"bool\n"))),(0,a.mdx)(fe.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,a.mdx)(fe.mW,{mdxType:"DefaultValueCell"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"true\n"))),(0,a.mdx)(fe.Ex,{mdxType:"DescriptionCell"},(0,a.mdx)("p",null,"Provides themeable padding vertical"))),(0,a.mdx)(fe.X2,{key:"ROW3",mdxType:"Row"},(0,a.mdx)(fe.O,{mdxType:"PropNameCell"},"hasPaddingHorizontal"),(0,a.mdx)(fe.Di,{mdxType:"TypeCell"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"bool\n"))),(0,a.mdx)(fe.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,a.mdx)(fe.mW,{mdxType:"DefaultValueCell"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"true\n"))),(0,a.mdx)(fe.Ex,{mdxType:"DescriptionCell"},(0,a.mdx)("p",null,"Provides themeable padding horizontal"))),(0,a.mdx)(fe.X2,{key:"ROW4",mdxType:"Row"},(0,a.mdx)(fe.O,{mdxType:"PropNameCell"},"isContentCentered"),(0,a.mdx)(fe.Di,{mdxType:"TypeCell"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"bool\n"))),(0,a.mdx)(fe.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,a.mdx)(fe.mW,{mdxType:"DefaultValueCell"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"false\n"))),(0,a.mdx)(fe.Ex,{mdxType:"DescriptionCell"},(0,a.mdx)("p",null,"Sets the content of the card to be centered")))))}Te.isMDXComponent=!0;var Ne=["components"];function Pe(){return Pe=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Pe.apply(this,arguments)}function we(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var De={},Se="wrapper";function He(e){var t=e.components,n=we(e,Ne);return(0,a.mdx)(Se,Pe({},De,n,{components:t,mdxType:"MDXLayout"}),(0,a.mdx)(l.C,{mdxType:"Badge"}),(0,a.mdx)("h1",{id:"terra-card"},"Terra Card"),(0,a.mdx)("p",null,"Card is a basic container with some base styling to help separate elements with different content"),(0,a.mdx)("h2",{id:"getting-started"},"Getting Started"),(0,a.mdx)("ul",null,(0,a.mdx)("li",{parentName:"ul"},"Install with ",(0,a.mdx)("a",{parentName:"li",href:"https://www.npmjs.com/"},"npmjs"),":",(0,a.mdx)("ul",{parentName:"li"},(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("inlineCode",{parentName:"li"},"npm install terra-card"))))),(0,a.mdx)("h2",{id:"peer-dependencies"},"Peer Dependencies"),(0,a.mdx)("p",null,"This component requires the following peer dependencies be installed in your app for the component to properly function."),(0,a.mdx)("table",null,(0,a.mdx)("thead",{parentName:"table"},(0,a.mdx)("tr",{parentName:"thead"},(0,a.mdx)("th",{parentName:"tr",align:null},"Peer Dependency"),(0,a.mdx)("th",{parentName:"tr",align:null},"Version"))),(0,a.mdx)("tbody",{parentName:"table"},(0,a.mdx)("tr",{parentName:"tbody"},(0,a.mdx)("td",{parentName:"tr",align:null},"react"),(0,a.mdx)("td",{parentName:"tr",align:null},"^16.8.5")),(0,a.mdx)("tr",{parentName:"tbody"},(0,a.mdx)("td",{parentName:"tr",align:null},"react-dom"),(0,a.mdx)("td",{parentName:"tr",align:null},"^16.8.5")))),(0,a.mdx)("h2",{id:"usage"},"Usage"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-jsx"},"import Card from 'terra-card';\n")),(0,a.mdx)("h2",{id:"expected-use"},"Expected Use"),(0,a.mdx)("p",null,"The expected use for a card would be to keep elements separated from each other with different content, for example one card could contain a graph while another could have text. Another use would be to help make some elements stand out on the screen with the use of the base styling."),(0,a.mdx)("h2",{id:"component-features"},"Component Features"),(0,a.mdx)("ul",null,(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("a",{parentName:"li",href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#cross-browser-support"},"Cross-Browser Support")),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("a",{parentName:"li",href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#responsive-support"},"Responsive Support")),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("a",{parentName:"li",href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#mobile-support"},"Mobile Support"))),(0,a.mdx)("h2",{id:"examples"},"Examples"),(0,a.mdx)(s,{title:"Card basic example",mdxType:"CardDefault"}),(0,a.mdx)(h,{title:"Card basic raised example",mdxType:"CardRaised"}),(0,a.mdx)(N,{title:"Card plus Card Body with default padding",mdxType:"CardPadding"}),(0,a.mdx)(M,{title:"Card plus Card Body with only vertical padding",mdxType:"CardPaddingVertical"}),(0,a.mdx)(z,{title:"Card plus Card Body with only horizontal padding",mdxType:"CardPaddingHorizontal"}),(0,a.mdx)($,{title:"Card plus padded and non-padded children",mdxType:"CardPaddingHR"}),(0,a.mdx)(de,{title:"Centered content inside card",mdxType:"CardContentCentered"}),(0,a.mdx)(se,{title:"Card with Visually Hidden Text",mdxType:"CardVisuallyHiddenText"}),(0,a.mdx)("h2",{id:"card-props"},"Card Props"),(0,a.mdx)(he,{mdxType:"CardPropsTable"}),(0,a.mdx)("h2",{id:"card-body-props"},"Card Body Props"),(0,a.mdx)(Te,{mdxType:"CardBodyPropsTable"}))}He.isMDXComponent=!0},20410:function(e,t,n){n.d(t,{C:function(){return l}});var r=n(67294),a=n(22863),l=function(e){var t=e.url;return r.createElement(a.Z,{src:"https://github.com/cerner/terra-core/tree/main/packages/terra-card",name:"terra-card",version:"3.45.0",url:t})}},72086:function(e,t,n){n.r(t),t.default={"horizontal-rule":"CardPaddingHR__horizontal-rule___ASg+G"}},17422:function(e,t,n){n.r(t),t.default={badge:"Badges-module__badge___vex-+","badge-container":"Badges-module__badge-container___B13Mv","badge-name":"Badges-module__badge-name___jkN0m","badge-version":"Badges-module__badge-version___agZ+P"}},53560:function(e,t,n){n.r(t),t.default={"clinical-lowlight-theme":"ExampleTemplate-module__clinical-lowlight-theme___rBbtD","orion-fusion-theme":"ExampleTemplate-module__orion-fusion-theme___GzA23",template:"ExampleTemplate-module__template___a4uPk",header:"ExampleTemplate-module__header___iFXV3",content:"ExampleTemplate-module__content___48m4Q",description:"ExampleTemplate-module__description___NwBJo",footer:"ExampleTemplate-module__footer___GpSoG","button-container":"ExampleTemplate-module__button-container___rAD11",css:"ExampleTemplate-module__css___+jtk1",code:"ExampleTemplate-module__code___7rC6C","css-toggle":"ExampleTemplate-module__css-toggle___chHK7","code-toggle":"ExampleTemplate-module__code-toggle___TGlE-","is-selected":"ExampleTemplate-module__is-selected___0BYwS",item:"ExampleTemplate-module__item___8FTQq",chevron:"ExampleTemplate-module__chevron___VbY7N",title:"ExampleTemplate-module__title___r+nbJ","dynamic-content":"ExampleTemplate-module__dynamic-content___k+1H7"}},13234:function(e,t,n){n.r(t),t.default={"clinical-lowlight-theme":"Card-module__clinical-lowlight-theme___rpqXf","orion-fusion-theme":"Card-module__orion-fusion-theme___QgHmr",card:"Card-module__card___n9+A2",default:"Card-module__default___Pvv6U",raised:"Card-module__raised___OPyVO"}},64867:function(e,t,n){n.r(t),t.default={"orion-fusion-theme":"CardBody-module__orion-fusion-theme___Xdg9v","clinical-lowlight-theme":"CardBody-module__clinical-lowlight-theme___2YDc3","vertical-padding":"CardBody-module__vertical-padding___xyd9u","horizontal-padding":"CardBody-module__horizontal-padding___wGati","center-content":"CardBody-module__center-content___phyuy"}},28301:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=p(n(67294)),a=p(n(45697)),l=p(n(94184)),d=p(n(47166)),o=p(n(29270)),i=p(n(50026)),u=p(n(13234)),c=p(n(52926)),m=["children","variant","visuallyHiddenText"];function p(e){return e&&e.__esModule?e:{default:e}}function s(){return s=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},s.apply(this,arguments)}function f(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var x=d.default.bind(u.default),y={children:a.default.node,variant:a.default.oneOf(["default","raised"]),visuallyHiddenText:a.default.string},v={variant:"default"},g=function(e){var t=e.children,n=e.variant,a=e.visuallyHiddenText,d=f(e,m),u=r.default.useContext(i.default),c=(0,l.default)(x(["card",n,u.className]),d.className),p=a?r.default.createElement(o.default,{text:a}):null;return r.default.createElement("article",s({},d,{className:c}),p,t)};g.propTypes=y,g.defaultProps=v,g.Body=c.default;var b=g;t.default=b},52926:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=c(n(67294)),a=c(n(45697)),l=c(n(94184)),d=c(n(47166)),o=c(n(50026)),i=c(n(64867)),u=["children","hasPaddingVertical","hasPaddingHorizontal","isContentCentered"];function c(e){return e&&e.__esModule?e:{default:e}}function m(){return m=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},m.apply(this,arguments)}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=d.default.bind(i.default),f={children:a.default.node,hasPaddingVertical:a.default.bool,hasPaddingHorizontal:a.default.bool,isContentCentered:a.default.bool},x=function(e){var t=e.children,n=e.hasPaddingVertical,a=e.hasPaddingHorizontal,d=e.isContentCentered,i=p(e,u),c=r.default.useContext(o.default),f=(0,l.default)(s([{"vertical-padding":n},{"horizontal-padding":a},{"center-content":d},c.className]),i.className);return r.default.createElement("div",m({},i,{className:f}),t)};x.propTypes=f,x.defaultProps={hasPaddingHorizontal:!0,hasPaddingVertical:!0,isContentCentered:!1};var y=x;t.default=y},33864:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=l(n(67294)),a=l(n(99139));function l(e){return e&&e.__esModule?e:{default:e}}function d(){return d=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},d.apply(this,arguments)}var o=function(e){var t=d({},e);return r.default.createElement(a.default,t,r.default.createElement("path",{d:"M10.3 24 33.8 0l3.9 3.8L18 24l19.7 20.2-3.9 3.8z"}))};o.displayName="IconChevronLeft",o.defaultProps={viewBox:"0 0 48 48","data-name":"Layer 1",xmlns:"http://www.w3.org/2000/svg"};t.default=o}}]);