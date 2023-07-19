"use strict";(self.webpackChunkterra_ui=self.webpackChunkterra_ui||[]).push([[43943],{904:function(e,l,t){l.Z=void 0;var a=i(t(67294)),n=i(t(775)),r=i(t(47166)),d=i(t(48824));function i(e){return e&&e.__esModule?e:{default:e}}var m=r.default.bind(d.default),o=function(){return a.default.createElement(n.default,{required:!0,isIncomplete:!0,label:"T-shirt size",placeholder:"Select a size",selectId:"tshirt-size-field-1",className:m("form-select")},a.default.createElement(n.default.Option,{value:"xSmall",display:"Extra Small"}),a.default.createElement(n.default.Option,{value:"small",display:"Small"}),a.default.createElement(n.default.Option,{value:"medium",display:"Medium"}),a.default.createElement(n.default.Option,{value:"large",display:"Large"}),a.default.createElement(n.default.Option,{value:"xLarge",display:"Extra Large"}))};l.Z=o},96274:function(e,l,t){l.Z=void 0;var a=i(t(67294)),n=i(t(775)),r=i(t(47166)),d=i(t(48824));function i(e){return e&&e.__esModule?e:{default:e}}var m=r.default.bind(d.default),o=function(){return a.default.createElement(n.default,{label:"T-shirt size",placeholder:"Select a size",selectId:"tshirt-size-field-2",className:m("form-select")},a.default.createElement(n.default.Option,{value:"xSmall",display:"Extra Small"}),a.default.createElement(n.default.Option,{value:"small",display:"Small"}),a.default.createElement(n.default.Option,{value:"medium",display:"Medium"}),a.default.createElement(n.default.Option,{value:"large",display:"Large"}),a.default.createElement(n.default.Option,{value:"xLarge",display:"Extra Large"}))};l.Z=o},74854:function(e,l,t){l.Z=void 0;var a=i(t(67294)),n=i(t(775)),r=i(t(47166)),d=i(t(48824));function i(e){return e&&e.__esModule?e:{default:e}}var m=r.default.bind(d.default),o=function(){return a.default.createElement(n.default,{label:"T-shirt size",placeholder:"Select a size",selectId:"tshirt-size-field-3",required:!0,className:m("form-select")},a.default.createElement(n.default.Option,{value:"xSmall",display:"Extra Small"}),a.default.createElement(n.default.Option,{value:"small",display:"Small"}),a.default.createElement(n.default.Option,{value:"medium",display:"Medium"}),a.default.createElement(n.default.Option,{value:"large",display:"Large"}),a.default.createElement(n.default.Option,{value:"xLarge",display:"Extra Large"}))};l.Z=o},49271:function(e,l,t){var a=t(64836),n=t(18698);l.Z=void 0;var r=a(t(27424)),d=function(e,l){if(!l&&e&&e.__esModule)return e;if(null===e||"object"!==n(e)&&"function"!=typeof e)return{default:e};var t=x(l);if(t&&t.has(e))return t.get(e);var a={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var d in e)if("default"!==d&&Object.prototype.hasOwnProperty.call(e,d)){var i=r?Object.getOwnPropertyDescriptor(e,d):null;i&&(i.get||i.set)?Object.defineProperty(a,d,i):a[d]=e[d]}a.default=e,t&&t.set(e,a);return a}(t(67294)),i=a(t(45697)),m=a(t(47166)),o=t(21538),u=a(t(33864)),p=a(t(23399)),s=t(51051),c=a(t(53560));function x(e){if("function"!=typeof WeakMap)return null;var l=new WeakMap,t=new WeakMap;return(x=function(e){return e?t:l})(e)}var f=m.default.bind(c.default),y={example:i.default.element,exampleSrc:i.default.element,exampleCssSrc:i.default.element,title:i.default.string,description:i.default.node,isExpanded:i.default.bool},g=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","true")},v=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","false")},h=function(e){var l=e.example,t=e.exampleSrc,a=e.exampleCssSrc,n=e.title,i=e.description,m=e.isExpanded,c=(0,d.useState)(m),x=(0,r.default)(c,2),y=x[0],h=x[1],b=(0,d.useState)(!1),T=(0,r.default)(b,2),O=T[0],N=T[1],C=d.default.useContext(o.ThemeContext),_=void 0!==a,E=function(){N(!O),y&&h(!y)},S=function(){h(!y),O&&N(!O)},j=function(e,l){e.nativeEvent.keyCode!==s.KEY_SPACE&&e.nativeEvent.keyCode!==s.KEY_RETURN||(e.preventDefault(),l())};return d.default.createElement("div",{className:f("template",C.className)},d.default.createElement("div",{className:f("header")},n&&d.default.createElement("h2",{className:f("title")},n)),d.default.createElement("div",{className:f("content")},i&&d.default.createElement("div",{className:f("description")},i),l),d.default.createElement("div",{className:f("footer")},t?d.default.createElement("div",{className:f("button-container")},_&&d.default.createElement("button",{type:"button",className:f("css-toggle","item",{"is-selected":O}),onClick:E,onKeyDown:function(e){return j(e,E)},onBlur:g,onMouseDown:v,tabIndex:0,"data-focus-styles-enabled":!0},d.default.createElement(u.default,{className:f("chevron")}),d.default.createElement("span",null,"CSS"),d.default.createElement(p.default,{className:f("chevron")})),d.default.createElement("button",{type:"button",className:f("code-toggle","item",{"is-selected":y}),onClick:S,onKeyDown:function(e){return j(e,S)},onBlur:g,onMouseDown:v,tabIndex:0,"data-focus-styles-enabled":!0},d.default.createElement(u.default,{className:f("chevron")}),d.default.createElement("span",null,"Code"),d.default.createElement(p.default,{className:f("chevron")}))):null,d.default.createElement("div",null,O&&d.default.createElement("div",{className:f("css")},a),y&&d.default.createElement("div",{className:f("code")},t))))};h.propTypes=y,h.defaultProps={isExpanded:!1};var b=h;l.Z=b},63653:function(e,l,t){t.r(l),t.d(l,{default:function(){return V}});var a=t(67294),n=t(81254),r=t(57739),d=t(96274),i=["components"];function m(){return m=Object.assign?Object.assign.bind():function(e){for(var l=1;l<arguments.length;l++){var t=arguments[l];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},m.apply(this,arguments)}function o(e,l){if(null==e)return{};var t,a,n=function(e,l){if(null==e)return{};var t,a,n={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],l.indexOf(t)>=0||(n[t]=e[t]);return n}(e,l);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],l.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var u={};function p(e){var l=e.components,t=o(e,i);return(0,n.mdx)("wrapper",m({},u,t,{components:l,mdxType:"MDXLayout"}),(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-jsx"},'import React from \'react\';\nimport MultiSelectField from \'terra-form-select/lib/MultiSelectField\';\nimport classNames from \'classnames/bind\';\nimport styles from \'../FormSelectDocCommon.module.scss\';\n\nconst cx = classNames.bind(styles);\n\nconst MultiSelectFieldExample = () => (\n  <MultiSelectField label="T-shirt size" placeholder="Select a size" selectId="tshirt-size-field-2" className={cx(\'form-select\')}>\n    <MultiSelectField.Option value="xSmall" display="Extra Small" />\n    <MultiSelectField.Option value="small" display="Small" />\n    <MultiSelectField.Option value="medium" display="Medium" />\n    <MultiSelectField.Option value="large" display="Large" />\n    <MultiSelectField.Option value="xLarge" display="Extra Large" />\n  </MultiSelectField>\n);\n\nexport default MultiSelectFieldExample;\n\n')))}p.isMDXComponent=!0;var s=t(49271),c=t(15305),x=function(e){var l=e.title,t=e.description,n=e.isExpanded;return a.createElement(s.Z,{title:l||"Multi Select Field",description:t,example:a.createElement(d.Z,null),exampleCssSrc:a.createElement(c.Z,null),exampleSrc:a.createElement(p,null),isExpanded:n})},f=t(74854),y=["components"];function g(){return g=Object.assign?Object.assign.bind():function(e){for(var l=1;l<arguments.length;l++){var t=arguments[l];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},g.apply(this,arguments)}function v(e,l){if(null==e)return{};var t,a,n=function(e,l){if(null==e)return{};var t,a,n={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],l.indexOf(t)>=0||(n[t]=e[t]);return n}(e,l);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],l.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var h={};function b(e){var l=e.components,t=v(e,y);return(0,n.mdx)("wrapper",g({},h,t,{components:l,mdxType:"MDXLayout"}),(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-jsx"},'import React from \'react\';\nimport MultiSelectField from \'terra-form-select/lib/MultiSelectField\';\nimport classNames from \'classnames/bind\';\nimport styles from \'../FormSelectDocCommon.module.scss\';\n\nconst cx = classNames.bind(styles);\n\nconst MultiSelectFieldExample = () => (\n  <MultiSelectField label="T-shirt size" placeholder="Select a size" selectId="tshirt-size-field-3" required className={cx(\'form-select\')}>\n    <MultiSelectField.Option value="xSmall" display="Extra Small" />\n    <MultiSelectField.Option value="small" display="Small" />\n    <MultiSelectField.Option value="medium" display="Medium" />\n    <MultiSelectField.Option value="large" display="Large" />\n    <MultiSelectField.Option value="xLarge" display="Extra Large" />\n  </MultiSelectField>\n);\n\nexport default MultiSelectFieldExample;\n\n')))}b.isMDXComponent=!0;var T=function(e){var l=e.title,t=e.description,n=e.isExpanded;return a.createElement(s.Z,{title:l||"Required Multi Select Field",description:t,example:a.createElement(f.Z,null),exampleCssSrc:a.createElement(c.Z,null),exampleSrc:a.createElement(b,null),isExpanded:n})},O=t(904),N=["components"];function C(){return C=Object.assign?Object.assign.bind():function(e){for(var l=1;l<arguments.length;l++){var t=arguments[l];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},C.apply(this,arguments)}function _(e,l){if(null==e)return{};var t,a,n=function(e,l){if(null==e)return{};var t,a,n={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],l.indexOf(t)>=0||(n[t]=e[t]);return n}(e,l);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],l.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var E={};function S(e){var l=e.components,t=_(e,N);return(0,n.mdx)("wrapper",C({},E,t,{components:l,mdxType:"MDXLayout"}),(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-jsx"},'import React from \'react\';\nimport MultiSelectField from \'terra-form-select/lib/MultiSelectField\';\nimport classNames from \'classnames/bind\';\nimport styles from \'../FormSelectDocCommon.module.scss\';\n\nconst cx = classNames.bind(styles);\n\nconst MultiSelectFieldExample = () => (\n  <MultiSelectField required isIncomplete label="T-shirt size" placeholder="Select a size" selectId="tshirt-size-field-1" className={cx(\'form-select\')}>\n    <MultiSelectField.Option value="xSmall" display="Extra Small" />\n    <MultiSelectField.Option value="small" display="Small" />\n    <MultiSelectField.Option value="medium" display="Medium" />\n    <MultiSelectField.Option value="large" display="Large" />\n    <MultiSelectField.Option value="xLarge" display="Extra Large" />\n  </MultiSelectField>\n);\n\nexport default MultiSelectFieldExample;\n\n')))}S.isMDXComponent=!0;var j=function(e){var l=e.title,t=e.description,n=e.isExpanded;return a.createElement(s.Z,{title:l||"Incomplete Multi Select Field",description:t,example:a.createElement(O.Z,null),exampleCssSrc:a.createElement(c.Z,null),exampleSrc:a.createElement(S,null),isExpanded:n})},R=t(78530),w=["components"];function D(){return D=Object.assign?Object.assign.bind():function(e){for(var l=1;l<arguments.length;l++){var t=arguments[l];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},D.apply(this,arguments)}function M(e,l){if(null==e)return{};var t,a,n=function(e,l){if(null==e)return{};var t,a,n={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],l.indexOf(t)>=0||(n[t]=e[t]);return n}(e,l);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],l.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var q={},P="wrapper";function W(e){var l=e.components,t=M(e,w);return(0,n.mdx)(P,D({},q,t,{components:l,mdxType:"MDXLayout"}),(0,n.mdx)(R.ZP,{mdxType:"PropsTable"},(0,n.mdx)(R.X2,{key:"ROW1",mdxType:"Row"},(0,n.mdx)(R.O,{mdxType:"PropNameCell"},"children"),(0,n.mdx)(R.Di,{mdxType:"TypeCell"},(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-javascript"},"node\n"))),(0,n.mdx)(R.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,n.mdx)(R.mW,{mdxType:"DefaultValueCell"},(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-javascript"},"undefined\n"))),(0,n.mdx)(R.Ex,{mdxType:"DescriptionCell"},(0,n.mdx)("p",null,"The select options."))),(0,n.mdx)(R.X2,{key:"ROW2",mdxType:"Row"},(0,n.mdx)(R.O,{mdxType:"PropNameCell"},"label"),(0,n.mdx)(R.Di,{mdxType:"TypeCell"},(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-javascript"},"string\n"))),(0,n.mdx)(R.dS,{isRequired:!0,mdxType:"RequiredCell"}),(0,n.mdx)(R.mW,{mdxType:"DefaultValueCell"},(0,n.mdx)("p",null,"none")),(0,n.mdx)(R.Ex,{mdxType:"DescriptionCell"},(0,n.mdx)("p",null,"The field label."))),(0,n.mdx)(R.X2,{key:"ROW3",mdxType:"Row"},(0,n.mdx)(R.O,{mdxType:"PropNameCell"},"defaultValue"),(0,n.mdx)(R.Di,{mdxType:"TypeCell"},(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-javascript"},"unionOf: [\n  type: 'string',\n  type: 'number',\n  type: 'array',\n],\n"))),(0,n.mdx)(R.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,n.mdx)(R.mW,{mdxType:"DefaultValueCell"},(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-javascript"},"undefined\n"))),(0,n.mdx)(R.Ex,{mdxType:"DescriptionCell"},(0,n.mdx)("p",null,"The default value of the select. Can be a string, number, or array of strings/numbers."))),(0,n.mdx)(R.X2,{key:"ROW4",mdxType:"Row"},(0,n.mdx)(R.O,{mdxType:"PropNameCell"},"disabled"),(0,n.mdx)(R.Di,{mdxType:"TypeCell"},(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-javascript"},"bool\n"))),(0,n.mdx)(R.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,n.mdx)(R.mW,{mdxType:"DefaultValueCell"},(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-javascript"},"false\n"))),(0,n.mdx)(R.Ex,{mdxType:"DescriptionCell"},(0,n.mdx)("p",null,"Whether the input is disabled."))),(0,n.mdx)(R.X2,{key:"ROW5",mdxType:"Row"},(0,n.mdx)(R.O,{mdxType:"PropNameCell"},"error"),(0,n.mdx)(R.Di,{mdxType:"TypeCell"},(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-javascript"},"node\n"))),(0,n.mdx)(R.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,n.mdx)(R.mW,{mdxType:"DefaultValueCell"},(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-javascript"},"undefined\n"))),(0,n.mdx)(R.Ex,{mdxType:"DescriptionCell"},(0,n.mdx)("p",null,"Error message displayed when the select is invalid."))),(0,n.mdx)(R.X2,{key:"ROW6",mdxType:"Row"},(0,n.mdx)(R.O,{mdxType:"PropNameCell"},"help"),(0,n.mdx)(R.Di,{mdxType:"TypeCell"},(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-javascript"},"node\n"))),(0,n.mdx)(R.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,n.mdx)(R.mW,{mdxType:"DefaultValueCell"},(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-javascript"},"undefined\n"))),(0,n.mdx)(R.Ex,{mdxType:"DescriptionCell"},(0,n.mdx)("p",null,"Help message to display with the select."))),(0,n.mdx)(R.X2,{key:"ROW7",mdxType:"Row"},(0,n.mdx)(R.O,{mdxType:"PropNameCell"},"hideRequired"),(0,n.mdx)(R.Di,{mdxType:"TypeCell"},(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-javascript"},"bool\n"))),(0,n.mdx)(R.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,n.mdx)(R.mW,{mdxType:"DefaultValueCell"},(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-javascript"},"false\n"))),(0,n.mdx)(R.Ex,{mdxType:"DescriptionCell"},(0,n.mdx)("p",null,"Whether to hide the required indicator on the label."))),(0,n.mdx)(R.X2,{key:"ROW8",mdxType:"Row"},(0,n.mdx)(R.O,{mdxType:"PropNameCell"},"isIncomplete"),(0,n.mdx)(R.Di,{mdxType:"TypeCell"},(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-javascript"},"bool\n"))),(0,n.mdx)(R.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,n.mdx)(R.mW,{mdxType:"DefaultValueCell"},(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-javascript"},"false\n"))),(0,n.mdx)(R.Ex,{mdxType:"DescriptionCell"},(0,n.mdx)("p",null,"Whether the field displays as Incomplete. Use when no value has been provided. ",(0,n.mdx)("em",{parentName:"p"},"(usage note: ",(0,n.mdx)("inlineCode",{parentName:"em"},"required")," must also be set)"),"."))),(0,n.mdx)(R.X2,{key:"ROW9",mdxType:"Row"},(0,n.mdx)(R.O,{mdxType:"PropNameCell"},"isInline"),(0,n.mdx)(R.Di,{mdxType:"TypeCell"},(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-javascript"},"bool\n"))),(0,n.mdx)(R.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,n.mdx)(R.mW,{mdxType:"DefaultValueCell"},(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-javascript"},"false\n"))),(0,n.mdx)(R.Ex,{mdxType:"DescriptionCell"},(0,n.mdx)("p",null,"Whether the field is displayed inline. Displays block by default."))),(0,n.mdx)(R.X2,{key:"ROW10",mdxType:"Row"},(0,n.mdx)(R.O,{mdxType:"PropNameCell"},"isInvalid"),(0,n.mdx)(R.Di,{mdxType:"TypeCell"},(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-javascript"},"bool\n"))),(0,n.mdx)(R.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,n.mdx)(R.mW,{mdxType:"DefaultValueCell"},(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-javascript"},"false\n"))),(0,n.mdx)(R.Ex,{mdxType:"DescriptionCell"},(0,n.mdx)("p",null,"Whether the field displays as Invalid. Use when value does not meet validation pattern."))),(0,n.mdx)(R.X2,{key:"ROW11",mdxType:"Row"},(0,n.mdx)(R.O,{mdxType:"PropNameCell"},"isLabelHidden"),(0,n.mdx)(R.Di,{mdxType:"TypeCell"},(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-javascript"},"bool\n"))),(0,n.mdx)(R.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,n.mdx)(R.mW,{mdxType:"DefaultValueCell"},(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-javascript"},"false\n"))),(0,n.mdx)(R.Ex,{mdxType:"DescriptionCell"},(0,n.mdx)("p",null,"Whether the label is hidden. Allows hiding the label while meeting accessibility guidelines."))),(0,n.mdx)(R.X2,{key:"ROW12",mdxType:"Row"},(0,n.mdx)(R.O,{mdxType:"PropNameCell"},"isTouchAccessible"),(0,n.mdx)(R.Di,{mdxType:"TypeCell"},(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-javascript"},"bool\n"))),(0,n.mdx)(R.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,n.mdx)(R.mW,{mdxType:"DefaultValueCell"},(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-javascript"},"false\n"))),(0,n.mdx)(R.Ex,{mdxType:"DescriptionCell"},(0,n.mdx)("p",null,"Ensures touch accessibility by rendering the dropdown inline without a portal."),(0,n.mdx)("p",null,"Note: When enabled the dropdown will clip if rendered within a container that has an overflow: hidden ancestor.\nThe dropdown may also appear beneath content if rendered within a container that has an overflow: auto ancestor."))),(0,n.mdx)(R.X2,{key:"ROW13",mdxType:"Row"},(0,n.mdx)(R.O,{mdxType:"PropNameCell"},"labelAttrs"),(0,n.mdx)(R.Di,{mdxType:"TypeCell"},(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-javascript"},"object\n"))),(0,n.mdx)(R.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,n.mdx)(R.mW,{mdxType:"DefaultValueCell"},(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-javascript"},"{}\n"))),(0,n.mdx)(R.Ex,{mdxType:"DescriptionCell"},(0,n.mdx)("p",null,"Additional attributes to spread onto the label."))),(0,n.mdx)(R.X2,{key:"ROW14",mdxType:"Row"},(0,n.mdx)(R.O,{mdxType:"PropNameCell"},"maxHeight"),(0,n.mdx)(R.Di,{mdxType:"TypeCell"},(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-javascript"},"number\n"))),(0,n.mdx)(R.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,n.mdx)(R.mW,{mdxType:"DefaultValueCell"},(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-javascript"},"undefined\n"))),(0,n.mdx)(R.Ex,{mdxType:"DescriptionCell"},(0,n.mdx)("p",null,"The max height of the dropdown."))),(0,n.mdx)(R.X2,{key:"ROW15",mdxType:"Row"},(0,n.mdx)(R.O,{mdxType:"PropNameCell"},"maxSelectionCount"),(0,n.mdx)(R.Di,{mdxType:"TypeCell"},(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-javascript"},"number\n"))),(0,n.mdx)(R.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,n.mdx)(R.mW,{mdxType:"DefaultValueCell"},(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-javascript"},"undefined\n"))),(0,n.mdx)(R.Ex,{mdxType:"DescriptionCell"},(0,n.mdx)("p",null,"The maximum number of options that can be selected. A value less than 2 will be ignored."))),(0,n.mdx)(R.X2,{key:"ROW16",mdxType:"Row"},(0,n.mdx)(R.O,{mdxType:"PropNameCell"},"maxWidth"),(0,n.mdx)(R.Di,{mdxType:"TypeCell"},(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-javascript"},"string\n"))),(0,n.mdx)(R.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,n.mdx)(R.mW,{mdxType:"DefaultValueCell"},(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-javascript"},"undefined\n"))),(0,n.mdx)(R.Ex,{mdxType:"DescriptionCell"},(0,n.mdx)("p",null,"Set the max-width of a field using ",(0,n.mdx)("inlineCode",{parentName:"p"},"length")," or ",(0,n.mdx)("inlineCode",{parentName:"p"},"%"),".  Best practice recommendation to never exceed\na rendered value of 1020px. ",(0,n.mdx)("em",{parentName:"p"},"(Note: Providing custom inline styles will take precedence.)")))),(0,n.mdx)(R.X2,{key:"ROW17",mdxType:"Row"},(0,n.mdx)(R.O,{mdxType:"PropNameCell"},"onChange"),(0,n.mdx)(R.Di,{mdxType:"TypeCell"},(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-javascript"},"func\n"))),(0,n.mdx)(R.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,n.mdx)(R.mW,{mdxType:"DefaultValueCell"},(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-javascript"},"undefined\n"))),(0,n.mdx)(R.Ex,{mdxType:"DescriptionCell"},(0,n.mdx)("p",null,"Callback function triggered when the select value changes. function(value)"))),(0,n.mdx)(R.X2,{key:"ROW18",mdxType:"Row"},(0,n.mdx)(R.O,{mdxType:"PropNameCell"},"placeholder"),(0,n.mdx)(R.Di,{mdxType:"TypeCell"},(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-javascript"},"string\n"))),(0,n.mdx)(R.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,n.mdx)(R.mW,{mdxType:"DefaultValueCell"},(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-javascript"},"undefined\n"))),(0,n.mdx)(R.Ex,{mdxType:"DescriptionCell"},(0,n.mdx)("p",null,"Placeholder text."))),(0,n.mdx)(R.X2,{key:"ROW19",mdxType:"Row"},(0,n.mdx)(R.O,{mdxType:"PropNameCell"},"required"),(0,n.mdx)(R.Di,{mdxType:"TypeCell"},(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-javascript"},"bool\n"))),(0,n.mdx)(R.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,n.mdx)(R.mW,{mdxType:"DefaultValueCell"},(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-javascript"},"false\n"))),(0,n.mdx)(R.Ex,{mdxType:"DescriptionCell"},(0,n.mdx)("p",null,"Whether the field is required."))),(0,n.mdx)(R.X2,{key:"ROW20",mdxType:"Row"},(0,n.mdx)(R.O,{mdxType:"PropNameCell"},"selectAttrs"),(0,n.mdx)(R.Di,{mdxType:"TypeCell"},(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-javascript"},"object\n"))),(0,n.mdx)(R.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,n.mdx)(R.mW,{mdxType:"DefaultValueCell"},(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-javascript"},"{}\n"))),(0,n.mdx)(R.Ex,{mdxType:"DescriptionCell"},(0,n.mdx)("p",null,"Additional attributes to spread onto the select."))),(0,n.mdx)(R.X2,{key:"ROW21",mdxType:"Row"},(0,n.mdx)(R.O,{mdxType:"PropNameCell"},"selectId"),(0,n.mdx)(R.Di,{mdxType:"TypeCell"},(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-javascript"},"string\n"))),(0,n.mdx)(R.dS,{isRequired:!0,mdxType:"RequiredCell"}),(0,n.mdx)(R.mW,{mdxType:"DefaultValueCell"},(0,n.mdx)("p",null,"none")),(0,n.mdx)(R.Ex,{mdxType:"DescriptionCell"},(0,n.mdx)("p",null,"The Select identifier. Links the htmlFor of the field to the select identifier."))),(0,n.mdx)(R.X2,{key:"ROW22",mdxType:"Row"},(0,n.mdx)(R.O,{mdxType:"PropNameCell"},"showOptional"),(0,n.mdx)(R.Di,{mdxType:"TypeCell"},(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-javascript"},"bool\n"))),(0,n.mdx)(R.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,n.mdx)(R.mW,{mdxType:"DefaultValueCell"},(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-javascript"},"false\n"))),(0,n.mdx)(R.Ex,{mdxType:"DescriptionCell"},(0,n.mdx)("p",null,"Whether to append the 'optional' label to a non-required field label."))),(0,n.mdx)(R.X2,{key:"ROW23",mdxType:"Row"},(0,n.mdx)(R.O,{mdxType:"PropNameCell"},"value"),(0,n.mdx)(R.Di,{mdxType:"TypeCell"},(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-javascript"},"unionOf: [\n  type: 'string',\n  type: 'number',\n  type: 'array',\n],\n"))),(0,n.mdx)(R.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,n.mdx)(R.mW,{mdxType:"DefaultValueCell"},(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-javascript"},"undefined\n"))),(0,n.mdx)(R.Ex,{mdxType:"DescriptionCell"},(0,n.mdx)("p",null,"The value of the select. Can be a string, number, or array of strings/numbers.")))))}W.isMDXComponent=!0;var F=["components"];function k(){return k=Object.assign?Object.assign.bind():function(e){for(var l=1;l<arguments.length;l++){var t=arguments[l];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},k.apply(this,arguments)}function I(e,l){if(null==e)return{};var t,a,n=function(e,l){if(null==e)return{};var t,a,n={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],l.indexOf(t)>=0||(n[t]=e[t]);return n}(e,l);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],l.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var L={},X="wrapper";function V(e){var l=e.components,t=I(e,F);return(0,n.mdx)(X,k({},L,t,{components:l,mdxType:"MDXLayout"}),(0,n.mdx)(r.C,{mdxType:"Badge"}),(0,n.mdx)("h1",{id:"terra-form-multiselect-field"},"Terra Form MultiSelect Field"),(0,n.mdx)("p",null,"A convenience wrapper assembling a ",(0,n.mdx)("a",{parentName:"p",href:"https://github.com/cerner/terra-core/tree/main/packages/terra-form-select/src/MultiSelect.jsx"},"terra-form-select MultiSelect")," within a ",(0,n.mdx)("a",{parentName:"p",href:"https://github.com/cerner/terra-core/tree/main/packages/terra-form-field"},"terra-form-field"),"."),(0,n.mdx)("h2",{id:"getting-started"},"Getting Started"),(0,n.mdx)("ul",null,(0,n.mdx)("li",{parentName:"ul"},"Install with ",(0,n.mdx)("a",{parentName:"li",href:"https://www.npmjs.com/"},"npmjs"),":",(0,n.mdx)("ul",{parentName:"li"},(0,n.mdx)("li",{parentName:"ul"},(0,n.mdx)("inlineCode",{parentName:"li"},"npm install terra-form-select"))))),(0,n.mdx)("h2",{id:"usage"},"Usage"),(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-jsx"},"import MultiSelectField from 'terra-form-select/lib/MultiSelectField';\n")),(0,n.mdx)("h2",{id:"component-features"},"Component Features"),(0,n.mdx)("ul",null,(0,n.mdx)("li",{parentName:"ul"},(0,n.mdx)("a",{parentName:"li",href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#cross-browser-support"},"Cross-Browser Support")),(0,n.mdx)("li",{parentName:"ul"},(0,n.mdx)("a",{parentName:"li",href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#responsive-support"},"Responsive Support")),(0,n.mdx)("li",{parentName:"ul"},(0,n.mdx)("a",{parentName:"li",href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#mobile-support"},"Mobile Support")),(0,n.mdx)("li",{parentName:"ul"},(0,n.mdx)("a",{parentName:"li",href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#internationalization-i18n"},"Internationalization Support")),(0,n.mdx)("li",{parentName:"ul"},(0,n.mdx)("a",{parentName:"li",href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#internationalization-i18n"},"Localization Support")),(0,n.mdx)("li",{parentName:"ul"},(0,n.mdx)("a",{parentName:"li",href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#ltr--rtl"},"LTR/RTL Support"))),(0,n.mdx)("h2",{id:"examples"},"Examples"),(0,n.mdx)(x,{title:"MultiSelect Field Example",mdxType:"MultiSelectFieldExample"}),(0,n.mdx)(T,{title:"Required MultiSelect Field Example",mdxType:"RequiredMultiSelectFieldExample"}),(0,n.mdx)(j,{title:"Incomplete MultiSelect Field Example",description:"Applies theme-specific styling for incomplete. ***Note: Only use incomplete if given specific guidance, reserved for specific applications when no value has been provided. Not for general use.***",mdxType:"IncompleteMultiSelectFieldExample"}),(0,n.mdx)("h2",{id:"multi-select-field-props"},"Multi Select Field Props"),(0,n.mdx)(W,{mdxType:"MultiSelectFieldPropsTable"}))}V.isMDXComponent=!0},15305:function(e,l,t){t.d(l,{Z:function(){return o}});t(67294);var a=t(81254),n=["components"];function r(){return r=Object.assign?Object.assign.bind():function(e){for(var l=1;l<arguments.length;l++){var t=arguments[l];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},r.apply(this,arguments)}function d(e,l){if(null==e)return{};var t,a,n=function(e,l){if(null==e)return{};var t,a,n={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],l.indexOf(t)>=0||(n[t]=e[t]);return n}(e,l);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],l.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var i={},m="wrapper";function o(e){var l=e.components,t=d(e,n);return(0,a.mdx)(m,r({},i,t,{components:l,mdxType:"MDXLayout"}),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-scss"},":local {\n  .form-select {\n    max-width: 300px;\n  }\n}\n\n")))}o.isMDXComponent=!0},57739:function(e,l,t){t.d(l,{C:function(){return r}});var a=t(67294),n=t(22863),r=function(e){var l=e.url;return a.createElement(n.Z,{src:"https://github.com/cerner/terra-core/tree/main/packages/terra-form-select",name:"terra-form-select",version:"6.43.0",url:l})}},48824:function(e,l,t){t.r(l),l.default={"form-select":"FormSelectDocCommon-module__form-select___Tm1QE"}},53560:function(e,l,t){t.r(l),l.default={"orion-fusion-theme":"ExampleTemplate-module__orion-fusion-theme___GzA23",template:"ExampleTemplate-module__template___a4uPk",header:"ExampleTemplate-module__header___iFXV3",content:"ExampleTemplate-module__content___48m4Q",description:"ExampleTemplate-module__description___NwBJo",footer:"ExampleTemplate-module__footer___GpSoG","button-container":"ExampleTemplate-module__button-container___rAD11",css:"ExampleTemplate-module__css___+jtk1",code:"ExampleTemplate-module__code___7rC6C","css-toggle":"ExampleTemplate-module__css-toggle___chHK7","code-toggle":"ExampleTemplate-module__code-toggle___TGlE-","is-selected":"ExampleTemplate-module__is-selected___0BYwS",item:"ExampleTemplate-module__item___8FTQq",chevron:"ExampleTemplate-module__chevron___VbY7N",title:"ExampleTemplate-module__title___r+nbJ","dynamic-content":"ExampleTemplate-module__dynamic-content___k+1H7"}},24237:function(e,l,t){t.r(l),l.default={"orion-fusion-theme":"_MaxSelection-module__orion-fusion-theme___9hy2S","max-selection":"_MaxSelection-module__max-selection___qYj-f"}},95125:function(e,l,t){t.r(l),l.default={"orion-fusion-theme":"_NoResults-module__orion-fusion-theme___6lA58","no-results":"_NoResults-module__no-results___k4m2B"}},72470:function(e,l,t){t.r(l),l.default={"orion-fusion-theme":"_Tag-module__orion-fusion-theme___qlVM1",tag:"_Tag-module__tag___969yD",display:"_Tag-module__display___HBS3z",deselect:"_Tag-module__deselect___10G1R",icon:"_Tag-module__icon___cl1zJ"}},775:function(e,l,t){Object.defineProperty(l,"__esModule",{value:!0}),l.default=void 0;var a=p(t(67294)),n=p(t(45697)),r=t(25387),d=p(t(47717)),i=p(t(96788)),m=p(t(87786)),o=p(t(88413)),u=["children","defaultValue","disabled","error","help","hideRequired","intl","isIncomplete","isInline","isInvalid","isLabelHidden","isTouchAccessible","label","labelAttrs","maxHeight","maxSelectionCount","maxWidth","onChange","placeholder","required","selectAttrs","selectId","showOptional","value"];function p(e){return e&&e.__esModule?e:{default:e}}function s(){return s=Object.assign?Object.assign.bind():function(e){for(var l=1;l<arguments.length;l++){var t=arguments[l];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},s.apply(this,arguments)}function c(e,l){if(null==e)return{};var t,a,n=function(e,l){if(null==e)return{};var t,a,n={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],l.indexOf(t)>=0||(n[t]=e[t]);return n}(e,l);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],l.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var x={children:n.default.node,label:n.default.string.isRequired,defaultValue:n.default.oneOfType([n.default.string,n.default.number,n.default.array]),disabled:n.default.bool,error:n.default.node,help:n.default.node,hideRequired:n.default.bool,intl:n.default.shape({formatMessage:n.default.func}).isRequired,isIncomplete:n.default.bool,isInline:n.default.bool,isInvalid:n.default.bool,isLabelHidden:n.default.bool,isTouchAccessible:n.default.bool,labelAttrs:n.default.object,maxHeight:n.default.number,maxSelectionCount:n.default.number,maxWidth:n.default.string,onChange:n.default.func,placeholder:n.default.string,required:n.default.bool,selectAttrs:n.default.object,selectId:n.default.string.isRequired,showOptional:n.default.bool,value:n.default.oneOfType([n.default.string,n.default.number,n.default.array])},f={children:void 0,defaultValue:void 0,disabled:!1,error:void 0,help:void 0,hideRequired:!1,isIncomplete:!1,isInline:!1,isInvalid:!1,isLabelHidden:!1,isTouchAccessible:!1,labelAttrs:{},maxHeight:void 0,maxSelectionCount:void 0,maxWidth:void 0,onChange:void 0,placeholder:void 0,required:!1,selectAttrs:{},showOptional:!1,value:void 0},y=function(e){var l,t=e.children,n=e.defaultValue,r=e.disabled,m=e.error,o=e.help,p=e.hideRequired,x=e.intl,f=e.isIncomplete,y=e.isInline,g=e.isInvalid,v=e.isLabelHidden,h=e.isTouchAccessible,b=e.label,T=e.labelAttrs,O=e.maxHeight,N=e.maxSelectionCount,C=e.maxWidth,_=e.onChange,E=e.placeholder,S=e.required,j=e.selectAttrs,R=e.selectId,w=e.showOptional,D=e.value,M=c(e,u),q=o;if(void 0!==N&&N>=2){var P=x.formatMessage({id:"Terra.form.select.maxSelectionHelp"},{text:N});q=o?a.default.createElement("span",null,P," ",o):P}return o&&m&&g?l="".concat(R,"-error ").concat(R,"-help"):(o&&(l="".concat(R,"-help")),m&&g&&(l="".concat(R,"-error"))),a.default.createElement(d.default,s({},M,{label:b,labelAttrs:T,error:m,help:q,hideRequired:p,required:S,showOptional:w,isInvalid:g,isInline:y,isLabelHidden:v,htmlFor:R,maxWidth:C}),a.default.createElement(i.default,s({},j,{ariaLabel:b,"aria-describedby":l,disabled:j.disabled||r,inputId:R,isIncomplete:f,isInvalid:g,isTouchAccessible:h,defaultValue:n,maxHeight:O||j.maxHeight,maxSelectionCount:void 0!==N&&N<2?void 0:N,onChange:_,placeholder:E,required:S,value:D}),t))};y.propTypes=x,y.defaultProps=f,y.Option=o.default,y.OptGroup=m.default;var g=(0,r.injectIntl)(y);l.default=g},9780:function(e,l,t){Object.defineProperty(l,"__esModule",{value:!0}),l.default=void 0;var a=o(t(67294)),n=o(t(45697)),r=t(25387),d=o(t(47166)),i=o(t(50026)),m=o(t(24237));function o(e){return e&&e.__esModule?e:{default:e}}var u=d.default.bind(m.default),p={value:n.default.oneOfType([n.default.number,n.default.string])},s=function(e){var l=e.value,t=a.default.useContext(i.default);return a.default.createElement("div",{className:u("max-selection",t.className)},a.default.createElement(r.FormattedMessage,{id:"Terra.form.select.maxSelectionOption",values:{text:l}}))};s.propTypes=p;var c=s;l.default=c},49978:function(e,l,t){Object.defineProperty(l,"__esModule",{value:!0}),l.default=void 0;var a=o(t(67294)),n=o(t(45697)),r=o(t(47166)),d=o(t(50026)),i=t(25387),m=o(t(95125));function o(e){return e&&e.__esModule?e:{default:e}}var u=r.default.bind(m.default),p={noResultContent:n.default.node,value:n.default.oneOfType([n.default.number,n.default.string])},s=function(e){var l=e.noResultContent,t=e.value,n=a.default.useContext(d.default);return a.default.createElement("div",{role:"option",className:u("no-results",n.className),"aria-selected":"false"},l||a.default.createElement(i.FormattedMessage,{id:"Terra.form.select.noResults",values:{text:t}}))};s.propTypes=p;var c=s;l.default=c},17959:function(e,l,t){Object.defineProperty(l,"__esModule",{value:!0}),l.default=void 0;var a=m(t(67294)),n=m(t(45697)),r=m(t(47166)),d=m(t(50026)),i=m(t(72470));function m(e){return e&&e.__esModule?e:{default:e}}var o=r.default.bind(i.default),u={children:n.default.node.isRequired,onDeselect:n.default.func.isRequired,value:n.default.oneOfType([n.default.string,n.default.number]).isRequired},p=function(e){var l=e.children,t=e.onDeselect,n=e.value,r=a.default.useContext(d.default);return a.default.createElement("li",{className:o("tag",r.className)},a.default.createElement("span",{className:o("display")},l),a.default.createElement("span",{className:o("deselect"),onClick:function(){t(n)},role:"presentation"},a.default.createElement("span",{className:o("icon")})))};p.propTypes=u;var s=p;l.default=s},33864:function(e,l,t){Object.defineProperty(l,"__esModule",{value:!0}),l.default=void 0;var a=r(t(67294)),n=r(t(99139));function r(e){return e&&e.__esModule?e:{default:e}}function d(){return d=Object.assign?Object.assign.bind():function(e){for(var l=1;l<arguments.length;l++){var t=arguments[l];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},d.apply(this,arguments)}var i=function(e){var l=d({},e);return a.default.createElement(n.default,l,a.default.createElement("path",{d:"M10.3 24L33.8 0l3.9 3.8L18 24l19.7 20.2-3.9 3.8z"}))};i.displayName="IconChevronLeft",i.defaultProps={className:"",viewBox:"0 0 48 48",xmlns:"http://www.w3.org/2000/svg","data-name":"Layer 1",isBidi:!0};var m=i;l.default=m}}]);