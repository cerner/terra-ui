"use strict";(self.webpackChunkterra_ui=self.webpackChunkterra_ui||[]).push([[94982,33667,96890,16873,78996,39915,33442],{79533:function(e,l,a){l.Z=void 0;var t=m(a(67294)),n=m(a(52846)),r=m(a(19845)),d=m(a(48824));function m(e){return e&&e.__esModule?e:{default:e}}var i=r.default.bind(d.default);l.Z=function(){return t.default.createElement(n.default,{required:!0,isIncomplete:!0,label:"T-shirt size",placeholder:"Select a size",selectId:"tshirt-size-field-1",className:i("form-select")},t.default.createElement(n.default.Option,{value:"xSmall",display:"Extra Small"}),t.default.createElement(n.default.Option,{value:"small",display:"Small"}),t.default.createElement(n.default.Option,{value:"medium",display:"Medium"}),t.default.createElement(n.default.Option,{value:"large",display:"Large"}),t.default.createElement(n.default.Option,{value:"xLarge",display:"Extra Large"}))}},57403:function(e,l,a){l.Z=void 0;var t=m(a(67294)),n=m(a(52846)),r=m(a(19845)),d=m(a(48824));function m(e){return e&&e.__esModule?e:{default:e}}var i=r.default.bind(d.default);l.Z=function(){return t.default.createElement(n.default,{label:"T-shirt size",placeholder:"Select a size",selectId:"tshirt-size-field-2",required:!0,className:i("form-select")},t.default.createElement(n.default.Option,{value:"xSmall",display:"Extra Small"}),t.default.createElement(n.default.Option,{value:"small",display:"Small"}),t.default.createElement(n.default.Option,{value:"medium",display:"Medium"}),t.default.createElement(n.default.Option,{value:"large",display:"Large"}),t.default.createElement(n.default.Option,{value:"xLarge",display:"Extra Large"}))}},57595:function(e,l,a){l.Z=void 0;var t=m(a(67294)),n=m(a(52846)),r=m(a(19845)),d=m(a(48824));function m(e){return e&&e.__esModule?e:{default:e}}var i=r.default.bind(d.default);l.Z=function(){return t.default.createElement(n.default,{label:"T-shirt size",placeholder:"Select a size",selectId:"tshirt-size-field-3",className:i("form-select")},t.default.createElement(n.default.Option,{value:"xSmall",display:"Extra Small"}),t.default.createElement(n.default.Option,{value:"small",display:"Small"}),t.default.createElement(n.default.Option,{value:"medium",display:"Medium"}),t.default.createElement(n.default.Option,{value:"large",display:"Large"}),t.default.createElement(n.default.Option,{value:"xLarge",display:"Extra Large"}))}},49271:function(e,l,a){var t=a(64836),n=a(18698);l.Z=void 0;var r=t(a(27424)),d=function(e,l){if(!l&&e&&e.__esModule)return e;if(null===e||"object"!==n(e)&&"function"!=typeof e)return{default:e};var a=x(l);if(a&&a.has(e))return a.get(e);var t={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var d in e)if("default"!==d&&Object.prototype.hasOwnProperty.call(e,d)){var m=r?Object.getOwnPropertyDescriptor(e,d):null;m&&(m.get||m.set)?Object.defineProperty(t,d,m):t[d]=e[d]}t.default=e,a&&a.set(e,t);return t}(a(67294)),m=t(a(45697)),i=t(a(19845)),o=a(21538),p=t(a(33864)),s=t(a(23399)),u=a(51051),c=t(a(53560));function x(e){if("function"!=typeof WeakMap)return null;var l=new WeakMap,a=new WeakMap;return(x=function(e){return e?a:l})(e)}var f=i.default.bind(c.default),y={example:m.default.element,exampleSrc:m.default.element,exampleCssSrc:m.default.element,title:m.default.string,description:m.default.node,isExpanded:m.default.bool},g=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","true")},T=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","false")},h=function(e){var l=e.example,a=e.exampleSrc,t=e.exampleCssSrc,n=e.title,m=e.description,i=e.isExpanded,c=(0,d.useState)(i),x=(0,r.default)(c,2),y=x[0],h=x[1],v=(0,d.useState)(!1),b=(0,r.default)(v,2),O=b[0],N=b[1],C=d.default.useContext(o.ThemeContext),S=void 0!==t,E=function(){N(!O),y&&h(!y)},_=function(){h(!y),O&&N(!O)},j=function(e,l){e.nativeEvent.keyCode!==u.KEY_SPACE&&e.nativeEvent.keyCode!==u.KEY_RETURN||(e.preventDefault(),l())};return d.default.createElement("div",{className:f("template",C.className)},d.default.createElement("div",{className:f("header")},n&&d.default.createElement("h2",{className:f("title")},n)),d.default.createElement("div",{className:f("content")},m&&d.default.createElement("div",{className:f("description")},m),l),d.default.createElement("div",{className:f("footer")},a?d.default.createElement("div",{className:f("button-container")},S&&d.default.createElement("button",{type:"button",className:f("css-toggle","item",{"is-selected":O}),onClick:E,onKeyDown:function(e){return j(e,E)},onBlur:g,onMouseDown:T,tabIndex:0,"data-focus-styles-enabled":!0},d.default.createElement(p.default,{className:f("chevron")}),d.default.createElement("span",null,"CSS"),d.default.createElement(s.default,{className:f("chevron")})),d.default.createElement("button",{type:"button",className:f("code-toggle","item",{"is-selected":y}),onClick:_,onKeyDown:function(e){return j(e,_)},onBlur:g,onMouseDown:T,tabIndex:0,"data-focus-styles-enabled":!0},d.default.createElement(p.default,{className:f("chevron")}),d.default.createElement("span",null,"Code"),d.default.createElement(s.default,{className:f("chevron")}))):null,d.default.createElement("div",null,O&&d.default.createElement("div",{className:f("css")},t),y&&d.default.createElement("div",{className:f("code")},a))))};h.propTypes=y,h.defaultProps={isExpanded:!1};var v=h;l.Z=v},23868:function(e,l,a){a.r(l),a.d(l,{default:function(){return V}});var t=a(67294),n=a(81254),r=a(57739),d=a(57595),m=["components"];function i(){return i=Object.assign?Object.assign.bind():function(e){for(var l=1;l<arguments.length;l++){var a=arguments[l];for(var t in a)Object.prototype.hasOwnProperty.call(a,t)&&(e[t]=a[t])}return e},i.apply(this,arguments)}function o(e,l){if(null==e)return{};var a,t,n=function(e,l){if(null==e)return{};var a,t,n={},r=Object.keys(e);for(t=0;t<r.length;t++)a=r[t],l.indexOf(a)>=0||(n[a]=e[a]);return n}(e,l);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)a=r[t],l.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var p={};function s(e){var l=e.components,a=o(e,m);return(0,n.mdx)("wrapper",i({},p,a,{components:l,mdxType:"MDXLayout"}),(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-jsx"},'import React from \'react\';\nimport TagSelectField from \'terra-form-select/lib/TagSelectField\';\nimport classNames from \'classnames/bind\';\nimport styles from \'../FormSelectDocCommon.module.scss\';\n\nconst cx = classNames.bind(styles);\n\nconst TagSelectFieldExample = () => (\n  <TagSelectField label="T-shirt size" placeholder="Select a size" selectId="tshirt-size-field-3" className={cx(\'form-select\')}>\n    <TagSelectField.Option value="xSmall" display="Extra Small" />\n    <TagSelectField.Option value="small" display="Small" />\n    <TagSelectField.Option value="medium" display="Medium" />\n    <TagSelectField.Option value="large" display="Large" />\n    <TagSelectField.Option value="xLarge" display="Extra Large" />\n  </TagSelectField>\n);\n\nexport default TagSelectFieldExample;\n\n')))}s.isMDXComponent=!0;var u=a(49271),c=a(15305),x=function(e){var l=e.title,a=e.description,n=e.isExpanded;return t.createElement(u.Z,{title:l||"Tag Select Field",description:a,example:t.createElement(d.Z,null),exampleCssSrc:t.createElement(c.Z,null),exampleSrc:t.createElement(s,null),isExpanded:n})},f=a(57403),y=["components"];function g(){return g=Object.assign?Object.assign.bind():function(e){for(var l=1;l<arguments.length;l++){var a=arguments[l];for(var t in a)Object.prototype.hasOwnProperty.call(a,t)&&(e[t]=a[t])}return e},g.apply(this,arguments)}function T(e,l){if(null==e)return{};var a,t,n=function(e,l){if(null==e)return{};var a,t,n={},r=Object.keys(e);for(t=0;t<r.length;t++)a=r[t],l.indexOf(a)>=0||(n[a]=e[a]);return n}(e,l);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)a=r[t],l.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var h={};function v(e){var l=e.components,a=T(e,y);return(0,n.mdx)("wrapper",g({},h,a,{components:l,mdxType:"MDXLayout"}),(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-jsx"},'import React from \'react\';\nimport TagSelectField from \'terra-form-select/lib/TagSelectField\';\nimport classNames from \'classnames/bind\';\nimport styles from \'../FormSelectDocCommon.module.scss\';\n\nconst cx = classNames.bind(styles);\n\nconst TagSelectFieldExample = () => (\n  <TagSelectField label="T-shirt size" placeholder="Select a size" selectId="tshirt-size-field-2" required className={cx(\'form-select\')}>\n    <TagSelectField.Option value="xSmall" display="Extra Small" />\n    <TagSelectField.Option value="small" display="Small" />\n    <TagSelectField.Option value="medium" display="Medium" />\n    <TagSelectField.Option value="large" display="Large" />\n    <TagSelectField.Option value="xLarge" display="Extra Large" />\n  </TagSelectField>\n);\n\nexport default TagSelectFieldExample;\n\n')))}v.isMDXComponent=!0;var b=function(e){var l=e.title,a=e.description,n=e.isExpanded;return t.createElement(u.Z,{title:l||"Required Tag Select Field",description:a,example:t.createElement(f.Z,null),exampleCssSrc:t.createElement(c.Z,null),exampleSrc:t.createElement(v,null),isExpanded:n})},O=a(79533),N=["components"];function C(){return C=Object.assign?Object.assign.bind():function(e){for(var l=1;l<arguments.length;l++){var a=arguments[l];for(var t in a)Object.prototype.hasOwnProperty.call(a,t)&&(e[t]=a[t])}return e},C.apply(this,arguments)}function S(e,l){if(null==e)return{};var a,t,n=function(e,l){if(null==e)return{};var a,t,n={},r=Object.keys(e);for(t=0;t<r.length;t++)a=r[t],l.indexOf(a)>=0||(n[a]=e[a]);return n}(e,l);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)a=r[t],l.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var E={};function _(e){var l=e.components,a=S(e,N);return(0,n.mdx)("wrapper",C({},E,a,{components:l,mdxType:"MDXLayout"}),(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-jsx"},'import React from \'react\';\nimport TagSelectField from \'terra-form-select/lib/TagSelectField\';\nimport classNames from \'classnames/bind\';\nimport styles from \'../FormSelectDocCommon.module.scss\';\n\nconst cx = classNames.bind(styles);\n\nconst TagSelectFieldExample = () => (\n  <TagSelectField required isIncomplete label="T-shirt size" placeholder="Select a size" selectId="tshirt-size-field-1" className={cx(\'form-select\')}>\n    <TagSelectField.Option value="xSmall" display="Extra Small" />\n    <TagSelectField.Option value="small" display="Small" />\n    <TagSelectField.Option value="medium" display="Medium" />\n    <TagSelectField.Option value="large" display="Large" />\n    <TagSelectField.Option value="xLarge" display="Extra Large" />\n  </TagSelectField>\n);\n\nexport default TagSelectFieldExample;\n\n')))}_.isMDXComponent=!0;var j=function(e){var l=e.title,a=e.description,n=e.isExpanded;return t.createElement(u.Z,{title:l||"Incomplete Tag Select Field",description:a,example:t.createElement(O.Z,null),exampleCssSrc:t.createElement(c.Z,null),exampleSrc:t.createElement(_,null),isExpanded:n})},R=a(78530),w=["components"];function D(){return D=Object.assign?Object.assign.bind():function(e){for(var l=1;l<arguments.length;l++){var a=arguments[l];for(var t in a)Object.prototype.hasOwnProperty.call(a,t)&&(e[t]=a[t])}return e},D.apply(this,arguments)}function q(e,l){if(null==e)return{};var a,t,n=function(e,l){if(null==e)return{};var a,t,n={},r=Object.keys(e);for(t=0;t<r.length;t++)a=r[t],l.indexOf(a)>=0||(n[a]=e[a]);return n}(e,l);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)a=r[t],l.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var W={},P="wrapper";function F(e){var l=e.components,a=q(e,w);return(0,n.mdx)(P,D({},W,a,{components:l,mdxType:"MDXLayout"}),(0,n.mdx)(R.ZP,{mdxType:"PropsTable"},(0,n.mdx)(R.X2,{key:"ROW1",mdxType:"Row"},(0,n.mdx)(R.O,{mdxType:"PropNameCell"},"children"),(0,n.mdx)(R.Di,{mdxType:"TypeCell"},(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-javascript"},"node\n"))),(0,n.mdx)(R.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,n.mdx)(R.mW,{mdxType:"DefaultValueCell"},(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-javascript"},"undefined\n"))),(0,n.mdx)(R.Ex,{mdxType:"DescriptionCell"},(0,n.mdx)("p",null,"The select options."))),(0,n.mdx)(R.X2,{key:"ROW2",mdxType:"Row"},(0,n.mdx)(R.O,{mdxType:"PropNameCell"},"label"),(0,n.mdx)(R.Di,{mdxType:"TypeCell"},(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-javascript"},"string\n"))),(0,n.mdx)(R.dS,{isRequired:!0,mdxType:"RequiredCell"}),(0,n.mdx)(R.mW,{mdxType:"DefaultValueCell"},(0,n.mdx)("p",null,"none")),(0,n.mdx)(R.Ex,{mdxType:"DescriptionCell"},(0,n.mdx)("p",null,"The field label."))),(0,n.mdx)(R.X2,{key:"ROW3",mdxType:"Row"},(0,n.mdx)(R.O,{mdxType:"PropNameCell"},"defaultValue"),(0,n.mdx)(R.Di,{mdxType:"TypeCell"},(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-javascript"},"unionOf: [\n  type: 'string',\n  type: 'number',\n  type: 'array',\n],\n"))),(0,n.mdx)(R.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,n.mdx)(R.mW,{mdxType:"DefaultValueCell"},(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-javascript"},"undefined\n"))),(0,n.mdx)(R.Ex,{mdxType:"DescriptionCell"},(0,n.mdx)("p",null,"The default value of the select. Can be a string, number, or array of strings/numbers."))),(0,n.mdx)(R.X2,{key:"ROW4",mdxType:"Row"},(0,n.mdx)(R.O,{mdxType:"PropNameCell"},"disabled"),(0,n.mdx)(R.Di,{mdxType:"TypeCell"},(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-javascript"},"bool\n"))),(0,n.mdx)(R.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,n.mdx)(R.mW,{mdxType:"DefaultValueCell"},(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-javascript"},"false\n"))),(0,n.mdx)(R.Ex,{mdxType:"DescriptionCell"},(0,n.mdx)("p",null,"Whether the input is disabled."))),(0,n.mdx)(R.X2,{key:"ROW5",mdxType:"Row"},(0,n.mdx)(R.O,{mdxType:"PropNameCell"},"error"),(0,n.mdx)(R.Di,{mdxType:"TypeCell"},(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-javascript"},"node\n"))),(0,n.mdx)(R.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,n.mdx)(R.mW,{mdxType:"DefaultValueCell"},(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-javascript"},"undefined\n"))),(0,n.mdx)(R.Ex,{mdxType:"DescriptionCell"},(0,n.mdx)("p",null,"Error message displayed when the select is invalid."))),(0,n.mdx)(R.X2,{key:"ROW6",mdxType:"Row"},(0,n.mdx)(R.O,{mdxType:"PropNameCell"},"help"),(0,n.mdx)(R.Di,{mdxType:"TypeCell"},(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-javascript"},"node\n"))),(0,n.mdx)(R.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,n.mdx)(R.mW,{mdxType:"DefaultValueCell"},(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-javascript"},"undefined\n"))),(0,n.mdx)(R.Ex,{mdxType:"DescriptionCell"},(0,n.mdx)("p",null,"Help message to display with the select."))),(0,n.mdx)(R.X2,{key:"ROW7",mdxType:"Row"},(0,n.mdx)(R.O,{mdxType:"PropNameCell"},"hideRequired"),(0,n.mdx)(R.Di,{mdxType:"TypeCell"},(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-javascript"},"bool\n"))),(0,n.mdx)(R.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,n.mdx)(R.mW,{mdxType:"DefaultValueCell"},(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-javascript"},"false\n"))),(0,n.mdx)(R.Ex,{mdxType:"DescriptionCell"},(0,n.mdx)("p",null,"Whether to hide the required indicator on the label."))),(0,n.mdx)(R.X2,{key:"ROW8",mdxType:"Row"},(0,n.mdx)(R.O,{mdxType:"PropNameCell"},"isIncomplete"),(0,n.mdx)(R.Di,{mdxType:"TypeCell"},(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-javascript"},"bool\n"))),(0,n.mdx)(R.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,n.mdx)(R.mW,{mdxType:"DefaultValueCell"},(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-javascript"},"false\n"))),(0,n.mdx)(R.Ex,{mdxType:"DescriptionCell"},(0,n.mdx)("p",null,"Whether the field displays as Incomplete. Use when no value has been provided. ",(0,n.mdx)("em",{parentName:"p"},"(usage note: ",(0,n.mdx)("inlineCode",{parentName:"em"},"required")," must also be set)"),"."))),(0,n.mdx)(R.X2,{key:"ROW9",mdxType:"Row"},(0,n.mdx)(R.O,{mdxType:"PropNameCell"},"isInline"),(0,n.mdx)(R.Di,{mdxType:"TypeCell"},(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-javascript"},"bool\n"))),(0,n.mdx)(R.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,n.mdx)(R.mW,{mdxType:"DefaultValueCell"},(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-javascript"},"false\n"))),(0,n.mdx)(R.Ex,{mdxType:"DescriptionCell"},(0,n.mdx)("p",null,"Whether the field is displayed inline. Displays block by default."))),(0,n.mdx)(R.X2,{key:"ROW10",mdxType:"Row"},(0,n.mdx)(R.O,{mdxType:"PropNameCell"},"isInvalid"),(0,n.mdx)(R.Di,{mdxType:"TypeCell"},(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-javascript"},"bool\n"))),(0,n.mdx)(R.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,n.mdx)(R.mW,{mdxType:"DefaultValueCell"},(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-javascript"},"false\n"))),(0,n.mdx)(R.Ex,{mdxType:"DescriptionCell"},(0,n.mdx)("p",null,"Whether the field displays as Invalid. Use when value does not meet validation pattern."))),(0,n.mdx)(R.X2,{key:"ROW11",mdxType:"Row"},(0,n.mdx)(R.O,{mdxType:"PropNameCell"},"isLabelHidden"),(0,n.mdx)(R.Di,{mdxType:"TypeCell"},(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-javascript"},"bool\n"))),(0,n.mdx)(R.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,n.mdx)(R.mW,{mdxType:"DefaultValueCell"},(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-javascript"},"false\n"))),(0,n.mdx)(R.Ex,{mdxType:"DescriptionCell"},(0,n.mdx)("p",null,"Whether the label is hidden. Allows hiding the label while meeting accessibility guidelines."))),(0,n.mdx)(R.X2,{key:"ROW12",mdxType:"Row"},(0,n.mdx)(R.O,{mdxType:"PropNameCell"},"isTouchAccessible"),(0,n.mdx)(R.Di,{mdxType:"TypeCell"},(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-javascript"},"bool\n"))),(0,n.mdx)(R.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,n.mdx)(R.mW,{mdxType:"DefaultValueCell"},(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-javascript"},"false\n"))),(0,n.mdx)(R.Ex,{mdxType:"DescriptionCell"},(0,n.mdx)("p",null,"Ensures touch accessibility by rendering the dropdown inline without a portal."),(0,n.mdx)("p",null,"Note: When enabled the dropdown will clip if rendered within a container that has an overflow: hidden ancestor.\nThe dropdown may also appear beneath content if rendered within a container that has an overflow: auto ancestor."))),(0,n.mdx)(R.X2,{key:"ROW13",mdxType:"Row"},(0,n.mdx)(R.O,{mdxType:"PropNameCell"},"labelAttrs"),(0,n.mdx)(R.Di,{mdxType:"TypeCell"},(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-javascript"},"object\n"))),(0,n.mdx)(R.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,n.mdx)(R.mW,{mdxType:"DefaultValueCell"},(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-javascript"},"{}\n"))),(0,n.mdx)(R.Ex,{mdxType:"DescriptionCell"},(0,n.mdx)("p",null,"Additional attributes to spread onto the label."))),(0,n.mdx)(R.X2,{key:"ROW14",mdxType:"Row"},(0,n.mdx)(R.O,{mdxType:"PropNameCell"},"maxSelectionCount"),(0,n.mdx)(R.Di,{mdxType:"TypeCell"},(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-javascript"},"number\n"))),(0,n.mdx)(R.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,n.mdx)(R.mW,{mdxType:"DefaultValueCell"},(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-javascript"},"undefined\n"))),(0,n.mdx)(R.Ex,{mdxType:"DescriptionCell"},(0,n.mdx)("p",null,"The maximum number of options that can be selected. A value less than 2 will be ignored."))),(0,n.mdx)(R.X2,{key:"ROW15",mdxType:"Row"},(0,n.mdx)(R.O,{mdxType:"PropNameCell"},"maxHeight"),(0,n.mdx)(R.Di,{mdxType:"TypeCell"},(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-javascript"},"number\n"))),(0,n.mdx)(R.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,n.mdx)(R.mW,{mdxType:"DefaultValueCell"},(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-javascript"},"undefined\n"))),(0,n.mdx)(R.Ex,{mdxType:"DescriptionCell"},(0,n.mdx)("p",null,"The max height of the dropdown."))),(0,n.mdx)(R.X2,{key:"ROW16",mdxType:"Row"},(0,n.mdx)(R.O,{mdxType:"PropNameCell"},"maxWidth"),(0,n.mdx)(R.Di,{mdxType:"TypeCell"},(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-javascript"},"string\n"))),(0,n.mdx)(R.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,n.mdx)(R.mW,{mdxType:"DefaultValueCell"},(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-javascript"},"undefined\n"))),(0,n.mdx)(R.Ex,{mdxType:"DescriptionCell"},(0,n.mdx)("p",null,"Set the max-width of a field using ",(0,n.mdx)("inlineCode",{parentName:"p"},"length")," or ",(0,n.mdx)("inlineCode",{parentName:"p"},"%"),".  Best practice recommendation to never exceed\na rendered value of 1020px. ",(0,n.mdx)("em",{parentName:"p"},"(Note: Providing custom inline styles will take precedence.)")))),(0,n.mdx)(R.X2,{key:"ROW17",mdxType:"Row"},(0,n.mdx)(R.O,{mdxType:"PropNameCell"},"onChange"),(0,n.mdx)(R.Di,{mdxType:"TypeCell"},(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-javascript"},"func\n"))),(0,n.mdx)(R.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,n.mdx)(R.mW,{mdxType:"DefaultValueCell"},(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-javascript"},"undefined\n"))),(0,n.mdx)(R.Ex,{mdxType:"DescriptionCell"},(0,n.mdx)("p",null,"Callback function triggered when the select value changes. function(value)"))),(0,n.mdx)(R.X2,{key:"ROW18",mdxType:"Row"},(0,n.mdx)(R.O,{mdxType:"PropNameCell"},"placeholder"),(0,n.mdx)(R.Di,{mdxType:"TypeCell"},(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-javascript"},"string\n"))),(0,n.mdx)(R.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,n.mdx)(R.mW,{mdxType:"DefaultValueCell"},(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-javascript"},"undefined\n"))),(0,n.mdx)(R.Ex,{mdxType:"DescriptionCell"},(0,n.mdx)("p",null,"Placeholder text."))),(0,n.mdx)(R.X2,{key:"ROW19",mdxType:"Row"},(0,n.mdx)(R.O,{mdxType:"PropNameCell"},"required"),(0,n.mdx)(R.Di,{mdxType:"TypeCell"},(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-javascript"},"bool\n"))),(0,n.mdx)(R.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,n.mdx)(R.mW,{mdxType:"DefaultValueCell"},(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-javascript"},"false\n"))),(0,n.mdx)(R.Ex,{mdxType:"DescriptionCell"},(0,n.mdx)("p",null,"Whether the field is required."))),(0,n.mdx)(R.X2,{key:"ROW20",mdxType:"Row"},(0,n.mdx)(R.O,{mdxType:"PropNameCell"},"selectAttrs"),(0,n.mdx)(R.Di,{mdxType:"TypeCell"},(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-javascript"},"object\n"))),(0,n.mdx)(R.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,n.mdx)(R.mW,{mdxType:"DefaultValueCell"},(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-javascript"},"{}\n"))),(0,n.mdx)(R.Ex,{mdxType:"DescriptionCell"},(0,n.mdx)("p",null,"Additional attributes to spread onto the select."))),(0,n.mdx)(R.X2,{key:"ROW21",mdxType:"Row"},(0,n.mdx)(R.O,{mdxType:"PropNameCell"},"selectId"),(0,n.mdx)(R.Di,{mdxType:"TypeCell"},(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-javascript"},"string\n"))),(0,n.mdx)(R.dS,{isRequired:!0,mdxType:"RequiredCell"}),(0,n.mdx)(R.mW,{mdxType:"DefaultValueCell"},(0,n.mdx)("p",null,"none")),(0,n.mdx)(R.Ex,{mdxType:"DescriptionCell"},(0,n.mdx)("p",null,"The Select identifier. Links the htmlFor of the field to the select identifier."))),(0,n.mdx)(R.X2,{key:"ROW22",mdxType:"Row"},(0,n.mdx)(R.O,{mdxType:"PropNameCell"},"showOptional"),(0,n.mdx)(R.Di,{mdxType:"TypeCell"},(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-javascript"},"bool\n"))),(0,n.mdx)(R.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,n.mdx)(R.mW,{mdxType:"DefaultValueCell"},(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-javascript"},"false\n"))),(0,n.mdx)(R.Ex,{mdxType:"DescriptionCell"},(0,n.mdx)("p",null,"Whether to append the 'optional' label to a non-required field label."))),(0,n.mdx)(R.X2,{key:"ROW23",mdxType:"Row"},(0,n.mdx)(R.O,{mdxType:"PropNameCell"},"value"),(0,n.mdx)(R.Di,{mdxType:"TypeCell"},(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-javascript"},"unionOf: [\n  type: 'string',\n  type: 'number',\n  type: 'array',\n],\n"))),(0,n.mdx)(R.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,n.mdx)(R.mW,{mdxType:"DefaultValueCell"},(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-javascript"},"undefined\n"))),(0,n.mdx)(R.Ex,{mdxType:"DescriptionCell"},(0,n.mdx)("p",null,"The value of the select. Can be a string, number, or array of strings/numbers.")))))}F.isMDXComponent=!0;var k=["components"];function I(){return I=Object.assign?Object.assign.bind():function(e){for(var l=1;l<arguments.length;l++){var a=arguments[l];for(var t in a)Object.prototype.hasOwnProperty.call(a,t)&&(e[t]=a[t])}return e},I.apply(this,arguments)}function L(e,l){if(null==e)return{};var a,t,n=function(e,l){if(null==e)return{};var a,t,n={},r=Object.keys(e);for(t=0;t<r.length;t++)a=r[t],l.indexOf(a)>=0||(n[a]=e[a]);return n}(e,l);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)a=r[t],l.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var X={},M="wrapper";function V(e){var l=e.components,a=L(e,k);return(0,n.mdx)(M,I({},X,a,{components:l,mdxType:"MDXLayout"}),(0,n.mdx)(r.C,{mdxType:"Badge"}),(0,n.mdx)("h1",{id:"terra-form-tag-select-field"},"Terra Form Tag Select Field"),(0,n.mdx)("p",null,"A convenience wrapper assembling a ",(0,n.mdx)("a",{parentName:"p",href:"https://github.com/cerner/terra-core/tree/main/packages/terra-form-select/src/TagSelect.jsx"},"terra-form-select TagSelect")," within a ",(0,n.mdx)("a",{parentName:"p",href:"https://github.com/cerner/terra-core/tree/main/packages/terra-form-field"},"terra-form-field"),"."),(0,n.mdx)("h2",{id:"getting-started"},"Getting Started"),(0,n.mdx)("ul",null,(0,n.mdx)("li",{parentName:"ul"},"Install with ",(0,n.mdx)("a",{parentName:"li",href:"https://www.npmjs.com/"},"npmjs"),":",(0,n.mdx)("ul",{parentName:"li"},(0,n.mdx)("li",{parentName:"ul"},(0,n.mdx)("inlineCode",{parentName:"li"},"npm install terra-form-select"))))),(0,n.mdx)("h2",{id:"usage"},"Usage"),(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-jsx"},"import TagSelectField from 'terra-form-select/lib/TagSelectField';\n")),(0,n.mdx)("h2",{id:"component-features"},"Component Features"),(0,n.mdx)("ul",null,(0,n.mdx)("li",{parentName:"ul"},(0,n.mdx)("a",{parentName:"li",href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#cross-browser-support"},"Cross-Browser Support")),(0,n.mdx)("li",{parentName:"ul"},(0,n.mdx)("a",{parentName:"li",href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#responsive-support"},"Responsive Support")),(0,n.mdx)("li",{parentName:"ul"},(0,n.mdx)("a",{parentName:"li",href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#mobile-support"},"Mobile Support")),(0,n.mdx)("li",{parentName:"ul"},(0,n.mdx)("a",{parentName:"li",href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#internationalization-i18n"},"Internationalization Support")),(0,n.mdx)("li",{parentName:"ul"},(0,n.mdx)("a",{parentName:"li",href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#internationalization-i18n"},"Localization Support")),(0,n.mdx)("li",{parentName:"ul"},(0,n.mdx)("a",{parentName:"li",href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#ltr--rtl"},"LTR/RTL Support"))),(0,n.mdx)("h2",{id:"examples"},"Examples"),(0,n.mdx)(x,{title:"Tag Select Field Example",mdxType:"TagSelectFieldExample"}),(0,n.mdx)(b,{title:"Required Tag Select Field Example",mdxType:"RequiredTagSelectFieldExample"}),(0,n.mdx)(j,{title:"Incomplete Tag Select Field Example",description:"Applies theme-specific styling for incomplete. ***Note: Only use incomplete if given specific guidance, reserved for specific applications when no value has been provided. Not for general use.***",mdxType:"IncompleteTagSelectFieldExample"}),(0,n.mdx)("h2",{id:"tag-select-field-props"},"Tag Select Field Props"),(0,n.mdx)(F,{mdxType:"TagSelectFieldPropsTable"}))}V.isMDXComponent=!0},15305:function(e,l,a){a.d(l,{Z:function(){return o}});a(67294);var t=a(81254),n=["components"];function r(){return r=Object.assign?Object.assign.bind():function(e){for(var l=1;l<arguments.length;l++){var a=arguments[l];for(var t in a)Object.prototype.hasOwnProperty.call(a,t)&&(e[t]=a[t])}return e},r.apply(this,arguments)}function d(e,l){if(null==e)return{};var a,t,n=function(e,l){if(null==e)return{};var a,t,n={},r=Object.keys(e);for(t=0;t<r.length;t++)a=r[t],l.indexOf(a)>=0||(n[a]=e[a]);return n}(e,l);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)a=r[t],l.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var m={},i="wrapper";function o(e){var l=e.components,a=d(e,n);return(0,t.mdx)(i,r({},m,a,{components:l,mdxType:"MDXLayout"}),(0,t.mdx)("pre",null,(0,t.mdx)("code",{parentName:"pre",className:"language-scss"},"// import themes\n@import './clinical-lowlight-theme/FormSelectDocCommon.module';\n@import './orion-fusion-theme/FormSelectDocCommon.module';\n\n:local {\n  .form-select {\n    max-width: 300px;\n  }\n\n  .controlled-button {\n    margin: 5px;\n  }\n  \n  .error-text {\n    color: var(--terra-core-docs-form-select-error-text-color, #e50000);\n    font-size: 0.857rem;\n    font-weight: normal;\n    line-height: 1.25;\n    margin-top: 0.357em;\n    outline: 0;\n    text-align: left;\n  }\n\n  .field-label {\n    font-weight: 700;\n  }\n}\n\n")))}o.isMDXComponent=!0},57739:function(e,l,a){a.d(l,{C:function(){return r}});var t=a(67294),n=a(22863),r=function(e){var l=e.url;return t.createElement(n.Z,{src:"https://github.com/cerner/terra-core/tree/main/packages/terra-form-select",name:"terra-form-select",version:"6.54.0",url:l})}},48824:function(e,l,a){a.r(l),l.default={"form-select":"FormSelectDocCommon-module__form-select___Tm1QE","controlled-button":"FormSelectDocCommon-module__controlled-button___wG6cn","error-text":"FormSelectDocCommon-module__error-text___lKsl1","field-label":"FormSelectDocCommon-module__field-label___h3hRZ"}},53560:function(e,l,a){a.r(l),l.default={"clinical-lowlight-theme":"ExampleTemplate-module__clinical-lowlight-theme___rBbtD","orion-fusion-theme":"ExampleTemplate-module__orion-fusion-theme___GzA23",template:"ExampleTemplate-module__template___a4uPk",header:"ExampleTemplate-module__header___iFXV3",content:"ExampleTemplate-module__content___48m4Q",description:"ExampleTemplate-module__description___NwBJo",footer:"ExampleTemplate-module__footer___GpSoG","button-container":"ExampleTemplate-module__button-container___rAD11",css:"ExampleTemplate-module__css___+jtk1",code:"ExampleTemplate-module__code___7rC6C","css-toggle":"ExampleTemplate-module__css-toggle___chHK7","code-toggle":"ExampleTemplate-module__code-toggle___TGlE-","is-selected":"ExampleTemplate-module__is-selected___0BYwS",item:"ExampleTemplate-module__item___8FTQq",chevron:"ExampleTemplate-module__chevron___VbY7N",title:"ExampleTemplate-module__title___r+nbJ","dynamic-content":"ExampleTemplate-module__dynamic-content___k+1H7"}},52846:function(e,l,a){Object.defineProperty(l,"__esModule",{value:!0}),l.default=void 0;var t=s(a(67294)),n=s(a(45697)),r=a(25387),d=s(a(47717)),m=s(a(14708)),i=s(a(87786)),o=s(a(88413)),p=["children","defaultValue","disabled","error","help","hideRequired","intl","isIncomplete","isInline","isInvalid","isLabelHidden","isTouchAccessible","label","labelAttrs","maxSelectionCount","maxHeight","maxWidth","onChange","placeholder","required","selectAttrs","selectId","showOptional","value"];function s(e){return e&&e.__esModule?e:{default:e}}function u(){return u=Object.assign?Object.assign.bind():function(e){for(var l=1;l<arguments.length;l++){var a=arguments[l];for(var t in a)Object.prototype.hasOwnProperty.call(a,t)&&(e[t]=a[t])}return e},u.apply(this,arguments)}function c(e,l){if(null==e)return{};var a,t,n=function(e,l){if(null==e)return{};var a,t,n={},r=Object.keys(e);for(t=0;t<r.length;t++)a=r[t],l.indexOf(a)>=0||(n[a]=e[a]);return n}(e,l);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)a=r[t],l.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var x={children:n.default.node,label:n.default.string.isRequired,defaultValue:n.default.oneOfType([n.default.string,n.default.number,n.default.array]),disabled:n.default.bool,error:n.default.node,help:n.default.node,hideRequired:n.default.bool,intl:n.default.shape({formatMessage:n.default.func}).isRequired,isIncomplete:n.default.bool,isInline:n.default.bool,isInvalid:n.default.bool,isLabelHidden:n.default.bool,isTouchAccessible:n.default.bool,labelAttrs:n.default.object,maxSelectionCount:n.default.number,maxHeight:n.default.number,maxWidth:n.default.string,onChange:n.default.func,placeholder:n.default.string,required:n.default.bool,selectAttrs:n.default.object,selectId:n.default.string.isRequired,showOptional:n.default.bool,value:n.default.oneOfType([n.default.string,n.default.number,n.default.array])},f={children:void 0,defaultValue:void 0,disabled:!1,error:void 0,help:void 0,hideRequired:!1,isIncomplete:!1,isInline:!1,isInvalid:!1,isLabelHidden:!1,isTouchAccessible:!1,labelAttrs:{},maxSelectionCount:void 0,maxHeight:void 0,maxWidth:void 0,onChange:void 0,placeholder:void 0,required:!1,selectAttrs:{},showOptional:!1,value:void 0},y=function(e){var l,a=e.children,n=e.defaultValue,r=e.disabled,i=e.error,o=e.help,s=e.hideRequired,x=e.intl,f=e.isIncomplete,y=e.isInline,g=e.isInvalid,T=e.isLabelHidden,h=e.isTouchAccessible,v=e.label,b=e.labelAttrs,O=e.maxSelectionCount,N=e.maxHeight,C=e.maxWidth,S=e.onChange,E=e.placeholder,_=e.required,j=e.selectAttrs,R=e.selectId,w=e.showOptional,D=e.value,q=c(e,p),W=o;if(void 0!==O&&O>=2){var P=x.formatMessage({id:"Terra.form.select.maxSelectionHelp"},{text:O});W=o?t.default.createElement("span",null,P," ",o):P}return o&&i&&g?l="".concat(R,"-error ").concat(R,"-help"):(o&&(l="".concat(R,"-help")),i&&g&&(l="".concat(R,"-error"))),t.default.createElement(d.default,u({},q,{label:v,labelAttrs:b,error:i,help:W,hideRequired:s,required:_,showOptional:w,isInvalid:g,isInline:y,isLabelHidden:T,htmlFor:R,maxWidth:C}),t.default.createElement(m.default,u({},j,{ariaLabel:v,"aria-describedby":l,disabled:j.disabled||r,inputId:R,isIncomplete:f,isInvalid:g,isTouchAccessible:h,defaultValue:n,maxHeight:N||j.maxHeight,maxSelectionCount:void 0!==O&&O<2?void 0:O,onChange:S,placeholder:E,required:_,value:D}),a))};y.propTypes=x,y.defaultProps=f,y.Option=o.default,y.OptGroup=i.default;l.default=(0,r.injectIntl)(y)},33864:function(e,l,a){Object.defineProperty(l,"__esModule",{value:!0}),l.default=void 0;var t=r(a(67294)),n=r(a(99139));function r(e){return e&&e.__esModule?e:{default:e}}function d(){return d=Object.assign?Object.assign.bind():function(e){for(var l=1;l<arguments.length;l++){var a=arguments[l];for(var t in a)Object.prototype.hasOwnProperty.call(a,t)&&(e[t]=a[t])}return e},d.apply(this,arguments)}var m=function(e){var l=d({},e);return t.default.createElement(n.default,l,t.default.createElement("path",{d:"M10.3 24 33.8 0l3.9 3.8L18 24l19.7 20.2-3.9 3.8z"}))};m.displayName="IconChevronLeft",m.defaultProps={viewBox:"0 0 48 48","data-name":"Layer 1",xmlns:"http://www.w3.org/2000/svg"};l.default=m}}]);