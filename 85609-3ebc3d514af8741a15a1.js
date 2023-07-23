"use strict";(self.webpackChunkterra_ui=self.webpackChunkterra_ui||[]).push([[85609,12506],{58861:function(e,t,n){function r(e){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(e)}t.Z=void 0;var a=u(n(67294)),o=u(n(4169)),i=u(n(83864)),l=u(n(47166)),s=u(n(75480));function u(e){return e&&e.__esModule?e:{default:e}}function c(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,(o=a.key,i=void 0,i=function(e,t){if("object"!==r(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var a=n.call(e,t||"default");if("object"!==r(a))return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(o,"string"),"symbol"===r(i)?i:String(i)),a)}var o,i}function d(e,t){return d=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},d(e,t)}function p(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,a=f(e);if(t){var o=f(this).constructor;n=Reflect.construct(a,arguments,o)}else n=a.apply(this,arguments);return function(e,t){if(t&&("object"===r(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return m(e)}(this,n)}}function m(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function f(e){return f=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},f(e)}var g=l.default.bind(s.default),y=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&d(e,t)}(s,e);var t,n,r,l=p(s);function s(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,s),(t=l.call(this,e)).state={content:[a.default.createElement("p",null,"Patients are requesting greater affordability and efficiency in healthcare. With procedures performed in an ambulatory surgery center costing up to 60% less compared to a hospital outpatient department (1), the demand for these facilities is increasing. In fact, the U.S. ambulatory surgery center market is expected to see a 6.9 % compound annual growth rate, reaching $33 billion by 2028. (2) Cerner understands the urgency to grow in the ambulatory surgery center market while continuing to deliver excellent care. Healthcare IT products can help improve clinician efficiency and patient outcomes, as well as enhance communication and data exchange between ambulatory surgery center providers and patients.")],currentPage:1},t.changePages=t.changePages.bind(m(t)),t}return t=s,(n=[{key:"changePages",value:function(e){this.setState({currentPage:e})}},{key:"render",value:function(){return a.default.createElement("div",{className:g("paginator-wrapper")},a.default.createElement(o.default,{header:a.default.createElement("h1",null,"Page",this.state.currentPage),footer:a.default.createElement(i.default,{onPageChange:this.changePages,selectedPage:1,totalCount:450,itemCountPerPage:10})},this.state.content))}}])&&c(t.prototype,n),r&&c(t,r),Object.defineProperty(t,"prototype",{writable:!1}),s}(a.default.Component);t.Z=y},76921:function(e,t,n){function r(e){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(e)}t.Z=void 0;var a=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==r(e)&&"function"!=typeof e)return{default:e};var n=c(t);if(n&&n.has(e))return n.get(e);var a={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if("default"!==i&&Object.prototype.hasOwnProperty.call(e,i)){var l=o?Object.getOwnPropertyDescriptor(e,i):null;l&&(l.get||l.set)?Object.defineProperty(a,i,l):a[i]=e[i]}a.default=e,n&&n.set(e,a);return a}(n(67294)),o=u(n(4169)),i=u(n(83864)),l=u(n(47166)),s=u(n(75480));function u(e){return e&&e.__esModule?e:{default:e}}function c(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(c=function(e){return e?n:t})(e)}function d(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,a,o,i,l=[],s=!0,u=!1;try{if(o=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;s=!1}else for(;!(s=(r=o.call(n)).done)&&(l.push(r.value),l.length!==t);s=!0);}catch(e){u=!0,a=e}finally{try{if(!s&&null!=n.return&&(i=n.return(),Object(i)!==i))return}finally{if(u)throw a}}return l}}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return p(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return p(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function p(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var m=l.default.bind(s.default),f=function(){var e=d((0,a.useState)([a.default.createElement("p",null,"Cerner Ambulatory Surgery Center integrates our established surgical, anesthesia, inventory, revenue cycle management and patient portal products on a single EHR platform to help simplify the management of an ambulatory surgery center."),a.default.createElement("p",null,"With future growth in mind, Cerner Ambulatory Surgery Center is contemporary, scalable and flexible."),a.default.createElement("p",null,"Cerner Ambulatory Surgery Center aims to enable clinicians and staff to focus on what truly matters – a safe, personal and efficient patient experience.")]),1)[0],t=d((0,a.useState)(1),2),n=t[0],r=t[1];return a.default.createElement("div",{className:m("paginator-wrapper")},a.default.createElement(o.default,{header:a.default.createElement("h1",null,"Page",n),footer:a.default.createElement(i.default,{onPageChange:function(e){r(e)}})},e))};t.Z=f},80112:function(e,t,n){n.r(t),n.d(t,{default:function(){return _}});var r=n(67294),a=n(81254),o=n(31400),i=n(58861),l=["components"];function s(){return s=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},s.apply(this,arguments)}function u(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c={};function d(e){var t=e.components,n=u(e,l);return(0,a.mdx)("wrapper",s({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport Dialog from 'terra-dialog';\nimport ProgressivePaginator from 'terra-paginator/lib/ProgressivePaginator';\nimport classNames from 'classnames/bind';\nimport styles from './PaginatorExampleCommon.module.scss';\n\nconst cx = classNames.bind(styles);\nconst totalCount = 450;\n\nconst buildPage = () => {\n  const fullContent = [<p>Patients are requesting greater affordability and efficiency in healthcare. With procedures performed in an ambulatory surgery center costing up to 60% less compared to a hospital outpatient department (1), the demand for these facilities is increasing. In fact, the U.S. ambulatory surgery center market is expected to see a 6.9 % compound annual growth rate, reaching $33 billion by 2028. (2) Cerner understands the urgency to grow in the ambulatory surgery center market while continuing to deliver excellent care. Healthcare IT products can help improve clinician efficiency and patient outcomes, as well as enhance communication and data exchange between ambulatory surgery center providers and patients.</p>];\n\n  return (\n    fullContent\n  );\n};\n\nclass ProgressivePaginatorExample extends React.Component {\n  constructor(props) {\n    super(props);\n\n    this.state = {\n      content: buildPage(),\n      currentPage: 1,\n    };\n\n    this.changePages = this.changePages.bind(this);\n  }\n\n  changePages(index) {\n    this.setState({ currentPage: index });\n  }\n\n  render() {\n    return (\n      <div className={cx('paginator-wrapper')}>\n        <Dialog\n          header={(\n            <h1>\n              Page\n              {this.state.currentPage}\n            </h1>\n)}\n          footer={<ProgressivePaginator onPageChange={this.changePages} selectedPage={1} totalCount={totalCount} itemCountPerPage={10} />}\n        >\n          {this.state.content}\n        </Dialog>\n      </div>\n    );\n  }\n}\n\nexport default ProgressivePaginatorExample;\n\n")))}d.isMDXComponent=!0;var p=n(49271),m=n(55889),f=function(e){var t=e.title,n=e.description,a=e.isExpanded;return r.createElement(p.Z,{title:t||"Progressive Paginator Example",description:n,example:r.createElement(i.Z,null),exampleCssSrc:r.createElement(m.Z,null),exampleSrc:r.createElement(d,null),isExpanded:a})},g=n(76921),y=["components"];function b(){return b=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},b.apply(this,arguments)}function h(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var v={};function x(e){var t=e.components,n=h(e,y);return(0,a.mdx)("wrapper",b({},v,n,{components:t,mdxType:"MDXLayout"}),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React, { useState } from 'react';\nimport Dialog from 'terra-dialog';\nimport ProgressivePaginator from 'terra-paginator/lib/ProgressivePaginator';\nimport classNames from 'classnames/bind';\nimport styles from './PaginatorExampleCommon.module.scss';\n\nconst cx = classNames.bind(styles);\n\nconst buildPage = () => {\n  const fullContent = [<p>Cerner Ambulatory Surgery Center integrates our established surgical, anesthesia, inventory, revenue cycle management and patient portal products on a single EHR platform to help simplify the management of an ambulatory surgery center.</p>,\n    <p>With future growth in mind, Cerner Ambulatory Surgery Center is contemporary, scalable and flexible.</p>,\n    <p>Cerner Ambulatory Surgery Center aims to enable clinicians and staff to focus on what truly matters – a safe, personal and efficient patient experience.</p>];\n\n  return (\n    fullContent\n  );\n};\n\nconst InfiniteProgressivePaginatorExample = () => {\n  const [content] = useState(buildPage());\n  const [currentPage, setCurrentPage] = useState(1);\n\n  const changePages = (index) => {\n    setCurrentPage(index);\n  };\n\n  return (\n    <div className={cx('paginator-wrapper')}>\n      <Dialog\n        header={(\n          <h1>\n            Page\n            {currentPage}\n          </h1>\n          )}\n        footer={<ProgressivePaginator onPageChange={changePages} />}\n      >\n        {content}\n      </Dialog>\n    </div>\n  );\n};\n\nexport default InfiniteProgressivePaginatorExample;\n\n")))}x.isMDXComponent=!0;var P=function(e){var t=e.title,n=e.description,a=e.isExpanded;return r.createElement(p.Z,{title:t||"Progressive Paginator Without Total Count Example",description:n,example:r.createElement(g.Z,null),exampleCssSrc:r.createElement(m.Z,null),exampleSrc:r.createElement(x,null),isExpanded:a})},C=n(78530),O=["components"];function w(){return w=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},w.apply(this,arguments)}function E(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var j={},T="wrapper";function S(e){var t=e.components,n=E(e,O);return(0,a.mdx)(T,w({},j,n,{components:t,mdxType:"MDXLayout"}),(0,a.mdx)(C.ZP,{mdxType:"PropsTable"},(0,a.mdx)(C.X2,{key:"ROW1",mdxType:"Row"},(0,a.mdx)(C.O,{mdxType:"PropNameCell"},"onPageChange"),(0,a.mdx)(C.Di,{mdxType:"TypeCell"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"func\n"))),(0,a.mdx)(C.dS,{isRequired:!0,mdxType:"RequiredCell"}),(0,a.mdx)(C.mW,{mdxType:"DefaultValueCell"},(0,a.mdx)("p",null,"none")),(0,a.mdx)(C.Ex,{mdxType:"DescriptionCell"},(0,a.mdx)("p",null,"Function to be executed when a navigation element is selected."))),(0,a.mdx)(C.X2,{key:"ROW2",mdxType:"Row"},(0,a.mdx)(C.O,{mdxType:"PropNameCell"},"selectedPage"),(0,a.mdx)(C.Di,{mdxType:"TypeCell"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"number\n"))),(0,a.mdx)(C.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,a.mdx)(C.mW,{mdxType:"DefaultValueCell"},(0,a.mdx)("p",null,"none")),(0,a.mdx)(C.Ex,{mdxType:"DescriptionCell"},(0,a.mdx)("p",null,"The active/selected page."))),(0,a.mdx)(C.X2,{key:"ROW3",mdxType:"Row"},(0,a.mdx)(C.O,{mdxType:"PropNameCell"},"totalCount"),(0,a.mdx)(C.Di,{mdxType:"TypeCell"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"number\n"))),(0,a.mdx)(C.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,a.mdx)(C.mW,{mdxType:"DefaultValueCell"},(0,a.mdx)("p",null,"none")),(0,a.mdx)(C.Ex,{mdxType:"DescriptionCell"},(0,a.mdx)("p",null,"Total number of all items being paginated."))),(0,a.mdx)(C.X2,{key:"ROW4",mdxType:"Row"},(0,a.mdx)(C.O,{mdxType:"PropNameCell"},"itemCountPerPage"),(0,a.mdx)(C.Di,{mdxType:"TypeCell"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"number\n"))),(0,a.mdx)(C.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,a.mdx)(C.mW,{mdxType:"DefaultValueCell"},(0,a.mdx)("p",null,"none")),(0,a.mdx)(C.Ex,{mdxType:"DescriptionCell"},(0,a.mdx)("p",null,"Total number of items per page."))),(0,a.mdx)(C.X2,{key:"ROW5",mdxType:"Row"},(0,a.mdx)(C.O,{mdxType:"PropNameCell"},"pageLabel"),(0,a.mdx)(C.Di,{mdxType:"TypeCell"},(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-javascript"},"string\n"))),(0,a.mdx)(C.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,a.mdx)(C.mW,{mdxType:"DefaultValueCell"},(0,a.mdx)("p",null,"none")),(0,a.mdx)(C.Ex,{mdxType:"DescriptionCell"},(0,a.mdx)("p",null,"Allows user to set custom page label. ",(0,a.mdx)("em",{parentName:"p"},"(usage note: User must pass translated text)"),".")))))}S.isMDXComponent=!0;var N=["components"];function D(){return D=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},D.apply(this,arguments)}function k(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var R={},M="wrapper";function _(e){var t=e.components,n=k(e,N);return(0,a.mdx)(M,D({},R,n,{components:t,mdxType:"MDXLayout"}),(0,a.mdx)(o.C,{mdxType:"Badge"}),(0,a.mdx)("h1",{id:"terra-progressive-paginator"},"Terra Progressive Paginator"),(0,a.mdx)("p",null,"Paginator to be used for ordered data where the size of the data is known. Provides first, last, previous, next, and paged functionality."),(0,a.mdx)("h2",{id:"getting-started"},"Getting Started"),(0,a.mdx)("ul",null,(0,a.mdx)("li",{parentName:"ul"},"Install with ",(0,a.mdx)("a",{parentName:"li",href:"https://www.npmjs.com/"},"npmjs"),":",(0,a.mdx)("ul",{parentName:"li"},(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("inlineCode",{parentName:"li"},"npm install terra-paginator"))))),(0,a.mdx)("h2",{id:"usage"},"Usage"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-jsx"},"import ProgressivePaginator from 'terra-paginator/lib/ProgressivePaginator';\n")),(0,a.mdx)("h2",{id:"component-features"},"Component Features"),(0,a.mdx)("ul",null,(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("a",{parentName:"li",href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#cross-browser-support"},"Cross-Browser Support")),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("a",{parentName:"li",href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#responsive-support"},"Responsive Support")),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("a",{parentName:"li",href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#mobile-support"},"Mobile Support"))),(0,a.mdx)("h2",{id:"examples"},"Examples"),(0,a.mdx)(f,{mdxType:"ProgressivePaginatorExample"}),(0,a.mdx)(P,{mdxType:"ProgressivePaginatorWithoutTotalCountExample"}),(0,a.mdx)("h2",{id:"progressive-paginator-props"},"Progressive Paginator Props"),(0,a.mdx)(S,{mdxType:"ProgressivePaginatorPropsTable"}))}_.isMDXComponent=!0},83864:function(e,t,n){function r(e){return r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=b(n(67294)),o=b(n(45697)),i=b(n(47166)),l=b(n(50026)),s=n(25387),u=b(n(80906)),c=b(n(29270)),d=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==r(e)&&"function"!=typeof e)return{default:e};var n=y(t);if(n&&n.has(e))return n.get(e);var a={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if("default"!==i&&Object.prototype.hasOwnProperty.call(e,i)){var l=o?Object.getOwnPropertyDescriptor(e,i):null;l&&(l.get||l.set)?Object.defineProperty(a,i,l):a[i]=e[i]}a.default=e,n&&n.set(e,a);return a}(n(51051)),p=b(n(83699)),m=n(45364),f=b(n(62765)),g=b(n(94841));function y(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(y=function(e){return e?n:t})(e)}function b(e){return e&&e.__esModule?e:{default:e}}function h(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,(o=a.key,i=void 0,i=function(e,t){if("object"!==r(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var a=n.call(e,t||"default");if("object"!==r(a))return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(o,"string"),"symbol"===r(i)?i:String(i)),a)}var o,i}function v(e,t){return v=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},v(e,t)}function x(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,a=C(e);if(t){var o=C(this).constructor;n=Reflect.construct(a,arguments,o)}else n=a.apply(this,arguments);return function(e,t){if(t&&("object"===r(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return P(e)}(this,n)}}function P(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function C(e){return C=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},C(e)}var O=i.default.bind(p.default),w={onPageChange:o.default.func.isRequired,selectedPage:o.default.number,totalCount:o.default.number,itemCountPerPage:o.default.number,intl:o.default.shape({formatMessage:o.default.func}).isRequired,pageLabel:o.default.string},E=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&v(e,t)}(i,e);var t,n,r,o=x(i);function i(e){var t;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,i);var n=(t=o.call(this,e)).props.selectedPage;return t.state={selectedPage:n||1,showReducedPaginator:!1},t.handlePageChange=t.handlePageChange.bind(P(t)),t.defaultProgressivePaginator=t.defaultProgressivePaginator.bind(P(t)),t.reducedProgressivePaginator=t.reducedProgressivePaginator.bind(P(t)),t.setPaginator=t.setPaginator.bind(P(t)),t}return t=i,(n=[{key:"handlePageChange",value:function(e){var t=this;return function(n){n.nativeEvent.keyCode!==d.KEY_RETURN&&n.nativeEvent.keyCode!==d.KEY_SPACE||n.preventDefault(),t.props.onPageChange(e),t.setState({selectedPage:e})}}},{key:"setPaginator",value:function(e){var t="tiny"===e;this.state.showReducedPaginator!==t&&this.setState({showReducedPaginator:t})}},{key:"defaultProgressivePaginator",value:function(){var e=this.context,t=this.props,n=t.intl,r=t.totalCount,o=t.itemCountPerPage,i=t.pageLabel,l=r?(0,m.calculatePages)(r,o):0,s=this.state.selectedPage,u=1===s?1:s-1,c=s===l?l:s+1,d=(0,g.default)(i,s,l),p=d.messageId,y=d.messageAttributes;return a.default.createElement("div",{className:O("paginator","progressive",e.className),role:"navigation","aria-label":"pagination"},a.default.createElement("div",null,n.formatMessage({id:p},y)),a.default.createElement("div",null,r&&a.default.createElement(f.default,{ariaDisabled:1===s,ariaLabel:n.formatMessage({id:"Terra.paginator.first"}),className:O(["nav-link",1===s?"is-disabled":null]),disabled:1===s,onClick:this.handlePageChange(1),onKeyDown:this.handlePageChange(1)},n.formatMessage({id:"Terra.paginator.first"})),a.default.createElement(f.default,{ariaDisabled:1===s,ariaLabel:n.formatMessage({id:"Terra.paginator.previous"}),className:O(["nav-link","previous",1===s?"is-disabled":null]),disabled:1===s,onClick:this.handlePageChange(u),onKeyDown:this.handlePageChange(u)},a.default.createElement("span",{className:O("icon")}),n.formatMessage({id:"Terra.paginator.previous"})),a.default.createElement(f.default,{ariaDisabled:s===l,ariaLabel:n.formatMessage({id:"Terra.paginator.next"}),className:O(["nav-link","next",s===l?"is-disabled":null]),disabled:s===l,onClick:this.handlePageChange(c),onKeyDown:this.handlePageChange(c)},n.formatMessage({id:"Terra.paginator.next"}),a.default.createElement("span",{className:O("icon")})),r&&a.default.createElement(f.default,{ariaDisabled:s===l,ariaLabel:n.formatMessage({id:"Terra.paginator.last"}),className:O(["nav-link",s===l?"is-disabled":null]),disabled:s===l,onClick:this.handlePageChange(l),onKeyDown:this.handlePageChange(l)},n.formatMessage({id:"Terra.paginator.last"}))))}},{key:"reducedProgressivePaginator",value:function(){var e=this.context,t=this.props,n=t.intl,r=t.totalCount,o=t.itemCountPerPage,i=t.pageLabel,l=r?(0,m.calculatePages)(r,o):0,s=this.state.selectedPage,u=1===s?1:s-1,d=s===l?l:s+1,p=(0,g.default)(i,s,l),y=p.messageId,b=p.messageAttributes;return a.default.createElement("div",{className:O("paginator",e.className),role:"navigation","aria-label":"pagination"},a.default.createElement("div",null,r&&a.default.createElement(f.default,{ariaDisabled:1===s,ariaLabel:n.formatMessage({id:"Terra.paginator.first"}),className:O(["nav-link",1===s?"is-disabled":null]),disabled:1===s,onClick:this.handlePageChange(1),onKeyDown:this.handlePageChange(1)},n.formatMessage({id:"Terra.paginator.first"})),a.default.createElement(f.default,{ariaDisabled:1===s,ariaLabel:n.formatMessage({id:"Terra.paginator.previous"}),className:O(["nav-link","previous","icon-only",1===s?"is-disabled":null]),disabled:1===s,onClick:this.handlePageChange(u),onKeyDown:this.handlePageChange(u)},a.default.createElement(c.default,{text:n.formatMessage({id:"Terra.paginator.previous"})}),a.default.createElement("span",{className:O("icon")}))),a.default.createElement("div",null,n.formatMessage({id:y},b)),a.default.createElement("div",null,a.default.createElement(f.default,{ariaDisabled:s===l,ariaLabel:n.formatMessage({id:"Terra.paginator.next"}),className:O(["nav-link","next","icon-only",s===l?"is-disabled":null]),disabled:s===l,onClick:this.handlePageChange(d),onKeyDown:this.handlePageChange(d)},a.default.createElement(c.default,{text:n.formatMessage({id:"Terra.paginator.next"})}),a.default.createElement("span",{className:O("icon")})),r&&a.default.createElement(f.default,{ariaDisabled:s===l,ariaLabel:n.formatMessage({id:"Terra.paginator.last"}),className:O(["nav-link",s===l?"is-disabled":null]),disabled:s===l,onClick:this.handlePageChange(l),onKeyDown:this.handlePageChange(l)},n.formatMessage({id:"Terra.paginator.last"}))))}},{key:"render",value:function(){return a.default.createElement(u.default,{onChange:this.setPaginator},this.state.showReducedPaginator?this.reducedProgressivePaginator():this.defaultProgressivePaginator())}}])&&h(t.prototype,n),r&&h(t,r),Object.defineProperty(t,"prototype",{writable:!1}),i}(a.default.Component);E.propTypes=w,E.contextType=l.default;var j=(0,s.injectIntl)(E);t.default=j}}]);