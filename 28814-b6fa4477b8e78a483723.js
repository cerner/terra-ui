"use strict";(self.webpackChunkterra_ui=self.webpackChunkterra_ui||[]).push([[28814],{40996:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=u(n(67294)),r=u(n(45697)),a=u(n(19845)),o=u(n(50026)),i=u(n(66983)),c=["children"];function u(e){return e&&e.__esModule?e:{default:e}}function s(){return s=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var l in n)Object.prototype.hasOwnProperty.call(n,l)&&(e[l]=n[l])}return e},s.apply(this,arguments)}function d(e,t){if(null==e)return{};var n,l,r=function(e,t){if(null==e)return{};var n,l,r={},a=Object.keys(e);for(l=0;l<a.length;l++)n=a[l],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(l=0;l<a.length;l++)n=a[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var m=a.default.bind(i.default),p=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","true")},f=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","false")},h={children:r.default.string},b=function(e){var t=e.children,n=d(e,c),r=l.default.useContext(o.default),i=(0,a.default)(m(["button",r.className]),n.className);return l.default.createElement("button",s({},n,{type:"button",className:i,onBlur:p,onMouseDown:f,"data-focus-styles-enabled":!0}),t)};b.propTypes=h;t.default=b},59278:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=c(n(67294)),r=c(n(45697)),a=c(n(19845)),o=c(n(50026)),i=c(n(30866));function c(e){return e&&e.__esModule?e:{default:e}}var u=a.default.bind(i.default),s={ariaLevel:r.default.oneOf(["2","3","4","5","6"]),children:r.default.node,variant:r.default.oneOf(["ux-recommendation","caution","deprecation","maintenance","important","not-supported"])},d=function(e){var t=e.ariaLevel,n=e.variant,r=e.children,a=l.default.useContext(o.default);return l.default.createElement("div",{className:u("notice",n,a.className)},l.default.createElement("div",{className:u("accessory"),"aria-hidden":"true",focusable:"false"}),l.default.createElement("div",{role:"heading",className:u("title"),"aria-level":t},l.default.createElement("span",null,function(e){return"ux-recommendation"===e?"UX Recommendation":"caution"===e?"Caution":"deprecation"===e?"Deprecation Notice":"maintenance"===e?"In Maintenance":"important"===e?"Important":"not-supported"===e?"Hazards for Incorrect Usage":"error"}(n))),l.default.createElement("div",{className:u("children")},function(e){return"not-supported"===e?l.default.createElement(l.default.Fragment,null,l.default.createElement("p",{className:u("paragraph")},"This component was designed and tested according to the documented implementation."),l.default.createElement("p",{className:u("paragraph")},"Using the component incorrectly:",l.default.createElement("ul",{className:u("list")},l.default.createElement("li",null,"will likely result in improper composition and create accessibility issues"),l.default.createElement("li",null,"may cause erratic or broken behaviors and styles"),l.default.createElement("li",null,l.default.createElement("strong",null,"will not be supported "),"or enhanced to allow for incorrect use")))):null}(n),l.default.Children.map(r,(function(e){return"string"==typeof e?l.default.createElement("p",null,e):e}))))};d.propTypes=s,d.defaultProps={ariaLevel:"2",variant:"important"};t.default=d},47306:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=s(n(67294)),r=s(n(45697)),a=s(n(93967)),o=s(n(19845)),i=s(n(50026)),c=s(n(42620)),u=["title"];function s(e){return e&&e.__esModule?e:{default:e}}function d(){return d=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var l in n)Object.prototype.hasOwnProperty.call(n,l)&&(e[l]=n[l])}return e},d.apply(this,arguments)}function m(e,t){if(null==e)return{};var n,l,r=function(e,t){if(null==e)return{};var n,l,r={},a=Object.keys(e);for(l=0;l<a.length;l++)n=a[l],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(l=0;l<a.length;l++)n=a[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=o.default.bind(c.default),f={title:r.default.string},h=function(e){var t=e.title,n=m(e,u),r=l.default.useContext(i.default),o=(0,a.default)(p(["placeholder",r.className]),n.className),c=p(["inner"]);return l.default.createElement("div",d({},n,{className:o}),l.default.createElement("div",{className:c},l.default.createElement("p",{className:p("title")},t)))};h.propTypes=f,h.defaultProps={title:""};t.default=h},34261:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"Button",{enumerable:!0,get:function(){return a.default}}),Object.defineProperty(t,"Notice",{enumerable:!0,get:function(){return l.default}}),Object.defineProperty(t,"Placeholder",{enumerable:!0,get:function(){return r.default}});var l=o(n(59278)),r=o(n(47306)),a=o(n(40996));function o(e){return e&&e.__esModule?e:{default:e}}},78564:function(e,t,n){var l=n(64836),r=n(18698);t.Z=void 0;var a=l(n(27424)),o=l(n(38416)),i=l(n(861)),c=f(n(67294)),u=f(n(88745)),s=n(34614),d=l(n(55281)),m=l(n(34171));function p(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(p=function(e){return e?n:t})(e)}function f(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=r(e)&&"function"!=typeof e)return{default:e};var n=p(t);if(n&&n.has(e))return n.get(e);var l={__proto__:null},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var i=a?Object.getOwnPropertyDescriptor(e,o):null;i&&(i.get||i.set)?Object.defineProperty(l,o,i):l[o]=e[o]}return l.default=e,n&&n.set(e,l),l}function h(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function b(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?h(Object(n),!0).forEach((function(t){(0,o.default)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):h(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var y=c.default.createElement(d.default,{text:"Learn more"}),_=c.default.createElement(m.default,{href:"https://www.cerner.com",text:"Documents"}),v=c.default.createElement(s.IconMultipleResultsNormal,{a11yLabel:"Results normal",height:"1.5em",width:"1.5em"}),w=c.default.createElement(s.IconMultipleResultsNotNormal,{a11yLabel:"Results not normal",height:"1.5em",width:"1.5em"}),x=c.default.createElement(s.IconMultipleResultsCritical,{a11yLabel:"Results critical",height:"1.5em",width:"1.5em"}),g=function(e,t,n){var l=t.findIndex((function(e){return(null==n?void 0:n.columnId)===e.id}));return(0,i.default)(e.map((function(e){return b(b({},e),{},{cells:(0,i.default)(e.cells.map((function(t,r){var a=!!((null==n?void 0:n.rowId)===e.id&&r===l)&&!t.isSelected;return b(b({},t),{},{isSelected:a})})))})})))},C=function(){var e=(0,c.useState)(!1),t=(0,a.default)(e,2),n=t[0],l=t[1],r=function(){return l(!n)};return n?c.default.createElement(d.default,{variant:"utility",text:"Unfavorite item",icon:c.default.createElement(s.IconFeatured,null),onClick:r}):c.default.createElement(d.default,{variant:"utility",text:"Favorite item",icon:c.default.createElement(s.IconFeaturedOff,null),onClick:r})},O=[{id:"row_1",cells:[{content:v},{content:"Discern Care Set (1)"},{content:y},{content:c.default.createElement(C,null)}]},{id:"row_2",cells:[{content:v},{content:"Initial observation Care/Day High Severity 99220 (2)"},{content:_},{content:c.default.createElement(C,null)}]},{id:"row_3",cells:[{content:w},{content:"Arterial Sheath Care (3)"},{content:_},{content:c.default.createElement(C,null)}]},{id:"row_4",cells:[{content:" "},{content:"Sbsq Observation Care/Day High Severity 99226 (4)"},{content:y},{content:c.default.createElement(C,null)}]},{id:"row_5",cells:[{content:x},{content:"Arterial Sheath Care (5)"},{content:_},{content:c.default.createElement(C,null)}]}],N=[{id:"Column-0",displayName:"Icon",width:"50px",align:u.alignTypes.CENTER,isSelectable:!0},{id:"Column-1",displayName:"Service name",width:"250px",flexGrow:!0,maximumWidth:"350px",minimumWidth:"100px",isSelectable:!0},{id:"Column-2",displayName:"Details",width:"150px",align:u.alignTypes.RIGHT,isSelectable:!0},{id:"Column-3",displayName:"Featured",width:"50px",align:u.alignTypes.CENTER,isSelectable:!0}];t.Z=function(){var e=(0,c.useState)(O),t=(0,a.default)(e,2),n=t[0],l=t[1],r=(0,c.useCallback)((function(e){var t=e.rowId,r=e.columnId;l(g(n,N,{rowId:t,columnId:r}))}),[n]),o=(0,c.useCallback)((function(){l(g(n,N))}),[n]);return c.default.createElement(u.default,{id:"compact-interactive-list-cell-content",ariaLabel:"Compact Interactive List",rows:n,columns:N,numberOfColumns:2,columnMinimumWidth:"234px",onCellSelect:r,onClearSelection:o,rowHeaderIndex:1,rowHeight:"50px"})}},53870:function(e,t,n){n.r(t),n.d(t,{default:function(){return v}});var l=n(67294),r=n(81254),a=n(34261),o=n(78564),i=["components"];function c(){return c=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var l in n)Object.prototype.hasOwnProperty.call(n,l)&&(e[l]=n[l])}return e},c.apply(this,arguments)}function u(e,t){if(null==e)return{};var n,l,r=function(e,t){if(null==e)return{};var n,l,r={},a=Object.keys(e);for(l=0;l<a.length;l++)n=a[l],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(l=0;l<a.length;l++)n=a[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s={};function d(e){var t=e.components,n=u(e,i);return(0,r.mdx)("wrapper",c({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React, { useState, useCallback } from 'react';\nimport CompactInteractiveList, { alignTypes } from 'terra-compact-interactive-list';\nimport {\n  IconFeaturedOff, IconFeatured, IconMultipleResultsNormal, IconMultipleResultsNotNormal, IconMultipleResultsCritical,\n} from 'terra-icon';\nimport Button from 'terra-button';\nimport Hyperlink from 'terra-hyperlink';\n\n// eslint-disable-next-line no-alert\nconst buttonCell = <Button text=\"Learn more\" />;\nconst anchorCell = <Hyperlink href=\"https://www.cerner.com\" text=\"Documents\" />;\nconst iconResultsNormal = <IconMultipleResultsNormal a11yLabel=\"Results normal\" height=\"1.5em\" width=\"1.5em\" />;\nconst iconResultsNotNormal = <IconMultipleResultsNotNormal a11yLabel=\"Results not normal\" height=\"1.5em\" width=\"1.5em\" />;\nconst iconResultsCritical = <IconMultipleResultsCritical a11yLabel=\"Results critical\" height=\"1.5em\" width=\"1.5em\" />;\n\nconst updateRows = (rowsToUpdate, columns, selectionDetails) => {\n  const columnIndex = columns.findIndex(column => selectionDetails?.columnId === column.id);\n  return [...rowsToUpdate.map(row => {\n    const newRow = {\n      ...row,\n      cells: [...row.cells.map((cell, index) => {\n        const isSelectedCell = selectionDetails?.rowId === row.id && index === columnIndex;\n        // eslint-disable-next-line no-nested-ternary\n        const isSelected = isSelectedCell ? !cell.isSelected : false;\n        return { ...cell, isSelected };\n      })],\n    };\n    return newRow;\n  })];\n};\n\nconst FeaturedIcon = () => {\n  const [isFeatured, setIsFeatured] = useState(false);\n  const onButtonClick = () => setIsFeatured(!isFeatured);\n  return (\n    isFeatured ? <Button variant=\"utility\" text=\"Unfavorite item\" icon={<IconFeatured />} onClick={onButtonClick} /> : <Button variant=\"utility\" text=\"Favorite item\" icon={<IconFeaturedOff />} onClick={onButtonClick} />\n  );\n};\n\nconst rows = [\n  {\n    id: 'row_1',\n    cells: [\n      { content: iconResultsNormal },\n      { content: 'Discern Care Set (1)' },\n      { content: buttonCell },\n      { content: <FeaturedIcon /> },\n    ],\n  },\n  {\n    id: 'row_2',\n    cells: [\n      { content: iconResultsNormal },\n      { content: 'Initial observation Care/Day High Severity 99220 (2)' },\n      { content: anchorCell },\n      { content: <FeaturedIcon /> },\n    ],\n  },\n  {\n    id: 'row_3',\n    cells: [\n      { content: iconResultsNotNormal },\n      { content: 'Arterial Sheath Care (3)' },\n      { content: anchorCell },\n      { content: <FeaturedIcon /> },\n    ],\n  },\n  {\n    id: 'row_4',\n    cells: [\n      { content: ' ' },\n      { content: 'Sbsq Observation Care/Day High Severity 99226 (4)' },\n      { content: buttonCell },\n      { content: <FeaturedIcon /> },\n    ],\n  },\n  {\n    id: 'row_5',\n    cells: [\n      { content: iconResultsCritical },\n      { content: 'Arterial Sheath Care (5)' },\n      { content: anchorCell },\n      { content: <FeaturedIcon /> },\n    ],\n  },\n];\n\nconst cols = [\n  {\n    id: 'Column-0',\n    displayName: 'Icon',\n    width: '50px',\n    align: alignTypes.CENTER,\n    isSelectable: true,\n  },\n  {\n    id: 'Column-1',\n    displayName: 'Service name',\n    width: '250px', // will be used as a css flexBasis\n    flexGrow: true, // makes the column grow or shrink\n    maximumWidth: '350px',\n    minimumWidth: '100px',\n    isSelectable: true,\n  },\n  {\n    id: 'Column-2',\n    displayName: 'Details',\n    width: '150px',\n    align: alignTypes.RIGHT,\n    isSelectable: true,\n  },\n  {\n    id: 'Column-3',\n    displayName: 'Featured',\n    width: '50px',\n    align: alignTypes.CENTER,\n    isSelectable: true,\n  },\n];\n\nconst CellContent = () => {\n  const [displayedRows, setDisplayedRows] = useState(rows);\n\n  const onCellSelect = useCallback(({ rowId, columnId }) => {\n    setDisplayedRows(updateRows(displayedRows, cols, { rowId, columnId }));\n  }, [displayedRows]);\n\n  const onClearSelection = useCallback(() => {\n    setDisplayedRows(updateRows(displayedRows, cols));\n  }, [displayedRows]);\n\n  return (\n    <CompactInteractiveList\n      id=\"compact-interactive-list-cell-content\"\n      ariaLabel=\"Compact Interactive List\"\n      rows={displayedRows}\n      columns={cols}\n      numberOfColumns={2}\n      columnMinimumWidth=\"234px\"\n      onCellSelect={onCellSelect} // a callback function for cell selection\n      onClearSelection={onClearSelection}\n      rowHeaderIndex={1}\n      rowHeight=\"50px\"\n    />\n  );\n};\n\nexport default CellContent;\n\n")))}d.isMDXComponent=!0;var m=n(49271),p=function(e){var t=e.title,n=e.description,r=e.isExpanded;return l.createElement(m.Z,{title:t||"Cell Content",description:n,example:l.createElement(o.Z,null),exampleSrc:l.createElement(d,null),isExpanded:r})},f=["components"];function h(){return h=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var l in n)Object.prototype.hasOwnProperty.call(n,l)&&(e[l]=n[l])}return e},h.apply(this,arguments)}function b(e,t){if(null==e)return{};var n,l,r=function(e,t){if(null==e)return{};var n,l,r={},a=Object.keys(e);for(l=0;l<a.length;l++)n=a[l],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(l=0;l<a.length;l++)n=a[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var y={},_="wrapper";function v(e){var t=e.components,n=b(e,f);return(0,r.mdx)(_,h({},y,n,{components:t,mdxType:"MDXLayout"}),(0,r.mdx)("h1",{id:"cell-content-and-cell-selection"},"Cell Content and Cell Selection"),(0,r.mdx)("h3",{id:"cell-content"},"Cell Content"),(0,r.mdx)(a.Notice,{variant:"important",ariaLevel:"3",mdxType:"Notice"},(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},"Only one interactive element per cell is allowed. Because the Compact Intercative List component is one tab stop and the arrow keys are used to move between cells, these keys are not available to move to multiple interactive elements in a cell. "),(0,r.mdx)("li",{parentName:"ul"},"Interactive elements are limited to ",(0,r.mdx)("a",{parentName:"li",href:"https://engineering.cerner.com/terra-ui/components/cerner-terra-core-docs/button/about"},"terra-button")," and ",(0,r.mdx)("a",{parentName:"li",href:"https://engineering.cerner.com/terra-ui/components/cerner-terra-core-docs/hyperlink/about"},"terra-hyperlink"),". Currently, the cell does not restrict interaction when active,\nand all interactive elements keep their native arrow key interactions. If you place a text input, a text area, or select elements in a cell, you are unable to move away from the cell with the arrow keys. "))),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},"The ",(0,r.mdx)("a",{parentName:"li",href:"/terra-ui/components/cerner-terra-framework-docs/compact-interactive-list/about"},"content")," of a cell in the ",(0,r.mdx)("a",{parentName:"li",href:"/terra-ui/components/cerner-terra-framework-docs/compact-interactive-list/about"},"Compact Interactive List")," component may be empty, text, numerical, or any combination of widgets, but only one interactive element per cell is allowed."),(0,r.mdx)("li",{parentName:"ul"},"If a cell contains an interactive element, the interactive element becomes active when you select the cell. "),(0,r.mdx)("li",{parentName:"ul"},"If you press an arrow key when a cell is active, the next or previous cell becomes active.")),(0,r.mdx)("h3",{id:"cell-selection"},"Cell Selection"),(0,r.mdx)("p",null,"The example below demonstrates a ",(0,r.mdx)("a",{parentName:"p",href:"/terra-ui/components/cerner-terra-framework-docs/compact-interactive-list/about"},"Compact Interactive List")," component that supports cell selection. "),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},"You can click a cell or press the ",(0,r.mdx)("strong",{parentName:"li"},"SPACERBAR")," on the active cell to select it. "),(0,r.mdx)("li",{parentName:"ul"},"A cell is selectable unless it contains an interactive element, in which case the interactive element default controls apply, or ",(0,r.mdx)("strong",{parentName:"li"},(0,r.mdx)("a",{parentName:"strong",href:"/terra-ui/components/cerner-terra-framework-docs/compact-interactive-list/about"},"isSelectable")," prop")," is set to ",(0,r.mdx)("inlineCode",{parentName:"li"},"false")," for the corresponding column.")),(0,r.mdx)("h4",{id:"required-properties"},"Required Properties"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("strong",{parentName:"li"},(0,r.mdx)("a",{parentName:"strong",href:"/terra-ui/components/cerner-terra-framework-docs/compact-interactive-list/about"},"onCellSelect")," callback property:")," When the user selects a cell, this callback requests the object with the rowId and columnId properties of the selected cell. "),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("strong",{parentName:"li"},(0,r.mdx)("a",{parentName:"strong",href:"/terra-ui/components/cerner-terra-framework-docs/compact-interactive-list/about"},"onClearSelectedCells")," callback property:")," When the user presses the ",(0,r.mdx)("strong",{parentName:"li"},"ESC")," key, this callback is requested.")),(0,r.mdx)(p,{mdxType:"CellContent"}))}v.isMDXComponent=!0},66983:function(e,t,n){n.r(t),t.default={"clinical-lowlight-theme":"Button-module__clinical-lowlight-theme___TyZWB","orion-fusion-theme":"Button-module__orion-fusion-theme___q-FcQ",button:"Button-module__button___QuCn2","is-active":"Button-module__is-active___Z8AuK"}},30866:function(e,t,n){n.r(t),t.default={"clinical-lowlight-theme":"Notice-module__clinical-lowlight-theme___aa5xV","orion-fusion-theme":"Notice-module__orion-fusion-theme___QAE-T",notice:"Notice-module__notice___GWkPA",children:"Notice-module__children___lDYsm",accessory:"Notice-module__accessory___wkLOG",title:"Notice-module__title___6H5tc","ux-recommendation":"Notice-module__ux-recommendation___N8BuK",caution:"Notice-module__caution___hPrVl",deprecation:"Notice-module__deprecation___g1drA",maintenance:"Notice-module__maintenance___kWLIZ",important:"Notice-module__important___p5DiF","not-supported":"Notice-module__not-supported___34bHd",paragraph:"Notice-module__paragraph___5h-w1",list:"Notice-module__list___M2Kxj"}},42620:function(e,t,n){n.r(t),t.default={"clinical-lowlight-theme":"Placeholder-module__clinical-lowlight-theme___Obm9K","orion-fusion-theme":"Placeholder-module__orion-fusion-theme___svHY+",placeholder:"Placeholder-module__placeholder___ZZDXd",inner:"Placeholder-module__inner___fJq9o",title:"Placeholder-module__title___teBSo"}}}]);