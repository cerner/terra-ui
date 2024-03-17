"use strict";(self.webpackChunkterra_ui=self.webpackChunkterra_ui||[]).push([[46140,17711,40092,52947,75328,72949,8185,4645,27026,47115,95330,7235,29616,30566,63423,62473,24087,84854,38663,61044,92260,85804,18661,69879,49407,47498,41042,25117,69496,2353,81784,59403,24734,57591,37022,14641,71308,79972,73899,48927,98463,20844,85785,12829,8166,30547,52928,96261],{55713:function(e,t,r){var n=r(24994);t.A=void 0;var a=n(r(96540)),l=n(r(5556)),o=n(r(67967)),u=n(r(25642)),i=o.default.bind(u.default),c={name:l.default.string.isRequired,src:l.default.string,url:l.default.string,version:l.default.string.isRequired},d=function(e){var t=e.src,r=e.name,n=e.url,l=e.version,o=a.default.createElement("a",{className:i("badge"),href:n||"https://www.npmjs.org/package/".concat(r,"/v/").concat(l)},a.default.createElement("span",{className:i("badge-name")},n?"package":"npm"),a.default.createElement("span",{className:i("badge-version")},"v".concat(l))),u=t?a.default.createElement("a",{className:i("badge"),href:t},a.default.createElement("span",{className:i("badge-name")},"github"),a.default.createElement("span",{className:i("badge-version")},"source")):void 0;return a.default.createElement("div",{className:i("badge-container")},o,u)};d.propTypes=c;t.A=d},201:function(e,t,r){var n=r(24994),a=r(73738);t.A=void 0;var l=n(r(85715)),o=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=a(e)&&"function"!=typeof e)return{default:e};var r=m(t);if(r&&r.has(e))return r.get(e);var n={__proto__:null},l=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var u=l?Object.getOwnPropertyDescriptor(e,o):null;u&&(u.get||u.set)?Object.defineProperty(n,o,u):n[o]=e[o]}return n.default=e,r&&r.set(e,n),n}(r(96540)),u=n(r(5556)),i=n(r(67967)),c=r(92912),d=n(r(49558)),f=n(r(53665)),s=r(25966),p=n(r(89986));function m(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(m=function(e){return e?r:t})(e)}var b=i.default.bind(p.default),_={example:u.default.element,exampleSrc:u.default.element,exampleCssSrc:u.default.element,title:u.default.string,description:u.default.node,isExpanded:u.default.bool},y=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","true")},g=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","false")},v=function(e){var t=e.example,r=e.exampleSrc,n=e.exampleCssSrc,a=e.title,u=e.description,i=e.isExpanded,p=(0,o.useState)(i),m=(0,l.default)(p,2),_=m[0],v=m[1],h=(0,o.useState)(!1),O=(0,l.default)(h,2),j=O[0],E=O[1],w=o.default.useContext(c.ThemeContext),T=void 0!==n,P=function(){E(!j),_&&v(!_)},S=function(){v(!_),j&&E(!j)},C=function(e,t){e.nativeEvent.keyCode!==s.KEY_SPACE&&e.nativeEvent.keyCode!==s.KEY_RETURN||(e.preventDefault(),t())};return o.default.createElement("div",{className:b("template",w.className)},o.default.createElement("div",{className:b("header")},a&&o.default.createElement("h2",{className:b("title")},a)),o.default.createElement("div",{className:b("content")},u&&o.default.createElement("div",{className:b("description")},u),t),o.default.createElement("div",{className:b("footer")},r?o.default.createElement("div",{className:b("button-container")},T&&o.default.createElement("button",{type:"button",className:b("css-toggle","item",{"is-selected":j}),onClick:P,onKeyDown:function(e){return C(e,P)},onBlur:y,onMouseDown:g,tabIndex:0,"data-focus-styles-enabled":!0},o.default.createElement(d.default,{className:b("chevron")}),o.default.createElement("span",null,"CSS"),o.default.createElement(f.default,{className:b("chevron")})),o.default.createElement("button",{type:"button",className:b("code-toggle","item",{"is-selected":_}),onClick:S,onKeyDown:function(e){return C(e,S)},onBlur:y,onMouseDown:g,tabIndex:0,"data-focus-styles-enabled":!0},o.default.createElement(d.default,{className:b("chevron")}),o.default.createElement("span",null,"Code"),o.default.createElement(f.default,{className:b("chevron")}))):null,o.default.createElement("div",null,j&&o.default.createElement("div",{className:b("css")},n),_&&o.default.createElement("div",{className:b("code")},r))))};v.propTypes=_,v.defaultProps={isExpanded:!1};t.A=v},12883:function(e,t,r){var n=r(24994),a=r(73738);t.YZ=t.dt=t.Hd=t.NZ=void 0,Object.defineProperty(t,"fI",{enumerable:!0,get:function(){return c.Row}}),t.Ay=t.$d=void 0;var l=s(r(96540)),o=n(r(5556)),u=n(r(67967)),i=r(92912),c=s(r(26984)),d=n(r(89744));function f(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(f=function(e){return e?r:t})(e)}function s(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=a(e)&&"function"!=typeof e)return{default:e};var r=f(t);if(r&&r.has(e))return r.get(e);var n={__proto__:null},l=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var u=l?Object.getOwnPropertyDescriptor(e,o):null;u&&(u.get||u.set)?Object.defineProperty(n,o,u):n[o]=e[o]}return n.default=e,r&&r.set(e,n),n}var p=u.default.bind(d.default),m={children:o.default.node},b={isRequired:o.default.bool};(t.dt=function(e){var t=e.children;return l.default.createElement(c.Cell,{className:p("bold")},t)}).propTypes=m,(t.$d=function(e){var t=e.children;return l.default.createElement(c.Cell,{className:p("code-block-override")},t)}).propTypes=m,(t.YZ=function(e){var t=e.isRequired;return l.default.createElement(c.Cell,{className:p([t?["required"]:[]])},t?"required":"optional")}).propTypes=b,(t.NZ=function(e){var t=e.children;return l.default.createElement(c.Cell,{className:p("code-block-override")},t)}).propTypes=m,(t.Hd=function(e){var t=e.children;return l.default.createElement(c.Cell,null,t)}).propTypes=m;var _=function(e){var t=e.children,r=(0,l.useContext)(i.ThemeContext);return l.default.createElement(c.default,{paddingStyle:"compact",className:p("table",r.className)},l.default.createElement(c.Header,{className:p("header")},l.default.createElement(c.HeaderCell,null,"Prop"),l.default.createElement(c.HeaderCell,null,"Type"),l.default.createElement(c.HeaderCell,null,"Required"),l.default.createElement(c.HeaderCell,null,"Default"),l.default.createElement(c.HeaderCell,null,"Description")),l.default.createElement(c.Body,null,t))};_.propTypes=m;t.Ay=_},42379:function(e,t,r){r.d(t,{E:function(){return l}});var n=r(96540),a=r(55713),l=function(e){var t=e.url;return n.createElement(a.A,{src:"https://github.com/cerner/terra-core/tree/main/packages/terra-tag",name:"terra-tag",version:"2.67.0",url:t})}},25642:function(e,t,r){r.r(t),t.default={badge:"Badges-module__badge___vex-+","badge-container":"Badges-module__badge-container___B13Mv","badge-name":"Badges-module__badge-name___jkN0m","badge-version":"Badges-module__badge-version___agZ+P"}},89986:function(e,t,r){r.r(t),t.default={"clinical-lowlight-theme":"ExampleTemplate-module__clinical-lowlight-theme___rBbtD","orion-fusion-theme":"ExampleTemplate-module__orion-fusion-theme___GzA23",template:"ExampleTemplate-module__template___a4uPk",header:"ExampleTemplate-module__header___iFXV3",content:"ExampleTemplate-module__content___48m4Q",description:"ExampleTemplate-module__description___NwBJo",footer:"ExampleTemplate-module__footer___GpSoG","button-container":"ExampleTemplate-module__button-container___rAD11",css:"ExampleTemplate-module__css___+jtk1",code:"ExampleTemplate-module__code___7rC6C","css-toggle":"ExampleTemplate-module__css-toggle___chHK7","code-toggle":"ExampleTemplate-module__code-toggle___TGlE-","is-selected":"ExampleTemplate-module__is-selected___0BYwS",item:"ExampleTemplate-module__item___8FTQq",chevron:"ExampleTemplate-module__chevron___VbY7N",title:"ExampleTemplate-module__title___r+nbJ","dynamic-content":"ExampleTemplate-module__dynamic-content___k+1H7"}},89744:function(e,t,r){r.r(t),t.default={"clinical-lowlight-theme":"PropsTable-module__clinical-lowlight-theme___3pa8J","orion-fusion-theme":"PropsTable-module__orion-fusion-theme___FtP5r",bold:"PropsTable-module__bold___-z9Sz",table:"PropsTable-module__table___rzW-v",required:"PropsTable-module__required___ev190","code-block-override":"PropsTable-module__code-block-override___fF0JK"}},78482:function(e,t,r){r.r(t),t.default={"clinical-lowlight-theme":"Table-module__clinical-lowlight-theme___PqYJ8","orion-fusion-theme":"Table-module__orion-fusion-theme___d9rxf",table:"Table-module__table___eg2Mi","padding-standard":"Table-module__padding-standard___BfbC-","padding-compact":"Table-module__padding-compact___Yus6Z",striped:"Table-module__striped___n8xJe"}},70454:function(e,t,r){r.r(t),t.default={"clinical-lowlight-theme":"RollupTag-module__clinical-lowlight-theme___1uFTI","orion-fusion-theme":"RollupTag-module__orion-fusion-theme___YaSWi","rollup-tag":"RollupTag-module__rollup-tag___GGRZq","is-active":"RollupTag-module__is-active___JtOLP","tags-group":"RollupTag-module__tags-group___XZbus"}},66200:function(e,t,r){r.r(t),t.default={"clinical-lowlight-theme":"Tag-module__clinical-lowlight-theme___iQ1rm","orion-fusion-theme":"Tag-module__orion-fusion-theme___Q346+",tag:"Tag-module__tag___z94Y9","is-interactive":"Tag-module__is-interactive___huWZF","has-underline":"Tag-module__has-underline___LZvUJ",icon:"Tag-module__icon___YVFGv"}},85444:function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=d(r(96540)),a=d(r(5556)),l=d(r(46942)),o=d(r(67967)),u=d(r(52103)),i=d(r(78482)),c=["children","disableStripes","paddingStyle"];function d(e){return e&&e.__esModule?e:{default:e}}function f(){return f=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},f.apply(this,arguments)}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=o.default.bind(i.default),m={children:a.default.node.isRequired,disableStripes:a.default.bool,paddingStyle:a.default.oneOf(["none","standard","compact"])},b=function(e){var t=e.children,r=e.disableStripes,a=e.paddingStyle,o=s(e,c),i=n.default.useContext(u.default),d=(0,l.default)(p("table",{striped:!r},{"padding-standard":"standard"===a},{"padding-compact":"compact"===a},i.className),o.className);return n.default.createElement("table",f({},o,{className:d}),t)};b.propTypes=m,b.defaultProps={disableStripes:!1,paddingStyle:"none"};t.default=b},61452:function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=o(r(96540)),a=o(r(5556)),l=["children"];function o(e){return e&&e.__esModule?e:{default:e}}function u(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i={children:a.default.node},c=function(e){var t=e.children,r=u(e,l);return n.default.createElement("tbody",r,t)};c.propTypes=i,c.defaultProps={children:[]};t.default=c},86472:function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=o(r(96540)),a=o(r(5556)),l=["children"];function o(e){return e&&e.__esModule?e:{default:e}}function u(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i={children:a.default.node},c=function(e){var t=e.children,r=u(e,l);return n.default.createElement("td",r,t)};c.propTypes=i,c.defaultProps={children:[]};t.default=c},97441:function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=u(r(96540)),a=u(r(5556)),l=u(r(10767)),o=["children"];function u(e){return e&&e.__esModule?e:{default:e}}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c={children:a.default.node},d=function(e){var t=e.children,r=i(e,o);return n.default.createElement("thead",r,n.default.createElement("tr",null,l.default.addScope(t,"col")))};d.propTypes=c,d.defaultProps={children:[]};t.default=d},22417:function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=o(r(96540)),a=o(r(5556)),l=["children"];function o(e){return e&&e.__esModule?e:{default:e}}function u(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i={children:a.default.node},c=function(e){var t=e.children,r=u(e,l);return n.default.createElement("th",r,t)};c.propTypes=i,c.defaultProps={children:[]};t.default=c},36142:function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=c(r(96540)),a=c(r(5556)),l=c(r(67967)),o=c(r(78482)),u=c(r(10767)),i=["children"];function c(e){return e&&e.__esModule?e:{default:e}}function d(){return d=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},d.apply(this,arguments)}function f(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=l.default.bind(o.default),p={children:a.default.node},m=function(e){var t=e.children,r=f(e,i),a=s(["row"]);return n.default.createElement("tr",d({},r,{className:r.className?"".concat(a," ").concat(r.className):a}),u.default.addScope(t,"row"))};m.propTypes=p,m.defaultProps={children:[]};t.default=m},10767:function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n,a=(n=r(96540))&&n.__esModule?n:{default:n};var l={addScope:function(e,t){var r=[];return a.default.Children.forEach(e,(function(e){r.push(a.default.cloneElement(e,{scope:"TableHeaderCell"===e.type.name?t:void 0}))})),r}};t.default=l},26984:function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"Body",{enumerable:!0,get:function(){return a.default}}),Object.defineProperty(t,"Cell",{enumerable:!0,get:function(){return o.default}}),Object.defineProperty(t,"Header",{enumerable:!0,get:function(){return u.default}}),Object.defineProperty(t,"HeaderCell",{enumerable:!0,get:function(){return i.default}}),Object.defineProperty(t,"Row",{enumerable:!0,get:function(){return l.default}}),t.default=void 0;var n=c(r(85444)),a=c(r(61452)),l=c(r(36142)),o=c(r(86472)),u=c(r(97441)),i=c(r(22417));function c(e){return e&&e.__esModule?e:{default:e}}t.default=n.default},72060:function(e,t,r){function n(e){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=f(r(96540)),l=f(r(5556)),o=f(r(46942)),u=f(r(67967)),i=f(r(52103)),c=f(r(66200)),d=["icon","text","href","onClick","onBlur","onFocus","onKeyUp"];function f(e){return e&&e.__esModule?e:{default:e}}function s(){return s=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},s.apply(this,arguments)}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}function m(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,b(n.key),n)}}function b(e){var t=function(e,t){if("object"!=n(e)||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var a=r.call(e,t||"default");if("object"!=n(a))return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==n(t)?t:String(t)}function _(e,t,r){return t=g(t),function(e,t){if(t&&("object"===n(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return v(e)}(e,y()?Reflect.construct(t,r||[],g(e).constructor):t.apply(e,r))}function y(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(y=function(){return!!e})()}function g(e){return g=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},g(e)}function v(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function h(e,t){return h=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},h(e,t)}var O=u.default.bind(c.default),j={href:l.default.string,icon:l.default.element,onClick:l.default.func,onBlur:l.default.func,onFocus:l.default.func,onKeyUp:l.default.func,text:l.default.string.isRequired},E=function(e){function t(e){var r;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(r=_(this,t,[e])).handleKeyUp=r.handleKeyUp.bind(v(r)),r.handleOnBlur=r.handleOnBlur.bind(v(r)),r.handleClick=r.handleClick.bind(v(r)),r}var r,n,l;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&h(e,t)}(t,e),r=t,(n=[{key:"handleOnBlur",value:function(e){this.props.onBlur&&this.props.onBlur(e)}},{key:"handleKeyUp",value:function(e){this.props.onKeyUp&&this.props.onKeyUp(e)}},{key:"handleClick",value:function(e){this.props.onClick&&this.props.onClick(e)}},{key:"render",value:function(){var e=this.props,t=e.icon,r=e.text,n=e.href,l=e.onClick,u=(e.onBlur,e.onFocus),i=(e.onKeyUp,p(e,d)),c=this.context,f=(0,o.default)(O("tag",{"is-interactive":n||l},{"has-underline":n},c.className),i.className),m=O("icon"),b=t?a.default.createElement("span",{className:m},t):null,_=n||l?n?"a":"button":"span";return a.default.createElement(_,s({},i,{className:f,onKeyUp:this.handleKeyUp,onBlur:this.handleOnBlur,onClick:this.handleClick,onFocus:u,href:n,"data-terra-tag":!0}),b,r)}}])&&m(r.prototype,n),l&&m(r,l),Object.defineProperty(r,"prototype",{writable:!1}),t}(a.default.Component);E.propTypes=j,E.contextType=i.default;t.default=E},772:function(e,t,r){function n(e){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=n(e)&&"function"!=typeof e)return{default:e};var r=v(t);if(r&&r.has(e))return r.get(e);var a={__proto__:null},l=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var u=l?Object.getOwnPropertyDescriptor(e,o):null;u&&(u.get||u.set)?Object.defineProperty(a,o,u):a[o]=e[o]}return a.default=e,r&&r.set(e,a),a}(r(96540)),l=r(25966),o=r(8604),u=g(r(46942)),i=g(r(67967)),c=g(r(5556)),d=g(r(7829)),f=r(68414),s=g(r(16524)),p=g(r(52103)),m=g(r(49267)),b=g(r(46935)),_=g(r(66200)),y=["ariaLabel","ariaLabelledBy","ariaDescribedBy","children","intl","isCollapsible"];function g(e){return e&&e.__esModule?e:{default:e}}function v(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(v=function(e){return e?r:t})(e)}function h(){return h=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},h.apply(this,arguments)}function O(e){return function(e){if(Array.isArray(e))return w(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||E(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function j(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,a,l,o,u=[],i=!0,c=!1;try{if(l=(r=r.call(e)).next,0===t){if(Object(r)!==r)return;i=!1}else for(;!(i=(n=l.call(r)).done)&&(u.push(n.value),u.length!==t);i=!0);}catch(e){c=!0,a=e}finally{try{if(!i&&null!=r.return&&(o=r.return(),Object(o)!==o))return}finally{if(c)throw a}}return u}}(e,t)||E(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function E(e,t){if(e){if("string"==typeof e)return w(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?w(e,t):void 0}}function w(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function T(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var P=i.default.bind(_.default),S={ariaLabel:c.default.string.isRequired,ariaLabelledBy:c.default.string,ariaDescribedBy:c.default.string,children:c.default.node,isCollapsible:c.default.bool,intl:c.default.shape({formatMessage:c.default.func}).isRequired},C=function(e){var t=e.ariaLabel,r=e.ariaLabelledBy,n=e.ariaDescribedBy,o=e.children,i=e.intl,c=e.isCollapsible,_=T(e,y),g=a.default.useContext(p.default),v=j((0,a.useState)("-1"),2),E=v[0],w=v[1],S=j((0,a.useState)(a.default.Children.count(o)),2),C=S[0],x=S[1],k=j((0,a.useState)(a.default.Children.count(o)),2),N=k[0],M=k[1],R=j((0,a.useState)(c),2),A=R[0],B=R[1],D=(0,a.useRef)(),I=(0,a.useRef)(),q=(0,a.useRef)(0),K=(0,a.useRef)(!1),U=(0,a.useRef)(t),W=(0,a.useCallback)((function(){var e=m.default.getRollUpIndex(I);A?(x(e),M(a.default.Children.count(o)-e)):e===a.default.Children.count(o)&&M(0)}),[o,A]),Y=function(e){D.current&&D.current.setAttribute("tabIndex",e)},H=function(){D.current&&D.current.focus()},L=(0,a.useCallback)((function(){var e=O(I.current.querySelectorAll("[data-terra-tag]")),t=I.current.querySelector("[data-terra-rollup-tag]");t&&m.default.setRollUpTagTabIndex(t,"-1"),e.length>0&&q.current<e.length?(m.default.setTagsTabIndex(e,"-1"),D.current=e[q.current],Y("0")):c&&A&&t&&(D.current=t,Y("0"))}),[A,c]),F=(0,a.useCallback)((function(){var e=O(I.current.querySelectorAll("[data-terra-tag]"));c&&!A&&e.length>0&&e.length===a.default.Children.count(o)&&(Y("-1"),D.current=e[q.current],Y("0"),K.current&&(H(),K.current=!1))}),[o,A,c]),V=(0,a.useCallback)((function(e){Array.isArray(e)&&(x(a.default.Children.count(o)),M(a.default.Children.count(o)),c&&W(),L(),F())}),[o,c,L,F,W]);(0,a.useLayoutEffect)((function(){var e=new d.default((function(e){V(e)}));return e.observe(I.current.parentNode),function(){e.disconnect(),e=null}}),[o,V]);var Z=function(e){var t=O(I.current.querySelectorAll("[data-terra-tag]"));Y("-1"),q.current=t.findIndex((function(t){return t.id===e.currentTarget.id})),D.current=t.find((function(t){return t.id===e.currentTarget.id})),Y("0"),H()},G={};G.onKeyDown=function(e){var t=O(I.current.querySelectorAll("[data-terra-tag]")),r=I.current.querySelector("[data-terra-rollup-tag]");switch(e.keyCode){case l.KEY_RIGHT:e.preventDefault(),function(e,t){q.current+1<=e.length&&(Y("-1"),t&&q.current+1===e.length?D.current=t:q.current+1<e.length&&(q.current+=1,D.current=e[q.current]),Y("0"),H())}(t,r);break;case l.KEY_LEFT:e.preventDefault(),function(e,t){(D.current===t||q.current>=1)&&(Y("-1"),t&&D.current===t?(q.current=e.length-1,D.current=e[q.current]):(q.current-=1,D.current=e[q.current]),Y("0"),H())}(t,r);break;case l.KEY_HOME:e.preventDefault(),Y("-1"),q.current=0,D.current=t[q.current],Y("0"),H();break;case l.KEY_END:e.preventDefault(),Y("-1"),q.current=t.length-1,D.current=t[q.current],Y("0"),H()}},G.onBlur=function(){return w("-1")};var J=(0,u.default)(P(["tags-group",g.className]),_.className),z="terra-tags-group-interaction-hint-".concat((0,f.v4)()),Q=n?"".concat(n," ").concat(z):z,$=i.formatMessage({id:"Terra.tags.hint.tagList"},{numberOfTags:a.default.Children.count(o)}),X=i.formatMessage({id:"Terra.tags.tagList.navigation.hint"});$="".concat($," ").concat(X),c&&N>0&&A&&($+=", ".concat(i.formatMessage({id:"Terra.tags.hint.rollupNotVisible"},{tagsNotVisibleCount:N})));var ee;return a.default.createElement("div",h({},_,G,{"aria-label":r?void 0:"".concat(U.current),"aria-labelledby":r,"aria-describedby":Q,className:J,ref:I,role:"group",tabIndex:E}),a.default.createElement(s.default,{id:z,text:$,"aria-hidden":"true"}),o?(ee=o,a.default.Children.map(ee,(function(e){if(a.default.isValidElement(e))return a.default.cloneElement(e,{onSelect:Z})})).splice(0,C)):[],c&&N>0&&a.default.createElement(b.default,{isCollapsed:A,onSelectRollUp:function(e){var t=O(I.current.querySelectorAll("[data-terra-tag]"));c&&A&&("keydown"===e.type||"click"===e.type?(K.current=!0,q.current=t.length):(Y("-1"),q.current=t.length)),B(!A)},rollupCount:N}))};C.defaultProps={isCollapsible:!1},C.propTypes=S;t.default=(0,o.injectIntl)(C)},46935:function(e,t,r){function n(e){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=n(e)&&"function"!=typeof e)return{default:e};var r=m(t);if(r&&r.has(e))return r.get(e);var a={__proto__:null},l=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var u=l?Object.getOwnPropertyDescriptor(e,o):null;u&&(u.get||u.set)?Object.defineProperty(a,o,u):a[o]=e[o]}return a.default=e,r&&r.set(e,a),a}(r(96540)),l=r(8604),o=r(25966),u=r(68414),i=p(r(67967)),c=p(r(5556)),d=p(r(23986)),f=p(r(52103)),s=p(r(70454));function p(e){return e&&e.__esModule?e:{default:e}}function m(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(m=function(e){return e?r:t})(e)}var b=i.default.bind(s.default),_={isCollapsed:c.default.bool,onSelectRollUp:c.default.func,rollupCount:c.default.number,intl:c.default.shape({formatMessage:c.default.func}).isRequired},y=function(e){var t=e.isCollapsed,r=e.onSelectRollUp,n=e.intl,l=e.rollupCount,i=(0,a.useRef)(),c=a.default.useContext(f.default),s=t&&l>0?n.formatMessage({id:"Terra.tags.label.rollupTag"},{tagsNotVisibleCount:l}):n.formatMessage({id:"Terra.tags.label.showLess"}),p=t?n.formatMessage({id:"Terra.tags.hint.rollupTag"},{tagsNotVisibleCount:l}):n.formatMessage({id:"Terra.tags.hint.showLess"}),m="terra-rollup-tag-".concat((0,u.v4)());return a.default.createElement(d.default,{id:m,className:b(["rollup-tag",c.className]),onClick:function(e){i.current.setAttribute("data-terra-rollup-tag-show-focus-styles","true"),e.preventDefault(),r&&r(e)},onKeyDown:function(e){i.current.setAttribute("data-terra-rollup-tag-show-focus-styles","true"),e.keyCode!==o.KEY_RETURN&&e.keyCode!==o.KEY_SPACE||(e.preventDefault(),r&&r(e))},onMouseDown:function(){i.current.setAttribute("data-terra-rollup-tag-show-focus-styles","false")},text:s,onBlur:function(){i.current.setAttribute("data-terra-rollup-tag-show-focus-styles","true")},refCallback:function(e){i.current=e},isCompact:!0,"aria-label":p,"aria-atomic":"true","data-terra-rollup-tag-show-focus-styles":!0,"data-terra-rollup-tag":!0})};y.propTypes=_;t.default=(0,l.injectIntl)(y)},49267:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r={getRollUpIndex:function(e){var t,r=e.current.querySelector("[data-terra-rollup-tag]"),n=e.current.querySelectorAll("[data-terra-tag]"),a=e.current.offsetWidth,l=0,o=0,u=0;r&&(u=function(e){return e.offsetWidth+parseFloat(window.getComputedStyle(e,null).getPropertyValue("margin-right"),10)}(r));for(var i=0;i<n.length&&!(l>=a);i+=1){var c=(t=n[i]).offsetWidth+parseFloat(window.getComputedStyle(t,null).getPropertyValue("margin-right"),10);c+l+u<a&&(o=i+1),l+=c}return o},setTagsTabIndex:function(e,t){for(var r=0;r<e.length;r+=1)e[r].setAttribute("tabindex",t)},setRollUpTagTabIndex:function(e,t){e.setAttribute("tabindex",t)}};t.default=r},74052:function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"TagList",{enumerable:!0,get:function(){return n.default}}),t.default=void 0;var n=l(r(772)),a=l(r(72060));function l(e){return e&&e.__esModule?e:{default:e}}t.default=a.default}}]);