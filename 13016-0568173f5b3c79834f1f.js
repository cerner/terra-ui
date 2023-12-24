"use strict";(self.webpackChunkterra_ui=self.webpackChunkterra_ui||[]).push([[13016,45627,37344,85565,33667,96890,79482,3353,5161,45865,80858,14041,85355,16835,3193,4845,46647,27444,17657,85161,16873,38681,15318,66097,90941,40411,18101,38443,11264,79057,33315,34319,20116,33609,78996,39915,33442],{25191:function(e,t,n){function a(e){return a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a(e)}t.Z=void 0;var r=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=a(e)&&"function"!=typeof e)return{default:e};var n=c(t);if(n&&n.has(e))return n.get(e);var r={__proto__:null},l=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var i=l?Object.getOwnPropertyDescriptor(e,o):null;i&&(i.get||i.set)?Object.defineProperty(r,o,i):r[o]=e[o]}return r.default=e,n&&n.set(e,r),r}(n(67294)),l=d(n(4959)),o=d(n(55281)),i=n(34614),u=n(34261);function d(e){return e&&e.__esModule?e:{default:e}}function c(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(c=function(e){return e?n:t})(e)}function m(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var a,r,l,o,i=[],u=!0,d=!1;try{if(l=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;u=!1}else for(;!(u=(a=l.call(n)).done)&&(i.push(a.value),i.length!==t);u=!0);}catch(e){d=!0,r=e}finally{try{if(!u&&null!=n.return&&(o=n.return(),Object(o)!==o))return}finally{if(d)throw r}}return i}}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return s(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return s(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function s(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}t.Z=function(){var e=m((0,r.useState)(),2),t=e[0],n=e[1];return r.default.createElement("div",null,r.default.createElement("label",null,"Alignment:",r.default.createElement("select",{onChange:function(e){n(e.target.value)}},r.default.createElement("option",{value:"start"},"start"),r.default.createElement("option",{value:"center"},"center"),r.default.createElement("option",{value:"end"},"end"))),r.default.createElement("br",null),r.default.createElement(l.default,{ariaLabel:"Documentation Tools",ariaControls:"test-content-id",align:t},r.default.createElement(o.default,{text:"Edit",variant:"utility",icon:r.default.createElement(i.IconEdit,null)}),r.default.createElement(o.default,{text:"Add",variant:"utility",icon:r.default.createElement(i.IconAdd,null)}),r.default.createElement(o.default,{text:"Attachment",variant:"utility",icon:r.default.createElement(i.IconAttachment,null)})),r.default.createElement("div",{id:"test-content-id","aria-label":"Add Progress Note Documentation"},r.default.createElement(u.Placeholder,{title:"Sample Content Area for Toolbar"})))}},22863:function(e,t,n){var a=n(64836);t.Z=void 0;var r=a(n(67294)),l=a(n(45697)),o=a(n(47166)),i=a(n(17422)),u=o.default.bind(i.default),d={name:l.default.string.isRequired,src:l.default.string,url:l.default.string,version:l.default.string.isRequired},c=function(e){var t=e.src,n=e.name,a=e.url,l=e.version,o=r.default.createElement("a",{className:u("badge"),href:a||"https://www.npmjs.org/package/".concat(n,"/v/").concat(l)},r.default.createElement("span",{className:u("badge-name")},a?"package":"npm"),r.default.createElement("span",{className:u("badge-version")},"v".concat(l))),i=t?r.default.createElement("a",{className:u("badge"),href:t},r.default.createElement("span",{className:u("badge-name")},"github"),r.default.createElement("span",{className:u("badge-version")},"source")):void 0;return r.default.createElement("div",{className:u("badge-container")},o,i)};c.propTypes=d;var m=c;t.Z=m},49271:function(e,t,n){var a=n(64836),r=n(18698);t.Z=void 0;var l=a(n(27424)),o=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==r(e)&&"function"!=typeof e)return{default:e};var n=f(t);if(n&&n.has(e))return n.get(e);var a={},l=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var i=l?Object.getOwnPropertyDescriptor(e,o):null;i&&(i.get||i.set)?Object.defineProperty(a,o,i):a[o]=e[o]}a.default=e,n&&n.set(e,a);return a}(n(67294)),i=a(n(45697)),u=a(n(47166)),d=n(21538),c=a(n(33864)),m=a(n(23399)),s=n(51051),p=a(n(53560));function f(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(f=function(e){return e?n:t})(e)}var _=u.default.bind(p.default),b={example:i.default.element,exampleSrc:i.default.element,exampleCssSrc:i.default.element,title:i.default.string,description:i.default.node,isExpanded:i.default.bool},x=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","true")},y=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","false")},g=function(e){var t=e.example,n=e.exampleSrc,a=e.exampleCssSrc,r=e.title,i=e.description,u=e.isExpanded,p=(0,o.useState)(u),f=(0,l.default)(p,2),b=f[0],g=f[1],h=(0,o.useState)(!1),v=(0,l.default)(h,2),N=v[0],O=v[1],E=o.default.useContext(d.ThemeContext),T=void 0!==a,j=function(){O(!N),b&&g(!b)},w=function(){g(!b),N&&O(!N)},C=function(e,t){e.nativeEvent.keyCode!==s.KEY_SPACE&&e.nativeEvent.keyCode!==s.KEY_RETURN||(e.preventDefault(),t())};return o.default.createElement("div",{className:_("template",E.className)},o.default.createElement("div",{className:_("header")},r&&o.default.createElement("h2",{className:_("title")},r)),o.default.createElement("div",{className:_("content")},i&&o.default.createElement("div",{className:_("description")},i),t),o.default.createElement("div",{className:_("footer")},n?o.default.createElement("div",{className:_("button-container")},T&&o.default.createElement("button",{type:"button",className:_("css-toggle","item",{"is-selected":N}),onClick:j,onKeyDown:function(e){return C(e,j)},onBlur:x,onMouseDown:y,tabIndex:0,"data-focus-styles-enabled":!0},o.default.createElement(c.default,{className:_("chevron")}),o.default.createElement("span",null,"CSS"),o.default.createElement(m.default,{className:_("chevron")})),o.default.createElement("button",{type:"button",className:_("code-toggle","item",{"is-selected":b}),onClick:w,onKeyDown:function(e){return C(e,w)},onBlur:x,onMouseDown:y,tabIndex:0,"data-focus-styles-enabled":!0},o.default.createElement(c.default,{className:_("chevron")}),o.default.createElement("span",null,"Code"),o.default.createElement(m.default,{className:_("chevron")}))):null,o.default.createElement("div",null,N&&o.default.createElement("div",{className:_("css")},a),b&&o.default.createElement("div",{className:_("code")},n))))};g.propTypes=b,g.defaultProps={isExpanded:!1};var h=g;t.Z=h},40996:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=d(n(67294)),r=d(n(45697)),l=d(n(47166)),o=d(n(50026)),i=d(n(66983)),u=["children"];function d(e){return e&&e.__esModule?e:{default:e}}function c(){return c=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},c.apply(this,arguments)}function m(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=l.default.bind(i.default),p=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","true")},f=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","false")},_={children:r.default.string},b=function(e){var t=e.children,n=m(e,u),r=a.default.useContext(o.default),i=(0,l.default)(s(["button",r.className]),n.className);return a.default.createElement("button",c({},n,{type:"button",className:i,onBlur:p,onMouseDown:f,"data-focus-styles-enabled":!0}),t)};b.propTypes=_;t.default=b},59278:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=u(n(67294)),r=u(n(45697)),l=u(n(47166)),o=u(n(50026)),i=u(n(30866));function u(e){return e&&e.__esModule?e:{default:e}}var d=l.default.bind(i.default),c={ariaLevel:r.default.oneOf(["2","3","4","5","6"]),children:r.default.node,variant:r.default.oneOf(["ux-recommendation","caution","deprecation","maintenance","important","not-supported"])},m=function(e){var t=e.ariaLevel,n=e.variant,r=e.children,l=a.default.useContext(o.default);return a.default.createElement("div",{className:d("notice",n,l.className)},a.default.createElement("div",{className:d("accessory"),"aria-hidden":"true",focusable:"false"}),a.default.createElement("div",{role:"heading",className:d("title"),"aria-level":t},a.default.createElement("span",null,function(e){return"ux-recommendation"===e?"UX Recommendation":"caution"===e?"Caution":"deprecation"===e?"Deprecation Notice":"maintenance"===e?"In Maintenance":"important"===e?"Important":"not-supported"===e?"Hazards for Incorrect Usage":"error"}(n))),a.default.createElement("div",{className:d("children")},function(e){return"not-supported"===e?a.default.createElement(a.default.Fragment,null,a.default.createElement("p",{className:d("paragraph")},"This component was designed and tested according to the documented implementation."),a.default.createElement("p",{className:d("paragraph")},"Using the component incorrectly:",a.default.createElement("ul",{className:d("list")},a.default.createElement("li",null,"will likely result in improper composition and create accessibility issues"),a.default.createElement("li",null,"may cause erratic or broken behaviors and styles"),a.default.createElement("li",null,a.default.createElement("strong",null,"will not be supported "),"or enhanced to allow for incorrect use")))):null}(n),a.default.Children.map(r,(function(e){return"string"==typeof e?a.default.createElement("p",null,e):e}))))};m.propTypes=c,m.defaultProps={ariaLevel:"2",variant:"important"};t.default=m},47306:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=c(n(67294)),r=c(n(45697)),l=c(n(94184)),o=c(n(47166)),i=c(n(50026)),u=c(n(42620)),d=["title"];function c(e){return e&&e.__esModule?e:{default:e}}function m(){return m=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},m.apply(this,arguments)}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=o.default.bind(u.default),f={title:r.default.string},_=function(e){var t=e.title,n=s(e,d),r=a.default.useContext(i.default),o=(0,l.default)(p(["placeholder",r.className]),n.className),u=p(["inner"]);return a.default.createElement("div",m({},n,{className:o}),a.default.createElement("div",{className:u},a.default.createElement("p",{className:p("title")},t)))};_.propTypes=f,_.defaultProps={title:""};t.default=_},34261:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"Button",{enumerable:!0,get:function(){return l.default}}),Object.defineProperty(t,"Notice",{enumerable:!0,get:function(){return a.default}}),Object.defineProperty(t,"Placeholder",{enumerable:!0,get:function(){return r.default}});var a=o(n(59278)),r=o(n(47306)),l=o(n(40996));function o(e){return e&&e.__esModule?e:{default:e}}},5337:function(e,t,n){n.r(t),n.d(t,{default:function(){return j}});var a=n(67294),r=n(81254),l=n(90814),o=n(25191),i=["components"];function u(){return u=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},u.apply(this,arguments)}function d(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c={};function m(e){var t=e.components,n=d(e,i);return(0,r.mdx)("wrapper",u({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-jsx"},'import React, { useState } from \'react\';\nimport Toolbar from \'terra-toolbar\';\nimport Button from \'terra-button\';\nimport {\n  IconAdd,\n  IconAttachment,\n  IconEdit,\n} from \'terra-icon\';\nimport { Placeholder } from \'@cerner/terra-docs\';\n\nexport default () => {\n  const [align, setAlign] = useState();\n  const handleOnChange = (event) => {\n    setAlign(event.target.value);\n  };\n\n  return (\n    <div>\n      <label>\n        Alignment:\n        <select onChange={handleOnChange}>\n          <option value="start">start</option>\n          <option value="center">center</option>\n          <option value="end">end</option>\n        </select>\n      </label>\n      <br />\n      <Toolbar ariaLabel="Documentation Tools" ariaControls="test-content-id" align={align}>\n        <Button text="Edit" variant="utility" icon={<IconEdit />} />\n        <Button text="Add" variant="utility" icon={<IconAdd />} />\n        <Button text="Attachment" variant="utility" icon={<IconAttachment />} />\n      </Toolbar>\n      <div id="test-content-id" aria-label="Add Progress Note Documentation">\n        <Placeholder title="Sample Content Area for Toolbar" />\n      </div>\n    </div>\n  );\n};\n\n')))}m.isMDXComponent=!0;var s=n(49271),p=function(e){var t=e.title,n=e.description,r=e.isExpanded;return a.createElement(s.Z,{title:t||"Default Toolbar",description:n,example:a.createElement(o.Z,null),exampleSrc:a.createElement(m,null),isExpanded:r})},f=n(78530),_=["components"];function b(){return b=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},b.apply(this,arguments)}function x(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var y={},g="wrapper";function h(e){var t=e.components,n=x(e,_);return(0,r.mdx)(g,b({},y,n,{components:t,mdxType:"MDXLayout"}),(0,r.mdx)(f.ZP,{mdxType:"PropsTable"},(0,r.mdx)(f.X2,{key:"ROW1",mdxType:"Row"},(0,r.mdx)(f.O,{mdxType:"PropNameCell"},"align"),(0,r.mdx)(f.Di,{mdxType:"TypeCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"enum: [\n  'start'\n  'end'\n  'center'\n],\n"))),(0,r.mdx)(f.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,r.mdx)(f.mW,{mdxType:"DefaultValueCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"'start'\n"))),(0,r.mdx)(f.Ex,{mdxType:"DescriptionCell"},(0,r.mdx)("p",null,"Content alignment. Align to start, end, or center."))),(0,r.mdx)(f.X2,{key:"ROW2",mdxType:"Row"},(0,r.mdx)(f.O,{mdxType:"PropNameCell"},"ariaControls"),(0,r.mdx)(f.Di,{mdxType:"TypeCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"string\n"))),(0,r.mdx)(f.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,r.mdx)(f.mW,{mdxType:"DefaultValueCell"},(0,r.mdx)("p",null,"none")),(0,r.mdx)(f.Ex,{mdxType:"DescriptionCell"},(0,r.mdx)("p",null,"String that labels the content that the toolbar controls. Should reference\nthe id of the content area that the toolbar controls."))),(0,r.mdx)(f.X2,{key:"ROW3",mdxType:"Row"},(0,r.mdx)(f.O,{mdxType:"PropNameCell"},"ariaLabel"),(0,r.mdx)(f.Di,{mdxType:"TypeCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"string\n"))),(0,r.mdx)(f.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,r.mdx)(f.mW,{mdxType:"DefaultValueCell"},(0,r.mdx)("p",null,"none")),(0,r.mdx)(f.Ex,{mdxType:"DescriptionCell"},(0,r.mdx)("p",null,"String that labels the content that the toolbar controls. ",(0,r.mdx)("inlineCode",{parentName:"p"},"ariaLabel")," only be used\nwhen no visible label for the toolbar is present. ",(0,r.mdx)("inlineCode",{parentName:"p"},"ariaLabelledBy")," should be\nused over ",(0,r.mdx)("inlineCode",{parentName:"p"},"ariaLabel")," when possible."))),(0,r.mdx)(f.X2,{key:"ROW4",mdxType:"Row"},(0,r.mdx)(f.O,{mdxType:"PropNameCell"},"ariaLabelledBy"),(0,r.mdx)(f.Di,{mdxType:"TypeCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"string\n"))),(0,r.mdx)(f.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,r.mdx)(f.mW,{mdxType:"DefaultValueCell"},(0,r.mdx)("p",null,"none")),(0,r.mdx)(f.Ex,{mdxType:"DescriptionCell"},(0,r.mdx)("p",null,"String that labels the content that the toolbar controls. Should reference\nthe visible text label that describes the toolbar's function. If no\nvisible text label is present, ",(0,r.mdx)("inlineCode",{parentName:"p"},"ariaLabel")," should be used instead. If both\n",(0,r.mdx)("inlineCode",{parentName:"p"},"ariaLabel")," and ",(0,r.mdx)("inlineCode",{parentName:"p"},"ariaLabelledBy")," are present, ",(0,r.mdx)("inlineCode",{parentName:"p"},"ariaLabelledBy")," will be used."))),(0,r.mdx)(f.X2,{key:"ROW5",mdxType:"Row"},(0,r.mdx)(f.O,{mdxType:"PropNameCell"},"children"),(0,r.mdx)(f.Di,{mdxType:"TypeCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"node\n"))),(0,r.mdx)(f.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,r.mdx)(f.mW,{mdxType:"DefaultValueCell"},(0,r.mdx)("p",null,"none")),(0,r.mdx)(f.Ex,{mdxType:"DescriptionCell"},(0,r.mdx)("p",null,"Items to be displayed in toolbar such as buttons, button groups, and links.")))))}h.isMDXComponent=!0;var v=["components"];function N(){return N=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},N.apply(this,arguments)}function O(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var E={},T="wrapper";function j(e){var t=e.components,n=O(e,v);return(0,r.mdx)(T,N({},E,n,{components:t,mdxType:"MDXLayout"}),(0,r.mdx)(l.C,{mdxType:"Badge"}),(0,r.mdx)("h1",{id:"terra-toolbar"},"Terra Toolbar"),(0,r.mdx)("p",null,"The terra-toolbar component is used to display bar containing items such as buttons, button groups, and links."),(0,r.mdx)("h2",{id:"getting-started"},"Getting Started"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},"Install with ",(0,r.mdx)("a",{parentName:"li",href:"https://www.npmjs.com/"},"npmjs"),":",(0,r.mdx)("ul",{parentName:"li"},(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("inlineCode",{parentName:"li"},"npm install terra-toolbar"))))),(0,r.mdx)("h2",{id:"peer-dependencies"},"Peer Dependencies"),(0,r.mdx)("p",null,"This component requires the following peer dependencies be installed in your app for the component to properly function."),(0,r.mdx)("table",null,(0,r.mdx)("thead",{parentName:"table"},(0,r.mdx)("tr",{parentName:"thead"},(0,r.mdx)("th",{parentName:"tr",align:null},"Peer Dependency"),(0,r.mdx)("th",{parentName:"tr",align:null},"Version"))),(0,r.mdx)("tbody",{parentName:"table"},(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"react"),(0,r.mdx)("td",{parentName:"tr",align:null},"^16.8.5")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"react-dom"),(0,r.mdx)("td",{parentName:"tr",align:null},"^16.8.5")))),(0,r.mdx)("h2",{id:"usage"},"Usage"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-jsx"},"import Toolbar from 'terra-toolbar';\n")),(0,r.mdx)("h2",{id:"component-features"},"Component Features"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("p",{parentName:"li"},(0,r.mdx)("a",{parentName:"p",href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#cross-browser-support"},"Cross-Browser Support"))),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("p",{parentName:"li"},(0,r.mdx)("a",{parentName:"p",href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#responsive-support"},"Responsive Support"))),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("p",{parentName:"li"},(0,r.mdx)("a",{parentName:"p",href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#mobile-support"},"Mobile Support"))),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("p",{parentName:"li"},(0,r.mdx)("a",{parentName:"p",href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#ltr--rtl"},"LTR/RTL Support")),(0,r.mdx)("h2",{parentName:"li",id:"examples"},"Examples"),(0,r.mdx)(p,{title:"A Basic Toolbar using the aria-label and aria-controls attributes for accessibility",description:"For assistive technology users, this example adds the aria-label attribute to name the type of tools this \ntoolbar contains, and adds the aria-controls attribute to indicate which page region the toolbar applies to.",mdxType:"DefaultToolbar"}),(0,r.mdx)("h2",{parentName:"li",id:"toolbar-props"},"Toolbar Props"),(0,r.mdx)(h,{mdxType:"PropsTable"}))))}j.isMDXComponent=!0},90814:function(e,t,n){n.d(t,{C:function(){return l}});var a=n(67294),r=n(22863),l=function(e){var t=e.url;return a.createElement(r.Z,{src:"https://github.com/cerner/terra-core/tree/main/packages/terra-toolbar",name:"terra-toolbar",version:"1.42.0",url:t})}},17422:function(e,t,n){n.r(t),t.default={badge:"Badges-module__badge___vex-+","badge-container":"Badges-module__badge-container___B13Mv","badge-name":"Badges-module__badge-name___jkN0m","badge-version":"Badges-module__badge-version___agZ+P"}},53560:function(e,t,n){n.r(t),t.default={"clinical-lowlight-theme":"ExampleTemplate-module__clinical-lowlight-theme___rBbtD","orion-fusion-theme":"ExampleTemplate-module__orion-fusion-theme___GzA23",template:"ExampleTemplate-module__template___a4uPk",header:"ExampleTemplate-module__header___iFXV3",content:"ExampleTemplate-module__content___48m4Q",description:"ExampleTemplate-module__description___NwBJo",footer:"ExampleTemplate-module__footer___GpSoG","button-container":"ExampleTemplate-module__button-container___rAD11",css:"ExampleTemplate-module__css___+jtk1",code:"ExampleTemplate-module__code___7rC6C","css-toggle":"ExampleTemplate-module__css-toggle___chHK7","code-toggle":"ExampleTemplate-module__code-toggle___TGlE-","is-selected":"ExampleTemplate-module__is-selected___0BYwS",item:"ExampleTemplate-module__item___8FTQq",chevron:"ExampleTemplate-module__chevron___VbY7N",title:"ExampleTemplate-module__title___r+nbJ","dynamic-content":"ExampleTemplate-module__dynamic-content___k+1H7"}},66983:function(e,t,n){n.r(t),t.default={"clinical-lowlight-theme":"Button-module__clinical-lowlight-theme___TyZWB","orion-fusion-theme":"Button-module__orion-fusion-theme___q-FcQ",button:"Button-module__button___QuCn2","is-active":"Button-module__is-active___Z8AuK"}},30866:function(e,t,n){n.r(t),t.default={"clinical-lowlight-theme":"Notice-module__clinical-lowlight-theme___aa5xV","orion-fusion-theme":"Notice-module__orion-fusion-theme___QAE-T",notice:"Notice-module__notice___GWkPA",children:"Notice-module__children___lDYsm",accessory:"Notice-module__accessory___wkLOG",title:"Notice-module__title___6H5tc","ux-recommendation":"Notice-module__ux-recommendation___N8BuK",caution:"Notice-module__caution___hPrVl",deprecation:"Notice-module__deprecation___g1drA",maintenance:"Notice-module__maintenance___kWLIZ",important:"Notice-module__important___p5DiF","not-supported":"Notice-module__not-supported___34bHd",paragraph:"Notice-module__paragraph___5h-w1",list:"Notice-module__list___M2Kxj"}},42620:function(e,t,n){n.r(t),t.default={"clinical-lowlight-theme":"Placeholder-module__clinical-lowlight-theme___Obm9K","orion-fusion-theme":"Placeholder-module__orion-fusion-theme___svHY+",placeholder:"Placeholder-module__placeholder___ZZDXd",inner:"Placeholder-module__inner___fJq9o",title:"Placeholder-module__title___teBSo"}},41241:function(e,t,n){n.r(t),t.default={"clinical-lowlight-theme":"Toolbar-module__clinical-lowlight-theme___lhZh0","orion-fusion-theme":"Toolbar-module__orion-fusion-theme___Oq6Xn",toolbar:"Toolbar-module__toolbar___XowP8",item:"Toolbar-module__item___K92Xb","start-align":"Toolbar-module__start-align___Ap05A","end-align":"Toolbar-module__end-align___WLp5E","center-align":"Toolbar-module__center-align___5f+ex"}},4959:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=c(n(67294)),r=c(n(45697)),l=c(n(94184)),o=c(n(47166)),i=c(n(50026)),u=c(n(41241)),d=["align","ariaControls","ariaLabel","ariaLabelledBy","children"];function c(e){return e&&e.__esModule?e:{default:e}}function m(){return m=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},m.apply(this,arguments)}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=o.default.bind(u.default),f={align:r.default.oneOf(["start","end","center"]),ariaControls:r.default.string,ariaLabel:r.default.string,ariaLabelledBy:r.default.string,children:r.default.node},_=function(e){var t=e.align,n=e.ariaControls,r=e.ariaLabel,o=e.ariaLabelledBy,u=e.children,c=s(e,d),f=a.default.useContext(i.default),_=(0,l.default)(p("toolbar","".concat(t,"-align"),f.className),c.className),b=a.default.Children.map(u,(function(e){return e?a.default.createElement("div",{className:p("item")},e):e}));return a.default.createElement("div",m({},c,{"aria-controls":n,"aria-label":o?void 0:r,"aria-labelledby":o,className:_,role:"toolbar"}),b)};_.propTypes=f,_.defaultProps={align:"start"};t.default=_}}]);