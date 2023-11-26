"use strict";(self.webpackChunkterra_ui=self.webpackChunkterra_ui||[]).push([[28850,45627,85565,3353,5161,45865,85355,3193,4845,46647,85161,38681,15318,40411,18101,38443,11264,34319],{49738:function(e,t,n){var a=n(64836);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a(n(67294)),i=a(n(47166)),o=n(34261),l=a(n(59137)),s=i.default.bind(l.default);t.default=function(){return r.default.createElement("div",{className:s("indicator")},r.default.createElement(o.Placeholder,{title:"I'm Loading"}))}},50635:function(e,t,n){var a=n(64836);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a(n(67294)),i=a(n(47166)),o=n(34261),l=a(n(75445)),s=i.default.bind(l.default);t.default=function(){return r.default.createElement("div",{className:s("indicator")},r.default.createElement(o.Placeholder,{title:"I'm Loading More"}))}},69089:function(e,t,n){var a=n(64836),r=n(18698);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=a(n(56690)),o=a(n(89728)),l=a(n(66115)),s=a(n(61655)),u=a(n(94993)),d=a(n(73808)),c=a(n(67294)),f=n(34261),p=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=r(e)&&"function"!=typeof e)return{default:e};var n=b(t);if(n&&n.has(e))return n.get(e);var a={__proto__:null},i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var l=i?Object.getOwnPropertyDescriptor(e,o):null;l&&(l.get||l.set)?Object.defineProperty(a,o,l):a[o]=e[o]}return a.default=e,n&&n.set(e,a),a}(n(30869)),m=a(n(47166)),h=a(n(49738)),g=a(n(50635)),y=a(n(6805)),v=a(n(95515)),x=a(n(43315));function b(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(b=function(e){return e?n:t})(e)}function w(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,a=(0,d.default)(e);if(t){var r=(0,d.default)(this).constructor;n=Reflect.construct(a,arguments,r)}else n=a.apply(this,arguments);return(0,u.default)(this,n)}}var k=m.default.bind(x.default),P=function(e){(0,s.default)(n,e);var t=w(n);function n(e){var a;return(0,i.default)(this,n),(a=t.call(this,e)).requestData=a.requestData.bind((0,l.default)(a)),a.state={isFinishedLoading:!1,currentPageKey:null,items:[]},a}return(0,o.default)(n,[{key:"requestData",value:function(){var e=this;(0,v.default)(this.state.currentPageKey).then((function(t){return e.setState((function(e){return{isFinishedLoading:t.isFinalPage,currentPageKey:t.nextPageKey,items:e.items.concat(t.items)}}))}))}},{key:"createItems",value:function(){return this.state.items.map((function(e){return c.default.createElement(p.Item,{key:e.key},c.default.createElement(f.Placeholder,{title:e.title,className:k("placeholder")}))}))}},{key:"render",value:function(){return c.default.createElement(y.default,null,c.default.createElement(p.default,{dividerStyle:"standard",isFinishedLoading:this.state.isFinishedLoading,onRequestItems:this.requestData,ariaLabel:"Progressive Loading",initialLoadingIndicator:c.default.createElement(h.default,null),progressiveLoadingIndicator:c.default.createElement(g.default,null)},this.createItems()))}}]),n}(c.default.Component);t.default=P},96731:function(e,t,n){var a=n(64836);t.Z=void 0;var r=a(n(56690)),i=a(n(89728)),o=a(n(66115)),l=a(n(61655)),s=a(n(94993)),u=a(n(73808)),d=a(n(67294)),c=a(n(69089));function f(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,a=(0,u.default)(e);if(t){var r=(0,u.default)(this).constructor;n=Reflect.construct(a,arguments,r)}else n=a.apply(this,arguments);return(0,s.default)(this,n)}}var p=function(e){(0,l.default)(n,e);var t=f(n);function n(e){var a;return(0,r.default)(this,n),(a=t.call(this,e)).updateKey=a.updateKey.bind((0,o.default)(a)),a.state={refreshKey:0},a}return(0,i.default)(n,[{key:"updateKey",value:function(){this.setState((function(e){return{refreshKey:e.refreshKey+1}}))}},{key:"render",value:function(){return d.default.createElement("div",null,d.default.createElement("button",{type:"button",onClick:this.updateKey},"Refresh"),d.default.createElement(c.default,{key:"".concat(this.state.refreshKey)}))}}]),n}(d.default.Component);t.Z=p},95515:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;t.default=function(e){return new Promise((function(t){return setTimeout((function(){t(function(e){var t=!1,n=(e>=0?e:0)+1;n>9&&(t=!0);for(var a=[],r=0;r<10;r+=1)a.push({title:"Item ".concat(10*e+r),key:"unique-".concat(10*e+r)});return{nextPageKey:n,items:a,isFinalPage:t}}(e))}),2e3)}))}},61738:function(e,t,n){n.r(t),n.d(t,{default:function(){return f}});n(67294);var a=n(81254),r=n(76173),i=n(34261),o=n(96731),l=["components"];function s(){return s=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},s.apply(this,arguments)}function u(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d={},c="wrapper";function f(e){var t=e.components,n=u(e,l);return(0,a.mdx)(c,s({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.mdx)(r.C,{mdxType:"Badge"}),(0,a.mdx)("p",null,(0,a.mdx)("a",{parentName:"p",href:"https://github.com/cerner/terra-framework/blob/main/packages/terra-infinite-list#readme"},(0,a.mdx)("img",{parentName:"a",src:"https://badgen.net/badge/status/Deprecated/grey",alt:"Deprecated"}))),(0,a.mdx)("h1",{id:"terra-infinite-list--progressive-loading-list"},"Terra Infinite List — Progressive Loading List"),(0,a.mdx)(i.Notice,{variant:"deprecation",mdxType:"Notice"},(0,a.mdx)("p",null,"The terra-infinite-list component has been deprecated and is no longer recommended for use."),(0,a.mdx)("p",null,"From a usability perspective, infinite scrolling is a pattern designed and best used when users are casually looking for or discovering things, like shopping and social media. The infinite scrolling pattern should not be used for ",(0,a.mdx)("a",{parentName:"p",href:"https://www.nngroup.com/articles/infinite-scrolling/"},"goal-oriented tasks"),". Cerner products and our users most often fall into goal-oriented workflows. Users should have proper navigation methods (pagination) to navigate to predetermined points within the content easily."),(0,a.mdx)("p",null,"Infinite scrolling also poses significant accessibility challenges for multiple user groups:"),(0,a.mdx)("ul",null,(0,a.mdx)("li",{parentName:"ul"},"Keyboard-only users have to navigate the entire infinite scroll to get to the content below or to the side of the endless loading content. This creates a very time-consuming and unnecessary burden for the keyboard-only user."),(0,a.mdx)("li",{parentName:"ul"},"Screen reader users would have the same problem even though they have more ways to navigate content on the page. When content is dynamically loaded and not within the DOM, screen reader users won't have access to any of that content which poses more significant challenges than just navigating."),(0,a.mdx)("li",{parentName:"ul"},"Focus can be lost when new content loads. Unless focus is managed, sighted keyboard-only users will have difficulties finding where they are on the page."),(0,a.mdx)("li",{parentName:"ul"},"For data with hierarchical relationships, infinite scrolling can make it difficult for screen readers to effectively communicate the required context if related content is split between loaded and unloaded content.")),(0,a.mdx)("p",null,"The ",(0,a.mdx)("a",{parentName:"p",href:"https://engineering.cerner.com/terra-ui/components/cerner-terra-core-docs/paginator/paginator"},"terra-paginator")," should be considered as an alternative approach to paging large amounts of data.")),(0,a.mdx)("p",null,"To limit the impact of large data sets, progressive loading of list items is available through the InfiniteList. As the InfiniteList approaches the bottom of its scrollHeight the ",(0,a.mdx)("inlineCode",{parentName:"p"},"onRequestItems")," callback will execute, allowing the implementation to lazy load data into the list."),(0,a.mdx)("h2",{id:"state-management"},"State Management"),(0,a.mdx)("p",null,"First we'll be defaulting our state to an empty array of items, a null page key, and false for isFinishedLoading in the constructor. "),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-jsx"},"  constructor(props) {\n    super(props);\n\n    this.state = { isFinishedLoading: false, currentPageKey: null, items: [] };\n  }\n")),(0,a.mdx)("p",null,"In our data request callback we'll pass our parameters of our page key, then wait for the response returned from our async service. Upon receiving the response we'll map our returned paging indicators and add our new items to our existing state."),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-jsx"},"  requestData() {\n    mockRequest(this.state.currentPageKey).then(response => (\n      this.setState(prevState => ({\n        isFinishedLoading: response.isFinalPage,\n        currentPageKey: response.nextPageKey,\n        items: prevState.items.concat(response.items),\n      }))\n    ));\n  }\n")),(0,a.mdx)("h2",{id:"unpack-data"},"Unpack Data"),(0,a.mdx)("p",null,"We can then implement the unpack of our state data into our list items. Provide unique key value to prop ",(0,a.mdx)("inlineCode",{parentName:"p"},"key"),", if internal state of ",(0,a.mdx)("inlineCode",{parentName:"p"},"InfiniteList")," needs to be updated."),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-jsx"},"  createItems() {\n    return this.state.items.map(item => (\n      <Item key={item.key}>\n        <Placeholder title={item.title} />\n      </Item>\n    ));\n  }\n")),(0,a.mdx)("p",null,"Finally we'll declare our infinite list looping. Providing the InfiniteList with an ",(0,a.mdx)("inlineCode",{parentName:"p"},"initialLoadingIndicator")," and ",(0,a.mdx)("inlineCode",{parentName:"p"},"progressiveLoadingIndicator"),". The infinite list does not have visual styling, so loading indicators are customizable. Followed up with setting the ",(0,a.mdx)("inlineCode",{parentName:"p"},"onRequestItems")," to our requestData method."),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-jsx"},'  render() {\n    return (\n      <MyExampleContainer>\n        <InfiniteList\n          dividerStyle="standard"\n          isFinishedLoading={this.state.isFinishedLoading}\n          onRequestItems={this.requestData}\n          initialLoadingIndicator={<MyInitialLoadingIndicator />}\n          progressiveLoadingIndicator={<MyProgressiveLoadingIndicator />}\n        >\n          {this.createItems()}\n        </InfiniteList>\n      </MyExampleContainer>\n    );\n  }\n')),(0,a.mdx)("p",null,"Using these steps we get the following example:"),(0,a.mdx)("h2",{id:"example"},"Example"),(0,a.mdx)(o.Z,{title:"Sections Header Infinite List",mdxType:"RefreshProgressive"}))}f.isMDXComponent=!0},59137:function(e,t,n){n.r(t),t.default={indicator:"MyInitialLoadingIndicator-module__indicator___uYEVR"}},75445:function(e,t,n){n.r(t),t.default={indicator:"MyProgressiveLoadingIndicator-module__indicator___JTGPM"}}}]);