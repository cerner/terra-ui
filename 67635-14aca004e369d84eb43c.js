"use strict";(self.webpackChunkterra_ui=self.webpackChunkterra_ui||[]).push([[67635],{67635:function(t,n,e){e.r(n),e.d(n,{default:function(){return b}});var o=e(96540),r=e(36665),a=e(31805),i=["components"];function s(){return s=Object.assign?Object.assign.bind():function(t){for(var n=1;n<arguments.length;n++){var e=arguments[n];for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o])}return t},s.apply(this,arguments)}function c(t,n){if(null==t)return{};var e,o,r=function(t,n){if(null==t)return{};var e,o,r={},a=Object.keys(t);for(o=0;o<a.length;o++)e=a[o],n.indexOf(e)>=0||(r[e]=t[e]);return r}(t,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(o=0;o<a.length;o++)e=a[o],n.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(t,e)&&(r[e]=t[e])}return r}var l={};function u(t){var n=t.components,e=c(t,i);return(0,r.mdx)("wrapper",s({},l,e,{components:n,mdxType:"MDXLayout"}),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport DataGrid from 'terra-clinical-data-grid';\nimport LoadingOverlay from 'terra-overlay/lib/LoadingOverlay';\nimport classNames from 'classnames/bind';\nimport ThemeContext from 'terra-theme-context';\nimport ContentCellLayout from './ContentCellLayout';\nimport styles from './Datagrid.module.scss';\nimport gridDataJSON from './Datagrid.json';\n\nconst cx = classNames.bind(styles);\n\nconst pinnedColumnsCount = 3;\nconst numColumnsDisplayed = 7;\nconst fetchRowSize = 6;\nconst numberOfRowsPerSectionToDisplay = 9;\nconst numSectionInSourceData = 3;\n\nclass DatagridWithPaging extends React.Component {\n  static buildRows(sectionData, numOfColumns, startingRow) {\n    const availableRows = Math.min(sectionData.sectionRows.length - startingRow, fetchRowSize, numberOfRowsPerSectionToDisplay - startingRow);\n    const rows = (new Array(availableRows)).fill().map((rowVal, rowIndex) => ({\n      id: `${sectionData.section.id}-Row${rowIndex + startingRow}`,\n      cells: (new Array(numOfColumns).fill(0)).map((cellVal, cellIndex) => ({\n        columnId: sectionData.sectionRows[rowIndex + startingRow].cells[cellIndex].columnId,\n        component: <ContentCellLayout text={sectionData.sectionRows[rowIndex + startingRow].cells[cellIndex].cellContent} />,\n      })),\n    }));\n    return rows;\n  }\n\n  static buildColumns(data, start, end) {\n    const col = (new Array(end - start));\n    for (let columnIndex = start, currentElementIndex = 0; columnIndex <= end; columnIndex += 1, currentElementIndex += 1) {\n      const columnHeaderInfo = data.allColumnIds[columnIndex];\n      col[currentElementIndex] = {\n        id: columnHeaderInfo.id,\n        text: columnHeaderInfo.displayName,\n        width: 200,\n      };\n    }\n    return col;\n  }\n\n  static buildSection(sectionData) {\n    return {\n      id: sectionData.section.id,\n      text: sectionData.section.text,\n      rows: DatagridWithPaging.buildRows(sectionData, numColumnsDisplayed, 0),\n    };\n  }\n\n  constructor(props) {\n    super(props);\n    this.state = {\n      sectionCount: 1,\n      rowcount: fetchRowSize,\n      hasMoreData: true,\n      isLoading: false,\n      sections: [DatagridWithPaging.buildSection(gridDataJSON.sections[0])],\n    };\n  }\n\n  componentWillUnmount() {\n    clearTimeout(this.pagingTimeout);\n  }\n\n  getStateAfterFetchingMoreData() {\n    return (prevState) => {\n      let rowsAdded = [];\n      const sectionData = gridDataJSON.sections[this.state.sectionCount - 1];\n      let modifiedSections = [...prevState.sections];\n\n      if (this.state.rowcount < numberOfRowsPerSectionToDisplay) {\n        // Add more rows to the existing section if there are additional rows for that section in the source data.\n        rowsAdded = DatagridWithPaging.buildRows(sectionData, numColumnsDisplayed, this.state.rowcount);\n        modifiedSections[this.state.sectionCount - 1].rows = modifiedSections[this.state.sectionCount - 1].rows.concat(rowsAdded);\n      } else if (this.state.sectionCount < gridDataJSON.sections.length) {\n        // Add a new section if there are additional sections in the source data.\n        this.state.sectionCount += 1;\n        this.state.rowcount = fetchRowSize;\n        modifiedSections = modifiedSections.concat(DatagridWithPaging.buildSection(gridDataJSON.sections[this.state.sectionCount - 1]));\n      } else {\n        // Done fetching all sections/rows from the source data.\n        this.state.hasMoreData = false;\n      }\n      return {\n        sectionCount: this.state.sectionCount,\n        isLoading: false,\n        hasMoreData: this.state.hasMoreData,\n        rowcount: this.state.rowcount + rowsAdded.length,\n        sections: modifiedSections,\n      };\n    };\n  }\n\n  render() {\n    const theme = this.context;\n\n    return (\n      <div className={cx('data-grid-paging')}>\n        <DataGrid\n          id=\"paging-example\"\n          pinnedColumns={DatagridWithPaging.buildColumns(gridDataJSON, 0, pinnedColumnsCount - 1)}\n          overflowColumns={DatagridWithPaging.buildColumns(gridDataJSON, pinnedColumnsCount, numColumnsDisplayed - 1)}\n          sections={this.state.sections}\n          fill\n          onRequestContent={this.state.sectionCount <= numSectionInSourceData && this.state.hasMoreData ? (() => {\n            this.setState({ isLoading: true }, () => {\n              clearTimeout(this.pagingTimeout);\n              this.pagingTimeout = setTimeout(() => {\n                this.setState(this.getStateAfterFetchingMoreData());\n              }, 2000);\n            });\n          }) : undefined}\n          rowHeight={theme.className === 'orion-fusion-theme' ? '2.2rem' : undefined}\n        />\n        <LoadingOverlay isOpen={this.state.isLoading} isRelativeToContainer isAnimated className={cx('loading-overlay')} />\n      </div>\n    );\n  }\n}\n\nDatagridWithPaging.contextType = ThemeContext;\n\nexport default DatagridWithPaging;\n\n")))}u.isMDXComponent=!0;var d=e(201),f=e(93127),m=function(t){var n=t.title,e=t.description,r=t.isExpanded;return o.createElement(d.A,{title:n||"Datagrid With Paging",description:e,example:o.createElement(a.A,null),exampleCssSrc:o.createElement(f.A,null),exampleSrc:o.createElement(u,null),isExpanded:r})},p=["components"];function g(){return g=Object.assign?Object.assign.bind():function(t){for(var n=1;n<arguments.length;n++){var e=arguments[n];for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o])}return t},g.apply(this,arguments)}function h(t,n){if(null==t)return{};var e,o,r=function(t,n){if(null==t)return{};var e,o,r={},a=Object.keys(t);for(o=0;o<a.length;o++)e=a[o],n.indexOf(e)>=0||(r[e]=t[e]);return r}(t,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(o=0;o<a.length;o++)e=a[o],n.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(t,e)&&(r[e]=t[e])}return r}var y={},w="wrapper";function b(t){var n=t.components,e=h(t,p);return(0,r.mdx)(w,g({},y,e,{components:n,mdxType:"MDXLayout"}),(0,r.mdx)(m,{description:"This example features dynamic content loading using the DataGrid's `onRequestContent` prop. \nUp to 3 sections are loaded as the user scrolls through the example.",mdxType:"DatagridWithPaging"}))}b.isMDXComponent=!0},93127:function(t,n,e){e.d(n,{A:function(){return l}});e(96540);var o=e(36665),r=["components"];function a(){return a=Object.assign?Object.assign.bind():function(t){for(var n=1;n<arguments.length;n++){var e=arguments[n];for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o])}return t},a.apply(this,arguments)}function i(t,n){if(null==t)return{};var e,o,r=function(t,n){if(null==t)return{};var e,o,r={},a=Object.keys(t);for(o=0;o<a.length;o++)e=a[o],n.indexOf(e)>=0||(r[e]=t[e]);return r}(t,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(o=0;o<a.length;o++)e=a[o],n.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(t,e)&&(r[e]=t[e])}return r}var s={},c="wrapper";function l(t){var n=t.components,e=i(t,r);return(0,o.mdx)(c,a({},s,e,{components:n,mdxType:"MDXLayout"}),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-scss"},":local {\n  .data-grid-basic {\n    height: 800px;\n  }\n\n  .data-grid-small {\n    height: 400px;\n  }\n\n  .data-grid-row-style {\n    height: 100%;\n    width: 100%;\n  }\n\n  .data-grid-paging {\n    height: 800px;\n    position: relative;\n  }\n  \n  .loading-overlay {\n    top: 0;\n  }\n\n  .spacer-right-medium {\n    margin-right: 0.7142857143rem;\n  }\n}\n\n\n")))}l.isMDXComponent=!0},44136:function(t,n,e){e.r(n),n.default={"clinical-lowlight-theme":"ContentCellLayout__clinical-lowlight-theme___lXNvX","orion-fusion-theme":"ContentCellLayout__orion-fusion-theme___+BKr4","content-cell":"ContentCellLayout__content-cell___wgtdc"}},37577:function(t,n,e){e.r(n),n.default={"data-grid-basic":"Datagrid-module__data-grid-basic___HxAKd","data-grid-small":"Datagrid-module__data-grid-small___WpwC9","data-grid-row-style":"Datagrid-module__data-grid-row-style___oGa6Y","data-grid-paging":"Datagrid-module__data-grid-paging___cjRSA","loading-overlay":"Datagrid-module__loading-overlay___O3A7H","spacer-right-medium":"Datagrid-module__spacer-right-medium___7mFBr"}},94698:function(t,n,e){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var o=c(e(96540)),r=c(e(5556)),a=c(e(67967)),i=c(e(52103)),s=c(e(44136));function c(t){return t&&t.__esModule?t:{default:t}}var l=a.default.bind(s.default),u={text:r.default.string},d=function(t){var n=t.text,e=o.default.useContext(i.default);return o.default.createElement("div",{className:l(["content-cell",e.className])},n)};d.contextType=i.default,d.propTypes=u;n.default=d},31805:function(t,n,e){function o(t){return o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},o(t)}n.A=void 0;var r=f(e(96540)),a=f(e(37599)),i=f(e(20658)),s=f(e(67967)),c=f(e(52103)),l=f(e(94698)),u=f(e(37577)),d=f(e(10978));function f(t){return t&&t.__esModule?t:{default:t}}function m(t){return function(t){if(Array.isArray(t))return p(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||function(t,n){if(!t)return;if("string"==typeof t)return p(t,n);var e=Object.prototype.toString.call(t).slice(8,-1);"Object"===e&&t.constructor&&(e=t.constructor.name);if("Map"===e||"Set"===e)return Array.from(t);if("Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return p(t,n)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function p(t,n){(null==n||n>t.length)&&(n=t.length);for(var e=0,o=new Array(n);e<n;e++)o[e]=t[e];return o}function g(t,n){for(var e=0;e<n.length;e++){var o=n[e];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,h(o.key),o)}}function h(t){var n=function(t,n){if("object"!=o(t)||!t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var r=e.call(t,n||"default");if("object"!=o(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===n?String:Number)(t)}(t,"string");return"symbol"==o(n)?n:String(n)}function y(t,n,e){return n=b(n),function(t,n){if(n&&("object"===o(n)||"function"==typeof n))return n;if(void 0!==n)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(t,w()?Reflect.construct(n,e||[],b(t).constructor):n.apply(t,e))}function w(){try{var t=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(t){}return(w=function(){return!!t})()}function b(t){return b=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},b(t)}function v(t,n){return v=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,n){return t.__proto__=n,t},v(t,n)}var C=s.default.bind(u.default),x=function(t){function n(t){var e;return function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}(this,n),(e=y(this,n,[t])).state={sectionCount:1,rowcount:6,hasMoreData:!0,isLoading:!1,sections:[n.buildSection(d.default.sections[0])]},e}var e,o,s;return function(t,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(n&&n.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),n&&v(t,n)}(n,t),e=n,s=[{key:"buildRows",value:function(t,n,e){var o=Math.min(t.sectionRows.length-e,6,9-e);return new Array(o).fill().map((function(o,a){return{id:"".concat(t.section.id,"-Row").concat(a+e),cells:new Array(n).fill(0).map((function(n,o){return{columnId:t.sectionRows[a+e].cells[o].columnId,component:r.default.createElement(l.default,{text:t.sectionRows[a+e].cells[o].cellContent})}}))}}))}},{key:"buildColumns",value:function(t,n,e){for(var o=new Array(e-n),r=n,a=0;r<=e;r+=1,a+=1){var i=t.allColumnIds[r];o[a]={id:i.id,text:i.displayName,width:200}}return o}},{key:"buildSection",value:function(t){return{id:t.section.id,text:t.section.text,rows:n.buildRows(t,7,0)}}}],(o=[{key:"componentWillUnmount",value:function(){clearTimeout(this.pagingTimeout)}},{key:"getStateAfterFetchingMoreData",value:function(){var t=this;return function(e){var o=[],r=d.default.sections[t.state.sectionCount-1],a=m(e.sections);return t.state.rowcount<9?(o=n.buildRows(r,7,t.state.rowcount),a[t.state.sectionCount-1].rows=a[t.state.sectionCount-1].rows.concat(o)):t.state.sectionCount<d.default.sections.length?(t.state.sectionCount+=1,t.state.rowcount=6,a=a.concat(n.buildSection(d.default.sections[t.state.sectionCount-1]))):t.state.hasMoreData=!1,{sectionCount:t.state.sectionCount,isLoading:!1,hasMoreData:t.state.hasMoreData,rowcount:t.state.rowcount+o.length,sections:a}}}},{key:"render",value:function(){var t=this,e=this.context;return r.default.createElement("div",{className:C("data-grid-paging")},r.default.createElement(a.default,{id:"paging-example",pinnedColumns:n.buildColumns(d.default,0,2),overflowColumns:n.buildColumns(d.default,3,6),sections:this.state.sections,fill:!0,onRequestContent:this.state.sectionCount<=3&&this.state.hasMoreData?function(){t.setState({isLoading:!0},(function(){clearTimeout(t.pagingTimeout),t.pagingTimeout=setTimeout((function(){t.setState(t.getStateAfterFetchingMoreData())}),2e3)}))}:void 0,rowHeight:"orion-fusion-theme"===e.className?"2.2rem":void 0}),r.default.createElement(i.default,{isOpen:this.state.isLoading,isRelativeToContainer:!0,isAnimated:!0,className:C("loading-overlay")}))}}])&&g(e.prototype,o),s&&g(e,s),Object.defineProperty(e,"prototype",{writable:!1}),n}(r.default.Component);x.contextType=c.default;n.A=x}}]);