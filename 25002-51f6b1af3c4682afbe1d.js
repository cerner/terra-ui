"use strict";(self.webpackChunkterra_ui=self.webpackChunkterra_ui||[]).push([[25002],{58698:function(e,l,a){l.Z=void 0;var t=m(a(67294)),r=m(a(96588)),n=m(a(47166)),d=m(a(48824));function m(e){return e&&e.__esModule?e:{default:e}}var i=n.default.bind(d.default),o=function(){return t.default.createElement(r.default,{required:!0,isIncomplete:!0,label:"T-shirt size",placeholder:"Select a size",selectId:"tshirt-size-field-1",className:i("form-select")},t.default.createElement(r.default.Option,{value:"xSmall",display:"Extra Small"}),t.default.createElement(r.default.Option,{value:"small",display:"Small"}),t.default.createElement(r.default.Option,{value:"medium",display:"Medium"}),t.default.createElement(r.default.Option,{value:"large",display:"Large"}),t.default.createElement(r.default.Option,{value:"xLarge",display:"Extra Large"}))};l.Z=o},68215:function(e,l,a){l.Z=void 0;var t=m(a(67294)),r=m(a(96588)),n=m(a(47166)),d=m(a(48824));function m(e){return e&&e.__esModule?e:{default:e}}var i=n.default.bind(d.default),o=function(){return t.default.createElement(r.default,{label:"T-shirt size",placeholder:"Select a size",selectId:"tshirt-size-field-2",required:!0,className:i("form-select")},t.default.createElement(r.default.Option,{value:"xSmall",display:"Extra Small"}),t.default.createElement(r.default.Option,{value:"small",display:"Small"}),t.default.createElement(r.default.Option,{value:"medium",display:"Medium"}),t.default.createElement(r.default.Option,{value:"large",display:"Large"}),t.default.createElement(r.default.Option,{value:"xLarge",display:"Extra Large"}))};l.Z=o},82733:function(e,l,a){l.Z=void 0;var t=m(a(67294)),r=m(a(96588)),n=m(a(47166)),d=m(a(48824));function m(e){return e&&e.__esModule?e:{default:e}}var i=n.default.bind(d.default),o=function(){return t.default.createElement(r.default,{label:"T-shirt size",placeholder:"Select a size",selectId:"tshirt-size-field-3",className:i("form-select")},t.default.createElement(r.default.Option,{value:"xSmall",display:"Extra Small"}),t.default.createElement(r.default.Option,{value:"small",display:"Small"}),t.default.createElement(r.default.Option,{value:"medium",display:"Medium"}),t.default.createElement(r.default.Option,{value:"large",display:"Large"}),t.default.createElement(r.default.Option,{value:"xLarge",display:"Extra Large"}))};l.Z=o},49271:function(e,l,a){var t=a(64836),r=a(18698);l.Z=void 0;var n=t(a(27424)),d=function(e,l){if(!l&&e&&e.__esModule)return e;if(null===e||"object"!==r(e)&&"function"!=typeof e)return{default:e};var a=x(l);if(a&&a.has(e))return a.get(e);var t={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var d in e)if("default"!==d&&Object.prototype.hasOwnProperty.call(e,d)){var m=n?Object.getOwnPropertyDescriptor(e,d):null;m&&(m.get||m.set)?Object.defineProperty(t,d,m):t[d]=e[d]}t.default=e,a&&a.set(e,t);return t}(a(67294)),m=t(a(45697)),i=t(a(47166)),o=a(21538),p=t(a(33864)),s=t(a(23399)),u=a(51051),c=t(a(53560));function x(e){if("function"!=typeof WeakMap)return null;var l=new WeakMap,a=new WeakMap;return(x=function(e){return e?a:l})(e)}var f=i.default.bind(c.default),y={example:m.default.element,exampleSrc:m.default.element,exampleCssSrc:m.default.element,title:m.default.string,description:m.default.node,isExpanded:m.default.bool},h=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","true")},g=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","false")},v=function(e){var l=e.example,a=e.exampleSrc,t=e.exampleCssSrc,r=e.title,m=e.description,i=e.isExpanded,c=(0,d.useState)(i),x=(0,n.default)(c,2),y=x[0],v=x[1],b=(0,d.useState)(!1),T=(0,n.default)(b,2),O=T[0],S=T[1],N=d.default.useContext(o.ThemeContext),C=void 0!==t,E=function(){S(!O),y&&v(!y)},_=function(){v(!y),O&&S(!O)},j=function(e,l){e.nativeEvent.keyCode!==u.KEY_SPACE&&e.nativeEvent.keyCode!==u.KEY_RETURN||(e.preventDefault(),l())};return d.default.createElement("div",{className:f("template",N.className)},d.default.createElement("div",{className:f("header")},r&&d.default.createElement("h2",{className:f("title")},r)),d.default.createElement("div",{className:f("content")},m&&d.default.createElement("div",{className:f("description")},m),l),d.default.createElement("div",{className:f("footer")},a?d.default.createElement("div",{className:f("button-container")},C&&d.default.createElement("button",{type:"button",className:f("css-toggle","item",{"is-selected":O}),onClick:E,onKeyDown:function(e){return j(e,E)},onBlur:h,onMouseDown:g,tabIndex:0,"data-focus-styles-enabled":!0},d.default.createElement(p.default,{className:f("chevron")}),d.default.createElement("span",null,"CSS"),d.default.createElement(s.default,{className:f("chevron")})),d.default.createElement("button",{type:"button",className:f("code-toggle","item",{"is-selected":y}),onClick:_,onKeyDown:function(e){return j(e,_)},onBlur:h,onMouseDown:g,tabIndex:0,"data-focus-styles-enabled":!0},d.default.createElement(p.default,{className:f("chevron")}),d.default.createElement("span",null,"Code"),d.default.createElement(s.default,{className:f("chevron")}))):null,d.default.createElement("div",null,O&&d.default.createElement("div",{className:f("css")},t),y&&d.default.createElement("div",{className:f("code")},a))))};v.propTypes=y,v.defaultProps={isExpanded:!1};var b=v;l.Z=b},83634:function(e,l,a){a.r(l),a.d(l,{default:function(){return Z}});var t=a(67294),r=a(81254),n=a(57739),d=a(82733),m=["components"];function i(){return i=Object.assign?Object.assign.bind():function(e){for(var l=1;l<arguments.length;l++){var a=arguments[l];for(var t in a)Object.prototype.hasOwnProperty.call(a,t)&&(e[t]=a[t])}return e},i.apply(this,arguments)}function o(e,l){if(null==e)return{};var a,t,r=function(e,l){if(null==e)return{};var a,t,r={},n=Object.keys(e);for(t=0;t<n.length;t++)a=n[t],l.indexOf(a)>=0||(r[a]=e[a]);return r}(e,l);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(t=0;t<n.length;t++)a=n[t],l.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p={},s="wrapper";function u(e){var l=e.components,a=o(e,m);return(0,r.mdx)(s,i({},p,a,{components:l,mdxType:"MDXLayout"}),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-jsx"},'import React from \'react\';\nimport SearchSelectField from \'terra-form-select/lib/SearchSelectField\';\nimport classNames from \'classnames/bind\';\nimport styles from \'../FormSelectDocCommon.module.scss\';\n\nconst cx = classNames.bind(styles);\n\nconst SearchSelectFieldExample = () => (\n  <SearchSelectField label="T-shirt size" placeholder="Select a size" selectId="tshirt-size-field-3" className={cx(\'form-select\')}>\n    <SearchSelectField.Option value="xSmall" display="Extra Small" />\n    <SearchSelectField.Option value="small" display="Small" />\n    <SearchSelectField.Option value="medium" display="Medium" />\n    <SearchSelectField.Option value="large" display="Large" />\n    <SearchSelectField.Option value="xLarge" display="Extra Large" />\n  </SearchSelectField>\n);\n\nexport default SearchSelectFieldExample;\n\n')))}u.isMDXComponent=!0;var c=a(49271),x=a(15305),f=function(e){var l=e.title,a=e.description,r=e.isExpanded;return t.createElement(c.Z,{title:l||"Search Select Field",description:a,example:t.createElement(d.Z,null),exampleCssSrc:t.createElement(x.Z,null),exampleSrc:t.createElement(u,null),isExpanded:r})},y=a(68215),h=["components"];function g(){return g=Object.assign?Object.assign.bind():function(e){for(var l=1;l<arguments.length;l++){var a=arguments[l];for(var t in a)Object.prototype.hasOwnProperty.call(a,t)&&(e[t]=a[t])}return e},g.apply(this,arguments)}function v(e,l){if(null==e)return{};var a,t,r=function(e,l){if(null==e)return{};var a,t,r={},n=Object.keys(e);for(t=0;t<n.length;t++)a=n[t],l.indexOf(a)>=0||(r[a]=e[a]);return r}(e,l);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(t=0;t<n.length;t++)a=n[t],l.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var b={},T="wrapper";function O(e){var l=e.components,a=v(e,h);return(0,r.mdx)(T,g({},b,a,{components:l,mdxType:"MDXLayout"}),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-jsx"},'import React from \'react\';\nimport SearchSelectField from \'terra-form-select/lib/SearchSelectField\';\nimport classNames from \'classnames/bind\';\nimport styles from \'../FormSelectDocCommon.module.scss\';\n\nconst cx = classNames.bind(styles);\n\nconst SearchSelectFieldExample = () => (\n  <SearchSelectField label="T-shirt size" placeholder="Select a size" selectId="tshirt-size-field-2" required className={cx(\'form-select\')}>\n    <SearchSelectField.Option value="xSmall" display="Extra Small" />\n    <SearchSelectField.Option value="small" display="Small" />\n    <SearchSelectField.Option value="medium" display="Medium" />\n    <SearchSelectField.Option value="large" display="Large" />\n    <SearchSelectField.Option value="xLarge" display="Extra Large" />\n  </SearchSelectField>\n);\n\nexport default SearchSelectFieldExample;\n\n')))}O.isMDXComponent=!0;var S=function(e){var l=e.title,a=e.description,r=e.isExpanded;return t.createElement(c.Z,{title:l||"Required Search Select Field",description:a,example:t.createElement(y.Z,null),exampleCssSrc:t.createElement(x.Z,null),exampleSrc:t.createElement(O,null),isExpanded:r})},N=a(58698),C=["components"];function E(){return E=Object.assign?Object.assign.bind():function(e){for(var l=1;l<arguments.length;l++){var a=arguments[l];for(var t in a)Object.prototype.hasOwnProperty.call(a,t)&&(e[t]=a[t])}return e},E.apply(this,arguments)}function _(e,l){if(null==e)return{};var a,t,r=function(e,l){if(null==e)return{};var a,t,r={},n=Object.keys(e);for(t=0;t<n.length;t++)a=n[t],l.indexOf(a)>=0||(r[a]=e[a]);return r}(e,l);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(t=0;t<n.length;t++)a=n[t],l.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var j={},R="wrapper";function w(e){var l=e.components,a=_(e,C);return(0,r.mdx)(R,E({},j,a,{components:l,mdxType:"MDXLayout"}),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-jsx"},'import React from \'react\';\nimport SearchSelectField from \'terra-form-select/lib/SearchSelectField\';\nimport classNames from \'classnames/bind\';\nimport styles from \'../FormSelectDocCommon.module.scss\';\n\nconst cx = classNames.bind(styles);\n\nconst SearchSelectFieldExample = () => (\n  <SearchSelectField required isIncomplete label="T-shirt size" placeholder="Select a size" selectId="tshirt-size-field-1" className={cx(\'form-select\')}>\n    <SearchSelectField.Option value="xSmall" display="Extra Small" />\n    <SearchSelectField.Option value="small" display="Small" />\n    <SearchSelectField.Option value="medium" display="Medium" />\n    <SearchSelectField.Option value="large" display="Large" />\n    <SearchSelectField.Option value="xLarge" display="Extra Large" />\n  </SearchSelectField>\n);\n\nexport default SearchSelectFieldExample;\n\n')))}w.isMDXComponent=!0;var D=function(e){var l=e.title,a=e.description,r=e.isExpanded;return t.createElement(c.Z,{title:l||"Incomplete Search Select Field",description:a,example:t.createElement(N.Z,null),exampleCssSrc:t.createElement(x.Z,null),exampleSrc:t.createElement(w,null),isExpanded:r})},q=a(78530),P=["components"];function W(){return W=Object.assign?Object.assign.bind():function(e){for(var l=1;l<arguments.length;l++){var a=arguments[l];for(var t in a)Object.prototype.hasOwnProperty.call(a,t)&&(e[t]=a[t])}return e},W.apply(this,arguments)}function F(e,l){if(null==e)return{};var a,t,r=function(e,l){if(null==e)return{};var a,t,r={},n=Object.keys(e);for(t=0;t<n.length;t++)a=n[t],l.indexOf(a)>=0||(r[a]=e[a]);return r}(e,l);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(t=0;t<n.length;t++)a=n[t],l.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var k={},I="wrapper";function L(e){var l=e.components,a=F(e,P);return(0,r.mdx)(I,W({},k,a,{components:l,mdxType:"MDXLayout"}),(0,r.mdx)(q.ZP,{mdxType:"PropsTable"},(0,r.mdx)(q.X2,{key:"ROW1",mdxType:"Row"},(0,r.mdx)(q.O,{mdxType:"PropNameCell"},"allowClear"),(0,r.mdx)(q.Di,{mdxType:"TypeCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"bool\n"))),(0,r.mdx)(q.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,r.mdx)(q.mW,{mdxType:"DefaultValueCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"false\n"))),(0,r.mdx)(q.Ex,{mdxType:"DescriptionCell"},(0,r.mdx)("p",null,"Whether a clear option is available to clear the selection."))),(0,r.mdx)(q.X2,{key:"ROW2",mdxType:"Row"},(0,r.mdx)(q.O,{mdxType:"PropNameCell"},"children"),(0,r.mdx)(q.Di,{mdxType:"TypeCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"node\n"))),(0,r.mdx)(q.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,r.mdx)(q.mW,{mdxType:"DefaultValueCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"undefined\n"))),(0,r.mdx)(q.Ex,{mdxType:"DescriptionCell"},(0,r.mdx)("p",null,"The select options."))),(0,r.mdx)(q.X2,{key:"ROW3",mdxType:"Row"},(0,r.mdx)(q.O,{mdxType:"PropNameCell"},"label"),(0,r.mdx)(q.Di,{mdxType:"TypeCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"string\n"))),(0,r.mdx)(q.dS,{isRequired:!0,mdxType:"RequiredCell"}),(0,r.mdx)(q.mW,{mdxType:"DefaultValueCell"},(0,r.mdx)("p",null,"none")),(0,r.mdx)(q.Ex,{mdxType:"DescriptionCell"},(0,r.mdx)("p",null,"The field label."))),(0,r.mdx)(q.X2,{key:"ROW4",mdxType:"Row"},(0,r.mdx)(q.O,{mdxType:"PropNameCell"},"defaultValue"),(0,r.mdx)(q.Di,{mdxType:"TypeCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"unionOf: [\n  type: 'string',\n  type: 'number',\n  type: 'array',\n],\n"))),(0,r.mdx)(q.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,r.mdx)(q.mW,{mdxType:"DefaultValueCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"undefined\n"))),(0,r.mdx)(q.Ex,{mdxType:"DescriptionCell"},(0,r.mdx)("p",null,"The default value of the select. Can be a string, number, or array of strings/numbers."))),(0,r.mdx)(q.X2,{key:"ROW5",mdxType:"Row"},(0,r.mdx)(q.O,{mdxType:"PropNameCell"},"disabled"),(0,r.mdx)(q.Di,{mdxType:"TypeCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"bool\n"))),(0,r.mdx)(q.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,r.mdx)(q.mW,{mdxType:"DefaultValueCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"false\n"))),(0,r.mdx)(q.Ex,{mdxType:"DescriptionCell"},(0,r.mdx)("p",null,"Whether the input is disabled."))),(0,r.mdx)(q.X2,{key:"ROW6",mdxType:"Row"},(0,r.mdx)(q.O,{mdxType:"PropNameCell"},"error"),(0,r.mdx)(q.Di,{mdxType:"TypeCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"node\n"))),(0,r.mdx)(q.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,r.mdx)(q.mW,{mdxType:"DefaultValueCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"undefined\n"))),(0,r.mdx)(q.Ex,{mdxType:"DescriptionCell"},(0,r.mdx)("p",null,"Error message displayed when the select is invalid."))),(0,r.mdx)(q.X2,{key:"ROW7",mdxType:"Row"},(0,r.mdx)(q.O,{mdxType:"PropNameCell"},"help"),(0,r.mdx)(q.Di,{mdxType:"TypeCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"node\n"))),(0,r.mdx)(q.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,r.mdx)(q.mW,{mdxType:"DefaultValueCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"undefined\n"))),(0,r.mdx)(q.Ex,{mdxType:"DescriptionCell"},(0,r.mdx)("p",null,"Help message to display with the select."))),(0,r.mdx)(q.X2,{key:"ROW8",mdxType:"Row"},(0,r.mdx)(q.O,{mdxType:"PropNameCell"},"hideRequired"),(0,r.mdx)(q.Di,{mdxType:"TypeCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"bool\n"))),(0,r.mdx)(q.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,r.mdx)(q.mW,{mdxType:"DefaultValueCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"false\n"))),(0,r.mdx)(q.Ex,{mdxType:"DescriptionCell"},(0,r.mdx)("p",null,"Whether to hide the required indicator on the label."))),(0,r.mdx)(q.X2,{key:"ROW9",mdxType:"Row"},(0,r.mdx)(q.O,{mdxType:"PropNameCell"},"isIncomplete"),(0,r.mdx)(q.Di,{mdxType:"TypeCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"bool\n"))),(0,r.mdx)(q.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,r.mdx)(q.mW,{mdxType:"DefaultValueCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"false\n"))),(0,r.mdx)(q.Ex,{mdxType:"DescriptionCell"},(0,r.mdx)("p",null,"Whether the field displays as Incomplete. Use when no value has been provided. ",(0,r.mdx)("em",{parentName:"p"},"(usage note: ",(0,r.mdx)("inlineCode",{parentName:"em"},"required")," must also be set)"),"."))),(0,r.mdx)(q.X2,{key:"ROW10",mdxType:"Row"},(0,r.mdx)(q.O,{mdxType:"PropNameCell"},"isInline"),(0,r.mdx)(q.Di,{mdxType:"TypeCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"bool\n"))),(0,r.mdx)(q.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,r.mdx)(q.mW,{mdxType:"DefaultValueCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"false\n"))),(0,r.mdx)(q.Ex,{mdxType:"DescriptionCell"},(0,r.mdx)("p",null,"Whether the field is displayed inline. Displays block by default."))),(0,r.mdx)(q.X2,{key:"ROW11",mdxType:"Row"},(0,r.mdx)(q.O,{mdxType:"PropNameCell"},"isInvalid"),(0,r.mdx)(q.Di,{mdxType:"TypeCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"bool\n"))),(0,r.mdx)(q.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,r.mdx)(q.mW,{mdxType:"DefaultValueCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"false\n"))),(0,r.mdx)(q.Ex,{mdxType:"DescriptionCell"},(0,r.mdx)("p",null,"Whether the field displays as Invalid. Use when value does not meet validation pattern."))),(0,r.mdx)(q.X2,{key:"ROW12",mdxType:"Row"},(0,r.mdx)(q.O,{mdxType:"PropNameCell"},"isLabelHidden"),(0,r.mdx)(q.Di,{mdxType:"TypeCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"bool\n"))),(0,r.mdx)(q.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,r.mdx)(q.mW,{mdxType:"DefaultValueCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"false\n"))),(0,r.mdx)(q.Ex,{mdxType:"DescriptionCell"},(0,r.mdx)("p",null,"Whether the label is hidden. Allows hiding the label while meeting accessibility guidelines."))),(0,r.mdx)(q.X2,{key:"ROW13",mdxType:"Row"},(0,r.mdx)(q.O,{mdxType:"PropNameCell"},"isTouchAccessible"),(0,r.mdx)(q.Di,{mdxType:"TypeCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"bool\n"))),(0,r.mdx)(q.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,r.mdx)(q.mW,{mdxType:"DefaultValueCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"false\n"))),(0,r.mdx)(q.Ex,{mdxType:"DescriptionCell"},(0,r.mdx)("p",null,"Ensures touch accessibility by rendering the dropdown inline without a portal."),(0,r.mdx)("p",null,"Note: When enabled the dropdown will clip if rendered within a container that has an overflow: hidden ancestor.\nThe dropdown may also appear beneath content if rendered within a container that has an overflow: auto ancestor."))),(0,r.mdx)(q.X2,{key:"ROW14",mdxType:"Row"},(0,r.mdx)(q.O,{mdxType:"PropNameCell"},"labelAttrs"),(0,r.mdx)(q.Di,{mdxType:"TypeCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"object\n"))),(0,r.mdx)(q.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,r.mdx)(q.mW,{mdxType:"DefaultValueCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"{}\n"))),(0,r.mdx)(q.Ex,{mdxType:"DescriptionCell"},(0,r.mdx)("p",null,"Additional attributes to spread onto the label."))),(0,r.mdx)(q.X2,{key:"ROW15",mdxType:"Row"},(0,r.mdx)(q.O,{mdxType:"PropNameCell"},"maxHeight"),(0,r.mdx)(q.Di,{mdxType:"TypeCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"number\n"))),(0,r.mdx)(q.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,r.mdx)(q.mW,{mdxType:"DefaultValueCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"undefined\n"))),(0,r.mdx)(q.Ex,{mdxType:"DescriptionCell"},(0,r.mdx)("p",null,"The max height of the dropdown."))),(0,r.mdx)(q.X2,{key:"ROW16",mdxType:"Row"},(0,r.mdx)(q.O,{mdxType:"PropNameCell"},"maxWidth"),(0,r.mdx)(q.Di,{mdxType:"TypeCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"string\n"))),(0,r.mdx)(q.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,r.mdx)(q.mW,{mdxType:"DefaultValueCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"undefined\n"))),(0,r.mdx)(q.Ex,{mdxType:"DescriptionCell"},(0,r.mdx)("p",null,"Set the max-width of a field using ",(0,r.mdx)("inlineCode",{parentName:"p"},"length")," or ",(0,r.mdx)("inlineCode",{parentName:"p"},"%"),".  Best practice recommendation to never exceed\na rendered value of 1020px. ",(0,r.mdx)("em",{parentName:"p"},"(Note: Providing custom inline styles will take precedence.)")))),(0,r.mdx)(q.X2,{key:"ROW17",mdxType:"Row"},(0,r.mdx)(q.O,{mdxType:"PropNameCell"},"onChange"),(0,r.mdx)(q.Di,{mdxType:"TypeCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"func\n"))),(0,r.mdx)(q.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,r.mdx)(q.mW,{mdxType:"DefaultValueCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"undefined\n"))),(0,r.mdx)(q.Ex,{mdxType:"DescriptionCell"},(0,r.mdx)("p",null,"Callback function triggered when the select value changes. function(value)"))),(0,r.mdx)(q.X2,{key:"ROW18",mdxType:"Row"},(0,r.mdx)(q.O,{mdxType:"PropNameCell"},"placeholder"),(0,r.mdx)(q.Di,{mdxType:"TypeCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"string\n"))),(0,r.mdx)(q.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,r.mdx)(q.mW,{mdxType:"DefaultValueCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"undefined\n"))),(0,r.mdx)(q.Ex,{mdxType:"DescriptionCell"},(0,r.mdx)("p",null,"Placeholder text."))),(0,r.mdx)(q.X2,{key:"ROW19",mdxType:"Row"},(0,r.mdx)(q.O,{mdxType:"PropNameCell"},"required"),(0,r.mdx)(q.Di,{mdxType:"TypeCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"bool\n"))),(0,r.mdx)(q.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,r.mdx)(q.mW,{mdxType:"DefaultValueCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"false\n"))),(0,r.mdx)(q.Ex,{mdxType:"DescriptionCell"},(0,r.mdx)("p",null,"Whether the field is required."))),(0,r.mdx)(q.X2,{key:"ROW20",mdxType:"Row"},(0,r.mdx)(q.O,{mdxType:"PropNameCell"},"selectAttrs"),(0,r.mdx)(q.Di,{mdxType:"TypeCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"object\n"))),(0,r.mdx)(q.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,r.mdx)(q.mW,{mdxType:"DefaultValueCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"{}\n"))),(0,r.mdx)(q.Ex,{mdxType:"DescriptionCell"},(0,r.mdx)("p",null,"Additional attributes to spread onto the select."))),(0,r.mdx)(q.X2,{key:"ROW21",mdxType:"Row"},(0,r.mdx)(q.O,{mdxType:"PropNameCell"},"selectId"),(0,r.mdx)(q.Di,{mdxType:"TypeCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"string\n"))),(0,r.mdx)(q.dS,{isRequired:!0,mdxType:"RequiredCell"}),(0,r.mdx)(q.mW,{mdxType:"DefaultValueCell"},(0,r.mdx)("p",null,"none")),(0,r.mdx)(q.Ex,{mdxType:"DescriptionCell"},(0,r.mdx)("p",null,"The Select identifier. Links the htmlFor of the field to the select identifier."))),(0,r.mdx)(q.X2,{key:"ROW22",mdxType:"Row"},(0,r.mdx)(q.O,{mdxType:"PropNameCell"},"showOptional"),(0,r.mdx)(q.Di,{mdxType:"TypeCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"bool\n"))),(0,r.mdx)(q.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,r.mdx)(q.mW,{mdxType:"DefaultValueCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"false\n"))),(0,r.mdx)(q.Ex,{mdxType:"DescriptionCell"},(0,r.mdx)("p",null,"Whether to append the 'optional' label to a non-required field label."))),(0,r.mdx)(q.X2,{key:"ROW23",mdxType:"Row"},(0,r.mdx)(q.O,{mdxType:"PropNameCell"},"value"),(0,r.mdx)(q.Di,{mdxType:"TypeCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"unionOf: [\n  type: 'string',\n  type: 'number',\n  type: 'array',\n],\n"))),(0,r.mdx)(q.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,r.mdx)(q.mW,{mdxType:"DefaultValueCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"undefined\n"))),(0,r.mdx)(q.Ex,{mdxType:"DescriptionCell"},(0,r.mdx)("p",null,"The value of the select. Can be a string, number, or array of strings/numbers.")))))}L.isMDXComponent=!0;var M=["components"];function X(){return X=Object.assign?Object.assign.bind():function(e){for(var l=1;l<arguments.length;l++){var a=arguments[l];for(var t in a)Object.prototype.hasOwnProperty.call(a,t)&&(e[t]=a[t])}return e},X.apply(this,arguments)}function V(e,l){if(null==e)return{};var a,t,r=function(e,l){if(null==e)return{};var a,t,r={},n=Object.keys(e);for(t=0;t<n.length;t++)a=n[t],l.indexOf(a)>=0||(r[a]=e[a]);return r}(e,l);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(t=0;t<n.length;t++)a=n[t],l.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var A={},z="wrapper";function Z(e){var l=e.components,a=V(e,M);return(0,r.mdx)(z,X({},A,a,{components:l,mdxType:"MDXLayout"}),(0,r.mdx)(n.C,{mdxType:"Badge"}),(0,r.mdx)("h1",{id:"terra-form-search-select-field"},"Terra Form Search Select Field"),(0,r.mdx)("p",null,"A convenience wrapper assembling a ",(0,r.mdx)("a",{parentName:"p",href:"https://github.com/cerner/terra-core/tree/main/packages/terra-form-select/src/SearchSelect.jsx"},"terra-form-select SearchSelect")," within a ",(0,r.mdx)("a",{parentName:"p",href:"https://github.com/cerner/terra-core/tree/main/packages/terra-form-field"},"terra-form-field"),"."),(0,r.mdx)("h2",{id:"getting-started"},"Getting Started"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},"Install with ",(0,r.mdx)("a",{parentName:"li",href:"https://www.npmjs.com/"},"npmjs"),":",(0,r.mdx)("ul",{parentName:"li"},(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("inlineCode",{parentName:"li"},"npm install terra-form-select"))))),(0,r.mdx)("h2",{id:"usage"},"Usage"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-jsx"},"import SearchSelectField from 'terra-form-select/lib/SearchSelectField';\n")),(0,r.mdx)("h2",{id:"component-features"},"Component Features"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("a",{parentName:"li",href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#cross-browser-support"},"Cross-Browser Support")),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("a",{parentName:"li",href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#responsive-support"},"Responsive Support")),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("a",{parentName:"li",href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#mobile-support"},"Mobile Support")),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("a",{parentName:"li",href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#internationalization-i18n"},"Internationalization Support")),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("a",{parentName:"li",href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#internationalization-i18n"},"Localization Support")),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("a",{parentName:"li",href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#ltr--rtl"},"LTR/RTL Support"))),(0,r.mdx)("h2",{id:"examples"},"Examples"),(0,r.mdx)(f,{title:"Search Select Field Example",mdxType:"SearchSelectFieldExample"}),(0,r.mdx)(S,{title:"Required Search Select Field Example",mdxType:"RequiredSearchSelectFieldExample"}),(0,r.mdx)(D,{title:"Incomplete Search Select Field Example",description:"Applies theme-specific styling for incomplete. ***Note: Only use incomplete if given specific guidance, reserved for specific applications when no value has been provided. Not for general use.***",mdxType:"IncompleteSearchSelectFieldExample"}),(0,r.mdx)("h2",{id:"search-select-field-props"},"Search Select Field Props"),(0,r.mdx)(L,{mdxType:"SearchSelectFieldPropsTable"}))}Z.isMDXComponent=!0},15305:function(e,l,a){a.d(l,{Z:function(){return o}});a(67294);var t=a(81254),r=["components"];function n(){return n=Object.assign?Object.assign.bind():function(e){for(var l=1;l<arguments.length;l++){var a=arguments[l];for(var t in a)Object.prototype.hasOwnProperty.call(a,t)&&(e[t]=a[t])}return e},n.apply(this,arguments)}function d(e,l){if(null==e)return{};var a,t,r=function(e,l){if(null==e)return{};var a,t,r={},n=Object.keys(e);for(t=0;t<n.length;t++)a=n[t],l.indexOf(a)>=0||(r[a]=e[a]);return r}(e,l);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(t=0;t<n.length;t++)a=n[t],l.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var m={},i="wrapper";function o(e){var l=e.components,a=d(e,r);return(0,t.mdx)(i,n({},m,a,{components:l,mdxType:"MDXLayout"}),(0,t.mdx)("pre",null,(0,t.mdx)("code",{parentName:"pre",className:"language-scss"},":local {\n  .form-select {\n    max-width: 300px;\n  }\n}\n\n")))}o.isMDXComponent=!0},57739:function(e,l,a){a.d(l,{C:function(){return n}});var t=a(67294),r=a(22863),n=function(e){var l=e.url;return t.createElement(r.Z,{src:"https://github.com/cerner/terra-core/tree/main/packages/terra-form-select",name:"terra-form-select",version:"6.38.0",url:l})}},48824:function(e,l,a){a.r(l),l.default={"form-select":"FormSelectDocCommon-module__form-select___Tm1QE"}},53560:function(e,l,a){a.r(l),l.default={"orion-fusion-theme":"ExampleTemplate-module__orion-fusion-theme___GzA23",template:"ExampleTemplate-module__template___a4uPk",header:"ExampleTemplate-module__header___iFXV3",content:"ExampleTemplate-module__content___48m4Q",description:"ExampleTemplate-module__description___NwBJo",footer:"ExampleTemplate-module__footer___GpSoG","button-container":"ExampleTemplate-module__button-container___rAD11",css:"ExampleTemplate-module__css___+jtk1",code:"ExampleTemplate-module__code___7rC6C","css-toggle":"ExampleTemplate-module__css-toggle___chHK7","code-toggle":"ExampleTemplate-module__code-toggle___TGlE-","is-selected":"ExampleTemplate-module__is-selected___0BYwS",item:"ExampleTemplate-module__item___8FTQq",chevron:"ExampleTemplate-module__chevron___VbY7N",title:"ExampleTemplate-module__title___r+nbJ","dynamic-content":"ExampleTemplate-module__dynamic-content___k+1H7"}},21488:function(e,l,a){a.r(l),l.default={"orion-fusion-theme":"_ClearOption-module__orion-fusion-theme___KZPgR","clear-option":"_ClearOption-module__clear-option___0FCZT"}},95125:function(e,l,a){a.r(l),l.default={"orion-fusion-theme":"_NoResults-module__orion-fusion-theme___6lA58","no-results":"_NoResults-module__no-results___k4m2B"}},96588:function(e,l,a){Object.defineProperty(l,"__esModule",{value:!0}),l.default=void 0;var t=p(a(67294)),r=p(a(45697)),n=p(a(47717)),d=p(a(97996)),m=p(a(87786)),i=p(a(88413)),o=["allowClear","children","defaultValue","disabled","error","help","hideRequired","isIncomplete","isInline","isInvalid","isLabelHidden","isTouchAccessible","label","labelAttrs","maxHeight","maxWidth","onChange","placeholder","required","selectAttrs","selectId","showOptional","value"];function p(e){return e&&e.__esModule?e:{default:e}}function s(){return s=Object.assign?Object.assign.bind():function(e){for(var l=1;l<arguments.length;l++){var a=arguments[l];for(var t in a)Object.prototype.hasOwnProperty.call(a,t)&&(e[t]=a[t])}return e},s.apply(this,arguments)}function u(e,l){if(null==e)return{};var a,t,r=function(e,l){if(null==e)return{};var a,t,r={},n=Object.keys(e);for(t=0;t<n.length;t++)a=n[t],l.indexOf(a)>=0||(r[a]=e[a]);return r}(e,l);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(t=0;t<n.length;t++)a=n[t],l.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c={allowClear:r.default.bool,children:r.default.node,label:r.default.string.isRequired,defaultValue:r.default.oneOfType([r.default.string,r.default.number,r.default.array]),disabled:r.default.bool,error:r.default.node,help:r.default.node,hideRequired:r.default.bool,isIncomplete:r.default.bool,isInline:r.default.bool,isInvalid:r.default.bool,isLabelHidden:r.default.bool,isTouchAccessible:r.default.bool,labelAttrs:r.default.object,maxHeight:r.default.number,maxWidth:r.default.string,onChange:r.default.func,placeholder:r.default.string,required:r.default.bool,selectAttrs:r.default.object,selectId:r.default.string.isRequired,showOptional:r.default.bool,value:r.default.oneOfType([r.default.string,r.default.number,r.default.array])},x={allowClear:!1,children:void 0,defaultValue:void 0,disabled:!1,error:void 0,help:void 0,hideRequired:!1,isIncomplete:!1,isInline:!1,isInvalid:!1,isLabelHidden:!1,isTouchAccessible:!1,labelAttrs:{},maxHeight:void 0,maxWidth:void 0,onChange:void 0,placeholder:void 0,required:!1,selectAttrs:{},showOptional:!1,value:void 0},f=function(e){var l,a=e.allowClear,r=e.children,m=e.defaultValue,i=e.disabled,p=e.error,c=e.help,x=e.hideRequired,f=e.isIncomplete,y=e.isInline,h=e.isInvalid,g=e.isLabelHidden,v=e.isTouchAccessible,b=e.label,T=e.labelAttrs,O=e.maxHeight,S=e.maxWidth,N=e.onChange,C=e.placeholder,E=e.required,_=e.selectAttrs,j=e.selectId,R=e.showOptional,w=e.value,D=u(e,o);return c&&p&&h?l="".concat(j,"-error ").concat(j,"-help"):(c&&(l="".concat(j,"-help")),p&&h&&(l="".concat(j,"-error"))),t.default.createElement(n.default,s({},D,{label:b,labelAttrs:T,error:p,help:c,hideRequired:x,required:E,showOptional:R,isInvalid:h,isInline:y,isLabelHidden:g,htmlFor:j,maxWidth:S}),t.default.createElement(d.default,s({},_,{ariaLabel:b,allowClear:a,"aria-describedby":l,disabled:_.disabled||i,inputId:j,isIncomplete:f,isInvalid:h,isTouchAccessible:v,defaultValue:m,maxHeight:O||_.maxHeight,onChange:N,placeholder:C,required:E,value:w}),r))};f.propTypes=c,f.defaultProps=x,f.Option=i.default,f.OptGroup=m.default;var y=f;l.default=y},61698:function(e,l,a){Object.defineProperty(l,"__esModule",{value:!0}),l.default=void 0;var t=s(a(67294)),r=s(a(45697)),n=s(a(94184)),d=s(a(47166)),m=s(a(50026)),i=s(a(88413)),o=s(a(21488)),p=["display","value"];function s(e){return e&&e.__esModule?e:{default:e}}function u(){return u=Object.assign?Object.assign.bind():function(e){for(var l=1;l<arguments.length;l++){var a=arguments[l];for(var t in a)Object.prototype.hasOwnProperty.call(a,t)&&(e[t]=a[t])}return e},u.apply(this,arguments)}function c(e,l){if(null==e)return{};var a,t,r=function(e,l){if(null==e)return{};var a,t,r={},n=Object.keys(e);for(t=0;t<n.length;t++)a=n[t],l.indexOf(a)>=0||(r[a]=e[a]);return r}(e,l);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(t=0;t<n.length;t++)a=n[t],l.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var x=d.default.bind(o.default),f={display:r.default.string,value:r.default.string},y=function(e){var l=e.display,a=e.value,r=c(e,p),d=t.default.useContext(m.default);return t.default.createElement(i.default,u({},r,{className:(0,n.default)(x("clear-option",d.className),r.className),display:l,value:a,isSelected:!1,"data-terra-select-clear-option":!0}))};y.propTypes=f,y.isOption=!0;var h=y;l.default=h},49978:function(e,l,a){Object.defineProperty(l,"__esModule",{value:!0}),l.default=void 0;var t=o(a(67294)),r=o(a(45697)),n=o(a(47166)),d=o(a(50026)),m=a(25387),i=o(a(95125));function o(e){return e&&e.__esModule?e:{default:e}}var p=n.default.bind(i.default),s={noResultContent:r.default.node,value:r.default.oneOfType([r.default.number,r.default.string])},u=function(e){var l=e.noResultContent,a=e.value,r=t.default.useContext(d.default);return t.default.createElement("div",{role:"option",className:p("no-results",r.className),"aria-selected":"false"},l||t.default.createElement(m.FormattedMessage,{id:"Terra.form.select.noResults",values:{text:a}}))};u.propTypes=s;var c=u;l.default=c},33864:function(e,l,a){Object.defineProperty(l,"__esModule",{value:!0}),l.default=void 0;var t=n(a(67294)),r=n(a(99139));function n(e){return e&&e.__esModule?e:{default:e}}function d(){return d=Object.assign?Object.assign.bind():function(e){for(var l=1;l<arguments.length;l++){var a=arguments[l];for(var t in a)Object.prototype.hasOwnProperty.call(a,t)&&(e[t]=a[t])}return e},d.apply(this,arguments)}var m=function(e){var l=d({},e);return t.default.createElement(r.default,l,t.default.createElement("path",{d:"M10.3 24L33.8 0l3.9 3.8L18 24l19.7 20.2-3.9 3.8z"}))};m.displayName="IconChevronLeft",m.defaultProps={className:"",viewBox:"0 0 48 48",xmlns:"http://www.w3.org/2000/svg","data-name":"Layer 1",isBidi:!0};var i=m;l.default=i}}]);