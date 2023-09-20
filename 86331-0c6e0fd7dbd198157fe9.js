"use strict";(self.webpackChunkterra_ui=self.webpackChunkterra_ui||[]).push([[86331,19260],{42291:function(n,e,t){var r=t(64836),o=t(18698);e.Z=void 0;var a=r(t(861)),i=r(t(38416)),l=r(t(27424)),c=function(n,e){if(!e&&n&&n.__esModule)return n;if(null===n||"object"!==o(n)&&"function"!=typeof n)return{default:n};var t=d(e);if(t&&t.has(n))return t.get(n);var r={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in n)if("default"!==i&&Object.prototype.hasOwnProperty.call(n,i)){var l=a?Object.getOwnPropertyDescriptor(n,i):null;l&&(l.get||l.set)?Object.defineProperty(r,i,l):r[i]=n[i]}r.default=n,t&&t.set(n,r);return r}(t(67294)),s=t(57710);function d(n){if("function"!=typeof WeakMap)return null;var e=new WeakMap,t=new WeakMap;return(d=function(n){return n?t:e})(n)}function u(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,r)}return t}var m=[{id:"Column-0",displayName:"Patient",sortIndicator:"ascending",hasError:!0},{id:"Column-1",displayName:"Location"},{id:"Column-2",displayName:"Illness Severity"},{id:"Column-3",displayName:"Visit"},{id:"Column-4",displayName:"Allergy",hasError:!0},{id:"Column-5",displayName:"Primary Contact"},{id:"Column-6",displayName:"Generic Order Counts"},{id:"Column-7",displayName:"Patient Age"},{id:"Column-8",displayName:"Medication History"},{id:"Column-9",displayName:"My Relationship"},{id:"Column-10",displayName:"Not Selectable",isSelectable:!1}],p=[{id:"1",cells:[{content:"Fleck, Arthur"},{content:"1007-MTN"},{content:"Unstable"},{content:"Inpatient, 2 months"},{content:""},{content:"Quinzell, Harleen"},{content:""},{isMasked:!0},{isMasked:!0},{content:"Admitting Physician"},{content:"",isSelectable:!1}]},{id:"2",cells:[{content:"Wayne, Bruce"},{content:"1007-MTN-DR"},{content:"Stable"},{content:"Outpatient, 2 days"},{content:"Phytochemicals"},{content:"Grayson, Richard"},{content:""},{content:""},{isMasked:!0},{content:"Admitting Physician"},{content:"",isSelectable:!1}]}],f=function(){var n=m,e=p,t=(0,c.useState)(n),r=(0,l.default)(t,2),o=r[0],d=r[1],f=(0,c.useState)(e),y=(0,l.default)(f,2),w=y[0],C=y[1];return c.default.createElement(s.WorklistDataGrid,{id:"default-terra-worklist-data-grid",overflowColumns:o,rows:w,rowHeaderIndex:0,rowHeight:"50px",defaultColumnWidth:100,columnHeaderHeight:"50px",onColumnSelect:function(n){var e=o.map((function(e,t){var r=function(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?u(Object(t),!0).forEach((function(e){(0,i.default)(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):u(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}({},e);if(e.id===n){r.sortIndicator="ascending"===e.sortIndicator?"descending":"ascending";var o=(0,a.default)(w);o.sort((function(n,e){var o=n.cells[t].content||"",a=e.cells[t].content||"";return"ascending"===r.sortIndicator?o.localeCompare(a):a.localeCompare(o)})),C(o)}else r.sortIndicator=void 0;return r}));d(e)},ariaLabel:"Worklist Data Grid"})};e.Z=f},93573:function(n,e,t){t.r(e),t.d(e,{default:function(){return d}});t(67294);var r=t(81254),o=t(87318),a=["components"];function i(){return i=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},i.apply(this,arguments)}function l(n,e){if(null==n)return{};var t,r,o=function(n,e){if(null==n)return{};var t,r,o={},a=Object.keys(n);for(r=0;r<a.length;r++)t=a[r],e.indexOf(t)>=0||(o[t]=n[t]);return o}(n,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);for(r=0;r<a.length;r++)t=a[r],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(o[t]=n[t])}return o}var c={},s="wrapper";function d(n){var e=n.components,t=l(n,a);return(0,r.mdx)(s,i({},c,t,{components:e,mdxType:"MDXLayout"}),(0,r.mdx)(o.Z,{title:"Worklist Data Grid Column States",mdxType:"WorklistDataGridColumnStates"}))}d.isMDXComponent=!0},87318:function(n,e,t){t.d(e,{Z:function(){return m}});var r=t(67294),o=t(42291),a=t(81254),i=["components"];function l(){return l=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},l.apply(this,arguments)}function c(n,e){if(null==n)return{};var t,r,o=function(n,e){if(null==n)return{};var t,r,o={},a=Object.keys(n);for(r=0;r<a.length;r++)t=a[r],e.indexOf(t)>=0||(o[t]=n[t]);return o}(n,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);for(r=0;r<a.length;r++)t=a[r],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(o[t]=n[t])}return o}var s={};function d(n){var e=n.components,t=c(n,i);return(0,a.mdx)("wrapper",l({},s,t,{components:e,mdxType:"MDXLayout"}),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React, { useState } from 'react';\nimport { WorklistDataGrid } from 'terra-data-grid';\n\nconst gridDataJSON = {\n  cols: [\n    {\n      id: 'Column-0', displayName: 'Patient', sortIndicator: 'ascending', hasError: true,\n    },\n    { id: 'Column-1', displayName: 'Location' },\n    { id: 'Column-2', displayName: 'Illness Severity' },\n    { id: 'Column-3', displayName: 'Visit' },\n    { id: 'Column-4', displayName: 'Allergy', hasError: true },\n    { id: 'Column-5', displayName: 'Primary Contact' },\n    { id: 'Column-6', displayName: 'Generic Order Counts' },\n    { id: 'Column-7', displayName: 'Patient Age' },\n    { id: 'Column-8', displayName: 'Medication History' },\n    { id: 'Column-9', displayName: 'My Relationship' },\n    { id: 'Column-10', displayName: 'Not Selectable', isSelectable: false },\n  ],\n  rows: [\n    {\n      id: '1',\n      cells: [\n        { content: 'Fleck, Arthur' },\n        { content: '1007-MTN' },\n        { content: 'Unstable' },\n        { content: 'Inpatient, 2 months' },\n        { content: '' },\n        { content: 'Quinzell, Harleen' },\n        { content: '' },\n        { isMasked: true },\n        { isMasked: true },\n        { content: 'Admitting Physician' },\n        { content: '', isSelectable: false },\n      ],\n    },\n    {\n      id: '2',\n      cells: [\n        { content: 'Wayne, Bruce' },\n        { content: '1007-MTN-DR' },\n        { content: 'Stable' },\n        { content: 'Outpatient, 2 days' },\n        { content: 'Phytochemicals' },\n        { content: 'Grayson, Richard' },\n        { content: '' },\n        { content: '' },\n        { isMasked: true },\n        { content: 'Admitting Physician' },\n        { content: '', isSelectable: false },\n      ],\n    },\n  ],\n};\n\nconst DefaultWorklistDataGrid = () => {\n  const rowHeaderIndex = 0;\n  const { cols, rows } = gridDataJSON;\n\n  const [gridColumns, setGridColumns] = useState(cols);\n  const [gridRows, setGridRows] = useState(rows);\n\n  const onColumnSelect = (columnId) => {\n    const newColumnArray = gridColumns.map((column, columnIndex) => {\n      const newColumn = { ...column };\n\n      if (column.id === columnId) {\n        newColumn.sortIndicator = column.sortIndicator === 'ascending' ? 'descending' : 'ascending';\n\n        const newGridRows = [...gridRows];\n        newGridRows.sort((rowA, rowB) => {\n          const firstRowContent = rowA.cells[columnIndex].content || '';\n          const secondRowContent = rowB.cells[columnIndex].content || '';\n\n          if (newColumn.sortIndicator === 'ascending') {\n            return firstRowContent.localeCompare(secondRowContent);\n          }\n          return secondRowContent.localeCompare(firstRowContent);\n        });\n\n        setGridRows(newGridRows);\n      } else {\n        newColumn.sortIndicator = undefined;\n      }\n\n      return newColumn;\n    });\n\n    setGridColumns(newColumnArray);\n  };\n\n  return (\n    <WorklistDataGrid\n      id=\"default-terra-worklist-data-grid\"\n      overflowColumns={gridColumns}\n      rows={gridRows}\n      rowHeaderIndex={rowHeaderIndex}\n      rowHeight=\"50px\"\n      defaultColumnWidth={100}\n      columnHeaderHeight=\"50px\"\n      onColumnSelect={onColumnSelect}\n      ariaLabel=\"Worklist Data Grid\"\n    />\n  );\n};\n\nexport default DefaultWorklistDataGrid;\n\n")))}d.isMDXComponent=!0;var u=t(49271),m=function(n){var e=n.title,t=n.description,a=n.isExpanded;return r.createElement(u.Z,{title:e||"Worklist Data Grid Column States",description:t,example:r.createElement(o.Z,null),exampleSrc:r.createElement(d,null),isExpanded:a})}}}]);