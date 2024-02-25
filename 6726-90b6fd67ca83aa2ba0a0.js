"use strict";(self.webpackChunkterra_ui=self.webpackChunkterra_ui||[]).push([[6726],{29885:function(e,t,n){function r(e){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(e)}t.A=void 0;var l=f(n(96540)),a=f(n(80708)),o=n(74647),u=d(n(67967)),i=d(n(22738));function d(e){return e&&e.__esModule?e:{default:e}}function c(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(c=function(e){return e?n:t})(e)}function f(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=r(e)&&"function"!=typeof e)return{default:e};var n=c(t);if(n&&n.has(e))return n.get(e);var l={__proto__:null},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var u=a?Object.getOwnPropertyDescriptor(e,o):null;u&&(u.get||u.set)?Object.defineProperty(l,o,u):l[o]=e[o]}return l.default=e,n&&n.set(e,l),l}function s(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,l,a,o,u=[],i=!0,d=!1;try{if(a=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;i=!1}else for(;!(i=(r=a.call(n)).done)&&(u.push(r.value),u.length!==t);i=!0);}catch(e){d=!0,l=e}finally{try{if(!i&&null!=n.return&&(o=n.return(),Object(o)!==o))return}finally{if(d)throw l}}return u}}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return p(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return p(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function p(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var m=u.default.bind(i.default);t.A=function(){var e=s((0,l.useState)([{title:"John Smith",key:"unique-0"},{title:"Mary Jones",key:"unique-1"},{title:"Sam Brown",key:"unique-2"},{title:"John David",key:"unique-3"}]),2),t=e[0],n=e[1],r=s((0,l.useState)("unique-0"),2),u=r[0],i=r[1],d=(0,l.useRef)(null),c=function(e,t){e.preventDefault(),u!==t.key&&i(t.key)};return l.default.createElement(l.default.Fragment,null,l.default.createElement("p",{id:"list-help"},"Select a patient from the list to view patient details."),l.default.createElement(a.default,{role:"listbox",ariaDescribedBy:"list-help","aria-label":"list of patient",isDraggable:!0,onDragEnd:function(e){var r=function(e,t,n){var r=Array.from(e),l=s(r.splice(t,1),1)[0];return r.splice(n,0,l),r}(t,e.source.index,e.destination.index);n(r),i(e.draggableId)},refCallback:function(e){return function(e){d.current=e}(e)}},t.map((function(e,t){return n=e,l.default.createElement(a.Item,{key:n.key,isSelectable:!0,isSelected:u===n.key,metaData:{key:n.key},onSelect:c},l.default.createElement(o.Placeholder,{title:n.title,className:m("placeholder")}));var n}))))}},12883:function(e,t,n){var r=n(24994),l=n(73738);t.YZ=t.dt=t.Hd=t.NZ=void 0,Object.defineProperty(t,"fI",{enumerable:!0,get:function(){return d.Row}}),t.Ay=t.$d=void 0;var a=s(n(96540)),o=r(n(5556)),u=r(n(67967)),i=n(92912),d=s(n(26984)),c=r(n(89744));function f(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(f=function(e){return e?n:t})(e)}function s(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=l(e)&&"function"!=typeof e)return{default:e};var n=f(t);if(n&&n.has(e))return n.get(e);var r={__proto__:null},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var u=a?Object.getOwnPropertyDescriptor(e,o):null;u&&(u.get||u.set)?Object.defineProperty(r,o,u):r[o]=e[o]}return r.default=e,n&&n.set(e,r),r}var p=u.default.bind(c.default),m={children:o.default.node},y={isRequired:o.default.bool};(t.dt=function(e){var t=e.children;return a.default.createElement(d.Cell,{className:p("bold")},t)}).propTypes=m,(t.$d=function(e){var t=e.children;return a.default.createElement(d.Cell,{className:p("code-block-override")},t)}).propTypes=m,(t.YZ=function(e){var t=e.isRequired;return a.default.createElement(d.Cell,{className:p([t?["required"]:[]])},t?"required":"optional")}).propTypes=y,(t.NZ=function(e){var t=e.children;return a.default.createElement(d.Cell,{className:p("code-block-override")},t)}).propTypes=m,(t.Hd=function(e){var t=e.children;return a.default.createElement(d.Cell,null,t)}).propTypes=m;var b=function(e){var t=e.children,n=(0,a.useContext)(i.ThemeContext);return a.default.createElement(d.default,{paddingStyle:"compact",className:p("table",n.className)},a.default.createElement(d.Header,{className:p("header")},a.default.createElement(d.HeaderCell,null,"Prop"),a.default.createElement(d.HeaderCell,null,"Type"),a.default.createElement(d.HeaderCell,null,"Required"),a.default.createElement(d.HeaderCell,null,"Default"),a.default.createElement(d.HeaderCell,null,"Description")),a.default.createElement(d.Body,null,t))};b.propTypes=m;t.Ay=b},38296:function(e,t,n){n.d(t,{A:function(){return p}});var r=n(96540),l=n(29885),a=n(36665),o=["components"];function u(){return u=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},u.apply(this,arguments)}function i(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var d={};function c(e){var t=e.components,n=i(e,o);return(0,a.mdx)("wrapper",u({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React, { useRef, useState } from 'react';\nimport List, { Item } from 'terra-list/lib/index';\nimport { Placeholder } from '@cerner/terra-docs';\nimport classNames from 'classnames/bind';\nimport styles from './ListDocCommon.module.scss';\n\nconst cx = classNames.bind(styles);\n\nconst ListDraggableExample = () => {\n  const mockData = [\n    {\n      title: 'John Smith',\n      key: 'unique-0',\n    },\n    {\n      title: 'Mary Jones',\n      key: 'unique-1',\n    },\n    {\n      title: 'Sam Brown',\n      key: 'unique-2',\n    },\n    {\n      title: 'John David',\n      key: 'unique-3',\n    },\n  ];\n\n  const [dataList, setDataList] = useState(mockData);\n  const [selectedKey, setselectedKey] = useState('unique-0');\n  const listNode = useRef(null);\n\n  const reorderListItems = (list, startIndex, endIndex) => {\n    const result = Array.from(list);\n    const [removed] = result.splice(startIndex, 1);\n    result.splice(endIndex, 0, removed);\n    return result;\n  };\n\n  const handleRef = (node) => {\n    listNode.current = node;\n  };\n\n  const handleDragAndDrop = (draggedElement) => {\n    const result = reorderListItems(dataList, draggedElement.source.index, draggedElement.destination.index);\n    setDataList(result);\n    setselectedKey(draggedElement.draggableId);\n  };\n\n  const handleItemSelection = (event, metaData) => {\n    event.preventDefault();\n    if (selectedKey !== metaData.key) {\n      setselectedKey(metaData.key);\n    }\n  };\n\n  const createListItem = (itemData) => (\n    <Item\n      key={itemData.key}\n      isSelectable\n      isSelected={selectedKey === itemData.key}\n      metaData={{ key: itemData.key }}\n      onSelect={handleItemSelection}\n    >\n      <Placeholder title={itemData.title} className={cx('placeholder')} />\n    </Item>\n  );\n\n  const createListItems = (data) => data.map((childItem, index) => createListItem(childItem, index));\n\n  return (\n    <>\n      <p id=\"list-help\">\n        Select a patient from the list to view patient details.\n      </p>\n      <List role=\"listbox\" ariaDescribedBy=\"list-help\" aria-label=\"list of patient\" isDraggable onDragEnd={handleDragAndDrop} refCallback={(node) => handleRef(node)}>\n        {createListItems(dataList)}\n      </List>\n    </>\n  );\n};\n\nexport default ListDraggableExample;\n\n")))}c.isMDXComponent=!0;var f=n(201),s=n(95552),p=function(e){var t=e.title,n=e.description,a=e.isExpanded;return r.createElement(f.A,{title:t||"Draggable List Item",description:n,example:r.createElement(l.A,null),exampleCssSrc:r.createElement(s.A,null),exampleSrc:r.createElement(c,null),isExpanded:a})}},89744:function(e,t,n){n.r(t),t.default={"clinical-lowlight-theme":"PropsTable-module__clinical-lowlight-theme___3pa8J","orion-fusion-theme":"PropsTable-module__orion-fusion-theme___FtP5r",bold:"PropsTable-module__bold___-z9Sz",table:"PropsTable-module__table___rzW-v",required:"PropsTable-module__required___ev190","code-block-override":"PropsTable-module__code-block-override___fF0JK"}},78482:function(e,t,n){n.r(t),t.default={"clinical-lowlight-theme":"Table-module__clinical-lowlight-theme___PqYJ8","orion-fusion-theme":"Table-module__orion-fusion-theme___d9rxf",table:"Table-module__table___eg2Mi","padding-standard":"Table-module__padding-standard___BfbC-","padding-compact":"Table-module__padding-compact___Yus6Z",striped:"Table-module__striped___n8xJe"}},85444:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=c(n(96540)),l=c(n(5556)),a=c(n(46942)),o=c(n(67967)),u=c(n(52103)),i=c(n(78482)),d=["children","disableStripes","paddingStyle"];function c(e){return e&&e.__esModule?e:{default:e}}function f(){return f=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},f.apply(this,arguments)}function s(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var p=o.default.bind(i.default),m={children:l.default.node.isRequired,disableStripes:l.default.bool,paddingStyle:l.default.oneOf(["none","standard","compact"])},y=function(e){var t=e.children,n=e.disableStripes,l=e.paddingStyle,o=s(e,d),i=r.default.useContext(u.default),c=(0,a.default)(p("table",{striped:!n},{"padding-standard":"standard"===l},{"padding-compact":"compact"===l},i.className),o.className);return r.default.createElement("table",f({},o,{className:c}),t)};y.propTypes=m,y.defaultProps={disableStripes:!1,paddingStyle:"none"};t.default=y},61452:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=o(n(96540)),l=o(n(5556)),a=["children"];function o(e){return e&&e.__esModule?e:{default:e}}function u(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var i={children:l.default.node},d=function(e){var t=e.children,n=u(e,a);return r.default.createElement("tbody",n,t)};d.propTypes=i,d.defaultProps={children:[]};t.default=d},86472:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=o(n(96540)),l=o(n(5556)),a=["children"];function o(e){return e&&e.__esModule?e:{default:e}}function u(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var i={children:l.default.node},d=function(e){var t=e.children,n=u(e,a);return r.default.createElement("td",n,t)};d.propTypes=i,d.defaultProps={children:[]};t.default=d},97441:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=u(n(96540)),l=u(n(5556)),a=u(n(10767)),o=["children"];function u(e){return e&&e.__esModule?e:{default:e}}function i(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var d={children:l.default.node},c=function(e){var t=e.children,n=i(e,o);return r.default.createElement("thead",n,r.default.createElement("tr",null,a.default.addScope(t,"col")))};c.propTypes=d,c.defaultProps={children:[]};t.default=c},22417:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=o(n(96540)),l=o(n(5556)),a=["children"];function o(e){return e&&e.__esModule?e:{default:e}}function u(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var i={children:l.default.node},d=function(e){var t=e.children,n=u(e,a);return r.default.createElement("th",n,t)};d.propTypes=i,d.defaultProps={children:[]};t.default=d},36142:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=d(n(96540)),l=d(n(5556)),a=d(n(67967)),o=d(n(78482)),u=d(n(10767)),i=["children"];function d(e){return e&&e.__esModule?e:{default:e}}function c(){return c=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},c.apply(this,arguments)}function f(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var s=a.default.bind(o.default),p={children:l.default.node},m=function(e){var t=e.children,n=f(e,i),l=s(["row"]);return r.default.createElement("tr",c({},n,{className:n.className?"".concat(l," ").concat(n.className):l}),u.default.addScope(t,"row"))};m.propTypes=p,m.defaultProps={children:[]};t.default=m},10767:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r,l=(r=n(96540))&&r.__esModule?r:{default:r};var a={addScope:function(e,t){var n=[];return l.default.Children.forEach(e,(function(e){n.push(l.default.cloneElement(e,{scope:"TableHeaderCell"===e.type.name?t:void 0}))})),n}};t.default=a},26984:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"Body",{enumerable:!0,get:function(){return l.default}}),Object.defineProperty(t,"Cell",{enumerable:!0,get:function(){return o.default}}),Object.defineProperty(t,"Header",{enumerable:!0,get:function(){return u.default}}),Object.defineProperty(t,"HeaderCell",{enumerable:!0,get:function(){return i.default}}),Object.defineProperty(t,"Row",{enumerable:!0,get:function(){return a.default}}),t.default=void 0;var r=d(n(85444)),l=d(n(61452)),a=d(n(36142)),o=d(n(86472)),u=d(n(97441)),i=d(n(22417));function d(e){return e&&e.__esModule?e:{default:e}}t.default=r.default}}]);