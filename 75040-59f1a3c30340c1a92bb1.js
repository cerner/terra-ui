"use strict";(self.webpackChunkterra_ui=self.webpackChunkterra_ui||[]).push([[75040],{75040:function(n,e,t){t.r(e),t.d(e,{default:function(){return v}});var r=t(11504),o=t(69788),i=t(96060),a=["components"];function l(){return l=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},l.apply(this,arguments)}function u(n,e){if(null==n)return{};var t,r,o=function(n,e){if(null==n)return{};var t,r,o={},i=Object.keys(n);for(r=0;r<i.length;r++)t=i[r],e.indexOf(t)>=0||(o[t]=n[t]);return o}(n,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);for(r=0;r<i.length;r++)t=i[r],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(o[t]=n[t])}return o}var c={};function s(n){var e=n.components,t=u(n,a);return(0,o.mdx)("wrapper",l({},c,t,{components:e,mdxType:"MDXLayout"}),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport DataGrid from 'terra-clinical-data-grid';\nimport classNames from 'classnames/bind';\nimport ThemeContext from 'terra-theme-context';\nimport ContentCellLayout from './ContentCellLayout';\nimport styles from './Datagrid.module.scss';\nimport gridDataJSON from './Datagrid.json';\n\nconst cx = classNames.bind(styles);\nconst numColumnsDisplayed = 9;\nconst pinnedColumnsCount = 3;\nconst numRowsPerSection = 15;\n\nclass DatagridWithColumnResizing extends React.Component {\n  static buildRows(sectionData, numberOfRowsToDisplay) {\n    const rows = (new Array(numberOfRowsToDisplay)).fill().map((rowVal, rowIndex) => ({\n      id: `${sectionData.section.id}-Row${rowIndex}`,\n      cells: (new Array(numColumnsDisplayed).fill(0)).map((cellVal, cellIndex) => ({\n        columnId: sectionData.sectionRows[rowIndex].cells[cellIndex].columnId,\n        component: <ContentCellLayout text={sectionData.sectionRows[rowIndex].cells[cellIndex].cellContent} />,\n      })),\n    }));\n\n    return rows;\n  }\n\n  static buildSection(sectionData, numberOfRows) {\n    return {\n      id: sectionData.section.id,\n      text: sectionData.section.text,\n      rows: DatagridWithColumnResizing.buildRows(sectionData, numberOfRows),\n    };\n  }\n\n  static buildColumns(data, start, end) {\n    const col = (new Array(end - start));\n    for (let columnIndex = start, currentElementIndex = 0; columnIndex <= end; columnIndex += 1, currentElementIndex += 1) {\n      const columnHeaderInfo = data.allColumnIds[columnIndex];\n      col[currentElementIndex] = {\n        id: columnHeaderInfo.id,\n        text: columnIndex !== 1 ? columnHeaderInfo.displayName : `${columnHeaderInfo.displayName} - Not resizable`,\n        width: 200,\n        ...(columnIndex !== 1) && { isResizable: true }, // The second column is not resizable in this example.\n      };\n    }\n    return col;\n  }\n\n  constructor(props) {\n    super(props);\n    this.state = {\n      columns: DatagridWithColumnResizing.buildColumns(gridDataJSON, 0, pinnedColumnsCount - 1).concat(DatagridWithColumnResizing.buildColumns(gridDataJSON, pinnedColumnsCount, numColumnsDisplayed - 1)),\n    };\n  }\n\n  render() {\n    const { columns } = this.state;\n    const theme = this.context;\n\n    return (\n      <div className={cx('data-grid-basic')}>\n        <DataGrid\n          id=\"column-resize-example\"\n          pinnedColumns={columns.slice(0, pinnedColumnsCount)}\n          overflowColumns={columns.slice(pinnedColumnsCount, numColumnsDisplayed)}\n          sections={[\n            DatagridWithColumnResizing.buildSection(gridDataJSON.sections[0], numRowsPerSection),\n            DatagridWithColumnResizing.buildSection(gridDataJSON.sections[1], numRowsPerSection),\n          ]}\n          hasResizableColumns\n          fill\n          onRequestColumnResize={(columnId, width) => {\n            const columnToUpdate = { ...columns.find(element => element.id === columnId) };\n            columnToUpdate.width = Math.max(width, 50);\n            this.setState(prevState => (\n              { columns: [...prevState.columns].map(val => (columnToUpdate.id === val.id ? columnToUpdate : val)) }\n            ));\n          }}\n          rowHeight={theme.className === 'orion-fusion-theme' ? '2.2rem' : undefined}\n        />\n      </div>\n    );\n  }\n}\n\nDatagridWithColumnResizing.contextType = ThemeContext;\n\nexport default DatagridWithColumnResizing;\n\n")))}s.isMDXComponent=!0;var d=t(33792),m=t(75816),f=function(n){var e=n.title,t=n.description,o=n.isExpanded;return r.createElement(d.c,{title:e||"Datagrid With Column Resizing",description:t,example:r.createElement(i.c,null),exampleCssSrc:r.createElement(m.c,null),exampleSrc:r.createElement(s,null),isExpanded:o})},p=["components"];function y(){return y=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},y.apply(this,arguments)}function b(n,e){if(null==n)return{};var t,r,o=function(n,e){if(null==n)return{};var t,r,o={},i=Object.keys(n);for(r=0;r<i.length;r++)t=i[r],e.indexOf(t)>=0||(o[t]=n[t]);return o}(n,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);for(r=0;r<i.length;r++)t=i[r],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(o[t]=n[t])}return o}var g={},h="wrapper";function v(n){var e=n.components,t=b(n,p);return(0,o.mdx)(h,y({},g,t,{components:e,mdxType:"MDXLayout"}),(0,o.mdx)(f,{description:"This example features column resizing using the draggable resize region in the column header. \nResizing for Column 1 is explicitly disabled.",mdxType:"DatagridWithColumnResizing"}))}v.isMDXComponent=!0},75816:function(n,e,t){t.d(e,{c:function(){return c}});t(11504);var r=t(69788),o=["components"];function i(){return i=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},i.apply(this,arguments)}function a(n,e){if(null==n)return{};var t,r,o=function(n,e){if(null==n)return{};var t,r,o={},i=Object.keys(n);for(r=0;r<i.length;r++)t=i[r],e.indexOf(t)>=0||(o[t]=n[t]);return o}(n,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);for(r=0;r<i.length;r++)t=i[r],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(o[t]=n[t])}return o}var l={},u="wrapper";function c(n){var e=n.components,t=a(n,o);return(0,r.mdx)(u,i({},l,t,{components:e,mdxType:"MDXLayout"}),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-scss"},":local {\n  .data-grid-basic {\n    height: 800px;\n  }\n\n  .data-grid-small {\n    height: 400px;\n  }\n\n  .data-grid-row-style {\n    height: 100%;\n    width: 100%;\n  }\n\n  .data-grid-paging {\n    height: 800px;\n    position: relative;\n  }\n  \n  .loading-overlay {\n    top: 0;\n  }\n\n  .spacer-right-medium {\n    margin-right: 0.7142857143rem;\n  }\n}\n\n\n")))}c.isMDXComponent=!0},70328:function(n,e,t){t.r(e),e.default={"clinical-lowlight-theme":"ContentCellLayout__clinical-lowlight-theme___lXNvX","orion-fusion-theme":"ContentCellLayout__orion-fusion-theme___+BKr4","content-cell":"ContentCellLayout__content-cell___wgtdc"}},6936:function(n,e,t){t.r(e),e.default={"data-grid-basic":"Datagrid-module__data-grid-basic___HxAKd","data-grid-small":"Datagrid-module__data-grid-small___WpwC9","data-grid-row-style":"Datagrid-module__data-grid-row-style___oGa6Y","data-grid-paging":"Datagrid-module__data-grid-paging___cjRSA","loading-overlay":"Datagrid-module__loading-overlay___O3A7H","spacer-right-medium":"Datagrid-module__spacer-right-medium___7mFBr"}},52916:function(n,e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=u(t(11504)),o=u(t(3268)),i=u(t(74824)),a=u(t(99640)),l=u(t(70328));function u(n){return n&&n.__esModule?n:{default:n}}var c=i.default.bind(l.default),s={text:o.default.string},d=function(n){var e=n.text,t=r.default.useContext(a.default);return r.default.createElement("div",{className:c(["content-cell",t.className])},e)};d.contextType=a.default,d.propTypes=s;e.default=d},96060:function(n,e,t){function r(n){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},r(n)}e.c=void 0;var o=d(t(11504)),i=d(t(49651)),a=d(t(74824)),l=d(t(99640)),u=d(t(52916)),c=d(t(6936)),s=d(t(59904));function d(n){return n&&n.__esModule?n:{default:n}}function m(n){return function(n){if(Array.isArray(n))return f(n)}(n)||function(n){if("undefined"!=typeof Symbol&&null!=n[Symbol.iterator]||null!=n["@@iterator"])return Array.from(n)}(n)||function(n,e){if(!n)return;if("string"==typeof n)return f(n,e);var t=Object.prototype.toString.call(n).slice(8,-1);"Object"===t&&n.constructor&&(t=n.constructor.name);if("Map"===t||"Set"===t)return Array.from(n);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return f(n,e)}(n)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function f(n,e){(null==e||e>n.length)&&(e=n.length);for(var t=0,r=new Array(e);t<e;t++)r[t]=n[t];return r}function p(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,r)}return t}function y(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?p(Object(t),!0).forEach((function(e){b(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):p(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function b(n,e,t){return(e=h(e))in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function g(n,e){for(var t=0;t<e.length;t++){var r=e[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(n,h(r.key),r)}}function h(n){var e=function(n,e){if("object"!==r(n)||null===n)return n;var t=n[Symbol.toPrimitive];if(void 0!==t){var o=t.call(n,e||"default");if("object"!==r(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(n)}(n,"string");return"symbol"===r(e)?e:String(e)}function v(n,e){return v=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(n,e){return n.__proto__=e,n},v(n,e)}function w(n){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(n){return!1}}();return function(){var t,o=O(n);if(e){var i=O(this).constructor;t=Reflect.construct(o,arguments,i)}else t=o.apply(this,arguments);return function(n,e){if(e&&("object"===r(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(n){if(void 0===n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}(n)}(this,t)}}function O(n){return O=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(n){return n.__proto__||Object.getPrototypeOf(n)},O(n)}var x=a.default.bind(c.default),C=function(n){!function(n,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");n.prototype=Object.create(e&&e.prototype,{constructor:{value:n,writable:!0,configurable:!0}}),Object.defineProperty(n,"prototype",{writable:!1}),e&&v(n,e)}(l,n);var e,t,r,a=w(l);function l(n){var e;return function(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}(this,l),(e=a.call(this,n)).state={columns:l.buildColumns(s.default,0,2).concat(l.buildColumns(s.default,3,8))},e}return e=l,r=[{key:"buildRows",value:function(n,e){return new Array(e).fill().map((function(e,t){return{id:"".concat(n.section.id,"-Row").concat(t),cells:new Array(9).fill(0).map((function(e,r){return{columnId:n.sectionRows[t].cells[r].columnId,component:o.default.createElement(u.default,{text:n.sectionRows[t].cells[r].cellContent})}}))}}))}},{key:"buildSection",value:function(n,e){return{id:n.section.id,text:n.section.text,rows:l.buildRows(n,e)}}},{key:"buildColumns",value:function(n,e,t){for(var r=new Array(t-e),o=e,i=0;o<=t;o+=1,i+=1){var a=n.allColumnIds[o];r[i]=y({id:a.id,text:1!==o?a.displayName:"".concat(a.displayName," - Not resizable"),width:200},1!==o&&{isResizable:!0})}return r}}],(t=[{key:"render",value:function(){var n=this,e=this.state.columns,t=this.context;return o.default.createElement("div",{className:x("data-grid-basic")},o.default.createElement(i.default,{id:"column-resize-example",pinnedColumns:e.slice(0,3),overflowColumns:e.slice(3,9),sections:[l.buildSection(s.default.sections[0],15),l.buildSection(s.default.sections[1],15)],hasResizableColumns:!0,fill:!0,onRequestColumnResize:function(t,r){var o=y({},e.find((function(n){return n.id===t})));o.width=Math.max(r,50),n.setState((function(n){return{columns:m(n.columns).map((function(n){return o.id===n.id?o:n}))}}))},rowHeight:"orion-fusion-theme"===t.className?"2.2rem":void 0}))}}])&&g(e.prototype,t),r&&g(e,r),Object.defineProperty(e,"prototype",{writable:!1}),l}(o.default.Component);C.contextType=l.default;e.c=C}}]);