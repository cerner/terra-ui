"use strict";(self.webpackChunkterra_ui=self.webpackChunkterra_ui||[]).push([[3469,45627,37344,33667,96890,79482,85565,3353,5161,80858,14041,45865,16835,85355,3193,4845,27444,17657,46647,16873,85161,66097,38681,15318,40411,18101,33315,38443,11264,78996,39915,33442],{22863:function(e,t,a){var r=a(64836);t.Z=void 0;var n=r(a(67294)),o=r(a(45697)),l=r(a(47166)),i=r(a(17422)),u=l.default.bind(i.default),s={name:o.default.string.isRequired,src:o.default.string,url:o.default.string,version:o.default.string.isRequired},c=function(e){var t=e.src,a=e.name,r=e.url,o=e.version,l=n.default.createElement("a",{className:u("badge"),href:r||"https://www.npmjs.org/package/".concat(a,"/v/").concat(o)},n.default.createElement("span",{className:u("badge-name")},r?"package":"npm"),n.default.createElement("span",{className:u("badge-version")},"v".concat(o))),i=t?n.default.createElement("a",{className:u("badge"),href:t},n.default.createElement("span",{className:u("badge-name")},"github"),n.default.createElement("span",{className:u("badge-version")},"source")):void 0;return n.default.createElement("div",{className:u("badge-container")},l,i)};c.propTypes=s;var f=c;t.Z=f},49271:function(e,t,a){var r=a(64836),n=a(18698);t.Z=void 0;var o=r(a(27424)),l=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==n(e)&&"function"!=typeof e)return{default:e};var a=p(t);if(a&&a.has(e))return a.get(e);var r={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var l in e)if("default"!==l&&Object.prototype.hasOwnProperty.call(e,l)){var i=o?Object.getOwnPropertyDescriptor(e,l):null;i&&(i.get||i.set)?Object.defineProperty(r,l,i):r[l]=e[l]}r.default=e,a&&a.set(e,r);return r}(a(67294)),i=r(a(45697)),u=r(a(47166)),s=a(21538),c=r(a(33864)),f=r(a(23399)),d=a(51051),m=r(a(53560));function p(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,a=new WeakMap;return(p=function(e){return e?a:t})(e)}var _=u.default.bind(m.default),b={example:i.default.element,exampleSrc:i.default.element,exampleCssSrc:i.default.element,title:i.default.string,description:i.default.node,isExpanded:i.default.bool},h=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","true")},v=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","false")},g=function(e){var t=e.example,a=e.exampleSrc,r=e.exampleCssSrc,n=e.title,i=e.description,u=e.isExpanded,m=(0,l.useState)(u),p=(0,o.default)(m,2),b=p[0],g=p[1],y=(0,l.useState)(!1),x=(0,o.default)(y,2),w=x[0],E=x[1],O=l.default.useContext(s.ThemeContext),T=void 0!==r,j=function(){E(!w),b&&g(!b)},P=function(){g(!b),w&&E(!w)},C=function(e,t){e.nativeEvent.keyCode!==d.KEY_SPACE&&e.nativeEvent.keyCode!==d.KEY_RETURN||(e.preventDefault(),t())};return l.default.createElement("div",{className:_("template",O.className)},l.default.createElement("div",{className:_("header")},n&&l.default.createElement("h2",{className:_("title")},n)),l.default.createElement("div",{className:_("content")},i&&l.default.createElement("div",{className:_("description")},i),t),l.default.createElement("div",{className:_("footer")},a?l.default.createElement("div",{className:_("button-container")},T&&l.default.createElement("button",{type:"button",className:_("css-toggle","item",{"is-selected":w}),onClick:j,onKeyDown:function(e){return C(e,j)},onBlur:h,onMouseDown:v,tabIndex:0,"data-focus-styles-enabled":!0},l.default.createElement(c.default,{className:_("chevron")}),l.default.createElement("span",null,"CSS"),l.default.createElement(f.default,{className:_("chevron")})),l.default.createElement("button",{type:"button",className:_("code-toggle","item",{"is-selected":b}),onClick:P,onKeyDown:function(e){return C(e,P)},onBlur:h,onMouseDown:v,tabIndex:0,"data-focus-styles-enabled":!0},l.default.createElement(c.default,{className:_("chevron")}),l.default.createElement("span",null,"Code"),l.default.createElement(f.default,{className:_("chevron")}))):null,l.default.createElement("div",null,w&&l.default.createElement("div",{className:_("css")},r),b&&l.default.createElement("div",{className:_("code")},a))))};g.propTypes=b,g.defaultProps={isExpanded:!1};var y=g;t.Z=y},58038:function(e,t,a){a.d(t,{C:function(){return o}});var r=a(67294),n=a(22863),o=function(e){var t=e.url;return r.createElement(n.Z,{src:"https://github.com/cerner/terra-core/tree/main/packages/terra-form-textarea",name:"terra-form-textarea",version:"5.30.0",url:t})}},17422:function(e,t,a){a.r(t),t.default={badge:"Badges-module__badge___vex-+","badge-container":"Badges-module__badge-container___B13Mv","badge-name":"Badges-module__badge-name___jkN0m","badge-version":"Badges-module__badge-version___agZ+P"}},53560:function(e,t,a){a.r(t),t.default={"clinical-lowlight-theme":"ExampleTemplate-module__clinical-lowlight-theme___rBbtD","orion-fusion-theme":"ExampleTemplate-module__orion-fusion-theme___GzA23",template:"ExampleTemplate-module__template___a4uPk",header:"ExampleTemplate-module__header___iFXV3",content:"ExampleTemplate-module__content___48m4Q",description:"ExampleTemplate-module__description___NwBJo",footer:"ExampleTemplate-module__footer___GpSoG","button-container":"ExampleTemplate-module__button-container___rAD11",css:"ExampleTemplate-module__css___+jtk1",code:"ExampleTemplate-module__code___7rC6C","css-toggle":"ExampleTemplate-module__css-toggle___chHK7","code-toggle":"ExampleTemplate-module__code-toggle___TGlE-","is-selected":"ExampleTemplate-module__is-selected___0BYwS",item:"ExampleTemplate-module__item___8FTQq",chevron:"ExampleTemplate-module__chevron___VbY7N",title:"ExampleTemplate-module__title___r+nbJ","dynamic-content":"ExampleTemplate-module__dynamic-content___k+1H7"}},67510:function(e,t,a){a.r(t),t.default={"clinical-lowlight-theme":"Textarea-module__clinical-lowlight-theme___Nmtf4","orion-fusion-theme":"Textarea-module__orion-fusion-theme___MFmVe",textarea:"Textarea-module__textarea___1EN-n","full-size":"Textarea-module__full-size___+I8BZ","no-resize":"Textarea-module__no-resize___cBMRC",resizable:"Textarea-module__resizable___SfQzJ","form-error":"Textarea-module__form-error___68kuD","form-incomplete":"Textarea-module__form-incomplete___xpoV4"}},10226:function(e,t,a){function r(e){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.TextareaSize=void 0;var n=f(a(67294)),o=f(a(45697)),l=f(a(94184)),i=f(a(47166)),u=f(a(50026)),s=f(a(67510)),c=["name","required","onChange","onFocus","onInput","isAutoResizable","isIncomplete","isInvalid","value","defaultValue","rows","size","ariaLabel","refCallback","disableResize"];function f(e){return e&&e.__esModule?e:{default:e}}function d(){return d=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e},d.apply(this,arguments)}function m(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function p(e,t,a){return(t=h(t))in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function _(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}function b(e,t){for(var a=0;a<t.length;a++){var r=t[a];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,h(r.key),r)}}function h(e){var t=function(e,t){if("object"!==r(e)||null===e)return e;var a=e[Symbol.toPrimitive];if(void 0!==a){var n=a.call(e,t||"default");if("object"!==r(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===r(t)?t:String(t)}function v(e,t){return v=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},v(e,t)}function g(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var a,n=x(e);if(t){var o=x(this).constructor;a=Reflect.construct(n,arguments,o)}else a=n.apply(this,arguments);return function(e,t){if(t&&("object"===r(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return y(e)}(this,a)}}function y(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function x(e){return x=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},x(e)}var w=i.default.bind(s.default),E=(t.TextareaSize={SMALL:"small",MEDIUM:"medium",LARGE:"large",FULL:"full"},{small:2,medium:5,large:10}),O={ariaLabel:o.default.string,defaultValue:o.default.string,disabled:o.default.bool,isAutoResizable:o.default.bool,isIncomplete:o.default.bool,isInvalid:o.default.bool,name:o.default.string,onChange:o.default.func,onFocus:o.default.func,onInput:o.default.func,required:o.default.bool,rows:o.default.number,size:o.default.oneOf(["small","medium","large","full"]),value:o.default.string,refCallback:o.default.func,disableResize:o.default.bool},T={defaultValue:void 0,disabled:!1,name:null,isAutoResizable:!1,isIncomplete:!1,isInvalid:!1,onChange:void 0,onInput:void 0,required:!1,rows:void 0,size:"small",value:void 0,refCallback:void 0,disableResize:!1},j=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&v(e,t)}(i,e);var t,a,r,o=g(i);function i(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,i),(t=o.call(this,e)).isMobileDevice=window.matchMedia("(max-width: 1024px)").matches&&("ontouchstart"in window||window.DocumentTouch&&document instanceof DocumentTouch||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0),t.onChange=t.onChange.bind(y(t)),t.onFocus=t.onFocus.bind(y(t)),t}return t=i,a=[{key:"componentDidMount",value:function(){var e=Math.ceil(parseInt(window.getComputedStyle(this.textarea).lineHeight,10));this.textarea.currentLineHeight=e,this.setBaseHeights(),this.props.isAutoResizable&&!this.isMobileDevice&&this.resizeTextarea()}},{key:"componentDidUpdate",value:function(e){this.props.size===e.size&&this.props.rows===e.rows||this.setBaseHeights()}},{key:"onFocus",value:function(e){if(this.props.isAutoResizable&&!this.isMobileDevice){var t=Math.ceil(parseInt(window.getComputedStyle(this.textarea).lineHeight,10));this.textarea.currentLineHeight!==t&&(this.textarea.currentLineHeight=t,this.setBaseHeights())}this.props.onFocus&&this.props.onFocus(e)}},{key:"onChange",value:function(e){this.props.isAutoResizable&&!this.isMobileDevice&&this.resizeTextarea(),this.props.onChange&&this.props.onChange(e)}},{key:"setBaseHeights",value:function(){var e=this.textarea.value;this.textarea.value="",this.textarea.baseScrollHeight=this.textarea.scrollHeight,this.textarea.style.minHeight="0px",this.textarea.style.minHeight="".concat(this.textarea.scrollHeight,"px"),this.textarea.value=e}},{key:"resizeTextarea",value:function(){var e=this.props.rows||E[this.props.size];this.textarea.rows=e;var t=Math.ceil((this.textarea.scrollHeight-this.textarea.baseScrollHeight)/this.textarea.currentLineHeight);this.textarea.rows=e+t}},{key:"render",value:function(){var e,t=this,a=this.props,r=a.name,o=a.required,i=(a.onChange,a.onFocus,a.onInput),u=a.isAutoResizable,s=a.isIncomplete,f=a.isInvalid,b=a.value,h=a.defaultValue,v=a.rows,g=a.size,y=a.ariaLabel,x=a.refCallback,O=a.disableResize,T=_(a,c),j=this.context,P=function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?m(Object(a),!0).forEach((function(t){p(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):m(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}({},T),C=(0,l.default)(w("textarea",{"form-error":f},{"form-incomplete":s&&o&&!f},{"full-size":"full"===g},{resizable:u&&!this.isMobileDevice},{"no-resize":O},j.className),P.className);P&&Object.prototype.hasOwnProperty.call(P,"aria-label")?e=y||P["aria-label"]:y&&(e=y),P["aria-label"]=e,P["aria-invalid"]=f,o&&(P["aria-required"]="true");var z=v||E[g];return void 0!==b?P.value=b:P.defaultValue=h,P.placeholder&&(P.placeholder=null),n.default.createElement("textarea",d({},P,{ref:function(e){t.textarea=e,x&&x(e)},name:r,onFocus:this.onFocus,onChange:this.onChange,onInput:i,required:o,rows:z,className:C}))}}],a&&b(t.prototype,a),r&&b(t,r),Object.defineProperty(t,"prototype",{writable:!1}),i}(n.default.Component);j.propTypes=O,j.defaultProps=T,j.isTextarea=!0,j.contextType=u.default;t.default=j},33864:function(e,t,a){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=o(a(67294)),n=o(a(99139));function o(e){return e&&e.__esModule?e:{default:e}}function l(){return l=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e},l.apply(this,arguments)}var i=function(e){var t=l({},e);return r.default.createElement(n.default,t,r.default.createElement("path",{d:"M10.3 24 33.8 0l3.9 3.8L18 24l19.7 20.2-3.9 3.8z"}))};i.displayName="IconChevronLeft",i.defaultProps={viewBox:"0 0 48 48","data-name":"Layer 1",xmlns:"http://www.w3.org/2000/svg"};t.default=i}}]);