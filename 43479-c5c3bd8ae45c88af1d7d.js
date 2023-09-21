"use strict";(self.webpackChunkterra_ui=self.webpackChunkterra_ui||[]).push([[43479],{95794:function(e,t,n){t.Z=void 0;var r=s(n(67294)),a=s(n(45697)),o=s(n(94184)),i=s(n(47166)),l=s(n(85984)),u=["newline"];function s(e){return e&&e.__esModule?e:{default:e}}function c(){return c=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},c.apply(this,arguments)}function d(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var m=i.default.bind(l.default),p={newline:a.default.oneOf([1,2,3,4,5,6,7,8])},f=function(e){var t=e.newline,n=d(e,u),a=(0,o.default)(m("whitespace","newline-".concat(t)),n.className);return r.default.createElement("div",c({},n,{className:a,"aria-hidden":"true"}))};f.propTypes=p,f.defaultProps={newline:1};var h=f;t.Z=h},60828:function(e,t,n){t.Z=void 0;var r=i(n(67294)),a=n(34614),o=i(n(76367));function i(e){return e&&e.__esModule?e:{default:e}}var l=r.default.createElement(a.IconPrinter,{a11yLabel:"Print"}),u=r.default.createElement(a.IconSave,{a11yLabel:"Save"}),s=function(){return r.default.createElement(o.default,null,r.default.createElement(o.default.Button,{text:"Print Documents",icon:l,key:"print"}),r.default.createElement(o.default.Button,{text:"Save Documents",icon:u,key:"save"}))};t.Z=s},73547:function(e,t,n){function r(e){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(e)}t.Z=void 0;var a=i(n(67294)),o=i(n(76367));function i(e){return e&&e.__esModule?e:{default:e}}function l(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,(o=a.key,i=void 0,i=function(e,t){if("object"!==r(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var a=n.call(e,t||"default");if("object"!==r(a))return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(o,"string"),"symbol"===r(i)?i:String(i)),a)}var o,i}function u(e,t){return u=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},u(e,t)}function s(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,a=d(e);if(t){var o=d(this).constructor;n=Reflect.construct(a,arguments,o)}else n=a.apply(this,arguments);return function(e,t){if(t&&("object"===r(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return c(e)}(this,n)}}function c(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function d(e){return d=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},d(e)}var m=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&u(e,t)}(d,e);var t,n,r,i=s(d);function d(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,d),(t=i.call(this,e)).state={selectedKeys:["multi-select1","multi-select3"]},t.handleSelection=t.handleSelection.bind(c(t)),t}return t=d,(n=[{key:"handleSelection",value:function(e,t){e.preventDefault(),this.setState((function(e){return{selectedKeys:o.default.Utils.handleMultiSelectedKeys(e.selectedKeys,t)}}))}},{key:"render",value:function(){return a.default.createElement(o.default,{id:"button-group-multi-select",onChange:this.handleSelection,selectedKeys:this.state.selectedKeys,isMultiSelect:!0},a.default.createElement(o.default.Button,{text:"Dust Allergy",key:"multi-select1"}),a.default.createElement(o.default.Button,{text:"Food Allergy",key:"multi-select2"}),a.default.createElement(o.default.Button,{text:"Pet Allergy",key:"multi-select3"}))}}])&&l(t.prototype,n),r&&l(t,r),Object.defineProperty(t,"prototype",{writable:!1}),d}(a.default.Component);t.Z=m},83694:function(e,t,n){function r(e){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(e)}t.Z=void 0;var a=i(n(67294)),o=i(n(76367));function i(e){return e&&e.__esModule?e:{default:e}}function l(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,(o=a.key,i=void 0,i=function(e,t){if("object"!==r(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var a=n.call(e,t||"default");if("object"!==r(a))return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(o,"string"),"symbol"===r(i)?i:String(i)),a)}var o,i}function u(e,t){return u=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},u(e,t)}function s(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,a=d(e);if(t){var o=d(this).constructor;n=Reflect.construct(a,arguments,o)}else n=a.apply(this,arguments);return function(e,t){if(t&&("object"===r(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return c(e)}(this,n)}}function c(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function d(e){return d=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},d(e)}var m=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&u(e,t)}(d,e);var t,n,r,i=s(d);function d(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,d),(t=i.call(this,e)).state={selectedKey:["single-select1"]},t.handleSelection=t.handleSelection.bind(c(t)),t}return t=d,(n=[{key:"handleSelection",value:function(e,t){o.default.Utils.shouldHandleSingleSelection(this.state.selectedKey,t)&&(e.preventDefault(),this.setState({selectedKey:[t]}))}},{key:"render",value:function(){return a.default.createElement(o.default,{id:"controlled-button-group",onChange:this.handleSelection,selectedKeys:this.state.selectedKey},a.default.createElement(o.default.Button,{text:"Dust Allergy",key:"single-select1"}),a.default.createElement(o.default.Button,{text:"Food Allergy",key:"single-select2"}),a.default.createElement(o.default.Button,{text:"Pet Allergy",key:"single-select3"}))}}])&&l(t.prototype,n),r&&l(t,r),Object.defineProperty(t,"prototype",{writable:!1}),d}(a.default.Component);t.Z=m},40996:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=s(n(67294)),a=s(n(45697)),o=s(n(47166)),i=s(n(50026)),l=s(n(66983)),u=["children"];function s(e){return e&&e.__esModule?e:{default:e}}function c(){return c=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},c.apply(this,arguments)}function d(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var m=o.default.bind(l.default),p=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","true")},f=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","false")},h={children:a.default.string},b=function(e){var t=e.children,n=d(e,u),a=r.default.useContext(i.default),l=(0,o.default)(m(["button",a.className]),n.className);return r.default.createElement("button",c({},n,{type:"button",className:l,onBlur:p,onMouseDown:f,"data-focus-styles-enabled":!0}),t)};b.propTypes=h;var g=b;t.default=g},59278:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=u(n(67294)),a=u(n(45697)),o=u(n(47166)),i=u(n(50026)),l=u(n(30866));function u(e){return e&&e.__esModule?e:{default:e}}var s=o.default.bind(l.default),c={ariaLevel:a.default.oneOf(["2","3","4","5","6"]),children:a.default.node,variant:a.default.oneOf(["ux-recommendation","caution","deprecation","maintenance","important","not-supported"])},d=function(e){var t=e.ariaLevel,n=e.variant,a=e.children,o=r.default.useContext(i.default);return r.default.createElement("div",{className:s("notice",n,o.className)},r.default.createElement("div",{className:s("accessory"),"aria-hidden":"true",focusable:"false"}),r.default.createElement("div",{role:"heading",className:s("title"),"aria-level":t},r.default.createElement("span",null,function(e){return"ux-recommendation"===e?"UX Recommendation":"caution"===e?"Caution":"deprecation"===e?"Deprecation Notice":"maintenance"===e?"In Maintenance":"important"===e?"Important":"not-supported"===e?"Hazards for Incorrect Usage":"error"}(n))),r.default.createElement("div",{className:s("children")},function(e){return"not-supported"===e?r.default.createElement(r.default.Fragment,null,r.default.createElement("p",{className:s("paragraph")},"This component was designed and tested according to the documented implementation."),r.default.createElement("p",{className:s("paragraph")},"Using the component incorrectly:",r.default.createElement("ul",{className:s("list")},r.default.createElement("li",null,"will likely result in improper composition and create accessibility issues"),r.default.createElement("li",null,"may cause erratic or broken behaviors and styles"),r.default.createElement("li",null,r.default.createElement("strong",null,"will not be supported "),"or enhanced to allow for incorrect use")))):null}(n),r.default.Children.map(a,(function(e){return"string"==typeof e?r.default.createElement("p",null,e):e}))))};d.propTypes=c,d.defaultProps={ariaLevel:"2",variant:"important"};var m=d;t.default=m},47306:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=c(n(67294)),a=c(n(45697)),o=c(n(94184)),i=c(n(47166)),l=c(n(50026)),u=c(n(42620)),s=["title"];function c(e){return e&&e.__esModule?e:{default:e}}function d(){return d=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},d.apply(this,arguments)}function m(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=i.default.bind(u.default),f={title:a.default.string},h=function(e){var t=e.title,n=m(e,s),a=r.default.useContext(l.default),i=(0,o.default)(p(["placeholder",a.className]),n.className),u=p(["inner"]);return r.default.createElement("div",d({},n,{className:i}),r.default.createElement("div",{className:u},r.default.createElement("p",{className:p("title")},t)))};h.propTypes=f,h.defaultProps={title:""};var b=h;t.default=b},34261:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"Button",{enumerable:!0,get:function(){return o.default}}),Object.defineProperty(t,"Notice",{enumerable:!0,get:function(){return r.default}}),Object.defineProperty(t,"Placeholder",{enumerable:!0,get:function(){return a.default}});var r=i(n(59278)),a=i(n(47306)),o=i(n(40996));function i(e){return e&&e.__esModule?e:{default:e}}},43479:function(e,t,n){n.r(t),n.d(t,{default:function(){return f}});n(67294);var r=n(81254),a=n(33343),o=n(34261),i=(n(95794),n(83694)),l=n(73547),u=n(60828),s=["components"];function c(){return c=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},c.apply(this,arguments)}function d(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var m={},p="wrapper";function f(e){var t=e.components,n=d(e,s);return(0,r.mdx)(p,c({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.mdx)(a.C,{mdxType:"Badge"}),(0,r.mdx)("h1",{id:"accessibility-guide-for-terra-button-group"},"Accessibility Guide for Terra Button group"),(0,r.mdx)("h2",{id:"why-the-accessibility-of-terra-button-group"},"Why the accessibility of Terra Button group?"),(0,r.mdx)("p",null,"The button group component is a group of buttons that allow users to manage content within the page view. If button group is not accessible, it can cause confusion for the user, or worse, prevent the users from interacting with the product. Therefore, it is critical that a button group is implemented correctly to ensure all users can use the button group regardless of how they may interact with it."),(0,r.mdx)("h2",{id:"accessibility-considerations"},"Accessibility Considerations"),(0,r.mdx)("h3",{id:"code-considerations"},"Code Considerations"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},"Ensure all buttons within the button group receive keyboard focus and can be interacted with only the keyboard.   ",(0,r.mdx)("ul",{parentName:"li"},(0,r.mdx)("li",{parentName:"ul"},"Do NOT override keyboard focus state or use a TABINDEX greater than zero.  "),(0,r.mdx)("li",{parentName:"ul"},"Button group should be coded in the users logical reading order of the page to ensure a meaningful experience."))),(0,r.mdx)("li",{parentName:"ul"},"Ensure the user can intuitively understand and perceive the selected state from the unselected state.")),(0,r.mdx)(o.Notice,{variant:"important",ariaLevel:"4",mdxType:"Notice"},(0,r.mdx)("p",null,(0,r.mdx)("strong",{parentName:"p"},"Accessibility Guidance: Users must be able to differentitate selected and unselected buttons")),(0,r.mdx)("p",null,(0,r.mdx)("strong",{parentName:"p"},"Single Select variant")),(0,r.mdx)("div",{"aria-label":"Example demo"},(0,r.mdx)(i.Z,{mdxType:"SingleSelect"})),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-jsx"},'      <ButtonGroup\n        id="controlled-button-group"\n        onChange={this.handleSelection}\n        selectedKeys={this.state.selectedKey}\n      >\n        <ButtonGroup.Button text="Dust Allergy" key="single-select1" />\n        <ButtonGroup.Button text="Food Allergy" key="single-select2" />\n        <ButtonGroup.Button text="Pet Allergy" key="single-select3" />\n      </ButtonGroup>\n')),(0,r.mdx)("p",null,(0,r.mdx)("strong",{parentName:"p"},"Multi Select variant")),(0,r.mdx)("div",{"aria-label":"Example demo"},(0,r.mdx)(l.Z,{mdxType:"MultiSelect"})),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-jsx"},'      <ButtonGroup\n        id="button-group-multi-select"\n        onChange={this.handleSelection}\n        selectedKeys={this.state.selectedKeys}\n        isMultiSelect\n      >\n        <ButtonGroup.Button text="Dust Allergy" key="multi-select1" />\n        <ButtonGroup.Button text="Food Allergy" key="multi-select2" />\n        <ButtonGroup.Button text="Pet Allergy" key="multi-select3" />\n      </ButtonGroup>\n')),(0,r.mdx)("p",null,(0,r.mdx)("strong",{parentName:"p"},"Accessibility Guidance: Ensure any button with a meaningful icon has an accessible name assigned to the icon")),(0,r.mdx)("div",{"aria-label":"Example demo"},(0,r.mdx)(u.Z,{mdxType:"IconGroup"})),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-jsx"},'const iconPrint = <IconPrinter a11yLabel="Print" />;\nconst iconSave = <IconSave a11yLabel="Save" />;\n\nconst ButtonGroupA11yIcon = () => (\n  <ButtonGroup>\n    <ButtonGroup.Button text="Print Documents" icon={iconPrint} key="print" />\n    <ButtonGroup.Button text="Save Documents" icon={iconSave} key="save" />\n  </ButtonGroup>\n'))),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},"Ensure all meaningful information that is presented visually is programmatically available to the assistive technology.",(0,r.mdx)("ul",{parentName:"li"},(0,r.mdx)("li",{parentName:"ul"},"All buttons within the button group must have an accessible name (button label) which is descriptive of the purpose."),(0,r.mdx)("li",{parentName:"ul"},"The visual label of the button must match the programmatic accessible name."))),(0,r.mdx)("li",{parentName:"ul"},"Because Button groups are used to control content on the page, they must either have a programmatic association to a visible label on the page or assigned an accessible name for the button group.",(0,r.mdx)("ul",{parentName:"li"},(0,r.mdx)("li",{parentName:"ul"},"Button groups within a Toolbar will automatically provide the proper context.")))),(0,r.mdx)("h3",{id:"content-considerations"},"Content Considerations"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},"Provide instructions when it is not clear to the user what a button control is for or what they should expect to do with it."),(0,r.mdx)("li",{parentName:"ul"},"Must provide engineers with a meaningful and descriptive labels that conveys each button’s purpose."),(0,r.mdx)("li",{parentName:"ul"},"Must convey to engineers the Button group label: ",(0,r.mdx)("ul",{parentName:"li"},(0,r.mdx)("li",{parentName:"ul"},"Is it text on the page or is it a visually hidden text? "),(0,r.mdx)("li",{parentName:"ul"},"Visually hidden text must be intuitive for sighted users to understand, otherwise the text should be on the page and in proximity to the button group."))),(0,r.mdx)("li",{parentName:"ul"},"When implementing button group do not override default theme colors of button group to ensure the button group be easily perceived against its background color. ",(0,r.mdx)("ul",{parentName:"li"},(0,r.mdx)("li",{parentName:"ul"},"If changing the default colors, the text color must meet a minimum contrast ratio against the background color. See WCAG ",(0,r.mdx)("a",{parentName:"li",href:"https://www.w3.org/WAI/WCAG21/Understanding/contrast-minimum.html"},"1.4.3 Contrast (Minimum)")," and ",(0,r.mdx)("a",{parentName:"li",href:"https://www.w3.org/WAI/WCAG21/Understanding/non-text-contrast.html"},"1.4.11 Non-Text Contrast")," for more information.  "),(0,r.mdx)("li",{parentName:"ul"},"Not everyone perceives color so never use color as the only way to convey meaning within the interface. Always provide both color and text or a shape together to represent the meaning."))),(0,r.mdx)("li",{parentName:"ul"},"Ensure the engineers understand the logical reading order of the page."),(0,r.mdx)("li",{parentName:"ul"},"Ensure button group always meet the user’s expectations.",(0,r.mdx)("ul",{parentName:"li"},(0,r.mdx)("li",{parentName:"ul"},"Never add unexpected behaviors to button group that could cause a change of context on focus or on activation of the button group."),(0,r.mdx)("li",{parentName:"ul"},"Ensure all buttons perform the action on the up event"))),(0,r.mdx)("li",{parentName:"ul"},"After coded, ensure all interactable elements receive keyboard focus in the users reading order and display a visible keyboard focus. Ensure the keyboard user does not get “trapped” somewhere on the page preventing them from the entire workflow.")),(0,r.mdx)("h2",{id:"usability-expectations"},"Usability Expectations"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},"User expects to understand what the button group will control."),(0,r.mdx)("li",{parentName:"ul"},"User expects each button within the group to have a unique and descriptive label that clearly communicates what action will be performed when selected."),(0,r.mdx)("li",{parentName:"ul"},"User expects to be able to tab to a button group and one of the buttons receive visible focus."),(0,r.mdx)("li",{parentName:"ul"},"User expects to see and understand when a button is selected.",(0,r.mdx)("ul",{parentName:"li"},(0,r.mdx)("li",{parentName:"ul"},"If the button group can have multiple selected buttons, the user expects to be see and understand which buttons are selected and unselected."))),(0,r.mdx)("li",{parentName:"ul"},"If the Button state is changed, the user expects to be informed (audibly or visually) of the new state.",(0,r.mdx)("ul",{parentName:"li"},(0,r.mdx)("li",{parentName:"ul"},"User expects the changing of button states to result in instantaneous feedback. They do not expect to take further action to save the setting change. "))),(0,r.mdx)("li",{parentName:"ul"},"User expects all icons with the same functionality to be consistently identified by the same name.",(0,r.mdx)("ul",{parentName:"li"},(0,r.mdx)("li",{parentName:"ul"},"User also expects icons to be intuitive and to be used consistently across a product.")))),(0,r.mdx)("h3",{id:"interaction-details"},"Interaction Details"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},"Mouse users expect the cursor to change to a hand with pointing finger when the Button group is hovered. "),(0,r.mdx)("li",{parentName:"ul"},"Keyboard only users expect to see a visible keyboard focus indicator when a button within the button group is in focus.")),(0,r.mdx)("h3",{id:"keyboard-navigation"},"Keyboard Navigation"),(0,r.mdx)("p",null,"When in focus a button group must have a visible keyboard focus. Additionally, sighted, and unsighted users have basic keyboard navigation expectations:"),(0,r.mdx)("table",null,(0,r.mdx)("thead",{parentName:"table"},(0,r.mdx)("tr",{parentName:"thead"},(0,r.mdx)("th",{parentName:"tr",align:null},"Key/Sequence"),(0,r.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,r.mdx)("tbody",{parentName:"table"},(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("strong",{parentName:"td"},"Tab")),(0,r.mdx)("td",{parentName:"tr",align:null},"Moves to the button group and one of the buttons in that group receive focus. User expects elements to receive focus in the logical reading order of the page.")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("strong",{parentName:"td"},"Left/Right")),(0,r.mdx)("td",{parentName:"tr",align:null},"Moves to navigate through the button group element.")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("strong",{parentName:"td"},"Enter/Return/Spacebar")),(0,r.mdx)("td",{parentName:"tr",align:null},"Executes the selected button action.")))),(0,r.mdx)("h2",{id:"support-compliance"},"Support Compliance"),(0,r.mdx)("h3",{id:"primary-criteria"},"Primary Criteria"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("p",{parentName:"li"},(0,r.mdx)("a",{parentName:"p",href:"https://www.w3.org/WAI/WCAG21/Understanding/non-text-content.html"},"1.1.1 Non-text Content")," – Supports"),(0,r.mdx)("ul",{parentName:"li"},(0,r.mdx)("li",{parentName:"ul"},"Terra provides the ability to use icons inside a button group."),(0,r.mdx)("li",{parentName:"ul"},"Engineers must ensure when an icon conveys meaning, to add appropriate ALT text to create a meaningful button label."),(0,r.mdx)("li",{parentName:"ul"},"Content creators must provide engineers with meaningful text when using icons that convey meaning."))),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("p",{parentName:"li"},(0,r.mdx)("a",{parentName:"p",href:"https://www.w3.org/WAI/WCAG21/Understanding/info-and-relationships.html"},"1.3.1 Info and Relationships")," — Supports"),(0,r.mdx)("ul",{parentName:"li"},(0,r.mdx)("li",{parentName:"ul"},"Terra provides the ability for information, structure, and relationships to be programmatically determined."),(0,r.mdx)("li",{parentName:"ul"},"Engineers must ensure any visual relationship with a button group that conveys meaning must programmatically set associations to the content for visual relationships to be understood by assistive technology users.  "),(0,r.mdx)("li",{parentName:"ul"},"Content creators must provide the meaningful button label that communicates what users should expect when the button is activated. Must also express to the engineer any visual relationships of a button group to other content for them to ensure engineers can programmatically convey the visual relationships. "))),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("p",{parentName:"li"},(0,r.mdx)("a",{parentName:"p",href:"https://www.w3.org/WAI/WCAG21/Understanding/keyboard.html"},"2.1.1 Keyboard")," — Supports"),(0,r.mdx)("ul",{parentName:"li"},(0,r.mdx)("li",{parentName:"ul"},"Terra provides the ability for all interactable elements to receive focus, be interacted with, and be acted upon via keyboard."),(0,r.mdx)("li",{parentName:"ul"},"Engineers must ensure that all interactable elements can receive focus, be interacted with, and are able to be acted upon using the keyboard. "),(0,r.mdx)("li",{parentName:"ul"},"Content creators must ensure that all interactable elements can receive focus, be interacted with, and are able to be acted upon using the keyboard."))),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("p",{parentName:"li"},(0,r.mdx)("a",{parentName:"p",href:"https://www.w3.org/WAI/WCAG21/Understanding/headings-and-labels.html"},"2.4.6 Headings and Labels")," — Supports"),(0,r.mdx)("ul",{parentName:"li"},(0,r.mdx)("li",{parentName:"ul"},"Terra provides the ability to create labels that are descriptive of their purpose."),(0,r.mdx)("li",{parentName:"ul"},"Engineers must implement meaningful text for labels to accurately describe their purpose."),(0,r.mdx)("li",{parentName:"ul"},"Content creators are responsible for providing the unique label that describes the purpose of each button within a button group."))),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("p",{parentName:"li"},(0,r.mdx)("a",{parentName:"p",href:"https://www.w3.org/WAI/WCAG22/Understanding/focus-visible.html"},"2.4.7 Focus Visible")," — Supports"),(0,r.mdx)("ul",{parentName:"li"},(0,r.mdx)("li",{parentName:"ul"},"Terra provides the ability for actionable elements to receive visual focus."),(0,r.mdx)("li",{parentName:"ul"},"Engineers must ensure a visible keyboard focus is maintained on all interactive elements."),(0,r.mdx)("li",{parentName:"ul"},"Content creators must not override Keyboard Focus styles."))),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("p",{parentName:"li"},(0,r.mdx)("a",{parentName:"p",href:"https://www.w3.org/WAI/WCAG22/Understanding/label-in-name.html"},"2.5.3 Label in Name")," — Supports "),(0,r.mdx)("ul",{parentName:"li"},(0,r.mdx)("li",{parentName:"ul"},"Terra provides the ability for programmatic labels to match visual labels."),(0,r.mdx)("li",{parentName:"ul"},"Engineers must ensure the programmatic label matches the visual labels when for each button within the button group."),(0,r.mdx)("li",{parentName:"ul"},"Ensure the visible label for each button within the group the each is unique and describes the purpose of the button group so it can be understood by the user out of context. "),(0,r.mdx)("li",{parentName:"ul"},"Work with engineers to ensure the visible label matches the programmatic label with each button."))),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("p",{parentName:"li"},(0,r.mdx)("a",{parentName:"p",href:"https://www.w3.org/WAI/WCAG21/Understanding/name-role-value.html"},"4.1.2 Name, Role, Value")," — Supports"),(0,r.mdx)("ul",{parentName:"li"},(0,r.mdx)("li",{parentName:"ul"},"Terra provides the ability for Name, Role, and Value attributes to be programmatically determined."),(0,r.mdx)("li",{parentName:"ul"},"Engineers must not override the implicit or explicit role of any button within the button group and must implement the button labels.")))),(0,r.mdx)("h3",{id:"secondary-criteria"},"Secondary Criteria"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("p",{parentName:"li"},(0,r.mdx)("a",{parentName:"p",href:"https://www.w3.org/WAI/WCAG21/Understanding/meaningful-sequence.html"},"1.3.2 Meaningful Sequence")," — Supports "),(0,r.mdx)("ul",{parentName:"li"},(0,r.mdx)("li",{parentName:"ul"},"Terra button group provides the ability for components to be presented in the order in which they are coded."),(0,r.mdx)("li",{parentName:"ul"},"Engineers must ensure content order is meaningful and logical. If there is a visual presentation of content that is important for the user to understand, that must be available programmatically."),(0,r.mdx)("li",{parentName:"ul"},"Content creator must ensure content is read in a meaningful and logical order so as to not lose context."))),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("p",{parentName:"li"},(0,r.mdx)("a",{parentName:"p",href:"https://www.w3.org/WAI/WCAG21/Understanding/reflow.html"},"1.4.10 Reflow")," — Supports"),(0,r.mdx)("ul",{parentName:"li"},(0,r.mdx)("li",{parentName:"ul"},"Terra provides the ability for components to reflow when the viewport is resized to 320x256 px without loss of information or function."),(0,r.mdx)("li",{parentName:"ul"},"Engineers must ensure content within Terra Button group can reflow when the viewport is resized to 320 x 256 px without scrolling in two directions or loss of information or functionality."),(0,r.mdx)("li",{parentName:"ul"},"Content creators must consider the responsive nature of Terra Button group and provide engineers guidance on how content should reflow when the viewport is resized to 320 x 256 px."))),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("p",{parentName:"li"},(0,r.mdx)("a",{parentName:"p",href:"https://www.w3.org/WAI/WCAG21/Understanding/non-text-contrast.html"},"1.4.11 Non-Text Contrast")," — Supports"),(0,r.mdx)("ul",{parentName:"li"},(0,r.mdx)("li",{parentName:"ul"},"Terra provides components that, by default, meet color contrast requirements."),(0,r.mdx)("li",{parentName:"ul"},"Content creators must ensure any graphical elements used within Action Header that convey information meets a 3:1 color contrast ratio against whatever color background Button groups may appear upon."))),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("p",{parentName:"li"},(0,r.mdx)("a",{parentName:"p",href:"https://www.w3.org/WAI/WCAG21/Understanding/contrast-minimum.html"},"1.4.3 Contrast (Minimum)")," — Supports"),(0,r.mdx)("ul",{parentName:"li"},(0,r.mdx)("li",{parentName:"ul"},"Terra button group provides components that, by default, meet color contrast requirements."),(0,r.mdx)("li",{parentName:"ul"},"Engineers must work with content creators to implement button group so that button group text (visual label) color and the background color meet appropriate color contrast ratios. "),(0,r.mdx)("li",{parentName:"ul"},"Content creators must ensure that the button group text color meets the appropriate contrast ratio against background color(s) based on text size of the visual label text if colors are changed. Contrast ratios should be above 4.5:1 for normal text and 3:1 for bold and large text."))),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("p",{parentName:"li"},(0,r.mdx)("a",{parentName:"p",href:"https://www.w3.org/WAI/WCAG21/Understanding/focus-order.html"},"2.4.3 Focus Order")," — Supports"),(0,r.mdx)("ul",{parentName:"li"},(0,r.mdx)("li",{parentName:"ul"},"Terra provides the ability for actionable components to receive focus in the order they are coded."),(0,r.mdx)("li",{parentName:"ul"},"Engineers must ensure that the focus order is expected and preserves page meaning. Code order should follow the logical reading order of the user. Though a TABINDEX attribute should not be required to ensure keyboard use, if used, never use TABINDEX higher than 0. "),(0,r.mdx)("li",{parentName:"ul"},"Content creators should convey to the engineers the logical reading order of the page."))),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("p",{parentName:"li"},(0,r.mdx)("a",{parentName:"p",href:"https://www.w3.org/WAI/WCAG21/Understanding/pointer-cancellation.html"},"2.5.2 Pointer Cancellation")," — Supports"),(0,r.mdx)("ul",{parentName:"li"},(0,r.mdx)("li",{parentName:"ul"},"Terra components use the up event to perform actions."),(0,r.mdx)("li",{parentName:"ul"},"Engineers must ensure actionable controls always activate on the up event."))),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("p",{parentName:"li"},(0,r.mdx)("a",{parentName:"p",href:"https://www.w3.org/WAI/WCAG21/Understanding/on-focus.html"},"3.2.1 On Focus")," — Supports"),(0,r.mdx)("ul",{parentName:"li"},(0,r.mdx)("li",{parentName:"ul"},"Terra components do not cause a change of context on focus by default."),(0,r.mdx)("li",{parentName:"ul"},"Engineers must ensure that no unexpected change of context happens when interactive elements receive focus."),(0,r.mdx)("li",{parentName:"ul"},"Content creators must inform engineers that button group should not cause any change when a button receives focus."))),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("p",{parentName:"li"},(0,r.mdx)("a",{parentName:"p",href:"https://www.w3.org/WAI/WCAG21/Understanding/consistent-identification"},"3.2.4 Consistent Identification")," — Supports"),(0,r.mdx)("ul",{parentName:"li"},(0,r.mdx)("li",{parentName:"ul"},"Terra provides the ability for elements to be consistently identified."),(0,r.mdx)("li",{parentName:"ul"},"Engineers must ensure that elements used for the same function are identified consistently."),(0,r.mdx)("li",{parentName:"ul"},"Content creators must ensure any icons used are used to represent the same function consistently. Additionally, the alternate content used to describe icons must be consistent for users to understand their function predictably."))),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("p",{parentName:"li"},(0,r.mdx)("a",{parentName:"p",href:"https://www.w3.org/TR/UNDERSTANDING-WCAG20/ensure-compat-parses.html"},"4.1.1 Parsing")," — Supports"),(0,r.mdx)("ul",{parentName:"li"},(0,r.mdx)("li",{parentName:"ul"},"Terra components are tested and validated before release to ensure proper code parsing."),(0,r.mdx)("li",{parentName:"ul"},"Engineers must ensure their code is valid HTML.")))),(0,r.mdx)("p",null,(0,r.mdx)("a",{parentName:"p",href:"https://github.com/cerner/terra-core/issues/new/choose"},"Report a problem with this component on GitHub")))}f.isMDXComponent=!0},33343:function(e,t,n){n.d(t,{C:function(){return o}});var r=n(67294),a=n(22863),o=function(e){var t=e.url;return r.createElement(a.Z,{src:"https://github.com/cerner/terra-core/tree/main/packages/terra-button-group",name:"terra-button-group",version:"3.69.1",url:t})}},85984:function(e,t,n){n.r(t),t.default={whitespace:"Whitespace-module__whitespace___nfEbP","newline-1":"Whitespace-module__newline-1___JsrIt","newline-2":"Whitespace-module__newline-2___Q0uWI","newline-3":"Whitespace-module__newline-3___Q94cX","newline-4":"Whitespace-module__newline-4___20zS-","newline-5":"Whitespace-module__newline-5___nHyJ-","newline-6":"Whitespace-module__newline-6___TGqYR","newline-7":"Whitespace-module__newline-7___4YsCl","newline-8":"Whitespace-module__newline-8___NTNEl"}},66983:function(e,t,n){n.r(t),t.default={"clinical-lowlight-theme":"Button-module__clinical-lowlight-theme___TyZWB","orion-fusion-theme":"Button-module__orion-fusion-theme___q-FcQ",button:"Button-module__button___QuCn2","is-active":"Button-module__is-active___Z8AuK"}},30866:function(e,t,n){n.r(t),t.default={"clinical-lowlight-theme":"Notice-module__clinical-lowlight-theme___aa5xV","orion-fusion-theme":"Notice-module__orion-fusion-theme___QAE-T",notice:"Notice-module__notice___GWkPA",children:"Notice-module__children___lDYsm",accessory:"Notice-module__accessory___wkLOG",title:"Notice-module__title___6H5tc","ux-recommendation":"Notice-module__ux-recommendation___N8BuK",caution:"Notice-module__caution___hPrVl",deprecation:"Notice-module__deprecation___g1drA",maintenance:"Notice-module__maintenance___kWLIZ",important:"Notice-module__important___p5DiF","not-supported":"Notice-module__not-supported___34bHd",paragraph:"Notice-module__paragraph___5h-w1",list:"Notice-module__list___M2Kxj"}},42620:function(e,t,n){n.r(t),t.default={"clinical-lowlight-theme":"Placeholder-module__clinical-lowlight-theme___Obm9K","orion-fusion-theme":"Placeholder-module__orion-fusion-theme___svHY+",placeholder:"Placeholder-module__placeholder___ZZDXd",inner:"Placeholder-module__inner___fJq9o",title:"Placeholder-module__title___teBSo"}}}]);