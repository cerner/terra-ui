"use strict";(self.webpackChunkterra_ui=self.webpackChunkterra_ui||[]).push([[44390],{49060:function(e,t,n){t.Z=void 0;var r=o(n(67294)),a=o(n(11338)),l=o(n(15858)),i=o(n(29270));function o(e){return e&&e.__esModule?e:{default:e}}var d=[{"aria-describedby":"submittimesheet",id:"Submit",key:1,text:"Submit",variant:"emphasis"},{"aria-describedby":"canceltimesheet",id:"Cancel",key:2,text:"Cancel"}],u=function(){return r.default.createElement("div",null,r.default.createElement(i.default,{"aria-hidden":!0,id:"submittimesheet",text:"Select to Submit Timesheet"}),r.default.createElement(i.default,{"aria-hidden":!0,id:"canceltimesheet",text:"Select to Cancel Timesheet"}),r.default.createElement(l.default,{message:"Once submitted cannot be revised",customGlyph:r.default.createElement(a.default,null),title:"Timesheet",buttonAttrs:d}),r.default.createElement("p",null,"Note: Action button labels should provide a proper message or title. To meet accessibility guidelines, use ARIA attributes (such as `aria-label`) to provide context."))};t.Z=u},13375:function(e,t,n){function r(e){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(e)}t.Z=void 0;var a,l=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==r(e)&&"function"!=typeof e)return{default:e};var n=o(t);if(n&&n.has(e))return n.get(e);var a={},l=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if("default"!==i&&Object.prototype.hasOwnProperty.call(e,i)){var d=l?Object.getOwnPropertyDescriptor(e,i):null;d&&(d.get||d.set)?Object.defineProperty(a,i,d):a[i]=e[i]}a.default=e,n&&n.set(e,a);return a}(n(67294)),i=(a=n(15858))&&a.__esModule?a:{default:a};function o(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(o=function(e){return e?n:t})(e)}function d(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,a,l,i,o=[],d=!0,u=!1;try{if(l=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;d=!1}else for(;!(d=(r=l.call(n)).done)&&(o.push(r.value),o.length!==t);d=!0);}catch(e){u=!0,a=e}finally{try{if(!d&&null!=n.return&&(i=n.return(),Object(i)!==i))return}finally{if(u)throw a}}return o}}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return u(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return u(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function u(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var s=function(){var e=d((0,l.useState)(!1),2),t=e[0],n=e[1],r=d((0,l.useState)(!1),2),a=r[0],o=r[1];return l.default.createElement("div",null,l.default.createElement("div",{style:{height:"400px",border:"1px dashed black"}},l.default.createElement(i.default,{variant:"error",isAlignedTop:t,isGlyphHidden:a})),l.default.createElement("fieldset",null,l.default.createElement("legend",null,"Toggle alignment and glyph"),l.default.createElement("div",null,l.default.createElement("input",{id:"isAlignedTop",type:"checkbox",onChange:function(){n(!t)}}),l.default.createElement("label",{htmlFor:"isAlignedTop"},"isAlignedTop")),l.default.createElement("div",null,l.default.createElement("input",{id:"isGlyphHidden",type:"checkbox",onChange:function(){o(!a)}}),l.default.createElement("label",{htmlFor:"isGlyphHidden"},"isGlyphHidden"))))};t.Z=s},89049:function(e,t,n){t.Z=void 0;var r=i(n(67294)),a=i(n(15858)),l=i(n(47015));function i(e){return e&&e.__esModule?e:{default:e}}var o=function(){return r.default.createElement(l.default,{closedButtonText:"Trigger Error"},r.default.createElement(a.default,{message:"run time error",variant:"error"}))};t.Z=o},11388:function(e,t,n){function r(e){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(e)}t.Z=void 0;var a=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==r(e)&&"function"!=typeof e)return{default:e};var n=u(t);if(n&&n.has(e))return n.get(e);var a={},l=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if("default"!==i&&Object.prototype.hasOwnProperty.call(e,i)){var o=l?Object.getOwnPropertyDescriptor(e,i):null;o&&(o.get||o.set)?Object.defineProperty(a,i,o):a[i]=e[i]}a.default=e,n&&n.set(e,a);return a}(n(67294)),l=d(n(15858)),i=d(n(8439)),o=d(n(55281));function d(e){return e&&e.__esModule?e:{default:e}}function u(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(u=function(e){return e?n:t})(e)}function s(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,a,l,i,o=[],d=!0,u=!1;try{if(l=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;d=!1}else for(;!(d=(r=l.call(n)).done)&&(o.push(r.value),o.length!==t);d=!0);}catch(e){u=!0,a=e}finally{try{if(!d&&null!=n.return&&(i=n.return(),Object(i)!==i))return}finally{if(u)throw a}}return o}}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return p(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return p(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function p(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var m=function(){var e=s((0,a.useState)("error"),2),t=e[0],n=e[1],r=s((0,a.useState)("error"),2),d=r[0],u=r[1];return a.default.createElement("div",null,a.default.createElement(l.default,{variant:t}),a.default.createElement(i.default,{label:"Change Variant",onChange:function(e){return u(e)},value:d,maxWidth:"300px",selectId:"change-variant-field",placeholder:"Select a Variant"},a.default.createElement(i.default.Option,{value:"error",display:"Error"}),a.default.createElement(i.default.Option,{value:"no-data",display:"No Results"}),a.default.createElement(i.default.Option,{value:"no-matching-results",display:"No Matching Result"}),a.default.createElement(i.default.Option,{value:"not-authorized",display:"Not Authorized"})),a.default.createElement(o.default,{text:"Apply",variant:"emphasis",onClick:function(){return n(d)}}),a.default.createElement("p",null,"Select a status view variant from the dropdown above."))};t.Z=m},44390:function(e,t,n){n.r(t),n.d(t,{default:function(){return z}});var r=n(67294),a=n(81254),l=n(80848),i=n(11388),o=["components"];function d(){return d=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},d.apply(this,arguments)}function u(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s={};function p(e){var t=e.components,n=u(e,o);return(0,a.mdx)("wrapper",d({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-jsx"},'import React, { useState } from \'react\';\nimport StatusView from \'terra-status-view\';\nimport SingleSelectField from \'terra-form-select/lib/SingleSelectField\';\nimport Button from \'terra-button\';\n\nconst ToggleVariants = () => {\n  const [variant, setVariant] = useState(\'error\');\n  const [selectValue, setSelectValue] = useState(\'error\');\n\n  const handleOnSelect = (value) => setSelectValue(value);\n\n  const handleOnClick = () => setVariant(selectValue);\n\n  return (\n    <div>\n      <StatusView variant={variant} />\n      <SingleSelectField label="Change Variant" onChange={handleOnSelect} value={selectValue} maxWidth="300px" selectId="change-variant-field" placeholder="Select a Variant">\n        <SingleSelectField.Option value="error" display="Error" />\n        <SingleSelectField.Option value="no-data" display="No Results" />\n        <SingleSelectField.Option value="no-matching-results" display="No Matching Result" />\n        <SingleSelectField.Option value="not-authorized" display="Not Authorized" />\n      </SingleSelectField>\n      <Button text="Apply" variant="emphasis" onClick={handleOnClick} />\n      <p>\n        Select a status view variant from the dropdown above.\n      </p>\n    </div>\n  );\n};\n\nexport default ToggleVariants;\n\n')))}p.isMDXComponent=!0;var m=n(49271),c=function(e){var t=e.title,n=e.description,a=e.isExpanded;return r.createElement(m.Z,{title:t||"Toggle Variants",description:n,example:r.createElement(i.Z,null),exampleSrc:r.createElement(p,null),isExpanded:a})},f=n(13375),y=["components"];function x(){return x=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},x.apply(this,arguments)}function h(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var g={};function b(e){var t=e.components,n=h(e,y);return(0,a.mdx)("wrapper",x({},g,n,{components:t,mdxType:"MDXLayout"}),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-jsx"},'import React, { useState } from \'react\';\nimport StatusView from \'terra-status-view\';\n\nconst ToggleAlignmentAndGlyph = () => {\n  const [isAlignedTop, setIsAlignedTop] = useState(false);\n  const [isGlyphHidden, setIsGlyphHidden] = useState(false);\n\n  const handleOnAlignChange = () => {\n    setIsAlignedTop(!isAlignedTop);\n  };\n\n  const handleOnGlyphChange = () => {\n    setIsGlyphHidden(!isGlyphHidden);\n  };\n\n  /* eslint-disable react/forbid-dom-props */\n  return (\n    <div>\n      <div style={{ height: \'400px\', border: \'1px dashed black\' }}>\n        <StatusView variant="error" isAlignedTop={isAlignedTop} isGlyphHidden={isGlyphHidden} />\n      </div>\n      <fieldset>\n        <legend>Toggle alignment and glyph</legend>\n        <div>\n          <input id="isAlignedTop" type="checkbox" onChange={handleOnAlignChange} />\n          <label htmlFor="isAlignedTop">isAlignedTop</label>\n        </div>\n        <div>\n          <input id="isGlyphHidden" type="checkbox" onChange={handleOnGlyphChange} />\n          <label htmlFor="isGlyphHidden">isGlyphHidden</label>\n        </div>\n      </fieldset>\n    </div>\n  );\n};\n\nexport default ToggleAlignmentAndGlyph;\n\n')))}b.isMDXComponent=!0;var v=function(e){var t=e.title,n=e.description,a=e.isExpanded;return r.createElement(m.Z,{title:t||"Toggle Alignment And Glyph",description:n,example:r.createElement(f.Z,null),exampleSrc:r.createElement(b,null),isExpanded:a})},O=n(49060),S=["components"];function T(){return T=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},T.apply(this,arguments)}function w(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var C={};function j(e){var t=e.components,n=w(e,S);return(0,a.mdx)("wrapper",T({},C,n,{components:t,mdxType:"MDXLayout"}),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport IconDueSoon from 'terra-icon/lib/icon/IconDueSoon';\nimport StatusView from 'terra-status-view';\nimport VisuallyHiddenText from 'terra-visually-hidden-text';\n\nconst StatusViewButtons = [\n  {\n    'aria-describedby': 'submittimesheet',\n    id: 'Submit',\n    key: 1,\n    text: 'Submit',\n    variant: 'emphasis',\n  }, {\n    'aria-describedby': 'canceltimesheet',\n    id: 'Cancel',\n    key: 2,\n    text: 'Cancel',\n  },\n];\n\nconst Custom = () => (\n  <div>\n    <VisuallyHiddenText aria-hidden id=\"submittimesheet\" text=\"Select to Submit Timesheet\" />\n    <VisuallyHiddenText aria-hidden id=\"canceltimesheet\" text=\"Select to Cancel Timesheet\" />\n    <StatusView\n      message=\"Once submitted cannot be revised\"\n      customGlyph={<IconDueSoon />}\n      title=\"Timesheet\"\n      buttonAttrs={StatusViewButtons}\n    />\n    <p>\n      Note: Action button labels should provide a proper message or title. To meet accessibility guidelines, use ARIA attributes (such as `aria-label`) to provide context.\n    </p>\n  </div>\n);\n\nexport default Custom;\n\n")))}j.isMDXComponent=!0;var N=function(e){var t=e.title,n=e.description,a=e.isExpanded;return r.createElement(m.Z,{title:t||"Custom",description:n,example:r.createElement(O.Z,null),exampleSrc:r.createElement(j,null),isExpanded:a})},E=n(89049),A=["components"];function V(){return V=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},V.apply(this,arguments)}function I(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var D={};function P(e){var t=e.components,n=I(e,A);return(0,a.mdx)("wrapper",V({},D,n,{components:t,mdxType:"MDXLayout"}),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport StatusView from 'terra-status-view';\nimport ToggleButton from 'terra-toggle-button';\n\nconst ToggleStatusView = () => (\n  <ToggleButton closedButtonText=\"Trigger Error\">\n    <StatusView\n      message=\"run time error\"\n      variant=\"error\"\n    />\n  </ToggleButton>\n);\n\nexport default ToggleStatusView;\n\n")))}P.isMDXComponent=!0;var R=function(e){var t=e.title,n=e.description,a=e.isExpanded;return r.createElement(m.Z,{title:t||"Toggle Status View",description:n,example:r.createElement(E.Z,null),exampleSrc:r.createElement(P,null),isExpanded:a})},k=n(78530),M=["components"];function _(){return _=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},_.apply(this,arguments)}function q(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var H={},G="wrapper";function W(e){var t=e.components,n=q(e,M);return(0,a.mdx)(G,_({},H,n,{components:t,mdxType:"MDXLayout"}),(0,a.mdx)(k.ZP,{mdxType:"PropsTable"},(0,a.mdx)(k.X2,{key:"ROW1",mdxType:"Row"},(0,a.mdx)(k.O,{mdxType:"PropNameCell"},"buttonAttrs"),(0,a.mdx)(k.Di,{mdxType:"TypeCell"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"arrayOf: [{\n  shape: {\n    0: {\n      type: 'undefined',\n    },\n    1: {\n      type: 'undefined',\n    },\n    2: {\n      type: 'undefined',\n    },\n    3: {\n      type: 'undefined',\n    },\n    4: {\n      type: 'undefined',\n    },\n    5: {\n      type: 'undefined',\n    },\n    6: {\n      type: 'undefined',\n    },\n    7: {\n      type: 'undefined',\n    },\n    8: {\n      type: 'undefined',\n    },\n    9: {\n      type: 'undefined',\n    },\n    10: {\n      type: 'undefined',\n    },\n    11: {\n      type: 'undefined',\n    },\n    12: {\n      type: 'undefined',\n    },\n    13: {\n      type: 'undefined',\n    },\n    14: {\n      type: 'undefined',\n    },\n    15: {\n      type: 'undefined',\n    },\n  },\n}],\n"))),(0,a.mdx)(k.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,a.mdx)(k.mW,{mdxType:"DefaultValueCell"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"[]\n"))),(0,a.mdx)(k.Ex,{mdxType:"DescriptionCell"},(0,a.mdx)("p",null,"An array of objects containing terra-button properties. A key attribute is required for each object.\nThis array is used to render buttons in the bottom section.\nExample:",(0,a.mdx)("inlineCode",{parentName:"p"},"[{ text: 'Button 1', key: 1, variant: 'neutral', onClick: onClickFunction}]")))),(0,a.mdx)(k.X2,{key:"ROW2",mdxType:"Row"},(0,a.mdx)(k.O,{mdxType:"PropNameCell"},"customGlyph"),(0,a.mdx)(k.Di,{mdxType:"TypeCell"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"node\n"))),(0,a.mdx)(k.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,a.mdx)(k.mW,{mdxType:"DefaultValueCell"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"undefined\n"))),(0,a.mdx)(k.Ex,{mdxType:"DescriptionCell"},(0,a.mdx)("p",null,"Display a custom glyph. Overrides a variant's default glyph.\nSet ",(0,a.mdx)("inlineCode",{parentName:"p"},"focusable=false")," for svg element used as ",(0,a.mdx)("inlineCode",{parentName:"p"},"customGlyph"),"."))),(0,a.mdx)(k.X2,{key:"ROW3",mdxType:"Row"},(0,a.mdx)(k.O,{mdxType:"PropNameCell"},"isAlignedTop"),(0,a.mdx)(k.Di,{mdxType:"TypeCell"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"bool\n"))),(0,a.mdx)(k.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,a.mdx)(k.mW,{mdxType:"DefaultValueCell"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"false\n"))),(0,a.mdx)(k.Ex,{mdxType:"DescriptionCell"},(0,a.mdx)("p",null,'Aligns the component at the top of the container rather than "centered"'))),(0,a.mdx)(k.X2,{key:"ROW4",mdxType:"Row"},(0,a.mdx)(k.O,{mdxType:"PropNameCell"},"isGlyphHidden"),(0,a.mdx)(k.Di,{mdxType:"TypeCell"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"bool\n"))),(0,a.mdx)(k.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,a.mdx)(k.mW,{mdxType:"DefaultValueCell"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"false\n"))),(0,a.mdx)(k.Ex,{mdxType:"DescriptionCell"},(0,a.mdx)("p",null,"Determines if the glyph should be displayed."))),(0,a.mdx)(k.X2,{key:"ROW5",mdxType:"Row"},(0,a.mdx)(k.O,{mdxType:"PropNameCell"},"message"),(0,a.mdx)(k.Di,{mdxType:"TypeCell"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"string\n"))),(0,a.mdx)(k.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,a.mdx)(k.mW,{mdxType:"DefaultValueCell"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"undefined\n"))),(0,a.mdx)(k.Ex,{mdxType:"DescriptionCell"},(0,a.mdx)("p",null,"The descriptive text, displayed under the title."))),(0,a.mdx)(k.X2,{key:"ROW6",mdxType:"Row"},(0,a.mdx)(k.O,{mdxType:"PropNameCell"},"title"),(0,a.mdx)(k.Di,{mdxType:"TypeCell"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"string\n"))),(0,a.mdx)(k.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,a.mdx)(k.mW,{mdxType:"DefaultValueCell"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"undefined\n"))),(0,a.mdx)(k.Ex,{mdxType:"DescriptionCell"},(0,a.mdx)("p",null,"The title displayed under the glyph. Variants contain default titles that can be overriden by this prop."))),(0,a.mdx)(k.X2,{key:"ROW7",mdxType:"Row"},(0,a.mdx)(k.O,{mdxType:"PropNameCell"},"variant"),(0,a.mdx)(k.Di,{mdxType:"TypeCell"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"enum: [\n  'no-data'\n  'no-matching-results'\n  'not-authorized'\n  'error'\n],\n"))),(0,a.mdx)(k.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,a.mdx)(k.mW,{mdxType:"DefaultValueCell"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"undefined\n"))),(0,a.mdx)(k.Ex,{mdxType:"DescriptionCell"},(0,a.mdx)("p",null,"Sets the glyph and title using a pre-baked variant. One of the following: ",(0,a.mdx)("inlineCode",{parentName:"p"},"no-data"),",\n",(0,a.mdx)("inlineCode",{parentName:"p"},"no-matching-results"),", ",(0,a.mdx)("inlineCode",{parentName:"p"},"not-authorized"),", or ",(0,a.mdx)("inlineCode",{parentName:"p"},"error"))))))}W.isMDXComponent=!0;var F=["components"];function L(){return L=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},L.apply(this,arguments)}function X(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var Z={},B="wrapper";function z(e){var t=e.components,n=X(e,F);return(0,a.mdx)(B,L({},Z,n,{components:t,mdxType:"MDXLayout"}),(0,a.mdx)(l.C,{mdxType:"Badge"}),(0,a.mdx)("h1",{id:"terra-status-view"},"Terra Status View"),(0,a.mdx)("p",null,"Presents an icon, title, message, and/or buttons based on a status type scenario. Scenarios include ",(0,a.mdx)("inlineCode",{parentName:"p"},"no-data"),", ",(0,a.mdx)("inlineCode",{parentName:"p"},"no-matching-results"),", ",(0,a.mdx)("inlineCode",{parentName:"p"},"not-authorized"),", ",(0,a.mdx)("inlineCode",{parentName:"p"},"error"),", or a custom scenario."),(0,a.mdx)("h2",{id:"getting-started"},"Getting Started"),(0,a.mdx)("ul",null,(0,a.mdx)("li",{parentName:"ul"},"Install with ",(0,a.mdx)("a",{parentName:"li",href:"https://www.npmjs.com/"},"npmjs"),":",(0,a.mdx)("ul",{parentName:"li"},(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("inlineCode",{parentName:"li"},"npm install terra-status-view"))))),(0,a.mdx)("h2",{id:"peer-dependencies"},"Peer Dependencies"),(0,a.mdx)("p",null,"This component requires the following peer dependencies be installed in your app for the component to properly function."),(0,a.mdx)("table",null,(0,a.mdx)("thead",{parentName:"table"},(0,a.mdx)("tr",{parentName:"thead"},(0,a.mdx)("th",{parentName:"tr",align:null},"Peer Dependency"),(0,a.mdx)("th",{parentName:"tr",align:null},"Version"))),(0,a.mdx)("tbody",{parentName:"table"},(0,a.mdx)("tr",{parentName:"tbody"},(0,a.mdx)("td",{parentName:"tr",align:null},"react"),(0,a.mdx)("td",{parentName:"tr",align:null},"^16.8.5")),(0,a.mdx)("tr",{parentName:"tbody"},(0,a.mdx)("td",{parentName:"tr",align:null},"react-dom"),(0,a.mdx)("td",{parentName:"tr",align:null},"^16.8.5")),(0,a.mdx)("tr",{parentName:"tbody"},(0,a.mdx)("td",{parentName:"tr",align:null},"react-intl"),(0,a.mdx)("td",{parentName:"tr",align:null},"^2.8.0")))),(0,a.mdx)("h2",{id:"usage"},"Usage"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-jsx"},"import StatusView from 'terra-status-view';\n")),(0,a.mdx)("h2",{id:"implementation-notes"},"Implementation Notes:"),(0,a.mdx)("p",null,"The Status-View component must be composed inside the ",(0,a.mdx)("a",{parentName:"p",href:"https://engineering.cerner.com/terra-core/components/terra-base/base/base"},"Base")," component with a locale in order for it to load the correct translation strings.\nSet ",(0,a.mdx)("inlineCode",{parentName:"p"},"focusable=false")," for svg element used for ",(0,a.mdx)("inlineCode",{parentName:"p"},"customGlyph")," prop, to prevent focusing of the svg in IE10."),(0,a.mdx)("h2",{id:"component-features"},"Component Features"),(0,a.mdx)("ul",null,(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("a",{parentName:"li",href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#cross-browser-support"},"Cross-Browser Support")),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("a",{parentName:"li",href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#responsive-support"},"Responsive Support")),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("a",{parentName:"li",href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#mobile-support"},"Mobile Support"))),(0,a.mdx)("h2",{id:"examples"},"Examples"),(0,a.mdx)(c,{title:"Variants",mdxType:"ToggleVariants"}),(0,a.mdx)(N,{title:"Custom: Icon + message + buttons",mdxType:"Custom"}),(0,a.mdx)(v,{mdxType:"ToggleAlignmentAndGlyph"}),(0,a.mdx)(R,{title:"Toggle Status View",mdxType:"ToggleStatusView"}),(0,a.mdx)("h2",{id:"status-view-props"},"Status View Props"),(0,a.mdx)(W,{mdxType:"StatusViewPropsTable"}))}z.isMDXComponent=!0},80848:function(e,t,n){n.d(t,{C:function(){return l}});var r=n(67294),a=n(22863),l=function(e){var t=e.url;return r.createElement(a.Z,{src:"https://github.com/cerner/terra-core/tree/main/packages/terra-status-view",name:"terra-status-view",version:"4.57.0",url:t})}},66529:function(e,t,n){n.r(t),t.default={"orion-fusion-theme":"IconDueSoon-module__orion-fusion-theme___dM1FH",IconDueSoon:"IconDueSoon-module__IconDueSoon___NTVV1"}},8439:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=s(n(67294)),a=s(n(45697)),l=s(n(47717)),i=s(n(13975)),o=s(n(87786)),d=s(n(88413)),u=["allowClear","children","defaultValue","disabled","error","help","hideRequired","isIncomplete","isInline","isInvalid","isLabelHidden","label","labelAttrs","maxHeight","maxWidth","onChange","placeholder","required","selectAttrs","selectId","showOptional","value"];function s(e){return e&&e.__esModule?e:{default:e}}function p(){return p=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},p.apply(this,arguments)}function m(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c={allowClear:a.default.bool,children:a.default.node,label:a.default.string.isRequired,defaultValue:a.default.oneOfType([a.default.string,a.default.number,a.default.array]),disabled:a.default.bool,error:a.default.node,help:a.default.node,hideRequired:a.default.bool,isIncomplete:a.default.bool,isInline:a.default.bool,isInvalid:a.default.bool,isLabelHidden:a.default.bool,labelAttrs:a.default.object,maxHeight:a.default.number,maxWidth:a.default.string,onChange:a.default.func,placeholder:a.default.string,required:a.default.bool,selectAttrs:a.default.object,selectId:a.default.string.isRequired,showOptional:a.default.bool,value:a.default.oneOfType([a.default.string,a.default.number,a.default.array])},f={allowClear:!1,children:void 0,defaultValue:void 0,disabled:!1,error:void 0,help:void 0,hideRequired:!1,isIncomplete:!1,isInline:!1,isInvalid:!1,isLabelHidden:!1,labelAttrs:{},maxHeight:void 0,maxWidth:void 0,onChange:void 0,placeholder:void 0,required:!1,selectAttrs:{},showOptional:!1,value:void 0},y=function(e){var t,n=e.allowClear,a=e.children,o=e.defaultValue,d=e.disabled,s=e.error,c=e.help,f=e.hideRequired,y=e.isIncomplete,x=e.isInline,h=e.isInvalid,g=e.isLabelHidden,b=e.label,v=e.labelAttrs,O=e.maxHeight,S=e.maxWidth,T=e.onChange,w=e.placeholder,C=e.required,j=e.selectAttrs,N=e.selectId,E=e.showOptional,A=e.value,V=m(e,u);return c&&s&&h?t="".concat(N,"-error ").concat(N,"-help"):(c&&(t="".concat(N,"-help")),s&&h&&(t="".concat(N,"-error"))),r.default.createElement(l.default,p({},V,{label:b,labelAttrs:v,error:s,help:c,hideRequired:f,required:C,showOptional:E,isInvalid:h,isInline:x,isLabelHidden:g,htmlFor:N,maxWidth:S}),r.default.createElement(i.default,p({},j,{ariaLabel:b,allowClear:n,"aria-describedby":t,disabled:j.disabled||d,id:N,isIncomplete:y,isInvalid:h,defaultValue:o,maxHeight:O||j.maxHeight,onChange:T,placeholder:w,required:C,value:A}),a))};y.propTypes=c,y.defaultProps=f,y.Option=d.default,y.OptGroup=o.default;var x=y;t.default=x},11338:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=u(n(67294)),a=u(n(94184)),l=u(n(47166)),i=u(n(50026)),o=u(n(99139)),d=u(n(66529));function u(e){return e&&e.__esModule?e:{default:e}}function s(){return s=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},s.apply(this,arguments)}var p=l.default.bind(d.default),m=function(e){var t=s({},e),n=r.default.useContext(i.default),l=(0,a.default)(p("IconDueSoon",n.className),e.className);return r.default.createElement(o.default,s({},t,{className:l}),r.default.createElement("path",{d:"M25.3 25.9l-5.2-5.2v-8.5c.1-.7-.4-1.3-1-1.4-.7-.1-1.3.4-1.4 1V21c0 .5.2.9.5 1.2l5.3 5.3c.5.5 1.2.6 1.8.2.5-.4.6-1.1.3-1.6-.1 0-.2-.1-.3-.2zm7.2-15l1.7-1.7c.6-.6.6-1.7 0-2.3l-1.1-1.1c-.6-.6-1.7-.6-2.3 0L29 7.6c-1.5-1.1-3.3-2-5.1-2.6-.9-.3-1.8-.5-2.7-.6V1.6c0-.9-.7-1.6-1.6-1.6h-1.5c-.9 0-1.6.7-1.6 1.6v2.7C7.2 5.7.9 14.4 2.3 23.7 3.6 32 10.7 38.1 19 38.1c1 0 1.9-.1 2.9-.3l-1.4-1.4c-.2-.2-.4-.5-.5-.8-.3 0-.7.1-1 .1-8.1 0-14.6-6.5-14.6-14.6S10.9 6.5 19 6.5c1.5 0 2.9.2 4.3.7 5.9 1.8 9.9 7.1 10.2 13.2.7-.5 1.6-.6 2.4-.2-.2-3.4-1.4-6.6-3.4-9.3z"}),r.default.createElement("path",{fill:"#FFC20A",d:"M34.9 21.8c-.3 0-.6.1-.8.3l-12 12c-.5.4-.5 1.2-.1 1.6 0 0 0 .1.1.1L34 47.6c.5.4 1.1.4 1.6 0l11.9-11.9c.5-.4.5-1.2.1-1.6 0 0 0-.1-.1-.1L35.7 22.2c-.2-.2-.5-.4-.8-.4z"}),r.default.createElement("path",{fill:"#1C1F21",d:"M34.9 22.9l12 11.9v.2L35 46.9h-.2L22.9 35v-.2l11.9-11.9h.1m0-1.1c-.3 0-.6.1-.8.3l-12 12c-.5.4-.5 1.2-.1 1.6 0 0 0 .1.1.1L34 47.6c.5.4 1.1.4 1.6 0l11.9-11.9c.5-.4.5-1.2.1-1.6 0 0 0-.1-.1-.1L35.7 22.2c-.2-.2-.5-.4-.8-.4z"}),r.default.createElement("path",{fill:"#1C1F21",d:"M34 39h2v2h-2v-2zm0-11h2v9h-2v-9z"}))};m.displayName="IconDueSoon",m.defaultProps={viewBox:"0 0 48 48",xmlns:"http://www.w3.org/2000/svg"};var c=m;t.default=c}}]);