"use strict";(self.webpackChunkterra_ui=self.webpackChunkterra_ui||[]).push([[72851],{49271:function(e,t,n){var a=n(64836),l=n(18698);t.Z=void 0;var r=a(n(27424)),s=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==l(e)&&"function"!=typeof e)return{default:e};var n=y(t);if(n&&n.has(e))return n.get(e);var a={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var s in e)if("default"!==s&&Object.prototype.hasOwnProperty.call(e,s)){var c=r?Object.getOwnPropertyDescriptor(e,s):null;c&&(c.get||c.set)?Object.defineProperty(a,s,c):a[s]=e[s]}a.default=e,n&&n.set(e,a);return a}(n(67294)),c=a(n(45697)),o=a(n(47166)),i=n(21538),d=a(n(33864)),m=a(n(23399)),p=n(51051),u=a(n(53560));function y(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(y=function(e){return e?n:t})(e)}var f=o.default.bind(u.default),h={example:c.default.element,exampleSrc:c.default.element,exampleCssSrc:c.default.element,title:c.default.string,description:c.default.node,isExpanded:c.default.bool},x=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","true")},w=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","false")},b=function(e){var t=e.example,n=e.exampleSrc,a=e.exampleCssSrc,l=e.title,c=e.description,o=e.isExpanded,u=(0,s.useState)(o),y=(0,r.default)(u,2),h=y[0],b=y[1],v=(0,s.useState)(!1),g=(0,r.default)(v,2),N=g[0],_=g[1],k=s.default.useContext(i.ThemeContext),E=void 0!==a,D=function(){_(!N),h&&b(!h)},C=function(){b(!h),N&&_(!N)},T=function(e,t){e.nativeEvent.keyCode!==p.KEY_SPACE&&e.nativeEvent.keyCode!==p.KEY_RETURN||(e.preventDefault(),t())};return s.default.createElement("div",{className:f("template",k.className)},s.default.createElement("div",{className:f("header")},l&&s.default.createElement("h2",{className:f("title")},l)),s.default.createElement("div",{className:f("content")},c&&s.default.createElement("div",{className:f("description")},c),t),s.default.createElement("div",{className:f("footer")},n?s.default.createElement("div",{className:f("button-container")},E&&s.default.createElement("button",{type:"button",className:f("css-toggle","item",{"is-selected":N}),onClick:D,onKeyDown:function(e){return T(e,D)},onBlur:x,onMouseDown:w,tabIndex:0,"data-focus-styles-enabled":!0},s.default.createElement(d.default,{className:f("chevron")}),s.default.createElement("span",null,"CSS"),s.default.createElement(m.default,{className:f("chevron")})),s.default.createElement("button",{type:"button",className:f("code-toggle","item",{"is-selected":h}),onClick:C,onKeyDown:function(e){return T(e,C)},onBlur:x,onMouseDown:w,tabIndex:0,"data-focus-styles-enabled":!0},s.default.createElement(d.default,{className:f("chevron")}),s.default.createElement("span",null,"Code"),s.default.createElement(m.default,{className:f("chevron")}))):null,s.default.createElement("div",null,N&&s.default.createElement("div",{className:f("css")},a),h&&s.default.createElement("div",{className:f("code")},n))))};b.propTypes=h,b.defaultProps={isExpanded:!1};var v=b;t.Z=v},96227:function(e,t,n){n.r(t),n.d(t,{default:function(){return J}});var a=n(67294),l=n(81254),r=n(29291),s=n(93670),c=n(63884),o=n(7270),i=n(47166),d=n.n(i),m={table:"ResponsiveListAndTableExample__table___ngtnG","start-accessory-column":"ResponsiveListAndTableExample__start-accessory-column___PRK-R","content-accessory":"ResponsiveListAndTableExample__content-accessory___m6BiP","content-accessory-align-top":"ResponsiveListAndTableExample__content-accessory-align-top___cCw4w","content-accessory-align-center":"ResponsiveListAndTableExample__content-accessory-align-center___l+0s6","content-end-accessory":"ResponsiveListAndTableExample__content-end-accessory___E++JA","content-comment":"ResponsiveListAndTableExample__content-comment___GcxTT","content-display":"ResponsiveListAndTableExample__content-display___QRBXM"},p=n(41086),u=n(3343),y=n(62936),f=n(43891),h=d().bind(m),x=a.createElement(c.default.Display,{icon:a.createElement(p.default,null),text:"Asif Khan"}),w=a.createElement(c.default.Display,{text:"Care Position: Primary"}),b=a.createElement(c.default.Display,{text:"Room 100A"}),v=a.createElement(c.default.Display,{text:"Acuity: 5"}),g=a.createElement(c.default.Display,{text:"Start Time: 08-05-2016 12:00:00"}),N=a.createElement(c.default.Display,{text:"End Time: 08-05-2016 16:00:00"}),_=a.createElement(c.default.Comment,{text:"Faint red rash appeared at 08-05-2016 13:24:00"}),k=a.createElement(u.default,null),E=a.createElement(y.default,null),D=[{key:"row-0",toggleText:"Toggle Power Row 0",discloseText:"Power Row 0 - Details",primaryIndex:1,cells:[{key:"startAccessory",children:k,attrs:{className:h("content-accessory","content-accessory-align-center")}},{key:"cell-1",children:a.createElement(c.default.Display,{icon:a.createElement(p.default,null),text:"Asif Khan",textStyle:"attention"}),attrs:{className:h("content-display")}},{key:"cell-2",children:w,attrs:{className:h("content-display")}},{key:"cell-3",children:b,attrs:{className:h("content-display")}},{key:"cell-4",children:v,attrs:{className:h("content-display")}},{key:"cell-5",children:g,attrs:{className:h("content-display")}},{key:"cell-6",children:N,attrs:{className:h("content-display")}},{key:"comment",children:_,attrs:{className:h("content-comment")}},{key:"endAccessory",children:E,attrs:{className:h("content-accessory","content-accessory-align-center","content-end-accessory")}}]},{key:"row-1",toggleText:"Toggle Power Row 1",discloseText:"Power Row 1 - Details",primaryIndex:1,isStriped:!0,cells:[{key:"startAccessory",children:k,attrs:{className:h("content-accessory","content-accessory-align-center")}},{key:"cell-1",children:x,attrs:{className:h("content-display")}},{key:"cell-2",children:w,attrs:{className:h("content-display")}},{key:"cell-3",children:b,attrs:{className:h("content-display")}},{key:"cell-4",children:a.createElement(c.default.Display,{text:"Acuity: 5",icon:a.createElement(f.default,null)}),attrs:{className:h("content-display")}},{key:"cell-5",children:g,attrs:{className:h("content-display")}},{key:"cell-6",children:N,attrs:{className:h("content-display")}},{key:"comment",children:_,attrs:{className:h("content-comment")}},{key:"endAccessory",children:E,attrs:{className:h("content-accessory","content-accessory-align-center","content-end-accessory")}}],layout:"twoColumns"},{key:"row-2",toggleText:"Toggle Power Row 2",discloseText:"Power Row 2 - Details",primaryIndex:1,cells:[{key:"startAccessory",children:"",attrs:{className:h("content-accessory","content-accessory-align-center")}},{key:"cell-1",children:x,attrs:{className:h("content-display")}},{key:"cell-2",children:w,attrs:{className:h("content-display")}},{key:"cell-3",children:b,attrs:{className:h("content-display")}},{key:"cell-4",children:v,attrs:{className:h("content-display")}},{key:"cell-5",children:g,attrs:{className:h("content-display")}},{key:"cell-6",children:N,attrs:{className:h("content-display")}},{key:"comment",children:_,attrs:{className:h("content-comment")}},{key:"endAccessory",children:E,attrs:{className:h("content-accessory","content-accessory-align-center","content-end-accessory")}}]},{key:"row-3",toggleText:"Toggle Power Row 3",discloseText:"Power Row 3 - Details",primaryIndex:1,isStriped:!0,cells:[{key:"startAccessory",children:k,attrs:{className:h("content-accessory","content-accessory-align-center")}},{key:"cell-1",children:x,attrs:{className:h("content-display")}},{key:"cell-2",children:w,attrs:{className:h("content-display")}},{key:"cell-3",children:a.createElement(c.default.Display,{text:"Room 100A",textStyle:"strikeThrough"}),attrs:{className:h("content-display")}},{key:"cell-4",children:v,attrs:{className:h("content-display")}},{key:"cell-5",children:g,attrs:{className:h("content-display")}},{key:"cell-6",children:N,attrs:{className:h("content-display")}},{key:"comment",children:_,attrs:{className:h("content-comment")}},{key:"endAccessory",children:E,attrs:{className:h("content-accessory","content-accessory-align-center","content-end-accessory")}}],layout:"twoColumns"},{key:"row-4",toggleText:"Toggle Power Row 4",discloseText:"Power Row 4 - Details",primaryIndex:1,cells:[{key:"startAccessory",children:k,attrs:{className:h("content-accessory","content-accessory-align-center")}},{key:"cell-1",children:x,attrs:{className:h("content-display")}},{key:"cell-2",children:w,attrs:{className:h("content-display")}},{key:"cell-3",children:b,attrs:{className:h("content-display")}},{key:"cell-4",children:v,attrs:{className:h("content-display")}},{key:"cell-5",children:g,attrs:{className:h("content-display")}},{key:"cell-6",children:N,attrs:{className:h("content-display")}},{key:"comment",children:_,attrs:{className:h("content-comment")}},{key:"endAccessory",children:"",attrs:{className:h("content-accessory","content-accessory-align-center","content-end-accessory")}}]}];function C(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var a,l,r,s,c=[],o=!0,i=!1;try{if(r=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;o=!1}else for(;!(o=(a=r.call(n)).done)&&(c.push(a.value),c.length!==t);o=!0);}catch(e){i=!0,l=e}finally{try{if(!o&&null!=n.return&&(s=n.return(),Object(s)!==s))return}finally{if(i)throw l}}return c}}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return T(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return T(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function T(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}var A=d().bind(m),O=function(){var e=C((0,a.useState)([]),2),t=e[0],n=e[1],l=a.useContext(r.ActiveBreakpointContext),i=function(e,a){e.preventDefault(),t!==a.key&&n(a.key)},d=a.createElement(s.default,{role:"listbox"},D.map((function(e){return function(e){var n,l,r,o,d=e.cells.map((function(e){switch(e.key){case"startAccessory":return l=e.children,null;case"comment":return r=e.children,null;case"endAccessory":return o=e.children,null;default:return e.children}}));return d=d.filter((function(e){return null!=e})),n=l?a.createElement(c.default,{displays:d,startAccessory:l,comment:r,endAccessory:o,layout:e.layout}):a.createElement(c.default,{displays:d,reserveStartAccessorySpace:!0,comment:r,endAccessory:o,layout:e.layout}),a.createElement(s.Item,{key:e.key,metaData:{key:e.key},onSelect:i,isSelectable:!0,isSelected:t===e.key},n)}(e)}))),m=a.createElement(o.default,{summaryId:"standard-table",summary:"This table has standard padding",numberOfColumns:D[0].cells.length,dividerStyle:"horizontal",rowStyle:"disclose",bodyData:[{rows:function(e){return e.map((function(e){return{key:(n=e).key,isStriped:n.isStriped,cells:n.cells,discloseAction:{metaData:{key:n.key},discloseLabel:n.discloseText,isDisclosed:t===n.key,discloseCellIndex:0,onDisclose:i}};var n}))}(D)}],className:A("table")});switch(l){case"tiny":case"small":case"medium":return d;default:return m}},S=["components"];function j(){return j=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},j.apply(this,arguments)}function I(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var R={};function P(e){var t=e.components,n=I(e,S);return(0,l.mdx)("wrapper",j({},R,n,{components:t,mdxType:"MDXLayout"}),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React, { useState } from 'react';\nimport { ActiveBreakpointContext } from 'terra-application/lib/breakpoints';\nimport List, { Item } from 'terra-list';\nimport ItemView from 'terra-clinical-item-view';\nimport Table from 'terra-table';\nimport classNames from 'classnames/bind';\nimport styles from './ResponsiveListAndTableExample.scss';\nimport mockData from './mock-data/table-select-data';\n\nconst cx = classNames.bind(styles);\n\nconst CustomItemCollection = () => {\n  const [selectedKey, setSelectedKey] = useState([]);\n  const activeBreakpoint = React.useContext(ActiveBreakpointContext);\n  const handleRowDisclose = (event, metaData) => {\n    event.preventDefault();\n    if (selectedKey !== metaData.key) {\n      setSelectedKey(metaData.key);\n    }\n  };\n\n  const createItem = rowData => {\n    let itemview;\n    let startAccessory;\n    let comment;\n    let endAccessory;\n\n    let displays = rowData.cells.map((cell) => {\n      switch (cell.key) {\n        case 'startAccessory':\n          startAccessory = cell.children;\n          return null;\n        case 'comment':\n          comment = cell.children;\n          return null;\n        case 'endAccessory':\n          endAccessory = cell.children;\n          return null;\n        default:\n          return cell.children;\n      }\n    });\n\n    displays = displays.filter((el) => el != null);\n\n    if (startAccessory) {\n      itemview = (\n        <ItemView\n          displays={displays}\n          startAccessory={startAccessory}\n          comment={comment}\n          endAccessory={endAccessory}\n          layout={rowData.layout}\n        />\n      );\n    } else {\n      itemview = (\n        <ItemView\n          displays={displays}\n          reserveStartAccessorySpace\n          comment={comment}\n          endAccessory={endAccessory}\n          layout={rowData.layout}\n        />\n      );\n    }\n\n    return (\n      <Item\n        key={rowData.key}\n        metaData={{ key: rowData.key }}\n        onSelect={handleRowDisclose}\n        isSelectable\n        isSelected={selectedKey === rowData.key}\n      >\n        {itemview}\n      </Item>\n    );\n  };\n  const createItems = data => data.map(childItem => createItem(childItem));\n  const listDisplay = (\n    <List role=\"listbox\">\n      {createItems(mockData)}\n    </List>\n  );\n\n  const createRow = rowData => (\n    {\n      key: rowData.key,\n      isStriped: rowData.isStriped,\n      cells: rowData.cells,\n      discloseAction: {\n        metaData: { key: rowData.key },\n        discloseLabel: rowData.discloseText,\n        isDisclosed: selectedKey === rowData.key,\n        discloseCellIndex: 0,\n        onDisclose: handleRowDisclose,\n      },\n    }\n  );\n  const createRows = data => data.map(childItem => createRow(childItem));\n  const tableDisplay = (\n    <Table\n      summaryId=\"standard-table\"\n      summary=\"This table has standard padding\"\n      numberOfColumns={mockData[0].cells.length}\n      dividerStyle=\"horizontal\"\n      rowStyle=\"disclose\"\n      bodyData={[\n        {\n          rows: createRows(mockData),\n        },\n      ]}\n      className={cx('table')}\n    />\n  );\n\n  switch (activeBreakpoint) {\n    case 'tiny':\n    case 'small':\n    case 'medium':\n      return listDisplay;\n    case 'large':\n    case 'huge':\n    case 'enormous':\n    default:\n      return tableDisplay;\n  }\n};\n\nexport default CustomItemCollection;\n\n")))}P.isMDXComponent=!0;var L=n(49271),M=["components"];function B(){return B=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},B.apply(this,arguments)}function K(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var z={};function V(e){var t=e.components,n=K(e,M);return(0,l.mdx)("wrapper",B({},z,n,{components:t,mdxType:"MDXLayout"}),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-scss"},":local {\n  .table {\n    table-layout: fixed;\n  }\n\n  .start-accessory-column {\n    width: 40px;\n  }\n\n  .content-accessory.content-accessory-align-top {\n    vertical-align: top;\n  }\n\n  .content-accessory.content-accessory-align-center {\n    vertical-align: middle;\n  }\n\n  .content-accessory.content-end-accessory {\n    text-align: right;\n  }\n\n  .content-accessory,\n  .content-comment,\n  .content-display {\n    word-wrap: break-word;\n  }\n\n  .content-display {\n    flex: 1 1 0;\n    min-width: 75px;\n    padding-right: 1rem;\n  }\n\n  .content-accessory {\n    display: flex;\n    flex-direction: column;\n    max-width: 40px;\n    padding-left: 1rem;\n    padding-right: 1rem;\n    padding-top: 1px;\n    text-align: left;\n  }\n}\n\n")))}V.isMDXComponent=!0;var X=function(e){var t=e.title,n=e.description,l=e.isExpanded;return a.createElement(L.Z,{title:t||"Responsive List And Table Example",description:n,example:a.createElement(O,null),exampleCssSrc:a.createElement(V,null),exampleSrc:a.createElement(P,null),isExpanded:l})},F=["components"];function G(){return G=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},G.apply(this,arguments)}function q(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var W={},Y="wrapper";function J(e){var t=e.components,n=q(e,F);return(0,l.mdx)(Y,G({},W,n,{components:t,mdxType:"MDXLayout"}),(0,l.mdx)("h1",{id:"building-an-item-collection"},"Building an Item Collection"),(0,l.mdx)("p",null,(0,l.mdx)("inlineCode",{parentName:"p"},"terra-item-collection")," was a wrapper component designed to display data as either a table or list of items dependent on the relative container size. It has been deprecated in favor of encouraging teams to create their own component. We found that the item collection was too limited in API to meet the varied needs of all consumers and instead we now recommend teams use terra components to create their own flexible list/table component. This guide is intended to help consumers create their own 'item-collection' to switch between a table and list layout depending on the relative container size."),(0,l.mdx)("p",null,"The ",(0,l.mdx)("inlineCode",{parentName:"p"},"terra-item-collection")," used ",(0,l.mdx)("a",{parentName:"p",href:"/terra-ui/pull/597/components/terra-responsive-element/responsive-element/responsive-element"},"terra-responsive-element")," to swap between its ",(0,l.mdx)("a",{parentName:"p",href:"/terra-ui/pull/597/components/terra-table/table/table"},"terra-table")," and ",(0,l.mdx)("a",{parentName:"p",href:"/terra-ui/pull/597/components/terra-list/list/list"},"terra-list")," displays. The example in this guide uses the ",(0,l.mdx)("inlineCode",{parentName:"p"},"ActiveBreakpointContext")," from ",(0,l.mdx)("a",{parentName:"p",href:"/terra-ui/pull/597/application/terra-application/application"},"terra-application")," to switch what is displayed based on the current browser size."),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-javascript"},"import { ActiveBreakpointContext } from 'terra-application/lib/breakpoints';\n...\nconst CustomItemCollection = () => {\n  const activeBreakpoint = React.useContext(ActiveBreakpointContext);\n  ...\n  switch (activeBreakpoint) {\n    case 'tiny':\n    case 'small':\n    case 'medium':\n      return listDisplay;\n    case 'large':\n    case 'huge':\n    case 'enormous':\n    default:\n      return tableDisplay;\n  }\n};\n")),(0,l.mdx)("p",null,"This will display a list at browser size ",(0,l.mdx)("inlineCode",{parentName:"p"},"medium")," and below and a table on larger sizes."),(0,l.mdx)("p",null,"The example also uses ",(0,l.mdx)("a",{parentName:"p",href:"/terra-ui/pull/597/components/terra-clinical-item-view/clinical-item-view/clinical-item-view"},"terra-clinical-item-view")," for each cell of data which is not required. It is used here to to recreate the deprecated ",(0,l.mdx)("inlineCode",{parentName:"p"},"terra-item-collection"),", but we encourage you to create your own cell layout to meet the requirements of your design."),(0,l.mdx)("h2",{id:"creating-the-item-collection"},"Creating the Item Collection"),(0,l.mdx)("p",null,"In the following examples we create 2 different components. A ",(0,l.mdx)("a",{parentName:"p",href:"/terra-ui/pull/597/components/terra-list/list/list"},"terra-list")," display is used when browser size is below 'medium'. The other component is a ",(0,l.mdx)("a",{parentName:"p",href:"/terra-ui/pull/597/components/terra-table/table/table"},"terra-table"),"."),(0,l.mdx)("h3",{id:"creating-the-list"},"Creating the List"),(0,l.mdx)("p",null,"We start with a Terra ",(0,l.mdx)("inlineCode",{parentName:"p"},"List")," component and define these two props: ",(0,l.mdx)("inlineCode",{parentName:"p"},"dividerStyles")," and ",(0,l.mdx)("inlineCode",{parentName:"p"},"role"),". ",(0,l.mdx)("inlineCode",{parentName:"p"},"dividerStyle")," is used to determine if and where we want the border-color to be applied to each of the children and can have the values 'none', 'standard', 'bottom-only'. ",(0,l.mdx)("inlineCode",{parentName:"p"},"role")," is only used if the children you have in ",(0,l.mdx)("inlineCode",{parentName:"p"},"List")," are selectable, and if they are, is defined as 'listbox'."),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-javascript"},'  const listDisplay = (\n  <List dividerStyle="none" role="listbox">\n    {children}\n  </List>);\n')),(0,l.mdx)("p",null,"Next we build the children that are going into this ",(0,l.mdx)("inlineCode",{parentName:"p"},"List"),". Each child must be rendered within the ",(0,l.mdx)("a",{parentName:"p",href:"/terra-ui/pull/597/components/terra-list/list/list-item"},(0,l.mdx)("inlineCode",{parentName:"a"},"terra-list"),"'s ",(0,l.mdx)("inlineCode",{parentName:"a"},"Item"))," component and be set as the display prop in an ",(0,l.mdx)("a",{parentName:"p",href:"/terra-ui/pull/597/components/terra-clinical-item-view/clinical-item-view/clinical-item-view"},"ItemView"),"."),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-javascript"},"  const listChild = (\n    <Item>\n      <ItemView\n        displays={React.Children.toArray(children)}\n        ...\n      />\n    </Item>\n  );\n")),(0,l.mdx)("p",null,"In our example we use many optional props to better organize and display the mock data we have provided."),(0,l.mdx)("h3",{id:"creating-the-table"},"Creating the Table"),(0,l.mdx)("p",null,"Using ",(0,l.mdx)("a",{parentName:"p",href:"/terra-ui/pull/597/components/terra-table/table/table"},"terra-table"),", we start with this."),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-javascript"},'  const tableDisplay = (\n    <Table\n      summaryId="standard-table"\n      summary="This table has standard padding"\n      numberOfColumns={mockData[0].cells.length}\n      dividerStyle="horizontal"\n      rowStyle="disclose"\n      bodyData={[\n        {\n          rows: React.Children.toArray(createRows(mockData)),\n        },\n      ]}\n      className={cx(\'table\')}\n    />\n  );\n')),(0,l.mdx)("p",null,(0,l.mdx)("inlineCode",{parentName:"p"},"summaryId")," is an element-id for the component, ",(0,l.mdx)("inlineCode",{parentName:"p"},"summary")," is just a brief text to describe the table's content, and ",(0,l.mdx)("inlineCode",{parentName:"p"},"className")," is a scope class name tp add CSS. ",(0,l.mdx)("inlineCode",{parentName:"p"},"numberOfColumns")," is also pretty self-explanatory as how many columns you will need in the table. ",(0,l.mdx)("inlineCode",{parentName:"p"},"dividerStyle")," is used to put divisions between rows."),(0,l.mdx)("p",null,(0,l.mdx)("inlineCode",{parentName:"p"},"rowStyle")," we define as 'disclose' because in our example our rows are selectable to then disclose further information upon selection."),(0,l.mdx)("p",null,"In our particular example, we created a mock data object we parse through to create the rows and cells. The ",(0,l.mdx)("inlineCode",{parentName:"p"},"createRows")," function which looks like this."),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-javascript"},"const createRows = rowData => (\n  {\n    key: rowData.key,\n    isStriped: rowData.isStriped,\n    cells: createCellsForRow(rowData.cells),\n    discloseAction: {\n      metaData: { key: rowData.key },\n      discloseLabel: rowData.discloseText,\n      isDisclosed: selectedKey === rowData.key,\n      discloseCellIndex: 0,\n      onDisclose: handleRowDisclose,\n    },\n  }\n);\n")),(0,l.mdx)("p",null,"Each row needs a ",(0,l.mdx)("inlineCode",{parentName:"p"},"key")," which is a unique identifier, in our example it is 'row-0', 'row-1', etc. ",(0,l.mdx)("inlineCode",{parentName:"p"},"isStriped")," is set to 'true' every other row to give a close appearance to past item-collection."),(0,l.mdx)("p",null,(0,l.mdx)("inlineCode",{parentName:"p"},"discloseAction")," is a special object for use when we select that row. ",(0,l.mdx)("inlineCode",{parentName:"p"},"metaData")," just contains a key for that row and ",(0,l.mdx)("inlineCode",{parentName:"p"},"discloseLabel")," is just a brief description the row such as 'Power Row 0 - Details'. ",(0,l.mdx)("inlineCode",{parentName:"p"},"isDisclosed")," is 'true' only when our component's state matches with the metadata key. ",(0,l.mdx)("inlineCode",{parentName:"p"},"discloseCellIndex")," is the index of the cell that provides the accessible link entry point."),(0,l.mdx)("p",null,(0,l.mdx)("inlineCode",{parentName:"p"},"onDisclose")," is a simple state update function as seen here."),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-javascript"},"const handleRowDisclose = (event, metaData) => {\n  event.preventDefault();\n  if (selectedKey !== metaData.key) {\n    setSelectedKey(metaData.key);\n  }\n};\n")),(0,l.mdx)("p",null,"For creating cells in each row we do this"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-javascript"},"const createCellsForRow = cells => cells.map(cell => createCell(cell));\nconst createCell = cell => ({ key: cell.key, children: cell.children, attrs: cell.attrs });\n")),(0,l.mdx)("p",null,"Cells are simple and just require a key, the children of said cell and then we use ",(0,l.mdx)("inlineCode",{parentName:"p"},"attrs")," to set ",(0,l.mdx)("inlineCode",{parentName:"p"},"className")," in our example like so."),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-javascript"},"const attrs = { className: cx('content-display')};\n")),(0,l.mdx)("h2",{id:"example"},"Example"),(0,l.mdx)(X,{title:"Responsive List And Table Example",mdxType:"ResponsiveListandTableExample"}))}J.isMDXComponent=!0},53560:function(e,t,n){n.r(t),t.default={"orion-fusion-theme":"ExampleTemplate-module__orion-fusion-theme___GzA23",template:"ExampleTemplate-module__template___a4uPk",header:"ExampleTemplate-module__header___iFXV3",content:"ExampleTemplate-module__content___48m4Q",description:"ExampleTemplate-module__description___NwBJo",footer:"ExampleTemplate-module__footer___GpSoG","button-container":"ExampleTemplate-module__button-container___rAD11",css:"ExampleTemplate-module__css___+jtk1",code:"ExampleTemplate-module__code___7rC6C","css-toggle":"ExampleTemplate-module__css-toggle___chHK7","code-toggle":"ExampleTemplate-module__code-toggle___TGlE-","is-selected":"ExampleTemplate-module__is-selected___0BYwS",item:"ExampleTemplate-module__item___8FTQq",chevron:"ExampleTemplate-module__chevron___VbY7N",title:"ExampleTemplate-module__title___r+nbJ","dynamic-content":"ExampleTemplate-module__dynamic-content___k+1H7"}},43891:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=r(n(67294)),l=r(n(99139));function r(e){return e&&e.__esModule?e:{default:e}}function s(){return s=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},s.apply(this,arguments)}var c=function(e){var t=s({},e);return a.default.createElement(l.default,t,a.default.createElement("path",{d:"M32 8v29a8 8 0 01-16 0V8a5 5 0 0110 0v29a2 2 0 01-4 0V15h-3v22a5 5 0 0010 0V8a8 8 0 00-16 0v29a11 11 0 0022 0V8z"}))};c.displayName="IconAttachment",c.defaultProps={className:"",viewBox:"0 0 48 48",xmlns:"http://www.w3.org/2000/svg","data-name":"Layer 1",isBidi:!0};var o=c;t.default=o},33864:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=r(n(67294)),l=r(n(99139));function r(e){return e&&e.__esModule?e:{default:e}}function s(){return s=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},s.apply(this,arguments)}var c=function(e){var t=s({},e);return a.default.createElement(l.default,t,a.default.createElement("path",{d:"M10.3 24L33.8 0l3.9 3.8L18 24l19.7 20.2-3.9 3.8z"}))};c.displayName="IconChevronLeft",c.defaultProps={className:"",viewBox:"0 0 48 48",xmlns:"http://www.w3.org/2000/svg","data-name":"Layer 1",isBidi:!0};var o=c;t.default=o},41086:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=r(n(67294)),l=r(n(99139));function r(e){return e&&e.__esModule?e:{default:e}}function s(){return s=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},s.apply(this,arguments)}var c=function(e){var t=s({},e);return a.default.createElement(l.default,t,a.default.createElement("path",{d:"M24 0a11.3 11.3 0 11-11.3 11.3A11.35 11.35 0 0124 0zm19.5 48v-5.7a16.77 16.77 0 00-16.8-16.8h-5.5A16.75 16.75 0 004.5 42.3V48z"}))};c.displayName="IconPerson",c.defaultProps={viewBox:"0 0 48 48",xmlns:"http://www.w3.org/2000/svg","data-name":"Layer 1"};var o=c;t.default=o}}]);