"use strict";(self.webpackChunkterra_ui=self.webpackChunkterra_ui||[]).push([[35716,45627,85565,79482,3353,5161,45865,80858,85355,3193,4845,46647,85161,38681,15318,66097,40411,18101,38443,11264,34319,20116,33609,78996,39915,33442],{22863:function(e,t,n){var r=n(64836);t.Z=void 0;var l=r(n(67294)),a=r(n(45697)),o=r(n(47166)),c=r(n(17422)),d=o.default.bind(c.default),i={name:a.default.string.isRequired,src:a.default.string,url:a.default.string,version:a.default.string.isRequired},u=function(e){var t=e.src,n=e.name,r=e.url,a=e.version,o=l.default.createElement("a",{className:d("badge"),href:r||"https://www.npmjs.org/package/".concat(n,"/v/").concat(a)},l.default.createElement("span",{className:d("badge-name")},r?"package":"npm"),l.default.createElement("span",{className:d("badge-version")},"v".concat(a))),c=t?l.default.createElement("a",{className:d("badge"),href:t},l.default.createElement("span",{className:d("badge-name")},"github"),l.default.createElement("span",{className:d("badge-version")},"source")):void 0;return l.default.createElement("div",{className:d("badge-container")},o,c)};u.propTypes=i;var s=u;t.Z=s},40996:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=i(n(67294)),l=i(n(45697)),a=i(n(47166)),o=i(n(50026)),c=i(n(66983)),d=["children"];function i(e){return e&&e.__esModule?e:{default:e}}function u(){return u=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},u.apply(this,arguments)}function s(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var m=a.default.bind(c.default),p=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","true")},f=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","false")},_={children:l.default.string},y=function(e){var t=e.children,n=s(e,d),l=r.default.useContext(o.default),c=(0,a.default)(m(["button",l.className]),n.className);return r.default.createElement("button",u({},n,{type:"button",className:c,onBlur:p,onMouseDown:f,"data-focus-styles-enabled":!0}),t)};y.propTypes=_;t.default=y},59278:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=d(n(67294)),l=d(n(45697)),a=d(n(47166)),o=d(n(50026)),c=d(n(30866));function d(e){return e&&e.__esModule?e:{default:e}}var i=a.default.bind(c.default),u={ariaLevel:l.default.oneOf(["2","3","4","5","6"]),children:l.default.node,variant:l.default.oneOf(["ux-recommendation","caution","deprecation","maintenance","important","not-supported"])},s=function(e){var t=e.ariaLevel,n=e.variant,l=e.children,a=r.default.useContext(o.default);return r.default.createElement("div",{className:i("notice",n,a.className)},r.default.createElement("div",{className:i("accessory"),"aria-hidden":"true",focusable:"false"}),r.default.createElement("div",{role:"heading",className:i("title"),"aria-level":t},r.default.createElement("span",null,function(e){return"ux-recommendation"===e?"UX Recommendation":"caution"===e?"Caution":"deprecation"===e?"Deprecation Notice":"maintenance"===e?"In Maintenance":"important"===e?"Important":"not-supported"===e?"Hazards for Incorrect Usage":"error"}(n))),r.default.createElement("div",{className:i("children")},function(e){return"not-supported"===e?r.default.createElement(r.default.Fragment,null,r.default.createElement("p",{className:i("paragraph")},"This component was designed and tested according to the documented implementation."),r.default.createElement("p",{className:i("paragraph")},"Using the component incorrectly:",r.default.createElement("ul",{className:i("list")},r.default.createElement("li",null,"will likely result in improper composition and create accessibility issues"),r.default.createElement("li",null,"may cause erratic or broken behaviors and styles"),r.default.createElement("li",null,r.default.createElement("strong",null,"will not be supported "),"or enhanced to allow for incorrect use")))):null}(n),r.default.Children.map(l,(function(e){return"string"==typeof e?r.default.createElement("p",null,e):e}))))};s.propTypes=u,s.defaultProps={ariaLevel:"2",variant:"important"};t.default=s},47306:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=u(n(67294)),l=u(n(45697)),a=u(n(94184)),o=u(n(47166)),c=u(n(50026)),d=u(n(42620)),i=["title"];function u(e){return e&&e.__esModule?e:{default:e}}function s(){return s=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},s.apply(this,arguments)}function m(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var p=o.default.bind(d.default),f={title:l.default.string},_=function(e){var t=e.title,n=m(e,i),l=r.default.useContext(c.default),o=(0,a.default)(p(["placeholder",l.className]),n.className),d=p(["inner"]);return r.default.createElement("div",s({},n,{className:o}),r.default.createElement("div",{className:d},r.default.createElement("p",{className:p("title")},t)))};_.propTypes=f,_.defaultProps={title:""};t.default=_},34261:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"Button",{enumerable:!0,get:function(){return a.default}}),Object.defineProperty(t,"Notice",{enumerable:!0,get:function(){return r.default}}),Object.defineProperty(t,"Placeholder",{enumerable:!0,get:function(){return l.default}});var r=o(n(59278)),l=o(n(47306)),a=o(n(40996));function o(e){return e&&e.__esModule?e:{default:e}}},69326:function(e,t,n){var r=n(64836);t.Z=void 0;var l=r(n(27424)),a=r(n(67294)),o=r(n(47166)),c=n(34614),d=r(n(47789)),i=r(n(21091)),u=o.default.bind(i.default);t.Z=function(){var e=a.default.useState("info"),t=(0,l.default)(e,2),n=t[0],r=t[1];return a.default.createElement("div",{className:u("content-wrapper")},a.default.createElement(d.default,{title:"Documents",key:"documents"},a.default.createElement(d.default.Item,{label:"info.txt",icon:a.default.createElement(c.IconDocuments,null),key:"info",isSelected:"info"===n,onClick:function(){r("info")}}),a.default.createElement(d.default.Item,{label:"projects_2023.txt",icon:a.default.createElement(c.IconDocuments,null),key:"projects_2023",isSelected:"projects_2023"===n,onClick:function(){r("projects_2023")}}),a.default.createElement(d.default.Item,{label:"Projects",key:"projects",isSelected:"projects"===n,onClick:function(){r("projects")},subfolderItems:[a.default.createElement(d.default.Item,{label:"project_data1.txt",icon:a.default.createElement(c.IconDocuments,null),key:"project_data1",isSelected:"project_data1"===n,onClick:function(){r("project_data1")}}),a.default.createElement(d.default.Item,{label:"project_data2.txt",icon:a.default.createElement(c.IconDocuments,null),key:"project_data2",isSelected:"project_data2"===n,onClick:function(){r("project_data2")}}),a.default.createElement(d.default.Item,{label:"Tests",key:"tests",isSelected:"tests"===n,onClick:function(){r("tests")},icon:a.default.createElement(c.IconDocuments,null),subfolderItems:[a.default.createElement(d.default.Item,{label:"very_very_very_very_very_very_very_long_name_test.txt",icon:a.default.createElement(c.IconDocuments,null),key:"long-name-test",isSelected:"long-name-test"===n,onClick:function(){r("long-name-test")}}),a.default.createElement(d.default.Item,{label:"test.txt",icon:a.default.createElement(c.IconDocuments,null),key:"test",isSelected:"test"===n,onClick:function(){r("test")}}),a.default.createElement(d.default.Item,{label:"even_longer_long_long_long_long_long_long_long_long_long_long_long_long_name_test.txt",icon:a.default.createElement(c.IconDocuments,null),key:"longer-name-test",isSelected:"longer-name-test"===n,onClick:function(){r("longer-name-test")}})]})]})))}},95357:function(e,t,n){n.r(t),n.d(t,{default:function(){return v}});n(67294);var r=n(81254),l=n(34261),a=n(28255),o=n(78530),c=["components"];function d(){return d=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},d.apply(this,arguments)}function i(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var u={},s="wrapper";function m(e){var t=e.components,n=i(e,c);return(0,r.mdx)(s,d({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.mdx)(o.ZP,{mdxType:"PropsTable"},(0,r.mdx)(o.X2,{key:"ROW1",mdxType:"Row"},(0,r.mdx)(o.O,{mdxType:"PropNameCell"},"children"),(0,r.mdx)(o.Di,{mdxType:"TypeCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"node\n"))),(0,r.mdx)(o.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,r.mdx)(o.mW,{mdxType:"DefaultValueCell"},(0,r.mdx)("p",null,"none")),(0,r.mdx)(o.Ex,{mdxType:"DescriptionCell"},(0,r.mdx)("p",null,"List of FolderTree.Items to be displayed as content within the FolderTree."))),(0,r.mdx)(o.X2,{key:"ROW2",mdxType:"Row"},(0,r.mdx)(o.O,{mdxType:"PropNameCell"},"title"),(0,r.mdx)(o.Di,{mdxType:"TypeCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"string\n"))),(0,r.mdx)(o.dS,{isRequired:!0,mdxType:"RequiredCell"}),(0,r.mdx)(o.mW,{mdxType:"DefaultValueCell"},(0,r.mdx)("p",null,"none")),(0,r.mdx)(o.Ex,{mdxType:"DescriptionCell"},(0,r.mdx)("p",null,"The title of the folder tree."))),(0,r.mdx)(o.X2,{key:"ROW3",mdxType:"Row"},(0,r.mdx)(o.O,{mdxType:"PropNameCell"},"headerLevel"),(0,r.mdx)(o.Di,{mdxType:"TypeCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"number\n"))),(0,r.mdx)(o.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,r.mdx)(o.mW,{mdxType:"DefaultValueCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"3\n"))),(0,r.mdx)(o.Ex,{mdxType:"DescriptionCell"},(0,r.mdx)("p",null,"The heading level for the title of the folder tree.")))))}m.isMDXComponent=!0;n(91838);var p=["components"];function f(){return f=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},f.apply(this,arguments)}function _(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var y,g=(y="BasicFolderTree",function(e){return console.warn("Component "+y+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.mdx)("div",e)}),b={},x="wrapper";function v(e){var t=e.components,n=_(e,p);return(0,r.mdx)(x,f({},b,n,{components:t,mdxType:"MDXLayout"}),(0,r.mdx)(a.C,{mdxType:"Badge"}),(0,r.mdx)("h1",{id:"terra-foldertree"},"Terra FolderTree"),(0,r.mdx)(l.Notice,{variant:"caution",ariaLevel:"2",mdxType:"Notice"},"Terra Folder Tree is currently under alpha release. There may be breaking changes between releases until it is stable with the 1.0 release."),(0,r.mdx)("h2",{id:"getting-started"},"Getting Started"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},"Install with ",(0,r.mdx)("a",{parentName:"li",href:"https://www.npmjs.com/"},"npmjs"),":",(0,r.mdx)("ul",{parentName:"li"},(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("inlineCode",{parentName:"li"},"npm install terra-folder-tree"))))),(0,r.mdx)("h2",{id:"peer-dependencies"},"Peer Dependencies"),(0,r.mdx)("p",null,"This component requires the following peer dependencies be installed in your app for the component to properly function."),(0,r.mdx)("table",null,(0,r.mdx)("thead",{parentName:"table"},(0,r.mdx)("tr",{parentName:"thead"},(0,r.mdx)("th",{parentName:"tr",align:null},"Peer Dependency"),(0,r.mdx)("th",{parentName:"tr",align:null},"Version"))),(0,r.mdx)("tbody",{parentName:"table"},(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"react"),(0,r.mdx)("td",{parentName:"tr",align:null},"^16.8.5")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"react-dom"),(0,r.mdx)("td",{parentName:"tr",align:null},"^16.8.5")),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},"react-intl"),(0,r.mdx)("td",{parentName:"tr",align:null},"^2.8.0")))),(0,r.mdx)("h2",{id:"component-features"},"Component Features"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("a",{parentName:"li",href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#cross-browser-support"},"Cross-Browser Support")),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("a",{parentName:"li",href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#mobile-support"},"Mobile Support")),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("a",{parentName:"li",href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#internationalization-i18n"},"Internationalization Support")),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("a",{parentName:"li",href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#ltr--rtl"},"LTR/RTL Support"))),(0,r.mdx)("h2",{id:"examples"},"Examples"),(0,r.mdx)(g,{mdxType:"BasicFolderTree"}),(0,r.mdx)("h2",{id:"foldertree-props-table"},"FolderTree props table"),(0,r.mdx)(m,{mdxType:"FolderTreePropsTable"}))}v.isMDXComponent=!0},91838:function(e,t,n){n.d(t,{Z:function(){return p}});var r=n(67294),l=n(69326),a=n(81254),o=["components"];function c(){return c=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},c.apply(this,arguments)}function d(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var i={};function u(e){var t=e.components,n=d(e,o);return(0,a.mdx)("wrapper",c({},i,n,{components:t,mdxType:"MDXLayout"}),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport classNames from 'classnames/bind';\n\nimport { IconDocuments } from 'terra-icon';\nimport FolderTree from 'terra-folder-tree';\n\nimport styles from './BasicFolderTree.module.scss';\n\nconst cx = classNames.bind(styles);\n\nconst BasicFolderTree = () => {\n  const [selectedKey, setSelectedKey] = React.useState('info');\n\n  return (\n    <div className={cx('content-wrapper')}>\n      <FolderTree\n        title=\"Documents\"\n        key=\"documents\"\n      >\n        <FolderTree.Item\n          label=\"info.txt\"\n          icon={<IconDocuments />}\n          key=\"info\"\n          isSelected={selectedKey === 'info'}\n          onClick={() => { setSelectedKey('info'); }}\n        />\n        <FolderTree.Item\n          label=\"projects_2023.txt\"\n          icon={<IconDocuments />}\n          key=\"projects_2023\"\n          isSelected={selectedKey === 'projects_2023'}\n          onClick={() => { setSelectedKey('projects_2023'); }}\n        />\n        <FolderTree.Item\n          label=\"Projects\"\n          key=\"projects\"\n          isSelected={selectedKey === 'projects'}\n          onClick={() => { setSelectedKey('projects'); }}\n          subfolderItems={[\n            (<FolderTree.Item\n              label=\"project_data1.txt\"\n              icon={<IconDocuments />}\n              key=\"project_data1\"\n              isSelected={selectedKey === 'project_data1'}\n              onClick={() => { setSelectedKey('project_data1'); }}\n            />),\n            (<FolderTree.Item\n              label=\"project_data2.txt\"\n              icon={<IconDocuments />}\n              key=\"project_data2\"\n              isSelected={selectedKey === 'project_data2'}\n              onClick={() => { setSelectedKey('project_data2'); }}\n            />),\n            (<FolderTree.Item\n              label=\"Tests\"\n              key=\"tests\"\n              isSelected={selectedKey === 'tests'}\n              onClick={() => { setSelectedKey('tests'); }}\n              icon={<IconDocuments />}\n              subfolderItems={[\n                (<FolderTree.Item\n                  label=\"very_very_very_very_very_very_very_long_name_test.txt\"\n                  icon={<IconDocuments />}\n                  key=\"long-name-test\"\n                  isSelected={selectedKey === 'long-name-test'}\n                  onClick={() => { setSelectedKey('long-name-test'); }}\n                />),\n                (<FolderTree.Item\n                  label=\"test.txt\"\n                  icon={<IconDocuments />}\n                  key=\"test\"\n                  isSelected={selectedKey === 'test'}\n                  onClick={() => { setSelectedKey('test'); }}\n                />),\n                (<FolderTree.Item\n                  label=\"even_longer_long_long_long_long_long_long_long_long_long_long_long_long_name_test.txt\"\n                  icon={<IconDocuments />}\n                  key=\"longer-name-test\"\n                  isSelected={selectedKey === 'longer-name-test'}\n                  onClick={() => { setSelectedKey('longer-name-test'); }}\n                />),\n              ]}\n            />),\n          ]}\n        />\n      </FolderTree>\n    </div>\n  );\n};\n\nexport default BasicFolderTree;\n\n")))}u.isMDXComponent=!0;var s=n(49271),m=n(85705),p=function(e){var t=e.title,n=e.description,a=e.isExpanded;return r.createElement(s.Z,{title:t||"Basic Folder Tree",description:n,example:r.createElement(l.Z,null),exampleCssSrc:r.createElement(m.Z,null),exampleSrc:r.createElement(u,null),isExpanded:a})}},28255:function(e,t,n){n.d(t,{C:function(){return a}});var r=n(67294),l=n(22863),a=function(e){var t=e.url;return r.createElement(l.Z,{src:"https://github.com/cerner/terra-framework/tree/main/packages/terra-folder-tree",name:"terra-folder-tree",version:"1.0.0-alpha.2",url:t})}},17422:function(e,t,n){n.r(t),t.default={badge:"Badges-module__badge___vex-+","badge-container":"Badges-module__badge-container___B13Mv","badge-name":"Badges-module__badge-name___jkN0m","badge-version":"Badges-module__badge-version___agZ+P"}},66983:function(e,t,n){n.r(t),t.default={"clinical-lowlight-theme":"Button-module__clinical-lowlight-theme___TyZWB","orion-fusion-theme":"Button-module__orion-fusion-theme___q-FcQ",button:"Button-module__button___QuCn2","is-active":"Button-module__is-active___Z8AuK"}},30866:function(e,t,n){n.r(t),t.default={"clinical-lowlight-theme":"Notice-module__clinical-lowlight-theme___aa5xV","orion-fusion-theme":"Notice-module__orion-fusion-theme___QAE-T",notice:"Notice-module__notice___GWkPA",children:"Notice-module__children___lDYsm",accessory:"Notice-module__accessory___wkLOG",title:"Notice-module__title___6H5tc","ux-recommendation":"Notice-module__ux-recommendation___N8BuK",caution:"Notice-module__caution___hPrVl",deprecation:"Notice-module__deprecation___g1drA",maintenance:"Notice-module__maintenance___kWLIZ",important:"Notice-module__important___p5DiF","not-supported":"Notice-module__not-supported___34bHd",paragraph:"Notice-module__paragraph___5h-w1",list:"Notice-module__list___M2Kxj"}},42620:function(e,t,n){n.r(t),t.default={"clinical-lowlight-theme":"Placeholder-module__clinical-lowlight-theme___Obm9K","orion-fusion-theme":"Placeholder-module__orion-fusion-theme___svHY+",placeholder:"Placeholder-module__placeholder___ZZDXd",inner:"Placeholder-module__inner___fJq9o",title:"Placeholder-module__title___teBSo"}}}]);