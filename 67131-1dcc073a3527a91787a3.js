"use strict";(self.webpackChunkterra_ui=self.webpackChunkterra_ui||[]).push([[67131,45627,85565,3353,5161,45865,85355,3193,4845,46647,85161,38681,15318,40411,18101,38443],{22863:function(e,t,a){var n=a(64836);t.Z=void 0;var r=n(a(67294)),i=n(a(45697)),d=n(a(47166)),o=n(a(17422)),l=d.default.bind(o.default),s={name:i.default.string.isRequired,src:i.default.string,url:i.default.string,version:i.default.string.isRequired},m=function(e){var t=e.src,a=e.name,n=e.url,i=e.version,d=r.default.createElement("a",{className:l("badge"),href:n||"https://www.npmjs.org/package/".concat(a,"/v/").concat(i)},r.default.createElement("span",{className:l("badge-name")},n?"package":"npm"),r.default.createElement("span",{className:l("badge-version")},"v".concat(i))),o=t?r.default.createElement("a",{className:l("badge"),href:t},r.default.createElement("span",{className:l("badge-name")},"github"),r.default.createElement("span",{className:l("badge-version")},"source")):void 0;return r.default.createElement("div",{className:l("badge-container")},d,o)};m.propTypes=s;var u=m;t.Z=u},67131:function(e,t,a){a.r(t),a.d(t,{default:function(){return m}});a(67294);var n=a(81254),r=a(80848),i=["components"];function d(){return d=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},d.apply(this,arguments)}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l={},s="wrapper";function m(e){var t=e.components,a=o(e,i);return(0,n.mdx)(s,d({},l,a,{components:t,mdxType:"MDXLayout"}),(0,n.mdx)(r.C,{mdxType:"Badge"}),(0,n.mdx)("h1",{id:"terra-status-view-upgrade-guide"},"Terra Status View Upgrade Guide"),(0,n.mdx)("h2",{id:"changes-from-version-3-to-version-4"},"Changes from version 3 to version 4"),(0,n.mdx)("h3",{id:"props"},"Props"),(0,n.mdx)("ul",null,(0,n.mdx)("li",{parentName:"ul"},(0,n.mdx)("strong",{parentName:"li"},"Removed")," children prop. This is ",(0,n.mdx)("strong",{parentName:"li"},"replaced")," by ",(0,n.mdx)("inlineCode",{parentName:"li"},"buttonAttrs"),". This prop accepts an array of objects containing terra-button properties. Remember that React requires a unique key to be attached to each element in an array. Example:")),(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-jsx"},"const buttons = [\n  {\n    key: 1,\n    text: 'Action 1',\n    onClick: handleOnAction1,\n  }, {\n    key: 2,\n    text: 'Action 2',\n    onClick: handeOnAction2,\n  },\n];\n\n<StatusView buttonAttrs={buttons} />\n")),(0,n.mdx)("ul",null,(0,n.mdx)("li",{parentName:"ul"},(0,n.mdx)("strong",{parentName:"li"},"Removed")," default behaviour of rendering an error view. Please provide props."),(0,n.mdx)("li",{parentName:"ul"},(0,n.mdx)("strong",{parentName:"li"},"Removed")," the ",(0,n.mdx)("inlineCode",{parentName:"li"},"custom")," variant. Use first class props ",(0,n.mdx)("inlineCode",{parentName:"li"},"title"),", ",(0,n.mdx)("inlineCode",{parentName:"li"},"message"),", or ",(0,n.mdx)("inlineCode",{parentName:"li"},"customGlyph")," to render respective sections or override a variant's sections.")),(0,n.mdx)("h3",{id:"resizing"},"Resizing"),(0,n.mdx)("ul",null,(0,n.mdx)("li",{parentName:"ul"},"Use ",(0,n.mdx)("inlineCode",{parentName:"li"},"isGlyphHidden")," to show or hide the glyph. The ",(0,n.mdx)("inlineCode",{parentName:"li"},"onComponentMount")," logic to do this has been removed."),(0,n.mdx)("li",{parentName:"ul"},'Status view defaults to a "centered" alignment, based on available size and remaining space. The top will contain ',(0,n.mdx)("inlineCode",{parentName:"li"},"40%")," of space, while the remaining ",(0,n.mdx)("inlineCode",{parentName:"li"},"60%")," is delegated to the bottom. Use ",(0,n.mdx)("inlineCode",{parentName:"li"},"setAlignTop")," to remove this distribution and render the status view at the top of the container.")),(0,n.mdx)("h2",{id:"changes-from-version-2-to-version-3"},"Changes from version 2 to version 3"),(0,n.mdx)("h3",{id:"changes-to-css-custom-properties"},"Changes to CSS Custom Properties"),(0,n.mdx)("h4",{id:"renamed"},"Renamed"),(0,n.mdx)("table",null,(0,n.mdx)("thead",{parentName:"table"},(0,n.mdx)("tr",{parentName:"thead"},(0,n.mdx)("th",{parentName:"tr",align:null},"Previous"),(0,n.mdx)("th",{parentName:"tr",align:null},"New"))),(0,n.mdx)("tbody",{parentName:"table"},(0,n.mdx)("tr",{parentName:"tbody"},(0,n.mdx)("td",{parentName:"tr",align:null},"--terra-status-view-glyph-no-data"),(0,n.mdx)("td",{parentName:"tr",align:null},"--terra-status-view-glyph-no-data-background")),(0,n.mdx)("tr",{parentName:"tbody"},(0,n.mdx)("td",{parentName:"tr",align:null},"--terra-status-view-glyph-no-matching-results"),(0,n.mdx)("td",{parentName:"tr",align:null},"--terra-status-view-glyph-no-matching-results-background")),(0,n.mdx)("tr",{parentName:"tbody"},(0,n.mdx)("td",{parentName:"tr",align:null},"--terra-status-view-glyph-not-authorized"),(0,n.mdx)("td",{parentName:"tr",align:null},"--terra-status-view-glyph-not-authorized-background")),(0,n.mdx)("tr",{parentName:"tbody"},(0,n.mdx)("td",{parentName:"tr",align:null},"--terra-status-view-glyph-error"),(0,n.mdx)("td",{parentName:"tr",align:null},"--terra-status-view-glyph-error-background")),(0,n.mdx)("tr",{parentName:"tbody"},(0,n.mdx)("td",{parentName:"tr",align:null},"--terra-status-view-actions-flex-direction-small-width"),(0,n.mdx)("td",{parentName:"tr",align:null},"--terra-status-view-actions-small-width-flex-direction")))))}m.isMDXComponent=!0},80848:function(e,t,a){a.d(t,{C:function(){return i}});var n=a(67294),r=a(22863),i=function(e){var t=e.url;return n.createElement(r.Z,{src:"https://github.com/cerner/terra-core/tree/main/packages/terra-status-view",name:"terra-status-view",version:"4.67.0",url:t})}},17422:function(e,t,a){a.r(t),t.default={badge:"Badges-module__badge___vex-+","badge-container":"Badges-module__badge-container___B13Mv","badge-name":"Badges-module__badge-name___jkN0m","badge-version":"Badges-module__badge-version___agZ+P"}}}]);