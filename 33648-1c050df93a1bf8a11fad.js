"use strict";(self.webpackChunkterra_ui=self.webpackChunkterra_ui||[]).push([[33648,45627,85565,3353,5161,16835,45865,85355,3193,4845,46647,85161,38681,15318,40411,18101,38443],{22863:function(e,t,n){var a=n(64836);t.Z=void 0;var r=a(n(67294)),i=a(n(45697)),l=a(n(47166)),u=a(n(17422)),o=l.default.bind(u.default),s={name:i.default.string.isRequired,src:i.default.string,url:i.default.string,version:i.default.string.isRequired},m=function(e){var t=e.src,n=e.name,a=e.url,i=e.version,l=r.default.createElement("a",{className:o("badge"),href:a||"https://www.npmjs.org/package/".concat(n,"/v/").concat(i)},r.default.createElement("span",{className:o("badge-name")},a?"package":"npm"),r.default.createElement("span",{className:o("badge-version")},"v".concat(i))),u=t?r.default.createElement("a",{className:o("badge"),href:t},r.default.createElement("span",{className:o("badge-name")},"github"),r.default.createElement("span",{className:o("badge-version")},"source")):void 0;return r.default.createElement("div",{className:o("badge-container")},l,u)};m.propTypes=s;var d=m;t.Z=d},49271:function(e,t,n){var a=n(64836),r=n(18698);t.Z=void 0;var i=a(n(27424)),l=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==r(e)&&"function"!=typeof e)return{default:e};var n=f(t);if(n&&n.has(e))return n.get(e);var a={},i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var l in e)if("default"!==l&&Object.prototype.hasOwnProperty.call(e,l)){var u=i?Object.getOwnPropertyDescriptor(e,l):null;u&&(u.get||u.set)?Object.defineProperty(a,l,u):a[l]=e[l]}a.default=e,n&&n.set(e,a);return a}(n(67294)),u=a(n(45697)),o=a(n(47166)),s=n(21538),m=a(n(33864)),d=a(n(23399)),c=n(51051),p=a(n(53560));function f(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(f=function(e){return e?n:t})(e)}var v=o.default.bind(p.default),h={example:u.default.element,exampleSrc:u.default.element,exampleCssSrc:u.default.element,title:u.default.string,description:u.default.node,isExpanded:u.default.bool},b=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","true")},g=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","false")},x=function(e){var t=e.example,n=e.exampleSrc,a=e.exampleCssSrc,r=e.title,u=e.description,o=e.isExpanded,p=(0,l.useState)(o),f=(0,i.default)(p,2),h=f[0],x=f[1],y=(0,l.useState)(!1),E=(0,i.default)(y,2),F=E[0],N=E[1],O=l.default.useContext(s.ThemeContext),S=void 0!==a,_=function(){N(!F),h&&x(!h)},V=function(){x(!h),F&&N(!F)},w=function(e,t){e.nativeEvent.keyCode!==c.KEY_SPACE&&e.nativeEvent.keyCode!==c.KEY_RETURN||(e.preventDefault(),t())};return l.default.createElement("div",{className:v("template",O.className)},l.default.createElement("div",{className:v("header")},r&&l.default.createElement("h2",{className:v("title")},r)),l.default.createElement("div",{className:v("content")},u&&l.default.createElement("div",{className:v("description")},u),t),l.default.createElement("div",{className:v("footer")},n?l.default.createElement("div",{className:v("button-container")},S&&l.default.createElement("button",{type:"button",className:v("css-toggle","item",{"is-selected":F}),onClick:_,onKeyDown:function(e){return w(e,_)},onBlur:b,onMouseDown:g,tabIndex:0,"data-focus-styles-enabled":!0},l.default.createElement(m.default,{className:v("chevron")}),l.default.createElement("span",null,"CSS"),l.default.createElement(d.default,{className:v("chevron")})),l.default.createElement("button",{type:"button",className:v("code-toggle","item",{"is-selected":h}),onClick:V,onKeyDown:function(e){return w(e,V)},onBlur:b,onMouseDown:g,tabIndex:0,"data-focus-styles-enabled":!0},l.default.createElement(m.default,{className:v("chevron")}),l.default.createElement("span",null,"Code"),l.default.createElement(d.default,{className:v("chevron")}))):null,l.default.createElement("div",null,F&&l.default.createElement("div",{className:v("css")},a),h&&l.default.createElement("div",{className:v("code")},n))))};x.propTypes=h,x.defaultProps={isExpanded:!1};var y=x;t.Z=y},31850:function(e,t,n){n.r(t),n.d(t,{default:function(){return D}});var a=n(67294),r=n(81254),i=n(46949),l=n(55120),u=["components"];function o(){return o=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},o.apply(this,arguments)}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var m={};function d(e){var t=e.components,n=s(e,u);return(0,r.mdx)("wrapper",o({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-jsx"},"/* eslint-disable class-methods-use-this */\n\nimport React from 'react';\nimport { Form, Field } from 'react-final-form';\nimport InputField from 'terra-form-input/lib/InputField';\nimport Button from 'terra-button';\nimport Spacer from 'terra-spacer';\n\nconst validateUniqueUser = async (name) => {\n  const response = new Promise((resolve) => {\n    if (!name) {\n      return resolve('Required');\n    }\n    if (name !== 'TerraUser') {\n      return resolve('');\n    }\n\n    return resolve('Name is Unavailable');\n  });\n\n  await response;\n  return response;\n};\n\nexport default class MainEntry extends React.Component {\n  constructor(props) {\n    super(props);\n\n    this.state = {};\n    this.submitForm = this.submitForm.bind(this);\n  }\n\n  submitForm(values) {\n    this.setState({\n      submittedValues: values,\n    });\n  }\n\n  renderForm({ handleSubmit }) {\n    return (\n      <form\n        noValidate\n        onSubmit={handleSubmit}\n      >\n        <Field\n          name=\"user_name\"\n          validate={validateUniqueUser}\n        >\n          {({ input, meta }) => (\n            <InputField\n              inputId=\"user-name-async\"\n              label=\"User Name\"\n              error={meta.error}\n              help=\"TerraUser is unavailable. Use this name to test async\"\n              isInvalid={meta.submitFailed && meta.error !== undefined}\n              onChange={(e) => { input.onChange(e.target.value); }}\n              inputAttrs={input}\n              value={input.value}\n              required\n            />\n          )}\n        </Field>\n        <Button text=\"Submit\" type={Button.Opts.Types.SUBMIT} />\n      </form>\n    );\n  }\n\n  render() {\n    return (\n      <Spacer marginBottom=\"small\">\n        <Form\n          onSubmit={this.submitForm}\n          render={this.renderForm}\n          validateOnBlur\n        />\n        {this.state.submittedValues\n          && (\n          <div>\n            <p>Form Submitted Successfully With</p>\n            <pre>{JSON.stringify(this.state.submittedValues, 0, 2)}</pre>\n          </div>\n          )}\n      </Spacer>\n    );\n  }\n}\n\n")))}d.isMDXComponent=!0;var c=n(49271),p=function(e){var t=e.title,n=e.description,r=e.isExpanded;return a.createElement(c.Z,{title:t||"Validation Asynchronous",description:n,example:a.createElement(l.Z,null),exampleSrc:a.createElement(d,null),isExpanded:r})},f=n(37140),v=["components"];function h(){return h=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},h.apply(this,arguments)}function b(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var g={};function x(e){var t=e.components,n=b(e,v);return(0,r.mdx)("wrapper",h({},g,n,{components:t,mdxType:"MDXLayout"}),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-jsx"},"/* eslint-disable class-methods-use-this */\n\nimport React from 'react';\nimport { Form, Field } from 'react-final-form';\nimport InputField from 'terra-form-input/lib/InputField';\nimport Button from 'terra-button';\nimport Spacer from 'terra-spacer';\n\nconst numericOnly = (value) => {\n  if (!value) return value;\n  const onlyNums = value.replace(/[^\\d]/g, '');\n  return onlyNums;\n};\n\nconst enforcePhoneNumber = (value) => {\n  if (!value) return value;\n  const onlyNums = value.replace(/[^\\d]/g, '');\n  if (onlyNums.length <= 3) return onlyNums;\n  if (onlyNums.length <= 7) return `(${onlyNums.slice(0, 3)}) ${onlyNums.slice(3)}`;\n\n  return `(${onlyNums.slice(0, 3)}) ${onlyNums.slice(3, 6)}-${onlyNums.slice(\n    6,\n    10,\n  )}`;\n};\n\nconst required = value => (value ? undefined : 'Required');\n\nexport default class MainEntry extends React.Component {\n  constructor(props) {\n    super(props);\n\n    this.state = {};\n    this.submitForm = this.submitForm.bind(this);\n  }\n\n  submitForm(values) {\n    this.setState({\n      submittedValues: values,\n    });\n  }\n\n  renderForm({ handleSubmit, pristine, invalid }) {\n    return (\n      <form\n        noValidate\n        onSubmit={handleSubmit}\n      >\n        <Field\n          name=\"vacation_days\"\n          validate={required}\n          parse={numericOnly}\n        >\n          {({ input, meta }) => (\n            <InputField\n              inputId=\"vacation-days\"\n              label=\"Vacation Days Remaining\"\n              error={meta.error}\n              isInvalid={meta.submitFailed && !meta.valid}\n              inputAttrs={input}\n              onChange={(e) => { input.onChange(e.target.value); }}\n              value={input.value}\n              required\n            />\n          )}\n        </Field>\n        <Field\n          name=\"phone_number\"\n          validate={required}\n          parse={enforcePhoneNumber}\n        >\n          {({ input, meta }) => (\n            <InputField\n              inputId=\"phone-number\"\n              label=\"Phone Number\"\n              error={meta.error}\n              isInvalid={meta.submitFailed && !meta.valid}\n              inputAttrs={input}\n              onChange={(e) => { input.onChange(e.target.value); }}\n              value={input.value}\n              required\n            />\n          )}\n        </Field>\n        <Button text=\"Submit\" isDisabled={invalid || pristine} type={Button.Opts.Types.SUBMIT} />\n      </form>\n    );\n  }\n\n  render() {\n    return (\n      <Spacer marginBottom=\"small\">\n        <Form\n          onSubmit={this.submitForm}\n          render={this.renderForm}\n        />\n        {this.state.submittedValues\n          && (\n          <div>\n            <p>Form Submitted Successfully With</p>\n            <pre>{JSON.stringify(this.state.submittedValues, 0, 2)}</pre>\n          </div>\n          )}\n      </Spacer>\n    );\n  }\n}\n\n")))}x.isMDXComponent=!0;var y=function(e){var t=e.title,n=e.description,r=e.isExpanded;return a.createElement(c.Z,{title:t||"Validation Parsing",description:n,example:a.createElement(f.Z,null),exampleSrc:a.createElement(x,null),isExpanded:r})},E=n(48870),F=["components"];function N(){return N=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},N.apply(this,arguments)}function O(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var S={};function _(e){var t=e.components,n=O(e,F);return(0,r.mdx)("wrapper",N({},S,n,{components:t,mdxType:"MDXLayout"}),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-jsx"},"/* eslint-disable class-methods-use-this */\n\nimport React from 'react';\nimport { Form, Field } from 'react-final-form';\nimport InputField from 'terra-form-input/lib/InputField';\nimport Button from 'terra-button';\nimport Spacer from 'terra-spacer';\nimport FormValidationUtil from '../../../FormValidationUtil';\n\nconst validateNumber = (value) => {\n  if (!FormValidationUtil.isOverMinValue(value, 10)) {\n    return 'Value should not be less than 10.';\n  }\n  if (!FormValidationUtil.isUnderMaxValue(value, 100)) {\n    return 'Value should not be over 100.';\n  }\n  if (!FormValidationUtil.isPrecise(value, 3)) {\n    return 'Value has more than 3 decimal points';\n  }\n\n  return undefined;\n};\n\nexport default class Example extends React.Component {\n  constructor(props) {\n    super(props);\n\n    this.state = {};\n    this.submitForm = this.submitForm.bind(this);\n  }\n\n  submitForm(values) {\n    this.setState({\n      submittedValues: values,\n    });\n  }\n\n  renderForm({ handleSubmit }) {\n    return (\n      <form\n        noValidate\n        onSubmit={handleSubmit}\n      >\n        <Field\n          name=\"numExample\"\n          validate={validateNumber}\n        >\n          {({ input, meta }) => (\n            <InputField\n              inputId=\"numExample\"\n              label=\"Numeric Example\"\n              error={meta.error}\n              isInvalid={meta.error !== undefined}\n              inputAttrs={{\n                type: 'number',\n                ...input,\n              }}\n              onChange={(e) => { input.onChange(e.target.value); }}\n              value={input.value}\n              required\n            />\n          )}\n        </Field>\n        <Button text=\"Submit\" type={Button.Opts.Types.SUBMIT} />\n      </form>\n    );\n  }\n\n  render() {\n    return (\n      <Spacer marginBottom=\"small\">\n        <Form\n          onSubmit={this.submitForm}\n          render={this.renderForm}\n          initialValues={{ numExample: '' }}\n          validate={(values) => {\n            const errors = {};\n\n            if (!values.numExample) {\n              errors.numExample = 'Required';\n            }\n\n            return errors;\n          }}\n        />\n        {this.state.submittedValues\n          && (\n          <div>\n            <p>Form Submitted Successfully With</p>\n            <pre>{JSON.stringify(this.state.submittedValues, 0, 2)}</pre>\n          </div>\n          )}\n      </Spacer>\n    );\n  }\n}\n\n")))}_.isMDXComponent=!0;var V=function(e){var t=e.title,n=e.description,r=e.isExpanded;return a.createElement(c.Z,{title:t||"Numeric Validation",description:n,example:a.createElement(E.Z,null),exampleSrc:a.createElement(_,null),isExpanded:r})},w=n(47407),C=["components"];function j(){return j=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},j.apply(this,arguments)}function k(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var I={};function T(e){var t=e.components,n=k(e,C);return(0,r.mdx)("wrapper",j({},I,n,{components:t,mdxType:"MDXLayout"}),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-jsx"},"/* eslint-disable class-methods-use-this */\n\nimport React from 'react';\nimport { Form, Field } from 'react-final-form';\nimport InputField from 'terra-form-input/lib/InputField';\nimport Button from 'terra-button';\nimport Spacer from 'terra-spacer';\nimport FormValidationUtil from '../../../FormValidationUtil';\n\nconst validateLength = (name) => {\n  if (!FormValidationUtil.isUnderMaxLength(name, 8)) {\n    return 'Name needs to be less than 9 characters long';\n  }\n\n  return undefined;\n};\n\nexport default class Example extends React.Component {\n  constructor(props) {\n    super(props);\n\n    this.state = {};\n    this.submitForm = this.submitForm.bind(this);\n  }\n\n  submitForm(values) {\n    this.setState({\n      submittedValues: values,\n    });\n  }\n\n  renderForm({ handleSubmit }) {\n    return (\n      <form\n        noValidate\n        onSubmit={handleSubmit}\n      >\n        <Field\n          name=\"example\"\n          validate={validateLength}\n        >\n          {({ input, meta }) => (\n            <InputField\n              inputId=\"example\"\n              label=\"Example\"\n              error={meta.error}\n              isInvalid={meta.error !== undefined}\n              inputAttrs={input}\n              onChange={(e) => { input.onChange(e.target.value); }}\n              value={input.value}\n              required\n            />\n          )}\n        </Field>\n        <Button text=\"Submit\" type={Button.Opts.Types.SUBMIT} />\n      </form>\n    );\n  }\n\n  render() {\n    return (\n      <Spacer marginBottom=\"small\">\n        <Form\n          onSubmit={this.submitForm}\n          render={this.renderForm}\n          initialValues={{ example: '' }}\n          validate={(values) => {\n            const errors = {};\n\n            if (!values.example) {\n              errors.example = 'Required';\n            }\n\n            return errors;\n          }}\n        />\n        {this.state.submittedValues\n          && (\n          <div>\n            <p>Form Submitted Successfully With</p>\n            <pre>{JSON.stringify(this.state.submittedValues, 0, 2)}</pre>\n          </div>\n          )}\n      </Spacer>\n    );\n  }\n}\n\n")))}T.isMDXComponent=!0;var M=function(e){var t=e.title,n=e.description,r=e.isExpanded;return a.createElement(c.Z,{title:t||"Max Length Input",description:n,example:a.createElement(w.Z,null),exampleSrc:a.createElement(T,null),isExpanded:r})},P=["components"];function U(){return U=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},U.apply(this,arguments)}function B(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var R={},q="wrapper";function D(e){var t=e.components,n=B(e,P);return(0,r.mdx)(q,U({},R,n,{components:t,mdxType:"MDXLayout"}),(0,r.mdx)(i.C,{mdxType:"Badge"}),(0,r.mdx)("h1",{id:"validation-functions"},"Validation Functions"),(0,r.mdx)("p",null,(0,r.mdx)("em",{parentName:"p"},"react-final-form")," gives you the ability to create your own validation functions. For custom validations, the idea is that a message will be returned if the function finds an error with the form input value, or returns undefined if no errors are detected for the given input value."),(0,r.mdx)("h2",{id:"asynchronous-validations"},"Asynchronous Validations"),(0,r.mdx)("p",null,"There maybe times you need to do remote validations such as Unique Username checks. To best handle this scenario with wide browser support, an OnBlurValidation can be added to a component, where the function takes in two parameters: the value of the input, and a callback setError that sets the error status of the input."),(0,r.mdx)("p",null,(0,r.mdx)("strong",{parentName:"p"},"Note")),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},"If you need to run this in IE11, the ",(0,r.mdx)("a",{parentName:"li",href:"https://www.npmjs.com/package/babel-plugin-transform-async-to-generator"},"transform-async-to-generator")," plugin needs to be added to your .babelrc file."),(0,r.mdx)("li",{parentName:"ul"},"The promise can be any kind of promise, including calls with axios and other libraries.")),(0,r.mdx)("h1",{id:"parsing"},"Parsing"),(0,r.mdx)("p",null,"Form inputs can be parsed to ensure input values follow specific formats. This could be useful when you want to restrict numeric inputs to only allow users to enter in digits, and force formating of phone numbers."),(0,r.mdx)("p",null,"Consult ",(0,r.mdx)("a",{parentName:"p",href:"https://github.com/final-form/react-final-form"},"react-final-form")," for further functionality that can be used."),(0,r.mdx)("h2",{id:"formvalidationutil-class"},"FormValidationUtil Class"),(0,r.mdx)("p",null,"In order to make creating form validation functions easier, we have a FormValidationUtil class in the ",(0,r.mdx)("inlineCode",{parentName:"p"},"terra-form-validation")," package. It contains the following functions."),(0,r.mdx)("h4",{id:"isundermaxlength"},"isUnderMaxLength"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"FormValidationUtil.isUnderMaxValue(value, maximum)\n")),(0,r.mdx)("p",null,"Checks given value's length against maximum. Returns true if value's length is less than the maximum."),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("inlineCode",{parentName:"li"},"value")," is the value string"),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("inlineCode",{parentName:"li"},"maximum")," is a nonnegative whole number.")),(0,r.mdx)("h4",{id:"isoverminlength"},"isOverMinLength"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"FormValidationUtil.isOverMinLength(value, minimum)\n")),(0,r.mdx)("p",null,"Checks given value's length against minimum. Returns true if value's length is greater than the minimum."),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("inlineCode",{parentName:"li"},"value")," is the value string"),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("inlineCode",{parentName:"li"},"minimum")," is a nonnegative whole number.")),(0,r.mdx)("h4",{id:"hasnowhitespace"},"hasNoWhitespace"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"FormValidationUtil.hasNoWhitespace(value)\n")),(0,r.mdx)("p",null,"Checks given value for extraneous whitespace. return true if there is no whitespace."),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("inlineCode",{parentName:"li"},"value")," is the value string")),(0,r.mdx)("h4",{id:"containscharacters"},"containsCharacters"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"FormValidationUtil.containsCharacters(value, chars)\n")),(0,r.mdx)("p",null,"Checks given value for any string in given array. return true if value does not contain any of them."),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("inlineCode",{parentName:"li"},"value")," is the value string"),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("inlineCode",{parentName:"li"},"chars")," is an array of strings")),(0,r.mdx)("h4",{id:"isoverminvalue"},"isOverMinValue"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"FormValidationUtil.isOverMinValue(value, minimum)\n")),(0,r.mdx)("p",null,"Checks given value against a minimum value. Returns true if value is greater then or equal to the minimum"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("inlineCode",{parentName:"li"},"value")," is the value string"),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("inlineCode",{parentName:"li"},"minimum")," is the minimum numeric value")),(0,r.mdx)("h4",{id:"isundermaxvalue"},"isUnderMaxValue"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"FormValidationUtil.isUnderMaxValue(value, maximum)\n")),(0,r.mdx)("p",null,"Checks given value against a maximum value. Returns true if value is less then or equal to the maximum"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("inlineCode",{parentName:"li"},"value")," is the value string"),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("inlineCode",{parentName:"li"},"maximum")," is the maximum numeric value")),(0,r.mdx)("h4",{id:"isprecise"},"isPrecise"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"FormValidationUtil.isPrecise(value, precision)\n")),(0,r.mdx)("p",null,"Checks given value for a specific level of precision. Returns true if value has less than or an equal amount of precision"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("inlineCode",{parentName:"li"},"value")," is the value string"),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("inlineCode",{parentName:"li"},"precision")," is a nonnegative whole number")),(0,r.mdx)("h4",{id:"isnonnegative"},"isNonnegative"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"FormValidationUtil.isNonnegative(value)\n")),(0,r.mdx)("p",null,"Checks given value for if it is a negative value. Returns true if it is nonnegative."),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("inlineCode",{parentName:"li"},"value")," is the value string")),(0,r.mdx)("h2",{id:"examples"},"Examples"),(0,r.mdx)(p,{title:"Asynchronous Function",mdxType:"ValidationAsynchronous"}),(0,r.mdx)(y,{title:"Parsing Function",mdxType:"ValidationParsing"}),(0,r.mdx)(V,{title:"Numeric Validations",description:"Making a Numeric Input With Minimum, Maximum, and Precision Validations",mdxType:"NumericValidation"}),(0,r.mdx)(M,{title:"Max Length Input",description:"Making an Input With a Maximum Length",mdxType:"TestFormValidation"}))}D.isMDXComponent=!0},17422:function(e,t,n){n.r(t),t.default={badge:"Badges-module__badge___vex-+","badge-container":"Badges-module__badge-container___B13Mv","badge-name":"Badges-module__badge-name___jkN0m","badge-version":"Badges-module__badge-version___agZ+P"}},53560:function(e,t,n){n.r(t),t.default={"clinical-lowlight-theme":"ExampleTemplate-module__clinical-lowlight-theme___rBbtD","orion-fusion-theme":"ExampleTemplate-module__orion-fusion-theme___GzA23",template:"ExampleTemplate-module__template___a4uPk",header:"ExampleTemplate-module__header___iFXV3",content:"ExampleTemplate-module__content___48m4Q",description:"ExampleTemplate-module__description___NwBJo",footer:"ExampleTemplate-module__footer___GpSoG","button-container":"ExampleTemplate-module__button-container___rAD11",css:"ExampleTemplate-module__css___+jtk1",code:"ExampleTemplate-module__code___7rC6C","css-toggle":"ExampleTemplate-module__css-toggle___chHK7","code-toggle":"ExampleTemplate-module__code-toggle___TGlE-","is-selected":"ExampleTemplate-module__is-selected___0BYwS",item:"ExampleTemplate-module__item___8FTQq",chevron:"ExampleTemplate-module__chevron___VbY7N",title:"ExampleTemplate-module__title___r+nbJ","dynamic-content":"ExampleTemplate-module__dynamic-content___k+1H7"}},79107:function(e,t,n){var a=n(64836);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a(n(18698)),i=a(n(56690)),l=a(n(89728)),u=function(){function e(){(0,i.default)(this,e)}return(0,l.default)(e,null,[{key:"isUnderMaxLength",value:function(e,t){return!(!("string"==typeof e||e instanceof String)||"number"!=typeof t||!isFinite(t)||t<0||!Number.isInteger(t))&&e.length<=t}},{key:"isOverMinLength",value:function(e,t){return!(!("string"==typeof e||e instanceof String)||"number"!=typeof t||!isFinite(t)||t<0||!Number.isInteger(t))&&e.length>=t}},{key:"hasNoWhitespace",value:function(e){return("string"==typeof e||e instanceof String)&&!/\s/.test(e)}},{key:"containsCharacters",value:function(e,t){if(!("string"==typeof e||e instanceof String)||!t||"object"!==(0,r.default)(t)||t.constructor!==Array)return!1;for(var n=0;n<t.length;n+=1)if(e.includes(t[n]))return!0;return!1}},{key:"isOverMinValue",value:function(e,t){return!(!("string"==typeof e||e instanceof String)||"number"!=typeof t||!isFinite(t))&&e>=t}},{key:"isUnderMaxValue",value:function(e,t){return!(!("string"==typeof e||e instanceof String)||"number"!=typeof t||!isFinite(t))&&e<=t}},{key:"isPrecise",value:function(e,t){if(!("string"==typeof e||e instanceof String)||"number"!=typeof t||!isFinite(t)||t<0||!Number.isInteger(t))return!1;var n=e.split(".");return!(2===n.length&&n[1].length>t)}},{key:"isNonnegative",value:function(e){return("string"==typeof e||e instanceof String)&&parseFloat(e)>=0}}]),e}();t.default=u},47407:function(e,t,n){var a=n(64836);t.Z=void 0;var r=a(n(56690)),i=a(n(89728)),l=a(n(66115)),u=a(n(61655)),o=a(n(94993)),s=a(n(73808)),m=a(n(67294)),d=n(57057),c=a(n(11817)),p=a(n(55281)),f=a(n(7017)),v=a(n(79107));function h(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,a=(0,s.default)(e);if(t){var r=(0,s.default)(this).constructor;n=Reflect.construct(a,arguments,r)}else n=a.apply(this,arguments);return(0,o.default)(this,n)}}var b=function(e){if(!v.default.isUnderMaxLength(e,8))return"Name needs to be less than 9 characters long"};t.Z=function(e){(0,u.default)(n,e);var t=h(n);function n(e){var a;return(0,r.default)(this,n),(a=t.call(this,e)).state={},a.submitForm=a.submitForm.bind((0,l.default)(a)),a}return(0,i.default)(n,[{key:"submitForm",value:function(e){this.setState({submittedValues:e})}},{key:"renderForm",value:function(e){var t=e.handleSubmit;return m.default.createElement("form",{noValidate:!0,onSubmit:t},m.default.createElement(d.Field,{name:"example",validate:b},(function(e){var t=e.input,n=e.meta;return m.default.createElement(c.default,{inputId:"example",label:"Example",error:n.error,isInvalid:void 0!==n.error,inputAttrs:t,onChange:function(e){t.onChange(e.target.value)},value:t.value,required:!0})})),m.default.createElement(p.default,{text:"Submit",type:p.default.Opts.Types.SUBMIT}))}},{key:"render",value:function(){return m.default.createElement(f.default,{marginBottom:"small"},m.default.createElement(d.Form,{onSubmit:this.submitForm,render:this.renderForm,initialValues:{example:""},validate:function(e){var t={};return e.example||(t.example="Required"),t}}),this.state.submittedValues&&m.default.createElement("div",null,m.default.createElement("p",null,"Form Submitted Successfully With"),m.default.createElement("pre",null,JSON.stringify(this.state.submittedValues,0,2))))}}]),n}(m.default.Component)},48870:function(e,t,n){var a=n(64836);t.Z=void 0;var r=a(n(38416)),i=a(n(56690)),l=a(n(89728)),u=a(n(66115)),o=a(n(61655)),s=a(n(94993)),m=a(n(73808)),d=a(n(67294)),c=n(57057),p=a(n(11817)),f=a(n(55281)),v=a(n(7017)),h=a(n(79107));function b(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function g(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?b(Object(n),!0).forEach((function(t){(0,r.default)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):b(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function x(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,a=(0,m.default)(e);if(t){var r=(0,m.default)(this).constructor;n=Reflect.construct(a,arguments,r)}else n=a.apply(this,arguments);return(0,s.default)(this,n)}}var y=function(e){return h.default.isOverMinValue(e,10)?h.default.isUnderMaxValue(e,100)?h.default.isPrecise(e,3)?void 0:"Value has more than 3 decimal points":"Value should not be over 100.":"Value should not be less than 10."};t.Z=function(e){(0,o.default)(n,e);var t=x(n);function n(e){var a;return(0,i.default)(this,n),(a=t.call(this,e)).state={},a.submitForm=a.submitForm.bind((0,u.default)(a)),a}return(0,l.default)(n,[{key:"submitForm",value:function(e){this.setState({submittedValues:e})}},{key:"renderForm",value:function(e){var t=e.handleSubmit;return d.default.createElement("form",{noValidate:!0,onSubmit:t},d.default.createElement(c.Field,{name:"numExample",validate:y},(function(e){var t=e.input,n=e.meta;return d.default.createElement(p.default,{inputId:"numExample",label:"Numeric Example",error:n.error,isInvalid:void 0!==n.error,inputAttrs:g({type:"number"},t),onChange:function(e){t.onChange(e.target.value)},value:t.value,required:!0})})),d.default.createElement(f.default,{text:"Submit",type:f.default.Opts.Types.SUBMIT}))}},{key:"render",value:function(){return d.default.createElement(v.default,{marginBottom:"small"},d.default.createElement(c.Form,{onSubmit:this.submitForm,render:this.renderForm,initialValues:{numExample:""},validate:function(e){var t={};return e.numExample||(t.numExample="Required"),t}}),this.state.submittedValues&&d.default.createElement("div",null,d.default.createElement("p",null,"Form Submitted Successfully With"),d.default.createElement("pre",null,JSON.stringify(this.state.submittedValues,0,2))))}}]),n}(d.default.Component)},55120:function(e,t,n){var a=n(64836);t.Z=void 0;var r=a(n(64687)),i=a(n(56690)),l=a(n(89728)),u=a(n(66115)),o=a(n(61655)),s=a(n(94993)),m=a(n(73808)),d=a(n(17156)),c=a(n(67294)),p=n(57057),f=a(n(11817)),v=a(n(55281)),h=a(n(7017));function b(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,a=(0,m.default)(e);if(t){var r=(0,m.default)(this).constructor;n=Reflect.construct(a,arguments,r)}else n=a.apply(this,arguments);return(0,s.default)(this,n)}}var g=function(){var e=(0,d.default)(r.default.mark((function e(t){var n;return r.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=new Promise((function(e){return e(t?"TerraUser"!==t?"":"Name is Unavailable":"Required")})),e.next=3,n;case 3:return e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();t.Z=function(e){(0,o.default)(n,e);var t=b(n);function n(e){var a;return(0,i.default)(this,n),(a=t.call(this,e)).state={},a.submitForm=a.submitForm.bind((0,u.default)(a)),a}return(0,l.default)(n,[{key:"submitForm",value:function(e){this.setState({submittedValues:e})}},{key:"renderForm",value:function(e){var t=e.handleSubmit;return c.default.createElement("form",{noValidate:!0,onSubmit:t},c.default.createElement(p.Field,{name:"user_name",validate:g},(function(e){var t=e.input,n=e.meta;return c.default.createElement(f.default,{inputId:"user-name-async",label:"User Name",error:n.error,help:"TerraUser is unavailable. Use this name to test async",isInvalid:n.submitFailed&&void 0!==n.error,onChange:function(e){t.onChange(e.target.value)},inputAttrs:t,value:t.value,required:!0})})),c.default.createElement(v.default,{text:"Submit",type:v.default.Opts.Types.SUBMIT}))}},{key:"render",value:function(){return c.default.createElement(h.default,{marginBottom:"small"},c.default.createElement(p.Form,{onSubmit:this.submitForm,render:this.renderForm,validateOnBlur:!0}),this.state.submittedValues&&c.default.createElement("div",null,c.default.createElement("p",null,"Form Submitted Successfully With"),c.default.createElement("pre",null,JSON.stringify(this.state.submittedValues,0,2))))}}]),n}(c.default.Component)},37140:function(e,t,n){var a=n(64836);t.Z=void 0;var r=a(n(56690)),i=a(n(89728)),l=a(n(66115)),u=a(n(61655)),o=a(n(94993)),s=a(n(73808)),m=a(n(67294)),d=n(57057),c=a(n(11817)),p=a(n(55281)),f=a(n(7017));function v(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,a=(0,s.default)(e);if(t){var r=(0,s.default)(this).constructor;n=Reflect.construct(a,arguments,r)}else n=a.apply(this,arguments);return(0,o.default)(this,n)}}var h=function(e){return e?e.replace(/[^\d]/g,""):e},b=function(e){if(!e)return e;var t=e.replace(/[^\d]/g,"");return t.length<=3?t:t.length<=7?"(".concat(t.slice(0,3),") ").concat(t.slice(3)):"(".concat(t.slice(0,3),") ").concat(t.slice(3,6),"-").concat(t.slice(6,10))},g=function(e){return e?void 0:"Required"};t.Z=function(e){(0,u.default)(n,e);var t=v(n);function n(e){var a;return(0,r.default)(this,n),(a=t.call(this,e)).state={},a.submitForm=a.submitForm.bind((0,l.default)(a)),a}return(0,i.default)(n,[{key:"submitForm",value:function(e){this.setState({submittedValues:e})}},{key:"renderForm",value:function(e){var t=e.handleSubmit,n=e.pristine,a=e.invalid;return m.default.createElement("form",{noValidate:!0,onSubmit:t},m.default.createElement(d.Field,{name:"vacation_days",validate:g,parse:h},(function(e){var t=e.input,n=e.meta;return m.default.createElement(c.default,{inputId:"vacation-days",label:"Vacation Days Remaining",error:n.error,isInvalid:n.submitFailed&&!n.valid,inputAttrs:t,onChange:function(e){t.onChange(e.target.value)},value:t.value,required:!0})})),m.default.createElement(d.Field,{name:"phone_number",validate:g,parse:b},(function(e){var t=e.input,n=e.meta;return m.default.createElement(c.default,{inputId:"phone-number",label:"Phone Number",error:n.error,isInvalid:n.submitFailed&&!n.valid,inputAttrs:t,onChange:function(e){t.onChange(e.target.value)},value:t.value,required:!0})})),m.default.createElement(p.default,{text:"Submit",isDisabled:a||n,type:p.default.Opts.Types.SUBMIT}))}},{key:"render",value:function(){return m.default.createElement(f.default,{marginBottom:"small"},m.default.createElement(d.Form,{onSubmit:this.submitForm,render:this.renderForm}),this.state.submittedValues&&m.default.createElement("div",null,m.default.createElement("p",null,"Form Submitted Successfully With"),m.default.createElement("pre",null,JSON.stringify(this.state.submittedValues,0,2))))}}]),n}(m.default.Component)},33864:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=i(n(67294)),r=i(n(99139));function i(e){return e&&e.__esModule?e:{default:e}}function l(){return l=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},l.apply(this,arguments)}var u=function(e){var t=l({},e);return a.default.createElement(r.default,t,a.default.createElement("path",{d:"M10.3 24 33.8 0l3.9 3.8L18 24l19.7 20.2-3.9 3.8z"}))};u.displayName="IconChevronLeft",u.defaultProps={viewBox:"0 0 48 48","data-name":"Layer 1",xmlns:"http://www.w3.org/2000/svg"};t.default=u}}]);