"use strict";(self.webpackChunkterra_ui=self.webpackChunkterra_ui||[]).push([[22995,45627,37344,33667,96890,14041,27444,85565,3353,80858,17657,5161,45865,85355,3193,33315,4845,20444,26806,46647,85161,38681,17763,15318,40411,18101,38443,78996,39915,33442],{49271:function(e,t,n){var a=n(64836),r=n(18698);t.Z=void 0;var l=a(n(27424)),i=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==r(e)&&"function"!=typeof e)return{default:e};var n=f(t);if(n&&n.has(e))return n.get(e);var a={},l=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if("default"!==i&&Object.prototype.hasOwnProperty.call(e,i)){var o=l?Object.getOwnPropertyDescriptor(e,i):null;o&&(o.get||o.set)?Object.defineProperty(a,i,o):a[i]=e[i]}a.default=e,n&&n.set(e,a);return a}(n(67294)),o=a(n(45697)),d=a(n(47166)),m=n(21538),s=a(n(33864)),p=a(n(23399)),c=n(51051),u=a(n(53560));function f(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(f=function(e){return e?n:t})(e)}var x=d.default.bind(u.default),y={example:o.default.element,exampleSrc:o.default.element,exampleCssSrc:o.default.element,title:o.default.string,description:o.default.node,isExpanded:o.default.bool},g=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","true")},h=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","false")},v=function(e){var t=e.example,n=e.exampleSrc,a=e.exampleCssSrc,r=e.title,o=e.description,d=e.isExpanded,u=(0,i.useState)(d),f=(0,l.default)(u,2),y=f[0],v=f[1],b=(0,i.useState)(!1),O=(0,l.default)(b,2),N=O[0],E=O[1],T=i.default.useContext(m.ThemeContext),_=void 0!==a,C=function(){E(!N),y&&v(!y)},w=function(){v(!y),N&&E(!N)},j=function(e,t){e.nativeEvent.keyCode!==c.KEY_SPACE&&e.nativeEvent.keyCode!==c.KEY_RETURN||(e.preventDefault(),t())};return i.default.createElement("div",{className:x("template",T.className)},i.default.createElement("div",{className:x("header")},r&&i.default.createElement("h2",{className:x("title")},r)),i.default.createElement("div",{className:x("content")},o&&i.default.createElement("div",{className:x("description")},o),t),i.default.createElement("div",{className:x("footer")},n?i.default.createElement("div",{className:x("button-container")},_&&i.default.createElement("button",{type:"button",className:x("css-toggle","item",{"is-selected":N}),onClick:C,onKeyDown:function(e){return j(e,C)},onBlur:g,onMouseDown:h,tabIndex:0,"data-focus-styles-enabled":!0},i.default.createElement(s.default,{className:x("chevron")}),i.default.createElement("span",null,"CSS"),i.default.createElement(p.default,{className:x("chevron")})),i.default.createElement("button",{type:"button",className:x("code-toggle","item",{"is-selected":y}),onClick:w,onKeyDown:function(e){return j(e,w)},onBlur:g,onMouseDown:h,tabIndex:0,"data-focus-styles-enabled":!0},i.default.createElement(s.default,{className:x("chevron")}),i.default.createElement("span",null,"Code"),i.default.createElement(p.default,{className:x("chevron")}))):null,i.default.createElement("div",null,N&&i.default.createElement("div",{className:x("css")},a),y&&i.default.createElement("div",{className:x("code")},n))))};v.propTypes=y,v.defaultProps={isExpanded:!1};var b=v;t.Z=b},49738:function(e,t,n){var a=n(64836);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a(n(67294)),l=a(n(47166)),i=n(34261),o=a(n(59137)),d=l.default.bind(o.default),m=function(){return r.default.createElement("div",{className:d("indicator")},r.default.createElement(i.Placeholder,{title:"I'm Loading"}))};t.default=m},50635:function(e,t,n){var a=n(64836);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a(n(67294)),l=a(n(47166)),i=n(34261),o=a(n(75445)),d=l.default.bind(o.default),m=function(){return r.default.createElement("div",{className:d("indicator")},r.default.createElement(i.Placeholder,{title:"I'm Loading More"}))};t.default=m},91955:function(e,t,n){var a=n(64836);t.Z=void 0;var r=a(n(67294)),l=a(n(30869)),i=a(n(49738)),o=a(n(6805)),d=function(){return r.default.createElement(o.default,null,r.default.createElement(l.default,{dividerStyle:"standard",ariaLabel:"Initial Loading",initialLoadingIndicator:r.default.createElement(i.default,null)}))};t.Z=d},37712:function(e,t,n){var a=n(64836),r=n(18698);t.Z=void 0;var l=a(n(67294)),i=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==r(e)&&"function"!=typeof e)return{default:e};var n=c(t);if(n&&n.has(e))return n.get(e);var a={},l=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if("default"!==i&&Object.prototype.hasOwnProperty.call(e,i)){var o=l?Object.getOwnPropertyDescriptor(e,i):null;o&&(o.get||o.set)?Object.defineProperty(a,i,o):a[i]=e[i]}a.default=e,n&&n.set(e,a);return a}(n(30869)),o=n(34261),d=a(n(47166)),m=a(n(50635)),s=a(n(6805)),p=a(n(43315));function c(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(c=function(e){return e?n:t})(e)}var u=d.default.bind(p.default),f=function(){return l.default.createElement(s.default,null,l.default.createElement(i.default,{dividerStyle:"standard",ariaLabel:"Progressive Loading",progressiveLoadingIndicator:l.default.createElement(m.default,null)},l.default.createElement(i.Item,{key:"item-1"},l.default.createElement(o.Placeholder,{title:"Item 1",className:u("placeholder")}))))};t.Z=f},74979:function(e,t,n){var a=n(64836),r=n(18698);t.Z=void 0;var l=a(n(67294)),i=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==r(e)&&"function"!=typeof e)return{default:e};var n=c(t);if(n&&n.has(e))return n.get(e);var a={},l=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if("default"!==i&&Object.prototype.hasOwnProperty.call(e,i)){var o=l?Object.getOwnPropertyDescriptor(e,i):null;o&&(o.get||o.set)?Object.defineProperty(a,i,o):a[i]=e[i]}a.default=e,n&&n.set(e,a);return a}(n(30869)),o=n(34261),d=a(n(47166)),m=a(n(17224)),s=a(n(6805)),p=a(n(43315));function c(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(c=function(e){return e?n:t})(e)}var u=d.default.bind(p.default),f=function(e){return e.map((function(e){return t=e,l.default.createElement(i.Item,{key:t.key},l.default.createElement(o.Placeholder,{title:t.title,className:u("placeholder")}));var t}))},x=function(){return l.default.createElement(s.default,null,l.default.createElement(i.default,{dividerStyle:"standard",isFinishedLoading:!0,ariaLabel:"Virtualized"},f(m.default)))};t.Z=x},17224:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=function(){for(var e=[],t=0;t<100;t+=1)e.push({title:"Item ".concat(t),key:"unique-".concat(t)});return e}();t.default=n},50348:function(e,t,n){n.r(t),n.d(t,{default:function(){return G}});var a=n(67294),r=n(81254),l=n(76173),i=n(34261),o=n(78530),d=["components"];function m(){return m=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},m.apply(this,arguments)}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p={},c="wrapper";function u(e){var t=e.components,n=s(e,d);return(0,r.mdx)(c,m({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.mdx)(o.ZP,{mdxType:"PropsTable"},(0,r.mdx)(o.X2,{key:"ROW1",mdxType:"Row"},(0,r.mdx)(o.O,{mdxType:"PropNameCell"},"ariaLabel"),(0,r.mdx)(o.Di,{mdxType:"TypeCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"string\n"))),(0,r.mdx)(o.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,r.mdx)(o.mW,{mdxType:"DefaultValueCell"},(0,r.mdx)("p",null,"none")),(0,r.mdx)(o.Ex,{mdxType:"DescriptionCell"},(0,r.mdx)("p",null,"String that labels the list for screen readers."))),(0,r.mdx)(o.X2,{key:"ROW2",mdxType:"Row"},(0,r.mdx)(o.O,{mdxType:"PropNameCell"},"children"),(0,r.mdx)(o.Di,{mdxType:"TypeCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"node\n"))),(0,r.mdx)(o.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,r.mdx)(o.mW,{mdxType:"DefaultValueCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"[]\n"))),(0,r.mdx)(o.Ex,{mdxType:"DescriptionCell"},(0,r.mdx)("p",null,"The child list items, of type InfiniteList Item, to be placed within the infinite list.\nFor further documentation of InfiniteList Item see terra-list's ListItem."))),(0,r.mdx)(o.X2,{key:"ROW3",mdxType:"Row"},(0,r.mdx)(o.O,{mdxType:"PropNameCell"},"dividerStyle"),(0,r.mdx)(o.Di,{mdxType:"TypeCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"enum: [\n  'none'\n  'standard'\n  'bottom-only'\n],\n"))),(0,r.mdx)(o.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,r.mdx)(o.mW,{mdxType:"DefaultValueCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"'none'\n"))),(0,r.mdx)(o.Ex,{mdxType:"DescriptionCell"},(0,r.mdx)("p",null,"Whether or not the list's child items should have a border color applied.\nOne of ",(0,r.mdx)("inlineCode",{parentName:"p"},"'none'"),", ",(0,r.mdx)("inlineCode",{parentName:"p"},"'standard'"),", ",(0,r.mdx)("inlineCode",{parentName:"p"},"'bottom-only'"),"."))),(0,r.mdx)(o.X2,{key:"ROW4",mdxType:"Row"},(0,r.mdx)(o.O,{mdxType:"PropNameCell"},"initialLoadingIndicator"),(0,r.mdx)(o.Di,{mdxType:"TypeCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"element\n"))),(0,r.mdx)(o.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,r.mdx)(o.mW,{mdxType:"DefaultValueCell"},(0,r.mdx)("p",null,"none")),(0,r.mdx)(o.Ex,{mdxType:"DescriptionCell"},(0,r.mdx)("p",null,"An indicator to be displayed when no children are yet present."))),(0,r.mdx)(o.X2,{key:"ROW5",mdxType:"Row"},(0,r.mdx)(o.O,{mdxType:"PropNameCell"},"isFinishedLoading"),(0,r.mdx)(o.Di,{mdxType:"TypeCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"bool\n"))),(0,r.mdx)(o.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,r.mdx)(o.mW,{mdxType:"DefaultValueCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"false\n"))),(0,r.mdx)(o.Ex,{mdxType:"DescriptionCell"},(0,r.mdx)("p",null,"Determines whether or not the loading indicator is visible and if callbacks are triggered."))),(0,r.mdx)(o.X2,{key:"ROW6",mdxType:"Row"},(0,r.mdx)(o.O,{mdxType:"PropNameCell"},"onRequestItems"),(0,r.mdx)(o.Di,{mdxType:"TypeCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"func\n"))),(0,r.mdx)(o.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,r.mdx)(o.mW,{mdxType:"DefaultValueCell"},(0,r.mdx)("p",null,"none")),(0,r.mdx)(o.Ex,{mdxType:"DescriptionCell"},(0,r.mdx)("p",null,"Callback trigger when new list items are requested."))),(0,r.mdx)(o.X2,{key:"ROW7",mdxType:"Row"},(0,r.mdx)(o.O,{mdxType:"PropNameCell"},"paddingStyle"),(0,r.mdx)(o.Di,{mdxType:"TypeCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"enum: [\n  'none'\n  'standard'\n  'compact'\n],\n"))),(0,r.mdx)(o.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,r.mdx)(o.mW,{mdxType:"DefaultValueCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"'none'\n"))),(0,r.mdx)(o.Ex,{mdxType:"DescriptionCell"},(0,r.mdx)("p",null,"The padding styling to apply to the child list item content.\nOne of ",(0,r.mdx)("inlineCode",{parentName:"p"},"'none'"),", ",(0,r.mdx)("inlineCode",{parentName:"p"},"'standard'"),", ",(0,r.mdx)("inlineCode",{parentName:"p"},"'compact'"),"."))),(0,r.mdx)(o.X2,{key:"ROW8",mdxType:"Row"},(0,r.mdx)(o.O,{mdxType:"PropNameCell"},"progressiveLoadingIndicator"),(0,r.mdx)(o.Di,{mdxType:"TypeCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"element\n"))),(0,r.mdx)(o.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,r.mdx)(o.mW,{mdxType:"DefaultValueCell"},(0,r.mdx)("p",null,"none")),(0,r.mdx)(o.Ex,{mdxType:"DescriptionCell"},(0,r.mdx)("p",null,"An indicator to be displayed at the end of the current loaded children."))),(0,r.mdx)(o.X2,{key:"ROW9",mdxType:"Row"},(0,r.mdx)(o.O,{mdxType:"PropNameCell"},"progressiveLoadingMessage"),(0,r.mdx)(o.Di,{mdxType:"TypeCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"string\n"))),(0,r.mdx)(o.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,r.mdx)(o.mW,{mdxType:"DefaultValueCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"undefined\n"))),(0,r.mdx)(o.Ex,{mdxType:"DescriptionCell"},(0,r.mdx)("p",null,"A message to be provided to screen readers as new items are progressively loaded in"))),(0,r.mdx)(o.X2,{key:"ROW10",mdxType:"Row"},(0,r.mdx)(o.O,{mdxType:"PropNameCell"},"role"),(0,r.mdx)(o.Di,{mdxType:"TypeCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"string\n"))),(0,r.mdx)(o.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,r.mdx)(o.mW,{mdxType:"DefaultValueCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"'none'\n"))),(0,r.mdx)(o.Ex,{mdxType:"DescriptionCell"},(0,r.mdx)("p",null,"Accessibility role of the list, defaults to 'none'. If creating a list with selectable items, pass 'listbox'."))),(0,r.mdx)(o.X2,{key:"ROW11",mdxType:"Row"},(0,r.mdx)(o.O,{mdxType:"PropNameCell"},"refCallback"),(0,r.mdx)(o.Di,{mdxType:"TypeCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"func\n"))),(0,r.mdx)(o.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,r.mdx)(o.mW,{mdxType:"DefaultValueCell"},(0,r.mdx)("p",null,"none")),(0,r.mdx)(o.Ex,{mdxType:"DescriptionCell"},(0,r.mdx)("p",null,"Function callback for the ref of the List(ul).")))))}u.isMDXComponent=!0;var f=n(91955),x=["components"];function y(){return y=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},y.apply(this,arguments)}function g(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var h={};function v(e){var t=e.components,n=g(e,x);return(0,r.mdx)("wrapper",y({},h,n,{components:t,mdxType:"MDXLayout"}),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport InfiniteList from 'terra-infinite-list';\n\nimport MyInitialLoadingIndicator from '../common/MyInitialLoadingIndicator';\nimport MyExampleContainer from '../common/MyExampleContainer';\n\nconst InitialLoadingExample = () => (\n  <MyExampleContainer>\n    <InfiniteList\n      dividerStyle=\"standard\"\n      ariaLabel=\"Initial Loading\"\n      initialLoadingIndicator={<MyInitialLoadingIndicator />}\n    />\n  </MyExampleContainer>\n);\n\nexport default InitialLoadingExample;\n\n")))}v.isMDXComponent=!0;var b=n(49271),O=function(e){var t=e.title,n=e.description,r=e.isExpanded;return a.createElement(b.Z,{title:t||"Initial Loading Example",description:n,example:a.createElement(f.Z,null),exampleSrc:a.createElement(v,null),isExpanded:r})},N=n(37712),E=["components"];function T(){return T=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},T.apply(this,arguments)}function _(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var C={};function w(e){var t=e.components,n=_(e,E);return(0,r.mdx)("wrapper",T({},C,n,{components:t,mdxType:"MDXLayout"}),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport InfiniteList, { Item } from 'terra-infinite-list';\nimport { Placeholder } from '@cerner/terra-docs';\nimport classNames from 'classnames/bind';\n\nimport MyProgressiveLoadingIndicator from '../common/MyProgressiveLoadingIndicator';\nimport MyExampleContainer from '../common/MyExampleContainer';\nimport styles from './InfiniteListDocExampleCommon.module.scss';\n\nconst cx = classNames.bind(styles);\n\nconst ProgressiveLoadingExample = () => (\n  <MyExampleContainer>\n    <InfiniteList\n      dividerStyle=\"standard\"\n      ariaLabel=\"Progressive Loading\"\n      progressiveLoadingIndicator={<MyProgressiveLoadingIndicator />}\n    >\n      <Item key=\"item-1\">\n        <Placeholder title=\"Item 1\" className={cx('placeholder')} />\n      </Item>\n    </InfiniteList>\n  </MyExampleContainer>\n);\n\nexport default ProgressiveLoadingExample;\n\n")))}w.isMDXComponent=!0;var j=["components"];function I(){return I=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},I.apply(this,arguments)}function P(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var L={};function D(e){var t=e.components,n=P(e,j);return(0,r.mdx)("wrapper",I({},L,n,{components:t,mdxType:"MDXLayout"}),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-scss"},":local {\n  .placeholder {\n    height: 50px;\n  }\n\n  .item-content {\n    height: 50px;\n    width: 100%;\n  }\n\n  .main-content {\n    border: 1px solid #000;\n    height: 300px;\n    position: relative;\n    width: 100%;\n  }\n}\n\n")))}D.isMDXComponent=!0;var k=function(e){var t=e.title,n=e.description,r=e.isExpanded;return a.createElement(b.Z,{title:t||"Progressive Loading Example",description:n,example:a.createElement(N.Z,null),exampleCssSrc:a.createElement(D,null),exampleSrc:a.createElement(w,null),isExpanded:r})},M=n(74979),S=["components"];function R(){return R=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},R.apply(this,arguments)}function W(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var q={};function X(e){var t=e.components,n=W(e,S);return(0,r.mdx)("wrapper",R({},q,n,{components:t,mdxType:"MDXLayout"}),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport InfiniteList, { Item } from 'terra-infinite-list';\nimport { Placeholder } from '@cerner/terra-docs';\nimport classNames from 'classnames/bind';\n\nimport mockData from './mock-data/virtualizedData';\nimport MyExampleContainer from '../common/MyExampleContainer';\nimport styles from './InfiniteListDocExampleCommon.module.scss';\n\nconst cx = classNames.bind(styles);\n\nconst createListItem = itemData => (\n  <Item key={itemData.key}>\n    <Placeholder title={itemData.title} className={cx('placeholder')} />\n  </Item>\n);\n\nconst createItems = data => data.map(item => createListItem(item));\n\nconst VirtualizedExample = () => (\n  <MyExampleContainer>\n    <InfiniteList\n      dividerStyle=\"standard\"\n      isFinishedLoading\n      ariaLabel=\"Virtualized\"\n    >\n      {createItems(mockData)}\n    </InfiniteList>\n  </MyExampleContainer>\n);\n\nexport default VirtualizedExample;\n\n")))}X.isMDXComponent=!0;var V=function(e){var t=e.title,n=e.description,r=e.isExpanded;return a.createElement(b.Z,{title:t||"Virtualized Example",description:n,example:a.createElement(M.Z,null),exampleCssSrc:a.createElement(D,null),exampleSrc:a.createElement(X,null),isExpanded:r})},Z=["components"];function F(){return F=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},F.apply(this,arguments)}function z(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var A={},B="wrapper";function G(e){var t=e.components,n=z(e,Z);return(0,r.mdx)(B,F({},A,n,{components:t,mdxType:"MDXLayout"}),(0,r.mdx)(l.C,{mdxType:"Badge"}),(0,r.mdx)("p",null,(0,r.mdx)("a",{parentName:"p",href:"https://github.com/cerner/terra-framework/blob/main/packages/terra-infinite-list#readme"},(0,r.mdx)("img",{parentName:"a",src:"https://badgen.net/badge/status/Deprecated/grey",alt:"Deprecated"}))),(0,r.mdx)("h1",{id:"terra-infinite-list"},"Terra Infinite List"),(0,r.mdx)(i.Notice,{variant:"deprecation",mdxType:"Notice"},(0,r.mdx)("p",null,"The terra-infinite-list component has been deprecated and is no longer recommended for use."),(0,r.mdx)("p",null,"From a usability perspective, infinite scrolling is a pattern designed and best used when users are casually looking for or discovering things, like shopping and social media. The infinite scrolling pattern should not be used for ",(0,r.mdx)("a",{parentName:"p",href:"https://www.nngroup.com/articles/infinite-scrolling/"},"goal-oriented tasks"),". Cerner products and our users most often fall into goal-oriented workflows. Users should have proper navigation methods (pagination) to navigate to predetermined points within the content easily."),(0,r.mdx)("p",null,"Infinite scrolling also poses significant accessibility challenges for multiple user groups:"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},"Keyboard-only users have to navigate the entire infinite scroll to get to the content below or to the side of the endless loading content. This creates a very time-consuming and unnecessary burden for the keyboard-only user."),(0,r.mdx)("li",{parentName:"ul"},"Screen reader users would have the same problem even though they have more ways to navigate content on the page. When content is dynamically loaded and not within the DOM, screen reader users won't have access to any of that content which poses more significant challenges than just navigating."),(0,r.mdx)("li",{parentName:"ul"},"Focus can be lost when new content loads. Unless focus is managed, sighted keyboard-only users will have difficulties finding where they are on the page."),(0,r.mdx)("li",{parentName:"ul"},"For data with hierarchical relationships, infinite scrolling can make it difficult for screen readers to effectively communicate the required context if related content is split between loaded and unloaded content.")),(0,r.mdx)("p",null,"The ",(0,r.mdx)("a",{parentName:"p",href:"https://engineering.cerner.com/terra-ui/components/cerner-terra-core-docs/paginator/paginator"},"terra-paginator")," should be considered as an alternative approach to paging large amounts of data.")),(0,r.mdx)("p",null,"The infinite list component provides virtual dom management and data request callbacks to manage large data sets within a list.\nInfiniteList is a controlled HOC built upon the ",(0,r.mdx)("inlineCode",{parentName:"p"},"terra-list")," component in order to allow for list style and selection patterns."),(0,r.mdx)("h2",{id:"getting-started"},"Getting Started"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},"Install with ",(0,r.mdx)("a",{parentName:"li",href:"https://www.npmjs.com/"},"npmjs"),":",(0,r.mdx)("ul",{parentName:"li"},(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("inlineCode",{parentName:"li"},"npm install terra-infinite-list"))))),(0,r.mdx)("h2",{id:"peer-dependencies"},"Peer Dependencies"),(0,r.mdx)("p",null,"This component requires the following peer dependencies be installed in your app for the component to properly function."),(0,r.mdx)("table",null,(0,r.mdx)("thead",{parentName:"table"},(0,r.mdx)("tr",{parentName:"thead"},(0,r.mdx)("th",{parentName:"tr",align:null},"Peer Dependency"),(0,r.mdx)("th",{parentName:"tr",align:null},"Version"))),(0,r.mdx)("tbody",{parentName:"table"},(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"react"),(0,r.mdx)("td",{parentName:"tr",align:null},"^16.8.5")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"react-dom"),(0,r.mdx)("td",{parentName:"tr",align:null},"^16.8.5")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"react-intl"),(0,r.mdx)("td",{parentName:"tr",align:null},"^2.8.0")))),(0,r.mdx)("h2",{id:"component-features"},"Component Features"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("a",{parentName:"li",href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#cross-browser-support"},"Cross-Browser Support")),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("a",{parentName:"li",href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#responsive-support"},"Responsive Support")),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("a",{parentName:"li",href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#mobile-support"},"Mobile Support"))),(0,r.mdx)("h2",{id:"list-item-selection"},"List Item Selection"),(0,r.mdx)("p",null,"Management of list selection is provided by the HOC implementing the InfiniteList. For an example of list item selection you can refer to List's documentation:"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("a",{parentName:"li",href:"https://engineering.cerner.com/terra-ui/#/components/terra-list/list/guides/single-select-list"},"Single Select List")),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("a",{parentName:"li",href:"https://engineering.cerner.com/terra-ui/#/components/terra-list/list/guides/multi-select-list"},"Multi Select List"))),(0,r.mdx)("h2",{id:"examples"},"Examples"),(0,r.mdx)(O,{title:"Example Initial Loading Indicator",mdxType:"InitialLoadingExample"}),(0,r.mdx)(k,{title:"Example Progressive Loading Indicator",mdxType:"ProgressiveLoadingExample"}),(0,r.mdx)(V,{title:"Example Virtualized List",mdxType:"VirtualizedExample"}),(0,r.mdx)("h2",{id:"infinite-list-props-table"},"Infinite List Props Table"),(0,r.mdx)(u,{mdxType:"InfiniteListSrc"}))}G.isMDXComponent=!0},53560:function(e,t,n){n.r(t),t.default={"clinical-lowlight-theme":"ExampleTemplate-module__clinical-lowlight-theme___rBbtD","orion-fusion-theme":"ExampleTemplate-module__orion-fusion-theme___GzA23",template:"ExampleTemplate-module__template___a4uPk",header:"ExampleTemplate-module__header___iFXV3",content:"ExampleTemplate-module__content___48m4Q",description:"ExampleTemplate-module__description___NwBJo",footer:"ExampleTemplate-module__footer___GpSoG","button-container":"ExampleTemplate-module__button-container___rAD11",css:"ExampleTemplate-module__css___+jtk1",code:"ExampleTemplate-module__code___7rC6C","css-toggle":"ExampleTemplate-module__css-toggle___chHK7","code-toggle":"ExampleTemplate-module__code-toggle___TGlE-","is-selected":"ExampleTemplate-module__is-selected___0BYwS",item:"ExampleTemplate-module__item___8FTQq",chevron:"ExampleTemplate-module__chevron___VbY7N",title:"ExampleTemplate-module__title___r+nbJ","dynamic-content":"ExampleTemplate-module__dynamic-content___k+1H7"}},59137:function(e,t,n){n.r(t),t.default={indicator:"MyInitialLoadingIndicator-module__indicator___uYEVR"}},75445:function(e,t,n){n.r(t),t.default={indicator:"MyProgressiveLoadingIndicator-module__indicator___JTGPM"}},33864:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=l(n(67294)),r=l(n(99139));function l(e){return e&&e.__esModule?e:{default:e}}function i(){return i=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},i.apply(this,arguments)}var o=function(e){var t=i({},e);return a.default.createElement(r.default,t,a.default.createElement("path",{d:"M10.3 24 33.8 0l3.9 3.8L18 24l19.7 20.2-3.9 3.8z"}))};o.displayName="IconChevronLeft",o.defaultProps={viewBox:"0 0 48 48","data-name":"Layer 1",xmlns:"http://www.w3.org/2000/svg"};var d=o;t.default=d}}]);