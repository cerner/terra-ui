"use strict";(self.webpackChunkterra_ui=self.webpackChunkterra_ui||[]).push([[96936],{96936:function(n,e,t){t.r(e),t.d(e,{default:function(){return w}});var r=t(67294),o=t(81254),i=t(4531),a=["components"];function l(){return l=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},l.apply(this,arguments)}function u(n,e){if(null==n)return{};var t,r,o=function(n,e){if(null==n)return{};var t,r,o={},i=Object.keys(n);for(r=0;r<i.length;r++)t=i[r],e.indexOf(t)>=0||(o[t]=n[t]);return o}(n,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);for(r=0;r<i.length;r++)t=i[r],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(o[t]=n[t])}return o}var c={};function s(n){var e=n.components,t=u(n,a);return(0,o.mdx)("wrapper",l({},c,t,{components:e,mdxType:"MDXLayout"}),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport DataGrid from 'terra-clinical-data-grid';\nimport classNames from 'classnames/bind';\nimport ContentCellLayout from './ContentCellLayout';\nimport styles from './Datagrid.module.scss';\nimport gridDataJSON from './Datagrid.json';\n\nconst cx = classNames.bind(styles);\n\nconst defaultColumnWidth = 250;\nconst firstColumnWidth = 400;\nconst numColumnsDisplayed = 10;\nconst pinnedColumnsCount = 3;\nconst numRowsPerSection = 15;\n\nclass StaticDataGrid extends React.Component {\n  static buildRows(sectionData, numOfColumns, numberOfRowsToDisplay) {\n    const rows = (new Array(numberOfRowsToDisplay)).fill().map((rowVal, rowIndex) => ({\n      id: `${sectionData.section.id}-Row${rowIndex}`,\n      height: (rowIndex + 1) % 5 === 0 ? '7rem' : undefined,\n      cells: (new Array(numOfColumns).fill(0)).map((cellVal, cellIndex) => ({\n        columnId: sectionData.sectionRows[rowIndex].cells[cellIndex].columnId,\n        component: <ContentCellLayout text={sectionData.sectionRows[rowIndex].cells[cellIndex].cellContent} />,\n      })),\n    }));\n\n    return rows;\n  }\n\n  static buildSection(sectionData, numberOfRows) {\n    return {\n      id: sectionData.section.id,\n      rows: StaticDataGrid.buildRows(sectionData, numColumnsDisplayed, numberOfRows),\n    };\n  }\n\n  static buildColumns(data, start, end) {\n    const col = (new Array(end - start));\n    for (let columnIndex = start, currentElementIndex = 0; columnIndex <= end; columnIndex += 1, currentElementIndex += 1) {\n      const columnHeaderInfo = data.allColumnIds[columnIndex];\n      col[currentElementIndex] = {\n        id: columnHeaderInfo.id,\n        text: columnHeaderInfo.displayName,\n        ...(columnIndex === 0) && { width: firstColumnWidth },\n      };\n    }\n    return col;\n  }\n\n  render() {\n    return (\n      <div className={cx('data-grid-basic')}>\n        <DataGrid\n          id=\"basic-example\"\n          pinnedColumns={StaticDataGrid.buildColumns(gridDataJSON, 0, pinnedColumnsCount - 1)}\n          overflowColumns={StaticDataGrid.buildColumns(gridDataJSON, pinnedColumnsCount, numColumnsDisplayed - 1)}\n          sections={[\n            StaticDataGrid.buildSection(gridDataJSON.sections[0], numRowsPerSection),\n          ]}\n          defaultColumnWidth={defaultColumnWidth}\n          fill\n        />\n      </div>\n    );\n  }\n}\n\nexport default StaticDataGrid;\n\n")))}s.isMDXComponent=!0;var d=t(49271),f=t(97956),p=function(n){var e=n.title,t=n.description,o=n.isExpanded;return r.createElement(d.Z,{title:e||"Datagrid",description:t,example:r.createElement(i.Z,null),exampleCssSrc:r.createElement(f.Z,null),exampleSrc:r.createElement(s,null),isExpanded:o})},m=["components"];function y(){return y=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},y.apply(this,arguments)}function b(n,e){if(null==n)return{};var t,r,o=function(n,e){if(null==n)return{};var t,r,o={},i=Object.keys(n);for(r=0;r<i.length;r++)t=i[r],e.indexOf(t)>=0||(o[t]=n[t]);return o}(n,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);for(r=0;r<i.length;r++)t=i[r],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(o[t]=n[t])}return o}var g={},v="wrapper";function w(n){var e=n.components,t=b(n,m);return(0,o.mdx)(v,y({},g,t,{components:e,mdxType:"MDXLayout"}),(0,o.mdx)(p,{description:"This is a basic example featuring pinned columns and overflow in both directions. \nA default column width of 250px is used, but Column 0 is using an explicit 400px width. \nEvery 5th row has an explicit 7rem height.",mdxType:"Datagrid"}))}w.isMDXComponent=!0},97956:function(n,e,t){t.d(e,{Z:function(){return c}});t(67294);var r=t(81254),o=["components"];function i(){return i=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},i.apply(this,arguments)}function a(n,e){if(null==n)return{};var t,r,o=function(n,e){if(null==n)return{};var t,r,o={},i=Object.keys(n);for(r=0;r<i.length;r++)t=i[r],e.indexOf(t)>=0||(o[t]=n[t]);return o}(n,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);for(r=0;r<i.length;r++)t=i[r],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(o[t]=n[t])}return o}var l={},u="wrapper";function c(n){var e=n.components,t=a(n,o);return(0,r.mdx)(u,i({},l,t,{components:e,mdxType:"MDXLayout"}),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-scss"},":local {\n  .data-grid-basic {\n    height: 800px;\n  }\n\n  .data-grid-small {\n    height: 400px;\n  }\n\n  .data-grid-row-style {\n    height: 100%;\n    width: 100%;\n  }\n\n  .data-grid-paging {\n    height: 800px;\n    position: relative;\n  }\n  \n  .loading-overlay {\n    top: 0;\n  }\n\n  .spacer-right-medium {\n    margin-right: 0.7142857143rem;\n  }\n}\n\n\n")))}c.isMDXComponent=!0},43458:function(n,e,t){t.r(e),e.default={"orion-fusion-theme":"ContentCellLayout__orion-fusion-theme___+BKr4","content-cell":"ContentCellLayout__content-cell___wgtdc"}},87535:function(n,e,t){t.r(e),e.default={"data-grid-basic":"Datagrid-module__data-grid-basic___HxAKd","data-grid-small":"Datagrid-module__data-grid-small___WpwC9","data-grid-row-style":"Datagrid-module__data-grid-row-style___oGa6Y","data-grid-paging":"Datagrid-module__data-grid-paging___cjRSA","loading-overlay":"Datagrid-module__loading-overlay___O3A7H","spacer-right-medium":"Datagrid-module__spacer-right-medium___7mFBr"}},87900:function(n,e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=u(t(67294)),o=u(t(45697)),i=u(t(47166)),a=u(t(50026)),l=u(t(43458));function u(n){return n&&n.__esModule?n:{default:n}}var c=i.default.bind(l.default),s={text:o.default.string},d=function(n){var e=n.text,t=r.default.useContext(a.default);return r.default.createElement("div",{className:c(["content-cell",t.className])},e)};d.contextType=a.default,d.propTypes=s;var f=d;e.default=f},4531:function(n,e,t){function r(n){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},r(n)}e.Z=void 0;var o=s(t(67294)),i=s(t(81059)),a=s(t(47166)),l=s(t(87900)),u=s(t(87535)),c=s(t(40168));function s(n){return n&&n.__esModule?n:{default:n}}function d(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,r)}return t}function f(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?d(Object(t),!0).forEach((function(e){p(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):d(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function p(n,e,t){return(e=y(e))in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function m(n,e){for(var t=0;t<e.length;t++){var r=e[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(n,y(r.key),r)}}function y(n){var e=function(n,e){if("object"!==r(n)||null===n)return n;var t=n[Symbol.toPrimitive];if(void 0!==t){var o=t.call(n,e||"default");if("object"!==r(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(n)}(n,"string");return"symbol"===r(e)?e:String(e)}function b(n,e){return b=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(n,e){return n.__proto__=e,n},b(n,e)}function g(n){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(n){return!1}}();return function(){var t,o=v(n);if(e){var i=v(this).constructor;t=Reflect.construct(o,arguments,i)}else t=o.apply(this,arguments);return function(n,e){if(e&&("object"===r(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(n){if(void 0===n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}(n)}(this,t)}}function v(n){return v=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(n){return n.__proto__||Object.getPrototypeOf(n)},v(n)}var w=a.default.bind(u.default),O=function(n){!function(n,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");n.prototype=Object.create(e&&e.prototype,{constructor:{value:n,writable:!0,configurable:!0}}),Object.defineProperty(n,"prototype",{writable:!1}),e&&b(n,e)}(u,n);var e,t,r,a=g(u);function u(){return function(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),a.apply(this,arguments)}return e=u,r=[{key:"buildRows",value:function(n,e,t){return new Array(t).fill().map((function(t,r){return{id:"".concat(n.section.id,"-Row").concat(r),height:(r+1)%5==0?"7rem":void 0,cells:new Array(e).fill(0).map((function(e,t){return{columnId:n.sectionRows[r].cells[t].columnId,component:o.default.createElement(l.default,{text:n.sectionRows[r].cells[t].cellContent})}}))}}))}},{key:"buildSection",value:function(n,e){return{id:n.section.id,rows:u.buildRows(n,10,e)}}},{key:"buildColumns",value:function(n,e,t){for(var r=new Array(t-e),o=e,i=0;o<=t;o+=1,i+=1){var a=n.allColumnIds[o];r[i]=f({id:a.id,text:a.displayName},0===o&&{width:400})}return r}}],(t=[{key:"render",value:function(){return o.default.createElement("div",{className:w("data-grid-basic")},o.default.createElement(i.default,{id:"basic-example",pinnedColumns:u.buildColumns(c.default,0,2),overflowColumns:u.buildColumns(c.default,3,9),sections:[u.buildSection(c.default.sections[0],15)],defaultColumnWidth:250,fill:!0}))}}])&&m(e.prototype,t),r&&m(e,r),Object.defineProperty(e,"prototype",{writable:!1}),u}(o.default.Component),h=O;e.Z=h}}]);