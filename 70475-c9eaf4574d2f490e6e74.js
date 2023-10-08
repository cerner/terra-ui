"use strict";(self.webpackChunkterra_ui=self.webpackChunkterra_ui||[]).push([[70475],{22863:function(e,t,n){var r=n(64836);t.Z=void 0;var l=r(n(67294)),a=r(n(45697)),o=r(n(47166)),u=r(n(17422)),i=o.default.bind(u.default),d={name:a.default.string.isRequired,src:a.default.string,url:a.default.string,version:a.default.string.isRequired},c=function(e){var t=e.src,n=e.name,r=e.url,a=e.version,o=l.default.createElement("a",{className:i("badge"),href:r||"https://www.npmjs.org/package/".concat(n,"/v/").concat(a)},l.default.createElement("span",{className:i("badge-name")},r?"package":"npm"),l.default.createElement("span",{className:i("badge-version")},"v".concat(a))),u=t?l.default.createElement("a",{className:i("badge"),href:t},l.default.createElement("span",{className:i("badge-name")},"github"),l.default.createElement("span",{className:i("badge-version")},"source")):void 0;return l.default.createElement("div",{className:i("badge-container")},o,u)};c.propTypes=d;var f=c;t.Z=f},17422:function(e,t,n){n.r(t),t.default={badge:"Badges-module__badge___vex-+","badge-container":"Badges-module__badge-container___B13Mv","badge-name":"Badges-module__badge-name___jkN0m","badge-version":"Badges-module__badge-version___agZ+P"}},43747:function(e,t,n){n.r(t),t.default={"clinical-lowlight-theme":"Fieldset-module__clinical-lowlight-theme___XMxG7","orion-fusion-theme":"Fieldset-module__orion-fusion-theme___rT15M",fieldset:"Fieldset-module__fieldset___J-xl3","fieldset-required":"Fieldset-module__fieldset-required___aTps3",legend:"Fieldset-module__legend___aExR-","legend-visually-hidden":"Fieldset-module__legend-visually-hidden___70GQh","help-text":"Fieldset-module__help-text___IuP4F","fieldset-children":"Fieldset-module__fieldset-children___YkIkm"}},68586:function(e,t,n){n.r(t),t.default={"clinical-lowlight-theme":"Input-module__clinical-lowlight-theme___clY96","orion-fusion-theme":"Input-module__orion-fusion-theme___phvH5","form-input":"Input-module__form-input___Fk8kb","form-error":"Input-module__form-error___aU4hq","form-incomplete":"Input-module__form-incomplete___h4I7H"}},96388:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=f(n(67294)),l=f(n(45697)),a=f(n(94184)),o=f(n(47166)),u=f(n(50026)),i=n(55877),d=f(n(43747)),c=["children","help","legend","legendAttrs","isLegendHidden","required"];function f(e){return e&&e.__esModule?e:{default:e}}function s(){return s=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},s.apply(this,arguments)}function p(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var b=o.default.bind(d.default),m={children:l.default.node,help:l.default.node,legend:l.default.string,legendAttrs:l.default.object,required:l.default.bool,isLegendHidden:l.default.bool},_=function(e){var t,n,l=e.children,o=e.help,d=e.legend,f=e.legendAttrs,m=e.isLegendHidden,_=e.required,g=p(e,c),y=r.default.useContext(u.default),v=(0,a.default)(b(["fieldset",{"fieldset-required":_},y.className]),g.className),h=b(["legend",f.className,{"legend-visually-hidden":m}]),O="terra-fieldset-legend-".concat((0,i.v4)()),j="terra-fieldset-help-".concat((0,i.v4)());return r.default.createElement("fieldset",s({},g,{className:v}),d&&r.default.createElement("legend",s({id:O},f,{className:h}),d),o&&r.default.createElement("small",{id:j,className:b("help-text"),tabIndex:"-1"},o),r.default.createElement("div",{className:b("fieldset-children")},(o||d)&&l?(t=l,n=[],r.default.Children.forEach(t,(function(e){n.push(r.default.cloneElement(e,{"aria-labelledby":"".concat(O," ").concat(j)}))})),n):l))};_.propTypes=m,_.defaultProps={legendAttrs:{},required:!1,isLegendHidden:!1};var g=_;t.default=g},55142:function(e,t,n){function r(e){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=f(n(67294)),a=f(n(45697)),o=f(n(94184)),u=f(n(47166)),i=f(n(50026)),d=f(n(68586)),c=["defaultValue","disabled","isIncomplete","isInvalid","onBlur","onChange","onFocus","onInput","name","pattern","refCallback","required","type","ariaLabel","value"];function f(e){return e&&e.__esModule?e:{default:e}}function s(){return s=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},s.apply(this,arguments)}function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function b(e,t,n){return(t=g(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function m(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}function _(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,g(r.key),r)}}function g(e){var t=function(e,t){if("object"!==r(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var l=n.call(e,t||"default");if("object"!==r(l))return l;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===r(t)?t:String(t)}function y(e,t){return y=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},y(e,t)}function v(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,l=h(e);if(t){var a=h(this).constructor;n=Reflect.construct(l,arguments,a)}else n=l.apply(this,arguments);return function(e,t){if(t&&("object"===r(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(this,n)}}function h(e){return h=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},h(e)}var O=u.default.bind(d.default),j={defaultValue:a.default.oneOfType([a.default.string,a.default.number]),disabled:a.default.bool,isIncomplete:a.default.bool,isInvalid:a.default.bool,onBlur:a.default.func,onChange:a.default.func,onFocus:a.default.func,onInput:a.default.func,name:a.default.string,pattern:a.default.string,refCallback:a.default.func,required:a.default.bool,type:a.default.string,value:a.default.oneOfType([a.default.string,a.default.number]),ariaLabel:a.default.string},w={defaultValue:void 0,disabled:!1,isIncomplete:!1,isInvalid:!1,onBlur:void 0,onChange:void 0,onFocus:void 0,onInput:void 0,name:null,pattern:void 0,required:!1,refCallback:void 0,type:void 0,value:void 0},P=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&y(e,t)}(u,e);var t,n,r,a=v(u);function u(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),a.apply(this,arguments)}return t=u,n=[{key:"render",value:function(){var e,t=this.props,n=t.defaultValue,r=t.disabled,a=t.isIncomplete,u=t.isInvalid,i=t.onBlur,d=t.onChange,f=t.onFocus,_=t.onInput,g=t.name,y=t.pattern,v=t.refCallback,h=t.required,j=t.type,w=t.ariaLabel,P=t.value,I=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){b(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},m(t,c)),E=this.context,k=(void 0===j||["text","number","password","email","search","tel","url","hidden"].includes(j))&&O("form-input",{"form-error":u},{"form-incomplete":a&&h&&!u},E.className),N=(0,o.default)(k,I.className);return I&&Object.prototype.hasOwnProperty.call(I,"aria-label")?e=w||I["aria-label"]:w&&(e=w),I["aria-label"]=e,h&&(I["aria-required"]="true"),void 0!==P?I.value=P:void 0!==n&&(I.defaultValue=n),I.placeholder&&!I.showMpageFusionPlaceholder&&(I.placeholder=null),delete I.showMpageFusionPlaceholder,l.default.createElement("input",s({},I,{ref:function(e){v&&v(e)},name:g,type:j,pattern:y,onBlur:i,onChange:d,onFocus:f,onInput:_,disabled:r,required:h,className:N}))}}],n&&_(t.prototype,n),r&&_(t,r),Object.defineProperty(t,"prototype",{writable:!1}),u}(l.default.Component);P.propTypes=j,P.defaultProps=w,P.contextType=i.default,P.isInput=!0;var I=P;t.default=I}}]);