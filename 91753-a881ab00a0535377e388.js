"use strict";(self.webpackChunkterra_ui=self.webpackChunkterra_ui||[]).push([[91753,45627,37344,33667,96890,14041,27444,85565,3353,80858,17657,5161,19260,45865,85355,33315,3193,4845,20444,26806,46647,85161,38681,17763,15318,40411,18101,38443,78996,39915,33442],{22863:function(e,t,n){var a=n(64836);t.Z=void 0;var r=a(n(67294)),l=a(n(45697)),o=a(n(47166)),i=a(n(17422)),d=o.default.bind(i.default),u={name:l.default.string.isRequired,src:l.default.string,url:l.default.string,version:l.default.string.isRequired},c=function(e){var t=e.src,n=e.name,a=e.url,l=e.version,o=r.default.createElement("a",{className:d("badge"),href:a||"https://www.npmjs.org/package/".concat(n,"/v/").concat(l)},r.default.createElement("span",{className:d("badge-name")},a?"package":"npm"),r.default.createElement("span",{className:d("badge-version")},"v".concat(l))),i=t?r.default.createElement("a",{className:d("badge"),href:t},r.default.createElement("span",{className:d("badge-name")},"github"),r.default.createElement("span",{className:d("badge-version")},"source")):void 0;return r.default.createElement("div",{className:d("badge-container")},o,i)};c.propTypes=u;var s=c;t.Z=s},49271:function(e,t,n){var a=n(64836),r=n(18698);t.Z=void 0;var l=a(n(27424)),o=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==r(e)&&"function"!=typeof e)return{default:e};var n=f(t);if(n&&n.has(e))return n.get(e);var a={},l=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var i=l?Object.getOwnPropertyDescriptor(e,o):null;i&&(i.get||i.set)?Object.defineProperty(a,o,i):a[o]=e[o]}a.default=e,n&&n.set(e,a);return a}(n(67294)),i=a(n(45697)),d=a(n(47166)),u=n(21538),c=a(n(33864)),s=a(n(23399)),m=n(51051),p=a(n(53560));function f(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(f=function(e){return e?n:t})(e)}var x=d.default.bind(p.default),h={example:i.default.element,exampleSrc:i.default.element,exampleCssSrc:i.default.element,title:i.default.string,description:i.default.node,isExpanded:i.default.bool},_=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","true")},y=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","false")},b=function(e){var t=e.example,n=e.exampleSrc,a=e.exampleCssSrc,r=e.title,i=e.description,d=e.isExpanded,p=(0,o.useState)(d),f=(0,l.default)(p,2),h=f[0],b=f[1],v=(0,o.useState)(!1),g=(0,l.default)(v,2),O=g[0],N=g[1],C=o.default.useContext(u.ThemeContext),T=void 0!==a,E=function(){N(!O),h&&b(!h)},w=function(){b(!h),O&&N(!O)},j=function(e,t){e.nativeEvent.keyCode!==m.KEY_SPACE&&e.nativeEvent.keyCode!==m.KEY_RETURN||(e.preventDefault(),t())};return o.default.createElement("div",{className:x("template",C.className)},o.default.createElement("div",{className:x("header")},r&&o.default.createElement("h2",{className:x("title")},r)),o.default.createElement("div",{className:x("content")},i&&o.default.createElement("div",{className:x("description")},i),t),o.default.createElement("div",{className:x("footer")},n?o.default.createElement("div",{className:x("button-container")},T&&o.default.createElement("button",{type:"button",className:x("css-toggle","item",{"is-selected":O}),onClick:E,onKeyDown:function(e){return j(e,E)},onBlur:_,onMouseDown:y,tabIndex:0,"data-focus-styles-enabled":!0},o.default.createElement(c.default,{className:x("chevron")}),o.default.createElement("span",null,"CSS"),o.default.createElement(s.default,{className:x("chevron")})),o.default.createElement("button",{type:"button",className:x("code-toggle","item",{"is-selected":h}),onClick:w,onKeyDown:function(e){return j(e,w)},onBlur:_,onMouseDown:y,tabIndex:0,"data-focus-styles-enabled":!0},o.default.createElement(c.default,{className:x("chevron")}),o.default.createElement("span",null,"Code"),o.default.createElement(s.default,{className:x("chevron")}))):null,o.default.createElement("div",null,O&&o.default.createElement("div",{className:x("css")},a),h&&o.default.createElement("div",{className:x("code")},n))))};b.propTypes=h,b.defaultProps={isExpanded:!1};var v=b;t.Z=v},40996:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=u(n(67294)),r=u(n(45697)),l=u(n(47166)),o=u(n(50026)),i=u(n(66983)),d=["children"];function u(e){return e&&e.__esModule?e:{default:e}}function c(){return c=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},c.apply(this,arguments)}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var m=l.default.bind(i.default),p=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","true")},f=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","false")},x={children:r.default.string},h=function(e){var t=e.children,n=s(e,d),r=a.default.useContext(o.default),i=(0,l.default)(m(["button",r.className]),n.className);return a.default.createElement("button",c({},n,{type:"button",className:i,onBlur:p,onMouseDown:f,"data-focus-styles-enabled":!0}),t)};h.propTypes=x;var _=h;t.default=_},59278:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=d(n(67294)),r=d(n(45697)),l=d(n(47166)),o=d(n(50026)),i=d(n(30866));function d(e){return e&&e.__esModule?e:{default:e}}var u=l.default.bind(i.default),c={ariaLevel:r.default.oneOf(["2","3","4","5","6"]),children:r.default.node,variant:r.default.oneOf(["ux-recommendation","caution","deprecation","maintenance","important","not-supported"])},s=function(e){var t=e.ariaLevel,n=e.variant,r=e.children,l=a.default.useContext(o.default);return a.default.createElement("div",{className:u("notice",n,l.className)},a.default.createElement("div",{className:u("accessory"),"aria-hidden":"true",focusable:"false"}),a.default.createElement("div",{role:"heading",className:u("title"),"aria-level":t},a.default.createElement("span",null,function(e){return"ux-recommendation"===e?"UX Recommendation":"caution"===e?"Caution":"deprecation"===e?"Deprecation Notice":"maintenance"===e?"In Maintenance":"important"===e?"Important":"not-supported"===e?"Hazards for Incorrect Usage":"error"}(n))),a.default.createElement("div",{className:u("children")},function(e){return"not-supported"===e?a.default.createElement(a.default.Fragment,null,a.default.createElement("p",{className:u("paragraph")},"This component was designed and tested according to the documented implementation."),a.default.createElement("p",{className:u("paragraph")},"Using the component incorrectly:",a.default.createElement("ul",{className:u("list")},a.default.createElement("li",null,"will likely result in improper composition and create accessibility issues"),a.default.createElement("li",null,"may cause erratic or broken behaviors and styles"),a.default.createElement("li",null,a.default.createElement("strong",null,"will not be supported "),"or enhanced to allow for incorrect use")))):null}(n),a.default.Children.map(r,(function(e){return"string"==typeof e?a.default.createElement("p",null,e):e}))))};s.propTypes=c,s.defaultProps={ariaLevel:"2",variant:"important"};var m=s;t.default=m},47306:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=c(n(67294)),r=c(n(45697)),l=c(n(94184)),o=c(n(47166)),i=c(n(50026)),d=c(n(42620)),u=["title"];function c(e){return e&&e.__esModule?e:{default:e}}function s(){return s=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},s.apply(this,arguments)}function m(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=o.default.bind(d.default),f={title:r.default.string},x=function(e){var t=e.title,n=m(e,u),r=a.default.useContext(i.default),o=(0,l.default)(p(["placeholder",r.className]),n.className),d=p(["inner"]);return a.default.createElement("div",s({},n,{className:o}),a.default.createElement("div",{className:d},a.default.createElement("p",{className:p("title")},t)))};x.propTypes=f,x.defaultProps={title:""};var h=x;t.default=h},34261:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"Button",{enumerable:!0,get:function(){return l.default}}),Object.defineProperty(t,"Notice",{enumerable:!0,get:function(){return a.default}}),Object.defineProperty(t,"Placeholder",{enumerable:!0,get:function(){return r.default}});var a=o(n(59278)),r=o(n(47306)),l=o(n(40996));function o(e){return e&&e.__esModule?e:{default:e}}},93352:function(e,t,n){n.r(t),n.d(t,{default:function(){return le}});var a=n(67294),r=n(81254),l=n(34749),o=n(78530),i=["components"];function d(){return d=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},d.apply(this,arguments)}function u(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c={},s="wrapper";function m(e){var t=e.components,n=u(e,i);return(0,r.mdx)(s,d({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.mdx)(o.ZP,{mdxType:"PropsTable"},(0,r.mdx)(o.X2,{key:"ROW1",mdxType:"Row"},(0,r.mdx)(o.O,{mdxType:"PropNameCell"},"id"),(0,r.mdx)(o.Di,{mdxType:"TypeCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"string\n"))),(0,r.mdx)(o.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,r.mdx)(o.mW,{mdxType:"DefaultValueCell"},(0,r.mdx)("p",null,"none")),(0,r.mdx)(o.Ex,{mdxType:"DescriptionCell"},(0,r.mdx)("p",null,"IDs should be used with 'aria-labelledby' to associate headings with the corresponding page area when needing to label regions.\nFor an example, read ",(0,r.mdx)("a",{parentName:"p",href:"/terra-ui/components/terra-clinical-header/clinical-header/accessibility-guide"},"Accessibility Guide: Labeling Section Content")," for additional information."))),(0,r.mdx)(o.X2,{key:"ROW2",mdxType:"Row"},(0,r.mdx)(o.O,{mdxType:"PropNameCell"},"children"),(0,r.mdx)(o.Di,{mdxType:"TypeCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"element\n"))),(0,r.mdx)(o.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,r.mdx)(o.mW,{mdxType:"DefaultValueCell"},(0,r.mdx)("p",null,"none")),(0,r.mdx)(o.Ex,{mdxType:"DescriptionCell"},(0,r.mdx)("p",null,"Child element to be displayed on the right end of the header.\nThe element passed as children will be decorated with flex attributes."))),(0,r.mdx)(o.X2,{key:"ROW3",mdxType:"Row"},(0,r.mdx)(o.O,{mdxType:"PropNameCell"},"startContent"),(0,r.mdx)(o.Di,{mdxType:"TypeCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"element\n"))),(0,r.mdx)(o.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,r.mdx)(o.mW,{mdxType:"DefaultValueCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"null\n"))),(0,r.mdx)(o.Ex,{mdxType:"DescriptionCell"},(0,r.mdx)("p",null,"Content to be displayed at the start of the header, placed before the title"))),(0,r.mdx)(o.X2,{key:"ROW4",mdxType:"Row"},(0,r.mdx)(o.O,{mdxType:"PropNameCell"},"level"),(0,r.mdx)(o.Di,{mdxType:"TypeCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"enum: [\n  1\n  2\n  3\n  4\n  5\n  6\n],\n"))),(0,r.mdx)(o.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,r.mdx)(o.mW,{mdxType:"DefaultValueCell"},(0,r.mdx)("p",null,"none")),(0,r.mdx)(o.Ex,{mdxType:"DescriptionCell"},(0,r.mdx)("p",null,"Sets the heading level ","<","h1",">","-","<","h6",">",". One of ",(0,r.mdx)("inlineCode",{parentName:"p"},"1"),", ",(0,r.mdx)("inlineCode",{parentName:"p"},"2"),", ",(0,r.mdx)("inlineCode",{parentName:"p"},"3"),", ",(0,r.mdx)("inlineCode",{parentName:"p"},"4"),", ",(0,r.mdx)("inlineCode",{parentName:"p"},"5"),", ",(0,r.mdx)("inlineCode",{parentName:"p"},"6"),". This helps screen readers to announce appropriate heading levels.\nChanging ",(0,r.mdx)("inlineCode",{parentName:"p"},"level")," will not visually change the style of the content."),(0,r.mdx)("p",null,(0,r.mdx)("img",{parentName:"p",src:"https://badgen.net/badge/UX/Accessibility/blue",alt:"IMPORTANT"})," It is required to be set in order for the header text to have proper accessibility.\n",(0,r.mdx)("em",{parentName:"p"},"Note: if the prop is not set level 1 by default. this would result in incorrect context of header in application.")),(0,r.mdx)("p",null,"See the ",(0,r.mdx)("a",{parentName:"p",href:"/terra-ui/components/terra-clinical-header/clinical-header/accessibility-guide"},"Accessibility Guide")," for additional information."))),(0,r.mdx)(o.X2,{key:"ROW5",mdxType:"Row"},(0,r.mdx)(o.O,{mdxType:"PropNameCell"},"text"),(0,r.mdx)(o.Di,{mdxType:"TypeCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"string\n"))),(0,r.mdx)(o.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,r.mdx)(o.mW,{mdxType:"DefaultValueCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"''\n"))),(0,r.mdx)(o.Ex,{mdxType:"DescriptionCell"},(0,r.mdx)("p",null,(0,r.mdx)("img",{parentName:"p",src:"https://badgen.net/badge/UX/Accessibility/blue",alt:"IMPORTANT"}),"\nText to be displayed as the title in the header bar."))),(0,r.mdx)(o.X2,{key:"ROW6",mdxType:"Row"},(0,r.mdx)(o.O,{mdxType:"PropNameCell"},"title"),(0,r.mdx)(o.Di,{mdxType:"TypeCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"string\n"))),(0,r.mdx)(o.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,r.mdx)(o.mW,{mdxType:"DefaultValueCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"''\n"))),(0,r.mdx)(o.Ex,{mdxType:"DescriptionCell"},(0,r.mdx)("p",null,(0,r.mdx)("img",{parentName:"p",src:"https://badgen.net/badge/prop/deprecated/red",alt:"IMPORTANT"}),"\nThe ",(0,r.mdx)("inlineCode",{parentName:"p"},"title")," prop has been deprecated and will be removed in next major version release. Use the ",(0,r.mdx)("inlineCode",{parentName:"p"},"text")," prop instead."))),(0,r.mdx)(o.X2,{key:"ROW7",mdxType:"Row"},(0,r.mdx)(o.O,{mdxType:"PropNameCell"},"endContent"),(0,r.mdx)(o.Di,{mdxType:"TypeCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"element\n"))),(0,r.mdx)(o.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,r.mdx)(o.mW,{mdxType:"DefaultValueCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"null\n"))),(0,r.mdx)(o.Ex,{mdxType:"DescriptionCell"},(0,r.mdx)("p",null,"Content to be displayed at the end of the header\nThe element passed as endContent will be wrapped in a div with flex attributes."))),(0,r.mdx)(o.X2,{key:"ROW8",mdxType:"Row"},(0,r.mdx)(o.O,{mdxType:"PropNameCell"},"isSubheader"),(0,r.mdx)(o.Di,{mdxType:"TypeCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"bool\n"))),(0,r.mdx)(o.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,r.mdx)(o.mW,{mdxType:"DefaultValueCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"false\n"))),(0,r.mdx)(o.Ex,{mdxType:"DescriptionCell"},(0,r.mdx)("p",null,"A Boolean indicating if element is a subheader.")))))}m.isMDXComponent=!0;var p=n(25295),f=["components"];function x(){return x=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},x.apply(this,arguments)}function h(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var _={};function y(e){var t=e.components,n=h(e,f);return(0,r.mdx)("wrapper",x({},_,n,{components:t,mdxType:"MDXLayout"}),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport Header from 'terra-clinical-header';\n\nconst TitleHeader = () => (\n  <Header text=\"Default Header\" level={3} />\n);\n\nexport default TitleHeader;\n\n")))}y.isMDXComponent=!0;var b=n(49271),v=function(e){var t=e.title,n=e.description,r=e.isExpanded;return a.createElement(b.Z,{title:t||"Title Header",description:n,example:a.createElement(p.Z,null),exampleSrc:a.createElement(y,null),isExpanded:r})},g=n(82333),O=["components"];function N(){return N=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},N.apply(this,arguments)}function C(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var T={};function E(e){var t=e.components,n=C(e,O);return(0,r.mdx)("wrapper",N({},T,n,{components:t,mdxType:"MDXLayout"}),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-jsx"},'import React from \'react\';\nimport Button from \'terra-button\';\nimport Header from \'terra-clinical-header\';\n\nconst ContenteHeader = () => (\n  <div>\n    <Header\n      startContent={<Button text="Button, Default Header" />}\n      text="Default Header"\n      endContent={<Button aria-label="Button, Default Header" text="Button" />}\n      level={3}\n    />\n  </div>\n);\n\nexport default ContenteHeader;\n\n')))}E.isMDXComponent=!0;var w=function(e){var t=e.title,n=e.description,r=e.isExpanded;return a.createElement(b.Z,{title:t||"Content Header",description:n,example:a.createElement(g.Z,null),exampleSrc:a.createElement(E,null),isExpanded:r})},j=n(76516),P=["components"];function D(){return D=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},D.apply(this,arguments)}function S(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var H={};function M(e){var t=e.components,n=S(e,P);return(0,r.mdx)("wrapper",D({},H,n,{components:t,mdxType:"MDXLayout"}),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport Header from 'terra-clinical-header';\n\nconst LongTextWithButtons = () => (\n  <div>\n    <Header\n      text=\"This is a header with long text .This is an element provides a customizable header layout with a prominent title options for the elements.This component saves time and effort in designing a header from scratch and ensures consistency across a website's pages.\"\n      level={3}\n    />\n  </div>\n);\n\nexport default LongTextWithButtons;\n\n")))}M.isMDXComponent=!0;var k=function(e){var t=e.title,n=e.description,r=e.isExpanded;return a.createElement(b.Z,{title:t||"Header Long Text",description:n,example:a.createElement(j.Z,null),exampleSrc:a.createElement(M,null),isExpanded:r})},R=n(21846),B=["components"];function I(){return I=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},I.apply(this,arguments)}function W(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var Z={};function X(e){var t=e.components,n=W(e,B);return(0,r.mdx)("wrapper",I({},Z,n,{components:t,mdxType:"MDXLayout"}),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport classNamesBind from 'classnames/bind';\nimport { Placeholder } from '@cerner/terra-docs';\nimport Button from 'terra-button';\nimport Header from 'terra-clinical-header';\nimport styles from './ClinicalHeaderDocCommon.scss';\n\nconst cx = classNamesBind.bind(styles);\n\nconst LongTextWithContent = () => (\n  <div>\n    <Header\n      startContent={<Button aria-label=\"Back, Patient Information for Individual Diagnosed with a Chronic Disease\" text=\"Back\" />}\n      text=\"Patient Information for Individual Diagnosed with a Chronic Disease in the past or currently suffering: Comprehensive Medical History,Treatment Plan,and Prognosis Report\"\n      endContent={<Button aria-label=\"print, Patient Information for Individual Diagnosed with a Chronic Disease\" text=\"print\" />}\n      level={3}\n    >\n      <Button text=\"Medical History\" />\n      <Placeholder className={cx('placeholder-wrapper')} title=\"Collapsible Menu View\" />\n    </Header>\n  </div>\n);\n\nexport default LongTextWithContent;\n\n")))}X.isMDXComponent=!0;var L=["components"];function q(){return q=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},q.apply(this,arguments)}function A(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var V={};function U(e){var t=e.components,n=A(e,L);return(0,r.mdx)("wrapper",q({},V,n,{components:t,mdxType:"MDXLayout"}),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-scss"},"")))}U.isMDXComponent=!0;var F=function(e){var t=e.title,n=e.description,r=e.isExpanded;return a.createElement(b.Z,{title:t||"Header Long Text With Content",description:n,example:a.createElement(R.Z,null),exampleCssSrc:a.createElement(U,null),exampleSrc:a.createElement(X,null),isExpanded:r})},G=n(912),K=["components"];function Y(){return Y=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},Y.apply(this,arguments)}function z(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var Q={};function J(e){var t=e.components,n=z(e,K);return(0,r.mdx)("wrapper",Y({},Q,n,{components:t,mdxType:"MDXLayout"}),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-jsx"},'import React from \'react\';\nimport Button from \'terra-button\';\nimport Header from \'terra-clinical-header\';\n\nconst Subheader = () => (\n  <div>\n    <Header\n      startContent={<Button aria-label="Consult, Dr. Carl" text="Consult" />}\n      text="Dr. Carl"\n      endContent={<Button text="Information" />}\n      isSubheader\n      level={3}\n    />\n  </div>\n);\n\nexport default Subheader;\n\n')))}J.isMDXComponent=!0;var $=function(e){var t=e.title,n=e.description,r=e.isExpanded;return a.createElement(b.Z,{title:t||"Subheader",description:n,example:a.createElement(G.Z,null),exampleSrc:a.createElement(J,null),isExpanded:r})},ee=["components"];function te(){return te=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},te.apply(this,arguments)}function ne(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var ae={},re="wrapper";function le(e){var t=e.components,n=ne(e,ee);return(0,r.mdx)(re,te({},ae,n,{components:t,mdxType:"MDXLayout"}),(0,r.mdx)(l.C,{mdxType:"Badge"}),(0,r.mdx)("h1",{id:"terra-clinical-header"},"Terra Clinical Header"),(0,r.mdx)("p",null,"A Header component that allows elements to be placed on the left and right ends of the header with a left aligned title in the center."),(0,r.mdx)("h2",{id:"getting-started"},"Getting Started"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},"Install with ",(0,r.mdx)("a",{parentName:"li",href:"https://www.npmjs.com/"},"npmjs"),":",(0,r.mdx)("ul",{parentName:"li"},(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("inlineCode",{parentName:"li"},"npm install terra-clinical-header"))))),(0,r.mdx)("h2",{id:"usage"},"Usage"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-jsx"},"import Header from 'terra-clinical-header';\n")),(0,r.mdx)("h2",{id:"component-features"},"Component Features"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("a",{parentName:"li",href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#cross-browser-support"},"Cross-Browser Support")),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("a",{parentName:"li",href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#responsive-support"},"Responsive Support")),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("a",{parentName:"li",href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#mobile-support"},"Mobile Support"))),(0,r.mdx)("h2",{id:"example"},"Example"),(0,r.mdx)(v,{title:"Header With Title Only",mdxType:"TitleHeader"}),(0,r.mdx)(w,{title:"Header With Content",mdxType:"ContentHeader"}),(0,r.mdx)(k,{title:"Header With Long Title",mdxType:"HeaderLongText"}),(0,r.mdx)(F,{title:"Header With Long Title, Children, And Content",mdxType:"HeaderLongTextWithContent"}),(0,r.mdx)($,{title:"Subheader With Content",mdxType:"Subheader"}),(0,r.mdx)("h2",{id:"header-props-table"},"Header Props Table"),(0,r.mdx)(m,{mdxType:"HeaderPropsTable"}))}le.isMDXComponent=!0},34749:function(e,t,n){n.d(t,{C:function(){return l}});var a=n(67294),r=n(22863),l=function(e){var t=e.url;return a.createElement(r.Z,{src:"https://github.com/cerner/terra-clinical/tree/main/packages/terra-clinical-header",name:"terra-clinical-header",version:"3.28.0",url:t})}},17422:function(e,t,n){n.r(t),t.default={badge:"Badges-module__badge___vex-+","badge-container":"Badges-module__badge-container___B13Mv","badge-name":"Badges-module__badge-name___jkN0m","badge-version":"Badges-module__badge-version___agZ+P"}},53560:function(e,t,n){n.r(t),t.default={"clinical-lowlight-theme":"ExampleTemplate-module__clinical-lowlight-theme___rBbtD","orion-fusion-theme":"ExampleTemplate-module__orion-fusion-theme___GzA23",template:"ExampleTemplate-module__template___a4uPk",header:"ExampleTemplate-module__header___iFXV3",content:"ExampleTemplate-module__content___48m4Q",description:"ExampleTemplate-module__description___NwBJo",footer:"ExampleTemplate-module__footer___GpSoG","button-container":"ExampleTemplate-module__button-container___rAD11",css:"ExampleTemplate-module__css___+jtk1",code:"ExampleTemplate-module__code___7rC6C","css-toggle":"ExampleTemplate-module__css-toggle___chHK7","code-toggle":"ExampleTemplate-module__code-toggle___TGlE-","is-selected":"ExampleTemplate-module__is-selected___0BYwS",item:"ExampleTemplate-module__item___8FTQq",chevron:"ExampleTemplate-module__chevron___VbY7N",title:"ExampleTemplate-module__title___r+nbJ","dynamic-content":"ExampleTemplate-module__dynamic-content___k+1H7"}},66983:function(e,t,n){n.r(t),t.default={"clinical-lowlight-theme":"Button-module__clinical-lowlight-theme___TyZWB","orion-fusion-theme":"Button-module__orion-fusion-theme___q-FcQ",button:"Button-module__button___QuCn2","is-active":"Button-module__is-active___Z8AuK"}},30866:function(e,t,n){n.r(t),t.default={"clinical-lowlight-theme":"Notice-module__clinical-lowlight-theme___aa5xV","orion-fusion-theme":"Notice-module__orion-fusion-theme___QAE-T",notice:"Notice-module__notice___GWkPA",children:"Notice-module__children___lDYsm",accessory:"Notice-module__accessory___wkLOG",title:"Notice-module__title___6H5tc","ux-recommendation":"Notice-module__ux-recommendation___N8BuK",caution:"Notice-module__caution___hPrVl",deprecation:"Notice-module__deprecation___g1drA",maintenance:"Notice-module__maintenance___kWLIZ",important:"Notice-module__important___p5DiF","not-supported":"Notice-module__not-supported___34bHd",paragraph:"Notice-module__paragraph___5h-w1",list:"Notice-module__list___M2Kxj"}},42620:function(e,t,n){n.r(t),t.default={"clinical-lowlight-theme":"Placeholder-module__clinical-lowlight-theme___Obm9K","orion-fusion-theme":"Placeholder-module__orion-fusion-theme___svHY+",placeholder:"Placeholder-module__placeholder___ZZDXd",inner:"Placeholder-module__inner___fJq9o",title:"Placeholder-module__title___teBSo"}},4747:function(e,t,n){n.r(t),t.default={"clinical-lowlight-theme":"Header-module__clinical-lowlight-theme___UjMS9","orion-fusion-theme":"Header-module__orion-fusion-theme___6toUR","flex-header":"Header-module__flex-header___fkWPf","flex-collapse":"Header-module__flex-collapse___VFeRx",subheader:"Header-module__subheader___-k6s6","flex-fill":"Header-module__flex-fill___rJ6d7","flex-end":"Header-module__flex-end___FAH0Y","title-container":"Header-module__title-container___8iDTh",title:"Header-module__title___63-qh"}},92713:function(e,t,n){n.r(t),t.default={}},77791:function(e,t,n){function a(e){return a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==a(e)&&"function"!=typeof e)return{default:e};var n=m(t);if(n&&n.has(e))return n.get(e);var r={},l=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var i=l?Object.getOwnPropertyDescriptor(e,o):null;i&&(i.get||i.set)?Object.defineProperty(r,o,i):r[o]=e[o]}r.default=e,n&&n.set(e,r);return r}(n(67294)),l=s(n(45697)),o=s(n(94184)),i=s(n(47166)),d=s(n(50026)),u=s(n(4747)),c=["children","title","startContent","endContent","text","level","id","isSubheader"];function s(e){return e&&e.__esModule?e:{default:e}}function m(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(m=function(e){return e?n:t})(e)}function p(){return p=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},p.apply(this,arguments)}function f(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var x=i.default.bind(u.default),h={id:l.default.string,children:l.default.element,startContent:l.default.element,level:l.default.oneOf([1,2,3,4,5,6]),text:l.default.string,title:l.default.string,endContent:l.default.element,isSubheader:l.default.bool},_=function(e){var t,n=e.children,a=e.title,l=e.startContent,i=e.endContent,u=e.text,s=e.level,m=e.id,h=e.isSubheader,_=f(e,c),y=(0,r.useContext)(d.default);if(a&&console.warn("The `title` prop has been renamed to `text`. Please update all references of `title` prop to `text`."),s||console.warn("Default heading level may not appropriate has it would fail to convey context of heading in a site / application where it is used. Heading level should be set explicitly depending on the position of header in site / application to allow screen readers to identify headers consistently."),a||u){var b=s?"h".concat(s):"h1";t=r.default.createElement("div",{className:x("title-container")},r.default.createElement(b,{id:m,className:x("title")},a||u))}var v=r.default.Children.map(n,(function(e){return r.default.cloneElement(e,{className:(0,o.default)([x("flex-collapse"),e.props.className])})})),g=(0,o.default)([x(["flex-header",{subheader:h},y.className]),_.className]);return r.default.createElement("header",p({},_,{className:g}),l&&r.default.createElement("div",{className:x("flex-end")},l),r.default.createElement("div",{className:x("flex-fill")},t),v,i&&r.default.createElement("div",{className:x("flex-end")},i))};_.propTypes=h,_.defaultProps={title:"",startContent:null,endContent:null,isSubheader:!1,text:""};var y=_;t.default=y},82333:function(e,t,n){t.Z=void 0;var a=o(n(67294)),r=o(n(55281)),l=o(n(77791));function o(e){return e&&e.__esModule?e:{default:e}}var i=function(){return a.default.createElement("div",null,a.default.createElement(l.default,{startContent:a.default.createElement(r.default,{text:"Button, Default Header"}),text:"Default Header",endContent:a.default.createElement(r.default,{"aria-label":"Button, Default Header",text:"Button"}),level:3}))};t.Z=i},76516:function(e,t,n){t.Z=void 0;var a=l(n(67294)),r=l(n(77791));function l(e){return e&&e.__esModule?e:{default:e}}var o=function(){return a.default.createElement("div",null,a.default.createElement(r.default,{text:"This is a header with long text .This is an element provides a customizable header layout with a prominent title options for the elements.This component saves time and effort in designing a header from scratch and ensures consistency across a website's pages.",level:3}))};t.Z=o},21846:function(e,t,n){t.Z=void 0;var a=u(n(67294)),r=u(n(47166)),l=n(34261),o=u(n(55281)),i=u(n(77791)),d=u(n(92713));function u(e){return e&&e.__esModule?e:{default:e}}var c=r.default.bind(d.default),s=function(){return a.default.createElement("div",null,a.default.createElement(i.default,{startContent:a.default.createElement(o.default,{"aria-label":"Back, Patient Information for Individual Diagnosed with a Chronic Disease",text:"Back"}),text:"Patient Information for Individual Diagnosed with a Chronic Disease in the past or currently suffering: Comprehensive Medical History,Treatment Plan,and Prognosis Report",endContent:a.default.createElement(o.default,{"aria-label":"print, Patient Information for Individual Diagnosed with a Chronic Disease",text:"print"}),level:3},a.default.createElement(o.default,{text:"Medical History"}),a.default.createElement(l.Placeholder,{className:c("placeholder-wrapper"),title:"Collapsible Menu View"})))};t.Z=s},912:function(e,t,n){t.Z=void 0;var a=o(n(67294)),r=o(n(55281)),l=o(n(77791));function o(e){return e&&e.__esModule?e:{default:e}}var i=function(){return a.default.createElement("div",null,a.default.createElement(l.default,{startContent:a.default.createElement(r.default,{"aria-label":"Consult, Dr. Carl",text:"Consult"}),text:"Dr. Carl",endContent:a.default.createElement(r.default,{text:"Information"}),isSubheader:!0,level:3}))};t.Z=i},25295:function(e,t,n){t.Z=void 0;var a=l(n(67294)),r=l(n(77791));function l(e){return e&&e.__esModule?e:{default:e}}var o=function(){return a.default.createElement(r.default,{text:"Default Header",level:3})};t.Z=o},33864:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=l(n(67294)),r=l(n(99139));function l(e){return e&&e.__esModule?e:{default:e}}function o(){return o=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},o.apply(this,arguments)}var i=function(e){var t=o({},e);return a.default.createElement(r.default,t,a.default.createElement("path",{d:"M10.3 24 33.8 0l3.9 3.8L18 24l19.7 20.2-3.9 3.8z"}))};i.displayName="IconChevronLeft",i.defaultProps={viewBox:"0 0 48 48","data-name":"Layer 1",xmlns:"http://www.w3.org/2000/svg"};var d=i;t.default=d}}]);