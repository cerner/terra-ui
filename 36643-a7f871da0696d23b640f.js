"use strict";(self.webpackChunkterra_ui=self.webpackChunkterra_ui||[]).push([[36643],{85976:function(e,t,n){function r(e){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(e)}t.Z=void 0;var l=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==r(e)&&"function"!=typeof e)return{default:e};var n=o(t);if(n&&n.has(e))return n.get(e);var l={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if("default"!==i&&Object.prototype.hasOwnProperty.call(e,i)){var p=a?Object.getOwnPropertyDescriptor(e,i):null;p&&(p.get||p.set)?Object.defineProperty(l,i,p):l[i]=e[i]}l.default=e,n&&n.set(e,l);return l}(n(67294)),a=n(36286);function o(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(o=function(e){return e?n:t})(e)}function i(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,l,a,o,i=[],p=!0,u=!1;try{if(a=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;p=!1}else for(;!(p=(r=a.call(n)).done)&&(i.push(r.value),i.length!==t);p=!0);}catch(e){u=!0,l=e}finally{try{if(!p&&null!=n.return&&(o=n.return(),Object(o)!==o))return}finally{if(u)throw l}}return i}}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return p(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return p(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function p(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var u=function(){var e=i((0,l.useState)("No option clicked"),2),t=e[0],n=e[1];return l.default.createElement(l.default.Fragment,null,l.default.createElement(a.SplitButton,{primaryOptionLabel:"Primary Option",onSelect:function(){return n("Primary option clicked")},isBlock:!0},l.default.createElement(a.Item,{label:"1st Option",onSelect:function(){return n("1st option clicked")}}),l.default.createElement(a.Item,{label:"2nd Option",onSelect:function(){return n("2nd option clicked")}}),l.default.createElement(a.Item,{label:"3rd Option",onSelect:function(){return n("3rd option clicked")}}),l.default.createElement(a.Item,{label:"4th Option",onSelect:function(){return n("4th option clicked")}})),l.default.createElement("p",null,t))};t.Z=u},53740:function(e,t,n){function r(e){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(e)}t.Z=void 0;var l=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==r(e)&&"function"!=typeof e)return{default:e};var n=o(t);if(n&&n.has(e))return n.get(e);var l={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if("default"!==i&&Object.prototype.hasOwnProperty.call(e,i)){var p=a?Object.getOwnPropertyDescriptor(e,i):null;p&&(p.get||p.set)?Object.defineProperty(l,i,p):l[i]=e[i]}l.default=e,n&&n.set(e,l);return l}(n(67294)),a=n(36286);function o(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(o=function(e){return e?n:t})(e)}function i(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,l,a,o,i=[],p=!0,u=!1;try{if(a=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;p=!1}else for(;!(p=(r=a.call(n)).done)&&(i.push(r.value),i.length!==t);p=!0);}catch(e){u=!0,l=e}finally{try{if(!p&&null!=n.return&&(o=n.return(),Object(o)!==o))return}finally{if(u)throw l}}return i}}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return p(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return p(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function p(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var u=function(){var e=i((0,l.useState)("No option clicked"),2),t=e[0],n=e[1];return l.default.createElement(l.default.Fragment,null,l.default.createElement(a.SplitButton,{primaryOptionLabel:"Reply",onSelect:function(){return n("Reply clicked")},buttonAttrs:{"aria-label":"default split"}},l.default.createElement(a.Item,{label:"Reply All",onSelect:function(){return n("Reply All clicked")}}),l.default.createElement(a.Item,{label:"Forward",onSelect:function(){return n("Forward clicked")}}),l.default.createElement(a.Item,{label:"Reply in 10 minutes",onSelect:function(){return n("Reply in 10 minutes clicked")}}),l.default.createElement(a.Item,{label:"Selective Reply",onSelect:function(){return n("Selective Reply clicked")}})),l.default.createElement("p",null,t))};t.Z=u},44693:function(e,t,n){function r(e){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(e)}t.Z=void 0;var l=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==r(e)&&"function"!=typeof e)return{default:e};var n=o(t);if(n&&n.has(e))return n.get(e);var l={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if("default"!==i&&Object.prototype.hasOwnProperty.call(e,i)){var p=a?Object.getOwnPropertyDescriptor(e,i):null;p&&(p.get||p.set)?Object.defineProperty(l,i,p):l[i]=e[i]}l.default=e,n&&n.set(e,l);return l}(n(67294)),a=n(36286);function o(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(o=function(e){return e?n:t})(e)}function i(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,l,a,o,i=[],p=!0,u=!1;try{if(a=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;p=!1}else for(;!(p=(r=a.call(n)).done)&&(i.push(r.value),i.length!==t);p=!0);}catch(e){u=!0,l=e}finally{try{if(!p&&null!=n.return&&(o=n.return(),Object(o)!==o))return}finally{if(u)throw l}}return i}}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return p(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return p(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function p(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var u=function(){var e=i((0,l.useState)("No option clicked"),2),t=e[0],n=e[1];return l.default.createElement(l.default.Fragment,null,l.default.createElement(a.SplitButton,{primaryOptionLabel:"Primary Option",onSelect:function(){return n("Primary option clicked")},isDisabled:!0},l.default.createElement(a.Item,{label:"1st Option",onSelect:function(){return n("1st option clicked")}}),l.default.createElement(a.Item,{label:"2nd Option",onSelect:function(){return n("2nd option clicked")}}),l.default.createElement(a.Item,{label:"3rd Option",onSelect:function(){return n("3rd option clicked")}}),l.default.createElement(a.Item,{label:"4th Option",onSelect:function(){return n("4th option clicked")}})),l.default.createElement("p",null,t))};t.Z=u},69498:function(e,t,n){function r(e){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(e)}t.Z=void 0;var l=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==r(e)&&"function"!=typeof e)return{default:e};var n=o(t);if(n&&n.has(e))return n.get(e);var l={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if("default"!==i&&Object.prototype.hasOwnProperty.call(e,i)){var p=a?Object.getOwnPropertyDescriptor(e,i):null;p&&(p.get||p.set)?Object.defineProperty(l,i,p):l[i]=e[i]}l.default=e,n&&n.set(e,l);return l}(n(67294)),a=n(36286);function o(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(o=function(e){return e?n:t})(e)}function i(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,l,a,o,i=[],p=!0,u=!1;try{if(a=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;p=!1}else for(;!(p=(r=a.call(n)).done)&&(i.push(r.value),i.length!==t);p=!0);}catch(e){u=!0,l=e}finally{try{if(!p&&null!=n.return&&(o=n.return(),Object(o)!==o))return}finally{if(u)throw l}}return i}}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return p(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return p(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function p(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var u=function(){var e=i((0,l.useState)("No option clicked"),2),t=e[0],n=e[1];return l.default.createElement(l.default.Fragment,null,l.default.createElement(a.SplitButton,{primaryOptionLabel:"Reply",onSelect:function(){return n("Reply clicked")},variant:"ghost"},l.default.createElement(a.Item,{label:"Reply All",onSelect:function(){return n("Reply All clicked")}}),l.default.createElement(a.Item,{label:"Forward",onSelect:function(){return n("Forward clicked")}}),l.default.createElement(a.Item,{label:"Reply in 10 minutes",onSelect:function(){return n("Reply in 10 minutes clicked")}}),l.default.createElement(a.Item,{label:"Selective Reply",onSelect:function(){return n("Selective Reply clicked")}})),l.default.createElement("p",null,t))};t.Z=u},49271:function(e,t,n){var r=n(64836),l=n(18698);t.Z=void 0;var a=r(n(27424)),o=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==l(e)&&"function"!=typeof e)return{default:e};var n=f(t);if(n&&n.has(e))return n.get(e);var r={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var i=a?Object.getOwnPropertyDescriptor(e,o):null;i&&(i.get||i.set)?Object.defineProperty(r,o,i):r[o]=e[o]}r.default=e,n&&n.set(e,r);return r}(n(67294)),i=r(n(45697)),p=r(n(47166)),u=n(21538),c=r(n(33864)),m=r(n(23399)),d=n(51051),s=r(n(53560));function f(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(f=function(e){return e?n:t})(e)}var y=p.default.bind(s.default),x={example:i.default.element,exampleSrc:i.default.element,exampleCssSrc:i.default.element,title:i.default.string,description:i.default.node,isExpanded:i.default.bool},b=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","true")},g=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","false")},v=function(e){var t=e.example,n=e.exampleSrc,r=e.exampleCssSrc,l=e.title,i=e.description,p=e.isExpanded,s=(0,o.useState)(p),f=(0,a.default)(s,2),x=f[0],v=f[1],h=(0,o.useState)(!1),O=(0,a.default)(h,2),S=O[0],T=O[1],w=o.default.useContext(u.ThemeContext),j=void 0!==r,E=function(){T(!S),x&&v(!x)},N=function(){v(!x),S&&T(!S)},k=function(e,t){e.nativeEvent.keyCode!==d.KEY_SPACE&&e.nativeEvent.keyCode!==d.KEY_RETURN||(e.preventDefault(),t())};return o.default.createElement("div",{className:y("template",w.className)},o.default.createElement("div",{className:y("header")},l&&o.default.createElement("h2",{className:y("title")},l)),o.default.createElement("div",{className:y("content")},i&&o.default.createElement("div",{className:y("description")},i),t),o.default.createElement("div",{className:y("footer")},n?o.default.createElement("div",{className:y("button-container")},j&&o.default.createElement("button",{type:"button",className:y("css-toggle","item",{"is-selected":S}),onClick:E,onKeyDown:function(e){return k(e,E)},onBlur:b,onMouseDown:g,tabIndex:0,"data-focus-styles-enabled":!0},o.default.createElement(c.default,{className:y("chevron")}),o.default.createElement("span",null,"CSS"),o.default.createElement(m.default,{className:y("chevron")})),o.default.createElement("button",{type:"button",className:y("code-toggle","item",{"is-selected":x}),onClick:N,onKeyDown:function(e){return k(e,N)},onBlur:b,onMouseDown:g,tabIndex:0,"data-focus-styles-enabled":!0},o.default.createElement(c.default,{className:y("chevron")}),o.default.createElement("span",null,"Code"),o.default.createElement(m.default,{className:y("chevron")}))):null,o.default.createElement("div",null,S&&o.default.createElement("div",{className:y("css")},r),x&&o.default.createElement("div",{className:y("code")},n))))};v.propTypes=x,v.defaultProps={isExpanded:!1};var h=v;t.Z=h},36643:function(e,t,n){n.r(t),n.d(t,{default:function(){return Q}});var r=n(67294),l=n(81254),a=n(20953),o=n(53740),i=["components"];function p(){return p=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},p.apply(this,arguments)}function u(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var c={};function m(e){var t=e.components,n=u(e,i);return(0,l.mdx)("wrapper",p({},c,n,{components:t,mdxType:"MDXLayout"}),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React, { useState } from 'react';\nimport { Item, SplitButton } from 'terra-dropdown-button';\n\nconst Example = () => {\n  const [message, setMessage] = useState('No option clicked');\n\n  return (\n    <React.Fragment>\n      <SplitButton\n        primaryOptionLabel=\"Reply\"\n        onSelect={() => setMessage('Reply clicked')}\n        buttonAttrs={{\n          'aria-label': 'default split',\n        }}\n      >\n        <Item label=\"Reply All\" onSelect={() => setMessage('Reply All clicked')} />\n        <Item label=\"Forward\" onSelect={() => setMessage('Forward clicked')} />\n        <Item label=\"Reply in 10 minutes\" onSelect={() => setMessage('Reply in 10 minutes clicked')} />\n        <Item label=\"Selective Reply\" onSelect={() => setMessage('Selective Reply clicked')} />\n      </SplitButton>\n      <p>{message}</p>\n    </React.Fragment>\n  );\n};\n\nexport default Example;\n\n")))}m.isMDXComponent=!0;var d=n(49271),s=function(e){var t=e.title,n=e.description,l=e.isExpanded;return r.createElement(d.Z,{title:t||"Default Split Button",description:n,example:r.createElement(o.Z,null),exampleSrc:r.createElement(m,null),isExpanded:l})},f=n(69498),y=["components"];function x(){return x=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},x.apply(this,arguments)}function b(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var g={};function v(e){var t=e.components,n=b(e,y);return(0,l.mdx)("wrapper",x({},g,n,{components:t,mdxType:"MDXLayout"}),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React, { useState } from 'react';\nimport { Item, SplitButton } from 'terra-dropdown-button';\n\nconst GhostSplitButton = () => {\n  const [message, setMessage] = useState('No option clicked');\n\n  return (\n    <React.Fragment>\n      <SplitButton\n        primaryOptionLabel=\"Reply\"\n        onSelect={() => setMessage('Reply clicked')}\n        variant=\"ghost\"\n      >\n        <Item label=\"Reply All\" onSelect={() => setMessage('Reply All clicked')} />\n        <Item label=\"Forward\" onSelect={() => setMessage('Forward clicked')} />\n        <Item label=\"Reply in 10 minutes\" onSelect={() => setMessage('Reply in 10 minutes clicked')} />\n        <Item label=\"Selective Reply\" onSelect={() => setMessage('Selective Reply clicked')} />\n      </SplitButton>\n      <p>{message}</p>\n    </React.Fragment>\n  );\n};\n\nexport default GhostSplitButton;\n\n")))}v.isMDXComponent=!0;var h=function(e){var t=e.title,n=e.description,l=e.isExpanded;return r.createElement(d.Z,{title:t||"Ghost Split Button",description:n,example:r.createElement(f.Z,null),exampleSrc:r.createElement(v,null),isExpanded:l})},O=n(44693),S=["components"];function T(){return T=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},T.apply(this,arguments)}function w(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var j={};function E(e){var t=e.components,n=w(e,S);return(0,l.mdx)("wrapper",T({},j,n,{components:t,mdxType:"MDXLayout"}),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React, { useState } from 'react';\nimport { Item, SplitButton } from 'terra-dropdown-button';\n\nconst Example = () => {\n  const [message, setMessage] = useState('No option clicked');\n\n  return (\n    <React.Fragment>\n      <SplitButton\n        primaryOptionLabel=\"Primary Option\"\n        onSelect={() => setMessage('Primary option clicked')}\n        isDisabled\n      >\n        <Item label=\"1st Option\" onSelect={() => setMessage('1st option clicked')} />\n        <Item label=\"2nd Option\" onSelect={() => setMessage('2nd option clicked')} />\n        <Item label=\"3rd Option\" onSelect={() => setMessage('3rd option clicked')} />\n        <Item label=\"4th Option\" onSelect={() => setMessage('4th option clicked')} />\n      </SplitButton>\n      <p>{message}</p>\n    </React.Fragment>\n  );\n};\n\nexport default Example;\n\n")))}E.isMDXComponent=!0;var N=function(e){var t=e.title,n=e.description,l=e.isExpanded;return r.createElement(d.Z,{title:t||"Disabled Split Button",description:n,example:r.createElement(O.Z,null),exampleSrc:r.createElement(E,null),isExpanded:l})},k=n(85976),C=["components"];function R(){return R=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},R.apply(this,arguments)}function _(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var D={};function P(e){var t=e.components,n=_(e,C);return(0,l.mdx)("wrapper",R({},D,n,{components:t,mdxType:"MDXLayout"}),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React, { useState } from 'react';\nimport { Item, SplitButton } from 'terra-dropdown-button';\n\nconst Example = () => {\n  const [message, setMessage] = useState('No option clicked');\n\n  return (\n    <React.Fragment>\n      <SplitButton\n        primaryOptionLabel=\"Primary Option\"\n        onSelect={() => setMessage('Primary option clicked')}\n        isBlock\n      >\n        <Item label=\"1st Option\" onSelect={() => setMessage('1st option clicked')} />\n        <Item label=\"2nd Option\" onSelect={() => setMessage('2nd option clicked')} />\n        <Item label=\"3rd Option\" onSelect={() => setMessage('3rd option clicked')} />\n        <Item label=\"4th Option\" onSelect={() => setMessage('4th option clicked')} />\n      </SplitButton>\n      <p>{message}</p>\n    </React.Fragment>\n  );\n};\n\nexport default Example;\n\n")))}P.isMDXComponent=!0;var M=function(e){var t=e.title,n=e.description,l=e.isExpanded;return r.createElement(d.Z,{title:t||"Block Split Button",description:n,example:r.createElement(k.Z,null),exampleSrc:r.createElement(P,null),isExpanded:l})},I=n(78530),B=["components"];function A(){return A=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},A.apply(this,arguments)}function W(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var X={},q="wrapper";function F(e){var t=e.components,n=W(e,B);return(0,l.mdx)(q,A({},X,n,{components:t,mdxType:"MDXLayout"}),(0,l.mdx)(I.ZP,{mdxType:"PropsTable"},(0,l.mdx)(I.X2,{key:"ROW1",mdxType:"Row"},(0,l.mdx)(I.O,{mdxType:"PropNameCell"},"children"),(0,l.mdx)(I.Di,{mdxType:"TypeCell"},(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-javascript"},"node\n"))),(0,l.mdx)(I.dS,{isRequired:!0,mdxType:"RequiredCell"}),(0,l.mdx)(I.mW,{mdxType:"DefaultValueCell"},(0,l.mdx)("p",null,"none")),(0,l.mdx)(I.Ex,{mdxType:"DescriptionCell"},(0,l.mdx)("p",null,"The options to display in the dropdown. Should be comprised of the subcomponent ",(0,l.mdx)("inlineCode",{parentName:"p"},"Item"),"."))),(0,l.mdx)(I.X2,{key:"ROW2",mdxType:"Row"},(0,l.mdx)(I.O,{mdxType:"PropNameCell"},"isBlock"),(0,l.mdx)(I.Di,{mdxType:"TypeCell"},(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-javascript"},"bool\n"))),(0,l.mdx)(I.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,l.mdx)(I.mW,{mdxType:"DefaultValueCell"},(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-javascript"},"false\n"))),(0,l.mdx)(I.Ex,{mdxType:"DescriptionCell"},(0,l.mdx)("p",null,"Determines whether the component should have block styles applied. The dropdown will match the component's width."))),(0,l.mdx)(I.X2,{key:"ROW3",mdxType:"Row"},(0,l.mdx)(I.O,{mdxType:"PropNameCell"},"isCompact"),(0,l.mdx)(I.Di,{mdxType:"TypeCell"},(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-javascript"},"bool\n"))),(0,l.mdx)(I.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,l.mdx)(I.mW,{mdxType:"DefaultValueCell"},(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-javascript"},"false\n"))),(0,l.mdx)(I.Ex,{mdxType:"DescriptionCell"},(0,l.mdx)("p",null,"Whether or not the button has reduced padding for use in tables and single-row lists."))),(0,l.mdx)(I.X2,{key:"ROW4",mdxType:"Row"},(0,l.mdx)(I.O,{mdxType:"PropNameCell"},"isDisabled"),(0,l.mdx)(I.Di,{mdxType:"TypeCell"},(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-javascript"},"bool\n"))),(0,l.mdx)(I.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,l.mdx)(I.mW,{mdxType:"DefaultValueCell"},(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-javascript"},"false\n"))),(0,l.mdx)(I.Ex,{mdxType:"DescriptionCell"},(0,l.mdx)("p",null,"Determines whether the primary button and expanding the dropdown should be disabled."))),(0,l.mdx)(I.X2,{key:"ROW5",mdxType:"Row"},(0,l.mdx)(I.O,{mdxType:"PropNameCell"},"primaryOptionLabel"),(0,l.mdx)(I.Di,{mdxType:"TypeCell"},(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-javascript"},"string\n"))),(0,l.mdx)(I.dS,{isRequired:!0,mdxType:"RequiredCell"}),(0,l.mdx)(I.mW,{mdxType:"DefaultValueCell"},(0,l.mdx)("p",null,"none")),(0,l.mdx)(I.Ex,{mdxType:"DescriptionCell"},(0,l.mdx)("p",null,"Sets the text that will be shown on the primary button which is outside the dropdown."))),(0,l.mdx)(I.X2,{key:"ROW6",mdxType:"Row"},(0,l.mdx)(I.O,{mdxType:"PropNameCell"},"onSelect"),(0,l.mdx)(I.Di,{mdxType:"TypeCell"},(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-javascript"},"func\n"))),(0,l.mdx)(I.dS,{isRequired:!0,mdxType:"RequiredCell"}),(0,l.mdx)(I.mW,{mdxType:"DefaultValueCell"},(0,l.mdx)("p",null,"none")),(0,l.mdx)(I.Ex,{mdxType:"DescriptionCell"},(0,l.mdx)("p",null,"What will be called when the primary button is pressed."))),(0,l.mdx)(I.X2,{key:"ROW7",mdxType:"Row"},(0,l.mdx)(I.O,{mdxType:"PropNameCell"},"variant"),(0,l.mdx)(I.Di,{mdxType:"TypeCell"},(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-javascript"},"enum: [\n  'neutral'\n  'ghost'\n],\n"))),(0,l.mdx)(I.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,l.mdx)(I.mW,{mdxType:"DefaultValueCell"},(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-javascript"},"'neutral'\n"))),(0,l.mdx)(I.Ex,{mdxType:"DescriptionCell"},(0,l.mdx)("p",null,"Sets the styles of the component, one of ",(0,l.mdx)("inlineCode",{parentName:"p"},"neutral"),", or ",(0,l.mdx)("inlineCode",{parentName:"p"},"ghost"),"."))),(0,l.mdx)(I.X2,{key:"ROW8",mdxType:"Row"},(0,l.mdx)(I.O,{mdxType:"PropNameCell"},"metaData"),(0,l.mdx)(I.Di,{mdxType:"TypeCell"},(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-javascript"},"object\n"))),(0,l.mdx)(I.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,l.mdx)(I.mW,{mdxType:"DefaultValueCell"},(0,l.mdx)("p",null,"none")),(0,l.mdx)(I.Ex,{mdxType:"DescriptionCell"},(0,l.mdx)("p",null,"The associated metaData to be provided in the onSelect callback."))),(0,l.mdx)(I.X2,{key:"ROW9",mdxType:"Row"},(0,l.mdx)(I.O,{mdxType:"PropNameCell"},"buttonAttrs"),(0,l.mdx)(I.Di,{mdxType:"TypeCell"},(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-javascript"},"object\n"))),(0,l.mdx)(I.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,l.mdx)(I.mW,{mdxType:"DefaultValueCell"},(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-javascript"},"{}\n"))),(0,l.mdx)(I.Ex,{mdxType:"DescriptionCell"},(0,l.mdx)("p",null,"Sets the custom properties for button.")))))}F.isMDXComponent=!0;var L=["components"];function Z(){return Z=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Z.apply(this,arguments)}function V(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var G={},U="wrapper";function K(e){var t=e.components,n=V(e,L);return(0,l.mdx)(U,Z({},G,n,{components:t,mdxType:"MDXLayout"}),(0,l.mdx)(I.ZP,{mdxType:"PropsTable"},(0,l.mdx)(I.X2,{key:"ROW1",mdxType:"Row"},(0,l.mdx)(I.O,{mdxType:"PropNameCell"},"label"),(0,l.mdx)(I.Di,{mdxType:"TypeCell"},(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-javascript"},"string\n"))),(0,l.mdx)(I.dS,{isRequired:!0,mdxType:"RequiredCell"}),(0,l.mdx)(I.mW,{mdxType:"DefaultValueCell"},(0,l.mdx)("p",null,"none")),(0,l.mdx)(I.Ex,{mdxType:"DescriptionCell"},(0,l.mdx)("p",null,"The text that is displayed on the option."))),(0,l.mdx)(I.X2,{key:"ROW2",mdxType:"Row"},(0,l.mdx)(I.O,{mdxType:"PropNameCell"},"metaData"),(0,l.mdx)(I.Di,{mdxType:"TypeCell"},(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-javascript"},"object\n"))),(0,l.mdx)(I.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,l.mdx)(I.mW,{mdxType:"DefaultValueCell"},(0,l.mdx)("p",null,"none")),(0,l.mdx)(I.Ex,{mdxType:"DescriptionCell"},(0,l.mdx)("p",null,"The associated metaData to be provided in the onSelect callback."))),(0,l.mdx)(I.X2,{key:"ROW3",mdxType:"Row"},(0,l.mdx)(I.O,{mdxType:"PropNameCell"},"onSelect"),(0,l.mdx)(I.Di,{mdxType:"TypeCell"},(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-javascript"},"func\n"))),(0,l.mdx)(I.dS,{isRequired:!0,mdxType:"RequiredCell"}),(0,l.mdx)(I.mW,{mdxType:"DefaultValueCell"},(0,l.mdx)("p",null,"none")),(0,l.mdx)(I.Ex,{mdxType:"DescriptionCell"},(0,l.mdx)("p",null,"Function callback for when the appropriate click or key action is performed.\nCallback contains the javascript evnt and prop metadata, e.g. onSelect(event, metaData)")))))}K.isMDXComponent=!0;var z=["components"];function Y(){return Y=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Y.apply(this,arguments)}function $(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var H={},J="wrapper";function Q(e){var t=e.components,n=$(e,z);return(0,l.mdx)(J,Y({},H,n,{components:t,mdxType:"MDXLayout"}),(0,l.mdx)(a.C,{mdxType:"Badge"}),(0,l.mdx)("h1",{id:"split-button"},"Split Button"),(0,l.mdx)("p",null,"The Split Button provides the user with the ability to choose the primary action or an action from a listing of alternative actions.\nAn example is email. The primary action is ",(0,l.mdx)("em",{parentName:"p"},"reply"),", but the user can also ",(0,l.mdx)("em",{parentName:"p"},"forward")," or ",(0,l.mdx)("em",{parentName:"p"},"reply all"),". ",(0,l.mdx)("em",{parentName:"p"},"Reply")," would be the primary action, while ",(0,l.mdx)("em",{parentName:"p"},"forward")," and ",(0,l.mdx)("em",{parentName:"p"},"reply all")," would be contained inside the dropdown."),(0,l.mdx)("p",null,"Children must be the ",(0,l.mdx)("inlineCode",{parentName:"p"},"Item")," subcomponent for proper functionality and appearance."),(0,l.mdx)("h2",{id:"getting-started"},"Getting Started"),(0,l.mdx)("ul",null,(0,l.mdx)("li",{parentName:"ul"},"Install with ",(0,l.mdx)("a",{parentName:"li",href:"https://www.npmjs.com/"},"npmjs"),":",(0,l.mdx)("ul",{parentName:"li"},(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("inlineCode",{parentName:"li"},"npm install terra-dropdown-button"))))),(0,l.mdx)("h2",{id:"implementation-notes"},"Implementation Notes:"),(0,l.mdx)("p",null,"The SplitButton component must be composed inside the ",(0,l.mdx)("a",{parentName:"p",href:"https://engineering.cerner.com/terra-core/components/terra-base/base/base"},"Base")," component with a locale in order for it to load the correct translation strings."),(0,l.mdx)("h2",{id:"usage"},"Usage"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-jsx"},"import { Item, SplitButton } from 'terra-dropdown-button';\n")),(0,l.mdx)("h2",{id:"component-features"},"Component Features"),(0,l.mdx)("ul",null,(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("a",{parentName:"li",href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#cross-browser-support"},"Cross-Browser Support")),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("a",{parentName:"li",href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#responsive-support"},"Responsive Support")),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("a",{parentName:"li",href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#mobile-support"},"Mobile Support")),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("a",{parentName:"li",href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#internationalization-i18n"},"Internationalization Support")),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("a",{parentName:"li",href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#ltr--rtl"},"LTR/RTL Support"))),(0,l.mdx)("h2",{id:"examples"},"Examples"),(0,l.mdx)(s,{mdxType:"DefaultSplitButton"}),(0,l.mdx)(h,{mdxType:"GhostSplitButton"}),(0,l.mdx)(N,{mdxType:"DisabledSplitButton"}),(0,l.mdx)(M,{mdxType:"BlockSplitButton"}),(0,l.mdx)("h2",{id:"split-button-props"},"Split Button Props"),(0,l.mdx)(F,{mdxType:"SplitButtonPropsTable"}),(0,l.mdx)("h2",{id:"item-props"},"Item Props"),(0,l.mdx)(K,{mdxType:"ItemPropsTable"}))}Q.isMDXComponent=!0},20953:function(e,t,n){n.d(t,{C:function(){return a}});var r=n(67294),l=n(22863),a=function(e){var t=e.url;return r.createElement(l.Z,{src:"https://github.com/cerner/terra-core/tree/main/packages/terra-dropdown-button",name:"terra-dropdown-button",version:"1.35.0",url:t})}},53560:function(e,t,n){n.r(t),t.default={"orion-fusion-theme":"ExampleTemplate-module__orion-fusion-theme___GzA23",template:"ExampleTemplate-module__template___a4uPk",header:"ExampleTemplate-module__header___iFXV3",content:"ExampleTemplate-module__content___48m4Q",description:"ExampleTemplate-module__description___NwBJo",footer:"ExampleTemplate-module__footer___GpSoG","button-container":"ExampleTemplate-module__button-container___rAD11",css:"ExampleTemplate-module__css___+jtk1",code:"ExampleTemplate-module__code___7rC6C","css-toggle":"ExampleTemplate-module__css-toggle___chHK7","code-toggle":"ExampleTemplate-module__code-toggle___TGlE-","is-selected":"ExampleTemplate-module__is-selected___0BYwS",item:"ExampleTemplate-module__item___8FTQq",chevron:"ExampleTemplate-module__chevron___VbY7N",title:"ExampleTemplate-module__title___r+nbJ","dynamic-content":"ExampleTemplate-module__dynamic-content___k+1H7"}},33864:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a(n(67294)),l=a(n(99139));function a(e){return e&&e.__esModule?e:{default:e}}function o(){return o=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o.apply(this,arguments)}var i=function(e){var t=o({},e);return r.default.createElement(l.default,t,r.default.createElement("path",{d:"M10.3 24L33.8 0l3.9 3.8L18 24l19.7 20.2-3.9 3.8z"}))};i.displayName="IconChevronLeft",i.defaultProps={className:"",viewBox:"0 0 48 48",xmlns:"http://www.w3.org/2000/svg","data-name":"Layer 1",isBidi:!0};var p=i;t.default=p}}]);