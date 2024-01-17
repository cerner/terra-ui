"use strict";(self.webpackChunkterra_ui=self.webpackChunkterra_ui||[]).push([[77497,45627,85565,37344,3353,33667,96890,79482,5161,45865,85355,80858,14041,3193,16835,4845,46647,85161,27444,17657,38681,16873,15318,40411,66097,90941,18101,38443,79057,11264,34319,62979,33315,20116,33609,12026,78996,39915,33442],{35842:function(e,n,l){n.Z=void 0;var t=a(l(67294)),r=a(l(14012));function a(e){return e&&e.__esModule?e:{default:e}}l(83991);n.Z=function(){return t.default.createElement(r.default,null,t.default.createElement(r.default.Row,null,t.default.createElement(r.default.Column,{tiny:6},t.default.createElement("div",{className:"terra-grid-example"},"First Column content")),t.default.createElement(r.default.Column,{tiny:6},t.default.createElement("div",{className:"terra-grid-example"},"Second Column content"))))}},23179:function(e,n,l){n.Z=void 0;var t=a(l(67294)),r=a(l(14012));function a(e){return e&&e.__esModule?e:{default:e}}l(83991);n.Z=function(){return t.default.createElement(r.default,null,t.default.createElement(r.default.Row,null,t.default.createElement(r.default.Column,{tiny:4},t.default.createElement("div",{className:"terra-grid-example"},"4 Columns")),t.default.createElement(r.default.Column,{tiny:8},t.default.createElement("div",{className:"terra-grid-example"},"8 Columns"),t.default.createElement(r.default.Row,null,t.default.createElement(r.default.Column,{tiny:5},t.default.createElement("div",{className:"terra-grid-example"},"5 Nested Columns")),t.default.createElement(r.default.Column,{tiny:7},t.default.createElement("div",{className:"terra-grid-example"},"7 Nested Columns"))))))}},88794:function(e,n,l){n.Z=void 0;var t=a(l(67294)),r=a(l(14012));function a(e){return e&&e.__esModule?e:{default:e}}l(83991);n.Z=function(){return t.default.createElement(r.default,null,t.default.createElement(r.default.Row,null,t.default.createElement(r.default.Column,{tiny:12,small:4,medium:8,large:6},t.default.createElement("div",{className:"terra-grid-example"},"First Column content")),t.default.createElement(r.default.Column,{tiny:12,small:8,medium:4,large:6},t.default.createElement("div",{className:"terra-grid-example"},"Second Column content"))))}},22863:function(e,n,l){var t=l(64836);n.Z=void 0;var r=t(l(67294)),a=t(l(45697)),m=t(l(19845)),o=t(l(17422)),u=m.default.bind(o.default),d={name:a.default.string.isRequired,src:a.default.string,url:a.default.string,version:a.default.string.isRequired},i=function(e){var n=e.src,l=e.name,t=e.url,a=e.version,m=r.default.createElement("a",{className:u("badge"),href:t||"https://www.npmjs.org/package/".concat(l,"/v/").concat(a)},r.default.createElement("span",{className:u("badge-name")},t?"package":"npm"),r.default.createElement("span",{className:u("badge-version")},"v".concat(a))),o=n?r.default.createElement("a",{className:u("badge"),href:n},r.default.createElement("span",{className:u("badge-name")},"github"),r.default.createElement("span",{className:u("badge-version")},"source")):void 0;return r.default.createElement("div",{className:u("badge-container")},m,o)};i.propTypes=d;var c=i;n.Z=c},49271:function(e,n,l){var t=l(64836),r=l(18698);n.Z=void 0;var a=t(l(27424)),m=function(e,n){if(!n&&e&&e.__esModule)return e;if(null===e||"object"!==r(e)&&"function"!=typeof e)return{default:e};var l=_(n);if(l&&l.has(e))return l.get(e);var t={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var m in e)if("default"!==m&&Object.prototype.hasOwnProperty.call(e,m)){var o=a?Object.getOwnPropertyDescriptor(e,m):null;o&&(o.get||o.set)?Object.defineProperty(t,m,o):t[m]=e[m]}t.default=e,l&&l.set(e,t);return t}(l(67294)),o=t(l(45697)),u=t(l(19845)),d=l(21538),i=t(l(33864)),c=t(l(23399)),s=l(51051),p=t(l(53560));function _(e){if("function"!=typeof WeakMap)return null;var n=new WeakMap,l=new WeakMap;return(_=function(e){return e?l:n})(e)}var f=u.default.bind(p.default),x={example:o.default.element,exampleSrc:o.default.element,exampleCssSrc:o.default.element,title:o.default.string,description:o.default.node,isExpanded:o.default.bool},y=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","true")},g=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","false")},v=function(e){var n=e.example,l=e.exampleSrc,t=e.exampleCssSrc,r=e.title,o=e.description,u=e.isExpanded,p=(0,m.useState)(u),_=(0,a.default)(p,2),x=_[0],v=_[1],b=(0,m.useState)(!1),h=(0,a.default)(b,2),O=h[0],G=h[1],C=m.default.useContext(d.ThemeContext),T=void 0!==t,E=function(){G(!O),x&&v(!x)},N=function(){v(!x),O&&G(!O)},w=function(e,n){e.nativeEvent.keyCode!==s.KEY_SPACE&&e.nativeEvent.keyCode!==s.KEY_RETURN||(e.preventDefault(),n())};return m.default.createElement("div",{className:f("template",C.className)},m.default.createElement("div",{className:f("header")},r&&m.default.createElement("h2",{className:f("title")},r)),m.default.createElement("div",{className:f("content")},o&&m.default.createElement("div",{className:f("description")},o),n),m.default.createElement("div",{className:f("footer")},l?m.default.createElement("div",{className:f("button-container")},T&&m.default.createElement("button",{type:"button",className:f("css-toggle","item",{"is-selected":O}),onClick:E,onKeyDown:function(e){return w(e,E)},onBlur:y,onMouseDown:g,tabIndex:0,"data-focus-styles-enabled":!0},m.default.createElement(i.default,{className:f("chevron")}),m.default.createElement("span",null,"CSS"),m.default.createElement(c.default,{className:f("chevron")})),m.default.createElement("button",{type:"button",className:f("code-toggle","item",{"is-selected":x}),onClick:N,onKeyDown:function(e){return w(e,N)},onBlur:y,onMouseDown:g,tabIndex:0,"data-focus-styles-enabled":!0},m.default.createElement(i.default,{className:f("chevron")}),m.default.createElement("span",null,"Code"),m.default.createElement(c.default,{className:f("chevron")}))):null,m.default.createElement("div",null,O&&m.default.createElement("div",{className:f("css")},t),x&&m.default.createElement("div",{className:f("code")},l))))};v.propTypes=x,v.defaultProps={isExpanded:!1};var b=v;n.Z=b},55617:function(e,n,l){l.r(n),l.d(n,{default:function(){return te}});var t=l(67294),r=l(81254),a=l(5101),m=l(35842),o=["components"];function u(){return u=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var l=arguments[n];for(var t in l)Object.prototype.hasOwnProperty.call(l,t)&&(e[t]=l[t])}return e},u.apply(this,arguments)}function d(e,n){if(null==e)return{};var l,t,r=function(e,n){if(null==e)return{};var l,t,r={},a=Object.keys(e);for(t=0;t<a.length;t++)l=a[t],n.indexOf(l)>=0||(r[l]=e[l]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)l=a[t],n.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(r[l]=e[l])}return r}var i={};function c(e){var n=e.components,l=d(e,o);return(0,r.mdx)("wrapper",u({},i,l,{components:n,mdxType:"MDXLayout"}),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport Grid from 'terra-grid';\nimport './GridExample.module.scss';\n\nconst GridDefault = () => (\n  <Grid>\n    <Grid.Row>\n      <Grid.Column tiny={6}>\n        <div className=\"terra-grid-example\">First Column content</div>\n      </Grid.Column>\n      <Grid.Column tiny={6}>\n        <div className=\"terra-grid-example\">Second Column content</div>\n      </Grid.Column>\n    </Grid.Row>\n  </Grid>\n);\n\nexport default GridDefault;\n\n")))}c.isMDXComponent=!0;var s=l(49271),p=["components"];function _(){return _=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var l=arguments[n];for(var t in l)Object.prototype.hasOwnProperty.call(l,t)&&(e[t]=l[t])}return e},_.apply(this,arguments)}function f(e,n){if(null==e)return{};var l,t,r=function(e,n){if(null==e)return{};var l,t,r={},a=Object.keys(e);for(t=0;t<a.length;t++)l=a[t],n.indexOf(l)>=0||(r[l]=e[l]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)l=a[t],n.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(r[l]=e[l])}return r}var x={};function y(e){var n=e.components,l=f(e,p);return(0,r.mdx)("wrapper",_({},x,l,{components:n,mdxType:"MDXLayout"}),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-scss"},".terra-grid-example {\n  background-color: #eee;\n  padding: 10px;\n  word-break: break-word;\n}\n\n")))}y.isMDXComponent=!0;var g=function(e){var n=e.title,l=e.description,r=e.isExpanded;return t.createElement(s.Z,{title:n||"Grid Default",description:l,example:t.createElement(m.Z,null),exampleCssSrc:t.createElement(y,null),exampleSrc:t.createElement(c,null),isExpanded:r})},v=l(88794),b=["components"];function h(){return h=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var l=arguments[n];for(var t in l)Object.prototype.hasOwnProperty.call(l,t)&&(e[t]=l[t])}return e},h.apply(this,arguments)}function O(e,n){if(null==e)return{};var l,t,r=function(e,n){if(null==e)return{};var l,t,r={},a=Object.keys(e);for(t=0;t<a.length;t++)l=a[t],n.indexOf(l)>=0||(r[l]=e[l]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)l=a[t],n.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(r[l]=e[l])}return r}var G={};function C(e){var n=e.components,l=O(e,b);return(0,r.mdx)("wrapper",h({},G,l,{components:n,mdxType:"MDXLayout"}),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport Grid from 'terra-grid';\nimport './GridExample.module.scss';\n\nconst GridResponsive = () => (\n  <Grid>\n    <Grid.Row>\n      <Grid.Column tiny={12} small={4} medium={8} large={6}>\n        <div className=\"terra-grid-example\">First Column content</div>\n      </Grid.Column>\n      <Grid.Column tiny={12} small={8} medium={4} large={6}>\n        <div className=\"terra-grid-example\">Second Column content</div>\n      </Grid.Column>\n    </Grid.Row>\n  </Grid>\n);\n\nexport default GridResponsive;\n\n")))}C.isMDXComponent=!0;var T=function(e){var n=e.title,l=e.description,r=e.isExpanded;return t.createElement(s.Z,{title:n||"Grid Responsive",description:l,example:t.createElement(v.Z,null),exampleCssSrc:t.createElement(y,null),exampleSrc:t.createElement(C,null),isExpanded:r})},E=l(23179),N=["components"];function w(){return w=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var l=arguments[n];for(var t in l)Object.prototype.hasOwnProperty.call(l,t)&&(e[t]=l[t])}return e},w.apply(this,arguments)}function j(e,n){if(null==e)return{};var l,t,r=function(e,n){if(null==e)return{};var l,t,r={},a=Object.keys(e);for(t=0;t<a.length;t++)l=a[t],n.indexOf(l)>=0||(r[l]=e[l]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)l=a[t],n.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(r[l]=e[l])}return r}var R={};function P(e){var n=e.components,l=j(e,N);return(0,r.mdx)("wrapper",w({},R,l,{components:n,mdxType:"MDXLayout"}),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-jsx"},'import React from \'react\';\nimport Grid from \'terra-grid\';\nimport \'./GridExample.module.scss\';\n\nconst GridNested = () => (\n  <Grid>\n    <Grid.Row>\n      <Grid.Column tiny={4}>\n        <div className="terra-grid-example">4 Columns</div>\n      </Grid.Column>\n      <Grid.Column tiny={8}>\n        <div className="terra-grid-example">8 Columns</div>\n        <Grid.Row>\n          <Grid.Column tiny={5}>\n            <div className="terra-grid-example">5 Nested Columns</div>\n          </Grid.Column>\n          <Grid.Column tiny={7}>\n            <div className="terra-grid-example">7 Nested Columns</div>\n          </Grid.Column>\n        </Grid.Row>\n      </Grid.Column>\n    </Grid.Row>\n  </Grid>\n);\n\nexport default GridNested;\n\n')))}P.isMDXComponent=!0;var D=function(e){var n=e.title,l=e.description,r=e.isExpanded;return t.createElement(s.Z,{title:n||"Grid Nested",description:l,example:t.createElement(E.Z,null),exampleCssSrc:t.createElement(y,null),exampleSrc:t.createElement(P,null),isExpanded:r})},S=l(78530),k=["components"];function M(){return M=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var l=arguments[n];for(var t in l)Object.prototype.hasOwnProperty.call(l,t)&&(e[t]=l[t])}return e},M.apply(this,arguments)}function q(e,n){if(null==e)return{};var l,t,r=function(e,n){if(null==e)return{};var l,t,r={},a=Object.keys(e);for(t=0;t<a.length;t++)l=a[t],n.indexOf(l)>=0||(r[l]=e[l]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)l=a[t],n.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(r[l]=e[l])}return r}var W={},X="wrapper";function I(e){var n=e.components,l=q(e,k);return(0,r.mdx)(X,M({},W,l,{components:n,mdxType:"MDXLayout"}),(0,r.mdx)(S.ZP,{mdxType:"PropsTable"},(0,r.mdx)(S.X2,{key:"ROW1",mdxType:"Row"},(0,r.mdx)(S.O,{mdxType:"PropNameCell"},"children"),(0,r.mdx)(S.Di,{mdxType:"TypeCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"node\n"))),(0,r.mdx)(S.dS,{isRequired:!0,mdxType:"RequiredCell"}),(0,r.mdx)(S.mW,{mdxType:"DefaultValueCell"},(0,r.mdx)("p",null,"none")),(0,r.mdx)(S.Ex,{mdxType:"DescriptionCell"},(0,r.mdx)("p",null,"The component that will be displayed at row level.")))))}I.isMDXComponent=!0;var Z=["components"];function V(){return V=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var l=arguments[n];for(var t in l)Object.prototype.hasOwnProperty.call(l,t)&&(e[t]=l[t])}return e},V.apply(this,arguments)}function B(e,n){if(null==e)return{};var l,t,r=function(e,n){if(null==e)return{};var l,t,r={},a=Object.keys(e);for(t=0;t<a.length;t++)l=a[t],n.indexOf(l)>=0||(r[l]=e[l]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)l=a[t],n.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(r[l]=e[l])}return r}var L={},A="wrapper";function Y(e){var n=e.components,l=B(e,Z);return(0,r.mdx)(A,V({},L,l,{components:n,mdxType:"MDXLayout"}),(0,r.mdx)(S.ZP,{mdxType:"PropsTable"},(0,r.mdx)(S.X2,{key:"ROW1",mdxType:"Row"},(0,r.mdx)(S.O,{mdxType:"PropNameCell"},"children"),(0,r.mdx)(S.Di,{mdxType:"TypeCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"node\n"))),(0,r.mdx)(S.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,r.mdx)(S.mW,{mdxType:"DefaultValueCell"},(0,r.mdx)("p",null,"none")),(0,r.mdx)(S.Ex,{mdxType:"DescriptionCell"},(0,r.mdx)("p",null,"The component that will be displayed in cell level."))),(0,r.mdx)(S.X2,{key:"ROW2",mdxType:"Row"},(0,r.mdx)(S.O,{mdxType:"PropNameCell"},"className"),(0,r.mdx)(S.Di,{mdxType:"TypeCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"string\n"))),(0,r.mdx)(S.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,r.mdx)(S.mW,{mdxType:"DefaultValueCell"},(0,r.mdx)("p",null,"none")),(0,r.mdx)(S.Ex,{mdxType:"DescriptionCell"},(0,r.mdx)("p",null,"Custom class name that can be assigned to grid column."))),(0,r.mdx)(S.X2,{key:"ROW3",mdxType:"Row"},(0,r.mdx)(S.O,{mdxType:"PropNameCell"},"tiny"),(0,r.mdx)(S.Di,{mdxType:"TypeCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"custom\n"))),(0,r.mdx)(S.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,r.mdx)(S.mW,{mdxType:"DefaultValueCell"},(0,r.mdx)("p",null,"none")),(0,r.mdx)(S.Ex,{mdxType:"DescriptionCell"},(0,r.mdx)("p",null,"Defines the number of columns this container will span in the 12 column grid. It is applied at the ",(0,r.mdx)("inlineCode",{parentName:"p"},"tiny")," breakpoint and wider screens."))),(0,r.mdx)(S.X2,{key:"ROW4",mdxType:"Row"},(0,r.mdx)(S.O,{mdxType:"PropNameCell"},"enormous"),(0,r.mdx)(S.Di,{mdxType:"TypeCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"custom\n"))),(0,r.mdx)(S.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,r.mdx)(S.mW,{mdxType:"DefaultValueCell"},(0,r.mdx)("p",null,"none")),(0,r.mdx)(S.Ex,{mdxType:"DescriptionCell"},(0,r.mdx)("p",null,"Defines the number of columns this container will span in the 12 column grid. It is applied at the ",(0,r.mdx)("inlineCode",{parentName:"p"},"enormous")," breakpoint and wider screens."))),(0,r.mdx)(S.X2,{key:"ROW5",mdxType:"Row"},(0,r.mdx)(S.O,{mdxType:"PropNameCell"},"huge"),(0,r.mdx)(S.Di,{mdxType:"TypeCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"custom\n"))),(0,r.mdx)(S.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,r.mdx)(S.mW,{mdxType:"DefaultValueCell"},(0,r.mdx)("p",null,"none")),(0,r.mdx)(S.Ex,{mdxType:"DescriptionCell"},(0,r.mdx)("p",null,"Defines the number of columns this container will span in the 12 column grid. It is applied at the ",(0,r.mdx)("inlineCode",{parentName:"p"},"huge")," breakpoint and wider screens."))),(0,r.mdx)(S.X2,{key:"ROW6",mdxType:"Row"},(0,r.mdx)(S.O,{mdxType:"PropNameCell"},"large"),(0,r.mdx)(S.Di,{mdxType:"TypeCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"custom\n"))),(0,r.mdx)(S.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,r.mdx)(S.mW,{mdxType:"DefaultValueCell"},(0,r.mdx)("p",null,"none")),(0,r.mdx)(S.Ex,{mdxType:"DescriptionCell"},(0,r.mdx)("p",null,"Defines the number of columns this container will span in the 12 column grid. It is applied at the ",(0,r.mdx)("inlineCode",{parentName:"p"},"large")," breakpoint and wider screens."))),(0,r.mdx)(S.X2,{key:"ROW7",mdxType:"Row"},(0,r.mdx)(S.O,{mdxType:"PropNameCell"},"medium"),(0,r.mdx)(S.Di,{mdxType:"TypeCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"custom\n"))),(0,r.mdx)(S.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,r.mdx)(S.mW,{mdxType:"DefaultValueCell"},(0,r.mdx)("p",null,"none")),(0,r.mdx)(S.Ex,{mdxType:"DescriptionCell"},(0,r.mdx)("p",null,"Defines the number of columns this container will span in the 12 column grid. It is applied at the ",(0,r.mdx)("inlineCode",{parentName:"p"},"medium")," breakpoint and wider screens."))),(0,r.mdx)(S.X2,{key:"ROW8",mdxType:"Row"},(0,r.mdx)(S.O,{mdxType:"PropNameCell"},"small"),(0,r.mdx)(S.Di,{mdxType:"TypeCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"custom\n"))),(0,r.mdx)(S.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,r.mdx)(S.mW,{mdxType:"DefaultValueCell"},(0,r.mdx)("p",null,"none")),(0,r.mdx)(S.Ex,{mdxType:"DescriptionCell"},(0,r.mdx)("p",null,"Defines the number of columns this container will span in the 12 column grid. It is applied at the ",(0,r.mdx)("inlineCode",{parentName:"p"},"small")," breakpoint and wider screens.")))))}Y.isMDXComponent=!0;var H=["components"];function J(){return J=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var l=arguments[n];for(var t in l)Object.prototype.hasOwnProperty.call(l,t)&&(e[t]=l[t])}return e},J.apply(this,arguments)}function z(e,n){if(null==e)return{};var l,t,r=function(e,n){if(null==e)return{};var l,t,r={},a=Object.keys(e);for(t=0;t<a.length;t++)l=a[t],n.indexOf(l)>=0||(r[l]=e[l]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)l=a[t],n.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(r[l]=e[l])}return r}var F={},K="wrapper";function Q(e){var n=e.components,l=z(e,H);return(0,r.mdx)(K,J({},F,l,{components:n,mdxType:"MDXLayout"}),(0,r.mdx)(S.ZP,{mdxType:"PropsTable"},(0,r.mdx)(S.X2,{key:"ROW1",mdxType:"Row"},(0,r.mdx)(S.O,{mdxType:"PropNameCell"},"children"),(0,r.mdx)(S.Di,{mdxType:"TypeCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"node\n"))),(0,r.mdx)(S.dS,{isRequired:!0,mdxType:"RequiredCell"}),(0,r.mdx)(S.mW,{mdxType:"DefaultValueCell"},(0,r.mdx)("p",null,"none")),(0,r.mdx)(S.Ex,{mdxType:"DescriptionCell"},(0,r.mdx)("p",null,"The component that will be displayed at column level."))),(0,r.mdx)(S.X2,{key:"ROW2",mdxType:"Row"},(0,r.mdx)(S.O,{mdxType:"PropNameCell"},"className"),(0,r.mdx)(S.Di,{mdxType:"TypeCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"string\n"))),(0,r.mdx)(S.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,r.mdx)(S.mW,{mdxType:"DefaultValueCell"},(0,r.mdx)("p",null,"none")),(0,r.mdx)(S.Ex,{mdxType:"DescriptionCell"},(0,r.mdx)("p",null,"Custom class name that can be assigned to grid row.")))))}Q.isMDXComponent=!0;var U=["components"];function $(){return $=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var l=arguments[n];for(var t in l)Object.prototype.hasOwnProperty.call(l,t)&&(e[t]=l[t])}return e},$.apply(this,arguments)}function ee(e,n){if(null==e)return{};var l,t,r=function(e,n){if(null==e)return{};var l,t,r={},a=Object.keys(e);for(t=0;t<a.length;t++)l=a[t],n.indexOf(l)>=0||(r[l]=e[l]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)l=a[t],n.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(r[l]=e[l])}return r}var ne={},le="wrapper";function te(e){var n=e.components,l=ee(e,U);return(0,r.mdx)(le,$({},ne,l,{components:n,mdxType:"MDXLayout"}),(0,r.mdx)(a.C,{mdxType:"Badge"}),(0,r.mdx)("h1",{id:"terra-grid"},"Terra Grid"),(0,r.mdx)("p",null,"The grid component provides a flexbox based grid system."),(0,r.mdx)("h2",{id:"getting-started"},"Getting Started"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},"Install with ",(0,r.mdx)("a",{parentName:"li",href:"https://www.npmjs.com/"},"npmjs"),":",(0,r.mdx)("ul",{parentName:"li"},(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("inlineCode",{parentName:"li"},"npm install terra-grid"))))),(0,r.mdx)("h2",{id:"peer-dependencies"},"Peer Dependencies"),(0,r.mdx)("p",null,"This component requires the following peer dependencies be installed in your app for the component to properly function."),(0,r.mdx)("table",null,(0,r.mdx)("thead",{parentName:"table"},(0,r.mdx)("tr",{parentName:"thead"},(0,r.mdx)("th",{parentName:"tr",align:null},"Peer Dependency"),(0,r.mdx)("th",{parentName:"tr",align:null},"Version"))),(0,r.mdx)("tbody",{parentName:"table"},(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"react"),(0,r.mdx)("td",{parentName:"tr",align:null},"^16.8.5")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"react-dom"),(0,r.mdx)("td",{parentName:"tr",align:null},"^16.8.5")))),(0,r.mdx)("h2",{id:"usage"},"Usage"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-jsx"},"import Grid from 'terra-grid'\n")),(0,r.mdx)("h2",{id:"component-features"},"Component Features"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("a",{parentName:"li",href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#cross-browser-support"},"Cross-Browser Support")),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("a",{parentName:"li",href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#responsive-support"},"Responsive Support")),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("a",{parentName:"li",href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#mobile-support"},"Mobile Support"))),(0,r.mdx)("h2",{id:"examples"},"Examples"),(0,r.mdx)(g,{title:"Default Grid",mdxType:"GridDefault"}),(0,r.mdx)(T,{title:"Responsive Grid",mdxType:"GridResponsive"}),(0,r.mdx)(D,{title:"Nested Grid",mdxType:"GridNested"}),(0,r.mdx)("h2",{id:"grid-props"},"Grid Props"),(0,r.mdx)(I,{mdxType:"GridPropsTable"}),(0,r.mdx)("h2",{id:"grid-column-props"},"Grid Column Props"),(0,r.mdx)(Y,{mdxType:"GridColumnPropsTable"}),(0,r.mdx)("h2",{id:"grid-row-props"},"Grid Row Props"),(0,r.mdx)(Q,{mdxType:"GridRowPropsTable"}))}te.isMDXComponent=!0},5101:function(e,n,l){l.d(n,{C:function(){return a}});var t=l(67294),r=l(22863),a=function(e){var n=e.url;return t.createElement(r.Z,{src:"https://github.com/cerner/terra-core/tree/main/packages/terra-grid",name:"terra-grid",version:"6.35.0",url:n})}},83991:function(e,n,l){l.r(n),n.default={}},17422:function(e,n,l){l.r(n),n.default={badge:"Badges-module__badge___vex-+","badge-container":"Badges-module__badge-container___B13Mv","badge-name":"Badges-module__badge-name___jkN0m","badge-version":"Badges-module__badge-version___agZ+P"}},53560:function(e,n,l){l.r(n),n.default={"clinical-lowlight-theme":"ExampleTemplate-module__clinical-lowlight-theme___rBbtD","orion-fusion-theme":"ExampleTemplate-module__orion-fusion-theme___GzA23",template:"ExampleTemplate-module__template___a4uPk",header:"ExampleTemplate-module__header___iFXV3",content:"ExampleTemplate-module__content___48m4Q",description:"ExampleTemplate-module__description___NwBJo",footer:"ExampleTemplate-module__footer___GpSoG","button-container":"ExampleTemplate-module__button-container___rAD11",css:"ExampleTemplate-module__css___+jtk1",code:"ExampleTemplate-module__code___7rC6C","css-toggle":"ExampleTemplate-module__css-toggle___chHK7","code-toggle":"ExampleTemplate-module__code-toggle___TGlE-","is-selected":"ExampleTemplate-module__is-selected___0BYwS",item:"ExampleTemplate-module__item___8FTQq",chevron:"ExampleTemplate-module__chevron___VbY7N",title:"ExampleTemplate-module__title___r+nbJ","dynamic-content":"ExampleTemplate-module__dynamic-content___k+1H7"}},49959:function(e,n,l){l.r(n),n.default={"clinical-lowlight-theme":"Grid-module__clinical-lowlight-theme___iBVVg","orion-fusion-theme":"Grid-module__orion-fusion-theme___hxBQz",grid:"Grid-module__grid___Os-i8",column:"Grid-module__column___zXP7v","column-tiny-1":"Grid-module__column-tiny-1___+1wfL","column-tiny-2":"Grid-module__column-tiny-2___PrgO4","column-tiny-3":"Grid-module__column-tiny-3___9YJit","column-tiny-4":"Grid-module__column-tiny-4___jIRz+","column-tiny-5":"Grid-module__column-tiny-5___IOG0q","column-tiny-6":"Grid-module__column-tiny-6___htaH4","column-tiny-7":"Grid-module__column-tiny-7___a33iE","column-tiny-8":"Grid-module__column-tiny-8___-yY3y","column-tiny-9":"Grid-module__column-tiny-9___zy187","column-tiny-10":"Grid-module__column-tiny-10___xGjO7","column-tiny-11":"Grid-module__column-tiny-11___jmS1E","column-tiny-12":"Grid-module__column-tiny-12___-6WVA","column-small-1":"Grid-module__column-small-1___xxAEw","column-small-2":"Grid-module__column-small-2___h46ZG","column-small-3":"Grid-module__column-small-3___cGpOb","column-small-4":"Grid-module__column-small-4___sD5fv","column-small-5":"Grid-module__column-small-5___GIPIh","column-small-6":"Grid-module__column-small-6___v9PQi","column-small-7":"Grid-module__column-small-7___3tEtM","column-small-8":"Grid-module__column-small-8___v5Aqd","column-small-9":"Grid-module__column-small-9___EQWCI","column-small-10":"Grid-module__column-small-10___m0tGE","column-small-11":"Grid-module__column-small-11___2pWbr","column-small-12":"Grid-module__column-small-12___5JnEA","column-medium-1":"Grid-module__column-medium-1___Yz235","column-medium-2":"Grid-module__column-medium-2___9jJQg","column-medium-3":"Grid-module__column-medium-3___li0pW","column-medium-4":"Grid-module__column-medium-4___J+DGa","column-medium-5":"Grid-module__column-medium-5___NpRnE","column-medium-6":"Grid-module__column-medium-6___i5TZS","column-medium-7":"Grid-module__column-medium-7___FPmRH","column-medium-8":"Grid-module__column-medium-8___pVJuv","column-medium-9":"Grid-module__column-medium-9___9R-eZ","column-medium-10":"Grid-module__column-medium-10___IdHZl","column-medium-11":"Grid-module__column-medium-11___R53Lk","column-medium-12":"Grid-module__column-medium-12___nisE+","column-large-1":"Grid-module__column-large-1___iu56a","column-large-2":"Grid-module__column-large-2___xmnS6","column-large-3":"Grid-module__column-large-3___lcwn6","column-large-4":"Grid-module__column-large-4___DAqhR","column-large-5":"Grid-module__column-large-5___FY8vE","column-large-6":"Grid-module__column-large-6___htHJ+","column-large-7":"Grid-module__column-large-7___V01cK","column-large-8":"Grid-module__column-large-8___yv14+","column-large-9":"Grid-module__column-large-9___IZJLb","column-large-10":"Grid-module__column-large-10___Yq3R8","column-large-11":"Grid-module__column-large-11___fz98K","column-large-12":"Grid-module__column-large-12___qedSp","column-huge-1":"Grid-module__column-huge-1___Y7ydw","column-huge-2":"Grid-module__column-huge-2___RekuK","column-huge-3":"Grid-module__column-huge-3___sO6jv","column-huge-4":"Grid-module__column-huge-4___C3Zti","column-huge-5":"Grid-module__column-huge-5___YOTc5","column-huge-6":"Grid-module__column-huge-6___0je45","column-huge-7":"Grid-module__column-huge-7___iHY-G","column-huge-8":"Grid-module__column-huge-8___hwq18","column-huge-9":"Grid-module__column-huge-9___XkrI1","column-huge-10":"Grid-module__column-huge-10___kk+IW","column-huge-11":"Grid-module__column-huge-11___izwwH","column-huge-12":"Grid-module__column-huge-12___VTALE","column-enormous-1":"Grid-module__column-enormous-1___7jaM7","column-enormous-2":"Grid-module__column-enormous-2___XJH79","column-enormous-3":"Grid-module__column-enormous-3___bcPxR","column-enormous-4":"Grid-module__column-enormous-4___fAqEp","column-enormous-5":"Grid-module__column-enormous-5___0QWBj","column-enormous-6":"Grid-module__column-enormous-6___4WMSd","column-enormous-7":"Grid-module__column-enormous-7___Bvt0l","column-enormous-8":"Grid-module__column-enormous-8___1rQyt","column-enormous-9":"Grid-module__column-enormous-9___2n6pM","column-enormous-10":"Grid-module__column-enormous-10___HcDD6","column-enormous-11":"Grid-module__column-enormous-11___CvLx0","column-enormous-12":"Grid-module__column-enormous-12___ifU5q"}},14012:function(e,n,l){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var t=o(l(67294)),r=o(l(45697)),a=o(l(3546)),m=o(l(53510));function o(e){return e&&e.__esModule?e:{default:e}}var u={children:r.default.node.isRequired},d=function(e){return t.default.createElement("div",e)};d.propTypes=u,d.Row=a.default,d.Column=m.default;n.default=d},53510:function(e,n,l){function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},t(e)}Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var r=c(l(67294)),a=c(l(45697)),m=c(l(93967)),o=c(l(19845)),u=c(l(50026)),d=c(l(49959)),i=["className","children","tiny","small","medium","large","huge","enormous"];function c(e){return e&&e.__esModule?e:{default:e}}function s(){return s=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var l=arguments[n];for(var t in l)Object.prototype.hasOwnProperty.call(l,t)&&(e[t]=l[t])}return e},s.apply(this,arguments)}function p(e,n,l){return(n=function(e){var n=function(e,n){if("object"!==t(e)||null===e)return e;var l=e[Symbol.toPrimitive];if(void 0!==l){var r=l.call(e,n||"default");if("object"!==t(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===n?String:Number)(e)}(e,"string");return"symbol"===t(n)?n:String(n)}(n))in e?Object.defineProperty(e,n,{value:l,enumerable:!0,configurable:!0,writable:!0}):e[n]=l,e}function _(e,n){if(null==e)return{};var l,t,r=function(e,n){if(null==e)return{};var l,t,r={},a=Object.keys(e);for(t=0;t<a.length;t++)l=a[t],n.indexOf(l)>=0||(r[l]=e[l]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)l=a[t],n.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(r[l]=e[l])}return r}var f=o.default.bind(d.default),x=function(e,n){if(e[n]){var l=e[n];return l>=1&&l<=12?null:new Error("".concat(n," must be in range 1 to 12 inclusively"))}return null},y={children:a.default.node,className:a.default.string,tiny:x,enormous:x,huge:x,large:x,medium:x,small:x},g=function(e){var n,l=e.className,t=e.children,a=e.tiny,o=e.small,d=e.medium,c=e.large,x=e.huge,y=e.enormous,g=_(e,i),v=r.default.useContext(u.default),b=(0,m.default)(f(["column",(n={},p(n,"column-tiny-".concat(a),a),p(n,"column-small-".concat(o),o),p(n,"column-medium-".concat(d),d),p(n,"column-large-".concat(c),c),p(n,"column-huge-".concat(x),x),p(n,"column-enormous-".concat(y),y),n),v.className]),l);return r.default.createElement("div",s({},g,{className:b}),t)};g.propTypes=y;n.default=g},3546:function(e,n,l){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var t=i(l(67294)),r=i(l(45697)),a=i(l(93967)),m=i(l(19845)),o=i(l(50026)),u=i(l(49959)),d=["className","children"];function i(e){return e&&e.__esModule?e:{default:e}}function c(){return c=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var l=arguments[n];for(var t in l)Object.prototype.hasOwnProperty.call(l,t)&&(e[t]=l[t])}return e},c.apply(this,arguments)}function s(e,n){if(null==e)return{};var l,t,r=function(e,n){if(null==e)return{};var l,t,r={},a=Object.keys(e);for(t=0;t<a.length;t++)l=a[t],n.indexOf(l)>=0||(r[l]=e[l]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)l=a[t],n.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(r[l]=e[l])}return r}var p=m.default.bind(u.default),_={children:r.default.node.isRequired,className:r.default.string},f=function(e){var n=e.className,l=e.children,r=s(e,d),m=t.default.useContext(o.default);return t.default.createElement("div",c({},r,{className:(0,a.default)(p("grid",m.className),n)}),l)};f.propTypes=_;n.default=f},33864:function(e,n,l){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var t=a(l(67294)),r=a(l(99139));function a(e){return e&&e.__esModule?e:{default:e}}function m(){return m=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var l=arguments[n];for(var t in l)Object.prototype.hasOwnProperty.call(l,t)&&(e[t]=l[t])}return e},m.apply(this,arguments)}var o=function(e){var n=m({},e);return t.default.createElement(r.default,n,t.default.createElement("path",{d:"M10.3 24 33.8 0l3.9 3.8L18 24l19.7 20.2-3.9 3.8z"}))};o.displayName="IconChevronLeft",o.defaultProps={viewBox:"0 0 48 48","data-name":"Layer 1",xmlns:"http://www.w3.org/2000/svg"};n.default=o}}]);