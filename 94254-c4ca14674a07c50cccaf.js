"use strict";(self.webpackChunkterra_ui=self.webpackChunkterra_ui||[]).push([[94254],{22863:function(e,t,r){var n=r(64836);t.Z=void 0;var a=n(r(67294)),l=n(r(45697)),o=n(r(47166)),u=n(r(17422)),i=o.default.bind(u.default),d={name:l.default.string.isRequired,src:l.default.string,url:l.default.string,version:l.default.string.isRequired},f=function(e){var t=e.src,r=e.name,n=e.url,l=e.version,o=a.default.createElement("a",{className:i("badge"),href:n||"https://www.npmjs.org/package/".concat(r,"/v/").concat(l)},a.default.createElement("span",{className:i("badge-name")},n?"package":"npm"),a.default.createElement("span",{className:i("badge-version")},"v".concat(l))),u=t?a.default.createElement("a",{className:i("badge"),href:t},a.default.createElement("span",{className:i("badge-name")},"github"),a.default.createElement("span",{className:i("badge-version")},"source")):void 0;return a.default.createElement("div",{className:i("badge-container")},o,u)};f.propTypes=d;var c=f;t.Z=c},43057:function(e,t,r){r.d(t,{C:function(){return l}});var n=r(67294),a=r(22863),l=function(e){var t=e.url;return n.createElement(a.Z,{src:"https://github.com/cerner/terra-core/tree/main/packages/terra-form-fieldset",name:"terra-form-fieldset",version:"2.73.0",url:t})}},70695:function(e,t,r){r.r(t),t.default={"fieldset-wrapper":"FieldsetExamples-module__fieldset-wrapper___peaDn"}},17422:function(e,t,r){r.r(t),t.default={badge:"Badges-module__badge___vex-+","badge-container":"Badges-module__badge-container___B13Mv","badge-name":"Badges-module__badge-name___jkN0m","badge-version":"Badges-module__badge-version___agZ+P"}},43747:function(e,t,r){r.r(t),t.default={"orion-fusion-theme":"Fieldset-module__orion-fusion-theme___rT15M",fieldset:"Fieldset-module__fieldset___J-xl3","fieldset-required":"Fieldset-module__fieldset-required___aTps3",legend:"Fieldset-module__legend___aExR-","legend-visually-hidden":"Fieldset-module__legend-visually-hidden___70GQh","help-text":"Fieldset-module__help-text___IuP4F","fieldset-children":"Fieldset-module__fieldset-children___YkIkm"}},68586:function(e,t,r){r.r(t),t.default={"orion-fusion-theme":"Input-module__orion-fusion-theme___phvH5","form-input":"Input-module__form-input___Fk8kb","form-error":"Input-module__form-error___aU4hq","form-incomplete":"Input-module__form-incomplete___h4I7H"}},96388:function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=c(r(67294)),a=c(r(45697)),l=c(r(94184)),o=c(r(47166)),u=c(r(50026)),i=r(55877),d=c(r(43747)),f=["children","help","legend","legendAttrs","isLegendHidden","required"];function c(e){return e&&e.__esModule?e:{default:e}}function s(){return s=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},s.apply(this,arguments)}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var b=o.default.bind(d.default),m={children:a.default.node,help:a.default.node,legend:a.default.string,legendAttrs:a.default.object,required:a.default.bool,isLegendHidden:a.default.bool},v=function(e){var t,r,a=e.children,o=e.help,d=e.legend,c=e.legendAttrs,m=e.isLegendHidden,v=e.required,_=p(e,f),y=n.default.useContext(u.default),g=(0,l.default)(b(["fieldset",{"fieldset-required":v},y.className]),_.className),h=b(["legend",c.className,{"legend-visually-hidden":m}]),O="terra-fieldset-legend-".concat((0,i.v4)()),j="terra-fieldset-help-".concat((0,i.v4)());return n.default.createElement("fieldset",s({},_,{className:g}),d&&n.default.createElement("legend",s({id:O},c,{className:h}),d),o&&n.default.createElement("small",{id:j,className:b("help-text"),tabIndex:"-1"},o),n.default.createElement("div",{className:b("fieldset-children")},(o||d)&&a?(t=a,r=[],n.default.Children.forEach(t,(function(e){r.push(n.default.cloneElement(e,{"aria-labelledby":"".concat(O," ").concat(j)}))})),r):a))};v.propTypes=m,v.defaultProps={legendAttrs:{},required:!1,isLegendHidden:!1};var _=v;t.default=_},55142:function(e,t,r){function n(e){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=c(r(67294)),l=c(r(45697)),o=c(r(94184)),u=c(r(47166)),i=c(r(50026)),d=c(r(68586)),f=["defaultValue","disabled","isIncomplete","isInvalid","onBlur","onChange","onFocus","onInput","name","pattern","refCallback","required","type","ariaLabel","value"];function c(e){return e&&e.__esModule?e:{default:e}}function s(){return s=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},s.apply(this,arguments)}function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function b(e,t,r){return(t=_(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function m(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}function v(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,_(n.key),n)}}function _(e){var t=function(e,t){if("object"!==n(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var a=r.call(e,t||"default");if("object"!==n(a))return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===n(t)?t:String(t)}function y(e,t){return y=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},y(e,t)}function g(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,a=h(e);if(t){var l=h(this).constructor;r=Reflect.construct(a,arguments,l)}else r=a.apply(this,arguments);return function(e,t){if(t&&("object"===n(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(this,r)}}function h(e){return h=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},h(e)}var O=u.default.bind(d.default),j={defaultValue:l.default.oneOfType([l.default.string,l.default.number]),disabled:l.default.bool,isIncomplete:l.default.bool,isInvalid:l.default.bool,onBlur:l.default.func,onChange:l.default.func,onFocus:l.default.func,onInput:l.default.func,name:l.default.string,pattern:l.default.string,refCallback:l.default.func,required:l.default.bool,type:l.default.string,value:l.default.oneOfType([l.default.string,l.default.number]),ariaLabel:l.default.string},w={defaultValue:void 0,disabled:!1,isIncomplete:!1,isInvalid:!1,onBlur:void 0,onChange:void 0,onFocus:void 0,onInput:void 0,name:null,pattern:void 0,required:!1,refCallback:void 0,type:void 0,value:void 0},P=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&y(e,t)}(u,e);var t,r,n,l=g(u);function u(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),l.apply(this,arguments)}return t=u,r=[{key:"render",value:function(){var e,t=this.props,r=t.defaultValue,n=t.disabled,l=t.isIncomplete,u=t.isInvalid,i=t.onBlur,d=t.onChange,c=t.onFocus,v=t.onInput,_=t.name,y=t.pattern,g=t.refCallback,h=t.required,j=t.type,w=t.ariaLabel,P=t.value,E=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){b(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},m(t,f)),I=this.context,k=(void 0===j||["text","number","password","email","search","tel","url","hidden"].includes(j))&&O("form-input",{"form-error":u},{"form-incomplete":l&&h&&!u},I.className),N=(0,o.default)(k,E.className);return E&&Object.prototype.hasOwnProperty.call(E,"aria-label")?e=w||E["aria-label"]:w&&(e=w),E["aria-label"]=e,h&&(E["aria-required"]="true"),void 0!==P?E.value=P:void 0!==r&&(E.defaultValue=r),E.placeholder&&!E.showMpageFusionPlaceholder&&(E.placeholder=null),delete E.showMpageFusionPlaceholder,a.default.createElement("input",s({},E,{ref:function(e){g&&g(e)},name:_,type:j,pattern:y,onBlur:i,onChange:d,onFocus:c,onInput:v,disabled:n,required:h,className:N}))}}],r&&v(t.prototype,r),n&&v(t,n),Object.defineProperty(t,"prototype",{writable:!1}),u}(a.default.Component);P.propTypes=j,P.defaultProps=w,P.contextType=i.default,P.isInput=!0;var E=P;t.default=E}}]);