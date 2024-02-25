"use strict";(self.webpackChunkterra_ui=self.webpackChunkterra_ui||[]).push([[51632],{12883:function(e,t,l){var n=l(24994),r=l(73738);t.YZ=t.dt=t.Hd=t.NZ=void 0,Object.defineProperty(t,"fI",{enumerable:!0,get:function(){return i.Row}}),t.Ay=t.$d=void 0;var a=c(l(96540)),u=n(l(5556)),d=n(l(67967)),o=l(92912),i=c(l(26984)),m=n(l(89744));function s(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,l=new WeakMap;return(s=function(e){return e?l:t})(e)}function c(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=r(e)&&"function"!=typeof e)return{default:e};var l=s(t);if(l&&l.has(e))return l.get(e);var n={__proto__:null},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var u in e)if("default"!==u&&Object.prototype.hasOwnProperty.call(e,u)){var d=a?Object.getOwnPropertyDescriptor(e,u):null;d&&(d.get||d.set)?Object.defineProperty(n,u,d):n[u]=e[u]}return n.default=e,l&&l.set(e,n),n}var p=d.default.bind(m.default),f={children:u.default.node},y={isRequired:u.default.bool};(t.dt=function(e){var t=e.children;return a.default.createElement(i.Cell,{className:p("bold")},t)}).propTypes=f,(t.$d=function(e){var t=e.children;return a.default.createElement(i.Cell,{className:p("code-block-override")},t)}).propTypes=f,(t.YZ=function(e){var t=e.isRequired;return a.default.createElement(i.Cell,{className:p([t?["required"]:[]])},t?"required":"optional")}).propTypes=y,(t.NZ=function(e){var t=e.children;return a.default.createElement(i.Cell,{className:p("code-block-override")},t)}).propTypes=f,(t.Hd=function(e){var t=e.children;return a.default.createElement(i.Cell,null,t)}).propTypes=f;var x=function(e){var t=e.children,l=(0,a.useContext)(o.ThemeContext);return a.default.createElement(i.default,{paddingStyle:"compact",className:p("table",l.className)},a.default.createElement(i.Header,{className:p("header")},a.default.createElement(i.HeaderCell,null,"Prop"),a.default.createElement(i.HeaderCell,null,"Type"),a.default.createElement(i.HeaderCell,null,"Required"),a.default.createElement(i.HeaderCell,null,"Default"),a.default.createElement(i.HeaderCell,null,"Description")),a.default.createElement(i.Body,null,t))};x.propTypes=f;t.Ay=x},51632:function(e,t,l){l.r(t),l.d(t,{default:function(){return W}});var n=l(96540),r=l(36665),a=l(19152),u=l(74432),d=["components"];function o(){return o=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var l=arguments[t];for(var n in l)Object.prototype.hasOwnProperty.call(l,n)&&(e[n]=l[n])}return e},o.apply(this,arguments)}function i(e,t){if(null==e)return{};var l,n,r=function(e,t){if(null==e)return{};var l,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)l=a[n],t.indexOf(l)>=0||(r[l]=e[l]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)l=a[n],t.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(r[l]=e[l])}return r}var m={};function s(e){var t=e.components,l=i(e,d);return(0,r.mdx)("wrapper",o({},m,l,{components:t,mdxType:"MDXLayout"}),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport { ResultNameHeaderCell } from 'terra-clinical-result/lib/index';\n\nexport default () => <ResultNameHeaderCell resultName=\"Blood Pressure\" unit=\"mmHg\" />;\n\n")))}s.isMDXComponent=!0;var c=l(201),p=function(e){var t=e.title,l=e.description,r=e.isExpanded;return n.createElement(c.A,{title:t||"Result Name Header Cell",description:l,example:n.createElement(u.A,null),exampleSrc:n.createElement(s,null),isExpanded:r})},f=l(49415),y=["components"];function x(){return x=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var l=arguments[t];for(var n in l)Object.prototype.hasOwnProperty.call(l,n)&&(e[n]=l[n])}return e},x.apply(this,arguments)}function b(e,t){if(null==e)return{};var l,n,r=function(e,t){if(null==e)return{};var l,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)l=a[n],t.indexOf(l)>=0||(r[l]=e[l]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)l=a[n],t.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(r[l]=e[l])}return r}var v={};function h(e){var t=e.components,l=b(e,y);return(0,r.mdx)("wrapper",x({},v,l,{components:t,mdxType:"MDXLayout"}),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-jsx"},'import React from \'react\';\nimport { ResultNameHeaderCell } from \'terra-clinical-result/lib\';\nimport classNames from \'classnames\';\nimport classNamesBind from \'classnames/bind\';\nimport ThemeContext from \'terra-theme-context\';\nimport styles from \'../Examples.module.scss\';\n\nconst cx = classNamesBind.bind(styles);\n\nconst ResultNameColumnFlowsheetExample = () => {\n  const theme = React.useContext(ThemeContext);\n  const mockFlowsheetClassnames = classNames(\n    cx(\n      \'mock-flowsheet-example\',\n      theme.className,\n    ),\n  );\n\n  return (\n    <div className={mockFlowsheetClassnames}>\n      <div className={cx(\'mock-flowsheet-firstcolumn\')}>\n        <div className={cx(\'mock-flowsheet-firstcolumn-cell\')}>\n          <ResultNameHeaderCell resultName="Temp" fullResultName="Temperature" unit="degC" fullUnit="Degrees Celsius" />\n        </div>\n        <div className={cx([\'mock-flowsheet-firstcolumn-cell\', \'zebra\'])}>\n          <ResultNameHeaderCell resultName="HR" unit="bpm" fullUnit="beats per minute" />\n        </div>\n        <div className={cx(\'mock-flowsheet-firstcolumn-cell\')}>\n          <ResultNameHeaderCell resultName="BP" unit="mmHg" />\n        </div>\n        <div className={cx([\'mock-flowsheet-firstcolumn-cell\', \'zebra\'])}>\n          <ResultNameHeaderCell resultName="Mean Arterial Pressure, Cuff" unit="mmHg" typeIndicator="calculated" />\n        </div>\n        <div className={cx(\'mock-flowsheet-firstcolumn-cell\')}>\n          <ResultNameHeaderCell resultName="Respiratory Rate" unit="br/min" />\n        </div>\n        <div className={cx([\'mock-flowsheet-firstcolumn-cell\', \'zebra\'])}>\n          <ResultNameHeaderCell resultName="SpO2" unit="%" />\n        </div>\n        <div className={cx(\'mock-flowsheet-firstcolumn-cell\')}>\n          <ResultNameHeaderCell resultName="Height/Length Dosing" unit="cm" />\n        </div>\n        <div className={cx([\'mock-flowsheet-firstcolumn-cell\', \'zebra\'])}>\n          <ResultNameHeaderCell resultName="Height/Length Measured" unit="cm" />\n        </div>\n        <div className={cx(\'mock-flowsheet-firstcolumn-cell\')}>\n          <ResultNameHeaderCell resultName="Weight Dosing" unit="kg" />\n        </div>\n        <div className={cx([\'mock-flowsheet-firstcolumn-cell\', \'zebra\'])}>\n          <ResultNameHeaderCell resultName="Weight Measured" unit="kg" />\n        </div>\n      </div>\n    </div>\n  );\n};\n\nexport default ResultNameColumnFlowsheetExample;\n\n')))}h.isMDXComponent=!0;var g=l(29269),N=function(e){var t=e.title,l=e.description,r=e.isExpanded;return n.createElement(c.A,{title:t||"Result Name Header Flowsheet Example",description:l,example:n.createElement(f.A,null),exampleCssSrc:n.createElement(g.A,null),exampleSrc:n.createElement(h,null),isExpanded:r})},O=l(41722),C=["components"];function w(){return w=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var l=arguments[t];for(var n in l)Object.prototype.hasOwnProperty.call(l,n)&&(e[n]=l[n])}return e},w.apply(this,arguments)}function R(e,t){if(null==e)return{};var l,n,r=function(e,t){if(null==e)return{};var l,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)l=a[n],t.indexOf(l)>=0||(r[l]=e[l]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)l=a[n],t.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(r[l]=e[l])}return r}var _={};function j(e){var t=e.components,l=R(e,C);return(0,r.mdx)("wrapper",w({},_,l,{components:t,mdxType:"MDXLayout"}),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport { ResultNameHeaderCell, FlowsheetResultCell } from 'terra-clinical-result/lib/index';\nimport Table, {\n  Header,\n  Row,\n  Body,\n} from 'terra-html-table';\n\nconst defaultBloodPressureResult = [\n  {\n    id: '1',\n    systolic: {\n      eventId: '2',\n      result: {\n        value: '130',\n        unit: 'mmHg',\n      },\n      interpretation: 'high',\n    },\n    diastolic: {\n      eventId: '3',\n      result: {\n        value: '80',\n        unit: 'mmHg',\n      },\n    },\n  },\n];\n\nconst tempResult = [\n  {\n    id: '2',\n    result: {\n      value: '98.6',\n    },\n  },\n];\n\nconst hrResult = [\n  {\n    id: '3',\n    result: {\n      value: '101',\n    },\n  },\n];\n\nexport default () => (\n  <Table>\n    <Header>\n      <ResultNameHeaderCell key=\"temp\" resultName=\"Temp\" unit=\"degC\" />\n      <ResultNameHeaderCell key=\"bp\" resultName=\"BP\" unit=\"mmHg\" />\n      <ResultNameHeaderCell key=\"hr\" resultName=\"HR\" unit=\"bpm\" />\n    </Header>\n    <Body>\n      <Row>\n        <FlowsheetResultCell key=\"temp\" resultDataSet={tempResult} />\n        <FlowsheetResultCell key=\"bp\" resultDataSet={defaultBloodPressureResult} />\n        <FlowsheetResultCell key=\"hr\" resultDataSet={hrResult} />\n      </Row>\n    </Body>\n  </Table>\n);\n\n")))}j.isMDXComponent=!0;var T=function(e){var t=e.title,l=e.description,r=e.isExpanded;return n.createElement(c.A,{title:t||"Result Name Header Cell Semantic Table Example",description:l,example:n.createElement(O.A,null),exampleSrc:n.createElement(j,null),isExpanded:r})},E=l(12883),P=["components"];function H(){return H=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var l=arguments[t];for(var n in l)Object.prototype.hasOwnProperty.call(l,n)&&(e[n]=l[n])}return e},H.apply(this,arguments)}function k(e,t){if(null==e)return{};var l,n,r=function(e,t){if(null==e)return{};var l,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)l=a[n],t.indexOf(l)>=0||(r[l]=e[l]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)l=a[n],t.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(r[l]=e[l])}return r}var S={},M="wrapper";function D(e){var t=e.components,l=k(e,P);return(0,r.mdx)(M,H({},S,l,{components:t,mdxType:"MDXLayout"}),(0,r.mdx)(E.Ay,{mdxType:"PropsTable"},(0,r.mdx)(E.fI,{key:"ROW1",mdxType:"Row"},(0,r.mdx)(E.dt,{mdxType:"PropNameCell"},"resultName"),(0,r.mdx)(E.$d,{mdxType:"TypeCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"string\n"))),(0,r.mdx)(E.YZ,{isRequired:!0,mdxType:"RequiredCell"}),(0,r.mdx)(E.NZ,{mdxType:"DefaultValueCell"},(0,r.mdx)("p",null,"none")),(0,r.mdx)(E.Hd,{mdxType:"DescriptionCell"},(0,r.mdx)("p",null,"Content to be displayed for the Result Name row label."))),(0,r.mdx)(E.fI,{key:"ROW2",mdxType:"Row"},(0,r.mdx)(E.dt,{mdxType:"PropNameCell"},"unit"),(0,r.mdx)(E.$d,{mdxType:"TypeCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"string\n"))),(0,r.mdx)(E.YZ,{isRequired:!1,mdxType:"RequiredCell"}),(0,r.mdx)(E.NZ,{mdxType:"DefaultValueCell"},(0,r.mdx)("p",null,"none")),(0,r.mdx)(E.Hd,{mdxType:"DescriptionCell"},(0,r.mdx)("p",null,"Content to be displayed as the supporting Unit of Measure row label."))),(0,r.mdx)(E.fI,{key:"ROW3",mdxType:"Row"},(0,r.mdx)(E.dt,{mdxType:"PropNameCell"},"fullResultName"),(0,r.mdx)(E.$d,{mdxType:"TypeCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"string\n"))),(0,r.mdx)(E.YZ,{isRequired:!1,mdxType:"RequiredCell"}),(0,r.mdx)(E.NZ,{mdxType:"DefaultValueCell"},(0,r.mdx)("p",null,"none")),(0,r.mdx)(E.Hd,{mdxType:"DescriptionCell"},(0,r.mdx)("p",null,"Full name of the displayed Result Name for accessibility tooling's usage, e.g. ",(0,r.mdx)("inlineCode",{parentName:"p"},"'Temperature'"),"."))),(0,r.mdx)(E.fI,{key:"ROW4",mdxType:"Row"},(0,r.mdx)(E.dt,{mdxType:"PropNameCell"},"fullUnit"),(0,r.mdx)(E.$d,{mdxType:"TypeCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"string\n"))),(0,r.mdx)(E.YZ,{isRequired:!1,mdxType:"RequiredCell"}),(0,r.mdx)(E.NZ,{mdxType:"DefaultValueCell"},(0,r.mdx)("p",null,"none")),(0,r.mdx)(E.Hd,{mdxType:"DescriptionCell"},(0,r.mdx)("p",null,"Full name of the displayed Unit of Measure for accessibility tooling's usage, e.g. ",(0,r.mdx)("inlineCode",{parentName:"p"},"'Degrees Celsius'"),"."))),(0,r.mdx)(E.fI,{key:"ROW5",mdxType:"Row"},(0,r.mdx)(E.dt,{mdxType:"PropNameCell"},"paddingStyle"),(0,r.mdx)(E.$d,{mdxType:"TypeCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"enum: [\n  'none'\n  'compact'\n  'standard'\n],\n"))),(0,r.mdx)(E.YZ,{isRequired:!1,mdxType:"RequiredCell"}),(0,r.mdx)(E.NZ,{mdxType:"DefaultValueCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"'compact'\n"))),(0,r.mdx)(E.Hd,{mdxType:"DescriptionCell"},(0,r.mdx)("p",null,"The padding styling to apply to the Result Name row header cell.\nOne of ",(0,r.mdx)("inlineCode",{parentName:"p"},"'none'"),", ",(0,r.mdx)("inlineCode",{parentName:"p"},"'compact'"),", or ",(0,r.mdx)("inlineCode",{parentName:"p"},"'standard'"),"."))),(0,r.mdx)(E.fI,{key:"ROW6",mdxType:"Row"},(0,r.mdx)(E.dt,{mdxType:"PropNameCell"},"typeIndicator"),(0,r.mdx)(E.$d,{mdxType:"TypeCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"enum: [\n  'none'\n  'calculated'\n],\n"))),(0,r.mdx)(E.YZ,{isRequired:!1,mdxType:"RequiredCell"}),(0,r.mdx)(E.NZ,{mdxType:"DefaultValueCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"'none'\n"))),(0,r.mdx)(E.Hd,{mdxType:"DescriptionCell"},(0,r.mdx)("p",null,"Adds additional icon at beginning of row before the ResultName, indicating special information about results or cells.\nOne of ",(0,r.mdx)("inlineCode",{parentName:"p"},"'none'")," or ",(0,r.mdx)("inlineCode",{parentName:"p"},"'calculated'"),".")))))}D.isMDXComponent=!0;var I=["components"];function q(){return q=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var l=arguments[t];for(var n in l)Object.prototype.hasOwnProperty.call(l,n)&&(e[n]=l[n])}return e},q.apply(this,arguments)}function A(e,t){if(null==e)return{};var l,n,r=function(e,t){if(null==e)return{};var l,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)l=a[n],t.indexOf(l)>=0||(r[l]=e[l]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)l=a[n],t.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(r[l]=e[l])}return r}var B={},F="wrapper";function W(e){var t=e.components,l=A(e,I);return(0,r.mdx)(F,q({},B,l,{components:t,mdxType:"MDXLayout"}),(0,r.mdx)(a.E,{mdxType:"Badge"}),(0,r.mdx)("h1",{id:"result-name-header-cell"},"Result Name Header Cell"),(0,r.mdx)("p",null,"Result-Name-Header-Cell is a component of terra-clinical-result that creates a standardized view for the Result Name and Unit of Measure in the first column (row header) for each row within a flowsheet."),(0,r.mdx)("h2",{id:"getting-started"},"Getting Started"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},"Install with ",(0,r.mdx)("a",{parentName:"li",href:"https://www.npmjs.com/"},"npmjs"),":",(0,r.mdx)("ul",{parentName:"li"},(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("inlineCode",{parentName:"li"},"npm install terra-clinical-result"))))),(0,r.mdx)("h2",{id:"peer-dependencies"},"Peer Dependencies"),(0,r.mdx)("p",null,"This component requires the following peer dependencies be installed in your app for the component to properly function."),(0,r.mdx)("table",null,(0,r.mdx)("thead",{parentName:"table"},(0,r.mdx)("tr",{parentName:"thead"},(0,r.mdx)("th",{parentName:"tr",align:null},"Peer Dependency"),(0,r.mdx)("th",{parentName:"tr",align:null},"Version"))),(0,r.mdx)("tbody",{parentName:"table"},(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"react"),(0,r.mdx)("td",{parentName:"tr",align:null},"^16.8.5")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"react-dom"),(0,r.mdx)("td",{parentName:"tr",align:null},"^16.8.5")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"react-intl"),(0,r.mdx)("td",{parentName:"tr",align:null},"^2.8.0")))),(0,r.mdx)("h2",{id:"usage"},"Usage"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-jsx"},"import { ResultNameHeaderCell } from 'terra-clinical-result/lib/index';\n")),(0,r.mdx)("h2",{id:"examples"},"Examples"),(0,r.mdx)(p,{mdxType:"Default"}),(0,r.mdx)(N,{title:"Result Name Header Cells in Sample Flowsheet",mdxType:"FlowsheetExample"}),(0,r.mdx)(T,{title:"Result Name Header Cell in Semantic Table",mdxType:"SemanticStyleHeaderNameCell"}),(0,r.mdx)("h2",{id:"result-name-header-cell-props"},"Result Name Header Cell Props"),(0,r.mdx)(D,{mdxType:"ResultNameHeaderProps"}))}W.isMDXComponent=!0},89744:function(e,t,l){l.r(t),t.default={"clinical-lowlight-theme":"PropsTable-module__clinical-lowlight-theme___3pa8J","orion-fusion-theme":"PropsTable-module__orion-fusion-theme___FtP5r",bold:"PropsTable-module__bold___-z9Sz",table:"PropsTable-module__table___rzW-v",required:"PropsTable-module__required___ev190","code-block-override":"PropsTable-module__code-block-override___fF0JK"}},78482:function(e,t,l){l.r(t),t.default={"clinical-lowlight-theme":"Table-module__clinical-lowlight-theme___PqYJ8","orion-fusion-theme":"Table-module__orion-fusion-theme___d9rxf",table:"Table-module__table___eg2Mi","padding-standard":"Table-module__padding-standard___BfbC-","padding-compact":"Table-module__padding-compact___Yus6Z",striped:"Table-module__striped___n8xJe"}},74432:function(e,t,l){t.A=void 0;var n,r=(n=l(96540))&&n.__esModule?n:{default:n},a=l(76421);t.A=function(){return r.default.createElement(a.ResultNameHeaderCell,{resultName:"Blood Pressure",unit:"mmHg"})}},41722:function(e,t,l){function n(e){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(e)}t.A=void 0;var r,a=(r=l(96540))&&r.__esModule?r:{default:r},u=l(76421),d=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==n(e)&&"function"!=typeof e)return{default:e};var l=o(t);if(l&&l.has(e))return l.get(e);var r={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var u in e)if("default"!==u&&Object.prototype.hasOwnProperty.call(e,u)){var d=a?Object.getOwnPropertyDescriptor(e,u):null;d&&(d.get||d.set)?Object.defineProperty(r,u,d):r[u]=e[u]}r.default=e,l&&l.set(e,r);return r}(l(26984));function o(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,l=new WeakMap;return(o=function(e){return e?l:t})(e)}var i=[{id:"1",systolic:{eventId:"2",result:{value:"130",unit:"mmHg"},interpretation:"high"},diastolic:{eventId:"3",result:{value:"80",unit:"mmHg"}}}],m=[{id:"2",result:{value:"98.6"}}],s=[{id:"3",result:{value:"101"}}];t.A=function(){return a.default.createElement(d.default,null,a.default.createElement(d.Header,null,a.default.createElement(u.ResultNameHeaderCell,{key:"temp",resultName:"Temp",unit:"degC"}),a.default.createElement(u.ResultNameHeaderCell,{key:"bp",resultName:"BP",unit:"mmHg"}),a.default.createElement(u.ResultNameHeaderCell,{key:"hr",resultName:"HR",unit:"bpm"})),a.default.createElement(d.Body,null,a.default.createElement(d.Row,null,a.default.createElement(u.FlowsheetResultCell,{key:"temp",resultDataSet:m}),a.default.createElement(u.FlowsheetResultCell,{key:"bp",resultDataSet:i}),a.default.createElement(u.FlowsheetResultCell,{key:"hr",resultDataSet:s}))))}},49415:function(e,t,l){t.A=void 0;var n=i(l(96540)),r=l(76421),a=i(l(46942)),u=i(l(67967)),d=i(l(52103)),o=i(l(97753));function i(e){return e&&e.__esModule?e:{default:e}}var m=u.default.bind(o.default),s=function(){var e=n.default.useContext(d.default),t=(0,a.default)(m("mock-flowsheet-example",e.className));return n.default.createElement("div",{className:t},n.default.createElement("div",{className:m("mock-flowsheet-firstcolumn")},n.default.createElement("div",{className:m("mock-flowsheet-firstcolumn-cell")},n.default.createElement(r.ResultNameHeaderCell,{resultName:"Temp",fullResultName:"Temperature",unit:"degC",fullUnit:"Degrees Celsius"})),n.default.createElement("div",{className:m(["mock-flowsheet-firstcolumn-cell","zebra"])},n.default.createElement(r.ResultNameHeaderCell,{resultName:"HR",unit:"bpm",fullUnit:"beats per minute"})),n.default.createElement("div",{className:m("mock-flowsheet-firstcolumn-cell")},n.default.createElement(r.ResultNameHeaderCell,{resultName:"BP",unit:"mmHg"})),n.default.createElement("div",{className:m(["mock-flowsheet-firstcolumn-cell","zebra"])},n.default.createElement(r.ResultNameHeaderCell,{resultName:"Mean Arterial Pressure, Cuff",unit:"mmHg",typeIndicator:"calculated"})),n.default.createElement("div",{className:m("mock-flowsheet-firstcolumn-cell")},n.default.createElement(r.ResultNameHeaderCell,{resultName:"Respiratory Rate",unit:"br/min"})),n.default.createElement("div",{className:m(["mock-flowsheet-firstcolumn-cell","zebra"])},n.default.createElement(r.ResultNameHeaderCell,{resultName:"SpO2",unit:"%"})),n.default.createElement("div",{className:m("mock-flowsheet-firstcolumn-cell")},n.default.createElement(r.ResultNameHeaderCell,{resultName:"Height/Length Dosing",unit:"cm"})),n.default.createElement("div",{className:m(["mock-flowsheet-firstcolumn-cell","zebra"])},n.default.createElement(r.ResultNameHeaderCell,{resultName:"Height/Length Measured",unit:"cm"})),n.default.createElement("div",{className:m("mock-flowsheet-firstcolumn-cell")},n.default.createElement(r.ResultNameHeaderCell,{resultName:"Weight Dosing",unit:"kg"})),n.default.createElement("div",{className:m(["mock-flowsheet-firstcolumn-cell","zebra"])},n.default.createElement(r.ResultNameHeaderCell,{resultName:"Weight Measured",unit:"kg"}))))};t.A=s},85444:function(e,t,l){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=m(l(96540)),r=m(l(5556)),a=m(l(46942)),u=m(l(67967)),d=m(l(52103)),o=m(l(78482)),i=["children","disableStripes","paddingStyle"];function m(e){return e&&e.__esModule?e:{default:e}}function s(){return s=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var l=arguments[t];for(var n in l)Object.prototype.hasOwnProperty.call(l,n)&&(e[n]=l[n])}return e},s.apply(this,arguments)}function c(e,t){if(null==e)return{};var l,n,r=function(e,t){if(null==e)return{};var l,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)l=a[n],t.indexOf(l)>=0||(r[l]=e[l]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)l=a[n],t.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(r[l]=e[l])}return r}var p=u.default.bind(o.default),f={children:r.default.node.isRequired,disableStripes:r.default.bool,paddingStyle:r.default.oneOf(["none","standard","compact"])},y=function(e){var t=e.children,l=e.disableStripes,r=e.paddingStyle,u=c(e,i),o=n.default.useContext(d.default),m=(0,a.default)(p("table",{striped:!l},{"padding-standard":"standard"===r},{"padding-compact":"compact"===r},o.className),u.className);return n.default.createElement("table",s({},u,{className:m}),t)};y.propTypes=f,y.defaultProps={disableStripes:!1,paddingStyle:"none"};t.default=y},61452:function(e,t,l){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=u(l(96540)),r=u(l(5556)),a=["children"];function u(e){return e&&e.__esModule?e:{default:e}}function d(e,t){if(null==e)return{};var l,n,r=function(e,t){if(null==e)return{};var l,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)l=a[n],t.indexOf(l)>=0||(r[l]=e[l]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)l=a[n],t.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(r[l]=e[l])}return r}var o={children:r.default.node},i=function(e){var t=e.children,l=d(e,a);return n.default.createElement("tbody",l,t)};i.propTypes=o,i.defaultProps={children:[]};t.default=i},86472:function(e,t,l){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=u(l(96540)),r=u(l(5556)),a=["children"];function u(e){return e&&e.__esModule?e:{default:e}}function d(e,t){if(null==e)return{};var l,n,r=function(e,t){if(null==e)return{};var l,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)l=a[n],t.indexOf(l)>=0||(r[l]=e[l]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)l=a[n],t.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(r[l]=e[l])}return r}var o={children:r.default.node},i=function(e){var t=e.children,l=d(e,a);return n.default.createElement("td",l,t)};i.propTypes=o,i.defaultProps={children:[]};t.default=i},97441:function(e,t,l){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=d(l(96540)),r=d(l(5556)),a=d(l(10767)),u=["children"];function d(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(null==e)return{};var l,n,r=function(e,t){if(null==e)return{};var l,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)l=a[n],t.indexOf(l)>=0||(r[l]=e[l]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)l=a[n],t.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(r[l]=e[l])}return r}var i={children:r.default.node},m=function(e){var t=e.children,l=o(e,u);return n.default.createElement("thead",l,n.default.createElement("tr",null,a.default.addScope(t,"col")))};m.propTypes=i,m.defaultProps={children:[]};t.default=m},22417:function(e,t,l){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=u(l(96540)),r=u(l(5556)),a=["children"];function u(e){return e&&e.__esModule?e:{default:e}}function d(e,t){if(null==e)return{};var l,n,r=function(e,t){if(null==e)return{};var l,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)l=a[n],t.indexOf(l)>=0||(r[l]=e[l]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)l=a[n],t.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(r[l]=e[l])}return r}var o={children:r.default.node},i=function(e){var t=e.children,l=d(e,a);return n.default.createElement("th",l,t)};i.propTypes=o,i.defaultProps={children:[]};t.default=i},36142:function(e,t,l){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=i(l(96540)),r=i(l(5556)),a=i(l(67967)),u=i(l(78482)),d=i(l(10767)),o=["children"];function i(e){return e&&e.__esModule?e:{default:e}}function m(){return m=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var l=arguments[t];for(var n in l)Object.prototype.hasOwnProperty.call(l,n)&&(e[n]=l[n])}return e},m.apply(this,arguments)}function s(e,t){if(null==e)return{};var l,n,r=function(e,t){if(null==e)return{};var l,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)l=a[n],t.indexOf(l)>=0||(r[l]=e[l]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)l=a[n],t.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(r[l]=e[l])}return r}var c=a.default.bind(u.default),p={children:r.default.node},f=function(e){var t=e.children,l=s(e,o),r=c(["row"]);return n.default.createElement("tr",m({},l,{className:l.className?"".concat(r," ").concat(l.className):r}),d.default.addScope(t,"row"))};f.propTypes=p,f.defaultProps={children:[]};t.default=f},10767:function(e,t,l){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n,r=(n=l(96540))&&n.__esModule?n:{default:n};var a={addScope:function(e,t){var l=[];return r.default.Children.forEach(e,(function(e){l.push(r.default.cloneElement(e,{scope:"TableHeaderCell"===e.type.name?t:void 0}))})),l}};t.default=a},26984:function(e,t,l){Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"Body",{enumerable:!0,get:function(){return r.default}}),Object.defineProperty(t,"Cell",{enumerable:!0,get:function(){return u.default}}),Object.defineProperty(t,"Header",{enumerable:!0,get:function(){return d.default}}),Object.defineProperty(t,"HeaderCell",{enumerable:!0,get:function(){return o.default}}),Object.defineProperty(t,"Row",{enumerable:!0,get:function(){return a.default}}),t.default=void 0;var n=i(l(85444)),r=i(l(61452)),a=i(l(36142)),u=i(l(86472)),d=i(l(97441)),o=i(l(22417));function i(e){return e&&e.__esModule?e:{default:e}}t.default=n.default}}]);