"use strict";(self.webpackChunkterra_ui=self.webpackChunkterra_ui||[]).push([[35060],{32560:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=c(n(11504)),a=c(n(3268)),o=c(n(74824)),l=c(n(99640)),i=c(n(48728)),u=["children"];function c(e){return e&&e.__esModule?e:{default:e}}function d(){return d=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},d.apply(this,arguments)}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var f=o.default.bind(i.default),m=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","true")},_=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","false")},p={children:a.default.string},h=function(e){var t=e.children,n=s(e,u),a=r.default.useContext(l.default),i=(0,o.default)(f(["button",a.className]),n.className);return r.default.createElement("button",d({},n,{type:"button",className:i,onBlur:m,onMouseDown:_,"data-focus-styles-enabled":!0}),t)};h.propTypes=p;t.default=h},27428:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=u(n(11504)),a=u(n(3268)),o=u(n(74824)),l=u(n(99640)),i=u(n(50987));function u(e){return e&&e.__esModule?e:{default:e}}var c=o.default.bind(i.default),d={ariaLevel:a.default.oneOf(["2","3","4","5","6"]),children:a.default.node,variant:a.default.oneOf(["ux-recommendation","caution","deprecation","maintenance","important","not-supported"])},s=function(e){var t=e.ariaLevel,n=e.variant,a=e.children,o=r.default.useContext(l.default);return r.default.createElement("div",{className:c("notice",n,o.className)},r.default.createElement("div",{className:c("accessory"),"aria-hidden":"true",focusable:"false"}),r.default.createElement("div",{role:"heading",className:c("title"),"aria-level":t},r.default.createElement("span",null,function(e){return"ux-recommendation"===e?"UX Recommendation":"caution"===e?"Caution":"deprecation"===e?"Deprecation Notice":"maintenance"===e?"In Maintenance":"important"===e?"Important":"not-supported"===e?"Hazards for Incorrect Usage":"error"}(n))),r.default.createElement("div",{className:c("children")},function(e){return"not-supported"===e?r.default.createElement(r.default.Fragment,null,r.default.createElement("p",{className:c("paragraph")},"This component was designed and tested according to the documented implementation."),r.default.createElement("p",{className:c("paragraph")},"Using the component incorrectly:",r.default.createElement("ul",{className:c("list")},r.default.createElement("li",null,"will likely result in improper composition and create accessibility issues"),r.default.createElement("li",null,"may cause erratic or broken behaviors and styles"),r.default.createElement("li",null,r.default.createElement("strong",null,"will not be supported "),"or enhanced to allow for incorrect use")))):null}(n),r.default.Children.map(a,(function(e){return"string"==typeof e?r.default.createElement("p",null,e):e}))))};s.propTypes=d,s.defaultProps={ariaLevel:"2",variant:"important"};t.default=s},72936:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=d(n(11504)),a=d(n(3268)),o=d(n(82084)),l=d(n(74824)),i=d(n(99640)),u=d(n(4620)),c=["title"];function d(e){return e&&e.__esModule?e:{default:e}}function s(){return s=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},s.apply(this,arguments)}function f(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var m=l.default.bind(u.default),_={title:a.default.string},p=function(e){var t=e.title,n=f(e,c),a=r.default.useContext(i.default),l=(0,o.default)(m(["placeholder",a.className]),n.className),u=m(["inner"]);return r.default.createElement("div",s({},n,{className:l}),r.default.createElement("div",{className:u},r.default.createElement("p",{className:m("title")},t)))};p.propTypes=_,p.defaultProps={title:""};t.default=p},31236:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"Button",{enumerable:!0,get:function(){return o.default}}),Object.defineProperty(t,"Notice",{enumerable:!0,get:function(){return r.default}}),Object.defineProperty(t,"Placeholder",{enumerable:!0,get:function(){return a.default}});var r=l(n(27428)),a=l(n(72936)),o=l(n(32560));function l(e){return e&&e.__esModule?e:{default:e}}},35060:function(e,t,n){n.r(t),n.d(t,{default:function(){return d}});n(11504);var r=n(69788),a=n(31236),o=["components"];function l(){return l=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},l.apply(this,arguments)}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u={},c="wrapper";function d(e){var t=e.components,n=i(e,o);return(0,r.mdx)(c,l({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.mdx)("h1",{id:"terra-clinical-item-collection"},"Terra Clinical Item Collection"),(0,r.mdx)(a.Notice,{variant:"deprecation",ariaLevel:"3",mdxType:"Notice"},(0,r.mdx)("p",null,"  This component has been deprecated in favor of encouraging teams to create their own component. We found that the item collection API was too limited to meet the varied needs of all consumers. Instead, we now recommend teams use terra components to create their own flexible list/table component. Please refer to the ",(0,r.mdx)("a",{parentName:"p",href:"/terra-ui/guides/terra-ui/component-guides/building-an-item-collection"},"Building an Item Collection Guide")," for replacement recommendations.")))}d.isMDXComponent=!0},48728:function(e,t,n){n.r(t),t.default={"clinical-lowlight-theme":"Button-module__clinical-lowlight-theme___TyZWB","orion-fusion-theme":"Button-module__orion-fusion-theme___q-FcQ",button:"Button-module__button___QuCn2","is-active":"Button-module__is-active___Z8AuK"}},50987:function(e,t,n){n.r(t),t.default={"clinical-lowlight-theme":"Notice-module__clinical-lowlight-theme___aa5xV","orion-fusion-theme":"Notice-module__orion-fusion-theme___QAE-T",notice:"Notice-module__notice___GWkPA",children:"Notice-module__children___lDYsm",accessory:"Notice-module__accessory___wkLOG",title:"Notice-module__title___6H5tc","ux-recommendation":"Notice-module__ux-recommendation___N8BuK",caution:"Notice-module__caution___hPrVl",deprecation:"Notice-module__deprecation___g1drA",maintenance:"Notice-module__maintenance___kWLIZ",important:"Notice-module__important___p5DiF","not-supported":"Notice-module__not-supported___34bHd",paragraph:"Notice-module__paragraph___5h-w1",list:"Notice-module__list___M2Kxj"}},4620:function(e,t,n){n.r(t),t.default={"clinical-lowlight-theme":"Placeholder-module__clinical-lowlight-theme___Obm9K","orion-fusion-theme":"Placeholder-module__orion-fusion-theme___svHY+",placeholder:"Placeholder-module__placeholder___ZZDXd",inner:"Placeholder-module__inner___fJq9o",title:"Placeholder-module__title___teBSo"}}}]);