"use strict";(self.webpackChunkterra_ui=self.webpackChunkterra_ui||[]).push([[81446],{22863:function(e,t,n){var a=n(64836);t.Z=void 0;var r=a(n(67294)),l=a(n(45697)),o=a(n(47166)),i=a(n(17422)),m=o.default.bind(i.default),d={name:l.default.string.isRequired,src:l.default.string,url:l.default.string,version:l.default.string.isRequired},s=function(e){var t=e.src,n=e.name,a=e.url,l=e.version,o=r.default.createElement("a",{className:m("badge"),href:a||"https://www.npmjs.org/package/".concat(n,"/v/").concat(l)},r.default.createElement("span",{className:m("badge-name")},a?"package":"npm"),r.default.createElement("span",{className:m("badge-version")},"v".concat(l))),i=t?r.default.createElement("a",{className:m("badge"),href:t},r.default.createElement("span",{className:m("badge-name")},"github"),r.default.createElement("span",{className:m("badge-version")},"source")):void 0;return r.default.createElement("div",{className:m("badge-container")},o,i)};s.propTypes=d;var c=s;t.Z=c},49271:function(e,t,n){var a=n(64836),r=n(18698);t.Z=void 0;var l=a(n(27424)),o=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==r(e)&&"function"!=typeof e)return{default:e};var n=f(t);if(n&&n.has(e))return n.get(e);var a={},l=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var i=l?Object.getOwnPropertyDescriptor(e,o):null;i&&(i.get||i.set)?Object.defineProperty(a,o,i):a[o]=e[o]}a.default=e,n&&n.set(e,a);return a}(n(67294)),i=a(n(45697)),m=a(n(47166)),d=n(21538),s=a(n(33864)),c=a(n(23399)),u=n(51051),p=a(n(53560));function f(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(f=function(e){return e?n:t})(e)}var x=m.default.bind(p.default),y={example:i.default.element,exampleSrc:i.default.element,exampleCssSrc:i.default.element,title:i.default.string,description:i.default.node,isExpanded:i.default.bool},g=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","true")},b=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","false")},v=function(e){var t=e.example,n=e.exampleSrc,a=e.exampleCssSrc,r=e.title,i=e.description,m=e.isExpanded,p=(0,o.useState)(m),f=(0,l.default)(p,2),y=f[0],v=f[1],_=(0,o.useState)(!1),h=(0,l.default)(_,2),O=h[0],T=h[1],E=o.default.useContext(d.ThemeContext),N=void 0!==a,D=function(){T(!O),y&&v(!y)},j=function(){v(!y),O&&T(!O)},C=function(e,t){e.nativeEvent.keyCode!==u.KEY_SPACE&&e.nativeEvent.keyCode!==u.KEY_RETURN||(e.preventDefault(),t())};return o.default.createElement("div",{className:x("template",E.className)},o.default.createElement("div",{className:x("header")},r&&o.default.createElement("h2",{className:x("title")},r)),o.default.createElement("div",{className:x("content")},i&&o.default.createElement("div",{className:x("description")},i),t),o.default.createElement("div",{className:x("footer")},n?o.default.createElement("div",{className:x("button-container")},N&&o.default.createElement("button",{type:"button",className:x("css-toggle","item",{"is-selected":O}),onClick:D,onKeyDown:function(e){return C(e,D)},onBlur:g,onMouseDown:b,tabIndex:0,"data-focus-styles-enabled":!0},o.default.createElement(s.default,{className:x("chevron")}),o.default.createElement("span",null,"CSS"),o.default.createElement(c.default,{className:x("chevron")})),o.default.createElement("button",{type:"button",className:x("code-toggle","item",{"is-selected":y}),onClick:j,onKeyDown:function(e){return C(e,j)},onBlur:g,onMouseDown:b,tabIndex:0,"data-focus-styles-enabled":!0},o.default.createElement(s.default,{className:x("chevron")}),o.default.createElement("span",null,"Code"),o.default.createElement(c.default,{className:x("chevron")}))):null,o.default.createElement("div",null,O&&o.default.createElement("div",{className:x("css")},a),y&&o.default.createElement("div",{className:x("code")},n))))};v.propTypes=y,v.defaultProps={isExpanded:!1};var _=v;t.Z=_},81446:function(e,t,n){n.r(t),n.d(t,{default:function(){return ce}});var a=n(67294),r=n(81254),l=n(81843),o=n(78530),i=["components"];function m(){return m=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},m.apply(this,arguments)}function d(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s={},c="wrapper";function u(e){var t=e.components,n=d(e,i);return(0,r.mdx)(c,m({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.mdx)(o.ZP,{mdxType:"PropsTable"},(0,r.mdx)(o.X2,{key:"ROW1",mdxType:"Row"},(0,r.mdx)(o.O,{mdxType:"PropNameCell"},"text"),(0,r.mdx)(o.Di,{mdxType:"TypeCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"string\n"))),(0,r.mdx)(o.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,r.mdx)(o.mW,{mdxType:"DefaultValueCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"''\n"))),(0,r.mdx)(o.Ex,{mdxType:"DescriptionCell"},(0,r.mdx)("p",null,"The text to be displayed for the comment."))),(0,r.mdx)(o.X2,{key:"ROW2",mdxType:"Row"},(0,r.mdx)(o.O,{mdxType:"PropNameCell"},"textStyle"),(0,r.mdx)(o.Di,{mdxType:"TypeCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},'enum: [\n  "attention"\n  "primary"\n  "secondary"\n  "strikeThrough"\n  "strong"\n],\n'))),(0,r.mdx)(o.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,r.mdx)(o.mW,{mdxType:"DefaultValueCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"'primary'\n"))),(0,r.mdx)(o.Ex,{mdxType:"DescriptionCell"},(0,r.mdx)("p",null,"The visual style to be applied to the display element.\nOne of ",(0,r.mdx)("inlineCode",{parentName:"p"},"'primary'"),", ",(0,r.mdx)("inlineCode",{parentName:"p"},"'secondary'"),", ",(0,r.mdx)("inlineCode",{parentName:"p"},"'strong'"),", ",(0,r.mdx)("inlineCode",{parentName:"p"},"'attention'"),", or ",(0,r.mdx)("inlineCode",{parentName:"p"},"'strikeThrough'"),"."))),(0,r.mdx)(o.X2,{key:"ROW3",mdxType:"Row"},(0,r.mdx)(o.O,{mdxType:"PropNameCell"},"isTruncated"),(0,r.mdx)(o.Di,{mdxType:"TypeCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"bool\n"))),(0,r.mdx)(o.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,r.mdx)(o.mW,{mdxType:"DefaultValueCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"false\n"))),(0,r.mdx)(o.Ex,{mdxType:"DescriptionCell"},(0,r.mdx)("p",null,"Whether or not the text should be truncated."))),(0,r.mdx)(o.X2,{key:"ROW4",mdxType:"Row"},(0,r.mdx)(o.O,{mdxType:"PropNameCell"},"isDisabled"),(0,r.mdx)(o.Di,{mdxType:"TypeCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"bool\n"))),(0,r.mdx)(o.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,r.mdx)(o.mW,{mdxType:"DefaultValueCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"false\n"))),(0,r.mdx)(o.Ex,{mdxType:"DescriptionCell"},(0,r.mdx)("p",null,"Whether or not the display is disabled."))),(0,r.mdx)(o.X2,{key:"ROW5",mdxType:"Row"},(0,r.mdx)(o.O,{mdxType:"PropNameCell"},"icon"),(0,r.mdx)(o.Di,{mdxType:"TypeCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"element\n"))),(0,r.mdx)(o.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,r.mdx)(o.mW,{mdxType:"DefaultValueCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"undefined\n"))),(0,r.mdx)(o.Ex,{mdxType:"DescriptionCell"},(0,r.mdx)("p",null,"The icon react element to be displayed next to the display text."))),(0,r.mdx)(o.X2,{key:"ROW6",mdxType:"Row"},(0,r.mdx)(o.O,{mdxType:"PropNameCell"},"iconAlignment"),(0,r.mdx)(o.Di,{mdxType:"TypeCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"enum: [\n  'center'\n  'top'\n  'inline'\n],\n"))),(0,r.mdx)(o.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,r.mdx)(o.mW,{mdxType:"DefaultValueCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"'center'\n"))),(0,r.mdx)(o.Ex,{mdxType:"DescriptionCell"},(0,r.mdx)("p",null,"The position of the icon to be displayed next to the text,\nnoticeable when the text display wraps multiple line.\nOne of ",(0,r.mdx)("inlineCode",{parentName:"p"},"'center'"),", ",(0,r.mdx)("inlineCode",{parentName:"p"},"'top'"),", ",(0,r.mdx)("inlineCode",{parentName:"p"},"'inline'"),".")))))}u.isMDXComponent=!0;var p=["components"];function f(){return f=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},f.apply(this,arguments)}function x(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var y={},g="wrapper";function b(e){var t=e.components,n=x(e,p);return(0,r.mdx)(g,f({},y,n,{components:t,mdxType:"MDXLayout"}),(0,r.mdx)(o.ZP,{mdxType:"PropsTable"},(0,r.mdx)(o.X2,{key:"ROW1",mdxType:"Row"},(0,r.mdx)(o.O,{mdxType:"PropNameCell"},"text"),(0,r.mdx)(o.Di,{mdxType:"TypeCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"string\n"))),(0,r.mdx)(o.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,r.mdx)(o.mW,{mdxType:"DefaultValueCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"''\n"))),(0,r.mdx)(o.Ex,{mdxType:"DescriptionCell"},(0,r.mdx)("p",null,"The text to be displayed for the comment."))),(0,r.mdx)(o.X2,{key:"ROW2",mdxType:"Row"},(0,r.mdx)(o.O,{mdxType:"PropNameCell"},"isTruncated"),(0,r.mdx)(o.Di,{mdxType:"TypeCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"bool\n"))),(0,r.mdx)(o.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,r.mdx)(o.mW,{mdxType:"DefaultValueCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"false\n"))),(0,r.mdx)(o.Ex,{mdxType:"DescriptionCell"},(0,r.mdx)("p",null,"Whether or not the text should be truncated in display.")))))}b.isMDXComponent=!0;var v=n(26135),_=["components"];function h(){return h=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},h.apply(this,arguments)}function O(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var T={},E="wrapper";function N(e){var t=e.components,n=O(e,_);return(0,r.mdx)(E,h({},T,n,{components:t,mdxType:"MDXLayout"}),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-jsx"},'import React from \'react\';\nimport ItemDisplay from \'terra-clinical-item-display\';\n\nconst component = () => (\n  <React.Fragment>\n    <ItemDisplay text="Primary" />\n    <ItemDisplay text="Strong" textStyle="strong" />\n    <ItemDisplay text="Attention" textStyle="attention" />\n    <ItemDisplay text="Secondary" textStyle="secondary" />\n    <ItemDisplay text="Strike-through" textStyle="strikeThrough" />\n  </React.Fragment>\n);\n\nexport default component;\n\n')))}N.isMDXComponent=!0;var D=n(49271),j=function(e){var t=e.title,n=e.description,r=e.isExpanded;return a.createElement(D.Z,{title:t||"Text Styles",description:n,example:a.createElement(v.Z,null),exampleSrc:a.createElement(N,null),isExpanded:r})},C=n(60952),S=["components"];function w(){return w=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},w.apply(this,arguments)}function I(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var P={},R="wrapper";function k(e){var t=e.components,n=I(e,S);return(0,r.mdx)(R,w({},P,n,{components:t,mdxType:"MDXLayout"}),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-jsx"},'import React from \'react\';\nimport ItemDisplay from \'terra-clinical-item-display\';\n\nconst component = () => (\n  <React.Fragment>\n    <ItemDisplay text="Primary" isDisabled />\n    <ItemDisplay text="Strong" textStyle="strong" isDisabled />\n    <ItemDisplay text="Attention" textStyle="attention" isDisabled />\n    <ItemDisplay text="Secondary" textStyle="secondary" isDisabled />\n    <ItemDisplay text="Strike-through" textStyle="strikeThrough" isDisabled />\n  </React.Fragment>\n);\n\nexport default component;\n\n')))}k.isMDXComponent=!0;var M=function(e){var t=e.title,n=e.description,r=e.isExpanded;return a.createElement(D.Z,{title:t||"Text Styles Disabled",description:n,example:a.createElement(C.Z,null),exampleSrc:a.createElement(k,null),isExpanded:r})},A=n(32263),Z=["components"];function X(){return X=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},X.apply(this,arguments)}function W(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var q={},L="wrapper";function B(e){var t=e.components,n=W(e,Z);return(0,r.mdx)(L,X({},q,n,{components:t,mdxType:"MDXLayout"}),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport IconGlasses from 'terra-icon/lib/icon/IconGlasses';\nimport ItemDisplay from 'terra-clinical-item-display';\n\nconst component = () => (<ItemDisplay icon={<IconGlasses />} />);\n\nexport default component;\n\n")))}B.isMDXComponent=!0;var G=function(e){var t=e.title,n=e.description,r=e.isExpanded;return a.createElement(D.Z,{title:t||"Icon",description:n,example:a.createElement(A.Z,null),exampleSrc:a.createElement(B,null),isExpanded:r})},z=n(93404),F=["components"];function V(){return V=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},V.apply(this,arguments)}function H(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var K={},Y="wrapper";function Q(e){var t=e.components,n=H(e,F);return(0,r.mdx)(Y,V({},K,n,{components:t,mdxType:"MDXLayout"}),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport IconGlasses from 'terra-icon/lib/icon/IconGlasses';\nimport ItemDisplay from 'terra-clinical-item-display';\n\nconst sampleText = 'Mr. James is currently receiving outpatient treatment. He has been diagnosed with an Axis I diagnosis of Psychosis NOS, ruled out Schizoaffective Disorder and Post Traumatic Stress Disorder, and is being treated with Haldol 5mg and Cogentin 1mg. ';\n\nconst component = () => (\n  <React.Fragment>\n    <ItemDisplay text={`Center Icon Alignment (default) -- ${sampleText}`} icon={<IconGlasses />} />\n    <br />\n    <ItemDisplay text={`Top Icon Alignment -- ${sampleText}`} icon={<IconGlasses />} iconAlignment=\"top\" />\n    <br />\n    <ItemDisplay text={`Inline Icon Alignment -- ${sampleText}`} icon={<IconGlasses />} iconAlignment=\"inline\" />\n    <br />\n  </React.Fragment>\n);\n\nexport default component;\n\n")))}Q.isMDXComponent=!0;var J=function(e){var t=e.title,n=e.description,r=e.isExpanded;return a.createElement(D.Z,{title:t||"Icon Text",description:n,example:a.createElement(z.Z,null),exampleSrc:a.createElement(Q,null),isExpanded:r})},U=n(67362),$=["components"];function ee(){return ee=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},ee.apply(this,arguments)}function te(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var ne={},ae="wrapper";function re(e){var t=e.components,n=te(e,$);return(0,r.mdx)(ae,ee({},ne,n,{components:t,mdxType:"MDXLayout"}),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\n// eslint-disable-next-line import/no-extraneous-dependencies\nimport ItemComment from 'terra-clinical-item-display/lib/ItemComment';\n\nconst component = () => (\n  <span>\n    <ItemComment text=\"Comment\" />\n    <ItemComment text=\"Disabled Comment\" isDisabled />\n  </span>\n);\n\nexport default component;\n\n")))}re.isMDXComponent=!0;var le=function(e){var t=e.title,n=e.description,r=e.isExpanded;return a.createElement(D.Z,{title:t||"Default Comment",description:n,example:a.createElement(U.Z,null),exampleSrc:a.createElement(re,null),isExpanded:r})},oe=["components"];function ie(){return ie=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},ie.apply(this,arguments)}function me(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var de={},se="wrapper";function ce(e){var t=e.components,n=me(e,oe);return(0,r.mdx)(se,ie({},de,n,{components:t,mdxType:"MDXLayout"}),(0,r.mdx)(l.C,{mdxType:"Badge"}),(0,r.mdx)("h1",{id:"terra-clinical-item-display"},"Terra Clinical Item Display"),(0,r.mdx)("p",null,"The Item Display component creates an display for text and an optional graphic. The Comment subcomponent creates a display for text with a comment icon."),(0,r.mdx)("h2",{id:"getting-started"},"Getting Started"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},"Install with ",(0,r.mdx)("a",{parentName:"li",href:"https://www.npmjs.com/"},"npmjs"),":",(0,r.mdx)("ul",{parentName:"li"},(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("inlineCode",{parentName:"li"},"npm install terra-clinical-item-display"))))),(0,r.mdx)("h2",{id:"usage"},"Usage"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-jsx"},"import ItemDisplay from 'terra-clinical-item-display';\n")),(0,r.mdx)("h2",{id:"component-features"},"Component Features"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("a",{parentName:"li",href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#cross-browser-support"},"Cross-Browser Support")),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("a",{parentName:"li",href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#responsive-support"},"Responsive Support")),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("a",{parentName:"li",href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#mobile-support"},"Mobile Support"))),(0,r.mdx)("h2",{id:"example"},"Example"),(0,r.mdx)(j,{title:"Item Display: Text styles",mdxType:"TextStyles"}),(0,r.mdx)(M,{title:"Disabled Item Display: Text styles",mdxType:"TextStylesDisabled"}),(0,r.mdx)(G,{title:"Item Display: Icon",mdxType:"Icon"}),(0,r.mdx)(J,{title:"Item Display: Icon and Text",mdxType:"IconText"}),(0,r.mdx)(le,{title:"Comment Item Display",mdxType:"DefaultComment"}),(0,r.mdx)("h2",{id:"item-display-props-table"},"Item Display Props Table"),(0,r.mdx)(u,{mdxType:"ItemDisplayPropsTable"}),(0,r.mdx)("h2",{id:"item-comment-props-table"},"Item Comment Props Table"),(0,r.mdx)(b,{mdxType:"CommentPropsTable"}))}ce.isMDXComponent=!0},81843:function(e,t,n){n.d(t,{C:function(){return l}});var a=n(67294),r=n(22863),l=function(e){var t=e.url;return a.createElement(r.Z,{src:"https://github.com/cerner/terra-clinical/tree/main/packages/terra-clinical-item-display",name:"terra-clinical-item-display",version:"4.5.0",url:t})}},17422:function(e,t,n){n.r(t),t.default={badge:"Badges-module__badge___vex-+","badge-container":"Badges-module__badge-container___B13Mv","badge-name":"Badges-module__badge-name___jkN0m","badge-version":"Badges-module__badge-version___agZ+P"}},53560:function(e,t,n){n.r(t),t.default={"orion-fusion-theme":"ExampleTemplate-module__orion-fusion-theme___GzA23",template:"ExampleTemplate-module__template___a4uPk",header:"ExampleTemplate-module__header___iFXV3",content:"ExampleTemplate-module__content___48m4Q",description:"ExampleTemplate-module__description___NwBJo",footer:"ExampleTemplate-module__footer___GpSoG","button-container":"ExampleTemplate-module__button-container___rAD11",css:"ExampleTemplate-module__css___+jtk1",code:"ExampleTemplate-module__code___7rC6C","css-toggle":"ExampleTemplate-module__css-toggle___chHK7","code-toggle":"ExampleTemplate-module__code-toggle___TGlE-","is-selected":"ExampleTemplate-module__is-selected___0BYwS",item:"ExampleTemplate-module__item___8FTQq",chevron:"ExampleTemplate-module__chevron___VbY7N",title:"ExampleTemplate-module__title___r+nbJ","dynamic-content":"ExampleTemplate-module__dynamic-content___k+1H7"}},66125:function(e,t,n){n.r(t),t.default={"orion-fusion-theme":"ItemComment-module__orion-fusion-theme___dtZma","item-comment":"ItemComment-module__item-comment___ESQjD","inline-icon":"ItemComment-module__inline-icon___znks3"}},82102:function(e,t,n){n.r(t),t.default={"orion-fusion-theme":"ItemDisplay-module__orion-fusion-theme___8tnBi","item-display":"ItemDisplay-module__item-display___zzQHA",text:"ItemDisplay-module__text___8kzzL",icon:"ItemDisplay-module__icon___QFsen","icon-center":"ItemDisplay-module__icon-center___yNnaA","icon-top":"ItemDisplay-module__icon-top___le+7t","icon-inline":"ItemDisplay-module__icon-inline___7-6dl","is-truncated":"ItemDisplay-module__is-truncated___5xS0r","is-disabled":"ItemDisplay-module__is-disabled___LmVej",secondary:"ItemDisplay-module__secondary___ObdZe",attention:"ItemDisplay-module__attention___W1BMa",strong:"ItemDisplay-module__strong___OPiqQ","strike-through":"ItemDisplay-module__strike-through___yJ7fk"}},46563:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=u(n(67294)),r=u(n(45697)),l=u(n(94184)),o=u(n(47166)),i=u(n(50026)),m=u(n(97309)),d=u(n(32166)),s=u(n(66125)),c=["text","isTruncated"];function u(e){return e&&e.__esModule?e:{default:e}}function p(){return p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},p.apply(this,arguments)}function f(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var x=o.default.bind(s.default),y={text:r.default.string,isTruncated:r.default.bool},g=function(e){var t=e.text,n=e.isTruncated,r=f(e,c),o=a.default.useContext(i.default),s=(0,l.default)(x("item-comment",o.className),r.className);return a.default.createElement(d.default,p({text:t,isTruncated:n,icon:a.default.createElement(m.default,{className:x("inline-icon")})},r,{className:s}))};g.propTypes=y,g.defaultProps={text:"",isTruncated:!1};var b=g;t.default=b},32166:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.TextStyles=t.default=void 0;var a=s(n(67294)),r=s(n(45697)),l=s(n(94184)),o=s(n(47166)),i=s(n(50026)),m=s(n(82102)),d=["text","textStyle","isTruncated","isDisabled","icon","iconAlignment"];function s(e){return e&&e.__esModule?e:{default:e}}function c(){return c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},c.apply(this,arguments)}function u(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var f=o.default.bind(m.default),x={PRIMARY:"primary",SECONDARY:"secondary",ATTENTION:"attention",STRIKETHROUGH:"strikeThrough",STRONG:"strong"};t.TextStyles=x;var y={text:r.default.string,textStyle:r.default.oneOf(Object.values(x)),isTruncated:r.default.bool,isDisabled:r.default.bool,icon:r.default.element,iconAlignment:r.default.oneOf(["center","top","inline"])},g={text:"",textStyle:"primary",isTruncated:!1,isDisabled:!1,icon:void 0,iconAlignment:"center"},b=function(e){var t,n=e.text,r=e.textStyle,o=e.isTruncated,m=e.isDisabled,s=e.icon,y=e.iconAlignment,g=p(e,d),b=a.default.useContext(i.default),v=(0,l.default)(f("item-display",{"is-disabled":m},u({},"icon-".concat(y),s),b.className),g.className),_=f(["text",{"is-truncated":o},u({},"".concat(r),r===x.SECONDARY),u({},"".concat(r),r===x.ATTENTION),u({},"".concat(r),r===x.STRONG),{"strike-through":r===x.STRIKETHROUGH}]);return s&&(t=a.default.createElement("div",{className:f("icon")},s)),a.default.createElement("div",c({},g,{className:v,"aria-disabled":m}),t,a.default.createElement("div",{"data-terra-clinical-item-display-text":!0,className:_},n))};b.propTypes=y,b.defaultProps=g;var v=b;t.default=v},67362:function(e,t,n){t.Z=void 0;var a=l(n(67294)),r=l(n(46563));function l(e){return e&&e.__esModule?e:{default:e}}var o=function(){return a.default.createElement("span",null,a.default.createElement(r.default,{text:"Comment"}),a.default.createElement(r.default,{text:"Disabled Comment",isDisabled:!0}))};t.Z=o},32263:function(e,t,n){t.Z=void 0;var a=o(n(67294)),r=o(n(38602)),l=o(n(32166));function o(e){return e&&e.__esModule?e:{default:e}}var i=function(){return a.default.createElement(l.default,{icon:a.default.createElement(r.default,null)})};t.Z=i},93404:function(e,t,n){t.Z=void 0;var a=o(n(67294)),r=o(n(38602)),l=o(n(32166));function o(e){return e&&e.__esModule?e:{default:e}}var i="Mr. James is currently receiving outpatient treatment. He has been diagnosed with an Axis I diagnosis of Psychosis NOS, ruled out Schizoaffective Disorder and Post Traumatic Stress Disorder, and is being treated with Haldol 5mg and Cogentin 1mg. ",m=function(){return a.default.createElement(a.default.Fragment,null,a.default.createElement(l.default,{text:"Center Icon Alignment (default) -- ".concat(i),icon:a.default.createElement(r.default,null)}),a.default.createElement("br",null),a.default.createElement(l.default,{text:"Top Icon Alignment -- ".concat(i),icon:a.default.createElement(r.default,null),iconAlignment:"top"}),a.default.createElement("br",null),a.default.createElement(l.default,{text:"Inline Icon Alignment -- ".concat(i),icon:a.default.createElement(r.default,null),iconAlignment:"inline"}),a.default.createElement("br",null))};t.Z=m},26135:function(e,t,n){t.Z=void 0;var a=l(n(67294)),r=l(n(32166));function l(e){return e&&e.__esModule?e:{default:e}}var o=function(){return a.default.createElement(a.default.Fragment,null,a.default.createElement(r.default,{text:"Primary"}),a.default.createElement(r.default,{text:"Strong",textStyle:"strong"}),a.default.createElement(r.default,{text:"Attention",textStyle:"attention"}),a.default.createElement(r.default,{text:"Secondary",textStyle:"secondary"}),a.default.createElement(r.default,{text:"Strike-through",textStyle:"strikeThrough"}))};t.Z=o},60952:function(e,t,n){t.Z=void 0;var a=l(n(67294)),r=l(n(32166));function l(e){return e&&e.__esModule?e:{default:e}}var o=function(){return a.default.createElement(a.default.Fragment,null,a.default.createElement(r.default,{text:"Primary",isDisabled:!0}),a.default.createElement(r.default,{text:"Strong",textStyle:"strong",isDisabled:!0}),a.default.createElement(r.default,{text:"Attention",textStyle:"attention",isDisabled:!0}),a.default.createElement(r.default,{text:"Secondary",textStyle:"secondary",isDisabled:!0}),a.default.createElement(r.default,{text:"Strike-through",textStyle:"strikeThrough",isDisabled:!0}))};t.Z=o},33864:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=l(n(67294)),r=l(n(99139));function l(e){return e&&e.__esModule?e:{default:e}}function o(){return o=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},o.apply(this,arguments)}var i=function(e){var t=o({},e);return a.default.createElement(r.default,t,a.default.createElement("path",{d:"M10.3 24L33.8 0l3.9 3.8L18 24l19.7 20.2-3.9 3.8z"}))};i.displayName="IconChevronLeft",i.defaultProps={className:"",viewBox:"0 0 48 48",xmlns:"http://www.w3.org/2000/svg","data-name":"Layer 1",isBidi:!0};var m=i;t.default=m},97309:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=l(n(67294)),r=l(n(99139));function l(e){return e&&e.__esModule?e:{default:e}}function o(){return o=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},o.apply(this,arguments)}var i=function(e){var t=o({},e);return a.default.createElement(r.default,t,a.default.createElement("path",{d:"M46 2.1H2a2 2 0 00-2 2v28a2 2 0 002 2h31.2L45 45.9V34.1h1a2 2 0 002-2v-28a2 2 0 00-2-2z"}))};i.displayName="IconComment",i.defaultProps={className:"",viewBox:"0 0 48 48",xmlns:"http://www.w3.org/2000/svg","data-name":"Layer 1",isBidi:!0};var m=i;t.default=m},38602:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=l(n(67294)),r=l(n(99139));function l(e){return e&&e.__esModule?e:{default:e}}function o(){return o=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},o.apply(this,arguments)}var i=function(e){var t=o({},e);return a.default.createElement(r.default,t,a.default.createElement("path",{d:"M48 22.7L37.4 12.1c-1.3-1.3-3.6-1.3-4.9 0l-3.8 3.8 2.1 2.1 3.8-3.8c.1-.1.3-.1.4-.1s.2 0 .4.1L43 22c-1.2-.6-2.8-1-4.8-1-6.7 0-9.7 1.4-10.9 3.8-1-.4-2.2-.7-3.3-.7s-2.3.2-3.3.7C19.5 22.4 16.5 21 9.8 21c-2 0-3.6.3-4.8 1l7.7-7.7c.2-.2.5-.2.7 0l3.8 3.8 2.1-2.1-3.8-3.8c-1.4-1.4-3.6-1.4-4.9 0L0 22.7V26l1.7 1.7v.8c0 4.8 4.8 8.3 9.8 8.3 5 0 9.8-3.5 9.8-8.3v-.8c.8-.4 1.7-.6 2.7-.6s1.9.2 2.7.6v.8c0 4.8 4.8 8.3 9.8 8.3 5 0 9.8-3.5 9.8-8.3v-.8L48 26v-3.3zM11.5 34.2c-3.4 0-7.1-2.3-7.1-5.6 0-3.2.9-4.9 5.4-4.9 8.8 0 8.8 2.3 8.8 4.9 0 3.3-3.7 5.6-7.1 5.6zm25 0c-3.4 0-7.1-2.3-7.1-5.6 0-2.6 0-4.9 8.8-4.9 3.5 0 5.4.8 5.4 4.9 0 3.3-3.8 5.6-7.1 5.6z"}))};i.displayName="IconGlasses",i.defaultProps={viewBox:"0 0 48 48",xmlns:"http://www.w3.org/2000/svg"};var m=i;t.default=m}}]);