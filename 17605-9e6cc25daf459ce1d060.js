"use strict";(self.webpackChunkterra_ui=self.webpackChunkterra_ui||[]).push([[17605,45627,85565,3353,5161,45865,85355,3193,4845,46647,85161,38681,15318,40411,18101,38443,11264,34319,20116,33609],{22863:function(e,t,n){var o=n(64836);t.Z=void 0;var r=o(n(67294)),i=o(n(45697)),l=o(n(47166)),a=o(n(17422)),u=l.default.bind(a.default),s={name:i.default.string.isRequired,src:i.default.string,url:i.default.string,version:i.default.string.isRequired},c=function(e){var t=e.src,n=e.name,o=e.url,i=e.version,l=r.default.createElement("a",{className:u("badge"),href:o||"https://www.npmjs.org/package/".concat(n,"/v/").concat(i)},r.default.createElement("span",{className:u("badge-name")},o?"package":"npm"),r.default.createElement("span",{className:u("badge-version")},"v".concat(i))),a=t?r.default.createElement("a",{className:u("badge"),href:t},r.default.createElement("span",{className:u("badge-name")},"github"),r.default.createElement("span",{className:u("badge-version")},"source")):void 0;return r.default.createElement("div",{className:u("badge-container")},l,a)};c.propTypes=s;var d=c;t.Z=d},17422:function(e,t,n){n.r(t),t.default={badge:"Badges-module__badge___vex-+","badge-container":"Badges-module__badge-container___B13Mv","badge-name":"Badges-module__badge-name___jkN0m","badge-version":"Badges-module__badge-version___agZ+P"}},24197:function(e,t,n){n.r(t),t.default={"clinical-lowlight-theme":"_Dropdown-module__clinical-lowlight-theme___ae4kC","orion-fusion-theme":"_Dropdown-module__orion-fusion-theme___YKlEn",dropdown:"_Dropdown-module__dropdown___WVhNn","is-above":"_Dropdown-module__is-above___tThDx","is-touch-accessible":"_Dropdown-module__is-touch-accessible___5hJQm"}},59478:function(e,t,n){n.r(t),t.default={"clinical-lowlight-theme":"_Frame-module__clinical-lowlight-theme___XDugl","orion-fusion-theme":"_Frame-module__orion-fusion-theme___UIUSA",select:"_Frame-module__select___awpyI",default:"_Frame-module__default___NFAkp",display:"_Frame-module__display___KUUsW","is-focused":"_Frame-module__is-focused___96IuB","is-open":"_Frame-module__is-open___oUqcK","is-above":"_Frame-module__is-above___PmOzN","is-incomplete":"_Frame-module__is-incomplete___T77OD","is-disabled":"_Frame-module__is-disabled___3m5sf","is-invalid":"_Frame-module__is-invalid___u9LRn","arrow-icon":"_Frame-module__arrow-icon___TvaP-","search-input":"_Frame-module__search-input___iJz-I",placeholder:"_Frame-module__placeholder___6frMX",toggle:"_Frame-module__toggle___wUsow","toggle-narrow":"_Frame-module__toggle-narrow___BKi4x","toggle-btn":"_Frame-module__toggle-btn___0Y3s+",content:"_Frame-module__content___Z0o84","display-content":"_Frame-module__display-content___9c2ye","is-hidden":"_Frame-module__is-hidden___y8oWx","search-wrapper":"_Frame-module__search-wrapper___6U2Ka",tag:"_Frame-module__tag___Topf8",search:"_Frame-module__search___2IY42",combobox:"_Frame-module__combobox___BIdmg",multiple:"_Frame-module__multiple___VBnib","visually-hidden-component":"_Frame-module__visually-hidden-component___iXjUk",single:"_Frame-module__single___sB7qg"}},3449:function(e,t,n){n.r(t),t.default={"clinical-lowlight-theme":"_Menu-module__clinical-lowlight-theme___O31FO","orion-fusion-theme":"_Menu-module__orion-fusion-theme___MHRM6",menu:"_Menu-module__menu___+Pw-Z"}},86874:function(e,t,n){n.r(t),t.default={"clinical-lowlight-theme":"_OptGroup-module__clinical-lowlight-theme___FDA05","orion-fusion-theme":"_OptGroup-module__orion-fusion-theme___s0zTY","opt-group":"_OptGroup-module__opt-group___he2fg",label:"_OptGroup-module__label___1bUfY",options:"_OptGroup-module__options___zGW4-","is-disabled":"_OptGroup-module__is-disabled___0HwTk"}},18510:function(e,t,n){n.r(t),t.default={"clinical-lowlight-theme":"_Option-module__clinical-lowlight-theme___Iyko+","orion-fusion-theme":"_Option-module__orion-fusion-theme___1uvb+",option:"_Option-module__option___CcnOW","is-default":"_Option-module__is-default___T3knK","is-disabled":"_Option-module__is-disabled___gz96S","is-selected":"_Option-module__is-selected___uhiMe","is-active":"_Option-module__is-active___GWZR8",display:"_Option-module__display___Dcqir",icon:"_Option-module__icon___K3P73","is-checkable":"_Option-module__is-checkable___CUukS","is-add-option":"_Option-module__is-add-option___2wSCS"}},10752:function(e,t){function n(){var e=this.constructor.getDerivedStateFromProps(this.props,this.state);null!=e&&this.setState(e)}function o(e){this.setState(function(t){var n=this.constructor.getDerivedStateFromProps(e,t);return null!=n?n:null}.bind(this))}function r(e,t){try{var n=this.props,o=this.state;this.props=e,this.state=t,this.__reactInternalSnapshotFlag=!0,this.__reactInternalSnapshot=this.getSnapshotBeforeUpdate(n,o)}finally{this.props=n,this.state=o}}Object.defineProperty(t,"__esModule",{value:!0}),n.__suppressDeprecationWarning=!0,o.__suppressDeprecationWarning=!0,r.__suppressDeprecationWarning=!0,t.polyfill=function(e){var t=e.prototype;if(!t||!t.isReactComponent)throw new Error("Can only polyfill class components");if("function"!=typeof e.getDerivedStateFromProps&&"function"!=typeof t.getSnapshotBeforeUpdate)return e;var i=null,l=null,a=null;if("function"==typeof t.componentWillMount?i="componentWillMount":"function"==typeof t.UNSAFE_componentWillMount&&(i="UNSAFE_componentWillMount"),"function"==typeof t.componentWillReceiveProps?l="componentWillReceiveProps":"function"==typeof t.UNSAFE_componentWillReceiveProps&&(l="UNSAFE_componentWillReceiveProps"),"function"==typeof t.componentWillUpdate?a="componentWillUpdate":"function"==typeof t.UNSAFE_componentWillUpdate&&(a="UNSAFE_componentWillUpdate"),null!==i||null!==l||null!==a){var u=e.displayName||e.name,s="function"==typeof e.getDerivedStateFromProps?"getDerivedStateFromProps()":"getSnapshotBeforeUpdate()";throw Error("Unsafe legacy lifecycles will not be called for components using new component APIs.\n\n"+u+" uses "+s+" but also contains the following legacy lifecycles:"+(null!==i?"\n  "+i:"")+(null!==l?"\n  "+l:"")+(null!==a?"\n  "+a:"")+"\n\nThe above lifecycles should be removed. Learn more about this warning here:\nhttps://fb.me/react-async-component-lifecycle-hooks")}if("function"==typeof e.getDerivedStateFromProps&&(t.componentWillMount=n,t.componentWillReceiveProps=o),"function"==typeof t.getSnapshotBeforeUpdate){if("function"!=typeof t.componentDidUpdate)throw new Error("Cannot polyfill getSnapshotBeforeUpdate() for components that do not define componentDidUpdate() on the prototype");t.componentWillUpdate=r;var c=t.componentDidUpdate;t.componentDidUpdate=function(e,t,n){var o=this.__reactInternalSnapshotFlag?this.__reactInternalSnapshot:n;c.call(this,e,t,o)}}return e}},15277:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=d(n(67294)),r=d(n(45697)),i=d(n(3948)),l=d(n(94184)),a=d(n(47166)),u=d(n(50026)),s=d(n(24197)),c=["children","isAbove","isEnabled","isTouchAccessible","onResize","refCallback","target"];function d(e){return e&&e.__esModule?e:{default:e}}function f(){return f=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},f.apply(this,arguments)}function p(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var _=a.default.bind(s.default),m={children:r.default.node.isRequired,isAbove:r.default.bool,isEnabled:r.default.bool,isTouchAccessible:r.default.bool,onResize:r.default.func.isRequired,refCallback:r.default.func.isRequired,target:r.default.object.isRequired},v={vertical:"bottom",horizontal:"start"},y={vertical:"top",horizontal:"start"},b=function(e){var t=e.children,n=e.isAbove,r=e.isEnabled,a=e.isTouchAccessible,s=e.onResize,d=e.refCallback,m=e.target,b=p(e,c),h=o.default.useContext(u.default),g=o.default.useCallback((function(e){e.preventDefault()}),[]),O=(0,l.default)(_(["dropdown",{"is-above":n},{"is-touch-accessible":a},h.className]),b.className);return a?o.default.createElement("div",f({},b,{className:O,onMouseDown:g,ref:d}),t):o.default.createElement(i.default,{isOpen:!0,isEnabled:r,targetRef:function(){return m},attachmentBehavior:"none",contentAttachment:n?v:y,targetAttachment:n?y:v},o.default.createElement(i.default.Content,f({},b,{disableOnClickOutside:!0,className:O,onResize:s,onMouseDown:g,refCallback:d}),t))};b.propTypes=m,b.defaultProps={isAbove:!1,isTouchAccessible:!1};t.default=b},38011:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o,r=(o=n(44845))&&o.__esModule?o:{default:o};function i(e){return i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},i(e)}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){u(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t,n){return(t=c(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,c(o.key),o)}}function c(e){var t=function(e,t){if("object"!==i(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var o=n.call(e,t||"default");if("object"!==i(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===i(t)?t:String(t)}var d=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}var t,n,o;return t=e,o=[{key:"dropdownStyle",value:function(){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},t=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}).style,n=e.maxHeight,o=e.width,r=e.bottom,i=e.top;return a(a({},t),{},{maxHeight:n,width:o,bottom:r,top:i})}},{key:"dropdownPosition",value:function(e,t,n,o){var r=arguments.length>4&&void 0!==arguments[4]&&arguments[4],i=a({},e).style||{},l=n.getBoundingClientRect().height,u=t.getBoundingClientRect(),s=u.bottom,c=u.width,d=u.top,f=t.getBoundingClientRect().height,p=window.innerHeight-s,_=parseInt(i.maxHeight||o,10)||1/0,m=_<p||l<p||p>d,v=m?p:d,y=!m;return{width:c,maxHeight:Math.min(_,v-10),isAbove:y,isPositioned:!0,bottom:r&&y?f:void 0,top:r&&!y?"100%":void 0}}},{key:"allowsMultiSelections",value:function(e){return e.variant===r.default.MULTIPLE||e.variant===r.default.TAG}},{key:"includes",value:function(e,t){return 0!==t.trim().length&&(e.value||[]).indexOf(t)>-1}},{key:"shouldHideSearch",value:function(t,n){return!!e.allowsMultiSelections(t)&&!n.isFocused&&t.value&&t.value.length>0}},{key:"shouldPositionDropdown",value:function(e,t,n){if(!t.isOpen)return!1;var o=n.getBoundingClientRect().bottom;return!1===e.isOpen||o>window.innerHeight}},{key:"shouldAddOptionOnBlur",value:function(t,n){var o=t.onSelect,i=t.value,l=t.variant,a=n.hasSearchChanged,u=n.searchValue;return!(l!==r.default.TAG&&l!==r.default.COMBOBOX||!(l!==r.default.TAG||u.trim().length>0)||!a||!o||l===r.default.TAG&&e.includes(t,u)||l===r.default.COMBOBOX&&i===u)}},{key:"tabIndex",value:function(e){return e.variant!==r.default.DEFAULT||e.disabled?"-1":"0"}},{key:"shiftFocusToMenu",value:function(e){setTimeout((function(){e.selectMenu&&e.selectMenu.focus()}),100)}}],(n=null)&&s(t.prototype,n),o&&s(t,o),Object.defineProperty(t,"prototype",{writable:!1}),e}();t.default=d},16451:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=i(n(67294)),r=i(n(44845));function i(e){return e&&e.__esModule?e:{default:e}}function l(e){return l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},l(e)}function a(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,(r=o.key,i=void 0,i=function(e,t){if("object"!==l(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var o=n.call(e,t||"default");if("object"!==l(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(r,"string"),"symbol"===l(i)?i:String(i)),o)}var r,i}var u=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}var t,n,i;return t=e,i=[{key:"contains",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return!!e&&e.toString().toLowerCase().indexOf(t.trim().toLowerCase())>-1}},{key:"isEqual",value:function(e,t){return null!=e&&null!=t&&e.toString().toLowerCase()===t.toString().toLowerCase()}},{key:"allowsMultiSelections",value:function(e){return e===r.default.MULTIPLE||e===r.default.TAG}},{key:"isSelected",value:function(t,n){return Array.isArray(t)?e.includes(t,n):e.isEqual(t,n)}},{key:"includes",value:function(t,n){return!(!t||!t.length)&&void 0!==t.find((function(t){return e.isEqual(t,n)}))}},{key:"flatten",value:function(t,n){return o.default.Children.toArray(t).reduce((function(t,o){if(o.type.isOption&&(!n||n&&!o.props.disabled))t.push(o);else if(o.type.isOptGroup)return t.concat(e.flatten(o.props.children,n));return t}),[])}},{key:"filter",value:function(t,n,r){return o.default.Children.toArray(t).reduce((function(t,i){if(i.type.isOption&&e.filterOption(i,n,r))t.push(i);else if(i.type.isOptGroup){var l=e.filter(i.props.children,n,r);l.length>0&&t.push(o.default.cloneElement(i,{},l))}return t}),[])}},{key:"filterOption",value:function(t,n,o){return o?o(n,t):e.contains(t.props.display,n)}},{key:"findByValue",value:function(t,n){return e.flatten(t).find((function(t){var o=t.props;return e.isEqual(o.value,n)}))}},{key:"getOptGroupElement",value:function(e,t){return o.default.Children.toArray(e).find((function(e){return e.type.isOptGroup&&o.default.Children.toArray(e.props.children).find((function(e){return e.props.value===t}))}))}},{key:"findByDisplay",value:function(t,n){return e.flatten(t).find((function(t){var o=t.props;return e.isEqual(o.display,n)}))}},{key:"findFirst",value:function(t){var n=e.flatten(t,!0);return n.length>0?n[0].props.value:null}},{key:"findLast",value:function(t){var n=e.flatten(t,!0);return n.length>0?n[n.length-1].props.value:null}},{key:"findWithStartString",value:function(t,n){var o=e.flatten(t,!0).find((function(e){return(e.props.display||"").toLowerCase().startsWith(n.toLowerCase())}));return o?o.props.value:null}},{key:"findNext",value:function(t,n){var o=e.flatten(t,!0),r=o.findIndex((function(t){var o=t.props;return e.isEqual(o.value,n)}));return o.length-1===r?o[0].props.value:-1===r?null:o[r+1].props.value}},{key:"getIndex",value:function(t,n){return e.flatten(t,!0).findIndex((function(t){var o=t.props;return e.isEqual(o.value,n)}))+1}},{key:"findPrevious",value:function(t,n){var o=e.flatten(t,!0),r=o.findIndex((function(t){var o=t.props;return e.isEqual(o.value,n)}));return 0===r&&(r=o.length),-1===r?null:o[r-1].props.value}},{key:"getActiveOptionFromProps",value:function(t,n,o){var r=o.active,i=(t.searchValue,t.value),l=e.flatten(n,!0);if(0===l.length)return null;if(null!==r&&e.findByValue(l,r))return r;if(void 0===o.searchValue){var a=l.find((function(t){return Array.isArray(i)?e.includes(i,t.props.value):e.isEqual(i,t.props.value)}));return void 0===a?l[0].props.value:a.props.value}return o.searchValue,l[0].props.value}},{key:"shouldAllowFreeText",value:function(t,n){var o=t.searchValue,i=t.value,l=t.variant;if(l===r.default.TAG||l===r.default.COMBOBOX){var a=e.findByDisplay(n,o),u=Array.isArray(i)?e.includes(i,o):e.isEqual(i,o);return!a&&!u&&(o||"").trim().length>0}return!1}},{key:"shouldShowNoResults",value:function(e,t){var n=e.variant;return n!==r.default.TAG&&n!==r.default.COMBOBOX&&0===t.length}},{key:"isMaxSelectionReached",value:function(t){var n=t.maxSelectionCount,o=t.value,r=t.variant;return!!(void 0!==n&&e.allowsMultiSelections(r)&&Array.isArray(o)&&o.length>=n)}},{key:"updateSelectionState",value:function(t,n){var r=e.isMaxSelectionReached(n);return o.default.Children.map(t,(function(t){return t.type.isOption?o.default.cloneElement(t,{disabled:t.props.disabled||r&&!e.isSelected(n.value,t.props.value)}):t.type.isOptGroup?o.default.cloneElement(t,{},e.updateSelectionState(t.props.children,n)):t}))}},{key:"shouldShowClearOption",value:function(e){var t=e.clearOptionDisplay,n=e.searchValue,o=e.hasAddOption,r=e.hasNoResults;return!(!t||r||o||void 0!==n&&0!==n.length)}}],(n=null)&&a(t.prototype,n),i&&a(t,i),Object.defineProperty(t,"prototype",{writable:!1}),e}();t.default=u},87786:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=s(n(67294)),r=s(n(45697)),i=n(25387),l=s(n(47166)),a=s(n(50026)),u=s(n(86874));function s(e){return e&&e.__esModule?e:{default:e}}var c=l.default.bind(u.default),d={children:r.default.node,disabled:r.default.bool,intl:r.default.shape({formatMessage:r.default.func}).isRequired,label:r.default.node.isRequired},f=function(e){var t=e.children,n=e.disabled,r=e.intl,i=e.label,l=o.default.useContext(a.default);return o.default.createElement("li",{className:c("opt-group",{"is-disabled":n},l.className),role:"option","aria-selected":"false"},o.default.createElement("div",{className:c("label")},i),o.default.createElement("ul",{className:c("options"),role:"listbox","aria-label":r.formatMessage({id:"Terra.form.select.option"})},o.default.Children.map(t,(function(e){return o.default.cloneElement(e,{disabled:n||!!e.props.disabled})}))))};f.propTypes=d,f.defaultProps={disabled:!1},f.isOptGroup=!0;t.default=(0,i.injectIntl)(f)},88413:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=d(n(67294)),r=d(n(45697)),i=d(n(94184)),l=d(n(47166)),a=d(n(50026)),u=d(n(68958)),s=d(n(18510)),c=["disabled","display","value","variant","isActive","isSelected","isCheckable","isAddOption","index","totalOptions","ofText","expandedStateText"];function d(e){return e&&e.__esModule?e:{default:e}}function f(){return f=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},f.apply(this,arguments)}function p(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var _=l.default.bind(s.default),m={disabled:r.default.bool,display:r.default.string,isActive:r.default.bool,isAddOption:r.default.bool,isCheckable:r.default.bool,isSelected:r.default.bool,value:r.default.oneOfType([r.default.string,r.default.number]).isRequired,variant:r.default.string,index:r.default.number,totalOptions:r.default.number,ofText:r.default.string,expandedStateText:r.default.string},v={disabled:!1,display:void 0},y=function(e){var t=e.disabled,n=e.display,r=(e.value,e.variant),l=e.isActive,s=e.isSelected,d=e.isCheckable,m=e.isAddOption,v=e.index,y=(e.totalOptions,e.ofText,e.expandedStateText),b=p(e,c),h=o.default.useContext(a.default),g=(0,i.default)(_("option",{"is-active":l},{"is-checkable":d&&!m},{"is-default":!d&&!m},{"is-disabled":t},{"is-selected":s},{"is-add-option":m},h.className),b.className),O="option";u.default.isSafari()&&!("ontouchstart"in window)&&(O="radio","tag"!==r&&"multiple"!==r||(O="checkbox"));var w=s||1===v?"".concat(y," ").concat(n):n;return o.default.createElement("li",f({role:O},b,{disabled:t,className:g,"aria-selected":s,"aria-disabled":t,tabIndex:"0","data-terra-select-option":!0,"aria-label":w}),(d||m)&&o.default.createElement("span",{className:_("icon")}),o.default.createElement("span",{"data-terra-add-option":!0,className:_("display")},n))};y.propTypes=m,y.defaultProps=v,y.isOption=!0;t.default=y},33833:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=a(n(67294)),r=a(n(44845)),i=a(n(16451)),l=a(n(4752));function a(e){return e&&e.__esModule?e:{default:e}}function u(e){return u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},u(e)}function s(e){return function(e){if(Array.isArray(e))return c(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return c(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return c(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function c(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=e[n];return o}function d(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,(r=o.key,i=void 0,i=function(e,t){if("object"!==u(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var o=n.call(e,t||"default");if("object"!==u(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(r,"string"),"symbol"===u(i)?i:String(i)),o)}var r,i}var f=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}var t,n,a;return t=e,a=[{key:"defaultValue",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.defaultValue,n=e.value,o=e.multiple;return void 0!==n?null:o?t?(0,l.default)([t]):[]:null!=t?t:""}},{key:"deselect",value:function(t,n,o){return e.value(t,n).filter((function(e){return e!==o}))}},{key:"findByValue",value:function(e,t,n){return i.default.findByValue(e.children,n)||i.default.findByValue(t.tags,n)}},{key:"allowsMultiSelections",value:function(e){return e.variant===r.default.MULTIPLE||e.variant===r.default.TAG}},{key:"select",value:function(t,n,o){return e.allowsMultiSelections(t)?[].concat(s(e.value(t,n)),[o]):o}},{key:"value",value:function(e,t){return void 0===e.value?t.value:e.value}},{key:"valueDisplay",value:function(e,t){var n=i.default.findByValue(e.children,t);return n?n.props.display:t}},{key:"getTotalNumberOfOptions",value:function(e){var t=0;return o.default.Children.forEach(e,(function(e){e.type.isOption&&(t+=1),e.type.isOptGroup&&o.default.Children.forEach(e.props.children,(function(e){e.type.isOption&&(t+=1)}))})),t}}],(n=null)&&d(t.prototype,n),a&&d(t,a),Object.defineProperty(t,"prototype",{writable:!1}),e}();t.default=f},68958:function(e,t){function n(e){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(e)}function o(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,r(o.key),o)}}function r(e){var t=function(e,t){if("object"!==n(e)||null===e)return e;var o=e[Symbol.toPrimitive];if(void 0!==o){var r=o.call(e,t||"default");if("object"!==n(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===n(t)?t:String(t)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i,l,a,u=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}var t,n,r;return t=e,r=[{key:"isSafari",value:function(){return-1!==navigator.userAgent.indexOf("Safari")&&-1===navigator.userAgent.indexOf("Chrome")}}],(n=null)&&o(t.prototype,n),r&&o(t,r),Object.defineProperty(t,"prototype",{writable:!1}),e}();i=u,a=function(){return-1!==navigator.userAgent.indexOf("Mac")&&-1===navigator.userAgent.indexOf("Win")},(l=r(l="isMac"))in i?Object.defineProperty(i,l,{value:a,enumerable:!0,configurable:!0,writable:!0}):i[l]=a;t.default=u},71637:function(){Node.prototype.contains||(Node.prototype.contains=function(e){if(!(0 in arguments))throw new TypeError("1 argument is required");do{if(this===e)return!0}while(e=e&&e.parentNode);return!1})},22500:function(){Element.prototype.matches||(Element.prototype.matches=Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector)},44845:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;t.default={COMBOBOX:"combobox",DEFAULT:"default",MULTIPLE:"multiple",TAG:"tag",SEARCH:"search"}},4752:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];if(!Array.isArray(t))return t;return t.reduce((function(t,n){return Array.isArray(n)?t.concat(e(n)):t.concat(n)}),[])}}}]);