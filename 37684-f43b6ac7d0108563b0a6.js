"use strict";(self.webpackChunkterra_ui=self.webpackChunkterra_ui||[]).push([[37684,45627,85565,3353,5161,45865,85355,3193,4845,46647,85161,38681,15318,40411,18101,38443],{22863:function(e,a,n){var r=n(64836);a.Z=void 0;var t=r(n(67294)),i=r(n(45697)),l=r(n(47166)),d=r(n(17422)),m=l.default.bind(d.default),o={name:i.default.string.isRequired,src:i.default.string,url:i.default.string,version:i.default.string.isRequired},p=function(e){var a=e.src,n=e.name,r=e.url,i=e.version,l=t.default.createElement("a",{className:m("badge"),href:r||"https://www.npmjs.org/package/".concat(n,"/v/").concat(i)},t.default.createElement("span",{className:m("badge-name")},r?"package":"npm"),t.default.createElement("span",{className:m("badge-version")},"v".concat(i))),d=a?t.default.createElement("a",{className:m("badge"),href:a},t.default.createElement("span",{className:m("badge-name")},"github"),t.default.createElement("span",{className:m("badge-version")},"source")):void 0;return t.default.createElement("div",{className:m("badge-container")},l,d)};p.propTypes=o;var u=p;a.Z=u},37684:function(e,a,n){n.r(a),n.d(a,{default:function(){return p}});n(67294);var r=n(81254),t=n(93626),i=["components"];function l(){return l=Object.assign?Object.assign.bind():function(e){for(var a=1;a<arguments.length;a++){var n=arguments[a];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},l.apply(this,arguments)}function d(e,a){if(null==e)return{};var n,r,t=function(e,a){if(null==e)return{};var n,r,t={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],a.indexOf(n)>=0||(t[n]=e[n]);return t}(e,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(t[n]=e[n])}return t}var m={},o="wrapper";function p(e){var a=e.components,n=d(e,i);return(0,r.mdx)(o,l({},m,n,{components:a,mdxType:"MDXLayout"}),(0,r.mdx)(t.C,{mdxType:"Badge"}),(0,r.mdx)("h1",{id:"webpack-config-terra-upgrade-guide"},"webpack-config-terra Upgrade Guide"),(0,r.mdx)("h2",{id:"changes-from-terra-toolkit-6x--to-cernerwebpack-config-terra-100"},"Changes from terra-toolkit 6.x  to @cerner/webpack-config-terra 1.0.0"),(0,r.mdx)("p",null,"We have broken terra-toolkit up into several component parts de-couple major version upgrades to unrelated components. Upgrading WDIO shouldn't affect our webpack version and vice versa."),(0,r.mdx)("p",null,"The webpack config formerly housed in terra toolkit has been migrated to it's own package ",(0,r.mdx)("inlineCode",{parentName:"p"},"@cerner/webpack-config-terra"),"."),(0,r.mdx)("p",null,"To upgrade change dependency and change how you are requiring the config."),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-diff"},"- const webpackConfig = require('terra-dev-site/config/webpack/webpack.config');\n+ const webpackConfig = require('@cerner/webpack-config-terra');\n")),(0,r.mdx)("h3",{id:"removed-raf"},"Removed RAF"),(0,r.mdx)("p",null,"Previously we provided the requestAnimationFrame polyfill but have determined it doesn't need to be polyfilled of our supported browsers. See ",(0,r.mdx)("a",{parentName:"p",href:"https://caniuse.com/requestanimationframe"},"caniuse.com"),". This should not affect your application."),(0,r.mdx)("h3",{id:"aggregate-themes-changed-to-opt-in"},"Aggregate themes changed to opt in."),(0,r.mdx)("p",null,"When components adhere to the new themeing strategy, aggregate themes is no longer needed. Theme Aggregation is turned off by default and enabling it will significantly reduce webpack performance."),(0,r.mdx)("p",null,"Minimum terra component versions that support theme context as of 12/8/2020. Any components not listed here either do not have themeable variables, do not support the theme context and should be replaced, or have been introduced since this list was generated and support the theme context."),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("inlineCode",{parentName:"li"},"terra-abstract-modal@3.25.0")),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("inlineCode",{parentName:"li"},"@cerner/terra-docs@1.0.0")),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("inlineCode",{parentName:"li"},"terra-action-footer@2.42.0")),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("inlineCode",{parentName:"li"},"terra-action-header@2.43.0")),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("inlineCode",{parentName:"li"},"terra-alert@4.29.0")),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("inlineCode",{parentName:"li"},"terra-application-header-layout@3.28.0")),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("inlineCode",{parentName:"li"},"terra-application-links@6.34.0")),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("inlineCode",{parentName:"li"},"terra-application-name@3.30.0")),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("inlineCode",{parentName:"li"},"terra-application-navigation@1.37.0")),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("inlineCode",{parentName:"li"},"terra-application-utility@2.35.0")),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("inlineCode",{parentName:"li"},"terra-application@1.19.0")),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("inlineCode",{parentName:"li"},"terra-avatar@3.3.0")),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("inlineCode",{parentName:"li"},"terra-badge@3.35.0")),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("inlineCode",{parentName:"li"},"terra-brand-footer@2.24.0")),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("inlineCode",{parentName:"li"},"terra-button-group@3.39.0")),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("inlineCode",{parentName:"li"},"terra-button@3.36.0")),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("inlineCode",{parentName:"li"},"terra-card@3.27.0")),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("inlineCode",{parentName:"li"},"terra-cell-grid@1.5.0")),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("inlineCode",{parentName:"li"},"terra-clinical-data-grid@2.25.0")),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("inlineCode",{parentName:"li"},"terra-clinical-detail-view@3.20.0")),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("inlineCode",{parentName:"li"},"terra-clinical-header@3.16.0")),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("inlineCode",{parentName:"li"},"terra-clinical-item-display@3.18.0")),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("inlineCode",{parentName:"li"},"terra-clinical-item-view@3.19.0")),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("inlineCode",{parentName:"li"},"terra-clinical-label-value-view@3.20.0")),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("inlineCode",{parentName:"li"},"terra-clinical-onset-picker@4.21.0")),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("inlineCode",{parentName:"li"},"terra-collapsible-menu-view@6.34.0")),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("inlineCode",{parentName:"li"},"terra-date-input@1.14.0")),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("inlineCode",{parentName:"li"},"terra-date-picker@4.38.0")),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("inlineCode",{parentName:"li"},"terra-date-time-picker@4.38.0")),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("inlineCode",{parentName:"li"},"terra-demographics-banner@3.37.0")),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("inlineCode",{parentName:"li"},"terra-dialog-modal@3.38.0")),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("inlineCode",{parentName:"li"},"terra-dialog@2.42.0")),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("inlineCode",{parentName:"li"},"terra-divider@3.27.0")),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("inlineCode",{parentName:"li"},"terra-dropdown-button@1.14.0")),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("inlineCode",{parentName:"li"},"terra-form-checkbox@4.3.0")),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("inlineCode",{parentName:"li"},"terra-form-field@4.3.0")),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("inlineCode",{parentName:"li"},"terra-form-fieldset@2.42.0")),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("inlineCode",{parentName:"li"},"terra-form-input@3.5.0")),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("inlineCode",{parentName:"li"},"terra-form-radio@4.5.0")),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("inlineCode",{parentName:"li"},"terra-form-select@6.6.0")),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("inlineCode",{parentName:"li"},"terra-form-textarea@4.5.0")),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("inlineCode",{parentName:"li"},"terra-grid@6.21.0")),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("inlineCode",{parentName:"li"},"terra-html-table@1.6.0")),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("inlineCode",{parentName:"li"},"terra-hyperlink@2.34.0")),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("inlineCode",{parentName:"li"},"terra-icon@3.32.0")),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("inlineCode",{parentName:"li"},"terra-image@3.28.0")),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("inlineCode",{parentName:"li"},"terra-layout@4.24.0")),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("inlineCode",{parentName:"li"},"terra-list@4.31.0")),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("inlineCode",{parentName:"li"},"terra-menu@6.34.0")),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("inlineCode",{parentName:"li"},"terra-modal-manager@6.34.0")),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("inlineCode",{parentName:"li"},"terra-navigation-side-menu@2.31.0")),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("inlineCode",{parentName:"li"},"terra-notification-dialog@3.35.0")),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("inlineCode",{parentName:"li"},"terra-overlay@3.49.0")),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("inlineCode",{parentName:"li"},"terra-paginator@2.51.0")),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("inlineCode",{parentName:"li"},"terra-popup@6.35.0")),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("inlineCode",{parentName:"li"},"terra-profile-image@3.30.0")),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("inlineCode",{parentName:"li"},"terra-progress-bar@4.23.0")),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("inlineCode",{parentName:"li"},"terra-search-field@3.51.0")),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("inlineCode",{parentName:"li"},"terra-section-header@2.37.0")),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("inlineCode",{parentName:"li"},"terra-show-hide@2.35.0")),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("inlineCode",{parentName:"li"},"terra-signature@2.30.0")),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("inlineCode",{parentName:"li"},"terra-slide-group@4.21.0")),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("inlineCode",{parentName:"li"},"terra-slide-panel@3.27.0")),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("inlineCode",{parentName:"li"},"terra-spacer@3.40.0")),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("inlineCode",{parentName:"li"},"terra-status-view@4.27.0")),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("inlineCode",{parentName:"li"},"terra-switch@1.0.0")),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("inlineCode",{parentName:"li"},"terra-table@4.8.0")),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("inlineCode",{parentName:"li"},"terra-tabs@6.35.0")),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("inlineCode",{parentName:"li"},"terra-tag@2.35.0")),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("inlineCode",{parentName:"li"},"terra-text@4.31.0")),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("inlineCode",{parentName:"li"},"terra-time-input@4.29.0")),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("inlineCode",{parentName:"li"},"terra-toolbar@1.8.0"))),(0,r.mdx)("h3",{id:"themeconfig-moved-from-env-to-options"},"themeConfig moved from env to options"),(0,r.mdx)("p",null,"Theme config can be set in three ways. Through the THEME env, by adding a themeConfig option to the env variable when extended through javascript or by setting adding a terra-theme.config.js file to your package root."),(0,r.mdx)("p",null,"Using the terra-theme.config.js file is the preferred method of configuring themes, but in some cases like ci and building multiple sites with one webpack config. The method of adding the themeConfig option to the env variable is kind of weird since the env object is generally reserved for environment variable set through webpack and not objects. To address this we've added an additional options object that can optionally be passed in to the webpack config."),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-diff"},"const webpackConfig = require('webpack-config-terra');\n\nconst themeConfig = {\n  theme: 'terra-dark-theme',\n};\n\n-+module.exports = webpackConfig({themeConfig}, {});\n+module.exports = webpackConfig({}, {}, {themeConfig});\n\n")),(0,r.mdx)("h3",{id:"removed-aggregateoptions-from-env"},"Removed aggregateOptions from env"),(0,r.mdx)("p",null,"Similar the env theme config, aggregateOptions was an object added to the env object. Unlike themeConfig we don't know of anyone using aggregateOptions. Instead of moving it to the ",(0,r.mdx)("inlineCode",{parentName:"p"},"options")," object we just went ahead and removed it. If you have a use case for config, log an issue and we'll see what we can do."),(0,r.mdx)("h3",{id:"deprecating-theme-env-support"},"deprecating THEME env support"),(0,r.mdx)("p",null,"To consolidate our api the THEME env variable is now supplied as the webpack env option ",(0,r.mdx)("inlineCode",{parentName:"p"},"defaultTheme"),". For the timebeing both are supported but the THEME env will be removed in the next major version of webpack-config-terra."),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-diff"},'"scripts": {\n-    "pack": "THEME=terra-dark-theme webpack"\n+    "pack": "webpack --env.defaultTheme=terra-dark-theme"\n}\n')),(0,r.mdx)("h3",{id:"postcss-8-as-peer-dependency"},"Postcss 8 as peer dependency"),(0,r.mdx)("p",null,"Postcss is now a required peer dependency. It must be added as a dev dependency to your package."),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-diff"},'  "devDependencies": {\n+   "postcss": "^8.0.0",\n  }\n}\n')))}p.isMDXComponent=!0},93626:function(e,a,n){n.d(a,{C:function(){return i}});var r=n(67294),t=n(22863),i=function(e){var a=e.url;return r.createElement(t.Z,{src:"https://github.com/cerner/terra-toolk/tree/main/packages/webpack-config-terra",name:"@cerner/webpack-config-terra",version:"3.0.1",url:a})}},17422:function(e,a,n){n.r(a),a.default={badge:"Badges-module__badge___vex-+","badge-container":"Badges-module__badge-container___B13Mv","badge-name":"Badges-module__badge-name___jkN0m","badge-version":"Badges-module__badge-version___agZ+P"}}}]);