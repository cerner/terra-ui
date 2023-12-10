"use strict";(self.webpackChunkterra_ui=self.webpackChunkterra_ui||[]).push([[18875,45627,37344,33667,96890,79482,85565,3353,5161,80858,14041,45865,16835,85355,55571,3193,4845,27444,17657,46647,16873,85161,66097,38681,15318,40411,18101,33315,38443,11264,34319,78996,39915,33442],{83568:function(e,t,l){function n(e){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(e)}t.Z=void 0;var a=d(l(67294)),r=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=n(e)&&"function"!=typeof e)return{default:e};var l=c(t);if(l&&l.has(e))return l.get(e);var a={__proto__:null},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var i=r?Object.getOwnPropertyDescriptor(e,o):null;i&&(i.get||i.set)?Object.defineProperty(a,o,i):a[o]=e[o]}return a.default=e,l&&l.set(e,a),a}(l(93670)),o=l(34261),i=d(l(47166)),m=d(l(25266));function c(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,l=new WeakMap;return(c=function(e){return e?l:t})(e)}function d(e){return e&&e.__esModule?e:{default:e}}var s=i.default.bind(m.default);t.Z=function(){return a.default.createElement(a.default.Fragment,null,a.default.createElement("p",{id:"list-help"},"Select a patient from the list to view patient details."),a.default.createElement(r.default,{role:"listbox",ariaDescribedBy:"list-help","aria-label":"list of patient",isDraggable:!0},a.default.createElement(r.Item,{key:"1",isSelectable:!0,isSelected:!0},a.default.createElement(o.Placeholder,{title:"John Smith",className:s("placeholder")})),a.default.createElement(r.Item,{key:"2",isSelectable:!0},a.default.createElement(o.Placeholder,{title:"Mary Jones",className:s("placeholder")})),a.default.createElement(r.Item,{key:"3",isSelectable:!0},a.default.createElement(o.Placeholder,{title:"Sam Brown",className:s("placeholder")})),a.default.createElement(r.Item,{key:"4",isSelectable:!0},a.default.createElement(o.Placeholder,{title:"John David",className:s("placeholder")}))))}},68067:function(e,t,l){function n(e){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(e)}t.Z=void 0;var a=d(l(67294)),r=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=n(e)&&"function"!=typeof e)return{default:e};var l=c(t);if(l&&l.has(e))return l.get(e);var a={__proto__:null},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var i=r?Object.getOwnPropertyDescriptor(e,o):null;i&&(i.get||i.set)?Object.defineProperty(a,o,i):a[o]=e[o]}return a.default=e,l&&l.set(e,a),a}(l(93670)),o=l(34261),i=d(l(47166)),m=d(l(25266));function c(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,l=new WeakMap;return(c=function(e){return e?l:t})(e)}function d(e){return e&&e.__esModule?e:{default:e}}var s=i.default.bind(m.default);t.Z=function(){return a.default.createElement(r.default,{role:"listbox","aria-label":"example-label"},a.default.createElement(r.Item,{key:"default"},a.default.createElement(o.Placeholder,{title:"Default ListItem",className:s("placeholder")})),a.default.createElement(r.Item,{key:"chevron",hasChevron:!0},a.default.createElement(o.Placeholder,{title:"Chevron ListItem",className:s("placeholder")})),a.default.createElement(r.Item,{key:"selectable",isSelectable:!0},a.default.createElement(o.Placeholder,{title:"Selectable ListItem",className:s("placeholder")})),a.default.createElement(r.Item,{key:"selected",isSelectable:!0,isSelected:!0},a.default.createElement(o.Placeholder,{title:"Selected ListItem",className:s("placeholder")})))}},33568:function(e,t,l){l.r(t),l.d(t,{default:function(){return P}});var n=l(67294),a=l(81254),r=l(30999),o=l(68067),i=["components"];function m(){return m=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var l=arguments[t];for(var n in l)Object.prototype.hasOwnProperty.call(l,n)&&(e[n]=l[n])}return e},m.apply(this,arguments)}function c(e,t){if(null==e)return{};var l,n,a=function(e,t){if(null==e)return{};var l,n,a={},r=Object.keys(e);for(n=0;n<r.length;n++)l=r[n],t.indexOf(l)>=0||(a[l]=e[l]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)l=r[n],t.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(a[l]=e[l])}return a}var d={};function s(e){var t=e.components,l=c(e,i);return(0,a.mdx)("wrapper",m({},d,l,{components:t,mdxType:"MDXLayout"}),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-jsx"},'import React from \'react\';\nimport List, { Item } from \'terra-list/lib/index\';\nimport { Placeholder } from \'@cerner/terra-docs\';\nimport classNames from \'classnames/bind\';\nimport styles from \'./ListDocCommon.module.scss\';\n\nconst cx = classNames.bind(styles);\n\nconst ListSectionExample = () => (\n  <List role="listbox" aria-label="example-label">\n    <Item\n      key="default"\n    >\n      <Placeholder title="Default ListItem" className={cx(\'placeholder\')} />\n    </Item>\n    <Item\n      key="chevron"\n      hasChevron\n    >\n      <Placeholder title="Chevron ListItem" className={cx(\'placeholder\')} />\n    </Item>\n    <Item\n      key="selectable"\n      isSelectable\n    >\n      <Placeholder title="Selectable ListItem" className={cx(\'placeholder\')} />\n    </Item>\n    <Item\n      key="selected"\n      isSelectable\n      isSelected\n    >\n      <Placeholder title="Selected ListItem" className={cx(\'placeholder\')} />\n    </Item>\n  </List>\n);\n\nexport default ListSectionExample;\n\n')))}s.isMDXComponent=!0;var p=l(49271),u=l(63443),x=function(e){var t=e.title,l=e.description,a=e.isExpanded;return n.createElement(p.Z,{title:t||"List Item",description:l,example:n.createElement(o.Z,null),exampleCssSrc:n.createElement(u.Z,null),exampleSrc:n.createElement(s,null),isExpanded:a})},f=l(49456),y=l(78530),b=["components"];function h(){return h=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var l=arguments[t];for(var n in l)Object.prototype.hasOwnProperty.call(l,n)&&(e[n]=l[n])}return e},h.apply(this,arguments)}function v(e,t){if(null==e)return{};var l,n,a=function(e,t){if(null==e)return{};var l,n,a={},r=Object.keys(e);for(n=0;n<r.length;n++)l=r[n],t.indexOf(l)>=0||(a[l]=e[l]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)l=r[n],t.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(a[l]=e[l])}return a}var g={},O="wrapper";function S(e){var t=e.components,l=v(e,b);return(0,a.mdx)(O,h({},g,l,{components:t,mdxType:"MDXLayout"}),(0,a.mdx)(y.ZP,{mdxType:"PropsTable"},(0,a.mdx)(y.X2,{key:"ROW1",mdxType:"Row"},(0,a.mdx)(y.O,{mdxType:"PropNameCell"},"children"),(0,a.mdx)(y.Di,{mdxType:"TypeCell"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"node\n"))),(0,a.mdx)(y.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,a.mdx)(y.mW,{mdxType:"DefaultValueCell"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"[]\n"))),(0,a.mdx)(y.Ex,{mdxType:"DescriptionCell"},(0,a.mdx)("p",null,"The content element to be placed inside the list item for display."))),(0,a.mdx)(y.X2,{key:"ROW2",mdxType:"Row"},(0,a.mdx)(y.O,{mdxType:"PropNameCell"},"hasChevron"),(0,a.mdx)(y.Di,{mdxType:"TypeCell"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"bool\n"))),(0,a.mdx)(y.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,a.mdx)(y.mW,{mdxType:"DefaultValueCell"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"false\n"))),(0,a.mdx)(y.Ex,{mdxType:"DescriptionCell"},(0,a.mdx)("p",null,"Whether or not the list item has a disclosure indicator presented."))),(0,a.mdx)(y.X2,{key:"ROW3",mdxType:"Row"},(0,a.mdx)(y.O,{mdxType:"PropNameCell"},"isSelected"),(0,a.mdx)(y.Di,{mdxType:"TypeCell"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"bool\n"))),(0,a.mdx)(y.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,a.mdx)(y.mW,{mdxType:"DefaultValueCell"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"false\n"))),(0,a.mdx)(y.Ex,{mdxType:"DescriptionCell"},(0,a.mdx)("p",null,"Whether or not the list item should have selection styles applied."))),(0,a.mdx)(y.X2,{key:"ROW4",mdxType:"Row"},(0,a.mdx)(y.O,{mdxType:"PropNameCell"},"isSelectable"),(0,a.mdx)(y.Di,{mdxType:"TypeCell"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"bool\n"))),(0,a.mdx)(y.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,a.mdx)(y.mW,{mdxType:"DefaultValueCell"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"false\n"))),(0,a.mdx)(y.Ex,{mdxType:"DescriptionCell"},(0,a.mdx)("p",null,"Whether or not the list item should have styles to indicate the item is selectable."))),(0,a.mdx)(y.X2,{key:"ROW5",mdxType:"Row"},(0,a.mdx)(y.O,{mdxType:"PropNameCell"},"metaData"),(0,a.mdx)(y.Di,{mdxType:"TypeCell"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"object\n"))),(0,a.mdx)(y.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,a.mdx)(y.mW,{mdxType:"DefaultValueCell"},(0,a.mdx)("p",null,"none")),(0,a.mdx)(y.Ex,{mdxType:"DescriptionCell"},(0,a.mdx)("p",null,"The associated metaData to be provided in the onSelect callback."))),(0,a.mdx)(y.X2,{key:"ROW6",mdxType:"Row"},(0,a.mdx)(y.O,{mdxType:"PropNameCell"},"onSelect"),(0,a.mdx)(y.Di,{mdxType:"TypeCell"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"func\n"))),(0,a.mdx)(y.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,a.mdx)(y.mW,{mdxType:"DefaultValueCell"},(0,a.mdx)("p",null,"none")),(0,a.mdx)(y.Ex,{mdxType:"DescriptionCell"},(0,a.mdx)("p",null,"Function callback for when the appropriate click or key action is performed.\nCallback contains the javascript evnt and prop metadata, e.g. onSelect(event, metaData)"))),(0,a.mdx)(y.X2,{key:"ROW7",mdxType:"Row"},(0,a.mdx)(y.O,{mdxType:"PropNameCell"},"refCallback"),(0,a.mdx)(y.Di,{mdxType:"TypeCell"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"func\n"))),(0,a.mdx)(y.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,a.mdx)(y.mW,{mdxType:"DefaultValueCell"},(0,a.mdx)("p",null,"none")),(0,a.mdx)(y.Ex,{mdxType:"DescriptionCell"},(0,a.mdx)("p",null,"Function callback for the ref of the li.")))))}S.isMDXComponent=!0;var T=["components"];function N(){return N=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var l=arguments[t];for(var n in l)Object.prototype.hasOwnProperty.call(l,n)&&(e[n]=l[n])}return e},N.apply(this,arguments)}function j(e,t){if(null==e)return{};var l,n,a=function(e,t){if(null==e)return{};var l,n,a={},r=Object.keys(e);for(n=0;n<r.length;n++)l=r[n],t.indexOf(l)>=0||(a[l]=e[l]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)l=r[n],t.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(a[l]=e[l])}return a}var C={},D="wrapper";function P(e){var t=e.components,l=j(e,T);return(0,a.mdx)(D,N({},C,l,{components:t,mdxType:"MDXLayout"}),(0,a.mdx)(r.C,{mdxType:"Badge"}),(0,a.mdx)("h1",{id:"list-item"},"List Item"),(0,a.mdx)("p",null,"The list item provides a pattern for selection/selectability for li surrounded child content. Whenever, the list item has a prop ",(0,a.mdx)("inlineCode",{parentName:"p"},"isSelectable=true")," then ",(0,a.mdx)("inlineCode",{parentName:"p"},"aria-label")," must be provided to List for accessibility.  The onSelect event is the primary means for interaction, as it yields the associated metaData when valid selection occurs, though individual onClick and onKeyDown events can be applied through the use of customProps if greater granularity is required."),(0,a.mdx)("h2",{id:"usage"},"Usage"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-jsx"},"import List, { Item } from 'terra-list/lib/List';\n")),(0,a.mdx)("h2",{id:"examples"},"Examples"),(0,a.mdx)(x,{mdxType:"ListItemExample"}),(0,a.mdx)(f.Z,{mdxType:"ListDraggableExample"}),(0,a.mdx)("h2",{id:"list-item-props"},"List Item Props"),(0,a.mdx)(S,{mdxType:"ListItemPropsTable"}))}P.isMDXComponent=!0},49456:function(e,t,l){l.d(t,{Z:function(){return u}});var n=l(67294),a=l(83568),r=l(81254),o=["components"];function i(){return i=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var l=arguments[t];for(var n in l)Object.prototype.hasOwnProperty.call(l,n)&&(e[n]=l[n])}return e},i.apply(this,arguments)}function m(e,t){if(null==e)return{};var l,n,a=function(e,t){if(null==e)return{};var l,n,a={},r=Object.keys(e);for(n=0;n<r.length;n++)l=r[n],t.indexOf(l)>=0||(a[l]=e[l]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)l=r[n],t.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(a[l]=e[l])}return a}var c={};function d(e){var t=e.components,l=m(e,o);return(0,r.mdx)("wrapper",i({},c,l,{components:t,mdxType:"MDXLayout"}),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-jsx"},'import React from \'react\';\nimport List, { Item } from \'terra-list/lib/index\';\nimport { Placeholder } from \'@cerner/terra-docs\';\nimport classNames from \'classnames/bind\';\nimport styles from \'./ListDocCommon.module.scss\';\n\nconst cx = classNames.bind(styles);\n\nconst ListDraggableExample = () => (\n  <>\n    <p id="list-help">\n      Select a patient from the list to view patient details.\n    </p>\n    <List role="listbox" ariaDescribedBy="list-help" aria-label="list of patient" isDraggable>\n      <Item\n        key="1"\n        isSelectable\n        isSelected\n      >\n        <Placeholder title="John Smith" className={cx(\'placeholder\')} />\n      </Item>\n      <Item\n        key="2"\n        isSelectable\n      >\n        <Placeholder title="Mary Jones" className={cx(\'placeholder\')} />\n      </Item>\n      <Item\n        key="3"\n        isSelectable\n      >\n        <Placeholder title="Sam Brown" className={cx(\'placeholder\')} />\n      </Item>\n      <Item\n        key="4"\n        isSelectable\n      >\n        <Placeholder title="John David" className={cx(\'placeholder\')} />\n      </Item>\n    </List>\n  </>\n);\n\nexport default ListDraggableExample;\n\n')))}d.isMDXComponent=!0;var s=l(49271),p=l(63443),u=function(e){var t=e.title,l=e.description,r=e.isExpanded;return n.createElement(s.Z,{title:t||"Draggable List Item",description:l,example:n.createElement(a.Z,null),exampleCssSrc:n.createElement(p.Z,null),exampleSrc:n.createElement(d,null),isExpanded:r})}}}]);