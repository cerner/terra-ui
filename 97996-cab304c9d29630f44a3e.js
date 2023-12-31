"use strict";(self.webpackChunkterra_ui=self.webpackChunkterra_ui||[]).push([[97996],{97996:function(e,t,n){function o(e){return o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=p(n(67294)),i=p(n(45697)),a=n(25387),l=p(n(55070)),s=p(n(88413)),u=p(n(87786)),c=p(n(33833)),d=["allowClear","children","defaultValue","onChange","placeholder","required","value","intl","inputId"];function p(e){return e&&e.__esModule?e:{default:e}}function f(){return f=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},f.apply(this,arguments)}function h(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}function v(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(i=r.key,a=void 0,a=function(e,t){if("object"!==o(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!==o(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(i,"string"),"symbol"===o(a)?a:String(a)),r)}var i,a}function b(e,t){return b=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},b(e,t)}function y(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=g(e);if(t){var i=g(this).constructor;n=Reflect.construct(r,arguments,i)}else n=r.apply(this,arguments);return function(e,t){if(t&&("object"===o(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return m(e)}(this,n)}}function m(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function g(e){return g=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},g(e)}var w={allowClear:i.default.bool,children:i.default.node,defaultValue:i.default.oneOfType([i.default.string,i.default.number,i.default.array]),disabled:i.default.bool,dropdownAttrs:i.default.object,intl:i.default.shape({formatMessage:i.default.func}).isRequired,isIncomplete:i.default.bool,isInvalid:i.default.bool,isTouchAccessible:i.default.bool,maxHeight:i.default.number,noResultContent:i.default.node,onBlur:i.default.func,onChange:i.default.func,onClick:i.default.func,onDeselect:i.default.func,onFocus:i.default.func,onSearch:i.default.func,onSelect:i.default.func,optionFilter:i.default.func,placeholder:i.default.string,required:i.default.bool,value:i.default.oneOfType([i.default.string,i.default.number,i.default.array]),inputId:i.default.string},O={allowClear:!1,children:void 0,defaultValue:void 0,disabled:!1,dropdownAttrs:void 0,isIncomplete:!1,isInvalid:!1,noResultContent:void 0,onChange:void 0,onDeselect:void 0,onSearch:void 0,onSelect:void 0,optionFilter:void 0,placeholder:void 0,required:!1,isTouchAccessible:!1,value:void 0,inputId:void 0},S=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&b(e,t)}(a,e);var t,n,o,i=y(a);function a(e){var t;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),t=i.call(this,e);var n=e.defaultValue,o=e.value;return t.state={value:c.default.defaultValue({defaultValue:n,value:o})},t.display=t.display.bind(m(t)),t.handleChange=t.handleChange.bind(m(t)),t.handleDeselect=t.handleDeselect.bind(m(t)),t.handleSelect=t.handleSelect.bind(m(t)),t.handleResetComboboxValue=t.handleResetComboboxValue.bind(m(t)),t}return t=a,(n=[{key:"handleChange",value:function(e){void 0===this.props.value&&this.setState({value:e}),this.props.onChange&&this.props.onChange(e)}},{key:"handleDeselect",value:function(e){this.handleChange(c.default.deselect(this.props,this.state,e)),this.props.onDeselect&&this.props.onDeselect(e)}},{key:"handleSelect",value:function(e,t){this.handleChange(c.default.select(this.props,this.state,e)),this.props.onSelect&&this.props.onSelect(e,t)}},{key:"handleResetComboboxValue",value:function(){this.setState({value:""})}},{key:"display",value:function(){var e=c.default.value(this.props,this.state);return c.default.valueDisplay(this.props,e)}},{key:"render",value:function(){var e,t=this.props,n=t.allowClear,o=t.children,i=(t.defaultValue,t.onChange,t.placeholder),a=t.required,s=(t.value,t.intl),u=t.inputId,p=h(t,d),v=s.formatMessage({id:"Terra.form.select.defaultDisplay"}),b=void 0===i?v:i;return n&&(e=0===b.length?v:b),r.default.createElement(l.default,f({},p,{"data-terra-select":!0,value:c.default.value(this.props,this.state),display:this.display(),onDeselect:this.handleDeselect,onSelect:this.handleSelect,placeholder:b,required:a,totalOptions:c.default.getTotalNumberOfOptions(o),clearOptionDisplay:e,inputId:u,resetComboboxValue:this.handleResetComboboxValue,allowClear:n}),o)}}])&&v(t.prototype,n),o&&v(t,o),Object.defineProperty(t,"prototype",{writable:!1}),a}(r.default.Component);S.Option=s.default,S.OptGroup=u.default,S.propTypes=w,S.defaultProps=O,S.isSelect=!0;t.default=(0,a.injectIntl)(S)},55070:function(e,t,n){function o(e){return o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=m(n(67294)),i=m(n(45697)),a=m(n(93967)),l=m(n(19845)),s=m(n(50026)),u=n(25387),c=m(n(14461)),d=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=o(e)&&"function"!=typeof e)return{default:e};var n=y(t);if(n&&n.has(e))return n.get(e);var r={__proto__:null},i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if("default"!==a&&Object.prototype.hasOwnProperty.call(e,a)){var l=i?Object.getOwnPropertyDescriptor(e,a):null;l&&(l.get||l.set)?Object.defineProperty(r,a,l):r[a]=e[a]}return r.default=e,n&&n.set(e,r),r}(n(51051)),p=m(n(15277)),f=m(n(39854)),h=m(n(38011)),v=m(n(59478));n(98394),n(71637),n(22500);var b=["ariaLabel","clearOptionDisplay","children","disabled","display","dropdownAttrs","intl","inputId","isIncomplete","isTouchAccessible","isInvalid","maxHeight","noResultContent","onDeselect","onSearch","onSelect","optionFilter","placeholder","required","totalOptions","value","allowClear","resetComboboxValue"];function y(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(y=function(e){return e?n:t})(e)}function m(e){return e&&e.__esModule?e:{default:e}}function g(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}function w(){return w=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},w.apply(this,arguments)}function O(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(i=r.key,a=void 0,a=function(e,t){if("object"!==o(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!==o(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(i,"string"),"symbol"===o(a)?a:String(a)),r)}var i,a}function S(e,t){return S=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},S(e,t)}function D(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=C(e);if(t){var i=C(this).constructor;n=Reflect.construct(r,arguments,i)}else n=r.apply(this,arguments);return function(e,t){if(t&&("object"===o(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return T(e)}(this,n)}}function T(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function C(e){return C=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},C(e)}var P=l.default.bind(v.default),E={ariaLabel:i.default.string,children:i.default.node,clearOptionDisplay:i.default.string,disabled:i.default.bool,display:i.default.node,dropdownAttrs:i.default.object,inputId:i.default.string,intl:i.default.shape({formatMessage:i.default.func}).isRequired,isIncomplete:i.default.bool,isInvalid:i.default.bool,isTouchAccessible:i.default.bool,maxHeight:i.default.number,noResultContent:i.default.node,onDeselect:i.default.func,onBlur:i.default.func,onFocus:i.default.func,onSearch:i.default.func,onSelect:i.default.func,optionFilter:i.default.func,placeholder:i.default.string,required:i.default.bool,totalOptions:i.default.number,value:i.default.oneOfType([i.default.string,i.default.number,i.default.array]),resetComboboxValue:i.default.func,allowClear:i.default.bool},j={clearOptionDisplay:void 0,disabled:!1,dropdownAttrs:void 0,isIncomplete:!1,isInvalid:!1,isTouchAccessible:!1,noResultContent:void 0,onDeselect:void 0,onSearch:void 0,onSelect:void 0,optionFilter:void 0,placeholder:void 0,required:!1,totalOptions:void 0,value:void 0,inputId:void 0,allowClear:!1},k=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&S(e,t)}(s,e);var t,o,i,l=D(s);function s(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,s),(t=l.call(this,e)).state={focusedByTouch:!1,isOpen:!1,isFocused:!1,isInputFocused:!1,isPositioned:!1,hasSearchChanged:!1,searchValue:""},t.ariaLabel=t.ariaLabel.bind(T(t)),t.setInput=t.setInput.bind(T(t)),t.getDisplay=t.getDisplay.bind(T(t)),t.renderToggleButton=t.renderToggleButton.bind(T(t)),t.renderDescriptionText=t.renderDescriptionText.bind(T(t)),t.openDropdown=t.openDropdown.bind(T(t)),t.closeDropdown=t.closeDropdown.bind(T(t)),t.toggleDropdown=t.toggleDropdown.bind(T(t)),t.positionDropdown=t.positionDropdown.bind(T(t)),t.handleBlur=t.handleBlur.bind(T(t)),t.handleFocus=t.handleFocus.bind(T(t)),t.handleSelect=t.handleSelect.bind(T(t)),t.handleSearch=t.handleSearch.bind(T(t)),t.handleKeyDown=t.handleKeyDown.bind(T(t)),t.handleMouseDown=t.handleMouseDown.bind(T(t)),t.handleInputMouseDown=t.handleInputMouseDown.bind(T(t)),t.handleInputFocus=t.handleInputFocus.bind(T(t)),t.handleInputBlur=t.handleInputBlur.bind(T(t)),t.handleToggleMouseDown=t.handleToggleMouseDown.bind(T(t)),t.handleToggleButtonMouseDown=t.handleToggleButtonMouseDown.bind(T(t)),t.handleTouchStart=t.handleTouchStart.bind(T(t)),t.menuId="terra-select-menu-".concat((0,c.default)()),t.visuallyHiddenComponent=r.default.createRef(),t.setSelectMenuRef=t.setSelectMenuRef.bind(T(t)),t.shouldFocusDropdown=!1,t.hasEscPressed=!1,t}return t=s,(o=[{key:"componentDidMount",value:function(){Element.prototype.hasOwnProperty("inert")||n(23458)}},{key:"componentDidUpdate",value:function(e,t){h.default.shouldPositionDropdown(t,this.state,this.dropdown)&&(clearTimeout(this.debounceTimer),this.dropdown.setAttribute("inert",""),this.debounceTimer=setTimeout(this.positionDropdown,t.isOpen?100:0))}},{key:"componentWillUnmount",value:function(){clearTimeout(this.debounceTimer)}},{key:"handleBlur",value:function(e){var t=e.relatedTarget||document.activeElement;this.dropdown&&this.dropdown===document.activeElement&&this.dropdown.contains(document.activeElement)||t!==this.input&&t!==this.selectMenu&&(this.setState({isFocused:!1,focusedByTouch:!1}),this.closeDropdown(),this.props.onBlur&&this.props.onBlur(e))}},{key:"handleFocus",value:function(e){this.props.disabled||(this.props.onFocus&&!this.state.isFocused&&this.props.onFocus(e),this.setState({isFocused:!0}))}},{key:"handleKeyDown",value:function(e){var t=this.props.intl,n=e.keyCode,o=e.target;n===d.KEY_SPACE&&o!==this.input||n===d.KEY_UP||n===d.KEY_DOWN?(e.preventDefault(),this.openDropdown(e)):this.state.isOpen&&n===d.KEY_ESCAPE?(this.hasEscPressed=!0,e.stopPropagation(),this.closeDropdown()):!this.state.isOpen&&n===d.KEY_ESCAPE&&this.hasEscPressed?(this.hasEscPressed=!1,this.props.resetComboboxValue&&this.props.resetComboboxValue(),this.setState({hasSearchChanged:!1,searchValue:""}),e.stopPropagation()):n===d.KEY_ESCAPE&&this.props.allowClear&&(this.hasEscPressed=!1,this.props.resetComboboxValue&&this.props.resetComboboxValue(),this.setState({hasSearchChanged:!1,searchValue:""}),this.visuallyHiddenComponent.current.innerText=t.formatMessage({id:"Terra.form.select.selectCleared"}),e.stopPropagation())}},{key:"handleMouseDown",value:function(e){e.preventDefault(),this.openDropdown(e)}},{key:"handleInputMouseDown",value:function(e){e.stopPropagation(),this.openDropdown(e)}},{key:"handleInputFocus",value:function(){this.setState({isInputFocused:!0})}},{key:"handleInputBlur",value:function(){this.setState({isInputFocused:!1})}},{key:"handleToggleMouseDown",value:function(){this.state.isOpen&&this.closeDropdown()}},{key:"handleToggleButtonMouseDown",value:function(){this.state.isOpen&&(this.closeDropdown(),this.input&&this.input.focus())}},{key:"handleTouchStart",value:function(){this.setState({focusedByTouch:!0})}},{key:"handleSearch",value:function(e){var t=e.target.value;this.setState({isOpen:!0,hasSearchChanged:!0,searchValue:t}),this.props.onSearch&&this.props.onSearch(t)}},{key:"handleSelect",value:function(e,t){this.setState({searchValue:"",hasSearchChanged:!1,isOpen:!1,isAbove:!1}),this.props.onSelect&&this.props.onSelect(e,t)}},{key:"setInput",value:function(e){this.input=e}},{key:"setSelectMenuRef",value:function(e){this.selectMenu=e}},{key:"getDisplay",value:function(e,t){var n=this.state,o=n.hasSearchChanged,i=n.searchValue,a=this.props,l=a.disabled,s=a.display,u=a.placeholder,c=a.required,d=a.inputId,p=a.isInvalid,f={disabled:l,placeholder:u,ref:this.setInput,onChange:this.handleSearch,onFocus:this.handleInputFocus,onBlur:this.handleInputBlur,onMouseDown:this.handleInputMouseDown,"aria-label":this.ariaLabel(),"aria-describedby":e,"aria-disabled":l,"aria-owns":this.state.isOpen?t:void 0,"aria-controls":this.state.isOpen?t:void 0,"aria-expanded":!l&&this.state.isOpen,type:"text",className:P("search-input",{"is-hidden":h.default.shouldHideSearch(this.props,this.state)}),required:c,"aria-required":c,id:d,role:"combobox","aria-invalid":p},v=o?i:s;return r.default.createElement("div",{className:P("content")},r.default.createElement("input",w({},f,{value:v})))}},{key:"closeDropdown",value:function(){this.setState({isAbove:!1,isFocused:document.activeElement===this.input||document.activeElement===this.select,isOpen:!1,isPositioned:!1})}},{key:"openDropdown",value:function(e){if(this.shouldFocusDropdown=!1,!this.state.isOpen&&!this.props.disabled){if(e&&e.target&&(e.target.hasAttribute("data-terra-form-select-toggle-button")||e.target.hasAttribute("data-terra-form-select-toggle-button-icon")))return this.setState({isOpen:!0,isPositioned:!1}),void(this.shouldFocusDropdown=!0);(e.target.hasAttribute("data-terra-form-select-toggle")||e.target.className.includes("arrow-icon"))&&this.input.focus(),this.input?this.input.focus():h.default.shiftFocusToMenu(this),this.setState({isOpen:!0,isPositioned:!1})}}},{key:"positionDropdown",value:function(){var e=this;if(this.state.isOpen){var t=this.props,n=t.dropdownAttrs,o=t.maxHeight,r=t.isTouchAccessible;this.setState(h.default.dropdownPosition(n,this.select,this.dropdown,o,r),(function(){e.state.isPositioned&&(e.dropdown.removeAttribute("inert"),e.dropdown.removeAttribute("aria-hidden"),e.selectMenu.setAttribute("tabIndex","0"),e.selectMenu&&e.shouldFocusDropdown&&e.selectMenu.focus())}))}}},{key:"toggleDropdown",value:function(e){this.state.isOpen?this.closeDropdown():this.openDropdown(e)}},{key:"ariaLabel",value:function(){var e=this.props,t=e.ariaLabel,n=e.disabled,o=e.intl,r=o.formatMessage({id:"Terra.form.select.ariaLabel"}),i=o.formatMessage({id:"Terra.form.select.dimmed"});return"ontouchstart"in window&&n?void 0===t?"".concat(r," ").concat(i):"".concat(t," ").concat(i):void 0===t?r:t}},{key:"renderDescriptionText",value:function(){var e=this.props.intl,t=e.formatMessage({id:"Terra.form.select.listOfTotalOptions"}),n=e.formatMessage({id:"Terra.form.select.mobileUsageGuidance"}),o=e.formatMessage({id:"Terra.form.select.searchUsageGuidance"});return"ontouchstart"in window?this.state.isInputFocused?"".concat(t):"".concat(t," ").concat(n):"".concat(t," ").concat(o)}},{key:"renderToggleButton",value:function(){var e=this.props,t=e.intl,n=e.isInvalid,o=t.formatMessage({id:"Terra.form.select.mobileButtonUsageGuidance"});if("ontouchstart"in window){if(this.state.isInputFocused){var i=P(["toggle",{"is-invalid":n}]);return r.default.createElement("div",{"data-terra-form-select-toggle":!0,className:i,onMouseDown:this.handleToggleMouseDown},r.default.createElement("span",{className:P("arrow-icon")}))}var a=P(["toggle","toggle-narrow",{"is-invalid":n}]);return r.default.createElement("div",{className:a},r.default.createElement("button",{type:"button",className:P("toggle-btn"),"aria-label":o,"data-terra-form-select-toggle-button":!0,onMouseDown:this.handleToggleButtonMouseDown},r.default.createElement("span",{className:P("arrow-icon"),"data-terra-form-select-toggle-button-icon":!0})))}var l=P(["toggle",{"is-invalid":n}]);return r.default.createElement("div",{"data-terra-form-select-toggle":!0,className:l,onMouseDown:this.toggleDropdown},r.default.createElement("span",{className:P("arrow-icon")}))}},{key:"render",value:function(){var e=this,t=this.props,n=(t.ariaLabel,t.clearOptionDisplay),o=t.children,i=t.disabled,l=(t.display,t.dropdownAttrs),s=(t.intl,t.inputId,t.isIncomplete),u=t.isTouchAccessible,d=t.isInvalid,v=(t.maxHeight,t.noResultContent),y=t.onDeselect,m=(t.onSearch,t.onSelect,t.optionFilter),O=(t.placeholder,t.required),S=(t.totalOptions,t.value),D=(t.allowClear,t.resetComboboxValue,g(t,b)),T=this.context,C=(0,a.default)(P("select","search",{"is-above":this.state.isAbove},{"is-disabled":i},{"is-focused":this.state.isFocused},{"is-invalid":d},{"is-incomplete":s&&O&&!d},{"is-open":this.state.isOpen},T.className),D.className),E="terra-select-screen-reader-description-".concat((0,c.default)()),j=D["aria-describedby"],k=j?"".concat(E," ").concat(j):E,M={id:this.menuId,value:S,onDeselect:y,optionFilter:m,noResultContent:v,visuallyHiddenComponent:this.visuallyHiddenComponent,onSelect:this.handleSelect,onRequestClose:this.closeDropdown,searchValue:this.state.searchValue,input:this.input,select:this.select,clearOptionDisplay:n,refCallback:this.setSelectMenuRef};return r.default.createElement("div",w({},D,{"data-terra-select-combobox":!0,"aria-controls":!i&&this.state.isOpen?this.menuId:void 0,"aria-disabled":!!i,"aria-haspopup":i?void 0:"true",className:C,onBlur:this.handleBlur,onFocus:this.handleFocus,onKeyDown:this.handleKeyDown,onMouseDown:this.handleMouseDown,onTouchStart:this.handleTouchStart,tabIndex:"-1",ref:function(t){e.select=t}}),r.default.createElement("div",{className:P("visually-hidden-component"),hidden:!0},r.default.createElement("span",{id:E},this.renderDescriptionText())),r.default.createElement("div",{className:P("display")},this.getDisplay(k,this.menuId)),this.renderToggleButton(),r.default.createElement("span",{"aria-atomic":"true","aria-live":"assertive","aria-relevant":"additions text",className:P("visually-hidden-component"),ref:this.visuallyHiddenComponent}),this.state.isOpen&&r.default.createElement(p.default,w({},l,{id:this.state.isOpen?"terra-select-dropdown":void 0,target:this.select,isAbove:this.state.isAbove,isTouchAccessible:u,isEnabled:this.state.isPositioned,onResize:this.positionDropdown,refCallback:function(t){e.dropdown=t},style:h.default.dropdownStyle(l,this.state)}),r.default.createElement(f.default,M,o)))}}])&&O(t.prototype,o),i&&O(t,i),Object.defineProperty(t,"prototype",{writable:!1}),s}(r.default.Component);k.propTypes=E,k.defaultProps=j,k.contextType=s.default;t.default=(0,u.injectIntl)(k)},39854:function(e,t,n){function o(e){return o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=b(n(67294)),i=b(n(45697)),a=b(n(19845)),l=b(n(50026)),s=n(10752),u=n(25387),c=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=o(e)&&"function"!=typeof e)return{default:e};var n=v(t);if(n&&n.has(e))return n.get(e);var r={__proto__:null},i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if("default"!==a&&Object.prototype.hasOwnProperty.call(e,a)){var l=i?Object.getOwnPropertyDescriptor(e,a):null;l&&(l.get||l.set)?Object.defineProperty(r,a,l):r[a]=e[a]}return r.default=e,n&&n.set(e,r),r}(n(51051)),d=b(n(61698)),p=b(n(49978)),f=b(n(16451)),h=b(n(3449));function v(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(v=function(e){return e?n:t})(e)}function b(e){return e&&e.__esModule?e:{default:e}}function y(){return y=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},y.apply(this,arguments)}function m(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function g(e,t,n){return(t=O(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function w(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,O(o.key),o)}}function O(e){var t=function(e,t){if("object"!==o(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!==o(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===o(t)?t:String(t)}function S(e,t){return S=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},S(e,t)}function D(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=C(e);if(t){var i=C(this).constructor;n=Reflect.construct(r,arguments,i)}else n=r.apply(this,arguments);return function(e,t){if(t&&("object"===o(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return T(e)}(this,n)}}function T(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function C(e){return C=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},C(e)}var P=a.default.bind(h.default),E={id:i.default.string,children:i.default.node,select:i.default.instanceOf(Element),intl:i.default.shape({formatMessage:i.default.func}).isRequired,input:i.default.instanceOf(Element),clearOptionDisplay:i.default.string,noResultContent:i.default.node,onDeselect:i.default.func,onSelect:i.default.func.isRequired,optionFilter:i.default.func,searchValue:i.default.string,value:i.default.oneOfType([i.default.string,i.default.number,i.default.array]),visuallyHiddenComponent:i.default.shape({current:i.default.instanceOf(Element)}),refCallback:i.default.func},j={id:void 0,children:void 0,input:void 0,clearOptionDisplay:void 0,noResultContent:void 0,onDeselect:void 0,optionFilter:void 0,searchValue:void 0,select:void 0,visuallyHiddenComponent:void 0,value:void 0,refCallback:void 0},k=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&S(e,t)}(a,e);var t,n,o,i=D(a);function a(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(t=i.call(this,e)).state={},t.clearScrollTimeout=t.clearScrollTimeout.bind(T(t)),t.handleKeyDown=t.handleKeyDown.bind(T(t)),t.handleMouseEnter=t.handleMouseEnter.bind(T(t)),t.handleOptionClick=t.handleOptionClick.bind(T(t)),t.scrollIntoView=t.scrollIntoView.bind(T(t)),t}return t=a,n=[{key:"componentDidMount",value:function(){document.addEventListener("keydown",this.handleKeyDown),this.scrollIntoView(),"ontouchstart"in window||this.updateCurrentActiveScreenReader()}},{key:"componentDidUpdate",value:function(){this.updateNoResultsScreenReader(),this.updateCurrentActiveScreenReader()}},{key:"componentWillUnmount",value:function(){this.clearScrollTimeout(),this.state.closedViaKeyEvent&&this.props.input&&this.props.input.focus(),document.removeEventListener("keydown",this.handleKeyDown)}},{key:"handleKeyDown",value:function(e){var t=e.keyCode,n=this.state,o=n.active,r=n.children,i=this.props,a=i.intl,l=i.onSelect,s=a.formatMessage({id:"Terra.form.select.selected"});if(t===c.KEY_UP)this.clearScrollTimeout(),this.scrollTimeout=setTimeout(this.clearScrollTimeout,500),this.setState({active:f.default.findPrevious(r,o)},this.scrollIntoView),this.updateCurrentActiveScreenReader();else if(t===c.KEY_DOWN)this.clearScrollTimeout(),this.scrollTimeout=setTimeout(this.clearScrollTimeout,500),this.setState({active:f.default.findNext(r,o)},this.scrollIntoView),this.updateCurrentActiveScreenReader();else if(t===c.KEY_RETURN&&null!==o){e.preventDefault(),this.setState({closedViaKeyEvent:!0});var u=f.default.findByValue(r,o);if(this.props.clearOptionDisplay){var d=this.menu.querySelector("[data-select-active]");d&&d.hasAttribute("data-terra-select-clear-option")&&(this.props.visuallyHiddenComponent.current.innerText=a.formatMessage({id:"Terra.form.select.selectCleared"}))}u.props.display!==this.props.input.placeholder&&(this.props.visuallyHiddenComponent.current.innerText="".concat(u.props.display," ").concat(s)),l(u.props.value,u)}else t===c.KEY_HOME?(e.preventDefault(),this.setState({active:f.default.findFirst(r)})):t===c.KEY_END&&(e.preventDefault(),this.setState({active:f.default.findLast(r)}))}},{key:"handleOptionClick",value:function(e,t){if(!t.props.disabled&&t===this.downOption){var n=this.props,o=n.input;(0,n.onSelect)(t.props.value,t),o&&o.focus()}}},{key:"handleMouseEnter",value:function(e,t){this.scrollTimeout||(t.props.disabled||this.setState({active:t.props.value}),t.props.onMouseEnter&&t.props.onMouseEnter(e))}},{key:"isActiveSelected",value:function(){return this.state.active===this.props.value}},{key:"updateNoResultsScreenReader",value:function(){var e=this;this.liveRegionTimeOut&&clearTimeout(this.liveRegionTimeOut),this.liveRegionTimeOut=setTimeout((function(){var t=e.state.hasNoResults,n=e.props,o=n.intl,r=n.visuallyHiddenComponent,i=n.searchValue;r&&r.current&&(r.current.innerText=t?o.formatMessage({id:"Terra.form.select.noResults"},{text:i}):"")}),1e3)}},{key:"updateCurrentActiveScreenReader",value:function(){var e=this.props,t=e.intl,n=e.clearOptionDisplay,o=e.visuallyHiddenComponent;if(null!==this.menu&&null!==this.state.active&&this.menu.setAttribute("aria-activedescendant","terra-select-option-".concat(this.state.active)),o&&o.current){if(n){var r=this.menu.querySelector("[data-select-active]");r&&r.hasAttribute("data-terra-select-clear-option")&&(o.current.innerText=n)}var i,a=f.default.getOptGroupElement(this.props.children,this.state.active),l=f.default.findByValue(this.props.children,this.state.active);if(a?i=t.formatMessage({id:"Terra.form.select.optGroup"},{text:"".concat(a.props.label,", ").concat(l.props.display)}):l&&(i=l.props.display),l){var s=f.default.flatten(this.state.children,!0),u=s.length,c=f.default.getIndex(s,this.state.active);""===l.props.display&&""===l.props.value?o.current.innerText=n:this.isActiveSelected()?o.current.innerText=t.formatMessage({id:"Terra.form.select.selectedText"},{text:i,index:c,totalOptions:u}):o.current.innerText=t.formatMessage({id:"Terra.form.select.activeOption"},{text:i,index:c,totalOptions:u})}}}},{key:"clearScrollTimeout",value:function(){clearTimeout(this.scrollTimeout),this.scrollTimeout=null}},{key:"clone",value:function(e){var t=this;return r.default.Children.map(e,(function(e){return e.type.isOption?r.default.cloneElement(e,function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?m(Object(n),!0).forEach((function(t){g(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):m(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({id:"terra-select-option-".concat(e.props.value),isActive:e.props.value===t.state.active,isCheckable:!1,isSelected:f.default.isSelected(t.props.value,e.props.value),variant:"search",onMouseDown:function(){t.downOption=e},onMouseUp:function(n){return t.handleOptionClick(n,e)},onMouseEnter:function(n){return t.handleMouseEnter(n,e)}},e.props.value===t.state.active&&{"data-select-active":!0})):e.type.isOptGroup?r.default.cloneElement(e,{},t.clone(e.props.children)):e}))}},{key:"scrollIntoView",value:function(){var e=this.menu.querySelector("[data-select-active]");if(this.state.active&&null!==e){var t=this.menu.parentNode.getBoundingClientRect(),n=e.getBoundingClientRect();n.top<t.top?this.menu.parentNode.scrollTop=e.offsetTop:n.bottom>t.bottom&&(this.menu.parentNode.scrollTop=e.offsetTop-t.height+n.height)}}},{key:"render",value:function(){var e=this,t=this.props,n=t.id,o=t.intl,i=t.refCallback,a=this.context;return r.default.createElement("ul",y({id:n,role:"listbox",className:P("menu",a.className),"aria-label":o.formatMessage({id:"Terra.form.select.menu"}),ref:function(t){i&&i(t),e.menu=t}},null!==this.state.active?{"aria-activedescendant":"terra-select-option-".concat(this.state.active)}:{},{tabIndex:"0"}),this.clone(this.state.children))}}],o=[{key:"getDerivedStateFromProps",value:function(e,t){var n,o=e.clearOptionDisplay,i=e.searchValue,a=e.noResultContent,l=!1;return n=f.default.filter(e.children,e.searchValue,e.optionFilter),0===(n=f.default.updateSelectionState(n,e)).length&&(n.push(r.default.createElement(p.default,{noResultContent:a,value:i})),l=!0),f.default.shouldShowClearOption({clearOptionDisplay:o,searchValue:i,hasAddOption:!1,hasNoResults:l})&&n.unshift(r.default.createElement(d.default,{display:o,value:""})),{children:n,searchValue:i,hasMaxSelection:!1,hasNoResults:l,active:f.default.getActiveOptionFromProps(e,n,t)}}}],n&&w(t.prototype,n),o&&w(t,o),Object.defineProperty(t,"prototype",{writable:!1}),a}(r.default.Component);k.propTypes=E,k.defaultProps=j,k.contextType=l.default,(0,s.polyfill)(k);t.default=(0,u.injectIntl)(k)}}]);