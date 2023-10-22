"use strict";(self.webpackChunkterra_ui=self.webpackChunkterra_ui||[]).push([[17415],{44814:function(e,t,n){function a(e){return a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a(e)}t.Z=void 0;var r=c(n(67294)),o=c(n(4169)),l=c(n(55281)),i=c(n(67625)),u=c(n(47166)),s=c(n(51590));function c(e){return e&&e.__esModule?e:{default:e}}function f(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(o=r.key,l=void 0,l=function(e,t){if("object"!==a(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!==a(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(o,"string"),"symbol"===a(l)?l:String(l)),r)}var o,l}function d(e,t){return d=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},d(e,t)}function p(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=m(e);if(t){var o=m(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return function(e,t){if(t&&("object"===a(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return g(e)}(this,n)}}function g(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function m(e){return m=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},m(e)}var h=u.default.bind(s.default),b=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&d(e,t)}(s,e);var t,n,a,u=p(s);function s(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,s),(t=u.call(this,e)).state={content:[r.default.createElement("p",null,"This example is used to separate content into discrete pages with page preview."),r.default.createElement("p",null,"The selectedPage must be managed through the state of a parent component, and passed into this paginator through props.")],currentPage:1},t.changePages=t.changePages.bind(g(t)),t}return t=s,(n=[{key:"changePages",value:function(e){this.setState({currentPage:e})}},{key:"render",value:function(){var e=this;return r.default.createElement("div",{className:h("paginator-wrapper")},r.default.createElement(o.default,{header:r.default.createElement("h1",{id:"controlled_paginator_header_id"},"Controlled Paginator Example"),footer:r.default.createElement(i.default,{onPageChange:this.changePages,selectedPage:this.state.currentPage,totalCount:450,itemCountPerPage:10,ariaLabelledBy:"controlled_paginator_header_id"})},r.default.createElement("div",null,r.default.createElement(l.default,{text:"Set Page to 9",onClick:function(){e.setState({currentPage:9})}}),r.default.createElement(l.default,{text:"Set Page to 15",onClick:function(){e.setState({currentPage:15})}}),r.default.createElement(l.default,{text:"Set Page to 45",onClick:function(){e.setState({currentPage:45})}})),this.state.content))}}])&&f(t.prototype,n),a&&f(t,a),Object.defineProperty(t,"prototype",{writable:!1}),s}(r.default.Component);t.Z=b},4080:function(e,t,n){function a(e){return a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a(e)}t.Z=void 0;var r=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=a(e)&&"function"!=typeof e)return{default:e};var n=f(t);if(n&&n.has(e))return n.get(e);var r={__proto__:null},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var l in e)if("default"!==l&&Object.prototype.hasOwnProperty.call(e,l)){var i=o?Object.getOwnPropertyDescriptor(e,l):null;i&&(i.get||i.set)?Object.defineProperty(r,l,i):r[l]=e[l]}return r.default=e,n&&n.set(e,r),r}(n(67294)),o=c(n(4169)),l=c(n(55281)),i=c(n(67625)),u=c(n(47166)),s=c(n(51590));function c(e){return e&&e.__esModule?e:{default:e}}function f(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(f=function(e){return e?n:t})(e)}function d(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var a,r,o,l,i=[],u=!0,s=!1;try{if(o=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;u=!1}else for(;!(u=(a=o.call(n)).done)&&(i.push(a.value),i.length!==t);u=!0);}catch(e){s=!0,r=e}finally{try{if(!u&&null!=n.return&&(l=n.return(),Object(l)!==l))return}finally{if(s)throw r}}return i}}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return p(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return p(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function p(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}var g=u.default.bind(s.default);t.Z=function(){var e=[r.default.createElement("p",null,"This example is used to separate content into discrete pages without page preview."),r.default.createElement("p",null,"The selectedPage must be managed through the state of a parent component, and passed into this paginator through props.")],t=d((0,r.useState)(1),2),n=t[0],a=t[1];return r.default.createElement("div",{className:g("paginator-wrapper")},r.default.createElement(o.default,{header:r.default.createElement("h1",null,"Controlled Paginator No Pages Example"),footer:r.default.createElement(i.default,{onPageChange:function(e){a(e)},selectedPage:n,ariaLabel:"controlled paginator no pages pagination"})},r.default.createElement("div",null,r.default.createElement(l.default,{text:"Set Page to 9",onClick:function(){a(9)}}),r.default.createElement(l.default,{text:"Set Page to 15",onClick:function(){a(15)}}),r.default.createElement(l.default,{text:"Set Page to 45",onClick:function(){a(45)}})),e))}},8225:function(e,t,n){n.d(t,{Z:function(){return s}});n(67294);var a=n(81254),r=["components"];function o(){return o=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},o.apply(this,arguments)}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i={},u="wrapper";function s(e){var t=e.components,n=l(e,r);return(0,a.mdx)(u,o({},i,n,{components:t,mdxType:"MDXLayout"}),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-scss"},":local {\n  .paginator-wrapper {\n    height: 500px;\n  }\n}\n\n")))}s.isMDXComponent=!0},56305:function(e,t,n){n.d(t,{Z:function(){return p}});var a=n(67294),r=n(44814),o=n(81254),l=["components"];function i(){return i=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},i.apply(this,arguments)}function u(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s={};function c(e){var t=e.components,n=u(e,l);return(0,o.mdx)("wrapper",i({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport Dialog from 'terra-dialog';\nimport Button from 'terra-button';\nimport ControlledPaginator from 'terra-paginator/lib/ControlledPaginator';\nimport classNames from 'classnames/bind';\nimport styles from './ControlledPaginatorCommon.module.scss';\n\nconst cx = classNames.bind(styles);\n\nconst totalCount = 450;\n\nconst buildPage = () => {\n  const fullContent = [<p>This example is used to separate content into discrete pages with page preview.</p>,\n    <p>The selectedPage must be managed through the state of a parent component, and passed into this paginator through props.</p>];\n\n  return (\n    fullContent\n  );\n};\n\nclass PaginatorExample extends React.Component {\n  constructor(props) {\n    super(props);\n\n    this.state = {\n      content: buildPage(),\n      currentPage: 1,\n    };\n\n    this.changePages = this.changePages.bind(this);\n  }\n\n  changePages(index) {\n    this.setState({ currentPage: index });\n  }\n\n  render() {\n    return (\n      <div className={cx('paginator-wrapper')}>\n        <Dialog\n          header={(\n            <h1 id=\"controlled_paginator_header_id\">\n              Controlled Paginator Example\n            </h1>\n)}\n          footer={<ControlledPaginator onPageChange={this.changePages} selectedPage={this.state.currentPage} totalCount={totalCount} itemCountPerPage={10} ariaLabelledBy=\"controlled_paginator_header_id\" />}\n        >\n          <div>\n            <Button text=\"Set Page to 9\" onClick={() => { this.setState({ currentPage: 9 }); }} />\n            <Button text=\"Set Page to 15\" onClick={() => { this.setState({ currentPage: 15 }); }} />\n            <Button text=\"Set Page to 45\" onClick={() => { this.setState({ currentPage: 45 }); }} />\n          </div>\n          {this.state.content}\n        </Dialog>\n      </div>\n    );\n  }\n}\n\nexport default PaginatorExample;\n\n")))}c.isMDXComponent=!0;var f=n(49271),d=n(8225),p=function(e){var t=e.title,n=e.description,o=e.isExpanded;return a.createElement(f.Z,{title:t||"Controlled Paginator Example",description:n,example:a.createElement(r.Z,null),exampleCssSrc:a.createElement(d.Z,null),exampleSrc:a.createElement(c,null),isExpanded:o})}},81715:function(e,t,n){n.d(t,{Z:function(){return p}});var a=n(67294),r=n(4080),o=n(81254),l=["components"];function i(){return i=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},i.apply(this,arguments)}function u(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s={};function c(e){var t=e.components,n=u(e,l);return(0,o.mdx)("wrapper",i({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React, { useState } from 'react';\nimport Dialog from 'terra-dialog';\nimport Button from 'terra-button';\nimport ControlledPaginator from 'terra-paginator/lib/ControlledPaginator';\nimport classNames from 'classnames/bind';\nimport styles from './ControlledPaginatorCommon.module.scss';\n\nconst cx = classNames.bind(styles);\n\nconst buildPage = () => {\n  const fullContent = [<p>This example is used to separate content into discrete pages without page preview.</p>,\n    <p>The selectedPage must be managed through the state of a parent component, and passed into this paginator through props.</p>];\n\n  return (\n    fullContent\n  );\n};\n\nconst ControlledPaginatorExample = () => {\n  const content = buildPage();\n  const [currentPage, setCurrentPage] = useState(1);\n\n  const changePages = (index) => {\n    setCurrentPage(index);\n  };\n\n  return (\n    <div className={cx('paginator-wrapper')}>\n      <Dialog\n        header={(\n          <h1>\n            Controlled Paginator No Pages Example\n          </h1>\n        )}\n        footer={<ControlledPaginator onPageChange={changePages} selectedPage={currentPage} ariaLabel=\"controlled paginator no pages pagination\" />}\n      >\n        <div>\n          <Button text=\"Set Page to 9\" onClick={() => { setCurrentPage(9); }} />\n          <Button text=\"Set Page to 15\" onClick={() => { setCurrentPage(15); }} />\n          <Button text=\"Set Page to 45\" onClick={() => { setCurrentPage(45); }} />\n        </div>\n        {content}\n      </Dialog>\n    </div>\n  );\n};\n\nexport default ControlledPaginatorExample;\n\n")))}c.isMDXComponent=!0;var f=n(49271),d=n(8225),p=function(e){var t=e.title,n=e.description,o=e.isExpanded;return a.createElement(f.Z,{title:t||"Controlled Paginator No Pages Example",description:n,example:a.createElement(r.Z,null),exampleCssSrc:a.createElement(d.Z,null),exampleSrc:a.createElement(c,null),isExpanded:o})}},51590:function(e,t,n){n.r(t),t.default={"paginator-wrapper":"ControlledPaginatorCommon-module__paginator-wrapper___SO-Lr"}},67625:function(e,t,n){function a(e){return a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=h(n(67294)),o=h(n(45697)),l=h(n(47166)),i=h(n(50026)),u=n(25387),s=h(n(80906)),c=h(n(29270)),f=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==a(e)&&"function"!=typeof e)return{default:e};var n=m(t);if(n&&n.has(e))return n.get(e);var r={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var l in e)if("default"!==l&&Object.prototype.hasOwnProperty.call(e,l)){var i=o?Object.getOwnPropertyDescriptor(e,l):null;i&&(i.get||i.set)?Object.defineProperty(r,l,i):r[l]=e[l]}r.default=e,n&&n.set(e,r);return r}(n(51051)),d=h(n(83699)),p=n(45364),g=h(n(62765));function m(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(m=function(e){return e?n:t})(e)}function h(e){return e&&e.__esModule?e:{default:e}}function b(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(o=r.key,l=void 0,l=function(e,t){if("object"!==a(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!==a(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(o,"string"),"symbol"===a(l)?l:String(l)),r)}var o,l}function y(e,t){return y=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},y(e,t)}function P(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=C(e);if(t){var o=C(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return function(e,t){if(t&&("object"===a(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return v(e)}(this,n)}}function v(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function C(e){return C=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},C(e)}var E=l.default.bind(d.default),x={onPageChange:o.default.func.isRequired,selectedPage:o.default.number.isRequired,totalCount:o.default.number,itemCountPerPage:o.default.number,ariaLabelledBy:o.default.string,ariaLabel:o.default.string,intl:o.default.shape({formatMessage:o.default.func}).isRequired},O=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&y(e,t)}(l,e);var t,n,a,o=P(l);function l(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,l),(t=o.call(this,e)).handlePageChange=t.handlePageChange.bind(v(t)),t.buildPageButtons=t.buildPageButtons.bind(v(t)),t.reducedPaginator=t.reducedPaginator.bind(v(t)),t.setPaginator=t.setPaginator.bind(v(t)),t.state={showReducedPaginator:!1,selectedPageMessage:""},t}return t=l,(n=[{key:"handlePageChange",value:function(e){var t=this,n=this.props,a=n.intl,r=n.itemCountPerPage,o=n.totalCount;return function(n){return n.nativeEvent.keyCode!==f.KEY_RETURN&&n.nativeEvent.keyCode!==f.KEY_SPACE||n.preventDefault(),Number.isNaN(Number(e))?(t.props.onPageChange(n.currentTarget.attributes["aria-label"].value),!1):(l=o&&r?a.formatMessage({id:"Terra.paginator.pageSelectedWithCount"},{pageNumber:e,pageNumberTotal:(0,p.calculatePages)(o,r)}):a.formatMessage({id:"Terra.paginator.pageSelected"},{pageNumber:e}),t.props.onPageChange(e),t.setState({selectedPageMessage:l}),!1);var l}}},{key:"setPaginator",value:function(e){var t="tiny"===e;this.state.showReducedPaginator!==t&&this.setState({showReducedPaginator:t})}},{key:"buildPageButtons",value:function(e,t){var n=this.props,a=n.intl,o=n.itemCountPerPage,l=n.selectedPage,i=n.totalCount,u=(0,p.pageSet)(l,(0,p.calculatePages)(i,o)),s=[];return u.forEach((function(n){var o=E(["nav-link",n===l?"is-selected":null]);n>e||s.push(r.default.createElement("li",null,r.default.createElement(g.default,{ariaLabel:a.formatMessage({id:"Terra.paginator.pageIndex"},{pageNumber:n}),ariaCurrent:n===l,className:o,key:"pageButton_".concat(n),onClick:t(n),onKeyDown:t(n),tabIndex:n===l?"-1":"0"},n)))})),s}},{key:"defaultPaginator",value:function(){var e=this.context,t=this.props,n=t.selectedPage,a=t.intl,o=t.totalCount,l=t.itemCountPerPage,i=t.ariaLabelledBy,u=t.ariaLabel,s=(0,p.calculatePages)(o,l),f=1===n?1:n-1,d=n===s?s:n+1,m=u||"pagination",h=o>0,b=r.default.createElement("ul",{className:E("list")},h&&r.default.createElement("li",null,r.default.createElement(g.default,{ariaDisabled:1===n,ariaLabel:a.formatMessage({id:"Terra.paginator.first"}),className:E(["nav-link","left-controls",1===n&&"is-disabled"]),disabled:1===n,onClick:this.handlePageChange(1),onKeyDown:this.handlePageChange(1)},a.formatMessage({id:"Terra.paginator.first"}))),r.default.createElement("li",null,r.default.createElement(g.default,{ariaDisabled:1===n,ariaLabel:a.formatMessage({id:"Terra.paginator.previous"}),className:E(["nav-link","left-controls","previous",1===n&&"is-disabled"]),disabled:1===n,onClick:this.handlePageChange(f),onKeyDown:this.handlePageChange(f)},r.default.createElement("span",{className:E("icon")}),a.formatMessage({id:"Terra.paginator.previous"}))),o&&this.buildPageButtons(s,this.handlePageChange),r.default.createElement("li",null,r.default.createElement(g.default,{ariaDisabled:n===s,ariaLabel:a.formatMessage({id:"Terra.paginator.next"}),className:E(["nav-link","right-controls","next",n===s&&"is-disabled"]),disabled:n===s,onClick:this.handlePageChange(d),onKeyDown:this.handlePageChange(d)},a.formatMessage({id:"Terra.paginator.next"}),r.default.createElement("span",{className:E("icon")}))),h&&r.default.createElement("li",null,r.default.createElement(g.default,{ariaDisabled:n===s,ariaLabel:a.formatMessage({id:"Terra.paginator.last"}),className:E(["nav-link","right-controls",n===s&&"is-disabled"]),disabled:n===s,onClick:this.handlePageChange(s),onKeyDown:this.handlePageChange(s)},a.formatMessage({id:"Terra.paginator.last"})))),y=r.default.createElement(c.default,{"aria-live":"polite","aria-relevant":"all",text:this.state.selectedPageMessage});return r.default.createElement("nav",{className:E("paginator",!o&&"pageless",e.className),"aria-labelledby":i,"aria-label":i?void 0:m},y,b)}},{key:"reducedPaginator",value:function(){var e=this.context,t=this.props,n=t.selectedPage,a=t.intl,o=t.totalCount,l=t.itemCountPerPage,i=t.ariaLabelledBy,u=t.ariaLabel,s=(0,p.calculatePages)(o,l),f=1===n?1:n-1,d=n===s?s:n+1,m=u||"pagination",h=o>0,b=r.default.createElement(r.default.Fragment,null,r.default.createElement("div",null,o&&a.formatMessage({id:"Terra.paginator.pageIndex"},{pageNumber:n})),r.default.createElement("ul",{className:E("list")},h&&r.default.createElement("li",null,r.default.createElement(g.default,{ariaDisabled:1===n,ariaLabel:a.formatMessage({id:"Terra.paginator.first"}),className:E(["nav-link","left-controls",1===n&&"is-disabled"]),disabled:1===n,onClick:this.handlePageChange(1),onKeyDown:this.handlePageChange(1)},a.formatMessage({id:"Terra.paginator.first"}))),r.default.createElement("li",null,r.default.createElement(g.default,{ariaDisabled:1===n,ariaLabel:a.formatMessage({id:"Terra.paginator.previous"}),className:E(["nav-link","left-controls","previous",1===n&&"is-disabled"]),disabled:1===n,onClick:this.handlePageChange(f),onKeyDown:this.handlePageChange(f)},r.default.createElement("span",{className:E("icon")}),a.formatMessage({id:"Terra.paginator.previous"}))),r.default.createElement("li",null,r.default.createElement(g.default,{ariaDisabled:n===s,ariaLabel:a.formatMessage({id:"Terra.paginator.next"}),className:E(["nav-link","right-controls","next","icon-only",n===s&&"is-disabled"]),disabled:n===s,onClick:this.handlePageChange(d),onKeyDown:this.handlePageChange(d)},r.default.createElement(c.default,{text:a.formatMessage({id:"Terra.paginator.next"})}),r.default.createElement("span",{className:E("icon")}))),h&&r.default.createElement("li",null,r.default.createElement(g.default,{ariaDisabled:n===s,ariaLabel:a.formatMessage({id:"Terra.paginator.last"}),className:E(["nav-link","right-controls",n===s&&"is-disabled"]),disabled:n===s,onClick:this.handlePageChange(s),onKeyDown:this.handlePageChange(s)},a.formatMessage({id:"Terra.paginator.last"}))))),y=r.default.createElement(c.default,{"aria-live":"polite","aria-relevant":"all",text:this.state.selectedPageMessage});return r.default.createElement("nav",{className:E("paginator",e.className),"aria-labelledby":i,"aria-label":i?void 0:m},y,b)}},{key:"render",value:function(){return r.default.createElement(s.default,{onChange:this.setPaginator},this.state.showReducedPaginator?this.reducedPaginator():this.defaultPaginator())}}])&&b(t.prototype,n),a&&b(t,a),Object.defineProperty(t,"prototype",{writable:!1}),l}(r.default.Component);O.propTypes=x,O.contextType=i.default;t.default=(0,u.injectIntl)(O)}}]);