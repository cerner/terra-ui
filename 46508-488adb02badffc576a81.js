"use strict";(self.webpackChunkterra_ui=self.webpackChunkterra_ui||[]).push([[46508],{97813:function(e,t,n){t.Z=void 0;var r=u(n(67294)),l=u(n(67220)),o=u(n(47166)),a=u(n(55108)),c=u(n(73758));function u(e){return e&&e.__esModule?e:{default:e}}var i=o.default.bind(c.default),s=function(){return r.default.createElement(a.default,{type:"custom",title:"Help!",customColorClass:i(["my-app-alert-help-example"]),customIcon:r.default.createElement(l.default,null)},r.default.createElement("span",null,"This is a",r.default.createElement("b",null," custom")," ","notification banner"))};t.Z=s},91789:function(e,t,n){n.d(t,{Z:function(){return i}});n(67294);var r=n(81254),l=["components"];function o(){return o=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o.apply(this,arguments)}function a(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var c={},u="wrapper";function i(e){var t=e.components,n=a(e,l);return(0,r.mdx)(u,o({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-scss"},"@import './clinical-lowlight-theme/colors.module';\n@import './orion-fusion-theme/colors.module';\n\n:root {\n  --terra-core-docs-attention-example-color: #fa0000;\n  --terra-core-docs-help-example-color: #b961cf;\n  --terra-core-docs-dismiss-example-color: #ffa500;\n}\n\n:local {\n  .my-app-alert-attention-example {\n    color: var(--terra-core-docs-attention-example-color, #fa0000);\n  }\n\n  .my-app-alert-help-example {\n    color: var(--terra-core-docs-help-example-color, #b961cf);\n  }\n\n  .my-app-alert-dismiss-example {\n    color: var(--terra-core-docs-dismiss-example-color, #ffa500);\n  }\n}\n\n")))}i.isMDXComponent=!0},46508:function(e,t,n){n.d(t,{Z:function(){return d}});var r=n(67294),l=n(97813),o=n(81254),a=["components"];function c(){return c=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},c.apply(this,arguments)}function u(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var i={};function s(e){var t=e.components,n=u(e,a);return(0,o.mdx)("wrapper",c({},i,n,{components:t,mdxType:"MDXLayout"}),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport IconHelp from 'terra-icon/lib/icon/IconHelp';\nimport classNames from 'classnames/bind';\nimport Alert from 'terra-alert';\nimport styles from './colors.module.scss';\n\nconst cx = classNames.bind(styles);\n\nconst CustomExample = () => (\n  <Alert type=\"custom\" title=\"Help!\" customColorClass={cx(['my-app-alert-help-example'])} customIcon={<IconHelp />}>\n    <span>\n      This is a\n      <b> custom</b>\n      {' '}\n      notification banner\n    </span>\n  </Alert>\n);\n\nexport default CustomExample;\n\n")))}s.isMDXComponent=!0;var m=n(49271),f=n(91789),d=function(e){var t=e.title,n=e.description,o=e.isExpanded;return r.createElement(m.Z,{title:t||"Custom Example",description:n,example:r.createElement(l.Z,null),exampleCssSrc:r.createElement(f.Z,null),exampleSrc:r.createElement(s,null),isExpanded:o})}},73758:function(e,t,n){n.r(t),t.default={"clinical-lowlight-theme":"colors-module__clinical-lowlight-theme___hlaqD","orion-fusion-theme":"colors-module__orion-fusion-theme___2KJAr","my-app-alert-attention-example":"colors-module__my-app-alert-attention-example___iAGBc","my-app-alert-help-example":"colors-module__my-app-alert-help-example___CSLgC","my-app-alert-dismiss-example":"colors-module__my-app-alert-dismiss-example___NOGjQ"}},15612:function(e,t,n){n.r(t),t.default={"clinical-lowlight-theme":"Alert-module__clinical-lowlight-theme___RndXZ","orion-fusion-theme":"Alert-module__orion-fusion-theme___x7uNQ","alert-base":"Alert-module__alert-base___HqkTA",narrow:"Alert-module__narrow___Gc6Ro",wide:"Alert-module__wide___uebGM",icon:"Alert-module__icon___U2RhW","content-container":"Alert-module__content-container___FDxUT",body:"Alert-module__body___sNDWh","body-narrow":"Alert-module__body-narrow___I4Kh-","body-std":"Alert-module__body-std___uou7V","focus-container":"Alert-module__focus-container___abeGt",section:"Alert-module__section___PD7qG","section-custom":"Alert-module__section-custom___L5gB6",title:"Alert-module__title___Ygk4p",actions:"Alert-module__actions___tQ0AP","actions-custom":"Alert-module__actions-custom___qENtX",alert:"Alert-module__alert___1NkdW",error:"Alert-module__error___srMNe",warning:"Alert-module__warning___2nZ8+",unsatisfied:"Alert-module__unsatisfied___fPicn",unverified:"Alert-module__unverified___rz+PZ",advisory:"Alert-module__advisory___7AfzD",info:"Alert-module__info___2cMNU",success:"Alert-module__success___yOkOV",custom:"Alert-module__custom___sjV0i","unsatisfied-icon":"Alert-module__unsatisfied-icon___otAv1","unverified-icon":"Alert-module__unverified-icon___+HsE4","custom-default-color":"Alert-module__custom-default-color___8U7Ot"}},55108:function(e,t,n){function r(e){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==r(e)&&"function"!=typeof e)return{default:e};var n=b(t);if(n&&n.has(e))return n.get(e);var l={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if("default"!==a&&Object.prototype.hasOwnProperty.call(e,a)){var c=o?Object.getOwnPropertyDescriptor(e,a):null;c&&(c.get||c.set)?Object.defineProperty(l,a,c):l[a]=e[a]}l.default=e,n&&n.set(e,l);return l}(n(67294)),o=y(n(45697)),a=n(25387),c=y(n(94184)),u=y(n(47166)),i=n(55877),s=y(n(80906)),m=y(n(55281)),f=n(34614),d=y(n(50026)),p=y(n(15612)),_=["action","children","customIcon","customColorClass","disableAlertActionFocus","onDismiss","intl","role","title","type"];function y(e){return e&&e.__esModule?e:{default:e}}function b(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(b=function(e){return e?n:t})(e)}function v(){return v=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},v.apply(this,arguments)}function O(e,t,n){return(t=function(e){var t=function(e,t){if("object"!==r(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var l=n.call(e,t||"default");if("object"!==r(l))return l;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===r(t)?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function A(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,l,o,a,c=[],u=!0,i=!1;try{if(o=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;u=!1}else for(;!(u=(r=o.call(n)).done)&&(c.push(r.value),c.length!==t);u=!0);}catch(e){i=!0,l=e}finally{try{if(!u&&null!=n.return&&(a=n.return(),Object(a)!==a))return}finally{if(i)throw l}}return c}}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return E(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return E(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function E(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function h(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var g=u.default.bind(p.default),S={ALERT:"alert",ERROR:"error",WARNING:"warning",UNSATISFIED:"unsatisfied",UNVERIFIED:"unverified",ADVISORY:"advisory",INFO:"info",SUCCESS:"success",CUSTOM:"custom"},x={action:o.default.element,children:o.default.node,customIcon:o.default.element,customColorClass:o.default.string,disableAlertActionFocus:o.default.bool,onDismiss:o.default.func,intl:o.default.shape({formatMessage:o.default.func}).isRequired,role:o.default.string,title:o.default.string,type:o.default.oneOf([S.ALERT,S.ERROR,S.WARNING,S.UNSATISFIED,S.UNVERIFIED,S.ADVISORY,S.INFO,S.SUCCESS,S.CUSTOM])},I={customColorClass:"custom-default-color",disableAlertActionFocus:!1,type:S.ALERT},N=function(e){var t,n,r=e.action,o=e.children,a=e.customIcon,u=e.customColorClass,p=e.disableAlertActionFocus,y=e.onDismiss,b=e.intl,E=e.role,x=e.title,I=e.type,N=h(e,_),w=l.default.useContext(d.default),j=A((0,l.useState)(),2),C=j[0],R=j[1],T=(0,l.useRef)(null),M=I===S.CUSTOM?"":b.formatMessage({id:"Terra.alert.".concat(I)}),D=I===S.ALERT?"alert":"status",P="alert"===E||"alert"===D,U=(0,c.default)(g("alert-base",I,{narrow:C},{wide:!C},w.className),N.className,O({},"".concat(u),u&&I===S.CUSTOM)),k=g("body",{"body-std":!C||C&&!y&&!r},{"body-narrow":C&&(y||r)}),F=g("focus-container"),G=g("content-container"),W=(0,i.v4)(),Z="alert-title-".concat(W),L="alert-message-".concat(W),V=x||M?Z:L;if(y&&(t=l.default.createElement(m.default,{"aria-describedby":V,text:b.formatMessage({id:"Terra.alert.dismiss"}),onClick:y})),y||r){var H=g("actions",{"actions-custom":I===S.CUSTOM});n=l.default.createElement("div",{className:H},r,t)}var X=g("section",{"section-custom":I===S.CUSTOM}),q=l.default.createElement("div",{id:L,className:X},(x||M)&&l.default.createElement("strong",{id:Z,className:g("title")},x||M),o);return(0,l.useEffect)((function(){var e;P&&r&&!p&&null!=T&&null!==(e=T.current)&&void 0!==e&&e.focus&&T.current.focus()}),[]),l.default.createElement(s.default,{onChange:function(e){var t="tiny"===e;t!==C&&R(t)}},l.default.createElement("div",v({role:E||D},N,{className:U}),l.default.createElement("div",{className:k},l.default.createElement("div",{className:F,ref:T,tabIndex:"-1"}),l.default.createElement("div",{className:G},function(e,t){switch(e){case S.ALERT:return l.default.createElement("span",{className:g("icon")},l.default.createElement(f.IconAlert,null));case S.ERROR:return l.default.createElement("span",{className:g("icon")},l.default.createElement(f.IconError,null));case S.WARNING:return l.default.createElement("span",{className:g("icon")},l.default.createElement(f.IconWarning,null));case S.UNSATISFIED:return l.default.createElement("span",{className:g("icon","unsatisfied-icon")},l.default.createElement(f.IconGapChecking,null));case S.UNVERIFIED:return l.default.createElement("span",{className:g("icon","unverified-icon")},l.default.createElement(f.IconDiamondSymbol,null));case S.ADVISORY:return null;case S.INFO:return l.default.createElement("span",{className:g("icon")},l.default.createElement(f.IconInformation,null));case S.SUCCESS:return l.default.createElement("span",{className:g("icon")},l.default.createElement(f.IconSuccess,null));case S.CUSTOM:return l.default.createElement("span",{className:g("icon")},t);default:return null}}(I,a),q)),n))};N.propTypes=x,N.defaultProps=I,(N.Opts={}).Types=S;var w=(0,a.injectIntl)(N);t.default=w}}]);