"use strict";(self.webpackChunkterra_ui=self.webpackChunkterra_ui||[]).push([[28520],{55713:function(e,t,r){var n=r(24994);t.A=void 0;var l=n(r(96540)),a=n(r(5556)),o=n(r(67967)),u=n(r(25642)),i=o.default.bind(u.default),d={name:a.default.string.isRequired,src:a.default.string,url:a.default.string,version:a.default.string.isRequired},c=function(e){var t=e.src,r=e.name,n=e.url,a=e.version,o=l.default.createElement("a",{className:i("badge"),href:n||"https://www.npmjs.org/package/".concat(r,"/v/").concat(a)},l.default.createElement("span",{className:i("badge-name")},n?"package":"npm"),l.default.createElement("span",{className:i("badge-version")},"v".concat(a))),u=t?l.default.createElement("a",{className:i("badge"),href:t},l.default.createElement("span",{className:i("badge-name")},"github"),l.default.createElement("span",{className:i("badge-version")},"source")):void 0;return l.default.createElement("div",{className:i("badge-container")},o,u)};c.propTypes=d;t.A=c},31796:function(e,t,r){r.d(t,{E:function(){return a}});var n=r(96540),l=r(55713),a=function(e){var t=e.url;return n.createElement(l.A,{src:"https://github.com/cerner/terra-core/tree/main/packages/terra-form-fieldset",name:"terra-form-fieldset",version:"2.80.0",url:t})}},17515:function(e,t,r){r.r(t),t.default={"fieldset-wrapper":"FieldsetExamples-module__fieldset-wrapper___peaDn"}},25642:function(e,t,r){r.r(t),t.default={badge:"Badges-module__badge___vex-+","badge-container":"Badges-module__badge-container___B13Mv","badge-name":"Badges-module__badge-name___jkN0m","badge-version":"Badges-module__badge-version___agZ+P"}},57497:function(e,t,r){r.r(t),t.default={"clinical-lowlight-theme":"Fieldset-module__clinical-lowlight-theme___XMxG7","orion-fusion-theme":"Fieldset-module__orion-fusion-theme___rT15M",fieldset:"Fieldset-module__fieldset___J-xl3","fieldset-required":"Fieldset-module__fieldset-required___aTps3",legend:"Fieldset-module__legend___aExR-","legend-visually-hidden":"Fieldset-module__legend-visually-hidden___70GQh","help-text":"Fieldset-module__help-text___IuP4F","fieldset-children":"Fieldset-module__fieldset-children___YkIkm"}},15159:function(e,t,r){r.r(t),t.default={"clinical-lowlight-theme":"Input-module__clinical-lowlight-theme___clY96","orion-fusion-theme":"Input-module__orion-fusion-theme___phvH5","form-input":"Input-module__form-input___Fk8kb","form-error":"Input-module__form-error___aU4hq","form-incomplete":"Input-module__form-incomplete___h4I7H"}},41521:function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=f(r(96540)),l=f(r(5556)),a=f(r(46942)),o=f(r(67967)),u=f(r(52103)),i=r(68414),d=f(r(57497)),c=["children","help","legend","legendAttrs","isLegendHidden","required"];function f(e){return e&&e.__esModule?e:{default:e}}function s(){return s=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},s.apply(this,arguments)}function p(e,t){if(null==e)return{};var r,n,l=function(e,t){if(null==e)return{};var r,n,l={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(l[r]=e[r]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}var b=o.default.bind(d.default),m={children:l.default.node,help:l.default.node,legend:l.default.string,legendAttrs:l.default.object,required:l.default.bool,isLegendHidden:l.default.bool},_=function(e){var t,r,l=e.children,o=e.help,d=e.legend,f=e.legendAttrs,m=e.isLegendHidden,_=e.required,g=p(e,c),v=n.default.useContext(u.default),y=(0,a.default)(b(["fieldset",{"fieldset-required":_},v.className]),g.className),h=b(["legend",f.className,{"legend-visually-hidden":m}]),O="terra-fieldset-legend-".concat((0,i.v4)()),j="terra-fieldset-help-".concat((0,i.v4)());return n.default.createElement("fieldset",s({},g,{className:y}),d&&n.default.createElement("legend",s({id:O},f,{className:h}),d),o&&n.default.createElement("small",{id:j,className:b("help-text"),tabIndex:"-1"},o),n.default.createElement("div",{className:b("fieldset-children")},(o||d)&&l?(t=l,r=[],n.default.Children.forEach(t,(function(e){r.push(n.default.cloneElement(e,{"aria-labelledby":"".concat(O," ").concat(j)}))})),r):l))};_.propTypes=m,_.defaultProps={legendAttrs:{},required:!1,isLegendHidden:!1};t.default=_},51459:function(e,t,r){function n(e){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=f(r(96540)),a=f(r(5556)),o=f(r(46942)),u=f(r(67967)),i=f(r(52103)),d=f(r(15159)),c=["defaultValue","disabled","isIncomplete","isInvalid","onBlur","onChange","onFocus","onInput","name","pattern","refCallback","required","type","ariaLabel","value"];function f(e){return e&&e.__esModule?e:{default:e}}function s(){return s=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},s.apply(this,arguments)}function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function b(e,t,r){return(t=g(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function m(e,t){if(null==e)return{};var r,n,l=function(e,t){if(null==e)return{};var r,n,l={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(l[r]=e[r]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}function _(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,g(n.key),n)}}function g(e){var t=function(e,t){if("object"!=n(e)||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var l=r.call(e,t||"default");if("object"!=n(l))return l;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==n(t)?t:String(t)}function v(e,t,r){return t=h(t),function(e,t){if(t&&("object"===n(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(e,y()?Reflect.construct(t,r||[],h(e).constructor):t.apply(e,r))}function y(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(y=function(){return!!e})()}function h(e){return h=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},h(e)}function O(e,t){return O=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},O(e,t)}var j=u.default.bind(d.default),w={defaultValue:a.default.oneOfType([a.default.string,a.default.number]),disabled:a.default.bool,isIncomplete:a.default.bool,isInvalid:a.default.bool,onBlur:a.default.func,onChange:a.default.func,onFocus:a.default.func,onInput:a.default.func,name:a.default.string,pattern:a.default.string,refCallback:a.default.func,required:a.default.bool,type:a.default.string,value:a.default.oneOfType([a.default.string,a.default.number]),ariaLabel:a.default.string},P={defaultValue:void 0,disabled:!1,isIncomplete:!1,isInvalid:!1,onBlur:void 0,onChange:void 0,onFocus:void 0,onInput:void 0,name:null,pattern:void 0,required:!1,refCallback:void 0,type:void 0,value:void 0},E=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),v(this,t,arguments)}var r,n,a;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&O(e,t)}(t,e),r=t,n=[{key:"render",value:function(){var e,t=this.props,r=t.defaultValue,n=t.disabled,a=t.isIncomplete,u=t.isInvalid,i=t.onBlur,d=t.onChange,f=t.onFocus,_=t.onInput,g=t.name,v=t.pattern,y=t.refCallback,h=t.required,O=t.type,w=t.ariaLabel,P=t.value,E=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){b(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},m(t,c)),I=this.context,k=(void 0===O||["text","number","password","email","search","tel","url","hidden"].includes(O))&&j("form-input",{"form-error":u},{"form-incomplete":a&&h&&!u},I.className),N=(0,o.default)(k,E.className);return E&&Object.prototype.hasOwnProperty.call(E,"aria-label")?e=w||E["aria-label"]:w&&(e=w),E["aria-label"]=e,h&&(E["aria-required"]="true"),void 0!==P?E.value=P:void 0!==r&&(E.defaultValue=r),E.placeholder&&!E.showMpageFusionPlaceholder&&(E.placeholder=null),delete E.showMpageFusionPlaceholder,l.default.createElement("input",s({},E,{ref:function(e){y&&y(e)},name:g,type:O,pattern:v,onBlur:i,onChange:d,onFocus:f,onInput:_,disabled:n,required:h,className:N}))}}],n&&_(r.prototype,n),a&&_(r,a),Object.defineProperty(r,"prototype",{writable:!1}),t}(l.default.Component);E.propTypes=w,E.defaultProps=P,E.contextType=i.default,E.isInput=!0;t.default=E}}]);