"use strict";(self.webpackChunkterra_ui=self.webpackChunkterra_ui||[]).push([[78656,83532,61152,38768,16388,73056,50676,28296,46504,5912,4484,82104,96528,74148,51768,7004,84624,62240,39860,95100,76480,54100],{11416:function(e,t,n){var a=n(22411);t.c=void 0;var l=a(n(11504)),o=a(n(3268)),r=a(n(74824)),c=a(n(58112)),s=r.default.bind(c.default),i={name:o.default.string.isRequired,src:o.default.string,url:o.default.string,version:o.default.string.isRequired},u=function(e){var t=e.src,n=e.name,a=e.url,o=e.version,r=l.default.createElement("a",{className:s("badge"),href:a||"https://www.npmjs.org/package/".concat(n,"/v/").concat(o)},l.default.createElement("span",{className:s("badge-name")},a?"package":"npm"),l.default.createElement("span",{className:s("badge-version")},"v".concat(o))),c=t?l.default.createElement("a",{className:s("badge"),href:t},l.default.createElement("span",{className:s("badge-name")},"github"),l.default.createElement("span",{className:s("badge-version")},"source")):void 0;return l.default.createElement("div",{className:s("badge-container")},r,c)};u.propTypes=i;t.c=u},33792:function(e,t,n){var a=n(22411),l=n(59848);t.c=void 0;var o=a(n(97936)),r=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=l(e)&&"function"!=typeof e)return{default:e};var n=f(t);if(n&&n.has(e))return n.get(e);var a={__proto__:null},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var r in e)if("default"!==r&&Object.prototype.hasOwnProperty.call(e,r)){var c=o?Object.getOwnPropertyDescriptor(e,r):null;c&&(c.get||c.set)?Object.defineProperty(a,r,c):a[r]=e[r]}return a.default=e,n&&n.set(e,a),a}(n(11504)),c=a(n(3268)),s=a(n(74824)),i=n(93048),u=a(n(72672)),d=a(n(3308)),m=n(97196),p=a(n(86896));function f(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(f=function(e){return e?n:t})(e)}var b=s.default.bind(p.default),_={example:c.default.element,exampleSrc:c.default.element,exampleCssSrc:c.default.element,title:c.default.string,description:c.default.node,isExpanded:c.default.bool},y=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","true")},g=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","false")},v=function(e){var t=e.example,n=e.exampleSrc,a=e.exampleCssSrc,l=e.title,c=e.description,s=e.isExpanded,p=(0,r.useState)(s),f=(0,o.default)(p,2),_=f[0],v=f[1],h=(0,r.useState)(!1),w=(0,o.default)(h,2),C=w[0],x=w[1],E=r.default.useContext(i.ThemeContext),O=void 0!==a,N=function(){x(!C),_&&v(!_)},T=function(){v(!_),C&&x(!C)},S=function(e,t){e.nativeEvent.keyCode!==m.KEY_SPACE&&e.nativeEvent.keyCode!==m.KEY_RETURN||(e.preventDefault(),t())};return r.default.createElement("div",{className:b("template",E.className)},r.default.createElement("div",{className:b("header")},l&&r.default.createElement("h2",{className:b("title")},l)),r.default.createElement("div",{className:b("content")},c&&r.default.createElement("div",{className:b("description")},c),t),r.default.createElement("div",{className:b("footer")},n?r.default.createElement("div",{className:b("button-container")},O&&r.default.createElement("button",{type:"button",className:b("css-toggle","item",{"is-selected":C}),onClick:N,onKeyDown:function(e){return S(e,N)},onBlur:y,onMouseDown:g,tabIndex:0,"data-focus-styles-enabled":!0},r.default.createElement(u.default,{className:b("chevron")}),r.default.createElement("span",null,"CSS"),r.default.createElement(d.default,{className:b("chevron")})),r.default.createElement("button",{type:"button",className:b("code-toggle","item",{"is-selected":_}),onClick:T,onKeyDown:function(e){return S(e,T)},onBlur:y,onMouseDown:g,tabIndex:0,"data-focus-styles-enabled":!0},r.default.createElement(u.default,{className:b("chevron")}),r.default.createElement("span",null,"Code"),r.default.createElement(d.default,{className:b("chevron")}))):null,r.default.createElement("div",null,C&&r.default.createElement("div",{className:b("css")},a),_&&r.default.createElement("div",{className:b("code")},n))))};v.propTypes=_,v.defaultProps={isExpanded:!1};t.c=v},11936:function(e,t,n){var a=n(22411),l=n(59848);t.c=void 0;var o=a(n(2676)),r=a(n(25724)),c=a(n(97936)),s=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=l(e)&&"function"!=typeof e)return{default:e};var n=u(t);if(n&&n.has(e))return n.get(e);var a={__proto__:null},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var r in e)if("default"!==r&&Object.prototype.hasOwnProperty.call(e,r)){var c=o?Object.getOwnPropertyDescriptor(e,r):null;c&&(c.get||c.set)?Object.defineProperty(a,r,c):a[r]=e[r]}return a.default=e,n&&n.set(e,a),a}(n(11504)),i=a(n(14745));function u(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(u=function(e){return e?n:t})(e)}function d(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}var m=[{id:"Column-0",displayName:"Patient",sortIndicator:"ascending",isSelectable:!0},{id:"Column-1",displayName:"Location",isSelectable:!0},{id:"Column-2",displayName:"Illness Severity",isSelectable:!0},{id:"Column-3",displayName:"Visit"},{id:"Column-4",displayName:"Allergy"},{id:"Column-5",displayName:"Primary Contact"},{id:"Column-6",displayName:"Generic Order Counts"},{id:"Column-7",displayName:"Patient Age"},{id:"Column-8",displayName:"Medication History"},{id:"Column-9",displayName:"My Relationship"}],p=[{id:"1",cells:[{content:"Fleck, Arthur"},{content:"1007-MTN"},{content:"Unstable"},{content:"Inpatient, 2 months"},{content:""},{content:"Quinzell, Harleen"},{content:""},{isMasked:!0},{isMasked:!0},{content:"Admitting Physician"}]},{id:"2",cells:[{content:"Wayne, Bruce"},{content:"1007-MTN-DR"},{content:"Stable"},{content:"Outpatient, 2 days"},{content:"Phytochemicals"},{content:"Grayson, Richard"},{content:""},{content:""},{isMasked:!0},{content:"Admitting Physician"}]}];t.c=function(){var e=(0,s.useState)(m),t=(0,c.default)(e,2),n=t[0],a=t[1],l=(0,s.useState)(p),u=(0,c.default)(l,2),f=u[0],b=u[1],_=(0,s.useCallback)((function(e){var t=(0,r.default)(n).map((function(t){var n=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?d(Object(n),!0).forEach((function(t){(0,o.default)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):d(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},t);return e===t.id?n.sortIndicator="ascending"===t.sortIndicator?"descending":"ascending":n.sortIndicator=void 0,n})),l=(0,r.default)(f),c=t.findIndex((function(t){return t.id===e}));if(c>-1){var s=t[c].sortIndicator;l.sort((function(e,t){var n=e.cells[c].content||"",a=t.cells[c].content||"";return"ascending"===s?n.localeCompare(a):a.localeCompare(n)}))}a(t),b(l)}),[n,f]);return s.default.createElement(i.default,{id:"my-table-id",overflowColumns:n,rows:f,onColumnSelect:_,ariaLabel:"Sortable Table"})}},78656:function(e,t,n){n.r(t),n.d(t,{default:function(){return g}});var a=n(11504),l=n(69788),o=(n(60556),n(11936)),r=["components"];function c(){return c=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},c.apply(this,arguments)}function s(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var i={};function u(e){var t=e.components,n=s(e,r);return(0,l.mdx)("wrapper",c({},i,n,{components:t,mdxType:"MDXLayout"}),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React, { useCallback, useState } from 'react';\nimport Table from 'terra-table';\n\nconst tableData = {\n  cols: [\n    {\n      id: 'Column-0', displayName: 'Patient', sortIndicator: 'ascending', isSelectable: true,\n    },\n    {\n      id: 'Column-1', displayName: 'Location', isSelectable: true,\n    },\n    { id: 'Column-2', displayName: 'Illness Severity', isSelectable: true },\n    { id: 'Column-3', displayName: 'Visit' },\n    { id: 'Column-4', displayName: 'Allergy' },\n    { id: 'Column-5', displayName: 'Primary Contact' },\n    { id: 'Column-6', displayName: 'Generic Order Counts' },\n    { id: 'Column-7', displayName: 'Patient Age' },\n    { id: 'Column-8', displayName: 'Medication History' },\n    { id: 'Column-9', displayName: 'My Relationship' },\n  ],\n  rows: [\n    {\n      id: '1',\n      cells: [\n        { content: 'Fleck, Arthur' },\n        { content: '1007-MTN' },\n        { content: 'Unstable' },\n        { content: 'Inpatient, 2 months' },\n        { content: '' },\n        { content: 'Quinzell, Harleen' },\n        { content: '' },\n        { isMasked: true },\n        { isMasked: true },\n        { content: 'Admitting Physician' },\n      ],\n    },\n    {\n      id: '2',\n      cells: [\n        { content: 'Wayne, Bruce' },\n        { content: '1007-MTN-DR' },\n        { content: 'Stable' },\n        { content: 'Outpatient, 2 days' },\n        { content: 'Phytochemicals' },\n        { content: 'Grayson, Richard' },\n        { content: '' },\n        { content: '' },\n        { isMasked: true },\n        { content: 'Admitting Physician' },\n      ],\n    },\n  ],\n};\n\nconst SortableTable = () => {\n  const [tableColumns, setTableColumns] = useState(tableData.cols);\n  const [tableRows, setTableRows] = useState(tableData.rows);\n  const handleColumnSelect = useCallback((columnId) => {\n    const newColumns = [...tableColumns].map((col) => {\n      const newCol = { ...col };\n      if (columnId === col.id) {\n        newCol.sortIndicator = col.sortIndicator === 'ascending' ? 'descending' : 'ascending';\n      } else {\n        newCol.sortIndicator = undefined;\n      }\n      return newCol;\n    });\n\n    const newRows = [...tableRows];\n\n    const columnIndex = newColumns.findIndex(col => col.id === columnId);\n    if (columnIndex > -1) {\n      const { sortIndicator } = newColumns[columnIndex];\n      newRows.sort((rowA, rowB) => {\n        const firstRowContent = rowA.cells[columnIndex].content || '';\n        const secondRowContent = rowB.cells[columnIndex].content || '';\n\n        if (sortIndicator === 'ascending') {\n          return firstRowContent.localeCompare(secondRowContent);\n        }\n        return secondRowContent.localeCompare(firstRowContent);\n      });\n    }\n\n    setTableColumns(newColumns);\n    setTableRows(newRows);\n  }, [tableColumns, tableRows]);\n\n  return (\n    <Table\n      id=\"my-table-id\"\n      overflowColumns={tableColumns}\n      rows={tableRows}\n      onColumnSelect={handleColumnSelect}\n      ariaLabel=\"Sortable Table\"\n    />\n  );\n};\n\nexport default SortableTable;\n\n")))}u.isMDXComponent=!0;var d=n(33792),m=function(e){var t=e.title,n=e.description,l=e.isExpanded;return a.createElement(d.c,{title:t||"Sortable Table",description:n,example:a.createElement(o.c,null),exampleSrc:a.createElement(u,null),isExpanded:l})},p=["components"];function f(){return f=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},f.apply(this,arguments)}function b(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var _={},y="wrapper";function g(e){var t=e.components,n=b(e,p);return(0,l.mdx)(y,f({},_,n,{components:t,mdxType:"MDXLayout"}),(0,l.mdx)("h1",{id:"sortable-table"},"Sortable Table"),(0,l.mdx)("h3",{id:"description"},"Description"),(0,l.mdx)("p",null,"This example demonstrates a ",(0,l.mdx)("a",{parentName:"p",href:"/terra-ui/components/cerner-terra-framework-docs/table/about"},"Table")," component with sortable information.\nThe Table component does not have logic to perform column sorting because knowledge about the column data business logic would be required.\nConsumers can enable sorting capabilities by listening to the onColumnSelect callback and properly updating the source data of the table."),(0,l.mdx)("h3",{id:"required-properties"},"Required Properties"),(0,l.mdx)("p",null,(0,l.mdx)("strong",{parentName:"p"},"onColumnSelect"),": When the user selects a column, this callback is called with the columnId of the selected column."),(0,l.mdx)(m,{mdxType:"SortableTable"}))}g.isMDXComponent=!0},60556:function(e,t,n){n.d(t,{k:function(){return o}});var a=n(11504),l=n(11416),o=function(e){var t=e.url;return a.createElement(l.c,{src:"https://github.com/cerner/terra-framework/tree/main/packages/terra-table",name:"terra-table",version:"5.5.0",url:t})}},58112:function(e,t,n){n.r(t),t.default={badge:"Badges-module__badge___vex-+","badge-container":"Badges-module__badge-container___B13Mv","badge-name":"Badges-module__badge-name___jkN0m","badge-version":"Badges-module__badge-version___agZ+P"}},86896:function(e,t,n){n.r(t),t.default={"clinical-lowlight-theme":"ExampleTemplate-module__clinical-lowlight-theme___rBbtD","orion-fusion-theme":"ExampleTemplate-module__orion-fusion-theme___GzA23",template:"ExampleTemplate-module__template___a4uPk",header:"ExampleTemplate-module__header___iFXV3",content:"ExampleTemplate-module__content___48m4Q",description:"ExampleTemplate-module__description___NwBJo",footer:"ExampleTemplate-module__footer___GpSoG","button-container":"ExampleTemplate-module__button-container___rAD11",css:"ExampleTemplate-module__css___+jtk1",code:"ExampleTemplate-module__code___7rC6C","css-toggle":"ExampleTemplate-module__css-toggle___chHK7","code-toggle":"ExampleTemplate-module__code-toggle___TGlE-","is-selected":"ExampleTemplate-module__is-selected___0BYwS",item:"ExampleTemplate-module__item___8FTQq",chevron:"ExampleTemplate-module__chevron___VbY7N",title:"ExampleTemplate-module__title___r+nbJ","dynamic-content":"ExampleTemplate-module__dynamic-content___k+1H7"}}}]);