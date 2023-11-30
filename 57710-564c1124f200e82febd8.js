"use strict";(self.webpackChunkterra_ui=self.webpackChunkterra_ui||[]).push([[57710],{61306:function(e,t,r){r.r(t),t.default={"data-grid-container":"DataGrid-module__data-grid-container___wJCne"}},872:function(e,t,r){r.r(t),t.default={"flowsheet-data-grid-container":"FlowsheetDataGrid-module__flowsheet-data-grid-container___1Jt6A"}},38346:function(e,t,r){r.r(t),t.default={"worklist-data-grid-container":"WorklistDataGrid-module__worklist-data-grid-container___nc9kr"}},33464:function(e,t,r){var n=r(64836),l=r(18698);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=n(r(10434)),o=n(r(861)),u=n(r(27424)),i=n(r(38416)),c=O(r(67294)),d=n(r(45697)),f=r(25387),s=n(r(47166)),m=O(r(51051)),b=O(r(7270)),p=n(r(29270)),w=n(r(73181)),g=r(37522),h=n(r(14035)),v=n(r(63918)),C=n(r(61306));function y(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(y=function(e){return e?r:t})(e)}function O(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=l(e)&&"function"!=typeof e)return{default:e};var r=y(t);if(r&&r.has(e))return r.get(e);var n={__proto__:null},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var u=a?Object.getOwnPropertyDescriptor(e,o):null;u&&(u.get||u.set)?Object.defineProperty(n,o,u):n[o]=e[o]}return n.default=e,r&&r.set(e,n),n}function E(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function S(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?E(Object(r),!0).forEach((function(t){(0,i.default)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):E(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}r(82886);var _=s.default.bind(C.default),R={ariaLabelledBy:d.default.string,ariaLabel:d.default.string,id:d.default.string.isRequired,rows:d.default.arrayOf(w.default),pinnedColumns:d.default.arrayOf(g.columnShape),overflowColumns:d.default.arrayOf(g.columnShape),defaultColumnWidth:d.default.number,columnHeaderHeight:d.default.string,columnResizeIncrement:d.default.number,rowHeight:d.default.string,rowHeaderIndex:v.default,onColumnResize:d.default.func,onCellSelect:d.default.func,onColumnSelect:d.default.func,onClearSelection:d.default.func,onRangeSelection:d.default.func,onRowSelectionHeaderSelect:d.default.func,onCellRangeSelect:d.default.func,hasSelectableRows:d.default.bool},I=(0,f.injectIntl)((function(e){var t=e.id,r=e.ariaLabelledBy,n=e.ariaLabel,l=e.rows,a=e.pinnedColumns,i=e.overflowColumns,d=e.onColumnResize,f=e.defaultColumnWidth,s=e.columnHeaderHeight,w=e.columnResizeIncrement,g=e.rowHeight,v=e.onColumnSelect,C=e.onCellSelect,y=e.onClearSelection,O=e.onRangeSelection,E=e.onRowSelectionHeaderSelect,R=e.onCellRangeSelect,I=e.hasSelectableRows,D=e.rowHeaderIndex,H=(I?[h.default.ROW_SELECTION_COLUMN]:[]).concat(a).concat(i),P=l.map((function(e){return S(S({},e),{},{cells:e.cells.map((function(e){return S(S({},e),{},{isSelectable:!1!==e.isSelectable})}))})})),k=(0,c.useRef)(),j=(0,c.useRef)(),x=(0,c.useRef)(),M=(0,c.useRef)(!0),N=(0,c.useState)(!1),T=(0,u.default)(N,2),W=T[0],K=T[1],L=(0,c.useState)(0),G=(0,u.default)(L,2),A=G[0],Y=G[1],B=(0,c.useState)(0),F=(0,u.default)(B,2),z=F[0],U=F[1],q=(0,c.useState)(!1),X=(0,u.default)(q,2),J=X[0],Z=X[1],Q=(0,c.useState)(null),V=(0,u.default)(Q,2),$=V[0],ee=V[1],te=(0,c.useMemo)((function(){return{role:b.GridConstants.GRID,setCellAriaLiveMessage:ee,tableRef:k,tableContainerRef:x}}),[k,x]),re=function(e,t,r){ee(null),Y(e),U(t);var n,l=k.current.rows[e].cells[t];if(n=t,I&&n<H.length&&H[n].id===h.default.ROW_SELECTION_COLUMN.id&&l.getElementsByTagName("input").length>0){var a=l.getElementsByTagName("input");l=(0,u.default)(a,1)[0]}r&&l.focus()};(0,c.useImperativeHandle)(e.focusFuncRef,(function(){return{setFocusedRowCol:re,getFocusedCell:function(){return{row:A,col:z}}}}),[z,A]);var ne=(0,c.useCallback)((function(e){var t=H.findIndex((function(t){return t.id===e}));U(t),v&&v(e)}),[v,H]),le=(0,c.useCallback)((function(){U(0),Y(0),E&&E()}),[E]),ae=(0,c.useCallback)((function(e){Y(e.rowIndex),U(e.columnIndex),C&&C(e)}),[C]);return c.default.createElement("div",{tabIndex:0,ref:j,onKeyDown:function(e){var r={row:A,col:z},n=r.row,u=r.col;K(!1);var i=e.target;if(e.keyCode===m.KEY_TAB||!(function(e){if("input"===e.tagName.toLowerCase()){var t=e.type;return["text","password","number","email","tel","url","search","date","datetime","datetime-local","time","month","week"].indexOf(t)>=0}return!1}(i)||["textarea","select"].indexOf(i.tagName.toLowerCase())>=0||i.hasAttribute("contentEditable")&&!1!==i.getAttribute("contentEditable"))){switch(e.keyCode){case m.KEY_UP:n-=1;break;case m.KEY_DOWN:n+=1;break;case m.KEY_LEFT:e.metaKey?(u=0,e.ctrlKey&&(n=1)):(u-=1,K(0===r.row));break;case m.KEY_RIGHT:e.metaKey?(u=H.length-1,e.ctrlKey&&(n=l.length)):u+=1;break;case m.KEY_HOME:u=0,e.ctrlKey&&(n=1);break;case m.KEY_END:u=H.length-1,e.ctrlKey&&(n=l.length);break;case m.KEY_ESCAPE:return y&&y(),void e.preventDefault();case m.KEY_TAB:return function(e){var r=(0,o.default)(document.body.querySelectorAll("".concat("a[href]:not([tabindex='-1']), area[href]:not([tabindex='-1']), input:not([disabled]):not([tabindex='-1']), select:not([disabled]):not([tabindex='-1']), textarea:not([disabled]):not([tabindex='-1']), button:not([disabled]):not([tabindex='-1']), iframe:not([tabindex='-1']), [tabindex]:not([tabindex='-1']), [contentEditable=true]:not([tabindex='-1'])"))).filter((function(e){return!(e.hasAttribute("disabled")||e.getAttribute("aria-hidden")||!(e.offsetWidth||e.offsetHeight||e.getClientRects().length)||"hidden"===window.getComputedStyle(e).visibility||null!==e.closest("[inert]")||e.id!==t&&j.current.contains(e))})),n=r.indexOf(j.current);if(n>-1){var l,a=e?1:-1;n+a<r.length?l=r[n+a]:r[0].id!==t&&(l=r[0]),l&&l.focus()}}(!e.shiftKey),void e.preventDefault();default:return}var c=new Set([m.KEY_UP,m.KEY_DOWN]),d=new Set([m.KEY_UP,m.KEY_DOWN,m.KEY_LEFT,m.KEY_RIGHT]);O&&e.shiftKey&&c.has(e.keyCode)&&O(r.row,r.col,e.keyCode),R&&e.shiftKey&&d.has(e.keyCode)&&R(r.row,r.col,e.keyCode),n>l.length||u>=H.length||u<0||n<0||function(e,t){var r=x.current.getBoundingClientRect(),n=k.current.rows[0].cells[t.col].getBoundingClientRect(),l=k.current.rows[t.row].cells[t.col].getBoundingClientRect();if(l.right>r.right)x.current.scrollBy(l.right-r.right,0);else{var o=0,u=I?1:0,i=a.length-1+u;if(i>=0){if(t.col>i){var c=k.current.rows[t.row].cells[i].getBoundingClientRect();o=l.left-c.right}}else o=l.left-r.left;o<0&&x.current.scrollBy(o,0)}var d=l.top-n.bottom;d<0&&x.current.scrollBy(0,d),re(t.row,t.col,!0)}(0,{row:n,col:u}),e.preventDefault()}},onMouseDown:function(){M.current=!1},onFocus:function(e){e.currentTarget.contains(e.relatedTarget)||M.current&&(re(A,z,!0),Z(!0)),M.current=!0},onBlur:function(e){e.currentTarget.contains(e.relatedTarget)||Z(!1)},id:t,className:_("data-grid-container")},c.default.createElement(b.GridContext.Provider,{value:te},c.default.createElement(b.default,{id:"".concat(t,"-table"),rows:P,ariaLabelledBy:r,ariaLabel:n,activeColumnIndex:J&&0===A?z:void 0,isActiveColumnResizing:0===A&&W,columnResizeIncrement:w,pinnedColumns:a,overflowColumns:i,defaultColumnWidth:f,columnHeaderHeight:s,rowHeight:g,rowHeaderIndex:D,onColumnResize:d,onColumnSelect:ne,onCellSelect:ae,onRowSelectionHeaderSelect:le,hasSelectableRows:I,isStriped:!0})),c.default.createElement(p.default,{"aria-live":"polite","aria-atomic":"true",text:$}))}));I.propTypes=R,I.defaultProps={rowHeaderIndex:0,defaultColumnWidth:200,columnHeaderHeight:"2.5rem",rowHeight:"2.5rem",pinnedColumns:[],overflowColumns:[],rows:[]};t.default=(0,c.forwardRef)((function(e,t){return c.default.createElement(I,(0,a.default)({},e,{focusFuncRef:t}))}))},6718:function(e,t,r){var n=r(64836),l=r(18698);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=n(r(861)),o=n(r(38416)),u=n(r(27424)),i=v(r(67294)),c=n(r(45697)),d=r(25387),f=n(r(47166)),s=v(r(51051)),m=n(r(29270)),b=n(r(33464)),p=n(r(73181)),w=r(37522),g=n(r(872));function h(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(h=function(e){return e?r:t})(e)}function v(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=l(e)&&"function"!=typeof e)return{default:e};var r=h(t);if(r&&r.has(e))return r.get(e);var n={__proto__:null},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var u=a?Object.getOwnPropertyDescriptor(e,o):null;u&&(u.get||u.set)?Object.defineProperty(n,o,u):n[o]=e[o]}return n.default=e,r&&r.set(e,n),n}function C(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function y(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?C(Object(r),!0).forEach((function(t){(0,o.default)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):C(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var O=f.default.bind(g.default),E={ariaLabelledBy:c.default.string,ariaLabel:c.default.string,id:c.default.string.isRequired,rows:c.default.arrayOf(p.default),columns:c.default.arrayOf(w.columnShape),defaultColumnWidth:c.default.number,columnHeaderHeight:c.default.string,rowHeight:c.default.string,onCellSelect:c.default.func,onClearSelectedCells:c.default.func,onCellRangeSelect:c.default.func,intl:c.default.shape({formatMessage:c.default.func}).isRequired};function S(e){var t=e.id,r=e.ariaLabelledBy,n=e.ariaLabel,l=e.rows,o=e.columns,c=e.defaultColumnWidth,d=e.columnHeaderHeight,f=e.rowHeight,p=e.onCellSelect,w=e.onClearSelectedCells,g=e.onCellRangeSelect,h=e.intl,v=(0,i.useRef)(null),C=(0,i.useRef)([]),E=(0,i.useState)(null),S=(0,u.default)(E,2),_=S[0],R=S[1],I=(0,i.useRef)(!1),D=(0,i.useMemo)((function(){return o.map((function(e){return y(y({},e),{},{isSelectable:!1!==e.isSelectable,isResizable:!1})}))}),[o]),H=D.length?[D[0]]:[],P=D.length>1?D.slice(1):[],k=(0,i.useMemo)((function(){var e=i.default.createElement(i.default.Fragment,null,i.default.createElement("span",{"aria-hidden":!0},h.formatMessage({id:"Terra.flowsheetDataGrid.no-result-display"})),i.default.createElement(m.default,{text:h.formatMessage({id:"Terra.flowsheetDataGrid.no-result"})})),t=(0,a.default)(l);return t.forEach((function(r,n){var l=(0,a.default)(r.cells);l.forEach((function(t,r){var n;l[r].isSelectable=!1!==t.isSelectable,null!==(n=t.content)&&""!==n&&"--"!==n||0===r||(l[r].content=e)})),t[n].cells=l})),t}),[h,l]);(0,i.useEffect)((function(){var e=(0,a.default)(C.current),t=[];l.forEach((function(e){e.cells.forEach((function(r,n){r.isSelected&&t.push({rowId:e.id,columnId:o[n].id})}))})),C.current=[].concat(t),C.current.length||(v.current=null),e.length>0&&0===C.current.length?R(h.formatMessage({id:"Terra.flowsheetDataGrid.no-cells-selected"})):C.current.length&&R(h.formatMessage({id:"Terra.flowsheetDataGrid.cells-selected"},{cellCount:C.current.length}))}),[h,l,o,R]);var j=(0,i.useCallback)((function(){w&&w()}),[w]),x=(0,i.useCallback)((function(e,t){for(var r=l.findIndex((function(e){return e.id===v.current.rowId})),n=o.findIndex((function(e){return e.id===v.current.columnId})),a=Math.min(r,e-1),u=Math.max(r,e-1),i=Math.min(n,t),c=Math.max(n,t),d=[],f=a;f<=u;f+=1)for(var s=l[f].id,m=i;m<=c;m+=1){var b=o[m].id;d.push({rowId:s,columnId:b})}g&&g(d)}),[l,o,g]),M=(0,i.useCallback)((function(e){e.isCellSelectable&&0!==e.columnIndex&&(e.isShiftPressed&&null!==v.current?x(e.rowIndex,e.columnIndex):p&&(v.current={rowId:e.rowId,columnId:e.columnId},p(e.rowId,e.columnId)))}),[p,x]),N=(0,i.useCallback)((function(e,t,r){if(!(t<=0)||I.current){I.current||(I.current=!0,null===v.current&&(v.current={rowId:l[e-1].id,columnId:o[t].id}));var n=e,a=t;switch(r){case s.KEY_UP:n-=1;break;case s.KEY_DOWN:n+=1;break;case s.KEY_LEFT:a-=1;break;case s.KEY_RIGHT:a+=1}n<=0?n=1:n>l.length&&(n=l.length),a<=0?a=1:a>=o.length&&(a=o.length-1),x(n,a)}}),[l,o,x]);return i.default.createElement("div",{className:O("flowsheet-data-grid-container"),onKeyUp:function(e){if(e.keyCode===s.KEY_SHIFT)I.current&&(I.current=!1,v.current=null)}},i.default.createElement(b.default,{id:t,ariaLabel:n,ariaLabelledBy:r,rows:k,rowHeight:f,rowHeaderIndex:0,pinnedColumns:H,overflowColumns:P,defaultColumnWidth:c,columnHeaderHeight:d,onCellSelect:M,onClearSelection:j,onCellRangeSelect:N}),i.default.createElement(m.default,{"aria-live":"polite",text:_}))}S.propTypes=E,S.defaultProps={defaultColumnWidth:200,columnHeaderHeight:"2.5rem",rowHeight:"2.5rem",rows:[],columns:[]};t.default=(0,d.injectIntl)(S)},1067:function(e,t,r){var n=r(64836),l=r(18698);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=n(r(861)),o=n(r(38416)),u=n(r(27424)),i=y(r(67294)),c=n(r(45697)),d=r(25387),f=n(r(47166)),s=y(r(51051)),m=n(r(29270)),b=n(r(73181)),p=r(37522),w=n(r(63918)),g=n(r(38346)),h=n(r(33464)),v=n(r(14035));function C(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(C=function(e){return e?r:t})(e)}function y(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=l(e)&&"function"!=typeof e)return{default:e};var r=C(t);if(r&&r.has(e))return r.get(e);var n={__proto__:null},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var u=a?Object.getOwnPropertyDescriptor(e,o):null;u&&(u.get||u.set)?Object.defineProperty(n,o,u):n[o]=e[o]}return n.default=e,r&&r.set(e,n),n}function O(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function E(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?O(Object(r),!0).forEach((function(t){(0,o.default)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):O(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var S=f.default.bind(g.default),_={ariaLabelledBy:c.default.string,ariaLabel:c.default.string,id:c.default.string.isRequired,rows:c.default.arrayOf(b.default),pinnedColumns:c.default.arrayOf(p.columnShape),overflowColumns:c.default.arrayOf(p.columnShape),defaultColumnWidth:c.default.number,columnHeaderHeight:c.default.string,rowHeight:c.default.string,rowHeaderIndex:w.default,onColumnResize:c.default.func,onCellSelect:c.default.func,onRowSelect:c.default.func,onRowSelectAll:c.default.func,onColumnSelect:c.default.func,onClearSelectedRows:c.default.func,onClearSelectedCells:c.default.func,onDisableSelectableRows:c.default.func,onEnableRowSelection:c.default.func,hasSelectableRows:c.default.bool,intl:c.default.shape({formatMessage:c.default.func}).isRequired};function R(e){var t,r=e.id,n=e.ariaLabelledBy,l=e.ariaLabel,o=e.rows,c=e.pinnedColumns,d=e.overflowColumns,f=e.onColumnResize,b=e.defaultColumnWidth,p=e.columnHeaderHeight,w=e.rowHeight,g=e.onColumnSelect,C=e.onCellSelect,y=e.onRowSelect,O=e.onRowSelectAll,_=e.onClearSelectedRows,R=e.onClearSelectedCells,I=e.onDisableSelectableRows,D=e.onEnableRowSelection,H=e.hasSelectableRows,P=e.intl,k=e.rowHeaderIndex,j=(0,i.useRef)(!1),x=(0,i.useRef)([]),M=(0,i.useState)(null),N=(0,u.default)(M,2),T=N[0],W=N[1],K=(0,i.useState)(null),L=(0,u.default)(K,2),G=L[0],A=L[1],Y=(0,i.useRef)(!1),B=(0,i.useRef)({start:null,end:null}),F=(0,i.useRef)(),z=(0,i.useRef)(!1),U=null===(t=document.getElementById("".concat(r,"-worklist-data-grid-container")))||void 0===t?void 0:t.contains(document.activeElement),q=function(e){return e.map((function(e){return E(E({},e),{},{isResizable:!1!==e.isResizable,isSelectable:!1!==e.isSelectable})}))},X=q(c),J=q(d);(0,i.useEffect)((function(){if(j.current){if(H||(B.current={},x.current=[]),A(P.formatMessage({id:H?"Terra.worklistDataGrid.row-selection-mode-enabled":"Terra.worklistDataGrid.row-selection-mode-disabled"})),z.current){var e=F.current.getFocusedCell();e={row:e.row,col:Math.max(e.col+(H?1:-1),0)},F.current.setFocusedRowCol(e.row,e.col,U)}}else j.current=!0}),[H]),(0,i.useEffect)((function(){var e=(0,a.default)(x.current);if(x.current=o.filter((function(e){return e.isSelected})).map((function(e){return e.id})),e.length>0&&0===x.current.length)W(P.formatMessage({id:"Terra.worklistDataGrid.all-rows-unselected"}));else if(x.current.length===o.length)W(P.formatMessage({id:"Terra.worklistDataGrid.all-rows-selected"}));else{var t=x.current.filter((function(t){return!e.includes(t)})),r=e.filter((function(e){return!x.current.includes(e)})),n="";if(1===t.length){var l=o.findIndex((function(e){return e.id===t[0]})),u=o[l].ariaLabel||l+2;n=P.formatMessage({id:"Terra.worklistDataGrid.row-selection-template"},{row:u})}else t.length>1&&(n=P.formatMessage({id:"Terra.worklistDataGrid.multiple-rows-selected"},{rowCount:t.length}));if(1===r.length){var i=o.findIndex((function(e){return e.id===r[0]})),c=o[i].ariaLabel||i+2;n+=P.formatMessage({id:"Terra.worklistDataGrid.row-selection-cleared-template"},{row:c})}else r.length>1&&(n+=P.formatMessage({id:"Terra.worklistDataGrid.multiple-rows-unselected"},{rowCount:r.length}));n&&W(n)}}),[P,o]);var Z=(0,i.useCallback)((function(){H?(B.current={},o.some((function(e){return e.isSelected}))?_&&_():I&&I()):R&&R()}),[H,R,_,I,o]),Q=(0,i.useCallback)((function(e){var t=[];return B.current.end?(B.current.start>B.current.end?e>B.current.end&&(t=o.slice(B.current.end-1,Math.min(e,B.current.start)-1).map((function(e){return{id:e.id,selected:!1}}))):B.current.start<B.current.end&&e<B.current.end&&(t=o.slice(Math.max(B.current.start,e),B.current.end).map((function(e){return{id:e.id,selected:!1}}))),t):t}),[o]),V=(0,i.useCallback)((function(e){if(H||D(),y){var t=Math.min(B.current.start,e),r=Math.max(B.current.start,e),n=o.slice(t-1,r).map((function(e){return{id:e.id,selected:!0}}));n=n.concat(Q(e)),y(n),B.current.end=e}}),[H,D,y,o,Q]),$=(0,i.useCallback)((function(e,t){var r=[];o[t-1].isSelected?(t===B.current.start&&(B.current={}),r.push({id:e,selected:!1})):(B.current={start:t,end:null},r.push({id:e,selected:!0})),y&&y(r)}),[y,o]),ee=(0,i.useCallback)((function(e,t,r){var n=e;r===s.KEY_UP?0===(n-=1)&&(n=1):r===s.KEY_DOWN&&(n+=1),Y.current||(Y.current=!0,B.current={start:e,end:null}),V(n)}),[V]),te=(0,i.useCallback)((function(e){H?e.isShiftPressed&&B.current.start?V(e.rowIndex):$(e.rowId,e.rowIndex):e.isShiftPressed&&(B.current={start:e.rowIndex,end:null},V(e.rowIndex))}),[H,V,$]),re=(0,i.useCallback)((function(e){H||e.isShiftPressed?te(e):e.isCellSelectable&&C&&C(e.rowId,e.columnId)}),[te,H,C]),ne=(0,i.useCallback)((function(e){g(e)}),[g]),le=(0,i.useCallback)((function(){g(v.default.ROW_SELECTION_COLUMN.id)}),[g]);return i.default.createElement("div",{id:"".concat(r,"-worklist-data-grid-container"),onKeyDown:function(e){if(e.keyCode===s.KEY_A)H&&(e.ctrlKey||e.metaKey)&&(O&&O(),e.preventDefault())},onKeyUp:function(e){if(e.keyCode===s.KEY_SHIFT)Y.current=!1},className:S("worklist-data-grid-container"),onFocus:z.current?void 0:function(){z.current=!0}},i.default.createElement(h.default,{id:r,ariaLabel:l,ariaLabelledBy:n,rows:o,rowHeight:w,rowHeaderIndex:k,pinnedColumns:X,overflowColumns:J,defaultColumnWidth:b,columnHeaderHeight:p,onColumnSelect:g?ne:void 0,onRowSelectionHeaderSelect:g?le:void 0,onColumnResize:f,onCellSelect:re,onClearSelection:Z,onRangeSelection:ee,hasSelectableRows:H,ref:F}),i.default.createElement(m.default,{"aria-live":"polite",text:G}),i.default.createElement(m.default,{"aria-live":"polite",text:T}))}R.propTypes=_,R.defaultProps={rowHeaderIndex:0,defaultColumnWidth:200,columnHeaderHeight:"2.5rem",rowHeight:"2.5rem",pinnedColumns:[],overflowColumns:[],rows:[]};t.default=(0,d.injectIntl)(R)},82886:function(){"undefined"!=typeof Element&&(Element.prototype.matches||(Element.prototype.matches=Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector),Element.prototype.closest||(Element.prototype.closest=function(e){var t=this;do{if(t.matches(e))return t;t=t.parentElement||t.parentNode}while(null!==t&&1===t.nodeType);return null}))},57710:function(e,t,r){var n=r(64836);Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"FlowsheetDataGrid",{enumerable:!0,get:function(){return a.default}}),Object.defineProperty(t,"WorklistDataGrid",{enumerable:!0,get:function(){return l.default}});var l=n(r(1067)),a=n(r(6718))},28185:function(e,t,r){var n=r(64836);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=n(r(45697)),a=l.default.shape({content:l.default.node,isMasked:l.default.bool,isSelectable:l.default.bool,isSelected:l.default.bool});t.default=a},37522:function(e,t,r){var n=r(64836);Object.defineProperty(t,"__esModule",{value:!0}),t.columnShape=t.SortIndicators=void 0;var l=n(r(45697)),a=t.SortIndicators={ASCENDING:"ascending",DESCENDING:"descending"};t.columnShape=l.default.shape({id:l.default.string.isRequired,displayName:l.default.string,hasError:l.default.bool,isResizable:l.default.bool,isSelectable:l.default.bool,minimumWidth:l.default.number,maximumWidth:l.default.number,width:l.default.number,sortIndicator:l.default.oneOf(Object.values(a))})},73181:function(e,t,r){var n=r(64836);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=n(r(45697)),a=n(r(28185)),o=l.default.shape({id:l.default.string.isRequired,cells:l.default.arrayOf(a.default),isSelected:l.default.bool,ariaLabel:l.default.string});t.default=o},63918:function(e,t,r){var n=r(64836);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=n(r(29284));t.default=function(e){return Number.isInteger(e.rowHeaderIndex)?e.rowHeaderIndex<0?new Error(l.default.ROW_HEADER_INDEX_LESS_THAN_ZERO):e.pinnedColumns.length&&e.rowHeaderIndex>=e.pinnedColumns.length?new Error(l.default.ROW_HEADER_INDEX_EXCEEDS_PINNED):void 0:new Error(l.default.ROW_HEADER_INDEX_NOT_AN_INTEGER)}},14035:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r={ROW_SELECTION_COLUMN:{id:"WorklistDataGrid-rowSelectionColumn",width:40,isSelectable:!0,isResizable:!1}};t.default=r},29284:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r={ROW_HEADER_INDEX_EXCEEDS_PINNED:"Prop rowHeaderIndex exceeds the size of pinnedColumns.",ROW_HEADER_INDEX_LESS_THAN_ZERO:"Prop rowHeaderIndex must be a positive integer.",ROW_HEADER_INDEX_NOT_AN_INTEGER:"Prop rowHeaderIndex must be an integer.",PINNED_COLUMNS_UNDEFINED:"To be properly accessible, the row header column should be a pinned column. please set pinned columns"};t.default=r}}]);