"use strict";(self.webpackChunkterra_ui=self.webpackChunkterra_ui||[]).push([[46508],{97813:function(e,t,n){t.Z=void 0;var r=u(n(67294)),o=u(n(19845)),l=u(n(55108)),a=n(34614),i=u(n(73758));function u(e){return e&&e.__esModule?e:{default:e}}var c=o.default.bind(i.default);t.Z=function(){return r.default.createElement(l.default,{type:"custom",title:"Help!",customColorClass:c(["my-app-alert-help-example"]),customIcon:r.default.createElement(a.IconHelp,null)},"Welcome to Terra!")}},91789:function(e,t,n){n.d(t,{Z:function(){return c}});n(67294);var r=n(81254),o=["components"];function l(){return l=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},l.apply(this,arguments)}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i={},u="wrapper";function c(e){var t=e.components,n=a(e,o);return(0,r.mdx)(u,l({},i,n,{components:t,mdxType:"MDXLayout"}),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-scss"},"@import './clinical-lowlight-theme/colors.module';\n@import './orion-fusion-theme/colors.module';\n\n:root {\n  --terra-core-docs-attention-example-color: #fa0000;\n  --terra-core-docs-help-example-color: #b961cf;\n  --terra-core-docs-dismiss-example-color: #ffa500;\n}\n\n:local {\n  .my-app-alert-attention-example {\n    color: var(--terra-core-docs-attention-example-color, #fa0000);\n  }\n\n  .my-app-alert-help-example {\n    color: var(--terra-core-docs-help-example-color, #b961cf);\n  }\n\n  .my-app-alert-dismiss-example {\n    color: var(--terra-core-docs-dismiss-example-color, #ffa500);\n  }\n}\n\n")))}c.isMDXComponent=!0},46508:function(e,t,n){n.d(t,{Z:function(){return m}});var r=n(67294),o=n(97813),l=n(81254),a=["components"];function i(){return i=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},i.apply(this,arguments)}function u(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c={};function s(e){var t=e.components,n=u(e,a);return(0,l.mdx)("wrapper",i({},c,n,{components:t,mdxType:"MDXLayout"}),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport classNames from 'classnames/bind';\n\nimport Alert from 'terra-alert';\nimport { IconHelp } from 'terra-icon';\nimport styles from './colors.module.scss';\n\nconst cx = classNames.bind(styles);\n\nconst CustomExample = () => (\n  <Alert\n    type=\"custom\"\n    title=\"Help!\"\n    customColorClass={cx(['my-app-alert-help-example'])}\n    customIcon={<IconHelp />}\n  >\n    Welcome to Terra!\n  </Alert>\n);\n\nexport default CustomExample;\n\n")))}s.isMDXComponent=!0;var f=n(49271),d=n(91789),m=function(e){var t=e.title,n=e.description,l=e.isExpanded;return r.createElement(f.Z,{title:t||"Custom Example",description:n,example:r.createElement(o.Z,null),exampleCssSrc:r.createElement(d.Z,null),exampleSrc:r.createElement(s,null),isExpanded:l})}},73758:function(e,t,n){n.r(t),t.default={"clinical-lowlight-theme":"colors-module__clinical-lowlight-theme___hlaqD","orion-fusion-theme":"colors-module__orion-fusion-theme___2KJAr","my-app-alert-attention-example":"colors-module__my-app-alert-attention-example___iAGBc","my-app-alert-help-example":"colors-module__my-app-alert-help-example___CSLgC","my-app-alert-dismiss-example":"colors-module__my-app-alert-dismiss-example___NOGjQ"}},15612:function(e,t,n){n.r(t),t.default={"clinical-lowlight-theme":"Alert-module__clinical-lowlight-theme___RndXZ","orion-fusion-theme":"Alert-module__orion-fusion-theme___x7uNQ","alert-base":"Alert-module__alert-base___HqkTA",narrow:"Alert-module__narrow___Gc6Ro",wide:"Alert-module__wide___uebGM",icon:"Alert-module__icon___U2RhW","content-container":"Alert-module__content-container___FDxUT",body:"Alert-module__body___sNDWh","body-narrow":"Alert-module__body-narrow___I4Kh-","body-std":"Alert-module__body-std___uou7V","focus-container":"Alert-module__focus-container___abeGt",section:"Alert-module__section___PD7qG","section-custom":"Alert-module__section-custom___L5gB6",title:"Alert-module__title___Ygk4p",actions:"Alert-module__actions___tQ0AP","actions-custom":"Alert-module__actions-custom___qENtX",alert:"Alert-module__alert___1NkdW",error:"Alert-module__error___srMNe",warning:"Alert-module__warning___2nZ8+",unsatisfied:"Alert-module__unsatisfied___fPicn",unverified:"Alert-module__unverified___rz+PZ",advisory:"Alert-module__advisory___7AfzD",info:"Alert-module__info___2cMNU",success:"Alert-module__success___yOkOV",custom:"Alert-module__custom___sjV0i","unsatisfied-icon":"Alert-module__unsatisfied-icon___otAv1","unverified-icon":"Alert-module__unverified-icon___+HsE4","custom-default-color":"Alert-module__custom-default-color___8U7Ot"}},55108:function(e,t,n){function r(e){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=r(e)&&"function"!=typeof e)return{default:e};var n=h(t);if(n&&n.has(e))return n.get(e);var o={__proto__:null},l=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if("default"!==a&&Object.prototype.hasOwnProperty.call(e,a)){var i=l?Object.getOwnPropertyDescriptor(e,a):null;i&&(i.get||i.set)?Object.defineProperty(o,a,i):o[a]=e[a]}return o.default=e,n&&n.set(e,o),o}(n(67294)),l=b(n(45697)),a=n(25387),i=b(n(93967)),u=b(n(19845)),c=n(55877),s=b(n(80906)),f=b(n(55281)),d=b(n(29270)),m=n(34614),p=b(n(50026)),_=b(n(15612)),y=["action","children","customIcon","customColorClass","disableAlertActionFocus","onDismiss","intl","role","title","type"];function b(e){return e&&e.__esModule?e:{default:e}}function h(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(h=function(e){return e?n:t})(e)}function v(){return v=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},v.apply(this,arguments)}function O(e,t,n){return(t=function(e){var t=function(e,t){if("object"!==r(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var o=n.call(e,t||"default");if("object"!==r(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===r(t)?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function g(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,l,a,i=[],u=!0,c=!1;try{if(l=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;u=!1}else for(;!(u=(r=l.call(n)).done)&&(i.push(r.value),i.length!==t);u=!0);}catch(e){c=!0,o=e}finally{try{if(!u&&null!=n.return&&(a=n.return(),Object(a)!==a))return}finally{if(c)throw o}}return i}}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return w(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return w(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function w(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function E(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var A=u.default.bind(_.default),S={ALERT:"alert",ERROR:"error",WARNING:"warning",UNSATISFIED:"unsatisfied",UNVERIFIED:"unverified",ADVISORY:"advisory",INFO:"info",SUCCESS:"success",CUSTOM:"custom"},j={action:l.default.element,children:l.default.node,customIcon:l.default.element,customColorClass:l.default.string,disableAlertActionFocus:l.default.bool,onDismiss:l.default.func,intl:l.default.shape({formatMessage:l.default.func}).isRequired,role:l.default.string,title:l.default.string,type:l.default.oneOf([S.ALERT,S.ERROR,S.WARNING,S.UNSATISFIED,S.UNVERIFIED,S.ADVISORY,S.INFO,S.SUCCESS,S.CUSTOM])},x={customColorClass:"custom-default-color",disableAlertActionFocus:!1,type:S.ALERT},R=function(e){var t,n,r=e.action,l=e.children,a=e.customIcon,u=e.customColorClass,_=e.disableAlertActionFocus,b=e.onDismiss,h=e.intl,w=e.role,j=e.title,x=e.type,R=E(e,y),I=o.default.useContext(p.default),C=g((0,o.useState)(),2),N=C[0],P=C[1],T=(0,o.useRef)(null),D=x===S.CUSTOM?"":h.formatMessage({id:"Terra.alert.".concat(x)}),M=x===S.ALERT?"alert":"status",k="alert"===w||"alert"===M,W=(0,i.default)(A("alert-base",x,{narrow:N},{wide:!N},I.className),R.className,O({},"".concat(u),u&&x===S.CUSTOM)),z=A("body",{"body-std":!N||N&&!b&&!r},{"body-narrow":N&&(b||r)}),F=A("focus-container"),U=A("content-container"),L=(0,c.v4)(),V="alert-title-".concat(L),G="alert-message-".concat(L),Z=j||D?V:G;if(b&&(t=o.default.createElement(f.default,{"aria-describedby":Z,text:h.formatMessage({id:"Terra.alert.dismiss"}),onClick:b})),b||r){var B=A("actions",{"actions-custom":x===S.CUSTOM});n=o.default.createElement("div",{className:B},r,t)}var H=A("section",{"section-custom":x===S.CUSTOM}),q=o.default.createElement("div",{id:G,className:H},(j||D)&&o.default.createElement("strong",{id:V,className:A("title")},j&&D&&o.default.createElement(d.default,{text:"".concat(D,",")}),j||D),l);return(0,o.useEffect)((function(){var e;k&&r&&!_&&null!=T&&null!==(e=T.current)&&void 0!==e&&e.focus&&T.current.focus()}),[]),o.default.createElement(s.default,{onChange:function(e){var t="tiny"===e;t!==N&&P(t)}},o.default.createElement("div",v({role:w||M},R,{className:W}),o.default.createElement("div",{className:z},o.default.createElement("div",{className:F,ref:T,tabIndex:"-1"}),o.default.createElement("div",{className:U},function(e,t){switch(e){case S.ALERT:return o.default.createElement("span",{className:A("icon")},o.default.createElement(m.IconAlert,null));case S.ERROR:return o.default.createElement("span",{className:A("icon")},o.default.createElement(m.IconError,null));case S.WARNING:return o.default.createElement("span",{className:A("icon")},o.default.createElement(m.IconWarning,null));case S.UNSATISFIED:return o.default.createElement("span",{className:A("icon","unsatisfied-icon")},o.default.createElement(m.IconGapChecking,null));case S.UNVERIFIED:return o.default.createElement("span",{className:A("icon","unverified-icon")},o.default.createElement(m.IconDiamondSymbol,null));case S.ADVISORY:return null;case S.INFO:return o.default.createElement("span",{className:A("icon")},o.default.createElement(m.IconInformation,null));case S.SUCCESS:return o.default.createElement("span",{className:A("icon")},o.default.createElement(m.IconSuccess,null));case S.CUSTOM:return o.default.createElement("span",{className:A("icon")},t);default:return null}}(x,a),q)),n))};R.propTypes=j,R.defaultProps=x,(R.Opts={}).Types=S;t.default=(0,a.injectIntl)(R)},80906:function(e,t,n){function r(e){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.DependentViewport=void 0;var o=c(n(67294)),l=c(n(45697)),a=c(n(32018)),i=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=r(e)&&"function"!=typeof e)return{default:e};var n=u(t);if(n&&n.has(e))return n.get(e);var o={__proto__:null},l=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if("default"!==a&&Object.prototype.hasOwnProperty.call(e,a)){var i=l?Object.getOwnPropertyDescriptor(e,a):null;i&&(i.get||i.set)?Object.defineProperty(o,a,i):o[a]=e[a]}return o.default=e,n&&n.set(e,o),o}(n(30210));function u(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(u=function(e){return e?n:t})(e)}function c(e){return e&&e.__esModule?e:{default:e}}function s(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,(l=o.key,a=void 0,a=function(e,t){if("object"!==r(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var o=n.call(e,t||"default");if("object"!==r(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(l,"string"),"symbol"===r(a)?a:String(a)),o)}var l,a}function f(e,t){return f=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},f(e,t)}function d(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,o=p(e);if(t){var l=p(this).constructor;n=Reflect.construct(o,arguments,l)}else n=o.apply(this,arguments);return function(e,t){if(t&&("object"===r(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return m(e)}(this,n)}}function m(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function p(e){return p=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},p(e)}t.DependentViewport={WINDOW:"window",PARENT:"parent"};var _={children:l.default.node,onChange:l.default.func,onResize:l.default.func,tiny:l.default.element,small:l.default.element,medium:l.default.element,large:l.default.element,huge:l.default.element,enormous:l.default.element,responsiveTo:l.default.oneOf(["window","parent"])},y=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&f(e,t)}(u,e);var t,n,r,l=d(u);function u(){var e;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(e=l.call(this)).state={element:null},e.setContainer=e.setContainer.bind(m(e)),e.handleResize=e.handleResize.bind(m(e)),e.handleWindowResize=e.handleWindowResize.bind(m(e)),e.animationFrameID=null,e}return t=u,(n=[{key:"componentDidMount",value:function(){var e=this,t=this.props;t.tiny,t.small,t.medium,t.large,t.huge,t.enormous,this.container?(this.handleResize(this.container.getBoundingClientRect().width),this.resizeObserver=new a.default((function(t){e.animationFrameID=window.requestAnimationFrame((function(){e.animationFrameID=null,e.handleResize(t[0].target.getBoundingClientRect().width)}))})),this.resizeObserver.observe(this.container)):(this.handleResize(window.innerWidth),window.addEventListener("resize",this.handleWindowResize))}},{key:"componentWillUnmount",value:function(){this.container?(window.cancelAnimationFrame(this.animationFrameID),this.resizeObserver.disconnect(this.container),this.container=null):window.removeEventListener("resize",this.handleWindowResize)}},{key:"handleResize",value:function(e){var t=this.props,n=t.onChange,r=t.onResize,o=t.tiny,l=t.small,a=t.medium,u=t.large,c=t.huge,s=t.enormous;r&&r(e);var f,d=(0,i.activeBreakpointForSize)(e);n&&d!==this.breakpoint&&n(d),this.breakpoint=d,(o||l||a||u||c||s)&&(f=e>=i.default.enormous&&s?"enormous":e>=i.default.huge&&c?"huge":e>=i.default.large&&u?"large":e>=i.default.medium&&a?"medium":e>=i.default.small&&l?"small":"tiny",this.state.element!==f&&this.setState({element:f}))}},{key:"handleWindowResize",value:function(){this.handleResize(window.innerWidth)}},{key:"setContainer",value:function(e){null!==e&&(this.container="parent"===this.props.responsiveTo?e.parentNode:null)}},{key:"render",value:function(){var e=this.props,t=e.children,n=e.responsiveTo;return this.state.element?this.props[this.state.element]||null:o.default.createElement(o.default.Fragment,null,"parent"===n&&!this.container&&o.default.createElement("div",{ref:this.setContainer}),t)}}])&&s(t.prototype,n),r&&s(t,r),Object.defineProperty(t,"prototype",{writable:!1}),u}(o.default.Component);y.propTypes=_,y.defaultProps={responsiveTo:"parent"};t.default=y}}]);