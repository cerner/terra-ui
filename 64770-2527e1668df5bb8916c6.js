"use strict";(self.webpackChunkterra_ui=self.webpackChunkterra_ui||[]).push([[64770],{49271:function(e,t,a){var l=a(64836),r=a(18698);t.Z=void 0;var n=l(a(27424)),o=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==r(e)&&"function"!=typeof e)return{default:e};var a=p(t);if(a&&a.has(e))return a.get(e);var l={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var u=n?Object.getOwnPropertyDescriptor(e,o):null;u&&(u.get||u.set)?Object.defineProperty(l,o,u):l[o]=e[o]}l.default=e,a&&a.set(e,l);return l}(a(67294)),u=l(a(45697)),d=l(a(47166)),i=a(21538),c=l(a(33864)),s=l(a(23399)),f=a(51051),m=l(a(53560));function p(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,a=new WeakMap;return(p=function(e){return e?a:t})(e)}var b=d.default.bind(m.default),_={example:u.default.element,exampleSrc:u.default.element,exampleCssSrc:u.default.element,title:u.default.string,description:u.default.node,isExpanded:u.default.bool},w=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","true")},h=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","false")},v=function(e){var t=e.example,a=e.exampleSrc,l=e.exampleCssSrc,r=e.title,u=e.description,d=e.isExpanded,m=(0,o.useState)(d),p=(0,n.default)(m,2),_=p[0],v=p[1],g=(0,o.useState)(!1),y=(0,n.default)(g,2),S=y[0],E=y[1],O=o.default.useContext(i.ThemeContext),I=void 0!==l,x=function(){E(!S),_&&v(!_)},C=function(){v(!_),S&&E(!S)},k=function(e,t){e.nativeEvent.keyCode!==f.KEY_SPACE&&e.nativeEvent.keyCode!==f.KEY_RETURN||(e.preventDefault(),t())};return o.default.createElement("div",{className:b("template",O.className)},o.default.createElement("div",{className:b("header")},r&&o.default.createElement("h2",{className:b("title")},r)),o.default.createElement("div",{className:b("content")},u&&o.default.createElement("div",{className:b("description")},u),t),o.default.createElement("div",{className:b("footer")},a?o.default.createElement("div",{className:b("button-container")},I&&o.default.createElement("button",{type:"button",className:b("css-toggle","item",{"is-selected":S}),onClick:x,onKeyDown:function(e){return k(e,x)},onBlur:w,onMouseDown:h,tabIndex:0,"data-focus-styles-enabled":!0},o.default.createElement(c.default,{className:b("chevron")}),o.default.createElement("span",null,"CSS"),o.default.createElement(s.default,{className:b("chevron")})),o.default.createElement("button",{type:"button",className:b("code-toggle","item",{"is-selected":_}),onClick:C,onKeyDown:function(e){return k(e,C)},onBlur:w,onMouseDown:h,tabIndex:0,"data-focus-styles-enabled":!0},o.default.createElement(c.default,{className:b("chevron")}),o.default.createElement("span",null,"Code"),o.default.createElement(s.default,{className:b("chevron")}))):null,o.default.createElement("div",null,S&&o.default.createElement("div",{className:b("css")},l),_&&o.default.createElement("div",{className:b("code")},a))))};v.propTypes=_,v.defaultProps={isExpanded:!1};var g=v;t.Z=g},14312:function(e,t,a){var l=a(64836),r=a(18698);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=l(a(10434)),o=l(a(861)),u=l(a(27424)),d=l(a(38416)),i=S(a(67294)),c=l(a(45697)),s=a(25387),f=l(a(47166)),m=l(a(50026)),p=S(a(51051)),b=l(a(29270)),_=l(a(36432)),w=l(a(60523)),h=l(a(75859)),v=l(a(41302)),g=l(a(22084));function y(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,a=new WeakMap;return(y=function(e){return e?a:t})(e)}function S(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==r(e)&&"function"!=typeof e)return{default:e};var a=y(t);if(a&&a.has(e))return a.get(e);var l={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var u=n?Object.getOwnPropertyDescriptor(e,o):null;u&&(u.get||u.set)?Object.defineProperty(l,o,u):l[o]=e[o]}return l.default=e,a&&a.set(e,l),l}function E(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,l)}return a}var O=f.default.bind(h.default),I={ariaLabelledBy:c.default.string,ariaLabel:c.default.string,id:c.default.string.isRequired,columns:c.default.arrayOf(w.default.columnShape),rows:c.default.arrayOf(w.default.rowShape),defaultColumnWidth:c.default.number,columnHeaderHeight:c.default.string,rowHeight:c.default.string,rowHeaderIndex:c.default.number,onColumnResize:c.default.func,onCellSelect:c.default.func,onRowSelect:c.default.func,onRowSelectAll:c.default.func,onColumnSelect:c.default.func,onClearSelectedRows:c.default.func,onDisableSelectableRows:c.default.func,hasSelectableRows:c.default.bool,intl:c.default.shape({formatMessage:c.default.func}).isRequired};function x(e){var t=e.id,a=e.ariaLabelledBy,l=e.ariaLabel,r=e.columns,c=e.rows,s=e.onColumnResize,f=e.defaultColumnWidth,w=e.columnHeaderHeight,h=e.rowHeight,y=e.onColumnSelect,S=e.onCellSelect,I=e.onRowSelect,x=e.onRowSelectAll,C=e.onClearSelectedRows,k=e.onDisableSelectableRows,R=e.hasSelectableRows,M=e.intl,P=e.rowHeaderIndex,j=function(e){var t=function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?E(Object(a),!0).forEach((function(t){(0,d.default)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):E(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}({},e);return t.width=e.width||f,t.minimumWidth=e.minimumWidth||60,t.maximumWidth=e.maximumWidth||300,t},T=(R?[v.default.ROW_SELECTION_COLUMN]:[]).concat(r),N=(0,i.useState)(T.map((function(e){return j(e)}))),D=(0,u.default)(N,2),W=D[0],H=D[1],K=(0,i.useState)(0),L=(0,u.default)(K,2),z=L[0],q=L[1],A=(0,i.useState)(null),B=(0,u.default)(A,2),Y=B[0],G=B[1],U=(0,i.useRef)(0),F=(0,i.useRef)(200),V=(0,i.useRef)(0),X=(0,i.useRef)(),J=(0,i.useRef)(0),Z=(0,i.useRef)(0),Q=(0,i.useRef)(),$=(0,i.useState)(null),ee=(0,u.default)($,2),te=ee[0],ae=ee[1],le=(0,i.useState)(),re=(0,u.default)(le,2)[1],ne=(0,i.useContext)(m.default),oe=function(e){return R&&e<T.length&&T[e].id===v.default.ROW_SELECTION_COLUMN.id},ue=(0,i.useCallback)((function(e){X.current=e,q(X.current.offsetHeight-1)}),[]),de=function(e,t){var a=X.current.rows[e].cells[t];a.tabIndex=-1,oe(t)&&a.getElementsByTagName("input").length>0&&(a.getElementsByTagName("input")[0].tabIndex=-1)},ie=function(e,t,a){de(J.current,Z.current),J.current=e,Z.current=t;var l=X.current.rows[e].cells[t];if(oe(t)&&l.getElementsByTagName("input").length>0){var r=l.getElementsByTagName("input");l=(0,u.default)(r,1)[0]}l.tabIndex=0,a&&l.focus&&l.focus()};(0,i.useEffect)((function(){var e={row:J.current,col:Z.current+(R?1:-1)};R&&0===J.current&&0===Z.current?e={row:1,col:0}:R||0!==Z.current||(e={row:J.current,col:0}),ie(e.row,e.col,!1),null!=te&&ae(null),Q.current=M.formatMessage({id:R?"Terra.worklist-data-grid.row-selection-mode-enabled":"Terra.worklist-data-grid.row-selection-mode-disabled"}),re(Q.current),H(T.map((function(e){return j(e)})))}),[R]),(0,i.useEffect)((function(){H(T.map((function(e){return j(e)})))}),[r]);var ce=function(){Q.current="",c.find((function(e){return!0===e.isSelected}))?(Q.current=M.formatMessage({id:"Terra.worklist-data-grid.all-rows-unselected"}),C&&C()):k&&(Q.current=M.formatMessage({id:"Terra.worklist-data-grid.row-selection-mode-disabled"}),k())},se=function(e,t,a){var l,r="Terra.worklist-data-grid.all-rows-selected";e||(r=!c[a-1].isSelected?"Terra.worklist-data-grid.row-selection-template":"Terra.worklist-data-grid.row-selection-cleared-template",l=c[a-1].ariaLabel||a+1);Q.current=M.formatMessage({id:r},{row:l}),e&&x?x():I&&I(t)},fe=function(e,t,a){R||(Q.current=M.formatMessage({id:e?"Terra.worklist-data-grid.cell-selection-template":"Terra.worklist-data-grid.cell-selection-cleared"},{row:a.row+1,column:a.col+1})),ie(a.row,a.col,!0),e===(null==te?void 0:te.rowId)&&t===(null==te?void 0:te.columnId)||ae(e&&t?{rowId:e,columnId:t}:null)},me=function(e,t){if(a=t.row,l=t.col,!te||te.rowId!==a||te.columnId!==l){var a,l,r=function(e){return{row:e.row-1,col:e.col+(R?-1:0)}}(t),n=c[r.row].cells[r.col];!1===n.isSelectable||n.isMasked||(fe(e.rowId,e.columnId,t),S&&S(e.rowId,e.columnId))}},pe=function(e,t){me(e,t)},be=function(e,t,a){fe(null,null,a),se(!1,e,t)},_e=(0,i.useCallback)((function(e,t,a){V.current=X.current.offsetWidth,U.current=e.pageX,F.current=a,G(t)}),[]),we=function(){s&&s(W[Y].id,W[Y].width),G(null)};return i.default.createElement("div",{className:O("worklist-data-grid-container")},i.default.createElement("table",(0,n.default)({ref:ue,id:t,role:"grid","aria-labelledby":a,"aria-label":l,className:O("worklist-data-grid",ne.className),onKeyDown:function(e){var t,a,l={row:J.current,col:Z.current},r=l.row,n=l.col;switch(e.keyCode){case p.KEY_UP:r-=1;break;case p.KEY_DOWN:r+=1;break;case p.KEY_LEFT:e.metaKey?(n=0,e.ctrlKey&&(r=v.default.FIRST_NON_HEADER_ROW)):n-=1;break;case p.KEY_RIGHT:e.metaKey?(n=T.length-1,e.ctrlKey&&(r=c.length)):n+=1;break;case p.KEY_HOME:n=0,e.ctrlKey&&(r=v.default.FIRST_NON_HEADER_ROW);break;case p.KEY_END:n=T.length-1,e.ctrlKey&&(r=c.length);break;case p.KEY_ESCAPE:R?ce():fe(null,null,l),e.preventDefault();break;case p.KEY_A:return void(R&&(e.ctrlKey||e.metaKey)&&(se(!0,null,null),e.preventDefault()));default:return}r>c.length||n>=T.length?e.preventDefault():(n<0||r<0||(a={row:r,col:n},de((t=l).row,t.col),ie(a.row,a.col,!0)),e.preventDefault())}},null!=Y&&{onMouseUp:we,onMouseMove:function(e){if(null!=Y){var t=e.pageX-U.current,a=W[Y],l=a.minimumWidth,r=a.maximumWidth,n=Math.min(Math.max(F.current+t,l),r),u=(0,o.default)(W);u[Y].width=n,H(u),X.current.style.width="".concat(V+(n-F.current),"px")}},onMouseLeave:we}),i.default.createElement(_.default,{columns:W,headerHeight:w,tableHeight:z,tabStopColumnIndex:0===J.current?Z.current:void 0,onColumnSelect:function(e,t){fe(null,null,t),!y||R&&0===t.col||y(e)},onResizeMouseDown:_e}),i.default.createElement("tbody",null,c.map((function(e,t){return function(e,t){return i.default.createElement(g.default,{rowIndex:t,key:e.id,height:h,id:e.id,isSelected:e.isSelected,cells:e.cells,ariaLabel:e.ariaLabel,hasRowSelection:R,displayedColumns:T,rowHeaderIndex:P,onCellSelect:pe,onRowSelect:be,tabStopColumnIndex:J.current===t?Z.current:void 0,selectedCellColumnId:(null==te?void 0:te.rowId)===e.id?null==te?void 0:te.columnId:void 0})}(e,t+1)})))),i.default.createElement(b.default,{"aria-live":"polite",text:Q.current}))}x.propTypes=I,x.defaultProps={rowHeaderIndex:0,defaultColumnWidth:200,columnHeaderHeight:"2.5rem",rowHeight:"2.5rem"};var C=(0,s.injectIntl)(x);t.default=C},25898:function(){"undefined"!=typeof Element&&(Element.prototype.matches||(Element.prototype.matches=Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector),Element.prototype.closest||(Element.prototype.closest=function(e){var t=this;do{if(t.matches(e))return t;t=t.parentElement||t.parentNode}while(null!==t&&1===t.nodeType);return null}))},60523:function(e,t,a){var l=a(64836);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=l(a(54142)),n=l(a(31035)),o=a(66917),u={cellShape:n.default,columnShape:o.columnShape,rowShape:r.default,SortIndicators:o.SortIndicators};t.default=u},31035:function(e,t,a){var l=a(64836);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=l(a(45697)),n=r.default.shape({content:r.default.node,isMasked:r.default.bool,isSelectable:r.default.bool});t.default=n},66917:function(e,t,a){var l=a(64836);Object.defineProperty(t,"__esModule",{value:!0}),t.columnShape=t.SortIndicators=void 0;var r=l(a(45697)),n={ASCENDING:"ascending",DESCENDING:"descending"};t.SortIndicators=n;var o=r.default.shape({id:r.default.string.isRequired,displayName:r.default.string,hasError:r.default.bool,isResizable:r.default.bool,isSelectable:r.default.bool,minimumWidth:r.default.number,maximumWidth:r.default.number,width:r.default.number,sortIndicator:r.default.oneOf(Object.values(n))});t.columnShape=o},54142:function(e,t,a){var l=a(64836);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=l(a(45697)),n=l(a(31035)),o=r.default.shape({id:r.default.string.isRequired,cells:r.default.arrayOf(n.default),isSelected:r.default.bool,ariaLabel:r.default.string});t.default=o},71079:function(e,t,a){var l=a(64836),r=a(18698);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=p(a(67294)),o=l(a(45697)),u=p(a(51051));a(25898);var d=a(25387),i=l(a(47166)),c=l(a(50026)),s=l(a(41302)),f=l(a(14400));function m(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,a=new WeakMap;return(m=function(e){return e?a:t})(e)}function p(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==r(e)&&"function"!=typeof e)return{default:e};var a=m(t);if(a&&a.has(e))return a.get(e);var l={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var u=n?Object.getOwnPropertyDescriptor(e,o):null;u&&(u.get||u.set)?Object.defineProperty(l,o,u):l[o]=e[o]}return l.default=e,a&&a.set(e,l),l}var b=i.default.bind(f.default),_={rowId:o.default.string.isRequired,columnId:o.default.string.isRequired,rowIndex:o.default.number,columnIndex:o.default.number,children:o.default.node,isMasked:o.default.bool,isSelectable:o.default.bool,isTabStop:o.default.bool,isSelected:o.default.bool,ariaLabel:o.default.string,isRowHeader:o.default.bool,onCellSelect:o.default.func,height:o.default.string,intl:o.default.shape({formatMessage:o.default.func}).isRequired};function w(e){var t=e.rowId,a=e.columnId,l=e.rowIndex,r=e.columnIndex,o=e.isTabStop,d=e.ariaLabel,i=e.isRowHeader,f=e.isSelected,m=e.isMasked,p=e.isSelectable,_=e.children,w=e.onCellSelect,h=e.height,v=e.intl,g=(0,n.useContext)(c.default),y=d;m?y=v.formatMessage({id:"Terra.worklistDataGrid.maskedCell"}):_||(y=v.formatMessage({id:"Terra.worklistDataGrid.blank"}));var S=b("worklist-data-grid-cell",{masked:m,selectable:p&&!m,selected:f&&!m,blank:!_},g.className),E=i?"th":"td";return n.default.createElement(E,{"aria-selected":f,"aria-label":y,tabIndex:o?0:-1,className:S,onMouseDown:function(e){m||!p?(e.stopPropagation(),e.preventDefault()):w&&(w({rowId:t,columnId:a},{row:l,col:r}),e.stopPropagation())},onKeyDown:function(e){switch(e.keyCode){case u.KEY_SPACE:m||!p?(e.stopPropagation(),e.preventDefault()):w&&(w({rowId:t,columnId:a},{row:l,col:r}),e.stopPropagation(),e.preventDefault());break;case u.KEY_C:(e.ctrlKey||e.metaKey)&&s.default.writeToClipboard(e.target.textContent)}}},!m&&_&&n.default.createElement("div",{className:b("cell-content",g.className),style:{height:h}},_))}w.propTypes=_,w.defaultProps={isTabStop:!1,isRowHeader:!1,isSelected:!1,isSelectable:!0,isMasked:!1};var h=(0,d.injectIntl)(w);t.default=h},36432:function(e,t,a){var l=a(64836);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=l(a(67294)),n=l(a(45697)),o=l(a(60523)),u=l(a(39238)),d={columns:n.default.arrayOf(o.default.columnShape).isRequired,headerHeight:n.default.string.isRequired,tableHeight:n.default.number,tabStopColumnIndex:n.default.number,onColumnSelect:n.default.func,onResizeMouseDown:n.default.func},i=function(e){var t=e.columns,a=e.headerHeight,l=e.tableHeight,n=e.tabStopColumnIndex,o=e.onColumnSelect,d=e.onResizeMouseDown;return r.default.createElement("thead",null,r.default.createElement("tr",{className:"column-header-row",height:a},t.map((function(e,t){return function(e,t){return r.default.createElement(u.default,{key:e.id,id:e.id,rowIndex:0,columnIndex:t,displayName:e.displayName,width:e.width,minimumWidth:e.minimumWidth,maximumWidth:e.maximumWidth,headerHeight:a,isResizable:e.isResizable,isSelectable:e.isSelectable,tableHeight:l,isTabStop:n===t,hasError:e.hasError,sortIndicator:e.sortIndicator,onColumnSelect:o,onResizeMouseDown:d})}(e,t)}))))};i.propTypes=d;var c=i;t.default=c},39238:function(e,t,a){var l=a(64836),r=a(18698);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=v(a(67294)),o=l(a(45697)),u=l(a(47166)),d=a(25387),i=l(a(50026)),c=l(a(33710)),s=l(a(84784)),f=l(a(51331)),m=v(a(51051)),p=l(a(60523)),b=l(a(91746)),_=l(a(41302)),w=l(a(91297));function h(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,a=new WeakMap;return(h=function(e){return e?a:t})(e)}function v(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==r(e)&&"function"!=typeof e)return{default:e};var a=h(t);if(a&&a.has(e))return a.get(e);var l={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var u=n?Object.getOwnPropertyDescriptor(e,o):null;u&&(u.get||u.set)?Object.defineProperty(l,o,u):l[o]=e[o]}return l.default=e,a&&a.set(e,l),l}var g=u.default.bind(b.default),y={id:o.default.string.isRequired,displayName:o.default.string,sortIndicator:o.default.oneOf(Object.values(p.default.SortIndicators)),hasError:o.default.bool,minimumWidth:o.default.number,maximumWidth:o.default.number,isSelectable:o.default.bool,isResizable:o.default.bool,tableHeight:o.default.number,width:o.default.number.isRequired,headerHeight:o.default.string.isRequired,rowIndex:o.default.number,columnIndex:o.default.number,isTabStop:o.default.bool,onColumnSelect:o.default.func,onResizeMouseDown:o.default.func,intl:o.default.shape({formatMessage:o.default.func})},S=function(e){var t,a=e.id,l=e.displayName,r=e.sortIndicator,o=e.hasError,u=e.isSelectable,d=e.isResizable,b=e.tableHeight,h=e.width,v=e.minimumWidth,y=e.maximumWidth,S=e.headerHeight,E=e.onColumnSelect,O=e.intl,I=e.rowIndex,x=e.columnIndex,C=e.onResizeMouseDown,k=e.isTabStop,R=(0,n.useRef)(),M=(0,n.useCallback)((function(e){R.current=e}),[]),P=(0,n.useCallback)((function(e){C&&C(e,x,R.current.offsetWidth)}),[x,C]),j=o&&n.default.createElement(f.default,{a11yLabel:O.formatMessage({id:"Terra.worklistDataGrid.columnError"}),className:g("error-icon")});r===p.default.SortIndicators.ASCENDING?t=n.default.createElement(c.default,null):r===p.default.SortIndicators.DESCENDING&&(t=n.default.createElement(s.default,null));var T=(0,n.useContext)(i.default);return n.default.createElement("th",{ref:M,key:a,className:g("column-header",T.className,{selectable:u}),tabIndex:k?0:-1,role:"columnheader",scope:"col","aria-sort":r,onMouseDown:u&&E?function(e){E(a,{row:I,col:x}),e.stopPropagation()}:void 0,onKeyDown:u&&E?function(e){switch(e.keyCode){case m.KEY_SPACE:case m.KEY_RETURN:E(a,{row:I,col:x}),e.stopPropagation(),e.preventDefault();break;case m.KEY_C:(e.ctrlKey||e.metaKey)&&_.default.writeToClipboard(e.target.textContent)}}:void 0,style:{width:"".concat(h,"px"),height:S}},n.default.createElement("div",{className:g("header-container"),role:l&&"button"},j,n.default.createElement("span",null,l),t),d&&n.default.createElement(w.default,{columnIndex:x,columnText:l,columnWidth:h,height:b,minimumWidth:v,maximumWidth:y,onResizeMouseDown:P}))};S.propTypes=y,S.defaultProps={isTabStop:!1,hasError:!1,isSelectable:!0,isResizable:!0};var E=(0,d.injectIntl)(S);t.default=E},91297:function(e,t,a){var l=a(64836),r=a(18698);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=l(a(27424)),o=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==r(e)&&"function"!=typeof e)return{default:e};var a=f(t);if(a&&a.has(e))return a.get(e);var l={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var u=n?Object.getOwnPropertyDescriptor(e,o):null;u&&(u.get||u.set)?Object.defineProperty(l,o,u):l[o]=e[o]}l.default=e,a&&a.set(e,l);return l}(a(67294)),u=l(a(45697)),d=a(25387),i=l(a(47166)),c=l(a(50026)),s=l(a(91469));function f(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,a=new WeakMap;return(f=function(e){return e?a:t})(e)}var m=i.default.bind(s.default),p={columnText:u.default.string.isRequired,columnWidth:u.default.number.isRequired,height:u.default.number.isRequired,minimumWidth:u.default.number.isRequired,maximumWidth:u.default.number.isRequired,onResizeMouseDown:u.default.func.isRequired,intl:u.default.shape({formatMessage:u.default.func}).isRequired},b=function(e){var t=e.columnText,a=e.columnWidth,l=e.height,r=e.minimumWidth,u=e.maximumWidth,d=e.onResizeMouseDown,i=e.intl,s=(0,o.useState)(!1),f=(0,n.default)(s,2),p=f[0],b=f[1],_=(0,o.useContext)(c.default),w=(0,o.useRef)(),h=(0,o.useCallback)((function(e){w.current=e}),[]);return o.default.createElement("div",{ref:h,draggable:!0,role:"slider",tabIndex:-1,"aria-hidden":!p,"aria-valuemin":r,"aria-valuenow":a,"aria-valuemax":u,"aria-label":t,"aria-valuetext":i.formatMessage({id:"Terra.worklist-data-grid.resizeHandleValueText"},{columnWidth:a}),style:{height:"".concat(l,"px")},onMouseDown:function(e){w.current.focus(),d(e),e.stopPropagation(),e.preventDefault()},onFocus:function(){return b(!0)},onBlur:function(){return b(!1)},className:m("resize-handle",_.className)})};b.propTypes=p;var _=(0,d.injectIntl)(b);t.default=_},22084:function(e,t,a){var l=a(64836),r=a(18698);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==r(e)&&"function"!=typeof e)return{default:e};var a=p(t);if(a&&a.has(e))return a.get(e);var l={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var u=n?Object.getOwnPropertyDescriptor(e,o):null;u&&(u.get||u.set)?Object.defineProperty(l,o,u):l[o]=e[o]}l.default=e,a&&a.set(e,l);return l}(a(67294)),o=l(a(45697)),u=l(a(50026)),d=l(a(47166));a(25898);var i=l(a(97550)),c=l(a(85224)),s=l(a(71079)),f=l(a(31035)),m=l(a(60523));function p(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,a=new WeakMap;return(p=function(e){return e?a:t})(e)}var b=d.default.bind(i.default),_={id:o.default.string.isRequired,rowIndex:o.default.number,height:o.default.string,cells:o.default.arrayOf(f.default),isSelected:o.default.bool,ariaLabel:o.default.string,hasRowSelection:o.default.bool,onRowSelect:o.default.func,displayedColumns:o.default.arrayOf(m.default.columnShape),onCellSelect:o.default.func,rowHeaderIndex:o.default.number,selectedCellColumnId:o.default.string,tabStopColumnIndex:o.default.number};function w(e){var t=e.rowIndex,a=e.height,l=e.hasRowSelection,r=e.id,o=e.isSelected,d=e.cells,i=e.ariaLabel,f=e.displayedColumns,m=e.rowHeaderIndex,p=e.onRowSelect,_=e.onCellSelect,w=e.selectedCellColumnId,h=e.tabStopColumnIndex,v=(0,n.useContext)(u.default),g=l?1:0,y=function(e,a){l?p&&p(e.rowId,t,a):_&&_(e,a)},S=l?n.default.createElement(c.default,{rowId:r,columnId:f[0].id,rowIndex:t,columnIndex:0,isTabStop:0===h,isSelected:o,ariaLabel:i,onCellSelect:y}):null;return n.default.createElement("tr",{className:b([o?"row-selected":"worklist-data-grid-row",v.className]),style:{height:a}},S,d.map((function(e,o){return function(e,t,r,o){var u=f[t].id,d=t===m+g;return n.default.createElement(s.default,{rowId:o,columnId:u,rowIndex:e,columnIndex:t,key:"".concat(o,"_").concat(u),isTabStop:h===t,isSelected:!l&&w===u,isMasked:r.isMasked,isSelectable:r.isSelectable,isRowHeader:d,onCellSelect:y,height:a},r.content)}(t,o+g,e,r)})))}w.propTypes=_,w.defaultProps={hasRowSelection:!1,rowHeaderIndex:0,isSelected:!1};var h=w;t.default=h},85224:function(e,t,a){var l=a(64836);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=l(a(67294)),n=l(a(45697));a(25898);var o=a(25387),u=l(a(71079)),d={rowId:n.default.string.isRequired,columnId:n.default.string.isRequired,rowIndex:n.default.number,columnIndex:n.default.number,isTabStop:n.default.bool,isSelected:n.default.bool,ariaLabel:n.default.string,onCellSelect:n.default.func,intl:n.default.shape({formatMessage:n.default.func}).isRequired};function i(e){var t=e.rowId,a=e.columnId,l=e.rowIndex,n=e.columnIndex,o=e.isTabStop,d=e.isSelected,i=e.ariaLabel,c=e.onCellSelect,s=e.intl.formatMessage({id:"Terra.worklist-data-grid.row-index"},{row:l}),f=r.default.createElement("input",{type:"checkbox","aria-label":i||s,"aria-checked":d,tabIndex:o?0:-1,checked:d});return r.default.createElement(u.default,{rowId:t,columnId:a,key:"".concat(t,"_").concat(a),rowIndex:l,columnIndex:n,isTabStop:!1,isSelected:!1,onCellSelect:c},f)}i.propTypes=d;var c=(0,o.injectIntl)(i);t.default=c},41302:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a={ROW_SELECTION_COLUMN:{id:"WorklistDataGrid-rowSelectionColumn",width:40,isSelectable:!1,isResizable:!1},FIRST_NON_HEADER_ROW:1,writeToClipboard:function(e){"clipboard"in navigator?navigator.clipboard.writeText(e):document.execCommand("copy",!0,e)}};t.default=a},53560:function(e,t,a){a.r(t),t.default={"orion-fusion-theme":"ExampleTemplate-module__orion-fusion-theme___GzA23",template:"ExampleTemplate-module__template___a4uPk",header:"ExampleTemplate-module__header___iFXV3",content:"ExampleTemplate-module__content___48m4Q",description:"ExampleTemplate-module__description___NwBJo",footer:"ExampleTemplate-module__footer___GpSoG","button-container":"ExampleTemplate-module__button-container___rAD11",css:"ExampleTemplate-module__css___+jtk1",code:"ExampleTemplate-module__code___7rC6C","css-toggle":"ExampleTemplate-module__css-toggle___chHK7","code-toggle":"ExampleTemplate-module__code-toggle___TGlE-","is-selected":"ExampleTemplate-module__is-selected___0BYwS",item:"ExampleTemplate-module__item___8FTQq",chevron:"ExampleTemplate-module__chevron___VbY7N",title:"ExampleTemplate-module__title___r+nbJ","dynamic-content":"ExampleTemplate-module__dynamic-content___k+1H7"}},75859:function(e,t,a){a.r(t),t.default={"orion-fusion-theme":"WorklistDataGrid-module__orion-fusion-theme___141kX","worklist-data-grid":"WorklistDataGrid-module__worklist-data-grid___RAK1p","worklist-data-grid-container":"WorklistDataGrid-module__worklist-data-grid-container___+Kr3b"}},14400:function(e,t,a){a.r(t),t.default={"orion-fusion-theme":"Cell-module__orion-fusion-theme___AeIuD","worklist-data-grid-cell":"Cell-module__worklist-data-grid-cell___5B8OD",selected:"Cell-module__selected___ytX9N",masked:"Cell-module__masked___PItZ5","cell-content":"Cell-module__cell-content___3qFwR",selectable:"Cell-module__selectable___DEJOS"}},91746:function(e,t,a){a.r(t),t.default={"orion-fusion-theme":"ColumnHeaderCell-module__orion-fusion-theme___0BPq-","column-header":"ColumnHeaderCell-module__column-header___UWAX5","header-container":"ColumnHeaderCell-module__header-container___yc7sc","error-icon":"ColumnHeaderCell-module__error-icon___b6J6S",selectable:"ColumnHeaderCell-module__selectable___79fRp"}},91469:function(e,t,a){a.r(t),t.default={"orion-fusion-theme":"ColumnResizeHandle-module__orion-fusion-theme___ahTWl","resize-handle":"ColumnResizeHandle-module__resize-handle___1P5Mz"}},97550:function(e,t,a){a.r(t),t.default={"orion-fusion-theme":"Row-module__orion-fusion-theme___kPII+","worklist-data-grid-row":"Row-module__worklist-data-grid-row___ZUmUo","row-selected":"Row-module__row-selected___AAgtl"}},33864:function(e,t,a){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=n(a(67294)),r=n(a(99139));function n(e){return e&&e.__esModule?e:{default:e}}function o(){return o=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var l in a)Object.prototype.hasOwnProperty.call(a,l)&&(e[l]=a[l])}return e},o.apply(this,arguments)}var u=function(e){var t=o({},e);return l.default.createElement(r.default,t,l.default.createElement("path",{d:"M10.3 24L33.8 0l3.9 3.8L18 24l19.7 20.2-3.9 3.8z"}))};u.displayName="IconChevronLeft",u.defaultProps={className:"",viewBox:"0 0 48 48",xmlns:"http://www.w3.org/2000/svg","data-name":"Layer 1",isBidi:!0};var d=u;t.default=d},84784:function(e,t,a){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=n(a(67294)),r=n(a(99139));function n(e){return e&&e.__esModule?e:{default:e}}function o(){return o=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var l in a)Object.prototype.hasOwnProperty.call(a,l)&&(e[l]=a[l])}return e},o.apply(this,arguments)}var u=function(e){var t=o({},e);return l.default.createElement(r.default,t,l.default.createElement("path",{d:"M47.9 24.5l-3.8-3.8L27 37.4V0h-6v37.4L3.9 20.7.1 24.5 24 48z"}))};u.displayName="IconDown",u.defaultProps={viewBox:"0 0 48 48",xmlns:"http://www.w3.org/2000/svg","data-name":"Layer 1"};var d=u;t.default=d},33710:function(e,t,a){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=n(a(67294)),r=n(a(99139));function n(e){return e&&e.__esModule?e:{default:e}}function o(){return o=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var l in a)Object.prototype.hasOwnProperty.call(a,l)&&(e[l]=a[l])}return e},o.apply(this,arguments)}var u=function(e){var t=o({},e);return l.default.createElement(r.default,t,l.default.createElement("path",{d:"M24 0L.1 23.5l3.8 3.8L21 10.6V48h6V10.6l17.1 16.7 3.8-3.8z"}))};u.displayName="IconUp",u.defaultProps={viewBox:"0 0 48 48",xmlns:"http://www.w3.org/2000/svg","data-name":"Layer 1"};var d=u;t.default=d}}]);