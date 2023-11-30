"use strict";(self.webpackChunkterra_ui=self.webpackChunkterra_ui||[]).push([[6637],{6637:function(e,t,n){n.r(t),n.d(t,{default:function(){return p}});n(67294);var r=n(81254),a=["components"];function o(){return o=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o.apply(this,arguments)}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l={},i="wrapper";function p(e){var t=e.components,n=s(e,a);return(0,r.mdx)(i,o({},l,n,{components:t,mdxType:"MDXLayout"}),(0,r.mdx)("h1",{id:"testing-components-which-include-translations"},"Testing Components Which Include Translations"),(0,r.mdx)("p",null,"We recommend using ",(0,r.mdx)("a",{parentName:"p",href:"https://jestjs.io/"},"Jest")," and ",(0,r.mdx)("a",{parentName:"p",href:"https://airbnb.io/enzyme/"},"Enzyme")," for writing React component unit tests."),(0,r.mdx)("p",null,"We also recommend using ",(0,r.mdx)("a",{parentName:"p",href:"https://github.com/cerner/terra-enzyme-intl"},"terra-enzyme-intl")," which provides helpers for testing components that use react-intl with enzyme."),(0,r.mdx)("p",null,"A test using terra-enzyme-intl looks like:"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-jsx"},"// Toggle.test.jsx\nimport React from 'react';\nimport { shallowWithIntl, mountWithIntl } from 'terra-enzyme-intl';\n\nimport Toggle from '../../src/Toggle';\n\ndescribe('<Toggle />', () => {\n  it('shallow renders Toggle component', () => {\n    const wrapper = shallowWithIntl(<Toggle />);\n    expect(wrapper).toMatchSnapshot();\n  });\n\n  it('mounts a Toggle component', () => {\n    const wrapper = mountWithIntl(<Toggle />);\n    expect(wrapper).toMatchSnapshot();\n  });\n});\n")),(0,r.mdx)("h2",{id:"aggregating-translations-for-jest-tests"},"Aggregating translations for Jest tests"),(0,r.mdx)("p",null,"With ",(0,r.mdx)("a",{parentName:"p",href:"https://github.com/cerner/terra-enzyme-intl"},"terra-enzyme-intl"),", aggregating translations for Jest tests is not necessary. The terra-enzyme-intl package will use the translation keys for the translation strings instead of the actual translations. If you want to test the actual translation string values, we recommend testing translations with a tool like webdriver.io."),(0,r.mdx)("p",null,"However, if you require translations in your Jest tests, you can create a ",(0,r.mdx)("inlineCode",{parentName:"p"},"jestglobalsetup.js")," file in your app."),(0,r.mdx)("p",null,"Add the following code to ",(0,r.mdx)("inlineCode",{parentName:"p"},"jestglobalsetup.js"),":"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-js"},"const aggregateTranslations = require('terra-aggregate-translations');\n\nmodule.exports = () => {\n  aggregateTranslations();\n};\n")),(0,r.mdx)("p",null,"In your app's jest config file, add the following:"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-js"},"globalSetup: './jestglobalsetup.js',\n// This allows jest to resolve files from the generated aggregated-translations in addition to node_modules\nmoduleDirectories: [\n  'aggregated-translations',\n  'node_modules',\n],\n")),(0,r.mdx)("p",null,(0,r.mdx)("strong",{parentName:"p"},"Note")," ",(0,r.mdx)("em",{parentName:"p"},"The Terra Application Base component uses terra-i18n which currently uses ",(0,r.mdx)("inlineCode",{parentName:"em"},"require.ensure")," to handle code splitting of translations. Jest does not support ",(0,r.mdx)("inlineCode",{parentName:"em"},"require.ensure")," out of the box. Because of this, we do not recommend using Terra Application Base in your Jest tests.")))}p.isMDXComponent=!0}}]);