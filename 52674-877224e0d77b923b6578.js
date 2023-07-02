"use strict";(self.webpackChunkterra_ui=self.webpackChunkterra_ui||[]).push([[52674],{22863:function(e,t,r){var n=r(64836);t.Z=void 0;var a=n(r(67294)),o=n(r(45697)),i=n(r(47166)),l=n(r(17422)),c=i.default.bind(l.default),u={name:o.default.string.isRequired,src:o.default.string,url:o.default.string,version:o.default.string.isRequired},f=function(e){var t=e.src,r=e.name,n=e.url,o=e.version,i=a.default.createElement("a",{className:c("badge"),href:n||"https://www.npmjs.org/package/".concat(r,"/v/").concat(o)},a.default.createElement("span",{className:c("badge-name")},n?"package":"npm"),a.default.createElement("span",{className:c("badge-version")},"v".concat(o))),l=t?a.default.createElement("a",{className:c("badge"),href:t},a.default.createElement("span",{className:c("badge-name")},"github"),a.default.createElement("span",{className:c("badge-version")},"source")):void 0;return a.default.createElement("div",{className:c("badge-container")},i,l)};f.propTypes=u;var s=f;t.Z=s},17422:function(e,t,r){r.r(t),t.default={badge:"Badges-module__badge___vex-+","badge-container":"Badges-module__badge-container___B13Mv","badge-name":"Badges-module__badge-name___jkN0m","badge-version":"Badges-module__badge-version___agZ+P"}},66633:function(e,t,r){r.r(t),t.default={arrange:"Arrange-module__arrange___hY0Ml",fill:"Arrange-module__fill___m88eq",fit:"Arrange-module__fit___tv8j-",center:"Arrange-module__center___9qfhG",bottom:"Arrange-module__bottom___8beod",stretch:"Arrange-module__stretch___eQF-k",default:"Arrange-module__default___z+O29"}},9197:function(e,t,r){r.r(t),t.default={"orion-fusion-theme":"SectionHeader-module__orion-fusion-theme___MGUT7","section-header":"SectionHeader-module__section-header___wbdJQ","is-interactable":"SectionHeader-module__is-interactable___4Hj3Z","is-active":"SectionHeader-module__is-active___Qfdbq","is-transparent":"SectionHeader-module__is-transparent___3L6Q5","title-arrange":"SectionHeader-module__title-arrange___t4JW1",title:"SectionHeader-module__title___EPyaG","accordion-icon-wrapper":"SectionHeader-module__accordion-icon-wrapper___BOHqG","accordion-icon":"SectionHeader-module__accordion-icon___VQmOf","is-open":"SectionHeader-module__is-open___naqpt","arrange-wrapper":"SectionHeader-module__arrange-wrapper___jwEJm"}},78490:function(e,t,r){function n(e){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.AlignmentTypes=void 0;var a=u(r(67294)),o=u(r(45697)),i=u(r(47166)),l=u(r(66633)),c=["fitStart","fill","fitEnd","align","alignFitStart","alignFill","alignFitEnd","fitStartAttributes","fillAttributes","fitEndAttributes"];function u(e){return e&&e.__esModule?e:{default:e}}function f(){return f=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},f.apply(this,arguments)}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function d(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){p(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t,r){return(t=function(e){var t=function(e,t){if("object"!==n(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var a=r.call(e,t||"default");if("object"!==n(a))return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===n(t)?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function b(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}t.AlignmentTypes={CENTER:"center",BOTTOM:"bottom",STRETCH:"stretch"};var y=i.default.bind(l.default),m={fitStart:o.default.element,fill:o.default.element.isRequired,fitEnd:o.default.element,align:o.default.oneOf(["center","bottom","stretch"]),alignFitStart:o.default.oneOf(["center","bottom","stretch"]),alignFitEnd:o.default.oneOf(["center","bottom","stretch"]),alignFill:o.default.oneOf(["center","bottom","stretch"]),fitStartAttributes:o.default.object,fillAttributes:o.default.object,fitEndAttributes:o.default.object},_=function(e){var t=e.fitStart,r=e.fill,n=e.fitEnd,o=e.align,i=e.alignFitStart,l=e.alignFill,u=e.alignFitEnd,s=e.fitStartAttributes,p=e.fillAttributes,m=e.fitEndAttributes,_=b(e,c),v=d({},s),g=d({},p),O=d({},m);return a.default.createElement("div",f({},_,{className:y("arrange",_.className)}),a.default.createElement("div",f({},v,{className:y("fit",o||i,v.className)}),t),a.default.createElement("div",f({},g,{className:y("fill",o||l,g.className)}),r),a.default.createElement("div",f({},O,{className:y("fit",o||u,O.className)}),n))};_.propTypes=m;var v=_;t.default=v},16772:function(e,t,r){function n(e){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=b(r(67294)),o=b(r(45697)),i=b(r(94184)),l=b(r(47166)),c=b(r(50026)),u=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==n(e)&&"function"!=typeof e)return{default:e};var r=p(t);if(r&&r.has(e))return r.get(e);var a={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if("default"!==i&&Object.prototype.hasOwnProperty.call(e,i)){var l=o?Object.getOwnPropertyDescriptor(e,i):null;l&&(l.get||l.set)?Object.defineProperty(a,i,l):a[i]=e[i]}a.default=e,r&&r.set(e,a);return a}(r(51051)),f=b(r(78490)),s=b(r(9197)),d=["text","title","onClick","isOpen","isTransparent","level"];function p(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(p=function(e){return e?r:t})(e)}function b(e){return e&&e.__esModule?e:{default:e}}function y(){return y=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},y.apply(this,arguments)}function m(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function _(e,t,r){return(t=O(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function v(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}function g(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,O(n.key),n)}}function O(e){var t=function(e,t){if("object"!==n(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var a=r.call(e,t||"default");if("object"!==n(a))return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===n(t)?t:String(t)}function h(e,t){return h=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},h(e,t)}function w(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,a=S(e);if(t){var o=S(this).constructor;r=Reflect.construct(a,arguments,o)}else r=a.apply(this,arguments);return function(e,t){if(t&&("object"===n(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return j(e)}(this,r)}}function j(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function S(e){return S=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},S(e)}var E=l.default.bind(s.default),P={text:o.default.string,title:o.default.string,onClick:o.default.func,isOpen:o.default.bool,level:o.default.oneOf([1,2,3,4,5,6]),isTransparent:o.default.bool},k={onClick:void 0,isOpen:!1,isTransparent:!1},N=function(e){return e.nativeEvent.keyCode===u.KEY_RETURN||e.nativeEvent.keyCode===u.KEY_SPACE},A=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&h(e,t)}(l,e);var t,r,n,o=w(l);function l(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,l),(t=o.call(this,e)).state={isActive:!1},t.wrapOnKeyDown=t.wrapOnKeyDown.bind(j(t)),t.wrapOnKeyUp=t.wrapOnKeyUp.bind(j(t)),t}return t=l,r=[{key:"wrapOnKeyDown",value:function(e){var t=this;return function(r){N(r)&&!t.state.isActive&&(t.setState({isActive:!0}),t.props.onClick&&t.props.onClick(r)),e&&e(r)}}},{key:"wrapOnKeyUp",value:function(e){var t=this;return function(r){N(r)&&t.state.isActive&&t.setState({isActive:!1}),e&&e(r)}}},{key:"render",value:function(){var e=this.props,t=e.text,r=e.title,n=e.onClick,o=e.isOpen,l=e.isTransparent,c=e.level,u=v(e,d),s=this.context,p=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?m(Object(r),!0).forEach((function(t){_(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):m(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},u);n&&(p.tabIndex="0",p.onKeyDown=this.wrapOnKeyDown(p.onKeyDown),p.onKeyUp=this.wrapOnKeyUp(p.onKeyUp),p.onClick=n);var b=E(["accordion-icon",{"is-open":n&&o}]),g=a.default.createElement("div",{className:E("accordion-icon-wrapper")},a.default.createElement("span",{className:b})),O=(0,i.default)(E("section-header",{"is-interactable":n},{"is-active":this.state.isActive},{"is-transparent":l},s.className),u.className);c||console.warn("Default heading level may not appropriate has it would fail to convey context of heading in a site / application where it is used. Heading level should be set explicitly depending on the position of header in site / application to allow screen readers to identify headers consistently."),r&&console.warn("`title` prop has been renamed to `text`. please update all the refernces of `title` prop to use prop `text`.");var h="h".concat(c||2),w=t||r,j=n?{role:"button","aria-expanded":o,"aria-label":w}:void 0;return a.default.createElement(h,y({},p,{className:O,"aria-label":n?void 0:w}),a.default.createElement("div",y({},j,{tabIndex:"-1",className:E("arrange-wrapper")}),a.default.createElement(f.default,{fitStart:n&&g,fill:a.default.createElement("span",{"aria-hidden":void 0!==n,className:E("title")},w),className:E("title-arrange")})))}}],r&&g(t.prototype,r),n&&g(t,n),Object.defineProperty(t,"prototype",{writable:!1}),l}(a.default.Component);A.propTypes=P,A.defaultProps=k,A.contextType=c.default;var T=A;t.default=T}}]);