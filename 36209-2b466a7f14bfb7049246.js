"use strict";(self.webpackChunkterra_ui=self.webpackChunkterra_ui||[]).push([[36209],{36209:function(e,t,n){n.r(t),n.d(t,{default:function(){return s}});n(67294);var r=n(81254),a=["components"];function o(){return o=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o.apply(this,arguments)}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p={},c="wrapper";function s(e){var t=e.components,n=i(e,a);return(0,r.mdx)(c,o({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.mdx)("h1",{id:"how-to-use-active-breakpoint"},"How To Use Active Breakpoint"),(0,r.mdx)("p",null,"The active breakpoint value can be determined by using the ",(0,r.mdx)("a",{parentName:"p",href:"/terra-ui/application/terra-application/contexts/active-breakpoint-context"},"ActiveBreakpointContext"),". Components that use the ActiveBreakpointContext will be updated whenever the active breakpoint value changes."),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React, { useContext } from 'react';\nimport { ActiveBreakpointContext } from 'terra-application/lib/breakpoints';\n\nconst ExampleComponent = () => {\n  const activeBreakpoint = useContext(ActiveBreakpointContext);\n\n  return (\n    <div>\n      <p>This component retrieves and renders the active breakpoint</p>\n      <p>{activeBreakpoint}</p>\n    </div>\n  );\n};\n\nexport default ExampleComponent;\n")),(0,r.mdx)("blockquote",null,(0,r.mdx)("p",{parentName:"blockquote"},"Note: An ActiveBreakpointContext value is provided by ",(0,r.mdx)("a",{parentName:"p",href:"/terra-ui/application/terra-application/components/application-base"},"ApplicationBase"),". The rendering of additional ActiveBreakpointContext providers should be unnecessary is most cases.")))}s.isMDXComponent=!0}}]);