"use strict";(self.webpackChunkterra_ui=self.webpackChunkterra_ui||[]).push([[11290,45627,37344,85565,33667,96890,79482,3353,5161,45865,80858,14041,85355,16835,3193,4845,46647,27444,17657,85161,16873,38681,15318,66097,90941,40411,18101,38443,11264,79057,33315,34319,20116,33609,78996,39915,33442],{65178:function(e,t,n){function r(e){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(e)}t.Z=void 0;var a=s(n(67294)),l=s(n(47717)),i=s(n(55142)),d=s(n(96388)),o=s(n(47166)),m=s(n(70695));function s(e){return e&&e.__esModule?e:{default:e}}function u(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,(l=a.key,i=void 0,i=function(e,t){if("object"!==r(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var a=n.call(e,t||"default");if("object"!==r(a))return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(l,"string"),"symbol"===r(i)?i:String(i)),a)}var l,i}function p(e,t){return p=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},p(e,t)}function c(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,a=x(e);if(t){var l=x(this).constructor;n=Reflect.construct(a,arguments,l)}else n=a.apply(this,arguments);return function(e,t){if(t&&("object"===r(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return f(e)}(this,n)}}function f(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function x(e){return x=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},x(e)}var h=o.default.bind(m.default),y=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&p(e,t)}(m,e);var t,n,r,o=c(m);function m(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,m),(t=o.call(this,e)).state={first:"",middle:"",last:""},t.handleFirstChange=t.handleFirstChange.bind(f(t)),t.handleMiddleChange=t.handleMiddleChange.bind(f(t)),t.handleLastChange=t.handleLastChange.bind(f(t)),t}return t=m,(n=[{key:"handleFirstChange",value:function(e){this.setState({first:e.target.value})}},{key:"handleMiddleChange",value:function(e){this.setState({middle:e.target.value})}},{key:"handleLastChange",value:function(e){this.setState({last:e.target.value})}},{key:"render",value:function(){return a.default.createElement("div",null,a.default.createElement(d.default,{type:"checkbox",legend:"Give your full name here",name:"children_present",value:"children_present",error:"All fields must be filled out",help:"Families are eligible for family package plans",required:!0},a.default.createElement(l.default,{label:"First",isInline:!0,required:!0,htmlFor:"first"},a.default.createElement(i.default,{id:"first",type:"text",name:"first",defaultValue:"",onChange:this.handleFirstChange})),a.default.createElement(l.default,{label:"Middle",isInline:!0,required:!0,htmlFor:"middle"},a.default.createElement(i.default,{id:"middle",type:"text",name:"middle",defaultValue:"",onChange:this.handleMiddleChange})),a.default.createElement(l.default,{label:"Last",isInline:!0,required:!0,htmlFor:"last"},a.default.createElement(i.default,{id:"last",type:"text",name:"last",defaultValue:"",onChange:this.handleLastChange}))),a.default.createElement("hr",null),a.default.createElement("p",null,"Full Name Provided:",a.default.createElement("span",{className:h("fieldset-wrapper")},this.state.first," ",this.state.middle," ",this.state.last)),a.default.createElement("br",null))}}])&&u(t.prototype,n),r&&u(t,r),Object.defineProperty(t,"prototype",{writable:!1}),m}(a.default.Component);t.Z=y},49271:function(e,t,n){var r=n(64836),a=n(18698);t.Z=void 0;var l=r(n(27424)),i=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==a(e)&&"function"!=typeof e)return{default:e};var n=f(t);if(n&&n.has(e))return n.get(e);var r={},l=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if("default"!==i&&Object.prototype.hasOwnProperty.call(e,i)){var d=l?Object.getOwnPropertyDescriptor(e,i):null;d&&(d.get||d.set)?Object.defineProperty(r,i,d):r[i]=e[i]}r.default=e,n&&n.set(e,r);return r}(n(67294)),d=r(n(45697)),o=r(n(47166)),m=n(21538),s=r(n(33864)),u=r(n(23399)),p=n(51051),c=r(n(53560));function f(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(f=function(e){return e?n:t})(e)}var x=o.default.bind(c.default),h={example:d.default.element,exampleSrc:d.default.element,exampleCssSrc:d.default.element,title:d.default.string,description:d.default.node,isExpanded:d.default.bool},y=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","true")},g=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","false")},b=function(e){var t=e.example,n=e.exampleSrc,r=e.exampleCssSrc,a=e.title,d=e.description,o=e.isExpanded,c=(0,i.useState)(o),f=(0,l.default)(c,2),h=f[0],b=f[1],v=(0,i.useState)(!1),_=(0,l.default)(v,2),N=_[0],C=_[1],O=i.default.useContext(m.ThemeContext),E=void 0!==r,T=function(){C(!N),h&&b(!h)},w=function(){b(!h),N&&C(!N)},j=function(e,t){e.nativeEvent.keyCode!==p.KEY_SPACE&&e.nativeEvent.keyCode!==p.KEY_RETURN||(e.preventDefault(),t())};return i.default.createElement("div",{className:x("template",O.className)},i.default.createElement("div",{className:x("header")},a&&i.default.createElement("h2",{className:x("title")},a)),i.default.createElement("div",{className:x("content")},d&&i.default.createElement("div",{className:x("description")},d),t),i.default.createElement("div",{className:x("footer")},n?i.default.createElement("div",{className:x("button-container")},E&&i.default.createElement("button",{type:"button",className:x("css-toggle","item",{"is-selected":N}),onClick:T,onKeyDown:function(e){return j(e,T)},onBlur:y,onMouseDown:g,tabIndex:0,"data-focus-styles-enabled":!0},i.default.createElement(s.default,{className:x("chevron")}),i.default.createElement("span",null,"CSS"),i.default.createElement(u.default,{className:x("chevron")})),i.default.createElement("button",{type:"button",className:x("code-toggle","item",{"is-selected":h}),onClick:w,onKeyDown:function(e){return j(e,w)},onBlur:y,onMouseDown:g,tabIndex:0,"data-focus-styles-enabled":!0},i.default.createElement(s.default,{className:x("chevron")}),i.default.createElement("span",null,"Code"),i.default.createElement(u.default,{className:x("chevron")}))):null,i.default.createElement("div",null,N&&i.default.createElement("div",{className:x("css")},r),h&&i.default.createElement("div",{className:x("code")},n))))};b.propTypes=h,b.defaultProps={isExpanded:!1};var v=b;t.Z=v},89005:function(e,t,n){n.r(t),n.d(t,{default:function(){return P}});var r=n(67294),a=n(81254),l=n(43057),i=n(65178),d=["components"];function o(){return o=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o.apply(this,arguments)}function m(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s={};function u(e){var t=e.components,n=m(e,d);return(0,a.mdx)("wrapper",o({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-jsx"},'import React from \'react\';\nimport Field from \'terra-form-field\';\nimport Input from \'terra-form-input\';\nimport Fieldset from \'terra-form-fieldset\';\nimport classNames from \'classnames/bind\';\nimport styles from \'./FieldsetExamples.module.scss\';\n\nconst cx = classNames.bind(styles);\n\nclass FieldsetExamples extends React.Component {\n  constructor(props) {\n    super(props);\n    this.state = {\n      first: \'\',\n      middle: \'\',\n      last: \'\',\n    };\n    this.handleFirstChange = this.handleFirstChange.bind(this);\n    this.handleMiddleChange = this.handleMiddleChange.bind(this);\n    this.handleLastChange = this.handleLastChange.bind(this);\n  }\n\n  handleFirstChange(event) {\n    this.setState({ first: event.target.value });\n  }\n\n  handleMiddleChange(event) {\n    this.setState({ middle: event.target.value });\n  }\n\n  handleLastChange(event) {\n    this.setState({ last: event.target.value });\n  }\n\n  render() {\n    return (\n      <div>\n        <Fieldset\n          type="checkbox"\n          legend="Give your full name here"\n          name="children_present"\n          value="children_present"\n          error="All fields must be filled out"\n          help="Families are eligible for family package plans"\n          required\n        >\n          <Field label="First" isInline required htmlFor="first">\n            <Input id="first" type="text" name="first" defaultValue="" onChange={this.handleFirstChange} />\n          </Field>\n          <Field label="Middle" isInline required htmlFor="middle">\n            <Input id="middle" type="text" name="middle" defaultValue="" onChange={this.handleMiddleChange} />\n          </Field>\n          <Field label="Last" isInline required htmlFor="last">\n            <Input id="last" type="text" name="last" defaultValue="" onChange={this.handleLastChange} />\n          </Field>\n        </Fieldset>\n        <hr />\n        <p>\n          Full Name Provided:\n          <span className={cx(\'fieldset-wrapper\')}>\n            {this.state.first}\n            {\' \'}\n            {this.state.middle}\n            {\' \'}\n            {this.state.last}\n          </span>\n        </p>\n        <br />\n      </div>\n    );\n  }\n}\nexport default FieldsetExamples;\n\n')))}u.isMDXComponent=!0;var p=n(49271),c=["components"];function f(){return f=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},f.apply(this,arguments)}function x(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var h={};function y(e){var t=e.components,n=x(e,c);return(0,a.mdx)("wrapper",f({},h,n,{components:t,mdxType:"MDXLayout"}),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-scss"},":local { \n  .fieldset-wrapper {\n    display: inline-block;\n  }\n}\n\n")))}y.isMDXComponent=!0;var g=function(e){var t=e.title,n=e.description,a=e.isExpanded;return r.createElement(p.Z,{title:t||"Fieldset Examples",description:n,example:r.createElement(i.Z,null),exampleCssSrc:r.createElement(y,null),exampleSrc:r.createElement(u,null),isExpanded:a})},b=n(78530),v=["components"];function _(){return _=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},_.apply(this,arguments)}function N(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var C={},O="wrapper";function E(e){var t=e.components,n=N(e,v);return(0,a.mdx)(O,_({},C,n,{components:t,mdxType:"MDXLayout"}),(0,a.mdx)(b.ZP,{mdxType:"PropsTable"},(0,a.mdx)(b.X2,{key:"ROW1",mdxType:"Row"},(0,a.mdx)(b.O,{mdxType:"PropNameCell"},"children"),(0,a.mdx)(b.Di,{mdxType:"TypeCell"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"node\n"))),(0,a.mdx)(b.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,a.mdx)(b.mW,{mdxType:"DefaultValueCell"},(0,a.mdx)("p",null,"none")),(0,a.mdx)(b.Ex,{mdxType:"DescriptionCell"},(0,a.mdx)("p",null,"Children the Field contains."))),(0,a.mdx)(b.X2,{key:"ROW2",mdxType:"Row"},(0,a.mdx)(b.O,{mdxType:"PropNameCell"},"help"),(0,a.mdx)(b.Di,{mdxType:"TypeCell"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"node\n"))),(0,a.mdx)(b.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,a.mdx)(b.mW,{mdxType:"DefaultValueCell"},(0,a.mdx)("p",null,"none")),(0,a.mdx)(b.Ex,{mdxType:"DescriptionCell"},(0,a.mdx)("p",null,"Help element to display with other elements."))),(0,a.mdx)(b.X2,{key:"ROW3",mdxType:"Row"},(0,a.mdx)(b.O,{mdxType:"PropNameCell"},"legend"),(0,a.mdx)(b.Di,{mdxType:"TypeCell"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"string\n"))),(0,a.mdx)(b.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,a.mdx)(b.mW,{mdxType:"DefaultValueCell"},(0,a.mdx)("p",null,"none")),(0,a.mdx)(b.Ex,{mdxType:"DescriptionCell"},(0,a.mdx)("p",null,"Legend for the input group."))),(0,a.mdx)(b.X2,{key:"ROW4",mdxType:"Row"},(0,a.mdx)(b.O,{mdxType:"PropNameCell"},"legendAttrs"),(0,a.mdx)(b.Di,{mdxType:"TypeCell"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"object\n"))),(0,a.mdx)(b.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,a.mdx)(b.mW,{mdxType:"DefaultValueCell"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"{}\n"))),(0,a.mdx)(b.Ex,{mdxType:"DescriptionCell"},(0,a.mdx)("p",null,"Attributes to attach to the legend."))),(0,a.mdx)(b.X2,{key:"ROW5",mdxType:"Row"},(0,a.mdx)(b.O,{mdxType:"PropNameCell"},"required"),(0,a.mdx)(b.Di,{mdxType:"TypeCell"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"bool\n"))),(0,a.mdx)(b.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,a.mdx)(b.mW,{mdxType:"DefaultValueCell"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"false\n"))),(0,a.mdx)(b.Ex,{mdxType:"DescriptionCell"},(0,a.mdx)("p",null,"Determines whether the fieldset is required."))),(0,a.mdx)(b.X2,{key:"ROW6",mdxType:"Row"},(0,a.mdx)(b.O,{mdxType:"PropNameCell"},"isLegendHidden"),(0,a.mdx)(b.Di,{mdxType:"TypeCell"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"bool\n"))),(0,a.mdx)(b.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,a.mdx)(b.mW,{mdxType:"DefaultValueCell"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"false\n"))),(0,a.mdx)(b.Ex,{mdxType:"DescriptionCell"},(0,a.mdx)("p",null,"Whether or not the legend is visible. Use this prop to hide a legend while still creating it on the DOM for accessibility.")))))}E.isMDXComponent=!0;var T=["components"];function w(){return w=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},w.apply(this,arguments)}function j(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var S={},F="wrapper";function P(e){var t=e.components,n=j(e,T);return(0,a.mdx)(F,w({},S,n,{components:t,mdxType:"MDXLayout"}),(0,a.mdx)(l.C,{mdxType:"Badge"}),(0,a.mdx)("h1",{id:"terra-form-fieldset"},"Terra Form Fieldset"),(0,a.mdx)("p",null,"Generic form fieldset component which handles the layout of a standard form fieldset including help text, legend, value and widget placement."),(0,a.mdx)("h2",{id:"getting-started"},"Getting Started"),(0,a.mdx)("ul",null,(0,a.mdx)("li",{parentName:"ul"},"Install with ",(0,a.mdx)("a",{parentName:"li",href:"https://www.npmjs.com/"},"npmjs"),":",(0,a.mdx)("ul",{parentName:"li"},(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("inlineCode",{parentName:"li"},"npm install terra-form-fieldset"))))),(0,a.mdx)("h2",{id:"peer-dependencies"},"Peer Dependencies"),(0,a.mdx)("p",null,"This component requires the following peer dependencies be installed in your app for the component to properly function."),(0,a.mdx)("table",null,(0,a.mdx)("thead",{parentName:"table"},(0,a.mdx)("tr",{parentName:"thead"},(0,a.mdx)("th",{parentName:"tr",align:null},"Peer Dependency"),(0,a.mdx)("th",{parentName:"tr",align:null},"Version"))),(0,a.mdx)("tbody",{parentName:"table"},(0,a.mdx)("tr",{parentName:"tbody"},(0,a.mdx)("td",{parentName:"tr",align:null},"react"),(0,a.mdx)("td",{parentName:"tr",align:null},"^16.8.5")),(0,a.mdx)("tr",{parentName:"tbody"},(0,a.mdx)("td",{parentName:"tr",align:null},"react-dom"),(0,a.mdx)("td",{parentName:"tr",align:null},"^16.8.5")),(0,a.mdx)("tr",{parentName:"tbody"},(0,a.mdx)("td",{parentName:"tr",align:null},"react-intl"),(0,a.mdx)("td",{parentName:"tr",align:null},"^2.8.0")))),(0,a.mdx)("h2",{id:"usage"},"Usage"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-jsx"},"import Fieldset from 'terra-form-fieldset/lib/Fieldset';\n")),(0,a.mdx)("h2",{id:"component-features"},"Component Features"),(0,a.mdx)("ul",null,(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("a",{parentName:"li",href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#cross-browser-support"},"Cross-Browser Support")),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("a",{parentName:"li",href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#responsive-support"},"Responsive Support")),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("a",{parentName:"li",href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#mobile-support"},"Mobile Support")),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("a",{parentName:"li",href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#internationalization-i18n"},"Internationalization Support")),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("a",{parentName:"li",href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#internationalization-i18n"},"Localization Support")),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("a",{parentName:"li",href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#ltr--rtl"},"LTR/RTL Support"))),(0,a.mdx)("h2",{id:"examples"},"Examples"),(0,a.mdx)(g,{mdxType:"FieldsetExamples"}),(0,a.mdx)("h2",{id:"form-fieldset-props"},"Form Fieldset Props"),(0,a.mdx)(E,{mdxType:"FormFieldsetPropsTable"}),(0,a.mdx)("h2",{id:"testing"},"Testing"),(0,a.mdx)("p",null,"Terra Form Fieldset uses ",(0,a.mdx)("inlineCode",{parentName:"p"},"uuid")," which changes the component's description id dynamically. To mock the return value with the Jest testing library, ",(0,a.mdx)("inlineCode",{parentName:"p"},"jest.spyOn")," can be used."),(0,a.mdx)("p",null,"If Enzyme ",(0,a.mdx)("inlineCode",{parentName:"p"},"shallow")," is being used for the tests then the mock may not be required depending on the depth of the returned wrapper. However, if ",(0,a.mdx)("inlineCode",{parentName:"p"},"mount")," is used then ",(0,a.mdx)("inlineCode",{parentName:"p"},"uuid")," should be mocked as shown below:"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-js"},"import { v4 as uuidv4 } from 'uuid';\n\nlet mockSpyUuid;\n\n// using a variable may result in failures. For best results, mock return value.\nbeforeAll(() => {\n  mockSpyUuid = jest.spyOn(uuidv4, 'v4').mockReturnValue('00000000-0000-0000-0000-000000000000');\n});\n\n// restore the mock\nafterAll(() => {\n  mockSpyUuid.mockRestore();\n});\n\n")))}P.isMDXComponent=!0},53560:function(e,t,n){n.r(t),t.default={"clinical-lowlight-theme":"ExampleTemplate-module__clinical-lowlight-theme___rBbtD","orion-fusion-theme":"ExampleTemplate-module__orion-fusion-theme___GzA23",template:"ExampleTemplate-module__template___a4uPk",header:"ExampleTemplate-module__header___iFXV3",content:"ExampleTemplate-module__content___48m4Q",description:"ExampleTemplate-module__description___NwBJo",footer:"ExampleTemplate-module__footer___GpSoG","button-container":"ExampleTemplate-module__button-container___rAD11",css:"ExampleTemplate-module__css___+jtk1",code:"ExampleTemplate-module__code___7rC6C","css-toggle":"ExampleTemplate-module__css-toggle___chHK7","code-toggle":"ExampleTemplate-module__code-toggle___TGlE-","is-selected":"ExampleTemplate-module__is-selected___0BYwS",item:"ExampleTemplate-module__item___8FTQq",chevron:"ExampleTemplate-module__chevron___VbY7N",title:"ExampleTemplate-module__title___r+nbJ","dynamic-content":"ExampleTemplate-module__dynamic-content___k+1H7"}},33864:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=l(n(67294)),a=l(n(99139));function l(e){return e&&e.__esModule?e:{default:e}}function i(){return i=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},i.apply(this,arguments)}var d=function(e){var t=i({},e);return r.default.createElement(a.default,t,r.default.createElement("path",{d:"M10.3 24 33.8 0l3.9 3.8L18 24l19.7 20.2-3.9 3.8z"}))};d.displayName="IconChevronLeft",d.defaultProps={viewBox:"0 0 48 48","data-name":"Layer 1",xmlns:"http://www.w3.org/2000/svg"};t.default=d}}]);