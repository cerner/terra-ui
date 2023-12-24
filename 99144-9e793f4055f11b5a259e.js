"use strict";(self.webpackChunkterra_ui=self.webpackChunkterra_ui||[]).push([[99144],{84369:function(e,t,n){var a=n(64836);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a(n(67294)),o=a(n(45697)),l=a(n(47166)),m=a(n(60721)),u=l.default.bind(m.default),i=function(e){var t=e.layoutConfig;return r.default.createElement("div",{className:u("content-wrapper1")},r.default.createElement("div",{className:u("content-wrapper2")},r.default.createElement("h2",{className:u("content-text")},"Content"),t.toggleMenu&&r.default.createElement("button",{type:"button",className:u("button"),onClick:t.toggleMenu},"Toggle Menu")))};i.propTypes={layoutConfig:o.default.shape({toggleMenu:o.default.func})};t.default=i},49081:function(e,t,n){var a=n(64836);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a(n(67294)),o=a(n(45697)),l=a(n(47166)),m=a(n(60721)),u=l.default.bind(m.default),i=function(e){var t=e.layoutConfig;return r.default.createElement("div",{className:u("content-wrapper1")},r.default.createElement("div",{className:u("content-wrapper2")},r.default.createElement("h2",{className:u("content-text")},"Menu"),t.toggleMenu&&r.default.createElement("button",{type:"button",className:u("button"),onClick:t.toggleMenu},"Toggle Menu"),t.togglePin&&!t.menuIsPinned&&r.default.createElement("button",{type:"button",className:u("button"),onClick:t.togglePin},"Pin"),t.togglePin&&t.menuIsPinned&&r.default.createElement("button",{type:"button",className:u("button"),onClick:t.togglePin},"Unpin")))};i.propTypes={layoutConfig:o.default.shape({toggleMenu:o.default.func,togglePin:o.default.func,menuIsPinned:o.default.bool})};t.default=i},11787:function(e,t,n){var a=n(64836);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a(n(67294)),o=a(n(45697)),l=a(n(47166)),m=a(n(23349)),u=l.default.bind(m.default),i={layoutConfig:o.default.object},p=function(e){var t=e.layoutConfig;return r.default.createElement("div",{className:u("content-wrapper1")},r.default.createElement("div",{className:u("content-wrapper2")},r.default.createElement("h2",{className:u("content-text")},"Header"),t.toggleMenu&&r.default.createElement("button",{type:"button",className:u("button"),onClick:t.toggleMenu},"Toggle Menu")))};p.propTypes=i;t.default=p},28711:function(e,t,n){var a=n(64836);t.Z=void 0;var r=a(n(67294)),o=a(n(41926)),l=a(n(47166)),m=a(n(84369)),u=a(n(11787)),i=a(n(36927)),p=l.default.bind(i.default);t.Z=function(){return r.default.createElement(o.default,{header:r.default.createElement(u.default,null),className:p("layout-example")},r.default.createElement(m.default,null))}},13577:function(e,t,n){var a=n(64836);t.Z=void 0;var r=a(n(67294)),o=a(n(41926)),l=a(n(47166)),m=a(n(84369)),u=a(n(49081)),i=a(n(36927)),p=l.default.bind(i.default);t.Z=function(){return r.default.createElement(o.default,{menu:r.default.createElement(u.default,null),menuText:"Menu",className:p("layout-example")},r.default.createElement(m.default,null))}},30269:function(e,t,n){var a=n(64836);t.Z=void 0;var r=a(n(67294)),o=a(n(41926)),l=a(n(47166)),m=a(n(84369)),u=a(n(49081)),i=a(n(11787)),p=a(n(36927)),d=l.default.bind(p.default);t.Z=function(){return r.default.createElement(o.default,{header:r.default.createElement(i.default,null),menu:r.default.createElement(u.default,null),menuText:"Menu",className:d("layout-example")},r.default.createElement(m.default,null))}},99144:function(e,t,n){n.r(t),n.d(t,{default:function(){return B}});var a=n(67294),r=n(81254),o=n(65911),l=n(78530),m=["components"];function u(){return u=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},u.apply(this,arguments)}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p={},d="wrapper";function s(e){var t=e.components,n=i(e,m);return(0,r.mdx)(d,u({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.mdx)(l.ZP,{mdxType:"PropsTable"},(0,r.mdx)(l.X2,{key:"ROW1",mdxType:"Row"},(0,r.mdx)(l.O,{mdxType:"PropNameCell"},"header"),(0,r.mdx)(l.Di,{mdxType:"TypeCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"element\n"))),(0,r.mdx)(l.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,r.mdx)(l.mW,{mdxType:"DefaultValueCell"},(0,r.mdx)("p",null,"none")),(0,r.mdx)(l.Ex,{mdxType:"DescriptionCell"},(0,r.mdx)("p",null,"Element to be placed within the header section of the layout."))),(0,r.mdx)(l.X2,{key:"ROW2",mdxType:"Row"},(0,r.mdx)(l.O,{mdxType:"PropNameCell"},"menu"),(0,r.mdx)(l.Di,{mdxType:"TypeCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"element\n"))),(0,r.mdx)(l.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,r.mdx)(l.mW,{mdxType:"DefaultValueCell"},(0,r.mdx)("p",null,"none")),(0,r.mdx)(l.Ex,{mdxType:"DescriptionCell"},(0,r.mdx)("p",null,"Element to be placed within the menu section of the layout. If not set, Layout-provided menu controls will be hidden."))),(0,r.mdx)(l.X2,{key:"ROW3",mdxType:"Row"},(0,r.mdx)(l.O,{mdxType:"PropNameCell"},"menuText"),(0,r.mdx)(l.Di,{mdxType:"TypeCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"string\n"))),(0,r.mdx)(l.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,r.mdx)(l.mW,{mdxType:"DefaultValueCell"},(0,r.mdx)("p",null,"none")),(0,r.mdx)(l.Ex,{mdxType:"DescriptionCell"},(0,r.mdx)("p",null,"String used to decorate menu hover control."))),(0,r.mdx)(l.X2,{key:"ROW4",mdxType:"Row"},(0,r.mdx)(l.O,{mdxType:"PropNameCell"},"children"),(0,r.mdx)(l.Di,{mdxType:"TypeCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"element\n"))),(0,r.mdx)(l.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,r.mdx)(l.mW,{mdxType:"DefaultValueCell"},(0,r.mdx)("p",null,"none")),(0,r.mdx)(l.Ex,{mdxType:"DescriptionCell"},(0,r.mdx)("p",null,"Element to be placed within the main content section of the layout.")))))}s.isMDXComponent=!0;var c=n(30269),x=["components"];function f(){return f=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},f.apply(this,arguments)}function y(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var b={};function g(e){var t=e.components,n=y(e,x);return(0,r.mdx)("wrapper",f({},b,n,{components:t,mdxType:"MDXLayout"}),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport Layout from 'terra-layout';\nimport classNames from 'classnames/bind';\nimport ContentExample from '../common/ContentExample';\nimport MenuExample from '../common/MenuExample';\nimport ToolbarExample from '../common/ToolbarExample';\nimport styles from './LayoutDocExampleCommon.module.scss';\n\nconst cx = classNames.bind(styles);\n\nconst layout = () => (\n  <Layout\n    header={<ToolbarExample />}\n    menu={<MenuExample />}\n    menuText=\"Menu\"\n    className={cx('layout-example')}\n  >\n    <ContentExample />\n  </Layout>\n);\n\nexport default layout;\n\n")))}g.isMDXComponent=!0;var h=n(49271),v=["components"];function N(){return N=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},N.apply(this,arguments)}function C(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var E={};function O(e){var t=e.components,n=C(e,v);return(0,r.mdx)("wrapper",N({},E,n,{components:t,mdxType:"MDXLayout"}),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-scss"},":local {\n  .layout-example {\n    height: 400px;\n    width: 100%;\n  }\n}\n\n")))}O.isMDXComponent=!0;var T=function(e){var t=e.title,n=e.description,r=e.isExpanded;return a.createElement(h.Z,{title:t||"Layout Standard",description:n,example:a.createElement(c.Z,null),exampleCssSrc:a.createElement(O,null),exampleSrc:a.createElement(g,null),isExpanded:r})},w=n(28711),j=["components"];function _(){return _=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},_.apply(this,arguments)}function P(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var M={};function L(e){var t=e.components,n=P(e,j);return(0,r.mdx)("wrapper",_({},M,n,{components:t,mdxType:"MDXLayout"}),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport Layout from 'terra-layout';\nimport classNames from 'classnames/bind';\nimport ContentExample from '../common/ContentExample';\nimport ToolbarExample from '../common/ToolbarExample';\nimport styles from './LayoutDocExampleCommon.module.scss';\n\nconst cx = classNames.bind(styles);\n\nconst layout = () => (\n  <Layout\n    header={<ToolbarExample />}\n    className={cx('layout-example')}\n  >\n    <ContentExample />\n  </Layout>\n);\n\nexport default layout;\n\n")))}L.isMDXComponent=!0;var D=function(e){var t=e.title,n=e.description,r=e.isExpanded;return a.createElement(h.Z,{title:t||"Layout Menu Disabled",description:n,example:a.createElement(w.Z,null),exampleCssSrc:a.createElement(O,null),exampleSrc:a.createElement(L,null),isExpanded:r})},k=n(13577),S=["components"];function R(){return R=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},R.apply(this,arguments)}function X(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var I={};function Z(e){var t=e.components,n=X(e,S);return(0,r.mdx)("wrapper",R({},I,n,{components:t,mdxType:"MDXLayout"}),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport Layout from 'terra-layout';\nimport classNames from 'classnames/bind';\nimport ContentExample from '../common/ContentExample';\nimport MenuExample from '../common/MenuExample';\nimport styles from './LayoutDocExampleCommon.module.scss';\n\nconst cx = classNames.bind(styles);\n\nconst layout = () => (\n  <Layout\n    menu={<MenuExample />}\n    menuText=\"Menu\"\n    className={cx('layout-example')}\n  >\n    <ContentExample />\n  </Layout>\n);\n\nexport default layout;\n\n")))}Z.isMDXComponent=!0;var z=function(e){var t=e.title,n=e.description,r=e.isExpanded;return a.createElement(h.Z,{title:t||"Layout No Header",description:n,example:a.createElement(k.Z,null),exampleCssSrc:a.createElement(O,null),exampleSrc:a.createElement(Z,null),isExpanded:r})},W=["components"];function q(){return q=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},q.apply(this,arguments)}function H(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var A={},V="wrapper";function B(e){var t=e.components,n=H(e,W);return(0,r.mdx)(V,q({},A,n,{components:t,mdxType:"MDXLayout"}),(0,r.mdx)(o.C,{mdxType:"Badge"}),(0,r.mdx)("h1",{id:"terra-layout"},"Terra Layout"),(0,r.mdx)("p",null,"The Layout component provides a responsive starting point for the positioning of application components."),(0,r.mdx)("p",null,"The Layout is responsive at the following breakpoints (as defined by the ",(0,r.mdx)("a",{parentName:"p",href:"https://github.com/cerner/terra-core/blob/main/packages/terra-responsive-element/src/breakpoints.module.scss"},"terra-responsive-element"),"):"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},"Desktop ","[",(0,r.mdx)("inlineCode",{parentName:"li"},"medium"),", ",(0,r.mdx)("inlineCode",{parentName:"li"},"large"),", ",(0,r.mdx)("inlineCode",{parentName:"li"},"huge"),"]"," - The menu is pinned open and not dismissable. The content region is resized to account for the menu, and the menu is presented under the header content."),(0,r.mdx)("li",{parentName:"ul"},"Tablet ","[",(0,r.mdx)("inlineCode",{parentName:"li"},"small"),"]"," - The menu is disclosed by a programatic toggle provided to the header content. The header content must adhere to a Layout-specific prop API and properly display a toggle button if necessary. The header is overlaid by the menu when open, and the menu is dismissed by clicking in the negative overlay space."),(0,r.mdx)("li",{parentName:"ul"},"Phone ","[",(0,r.mdx)("inlineCode",{parentName:"li"},"tiny"),"]"," - This breakpoint's behavior is similar to that of Tablet, with the only difference being the menu size. The menu is presented as nearly full-screen, leaving only enough negative space to allow for dismissal.")),(0,r.mdx)("p",null,"To facilitate communication between the Layout and its content, the Layout provides a ",(0,r.mdx)("inlineCode",{parentName:"p"},"layoutConfig")," prop to the components in its various regions. The ",(0,r.mdx)("inlineCode",{parentName:"p"},"layoutConfig")," is an object that contains the various properties:"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("inlineCode",{parentName:"li"},"size")," - The current responsive size of the layout as rendered. Components can render based on this size rather than implement their own resize observers."),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("inlineCode",{parentName:"li"},"toggleMenu")," - A function that will toggle the current menu state open/closed. This function is provided only when the breakpoint is ",(0,r.mdx)("inlineCode",{parentName:"li"},"tiny")," or ",(0,r.mdx)("inlineCode",{parentName:"li"},"small"),"."),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("inlineCode",{parentName:"li"},"menuIsOpen")," - A boolean flag indicating whether or not the menu is currently displayed."),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("inlineCode",{parentName:"li"},"togglePin")," - A function that will toggle the current menu's pinned state. This function is provied only to the ",(0,r.mdx)("inlineCode",{parentName:"li"},"menu")," component and only when the breakpoint size is ",(0,r.mdx)("inlineCode",{parentName:"li"},"medium"),"."),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("inlineCode",{parentName:"li"},"menuIsPinned")," - A boolean flag indicating whether or not the menu is currently pinned. This flag is provied only to the ",(0,r.mdx)("inlineCode",{parentName:"li"},"menu")," component and only when the breakpoint size is ",(0,r.mdx)("inlineCode",{parentName:"li"},"medium"),".")),(0,r.mdx)("h2",{id:"getting-started"},"Getting Started"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},"Install with ",(0,r.mdx)("a",{parentName:"li",href:"https://www.npmjs.com/"},"npmjs"),":",(0,r.mdx)("ul",{parentName:"li"},(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("inlineCode",{parentName:"li"},"npm install terra-layout"))))),(0,r.mdx)("h2",{id:"peer-dependencies"},"Peer Dependencies"),(0,r.mdx)("p",null,"This component requires the following peer dependencies be installed in your app for the component to properly function."),(0,r.mdx)("table",null,(0,r.mdx)("thead",{parentName:"table"},(0,r.mdx)("tr",{parentName:"thead"},(0,r.mdx)("th",{parentName:"tr",align:null},"Peer Dependency"),(0,r.mdx)("th",{parentName:"tr",align:null},"Version"))),(0,r.mdx)("tbody",{parentName:"table"},(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"react"),(0,r.mdx)("td",{parentName:"tr",align:null},"^16.8.5")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"react-dom"),(0,r.mdx)("td",{parentName:"tr",align:null},"^16.8.5")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"react-router-dom"),(0,r.mdx)("td",{parentName:"tr",align:null},"^5.0.0")))),(0,r.mdx)("h2",{id:"component-features"},"Component Features"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("a",{parentName:"li",href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#cross-browser-support"},"Cross-Browser Support")),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("a",{parentName:"li",href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#responsive-support"},"Responsive Support")),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("a",{parentName:"li",href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#mobile-support"},"Mobile Support"))),(0,r.mdx)("h2",{id:"usage"},"Usage"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-js"},"import Layout from 'terra-layout';\n")),(0,r.mdx)("h2",{id:"examples"},"Examples"),(0,r.mdx)(T,{title:"Layout - Standard",mdxType:"LayoutStandard"}),(0,r.mdx)(D,{title:"Layout - No Menu",mdxType:"LayoutMenuDisabled"}),(0,r.mdx)(z,{title:"Layout - No Header",mdxType:"LayoutNoHeader"}),(0,r.mdx)("h2",{id:"layout-props-table"},"Layout Props Table"),(0,r.mdx)(s,{mdxType:"LayoutPropsTable"}))}B.isMDXComponent=!0},65911:function(e,t,n){n.d(t,{C:function(){return o}});var a=n(67294),r=n(22863),o=function(e){var t=e.url;return a.createElement(r.Z,{src:"https://github.com/cerner/terra-framework/tree/main/packages/terra-layout",name:"terra-layout",version:"4.39.0",url:t})}},60721:function(e,t,n){n.r(t),t.default={"content-wrapper1":"LayoutDocCommon-module__content-wrapper1___QBlth","content-wrapper2":"LayoutDocCommon-module__content-wrapper2___kfwSM","content-text":"LayoutDocCommon-module__content-text___P4GWB",button:"LayoutDocCommon-module__button___LXzOu"}},23349:function(e,t,n){n.r(t),t.default={"content-wrapper1":"ToolbarExample-module__content-wrapper1___uMRvG","content-wrapper2":"ToolbarExample-module__content-wrapper2___3Glu7","content-text":"ToolbarExample-module__content-text___pWz-d",button:"ToolbarExample-module__button___Qnjn2"}},36927:function(e,t,n){n.r(t),t.default={"layout-example":"LayoutDocExampleCommon-module__layout-example___HseFH"}}}]);