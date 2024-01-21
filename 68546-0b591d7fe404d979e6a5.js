"use strict";(self.webpackChunkterra_ui=self.webpackChunkterra_ui||[]).push([[68546],{49271:function(e,t,a){var l=a(64836),n=a(18698);t.Z=void 0;var r=l(a(27424)),u=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=n(e)&&"function"!=typeof e)return{default:e};var a=p(t);if(a&&a.has(e))return a.get(e);var l={__proto__:null},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var u in e)if("default"!==u&&Object.prototype.hasOwnProperty.call(e,u)){var i=r?Object.getOwnPropertyDescriptor(e,u):null;i&&(i.get||i.set)?Object.defineProperty(l,u,i):l[u]=e[u]}return l.default=e,a&&a.set(e,l),l}(a(67294)),i=l(a(45697)),o=l(a(19845)),d=a(21538),c=l(a(33864)),s=l(a(23399)),m=a(51051),f=l(a(53560));function p(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,a=new WeakMap;return(p=function(e){return e?a:t})(e)}var _=o.default.bind(f.default),b={example:i.default.element,exampleSrc:i.default.element,exampleCssSrc:i.default.element,title:i.default.string,description:i.default.node,isExpanded:i.default.bool},v=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","true")},h=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","false")},g=function(e){var t=e.example,a=e.exampleSrc,l=e.exampleCssSrc,n=e.title,i=e.description,o=e.isExpanded,f=(0,u.useState)(o),p=(0,r.default)(f,2),b=p[0],g=p[1],y=(0,u.useState)(!1),x=(0,r.default)(y,2),E=x[0],O=x[1],w=u.default.useContext(d.ThemeContext),j=void 0!==l,C=function(){O(!E),b&&g(!b)},S=function(){g(!b),E&&O(!E)},T=function(e,t){e.nativeEvent.keyCode!==m.KEY_SPACE&&e.nativeEvent.keyCode!==m.KEY_RETURN||(e.preventDefault(),t())};return u.default.createElement("div",{className:_("template",w.className)},u.default.createElement("div",{className:_("header")},n&&u.default.createElement("h2",{className:_("title")},n)),u.default.createElement("div",{className:_("content")},i&&u.default.createElement("div",{className:_("description")},i),t),u.default.createElement("div",{className:_("footer")},a?u.default.createElement("div",{className:_("button-container")},j&&u.default.createElement("button",{type:"button",className:_("css-toggle","item",{"is-selected":E}),onClick:C,onKeyDown:function(e){return T(e,C)},onBlur:v,onMouseDown:h,tabIndex:0,"data-focus-styles-enabled":!0},u.default.createElement(c.default,{className:_("chevron")}),u.default.createElement("span",null,"CSS"),u.default.createElement(s.default,{className:_("chevron")})),u.default.createElement("button",{type:"button",className:_("code-toggle","item",{"is-selected":b}),onClick:S,onKeyDown:function(e){return T(e,S)},onBlur:v,onMouseDown:h,tabIndex:0,"data-focus-styles-enabled":!0},u.default.createElement(c.default,{className:_("chevron")}),u.default.createElement("span",null,"Code"),u.default.createElement(s.default,{className:_("chevron")}))):null,u.default.createElement("div",null,E&&u.default.createElement("div",{className:_("css")},l),b&&u.default.createElement("div",{className:_("code")},a))))};g.propTypes=b,g.defaultProps={isExpanded:!1};t.Z=g},67783:function(e,t,a){var l=a(64836),n=a(18698);t.Z=void 0;var r=l(a(27424)),u=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=n(e)&&"function"!=typeof e)return{default:e};var a=o(t);if(a&&a.has(e))return a.get(e);var l={__proto__:null},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var u in e)if("default"!==u&&Object.prototype.hasOwnProperty.call(e,u)){var i=r?Object.getOwnPropertyDescriptor(e,u):null;i&&(i.get||i.set)?Object.defineProperty(l,u,i):l[u]=e[u]}return l.default=e,a&&a.set(e,l),l}(a(67294)),i=l(a(10299));function o(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,a=new WeakMap;return(o=function(e){return e?a:t})(e)}t.Z=function(){var e=(0,u.useState)(20),t=(0,r.default)(e,2),a=t[0],l=t[1],n="Slider value is: ".concat(a);return u.default.createElement(u.default.Fragment,null,u.default.createElement(i.default,{minimumValue:0,maximumValue:100,label:"Zoom",value:a,onChange:function(e){l(e)}}),u.default.createElement("p",null,n))}},68546:function(e,t,a){a.r(t),a.d(t,{default:function(){return h}});var l=a(67294),n=a(81254),r=a(67783),u=["components"];function i(){return i=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var l in a)Object.prototype.hasOwnProperty.call(a,l)&&(e[l]=a[l])}return e},i.apply(this,arguments)}function o(e,t){if(null==e)return{};var a,l,n=function(e,t){if(null==e)return{};var a,l,n={},r=Object.keys(e);for(l=0;l<r.length;l++)a=r[l],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(l=0;l<r.length;l++)a=r[l],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var d={};function c(e){var t=e.components,a=o(e,u);return(0,n.mdx)("wrapper",i({},d,a,{components:t,mdxType:"MDXLayout"}),(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React, { useState } from 'react';\nimport Slider from 'terra-slider';\n\nconst SliderWithOnChangeCallback = () => {\n  const [value, setValue] = useState(20);\n\n  const handleChange = (v) => {\n    setValue(v);\n  };\n  const message = `Slider value is: ${value}`;\n\n  return (\n    <>\n      <Slider\n        minimumValue={0}\n        maximumValue={100}\n        label=\"Zoom\"\n        value={value}\n        onChange={handleChange}\n      />\n      <p>{message}</p>\n    </>\n  );\n};\n\nexport default SliderWithOnChangeCallback;\n\n")))}c.isMDXComponent=!0;var s=a(49271),m=function(e){var t=e.title,a=e.description,n=e.isExpanded;return l.createElement(s.Z,{title:t||"Slider With On Change Callback",description:a,example:l.createElement(r.Z,null),exampleSrc:l.createElement(c,null),isExpanded:n})},f=["components"];function p(){return p=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var l in a)Object.prototype.hasOwnProperty.call(a,l)&&(e[l]=a[l])}return e},p.apply(this,arguments)}function _(e,t){if(null==e)return{};var a,l,n=function(e,t){if(null==e)return{};var a,l,n={},r=Object.keys(e);for(l=0;l<r.length;l++)a=r[l],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(l=0;l<r.length;l++)a=r[l],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var b={},v="wrapper";function h(e){var t=e.components,a=_(e,f);return(0,n.mdx)(v,p({},b,a,{components:t,mdxType:"MDXLayout"}),(0,n.mdx)("h1",{id:"slider-with-onchange-callback"},"Slider with onChange callback"),(0,n.mdx)("h3",{id:"description"},"Description"),(0,n.mdx)("p",null,"This example demonstrates a ",(0,n.mdx)("a",{parentName:"p",href:"/terra-ui/components/cerner-terra-framework-docs/slider/about"},"slider")," with an onChange callback that uses the onChange callback property and value property."),(0,n.mdx)(m,{mdxType:"SliderWithOnChangeCallback"}))}h.isMDXComponent=!0},53560:function(e,t,a){a.r(t),t.default={"clinical-lowlight-theme":"ExampleTemplate-module__clinical-lowlight-theme___rBbtD","orion-fusion-theme":"ExampleTemplate-module__orion-fusion-theme___GzA23",template:"ExampleTemplate-module__template___a4uPk",header:"ExampleTemplate-module__header___iFXV3",content:"ExampleTemplate-module__content___48m4Q",description:"ExampleTemplate-module__description___NwBJo",footer:"ExampleTemplate-module__footer___GpSoG","button-container":"ExampleTemplate-module__button-container___rAD11",css:"ExampleTemplate-module__css___+jtk1",code:"ExampleTemplate-module__code___7rC6C","css-toggle":"ExampleTemplate-module__css-toggle___chHK7","code-toggle":"ExampleTemplate-module__code-toggle___TGlE-","is-selected":"ExampleTemplate-module__is-selected___0BYwS",item:"ExampleTemplate-module__item___8FTQq",chevron:"ExampleTemplate-module__chevron___VbY7N",title:"ExampleTemplate-module__title___r+nbJ","dynamic-content":"ExampleTemplate-module__dynamic-content___k+1H7"}},32732:function(e,t,a){a.r(t),t.default={"orion-fusion-theme":"Slider-module__orion-fusion-theme___2PbQc","clinical-lowlight-theme":"Slider-module__clinical-lowlight-theme___R1BVD",slider:"Slider-module__slider___V+TKI",label:"Slider-module__label___WVm+Y","slider-label":"Slider-module__slider-label___FlOV2","slider-min-label":"Slider-module__slider-min-label___rBjxu","slider-max-label":"Slider-module__slider-max-label___LyZGd","input-range":"Slider-module__input-range___Tin8Y"}},33864:function(e,t,a){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=r(a(67294)),n=r(a(99139));function r(e){return e&&e.__esModule?e:{default:e}}function u(){return u=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var l in a)Object.prototype.hasOwnProperty.call(a,l)&&(e[l]=a[l])}return e},u.apply(this,arguments)}var i=function(e){var t=u({},e);return l.default.createElement(n.default,t,l.default.createElement("path",{d:"M10.3 24 33.8 0l3.9 3.8L18 24l19.7 20.2-3.9 3.8z"}))};i.displayName="IconChevronLeft",i.defaultProps={viewBox:"0 0 48 48","data-name":"Layer 1",xmlns:"http://www.w3.org/2000/svg"};t.default=i},10299:function(e,t,a){var l=a(64836),n=a(18698);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=l(a(27424)),u=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=n(e)&&"function"!=typeof e)return{default:e};var a=p(t);if(a&&a.has(e))return a.get(e);var l={__proto__:null},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var u in e)if("default"!==u&&Object.prototype.hasOwnProperty.call(e,u)){var i=r?Object.getOwnPropertyDescriptor(e,u):null;i&&(i.get||i.set)?Object.defineProperty(l,u,i):l[u]=e[u]}return l.default=e,a&&a.set(e,l),l}(a(67294)),i=l(a(45697)),o=l(a(19845)),d=l(a(50026)),c=l(a(29270)),s=a(25387),m=a(55877),f=l(a(32732));function p(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,a=new WeakMap;return(p=function(e){return e?a:t})(e)}var _=o.default.bind(f.default),b={label:i.default.string.isRequired,minimumValue:i.default.number.isRequired,maximumValue:i.default.number.isRequired,value:i.default.number.isRequired,isDisabled:i.default.bool,minimumLabel:i.default.string,maximumLabel:i.default.string,onChange:i.default.func,intl:i.default.shape({formatMessage:i.default.func}).isRequired},v=function(e){var t=e.isDisabled,a=e.intl,l=e.minimumValue,n=e.maximumValue,i=e.label,o=e.minimumLabel,s=e.maximumLabel,f=e.onChange,p=e.value,b=(0,u.useContext)(d.default),v=_(["slider",b.className]),h=(0,u.useRef)(),g=o||l,y=s||n,x=o&&s?a.formatMessage({id:"Terra.slider.ariaDescribedByTextWithLabels"},{minimumLabel:o,maximumLabel:s,minimumValue:l,maximumValue:n}):a.formatMessage({id:"Terra.slider.ariaDescribedByTextWithoutLabels"},{minimumValue:l,maximumValue:n}),E=(0,m.v4)(),O=(0,u.useState)(p),w=(0,r.default)(O,2),j=w[0],C=w[1];(0,u.useEffect)((function(){C(p)}),[p]);return u.default.createElement("div",{style:{"--terra-slider-progress-status":"".concat(j,"%")},className:v},u.default.createElement("span",{className:_("label"),"aria-hidden":"true"},i),u.default.createElement("span",{className:_("slider-label","slider-min-label"),"aria-hidden":"true"},g),u.default.createElement("input",{className:_("input-range"),type:"range",ref:h,"aria-label":i,"aria-describedby":E,value:j,disabled:t,min:l,max:n,onChange:function(e){C(e.currentTarget.value),f&&f(e.currentTarget.value)}}),u.default.createElement("span",{className:_("slider-label","slider-max-label"),"aria-hidden":"true"},y),u.default.createElement(c.default,{id:E,text:x}))};v.propTypes=b,v.defaultProps={isDisabled:!1};t.default=(0,s.injectIntl)(v)}}]);