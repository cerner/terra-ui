"use strict";(self.webpackChunkterra_ui=self.webpackChunkterra_ui||[]).push([[42266,45627,37344,33667,96890,14041,27444,85565,3353,80858,17657,5161,19260,55571,45865,85355,33315,3193,4845,20444,26806,46647,85161,38681,15318,40411,18101,38443,78996,39915,33442],{5545:function(e,l,t){function a(e){return a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a(e)}l.Z=void 0;var n=s(t(67294)),r=function(e,l){if(!l&&e&&e.__esModule)return e;if(null===e||"object"!=a(e)&&"function"!=typeof e)return{default:e};var t=i(l);if(t&&t.has(e))return t.get(e);var n={__proto__:null},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var m in e)if("default"!==m&&Object.prototype.hasOwnProperty.call(e,m)){var d=r?Object.getOwnPropertyDescriptor(e,m):null;d&&(d.get||d.set)?Object.defineProperty(n,m,d):n[m]=e[m]}return n.default=e,t&&t.set(e,n),n}(t(93670)),m=t(34261),d=s(t(47166)),o=s(t(25266));function i(e){if("function"!=typeof WeakMap)return null;var l=new WeakMap,t=new WeakMap;return(i=function(e){return e?t:l})(e)}function s(e){return e&&e.__esModule?e:{default:e}}var c=d.default.bind(o.default);l.Z=function(){return n.default.createElement(r.default,null,n.default.createElement(r.Subsection,{key:"static-subsection",title:"Static Subsection"},n.default.createElement(r.Item,{key:"123",isSelectable:!0},n.default.createElement(m.Placeholder,{title:"Item 0-0",className:c("placeholder")})),n.default.createElement(r.Item,{key:"124",isSelectable:!0},n.default.createElement(m.Placeholder,{title:"Item 0-1",className:c("placeholder")})),n.default.createElement(r.Item,{key:"125",isSelectable:!0},n.default.createElement(m.Placeholder,{title:"Item 0-2",className:c("placeholder")}))),n.default.createElement(r.Subsection,{key:"collapsible-subsection",isCollapsible:!0,title:"Collapsible Subsection"},n.default.createElement(r.Item,{key:"223",isSelectable:!0},n.default.createElement(m.Placeholder,{title:"Item 1-0",className:c("placeholder")})),n.default.createElement(r.Item,{key:"224",isSelectable:!0},n.default.createElement(m.Placeholder,{title:"Item 1-1",className:c("placeholder")})),n.default.createElement(r.Item,{key:"225",isSelectable:!0},n.default.createElement(m.Placeholder,{title:"Item 1-2",className:c("placeholder")}))),n.default.createElement(r.Subsection,{key:"collapsible-subsection",isCollapsed:!0,isCollapsible:!0,title:"Collapsed Subsection"},n.default.createElement(r.Item,{key:"323",isSelectable:!0},n.default.createElement(m.Placeholder,{title:"Item 2-0",className:c("placeholder")})),n.default.createElement(r.Item,{key:"324",isSelectable:!0},n.default.createElement(m.Placeholder,{title:"Item 2-1",className:c("placeholder")})),n.default.createElement(r.Item,{key:"325",isSelectable:!0},n.default.createElement(m.Placeholder,{title:"Item 2-2",className:c("placeholder")}))))}},40712:function(e,l,t){t.r(l),t.d(l,{default:function(){return I}});var a=t(67294),n=t(81254),r=t(30999),m=t(5545),d=["components"];function o(){return o=Object.assign?Object.assign.bind():function(e){for(var l=1;l<arguments.length;l++){var t=arguments[l];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},o.apply(this,arguments)}function i(e,l){if(null==e)return{};var t,a,n=function(e,l){if(null==e)return{};var t,a,n={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],l.indexOf(t)>=0||(n[t]=e[t]);return n}(e,l);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],l.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var s={};function c(e){var l=e.components,t=i(e,d);return(0,n.mdx)("wrapper",o({},s,t,{components:l,mdxType:"MDXLayout"}),(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-jsx"},'import React from \'react\';\nimport List, { Item, Subsection } from \'terra-list/lib/index\';\nimport { Placeholder } from \'@cerner/terra-docs\';\nimport classNames from \'classnames/bind\';\nimport styles from \'./ListDocCommon.module.scss\';\n\nconst cx = classNames.bind(styles);\n\nconst ListSubsectionExample = () => (\n  <List>\n    <Subsection\n      key="static-subsection"\n      title="Static Subsection"\n    >\n      <Item key="123" isSelectable>\n        <Placeholder title="Item 0-0" className={cx(\'placeholder\')} />\n      </Item>\n      <Item key="124" isSelectable>\n        <Placeholder title="Item 0-1" className={cx(\'placeholder\')} />\n      </Item>\n      <Item key="125" isSelectable>\n        <Placeholder title="Item 0-2" className={cx(\'placeholder\')} />\n      </Item>\n    </Subsection>\n    <Subsection\n      key="collapsible-subsection"\n      isCollapsible\n      title="Collapsible Subsection"\n    >\n      <Item key="223" isSelectable>\n        <Placeholder title="Item 1-0" className={cx(\'placeholder\')} />\n      </Item>\n      <Item key="224" isSelectable>\n        <Placeholder title="Item 1-1" className={cx(\'placeholder\')} />\n      </Item>\n      <Item key="225" isSelectable>\n        <Placeholder title="Item 1-2" className={cx(\'placeholder\')} />\n      </Item>\n    </Subsection>\n    <Subsection\n      key="collapsible-subsection"\n      isCollapsed\n      isCollapsible\n      title="Collapsed Subsection"\n    >\n      <Item key="323" isSelectable>\n        <Placeholder title="Item 2-0" className={cx(\'placeholder\')} />\n      </Item>\n      <Item key="324" isSelectable>\n        <Placeholder title="Item 2-1" className={cx(\'placeholder\')} />\n      </Item>\n      <Item key="325" isSelectable>\n        <Placeholder title="Item 2-2" className={cx(\'placeholder\')} />\n      </Item>\n    </Subsection>\n  </List>\n);\n\nexport default ListSubsectionExample;\n\n')))}c.isMDXComponent=!0;var p=t(49271),u=t(63443),x=function(e){var l=e.title,t=e.description,n=e.isExpanded;return a.createElement(p.Z,{title:l||"List Subsection",description:t,example:a.createElement(m.Z,null),exampleCssSrc:a.createElement(u.Z,null),exampleSrc:a.createElement(c,null),isExpanded:n})},y=t(78530),b=["components"];function f(){return f=Object.assign?Object.assign.bind():function(e){for(var l=1;l<arguments.length;l++){var t=arguments[l];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},f.apply(this,arguments)}function h(e,l){if(null==e)return{};var t,a,n=function(e,l){if(null==e)return{};var t,a,n={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],l.indexOf(t)>=0||(n[t]=e[t]);return n}(e,l);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],l.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var T={},C="wrapper";function g(e){var l=e.components,t=h(e,b);return(0,n.mdx)(C,f({},T,t,{components:l,mdxType:"MDXLayout"}),(0,n.mdx)(y.ZP,{mdxType:"PropsTable"},(0,n.mdx)(y.X2,{key:"ROW1",mdxType:"Row"},(0,n.mdx)(y.O,{mdxType:"PropNameCell"},"children"),(0,n.mdx)(y.Di,{mdxType:"TypeCell"},(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-javascript"},"node\n"))),(0,n.mdx)(y.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,n.mdx)(y.mW,{mdxType:"DefaultValueCell"},(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-javascript"},"[]\n"))),(0,n.mdx)(y.Ex,{mdxType:"DescriptionCell"},(0,n.mdx)("p",null,"The children list items passed to the component."))),(0,n.mdx)(y.X2,{key:"ROW2",mdxType:"Row"},(0,n.mdx)(y.O,{mdxType:"PropNameCell"},"isCollapsed"),(0,n.mdx)(y.Di,{mdxType:"TypeCell"},(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-javascript"},"bool\n"))),(0,n.mdx)(y.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,n.mdx)(y.mW,{mdxType:"DefaultValueCell"},(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-javascript"},"false\n"))),(0,n.mdx)(y.Ex,{mdxType:"DescriptionCell"},(0,n.mdx)("p",null,"Whether or not the subsection is collapsed."))),(0,n.mdx)(y.X2,{key:"ROW3",mdxType:"Row"},(0,n.mdx)(y.O,{mdxType:"PropNameCell"},"isCollapsible"),(0,n.mdx)(y.Di,{mdxType:"TypeCell"},(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-javascript"},"bool\n"))),(0,n.mdx)(y.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,n.mdx)(y.mW,{mdxType:"DefaultValueCell"},(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-javascript"},"false\n"))),(0,n.mdx)(y.Ex,{mdxType:"DescriptionCell"},(0,n.mdx)("p",null,"Whether or not the subsection can be collapsed."))),(0,n.mdx)(y.X2,{key:"ROW4",mdxType:"Row"},(0,n.mdx)(y.O,{mdxType:"PropNameCell"},"level"),(0,n.mdx)(y.Di,{mdxType:"TypeCell"},(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-javascript"},"enum: [\n  2\n  3\n  4\n  5\n  6\n],\n"))),(0,n.mdx)(y.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,n.mdx)(y.mW,{mdxType:"DefaultValueCell"},(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-javascript"},"2\n"))),(0,n.mdx)(y.Ex,{mdxType:"DescriptionCell"},(0,n.mdx)("p",null,"Optionally sets the heading level. One of ",(0,n.mdx)("inlineCode",{parentName:"p"},"2"),", ",(0,n.mdx)("inlineCode",{parentName:"p"},"3"),", ",(0,n.mdx)("inlineCode",{parentName:"p"},"4"),", ",(0,n.mdx)("inlineCode",{parentName:"p"},"5"),", ",(0,n.mdx)("inlineCode",{parentName:"p"},"6"),"."))),(0,n.mdx)(y.X2,{key:"ROW5",mdxType:"Row"},(0,n.mdx)(y.O,{mdxType:"PropNameCell"},"metaData"),(0,n.mdx)(y.Di,{mdxType:"TypeCell"},(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-javascript"},"object\n"))),(0,n.mdx)(y.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,n.mdx)(y.mW,{mdxType:"DefaultValueCell"},(0,n.mdx)("p",null,"none")),(0,n.mdx)(y.Ex,{mdxType:"DescriptionCell"},(0,n.mdx)("p",null,"The associated metaData to be provided in the onSelect callback."))),(0,n.mdx)(y.X2,{key:"ROW6",mdxType:"Row"},(0,n.mdx)(y.O,{mdxType:"PropNameCell"},"onSelect"),(0,n.mdx)(y.Di,{mdxType:"TypeCell"},(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-javascript"},"func\n"))),(0,n.mdx)(y.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,n.mdx)(y.mW,{mdxType:"DefaultValueCell"},(0,n.mdx)("p",null,"none")),(0,n.mdx)(y.Ex,{mdxType:"DescriptionCell"},(0,n.mdx)("p",null,"Function callback for when the appropriate click or key action is performed.\nCallback contains the javascript evnt and prop metadata, e.g. onSelect(event, metaData)"))),(0,n.mdx)(y.X2,{key:"ROW7",mdxType:"Row"},(0,n.mdx)(y.O,{mdxType:"PropNameCell"},"refCallback"),(0,n.mdx)(y.Di,{mdxType:"TypeCell"},(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-javascript"},"func\n"))),(0,n.mdx)(y.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,n.mdx)(y.mW,{mdxType:"DefaultValueCell"},(0,n.mdx)("p",null,"none")),(0,n.mdx)(y.Ex,{mdxType:"DescriptionCell"},(0,n.mdx)("p",null,"Function callback passthrough for the ref of the section li."))),(0,n.mdx)(y.X2,{key:"ROW8",mdxType:"Row"},(0,n.mdx)(y.O,{mdxType:"PropNameCell"},"title"),(0,n.mdx)(y.Di,{mdxType:"TypeCell"},(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-javascript"},"string\n"))),(0,n.mdx)(y.dS,{isRequired:!0,mdxType:"RequiredCell"}),(0,n.mdx)(y.mW,{mdxType:"DefaultValueCell"},(0,n.mdx)("p",null,"none")),(0,n.mdx)(y.Ex,{mdxType:"DescriptionCell"},(0,n.mdx)("p",null,"Title text to be placed within the subsection header."))),(0,n.mdx)(y.X2,{key:"ROW9",mdxType:"Row"},(0,n.mdx)(y.O,{mdxType:"PropNameCell"},"isDraggable"),(0,n.mdx)(y.Di,{mdxType:"TypeCell"},(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-javascript"},"bool\n"))),(0,n.mdx)(y.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,n.mdx)(y.mW,{mdxType:"DefaultValueCell"},(0,n.mdx)("p",null,"none")),(0,n.mdx)(y.Ex,{mdxType:"DescriptionCell"},(0,n.mdx)("p",null,"Whether or not the list item is draggable. List Item is draggable only when it is selectable."))),(0,n.mdx)(y.X2,{key:"ROW10",mdxType:"Row"},(0,n.mdx)(y.O,{mdxType:"PropNameCell"},"onDragEnd"),(0,n.mdx)(y.Di,{mdxType:"TypeCell"},(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-javascript"},"func\n"))),(0,n.mdx)(y.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,n.mdx)(y.mW,{mdxType:"DefaultValueCell"},(0,n.mdx)("p",null,"none")),(0,n.mdx)(y.Ex,{mdxType:"DescriptionCell"},(0,n.mdx)("p",null,"Function callback when the Item is dropped. Callback contains the DropResult of result object and provided object, e.g. onDragEnd(result, provided).")))))}g.isMDXComponent=!0;var S=["components"];function N(){return N=Object.assign?Object.assign.bind():function(e){for(var l=1;l<arguments.length;l++){var t=arguments[l];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},N.apply(this,arguments)}function O(e,l){if(null==e)return{};var t,a,n=function(e,l){if(null==e)return{};var t,a,n={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],l.indexOf(t)>=0||(n[t]=e[t]);return n}(e,l);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],l.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var v={},k="wrapper";function I(e){var l=e.components,t=O(e,S);return(0,n.mdx)(k,N({},v,t,{components:l,mdxType:"MDXLayout"}),(0,n.mdx)(r.C,{mdxType:"Badge"}),(0,n.mdx)("h1",{id:"list-subsection"},"List Subsection"),(0,n.mdx)("p",null,"The list subsection component creates a subsection header and layouts it out with the passed child list items. The subsection provides the ability to display and collapse a subsection within a logical group. The list subsection will render as a flat list."),(0,n.mdx)("h2",{id:"usage"},"Usage"),(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-jsx"},"import List, { Item, Subsection } from 'terra-list/lib/List';\\\n")),(0,n.mdx)("h2",{id:"examples"},"Examples"),(0,n.mdx)(x,{mdxType:"ListSubsectionExample"}),(0,n.mdx)("h2",{id:"list-subsection-props"},"List Subsection Props"),(0,n.mdx)(g,{mdxType:"ListSubsectionPropsTable"}))}I.isMDXComponent=!0}}]);