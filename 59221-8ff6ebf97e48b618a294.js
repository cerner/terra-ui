"use strict";(self.webpackChunkterra_ui=self.webpackChunkterra_ui||[]).push([[59221,45627,37344,85565,33667,96890,79482,3353,5161,45865,80858,14041,85355,16835,3193,4845,46647,27444,17657,85161,16873,38681,15318,66097,90941,40411,18101,38443,11264,79057,33315,34319,20116,33609,78996,39915,33442],{22863:function(e,t,n){var a=n(64836);t.Z=void 0;var l=a(n(67294)),r=a(n(45697)),u=a(n(19845)),i=a(n(17422)),o=u.default.bind(i.default),d={name:r.default.string.isRequired,src:r.default.string,url:r.default.string,version:r.default.string.isRequired},s=function(e){var t=e.src,n=e.name,a=e.url,r=e.version,u=l.default.createElement("a",{className:o("badge"),href:a||"https://www.npmjs.org/package/".concat(n,"/v/").concat(r)},l.default.createElement("span",{className:o("badge-name")},a?"package":"npm"),l.default.createElement("span",{className:o("badge-version")},"v".concat(r))),i=t?l.default.createElement("a",{className:o("badge"),href:t},l.default.createElement("span",{className:o("badge-name")},"github"),l.default.createElement("span",{className:o("badge-version")},"source")):void 0;return l.default.createElement("div",{className:o("badge-container")},u,i)};s.propTypes=d;var c=s;t.Z=c},49271:function(e,t,n){var a=n(64836),l=n(18698);t.Z=void 0;var r=a(n(27424)),u=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==l(e)&&"function"!=typeof e)return{default:e};var n=f(t);if(n&&n.has(e))return n.get(e);var a={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var u in e)if("default"!==u&&Object.prototype.hasOwnProperty.call(e,u)){var i=r?Object.getOwnPropertyDescriptor(e,u):null;i&&(i.get||i.set)?Object.defineProperty(a,u,i):a[u]=e[u]}a.default=e,n&&n.set(e,a);return a}(n(67294)),i=a(n(45697)),o=a(n(19845)),d=n(21538),s=a(n(33864)),c=a(n(23399)),m=n(51051),p=a(n(53560));function f(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(f=function(e){return e?n:t})(e)}var h=o.default.bind(p.default),y={example:i.default.element,exampleSrc:i.default.element,exampleCssSrc:i.default.element,title:i.default.string,description:i.default.node,isExpanded:i.default.bool},v=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","true")},x=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","false")},b=function(e){var t=e.example,n=e.exampleSrc,a=e.exampleCssSrc,l=e.title,i=e.description,o=e.isExpanded,p=(0,u.useState)(o),f=(0,r.default)(p,2),y=f[0],b=f[1],g=(0,u.useState)(!1),_=(0,r.default)(g,2),C=_[0],k=_[1],M=u.default.useContext(d.ThemeContext),E=void 0!==a,N=function(){k(!C),y&&b(!y)},S=function(){b(!y),C&&k(!C)},O=function(e,t){e.nativeEvent.keyCode!==m.KEY_SPACE&&e.nativeEvent.keyCode!==m.KEY_RETURN||(e.preventDefault(),t())};return u.default.createElement("div",{className:h("template",M.className)},u.default.createElement("div",{className:h("header")},l&&u.default.createElement("h2",{className:h("title")},l)),u.default.createElement("div",{className:h("content")},i&&u.default.createElement("div",{className:h("description")},i),t),u.default.createElement("div",{className:h("footer")},n?u.default.createElement("div",{className:h("button-container")},E&&u.default.createElement("button",{type:"button",className:h("css-toggle","item",{"is-selected":C}),onClick:N,onKeyDown:function(e){return O(e,N)},onBlur:v,onMouseDown:x,tabIndex:0,"data-focus-styles-enabled":!0},u.default.createElement(s.default,{className:h("chevron")}),u.default.createElement("span",null,"CSS"),u.default.createElement(c.default,{className:h("chevron")})),u.default.createElement("button",{type:"button",className:h("code-toggle","item",{"is-selected":y}),onClick:S,onKeyDown:function(e){return O(e,S)},onBlur:v,onMouseDown:x,tabIndex:0,"data-focus-styles-enabled":!0},u.default.createElement(s.default,{className:h("chevron")}),u.default.createElement("span",null,"Code"),u.default.createElement(c.default,{className:h("chevron")}))):null,u.default.createElement("div",null,C&&u.default.createElement("div",{className:h("css")},a),y&&u.default.createElement("div",{className:h("code")},n))))};b.propTypes=y,b.defaultProps={isExpanded:!1};var g=b;t.Z=g},165:function(e,t,n){var a=n(64836);t.Z=void 0;var l=a(n(56690)),r=a(n(89728)),u=a(n(66115)),i=a(n(61655)),o=a(n(94993)),d=a(n(73808)),s=a(n(67294)),c=a(n(19845)),m=a(n(35900)),p=a(n(16256));function f(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,a=(0,d.default)(e);if(t){var l=(0,d.default)(this).constructor;n=Reflect.construct(a,arguments,l)}else n=a.apply(this,arguments);return(0,o.default)(this,n)}}var h=c.default.bind(p.default),y=function(e){(0,i.default)(n,e);var t=f(n);function n(e){var a;return(0,l.default)(this,n),(a=t.call(this,e)).handleOnChange=a.handleOnChange.bind((0,u.default)(a)),a.resetMenuState=a.resetMenuState.bind((0,u.default)(a)),a.fakeRoutingBack=a.fakeRoutingBack.bind((0,u.default)(a)),a.state={selectedMenuKey:"menu",selectedChildKey:void 0},a}return(0,r.default)(n,[{key:"handleOnChange",value:function(e,t){this.setState({selectedMenuKey:t.selectedMenuKey,selectedChildKey:t.selectedChildKey})}},{key:"resetMenuState",value:function(){this.setState({selectedMenuKey:"menu",selectedChildKey:void 0})}},{key:"fakeRoutingBack",value:function(){this.setState({selectedMenuKey:"fake-parent",selectedChildKey:void 0})}},{key:"render",value:function(){var e;return e="fake-parent"===this.state.selectedMenuKey?s.default.createElement("div",{className:h("content")},s.default.createElement("button",{type:"button",onClick:this.resetMenuState},"Child Route"),s.default.createElement("p",null,"Parent Route")):s.default.createElement(m.default,{id:"test-menu",menuItems:[{key:"menu",text:"Menu",childKeys:["submenu1","submenu2","submenu3","submenu4"]},{key:"submenu1",text:"Sub Menu 1",childKeys:["subsubmenu1","subsubmenu2","subsubmenu3"],id:"test-item-1"},{key:"submenu2",text:"Sub Menu 2"},{key:"submenu3",text:"Sub Menu 3"},{key:"submenu4",text:"Sub Menu 4"},{key:"subsubmenu1",text:"Sub-Sub Menu 1",id:"test-item-2"},{key:"subsubmenu2",text:"Sub-Sub Menu 2"},{key:"subsubmenu3",text:"Sub-Sub Menu 3"}],onChange:this.handleOnChange,routingStackBack:this.fakeRoutingBack,selectedMenuKey:this.state.selectedMenuKey,selectedChildKey:this.state.selectedChildKey}),s.default.createElement("div",{className:h("content-wrapper")},e)}}]),n}(s.default.Component);t.Z=y},66536:function(e,t,n){n.r(t),n.d(t,{default:function(){return T}});var a=n(67294),l=n(81254),r=n(7114),u=n(78530),i=["components"];function o(){return o=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},o.apply(this,arguments)}function d(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var s={},c="wrapper";function m(e){var t=e.components,n=d(e,i);return(0,l.mdx)(c,o({},s,n,{components:t,mdxType:"MDXLayout"}),(0,l.mdx)(u.ZP,{mdxType:"PropsTable"},(0,l.mdx)(u.X2,{key:"ROW1",mdxType:"Row"},(0,l.mdx)(u.O,{mdxType:"PropNameCell"},"menuItems"),(0,l.mdx)(u.Di,{mdxType:"TypeCell"},(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-javascript"},"arrayOf: [{\n  shape: {\n    childKeys: {\n      arrayOf: [{\n        type: 'string',\n      }],\n    },\n    hasSubMenu: {\n      type: 'bool',\n      description: 'Used to match visual style of a menuItem with children on an item without children.',\n    },\n    isRootMenu: {\n      type: 'bool',\n      description: 'Whether or not the menu is the primary navigation links in small form factor.',\n    },\n    id: {\n      type: 'string',\n      description: 'ID to be applied to the menu item div.',\n    },\n    metaData: {\n      type: 'object',\n      description: 'Optional meta data to be returned along with the item key within the onChange.',\n    },\n    key: {\n      type: 'string',\n      required: true,\n      description: 'Unique identifier that will be returned in the onChange callback when an endpoint is reached.',\n    },\n    text: {\n      type: 'string',\n      required: true,\n      description: 'Text for the menu row and header title when selected.',\n    },\n  },\n}],\n"))),(0,l.mdx)(u.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,l.mdx)(u.mW,{mdxType:"DefaultValueCell"},(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-javascript"},"[]\n"))),(0,l.mdx)(u.Ex,{mdxType:"DescriptionCell"},(0,l.mdx)("p",null,"An array of configuration for each menu item."))),(0,l.mdx)(u.X2,{key:"ROW2",mdxType:"Row"},(0,l.mdx)(u.O,{mdxType:"PropNameCell"},"onChange"),(0,l.mdx)(u.Di,{mdxType:"TypeCell"},(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-javascript"},"func\n"))),(0,l.mdx)(u.dS,{isRequired:!0,mdxType:"RequiredCell"}),(0,l.mdx)(u.mW,{mdxType:"DefaultValueCell"},(0,l.mdx)("p",null,"none")),(0,l.mdx)(u.Ex,{mdxType:"DescriptionCell"},(0,l.mdx)("p",null,"Callback function when a menu endpoint is reached.\nreturns (event, { selectedMenuKey: String, selectedChildKey: String, metaData: Object})"))),(0,l.mdx)(u.X2,{key:"ROW3",mdxType:"Row"},(0,l.mdx)(u.O,{mdxType:"PropNameCell"},"routingStackBack"),(0,l.mdx)(u.Di,{mdxType:"TypeCell"},(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-javascript"},"func\n"))),(0,l.mdx)(u.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,l.mdx)(u.mW,{mdxType:"DefaultValueCell"},(0,l.mdx)("p",null,"none")),(0,l.mdx)(u.Ex,{mdxType:"DescriptionCell"},(0,l.mdx)("p",null,"Delegate prop showParent function that is provided by the terra-navigation-layout."))),(0,l.mdx)(u.X2,{key:"ROW4",mdxType:"Row"},(0,l.mdx)(u.O,{mdxType:"PropNameCell"},"selectedChildKey"),(0,l.mdx)(u.Di,{mdxType:"TypeCell"},(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-javascript"},"string\n"))),(0,l.mdx)(u.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,l.mdx)(u.mW,{mdxType:"DefaultValueCell"},(0,l.mdx)("p",null,"none")),(0,l.mdx)(u.Ex,{mdxType:"DescriptionCell"},(0,l.mdx)("p",null,"Key of the currently selected child item on the selected menu page.\nThis is used when traveling back up the menu stack or when the child is an end point."))),(0,l.mdx)(u.X2,{key:"ROW5",mdxType:"Row"},(0,l.mdx)(u.O,{mdxType:"PropNameCell"},"selectedMenuKey"),(0,l.mdx)(u.Di,{mdxType:"TypeCell"},(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-javascript"},"string\n"))),(0,l.mdx)(u.dS,{isRequired:!0,mdxType:"RequiredCell"}),(0,l.mdx)(u.mW,{mdxType:"DefaultValueCell"},(0,l.mdx)("p",null,"none")),(0,l.mdx)(u.Ex,{mdxType:"DescriptionCell"},(0,l.mdx)("p",null,"Key of the currently selected menu page."))),(0,l.mdx)(u.X2,{key:"ROW6",mdxType:"Row"},(0,l.mdx)(u.O,{mdxType:"PropNameCell"},"toolbar"),(0,l.mdx)(u.Di,{mdxType:"TypeCell"},(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-javascript"},"element\n"))),(0,l.mdx)(u.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,l.mdx)(u.mW,{mdxType:"DefaultValueCell"},(0,l.mdx)("p",null,"none")),(0,l.mdx)(u.Ex,{mdxType:"DescriptionCell"},(0,l.mdx)("p",null,"An optional toolbar to display below the side menu action header")))))}m.isMDXComponent=!0;var p=n(165),f=["components"];function h(){return h=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},h.apply(this,arguments)}function y(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var v={};function x(e){var t=e.components,n=y(e,f);return(0,l.mdx)("wrapper",h({},v,n,{components:t,mdxType:"MDXLayout"}),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport classNames from 'classnames/bind';\nimport NavigationSideMenu from 'terra-navigation-side-menu';\n\nimport styles from './NavigationSideMenuExample.module.scss';\n\nconst cx = classNames.bind(styles);\n\nclass NavigationSideMenuDefault extends React.Component {\n  constructor(props) {\n    super(props);\n\n    this.handleOnChange = this.handleOnChange.bind(this);\n    this.resetMenuState = this.resetMenuState.bind(this);\n    this.fakeRoutingBack = this.fakeRoutingBack.bind(this);\n\n    this.state = { selectedMenuKey: 'menu', selectedChildKey: undefined };\n  }\n\n  handleOnChange(event, changeData) {\n    this.setState({ selectedMenuKey: changeData.selectedMenuKey, selectedChildKey: changeData.selectedChildKey });\n  }\n\n  resetMenuState() {\n    this.setState({ selectedMenuKey: 'menu', selectedChildKey: undefined });\n  }\n\n  fakeRoutingBack() {\n    this.setState({ selectedMenuKey: 'fake-parent', selectedChildKey: undefined });\n  }\n\n  render() {\n    let content;\n    if (this.state.selectedMenuKey === 'fake-parent') {\n      content = (\n        <div className={cx('content')}>\n          <button type=\"button\" onClick={this.resetMenuState}>\n            Child Route\n          </button>\n          <p>Parent Route</p>\n        </div>\n      );\n    } else {\n      content = (\n        <NavigationSideMenu\n          id=\"test-menu\"\n          menuItems={[\n            { key: 'menu', text: 'Menu', childKeys: ['submenu1', 'submenu2', 'submenu3', 'submenu4'] },\n            {\n              key: 'submenu1', text: 'Sub Menu 1', childKeys: ['subsubmenu1', 'subsubmenu2', 'subsubmenu3'], id: 'test-item-1',\n            },\n            { key: 'submenu2', text: 'Sub Menu 2' },\n            { key: 'submenu3', text: 'Sub Menu 3' },\n            { key: 'submenu4', text: 'Sub Menu 4' },\n            { key: 'subsubmenu1', text: 'Sub-Sub Menu 1', id: 'test-item-2' },\n            { key: 'subsubmenu2', text: 'Sub-Sub Menu 2' },\n            { key: 'subsubmenu3', text: 'Sub-Sub Menu 3' },\n          ]}\n          onChange={this.handleOnChange}\n          routingStackBack={this.fakeRoutingBack}\n          selectedMenuKey={this.state.selectedMenuKey}\n          selectedChildKey={this.state.selectedChildKey}\n        />\n      );\n    }\n\n    return (\n      <div className={cx('content-wrapper')}>\n        {content}\n      </div>\n    );\n  }\n}\n\nexport default NavigationSideMenuDefault;\n\n")))}x.isMDXComponent=!0;var b=n(49271),g=["components"];function _(){return _=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},_.apply(this,arguments)}function C(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var k={};function M(e){var t=e.components,n=C(e,g);return(0,l.mdx)("wrapper",_({},k,n,{components:t,mdxType:"MDXLayout"}),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-scss"},"@import '../../../test/navigation-side-menu/NavigationSideMenuDocCommon.module';\n\n:local {\n  .content-wrapper {\n    border: 1px solid #d3d3d3;\n    height: 450px;\n    position: relative;\n    width: 300px;\n  }\n}\n\n")))}M.isMDXComponent=!0;var E=function(e){var t=e.title,n=e.description,l=e.isExpanded;return a.createElement(b.Z,{title:t||"Navigation Side Menu Example",description:n,example:a.createElement(p.Z,null),exampleCssSrc:a.createElement(M,null),exampleSrc:a.createElement(x,null),isExpanded:l})},N=["components"];function S(){return S=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},S.apply(this,arguments)}function O(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var K={},w="wrapper";function T(e){var t=e.components,n=O(e,N);return(0,l.mdx)(w,S({},K,n,{components:t,mdxType:"MDXLayout"}),(0,l.mdx)(r.C,{mdxType:"Badge"}),(0,l.mdx)("h1",{id:"terra-navigation-side-menu"},"Terra Navigation Side Menu"),(0,l.mdx)("p",null,"A structural component for nesting navigational items within the content section of the terra-menu-layout."),(0,l.mdx)("h2",{id:"getting-started"},"Getting Started"),(0,l.mdx)("ul",null,(0,l.mdx)("li",{parentName:"ul"},"Install with ",(0,l.mdx)("a",{parentName:"li",href:"https://www.npmjs.com/"},"npmjs"),":",(0,l.mdx)("ul",{parentName:"li"},(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("inlineCode",{parentName:"li"},"npm install terra-navigation-side-menu"))))),(0,l.mdx)("h2",{id:"peer-dependencies"},"Peer Dependencies"),(0,l.mdx)("p",null,"This component requires the following peer dependencies be installed in your app for the component to properly function."),(0,l.mdx)("table",null,(0,l.mdx)("thead",{parentName:"table"},(0,l.mdx)("tr",{parentName:"thead"},(0,l.mdx)("th",{parentName:"tr",align:null},"Peer Dependency"),(0,l.mdx)("th",{parentName:"tr",align:null},"Version"))),(0,l.mdx)("tbody",{parentName:"table"},(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"react"),(0,l.mdx)("td",{parentName:"tr",align:null},"^16.8.5")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"react-dom"),(0,l.mdx)("td",{parentName:"tr",align:null},"^16.8.5")),(0,l.mdx)("tr",{parentName:"tbody"},(0,l.mdx)("td",{parentName:"tr",align:null},"react-intl"),(0,l.mdx)("td",{parentName:"tr",align:null},"^2.8.0")))),(0,l.mdx)("h2",{id:"usage"},"Usage"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-jsx"},"import NavigationSideMenu from 'terra-navigation-side-menu';\n")),(0,l.mdx)("h2",{id:"component-features"},"Component Features"),(0,l.mdx)("ul",null,(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("a",{parentName:"li",href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#cross-browser-support"},"Cross-Browser Support")),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("a",{parentName:"li",href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#responsive-support"},"Responsive Support")),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("a",{parentName:"li",href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#mobile-support"},"Mobile Support"))),(0,l.mdx)("h2",{id:"examples"},"Examples"),(0,l.mdx)(E,{title:"Navigation Side Menu Example",mdxType:"NavigationSideMenuExample"}),(0,l.mdx)("h2",{id:"navigation-side-menu-props-table"},"Navigation Side Menu Props Table"),(0,l.mdx)(m,{mdxType:"NavigationSideMenuPropsTable"}))}T.isMDXComponent=!0},7114:function(e,t,n){n.d(t,{C:function(){return r}});var a=n(67294),l=n(22863),r=function(e){var t=e.url;return a.createElement(l.Z,{src:"https://github.com/cerner/terra-framework/tree/main/packages/terra-navigation-side-menu",name:"terra-navigation-side-menu",version:"2.49.0",url:t})}},17422:function(e,t,n){n.r(t),t.default={badge:"Badges-module__badge___vex-+","badge-container":"Badges-module__badge-container___B13Mv","badge-name":"Badges-module__badge-name___jkN0m","badge-version":"Badges-module__badge-version___agZ+P"}},53560:function(e,t,n){n.r(t),t.default={"clinical-lowlight-theme":"ExampleTemplate-module__clinical-lowlight-theme___rBbtD","orion-fusion-theme":"ExampleTemplate-module__orion-fusion-theme___GzA23",template:"ExampleTemplate-module__template___a4uPk",header:"ExampleTemplate-module__header___iFXV3",content:"ExampleTemplate-module__content___48m4Q",description:"ExampleTemplate-module__description___NwBJo",footer:"ExampleTemplate-module__footer___GpSoG","button-container":"ExampleTemplate-module__button-container___rAD11",css:"ExampleTemplate-module__css___+jtk1",code:"ExampleTemplate-module__code___7rC6C","css-toggle":"ExampleTemplate-module__css-toggle___chHK7","code-toggle":"ExampleTemplate-module__code-toggle___TGlE-","is-selected":"ExampleTemplate-module__is-selected___0BYwS",item:"ExampleTemplate-module__item___8FTQq",chevron:"ExampleTemplate-module__chevron___VbY7N",title:"ExampleTemplate-module__title___r+nbJ","dynamic-content":"ExampleTemplate-module__dynamic-content___k+1H7"}},16256:function(e,t,n){n.r(t),t.default={content:"NavigationSideMenuExample-module__content___I6fgz","content-wrapper":"NavigationSideMenuExample-module__content-wrapper___4oIAd",toolbar:"NavigationSideMenuExample-module__toolbar___isGca"}},11052:function(e,t,n){n.r(t),t.default={"clinical-lowlight-theme":"MenuItem-module__clinical-lowlight-theme___TY1D3","orion-fusion-theme":"MenuItem-module__orion-fusion-theme___iAr0x","list-item":"MenuItem-module__list-item___QYK2Z","menu-item":"MenuItem-module__menu-item___L2QZX","is-hovered":"MenuItem-module__is-hovered___JbCFx",chevron:"MenuItem-module__chevron___Qrxmr","is-focused":"MenuItem-module__is-focused___0h4Si","is-selected":"MenuItem-module__is-selected___sM+R2","is-active":"MenuItem-module__is-active___5-z9K",title:"MenuItem-module__title___WobpM"}},91073:function(e,t,n){n.r(t),t.default={"clinical-lowlight-theme":"NavigationSideMenu-module__clinical-lowlight-theme___S8txn","orion-fusion-theme":"NavigationSideMenu-module__orion-fusion-theme___Rxjvu","side-menu-content-container":"NavigationSideMenu-module__side-menu-content-container___XykxV","is-root":"NavigationSideMenu-module__is-root___q19Z+","side-menu-list":"NavigationSideMenu-module__side-menu-list___+ze5L","side-menu-action-header":"NavigationSideMenu-module__side-menu-action-header___3NHhV"}},33864:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=r(n(67294)),l=r(n(99139));function r(e){return e&&e.__esModule?e:{default:e}}function u(){return u=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},u.apply(this,arguments)}var i=function(e){var t=u({},e);return a.default.createElement(l.default,t,a.default.createElement("path",{d:"M10.3 24 33.8 0l3.9 3.8L18 24l19.7 20.2-3.9 3.8z"}))};i.displayName="IconChevronLeft",i.defaultProps={viewBox:"0 0 48 48","data-name":"Layer 1",xmlns:"http://www.w3.org/2000/svg"};t.default=i},35900:function(e,t,n){var a=n(64836),l=n(18698);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a(n(10434)),u=a(n(70215)),i=a(n(56690)),o=a(n(89728)),d=a(n(66115)),s=a(n(61655)),c=a(n(94993)),m=a(n(73808)),p=N(n(67294)),f=a(n(45697)),h=n(25387),y=a(n(19845)),v=a(n(17092)),x=a(n(10027)),b=a(n(29270)),g=N(n(51051)),_=a(n(50026)),C=a(n(30696)),k=a(n(91073)),M=["menuItems","onChange","routingStackBack","selectedChildKey","selectedMenuKey","toolbar"];function E(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(E=function(e){return e?n:t})(e)}function N(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=l(e)&&"function"!=typeof e)return{default:e};var n=E(t);if(n&&n.has(e))return n.get(e);var a={__proto__:null},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var u in e)if("default"!==u&&Object.prototype.hasOwnProperty.call(e,u)){var i=r?Object.getOwnPropertyDescriptor(e,u):null;i&&(i.get||i.set)?Object.defineProperty(a,u,i):a[u]=e[u]}return a.default=e,n&&n.set(e,a),a}function S(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,a=(0,m.default)(e);if(t){var l=(0,m.default)(this).constructor;n=Reflect.construct(a,arguments,l)}else n=a.apply(this,arguments);return(0,c.default)(this,n)}}var O=y.default.bind(k.default),K={intl:f.default.shape({formatMessage:f.default.func}).isRequired,menuItems:f.default.arrayOf(f.default.shape({childKeys:f.default.arrayOf(f.default.string),hasSubMenu:f.default.bool,isRootMenu:f.default.bool,id:f.default.string,metaData:f.default.object,key:f.default.string.isRequired,text:f.default.string.isRequired})),onChange:f.default.func.isRequired,routingStackBack:f.default.func,selectedChildKey:f.default.string,selectedMenuKey:f.default.string.isRequired,toolbar:f.default.element},w=function(e){var t={},n={};return e.forEach((function(e){t[e.key]={id:e.id,text:e.text,childKeys:e.childKeys,metaData:e.metaData,hasSubMenu:e.hasSubMenu,isRootMenu:e.isRootMenu},e.childKeys&&e.childKeys.forEach((function(t){n[t]=e.key}))})),{items:t,parents:n}},T=function(e){(0,s.default)(n,e);var t=S(n);function n(e){var a;(0,i.default)(this,n),(a=t.call(this,e)).handleBackClick=a.handleBackClick.bind((0,d.default)(a)),a.handleItemClick=a.handleItemClick.bind((0,d.default)(a)),a.updateAriaLiveContent=a.updateAriaLiveContent.bind((0,d.default)(a)),a.setVisuallyHiddenComponent=a.setVisuallyHiddenComponent.bind((0,d.default)(a));var l=w(e.menuItems),r=l.items,u=l.parents;return a.state={items:r,parents:u,prevPropsMenuItem:e.menuItems},a}return(0,o.default)(n,[{key:"handleBackClick",value:function(e){var t=this.state.parents[this.props.selectedMenuKey];t&&this.props.onChange(e,{selectedMenuKey:t,selectedChildKey:this.props.selectedMenuKey,metaData:this.state.items[t].metaData})}},{key:"handleItemClick",value:function(e,t){var n=this.state.items[t];this.state.items[t]&&this.state.items[t].text&&this.updateAriaLiveContent(this.state.items[t].text),n.childKeys&&n.childKeys.length?this.props.onChange(e,{selectedMenuKey:t,selectedChildKey:void 0,metaData:n.metaData}):this.props.onChange(e,{selectedMenuKey:this.props.selectedMenuKey,selectedChildKey:t,metaData:n.metaData})}},{key:"setVisuallyHiddenComponent",value:function(e){this.visuallyHiddenComponent=e}},{key:"buildListItem",value:function(e){var t=this,n=this.state.items[e];return p.default.createElement(C.default,{id:n.id,hasChevron:n.hasSubMenu||n.childKeys&&n.childKeys.length>0,isSelected:e===this.props.selectedChildKey,text:n.text,key:e,onClick:function(n){t.handleItemClick(n,e)},onKeyDown:function(n){n.nativeEvent.keyCode!==g.KEY_SPACE&&n.nativeEvent.keyCode!==g.KEY_RETURN||(n.preventDefault(),t.handleItemClick(n,e))},"data-menu-item":e})}},{key:"buildListContent",value:function(e){var t=this;return e&&e.childKeys&&e.childKeys.length?p.default.createElement("nav",{role:"navigation"},p.default.createElement("ul",{role:"menu",className:O(["side-menu-list"])},e.childKeys.map((function(e){return t.buildListItem(e)})))):null}},{key:"updateAriaLiveContent",value:function(e){var t=this.props.intl.formatMessage({id:"Terra.navigation.side.menu.selected"});this.visuallyHiddenComponent&&(this.visuallyHiddenComponent.innerText=e?"".concat(e," ").concat(t):"")}},{key:"render",value:function(){var e,t,n=this.props,a=(n.menuItems,n.onChange,n.routingStackBack),l=(n.selectedChildKey,n.selectedMenuKey),i=n.toolbar,o=(0,u.default)(n,M),d=this.state.items[l],s=this.context,c=O(["side-menu-content-container",s.className]);return(e=this.state.parents[l]?this.handleBackClick:a)||!d.isRootMenu?t=p.default.createElement(p.Fragment,null,p.default.createElement(v.default,{className:O("side-menu-action-header"),onBack:e,title:d?d.text:null,"data-navigation-side-menu-action-header":!0}),i):c=O(["side-menu-content-container","is-root"]),p.default.createElement(p.Fragment,null,p.default.createElement(b.default,{"aria-atomic":"true","aria-live":"assertive","aria-relevant":"additions text",refCallback:this.setVisuallyHiddenComponent}),p.default.createElement(x.default,(0,r.default)({},o,{header:t,fill:!0,className:c}),this.buildListContent(d)))}}],[{key:"getDerivedStateFromProps",value:function(e,t){return e.menuItems!==t.prevPropsMenuItem?w(e.menuItems):null}}]),n}(p.Component);T.propTypes=K,T.defaultProps={menuItems:[]},T.contextType=_.default;t.default=(0,h.injectIntl)(T)},30696:function(e,t,n){var a=n(64836),l=n(18698);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a(n(10434)),u=a(n(70215)),i=a(n(56690)),o=a(n(89728)),d=a(n(66115)),s=a(n(61655)),c=a(n(94993)),m=a(n(73808)),p=E(n(67294)),f=a(n(45697)),h=n(25387),y=a(n(93967)),v=a(n(19845)),x=a(n(50026)),b=E(n(51051)),g=a(n(23399)),_=a(n(29270)),C=a(n(11052)),k=["hasChevron","intl","isSelected","text"];function M(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(M=function(e){return e?n:t})(e)}function E(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=l(e)&&"function"!=typeof e)return{default:e};var n=M(t);if(n&&n.has(e))return n.get(e);var a={__proto__:null},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var u in e)if("default"!==u&&Object.prototype.hasOwnProperty.call(e,u)){var i=r?Object.getOwnPropertyDescriptor(e,u):null;i&&(i.get||i.set)?Object.defineProperty(a,u,i):a[u]=e[u]}return a.default=e,n&&n.set(e,a),a}function N(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,a=(0,m.default)(e);if(t){var l=(0,m.default)(this).constructor;n=Reflect.construct(a,arguments,l)}else n=a.apply(this,arguments);return(0,c.default)(this,n)}}var S=v.default.bind(C.default),O={hasChevron:f.default.bool,intl:f.default.shape({formatMessage:f.default.func}).isRequired,isSelected:f.default.bool,onKeyDown:f.default.func,onKeyUp:f.default.func,text:f.default.string},K=function(e){(0,s.default)(n,e);var t=N(n);function n(e){var a;return(0,i.default)(this,n),(a=t.call(this,e)).state={active:!1,focused:!1},a.handleKeyDown=a.handleKeyDown.bind((0,d.default)(a)),a.handleKeyUp=a.handleKeyUp.bind((0,d.default)(a)),a.handleOnBlur=a.handleOnBlur.bind((0,d.default)(a)),a.textRender=a.textRender.bind((0,d.default)(a)),a}return(0,o.default)(n,[{key:"handleOnBlur",value:function(){this.setState({focused:!1})}},{key:"handleKeyDown",value:function(e){e.nativeEvent.keyCode===b.KEY_SPACE&&this.setState({active:!0}),e.nativeEvent.keyCode!==b.KEY_SPACE&&e.nativeEvent.keyCode!==b.KEY_RETURN||this.setState({focused:!0}),this.props.onKeyDown&&this.props.onKeyDown(e)}},{key:"handleKeyUp",value:function(e){e.nativeEvent.keyCode===b.KEY_SPACE&&this.setState({active:!1}),e.nativeEvent.keyCode===b.KEY_TAB&&this.setState({focused:!0}),this.props.onKeyUp&&this.props.onKeyUp(e)}},{key:"textRender",value:function(){var e=this.props,t=e.intl,n=e.isSelected,a=e.text,l=t.formatMessage({id:"Terra.navigation.side.menu.selected"});return n?p.default.createElement(p.Fragment,null,a,p.default.createElement(_.default,{text:l})):a}},{key:"render",value:function(){var e=this.props,t=e.hasChevron,n=(e.intl,e.isSelected),a=(e.text,(0,u.default)(e,k)),l=this.context,i=(0,y.default)(S("menu-item",{"is-selected":n},{"is-active":this.state.active},{"is-focused":this.state.focused},l.className),a.className);return p.default.createElement("li",{className:S("list-item"),role:"none"},p.default.createElement("div",(0,r.default)({role:"menuitem"},a,{tabIndex:"0",className:i,onKeyDown:this.handleKeyDown,onKeyUp:this.handleKeyUp,onBlur:this.handleOnBlur,"aria-haspopup":t}),p.default.createElement("div",{className:S("title")},this.textRender()),t&&p.default.createElement("span",{className:S("chevron")},p.default.createElement(g.default,null))))}}]),n}(p.default.Component);K.propTypes=O,K.contextType=x.default;t.default=(0,h.injectIntl)(K)}}]);