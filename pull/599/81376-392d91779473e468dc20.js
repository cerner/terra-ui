"use strict";(self.webpackChunkterra_ui=self.webpackChunkterra_ui||[]).push([[81376],{21692:function(e,t,r){r.r(t),t.default={"clinical-lowlight-theme":"Radio-module__clinical-lowlight-theme___s9bOk","orion-fusion-theme":"Radio-module__orion-fusion-theme___TG0Kq",radio:"Radio-module__radio___kLgLL",label:"Radio-module__label___WRkdj","is-mobile":"Radio-module__is-mobile___IJAkE","native-input":"Radio-module__native-input___S1Fq3","label-text":"Radio-module__label-text___oARv8","outer-ring":"Radio-module__outer-ring___DHLRf","inner-ring":"Radio-module__inner-ring___dcrRU","is-hidden":"Radio-module__is-hidden___6gZIO","is-disabled":"Radio-module__is-disabled___czxlC","is-inline":"Radio-module__is-inline___qK0iO"}},89951:function(e,t,r){r.r(t),t.default={"clinical-lowlight-theme":"RadioField-module__clinical-lowlight-theme___H55y8","orion-fusion-theme":"RadioField-module__orion-fusion-theme___Eh5Nn","radio-field":"RadioField-module__radio-field___fpXfP","is-inline":"RadioField-module__is-inline___8FRg7","legend-group":"RadioField-module__legend-group___8mMif","legend-group-hidden":"RadioField-module__legend-group-hidden___irjwu",legend:"RadioField-module__legend___7g1rE","error-icon":"RadioField-module__error-icon___+vwY3","error-icon-hidden":"RadioField-module__error-icon-hidden___diu+V",required:"RadioField-module__required___7KHDx","required-hidden":"RadioField-module__required-hidden___A0eyI",optional:"RadioField-module__optional___9DBWR","help-text":"RadioField-module__help-text___9UUSl","error-text":"RadioField-module__error-text___2mn2V"}},79029:function(e,t,r){function n(e){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=f(r(67294)),l=f(r(45697)),o=f(r(94184)),a=f(r(47166)),d=f(r(50026)),u=f(r(21692)),c=f(r(67217)),s=["checked","defaultChecked","inputAttrs","id","disabled","isInline","isLabelHidden","labelText","labelTextAttrs","name","onBlur","onChange","onFocus","value"];function f(e){return e&&e.__esModule?e:{default:e}}function m(){return m=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},m.apply(this,arguments)}function _(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function b(e,t,r){return(t=function(e){var t=function(e,t){if("object"!==n(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var i=r.call(e,t||"default");if("object"!==n(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===n(t)?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function p(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var g=a.default.bind(u.default),h={checked:l.default.bool,defaultChecked:l.default.bool,id:l.default.string,inputAttrs:l.default.object,disabled:l.default.bool,isInline:l.default.bool,isLabelHidden:l.default.bool,labelText:l.default.string.isRequired,labelTextAttrs:l.default.object,name:l.default.string,onBlur:l.default.func,onChange:l.default.func,onFocus:l.default.func,value:l.default.string},y={checked:void 0,defaultChecked:void 0,id:void 0,inputAttrs:{},disabled:!1,isInline:!1,isLabelHidden:!1,labelTextAttrs:{},name:null,onBlur:void 0,onChange:void 0,onFocus:void 0,value:void 0},v=function(e){var t=e.checked,r=e.defaultChecked,n=e.inputAttrs,l=e.id,a=e.disabled,u=e.isInline,f=e.isLabelHidden,h=e.labelText,y=e.labelTextAttrs,v=e.name,O=e.onBlur,j=e.onChange,w=e.onFocus,R=e.value,E=p(e,s),P=i.default.useContext(d.default),x=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?_(Object(r),!0).forEach((function(t){b(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):_(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},n);void 0!==t?x.checked=t:x.defaultChecked=r;var k=(0,o.default)(g("radio",{"is-inline":u},P.className),E.className),N=g(["label",{"is-disabled":a},{"is-hidden":f},{"is-mobile":c.default.isConsideredMobileDevice()},y.className]),S=g(["native-input",n.className]),A=g(["label-text"]),F=g(["outer-ring",{"is-mobile":c.default.isConsideredMobileDevice()}]),q=g(["inner-ring"]),T=null;return f?(x["aria-label"]=h,T=i.default.createElement("span",m({},y,{className:A}))):T=i.default.createElement("span",m({},y,{className:A}),h),i.default.createElement("div",m({},E,{className:k}),i.default.createElement("label",{htmlFor:l,className:N},i.default.createElement("input",m({},x,{type:"radio",id:l,disabled:a,name:v,value:R,onChange:j,onFocus:w,onBlur:O,className:S})),i.default.createElement("span",{className:F},i.default.createElement("span",{className:q})),T))};v.propTypes=h,v.defaultProps=y,v.isRadio=!0;var O=v;t.default=O},56931:function(e,t,r){function n(e){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=b(r(67294)),l=b(r(45697)),o=r(25387),a=b(r(94184)),d=b(r(47166)),u=b(r(50026)),c=b(r(14461)),s=b(r(29270)),f=r(51051),m=b(r(89951)),_=["children","error","help","hideRequired","intl","isInvalid","isInline","isLegendHidden","legend","legendAttrs","required","showOptional"];function b(e){return e&&e.__esModule?e:{default:e}}function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function g(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){h(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function h(e,t,r){return(t=function(e){var t=function(e,t){if("object"!==n(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var i=r.call(e,t||"default");if("object"!==n(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===n(t)?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function y(){return y=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},y.apply(this,arguments)}function v(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var O=d.default.bind(m.default),j={children:l.default.node,error:l.default.node,help:l.default.node,hideRequired:l.default.bool,intl:l.default.shape({formatMessage:l.default.func}).isRequired,isInline:l.default.bool,isInvalid:l.default.bool,isLegendHidden:l.default.bool,legend:l.default.string.isRequired,legendAttrs:l.default.object,required:l.default.bool,showOptional:l.default.bool},w=function(e){var t=e.children,r=e.error,n=e.help,l=e.hideRequired,o=e.intl,d=e.isInvalid,m=e.isInline,b=e.isLegendHidden,p=e.legend,h=e.legendAttrs,j=e.required,w=e.showOptional,R=v(e,_),E=i.default.useContext(u.default),P=(0,a.default)(O("radio-field",{"is-inline":m},E.className),R.className),x=O(["legend",h.className]),k="terra-radio-group-".concat((0,c.default)()),N="terra-radio-field-description-".concat((0,c.default)()),S=n?"terra-radio-field-description-help-".concat((0,c.default)()):"",A=r?"terra-radio-field-description-error-".concat((0,c.default)()):"",F="".concat(N," ").concat(A," ").concat(S),q=-1!==navigator.userAgent.indexOf("Safari")&&-1===navigator.userAgent.indexOf("Chrome"),T=-1!==navigator.userAgent.indexOf("Edg"),C=q||T?"div":"legend",I=i.default.createElement(C,{id:N,className:O(["legend-group",{"legend-group-hidden":b}])},i.default.createElement("div",y({},h,{className:x}),d&&i.default.createElement("span",{className:O("error-icon")}),j&&(d||!l)&&i.default.createElement(i.default.Fragment,null,i.default.createElement("div",{"aria-hidden":"true",className:O("required")},"*"),i.default.createElement(s.default,{text:o.formatMessage({id:"Terra.form.field.required"})})),p,j&&!d&&l&&i.default.createElement("span",{className:O("required-hidden")},"*"),w&&!j&&i.default.createElement("span",{className:O("optional")},o.formatMessage({id:"Terra.form.field.optional"})),!d&&i.default.createElement("span",{className:O("error-icon-hidden")}))),D=function(e){var t=document.getElementById(k).querySelectorAll("[type=radio]"),r=Array.from(t).indexOf(e.currentTarget);e.key===f.VALUE_DOWN||e.key===f.VALUE_RIGHT?r===t.length-1?(t[0].focus(),t[0].checked=!0):(t[r+1].focus(),t[r+1].checked=!0):e.key!==f.VALUE_UP&&e.key!==f.VALUE_LEFT||(0===r?(t[t.length-1].focus(),t[t.length-1].checked=!0):(t[r-1].focus(),t[r-1].checked=!0))},L=i.default.Children.map(t,(function(e){return e&&e.type.isRadio?i.default.cloneElement(e,{inputAttrs:g(g({},e.props.inputAttrs),{},{"aria-describedby":F,onKeyDown:D})}):e}));return i.default.createElement("fieldset",y({id:k},R,{required:j,className:P}),I,L,d&&r&&i.default.createElement("div",{id:A,className:O("error-text")},r),n&&i.default.createElement("div",{id:S,className:O("help-text")},n))};w.propTypes=j,w.defaultProps={children:null,error:null,help:null,hideRequired:!1,isInline:!1,isInvalid:!1,isLegendHidden:!1,legendAttrs:{},required:!1,showOptional:!1};var R=(0,o.injectIntl)(w);t.default=R},67217:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r={isConsideredMobileDevice:function(){return window.matchMedia("(max-width: 1024px)").matches&&("ontouchstart"in window||window.DocumentTouch&&document instanceof DocumentTouch||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0)}};t.default=r}}]);