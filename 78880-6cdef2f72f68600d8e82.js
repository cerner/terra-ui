"use strict";(self.webpackChunkterra_ui=self.webpackChunkterra_ui||[]).push([[78880],{10347:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=c(n(67294)),r=c(n(47166)),l=c(n(45697)),o=c(n(13006));function c(e){return e&&e.__esModule?e:{default:e}}var u=r.default.bind(o.default),i={children:l.default.node.isRequired},d=function(e){var t=e.children;return a.default.createElement("div",{className:u("content-wrapper")},t)};d.propTypes=i;t.default=d},52444:function(e,t,n){t.Z=void 0;var a=u(n(67294)),r=u(n(55281)),l=u(n(7017)),o=u(n(56640)),c=u(n(10347));function u(e){return e&&e.__esModule?e:{default:e}}t.Z=function(){return a.default.createElement(c.default,null,a.default.createElement(o.default,null,a.default.createElement(l.default,{paddingBottom:"medium"},a.default.createElement(r.default,{isBlock:!0,text:"First Action"})),a.default.createElement(r.default,{isBlock:!0,text:"Second Action"})))}},32558:function(e,t,n){t.Z=void 0;var a=o(n(67294)),r=o(n(56640)),l=o(n(10347));function o(e){return e&&e.__esModule?e:{default:e}}t.Z=function(){return a.default.createElement(l.default,null,a.default.createElement(r.default,null,a.default.createElement("a",{href:"/#/site/action-footer/block"},"A link")))}},22863:function(e,t,n){var a=n(64836);t.Z=void 0;var r=a(n(67294)),l=a(n(45697)),o=a(n(47166)),c=a(n(17422)),u=o.default.bind(c.default),i={name:l.default.string.isRequired,src:l.default.string,url:l.default.string,version:l.default.string.isRequired},d=function(e){var t=e.src,n=e.name,a=e.url,l=e.version,o=r.default.createElement("a",{className:u("badge"),href:a||"https://www.npmjs.org/package/".concat(n,"/v/").concat(l)},r.default.createElement("span",{className:u("badge-name")},a?"package":"npm"),r.default.createElement("span",{className:u("badge-version")},"v".concat(l))),c=t?r.default.createElement("a",{className:u("badge"),href:t},r.default.createElement("span",{className:u("badge-name")},"github"),r.default.createElement("span",{className:u("badge-version")},"source")):void 0;return r.default.createElement("div",{className:u("badge-container")},o,c)};d.propTypes=i;var m=d;t.Z=m},49271:function(e,t,n){var a=n(64836),r=n(18698);t.Z=void 0;var l=a(n(27424)),o=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==r(e)&&"function"!=typeof e)return{default:e};var n=f(t);if(n&&n.has(e))return n.get(e);var a={},l=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var c=l?Object.getOwnPropertyDescriptor(e,o):null;c&&(c.get||c.set)?Object.defineProperty(a,o,c):a[o]=e[o]}a.default=e,n&&n.set(e,a);return a}(n(67294)),c=a(n(45697)),u=a(n(47166)),i=n(21538),d=a(n(33864)),m=a(n(23399)),p=n(51051),s=a(n(53560));function f(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(f=function(e){return e?n:t})(e)}var _=u.default.bind(s.default),x={example:c.default.element,exampleSrc:c.default.element,exampleCssSrc:c.default.element,title:c.default.string,description:c.default.node,isExpanded:c.default.bool},b=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","true")},v=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","false")},g=function(e){var t=e.example,n=e.exampleSrc,a=e.exampleCssSrc,r=e.title,c=e.description,u=e.isExpanded,s=(0,o.useState)(u),f=(0,l.default)(s,2),x=f[0],g=f[1],y=(0,o.useState)(!1),E=(0,l.default)(y,2),h=E[0],O=E[1],T=o.default.useContext(i.ThemeContext),k=void 0!==a,j=function(){O(!h),x&&g(!x)},w=function(){g(!x),h&&O(!h)},N=function(e,t){e.nativeEvent.keyCode!==p.KEY_SPACE&&e.nativeEvent.keyCode!==p.KEY_RETURN||(e.preventDefault(),t())};return o.default.createElement("div",{className:_("template",T.className)},o.default.createElement("div",{className:_("header")},r&&o.default.createElement("h2",{className:_("title")},r)),o.default.createElement("div",{className:_("content")},c&&o.default.createElement("div",{className:_("description")},c),t),o.default.createElement("div",{className:_("footer")},n?o.default.createElement("div",{className:_("button-container")},k&&o.default.createElement("button",{type:"button",className:_("css-toggle","item",{"is-selected":h}),onClick:j,onKeyDown:function(e){return N(e,j)},onBlur:b,onMouseDown:v,tabIndex:0,"data-focus-styles-enabled":!0},o.default.createElement(d.default,{className:_("chevron")}),o.default.createElement("span",null,"CSS"),o.default.createElement(m.default,{className:_("chevron")})),o.default.createElement("button",{type:"button",className:_("code-toggle","item",{"is-selected":x}),onClick:w,onKeyDown:function(e){return N(e,w)},onBlur:b,onMouseDown:v,tabIndex:0,"data-focus-styles-enabled":!0},o.default.createElement(d.default,{className:_("chevron")}),o.default.createElement("span",null,"Code"),o.default.createElement(m.default,{className:_("chevron")}))):null,o.default.createElement("div",null,h&&o.default.createElement("div",{className:_("css")},a),x&&o.default.createElement("div",{className:_("code")},n))))};g.propTypes=x,g.defaultProps={isExpanded:!1};var y=g;t.Z=y},78880:function(e,t,n){n.r(t),n.d(t,{default:function(){return C}});var a=n(67294),r=n(81254),l=n(64027),o=n(32558),c=["components"];function u(){return u=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},u.apply(this,arguments)}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d={};function m(e){var t=e.components,n=i(e,c);return(0,r.mdx)("wrapper",u({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport BlockActionFooter from 'terra-action-footer/lib/BlockActionFooter';\nimport ExampleTemplate from '../../common/ExampleTemplate';\n\nexport default () => (\n  <ExampleTemplate>\n    <BlockActionFooter>\n      <a href=\"/#/site/action-footer/block\">A link</a>\n    </BlockActionFooter>\n  </ExampleTemplate>\n);\n\n")))}m.isMDXComponent=!0;var p=n(49271),s=function(e){var t=e.title,n=e.description,r=e.isExpanded;return a.createElement(p.Z,{title:t||"Single Action",description:n,example:a.createElement(o.Z,null),exampleSrc:a.createElement(m,null),isExpanded:r})},f=n(52444),_=["components"];function x(){return x=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},x.apply(this,arguments)}function b(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var v={};function g(e){var t=e.components,n=b(e,_);return(0,r.mdx)("wrapper",x({},v,n,{components:t,mdxType:"MDXLayout"}),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport Button from 'terra-button';\nimport Spacer from 'terra-spacer';\nimport BlockActionFooter from 'terra-action-footer/lib/BlockActionFooter';\nimport ExampleTemplate from '../../common/ExampleTemplate';\n\nexport default () => (\n  <ExampleTemplate>\n    <BlockActionFooter>\n      <Spacer paddingBottom=\"medium\">\n        <Button isBlock text=\"First Action\" />\n      </Spacer>\n      <Button isBlock text=\"Second Action\" />\n    </BlockActionFooter>\n  </ExampleTemplate>\n);\n\n")))}g.isMDXComponent=!0;var y=function(e){var t=e.title,n=e.description,r=e.isExpanded;return a.createElement(p.Z,{title:t||"Multiple Actions",description:n,example:a.createElement(f.Z,null),exampleSrc:a.createElement(g,null),isExpanded:r})},E=n(78530),h=["components"];function O(){return O=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},O.apply(this,arguments)}function T(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var k={},j="wrapper";function w(e){var t=e.components,n=T(e,h);return(0,r.mdx)(j,O({},k,n,{components:t,mdxType:"MDXLayout"}),(0,r.mdx)(E.ZP,{mdxType:"PropsTable"},(0,r.mdx)(E.X2,{key:"ROW1",mdxType:"Row"},(0,r.mdx)(E.O,{mdxType:"PropNameCell"},"children"),(0,r.mdx)(E.Di,{mdxType:"TypeCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"node\n"))),(0,r.mdx)(E.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,r.mdx)(E.mW,{mdxType:"DefaultValueCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"undefined\n"))),(0,r.mdx)(E.Ex,{mdxType:"DescriptionCell"}))))}w.isMDXComponent=!0;var N=["components"];function B(){return B=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},B.apply(this,arguments)}function S(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var A={},P="wrapper";function C(e){var t=e.components,n=S(e,N);return(0,r.mdx)(P,B({},A,n,{components:t,mdxType:"MDXLayout"}),(0,r.mdx)(l.C,{mdxType:"Badge"}),(0,r.mdx)("h1",{id:"terra-block-action-footer"},"Terra Block Action Footer"),(0,r.mdx)("p",null,"The block action footer component is a footer bar that contains a single socket for placing actionable items such as buttons and hyperlinks. If no actions are provided, the footer bar collapses to a themeable height and maintains the top border."),(0,r.mdx)("h2",{id:"usage"},"Usage"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-jsx"},"import BlockActionFooter from 'terra-action-footer/lib/BlockActionFooter';\n")),(0,r.mdx)("h2",{id:"examples"},"Examples"),(0,r.mdx)(s,{title:"Single Action",mdxType:"SingleActionExample"}),(0,r.mdx)(y,{title:"Multiple Actions",mdxType:"MultipleActionsExample"}),(0,r.mdx)("h2",{id:"block-action-footer-props"},"Block Action Footer Props"),(0,r.mdx)(w,{mdxType:"BlockActionFooterPropsTable"}))}C.isMDXComponent=!0},64027:function(e,t,n){n.d(t,{C:function(){return l}});var a=n(67294),r=n(22863),l=function(e){var t=e.url;return a.createElement(r.Z,{src:"https://github.com/cerner/terra-core/tree/main/packages/terra-action-footer",name:"terra-action-footer",version:"2.66.0",url:t})}},13006:function(e,t,n){n.r(t),t.default={"content-wrapper":"ExampleTemplate__content-wrapper___SChNL"}},17422:function(e,t,n){n.r(t),t.default={badge:"Badges-module__badge___vex-+","badge-container":"Badges-module__badge-container___B13Mv","badge-name":"Badges-module__badge-name___jkN0m","badge-version":"Badges-module__badge-version___agZ+P"}},53560:function(e,t,n){n.r(t),t.default={"clinical-lowlight-theme":"ExampleTemplate-module__clinical-lowlight-theme___rBbtD","orion-fusion-theme":"ExampleTemplate-module__orion-fusion-theme___GzA23",template:"ExampleTemplate-module__template___a4uPk",header:"ExampleTemplate-module__header___iFXV3",content:"ExampleTemplate-module__content___48m4Q",description:"ExampleTemplate-module__description___NwBJo",footer:"ExampleTemplate-module__footer___GpSoG","button-container":"ExampleTemplate-module__button-container___rAD11",css:"ExampleTemplate-module__css___+jtk1",code:"ExampleTemplate-module__code___7rC6C","css-toggle":"ExampleTemplate-module__css-toggle___chHK7","code-toggle":"ExampleTemplate-module__code-toggle___TGlE-","is-selected":"ExampleTemplate-module__is-selected___0BYwS",item:"ExampleTemplate-module__item___8FTQq",chevron:"ExampleTemplate-module__chevron___VbY7N",title:"ExampleTemplate-module__title___r+nbJ","dynamic-content":"ExampleTemplate-module__dynamic-content___k+1H7"}},33864:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=l(n(67294)),r=l(n(99139));function l(e){return e&&e.__esModule?e:{default:e}}function o(){return o=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},o.apply(this,arguments)}var c=function(e){var t=o({},e);return a.default.createElement(r.default,t,a.default.createElement("path",{d:"M10.3 24 33.8 0l3.9 3.8L18 24l19.7 20.2-3.9 3.8z"}))};c.displayName="IconChevronLeft",c.defaultProps={viewBox:"0 0 48 48","data-name":"Layer 1",xmlns:"http://www.w3.org/2000/svg"};t.default=c}}]);