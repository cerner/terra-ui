"use strict";(self.webpackChunkterra_ui=self.webpackChunkterra_ui||[]).push([[13456],{40996:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=u(n(67294)),r=u(n(45697)),o=u(n(47166)),l=u(n(50026)),i=u(n(66983)),d=["children"];function u(e){return e&&e.__esModule?e:{default:e}}function c(){return c=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},c.apply(this,arguments)}function m(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.default.bind(i.default),p=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","true")},f=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","false")},h={children:r.default.string},_=function(e){var t=e.children,n=m(e,d),r=a.default.useContext(l.default),i=(0,o.default)(s(["button",r.className]),n.className);return a.default.createElement("button",c({},n,{type:"button",className:i,onBlur:p,onMouseDown:f,"data-focus-styles-enabled":!0}),t)};_.propTypes=h;var x=_;t.default=x},59278:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=d(n(67294)),r=d(n(45697)),o=d(n(47166)),l=d(n(50026)),i=d(n(30866));function d(e){return e&&e.__esModule?e:{default:e}}var u=o.default.bind(i.default),c={ariaLevel:r.default.oneOf(["2","3","4","5","6"]),children:r.default.node,variant:r.default.oneOf(["ux-recommendation","caution","deprecation","maintenance","important","not-supported"])},m=function(e){var t=e.ariaLevel,n=e.variant,r=e.children,o=a.default.useContext(l.default);return a.default.createElement("div",{className:u("notice",n,o.className)},a.default.createElement("div",{className:u("accessory"),"aria-hidden":"true",focusable:"false"}),a.default.createElement("div",{role:"heading",className:u("title"),"aria-level":t},a.default.createElement("span",null,function(e){return"ux-recommendation"===e?"UX Recommendation":"caution"===e?"Caution":"deprecation"===e?"Deprecation Notice":"maintenance"===e?"In Maintenance":"important"===e?"Important":"not-supported"===e?"Hazards for Incorrect Usage":"error"}(n))),a.default.createElement("div",{className:u("children")},function(e){return"not-supported"===e?a.default.createElement(a.default.Fragment,null,a.default.createElement("p",{className:u("paragraph")},"This component was designed and tested according to the documented implementation."),a.default.createElement("p",{className:u("paragraph")},"Using the component incorrectly:",a.default.createElement("ul",{className:u("list")},a.default.createElement("li",null,"will likely result in improper composition and create accessibility issues"),a.default.createElement("li",null,"may cause erratic or broken behaviors and styles"),a.default.createElement("li",null,a.default.createElement("strong",null,"will not be supported "),"or enhanced to allow for incorrect use")))):null}(n),a.default.Children.map(r,(function(e){return"string"==typeof e?a.default.createElement("p",null,e):e}))))};m.propTypes=c,m.defaultProps={ariaLevel:"2",variant:"important"};var s=m;t.default=s},47306:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=c(n(67294)),r=c(n(45697)),o=c(n(94184)),l=c(n(47166)),i=c(n(50026)),d=c(n(42620)),u=["title"];function c(e){return e&&e.__esModule?e:{default:e}}function m(){return m=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},m.apply(this,arguments)}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=l.default.bind(d.default),f={title:r.default.string},h=function(e){var t=e.title,n=s(e,u),r=a.default.useContext(i.default),l=(0,o.default)(p(["placeholder",r.className]),n.className),d=p(["inner"]);return a.default.createElement("div",m({},n,{className:l}),a.default.createElement("div",{className:d},a.default.createElement("p",{className:p("title")},t)))};h.propTypes=f,h.defaultProps={title:""};var _=h;t.default=_},34261:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"Button",{enumerable:!0,get:function(){return o.default}}),Object.defineProperty(t,"Notice",{enumerable:!0,get:function(){return a.default}}),Object.defineProperty(t,"Placeholder",{enumerable:!0,get:function(){return r.default}});var a=l(n(59278)),r=l(n(47306)),o=l(n(40996));function l(e){return e&&e.__esModule?e:{default:e}}},13456:function(e,t,n){n.r(t),n.d(t,{default:function(){return c}});n(67294);var a=n(81254),r=n(34261),o=["components"];function l(){return l=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},l.apply(this,arguments)}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d={},u="wrapper";function c(e){var t=e.components,n=i(e,o);return(0,a.mdx)(u,l({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.mdx)("h1",{id:"writing-documentation"},"Writing Documentation"),(0,a.mdx)("p",null,"Writing component documentation with ",(0,a.mdx)("inlineCode",{parentName:"p"},"terra-dev-site")," is easy. We support github style markdown and mdx. Simply add a ",(0,a.mdx)("inlineCode",{parentName:"p"},".doc.mdx")," file to ",(0,a.mdx)("inlineCode",{parentName:"p"},"terra-dev-site")," and it will be converted into react for you."),(0,a.mdx)("h2",{id:"loaders"},"Loaders"),(0,a.mdx)("p",null,"Terra Dev Site offer several webpack loaders to help write easier documentation. The loaders are all accessed through the use of webpacks ",(0,a.mdx)("a",{parentName:"p",href:"https://webpack.js.org/configuration/module/#ruleresourcequery"},"resource query"),"."),(0,a.mdx)("p",null,"For example to use the example loader you would require your example with the ",(0,a.mdx)("inlineCode",{parentName:"p"},"?dev-site-example")," resource query."),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-jsx"},"import Example from './example?dev-site-example';\n")),(0,a.mdx)("ul",null,(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("a",{parentName:"li",href:"/terra-ui/dev_tools/cerner-terra-application-docs/terra-dev-site/webpack-loaders/codeblock-loader"},"Codeblock Loader"),": Import a component into a syntax highlighted codeblock."),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("a",{parentName:"li",href:"/terra-ui/dev_tools/cerner-terra-application-docs/terra-dev-site/webpack-loaders/example-loader"},"Example Loader"),": Render and example and display the code in a hidden section below it."),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("a",{parentName:"li",href:"/terra-ui/dev_tools/cerner-terra-application-docs/terra-dev-site/webpack-loaders/package-loader"},"Package Loader"),": Convert package.json information into badges."),(0,a.mdx)("li",{parentName:"ul"},(0,a.mdx)("a",{parentName:"li",href:"/terra-ui/dev_tools/cerner-terra-application-docs/terra-dev-site/webpack-loaders/props-table-loader"},"Props Table Loader"),": Create a props table for react components.")),(0,a.mdx)("h2",{id:"terra-documentation-components"},"Terra Documentation Components"),(0,a.mdx)("p",null,"Terra offers several light weight react components to help enrich your documentation from the terra-docs package."),(0,a.mdx)("p",null,(0,a.mdx)("a",{parentName:"p",href:"/terra-ui/dev_tools/cerner/documentation-components/button"},"terra-docs documentation"),"."),(0,a.mdx)("h2",{id:"mdx"},"MDX"),(0,a.mdx)("p",null,"Terra dev site uses MDX as a markdown loader. MDX allows you to mix JSX syntax into your markdown documents. This is very helpful for pulling in examples and richer content for documentation."),(0,a.mdx)("p",null,"To use mdx syntax you must use a .mdx file extension."),(0,a.mdx)("p",null,"For example the following block will render into:"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-md"},'import { Notice } from \'@cerner/terra-docs\';\n\n# Hello, *terra*!\n\nBelow is an example of JSX embedded in Markdown.\n\n<Notice variant="important" ariaLevel="3">\n\nIf you leave spaces between your component and it\'s content, the content will be parsed by **mdx**.\n\n</Notice>\n')),(0,a.mdx)("p",null,"With the output below:"),(0,a.mdx)("hr",null),(0,a.mdx)("h1",{id:"hello-terra"},"Hello, ",(0,a.mdx)("em",{parentName:"h1"},"terra"),"!"),(0,a.mdx)("p",null,"Below is an example of JSX embedded in Markdown."),(0,a.mdx)(r.Notice,{variant:"important",ariaLevel:"3",mdxType:"Notice"},(0,a.mdx)("p",null,"If you leave spaces between your component and it's content, the content will be parsed by ",(0,a.mdx)("strong",{parentName:"p"},"mdx"),".")),(0,a.mdx)("hr",null),(0,a.mdx)("p",null,"For more information see ",(0,a.mdx)("a",{parentName:"p",href:"https://mdxjs.com/"},"https://mdxjs.com/")),(0,a.mdx)("h3",{id:"mdx-loader"},"MDX loader"),(0,a.mdx)("p",null,"Mdx is loaded at build time rather than interpreted at run time. The mdx loader that is used is more strict that the 'marked' library previously used."),(0,a.mdx)("p",null,"The MDX loader requires closing tags. For example the before markdown would fail because the img tag was not closed."),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-diff"},'- <img height="128" width="128" src="https://github.com/cerner/terra-dev-site/raw/main/terra.png" alt="terra logo" >\n+ <img height="128" width="128" src="https://github.com/cerner/terra-dev-site/raw/main/terra.png" alt="terra logo" />\n')),(0,a.mdx)("p",null,"MDX also has a bug where a comment cannot directly follow a closing tag."),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-diff"},"-<h1>\n-hi mom\n-</h1>\n-\x3c!-- AUTO-GENERATED-CONTENT:END --\x3e\n\n+<h1>\n+hi mom\n+</h1>\n\n+\x3c!-- AUTO-GENERATED-CONTENT:END --\x3e\n\n")))}c.isMDXComponent=!0},66983:function(e,t,n){n.r(t),t.default={"clinical-lowlight-theme":"Button-module__clinical-lowlight-theme___TyZWB","orion-fusion-theme":"Button-module__orion-fusion-theme___q-FcQ",button:"Button-module__button___QuCn2","is-active":"Button-module__is-active___Z8AuK"}},30866:function(e,t,n){n.r(t),t.default={"clinical-lowlight-theme":"Notice-module__clinical-lowlight-theme___aa5xV","orion-fusion-theme":"Notice-module__orion-fusion-theme___QAE-T",notice:"Notice-module__notice___GWkPA",children:"Notice-module__children___lDYsm",accessory:"Notice-module__accessory___wkLOG",title:"Notice-module__title___6H5tc","ux-recommendation":"Notice-module__ux-recommendation___N8BuK",caution:"Notice-module__caution___hPrVl",deprecation:"Notice-module__deprecation___g1drA",maintenance:"Notice-module__maintenance___kWLIZ",important:"Notice-module__important___p5DiF","not-supported":"Notice-module__not-supported___34bHd",paragraph:"Notice-module__paragraph___5h-w1",list:"Notice-module__list___M2Kxj"}},42620:function(e,t,n){n.r(t),t.default={"clinical-lowlight-theme":"Placeholder-module__clinical-lowlight-theme___Obm9K","orion-fusion-theme":"Placeholder-module__orion-fusion-theme___svHY+",placeholder:"Placeholder-module__placeholder___ZZDXd",inner:"Placeholder-module__inner___fJq9o",title:"Placeholder-module__title___teBSo"}}}]);