"use strict";(self.webpackChunkterra_ui=self.webpackChunkterra_ui||[]).push([[15295,33667,96890,19260,10421,26746,78996,39915,33442],{49060:function(e,t,n){t.Z=void 0;var r=i(n(67294)),a=n(34614),l=i(n(15858)),o=i(n(29270));function i(e){return e&&e.__esModule?e:{default:e}}var d=[{"aria-describedby":"submittimesheet",id:"Submit",key:1,text:"Submit",variant:"emphasis"},{"aria-describedby":"canceltimesheet",id:"Cancel",key:2,text:"Cancel"}];t.Z=function(){return r.default.createElement("div",null,r.default.createElement(o.default,{"aria-hidden":!0,id:"submittimesheet",text:"Select to Submit Timesheet"}),r.default.createElement(o.default,{"aria-hidden":!0,id:"canceltimesheet",text:"Select to Cancel Timesheet"}),r.default.createElement(l.default,{message:"Once submitted cannot be revised",customGlyph:r.default.createElement(a.IconDueSoon,null),title:"Timesheet",buttonAttrs:d}),r.default.createElement("p",null,"Note: Action button labels should provide a proper message or title. To meet accessibility guidelines, use ARIA attributes (such as `aria-label`) to provide context."))}},13375:function(e,t,n){function r(e){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(e)}t.Z=void 0;var a,l=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=r(e)&&"function"!=typeof e)return{default:e};var n=i(t);if(n&&n.has(e))return n.get(e);var a={__proto__:null},l=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var d=l?Object.getOwnPropertyDescriptor(e,o):null;d&&(d.get||d.set)?Object.defineProperty(a,o,d):a[o]=e[o]}return a.default=e,n&&n.set(e,a),a}(n(67294)),o=(a=n(15858))&&a.__esModule?a:{default:a};function i(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(i=function(e){return e?n:t})(e)}function d(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,a,l,o,i=[],d=!0,u=!1;try{if(l=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;d=!1}else for(;!(d=(r=l.call(n)).done)&&(i.push(r.value),i.length!==t);d=!0);}catch(e){u=!0,a=e}finally{try{if(!d&&null!=n.return&&(o=n.return(),Object(o)!==o))return}finally{if(u)throw a}}return i}}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return u(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return u(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function u(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}t.Z=function(){var e=d((0,l.useState)(!1),2),t=e[0],n=e[1],r=d((0,l.useState)(!1),2),a=r[0],i=r[1];return l.default.createElement("div",null,l.default.createElement("div",{style:{height:"400px",border:"1px dashed black"}},l.default.createElement(o.default,{variant:"error",isAlignedTop:t,isGlyphHidden:a})),l.default.createElement("fieldset",null,l.default.createElement("legend",null,"Toggle alignment and glyph"),l.default.createElement("div",null,l.default.createElement("input",{id:"isAlignedTop",type:"checkbox",onChange:function(){n(!t)}}),l.default.createElement("label",{htmlFor:"isAlignedTop"},"isAlignedTop")),l.default.createElement("div",null,l.default.createElement("input",{id:"isGlyphHidden",type:"checkbox",onChange:function(){i(!a)}}),l.default.createElement("label",{htmlFor:"isGlyphHidden"},"isGlyphHidden"))))}},89049:function(e,t,n){t.Z=void 0;var r=o(n(67294)),a=o(n(15858)),l=o(n(47015));function o(e){return e&&e.__esModule?e:{default:e}}t.Z=function(){return r.default.createElement(l.default,{closedButtonText:"Trigger Error"},r.default.createElement(a.default,{message:"run time error",variant:"error"}))}},11388:function(e,t,n){function r(e){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(e)}t.Z=void 0;var a=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=r(e)&&"function"!=typeof e)return{default:e};var n=u(t);if(n&&n.has(e))return n.get(e);var a={__proto__:null},l=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var i=l?Object.getOwnPropertyDescriptor(e,o):null;i&&(i.get||i.set)?Object.defineProperty(a,o,i):a[o]=e[o]}return a.default=e,n&&n.set(e,a),a}(n(67294)),l=d(n(15858)),o=d(n(8439)),i=d(n(55281));function d(e){return e&&e.__esModule?e:{default:e}}function u(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(u=function(e){return e?n:t})(e)}function s(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,a,l,o,i=[],d=!0,u=!1;try{if(l=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;d=!1}else for(;!(d=(r=l.call(n)).done)&&(i.push(r.value),i.length!==t);d=!0);}catch(e){u=!0,a=e}finally{try{if(!d&&null!=n.return&&(o=n.return(),Object(o)!==o))return}finally{if(u)throw a}}return i}}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return p(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return p(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function p(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}t.Z=function(){var e=s((0,a.useState)("error"),2),t=e[0],n=e[1],r=s((0,a.useState)("error"),2),d=r[0],u=r[1];return a.default.createElement("div",null,a.default.createElement(l.default,{variant:t}),a.default.createElement(o.default,{label:"Change Variant",onChange:function(e){return u(e)},value:d,maxWidth:"300px",selectId:"change-variant-field",placeholder:"Select a Variant"},a.default.createElement(o.default.Option,{value:"error",display:"Error"}),a.default.createElement(o.default.Option,{value:"no-data",display:"No Results"}),a.default.createElement(o.default.Option,{value:"no-matching-results",display:"No Matching Result"}),a.default.createElement(o.default.Option,{value:"not-authorized",display:"Not Authorized"})),a.default.createElement(i.default,{text:"Apply",variant:"emphasis",onClick:function(){return n(d)}}),a.default.createElement("p",null,"Select a status view variant from the dropdown above."))}},49271:function(e,t,n){var r=n(64836),a=n(18698);t.Z=void 0;var l=r(n(27424)),o=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==a(e)&&"function"!=typeof e)return{default:e};var n=f(t);if(n&&n.has(e))return n.get(e);var r={},l=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var i=l?Object.getOwnPropertyDescriptor(e,o):null;i&&(i.get||i.set)?Object.defineProperty(r,o,i):r[o]=e[o]}r.default=e,n&&n.set(e,r);return r}(n(67294)),i=r(n(45697)),d=r(n(47166)),u=n(21538),s=r(n(33864)),p=r(n(23399)),c=n(51051),m=r(n(53560));function f(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(f=function(e){return e?n:t})(e)}var y=d.default.bind(m.default),b={example:i.default.element,exampleSrc:i.default.element,exampleCssSrc:i.default.element,title:i.default.string,description:i.default.node,isExpanded:i.default.bool},x=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","true")},h=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","false")},g=function(e){var t=e.example,n=e.exampleSrc,r=e.exampleCssSrc,a=e.title,i=e.description,d=e.isExpanded,m=(0,o.useState)(d),f=(0,l.default)(m,2),b=f[0],g=f[1],v=(0,o.useState)(!1),O=(0,l.default)(v,2),T=O[0],_=O[1],S=o.default.useContext(u.ThemeContext),w=void 0!==r,E=function(){_(!T),b&&g(!b)},C=function(){g(!b),T&&_(!T)},j=function(e,t){e.nativeEvent.keyCode!==c.KEY_SPACE&&e.nativeEvent.keyCode!==c.KEY_RETURN||(e.preventDefault(),t())};return o.default.createElement("div",{className:y("template",S.className)},o.default.createElement("div",{className:y("header")},a&&o.default.createElement("h2",{className:y("title")},a)),o.default.createElement("div",{className:y("content")},i&&o.default.createElement("div",{className:y("description")},i),t),o.default.createElement("div",{className:y("footer")},n?o.default.createElement("div",{className:y("button-container")},w&&o.default.createElement("button",{type:"button",className:y("css-toggle","item",{"is-selected":T}),onClick:E,onKeyDown:function(e){return j(e,E)},onBlur:x,onMouseDown:h,tabIndex:0,"data-focus-styles-enabled":!0},o.default.createElement(s.default,{className:y("chevron")}),o.default.createElement("span",null,"CSS"),o.default.createElement(p.default,{className:y("chevron")})),o.default.createElement("button",{type:"button",className:y("code-toggle","item",{"is-selected":b}),onClick:C,onKeyDown:function(e){return j(e,C)},onBlur:x,onMouseDown:h,tabIndex:0,"data-focus-styles-enabled":!0},o.default.createElement(s.default,{className:y("chevron")}),o.default.createElement("span",null,"Code"),o.default.createElement(p.default,{className:y("chevron")}))):null,o.default.createElement("div",null,T&&o.default.createElement("div",{className:y("css")},r),b&&o.default.createElement("div",{className:y("code")},n))))};g.propTypes=b,g.defaultProps={isExpanded:!1};var v=g;t.Z=v},68682:function(e,t,n){n.r(t),n.d(t,{default:function(){return z}});var r=n(67294),a=n(81254),l=n(80848),o=n(11388),i=["components"];function d(){return d=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},d.apply(this,arguments)}function u(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s={};function p(e){var t=e.components,n=u(e,i);return(0,a.mdx)("wrapper",d({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-jsx"},'import React, { useState } from \'react\';\nimport StatusView from \'terra-status-view\';\nimport SingleSelectField from \'terra-form-select/lib/SingleSelectField\';\nimport Button from \'terra-button\';\n\nconst ToggleVariants = () => {\n  const [variant, setVariant] = useState(\'error\');\n  const [selectValue, setSelectValue] = useState(\'error\');\n\n  const handleOnSelect = (value) => setSelectValue(value);\n\n  const handleOnClick = () => setVariant(selectValue);\n\n  return (\n    <div>\n      <StatusView variant={variant} />\n      <SingleSelectField label="Change Variant" onChange={handleOnSelect} value={selectValue} maxWidth="300px" selectId="change-variant-field" placeholder="Select a Variant">\n        <SingleSelectField.Option value="error" display="Error" />\n        <SingleSelectField.Option value="no-data" display="No Results" />\n        <SingleSelectField.Option value="no-matching-results" display="No Matching Result" />\n        <SingleSelectField.Option value="not-authorized" display="Not Authorized" />\n      </SingleSelectField>\n      <Button text="Apply" variant="emphasis" onClick={handleOnClick} />\n      <p>\n        Select a status view variant from the dropdown above.\n      </p>\n    </div>\n  );\n};\n\nexport default ToggleVariants;\n\n')))}p.isMDXComponent=!0;var c=n(49271),m=function(e){var t=e.title,n=e.description,a=e.isExpanded;return r.createElement(c.Z,{title:t||"Toggle Variants",description:n,example:r.createElement(o.Z,null),exampleSrc:r.createElement(p,null),isExpanded:a})},f=n(13375),y=["components"];function b(){return b=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},b.apply(this,arguments)}function x(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var h={};function g(e){var t=e.components,n=x(e,y);return(0,a.mdx)("wrapper",b({},h,n,{components:t,mdxType:"MDXLayout"}),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-jsx"},'import React, { useState } from \'react\';\nimport StatusView from \'terra-status-view\';\n\nconst ToggleAlignmentAndGlyph = () => {\n  const [isAlignedTop, setIsAlignedTop] = useState(false);\n  const [isGlyphHidden, setIsGlyphHidden] = useState(false);\n\n  const handleOnAlignChange = () => {\n    setIsAlignedTop(!isAlignedTop);\n  };\n\n  const handleOnGlyphChange = () => {\n    setIsGlyphHidden(!isGlyphHidden);\n  };\n\n  /* eslint-disable react/forbid-dom-props */\n  return (\n    <div>\n      <div style={{ height: \'400px\', border: \'1px dashed black\' }}>\n        <StatusView variant="error" isAlignedTop={isAlignedTop} isGlyphHidden={isGlyphHidden} />\n      </div>\n      <fieldset>\n        <legend>Toggle alignment and glyph</legend>\n        <div>\n          <input id="isAlignedTop" type="checkbox" onChange={handleOnAlignChange} />\n          <label htmlFor="isAlignedTop">isAlignedTop</label>\n        </div>\n        <div>\n          <input id="isGlyphHidden" type="checkbox" onChange={handleOnGlyphChange} />\n          <label htmlFor="isGlyphHidden">isGlyphHidden</label>\n        </div>\n      </fieldset>\n    </div>\n  );\n};\n\nexport default ToggleAlignmentAndGlyph;\n\n')))}g.isMDXComponent=!0;var v=function(e){var t=e.title,n=e.description,a=e.isExpanded;return r.createElement(c.Z,{title:t||"Toggle Alignment And Glyph",description:n,example:r.createElement(f.Z,null),exampleSrc:r.createElement(g,null),isExpanded:a})},O=n(49060),T=["components"];function _(){return _=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},_.apply(this,arguments)}function S(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var w={};function E(e){var t=e.components,n=S(e,T);return(0,a.mdx)("wrapper",_({},w,n,{components:t,mdxType:"MDXLayout"}),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport { IconDueSoon } from 'terra-icon';\nimport StatusView from 'terra-status-view';\nimport VisuallyHiddenText from 'terra-visually-hidden-text';\n\nconst StatusViewButtons = [\n  {\n    'aria-describedby': 'submittimesheet',\n    id: 'Submit',\n    key: 1,\n    text: 'Submit',\n    variant: 'emphasis',\n  }, {\n    'aria-describedby': 'canceltimesheet',\n    id: 'Cancel',\n    key: 2,\n    text: 'Cancel',\n  },\n];\n\nconst Custom = () => (\n  <div>\n    <VisuallyHiddenText aria-hidden id=\"submittimesheet\" text=\"Select to Submit Timesheet\" />\n    <VisuallyHiddenText aria-hidden id=\"canceltimesheet\" text=\"Select to Cancel Timesheet\" />\n    <StatusView\n      message=\"Once submitted cannot be revised\"\n      customGlyph={<IconDueSoon />}\n      title=\"Timesheet\"\n      buttonAttrs={StatusViewButtons}\n    />\n    <p>\n      Note: Action button labels should provide a proper message or title. To meet accessibility guidelines, use ARIA attributes (such as `aria-label`) to provide context.\n    </p>\n  </div>\n);\n\nexport default Custom;\n\n")))}E.isMDXComponent=!0;var C=function(e){var t=e.title,n=e.description,a=e.isExpanded;return r.createElement(c.Z,{title:t||"Custom",description:n,example:r.createElement(O.Z,null),exampleSrc:r.createElement(E,null),isExpanded:a})},j=n(89049),N=["components"];function A(){return A=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},A.apply(this,arguments)}function P(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var I={};function k(e){var t=e.components,n=P(e,N);return(0,a.mdx)("wrapper",A({},I,n,{components:t,mdxType:"MDXLayout"}),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport StatusView from 'terra-status-view';\nimport ToggleButton from 'terra-toggle-button';\n\nconst ToggleStatusView = () => (\n  <ToggleButton closedButtonText=\"Trigger Error\">\n    <StatusView\n      message=\"run time error\"\n      variant=\"error\"\n    />\n  </ToggleButton>\n);\n\nexport default ToggleStatusView;\n\n")))}k.isMDXComponent=!0;var R=function(e){var t=e.title,n=e.description,a=e.isExpanded;return r.createElement(c.Z,{title:t||"Toggle Status View",description:n,example:r.createElement(j.Z,null),exampleSrc:r.createElement(k,null),isExpanded:a})},V=n(78530),D=["components"];function M(){return M=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},M.apply(this,arguments)}function q(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var B={},G="wrapper";function W(e){var t=e.components,n=q(e,D);return(0,a.mdx)(G,M({},B,n,{components:t,mdxType:"MDXLayout"}),(0,a.mdx)(V.ZP,{mdxType:"PropsTable"},(0,a.mdx)(V.X2,{key:"ROW1",mdxType:"Row"},(0,a.mdx)(V.O,{mdxType:"PropNameCell"},"buttonAttrs"),(0,a.mdx)(V.Di,{mdxType:"TypeCell"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"arrayOf: [{\n  shape: {\n    0: {\n      type: 'undefined',\n    },\n    1: {\n      type: 'undefined',\n    },\n    2: {\n      type: 'undefined',\n    },\n    3: {\n      type: 'undefined',\n    },\n    4: {\n      type: 'undefined',\n    },\n    5: {\n      type: 'undefined',\n    },\n    6: {\n      type: 'undefined',\n    },\n    7: {\n      type: 'undefined',\n    },\n    8: {\n      type: 'undefined',\n    },\n    9: {\n      type: 'undefined',\n    },\n    10: {\n      type: 'undefined',\n    },\n    11: {\n      type: 'undefined',\n    },\n    12: {\n      type: 'undefined',\n    },\n    13: {\n      type: 'undefined',\n    },\n    14: {\n      type: 'undefined',\n    },\n    15: {\n      type: 'undefined',\n    },\n  },\n}],\n"))),(0,a.mdx)(V.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,a.mdx)(V.mW,{mdxType:"DefaultValueCell"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"[]\n"))),(0,a.mdx)(V.Ex,{mdxType:"DescriptionCell"},(0,a.mdx)("p",null,"An array of objects containing terra-button properties. A key attribute is required for each object.\nThis array is used to render buttons in the bottom section.\nExample:",(0,a.mdx)("inlineCode",{parentName:"p"},"[{ text: 'Button 1', key: 1, variant: 'neutral', onClick: onClickFunction}]")))),(0,a.mdx)(V.X2,{key:"ROW2",mdxType:"Row"},(0,a.mdx)(V.O,{mdxType:"PropNameCell"},"customGlyph"),(0,a.mdx)(V.Di,{mdxType:"TypeCell"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"node\n"))),(0,a.mdx)(V.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,a.mdx)(V.mW,{mdxType:"DefaultValueCell"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"undefined\n"))),(0,a.mdx)(V.Ex,{mdxType:"DescriptionCell"},(0,a.mdx)("p",null,"Display a custom glyph. Overrides a variant's default glyph.\nSet ",(0,a.mdx)("inlineCode",{parentName:"p"},"focusable=false")," for svg element used as ",(0,a.mdx)("inlineCode",{parentName:"p"},"customGlyph"),"."))),(0,a.mdx)(V.X2,{key:"ROW3",mdxType:"Row"},(0,a.mdx)(V.O,{mdxType:"PropNameCell"},"isAlignedTop"),(0,a.mdx)(V.Di,{mdxType:"TypeCell"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"bool\n"))),(0,a.mdx)(V.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,a.mdx)(V.mW,{mdxType:"DefaultValueCell"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"false\n"))),(0,a.mdx)(V.Ex,{mdxType:"DescriptionCell"},(0,a.mdx)("p",null,'Aligns the component at the top of the container rather than "centered"'))),(0,a.mdx)(V.X2,{key:"ROW4",mdxType:"Row"},(0,a.mdx)(V.O,{mdxType:"PropNameCell"},"isGlyphHidden"),(0,a.mdx)(V.Di,{mdxType:"TypeCell"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"bool\n"))),(0,a.mdx)(V.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,a.mdx)(V.mW,{mdxType:"DefaultValueCell"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"false\n"))),(0,a.mdx)(V.Ex,{mdxType:"DescriptionCell"},(0,a.mdx)("p",null,"Determines if the glyph should be displayed."))),(0,a.mdx)(V.X2,{key:"ROW5",mdxType:"Row"},(0,a.mdx)(V.O,{mdxType:"PropNameCell"},"message"),(0,a.mdx)(V.Di,{mdxType:"TypeCell"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"string\n"))),(0,a.mdx)(V.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,a.mdx)(V.mW,{mdxType:"DefaultValueCell"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"undefined\n"))),(0,a.mdx)(V.Ex,{mdxType:"DescriptionCell"},(0,a.mdx)("p",null,"The descriptive text, displayed under the title."))),(0,a.mdx)(V.X2,{key:"ROW6",mdxType:"Row"},(0,a.mdx)(V.O,{mdxType:"PropNameCell"},"title"),(0,a.mdx)(V.Di,{mdxType:"TypeCell"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"string\n"))),(0,a.mdx)(V.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,a.mdx)(V.mW,{mdxType:"DefaultValueCell"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"undefined\n"))),(0,a.mdx)(V.Ex,{mdxType:"DescriptionCell"},(0,a.mdx)("p",null,"The title displayed under the glyph. Variants contain default titles that can be overriden by this prop."))),(0,a.mdx)(V.X2,{key:"ROW7",mdxType:"Row"},(0,a.mdx)(V.O,{mdxType:"PropNameCell"},"variant"),(0,a.mdx)(V.Di,{mdxType:"TypeCell"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"enum: [\n  'no-data'\n  'no-matching-results'\n  'not-authorized'\n  'error'\n],\n"))),(0,a.mdx)(V.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,a.mdx)(V.mW,{mdxType:"DefaultValueCell"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"undefined\n"))),(0,a.mdx)(V.Ex,{mdxType:"DescriptionCell"},(0,a.mdx)("p",null,"Sets the glyph and title using a pre-baked variant. One of the following: ",(0,a.mdx)("inlineCode",{parentName:"p"},"no-data"),",\n",(0,a.mdx)("inlineCode",{parentName:"p"},"no-matching-results"),", ",(0,a.mdx)("inlineCode",{parentName:"p"},"not-authorized"),", or ",(0,a.mdx)("inlineCode",{parentName:"p"},"error"))))))}W.isMDXComponent=!0;var H=["components"];function X(){return X=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},X.apply(this,arguments)}function Z(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var F={},L="wrapper";function z(e){var t=e.components,n=Z(e,H);return(0,a.mdx)(L,X({},F,n,{components:t,mdxType:"MDXLayout"}),(0,a.mdx)(l.C,{mdxType:"Badge"}),(0,a.mdx)("h1",{id:"terra-status-view"},"Terra Status View"),(0,a.mdx)("p",null,"Presents an icon, title, message, and/or buttons based on a status type scenario. Scenarios include ",(0,a.mdx)("inlineCode",{parentName:"p"},"no-data"),", ",(0,a.mdx)("inlineCode",{parentName:"p"},"no-matching-results"),", ",(0,a.mdx)("inlineCode",{parentName:"p"},"not-authorized"),", ",(0,a.mdx)("inlineCode",{parentName:"p"},"error"),", or a custom scenario."),(0,a.mdx)("h2",{id:"getting-started"},"Getting Started"),(0,a.mdx)("ul",null,(0,a.mdx)("li",{parentName:"ul"},"Install with ",(0,a.mdx)("a",{parentName:"li",href:"https://www.npmjs.com/"},"npmjs"),":",(0,a.mdx)("ul",{parentName:"li"},(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("inlineCode",{parentName:"li"},"npm install terra-status-view"))))),(0,a.mdx)("h2",{id:"peer-dependencies"},"Peer Dependencies"),(0,a.mdx)("p",null,"This component requires the following peer dependencies be installed in your app for the component to properly function."),(0,a.mdx)("table",null,(0,a.mdx)("thead",{parentName:"table"},(0,a.mdx)("tr",{parentName:"thead"},(0,a.mdx)("th",{parentName:"tr",align:null},"Peer Dependency"),(0,a.mdx)("th",{parentName:"tr",align:null},"Version"))),(0,a.mdx)("tbody",{parentName:"table"},(0,a.mdx)("tr",{parentName:"tbody"},(0,a.mdx)("td",{parentName:"tr",align:null},"react"),(0,a.mdx)("td",{parentName:"tr",align:null},"^16.8.5")),(0,a.mdx)("tr",{parentName:"tbody"},(0,a.mdx)("td",{parentName:"tr",align:null},"react-dom"),(0,a.mdx)("td",{parentName:"tr",align:null},"^16.8.5")),(0,a.mdx)("tr",{parentName:"tbody"},(0,a.mdx)("td",{parentName:"tr",align:null},"react-intl"),(0,a.mdx)("td",{parentName:"tr",align:null},"^2.8.0")))),(0,a.mdx)("h2",{id:"usage"},"Usage"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-jsx"},"import StatusView from 'terra-status-view';\n")),(0,a.mdx)("h2",{id:"implementation-notes"},"Implementation Notes:"),(0,a.mdx)("p",null,"The Status-View component must be composed inside the ",(0,a.mdx)("a",{parentName:"p",href:"https://engineering.cerner.com/terra-core/components/terra-base/base/base"},"Base")," component with a locale in order for it to load the correct translation strings.\nSet ",(0,a.mdx)("inlineCode",{parentName:"p"},"focusable=false")," for svg element used for ",(0,a.mdx)("inlineCode",{parentName:"p"},"customGlyph")," prop, to prevent focusing of the svg in IE10."),(0,a.mdx)("h2",{id:"component-features"},"Component Features"),(0,a.mdx)("ul",null,(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("a",{parentName:"li",href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#cross-browser-support"},"Cross-Browser Support")),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("a",{parentName:"li",href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#responsive-support"},"Responsive Support")),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("a",{parentName:"li",href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#mobile-support"},"Mobile Support"))),(0,a.mdx)("h2",{id:"examples"},"Examples"),(0,a.mdx)(m,{title:"Variants",mdxType:"ToggleVariants"}),(0,a.mdx)(C,{title:"Custom: Icon + message + buttons",mdxType:"Custom"}),(0,a.mdx)(v,{mdxType:"ToggleAlignmentAndGlyph"}),(0,a.mdx)(R,{title:"Toggle Status View",mdxType:"ToggleStatusView"}),(0,a.mdx)("h2",{id:"status-view-props"},"Status View Props"),(0,a.mdx)(W,{mdxType:"StatusViewPropsTable"}))}z.isMDXComponent=!0},80848:function(e,t,n){n.d(t,{C:function(){return l}});var r=n(67294),a=n(22863),l=function(e){var t=e.url;return r.createElement(a.Z,{src:"https://github.com/cerner/terra-core/tree/main/packages/terra-status-view",name:"terra-status-view",version:"4.65.0",url:t})}},53560:function(e,t,n){n.r(t),t.default={"clinical-lowlight-theme":"ExampleTemplate-module__clinical-lowlight-theme___rBbtD","orion-fusion-theme":"ExampleTemplate-module__orion-fusion-theme___GzA23",template:"ExampleTemplate-module__template___a4uPk",header:"ExampleTemplate-module__header___iFXV3",content:"ExampleTemplate-module__content___48m4Q",description:"ExampleTemplate-module__description___NwBJo",footer:"ExampleTemplate-module__footer___GpSoG","button-container":"ExampleTemplate-module__button-container___rAD11",css:"ExampleTemplate-module__css___+jtk1",code:"ExampleTemplate-module__code___7rC6C","css-toggle":"ExampleTemplate-module__css-toggle___chHK7","code-toggle":"ExampleTemplate-module__code-toggle___TGlE-","is-selected":"ExampleTemplate-module__is-selected___0BYwS",item:"ExampleTemplate-module__item___8FTQq",chevron:"ExampleTemplate-module__chevron___VbY7N",title:"ExampleTemplate-module__title___r+nbJ","dynamic-content":"ExampleTemplate-module__dynamic-content___k+1H7"}},21826:function(e,t,n){n.r(t),t.default={"toggle-button":"ToggleButton-module__toggle-button___eo1aB",icon:"ToggleButton-module__icon___mFdVK","is-open":"ToggleButton-module__is-open___W1RlO","is-icon-animated":"ToggleButton-module__is-icon-animated___4e24X","button-text":"ToggleButton-module__button-text___+N0CK"}},8439:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=s(n(67294)),a=s(n(45697)),l=s(n(47717)),o=s(n(13975)),i=s(n(87786)),d=s(n(88413)),u=["allowClear","children","defaultValue","disabled","error","help","hideRequired","isIncomplete","isInline","isInvalid","isLabelHidden","label","labelAttrs","maxHeight","maxWidth","onChange","placeholder","required","selectAttrs","selectId","showOptional","value"];function s(e){return e&&e.__esModule?e:{default:e}}function p(){return p=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},p.apply(this,arguments)}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var m={allowClear:a.default.bool,children:a.default.node,label:a.default.string.isRequired,defaultValue:a.default.oneOfType([a.default.string,a.default.number,a.default.array]),disabled:a.default.bool,error:a.default.node,help:a.default.node,hideRequired:a.default.bool,isIncomplete:a.default.bool,isInline:a.default.bool,isInvalid:a.default.bool,isLabelHidden:a.default.bool,labelAttrs:a.default.object,maxHeight:a.default.number,maxWidth:a.default.string,onChange:a.default.func,placeholder:a.default.string,required:a.default.bool,selectAttrs:a.default.object,selectId:a.default.string.isRequired,showOptional:a.default.bool,value:a.default.oneOfType([a.default.string,a.default.number,a.default.array])},f={allowClear:!1,children:void 0,defaultValue:void 0,disabled:!1,error:void 0,help:void 0,hideRequired:!1,isIncomplete:!1,isInline:!1,isInvalid:!1,isLabelHidden:!1,labelAttrs:{},maxHeight:void 0,maxWidth:void 0,onChange:void 0,placeholder:void 0,required:!1,selectAttrs:{},showOptional:!1,value:void 0},y=function(e){var t,n=e.allowClear,a=e.children,i=e.defaultValue,d=e.disabled,s=e.error,m=e.help,f=e.hideRequired,y=e.isIncomplete,b=e.isInline,x=e.isInvalid,h=e.isLabelHidden,g=e.label,v=e.labelAttrs,O=e.maxHeight,T=e.maxWidth,_=e.onChange,S=e.placeholder,w=e.required,E=e.selectAttrs,C=e.selectId,j=e.showOptional,N=e.value,A=c(e,u);return m&&s&&x?t="".concat(C,"-error ").concat(C,"-help"):(m&&(t="".concat(C,"-help")),s&&x&&(t="".concat(C,"-error"))),r.default.createElement(l.default,p({},A,{label:g,labelAttrs:v,error:s,help:m,hideRequired:f,required:w,showOptional:j,isInvalid:x,isInline:b,isLabelHidden:h,htmlFor:C,maxWidth:T}),r.default.createElement(o.default,p({},E,{ariaLabel:g,allowClear:n,"aria-describedby":t,disabled:E.disabled||d,id:C,isIncomplete:y,isInvalid:x,defaultValue:i,maxHeight:O||E.maxHeight,onChange:_,placeholder:S,required:w,value:N}),a))};y.propTypes=m,y.defaultProps=f,y.Option=d.default,y.OptGroup=i.default;var b=y;t.default=b},47015:function(e,t,n){function r(e){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=c(n(67294)),l=c(n(45697)),o=c(n(47166)),i=c(n(55281)),d=c(n(23399)),u=c(n(30659)),s=c(n(21826)),p=["buttonAttrs","children","closedButtonText","icon","isAnimated","isIconAnimated","isIconOnly","isInitiallyOpen","onClose","onOpen","openedButtonText"];function c(e){return e&&e.__esModule?e:{default:e}}function m(){return m=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},m.apply(this,arguments)}function f(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}function y(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,(l=a.key,o=void 0,o=function(e,t){if("object"!==r(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var a=n.call(e,t||"default");if("object"!==r(a))return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(l,"string"),"symbol"===r(o)?o:String(o)),a)}var l,o}function b(e,t){return b=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},b(e,t)}function x(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,a=g(e);if(t){var l=g(this).constructor;n=Reflect.construct(a,arguments,l)}else n=a.apply(this,arguments);return function(e,t){if(t&&("object"===r(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return h(e)}(this,n)}}function h(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function g(e){return g=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},g(e)}var v=o.default.bind(s.default),O={children:l.default.node.isRequired,closedButtonText:l.default.string.isRequired,buttonAttrs:l.default.object,icon:l.default.element,isAnimated:l.default.bool,isIconAnimated:l.default.bool,isIconOnly:l.default.bool,isInitiallyOpen:l.default.bool,onClose:l.default.func,onOpen:l.default.func,openedButtonText:l.default.string},T={isAnimated:!1,isIconAnimated:!1,isIconOnly:!1,isInitiallyOpen:!1,icon:a.default.createElement(d.default,null)},_=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&b(e,t)}(o,e);var t,n,r,l=x(o);function o(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,o),(t=l.call(this,e)).state={isOpen:e.isInitiallyOpen},t.handleOnClick=t.handleOnClick.bind(h(t)),t}return t=o,(n=[{key:"handleOnClick",value:function(e){e.preventDefault(),!this.state.isOpen&&this.props.onOpen?this.props.onOpen():this.state.isOpen&&this.props.onClose&&this.props.onClose(),this.setState((function(e){return{isOpen:!e.isOpen}}))}},{key:"render",value:function(){var e=this.props,t=e.buttonAttrs,n=(e.children,e.closedButtonText),r=e.icon,l=(e.isAnimated,e.isIconAnimated),o=e.isIconOnly,d=(e.isInitiallyOpen,e.onClose,e.onOpen,e.openedButtonText),s=f(e,p),c=d||n,y=this.state.isOpen?c:n,b=o?n:y,x=v(["button",{"is-open":this.state.isOpen},{"is-icon-animated":l},s.className]),h=a.default.createElement(i.default,m({},t,{isIconOnly:o,icon:a.default.createElement("span",{className:v("icon")},r),"aria-expanded":this.state.isOpen,text:b,onClick:this.handleOnClick}));return a.default.createElement("div",m({},s,{className:x}),h,a.default.createElement(u.default,{isOpen:this.state.isOpen,isAnimated:this.props.isAnimated},this.props.children))}}])&&y(t.prototype,n),r&&y(t,r),Object.defineProperty(t,"prototype",{writable:!1}),o}(a.default.Component);_.propTypes=O,_.defaultProps=T;t.default=_}}]);