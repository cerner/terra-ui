"use strict";(self.webpackChunkterra_ui=self.webpackChunkterra_ui||[]).push([[88645],{88714:function(e,t,n){function r(e){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(e)}t.Z=void 0;var a,l=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=r(e)&&"function"!=typeof e)return{default:e};var n=u(t);if(n&&n.has(e))return n.get(e);var a={__proto__:null},l=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var i=l?Object.getOwnPropertyDescriptor(e,o):null;i&&(i.get||i.set)?Object.defineProperty(a,o,i):a[o]=e[o]}return a.default=e,n&&n.set(e,a),a}(n(67294)),o=n(34261),i=(a=n(80906))&&a.__esModule?a:{default:a};function u(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(u=function(e){return e?n:t})(e)}function d(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,a,l,o,i=[],u=!0,d=!1;try{if(l=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;u=!1}else for(;!(u=(r=l.call(n)).done)&&(i.push(r.value),i.length!==t);u=!0);}catch(e){d=!0,a=e}finally{try{if(!u&&null!=n.return&&(o=n.return(),Object(o)!==o))return}finally{if(d)throw a}}return i}}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return s(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return s(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function s(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}t.Z=function(){var e=d((0,l.useState)(""),2),t=e[0],n=e[1];return l.default.createElement(i.default,{onChange:function(e){return n(e)}},l.default.createElement(o.Placeholder,{title:t}))}},19784:function(e,t,n){function r(e){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(e)}t.Z=void 0;var a,l=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=r(e)&&"function"!=typeof e)return{default:e};var n=u(t);if(n&&n.has(e))return n.get(e);var a={__proto__:null},l=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var i=l?Object.getOwnPropertyDescriptor(e,o):null;i&&(i.get||i.set)?Object.defineProperty(a,o,i):a[o]=e[o]}return a.default=e,n&&n.set(e,a),a}(n(67294)),o=n(34261),i=(a=n(80906))&&a.__esModule?a:{default:a};function u(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(u=function(e){return e?n:t})(e)}function d(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,a,l,o,i=[],u=!0,d=!1;try{if(l=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;u=!1}else for(;!(u=(r=l.call(n)).done)&&(i.push(r.value),i.length!==t);u=!0);}catch(e){d=!0,a=e}finally{try{if(!u&&null!=n.return&&(o=n.return(),Object(o)!==o))return}finally{if(d)throw a}}return i}}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return s(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return s(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function s(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}t.Z=function(){var e=d((0,l.useState)(""),2),t=e[0],n=e[1];return l.default.createElement(i.default,{onResize:function(e){return n(e)}},l.default.createElement(o.Placeholder,{title:t}))}},22863:function(e,t,n){var r=n(64836);t.Z=void 0;var a=r(n(67294)),l=r(n(45697)),o=r(n(47166)),i=r(n(17422)),u=o.default.bind(i.default),d={name:l.default.string.isRequired,src:l.default.string,url:l.default.string,version:l.default.string.isRequired},s=function(e){var t=e.src,n=e.name,r=e.url,l=e.version,o=a.default.createElement("a",{className:u("badge"),href:r||"https://www.npmjs.org/package/".concat(n,"/v/").concat(l)},a.default.createElement("span",{className:u("badge-name")},r?"package":"npm"),a.default.createElement("span",{className:u("badge-version")},"v".concat(l))),i=t?a.default.createElement("a",{className:u("badge"),href:t},a.default.createElement("span",{className:u("badge-name")},"github"),a.default.createElement("span",{className:u("badge-version")},"source")):void 0;return a.default.createElement("div",{className:u("badge-container")},o,i)};s.propTypes=d;var m=s;t.Z=m},49271:function(e,t,n){var r=n(64836),a=n(18698);t.Z=void 0;var l=r(n(27424)),o=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==a(e)&&"function"!=typeof e)return{default:e};var n=f(t);if(n&&n.has(e))return n.get(e);var r={},l=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var i=l?Object.getOwnPropertyDescriptor(e,o):null;i&&(i.get||i.set)?Object.defineProperty(r,o,i):r[o]=e[o]}r.default=e,n&&n.set(e,r);return r}(n(67294)),i=r(n(45697)),u=r(n(47166)),d=n(21538),s=r(n(33864)),m=r(n(23399)),c=n(51051),p=r(n(53560));function f(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(f=function(e){return e?n:t})(e)}var y=u.default.bind(p.default),x={example:i.default.element,exampleSrc:i.default.element,exampleCssSrc:i.default.element,title:i.default.string,description:i.default.node,isExpanded:i.default.bool},b=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","true")},h=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","false")},v=function(e){var t=e.example,n=e.exampleSrc,r=e.exampleCssSrc,a=e.title,i=e.description,u=e.isExpanded,p=(0,o.useState)(u),f=(0,l.default)(p,2),x=f[0],v=f[1],_=(0,o.useState)(!1),g=(0,l.default)(_,2),O=g[0],w=g[1],E=o.default.useContext(d.ThemeContext),T=void 0!==r,N=function(){w(!O),x&&v(!x)},j=function(){v(!x),O&&w(!O)},C=function(e,t){e.nativeEvent.keyCode!==c.KEY_SPACE&&e.nativeEvent.keyCode!==c.KEY_RETURN||(e.preventDefault(),t())};return o.default.createElement("div",{className:y("template",E.className)},o.default.createElement("div",{className:y("header")},a&&o.default.createElement("h2",{className:y("title")},a)),o.default.createElement("div",{className:y("content")},i&&o.default.createElement("div",{className:y("description")},i),t),o.default.createElement("div",{className:y("footer")},n?o.default.createElement("div",{className:y("button-container")},T&&o.default.createElement("button",{type:"button",className:y("css-toggle","item",{"is-selected":O}),onClick:N,onKeyDown:function(e){return C(e,N)},onBlur:b,onMouseDown:h,tabIndex:0,"data-focus-styles-enabled":!0},o.default.createElement(s.default,{className:y("chevron")}),o.default.createElement("span",null,"CSS"),o.default.createElement(m.default,{className:y("chevron")})),o.default.createElement("button",{type:"button",className:y("code-toggle","item",{"is-selected":x}),onClick:j,onKeyDown:function(e){return C(e,j)},onBlur:b,onMouseDown:h,tabIndex:0,"data-focus-styles-enabled":!0},o.default.createElement(s.default,{className:y("chevron")}),o.default.createElement("span",null,"Code"),o.default.createElement(m.default,{className:y("chevron")}))):null,o.default.createElement("div",null,O&&o.default.createElement("div",{className:y("css")},r),x&&o.default.createElement("div",{className:y("code")},n))))};v.propTypes=x,v.defaultProps={isExpanded:!1};var _=v;t.Z=_},40996:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=d(n(67294)),a=d(n(45697)),l=d(n(47166)),o=d(n(50026)),i=d(n(66983)),u=["children"];function d(e){return e&&e.__esModule?e:{default:e}}function s(){return s=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},s.apply(this,arguments)}function m(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=l.default.bind(i.default),p=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","true")},f=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","false")},y={children:a.default.string},x=function(e){var t=e.children,n=m(e,u),a=r.default.useContext(o.default),i=(0,l.default)(c(["button",a.className]),n.className);return r.default.createElement("button",s({},n,{type:"button",className:i,onBlur:p,onMouseDown:f,"data-focus-styles-enabled":!0}),t)};x.propTypes=y;t.default=x},59278:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=u(n(67294)),a=u(n(45697)),l=u(n(47166)),o=u(n(50026)),i=u(n(30866));function u(e){return e&&e.__esModule?e:{default:e}}var d=l.default.bind(i.default),s={ariaLevel:a.default.oneOf(["2","3","4","5","6"]),children:a.default.node,variant:a.default.oneOf(["ux-recommendation","caution","deprecation","maintenance","important","not-supported"])},m=function(e){var t=e.ariaLevel,n=e.variant,a=e.children,l=r.default.useContext(o.default);return r.default.createElement("div",{className:d("notice",n,l.className)},r.default.createElement("div",{className:d("accessory"),"aria-hidden":"true",focusable:"false"}),r.default.createElement("div",{role:"heading",className:d("title"),"aria-level":t},r.default.createElement("span",null,function(e){return"ux-recommendation"===e?"UX Recommendation":"caution"===e?"Caution":"deprecation"===e?"Deprecation Notice":"maintenance"===e?"In Maintenance":"important"===e?"Important":"not-supported"===e?"Hazards for Incorrect Usage":"error"}(n))),r.default.createElement("div",{className:d("children")},function(e){return"not-supported"===e?r.default.createElement(r.default.Fragment,null,r.default.createElement("p",{className:d("paragraph")},"This component was designed and tested according to the documented implementation."),r.default.createElement("p",{className:d("paragraph")},"Using the component incorrectly:",r.default.createElement("ul",{className:d("list")},r.default.createElement("li",null,"will likely result in improper composition and create accessibility issues"),r.default.createElement("li",null,"may cause erratic or broken behaviors and styles"),r.default.createElement("li",null,r.default.createElement("strong",null,"will not be supported "),"or enhanced to allow for incorrect use")))):null}(n),r.default.Children.map(a,(function(e){return"string"==typeof e?r.default.createElement("p",null,e):e}))))};m.propTypes=s,m.defaultProps={ariaLevel:"2",variant:"important"};t.default=m},47306:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=s(n(67294)),a=s(n(45697)),l=s(n(94184)),o=s(n(47166)),i=s(n(50026)),u=s(n(42620)),d=["title"];function s(e){return e&&e.__esModule?e:{default:e}}function m(){return m=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},m.apply(this,arguments)}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=o.default.bind(u.default),f={title:a.default.string},y=function(e){var t=e.title,n=c(e,d),a=r.default.useContext(i.default),o=(0,l.default)(p(["placeholder",a.className]),n.className),u=p(["inner"]);return r.default.createElement("div",m({},n,{className:o}),r.default.createElement("div",{className:u},r.default.createElement("p",{className:p("title")},t)))};y.propTypes=f,y.defaultProps={title:""};t.default=y},34261:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"Button",{enumerable:!0,get:function(){return l.default}}),Object.defineProperty(t,"Notice",{enumerable:!0,get:function(){return r.default}}),Object.defineProperty(t,"Placeholder",{enumerable:!0,get:function(){return a.default}});var r=o(n(59278)),a=o(n(47306)),l=o(n(40996));function o(e){return e&&e.__esModule?e:{default:e}}},88645:function(e,t,n){n.r(t),n.d(t,{default:function(){return D}});var r=n(67294),a=n(81254),l=n(45151),o=n(88714),i=["components"];function u(){return u=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},u.apply(this,arguments)}function d(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s={};function m(e){var t=e.components,n=d(e,i);return(0,a.mdx)("wrapper",u({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React, { useState } from 'react';\nimport { Placeholder } from '@cerner/terra-docs';\nimport ResponsiveElement from 'terra-responsive-element';\n\nconst BreakpointExample = () => {\n  const [breakpoint, setBreakpoint] = useState('');\n\n  return (\n    <ResponsiveElement onChange={value => setBreakpoint(value)}>\n      <Placeholder title={breakpoint} />\n    </ResponsiveElement>\n  );\n};\n\nexport default BreakpointExample;\n\n")))}m.isMDXComponent=!0;var c=n(49271),p=function(e){var t=e.title,n=e.description,a=e.isExpanded;return r.createElement(c.Z,{title:t||"Breakpoint Example",description:n,example:r.createElement(o.Z,null),exampleSrc:r.createElement(m,null),isExpanded:a})},f=n(19784),y=["components"];function x(){return x=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},x.apply(this,arguments)}function b(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var h={};function v(e){var t=e.components,n=b(e,y);return(0,a.mdx)("wrapper",x({},h,n,{components:t,mdxType:"MDXLayout"}),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React, { useState } from 'react';\nimport { Placeholder } from '@cerner/terra-docs';\nimport ResponsiveElement from 'terra-responsive-element';\n\nconst ResizeExample = () => {\n  const [width, setWidth] = useState('');\n\n  return (\n    <ResponsiveElement onResize={value => setWidth(value)}>\n      <Placeholder title={width} />\n    </ResponsiveElement>\n  );\n};\n\nexport default ResizeExample;\n\n")))}v.isMDXComponent=!0;var _=function(e){var t=e.title,n=e.description,a=e.isExpanded;return r.createElement(c.Z,{title:t||"Resize Example",description:n,example:r.createElement(f.Z,null),exampleSrc:r.createElement(v,null),isExpanded:a})},g=n(78530),O=["components"];function w(){return w=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},w.apply(this,arguments)}function E(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var T={},N="wrapper";function j(e){var t=e.components,n=E(e,O);return(0,a.mdx)(N,w({},T,n,{components:t,mdxType:"MDXLayout"}),(0,a.mdx)(g.ZP,{mdxType:"PropsTable"},(0,a.mdx)(g.X2,{key:"ROW1",mdxType:"Row"},(0,a.mdx)(g.O,{mdxType:"PropNameCell"},"children"),(0,a.mdx)(g.Di,{mdxType:"TypeCell"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"node\n"))),(0,a.mdx)(g.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,a.mdx)(g.mW,{mdxType:"DefaultValueCell"},(0,a.mdx)("p",null,"none")),(0,a.mdx)(g.Ex,{mdxType:"DescriptionCell"},(0,a.mdx)("p",null,"Child nodes."))),(0,a.mdx)(g.X2,{key:"ROW2",mdxType:"Row"},(0,a.mdx)(g.O,{mdxType:"PropNameCell"},"onChange"),(0,a.mdx)(g.Di,{mdxType:"TypeCell"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"func\n"))),(0,a.mdx)(g.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,a.mdx)(g.mW,{mdxType:"DefaultValueCell"},(0,a.mdx)("p",null,"none")),(0,a.mdx)(g.Ex,{mdxType:"DescriptionCell"},(0,a.mdx)("p",null,"A callback function invoked when the breakpoint size changes. ",(0,a.mdx)("inlineCode",{parentName:"p"},"onChange(<string>breakpoint)")))),(0,a.mdx)(g.X2,{key:"ROW3",mdxType:"Row"},(0,a.mdx)(g.O,{mdxType:"PropNameCell"},"onResize"),(0,a.mdx)(g.Di,{mdxType:"TypeCell"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"func\n"))),(0,a.mdx)(g.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,a.mdx)(g.mW,{mdxType:"DefaultValueCell"},(0,a.mdx)("p",null,"none")),(0,a.mdx)(g.Ex,{mdxType:"DescriptionCell"},(0,a.mdx)("p",null,"A callback function invoked when the responsive target resizes. ",(0,a.mdx)("inlineCode",{parentName:"p"},"onResize(<number>width)")))),(0,a.mdx)(g.X2,{key:"ROW4",mdxType:"Row"},(0,a.mdx)(g.O,{mdxType:"PropNameCell"},"tiny"),(0,a.mdx)(g.Di,{mdxType:"TypeCell"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"element\n"))),(0,a.mdx)(g.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,a.mdx)(g.mW,{mdxType:"DefaultValueCell"},(0,a.mdx)("p",null,"none")),(0,a.mdx)(g.Ex,{mdxType:"DescriptionCell"},(0,a.mdx)("p",null,"[Deprecated]"," An element to be displayed at tiny breakpoints."))),(0,a.mdx)(g.X2,{key:"ROW5",mdxType:"Row"},(0,a.mdx)(g.O,{mdxType:"PropNameCell"},"small"),(0,a.mdx)(g.Di,{mdxType:"TypeCell"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"element\n"))),(0,a.mdx)(g.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,a.mdx)(g.mW,{mdxType:"DefaultValueCell"},(0,a.mdx)("p",null,"none")),(0,a.mdx)(g.Ex,{mdxType:"DescriptionCell"},(0,a.mdx)("p",null,"[Deprecated]"," An element to be displayed at small breakpoints."))),(0,a.mdx)(g.X2,{key:"ROW6",mdxType:"Row"},(0,a.mdx)(g.O,{mdxType:"PropNameCell"},"medium"),(0,a.mdx)(g.Di,{mdxType:"TypeCell"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"element\n"))),(0,a.mdx)(g.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,a.mdx)(g.mW,{mdxType:"DefaultValueCell"},(0,a.mdx)("p",null,"none")),(0,a.mdx)(g.Ex,{mdxType:"DescriptionCell"},(0,a.mdx)("p",null,"[Deprecated]"," An element to be displayed at medium breakpoints."))),(0,a.mdx)(g.X2,{key:"ROW7",mdxType:"Row"},(0,a.mdx)(g.O,{mdxType:"PropNameCell"},"large"),(0,a.mdx)(g.Di,{mdxType:"TypeCell"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"element\n"))),(0,a.mdx)(g.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,a.mdx)(g.mW,{mdxType:"DefaultValueCell"},(0,a.mdx)("p",null,"none")),(0,a.mdx)(g.Ex,{mdxType:"DescriptionCell"},(0,a.mdx)("p",null,"[Deprecated]"," An element to be displayed at large breakpoints."))),(0,a.mdx)(g.X2,{key:"ROW8",mdxType:"Row"},(0,a.mdx)(g.O,{mdxType:"PropNameCell"},"huge"),(0,a.mdx)(g.Di,{mdxType:"TypeCell"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"element\n"))),(0,a.mdx)(g.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,a.mdx)(g.mW,{mdxType:"DefaultValueCell"},(0,a.mdx)("p",null,"none")),(0,a.mdx)(g.Ex,{mdxType:"DescriptionCell"},(0,a.mdx)("p",null,"[Deprecated]"," An element to be displayed at huge breakpoints."))),(0,a.mdx)(g.X2,{key:"ROW9",mdxType:"Row"},(0,a.mdx)(g.O,{mdxType:"PropNameCell"},"enormous"),(0,a.mdx)(g.Di,{mdxType:"TypeCell"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"element\n"))),(0,a.mdx)(g.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,a.mdx)(g.mW,{mdxType:"DefaultValueCell"},(0,a.mdx)("p",null,"none")),(0,a.mdx)(g.Ex,{mdxType:"DescriptionCell"},(0,a.mdx)("p",null,"[Deprecated]"," An element to be displayed at enormous breakpoints."))),(0,a.mdx)(g.X2,{key:"ROW10",mdxType:"Row"},(0,a.mdx)(g.O,{mdxType:"PropNameCell"},"responsiveTo"),(0,a.mdx)(g.Di,{mdxType:"TypeCell"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"enum: [\n  'window'\n  'parent'\n],\n"))),(0,a.mdx)(g.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,a.mdx)(g.mW,{mdxType:"DefaultValueCell"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"'parent'\n"))),(0,a.mdx)(g.Ex,{mdxType:"DescriptionCell"},(0,a.mdx)("p",null,"The viewport the element will be responsive to. One of ",(0,a.mdx)("inlineCode",{parentName:"p"},"window")," or ",(0,a.mdx)("inlineCode",{parentName:"p"},"parent"),".")))))}j.isMDXComponent=!0;var C=["components"];function P(){return P=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},P.apply(this,arguments)}function k(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var R={},S="wrapper";function D(e){var t=e.components,n=k(e,C);return(0,a.mdx)(S,P({},R,n,{components:t,mdxType:"MDXLayout"}),(0,a.mdx)(l.C,{mdxType:"Badge"}),(0,a.mdx)("h1",{id:"terra-responsive-element"},"Terra Responsive Element"),(0,a.mdx)("p",null,"The Responsive Element provides a way to conditionally render components during breakpoint or resize changes."),(0,a.mdx)("p",null,"The Responsive Element can be set to be responsive to the parent of the component or the window. By default, event listeners will be bound to the immediate parent of the component and invoke the onChange and onResize callback functions as a result of resize changes to the bound target."),(0,a.mdx)("h2",{id:"additional-notes"},"Additional Notes"),(0,a.mdx)("p",null,"The Responsive Element observes the total width of the bound container. Padding and borders are included in the calculation to determine the available width. Margins are not included. For breakpoint accuracy it is not recommended to set padding on the parent container when responsiveTo is set to parent. For more details on how box-sizing affects the dom box model see: ",(0,a.mdx)("a",{parentName:"p",href:"https://css-tricks.com/almanac/properties/b/box-sizing/"},"https://css-tricks.com/almanac/properties/b/box-sizing/")),(0,a.mdx)("p",null,"For consistency, breakpoint ranges are inherited from ",(0,a.mdx)("a",{parentName:"p",href:"https://engineering.cerner.com/terra-ui/#/components/terra-breakpoints/breakpoints/about"},"terra-breakpoints"),"."),(0,a.mdx)("p",null,"For the uncontrolled version of this component it is not necessary to set each breakpoint. If a breakpoint is not set the component will look at each successive smaller breakpoint until one is found."),(0,a.mdx)("h2",{id:"getting-started"},"Getting Started"),(0,a.mdx)("ul",null,(0,a.mdx)("li",{parentName:"ul"},"Install with ",(0,a.mdx)("a",{parentName:"li",href:"https://www.npmjs.com/"},"npmjs"),":",(0,a.mdx)("ul",{parentName:"li"},(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("inlineCode",{parentName:"li"},"npm install terra-responsive-element"))))),(0,a.mdx)("h2",{id:"peer-dependencies"},"Peer Dependencies"),(0,a.mdx)("p",null,"This component requires the following peer dependencies be installed in your app for the component to properly function."),(0,a.mdx)("table",null,(0,a.mdx)("thead",{parentName:"table"},(0,a.mdx)("tr",{parentName:"thead"},(0,a.mdx)("th",{parentName:"tr",align:null},"Peer Dependency"),(0,a.mdx)("th",{parentName:"tr",align:null},"Version"))),(0,a.mdx)("tbody",{parentName:"table"},(0,a.mdx)("tr",{parentName:"tbody"},(0,a.mdx)("td",{parentName:"tr",align:null},"react"),(0,a.mdx)("td",{parentName:"tr",align:null},"^16.8.5")),(0,a.mdx)("tr",{parentName:"tbody"},(0,a.mdx)("td",{parentName:"tr",align:null},"react-dom"),(0,a.mdx)("td",{parentName:"tr",align:null},"^16.8.5")))),(0,a.mdx)("h2",{id:"usage"},"Usage"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-jsx"},"import ResponsiveElement from 'terra-responsive-element';\n")),(0,a.mdx)("h2",{id:"component-features"},"Component Features"),(0,a.mdx)("ul",null,(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("a",{parentName:"li",href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#cross-browser-support"},"Cross-Browser Support")),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("a",{parentName:"li",href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#responsive-support"},"Responsive Support")),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("a",{parentName:"li",href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#mobile-support"},"Mobile Support"))),(0,a.mdx)("h2",{id:"examples"},"Examples"),(0,a.mdx)(p,{title:"Responsive Breakpoints",description:"An example demonstrating the callback events during a breakpoint change.",mdxType:"BreakpointExample"}),(0,a.mdx)(_,{title:"Responsive Resizing",description:"An example demonstrating the callback events during a resize.",mdxType:"ResizeExample"}),(0,a.mdx)("h2",{id:"responsive-element-props"},"Responsive Element Props"),(0,a.mdx)(j,{mdxType:"ResponsiveElementPropsTable"}))}D.isMDXComponent=!0},45151:function(e,t,n){n.d(t,{C:function(){return l}});var r=n(67294),a=n(22863),l=function(e){var t=e.url;return r.createElement(a.Z,{src:"https://github.com/cerner/terra-core/tree/main/packages/terra-responsive-element",name:"terra-responsive-element",version:"5.39.0",url:t})}},17422:function(e,t,n){n.r(t),t.default={badge:"Badges-module__badge___vex-+","badge-container":"Badges-module__badge-container___B13Mv","badge-name":"Badges-module__badge-name___jkN0m","badge-version":"Badges-module__badge-version___agZ+P"}},53560:function(e,t,n){n.r(t),t.default={"clinical-lowlight-theme":"ExampleTemplate-module__clinical-lowlight-theme___rBbtD","orion-fusion-theme":"ExampleTemplate-module__orion-fusion-theme___GzA23",template:"ExampleTemplate-module__template___a4uPk",header:"ExampleTemplate-module__header___iFXV3",content:"ExampleTemplate-module__content___48m4Q",description:"ExampleTemplate-module__description___NwBJo",footer:"ExampleTemplate-module__footer___GpSoG","button-container":"ExampleTemplate-module__button-container___rAD11",css:"ExampleTemplate-module__css___+jtk1",code:"ExampleTemplate-module__code___7rC6C","css-toggle":"ExampleTemplate-module__css-toggle___chHK7","code-toggle":"ExampleTemplate-module__code-toggle___TGlE-","is-selected":"ExampleTemplate-module__is-selected___0BYwS",item:"ExampleTemplate-module__item___8FTQq",chevron:"ExampleTemplate-module__chevron___VbY7N",title:"ExampleTemplate-module__title___r+nbJ","dynamic-content":"ExampleTemplate-module__dynamic-content___k+1H7"}},66983:function(e,t,n){n.r(t),t.default={"clinical-lowlight-theme":"Button-module__clinical-lowlight-theme___TyZWB","orion-fusion-theme":"Button-module__orion-fusion-theme___q-FcQ",button:"Button-module__button___QuCn2","is-active":"Button-module__is-active___Z8AuK"}},30866:function(e,t,n){n.r(t),t.default={"clinical-lowlight-theme":"Notice-module__clinical-lowlight-theme___aa5xV","orion-fusion-theme":"Notice-module__orion-fusion-theme___QAE-T",notice:"Notice-module__notice___GWkPA",children:"Notice-module__children___lDYsm",accessory:"Notice-module__accessory___wkLOG",title:"Notice-module__title___6H5tc","ux-recommendation":"Notice-module__ux-recommendation___N8BuK",caution:"Notice-module__caution___hPrVl",deprecation:"Notice-module__deprecation___g1drA",maintenance:"Notice-module__maintenance___kWLIZ",important:"Notice-module__important___p5DiF","not-supported":"Notice-module__not-supported___34bHd",paragraph:"Notice-module__paragraph___5h-w1",list:"Notice-module__list___M2Kxj"}},42620:function(e,t,n){n.r(t),t.default={"clinical-lowlight-theme":"Placeholder-module__clinical-lowlight-theme___Obm9K","orion-fusion-theme":"Placeholder-module__orion-fusion-theme___svHY+",placeholder:"Placeholder-module__placeholder___ZZDXd",inner:"Placeholder-module__inner___fJq9o",title:"Placeholder-module__title___teBSo"}},33864:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=l(n(67294)),a=l(n(99139));function l(e){return e&&e.__esModule?e:{default:e}}function o(){return o=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o.apply(this,arguments)}var i=function(e){var t=o({},e);return r.default.createElement(a.default,t,r.default.createElement("path",{d:"M10.3 24 33.8 0l3.9 3.8L18 24l19.7 20.2-3.9 3.8z"}))};i.displayName="IconChevronLeft",i.defaultProps={viewBox:"0 0 48 48","data-name":"Layer 1",xmlns:"http://www.w3.org/2000/svg"};t.default=i},80906:function(e,t,n){function r(e){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.DependentViewport=void 0;var a=d(n(67294)),l=d(n(45697)),o=d(n(32018)),i=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=r(e)&&"function"!=typeof e)return{default:e};var n=u(t);if(n&&n.has(e))return n.get(e);var a={__proto__:null},l=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var i=l?Object.getOwnPropertyDescriptor(e,o):null;i&&(i.get||i.set)?Object.defineProperty(a,o,i):a[o]=e[o]}return a.default=e,n&&n.set(e,a),a}(n(30210));function u(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(u=function(e){return e?n:t})(e)}function d(e){return e&&e.__esModule?e:{default:e}}function s(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,(l=a.key,o=void 0,o=function(e,t){if("object"!==r(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var a=n.call(e,t||"default");if("object"!==r(a))return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(l,"string"),"symbol"===r(o)?o:String(o)),a)}var l,o}function m(e,t){return m=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},m(e,t)}function c(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,a=f(e);if(t){var l=f(this).constructor;n=Reflect.construct(a,arguments,l)}else n=a.apply(this,arguments);return function(e,t){if(t&&("object"===r(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return p(e)}(this,n)}}function p(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function f(e){return f=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},f(e)}t.DependentViewport={WINDOW:"window",PARENT:"parent"};var y={children:l.default.node,onChange:l.default.func,onResize:l.default.func,tiny:l.default.element,small:l.default.element,medium:l.default.element,large:l.default.element,huge:l.default.element,enormous:l.default.element,responsiveTo:l.default.oneOf(["window","parent"])},x=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&m(e,t)}(u,e);var t,n,r,l=c(u);function u(){var e;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(e=l.call(this)).state={element:null},e.setContainer=e.setContainer.bind(p(e)),e.handleResize=e.handleResize.bind(p(e)),e.handleWindowResize=e.handleWindowResize.bind(p(e)),e.animationFrameID=null,e}return t=u,(n=[{key:"componentDidMount",value:function(){var e=this,t=this.props;t.tiny,t.small,t.medium,t.large,t.huge,t.enormous,this.container?(this.handleResize(this.container.getBoundingClientRect().width),this.resizeObserver=new o.default((function(t){e.animationFrameID=window.requestAnimationFrame((function(){e.animationFrameID=null,e.handleResize(t[0].target.getBoundingClientRect().width)}))})),this.resizeObserver.observe(this.container)):(this.handleResize(window.innerWidth),window.addEventListener("resize",this.handleWindowResize))}},{key:"componentWillUnmount",value:function(){this.container?(window.cancelAnimationFrame(this.animationFrameID),this.resizeObserver.disconnect(this.container),this.container=null):window.removeEventListener("resize",this.handleWindowResize)}},{key:"handleResize",value:function(e){var t=this.props,n=t.onChange,r=t.onResize,a=t.tiny,l=t.small,o=t.medium,u=t.large,d=t.huge,s=t.enormous;r&&r(e);var m,c=(0,i.activeBreakpointForSize)(e);n&&c!==this.breakpoint&&n(c),this.breakpoint=c,(a||l||o||u||d||s)&&(m=e>=i.default.enormous&&s?"enormous":e>=i.default.huge&&d?"huge":e>=i.default.large&&u?"large":e>=i.default.medium&&o?"medium":e>=i.default.small&&l?"small":"tiny",this.state.element!==m&&this.setState({element:m}))}},{key:"handleWindowResize",value:function(){this.handleResize(window.innerWidth)}},{key:"setContainer",value:function(e){null!==e&&(this.container="parent"===this.props.responsiveTo?e.parentNode:null)}},{key:"render",value:function(){var e=this.props,t=e.children,n=e.responsiveTo;return this.state.element?this.props[this.state.element]||null:a.default.createElement(a.default.Fragment,null,"parent"===n&&!this.container&&a.default.createElement("div",{ref:this.setContainer}),t)}}])&&s(t.prototype,n),r&&s(t,r),Object.defineProperty(t,"prototype",{writable:!1}),u}(a.default.Component);x.propTypes=y,x.defaultProps={responsiveTo:"parent"};t.default=x}}]);