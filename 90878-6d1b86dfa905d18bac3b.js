"use strict";(self.webpackChunkterra_ui=self.webpackChunkterra_ui||[]).push([[90878,45627,37344,85565,3353,80858,14041,5161,45865,85355,27444,3193,17657,4845,46647,33315,85161],{88714:function(e,t,n){function r(e){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(e)}t.Z=void 0;var a,l=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==r(e)&&"function"!=typeof e)return{default:e};var n=d(t);if(n&&n.has(e))return n.get(e);var a={},l=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var i=l?Object.getOwnPropertyDescriptor(e,o):null;i&&(i.get||i.set)?Object.defineProperty(a,o,i):a[o]=e[o]}a.default=e,n&&n.set(e,a);return a}(n(67294)),o=n(34261),i=(a=n(80906))&&a.__esModule?a:{default:a};function d(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(d=function(e){return e?n:t})(e)}function u(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,a,l,o,i=[],d=!0,u=!1;try{if(l=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;d=!1}else for(;!(d=(r=l.call(n)).done)&&(i.push(r.value),i.length!==t);d=!0);}catch(e){u=!0,a=e}finally{try{if(!d&&null!=n.return&&(o=n.return(),Object(o)!==o))return}finally{if(u)throw a}}return i}}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return m(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return m(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function m(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var p=function(){var e=u((0,l.useState)(""),2),t=e[0],n=e[1];return l.default.createElement(i.default,{onChange:function(e){return n(e)}},l.default.createElement(o.Placeholder,{title:t}))};t.Z=p},19784:function(e,t,n){function r(e){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(e)}t.Z=void 0;var a,l=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==r(e)&&"function"!=typeof e)return{default:e};var n=d(t);if(n&&n.has(e))return n.get(e);var a={},l=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var i=l?Object.getOwnPropertyDescriptor(e,o):null;i&&(i.get||i.set)?Object.defineProperty(a,o,i):a[o]=e[o]}a.default=e,n&&n.set(e,a);return a}(n(67294)),o=n(34261),i=(a=n(80906))&&a.__esModule?a:{default:a};function d(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(d=function(e){return e?n:t})(e)}function u(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,a,l,o,i=[],d=!0,u=!1;try{if(l=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;d=!1}else for(;!(d=(r=l.call(n)).done)&&(i.push(r.value),i.length!==t);d=!0);}catch(e){u=!0,a=e}finally{try{if(!d&&null!=n.return&&(o=n.return(),Object(o)!==o))return}finally{if(u)throw a}}return i}}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return m(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return m(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function m(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var p=function(){var e=u((0,l.useState)(""),2),t=e[0],n=e[1];return l.default.createElement(i.default,{onResize:function(e){return n(e)}},l.default.createElement(o.Placeholder,{title:t}))};t.Z=p},22863:function(e,t,n){var r=n(64836);t.Z=void 0;var a=r(n(67294)),l=r(n(45697)),o=r(n(47166)),i=r(n(17422)),d=o.default.bind(i.default),u={name:l.default.string.isRequired,src:l.default.string,url:l.default.string,version:l.default.string.isRequired},m=function(e){var t=e.src,n=e.name,r=e.url,l=e.version,o=a.default.createElement("a",{className:d("badge"),href:r||"https://www.npmjs.org/package/".concat(n,"/v/").concat(l)},a.default.createElement("span",{className:d("badge-name")},r?"package":"npm"),a.default.createElement("span",{className:d("badge-version")},"v".concat(l))),i=t?a.default.createElement("a",{className:d("badge"),href:t},a.default.createElement("span",{className:d("badge-name")},"github"),a.default.createElement("span",{className:d("badge-version")},"source")):void 0;return a.default.createElement("div",{className:d("badge-container")},o,i)};m.propTypes=u;var p=m;t.Z=p},40996:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=u(n(67294)),a=u(n(45697)),l=u(n(47166)),o=u(n(50026)),i=u(n(66983)),d=["children"];function u(e){return e&&e.__esModule?e:{default:e}}function m(){return m=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},m.apply(this,arguments)}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=l.default.bind(i.default),c=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","true")},f=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","false")},x={children:a.default.string},y=function(e){var t=e.children,n=p(e,d),a=r.default.useContext(o.default),i=(0,l.default)(s(["button",a.className]),n.className);return r.default.createElement("button",m({},n,{type:"button",className:i,onBlur:c,onMouseDown:f,"data-focus-styles-enabled":!0}),t)};y.propTypes=x;var b=y;t.default=b},59278:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=d(n(67294)),a=d(n(45697)),l=d(n(47166)),o=d(n(50026)),i=d(n(30866));function d(e){return e&&e.__esModule?e:{default:e}}var u=l.default.bind(i.default),m={ariaLevel:a.default.oneOf(["2","3","4","5","6"]),children:a.default.node,variant:a.default.oneOf(["ux-recommendation","caution","deprecation","maintenance","important","not-supported"])},p=function(e){var t=e.ariaLevel,n=e.variant,a=e.children,l=r.default.useContext(o.default);return r.default.createElement("div",{className:u("notice",n,l.className)},r.default.createElement("div",{className:u("accessory"),"aria-hidden":"true",focusable:"false"}),r.default.createElement("div",{role:"heading",className:u("title"),"aria-level":t},r.default.createElement("span",null,function(e){return"ux-recommendation"===e?"UX Recommendation":"caution"===e?"Caution":"deprecation"===e?"Deprecation Notice":"maintenance"===e?"In Maintenance":"important"===e?"Important":"not-supported"===e?"Hazards for Incorrect Usage":"error"}(n))),r.default.createElement("div",{className:u("children")},function(e){return"not-supported"===e?r.default.createElement(r.default.Fragment,null,r.default.createElement("p",{className:u("paragraph")},"This component was designed and tested according to the documented implementation."),r.default.createElement("p",{className:u("paragraph")},"Using the component incorrectly:",r.default.createElement("ul",{className:u("list")},r.default.createElement("li",null,"will likely result in improper composition and create accessibility issues"),r.default.createElement("li",null,"may cause erratic or broken behaviors and styles"),r.default.createElement("li",null,r.default.createElement("strong",null,"will not be supported "),"or enhanced to allow for incorrect use")))):null}(n),r.default.Children.map(a,(function(e){return"string"==typeof e?r.default.createElement("p",null,e):e}))))};p.propTypes=m,p.defaultProps={ariaLevel:"2",variant:"important"};var s=p;t.default=s},47306:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=m(n(67294)),a=m(n(45697)),l=m(n(94184)),o=m(n(47166)),i=m(n(50026)),d=m(n(42620)),u=["title"];function m(e){return e&&e.__esModule?e:{default:e}}function p(){return p=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},p.apply(this,arguments)}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=o.default.bind(d.default),f={title:a.default.string},x=function(e){var t=e.title,n=s(e,u),a=r.default.useContext(i.default),o=(0,l.default)(c(["placeholder",a.className]),n.className),d=c(["inner"]);return r.default.createElement("div",p({},n,{className:o}),r.default.createElement("div",{className:d},r.default.createElement("p",{className:c("title")},t)))};x.propTypes=f,x.defaultProps={title:""};var y=x;t.default=y},34261:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"Button",{enumerable:!0,get:function(){return l.default}}),Object.defineProperty(t,"Notice",{enumerable:!0,get:function(){return r.default}}),Object.defineProperty(t,"Placeholder",{enumerable:!0,get:function(){return a.default}});var r=o(n(59278)),a=o(n(47306)),l=o(n(40996));function o(e){return e&&e.__esModule?e:{default:e}}},87254:function(e,t,n){n.r(t),n.d(t,{default:function(){return W}});var r=n(67294),a=n(81254),l=n(45151),o=n(88714),i=["components"];function d(){return d=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},d.apply(this,arguments)}function u(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var m={},p="wrapper";function s(e){var t=e.components,n=u(e,i);return(0,a.mdx)(p,d({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React, { useState } from 'react';\nimport { Placeholder } from '@cerner/terra-docs';\nimport ResponsiveElement from 'terra-responsive-element';\n\nconst BreakpointExample = () => {\n  const [breakpoint, setBreakpoint] = useState('');\n\n  return (\n    <ResponsiveElement onChange={value => setBreakpoint(value)}>\n      <Placeholder title={breakpoint} />\n    </ResponsiveElement>\n  );\n};\n\nexport default BreakpointExample;\n\n")))}s.isMDXComponent=!0;var c=n(49271),f=function(e){var t=e.title,n=e.description,a=e.isExpanded;return r.createElement(c.Z,{title:t||"Breakpoint Example",description:n,example:r.createElement(o.Z,null),exampleSrc:r.createElement(s,null),isExpanded:a})},x=n(19784),y=["components"];function b(){return b=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},b.apply(this,arguments)}function v(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var g={},h="wrapper";function _(e){var t=e.components,n=v(e,y);return(0,a.mdx)(h,b({},g,n,{components:t,mdxType:"MDXLayout"}),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React, { useState } from 'react';\nimport { Placeholder } from '@cerner/terra-docs';\nimport ResponsiveElement from 'terra-responsive-element';\n\nconst ResizeExample = () => {\n  const [width, setWidth] = useState('');\n\n  return (\n    <ResponsiveElement onResize={value => setWidth(value)}>\n      <Placeholder title={width} />\n    </ResponsiveElement>\n  );\n};\n\nexport default ResizeExample;\n\n")))}_.isMDXComponent=!0;var O=function(e){var t=e.title,n=e.description,a=e.isExpanded;return r.createElement(c.Z,{title:t||"Resize Example",description:n,example:r.createElement(x.Z,null),exampleSrc:r.createElement(_,null),isExpanded:a})},N=n(78530),T=["components"];function j(){return j=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},j.apply(this,arguments)}function w(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var E={},C="wrapper";function k(e){var t=e.components,n=w(e,T);return(0,a.mdx)(C,j({},E,n,{components:t,mdxType:"MDXLayout"}),(0,a.mdx)(N.ZP,{mdxType:"PropsTable"},(0,a.mdx)(N.X2,{key:"ROW1",mdxType:"Row"},(0,a.mdx)(N.O,{mdxType:"PropNameCell"},"children"),(0,a.mdx)(N.Di,{mdxType:"TypeCell"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"node\n"))),(0,a.mdx)(N.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,a.mdx)(N.mW,{mdxType:"DefaultValueCell"},(0,a.mdx)("p",null,"none")),(0,a.mdx)(N.Ex,{mdxType:"DescriptionCell"},(0,a.mdx)("p",null,"Child nodes."))),(0,a.mdx)(N.X2,{key:"ROW2",mdxType:"Row"},(0,a.mdx)(N.O,{mdxType:"PropNameCell"},"onChange"),(0,a.mdx)(N.Di,{mdxType:"TypeCell"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"func\n"))),(0,a.mdx)(N.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,a.mdx)(N.mW,{mdxType:"DefaultValueCell"},(0,a.mdx)("p",null,"none")),(0,a.mdx)(N.Ex,{mdxType:"DescriptionCell"},(0,a.mdx)("p",null,"A callback function invoked when the breakpoint size changes. ",(0,a.mdx)("inlineCode",{parentName:"p"},"onChange(<string>breakpoint)")))),(0,a.mdx)(N.X2,{key:"ROW3",mdxType:"Row"},(0,a.mdx)(N.O,{mdxType:"PropNameCell"},"onResize"),(0,a.mdx)(N.Di,{mdxType:"TypeCell"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"func\n"))),(0,a.mdx)(N.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,a.mdx)(N.mW,{mdxType:"DefaultValueCell"},(0,a.mdx)("p",null,"none")),(0,a.mdx)(N.Ex,{mdxType:"DescriptionCell"},(0,a.mdx)("p",null,"A callback function invoked when the responsive target resizes. ",(0,a.mdx)("inlineCode",{parentName:"p"},"onResize(<number>width)")))),(0,a.mdx)(N.X2,{key:"ROW4",mdxType:"Row"},(0,a.mdx)(N.O,{mdxType:"PropNameCell"},"tiny"),(0,a.mdx)(N.Di,{mdxType:"TypeCell"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"element\n"))),(0,a.mdx)(N.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,a.mdx)(N.mW,{mdxType:"DefaultValueCell"},(0,a.mdx)("p",null,"none")),(0,a.mdx)(N.Ex,{mdxType:"DescriptionCell"},(0,a.mdx)("p",null,"[Deprecated]"," An element to be displayed at tiny breakpoints."))),(0,a.mdx)(N.X2,{key:"ROW5",mdxType:"Row"},(0,a.mdx)(N.O,{mdxType:"PropNameCell"},"small"),(0,a.mdx)(N.Di,{mdxType:"TypeCell"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"element\n"))),(0,a.mdx)(N.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,a.mdx)(N.mW,{mdxType:"DefaultValueCell"},(0,a.mdx)("p",null,"none")),(0,a.mdx)(N.Ex,{mdxType:"DescriptionCell"},(0,a.mdx)("p",null,"[Deprecated]"," An element to be displayed at small breakpoints."))),(0,a.mdx)(N.X2,{key:"ROW6",mdxType:"Row"},(0,a.mdx)(N.O,{mdxType:"PropNameCell"},"medium"),(0,a.mdx)(N.Di,{mdxType:"TypeCell"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"element\n"))),(0,a.mdx)(N.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,a.mdx)(N.mW,{mdxType:"DefaultValueCell"},(0,a.mdx)("p",null,"none")),(0,a.mdx)(N.Ex,{mdxType:"DescriptionCell"},(0,a.mdx)("p",null,"[Deprecated]"," An element to be displayed at medium breakpoints."))),(0,a.mdx)(N.X2,{key:"ROW7",mdxType:"Row"},(0,a.mdx)(N.O,{mdxType:"PropNameCell"},"large"),(0,a.mdx)(N.Di,{mdxType:"TypeCell"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"element\n"))),(0,a.mdx)(N.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,a.mdx)(N.mW,{mdxType:"DefaultValueCell"},(0,a.mdx)("p",null,"none")),(0,a.mdx)(N.Ex,{mdxType:"DescriptionCell"},(0,a.mdx)("p",null,"[Deprecated]"," An element to be displayed at large breakpoints."))),(0,a.mdx)(N.X2,{key:"ROW8",mdxType:"Row"},(0,a.mdx)(N.O,{mdxType:"PropNameCell"},"huge"),(0,a.mdx)(N.Di,{mdxType:"TypeCell"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"element\n"))),(0,a.mdx)(N.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,a.mdx)(N.mW,{mdxType:"DefaultValueCell"},(0,a.mdx)("p",null,"none")),(0,a.mdx)(N.Ex,{mdxType:"DescriptionCell"},(0,a.mdx)("p",null,"[Deprecated]"," An element to be displayed at huge breakpoints."))),(0,a.mdx)(N.X2,{key:"ROW9",mdxType:"Row"},(0,a.mdx)(N.O,{mdxType:"PropNameCell"},"enormous"),(0,a.mdx)(N.Di,{mdxType:"TypeCell"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"element\n"))),(0,a.mdx)(N.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,a.mdx)(N.mW,{mdxType:"DefaultValueCell"},(0,a.mdx)("p",null,"none")),(0,a.mdx)(N.Ex,{mdxType:"DescriptionCell"},(0,a.mdx)("p",null,"[Deprecated]"," An element to be displayed at enormous breakpoints."))),(0,a.mdx)(N.X2,{key:"ROW10",mdxType:"Row"},(0,a.mdx)(N.O,{mdxType:"PropNameCell"},"responsiveTo"),(0,a.mdx)(N.Di,{mdxType:"TypeCell"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"enum: [\n  'window'\n  'parent'\n],\n"))),(0,a.mdx)(N.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,a.mdx)(N.mW,{mdxType:"DefaultValueCell"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"'parent'\n"))),(0,a.mdx)(N.Ex,{mdxType:"DescriptionCell"},(0,a.mdx)("p",null,"The viewport the element will be responsive to. One of ",(0,a.mdx)("inlineCode",{parentName:"p"},"window")," or ",(0,a.mdx)("inlineCode",{parentName:"p"},"parent"),".")))))}k.isMDXComponent=!0;var R=["components"];function P(){return P=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},P.apply(this,arguments)}function D(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var S={},M="wrapper";function W(e){var t=e.components,n=D(e,R);return(0,a.mdx)(M,P({},S,n,{components:t,mdxType:"MDXLayout"}),(0,a.mdx)(l.C,{mdxType:"Badge"}),(0,a.mdx)("h1",{id:"terra-responsive-element"},"Terra Responsive Element"),(0,a.mdx)("p",null,"The Responsive Element provides a way to conditionally render components during breakpoint or resize changes."),(0,a.mdx)("p",null,"The Responsive Element can be set to be responsive to the parent of the component or the window. By default, event listeners will be bound to the immediate parent of the component and invoke the onChange and onResize callback functions as a result of resize changes to the bound target."),(0,a.mdx)("h2",{id:"additional-notes"},"Additional Notes"),(0,a.mdx)("p",null,"The Responsive Element observes the total width of the bound container. Padding and borders are included in the calculation to determine the available width. Margins are not included. For breakpoint accuracy it is not recommended to set padding on the parent container when responsiveTo is set to parent. For more details on how box-sizing affects the dom box model see: ",(0,a.mdx)("a",{parentName:"p",href:"https://css-tricks.com/almanac/properties/b/box-sizing/"},"https://css-tricks.com/almanac/properties/b/box-sizing/")),(0,a.mdx)("p",null,"For consistency, breakpoint ranges are inherited from ",(0,a.mdx)("a",{parentName:"p",href:"https://engineering.cerner.com/terra-ui/#/components/terra-breakpoints/breakpoints/about"},"terra-breakpoints"),"."),(0,a.mdx)("p",null,"For the uncontrolled version of this component it is not necessary to set each breakpoint. If a breakpoint is not set the component will look at each successive smaller breakpoint until one is found."),(0,a.mdx)("h2",{id:"getting-started"},"Getting Started"),(0,a.mdx)("ul",null,(0,a.mdx)("li",{parentName:"ul"},"Install with ",(0,a.mdx)("a",{parentName:"li",href:"https://www.npmjs.com/"},"npmjs"),":",(0,a.mdx)("ul",{parentName:"li"},(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("inlineCode",{parentName:"li"},"npm install terra-responsive-element"))))),(0,a.mdx)("h2",{id:"peer-dependencies"},"Peer Dependencies"),(0,a.mdx)("p",null,"This component requires the following peer dependencies be installed in your app for the component to properly function."),(0,a.mdx)("table",null,(0,a.mdx)("thead",{parentName:"table"},(0,a.mdx)("tr",{parentName:"thead"},(0,a.mdx)("th",{parentName:"tr",align:null},"Peer Dependency"),(0,a.mdx)("th",{parentName:"tr",align:null},"Version"))),(0,a.mdx)("tbody",{parentName:"table"},(0,a.mdx)("tr",{parentName:"tbody"},(0,a.mdx)("td",{parentName:"tr",align:null},"react"),(0,a.mdx)("td",{parentName:"tr",align:null},"^16.8.5")),(0,a.mdx)("tr",{parentName:"tbody"},(0,a.mdx)("td",{parentName:"tr",align:null},"react-dom"),(0,a.mdx)("td",{parentName:"tr",align:null},"^16.8.5")))),(0,a.mdx)("h2",{id:"usage"},"Usage"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-jsx"},"import ResponsiveElement from 'terra-responsive-element';\n")),(0,a.mdx)("h2",{id:"component-features"},"Component Features"),(0,a.mdx)("ul",null,(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("a",{parentName:"li",href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#cross-browser-support"},"Cross-Browser Support")),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("a",{parentName:"li",href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#responsive-support"},"Responsive Support")),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("a",{parentName:"li",href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#mobile-support"},"Mobile Support"))),(0,a.mdx)("h2",{id:"examples"},"Examples"),(0,a.mdx)(f,{title:"Responsive Breakpoints",description:"An example demonstrating the callback events during a breakpoint change.",mdxType:"BreakpointExample"}),(0,a.mdx)(O,{title:"Responsive Resizing",description:"An example demonstrating the callback events during a resize.",mdxType:"ResizeExample"}),(0,a.mdx)("h2",{id:"responsive-element-props"},"Responsive Element Props"),(0,a.mdx)(k,{mdxType:"ResponsiveElementPropsTable"}))}W.isMDXComponent=!0},45151:function(e,t,n){n.d(t,{C:function(){return l}});var r=n(67294),a=n(22863),l=function(e){var t=e.url;return r.createElement(a.Z,{src:"https://github.com/cerner/terra-core/tree/main/packages/terra-responsive-element",name:"terra-responsive-element",version:"5.36.0",url:t})}},17422:function(e,t,n){n.r(t),t.default={badge:"Badges-module__badge___vex-+","badge-container":"Badges-module__badge-container___B13Mv","badge-name":"Badges-module__badge-name___jkN0m","badge-version":"Badges-module__badge-version___agZ+P"}},66983:function(e,t,n){n.r(t),t.default={"orion-fusion-theme":"Button-module__orion-fusion-theme___q-FcQ",button:"Button-module__button___QuCn2","is-active":"Button-module__is-active___Z8AuK"}},30866:function(e,t,n){n.r(t),t.default={"orion-fusion-theme":"Notice-module__orion-fusion-theme___QAE-T",notice:"Notice-module__notice___GWkPA",children:"Notice-module__children___lDYsm",accessory:"Notice-module__accessory___wkLOG",title:"Notice-module__title___6H5tc","ux-recommendation":"Notice-module__ux-recommendation___N8BuK",caution:"Notice-module__caution___hPrVl",deprecation:"Notice-module__deprecation___g1drA",maintenance:"Notice-module__maintenance___kWLIZ",important:"Notice-module__important___p5DiF","not-supported":"Notice-module__not-supported___34bHd",paragraph:"Notice-module__paragraph___5h-w1",list:"Notice-module__list___M2Kxj"}},42620:function(e,t,n){n.r(t),t.default={"orion-fusion-theme":"Placeholder-module__orion-fusion-theme___svHY+",placeholder:"Placeholder-module__placeholder___ZZDXd",inner:"Placeholder-module__inner___fJq9o",title:"Placeholder-module__title___teBSo"}}}]);