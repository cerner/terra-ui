"use strict";(self.webpackChunkterra_ui=self.webpackChunkterra_ui||[]).push([[11299],{95032:function(e,l,a){l.Z=void 0;var t=o(a(67294)),n=o(a(8556)),r=o(a(47166)),d=o(a(48824));function o(e){return e&&e.__esModule?e:{default:e}}var m=r.default.bind(d.default),i=function(){return t.default.createElement(n.default,{label:"T-shirt size",placeholder:"Select a size",selectId:"tshirt-size-field-1",className:m("form-select")},t.default.createElement(n.default.Option,{value:"xSmall",display:"Extra Small"}),t.default.createElement(n.default.Option,{value:"small",display:"Small"}),t.default.createElement(n.default.Option,{value:"medium",display:"Medium"}),t.default.createElement(n.default.Option,{value:"large",display:"Large"}),t.default.createElement(n.default.Option,{value:"xLarge",display:"Extra Large"}))};l.Z=i},69111:function(e,l,a){l.Z=void 0;var t=o(a(67294)),n=o(a(8556)),r=o(a(47166)),d=o(a(48824));function o(e){return e&&e.__esModule?e:{default:e}}var m=r.default.bind(d.default),i=function(){return t.default.createElement(n.default,{required:!0,isIncomplete:!0,label:"T-shirt size",placeholder:"Select a size",selectId:"tshirt-size-field-2",className:m("form-select")},t.default.createElement(n.default.Option,{value:"xSmall",display:"Extra Small"}),t.default.createElement(n.default.Option,{value:"small",display:"Small"}),t.default.createElement(n.default.Option,{value:"medium",display:"Medium"}),t.default.createElement(n.default.Option,{value:"large",display:"Large"}),t.default.createElement(n.default.Option,{value:"xLarge",display:"Extra Large"}))};l.Z=i},85727:function(e,l,a){l.Z=void 0;var t=o(a(67294)),n=o(a(8556)),r=o(a(47166)),d=o(a(48824));function o(e){return e&&e.__esModule?e:{default:e}}var m=r.default.bind(d.default),i=function(){return t.default.createElement(n.default,{label:"T-shirt size",placeholder:"Select a size",selectId:"tshirt-size-field-3",required:!0,className:m("form-select")},t.default.createElement(n.default.Option,{value:"xSmall",display:"Extra Small"}),t.default.createElement(n.default.Option,{value:"small",display:"Small"}),t.default.createElement(n.default.Option,{value:"medium",display:"Medium"}),t.default.createElement(n.default.Option,{value:"large",display:"Large"}),t.default.createElement(n.default.Option,{value:"xLarge",display:"Extra Large"}))};l.Z=i},49271:function(e,l,a){var t=a(64836),n=a(18698);l.Z=void 0;var r=t(a(27424)),d=function(e,l){if(!l&&e&&e.__esModule)return e;if(null===e||"object"!==n(e)&&"function"!=typeof e)return{default:e};var a=x(l);if(a&&a.has(e))return a.get(e);var t={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var d in e)if("default"!==d&&Object.prototype.hasOwnProperty.call(e,d)){var o=r?Object.getOwnPropertyDescriptor(e,d):null;o&&(o.get||o.set)?Object.defineProperty(t,d,o):t[d]=e[d]}t.default=e,a&&a.set(e,t);return t}(a(67294)),o=t(a(45697)),m=t(a(47166)),i=a(21538),p=t(a(33864)),u=t(a(23399)),s=a(51051),c=t(a(53560));function x(e){if("function"!=typeof WeakMap)return null;var l=new WeakMap,a=new WeakMap;return(x=function(e){return e?a:l})(e)}var f=m.default.bind(c.default),y={example:o.default.element,exampleSrc:o.default.element,exampleCssSrc:o.default.element,title:o.default.string,description:o.default.node,isExpanded:o.default.bool},b=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","true")},g=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","false")},v=function(e){var l=e.example,a=e.exampleSrc,t=e.exampleCssSrc,n=e.title,o=e.description,m=e.isExpanded,c=(0,d.useState)(m),x=(0,r.default)(c,2),y=x[0],v=x[1],h=(0,d.useState)(!1),T=(0,r.default)(h,2),C=T[0],O=T[1],N=d.default.useContext(i.ThemeContext),E=void 0!==t,_=function(){O(!C),y&&v(!y)},j=function(){v(!y),C&&O(!C)},w=function(e,l){e.nativeEvent.keyCode!==s.KEY_SPACE&&e.nativeEvent.keyCode!==s.KEY_RETURN||(e.preventDefault(),l())};return d.default.createElement("div",{className:f("template",N.className)},d.default.createElement("div",{className:f("header")},n&&d.default.createElement("h2",{className:f("title")},n)),d.default.createElement("div",{className:f("content")},o&&d.default.createElement("div",{className:f("description")},o),l),d.default.createElement("div",{className:f("footer")},a?d.default.createElement("div",{className:f("button-container")},E&&d.default.createElement("button",{type:"button",className:f("css-toggle","item",{"is-selected":C}),onClick:_,onKeyDown:function(e){return w(e,_)},onBlur:b,onMouseDown:g,tabIndex:0,"data-focus-styles-enabled":!0},d.default.createElement(p.default,{className:f("chevron")}),d.default.createElement("span",null,"CSS"),d.default.createElement(u.default,{className:f("chevron")})),d.default.createElement("button",{type:"button",className:f("code-toggle","item",{"is-selected":y}),onClick:j,onKeyDown:function(e){return w(e,j)},onBlur:b,onMouseDown:g,tabIndex:0,"data-focus-styles-enabled":!0},d.default.createElement(p.default,{className:f("chevron")}),d.default.createElement("span",null,"Code"),d.default.createElement(u.default,{className:f("chevron")}))):null,d.default.createElement("div",null,C&&d.default.createElement("div",{className:f("css")},t),y&&d.default.createElement("div",{className:f("code")},a))))};v.propTypes=y,v.defaultProps={isExpanded:!1};var h=v;l.Z=h},60876:function(e,l,a){a.r(l),a.d(l,{default:function(){return V}});var t=a(67294),n=a(81254),r=a(57739),d=a(95032),o=["components"];function m(){return m=Object.assign?Object.assign.bind():function(e){for(var l=1;l<arguments.length;l++){var a=arguments[l];for(var t in a)Object.prototype.hasOwnProperty.call(a,t)&&(e[t]=a[t])}return e},m.apply(this,arguments)}function i(e,l){if(null==e)return{};var a,t,n=function(e,l){if(null==e)return{};var a,t,n={},r=Object.keys(e);for(t=0;t<r.length;t++)a=r[t],l.indexOf(a)>=0||(n[a]=e[a]);return n}(e,l);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)a=r[t],l.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var p={};function u(e){var l=e.components,a=i(e,o);return(0,n.mdx)("wrapper",m({},p,a,{components:l,mdxType:"MDXLayout"}),(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-jsx"},'import React from \'react\';\nimport ComboboxField from \'terra-form-select/lib/ComboboxField\';\nimport classNames from \'classnames/bind\';\nimport styles from \'../FormSelectDocCommon.module.scss\';\n\nconst cx = classNames.bind(styles);\n\nconst ComboboxFieldExample = () => (\n  <ComboboxField label="T-shirt size" placeholder="Select a size" selectId="tshirt-size-field-1" className={cx(\'form-select\')}>\n    <ComboboxField.Option value="xSmall" display="Extra Small" />\n    <ComboboxField.Option value="small" display="Small" />\n    <ComboboxField.Option value="medium" display="Medium" />\n    <ComboboxField.Option value="large" display="Large" />\n    <ComboboxField.Option value="xLarge" display="Extra Large" />\n  </ComboboxField>\n);\n\nexport default ComboboxFieldExample;\n\n')))}u.isMDXComponent=!0;var s=a(49271),c=a(15305),x=function(e){var l=e.title,a=e.description,n=e.isExpanded;return t.createElement(s.Z,{title:l||"Combobox Field",description:a,example:t.createElement(d.Z,null),exampleCssSrc:t.createElement(c.Z,null),exampleSrc:t.createElement(u,null),isExpanded:n})},f=a(85727),y=["components"];function b(){return b=Object.assign?Object.assign.bind():function(e){for(var l=1;l<arguments.length;l++){var a=arguments[l];for(var t in a)Object.prototype.hasOwnProperty.call(a,t)&&(e[t]=a[t])}return e},b.apply(this,arguments)}function g(e,l){if(null==e)return{};var a,t,n=function(e,l){if(null==e)return{};var a,t,n={},r=Object.keys(e);for(t=0;t<r.length;t++)a=r[t],l.indexOf(a)>=0||(n[a]=e[a]);return n}(e,l);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)a=r[t],l.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var v={};function h(e){var l=e.components,a=g(e,y);return(0,n.mdx)("wrapper",b({},v,a,{components:l,mdxType:"MDXLayout"}),(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-jsx"},'import React from \'react\';\nimport ComboboxField from \'terra-form-select/lib/ComboboxField\';\nimport classNames from \'classnames/bind\';\nimport styles from \'../FormSelectDocCommon.module.scss\';\n\nconst cx = classNames.bind(styles);\n\nconst ComboboxFieldExample = () => (\n  <ComboboxField label="T-shirt size" placeholder="Select a size" selectId="tshirt-size-field-3" required className={cx(\'form-select\')}>\n    <ComboboxField.Option value="xSmall" display="Extra Small" />\n    <ComboboxField.Option value="small" display="Small" />\n    <ComboboxField.Option value="medium" display="Medium" />\n    <ComboboxField.Option value="large" display="Large" />\n    <ComboboxField.Option value="xLarge" display="Extra Large" />\n  </ComboboxField>\n);\n\nexport default ComboboxFieldExample;\n\n')))}h.isMDXComponent=!0;var T=function(e){var l=e.title,a=e.description,n=e.isExpanded;return t.createElement(s.Z,{title:l||"Required Combobox Field",description:a,example:t.createElement(f.Z,null),exampleCssSrc:t.createElement(c.Z,null),exampleSrc:t.createElement(h,null),isExpanded:n})},C=a(69111),O=["components"];function N(){return N=Object.assign?Object.assign.bind():function(e){for(var l=1;l<arguments.length;l++){var a=arguments[l];for(var t in a)Object.prototype.hasOwnProperty.call(a,t)&&(e[t]=a[t])}return e},N.apply(this,arguments)}function E(e,l){if(null==e)return{};var a,t,n=function(e,l){if(null==e)return{};var a,t,n={},r=Object.keys(e);for(t=0;t<r.length;t++)a=r[t],l.indexOf(a)>=0||(n[a]=e[a]);return n}(e,l);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)a=r[t],l.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var _={};function j(e){var l=e.components,a=E(e,O);return(0,n.mdx)("wrapper",N({},_,a,{components:l,mdxType:"MDXLayout"}),(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-jsx"},'import React from \'react\';\nimport ComboboxField from \'terra-form-select/lib/ComboboxField\';\nimport classNames from \'classnames/bind\';\nimport styles from \'../FormSelectDocCommon.module.scss\';\n\nconst cx = classNames.bind(styles);\n\nconst ComboboxFieldExample = () => (\n  <ComboboxField required isIncomplete label="T-shirt size" placeholder="Select a size" selectId="tshirt-size-field-2" className={cx(\'form-select\')}>\n    <ComboboxField.Option value="xSmall" display="Extra Small" />\n    <ComboboxField.Option value="small" display="Small" />\n    <ComboboxField.Option value="medium" display="Medium" />\n    <ComboboxField.Option value="large" display="Large" />\n    <ComboboxField.Option value="xLarge" display="Extra Large" />\n  </ComboboxField>\n);\n\nexport default ComboboxFieldExample;\n\n')))}j.isMDXComponent=!0;var w=function(e){var l=e.title,a=e.description,n=e.isExpanded;return t.createElement(s.Z,{title:l||"Incomplete Combobox Field",description:a,example:t.createElement(C.Z,null),exampleCssSrc:t.createElement(c.Z,null),exampleSrc:t.createElement(j,null),isExpanded:n})},R=a(78530),S=["components"];function D(){return D=Object.assign?Object.assign.bind():function(e){for(var l=1;l<arguments.length;l++){var a=arguments[l];for(var t in a)Object.prototype.hasOwnProperty.call(a,t)&&(e[t]=a[t])}return e},D.apply(this,arguments)}function q(e,l){if(null==e)return{};var a,t,n=function(e,l){if(null==e)return{};var a,t,n={},r=Object.keys(e);for(t=0;t<r.length;t++)a=r[t],l.indexOf(a)>=0||(n[a]=e[a]);return n}(e,l);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)a=r[t],l.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var P={},W="wrapper";function F(e){var l=e.components,a=q(e,S);return(0,n.mdx)(W,D({},P,a,{components:l,mdxType:"MDXLayout"}),(0,n.mdx)(R.ZP,{mdxType:"PropsTable"},(0,n.mdx)(R.X2,{key:"ROW1",mdxType:"Row"},(0,n.mdx)(R.O,{mdxType:"PropNameCell"},"allowClear"),(0,n.mdx)(R.Di,{mdxType:"TypeCell"},(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-javascript"},"bool\n"))),(0,n.mdx)(R.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,n.mdx)(R.mW,{mdxType:"DefaultValueCell"},(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-javascript"},"false\n"))),(0,n.mdx)(R.Ex,{mdxType:"DescriptionCell"},(0,n.mdx)("p",null,"Whether a clear option is available to clear the selection."))),(0,n.mdx)(R.X2,{key:"ROW2",mdxType:"Row"},(0,n.mdx)(R.O,{mdxType:"PropNameCell"},"children"),(0,n.mdx)(R.Di,{mdxType:"TypeCell"},(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-javascript"},"node\n"))),(0,n.mdx)(R.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,n.mdx)(R.mW,{mdxType:"DefaultValueCell"},(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-javascript"},"undefined\n"))),(0,n.mdx)(R.Ex,{mdxType:"DescriptionCell"},(0,n.mdx)("p",null,"The select options."))),(0,n.mdx)(R.X2,{key:"ROW3",mdxType:"Row"},(0,n.mdx)(R.O,{mdxType:"PropNameCell"},"label"),(0,n.mdx)(R.Di,{mdxType:"TypeCell"},(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-javascript"},"string\n"))),(0,n.mdx)(R.dS,{isRequired:!0,mdxType:"RequiredCell"}),(0,n.mdx)(R.mW,{mdxType:"DefaultValueCell"},(0,n.mdx)("p",null,"none")),(0,n.mdx)(R.Ex,{mdxType:"DescriptionCell"},(0,n.mdx)("p",null,"The field label."))),(0,n.mdx)(R.X2,{key:"ROW4",mdxType:"Row"},(0,n.mdx)(R.O,{mdxType:"PropNameCell"},"defaultValue"),(0,n.mdx)(R.Di,{mdxType:"TypeCell"},(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-javascript"},"unionOf: [\n  type: 'string',\n  type: 'number',\n  type: 'array',\n],\n"))),(0,n.mdx)(R.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,n.mdx)(R.mW,{mdxType:"DefaultValueCell"},(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-javascript"},"undefined\n"))),(0,n.mdx)(R.Ex,{mdxType:"DescriptionCell"},(0,n.mdx)("p",null,"The default value of the select. Can be a string, number, or array of strings/numbers."))),(0,n.mdx)(R.X2,{key:"ROW5",mdxType:"Row"},(0,n.mdx)(R.O,{mdxType:"PropNameCell"},"disabled"),(0,n.mdx)(R.Di,{mdxType:"TypeCell"},(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-javascript"},"bool\n"))),(0,n.mdx)(R.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,n.mdx)(R.mW,{mdxType:"DefaultValueCell"},(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-javascript"},"false\n"))),(0,n.mdx)(R.Ex,{mdxType:"DescriptionCell"},(0,n.mdx)("p",null,"Whether the input is disabled."))),(0,n.mdx)(R.X2,{key:"ROW6",mdxType:"Row"},(0,n.mdx)(R.O,{mdxType:"PropNameCell"},"error"),(0,n.mdx)(R.Di,{mdxType:"TypeCell"},(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-javascript"},"node\n"))),(0,n.mdx)(R.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,n.mdx)(R.mW,{mdxType:"DefaultValueCell"},(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-javascript"},"undefined\n"))),(0,n.mdx)(R.Ex,{mdxType:"DescriptionCell"},(0,n.mdx)("p",null,"Error message displayed when the select is invalid."))),(0,n.mdx)(R.X2,{key:"ROW7",mdxType:"Row"},(0,n.mdx)(R.O,{mdxType:"PropNameCell"},"help"),(0,n.mdx)(R.Di,{mdxType:"TypeCell"},(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-javascript"},"node\n"))),(0,n.mdx)(R.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,n.mdx)(R.mW,{mdxType:"DefaultValueCell"},(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-javascript"},"undefined\n"))),(0,n.mdx)(R.Ex,{mdxType:"DescriptionCell"},(0,n.mdx)("p",null,"Help message to display with the select."))),(0,n.mdx)(R.X2,{key:"ROW8",mdxType:"Row"},(0,n.mdx)(R.O,{mdxType:"PropNameCell"},"hideRequired"),(0,n.mdx)(R.Di,{mdxType:"TypeCell"},(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-javascript"},"bool\n"))),(0,n.mdx)(R.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,n.mdx)(R.mW,{mdxType:"DefaultValueCell"},(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-javascript"},"false\n"))),(0,n.mdx)(R.Ex,{mdxType:"DescriptionCell"},(0,n.mdx)("p",null,"Whether to hide the required indicator on the label."))),(0,n.mdx)(R.X2,{key:"ROW9",mdxType:"Row"},(0,n.mdx)(R.O,{mdxType:"PropNameCell"},"isIncomplete"),(0,n.mdx)(R.Di,{mdxType:"TypeCell"},(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-javascript"},"bool\n"))),(0,n.mdx)(R.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,n.mdx)(R.mW,{mdxType:"DefaultValueCell"},(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-javascript"},"false\n"))),(0,n.mdx)(R.Ex,{mdxType:"DescriptionCell"},(0,n.mdx)("p",null,"Whether the field displays as Incomplete. Use when no value has been provided. ",(0,n.mdx)("em",{parentName:"p"},"(usage note: ",(0,n.mdx)("inlineCode",{parentName:"em"},"required")," must also be set)"),"."))),(0,n.mdx)(R.X2,{key:"ROW10",mdxType:"Row"},(0,n.mdx)(R.O,{mdxType:"PropNameCell"},"isInline"),(0,n.mdx)(R.Di,{mdxType:"TypeCell"},(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-javascript"},"bool\n"))),(0,n.mdx)(R.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,n.mdx)(R.mW,{mdxType:"DefaultValueCell"},(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-javascript"},"false\n"))),(0,n.mdx)(R.Ex,{mdxType:"DescriptionCell"},(0,n.mdx)("p",null,"Whether the field is displayed inline. Displays block by default."))),(0,n.mdx)(R.X2,{key:"ROW11",mdxType:"Row"},(0,n.mdx)(R.O,{mdxType:"PropNameCell"},"isInvalid"),(0,n.mdx)(R.Di,{mdxType:"TypeCell"},(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-javascript"},"bool\n"))),(0,n.mdx)(R.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,n.mdx)(R.mW,{mdxType:"DefaultValueCell"},(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-javascript"},"false\n"))),(0,n.mdx)(R.Ex,{mdxType:"DescriptionCell"},(0,n.mdx)("p",null,"Whether the field displays as Invalid. Use when value does not meet validation pattern."))),(0,n.mdx)(R.X2,{key:"ROW12",mdxType:"Row"},(0,n.mdx)(R.O,{mdxType:"PropNameCell"},"isLabelHidden"),(0,n.mdx)(R.Di,{mdxType:"TypeCell"},(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-javascript"},"bool\n"))),(0,n.mdx)(R.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,n.mdx)(R.mW,{mdxType:"DefaultValueCell"},(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-javascript"},"false\n"))),(0,n.mdx)(R.Ex,{mdxType:"DescriptionCell"},(0,n.mdx)("p",null,"Whether the label is hidden. Allows hiding the label while meeting accessibility guidelines."))),(0,n.mdx)(R.X2,{key:"ROW13",mdxType:"Row"},(0,n.mdx)(R.O,{mdxType:"PropNameCell"},"isTouchAccessible"),(0,n.mdx)(R.Di,{mdxType:"TypeCell"},(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-javascript"},"bool\n"))),(0,n.mdx)(R.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,n.mdx)(R.mW,{mdxType:"DefaultValueCell"},(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-javascript"},"false\n"))),(0,n.mdx)(R.Ex,{mdxType:"DescriptionCell"},(0,n.mdx)("p",null,"Ensures touch accessibility by rendering the dropdown inline without a portal."),(0,n.mdx)("p",null,"Note: When enabled the dropdown will clip if rendered within a container that has an overflow: hidden ancestor.\nThe dropdown may also appear beneath content if rendered within a container that has an overflow: auto ancestor."))),(0,n.mdx)(R.X2,{key:"ROW14",mdxType:"Row"},(0,n.mdx)(R.O,{mdxType:"PropNameCell"},"labelAttrs"),(0,n.mdx)(R.Di,{mdxType:"TypeCell"},(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-javascript"},"object\n"))),(0,n.mdx)(R.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,n.mdx)(R.mW,{mdxType:"DefaultValueCell"},(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-javascript"},"{}\n"))),(0,n.mdx)(R.Ex,{mdxType:"DescriptionCell"},(0,n.mdx)("p",null,"Additional attributes to spread onto the label."))),(0,n.mdx)(R.X2,{key:"ROW15",mdxType:"Row"},(0,n.mdx)(R.O,{mdxType:"PropNameCell"},"maxHeight"),(0,n.mdx)(R.Di,{mdxType:"TypeCell"},(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-javascript"},"number\n"))),(0,n.mdx)(R.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,n.mdx)(R.mW,{mdxType:"DefaultValueCell"},(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-javascript"},"undefined\n"))),(0,n.mdx)(R.Ex,{mdxType:"DescriptionCell"},(0,n.mdx)("p",null,"The max height of the dropdown."))),(0,n.mdx)(R.X2,{key:"ROW16",mdxType:"Row"},(0,n.mdx)(R.O,{mdxType:"PropNameCell"},"maxWidth"),(0,n.mdx)(R.Di,{mdxType:"TypeCell"},(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-javascript"},"string\n"))),(0,n.mdx)(R.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,n.mdx)(R.mW,{mdxType:"DefaultValueCell"},(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-javascript"},"undefined\n"))),(0,n.mdx)(R.Ex,{mdxType:"DescriptionCell"},(0,n.mdx)("p",null,"Set the max-width of a field using ",(0,n.mdx)("inlineCode",{parentName:"p"},"length")," or ",(0,n.mdx)("inlineCode",{parentName:"p"},"%"),".  Best practice recommendation to never exceed\na rendered value of 1020px. ",(0,n.mdx)("em",{parentName:"p"},"(Note: Providing custom inline styles will take precedence.)")))),(0,n.mdx)(R.X2,{key:"ROW17",mdxType:"Row"},(0,n.mdx)(R.O,{mdxType:"PropNameCell"},"onChange"),(0,n.mdx)(R.Di,{mdxType:"TypeCell"},(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-javascript"},"func\n"))),(0,n.mdx)(R.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,n.mdx)(R.mW,{mdxType:"DefaultValueCell"},(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-javascript"},"undefined\n"))),(0,n.mdx)(R.Ex,{mdxType:"DescriptionCell"},(0,n.mdx)("p",null,"Callback function triggered when the select value changes. function(value)"))),(0,n.mdx)(R.X2,{key:"ROW18",mdxType:"Row"},(0,n.mdx)(R.O,{mdxType:"PropNameCell"},"placeholder"),(0,n.mdx)(R.Di,{mdxType:"TypeCell"},(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-javascript"},"string\n"))),(0,n.mdx)(R.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,n.mdx)(R.mW,{mdxType:"DefaultValueCell"},(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-javascript"},"undefined\n"))),(0,n.mdx)(R.Ex,{mdxType:"DescriptionCell"},(0,n.mdx)("p",null,"Placeholder text."))),(0,n.mdx)(R.X2,{key:"ROW19",mdxType:"Row"},(0,n.mdx)(R.O,{mdxType:"PropNameCell"},"required"),(0,n.mdx)(R.Di,{mdxType:"TypeCell"},(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-javascript"},"bool\n"))),(0,n.mdx)(R.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,n.mdx)(R.mW,{mdxType:"DefaultValueCell"},(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-javascript"},"false\n"))),(0,n.mdx)(R.Ex,{mdxType:"DescriptionCell"},(0,n.mdx)("p",null,"Whether the field is required."))),(0,n.mdx)(R.X2,{key:"ROW20",mdxType:"Row"},(0,n.mdx)(R.O,{mdxType:"PropNameCell"},"selectAttrs"),(0,n.mdx)(R.Di,{mdxType:"TypeCell"},(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-javascript"},"object\n"))),(0,n.mdx)(R.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,n.mdx)(R.mW,{mdxType:"DefaultValueCell"},(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-javascript"},"{}\n"))),(0,n.mdx)(R.Ex,{mdxType:"DescriptionCell"},(0,n.mdx)("p",null,"Additional attributes to spread onto the select."))),(0,n.mdx)(R.X2,{key:"ROW21",mdxType:"Row"},(0,n.mdx)(R.O,{mdxType:"PropNameCell"},"selectId"),(0,n.mdx)(R.Di,{mdxType:"TypeCell"},(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-javascript"},"string\n"))),(0,n.mdx)(R.dS,{isRequired:!0,mdxType:"RequiredCell"}),(0,n.mdx)(R.mW,{mdxType:"DefaultValueCell"},(0,n.mdx)("p",null,"none")),(0,n.mdx)(R.Ex,{mdxType:"DescriptionCell"},(0,n.mdx)("p",null,"The Select identifier. Links the htmlFor of the field to the select identifier."))),(0,n.mdx)(R.X2,{key:"ROW22",mdxType:"Row"},(0,n.mdx)(R.O,{mdxType:"PropNameCell"},"showOptional"),(0,n.mdx)(R.Di,{mdxType:"TypeCell"},(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-javascript"},"bool\n"))),(0,n.mdx)(R.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,n.mdx)(R.mW,{mdxType:"DefaultValueCell"},(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-javascript"},"false\n"))),(0,n.mdx)(R.Ex,{mdxType:"DescriptionCell"},(0,n.mdx)("p",null,"Whether to append the 'optional' label to a non-required field label."))),(0,n.mdx)(R.X2,{key:"ROW23",mdxType:"Row"},(0,n.mdx)(R.O,{mdxType:"PropNameCell"},"value"),(0,n.mdx)(R.Di,{mdxType:"TypeCell"},(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-javascript"},"unionOf: [\n  type: 'string',\n  type: 'number',\n  type: 'array',\n],\n"))),(0,n.mdx)(R.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,n.mdx)(R.mW,{mdxType:"DefaultValueCell"},(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-javascript"},"undefined\n"))),(0,n.mdx)(R.Ex,{mdxType:"DescriptionCell"},(0,n.mdx)("p",null,"The value of the select. Can be a string, number, or array of strings/numbers.")))))}F.isMDXComponent=!0;var k=["components"];function I(){return I=Object.assign?Object.assign.bind():function(e){for(var l=1;l<arguments.length;l++){var a=arguments[l];for(var t in a)Object.prototype.hasOwnProperty.call(a,t)&&(e[t]=a[t])}return e},I.apply(this,arguments)}function M(e,l){if(null==e)return{};var a,t,n=function(e,l){if(null==e)return{};var a,t,n={},r=Object.keys(e);for(t=0;t<r.length;t++)a=r[t],l.indexOf(a)>=0||(n[a]=e[a]);return n}(e,l);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)a=r[t],l.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var L={},X="wrapper";function V(e){var l=e.components,a=M(e,k);return(0,n.mdx)(X,I({},L,a,{components:l,mdxType:"MDXLayout"}),(0,n.mdx)(r.C,{mdxType:"Badge"}),(0,n.mdx)("h1",{id:"terra-form-combobox-field"},"Terra Form Combobox Field"),(0,n.mdx)("p",null,"A convenience wrapper assembling a ",(0,n.mdx)("a",{parentName:"p",href:"https://github.com/cerner/terra-core/tree/main/packages/terra-form-select/src/Combobox.jsx"},"terra-form-select Combobox")," within a ",(0,n.mdx)("a",{parentName:"p",href:"https://github.com/cerner/terra-core/tree/main/packages/terra-form-field"},"terra-form-field"),"."),(0,n.mdx)("h2",{id:"getting-started"},"Getting Started"),(0,n.mdx)("ul",null,(0,n.mdx)("li",{parentName:"ul"},"Install with ",(0,n.mdx)("a",{parentName:"li",href:"https://www.npmjs.com/"},"npmjs"),":",(0,n.mdx)("ul",{parentName:"li"},(0,n.mdx)("li",{parentName:"ul"},(0,n.mdx)("inlineCode",{parentName:"li"},"npm install terra-form-select"))))),(0,n.mdx)("h2",{id:"usage"},"Usage"),(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-jsx"},"import ComboboxField from 'terra-form-select/lib/ComboboxField';\n")),(0,n.mdx)("h2",{id:"component-features"},"Component Features"),(0,n.mdx)("ul",null,(0,n.mdx)("li",{parentName:"ul"},(0,n.mdx)("a",{parentName:"li",href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#cross-browser-support"},"Cross-Browser Support")),(0,n.mdx)("li",{parentName:"ul"},(0,n.mdx)("a",{parentName:"li",href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#responsive-support"},"Responsive Support")),(0,n.mdx)("li",{parentName:"ul"},(0,n.mdx)("a",{parentName:"li",href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#mobile-support"},"Mobile Support")),(0,n.mdx)("li",{parentName:"ul"},(0,n.mdx)("a",{parentName:"li",href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#internationalization-i18n"},"Internationalization Support")),(0,n.mdx)("li",{parentName:"ul"},(0,n.mdx)("a",{parentName:"li",href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#internationalization-i18n"},"Localization Support")),(0,n.mdx)("li",{parentName:"ul"},(0,n.mdx)("a",{parentName:"li",href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#ltr--rtl"},"LTR/RTL Support"))),(0,n.mdx)("h2",{id:"examples"},"Examples"),(0,n.mdx)(x,{title:"Combobox Field Example",mdxType:"ComboboxFieldExample"}),(0,n.mdx)(T,{title:"Required Combobox Field Example",mdxType:"RequiredComboboxFieldExample"}),(0,n.mdx)(w,{title:"Incomplete Combobox Field Example",description:"Applies theme-specific styling for incomplete. ***Note: Only use incomplete if given specific guidance, reserved for specific applications when no value has been provided. Not for general use.***",mdxType:"IncompleteComboboxFieldExample"}),(0,n.mdx)("h2",{id:"combobox-field-props"},"Combobox Field Props"),(0,n.mdx)(F,{mdxType:"ComboboxFieldPropsTable"}))}V.isMDXComponent=!0},15305:function(e,l,a){a.d(l,{Z:function(){return i}});a(67294);var t=a(81254),n=["components"];function r(){return r=Object.assign?Object.assign.bind():function(e){for(var l=1;l<arguments.length;l++){var a=arguments[l];for(var t in a)Object.prototype.hasOwnProperty.call(a,t)&&(e[t]=a[t])}return e},r.apply(this,arguments)}function d(e,l){if(null==e)return{};var a,t,n=function(e,l){if(null==e)return{};var a,t,n={},r=Object.keys(e);for(t=0;t<r.length;t++)a=r[t],l.indexOf(a)>=0||(n[a]=e[a]);return n}(e,l);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)a=r[t],l.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var o={},m="wrapper";function i(e){var l=e.components,a=d(e,n);return(0,t.mdx)(m,r({},o,a,{components:l,mdxType:"MDXLayout"}),(0,t.mdx)("pre",null,(0,t.mdx)("code",{parentName:"pre",className:"language-scss"},":local {\n  .form-select {\n    max-width: 300px;\n  }\n\n  .controlled-button {\n    margin: 5px;\n  }\n}\n\n")))}i.isMDXComponent=!0},57739:function(e,l,a){a.d(l,{C:function(){return r}});var t=a(67294),n=a(22863),r=function(e){var l=e.url;return t.createElement(n.Z,{src:"https://github.com/cerner/terra-core/tree/main/packages/terra-form-select",name:"terra-form-select",version:"6.46.1",url:l})}},48824:function(e,l,a){a.r(l),l.default={"form-select":"FormSelectDocCommon-module__form-select___Tm1QE","controlled-button":"FormSelectDocCommon-module__controlled-button___wG6cn"}},53560:function(e,l,a){a.r(l),l.default={"clinical-lowlight-theme":"ExampleTemplate-module__clinical-lowlight-theme___rBbtD","orion-fusion-theme":"ExampleTemplate-module__orion-fusion-theme___GzA23",template:"ExampleTemplate-module__template___a4uPk",header:"ExampleTemplate-module__header___iFXV3",content:"ExampleTemplate-module__content___48m4Q",description:"ExampleTemplate-module__description___NwBJo",footer:"ExampleTemplate-module__footer___GpSoG","button-container":"ExampleTemplate-module__button-container___rAD11",css:"ExampleTemplate-module__css___+jtk1",code:"ExampleTemplate-module__code___7rC6C","css-toggle":"ExampleTemplate-module__css-toggle___chHK7","code-toggle":"ExampleTemplate-module__code-toggle___TGlE-","is-selected":"ExampleTemplate-module__is-selected___0BYwS",item:"ExampleTemplate-module__item___8FTQq",chevron:"ExampleTemplate-module__chevron___VbY7N",title:"ExampleTemplate-module__title___r+nbJ","dynamic-content":"ExampleTemplate-module__dynamic-content___k+1H7"}},21488:function(e,l,a){a.r(l),l.default={"clinical-lowlight-theme":"_ClearOption-module__clinical-lowlight-theme___didEg","orion-fusion-theme":"_ClearOption-module__orion-fusion-theme___KZPgR","clear-option":"_ClearOption-module__clear-option___0FCZT"}},8556:function(e,l,a){Object.defineProperty(l,"__esModule",{value:!0}),l.default=void 0;var t=p(a(67294)),n=p(a(45697)),r=p(a(47717)),d=p(a(30555)),o=p(a(87786)),m=p(a(88413)),i=["allowClear","children","defaultValue","disabled","error","help","hideRequired","isIncomplete","isInline","isInvalid","isLabelHidden","isTouchAccessible","label","labelAttrs","maxHeight","maxWidth","onChange","placeholder","required","selectAttrs","selectId","showOptional","value"];function p(e){return e&&e.__esModule?e:{default:e}}function u(){return u=Object.assign?Object.assign.bind():function(e){for(var l=1;l<arguments.length;l++){var a=arguments[l];for(var t in a)Object.prototype.hasOwnProperty.call(a,t)&&(e[t]=a[t])}return e},u.apply(this,arguments)}function s(e,l){if(null==e)return{};var a,t,n=function(e,l){if(null==e)return{};var a,t,n={},r=Object.keys(e);for(t=0;t<r.length;t++)a=r[t],l.indexOf(a)>=0||(n[a]=e[a]);return n}(e,l);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)a=r[t],l.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var c={allowClear:n.default.bool,children:n.default.node,label:n.default.string.isRequired,defaultValue:n.default.oneOfType([n.default.string,n.default.number,n.default.array]),disabled:n.default.bool,error:n.default.node,help:n.default.node,hideRequired:n.default.bool,isIncomplete:n.default.bool,isInline:n.default.bool,isInvalid:n.default.bool,isLabelHidden:n.default.bool,isTouchAccessible:n.default.bool,labelAttrs:n.default.object,maxHeight:n.default.number,maxWidth:n.default.string,onChange:n.default.func,placeholder:n.default.string,required:n.default.bool,selectAttrs:n.default.object,selectId:n.default.string.isRequired,showOptional:n.default.bool,value:n.default.oneOfType([n.default.string,n.default.number,n.default.array])},x={allowClear:!1,children:void 0,defaultValue:void 0,disabled:!1,error:void 0,help:void 0,hideRequired:!1,isIncomplete:!1,isInline:!1,isInvalid:!1,isTouchAccessible:!1,isLabelHidden:!1,labelAttrs:{},maxHeight:void 0,maxWidth:void 0,onChange:void 0,placeholder:void 0,required:!1,selectAttrs:{},showOptional:!1,value:void 0},f=function(e){var l,a=e.allowClear,n=e.children,o=e.defaultValue,m=e.disabled,p=e.error,c=e.help,x=e.hideRequired,f=e.isIncomplete,y=e.isInline,b=e.isInvalid,g=e.isLabelHidden,v=e.isTouchAccessible,h=e.label,T=e.labelAttrs,C=e.maxHeight,O=e.maxWidth,N=e.onChange,E=e.placeholder,_=e.required,j=e.selectAttrs,w=e.selectId,R=e.showOptional,S=e.value,D=s(e,i);return c&&p&&b?l="".concat(w,"-error ").concat(w,"-help"):(c&&(l="".concat(w,"-help")),p&&b&&(l="".concat(w,"-error"))),t.default.createElement(r.default,u({},D,{label:h,labelAttrs:T,error:p,help:c,hideRequired:x,required:_,showOptional:R,isInvalid:b,isInline:y,isLabelHidden:g,htmlFor:w,maxWidth:O}),t.default.createElement(d.default,u({},j,{ariaLabel:h,allowClear:a,"aria-describedby":l,disabled:j.disabled||m,inputId:w,isIncomplete:f,isInvalid:b,isTouchAccessible:v,defaultValue:o,maxHeight:C||j.maxHeight,onChange:N,placeholder:E,required:_,value:S}),n))};f.propTypes=c,f.defaultProps=x,f.Option=m.default,f.OptGroup=o.default;var y=f;l.default=y},32751:function(e,l,a){Object.defineProperty(l,"__esModule",{value:!0}),l.default=void 0;var t=m(a(67294)),n=m(a(45697)),r=a(25387),d=m(a(88413)),o=["value","intl"];function m(e){return e&&e.__esModule?e:{default:e}}function i(){return i=Object.assign?Object.assign.bind():function(e){for(var l=1;l<arguments.length;l++){var a=arguments[l];for(var t in a)Object.prototype.hasOwnProperty.call(a,t)&&(e[t]=a[t])}return e},i.apply(this,arguments)}function p(e,l){if(null==e)return{};var a,t,n=function(e,l){if(null==e)return{};var a,t,n={},r=Object.keys(e);for(t=0;t<r.length;t++)a=r[t],l.indexOf(a)>=0||(n[a]=e[a]);return n}(e,l);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)a=r[t],l.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var u={intl:n.default.shape({formatMessage:n.default.func}).isRequired,value:n.default.oneOfType([n.default.number,n.default.string])},s=function(e){var l=e.value,a=e.intl,n=p(e,o);return t.default.createElement(d.default,i({},n,{isAddOption:!0,value:l,display:a.formatMessage({id:"Terra.form.select.add"},{text:l}),"data-terra-select-add-option":!0}))};s.propTypes=u,s.isOption=!0;var c=(0,r.injectIntl)(s);l.default=c},61698:function(e,l,a){Object.defineProperty(l,"__esModule",{value:!0}),l.default=void 0;var t=u(a(67294)),n=u(a(45697)),r=u(a(94184)),d=u(a(47166)),o=u(a(50026)),m=u(a(88413)),i=u(a(21488)),p=["display","value"];function u(e){return e&&e.__esModule?e:{default:e}}function s(){return s=Object.assign?Object.assign.bind():function(e){for(var l=1;l<arguments.length;l++){var a=arguments[l];for(var t in a)Object.prototype.hasOwnProperty.call(a,t)&&(e[t]=a[t])}return e},s.apply(this,arguments)}function c(e,l){if(null==e)return{};var a,t,n=function(e,l){if(null==e)return{};var a,t,n={},r=Object.keys(e);for(t=0;t<r.length;t++)a=r[t],l.indexOf(a)>=0||(n[a]=e[a]);return n}(e,l);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)a=r[t],l.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var x=d.default.bind(i.default),f={display:n.default.string,value:n.default.string},y=function(e){var l=e.display,a=e.value,n=c(e,p),d=t.default.useContext(o.default);return t.default.createElement(m.default,s({},n,{className:(0,r.default)(x("clear-option",d.className),n.className),display:l,value:a,isSelected:!1,"data-terra-select-clear-option":!0}))};y.propTypes=f,y.isOption=!0;var b=y;l.default=b},33864:function(e,l,a){Object.defineProperty(l,"__esModule",{value:!0}),l.default=void 0;var t=r(a(67294)),n=r(a(99139));function r(e){return e&&e.__esModule?e:{default:e}}function d(){return d=Object.assign?Object.assign.bind():function(e){for(var l=1;l<arguments.length;l++){var a=arguments[l];for(var t in a)Object.prototype.hasOwnProperty.call(a,t)&&(e[t]=a[t])}return e},d.apply(this,arguments)}var o=function(e){var l=d({},e);return t.default.createElement(n.default,l,t.default.createElement("path",{d:"M10.3 24 33.8 0l3.9 3.8L18 24l19.7 20.2-3.9 3.8z"}))};o.displayName="IconChevronLeft",o.defaultProps={viewBox:"0 0 48 48","data-name":"Layer 1",xmlns:"http://www.w3.org/2000/svg"};var m=o;l.default=m}}]);