"use strict";(self.webpackChunkterra_ui=self.webpackChunkterra_ui||[]).push([[55619,45627,85565,3353,5161,19260,45865,85355,3193,4845,46647,85161,38681,15318,40411,18101,38443],{22863:function(e,t,n){var a=n(64836);t.Z=void 0;var r=a(n(67294)),o=a(n(45697)),l=a(n(47166)),i=a(n(17422)),u=l.default.bind(i.default),m={name:o.default.string.isRequired,src:o.default.string,url:o.default.string,version:o.default.string.isRequired},c=function(e){var t=e.src,n=e.name,a=e.url,o=e.version,l=r.default.createElement("a",{className:u("badge"),href:a||"https://www.npmjs.org/package/".concat(n,"/v/").concat(o)},r.default.createElement("span",{className:u("badge-name")},a?"package":"npm"),r.default.createElement("span",{className:u("badge-version")},"v".concat(o))),i=t?r.default.createElement("a",{className:u("badge"),href:t},r.default.createElement("span",{className:u("badge-name")},"github"),r.default.createElement("span",{className:u("badge-version")},"source")):void 0;return r.default.createElement("div",{className:u("badge-container")},l,i)};c.propTypes=m;var p=c;t.Z=p},49271:function(e,t,n){var a=n(64836),r=n(18698);t.Z=void 0;var o=a(n(27424)),l=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==r(e)&&"function"!=typeof e)return{default:e};var n=f(t);if(n&&n.has(e))return n.get(e);var a={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var l in e)if("default"!==l&&Object.prototype.hasOwnProperty.call(e,l)){var i=o?Object.getOwnPropertyDescriptor(e,l):null;i&&(i.get||i.set)?Object.defineProperty(a,l,i):a[l]=e[l]}a.default=e,n&&n.set(e,a);return a}(n(67294)),i=a(n(45697)),u=a(n(47166)),m=n(21538),c=a(n(33864)),p=a(n(23399)),s=n(51051),d=a(n(53560));function f(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(f=function(e){return e?n:t})(e)}var v=u.default.bind(d.default),g={example:i.default.element,exampleSrc:i.default.element,exampleCssSrc:i.default.element,title:i.default.string,description:i.default.node,isExpanded:i.default.bool},b=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","true")},h=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","false")},_=function(e){var t=e.example,n=e.exampleSrc,a=e.exampleCssSrc,r=e.title,i=e.description,u=e.isExpanded,d=(0,l.useState)(u),f=(0,o.default)(d,2),g=f[0],_=f[1],y=(0,l.useState)(!1),E=(0,o.default)(y,2),w=E[0],x=E[1],P=l.default.useContext(m.ThemeContext),F=void 0!==a,N=function(){x(!w),g&&_(!g)},C=function(){_(!g),w&&x(!w)},S=function(e,t){e.nativeEvent.keyCode!==s.KEY_SPACE&&e.nativeEvent.keyCode!==s.KEY_RETURN||(e.preventDefault(),t())};return l.default.createElement("div",{className:v("template",P.className)},l.default.createElement("div",{className:v("header")},r&&l.default.createElement("h2",{className:v("title")},r)),l.default.createElement("div",{className:v("content")},i&&l.default.createElement("div",{className:v("description")},i),t),l.default.createElement("div",{className:v("footer")},n?l.default.createElement("div",{className:v("button-container")},F&&l.default.createElement("button",{type:"button",className:v("css-toggle","item",{"is-selected":w}),onClick:N,onKeyDown:function(e){return S(e,N)},onBlur:b,onMouseDown:h,tabIndex:0,"data-focus-styles-enabled":!0},l.default.createElement(c.default,{className:v("chevron")}),l.default.createElement("span",null,"CSS"),l.default.createElement(p.default,{className:v("chevron")})),l.default.createElement("button",{type:"button",className:v("code-toggle","item",{"is-selected":g}),onClick:C,onKeyDown:function(e){return S(e,C)},onBlur:b,onMouseDown:h,tabIndex:0,"data-focus-styles-enabled":!0},l.default.createElement(c.default,{className:v("chevron")}),l.default.createElement("span",null,"Code"),l.default.createElement(p.default,{className:v("chevron")}))):null,l.default.createElement("div",null,w&&l.default.createElement("div",{className:v("css")},a),g&&l.default.createElement("div",{className:v("code")},n))))};_.propTypes=g,_.defaultProps={isExpanded:!1};var y=_;t.Z=y},79213:function(e,t,n){var a=n(64836),r=n(18698);t.Z=void 0;var o=a(n(27424)),l=c(n(67294)),i=a(n(45697)),u=c(n(28287));function m(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(m=function(e){return e?n:t})(e)}function c(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=r(e)&&"function"!=typeof e)return{default:e};var n=m(t);if(n&&n.has(e))return n.get(e);var a={__proto__:null},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var l in e)if("default"!==l&&Object.prototype.hasOwnProperty.call(e,l)){var i=o?Object.getOwnPropertyDescriptor(e,l):null;i&&(i.get||i.set)?Object.defineProperty(a,l,i):a[l]=e[l]}return a.default=e,n&&n.set(e,a),a}var p=function(e){var t=e.title,n=e.ariaLabel,a=(0,l.useState)(""),r=(0,o.default)(a,2),i=r[0],m=r[1];return l.default.createElement("div",null,l.default.createElement("p",null,t),i.length?l.default.createElement(u.default,{description:t}):void 0,l.default.createElement("input",{type:"text","aria-label":n,onChange:function(e){m(e.target.value)},value:i}),l.default.createElement("button",{type:"button",onClick:function(){m("")}},"Submit"))};p.propTypes={title:i.default.string,ariaLabel:i.default.string};t.Z=function(){var e=(0,l.useState)("Form 1"),t=(0,o.default)(e,2),n=t[0],a=t[1],r=(0,l.useState)([]),i=(0,o.default)(r,2),m=i[0],c=i[1];function s(e){a(e)}return l.default.createElement("div",null,l.default.createElement("h2",null,"Form Switcher"),l.default.createElement("p",null,"Custom logic has been implemented to prevent navigation altogether when NavigationPrompts are present."),l.default.createElement("button",{type:"button",disabled:"Form 1"===n||m.length,onClick:s.bind(null,"Form 1")},"Switch to Form 1"),l.default.createElement("button",{type:"button",disabled:"Form 2"===n||m.length,onClick:s.bind(null,"Form 2")},"Switch to Form 2"),l.default.createElement(u.NavigationPromptCheckpoint,{onPromptChange:function(e){c(e)}},l.default.createElement(p,{title:n,key:n,ariaLabel:n})))}},55619:function(e,t,n){n.r(t),n.d(t,{default:function(){return _}});var a=n(67294),r=n(81254),o=n(4101),l=n(79213),i=["components"];function u(){return u=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},u.apply(this,arguments)}function m(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c={};function p(e){var t=e.components,n=m(e,i);return(0,r.mdx)("wrapper",u({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React, { useState } from 'react';\nimport PropTypes from 'prop-types';\nimport NavigationPrompt, { NavigationPromptCheckpoint } from 'terra-navigation-prompt';\n\nconst Form = ({ title, ariaLabel }) => {\n  const [inputValue, setInputValue] = useState('');\n\n  return (\n    <div>\n      <p>{title}</p>\n      {inputValue.length ? <NavigationPrompt description={title} /> : undefined}\n      <input\n        type=\"text\"\n        aria-label={ariaLabel}\n        onChange={(event) => {\n          setInputValue(event.target.value);\n        }}\n        value={inputValue}\n      />\n      <button\n        type=\"button\"\n        onClick={() => {\n          setInputValue('');\n        }}\n      >\n        Submit\n      </button>\n    </div>\n  );\n};\n\nForm.propTypes = {\n  title: PropTypes.string,\n  ariaLabel: PropTypes.string,\n};\n\nconst FormSwitcher = () => {\n  const [activeForm, setActiveForm] = useState('Form 1');\n  const [activePrompts, setActivePrompts] = useState([]);\n\n  function onSwitchForm(formKey) {\n    setActiveForm(formKey);\n  }\n\n  return (\n    <div>\n      <h2>Form Switcher</h2>\n      <p>Custom logic has been implemented to prevent navigation altogether when NavigationPrompts are present.</p>\n      <button\n        type=\"button\"\n        disabled={activeForm === 'Form 1' || activePrompts.length}\n        onClick={onSwitchForm.bind(null, 'Form 1')}\n      >\n        Switch to Form 1\n      </button>\n      <button\n        type=\"button\"\n        disabled={activeForm === 'Form 2' || activePrompts.length}\n        onClick={onSwitchForm.bind(null, 'Form 2')}\n      >\n        Switch to Form 2\n      </button>\n      <NavigationPromptCheckpoint\n        onPromptChange={(prompts) => {\n          setActivePrompts(prompts);\n        }}\n      >\n        <Form title={activeForm} key={activeForm} ariaLabel={activeForm} />\n      </NavigationPromptCheckpoint>\n    </div>\n  );\n};\n\nexport default FormSwitcher;\n\n")))}p.isMDXComponent=!0;var s=n(49271),d=function(e){var t=e.title,n=e.description,r=e.isExpanded;return a.createElement(s.Z,{title:t||"Implementation Guide Part 2",description:n,example:a.createElement(l.Z,null),exampleSrc:a.createElement(p,null),isExpanded:r})},f=["components"];function v(){return v=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},v.apply(this,arguments)}function g(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var b={},h="wrapper";function _(e){var t=e.components,n=g(e,f);return(0,r.mdx)(h,v({},b,n,{components:t,mdxType:"MDXLayout"}),(0,r.mdx)(o.C,{mdxType:"Badge"}),(0,r.mdx)("h1",{id:"terra-navigation-prompt---implementation-guide"},"Terra Navigation Prompt - Implementation Guide"),(0,r.mdx)("h2",{id:"part-3---implementing-a-custom-prompt-solution"},"Part 3 - Implementing a Custom Prompt Solution"),(0,r.mdx)("p",null,"At this point, we realize that we do not want to ",(0,r.mdx)("strong",{parentName:"p"},"ever")," allow users to navigate away from a Form with unsaved state. We can do that by using the NavigationPromptCheckpoint's ",(0,r.mdx)("inlineCode",{parentName:"p"},"onPromptChange")," prop."),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-diff"},"- import React, { useState, useRef } from 'react';\n+ import React, { useState } from 'react';\nimport PropTypes from 'prop-types';\nimport NavigationPrompt, { NavigationPromptCheckpoint } from 'terra-navigation-prompt';\n\nconst Form = ({ title }) => {\n  const [inputValue, setInputValue] = useState('');\n\n  return (\n    <div>\n      <p>{title}</p>\n      {inputValue.length ? <NavigationPrompt description={title} /> : undefined}\n      <input\n        type=\"text\"\n        onChange={(event) => {\n          setInputValue(event.target.value);\n        }}\n        value={inputValue}\n      />\n      <button\n        type=\"button\"\n        onClick={() => {\n          setInputValue('');\n        }}\n      >\n        Submit\n      </button>\n    </div>\n  );\n};\n\nconst FormSwitcher = () => {\n  const [activeForm, setActiveForm] = useState('Form 1');\n+ const [activePrompts, setActivePrompts] = useState([]);\n\n  function onSwitchForm(formKey) {\n-   formCheckpointRef.current.resolvePrompts({\n-     title: 'Descriptive Notification Prompt Title',\n-     startMessage: 'Descriptive Notification Prompt Message',\n-     rejectButtonText: `Descriptive Reject Button Action`,\n-     acceptButtonText: 'Descriptive Accept Button Action',\n-     buttonOrder: 'acceptFirst',\n-   }).then(() => {\n      setActiveForm(formKey);\n-   });\n  }\n\n  return (\n    <div>\n      <h2>Form Switcher</h2>\n-     <p>The user will be prompted with the provided messaging when Forms are switched with unsaved changes present.</p>\n+     <p>Custom logic has been implemented to prevent navigation altogether when NavigationPrompts are present.</p>\n      <button\n        type=\"button\"\n-       disabled={activeForm === 'Form 1'}\n+       disabled={activeForm === 'Form 1' || activePrompts.length}\n        onClick={onSwitchForm.bind(null, 'Form 1')}\n      >\n        Switch to Form 1\n      </button>\n      <button\n        type=\"button\"\n-       disabled={activeForm === 'Form 2'}\n+       disabled={activeForm === 'Form 2' || activePrompts.length}\n        onClick={onSwitchForm.bind(null, 'Form 2')}\n      >\n        Switch to Form 2\n      </button>\n      <NavigationPromptCheckpoint\n-       ref={formCheckpointRef}\n+       onPromptChange={(prompts) => {\n+         setActivePrompts(prompts);\n+       }}\n      >\n        <Form title={activeForm} key={activeForm} />\n      </NavigationPromptCheckpoint>\n    </div>\n  );\n};\n")),(0,r.mdx)("p",null,"We remove the ",(0,r.mdx)("inlineCode",{parentName:"p"},"ref")," from the NavigationPromptCheckpoint and instead implement ",(0,r.mdx)("inlineCode",{parentName:"p"},"onPromptChange")," to store the currently rendered NavigationPrompt's in the FormSwitcher's state. We disable the 'Switch to' buttons altogether if a NavigationPrompt is detected. We could also use this state to control other navigation-capable components, like client-side routers."),(0,r.mdx)("h2",{id:"examples"},"Examples"),(0,r.mdx)(d,{title:"Part 2 - Implementing a Custom Prompt Handler",mdxType:"ImplementationGuidePart2"}))}_.isMDXComponent=!0},4101:function(e,t,n){n.d(t,{C:function(){return o}});var a=n(67294),r=n(22863),o=function(e){var t=e.url;return a.createElement(r.Z,{src:"https://github.com/cerner/terra-framework/tree/main/packages/terra-navigation-prompt",name:"terra-navigation-prompt",version:"1.77.0",url:t})}},17422:function(e,t,n){n.r(t),t.default={badge:"Badges-module__badge___vex-+","badge-container":"Badges-module__badge-container___B13Mv","badge-name":"Badges-module__badge-name___jkN0m","badge-version":"Badges-module__badge-version___agZ+P"}},53560:function(e,t,n){n.r(t),t.default={"clinical-lowlight-theme":"ExampleTemplate-module__clinical-lowlight-theme___rBbtD","orion-fusion-theme":"ExampleTemplate-module__orion-fusion-theme___GzA23",template:"ExampleTemplate-module__template___a4uPk",header:"ExampleTemplate-module__header___iFXV3",content:"ExampleTemplate-module__content___48m4Q",description:"ExampleTemplate-module__description___NwBJo",footer:"ExampleTemplate-module__footer___GpSoG","button-container":"ExampleTemplate-module__button-container___rAD11",css:"ExampleTemplate-module__css___+jtk1",code:"ExampleTemplate-module__code___7rC6C","css-toggle":"ExampleTemplate-module__css-toggle___chHK7","code-toggle":"ExampleTemplate-module__code-toggle___TGlE-","is-selected":"ExampleTemplate-module__is-selected___0BYwS",item:"ExampleTemplate-module__item___8FTQq",chevron:"ExampleTemplate-module__chevron___VbY7N",title:"ExampleTemplate-module__title___r+nbJ","dynamic-content":"ExampleTemplate-module__dynamic-content___k+1H7"}},33864:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=o(n(67294)),r=o(n(99139));function o(e){return e&&e.__esModule?e:{default:e}}function l(){return l=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},l.apply(this,arguments)}var i=function(e){var t=l({},e);return a.default.createElement(r.default,t,a.default.createElement("path",{d:"M10.3 24 33.8 0l3.9 3.8L18 24l19.7 20.2-3.9 3.8z"}))};i.displayName="IconChevronLeft",i.defaultProps={viewBox:"0 0 48 48","data-name":"Layer 1",xmlns:"http://www.w3.org/2000/svg"};var u=i;t.default=u}}]);