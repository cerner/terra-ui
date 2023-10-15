"use strict";(self.webpackChunkterra_ui=self.webpackChunkterra_ui||[]).push([[88759,19260],{28257:function(e,t,n){var l=n(64836),a=n(18698);t.Z=void 0;var o=l(n(27424)),r=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=a(e)&&"function"!=typeof e)return{default:e};var n=u(t);if(n&&n.has(e))return n.get(e);var l={__proto__:null},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var r in e)if("default"!==r&&Object.prototype.hasOwnProperty.call(e,r)){var i=o?Object.getOwnPropertyDescriptor(e,r):null;i&&(i.get||i.set)?Object.defineProperty(l,r,i):l[r]=e[r]}return l.default=e,n&&n.set(e,l),l}(n(67294)),i=n(57710),c=l(n(84058));function u(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(u=function(e){return e?n:t})(e)}t.Z=function(){var e=(0,r.useState)(!1),t=(0,o.default)(e,2),n=t[0],l=t[1],a=r.default.createElement("button",{type:"button","aria-label":"Alert",onClick:function(){l(!0)}},"Alert"),u=r.default.createElement("input",{type:"text","aria-label":"Text Input",style:{width:"100px",height:"25px",display:"inline"}}),s=r.default.createElement("a",{href:"https://www.oracle.com/","aria-label":"Visit Oracle"},"Visit Oracle"),d=r.default.createElement("textarea",{name:"textArea","aria-label":"Text Area",rows:"1",cols:"15"}),p=r.default.createElement("select",{name:"specialties",id:"specialties","aria-label":"Select Specialty"},r.default.createElement("option",{value:"ambulatory"},"Ambulatory"),r.default.createElement("option",{value:"cardiology"},"Cardiology"),r.default.createElement("option",{value:"radiology"},"Radiology"),r.default.createElement("option",{value:"neurology"},"Neurology")),f={cols:[{id:"Column-0",displayName:"Patient"},{id:"Column-1",displayName:"Column 1"},{id:"Column-2",displayName:"Column 2"},{id:"Column-3",displayName:"Column 3"}],rows:[{id:"1",cells:[{content:"Fleck, Arthur"},{content:r.default.createElement(r.default.Fragment,null,a,r.default.createElement("div",null,"Non-Focusable Text"))},{content:u},{content:s}]},{id:"2",cells:[{content:"Wayne, Bruce"},{content:r.default.createElement("div",null,a,u)},{content:p},{content:d}]}]},m=f.cols,b=f.rows;return r.default.createElement(r.default.Fragment,null,n&&r.default.createElement(c.default,{variant:"hazard-low",dialogTitle:"Button from Focusable Cell",startMessage:"Button Selected",acceptAction:{text:"OK",onClick:function(){l(!1)}}}),r.default.createElement(i.WorklistDataGrid,{id:"default-terra-worklist-data-grid-focusable-cell",overflowColumns:m,defaultColumnWidth:170,rows:b,rowHeaderIndex:0,rowHeight:"50px",ariaLabel:"Worklist Data Grid"}))}},61863:function(e,t,n){n.r(t),n.d(t,{default:function(){return x}});var l=n(67294),a=n(81254),o=n(28257),r=["components"];function i(){return i=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var l in n)Object.prototype.hasOwnProperty.call(n,l)&&(e[l]=n[l])}return e},i.apply(this,arguments)}function c(e,t){if(null==e)return{};var n,l,a=function(e,t){if(null==e)return{};var n,l,a={},o=Object.keys(e);for(l=0;l<o.length;l++)n=o[l],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(l=0;l<o.length;l++)n=o[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u={};function s(e){var t=e.components,n=c(e,r);return(0,a.mdx)("wrapper",i({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-jsx"},'import React, { useState } from \'react\';\nimport { WorklistDataGrid } from \'terra-data-grid\';\nimport NotificationDialog from \'terra-notification-dialog\';\n\nconst WorklistDataGridFocusableCell = () => {\n  const rowHeaderIndex = 0;\n\n  const [isOpen, setIsOpen] = useState(false);\n\n  const handleCloseModal = () => {\n    setIsOpen(false);\n  };\n\n  const handleButtonOpenModal = () => {\n    setIsOpen(true);\n  };\n\n  const buttonCell = <button type="button" aria-label="Alert" onClick={handleButtonOpenModal}>Alert</button>;\n  // eslint-disable-next-line react/forbid-dom-props\n  const inputCell = <input type="text" aria-label="Text Input" style={{ width: \'100px\', height: \'25px\', display: \'inline\' }} />;\n  const anchorCell = <a href="https://www.oracle.com/" aria-label="Visit Oracle">Visit Oracle</a>;\n  const textAreaCell = <textarea name="textArea" aria-label="Text Area" rows="1" cols="15" />;\n  const selectCell = (\n    <select name="specialties" id="specialties" aria-label="Select Specialty">\n      <option value="ambulatory">Ambulatory</option>\n      <option value="cardiology">Cardiology</option>\n      <option value="radiology">Radiology</option>\n      <option value="neurology">Neurology</option>\n    </select>\n  );\n\n  const gridDataJSON = {\n    cols: [\n      { id: \'Column-0\', displayName: \'Patient\' },\n      { id: \'Column-1\', displayName: \'Column 1\' },\n      { id: \'Column-2\', displayName: \'Column 2\' },\n      { id: \'Column-3\', displayName: \'Column 3\' },\n    ],\n    rows: [\n      {\n        id: \'1\',\n        cells: [\n          { content: \'Fleck, Arthur\' },\n          {\n            content: <>\n              {buttonCell}\n              <div>Non-Focusable Text</div>\n              {/* eslint-disable-next-line react/jsx-closing-tag-location */}\n            </>,\n          },\n          { content: inputCell },\n          { content: anchorCell },\n        ],\n      },\n      {\n        id: \'2\',\n        cells: [\n          { content: \'Wayne, Bruce\' },\n          {\n            content: (<div>\n              {buttonCell}\n              {inputCell}\n              {/* eslint-disable-next-line react/jsx-closing-tag-location */}\n            </div>),\n          },\n          { content: selectCell },\n          { content: textAreaCell },\n        ],\n      },\n    ],\n  };\n\n  const { cols, rows } = gridDataJSON;\n\n  return (\n    <>\n      {isOpen && (\n      <NotificationDialog\n        variant="hazard-low"\n        dialogTitle="Button from Focusable Cell"\n        startMessage="Button Selected"\n        acceptAction={{\n          text: \'OK\',\n          onClick: handleCloseModal,\n        }}\n      />\n      )}\n      <WorklistDataGrid\n        id="default-terra-worklist-data-grid-focusable-cell"\n        overflowColumns={cols}\n        defaultColumnWidth={170}\n        rows={rows}\n        rowHeaderIndex={rowHeaderIndex}\n        rowHeight="50px"\n        ariaLabel="Worklist Data Grid"\n      />\n    </>\n  );\n};\n\nexport default WorklistDataGridFocusableCell;\n\n')))}s.isMDXComponent=!0;var d=n(49271),p=function(e){var t=e.title,n=e.description,a=e.isExpanded;return l.createElement(d.Z,{title:t||"Worklist Data Grid Focusable Cell",description:n,example:l.createElement(o.Z,null),exampleSrc:l.createElement(s,null),isExpanded:a})},f=["components"];function m(){return m=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var l in n)Object.prototype.hasOwnProperty.call(n,l)&&(e[l]=n[l])}return e},m.apply(this,arguments)}function b(e,t){if(null==e)return{};var n,l,a=function(e,t){if(null==e)return{};var n,l,a={},o=Object.keys(e);for(l=0;l<o.length;l++)n=o[l],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(l=0;l<o.length;l++)n=o[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var y={},g="wrapper";function x(e){var t=e.components,n=b(e,f);return(0,a.mdx)(g,m({},y,n,{components:t,mdxType:"MDXLayout"}),(0,a.mdx)(p,{title:"Focusable elements within cells",mdxType:"WorklistDataGridFocusableCell"}))}x.isMDXComponent=!0}}]);