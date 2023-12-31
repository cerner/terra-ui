"use strict";(self.webpackChunkterra_ui=self.webpackChunkterra_ui||[]).push([[78555,45627,37344,85565,33667,96890,79482,3353,5161,45865,80858,14041,85355,16835,3193,55571,4845,46647,27444,17657,85161,16873,38681,15318,66097,90941,40411,18101,38443,11264,79057,33315,34319,20116,33609,78996,39915,33442],{20670:function(e,l,t){function a(e){return a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a(e)}l.Z=void 0;var n=p(t(67294)),r=function(e,l){if(!l&&e&&e.__esModule)return e;if(null===e||"object"!=a(e)&&"function"!=typeof e)return{default:e};var t=o(l);if(t&&t.has(e))return t.get(e);var n={__proto__:null},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var m in e)if("default"!==m&&Object.prototype.hasOwnProperty.call(e,m)){var d=r?Object.getOwnPropertyDescriptor(e,m):null;d&&(d.get||d.set)?Object.defineProperty(n,m,d):n[m]=e[m]}return n.default=e,t&&t.set(e,n),n}(t(93670)),m=t(34261),d=p(t(19845)),i=p(t(25266));function o(e){if("function"!=typeof WeakMap)return null;var l=new WeakMap,t=new WeakMap;return(o=function(e){return e?t:l})(e)}function p(e){return e&&e.__esModule?e:{default:e}}var c=d.default.bind(i.default);l.Z=function(){return n.default.createElement(r.default,null,n.default.createElement(r.Section,{key:"static-section",title:"Static Section"},n.default.createElement(r.Item,{key:"123",isSelectable:!0},n.default.createElement(m.Placeholder,{title:"Item 0-0",className:c("placeholder")})),n.default.createElement(r.Item,{key:"124",isSelectable:!0},n.default.createElement(m.Placeholder,{title:"Item 0-1",className:c("placeholder")})),n.default.createElement(r.Item,{key:"125",isSelectable:!0},n.default.createElement(m.Placeholder,{title:"Item 0-2",className:c("placeholder")}))),n.default.createElement(r.Section,{key:"collapsible-section",isCollapsible:!0,title:"Collapsible Section"},n.default.createElement(r.Item,{key:"223",isSelectable:!0},n.default.createElement(m.Placeholder,{title:"Item 1-0",className:c("placeholder")})),n.default.createElement(r.Item,{key:"224",isSelectable:!0},n.default.createElement(m.Placeholder,{title:"Item 1-1",className:c("placeholder")})),n.default.createElement(r.Item,{key:"225",isSelectable:!0},n.default.createElement(m.Placeholder,{title:"Item 1-2",className:c("placeholder")}))),n.default.createElement(r.Section,{key:"collapsible-section",isCollapsed:!0,isCollapsible:!0,title:"Collapsed Section"},n.default.createElement(r.Item,{key:"323",isSelectable:!0},n.default.createElement(m.Placeholder,{title:"Item 2-0",className:c("placeholder")})),n.default.createElement(r.Item,{key:"324",isSelectable:!0},n.default.createElement(m.Placeholder,{title:"Item 2-1",className:c("placeholder")})),n.default.createElement(r.Item,{key:"325",isSelectable:!0},n.default.createElement(m.Placeholder,{title:"Item 2-2",className:c("placeholder")}))))}},68118:function(e,l,t){t.r(l),t.d(l,{default:function(){return I}});var a=t(67294),n=t(81254),r=t(30999),m=t(20670),d=["components"];function i(){return i=Object.assign?Object.assign.bind():function(e){for(var l=1;l<arguments.length;l++){var t=arguments[l];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},i.apply(this,arguments)}function o(e,l){if(null==e)return{};var t,a,n=function(e,l){if(null==e)return{};var t,a,n={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],l.indexOf(t)>=0||(n[t]=e[t]);return n}(e,l);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],l.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var p={};function c(e){var l=e.components,t=o(e,d);return(0,n.mdx)("wrapper",i({},p,t,{components:l,mdxType:"MDXLayout"}),(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-jsx"},'import React from \'react\';\nimport List, { Item, Section } from \'terra-list/lib/index\';\nimport { Placeholder } from \'@cerner/terra-docs\';\nimport classNames from \'classnames/bind\';\nimport styles from \'./ListDocCommon.module.scss\';\n\nconst cx = classNames.bind(styles);\n\nconst ListSectionExample = () => (\n  <List>\n    <Section\n      key="static-section"\n      title="Static Section"\n    >\n      <Item key="123" isSelectable>\n        <Placeholder title="Item 0-0" className={cx(\'placeholder\')} />\n      </Item>\n      <Item key="124" isSelectable>\n        <Placeholder title="Item 0-1" className={cx(\'placeholder\')} />\n      </Item>\n      <Item key="125" isSelectable>\n        <Placeholder title="Item 0-2" className={cx(\'placeholder\')} />\n      </Item>\n    </Section>\n    <Section\n      key="collapsible-section"\n      isCollapsible\n      title="Collapsible Section"\n    >\n      <Item key="223" isSelectable>\n        <Placeholder title="Item 1-0" className={cx(\'placeholder\')} />\n      </Item>\n      <Item key="224" isSelectable>\n        <Placeholder title="Item 1-1" className={cx(\'placeholder\')} />\n      </Item>\n      <Item key="225" isSelectable>\n        <Placeholder title="Item 1-2" className={cx(\'placeholder\')} />\n      </Item>\n    </Section>\n    <Section\n      key="collapsible-section"\n      isCollapsed\n      isCollapsible\n      title="Collapsed Section"\n    >\n      <Item key="323" isSelectable>\n        <Placeholder title="Item 2-0" className={cx(\'placeholder\')} />\n      </Item>\n      <Item key="324" isSelectable>\n        <Placeholder title="Item 2-1" className={cx(\'placeholder\')} />\n      </Item>\n      <Item key="325" isSelectable>\n        <Placeholder title="Item 2-2" className={cx(\'placeholder\')} />\n      </Item>\n    </Section>\n  </List>\n);\n\nexport default ListSectionExample;\n\n')))}c.isMDXComponent=!0;var s=t(49271),x=t(63443),u=function(e){var l=e.title,t=e.description,n=e.isExpanded;return a.createElement(s.Z,{title:l||"List Section",description:t,example:a.createElement(m.Z,null),exampleCssSrc:a.createElement(x.Z,null),exampleSrc:a.createElement(c,null),isExpanded:n})},y=t(78530),f=["components"];function b(){return b=Object.assign?Object.assign.bind():function(e){for(var l=1;l<arguments.length;l++){var t=arguments[l];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},b.apply(this,arguments)}function h(e,l){if(null==e)return{};var t,a,n=function(e,l){if(null==e)return{};var t,a,n={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],l.indexOf(t)>=0||(n[t]=e[t]);return n}(e,l);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],l.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var T={},C="wrapper";function g(e){var l=e.components,t=h(e,f);return(0,n.mdx)(C,b({},T,t,{components:l,mdxType:"MDXLayout"}),(0,n.mdx)(y.ZP,{mdxType:"PropsTable"},(0,n.mdx)(y.X2,{key:"ROW1",mdxType:"Row"},(0,n.mdx)(y.O,{mdxType:"PropNameCell"},"children"),(0,n.mdx)(y.Di,{mdxType:"TypeCell"},(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-javascript"},"node\n"))),(0,n.mdx)(y.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,n.mdx)(y.mW,{mdxType:"DefaultValueCell"},(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-javascript"},"[]\n"))),(0,n.mdx)(y.Ex,{mdxType:"DescriptionCell"},(0,n.mdx)("p",null,"The children list items passed to the component."))),(0,n.mdx)(y.X2,{key:"ROW2",mdxType:"Row"},(0,n.mdx)(y.O,{mdxType:"PropNameCell"},"isCollapsed"),(0,n.mdx)(y.Di,{mdxType:"TypeCell"},(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-javascript"},"bool\n"))),(0,n.mdx)(y.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,n.mdx)(y.mW,{mdxType:"DefaultValueCell"},(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-javascript"},"false\n"))),(0,n.mdx)(y.Ex,{mdxType:"DescriptionCell"},(0,n.mdx)("p",null,"Whether or not the section is collapsed."))),(0,n.mdx)(y.X2,{key:"ROW3",mdxType:"Row"},(0,n.mdx)(y.O,{mdxType:"PropNameCell"},"isCollapsible"),(0,n.mdx)(y.Di,{mdxType:"TypeCell"},(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-javascript"},"bool\n"))),(0,n.mdx)(y.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,n.mdx)(y.mW,{mdxType:"DefaultValueCell"},(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-javascript"},"false\n"))),(0,n.mdx)(y.Ex,{mdxType:"DescriptionCell"},(0,n.mdx)("p",null,"Whether or not the section can be collapsed."))),(0,n.mdx)(y.X2,{key:"ROW4",mdxType:"Row"},(0,n.mdx)(y.O,{mdxType:"PropNameCell"},"level"),(0,n.mdx)(y.Di,{mdxType:"TypeCell"},(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-javascript"},"enum: [\n  1\n  2\n  3\n  4\n  5\n  6\n],\n"))),(0,n.mdx)(y.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,n.mdx)(y.mW,{mdxType:"DefaultValueCell"},(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-javascript"},"2\n"))),(0,n.mdx)(y.Ex,{mdxType:"DescriptionCell"},(0,n.mdx)("p",null,"Optionally sets the heading level. One of ",(0,n.mdx)("inlineCode",{parentName:"p"},"1"),", ",(0,n.mdx)("inlineCode",{parentName:"p"},"2"),", ",(0,n.mdx)("inlineCode",{parentName:"p"},"3"),", ",(0,n.mdx)("inlineCode",{parentName:"p"},"4"),", ",(0,n.mdx)("inlineCode",{parentName:"p"},"5"),", ",(0,n.mdx)("inlineCode",{parentName:"p"},"6"),".\n",(0,n.mdx)("img",{parentName:"p",src:"https://badgen.net/badge/UX/Accessibility/blue",alt:"IMPORTANT"}),"\nReplace value ",(0,n.mdx)("inlineCode",{parentName:"p"},"1")," of ",(0,n.mdx)("inlineCode",{parentName:"p"},"level")," prop with other level values. Do Not use level as 1 as there should be only one H1 in a page.\nHeading value ",(0,n.mdx)("inlineCode",{parentName:"p"},"1")," will be converted as heading level ",(0,n.mdx)("inlineCode",{parentName:"p"},"2")," until it is removed in the next MVB release."))),(0,n.mdx)(y.X2,{key:"ROW5",mdxType:"Row"},(0,n.mdx)(y.O,{mdxType:"PropNameCell"},"metaData"),(0,n.mdx)(y.Di,{mdxType:"TypeCell"},(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-javascript"},"object\n"))),(0,n.mdx)(y.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,n.mdx)(y.mW,{mdxType:"DefaultValueCell"},(0,n.mdx)("p",null,"none")),(0,n.mdx)(y.Ex,{mdxType:"DescriptionCell"},(0,n.mdx)("p",null,"The associated metaData to be provided in the onSelect callback."))),(0,n.mdx)(y.X2,{key:"ROW6",mdxType:"Row"},(0,n.mdx)(y.O,{mdxType:"PropNameCell"},"onSelect"),(0,n.mdx)(y.Di,{mdxType:"TypeCell"},(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-javascript"},"func\n"))),(0,n.mdx)(y.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,n.mdx)(y.mW,{mdxType:"DefaultValueCell"},(0,n.mdx)("p",null,"none")),(0,n.mdx)(y.Ex,{mdxType:"DescriptionCell"},(0,n.mdx)("p",null,"Function callback for when the appropriate click or key action is performed.\nCallback contains the javascript event and prop metadata, e.g. onSelect(event, metaData)"))),(0,n.mdx)(y.X2,{key:"ROW7",mdxType:"Row"},(0,n.mdx)(y.O,{mdxType:"PropNameCell"},"refCallback"),(0,n.mdx)(y.Di,{mdxType:"TypeCell"},(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-javascript"},"func\n"))),(0,n.mdx)(y.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,n.mdx)(y.mW,{mdxType:"DefaultValueCell"},(0,n.mdx)("p",null,"none")),(0,n.mdx)(y.Ex,{mdxType:"DescriptionCell"},(0,n.mdx)("p",null,"Function callback passthrough for the ref of the section li."))),(0,n.mdx)(y.X2,{key:"ROW8",mdxType:"Row"},(0,n.mdx)(y.O,{mdxType:"PropNameCell"},"title"),(0,n.mdx)(y.Di,{mdxType:"TypeCell"},(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-javascript"},"string\n"))),(0,n.mdx)(y.dS,{isRequired:!0,mdxType:"RequiredCell"}),(0,n.mdx)(y.mW,{mdxType:"DefaultValueCell"},(0,n.mdx)("p",null,"none")),(0,n.mdx)(y.Ex,{mdxType:"DescriptionCell"},(0,n.mdx)("p",null,"Title text to be placed within the section header."))),(0,n.mdx)(y.X2,{key:"ROW9",mdxType:"Row"},(0,n.mdx)(y.O,{mdxType:"PropNameCell"},"isDraggable"),(0,n.mdx)(y.Di,{mdxType:"TypeCell"},(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-javascript"},"bool\n"))),(0,n.mdx)(y.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,n.mdx)(y.mW,{mdxType:"DefaultValueCell"},(0,n.mdx)("p",null,"none")),(0,n.mdx)(y.Ex,{mdxType:"DescriptionCell"},(0,n.mdx)("p",null,"Whether or not the list item is draggable. List Item is draggable only when it is selectable."))),(0,n.mdx)(y.X2,{key:"ROW10",mdxType:"Row"},(0,n.mdx)(y.O,{mdxType:"PropNameCell"},"onDragEnd"),(0,n.mdx)(y.Di,{mdxType:"TypeCell"},(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-javascript"},"func\n"))),(0,n.mdx)(y.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,n.mdx)(y.mW,{mdxType:"DefaultValueCell"},(0,n.mdx)("p",null,"none")),(0,n.mdx)(y.Ex,{mdxType:"DescriptionCell"},(0,n.mdx)("p",null,"Function callback when the Item is dropped. Callback contains the DropResult of result object and provided object, e.g. onDragEnd(result, provided)."))),(0,n.mdx)(y.X2,{key:"ROW11",mdxType:"Row"},(0,n.mdx)(y.O,{mdxType:"PropNameCell"},"zIndex"),(0,n.mdx)(y.Di,{mdxType:"TypeCell"},(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-javascript"},"number\n"))),(0,n.mdx)(y.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,n.mdx)(y.mW,{mdxType:"DefaultValueCell"},(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-javascript"},"6001\n"))),(0,n.mdx)(y.Ex,{mdxType:"DescriptionCell"},(0,n.mdx)("p",null,"z-index value for the list item (li element). Defaults to 6001 which is greater value than terra-modal-manager z-index value.")))))}g.isMDXComponent=!0;var N=["components"];function v(){return v=Object.assign?Object.assign.bind():function(e){for(var l=1;l<arguments.length;l++){var t=arguments[l];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},v.apply(this,arguments)}function S(e,l){if(null==e)return{};var t,a,n=function(e,l){if(null==e)return{};var t,a,n={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],l.indexOf(t)>=0||(n[t]=e[t]);return n}(e,l);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],l.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var O={},k="wrapper";function I(e){var l=e.components,t=S(e,N);return(0,n.mdx)(k,v({},O,t,{components:l,mdxType:"MDXLayout"}),(0,n.mdx)(r.C,{mdxType:"Badge"}),(0,n.mdx)("h1",{id:"list-section"},"List Section"),(0,n.mdx)("p",null,"The list section component creates a section header and layouts it out with the passed child list items. The section provides the ability to display and collapse a section within a logical group. The list section will render as a flat list."),(0,n.mdx)("h2",{id:"usage"},"Usage"),(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-jsx"},"import List, { Item, Section } from 'terra-list/lib/List';\n")),(0,n.mdx)("h2",{id:"examples"},"Examples"),(0,n.mdx)(u,{mdxType:"ListSectionExample"}),(0,n.mdx)("h2",{id:"list-section-props"},"List Section Props"),(0,n.mdx)(g,{mdxType:"ListSectionPropsTable"}))}I.isMDXComponent=!0}}]);