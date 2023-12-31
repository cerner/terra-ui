"use strict";(self.webpackChunkterra_ui=self.webpackChunkterra_ui||[]).push([[28888],{49271:function(e,t,n){var a=n(64836),r=n(18698);t.Z=void 0;var o=a(n(27424)),l=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==r(e)&&"function"!=typeof e)return{default:e};var n=f(t);if(n&&n.has(e))return n.get(e);var a={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var l in e)if("default"!==l&&Object.prototype.hasOwnProperty.call(e,l)){var c=o?Object.getOwnPropertyDescriptor(e,l):null;c&&(c.get||c.set)?Object.defineProperty(a,l,c):a[l]=e[l]}a.default=e,n&&n.set(e,a);return a}(n(67294)),c=a(n(45697)),s=a(n(19845)),i=n(21538),u=a(n(33864)),d=a(n(23399)),m=n(51051),p=a(n(53560));function f(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(f=function(e){return e?n:t})(e)}var b=s.default.bind(p.default),h={example:c.default.element,exampleSrc:c.default.element,exampleCssSrc:c.default.element,title:c.default.string,description:c.default.node,isExpanded:c.default.bool},y=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","true")},_=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","false")},w=function(e){var t=e.example,n=e.exampleSrc,a=e.exampleCssSrc,r=e.title,c=e.description,s=e.isExpanded,p=(0,l.useState)(s),f=(0,o.default)(p,2),h=f[0],w=f[1],v=(0,l.useState)(!1),C=(0,o.default)(v,2),x=C[0],g=C[1],E=l.default.useContext(i.ThemeContext),O=void 0!==a,S=function(){g(!x),h&&w(!h)},T=function(){w(!h),x&&g(!x)},N=function(e,t){e.nativeEvent.keyCode!==m.KEY_SPACE&&e.nativeEvent.keyCode!==m.KEY_RETURN||(e.preventDefault(),t())};return l.default.createElement("div",{className:b("template",E.className)},l.default.createElement("div",{className:b("header")},r&&l.default.createElement("h2",{className:b("title")},r)),l.default.createElement("div",{className:b("content")},c&&l.default.createElement("div",{className:b("description")},c),t),l.default.createElement("div",{className:b("footer")},n?l.default.createElement("div",{className:b("button-container")},O&&l.default.createElement("button",{type:"button",className:b("css-toggle","item",{"is-selected":x}),onClick:S,onKeyDown:function(e){return N(e,S)},onBlur:y,onMouseDown:_,tabIndex:0,"data-focus-styles-enabled":!0},l.default.createElement(u.default,{className:b("chevron")}),l.default.createElement("span",null,"CSS"),l.default.createElement(d.default,{className:b("chevron")})),l.default.createElement("button",{type:"button",className:b("code-toggle","item",{"is-selected":h}),onClick:T,onKeyDown:function(e){return N(e,T)},onBlur:y,onMouseDown:_,tabIndex:0,"data-focus-styles-enabled":!0},l.default.createElement(u.default,{className:b("chevron")}),l.default.createElement("span",null,"Code"),l.default.createElement(d.default,{className:b("chevron")}))):null,l.default.createElement("div",null,x&&l.default.createElement("div",{className:b("css")},a),h&&l.default.createElement("div",{className:b("code")},n))))};w.propTypes=h,w.defaultProps={isExpanded:!1};var v=w;t.Z=v},93475:function(e,t,n){var a=n(64836),r=n(18698);t.Z=void 0;var o=a(n(861)),l=a(n(38416)),c=a(n(27424)),s=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=r(e)&&"function"!=typeof e)return{default:e};var n=u(t);if(n&&n.has(e))return n.get(e);var a={__proto__:null},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var l in e)if("default"!==l&&Object.prototype.hasOwnProperty.call(e,l)){var c=o?Object.getOwnPropertyDescriptor(e,l):null;c&&(c.get||c.set)?Object.defineProperty(a,l,c):a[l]=e[l]}return a.default=e,n&&n.set(e,a),a}(n(67294)),i=a(n(7270));function u(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(u=function(e){return e?n:t})(e)}function d(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}var m=[{id:"Column-0",displayName:"Patient",sortIndicator:"ascending",hasError:!0,isSelectable:!0},{id:"Column-1",displayName:"Location",isSelectable:!0},{id:"Column-2",displayName:"Illness Severity",isSelectable:!0},{id:"Column-3",displayName:"Visit",isSelectable:!0},{id:"Column-4",displayName:"Allergy",hasError:!0},{id:"Column-5",displayName:"Primary Contact",isSelectable:!0}],p=[{id:"1",cells:[{content:"Fleck, Arthur"},{content:"1007-MTN"},{content:"Unstable"},{content:"Inpatient, 2 months"},{content:""},{content:"Quinzell, Harleen"}]},{id:"2",cells:[{content:"Wayne, Bruce"},{content:"1007-MTN-DR"},{content:"Stable"},{content:"Outpatient, 2 days"},{content:"Phytochemicals"},{content:"Grayson, Richard"}]}];t.Z=function(){var e=m,t=p,n=(0,s.useState)(e),a=(0,c.default)(n,2),r=a[0],u=a[1],f=(0,s.useState)(t),b=(0,c.default)(f,2),h=b[0],y=b[1],_=(0,s.useCallback)((function(e){var t=r.map((function(t,n){var a=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?d(Object(n),!0).forEach((function(t){(0,l.default)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):d(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},t);if(t.id===e){a.sortIndicator="ascending"===t.sortIndicator?"descending":"ascending";var r=(0,o.default)(h);r.sort((function(e,t){var r=e.cells[n].content||"",o=t.cells[n].content||"";return"ascending"===a.sortIndicator?r.localeCompare(o):o.localeCompare(r)})),y(r)}else a.sortIndicator=void 0;return a}));u(t)}),[r,h]);return s.default.createElement(i.default,{id:"terra-table-with-column-states",overflowColumns:r,rows:h,rowHeaderIndex:0,rowHeight:"50px",defaultColumnWidth:100,columnHeaderHeight:"50px",onColumnSelect:_,ariaLabel:"Table"})}},28888:function(e,t,n){n.r(t),n.d(t,{default:function(){return _}});var a=n(67294),r=n(81254),o=n(93475),l=["components"];function c(){return c=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},c.apply(this,arguments)}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i={};function u(e){var t=e.components,n=s(e,l);return(0,r.mdx)("wrapper",c({},i,n,{components:t,mdxType:"MDXLayout"}),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React, { useState, useCallback } from 'react';\nimport Table from 'terra-table';\n\nconst tableDataJSON = {\n  cols: [\n    {\n      id: 'Column-0', displayName: 'Patient', sortIndicator: 'ascending', hasError: true, isSelectable: true, // This column header will be rendered with a sort indicator and an error icon by default.\n    },\n    { id: 'Column-1', displayName: 'Location', isSelectable: true },\n    { id: 'Column-2', displayName: 'Illness Severity', isSelectable: true },\n    { id: 'Column-3', displayName: 'Visit', isSelectable: true },\n    { id: 'Column-4', displayName: 'Allergy', hasError: true }, // Use hasError property to display an error icon in the column header\n    { id: 'Column-5', displayName: 'Primary Contact', isSelectable: true },\n  ],\n  rows: [\n    {\n      id: '1',\n      cells: [\n        { content: 'Fleck, Arthur' },\n        { content: '1007-MTN' },\n        { content: 'Unstable' },\n        { content: 'Inpatient, 2 months' },\n        { content: '' },\n        { content: 'Quinzell, Harleen' },\n      ],\n    },\n    {\n      id: '2',\n      cells: [\n        { content: 'Wayne, Bruce' },\n        { content: '1007-MTN-DR' },\n        { content: 'Stable' },\n        { content: 'Outpatient, 2 days' },\n        { content: 'Phytochemicals' },\n        { content: 'Grayson, Richard' },\n      ],\n    },\n  ],\n};\n\nconst TableWithColumnStates = () => {\n  const rowHeaderIndex = 0;\n  const { cols, rows } = tableDataJSON;\n\n  const [tableColumns, setTableColumns] = useState(cols);\n  const [tableRows, setTableRows] = useState(rows);\n\n  // The onColumnSelect will sort the rows and toggle the current sort indicator.\n  const onColumnSelect = useCallback((columnId) => {\n    const newColumnArray = tableColumns.map((column, columnIndex) => {\n      const newColumn = { ...column };\n\n      if (column.id === columnId) {\n        newColumn.sortIndicator = column.sortIndicator === 'ascending' ? 'descending' : 'ascending';\n\n        const newGridRows = [...tableRows];\n        newGridRows.sort((rowA, rowB) => {\n          const firstRowContent = rowA.cells[columnIndex].content || '';\n          const secondRowContent = rowB.cells[columnIndex].content || '';\n\n          if (newColumn.sortIndicator === 'ascending') {\n            return firstRowContent.localeCompare(secondRowContent);\n          }\n          return secondRowContent.localeCompare(firstRowContent);\n        });\n\n        setTableRows(newGridRows);\n      } else {\n        newColumn.sortIndicator = undefined;\n      }\n\n      return newColumn;\n    });\n\n    setTableColumns(newColumnArray);\n  }, [tableColumns, tableRows]);\n\n  return (\n    <Table\n      id=\"terra-table-with-column-states\"\n      overflowColumns={tableColumns}\n      rows={tableRows}\n      rowHeaderIndex={rowHeaderIndex}\n      rowHeight=\"50px\"\n      defaultColumnWidth={100}\n      columnHeaderHeight=\"50px\"\n      onColumnSelect={onColumnSelect} // Consumer must provide this callback to the Worklist Data Grid for it to call when the user selects a column header.\n      ariaLabel=\"Table\"\n    />\n  );\n};\n\nexport default TableWithColumnStates;\n\n")))}u.isMDXComponent=!0;var d=n(49271),m=function(e){var t=e.title,n=e.description,r=e.isExpanded;return a.createElement(d.Z,{title:t||"Table Column States",description:n,example:a.createElement(o.Z,null),exampleSrc:a.createElement(u,null),isExpanded:r})},p=["components"];function f(){return f=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},f.apply(this,arguments)}function b(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var h={},y="wrapper";function _(e){var t=e.components,n=b(e,p);return(0,r.mdx)(y,f({},h,n,{components:t,mdxType:"MDXLayout"}),(0,r.mdx)("h1",{id:"column-states"},"Column States"),(0,r.mdx)("h3",{id:"description"},"Description"),(0,r.mdx)("p",null,"This example demonstrates a ",(0,r.mdx)("a",{parentName:"p",href:"/terra-ui/components/cerner-terra-framework-docs/table/about"},"Table")," component that supports column states and sorting.\nUsers can select the column header to select the column, or they can tab to the column header and then press the ",(0,r.mdx)("strong",{parentName:"p"},"SPACEBAR"),".\nUsers can only select columns that are selectable."),(0,r.mdx)("p",null,"The column can display error and sort indicator icons to represent its current state."),(0,r.mdx)("h3",{id:"properties-required"},"Properties required"),(0,r.mdx)("p",null,(0,r.mdx)("strong",{parentName:"p"},"onColumnSelect"),": When the user selects a column, this callback is called with the columnId of the selected column."),(0,r.mdx)("p",null,"The example below also demonstrates how the consumer can use properties such as hasError and sortIndicator. The hasError property controls whether the column header displays an error indicator and the sortIndicator property displays a sort indicator icon."),(0,r.mdx)(m,{title:"Table Column States",mdxType:"TableColumnStates"}))}_.isMDXComponent=!0},53560:function(e,t,n){n.r(t),t.default={"clinical-lowlight-theme":"ExampleTemplate-module__clinical-lowlight-theme___rBbtD","orion-fusion-theme":"ExampleTemplate-module__orion-fusion-theme___GzA23",template:"ExampleTemplate-module__template___a4uPk",header:"ExampleTemplate-module__header___iFXV3",content:"ExampleTemplate-module__content___48m4Q",description:"ExampleTemplate-module__description___NwBJo",footer:"ExampleTemplate-module__footer___GpSoG","button-container":"ExampleTemplate-module__button-container___rAD11",css:"ExampleTemplate-module__css___+jtk1",code:"ExampleTemplate-module__code___7rC6C","css-toggle":"ExampleTemplate-module__css-toggle___chHK7","code-toggle":"ExampleTemplate-module__code-toggle___TGlE-","is-selected":"ExampleTemplate-module__is-selected___0BYwS",item:"ExampleTemplate-module__item___8FTQq",chevron:"ExampleTemplate-module__chevron___VbY7N",title:"ExampleTemplate-module__title___r+nbJ","dynamic-content":"ExampleTemplate-module__dynamic-content___k+1H7"}}}]);