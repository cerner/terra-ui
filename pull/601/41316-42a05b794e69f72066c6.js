"use strict";(self.webpackChunkterra_ui=self.webpackChunkterra_ui||[]).push([[41316,45627,85565,79482,3353,5161,45865,80858,85355,3193,4845,46647,85161,38681,15318,66097,40411,18101,38443,11264,34319,20116,33609,78996,39915,33442],{22863:function(e,t,n){var r=n(64836);t.Z=void 0;var a=r(n(67294)),l=r(n(45697)),i=r(n(47166)),o=r(n(17422)),u=i.default.bind(o.default),d={name:l.default.string.isRequired,src:l.default.string,url:l.default.string,version:l.default.string.isRequired},m=function(e){var t=e.src,n=e.name,r=e.url,l=e.version,i=a.default.createElement("a",{className:u("badge"),href:r||"https://www.npmjs.org/package/".concat(n,"/v/").concat(l)},a.default.createElement("span",{className:u("badge-name")},r?"package":"npm"),a.default.createElement("span",{className:u("badge-version")},"v".concat(l))),o=t?a.default.createElement("a",{className:u("badge"),href:t},a.default.createElement("span",{className:u("badge-name")},"github"),a.default.createElement("span",{className:u("badge-version")},"source")):void 0;return a.default.createElement("div",{className:u("badge-container")},i,o)};m.propTypes=d;var c=m;t.Z=c},40996:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=d(n(67294)),a=d(n(45697)),l=d(n(47166)),i=d(n(50026)),o=d(n(66983)),u=["children"];function d(e){return e&&e.__esModule?e:{default:e}}function m(){return m=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},m.apply(this,arguments)}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=l.default.bind(o.default),s=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","true")},f=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","false")},x={children:a.default.string},y=function(e){var t=e.children,n=c(e,u),a=r.default.useContext(i.default),o=(0,l.default)(p(["button",a.className]),n.className);return r.default.createElement("button",m({},n,{type:"button",className:o,onBlur:s,onMouseDown:f,"data-focus-styles-enabled":!0}),t)};y.propTypes=x;t.default=y},59278:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=u(n(67294)),a=u(n(45697)),l=u(n(47166)),i=u(n(50026)),o=u(n(30866));function u(e){return e&&e.__esModule?e:{default:e}}var d=l.default.bind(o.default),m={ariaLevel:a.default.oneOf(["2","3","4","5","6"]),children:a.default.node,variant:a.default.oneOf(["ux-recommendation","caution","deprecation","maintenance","important","not-supported"])},c=function(e){var t=e.ariaLevel,n=e.variant,a=e.children,l=r.default.useContext(i.default);return r.default.createElement("div",{className:d("notice",n,l.className)},r.default.createElement("div",{className:d("accessory"),"aria-hidden":"true",focusable:"false"}),r.default.createElement("div",{role:"heading",className:d("title"),"aria-level":t},r.default.createElement("span",null,function(e){return"ux-recommendation"===e?"UX Recommendation":"caution"===e?"Caution":"deprecation"===e?"Deprecation Notice":"maintenance"===e?"In Maintenance":"important"===e?"Important":"not-supported"===e?"Hazards for Incorrect Usage":"error"}(n))),r.default.createElement("div",{className:d("children")},function(e){return"not-supported"===e?r.default.createElement(r.default.Fragment,null,r.default.createElement("p",{className:d("paragraph")},"This component was designed and tested according to the documented implementation."),r.default.createElement("p",{className:d("paragraph")},"Using the component incorrectly:",r.default.createElement("ul",{className:d("list")},r.default.createElement("li",null,"will likely result in improper composition and create accessibility issues"),r.default.createElement("li",null,"may cause erratic or broken behaviors and styles"),r.default.createElement("li",null,r.default.createElement("strong",null,"will not be supported "),"or enhanced to allow for incorrect use")))):null}(n),r.default.Children.map(a,(function(e){return"string"==typeof e?r.default.createElement("p",null,e):e}))))};c.propTypes=m,c.defaultProps={ariaLevel:"2",variant:"important"};t.default=c},47306:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=m(n(67294)),a=m(n(45697)),l=m(n(94184)),i=m(n(47166)),o=m(n(50026)),u=m(n(42620)),d=["title"];function m(e){return e&&e.__esModule?e:{default:e}}function c(){return c=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},c.apply(this,arguments)}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=i.default.bind(u.default),f={title:a.default.string},x=function(e){var t=e.title,n=p(e,d),a=r.default.useContext(o.default),i=(0,l.default)(s(["placeholder",a.className]),n.className),u=s(["inner"]);return r.default.createElement("div",c({},n,{className:i}),r.default.createElement("div",{className:u},r.default.createElement("p",{className:s("title")},t)))};x.propTypes=f,x.defaultProps={title:""};t.default=x},34261:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"Button",{enumerable:!0,get:function(){return l.default}}),Object.defineProperty(t,"Notice",{enumerable:!0,get:function(){return r.default}}),Object.defineProperty(t,"Placeholder",{enumerable:!0,get:function(){return a.default}});var r=i(n(59278)),a=i(n(47306)),l=i(n(40996));function i(e){return e&&e.__esModule?e:{default:e}}},57659:function(e,t,n){var r=n(64836);t.Z=void 0;var a=r(n(67294)),l=r(n(10299));t.Z=function(){return a.default.createElement(l.default,{minimumValue:0,maximumValue:100,label:"Zoom",minimumLabel:"0%",maximumLabel:"100%",value:20})}},33143:function(e,t,n){var r=n(64836);t.Z=void 0;var a=r(n(67294)),l=r(n(10299));t.Z=function(){return a.default.createElement(l.default,{minimumValue:0,maximumValue:100,label:"Size",value:50})}},90574:function(e,t,n){var r=n(64836);t.Z=void 0;var a=r(n(67294)),l=r(n(10299));t.Z=function(){return a.default.createElement(l.default,{isDisabled:!0,minimumValue:0,maximumValue:100,label:"Size",value:50})}},67783:function(e,t,n){var r=n(64836),a=n(18698);t.Z=void 0;var l=r(n(27424)),i=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=a(e)&&"function"!=typeof e)return{default:e};var n=u(t);if(n&&n.has(e))return n.get(e);var r={__proto__:null},l=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if("default"!==i&&Object.prototype.hasOwnProperty.call(e,i)){var o=l?Object.getOwnPropertyDescriptor(e,i):null;o&&(o.get||o.set)?Object.defineProperty(r,i,o):r[i]=e[i]}return r.default=e,n&&n.set(e,r),r}(n(67294)),o=r(n(10299));function u(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(u=function(e){return e?n:t})(e)}t.Z=function(){var e=(0,i.useState)("20"),t=(0,l.default)(e,2),n=t[0],r=t[1],a="Slider value is: ".concat(n);return i.default.createElement(i.default.Fragment,null,i.default.createElement(o.default,{minimumValue:0,maximumValue:100,label:"Zoom",value:n,onChange:function(e){r(e)}}),i.default.createElement("p",null,a))}},35671:function(e,t,n){n.r(t),n.d(t,{default:function(){return N}});n(67294);var r=n(81254),a=n(34261),l=n(64131),i=n(78530),o=["components"];function u(){return u=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},u.apply(this,arguments)}function d(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var m={},c="wrapper";function p(e){var t=e.components,n=d(e,o);return(0,r.mdx)(c,u({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.mdx)(i.ZP,{mdxType:"PropsTable"},(0,r.mdx)(i.X2,{key:"ROW1",mdxType:"Row"},(0,r.mdx)(i.O,{mdxType:"PropNameCell"},"label"),(0,r.mdx)(i.Di,{mdxType:"TypeCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"string\n"))),(0,r.mdx)(i.dS,{isRequired:!0,mdxType:"RequiredCell"}),(0,r.mdx)(i.mW,{mdxType:"DefaultValueCell"},(0,r.mdx)("p",null,"none")),(0,r.mdx)(i.Ex,{mdxType:"DescriptionCell"},(0,r.mdx)("p",null,"The label for the slider."))),(0,r.mdx)(i.X2,{key:"ROW2",mdxType:"Row"},(0,r.mdx)(i.O,{mdxType:"PropNameCell"},"minimumValue"),(0,r.mdx)(i.Di,{mdxType:"TypeCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"number\n"))),(0,r.mdx)(i.dS,{isRequired:!0,mdxType:"RequiredCell"}),(0,r.mdx)(i.mW,{mdxType:"DefaultValueCell"},(0,r.mdx)("p",null,"none")),(0,r.mdx)(i.Ex,{mdxType:"DescriptionCell"},(0,r.mdx)("p",null,"Minimum value in the range."))),(0,r.mdx)(i.X2,{key:"ROW3",mdxType:"Row"},(0,r.mdx)(i.O,{mdxType:"PropNameCell"},"maximumValue"),(0,r.mdx)(i.Di,{mdxType:"TypeCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"number\n"))),(0,r.mdx)(i.dS,{isRequired:!0,mdxType:"RequiredCell"}),(0,r.mdx)(i.mW,{mdxType:"DefaultValueCell"},(0,r.mdx)("p",null,"none")),(0,r.mdx)(i.Ex,{mdxType:"DescriptionCell"},(0,r.mdx)("p",null,"Maximum value in the range."))),(0,r.mdx)(i.X2,{key:"ROW4",mdxType:"Row"},(0,r.mdx)(i.O,{mdxType:"PropNameCell"},"value"),(0,r.mdx)(i.Di,{mdxType:"TypeCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"number\n"))),(0,r.mdx)(i.dS,{isRequired:!0,mdxType:"RequiredCell"}),(0,r.mdx)(i.mW,{mdxType:"DefaultValueCell"},(0,r.mdx)("p",null,"none")),(0,r.mdx)(i.Ex,{mdxType:"DescriptionCell"},(0,r.mdx)("p",null,"Default or initial value for the slider."))),(0,r.mdx)(i.X2,{key:"ROW5",mdxType:"Row"},(0,r.mdx)(i.O,{mdxType:"PropNameCell"},"isDisabled"),(0,r.mdx)(i.Di,{mdxType:"TypeCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"bool\n"))),(0,r.mdx)(i.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,r.mdx)(i.mW,{mdxType:"DefaultValueCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"false\n"))),(0,r.mdx)(i.Ex,{mdxType:"DescriptionCell"},(0,r.mdx)("p",null,"When true, will disable the field."))),(0,r.mdx)(i.X2,{key:"ROW6",mdxType:"Row"},(0,r.mdx)(i.O,{mdxType:"PropNameCell"},"minimumLabel"),(0,r.mdx)(i.Di,{mdxType:"TypeCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"string\n"))),(0,r.mdx)(i.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,r.mdx)(i.mW,{mdxType:"DefaultValueCell"},(0,r.mdx)("p",null,"none")),(0,r.mdx)(i.Ex,{mdxType:"DescriptionCell"},(0,r.mdx)("p",null,"Minimum value label to display on the left side of the slider."))),(0,r.mdx)(i.X2,{key:"ROW7",mdxType:"Row"},(0,r.mdx)(i.O,{mdxType:"PropNameCell"},"maximumLabel"),(0,r.mdx)(i.Di,{mdxType:"TypeCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"string\n"))),(0,r.mdx)(i.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,r.mdx)(i.mW,{mdxType:"DefaultValueCell"},(0,r.mdx)("p",null,"none")),(0,r.mdx)(i.Ex,{mdxType:"DescriptionCell"},(0,r.mdx)("p",null,"Maximum value label to display on the right side of the slider."))),(0,r.mdx)(i.X2,{key:"ROW8",mdxType:"Row"},(0,r.mdx)(i.O,{mdxType:"PropNameCell"},"onChange"),(0,r.mdx)(i.Di,{mdxType:"TypeCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"func\n"))),(0,r.mdx)(i.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,r.mdx)(i.mW,{mdxType:"DefaultValueCell"},(0,r.mdx)("p",null,"none")),(0,r.mdx)(i.Ex,{mdxType:"DescriptionCell"},(0,r.mdx)("p",null,"Function to trigger when user changes the input value - function(value).")))))}p.isMDXComponent=!0;var s=n(9629),f=n(93062),x=n(24713),y=n(44523),b=n(89153),g=["components"];function v(){return v=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},v.apply(this,arguments)}function h(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var _={},O="wrapper";function N(e){var t=e.components,n=h(e,g);return(0,r.mdx)(O,v({},_,n,{components:t,mdxType:"MDXLayout"}),(0,r.mdx)(l.C,{mdxType:"Badge"}),(0,r.mdx)("h1",{id:"terra-slider"},"Terra Slider"),(0,r.mdx)("p",null,"Terra Slider provides a way to select a value from a given range by sliding a thumb along a bar to track the value."),(0,r.mdx)(a.Notice,{variant:"caution",ariaLevel:"2",mdxType:"Notice"},"Terra Slider is an input component used to quickly select an imprecise value within a range such as a zoom level. It does not yet include features required for entering precise values."),(0,r.mdx)("h2",{id:"getting-started"},"Getting Started"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},"Install with ",(0,r.mdx)("a",{parentName:"li",href:"https://www.npmjs.com/"},"npmjs"),":",(0,r.mdx)("ul",{parentName:"li"},(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("inlineCode",{parentName:"li"},"npm install terra-slider"))))),(0,r.mdx)("h2",{id:"peer-dependencies"},"Peer Dependencies"),(0,r.mdx)("p",null,"This component requires the following peer dependencies be installed in your app for the component to properly function."),(0,r.mdx)("table",null,(0,r.mdx)("thead",{parentName:"table"},(0,r.mdx)("tr",{parentName:"thead"},(0,r.mdx)("th",{parentName:"tr",align:null},"Peer Dependency"),(0,r.mdx)("th",{parentName:"tr",align:null},"Version"))),(0,r.mdx)("tbody",{parentName:"table"},(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"react"),(0,r.mdx)("td",{parentName:"tr",align:null},"^16.8.5")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"react-dom"),(0,r.mdx)("td",{parentName:"tr",align:null},"^16.8.5")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"react-intl"),(0,r.mdx)("td",{parentName:"tr",align:null},"^2.8.0")))),(0,r.mdx)("h2",{id:"component-features"},"Component Features"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("a",{parentName:"li",href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#cross-browser-support"},"Cross-Browser Support")),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("a",{parentName:"li",href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#mobile-support"},"Mobile Support")),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("a",{parentName:"li",href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#internationalization-i18n"},"Internationalization Support")),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("a",{parentName:"li",href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#ltr--rtl"},"LTR/RTL Support"))),(0,r.mdx)("h2",{id:"examples"},"Examples"),(0,r.mdx)(s.Z,{mdxType:"DefaultSlider"}),(0,r.mdx)(f.Z,{mdxType:"CustomSlider"}),(0,r.mdx)(x.Z,{mdxType:"DisabledSlider"}),(0,r.mdx)(y.Z,{mdxType:"SliderWithOnChangeCallback"}),(0,r.mdx)(b.Z,{mdxType:"SliderWithValueUpdate"}),(0,r.mdx)("h2",{id:"slider-props-table"},"Slider props table"),(0,r.mdx)(p,{mdxType:"SliderPropsTable"}))}N.isMDXComponent=!0},93062:function(e,t,n){n.d(t,{Z:function(){return p}});var r=n(67294),a=n(57659),l=n(81254),i=["components"];function o(){return o=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o.apply(this,arguments)}function u(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var d={};function m(e){var t=e.components,n=u(e,i);return(0,l.mdx)("wrapper",o({},d,n,{components:t,mdxType:"MDXLayout"}),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-jsx"},'import React from \'react\';\nimport Slider from \'terra-slider\';\n\nconst CustomSlider = () => (\n  <Slider\n    minimumValue={0}\n    maximumValue={100}\n    label="Zoom"\n    minimumLabel="0%"\n    maximumLabel="100%"\n    value={20}\n  />\n);\n\nexport default CustomSlider;\n\n')))}m.isMDXComponent=!0;var c=n(49271),p=function(e){var t=e.title,n=e.description,l=e.isExpanded;return r.createElement(c.Z,{title:t||"Custom Slider",description:n,example:r.createElement(a.Z,null),exampleSrc:r.createElement(m,null),isExpanded:l})}},9629:function(e,t,n){n.d(t,{Z:function(){return p}});var r=n(67294),a=n(33143),l=n(81254),i=["components"];function o(){return o=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o.apply(this,arguments)}function u(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var d={};function m(e){var t=e.components,n=u(e,i);return(0,l.mdx)("wrapper",o({},d,n,{components:t,mdxType:"MDXLayout"}),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport Slider from 'terra-slider';\n\nconst DefaultSlider = () => (\n  <Slider\n    minimumValue={0}\n    maximumValue={100}\n    label=\"Size\"\n    value={50}\n  />\n);\n\nexport default DefaultSlider;\n\n")))}m.isMDXComponent=!0;var c=n(49271),p=function(e){var t=e.title,n=e.description,l=e.isExpanded;return r.createElement(c.Z,{title:t||"Default Slider",description:n,example:r.createElement(a.Z,null),exampleSrc:r.createElement(m,null),isExpanded:l})}},24713:function(e,t,n){n.d(t,{Z:function(){return p}});var r=n(67294),a=n(90574),l=n(81254),i=["components"];function o(){return o=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o.apply(this,arguments)}function u(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var d={};function m(e){var t=e.components,n=u(e,i);return(0,l.mdx)("wrapper",o({},d,n,{components:t,mdxType:"MDXLayout"}),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport Slider from 'terra-slider';\n\nconst DisabledSlider = () => (\n  <Slider\n    isDisabled\n    minimumValue={0}\n    maximumValue={100}\n    label=\"Size\"\n    value={50}\n  />\n);\n\nexport default DisabledSlider;\n\n")))}m.isMDXComponent=!0;var c=n(49271),p=function(e){var t=e.title,n=e.description,l=e.isExpanded;return r.createElement(c.Z,{title:t||"Disabled Slider",description:n,example:r.createElement(a.Z,null),exampleSrc:r.createElement(m,null),isExpanded:l})}},44523:function(e,t,n){n.d(t,{Z:function(){return p}});var r=n(67294),a=n(67783),l=n(81254),i=["components"];function o(){return o=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o.apply(this,arguments)}function u(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var d={};function m(e){var t=e.components,n=u(e,i);return(0,l.mdx)("wrapper",o({},d,n,{components:t,mdxType:"MDXLayout"}),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React, { useState } from 'react';\nimport Slider from 'terra-slider';\n\nconst SliderWithOnChangeCallback = () => {\n  const [value, setValue] = useState('20');\n\n  const handleChange = (v) => {\n    setValue(v);\n  };\n  const message = `Slider value is: ${value}`;\n\n  return (\n    <>\n      <Slider\n        minimumValue={0}\n        maximumValue={100}\n        label=\"Zoom\"\n        value={value}\n        onChange={handleChange}\n      />\n      <p>{message}</p>\n    </>\n  );\n};\n\nexport default SliderWithOnChangeCallback;\n\n")))}m.isMDXComponent=!0;var c=n(49271),p=function(e){var t=e.title,n=e.description,l=e.isExpanded;return r.createElement(c.Z,{title:t||"Slider With On Change Callback",description:n,example:r.createElement(a.Z,null),exampleSrc:r.createElement(m,null),isExpanded:l})}},64131:function(e,t,n){n.d(t,{C:function(){return l}});var r=n(67294),a=n(22863),l=function(e){var t=e.url;return r.createElement(a.Z,{src:"https://github.com/cerner/terra-framework/tree/main/packages/terra-slider",name:"terra-slider",version:"1.1.1",url:t})}},17422:function(e,t,n){n.r(t),t.default={badge:"Badges-module__badge___vex-+","badge-container":"Badges-module__badge-container___B13Mv","badge-name":"Badges-module__badge-name___jkN0m","badge-version":"Badges-module__badge-version___agZ+P"}},66983:function(e,t,n){n.r(t),t.default={"clinical-lowlight-theme":"Button-module__clinical-lowlight-theme___TyZWB","orion-fusion-theme":"Button-module__orion-fusion-theme___q-FcQ",button:"Button-module__button___QuCn2","is-active":"Button-module__is-active___Z8AuK"}},30866:function(e,t,n){n.r(t),t.default={"clinical-lowlight-theme":"Notice-module__clinical-lowlight-theme___aa5xV","orion-fusion-theme":"Notice-module__orion-fusion-theme___QAE-T",notice:"Notice-module__notice___GWkPA",children:"Notice-module__children___lDYsm",accessory:"Notice-module__accessory___wkLOG",title:"Notice-module__title___6H5tc","ux-recommendation":"Notice-module__ux-recommendation___N8BuK",caution:"Notice-module__caution___hPrVl",deprecation:"Notice-module__deprecation___g1drA",maintenance:"Notice-module__maintenance___kWLIZ",important:"Notice-module__important___p5DiF","not-supported":"Notice-module__not-supported___34bHd",paragraph:"Notice-module__paragraph___5h-w1",list:"Notice-module__list___M2Kxj"}},42620:function(e,t,n){n.r(t),t.default={"clinical-lowlight-theme":"Placeholder-module__clinical-lowlight-theme___Obm9K","orion-fusion-theme":"Placeholder-module__orion-fusion-theme___svHY+",placeholder:"Placeholder-module__placeholder___ZZDXd",inner:"Placeholder-module__inner___fJq9o",title:"Placeholder-module__title___teBSo"}}}]);