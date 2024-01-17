"use strict";(self.webpackChunkterra_ui=self.webpackChunkterra_ui||[]).push([[54311],{56333:function(e,t,n){function l(e){return l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},l(e)}t.Z=void 0;var a=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=l(e)&&"function"!=typeof e)return{default:e};var n=m(t);if(n&&n.has(e))return n.get(e);var a={__proto__:null},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var i=r?Object.getOwnPropertyDescriptor(e,o):null;i&&(i.get||i.set)?Object.defineProperty(a,o,i):a[o]=e[o]}return a.default=e,n&&n.set(e,a),a}(n(67294)),r=s(n(19845)),o=s(n(20251)),i=s(n(48824));function s(e){return e&&e.__esModule?e:{default:e}}function m(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(m=function(e){return e?n:t})(e)}function p(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var l,a,r,o,i=[],s=!0,m=!1;try{if(r=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;s=!1}else for(;!(s=(l=r.call(n)).done)&&(i.push(l.value),i.length!==t);s=!0);}catch(e){m=!0,a=e}finally{try{if(!s&&null!=n.return&&(o=n.return(),Object(o)!==o))return}finally{if(m)throw a}}return i}}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return d(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return d(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function d(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,l=new Array(t);n<t;n++)l[n]=e[n];return l}var c=r.default.bind(i.default);t.Z=function(){var e=p((0,a.useState)("volvo"),2),t=e[0],n=e[1],l=function(e){n(e)};return a.default.createElement(a.default.Fragment,null,a.default.createElement(o.default,{ariaLabel:"Controlled Select Example",onChange:function(e){return n(e.currentTarget.value)},options:[{value:"volvo",display:"Volvo"},{value:"saab",display:"Saab"},{value:"mercedes",display:"Mercedes"},{value:"audi",display:"Audi"}],value:t,className:c("form-select")}),a.default.createElement("button",{type:"button",className:c("controlled-button"),onClick:function(){return l()}},"Clear"),a.default.createElement("button",{type:"button",className:c("controlled-button"),onClick:function(){return l("mercedes")}},"Set Mercedes"))}},13023:function(e,t,n){t.Z=void 0;var l=i(n(67294)),a=i(n(19845)),r=i(n(20251)),o=i(n(48824));function i(e){return e&&e.__esModule?e:{default:e}}var s=a.default.bind(o.default);t.Z=function(){return l.default.createElement(r.default,{ariaLabel:"Disabled Example",disabled:!0,options:[{value:"volvo",display:"Volvo"},{value:"saab",display:"Saab"},{value:"mercedes",display:"Mercedes"},{value:"audi",display:"Audi"}],className:s("form-select")})}},82892:function(e,t,n){t.Z=void 0;var l=i(n(67294)),a=i(n(19845)),r=i(n(20251)),o=i(n(48824));function i(e){return e&&e.__esModule?e:{default:e}}var s=a.default.bind(o.default);t.Z=function(){return l.default.createElement(r.default,{ariaLabel:"Uncontrolled Example",options:[{disabled:!0,value:"volvo",display:"Volvo"},{disabled:!0,value:"saab",display:"Saab"},{value:"mercedes",display:"Mercedes"},{value:"audi",display:"Audi"}],className:s("form-select")})}},10872:function(e,t,n){t.Z=void 0;var l=i(n(67294)),a=i(n(19845)),r=i(n(20251)),o=i(n(48824));function i(e){return e&&e.__esModule?e:{default:e}}var s=a.default.bind(o.default);t.Z=function(){return l.default.createElement(r.default,{ariaLabel:"Default Placeholder Example",isFilterStyle:!0,options:[{value:"volvo",display:"Volvo"},{value:"saab",display:"Saab"},{value:"mercedes",display:"Mercedes"},{value:"audi",display:"Audi"}],className:s("form-select")})}},313:function(e,t,n){t.Z=void 0;var l=i(n(67294)),a=i(n(19845)),r=i(n(20251)),o=i(n(48824));function i(e){return e&&e.__esModule?e:{default:e}}var s=a.default.bind(o.default);t.Z=function(){return l.default.createElement(r.default,{ariaLabel:"Incomplete Example",isIncomplete:!0,options:[{value:"volvo",display:"Volvo"},{value:"saab",display:"Saab"},{value:"mercedes",display:"Mercedes"},{value:"audi",display:"Audi"}],required:!0,className:s("form-select")})}},41801:function(e,t,n){t.Z=void 0;var l=i(n(67294)),a=i(n(19845)),r=i(n(20251)),o=i(n(48824));function i(e){return e&&e.__esModule?e:{default:e}}var s=a.default.bind(o.default);t.Z=function(){return l.default.createElement(r.default,{ariaLabel:"Invalid Example",isInvalid:!0,options:[{value:"volvo",display:"Volvo"},{value:"saab",display:"Saab"},{value:"mercedes",display:"Mercedes"},{value:"audi",display:"Audi"}],className:s("form-select")})}},67251:function(e,t,n){t.Z=void 0;var l=i(n(67294)),a=i(n(19845)),r=i(n(20251)),o=i(n(48824));function i(e){return e&&e.__esModule?e:{default:e}}var s=a.default.bind(o.default);t.Z=function(){return l.default.createElement(r.default,{ariaLabel:"OptGroup Example",options:[{display:"Swedish Cars",options:[{value:"volvo",display:"Volvo"},{value:"saab",display:"Saab"}]},{display:"German Cars",options:[{value:"mercedes",display:"Mercedes"},{value:"audi",display:"Audi"}]}],className:s("form-select")})}},73793:function(e,t,n){t.Z=void 0;var l=i(n(67294)),a=i(n(19845)),r=i(n(20251)),o=i(n(48824));function i(e){return e&&e.__esModule?e:{default:e}}var s=a.default.bind(o.default);t.Z=function(){return l.default.createElement(r.default,{ariaLabel:"Uncontrolled Example",options:[{value:"volvo",display:"Volvo"},{value:"saab",display:"Saab"},{value:"mercedes",display:"Mercedes"},{value:"audi",display:"Audi"}],className:s("form-select")})}},54311:function(e,t,n){n.r(t),n.d(t,{default:function(){return Te}});var l=n(67294),a=n(81254),r=n(57739),o=n(56333),i=["components"];function s(){return s=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var l in n)Object.prototype.hasOwnProperty.call(n,l)&&(e[l]=n[l])}return e},s.apply(this,arguments)}function m(e,t){if(null==e)return{};var n,l,a=function(e,t){if(null==e)return{};var n,l,a={},r=Object.keys(e);for(l=0;l<r.length;l++)n=r[l],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(l=0;l<r.length;l++)n=r[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p={};function d(e){var t=e.components,n=m(e,i);return(0,a.mdx)("wrapper",s({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React, { useState } from 'react';\nimport classNames from 'classnames/bind';\nimport NativeSelect from 'terra-form-select/lib/native-select/NativeSelect';\nimport styles from '../FormSelectDocCommon.module.scss';\n\nconst cx = classNames.bind(styles);\n\nconst ControlledExample = () => {\n  const [value, setValue] = useState('volvo');\n\n  const clickHandler = (selectedValue) => {\n    setValue(selectedValue);\n  };\n\n  return (\n    <>\n      <NativeSelect\n        ariaLabel=\"Controlled Select Example\"\n        onChange={event => setValue(event.currentTarget.value)}\n        options={[\n          { value: 'volvo', display: 'Volvo' },\n          { value: 'saab', display: 'Saab' },\n          { value: 'mercedes', display: 'Mercedes' },\n          { value: 'audi', display: 'Audi' },\n        ]}\n        value={value}\n        className={cx('form-select')}\n      />\n      <button type=\"button\" className={cx('controlled-button')} onClick={() => clickHandler()}>Clear</button>\n      <button type=\"button\" className={cx('controlled-button')} onClick={() => clickHandler('mercedes')}>Set Mercedes</button>\n    </>\n  );\n};\n\nexport default ControlledExample;\n\n")))}d.isMDXComponent=!0;var c=n(49271),u=n(15305),x=function(e){var t=e.title,n=e.description,a=e.isExpanded;return l.createElement(c.Z,{title:t||"Controlled",description:n,example:l.createElement(o.Z,null),exampleCssSrc:l.createElement(u.Z,null),exampleSrc:l.createElement(d,null),isExpanded:a})},f=n(13023),y=["components"];function v(){return v=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var l in n)Object.prototype.hasOwnProperty.call(n,l)&&(e[l]=n[l])}return e},v.apply(this,arguments)}function b(e,t){if(null==e)return{};var n,l,a=function(e,t){if(null==e)return{};var n,l,a={},r=Object.keys(e);for(l=0;l<r.length;l++)n=r[l],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(l=0;l<r.length;l++)n=r[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var g={};function O(e){var t=e.components,n=b(e,y);return(0,a.mdx)("wrapper",v({},g,n,{components:t,mdxType:"MDXLayout"}),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport classNames from 'classnames/bind';\nimport NativeSelect from 'terra-form-select/lib/native-select/NativeSelect';\nimport styles from '../FormSelectDocCommon.module.scss';\n\nconst cx = classNames.bind(styles);\n\nconst DisabledExample = () => (\n  <NativeSelect\n    ariaLabel=\"Disabled Example\"\n    disabled\n    options={[\n      { value: 'volvo', display: 'Volvo' },\n      { value: 'saab', display: 'Saab' },\n      { value: 'mercedes', display: 'Mercedes' },\n      { value: 'audi', display: 'Audi' },\n    ]}\n    className={cx('form-select')}\n  />\n);\n\nexport default DisabledExample;\n\n")))}O.isMDXComponent=!0;var h=function(e){var t=e.title,n=e.description,a=e.isExpanded;return l.createElement(c.Z,{title:t||"Disabled",description:n,example:l.createElement(f.Z,null),exampleCssSrc:l.createElement(u.Z,null),exampleSrc:l.createElement(O,null),isExpanded:a})},N=n(313),S=["components"];function T(){return T=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var l in n)Object.prototype.hasOwnProperty.call(n,l)&&(e[l]=n[l])}return e},T.apply(this,arguments)}function C(e,t){if(null==e)return{};var n,l,a=function(e,t){if(null==e)return{};var n,l,a={},r=Object.keys(e);for(l=0;l<r.length;l++)n=r[l],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(l=0;l<r.length;l++)n=r[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var E={};function j(e){var t=e.components,n=C(e,S);return(0,a.mdx)("wrapper",T({},E,n,{components:t,mdxType:"MDXLayout"}),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport classNames from 'classnames/bind';\nimport NativeSelect from 'terra-form-select/lib/native-select/NativeSelect';\nimport styles from '../FormSelectDocCommon.module.scss';\n\nconst cx = classNames.bind(styles);\n\nconst IncompleteExample = () => (\n  <NativeSelect\n    ariaLabel=\"Incomplete Example\"\n    isIncomplete\n    options={[\n      { value: 'volvo', display: 'Volvo' },\n      { value: 'saab', display: 'Saab' },\n      { value: 'mercedes', display: 'Mercedes' },\n      { value: 'audi', display: 'Audi' },\n    ]}\n    required\n    className={cx('form-select')}\n  />\n);\n\nexport default IncompleteExample;\n\n")))}j.isMDXComponent=!0;var w=function(e){var t=e.title,n=e.description,a=e.isExpanded;return l.createElement(c.Z,{title:t||"Incomplete",description:n,example:l.createElement(N.Z,null),exampleCssSrc:l.createElement(u.Z,null),exampleSrc:l.createElement(j,null),isExpanded:a})},D=n(41801),R=["components"];function P(){return P=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var l in n)Object.prototype.hasOwnProperty.call(n,l)&&(e[l]=n[l])}return e},P.apply(this,arguments)}function M(e,t){if(null==e)return{};var n,l,a=function(e,t){if(null==e)return{};var n,l,a={},r=Object.keys(e);for(l=0;l<r.length;l++)n=r[l],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(l=0;l<r.length;l++)n=r[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var k={};function Z(e){var t=e.components,n=M(e,R);return(0,a.mdx)("wrapper",P({},k,n,{components:t,mdxType:"MDXLayout"}),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport classNames from 'classnames/bind';\nimport NativeSelect from 'terra-form-select/lib/native-select/NativeSelect';\nimport styles from '../FormSelectDocCommon.module.scss';\n\nconst cx = classNames.bind(styles);\n\nconst InvalidExample = () => (\n  <NativeSelect\n    ariaLabel=\"Invalid Example\"\n    isInvalid\n    options={[\n      { value: 'volvo', display: 'Volvo' },\n      { value: 'saab', display: 'Saab' },\n      { value: 'mercedes', display: 'Mercedes' },\n      { value: 'audi', display: 'Audi' },\n    ]}\n    className={cx('form-select')}\n  />\n);\n\nexport default InvalidExample;\n\n")))}Z.isMDXComponent=!0;var V=function(e){var t=e.title,n=e.description,a=e.isExpanded;return l.createElement(c.Z,{title:t||"Invalid",description:n,example:l.createElement(D.Z,null),exampleCssSrc:l.createElement(u.Z,null),exampleSrc:l.createElement(Z,null),isExpanded:a})},W=n(67251),I=["components"];function X(){return X=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var l in n)Object.prototype.hasOwnProperty.call(n,l)&&(e[l]=n[l])}return e},X.apply(this,arguments)}function q(e,t){if(null==e)return{};var n,l,a=function(e,t){if(null==e)return{};var n,l,a={},r=Object.keys(e);for(l=0;l<r.length;l++)n=r[l],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(l=0;l<r.length;l++)n=r[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var A={};function L(e){var t=e.components,n=q(e,I);return(0,a.mdx)("wrapper",X({},A,n,{components:t,mdxType:"MDXLayout"}),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport classNames from 'classnames/bind';\nimport NativeSelect from 'terra-form-select/lib/native-select/NativeSelect';\nimport styles from '../FormSelectDocCommon.module.scss';\n\nconst cx = classNames.bind(styles);\n\nconst OptGroupExample = () => (\n  <NativeSelect\n    ariaLabel=\"OptGroup Example\"\n    options={[\n      {\n        display: 'Swedish Cars',\n        options: [\n          { value: 'volvo', display: 'Volvo' },\n          { value: 'saab', display: 'Saab' },\n        ],\n      },\n      {\n        display: 'German Cars',\n        options: [\n          { value: 'mercedes', display: 'Mercedes' },\n          { value: 'audi', display: 'Audi' },\n        ],\n      },\n    ]}\n    className={cx('form-select')}\n  />\n);\n\nexport default OptGroupExample;\n\n")))}L.isMDXComponent=!0;var _=function(e){var t=e.title,n=e.description,a=e.isExpanded;return l.createElement(c.Z,{title:t||"Opt Group",description:n,example:l.createElement(W.Z,null),exampleCssSrc:l.createElement(u.Z,null),exampleSrc:l.createElement(L,null),isExpanded:a})},F=n(10872),G=["components"];function U(){return U=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var l in n)Object.prototype.hasOwnProperty.call(n,l)&&(e[l]=n[l])}return e},U.apply(this,arguments)}function z(e,t){if(null==e)return{};var n,l,a=function(e,t){if(null==e)return{};var n,l,a={},r=Object.keys(e);for(l=0;l<r.length;l++)n=r[l],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(l=0;l<r.length;l++)n=r[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var B={};function H(e){var t=e.components,n=z(e,G);return(0,a.mdx)("wrapper",U({},B,n,{components:t,mdxType:"MDXLayout"}),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport classNames from 'classnames/bind';\nimport NativeSelect from 'terra-form-select/lib/native-select/NativeSelect';\nimport styles from '../FormSelectDocCommon.module.scss';\n\nconst cx = classNames.bind(styles);\n\nconst FilterStyleExample = () => (\n  <NativeSelect\n    ariaLabel=\"Default Placeholder Example\"\n    isFilterStyle\n    options={[\n      { value: 'volvo', display: 'Volvo' },\n      { value: 'saab', display: 'Saab' },\n      { value: 'mercedes', display: 'Mercedes' },\n      { value: 'audi', display: 'Audi' },\n    ]}\n    className={cx('form-select')}\n  />\n);\n\nexport default FilterStyleExample;\n\n")))}H.isMDXComponent=!0;var $=function(e){var t=e.title,n=e.description,a=e.isExpanded;return l.createElement(c.Z,{title:t||"Filter Style",description:n,example:l.createElement(F.Z,null),exampleCssSrc:l.createElement(u.Z,null),exampleSrc:l.createElement(H,null),isExpanded:a})},J=n(73793),K=["components"];function Q(){return Q=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var l in n)Object.prototype.hasOwnProperty.call(n,l)&&(e[l]=n[l])}return e},Q.apply(this,arguments)}function Y(e,t){if(null==e)return{};var n,l,a=function(e,t){if(null==e)return{};var n,l,a={},r=Object.keys(e);for(l=0;l<r.length;l++)n=r[l],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(l=0;l<r.length;l++)n=r[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var ee={};function te(e){var t=e.components,n=Y(e,K);return(0,a.mdx)("wrapper",Q({},ee,n,{components:t,mdxType:"MDXLayout"}),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport classNames from 'classnames/bind';\nimport NativeSelect from 'terra-form-select/lib/native-select/NativeSelect';\nimport styles from '../FormSelectDocCommon.module.scss';\n\nconst cx = classNames.bind(styles);\n\nconst UncontrolledExample = () => (\n  <NativeSelect\n    ariaLabel=\"Uncontrolled Example\"\n    options={[\n      { value: 'volvo', display: 'Volvo' },\n      { value: 'saab', display: 'Saab' },\n      { value: 'mercedes', display: 'Mercedes' },\n      { value: 'audi', display: 'Audi' },\n    ]}\n    className={cx('form-select')}\n  />\n);\n\nexport default UncontrolledExample;\n\n")))}te.isMDXComponent=!0;var ne=function(e){var t=e.title,n=e.description,a=e.isExpanded;return l.createElement(c.Z,{title:t||"Uncontrolled",description:n,example:l.createElement(J.Z,null),exampleCssSrc:l.createElement(u.Z,null),exampleSrc:l.createElement(te,null),isExpanded:a})},le=n(82892),ae=["components"];function re(){return re=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var l in n)Object.prototype.hasOwnProperty.call(n,l)&&(e[l]=n[l])}return e},re.apply(this,arguments)}function oe(e,t){if(null==e)return{};var n,l,a=function(e,t){if(null==e)return{};var n,l,a={},r=Object.keys(e);for(l=0;l<r.length;l++)n=r[l],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(l=0;l<r.length;l++)n=r[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var ie={};function se(e){var t=e.components,n=oe(e,ae);return(0,a.mdx)("wrapper",re({},ie,n,{components:t,mdxType:"MDXLayout"}),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport classNames from 'classnames/bind';\nimport NativeSelect from 'terra-form-select/lib/native-select/NativeSelect';\nimport styles from '../FormSelectDocCommon.module.scss';\n\nconst cx = classNames.bind(styles);\n\nconst DisabledOptionsExample = () => (\n  <NativeSelect\n    ariaLabel=\"Uncontrolled Example\"\n    options={[\n      { disabled: true, value: 'volvo', display: 'Volvo' },\n      { disabled: true, value: 'saab', display: 'Saab' },\n      { value: 'mercedes', display: 'Mercedes' },\n      { value: 'audi', display: 'Audi' },\n    ]}\n    className={cx('form-select')}\n  />\n);\n\nexport default DisabledOptionsExample;\n\n")))}se.isMDXComponent=!0;var me=function(e){var t=e.title,n=e.description,a=e.isExpanded;return l.createElement(c.Z,{title:t||"Disabled Options",description:n,example:l.createElement(le.Z,null),exampleCssSrc:l.createElement(u.Z,null),exampleSrc:l.createElement(se,null),isExpanded:a})},pe=n(78530),de=["components"];function ce(){return ce=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var l in n)Object.prototype.hasOwnProperty.call(n,l)&&(e[l]=n[l])}return e},ce.apply(this,arguments)}function ue(e,t){if(null==e)return{};var n,l,a=function(e,t){if(null==e)return{};var n,l,a={},r=Object.keys(e);for(l=0;l<r.length;l++)n=r[l],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(l=0;l<r.length;l++)n=r[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var xe={},fe="wrapper";function ye(e){var t=e.components,n=ue(e,de);return(0,a.mdx)(fe,ce({},xe,n,{components:t,mdxType:"MDXLayout"}),(0,a.mdx)(pe.ZP,{mdxType:"PropsTable"},(0,a.mdx)(pe.X2,{key:"ROW1",mdxType:"Row"},(0,a.mdx)(pe.O,{mdxType:"PropNameCell"},"ariaDescribedBy"),(0,a.mdx)(pe.Di,{mdxType:"TypeCell"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"string\n"))),(0,a.mdx)(pe.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,a.mdx)(pe.mW,{mdxType:"DefaultValueCell"},(0,a.mdx)("p",null,"none")),(0,a.mdx)(pe.Ex,{mdxType:"DescriptionCell"},(0,a.mdx)("p",null,"The string containing ids for elements to describe the select."))),(0,a.mdx)(pe.X2,{key:"ROW2",mdxType:"Row"},(0,a.mdx)(pe.O,{mdxType:"PropNameCell"},"ariaLabel"),(0,a.mdx)(pe.Di,{mdxType:"TypeCell"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"string\n"))),(0,a.mdx)(pe.dS,{isRequired:!0,mdxType:"RequiredCell"}),(0,a.mdx)(pe.mW,{mdxType:"DefaultValueCell"},(0,a.mdx)("p",null,"none")),(0,a.mdx)(pe.Ex,{mdxType:"DescriptionCell"},(0,a.mdx)("p",null,"The aria label string value for the select."))),(0,a.mdx)(pe.X2,{key:"ROW3",mdxType:"Row"},(0,a.mdx)(pe.O,{mdxType:"PropNameCell"},"attrs"),(0,a.mdx)(pe.Di,{mdxType:"TypeCell"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"object\n"))),(0,a.mdx)(pe.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,a.mdx)(pe.mW,{mdxType:"DefaultValueCell"},(0,a.mdx)("p",null,"none")),(0,a.mdx)(pe.Ex,{mdxType:"DescriptionCell"},(0,a.mdx)("p",null,"Additional attributes to spread directly onto the html select node.\nThis prop is provided as standard customProps are spread onto the outer containing element which is not the html select in this case."))),(0,a.mdx)(pe.X2,{key:"ROW4",mdxType:"Row"},(0,a.mdx)(pe.O,{mdxType:"PropNameCell"},"defaultValue"),(0,a.mdx)(pe.Di,{mdxType:"TypeCell"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"unionOf: [\n  type: 'number',\n  type: 'string',\n],\n"))),(0,a.mdx)(pe.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,a.mdx)(pe.mW,{mdxType:"DefaultValueCell"},(0,a.mdx)("p",null,"none")),(0,a.mdx)(pe.Ex,{mdxType:"DescriptionCell"},(0,a.mdx)("p",null,"The default value of the select. Can be a string, or number."))),(0,a.mdx)(pe.X2,{key:"ROW5",mdxType:"Row"},(0,a.mdx)(pe.O,{mdxType:"PropNameCell"},"disabled"),(0,a.mdx)(pe.Di,{mdxType:"TypeCell"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"bool\n"))),(0,a.mdx)(pe.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,a.mdx)(pe.mW,{mdxType:"DefaultValueCell"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"false\n"))),(0,a.mdx)(pe.Ex,{mdxType:"DescriptionCell"},(0,a.mdx)("p",null,"Whether the input is disabled."))),(0,a.mdx)(pe.X2,{key:"ROW6",mdxType:"Row"},(0,a.mdx)(pe.O,{mdxType:"PropNameCell"},"id"),(0,a.mdx)(pe.Di,{mdxType:"TypeCell"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"string\n"))),(0,a.mdx)(pe.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,a.mdx)(pe.mW,{mdxType:"DefaultValueCell"},(0,a.mdx)("p",null,"none")),(0,a.mdx)(pe.Ex,{mdxType:"DescriptionCell"},(0,a.mdx)("p",null,"The Select identifier to be applied to the html select node."))),(0,a.mdx)(pe.X2,{key:"ROW7",mdxType:"Row"},(0,a.mdx)(pe.O,{mdxType:"PropNameCell"},"isFilterStyle"),(0,a.mdx)(pe.Di,{mdxType:"TypeCell"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"bool\n"))),(0,a.mdx)(pe.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,a.mdx)(pe.mW,{mdxType:"DefaultValueCell"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"false\n"))),(0,a.mdx)(pe.Ex,{mdxType:"DescriptionCell"},(0,a.mdx)("p",null,"Whether the select input should use the filter style display, forcing a value to always be selected.\nThis also removes the placeholder and removes the ability for user to clear the value, returning the select to browser-native behavior."))),(0,a.mdx)(pe.X2,{key:"ROW8",mdxType:"Row"},(0,a.mdx)(pe.O,{mdxType:"PropNameCell"},"isInvalid"),(0,a.mdx)(pe.Di,{mdxType:"TypeCell"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"bool\n"))),(0,a.mdx)(pe.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,a.mdx)(pe.mW,{mdxType:"DefaultValueCell"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"false\n"))),(0,a.mdx)(pe.Ex,{mdxType:"DescriptionCell"},(0,a.mdx)("p",null,"Whether the input is invalid."))),(0,a.mdx)(pe.X2,{key:"ROW9",mdxType:"Row"},(0,a.mdx)(pe.O,{mdxType:"PropNameCell"},"isIncomplete"),(0,a.mdx)(pe.Di,{mdxType:"TypeCell"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"bool\n"))),(0,a.mdx)(pe.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,a.mdx)(pe.mW,{mdxType:"DefaultValueCell"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"false\n"))),(0,a.mdx)(pe.Ex,{mdxType:"DescriptionCell"},(0,a.mdx)("p",null,"Whether the field displays as Incomplete. Use when no value has been provided. ",(0,a.mdx)("em",{parentName:"p"},"(usage note: ",(0,a.mdx)("inlineCode",{parentName:"em"},"required")," must also be set)"),"."))),(0,a.mdx)(pe.X2,{key:"ROW10",mdxType:"Row"},(0,a.mdx)(pe.O,{mdxType:"PropNameCell"},"onChange"),(0,a.mdx)(pe.Di,{mdxType:"TypeCell"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"func\n"))),(0,a.mdx)(pe.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,a.mdx)(pe.mW,{mdxType:"DefaultValueCell"},(0,a.mdx)("p",null,"none")),(0,a.mdx)(pe.Ex,{mdxType:"DescriptionCell"},(0,a.mdx)("p",null,"Callback function triggered when the select value changes. function(event)"))),(0,a.mdx)(pe.X2,{key:"ROW11",mdxType:"Row"},(0,a.mdx)(pe.O,{mdxType:"PropNameCell"},"options"),(0,a.mdx)(pe.Di,{mdxType:"TypeCell"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"arrayOf: [{\n  unionOf: [\n    type: 'custom',\n    type: 'custom',\n  ],\n}],\n"))),(0,a.mdx)(pe.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,a.mdx)(pe.mW,{mdxType:"DefaultValueCell"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"[]\n"))),(0,a.mdx)(pe.Ex,{mdxType:"DescriptionCell"},(0,a.mdx)("p",null,"The array of select options and opt groups."))),(0,a.mdx)(pe.X2,{key:"ROW12",mdxType:"Row"},(0,a.mdx)(pe.O,{mdxType:"PropNameCell"},"refCallback"),(0,a.mdx)(pe.Di,{mdxType:"TypeCell"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"func\n"))),(0,a.mdx)(pe.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,a.mdx)(pe.mW,{mdxType:"DefaultValueCell"},(0,a.mdx)("p",null,"none")),(0,a.mdx)(pe.Ex,{mdxType:"DescriptionCell"},(0,a.mdx)("p",null,"Callback ref to pass into the select input component."))),(0,a.mdx)(pe.X2,{key:"ROW13",mdxType:"Row"},(0,a.mdx)(pe.O,{mdxType:"PropNameCell"},"required"),(0,a.mdx)(pe.Di,{mdxType:"TypeCell"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"bool\n"))),(0,a.mdx)(pe.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,a.mdx)(pe.mW,{mdxType:"DefaultValueCell"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"false\n"))),(0,a.mdx)(pe.Ex,{mdxType:"DescriptionCell"},(0,a.mdx)("p",null,"Whether the field is required."))),(0,a.mdx)(pe.X2,{key:"ROW14",mdxType:"Row"},(0,a.mdx)(pe.O,{mdxType:"PropNameCell"},"value"),(0,a.mdx)(pe.Di,{mdxType:"TypeCell"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"unionOf: [\n  type: 'number',\n  type: 'string',\n],\n"))),(0,a.mdx)(pe.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,a.mdx)(pe.mW,{mdxType:"DefaultValueCell"},(0,a.mdx)("p",null,"none")),(0,a.mdx)(pe.Ex,{mdxType:"DescriptionCell"},(0,a.mdx)("p",null,"The value of the select. Can be a string or number.")))))}ye.isMDXComponent=!0;var ve=n(11709),be=n(77720),ge=["components"];function Oe(){return Oe=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var l in n)Object.prototype.hasOwnProperty.call(n,l)&&(e[l]=n[l])}return e},Oe.apply(this,arguments)}function he(e,t){if(null==e)return{};var n,l,a=function(e,t){if(null==e)return{};var n,l,a={},r=Object.keys(e);for(l=0;l<r.length;l++)n=r[l],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(l=0;l<r.length;l++)n=r[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var Ne={},Se="wrapper";function Te(e){var t=e.components,n=he(e,ge);return(0,a.mdx)(Se,Oe({},Ne,n,{components:t,mdxType:"MDXLayout"}),(0,a.mdx)(r.C,{mdxType:"Badge"}),(0,a.mdx)("h1",{id:"terra-form-native-select"},"Terra Form Native Select"),(0,a.mdx)("p",null,"The NativeSelect component provides a visually-masked browser native select control to align closer with theme styles."),(0,a.mdx)("p",null,"Accessibility issues exist with custom select implementations, so the NativeSelect should be the used exclusively instead of the current default select implementation."),(0,a.mdx)("h2",{id:"getting-started"},"Getting Started"),(0,a.mdx)("ul",null,(0,a.mdx)("li",{parentName:"ul"},"Install with ",(0,a.mdx)("a",{parentName:"li",href:"https://www.npmjs.com/"},"npmjs"),":",(0,a.mdx)("ul",{parentName:"li"},(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("inlineCode",{parentName:"li"},"npm install terra-form-select"))))),(0,a.mdx)("h2",{id:"component-features"},"Component Features"),(0,a.mdx)("ul",null,(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("a",{parentName:"li",href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#cross-browser-support"},"Cross-Browser Support")),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("a",{parentName:"li",href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#responsive-support"},"Responsive Support")),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("a",{parentName:"li",href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#mobile-support"},"Mobile Support")),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("a",{parentName:"li",href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#internationalization-i18n"},"Internationalization Support")),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("a",{parentName:"li",href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#internationalization-i18n"},"Localization Support")),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("a",{parentName:"li",href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#ltr--rtl"},"LTR/RTL Support"))),(0,a.mdx)("p",null,(0,a.mdx)("a",{parentName:"p",href:"https://github.com/cerner/terra-core/tree/master/packages/terra-form-select"},"View component source code")),(0,a.mdx)("h2",{id:"examples"},"Examples"),(0,a.mdx)(ne,{title:"Create an Uncontrolled Select",description:"An example of implementing an uncontrolled Select.",mdxType:"UncontrolledExample"}),(0,a.mdx)(x,{title:"Create a Controlled Select",description:"An example of implementing a controlled Select.",mdxType:"ControlledExample"}),(0,a.mdx)(_,{title:"OptGroup",description:"An OptGroup provides a way to group options together.",mdxType:"OptGroupExample"}),(0,a.mdx)(h,{title:"Disabled",mdxType:"DisabledExample"}),(0,a.mdx)(w,{title:"Incomplete",description:"Applies theme-specific styling for incomplete. ***Note: Only use incomplete if given specific guidance, reserved for specific applications when no value has been provided. Not for general use.***",mdxType:"IncompleteExample"}),(0,a.mdx)(V,{title:"Invalid",description:"Applies theme-specific styling for invalid. Will also display error text when used with a Field.",mdxType:"InvalidExample"}),(0,a.mdx)($,{title:"Filter Style",description:"For special use: an example of implementing a select outside of form fields (e.g. in a filter bar), which removes the placeholder, prevents the ability to be cleared, and forces a value to always be selected.",mdxType:"FilterStyleExample"}),(0,a.mdx)(me,{title:"Disabled Options",description:"An example of implementing Select with disabled options",mdxType:"DisabledOptionsExample"}),(0,a.mdx)("h2",{id:"props"},"Props"),(0,a.mdx)("h3",{id:"native-select-option"},"Native Select Option"),(0,a.mdx)(ve.Z,{mdxType:"NativeOptionsPropsTable"}),(0,a.mdx)("h3",{id:"native-select-optgroup"},"Native Select OptGroup"),(0,a.mdx)(be.Z,{mdxType:"NativeOptGroupsPropsTable"}),(0,a.mdx)("h3",{id:"native-select"},"Native Select"),(0,a.mdx)(ye,{mdxType:"NativeSelectPropsTable"}))}Te.isMDXComponent=!0}}]);