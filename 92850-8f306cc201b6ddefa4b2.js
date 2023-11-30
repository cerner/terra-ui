"use strict";(self.webpackChunkterra_ui=self.webpackChunkterra_ui||[]).push([[92850,19260],{35533:function(n,e,t){var o=t(64836),l=t(18698);e.Z=void 0;var a=o(t(861)),c=o(t(27424)),r=function(n,e){if(!e&&n&&n.__esModule)return n;if(null===n||"object"!=l(n)&&"function"!=typeof n)return{default:n};var t=d(e);if(t&&t.has(n))return t.get(n);var o={__proto__:null},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var c in n)if("default"!==c&&Object.prototype.hasOwnProperty.call(n,c)){var r=a?Object.getOwnPropertyDescriptor(n,c):null;r&&(r.get||r.set)?Object.defineProperty(o,c,r):o[c]=n[c]}return o.default=n,t&&t.set(n,o),o}(t(67294)),i=t(57710),s=o(t(81726));function d(n){if("function"!=typeof WeakMap)return null;var e=new WeakMap,t=new WeakMap;return(d=function(n){return n?t:e})(n)}var u=[{id:"Column-0",displayName:"Patient"},{id:"Column-1",displayName:"Location"},{id:"Column-2",displayName:"Illness Severity"},{id:"Column-3",displayName:"Visit"},{id:"Column-4",displayName:"Allergy"},{id:"Column-5",displayName:"Primary Contact"},{id:"Column-6",displayName:"Generic Order Counts"}],w=[{id:"1",cells:[{content:"Fleck, Arthur"},{content:"1007-MTN"},{content:"Unstable"},{content:"Inpatient, 2 months"},{content:""},{content:"Quinzell, Harleen"},{content:"",isMasked:!0}]},{id:"2",cells:[{content:"Wayne, Bruce"},{content:"1107-MTN-DR"},{content:"Stable"},{content:"Outpatient, 2 days"},{content:"Phytochemicals"},{content:"Grayson, Richard"},{content:""}]},{id:"3",cells:[{content:"Carr, Alicia"},{content:"1007-MTN"},{content:"Unstable"},{content:"Inpatient, 3 months"},{content:""},{content:"Quinzell, Harleen"},{content:""}]},{id:"4",cells:[{content:"McMurphy, Donald"},{content:"1024-MTN",isMasked:!0},{content:"Stable"},{content:"Inpatient, 5 months"},{content:""},{content:"Quinzell, Harleen"},{content:""}]},{id:"5",cells:[{content:"Peters, Timothy"},{content:"1207-MTN"},{content:"Unstable",isMasked:!0},{content:"Outpatient, 15 days"},{content:""},{content:"Quinzell, Harleen"},{content:""}]},{id:"6",cells:[{content:"Jones, Becky"},{content:"1007-MTN"},{content:"Unstable"},{content:"Inpatient, 2 months"},{content:""},{content:"Quinzell, Harleen"},{content:""}]},{id:"7",cells:[{content:"Williams, Peter"},{content:"1002-KTN"},{content:"Unstable"},{content:"Outpatient, 9 days"},{content:""},{content:"Quinzell, Harleen"},{content:""}]},{id:"8",cells:[{content:"Pratt, Michaela"},{content:"2108-NTN"},{content:"Stable"},{content:"Outpatient, 45 days"},{content:""},{content:"Quinzell, Harleen"},{content:""}]},{id:"9",cells:[{content:"Styris, Scott"},{content:"1007-MTN",isMasked:!0},{content:"Unstable"},{content:"Inpatient, 2 months"},{content:""},{content:"Quinzell, Harleen"},{content:""}]},{id:"10",cells:[{content:"Cook, Allan"},{content:"1700-SKB"},{content:"Stable"},{content:"Inpatient, 4 months"},{content:""},{content:"Quinzell, Harleen"},{content:""}]},{id:"11",cells:[{content:"Lahey, Nathaniel"},{content:"1348-DRS"},{content:"Unstable"},{content:"Inpatient, 1 months"},{content:""},{content:"Quinzell, Harleen"},{content:""}]},{id:"12",cells:[{content:"Harris, Isabella"},{content:"1809-MTN"},{content:"Stable"},{content:"Inpatient, 6 months"},{content:""},{content:"Quinzell, Harleen"},{content:""}]},{id:"13",cells:[{content:"Millstone, Asher"},{content:"4133-MZN"},{content:"Unstable"},{content:"Inpatient, 9 months"},{content:""},{content:"Quinzell, Harleen"},{content:""}]}];e.Z=function(){var n=(0,r.useRef)(),e=u,t=w,o=(0,r.useState)(t),l=(0,c.default)(o,2),d=l[0],p=l[1],f=(0,r.useState)(!1),m=(0,c.default)(f,2),b=m[0],S=m[1],h=(0,r.useCallback)((function(){var n=(0,a.default)(d);n.forEach((function(n){return n.isSelected=!1})),p(n)}),[d]),R=(0,r.useCallback)((function(){n.current.checked=!1,S(!1),h()}),[h]),y=(0,r.useCallback)((function(n){n.target.checked||h(),S(n.target.checked)}),[h]),k=(0,r.useCallback)((function(n){n===s.default.ROW_SELECTION_COLUMN.id&&alert("Row Selection Header Clicked")}),[]),C=(0,r.useCallback)((function(n){var e=(0,a.default)(d);n.forEach((function(n){var t=e.find((function(e){return e.id===n.id}));t&&(t.isSelected=n.selected)})),p(e)}),[d]),M=(0,r.useCallback)((function(){var n=(0,a.default)(d);n.forEach((function(n){return n.isSelected=!0})),p(n)}),[d]),O=(0,r.useCallback)((function(){n.current.checked||(n.current.checked=!0),S(!0)}),[]);return r.default.createElement(r.default.Fragment,null,r.default.createElement("div",null,r.default.createElement("label",{htmlFor:"rowSelectionMode"},r.default.createElement("b",null,"Row Selection Mode")),r.default.createElement("input",{id:"rowSelectionMode",type:"checkbox",ref:n,onChange:y})),r.default.createElement(i.WorklistDataGrid,{id:"default-terra-worklist-data-grid",overflowColumns:e,rows:d,rowHeaderIndex:0,columnWidth:"180px",ariaLabel:"Worklist Data Grid",hasSelectableRows:b,onRowSelect:C,onRowSelectAll:M,onClearSelectedRows:h,onDisableSelectableRows:R,onColumnSelect:k,onEnableRowSelection:O}))}},14865:function(n,e,t){t.r(e),t.d(e,{default:function(){return h}});var o=t(67294),l=t(81254),a=t(35533),c=["components"];function r(){return r=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(n[o]=t[o])}return n},r.apply(this,arguments)}function i(n,e){if(null==n)return{};var t,o,l=function(n,e){if(null==n)return{};var t,o,l={},a=Object.keys(n);for(o=0;o<a.length;o++)t=a[o],e.indexOf(t)>=0||(l[t]=n[t]);return l}(n,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);for(o=0;o<a.length;o++)t=a[o],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(l[t]=n[t])}return l}var s={};function d(n){var e=n.components,t=i(n,c);return(0,l.mdx)("wrapper",r({},s,t,{components:e,mdxType:"MDXLayout"}),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React, { useState, useRef, useCallback } from 'react';\nimport { WorklistDataGrid } from 'terra-data-grid';\nimport WorklistDataGridUtils from 'terra-data-grid/src/utils/WorklistDataGridUtils';\n\nconst gridDataJSON = {\n  cols: [\n    { id: 'Column-0', displayName: 'Patient' },\n    { id: 'Column-1', displayName: 'Location' },\n    { id: 'Column-2', displayName: 'Illness Severity' },\n    { id: 'Column-3', displayName: 'Visit' },\n    { id: 'Column-4', displayName: 'Allergy' },\n    { id: 'Column-5', displayName: 'Primary Contact' },\n    { id: 'Column-6', displayName: 'Generic Order Counts' },\n  ],\n  rows: [\n    {\n      id: '1',\n      cells: [\n        { content: 'Fleck, Arthur' },\n        { content: '1007-MTN' },\n        { content: 'Unstable' },\n        { content: 'Inpatient, 2 months' },\n        { content: '' },\n        { content: 'Quinzell, Harleen' },\n        { content: '', isMasked: true },\n      ],\n    },\n    {\n      id: '2',\n      cells: [\n        { content: 'Wayne, Bruce' },\n        { content: '1107-MTN-DR' },\n        { content: 'Stable' },\n        { content: 'Outpatient, 2 days' },\n        { content: 'Phytochemicals' },\n        { content: 'Grayson, Richard' },\n        { content: '' },\n\n      ],\n    },\n    {\n      id: '3',\n      cells: [\n        { content: 'Carr, Alicia' },\n        { content: '1007-MTN' },\n        { content: 'Unstable' },\n        { content: 'Inpatient, 3 months' },\n        { content: '' },\n        { content: 'Quinzell, Harleen' },\n        { content: '' },\n\n      ],\n    },\n    {\n      id: '4',\n      cells: [\n        { content: 'McMurphy, Donald' },\n        { content: '1024-MTN', isMasked: true },\n        { content: 'Stable' },\n        { content: 'Inpatient, 5 months' },\n        { content: '' },\n        { content: 'Quinzell, Harleen' },\n        { content: '' },\n      ],\n    },\n    {\n      id: '5',\n      cells: [\n        { content: 'Peters, Timothy' },\n        { content: '1207-MTN' },\n        { content: 'Unstable', isMasked: true },\n        { content: 'Outpatient, 15 days' },\n        { content: '' },\n        { content: 'Quinzell, Harleen' },\n        { content: '' },\n      ],\n    },\n    {\n      id: '6',\n      cells: [\n        { content: 'Jones, Becky' },\n        { content: '1007-MTN' },\n        { content: 'Unstable' },\n        { content: 'Inpatient, 2 months' },\n        { content: '' },\n        { content: 'Quinzell, Harleen' },\n        { content: '' },\n      ],\n    },\n    {\n      id: '7',\n      cells: [\n        { content: 'Williams, Peter' },\n        { content: '1002-KTN' },\n        { content: 'Unstable' },\n        { content: 'Outpatient, 9 days' },\n        { content: '' },\n        { content: 'Quinzell, Harleen' },\n        { content: '' },\n      ],\n    },\n    {\n      id: '8',\n      cells: [\n        { content: 'Pratt, Michaela' },\n        { content: '2108-NTN' },\n        { content: 'Stable' },\n        { content: 'Outpatient, 45 days' },\n        { content: '' },\n        { content: 'Quinzell, Harleen' },\n        { content: '' },\n      ],\n    },\n    {\n      id: '9',\n      cells: [\n        { content: 'Styris, Scott' },\n        { content: '1007-MTN', isMasked: true },\n        { content: 'Unstable' },\n        { content: 'Inpatient, 2 months' },\n        { content: '' },\n        { content: 'Quinzell, Harleen' },\n        { content: '' },\n      ],\n    },\n    {\n      id: '10',\n      cells: [\n        { content: 'Cook, Allan' },\n        { content: '1700-SKB' },\n        { content: 'Stable' },\n        { content: 'Inpatient, 4 months' },\n        { content: '' },\n        { content: 'Quinzell, Harleen' },\n        { content: '' },\n      ],\n    },\n    {\n      id: '11',\n      cells: [\n        { content: 'Lahey, Nathaniel' },\n        { content: '1348-DRS' },\n        { content: 'Unstable' },\n        { content: 'Inpatient, 1 months' },\n        { content: '' },\n        { content: 'Quinzell, Harleen' },\n        { content: '' },\n      ],\n    },\n    {\n      id: '12',\n      cells: [\n        { content: 'Harris, Isabella' },\n        { content: '1809-MTN' },\n        { content: 'Stable' },\n        { content: 'Inpatient, 6 months' },\n        { content: '' },\n        { content: 'Quinzell, Harleen' },\n        { content: '' },\n      ],\n    },\n    {\n      id: '13',\n      cells: [\n        { content: 'Millstone, Asher' },\n        { content: '4133-MZN' },\n        { content: 'Unstable' },\n        { content: 'Inpatient, 9 months' },\n        { content: '' },\n        { content: 'Quinzell, Harleen' },\n        { content: '' },\n      ],\n    },\n  ],\n};\n\nconst RowSelection = () => {\n  const rowSelectionModeRef = useRef();\n  const rowHeaderIndex = 0;\n  const { cols, rows } = gridDataJSON;\n  const [rowData, setRowData] = useState(rows);\n  const [hasSelectableRows, setHasSelectableRows] = useState(false);\n\n  const clearRowSelection = useCallback(() => {\n    const newRowData = [...rowData];\n    // eslint-disable-next-line no-return-assign, no-param-reassign\n    newRowData.forEach(row => (row.isSelected = false));\n    setRowData(newRowData);\n  }, [rowData]);\n\n  const disableSelectableRows = useCallback(() => {\n    rowSelectionModeRef.current.checked = false;\n    setHasSelectableRows(false);\n    clearRowSelection();\n  }, [clearRowSelection]);\n\n  const onRowSelectionModeChange = useCallback((event) => {\n    if (!event.target.checked) {\n      clearRowSelection();\n    }\n    setHasSelectableRows(event.target.checked);\n  }, [clearRowSelection]);\n\n  const onColumnSelect = useCallback((columnId) => {\n    if (columnId === WorklistDataGridUtils.ROW_SELECTION_COLUMN.id) {\n      // eslint-disable-next-line no-alert\n      alert('Row Selection Header Clicked');\n    }\n  }, []);\n\n  const onRowSelect = useCallback((rowsToSelectAndUnSelect) => {\n    // Remove current selections\n    const newRowData = [...rowData];\n\n    rowsToSelectAndUnSelect.forEach((updatedRow) => {\n      const dataRowToUpdate = newRowData.find(row => row.id === updatedRow.id);\n      if (dataRowToUpdate) {\n        dataRowToUpdate.isSelected = updatedRow.selected;\n      }\n    });\n\n    setRowData(newRowData);\n  }, [rowData]);\n\n  const onRowSelectAll = useCallback(() => {\n    const newRowData = [...rowData];\n    // eslint-disable-next-line no-return-assign, no-param-reassign\n    newRowData.forEach(row => (row.isSelected = true));\n    setRowData(newRowData);\n  }, [rowData]);\n\n  const enableRowSelection = useCallback(() => {\n    if (!rowSelectionModeRef.current.checked) {\n      rowSelectionModeRef.current.checked = true;\n    }\n    setHasSelectableRows(true);\n  }, []);\n\n  return (\n    <React.Fragment>\n      <div>\n        <label htmlFor=\"rowSelectionMode\"><b>Row Selection Mode</b></label>\n        <input\n          id=\"rowSelectionMode\"\n          type=\"checkbox\"\n          ref={rowSelectionModeRef}\n          onChange={onRowSelectionModeChange}\n        />\n      </div>\n      <WorklistDataGrid\n        id=\"default-terra-worklist-data-grid\"\n        overflowColumns={cols}\n        rows={rowData}\n        rowHeaderIndex={rowHeaderIndex}\n        columnWidth=\"180px\"\n        ariaLabel=\"Worklist Data Grid\"\n        hasSelectableRows={hasSelectableRows}\n        onRowSelect={onRowSelect}\n        onRowSelectAll={onRowSelectAll}\n        onClearSelectedRows={clearRowSelection}\n        onDisableSelectableRows={disableSelectableRows}\n        onColumnSelect={onColumnSelect}\n        onEnableRowSelection={enableRowSelection}\n      />\n    </React.Fragment>\n  );\n};\n\nexport default RowSelection;\n\n")))}d.isMDXComponent=!0;var u=t(49271),w=function(n){var e=n.title,t=n.description,l=n.isExpanded;return o.createElement(u.Z,{title:e||"Row Selection",description:t,example:o.createElement(a.Z,null),exampleSrc:o.createElement(d,null),isExpanded:l})},p=["components"];function f(){return f=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(n[o]=t[o])}return n},f.apply(this,arguments)}function m(n,e){if(null==n)return{};var t,o,l=function(n,e){if(null==n)return{};var t,o,l={},a=Object.keys(n);for(o=0;o<a.length;o++)t=a[o],e.indexOf(t)>=0||(l[t]=n[t]);return l}(n,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);for(o=0;o<a.length;o++)t=a[o],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(l[t]=n[t])}return l}var b={},S="wrapper";function h(n){var e=n.components,t=m(n,p);return(0,l.mdx)(S,f({},b,t,{components:e,mdxType:"MDXLayout"}),(0,l.mdx)(w,{title:"Worklist Data Grid With Row Selection",mdxType:"RowSelection"}))}h.isMDXComponent=!0},81726:function(n,e,t){t.r(e);const o={ROW_SELECTION_COLUMN:{id:"WorklistDataGrid-rowSelectionColumn",width:40,isSelectable:!0,isResizable:!1}};e.default=o}}]);