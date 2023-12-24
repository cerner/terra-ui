"use strict";(self.webpackChunkterra_ui=self.webpackChunkterra_ui||[]).push([[68546],{49271:function(e,t,a){var n=a(64836),l=a(18698);t.Z=void 0;var r=n(a(27424)),u=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==l(e)&&"function"!=typeof e)return{default:e};var a=p(t);if(a&&a.has(e))return a.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var u in e)if("default"!==u&&Object.prototype.hasOwnProperty.call(e,u)){var i=r?Object.getOwnPropertyDescriptor(e,u):null;i&&(i.get||i.set)?Object.defineProperty(n,u,i):n[u]=e[u]}n.default=e,a&&a.set(e,n);return n}(a(67294)),i=n(a(45697)),o=n(a(47166)),d=a(21538),c=n(a(33864)),s=n(a(23399)),m=a(51051),f=n(a(53560));function p(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,a=new WeakMap;return(p=function(e){return e?a:t})(e)}var _=o.default.bind(f.default),b={example:i.default.element,exampleSrc:i.default.element,exampleCssSrc:i.default.element,title:i.default.string,description:i.default.node,isExpanded:i.default.bool},v=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","true")},h=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","false")},g=function(e){var t=e.example,a=e.exampleSrc,n=e.exampleCssSrc,l=e.title,i=e.description,o=e.isExpanded,f=(0,u.useState)(o),p=(0,r.default)(f,2),b=p[0],g=p[1],y=(0,u.useState)(!1),x=(0,r.default)(y,2),E=x[0],O=x[1],w=u.default.useContext(d.ThemeContext),j=void 0!==n,C=function(){O(!E),b&&g(!b)},S=function(){g(!b),E&&O(!E)},T=function(e,t){e.nativeEvent.keyCode!==m.KEY_SPACE&&e.nativeEvent.keyCode!==m.KEY_RETURN||(e.preventDefault(),t())};return u.default.createElement("div",{className:_("template",w.className)},u.default.createElement("div",{className:_("header")},l&&u.default.createElement("h2",{className:_("title")},l)),u.default.createElement("div",{className:_("content")},i&&u.default.createElement("div",{className:_("description")},i),t),u.default.createElement("div",{className:_("footer")},a?u.default.createElement("div",{className:_("button-container")},j&&u.default.createElement("button",{type:"button",className:_("css-toggle","item",{"is-selected":E}),onClick:C,onKeyDown:function(e){return T(e,C)},onBlur:v,onMouseDown:h,tabIndex:0,"data-focus-styles-enabled":!0},u.default.createElement(c.default,{className:_("chevron")}),u.default.createElement("span",null,"CSS"),u.default.createElement(s.default,{className:_("chevron")})),u.default.createElement("button",{type:"button",className:_("code-toggle","item",{"is-selected":b}),onClick:S,onKeyDown:function(e){return T(e,S)},onBlur:v,onMouseDown:h,tabIndex:0,"data-focus-styles-enabled":!0},u.default.createElement(c.default,{className:_("chevron")}),u.default.createElement("span",null,"Code"),u.default.createElement(s.default,{className:_("chevron")}))):null,u.default.createElement("div",null,E&&u.default.createElement("div",{className:_("css")},n),b&&u.default.createElement("div",{className:_("code")},a))))};g.propTypes=b,g.defaultProps={isExpanded:!1};var y=g;t.Z=y},67783:function(e,t,a){var n=a(64836),l=a(18698);t.Z=void 0;var r=n(a(27424)),u=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=l(e)&&"function"!=typeof e)return{default:e};var a=o(t);if(a&&a.has(e))return a.get(e);var n={__proto__:null},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var u in e)if("default"!==u&&Object.prototype.hasOwnProperty.call(e,u)){var i=r?Object.getOwnPropertyDescriptor(e,u):null;i&&(i.get||i.set)?Object.defineProperty(n,u,i):n[u]=e[u]}return n.default=e,a&&a.set(e,n),n}(a(67294)),i=n(a(10299));function o(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,a=new WeakMap;return(o=function(e){return e?a:t})(e)}t.Z=function(){var e=(0,u.useState)(20),t=(0,r.default)(e,2),a=t[0],n=t[1],l="Slider value is: ".concat(a);return u.default.createElement(u.default.Fragment,null,u.default.createElement(i.default,{minimumValue:0,maximumValue:100,label:"Zoom",value:a,onChange:function(e){n(e)}}),u.default.createElement("p",null,l))}},68546:function(e,t,a){a.r(t),a.d(t,{default:function(){return h}});var n=a(67294),l=a(81254),r=a(67783),u=["components"];function i(){return i=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},i.apply(this,arguments)}function o(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var d={};function c(e){var t=e.components,a=o(e,u);return(0,l.mdx)("wrapper",i({},d,a,{components:t,mdxType:"MDXLayout"}),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React, { useState } from 'react';\nimport Slider from 'terra-slider';\n\nconst SliderWithOnChangeCallback = () => {\n  const [value, setValue] = useState(20);\n\n  const handleChange = (v) => {\n    setValue(v);\n  };\n  const message = `Slider value is: ${value}`;\n\n  return (\n    <>\n      <Slider\n        minimumValue={0}\n        maximumValue={100}\n        label=\"Zoom\"\n        value={value}\n        onChange={handleChange}\n      />\n      <p>{message}</p>\n    </>\n  );\n};\n\nexport default SliderWithOnChangeCallback;\n\n")))}c.isMDXComponent=!0;var s=a(49271),m=function(e){var t=e.title,a=e.description,l=e.isExpanded;return n.createElement(s.Z,{title:t||"Slider With On Change Callback",description:a,example:n.createElement(r.Z,null),exampleSrc:n.createElement(c,null),isExpanded:l})},f=["components"];function p(){return p=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},p.apply(this,arguments)}function _(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var b={},v="wrapper";function h(e){var t=e.components,a=_(e,f);return(0,l.mdx)(v,p({},b,a,{components:t,mdxType:"MDXLayout"}),(0,l.mdx)("h1",{id:"slider-with-onchange-callback"},"Slider with onChange callback"),(0,l.mdx)("h3",{id:"description"},"Description"),(0,l.mdx)("p",null,"This example demonstrates a ",(0,l.mdx)("a",{parentName:"p",href:"/terra-ui/components/cerner-terra-framework-docs/slider/about"},"slider")," with an onChange callback that uses the onChange callback property and value property."),(0,l.mdx)(m,{mdxType:"SliderWithOnChangeCallback"}))}h.isMDXComponent=!0},53560:function(e,t,a){a.r(t),t.default={"clinical-lowlight-theme":"ExampleTemplate-module__clinical-lowlight-theme___rBbtD","orion-fusion-theme":"ExampleTemplate-module__orion-fusion-theme___GzA23",template:"ExampleTemplate-module__template___a4uPk",header:"ExampleTemplate-module__header___iFXV3",content:"ExampleTemplate-module__content___48m4Q",description:"ExampleTemplate-module__description___NwBJo",footer:"ExampleTemplate-module__footer___GpSoG","button-container":"ExampleTemplate-module__button-container___rAD11",css:"ExampleTemplate-module__css___+jtk1",code:"ExampleTemplate-module__code___7rC6C","css-toggle":"ExampleTemplate-module__css-toggle___chHK7","code-toggle":"ExampleTemplate-module__code-toggle___TGlE-","is-selected":"ExampleTemplate-module__is-selected___0BYwS",item:"ExampleTemplate-module__item___8FTQq",chevron:"ExampleTemplate-module__chevron___VbY7N",title:"ExampleTemplate-module__title___r+nbJ","dynamic-content":"ExampleTemplate-module__dynamic-content___k+1H7"}},32732:function(e,t,a){a.r(t),t.default={"orion-fusion-theme":"Slider-module__orion-fusion-theme___2PbQc","clinical-lowlight-theme":"Slider-module__clinical-lowlight-theme___R1BVD",slider:"Slider-module__slider___V+TKI",label:"Slider-module__label___WVm+Y","slider-label":"Slider-module__slider-label___FlOV2","slider-min-label":"Slider-module__slider-min-label___rBjxu","slider-max-label":"Slider-module__slider-max-label___LyZGd","input-range":"Slider-module__input-range___Tin8Y"}},33864:function(e,t,a){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(a(67294)),l=r(a(99139));function r(e){return e&&e.__esModule?e:{default:e}}function u(){return u=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},u.apply(this,arguments)}var i=function(e){var t=u({},e);return n.default.createElement(l.default,t,n.default.createElement("path",{d:"M10.3 24 33.8 0l3.9 3.8L18 24l19.7 20.2-3.9 3.8z"}))};i.displayName="IconChevronLeft",i.defaultProps={viewBox:"0 0 48 48","data-name":"Layer 1",xmlns:"http://www.w3.org/2000/svg"};t.default=i},10299:function(e,t,a){var n=a(64836),l=a(18698);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(a(27424)),u=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=l(e)&&"function"!=typeof e)return{default:e};var a=p(t);if(a&&a.has(e))return a.get(e);var n={__proto__:null},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var u in e)if("default"!==u&&Object.prototype.hasOwnProperty.call(e,u)){var i=r?Object.getOwnPropertyDescriptor(e,u):null;i&&(i.get||i.set)?Object.defineProperty(n,u,i):n[u]=e[u]}return n.default=e,a&&a.set(e,n),n}(a(67294)),i=n(a(45697)),o=n(a(47166)),d=n(a(50026)),c=n(a(29270)),s=a(25387),m=a(55877),f=n(a(32732));function p(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,a=new WeakMap;return(p=function(e){return e?a:t})(e)}var _=o.default.bind(f.default),b={label:i.default.string.isRequired,minimumValue:i.default.number.isRequired,maximumValue:i.default.number.isRequired,value:i.default.number.isRequired,isDisabled:i.default.bool,minimumLabel:i.default.string,maximumLabel:i.default.string,onChange:i.default.func,intl:i.default.shape({formatMessage:i.default.func}).isRequired},v=function(e){var t=e.isDisabled,a=e.intl,n=e.minimumValue,l=e.maximumValue,i=e.label,o=e.minimumLabel,s=e.maximumLabel,f=e.onChange,p=e.value,b=(0,u.useContext)(d.default),v=_(["slider",b.className]),h=(0,u.useRef)(),g=o||n,y=s||l,x=o&&s?a.formatMessage({id:"Terra.slider.ariaDescribedByTextWithLabels"},{minimumLabel:o,maximumLabel:s,minimumValue:n,maximumValue:l}):a.formatMessage({id:"Terra.slider.ariaDescribedByTextWithoutLabels"},{minimumValue:n,maximumValue:l}),E=(0,m.v4)(),O=(0,u.useState)(p),w=(0,r.default)(O,2),j=w[0],C=w[1];(0,u.useEffect)((function(){C(p)}),[p]);return u.default.createElement("div",{style:{"--terra-slider-progress-status":"".concat(j,"%")},className:v},u.default.createElement("span",{className:_("label"),"aria-hidden":"true"},i),u.default.createElement("span",{className:_("slider-label","slider-min-label"),"aria-hidden":"true"},g),u.default.createElement("input",{className:_("input-range"),type:"range",ref:h,"aria-label":i,"aria-describedby":E,value:j,disabled:t,min:n,max:l,onChange:function(e){C(e.currentTarget.value),f&&f(e.currentTarget.value)}}),u.default.createElement("span",{className:_("slider-label","slider-max-label"),"aria-hidden":"true"},y),u.default.createElement(c.default,{id:E,text:x}))};v.propTypes=b,v.defaultProps={isDisabled:!1};t.default=(0,s.injectIntl)(v)}}]);