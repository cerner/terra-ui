"use strict";(self.webpackChunkterra_ui=self.webpackChunkterra_ui||[]).push([[35138],{12472:function(e,t,n){n.r(t),t.default={"clinical-lowlight-theme":"Checkbox-module__clinical-lowlight-theme___J4i3C","orion-fusion-theme":"Checkbox-module__orion-fusion-theme___ZTiEC",checkbox:"Checkbox-module__checkbox___pLlkO",label:"Checkbox-module__label___96oeA","is-mobile":"Checkbox-module__is-mobile___HQ1Ax","native-input":"Checkbox-module__native-input___9pZ94","label-text":"Checkbox-module__label-text___NBjgG","is-hidden":"Checkbox-module__is-hidden___q9DyW","is-disabled":"Checkbox-module__is-disabled___pimXj","is-inline":"Checkbox-module__is-inline___8-h-C"}},56054:function(e,t,n){n.r(t),t.default={"clinical-lowlight-theme":"CheckboxField-module__clinical-lowlight-theme___x-Ju0","orion-fusion-theme":"CheckboxField-module__orion-fusion-theme___YG5HH","checkbox-field":"CheckboxField-module__checkbox-field___5j9mn","is-inline":"CheckboxField-module__is-inline___+D4nc","legend-group":"CheckboxField-module__legend-group___JVZN0","legend-group-hidden":"CheckboxField-module__legend-group-hidden___+jAlO",legend:"CheckboxField-module__legend___qgBW3","error-icon":"CheckboxField-module__error-icon___uzg3g","error-icon-hidden":"CheckboxField-module__error-icon-hidden___M4XJQ",required:"CheckboxField-module__required___0uRfo","required-hidden":"CheckboxField-module__required-hidden___9sNP7",optional:"CheckboxField-module__optional___P2SMX","help-text":"CheckboxField-module__help-text___CJ++I","error-text":"CheckboxField-module__error-text___ga1tO"}},15185:function(e,t,n){function r(e){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=f(n(67294)),i=f(n(45697)),o=f(n(94184)),a=f(n(47166)),d=f(n(50026)),u=f(n(12472)),c=f(n(84538)),s=["checked","defaultChecked","inputAttrs","id","disabled","isInline","isLabelHidden","labelText","labelTextAttrs","name","onBlur","onChange","onFocus","value"];function f(e){return e&&e.__esModule?e:{default:e}}function b(){return b=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},b.apply(this,arguments)}function m(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e,t,n){return(t=function(e){var t=function(e,t){if("object"!==r(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var l=n.call(e,t||"default");if("object"!==r(l))return l;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===r(t)?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function h(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var _=a.default.bind(u.default),g={checked:i.default.bool,defaultChecked:i.default.bool,id:i.default.string,inputAttrs:i.default.object,disabled:i.default.bool,isInline:i.default.bool,isLabelHidden:i.default.bool,labelText:i.default.string.isRequired,labelTextAttrs:i.default.object,name:i.default.string,onBlur:i.default.func,onChange:i.default.func,onFocus:i.default.func,value:i.default.string},v={checked:void 0,defaultChecked:void 0,id:void 0,inputAttrs:{},disabled:!1,isInline:!1,isLabelHidden:!1,labelTextAttrs:{},name:null,onBlur:void 0,onChange:void 0,onFocus:void 0,value:void 0},y=function(e){var t=e.checked,n=e.defaultChecked,r=e.inputAttrs,i=e.id,a=e.disabled,u=e.isInline,f=e.isLabelHidden,g=e.labelText,v=e.labelTextAttrs,y=e.name,O=e.onBlur,x=e.onChange,k=e.onFocus,j=e.value,C=h(e,s),w=l.default.useContext(d.default),P=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?m(Object(n),!0).forEach((function(t){p(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):m(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},r);void 0!==t?P.checked=t:P.defaultChecked=n;var E=(0,o.default)(_("checkbox",{"is-inline":u},w.className),C.className),N=_(["label",{"is-disabled":a},{"is-mobile":c.default.isConsideredMobileDevice()},v.className]),S=_(["native-input",r.className]),F=_(["label-text",{"is-hidden":f},{"is-mobile":c.default.isConsideredMobileDevice()}]),q=null;return f?(P["aria-label"]=g,q=l.default.createElement("span",b({},v,{className:F}))):q=l.default.createElement("span",b({},v,{className:F}),g),l.default.createElement("div",b({},C,{className:E}),l.default.createElement("label",{htmlFor:i,className:N},l.default.createElement("input",b({},P,{type:"checkbox",id:i,disabled:a,name:y,value:j,onChange:x,onFocus:k,onBlur:O,className:S})),q))};y.propTypes=g,y.defaultProps=v,y.isCheckbox=!0;var O=y;t.default=O},58312:function(e,t,n){function r(e){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=m(n(67294)),i=m(n(45697)),o=m(n(94184)),a=m(n(47166)),d=m(n(50026)),u=m(n(14461)),c=m(n(29270)),s=n(25387),f=m(n(56054)),b=["children","error","help","hideRequired","intl","isInvalid","isInline","isLegendHidden","legend","legendAttrs","required","showOptional"];function m(e){return e&&e.__esModule?e:{default:e}}function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function h(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){_(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function _(e,t,n){return(t=function(e){var t=function(e,t){if("object"!==r(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var l=n.call(e,t||"default");if("object"!==r(l))return l;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===r(t)?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function g(){return g=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},g.apply(this,arguments)}function v(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var y=a.default.bind(f.default),O={children:i.default.node,error:i.default.node,help:i.default.node,hideRequired:i.default.bool,intl:i.default.shape({formatMessage:i.default.func}).isRequired,isInline:i.default.bool,isInvalid:i.default.bool,isLegendHidden:i.default.bool,legend:i.default.string.isRequired,legendAttrs:i.default.object,required:i.default.bool,showOptional:i.default.bool},x=function(e){var t=e.children,n=e.error,r=e.help,i=e.hideRequired,a=e.intl,s=e.isInvalid,f=e.isInline,m=e.isLegendHidden,p=e.legend,_=e.legendAttrs,O=e.required,x=e.showOptional,k=v(e,b),j=l.default.useContext(d.default),C=(0,o.default)(y(["checkbox-field",{"is-inline":f},j.className]),k.className),w=y(["legend",_.className]),P="terra-checkbox-field-description-".concat((0,u.default)()),E=r?"terra-checkbox-field-description-help-".concat((0,u.default)()):"",N=n?"terra-checkbox-field-description-error-".concat((0,u.default)()):"",S="".concat(P," ").concat(N," ").concat(E),F=-1!==navigator.userAgent.indexOf("Safari")&&-1===navigator.userAgent.indexOf("Chrome")||-1!==navigator.userAgent.indexOf("Edg")?"div":"legend",q=l.default.createElement(F,{id:P,className:y(["legend-group",{"legend-group-hidden":m}])},l.default.createElement("div",g({},_,{className:w}),s&&l.default.createElement("span",{className:y("error-icon")}),O&&(s||!i)&&l.default.createElement(l.default.Fragment,null,l.default.createElement("div",{"aria-hidden":"true",className:y("required")},"*"),l.default.createElement(c.default,{text:a.formatMessage({id:"Terra.form.field.required"})})),p,O&&!s&&i&&l.default.createElement("span",{className:y("required-hidden")},"*"),x&&!O&&l.default.createElement("span",{className:y("optional")},a.formatMessage({id:"Terra.form.field.optional"})),!s&&l.default.createElement("span",{className:y("error-icon-hidden")}))),A=l.default.Children.map(t,(function(e){return e&&e.type.isCheckbox?l.default.cloneElement(e,{inputAttrs:h(h({},e.props.inputAttrs),{},{"aria-describedby":S})}):e}));return l.default.createElement("fieldset",g({},k,{className:C}),q,A,s&&n&&l.default.createElement("div",{id:N,className:y("error-text")},n),r&&l.default.createElement("div",{id:E,className:y("help-text")},r))};x.propTypes=O,x.defaultProps={children:null,error:null,help:null,hideRequired:!1,isInline:!1,isInvalid:!1,isLegendHidden:!1,legendAttrs:{},required:!1,showOptional:!1};var k=(0,s.injectIntl)(x);t.default=k},84538:function(e){var t={isConsideredMobileDevice:function(){return window.matchMedia("(max-width: 1024px)").matches&&("ontouchstart"in window||window.DocumentTouch&&document instanceof DocumentTouch||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0)}};e.exports=t}}]);