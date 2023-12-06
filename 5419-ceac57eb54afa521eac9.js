"use strict";(self.webpackChunkterra_ui=self.webpackChunkterra_ui||[]).push([[5419],{49271:function(e,t,n){var a=n(64836),l=n(18698);t.Z=void 0;var o=a(n(27424)),r=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==l(e)&&"function"!=typeof e)return{default:e};var n=p(t);if(n&&n.has(e))return n.get(e);var a={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var r in e)if("default"!==r&&Object.prototype.hasOwnProperty.call(e,r)){var c=o?Object.getOwnPropertyDescriptor(e,r):null;c&&(c.get||c.set)?Object.defineProperty(a,r,c):a[r]=e[r]}a.default=e,n&&n.set(e,a);return a}(n(67294)),c=a(n(45697)),i=a(n(47166)),s=n(21538),u=a(n(33864)),d=a(n(23399)),m=n(51051),f=a(n(53560));function p(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(p=function(e){return e?n:t})(e)}var w=i.default.bind(f.default),b={example:c.default.element,exampleSrc:c.default.element,exampleCssSrc:c.default.element,title:c.default.string,description:c.default.node,isExpanded:c.default.bool},_=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","true")},S=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","false")},v=function(e){var t=e.example,n=e.exampleSrc,a=e.exampleCssSrc,l=e.title,c=e.description,i=e.isExpanded,f=(0,r.useState)(i),p=(0,o.default)(f,2),b=p[0],v=p[1],y=(0,r.useState)(!1),h=(0,o.default)(y,2),E=h[0],x=h[1],g=r.default.useContext(s.ThemeContext),R=void 0!==a,T=function(){x(!E),b&&v(!b)},k=function(){v(!b),E&&x(!E)},M=function(e,t){e.nativeEvent.keyCode!==m.KEY_SPACE&&e.nativeEvent.keyCode!==m.KEY_RETURN||(e.preventDefault(),t())};return r.default.createElement("div",{className:w("template",g.className)},r.default.createElement("div",{className:w("header")},l&&r.default.createElement("h2",{className:w("title")},l)),r.default.createElement("div",{className:w("content")},c&&r.default.createElement("div",{className:w("description")},c),t),r.default.createElement("div",{className:w("footer")},n?r.default.createElement("div",{className:w("button-container")},R&&r.default.createElement("button",{type:"button",className:w("css-toggle","item",{"is-selected":E}),onClick:T,onKeyDown:function(e){return M(e,T)},onBlur:_,onMouseDown:S,tabIndex:0,"data-focus-styles-enabled":!0},r.default.createElement(u.default,{className:w("chevron")}),r.default.createElement("span",null,"CSS"),r.default.createElement(d.default,{className:w("chevron")})),r.default.createElement("button",{type:"button",className:w("code-toggle","item",{"is-selected":b}),onClick:k,onKeyDown:function(e){return M(e,k)},onBlur:_,onMouseDown:S,tabIndex:0,"data-focus-styles-enabled":!0},r.default.createElement(u.default,{className:w("chevron")}),r.default.createElement("span",null,"Code"),r.default.createElement(d.default,{className:w("chevron")}))):null,r.default.createElement("div",null,E&&r.default.createElement("div",{className:w("css")},a),b&&r.default.createElement("div",{className:w("code")},n))))};v.propTypes=b,v.defaultProps={isExpanded:!1};var y=v;t.Z=y},9634:function(e,t,n){var a=n(64836),l=n(18698);t.Z=void 0;var o=a(n(861)),r=a(n(27424)),c=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=l(e)&&"function"!=typeof e)return{default:e};var n=s(t);if(n&&n.has(e))return n.get(e);var a={__proto__:null},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var r in e)if("default"!==r&&Object.prototype.hasOwnProperty.call(e,r)){var c=o?Object.getOwnPropertyDescriptor(e,r):null;c&&(c.get||c.set)?Object.defineProperty(a,r,c):a[r]=e[r]}return a.default=e,n&&n.set(e,a),a}(n(67294)),i=a(n(7270));function s(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(s=function(e){return e?n:t})(e)}var u=[{id:"Column-0",displayName:"Patient"},{id:"Column-1",displayName:"Location"},{id:"Column-2",displayName:"Illness Severity"}],d=[{id:"1",cells:[{content:"Fleck, Arthur"},{content:"1007-MTN"},{content:"Unstable"}]},{id:"2",cells:[{content:"Wayne, Bruce"},{content:"1107-MTN-DR"},{content:"Stable"}]},{id:"3",cells:[{content:"Carr, Alicia"},{content:"1007-MTN"},{content:"Unstable"}]},{id:"4",cells:[{content:"McMurphy, Donald"},{content:"1024-MTN",isMasked:!0},{content:"Stable"}]},{id:"5",cells:[{content:"Peters, Timothy"},{content:"1207-MTN"},{content:"Unstable",isMasked:!0}]}];t.Z=function(){var e=(0,c.useRef)(),t=u,n=d,a=(0,c.useState)(n),l=(0,r.default)(a,2),s=l[0],m=l[1],f=(0,c.useState)(!1),p=(0,r.default)(f,2),w=p[0],b=p[1],_=(0,c.useCallback)((function(){var e=(0,o.default)(s);e.forEach((function(e){return e.isSelected=!1})),m(e)}),[s]),S=(0,c.useCallback)((function(e){e.target.checked||_(),b(e.target.checked)}),[_]),v=(0,c.useCallback)((function(e){var t=e.rowId,n=(0,o.default)(s),a=n.find((function(e){return e.id===t}));a&&(a.isSelected=!a.isSelected),m(n)}),[s]),y=(0,c.useCallback)((function(){alert("Row Selection Header Clicked")}),[]);return c.default.createElement(c.default.Fragment,null,c.default.createElement("div",null,c.default.createElement("label",{htmlFor:"rowSelectionMode"},c.default.createElement("b",null,"Row Selection Mode")),c.default.createElement("input",{id:"rowSelectionMode",type:"checkbox",ref:e,onChange:S})),c.default.createElement(i.default,{id:"table-with-row-selections",overflowColumns:t,rows:s,rowHeaderIndex:0,columnWidth:"180px",ariaLabel:"Table with Row Selections",rowSelectionMode:w?"multiple":void 0,onRowSelect:v,onRowSelectionHeaderSelect:y}))}},5419:function(e,t,n){n.r(t),n.d(t,{default:function(){return S}});var a=n(67294),l=n(81254),o=n(9634),r=["components"];function c(){return c=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},c.apply(this,arguments)}function i(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var s={};function u(e){var t=e.components,n=i(e,r);return(0,l.mdx)("wrapper",c({},s,n,{components:t,mdxType:"MDXLayout"}),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React, { useState, useRef, useCallback } from 'react';\nimport Table from 'terra-table';\n\nconst tableDataJSON = {\n  cols: [\n    { id: 'Column-0', displayName: 'Patient' },\n    { id: 'Column-1', displayName: 'Location' },\n    { id: 'Column-2', displayName: 'Illness Severity' },\n  ],\n  rows: [\n    {\n      id: '1',\n      cells: [\n        { content: 'Fleck, Arthur' },\n        { content: '1007-MTN' },\n        { content: 'Unstable' },\n      ],\n    },\n    {\n      id: '2',\n      cells: [\n        { content: 'Wayne, Bruce' },\n        { content: '1107-MTN-DR' },\n        { content: 'Stable' },\n\n      ],\n    },\n    {\n      id: '3',\n      cells: [\n        { content: 'Carr, Alicia' },\n        { content: '1007-MTN' },\n        { content: 'Unstable' },\n\n      ],\n    },\n    {\n      id: '4',\n      cells: [\n        { content: 'McMurphy, Donald' },\n        { content: '1024-MTN', isMasked: true },\n        { content: 'Stable' },\n      ],\n    },\n    {\n      id: '5',\n      cells: [\n        { content: 'Peters, Timothy' },\n        { content: '1207-MTN' },\n        { content: 'Unstable', isMasked: true },\n      ],\n    },\n  ],\n};\n\nconst TableRowSelection = () => {\n  const rowSelectionModeRef = useRef();\n  const rowHeaderIndex = 0;\n  const { cols, rows } = tableDataJSON;\n  const [rowData, setRowData] = useState(rows);\n  const [hasSelectableRows, setHasSelectableRows] = useState(false);\n\n  const clearRowSelection = useCallback(() => {\n    const newRowData = [...rowData];\n    // eslint-disable-next-line no-return-assign, no-param-reassign\n    newRowData.forEach(row => (row.isSelected = false));\n    setRowData(newRowData);\n  }, [rowData]);\n\n  const onRowSelectionModeChange = useCallback((event) => {\n    if (!event.target.checked) {\n      clearRowSelection();\n    }\n    setHasSelectableRows(event.target.checked);\n  }, [clearRowSelection]);\n\n  const onRowSelect = useCallback((rowSelection) => {\n    const { rowId } = rowSelection;\n\n    // Remove current selections\n    const newRowData = [...rowData];\n\n    const dataRowToUpdate = newRowData.find(row => row.id === rowId);\n    if (dataRowToUpdate) {\n      dataRowToUpdate.isSelected = !dataRowToUpdate.isSelected;\n    }\n\n    setRowData(newRowData);\n  }, [rowData]);\n\n  const onRowSelectionHeaderSelect = useCallback(() => {\n    // eslint-disable-next-line no-alert\n    alert('Row Selection Header Clicked');\n  }, []);\n\n  return (\n    <React.Fragment>\n      <div>\n        <label htmlFor=\"rowSelectionMode\"><b>Row Selection Mode</b></label>\n        <input\n          id=\"rowSelectionMode\"\n          type=\"checkbox\"\n          ref={rowSelectionModeRef}\n          onChange={onRowSelectionModeChange}\n        />\n      </div>\n      <Table\n        id=\"table-with-row-selections\"\n        overflowColumns={cols}\n        rows={rowData}\n        rowHeaderIndex={rowHeaderIndex}\n        columnWidth=\"180px\"\n        ariaLabel=\"Table with Row Selections\"\n        rowSelectionMode={hasSelectableRows ? 'multiple' : undefined} // Prop to turn row selection mode on/off\n        onRowSelect={onRowSelect} // For row selection, consumer must provide a callback that the Worklist Data Grid will call when the user selects one or more rows.\n        onRowSelectionHeaderSelect={onRowSelectionHeaderSelect}\n      />\n    </React.Fragment>\n  );\n};\n\nexport default TableRowSelection;\n\n")))}u.isMDXComponent=!0;var d=n(49271),m=function(e){var t=e.title,n=e.description,l=e.isExpanded;return a.createElement(d.Z,{title:t||"Table Row Selection",description:n,example:a.createElement(o.Z,null),exampleSrc:a.createElement(u,null),isExpanded:l})},f=["components"];function p(){return p=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},p.apply(this,arguments)}function w(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var b={},_="wrapper";function S(e){var t=e.components,n=w(e,f);return(0,l.mdx)(_,p({},b,n,{components:t,mdxType:"MDXLayout"}),(0,l.mdx)(m,{title:"Table With Row Selection",mdxType:"TableRowSelection"}))}S.isMDXComponent=!0},53560:function(e,t,n){n.r(t),t.default={"clinical-lowlight-theme":"ExampleTemplate-module__clinical-lowlight-theme___rBbtD","orion-fusion-theme":"ExampleTemplate-module__orion-fusion-theme___GzA23",template:"ExampleTemplate-module__template___a4uPk",header:"ExampleTemplate-module__header___iFXV3",content:"ExampleTemplate-module__content___48m4Q",description:"ExampleTemplate-module__description___NwBJo",footer:"ExampleTemplate-module__footer___GpSoG","button-container":"ExampleTemplate-module__button-container___rAD11",css:"ExampleTemplate-module__css___+jtk1",code:"ExampleTemplate-module__code___7rC6C","css-toggle":"ExampleTemplate-module__css-toggle___chHK7","code-toggle":"ExampleTemplate-module__code-toggle___TGlE-","is-selected":"ExampleTemplate-module__is-selected___0BYwS",item:"ExampleTemplate-module__item___8FTQq",chevron:"ExampleTemplate-module__chevron___VbY7N",title:"ExampleTemplate-module__title___r+nbJ","dynamic-content":"ExampleTemplate-module__dynamic-content___k+1H7"}}}]);