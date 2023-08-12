"use strict";(self.webpackChunkterra_ui=self.webpackChunkterra_ui||[]).push([[78555,45627,37344,33667,96890,14041,27444,85565,3353,80858,17657,5161,45865,55571,85355,3193,33315,4845,20444,26806,46647,85161,38681,17763,15318,40411,18101,38443,78996,39915,33442],{20670:function(e,t,l){function n(e){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(e)}t.Z=void 0;var a=p(l(67294)),r=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==n(e)&&"function"!=typeof e)return{default:e};var l=i(t);if(l&&l.has(e))return l.get(e);var a={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var m in e)if("default"!==m&&Object.prototype.hasOwnProperty.call(e,m)){var o=r?Object.getOwnPropertyDescriptor(e,m):null;o&&(o.get||o.set)?Object.defineProperty(a,m,o):a[m]=e[m]}a.default=e,l&&l.set(e,a);return a}(l(93670)),m=l(34261),o=p(l(47166)),d=p(l(25266));function i(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,l=new WeakMap;return(i=function(e){return e?l:t})(e)}function p(e){return e&&e.__esModule?e:{default:e}}var c=o.default.bind(d.default),s=function(){return a.default.createElement(r.default,null,a.default.createElement(r.Section,{key:"static-section",title:"Static Section"},a.default.createElement(r.Item,{key:"123"},a.default.createElement(m.Placeholder,{title:"Item 0-0",className:c("placeholder")})),a.default.createElement(r.Item,{key:"124"},a.default.createElement(m.Placeholder,{title:"Item 0-1",className:c("placeholder")})),a.default.createElement(r.Item,{key:"125"},a.default.createElement(m.Placeholder,{title:"Item 0-2",className:c("placeholder")}))),a.default.createElement(r.Section,{key:"collapsible-section",isCollapsible:!0,title:"Collapsible Section"},a.default.createElement(r.Item,{key:"223"},a.default.createElement(m.Placeholder,{title:"Item 1-0",className:c("placeholder")})),a.default.createElement(r.Item,{key:"224"},a.default.createElement(m.Placeholder,{title:"Item 1-1",className:c("placeholder")})),a.default.createElement(r.Item,{key:"225"},a.default.createElement(m.Placeholder,{title:"Item 1-2",className:c("placeholder")}))),a.default.createElement(r.Section,{key:"collapsible-section",isCollapsed:!0,isCollapsible:!0,title:"Collapsed Section"},a.default.createElement(r.Item,{key:"323"},a.default.createElement(m.Placeholder,{title:"Item 2-0",className:c("placeholder")})),a.default.createElement(r.Item,{key:"324"},a.default.createElement(m.Placeholder,{title:"Item 2-1",className:c("placeholder")})),a.default.createElement(r.Item,{key:"325"},a.default.createElement(m.Placeholder,{title:"Item 2-2",className:c("placeholder")}))))};t.Z=s},68118:function(e,t,l){l.r(t),l.d(t,{default:function(){return k}});var n=l(67294),a=l(81254),r=l(30999),m=l(20670),o=["components"];function d(){return d=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var l=arguments[t];for(var n in l)Object.prototype.hasOwnProperty.call(l,n)&&(e[n]=l[n])}return e},d.apply(this,arguments)}function i(e,t){if(null==e)return{};var l,n,a=function(e,t){if(null==e)return{};var l,n,a={},r=Object.keys(e);for(n=0;n<r.length;n++)l=r[n],t.indexOf(l)>=0||(a[l]=e[l]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)l=r[n],t.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(a[l]=e[l])}return a}var p={};function c(e){var t=e.components,l=i(e,o);return(0,a.mdx)("wrapper",d({},p,l,{components:t,mdxType:"MDXLayout"}),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-jsx"},'import React from \'react\';\nimport List, { Item, Section } from \'terra-list/lib/index\';\nimport { Placeholder } from \'@cerner/terra-docs\';\nimport classNames from \'classnames/bind\';\nimport styles from \'./ListDocCommon.module.scss\';\n\nconst cx = classNames.bind(styles);\n\nconst ListSectionExample = () => (\n  <List>\n    <Section\n      key="static-section"\n      title="Static Section"\n    >\n      <Item key="123">\n        <Placeholder title="Item 0-0" className={cx(\'placeholder\')} />\n      </Item>\n      <Item key="124">\n        <Placeholder title="Item 0-1" className={cx(\'placeholder\')} />\n      </Item>\n      <Item key="125">\n        <Placeholder title="Item 0-2" className={cx(\'placeholder\')} />\n      </Item>\n    </Section>\n    <Section\n      key="collapsible-section"\n      isCollapsible\n      title="Collapsible Section"\n    >\n      <Item key="223">\n        <Placeholder title="Item 1-0" className={cx(\'placeholder\')} />\n      </Item>\n      <Item key="224">\n        <Placeholder title="Item 1-1" className={cx(\'placeholder\')} />\n      </Item>\n      <Item key="225">\n        <Placeholder title="Item 1-2" className={cx(\'placeholder\')} />\n      </Item>\n    </Section>\n    <Section\n      key="collapsible-section"\n      isCollapsed\n      isCollapsible\n      title="Collapsed Section"\n    >\n      <Item key="323">\n        <Placeholder title="Item 2-0" className={cx(\'placeholder\')} />\n      </Item>\n      <Item key="324">\n        <Placeholder title="Item 2-1" className={cx(\'placeholder\')} />\n      </Item>\n      <Item key="325">\n        <Placeholder title="Item 2-2" className={cx(\'placeholder\')} />\n      </Item>\n    </Section>\n  </List>\n);\n\nexport default ListSectionExample;\n\n')))}c.isMDXComponent=!0;var s=l(49271),u=l(63443),x=function(e){var t=e.title,l=e.description,a=e.isExpanded;return n.createElement(s.Z,{title:t||"List Section",description:l,example:n.createElement(m.Z,null),exampleCssSrc:n.createElement(u.Z,null),exampleSrc:n.createElement(c,null),isExpanded:a})},y=l(78530),f=["components"];function h(){return h=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var l=arguments[t];for(var n in l)Object.prototype.hasOwnProperty.call(l,n)&&(e[n]=l[n])}return e},h.apply(this,arguments)}function b(e,t){if(null==e)return{};var l,n,a=function(e,t){if(null==e)return{};var l,n,a={},r=Object.keys(e);for(n=0;n<r.length;n++)l=r[n],t.indexOf(l)>=0||(a[l]=e[l]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)l=r[n],t.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(a[l]=e[l])}return a}var T={},C="wrapper";function N(e){var t=e.components,l=b(e,f);return(0,a.mdx)(C,h({},T,l,{components:t,mdxType:"MDXLayout"}),(0,a.mdx)(y.ZP,{mdxType:"PropsTable"},(0,a.mdx)(y.X2,{key:"ROW1",mdxType:"Row"},(0,a.mdx)(y.O,{mdxType:"PropNameCell"},"children"),(0,a.mdx)(y.Di,{mdxType:"TypeCell"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"node\n"))),(0,a.mdx)(y.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,a.mdx)(y.mW,{mdxType:"DefaultValueCell"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"[]\n"))),(0,a.mdx)(y.Ex,{mdxType:"DescriptionCell"},(0,a.mdx)("p",null,"The children list items passed to the component."))),(0,a.mdx)(y.X2,{key:"ROW2",mdxType:"Row"},(0,a.mdx)(y.O,{mdxType:"PropNameCell"},"isCollapsed"),(0,a.mdx)(y.Di,{mdxType:"TypeCell"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"bool\n"))),(0,a.mdx)(y.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,a.mdx)(y.mW,{mdxType:"DefaultValueCell"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"false\n"))),(0,a.mdx)(y.Ex,{mdxType:"DescriptionCell"},(0,a.mdx)("p",null,"Whether or not the section is collapsed."))),(0,a.mdx)(y.X2,{key:"ROW3",mdxType:"Row"},(0,a.mdx)(y.O,{mdxType:"PropNameCell"},"isCollapsible"),(0,a.mdx)(y.Di,{mdxType:"TypeCell"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"bool\n"))),(0,a.mdx)(y.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,a.mdx)(y.mW,{mdxType:"DefaultValueCell"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"false\n"))),(0,a.mdx)(y.Ex,{mdxType:"DescriptionCell"},(0,a.mdx)("p",null,"Whether or not the section can be collapsed."))),(0,a.mdx)(y.X2,{key:"ROW4",mdxType:"Row"},(0,a.mdx)(y.O,{mdxType:"PropNameCell"},"level"),(0,a.mdx)(y.Di,{mdxType:"TypeCell"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"enum: [\n  1\n  2\n  3\n  4\n  5\n  6\n],\n"))),(0,a.mdx)(y.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,a.mdx)(y.mW,{mdxType:"DefaultValueCell"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"2\n"))),(0,a.mdx)(y.Ex,{mdxType:"DescriptionCell"},(0,a.mdx)("p",null,"Optionally sets the heading level. One of ",(0,a.mdx)("inlineCode",{parentName:"p"},"1"),", ",(0,a.mdx)("inlineCode",{parentName:"p"},"2"),", ",(0,a.mdx)("inlineCode",{parentName:"p"},"3"),", ",(0,a.mdx)("inlineCode",{parentName:"p"},"4"),", ",(0,a.mdx)("inlineCode",{parentName:"p"},"5"),", ",(0,a.mdx)("inlineCode",{parentName:"p"},"6"),".\n",(0,a.mdx)("img",{parentName:"p",src:"https://badgen.net/badge/UX/Accessibility/blue",alt:"IMPORTANT"}),"\nReplace value ",(0,a.mdx)("inlineCode",{parentName:"p"},"1")," of ",(0,a.mdx)("inlineCode",{parentName:"p"},"level")," prop with other level values. Do Not use level as 1 as there should be only one H1 in a page.\nHeading value ",(0,a.mdx)("inlineCode",{parentName:"p"},"1")," will be converted as heading level ",(0,a.mdx)("inlineCode",{parentName:"p"},"2")," until it is removed in the next MVB release."))),(0,a.mdx)(y.X2,{key:"ROW5",mdxType:"Row"},(0,a.mdx)(y.O,{mdxType:"PropNameCell"},"metaData"),(0,a.mdx)(y.Di,{mdxType:"TypeCell"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"object\n"))),(0,a.mdx)(y.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,a.mdx)(y.mW,{mdxType:"DefaultValueCell"},(0,a.mdx)("p",null,"none")),(0,a.mdx)(y.Ex,{mdxType:"DescriptionCell"},(0,a.mdx)("p",null,"The associated metaData to be provided in the onSelect callback."))),(0,a.mdx)(y.X2,{key:"ROW6",mdxType:"Row"},(0,a.mdx)(y.O,{mdxType:"PropNameCell"},"onSelect"),(0,a.mdx)(y.Di,{mdxType:"TypeCell"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"func\n"))),(0,a.mdx)(y.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,a.mdx)(y.mW,{mdxType:"DefaultValueCell"},(0,a.mdx)("p",null,"none")),(0,a.mdx)(y.Ex,{mdxType:"DescriptionCell"},(0,a.mdx)("p",null,"Function callback for when the appropriate click or key action is performed.\nCallback contains the javascript event and prop metadata, e.g. onSelect(event, metaData)"))),(0,a.mdx)(y.X2,{key:"ROW7",mdxType:"Row"},(0,a.mdx)(y.O,{mdxType:"PropNameCell"},"refCallback"),(0,a.mdx)(y.Di,{mdxType:"TypeCell"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"func\n"))),(0,a.mdx)(y.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,a.mdx)(y.mW,{mdxType:"DefaultValueCell"},(0,a.mdx)("p",null,"none")),(0,a.mdx)(y.Ex,{mdxType:"DescriptionCell"},(0,a.mdx)("p",null,"Function callback passthrough for the ref of the section li."))),(0,a.mdx)(y.X2,{key:"ROW8",mdxType:"Row"},(0,a.mdx)(y.O,{mdxType:"PropNameCell"},"title"),(0,a.mdx)(y.Di,{mdxType:"TypeCell"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"string\n"))),(0,a.mdx)(y.dS,{isRequired:!0,mdxType:"RequiredCell"}),(0,a.mdx)(y.mW,{mdxType:"DefaultValueCell"},(0,a.mdx)("p",null,"none")),(0,a.mdx)(y.Ex,{mdxType:"DescriptionCell"},(0,a.mdx)("p",null,"Title text to be placed within the section header.")))))}N.isMDXComponent=!0;var g=["components"];function v(){return v=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var l=arguments[t];for(var n in l)Object.prototype.hasOwnProperty.call(l,n)&&(e[n]=l[n])}return e},v.apply(this,arguments)}function O(e,t){if(null==e)return{};var l,n,a=function(e,t){if(null==e)return{};var l,n,a={},r=Object.keys(e);for(n=0;n<r.length;n++)l=r[n],t.indexOf(l)>=0||(a[l]=e[l]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)l=r[n],t.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(a[l]=e[l])}return a}var I={},S="wrapper";function k(e){var t=e.components,l=O(e,g);return(0,a.mdx)(S,v({},I,l,{components:t,mdxType:"MDXLayout"}),(0,a.mdx)(r.C,{mdxType:"Badge"}),(0,a.mdx)("h1",{id:"list-section"},"List Section"),(0,a.mdx)("p",null,"The list section component creates a section header and layouts it out with the passed child list items. The section provides the ability to display and collapse a section within a logical group. The list section will render as a flat list."),(0,a.mdx)("h2",{id:"usage"},"Usage"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-jsx"},"import List, { Item, Section } from 'terra-list/lib/List';\n")),(0,a.mdx)("h2",{id:"examples"},"Examples"),(0,a.mdx)(x,{mdxType:"ListSectionExample"}),(0,a.mdx)("h2",{id:"list-section-props"},"List Section Props"),(0,a.mdx)(N,{mdxType:"ListSectionPropsTable"}))}k.isMDXComponent=!0}}]);