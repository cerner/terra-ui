"use strict";(self.webpackChunkterra_ui=self.webpackChunkterra_ui||[]).push([[18787,78996,39915,33442],{26187:function(e,t,l){l.r(t),l.d(t,{default:function(){return I}});var n=l(67294),a=l(81254),r=l(26372),m=l(18922),s=["components"];function u(){return u=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var l=arguments[t];for(var n in l)Object.prototype.hasOwnProperty.call(l,n)&&(e[n]=l[n])}return e},u.apply(this,arguments)}function d(e,t){if(null==e)return{};var l,n,a=function(e,t){if(null==e)return{};var l,n,a={},r=Object.keys(e);for(n=0;n<r.length;n++)l=r[n],t.indexOf(l)>=0||(a[l]=e[l]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)l=r[n],t.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(a[l]=e[l])}return a}var o={};function i(e){var t=e.components,l=d(e,s);return(0,a.mdx)("wrapper",u({},o,l,{components:t,mdxType:"MDXLayout"}),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport { ResultNameHeaderCell } from 'terra-clinical-result/lib/index';\n\nexport default () => <ResultNameHeaderCell resultName=\"Blood Pressure\" unit=\"mmHg\" />;\n\n")))}i.isMDXComponent=!0;var c=l(49271),p=function(e){var t=e.title,l=e.description,a=e.isExpanded;return n.createElement(c.Z,{title:t||"Result Name Header Cell",description:l,example:n.createElement(m.Z,null),exampleSrc:n.createElement(i,null),isExpanded:a})},f=l(17093),x=["components"];function y(){return y=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var l=arguments[t];for(var n in l)Object.prototype.hasOwnProperty.call(l,n)&&(e[n]=l[n])}return e},y.apply(this,arguments)}function N(e,t){if(null==e)return{};var l,n,a=function(e,t){if(null==e)return{};var l,n,a={},r=Object.keys(e);for(n=0;n<r.length;n++)l=r[n],t.indexOf(l)>=0||(a[l]=e[l]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)l=r[n],t.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(a[l]=e[l])}return a}var g={};function h(e){var t=e.components,l=N(e,x);return(0,a.mdx)("wrapper",y({},g,l,{components:t,mdxType:"MDXLayout"}),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-jsx"},'import React from \'react\';\nimport { ResultNameHeaderCell } from \'terra-clinical-result/lib\';\nimport classNames from \'classnames\';\nimport classNamesBind from \'classnames/bind\';\nimport ThemeContext from \'terra-theme-context\';\nimport styles from \'../Examples.module.scss\';\n\nconst cx = classNamesBind.bind(styles);\n\nconst ResultNameColumnFlowsheetExample = () => {\n  const theme = React.useContext(ThemeContext);\n  const mockFlowsheetClassnames = classNames(\n    cx(\n      \'mock-flowsheet-example\',\n      theme.className,\n    ),\n  );\n\n  return (\n    <div className={mockFlowsheetClassnames}>\n      <div className={cx(\'mock-flowsheet-firstcolumn\')}>\n        <div className={cx(\'mock-flowsheet-firstcolumn-cell\')}>\n          <ResultNameHeaderCell resultName="Temp" fullResultName="Temperature" unit="degC" fullUnit="Degrees Celsius" />\n        </div>\n        <div className={cx([\'mock-flowsheet-firstcolumn-cell\', \'zebra\'])}>\n          <ResultNameHeaderCell resultName="HR" unit="bpm" fullUnit="beats per minute" />\n        </div>\n        <div className={cx(\'mock-flowsheet-firstcolumn-cell\')}>\n          <ResultNameHeaderCell resultName="BP" unit="mmHg" />\n        </div>\n        <div className={cx([\'mock-flowsheet-firstcolumn-cell\', \'zebra\'])}>\n          <ResultNameHeaderCell resultName="Mean Arterial Pressure, Cuff" unit="mmHg" typeIndicator="calculated" />\n        </div>\n        <div className={cx(\'mock-flowsheet-firstcolumn-cell\')}>\n          <ResultNameHeaderCell resultName="Respiratory Rate" unit="br/min" />\n        </div>\n        <div className={cx([\'mock-flowsheet-firstcolumn-cell\', \'zebra\'])}>\n          <ResultNameHeaderCell resultName="SpO2" unit="%" />\n        </div>\n        <div className={cx(\'mock-flowsheet-firstcolumn-cell\')}>\n          <ResultNameHeaderCell resultName="Height/Length Dosing" unit="cm" />\n        </div>\n        <div className={cx([\'mock-flowsheet-firstcolumn-cell\', \'zebra\'])}>\n          <ResultNameHeaderCell resultName="Height/Length Measured" unit="cm" />\n        </div>\n        <div className={cx(\'mock-flowsheet-firstcolumn-cell\')}>\n          <ResultNameHeaderCell resultName="Weight Dosing" unit="kg" />\n        </div>\n        <div className={cx([\'mock-flowsheet-firstcolumn-cell\', \'zebra\'])}>\n          <ResultNameHeaderCell resultName="Weight Measured" unit="kg" />\n        </div>\n      </div>\n    </div>\n  );\n};\n\nexport default ResultNameColumnFlowsheetExample;\n\n')))}h.isMDXComponent=!0;var b=l(98568),v=function(e){var t=e.title,l=e.description,a=e.isExpanded;return n.createElement(c.Z,{title:t||"Result Name Header Flowsheet Example",description:l,example:n.createElement(f.Z,null),exampleCssSrc:n.createElement(b.Z,null),exampleSrc:n.createElement(h,null),isExpanded:a})},C=l(40539),R=["components"];function w(){return w=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var l=arguments[t];for(var n in l)Object.prototype.hasOwnProperty.call(l,n)&&(e[n]=l[n])}return e},w.apply(this,arguments)}function O(e,t){if(null==e)return{};var l,n,a=function(e,t){if(null==e)return{};var l,n,a={},r=Object.keys(e);for(n=0;n<r.length;n++)l=r[n],t.indexOf(l)>=0||(a[l]=e[l]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)l=r[n],t.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(a[l]=e[l])}return a}var T={};function E(e){var t=e.components,l=O(e,R);return(0,a.mdx)("wrapper",w({},T,l,{components:t,mdxType:"MDXLayout"}),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport { ResultNameHeaderCell, FlowsheetResultCell } from 'terra-clinical-result/lib/index';\nimport Table, {\n  Header,\n  Row,\n  Body,\n} from 'terra-html-table';\n\nconst defaultBloodPressureResult = [\n  {\n    id: '1',\n    systolic: {\n      eventId: '2',\n      result: {\n        value: '130',\n        unit: 'mmHg',\n      },\n      interpretation: 'high',\n    },\n    diastolic: {\n      eventId: '3',\n      result: {\n        value: '80',\n        unit: 'mmHg',\n      },\n    },\n  },\n];\n\nconst tempResult = [\n  {\n    id: '2',\n    result: {\n      value: '98.6',\n    },\n  },\n];\n\nconst hrResult = [\n  {\n    id: '3',\n    result: {\n      value: '101',\n    },\n  },\n];\n\nexport default () => (\n  <Table>\n    <Header>\n      <ResultNameHeaderCell key=\"temp\" resultName=\"Temp\" unit=\"degC\" />\n      <ResultNameHeaderCell key=\"bp\" resultName=\"BP\" unit=\"mmHg\" />\n      <ResultNameHeaderCell key=\"hr\" resultName=\"HR\" unit=\"bpm\" />\n    </Header>\n    <Body>\n      <Row>\n        <FlowsheetResultCell key=\"temp\" resultDataSet={tempResult} />\n        <FlowsheetResultCell key=\"bp\" resultDataSet={defaultBloodPressureResult} />\n        <FlowsheetResultCell key=\"hr\" resultDataSet={hrResult} />\n      </Row>\n    </Body>\n  </Table>\n);\n\n")))}E.isMDXComponent=!0;var H=function(e){var t=e.title,l=e.description,a=e.isExpanded;return n.createElement(c.Z,{title:t||"Result Name Header Cell Semantic Table Example",description:l,example:n.createElement(C.Z,null),exampleSrc:n.createElement(E,null),isExpanded:a})},k=l(78530),j=["components"];function D(){return D=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var l=arguments[t];for(var n in l)Object.prototype.hasOwnProperty.call(l,n)&&(e[n]=l[n])}return e},D.apply(this,arguments)}function P(e,t){if(null==e)return{};var l,n,a=function(e,t){if(null==e)return{};var l,n,a={},r=Object.keys(e);for(n=0;n<r.length;n++)l=r[n],t.indexOf(l)>=0||(a[l]=e[l]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)l=r[n],t.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(a[l]=e[l])}return a}var S={},M="wrapper";function W(e){var t=e.components,l=P(e,j);return(0,a.mdx)(M,D({},S,l,{components:t,mdxType:"MDXLayout"}),(0,a.mdx)(k.ZP,{mdxType:"PropsTable"},(0,a.mdx)(k.X2,{key:"ROW1",mdxType:"Row"},(0,a.mdx)(k.O,{mdxType:"PropNameCell"},"resultName"),(0,a.mdx)(k.Di,{mdxType:"TypeCell"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"string\n"))),(0,a.mdx)(k.dS,{isRequired:!0,mdxType:"RequiredCell"}),(0,a.mdx)(k.mW,{mdxType:"DefaultValueCell"},(0,a.mdx)("p",null,"none")),(0,a.mdx)(k.Ex,{mdxType:"DescriptionCell"},(0,a.mdx)("p",null,"Content to be displayed for the Result Name row label."))),(0,a.mdx)(k.X2,{key:"ROW2",mdxType:"Row"},(0,a.mdx)(k.O,{mdxType:"PropNameCell"},"unit"),(0,a.mdx)(k.Di,{mdxType:"TypeCell"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"string\n"))),(0,a.mdx)(k.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,a.mdx)(k.mW,{mdxType:"DefaultValueCell"},(0,a.mdx)("p",null,"none")),(0,a.mdx)(k.Ex,{mdxType:"DescriptionCell"},(0,a.mdx)("p",null,"Content to be displayed as the supporting Unit of Measure row label."))),(0,a.mdx)(k.X2,{key:"ROW3",mdxType:"Row"},(0,a.mdx)(k.O,{mdxType:"PropNameCell"},"fullResultName"),(0,a.mdx)(k.Di,{mdxType:"TypeCell"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"string\n"))),(0,a.mdx)(k.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,a.mdx)(k.mW,{mdxType:"DefaultValueCell"},(0,a.mdx)("p",null,"none")),(0,a.mdx)(k.Ex,{mdxType:"DescriptionCell"},(0,a.mdx)("p",null,"Full name of the displayed Result Name for accessibility tooling's usage, e.g. ",(0,a.mdx)("inlineCode",{parentName:"p"},"'Temperature'"),"."))),(0,a.mdx)(k.X2,{key:"ROW4",mdxType:"Row"},(0,a.mdx)(k.O,{mdxType:"PropNameCell"},"fullUnit"),(0,a.mdx)(k.Di,{mdxType:"TypeCell"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"string\n"))),(0,a.mdx)(k.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,a.mdx)(k.mW,{mdxType:"DefaultValueCell"},(0,a.mdx)("p",null,"none")),(0,a.mdx)(k.Ex,{mdxType:"DescriptionCell"},(0,a.mdx)("p",null,"Full name of the displayed Unit of Measure for accessibility tooling's usage, e.g. ",(0,a.mdx)("inlineCode",{parentName:"p"},"'Degrees Celsius'"),"."))),(0,a.mdx)(k.X2,{key:"ROW5",mdxType:"Row"},(0,a.mdx)(k.O,{mdxType:"PropNameCell"},"paddingStyle"),(0,a.mdx)(k.Di,{mdxType:"TypeCell"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"enum: [\n  'none'\n  'compact'\n  'standard'\n],\n"))),(0,a.mdx)(k.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,a.mdx)(k.mW,{mdxType:"DefaultValueCell"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"'compact'\n"))),(0,a.mdx)(k.Ex,{mdxType:"DescriptionCell"},(0,a.mdx)("p",null,"The padding styling to apply to the Result Name row header cell.\nOne of ",(0,a.mdx)("inlineCode",{parentName:"p"},"'none'"),", ",(0,a.mdx)("inlineCode",{parentName:"p"},"'compact'"),", or ",(0,a.mdx)("inlineCode",{parentName:"p"},"'standard'"),"."))),(0,a.mdx)(k.X2,{key:"ROW6",mdxType:"Row"},(0,a.mdx)(k.O,{mdxType:"PropNameCell"},"typeIndicator"),(0,a.mdx)(k.Di,{mdxType:"TypeCell"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"enum: [\n  'none'\n  'calculated'\n],\n"))),(0,a.mdx)(k.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,a.mdx)(k.mW,{mdxType:"DefaultValueCell"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"'none'\n"))),(0,a.mdx)(k.Ex,{mdxType:"DescriptionCell"},(0,a.mdx)("p",null,"Adds additional icon at beginning of row before the ResultName, indicating special information about results or cells.\nOne of ",(0,a.mdx)("inlineCode",{parentName:"p"},"'none'")," or ",(0,a.mdx)("inlineCode",{parentName:"p"},"'calculated'"),".")))))}W.isMDXComponent=!0;var F=["components"];function X(){return X=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var l=arguments[t];for(var n in l)Object.prototype.hasOwnProperty.call(l,n)&&(e[n]=l[n])}return e},X.apply(this,arguments)}function B(e,t){if(null==e)return{};var l,n,a=function(e,t){if(null==e)return{};var l,n,a={},r=Object.keys(e);for(n=0;n<r.length;n++)l=r[n],t.indexOf(l)>=0||(a[l]=e[l]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)l=r[n],t.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(a[l]=e[l])}return a}var Z={},q="wrapper";function I(e){var t=e.components,l=B(e,F);return(0,a.mdx)(q,X({},Z,l,{components:t,mdxType:"MDXLayout"}),(0,a.mdx)(r.C,{mdxType:"Badge"}),(0,a.mdx)("h1",{id:"result-name-header-cell"},"Result Name Header Cell"),(0,a.mdx)("p",null,"Result-Name-Header-Cell is a component of terra-clinical-result that creates a standardized view for the Result Name and Unit of Measure in the first column (row header) for each row within a flowsheet."),(0,a.mdx)("h2",{id:"getting-started"},"Getting Started"),(0,a.mdx)("ul",null,(0,a.mdx)("li",{parentName:"ul"},"Install with ",(0,a.mdx)("a",{parentName:"li",href:"https://www.npmjs.com/"},"npmjs"),":",(0,a.mdx)("ul",{parentName:"li"},(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("inlineCode",{parentName:"li"},"npm install terra-clinical-result"))))),(0,a.mdx)("h2",{id:"peer-dependencies"},"Peer Dependencies"),(0,a.mdx)("p",null,"This component requires the following peer dependencies be installed in your app for the component to properly function."),(0,a.mdx)("table",null,(0,a.mdx)("thead",{parentName:"table"},(0,a.mdx)("tr",{parentName:"thead"},(0,a.mdx)("th",{parentName:"tr",align:null},"Peer Dependency"),(0,a.mdx)("th",{parentName:"tr",align:null},"Version"))),(0,a.mdx)("tbody",{parentName:"table"},(0,a.mdx)("tr",{parentName:"tbody"},(0,a.mdx)("td",{parentName:"tr",align:null},"react"),(0,a.mdx)("td",{parentName:"tr",align:null},"^16.8.5")),(0,a.mdx)("tr",{parentName:"tbody"},(0,a.mdx)("td",{parentName:"tr",align:null},"react-dom"),(0,a.mdx)("td",{parentName:"tr",align:null},"^16.8.5")),(0,a.mdx)("tr",{parentName:"tbody"},(0,a.mdx)("td",{parentName:"tr",align:null},"react-intl"),(0,a.mdx)("td",{parentName:"tr",align:null},"^2.8.0")))),(0,a.mdx)("h2",{id:"usage"},"Usage"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-jsx"},"import { ResultNameHeaderCell } from 'terra-clinical-result/lib/index';\n")),(0,a.mdx)("h2",{id:"examples"},"Examples"),(0,a.mdx)(p,{mdxType:"Default"}),(0,a.mdx)(v,{title:"Result Name Header Cells in Sample Flowsheet",mdxType:"FlowsheetExample"}),(0,a.mdx)(H,{title:"Result Name Header Cell in Semantic Table",mdxType:"SemanticStyleHeaderNameCell"}),(0,a.mdx)("h2",{id:"result-name-header-cell-props"},"Result Name Header Cell Props"),(0,a.mdx)(W,{mdxType:"ResultNameHeaderProps"}))}I.isMDXComponent=!0},18922:function(e,t,l){t.Z=void 0;var n,a=(n=l(67294))&&n.__esModule?n:{default:n},r=l(33671);t.Z=function(){return a.default.createElement(r.ResultNameHeaderCell,{resultName:"Blood Pressure",unit:"mmHg"})}},40539:function(e,t,l){function n(e){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(e)}t.Z=void 0;var a,r=(a=l(67294))&&a.__esModule?a:{default:a},m=l(33671),s=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==n(e)&&"function"!=typeof e)return{default:e};var l=u(t);if(l&&l.has(e))return l.get(e);var a={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var m in e)if("default"!==m&&Object.prototype.hasOwnProperty.call(e,m)){var s=r?Object.getOwnPropertyDescriptor(e,m):null;s&&(s.get||s.set)?Object.defineProperty(a,m,s):a[m]=e[m]}a.default=e,l&&l.set(e,a);return a}(l(98364));function u(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,l=new WeakMap;return(u=function(e){return e?l:t})(e)}var d=[{id:"1",systolic:{eventId:"2",result:{value:"130",unit:"mmHg"},interpretation:"high"},diastolic:{eventId:"3",result:{value:"80",unit:"mmHg"}}}],o=[{id:"2",result:{value:"98.6"}}],i=[{id:"3",result:{value:"101"}}];t.Z=function(){return r.default.createElement(s.default,null,r.default.createElement(s.Header,null,r.default.createElement(m.ResultNameHeaderCell,{key:"temp",resultName:"Temp",unit:"degC"}),r.default.createElement(m.ResultNameHeaderCell,{key:"bp",resultName:"BP",unit:"mmHg"}),r.default.createElement(m.ResultNameHeaderCell,{key:"hr",resultName:"HR",unit:"bpm"})),r.default.createElement(s.Body,null,r.default.createElement(s.Row,null,r.default.createElement(m.FlowsheetResultCell,{key:"temp",resultDataSet:o}),r.default.createElement(m.FlowsheetResultCell,{key:"bp",resultDataSet:d}),r.default.createElement(m.FlowsheetResultCell,{key:"hr",resultDataSet:i}))))}},17093:function(e,t,l){t.Z=void 0;var n=d(l(67294)),a=l(33671),r=d(l(94184)),m=d(l(47166)),s=d(l(50026)),u=d(l(62547));function d(e){return e&&e.__esModule?e:{default:e}}var o=m.default.bind(u.default),i=function(){var e=n.default.useContext(s.default),t=(0,r.default)(o("mock-flowsheet-example",e.className));return n.default.createElement("div",{className:t},n.default.createElement("div",{className:o("mock-flowsheet-firstcolumn")},n.default.createElement("div",{className:o("mock-flowsheet-firstcolumn-cell")},n.default.createElement(a.ResultNameHeaderCell,{resultName:"Temp",fullResultName:"Temperature",unit:"degC",fullUnit:"Degrees Celsius"})),n.default.createElement("div",{className:o(["mock-flowsheet-firstcolumn-cell","zebra"])},n.default.createElement(a.ResultNameHeaderCell,{resultName:"HR",unit:"bpm",fullUnit:"beats per minute"})),n.default.createElement("div",{className:o("mock-flowsheet-firstcolumn-cell")},n.default.createElement(a.ResultNameHeaderCell,{resultName:"BP",unit:"mmHg"})),n.default.createElement("div",{className:o(["mock-flowsheet-firstcolumn-cell","zebra"])},n.default.createElement(a.ResultNameHeaderCell,{resultName:"Mean Arterial Pressure, Cuff",unit:"mmHg",typeIndicator:"calculated"})),n.default.createElement("div",{className:o("mock-flowsheet-firstcolumn-cell")},n.default.createElement(a.ResultNameHeaderCell,{resultName:"Respiratory Rate",unit:"br/min"})),n.default.createElement("div",{className:o(["mock-flowsheet-firstcolumn-cell","zebra"])},n.default.createElement(a.ResultNameHeaderCell,{resultName:"SpO2",unit:"%"})),n.default.createElement("div",{className:o("mock-flowsheet-firstcolumn-cell")},n.default.createElement(a.ResultNameHeaderCell,{resultName:"Height/Length Dosing",unit:"cm"})),n.default.createElement("div",{className:o(["mock-flowsheet-firstcolumn-cell","zebra"])},n.default.createElement(a.ResultNameHeaderCell,{resultName:"Height/Length Measured",unit:"cm"})),n.default.createElement("div",{className:o("mock-flowsheet-firstcolumn-cell")},n.default.createElement(a.ResultNameHeaderCell,{resultName:"Weight Dosing",unit:"kg"})),n.default.createElement("div",{className:o(["mock-flowsheet-firstcolumn-cell","zebra"])},n.default.createElement(a.ResultNameHeaderCell,{resultName:"Weight Measured",unit:"kg"}))))};t.Z=i}}]);