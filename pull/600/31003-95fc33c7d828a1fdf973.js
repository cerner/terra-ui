"use strict";(self.webpackChunkterra_ui=self.webpackChunkterra_ui||[]).push([[31003],{74386:function(e,l,t){l.Z=void 0;var a=i(t(67294)),n=i(t(8439)),r=i(t(47166)),d=i(t(48824));function i(e){return e&&e.__esModule?e:{default:e}}var m=r.default.bind(d.default);l.Z=function(){return a.default.createElement(n.default,{required:!0,isIncomplete:!0,label:"T-shirt size",placeholder:"Select a size",selectId:"tshirt-size-field-1",className:m("form-select")},a.default.createElement(n.default.Option,{value:"xSmall",display:"Extra Small"}),a.default.createElement(n.default.Option,{value:"small",display:"Small"}),a.default.createElement(n.default.Option,{value:"medium",display:"Medium"}),a.default.createElement(n.default.Option,{value:"large",display:"Large"}),a.default.createElement(n.default.Option,{value:"xLarge",display:"Extra Large"}))}},61173:function(e,l,t){l.Z=void 0;var a=i(t(67294)),n=i(t(8439)),r=i(t(47166)),d=i(t(48824));function i(e){return e&&e.__esModule?e:{default:e}}var m=r.default.bind(d.default);l.Z=function(){return a.default.createElement(n.default,{label:"T-shirt size",placeholder:"Select a size",selectId:"tshirt-size-field-2",required:!0,className:m("form-select")},a.default.createElement(n.default.Option,{value:"xSmall",display:"Extra Small"}),a.default.createElement(n.default.Option,{value:"small",display:"Small"}),a.default.createElement(n.default.Option,{value:"medium",display:"Medium"}),a.default.createElement(n.default.Option,{value:"large",display:"Large"}),a.default.createElement(n.default.Option,{value:"xLarge",display:"Extra Large"}))}},3753:function(e,l,t){l.Z=void 0;var a=i(t(67294)),n=i(t(8439)),r=i(t(47166)),d=i(t(48824));function i(e){return e&&e.__esModule?e:{default:e}}var m=r.default.bind(d.default);l.Z=function(){return a.default.createElement(n.default,{label:"T-shirt size",placeholder:"Select a size",selectId:"tshirt-size-field-3",className:m("form-select")},a.default.createElement(n.default.Option,{value:"xSmall",display:"Extra Small"}),a.default.createElement(n.default.Option,{value:"small",display:"Small"}),a.default.createElement(n.default.Option,{value:"medium",display:"Medium"}),a.default.createElement(n.default.Option,{value:"large",display:"Large"}),a.default.createElement(n.default.Option,{value:"xLarge",display:"Extra Large"}))}},49271:function(e,l,t){var a=t(64836),n=t(18698);l.Z=void 0;var r=a(t(27424)),d=function(e,l){if(!l&&e&&e.__esModule)return e;if(null===e||"object"!==n(e)&&"function"!=typeof e)return{default:e};var t=x(l);if(t&&t.has(e))return t.get(e);var a={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var d in e)if("default"!==d&&Object.prototype.hasOwnProperty.call(e,d)){var i=r?Object.getOwnPropertyDescriptor(e,d):null;i&&(i.get||i.set)?Object.defineProperty(a,d,i):a[d]=e[d]}a.default=e,t&&t.set(e,a);return a}(t(67294)),i=a(t(45697)),m=a(t(47166)),o=t(21538),p=a(t(33864)),s=a(t(23399)),u=t(51051),c=a(t(53560));function x(e){if("function"!=typeof WeakMap)return null;var l=new WeakMap,t=new WeakMap;return(x=function(e){return e?t:l})(e)}var f=m.default.bind(c.default),y={example:i.default.element,exampleSrc:i.default.element,exampleCssSrc:i.default.element,title:i.default.string,description:i.default.node,isExpanded:i.default.bool},g=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","true")},v=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","false")},h=function(e){var l=e.example,t=e.exampleSrc,a=e.exampleCssSrc,n=e.title,i=e.description,m=e.isExpanded,c=(0,d.useState)(m),x=(0,r.default)(c,2),y=x[0],h=x[1],b=(0,d.useState)(!1),T=(0,r.default)(b,2),S=T[0],O=T[1],N=d.default.useContext(o.ThemeContext),C=void 0!==a,E=function(){O(!S),y&&h(!y)},_=function(){h(!y),S&&O(!S)},j=function(e,l){e.nativeEvent.keyCode!==u.KEY_SPACE&&e.nativeEvent.keyCode!==u.KEY_RETURN||(e.preventDefault(),l())};return d.default.createElement("div",{className:f("template",N.className)},d.default.createElement("div",{className:f("header")},n&&d.default.createElement("h2",{className:f("title")},n)),d.default.createElement("div",{className:f("content")},i&&d.default.createElement("div",{className:f("description")},i),l),d.default.createElement("div",{className:f("footer")},t?d.default.createElement("div",{className:f("button-container")},C&&d.default.createElement("button",{type:"button",className:f("css-toggle","item",{"is-selected":S}),onClick:E,onKeyDown:function(e){return j(e,E)},onBlur:g,onMouseDown:v,tabIndex:0,"data-focus-styles-enabled":!0},d.default.createElement(p.default,{className:f("chevron")}),d.default.createElement("span",null,"CSS"),d.default.createElement(s.default,{className:f("chevron")})),d.default.createElement("button",{type:"button",className:f("code-toggle","item",{"is-selected":y}),onClick:_,onKeyDown:function(e){return j(e,_)},onBlur:g,onMouseDown:v,tabIndex:0,"data-focus-styles-enabled":!0},d.default.createElement(p.default,{className:f("chevron")}),d.default.createElement("span",null,"Code"),d.default.createElement(s.default,{className:f("chevron")}))):null,d.default.createElement("div",null,S&&d.default.createElement("div",{className:f("css")},a),y&&d.default.createElement("div",{className:f("code")},t))))};h.propTypes=y,h.defaultProps={isExpanded:!1};var b=h;l.Z=b},31003:function(e,l,t){t.r(l),t.d(l,{default:function(){return V}});var a=t(67294),n=t(81254),r=t(57739),d=t(3753),i=["components"];function m(){return m=Object.assign?Object.assign.bind():function(e){for(var l=1;l<arguments.length;l++){var t=arguments[l];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},m.apply(this,arguments)}function o(e,l){if(null==e)return{};var t,a,n=function(e,l){if(null==e)return{};var t,a,n={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],l.indexOf(t)>=0||(n[t]=e[t]);return n}(e,l);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],l.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var p={};function s(e){var l=e.components,t=o(e,i);return(0,n.mdx)("wrapper",m({},p,t,{components:l,mdxType:"MDXLayout"}),(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-jsx"},'import React from \'react\';\nimport SingleSelectField from \'terra-form-select/lib/SingleSelectField\';\nimport classNames from \'classnames/bind\';\nimport styles from \'../FormSelectDocCommon.module.scss\';\n\nconst cx = classNames.bind(styles);\n\nconst SingleSelectFieldExample = () => (\n  <SingleSelectField label="T-shirt size" placeholder="Select a size" selectId="tshirt-size-field-3" className={cx(\'form-select\')}>\n    <SingleSelectField.Option value="xSmall" display="Extra Small" />\n    <SingleSelectField.Option value="small" display="Small" />\n    <SingleSelectField.Option value="medium" display="Medium" />\n    <SingleSelectField.Option value="large" display="Large" />\n    <SingleSelectField.Option value="xLarge" display="Extra Large" />\n  </SingleSelectField>\n);\n\nexport default SingleSelectFieldExample;\n\n')))}s.isMDXComponent=!0;var u=t(49271),c=t(15305),x=function(e){var l=e.title,t=e.description,n=e.isExpanded;return a.createElement(u.Z,{title:l||"Single Select Field",description:t,example:a.createElement(d.Z,null),exampleCssSrc:a.createElement(c.Z,null),exampleSrc:a.createElement(s,null),isExpanded:n})},f=t(61173),y=["components"];function g(){return g=Object.assign?Object.assign.bind():function(e){for(var l=1;l<arguments.length;l++){var t=arguments[l];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},g.apply(this,arguments)}function v(e,l){if(null==e)return{};var t,a,n=function(e,l){if(null==e)return{};var t,a,n={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],l.indexOf(t)>=0||(n[t]=e[t]);return n}(e,l);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],l.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var h={};function b(e){var l=e.components,t=v(e,y);return(0,n.mdx)("wrapper",g({},h,t,{components:l,mdxType:"MDXLayout"}),(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-jsx"},'import React from \'react\';\nimport SingleSelectField from \'terra-form-select/lib/SingleSelectField\';\nimport classNames from \'classnames/bind\';\nimport styles from \'../FormSelectDocCommon.module.scss\';\n\nconst cx = classNames.bind(styles);\n\nconst SingleSelectFieldExample = () => (\n  <SingleSelectField label="T-shirt size" placeholder="Select a size" selectId="tshirt-size-field-2" required className={cx(\'form-select\')}>\n    <SingleSelectField.Option value="xSmall" display="Extra Small" />\n    <SingleSelectField.Option value="small" display="Small" />\n    <SingleSelectField.Option value="medium" display="Medium" />\n    <SingleSelectField.Option value="large" display="Large" />\n    <SingleSelectField.Option value="xLarge" display="Extra Large" />\n  </SingleSelectField>\n);\n\nexport default SingleSelectFieldExample;\n\n')))}b.isMDXComponent=!0;var T=function(e){var l=e.title,t=e.description,n=e.isExpanded;return a.createElement(u.Z,{title:l||"Required Single Select Field",description:t,example:a.createElement(f.Z,null),exampleCssSrc:a.createElement(c.Z,null),exampleSrc:a.createElement(b,null),isExpanded:n})},S=t(74386),O=["components"];function N(){return N=Object.assign?Object.assign.bind():function(e){for(var l=1;l<arguments.length;l++){var t=arguments[l];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},N.apply(this,arguments)}function C(e,l){if(null==e)return{};var t,a,n=function(e,l){if(null==e)return{};var t,a,n={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],l.indexOf(t)>=0||(n[t]=e[t]);return n}(e,l);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],l.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var E={};function _(e){var l=e.components,t=C(e,O);return(0,n.mdx)("wrapper",N({},E,t,{components:l,mdxType:"MDXLayout"}),(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-jsx"},'import React from \'react\';\nimport SingleSelectField from \'terra-form-select/lib/SingleSelectField\';\nimport classNames from \'classnames/bind\';\nimport styles from \'../FormSelectDocCommon.module.scss\';\n\nconst cx = classNames.bind(styles);\n\nconst SingleSelectFieldExample = () => (\n  <SingleSelectField required isIncomplete label="T-shirt size" placeholder="Select a size" selectId="tshirt-size-field-1" className={cx(\'form-select\')}>\n    <SingleSelectField.Option value="xSmall" display="Extra Small" />\n    <SingleSelectField.Option value="small" display="Small" />\n    <SingleSelectField.Option value="medium" display="Medium" />\n    <SingleSelectField.Option value="large" display="Large" />\n    <SingleSelectField.Option value="xLarge" display="Extra Large" />\n  </SingleSelectField>\n);\n\nexport default SingleSelectFieldExample;\n\n')))}_.isMDXComponent=!0;var j=function(e){var l=e.title,t=e.description,n=e.isExpanded;return a.createElement(u.Z,{title:l||"Incomplete Single Select Field",description:t,example:a.createElement(S.Z,null),exampleCssSrc:a.createElement(c.Z,null),exampleSrc:a.createElement(_,null),isExpanded:n})},w=t(78530),R=["components"];function D(){return D=Object.assign?Object.assign.bind():function(e){for(var l=1;l<arguments.length;l++){var t=arguments[l];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},D.apply(this,arguments)}function q(e,l){if(null==e)return{};var t,a,n=function(e,l){if(null==e)return{};var t,a,n={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],l.indexOf(t)>=0||(n[t]=e[t]);return n}(e,l);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],l.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var P={},F="wrapper";function W(e){var l=e.components,t=q(e,R);return(0,n.mdx)(F,D({},P,t,{components:l,mdxType:"MDXLayout"}),(0,n.mdx)(w.ZP,{mdxType:"PropsTable"},(0,n.mdx)(w.X2,{key:"ROW1",mdxType:"Row"},(0,n.mdx)(w.O,{mdxType:"PropNameCell"},"allowClear"),(0,n.mdx)(w.Di,{mdxType:"TypeCell"},(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-javascript"},"bool\n"))),(0,n.mdx)(w.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,n.mdx)(w.mW,{mdxType:"DefaultValueCell"},(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-javascript"},"false\n"))),(0,n.mdx)(w.Ex,{mdxType:"DescriptionCell"},(0,n.mdx)("p",null,"Whether a clear option is available to clear the selection."))),(0,n.mdx)(w.X2,{key:"ROW2",mdxType:"Row"},(0,n.mdx)(w.O,{mdxType:"PropNameCell"},"children"),(0,n.mdx)(w.Di,{mdxType:"TypeCell"},(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-javascript"},"node\n"))),(0,n.mdx)(w.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,n.mdx)(w.mW,{mdxType:"DefaultValueCell"},(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-javascript"},"undefined\n"))),(0,n.mdx)(w.Ex,{mdxType:"DescriptionCell"},(0,n.mdx)("p",null,"The select options."))),(0,n.mdx)(w.X2,{key:"ROW3",mdxType:"Row"},(0,n.mdx)(w.O,{mdxType:"PropNameCell"},"label"),(0,n.mdx)(w.Di,{mdxType:"TypeCell"},(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-javascript"},"string\n"))),(0,n.mdx)(w.dS,{isRequired:!0,mdxType:"RequiredCell"}),(0,n.mdx)(w.mW,{mdxType:"DefaultValueCell"},(0,n.mdx)("p",null,"none")),(0,n.mdx)(w.Ex,{mdxType:"DescriptionCell"},(0,n.mdx)("p",null,"The field label."))),(0,n.mdx)(w.X2,{key:"ROW4",mdxType:"Row"},(0,n.mdx)(w.O,{mdxType:"PropNameCell"},"defaultValue"),(0,n.mdx)(w.Di,{mdxType:"TypeCell"},(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-javascript"},"unionOf: [\n  type: 'string',\n  type: 'number',\n  type: 'array',\n],\n"))),(0,n.mdx)(w.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,n.mdx)(w.mW,{mdxType:"DefaultValueCell"},(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-javascript"},"undefined\n"))),(0,n.mdx)(w.Ex,{mdxType:"DescriptionCell"},(0,n.mdx)("p",null,"The default value of the select. Can be a string, number, or array of strings/numbers."))),(0,n.mdx)(w.X2,{key:"ROW5",mdxType:"Row"},(0,n.mdx)(w.O,{mdxType:"PropNameCell"},"disabled"),(0,n.mdx)(w.Di,{mdxType:"TypeCell"},(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-javascript"},"bool\n"))),(0,n.mdx)(w.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,n.mdx)(w.mW,{mdxType:"DefaultValueCell"},(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-javascript"},"false\n"))),(0,n.mdx)(w.Ex,{mdxType:"DescriptionCell"},(0,n.mdx)("p",null,"Whether the input is disabled."))),(0,n.mdx)(w.X2,{key:"ROW6",mdxType:"Row"},(0,n.mdx)(w.O,{mdxType:"PropNameCell"},"error"),(0,n.mdx)(w.Di,{mdxType:"TypeCell"},(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-javascript"},"node\n"))),(0,n.mdx)(w.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,n.mdx)(w.mW,{mdxType:"DefaultValueCell"},(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-javascript"},"undefined\n"))),(0,n.mdx)(w.Ex,{mdxType:"DescriptionCell"},(0,n.mdx)("p",null,"Error message displayed when the select is invalid."))),(0,n.mdx)(w.X2,{key:"ROW7",mdxType:"Row"},(0,n.mdx)(w.O,{mdxType:"PropNameCell"},"help"),(0,n.mdx)(w.Di,{mdxType:"TypeCell"},(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-javascript"},"node\n"))),(0,n.mdx)(w.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,n.mdx)(w.mW,{mdxType:"DefaultValueCell"},(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-javascript"},"undefined\n"))),(0,n.mdx)(w.Ex,{mdxType:"DescriptionCell"},(0,n.mdx)("p",null,"Help message to display with the select."))),(0,n.mdx)(w.X2,{key:"ROW8",mdxType:"Row"},(0,n.mdx)(w.O,{mdxType:"PropNameCell"},"isIncomplete"),(0,n.mdx)(w.Di,{mdxType:"TypeCell"},(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-javascript"},"bool\n"))),(0,n.mdx)(w.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,n.mdx)(w.mW,{mdxType:"DefaultValueCell"},(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-javascript"},"false\n"))),(0,n.mdx)(w.Ex,{mdxType:"DescriptionCell"},(0,n.mdx)("p",null,"Whether the field displays as Incomplete. Use when no value has been provided. ",(0,n.mdx)("em",{parentName:"p"},"(usage note: ",(0,n.mdx)("inlineCode",{parentName:"em"},"required")," must also be set)"),"."))),(0,n.mdx)(w.X2,{key:"ROW9",mdxType:"Row"},(0,n.mdx)(w.O,{mdxType:"PropNameCell"},"isInline"),(0,n.mdx)(w.Di,{mdxType:"TypeCell"},(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-javascript"},"bool\n"))),(0,n.mdx)(w.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,n.mdx)(w.mW,{mdxType:"DefaultValueCell"},(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-javascript"},"false\n"))),(0,n.mdx)(w.Ex,{mdxType:"DescriptionCell"},(0,n.mdx)("p",null,"Whether the field is displayed inline. Displays block by default."))),(0,n.mdx)(w.X2,{key:"ROW10",mdxType:"Row"},(0,n.mdx)(w.O,{mdxType:"PropNameCell"},"isInvalid"),(0,n.mdx)(w.Di,{mdxType:"TypeCell"},(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-javascript"},"bool\n"))),(0,n.mdx)(w.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,n.mdx)(w.mW,{mdxType:"DefaultValueCell"},(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-javascript"},"false\n"))),(0,n.mdx)(w.Ex,{mdxType:"DescriptionCell"},(0,n.mdx)("p",null,"Whether the field displays as Invalid. Use when value does not meet validation pattern."))),(0,n.mdx)(w.X2,{key:"ROW11",mdxType:"Row"},(0,n.mdx)(w.O,{mdxType:"PropNameCell"},"labelAttrs"),(0,n.mdx)(w.Di,{mdxType:"TypeCell"},(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-javascript"},"object\n"))),(0,n.mdx)(w.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,n.mdx)(w.mW,{mdxType:"DefaultValueCell"},(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-javascript"},"{}\n"))),(0,n.mdx)(w.Ex,{mdxType:"DescriptionCell"},(0,n.mdx)("p",null,"Additional attributes to spread onto the label."))),(0,n.mdx)(w.X2,{key:"ROW12",mdxType:"Row"},(0,n.mdx)(w.O,{mdxType:"PropNameCell"},"maxHeight"),(0,n.mdx)(w.Di,{mdxType:"TypeCell"},(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-javascript"},"number\n"))),(0,n.mdx)(w.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,n.mdx)(w.mW,{mdxType:"DefaultValueCell"},(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-javascript"},"undefined\n"))),(0,n.mdx)(w.Ex,{mdxType:"DescriptionCell"},(0,n.mdx)("p",null,"The max height of the dropdown."))),(0,n.mdx)(w.X2,{key:"ROW13",mdxType:"Row"},(0,n.mdx)(w.O,{mdxType:"PropNameCell"},"maxWidth"),(0,n.mdx)(w.Di,{mdxType:"TypeCell"},(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-javascript"},"string\n"))),(0,n.mdx)(w.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,n.mdx)(w.mW,{mdxType:"DefaultValueCell"},(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-javascript"},"undefined\n"))),(0,n.mdx)(w.Ex,{mdxType:"DescriptionCell"},(0,n.mdx)("p",null,"Set the max-width of a field using ",(0,n.mdx)("inlineCode",{parentName:"p"},"length")," or ",(0,n.mdx)("inlineCode",{parentName:"p"},"%"),".  Best practice recommendation to never exceed\na rendered value of 1020px. ",(0,n.mdx)("em",{parentName:"p"},"(Note: Providing custom inline styles will take precedence.)")))),(0,n.mdx)(w.X2,{key:"ROW14",mdxType:"Row"},(0,n.mdx)(w.O,{mdxType:"PropNameCell"},"placeholder"),(0,n.mdx)(w.Di,{mdxType:"TypeCell"},(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-javascript"},"string\n"))),(0,n.mdx)(w.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,n.mdx)(w.mW,{mdxType:"DefaultValueCell"},(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-javascript"},"undefined\n"))),(0,n.mdx)(w.Ex,{mdxType:"DescriptionCell"},(0,n.mdx)("p",null,"Placeholder text."))),(0,n.mdx)(w.X2,{key:"ROW15",mdxType:"Row"},(0,n.mdx)(w.O,{mdxType:"PropNameCell"},"required"),(0,n.mdx)(w.Di,{mdxType:"TypeCell"},(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-javascript"},"bool\n"))),(0,n.mdx)(w.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,n.mdx)(w.mW,{mdxType:"DefaultValueCell"},(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-javascript"},"false\n"))),(0,n.mdx)(w.Ex,{mdxType:"DescriptionCell"},(0,n.mdx)("p",null,"Whether the field is required."))),(0,n.mdx)(w.X2,{key:"ROW16",mdxType:"Row"},(0,n.mdx)(w.O,{mdxType:"PropNameCell"},"selectAttrs"),(0,n.mdx)(w.Di,{mdxType:"TypeCell"},(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-javascript"},"object\n"))),(0,n.mdx)(w.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,n.mdx)(w.mW,{mdxType:"DefaultValueCell"},(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-javascript"},"{}\n"))),(0,n.mdx)(w.Ex,{mdxType:"DescriptionCell"},(0,n.mdx)("p",null,"Additional attributes to spread onto the select."))),(0,n.mdx)(w.X2,{key:"ROW17",mdxType:"Row"},(0,n.mdx)(w.O,{mdxType:"PropNameCell"},"selectId"),(0,n.mdx)(w.Di,{mdxType:"TypeCell"},(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-javascript"},"string\n"))),(0,n.mdx)(w.dS,{isRequired:!0,mdxType:"RequiredCell"}),(0,n.mdx)(w.mW,{mdxType:"DefaultValueCell"},(0,n.mdx)("p",null,"none")),(0,n.mdx)(w.Ex,{mdxType:"DescriptionCell"},(0,n.mdx)("p",null,"The Select identifier. Links the htmlFor of the field to the select identifier."))),(0,n.mdx)(w.X2,{key:"ROW18",mdxType:"Row"},(0,n.mdx)(w.O,{mdxType:"PropNameCell"},"showOptional"),(0,n.mdx)(w.Di,{mdxType:"TypeCell"},(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-javascript"},"bool\n"))),(0,n.mdx)(w.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,n.mdx)(w.mW,{mdxType:"DefaultValueCell"},(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-javascript"},"false\n"))),(0,n.mdx)(w.Ex,{mdxType:"DescriptionCell"},(0,n.mdx)("p",null,"Whether to append the 'optional' label to a non-required field label."))),(0,n.mdx)(w.X2,{key:"ROW19",mdxType:"Row"},(0,n.mdx)(w.O,{mdxType:"PropNameCell"},"value"),(0,n.mdx)(w.Di,{mdxType:"TypeCell"},(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-javascript"},"unionOf: [\n  type: 'string',\n  type: 'number',\n  type: 'array',\n],\n"))),(0,n.mdx)(w.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,n.mdx)(w.mW,{mdxType:"DefaultValueCell"},(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-javascript"},"undefined\n"))),(0,n.mdx)(w.Ex,{mdxType:"DescriptionCell"},(0,n.mdx)("p",null,"The value of the select. Can be a string, number, or array of strings/numbers.")))))}W.isMDXComponent=!0;var k=["components"];function I(){return I=Object.assign?Object.assign.bind():function(e){for(var l=1;l<arguments.length;l++){var t=arguments[l];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},I.apply(this,arguments)}function L(e,l){if(null==e)return{};var t,a,n=function(e,l){if(null==e)return{};var t,a,n={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],l.indexOf(t)>=0||(n[t]=e[t]);return n}(e,l);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],l.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var M={},X="wrapper";function V(e){var l=e.components,t=L(e,k);return(0,n.mdx)(X,I({},M,t,{components:l,mdxType:"MDXLayout"}),(0,n.mdx)(r.C,{mdxType:"Badge"}),(0,n.mdx)("h1",{id:"terra-form-single-select-field"},"Terra Form Single Select Field"),(0,n.mdx)("p",null,"A convenience wrapper assembling a ",(0,n.mdx)("a",{parentName:"p",href:"https://github.com/cerner/terra-core/tree/main/packages/terra-form-select/src/SingleSelect.jsx"},"terra-form-select SingleSelect")," within a ",(0,n.mdx)("a",{parentName:"p",href:"https://github.com/cerner/terra-core/tree/main/packages/terra-form-field"},"terra-form-field"),"."),(0,n.mdx)("p",null,"To close the combobox while using JAWS with VPC ",(0,n.mdx)("strong",{parentName:"p"},"ON")," mode, user have to press escape key twice. The first escape key press loses the VPC focus and the second escape key press closes the single select as it has control focus."),(0,n.mdx)("h2",{id:"getting-started"},"Getting Started"),(0,n.mdx)("ul",null,(0,n.mdx)("li",{parentName:"ul"},"Install with ",(0,n.mdx)("a",{parentName:"li",href:"https://www.npmjs.com/"},"npmjs"),":",(0,n.mdx)("ul",{parentName:"li"},(0,n.mdx)("li",{parentName:"ul"},(0,n.mdx)("inlineCode",{parentName:"li"},"npm install terra-form-select"))))),(0,n.mdx)("h2",{id:"usage"},"Usage"),(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-jsx"},"import SingleSelectField from 'terra-form-select/lib/SingleSelectField';\n")),(0,n.mdx)("h2",{id:"component-features"},"Component Features"),(0,n.mdx)("ul",null,(0,n.mdx)("li",{parentName:"ul"},(0,n.mdx)("a",{parentName:"li",href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#cross-browser-support"},"Cross-Browser Support")),(0,n.mdx)("li",{parentName:"ul"},(0,n.mdx)("a",{parentName:"li",href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#responsive-support"},"Responsive Support")),(0,n.mdx)("li",{parentName:"ul"},(0,n.mdx)("a",{parentName:"li",href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#mobile-support"},"Mobile Support")),(0,n.mdx)("li",{parentName:"ul"},(0,n.mdx)("a",{parentName:"li",href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#internationalization-i18n"},"Internationalization Support")),(0,n.mdx)("li",{parentName:"ul"},(0,n.mdx)("a",{parentName:"li",href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#internationalization-i18n"},"Localization Support")),(0,n.mdx)("li",{parentName:"ul"},(0,n.mdx)("a",{parentName:"li",href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#ltr--rtl"},"LTR/RTL Support"))),(0,n.mdx)("h2",{id:"examples"},"Examples"),(0,n.mdx)(x,{title:"Single Select Field Example",mdxType:"SingleSelectFieldExample"}),(0,n.mdx)(T,{title:"Required Single Select Field Example",mdxType:"RequiredSingleSelectFieldExample"}),(0,n.mdx)(j,{title:"Incomplete Single Select Field Example",description:"Applies theme-specific styling for incomplete. ***Note: Only use incomplete if given specific guidance, reserved for specific applications when no value has been provided. Not for general use.***",mdxType:"IncompleteSingleSelectFieldExample"}),(0,n.mdx)("h2",{id:"single-select-field-props"},"Single Select Field Props"),(0,n.mdx)(W,{mdxType:"SingleSelectFieldPropsTable"}))}V.isMDXComponent=!0},15305:function(e,l,t){t.d(l,{Z:function(){return o}});t(67294);var a=t(81254),n=["components"];function r(){return r=Object.assign?Object.assign.bind():function(e){for(var l=1;l<arguments.length;l++){var t=arguments[l];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},r.apply(this,arguments)}function d(e,l){if(null==e)return{};var t,a,n=function(e,l){if(null==e)return{};var t,a,n={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],l.indexOf(t)>=0||(n[t]=e[t]);return n}(e,l);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],l.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var i={},m="wrapper";function o(e){var l=e.components,t=d(e,n);return(0,a.mdx)(m,r({},i,t,{components:l,mdxType:"MDXLayout"}),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-scss"},":local {\n  .form-select {\n    max-width: 300px;\n  }\n\n  .controlled-button {\n    margin: 5px;\n  }\n}\n\n")))}o.isMDXComponent=!0},57739:function(e,l,t){t.d(l,{C:function(){return r}});var a=t(67294),n=t(22863),r=function(e){var l=e.url;return a.createElement(n.Z,{src:"https://github.com/cerner/terra-core/tree/main/packages/terra-form-select",name:"terra-form-select",version:"6.49.0",url:l})}},48824:function(e,l,t){t.r(l),l.default={"form-select":"FormSelectDocCommon-module__form-select___Tm1QE","controlled-button":"FormSelectDocCommon-module__controlled-button___wG6cn"}},53560:function(e,l,t){t.r(l),l.default={"clinical-lowlight-theme":"ExampleTemplate-module__clinical-lowlight-theme___rBbtD","orion-fusion-theme":"ExampleTemplate-module__orion-fusion-theme___GzA23",template:"ExampleTemplate-module__template___a4uPk",header:"ExampleTemplate-module__header___iFXV3",content:"ExampleTemplate-module__content___48m4Q",description:"ExampleTemplate-module__description___NwBJo",footer:"ExampleTemplate-module__footer___GpSoG","button-container":"ExampleTemplate-module__button-container___rAD11",css:"ExampleTemplate-module__css___+jtk1",code:"ExampleTemplate-module__code___7rC6C","css-toggle":"ExampleTemplate-module__css-toggle___chHK7","code-toggle":"ExampleTemplate-module__code-toggle___TGlE-","is-selected":"ExampleTemplate-module__is-selected___0BYwS",item:"ExampleTemplate-module__item___8FTQq",chevron:"ExampleTemplate-module__chevron___VbY7N",title:"ExampleTemplate-module__title___r+nbJ","dynamic-content":"ExampleTemplate-module__dynamic-content___k+1H7"}},8439:function(e,l,t){Object.defineProperty(l,"__esModule",{value:!0}),l.default=void 0;var a=p(t(67294)),n=p(t(45697)),r=p(t(47717)),d=p(t(13975)),i=p(t(87786)),m=p(t(88413)),o=["allowClear","children","defaultValue","disabled","error","help","hideRequired","isIncomplete","isInline","isInvalid","isLabelHidden","label","labelAttrs","maxHeight","maxWidth","onChange","placeholder","required","selectAttrs","selectId","showOptional","value"];function p(e){return e&&e.__esModule?e:{default:e}}function s(){return s=Object.assign?Object.assign.bind():function(e){for(var l=1;l<arguments.length;l++){var t=arguments[l];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},s.apply(this,arguments)}function u(e,l){if(null==e)return{};var t,a,n=function(e,l){if(null==e)return{};var t,a,n={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],l.indexOf(t)>=0||(n[t]=e[t]);return n}(e,l);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],l.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var c={allowClear:n.default.bool,children:n.default.node,label:n.default.string.isRequired,defaultValue:n.default.oneOfType([n.default.string,n.default.number,n.default.array]),disabled:n.default.bool,error:n.default.node,help:n.default.node,hideRequired:n.default.bool,isIncomplete:n.default.bool,isInline:n.default.bool,isInvalid:n.default.bool,isLabelHidden:n.default.bool,labelAttrs:n.default.object,maxHeight:n.default.number,maxWidth:n.default.string,onChange:n.default.func,placeholder:n.default.string,required:n.default.bool,selectAttrs:n.default.object,selectId:n.default.string.isRequired,showOptional:n.default.bool,value:n.default.oneOfType([n.default.string,n.default.number,n.default.array])},x={allowClear:!1,children:void 0,defaultValue:void 0,disabled:!1,error:void 0,help:void 0,hideRequired:!1,isIncomplete:!1,isInline:!1,isInvalid:!1,isLabelHidden:!1,labelAttrs:{},maxHeight:void 0,maxWidth:void 0,onChange:void 0,placeholder:void 0,required:!1,selectAttrs:{},showOptional:!1,value:void 0},f=function(e){var l,t=e.allowClear,n=e.children,i=e.defaultValue,m=e.disabled,p=e.error,c=e.help,x=e.hideRequired,f=e.isIncomplete,y=e.isInline,g=e.isInvalid,v=e.isLabelHidden,h=e.label,b=e.labelAttrs,T=e.maxHeight,S=e.maxWidth,O=e.onChange,N=e.placeholder,C=e.required,E=e.selectAttrs,_=e.selectId,j=e.showOptional,w=e.value,R=u(e,o);return c&&p&&g?l="".concat(_,"-error ").concat(_,"-help"):(c&&(l="".concat(_,"-help")),p&&g&&(l="".concat(_,"-error"))),a.default.createElement(r.default,s({},R,{label:h,labelAttrs:b,error:p,help:c,hideRequired:x,required:C,showOptional:j,isInvalid:g,isInline:y,isLabelHidden:v,htmlFor:_,maxWidth:S}),a.default.createElement(d.default,s({},E,{ariaLabel:h,allowClear:t,"aria-describedby":l,disabled:E.disabled||m,id:_,isIncomplete:f,isInvalid:g,defaultValue:i,maxHeight:T||E.maxHeight,onChange:O,placeholder:N,required:C,value:w}),n))};f.propTypes=c,f.defaultProps=x,f.Option=m.default,f.OptGroup=i.default;l.default=f},33864:function(e,l,t){Object.defineProperty(l,"__esModule",{value:!0}),l.default=void 0;var a=r(t(67294)),n=r(t(99139));function r(e){return e&&e.__esModule?e:{default:e}}function d(){return d=Object.assign?Object.assign.bind():function(e){for(var l=1;l<arguments.length;l++){var t=arguments[l];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},d.apply(this,arguments)}var i=function(e){var l=d({},e);return a.default.createElement(n.default,l,a.default.createElement("path",{d:"M10.3 24 33.8 0l3.9 3.8L18 24l19.7 20.2-3.9 3.8z"}))};i.displayName="IconChevronLeft",i.defaultProps={viewBox:"0 0 48 48","data-name":"Layer 1",xmlns:"http://www.w3.org/2000/svg"};l.default=i}}]);