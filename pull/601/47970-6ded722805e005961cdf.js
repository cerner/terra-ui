"use strict";(self.webpackChunkterra_ui=self.webpackChunkterra_ui||[]).push([[47970],{47970:function(e,t,n){n.r(t),n.d(t,{default:function(){return s}});n(67294);var a=n(81254),r=["components"];function o(){return o=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},o.apply(this,arguments)}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p={},l="wrapper";function s(e){var t=e.components,n=i(e,r);return(0,a.mdx)(l,o({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.mdx)("h1",{id:"how-to-use-translated-strings"},"How To Use Translated Strings"),(0,a.mdx)("blockquote",null,(0,a.mdx)("p",{parentName:"blockquote"},"Please review Terra's ",(0,a.mdx)("a",{parentName:"p",href:"https://engineering.cerner.com/terra-ui/guides/terra-ui/internationalization/internationalization-intro"},"Internationalization"),"\ndocumentation to ensure your application is configured to support i18n.")),(0,a.mdx)("p",null,"Every child of ",(0,a.mdx)("a",{parentName:"p",href:"/terra-ui/pull/601/application/terra-application/components/application-base"},"ApplicationBase")," has access to the\napplication's translated strings. Please review Terra's ",(0,a.mdx)("a",{parentName:"p",href:"https://engineering.cerner.com/terra-ui/guides/terra-ui/internationalization/building-components-which-include-translations"},"recommended consumption guides"),"\nfor more information."),(0,a.mdx)("p",null,"Additionally, ApplicateBase provides react-intl's APIs through the ",(0,a.mdx)("a",{parentName:"p",href:"/terra-ui/pull/601/application/terra-application/contexts/application-intl-context"},"ApplicationIntlContext"),"\nfor consumers seeking a modern Context implementation."),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React, { useContext } from 'react';\nimport { ApplicationIntlContext } from 'terra-application/lib/application-intl';\n\nconst ExampleComponent = () => {\n  const applicationIntl = useContext(ApplicationIntlContext);\n\n  return (\n    <div>\n      <p>This button requires multiple translated strings to render appropriately.</p>\n      <button\n        aria-label={applicationIntl.formatMessage({ id: 'example-component.button-label'})}\n      >\n        {applicationIntl.formatMessage({ id: 'example-component.button-text'})}\n      </button>\n    </div>\n  );\n});\n\nexport default ExampleComponent;\n")),(0,a.mdx)("blockquote",null,(0,a.mdx)("p",{parentName:"blockquote"},"Accessing react-intl's ",(0,a.mdx)("a",{parentName:"p",href:"https://reactjs.org/docs/legacy-context.html"},"legacy context value")," directly is ",(0,a.mdx)("strong",{parentName:"p"},"not recommended"),".\nThis API is deprecated and not provided by react-intl v3.x. Terra's recommended usage patterns are supported by versions 2.x and 3.x of react-intl.")))}s.isMDXComponent=!0}}]);