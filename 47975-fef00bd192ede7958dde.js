"use strict";(self.webpackChunkterra_ui=self.webpackChunkterra_ui||[]).push([[47975,45627,37344,33667,96890,14041,27444,85565,3353,80858,17657,5161,19260,45865,85355,33315,3193,4845,20444,26806,46647,85161,38681,15318,40411,18101,38443,78996,39915,33442],{22863:function(e,t,n){var a=n(64836);t.Z=void 0;var r=a(n(67294)),l=a(n(45697)),o=a(n(47166)),u=a(n(17422)),d=o.default.bind(u.default),i={name:l.default.string.isRequired,src:l.default.string,url:l.default.string,version:l.default.string.isRequired},p=function(e){var t=e.src,n=e.name,a=e.url,l=e.version,o=r.default.createElement("a",{className:d("badge"),href:a||"https://www.npmjs.org/package/".concat(n,"/v/").concat(l)},r.default.createElement("span",{className:d("badge-name")},a?"package":"npm"),r.default.createElement("span",{className:d("badge-version")},"v".concat(l))),u=t?r.default.createElement("a",{className:d("badge"),href:t},r.default.createElement("span",{className:d("badge-name")},"github"),r.default.createElement("span",{className:d("badge-version")},"source")):void 0;return r.default.createElement("div",{className:d("badge-container")},o,u)};p.propTypes=i;var m=p;t.Z=m},49271:function(e,t,n){var a=n(64836),r=n(18698);t.Z=void 0;var l=a(n(27424)),o=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==r(e)&&"function"!=typeof e)return{default:e};var n=f(t);if(n&&n.has(e))return n.get(e);var a={},l=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var u=l?Object.getOwnPropertyDescriptor(e,o):null;u&&(u.get||u.set)?Object.defineProperty(a,o,u):a[o]=e[o]}a.default=e,n&&n.set(e,a);return a}(n(67294)),u=a(n(45697)),d=a(n(47166)),i=n(21538),p=a(n(33864)),m=a(n(23399)),c=n(51051),s=a(n(53560));function f(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(f=function(e){return e?n:t})(e)}var x=d.default.bind(s.default),y={example:u.default.element,exampleSrc:u.default.element,exampleCssSrc:u.default.element,title:u.default.string,description:u.default.node,isExpanded:u.default.bool},b=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","true")},v=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","false")},g=function(e){var t=e.example,n=e.exampleSrc,a=e.exampleCssSrc,r=e.title,u=e.description,d=e.isExpanded,s=(0,o.useState)(d),f=(0,l.default)(s,2),y=f[0],g=f[1],h=(0,o.useState)(!1),O=(0,l.default)(h,2),T=O[0],_=O[1],N=o.default.useContext(i.ThemeContext),C=void 0!==a,j=function(){_(!T),y&&g(!y)},w=function(){g(!y),T&&_(!T)},D=function(e,t){e.nativeEvent.keyCode!==c.KEY_SPACE&&e.nativeEvent.keyCode!==c.KEY_RETURN||(e.preventDefault(),t())};return o.default.createElement("div",{className:x("template",N.className)},o.default.createElement("div",{className:x("header")},r&&o.default.createElement("h2",{className:x("title")},r)),o.default.createElement("div",{className:x("content")},u&&o.default.createElement("div",{className:x("description")},u),t),o.default.createElement("div",{className:x("footer")},n?o.default.createElement("div",{className:x("button-container")},C&&o.default.createElement("button",{type:"button",className:x("css-toggle","item",{"is-selected":T}),onClick:j,onKeyDown:function(e){return D(e,j)},onBlur:b,onMouseDown:v,tabIndex:0,"data-focus-styles-enabled":!0},o.default.createElement(p.default,{className:x("chevron")}),o.default.createElement("span",null,"CSS"),o.default.createElement(m.default,{className:x("chevron")})),o.default.createElement("button",{type:"button",className:x("code-toggle","item",{"is-selected":y}),onClick:w,onKeyDown:function(e){return D(e,w)},onBlur:b,onMouseDown:v,tabIndex:0,"data-focus-styles-enabled":!0},o.default.createElement(p.default,{className:x("chevron")}),o.default.createElement("span",null,"Code"),o.default.createElement(m.default,{className:x("chevron")}))):null,o.default.createElement("div",null,T&&o.default.createElement("div",{className:x("css")},a),y&&o.default.createElement("div",{className:x("code")},n))))};g.propTypes=y,g.defaultProps={isExpanded:!1};var h=g;t.Z=h},45325:function(e,t,n){var a=n(64836),r=n(18698);t.Z=void 0;var l=a(n(27424)),o=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==r(e)&&"function"!=typeof e)return{default:e};var n=d(t);if(n&&n.has(e))return n.get(e);var a={},l=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var u=l?Object.getOwnPropertyDescriptor(e,o):null;u&&(u.get||u.set)?Object.defineProperty(a,o,u):a[o]=e[o]}a.default=e,n&&n.set(e,a);return a}(n(67294)),u=a(n(24513));function d(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(d=function(e){return e?n:t})(e)}t.Z=function(){var e=(0,o.useState)(""),t=(0,l.default)(e,2),n=t[0],a=t[1];return o.default.createElement(o.default.Fragment,null,o.default.createElement(u.default,{name:"date-input-value",value:n,onChange:function(e,t){return a(t)},displayFormat:"day-month-year"}),o.default.createElement("p",null,"DateInput Value: ".concat(n)))}},42342:function(e,t,n){var a=n(64836),r=n(18698);t.Z=void 0;var l=a(n(27424)),o=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==r(e)&&"function"!=typeof e)return{default:e};var n=d(t);if(n&&n.has(e))return n.get(e);var a={},l=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var u=l?Object.getOwnPropertyDescriptor(e,o):null;u&&(u.get||u.set)?Object.defineProperty(a,o,u):a[o]=e[o]}a.default=e,n&&n.set(e,a);return a}(n(67294)),u=a(n(24513));function d(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(d=function(e){return e?n:t})(e)}t.Z=function(){var e=(0,o.useState)(""),t=(0,l.default)(e,2),n=t[0],a=t[1];return o.default.createElement(o.default.Fragment,null,o.default.createElement(u.default,{name:"date-input-value",value:n,onChange:function(e,t){return a(t)}}),o.default.createElement("p",null,"DateInput Value: ".concat(n)))}},99170:function(e,t,n){var a=n(64836),r=n(18698);t.Z=void 0;var l=a(n(27424)),o=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==r(e)&&"function"!=typeof e)return{default:e};var n=d(t);if(n&&n.has(e))return n.get(e);var a={},l=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var u=l?Object.getOwnPropertyDescriptor(e,o):null;u&&(u.get||u.set)?Object.defineProperty(a,o,u):a[o]=e[o]}a.default=e,n&&n.set(e,a);return a}(n(67294)),u=a(n(24513));function d(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(d=function(e){return e?n:t})(e)}t.Z=function(){var e=(0,o.useState)(""),t=(0,l.default)(e,2),n=t[0],a=t[1];return o.default.createElement(o.default.Fragment,null,o.default.createElement(u.default,{name:"date-input-value",value:n,onChange:function(e,t){return a(t)},displayFormat:"month-day-year"}),o.default.createElement("p",null,"DateInput Value: ".concat(n)))}},72914:function(e,t,n){n.r(t),n.d(t,{default:function(){return X}});var a=n(67294),r=n(81254),l=n(71464),o=n(78530),u=["components"];function d(){return d=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},d.apply(this,arguments)}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p={},m="wrapper";function c(e){var t=e.components,n=i(e,u);return(0,r.mdx)(m,d({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.mdx)(o.ZP,{mdxType:"PropsTable"},(0,r.mdx)(o.X2,{key:"ROW1",mdxType:"Row"},(0,r.mdx)(o.O,{mdxType:"PropNameCell"},"a11yLabel"),(0,r.mdx)(o.Di,{mdxType:"TypeCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"string\n"))),(0,r.mdx)(o.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,r.mdx)(o.mW,{mdxType:"DefaultValueCell"},(0,r.mdx)("p",null,"none")),(0,r.mdx)(o.Ex,{mdxType:"DescriptionCell"},(0,r.mdx)("p",null,"An identifier used by assistive technologies like screen readers to briefly describe this time input to users.\nThe label is not rendered visually."),(0,r.mdx)("p",null,(0,r.mdx)("img",{parentName:"p",src:"https://badgen.net/badge/UX/Accessibility/blue",alt:"IMPORTANT"}),"  ",(0,r.mdx)("strong",{parentName:"p"},"BEST PRACTICE FOR ACCESSIBILITY"),": you ",(0,r.mdx)("em",{parentName:"p"},"SHOULD")," set this to match whatever visible label you give in your UI.\nCurrently this is optional for passivity reasons, but it will become mandatory in a future major version."))),(0,r.mdx)(o.X2,{key:"ROW2",mdxType:"Row"},(0,r.mdx)(o.O,{mdxType:"PropNameCell"},"name"),(0,r.mdx)(o.Di,{mdxType:"TypeCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"string\n"))),(0,r.mdx)(o.dS,{isRequired:!0,mdxType:"RequiredCell"}),(0,r.mdx)(o.mW,{mdxType:"DefaultValueCell"},(0,r.mdx)("p",null,"none")),(0,r.mdx)(o.Ex,{mdxType:"DescriptionCell"},(0,r.mdx)("p",null,"Name of the date input. This name should be unique."))),(0,r.mdx)(o.X2,{key:"ROW3",mdxType:"Row"},(0,r.mdx)(o.O,{mdxType:"PropNameCell"},"dayAttributes"),(0,r.mdx)(o.Di,{mdxType:"TypeCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"object\n"))),(0,r.mdx)(o.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,r.mdx)(o.mW,{mdxType:"DefaultValueCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"{}\n"))),(0,r.mdx)(o.Ex,{mdxType:"DescriptionCell"},(0,r.mdx)("p",null,"Custom input attributes to apply to the day input"))),(0,r.mdx)(o.X2,{key:"ROW4",mdxType:"Row"},(0,r.mdx)(o.O,{mdxType:"PropNameCell"},"disabled"),(0,r.mdx)(o.Di,{mdxType:"TypeCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"bool\n"))),(0,r.mdx)(o.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,r.mdx)(o.mW,{mdxType:"DefaultValueCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"false\n"))),(0,r.mdx)(o.Ex,{mdxType:"DescriptionCell"},(0,r.mdx)("p",null,"Whether the date input should be disabled."))),(0,r.mdx)(o.X2,{key:"ROW5",mdxType:"Row"},(0,r.mdx)(o.O,{mdxType:"PropNameCell"},"displayFormat"),(0,r.mdx)(o.Di,{mdxType:"TypeCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"enum: [\n  'month-day-year'\n  'day-month-year'\n],\n"))),(0,r.mdx)(o.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,r.mdx)(o.mW,{mdxType:"DefaultValueCell"},(0,r.mdx)("p",null,"none")),(0,r.mdx)(o.Ex,{mdxType:"DescriptionCell"},(0,r.mdx)("p",null,"Can be used to set the display format. One of ",(0,r.mdx)("inlineCode",{parentName:"p"},"month-day-year")," or ",(0,r.mdx)("inlineCode",{parentName:"p"},"day-month-year"),".\nOverrides default locale display format."))),(0,r.mdx)(o.X2,{key:"ROW6",mdxType:"Row"},(0,r.mdx)(o.O,{mdxType:"PropNameCell"},"isIncomplete"),(0,r.mdx)(o.Di,{mdxType:"TypeCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"bool\n"))),(0,r.mdx)(o.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,r.mdx)(o.mW,{mdxType:"DefaultValueCell"},(0,r.mdx)("p",null,"none")),(0,r.mdx)(o.Ex,{mdxType:"DescriptionCell"},(0,r.mdx)("p",null,"Whether the input displays as Incomplete. Use when no value has been provided. ",(0,r.mdx)("em",{parentName:"p"},"(usage note: ",(0,r.mdx)("inlineCode",{parentName:"em"},"required")," must also be set)"),"."))),(0,r.mdx)(o.X2,{key:"ROW7",mdxType:"Row"},(0,r.mdx)(o.O,{mdxType:"PropNameCell"},"isInvalid"),(0,r.mdx)(o.Di,{mdxType:"TypeCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"bool\n"))),(0,r.mdx)(o.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,r.mdx)(o.mW,{mdxType:"DefaultValueCell"},(0,r.mdx)("p",null,"none")),(0,r.mdx)(o.Ex,{mdxType:"DescriptionCell"},(0,r.mdx)("p",null,"Whether the input displays as Invalid. Use when value does not meet validation pattern."))),(0,r.mdx)(o.X2,{key:"ROW8",mdxType:"Row"},(0,r.mdx)(o.O,{mdxType:"PropNameCell"},"monthAttributes"),(0,r.mdx)(o.Di,{mdxType:"TypeCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"object\n"))),(0,r.mdx)(o.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,r.mdx)(o.mW,{mdxType:"DefaultValueCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"{}\n"))),(0,r.mdx)(o.Ex,{mdxType:"DescriptionCell"},(0,r.mdx)("p",null,"Custom input attributes to apply to the month select"))),(0,r.mdx)(o.X2,{key:"ROW9",mdxType:"Row"},(0,r.mdx)(o.O,{mdxType:"PropNameCell"},"onBlur"),(0,r.mdx)(o.Di,{mdxType:"TypeCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"func\n"))),(0,r.mdx)(o.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,r.mdx)(o.mW,{mdxType:"DefaultValueCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"null\n"))),(0,r.mdx)(o.Ex,{mdxType:"DescriptionCell"},(0,r.mdx)("p",null,"A callback function to execute when the entire date input component loses focus.\nThis event does not get triggered when the focus is moved from one input to another within the date input component because the focus is still within the main date input component."))),(0,r.mdx)(o.X2,{key:"ROW10",mdxType:"Row"},(0,r.mdx)(o.O,{mdxType:"PropNameCell"},"onChange"),(0,r.mdx)(o.Di,{mdxType:"TypeCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"func\n"))),(0,r.mdx)(o.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,r.mdx)(o.mW,{mdxType:"DefaultValueCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"null\n"))),(0,r.mdx)(o.Ex,{mdxType:"DescriptionCell"},(0,r.mdx)("p",null,"A callback function to execute when a date is entered.\nThe first parameter is the event. The second parameter is the changed date value."))),(0,r.mdx)(o.X2,{key:"ROW11",mdxType:"Row"},(0,r.mdx)(o.O,{mdxType:"PropNameCell"},"onFocus"),(0,r.mdx)(o.Di,{mdxType:"TypeCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"func\n"))),(0,r.mdx)(o.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,r.mdx)(o.mW,{mdxType:"DefaultValueCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"undefined\n"))),(0,r.mdx)(o.Ex,{mdxType:"DescriptionCell"},(0,r.mdx)("p",null,"A callback function triggered when the day, month, or year input receives focus."))),(0,r.mdx)(o.X2,{key:"ROW12",mdxType:"Row"},(0,r.mdx)(o.O,{mdxType:"PropNameCell"},"refCallback"),(0,r.mdx)(o.Di,{mdxType:"TypeCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"func\n"))),(0,r.mdx)(o.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,r.mdx)(o.mW,{mdxType:"DefaultValueCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"undefined\n"))),(0,r.mdx)(o.Ex,{mdxType:"DescriptionCell"},(0,r.mdx)("p",null,"Callback ref to access date input containing DOM element."))),(0,r.mdx)(o.X2,{key:"ROW13",mdxType:"Row"},(0,r.mdx)(o.O,{mdxType:"PropNameCell"},"required"),(0,r.mdx)(o.Di,{mdxType:"TypeCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"bool\n"))),(0,r.mdx)(o.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,r.mdx)(o.mW,{mdxType:"DefaultValueCell"},(0,r.mdx)("p",null,"none")),(0,r.mdx)(o.Ex,{mdxType:"DescriptionCell"},(0,r.mdx)("p",null,"Whether is the date input is required"))),(0,r.mdx)(o.X2,{key:"ROW14",mdxType:"Row"},(0,r.mdx)(o.O,{mdxType:"PropNameCell"},"value"),(0,r.mdx)(o.Di,{mdxType:"TypeCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"string\n"))),(0,r.mdx)(o.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,r.mdx)(o.mW,{mdxType:"DefaultValueCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"undefined\n"))),(0,r.mdx)(o.Ex,{mdxType:"DescriptionCell"},(0,r.mdx)("p",null,"An date string representation of the date value used for the component. This should be in ISO 8601 format: YYYY-MM-DD."))),(0,r.mdx)(o.X2,{key:"ROW15",mdxType:"Row"},(0,r.mdx)(o.O,{mdxType:"PropNameCell"},"yearAttributes"),(0,r.mdx)(o.Di,{mdxType:"TypeCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"object\n"))),(0,r.mdx)(o.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,r.mdx)(o.mW,{mdxType:"DefaultValueCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"{}\n"))),(0,r.mdx)(o.Ex,{mdxType:"DescriptionCell"},(0,r.mdx)("p",null,"Custom input attributes to apply to the year input")))))}c.isMDXComponent=!0;var s=n(42342),f=["components"];function x(){return x=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},x.apply(this,arguments)}function y(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var b={};function v(e){var t=e.components,n=y(e,f);return(0,r.mdx)("wrapper",x({},b,n,{components:t,mdxType:"MDXLayout"}),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React, { useState } from 'react';\n\nimport DateInput from 'terra-date-input';\n\nconst Example = () => {\n  const [value, setValue] = useState('');\n\n  return (\n    <React.Fragment>\n      <DateInput\n        name=\"date-input-value\"\n        value={value}\n        onChange={(event, dateString) => setValue(dateString)}\n      />\n      <p>{`DateInput Value: ${value}`}</p>\n    </React.Fragment>\n  );\n};\n\nexport default Example;\n\n")))}v.isMDXComponent=!0;var g=n(49271),h=function(e){var t=e.title,n=e.description,r=e.isExpanded;return a.createElement(g.Z,{title:t||"Default Date Input",description:n,example:a.createElement(s.Z,null),exampleSrc:a.createElement(v,null),isExpanded:r})},O=n(99170),T=["components"];function _(){return _=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},_.apply(this,arguments)}function N(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var C={};function j(e){var t=e.components,n=N(e,T);return(0,r.mdx)("wrapper",_({},C,n,{components:t,mdxType:"MDXLayout"}),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React, { useState } from 'react';\n\nimport DateInput from 'terra-date-input';\n\nconst Example = () => {\n  const [value, setValue] = useState('');\n\n  return (\n    <React.Fragment>\n      <DateInput\n        name=\"date-input-value\"\n        value={value}\n        onChange={(event, dateString) => setValue(dateString)}\n        displayFormat=\"month-day-year\"\n      />\n      <p>{`DateInput Value: ${value}`}</p>\n    </React.Fragment>\n  );\n};\n\nexport default Example;\n\n")))}j.isMDXComponent=!0;var w=function(e){var t=e.title,n=e.description,r=e.isExpanded;return a.createElement(g.Z,{title:t||"Month Day Year Date Input",description:n,example:a.createElement(O.Z,null),exampleSrc:a.createElement(j,null),isExpanded:r})},D=n(45325),E=["components"];function P(){return P=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},P.apply(this,arguments)}function R(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var S={};function k(e){var t=e.components,n=R(e,E);return(0,r.mdx)("wrapper",P({},S,n,{components:t,mdxType:"MDXLayout"}),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React, { useState } from 'react';\n\nimport DateInput from 'terra-date-input';\n\nconst Example = () => {\n  const [value, setValue] = useState('');\n\n  return (\n    <React.Fragment>\n      <DateInput\n        name=\"date-input-value\"\n        value={value}\n        onChange={(event, dateString) => setValue(dateString)}\n        displayFormat=\"day-month-year\"\n      />\n      <p>{`DateInput Value: ${value}`}</p>\n    </React.Fragment>\n  );\n};\n\nexport default Example;\n\n")))}k.isMDXComponent=!0;var I=function(e){var t=e.title,n=e.description,r=e.isExpanded;return a.createElement(g.Z,{title:t||"Day Month Year Date Input",description:n,example:a.createElement(D.Z,null),exampleSrc:a.createElement(k,null),isExpanded:r})},M=["components"];function q(){return q=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},q.apply(this,arguments)}function W(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var V={},F="wrapper";function X(e){var t=e.components,n=W(e,M);return(0,r.mdx)(F,q({},V,n,{components:t,mdxType:"MDXLayout"}),(0,r.mdx)(l.C,{mdxType:"Badge"}),(0,r.mdx)("h1",{id:"terra-date-input"},"Terra Date Input"),(0,r.mdx)("p",null,"The DateInput allows for easy data entry of known dates like birthdays, anniversaries, etc. The display of the DateInput is localized based on the locale but can be customized via the ",(0,r.mdx)("inlineCode",{parentName:"p"},"displayFormat")," prop. The DateInput uses the ISO 8601 format for date values (YYYY-MM-DD)."),(0,r.mdx)("p",null,"Additional functionality for quick date entry is available with specific ",(0,r.mdx)("a",{parentName:"p",href:"/terra-ui/components/cerner-terra-framework-docs/date-input/keyboard-shortcuts"},"keyboard shortcuts"),"."),(0,r.mdx)("h2",{id:"getting-started"},"Getting Started"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},"Install with ",(0,r.mdx)("a",{parentName:"li",href:"https://www.npmjs.com/"},"npmjs"),":",(0,r.mdx)("ul",{parentName:"li"},(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("inlineCode",{parentName:"li"},"npm install terra-date-input"))))),(0,r.mdx)("h2",{id:"peer-dependencies"},"Peer Dependencies"),(0,r.mdx)("p",null,"This component requires the following peer dependencies be installed in your app for the component to properly function."),(0,r.mdx)("table",null,(0,r.mdx)("thead",{parentName:"table"},(0,r.mdx)("tr",{parentName:"thead"},(0,r.mdx)("th",{parentName:"tr",align:null},"Peer Dependency"),(0,r.mdx)("th",{parentName:"tr",align:null},"Version"))),(0,r.mdx)("tbody",{parentName:"table"},(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"react"),(0,r.mdx)("td",{parentName:"tr",align:null},"^16.8.5")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"react-dom"),(0,r.mdx)("td",{parentName:"tr",align:null},"^16.8.5")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"react-intl"),(0,r.mdx)("td",{parentName:"tr",align:null},"^2.8.0")))),(0,r.mdx)("h2",{id:"component-features"},"Component Features"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("a",{parentName:"li",href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#cross-browser-support"},"Cross-Browser Support")),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("a",{parentName:"li",href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#mobile-support"},"Mobile Support")),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("a",{parentName:"li",href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#internationalization-i18n"},"Internationalization Support")),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("a",{parentName:"li",href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#ltr--rtl"},"LTR/RTL Support"))),(0,r.mdx)("h2",{id:"examples"},"Examples"),(0,r.mdx)(h,{title:"Default DateInput",mdxType:"DefaultDateInput"}),(0,r.mdx)(w,{title:"Month Day Year Display Format DateInput",mdxType:"MonthDayYearDateInput"}),(0,r.mdx)(I,{title:"Day Month Year Display Format DateInput",mdxType:"DayMonthYearDateInput"}),(0,r.mdx)("h2",{id:"date-input-props-table"},"Date Input props table"),(0,r.mdx)(c,{mdxType:"DateInputPropsTable"}),(0,r.mdx)("h2",{id:"testing"},"Testing"),(0,r.mdx)("p",null,"Date Input uses ",(0,r.mdx)("inlineCode",{parentName:"p"},"uuid")," which changes the component's description id dynamically. To mock the return value with the Jest testing library, ",(0,r.mdx)("inlineCode",{parentName:"p"},"jest.spyOn")," can be used."),(0,r.mdx)("p",null,"If Enzyme ",(0,r.mdx)("inlineCode",{parentName:"p"},"shallow")," rendering is being used for the tests then the mock may not be required. However, if ",(0,r.mdx)("inlineCode",{parentName:"p"},"mount")," is used then ",(0,r.mdx)("inlineCode",{parentName:"p"},"uuid")," should be mocked as shown below:"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-js"},"import { v4 as uuidv4 } from 'uuid';\n\nlet mockSpyUuid;\n\n// using a variable may result in failures. For best results, mock return value.\nbeforeAll(() => {\n  mockSpyUuid = jest.spyOn(uuidv4, 'v4').mockReturnValue('00000000-0000-0000-0000-000000000000');\n});\n\n// restore the mock\nafterAll(() => {\n  mockSpyUuid.mockRestore();\n});\n\n")))}X.isMDXComponent=!0},71464:function(e,t,n){n.d(t,{C:function(){return l}});var a=n(67294),r=n(22863),l=function(e){var t=e.url;return a.createElement(r.Z,{src:"https://github.com/cerner/terra-framework/tree/main/packages/terra-date-input",name:"terra-date-input",version:"1.44.0",url:t})}},17422:function(e,t,n){n.r(t),t.default={badge:"Badges-module__badge___vex-+","badge-container":"Badges-module__badge-container___B13Mv","badge-name":"Badges-module__badge-name___jkN0m","badge-version":"Badges-module__badge-version___agZ+P"}},53560:function(e,t,n){n.r(t),t.default={"clinical-lowlight-theme":"ExampleTemplate-module__clinical-lowlight-theme___rBbtD","orion-fusion-theme":"ExampleTemplate-module__orion-fusion-theme___GzA23",template:"ExampleTemplate-module__template___a4uPk",header:"ExampleTemplate-module__header___iFXV3",content:"ExampleTemplate-module__content___48m4Q",description:"ExampleTemplate-module__description___NwBJo",footer:"ExampleTemplate-module__footer___GpSoG","button-container":"ExampleTemplate-module__button-container___rAD11",css:"ExampleTemplate-module__css___+jtk1",code:"ExampleTemplate-module__code___7rC6C","css-toggle":"ExampleTemplate-module__css-toggle___chHK7","code-toggle":"ExampleTemplate-module__code-toggle___TGlE-","is-selected":"ExampleTemplate-module__is-selected___0BYwS",item:"ExampleTemplate-module__item___8FTQq",chevron:"ExampleTemplate-module__chevron___VbY7N",title:"ExampleTemplate-module__title___r+nbJ","dynamic-content":"ExampleTemplate-module__dynamic-content___k+1H7"}},68586:function(e,t,n){n.r(t),t.default={"clinical-lowlight-theme":"Input-module__clinical-lowlight-theme___clY96","orion-fusion-theme":"Input-module__orion-fusion-theme___phvH5","form-input":"Input-module__form-input___Fk8kb","form-error":"Input-module__form-error___aU4hq","form-incomplete":"Input-module__form-incomplete___h4I7H"}},55142:function(e,t,n){function a(e){return a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=m(n(67294)),l=m(n(45697)),o=m(n(94184)),u=m(n(47166)),d=m(n(50026)),i=m(n(68586)),p=["defaultValue","disabled","isIncomplete","isInvalid","onBlur","onChange","onFocus","onInput","name","pattern","refCallback","required","type","ariaLabel","value"];function m(e){return e&&e.__esModule?e:{default:e}}function c(){return c=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},c.apply(this,arguments)}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function f(e,t,n){return(t=b(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function x(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}function y(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,b(a.key),a)}}function b(e){var t=function(e,t){if("object"!==a(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!==a(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===a(t)?t:String(t)}function v(e,t){return v=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},v(e,t)}function g(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=h(e);if(t){var l=h(this).constructor;n=Reflect.construct(r,arguments,l)}else n=r.apply(this,arguments);return function(e,t){if(t&&("object"===a(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(this,n)}}function h(e){return h=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},h(e)}var O=u.default.bind(i.default),T={defaultValue:l.default.oneOfType([l.default.string,l.default.number]),disabled:l.default.bool,isIncomplete:l.default.bool,isInvalid:l.default.bool,onBlur:l.default.func,onChange:l.default.func,onFocus:l.default.func,onInput:l.default.func,name:l.default.string,pattern:l.default.string,refCallback:l.default.func,required:l.default.bool,type:l.default.string,value:l.default.oneOfType([l.default.string,l.default.number]),ariaLabel:l.default.string},_={defaultValue:void 0,disabled:!1,isIncomplete:!1,isInvalid:!1,onBlur:void 0,onChange:void 0,onFocus:void 0,onInput:void 0,name:null,pattern:void 0,required:!1,refCallback:void 0,type:void 0,value:void 0},N=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&v(e,t)}(u,e);var t,n,a,l=g(u);function u(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),l.apply(this,arguments)}return t=u,n=[{key:"render",value:function(){var e,t=this.props,n=t.defaultValue,a=t.disabled,l=t.isIncomplete,u=t.isInvalid,d=t.onBlur,i=t.onChange,m=t.onFocus,y=t.onInput,b=t.name,v=t.pattern,g=t.refCallback,h=t.required,T=t.type,_=t.ariaLabel,N=t.value,C=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){f(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},x(t,p)),j=this.context,w=(void 0===T||["text","number","password","email","search","tel","url","hidden"].includes(T))&&O("form-input",{"form-error":u},{"form-incomplete":l&&h&&!u},j.className),D=(0,o.default)(w,C.className);return C&&Object.prototype.hasOwnProperty.call(C,"aria-label")?e=_||C["aria-label"]:_&&(e=_),C["aria-label"]=e,h&&(C["aria-required"]="true"),void 0!==N?C.value=N:void 0!==n&&(C.defaultValue=n),C.placeholder&&!C.showMpageFusionPlaceholder&&(C.placeholder=null),delete C.showMpageFusionPlaceholder,r.default.createElement("input",c({},C,{ref:function(e){g&&g(e)},name:b,type:T,pattern:v,onBlur:d,onChange:i,onFocus:m,onInput:y,disabled:a,required:h,className:D}))}}],n&&y(t.prototype,n),a&&y(t,a),Object.defineProperty(t,"prototype",{writable:!1}),u}(r.default.Component);N.propTypes=T,N.defaultProps=_,N.contextType=d.default,N.isInput=!0;var C=N;t.default=C},33864:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=l(n(67294)),r=l(n(99139));function l(e){return e&&e.__esModule?e:{default:e}}function o(){return o=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},o.apply(this,arguments)}var u=function(e){var t=o({},e);return a.default.createElement(r.default,t,a.default.createElement("path",{d:"M10.3 24 33.8 0l3.9 3.8L18 24l19.7 20.2-3.9 3.8z"}))};u.displayName="IconChevronLeft",u.defaultProps={viewBox:"0 0 48 48","data-name":"Layer 1",xmlns:"http://www.w3.org/2000/svg"};var d=u;t.default=d}}]);