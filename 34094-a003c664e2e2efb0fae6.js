"use strict";(self.webpackChunkterra_ui=self.webpackChunkterra_ui||[]).push([[34094],{9091:function(e,t,n){function a(e){return a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a(e)}t.Z=void 0;var r=s(n(67294)),i=s(n(3718)),o=s(n(47166)),l=s(n(67388));function s(e){return e&&e.__esModule?e:{default:e}}function u(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?u(Object(n),!0).forEach((function(t){d(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t,n){return(t=p(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function m(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,p(a.key),a)}}function p(e){var t=function(e,t){if("object"!==a(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!==a(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===a(t)?t:String(t)}function f(e,t){return f=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},f(e,t)}function h(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=g(e);if(t){var i=g(this).constructor;n=Reflect.construct(r,arguments,i)}else n=r.apply(this,arguments);return function(e,t){if(t&&("object"===a(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return y(e)}(this,n)}}function y(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function g(e){return g=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},g(e)}var v=o.default.bind(l.default),b=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&f(e,t)}(l,e);var t,n,a,o=h(l);function l(){var e;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,l),(e=o.call(this)).state={lineSegments:[],lineWidth:i.default.Opts.Width.FINE},e.handleSingleLine=e.handleSingleLine.bind(y(e)),e.handleClear=e.handleClear.bind(y(e)),e.handleLineWidth=e.handleLineWidth.bind(y(e)),e}return t=l,(n=[{key:"handleSingleLine",value:function(){var e=c(c({},this.state),{},{lineSegments:[{x1:71,y1:8,x2:71,y2:8},{x1:71,y1:8,x2:71,y2:10},{x1:71,y1:10,x2:71,y2:17},{x1:71,y1:17,x2:71,y2:28},{x1:71,y1:28,x2:71,y2:44},{x1:71,y1:44,x2:71,y2:56},{x1:71,y1:56,x2:71,y2:68},{x1:71,y1:68,x2:71,y2:75},{x1:71,y1:75,x2:71,y2:81},{x1:71,y1:81,x2:71,y2:84},{x1:71,y1:84,x2:71,y2:86},{x1:71,y1:86,x2:71,y2:87},{x1:71,y1:87,x2:71,y2:87}]});this.setState(e)}},{key:"handleClear",value:function(){var e=c(c({},this.state),{},{lineSegments:[]});this.setState(e)}},{key:"handleLineWidth",value:function(e){this.setState(d({},e.target.name,e.target.value))}},{key:"render",value:function(){return r.default.createElement("div",null,r.default.createElement("div",{className:v("signature-wrapper")},r.default.createElement(i.default,{id:"foo",lineWidth:this.state.lineWidth,lineSegments:this.state.lineSegments})),r.default.createElement("div",null,r.default.createElement("button",{type:"button",onClick:this.handleClear},"Clear "),r.default.createElement("button",{type:"button",onClick:this.handleSingleLine},"Sign w/Line "),r.default.createElement("div",null,r.default.createElement("p",null,r.default.createElement("label",{htmlFor:"lineWidth"},"Select a line width:")),r.default.createElement("select",{id:"lineWidth",name:"lineWidth",value:this.state.lineWidth,onChange:this.handleLineWidth},r.default.createElement("option",{value:"1"},"EXTRAFINE"),r.default.createElement("option",{value:"2"},"FINE"),r.default.createElement("option",{value:"4"},"MEDIUM"),r.default.createElement("option",{value:"6"},"HEAVY")))))}}])&&m(t.prototype,n),a&&m(t,a),Object.defineProperty(t,"prototype",{writable:!1}),l}(r.default.Component);t.Z=b},22863:function(e,t,n){var a=n(64836);t.Z=void 0;var r=a(n(67294)),i=a(n(45697)),o=a(n(47166)),l=a(n(17422)),s=o.default.bind(l.default),u={name:i.default.string.isRequired,src:i.default.string,url:i.default.string,version:i.default.string.isRequired},c=function(e){var t=e.src,n=e.name,a=e.url,i=e.version,o=r.default.createElement("a",{className:s("badge"),href:a||"https://www.npmjs.org/package/".concat(n,"/v/").concat(i)},r.default.createElement("span",{className:s("badge-name")},a?"package":"npm"),r.default.createElement("span",{className:s("badge-version")},"v".concat(i))),l=t?r.default.createElement("a",{className:s("badge"),href:t},r.default.createElement("span",{className:s("badge-name")},"github"),r.default.createElement("span",{className:s("badge-version")},"source")):void 0;return r.default.createElement("div",{className:s("badge-container")},o,l)};c.propTypes=u;var d=c;t.Z=d},49271:function(e,t,n){var a=n(64836),r=n(18698);t.Z=void 0;var i=a(n(27424)),o=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==r(e)&&"function"!=typeof e)return{default:e};var n=f(t);if(n&&n.has(e))return n.get(e);var a={},i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var l=i?Object.getOwnPropertyDescriptor(e,o):null;l&&(l.get||l.set)?Object.defineProperty(a,o,l):a[o]=e[o]}a.default=e,n&&n.set(e,a);return a}(n(67294)),l=a(n(45697)),s=a(n(47166)),u=n(21538),c=a(n(33864)),d=a(n(23399)),m=n(51051),p=a(n(53560));function f(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(f=function(e){return e?n:t})(e)}var h=s.default.bind(p.default),y={example:l.default.element,exampleSrc:l.default.element,exampleCssSrc:l.default.element,title:l.default.string,description:l.default.node,isExpanded:l.default.bool},g=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","true")},v=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","false")},b=function(e){var t=e.example,n=e.exampleSrc,a=e.exampleCssSrc,r=e.title,l=e.description,s=e.isExpanded,p=(0,o.useState)(s),f=(0,i.default)(p,2),y=f[0],b=f[1],x=(0,o.useState)(!1),_=(0,i.default)(x,2),E=_[0],S=_[1],w=o.default.useContext(u.ThemeContext),O=void 0!==a,j=function(){S(!E),y&&b(!y)},T=function(){b(!y),E&&S(!E)},N=function(e,t){e.nativeEvent.keyCode!==m.KEY_SPACE&&e.nativeEvent.keyCode!==m.KEY_RETURN||(e.preventDefault(),t())};return o.default.createElement("div",{className:h("template",w.className)},o.default.createElement("div",{className:h("header")},r&&o.default.createElement("h2",{className:h("title")},r)),o.default.createElement("div",{className:h("content")},l&&o.default.createElement("div",{className:h("description")},l),t),o.default.createElement("div",{className:h("footer")},n?o.default.createElement("div",{className:h("button-container")},O&&o.default.createElement("button",{type:"button",className:h("css-toggle","item",{"is-selected":E}),onClick:j,onKeyDown:function(e){return N(e,j)},onBlur:g,onMouseDown:v,tabIndex:0,"data-focus-styles-enabled":!0},o.default.createElement(c.default,{className:h("chevron")}),o.default.createElement("span",null,"CSS"),o.default.createElement(d.default,{className:h("chevron")})),o.default.createElement("button",{type:"button",className:h("code-toggle","item",{"is-selected":y}),onClick:T,onKeyDown:function(e){return N(e,T)},onBlur:g,onMouseDown:v,tabIndex:0,"data-focus-styles-enabled":!0},o.default.createElement(c.default,{className:h("chevron")}),o.default.createElement("span",null,"Code"),o.default.createElement(d.default,{className:h("chevron")}))):null,o.default.createElement("div",null,E&&o.default.createElement("div",{className:h("css")},a),y&&o.default.createElement("div",{className:h("code")},n))))};b.propTypes=y,b.defaultProps={isExpanded:!1};var x=b;t.Z=x},34094:function(e,t,n){n.r(t),n.d(t,{default:function(){return L}});var a=n(67294),r=n(81254),i=n(70550),o=n(9091),l=["components"];function s(){return s=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},s.apply(this,arguments)}function u(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c={};function d(e){var t=e.components,n=u(e,l);return(0,r.mdx)("wrapper",s({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-jsx"},'import React from \'react\';\nimport Signature from \'terra-signature\';\nimport classNames from \'classnames/bind\';\nimport styles from \'./SignatureExample.module.scss\';\n\nconst cx = classNames.bind(styles);\n\nclass SignatureExample extends React.Component {\n  constructor() {\n    super();\n\n    this.state = { lineSegments: [], lineWidth: Signature.Opts.Width.FINE };\n\n    this.handleSingleLine = this.handleSingleLine.bind(this);\n    this.handleClear = this.handleClear.bind(this);\n    this.handleLineWidth = this.handleLineWidth.bind(this);\n  }\n\n  handleSingleLine() {\n    const singleLine = [{\n      x1: 71, y1: 8, x2: 71, y2: 8,\n    }, {\n      x1: 71, y1: 8, x2: 71, y2: 10,\n    }, {\n      x1: 71, y1: 10, x2: 71, y2: 17,\n    }, {\n      x1: 71, y1: 17, x2: 71, y2: 28,\n    }, {\n      x1: 71, y1: 28, x2: 71, y2: 44,\n    }, {\n      x1: 71, y1: 44, x2: 71, y2: 56,\n    }, {\n      x1: 71, y1: 56, x2: 71, y2: 68,\n    }, {\n      x1: 71, y1: 68, x2: 71, y2: 75,\n    }, {\n      x1: 71, y1: 75, x2: 71, y2: 81,\n    }, {\n      x1: 71, y1: 81, x2: 71, y2: 84,\n    }, {\n      x1: 71, y1: 84, x2: 71, y2: 86,\n    }, {\n      x1: 71, y1: 86, x2: 71, y2: 87,\n    }, {\n      x1: 71, y1: 87, x2: 71, y2: 87,\n    }];\n    const newState = { ...this.state, lineSegments: singleLine };\n    this.setState(newState);\n  }\n\n  handleClear() {\n    const newState = { ...this.state, lineSegments: [] };\n    this.setState(newState);\n  }\n\n  handleLineWidth(event) {\n    this.setState({ [event.target.name]: event.target.value });\n  }\n\n  render() {\n    return (\n      <div>\n        <div className={cx(\'signature-wrapper\')}>\n          <Signature id="foo" lineWidth={this.state.lineWidth} lineSegments={this.state.lineSegments} />\n        </div>\n        <div>\n          <button type="button" onClick={this.handleClear}>Clear </button>\n          <button type="button" onClick={this.handleSingleLine}>Sign w/Line </button>\n          <div>\n            <p><label htmlFor="lineWidth">Select a line width:</label></p>\n            <select id="lineWidth" name="lineWidth" value={this.state.lineWidth} onChange={this.handleLineWidth}>\n              <option value="1">EXTRAFINE</option>\n              <option value="2">FINE</option>\n              <option value="4">MEDIUM</option>\n              <option value="6">HEAVY</option>\n            </select>\n          </div>\n        </div>\n      </div>\n    );\n  }\n}\n\nexport default SignatureExample;\n\n')))}d.isMDXComponent=!0;var m=n(49271),p=["components"];function f(){return f=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},f.apply(this,arguments)}function h(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var y={};function g(e){var t=e.components,n=h(e,p);return(0,r.mdx)("wrapper",f({},y,n,{components:t,mdxType:"MDXLayout"}),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-scss"},":local { \n  .signature-wrapper {\n    border: 1px solid rgb(0, 0, 0);\n    height: 100px;\n    padding: 5px;\n    width: 100%;\n  }\n}\n\n")))}g.isMDXComponent=!0;var v=function(e){var t=e.title,n=e.description,r=e.isExpanded;return a.createElement(m.Z,{title:t||"Signature Example",description:n,example:a.createElement(o.Z,null),exampleCssSrc:a.createElement(g,null),exampleSrc:a.createElement(d,null),isExpanded:r})},b=n(78530),x=["components"];function _(){return _=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},_.apply(this,arguments)}function E(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var S={},w="wrapper";function O(e){var t=e.components,n=E(e,x);return(0,r.mdx)(w,_({},S,n,{components:t,mdxType:"MDXLayout"}),(0,r.mdx)(b.ZP,{mdxType:"PropsTable"},(0,r.mdx)(b.X2,{key:"ROW1",mdxType:"Row"},(0,r.mdx)(b.O,{mdxType:"PropNameCell"},"lineWidth"),(0,r.mdx)(b.Di,{mdxType:"TypeCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"enum: [\n  1\n  2\n  4\n  6\n],\n"))),(0,r.mdx)(b.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,r.mdx)(b.mW,{mdxType:"DefaultValueCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"2\n"))),(0,r.mdx)(b.Ex,{mdxType:"DescriptionCell"},(0,r.mdx)("p",null,"The line width to use when drawing the signature on the canvas.\nOne of Signature.Opts.Width.EXTRA_FINE, Signature.Opts.Width.FINE, Signature.Opts.Width.MEDIUM, Signature.Opts.Width.HEAVY."))),(0,r.mdx)(b.X2,{key:"ROW2",mdxType:"Row"},(0,r.mdx)(b.O,{mdxType:"PropNameCell"},"lineSegments"),(0,r.mdx)(b.Di,{mdxType:"TypeCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"array\n"))),(0,r.mdx)(b.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,r.mdx)(b.mW,{mdxType:"DefaultValueCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"[]\n"))),(0,r.mdx)(b.Ex,{mdxType:"DescriptionCell"},(0,r.mdx)("p",null,"Line segments that define signature."))),(0,r.mdx)(b.X2,{key:"ROW3",mdxType:"Row"},(0,r.mdx)(b.O,{mdxType:"PropNameCell"},"onChange"),(0,r.mdx)(b.Di,{mdxType:"TypeCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"func\n"))),(0,r.mdx)(b.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,r.mdx)(b.mW,{mdxType:"DefaultValueCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"undefined\n"))),(0,r.mdx)(b.Ex,{mdxType:"DescriptionCell"},(0,r.mdx)("p",null,"A callback function to execute when a line segment is drawn. The first parameter is the event, the\nsecond parameter is all the line segments, and the last parameter is the most recent line segment drawn.")))))}O.isMDXComponent=!0;var j=["components"];function T(){return T=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},T.apply(this,arguments)}function N(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var C={},P="wrapper";function L(e){var t=e.components,n=N(e,j);return(0,r.mdx)(P,T({},C,n,{components:t,mdxType:"MDXLayout"}),(0,r.mdx)(i.C,{mdxType:"Badge"}),(0,r.mdx)("h1",{id:"terra-signature"},"Terra Signature"),(0,r.mdx)("p",null,"The terra-signature component provides users a way to define a signature with a series of line segments.\nThe component can define line width, line color, and optionally display a signature if the line segments have\nalready been recorded. Exiting the canvas then re-entering continues the drawing, as long as the pointer does not exit the confines of the browser. For mouse usage, only left click drawing is enabled."),(0,r.mdx)("h2",{id:"getting-started"},"Getting Started"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},"Install with ",(0,r.mdx)("a",{parentName:"li",href:"https://www.npmjs.com/"},"npmjs"),":",(0,r.mdx)("ul",{parentName:"li"},(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("inlineCode",{parentName:"li"},"npm install terra-signature"))))),(0,r.mdx)("h2",{id:"peer-dependencies"},"Peer Dependencies"),(0,r.mdx)("p",null,"This component requires the following peer dependencies be installed in your app for the component to properly function."),(0,r.mdx)("table",null,(0,r.mdx)("thead",{parentName:"table"},(0,r.mdx)("tr",{parentName:"thead"},(0,r.mdx)("th",{parentName:"tr",align:null},"Peer Dependency"),(0,r.mdx)("th",{parentName:"tr",align:null},"Version"))),(0,r.mdx)("tbody",{parentName:"table"},(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"react"),(0,r.mdx)("td",{parentName:"tr",align:null},"^16.8.5")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"react-dom"),(0,r.mdx)("td",{parentName:"tr",align:null},"^16.8.5")))),(0,r.mdx)("h2",{id:"usage"},"Usage"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-jsx"},"import Signature from 'terra-signature';\n")),(0,r.mdx)("h2",{id:"component-features"},"Component Features"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("a",{parentName:"li",href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#cross-browser-support"},"Cross-Browser Support"))),(0,r.mdx)("h2",{id:"examples"},"Examples"),(0,r.mdx)(v,{title:"Default Signature",mdxType:"SignatureExample"}),(0,r.mdx)("h2",{id:"signature-props"},"Signature Props"),(0,r.mdx)(O,{mdxType:"SignaturePropsTable"}))}L.isMDXComponent=!0},70550:function(e,t,n){n.d(t,{C:function(){return i}});var a=n(67294),r=n(22863),i=function(e){var t=e.url;return a.createElement(r.Z,{src:"https://github.com/cerner/terra-core/tree/main/packages/terra-signature",name:"terra-signature",version:"2.40.0",url:t})}},67388:function(e,t,n){n.r(t),t.default={"signature-wrapper":"SignatureExample-module__signature-wrapper___FE0r1"}},17422:function(e,t,n){n.r(t),t.default={badge:"Badges-module__badge___vex-+","badge-container":"Badges-module__badge-container___B13Mv","badge-name":"Badges-module__badge-name___jkN0m","badge-version":"Badges-module__badge-version___agZ+P"}},53560:function(e,t,n){n.r(t),t.default={"clinical-lowlight-theme":"ExampleTemplate-module__clinical-lowlight-theme___rBbtD","orion-fusion-theme":"ExampleTemplate-module__orion-fusion-theme___GzA23",template:"ExampleTemplate-module__template___a4uPk",header:"ExampleTemplate-module__header___iFXV3",content:"ExampleTemplate-module__content___48m4Q",description:"ExampleTemplate-module__description___NwBJo",footer:"ExampleTemplate-module__footer___GpSoG","button-container":"ExampleTemplate-module__button-container___rAD11",css:"ExampleTemplate-module__css___+jtk1",code:"ExampleTemplate-module__code___7rC6C","css-toggle":"ExampleTemplate-module__css-toggle___chHK7","code-toggle":"ExampleTemplate-module__code-toggle___TGlE-","is-selected":"ExampleTemplate-module__is-selected___0BYwS",item:"ExampleTemplate-module__item___8FTQq",chevron:"ExampleTemplate-module__chevron___VbY7N",title:"ExampleTemplate-module__title___r+nbJ","dynamic-content":"ExampleTemplate-module__dynamic-content___k+1H7"}},18514:function(e,t,n){n.r(t),t.default={"clinical-lowlight-theme":"Signature-module__clinical-lowlight-theme___W2A78","orion-fusion-theme":"Signature-module__orion-fusion-theme___+fuJH",signature:"Signature-module__signature___EuTwS"}},33864:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=i(n(67294)),r=i(n(99139));function i(e){return e&&e.__esModule?e:{default:e}}function o(){return o=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},o.apply(this,arguments)}var l=function(e){var t=o({},e);return a.default.createElement(r.default,t,a.default.createElement("path",{d:"M10.3 24 33.8 0l3.9 3.8L18 24l19.7 20.2-3.9 3.8z"}))};l.displayName="IconChevronLeft",l.defaultProps={viewBox:"0 0 48 48","data-name":"Layer 1",xmlns:"http://www.w3.org/2000/svg"};t.default=l},3718:function(e,t,n){function a(e){return a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=c(n(67294)),i=c(n(45697)),o=c(n(47166)),l=c(n(50026)),s=c(n(18514)),u=["lineSegments","lineWidth","onChange"];function c(e){return e&&e.__esModule?e:{default:e}}function d(){return d=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},d.apply(this,arguments)}function m(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}function p(e){return function(e){if(Array.isArray(e))return f(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return f(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return f(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function f(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}function h(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(i=r.key,o=void 0,o=function(e,t){if("object"!==a(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!==a(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(i,"string"),"symbol"===a(o)?o:String(o)),r)}var i,o}function y(e,t){return y=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},y(e,t)}function g(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=b(e);if(t){var i=b(this).constructor;n=Reflect.construct(r,arguments,i)}else n=r.apply(this,arguments);return function(e,t){if(t&&("object"===a(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return v(e)}(this,n)}}function v(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function b(e){return b=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},b(e)}var x=o.default.bind(s.default),_={EXTRA_FINE:1,FINE:2,MEDIUM:4,HEAVY:6},E=0,S={lineWidth:i.default.oneOf([_.EXTRA_FINE,_.FINE,_.MEDIUM,_.HEAVY]),lineSegments:i.default.array,onChange:i.default.func},w={lineWidth:_.FINE,lineSegments:[],onChange:void 0},O=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&y(e,t)}(o,e);var t,n,a,i=g(o);function o(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,o),(t=i.call(this,e)).state={lineSegments:e.lineSegments},t.mouseInBounds=t.mouseInBounds.bind(v(t)),t.mouseDown=t.mouseDown.bind(v(t)),t.mouseUp=t.mouseUp.bind(v(t)),t.mouseXY=t.mouseXY.bind(v(t)),t.mouseLeave=t.mouseLeave.bind(v(t)),t.addLine=t.addLine.bind(v(t)),t.draw=t.draw.bind(v(t)),t.drawSignature=t.drawSignature.bind(v(t)),t.clearSignature=t.clearSignature.bind(v(t)),t.updateDimensions=t.updateDimensions.bind(v(t)),t}return t=o,(n=[{key:"componentDidMount",value:function(){this.canvas.addEventListener("mousedown",this.mouseDown),this.canvas.addEventListener("mousemove",this.mouseXY),this.canvas.addEventListener("touchstart",this.mouseDown,!1),this.canvas.addEventListener("touchmove",this.mouseXY,!0),this.canvas.addEventListener("touchend",this.mouseUp,!1),this.canvas.addEventListener("resize",this.updateDimensions),document.body.addEventListener("mouseleave",this.mouseLeave,!1),document.body.addEventListener("mouseup",this.mouseUp),document.body.addEventListener("touchleave",this.mouseLeave,!1),document.body.addEventListener("touchcancel",this.mouseUp,!1),this.canvas.getContext("2d").lineWidth=this.props.lineWidth,this.updateDimensions()}},{key:"componentDidUpdate",value:function(e){this.props.lineSegments===e.lineSegments&&this.props.lineWidth===e.lineWidth||(this.setState({lineSegments:this.props.lineSegments}),this.drawSignature(this.props.lineSegments,this.props.lineWidth))}},{key:"componentWillUnmount",value:function(){this.canvas.removeEventListener("mousedown",this.mouseDown),this.canvas.removeEventListener("mousemove",this.mouseXY),this.canvas.removeEventListener("touchstart",this.mouseDown),this.canvas.removeEventListener("touchmove",this.mouseXY),this.canvas.removeEventListener("touchend",this.mouseUp),this.canvas.removeEventListener("resize",this.updateDimensions),document.body.removeEventListener("mouseleave",this.mouseLeave),document.body.removeEventListener("mouseup",this.mouseUp),document.body.removeEventListener("touchleave",this.mouseLeave),document.body.removeEventListener("touchcancel",this.mouseUp)}},{key:"mouseInBounds",value:function(e){var t=this.canvasRect;return"touchmove"===e.type?t.top<e.changedTouches[0].pageY&&t.left<e.changedTouches[0].pageX&&t.bottom>e.changedTouches[0].pageY&&t.right>e.changedTouches[0].pageX:t.top<e.pageY&&t.left<e.pageX&&t.bottom>e.pageY&&t.right>e.pageX}},{key:"mouseDown",value:function(e){"button"in e&&e.button!==E||(this.setState({lastLineSegments:[],painting:!0}),this.canvasRect=this.canvas.getBoundingClientRect(),"touchstart"===e.type?this.addLine(e.changedTouches[0].pageX-this.canvasRect.left,e.changedTouches[0].pageY-this.canvasRect.top,!1):this.addLine(e.pageX-this.canvasRect.left,e.pageY-this.canvasRect.top,!1),this.draw())}},{key:"mouseUp",value:function(e){this.setState({painting:!1}),this.props.onChange&&this.props.onChange(e,this.state.lineSegments,this.state.lastLineSegments)}},{key:"mouseXY",value:function(e){this.state.painting&&this.mouseInBounds(e)&&("touchmove"===e.type?this.addLine(e.changedTouches[0].pageX-this.canvasRect.left,e.changedTouches[0].pageY-this.canvasRect.top,!0):this.addLine(e.pageX-this.canvasRect.left,e.pageY-this.canvasRect.top,!0),this.draw())}},{key:"mouseLeave",value:function(e){this.state.painting&&(this.setState({painting:!1}),this.props.onChange&&this.props.onChange(e,this.state.lineSegments,this.state.lastLineSegments))}},{key:"addLine",value:function(e,t,n){var a;if(n){var r=this.state.lineSegments[this.state.lineSegments.length-1];a={x1:r.x2,y1:r.y2,x2:e,y2:t}}else a={x1:e,y1:t,x2:e,y2:t};this.setState((function(e){return{lineSegments:[].concat(p(e.lineSegments),[a]),lastLineSegments:[].concat(p(e.lastLineSegments),[a])}}))}},{key:"draw",value:function(){var e=this.canvas.getContext("2d");if(this.state.lineSegments.length>0){var t=this.state.lineSegments[this.state.lineSegments.length-1],n=window.getComputedStyle(this.canvas).getPropertyValue("color");e.lineJoin="round",e.beginPath(),e.moveTo(t.x1,t.y1),e.lineTo(t.x2,t.y2),e.strokeStyle=n,e.stroke()}}},{key:"drawSignature",value:function(e,t){var n=this.canvas.getContext("2d"),a=window.getComputedStyle(this.canvas).getPropertyValue("color");n.lineJoin="round",n.lineWidth=t,n.clearRect(0,0,this.canvasRect.width,this.canvasRect.height);for(var r=e.length,i=0;i<r;i+=1)n.beginPath(),n.moveTo(e[i].x1,e[i].y1),n.lineTo(e[i].x2,e[i].y2),n.strokeStyle=a,n.stroke()}},{key:"clearSignature",value:function(){this.setState({lineSegments:[]}),this.canvas.getContext("2d").clearRect(0,0,this.canvasRect.width,this.canvasRect.height)}},{key:"updateDimensions",value:function(){var e=this;setTimeout((function(){e.canvasRect=e.canvas.getBoundingClientRect(),e.canvas.width=e.canvasRect.width,e.canvas.height=e.canvasRect.height,e.drawSignature(e.state.lineSegments)}),250)}},{key:"render",value:function(){var e=this,t=this.context,n=this.props,a=(n.lineSegments,n.lineWidth,n.onChange,m(n,u));return r.default.createElement("canvas",d({},a,{className:x("signature",t.className),ref:function(t){e.canvas=t}}))}}])&&h(t.prototype,n),a&&h(t,a),Object.defineProperty(t,"prototype",{writable:!1}),o}(r.default.Component);O.propTypes=S,O.defaultProps=w,O.contextType=l.default,O.Opts={},O.Opts.Width=_;var j=O;t.default=j}}]);