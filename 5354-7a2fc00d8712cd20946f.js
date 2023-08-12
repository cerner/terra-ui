"use strict";(self.webpackChunkterra_ui=self.webpackChunkterra_ui||[]).push([[5354,45627,37344,33667,96890,14041,27444,85565,3353,80858,17657,5161,45865,85355,3193,33315,4845,20444,26806,46647,85161,38681,17763,15318,40411,18101,38443,78996,39915,33442],{12554:function(e,t,n){t.Z=void 0;var r=a(n(67294)),l=a(n(11817));function a(e){return e&&e.__esModule?e:{default:e}}var d=function(){return r.default.createElement(l.default,{inputId:"incompleteField",label:"Incomplete Input Field",help:"Note: This is help text",type:"text",required:!0,isIncomplete:!0,inputAttrs:{name:"requiredField"}})};t.Z=d},79856:function(e,t,n){t.Z=void 0;var r=a(n(67294)),l=a(n(11817));function a(e){return e&&e.__esModule?e:{default:e}}var d=function(){return r.default.createElement(l.default,{inputId:"profile-name",label:"Profile Name",help:"Note: This can not be changed in the future",type:"text",inputAttrs:{name:"profile"}})};t.Z=d},6918:function(e,t,n){t.Z=void 0;var r=a(n(67294)),l=a(n(11817));function a(e){return e&&e.__esModule?e:{default:e}}var d=function(){return r.default.createElement(l.default,{inputId:"numeric-input",label:"Numeric Value",type:"number",help:"Enter Digits",inputAttrs:{name:"numeric"}})};t.Z=d},59779:function(e,t,n){t.Z=void 0;var r=a(n(67294)),l=a(n(11817));function a(e){return e&&e.__esModule?e:{default:e}}var d=function(){return r.default.createElement(l.default,{inputId:"requiredField",label:"Required Input Field",help:"Note: This is help text",type:"text",required:!0,inputAttrs:{name:"requiredField"}})};t.Z=d},22863:function(e,t,n){var r=n(64836);t.Z=void 0;var l=r(n(67294)),a=r(n(45697)),d=r(n(47166)),o=r(n(17422)),i=d.default.bind(o.default),u={name:a.default.string.isRequired,src:a.default.string,url:a.default.string,version:a.default.string.isRequired},p=function(e){var t=e.src,n=e.name,r=e.url,a=e.version,d=l.default.createElement("a",{className:i("badge"),href:r||"https://www.npmjs.org/package/".concat(n,"/v/").concat(a)},l.default.createElement("span",{className:i("badge-name")},r?"package":"npm"),l.default.createElement("span",{className:i("badge-version")},"v".concat(a))),o=t?l.default.createElement("a",{className:i("badge"),href:t},l.default.createElement("span",{className:i("badge-name")},"github"),l.default.createElement("span",{className:i("badge-version")},"source")):void 0;return l.default.createElement("div",{className:i("badge-container")},d,o)};p.propTypes=u;var m=p;t.Z=m},49271:function(e,t,n){var r=n(64836),l=n(18698);t.Z=void 0;var a=r(n(27424)),d=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==l(e)&&"function"!=typeof e)return{default:e};var n=f(t);if(n&&n.has(e))return n.get(e);var r={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var d in e)if("default"!==d&&Object.prototype.hasOwnProperty.call(e,d)){var o=a?Object.getOwnPropertyDescriptor(e,d):null;o&&(o.get||o.set)?Object.defineProperty(r,d,o):r[d]=e[d]}r.default=e,n&&n.set(e,r);return r}(n(67294)),o=r(n(45697)),i=r(n(47166)),u=n(21538),p=r(n(33864)),m=r(n(23399)),c=n(51051),s=r(n(53560));function f(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(f=function(e){return e?n:t})(e)}var x=i.default.bind(s.default),y={example:o.default.element,exampleSrc:o.default.element,exampleCssSrc:o.default.element,title:o.default.string,description:o.default.node,isExpanded:o.default.bool},b=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","true")},g=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","false")},v=function(e){var t=e.example,n=e.exampleSrc,r=e.exampleCssSrc,l=e.title,o=e.description,i=e.isExpanded,s=(0,d.useState)(i),f=(0,a.default)(s,2),y=f[0],v=f[1],h=(0,d.useState)(!1),T=(0,a.default)(h,2),O=T[0],N=T[1],_=d.default.useContext(u.ThemeContext),C=void 0!==r,j=function(){N(!O),y&&v(!y)},w=function(){v(!y),O&&N(!O)},E=function(e,t){e.nativeEvent.keyCode!==c.KEY_SPACE&&e.nativeEvent.keyCode!==c.KEY_RETURN||(e.preventDefault(),t())};return d.default.createElement("div",{className:x("template",_.className)},d.default.createElement("div",{className:x("header")},l&&d.default.createElement("h2",{className:x("title")},l)),d.default.createElement("div",{className:x("content")},o&&d.default.createElement("div",{className:x("description")},o),t),d.default.createElement("div",{className:x("footer")},n?d.default.createElement("div",{className:x("button-container")},C&&d.default.createElement("button",{type:"button",className:x("css-toggle","item",{"is-selected":O}),onClick:j,onKeyDown:function(e){return E(e,j)},onBlur:b,onMouseDown:g,tabIndex:0,"data-focus-styles-enabled":!0},d.default.createElement(p.default,{className:x("chevron")}),d.default.createElement("span",null,"CSS"),d.default.createElement(m.default,{className:x("chevron")})),d.default.createElement("button",{type:"button",className:x("code-toggle","item",{"is-selected":y}),onClick:w,onKeyDown:function(e){return E(e,w)},onBlur:b,onMouseDown:g,tabIndex:0,"data-focus-styles-enabled":!0},d.default.createElement(p.default,{className:x("chevron")}),d.default.createElement("span",null,"Code"),d.default.createElement(m.default,{className:x("chevron")}))):null,d.default.createElement("div",null,O&&d.default.createElement("div",{className:x("css")},r),y&&d.default.createElement("div",{className:x("code")},n))))};v.propTypes=y,v.defaultProps={isExpanded:!1};var h=v;t.Z=h},17149:function(e,t,n){n.r(t),n.d(t,{default:function(){return G}});var r=n(67294),l=n(81254),a=n(99614),d=n(79856),o=["components"];function i(){return i=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},i.apply(this,arguments)}function u(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var p={};function m(e){var t=e.components,n=u(e,o);return(0,l.mdx)("wrapper",i({},p,n,{components:t,mdxType:"MDXLayout"}),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-jsx"},'import React from \'react\';\nimport InputField from \'terra-form-input/lib/InputField\';\n\nconst DefaultInputField = () => (\n  <InputField\n    inputId="profile-name"\n    label="Profile Name"\n    help="Note: This can not be changed in the future"\n    type="text"\n    inputAttrs={{\n      name: \'profile\',\n    }}\n  />\n);\n\nexport default DefaultInputField;\n\n')))}m.isMDXComponent=!0;var c=n(49271),s=function(e){var t=e.title,n=e.description,l=e.isExpanded;return r.createElement(c.Z,{title:t||"Input Field",description:n,example:r.createElement(d.Z,null),exampleSrc:r.createElement(m,null),isExpanded:l})},f=n(59779),x=["components"];function y(){return y=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},y.apply(this,arguments)}function b(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var g={};function v(e){var t=e.components,n=b(e,x);return(0,l.mdx)("wrapper",y({},g,n,{components:t,mdxType:"MDXLayout"}),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-jsx"},'import React from \'react\';\nimport InputField from \'terra-form-input/lib/InputField\';\n\nconst RequiredInputField = () => (\n  <InputField\n    inputId="requiredField"\n    label="Required Input Field"\n    help="Note: This is help text"\n    type="text"\n    required\n    inputAttrs={{\n      name: \'requiredField\',\n    }}\n  />\n);\n\nexport default RequiredInputField;\n\n')))}v.isMDXComponent=!0;var h=function(e){var t=e.title,n=e.description,l=e.isExpanded;return r.createElement(c.Z,{title:t||"Required Input Field",description:n,example:r.createElement(f.Z,null),exampleSrc:r.createElement(v,null),isExpanded:l})},T=n(12554),O=["components"];function N(){return N=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},N.apply(this,arguments)}function _(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var C={};function j(e){var t=e.components,n=_(e,O);return(0,l.mdx)("wrapper",N({},C,n,{components:t,mdxType:"MDXLayout"}),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-jsx"},'import React from \'react\';\nimport InputField from \'terra-form-input/lib/InputField\';\n\nconst RequiredInputField = () => (\n  <InputField\n    inputId="incompleteField"\n    label="Incomplete Input Field"\n    help="Note: This is help text"\n    type="text"\n    required\n    isIncomplete\n    inputAttrs={{\n      name: \'requiredField\',\n    }}\n  />\n);\n\nexport default RequiredInputField;\n\n')))}j.isMDXComponent=!0;var w=function(e){var t=e.title,n=e.description,l=e.isExpanded;return r.createElement(c.Z,{title:t||"Incomplete Input Field",description:n,example:r.createElement(T.Z,null),exampleSrc:r.createElement(j,null),isExpanded:l})},E=n(6918),I=["components"];function R(){return R=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},R.apply(this,arguments)}function P(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var D={};function q(e){var t=e.components,n=P(e,I);return(0,l.mdx)("wrapper",R({},D,n,{components:t,mdxType:"MDXLayout"}),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-jsx"},'import React from \'react\';\nimport InputField from \'terra-form-input/lib/InputField\';\n\nconst NumberInputField = () => (\n  <InputField\n    inputId="numeric-input"\n    label="Numeric Value"\n    type="number"\n    help="Enter Digits"\n    inputAttrs={{\n      name: \'numeric\',\n    }}\n  />\n);\n\nexport default NumberInputField;\n\n')))}q.isMDXComponent=!0;var S=function(e){var t=e.title,n=e.description,l=e.isExpanded;return r.createElement(c.Z,{title:t||"Number Input Field",description:n,example:r.createElement(E.Z,null),exampleSrc:r.createElement(q,null),isExpanded:l})},k=n(78530),F=["components"];function W(){return W=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},W.apply(this,arguments)}function V(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var X={},M="wrapper";function A(e){var t=e.components,n=V(e,F);return(0,l.mdx)(M,W({},X,n,{components:t,mdxType:"MDXLayout"}),(0,l.mdx)(k.ZP,{mdxType:"PropsTable"},(0,l.mdx)(k.X2,{key:"ROW1",mdxType:"Row"},(0,l.mdx)(k.O,{mdxType:"PropNameCell"},"inputId"),(0,l.mdx)(k.Di,{mdxType:"TypeCell"},(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-javascript"},"string\n"))),(0,l.mdx)(k.dS,{isRequired:!0,mdxType:"RequiredCell"}),(0,l.mdx)(k.mW,{mdxType:"DefaultValueCell"},(0,l.mdx)("p",null,"none")),(0,l.mdx)(k.Ex,{mdxType:"DescriptionCell"},(0,l.mdx)("p",null,"Id of the input. Populates both the input and the htmlFor prop of the wrapper Field."))),(0,l.mdx)(k.X2,{key:"ROW2",mdxType:"Row"},(0,l.mdx)(k.O,{mdxType:"PropNameCell"},"label"),(0,l.mdx)(k.Di,{mdxType:"TypeCell"},(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-javascript"},"string\n"))),(0,l.mdx)(k.dS,{isRequired:!0,mdxType:"RequiredCell"}),(0,l.mdx)(k.mW,{mdxType:"DefaultValueCell"},(0,l.mdx)("p",null,"none")),(0,l.mdx)(k.Ex,{mdxType:"DescriptionCell"},(0,l.mdx)("p",null,"The label of the form control children."))),(0,l.mdx)(k.X2,{key:"ROW3",mdxType:"Row"},(0,l.mdx)(k.O,{mdxType:"PropNameCell"},"defaultValue"),(0,l.mdx)(k.Di,{mdxType:"TypeCell"},(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-javascript"},"unionOf: [\n  type: 'string',\n  type: 'number',\n],\n"))),(0,l.mdx)(k.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,l.mdx)(k.mW,{mdxType:"DefaultValueCell"},(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-javascript"},"undefined\n"))),(0,l.mdx)(k.Ex,{mdxType:"DescriptionCell"},(0,l.mdx)("p",null,"The defaultValue of the input field. Use this to create an uncontrolled input."))),(0,l.mdx)(k.X2,{key:"ROW4",mdxType:"Row"},(0,l.mdx)(k.O,{mdxType:"PropNameCell"},"disabled"),(0,l.mdx)(k.Di,{mdxType:"TypeCell"},(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-javascript"},"bool\n"))),(0,l.mdx)(k.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,l.mdx)(k.mW,{mdxType:"DefaultValueCell"},(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-javascript"},"false\n"))),(0,l.mdx)(k.Ex,{mdxType:"DescriptionCell"},(0,l.mdx)("p",null,"Whether the input is disabled."))),(0,l.mdx)(k.X2,{key:"ROW5",mdxType:"Row"},(0,l.mdx)(k.O,{mdxType:"PropNameCell"},"error"),(0,l.mdx)(k.Di,{mdxType:"TypeCell"},(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-javascript"},"node\n"))),(0,l.mdx)(k.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,l.mdx)(k.mW,{mdxType:"DefaultValueCell"},(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-javascript"},"null\n"))),(0,l.mdx)(k.Ex,{mdxType:"DescriptionCell"},(0,l.mdx)("p",null,"Error message for when the input is invalid."))),(0,l.mdx)(k.X2,{key:"ROW6",mdxType:"Row"},(0,l.mdx)(k.O,{mdxType:"PropNameCell"},"errorIcon"),(0,l.mdx)(k.Di,{mdxType:"TypeCell"},(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-javascript"},"element\n"))),(0,l.mdx)(k.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,l.mdx)(k.mW,{mdxType:"DefaultValueCell"},(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-javascript"},"<IconError />\n"))),(0,l.mdx)(k.Ex,{mdxType:"DescriptionCell"},(0,l.mdx)("p",null,"Error Icon to display when the input is invalid."))),(0,l.mdx)(k.X2,{key:"ROW7",mdxType:"Row"},(0,l.mdx)(k.O,{mdxType:"PropNameCell"},"help"),(0,l.mdx)(k.Di,{mdxType:"TypeCell"},(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-javascript"},"node\n"))),(0,l.mdx)(k.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,l.mdx)(k.mW,{mdxType:"DefaultValueCell"},(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-javascript"},"null\n"))),(0,l.mdx)(k.Ex,{mdxType:"DescriptionCell"},(0,l.mdx)("p",null,"Help element to display with the input."))),(0,l.mdx)(k.X2,{key:"ROW8",mdxType:"Row"},(0,l.mdx)(k.O,{mdxType:"PropNameCell"},"inputAttrs"),(0,l.mdx)(k.Di,{mdxType:"TypeCell"},(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-javascript"},"object\n"))),(0,l.mdx)(k.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,l.mdx)(k.mW,{mdxType:"DefaultValueCell"},(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-javascript"},"{}\n"))),(0,l.mdx)(k.Ex,{mdxType:"DescriptionCell"},(0,l.mdx)("p",null,"Attributes to attach to the input object"))),(0,l.mdx)(k.X2,{key:"ROW9",mdxType:"Row"},(0,l.mdx)(k.O,{mdxType:"PropNameCell"},"isIncomplete"),(0,l.mdx)(k.Di,{mdxType:"TypeCell"},(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-javascript"},"bool\n"))),(0,l.mdx)(k.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,l.mdx)(k.mW,{mdxType:"DefaultValueCell"},(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-javascript"},"false\n"))),(0,l.mdx)(k.Ex,{mdxType:"DescriptionCell"},(0,l.mdx)("p",null,"Whether the field and input displays as Incomplete. Use when no value has been provided. ",(0,l.mdx)("em",{parentName:"p"},"(usage note: ",(0,l.mdx)("inlineCode",{parentName:"em"},"required")," must also be set)"),"."))),(0,l.mdx)(k.X2,{key:"ROW10",mdxType:"Row"},(0,l.mdx)(k.O,{mdxType:"PropNameCell"},"isInline"),(0,l.mdx)(k.Di,{mdxType:"TypeCell"},(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-javascript"},"bool\n"))),(0,l.mdx)(k.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,l.mdx)(k.mW,{mdxType:"DefaultValueCell"},(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-javascript"},"false\n"))),(0,l.mdx)(k.Ex,{mdxType:"DescriptionCell"},(0,l.mdx)("p",null,"Whether or not the field is an inline field."))),(0,l.mdx)(k.X2,{key:"ROW11",mdxType:"Row"},(0,l.mdx)(k.O,{mdxType:"PropNameCell"},"isInvalid"),(0,l.mdx)(k.Di,{mdxType:"TypeCell"},(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-javascript"},"bool\n"))),(0,l.mdx)(k.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,l.mdx)(k.mW,{mdxType:"DefaultValueCell"},(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-javascript"},"false\n"))),(0,l.mdx)(k.Ex,{mdxType:"DescriptionCell"},(0,l.mdx)("p",null,"Whether the field and input displays as Invalid. Use when value does not meet validation pattern."))),(0,l.mdx)(k.X2,{key:"ROW12",mdxType:"Row"},(0,l.mdx)(k.O,{mdxType:"PropNameCell"},"labelAttrs"),(0,l.mdx)(k.Di,{mdxType:"TypeCell"},(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-javascript"},"object\n"))),(0,l.mdx)(k.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,l.mdx)(k.mW,{mdxType:"DefaultValueCell"},(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-javascript"},"{}\n"))),(0,l.mdx)(k.Ex,{mdxType:"DescriptionCell"},(0,l.mdx)("p",null,"Attributes to attach to the label."))),(0,l.mdx)(k.X2,{key:"ROW13",mdxType:"Row"},(0,l.mdx)(k.O,{mdxType:"PropNameCell"},"maxWidth"),(0,l.mdx)(k.Di,{mdxType:"TypeCell"},(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-javascript"},"string\n"))),(0,l.mdx)(k.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,l.mdx)(k.mW,{mdxType:"DefaultValueCell"},(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-javascript"},"undefined\n"))),(0,l.mdx)(k.Ex,{mdxType:"DescriptionCell"},(0,l.mdx)("p",null,"Set the max-width of a field using ",(0,l.mdx)("inlineCode",{parentName:"p"},"length")," or ",(0,l.mdx)("inlineCode",{parentName:"p"},"%"),".  Best practice recommendation to never exceed\na rendered value of 1020px. ",(0,l.mdx)("em",{parentName:"p"},"(Note: Providing custom inline styles will take precedence.)")))),(0,l.mdx)(k.X2,{key:"ROW14",mdxType:"Row"},(0,l.mdx)(k.O,{mdxType:"PropNameCell"},"onChange"),(0,l.mdx)(k.Di,{mdxType:"TypeCell"},(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-javascript"},"func\n"))),(0,l.mdx)(k.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,l.mdx)(k.mW,{mdxType:"DefaultValueCell"},(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-javascript"},"undefined\n"))),(0,l.mdx)(k.Ex,{mdxType:"DescriptionCell"},(0,l.mdx)("p",null,"Function to trigger when user changes the input value. Provide a function to create a controlled input."))),(0,l.mdx)(k.X2,{key:"ROW15",mdxType:"Row"},(0,l.mdx)(k.O,{mdxType:"PropNameCell"},"onInput"),(0,l.mdx)(k.Di,{mdxType:"TypeCell"},(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-javascript"},"func\n"))),(0,l.mdx)(k.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,l.mdx)(k.mW,{mdxType:"DefaultValueCell"},(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-javascript"},"undefined\n"))),(0,l.mdx)(k.Ex,{mdxType:"DescriptionCell"},(0,l.mdx)("p",null,"Function to trigger when user inputs a value. Use when programmatically setting a value. Sends parameter {Event} event."))),(0,l.mdx)(k.X2,{key:"ROW16",mdxType:"Row"},(0,l.mdx)(k.O,{mdxType:"PropNameCell"},"refCallback"),(0,l.mdx)(k.Di,{mdxType:"TypeCell"},(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-javascript"},"func\n"))),(0,l.mdx)(k.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,l.mdx)(k.mW,{mdxType:"DefaultValueCell"},(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-javascript"},"undefined\n"))),(0,l.mdx)(k.Ex,{mdxType:"DescriptionCell"},(0,l.mdx)("p",null,"Ref callback to pass into the ref attribute of the html input element."))),(0,l.mdx)(k.X2,{key:"ROW17",mdxType:"Row"},(0,l.mdx)(k.O,{mdxType:"PropNameCell"},"required"),(0,l.mdx)(k.Di,{mdxType:"TypeCell"},(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-javascript"},"bool\n"))),(0,l.mdx)(k.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,l.mdx)(k.mW,{mdxType:"DefaultValueCell"},(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-javascript"},"false\n"))),(0,l.mdx)(k.Ex,{mdxType:"DescriptionCell"},(0,l.mdx)("p",null,"Whether or not the field is required."))),(0,l.mdx)(k.X2,{key:"ROW18",mdxType:"Row"},(0,l.mdx)(k.O,{mdxType:"PropNameCell"},"showOptional"),(0,l.mdx)(k.Di,{mdxType:"TypeCell"},(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-javascript"},"bool\n"))),(0,l.mdx)(k.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,l.mdx)(k.mW,{mdxType:"DefaultValueCell"},(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-javascript"},"false\n"))),(0,l.mdx)(k.Ex,{mdxType:"DescriptionCell"},(0,l.mdx)("p",null,"Whether or not to append the 'optional' label to a non-required field label."))),(0,l.mdx)(k.X2,{key:"ROW19",mdxType:"Row"},(0,l.mdx)(k.O,{mdxType:"PropNameCell"},"type"),(0,l.mdx)(k.Di,{mdxType:"TypeCell"},(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-javascript"},"string\n"))),(0,l.mdx)(k.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,l.mdx)(k.mW,{mdxType:"DefaultValueCell"},(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-javascript"},"undefined\n"))),(0,l.mdx)(k.Ex,{mdxType:"DescriptionCell"},(0,l.mdx)("p",null,"Specifies the type of input element to display."))),(0,l.mdx)(k.X2,{key:"ROW20",mdxType:"Row"},(0,l.mdx)(k.O,{mdxType:"PropNameCell"},"value"),(0,l.mdx)(k.Di,{mdxType:"TypeCell"},(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-javascript"},"unionOf: [\n  type: 'string',\n  type: 'number',\n],\n"))),(0,l.mdx)(k.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,l.mdx)(k.mW,{mdxType:"DefaultValueCell"},(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-javascript"},"undefined\n"))),(0,l.mdx)(k.Ex,{mdxType:"DescriptionCell"},(0,l.mdx)("p",null,"The value of the input field. Use this to create a controlled input.")))))}A.isMDXComponent=!0;var B=["components"];function Z(){return Z=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Z.apply(this,arguments)}function L(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var H={},U="wrapper";function G(e){var t=e.components,n=L(e,B);return(0,l.mdx)(U,Z({},H,n,{components:t,mdxType:"MDXLayout"}),(0,l.mdx)(a.C,{mdxType:"Badge"}),(0,l.mdx)("h1",{id:"terra-form-input-field"},"Terra Form Input Field"),(0,l.mdx)("p",null,(0,l.mdx)("a",{parentName:"p",href:"https://github.com/cerner/terra-core/tree/main/packages/terra-form-input"},"terra-form-input")," component that is wrapped inside a\n",(0,l.mdx)("a",{parentName:"p",href:"https://github.com/cerner/terra-core/tree/main/packages/terra-form-field"},"terra-form-field")," component."),(0,l.mdx)("p",null,(0,l.mdx)("strong",{parentName:"p"},"Note:")," To follow ",(0,l.mdx)("a",{parentName:"p",href:"https://www.w3.org/WAI/GL/low-vision-a11y-tf/wiki/Placeholder_Research"},"UX Best Practices"),", this component does not allow ",(0,l.mdx)("inlineCode",{parentName:"p"},"placeholder"),"."),(0,l.mdx)("h2",{id:"getting-started"},"Getting Started"),(0,l.mdx)("ul",null,(0,l.mdx)("li",{parentName:"ul"},"Install with ",(0,l.mdx)("a",{parentName:"li",href:"https://www.npmjs.com/"},"npmjs"),":",(0,l.mdx)("ul",{parentName:"li"},(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("inlineCode",{parentName:"li"},"npm install terra-form-input"))))),(0,l.mdx)("h2",{id:"usage"},"Usage"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-jsx"},"import InputField from 'terra-form-input/lib/InputField';\n")),(0,l.mdx)("h2",{id:"component-features"},"Component Features"),(0,l.mdx)("ul",null,(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("a",{parentName:"li",href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#cross-browser-support"},"Cross-Browser Support")),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("a",{parentName:"li",href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#responsive-support"},"Responsive Support")),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("a",{parentName:"li",href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#mobile-support"},"Mobile Support")),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("a",{parentName:"li",href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#ltr--rtl"},"LTR/RTL Support"))),(0,l.mdx)("h2",{id:"examples"},"Examples"),(0,l.mdx)(s,{mdxType:"InputFieldExample"}),(0,l.mdx)(h,{mdxType:"RequiredInputFieldExample"}),(0,l.mdx)(w,{description:"Applies theme-specific styling for incomplete. ***Note: Only use incomplete if given specific guidance, reserved for specific applications when no value has been provided. Not for general use.***",mdxType:"IncompleteInputFieldExample"}),(0,l.mdx)(S,{mdxType:"NumberInputFieldExample"}),(0,l.mdx)("h2",{id:"form-input-field-props"},"Form Input Field Props"),(0,l.mdx)(A,{mdxType:"FormInputFieldPropsTable"}))}G.isMDXComponent=!0},99614:function(e,t,n){n.d(t,{C:function(){return a}});var r=n(67294),l=n(22863),a=function(e){var t=e.url;return r.createElement(l.Z,{src:"https://github.com/cerner/terra-core/tree/main/packages/terra-form-input",name:"terra-form-input",version:"4.24.0",url:t})}},17422:function(e,t,n){n.r(t),t.default={badge:"Badges-module__badge___vex-+","badge-container":"Badges-module__badge-container___B13Mv","badge-name":"Badges-module__badge-name___jkN0m","badge-version":"Badges-module__badge-version___agZ+P"}},53560:function(e,t,n){n.r(t),t.default={"clinical-lowlight-theme":"ExampleTemplate-module__clinical-lowlight-theme___rBbtD","orion-fusion-theme":"ExampleTemplate-module__orion-fusion-theme___GzA23",template:"ExampleTemplate-module__template___a4uPk",header:"ExampleTemplate-module__header___iFXV3",content:"ExampleTemplate-module__content___48m4Q",description:"ExampleTemplate-module__description___NwBJo",footer:"ExampleTemplate-module__footer___GpSoG","button-container":"ExampleTemplate-module__button-container___rAD11",css:"ExampleTemplate-module__css___+jtk1",code:"ExampleTemplate-module__code___7rC6C","css-toggle":"ExampleTemplate-module__css-toggle___chHK7","code-toggle":"ExampleTemplate-module__code-toggle___TGlE-","is-selected":"ExampleTemplate-module__is-selected___0BYwS",item:"ExampleTemplate-module__item___8FTQq",chevron:"ExampleTemplate-module__chevron___VbY7N",title:"ExampleTemplate-module__title___r+nbJ","dynamic-content":"ExampleTemplate-module__dynamic-content___k+1H7"}},68586:function(e,t,n){n.r(t),t.default={"clinical-lowlight-theme":"Input-module__clinical-lowlight-theme___clY96","orion-fusion-theme":"Input-module__orion-fusion-theme___phvH5","form-input":"Input-module__form-input___Fk8kb","form-error":"Input-module__form-error___aU4hq","form-incomplete":"Input-module__form-incomplete___h4I7H"}},55142:function(e,t,n){function r(e){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=m(n(67294)),a=m(n(45697)),d=m(n(94184)),o=m(n(47166)),i=m(n(50026)),u=m(n(68586)),p=["defaultValue","disabled","isIncomplete","isInvalid","onBlur","onChange","onFocus","onInput","name","pattern","refCallback","required","type","ariaLabel","value"];function m(e){return e&&e.__esModule?e:{default:e}}function c(){return c=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},c.apply(this,arguments)}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function f(e,t,n){return(t=b(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function x(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}function y(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,b(r.key),r)}}function b(e){var t=function(e,t){if("object"!==r(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var l=n.call(e,t||"default");if("object"!==r(l))return l;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===r(t)?t:String(t)}function g(e,t){return g=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},g(e,t)}function v(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,l=h(e);if(t){var a=h(this).constructor;n=Reflect.construct(l,arguments,a)}else n=l.apply(this,arguments);return function(e,t){if(t&&("object"===r(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(this,n)}}function h(e){return h=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},h(e)}var T=o.default.bind(u.default),O={defaultValue:a.default.oneOfType([a.default.string,a.default.number]),disabled:a.default.bool,isIncomplete:a.default.bool,isInvalid:a.default.bool,onBlur:a.default.func,onChange:a.default.func,onFocus:a.default.func,onInput:a.default.func,name:a.default.string,pattern:a.default.string,refCallback:a.default.func,required:a.default.bool,type:a.default.string,value:a.default.oneOfType([a.default.string,a.default.number]),ariaLabel:a.default.string},N={defaultValue:void 0,disabled:!1,isIncomplete:!1,isInvalid:!1,onBlur:void 0,onChange:void 0,onFocus:void 0,onInput:void 0,name:null,pattern:void 0,required:!1,refCallback:void 0,type:void 0,value:void 0},_=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&g(e,t)}(o,e);var t,n,r,a=v(o);function o(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,o),a.apply(this,arguments)}return t=o,n=[{key:"render",value:function(){var e,t=this.props,n=t.defaultValue,r=t.disabled,a=t.isIncomplete,o=t.isInvalid,i=t.onBlur,u=t.onChange,m=t.onFocus,y=t.onInput,b=t.name,g=t.pattern,v=t.refCallback,h=t.required,O=t.type,N=t.ariaLabel,_=t.value,C=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){f(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},x(t,p)),j=this.context,w=(void 0===O||["text","number","password","email","search","tel","url","hidden"].includes(O))&&T("form-input",{"form-error":o},{"form-incomplete":a&&h&&!o},j.className),E=(0,d.default)(w,C.className);return C&&Object.prototype.hasOwnProperty.call(C,"aria-label")?e=N||C["aria-label"]:N&&(e=N),C["aria-label"]=e,h&&(C["aria-required"]="true"),void 0!==_?C.value=_:void 0!==n&&(C.defaultValue=n),C.placeholder&&!C.showMpageFusionPlaceholder&&(C.placeholder=null),delete C.showMpageFusionPlaceholder,l.default.createElement("input",c({},C,{ref:function(e){v&&v(e)},name:b,type:O,pattern:g,onBlur:i,onChange:u,onFocus:m,onInput:y,disabled:r,required:h,className:E}))}}],n&&y(t.prototype,n),r&&y(t,r),Object.defineProperty(t,"prototype",{writable:!1}),o}(l.default.Component);_.propTypes=O,_.defaultProps=N,_.contextType=i.default,_.isInput=!0;var C=_;t.default=C},11817:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=u(n(67294)),l=u(n(45697)),a=u(n(47717)),d=u(n(51331)),o=u(n(55142)),i=["defaultValue","disabled","error","errorIcon","help","hideRequired","inputAttrs","inputId","isIncomplete","isInline","isInvalid","isLabelHidden","label","labelAttrs","maxWidth","onChange","onInput","refCallback","required","showOptional","type","value"];function u(e){return e&&e.__esModule?e:{default:e}}function p(){return p=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},p.apply(this,arguments)}function m(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var c={inputId:l.default.string.isRequired,label:l.default.string.isRequired,defaultValue:l.default.oneOfType([l.default.string,l.default.number]),disabled:l.default.bool,error:l.default.node,errorIcon:l.default.element,help:l.default.node,hideRequired:l.default.bool,inputAttrs:l.default.object,isIncomplete:l.default.bool,isInline:l.default.bool,isInvalid:l.default.bool,isLabelHidden:l.default.bool,labelAttrs:l.default.object,maxWidth:l.default.string,onChange:l.default.func,onInput:l.default.func,refCallback:l.default.func,required:l.default.bool,showOptional:l.default.bool,type:l.default.string,value:l.default.oneOfType([l.default.string,l.default.number])},s={defaultValue:void 0,disabled:!1,error:null,errorIcon:r.default.createElement(d.default,null),help:null,hideRequired:!1,inputAttrs:{},isIncomplete:!1,isInline:!1,isInvalid:!1,isLabelHidden:!1,labelAttrs:{},onChange:void 0,onInput:void 0,maxWidth:void 0,refCallback:void 0,required:!1,showOptional:!1,type:void 0,value:void 0},f=function(e){var t,n=e.defaultValue,l=e.disabled,d=e.error,u=e.errorIcon,c=e.help,s=e.hideRequired,f=e.inputAttrs,x=e.inputId,y=e.isIncomplete,b=e.isInline,g=e.isInvalid,v=e.isLabelHidden,h=e.label,T=e.labelAttrs,O=e.maxWidth,N=e.onChange,_=e.onInput,C=e.refCallback,j=e.required,w=e.showOptional,E=e.type,I=e.value,R=m(e,i);c&&d&&g?t="".concat(x,"-error ").concat(x,"-help"):(c&&(t="".concat(x,"-help")),d&&g&&(t="".concat(x,"-error")));var P=E||f.type;return R.placeholder&&(R.placeholder=null),r.default.createElement(a.default,p({label:h,labelAttrs:T,error:d,errorIcon:u,help:c,hideRequired:s,required:j,showOptional:w,isInvalid:g,isInline:b,isLabelHidden:v,htmlFor:x,maxWidth:O},R),r.default.createElement(o.default,p({},f,{disabled:f.disabled||l,id:x,isIncomplete:y,type:P,onChange:N,onInput:_,value:I,defaultValue:n,refCallback:C,"aria-describedby":t})))};f.propTypes=c,f.defaultProps=s;var x=f;t.default=x},33864:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a(n(67294)),l=a(n(99139));function a(e){return e&&e.__esModule?e:{default:e}}function d(){return d=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},d.apply(this,arguments)}var o=function(e){var t=d({},e);return r.default.createElement(l.default,t,r.default.createElement("path",{d:"M10.3 24L33.8 0l3.9 3.8L18 24l19.7 20.2-3.9 3.8z"}))};o.displayName="IconChevronLeft",o.defaultProps={className:"",viewBox:"0 0 48 48",xmlns:"http://www.w3.org/2000/svg","data-name":"Layer 1",isBidi:!0};var i=o;t.default=i}}]);