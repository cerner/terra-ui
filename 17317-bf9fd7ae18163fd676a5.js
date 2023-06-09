"use strict";(self.webpackChunkterra_ui=self.webpackChunkterra_ui||[]).push([[17317],{95032:function(e,l,a){l.Z=void 0;var t=m(a(67294)),r=m(a(8556)),n=m(a(47166)),d=m(a(48824));function m(e){return e&&e.__esModule?e:{default:e}}var o=n.default.bind(d.default),i=function(){return t.default.createElement(r.default,{label:"T-shirt size",placeholder:"Select a size",selectId:"tshirt-size-field-1",className:o("form-select")},t.default.createElement(r.default.Option,{value:"xSmall",display:"Extra Small"}),t.default.createElement(r.default.Option,{value:"small",display:"Small"}),t.default.createElement(r.default.Option,{value:"medium",display:"Medium"}),t.default.createElement(r.default.Option,{value:"large",display:"Large"}),t.default.createElement(r.default.Option,{value:"xLarge",display:"Extra Large"}))};l.Z=i},69111:function(e,l,a){l.Z=void 0;var t=m(a(67294)),r=m(a(8556)),n=m(a(47166)),d=m(a(48824));function m(e){return e&&e.__esModule?e:{default:e}}var o=n.default.bind(d.default),i=function(){return t.default.createElement(r.default,{required:!0,isIncomplete:!0,label:"T-shirt size",placeholder:"Select a size",selectId:"tshirt-size-field-2",className:o("form-select")},t.default.createElement(r.default.Option,{value:"xSmall",display:"Extra Small"}),t.default.createElement(r.default.Option,{value:"small",display:"Small"}),t.default.createElement(r.default.Option,{value:"medium",display:"Medium"}),t.default.createElement(r.default.Option,{value:"large",display:"Large"}),t.default.createElement(r.default.Option,{value:"xLarge",display:"Extra Large"}))};l.Z=i},85727:function(e,l,a){l.Z=void 0;var t=m(a(67294)),r=m(a(8556)),n=m(a(47166)),d=m(a(48824));function m(e){return e&&e.__esModule?e:{default:e}}var o=n.default.bind(d.default),i=function(){return t.default.createElement(r.default,{label:"T-shirt size",placeholder:"Select a size",selectId:"tshirt-size-field-3",required:!0,className:o("form-select")},t.default.createElement(r.default.Option,{value:"xSmall",display:"Extra Small"}),t.default.createElement(r.default.Option,{value:"small",display:"Small"}),t.default.createElement(r.default.Option,{value:"medium",display:"Medium"}),t.default.createElement(r.default.Option,{value:"large",display:"Large"}),t.default.createElement(r.default.Option,{value:"xLarge",display:"Extra Large"}))};l.Z=i},49271:function(e,l,a){var t=a(64836),r=a(18698);l.Z=void 0;var n=t(a(27424)),d=function(e,l){if(!l&&e&&e.__esModule)return e;if(null===e||"object"!==r(e)&&"function"!=typeof e)return{default:e};var a=x(l);if(a&&a.has(e))return a.get(e);var t={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var d in e)if("default"!==d&&Object.prototype.hasOwnProperty.call(e,d)){var m=n?Object.getOwnPropertyDescriptor(e,d):null;m&&(m.get||m.set)?Object.defineProperty(t,d,m):t[d]=e[d]}t.default=e,a&&a.set(e,t);return t}(a(67294)),m=t(a(45697)),o=t(a(47166)),i=a(21538),p=t(a(33864)),s=t(a(23399)),u=a(51051),c=t(a(53560));function x(e){if("function"!=typeof WeakMap)return null;var l=new WeakMap,a=new WeakMap;return(x=function(e){return e?a:l})(e)}var f=o.default.bind(c.default),y={example:m.default.element,exampleSrc:m.default.element,exampleCssSrc:m.default.element,title:m.default.string,description:m.default.node,isExpanded:m.default.bool},b=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","true")},g=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","false")},v=function(e){var l=e.example,a=e.exampleSrc,t=e.exampleCssSrc,r=e.title,m=e.description,o=e.isExpanded,c=(0,d.useState)(o),x=(0,n.default)(c,2),y=x[0],v=x[1],h=(0,d.useState)(!1),T=(0,n.default)(h,2),C=T[0],O=T[1],N=d.default.useContext(i.ThemeContext),E=void 0!==t,j=function(){O(!C),y&&v(!y)},w=function(){v(!y),C&&O(!C)},R=function(e,l){e.nativeEvent.keyCode!==u.KEY_SPACE&&e.nativeEvent.keyCode!==u.KEY_RETURN||(e.preventDefault(),l())};return d.default.createElement("div",{className:f("template",N.className)},d.default.createElement("div",{className:f("header")},r&&d.default.createElement("h2",{className:f("title")},r)),d.default.createElement("div",{className:f("content")},m&&d.default.createElement("div",{className:f("description")},m),l),d.default.createElement("div",{className:f("footer")},a?d.default.createElement("div",{className:f("button-container")},E&&d.default.createElement("button",{type:"button",className:f("css-toggle","item",{"is-selected":C}),onClick:j,onKeyDown:function(e){return R(e,j)},onBlur:b,onMouseDown:g,tabIndex:0,"data-focus-styles-enabled":!0},d.default.createElement(p.default,{className:f("chevron")}),d.default.createElement("span",null,"CSS"),d.default.createElement(s.default,{className:f("chevron")})),d.default.createElement("button",{type:"button",className:f("code-toggle","item",{"is-selected":y}),onClick:w,onKeyDown:function(e){return R(e,w)},onBlur:b,onMouseDown:g,tabIndex:0,"data-focus-styles-enabled":!0},d.default.createElement(p.default,{className:f("chevron")}),d.default.createElement("span",null,"Code"),d.default.createElement(s.default,{className:f("chevron")}))):null,d.default.createElement("div",null,C&&d.default.createElement("div",{className:f("css")},t),y&&d.default.createElement("div",{className:f("code")},a))))};v.propTypes=y,v.defaultProps={isExpanded:!1};var h=v;l.Z=h},14886:function(e,l,a){a.r(l),a.d(l,{default:function(){return V}});var t=a(67294),r=a(81254),n=a(57739),d=a(95032),m=["components"];function o(){return o=Object.assign?Object.assign.bind():function(e){for(var l=1;l<arguments.length;l++){var a=arguments[l];for(var t in a)Object.prototype.hasOwnProperty.call(a,t)&&(e[t]=a[t])}return e},o.apply(this,arguments)}function i(e,l){if(null==e)return{};var a,t,r=function(e,l){if(null==e)return{};var a,t,r={},n=Object.keys(e);for(t=0;t<n.length;t++)a=n[t],l.indexOf(a)>=0||(r[a]=e[a]);return r}(e,l);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(t=0;t<n.length;t++)a=n[t],l.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p={};function s(e){var l=e.components,a=i(e,m);return(0,r.mdx)("wrapper",o({},p,a,{components:l,mdxType:"MDXLayout"}),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-jsx"},'import React from \'react\';\nimport ComboboxField from \'terra-form-select/lib/ComboboxField\';\nimport classNames from \'classnames/bind\';\nimport styles from \'../FormSelectDocCommon.module.scss\';\n\nconst cx = classNames.bind(styles);\n\nconst ComboboxFieldExample = () => (\n  <ComboboxField label="T-shirt size" placeholder="Select a size" selectId="tshirt-size-field-1" className={cx(\'form-select\')}>\n    <ComboboxField.Option value="xSmall" display="Extra Small" />\n    <ComboboxField.Option value="small" display="Small" />\n    <ComboboxField.Option value="medium" display="Medium" />\n    <ComboboxField.Option value="large" display="Large" />\n    <ComboboxField.Option value="xLarge" display="Extra Large" />\n  </ComboboxField>\n);\n\nexport default ComboboxFieldExample;\n\n')))}s.isMDXComponent=!0;var u=a(49271),c=a(15305),x=function(e){var l=e.title,a=e.description,r=e.isExpanded;return t.createElement(u.Z,{title:l||"Combobox Field",description:a,example:t.createElement(d.Z,null),exampleCssSrc:t.createElement(c.Z,null),exampleSrc:t.createElement(s,null),isExpanded:r})},f=a(85727),y=["components"];function b(){return b=Object.assign?Object.assign.bind():function(e){for(var l=1;l<arguments.length;l++){var a=arguments[l];for(var t in a)Object.prototype.hasOwnProperty.call(a,t)&&(e[t]=a[t])}return e},b.apply(this,arguments)}function g(e,l){if(null==e)return{};var a,t,r=function(e,l){if(null==e)return{};var a,t,r={},n=Object.keys(e);for(t=0;t<n.length;t++)a=n[t],l.indexOf(a)>=0||(r[a]=e[a]);return r}(e,l);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(t=0;t<n.length;t++)a=n[t],l.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var v={};function h(e){var l=e.components,a=g(e,y);return(0,r.mdx)("wrapper",b({},v,a,{components:l,mdxType:"MDXLayout"}),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-jsx"},'import React from \'react\';\nimport ComboboxField from \'terra-form-select/lib/ComboboxField\';\nimport classNames from \'classnames/bind\';\nimport styles from \'../FormSelectDocCommon.module.scss\';\n\nconst cx = classNames.bind(styles);\n\nconst ComboboxFieldExample = () => (\n  <ComboboxField label="T-shirt size" placeholder="Select a size" selectId="tshirt-size-field-3" required className={cx(\'form-select\')}>\n    <ComboboxField.Option value="xSmall" display="Extra Small" />\n    <ComboboxField.Option value="small" display="Small" />\n    <ComboboxField.Option value="medium" display="Medium" />\n    <ComboboxField.Option value="large" display="Large" />\n    <ComboboxField.Option value="xLarge" display="Extra Large" />\n  </ComboboxField>\n);\n\nexport default ComboboxFieldExample;\n\n')))}h.isMDXComponent=!0;var T=function(e){var l=e.title,a=e.description,r=e.isExpanded;return t.createElement(u.Z,{title:l||"Required Combobox Field",description:a,example:t.createElement(f.Z,null),exampleCssSrc:t.createElement(c.Z,null),exampleSrc:t.createElement(h,null),isExpanded:r})},C=a(69111),O=["components"];function N(){return N=Object.assign?Object.assign.bind():function(e){for(var l=1;l<arguments.length;l++){var a=arguments[l];for(var t in a)Object.prototype.hasOwnProperty.call(a,t)&&(e[t]=a[t])}return e},N.apply(this,arguments)}function E(e,l){if(null==e)return{};var a,t,r=function(e,l){if(null==e)return{};var a,t,r={},n=Object.keys(e);for(t=0;t<n.length;t++)a=n[t],l.indexOf(a)>=0||(r[a]=e[a]);return r}(e,l);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(t=0;t<n.length;t++)a=n[t],l.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var j={};function w(e){var l=e.components,a=E(e,O);return(0,r.mdx)("wrapper",N({},j,a,{components:l,mdxType:"MDXLayout"}),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-jsx"},'import React from \'react\';\nimport ComboboxField from \'terra-form-select/lib/ComboboxField\';\nimport classNames from \'classnames/bind\';\nimport styles from \'../FormSelectDocCommon.module.scss\';\n\nconst cx = classNames.bind(styles);\n\nconst ComboboxFieldExample = () => (\n  <ComboboxField required isIncomplete label="T-shirt size" placeholder="Select a size" selectId="tshirt-size-field-2" className={cx(\'form-select\')}>\n    <ComboboxField.Option value="xSmall" display="Extra Small" />\n    <ComboboxField.Option value="small" display="Small" />\n    <ComboboxField.Option value="medium" display="Medium" />\n    <ComboboxField.Option value="large" display="Large" />\n    <ComboboxField.Option value="xLarge" display="Extra Large" />\n  </ComboboxField>\n);\n\nexport default ComboboxFieldExample;\n\n')))}w.isMDXComponent=!0;var R=function(e){var l=e.title,a=e.description,r=e.isExpanded;return t.createElement(u.Z,{title:l||"Incomplete Combobox Field",description:a,example:t.createElement(C.Z,null),exampleCssSrc:t.createElement(c.Z,null),exampleSrc:t.createElement(w,null),isExpanded:r})},_=a(78530),D=["components"];function S(){return S=Object.assign?Object.assign.bind():function(e){for(var l=1;l<arguments.length;l++){var a=arguments[l];for(var t in a)Object.prototype.hasOwnProperty.call(a,t)&&(e[t]=a[t])}return e},S.apply(this,arguments)}function q(e,l){if(null==e)return{};var a,t,r=function(e,l){if(null==e)return{};var a,t,r={},n=Object.keys(e);for(t=0;t<n.length;t++)a=n[t],l.indexOf(a)>=0||(r[a]=e[a]);return r}(e,l);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(t=0;t<n.length;t++)a=n[t],l.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var P={},W="wrapper";function F(e){var l=e.components,a=q(e,D);return(0,r.mdx)(W,S({},P,a,{components:l,mdxType:"MDXLayout"}),(0,r.mdx)(_.ZP,{mdxType:"PropsTable"},(0,r.mdx)(_.X2,{key:"ROW1",mdxType:"Row"},(0,r.mdx)(_.O,{mdxType:"PropNameCell"},"allowClear"),(0,r.mdx)(_.Di,{mdxType:"TypeCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"bool\n"))),(0,r.mdx)(_.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,r.mdx)(_.mW,{mdxType:"DefaultValueCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"false\n"))),(0,r.mdx)(_.Ex,{mdxType:"DescriptionCell"},(0,r.mdx)("p",null,"Whether a clear option is available to clear the selection."))),(0,r.mdx)(_.X2,{key:"ROW2",mdxType:"Row"},(0,r.mdx)(_.O,{mdxType:"PropNameCell"},"children"),(0,r.mdx)(_.Di,{mdxType:"TypeCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"node\n"))),(0,r.mdx)(_.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,r.mdx)(_.mW,{mdxType:"DefaultValueCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"undefined\n"))),(0,r.mdx)(_.Ex,{mdxType:"DescriptionCell"},(0,r.mdx)("p",null,"The select options."))),(0,r.mdx)(_.X2,{key:"ROW3",mdxType:"Row"},(0,r.mdx)(_.O,{mdxType:"PropNameCell"},"label"),(0,r.mdx)(_.Di,{mdxType:"TypeCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"string\n"))),(0,r.mdx)(_.dS,{isRequired:!0,mdxType:"RequiredCell"}),(0,r.mdx)(_.mW,{mdxType:"DefaultValueCell"},(0,r.mdx)("p",null,"none")),(0,r.mdx)(_.Ex,{mdxType:"DescriptionCell"},(0,r.mdx)("p",null,"The field label."))),(0,r.mdx)(_.X2,{key:"ROW4",mdxType:"Row"},(0,r.mdx)(_.O,{mdxType:"PropNameCell"},"defaultValue"),(0,r.mdx)(_.Di,{mdxType:"TypeCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"unionOf: [\n  type: 'string',\n  type: 'number',\n  type: 'array',\n],\n"))),(0,r.mdx)(_.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,r.mdx)(_.mW,{mdxType:"DefaultValueCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"undefined\n"))),(0,r.mdx)(_.Ex,{mdxType:"DescriptionCell"},(0,r.mdx)("p",null,"The default value of the select. Can be a string, number, or array of strings/numbers."))),(0,r.mdx)(_.X2,{key:"ROW5",mdxType:"Row"},(0,r.mdx)(_.O,{mdxType:"PropNameCell"},"disabled"),(0,r.mdx)(_.Di,{mdxType:"TypeCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"bool\n"))),(0,r.mdx)(_.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,r.mdx)(_.mW,{mdxType:"DefaultValueCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"false\n"))),(0,r.mdx)(_.Ex,{mdxType:"DescriptionCell"},(0,r.mdx)("p",null,"Whether the input is disabled."))),(0,r.mdx)(_.X2,{key:"ROW6",mdxType:"Row"},(0,r.mdx)(_.O,{mdxType:"PropNameCell"},"error"),(0,r.mdx)(_.Di,{mdxType:"TypeCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"node\n"))),(0,r.mdx)(_.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,r.mdx)(_.mW,{mdxType:"DefaultValueCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"undefined\n"))),(0,r.mdx)(_.Ex,{mdxType:"DescriptionCell"},(0,r.mdx)("p",null,"Error message displayed when the select is invalid."))),(0,r.mdx)(_.X2,{key:"ROW7",mdxType:"Row"},(0,r.mdx)(_.O,{mdxType:"PropNameCell"},"help"),(0,r.mdx)(_.Di,{mdxType:"TypeCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"node\n"))),(0,r.mdx)(_.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,r.mdx)(_.mW,{mdxType:"DefaultValueCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"undefined\n"))),(0,r.mdx)(_.Ex,{mdxType:"DescriptionCell"},(0,r.mdx)("p",null,"Help message to display with the select."))),(0,r.mdx)(_.X2,{key:"ROW8",mdxType:"Row"},(0,r.mdx)(_.O,{mdxType:"PropNameCell"},"hideRequired"),(0,r.mdx)(_.Di,{mdxType:"TypeCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"bool\n"))),(0,r.mdx)(_.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,r.mdx)(_.mW,{mdxType:"DefaultValueCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"false\n"))),(0,r.mdx)(_.Ex,{mdxType:"DescriptionCell"},(0,r.mdx)("p",null,"Whether to hide the required indicator on the label."))),(0,r.mdx)(_.X2,{key:"ROW9",mdxType:"Row"},(0,r.mdx)(_.O,{mdxType:"PropNameCell"},"isIncomplete"),(0,r.mdx)(_.Di,{mdxType:"TypeCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"bool\n"))),(0,r.mdx)(_.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,r.mdx)(_.mW,{mdxType:"DefaultValueCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"false\n"))),(0,r.mdx)(_.Ex,{mdxType:"DescriptionCell"},(0,r.mdx)("p",null,"Whether the field displays as Incomplete. Use when no value has been provided. ",(0,r.mdx)("em",{parentName:"p"},"(usage note: ",(0,r.mdx)("inlineCode",{parentName:"em"},"required")," must also be set)"),"."))),(0,r.mdx)(_.X2,{key:"ROW10",mdxType:"Row"},(0,r.mdx)(_.O,{mdxType:"PropNameCell"},"isInline"),(0,r.mdx)(_.Di,{mdxType:"TypeCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"bool\n"))),(0,r.mdx)(_.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,r.mdx)(_.mW,{mdxType:"DefaultValueCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"false\n"))),(0,r.mdx)(_.Ex,{mdxType:"DescriptionCell"},(0,r.mdx)("p",null,"Whether the field is displayed inline. Displays block by default."))),(0,r.mdx)(_.X2,{key:"ROW11",mdxType:"Row"},(0,r.mdx)(_.O,{mdxType:"PropNameCell"},"isInvalid"),(0,r.mdx)(_.Di,{mdxType:"TypeCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"bool\n"))),(0,r.mdx)(_.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,r.mdx)(_.mW,{mdxType:"DefaultValueCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"false\n"))),(0,r.mdx)(_.Ex,{mdxType:"DescriptionCell"},(0,r.mdx)("p",null,"Whether the field displays as Invalid. Use when value does not meet validation pattern."))),(0,r.mdx)(_.X2,{key:"ROW12",mdxType:"Row"},(0,r.mdx)(_.O,{mdxType:"PropNameCell"},"isLabelHidden"),(0,r.mdx)(_.Di,{mdxType:"TypeCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"bool\n"))),(0,r.mdx)(_.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,r.mdx)(_.mW,{mdxType:"DefaultValueCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"false\n"))),(0,r.mdx)(_.Ex,{mdxType:"DescriptionCell"},(0,r.mdx)("p",null,"Whether the label is hidden. Allows hiding the label while meeting accessibility guidelines."))),(0,r.mdx)(_.X2,{key:"ROW13",mdxType:"Row"},(0,r.mdx)(_.O,{mdxType:"PropNameCell"},"isTouchAccessible"),(0,r.mdx)(_.Di,{mdxType:"TypeCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"bool\n"))),(0,r.mdx)(_.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,r.mdx)(_.mW,{mdxType:"DefaultValueCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"false\n"))),(0,r.mdx)(_.Ex,{mdxType:"DescriptionCell"},(0,r.mdx)("p",null,"Ensures touch accessibility by rendering the dropdown inline without a portal."),(0,r.mdx)("p",null,"Note: When enabled the dropdown will clip if rendered within a container that has an overflow: hidden ancestor.\nThe dropdown may also appear beneath content if rendered within a container that has an overflow: auto ancestor."))),(0,r.mdx)(_.X2,{key:"ROW14",mdxType:"Row"},(0,r.mdx)(_.O,{mdxType:"PropNameCell"},"labelAttrs"),(0,r.mdx)(_.Di,{mdxType:"TypeCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"object\n"))),(0,r.mdx)(_.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,r.mdx)(_.mW,{mdxType:"DefaultValueCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"{}\n"))),(0,r.mdx)(_.Ex,{mdxType:"DescriptionCell"},(0,r.mdx)("p",null,"Additional attributes to spread onto the label."))),(0,r.mdx)(_.X2,{key:"ROW15",mdxType:"Row"},(0,r.mdx)(_.O,{mdxType:"PropNameCell"},"maxHeight"),(0,r.mdx)(_.Di,{mdxType:"TypeCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"number\n"))),(0,r.mdx)(_.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,r.mdx)(_.mW,{mdxType:"DefaultValueCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"undefined\n"))),(0,r.mdx)(_.Ex,{mdxType:"DescriptionCell"},(0,r.mdx)("p",null,"The max height of the dropdown."))),(0,r.mdx)(_.X2,{key:"ROW16",mdxType:"Row"},(0,r.mdx)(_.O,{mdxType:"PropNameCell"},"maxWidth"),(0,r.mdx)(_.Di,{mdxType:"TypeCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"string\n"))),(0,r.mdx)(_.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,r.mdx)(_.mW,{mdxType:"DefaultValueCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"undefined\n"))),(0,r.mdx)(_.Ex,{mdxType:"DescriptionCell"},(0,r.mdx)("p",null,"Set the max-width of a field using ",(0,r.mdx)("inlineCode",{parentName:"p"},"length")," or ",(0,r.mdx)("inlineCode",{parentName:"p"},"%"),".  Best practice recommendation to never exceed\na rendered value of 1020px. ",(0,r.mdx)("em",{parentName:"p"},"(Note: Providing custom inline styles will take precedence.)")))),(0,r.mdx)(_.X2,{key:"ROW17",mdxType:"Row"},(0,r.mdx)(_.O,{mdxType:"PropNameCell"},"onChange"),(0,r.mdx)(_.Di,{mdxType:"TypeCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"func\n"))),(0,r.mdx)(_.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,r.mdx)(_.mW,{mdxType:"DefaultValueCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"undefined\n"))),(0,r.mdx)(_.Ex,{mdxType:"DescriptionCell"},(0,r.mdx)("p",null,"Callback function triggered when the select value changes. function(value)"))),(0,r.mdx)(_.X2,{key:"ROW18",mdxType:"Row"},(0,r.mdx)(_.O,{mdxType:"PropNameCell"},"placeholder"),(0,r.mdx)(_.Di,{mdxType:"TypeCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"string\n"))),(0,r.mdx)(_.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,r.mdx)(_.mW,{mdxType:"DefaultValueCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"undefined\n"))),(0,r.mdx)(_.Ex,{mdxType:"DescriptionCell"},(0,r.mdx)("p",null,"Placeholder text."))),(0,r.mdx)(_.X2,{key:"ROW19",mdxType:"Row"},(0,r.mdx)(_.O,{mdxType:"PropNameCell"},"required"),(0,r.mdx)(_.Di,{mdxType:"TypeCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"bool\n"))),(0,r.mdx)(_.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,r.mdx)(_.mW,{mdxType:"DefaultValueCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"false\n"))),(0,r.mdx)(_.Ex,{mdxType:"DescriptionCell"},(0,r.mdx)("p",null,"Whether the field is required."))),(0,r.mdx)(_.X2,{key:"ROW20",mdxType:"Row"},(0,r.mdx)(_.O,{mdxType:"PropNameCell"},"selectAttrs"),(0,r.mdx)(_.Di,{mdxType:"TypeCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"object\n"))),(0,r.mdx)(_.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,r.mdx)(_.mW,{mdxType:"DefaultValueCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"{}\n"))),(0,r.mdx)(_.Ex,{mdxType:"DescriptionCell"},(0,r.mdx)("p",null,"Additional attributes to spread onto the select."))),(0,r.mdx)(_.X2,{key:"ROW21",mdxType:"Row"},(0,r.mdx)(_.O,{mdxType:"PropNameCell"},"selectId"),(0,r.mdx)(_.Di,{mdxType:"TypeCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"string\n"))),(0,r.mdx)(_.dS,{isRequired:!0,mdxType:"RequiredCell"}),(0,r.mdx)(_.mW,{mdxType:"DefaultValueCell"},(0,r.mdx)("p",null,"none")),(0,r.mdx)(_.Ex,{mdxType:"DescriptionCell"},(0,r.mdx)("p",null,"The Select identifier. Links the htmlFor of the field to the select identifier."))),(0,r.mdx)(_.X2,{key:"ROW22",mdxType:"Row"},(0,r.mdx)(_.O,{mdxType:"PropNameCell"},"showOptional"),(0,r.mdx)(_.Di,{mdxType:"TypeCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"bool\n"))),(0,r.mdx)(_.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,r.mdx)(_.mW,{mdxType:"DefaultValueCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"false\n"))),(0,r.mdx)(_.Ex,{mdxType:"DescriptionCell"},(0,r.mdx)("p",null,"Whether to append the 'optional' label to a non-required field label."))),(0,r.mdx)(_.X2,{key:"ROW23",mdxType:"Row"},(0,r.mdx)(_.O,{mdxType:"PropNameCell"},"value"),(0,r.mdx)(_.Di,{mdxType:"TypeCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"unionOf: [\n  type: 'string',\n  type: 'number',\n  type: 'array',\n],\n"))),(0,r.mdx)(_.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,r.mdx)(_.mW,{mdxType:"DefaultValueCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"undefined\n"))),(0,r.mdx)(_.Ex,{mdxType:"DescriptionCell"},(0,r.mdx)("p",null,"The value of the select. Can be a string, number, or array of strings/numbers.")))))}F.isMDXComponent=!0;var k=["components"];function I(){return I=Object.assign?Object.assign.bind():function(e){for(var l=1;l<arguments.length;l++){var a=arguments[l];for(var t in a)Object.prototype.hasOwnProperty.call(a,t)&&(e[t]=a[t])}return e},I.apply(this,arguments)}function L(e,l){if(null==e)return{};var a,t,r=function(e,l){if(null==e)return{};var a,t,r={},n=Object.keys(e);for(t=0;t<n.length;t++)a=n[t],l.indexOf(a)>=0||(r[a]=e[a]);return r}(e,l);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(t=0;t<n.length;t++)a=n[t],l.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var M={},X="wrapper";function V(e){var l=e.components,a=L(e,k);return(0,r.mdx)(X,I({},M,a,{components:l,mdxType:"MDXLayout"}),(0,r.mdx)(n.C,{mdxType:"Badge"}),(0,r.mdx)("h1",{id:"terra-form-combobox-field"},"Terra Form Combobox Field"),(0,r.mdx)("p",null,"A convenience wrapper assembling a ",(0,r.mdx)("a",{parentName:"p",href:"https://github.com/cerner/terra-core/tree/main/packages/terra-form-select/src/Combobox.jsx"},"terra-form-select Combobox")," within a ",(0,r.mdx)("a",{parentName:"p",href:"https://github.com/cerner/terra-core/tree/main/packages/terra-form-field"},"terra-form-field"),"."),(0,r.mdx)("h2",{id:"getting-started"},"Getting Started"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},"Install with ",(0,r.mdx)("a",{parentName:"li",href:"https://www.npmjs.com/"},"npmjs"),":",(0,r.mdx)("ul",{parentName:"li"},(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("inlineCode",{parentName:"li"},"npm install terra-form-select"))))),(0,r.mdx)("h2",{id:"usage"},"Usage"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-jsx"},"import ComboboxField from 'terra-form-select/lib/ComboboxField';\n")),(0,r.mdx)("h2",{id:"component-features"},"Component Features"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("a",{parentName:"li",href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#cross-browser-support"},"Cross-Browser Support")),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("a",{parentName:"li",href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#responsive-support"},"Responsive Support")),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("a",{parentName:"li",href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#mobile-support"},"Mobile Support")),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("a",{parentName:"li",href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#internationalization-i18n"},"Internationalization Support")),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("a",{parentName:"li",href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#internationalization-i18n"},"Localization Support")),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("a",{parentName:"li",href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#ltr--rtl"},"LTR/RTL Support"))),(0,r.mdx)("h2",{id:"examples"},"Examples"),(0,r.mdx)(x,{title:"Combobox Field Example",mdxType:"ComboboxFieldExample"}),(0,r.mdx)(T,{title:"Required Combobox Field Example",mdxType:"RequiredComboboxFieldExample"}),(0,r.mdx)(R,{title:"Incomplete Combobox Field Example",description:"Applies theme-specific styling for incomplete. ***Note: Only use incomplete if given specific guidance, reserved for specific applications when no value has been provided. Not for general use.***",mdxType:"IncompleteComboboxFieldExample"}),(0,r.mdx)("h2",{id:"combobox-field-props"},"Combobox Field Props"),(0,r.mdx)(F,{mdxType:"ComboboxFieldPropsTable"}))}V.isMDXComponent=!0},15305:function(e,l,a){a.d(l,{Z:function(){return i}});a(67294);var t=a(81254),r=["components"];function n(){return n=Object.assign?Object.assign.bind():function(e){for(var l=1;l<arguments.length;l++){var a=arguments[l];for(var t in a)Object.prototype.hasOwnProperty.call(a,t)&&(e[t]=a[t])}return e},n.apply(this,arguments)}function d(e,l){if(null==e)return{};var a,t,r=function(e,l){if(null==e)return{};var a,t,r={},n=Object.keys(e);for(t=0;t<n.length;t++)a=n[t],l.indexOf(a)>=0||(r[a]=e[a]);return r}(e,l);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(t=0;t<n.length;t++)a=n[t],l.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var m={},o="wrapper";function i(e){var l=e.components,a=d(e,r);return(0,t.mdx)(o,n({},m,a,{components:l,mdxType:"MDXLayout"}),(0,t.mdx)("pre",null,(0,t.mdx)("code",{parentName:"pre",className:"language-scss"},":local {\n  .form-select {\n    max-width: 300px;\n  }\n}\n\n")))}i.isMDXComponent=!0},57739:function(e,l,a){a.d(l,{C:function(){return n}});var t=a(67294),r=a(22863),n=function(e){var l=e.url;return t.createElement(r.Z,{src:"https://github.com/cerner/terra-core/tree/main/packages/terra-form-select",name:"terra-form-select",version:"6.41.0",url:l})}},48824:function(e,l,a){a.r(l),l.default={"form-select":"FormSelectDocCommon-module__form-select___Tm1QE"}},53560:function(e,l,a){a.r(l),l.default={"orion-fusion-theme":"ExampleTemplate-module__orion-fusion-theme___GzA23",template:"ExampleTemplate-module__template___a4uPk",header:"ExampleTemplate-module__header___iFXV3",content:"ExampleTemplate-module__content___48m4Q",description:"ExampleTemplate-module__description___NwBJo",footer:"ExampleTemplate-module__footer___GpSoG","button-container":"ExampleTemplate-module__button-container___rAD11",css:"ExampleTemplate-module__css___+jtk1",code:"ExampleTemplate-module__code___7rC6C","css-toggle":"ExampleTemplate-module__css-toggle___chHK7","code-toggle":"ExampleTemplate-module__code-toggle___TGlE-","is-selected":"ExampleTemplate-module__is-selected___0BYwS",item:"ExampleTemplate-module__item___8FTQq",chevron:"ExampleTemplate-module__chevron___VbY7N",title:"ExampleTemplate-module__title___r+nbJ","dynamic-content":"ExampleTemplate-module__dynamic-content___k+1H7"}},8556:function(e,l,a){Object.defineProperty(l,"__esModule",{value:!0}),l.default=void 0;var t=p(a(67294)),r=p(a(45697)),n=p(a(47717)),d=p(a(30555)),m=p(a(87786)),o=p(a(88413)),i=["allowClear","children","defaultValue","disabled","error","help","hideRequired","isIncomplete","isInline","isInvalid","isLabelHidden","isTouchAccessible","label","labelAttrs","maxHeight","maxWidth","onChange","placeholder","required","selectAttrs","selectId","showOptional","value"];function p(e){return e&&e.__esModule?e:{default:e}}function s(){return s=Object.assign?Object.assign.bind():function(e){for(var l=1;l<arguments.length;l++){var a=arguments[l];for(var t in a)Object.prototype.hasOwnProperty.call(a,t)&&(e[t]=a[t])}return e},s.apply(this,arguments)}function u(e,l){if(null==e)return{};var a,t,r=function(e,l){if(null==e)return{};var a,t,r={},n=Object.keys(e);for(t=0;t<n.length;t++)a=n[t],l.indexOf(a)>=0||(r[a]=e[a]);return r}(e,l);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(t=0;t<n.length;t++)a=n[t],l.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c={allowClear:r.default.bool,children:r.default.node,label:r.default.string.isRequired,defaultValue:r.default.oneOfType([r.default.string,r.default.number,r.default.array]),disabled:r.default.bool,error:r.default.node,help:r.default.node,hideRequired:r.default.bool,isIncomplete:r.default.bool,isInline:r.default.bool,isInvalid:r.default.bool,isLabelHidden:r.default.bool,isTouchAccessible:r.default.bool,labelAttrs:r.default.object,maxHeight:r.default.number,maxWidth:r.default.string,onChange:r.default.func,placeholder:r.default.string,required:r.default.bool,selectAttrs:r.default.object,selectId:r.default.string.isRequired,showOptional:r.default.bool,value:r.default.oneOfType([r.default.string,r.default.number,r.default.array])},x={allowClear:!1,children:void 0,defaultValue:void 0,disabled:!1,error:void 0,help:void 0,hideRequired:!1,isIncomplete:!1,isInline:!1,isInvalid:!1,isTouchAccessible:!1,isLabelHidden:!1,labelAttrs:{},maxHeight:void 0,maxWidth:void 0,onChange:void 0,placeholder:void 0,required:!1,selectAttrs:{},showOptional:!1,value:void 0},f=function(e){var l,a=e.allowClear,r=e.children,m=e.defaultValue,o=e.disabled,p=e.error,c=e.help,x=e.hideRequired,f=e.isIncomplete,y=e.isInline,b=e.isInvalid,g=e.isLabelHidden,v=e.isTouchAccessible,h=e.label,T=e.labelAttrs,C=e.maxHeight,O=e.maxWidth,N=e.onChange,E=e.placeholder,j=e.required,w=e.selectAttrs,R=e.selectId,_=e.showOptional,D=e.value,S=u(e,i);return c&&p&&b?l="".concat(R,"-error ").concat(R,"-help"):(c&&(l="".concat(R,"-help")),p&&b&&(l="".concat(R,"-error"))),t.default.createElement(n.default,s({},S,{label:h,labelAttrs:T,error:p,help:c,hideRequired:x,required:j,showOptional:_,isInvalid:b,isInline:y,isLabelHidden:g,htmlFor:R,maxWidth:O}),t.default.createElement(d.default,s({},w,{ariaLabel:h,allowClear:a,"aria-describedby":l,disabled:w.disabled||o,inputId:R,isIncomplete:f,isInvalid:b,isTouchAccessible:v,defaultValue:m,maxHeight:C||w.maxHeight,onChange:N,placeholder:E,required:j,value:D}),r))};f.propTypes=c,f.defaultProps=x,f.Option=o.default,f.OptGroup=m.default;var y=f;l.default=y},32751:function(e,l,a){Object.defineProperty(l,"__esModule",{value:!0}),l.default=void 0;var t=o(a(67294)),r=o(a(45697)),n=a(25387),d=o(a(88413)),m=["value","intl"];function o(e){return e&&e.__esModule?e:{default:e}}function i(){return i=Object.assign?Object.assign.bind():function(e){for(var l=1;l<arguments.length;l++){var a=arguments[l];for(var t in a)Object.prototype.hasOwnProperty.call(a,t)&&(e[t]=a[t])}return e},i.apply(this,arguments)}function p(e,l){if(null==e)return{};var a,t,r=function(e,l){if(null==e)return{};var a,t,r={},n=Object.keys(e);for(t=0;t<n.length;t++)a=n[t],l.indexOf(a)>=0||(r[a]=e[a]);return r}(e,l);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(t=0;t<n.length;t++)a=n[t],l.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s={intl:r.default.shape({formatMessage:r.default.func}).isRequired,value:r.default.oneOfType([r.default.number,r.default.string])},u=function(e){var l=e.value,a=e.intl,r=p(e,m);return t.default.createElement(d.default,i({},r,{isAddOption:!0,value:l,display:a.formatMessage({id:"Terra.form.select.add"},{text:l}),"data-terra-select-add-option":!0}))};u.propTypes=s,u.isOption=!0;var c=(0,n.injectIntl)(u);l.default=c},33864:function(e,l,a){Object.defineProperty(l,"__esModule",{value:!0}),l.default=void 0;var t=n(a(67294)),r=n(a(99139));function n(e){return e&&e.__esModule?e:{default:e}}function d(){return d=Object.assign?Object.assign.bind():function(e){for(var l=1;l<arguments.length;l++){var a=arguments[l];for(var t in a)Object.prototype.hasOwnProperty.call(a,t)&&(e[t]=a[t])}return e},d.apply(this,arguments)}var m=function(e){var l=d({},e);return t.default.createElement(r.default,l,t.default.createElement("path",{d:"M10.3 24L33.8 0l3.9 3.8L18 24l19.7 20.2-3.9 3.8z"}))};m.displayName="IconChevronLeft",m.defaultProps={className:"",viewBox:"0 0 48 48",xmlns:"http://www.w3.org/2000/svg","data-name":"Layer 1",isBidi:!0};var o=m;l.default=o}}]);