"use strict";(self.webpackChunkterra_ui=self.webpackChunkterra_ui||[]).push([[11300,83532,61152,38768,16388,73056,50676,28296,46504,5912,4484,82104,96528,74148,51768,7004,84624,62240,39860,95100,76480,54100],{11416:function(e,t,n){var a=n(22411);t.c=void 0;var r=a(n(11504)),o=a(n(3268)),i=a(n(74824)),l=a(n(58112)),c=i.default.bind(l.default),u={name:o.default.string.isRequired,src:o.default.string,url:o.default.string,version:o.default.string.isRequired},p=function(e){var t=e.src,n=e.name,a=e.url,o=e.version,i=r.default.createElement("a",{className:c("badge"),href:a||"https://www.npmjs.org/package/".concat(n,"/v/").concat(o)},r.default.createElement("span",{className:c("badge-name")},a?"package":"npm"),r.default.createElement("span",{className:c("badge-version")},"v".concat(o))),l=t?r.default.createElement("a",{className:c("badge"),href:t},r.default.createElement("span",{className:c("badge-name")},"github"),r.default.createElement("span",{className:c("badge-version")},"source")):void 0;return r.default.createElement("div",{className:c("badge-container")},i,l)};p.propTypes=u;t.c=p},33792:function(e,t,n){var a=n(22411),r=n(59848);t.c=void 0;var o=a(n(97936)),i=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=r(e)&&"function"!=typeof e)return{default:e};var n=f(t);if(n&&n.has(e))return n.get(e);var a={__proto__:null},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if("default"!==i&&Object.prototype.hasOwnProperty.call(e,i)){var l=o?Object.getOwnPropertyDescriptor(e,i):null;l&&(l.get||l.set)?Object.defineProperty(a,i,l):a[i]=e[i]}return a.default=e,n&&n.set(e,a),a}(n(11504)),l=a(n(3268)),c=a(n(74824)),u=n(93048),p=a(n(72672)),s=a(n(3308)),m=n(97196),d=a(n(86896));function f(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(f=function(e){return e?n:t})(e)}var h=c.default.bind(d.default),v={example:l.default.element,exampleSrc:l.default.element,exampleCssSrc:l.default.element,title:l.default.string,description:l.default.node,isExpanded:l.default.bool},g=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","true")},b=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","false")},_=function(e){var t=e.example,n=e.exampleSrc,a=e.exampleCssSrc,r=e.title,l=e.description,c=e.isExpanded,d=(0,i.useState)(c),f=(0,o.default)(d,2),v=f[0],_=f[1],w=(0,i.useState)(!1),y=(0,o.default)(w,2),x=y[0],N=y[1],P=i.default.useContext(u.ThemeContext),F=void 0!==a,E=function(){N(!x),v&&_(!v)},k=function(){_(!v),x&&N(!x)},T=function(e,t){e.nativeEvent.keyCode!==m.KEY_SPACE&&e.nativeEvent.keyCode!==m.KEY_RETURN||(e.preventDefault(),t())};return i.default.createElement("div",{className:h("template",P.className)},i.default.createElement("div",{className:h("header")},r&&i.default.createElement("h2",{className:h("title")},r)),i.default.createElement("div",{className:h("content")},l&&i.default.createElement("div",{className:h("description")},l),t),i.default.createElement("div",{className:h("footer")},n?i.default.createElement("div",{className:h("button-container")},F&&i.default.createElement("button",{type:"button",className:h("css-toggle","item",{"is-selected":x}),onClick:E,onKeyDown:function(e){return T(e,E)},onBlur:g,onMouseDown:b,tabIndex:0,"data-focus-styles-enabled":!0},i.default.createElement(p.default,{className:h("chevron")}),i.default.createElement("span",null,"CSS"),i.default.createElement(s.default,{className:h("chevron")})),i.default.createElement("button",{type:"button",className:h("code-toggle","item",{"is-selected":v}),onClick:k,onKeyDown:function(e){return T(e,k)},onBlur:g,onMouseDown:b,tabIndex:0,"data-focus-styles-enabled":!0},i.default.createElement(p.default,{className:h("chevron")}),i.default.createElement("span",null,"Code"),i.default.createElement(s.default,{className:h("chevron")}))):null,i.default.createElement("div",null,x&&i.default.createElement("div",{className:h("css")},a),v&&i.default.createElement("div",{className:h("code")},n))))};_.propTypes=v,_.defaultProps={isExpanded:!1};t.c=_},91060:function(e,t,n){var a=n(22411),r=n(59848);t.c=void 0;var o=a(n(97936)),i=p(n(11504)),l=a(n(3268)),c=p(n(32224));function u(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(u=function(e){return e?n:t})(e)}function p(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=r(e)&&"function"!=typeof e)return{default:e};var n=u(t);if(n&&n.has(e))return n.get(e);var a={__proto__:null},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if("default"!==i&&Object.prototype.hasOwnProperty.call(e,i)){var l=o?Object.getOwnPropertyDescriptor(e,i):null;l&&(l.get||l.set)?Object.defineProperty(a,i,l):a[i]=e[i]}return a.default=e,n&&n.set(e,a),a}var s=function(e){var t=e.title,n=e.ariaLabel,a=(0,i.useState)(""),r=(0,o.default)(a,2),l=r[0],u=r[1];return i.default.createElement("div",null,i.default.createElement("p",null,t),l.length?i.default.createElement(c.default,{description:t}):void 0,i.default.createElement("input",{type:"text","aria-label":n,onChange:function(e){u(e.target.value)},value:l}),i.default.createElement("button",{type:"button",onClick:function(){u("")}},"Submit"))};s.propTypes={title:l.default.string,ariaLabel:l.default.string};t.c=function(){var e=(0,i.useState)("Form 1"),t=(0,o.default)(e,2),n=t[0],a=t[1],r=(0,i.useRef)();function l(e){r.current.resolvePrompts({title:"Descriptive Notification Prompt Title",startMessage:"Descriptive Notification Prompt Message",rejectButtonText:"Descriptive Reject Button Action",acceptButtonText:"Descriptive Accept Button Action",buttonOrder:"acceptFirst"}).then((function(){a(e)})).catch((function(){}))}return i.default.createElement("div",null,i.default.createElement("h2",null,"Form Switcher"),i.default.createElement("p",null,"The user will be prompted with the provided messaging when Forms are switched with unsaved changes present."),i.default.createElement("button",{type:"button",disabled:"Form 1"===n,onClick:l.bind(null,"Form 1")},"Switch to Form 1"),i.default.createElement("button",{type:"button",disabled:"Form 2"===n,onClick:l.bind(null,"Form 2")},"Switch to Form 2"),i.default.createElement(c.NavigationPromptCheckpoint,{ref:r},i.default.createElement(s,{title:n,key:n,ariaLabel:n})))}},11300:function(e,t,n){n.r(t),n.d(t,{default:function(){return _}});var a=n(11504),r=n(69788),o=n(10448),i=n(91060),l=["components"];function c(){return c=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},c.apply(this,arguments)}function u(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p={};function s(e){var t=e.components,n=u(e,l);return(0,r.mdx)("wrapper",c({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React, { useState, useRef } from 'react';\nimport PropTypes from 'prop-types';\nimport NavigationPrompt, { NavigationPromptCheckpoint } from 'terra-navigation-prompt';\n\nconst Form = ({ title, ariaLabel }) => {\n  const [inputValue, setInputValue] = useState('');\n\n  return (\n    <div>\n      <p>{title}</p>\n      {inputValue.length ? <NavigationPrompt description={title} /> : undefined}\n      <input\n        type=\"text\"\n        aria-label={ariaLabel}\n        onChange={(event) => {\n          setInputValue(event.target.value);\n        }}\n        value={inputValue}\n      />\n      <button\n        type=\"button\"\n        onClick={() => {\n          setInputValue('');\n        }}\n      >\n        Submit\n      </button>\n    </div>\n  );\n};\n\nForm.propTypes = {\n  title: PropTypes.string,\n  ariaLabel: PropTypes.string,\n};\n\nconst FormSwitcher = () => {\n  const [activeForm, setActiveForm] = useState('Form 1');\n  const formCheckpointRef = useRef();\n\n  function onSwitchForm(formKey) {\n    formCheckpointRef.current.resolvePrompts({\n      title: 'Descriptive Notification Prompt Title',\n      startMessage: 'Descriptive Notification Prompt Message',\n      rejectButtonText: 'Descriptive Reject Button Action',\n      acceptButtonText: 'Descriptive Accept Button Action',\n      buttonOrder: 'acceptFirst',\n    }).then(() => {\n      setActiveForm(formKey);\n    }).catch(() => {\n    });\n  }\n\n  return (\n    <div>\n      <h2>Form Switcher</h2>\n      <p>The user will be prompted with the provided messaging when Forms are switched with unsaved changes present.</p>\n      <button\n        type=\"button\"\n        disabled={activeForm === 'Form 1'}\n        onClick={onSwitchForm.bind(null, 'Form 1')}\n      >\n        Switch to Form 1\n      </button>\n      <button\n        type=\"button\"\n        disabled={activeForm === 'Form 2'}\n        onClick={onSwitchForm.bind(null, 'Form 2')}\n      >\n        Switch to Form 2\n      </button>\n      <NavigationPromptCheckpoint\n        ref={formCheckpointRef}\n      >\n        <Form title={activeForm} key={activeForm} ariaLabel={activeForm} />\n      </NavigationPromptCheckpoint>\n    </div>\n  );\n};\n\nexport default FormSwitcher;\n\n")))}s.isMDXComponent=!0;var m=n(33792),d=function(e){var t=e.title,n=e.description,r=e.isExpanded;return a.createElement(m.c,{title:t||"Implementation Guide Part 1",description:n,example:a.createElement(i.c,null),exampleSrc:a.createElement(s,null),isExpanded:r})},f=["components"];function h(){return h=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},h.apply(this,arguments)}function v(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var g={},b="wrapper";function _(e){var t=e.components,n=v(e,f);return(0,r.mdx)(b,h({},g,n,{components:t,mdxType:"MDXLayout"}),(0,r.mdx)(o.k,{mdxType:"Badge"}),(0,r.mdx)("h1",{id:"terra-navigation-prompt---implementation-guide"},"Terra Navigation Prompt - Implementation Guide"),(0,r.mdx)("h2",{id:"part-1---implementing-the-navigationprompt-and-navigationpromptcheckpoint"},"Part 1 - Implementing the NavigationPrompt and NavigationPromptCheckpoint"),(0,r.mdx)("p",null,"To better notify the user of the Form's transient state, we update the Form to render a NavigationPrompt."),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-diff"},"- import React, { useState } from 'react';\n+ import React, { useState, useRef } from 'react';\nimport PropTypes from 'prop-types';\n+ import NavigationPrompt, { NavigationPromptCheckpoint } from 'terra-navigation-prompt';\n\nconst Form = ({ title }) => {\n  const [inputValue, setInputValue] = useState('');\n\n  return (\n    <div>\n      <p>{title}</p>\n+     {inputValue.length ? <NavigationPrompt description={title} /> : undefined}\n      <input\n        type=\"text\"\n        onChange={(event) => {\n          setInputValue(event.target.value);\n        }}\n        value={inputValue}\n      />\n      <button\n        type=\"button\"\n        onClick={() => {\n          setInputValue('');\n        }}\n      >\n        Submit\n      </button>\n    </div>\n  );\n};\n")),(0,r.mdx)("p",null,"The Form renders the NavigationPrompt when the input has a non-empty value. If it were to render the NavigationPrompt at all times, the user would be prompted inappropriately when the input is empty."),(0,r.mdx)("p",null,"The Form provides its ",(0,r.mdx)("inlineCode",{parentName:"p"},"title")," prop as the NavigationPrompt's ",(0,r.mdx)("inlineCode",{parentName:"p"},"description")," prop to give it an identifying feature. The ",(0,r.mdx)("inlineCode",{parentName:"p"},"description")," doesn't need to be unique across all rendered NavigationPrompts, but it should give our users a good idea of where the unsaved changes are at. For our purposes, the Form's ",(0,r.mdx)("inlineCode",{parentName:"p"},"title")," is sufficient."),(0,r.mdx)("p",null,"Now that the Form is rendering a NavigationPrompt, the FormSwitcher needs to render a NavigationPromptCheckpoint around the Form to detect that prompt."),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-diff"},"const FormSwitcher = () => {\n  const [activeForm, setActiveForm] = useState('Form 1');\n+ const formCheckpointRef = useRef();\n\n  function onSwitchForm(formKey) {\n+   formCheckpointRef.current.resolvePrompts({\n+     title: 'Descriptive Notification Prompt Title',\n+     startMessage: 'Descriptive Notification Prompt Message',\n+     rejectButtonText: `Descriptive Reject Button Action`,\n+     acceptButtonText: 'Descriptive Accept Button Action',\n+     buttonOrder: 'acceptFirst',\n+   }).then(() => {\n      setActiveForm(formKey);\n+   });\n  }\n\n  return (\n    <div>\n      <h2>Form Switcher</h2>\n-     <p>The NavigationPrompt is not implemented, so no prompting occurs.</p>\n+     <p>The user will be prompted with the provided messaging when Forms are switched with unsaved changes present.</p>\n      <button\n        type=\"button\"\n        disabled={activeForm === 'Form 1'}\n        onClick={onSwitchForm.bind(null, 'Form 1')}\n      >\n        Switch to Form 1\n      </button>\n      <button\n        type=\"button\"\n        disabled={activeForm === 'Form 2'}\n        onClick={onSwitchForm.bind(null, 'Form 2')}\n      >\n        Switch to Form 2\n      </button>\n+     <NavigationPromptCheckpoint\n+       ref={formCheckpointRef}\n+     >\n        <Form title={activeForm} key={activeForm} />\n+      </NavigationPromptCheckpoint>\n    </div>\n  );\n};\n")),(0,r.mdx)("p",null,"The FormSwitcher gets a ref to the NavigationPromptCheckpoint; this example uses the ",(0,r.mdx)("a",{parentName:"p",href:"https://reactjs.org/docs/hooks-reference.html#useref"},"useRef hook"),", but any of the supported ref retrieval methods would be sufficient. The FormSwitcher then uses this ref to call the ",(0,r.mdx)("inlineCode",{parentName:"p"},"resolvePrompts")," function when it wants to switch to a new Form."),(0,r.mdx)("p",null,"The ",(0,r.mdx)("inlineCode",{parentName:"p"},"resolvePrompts")," function is an instance function of the NavigationPromptCheckpoint. When ",(0,r.mdx)("inlineCode",{parentName:"p"},"resolvePrompts")," is called, the NavigationPromptCheckpoint will render a NotificationDialog and return a ",(0,r.mdx)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises"},"Promise"),". The Promise will be resolved immediately if no NavigationPrompts have been rendered below the checkpoint, so we don't need to check for the presence of any NavigationPrompts before we call it. The Promise will also resolve if a user presses the NotificationDialog's accept action button. The Promise will reject if a user presses the NotificationDialog's reject action button. In our example, we only update the FormSwitcher's state when the Promise is resolved."),(0,r.mdx)("p",null,"With those changes in place, the FormSwitcher will prompt the user for confirmation when they attempt to switch away from Forms with unsaved data."),(0,r.mdx)("h2",{id:"example"},"Example"),(0,r.mdx)(d,{title:"Part 1 - Implementing the NavigationPrompt and NavigationPromptCheckpoint",mdxType:"ImplementationGuidePart1"}))}_.isMDXComponent=!0},10448:function(e,t,n){n.d(t,{k:function(){return o}});var a=n(11504),r=n(11416),o=function(e){var t=e.url;return a.createElement(r.c,{src:"https://github.com/cerner/terra-framework/tree/main/packages/terra-navigation-prompt",name:"terra-navigation-prompt",version:"1.82.0",url:t})}},58112:function(e,t,n){n.r(t),t.default={badge:"Badges-module__badge___vex-+","badge-container":"Badges-module__badge-container___B13Mv","badge-name":"Badges-module__badge-name___jkN0m","badge-version":"Badges-module__badge-version___agZ+P"}},86896:function(e,t,n){n.r(t),t.default={"clinical-lowlight-theme":"ExampleTemplate-module__clinical-lowlight-theme___rBbtD","orion-fusion-theme":"ExampleTemplate-module__orion-fusion-theme___GzA23",template:"ExampleTemplate-module__template___a4uPk",header:"ExampleTemplate-module__header___iFXV3",content:"ExampleTemplate-module__content___48m4Q",description:"ExampleTemplate-module__description___NwBJo",footer:"ExampleTemplate-module__footer___GpSoG","button-container":"ExampleTemplate-module__button-container___rAD11",css:"ExampleTemplate-module__css___+jtk1",code:"ExampleTemplate-module__code___7rC6C","css-toggle":"ExampleTemplate-module__css-toggle___chHK7","code-toggle":"ExampleTemplate-module__code-toggle___TGlE-","is-selected":"ExampleTemplate-module__is-selected___0BYwS",item:"ExampleTemplate-module__item___8FTQq",chevron:"ExampleTemplate-module__chevron___VbY7N",title:"ExampleTemplate-module__title___r+nbJ","dynamic-content":"ExampleTemplate-module__dynamic-content___k+1H7"}},72672:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=o(n(11504)),r=o(n(22728));function o(e){return e&&e.__esModule?e:{default:e}}function i(){return i=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},i.apply(this,arguments)}var l=function(e){var t=i({},e);return a.default.createElement(r.default,t,a.default.createElement("path",{d:"M10.3 24 33.8 0l3.9 3.8L18 24l19.7 20.2-3.9 3.8z"}))};l.displayName="IconChevronLeft",l.defaultProps={viewBox:"0 0 48 48","data-name":"Layer 1",xmlns:"http://www.w3.org/2000/svg"};t.default=l}}]);