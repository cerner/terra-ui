"use strict";(self.webpackChunkterra_ui=self.webpackChunkterra_ui||[]).push([[69418,33667,96890,16873,78996,39915,33442],{49271:function(e,t,n){var r=n(64836),a=n(18698);t.Z=void 0;var o=r(n(27424)),l=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==a(e)&&"function"!=typeof e)return{default:e};var n=f(t);if(n&&n.has(e))return n.get(e);var r={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var l in e)if("default"!==l&&Object.prototype.hasOwnProperty.call(e,l)){var u=o?Object.getOwnPropertyDescriptor(e,l):null;u&&(u.get||u.set)?Object.defineProperty(r,l,u):r[l]=e[l]}r.default=e,n&&n.set(e,r);return r}(n(67294)),u=r(n(45697)),p=r(n(47166)),i=n(21538),c=r(n(33864)),s=r(n(23399)),d=n(51051),m=r(n(53560));function f(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(f=function(e){return e?n:t})(e)}var y=p.default.bind(m.default),b={example:u.default.element,exampleSrc:u.default.element,exampleCssSrc:u.default.element,title:u.default.string,description:u.default.node,isExpanded:u.default.bool},x=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","true")},E=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","false")},_=function(e){var t=e.example,n=e.exampleSrc,r=e.exampleCssSrc,a=e.title,u=e.description,p=e.isExpanded,m=(0,l.useState)(p),f=(0,o.default)(m,2),b=f[0],_=f[1],v=(0,l.useState)(!1),h=(0,o.default)(v,2),g=h[0],O=h[1],w=l.default.useContext(i.ThemeContext),T=void 0!==r,j=function(){O(!g),b&&_(!b)},P=function(){_(!b),g&&O(!g)},C=function(e,t){e.nativeEvent.keyCode!==d.KEY_SPACE&&e.nativeEvent.keyCode!==d.KEY_RETURN||(e.preventDefault(),t())};return l.default.createElement("div",{className:y("template",w.className)},l.default.createElement("div",{className:y("header")},a&&l.default.createElement("h2",{className:y("title")},a)),l.default.createElement("div",{className:y("content")},u&&l.default.createElement("div",{className:y("description")},u),t),l.default.createElement("div",{className:y("footer")},n?l.default.createElement("div",{className:y("button-container")},T&&l.default.createElement("button",{type:"button",className:y("css-toggle","item",{"is-selected":g}),onClick:j,onKeyDown:function(e){return C(e,j)},onBlur:x,onMouseDown:E,tabIndex:0,"data-focus-styles-enabled":!0},l.default.createElement(c.default,{className:y("chevron")}),l.default.createElement("span",null,"CSS"),l.default.createElement(s.default,{className:y("chevron")})),l.default.createElement("button",{type:"button",className:y("code-toggle","item",{"is-selected":b}),onClick:P,onKeyDown:function(e){return C(e,P)},onBlur:x,onMouseDown:E,tabIndex:0,"data-focus-styles-enabled":!0},l.default.createElement(c.default,{className:y("chevron")}),l.default.createElement("span",null,"Code"),l.default.createElement(s.default,{className:y("chevron")}))):null,l.default.createElement("div",null,g&&l.default.createElement("div",{className:y("css")},r),b&&l.default.createElement("div",{className:y("code")},n))))};_.propTypes=b,_.defaultProps={isExpanded:!1};var v=_;t.Z=v},25610:function(e,t,n){n.r(t),n.d(t,{default:function(){return B}});var r=n(67294),a=n(81254),o=n(78530),l=["components"];function u(){return u=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},u.apply(this,arguments)}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i={},c="wrapper";function s(e){var t=e.components,n=p(e,l);return(0,a.mdx)(c,u({},i,n,{components:t,mdxType:"MDXLayout"}),(0,a.mdx)(o.ZP,{mdxType:"PropsTable"},(0,a.mdx)(o.X2,{key:"ROW1",mdxType:"Row"},(0,a.mdx)(o.O,{mdxType:"PropNameCell"},"children"),(0,a.mdx)(o.Di,{mdxType:"TypeCell"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"node\n"))),(0,a.mdx)(o.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,a.mdx)(o.mW,{mdxType:"DefaultValueCell"},(0,a.mdx)("p",null,"none")),(0,a.mdx)(o.Ex,{mdxType:"DescriptionCell"},(0,a.mdx)("p",null,"Components to render within the context of the ApplicationErrorBoundary. Exceptions thrown\nby these components during their render lifecycle will be caught by the ApplicationErrorBoundary.")))))}s.isMDXComponent=!0;var d=n(91062),m=["components"];function f(){return f=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},f.apply(this,arguments)}function y(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var b={};function x(e){var t=e.components,n=y(e,m);return(0,a.mdx)("wrapper",f({},b,n,{components:t,mdxType:"MDXLayout"}),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React, { useState } from 'react';\nimport PropTypes from 'prop-types';\nimport classNames from 'classnames/bind';\n\nimport ApplicationErrorBoundary from 'terra-application/lib/application-error-boundary/ApplicationErrorBoundary';\nimport styles from './ApplicationErrorBoundaryExample.module.scss';\n\nconst cx = classNames.bind(styles);\n\nconst ErrorThrowingComponent = () => {\n  const [throwError, setThrowError] = useState(false);\n\n  if (throwError) {\n    throw new Error('whoops');\n  }\n\n  return (\n    <>\n      <p>Press the button below to trigger an error.</p>\n      <button type=\"button\" onClick={() => { setThrowError(true); }}>Trigger Error</button>\n    </>\n  );\n};\n\nconst ApplicationErrorBoundaryExampleWrapper = ({ children }) => {\n  const [refresh, setRefresh] = useState(false);\n\n  return (\n    <div className={cx('example')}>\n      <button type=\"button\" onClick={() => { setRefresh(!refresh); }}>Refresh Component</button>\n      <ApplicationErrorBoundary>\n        {children}\n      </ApplicationErrorBoundary>\n    </div>\n  );\n};\n\nApplicationErrorBoundaryExampleWrapper.propTypes = {\n  children: PropTypes.node,\n};\n\nconst ApplicationErrorBoundaryExample = () => (\n  <ApplicationErrorBoundaryExampleWrapper>\n    <ErrorThrowingComponent />\n  </ApplicationErrorBoundaryExampleWrapper>\n);\n\nexport default ApplicationErrorBoundaryExample;\n\n")))}x.isMDXComponent=!0;var E=n(49271),_=["components"];function v(){return v=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},v.apply(this,arguments)}function h(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var g={};function O(e){var t=e.components,n=h(e,_);return(0,a.mdx)("wrapper",v({},g,n,{components:t,mdxType:"MDXLayout"}),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-scss"},":local {\n  .example {\n    height: 30rem;\n    width: 100%;\n  }\n}\n\n")))}O.isMDXComponent=!0;var w=function(e){var t=e.title,n=e.description,a=e.isExpanded;return r.createElement(E.Z,{title:t||"Application Error Boundary Example",description:n,example:r.createElement(d.Z,null),exampleCssSrc:r.createElement(O,null),exampleSrc:r.createElement(x,null),isExpanded:a})},T=["components"];function j(){return j=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},j.apply(this,arguments)}function P(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var C={},N="wrapper";function B(e){var t=e.components,n=P(e,T);return(0,a.mdx)(N,j({},C,n,{components:t,mdxType:"MDXLayout"}),(0,a.mdx)("h1",{id:"applicationerrorboundary"},"ApplicationErrorBoundary"),(0,a.mdx)("p",null,"The ApplicationErrorBoundary catches exceptions thrown during its children's render lifecycle and renders the error for the user's benefit. The ApplicationErrorBoundary can be rendered at various levels of an application to isolate errors to various parts of the component tree."),(0,a.mdx)("h2",{id:"usage"},"Usage"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-jsx"},"import ApplicationErrorBoundary from 'terra-application/lib/application-error-boundary';\n")),(0,a.mdx)("h2",{id:"props"},"Props"),(0,a.mdx)(s,{mdxType:"PropsTable"}),(0,a.mdx)("h2",{id:"example"},"Example"),(0,a.mdx)(w,{mdxType:"ApplicationErrorBoundaryExample"}))}B.isMDXComponent=!0},53560:function(e,t,n){n.r(t),t.default={"clinical-lowlight-theme":"ExampleTemplate-module__clinical-lowlight-theme___rBbtD","orion-fusion-theme":"ExampleTemplate-module__orion-fusion-theme___GzA23",template:"ExampleTemplate-module__template___a4uPk",header:"ExampleTemplate-module__header___iFXV3",content:"ExampleTemplate-module__content___48m4Q",description:"ExampleTemplate-module__description___NwBJo",footer:"ExampleTemplate-module__footer___GpSoG","button-container":"ExampleTemplate-module__button-container___rAD11",css:"ExampleTemplate-module__css___+jtk1",code:"ExampleTemplate-module__code___7rC6C","css-toggle":"ExampleTemplate-module__css-toggle___chHK7","code-toggle":"ExampleTemplate-module__code-toggle___TGlE-","is-selected":"ExampleTemplate-module__is-selected___0BYwS",item:"ExampleTemplate-module__item___8FTQq",chevron:"ExampleTemplate-module__chevron___VbY7N",title:"ExampleTemplate-module__title___r+nbJ","dynamic-content":"ExampleTemplate-module__dynamic-content___k+1H7"}},60878:function(e,t,n){n.r(t),t.default={example:"ApplicationErrorBoundaryExample-module__example___QBiGu"}},91062:function(e,t,n){var r=n(64836),a=n(18698);t.Z=void 0;var o=r(n(27424)),l=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==a(e)&&"function"!=typeof e)return{default:e};var n=s(t);if(n&&n.has(e))return n.get(e);var r={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var l in e)if("default"!==l&&Object.prototype.hasOwnProperty.call(e,l)){var u=o?Object.getOwnPropertyDescriptor(e,l):null;u&&(u.get||u.set)?Object.defineProperty(r,l,u):r[l]=e[l]}r.default=e,n&&n.set(e,r);return r}(n(67294)),u=r(n(45697)),p=r(n(47166)),i=r(n(74229)),c=r(n(60878));function s(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(s=function(e){return e?n:t})(e)}var d=p.default.bind(c.default),m=function(){var e=(0,l.useState)(!1),t=(0,o.default)(e,2),n=t[0],r=t[1];if(n)throw new Error("whoops");return l.default.createElement(l.default.Fragment,null,l.default.createElement("p",null,"Press the button below to trigger an error."),l.default.createElement("button",{type:"button",onClick:function(){r(!0)}},"Trigger Error"))},f=function(e){var t=e.children,n=(0,l.useState)(!1),r=(0,o.default)(n,2),a=r[0],u=r[1];return l.default.createElement("div",{className:d("example")},l.default.createElement("button",{type:"button",onClick:function(){u(!a)}},"Refresh Component"),l.default.createElement(i.default,null,t))};f.propTypes={children:u.default.node};var y=function(){return l.default.createElement(f,null,l.default.createElement(m,null))};t.Z=y},33864:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=o(n(67294)),a=o(n(99139));function o(e){return e&&e.__esModule?e:{default:e}}function l(){return l=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},l.apply(this,arguments)}var u=function(e){var t=l({},e);return r.default.createElement(a.default,t,r.default.createElement("path",{d:"M10.3 24 33.8 0l3.9 3.8L18 24l19.7 20.2-3.9 3.8z"}))};u.displayName="IconChevronLeft",u.defaultProps={viewBox:"0 0 48 48","data-name":"Layer 1",xmlns:"http://www.w3.org/2000/svg"};t.default=u}}]);