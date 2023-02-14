"use strict";(self.webpackChunkterra_ui=self.webpackChunkterra_ui||[]).push([[30551,45627,85565,3353,5161,45865,85355,3193,4845,46647,85161],{22863:function(e,n,a){var r=a(64836);n.Z=void 0;var t=r(a(67294)),i=r(a(45697)),o=r(a(47166)),s=r(a(17422)),d=o.default.bind(s.default),l={name:i.default.string.isRequired,src:i.default.string,url:i.default.string,version:i.default.string.isRequired},c=function(e){var n=e.src,a=e.name,r=e.url,i=e.version,o=t.default.createElement("a",{className:d("badge"),href:r||"https://www.npmjs.org/package/".concat(a,"/v/").concat(i)},t.default.createElement("span",{className:d("badge-name")},r?"package":"npm"),t.default.createElement("span",{className:d("badge-version")},"v".concat(i))),s=n?t.default.createElement("a",{className:d("badge"),href:n},t.default.createElement("span",{className:d("badge-name")},"github"),t.default.createElement("span",{className:d("badge-version")},"source")):void 0;return t.default.createElement("div",{className:d("badge-container")},o,s)};c.propTypes=l;var p=c;n.Z=p},30551:function(e,n,a){a.r(n),a.d(n,{default:function(){return c}});a(67294);var r=a(81254),t=a(81510),i=["components"];function o(){return o=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var a=arguments[n];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e},o.apply(this,arguments)}function s(e,n){if(null==e)return{};var a,r,t=function(e,n){if(null==e)return{};var a,r,t={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],n.indexOf(a)>=0||(t[a]=e[a]);return t}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(t[a]=e[a])}return t}var d={},l="wrapper";function c(e){var n=e.components,a=s(e,i);return(0,r.mdx)(l,o({},d,a,{components:n,mdxType:"MDXLayout"}),(0,r.mdx)(t.C,{mdxType:"Badge"}),(0,r.mdx)("h1",{id:"terra-dev-site-setup-guide"},"Terra Dev Site Setup Guide"),(0,r.mdx)("p",null,"Using the ",(0,r.mdx)("inlineCode",{parentName:"p"},"TerraDevSite")," webpack plugin, a static site will be generated and can be served using ",(0,r.mdx)("inlineCode",{parentName:"p"},"webpack-dev-server")," or served statically using something like gh-pages. Extending from ",(0,r.mdx)("inlineCode",{parentName:"p"},"@cerner/webpack-config-terra"),"'s webpack config is highly recommended."),(0,r.mdx)("h2",{id:"webpackconfig"},"WebpackConfig"),(0,r.mdx)("p",null,"The following webpackConfig config is a simple example, extending from the reusable terra webpack config and applying the ",(0,r.mdx)("inlineCode",{parentName:"p"},"TerraDevSite")," plugin."),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},"const terraWebpackConfig = require('@cerner/webpack-config-terra');\nconst merge = require('webpack-merge');\nconst { TerraDevSite } = require('@cerner/terra-dev-site');\n\n/**\n* Generates the file representing app name configuration.\n*/\nconst devSiteConfig = (env = {}, argv = {}) => ({\n  plugins: [\n    new TerraDevSite({\n      defaultLocale: env.defaultLocale,\n    }),\n  ],\n});\n\nconst webpackConfig = (env, argv) => (\n  merge(terraWebpackConfig(env, argv), devSiteConfig(env, argv))\n);\n\nmodule.exports = webpackConfig;\n")),(0,r.mdx)("p",null,"To serve using ",(0,r.mdx)("inlineCode",{parentName:"p"},"webpack-dev-server"),", add the following terra-toolkit command to your package.json. See the ",(0,r.mdx)("a",{parentName:"p",href:"https://webpack.js.org/configuration/dev-server/#root"},"webpack-dev-server")," for more information on the command options."),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-json"},'{\n  "scripts": {\n    "start": "webpack serve"\n  }\n}\n')),(0,r.mdx)("p",null,"After adding the start command to your package.json, run it and navigate to http://localhost:8080/ to view the site in your browser:"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-bash"},"npm start\n")),(0,r.mdx)("p",null,"You will see your readme hosted on the site. Next lets add some pages."),(0,r.mdx)("p",null,"TerraDevSite will auto discover files base on either the default search patterns in the site.config or the file structure and file extensions used."),(0,r.mdx)("p",null,"Add the following file to: ",(0,r.mdx)("inlineCode",{parentName:"p"},"<package>/src/terra-dev-site/my-first-page.doc.md")),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-md"},"My first page!\n")),(0,r.mdx)("p",null,"Webpack will re-compile and now you should be able to see your page under the components tab."))}c.isMDXComponent=!0},81510:function(e,n,a){a.d(n,{C:function(){return i}});var r=a(67294),t=a(22863),i=function(e){var n=e.url;return r.createElement(t.Z,{src:"https://github.com/cerner/terra-application/tree/main/packages/terra-dev-site",name:"@cerner/terra-dev-site",version:"7.7.0",url:n})}},17422:function(e,n,a){a.r(n),n.default={badge:"Badges-module__badge___vex-+","badge-container":"Badges-module__badge-container___B13Mv","badge-name":"Badges-module__badge-name___jkN0m","badge-version":"Badges-module__badge-version___agZ+P"}}}]);