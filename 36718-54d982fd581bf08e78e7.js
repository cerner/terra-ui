"use strict";(self.webpackChunkterra_ui=self.webpackChunkterra_ui||[]).push([[36718],{600:function(e,t,n){n.r(t),t.default={"orion-fusion-theme":"CollapsibleMenuView-module__orion-fusion-theme___hnpxp","clinical-lowlight-theme":"CollapsibleMenuView-module__clinical-lowlight-theme___oYUJl","collapsible-menu-view":"CollapsibleMenuView-module__collapsible-menu-view___PjbE5","collapsible-menu-view-flex-end":"CollapsibleMenuView-module__collapsible-menu-view-flex-end___q9VJl","collapsible-menu-view-flex-start":"CollapsibleMenuView-module__collapsible-menu-view-flex-start___i09pW","collapsible-menu-view-icon-vertical":"CollapsibleMenuView-module__collapsible-menu-view-icon-vertical___s0wH8","menu-button":"CollapsibleMenuView-module__menu-button___mblyP",hidden:"CollapsibleMenuView-module__hidden___Ofg2q","face-up-item":"CollapsibleMenuView-module__face-up-item___SHPl1",control:"CollapsibleMenuView-module__control___tG8BN","is-disabled":"CollapsibleMenuView-module__is-disabled___+1i5o",divider:"CollapsibleMenuView-module__divider___xP3wc","chevron-right":"CollapsibleMenuView-module__chevron-right___MqgBP","is-calculating":"CollapsibleMenuView-module__is-calculating___kjEVZ"}},4267:function(e,t,n){n.r(t),t.default={"clinical-lowlight-theme":"Checkbox-module__clinical-lowlight-theme___J4i3C","orion-fusion-theme":"Checkbox-module__orion-fusion-theme___ZTiEC",checkbox:"Checkbox-module__checkbox___pLlkO",label:"Checkbox-module__label___96oeA","is-mobile":"Checkbox-module__is-mobile___HQ1Ax","native-input":"Checkbox-module__native-input___9pZ94","label-text":"Checkbox-module__label-text___NBjgG","is-hidden":"Checkbox-module__is-hidden___q9DyW","is-disabled":"Checkbox-module__is-disabled___pimXj","is-inline":"Checkbox-module__is-inline___8-h-C"}},8144:function(e,t,n){var l=n(24994);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=l(n(94634)),i=l(n(91847)),o=l(n(17383)),u=l(n(34579)),d=l(n(28452)),r=l(n(63072)),s=l(n(12475)),c=l(n(29511)),f=l(n(96540)),h=l(n(7829)),p=l(n(5556)),b=l(n(46942)),m=l(n(67967)),v=l(n(52103)),C=n(8604),y=n(33049),g=l(n(75067)),_=l(n(94759)),O=l(n(600)),w=["children","boundingRef","menuWidth","intl","alwaysCollapsedMenuItems","isStartAligned","useHorizontalIcon","isReversedChildrenOrder","menuIconText"];function k(e,t,n){return t=(0,r.default)(t),(0,d.default)(e,x()?Reflect.construct(t,n||[],(0,r.default)(e).constructor):t.apply(e,n))}function x(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(x=function(){return!!e})()}var M=m.default.bind(O.default),I={children:p.default.node.isRequired,menuWidth:p.default.oneOf(["160","240","320","640","960","1280","1760","auto"]),boundingRef:p.default.func,alwaysCollapsedMenuItems:p.default.arrayOf(p.default.element),isStartAligned:p.default.bool,useHorizontalIcon:p.default.bool,isReversedChildrenOrder:p.default.bool,menuIconText:p.default.string,intl:p.default.shape({formatMessage:p.default.func})},R=f.default.createElement(_.default,{key:"prepopulatedBaseDivider"}),E=function(e){function t(e){var n;return(0,o.default)(this,t),(n=k(this,t,[e])).collapsedMenuAlwaysShown=e.alwaysCollapsedMenuItems.length>0,n.setContainer=n.setContainer.bind((0,s.default)(n)),n.setMenuButton=n.setMenuButton.bind((0,s.default)(n)),n.resetCache=n.resetCache.bind((0,s.default)(n)),n.handleResize=n.handleResize.bind((0,s.default)(n)),n.resetCache(),n}return(0,c.default)(t,e),(0,u.default)(t,[{key:"componentDidMount",value:function(){var e=this;this.resizeObserver=new h.default((function(t){e.contentWidth=t[0].contentRect.width,e.isCalculating||(e.animationFrameID=window.requestAnimationFrame((function(){e.resetCache(),e.forceUpdate()})))})),this.handleResize(this.contentWidth),this.resizeObserver.observe(this.container)}},{key:"shouldComponentUpdate",value:function(e){return f.default.Children.toArray(this.props.children).length===f.default.Children.toArray(e.children).length&&this.isContainerWidthUsedtoResize&&this.resetCache(),!0}},{key:"componentDidUpdate",value:function(){this.isCalculating&&(this.isCalculating=!1,this.handleResize(this.contentWidth))}},{key:"componentWillUnmount",value:function(){window.cancelAnimationFrame(this.animationFrameID),this.resizeObserver.disconnect(this.container),this.container=null}},{key:"handleResize",value:function(e){var t=f.default.Children.toArray(this.props.children),n=t.length>1?this.menuButton.getBoundingClientRect().width:0,l=this.menuButton.parentElement.getBoundingClientRect().width,a=e-n;this.isContainerWidthUsedtoResize=!1,e<l&&(a=Math.abs(l-n),this.isContainerWidthUsedtoResize=!0),Math.abs(window.innerWidth-n)<a&&(a=Math.abs(window.innerWidth-n));var i=-1,o=0,u=!0;if(this.props.isReversedChildrenOrder)for(var d=t.length-1;d>=0;d-=1){if((o+=this.container.children[d].getBoundingClientRect().width)>a){if(!this.collapsedMenuAlwaysShown&&d===t.length-1&&o<=a)break;i=t.length>1&&t[d].type!==_.default?d+1:d,u=!1;break}}else for(var r=0;r<t.length;r+=1){if((o+=this.container.children[r].getBoundingClientRect().width)>a){if(!this.collapsedMenuAlwaysShown&&r===t.length-1&&o<=e)break;i=t.length>1&&t[r].type===_.default?r-1:r,u=!1;break}}this.menuHidden===u&&this.hiddenStartIndex===i||(this.menuHidden=u,this.hiddenStartIndex=i,this.forceUpdate())}},{key:"setContainer",value:function(e){null!==e&&(this.container=e)}},{key:"setMenuButton",value:function(e){null!==e&&(this.menuButton=e)}},{key:"resetCache",value:function(){this.animationFrameID=null,this.hiddenStartIndex=-1,this.isCalculating=!0,this.menuHidden=!1}},{key:"render",value:function(){var e=this.props,t=e.children,n=e.boundingRef,l=e.menuWidth,o=e.intl,u=e.alwaysCollapsedMenuItems,d=e.isStartAligned,r=e.useHorizontalIcon,s=e.isReversedChildrenOrder,c=e.menuIconText,h=(0,i.default)(e,w),p=this.context,m=(0,b.default)(M("collapsible-menu-view",{"is-calculating":this.isCalculating},{"collapsible-menu-view-flex-end":!d},{"collapsible-menu-view-flex-start":d},p.className),h.className),v=M("menu-button",{hidden:!this.collapsedMenuAlwaysShown&&this.menuHidden}),C=t,_=u;this.hiddenStartIndex>=0&&(C=f.default.Children.toArray(t),_=this.props.isReversedChildrenOrder?C.splice(0,this.hiddenStartIndex+2).concat(_):this.collapsedMenuAlwaysShown?C.splice(this.hiddenStartIndex).concat(R).concat(_):C.splice(this.hiddenStartIndex).concat(_));var O=(0,b.default)(M({"collapsible-menu-view-icon-vertical":!r},p.className)),k=f.default.createElement("div",{className:v,ref:this.setMenuButton},f.default.createElement(g.default,{"data-collapsible-menu-toggle":!0,icon:f.default.createElement(y.IconEllipses,{className:O}),subMenuItems:_,boundingRef:n,menuWidth:l,isIconOnly:!0,text:c||o.formatMessage({id:"Terra.collapsibleMenuView.more"}),variant:"utility"}));return s?f.default.createElement("div",(0,a.default)({},h,{className:m,ref:this.setContainer}),k,C):f.default.createElement("div",(0,a.default)({},h,{className:m,ref:this.setContainer}),C,k)}}]),t}(f.default.Component);E.propTypes=I,E.contextType=v.default,E.defaultProps={alwaysCollapsedMenuItems:[],isStartAligned:!1};t.default=(0,C.injectIntl)(E)},94759:function(e,t,n){var l=n(24994);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=l(n(96540)),i=l(n(5556)),o=l(n(67967)),u=l(n(59940)),d=n(33049),r=l(n(52103)),s=l(n(600)),c=o.default.bind(s.default),f={useChevronRightIcon:i.default.bool},h={isCollapsibleMenuItem:i.default.bool},p=function(e,t){var n=t.isCollapsibleMenuItem,l=e.useChevronRightIcon,i=a.default.useContext(r.default);return l&&n?null:l?a.default.createElement("div",{className:c(["chevron-right","face-up-item",i.className])},a.default.createElement(d.IconChevronRight,null)):n?a.default.createElement(u.default.Divider,null):a.default.createElement("div",{className:c(["divider","face-up-item",i.className])})};p.contextTypes=h,p.propTypes=f;t.default=p},15440:function(e,t,n){var l=n(24994);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=l(n(94634)),i=l(n(91847)),o=l(n(96540)),u=l(n(5556)),d=l(n(67967)),r=l(n(19992)),s=l(n(88696)),c=l(n(600)),f=["text","title","href","onClick","onBlur","onFocus","onKeyDown","onKeyUp","onMouseDown","variant"],h=d.default.bind(c.default),p={isCollapsibleMenuItem:u.default.bool},b={text:u.default.string,title:u.default.string,href:u.default.string,onClick:u.default.func,onBlur:u.default.func,onFocus:u.default.func,onKeyDown:u.default.func,onKeyUp:u.default.func,onMouseDown:u.default.func,variant:u.default.oneOf(["default","external","image","video","audio","document"])},m={variant:"default"},v=function(e,t){var n=t.isCollapsibleMenuItem,l=e.text,u=e.title,d=e.href,c=e.onClick,p=e.onBlur,b=e.onFocus,m=e.onKeyDown,v=e.onKeyUp,C=e.onMouseDown,y=e.variant,g=(0,i.default)(e,f),_=function(e){d?window.location.href=d:c(e)};return n?o.default.createElement(s.default.Item,(0,a.default)({},g,{text:l,onClick:function(e){return _(e)},onBlur:p,onFocus:b,onKeyDown:m,onKeyUp:v,onMouseDown:C})):o.default.createElement("div",{className:h(["face-up-item"])},o.default.createElement(r.default,(0,a.default)({},g,{text:l,title:u,href:d,onClick:c,onBlur:p,onFocus:b,onKeyDown:m,onKeyUp:v,onMouseDown:C,variant:y})))};v.propTypes=b,v.defaultProps=m,v.contextTypes=p;t.default=v},75067:function(e,t,n){var l=n(24994);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=l(n(94634)),i=l(n(43693)),o=l(n(91847)),u=l(n(17383)),d=l(n(34579)),r=l(n(28452)),s=l(n(63072)),c=l(n(12475)),f=l(n(29511)),h=l(n(96540)),p=l(n(5556)),b=l(n(67967)),m=l(n(23986)),v=l(n(15853)),C=l(n(88696)),y=l(n(600)),g=["icon","isIconOnly","isReversed","text","isSelected","isDisabled","subMenuItems","shouldCloseOnClick","boundingRef","menuWidth","isTextOnly"];function _(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function O(e,t,n){return t=(0,s.default)(t),(0,r.default)(e,w()?Reflect.construct(t,n||[],(0,s.default)(e).constructor):t.apply(e,n))}function w(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(w=function(){return!!e})()}var k=b.default.bind(y.default),x={text:p.default.string.isRequired,boundingRef:p.default.func,icon:p.default.element,isIconOnly:p.default.bool,isReversed:p.default.bool,isSelected:p.default.bool,isDisabled:p.default.bool,shouldCloseOnClick:p.default.bool,subMenuItems:p.default.arrayOf(p.default.element),onClick:p.default.func,menuWidth:p.default.oneOf(["160","240","320","640","960","1280","1760","auto"]),isTextOnly:p.default.bool},M={isCollapsibleGroupItem:p.default.bool,isCollapsibleMenuItem:p.default.bool},I=function(e){function t(e){var n;return(0,u.default)(this,t),(n=O(this,t,[e])).setButtonNode=n.setButtonNode.bind((0,c.default)(n)),n.getButtonNode=n.getButtonNode.bind((0,c.default)(n)),n}return(0,f.default)(t,e),(0,d.default)(t,[{key:"setButtonNode",value:function(e){this.buttonNode=e}},{key:"getButtonNode",value:function(){return this.buttonNode}},{key:"render",value:function(){var e=this.props,t=e.icon,n=e.isIconOnly,l=e.isReversed,u=e.text,d=e.isSelected,r=e.isDisabled,s=e.subMenuItems,c=(e.shouldCloseOnClick,e.boundingRef),f=e.menuWidth,p=e.isTextOnly,b=(0,o.default)(e,g),y=this.context,O=y.isCollapsibleGroupItem,w=y.isCollapsibleMenuItem,x=b.isSelectable,M=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?_(Object(n),!0).forEach((function(t){(0,i.default)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):_(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},b);return w?h.default.createElement(C.default.Item,(0,a.default)({},M,{text:u,isToggled:d&&O,isDisabled:r,subMenuItems:s})):O?h.default.createElement(v.default.Button,(0,a.default)({},M,{icon:t,text:u,isDisabled:r})):s&&s.length>0?h.default.createElement(C.default,{contentWidth:f,boundingRef:c,button:h.default.createElement(m.default,(0,a.default)({},M,{"aria-haspopup":"dialog",icon:t,text:u,isReversed:l,isDisabled:r,isIconOnly:n}))},s):p?h.default.createElement("div",{className:k("face-up-item")},u):h.default.createElement("div",{className:k("face-up-item")},h.default.createElement(m.default,(0,a.default)({},M,{icon:t,text:u,isReversed:l,isDisabled:r,isIconOnly:n,isSelectable:x,isSelected:d})))}}]),t}(h.default.Component);I.propTypes=x,I.defaultProps={isSelected:!1,isReversed:!1,shouldCloseOnClick:!0,isIconOnly:!1,isTextOnly:!1},I.contextTypes=M,I.Opts={widths:C.default.Opts.widths};t.default=I},62244:function(e,t,n){var l=n(24994);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=l(n(94634)),i=l(n(91847)),o=l(n(17383)),u=l(n(34579)),d=l(n(28452)),r=l(n(63072)),s=l(n(12475)),c=l(n(29511)),f=l(n(96540)),h=l(n(5556)),p=l(n(67967)),b=l(n(15853)),m=l(n(88696)),v=l(n(600)),C=["children","onChange","isMultiSelect","selectedKeys","ariaLabel","groupId"];function y(e,t,n){return t=(0,r.default)(t),(0,d.default)(e,g()?Reflect.construct(t,n||[],(0,r.default)(e).constructor):t.apply(e,n))}function g(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(g=function(){return!!e})()}var _=p.default.bind(v.default),O={onChange:h.default.func,children:h.default.node.isRequired,isMultiSelect:h.default.bool,selectedKeys:h.default.arrayOf(h.default.string),ariaLabel:h.default.string,groupId:h.default.string},w={isCollapsibleGroupItem:h.default.bool},k={isCollapsibleMenuItem:h.default.bool},x=function(e){function t(e){var n;return(0,o.default)(this,t),(n=y(this,t,[e])).handleMenuOnChange=n.handleMenuOnChange.bind((0,s.default)(n)),n}return(0,c.default)(t,e),(0,u.default)(t,[{key:"getChildContext",value:function(){return{isCollapsibleGroupItem:!0}}},{key:"handleMenuOnChange",value:function(e,t){if(this.props.onChange){var n=t;f.default.Children.forEach(this.props.children,(function(e,l){t===l&&(n=e.key)})),this.props.onChange(e,n)}}},{key:"render",value:function(){var e=this,t=this.props,n=t.children,l=t.onChange,o=t.isMultiSelect,u=t.selectedKeys,d=t.ariaLabel,r=t.groupId,s=(0,i.default)(t,C);if(this.context.isCollapsibleMenuItem){if(o){var c=[];return f.default.Children.forEach(n,(function(t,n){var l;l=f.default.cloneElement(t,{onChange:function(t){return e.handleMenuOnChange(t,n)},isToggleable:!0,isToggled:t.isToggled}),c.push(l)})),f.default.createElement("li",{role:"none"},f.default.createElement("div",(0,a.default)({},s,{role:"group",id:r,"aria-label":d}),c))}return l?f.default.createElement("li",{role:"none"},f.default.createElement(m.default.ItemGroup,(0,a.default)({},s,{onChange:this.handleMenuOnChange,id:r,"aria-label":d}),n)):f.default.createElement("li",{role:"none"},f.default.createElement("div",(0,a.default)({},s,{role:"group"}),n))}var h=_(["face-up-item",s.className]);return f.default.createElement(b.default,(0,a.default)({},s,{isMultiSelect:o,onChange:l,className:h,selectedKeys:u,"aria-label":d}),n)}}]),t}(f.default.Component);x.propTypes=O,x.defaultProps={selectedKeys:[],isMultiSelect:!1},x.childContextTypes=w,x.contextTypes=k;t.default=x},32380:function(e,t,n){var l=n(24994);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=l(n(94634)),i=l(n(91847)),o=l(n(17383)),u=l(n(34579)),d=l(n(28452)),r=l(n(63072)),s=l(n(12475)),c=l(n(29511)),f=l(n(96540)),h=l(n(5556)),p=l(n(67967)),b=l(n(63639)),m=l(n(88696)),v=l(n(600)),C=["text","isSelected","isSelectable","isDisabled","onChange","shouldCloseOnClick"];function y(e,t,n){return t=(0,r.default)(t),(0,d.default)(e,g()?Reflect.construct(t,n||[],(0,r.default)(e).constructor):t.apply(e,n))}function g(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(g=function(){return!!e})()}var _=p.default.bind(v.default),O={text:h.default.string.isRequired,isSelected:h.default.bool,onChange:h.default.func,isSelectable:h.default.bool,isDisabled:h.default.bool,shouldCloseOnClick:h.default.bool},w={isCollapsibleMenuItem:h.default.bool},k=function(e){function t(e){var n;return(0,o.default)(this,t),(n=y(this,t,[e])).wrappedOnChange=n.wrappedOnChange.bind((0,s.default)(n)),n}return(0,c.default)(t,e),(0,u.default)(t,[{key:"wrappedOnChange",value:function(e){this.props.onChange&&this.props.onChange(e,e.target.checked)}},{key:"render",value:function(){var e=this.props,t=e.text,n=e.isSelected,l=e.isSelectable,o=e.isDisabled,u=e.onChange,d=(e.shouldCloseOnClick,(0,i.default)(e,C)),r=this.context.isCollapsibleMenuItem,s=_(["control",{"is-disabled":o||!l},d.className]);return r?f.default.createElement(m.default.Item,(0,a.default)({},d,{text:t,isSelected:n,isSelectable:l,isDisabled:o||!l,onChange:u})):f.default.createElement("div",{className:_(["face-up-item"])},f.default.createElement(b.default,(0,a.default)({},d,{className:s,labelText:t,defaultChecked:n,onChange:this.wrappedOnChange,disabled:o||!l})))}}]),t}(f.default.Component);k.propTypes=O,k.defaultProps={isSelected:!1,isSelectable:!0,shouldCloseOnClick:!0},k.contextTypes=w;t.default=k},88696:function(e,t,n){var l=n(24994);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=l(n(94634)),i=l(n(91847)),o=l(n(17383)),u=l(n(34579)),d=l(n(28452)),r=l(n(63072)),s=l(n(12475)),c=l(n(29511)),f=l(n(96540)),h=l(n(5556)),p=l(n(67967)),b=l(n(59940)),m=l(n(52103)),v=l(n(600)),C=["children","button","contentWidth"];function y(e,t,n){return t=(0,r.default)(t),(0,d.default)(e,g()?Reflect.construct(t,n||[],(0,r.default)(e).constructor):t.apply(e,n))}function g(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(g=function(){return!!e})()}var _=p.default.bind(v.default),O={children:h.default.node.isRequired,boundingRef:h.default.func,contentWidth:h.default.oneOf(["160","240","320","640","960","1280","1760","auto"]),button:h.default.element.isRequired},w={isCollapsibleMenuItem:h.default.bool},k=function(e){function t(e){var n;return(0,o.default)(this,t),(n=y(this,t,[e])).handleRequestClose=n.handleRequestClose.bind((0,s.default)(n)),n.wrappedOnClick=n.wrappedOnClick.bind((0,s.default)(n)),n.wrapButtonClick=n.wrapButtonClick.bind((0,s.default)(n)),n.wrapChildrenOnClick=n.wrapChildrenOnClick.bind((0,s.default)(n)),n.setButtonNode=n.setButtonNode.bind((0,s.default)(n)),n.getButtonNode=n.getButtonNode.bind((0,s.default)(n)),n.state={isOpen:!1},n}return(0,c.default)(t,e),(0,u.default)(t,[{key:"getChildContext",value:function(){return{isCollapsibleMenuItem:!0}}},{key:"handleRequestClose",value:function(){this.setState({isOpen:!1})}},{key:"setButtonNode",value:function(e){this.buttonNode=e}},{key:"getButtonNode",value:function(){return this.buttonNode}},{key:"wrappedOnClick",value:function(e){var t=this;return function(n){t.handleRequestClose(),e.props.onClick&&e.props.onClick(n)}}},{key:"wrapButtonClick",value:function(e){var t=this;return function(n){t.setState({isOpen:!0}),e.props.onClick&&e.props.onClick(n)}}},{key:"wrapChildrenOnClick",value:function(e){var t=this,n=e?[]:void 0;return f.default.Children.forEach(e,(function(e){var l=e;if(e.props.shouldCloseOnClick)l=f.default.cloneElement(e,{onClick:t.wrappedOnClick(e)});else if(e.props.children){var a=t.wrapChildrenOnClick(e.props.children);l=f.default.cloneElement(e,{children:a})}else if(e.props.subMenuItems){var i=t.wrapChildrenOnClick(e.props.subMenuItems);l=f.default.cloneElement(e,{subMenuItems:i})}n.push(l)})),n}},{key:"render",value:function(){var e=this.props,t=e.children,n=e.button,l=e.contentWidth,o=(0,i.default)(e,C),u=f.default.cloneElement(n,{onClick:this.wrapButtonClick(n)}),d=this.context;return f.default.createElement("div",{className:_("face-up-item",d.className),ref:this.setButtonNode},f.default.createElement(b.default,(0,a.default)({},o,{onRequestClose:this.handleRequestClose,isArrowDisplayed:!0,isOpen:this.state.isOpen,targetRef:this.getButtonNode,contentWidth:l}),this.wrapChildrenOnClick(t)),u)}}]),t}(f.default.Component);k.propTypes=O,k.childContextTypes=w,k.Item=b.default.Item,k.ItemGroup=b.default.ItemGroup,k.Opts={widths:b.default.Opts.widths},k.contextType=m.default;t.default=k},29314:function(e,t,n){var l=n(24994);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=l(n(8144)),i=l(n(94759)),o=l(n(15440)),u=l(n(75067)),d=l(n(62244)),r=l(n(32380));a.default.Item=u.default,a.default.ItemGroup=d.default,a.default.Toggle=r.default,a.default.Hyperlink=o.default,a.default.Divider=i.default;t.default=a.default},63639:function(e,t,n){function l(e){return l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},l(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=f(n(96540)),i=f(n(5556)),o=f(n(46942)),u=f(n(67967)),d=f(n(52103)),r=f(n(4267)),s=f(n(68611)),c=["checked","defaultChecked","inputAttrs","id","disabled","isInline","isLabelHidden","labelText","labelTextAttrs","name","onBlur","onChange","onFocus","value"];function f(e){return e&&e.__esModule?e:{default:e}}function h(){return h=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var l in n)Object.prototype.hasOwnProperty.call(n,l)&&(e[l]=n[l])}return e},h.apply(this,arguments)}function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function b(e,t,n){var a;return a=function(e,t){if("object"!=l(e)||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var a=n.call(e,t||"default");if("object"!=l(a))return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(t,"string"),(t="symbol"==l(a)?a:String(a))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function m(e,t){if(null==e)return{};var n,l,a=function(e,t){if(null==e)return{};var n,l,a={},i=Object.keys(e);for(l=0;l<i.length;l++)n=i[l],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(l=0;l<i.length;l++)n=i[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var v=u.default.bind(r.default),C={checked:i.default.bool,defaultChecked:i.default.bool,id:i.default.string,inputAttrs:i.default.object,disabled:i.default.bool,isInline:i.default.bool,isLabelHidden:i.default.bool,labelText:i.default.string.isRequired,labelTextAttrs:i.default.object,name:i.default.string,onBlur:i.default.func,onChange:i.default.func,onFocus:i.default.func,value:i.default.string},y={checked:void 0,defaultChecked:void 0,id:void 0,inputAttrs:{},disabled:!1,isInline:!1,isLabelHidden:!1,labelTextAttrs:{},name:null,onBlur:void 0,onChange:void 0,onFocus:void 0,value:void 0},g=function(e){var t=e.checked,n=e.defaultChecked,l=e.inputAttrs,i=e.id,u=e.disabled,r=e.isInline,f=e.isLabelHidden,C=e.labelText,y=e.labelTextAttrs,g=e.name,_=e.onBlur,O=e.onChange,w=e.onFocus,k=e.value,x=m(e,c),M=a.default.useContext(d.default),I=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){b(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},l);void 0!==t?I.checked=t:I.defaultChecked=n;var R=(0,o.default)(v("checkbox",{"is-inline":r},M.className),x.className),E=v(["label",{"is-disabled":u},{"is-mobile":s.default.isConsideredMobileDevice()},y.className]),S=v(["native-input",l.className]),B=v(["label-text",{"is-hidden":f},{"is-mobile":s.default.isConsideredMobileDevice()}]),N=null;return f?(I["aria-label"]=C,N=a.default.createElement("span",h({},y,{className:B}))):N=a.default.createElement("span",h({},y,{className:B}),C),a.default.createElement("div",h({},x,{className:R}),a.default.createElement("label",{htmlFor:i,className:E},a.default.createElement("input",h({},I,{type:"checkbox",id:i,disabled:u,name:g,value:k,onChange:O,onFocus:w,onBlur:_,className:S})),N))};g.propTypes=C,g.defaultProps=y,g.isCheckbox=!0;t.default=g},68611:function(e){var t={isConsideredMobileDevice:function(){return window.matchMedia("(max-width: 1024px)").matches&&("ontouchstart"in window||window.DocumentTouch&&document instanceof DocumentTouch||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0)}};e.exports=t}}]);