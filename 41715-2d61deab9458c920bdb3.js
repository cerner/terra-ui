"use strict";(self.webpackChunkterra_ui=self.webpackChunkterra_ui||[]).push([[41715],{41715:function(e,t,n){n.r(t),n.d(t,{default:function(){return b}});var i=n(67294),o=n(81254),r=n(26662),a=["components"];function l(){return l=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},l.apply(this,arguments)}function d(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c={};function s(e){var t=e.components,n=d(e,a);return(0,o.mdx)("wrapper",l({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport DataGrid from 'terra-clinical-data-grid';\nimport classNames from 'classnames/bind';\nimport ThemeContext from 'terra-theme-context';\nimport ContentCellLayout from './ContentCellLayout';\nimport styles from './Datagrid.module.scss';\n\nconst cx = classNames.bind(styles);\nconst grid1 = 'Grid1';\nconst grid2 = 'Grid2';\n\nclass MultipleDatagrids extends React.Component {\n  constructor(props) {\n    super(props);\n\n    this.buildSection = this.buildSection.bind(this);\n    this.buildRows = this.buildRows.bind(this);\n\n    this.state = {\n      gridData: {\n        [grid1]: {\n          sortedColumnId: 'Column-0',\n          sortedColumnDirection: 'ascending',\n          selectedRow: undefined,\n          selectedCell: undefined,\n          columnHighlightId: 'Column-1',\n          collapsedSectionList: [],\n          columns: {\n            'Column-0': {\n              id: 'Column-0',\n              width: 200,\n              text: 'Grid 1 Column 0',\n              isSelectable: true,\n              sortIndicator: 'ascending',\n              isResizable: true,\n            },\n            'Column-1': {\n              id: 'Column-1',\n              width: 200,\n              text: 'Grid 1 Column 1',\n              isSelectable: true,\n              isResizable: true,\n            },\n            'Column-2': {\n              id: 'Column-2',\n              width: 200,\n              text: 'Grid 1 Column 2',\n              isSelectable: true,\n              isResizable: true,\n            },\n            'Column-3': {\n              id: 'Column-3',\n              width: 200,\n              text: 'Grid 1 Column 3',\n              isSelectable: true,\n              isResizable: true,\n            },\n          },\n        },\n        [grid2]: {\n          sortedColumnId: 'Column-0',\n          sortedColumnDirection: 'descending',\n          selectedRow: undefined,\n          selectedCell: undefined,\n          columnHighlightId: 'Column-0',\n          collapsedSectionList: [],\n          columns: {\n            'Column-0': {\n              id: 'Column-0',\n              width: 200,\n              text: 'Column 0',\n              isSelectable: true,\n              sortIndicator: 'descending',\n              isResizable: true,\n            },\n            'Column-1': {\n              id: 'Column-1',\n              width: 200,\n              text: 'Column 1',\n              isSelectable: true,\n              isResizable: true,\n            },\n            'Column-2': {\n              id: 'Column-2',\n              width: 200,\n              text: 'Column 2',\n              isSelectable: true,\n              isResizable: true,\n            },\n            'Column-3': {\n              id: 'Column-3',\n              width: 200,\n              text: 'Column 3',\n              isSelectable: true,\n              isResizable: true,\n            },\n          },\n        },\n      },\n    };\n  }\n\n  buildRows(gridId, sectionId, numOfRows) {\n    const gridData = this.state.gridData[gridId];\n    const rows = (new Array(numOfRows)).fill().map((rowVal, rowIndex) => ({\n      id: `Row-${rowIndex}`,\n      isSelectable: true,\n      isSelected: gridData.selectedRow && gridData.selectedRow.sectionId === sectionId && gridData.selectedRow.rowId === `Row-${rowIndex}`,\n      cells: ((new Array(4).fill(0)).map((cellVal, cellIndex) => (Object.values(gridData.columns)[cellIndex].id))).map((columnKey) => ({\n        columnId: columnKey,\n        isSelectable: true,\n        isSelected: gridData.selectedCell && gridData.selectedCell.sectionId === sectionId && gridData.selectedCell.rowId === `Row-${rowIndex}` && gridData.selectedCell.columnId === columnKey,\n        component: <ContentCellLayout text={`Row-${rowIndex}, ${columnKey}`} />,\n      })),\n    }));\n\n    return gridData.sortedColumnId && gridData.sortedColumnDirection === 'ascending' ? rows : rows.reverse();\n  }\n\n  buildSection(gridId, sectionId, sectionName, numberOfRows) {\n    return {\n      id: sectionId,\n      text: sectionName,\n      isCollapsible: true,\n      isCollapsed: this.state.gridData[gridId].collapsedSectionList.includes(sectionId),\n      rows: this.buildRows(gridId, sectionId, numberOfRows),\n    };\n  }\n\n  render() {\n    const { gridData } = this.state;\n    const theme = this.context;\n    return (\n      <div>\n        <div className={cx('data-grid-small')}>\n          <DataGrid\n            id={grid1}\n            pinnedColumns={[\n              gridData[grid1].columns['Column-0'],\n              gridData[grid1].columns['Column-1'],\n            ]}\n            overflowColumns={[\n              gridData[grid1].columns['Column-2'],\n              gridData[grid1].columns['Column-3'],\n            ]}\n            columnHighlightId={gridData[grid1].columnHighlightId}\n            sections={[\n              this.buildSection(grid1, 'Grid-1-Section-0', 'Grid 1 Section 0', 4),\n              this.buildSection(grid1, 'Grid-1-Section-1', 'Grid 1 Section 1', 4),\n            ]}\n            fill\n            onColumnSelect={(columnId) => {\n              const newColumns = {};\n              const myGridData = this.state.gridData[grid1];\n\n              const columnToSort = { ...Object.values(myGridData.columns).find(element => element.id === columnId) };\n              columnToSort.sortIndicator = columnToSort.sortIndicator === 'ascending' ? 'descending' : 'ascending';\n              newColumns[`${columnId}`] = columnToSort;\n\n              if (columnId !== myGridData.sortedColumnId) {\n                const previouslySortedColumn = { ...Object.values(myGridData.columns).find(element => element.id === myGridData.sortedColumnId) };\n                if (previouslySortedColumn) {\n                  previouslySortedColumn.sortIndicator = undefined;\n                  newColumns[`${myGridData.sortedColumnId}`] = previouslySortedColumn;\n                }\n              }\n              this.setState(prevState => {\n                const changedData = {\n                  sortedColumnId: columnId,\n                  sortedColumnDirection: columnToSort.sortIndicator,\n                  columns: { ...prevState.gridData[grid1].columns, ...newColumns },\n                };\n                return { gridData: { ...prevState.gridData, ...{ [grid1]: { ...prevState.gridData[grid1], ...changedData } } } };\n              });\n            }}\n            onCellSelect={(sectionId, rowId, columnId) => {\n              this.setState((prevState) => {\n                const gridWithSelectedCell = { [grid1]: { ...prevState.gridData[grid1], ...{ selectedRow: undefined, selectedCell: { sectionId, rowId, columnId } } } };\n                return { gridData: { ...prevState.gridData, ...gridWithSelectedCell } };\n              });\n            }}\n            hasSelectableRows\n            onRowSelect={(sectionId, rowId) => {\n              this.setState((prevState) => {\n                const gridWithSelectedRow = { [grid1]: { ...prevState.gridData[grid1], ...{ selectedRow: { sectionId, rowId }, selectedCell: undefined } } };\n                return { gridData: { ...prevState.gridData, ...gridWithSelectedRow } };\n              });\n            }}\n            onRequestSectionCollapse={(sectionId) => {\n              const index = this.state.gridData[grid1].collapsedSectionList.findIndex(id => sectionId === id);\n              if (index !== -1) {\n                this.setState(prevState => {\n                  const gridWithSectionCollapse = { [grid1]: { ...prevState.gridData[grid1], ...{ collapsedSectionList: prevState.gridData[grid1].collapsedSectionList.filter(id => sectionId !== id) } } };\n                  return { gridData: { ...prevState.gridData, ...gridWithSectionCollapse } };\n                });\n              } else {\n                this.setState(prevState => {\n                  const gridWithSectionCollapse = { [grid1]: { ...prevState.gridData[grid1], ...{ collapsedSectionList: [...prevState.gridData[grid1].collapsedSectionList, sectionId] } } };\n                  return { gridData: { ...prevState.gridData, ...gridWithSectionCollapse } };\n                });\n              }\n            }}\n            rowHeight={theme.className === 'orion-fusion-theme' ? '2.2rem' : undefined}\n            hasResizableColumns\n            onRequestColumnResize={(columnId, width) => {\n              const newColumns = {};\n              const myGridData = this.state.gridData[grid1];\n              const columnToUpdate = { ...Object.values(myGridData.columns).find(element => element.id === columnId) };\n              columnToUpdate.width = Math.max(width, 50);\n              newColumns[`${columnId}`] = columnToUpdate;\n              this.setState(prevState => {\n                const changedData = { columns: { ...prevState.gridData[grid1].columns, ...newColumns } };\n                return { gridData: { ...prevState.gridData, ...{ [grid1]: { ...prevState.gridData[grid1], ...changedData } } } };\n              });\n            }}\n          />\n        </div>\n\n        <div className={cx('data-grid-basic')}>\n          <DataGrid\n            id={grid2}\n            pinnedColumns={[\n              gridData[grid2].columns['Column-0'],\n              gridData[grid2].columns['Column-1'],\n            ]}\n            overflowColumns={[\n              gridData[grid2].columns['Column-2'],\n            ]}\n            columnHighlightId={gridData[grid2].columnHighlightId}\n            sections={[\n              this.buildSection(grid2, 'Grid-2-Section-0', 'Grid 2 Section 0', 4),\n              this.buildSection(grid2, 'Grid-2-Section-1', 'Grid 2 Section 1', 4),\n            ]}\n            fill\n            onColumnSelect={(columnId) => {\n              const newColumns = {};\n              const myGridData = this.state.gridData[grid2];\n\n              const columnToSort = { ...Object.values(myGridData.columns).find(element => element.id === columnId) };\n              columnToSort.sortIndicator = columnToSort.sortIndicator === 'ascending' ? 'descending' : 'ascending';\n              newColumns[`${columnId}`] = columnToSort;\n\n              if (columnId !== myGridData.sortedColumnId) {\n                const previouslySortedColumn = { ...Object.values(myGridData.columns).find(element => element.id === myGridData.sortedColumnId) };\n                if (previouslySortedColumn) {\n                  previouslySortedColumn.sortIndicator = undefined;\n                  newColumns[`${myGridData.sortedColumnId}`] = previouslySortedColumn;\n                }\n              }\n              this.setState(prevState => {\n                const changedData = {\n                  sortedColumnId: columnId,\n                  sortedColumnDirection: columnToSort.sortIndicator,\n                  columns: { ...prevState.gridData[grid2].columns, ...newColumns },\n                };\n                return { gridData: { ...prevState.gridData, ...{ [grid2]: { ...prevState.gridData[grid2], ...changedData } } } };\n              });\n            }}\n            onCellSelect={(sectionId, rowId, columnId) => {\n              this.setState((prevState) => {\n                const gridWithSelectedCell = { [grid2]: { ...prevState.gridData[grid2], ...{ selectedRow: undefined, selectedCell: { sectionId, rowId, columnId } } } };\n                return { gridData: { ...prevState.gridData, ...gridWithSelectedCell } };\n              });\n            }}\n            hasSelectableRows\n            onRowSelect={(sectionId, rowId) => {\n              this.setState((prevState) => {\n                const gridWithSelectedRow = { [grid2]: { ...prevState.gridData[grid2], ...{ selectedRow: { sectionId, rowId }, selectedCell: undefined } } };\n                return { gridData: { ...prevState.gridData, ...gridWithSelectedRow } };\n              });\n            }}\n            onRequestSectionCollapse={(sectionId) => {\n              const index = this.state.gridData[grid2].collapsedSectionList.findIndex(id => sectionId === id);\n              if (index !== -1) {\n                this.setState(prevState => {\n                  const gridWithSectionCollapse = { [grid2]: { ...prevState.gridData[grid2], ...{ collapsedSectionList: prevState.gridData[grid2].collapsedSectionList.filter(id => sectionId !== id) } } };\n                  return { gridData: { ...prevState.gridData, ...gridWithSectionCollapse } };\n                });\n              } else {\n                this.setState(prevState => {\n                  const gridWithSectionCollapse = { [grid2]: { ...prevState.gridData[grid2], ...{ collapsedSectionList: [...prevState.gridData[grid2].collapsedSectionList, sectionId] } } };\n                  return { gridData: { ...prevState.gridData, ...gridWithSectionCollapse } };\n                });\n              }\n            }}\n            rowHeight={theme.className === 'orion-fusion-theme' ? '2.2rem' : undefined}\n            hasResizableColumns\n            onRequestColumnResize={(columnId, width) => {\n              const newColumns = {};\n              const myGridData = this.state.gridData[grid2];\n              const columnToUpdate = { ...Object.values(myGridData.columns).find(element => element.id === columnId) };\n              columnToUpdate.width = Math.max(width, 50);\n              newColumns[`${columnId}`] = columnToUpdate;\n              this.setState(prevState => {\n                const changedData = { columns: { ...prevState.gridData[grid2].columns, ...newColumns } };\n                return { gridData: { ...prevState.gridData, ...{ [grid2]: { ...prevState.gridData[grid2], ...changedData } } } };\n              });\n            }}\n          />\n        </div>\n      </div>\n    );\n  }\n}\n\nMultipleDatagrids.contextType = ThemeContext;\n\nexport default MultipleDatagrids;\n\n")))}s.isMDXComponent=!0;var u=n(49271),m=n(97956),g=function(e){var t=e.title,n=e.description,o=e.isExpanded;return i.createElement(u.Z,{title:t||"Multiple Datagrids",description:n,example:i.createElement(r.Z,null),exampleCssSrc:i.createElement(m.Z,null),exampleSrc:i.createElement(s,null),isExpanded:o})},f=["components"];function p(){return p=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},p.apply(this,arguments)}function S(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var C={},h="wrapper";function b(e){var t=e.components,n=S(e,f);return(0,o.mdx)(h,p({},C,n,{components:t,mdxType:"MDXLayout"}),(0,o.mdx)(g,{description:"This example features usage of multiple datagrids on a single page. ",mdxType:"MultipleDatagrids"}))}b.isMDXComponent=!0},97956:function(e,t,n){n.d(t,{Z:function(){return c}});n(67294);var i=n(81254),o=["components"];function r(){return r=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},r.apply(this,arguments)}function a(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l={},d="wrapper";function c(e){var t=e.components,n=a(e,o);return(0,i.mdx)(d,r({},l,n,{components:t,mdxType:"MDXLayout"}),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-scss"},":local {\n  .data-grid-basic {\n    height: 800px;\n  }\n\n  .data-grid-small {\n    height: 400px;\n  }\n\n  .data-grid-row-style {\n    height: 100%;\n    width: 100%;\n  }\n\n  .data-grid-paging {\n    height: 800px;\n    position: relative;\n  }\n  \n  .loading-overlay {\n    top: 0;\n  }\n\n  .spacer-right-medium {\n    margin-right: 0.7142857143rem;\n  }\n}\n\n\n")))}c.isMDXComponent=!0},43458:function(e,t,n){n.r(t),t.default={"orion-fusion-theme":"ContentCellLayout__orion-fusion-theme___+BKr4","content-cell":"ContentCellLayout__content-cell___wgtdc"}},87535:function(e,t,n){n.r(t),t.default={"data-grid-basic":"Datagrid-module__data-grid-basic___HxAKd","data-grid-small":"Datagrid-module__data-grid-small___WpwC9","data-grid-row-style":"Datagrid-module__data-grid-row-style___oGa6Y","data-grid-paging":"Datagrid-module__data-grid-paging___cjRSA","loading-overlay":"Datagrid-module__loading-overlay___O3A7H","spacer-right-medium":"Datagrid-module__spacer-right-medium___7mFBr"}},87900:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=d(n(67294)),o=d(n(45697)),r=d(n(47166)),a=d(n(50026)),l=d(n(43458));function d(e){return e&&e.__esModule?e:{default:e}}var c=r.default.bind(l.default),s={text:o.default.string},u=function(e){var t=e.text,n=i.default.useContext(a.default);return i.default.createElement("div",{className:c(["content-cell",n.className])},t)};u.contextType=a.default,u.propTypes=s;var m=u;t.default=m},26662:function(e,t,n){function i(e){return i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},i(e)}t.Z=void 0;var o=s(n(67294)),r=s(n(81059)),a=s(n(47166)),l=s(n(50026)),d=s(n(87900)),c=s(n(87535));function s(e){return e&&e.__esModule?e:{default:e}}function u(e){return function(e){if(Array.isArray(e))return m(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return m(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return m(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function m(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,i=new Array(t);n<t;n++)i[n]=e[n];return i}function g(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function f(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?g(Object(n),!0).forEach((function(t){p(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):g(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t,n){return(t=C(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function S(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,C(i.key),i)}}function C(e){var t=function(e,t){if("object"!==i(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var o=n.call(e,t||"default");if("object"!==i(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===i(t)?t:String(t)}function h(e,t){return h=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},h(e,t)}function b(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,o=D(e);if(t){var r=D(this).constructor;n=Reflect.construct(o,arguments,r)}else n=o.apply(this,arguments);return function(e,t){if(t&&("object"===i(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return v(e)}(this,n)}}function v(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function D(e){return D=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},D(e)}var w=a.default.bind(c.default),y="Grid1",I="Grid2",O=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&h(e,t)}(l,e);var t,n,i,a=b(l);function l(e){var t,n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,l),(n=a.call(this,e)).buildSection=n.buildSection.bind(v(n)),n.buildRows=n.buildRows.bind(v(n)),n.state={gridData:(t={},p(t,y,{sortedColumnId:"Column-0",sortedColumnDirection:"ascending",selectedRow:void 0,selectedCell:void 0,columnHighlightId:"Column-1",collapsedSectionList:[],columns:{"Column-0":{id:"Column-0",width:200,text:"Grid 1 Column 0",isSelectable:!0,sortIndicator:"ascending",isResizable:!0},"Column-1":{id:"Column-1",width:200,text:"Grid 1 Column 1",isSelectable:!0,isResizable:!0},"Column-2":{id:"Column-2",width:200,text:"Grid 1 Column 2",isSelectable:!0,isResizable:!0},"Column-3":{id:"Column-3",width:200,text:"Grid 1 Column 3",isSelectable:!0,isResizable:!0}}}),p(t,I,{sortedColumnId:"Column-0",sortedColumnDirection:"descending",selectedRow:void 0,selectedCell:void 0,columnHighlightId:"Column-0",collapsedSectionList:[],columns:{"Column-0":{id:"Column-0",width:200,text:"Column 0",isSelectable:!0,sortIndicator:"descending",isResizable:!0},"Column-1":{id:"Column-1",width:200,text:"Column 1",isSelectable:!0,isResizable:!0},"Column-2":{id:"Column-2",width:200,text:"Column 2",isSelectable:!0,isResizable:!0},"Column-3":{id:"Column-3",width:200,text:"Column 3",isSelectable:!0,isResizable:!0}}}),t)},n}return t=l,(n=[{key:"buildRows",value:function(e,t,n){var i=this.state.gridData[e],r=new Array(n).fill().map((function(e,n){return{id:"Row-".concat(n),isSelectable:!0,isSelected:i.selectedRow&&i.selectedRow.sectionId===t&&i.selectedRow.rowId==="Row-".concat(n),cells:new Array(4).fill(0).map((function(e,t){return Object.values(i.columns)[t].id})).map((function(e){return{columnId:e,isSelectable:!0,isSelected:i.selectedCell&&i.selectedCell.sectionId===t&&i.selectedCell.rowId==="Row-".concat(n)&&i.selectedCell.columnId===e,component:o.default.createElement(d.default,{text:"Row-".concat(n,", ").concat(e)})}}))}}));return i.sortedColumnId&&"ascending"===i.sortedColumnDirection?r:r.reverse()}},{key:"buildSection",value:function(e,t,n,i){return{id:t,text:n,isCollapsible:!0,isCollapsed:this.state.gridData[e].collapsedSectionList.includes(t),rows:this.buildRows(e,t,i)}}},{key:"render",value:function(){var e=this,t=this.state.gridData,n=this.context;return o.default.createElement("div",null,o.default.createElement("div",{className:w("data-grid-small")},o.default.createElement(r.default,{id:y,pinnedColumns:[t[y].columns["Column-0"],t[y].columns["Column-1"]],overflowColumns:[t[y].columns["Column-2"],t[y].columns["Column-3"]],columnHighlightId:t[y].columnHighlightId,sections:[this.buildSection(y,"Grid-1-Section-0","Grid 1 Section 0",4),this.buildSection(y,"Grid-1-Section-1","Grid 1 Section 1",4)],fill:!0,onColumnSelect:function(t){var n={},i=e.state.gridData[y],o=f({},Object.values(i.columns).find((function(e){return e.id===t})));if(o.sortIndicator="ascending"===o.sortIndicator?"descending":"ascending",n["".concat(t)]=o,t!==i.sortedColumnId){var r=f({},Object.values(i.columns).find((function(e){return e.id===i.sortedColumnId})));r&&(r.sortIndicator=void 0,n["".concat(i.sortedColumnId)]=r)}e.setState((function(e){var i={sortedColumnId:t,sortedColumnDirection:o.sortIndicator,columns:f(f({},e.gridData[y].columns),n)};return{gridData:f(f({},e.gridData),p({},y,f(f({},e.gridData[y]),i)))}}))},onCellSelect:function(t,n,i){e.setState((function(e){var o=p({},y,f(f({},e.gridData[y]),{selectedRow:void 0,selectedCell:{sectionId:t,rowId:n,columnId:i}}));return{gridData:f(f({},e.gridData),o)}}))},hasSelectableRows:!0,onRowSelect:function(t,n){e.setState((function(e){var i=p({},y,f(f({},e.gridData[y]),{selectedRow:{sectionId:t,rowId:n},selectedCell:void 0}));return{gridData:f(f({},e.gridData),i)}}))},onRequestSectionCollapse:function(t){-1!==e.state.gridData[y].collapsedSectionList.findIndex((function(e){return t===e}))?e.setState((function(e){var n=p({},y,f(f({},e.gridData[y]),{collapsedSectionList:e.gridData[y].collapsedSectionList.filter((function(e){return t!==e}))}));return{gridData:f(f({},e.gridData),n)}})):e.setState((function(e){var n=p({},y,f(f({},e.gridData[y]),{collapsedSectionList:[].concat(u(e.gridData[y].collapsedSectionList),[t])}));return{gridData:f(f({},e.gridData),n)}}))},rowHeight:"orion-fusion-theme"===n.className?"2.2rem":void 0,hasResizableColumns:!0,onRequestColumnResize:function(t,n){var i={},o=e.state.gridData[y],r=f({},Object.values(o.columns).find((function(e){return e.id===t})));r.width=Math.max(n,50),i["".concat(t)]=r,e.setState((function(e){var t={columns:f(f({},e.gridData[y].columns),i)};return{gridData:f(f({},e.gridData),p({},y,f(f({},e.gridData[y]),t)))}}))}})),o.default.createElement("div",{className:w("data-grid-basic")},o.default.createElement(r.default,{id:I,pinnedColumns:[t[I].columns["Column-0"],t[I].columns["Column-1"]],overflowColumns:[t[I].columns["Column-2"]],columnHighlightId:t[I].columnHighlightId,sections:[this.buildSection(I,"Grid-2-Section-0","Grid 2 Section 0",4),this.buildSection(I,"Grid-2-Section-1","Grid 2 Section 1",4)],fill:!0,onColumnSelect:function(t){var n={},i=e.state.gridData[I],o=f({},Object.values(i.columns).find((function(e){return e.id===t})));if(o.sortIndicator="ascending"===o.sortIndicator?"descending":"ascending",n["".concat(t)]=o,t!==i.sortedColumnId){var r=f({},Object.values(i.columns).find((function(e){return e.id===i.sortedColumnId})));r&&(r.sortIndicator=void 0,n["".concat(i.sortedColumnId)]=r)}e.setState((function(e){var i={sortedColumnId:t,sortedColumnDirection:o.sortIndicator,columns:f(f({},e.gridData[I].columns),n)};return{gridData:f(f({},e.gridData),p({},I,f(f({},e.gridData[I]),i)))}}))},onCellSelect:function(t,n,i){e.setState((function(e){var o=p({},I,f(f({},e.gridData[I]),{selectedRow:void 0,selectedCell:{sectionId:t,rowId:n,columnId:i}}));return{gridData:f(f({},e.gridData),o)}}))},hasSelectableRows:!0,onRowSelect:function(t,n){e.setState((function(e){var i=p({},I,f(f({},e.gridData[I]),{selectedRow:{sectionId:t,rowId:n},selectedCell:void 0}));return{gridData:f(f({},e.gridData),i)}}))},onRequestSectionCollapse:function(t){-1!==e.state.gridData[I].collapsedSectionList.findIndex((function(e){return t===e}))?e.setState((function(e){var n=p({},I,f(f({},e.gridData[I]),{collapsedSectionList:e.gridData[I].collapsedSectionList.filter((function(e){return t!==e}))}));return{gridData:f(f({},e.gridData),n)}})):e.setState((function(e){var n=p({},I,f(f({},e.gridData[I]),{collapsedSectionList:[].concat(u(e.gridData[I].collapsedSectionList),[t])}));return{gridData:f(f({},e.gridData),n)}}))},rowHeight:"orion-fusion-theme"===n.className?"2.2rem":void 0,hasResizableColumns:!0,onRequestColumnResize:function(t,n){var i={},o=e.state.gridData[I],r=f({},Object.values(o.columns).find((function(e){return e.id===t})));r.width=Math.max(n,50),i["".concat(t)]=r,e.setState((function(e){var t={columns:f(f({},e.gridData[I].columns),i)};return{gridData:f(f({},e.gridData),p({},I,f(f({},e.gridData[I]),t)))}}))}})))}}])&&S(t.prototype,n),i&&S(t,i),Object.defineProperty(t,"prototype",{writable:!1}),l}(o.default.Component);O.contextType=l.default;var R=O;t.Z=R}}]);