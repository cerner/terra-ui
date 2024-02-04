"use strict";(self.webpackChunkterra_ui=self.webpackChunkterra_ui||[]).push([[42292,83532,61152,38768,16388,73056,50676,28296,5912,4484,82104,96528,74148,51768,7004,84624,62240,39860,95100,76480,54100],{79300:function(e,t,n){var i=n(22411),a=n(59848);t.c=void 0;var r=i(n(11504)),o=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=a(e)&&"function"!=typeof e)return{default:e};var n=m(t);if(n&&n.has(e))return n.get(e);var i={__proto__:null},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var l=r?Object.getOwnPropertyDescriptor(e,o):null;l&&(l.get||l.set)?Object.defineProperty(i,o,l):i[o]=e[o]}return i.default=e,n&&n.set(e,i),i}(n(26524)),l=n(31236),s=i(n(74824)),c=i(n(33348)),u=i(n(32692)),d=i(n(87600));function m(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(m=function(e){return e?n:t})(e)}var p=s.default.bind(d.default),h=function(e){var t=[r.default.createElement(o.SectionHeader,{key:e.key,title:e.title})];return e.childItems.forEach((function(e){return t.push((n=e,r.default.createElement(o.Item,{key:n.key},r.default.createElement(l.Placeholder,{title:n.title,className:p("placeholder")}))));var n})),t};t.c=function(){return r.default.createElement(u.default,null,r.default.createElement(o.default,{dividerStyle:"standard",isFinishedLoading:!0,ariaLabel:"Section"},c.default.map((function(e){return h(e)}))))}},33348:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;t.default=[{title:"Section 0",key:"unique-key-0",childItems:[{title:"Item 0-0",key:"unique-0-0"},{title:"Item 0-1",key:"unique-0-1"},{title:"Item 0-2",key:"unique-0-2"},{title:"Item 0-3",key:"unique-0-3"},{title:"Item 0-4",key:"unique-0-4"},{title:"Item 0-5",key:"unique-0-5"}]},{title:"Section 1",key:"unique-key-1",childItems:[{title:"Item 1-0",key:"unique-1-0"},{title:"Item 1-1",key:"unique-1-1"},{title:"Item 1-2",key:"unique-1-2"},{title:"Item 1-3",key:"unique-1-3"},{title:"Item 1-4",key:"unique-1-4"},{title:"Item 1-5",key:"unique-1-5"}]},{title:"Section 2",key:"unique-key-2",childItems:[{title:"Item 3-0",key:"unique-3-0"},{title:"Item 3-1",key:"unique-3-1"},{title:"Item 3-2",key:"unique-3-2"},{title:"Item 3-3",key:"unique-3-3"},{title:"Item 3-4",key:"unique-3-4"},{title:"Item 3-5",key:"unique-3-5"}]},{title:"Section 4",key:"unique-key-4",childItems:[{title:"Item 4-0",key:"unique-4-0"},{title:"Item 4-1",key:"unique-4-1"},{title:"Item 4-2",key:"unique-4-2"},{title:"Item 4-3",key:"unique-4-3"},{title:"Item 4-4",key:"unique-4-4"},{title:"Item 4-5",key:"unique-4-5"}]}]},15719:function(e,t,n){n.r(t),n.d(t,{default:function(){return m}});n(11504);var i=n(69788),a=n(87295),r=n(31236),o=n(79300),l=["components"];function s(){return s=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},s.apply(this,arguments)}function c(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u={},d="wrapper";function m(e){var t=e.components,n=c(e,l);return(0,i.mdx)(d,s({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.mdx)(a.k,{mdxType:"Badge"}),(0,i.mdx)("p",null,(0,i.mdx)("a",{parentName:"p",href:"https://github.com/cerner/terra-framework/blob/main/packages/terra-infinite-list#readme"},(0,i.mdx)("img",{parentName:"a",src:"https://badgen.net/badge/status/Deprecated/grey",alt:"Deprecated"}))),(0,i.mdx)("h1",{id:"terra-infinite-list--sections"},"Terra Infinite List — Sections"),(0,i.mdx)(r.Notice,{variant:"deprecation",mdxType:"Notice"},(0,i.mdx)("p",null,"The terra-infinite-list component has been deprecated and is no longer recommended for use."),(0,i.mdx)("p",null,"From a usability perspective, infinite scrolling is a pattern designed and best used when users are casually looking for or discovering things, like shopping and social media. The infinite scrolling pattern should not be used for ",(0,i.mdx)("a",{parentName:"p",href:"https://www.nngroup.com/articles/infinite-scrolling/"},"goal-oriented tasks"),". Cerner products and our users most often fall into goal-oriented workflows. Users should have proper navigation methods (pagination) to navigate to predetermined points within the content easily."),(0,i.mdx)("p",null,"Infinite scrolling also poses significant accessibility challenges for multiple user groups:"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},"Keyboard-only users have to navigate the entire infinite scroll to get to the content below or to the side of the endless loading content. This creates a very time-consuming and unnecessary burden for the keyboard-only user."),(0,i.mdx)("li",{parentName:"ul"},"Screen reader users would have the same problem even though they have more ways to navigate content on the page. When content is dynamically loaded and not within the DOM, screen reader users won't have access to any of that content which poses more significant challenges than just navigating."),(0,i.mdx)("li",{parentName:"ul"},"Focus can be lost when new content loads. Unless focus is managed, sighted keyboard-only users will have difficulties finding where they are on the page."),(0,i.mdx)("li",{parentName:"ul"},"For data with hierarchical relationships, infinite scrolling can make it difficult for screen readers to effectively communicate the required context if related content is split between loaded and unloaded content.")),(0,i.mdx)("p",null,"The ",(0,i.mdx)("a",{parentName:"p",href:"https://engineering.cerner.com/terra-ui/components/cerner-terra-core-docs/paginator/paginator"},"terra-paginator")," should be considered as an alternative approach to paging large amounts of data.")),(0,i.mdx)("p",null,"To achieve sections within the InfiniteList the only supported implementation is directly consuming the static variant of the ",(0,i.mdx)("inlineCode",{parentName:"p"},"SectionHeader")," component. Expand/collapse functionality is not supported within the infinite list. "),(0,i.mdx)("h2",{id:"map-section-structure"},"Map Section Structure"),(0,i.mdx)("p",null,"So in our first step a ",(0,i.mdx)("inlineCode",{parentName:"p"},"SectionHeader")," needs to be created for each associated section. We'll add it to the initialization of an array that will be expanded in the following steps."),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-jsx"},"  const createSection = (sectionData) => {\n    const section = [\n      <SectionHeader\n        key={sectionData.key}\n        title={sectionData.title}\n      />,\n    ];\n    return section;\n  };\n")),(0,i.mdx)("p",null,"Next we'll create an array with the first item being our section header, and then loop through the associated child items for the section appending them to the initial array."),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-jsx"},"  const createSection = (sectionData) => {\n    const section = [\n      <SectionHeader\n        key={sectionData.key}\n        title={sectionData.title}\n      />,\n    ];\n    sectionData.childItems.forEach(childItem => section.push(createListItem(childItem)));\n    return section;\n  };\n")),(0,i.mdx)("h2",{id:"unpack-data"},"Unpack Data"),(0,i.mdx)("p",null,"We can then implement the unpack of our data into our list items."),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-jsx"},"const createListItem = itemData => (\n  <Item key={itemData.key}>\n    <Placeholder title={itemData.title} />\n  </Item>\n);\n\nconst createSections = data => data.map(section => createSection(section));\n")),(0,i.mdx)("p",null,"Then we can implement a method to loop through our data and create the section with our methods and call it from our render method."),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-jsx"},'const InfiniteListSection = () => (\n  <MyExampleContainer>\n    <InfiniteList\n      dividerStyle="standard"\n      isFinishedLoading\n    >\n      {createSections(mockData)}\n    </InfiniteList>\n  </MyExampleContainer>\n);\n')),(0,i.mdx)("p",null,"Using these steps we get the following example:"),(0,i.mdx)("h2",{id:"example"},"Example"),(0,i.mdx)(o.c,{title:"Sections Header Infinite List",mdxType:"InfiniteListSection"}))}m.isMDXComponent=!0}}]);