"use strict";(self.webpackChunkterra_ui=self.webpackChunkterra_ui||[]).push([[92681,45627,85565,3353,5161,45865,85355,16835,3193,4845,46647,85161,38681,15318,40411,18101,38443,11264,34319,20116,33609],{67459:function(e,t,n){function i(e){return i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},i(e)}t.Z=void 0;var o=d(n(67294)),a=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=i(e)&&"function"!=typeof e)return{default:e};var n=u(t);if(n&&n.has(e))return n.get(e);var o={__proto__:null},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var r in e)if("default"!==r&&Object.prototype.hasOwnProperty.call(e,r)){var c=a?Object.getOwnPropertyDescriptor(e,r):null;c&&(c.get||c.set)?Object.defineProperty(o,r,c):o[r]=e[r]}return o.default=e,n&&n.set(e,o),o}(n(93670)),r=n(34261),c=d(n(47166)),s=d(n(78862)),l=d(n(25266));function u(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(u=function(e){return e?n:t})(e)}function d(e){return e&&e.__esModule?e:{default:e}}function p(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,(a=o.key,r=void 0,r=function(e,t){if("object"!==i(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var o=n.call(e,t||"default");if("object"!==i(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(a,"string"),"symbol"===i(r)?r:String(r)),o)}var a,r}function m(e,t){return m=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},m(e,t)}function f(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,o=h(e);if(t){var a=h(this).constructor;n=Reflect.construct(o,arguments,a)}else n=o.apply(this,arguments);return function(e,t){if(t&&("object"===i(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return y(e)}(this,n)}}function y(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function h(e){return h=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},h(e)}var b=c.default.bind(l.default),S=function(e){return o.default.createElement(a.Subsection,{key:e.key,title:e.title},e.childItems.map((function(e){return t=e,o.default.createElement(a.Item,{key:t.key},o.default.createElement(r.Placeholder,{title:t.title,className:b("placeholder")}));var t})))},k=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&m(e,t)}(c,e);var t,n,i,r=f(c);function c(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,c),(t=r.call(this,e)).createSection=t.createSection.bind(y(t)),t.createSections=t.createSections.bind(y(t)),t.handleSectionSelection=t.handleSectionSelection.bind(y(t)),t.state={collapsedKeys:[]},t}return t=c,(n=[{key:"handleSectionSelection",value:function(e,t){e.preventDefault(),this.setState((function(e){return{collapsedKeys:a.Utils.updatedMultiSelectedKeys(e.collapsedKeys,t.key)}}))}},{key:"createSection",value:function(e){var t=this.state.collapsedKeys.indexOf(e.key)>=0;return o.default.createElement(a.Section,{key:e.key,title:e.title,isCollapsed:t,isCollapsible:!0,metaData:{key:e.key},onSelect:this.handleSectionSelection},!t&&e.childItems.map((function(e){return S(e)})))}},{key:"createSections",value:function(e){var t=this;return e.map((function(e){return t.createSection(e)}))}},{key:"render",value:function(){return o.default.createElement(a.default,{dividerStyle:"standard"},this.createSections(s.default))}}])&&p(t.prototype,n),i&&p(t,i),Object.defineProperty(t,"prototype",{writable:!1}),c}(o.default.Component);t.Z=k},49630:function(e,t,n){function i(e){return i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},i(e)}t.Z=void 0;var o=d(n(67294)),a=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=i(e)&&"function"!=typeof e)return{default:e};var n=u(t);if(n&&n.has(e))return n.get(e);var o={__proto__:null},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var r in e)if("default"!==r&&Object.prototype.hasOwnProperty.call(e,r)){var c=a?Object.getOwnPropertyDescriptor(e,r):null;c&&(c.get||c.set)?Object.defineProperty(o,r,c):o[r]=e[r]}return o.default=e,n&&n.set(e,o),o}(n(93670)),r=n(34261),c=d(n(47166)),s=d(n(78862)),l=d(n(25266));function u(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(u=function(e){return e?n:t})(e)}function d(e){return e&&e.__esModule?e:{default:e}}function p(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,(a=o.key,r=void 0,r=function(e,t){if("object"!==i(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var o=n.call(e,t||"default");if("object"!==i(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(a,"string"),"symbol"===i(r)?r:String(r)),o)}var a,r}function m(e,t){return m=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},m(e,t)}function f(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,o=h(e);if(t){var a=h(this).constructor;n=Reflect.construct(o,arguments,a)}else n=o.apply(this,arguments);return function(e,t){if(t&&("object"===i(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return y(e)}(this,n)}}function y(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function h(e){return h=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},h(e)}var b=c.default.bind(l.default),S=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&m(e,t)}(l,e);var t,n,i,c=f(l);function l(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,l),(t=c.call(this,e)).createSection=t.createSection.bind(y(t)),t.createSections=t.createSections.bind(y(t)),t.createSubsection=t.createSubsection.bind(y(t)),t.handleSectionSelection=t.handleSectionSelection.bind(y(t)),t.state={collapsedKeys:[]},t}return t=l,(n=[{key:"handleSectionSelection",value:function(e,t){e.preventDefault(),this.setState((function(e){return{collapsedKeys:a.Utils.updatedMultiSelectedKeys(e.collapsedKeys,t.key)}}))}},{key:"createSubsection",value:function(e){var t=this.state.collapsedKeys.indexOf(e.key)>=0;return o.default.createElement(a.Subsection,{key:e.key,title:e.title,isCollapsed:t,isCollapsible:!0,metaData:{key:e.key},onSelect:this.handleSectionSelection},!t&&e.childItems.map((function(e){return t=e,o.default.createElement(a.Item,{key:t.key},o.default.createElement(r.Placeholder,{title:t.title,className:b("placeholder")}));var t})))}},{key:"createSection",value:function(e){var t=this;return o.default.createElement(a.Section,{key:e.key,title:e.title},e.childItems.map((function(e){return t.createSubsection(e)})))}},{key:"createSections",value:function(e){var t=this;return e.map((function(e){return t.createSection(e)}))}},{key:"render",value:function(){return o.default.createElement(a.default,{dividerStyle:"standard"},this.createSections(s.default))}}])&&p(t.prototype,n),i&&p(t,i),Object.defineProperty(t,"prototype",{writable:!1}),l}(o.default.Component);t.Z=S},78862:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;t.default=[{title:"Section 0",key:"unique-key-0",childItems:[{title:"Subsection 0-0",key:"unique-key-0-0",childItems:[{title:"Item 0-0-0",key:"unique-key-0-0-0"},{title:"Item 0-0-1",key:"unique-key-0-0-1"},{title:"Item 0-0-2",key:"unique-key-0-0-2"}]},{title:"Subsection 0-1",key:"unique-key-0-1",childItems:[{title:"Item 0-1-0",key:"unique-key-0-1-0"},{title:"Item 0-1-1",key:"unique-key-0-1-1"},{title:"Item 0-1-2",key:"unique-key-0-1-2"}]}]},{title:"Section 1",key:"unique-key-1",childItems:[{title:"Subsection 1-0",key:"unique-key-1-0",childItems:[{title:"Item 1-0-0",key:"unique-key-1-0-0"},{title:"Item 1-0-1",key:"unique-key-1-0-1"},{title:"Item 1-0-2",key:"unique-key-1-0-2"}]},{title:"Subsection 1-1",key:"unique-key-1-1",childItems:[{title:"Item 1-1-0",key:"unique-key-1-1-0"},{title:"Item 1-1-1",key:"unique-key-1-1-1"},{title:"Item 1-1-2",key:"unique-key-1-1-2"}]}]}]},77977:function(e,t,n){n.r(t),n.d(t,{default:function(){return j}});var i=n(67294),o=n(81254),a=n(30999),r=n(67459),c=["components"];function s(){return s=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},s.apply(this,arguments)}function l(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u={};function d(e){var t=e.components,n=l(e,c);return(0,o.mdx)("wrapper",s({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport List, {\n  Item,\n  Section,\n  Subsection,\n  Utils,\n} from 'terra-list';\n\nimport { Placeholder } from '@cerner/terra-docs';\nimport classNames from 'classnames/bind';\nimport mockData from './mock-data/mock-section-sub';\nimport styles from '../example/ListDocCommon.module.scss';\n\nconst cx = classNames.bind(styles);\n\nconst createListItem = itemData => (\n  <Item key={itemData.key}>\n    <Placeholder title={itemData.title} className={cx('placeholder')} />\n  </Item>\n);\n\nconst createSubsection = subsectionData => (\n  <Subsection\n    key={subsectionData.key}\n    title={subsectionData.title}\n  >\n    {subsectionData.childItems.map(childItem => createListItem(childItem))}\n  </Subsection>\n);\n\nclass SectionWithSubsection1 extends React.Component {\n  constructor(props) {\n    super(props);\n    this.createSection = this.createSection.bind(this);\n    this.createSections = this.createSections.bind(this);\n    this.handleSectionSelection = this.handleSectionSelection.bind(this);\n    this.state = { collapsedKeys: [] };\n  }\n\n  handleSectionSelection(event, metaData) {\n    event.preventDefault();\n\n    this.setState(state => ({ collapsedKeys: Utils.updatedMultiSelectedKeys(state.collapsedKeys, metaData.key) }));\n  }\n\n  createSection(sectionData) {\n    const isCollapsed = this.state.collapsedKeys.indexOf(sectionData.key) >= 0;\n    return (\n      <Section\n        key={sectionData.key}\n        title={sectionData.title}\n        isCollapsed={isCollapsed}\n        isCollapsible\n        metaData={{ key: sectionData.key }}\n        onSelect={this.handleSectionSelection}\n      >\n        {!isCollapsed && sectionData.childItems.map(childItem => createSubsection(childItem))}\n      </Section>\n    );\n  }\n\n  createSections(data) {\n    return data.map(section => this.createSection(section));\n  }\n\n  render() {\n    return (\n      <List dividerStyle=\"standard\">\n        {this.createSections(mockData)}\n      </List>\n    );\n  }\n}\n\nexport default SectionWithSubsection1;\n\n")))}d.isMDXComponent=!0;var p=n(49271),m=n(63443),f=function(e){var t=e.title,n=e.description,o=e.isExpanded;return i.createElement(p.Z,{title:t||"Section With Subsection 1",description:n,example:i.createElement(r.Z,null),exampleCssSrc:i.createElement(m.Z,null),exampleSrc:i.createElement(d,null),isExpanded:o})},y=n(49630),h=["components"];function b(){return b=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},b.apply(this,arguments)}function S(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var k={};function v(e){var t=e.components,n=S(e,h);return(0,o.mdx)("wrapper",b({},k,n,{components:t,mdxType:"MDXLayout"}),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport List, {\n  Item,\n  Section,\n  Subsection,\n  Utils,\n} from 'terra-list';\nimport { Placeholder } from '@cerner/terra-docs';\nimport classNames from 'classnames/bind';\nimport mockData from './mock-data/mock-section-sub';\nimport styles from '../example/ListDocCommon.module.scss';\n\nconst cx = classNames.bind(styles);\n\nconst createListItem = itemData => (\n  <Item key={itemData.key}>\n    <Placeholder title={itemData.title} className={cx('placeholder')} />\n  </Item>\n);\n\nclass SectionWithSubsection2 extends React.Component {\n  constructor(props) {\n    super(props);\n    this.createSection = this.createSection.bind(this);\n    this.createSections = this.createSections.bind(this);\n    this.createSubsection = this.createSubsection.bind(this);\n    this.handleSectionSelection = this.handleSectionSelection.bind(this);\n    this.state = { collapsedKeys: [] };\n  }\n\n  handleSectionSelection(event, metaData) {\n    event.preventDefault();\n\n    this.setState(state => ({ collapsedKeys: Utils.updatedMultiSelectedKeys(state.collapsedKeys, metaData.key) }));\n  }\n\n  createSubsection(subsectionData) {\n    const isCollapsed = this.state.collapsedKeys.indexOf(subsectionData.key) >= 0;\n    return (\n      <Subsection\n        key={subsectionData.key}\n        title={subsectionData.title}\n        isCollapsed={isCollapsed}\n        isCollapsible\n        metaData={{ key: subsectionData.key }}\n        onSelect={this.handleSectionSelection}\n      >\n        {!isCollapsed && subsectionData.childItems.map(childItem => createListItem(childItem))}\n      </Subsection>\n    );\n  }\n\n  createSection(sectionData) {\n    return (\n      <Section\n        key={sectionData.key}\n        title={sectionData.title}\n      >\n        {sectionData.childItems.map(childItem => this.createSubsection(childItem))}\n      </Section>\n    );\n  }\n\n  createSections(data) {\n    return data.map(section => this.createSection(section));\n  }\n\n  render() {\n    return (\n      <List dividerStyle=\"standard\">\n        {this.createSections(mockData)}\n      </List>\n    );\n  }\n}\n\nexport default SectionWithSubsection2;\n\n")))}v.isMDXComponent=!0;var x=function(e){var t=e.title,n=e.description,o=e.isExpanded;return i.createElement(p.Z,{title:t||"Section With Subsection 2",description:n,example:i.createElement(y.Z,null),exampleCssSrc:i.createElement(m.Z,null),exampleSrc:i.createElement(v,null),isExpanded:o})},g=["components"];function D(){return D=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},D.apply(this,arguments)}function w(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var O={},I="wrapper";function j(e){var t=e.components,n=w(e,g);return(0,o.mdx)(I,D({},O,n,{components:t,mdxType:"MDXLayout"}),(0,o.mdx)(a.C,{mdxType:"Badge"}),(0,o.mdx)("h1",{id:"terra-list---sections-with-subsections"},"Terra List - Sections with Subsections"),(0,o.mdx)("p",null,"With the inclusion of sections in the list, there are two recommended patterns for creating nested collapsible sections. First is collapsible sections and static subsections, and the second is static sections and collapsible subsections. The guidance from UX is to only use collapsible sections or collapsible subsections in a list, but not both."),(0,o.mdx)("h2",{id:"state-management"},"State Management"),(0,o.mdx)("p",null,"As section and subsection have the same API, we'll be walking through the expectation of a collapsible section in only one pattern."),(0,o.mdx)("p",null,"First defaulting our state to an empty array in the constructor. "),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-diff"},"class MyList extends React.Component {\n  constructor(props) {\n    super(props);\n\n+    this.state = { collapsedKeys: [] };\n  }\n  \n  render() {\n    return (\n    );\n  }\n}\n")),(0,o.mdx)("p",null,"Next creating an event handler callback method to pass to the section's ",(0,o.mdx)("inlineCode",{parentName:"p"},"onSelect")," prop. The ",(0,o.mdx)("inlineCode",{parentName:"p"},"onSelect")," will return the metaData prop passed it each section."),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-diff"},"class MyList extends React.Component {\n  constructor(props) {\n    super(props);\n\n    this.state = { collapsedKeys: [] };\n+   this.handleSectionSelection = this.handleSectionSelection.bind(this)\n  }\n  \n+  handleSectionSelection(event, metaData) {\n+\n+  }\n")),(0,o.mdx)("p",null,"As a precaution we can prevent default on the event, in case the list has an ancestor with a listener. This also prevents the browser from auto page scrolling when we are intending to make a selection with the space bar."),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-diff"},"  handleSectionSelection(event, metaData) {\n+    event.preventDefault();\n  }\n")),(0,o.mdx)("p",null,"Terra list comes with additional helpers to manage state, in this case we want to determine if the selection has collapsed or opened the section using the section key in our state. So we use the utility method ",(0,o.mdx)("inlineCode",{parentName:"p"},"updatedMulitSelectedKeys"),", which returns an array of the keys following the addition or removing of the key passed. We then set this as our state."),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-diff"},"  handleSectionSelection(event, metaData) {\n    event.preventDefault();\n+   this.setState(state => ({ collapsedKeys: Utils.updatedMultiSelectedKeys(state.selectedKeys, metaData.key) }));\n  }\n")),(0,o.mdx)("p",null,"Settting state will trigger another render. So in the render method we need to generate our sections with the updated ",(0,o.mdx)("inlineCode",{parentName:"p"},"isCollapsed")," and ",(0,o.mdx)("inlineCode",{parentName:"p"},"isCollapsible")," props. Each section needs a unique key, not necessarily associated to our own key, but it works as well. The list renders flat, so keys need to be unique even if items are placed within sections structurally.\n",(0,o.mdx)("a",{parentName:"p",href:"https://reactjs.org/docs/lists-and-keys.html"},"React List & Key Documentation")),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-diff"},"class MyList extends React.Component {\n  constructor(props) {\n    super(props);\n\n    this.state = { collapsedKeys: [] };\n    this.handleSectionSelection = this.handleSectionSelection.bind(this)\n+   this.createSection = this.createSection.bind(this)\n  }\n  ...\n+ createSection(sectionData) {\n+   return (\n+     <Section\n+       key={sectionData.key}\n+       title={sectionData.title}\n+     >\n+       {sectionData.childItems.map(childItem => createSubsection(childItem))}\n+     </Section>\n+   );\n+ }\n")),(0,o.mdx)("p",null,"Next we need to set up our ",(0,o.mdx)("inlineCode",{parentName:"p"},"metaData")," object with our key value, and attach the ",(0,o.mdx)("inlineCode",{parentName:"p"},"onSelect")," to our handler."),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-diff"},"  createSection(sectionData) {\n    return (\n      <Section\n        key={sectionData.key}\n        title={sectionData.title}\n+       metaData={{ key: sectionData.key }}\n+       onSelect={this.handleSectionSelection}\n      >\n        {sectionData.childItems.map(childItem => createSubsection(childItem))}\n      </Section>\n    );\n  }\n")),(0,o.mdx)("p",null,"For the common collapsible sections we set ",(0,o.mdx)("inlineCode",{parentName:"p"},"isCollapsible")," for all sections."),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-diff"},"  createSection(sectionData) {\n    return (\n      <Section\n        key={sectionData.key}\n        title={sectionData.title}\n+       isCollapsible\n        metaData={{ key: sectionData.key }}\n        onSelect={this.handleSectionSelection}\n      >\n        {sectionData.childItems.map(childItem => createSubsection(childItem))}\n      </Section>\n    );\n  }\n")),(0,o.mdx)("p",null,"Finally we need to check if the section is collapsed. As we support IE10 & 11, we cannot use ",(0,o.mdx)("inlineCode",{parentName:"p"},"contains"),", so we use ",(0,o.mdx)("inlineCode",{parentName:"p"},"indexOf")," to determine if the key is present in our state array. Here we can also avoid rendering collapsed child items and subsections by avoiding the subsequent function calls. Short circuiting the render is not required, as the section can correctly managed the display of the child content, but this will avoid additional javascript cycles looping through and creating child objects. The performance impact of generating child items is minimal, but with large lists it can add up."),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-diff"},"  createSection(sectionData) {\n+   const isCollapsed = this.state.collapsedKeys.indexOf(sectionData.key) >= 0;\n    return (\n      <Section\n        key={sectionData.key}\n        title={sectionData.title}\n+       isCollapsed={isCollapsed}\n        isCollapsible\n        metaData={{ key: sectionData.key }}\n        onSelect={this.handleSectionSelection}\n      >\n-       {sectionData.childItems.map(childItem => createSubsection(childItem))}\n+       {!isCollapsed && sectionData.childItems.map(childItem => createSubsection(childItem))}\n      </Section>\n    );\n")),(0,o.mdx)("p",null,"We can then implement the unpack of our data into our list items."),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-diff"},"  createSection(sectionData) {\n   const isCollapsed = this.state.collapsedKeys.indexOf(sectionData.key) >= 0;\n+  const createListItem = itemData => (\n+    <Item key={itemData.key}>\n+       <Placeholder />\n+    </Item>\n+  );\n\n+  const createSubsection = subsectionData => (\n+     <Subsection\n+       key={subsectionData.key}\n+       title={subsectionData.title}\n+     >\n+       {subsectionData.childItems.map(childItem => createListItem(childItem))}\n+     </Subsection>\n+   );\n    return (\n      <Section\n        key={sectionData.key}\n        title={sectionData.title}\n        isCollapsed={isCollapsed}\n        isCollapsible\n        metaData={{ key: sectionData.key }}\n        onSelect={this.handleSectionSelection}\n      >\n        {!isCollapsed && sectionData.childItems.map(childItem => createSubsection(childItem))}\n      </Section>\n    );\n")),(0,o.mdx)("p",null,"Then we can implement a method to loop through our data and create the section with our methods and call it from our render method."),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-diff"},'class MyList extends React.Component {\n  constructor(props) {\n    super(props);\n\n    this.state = { collapsedKeys: [] };\n    this.handleSectionSelection = this.handleSectionSelection.bind(this)\n    this.createSection = this.createSection.bind(this)\n+   this.createSections = this.createSections.bind(this)\n  }\n  ...\n+ createSections(data) {\n+   return data.map(section => this.createSection(section));\n+ }\n\n  render() {\n    return (\n+     <List dividerStyle="standard">\n+       {this.createSections(mockData)}\n+     </List>\n    );\n  }\n')),(0,o.mdx)("p",null,"  Using these steps we get the following example."),(0,o.mdx)("h2",{id:"examples"},"Examples"),(0,o.mdx)(f,{mdxType:"SectionWithSubsection1"}),(0,o.mdx)(x,{mdxType:"SectionWithSubsection2"}))}j.isMDXComponent=!0}}]);