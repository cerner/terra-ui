"use strict";(self.webpackChunkterra_ui=self.webpackChunkterra_ui||[]).push([[27195,45627,85565,3353,5161,19260,45865,85355,3193,4845,46647,85161,38681,15318,40411,18101,38443],{45699:function(e,t,n){function a(e){return a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a(e)}t.Z=void 0;var i=u(n(67294)),o=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=a(e)&&"function"!=typeof e)return{default:e};var n=d(t);if(n&&n.has(e))return n.get(e);var i={__proto__:null},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var r in e)if("default"!==r&&Object.prototype.hasOwnProperty.call(e,r)){var s=o?Object.getOwnPropertyDescriptor(e,r):null;s&&(s.get||s.set)?Object.defineProperty(i,r,s):i[r]=e[r]}return i.default=e,n&&n.set(e,i),i}(n(93670)),r=n(34261),s=u(n(47166)),l=u(n(205)),c=u(n(25266));function d(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(d=function(e){return e?n:t})(e)}function u(e){return e&&e.__esModule?e:{default:e}}function p(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,(o=i.key,r=void 0,r=function(e,t){if("object"!==a(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var i=n.call(e,t||"default");if("object"!==a(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(o,"string"),"symbol"===a(r)?r:String(r)),i)}var o,r}function m(e,t){return m=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},m(e,t)}function h(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,i=y(e);if(t){var o=y(this).constructor;n=Reflect.construct(i,arguments,o)}else n=i.apply(this,arguments);return function(e,t){if(t&&("object"===a(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return f(e)}(this,n)}}function f(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function y(e){return y=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},y(e)}var S=s.default.bind(c.default),b=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&m(e,t)}(c,e);var t,n,a,s=h(c);function c(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,c),(t=s.call(this,e)).createSection=t.createSection.bind(f(t)),t.createSections=t.createSections.bind(f(t)),t.handleSectionSelection=t.handleSectionSelection.bind(f(t)),t.state={collapsedKeys:[]},t}return t=c,(n=[{key:"handleSectionSelection",value:function(e,t){e.preventDefault(),this.setState((function(e){return{collapsedKeys:o.Utils.updatedMultiSelectedKeys(e.collapsedKeys,t.key)}}))}},{key:"createSection",value:function(e){return i.default.createElement(o.Section,{key:e.key,title:e.title,isCollapsed:this.state.collapsedKeys.indexOf(e.key)>=0,isCollapsible:!0,metaData:{key:e.key},onSelect:this.handleSectionSelection},e.childItems.map((function(e){return t=e,i.default.createElement(o.Item,{key:t.key},i.default.createElement(r.Placeholder,{title:t.title,className:S("placeholder")}));var t})))}},{key:"createSections",value:function(e){var t=this;return e.map((function(e){return t.createSection(e)}))}},{key:"render",value:function(){return i.default.createElement(o.default,null,this.createSections(l.default))}}])&&p(t.prototype,n),a&&p(t,a),Object.defineProperty(t,"prototype",{writable:!1}),c}(i.default.Component);t.Z=b},205:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;t.default=[{title:"Section 0",key:"unique-key-0",childItems:[{title:"Item 0-0",key:"unique-0-0"},{title:"Item 0-1",key:"unique-0-1"},{title:"Item 0-2",key:"unique-0-2"}]},{title:"Section 1",key:"unique-key-1",childItems:[{title:"Item 1-0",key:"unique-1-0"},{title:"Item 1-1",key:"unique1-1"},{title:"Item 1-2",key:"unique-1-2"}]}]},5747:function(e,t,n){n.r(t),n.d(t,{default:function(){return v}});var a=n(67294),i=n(81254),o=n(30999),r=n(45699),s=["components"];function l(){return l=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},l.apply(this,arguments)}function c(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var d={};function u(e){var t=e.components,n=c(e,s);return(0,i.mdx)("wrapper",l({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport List, { Item, Section, Utils } from 'terra-list';\nimport { Placeholder } from '@cerner/terra-docs';\nimport classNames from 'classnames/bind';\nimport mockData from './mock-data/mock-section';\nimport styles from '../example/ListDocCommon.module.scss';\n\nconst cx = classNames.bind(styles);\n\nconst createListItem = itemData => (\n  <Item key={itemData.key}>\n    <Placeholder title={itemData.title} className={cx('placeholder')} />\n  </Item>\n);\n\nclass SectionList extends React.Component {\n  constructor(props) {\n    super(props);\n    this.createSection = this.createSection.bind(this);\n    this.createSections = this.createSections.bind(this);\n    this.handleSectionSelection = this.handleSectionSelection.bind(this);\n    this.state = { collapsedKeys: [] };\n  }\n\n  handleSectionSelection(event, metaData) {\n    event.preventDefault();\n    this.setState(state => ({ collapsedKeys: Utils.updatedMultiSelectedKeys(state.collapsedKeys, metaData.key) }));\n  }\n\n  createSection(sectionData) {\n    return (\n      <Section\n        key={sectionData.key}\n        title={sectionData.title}\n        isCollapsed={this.state.collapsedKeys.indexOf(sectionData.key) >= 0}\n        isCollapsible\n        metaData={{ key: sectionData.key }}\n        onSelect={this.handleSectionSelection}\n      >\n        {sectionData.childItems.map(childItem => createListItem(childItem))}\n      </Section>\n    );\n  }\n\n  createSections(data) {\n    return data.map(section => this.createSection(section));\n  }\n\n  render() {\n    return (\n      <List>\n        {this.createSections(mockData)}\n      </List>\n    );\n  }\n}\n\nexport default SectionList;\n\n")))}u.isMDXComponent=!0;var p=n(49271),m=n(63443),h=function(e){var t=e.title,n=e.description,i=e.isExpanded;return a.createElement(p.Z,{title:t||"Section List",description:n,example:a.createElement(r.Z,null),exampleCssSrc:a.createElement(m.Z,null),exampleSrc:a.createElement(u,null),isExpanded:i})},f=["components"];function y(){return y=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},y.apply(this,arguments)}function S(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var b={},x="wrapper";function v(e){var t=e.components,n=S(e,f);return(0,i.mdx)(x,y({},b,n,{components:t,mdxType:"MDXLayout"}),(0,i.mdx)(o.C,{mdxType:"Badge"}),(0,i.mdx)("h1",{id:"terra-list---sections"},"Terra List - Sections"),(0,i.mdx)("p",null,"List sections are available in both static and collapsible varieties. A list section that is collapsed will remove its children items from the DOM. This improves performance and accessiblilty, but may remove potentional state associated to a mounted list item. If your list item content has additional state, it needs to be stored externally and reapplied when thawed for the next render that shows its section open. Since this render occurs at the same time that a collapsible section state changes, for additional optimization, collapsed sections do not necessarily need to be provided with child items."),(0,i.mdx)("h2",{id:"state-management"},"State Management"),(0,i.mdx)("p",null,"As section and subsection have the same API, we'll be walking through the expectation of a collapsible section in only one pattern."),(0,i.mdx)("p",null,"First defaulting our state to an empty array in the constructor. "),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-diff"},"class MyList extends React.Component {\n  constructor(props) {\n    super(props);\n\n+   this.state = { collapsedKeys: [] };\n  }\n  \n  render() {\n    return (\n    );\n  }\n}\n")),(0,i.mdx)("p",null,"Next creating an event handler callback method to pass to the section's ",(0,i.mdx)("inlineCode",{parentName:"p"},"onSelect")," prop. The ",(0,i.mdx)("inlineCode",{parentName:"p"},"onSelect")," callback will return the metaData prop passed to each section."),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-diff"},"class MyList extends React.Component {\n   constructor(props) {\n    super(props);\n\n    this.state = { collapsedKeys: [] };\n+   this.handleSectionSelection = this.handleSectionSelection.bind(this)\n   }\n  \n+  handleSectionSelection(event, metaData) {\n\n+  }\n")),(0,i.mdx)("p",null,"As a precaution we can prevent default on the event, in case the list has an ancestor with a listener. This also prevents the browser from auto page scrolling when we are intending to make a selection with the space bar."),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-diff"},"  handleSectionSelection(event, metaData) {\n+   event.preventDefault();\n  }\n")),(0,i.mdx)("p",null,"Terra List comes with additional helpers to manage state, in this case we want to determine if the selection has collapsed or opened the section using the section key in our state. So we use the utility method ",(0,i.mdx)("inlineCode",{parentName:"p"},"updatedMulitSelectedKeys"),", which takes an array of keys and returns a new array of keys following the addition or removal of the key passed. We then set this as our state."),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-diff"},"  handleSectionSelection(event, metaData) {\n    event.preventDefault();\n+   this.setState(state => ({ collapsedKeys: Utils.updatedMultiSelectedKeys(state.selectedKeys, metaData.key) }));\n  }\n")),(0,i.mdx)("p",null,"Settting state will trigger another render. So in the render method we need to generate our sections with the updated ",(0,i.mdx)("inlineCode",{parentName:"p"},"isCollapsed")," and ",(0,i.mdx)("inlineCode",{parentName:"p"},"isCollapsible")," props. Each section needs a unique key, not necessarily associated to our own key, but it works as well. The list renders flat, so keys need to be unique even if items are placed within sections structurally.\n",(0,i.mdx)("a",{parentName:"p",href:"https://reactjs.org/docs/lists-and-keys.html"},"React List & Key Documentation")),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-diff"},"class MyList extends React.Component {\n  constructor(props) {\n    super(props);\n\n    this.state = { selectedKey: null };\n    this.handleItemSelection = this.handleItemSelection.bind(this)\n+   this.createSection = this.createSection.bind(this)\n  }\n  ...\n+ createSection(sectionData) {\n+   return (\n+     <Section\n+       key={sectionData.key}\n+       title={sectionData.title}\n+     >\n+       {sectionData.childItems.map(childItem => createSubsection(childItem))}\n+     </Section>\n+   );\n+ }\n")),(0,i.mdx)("p",null,"Next we need to set up our ",(0,i.mdx)("inlineCode",{parentName:"p"},"metaData")," object with our key value, and attach the ",(0,i.mdx)("inlineCode",{parentName:"p"},"onSelect")," to our handler."),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-diff"},"  createSection(sectionData) {\n    return (\n      <Section\n        key={sectionData.key}\n        title={sectionData.title}\n+       metaData={{ key: sectionData.key }}\n+       onSelect={this.handleSectionSelection}\n      >\n        {sectionData.childItems.map(childItem => createSubsection(childItem))}\n      </Section>\n    );\n  }\n")),(0,i.mdx)("p",null,"For rendering the collapsible section we set ",(0,i.mdx)("inlineCode",{parentName:"p"},"isCollapsible")," for all sections."),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-diff"},"  createSection(sectionData) {\n    return (\n      <Section\n        key={sectionData.key}\n        title={sectionData.title}\n+       isCollapsible\n        metaData={{ key: sectionData.key }}\n        onSelect={this.handleSectionSelection}\n      >\n        {sectionData.childItems.map(childItem => createSubsection(childItem))}\n      </Section>\n    );\n  }\n")),(0,i.mdx)("p",null,"Finally we need to check if the section is collapsed. As we support IE10 & 11, we cannot use ",(0,i.mdx)("inlineCode",{parentName:"p"},"contains"),", so we use ",(0,i.mdx)("inlineCode",{parentName:"p"},"indexOf")," to determine if the key is present in our state array. Here we can also avoid rendering collapsed child items and subsections by avoiding the subsequent function calls. Short circuiting the render is not required, as the section can correctly managed the display of the child content, but this will avoid additional javascript cycles looping through and creating child objects. The performance impact of generating child items is minimal, but with large lists it can add up."),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-diff"},"  createSection(sectionData) {\n+   const isCollapsed = this.state.collapsedKeys.indexOf(sectionData.key) >= 0;\n    return (\n      <Section\n        key={sectionData.key}\n        title={sectionData.title}\n+       isCollapsed={isCollapsed}\n        isCollapsible\n        metaData={{ key: sectionData.key }}\n        onSelect={this.handleSectionSelection}\n      >\n-        {sectionData.childItems.map(childItem => createSubsection(childItem))}\n+        {!isCollapsed && sectionData.childItems.map(childItem => createListItem(childItem))}\n      </Section>\n    );\n")),(0,i.mdx)("p",null,"We can then implement the unpack of our data into our list items."),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-diff"},"  createSection(sectionData) {\n   const isCollapsed = this.state.collapsedKeys.indexOf(sectionData.key) >= 0;\n+  const createListItem = itemData => (\n+    <Item key={itemData.key}>\n+      <Placeholder />\n+    </Item>\n+  );\n   return (\n      <Section\n        key={sectionData.key}\n        title={sectionData.title}\n       isCollapsed={isCollapsed}\n        isCollapsible\n        metaData={{ key: sectionData.key }}\n        onSelect={this.handleSectionSelection}\n      >\n        {!isCollapsed && sectionData.childItems.map(childItem => createListItem(childItem))}\n      </Section>\n    );\n  \n\n")),(0,i.mdx)("p",null,"Then we can implement a method to loop through our data and create the section with our methods and call it from our render method."),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-diff"},'class MyList extends React.Component {\n  constructor(props) {\n    super(props);\n\n    this.state = { selectedKey: null };\n    this.handleItemSelection = this.handleItemSelection.bind(this)\n    this.createSection = this.createSection.bind(this)\n+   this.createSections = this.createSections.bind(this)\n  }\n  ...\n+ createSections(data) {\n+   return data.map(section => this.createSection(section));\n+ }\n\n  render() {\n    return (\n+     <List dividerStyle="standard">\n+       {this.createSections(mockData)}\n+     </List>\n    );\n  }\n')),(0,i.mdx)("p",null,"Using these steps we get the following example:"),(0,i.mdx)("h2",{id:"examples"},"Examples"),(0,i.mdx)(h,{mdxType:"SectionList"}))}v.isMDXComponent=!0}}]);