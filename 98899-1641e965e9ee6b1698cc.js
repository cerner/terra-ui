"use strict";(self.webpackChunkterra_ui=self.webpackChunkterra_ui||[]).push([[98899,45627,85565,3353,5161,45865,85355,3193,16835,4845,46647,85161,38681,15318,40411,18101,38443,11264,34319,20116,33609,12026],{57981:function(e,t,n){function a(e){return a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a(e)}t.Z=void 0;var i=d(n(67294)),r=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=a(e)&&"function"!=typeof e)return{default:e};var n=m(t);if(n&&n.has(e))return n.get(e);var i={__proto__:null},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var l in e)if("default"!==l&&Object.prototype.hasOwnProperty.call(e,l)){var o=r?Object.getOwnPropertyDescriptor(e,l):null;o&&(o.get||o.set)?Object.defineProperty(i,l,o):i[l]=e[l]}return i.default=e,n&&n.set(e,i),i}(n(93670)),l=n(34261),o=d(n(19845)),s=d(n(44258)),c=d(n(25266));function m(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(m=function(e){return e?n:t})(e)}function d(e){return e&&e.__esModule?e:{default:e}}function u(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,(r=i.key,l=void 0,l=function(e,t){if("object"!==a(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var i=n.call(e,t||"default");if("object"!==a(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(r,"string"),"symbol"===a(l)?l:String(l)),i)}var r,l}function p(e,t){return p=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},p(e,t)}function f(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,i=y(e);if(t){var r=y(this).constructor;n=Reflect.construct(i,arguments,r)}else n=i.apply(this,arguments);return function(e,t){if(t&&("object"===a(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return h(e)}(this,n)}}function h(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function y(e){return y=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},y(e)}var b=o.default.bind(c.default),g=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&p(e,t)}(c,e);var t,n,a,o=f(c);function c(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,c),(t=o.call(this,e)).createListItem=t.createListItem.bind(h(t)),t.handleItemSelection=t.handleItemSelection.bind(h(t)),t.handleOnClick=t.handleOnClick.bind(h(t)),t.setListNode=t.setListNode.bind(h(t)),t.state={selectedKey:null},t}return t=c,(n=[{key:"handleItemSelection",value:function(e,t){e.preventDefault(),this.state.selectedKey!==t.key&&this.setState({selectedKey:t.key})}},{key:"handleOnClick",value:function(){this.firstListItem.focus()}},{key:"setListNode",value:function(e){this.firstListItem=e}},{key:"createListItem",value:function(e,t){var n=0===t?this.setListNode:null;return i.default.createElement(r.Item,{key:e.key,isSelectable:!0,isSelected:this.state.selectedKey===e.key,metaData:{key:e.key},onSelect:this.handleItemSelection,refCallback:n},i.default.createElement(l.Placeholder,{title:e.title,className:b("placeholder")}))}},{key:"createListItems",value:function(e){var t=this;return e.map((function(e,n){return t.createListItem(e,n)}))}},{key:"render",value:function(){return i.default.createElement("div",null,i.default.createElement("p",null,i.default.createElement("b",null,"Note")," ","Tab key Navigation is disabled for below list items. Inorder to interact with list-item user should set programmatic focus to one of the list item depending on the required scenario."," "),i.default.createElement("button",{type:"button",onClick:this.handleOnClick},"Select Item 0"),i.default.createElement(r.default,{dividerStyle:"standard",ariaSelectionStyle:"single-select",isTabFocusDisabled:!0},this.createListItems(s.default)))}}])&&u(t.prototype,n),a&&u(t,a),Object.defineProperty(t,"prototype",{writable:!1}),c}(i.default.Component);t.Z=g},44258:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;t.default=[{title:"Item 0",key:"unique-0"},{title:"Item 1",key:"unique-1"},{title:"Item 2",key:"unique-2"},{title:"Item 3",key:"unique-3"},{title:"Item 4",key:"unique-4"}]},40673:function(e,t,n){n.r(t),n.d(t,{default:function(){return v}});var a=n(67294),i=n(81254),r=n(30999),l=n(57981),o=["components"];function s(){return s=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},s.apply(this,arguments)}function c(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var m={};function d(e){var t=e.components,n=c(e,o);return(0,i.mdx)("wrapper",s({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport List, { Item } from 'terra-list/lib/index';\nimport { Placeholder } from '@cerner/terra-docs';\nimport classNames from 'classnames/bind';\nimport mockData from './mock-data/mock-select';\nimport styles from '../example/ListDocCommon.module.scss';\n\nconst cx = classNames.bind(styles);\n\nclass SingleSelectList extends React.Component {\n  constructor(props) {\n    super(props);\n    this.createListItem = this.createListItem.bind(this);\n    this.handleItemSelection = this.handleItemSelection.bind(this);\n    this.handleOnClick = this.handleOnClick.bind(this);\n    this.setListNode = this.setListNode.bind(this);\n    this.state = { selectedKey: null };\n  }\n\n  handleItemSelection(event, metaData) {\n    event.preventDefault();\n    if (this.state.selectedKey !== metaData.key) {\n      this.setState({ selectedKey: metaData.key });\n    }\n  }\n\n  handleOnClick() {\n    this.firstListItem.focus();\n  }\n\n  setListNode(element) {\n    this.firstListItem = element;\n  }\n\n  createListItem(itemData, index) {\n    const listItemRef = (index === 0) ? this.setListNode : null;\n    return (\n      <Item\n        key={itemData.key}\n        isSelectable\n        isSelected={this.state.selectedKey === itemData.key}\n        metaData={{ key: itemData.key }}\n        onSelect={this.handleItemSelection}\n        refCallback={listItemRef}\n      >\n        <Placeholder title={itemData.title} className={cx('placeholder')} />\n      </Item>\n    );\n  }\n\n  createListItems(data) {\n    return data.map((childItem, index) => this.createListItem(childItem, index));\n  }\n\n  render() {\n    return (\n      <div>\n        <p>\n          <b>Note</b>\n          {' '}\n          Tab key Navigation is disabled for below list items. Inorder to interact with list-item user should set programmatic focus to one of the list item depending on the required scenario.\n          {' '}\n        </p>\n        <button type=\"button\" onClick={this.handleOnClick}>Select Item 0</button>\n        <List dividerStyle=\"standard\" ariaSelectionStyle=\"single-select\" isTabFocusDisabled>\n          {this.createListItems(mockData)}\n        </List>\n      </div>\n    );\n  }\n}\n\nexport default SingleSelectList;\n\n")))}d.isMDXComponent=!0;var u=n(49271),p=n(63443),f=function(e){var t=e.title,n=e.description,i=e.isExpanded;return a.createElement(u.Z,{title:t||"Single Select List",description:n,example:a.createElement(l.Z,null),exampleCssSrc:a.createElement(p.Z,null),exampleSrc:a.createElement(d,null),isExpanded:i})},h=["components"];function y(){return y=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},y.apply(this,arguments)}function b(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var g={},x="wrapper";function v(e){var t=e.components,n=b(e,h);return(0,i.mdx)(x,y({},g,n,{components:t,mdxType:"MDXLayout"}),(0,i.mdx)(r.C,{mdxType:"Badge"}),(0,i.mdx)("h1",{id:"terra-list---implementing-a-single-select-list"},"Terra List - Implementing a Single Select List"),(0,i.mdx)("p",null,"The terra-list implementation requires controlled state if selections are required. As a result, selections are applied at child item generation from HOC state. The following guide will show you how to implement that state within a single row selection variant of list."),(0,i.mdx)("h2",{id:"state-management"},"State Management"),(0,i.mdx)("p",null,"The state of selection needs to be managed for the list in a HOC. In this example we are going to be a unique key, but the type of state used is open to the implementor of the HOC."),(0,i.mdx)("p",null," First defaulting our state to a null value in the constructor."),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-diff"},"class MyList extends React.Component {\n  constructor(props) {\n    super(props);\n\n+    this.state = { selectedKey: null };\n  }\n\n  render() {\n    return (\n    );\n  }\n}\n")),(0,i.mdx)("p",null,"Next creating an event handler callback method to pass to the list item's ",(0,i.mdx)("inlineCode",{parentName:"p"},"onSelect")," prop. The ",(0,i.mdx)("inlineCode",{parentName:"p"},"onSelect")," will return the metaData prop passed it each listItem."),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-diff"},"class MyList extends React.Component {\n  constructor(props) {\n    super(props);\n\n    this.state = { selectedKey: null };\n+   this.handleItemSelection = this.handleItemSelection.bind(this)\n  }\n\n+ handleItemSelection(event, metaData) {\n+\n+ }\n  ...\n")),(0,i.mdx)("p",null,"As a precaution we can ",(0,i.mdx)("inlineCode",{parentName:"p"},"preventDefault")," on the event, in case the list has an ancestor with a listener. This also prevents the browser from auto page scrolling when we are intending to make a selection with the space bar."),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-diff"},"  handleItemSelection(event, metaData) {\n+    event.preventDefault();\n  }\n")),(0,i.mdx)("p",null,"A single select list normally doesn't allow deselection, so we'll be using it in our example, but if deselection is desired we could adjust this method. So we compare the key to the current one in state, and if they aren't the same we set this as our state."),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-diff"},"  handleItemSelection(event, metaData) {\n    event.preventDefault();\n+    if (this.state.selectedKey !== metaData.key) {\n+      this.setState({ selectedKey: metaData.key });\n+    }\n  }\n")),(0,i.mdx)("p",null,"Setting state will trigger another render. So in the render method we need generate our list items with the updated ",(0,i.mdx)("inlineCode",{parentName:"p"},"isSelected")," and ",(0,i.mdx)("inlineCode",{parentName:"p"},"isSelectable")," props. Each item needs a unique key, not necessarily associated to our own key, but it works as well. The list renders flat, so keys need to be unique even if they are placed within sections.\n",(0,i.mdx)("a",{parentName:"p",href:"https://reactjs.org/docs/lists-and-keys.html"},"React List & Key Documentation")),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-diff"},"class MyList extends React.Component {\n  constructor(props) {\n    super(props);\n\n    this.state = { selectedKey: null };\n    this.handleItemSelection = this.handleItemSelection.bind(this)\n+   this.createListItem = this.createListItem.bind(this)\n  }\n  ...\n+  createListItem(itemData) {\n+    return (\n+      <Item\n+        key={itemData.key}\n+      >\n+        <Placeholder />\n+      </Item>\n+    );\n+  }\n")),(0,i.mdx)("p",null,"Next we need to set up our ",(0,i.mdx)("inlineCode",{parentName:"p"},"metaData")," object with our key value, and attach the ",(0,i.mdx)("inlineCode",{parentName:"p"},"onSelect")," to our handler."),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-diff"},"  createListItem(itemData) {\n    return (\n      <Item\n        key={itemData.key}\n+       metaData={{ key: itemData.key }}\n+       onSelect={this.handleItemSelection}\n      >\n        <Placeholder />\n      </Item>\n    );\n  }\n")),(0,i.mdx)("p",null,"For the single select list we set ",(0,i.mdx)("inlineCode",{parentName:"p"},"isSelectable")," for all items."),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-diff"},"  createListItem(itemData) {\n    return (\n      <Item\n        key={itemData.key}\n+       isSelectable\n        metaData={{ key: itemData.key }}\n        onSelect={this.handleItemSelection}\n      >\n        <Placeholder />\n      </Item>\n    );\n  }\n")),(0,i.mdx)("p",null,"Finally we need to check if the item matches the selectedKey in state to set ",(0,i.mdx)("inlineCode",{parentName:"p"},"isSelected"),"."),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-diff"},"  createListItem(itemData) {\n    return (\n      <Item\n        key={itemData.key}\n        isSelectable\n+       isSelected={this.state.selectedKey === itemData.key}\n        metaData={{ key: itemData.key }}\n        onSelect={this.handleItemSelection}\n      >\n        <Placeholder />\n      </Item>\n    );\n  }\n")),(0,i.mdx)("p",null,"Then we can implement a method to loop through our data and create the list item with our methods and call it from our render method. Making special note to assign the prop ",(0,i.mdx)("inlineCode",{parentName:"p"},"ariaSelectionStyle")," with the value ",(0,i.mdx)("inlineCode",{parentName:"p"},"single-select")," for the list, as it is required for accessibility with selectable list options."),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-diff"},'  render() {\n    return (\n+      <List ariaSelectionStyle="single-select">\n+        {data.map(childItem => this.createListItem(mockData))}\n+      </List>\n    );\n  }\n')),(0,i.mdx)("p",null,"  Using these steps we get the following example."),(0,i.mdx)("h2",{id:"examples"},"Examples"),(0,i.mdx)(f,{mdxType:"SingleSelectList"}))}v.isMDXComponent=!0}}]);