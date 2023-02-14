"use strict";(self.webpackChunkterra_ui=self.webpackChunkterra_ui||[]).push([[54170,45627,37344,85565,3353,80858,14041,5161,45865,85355,27444,3193,17657,4845,46647,33315,85161],{49395:function(e,r,a){r.Z=void 0;var o=s(a(67294)),t=s(a(77559)),l=s(a(47166)),n=s(a(58887));function s(e){return e&&e.__esModule?e:{default:e}}var c=l.default.bind(n.default),u=function(){return o.default.createElement("div",null,o.default.createElement(t.default,{valueText:"5%",value:5,max:10,colorClass:c(["color-bar-example-1"])}),o.default.createElement("br",null),o.default.createElement("br",null),o.default.createElement(t.default,{valueText:"7.5%",value:7.5,max:10,colorClass:c(["color-bar-example-2"])}),o.default.createElement("br",null),o.default.createElement("br",null),o.default.createElement(t.default,{valueText:"10%",value:10,max:10,colorClass:c(["color-bar-example-3"])}))};r.Z=u},99289:function(e,r,a){r.Z=void 0;var o=l(a(67294)),t=l(a(77559));function l(e){return e&&e.__esModule?e:{default:e}}var n=function(){return o.default.createElement(t.default,{valueText:"15%",value:15})};r.Z=n},74705:function(e,r,a){r.Z=void 0;var o=l(a(67294)),t=l(a(77559));function l(e){return e&&e.__esModule?e:{default:e}}var n=function(){return o.default.createElement("div",null,o.default.createElement(t.default,{heightSize:"tiny",valueText:"15%",value:15}),o.default.createElement("br",null),o.default.createElement("br",null),o.default.createElement(t.default,{heightSize:"small",valueText:"30%",value:30}),o.default.createElement("br",null),o.default.createElement("br",null),o.default.createElement(t.default,{heightSize:"medium",valueText:"45%",value:45}),o.default.createElement("br",null),o.default.createElement("br",null),o.default.createElement(t.default,{heightSize:"large",valueText:"60%",value:60}),o.default.createElement("br",null),o.default.createElement("br",null),o.default.createElement(t.default,{heightSize:"huge",valueText:"75%",value:75}))};r.Z=n},39297:function(e,r,a){r.Z=void 0;var o=s(a(67294)),t=s(a(77559)),l=s(a(47166)),n=s(a(58887));function s(e){return e&&e.__esModule?e:{default:e}}var c=l.default.bind(n.default),u=function(){return o.default.createElement("div",null,o.default.createElement(t.default,{valueText:"5%",value:5,max:10,colorClass:c(["two-colors-bar-example-1"])}),o.default.createElement("br",null),o.default.createElement("br",null),o.default.createElement(t.default,{valueText:"3%",value:3,max:10,colorClass:c(["two-colors-bar-example-2"])}),o.default.createElement("br",null),o.default.createElement("br",null),o.default.createElement(t.default,{valueText:"8%",value:8,max:10,colorClass:c(["two-colors-bar-example-3"])}))};r.Z=u},22863:function(e,r,a){var o=a(64836);r.Z=void 0;var t=o(a(67294)),l=o(a(45697)),n=o(a(47166)),s=o(a(17422)),c=n.default.bind(s.default),u={name:l.default.string.isRequired,src:l.default.string,url:l.default.string,version:l.default.string.isRequired},m=function(e){var r=e.src,a=e.name,o=e.url,l=e.version,n=t.default.createElement("a",{className:c("badge"),href:o||"https://www.npmjs.org/package/".concat(a,"/v/").concat(l)},t.default.createElement("span",{className:c("badge-name")},o?"package":"npm"),t.default.createElement("span",{className:c("badge-version")},"v".concat(l))),s=r?t.default.createElement("a",{className:c("badge"),href:r},t.default.createElement("span",{className:c("badge-name")},"github"),t.default.createElement("span",{className:c("badge-version")},"source")):void 0;return t.default.createElement("div",{className:c("badge-container")},n,s)};m.propTypes=u;var d=m;r.Z=d},49271:function(e,r,a){var o=a(64836),t=a(18698);r.Z=void 0;var l=o(a(27424)),n=function(e,r){if(!r&&e&&e.__esModule)return e;if(null===e||"object"!==t(e)&&"function"!=typeof e)return{default:e};var a=b(r);if(a&&a.has(e))return a.get(e);var o={},l=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var n in e)if("default"!==n&&Object.prototype.hasOwnProperty.call(e,n)){var s=l?Object.getOwnPropertyDescriptor(e,n):null;s&&(s.get||s.set)?Object.defineProperty(o,n,s):o[n]=e[n]}o.default=e,a&&a.set(e,o);return o}(a(67294)),s=o(a(45697)),c=o(a(47166)),u=a(21538),m=o(a(33864)),d=o(a(23399)),p=a(51051),i=o(a(53560));function b(e){if("function"!=typeof WeakMap)return null;var r=new WeakMap,a=new WeakMap;return(b=function(e){return e?a:r})(e)}var g=c.default.bind(i.default),x={example:s.default.element,exampleSrc:s.default.element,exampleCssSrc:s.default.element,title:s.default.string,description:s.default.node,isExpanded:s.default.bool},f=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","true")},v=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","false")},y=function(e){var r=e.example,a=e.exampleSrc,o=e.exampleCssSrc,t=e.title,s=e.description,c=e.isExpanded,i=(0,n.useState)(c),b=(0,l.default)(i,2),x=b[0],y=b[1],h=(0,n.useState)(!1),_=(0,l.default)(h,2),k=_[0],E=_[1],O=n.default.useContext(u.ThemeContext),w=void 0!==o,T=function(){E(!k),x&&y(!x)},N=function(){y(!x),k&&E(!k)},P=function(e,r){e.nativeEvent.keyCode!==p.KEY_SPACE&&e.nativeEvent.keyCode!==p.KEY_RETURN||(e.preventDefault(),r())};return n.default.createElement("div",{className:g("template",O.className)},n.default.createElement("div",{className:g("header")},t&&n.default.createElement("h2",{className:g("title")},t)),n.default.createElement("div",{className:g("content")},s&&n.default.createElement("div",{className:g("description")},s),r),n.default.createElement("div",{className:g("footer")},a?n.default.createElement("div",{className:g("button-container")},w&&n.default.createElement("button",{type:"button",className:g("css-toggle","item",{"is-selected":k}),onClick:T,onKeyDown:function(e){return P(e,T)},onBlur:f,onMouseDown:v,tabIndex:0,"data-focus-styles-enabled":!0},n.default.createElement(m.default,{className:g("chevron")}),n.default.createElement("span",null,"CSS"),n.default.createElement(d.default,{className:g("chevron")})),n.default.createElement("button",{type:"button",className:g("code-toggle","item",{"is-selected":x}),onClick:N,onKeyDown:function(e){return P(e,N)},onBlur:f,onMouseDown:v,tabIndex:0,"data-focus-styles-enabled":!0},n.default.createElement(m.default,{className:g("chevron")}),n.default.createElement("span",null,"Code"),n.default.createElement(d.default,{className:g("chevron")}))):null,n.default.createElement("div",null,k&&n.default.createElement("div",{className:g("css")},o),x&&n.default.createElement("div",{className:g("code")},a))))};y.propTypes=x,y.defaultProps={isExpanded:!1};var h=y;r.Z=h},62358:function(e,r,a){a.r(r),a.d(r,{default:function(){return oe}});var o=a(67294),t=a(81254),l=a(19467),n=a(99289),s=["components"];function c(){return c=Object.assign?Object.assign.bind():function(e){for(var r=1;r<arguments.length;r++){var a=arguments[r];for(var o in a)Object.prototype.hasOwnProperty.call(a,o)&&(e[o]=a[o])}return e},c.apply(this,arguments)}function u(e,r){if(null==e)return{};var a,o,t=function(e,r){if(null==e)return{};var a,o,t={},l=Object.keys(e);for(o=0;o<l.length;o++)a=l[o],r.indexOf(a)>=0||(t[a]=e[a]);return t}(e,r);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(o=0;o<l.length;o++)a=l[o],r.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(t[a]=e[a])}return t}var m={},d="wrapper";function p(e){var r=e.components,a=u(e,s);return(0,t.mdx)(d,c({},m,a,{components:r,mdxType:"MDXLayout"}),(0,t.mdx)("pre",null,(0,t.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport ProgressBar from 'terra-progress-bar';\n\nconst ProgressBarDefault = () => (\n  <ProgressBar valueText=\"15%\" value={15} />\n);\n\nexport default ProgressBarDefault;\n\n")))}p.isMDXComponent=!0;var i=a(49271),b=function(e){var r=e.title,a=e.description,t=e.isExpanded;return o.createElement(i.Z,{title:r||"Progress Bar Default",description:a,example:o.createElement(n.Z,null),exampleSrc:o.createElement(p,null),isExpanded:t})},g=a(74705),x=["components"];function f(){return f=Object.assign?Object.assign.bind():function(e){for(var r=1;r<arguments.length;r++){var a=arguments[r];for(var o in a)Object.prototype.hasOwnProperty.call(a,o)&&(e[o]=a[o])}return e},f.apply(this,arguments)}function v(e,r){if(null==e)return{};var a,o,t=function(e,r){if(null==e)return{};var a,o,t={},l=Object.keys(e);for(o=0;o<l.length;o++)a=l[o],r.indexOf(a)>=0||(t[a]=e[a]);return t}(e,r);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(o=0;o<l.length;o++)a=l[o],r.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(t[a]=e[a])}return t}var y={},h="wrapper";function _(e){var r=e.components,a=v(e,x);return(0,t.mdx)(h,f({},y,a,{components:r,mdxType:"MDXLayout"}),(0,t.mdx)("pre",null,(0,t.mdx)("code",{parentName:"pre",className:"language-jsx"},'import React from \'react\';\nimport ProgressBar from \'terra-progress-bar\';\n\nconst ProgressBarSize = () => (\n  <div>\n    <ProgressBar heightSize="tiny" valueText="15%" value={15} />\n    <br />\n    <br />\n    <ProgressBar heightSize="small" valueText="30%" value={30} />\n    <br />\n    <br />\n    <ProgressBar heightSize="medium" valueText="45%" value={45} />\n    <br />\n    <br />\n    <ProgressBar heightSize="large" valueText="60%" value={60} />\n    <br />\n    <br />\n    <ProgressBar heightSize="huge" valueText="75%" value={75} />\n  </div>\n);\n\nexport default ProgressBarSize;\n\n')))}_.isMDXComponent=!0;var k=function(e){var r=e.title,a=e.description,t=e.isExpanded;return o.createElement(i.Z,{title:r||"Progress Bar Size",description:a,example:o.createElement(g.Z,null),exampleSrc:o.createElement(_,null),isExpanded:t})},E=a(49395),O=["components"];function w(){return w=Object.assign?Object.assign.bind():function(e){for(var r=1;r<arguments.length;r++){var a=arguments[r];for(var o in a)Object.prototype.hasOwnProperty.call(a,o)&&(e[o]=a[o])}return e},w.apply(this,arguments)}function T(e,r){if(null==e)return{};var a,o,t=function(e,r){if(null==e)return{};var a,o,t={},l=Object.keys(e);for(o=0;o<l.length;o++)a=l[o],r.indexOf(a)>=0||(t[a]=e[a]);return t}(e,r);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(o=0;o<l.length;o++)a=l[o],r.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(t[a]=e[a])}return t}var N={},P="wrapper";function C(e){var r=e.components,a=T(e,O);return(0,t.mdx)(P,w({},N,a,{components:r,mdxType:"MDXLayout"}),(0,t.mdx)("pre",null,(0,t.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport ProgressBar from 'terra-progress-bar';\nimport classNames from 'classnames/bind';\nimport styles from 'terra-progress-bar/src/colors.module.scss';\n\nconst cx = classNames.bind(styles);\n\nconst ProgressBarColor = () => (\n  <div>\n    <ProgressBar valueText=\"5%\" value={5} max={10} colorClass={cx(['color-bar-example-1'])} />\n    <br />\n    <br />\n    <ProgressBar valueText=\"7.5%\" value={7.5} max={10} colorClass={cx(['color-bar-example-2'])} />\n    <br />\n    <br />\n    <ProgressBar valueText=\"10%\" value={10} max={10} colorClass={cx(['color-bar-example-3'])} />\n  </div>\n);\n\nexport default ProgressBarColor;\n\n")))}C.isMDXComponent=!0;var j=["components"];function z(){return z=Object.assign?Object.assign.bind():function(e){for(var r=1;r<arguments.length;r++){var a=arguments[r];for(var o in a)Object.prototype.hasOwnProperty.call(a,o)&&(e[o]=a[o])}return e},z.apply(this,arguments)}function S(e,r){if(null==e)return{};var a,o,t=function(e,r){if(null==e)return{};var a,o,t={},l=Object.keys(e);for(o=0;o<l.length;o++)a=l[o],r.indexOf(a)>=0||(t[a]=e[a]);return t}(e,r);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(o=0;o<l.length;o++)a=l[o],r.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(t[a]=e[a])}return t}var B={},D="wrapper";function M(e){var r=e.components,a=S(e,j);return(0,t.mdx)(D,z({},B,a,{components:r,mdxType:"MDXLayout"}),(0,t.mdx)("pre",null,(0,t.mdx)("code",{parentName:"pre",className:"language-scss"},"@import './clinical-lowlight-theme/colors.module';\n@import './orion-fusion-theme/colors.module';\n\n:root {\n  --terra-progress-bar-example-1-background-color: rgb(255, 165, 0);\n  --terra-progress-bar-example-2-background-color: #8ccc62;\n  --terra-progress-bar-example-3-background-color: rgb(255, 0, 0);\n  --terra-progress-bar-2-colors-example-1-bar-background-color: #e8e8e8;\n  --terra-progress-bar-2-colors-example-1-value-background-color: #8ccc62;\n  --terra-progress-bar-2-colors-example-2-bar-background-color: rgb(0, 0, 0);\n  --terra-progress-bar-2-colors-example-2-value-background-color: rgb(255, 0, 0);\n  --terra-progress-bar-2-colors-example-3-bar-background-color: rgb(0, 0, 139);\n  --terra-progress-bar-2-colors-example-3-value-background-color: rgb(255, 165, 0);\n  --terra-progress-bar-customized-example-1-bar-background-color: #d3d4d5;\n  --terra-progress-bar-customized-example-1-value-background-color: #8ccc62;\n  --terra-progress-bar-customized-example-1-border-right: 1px solid #fff;\n  --terra-progress-bar-customized-example-1-empty-border-right: 0 solid #fff;\n  --terra-progress-bar-customized-example-2-backup-bar-background-color: rgb(0, 0, 255);\n  --terra-progress-bar-customized-example-2-backup-value-background-color: rgb(255, 0, 0);\n  --terra-progress-bar-customized-example-2-bar-background: linear-gradient(to left, rgb(255, 255, 0), rgb(0, 0, 255));\n  --terra-progress-bar-customized-example-2-value-background: linear-gradient(to left, rgb(255, 0, 0), rgb(0, 128, 0));\n  --terra-progress-bar-customized-example-2-border-right: 3px solid rgb(0, 255, 0);\n  --terra-progress-bar-customized-example-2-empty-border-right: 0 solid rgb(0, 255, 0);\n}\n\n:local {\n  .color-bar-example-1 {\n    color: var(--terra-progress-bar-example-1-background-color, rgb(255, 165, 0));\n    &::-webkit-progress-value { background-color: var(--terra-progress-bar-example-1-background-color, rgb(255, 165, 0)); }\n    &::-moz-progress-bar { background-color: var(--terra-progress-bar-example-1-background-color, rgb(255, 165, 0)); }\n    &::-ms-fill { background-color: var(--terra-progress-bar-example-1-background-color, rgb(255, 165, 0)); }\n  }\n\n  .color-bar-example-2 {\n    color: var(--terra-progress-bar-example-2-background-color, #8ccc62);\n    &::-webkit-progress-value { background-color: var(--terra-progress-bar-example-2-background-color, #8ccc62); }\n    &::-moz-progress-bar { background-color: var(--terra-progress-bar-example-2-background-color, #8ccc62); }\n    &::-ms-fill { background-color: var(--terra-progress-bar-example-2-background-color, #8ccc62); }\n  }\n\n  .color-bar-example-3 {\n    color: var(--terra-progress-bar-example-3-background-color, rgb(255, 0, 0));\n    &::-webkit-progress-value { background-color: var(--terra-progress-bar-example-3-background-color, rgb(255, 0, 0)); }\n    &::-moz-progress-bar { background-color: var(--terra-progress-bar-example-3-background-color, rgb(255, 0, 0)); }\n    &::-ms-fill { background-color: var(--terra-progress-bar-example-3-background-color, rgb(255, 0, 0)); }\n  }\n\n  .two-colors-bar-2-colors-example-1 {\n    background-color: var(--terra-progress-bar-2-colors-example-1-bar-background-color, #e8e8e8);\n    color: var(--terra-progress-bar-2-colors-example-1-value-background-color, #8ccc62);\n    &::-webkit-progress-bar { background-color: var(--terra-progress-bar-2-colors-example-1-bar-background-color, #e8e8e8); }\n    &::-webkit-progress-value { background-color: var(--terra-progress-bar-2-colors-example-1-value-background-color, #8ccc62); }\n    &::-moz-progress-bar { background-color: var(--terra-progress-bar-2-colors-example-1-value-background-color, #8ccc62); }\n    &::-ms-fill { background-color: var(--terra-progress-bar-2-colors-example-1-value-background-color, #8ccc62); }\n  }\n\n  .two-colors-bar-2-colors-example-2 {\n    background-color: var(--terra-progress-bar-2-colors-example-2-bar-background-color, rgb(0, 0, 0));\n    color: var(--terra-progress-bar-2-colors-example-2-value-background-color, rgb(255, 0, 0));\n    &::-webkit-progress-bar { background-color: var(--terra-progress-bar-2-colors-example-2-bar-background-color, rgb(0, 0, 0)); }\n    &::-webkit-progress-value { background-color: var(--terra-progress-bar-2-colors-example-2-value-background-color, rgb(255, 0, 0)); }\n    &::-moz-progress-bar { background-color: var(--terra-progress-bar-2-colors-example-2-value-background-color, rgb(255, 0, 0)); }\n    &::-ms-fill { background-color: var(--terra-progress-bar-2-colors-example-2-value-background-color, rgb(255, 0, 0)); }\n  }\n\n  .two-colors-bar-2-colors-example-3 {\n    background-color: var(--terra-progress-bar-2-colors-example-3-bar-background-color, rgb(0, 0, 139));\n    color: var(--terra-progress-bar-2-colors-example-3-value-background-color, rgb(255, 165, 0));\n    &::-webkit-progress-bar { background-color: var(--terra-progress-bar-2-colors-example-3-bar-background-color, rgb(0, 0, 139)); }\n    &::-webkit-progress-value { background-color: var(--terra-progress-bar-2-colors-example-3-value-background-color, rgb(255, 165, 0)); }\n    &::-moz-progress-bar { background-color: var(--terra-progress-bar-2-colors-example-3-value-background-color, rgb(255, 165, 0)); }\n    &::-ms-fill { background-color: var(--terra-progress-bar-2-colors-example-3-value-background-color, rgb(255, 165, 0)); }\n  }\n\n  .customized-color-bar-example-1 {\n    background-color: var(--terra-progress-bar-customized-example-1-bar-background-color, #d3d4d5);\n    border-right: var(--terra-progress-bar-customized-example-1-border-right, 1px solid #fff);\n    color: var(--terra-progress-bar-customized-example-1-value-background-color, #8ccc62);\n\n    &[value] {\n      &::-webkit-progress-bar { background-color: var(--terra-progress-bar-customized-example-1-bar-background-color, #d3d4d5); }\n\n      &::-webkit-progress-value {\n        background-color: var(--terra-progress-bar-customized-example-1-value-background-color, #8ccc62);\n        border-right: var(--terra-progress-bar-customized-example-1-border-right, 1px solid #fff);\n      }\n\n      &::-moz-progress-bar {\n        background-color: var(--terra-progress-bar-customized-example-1-value-background-color, #8ccc62);\n        border-right: var(--terra-progress-bar-customized-example-1-border-right, 1px solid #fff);\n      }\n\n      &::-ms-fill {\n        background-color: var(--terra-progress-bar-customized-example-1-value-background-color, #8ccc62);\n        border-right: var(--terra-progress-bar-customized-example-1-border-right, 1px solid #fff);\n      }\n    }\n\n    &[value='100'],\n    &[value='0'] {\n      border-right: var(--terra-progress-bar-customized-example-1-empty-border-right, 0 solid #fff);\n      &::-webkit-progress-value { border-right: var(--terra-progress-bar-customized-example-1-empty-border-right, 0 solid #fff); }\n      &::-moz-progress-bar { border-right: var(--terra-progress-bar-customized-example-1-empty-border-right, 0 solid #fff); }\n      &::-ms-fill { border-right: var(--terra-progress-bar-customized-example-1-empty-border-right, 0 solid #fff); }\n    }\n\n  }\n\n  .customized-color-bar-example-2 {\n    background: var(--terra-progress-bar-customized-example-2-bar-background, linear-gradient(to left, rgb(255, 255, 0), rgb(0, 0, 255)));\n    background-color: var(--terra-progress-bar-customized-example-2-backup-bar-background-color, rgb(0, 0, 255));\n    border-right: var(--terra-progress-bar-customized-example-2-border-right, 3px solid rgb(0, 255, 0));\n    color: var(--terra-progress-bar-customized-example-2-backup-value-background-color, rgb(255, 0, 0));\n\n    &[value] {\n      &::-webkit-progress-bar {\n        background: var(--terra-progress-bar-customized-example-2-bar-background, linear-gradient(to left, rgb(255, 255, 0), rgb(0, 0, 255)));\n        background-color: var(--terra-progress-bar-customized-example-2-backup-bar-background-color, rgb(0, 0, 255));\n      }\n\n      &::-webkit-progress-value {\n        background: var(--terra-progress-bar-customized-example-2-value-background, linear-gradient(to left, rgb(255, 0, 0), rgb(0, 128, 0)));\n        background-color: var(--terra-progress-bar-customized-example-2-backup-value-background-color, rgb(255, 0, 0));\n        border-right: var(--terra-progress-bar-customized-example-2-border-right, 3px solid rgb(0, 255, 0));\n      }\n\n      &::-moz-progress-bar {\n        background: var(--terra-progress-bar-customized-example-2-value-background, linear-gradient(to left, rgb(255, 0, 0), rgb(0, 128, 0)));\n        background-color: var(--terra-progress-bar-customized-example-2-backup-value-background-color, rgb(255, 0, 0));\n        border-right: var(--terra-progress-bar-customized-example-2-border-right, 3px solid rgb(0, 255, 0));\n      }\n\n      &::-ms-fill {\n        background: var(--terra-progress-bar-customized-example-2-value-background, linear-gradient(to left, rgb(255, 0, 0), rgb(0, 128, 0)));\n        background-color: var(--terra-progress-bar-customized-example-2-backup-value-background-color, rgb(255, 0, 0));\n        border-right: var(--terra-progress-bar-customized-example-2-border-right, 3px solid rgb(0, 255, 0));\n      }\n    }\n\n    &[value='100'],\n    &[value='0'] {\n      border-right: var(--terra-progress-bar-customized-example-2-empty-border-right, 0 solid rgb(0, 255, 0));\n      &::-webkit-progress-value { border-right: var(--terra-progress-bar-customized-example-2-empty-border-right, 0 solid rgb(0, 255, 0)); }\n      &::-moz-progress-bar { border-right: var(--terra-progress-bar-customized-example-2-empty-border-right, 0 solid rgb(0, 255, 0)); }\n      &::-ms-fill { border-right: var(--terra-progress-bar-customized-example-2-empty-border-right, 0 solid rgb(0, 255, 0)); }\n    }\n  }\n}\n\n")))}M.isMDXComponent=!0;var R=function(e){var r=e.title,a=e.description,t=e.isExpanded;return o.createElement(i.Z,{title:r||"Progress Bar Color",description:a,example:o.createElement(E.Z,null),exampleCssSrc:o.createElement(M,null),exampleSrc:o.createElement(C,null),isExpanded:t})},Z=a(39297),I=["components"];function X(){return X=Object.assign?Object.assign.bind():function(e){for(var r=1;r<arguments.length;r++){var a=arguments[r];for(var o in a)Object.prototype.hasOwnProperty.call(a,o)&&(e[o]=a[o])}return e},X.apply(this,arguments)}function W(e,r){if(null==e)return{};var a,o,t=function(e,r){if(null==e)return{};var a,o,t={},l=Object.keys(e);for(o=0;o<l.length;o++)a=l[o],r.indexOf(a)>=0||(t[a]=e[a]);return t}(e,r);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(o=0;o<l.length;o++)a=l[o],r.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(t[a]=e[a])}return t}var q={},A="wrapper";function L(e){var r=e.components,a=W(e,I);return(0,t.mdx)(A,X({},q,a,{components:r,mdxType:"MDXLayout"}),(0,t.mdx)("pre",null,(0,t.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport ProgressBar from 'terra-progress-bar';\nimport classNames from 'classnames/bind';\nimport styles from 'terra-progress-bar/src/colors.module.scss';\n\nconst cx = classNames.bind(styles);\n\nconst ProgressBarGradient = () => (\n  <div>\n    <ProgressBar valueText=\"5%\" value={5} max={10} colorClass={cx(['two-colors-bar-example-1'])} />\n    <br />\n    <br />\n    <ProgressBar valueText=\"3%\" value={3} max={10} colorClass={cx(['two-colors-bar-example-2'])} />\n    <br />\n    <br />\n    <ProgressBar valueText=\"8%\" value={8} max={10} colorClass={cx(['two-colors-bar-example-3'])} />\n  </div>\n);\n\nexport default ProgressBarGradient;\n\n")))}L.isMDXComponent=!0;var G=function(e){var r=e.title,a=e.description,t=e.isExpanded;return o.createElement(i.Z,{title:r||"Progress Bar Two Colors",description:a,example:o.createElement(Z.Z,null),exampleCssSrc:o.createElement(M,null),exampleSrc:o.createElement(L,null),isExpanded:t})},V=a(78530),F=["components"];function K(){return K=Object.assign?Object.assign.bind():function(e){for(var r=1;r<arguments.length;r++){var a=arguments[r];for(var o in a)Object.prototype.hasOwnProperty.call(a,o)&&(e[o]=a[o])}return e},K.apply(this,arguments)}function H(e,r){if(null==e)return{};var a,o,t=function(e,r){if(null==e)return{};var a,o,t={},l=Object.keys(e);for(o=0;o<l.length;o++)a=l[o],r.indexOf(a)>=0||(t[a]=e[a]);return t}(e,r);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(o=0;o<l.length;o++)a=l[o],r.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(t[a]=e[a])}return t}var U={},Y="wrapper";function Q(e){var r=e.components,a=H(e,F);return(0,t.mdx)(Y,K({},U,a,{components:r,mdxType:"MDXLayout"}),(0,t.mdx)(V.ZP,{mdxType:"PropsTable"},(0,t.mdx)(V.X2,{key:"ROW1",mdxType:"Row"},(0,t.mdx)(V.O,{mdxType:"PropNameCell"},"heightSize"),(0,t.mdx)(V.Di,{mdxType:"TypeCell"},(0,t.mdx)("pre",null,(0,t.mdx)("code",{parentName:"pre",className:"language-javascript"},"enum: [\n  'tiny'\n  'small'\n  'medium'\n  'large'\n  'huge'\n],\n"))),(0,t.mdx)(V.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,t.mdx)(V.mW,{mdxType:"DefaultValueCell"},(0,t.mdx)("pre",null,(0,t.mdx)("code",{parentName:"pre",className:"language-javascript"},"'small'\n"))),(0,t.mdx)(V.Ex,{mdxType:"DescriptionCell"},(0,t.mdx)("p",null,"Sets the size of the progress-bar from the following values; ",(0,t.mdx)("inlineCode",{parentName:"p"},"tiny"),", ",(0,t.mdx)("inlineCode",{parentName:"p"},"small"),", ",(0,t.mdx)("inlineCode",{parentName:"p"},"medium"),", ",(0,t.mdx)("inlineCode",{parentName:"p"},"large")," and ",(0,t.mdx)("inlineCode",{parentName:"p"},"huge")))),(0,t.mdx)(V.X2,{key:"ROW2",mdxType:"Row"},(0,t.mdx)(V.O,{mdxType:"PropNameCell"},"value"),(0,t.mdx)(V.Di,{mdxType:"TypeCell"},(0,t.mdx)("pre",null,(0,t.mdx)("code",{parentName:"pre",className:"language-javascript"},"number\n"))),(0,t.mdx)(V.dS,{isRequired:!0,mdxType:"RequiredCell"}),(0,t.mdx)(V.mW,{mdxType:"DefaultValueCell"},(0,t.mdx)("p",null,"none")),(0,t.mdx)(V.Ex,{mdxType:"DescriptionCell"},(0,t.mdx)("p",null,"Sets the fill-value of the progress bar with respect to the ",(0,t.mdx)("inlineCode",{parentName:"p"},"max")," prop."))),(0,t.mdx)(V.X2,{key:"ROW3",mdxType:"Row"},(0,t.mdx)(V.O,{mdxType:"PropNameCell"},"max"),(0,t.mdx)(V.Di,{mdxType:"TypeCell"},(0,t.mdx)("pre",null,(0,t.mdx)("code",{parentName:"pre",className:"language-javascript"},"number\n"))),(0,t.mdx)(V.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,t.mdx)(V.mW,{mdxType:"DefaultValueCell"},(0,t.mdx)("pre",null,(0,t.mdx)("code",{parentName:"pre",className:"language-javascript"},"100\n"))),(0,t.mdx)(V.Ex,{mdxType:"DescriptionCell"},(0,t.mdx)("p",null,"Sets the maximum possible fill-value."))),(0,t.mdx)(V.X2,{key:"ROW4",mdxType:"Row"},(0,t.mdx)(V.O,{mdxType:"PropNameCell"},"valueText"),(0,t.mdx)(V.Di,{mdxType:"TypeCell"},(0,t.mdx)("pre",null,(0,t.mdx)("code",{parentName:"pre",className:"language-javascript"},"string\n"))),(0,t.mdx)(V.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,t.mdx)(V.mW,{mdxType:"DefaultValueCell"},(0,t.mdx)("pre",null,(0,t.mdx)("code",{parentName:"pre",className:"language-javascript"},"undefined\n"))),(0,t.mdx)(V.Ex,{mdxType:"DescriptionCell"},(0,t.mdx)("p",null,"Value passed to aria-valuetext for accessibility. You can view more about this attribute\nat ",(0,t.mdx)("a",{parentName:"p",href:"https://www.w3.org/WAI/PF/aria/states_and_properties#aria-valuetext"},"https://www.w3.org/WAI/PF/aria/states_and_properties#aria-valuetext"),"."))),(0,t.mdx)(V.X2,{key:"ROW5",mdxType:"Row"},(0,t.mdx)(V.O,{mdxType:"PropNameCell"},"colorClass"),(0,t.mdx)(V.Di,{mdxType:"TypeCell"},(0,t.mdx)("pre",null,(0,t.mdx)("code",{parentName:"pre",className:"language-javascript"},"string\n"))),(0,t.mdx)(V.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,t.mdx)(V.mW,{mdxType:"DefaultValueCell"},(0,t.mdx)("pre",null,(0,t.mdx)("code",{parentName:"pre",className:"language-javascript"},"'default-color'\n"))),(0,t.mdx)(V.Ex,{mdxType:"DescriptionCell"},(0,t.mdx)("p",null,"Sets an author defined class, to control the colors of the progress bar and override the base color styles."),(0,t.mdx)("p",null,(0,t.mdx)("img",{parentName:"p",src:"https://badgen.net/badge//IMPORTANT/blue?icon=github",alt:"IMPORTANT"}),"\nAdding ",(0,t.mdx)("inlineCode",{parentName:"p"},"var(--my-app...")," CSS variables is required for proper re-themeability when creating custom color styles ",(0,t.mdx)("em",{parentName:"p"},"(see included examples)"),".")))))}Q.isMDXComponent=!0;var J=["components"];function $(){return $=Object.assign?Object.assign.bind():function(e){for(var r=1;r<arguments.length;r++){var a=arguments[r];for(var o in a)Object.prototype.hasOwnProperty.call(a,o)&&(e[o]=a[o])}return e},$.apply(this,arguments)}function ee(e,r){if(null==e)return{};var a,o,t=function(e,r){if(null==e)return{};var a,o,t={},l=Object.keys(e);for(o=0;o<l.length;o++)a=l[o],r.indexOf(a)>=0||(t[a]=e[a]);return t}(e,r);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(o=0;o<l.length;o++)a=l[o],r.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(t[a]=e[a])}return t}var re={},ae="wrapper";function oe(e){var r=e.components,a=ee(e,J);return(0,t.mdx)(ae,$({},re,a,{components:r,mdxType:"MDXLayout"}),(0,t.mdx)(l.C,{mdxType:"Badge"}),(0,t.mdx)("h1",{id:"terra-progress-bar"},"Terra Progress Bar"),(0,t.mdx)("p",null,"The progress bar component provides users a way to display the progress of process or activity in a graphical manner. It can be modified\nin height and fill color. Its styling is set such that, the ",(0,t.mdx)("inlineCode",{parentName:"p"},"ProgressBar")," element will occupy full width of its parent element and will\nflex based on the width of the parent container."),(0,t.mdx)("p",null,"Note: The progress bar displays fill with respect to percentage (value between 0 and 100). If ",(0,t.mdx)("inlineCode",{parentName:"p"},"max")," isn't specified in the input to the component, then ",(0,t.mdx)("inlineCode",{parentName:"p"},"value")," corresponds to a percentage value."),(0,t.mdx)("h2",{id:"getting-started"},"Getting Started"),(0,t.mdx)("ul",null,(0,t.mdx)("li",{parentName:"ul"},"Install with ",(0,t.mdx)("a",{parentName:"li",href:"https://www.npmjs.com/"},"npmjs"),":",(0,t.mdx)("ul",{parentName:"li"},(0,t.mdx)("li",{parentName:"ul"},(0,t.mdx)("inlineCode",{parentName:"li"},"npm install terra-progress-bar"))))),(0,t.mdx)("h2",{id:"peer-dependencies"},"Peer Dependencies"),(0,t.mdx)("p",null,"This component requires the following peer dependencies be installed in your app for the component to properly function."),(0,t.mdx)("table",null,(0,t.mdx)("thead",{parentName:"table"},(0,t.mdx)("tr",{parentName:"thead"},(0,t.mdx)("th",{parentName:"tr",align:null},"Peer Dependency"),(0,t.mdx)("th",{parentName:"tr",align:null},"Version"))),(0,t.mdx)("tbody",{parentName:"table"},(0,t.mdx)("tr",{parentName:"tbody"},(0,t.mdx)("td",{parentName:"tr",align:null},"react"),(0,t.mdx)("td",{parentName:"tr",align:null},"^16.8.5")),(0,t.mdx)("tr",{parentName:"tbody"},(0,t.mdx)("td",{parentName:"tr",align:null},"react-dom"),(0,t.mdx)("td",{parentName:"tr",align:null},"^16.8.5")))),(0,t.mdx)("h2",{id:"usage"},"Usage"),(0,t.mdx)("pre",null,(0,t.mdx)("code",{parentName:"pre",className:"language-jsx"},"import ProgressBar from 'terra-progress-bar';\n")),(0,t.mdx)("h3",{id:"color-class"},"Color Class"),(0,t.mdx)("pre",null,(0,t.mdx)("code",{parentName:"pre",className:"language-css"},":root {\n  --my-app-progress-bar-example-1-background-color: rgb(255, 165, 0);\n  --my-app-progress-bar-example-2-background-color: #8ccc62;\n  --my-app-progress-bar-example-3-background-color: rgb(255, 0, 0);\n}\n\n:local {\n  .color-bar-example-1 {\n    color: var(--my-app-progress-bar-example-1-background-color, rgb(255, 165, 0));\n    &::-webkit-progress-value { background-color: var(--my-app-progress-bar-example-1-background-color, rgb(255, 165, 0)); }\n    &::-moz-progress-bar { background-color: var(--my-app-progress-bar-example-1-background-color, rgb(255, 165, 0)); }\n    &::-ms-fill { background-color: var(--my-app-progress-bar-example-1-background-color, rgb(255, 165, 0)); }\n  }\n\n  .color-bar-example-2 {\n    color: var(--my-app-progress-bar-example-2-background-color, #8ccc62);\n    &::-webkit-progress-value { background-color: var(--my-app-progress-bar-example-2-background-color, #8ccc62); }\n    &::-moz-progress-bar { background-color: var(--my-app-progress-bar-example-2-background-color, #8ccc62); }\n    &::-ms-fill { background-color: var(--my-app-progress-bar-example-2-background-color, #8ccc62); }\n  }\n\n  .color-bar-example-3 {\n    color: var(--my-app-progress-bar-example-3-background-color, rgb(255, 0, 0));\n    &::-webkit-progress-value { background-color: var(--my-app-progress-bar-example-3-background-color, rgb(255, 0, 0)); }\n    &::-moz-progress-bar { background-color: var(--my-app-progress-bar-example-3-background-color, rgb(255, 0, 0)); }\n    &::-ms-fill { background-color: var(--my-app-progress-bar-example-3-background-color, rgb(255, 0, 0)); }\n  }\n}\n")),(0,t.mdx)("h2",{id:"component-features"},"Component Features"),(0,t.mdx)("ul",null,(0,t.mdx)("li",{parentName:"ul"},(0,t.mdx)("a",{parentName:"li",href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#cross-browser-support"},"Cross-Browser Support")),(0,t.mdx)("li",{parentName:"ul"},(0,t.mdx)("a",{parentName:"li",href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#responsive-support"},"Responsive Support")),(0,t.mdx)("li",{parentName:"ul"},(0,t.mdx)("a",{parentName:"li",href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#mobile-support"},"Mobile Support"))),(0,t.mdx)("h2",{id:"examples"},"Examples"),(0,t.mdx)(b,{title:"Default",mdxType:"ProgressBarDefault"}),(0,t.mdx)(k,{title:"Size",mdxType:"ProgressBarSize"}),(0,t.mdx)(R,{title:"Color",description:"By passing in a colorClass, authors can manually set the bar color of any `<ProgressBar />` component.",mdxType:"ProgressBarColor"}),(0,t.mdx)(G,{title:"Foreground and Background Color",description:"By passing in a colorClass, authors can manually set the bar color of any `<ProgressBar />` component.",mdxType:"ProgressBarTwoColors"}),(0,t.mdx)("h2",{id:"progress-bar-props"},"Progress Bar Props"),(0,t.mdx)(Q,{mdxType:"ProgressBarPropsTable"}))}oe.isMDXComponent=!0},19467:function(e,r,a){a.d(r,{C:function(){return l}});var o=a(67294),t=a(22863),l=function(e){var r=e.url;return o.createElement(t.Z,{src:"https://github.com/cerner/terra-core/tree/main/packages/terra-progress-bar",name:"terra-progress-bar",version:"4.33.0",url:r})}},17422:function(e,r,a){a.r(r),r.default={badge:"Badges-module__badge___vex-+","badge-container":"Badges-module__badge-container___B13Mv","badge-name":"Badges-module__badge-name___jkN0m","badge-version":"Badges-module__badge-version___agZ+P"}},53560:function(e,r,a){a.r(r),r.default={"orion-fusion-theme":"ExampleTemplate-module__orion-fusion-theme___GzA23",template:"ExampleTemplate-module__template___a4uPk",header:"ExampleTemplate-module__header___iFXV3",content:"ExampleTemplate-module__content___48m4Q",description:"ExampleTemplate-module__description___NwBJo",footer:"ExampleTemplate-module__footer___GpSoG","button-container":"ExampleTemplate-module__button-container___rAD11",css:"ExampleTemplate-module__css___+jtk1",code:"ExampleTemplate-module__code___7rC6C","css-toggle":"ExampleTemplate-module__css-toggle___chHK7","code-toggle":"ExampleTemplate-module__code-toggle___TGlE-","is-selected":"ExampleTemplate-module__is-selected___0BYwS",item:"ExampleTemplate-module__item___8FTQq",chevron:"ExampleTemplate-module__chevron___VbY7N",title:"ExampleTemplate-module__title___r+nbJ","dynamic-content":"ExampleTemplate-module__dynamic-content___k+1H7"}},13559:function(e,r,a){a.r(r),r.default={"orion-fusion-theme":"ProgressBar-module__orion-fusion-theme___HjiAn","progress-bar":"ProgressBar-module__progress-bar___ldMCP","default-color":"ProgressBar-module__default-color___-XUpG",tiny:"ProgressBar-module__tiny___arTaR",small:"ProgressBar-module__small___aIbie",medium:"ProgressBar-module__medium___DIoxZ",large:"ProgressBar-module__large___KiWFK",huge:"ProgressBar-module__huge___G3Q0C"}},58887:function(e,r,a){a.r(r),r.default={"orion-fusion-theme":"colors-module__orion-fusion-theme___WApfD","color-bar-example-1":"colors-module__color-bar-example-1___ibZ78","color-bar-example-2":"colors-module__color-bar-example-2___dt254","color-bar-example-3":"colors-module__color-bar-example-3___kbPgL","two-colors-bar-2-colors-example-1":"colors-module__two-colors-bar-2-colors-example-1___sSnUd","two-colors-bar-2-colors-example-2":"colors-module__two-colors-bar-2-colors-example-2___jrhBQ","two-colors-bar-2-colors-example-3":"colors-module__two-colors-bar-2-colors-example-3___MhNA9","customized-color-bar-example-1":"colors-module__customized-color-bar-example-1___iupTB","customized-color-bar-example-2":"colors-module__customized-color-bar-example-2___bmeWC"}},33864:function(e,r,a){Object.defineProperty(r,"__esModule",{value:!0}),r.default=void 0;var o=l(a(67294)),t=l(a(99139));function l(e){return e&&e.__esModule?e:{default:e}}function n(){return n=Object.assign?Object.assign.bind():function(e){for(var r=1;r<arguments.length;r++){var a=arguments[r];for(var o in a)Object.prototype.hasOwnProperty.call(a,o)&&(e[o]=a[o])}return e},n.apply(this,arguments)}var s=function(e){var r=n({},e);return o.default.createElement(t.default,r,o.default.createElement("path",{d:"M10.3 24L33.8 0l3.9 3.8L18 24l19.7 20.2-3.9 3.8z"}))};s.displayName="IconChevronLeft",s.defaultProps={className:"",viewBox:"0 0 48 48",xmlns:"http://www.w3.org/2000/svg","data-name":"Layer 1",isBidi:!0};var c=s;r.default=c},77559:function(e,r,a){Object.defineProperty(r,"__esModule",{value:!0}),r.default=r.ProgressBarHeightSize=void 0;var o=m(a(67294)),t=m(a(45697)),l=m(a(94184)),n=m(a(47166)),s=m(a(50026)),c=m(a(13559)),u=["heightSize","value","max","valueText","colorClass"];function m(e){return e&&e.__esModule?e:{default:e}}function d(){return d=Object.assign?Object.assign.bind():function(e){for(var r=1;r<arguments.length;r++){var a=arguments[r];for(var o in a)Object.prototype.hasOwnProperty.call(a,o)&&(e[o]=a[o])}return e},d.apply(this,arguments)}function p(e,r){if(null==e)return{};var a,o,t=function(e,r){if(null==e)return{};var a,o,t={},l=Object.keys(e);for(o=0;o<l.length;o++)a=l[o],r.indexOf(a)>=0||(t[a]=e[a]);return t}(e,r);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(o=0;o<l.length;o++)a=l[o],r.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(t[a]=e[a])}return t}var i=n.default.bind(c.default);r.ProgressBarHeightSize={TINY:"tiny",SMALL:"small",MEDIUM:"medium",LARGE:"large",HUGE:"huge"};var b={heightSize:t.default.oneOf(["tiny","small","medium","large","huge"]),value:t.default.number.isRequired,max:t.default.number,valueText:t.default.string,colorClass:t.default.string},g={heightSize:"small",max:100,valueText:void 0,colorClass:"default-color"},x=function(e){var r=e.heightSize,a=e.value,t=e.max,n=e.valueText,c=e.colorClass,m=p(e,u),b=o.default.useContext(s.default),g=(0,l.default)(i("progress-bar",r,c,b.className),m.className),x=a/t*100;return o.default.createElement("progress",d({},m,{className:g,max:100,value:x,"aria-valuemax":100,"aria-valuemin":0,"aria-valuenow":x,"aria-valuetext":n,tabIndex:"-1"}))};x.propTypes=b,x.defaultProps=g;var f=x;r.default=f}}]);