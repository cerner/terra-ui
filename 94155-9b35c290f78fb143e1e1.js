"use strict";(self.webpackChunkterra_ui=self.webpackChunkterra_ui||[]).push([[94155],{78530:function(e,t,n){var r=n(64836),l=n(18698);t.dS=t.O=t.Ex=t.mW=void 0,Object.defineProperty(t,"X2",{enumerable:!0,get:function(){return u.Row}}),t.ZP=t.Di=void 0;var a=m(n(67294)),o=r(n(45697)),d=r(n(19845)),i=n(21538),u=m(n(98364)),c=r(n(54931));function p(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(p=function(e){return e?n:t})(e)}function m(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=l(e)&&"function"!=typeof e)return{default:e};var n=p(t);if(n&&n.has(e))return n.get(e);var r={__proto__:null},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var d=a?Object.getOwnPropertyDescriptor(e,o):null;d&&(d.get||d.set)?Object.defineProperty(r,o,d):r[o]=e[o]}return r.default=e,n&&n.set(e,r),r}var s=d.default.bind(c.default),f={children:o.default.node},y={isRequired:o.default.bool};(t.O=function(e){var t=e.children;return a.default.createElement(u.Cell,{className:s("bold")},t)}).propTypes=f,(t.Di=function(e){var t=e.children;return a.default.createElement(u.Cell,{className:s("code-block-override")},t)}).propTypes=f,(t.dS=function(e){var t=e.isRequired;return a.default.createElement(u.Cell,{className:s([t?["required"]:[]])},t?"required":"optional")}).propTypes=y,(t.mW=function(e){var t=e.children;return a.default.createElement(u.Cell,{className:s("code-block-override")},t)}).propTypes=f,(t.Ex=function(e){var t=e.children;return a.default.createElement(u.Cell,null,t)}).propTypes=f;var x=function(e){var t=e.children,n=(0,a.useContext)(i.ThemeContext);return a.default.createElement(u.default,{paddingStyle:"compact",className:s("table",n.className)},a.default.createElement(u.Header,{className:s("header")},a.default.createElement(u.HeaderCell,null,"Prop"),a.default.createElement(u.HeaderCell,null,"Type"),a.default.createElement(u.HeaderCell,null,"Required"),a.default.createElement(u.HeaderCell,null,"Default"),a.default.createElement(u.HeaderCell,null,"Description")),a.default.createElement(u.Body,null,t))};x.propTypes=f;t.ZP=x},40996:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=u(n(67294)),l=u(n(45697)),a=u(n(19845)),o=u(n(50026)),d=u(n(66983)),i=["children"];function u(e){return e&&e.__esModule?e:{default:e}}function c(){return c=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},c.apply(this,arguments)}function p(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var m=a.default.bind(d.default),s=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","true")},f=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","false")},y={children:l.default.string},x=function(e){var t=e.children,n=p(e,i),l=r.default.useContext(o.default),d=(0,a.default)(m(["button",l.className]),n.className);return r.default.createElement("button",c({},n,{type:"button",className:d,onBlur:s,onMouseDown:f,"data-focus-styles-enabled":!0}),t)};x.propTypes=y;t.default=x},59278:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=i(n(67294)),l=i(n(45697)),a=i(n(19845)),o=i(n(50026)),d=i(n(30866));function i(e){return e&&e.__esModule?e:{default:e}}var u=a.default.bind(d.default),c={ariaLevel:l.default.oneOf(["2","3","4","5","6"]),children:l.default.node,variant:l.default.oneOf(["ux-recommendation","caution","deprecation","maintenance","important","not-supported"])},p=function(e){var t=e.ariaLevel,n=e.variant,l=e.children,a=r.default.useContext(o.default);return r.default.createElement("div",{className:u("notice",n,a.className)},r.default.createElement("div",{className:u("accessory"),"aria-hidden":"true",focusable:"false"}),r.default.createElement("div",{role:"heading",className:u("title"),"aria-level":t},r.default.createElement("span",null,function(e){return"ux-recommendation"===e?"UX Recommendation":"caution"===e?"Caution":"deprecation"===e?"Deprecation Notice":"maintenance"===e?"In Maintenance":"important"===e?"Important":"not-supported"===e?"Hazards for Incorrect Usage":"error"}(n))),r.default.createElement("div",{className:u("children")},function(e){return"not-supported"===e?r.default.createElement(r.default.Fragment,null,r.default.createElement("p",{className:u("paragraph")},"This component was designed and tested according to the documented implementation."),r.default.createElement("p",{className:u("paragraph")},"Using the component incorrectly:",r.default.createElement("ul",{className:u("list")},r.default.createElement("li",null,"will likely result in improper composition and create accessibility issues"),r.default.createElement("li",null,"may cause erratic or broken behaviors and styles"),r.default.createElement("li",null,r.default.createElement("strong",null,"will not be supported "),"or enhanced to allow for incorrect use")))):null}(n),r.default.Children.map(l,(function(e){return"string"==typeof e?r.default.createElement("p",null,e):e}))))};p.propTypes=c,p.defaultProps={ariaLevel:"2",variant:"important"};t.default=p},47306:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=c(n(67294)),l=c(n(45697)),a=c(n(93967)),o=c(n(19845)),d=c(n(50026)),i=c(n(42620)),u=["title"];function c(e){return e&&e.__esModule?e:{default:e}}function p(){return p=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},p.apply(this,arguments)}function m(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var s=o.default.bind(i.default),f={title:l.default.string},y=function(e){var t=e.title,n=m(e,u),l=r.default.useContext(d.default),o=(0,a.default)(s(["placeholder",l.className]),n.className),i=s(["inner"]);return r.default.createElement("div",p({},n,{className:o}),r.default.createElement("div",{className:i},r.default.createElement("p",{className:s("title")},t)))};y.propTypes=f,y.defaultProps={title:""};t.default=y},34261:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"Button",{enumerable:!0,get:function(){return a.default}}),Object.defineProperty(t,"Notice",{enumerable:!0,get:function(){return r.default}}),Object.defineProperty(t,"Placeholder",{enumerable:!0,get:function(){return l.default}});var r=o(n(59278)),l=o(n(47306)),a=o(n(40996));function o(e){return e&&e.__esModule?e:{default:e}}},94155:function(e,t,n){n.r(t),n.d(t,{default:function(){return W}});n(67294);var r=n(81254),l=n(78530),a=["components"];function o(){return o=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o.apply(this,arguments)}function d(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var i={},u="wrapper";function c(e){var t=e.components,n=d(e,a);return(0,r.mdx)(u,o({},i,n,{components:t,mdxType:"MDXLayout"}),(0,r.mdx)(l.ZP,{mdxType:"PropsTable"},(0,r.mdx)(l.X2,{key:"ROW1",mdxType:"Row"},(0,r.mdx)(l.O,{mdxType:"PropNameCell"},"children"),(0,r.mdx)(l.Di,{mdxType:"TypeCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"node\n"))),(0,r.mdx)(l.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,r.mdx)(l.mW,{mdxType:"DefaultValueCell"},(0,r.mdx)("p",null,"none")),(0,r.mdx)(l.Ex,{mdxType:"DescriptionCell"},(0,r.mdx)("p",null,"Child node content to be displayed within the content region."))),(0,r.mdx)(l.X2,{key:"ROW2",mdxType:"Row"},(0,r.mdx)(l.O,{mdxType:"PropNameCell"},"label"),(0,r.mdx)(l.Di,{mdxType:"TypeCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"string\n"))),(0,r.mdx)(l.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,r.mdx)(l.mW,{mdxType:"DefaultValueCell"},(0,r.mdx)("p",null,"none")),(0,r.mdx)(l.Ex,{mdxType:"DescriptionCell"},(0,r.mdx)("p",null,"Text to be displayed as the title of the workspace content.\nSpecial Note: this prop is optional and should be used with caution. If this prop is not provided, the workspace content title is injected by default using the label specified in ",(0,r.mdx)("inlineCode",{parentName:"p"},"WorkspaceItem")," ",(0,r.mdx)("em",{parentName:"p"},"(recommended without additional guidance)"),". Providing this prop will override the default text and will need to follow proper accessibility guidelines."))),(0,r.mdx)(l.X2,{key:"ROW3",mdxType:"Row"},(0,r.mdx)(l.O,{mdxType:"PropNameCell"},"toolbar"),(0,r.mdx)(l.Di,{mdxType:"TypeCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"element\n"))),(0,r.mdx)(l.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,r.mdx)(l.mW,{mdxType:"DefaultValueCell"},(0,r.mdx)("p",null,"none")),(0,r.mdx)(l.Ex,{mdxType:"DescriptionCell"},(0,r.mdx)("p",null,"Optional toolbar to be displayed outside of the content region."))),(0,r.mdx)(l.X2,{key:"ROW4",mdxType:"Row"},(0,r.mdx)(l.O,{mdxType:"PropNameCell"},"statusOverlay"),(0,r.mdx)(l.Di,{mdxType:"TypeCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"element\n"))),(0,r.mdx)(l.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,r.mdx)(l.mW,{mdxType:"DefaultValueCell"},(0,r.mdx)("p",null,"none")),(0,r.mdx)(l.Ex,{mdxType:"DescriptionCell"},(0,r.mdx)("p",null,"A WorkspaceContent.StatusOverlay component instance to be rendered on top of the provided children."))),(0,r.mdx)(l.X2,{key:"ROW5",mdxType:"Row"},(0,r.mdx)(l.O,{mdxType:"PropNameCell"},"activityOverlay"),(0,r.mdx)(l.Di,{mdxType:"TypeCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"element\n"))),(0,r.mdx)(l.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,r.mdx)(l.mW,{mdxType:"DefaultValueCell"},(0,r.mdx)("p",null,"none")),(0,r.mdx)(l.Ex,{mdxType:"DescriptionCell"},(0,r.mdx)("p",null,"A WorkspaceContent.ActivityOverlay component instance to be rendered on top of the provided children.")))))}c.isMDXComponent=!0;var p=["components"];function m(){return m=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},m.apply(this,arguments)}function s(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var f={},y="wrapper";function x(e){var t=e.components,n=s(e,p);return(0,r.mdx)(y,m({},f,n,{components:t,mdxType:"MDXLayout"}),(0,r.mdx)(l.ZP,{mdxType:"PropsTable"},(0,r.mdx)(l.X2,{key:"ROW1",mdxType:"Row"},(0,r.mdx)(l.O,{mdxType:"PropNameCell"},"variant"),(0,r.mdx)(l.Di,{mdxType:"TypeCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"enum: [\n  'no-data'\n  'no-matching-results'\n  'not-authorized'\n  'error'\n],\n"))),(0,r.mdx)(l.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,r.mdx)(l.mW,{mdxType:"DefaultValueCell"},(0,r.mdx)("p",null,"none")),(0,r.mdx)(l.Ex,{mdxType:"DescriptionCell"},(0,r.mdx)("p",null,"The status variant indicating which messaging should be rendered."))),(0,r.mdx)(l.X2,{key:"ROW2",mdxType:"Row"},(0,r.mdx)(l.O,{mdxType:"PropNameCell"},"message"),(0,r.mdx)(l.Di,{mdxType:"TypeCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"string\n"))),(0,r.mdx)(l.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,r.mdx)(l.mW,{mdxType:"DefaultValueCell"},(0,r.mdx)("p",null,"none")),(0,r.mdx)(l.Ex,{mdxType:"DescriptionCell"},(0,r.mdx)("p",null,"The message to render within the overlay."))),(0,r.mdx)(l.X2,{key:"ROW3",mdxType:"Row"},(0,r.mdx)(l.O,{mdxType:"PropNameCell"},"children"),(0,r.mdx)(l.Di,{mdxType:"TypeCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"custom\n"))),(0,r.mdx)(l.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,r.mdx)(l.mW,{mdxType:"DefaultValueCell"},(0,r.mdx)("p",null,"none")),(0,r.mdx)(l.Ex,{mdxType:"DescriptionCell"},(0,r.mdx)("p",null,"The StatusOverlay.Button components to render within the status overlay.")))))}x.isMDXComponent=!0;var b=["components"];function v(){return v=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},v.apply(this,arguments)}function _(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var h={},O="wrapper";function g(e){var t=e.components,n=_(e,b);return(0,r.mdx)(O,v({},h,n,{components:t,mdxType:"MDXLayout"}),(0,r.mdx)(l.ZP,{mdxType:"PropsTable"},(0,r.mdx)(l.X2,{key:"ROW1",mdxType:"Row"},(0,r.mdx)(l.O,{mdxType:"PropNameCell"},"text"),(0,r.mdx)(l.Di,{mdxType:"TypeCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"string\n"))),(0,r.mdx)(l.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,r.mdx)(l.mW,{mdxType:"DefaultValueCell"},(0,r.mdx)("p",null,"none")),(0,r.mdx)(l.Ex,{mdxType:"DescriptionCell"},(0,r.mdx)("p",null,"Text to render within the button."))),(0,r.mdx)(l.X2,{key:"ROW2",mdxType:"Row"},(0,r.mdx)(l.O,{mdxType:"PropNameCell"},"onClick"),(0,r.mdx)(l.Di,{mdxType:"TypeCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"func\n"))),(0,r.mdx)(l.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,r.mdx)(l.mW,{mdxType:"DefaultValueCell"},(0,r.mdx)("p",null,"none")),(0,r.mdx)(l.Ex,{mdxType:"DescriptionCell"},(0,r.mdx)("p",null,"Callback function executed on button selection.")))))}g.isMDXComponent=!0;var T=["components"];function j(){return j=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},j.apply(this,arguments)}function P(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var C={},w="wrapper";function N(e){var t=e.components,n=P(e,T);return(0,r.mdx)(w,j({},C,n,{components:t,mdxType:"MDXLayout"}),(0,r.mdx)(l.ZP,{mdxType:"PropsTable"},(0,r.mdx)(l.X2,{key:"ROW1",mdxType:"Row"},(0,r.mdx)(l.O,{mdxType:"PropNameCell"},"variant"),(0,r.mdx)(l.Di,{mdxType:"TypeCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"enum: [\n  'default'\n  'loading'\n],\n"))),(0,r.mdx)(l.dS,{isRequired:!1,mdxType:"RequiredCell"}),(0,r.mdx)(l.mW,{mdxType:"DefaultValueCell"},(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"'default'\n"))),(0,r.mdx)(l.Ex,{mdxType:"DescriptionCell"},(0,r.mdx)("p",null,"String determining which activity variant to render.")))))}N.isMDXComponent=!0;n(34261);var k=["components"];function E(){return E=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},E.apply(this,arguments)}function S(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var D={},R="wrapper";function W(e){var t=e.components,n=S(e,k);return(0,r.mdx)(R,E({},D,n,{components:t,mdxType:"MDXLayout"}),(0,r.mdx)("h1",{id:"workspacecontent"},"WorkspaceContent"),(0,r.mdx)("p",null,"The WorkspaceContent component is essential for integrating into the workspace. It provides the necessary UI and API hooks to present content consistently in the workspace ecosystem. "),(0,r.mdx)("h2",{id:"usage"},"Usage"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-jsx"},"import { WorkspaceContent } from 'terra-application/lib/workspace';\n")),(0,r.mdx)("p",null,"Please see the ",(0,r.mdx)("a",{parentName:"p",href:"/terra-ui/application/terra-application/how-to/create-workspace-content"},"How To Create Workspace Content")," guide for more usage information."),(0,r.mdx)("h2",{id:"props"},"Props"),(0,r.mdx)(c,{mdxType:"WorkspaceContentProps"}),(0,r.mdx)("h2",{id:"subcomponents"},"Subcomponents"),(0,r.mdx)("h3",{id:"workspacecontentstatusoverlay"},"WorkspaceContent.StatusOverlay"),(0,r.mdx)("p",null,"An instance of the ",(0,r.mdx)("inlineCode",{parentName:"p"},"WorkspaceContent.StatusOverlay")," component can be provided to the ",(0,r.mdx)("inlineCode",{parentName:"p"},"statusOverlay")," prop to present an interaction-blocking status indicator over the WorkspaceContent's children."),(0,r.mdx)("h4",{id:"props-1"},"Props"),(0,r.mdx)(x,{mdxType:"WorkspaceContentStatusOverlayProps"}),(0,r.mdx)("h3",{id:"workspacecontentstatusoverlaybutton"},"WorkspaceContent.StatusOverlay.Button"),(0,r.mdx)("p",null,"The ",(0,r.mdx)("inlineCode",{parentName:"p"},"StatusOverlay.Button")," component should be supplied as children to the StatusOverlay when actions are desired within the status view."),(0,r.mdx)("h4",{id:"props-2"},"Props"),(0,r.mdx)(g,{mdxType:"WorkspaceContentStatusOverlayButtonProps"}),(0,r.mdx)("h3",{id:"workspacecontentactivityoverlay"},"WorkspaceContent.ActivityOverlay"),(0,r.mdx)("p",null,"An instance of the ",(0,r.mdx)("inlineCode",{parentName:"p"},"WorkspaceContent.ActivityOverlay")," component can be provided to the ",(0,r.mdx)("inlineCode",{parentName:"p"},"activityOverlay")," prop to present an interaction-blocking overlay over the WorkspaceContent's children."),(0,r.mdx)("h4",{id:"props-3"},"Props"),(0,r.mdx)(N,{mdxType:"WorkspaceContentActivityOverlayProps"}))}W.isMDXComponent=!0},54931:function(e,t,n){n.r(t),t.default={"clinical-lowlight-theme":"PropsTable-module__clinical-lowlight-theme___3pa8J","orion-fusion-theme":"PropsTable-module__orion-fusion-theme___FtP5r",bold:"PropsTable-module__bold___-z9Sz",table:"PropsTable-module__table___rzW-v",required:"PropsTable-module__required___ev190","code-block-override":"PropsTable-module__code-block-override___fF0JK"}},66983:function(e,t,n){n.r(t),t.default={"clinical-lowlight-theme":"Button-module__clinical-lowlight-theme___TyZWB","orion-fusion-theme":"Button-module__orion-fusion-theme___q-FcQ",button:"Button-module__button___QuCn2","is-active":"Button-module__is-active___Z8AuK"}},30866:function(e,t,n){n.r(t),t.default={"clinical-lowlight-theme":"Notice-module__clinical-lowlight-theme___aa5xV","orion-fusion-theme":"Notice-module__orion-fusion-theme___QAE-T",notice:"Notice-module__notice___GWkPA",children:"Notice-module__children___lDYsm",accessory:"Notice-module__accessory___wkLOG",title:"Notice-module__title___6H5tc","ux-recommendation":"Notice-module__ux-recommendation___N8BuK",caution:"Notice-module__caution___hPrVl",deprecation:"Notice-module__deprecation___g1drA",maintenance:"Notice-module__maintenance___kWLIZ",important:"Notice-module__important___p5DiF","not-supported":"Notice-module__not-supported___34bHd",paragraph:"Notice-module__paragraph___5h-w1",list:"Notice-module__list___M2Kxj"}},42620:function(e,t,n){n.r(t),t.default={"clinical-lowlight-theme":"Placeholder-module__clinical-lowlight-theme___Obm9K","orion-fusion-theme":"Placeholder-module__orion-fusion-theme___svHY+",placeholder:"Placeholder-module__placeholder___ZZDXd",inner:"Placeholder-module__inner___fJq9o",title:"Placeholder-module__title___teBSo"}},17893:function(e,t,n){n.r(t),t.default={"clinical-lowlight-theme":"Table-module__clinical-lowlight-theme___PqYJ8","orion-fusion-theme":"Table-module__orion-fusion-theme___d9rxf",table:"Table-module__table___eg2Mi","padding-standard":"Table-module__padding-standard___BfbC-","padding-compact":"Table-module__padding-compact___Yus6Z",striped:"Table-module__striped___n8xJe"}},89650:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=c(n(67294)),l=c(n(45697)),a=c(n(93967)),o=c(n(19845)),d=c(n(50026)),i=c(n(17893)),u=["children","disableStripes","paddingStyle"];function c(e){return e&&e.__esModule?e:{default:e}}function p(){return p=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},p.apply(this,arguments)}function m(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var s=o.default.bind(i.default),f={children:l.default.node.isRequired,disableStripes:l.default.bool,paddingStyle:l.default.oneOf(["none","standard","compact"])},y=function(e){var t=e.children,n=e.disableStripes,l=e.paddingStyle,o=m(e,u),i=r.default.useContext(d.default),c=(0,a.default)(s("table",{striped:!n},{"padding-standard":"standard"===l},{"padding-compact":"compact"===l},i.className),o.className);return r.default.createElement("table",p({},o,{className:c}),t)};y.propTypes=f,y.defaultProps={disableStripes:!1,paddingStyle:"none"};t.default=y},51523:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=o(n(67294)),l=o(n(45697)),a=["children"];function o(e){return e&&e.__esModule?e:{default:e}}function d(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var i={children:l.default.node},u=function(e){var t=e.children,n=d(e,a);return r.default.createElement("tbody",n,t)};u.propTypes=i,u.defaultProps={children:[]};t.default=u},58741:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=o(n(67294)),l=o(n(45697)),a=["children"];function o(e){return e&&e.__esModule?e:{default:e}}function d(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var i={children:l.default.node},u=function(e){var t=e.children,n=d(e,a);return r.default.createElement("td",n,t)};u.propTypes=i,u.defaultProps={children:[]};t.default=u},90703:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=d(n(67294)),l=d(n(45697)),a=d(n(96576)),o=["children"];function d(e){return e&&e.__esModule?e:{default:e}}function i(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var u={children:l.default.node},c=function(e){var t=e.children,n=i(e,o);return r.default.createElement("thead",n,r.default.createElement("tr",null,a.default.addScope(t,"col")))};c.propTypes=u,c.defaultProps={children:[]};t.default=c},8078:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=o(n(67294)),l=o(n(45697)),a=["children"];function o(e){return e&&e.__esModule?e:{default:e}}function d(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var i={children:l.default.node},u=function(e){var t=e.children,n=d(e,a);return r.default.createElement("th",n,t)};u.propTypes=i,u.defaultProps={children:[]};t.default=u},34847:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=u(n(67294)),l=u(n(45697)),a=u(n(19845)),o=u(n(17893)),d=u(n(96576)),i=["children"];function u(e){return e&&e.__esModule?e:{default:e}}function c(){return c=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},c.apply(this,arguments)}function p(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var m=a.default.bind(o.default),s={children:l.default.node},f=function(e){var t=e.children,n=p(e,i),l=m(["row"]);return r.default.createElement("tr",c({},n,{className:n.className?"".concat(l," ").concat(n.className):l}),d.default.addScope(t,"row"))};f.propTypes=s,f.defaultProps={children:[]};t.default=f},96576:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r,l=(r=n(67294))&&r.__esModule?r:{default:r};var a={addScope:function(e,t){var n=[];return l.default.Children.forEach(e,(function(e){n.push(l.default.cloneElement(e,{scope:"TableHeaderCell"===e.type.name?t:void 0}))})),n}};t.default=a},98364:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"Body",{enumerable:!0,get:function(){return l.default}}),Object.defineProperty(t,"Cell",{enumerable:!0,get:function(){return o.default}}),Object.defineProperty(t,"Header",{enumerable:!0,get:function(){return d.default}}),Object.defineProperty(t,"HeaderCell",{enumerable:!0,get:function(){return i.default}}),Object.defineProperty(t,"Row",{enumerable:!0,get:function(){return a.default}}),t.default=void 0;var r=u(n(89650)),l=u(n(51523)),a=u(n(34847)),o=u(n(58741)),d=u(n(90703)),i=u(n(8078));function u(e){return e&&e.__esModule?e:{default:e}}t.default=r.default}}]);