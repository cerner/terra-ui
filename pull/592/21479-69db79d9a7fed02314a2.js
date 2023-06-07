"use strict";(self.webpackChunkterra_ui=self.webpackChunkterra_ui||[]).push([[21479,45627,37344,33667,96890,85565,3353,80858,14041,5161,45865,85355,27444,3193,17657,33315,4845,46647,85161,20444,38681,15318,40411,18101],{22863:function(e,t,n){var r=n(64836);t.Z=void 0;var a=r(n(67294)),l=r(n(45697)),o=r(n(47166)),i=r(n(17422)),u=o.default.bind(i.default),d={name:l.default.string.isRequired,src:l.default.string,url:l.default.string,version:l.default.string.isRequired},s=function(e){var t=e.src,n=e.name,r=e.url,l=e.version,o=a.default.createElement("a",{className:u("badge"),href:r||"https://www.npmjs.org/package/".concat(n,"/v/").concat(l)},a.default.createElement("span",{className:u("badge-name")},r?"package":"npm"),a.default.createElement("span",{className:u("badge-version")},"v".concat(l))),i=t?a.default.createElement("a",{className:u("badge"),href:t},a.default.createElement("span",{className:u("badge-name")},"github"),a.default.createElement("span",{className:u("badge-version")},"source")):void 0;return a.default.createElement("div",{className:u("badge-container")},o,i)};s.propTypes=d;var c=s;t.Z=c},49271:function(e,t,n){var r=n(64836),a=n(18698);t.Z=void 0;var l=r(n(27424)),o=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==a(e)&&"function"!=typeof e)return{default:e};var n=f(t);if(n&&n.has(e))return n.get(e);var r={},l=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var i=l?Object.getOwnPropertyDescriptor(e,o):null;i&&(i.get||i.set)?Object.defineProperty(r,o,i):r[o]=e[o]}r.default=e,n&&n.set(e,r);return r}(n(67294)),i=r(n(45697)),u=r(n(47166)),d=n(21538),s=r(n(33864)),c=r(n(23399)),m=n(51051),p=r(n(53560));function f(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(f=function(e){return e?n:t})(e)}var h=u.default.bind(p.default),b={example:i.default.element,exampleSrc:i.default.element,exampleCssSrc:i.default.element,title:i.default.string,description:i.default.node,isExpanded:i.default.bool},v=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","true")},y=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","false")},x=function(e){var t=e.example,n=e.exampleSrc,r=e.exampleCssSrc,a=e.title,i=e.description,u=e.isExpanded,p=(0,o.useState)(u),f=(0,l.default)(p,2),b=f[0],x=f[1],g=(0,o.useState)(!1),_=(0,l.default)(g,2),E=_[0],S=_[1],O=o.default.useContext(d.ThemeContext),N=void 0!==r,T=function(){S(!E),b&&x(!b)},w=function(){x(!b),E&&S(!E)},j=function(e,t){e.nativeEvent.keyCode!==m.KEY_SPACE&&e.nativeEvent.keyCode!==m.KEY_RETURN||(e.preventDefault(),t())};return o.default.createElement("div",{className:h("template",O.className)},o.default.createElement("div",{className:h("header")},a&&o.default.createElement("h2",{className:h("title")},a)),o.default.createElement("div",{className:h("content")},i&&o.default.createElement("div",{className:h("description")},i),t),o.default.createElement("div",{className:h("footer")},n?o.default.createElement("div",{className:h("button-container")},N&&o.default.createElement("button",{type:"button",className:h("css-toggle","item",{"is-selected":E}),onClick:T,onKeyDown:function(e){return j(e,T)},onBlur:v,onMouseDown:y,tabIndex:0,"data-focus-styles-enabled":!0},o.default.createElement(s.default,{className:h("chevron")}),o.default.createElement("span",null,"CSS"),o.default.createElement(c.default,{className:h("chevron")})),o.default.createElement("button",{type:"button",className:h("code-toggle","item",{"is-selected":b}),onClick:w,onKeyDown:function(e){return j(e,w)},onBlur:v,onMouseDown:y,tabIndex:0,"data-focus-styles-enabled":!0},o.default.createElement(s.default,{className:h("chevron")}),o.default.createElement("span",null,"Code"),o.default.createElement(c.default,{className:h("chevron")}))):null,o.default.createElement("div",null,E&&o.default.createElement("div",{className:h("css")},r),b&&o.default.createElement("div",{className:h("code")},n))))};x.propTypes=b,x.defaultProps={isExpanded:!1};var g=x;t.Z=g},47003:function(e,t,n){var r=n(64836);t.Z=void 0;var a=r(n(56690)),l=r(n(89728)),o=r(n(66115)),i=r(n(61655)),u=r(n(94993)),d=r(n(73808)),s=r(n(67294)),c=r(n(45697)),m=r(n(47166)),p=r(n(8714)),f=r(n(51346));function h(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=(0,d.default)(e);if(t){var a=(0,d.default)(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return(0,u.default)(this,n)}}var b=m.default.bind(f.default),v=function(e){(0,i.default)(n,e);var t=h(n);function n(e){var r;return(0,a.default)(this,n),(r=t.call(this,e)).increment=r.increment.bind((0,o.default)(r)),r.decrement=r.decrement.bind((0,o.default)(r)),r.state={counter:1},r}return(0,l.default)(n,[{key:"increment",value:function(){this.setState((function(e){return{counter:e.counter+1}}))}},{key:"decrement",value:function(){this.setState((function(e){return{counter:e.counter-1}}))}},{key:"render",value:function(){for(var e=[],t=0;t<this.state.counter;t+=1)e.push(s.default.createElement("div",{key:"Slide ".concat(t),className:b("slide")},s.default.createElement("h2",null,"Slide",t),s.default.createElement("br",null),s.default.createElement("button",{type:"button",onClick:this.increment},"Increment"),0!==t?s.default.createElement("button",{type:"button",onClick:this.decrement},"Decrement"):null));return s.default.createElement("div",{className:b("container")},s.default.createElement(p.default,{items:e,isAnimated:this.props.isAnimated}))}}]),n}(s.default.Component);v.propTypes={isAnimated:c.default.bool};var y=v;t.Z=y},25704:function(e,t,n){var r=n(64836);t.Z=void 0;var a=r(n(56690)),l=r(n(89728)),o=r(n(66115)),i=r(n(61655)),u=r(n(94993)),d=r(n(73808)),s=r(n(67294)),c=r(n(45697)),m=r(n(47166)),p=r(n(8714)),f=r(n(51346));function h(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=(0,d.default)(e);if(t){var a=(0,d.default)(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return(0,u.default)(this,n)}}var b=m.default.bind(f.default),v=function(e){(0,i.default)(n,e);var t=h(n);function n(e){var r;return(0,a.default)(this,n),(r=t.call(this,e)).increment=r.increment.bind((0,o.default)(r)),r.decrement=r.decrement.bind((0,o.default)(r)),r.state={counter:1},r}return(0,l.default)(n,[{key:"increment",value:function(){this.setState((function(e){return{counter:e.counter+1}}))}},{key:"decrement",value:function(){this.setState((function(e){return{counter:e.counter-1}}))}},{key:"render",value:function(){for(var e=[],t=0;t<this.state.counter;t+=1)e.push(s.default.createElement("div",{key:"Slide ".concat(t),className:b("slide")},s.default.createElement("h2",null,"Slide",t),s.default.createElement("br",null),s.default.createElement("button",{type:"button",onClick:this.increment},"Increment"),0!==t?s.default.createElement("button",{type:"button",onClick:this.decrement},"Decrement"):null));return s.default.createElement("div",{className:b("container")},s.default.createElement(p.default,{items:e,isAnimated:this.props.isAnimated}))}}]),n}(s.default.Component);v.propTypes={isAnimated:c.default.bool};var y=function(){return s.default.createElement(v,{isAnimated:!0})};t.Z=y},58635:function(e,t,n){n.r(t),n.d(t,{default:function(){return Z}});var r=n(67294),a=n(81254),l=n(16351),o=n(78530),i=["components"];function u(){return u=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},u.apply(this,arguments)}function d(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s={},c="wrapper";function m(e){var t=e.components,n=d(e,i);return(0,a.mdx)(c,u({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.mdx)(o.ZP,{mdxType:"PropsTable"},(0,a.mdx)(o.X2,{key:"ROW1",mdxType:"Row"},(0,a.mdx)(o.O,{mdxType:"PropNameCell"},"items"),(0,a.mdx)(o.Di,{mdxType:"TypeCell"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"array\n"))),(0,a.mdx)(o.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,a.mdx)(o.mW,{mdxType:"DefaultValueCell"},(0,a.mdx)("p",null,"none")),(0,a.mdx)(o.Ex,{mdxType:"DescriptionCell"},(0,a.mdx)("p",null,"The array of components for the group. Only the last component is visible. The others are hidden but still mounted."))),(0,a.mdx)(o.X2,{key:"ROW2",mdxType:"Row"},(0,a.mdx)(o.O,{mdxType:"PropNameCell"},"isAnimated"),(0,a.mdx)(o.Di,{mdxType:"TypeCell"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"bool\n"))),(0,a.mdx)(o.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,a.mdx)(o.mW,{mdxType:"DefaultValueCell"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"false\n"))),(0,a.mdx)(o.Ex,{mdxType:"DescriptionCell"},(0,a.mdx)("p",null,"When true, the transition between slides is animated.")))))}m.isMDXComponent=!0;var p=n(47003),f=["components"];function h(){return h=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},h.apply(this,arguments)}function b(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var v={};function y(e){var t=e.components,n=b(e,f);return(0,a.mdx)("wrapper",h({},v,n,{components:t,mdxType:"MDXLayout"}),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport PropTypes from 'prop-types';\nimport classNames from 'classnames/bind';\nimport SlideGroup from 'terra-slide-group';\nimport styles from './SlideGroupDemo.module.scss';\n\nconst cx = classNames.bind(styles);\n\nclass SlideGroupDemo extends React.Component {\n  constructor(props) {\n    super(props);\n\n    this.increment = this.increment.bind(this);\n    this.decrement = this.decrement.bind(this);\n\n    this.state = {\n      counter: 1,\n    };\n  }\n\n  increment() {\n    this.setState(prevState => ({\n      counter: prevState.counter + 1,\n    }));\n  }\n\n  decrement() {\n    this.setState(prevState => ({\n      counter: prevState.counter - 1,\n    }));\n  }\n\n  render() {\n    const slides = [];\n    for (let i = 0; i < this.state.counter; i += 1) {\n      slides.push((\n        <div\n          key={`Slide ${i}`}\n          className={cx('slide')}\n        >\n          <h2>\n            Slide\n            {i}\n          </h2>\n          <br />\n          <button type=\"button\" onClick={this.increment}>Increment</button>\n          {i !== 0 ? <button type=\"button\" onClick={this.decrement}>Decrement</button> : null}\n        </div>\n      ));\n    }\n\n    return (\n      <div className={cx('container')}>\n        <SlideGroup items={slides} isAnimated={this.props.isAnimated} />\n      </div>\n    );\n  }\n}\n\nSlideGroupDemo.propTypes = {\n  isAnimated: PropTypes.bool,\n};\n\nexport default SlideGroupDemo;\n\n")))}y.isMDXComponent=!0;var x=n(49271),g=["components"];function _(){return _=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},_.apply(this,arguments)}function E(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var S={};function O(e){var t=e.components,n=E(e,g);return(0,a.mdx)("wrapper",_({},S,n,{components:t,mdxType:"MDXLayout"}),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-scss"},":local {\n  .container {\n    height: 250px;\n    overflow: hidden;\n    position: relative;\n    width: 400px;\n  }\n\n  .slide {\n    background-color: #add8e6;\n    height: 100%;\n    padding: 5px;\n  }\n\n  .content-wrapper {\n    height: 200px;\n    overflow: hidden;\n    position: relative;\n    width: 400px;\n  }\n\n  .button {\n    background-color: #d3d3d3;\n  }\n\n  .custom-slide {\n    height: 200px !important;\n  }\n}\n\n")))}O.isMDXComponent=!0;var N=function(e){var t=e.title,n=e.description,a=e.isExpanded;return r.createElement(x.Z,{title:t||"Slide Group Demo",description:n,example:r.createElement(p.Z,null),exampleCssSrc:r.createElement(O,null),exampleSrc:r.createElement(y,null),isExpanded:a})},T=n(25704),w=["components"];function j(){return j=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},j.apply(this,arguments)}function C(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var k={};function D(e){var t=e.components,n=C(e,w);return(0,a.mdx)("wrapper",j({},k,n,{components:t,mdxType:"MDXLayout"}),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport PropTypes from 'prop-types';\nimport classNames from 'classnames/bind';\nimport SlideGroup from 'terra-slide-group';\nimport styles from './SlideGroupDemo.module.scss';\n\nconst cx = classNames.bind(styles);\n\nclass SlideGroupDemo extends React.Component {\n  constructor(props) {\n    super(props);\n\n    this.increment = this.increment.bind(this);\n    this.decrement = this.decrement.bind(this);\n\n    this.state = {\n      counter: 1,\n    };\n  }\n\n  increment() {\n    this.setState(prevState => ({\n      counter: prevState.counter + 1,\n    }));\n  }\n\n  decrement() {\n    this.setState(prevState => ({\n      counter: prevState.counter - 1,\n    }));\n  }\n\n  render() {\n    const slides = [];\n    for (let i = 0; i < this.state.counter; i += 1) {\n      slides.push((\n        <div\n          key={`Slide ${i}`}\n          className={cx('slide')}\n        >\n          <h2>\n            Slide\n            {i}\n          </h2>\n          <br />\n          <button type=\"button\" onClick={this.increment}>Increment</button>\n          {i !== 0 ? <button type=\"button\" onClick={this.decrement}>Decrement</button> : null}\n        </div>\n      ));\n    }\n\n    return (\n      <div className={cx('container')}>\n        <SlideGroup items={slides} isAnimated={this.props.isAnimated} />\n      </div>\n    );\n  }\n}\n\nSlideGroupDemo.propTypes = {\n  isAnimated: PropTypes.bool,\n};\n\nconst AnimatedSlideGroup = () => (\n  <SlideGroupDemo isAnimated />\n);\nexport default AnimatedSlideGroup;\n\n")))}D.isMDXComponent=!0;var P=function(e){var t=e.title,n=e.description,a=e.isExpanded;return r.createElement(x.Z,{title:t||"Slide Group Demo Animated",description:n,example:r.createElement(T.Z,null),exampleCssSrc:r.createElement(O,null),exampleSrc:r.createElement(D,null),isExpanded:a})},G=["components"];function A(){return A=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},A.apply(this,arguments)}function R(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var M={},B="wrapper";function Z(e){var t=e.components,n=R(e,G);return(0,a.mdx)(B,A({},M,n,{components:t,mdxType:"MDXLayout"}),(0,a.mdx)(l.C,{mdxType:"Badge"}),(0,a.mdx)("h1",{id:"terra-slide-group"},"Terra Slide Group"),(0,a.mdx)("p",null,"The SlideGroup is a utility component that utilizes the ",(0,a.mdx)("inlineCode",{parentName:"p"},"react-transition-group")," library to present a stack of components in an\nanimated fashion."),(0,a.mdx)("p",null,"The last component in the group is visible, and all others are hidden. While the hidden components are not visible and\nmarked with the ",(0,a.mdx)("inlineCode",{parentName:"p"},"aria-hidden")," attribute, they are not actually unmounted."),(0,a.mdx)("p",null,"When a slide is disclosed, non-visible focus is assigned to the outermost slide container. Any component utilizing the SlideGroup will need to handle the keyboard accessibility of the content on each slide."),(0,a.mdx)("h2",{id:"getting-started"},"Getting Started"),(0,a.mdx)("ul",null,(0,a.mdx)("li",{parentName:"ul"},"Install with ",(0,a.mdx)("a",{parentName:"li",href:"https://www.npmjs.com/"},"npmjs"),":",(0,a.mdx)("ul",{parentName:"li"},(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("inlineCode",{parentName:"li"},"npm install terra-slide-group"))))),(0,a.mdx)("h2",{id:"peer-dependencies"},"Peer Dependencies"),(0,a.mdx)("p",null,"This component requires the following peer dependencies be installed in your app for the component to properly function."),(0,a.mdx)("table",null,(0,a.mdx)("thead",{parentName:"table"},(0,a.mdx)("tr",{parentName:"thead"},(0,a.mdx)("th",{parentName:"tr",align:null},"Peer Dependency"),(0,a.mdx)("th",{parentName:"tr",align:null},"Version"))),(0,a.mdx)("tbody",{parentName:"table"},(0,a.mdx)("tr",{parentName:"tbody"},(0,a.mdx)("td",{parentName:"tr",align:null},"react"),(0,a.mdx)("td",{parentName:"tr",align:null},"^16.8.5")),(0,a.mdx)("tr",{parentName:"tbody"},(0,a.mdx)("td",{parentName:"tr",align:null},"react-dom"),(0,a.mdx)("td",{parentName:"tr",align:null},"^16.8.5")))),(0,a.mdx)("h2",{id:"usage"},"Usage"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-jsx"},"import SlideGroup from 'terra-slide-group';\n")),(0,a.mdx)("h2",{id:"examples"},"Examples"),(0,a.mdx)(N,{title:"Non-Animated SlideGroup",mdxType:"SlideGroupDemo"}),(0,a.mdx)(P,{title:"Animated SlideGroup",mdxType:"SlideGroupDemoAnimated"}),(0,a.mdx)("h2",{id:"slide-group-props-table"},"Slide Group Props Table"),(0,a.mdx)(m,{mdxType:"SlideGroupPropsTable"}))}Z.isMDXComponent=!0},16351:function(e,t,n){n.d(t,{C:function(){return l}});var r=n(67294),a=n(22863),l=function(e){var t=e.url;return r.createElement(a.Z,{src:"https://github.com/cerner/terra-framework/tree/main/packages/terra-slide-group",name:"terra-slide-group",version:"4.31.0",url:t})}},17422:function(e,t,n){n.r(t),t.default={badge:"Badges-module__badge___vex-+","badge-container":"Badges-module__badge-container___B13Mv","badge-name":"Badges-module__badge-name___jkN0m","badge-version":"Badges-module__badge-version___agZ+P"}},53560:function(e,t,n){n.r(t),t.default={"orion-fusion-theme":"ExampleTemplate-module__orion-fusion-theme___GzA23",template:"ExampleTemplate-module__template___a4uPk",header:"ExampleTemplate-module__header___iFXV3",content:"ExampleTemplate-module__content___48m4Q",description:"ExampleTemplate-module__description___NwBJo",footer:"ExampleTemplate-module__footer___GpSoG","button-container":"ExampleTemplate-module__button-container___rAD11",css:"ExampleTemplate-module__css___+jtk1",code:"ExampleTemplate-module__code___7rC6C","css-toggle":"ExampleTemplate-module__css-toggle___chHK7","code-toggle":"ExampleTemplate-module__code-toggle___TGlE-","is-selected":"ExampleTemplate-module__is-selected___0BYwS",item:"ExampleTemplate-module__item___8FTQq",chevron:"ExampleTemplate-module__chevron___VbY7N",title:"ExampleTemplate-module__title___r+nbJ","dynamic-content":"ExampleTemplate-module__dynamic-content___k+1H7"}},51346:function(e,t,n){n.r(t),t.default={container:"SlideGroupDemo-module__container___Pnqg8",slide:"SlideGroupDemo-module__slide___Qucq1","content-wrapper":"SlideGroupDemo-module__content-wrapper___44T4l",button:"SlideGroupDemo-module__button___Ew-As","custom-slide":"SlideGroupDemo-module__custom-slide___RiVaZ"}},33864:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=l(n(67294)),a=l(n(99139));function l(e){return e&&e.__esModule?e:{default:e}}function o(){return o=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o.apply(this,arguments)}var i=function(e){var t=o({},e);return r.default.createElement(a.default,t,r.default.createElement("path",{d:"M10.3 24L33.8 0l3.9 3.8L18 24l19.7 20.2-3.9 3.8z"}))};i.displayName="IconChevronLeft",i.defaultProps={className:"",viewBox:"0 0 48 48",xmlns:"http://www.w3.org/2000/svg","data-name":"Layer 1",isBidi:!0};var u=i;t.default=u}}]);