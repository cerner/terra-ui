"use strict";(self.webpackChunkterra_ui=self.webpackChunkterra_ui||[]).push([[97231],{8548:function(e,n,t){var o=t(64836),l=t(18698);n.Z=void 0;var r=o(t(861)),a=o(t(27424)),i=function(e,n){if(!n&&e&&e.__esModule)return e;if(null===e||"object"!==l(e)&&"function"!=typeof e)return{default:e};var t=s(n);if(t&&t.has(e))return t.get(e);var o={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if("default"!==a&&Object.prototype.hasOwnProperty.call(e,a)){var i=r?Object.getOwnPropertyDescriptor(e,a):null;i&&(i.get||i.set)?Object.defineProperty(o,a,i):o[a]=e[a]}o.default=e,t&&t.set(e,o);return o}(t(67294)),c=o(t(14312));function s(e){if("function"!=typeof WeakMap)return null;var n=new WeakMap,t=new WeakMap;return(s=function(e){return e?t:n})(e)}var d=[{id:"Column-0",displayName:"Patient"},{id:"Column-1",displayName:"Location"},{id:"Column-2",displayName:"Illness Severity"},{id:"Column-3",displayName:"Visit"},{id:"Column-4",displayName:"Allergy"},{id:"Column-5",displayName:"Primary Contact"},{id:"Column-6",displayName:"Generic Order Counts"},{id:"Column-7",displayName:"Patient Age"},{id:"Column-8",displayName:"Medication History"},{id:"Column-9",displayName:"My Relationship"},{id:"Column-10",displayName:"Not Selectable",isSelectable:!1}],u=[{id:"1",cells:[{content:"Fleck, Arthur"},{content:"1007-MTN"},{content:"Unstable"},{content:"Inpatient, 2 months"},{content:""},{content:"Quinzell, Harleen"},{content:""},{isMasked:!0},{isMasked:!0},{content:"Admitting Physician"},{content:"",isSelectable:!1}]},{id:"2",cells:[{content:"Wayne, Bruce"},{content:"1007-MTN-DR"},{content:"Stable"},{content:"Outpatient, 2 days"},{content:"Phytochemicals"},{content:"Grayson, Richard"},{content:""},{content:""},{isMasked:!0},{content:"Admitting Physician"},{content:"",isSelectable:!1}]}],f=function(){var e=(0,i.useRef)(),n=d,t=u,o=(0,i.useState)([]),l=(0,a.default)(o,2),s=l[0],f=l[1],m=(0,i.useState)(!1),w=(0,a.default)(m,2),p=w[0],S=w[1],R=function(e,n){if(!n)return[];var t=[];return e?t=n:s.includes(n[0])?t=s.filter((function(e){return e!==n[0]})):(t=t.concat(s)).push(n[0]),t},y=function(){t.forEach((function(e){e.isSelected&&(e.isSelected=!1)})),f([])};return i.default.createElement(i.default.Fragment,null,i.default.createElement("div",null,i.default.createElement("label",{htmlFor:"rowSelectionMode"},i.default.createElement("b",null,"Row Selection Mode")),i.default.createElement("input",{id:"rowSelectionMode",type:"checkbox",ref:e,onChange:function(e){e.target.checked||y(),S(e.target.checked)}})),i.default.createElement(c.default,{id:"default-terra-worklist-data-grid",overflowColumns:n,rows:(0,r.default)(t),rowHeaderIndex:0,columnWidth:"180px",ariaLabel:"Worklist Data Grid",hasSelectableRows:p,onRowSelect:function(e){var n=[],o=t.find((function(n){return n.id===e}));o.isSelected=!o.isSelected,t.forEach((function(e){e.isSelected&&n.push(e.id)})),f(R(!1,n))},onRowSelectAll:function(){var e=[];t.forEach((function(n){n.isSelected=!0,e.push(n.id)})),f(R(!0,e))},onClearSelectedRows:function(){y()},onDisableSelectableRows:function(){e.current.checked=!1,S(!1),y()}}))};n.Z=f},94411:function(e,n,t){t.r(n),t.d(n,{default:function(){return y}});var o=t(67294),l=t(81254),r=t(8548),a=["components"];function i(){return i=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},i.apply(this,arguments)}function c(e,n){if(null==e)return{};var t,o,l=function(e,n){if(null==e)return{};var t,o,l={},r=Object.keys(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var s={};function d(e){var n=e.components,t=c(e,a);return(0,l.mdx)("wrapper",i({},s,t,{components:n,mdxType:"MDXLayout"}),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React, { useState, useRef } from 'react';\nimport WorklistDataGrid from 'terra-worklist-data-grid';\n\nconst gridDataJSON = {\n  cols: [\n    { id: 'Column-0', displayName: 'Patient' },\n    { id: 'Column-1', displayName: 'Location' },\n    { id: 'Column-2', displayName: 'Illness Severity' },\n    { id: 'Column-3', displayName: 'Visit' },\n    { id: 'Column-4', displayName: 'Allergy' },\n    { id: 'Column-5', displayName: 'Primary Contact' },\n    { id: 'Column-6', displayName: 'Generic Order Counts' },\n    { id: 'Column-7', displayName: 'Patient Age' },\n    { id: 'Column-8', displayName: 'Medication History' },\n    { id: 'Column-9', displayName: 'My Relationship' },\n    { id: 'Column-10', displayName: 'Not Selectable', isSelectable: false },\n  ],\n  rows: [\n    {\n      id: '1',\n      cells: [\n        { content: 'Fleck, Arthur' },\n        { content: '1007-MTN' },\n        { content: 'Unstable' },\n        { content: 'Inpatient, 2 months' },\n        { content: '' },\n        { content: 'Quinzell, Harleen' },\n        { content: '' },\n        { isMasked: true },\n        { isMasked: true },\n        { content: 'Admitting Physician' },\n        { content: '', isSelectable: false },\n      ],\n    },\n    {\n      id: '2',\n      cells: [\n        { content: 'Wayne, Bruce' },\n        { content: '1007-MTN-DR' },\n        { content: 'Stable' },\n        { content: 'Outpatient, 2 days' },\n        { content: 'Phytochemicals' },\n        { content: 'Grayson, Richard' },\n        { content: '' },\n        { content: '' },\n        { isMasked: true },\n        { content: 'Admitting Physician' },\n        { content: '', isSelectable: false },\n      ],\n    },\n  ],\n};\n\nconst RowSelection = () => {\n  const rowSelectionModeRef = useRef();\n  const rowHeaderIndex = 0;\n  const { cols, rows } = gridDataJSON;\n  const [selectedRows, setSelectedRows] = useState([]);\n  const [hasSelectableRows, setHasSelectableRows] = useState(false);\n\n  const determineSelectedRows = (allRowsSelected, userSelectedRow) => {\n    if (!userSelectedRow) {\n      return [];\n    }\n\n    let remainingSelectedRow = [];\n    if (allRowsSelected) {\n      remainingSelectedRow = userSelectedRow;\n    } else if (selectedRows.includes(userSelectedRow[0])) {\n      // Row Deselect so remove this rowId.\n      remainingSelectedRow = selectedRows.filter(e => (e !== userSelectedRow[0]));\n    } else {\n      // Row Selected so add this rowId.\n      remainingSelectedRow = remainingSelectedRow.concat(selectedRows);\n      remainingSelectedRow.push(userSelectedRow[0]);\n    }\n    return remainingSelectedRow;\n  };\n\n  const clearRowSelection = () => {\n    // eslint-disable-next-line no-param-reassign\n    rows.forEach(r => { if (r.isSelected) { r.isSelected = false; } });\n    setSelectedRows([]);\n  };\n\n  const disableSelectableRows = () => {\n    rowSelectionModeRef.current.checked = false;\n    setHasSelectableRows(false);\n    clearRowSelection();\n  };\n\n  const onRowSelectionModeChange = (event) => {\n    if (!event.target.checked) {\n      clearRowSelection();\n    }\n    setHasSelectableRows(event.target.checked);\n  };\n\n  return (\n    <React.Fragment>\n      <div>\n        <label htmlFor=\"rowSelectionMode\"><b>Row Selection Mode</b></label>\n        <input\n          id=\"rowSelectionMode\"\n          type=\"checkbox\"\n          ref={rowSelectionModeRef}\n          onChange={onRowSelectionModeChange}\n        />\n      </div>\n      <WorklistDataGrid\n        id=\"default-terra-worklist-data-grid\"\n        overflowColumns={cols}\n        rows={[...rows]}\n        rowHeaderIndex={rowHeaderIndex}\n        columnWidth=\"180px\"\n        ariaLabel=\"Worklist Data Grid\"\n        hasSelectableRows={hasSelectableRows}\n        onRowSelect={(rowId) => {\n          const newRows = [];\n          const selectedRow = rows.find(e => e.id === rowId);\n          selectedRow.isSelected = !selectedRow.isSelected;\n          rows.forEach(element => {\n            if (element.isSelected) {\n              newRows.push(element.id);\n            }\n          });\n          setSelectedRows(determineSelectedRows(false, newRows));\n        }}\n        onRowSelectAll={() => {\n          const newRows = [];\n          rows.forEach(e => { e.isSelected = true; newRows.push(e.id); });\n          setSelectedRows(determineSelectedRows(true, newRows));\n        }}\n        onClearSelectedRows={() => {\n          clearRowSelection();\n        }}\n        onDisableSelectableRows={() => {\n          disableSelectableRows();\n        }}\n      />\n    </React.Fragment>\n  );\n};\n\nexport default RowSelection;\n\n")))}d.isMDXComponent=!0;var u=t(49271),f=function(e){var n=e.title,t=e.description,l=e.isExpanded;return o.createElement(u.Z,{title:n||"Row Selection",description:t,example:o.createElement(r.Z,null),exampleSrc:o.createElement(d,null),isExpanded:l})},m=["components"];function w(){return w=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},w.apply(this,arguments)}function p(e,n){if(null==e)return{};var t,o,l=function(e,n){if(null==e)return{};var t,o,l={},r=Object.keys(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var S={},R="wrapper";function y(e){var n=e.components,t=p(e,m);return(0,l.mdx)(R,w({},S,t,{components:n,mdxType:"MDXLayout"}),(0,l.mdx)(f,{title:"Worklist Data Grid With Row Selection",mdxType:"RowSelection"}))}y.isMDXComponent=!0}}]);