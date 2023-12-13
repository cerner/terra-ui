"use strict";(self.webpackChunkterra_ui=self.webpackChunkterra_ui||[]).push([[6701],{49271:function(e,n,t){var l=t(64836),o=t(18698);n.Z=void 0;var c=l(t(27424)),a=function(e,n){if(!n&&e&&e.__esModule)return e;if(null===e||"object"!==o(e)&&"function"!=typeof e)return{default:e};var t=f(n);if(t&&t.has(e))return t.get(e);var l={},c=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if("default"!==a&&Object.prototype.hasOwnProperty.call(e,a)){var r=c?Object.getOwnPropertyDescriptor(e,a):null;r&&(r.get||r.set)?Object.defineProperty(l,a,r):l[a]=e[a]}l.default=e,t&&t.set(e,l);return l}(t(67294)),r=l(t(45697)),s=l(t(47166)),i=t(21538),d=l(t(33864)),u=l(t(23399)),m=t(51051),p=l(t(53560));function f(e){if("function"!=typeof WeakMap)return null;var n=new WeakMap,t=new WeakMap;return(f=function(e){return e?t:n})(e)}var S=s.default.bind(p.default),b={example:r.default.element,exampleSrc:r.default.element,exampleCssSrc:r.default.element,title:r.default.string,description:r.default.node,isExpanded:r.default.bool},w=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","true")},y=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","false")},_=function(e){var n=e.example,t=e.exampleSrc,l=e.exampleCssSrc,o=e.title,r=e.description,s=e.isExpanded,p=(0,a.useState)(s),f=(0,c.default)(p,2),b=f[0],_=f[1],h=(0,a.useState)(!1),C=(0,c.default)(h,2),x=C[0],v=C[1],O=a.default.useContext(i.ThemeContext),g=void 0!==l,E=function(){v(!x),b&&_(!b)},T=function(){_(!b),x&&v(!x)},I=function(e,n){e.nativeEvent.keyCode!==m.KEY_SPACE&&e.nativeEvent.keyCode!==m.KEY_RETURN||(e.preventDefault(),n())};return a.default.createElement("div",{className:S("template",O.className)},a.default.createElement("div",{className:S("header")},o&&a.default.createElement("h2",{className:S("title")},o)),a.default.createElement("div",{className:S("content")},r&&a.default.createElement("div",{className:S("description")},r),n),a.default.createElement("div",{className:S("footer")},t?a.default.createElement("div",{className:S("button-container")},g&&a.default.createElement("button",{type:"button",className:S("css-toggle","item",{"is-selected":x}),onClick:E,onKeyDown:function(e){return I(e,E)},onBlur:w,onMouseDown:y,tabIndex:0,"data-focus-styles-enabled":!0},a.default.createElement(d.default,{className:S("chevron")}),a.default.createElement("span",null,"CSS"),a.default.createElement(u.default,{className:S("chevron")})),a.default.createElement("button",{type:"button",className:S("code-toggle","item",{"is-selected":b}),onClick:T,onKeyDown:function(e){return I(e,T)},onBlur:w,onMouseDown:y,tabIndex:0,"data-focus-styles-enabled":!0},a.default.createElement(d.default,{className:S("chevron")}),a.default.createElement("span",null,"Code"),a.default.createElement(u.default,{className:S("chevron")}))):null,a.default.createElement("div",null,x&&a.default.createElement("div",{className:S("css")},l),b&&a.default.createElement("div",{className:S("code")},t))))};_.propTypes=b,_.defaultProps={isExpanded:!1};var h=_;n.Z=h},92413:function(e,n,t){var l=t(64836),o=t(18698);n.Z=void 0;var c=l(t(38416)),a=l(t(861)),r=l(t(27424)),s=function(e,n){if(!n&&e&&e.__esModule)return e;if(null===e||"object"!=o(e)&&"function"!=typeof e)return{default:e};var t=d(n);if(t&&t.has(e))return t.get(e);var l={__proto__:null},c=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if("default"!==a&&Object.prototype.hasOwnProperty.call(e,a)){var r=c?Object.getOwnPropertyDescriptor(e,a):null;r&&(r.get||r.set)?Object.defineProperty(l,a,r):l[a]=e[a]}return l.default=e,t&&t.set(e,l),l}(t(67294)),i=t(57710);function d(e){if("function"!=typeof WeakMap)return null;var n=new WeakMap,t=new WeakMap;return(d=function(e){return e?t:n})(e)}function u(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);n&&(l=l.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,l)}return t}function m(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?u(Object(t),!0).forEach((function(n){(0,c.default)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):u(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var p={cols:[{id:"Column-0",displayName:"Patient",isSelectable:!0},{id:"Column-1",displayName:"Location",isSelectable:!0},{id:"Column-2",displayName:"Illness Severity",isSelectable:!0},{id:"Column-3",displayName:"Visit"},{id:"Column-4",displayName:"Allergy"},{id:"Column-5",displayName:"Primary Contact"}],sections:[{id:"section-0",isCollapsible:!0,text:"Test Section",rows:[{id:"1",cells:[{content:"Fleck, Arthur"},{content:"1007-MTN"},{content:"Unstable"},{content:"Inpatient, 2 months"},{content:""},{content:"Quinzell, Harleen"}]},{id:"2",cells:[{content:"Wayne, Bruce"},{content:"1007-MTN-DR"},{content:"Stable"},{content:"Outpatient, 2 days"},{content:"Phytochemicals"},{content:"Grayson, Richard"}]}]},{id:"section-1",text:"Test Section #2",rows:[{id:"3",cells:[{content:"Parker, Peter"},{content:"1007-MTN"},{content:"Unstable"},{content:"Inpatient, 2 months"},{content:""},{content:"Octopus, Doctor"}]},{id:"4",cells:[{content:"Stark, Tony"},{content:"1007-MTN-DR"},{content:"Stable"},{content:"Outpatient, 2 days"},{content:"Phytochemicals"},{content:"America, Captain"}]}]}]};n.Z=function(){var e=(0,s.useState)(p.sections),n=(0,r.default)(e,2),t=n[0],l=n[1],o=(0,s.useCallback)((function(){return t.map((function(e){return m(m({},e),{},{rows:e.rows.map((function(e){return m(m({},e),{},{cells:e.cells.map((function(e){return m(m({},e),{},{isSelected:!1})}))})}))})}))}),[t]),c=(0,s.useCallback)((function(e){var n=t.find((function(n){return n.id===e.sectionId})),c=p.cols.findIndex((function(n){return n.id===e.columnId})),a=n.rows.findIndex((function(n){return n.id===e.rowId})),r=n.rows[a].cells[c],s=o();(n=s.find((function(n){return n.id===e.sectionId}))).rows[a].cells[c].isSelected=!r.isSelected,l(s)}),[t,o]),d=(0,s.useCallback)((function(e){var n=new Set(e.map((function(e){return e.columnId})).map((function(e){return p.cols.findIndex((function(n){return n.id===e}))}))),t=new Set(e.map((function(e){return e.rowId}))),c=o(),a=c.find((function(n){return n.id===e[0].sectionId}));a.rows=a.rows.map((function(e){return m(m({},e),{},{cells:e.cells.map((function(l,o){return m(m({},l),{},{isSelected:n.has(o)&&t.has(e.id)})}))})})),l(c)}),[o]);return s.default.createElement(i.FlowsheetDataGrid,{id:"flowsheet-with-sections",columns:p.cols,sections:t,onSectionSelect:function(e){var n=(0,a.default)(t),o=n.findIndex((function(n){return n.id===e})),c=n.find((function(n){return n.id===e}));c.rows=c.rows.map((function(e){return m(m({},e),{},{cells:e.cells.map((function(e){return m(m({},e),{},{isSelected:!1})}))})})),o>-1&&(n[o].isCollapsed=!n[o].isCollapsed),l(n)},onCellRangeSelect:d,onCellSelect:c,onClearSelectedCells:function(){l(o())}})}},21753:function(e,n,t){t.r(n),t.d(n,{default:function(){return y}});var l=t(67294),o=t(81254),c=t(92413),a=["components"];function r(){return r=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var l in t)Object.prototype.hasOwnProperty.call(t,l)&&(e[l]=t[l])}return e},r.apply(this,arguments)}function s(e,n){if(null==e)return{};var t,l,o=function(e,n){if(null==e)return{};var t,l,o={},c=Object.keys(e);for(l=0;l<c.length;l++)t=c[l],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(l=0;l<c.length;l++)t=c[l],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var i={};function d(e){var n=e.components,t=s(e,a);return(0,o.mdx)("wrapper",r({},i,t,{components:n,mdxType:"MDXLayout"}),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React, { useCallback, useState } from 'react';\nimport { FlowsheetDataGrid } from 'terra-data-grid';\n\nconst gridDataJSON = {\n  cols: [\n    {\n      id: 'Column-0', displayName: 'Patient', isSelectable: true,\n    },\n    {\n      id: 'Column-1', displayName: 'Location', isSelectable: true,\n    },\n    { id: 'Column-2', displayName: 'Illness Severity', isSelectable: true },\n    { id: 'Column-3', displayName: 'Visit' },\n    { id: 'Column-4', displayName: 'Allergy' },\n    { id: 'Column-5', displayName: 'Primary Contact' },\n\n  ],\n  sections: [{\n    id: 'section-0',\n    isCollapsible: true,\n    text: 'Test Section',\n    rows: [\n      {\n        id: '1',\n        cells: [\n          { content: 'Fleck, Arthur' },\n          { content: '1007-MTN' },\n          { content: 'Unstable' },\n          { content: 'Inpatient, 2 months' },\n          { content: '' },\n          { content: 'Quinzell, Harleen' },\n        ],\n      },\n      {\n        id: '2',\n        cells: [\n          { content: 'Wayne, Bruce' },\n          { content: '1007-MTN-DR' },\n          { content: 'Stable' },\n          { content: 'Outpatient, 2 days' },\n          { content: 'Phytochemicals' },\n          { content: 'Grayson, Richard' },\n        ],\n      },\n    ],\n  },\n  {\n    id: 'section-1',\n    text: 'Test Section #2',\n    rows: [\n      {\n        id: '3',\n        cells: [\n          { content: 'Parker, Peter' },\n          { content: '1007-MTN' },\n          { content: 'Unstable' },\n          { content: 'Inpatient, 2 months' },\n          { content: '' },\n          { content: 'Octopus, Doctor' },\n        ],\n      },\n      {\n        id: '4',\n        cells: [\n          { content: 'Stark, Tony' },\n          { content: '1007-MTN-DR' },\n          { content: 'Stable' },\n          { content: 'Outpatient, 2 days' },\n          { content: 'Phytochemicals' },\n          { content: 'America, Captain' },\n        ],\n      },\n    ],\n  }],\n};\n\nconst FlowsheetWithSections = () => {\n  const [tableSections, setTableSections] = useState(gridDataJSON.sections);\n\n  const handleSectionSelect = (sectionId) => {\n    const newSections = [...tableSections];\n    const sectionIndex = newSections.findIndex(section => section.id === sectionId);\n\n    const sectionToClear = newSections.find(section => section.id === sectionId);\n\n    sectionToClear.rows = sectionToClear.rows.map(row => ({\n      ...row,\n      cells: row.cells.map(cell => ({\n        ...cell,\n        isSelected: false,\n      })),\n    }));\n\n    if (sectionIndex > -1) {\n      newSections[sectionIndex].isCollapsed = !newSections[sectionIndex].isCollapsed;\n    }\n\n    setTableSections(newSections);\n  };\n\n  const getClearedSections = useCallback(() => tableSections.map(section => ({\n    ...section,\n    rows: section.rows.map(row => ({\n      ...row,\n      cells: row.cells.map(cell => ({\n        ...cell,\n        isSelected: false,\n      })),\n    })),\n  })), [tableSections]);\n\n  const onCellSelect = useCallback((selectedCell) => {\n    let selectedSection = tableSections.find(section => section.id === selectedCell.sectionId);\n\n    const columnIndex = gridDataJSON.cols.findIndex(col => col.id === selectedCell.columnId);\n    const rowIndex = selectedSection.rows.findIndex(row => row.id === selectedCell.rowId);\n    const previousCell = selectedSection.rows[rowIndex].cells[columnIndex];\n\n    const newSections = getClearedSections();\n\n    //   // If the current cell is the only selected cell, toggle it to unselected. Otherwise, set it to selected.\n    selectedSection = newSections.find(section => section.id === selectedCell.sectionId);\n    selectedSection.rows[rowIndex].cells[columnIndex].isSelected = !previousCell.isSelected;\n    setTableSections(newSections);\n  }, [tableSections, getClearedSections]);\n\n  const handleCellRangeSelection = useCallback((cells) => {\n    const columnIndexesToUpdate = new Set(cells\n      .map(cell => cell.columnId)\n      .map(id => gridDataJSON.cols.findIndex(col => col.id === id)));\n\n    const rowsToUpdate = new Set(cells.map(cell => cell.rowId));\n\n    const newSections = getClearedSections();\n    const selectedSection = newSections.find(section => section.id === cells[0].sectionId);\n\n    selectedSection.rows = selectedSection.rows.map(row => ({\n      ...row,\n      cells: row.cells.map((cell, cellIndex) => ({\n        ...cell,\n        isSelected: columnIndexesToUpdate.has(cellIndex) && rowsToUpdate.has(row.id),\n      })),\n    }));\n\n    setTableSections(newSections);\n  }, [getClearedSections]);\n\n  const onClearSelectedCells = () => {\n    setTableSections(getClearedSections());\n  };\n\n  return (\n    <FlowsheetDataGrid\n      id=\"flowsheet-with-sections\"\n      columns={gridDataJSON.cols}\n      sections={tableSections}\n      onSectionSelect={handleSectionSelect}\n      onCellRangeSelect={handleCellRangeSelection}\n      onCellSelect={onCellSelect}\n      onClearSelectedCells={onClearSelectedCells}\n    />\n  );\n};\n\nexport default FlowsheetWithSections;\n\n")))}d.isMDXComponent=!0;var u=t(49271),m=function(e){var n=e.title,t=e.description,o=e.isExpanded;return l.createElement(u.Z,{title:n||"Flowsheet With Sections",description:t,example:l.createElement(c.Z,null),exampleSrc:l.createElement(d,null),isExpanded:o})},p=["components"];function f(){return f=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var l in t)Object.prototype.hasOwnProperty.call(t,l)&&(e[l]=t[l])}return e},f.apply(this,arguments)}function S(e,n){if(null==e)return{};var t,l,o=function(e,n){if(null==e)return{};var t,l,o={},c=Object.keys(e);for(l=0;l<c.length;l++)t=c[l],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(l=0;l<c.length;l++)t=c[l],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var b={},w="wrapper";function y(e){var n=e.components,t=S(e,p);return(0,o.mdx)(w,f({},b,t,{components:n,mdxType:"MDXLayout"}),(0,o.mdx)(m,{mdxType:"FlowsheetWithSections"}))}y.isMDXComponent=!0},53560:function(e,n,t){t.r(n),n.default={"clinical-lowlight-theme":"ExampleTemplate-module__clinical-lowlight-theme___rBbtD","orion-fusion-theme":"ExampleTemplate-module__orion-fusion-theme___GzA23",template:"ExampleTemplate-module__template___a4uPk",header:"ExampleTemplate-module__header___iFXV3",content:"ExampleTemplate-module__content___48m4Q",description:"ExampleTemplate-module__description___NwBJo",footer:"ExampleTemplate-module__footer___GpSoG","button-container":"ExampleTemplate-module__button-container___rAD11",css:"ExampleTemplate-module__css___+jtk1",code:"ExampleTemplate-module__code___7rC6C","css-toggle":"ExampleTemplate-module__css-toggle___chHK7","code-toggle":"ExampleTemplate-module__code-toggle___TGlE-","is-selected":"ExampleTemplate-module__is-selected___0BYwS",item:"ExampleTemplate-module__item___8FTQq",chevron:"ExampleTemplate-module__chevron___VbY7N",title:"ExampleTemplate-module__title___r+nbJ","dynamic-content":"ExampleTemplate-module__dynamic-content___k+1H7"}}}]);