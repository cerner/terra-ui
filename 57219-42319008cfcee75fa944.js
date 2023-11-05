"use strict";(self.webpackChunkterra_ui=self.webpackChunkterra_ui||[]).push([[57219],{96126:function(e,t,n){t.Z=void 0;var a=i(n(67294)),r=i(n(45697)),l=i(n(70362)),o=i(n(94030));function i(e){return e&&e.__esModule?e:{default:e}}function u(){return u=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},u.apply(this,arguments)}var p={color:r.default.string},m=function(e){var t=u({},(function(e){if(null==e)throw new TypeError("Cannot destructure "+e)}(e),e));return a.default.createElement(l.default,{alt:"Joe Shane",initials:"JS",color:t.color})};m.propTypes=p;t.Z=(0,o.default)(m)},82710:function(e,t,n){t.Z=void 0;var a=o(n(67294)),r=o(n(70362)),l=o(n(96739));function o(e){return e&&e.__esModule?e:{default:e}}t.Z=function(){return a.default.createElement(r.default,{image:l.default,initials:"JS",alt:"Deep Space"})}},92541:function(e,t,n){t.Z=void 0;var a=l(n(67294)),r=l(n(70362));function l(e){return e&&e.__esModule?e:{default:e}}t.Z=function(){return a.default.createElement(r.default,{alt:"Patient #1",isDeceased:!0,initials:"JS"})}},69307:function(e,t,n){t.Z=void 0;var a=l(n(67294)),r=l(n(70362));function l(e){return e&&e.__esModule?e:{default:e}}t.Z=function(){return a.default.createElement(r.default,{alt:"John",initials:"J"})}},5619:function(e,t,n){t.Z=void 0;var a=o(n(67294)),r=o(n(70362)),l=o(n(96739));function o(e){return e&&e.__esModule?e:{default:e}}t.Z=function(){return a.default.createElement(r.default,{alt:"User",image:l.default,size:"2em",initials:"JS"})}},29399:function(e,t,n){t.Z=void 0;var a=l(n(67294)),r=l(n(70362));function l(e){return e&&e.__esModule?e:{default:e}}t.Z=function(){return a.default.createElement(r.default,{alt:"John Doe",initials:"JD"})}},27977:function(e,t,n){t.Z=void 0;var a=l(n(67294)),r=l(n(70362));function l(e){return e&&e.__esModule?e:{default:e}}t.Z=function(){return a.default.createElement(r.default,{alt:"The Last Airbender",initials:"JS"})}},94030:function(e,t,n){function a(e){return a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r,l=(r=n(67294))&&r.__esModule?r:{default:r};function o(){return o=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},o.apply(this,arguments)}function i(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,u(a.key),a)}}function u(e){var t=function(e,t){if("object"!==a(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!==a(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===a(t)?t:String(t)}function p(e,t){return p=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},p(e,t)}function m(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=c(e);if(t){var l=c(this).constructor;n=Reflect.construct(r,arguments,l)}else n=r.apply(this,arguments);return function(e,t){if(t&&("object"===a(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return d(e)}(this,n)}}function d(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function c(e){return c=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},c(e)}t.default=function(e){return function(t){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&p(e,t)}(s,t);var n,a,r,c=m(s);function s(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,s),(t=c.call(this,e)).handleOnSelect=t.handleOnSelect.bind(d(t)),t.state={colorVariant:"auto"},t}return n=s,a=[{key:"handleOnSelect",value:function(e){this.setState(function(e,t,n){return(t=u(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}({},e.target.name,e.target.value))}},{key:"render",value:function(){return l.default.createElement("div",null,l.default.createElement(e,o({color:this.state.colorVariant},this.props)),l.default.createElement("p",null,l.default.createElement("label",{htmlFor:"colorVariant"},"Select a color variant:")),l.default.createElement("select",{id:"colorVariant",name:"colorVariant",value:this.state.colorVariant,onChange:this.handleOnSelect},l.default.createElement("option",{value:"auto"},"Auto"),l.default.createElement("option",{value:"neutral"},"Neutral"),l.default.createElement("option",{value:"one"},"One"),l.default.createElement("option",{value:"two"},"Two"),l.default.createElement("option",{value:"three"},"Three"),l.default.createElement("option",{value:"four"},"Four"),l.default.createElement("option",{value:"five"},"Five"),l.default.createElement("option",{value:"six"},"Six"),l.default.createElement("option",{value:"seven"},"Seven"),l.default.createElement("option",{value:"eight"},"Eight"),l.default.createElement("option",{value:"nine"},"Nine"),l.default.createElement("option",{value:"ten"},"Ten")))}}],a&&i(n.prototype,a),r&&i(n,r),Object.defineProperty(n,"prototype",{writable:!1}),s}(l.default.Component)}},22863:function(e,t,n){var a=n(64836);t.Z=void 0;var r=a(n(67294)),l=a(n(45697)),o=a(n(47166)),i=a(n(17422)),u=o.default.bind(i.default),p={name:l.default.string.isRequired,src:l.default.string,url:l.default.string,version:l.default.string.isRequired},m=function(e){var t=e.src,n=e.name,a=e.url,l=e.version,o=r.default.createElement("a",{className:u("badge"),href:a||"https://www.npmjs.org/package/".concat(n,"/v/").concat(l)},r.default.createElement("span",{className:u("badge-name")},a?"package":"npm"),r.default.createElement("span",{className:u("badge-version")},"v".concat(l))),i=t?r.default.createElement("a",{className:u("badge"),href:t},r.default.createElement("span",{className:u("badge-name")},"github"),r.default.createElement("span",{className:u("badge-version")},"source")):void 0;return r.default.createElement("div",{className:u("badge-container")},o,i)};m.propTypes=p;var d=m;t.Z=d},49271:function(e,t,n){var a=n(64836),r=n(18698);t.Z=void 0;var l=a(n(27424)),o=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==r(e)&&"function"!=typeof e)return{default:e};var n=f(t);if(n&&n.has(e))return n.get(e);var a={},l=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var i=l?Object.getOwnPropertyDescriptor(e,o):null;i&&(i.get||i.set)?Object.defineProperty(a,o,i):a[o]=e[o]}a.default=e,n&&n.set(e,a);return a}(n(67294)),i=a(n(45697)),u=a(n(47166)),p=n(21538),m=a(n(33864)),d=a(n(23399)),c=n(51051),s=a(n(53560));function f(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(f=function(e){return e?n:t})(e)}var x=u.default.bind(s.default),v={example:i.default.element,exampleSrc:i.default.element,exampleCssSrc:i.default.element,title:i.default.string,description:i.default.node,isExpanded:i.default.bool},y=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","true")},g=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","false")},b=function(e){var t=e.example,n=e.exampleSrc,a=e.exampleCssSrc,r=e.title,i=e.description,u=e.isExpanded,s=(0,o.useState)(u),f=(0,l.default)(s,2),v=f[0],b=f[1],h=(0,o.useState)(!1),O=(0,l.default)(h,2),_=O[0],E=O[1],T=o.default.useContext(p.ThemeContext),j=void 0!==a,N=function(){E(!_),v&&b(!v)},w=function(){b(!v),_&&E(!_)},C=function(e,t){e.nativeEvent.keyCode!==c.KEY_SPACE&&e.nativeEvent.keyCode!==c.KEY_RETURN||(e.preventDefault(),t())};return o.default.createElement("div",{className:x("template",T.className)},o.default.createElement("div",{className:x("header")},r&&o.default.createElement("h2",{className:x("title")},r)),o.default.createElement("div",{className:x("content")},i&&o.default.createElement("div",{className:x("description")},i),t),o.default.createElement("div",{className:x("footer")},n?o.default.createElement("div",{className:x("button-container")},j&&o.default.createElement("button",{type:"button",className:x("css-toggle","item",{"is-selected":_}),onClick:N,onKeyDown:function(e){return C(e,N)},onBlur:y,onMouseDown:g,tabIndex:0,"data-focus-styles-enabled":!0},o.default.createElement(m.default,{className:x("chevron")}),o.default.createElement("span",null,"CSS"),o.default.createElement(d.default,{className:x("chevron")})),o.default.createElement("button",{type:"button",className:x("code-toggle","item",{"is-selected":v}),onClick:w,onKeyDown:function(e){return C(e,w)},onBlur:y,onMouseDown:g,tabIndex:0,"data-focus-styles-enabled":!0},o.default.createElement(m.default,{className:x("chevron")}),o.default.createElement("span",null,"Code"),o.default.createElement(d.default,{className:x("chevron")}))):null,o.default.createElement("div",null,_&&o.default.createElement("div",{className:x("css")},a),v&&o.default.createElement("div",{className:x("code")},n))))};b.propTypes=v,b.defaultProps={isExpanded:!1};var h=b;t.Z=h},57219:function(e,t,n){n.r(t),n.d(t,{default:function(){return fe}});var a=n(67294),r=n(81254),l=n(15985),o=n(27977),i=["components"];function u(){return u=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},u.apply(this,arguments)}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var m={};function d(e){var t=e.components,n=p(e,i);return(0,r.mdx)("wrapper",u({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport Avatar from 'terra-avatar';\n\nconst AvatarUser = () => (\n  <Avatar alt=\"The Last Airbender\" initials=\"JS\" />\n);\n\nexport default AvatarUser;\n\n")))}d.isMDXComponent=!0;var c=n(49271),s=function(e){var t=e.title,n=e.description,r=e.isExpanded;return a.createElement(c.Z,{title:t||"Avatar User",description:n,example:a.createElement(o.Z,null),exampleSrc:a.createElement(d,null),isExpanded:r})},f=n(69307),x=["components"];function v(){return v=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},v.apply(this,arguments)}function y(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var g={};function b(e){var t=e.components,n=y(e,x);return(0,r.mdx)("wrapper",v({},g,n,{components:t,mdxType:"MDXLayout"}),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport Avatar from 'terra-avatar';\n\nconst AvatarOneInitial = () => (\n  <Avatar alt=\"John\" initials=\"J\" />\n);\n\nexport default AvatarOneInitial;\n\n")))}b.isMDXComponent=!0;var h=function(e){var t=e.title,n=e.description,r=e.isExpanded;return a.createElement(c.Z,{title:t||"Avatar One Initial",description:n,example:a.createElement(f.Z,null),exampleSrc:a.createElement(b,null),isExpanded:r})},O=n(29399),_=["components"];function E(){return E=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},E.apply(this,arguments)}function T(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var j={};function N(e){var t=e.components,n=T(e,_);return(0,r.mdx)("wrapper",E({},j,n,{components:t,mdxType:"MDXLayout"}),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport Avatar from 'terra-avatar';\n\nconst AvatarTwoInitials = () => (\n  <Avatar alt=\"John Doe\" initials=\"JD\" />\n);\n\nexport default AvatarTwoInitials;\n\n")))}N.isMDXComponent=!0;var w=function(e){var t=e.title,n=e.description,r=e.isExpanded;return a.createElement(c.Z,{title:t||"Avatar Two Initials",description:n,example:a.createElement(O.Z,null),exampleSrc:a.createElement(N,null),isExpanded:r})},C=n(82710),S=["components"];function P(){return P=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},P.apply(this,arguments)}function D(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var A={};function R(e){var t=e.components,n=D(e,S);return(0,r.mdx)("wrapper",P({},A,n,{components:t,mdxType:"MDXLayout"}),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport Avatar from 'terra-avatar';\nimport exampleAvatarImage from '../../assets/150x150.jpg';\n\nconst AvatarImage = () => (\n  <Avatar image={exampleAvatarImage} initials=\"JS\" alt=\"Deep Space\" />\n);\n\nexport default AvatarImage;\n\n")))}R.isMDXComponent=!0;var k=function(e){var t=e.title,n=e.description,r=e.isExpanded;return a.createElement(c.Z,{title:t||"Avatar Image",description:n,example:a.createElement(C.Z,null),exampleSrc:a.createElement(R,null),isExpanded:r})},I=n(92541),M=["components"];function Z(){return Z=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},Z.apply(this,arguments)}function V(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var X={};function W(e){var t=e.components,n=V(e,M);return(0,r.mdx)("wrapper",Z({},X,n,{components:t,mdxType:"MDXLayout"}),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport Avatar from 'terra-avatar';\n\nconst AvatarImage = () => (\n  <Avatar alt=\"Patient #1\" isDeceased initials=\"JS\" />\n);\n\nexport default AvatarImage;\n\n")))}W.isMDXComponent=!0;var J=function(e){var t=e.title,n=e.description,r=e.isExpanded;return a.createElement(c.Z,{title:t||"Avatar Is Deceased",description:n,example:a.createElement(I.Z,null),exampleSrc:a.createElement(W,null),isExpanded:r})},q=n(5619),B=["components"];function L(){return L=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},L.apply(this,arguments)}function z(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var U={};function F(e){var t=e.components,n=z(e,B);return(0,r.mdx)("wrapper",L({},U,n,{components:t,mdxType:"MDXLayout"}),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport Avatar from 'terra-avatar';\nimport exampleAvatarImage from '../../assets/150x150.jpg';\n\nconst AvatarSize = () => (\n  <Avatar alt=\"User\" image={exampleAvatarImage} size=\"2em\" initials=\"JS\" />\n);\n\nexport default AvatarSize;\n\n")))}F.isMDXComponent=!0;var G=function(e){var t=e.title,n=e.description,r=e.isExpanded;return a.createElement(c.Z,{title:t||"Avatar Size",description:n,example:a.createElement(q.Z,null),exampleSrc:a.createElement(F,null),isExpanded:r})},K=n(96126),Y=["components"];function H(){return H=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},H.apply(this,arguments)}function Q(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var $={};function ee(e){var t=e.components,n=Q(e,Y);return(0,r.mdx)("wrapper",H({},$,n,{components:t,mdxType:"MDXLayout"}),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport PropTypes from 'prop-types';\nimport Avatar from 'terra-avatar';\nimport ColorVariantsWrapper from '../common/ColorVariantsWrapper';\n\nconst propTypes = { color: PropTypes.string };\n\nconst AvatarColorVariants = ({\n  ...props\n}) => (\n  <Avatar alt=\"Joe Shane\" initials=\"JS\" color={props.color} />\n);\n\nAvatarColorVariants.propTypes = propTypes;\nexport default ColorVariantsWrapper(AvatarColorVariants);\n\n")))}ee.isMDXComponent=!0;var te=function(e){var t=e.title,n=e.description,r=e.isExpanded;return a.createElement(c.Z,{title:t||"Avatar Color Variants",description:n,example:a.createElement(K.Z,null),exampleSrc:a.createElement(ee,null),isExpanded:r})},ne=n(78530),ae=["components"];function re(){return re=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},re.apply(this,arguments)}function le(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var oe={},ie="wrapper";function ue(e){var t=e.components,n=le(e,ae);return(0,r.mdx)(ie,re({},oe,n,{components:t,mdxType:"MDXLayout"}),(0,r.mdx)(ne.ZP,{mdxType:"PropsTable"},(0,r.mdx)(ne.X2,{key:"ROW1",mdxType:"Row"},(0,r.mdx)(ne.O,{mdxType:"PropNameCell"},"alt"),(0,r.mdx)(ne.Di,{mdxType:"TypeCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"string\n"))),(0,r.mdx)(ne.dS,{isRequired:!0,mdxType:"RequiredCell"}),(0,r.mdx)(ne.mW,{mdxType:"DefaultValueCell"},(0,r.mdx)("p",null,"none")),(0,r.mdx)(ne.Ex,{mdxType:"DescriptionCell"},(0,r.mdx)("p",null,"Specifies the alternative text for the image."))),(0,r.mdx)(ne.X2,{key:"ROW2",mdxType:"Row"},(0,r.mdx)(ne.O,{mdxType:"PropNameCell"},"color"),(0,r.mdx)(ne.Di,{mdxType:"TypeCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"enum: [\n  'auto'\n  'neutral'\n  'one'\n  'two'\n  'three'\n  'four'\n  'five'\n  'six'\n  'seven'\n  'eight'\n  'nine'\n  'ten'\n],\n"))),(0,r.mdx)(ne.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,r.mdx)(ne.mW,{mdxType:"DefaultValueCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"'auto'\n"))),(0,r.mdx)(ne.Ex,{mdxType:"DescriptionCell"},(0,r.mdx)("p",null,"Sets the background color. Defaults to ",(0,r.mdx)("inlineCode",{parentName:"p"},"auto"),". Accepted color variants are theme specific.\nOne of: ",(0,r.mdx)("inlineCode",{parentName:"p"},"'auto'"),", ",(0,r.mdx)("inlineCode",{parentName:"p"},"'neutral'"),", ",(0,r.mdx)("inlineCode",{parentName:"p"},"'one'"),", ",(0,r.mdx)("inlineCode",{parentName:"p"},"'two'"),", ",(0,r.mdx)("inlineCode",{parentName:"p"},"'three'"),", ",(0,r.mdx)("inlineCode",{parentName:"p"},"'four'"),", ",(0,r.mdx)("inlineCode",{parentName:"p"},"'five'"),", ",(0,r.mdx)("inlineCode",{parentName:"p"},"'six'"),", ",(0,r.mdx)("inlineCode",{parentName:"p"},"'seven'"),", ",(0,r.mdx)("inlineCode",{parentName:"p"},"'eight'"),", ",(0,r.mdx)("inlineCode",{parentName:"p"},"'nine'"),", ",(0,r.mdx)("inlineCode",{parentName:"p"},"'ten'"),"."))),(0,r.mdx)(ne.X2,{key:"ROW3",mdxType:"Row"},(0,r.mdx)(ne.O,{mdxType:"PropNameCell"},"hashValue"),(0,r.mdx)(ne.Di,{mdxType:"TypeCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"string\n"))),(0,r.mdx)(ne.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,r.mdx)(ne.mW,{mdxType:"DefaultValueCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"undefined\n"))),(0,r.mdx)(ne.Ex,{mdxType:"DescriptionCell"},(0,r.mdx)("p",null,"Value used for the hash function when color is set to ",(0,r.mdx)("inlineCode",{parentName:"p"},"auto"),". If not provided, hash function utilizes alt."))),(0,r.mdx)(ne.X2,{key:"ROW4",mdxType:"Row"},(0,r.mdx)(ne.O,{mdxType:"PropNameCell"},"image"),(0,r.mdx)(ne.Di,{mdxType:"TypeCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"string\n"))),(0,r.mdx)(ne.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,r.mdx)(ne.mW,{mdxType:"DefaultValueCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"undefined\n"))),(0,r.mdx)(ne.Ex,{mdxType:"DescriptionCell"},(0,r.mdx)("p",null,"The image to display."))),(0,r.mdx)(ne.X2,{key:"ROW5",mdxType:"Row"},(0,r.mdx)(ne.O,{mdxType:"PropNameCell"},"initials"),(0,r.mdx)(ne.Di,{mdxType:"TypeCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"string\n"))),(0,r.mdx)(ne.dS,{isRequired:!0,mdxType:"RequiredCell"}),(0,r.mdx)(ne.mW,{mdxType:"DefaultValueCell"},(0,r.mdx)("p",null,"none")),(0,r.mdx)(ne.Ex,{mdxType:"DescriptionCell"},(0,r.mdx)("p",null,"One or two letters to display."))),(0,r.mdx)(ne.X2,{key:"ROW6",mdxType:"Row"},(0,r.mdx)(ne.O,{mdxType:"PropNameCell"},"isAriaHidden"),(0,r.mdx)(ne.Di,{mdxType:"TypeCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"bool\n"))),(0,r.mdx)(ne.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,r.mdx)(ne.mW,{mdxType:"DefaultValueCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"false\n"))),(0,r.mdx)(ne.Ex,{mdxType:"DescriptionCell"},(0,r.mdx)("p",null,"Whether to hide avatar from the accessibility tree."))),(0,r.mdx)(ne.X2,{key:"ROW7",mdxType:"Row"},(0,r.mdx)(ne.O,{mdxType:"PropNameCell"},"isDeceased"),(0,r.mdx)(ne.Di,{mdxType:"TypeCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"bool\n"))),(0,r.mdx)(ne.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,r.mdx)(ne.mW,{mdxType:"DefaultValueCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"false\n"))),(0,r.mdx)(ne.Ex,{mdxType:"DescriptionCell"},(0,r.mdx)("p",null,"Whether the person is deceased. Overrides any color variant."))),(0,r.mdx)(ne.X2,{key:"ROW8",mdxType:"Row"},(0,r.mdx)(ne.O,{mdxType:"PropNameCell"},"size"),(0,r.mdx)(ne.Di,{mdxType:"TypeCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"string\n"))),(0,r.mdx)(ne.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,r.mdx)(ne.mW,{mdxType:"DefaultValueCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"undefined\n"))),(0,r.mdx)(ne.Ex,{mdxType:"DescriptionCell"},(0,r.mdx)("p",null,"Overrides the default size.")))))}ue.isMDXComponent=!0;var pe=["components"];function me(){return me=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},me.apply(this,arguments)}function de(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var ce={},se="wrapper";function fe(e){var t=e.components,n=de(e,pe);return(0,r.mdx)(se,me({},ce,n,{components:t,mdxType:"MDXLayout"}),(0,r.mdx)(l.C,{mdxType:"Badge"}),(0,r.mdx)("h1",{id:"terra-avatar"},"Terra Avatar"),(0,r.mdx)("p",null,"The ",(0,r.mdx)("inlineCode",{parentName:"p"},"Avatar")," variant represents a person - it displays an image or initials in a circular frame. If a valid image is not provided then the avatar falls back to displaying initials. This is the default export of the ",(0,r.mdx)("inlineCode",{parentName:"p"},"terra-avatar")," package."),(0,r.mdx)("h2",{id:"getting-started"},"Getting Started"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},"Install with ",(0,r.mdx)("a",{parentName:"li",href:"https://www.npmjs.com/"},"npmjs"),":",(0,r.mdx)("ul",{parentName:"li"},(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("inlineCode",{parentName:"li"},"npm install terra-avatar"))))),(0,r.mdx)("h2",{id:"peer-dependencies"},"Peer Dependencies"),(0,r.mdx)("p",null,"This component requires the following peer dependencies be installed in your app for the component to properly function."),(0,r.mdx)("table",null,(0,r.mdx)("thead",{parentName:"table"},(0,r.mdx)("tr",{parentName:"thead"},(0,r.mdx)("th",{parentName:"tr",align:null},"Peer Dependency"),(0,r.mdx)("th",{parentName:"tr",align:null},"Version"))),(0,r.mdx)("tbody",{parentName:"table"},(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"react"),(0,r.mdx)("td",{parentName:"tr",align:null},"^16.8.5")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"react-dom"),(0,r.mdx)("td",{parentName:"tr",align:null},"^16.8.5")))),(0,r.mdx)("h2",{id:"usage"},"Usage"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-jsx"},"import Avatar from 'terra-avatar';\n")),(0,r.mdx)("h2",{id:"component-features"},"Component Features"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("a",{parentName:"li",href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#cross-browser-support"},"Cross-Browser Support")),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("a",{parentName:"li",href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#mobile-support"},"Mobile Support"))),(0,r.mdx)("h2",{id:"examples"},"Examples"),(0,r.mdx)(s,{title:"Default - Fallback Icon",mdxType:"AvatarUser"}),(0,r.mdx)(h,{title:"Initials (1)",mdxType:"AvatarOneInitial"}),(0,r.mdx)(w,{title:"Initials (2)",mdxType:"AvatarTwoInitials"}),(0,r.mdx)(J,{title:"Is Deceased",mdxType:"AvatarIsDeceased"}),(0,r.mdx)(k,{title:"Image",mdxType:"AvatarImage"}),(0,r.mdx)(G,{title:"Override Size",mdxType:"AvatarSize"}),(0,r.mdx)(te,{title:"Toggle Color Variants - Theme Specific",mdxType:"AvatarColorVariants"}),(0,r.mdx)("h2",{id:"avatar-props"},"Avatar Props"),(0,r.mdx)(ue,{mdxType:"AvatarPropsTable"}))}fe.isMDXComponent=!0},15985:function(e,t,n){n.d(t,{C:function(){return l}});var a=n(67294),r=n(22863),l=function(e){var t=e.url;return a.createElement(r.Z,{src:"https://github.com/cerner/terra-core/tree/main/packages/terra-avatar",name:"terra-avatar",version:"3.17.0",url:t})}},96739:function(e,t,n){n.r(t),t.default=n.p+"51d085f765a7361bab659ffffdb9bb46.jpg"},17422:function(e,t,n){n.r(t),t.default={badge:"Badges-module__badge___vex-+","badge-container":"Badges-module__badge-container___B13Mv","badge-name":"Badges-module__badge-name___jkN0m","badge-version":"Badges-module__badge-version___agZ+P"}},53560:function(e,t,n){n.r(t),t.default={"clinical-lowlight-theme":"ExampleTemplate-module__clinical-lowlight-theme___rBbtD","orion-fusion-theme":"ExampleTemplate-module__orion-fusion-theme___GzA23",template:"ExampleTemplate-module__template___a4uPk",header:"ExampleTemplate-module__header___iFXV3",content:"ExampleTemplate-module__content___48m4Q",description:"ExampleTemplate-module__description___NwBJo",footer:"ExampleTemplate-module__footer___GpSoG","button-container":"ExampleTemplate-module__button-container___rAD11",css:"ExampleTemplate-module__css___+jtk1",code:"ExampleTemplate-module__code___7rC6C","css-toggle":"ExampleTemplate-module__css-toggle___chHK7","code-toggle":"ExampleTemplate-module__code-toggle___TGlE-","is-selected":"ExampleTemplate-module__is-selected___0BYwS",item:"ExampleTemplate-module__item___8FTQq",chevron:"ExampleTemplate-module__chevron___VbY7N",title:"ExampleTemplate-module__title___r+nbJ","dynamic-content":"ExampleTemplate-module__dynamic-content___k+1H7"}},33864:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=l(n(67294)),r=l(n(99139));function l(e){return e&&e.__esModule?e:{default:e}}function o(){return o=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},o.apply(this,arguments)}var i=function(e){var t=o({},e);return a.default.createElement(r.default,t,a.default.createElement("path",{d:"M10.3 24 33.8 0l3.9 3.8L18 24l19.7 20.2-3.9 3.8z"}))};i.displayName="IconChevronLeft",i.defaultProps={viewBox:"0 0 48 48","data-name":"Layer 1",xmlns:"http://www.w3.org/2000/svg"};t.default=i}}]);