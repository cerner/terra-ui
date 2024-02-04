"use strict";(self.webpackChunkterra_ui=self.webpackChunkterra_ui||[]).push([[50864],{33792:function(e,t,n){var l=n(22411),a=n(59848);t.c=void 0;var o=l(n(97936)),r=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=a(e)&&"function"!=typeof e)return{default:e};var n=f(t);if(n&&n.has(e))return n.get(e);var l={__proto__:null},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var r in e)if("default"!==r&&Object.prototype.hasOwnProperty.call(e,r)){var c=o?Object.getOwnPropertyDescriptor(e,r):null;c&&(c.get||c.set)?Object.defineProperty(l,r,c):l[r]=e[r]}return l.default=e,n&&n.set(e,l),l}(n(11504)),c=l(n(3268)),i=l(n(74824)),s=n(93048),d=l(n(72672)),u=l(n(3308)),m=n(97196),p=l(n(86896));function f(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(f=function(e){return e?n:t})(e)}var h=i.default.bind(p.default),y={example:c.default.element,exampleSrc:c.default.element,exampleCssSrc:c.default.element,title:c.default.string,description:c.default.node,isExpanded:c.default.bool},w=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","true")},b=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","false")},_=function(e){var t=e.example,n=e.exampleSrc,l=e.exampleCssSrc,a=e.title,c=e.description,i=e.isExpanded,p=(0,r.useState)(i),f=(0,o.default)(p,2),y=f[0],_=f[1],g=(0,r.useState)(!1),v=(0,o.default)(g,2),x=v[0],C=v[1],k=r.default.useContext(s.ThemeContext),D=void 0!==l,S=function(){C(!x),y&&_(!y)},E=function(){_(!y),x&&C(!x)},N=function(e,t){e.nativeEvent.keyCode!==m.KEY_SPACE&&e.nativeEvent.keyCode!==m.KEY_RETURN||(e.preventDefault(),t())};return r.default.createElement("div",{className:h("template",k.className)},r.default.createElement("div",{className:h("header")},a&&r.default.createElement("h2",{className:h("title")},a)),r.default.createElement("div",{className:h("content")},c&&r.default.createElement("div",{className:h("description")},c),t),r.default.createElement("div",{className:h("footer")},n?r.default.createElement("div",{className:h("button-container")},D&&r.default.createElement("button",{type:"button",className:h("css-toggle","item",{"is-selected":x}),onClick:S,onKeyDown:function(e){return N(e,S)},onBlur:w,onMouseDown:b,tabIndex:0,"data-focus-styles-enabled":!0},r.default.createElement(d.default,{className:h("chevron")}),r.default.createElement("span",null,"CSS"),r.default.createElement(u.default,{className:h("chevron")})),r.default.createElement("button",{type:"button",className:h("code-toggle","item",{"is-selected":y}),onClick:E,onKeyDown:function(e){return N(e,E)},onBlur:w,onMouseDown:b,tabIndex:0,"data-focus-styles-enabled":!0},r.default.createElement(d.default,{className:h("chevron")}),r.default.createElement("span",null,"Code"),r.default.createElement(u.default,{className:h("chevron")}))):null,r.default.createElement("div",null,x&&r.default.createElement("div",{className:h("css")},l),y&&r.default.createElement("div",{className:h("code")},n))))};_.propTypes=y,_.defaultProps={isExpanded:!1};t.c=_},94576:function(e,t,n){var l=n(22411),a=n(59848);t.c=void 0;var o=l(n(25724)),r=l(n(97936)),c=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=a(e)&&"function"!=typeof e)return{default:e};var n=u(t);if(n&&n.has(e))return n.get(e);var l={__proto__:null},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var r in e)if("default"!==r&&Object.prototype.hasOwnProperty.call(e,r)){var c=o?Object.getOwnPropertyDescriptor(e,r):null;c&&(c.get||c.set)?Object.defineProperty(l,r,c):l[r]=e[r]}return l.default=e,n&&n.set(e,l),l}(n(11504)),i=n(76920),s=n(14147),d=l(n(65152));function u(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(u=function(e){return e?n:t})(e)}var m=[{id:"Column-0",displayName:"Patient"},{id:"Column-1",displayName:"Location"},{id:"Column-2",displayName:"Illness Severity"},{id:"Column-3",displayName:"Visit"},{id:"Column-4",displayName:"Allergy"},{id:"Column-5",displayName:"Primary Contact"},{id:"Column-6",displayName:"Generic Order Counts"},{id:"Column-7",displayName:"Patient Age"},{id:"Column-8",displayName:"Medication History"},{id:"Column-9",displayName:"My Relationship"},{id:"Column-10",displayName:"Not Selectable",isSelectable:!1}],p=[{id:"1",ariaLabel:"First Row",cells:[{content:"Fleck, Arthur"},{content:"1007-MTN"},{content:"Unstable"},{content:"Inpatient, 2 months"},{content:""},{content:"Quinzell, Harleen"},{content:""},{isMasked:!0},{isMasked:!0},{content:"Admitting Physician"},{content:"",isSelectable:!1}]},{id:"2",ariaLabel:"Second Row",cells:[{content:"Wayne, Bruce"},{content:"1007-MTN-DR"},{content:"Stable"},{content:"Outpatient, 2 days"},{content:"Phytochemicals"},{content:"Grayson, Richard"},{content:""},{content:""},{isMasked:!0},{content:"Admitting Physician"},{content:"",isSelectable:!1}]}];t.c=function(){var e=m,t=p,n=c.default.useContext(i.DisclosureManagerContext),l=(0,c.useState)(t),a=(0,r.default)(l,2),u=a[0],f=a[1],h=(0,c.useCallback)((function(t,l){if(t&&l){for(var a=u.findIndex((function(e){return e.id===t})),r=e.findIndex((function(e){return e.id===l})),i=(0,o.default)(u),s=0;s<u.length;s+=1)for(var m=0;m<u[s].cells.length;m+=1){var p=u[s].cells[m];!p.isSelected||s===a&&m===r||(p.isSelected=!1)}i[a].cells[r].isSelected=!u[a].cells[r].isSelected,f(i),n.disclose({preferredType:"panel",size:"tiny",content:{component:c.default.createElement(d.default,{columnHeader:e[r].displayName,rowHeader:u[a].cells[0].content,content:u[a].cells[r].content,name:e[r].displayName})}})}}),[e,n,u]),y=(0,c.useCallback)((function(){for(var e=(0,o.default)(u),t=0;t<u.length;t+=1)for(var n=0;n<u[t].cells.length;n+=1)e[t].cells[n].isSelected=!1;f(e)}),[u]);return c.default.createElement(s.WorklistDataGrid,{id:"worklist-data-grid-row-selection",overflowColumns:e,rows:u,rowHeaderIndex:0,rowHeight:"50px",defaultColumnWidth:100,columnHeaderHeight:"100px",ariaLabel:"Worklist Data Grid With Cell Selection",onCellSelect:h,onClearSelectedCells:y})}},65152:function(e,t,n){var l=n(22411);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=l(n(94064)),o=l(n(66024)),r=l(n(96284)),c=l(n(63532)),i=l(n(71559)),s=l(n(54216)),d=l(n(11504)),u=l(n(3268)),m=l(n(74824)),p=l(n(58848)),f=l(n(87468)),h=l(n(92464)),y=n(76920),w=l(n(40996));function b(e,t,n){return t=(0,c.default)(t),(0,r.default)(e,_()?Reflect.construct(t,n||[],(0,c.default)(e).constructor):t.apply(e,n))}function _(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(_=function(){return!!e})()}var g=m.default.bind(w.default),v={name:u.default.string,content:u.default.string,rowHeader:u.default.string,columnHeader:u.default.string,disclosureManager:y.disclosureManagerShape},x=function(e){function t(e){var n;return(0,a.default)(this,t),(n=b(this,t,[e])).checkLockState=n.checkLockState.bind((0,i.default)(n)),n.state={text:void 0},n}return(0,s.default)(t,e),(0,o.default)(t,[{key:"componentDidMount",value:function(){var e=this.props.disclosureManager;e&&e.registerDismissCheck&&e.registerDismissCheck(this.checkLockState)}},{key:"checkLockState",value:function(){var e=this;return this.state.text&&this.state.text.length?new Promise((function(t,n){confirm("".concat(e.props.name," has unsaved changes that will be lost. Do you wish to continue?"))?t():n()})):Promise.resolve()}},{key:"render",value:function(){var e=this.props,t=e.disclosureManager,n=e.name,l=e.content,a=e.rowHeader,o=e.columnHeader;return d.default.createElement(f.default,{fill:!0,header:d.default.createElement(h.default,{title:"Disclosure - ".concat(n),onClose:t.closeDisclosure})},d.default.createElement("div",{className:g("content-wrapper")},d.default.createElement("h3",null,"".concat(a," - ").concat(o)),d.default.createElement("p",null,l),d.default.createElement(p.default,{text:"Dismiss",onClick:function(){t.dismiss().catch((function(){console.log("Dismiss failed. A lock must be in place.")}))}})))}}]),t}(d.default.Component);x.propTypes=v,x.defaultProps={name:"Disclosure Component"};var C=(0,y.withDisclosureManager)(x);t.default=C},39728:function(e,t,n){n.r(t),n.d(t,{default:function(){return b}});var l=n(11504),a=n(69788),o=n(94576),r=["components"];function c(){return c=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var l in n)Object.prototype.hasOwnProperty.call(n,l)&&(e[l]=n[l])}return e},c.apply(this,arguments)}function i(e,t){if(null==e)return{};var n,l,a=function(e,t){if(null==e)return{};var n,l,a={},o=Object.keys(e);for(l=0;l<o.length;l++)n=o[l],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(l=0;l<o.length;l++)n=o[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s={};function d(e){var t=e.components,n=i(e,r);return(0,a.mdx)("wrapper",c({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React, { useState, useCallback } from 'react';\nimport { DisclosureManagerContext } from 'terra-disclosure-manager';\nimport { WorklistDataGrid } from 'terra-data-grid';\nimport DisclosureComponent from './disclosure/DisclosureComponent';\n\nconst gridDataJSON = {\n  cols: [\n    { id: 'Column-0', displayName: 'Patient' },\n    { id: 'Column-1', displayName: 'Location' },\n    { id: 'Column-2', displayName: 'Illness Severity' },\n    { id: 'Column-3', displayName: 'Visit' },\n    { id: 'Column-4', displayName: 'Allergy' },\n    { id: 'Column-5', displayName: 'Primary Contact' },\n    { id: 'Column-6', displayName: 'Generic Order Counts' },\n    { id: 'Column-7', displayName: 'Patient Age' },\n    { id: 'Column-8', displayName: 'Medication History' },\n    { id: 'Column-9', displayName: 'My Relationship' },\n    { id: 'Column-10', displayName: 'Not Selectable', isSelectable: false },\n  ],\n  rows: [\n    {\n      id: '1',\n      ariaLabel: 'First Row',\n      cells: [\n        { content: 'Fleck, Arthur' },\n        { content: '1007-MTN' },\n        { content: 'Unstable' },\n        { content: 'Inpatient, 2 months' },\n        { content: '' },\n        { content: 'Quinzell, Harleen' },\n        { content: '' },\n        { isMasked: true }, // This cell's content will be masked\n        { isMasked: true },\n        { content: 'Admitting Physician' },\n        { content: '', isSelectable: false }, // This cell cannot be selected via click but can receive focus when navigating through keyboard\n      ],\n    },\n    {\n      id: '2',\n      ariaLabel: 'Second Row',\n      cells: [\n        { content: 'Wayne, Bruce' },\n        { content: '1007-MTN-DR' },\n        { content: 'Stable' },\n        { content: 'Outpatient, 2 days' },\n        { content: 'Phytochemicals' },\n        { content: 'Grayson, Richard' },\n        { content: '' },\n        { content: '' },\n        { isMasked: true },\n        { content: 'Admitting Physician' },\n        { content: '', isSelectable: false },\n      ],\n    },\n  ],\n};\n\nconst CellSelection = () => {\n  const rowHeaderIndex = 0;\n  const { cols, rows } = gridDataJSON;\n  const disclosureManager = React.useContext(DisclosureManagerContext);\n\n  const [rowData, setRowData] = useState(rows);\n\n  const onCellSelect = useCallback((rowId, columnId) => {\n    if (rowId && columnId) {\n      const rowIndex = rowData.findIndex(e => e.id === rowId);\n      const columnIndex = cols.findIndex(e => e.id === columnId);\n\n      // Remove current selections as the Worklist Data Grid can have only one selected cell at any instance.\n      const newRowData = [...rowData];\n      for (let row = 0; row < rowData.length; row += 1) {\n        for (let cell = 0; cell < rowData[row].cells.length; cell += 1) {\n          const currentCell = rowData[row].cells[cell];\n          if (currentCell.isSelected && !(row === rowIndex && cell === columnIndex)) {\n            currentCell.isSelected = false;\n          }\n        }\n      }\n\n      // Toggle selection state of selected cell\n      newRowData[rowIndex].cells[columnIndex].isSelected = !rowData[rowIndex].cells[columnIndex].isSelected;\n      setRowData(newRowData);\n\n      // Example illustrates implementation of a Disclosure Manager on selection of a cell.\n      disclosureManager.disclose({\n        preferredType: 'panel',\n        size: 'tiny',\n        content: {\n          component: (\n            <DisclosureComponent\n              columnHeader={cols[columnIndex].displayName}\n              rowHeader={rowData[rowIndex].cells[0].content}\n              content={rowData[rowIndex].cells[columnIndex].content}\n              name={cols[columnIndex].displayName}\n            />\n          ),\n        },\n      });\n    }\n  }, [cols, disclosureManager, rowData]);\n\n  const onClearSelectedCells = useCallback(() => {\n    // Remove current selections\n    const newRowData = [...rowData];\n    for (let row = 0; row < rowData.length; row += 1) {\n      for (let cell = 0; cell < rowData[row].cells.length; cell += 1) {\n        newRowData[row].cells[cell].isSelected = false;\n      }\n    }\n\n    setRowData(newRowData);\n  }, [rowData]);\n\n  return (\n    <WorklistDataGrid\n      id=\"worklist-data-grid-row-selection\"\n      overflowColumns={cols} // Column Headers\n      rows={rowData} // Rows with cell data\n      rowHeaderIndex={rowHeaderIndex}\n      rowHeight=\"50px\"\n      defaultColumnWidth={100}\n      columnHeaderHeight=\"100px\"\n      ariaLabel=\"Worklist Data Grid With Cell Selection\"\n      onCellSelect={onCellSelect} // For cell selection, a callback function must be provided so that the Worklist Data Grid can invoke it when a cell is selective.\n      onClearSelectedCells={onClearSelectedCells} // To clear the selection of a cell, a callback function must be provided so that the Worklist Data Grid can execute it to clear the selection.\n    />\n  );\n};\n\nexport default CellSelection;\n\n")))}d.isMDXComponent=!0;var u=n(33792),m=function(e){var t=e.title,n=e.description,a=e.isExpanded;return l.createElement(u.c,{title:t||"Cell Selection",description:n,example:l.createElement(o.c,null),exampleSrc:l.createElement(d,null),isExpanded:a})},p=["components"];function f(){return f=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var l in n)Object.prototype.hasOwnProperty.call(n,l)&&(e[l]=n[l])}return e},f.apply(this,arguments)}function h(e,t){if(null==e)return{};var n,l,a=function(e,t){if(null==e)return{};var n,l,a={},o=Object.keys(e);for(l=0;l<o.length;l++)n=o[l],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(l=0;l<o.length;l++)n=o[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var y={},w="wrapper";function b(e){var t=e.components,n=h(e,p);return(0,a.mdx)(w,f({},y,n,{components:t,mdxType:"MDXLayout"}),(0,a.mdx)("h1",{id:"cell-selection"},"Cell Selection"),(0,a.mdx)("h3",{id:"description"},"Description"),(0,a.mdx)("p",null,"This example demonstrates a ",(0,a.mdx)("a",{parentName:"p",href:"/terra-ui/components/cerner-terra-framework-docs/data-grid/worklist-data-grid/about"},"Worklist Data Grid")," that has support for cell selection.\nA cell is selected by clicking on the cell or pressing the Spacebar on the focused\ncell. Only cells that are selectable and not masked can be selected.\nA cell is selectable by default."),(0,a.mdx)("h3",{id:"properties-required"},"Properties required"),(0,a.mdx)("ul",null,(0,a.mdx)("li",{parentName:"ul"},"The ",(0,a.mdx)("strong",{parentName:"li"},"onCellSelect")," callback prop: When the user selects a cell, this callback will be called with the rowId and columnId of the selected cell.\nIn this example, the information is used to look up the matching cell information in the input data and disclose additional information for that cell.\nThe ",(0,a.mdx)("inlineCode",{parentName:"li"},"selected")," attribute of the matching cell in the row data is toggled to be true. But an end user may choose to do nothing when the cell is already selected.\nSince only one cell may be selected, any previous cell selection is cleared before a new cell is selected.")),(0,a.mdx)("ul",null,(0,a.mdx)("li",{parentName:"ul"},"The ",(0,a.mdx)("strong",{parentName:"li"},"onClearSelectedCells")," callback prop: When the user presses Escape, this callback gets called. In this example, the selected attribute of any selected cell is set to false and the Worklist Data Grid is re-rendered.")),(0,a.mdx)(m,{title:"",mdxType:"CellSelection"}))}b.isMDXComponent=!0},86896:function(e,t,n){n.r(t),t.default={"clinical-lowlight-theme":"ExampleTemplate-module__clinical-lowlight-theme___rBbtD","orion-fusion-theme":"ExampleTemplate-module__orion-fusion-theme___GzA23",template:"ExampleTemplate-module__template___a4uPk",header:"ExampleTemplate-module__header___iFXV3",content:"ExampleTemplate-module__content___48m4Q",description:"ExampleTemplate-module__description___NwBJo",footer:"ExampleTemplate-module__footer___GpSoG","button-container":"ExampleTemplate-module__button-container___rAD11",css:"ExampleTemplate-module__css___+jtk1",code:"ExampleTemplate-module__code___7rC6C","css-toggle":"ExampleTemplate-module__css-toggle___chHK7","code-toggle":"ExampleTemplate-module__code-toggle___TGlE-","is-selected":"ExampleTemplate-module__is-selected___0BYwS",item:"ExampleTemplate-module__item___8FTQq",chevron:"ExampleTemplate-module__chevron___VbY7N",title:"ExampleTemplate-module__title___r+nbJ","dynamic-content":"ExampleTemplate-module__dynamic-content___k+1H7"}},40996:function(e,t,n){n.r(t),t.default={"content-wrapper":"DisclosureComponent-module__content-wrapper___6nT5J"}}}]);