"use strict";(self.webpackChunkterra_ui=self.webpackChunkterra_ui||[]).push([[40135,45627,37344,33667,96890,85565,3353,80858,14041,5161,45865,85355,27444,3193,17657,33315,4845,46647,85161,20444,38681,15318,40411,18101],{11815:function(e,a,t){a.Z=void 0;var l=n(t(67294)),r=n(t(76493));function n(e){return e&&e.__esModule?e:{default:e}}var d=function(){return l.default.createElement(r.default,{inputId:"incompleteTextarea",label:"Incomplete Textarea",help:"Note: This is help text",required:!0,isIncomplete:!0,inputAttrs:{name:"requiredTextarea"}})};a.Z=d},97071:function(e,a,t){a.Z=void 0;var l=n(t(67294)),r=n(t(76493));function n(e){return e&&e.__esModule?e:{default:e}}var d=function(){return l.default.createElement(r.default,{inputId:"requiredTextarea",label:"Required Textarea",help:"Note: This is help text",required:!0,inputAttrs:{name:"requiredTextarea"}})};a.Z=d},28426:function(e,a,t){a.Z=void 0;var l=n(t(67294)),r=n(t(76493));function n(e){return e&&e.__esModule?e:{default:e}}var d=function(){return l.default.createElement(r.default,{inputId:"textarea",label:"Textarea",help:"Note: This is help text",inputAttrs:{name:"textarea"}})};a.Z=d},22863:function(e,a,t){var l=t(64836);a.Z=void 0;var r=l(t(67294)),n=l(t(45697)),d=l(t(47166)),m=l(t(17422)),p=d.default.bind(m.default),i={name:n.default.string.isRequired,src:n.default.string,url:n.default.string,version:n.default.string.isRequired},o=function(e){var a=e.src,t=e.name,l=e.url,n=e.version,d=r.default.createElement("a",{className:p("badge"),href:l||"https://www.npmjs.org/package/".concat(t,"/v/").concat(n)},r.default.createElement("span",{className:p("badge-name")},l?"package":"npm"),r.default.createElement("span",{className:p("badge-version")},"v".concat(n))),m=a?r.default.createElement("a",{className:p("badge"),href:a},r.default.createElement("span",{className:p("badge-name")},"github"),r.default.createElement("span",{className:p("badge-version")},"source")):void 0;return r.default.createElement("div",{className:p("badge-container")},d,m)};o.propTypes=i;var u=o;a.Z=u},49271:function(e,a,t){var l=t(64836),r=t(18698);a.Z=void 0;var n=l(t(27424)),d=function(e,a){if(!a&&e&&e.__esModule)return e;if(null===e||"object"!==r(e)&&"function"!=typeof e)return{default:e};var t=c(a);if(t&&t.has(e))return t.get(e);var l={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var d in e)if("default"!==d&&Object.prototype.hasOwnProperty.call(e,d)){var m=n?Object.getOwnPropertyDescriptor(e,d):null;m&&(m.get||m.set)?Object.defineProperty(l,d,m):l[d]=e[d]}l.default=e,t&&t.set(e,l);return l}(t(67294)),m=l(t(45697)),p=l(t(47166)),i=t(21538),o=l(t(33864)),u=l(t(23399)),x=t(51051),s=l(t(53560));function c(e){if("function"!=typeof WeakMap)return null;var a=new WeakMap,t=new WeakMap;return(c=function(e){return e?t:a})(e)}var f=p.default.bind(s.default),y={example:m.default.element,exampleSrc:m.default.element,exampleCssSrc:m.default.element,title:m.default.string,description:m.default.node,isExpanded:m.default.bool},T=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","true")},g=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","false")},h=function(e){var a=e.example,t=e.exampleSrc,l=e.exampleCssSrc,r=e.title,m=e.description,p=e.isExpanded,s=(0,d.useState)(p),c=(0,n.default)(s,2),y=c[0],h=c[1],v=(0,d.useState)(!1),N=(0,n.default)(v,2),b=N[0],C=N[1],O=d.default.useContext(i.ThemeContext),_=void 0!==l,R=function(){C(!b),y&&h(!y)},E=function(){h(!y),b&&C(!b)},j=function(e,a){e.nativeEvent.keyCode!==x.KEY_SPACE&&e.nativeEvent.keyCode!==x.KEY_RETURN||(e.preventDefault(),a())};return d.default.createElement("div",{className:f("template",O.className)},d.default.createElement("div",{className:f("header")},r&&d.default.createElement("h2",{className:f("title")},r)),d.default.createElement("div",{className:f("content")},m&&d.default.createElement("div",{className:f("description")},m),a),d.default.createElement("div",{className:f("footer")},t?d.default.createElement("div",{className:f("button-container")},_&&d.default.createElement("button",{type:"button",className:f("css-toggle","item",{"is-selected":b}),onClick:R,onKeyDown:function(e){return j(e,R)},onBlur:T,onMouseDown:g,tabIndex:0,"data-focus-styles-enabled":!0},d.default.createElement(o.default,{className:f("chevron")}),d.default.createElement("span",null,"CSS"),d.default.createElement(u.default,{className:f("chevron")})),d.default.createElement("button",{type:"button",className:f("code-toggle","item",{"is-selected":y}),onClick:E,onKeyDown:function(e){return j(e,E)},onBlur:T,onMouseDown:g,tabIndex:0,"data-focus-styles-enabled":!0},d.default.createElement(o.default,{className:f("chevron")}),d.default.createElement("span",null,"Code"),d.default.createElement(u.default,{className:f("chevron")}))):null,d.default.createElement("div",null,b&&d.default.createElement("div",{className:f("css")},l),y&&d.default.createElement("div",{className:f("code")},t))))};h.propTypes=y,h.defaultProps={isExpanded:!1};var v=h;a.Z=v},71916:function(e,a,t){t.r(a),t.d(a,{default:function(){return M}});var l=t(67294),r=t(81254),n=t(58038),d=t(28426),m=["components"];function p(){return p=Object.assign?Object.assign.bind():function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var l in t)Object.prototype.hasOwnProperty.call(t,l)&&(e[l]=t[l])}return e},p.apply(this,arguments)}function i(e,a){if(null==e)return{};var t,l,r=function(e,a){if(null==e)return{};var t,l,r={},n=Object.keys(e);for(l=0;l<n.length;l++)t=n[l],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(l=0;l<n.length;l++)t=n[l],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var o={};function u(e){var a=e.components,t=i(e,m);return(0,r.mdx)("wrapper",p({},o,t,{components:a,mdxType:"MDXLayout"}),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport TextareaField from 'terra-form-textarea/lib/TextareaField';\n\nconst DefaultTextAreaField = () => (\n  <TextareaField\n    inputId=\"textarea\"\n    label=\"Textarea\"\n    help=\"Note: This is help text\"\n    inputAttrs={{\n      name: 'textarea',\n    }}\n  />\n);\n\nexport default DefaultTextAreaField;\n\n")))}u.isMDXComponent=!0;var x=t(49271),s=function(e){var a=e.title,t=e.description,r=e.isExpanded;return l.createElement(x.Z,{title:a||"Textarea Field",description:t,example:l.createElement(d.Z,null),exampleSrc:l.createElement(u,null),isExpanded:r})},c=t(97071),f=["components"];function y(){return y=Object.assign?Object.assign.bind():function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var l in t)Object.prototype.hasOwnProperty.call(t,l)&&(e[l]=t[l])}return e},y.apply(this,arguments)}function T(e,a){if(null==e)return{};var t,l,r=function(e,a){if(null==e)return{};var t,l,r={},n=Object.keys(e);for(l=0;l<n.length;l++)t=n[l],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(l=0;l<n.length;l++)t=n[l],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var g={};function h(e){var a=e.components,t=T(e,f);return(0,r.mdx)("wrapper",y({},g,t,{components:a,mdxType:"MDXLayout"}),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport TextareaField from 'terra-form-textarea/lib/TextareaField';\n\nconst DefaultTextAreaField = () => (\n  <TextareaField\n    inputId=\"requiredTextarea\"\n    label=\"Required Textarea\"\n    help=\"Note: This is help text\"\n    required\n    inputAttrs={{\n      name: 'requiredTextarea',\n    }}\n  />\n);\n\nexport default DefaultTextAreaField;\n\n")))}h.isMDXComponent=!0;var v=function(e){var a=e.title,t=e.description,r=e.isExpanded;return l.createElement(x.Z,{title:a||"Required Textarea Field",description:t,example:l.createElement(c.Z,null),exampleSrc:l.createElement(h,null),isExpanded:r})},N=t(11815),b=["components"];function C(){return C=Object.assign?Object.assign.bind():function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var l in t)Object.prototype.hasOwnProperty.call(t,l)&&(e[l]=t[l])}return e},C.apply(this,arguments)}function O(e,a){if(null==e)return{};var t,l,r=function(e,a){if(null==e)return{};var t,l,r={},n=Object.keys(e);for(l=0;l<n.length;l++)t=n[l],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(l=0;l<n.length;l++)t=n[l],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var _={};function R(e){var a=e.components,t=O(e,b);return(0,r.mdx)("wrapper",C({},_,t,{components:a,mdxType:"MDXLayout"}),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport TextareaField from 'terra-form-textarea/lib/TextareaField';\n\nconst DefaultTextAreaField = () => (\n  <TextareaField\n    inputId=\"incompleteTextarea\"\n    label=\"Incomplete Textarea\"\n    help=\"Note: This is help text\"\n    required\n    isIncomplete\n    inputAttrs={{\n      name: 'requiredTextarea',\n    }}\n  />\n);\n\nexport default DefaultTextAreaField;\n\n")))}R.isMDXComponent=!0;var E=function(e){var a=e.title,t=e.description,r=e.isExpanded;return l.createElement(x.Z,{title:a||"Incomplete Textarea Field",description:t,example:l.createElement(N.Z,null),exampleSrc:l.createElement(R,null),isExpanded:r})},j=t(78530),w=["components"];function D(){return D=Object.assign?Object.assign.bind():function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var l in t)Object.prototype.hasOwnProperty.call(t,l)&&(e[l]=t[l])}return e},D.apply(this,arguments)}function q(e,a){if(null==e)return{};var t,l,r=function(e,a){if(null==e)return{};var t,l,r={},n=Object.keys(e);for(l=0;l<n.length;l++)t=n[l],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(l=0;l<n.length;l++)t=n[l],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var W={},P="wrapper";function S(e){var a=e.components,t=q(e,w);return(0,r.mdx)(P,D({},W,t,{components:a,mdxType:"MDXLayout"}),(0,r.mdx)(j.ZP,{mdxType:"PropsTable"},(0,r.mdx)(j.X2,{key:"ROW1",mdxType:"Row"},(0,r.mdx)(j.O,{mdxType:"PropNameCell"},"inputId"),(0,r.mdx)(j.Di,{mdxType:"TypeCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"string\n"))),(0,r.mdx)(j.dS,{isRequired:!0,mdxType:"RequiredCell"}),(0,r.mdx)(j.mW,{mdxType:"DefaultValueCell"},(0,r.mdx)("p",null,"none")),(0,r.mdx)(j.Ex,{mdxType:"DescriptionCell"},(0,r.mdx)("p",null,"Id of the input. Populates both the input and the htmlFor prop of the wrapper Field."))),(0,r.mdx)(j.X2,{key:"ROW2",mdxType:"Row"},(0,r.mdx)(j.O,{mdxType:"PropNameCell"},"label"),(0,r.mdx)(j.Di,{mdxType:"TypeCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"string\n"))),(0,r.mdx)(j.dS,{isRequired:!0,mdxType:"RequiredCell"}),(0,r.mdx)(j.mW,{mdxType:"DefaultValueCell"},(0,r.mdx)("p",null,"none")),(0,r.mdx)(j.Ex,{mdxType:"DescriptionCell"},(0,r.mdx)("p",null,"The label of the form control children."))),(0,r.mdx)(j.X2,{key:"ROW3",mdxType:"Row"},(0,r.mdx)(j.O,{mdxType:"PropNameCell"},"defaultValue"),(0,r.mdx)(j.Di,{mdxType:"TypeCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"unionOf: [\n  type: 'string',\n  type: 'number',\n],\n"))),(0,r.mdx)(j.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,r.mdx)(j.mW,{mdxType:"DefaultValueCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"undefined\n"))),(0,r.mdx)(j.Ex,{mdxType:"DescriptionCell"},(0,r.mdx)("p",null,"The defaultValue of the input field. Use this to create an uncontrolled input."))),(0,r.mdx)(j.X2,{key:"ROW4",mdxType:"Row"},(0,r.mdx)(j.O,{mdxType:"PropNameCell"},"disabled"),(0,r.mdx)(j.Di,{mdxType:"TypeCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"bool\n"))),(0,r.mdx)(j.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,r.mdx)(j.mW,{mdxType:"DefaultValueCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"false\n"))),(0,r.mdx)(j.Ex,{mdxType:"DescriptionCell"},(0,r.mdx)("p",null,"Whether the input is disabled."))),(0,r.mdx)(j.X2,{key:"ROW5",mdxType:"Row"},(0,r.mdx)(j.O,{mdxType:"PropNameCell"},"error"),(0,r.mdx)(j.Di,{mdxType:"TypeCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"node\n"))),(0,r.mdx)(j.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,r.mdx)(j.mW,{mdxType:"DefaultValueCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"null\n"))),(0,r.mdx)(j.Ex,{mdxType:"DescriptionCell"},(0,r.mdx)("p",null,"Error message for when the input is invalid."))),(0,r.mdx)(j.X2,{key:"ROW6",mdxType:"Row"},(0,r.mdx)(j.O,{mdxType:"PropNameCell"},"errorIcon"),(0,r.mdx)(j.Di,{mdxType:"TypeCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"element\n"))),(0,r.mdx)(j.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,r.mdx)(j.mW,{mdxType:"DefaultValueCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"<IconError />\n"))),(0,r.mdx)(j.Ex,{mdxType:"DescriptionCell"},(0,r.mdx)("p",null,"Error Icon to display when the input is invalid."))),(0,r.mdx)(j.X2,{key:"ROW7",mdxType:"Row"},(0,r.mdx)(j.O,{mdxType:"PropNameCell"},"help"),(0,r.mdx)(j.Di,{mdxType:"TypeCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"node\n"))),(0,r.mdx)(j.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,r.mdx)(j.mW,{mdxType:"DefaultValueCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"null\n"))),(0,r.mdx)(j.Ex,{mdxType:"DescriptionCell"},(0,r.mdx)("p",null,"Help element to display with the input."))),(0,r.mdx)(j.X2,{key:"ROW8",mdxType:"Row"},(0,r.mdx)(j.O,{mdxType:"PropNameCell"},"hideRequired"),(0,r.mdx)(j.Di,{mdxType:"TypeCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"bool\n"))),(0,r.mdx)(j.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,r.mdx)(j.mW,{mdxType:"DefaultValueCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"false\n"))),(0,r.mdx)(j.Ex,{mdxType:"DescriptionCell"},(0,r.mdx)("p",null,"Whether or not to hide the required indicator on the label."))),(0,r.mdx)(j.X2,{key:"ROW9",mdxType:"Row"},(0,r.mdx)(j.O,{mdxType:"PropNameCell"},"inputAttrs"),(0,r.mdx)(j.Di,{mdxType:"TypeCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"object\n"))),(0,r.mdx)(j.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,r.mdx)(j.mW,{mdxType:"DefaultValueCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"{}\n"))),(0,r.mdx)(j.Ex,{mdxType:"DescriptionCell"},(0,r.mdx)("p",null,"Attributes to attach to the input object"))),(0,r.mdx)(j.X2,{key:"ROW10",mdxType:"Row"},(0,r.mdx)(j.O,{mdxType:"PropNameCell"},"isAutoResizable"),(0,r.mdx)(j.Di,{mdxType:"TypeCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"bool\n"))),(0,r.mdx)(j.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,r.mdx)(j.mW,{mdxType:"DefaultValueCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"false\n"))),(0,r.mdx)(j.Ex,{mdxType:"DescriptionCell"},(0,r.mdx)("p",null,"Whether the textarea can be auto-resized vertically. ",(0,r.mdx)("em",{parentName:"p"},'(Will be ignored if size attribute is set to "full".)')))),(0,r.mdx)(j.X2,{key:"ROW11",mdxType:"Row"},(0,r.mdx)(j.O,{mdxType:"PropNameCell"},"isIncomplete"),(0,r.mdx)(j.Di,{mdxType:"TypeCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"bool\n"))),(0,r.mdx)(j.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,r.mdx)(j.mW,{mdxType:"DefaultValueCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"false\n"))),(0,r.mdx)(j.Ex,{mdxType:"DescriptionCell"},(0,r.mdx)("p",null,"Whether the field displays as Incomplete. Use when no value has been provided. ",(0,r.mdx)("em",{parentName:"p"},"(usage note: ",(0,r.mdx)("inlineCode",{parentName:"em"},"required")," must also be set)"),"."))),(0,r.mdx)(j.X2,{key:"ROW12",mdxType:"Row"},(0,r.mdx)(j.O,{mdxType:"PropNameCell"},"isInline"),(0,r.mdx)(j.Di,{mdxType:"TypeCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"bool\n"))),(0,r.mdx)(j.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,r.mdx)(j.mW,{mdxType:"DefaultValueCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"false\n"))),(0,r.mdx)(j.Ex,{mdxType:"DescriptionCell"},(0,r.mdx)("p",null,"Whether or not the field is an inline field."))),(0,r.mdx)(j.X2,{key:"ROW13",mdxType:"Row"},(0,r.mdx)(j.O,{mdxType:"PropNameCell"},"isInvalid"),(0,r.mdx)(j.Di,{mdxType:"TypeCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"bool\n"))),(0,r.mdx)(j.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,r.mdx)(j.mW,{mdxType:"DefaultValueCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"false\n"))),(0,r.mdx)(j.Ex,{mdxType:"DescriptionCell"},(0,r.mdx)("p",null,"Whether the field displays as Invalid. Use when value does not meet validation pattern."))),(0,r.mdx)(j.X2,{key:"ROW14",mdxType:"Row"},(0,r.mdx)(j.O,{mdxType:"PropNameCell"},"isLabelHidden"),(0,r.mdx)(j.Di,{mdxType:"TypeCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"bool\n"))),(0,r.mdx)(j.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,r.mdx)(j.mW,{mdxType:"DefaultValueCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"false\n"))),(0,r.mdx)(j.Ex,{mdxType:"DescriptionCell"},(0,r.mdx)("p",null,"Whether or not the label is visible. Use this props to hide a label while still creating it on the DOM for accessibility."))),(0,r.mdx)(j.X2,{key:"ROW15",mdxType:"Row"},(0,r.mdx)(j.O,{mdxType:"PropNameCell"},"labelAttrs"),(0,r.mdx)(j.Di,{mdxType:"TypeCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"object\n"))),(0,r.mdx)(j.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,r.mdx)(j.mW,{mdxType:"DefaultValueCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"{}\n"))),(0,r.mdx)(j.Ex,{mdxType:"DescriptionCell"},(0,r.mdx)("p",null,"Attributes to attach to the label."))),(0,r.mdx)(j.X2,{key:"ROW16",mdxType:"Row"},(0,r.mdx)(j.O,{mdxType:"PropNameCell"},"maxWidth"),(0,r.mdx)(j.Di,{mdxType:"TypeCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"string\n"))),(0,r.mdx)(j.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,r.mdx)(j.mW,{mdxType:"DefaultValueCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"undefined\n"))),(0,r.mdx)(j.Ex,{mdxType:"DescriptionCell"},(0,r.mdx)("p",null,"Set the max-width of a field using ",(0,r.mdx)("inlineCode",{parentName:"p"},"length")," or ",(0,r.mdx)("inlineCode",{parentName:"p"},"%"),".  Best practice recommendation to never exceed\na rendered value of 1020px. ",(0,r.mdx)("em",{parentName:"p"},"(Note: Providing custom inline styles will take precedence.)")))),(0,r.mdx)(j.X2,{key:"ROW17",mdxType:"Row"},(0,r.mdx)(j.O,{mdxType:"PropNameCell"},"onChange"),(0,r.mdx)(j.Di,{mdxType:"TypeCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"func\n"))),(0,r.mdx)(j.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,r.mdx)(j.mW,{mdxType:"DefaultValueCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"undefined\n"))),(0,r.mdx)(j.Ex,{mdxType:"DescriptionCell"},(0,r.mdx)("p",null,"Function to trigger when user changes the input value. Provide a function to create a controlled input."))),(0,r.mdx)(j.X2,{key:"ROW18",mdxType:"Row"},(0,r.mdx)(j.O,{mdxType:"PropNameCell"},"onInput"),(0,r.mdx)(j.Di,{mdxType:"TypeCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"func\n"))),(0,r.mdx)(j.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,r.mdx)(j.mW,{mdxType:"DefaultValueCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"undefined\n"))),(0,r.mdx)(j.Ex,{mdxType:"DescriptionCell"},(0,r.mdx)("p",null,"Function to trigger when user inputs a value. Use when programmatically setting a value. Sends parameter {Event} event."))),(0,r.mdx)(j.X2,{key:"ROW19",mdxType:"Row"},(0,r.mdx)(j.O,{mdxType:"PropNameCell"},"required"),(0,r.mdx)(j.Di,{mdxType:"TypeCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"bool\n"))),(0,r.mdx)(j.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,r.mdx)(j.mW,{mdxType:"DefaultValueCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"false\n"))),(0,r.mdx)(j.Ex,{mdxType:"DescriptionCell"},(0,r.mdx)("p",null,"Whether or not the field is required."))),(0,r.mdx)(j.X2,{key:"ROW20",mdxType:"Row"},(0,r.mdx)(j.O,{mdxType:"PropNameCell"},"rows"),(0,r.mdx)(j.Di,{mdxType:"TypeCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"number\n"))),(0,r.mdx)(j.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,r.mdx)(j.mW,{mdxType:"DefaultValueCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"undefined\n"))),(0,r.mdx)(j.Ex,{mdxType:"DescriptionCell"},(0,r.mdx)("p",null,"Value to set for the rows attribute of the textarea. This takes precedence over size when\nsetting the height of the textarea."))),(0,r.mdx)(j.X2,{key:"ROW21",mdxType:"Row"},(0,r.mdx)(j.O,{mdxType:"PropNameCell"},"size"),(0,r.mdx)(j.Di,{mdxType:"TypeCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"enum: [\n  'small'\n  'medium'\n  'large'\n  'full'\n],\n"))),(0,r.mdx)(j.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,r.mdx)(j.mW,{mdxType:"DefaultValueCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"'small'\n"))),(0,r.mdx)(j.Ex,{mdxType:"DescriptionCell"},(0,r.mdx)("p",null,"The size of the textarea. ",(0,r.mdx)("em",{parentName:"p"},"(Sizes the textarea by setting the rows attribute a corresponding preset value.)")))),(0,r.mdx)(j.X2,{key:"ROW22",mdxType:"Row"},(0,r.mdx)(j.O,{mdxType:"PropNameCell"},"showOptional"),(0,r.mdx)(j.Di,{mdxType:"TypeCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"bool\n"))),(0,r.mdx)(j.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,r.mdx)(j.mW,{mdxType:"DefaultValueCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"false\n"))),(0,r.mdx)(j.Ex,{mdxType:"DescriptionCell"},(0,r.mdx)("p",null,"Whether or not to append the 'optional' label to a non-required field label."))),(0,r.mdx)(j.X2,{key:"ROW23",mdxType:"Row"},(0,r.mdx)(j.O,{mdxType:"PropNameCell"},"value"),(0,r.mdx)(j.Di,{mdxType:"TypeCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"unionOf: [\n  type: 'string',\n  type: 'number',\n],\n"))),(0,r.mdx)(j.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,r.mdx)(j.mW,{mdxType:"DefaultValueCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"undefined\n"))),(0,r.mdx)(j.Ex,{mdxType:"DescriptionCell"},(0,r.mdx)("p",null,"The value of the input field. Use this to create a controlled input."))),(0,r.mdx)(j.X2,{key:"ROW24",mdxType:"Row"},(0,r.mdx)(j.O,{mdxType:"PropNameCell"},"disableResize"),(0,r.mdx)(j.Di,{mdxType:"TypeCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"bool\n"))),(0,r.mdx)(j.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,r.mdx)(j.mW,{mdxType:"DefaultValueCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"false\n"))),(0,r.mdx)(j.Ex,{mdxType:"DescriptionCell"},(0,r.mdx)("p",null,"Whether or not the textarea is resizable.\n",(0,r.mdx)("inlineCode",{parentName:"p"},"Disabled")," textarea and the ones with size ",(0,r.mdx)("inlineCode",{parentName:"p"},"full")," are always non-resizable.")))))}S.isMDXComponent=!0;var k=["components"];function F(){return F=Object.assign?Object.assign.bind():function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var l in t)Object.prototype.hasOwnProperty.call(t,l)&&(e[l]=t[l])}return e},F.apply(this,arguments)}function X(e,a){if(null==e)return{};var t,l,r=function(e,a){if(null==e)return{};var t,l,r={},n=Object.keys(e);for(l=0;l<n.length;l++)t=n[l],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(l=0;l<n.length;l++)t=n[l],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var I={},V="wrapper";function M(e){var a=e.components,t=X(e,k);return(0,r.mdx)(V,F({},I,t,{components:a,mdxType:"MDXLayout"}),(0,r.mdx)(n.C,{mdxType:"Badge"}),(0,r.mdx)("h1",{id:"terra-form-textarea-field"},"Terra Form Textarea Field"),(0,r.mdx)("p",null,(0,r.mdx)("a",{parentName:"p",href:"https://github.com/cerner/terra-core/tree/main/packages/terra-form-textarea"},"terra-form-textarea")," component that is wrapped inside a\n",(0,r.mdx)("a",{parentName:"p",href:"https://github.com/cerner/terra-core/tree/main/packages/terra-form-field"},"terra-form-field")," component."),(0,r.mdx)("p",null,(0,r.mdx)("strong",{parentName:"p"},"Note:")," To follow ",(0,r.mdx)("a",{parentName:"p",href:"https://www.w3.org/WAI/GL/low-vision-a11y-tf/wiki/Placeholder_Research"},"UX Best Practices"),", this component does not allow ",(0,r.mdx)("inlineCode",{parentName:"p"},"placeholder"),"."),(0,r.mdx)("h2",{id:"getting-started"},"Getting Started"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},"Install with ",(0,r.mdx)("a",{parentName:"li",href:"https://www.npmjs.com/"},"npmjs"),":",(0,r.mdx)("ul",{parentName:"li"},(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("inlineCode",{parentName:"li"},"npm install terra-form-textarea"))))),(0,r.mdx)("h2",{id:"usage"},"Usage"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-jsx"},"import TextareaField from 'terra-form-textarea/lib/TextareaField';\n")),(0,r.mdx)("h2",{id:"component-features"},"Component Features"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("a",{parentName:"li",href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#cross-browser-support"},"Cross-Browser Support")),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("a",{parentName:"li",href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#responsive-support"},"Responsive Support")),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("a",{parentName:"li",href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#mobile-support"},"Mobile Support")),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("a",{parentName:"li",href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#ltr--rtl"},"LTR/RTL Support"))),(0,r.mdx)("h2",{id:"examples"},"Examples"),(0,r.mdx)(s,{mdxType:"TextareaFieldExample"}),(0,r.mdx)(v,{mdxType:"RequiredTextareaFieldExample"}),(0,r.mdx)(E,{mdxType:"IncompleteTextareaFieldExample"}),(0,r.mdx)("h2",{id:"form-textarea-field-props"},"Form Textarea Field Props"),(0,r.mdx)(S,{mdxType:"FormTextareaFieldPropsTable"}))}M.isMDXComponent=!0},58038:function(e,a,t){t.d(a,{C:function(){return n}});var l=t(67294),r=t(22863),n=function(e){var a=e.url;return l.createElement(r.Z,{src:"https://github.com/cerner/terra-core/tree/main/packages/terra-form-textarea",name:"terra-form-textarea",version:"5.24.0",url:a})}},17422:function(e,a,t){t.r(a),a.default={badge:"Badges-module__badge___vex-+","badge-container":"Badges-module__badge-container___B13Mv","badge-name":"Badges-module__badge-name___jkN0m","badge-version":"Badges-module__badge-version___agZ+P"}},53560:function(e,a,t){t.r(a),a.default={"orion-fusion-theme":"ExampleTemplate-module__orion-fusion-theme___GzA23",template:"ExampleTemplate-module__template___a4uPk",header:"ExampleTemplate-module__header___iFXV3",content:"ExampleTemplate-module__content___48m4Q",description:"ExampleTemplate-module__description___NwBJo",footer:"ExampleTemplate-module__footer___GpSoG","button-container":"ExampleTemplate-module__button-container___rAD11",css:"ExampleTemplate-module__css___+jtk1",code:"ExampleTemplate-module__code___7rC6C","css-toggle":"ExampleTemplate-module__css-toggle___chHK7","code-toggle":"ExampleTemplate-module__code-toggle___TGlE-","is-selected":"ExampleTemplate-module__is-selected___0BYwS",item:"ExampleTemplate-module__item___8FTQq",chevron:"ExampleTemplate-module__chevron___VbY7N",title:"ExampleTemplate-module__title___r+nbJ","dynamic-content":"ExampleTemplate-module__dynamic-content___k+1H7"}},33864:function(e,a,t){Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var l=n(t(67294)),r=n(t(99139));function n(e){return e&&e.__esModule?e:{default:e}}function d(){return d=Object.assign?Object.assign.bind():function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var l in t)Object.prototype.hasOwnProperty.call(t,l)&&(e[l]=t[l])}return e},d.apply(this,arguments)}var m=function(e){var a=d({},e);return l.default.createElement(r.default,a,l.default.createElement("path",{d:"M10.3 24L33.8 0l3.9 3.8L18 24l19.7 20.2-3.9 3.8z"}))};m.displayName="IconChevronLeft",m.defaultProps={className:"",viewBox:"0 0 48 48",xmlns:"http://www.w3.org/2000/svg","data-name":"Layer 1",isBidi:!0};var p=m;a.default=p}}]);