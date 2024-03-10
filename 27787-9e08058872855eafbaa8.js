"use strict";(self.webpackChunkterra_ui=self.webpackChunkterra_ui||[]).push([[27787],{68925:function(e,n,t){t.r(n),t.d(n,{default:function(){return v}});var r=t(96540),o=t(36665),a=t(31561),l=["components"];function i(){return i=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},i.apply(this,arguments)}function c(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var u={};function s(e){var n=e.components,t=c(e,l);return(0,o.mdx)("wrapper",i({},u,t,{components:n,mdxType:"MDXLayout"}),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport DataGrid from 'terra-clinical-data-grid';\nimport ItemView from 'terra-clinical-item-view';\nimport classNames from 'classnames/bind';\nimport CustomHeaderCellLayout from './CustomHeaderCellLayout';\nimport styles from './Datagrid.module.scss';\nimport gridDataJSON from './Datagrid.json';\n\nconst cx = classNames.bind(styles);\nconst numColumnsDisplayed = 10;\nconst pinnedColumnsCount = 3;\nconst numRowsPerSection = 15;\n\nclass DatagridWithCustomContent extends React.Component {\n  static buildRows(sectionData, numOfColumns, numberOfRowsToDisplay) {\n    const rows = (new Array(numberOfRowsToDisplay)).fill().map((rowVal, rowIndex) => ({\n      id: `${sectionData.section.id}-Row${rowIndex}`,\n      cells: (new Array(numOfColumns).fill(0)).map((cellVal, cellIndex) => ({\n        columnId: sectionData.sectionRows[rowIndex].cells[cellIndex].columnId,\n        component: (\n          <ItemView\n            displays={[\n              <ItemView.Display isTruncated text={sectionData.sectionRows[rowIndex].cells[cellIndex].cellContent} />,\n              <ItemView.Display isTruncated text={sectionData.sectionRows[rowIndex].cells[cellIndex].cellContent2} />,\n              <ItemView.Display isTruncated {...(sectionData.sectionRows[rowIndex].cells[cellIndex].cellContent2 === '' ? {} : { text: sectionData.sectionRows[rowIndex].cells[cellIndex].cellContent3 })} />,\n            ]}\n            className={cx('data-grid-row-style')}\n          />\n        ),\n      })),\n    }));\n    return rows;\n  }\n\n  static buildSection(sectionData, numberOfRows) {\n    return {\n      id: sectionData.section.id,\n      rows: DatagridWithCustomContent.buildRows(sectionData, numColumnsDisplayed, numberOfRows),\n    };\n  }\n\n  static buildColumns(data, start, end) {\n    const col = (new Array(end - start));\n    for (let columnIndex = start, currentElementIndex = 0; columnIndex <= end; columnIndex += 1, currentElementIndex += 1) {\n      const columnHeaderInfo = data.allColumnIds[columnIndex];\n      col[currentElementIndex] = {\n        id: columnHeaderInfo.id,\n        width: 200,\n        component: (<CustomHeaderCellLayout primaryText={columnHeaderInfo.displayName} secondaryText={gridDataJSON.secondayColumnHeadings[columnIndex]} />),\n      };\n    }\n    return col;\n  }\n\n  render() {\n    return (\n      <div className={cx('data-grid-basic')}>\n        <DataGrid\n          id=\"basic-example\"\n          pinnedColumns={DatagridWithCustomContent.buildColumns(gridDataJSON, 0, pinnedColumnsCount - 1)}\n          overflowColumns={DatagridWithCustomContent.buildColumns(gridDataJSON, pinnedColumnsCount, numColumnsDisplayed - 1)}\n          sections={[\n            DatagridWithCustomContent.buildSection(gridDataJSON.sections[0], numRowsPerSection),\n          ]}\n          rowHeight=\"5rem\"\n          headerHeight=\"4rem\"\n          fill\n        />\n      </div>\n    );\n  }\n}\n\nexport default DatagridWithCustomContent;\n\n")))}s.isMDXComponent=!0;var d=t(201),m=t(93127),f=function(e){var n=e.title,t=e.description,o=e.isExpanded;return r.createElement(d.A,{title:n||"Datagrid With Custom Content",description:t,example:r.createElement(a.A,null),exampleCssSrc:r.createElement(m.A,null),exampleSrc:r.createElement(s,null),isExpanded:o})},p=["components"];function y(){return y=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},y.apply(this,arguments)}function b(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var g={},w="wrapper";function v(e){var n=e.components,t=b(e,p);return(0,o.mdx)(w,y({},g,t,{components:n,mdxType:"MDXLayout"}),(0,o.mdx)(f,{description:"This example features custom header cell implementations and more complex content cells.",mdxType:"DatagridWithCustomContent"}))}v.isMDXComponent=!0},93127:function(e,n,t){t.d(n,{A:function(){return u}});t(96540);var r=t(36665),o=["components"];function a(){return a=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},a.apply(this,arguments)}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var i={},c="wrapper";function u(e){var n=e.components,t=l(e,o);return(0,r.mdx)(c,a({},i,t,{components:n,mdxType:"MDXLayout"}),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-scss"},":local {\n  .data-grid-basic {\n    height: 800px;\n  }\n\n  .data-grid-small {\n    height: 400px;\n  }\n\n  .data-grid-row-style {\n    height: 100%;\n    width: 100%;\n  }\n\n  .data-grid-paging {\n    height: 800px;\n    position: relative;\n  }\n  \n  .loading-overlay {\n    top: 0;\n  }\n\n  .spacer-right-medium {\n    margin-right: 0.7142857143rem;\n  }\n}\n\n\n")))}u.isMDXComponent=!0},74537:function(e,n,t){t.r(n),n.default={"custom-header-cell":"CustomHeaderCellLayout__custom-header-cell___GLtLO",primary:"CustomHeaderCellLayout__primary___eEnhr",secondary:"CustomHeaderCellLayout__secondary___dvRwS"}},37577:function(e,n,t){t.r(n),n.default={"data-grid-basic":"Datagrid-module__data-grid-basic___HxAKd","data-grid-small":"Datagrid-module__data-grid-small___WpwC9","data-grid-row-style":"Datagrid-module__data-grid-row-style___oGa6Y","data-grid-paging":"Datagrid-module__data-grid-paging___cjRSA","loading-overlay":"Datagrid-module__loading-overlay___O3A7H","spacer-right-medium":"Datagrid-module__spacer-right-medium___7mFBr"}},7037:function(e,n,t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var r=i(t(96540)),o=i(t(5556)),a=i(t(67967)),l=i(t(74537));function i(e){return e&&e.__esModule?e:{default:e}}var c=a.default.bind(l.default),u={primaryText:o.default.string,secondaryText:o.default.string},s=function(e){var n=e.primaryText,t=e.secondaryText;return r.default.createElement("div",{className:c("custom-header-cell")},r.default.createElement("div",{className:c("primary")},n),r.default.createElement("div",{className:c("secondary")},t))};s.propTypes=u;n.default=s},31561:function(e,n,t){function r(e){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(e)}n.A=void 0;var o=d(t(96540)),a=d(t(37599)),l=d(t(99041)),i=d(t(67967)),c=d(t(7037)),u=d(t(37577)),s=d(t(10978));function d(e){return e&&e.__esModule?e:{default:e}}function m(){return m=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},m.apply(this,arguments)}function f(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,p(r.key),r)}}function p(e){var n=function(e,n){if("object"!=r(e)||!e)return e;var t=e[Symbol.toPrimitive];if(void 0!==t){var o=t.call(e,n||"default");if("object"!=r(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===n?String:Number)(e)}(e,"string");return"symbol"==r(n)?n:String(n)}function y(e,n,t){return n=g(n),function(e,n){if(n&&("object"===r(n)||"function"==typeof n))return n;if(void 0!==n)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(e,b()?Reflect.construct(n,t||[],g(e).constructor):n.apply(e,t))}function b(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(b=function(){return!!e})()}function g(e){return g=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},g(e)}function w(e,n){return w=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,n){return e.__proto__=n,e},w(e,n)}var v=i.default.bind(u.default),h=function(e){function n(){return function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,n),y(this,n,arguments)}var t,r,i;return function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),n&&w(e,n)}(n,e),t=n,i=[{key:"buildRows",value:function(e,n,t){return new Array(t).fill().map((function(t,r){return{id:"".concat(e.section.id,"-Row").concat(r),cells:new Array(n).fill(0).map((function(n,t){return{columnId:e.sectionRows[r].cells[t].columnId,component:o.default.createElement(l.default,{displays:[o.default.createElement(l.default.Display,{isTruncated:!0,text:e.sectionRows[r].cells[t].cellContent}),o.default.createElement(l.default.Display,{isTruncated:!0,text:e.sectionRows[r].cells[t].cellContent2}),o.default.createElement(l.default.Display,m({isTruncated:!0},""===e.sectionRows[r].cells[t].cellContent2?{}:{text:e.sectionRows[r].cells[t].cellContent3}))],className:v("data-grid-row-style")})}}))}}))}},{key:"buildSection",value:function(e,t){return{id:e.section.id,rows:n.buildRows(e,10,t)}}},{key:"buildColumns",value:function(e,n,t){for(var r=new Array(t-n),a=n,l=0;a<=t;a+=1,l+=1){var i=e.allColumnIds[a];r[l]={id:i.id,width:200,component:o.default.createElement(c.default,{primaryText:i.displayName,secondaryText:s.default.secondayColumnHeadings[a]})}}return r}}],(r=[{key:"render",value:function(){return o.default.createElement("div",{className:v("data-grid-basic")},o.default.createElement(a.default,{id:"basic-example",pinnedColumns:n.buildColumns(s.default,0,2),overflowColumns:n.buildColumns(s.default,3,9),sections:[n.buildSection(s.default.sections[0],15)],rowHeight:"5rem",headerHeight:"4rem",fill:!0}))}}])&&f(t.prototype,r),i&&f(t,i),Object.defineProperty(t,"prototype",{writable:!1}),n}(o.default.Component);n.A=h},92613:function(e,n,t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var r=a(t(96540)),o=a(t(25365));function a(e){return e&&e.__esModule?e:{default:e}}function l(){return l=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},l.apply(this,arguments)}var i=function(e){var n=l({},e);return r.default.createElement(o.default,n,r.default.createElement("path",{d:"M46 2.1H2a2 2 0 0 0-2 2v28a2 2 0 0 0 2 2h31.2L45 45.9V34.1h1a2 2 0 0 0 2-2v-28a2 2 0 0 0-2-2z"}))};i.displayName="IconComment",i.defaultProps={viewBox:"0 0 48 48","data-name":"Layer 1",xmlns:"http://www.w3.org/2000/svg"};n.default=i}}]);