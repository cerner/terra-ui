"use strict";(self.webpackChunkterra_ui=self.webpackChunkterra_ui||[]).push([[957,45627,37344,33667,96890,14041,27444,85565,3353,80858,17657,5161,19260,45865,85355,33315,3193,4845,20444,26806,46647,85161,38681,15318,40411,18101,38443,78996,39915,33442],{15835:function(e,t,n){function a(e){return a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a(e)}t.Z=void 0;var l=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==a(e)&&"function"!=typeof e)return{default:e};var n=m(t);if(n&&n.has(e))return n.get(e);var l={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var d in e)if("default"!==d&&Object.prototype.hasOwnProperty.call(e,d)){var i=r?Object.getOwnPropertyDescriptor(e,d):null;i&&(i.get||i.set)?Object.defineProperty(l,d,i):l[d]=e[d]}l.default=e,n&&n.set(e,l);return l}(n(67294)),r=o(n(47717)),d=o(n(47166)),i=o(n(21512));function o(e){return e&&e.__esModule?e:{default:e}}function m(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(m=function(e){return e?n:t})(e)}function s(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var a,l,r,d,i=[],o=!0,m=!1;try{if(r=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;o=!1}else for(;!(o=(a=r.call(n)).done)&&(i.push(a.value),i.length!==t);o=!0);}catch(e){m=!0,l=e}finally{try{if(!o&&null!=n.return&&(d=n.return(),Object(d)!==d))return}finally{if(m)throw l}}return i}}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return p(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return p(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function p(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}var u=d.default.bind(i.default);t.Z=function(){var e=s((0,l.useState)(!1),2),t=e[0],n=e[1],a=s((0,l.useState)(""),2),d=a[0],i=a[1],o=s((0,l.useState)(""),2),m=o[0],p=o[1],c=s((0,l.useState)(!1),2),x=c[0],f=c[1];return l.default.createElement("div",null,l.default.createElement(r.default,{label:"Field Label",help:"This is a standard, non-required field.",error:"Error Message",isInvalid:t},l.default.createElement("div",{className:u("field-content")},"Control Placeholder")),l.default.createElement(r.default,{label:"Field Label",help:"This is an optional field.",error:"Error Message",isInvalid:t,isInline:!0,showOptional:!0},l.default.createElement("div",{className:u("field-content")},"Control Placeholder")),l.default.createElement(r.default,{label:"Field Label",help:"This is a required field.",error:"Error Message",isInvalid:t,isInline:!0,required:!0},l.default.createElement("div",{className:u("field-content")},"Control Placeholder")),l.default.createElement(r.default,{label:"Field Label",help:"This is a required field, but the required indicator is hidden until the field is in error.",error:"Now the required indicator is showing because the field is in error.",isInvalid:t,isInline:!0,required:!0,hideRequired:!0},l.default.createElement("div",{className:u("field-content")},"Control Placeholder")),l.default.createElement("form",{onSubmit:function(e){e.preventDefault();/^[-a-z0-9#$%^&'`?{}_=+/}{'?]+(\.[-a-z0-9#$%^&'`?{}_=+/}{'?]+)*@([a-z0-9_][-a-z0-9_]*(\.[-a-z0-9_]+)*\.([a-z][a-z]{1,62}))?$/i.test(d)||""===d?(f(!1),p("")):(f(!0),p("The e-mail address entered is invalid"))}},l.default.createElement("p",null," Accessibility Hooks Example Field Label "),l.default.createElement(r.default,{label:"E-mail Label",htmlFor:"input_id",help:"Please enter a valid e-mail address (abc@example.com).",error:m,isInvalid:x},l.default.createElement("input",{type:"text",id:"input_id","aria-describedby":"input_id-error input_id-help",value:d,onChange:function(e){i(e.target.value)}})),l.default.createElement("button",{type:"submit",disabled:!d},"Submit")),l.default.createElement("hr",null),l.default.createElement("p",null,"If a field is invalid, an error icon will be displayed.",l.default.createElement("button",{type:"button",onClick:function(){n(!t)}},"Toggle Invalid State")))}},22863:function(e,t,n){var a=n(64836);t.Z=void 0;var l=a(n(67294)),r=a(n(45697)),d=a(n(47166)),i=a(n(17422)),o=d.default.bind(i.default),m={name:r.default.string.isRequired,src:r.default.string,url:r.default.string,version:r.default.string.isRequired},s=function(e){var t=e.src,n=e.name,a=e.url,r=e.version,d=l.default.createElement("a",{className:o("badge"),href:a||"https://www.npmjs.org/package/".concat(n,"/v/").concat(r)},l.default.createElement("span",{className:o("badge-name")},a?"package":"npm"),l.default.createElement("span",{className:o("badge-version")},"v".concat(r))),i=t?l.default.createElement("a",{className:o("badge"),href:t},l.default.createElement("span",{className:o("badge-name")},"github"),l.default.createElement("span",{className:o("badge-version")},"source")):void 0;return l.default.createElement("div",{className:o("badge-container")},d,i)};s.propTypes=m;var p=s;t.Z=p},49271:function(e,t,n){var a=n(64836),l=n(18698);t.Z=void 0;var r=a(n(27424)),d=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==l(e)&&"function"!=typeof e)return{default:e};var n=x(t);if(n&&n.has(e))return n.get(e);var a={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var d in e)if("default"!==d&&Object.prototype.hasOwnProperty.call(e,d)){var i=r?Object.getOwnPropertyDescriptor(e,d):null;i&&(i.get||i.set)?Object.defineProperty(a,d,i):a[d]=e[d]}a.default=e,n&&n.set(e,a);return a}(n(67294)),i=a(n(45697)),o=a(n(47166)),m=n(21538),s=a(n(33864)),p=a(n(23399)),u=n(51051),c=a(n(53560));function x(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(x=function(e){return e?n:t})(e)}var f=o.default.bind(c.default),y={example:i.default.element,exampleSrc:i.default.element,exampleCssSrc:i.default.element,title:i.default.string,description:i.default.node,isExpanded:i.default.bool},b=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","true")},g=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","false")},v=function(e){var t=e.example,n=e.exampleSrc,a=e.exampleCssSrc,l=e.title,i=e.description,o=e.isExpanded,c=(0,d.useState)(o),x=(0,r.default)(c,2),y=x[0],v=x[1],h=(0,d.useState)(!1),T=(0,r.default)(h,2),N=T[0],_=T[1],E=d.default.useContext(m.ThemeContext),C=void 0!==a,O=function(){_(!N),y&&v(!y)},w=function(){v(!y),N&&_(!N)},j=function(e,t){e.nativeEvent.keyCode!==u.KEY_SPACE&&e.nativeEvent.keyCode!==u.KEY_RETURN||(e.preventDefault(),t())};return d.default.createElement("div",{className:f("template",E.className)},d.default.createElement("div",{className:f("header")},l&&d.default.createElement("h2",{className:f("title")},l)),d.default.createElement("div",{className:f("content")},i&&d.default.createElement("div",{className:f("description")},i),t),d.default.createElement("div",{className:f("footer")},n?d.default.createElement("div",{className:f("button-container")},C&&d.default.createElement("button",{type:"button",className:f("css-toggle","item",{"is-selected":N}),onClick:O,onKeyDown:function(e){return j(e,O)},onBlur:b,onMouseDown:g,tabIndex:0,"data-focus-styles-enabled":!0},d.default.createElement(s.default,{className:f("chevron")}),d.default.createElement("span",null,"CSS"),d.default.createElement(p.default,{className:f("chevron")})),d.default.createElement("button",{type:"button",className:f("code-toggle","item",{"is-selected":y}),onClick:w,onKeyDown:function(e){return j(e,w)},onBlur:b,onMouseDown:g,tabIndex:0,"data-focus-styles-enabled":!0},d.default.createElement(s.default,{className:f("chevron")}),d.default.createElement("span",null,"Code"),d.default.createElement(p.default,{className:f("chevron")}))):null,d.default.createElement("div",null,N&&d.default.createElement("div",{className:f("css")},a),y&&d.default.createElement("div",{className:f("code")},n))))};v.propTypes=y,v.defaultProps={isExpanded:!1};var h=v;t.Z=h},76386:function(e,t,n){n.r(t),n.d(t,{default:function(){return R}});var a=n(67294),l=n(81254),r=n(14442),d=n(15835),i=["components"];function o(){return o=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},o.apply(this,arguments)}function m(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var s={};function p(e){var t=e.components,n=m(e,i);return(0,l.mdx)("wrapper",o({},s,n,{components:t,mdxType:"MDXLayout"}),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-jsx"},'import React, { useState } from \'react\';\nimport Field from \'terra-form-field\';\nimport classNames from \'classnames/bind\';\nimport styles from \'./FieldExamples.module.scss\';\n\nconst cx = classNames.bind(styles);\n\nconst FieldExamples = () => {\n  const [isInvalid, setIsInvalid] = useState(false);\n  const [email, setEmail] = useState(\'\');\n  const [message, setMessage] = useState(\'\');\n  const [emailInvalid, setEmailInvalid] = useState(false);\n\n  // Function for email validation\n  const emailValidation = (e) => {\n    e.preventDefault();\n    const regExEmail = /^[-a-z0-9#$%^&\'`?{}_=+/}{\'?]+(\\.[-a-z0-9#$%^&\'`?{}_=+/}{\'?]+)*@([a-z0-9_][-a-z0-9_]*(\\.[-a-z0-9_]+)*\\.([a-z][a-z]{1,62}))?$/i;\n    if (!regExEmail.test(email) && email !== \'\') {\n      setEmailInvalid(true);\n      setMessage(\'The e-mail address entered is invalid\');\n    } else {\n      setEmailInvalid(false);\n      setMessage(\'\');\n    }\n  };\n\n  const handleOnChange = (e) => {\n    setEmail(e.target.value);\n  };\n\n  const toggleIsInvalid = () => {\n    setIsInvalid(!isInvalid);\n  };\n\n  return (\n    <div>\n      <Field\n        label="Field Label"\n        help="This is a standard, non-required field."\n        error="Error Message"\n        isInvalid={isInvalid}\n      >\n        <div className={cx(\'field-content\')}>Control Placeholder</div>\n      </Field>\n      <Field\n        label="Field Label"\n        help="This is an optional field."\n        error="Error Message"\n        isInvalid={isInvalid}\n        isInline\n        showOptional\n      >\n        <div className={cx(\'field-content\')}>Control Placeholder</div>\n      </Field>\n\n      <Field\n        label="Field Label"\n        help="This is a required field."\n        error="Error Message"\n        isInvalid={isInvalid}\n        isInline\n        required\n      >\n        <div className={cx(\'field-content\')}>Control Placeholder</div>\n      </Field>\n\n      <Field\n        label="Field Label"\n        help="This is a required field, but the required indicator is hidden until the field is in error."\n        error="Now the required indicator is showing because the field is in error."\n        isInvalid={isInvalid}\n        isInline\n        required\n        hideRequired\n      >\n        <div className={cx(\'field-content\')}>Control Placeholder</div>\n      </Field>\n\n      <form onSubmit={emailValidation}>\n        <p> Accessibility Hooks Example Field Label </p>\n        <Field\n          label="E-mail Label"\n          htmlFor="input_id"\n          help="Please enter a valid e-mail address (abc@example.com)."\n          error={message}\n          isInvalid={emailInvalid}\n        >\n          <input type="text" id="input_id" aria-describedby="input_id-error input_id-help" value={email} onChange={handleOnChange} />\n        </Field>\n        <button type="submit" disabled={!email}>Submit</button>\n      </form>\n      <hr />\n      <p>\n        If a field is invalid, an error icon will be displayed.\n        <button type="button" onClick={toggleIsInvalid}>Toggle Invalid State</button>\n      </p>\n    </div>\n  );\n};\n\nexport default FieldExamples;\n\n')))}p.isMDXComponent=!0;var u=n(49271),c=["components"];function x(){return x=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},x.apply(this,arguments)}function f(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var y={};function b(e){var t=e.components,n=f(e,c);return(0,l.mdx)("wrapper",x({},y,n,{components:t,mdxType:"MDXLayout"}),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-scss"},":local {\n  .field-content {\n    border: dashed 1px #d3d3d3;\n  }\n}\n\n")))}b.isMDXComponent=!0;var g=function(e){var t=e.title,n=e.description,l=e.isExpanded;return a.createElement(u.Z,{title:t||"Field Examples",description:n,example:a.createElement(d.Z,null),exampleCssSrc:a.createElement(b,null),exampleSrc:a.createElement(p,null),isExpanded:l})},v=n(78530),h=["components"];function T(){return T=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},T.apply(this,arguments)}function N(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var _={},E="wrapper";function C(e){var t=e.components,n=N(e,h);return(0,l.mdx)(E,T({},_,n,{components:t,mdxType:"MDXLayout"}),(0,l.mdx)(v.ZP,{mdxType:"PropsTable"},(0,l.mdx)(v.X2,{key:"ROW1",mdxType:"Row"},(0,l.mdx)(v.O,{mdxType:"PropNameCell"},"children"),(0,l.mdx)(v.Di,{mdxType:"TypeCell"},(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-javascript"},"node\n"))),(0,l.mdx)(v.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,l.mdx)(v.mW,{mdxType:"DefaultValueCell"},(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-javascript"},"null\n"))),(0,l.mdx)(v.Ex,{mdxType:"DescriptionCell"},(0,l.mdx)("p",null,"The form control elements the Field contains."))),(0,l.mdx)(v.X2,{key:"ROW2",mdxType:"Row"},(0,l.mdx)(v.O,{mdxType:"PropNameCell"},"error"),(0,l.mdx)(v.Di,{mdxType:"TypeCell"},(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-javascript"},"node\n"))),(0,l.mdx)(v.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,l.mdx)(v.mW,{mdxType:"DefaultValueCell"},(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-javascript"},"null\n"))),(0,l.mdx)(v.Ex,{mdxType:"DescriptionCell"},(0,l.mdx)("p",null,"Error message for when the input is invalid. This will only be displayed if isInvalid is true."))),(0,l.mdx)(v.X2,{key:"ROW3",mdxType:"Row"},(0,l.mdx)(v.O,{mdxType:"PropNameCell"},"errorIcon"),(0,l.mdx)(v.Di,{mdxType:"TypeCell"},(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-javascript"},"element\n"))),(0,l.mdx)(v.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,l.mdx)(v.mW,{mdxType:"DefaultValueCell"},(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-javascript"},"<IconError />\n"))),(0,l.mdx)(v.Ex,{mdxType:"DescriptionCell"},(0,l.mdx)("p",null,"Error Icon to display when the input is invalid."))),(0,l.mdx)(v.X2,{key:"ROW4",mdxType:"Row"},(0,l.mdx)(v.O,{mdxType:"PropNameCell"},"help"),(0,l.mdx)(v.Di,{mdxType:"TypeCell"},(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-javascript"},"node\n"))),(0,l.mdx)(v.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,l.mdx)(v.mW,{mdxType:"DefaultValueCell"},(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-javascript"},"null\n"))),(0,l.mdx)(v.Ex,{mdxType:"DescriptionCell"},(0,l.mdx)("p",null,"Help element to display with the input."))),(0,l.mdx)(v.X2,{key:"ROW5",mdxType:"Row"},(0,l.mdx)(v.O,{mdxType:"PropNameCell"},"htmlFor"),(0,l.mdx)(v.Di,{mdxType:"TypeCell"},(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-javascript"},"string\n"))),(0,l.mdx)(v.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,l.mdx)(v.mW,{mdxType:"DefaultValueCell"},(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-javascript"},"undefined\n"))),(0,l.mdx)(v.Ex,{mdxType:"DescriptionCell"},(0,l.mdx)("p",null,"The htmlFor attribute on the field label."))),(0,l.mdx)(v.X2,{key:"ROW6",mdxType:"Row"},(0,l.mdx)(v.O,{mdxType:"PropNameCell"},"isInvalid"),(0,l.mdx)(v.Di,{mdxType:"TypeCell"},(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-javascript"},"bool\n"))),(0,l.mdx)(v.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,l.mdx)(v.mW,{mdxType:"DefaultValueCell"},(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-javascript"},"false\n"))),(0,l.mdx)(v.Ex,{mdxType:"DescriptionCell"},(0,l.mdx)("p",null,"Whether the field displays as Invalid. Use when value does not meet validation pattern."))),(0,l.mdx)(v.X2,{key:"ROW7",mdxType:"Row"},(0,l.mdx)(v.O,{mdxType:"PropNameCell"},"isInline"),(0,l.mdx)(v.Di,{mdxType:"TypeCell"},(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-javascript"},"bool\n"))),(0,l.mdx)(v.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,l.mdx)(v.mW,{mdxType:"DefaultValueCell"},(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-javascript"},"false\n"))),(0,l.mdx)(v.Ex,{mdxType:"DescriptionCell"},(0,l.mdx)("p",null,"Whether or not the field is an inline field."))),(0,l.mdx)(v.X2,{key:"ROW8",mdxType:"Row"},(0,l.mdx)(v.O,{mdxType:"PropNameCell"},"label"),(0,l.mdx)(v.Di,{mdxType:"TypeCell"},(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-javascript"},"string\n"))),(0,l.mdx)(v.dS,{isRequired:!0,mdxType:"RequiredCell"}),(0,l.mdx)(v.mW,{mdxType:"DefaultValueCell"},(0,l.mdx)("p",null,"none")),(0,l.mdx)(v.Ex,{mdxType:"DescriptionCell"},(0,l.mdx)("p",null,"The label of the form control children."))),(0,l.mdx)(v.X2,{key:"ROW9",mdxType:"Row"},(0,l.mdx)(v.O,{mdxType:"PropNameCell"},"labelAttrs"),(0,l.mdx)(v.Di,{mdxType:"TypeCell"},(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-javascript"},"object\n"))),(0,l.mdx)(v.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,l.mdx)(v.mW,{mdxType:"DefaultValueCell"},(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-javascript"},"{}\n"))),(0,l.mdx)(v.Ex,{mdxType:"DescriptionCell"},(0,l.mdx)("p",null,"Attributes to attach to the label."))),(0,l.mdx)(v.X2,{key:"ROW10",mdxType:"Row"},(0,l.mdx)(v.O,{mdxType:"PropNameCell"},"maxWidth"),(0,l.mdx)(v.Di,{mdxType:"TypeCell"},(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-javascript"},"string\n"))),(0,l.mdx)(v.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,l.mdx)(v.mW,{mdxType:"DefaultValueCell"},(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-javascript"},"undefined\n"))),(0,l.mdx)(v.Ex,{mdxType:"DescriptionCell"},(0,l.mdx)("p",null,"Set the max-width of a field using ",(0,l.mdx)("inlineCode",{parentName:"p"},"length")," or ",(0,l.mdx)("inlineCode",{parentName:"p"},"%"),".  Best practice recommendation to never exceed\na rendered value of 1020px. ",(0,l.mdx)("em",{parentName:"p"},"(Note: Providing custom inline styles will take precedence.)")))),(0,l.mdx)(v.X2,{key:"ROW11",mdxType:"Row"},(0,l.mdx)(v.O,{mdxType:"PropNameCell"},"required"),(0,l.mdx)(v.Di,{mdxType:"TypeCell"},(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-javascript"},"bool\n"))),(0,l.mdx)(v.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,l.mdx)(v.mW,{mdxType:"DefaultValueCell"},(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-javascript"},"false\n"))),(0,l.mdx)(v.Ex,{mdxType:"DescriptionCell"},(0,l.mdx)("p",null,"Whether or not the field is required."))),(0,l.mdx)(v.X2,{key:"ROW12",mdxType:"Row"},(0,l.mdx)(v.O,{mdxType:"PropNameCell"},"showOptional"),(0,l.mdx)(v.Di,{mdxType:"TypeCell"},(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-javascript"},"bool\n"))),(0,l.mdx)(v.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,l.mdx)(v.mW,{mdxType:"DefaultValueCell"},(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-javascript"},"false\n"))),(0,l.mdx)(v.Ex,{mdxType:"DescriptionCell"},(0,l.mdx)("p",null,"Whether or not to append the 'optional' label to a non-required field label."))),(0,l.mdx)(v.X2,{key:"ROW13",mdxType:"Row"},(0,l.mdx)(v.O,{mdxType:"PropNameCell"},"style"),(0,l.mdx)(v.Di,{mdxType:"TypeCell"},(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-javascript"},"object\n"))),(0,l.mdx)(v.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,l.mdx)(v.mW,{mdxType:"DefaultValueCell"},(0,l.mdx)("p",null,"none")),(0,l.mdx)(v.Ex,{mdxType:"DescriptionCell"},(0,l.mdx)("p",null,"Provides first class prop for custom inline styles")))))}C.isMDXComponent=!0;var O=["components"];function w(){return w=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},w.apply(this,arguments)}function j(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var S={},D="wrapper";function R(e){var t=e.components,n=j(e,O);return(0,l.mdx)(D,w({},S,n,{components:t,mdxType:"MDXLayout"}),(0,l.mdx)(r.C,{mdxType:"Badge"}),(0,l.mdx)("h1",{id:"terra-form-field"},"Terra Form Field"),(0,l.mdx)("p",null,"The Form Field component handles the layout of the label, help text and error text associated with a form element. Additionally, it provides required, optional, and invalid indicators."),(0,l.mdx)("h2",{id:"getting-started"},"Getting Started"),(0,l.mdx)("ul",null,(0,l.mdx)("li",{parentName:"ul"},"Install with ",(0,l.mdx)("a",{parentName:"li",href:"https://www.npmjs.com/"},"npmjs"),":",(0,l.mdx)("ul",{parentName:"li"},(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("inlineCode",{parentName:"li"},"npm install terra-form-field"))))),(0,l.mdx)("h2",{id:"peer-dependencies"},"Peer Dependencies"),(0,l.mdx)("p",null,"This component requires the following peer dependencies be installed in your app for the component to properly function."),(0,l.mdx)("table",null,(0,l.mdx)("thead",{parentName:"table"},(0,l.mdx)("tr",{parentName:"thead"},(0,l.mdx)("th",{parentName:"tr",align:null},"Peer Dependency"),(0,l.mdx)("th",{parentName:"tr",align:null},"Version"))),(0,l.mdx)("tbody",{parentName:"table"},(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"react"),(0,l.mdx)("td",{parentName:"tr",align:null},"^16.8.5")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"react-dom"),(0,l.mdx)("td",{parentName:"tr",align:null},"^16.8.5")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"react-intl"),(0,l.mdx)("td",{parentName:"tr",align:null},"^2.8.0")))),(0,l.mdx)("h2",{id:"implementation-notes"},"Implementation Notes:"),(0,l.mdx)("p",null,"The Form-Field component must be composed inside the ",(0,l.mdx)("a",{parentName:"p",href:"https://engineering.cerner.com/terra-core/components/terra-base/base/base"},"Base")," component with a locale in order for it to load the correct translation strings."),(0,l.mdx)("h2",{id:"usage"},"Usage"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-jsx"},"import Field from 'terra-form-field';\n")),(0,l.mdx)("h2",{id:"component-features"},"Component Features"),(0,l.mdx)("ul",null,(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("a",{parentName:"li",href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#cross-browser-support"},"Cross-Browser Support")),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("a",{parentName:"li",href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#responsive-support"},"Responsive Support")),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("a",{parentName:"li",href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#mobile-support"},"Mobile Support")),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("a",{parentName:"li",href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#internationalization-i18n"},"Internationalization Support")),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("a",{parentName:"li",href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#internationalization-i18n"},"Localization Support")),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("a",{parentName:"li",href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#ltr--rtl"},"LTR/RTL Support"))),(0,l.mdx)("h2",{id:"examples"},"Examples"),(0,l.mdx)(g,{mdxType:"FieldExamples"}),(0,l.mdx)("h2",{id:"form-field-props"},"Form Field Props"),(0,l.mdx)(C,{mdxType:"FormFieldPropsTable"}))}R.isMDXComponent=!0},14442:function(e,t,n){n.d(t,{C:function(){return r}});var a=n(67294),l=n(22863),r=function(e){var t=e.url;return a.createElement(l.Z,{src:"https://github.com/cerner/terra-core/tree/main/packages/terra-form-field",name:"terra-form-field",version:"4.29.0",url:t})}},21512:function(e,t,n){n.r(t),t.default={"field-content":"FieldExamples-module__field-content___WrOsw"}},17422:function(e,t,n){n.r(t),t.default={badge:"Badges-module__badge___vex-+","badge-container":"Badges-module__badge-container___B13Mv","badge-name":"Badges-module__badge-name___jkN0m","badge-version":"Badges-module__badge-version___agZ+P"}},53560:function(e,t,n){n.r(t),t.default={"clinical-lowlight-theme":"ExampleTemplate-module__clinical-lowlight-theme___rBbtD","orion-fusion-theme":"ExampleTemplate-module__orion-fusion-theme___GzA23",template:"ExampleTemplate-module__template___a4uPk",header:"ExampleTemplate-module__header___iFXV3",content:"ExampleTemplate-module__content___48m4Q",description:"ExampleTemplate-module__description___NwBJo",footer:"ExampleTemplate-module__footer___GpSoG","button-container":"ExampleTemplate-module__button-container___rAD11",css:"ExampleTemplate-module__css___+jtk1",code:"ExampleTemplate-module__code___7rC6C","css-toggle":"ExampleTemplate-module__css-toggle___chHK7","code-toggle":"ExampleTemplate-module__code-toggle___TGlE-","is-selected":"ExampleTemplate-module__is-selected___0BYwS",item:"ExampleTemplate-module__item___8FTQq",chevron:"ExampleTemplate-module__chevron___VbY7N",title:"ExampleTemplate-module__title___r+nbJ","dynamic-content":"ExampleTemplate-module__dynamic-content___k+1H7"}},33864:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=r(n(67294)),l=r(n(99139));function r(e){return e&&e.__esModule?e:{default:e}}function d(){return d=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},d.apply(this,arguments)}var i=function(e){var t=d({},e);return a.default.createElement(l.default,t,a.default.createElement("path",{d:"M10.3 24 33.8 0l3.9 3.8L18 24l19.7 20.2-3.9 3.8z"}))};i.displayName="IconChevronLeft",i.defaultProps={viewBox:"0 0 48 48","data-name":"Layer 1",xmlns:"http://www.w3.org/2000/svg"};var o=i;t.default=o}}]);