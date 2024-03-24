"use strict";(self.webpackChunkterra_ui=self.webpackChunkterra_ui||[]).push([[55827,17711,40092,72949,95330,7235,29616,62473,24087,84854,38663,38149,61044,92260,69879,47498,25117,81784,59403,37022,14641,71308,48927,98463,20844,53701],{31501:function(e,t,n){function a(e){return a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a(e)}t.A=void 0;var r=u(n(96540)),i=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=a(e)&&"function"!=typeof e)return{default:e};var n=m(t);if(n&&n.has(e))return n.get(e);var r={__proto__:null},i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var l in e)if("default"!==l&&{}.hasOwnProperty.call(e,l)){var s=i?Object.getOwnPropertyDescriptor(e,l):null;s&&(s.get||s.set)?Object.defineProperty(r,l,s):r[l]=e[l]}return r.default=e,n&&n.set(e,r),r}(n(80708)),l=n(74647),s=u(n(67967)),o=u(n(65439)),c=u(n(22738));function m(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(m=function(e){return e?n:t})(e)}function u(e){return e&&e.__esModule?e:{default:e}}function d(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,p(a.key),a)}}function p(e){var t=function(e,t){if("object"!=a(e)||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!=a(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==a(t)?t:t+""}function h(e,t,n){return t=y(t),function(e,t){if(t&&("object"===a(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(e,f()?Reflect.construct(t,n||[],y(e).constructor):t.apply(e,n))}function f(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(f=function(){return!!e})()}function y(e){return y=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},y(e)}function b(e,t){return b=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},b(e,t)}var x=s.default.bind(c.default),S=function(e){function t(e){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(n=h(this,t,[e])).createListItem=n.createListItem.bind(n),n.handleItemSelection=n.handleItemSelection.bind(n),n.state={selectedKeys:[]},n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&b(e,t)}(t,e),n=t,(a=[{key:"handleItemSelection",value:function(e,t){e.preventDefault(),this.setState((function(e){return{selectedKeys:i.Utils.updatedMultiSelectedKeys(e.selectedKeys,t.key)}}))}},{key:"createListItem",value:function(e){return r.default.createElement(i.Item,{key:e.key,isSelectable:i.Utils.shouldBeMultiSelectable(3,this.state.selectedKeys,e.key),isSelected:this.state.selectedKeys.indexOf(e.key)>=0,metaData:{key:e.key},onSelect:this.handleItemSelection},r.default.createElement(l.Placeholder,{title:e.title,className:x("placeholder")}))}},{key:"createListItems",value:function(e){var t=this;return e.map((function(e){return t.createListItem(e)}))}},{key:"render",value:function(){return r.default.createElement(i.default,{ariaSelectionStyle:"multi-select"},this.createListItems(o.default))}}])&&d(n.prototype,a),s&&d(n,s),Object.defineProperty(n,"prototype",{writable:!1}),n;var n,a,s}(r.default.Component);t.A=S},27283:function(e,t,n){n.r(t),n.d(t,{default:function(){return g}});var a=n(96540),r=n(36665),i=n(86273),l=n(31501),s=["components"];function o(){return o=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},o.apply(this,arguments)}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var m={};function u(e){var t=e.components,n=c(e,s);return(0,r.mdx)("wrapper",o({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport List, { Item, Utils } from 'terra-list/lib/index';\nimport { Placeholder } from '@cerner/terra-docs';\nimport classNames from 'classnames/bind';\nimport mockData from './mock-data/mock-select';\nimport styles from '../example/ListDocCommon.module.scss';\n\nconst cx = classNames.bind(styles);\n\nconst maxSectionCount = 3;\n\nclass MutliSelectList extends React.Component {\n  constructor(props) {\n    super(props);\n    this.createListItem = this.createListItem.bind(this);\n    this.handleItemSelection = this.handleItemSelection.bind(this);\n    this.state = { selectedKeys: [] };\n  }\n\n  handleItemSelection(event, metaData) {\n    event.preventDefault();\n    this.setState(state => ({ selectedKeys: Utils.updatedMultiSelectedKeys(state.selectedKeys, metaData.key) }));\n  }\n\n  createListItem(itemData) {\n    return (\n      <Item\n        key={itemData.key}\n        isSelectable={Utils.shouldBeMultiSelectable(maxSectionCount, this.state.selectedKeys, itemData.key)}\n        isSelected={this.state.selectedKeys.indexOf(itemData.key) >= 0}\n        metaData={{ key: itemData.key }}\n        onSelect={this.handleItemSelection}\n      >\n        <Placeholder title={itemData.title} className={cx('placeholder')} />\n      </Item>\n    );\n  }\n\n  createListItems(data) {\n    return data.map(childItem => this.createListItem(childItem));\n  }\n\n  render() {\n    return (\n      <List ariaSelectionStyle=\"multi-select\">\n        {this.createListItems(mockData)}\n      </List>\n    );\n  }\n}\n\nexport default MutliSelectList;\n\n")))}u.isMDXComponent=!0;var d=n(201),p=n(95552),h=function(e){var t=e.title,n=e.description,r=e.isExpanded;return a.createElement(d.A,{title:t||"Multi Select List",description:n,example:a.createElement(l.A,null),exampleCssSrc:a.createElement(p.A,null),exampleSrc:a.createElement(u,null),isExpanded:r})},f=["components"];function y(){return y=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},y.apply(this,arguments)}function b(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var x={},S="wrapper";function g(e){var t=e.components,n=b(e,f);return(0,r.mdx)(S,y({},x,n,{components:t,mdxType:"MDXLayout"}),(0,r.mdx)(i.E,{mdxType:"Badge"}),(0,r.mdx)("h1",{id:"terra-list---implementing-a-multi-select-list"},"Terra List - Implementing a Multi Select List"),(0,r.mdx)("p",null,"The terra-list implementation requires controlled state if selections are required. As a result, selections are applied when child items are generated from HOC state. The following guide will show you how to implement that state within a multiple items selection variant of list, as well as implement the additional narrowing requirements of a max selection for items."),(0,r.mdx)("h2",{id:"state-management"},"State Management"),(0,r.mdx)("p",null,"The state of selection needs to be managed for the list in a High Order Component (HOC). In this example we are going to be a unique key, but the type of state used is open to the implementor of the HOC."),(0,r.mdx)("p",null,"First defaulting our state to an empty array in the constructor."),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-diff"},"class MyList extends React.Component {\n  constructor(props) {\n    super(props);\n\n+   this.state = { selectedKeys: [] };\n  }\n\n  render() {\n    return (\n    );\n  }\n}\n")),(0,r.mdx)("p",null,"Next creating an event handler callback method to pass to the list item's ",(0,r.mdx)("inlineCode",{parentName:"p"},"onSelect")," prop. The ",(0,r.mdx)("inlineCode",{parentName:"p"},"onSelect")," will return the metaData prop passed it each listItem."),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-diff"},"class MyList extends React.Component {\n  constructor(props) {\n    super(props);\n\n    this.state = { collapsedKeys: [] };\n+   this.handleItemSelection = this.handleItemSelection.bind(this)\n  }\n\n+  handleItemSelection(event, metaData) {\n+\n+  }\n")),(0,r.mdx)("p",null,"As a precaution we can prevent default on the event, in case the list has an ancestor with a listener. This also prevents the browser from auto page scrolling when we are intending to make a selection with the space bar."),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-diff"},"  handleItemSelection(event, metaData) {\n+   event.preventDefault();\n  }\n")),(0,r.mdx)("p",null,"Terra list comes with additional helpers to manage state. In this case, we want to determine if the selection has selected or unselected the list item key in our state. So we use the utility method ",(0,r.mdx)("inlineCode",{parentName:"p"},"updatedMulitSelectedKeys"),", which returns an array of the keys following the addition or removing of the key passed. We then set this as our state."),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-diff"},"  handleItemSelection(event, metaData) {\n    event.preventDefault();\n+   this.setState(state => ({ selectedKeys: Utils.updatedMultiSelectedKeys(state.selectedKeys, metaData.key) }));\n  }\n")),(0,r.mdx)("p",null,"Setting state will trigger another render. So in the render method we need generate our list items with the updated ",(0,r.mdx)("inlineCode",{parentName:"p"},"isSelected")," and ",(0,r.mdx)("inlineCode",{parentName:"p"},"isSelectable")," props. Each item needs a unique key, not necessarily associated to our own key, but it works as well. The list renders flat, so keys need to be unique even if they are placed within sections.\n",(0,r.mdx)("a",{parentName:"p",href:"https://reactjs.org/docs/lists-and-keys.html"},"React List & Key Documentation")),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-diff"},"class MyList extends React.Component {\n  constructor(props) {\n    super(props);\n\n    this.state = { collapsedKeys: [] };\n    this.handleSectionSelection = this.handleSectionSelection.bind(this)\n+   this.createListItem = this.createListItem.bind(this)\n  }\n  ...\n+  createListItem(itemData) {\n+   return (\n+     <Item\n+       key={itemData.key}\n+     >\n+       <Placeholder />\n+     </Item>\n+   );\n+ }\n")),(0,r.mdx)("p",null,"Next we need to set up our ",(0,r.mdx)("inlineCode",{parentName:"p"},"metaData")," object with our key value, and attach the ",(0,r.mdx)("inlineCode",{parentName:"p"},"onSelect")," to our handler."),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-diff"},"  createListItem(itemData) {\n    return (\n      <Item\n        key={itemData.key}\n+       metaData={{ key: itemData.key }}\n+       onSelect={this.handleItemSelection}\n      >\n        <Placeholder />\n      </Item>\n    );\n  }\n")),(0,r.mdx)("p",null,"For multi-select lists we need to set selectability based upon whether or not we have reached our max selection count.  Terra List provides a helper for this, namely ",(0,r.mdx)("inlineCode",{parentName:"p"},"shouldBeMultiSelectable"),", by providing our count, the currently selected key, and the key of the associated item."),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-diff"},"  createListItem(itemData) {\n    return (\n      <Item\n        key={itemData.key}\n+       isSelectable={Utils.shouldBeMultiSelectable(maxSectionCount, this.state.selectedKeys, itemData.key)}\n        metaData={{ key: itemData.key }}\n        onSelect={this.handleItemSelection}\n      >\n        <Placeholder />\n      </Item>\n    );\n  }\n")),(0,r.mdx)("p",null,"Finally we need to check if the item is selected. As we support IE10 & 11, we cannot use ",(0,r.mdx)("inlineCode",{parentName:"p"},"contains"),", so we use ",(0,r.mdx)("inlineCode",{parentName:"p"},"indexOf")," to determine if the key is present in our state array."),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-diff"},"  createListItem(itemData) {\n    return (\n      <Item\n        key={itemData.key}\n        isSelectable={Utils.shouldBeMultiSelectable(maxSectionCount, this.state.selectedKeys, itemData.key)}\n+       isSelected={this.state.selectedKeys.indexOf(itemData.key) >= 0}\n        metaData={{ key: itemData.key }}\n        onSelect={this.handleItemSelection}\n      >\n        <Placeholder />\n      </Item>\n    );\n  }\n")),(0,r.mdx)("p",null,"Then we can implement a method to loop through our data and create the list item with our methods and call it from our render method. Making special note to assign the prop ",(0,r.mdx)("inlineCode",{parentName:"p"},"ariaSelectionStyle")," with the value ",(0,r.mdx)("inlineCode",{parentName:"p"},"multi-select")," for the list, as it is required for accessibility with selectable list options."),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-diff"},'class MyList extends React.Component {\n  constructor(props) {\n    super(props);\n\n    this.state = { collapsedKeys: [] };\n    this.handleItemSelection = this.handleItemSelection.bind(this)\n    this.createListItem = this.createListItem.bind(this)\n+   this.createListItems = this.createListItems.bind(this)\n  }\n  ...\n+ createListItems(data) {\n+   return data.map(childItem => this.createListItem(childItem));\n+ }\n\n  render() {\n    return (\n+     <List ariaSelectionStyle="multi-select">\n+       {this.createListItems(mockData)}\n+     </List>\n+   );\n+ }\n')),(0,r.mdx)("p",null,"  Using these steps we get the following example."),(0,r.mdx)("h2",{id:"examples"},"Examples"),(0,r.mdx)(h,{mdxType:"MultiSelectList"}))}g.isMDXComponent=!0}}]);