"use strict";(self.webpackChunkterra_ui=self.webpackChunkterra_ui||[]).push([[57530],{22863:function(e,t,n){var i=n(64836);t.Z=void 0;var a=i(n(67294)),o=i(n(45697)),r=i(n(19845)),l=i(n(17422)),d=r.default.bind(l.default),s={name:o.default.string.isRequired,src:o.default.string,url:o.default.string,version:o.default.string.isRequired},u=function(e){var t=e.src,n=e.name,i=e.url,o=e.version,r=a.default.createElement("a",{className:d("badge"),href:i||"https://www.npmjs.org/package/".concat(n,"/v/").concat(o)},a.default.createElement("span",{className:d("badge-name")},i?"package":"npm"),a.default.createElement("span",{className:d("badge-version")},"v".concat(o))),l=t?a.default.createElement("a",{className:d("badge"),href:t},a.default.createElement("span",{className:d("badge-name")},"github"),a.default.createElement("span",{className:d("badge-version")},"source")):void 0;return a.default.createElement("div",{className:d("badge-container")},r,l)};u.propTypes=s;t.Z=u},40996:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=s(n(67294)),a=s(n(45697)),o=s(n(19845)),r=s(n(50026)),l=s(n(66983)),d=["children"];function s(e){return e&&e.__esModule?e:{default:e}}function u(){return u=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},u.apply(this,arguments)}function c(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var h=o.default.bind(l.default),f=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","true")},m=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","false")},p={children:a.default.string},g=function(e){var t=e.children,n=c(e,d),a=i.default.useContext(r.default),l=(0,o.default)(h(["button",a.className]),n.className);return i.default.createElement("button",u({},n,{type:"button",className:l,onBlur:f,onMouseDown:m,"data-focus-styles-enabled":!0}),t)};g.propTypes=p;t.default=g},59278:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=d(n(67294)),a=d(n(45697)),o=d(n(19845)),r=d(n(50026)),l=d(n(30866));function d(e){return e&&e.__esModule?e:{default:e}}var s=o.default.bind(l.default),u={ariaLevel:a.default.oneOf(["2","3","4","5","6"]),children:a.default.node,variant:a.default.oneOf(["ux-recommendation","caution","deprecation","maintenance","important","not-supported"])},c=function(e){var t=e.ariaLevel,n=e.variant,a=e.children,o=i.default.useContext(r.default);return i.default.createElement("div",{className:s("notice",n,o.className)},i.default.createElement("div",{className:s("accessory"),"aria-hidden":"true",focusable:"false"}),i.default.createElement("div",{role:"heading",className:s("title"),"aria-level":t},i.default.createElement("span",null,function(e){return"ux-recommendation"===e?"UX Recommendation":"caution"===e?"Caution":"deprecation"===e?"Deprecation Notice":"maintenance"===e?"In Maintenance":"important"===e?"Important":"not-supported"===e?"Hazards for Incorrect Usage":"error"}(n))),i.default.createElement("div",{className:s("children")},function(e){return"not-supported"===e?i.default.createElement(i.default.Fragment,null,i.default.createElement("p",{className:s("paragraph")},"This component was designed and tested according to the documented implementation."),i.default.createElement("p",{className:s("paragraph")},"Using the component incorrectly:",i.default.createElement("ul",{className:s("list")},i.default.createElement("li",null,"will likely result in improper composition and create accessibility issues"),i.default.createElement("li",null,"may cause erratic or broken behaviors and styles"),i.default.createElement("li",null,i.default.createElement("strong",null,"will not be supported "),"or enhanced to allow for incorrect use")))):null}(n),i.default.Children.map(a,(function(e){return"string"==typeof e?i.default.createElement("p",null,e):e}))))};c.propTypes=u,c.defaultProps={ariaLevel:"2",variant:"important"};t.default=c},47306:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=u(n(67294)),a=u(n(45697)),o=u(n(93967)),r=u(n(19845)),l=u(n(50026)),d=u(n(42620)),s=["title"];function u(e){return e&&e.__esModule?e:{default:e}}function c(){return c=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},c.apply(this,arguments)}function h(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var f=r.default.bind(d.default),m={title:a.default.string},p=function(e){var t=e.title,n=h(e,s),a=i.default.useContext(l.default),r=(0,o.default)(f(["placeholder",a.className]),n.className),d=f(["inner"]);return i.default.createElement("div",c({},n,{className:r}),i.default.createElement("div",{className:d},i.default.createElement("p",{className:f("title")},t)))};p.propTypes=m,p.defaultProps={title:""};t.default=p},34261:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"Button",{enumerable:!0,get:function(){return o.default}}),Object.defineProperty(t,"Notice",{enumerable:!0,get:function(){return i.default}}),Object.defineProperty(t,"Placeholder",{enumerable:!0,get:function(){return a.default}});var i=r(n(59278)),a=r(n(47306)),o=r(n(40996));function r(e){return e&&e.__esModule?e:{default:e}}},6805:function(e,t,n){var i=n(64836);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=i(n(67294)),o=i(n(19845)),r=i(n(43315)),l=o.default.bind(r.default);t.default=function(e){var t=e.children;return a.default.createElement("div",{className:l("main-content")},t)}},76173:function(e,t,n){n.d(t,{C:function(){return o}});var i=n(67294),a=n(22863),o=function(e){var t=e.url;return i.createElement(a.Z,{src:"https://github.com/cerner/terra-framework/tree/main/packages/terra-infinite-list",name:"terra-infinite-list",version:"3.42.0",url:t})}},17422:function(e,t,n){n.r(t),t.default={badge:"Badges-module__badge___vex-+","badge-container":"Badges-module__badge-container___B13Mv","badge-name":"Badges-module__badge-name___jkN0m","badge-version":"Badges-module__badge-version___agZ+P"}},66983:function(e,t,n){n.r(t),t.default={"clinical-lowlight-theme":"Button-module__clinical-lowlight-theme___TyZWB","orion-fusion-theme":"Button-module__orion-fusion-theme___q-FcQ",button:"Button-module__button___QuCn2","is-active":"Button-module__is-active___Z8AuK"}},30866:function(e,t,n){n.r(t),t.default={"clinical-lowlight-theme":"Notice-module__clinical-lowlight-theme___aa5xV","orion-fusion-theme":"Notice-module__orion-fusion-theme___QAE-T",notice:"Notice-module__notice___GWkPA",children:"Notice-module__children___lDYsm",accessory:"Notice-module__accessory___wkLOG",title:"Notice-module__title___6H5tc","ux-recommendation":"Notice-module__ux-recommendation___N8BuK",caution:"Notice-module__caution___hPrVl",deprecation:"Notice-module__deprecation___g1drA",maintenance:"Notice-module__maintenance___kWLIZ",important:"Notice-module__important___p5DiF","not-supported":"Notice-module__not-supported___34bHd",paragraph:"Notice-module__paragraph___5h-w1",list:"Notice-module__list___M2Kxj"}},42620:function(e,t,n){n.r(t),t.default={"clinical-lowlight-theme":"Placeholder-module__clinical-lowlight-theme___Obm9K","orion-fusion-theme":"Placeholder-module__orion-fusion-theme___svHY+",placeholder:"Placeholder-module__placeholder___ZZDXd",inner:"Placeholder-module__inner___fJq9o",title:"Placeholder-module__title___teBSo"}},43315:function(e,t,n){n.r(t),t.default={placeholder:"InfiniteListDocExampleCommon-module__placeholder___F4qLk","item-content":"InfiniteListDocExampleCommon-module__item-content___Q4mK8","main-content":"InfiniteListDocExampleCommon-module__main-content___ZKJiv"}},32404:function(e,t,n){n.r(t),t.default={"infinite-list":"InfiniteList-module__infinite-list___oi3yH","infinite-hidden":"InfiniteList-module__infinite-hidden___YgQc6","full-loading":"InfiniteList-module__full-loading___FMz-n",loading:"InfiniteList-module__loading___Dxbpd",spacer:"InfiniteList-module__spacer___FzOiF"}},80851:function(e,t,n){var i=n(64836);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=i(n(10434)),o=i(n(70215)),r=i(n(56690)),l=i(n(89728)),d=i(n(66115)),s=i(n(61655)),u=i(n(94993)),c=i(n(73808)),h=i(n(67294)),f=i(n(45697)),m=i(n(19845)),p=n(25387),g=i(n(32018)),_=i(n(93670)),v=i(n(29270)),y=i(n(24625)),b=i(n(32404)),I=["ariaLabel","children","dividerStyle","initialLoadingIndicator","intl","isFinishedLoading","onRequestItems","paddingStyle","progressiveLoadingIndicator","progressiveLoadingMessage","role","refCallback"];function x(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,i=(0,c.default)(e);if(t){var a=(0,c.default)(this).constructor;n=Reflect.construct(i,arguments,a)}else n=i.apply(this,arguments);return(0,u.default)(this,n)}}var C=m.default.bind(b.default),N={ariaLabel:f.default.string,children:f.default.node,dividerStyle:f.default.oneOf(["none","standard","bottom-only"]),initialLoadingIndicator:f.default.element,intl:f.default.shape({formatMessage:f.default.func}),isFinishedLoading:f.default.bool,onRequestItems:f.default.func,paddingStyle:f.default.oneOf(["none","standard","compact"]),progressiveLoadingIndicator:f.default.element,progressiveLoadingMessage:f.default.string,role:f.default.string,refCallback:f.default.func},B={children:[],dividerStyle:"none",isFinishedLoading:!1,paddingStyle:"none",progressiveLoadingMessage:void 0,role:"none"},T=function(e,t){return h.default.createElement("div",{className:C(["spacer"]),style:{height:e},key:"infinite-spacer-".concat(t)})},k=function(e){(0,s.default)(n,e);var t=x(n);function n(e){var i;return(0,r.default)(this,n),(i=t.call(this,e)).update=i.update.bind((0,d.default)(i)),i.resetCache=i.resetCache.bind((0,d.default)(i)),i.setContentNode=i.setContentNode.bind((0,d.default)(i)),i.updateItemCache=i.updateItemCache.bind((0,d.default)(i)),i.initializeItemCache=i.initializeItemCache.bind((0,d.default)(i)),i.updateScrollGroups=i.updateScrollGroups.bind((0,d.default)(i)),i.handleRenderCompletion=i.handleRenderCompletion.bind((0,d.default)(i)),i.handleResize=i.resizeDebounce(i.handleResize.bind((0,d.default)(i))),i.resetTimeout=i.resetTimeout.bind((0,d.default)(i)),i.wrapChild=i.wrapChild.bind((0,d.default)(i)),i.ariaLiveStatus="",i.updateAriaLiveLoadingStatus=i.updateAriaLiveLoadingStatus.bind((0,d.default)(i)),i.resetCache(),i.initializeItemCache(e),i}return(0,l.default)(n,[{key:"componentDidMount",value:function(){var e=this;this.contentNode&&(this.resizeObserver=new g.default((function(t){e.content=t[0].contentRect,e.isCalculating||(e.animationFrameID=window.requestAnimationFrame((function(){e.resetCache(),e.forceUpdate()})))})),this.handleResize(this.content),this.resizeObserver.observe(this.contentNode)),this.contentNode.addEventListener("scroll",this.update),this.updateScrollGroups(),this.handleRenderCompletion()}},{key:"shouldComponentUpdate",value:function(e){var t=h.default.Children.count(e.children);return t>this.childCount?(this.lastChildIndex=this.childCount,this.loadingIndex+=1,this.updateItemCache(e)):t<this.childCount?this.initializeItemCache(e):this.childrenArray=h.default.Children.toArray(e.children),!0}},{key:"componentDidUpdate",value:function(){this.isCalculating&&(this.isCalculating=!1,this.handleResize(this.content)),this.handleRenderCompletion()}},{key:"componentWillUnmount",value:function(){this.contentNode&&(clearTimeout(this.timer),window.cancelAnimationFrame(this.animationFrameID),this.resizeObserver.disconnect(this.contentNode),this.contentNode.removeEventListener("scroll",this.update),this.content=null)}},{key:"handleRenderCompletion",value:function(){this.renderNewChildren=!1,this.preventUpdate=!1,this.lastChildIndex=this.childCount,this.isRenderingNew?(this.isRenderingNew=!1,this.update(null,!1,!0)):this.contentNode&&y.default.shouldTriggerItemRequest(y.default.getContentData(this.contentNode))&&this.triggerItemRequest()}},{key:"handleResize",value:function(){this.scrollHeight===this.contentNode.scrollHeight&&this.clientHeight===this.contentNode.clientHeight||this.adjustHeight(),this.forceUpdate()}},{key:"setContentNode",value:function(e){var t=!this.contentNode;this.contentNode=e,this.contentNode&&t&&this.updateScrollGroups()}},{key:"triggerItemRequest",value:function(){this.props.isFinishedLoading||this.hasRequestedItems||this.isRenderingNew||!this.props.onRequestItems||(this.hasRequestedItems=!0,this.props.onRequestItems(),this.updateAriaLiveLoadingStatus())}},{key:"updateAriaLiveLoadingStatus",value:function(){var e=this;this.ariaLiveStatus=this.props.progressiveLoadingMessage?this.props.progressiveLoadingMessage:this.props.intl.formatMessage({id:"Terra.InfiniteList.loading"}),setTimeout((function(){e.ariaLiveStatus=""}),1e3)}},{key:"updateItemCache",value:function(e){this.childCount=h.default.Children.count(e.children),this.childrenArray=h.default.Children.toArray(e.children),this.hasRequestedItems=!1,this.renderNewChildren=!0}},{key:"initializeItemCache",value:function(e){this.loadingIndex=0,this.lastChildIndex=-1,this.itemsByIndex=[],this.scrollGroups=[],this.boundary={topBoundryIndex:-1,hiddenTopHeight:-1,bottomBoundryIndex:-1,hiddenBottomHeight:-1},this.updateItemCache(e)}},{key:"resetTimeout",value:function(e,t,n,i){var a=this;clearTimeout(this.timer),this.timer=setTimeout((function(){a.last=i,a.disableScroll=!1,e.apply(n,t)}),250)}},{key:"resizeDebounce",value:function(e){var t=this;return function(){for(var n=t,i=performance.now(),a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];t.last&&i<t.last+250||(t.last=i,t.disableScroll=!0),t.resetTimeout(e,o,n,i)}}},{key:"resetCache",value:function(){this.animationFrameID=null,this.isCalculating=!0}},{key:"update",value:function(e,t,n){if(this.contentNode&&!this.disableScroll&&!this.preventUpdate){var i=y.default.getContentData(this.contentNode),a=y.default.getHiddenItems(this.scrollGroups,i,this.boundary.topBoundryIndex,this.boundary.bottomBoundryIndex);this.scrollHeight=i.scrollHeight,this.clientHeight=i.clientHeight,(t||a.topHiddenItem.index!==this.boundary.topBoundryIndex||a.bottomHiddenItem.index!==this.boundary.bottomBoundryIndex)&&(this.preventUpdate=!0,this.boundary={topBoundryIndex:a.topHiddenItem.index,hiddenTopHeight:a.topHiddenItem.height,bottomBoundryIndex:a.bottomHiddenItem.index,hiddenBottomHeight:a.bottomHiddenItem.height},this.forceUpdate()),!n&&y.default.shouldTriggerItemRequest(i)&&this.triggerItemRequest()}}},{key:"updateScrollGroups",value:function(){if(this.contentNode){var e=0,t=0,n=!0,i=1*this.contentNode.clientHeight;this.scrollGroups=[];for(var a=0;a<this.itemsByIndex.length;a+=1){var o=this.itemsByIndex[a];this.scrollGroups[t]&&o.height>=i&&(e=0,t+=1,n=!0),e+=o.height,this.scrollGroups[t]=this.scrollGroups[t]||{items:[]},this.scrollGroups[t].items.push(a),this.scrollGroups[t].height=e,this.itemsByIndex[a].groupIndex=t,n&&(this.scrollGroups[t].offsetTop=this.itemsByIndex[a].offsetTop,n=!1),e>=i&&(e=0,t+=1,n=!0)}}}},{key:"updateHeight",value:function(e,t){if(e){this.itemsByIndex[t]=this.itemsByIndex[t]||{};var n=!1,i=e.getBoundingClientRect().height;(!this.itemsByIndex[t].height||Math.abs(this.itemsByIndex[t].height-i)>1)&&(this.itemsByIndex[t].height=i,n=!0),(!this.itemsByIndex[t].offsetTop||Math.abs(this.itemsByIndex[t].offsetTop-e.offsetTop)>1)&&(this.itemsByIndex[t].offsetTop=e.offsetTop),this.itemsByIndex.length===this.childCount&&(this.scrollGroups.length?n&&this.adjustHeight():this.updateScrollGroups())}}},{key:"adjustHeight",value:function(){var e=this;this.contentNode&&(this.itemsByIndex.forEach((function(t,n){var i=e.contentNode.querySelector('[data-infinite-list-index="'.concat(n,'"]'));if(i){var a=i.getBoundingClientRect().height;(!e.itemsByIndex[n].height||Math.abs(a-e.itemsByIndex[n].height)>1)&&(e.itemsByIndex[n].height=a),(!e.itemsByIndex[n].offsetTop||Math.abs(e.itemsByIndex[n].offsetTop-i.offsetTop)>1)&&(e.itemsByIndex[n].offsetTop=i.offsetTop),e.adjustTrailingItems(n)}})),this.updateScrollGroups(),this.boundary={topBoundryIndex:-1,hiddenTopHeight:-1,bottomBoundryIndex:-1,hiddenBottomHeight:-1},this.update(null,!0))}},{key:"adjustTrailingItems",value:function(e){for(var t=this.itemsByIndex[e].offsetTop,n=this.itemsByIndex[e].height,i=e+1;i<this.itemsByIndex.length;i+=1)t+=n,n=this.itemsByIndex[i].height,this.itemsByIndex[i].offsetTop=t}},{key:"wrapChild",value:function(e,t){var n=this,i={refCallback:function(i){n.updateHeight(i,t),e.props.refCallback&&e.props.refCallback(i)},"data-infinite-list-index":t};return h.default.cloneElement(e,i)}},{key:"render",value:function(){var e,t,n=this.props,i=n.ariaLabel,r=(n.children,n.dividerStyle),l=n.initialLoadingIndicator,d=(n.intl,n.isFinishedLoading),s=(n.onRequestItems,n.paddingStyle),u=n.progressiveLoadingIndicator,c=(n.progressiveLoadingMessage,n.role),f=n.refCallback,m=(0,o.default)(n,I),p=T("".concat(this.boundary.hiddenTopHeight>0?this.boundary.hiddenTopHeight:0,"px"),0),g=T("".concat(this.boundary.hiddenBottomHeight>0?this.boundary.hiddenBottomHeight:0,"px"),1);d||(this.childCount>0?e=h.default.createElement("div",{className:C("spacer"),key:"infinite-spinner-row-".concat(this.loadingIndex)},u):t=h.default.createElement("div",{className:C("spacer"),key:"infinite-spinner-full",style:{height:"100%"}},l));var b,x,N={dividerStyle:r,paddingStyle:s};if(c&&c.length>0&&"none"!==c&&(N.role=c),!t){var B=this.lastChildIndex;!this.scrollGroups.length&&this.lastChildIndex<=0||!this.renderNewChildren?B=this.childCount:(b=h.default.createElement(_.default,(0,a.default)({},N,{className:C(["infinite-hidden"])}),y.default.getNewChildren(this.lastChildIndex,this.childrenArray,this.wrapChild)),this.isRenderingNew=!0),x=y.default.getVisibleChildren(this.scrollGroups,this.childrenArray,this.boundary.topBoundryIndex,this.boundary.bottomBoundryIndex,this.wrapChild,B)}return h.default.createElement(h.default.Fragment,null,h.default.createElement("div",(0,a.default)({},m,{className:C(["infinite-list",m.className]),ref:this.setContentNode}),t,p,h.default.createElement(_.default,(0,a.default)({},N,{"aria-label":i,refCallback:f}),x),g,e),b,h.default.createElement(v.default,{"aria-atomic":"true","aria-live":"assertive",text:this.ariaLiveStatus}))}}]),n}(h.default.Component);k.propTypes=N,k.defaultProps=B;var H=(0,p.injectIntl)(k);t.default=H},24625:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n={getHiddenItems:function(e,t,n,i){if(!e||!e.length)return{topHiddenItem:{index:-1,height:-1},bottomHiddenItem:{index:-1,height:-1}};var a,o,r=t.validTop,l=t.validBottom;if(r>0){var d=n;d<0&&(d=0);var s=e[d];a=s.offsetTop+s.height<=r?function(e,t,n){for(var i={index:-1,height:-1},a=t;a<e.length;a+=1){var o=e[a];if(!(o.offsetTop+o.height<=n))break;i.index=a,i.height=o.offsetTop+o.height}return i}(e,d,r):function(e,t,n){for(var i={index:-1,height:-1},a=t;a>=0;a-=1){var o=e[a];if(o.offsetTop+o.height<=n){i.index=a,i.height=o.offsetTop+o.height;break}}return i}(e,d,r)}else a={index:-1,height:-1};var u=i;return u<0&&(u=0),o=e[u].offsetTop>=l?function(e,t,n){for(var i={index:-1,height:-1},a=e[e.length-1],o=t;o>=0;o-=1){var r=e[o];if(!(r.offsetTop>=n))break;i.index=o,i.height=a.offsetTop+a.height-r.offsetTop}return i}(e,u,l):function(e,t,n){for(var i={index:-1,height:-1},a=e[e.length-1],o=t;o<e.length;o+=1){var r=e[o];if(r.offsetTop>=n){i.index=o,i.height=a.offsetTop+a.height-r.offsetTop;break}}return i}(e,u,l),{topHiddenItem:a,bottomHiddenItem:o}},getContentData:function(e){var t=e.scrollTop,n=e.scrollHeight,i=e.clientHeight;return{scrollTop:t,scrollHeight:n,clientHeight:i,validTop:t-.5*i,validBottom:t+1.5*i}},getNewChildren:function(e,t,n){for(var i=[],a=e;a<t.length;a+=1)i.push(n(t[a],a,!0));return i},getVisibleChildren:function(e,t,n,i,a,o){if(!t.length)return null;var r=!1,l=n;l<0&&(l=-1,r=!0);var d=!1,s=i;s<0&&(s=e.length,d=!0);var u=[];if(!r||!d){for(var c=l+1;c<s;c+=1)for(var h=e[c].items,f=h.length,m=0;m<f;m+=1){var p=h[m];u.push(a(t[p],p,!0))}return u}for(var g=0;g<o;g+=1)u.push(a(t[g],g,!0));return u},shouldTriggerItemRequest:function(e){return e.scrollHeight-(e.scrollTop+e.clientHeight)<e.clientHeight}};t.default=n},30869:function(e,t,n){var i=n(64836);Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"Item",{enumerable:!0,get:function(){return a.Item}}),Object.defineProperty(t,"SectionHeader",{enumerable:!0,get:function(){return a.SectionHeader}}),Object.defineProperty(t,"SubsectionHeader",{enumerable:!0,get:function(){return a.SubsectionHeader}}),t.default=void 0;var a=n(93670),o=i(n(80851)).default;t.default=o}}]);