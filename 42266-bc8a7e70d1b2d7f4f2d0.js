"use strict";(self.webpackChunkterra_ui=self.webpackChunkterra_ui||[]).push([[42266,45627,37344,33667,96890,14041,27444,85565,3353,80858,17657,5161,19260,55571,45865,85355,33315,3193,4845,20444,26806,46647,85161,38681,17763,15318,40411,18101,38443,78996,39915,33442],{5545:function(e,l,t){function n(e){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(e)}l.Z=void 0;var a=p(t(67294)),r=function(e,l){if(!l&&e&&e.__esModule)return e;if(null===e||"object"!==n(e)&&"function"!=typeof e)return{default:e};var t=i(l);if(t&&t.has(e))return t.get(e);var a={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var m in e)if("default"!==m&&Object.prototype.hasOwnProperty.call(e,m)){var d=r?Object.getOwnPropertyDescriptor(e,m):null;d&&(d.get||d.set)?Object.defineProperty(a,m,d):a[m]=e[m]}a.default=e,t&&t.set(e,a);return a}(t(93670)),m=t(34261),d=p(t(47166)),o=p(t(25266));function i(e){if("function"!=typeof WeakMap)return null;var l=new WeakMap,t=new WeakMap;return(i=function(e){return e?t:l})(e)}function p(e){return e&&e.__esModule?e:{default:e}}var s=d.default.bind(o.default),c=function(){return a.default.createElement(r.default,null,a.default.createElement(r.Subsection,{key:"static-subsection",title:"Static Subsection"},a.default.createElement(r.Item,{key:"123"},a.default.createElement(m.Placeholder,{title:"Item 0-0",className:s("placeholder")})),a.default.createElement(r.Item,{key:"124"},a.default.createElement(m.Placeholder,{title:"Item 0-1",className:s("placeholder")})),a.default.createElement(r.Item,{key:"125"},a.default.createElement(m.Placeholder,{title:"Item 0-2",className:s("placeholder")}))),a.default.createElement(r.Subsection,{key:"collapsible-subsection",isCollapsible:!0,title:"Collapsible Subsection"},a.default.createElement(r.Item,{key:"223"},a.default.createElement(m.Placeholder,{title:"Item 1-0",className:s("placeholder")})),a.default.createElement(r.Item,{key:"224"},a.default.createElement(m.Placeholder,{title:"Item 1-1",className:s("placeholder")})),a.default.createElement(r.Item,{key:"225"},a.default.createElement(m.Placeholder,{title:"Item 1-2",className:s("placeholder")}))),a.default.createElement(r.Subsection,{key:"collapsible-subsection",isCollapsed:!0,isCollapsible:!0,title:"Collapsed Subsection"},a.default.createElement(r.Item,{key:"323"},a.default.createElement(m.Placeholder,{title:"Item 2-0",className:s("placeholder")})),a.default.createElement(r.Item,{key:"324"},a.default.createElement(m.Placeholder,{title:"Item 2-1",className:s("placeholder")})),a.default.createElement(r.Item,{key:"325"},a.default.createElement(m.Placeholder,{title:"Item 2-2",className:s("placeholder")}))))};l.Z=c},40712:function(e,l,t){t.r(l),t.d(l,{default:function(){return S}});var n=t(67294),a=t(81254),r=t(30999),m=t(5545),d=["components"];function o(){return o=Object.assign?Object.assign.bind():function(e){for(var l=1;l<arguments.length;l++){var t=arguments[l];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},o.apply(this,arguments)}function i(e,l){if(null==e)return{};var t,n,a=function(e,l){if(null==e)return{};var t,n,a={},r=Object.keys(e);for(n=0;n<r.length;n++)t=r[n],l.indexOf(t)>=0||(a[t]=e[t]);return a}(e,l);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)t=r[n],l.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p={};function s(e){var l=e.components,t=i(e,d);return(0,a.mdx)("wrapper",o({},p,t,{components:l,mdxType:"MDXLayout"}),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-jsx"},'import React from \'react\';\nimport List, { Item, Subsection } from \'terra-list/lib/index\';\nimport { Placeholder } from \'@cerner/terra-docs\';\nimport classNames from \'classnames/bind\';\nimport styles from \'./ListDocCommon.module.scss\';\n\nconst cx = classNames.bind(styles);\n\nconst ListSubsectionExample = () => (\n  <List>\n    <Subsection\n      key="static-subsection"\n      title="Static Subsection"\n    >\n      <Item key="123">\n        <Placeholder title="Item 0-0" className={cx(\'placeholder\')} />\n      </Item>\n      <Item key="124">\n        <Placeholder title="Item 0-1" className={cx(\'placeholder\')} />\n      </Item>\n      <Item key="125">\n        <Placeholder title="Item 0-2" className={cx(\'placeholder\')} />\n      </Item>\n    </Subsection>\n    <Subsection\n      key="collapsible-subsection"\n      isCollapsible\n      title="Collapsible Subsection"\n    >\n      <Item key="223">\n        <Placeholder title="Item 1-0" className={cx(\'placeholder\')} />\n      </Item>\n      <Item key="224">\n        <Placeholder title="Item 1-1" className={cx(\'placeholder\')} />\n      </Item>\n      <Item key="225">\n        <Placeholder title="Item 1-2" className={cx(\'placeholder\')} />\n      </Item>\n    </Subsection>\n    <Subsection\n      key="collapsible-subsection"\n      isCollapsed\n      isCollapsible\n      title="Collapsed Subsection"\n    >\n      <Item key="323">\n        <Placeholder title="Item 2-0" className={cx(\'placeholder\')} />\n      </Item>\n      <Item key="324">\n        <Placeholder title="Item 2-1" className={cx(\'placeholder\')} />\n      </Item>\n      <Item key="325">\n        <Placeholder title="Item 2-2" className={cx(\'placeholder\')} />\n      </Item>\n    </Subsection>\n  </List>\n);\n\nexport default ListSubsectionExample;\n\n')))}s.isMDXComponent=!0;var c=t(49271),u=t(63443),x=function(e){var l=e.title,t=e.description,a=e.isExpanded;return n.createElement(c.Z,{title:l||"List Subsection",description:t,example:n.createElement(m.Z,null),exampleCssSrc:n.createElement(u.Z,null),exampleSrc:n.createElement(s,null),isExpanded:a})},y=t(78530),f=["components"];function b(){return b=Object.assign?Object.assign.bind():function(e){for(var l=1;l<arguments.length;l++){var t=arguments[l];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},b.apply(this,arguments)}function h(e,l){if(null==e)return{};var t,n,a=function(e,l){if(null==e)return{};var t,n,a={},r=Object.keys(e);for(n=0;n<r.length;n++)t=r[n],l.indexOf(t)>=0||(a[t]=e[t]);return a}(e,l);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)t=r[n],l.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var T={},C="wrapper";function g(e){var l=e.components,t=h(e,f);return(0,a.mdx)(C,b({},T,t,{components:l,mdxType:"MDXLayout"}),(0,a.mdx)(y.ZP,{mdxType:"PropsTable"},(0,a.mdx)(y.X2,{key:"ROW1",mdxType:"Row"},(0,a.mdx)(y.O,{mdxType:"PropNameCell"},"children"),(0,a.mdx)(y.Di,{mdxType:"TypeCell"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"node\n"))),(0,a.mdx)(y.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,a.mdx)(y.mW,{mdxType:"DefaultValueCell"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"[]\n"))),(0,a.mdx)(y.Ex,{mdxType:"DescriptionCell"},(0,a.mdx)("p",null,"The children list items passed to the component."))),(0,a.mdx)(y.X2,{key:"ROW2",mdxType:"Row"},(0,a.mdx)(y.O,{mdxType:"PropNameCell"},"isCollapsed"),(0,a.mdx)(y.Di,{mdxType:"TypeCell"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"bool\n"))),(0,a.mdx)(y.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,a.mdx)(y.mW,{mdxType:"DefaultValueCell"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"false\n"))),(0,a.mdx)(y.Ex,{mdxType:"DescriptionCell"},(0,a.mdx)("p",null,"Whether or not the subsection is collapsed."))),(0,a.mdx)(y.X2,{key:"ROW3",mdxType:"Row"},(0,a.mdx)(y.O,{mdxType:"PropNameCell"},"isCollapsible"),(0,a.mdx)(y.Di,{mdxType:"TypeCell"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"bool\n"))),(0,a.mdx)(y.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,a.mdx)(y.mW,{mdxType:"DefaultValueCell"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"false\n"))),(0,a.mdx)(y.Ex,{mdxType:"DescriptionCell"},(0,a.mdx)("p",null,"Whether or not the subsection can be collapsed."))),(0,a.mdx)(y.X2,{key:"ROW4",mdxType:"Row"},(0,a.mdx)(y.O,{mdxType:"PropNameCell"},"level"),(0,a.mdx)(y.Di,{mdxType:"TypeCell"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"enum: [\n  2\n  3\n  4\n  5\n  6\n],\n"))),(0,a.mdx)(y.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,a.mdx)(y.mW,{mdxType:"DefaultValueCell"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"2\n"))),(0,a.mdx)(y.Ex,{mdxType:"DescriptionCell"},(0,a.mdx)("p",null,"Optionally sets the heading level. One of ",(0,a.mdx)("inlineCode",{parentName:"p"},"2"),", ",(0,a.mdx)("inlineCode",{parentName:"p"},"3"),", ",(0,a.mdx)("inlineCode",{parentName:"p"},"4"),", ",(0,a.mdx)("inlineCode",{parentName:"p"},"5"),", ",(0,a.mdx)("inlineCode",{parentName:"p"},"6"),"."))),(0,a.mdx)(y.X2,{key:"ROW5",mdxType:"Row"},(0,a.mdx)(y.O,{mdxType:"PropNameCell"},"metaData"),(0,a.mdx)(y.Di,{mdxType:"TypeCell"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"object\n"))),(0,a.mdx)(y.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,a.mdx)(y.mW,{mdxType:"DefaultValueCell"},(0,a.mdx)("p",null,"none")),(0,a.mdx)(y.Ex,{mdxType:"DescriptionCell"},(0,a.mdx)("p",null,"The associated metaData to be provided in the onSelect callback."))),(0,a.mdx)(y.X2,{key:"ROW6",mdxType:"Row"},(0,a.mdx)(y.O,{mdxType:"PropNameCell"},"onSelect"),(0,a.mdx)(y.Di,{mdxType:"TypeCell"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"func\n"))),(0,a.mdx)(y.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,a.mdx)(y.mW,{mdxType:"DefaultValueCell"},(0,a.mdx)("p",null,"none")),(0,a.mdx)(y.Ex,{mdxType:"DescriptionCell"},(0,a.mdx)("p",null,"Function callback for when the appropriate click or key action is performed.\nCallback contains the javascript evnt and prop metadata, e.g. onSelect(event, metaData)"))),(0,a.mdx)(y.X2,{key:"ROW7",mdxType:"Row"},(0,a.mdx)(y.O,{mdxType:"PropNameCell"},"refCallback"),(0,a.mdx)(y.Di,{mdxType:"TypeCell"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"func\n"))),(0,a.mdx)(y.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,a.mdx)(y.mW,{mdxType:"DefaultValueCell"},(0,a.mdx)("p",null,"none")),(0,a.mdx)(y.Ex,{mdxType:"DescriptionCell"},(0,a.mdx)("p",null,"Function callback passthrough for the ref of the section li."))),(0,a.mdx)(y.X2,{key:"ROW8",mdxType:"Row"},(0,a.mdx)(y.O,{mdxType:"PropNameCell"},"title"),(0,a.mdx)(y.Di,{mdxType:"TypeCell"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"string\n"))),(0,a.mdx)(y.dS,{isRequired:!0,mdxType:"RequiredCell"}),(0,a.mdx)(y.mW,{mdxType:"DefaultValueCell"},(0,a.mdx)("p",null,"none")),(0,a.mdx)(y.Ex,{mdxType:"DescriptionCell"},(0,a.mdx)("p",null,"Title text to be placed within the subsection header."))),(0,a.mdx)(y.X2,{key:"ROW9",mdxType:"Row"},(0,a.mdx)(y.O,{mdxType:"PropNameCell"},"isDraggable"),(0,a.mdx)(y.Di,{mdxType:"TypeCell"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"bool\n"))),(0,a.mdx)(y.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,a.mdx)(y.mW,{mdxType:"DefaultValueCell"},(0,a.mdx)("p",null,"none")),(0,a.mdx)(y.Ex,{mdxType:"DescriptionCell"},(0,a.mdx)("p",null,"Whether or not the list item is draggable. List Item is draggable only when it is selectable."))),(0,a.mdx)(y.X2,{key:"ROW10",mdxType:"Row"},(0,a.mdx)(y.O,{mdxType:"PropNameCell"},"onDragEnd"),(0,a.mdx)(y.Di,{mdxType:"TypeCell"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"func\n"))),(0,a.mdx)(y.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,a.mdx)(y.mW,{mdxType:"DefaultValueCell"},(0,a.mdx)("p",null,"none")),(0,a.mdx)(y.Ex,{mdxType:"DescriptionCell"},(0,a.mdx)("p",null,"Function callback when the Item is dropped. Callback contains the DropResult of result object and provided object, e.g. onDragEnd(result, provided).")))))}g.isMDXComponent=!0;var N=["components"];function O(){return O=Object.assign?Object.assign.bind():function(e){for(var l=1;l<arguments.length;l++){var t=arguments[l];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},O.apply(this,arguments)}function v(e,l){if(null==e)return{};var t,n,a=function(e,l){if(null==e)return{};var t,n,a={},r=Object.keys(e);for(n=0;n<r.length;n++)t=r[n],l.indexOf(t)>=0||(a[t]=e[t]);return a}(e,l);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)t=r[n],l.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var k={},I="wrapper";function S(e){var l=e.components,t=v(e,N);return(0,a.mdx)(I,O({},k,t,{components:l,mdxType:"MDXLayout"}),(0,a.mdx)(r.C,{mdxType:"Badge"}),(0,a.mdx)("h1",{id:"list-subsection"},"List Subsection"),(0,a.mdx)("p",null,"The list subsection component creates a subsection header and layouts it out with the passed child list items. The subsection provides the ability to display and collapse a subsection within a logical group. The list subsection will render as a flat list."),(0,a.mdx)("h2",{id:"usage"},"Usage"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-jsx"},"import List, { Item, Subsection } from 'terra-list/lib/List';\\\n")),(0,a.mdx)("h2",{id:"examples"},"Examples"),(0,a.mdx)(x,{mdxType:"ListSubsectionExample"}),(0,a.mdx)("h2",{id:"list-subsection-props"},"List Subsection Props"),(0,a.mdx)(g,{mdxType:"ListSubsectionPropsTable"}))}S.isMDXComponent=!0}}]);