"use strict";(self.webpackChunkterra_ui=self.webpackChunkterra_ui||[]).push([[53048,83532,61152,38768,16388,73056,50676,28296,5912,4484,82104,96528,74148,51768,7004,84624,62240,39860,95100,76480,54100],{11416:function(e,a,n){var d=n(22411);a.c=void 0;var l=d(n(11504)),r=d(n(3268)),m=d(n(74824)),t=d(n(58112)),i=m.default.bind(t.default),o={name:r.default.string.isRequired,src:r.default.string,url:r.default.string,version:r.default.string.isRequired},p=function(e){var a=e.src,n=e.name,d=e.url,r=e.version,m=l.default.createElement("a",{className:i("badge"),href:d||"https://www.npmjs.org/package/".concat(n,"/v/").concat(r)},l.default.createElement("span",{className:i("badge-name")},d?"package":"npm"),l.default.createElement("span",{className:i("badge-version")},"v".concat(r))),t=a?l.default.createElement("a",{className:i("badge"),href:a},l.default.createElement("span",{className:i("badge-name")},"github"),l.default.createElement("span",{className:i("badge-version")},"source")):void 0;return l.default.createElement("div",{className:i("badge-container")},m,t)};p.propTypes=o;a.c=p},53048:function(e,a,n){n.r(a),n.d(a,{default:function(){return p}});n(11504);var d=n(69788),l=n(60556),r=["components"];function m(){return m=Object.assign?Object.assign.bind():function(e){for(var a=1;a<arguments.length;a++){var n=arguments[a];for(var d in n)Object.prototype.hasOwnProperty.call(n,d)&&(e[d]=n[d])}return e},m.apply(this,arguments)}function t(e,a){if(null==e)return{};var n,d,l=function(e,a){if(null==e)return{};var n,d,l={},r=Object.keys(e);for(d=0;d<r.length;d++)n=r[d],a.indexOf(n)>=0||(l[n]=e[n]);return l}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(d=0;d<r.length;d++)n=r[d],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var i={},o="wrapper";function p(e){var a=e.components,n=t(e,r);return(0,d.mdx)(o,m({},i,n,{components:a,mdxType:"MDXLayout"}),(0,d.mdx)(l.k,{mdxType:"Badge"}),(0,d.mdx)("h1",{id:"terra-table-upgrade-guide"},"Terra Table Upgrade Guide"),(0,d.mdx)("h2",{id:"changes-from-4x-to-50"},"Changes from 4.x to 5.0"),(0,d.mdx)("p",null,"The latest changes in the Table component reflects the Terra Accessibility initiative. The new version reflects an implementation to make components more accessible."),(0,d.mdx)("h2",{id:"new-props"},"New Props"),(0,d.mdx)("ul",null,(0,d.mdx)("li",{parentName:"ul"},"Added ",(0,d.mdx)("inlineCode",{parentName:"li"},"id")),(0,d.mdx)("li",{parentName:"ul"},"Added ",(0,d.mdx)("inlineCode",{parentName:"li"},"rows")),(0,d.mdx)("li",{parentName:"ul"},"Added ",(0,d.mdx)("inlineCode",{parentName:"li"},"sections")),(0,d.mdx)("li",{parentName:"ul"},"Added ",(0,d.mdx)("inlineCode",{parentName:"li"},"ariaLabelledBy")),(0,d.mdx)("li",{parentName:"ul"},"Added ",(0,d.mdx)("inlineCode",{parentName:"li"},"ariaLabel")),(0,d.mdx)("li",{parentName:"ul"},"Added ",(0,d.mdx)("inlineCode",{parentName:"li"},"columnResizeIncrement")),(0,d.mdx)("li",{parentName:"ul"},"Added ",(0,d.mdx)("inlineCode",{parentName:"li"},"pinnedColumns")),(0,d.mdx)("li",{parentName:"ul"},"Added ",(0,d.mdx)("inlineCode",{parentName:"li"},"overflowColumns")),(0,d.mdx)("li",{parentName:"ul"},"Added ",(0,d.mdx)("inlineCode",{parentName:"li"},"defaultColumnWidth")),(0,d.mdx)("li",{parentName:"ul"},"Added ",(0,d.mdx)("inlineCode",{parentName:"li"},"columnHeaderHeight")),(0,d.mdx)("li",{parentName:"ul"},"Added ",(0,d.mdx)("inlineCode",{parentName:"li"},"rowHeight")),(0,d.mdx)("li",{parentName:"ul"},"Added ",(0,d.mdx)("inlineCode",{parentName:"li"},"rowHeaderIndex")),(0,d.mdx)("li",{parentName:"ul"},"Added ",(0,d.mdx)("inlineCode",{parentName:"li"},"onColumnResize")),(0,d.mdx)("li",{parentName:"ul"},"Added ",(0,d.mdx)("inlineCode",{parentName:"li"},"onRowSelect")),(0,d.mdx)("li",{parentName:"ul"},"Added ",(0,d.mdx)("inlineCode",{parentName:"li"},"onColumnSelect")),(0,d.mdx)("li",{parentName:"ul"},"Added ",(0,d.mdx)("inlineCode",{parentName:"li"},"onSectionSelect")),(0,d.mdx)("li",{parentName:"ul"},"Added ",(0,d.mdx)("inlineCode",{parentName:"li"},"onRowSelectionHeaderSelect")),(0,d.mdx)("li",{parentName:"ul"},"Added ",(0,d.mdx)("inlineCode",{parentName:"li"},"rowSelectionMode")),(0,d.mdx)("li",{parentName:"ul"},"Added ",(0,d.mdx)("inlineCode",{parentName:"li"},"hasVisibleColumnHeaders")),(0,d.mdx)("li",{parentName:"ul"},"Added ",(0,d.mdx)("inlineCode",{parentName:"li"},"isStriped")),(0,d.mdx)("li",{parentName:"ul"},"Added ",(0,d.mdx)("a",{parentName:"li",href:"/terra-ui/components/cerner-terra-framework-docs/table/about"},"Column API")),(0,d.mdx)("li",{parentName:"ul"},"Added ",(0,d.mdx)("a",{parentName:"li",href:"/terra-ui/components/cerner-terra-framework-docs/table/about"},"Section API")),(0,d.mdx)("li",{parentName:"ul"},"Added ",(0,d.mdx)("a",{parentName:"li",href:"/terra-ui/components/cerner-terra-framework-docs/table/about"},"Row API")),(0,d.mdx)("li",{parentName:"ul"},"Added ",(0,d.mdx)("a",{parentName:"li",href:"/terra-ui/components/cerner-terra-framework-docs/table/about"},"Cell API")),(0,d.mdx)("li",{parentName:"ul"},"Added ",(0,d.mdx)("a",{parentName:"li",href:"/terra-ui/components/cerner-terra-framework-docs/table/about"},"Table Constants"))),(0,d.mdx)("h2",{id:"removed-props"},"Removed Props"),(0,d.mdx)("ul",null,(0,d.mdx)("li",{parentName:"ul"},"Removed ",(0,d.mdx)("inlineCode",{parentName:"li"},"bodyData")),(0,d.mdx)("li",{parentName:"ul"},"Removed ",(0,d.mdx)("inlineCode",{parentName:"li"},"checkStyle")),(0,d.mdx)("li",{parentName:"ul"},"Removed ",(0,d.mdx)("inlineCode",{parentName:"li"},"dividerStyle")),(0,d.mdx)("li",{parentName:"ul"},"Removed ",(0,d.mdx)("inlineCode",{parentName:"li"},"columnWidths")),(0,d.mdx)("li",{parentName:"ul"},"Removed ",(0,d.mdx)("inlineCode",{parentName:"li"},"hasChevrons")),(0,d.mdx)("li",{parentName:"ul"},"Removed ",(0,d.mdx)("inlineCode",{parentName:"li"},"headerData")),(0,d.mdx)("li",{parentName:"ul"},"Removed ",(0,d.mdx)("inlineCode",{parentName:"li"},"headerNode")),(0,d.mdx)("li",{parentName:"ul"},"Removed ",(0,d.mdx)("inlineCode",{parentName:"li"},"fill")),(0,d.mdx)("li",{parentName:"ul"},"Removed ",(0,d.mdx)("inlineCode",{parentName:"li"},"footerNode")),(0,d.mdx)("li",{parentName:"ul"},"Removed ",(0,d.mdx)("inlineCode",{parentName:"li"},"numberOfColumns")),(0,d.mdx)("li",{parentName:"ul"},"Removed ",(0,d.mdx)("inlineCode",{parentName:"li"},"numberOfRows")),(0,d.mdx)("li",{parentName:"ul"},"Removed ",(0,d.mdx)("inlineCode",{parentName:"li"},"cellPaddingStyle")),(0,d.mdx)("li",{parentName:"ul"},"Removed ",(0,d.mdx)("inlineCode",{parentName:"li"},"rowStyle")),(0,d.mdx)("li",{parentName:"ul"},"Removed ",(0,d.mdx)("inlineCode",{parentName:"li"},"scrollRefCallback")),(0,d.mdx)("li",{parentName:"ul"},"Removed ",(0,d.mdx)("inlineCode",{parentName:"li"},"showSimpleFooter")),(0,d.mdx)("li",{parentName:"ul"},"Removed ",(0,d.mdx)("inlineCode",{parentName:"li"},"summary")),(0,d.mdx)("li",{parentName:"ul"},"Removed ",(0,d.mdx)("inlineCode",{parentName:"li"},"summaryId"))))}p.isMDXComponent=!0},60556:function(e,a,n){n.d(a,{k:function(){return r}});var d=n(11504),l=n(11416),r=function(e){var a=e.url;return d.createElement(l.c,{src:"https://github.com/cerner/terra-framework/tree/main/packages/terra-table",name:"terra-table",version:"5.5.0",url:a})}},58112:function(e,a,n){n.r(a),a.default={badge:"Badges-module__badge___vex-+","badge-container":"Badges-module__badge-container___B13Mv","badge-name":"Badges-module__badge-name___jkN0m","badge-version":"Badges-module__badge-version___agZ+P"}}}]);