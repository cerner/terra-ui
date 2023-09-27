"use strict";(self.webpackChunkterra_ui=self.webpackChunkterra_ui||[]).push([[63884],{66125:function(e,t,n){n.r(t),t.default={"clinical-lowlight-theme":"ItemComment-module__clinical-lowlight-theme___lM+Lt","orion-fusion-theme":"ItemComment-module__orion-fusion-theme___dtZma","item-comment":"ItemComment-module__item-comment___ESQjD","inline-icon":"ItemComment-module__inline-icon___znks3"}},82102:function(e,t,n){n.r(t),t.default={"clinical-lowlight-theme":"ItemDisplay-module__clinical-lowlight-theme___WSueU","orion-fusion-theme":"ItemDisplay-module__orion-fusion-theme___8tnBi","item-display":"ItemDisplay-module__item-display___zzQHA",text:"ItemDisplay-module__text___8kzzL",icon:"ItemDisplay-module__icon___QFsen","icon-center":"ItemDisplay-module__icon-center___yNnaA","icon-top":"ItemDisplay-module__icon-top___le+7t","icon-inline":"ItemDisplay-module__icon-inline___7-6dl","is-truncated":"ItemDisplay-module__is-truncated___5xS0r","is-disabled":"ItemDisplay-module__is-disabled___LmVej",secondary:"ItemDisplay-module__secondary___ObdZe",attention:"ItemDisplay-module__attention___W1BMa",strong:"ItemDisplay-module__strong___OPiqQ","strike-through":"ItemDisplay-module__strike-through___yJ7fk"}},57122:function(e,t,n){n.r(t),t.default={"clinical-lowlight-theme":"ItemView-module__clinical-lowlight-theme___y3JHh","orion-fusion-theme":"ItemView-module__orion-fusion-theme___hJD0X","item-view":"ItemView-module__item-view___df01D",accessory:"ItemView-module__accessory___dkq4r","start-accessory":"ItemView-module__start-accessory___4CJYM","end-accessory":"ItemView-module__end-accessory___WY4-w","accessory-align-top":"ItemView-module__accessory-align-top___ksPW3","accessory-align-center":"ItemView-module__accessory-align-center___aoVwW",body:"ItemView-module__body___sG16o","column-container":"ItemView-module__column-container___Xgt3L",content:"ItemView-module__content___MHhcY","secondary-column":"ItemView-module__secondary-column___7P7K3",row:"ItemView-module__row___jDHgv","is-truncated":"ItemView-module__is-truncated___tEARE","one-column":"ItemView-module__one-column___YwGCZ","primary-column":"ItemView-module__primary-column___pMOzm","two-columns":"ItemView-module__two-columns___WezN9","two-columns-by-row":"ItemView-module__two-columns-by-row___wmx2B","truncated-two-columns":"ItemView-module__truncated-two-columns___9UuM6","content-primary-color":"ItemView-module__content-primary-color___pOHcF","content-primary-size":"ItemView-module__content-primary-size___goRTN","content-secondary-color":"ItemView-module__content-secondary-color___CzH+h","content-secondary-size":"ItemView-module__content-secondary-size___s8KFR"}},46563:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=_(n(67294)),o=_(n(45697)),a=n(25387),l=_(n(94184)),i=_(n(47166)),c=_(n(50026)),s=_(n(97309)),u=_(n(32166)),m=_(n(66125)),d=["text","isTruncated","intl"];function _(e){return e&&e.__esModule?e:{default:e}}function f(){return f=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},f.apply(this,arguments)}function y(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=i.default.bind(m.default),g={text:o.default.string,isTruncated:o.default.bool,intl:o.default.shape({formatMessage:o.default.func}).isRequired},v=function(e){var t=e.text,n=e.isTruncated,o=e.intl,a=y(e,d),i=r.default.useContext(c.default),m=(0,l.default)(p("item-comment",i.className),a.className),_=o.formatMessage({id:"Terra.itemDisplay.comment"});return r.default.createElement(u.default,f({text:t,isTruncated:n,icon:r.default.createElement(s.default,{a11yLabel:_,className:p("inline-icon"),role:"img",focusable:"true"})},a,{className:m}))};v.propTypes=g,v.defaultProps={text:"",isTruncated:!1};var b=(0,a.injectIntl)(v);t.default=b},32166:function(e,t,n){function r(e){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.TextStyles=void 0;var o=_(n(67294)),a=_(n(45697)),l=_(n(94184)),i=_(n(47166)),c=_(n(50026)),s=_(n(29270)),u=n(25387),m=_(n(82102)),d=["text","textStyle","isTruncated","isDisabled","icon","iconAlignment","textStyleMeaning","intl"];function _(e){return e&&e.__esModule?e:{default:e}}function f(){return f=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},f.apply(this,arguments)}function y(e,t,n){return(t=function(e){var t=function(e,t){if("object"!==r(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var o=n.call(e,t||"default");if("object"!==r(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===r(t)?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var g=i.default.bind(m.default),v={PRIMARY:"primary",SECONDARY:"secondary",ATTENTION:"attention",STRIKETHROUGH:"strikeThrough",STRONG:"strong"};t.TextStyles=v;var b={text:a.default.string,textStyle:a.default.oneOf(Object.values(v)),isTruncated:a.default.bool,isDisabled:a.default.bool,icon:a.default.element,iconAlignment:a.default.oneOf(["center","top","inline"]),textStyleMeaning:a.default.string,intl:a.default.shape({formatMessage:a.default.func}).isRequired},h={text:"",textStyle:"primary",isTruncated:!1,isDisabled:!1,icon:void 0,iconAlignment:"center"},O=function(e){var t,n=e.text,r=e.textStyle,a=e.isTruncated,i=e.isDisabled,u=e.icon,m=e.iconAlignment,_=e.textStyleMeaning,b=e.intl,h=p(e,d),O=o.default.useContext(c.default),w=(0,l.default)(g("item-display",{"is-disabled":i},y({},"icon-".concat(m),u),O.className),h.className),T=g(["text",{"is-truncated":a},y({},"".concat(r),r===v.SECONDARY),y({},"".concat(r),r===v.ATTENTION),y({},"".concat(r),r===v.STRONG),{"strike-through":r===v.STRIKETHROUGH}]);i&&console.warn("The isDisabled prop does not meet a11y standards and should not be used. It will be removed in the next major release."),u&&(t=o.default.createElement("div",{className:g("icon")},u));var I,S,E=o.default.createElement("span",null,n);return r===v.STRONG&&(E=o.default.createElement("strong",null,n)),_?(I=_,S=b.formatMessage({id:"Terra.itemDisplay.textStyleMeaningEnd"},{textStyleMeaning:_})):r===v.STRIKETHROUGH&&(I=b.formatMessage({id:"Terra.itemDisplay.textStyleMeaningStrikethrough"}),S=b.formatMessage({id:"Terra.itemDisplay.textStyleMeaningStrikethroughEnd"})),o.default.createElement("div",f({},h,{className:w,"aria-disabled":i}),t,I&&o.default.createElement(s.default,{text:I}),o.default.createElement("div",{"data-terra-clinical-item-display-text":!0,className:T},E),S&&o.default.createElement(s.default,{text:S}))};O.propTypes=b,O.defaultProps=h;var w=(0,u.injectIntl)(O);t.default=w},63884:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.TextEmphasisTypes=t.Layouts=t.AccessoryAlignments=void 0;var r=d(n(67294)),o=d(n(45697)),a=d(n(94184)),l=d(n(47166)),i=d(n(50026)),c=d(n(32166)),s=d(n(46563)),u=d(n(57122)),m=["layout","trueColumn","textEmphasis","overrideDefaultStyling","isTruncated","accessoryAlignment","startAccessory","reserveStartAccessorySpace","endAccessory","displays","comment","refCallback"];function d(e){return e&&e.__esModule?e:{default:e}}function _(){return _=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},_.apply(this,arguments)}function f(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var y=l.default.bind(u.default),p=t.Layouts={ONE_COLUMN:"oneColumn",TWO_COLUMNS:"twoColumns"},g=t.TextEmphasisTypes={DEFAULT:"default",START:"start"},v=t.AccessoryAlignments={ALIGN_TOP:"alignTop",ALIGN_CENTER:"alignCenter"},b={layout:o.default.oneOf(["oneColumn","twoColumns"]),trueColumn:o.default.bool,textEmphasis:o.default.oneOf(["default","start"]),overrideDefaultStyling:o.default.bool,isTruncated:o.default.bool,accessoryAlignment:o.default.oneOf(["alignTop","alignCenter"]),startAccessory:o.default.node,reserveStartAccessorySpace:o.default.bool,endAccessory:o.default.node,displays:o.default.arrayOf(o.default.element),comment:o.default.node,refCallback:o.default.func},h={layout:p.ONE_COLUMN,trueColumn:!1,textEmphasis:g.DEFAULT,overrideDefaultStyling:!1,isTruncated:!1,accessoryAlignment:v.ALIGN_CENTER,startAccessory:void 0,reserveStartAccessorySpace:!1,endAccessory:void 0,displays:[],comment:void 0},O=function(e,t,n,o){var a;if(e||t){var l=y("accessory","".concat(o,"-accessory"),{"accessory-align-center":n===v.ALIGN_CENTER},{"accessory-align-top":n===v.ALIGN_TOP});a=r.default.createElement("div",{className:l},e)}return a},w=function(e,t){var n="content-primary-size",r="content-primary-color";return e>0&&(n="content-secondary-size"),(e>=2||2===t&&1===e)&&(r="content-secondary-color"),[n,r]},T=function(e,t,n,r){var o;return o=r===g.START?function(e,t,n){return n>0||e>=2?["content-secondary-size","content-secondary-color"]:w(e,t)}(e,t,n):w(e,t),["content"].concat(o)},I=function(e,t,n,o,a){if(null!=e&&e.length){var l=[],i=e.slice(0,8),c=[];if(t===p.TWO_COLUMNS){if(!a){for(;i.length;)l.push(i.splice(0,2));return r.default.createElement("div",{className:y("row-container")},l.map((function(e,t){var o=function(e,t,n,o){var a=t;return r.default.createElement("div",{className:y("row"),key:a},e.map((function(e,a){var l=a,i=T(t,n,a,o);return r.default.createElement("div",{className:y(i),key:l},e)})))}(e,t,l.length,n);return o})))}l=function(e){for(var t=0,n=[],r=[],o=[];e.length;)(t+=1)%2==0?o.push(e.splice(0,1)):r.push(e.splice(0,1));return n.push(r),n.push(o),n}(i)}else{for(;i.length;)c.push(i.splice(0,1));l.push(c)}return r.default.createElement("div",{className:y("column-container")},l.map((function(e,t){var a=function(e,t,n,o){var a,l=t,i=e.length;return a=0===t?"primary-column":"secondary-column",r.default.createElement("div",{className:y(a),key:l},e.map((function(e,a){var l,c=a;return l=o?"content":T(a,i,t,n),r.default.createElement("div",{className:y(l),key:c},e)})))}(e,t,n,o);return a})))}},S=function(e){var t=e.layout,n=e.trueColumn,o=e.textEmphasis,l=e.overrideDefaultStyling,c=e.isTruncated,s=e.accessoryAlignment,u=e.startAccessory,d=e.reserveStartAccessorySpace,g=e.endAccessory,v=e.displays,b=e.comment,h=e.refCallback,w=f(e,m),T=r.default.useContext(i.default),S=t===p.TWO_COLUMNS&&n,E=c||function(e){for(var t=e.slice(0,8),n=0;n<t.length;n+=1)if(!0===t[n].props.isTruncated)return!0;return!1}(v),N=(0,a.default)(y("item-view",{"is-truncated":c},{"one-column":t===p.ONE_COLUMN},{"two-columns":S&&!E},{"truncated-two-columns":S&&E},{"two-columns-by-row":t===p.TWO_COLUMNS&&!n},T.className),w.className);return r.default.createElement("div",_({},w,{className:N,ref:h}),O(u,d,s,"start"),r.default.createElement("div",{className:y("body")},I(v,t,o,l,n),b),O(g,!1,s,"end"))};S.propTypes=b,S.defaultProps=h,S.Display=c.default,S.Comment=s.default;t.default=S}}]);