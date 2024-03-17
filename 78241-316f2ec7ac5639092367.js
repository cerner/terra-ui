"use strict";(self.webpackChunkterra_ui=self.webpackChunkterra_ui||[]).push([[78241,17711,40092,72949,47115,95330,7235,29616,62473,84854,38663,61044,92260,69879,47498,25117,69496,2353,81784,59403,24734,57591,37022,14641,71308,79972,48927,98463,20844,85785,12829,8166,30547,52928,96261],{12883:function(e,t,l){var n=l(24994),r=l(73738);t.YZ=t.dt=t.Hd=t.NZ=void 0,Object.defineProperty(t,"fI",{enumerable:!0,get:function(){return u.Row}}),t.Ay=t.$d=void 0;var a=c(l(96540)),i=n(l(5556)),o=n(l(67967)),d=l(92912),u=c(l(26984)),f=n(l(89744));function s(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,l=new WeakMap;return(s=function(e){return e?l:t})(e)}function c(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=r(e)&&"function"!=typeof e)return{default:e};var l=s(t);if(l&&l.has(e))return l.get(e);var n={__proto__:null},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if("default"!==i&&Object.prototype.hasOwnProperty.call(e,i)){var o=a?Object.getOwnPropertyDescriptor(e,i):null;o&&(o.get||o.set)?Object.defineProperty(n,i,o):n[i]=e[i]}return n.default=e,l&&l.set(e,n),n}var p=o.default.bind(f.default),b={children:i.default.node},_={isRequired:i.default.bool};(t.dt=function(e){var t=e.children;return a.default.createElement(u.Cell,{className:p("bold")},t)}).propTypes=b,(t.$d=function(e){var t=e.children;return a.default.createElement(u.Cell,{className:p("code-block-override")},t)}).propTypes=b,(t.YZ=function(e){var t=e.isRequired;return a.default.createElement(u.Cell,{className:p([t?["required"]:[]])},t?"required":"optional")}).propTypes=_,(t.NZ=function(e){var t=e.children;return a.default.createElement(u.Cell,{className:p("code-block-override")},t)}).propTypes=b,(t.Hd=function(e){var t=e.children;return a.default.createElement(u.Cell,null,t)}).propTypes=b;var m=function(e){var t=e.children,l=(0,a.useContext)(d.ThemeContext);return a.default.createElement(u.default,{paddingStyle:"compact",className:p("table",l.className)},a.default.createElement(u.Header,{className:p("header")},a.default.createElement(u.HeaderCell,null,"Prop"),a.default.createElement(u.HeaderCell,null,"Type"),a.default.createElement(u.HeaderCell,null,"Required"),a.default.createElement(u.HeaderCell,null,"Default"),a.default.createElement(u.HeaderCell,null,"Description")),a.default.createElement(u.Body,null,t))};m.propTypes=b;t.Ay=m},89744:function(e,t,l){l.r(t),t.default={"clinical-lowlight-theme":"PropsTable-module__clinical-lowlight-theme___3pa8J","orion-fusion-theme":"PropsTable-module__orion-fusion-theme___FtP5r",bold:"PropsTable-module__bold___-z9Sz",table:"PropsTable-module__table___rzW-v",required:"PropsTable-module__required___ev190","code-block-override":"PropsTable-module__code-block-override___fF0JK"}},78482:function(e,t,l){l.r(t),t.default={"clinical-lowlight-theme":"Table-module__clinical-lowlight-theme___PqYJ8","orion-fusion-theme":"Table-module__orion-fusion-theme___d9rxf",table:"Table-module__table___eg2Mi","padding-standard":"Table-module__padding-standard___BfbC-","padding-compact":"Table-module__padding-compact___Yus6Z",striped:"Table-module__striped___n8xJe"}},69917:function(e,t,l){l.r(t),t.default={"clinical-lowlight-theme":"SlidePanel-module__clinical-lowlight-theme___z5Dzy","orion-fusion-theme":"SlidePanel-module__orion-fusion-theme___hejSR","slide-panel":"SlidePanel-module__slide-panel___tbu3J",main:"SlidePanel-module__main___CjYDC",panel:"SlidePanel-module__panel___G1bnA","is-open":"SlidePanel-module__is-open___pYOkq","is-fullscreen":"SlidePanel-module__is-fullscreen___vCbZa",fill:"SlidePanel-module__fill___9PGCQ"}},85444:function(e,t,l){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=f(l(96540)),r=f(l(5556)),a=f(l(46942)),i=f(l(67967)),o=f(l(52103)),d=f(l(78482)),u=["children","disableStripes","paddingStyle"];function f(e){return e&&e.__esModule?e:{default:e}}function s(){return s=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var l=arguments[t];for(var n in l)Object.prototype.hasOwnProperty.call(l,n)&&(e[n]=l[n])}return e},s.apply(this,arguments)}function c(e,t){if(null==e)return{};var l,n,r=function(e,t){if(null==e)return{};var l,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)l=a[n],t.indexOf(l)>=0||(r[l]=e[l]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)l=a[n],t.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(r[l]=e[l])}return r}var p=i.default.bind(d.default),b={children:r.default.node.isRequired,disableStripes:r.default.bool,paddingStyle:r.default.oneOf(["none","standard","compact"])},_=function(e){var t=e.children,l=e.disableStripes,r=e.paddingStyle,i=c(e,u),d=n.default.useContext(o.default),f=(0,a.default)(p("table",{striped:!l},{"padding-standard":"standard"===r},{"padding-compact":"compact"===r},d.className),i.className);return n.default.createElement("table",s({},i,{className:f}),t)};_.propTypes=b,_.defaultProps={disableStripes:!1,paddingStyle:"none"};t.default=_},61452:function(e,t,l){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=i(l(96540)),r=i(l(5556)),a=["children"];function i(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(null==e)return{};var l,n,r=function(e,t){if(null==e)return{};var l,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)l=a[n],t.indexOf(l)>=0||(r[l]=e[l]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)l=a[n],t.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(r[l]=e[l])}return r}var d={children:r.default.node},u=function(e){var t=e.children,l=o(e,a);return n.default.createElement("tbody",l,t)};u.propTypes=d,u.defaultProps={children:[]};t.default=u},86472:function(e,t,l){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=i(l(96540)),r=i(l(5556)),a=["children"];function i(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(null==e)return{};var l,n,r=function(e,t){if(null==e)return{};var l,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)l=a[n],t.indexOf(l)>=0||(r[l]=e[l]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)l=a[n],t.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(r[l]=e[l])}return r}var d={children:r.default.node},u=function(e){var t=e.children,l=o(e,a);return n.default.createElement("td",l,t)};u.propTypes=d,u.defaultProps={children:[]};t.default=u},97441:function(e,t,l){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=o(l(96540)),r=o(l(5556)),a=o(l(10767)),i=["children"];function o(e){return e&&e.__esModule?e:{default:e}}function d(e,t){if(null==e)return{};var l,n,r=function(e,t){if(null==e)return{};var l,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)l=a[n],t.indexOf(l)>=0||(r[l]=e[l]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)l=a[n],t.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(r[l]=e[l])}return r}var u={children:r.default.node},f=function(e){var t=e.children,l=d(e,i);return n.default.createElement("thead",l,n.default.createElement("tr",null,a.default.addScope(t,"col")))};f.propTypes=u,f.defaultProps={children:[]};t.default=f},22417:function(e,t,l){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=i(l(96540)),r=i(l(5556)),a=["children"];function i(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(null==e)return{};var l,n,r=function(e,t){if(null==e)return{};var l,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)l=a[n],t.indexOf(l)>=0||(r[l]=e[l]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)l=a[n],t.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(r[l]=e[l])}return r}var d={children:r.default.node},u=function(e){var t=e.children,l=o(e,a);return n.default.createElement("th",l,t)};u.propTypes=d,u.defaultProps={children:[]};t.default=u},36142:function(e,t,l){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=u(l(96540)),r=u(l(5556)),a=u(l(67967)),i=u(l(78482)),o=u(l(10767)),d=["children"];function u(e){return e&&e.__esModule?e:{default:e}}function f(){return f=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var l=arguments[t];for(var n in l)Object.prototype.hasOwnProperty.call(l,n)&&(e[n]=l[n])}return e},f.apply(this,arguments)}function s(e,t){if(null==e)return{};var l,n,r=function(e,t){if(null==e)return{};var l,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)l=a[n],t.indexOf(l)>=0||(r[l]=e[l]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)l=a[n],t.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(r[l]=e[l])}return r}var c=a.default.bind(i.default),p={children:r.default.node},b=function(e){var t=e.children,l=s(e,d),r=c(["row"]);return n.default.createElement("tr",f({},l,{className:l.className?"".concat(r," ").concat(l.className):r}),o.default.addScope(t,"row"))};b.propTypes=p,b.defaultProps={children:[]};t.default=b},10767:function(e,t,l){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n,r=(n=l(96540))&&n.__esModule?n:{default:n};var a={addScope:function(e,t){var l=[];return r.default.Children.forEach(e,(function(e){l.push(r.default.cloneElement(e,{scope:"TableHeaderCell"===e.type.name?t:void 0}))})),l}};t.default=a},26984:function(e,t,l){Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"Body",{enumerable:!0,get:function(){return r.default}}),Object.defineProperty(t,"Cell",{enumerable:!0,get:function(){return i.default}}),Object.defineProperty(t,"Header",{enumerable:!0,get:function(){return o.default}}),Object.defineProperty(t,"HeaderCell",{enumerable:!0,get:function(){return d.default}}),Object.defineProperty(t,"Row",{enumerable:!0,get:function(){return a.default}}),t.default=void 0;var n=u(l(85444)),r=u(l(61452)),a=u(l(36142)),i=u(l(86472)),o=u(l(97441)),d=u(l(22417));function u(e){return e&&e.__esModule?e:{default:e}}t.default=n.default},14057:function(e,t,l){var n=l(24994);Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.SlidePanelPositions=void 0;var r=n(l(94634)),a=n(l(91847)),i=n(l(17383)),o=n(l(34579)),d=n(l(12475)),u=n(l(29511)),f=n(l(28452)),s=n(l(63072)),c=n(l(96540)),p=n(l(5556)),b=n(l(46942)),_=n(l(67967)),m=n(l(52103)),v=n(l(16524)),h=l(8604),y=l(68414),O=n(l(69917)),P=["intl","isFullscreen","isOpen","fill","mainAriaLabel","mainContent","panelAriaLabel","panelContent","panelBehavior","panelPosition","panelSize","setSlidePanelRef"];function g(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var l,n=(0,s.default)(e);if(t){var r=(0,s.default)(this).constructor;l=Reflect.construct(n,arguments,r)}else l=n.apply(this,arguments);return(0,f.default)(this,l)}}var j=_.default.bind(O.default),S=t.SlidePanelPositions={START:"start",END:"end"},C={panelAriaLabel:p.default.string,mainAriaLabel:p.default.string,mainContent:p.default.node,panelContent:p.default.node,panelBehavior:p.default.oneOf(["overlay","squish"]),panelPosition:p.default.oneOf(["start","end"]),panelSize:p.default.oneOf(["small","large"]),isFullscreen:p.default.bool,isOpen:p.default.bool,fill:p.default.bool,setSlidePanelRef:p.default.func,intl:p.default.shape({formatMessage:p.default.func,locale:p.default.string})},N={panelBehavior:"overlay",panelPosition:S.END,panelSize:"small"},E=function(e){(0,u.default)(l,e);var t=g(l);function l(e){var n;return(0,i.default)(this,l),(n=t.call(this,e)).setPanelNode=n.setPanelNode.bind((0,d.default)(n)),n.mainNode=c.default.createRef(),n.setLastClicked=n.setLastClicked.bind((0,d.default)(n)),n.setDisclosingNode=n.setDisclosingNode.bind((0,d.default)(n)),n.mainAriaDescribedByID="detail-panel-warning-".concat((0,y.v4)()),n}return(0,o.default)(l,[{key:"componentDidUpdate",value:function(e){if(this.props.isOpen&&this.props.isOpen!==e.isOpen)return this.setDisclosingNode(this.lastClicked),void this.panelNode.focus();if(!this.props.isOpen&&this.props.isOpen!==e.isOpen){var t;if(null!==(t=this.disclosingNode)&&void 0!==t&&t.focus)return this.disclosingNode.setAttribute("aria-expanded","false"),void this.disclosingNode.focus();this.mainNode.current.focus()}}},{key:"setPanelNode",value:function(e){this.props.setSlidePanelRef&&this.props.setSlidePanelRef(e),this.panelNode=e}},{key:"setLastClicked",value:function(e){this.lastClicked=e.target}},{key:"setDisclosingNode",value:function(e){e&&(e.setAttribute("aria-expanded","true"),this.disclosingNode=e)}},{key:"render",value:function(){var e=this.props,t=e.intl,l=e.isFullscreen,n=e.isOpen,i=e.fill,o=e.mainAriaLabel,d=e.mainContent,u=e.panelAriaLabel,f=e.panelContent,s=e.panelBehavior,p=e.panelPosition,_=e.panelSize,m=(e.setSlidePanelRef,(0,a.default)(e,P)),h=this.context,y=(0,b.default)(j("slide-panel",{"is-open":n},{"is-fullscreen":l},{fill:i},h.className),m.className),O=c.default.createElement("div",{className:j(["panel"]),key:"panel",tabIndex:"-1","aria-label":u||t.formatMessage({id:"Terra.slidePanel.defaultPanelLabel"}),"aria-hidden":n?"false":"true",role:"region",ref:this.setPanelNode},c.default.createElement(v.default,{text:u||t.formatMessage({id:"Terra.slidePanel.defaultPanelLabel"})}),f),g=c.default.createElement("div",{className:j("main"),key:"main",tabIndex:"-1","aria-label":o,"aria-describedby":this.mainAriaDescribedByID,"aria-hidden":n&&l?"true":"false",ref:this.mainNode,role:"main",onClick:this.setLastClicked,onKeyUp:this.setLastClicked},c.default.createElement(v.default,{tabIndex:"-1",id:this.mainAriaDescribedByID,text:t.formatMessage({id:"Terra.slidePanel.discloseWarning"})}),d),C=p===S.START?c.default.createElement(c.default.Fragment,null,O,g):c.default.createElement(c.default.Fragment,null,g,O);return c.default.createElement("div",(0,r.default)({},m,{className:y,"data-slide-panel-panel-behavior":s,"data-slide-panel-panel-position":p,"data-slide-panel-panel-size":_}),C)}}]),l}(c.default.Component);E.propTypes=C,E.defaultProps=N,E.contextType=m.default;t.default=(0,h.injectIntl)(E)}}]);