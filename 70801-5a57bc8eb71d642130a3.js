"use strict";(self.webpackChunkterra_ui=self.webpackChunkterra_ui||[]).push([[70801],{15779:function(e,t,n){n.r(t),t.default={"clinical-lowlight-theme":"Table-module__clinical-lowlight-theme___OSlzU","orion-fusion-theme":"Table-module__orion-fusion-theme___oroka","table-container":"Table-module__table-container___cEA1Y",table:"Table-module__table___CMC-l",headerless:"Table-module__headerless___26lJg"}},75869:function(e,t,n){n.r(t),t.default={"clinical-lowlight-theme":"Cell-module__clinical-lowlight-theme___BWTdA","orion-fusion-theme":"Cell-module__orion-fusion-theme___lCyV7",cell:"Cell-module__cell___VkJ1K",selected:"Cell-module__selected___of3Gi",masked:"Cell-module__masked___eb+i1",highlighted:"Cell-module__highlighted___08Vxb","cell-content":"Cell-module__cell-content___gIUDI","no-data-cell":"Cell-module__no-data-cell___Rezg5",pinned:"Cell-module__pinned___pQVRY",selectable:"Cell-module__selectable___iCwvw"}},59346:function(e,t,n){n.r(t),t.default={hidden:"ColumnHeader-module__hidden___Mu4k6"}},28126:function(e,t,n){n.r(t),t.default={"clinical-lowlight-theme":"ColumnHeaderCell-module__clinical-lowlight-theme___Vct4G","orion-fusion-theme":"ColumnHeaderCell-module__orion-fusion-theme___QsH+w","column-header":"ColumnHeaderCell-module__column-header___fMP4o","header-container":"ColumnHeaderCell-module__header-container___PIglj","error-icon":"ColumnHeaderCell-module__error-icon___z0C3g",selectable:"ColumnHeaderCell-module__selectable___9HBMF",pinned:"ColumnHeaderCell-module__pinned___saIJW","pinned-columns-divider":"ColumnHeaderCell-module__pinned-columns-divider___3f4Fr"}},93339:function(e,t,n){n.r(t),t.default={"orion-fusion-theme":"ColumnResizeHandle-module__orion-fusion-theme___l3JnF","clinical-lowlight-theme":"ColumnResizeHandle-module__clinical-lowlight-theme___iJ6yt","resize-handle":"ColumnResizeHandle-module__resize-handle___oXnID","resize-handle-selected":"ColumnResizeHandle-module__resize-handle-selected___T779B"}},97002:function(e,t,n){n.r(t),t.default={"clinical-lowlight-theme":"Row-module__clinical-lowlight-theme___krsED","orion-fusion-theme":"Row-module__orion-fusion-theme___D2RZJ","striped-table-row":"Row-module__striped-table-row___Awbb0",row:"Row-module__row___aItks",selectable:"Row-module__selectable___LF7bc",selected:"Row-module__selected___DWICO"}},69170:function(e,t,n){n.r(t),t.default={input:"RowSelectionCell-module__input___T239p"}},61877:function(e,t,n){n.r(t),t.default={"clinical-lowlight-theme":"Section-module__clinical-lowlight-theme___BRP0Y","orion-fusion-theme":"Section-module__orion-fusion-theme___sbOKr",section:"Section-module__section___AHebI",collapsed:"Section-module__collapsed___PZOjJ",header:"Section-module__header___-mS7V"}},21097:function(e,t,n){var l=n(64836),a=n(18698);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=l(n(10434)),o=l(n(861)),i=l(n(38416)),u=l(n(27424)),d=E(n(67294)),s=l(n(45697)),c=n(25387),f=n(55877),m=l(n(47166)),b=l(n(32018)),p=l(n(50026)),h=l(n(29270)),_=l(n(25477)),g=l(n(76343)),v=l(n(67661)),w=n(28745),C=l(n(49597)),I=E(n(55667)),R=l(n(50568)),y=l(n(7840)),O=l(n(15779)),S=l(n(73506));function x(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(x=function(e){return e?n:t})(e)}function E(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=a(e)&&"function"!=typeof e)return{default:e};var n=x(t);if(n&&n.has(e))return n.get(e);var l={__proto__:null},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var i=r?Object.getOwnPropertyDescriptor(e,o):null;i&&(i.get||i.set)?Object.defineProperty(l,o,i):l[o]=e[o]}return l.default=e,n&&n.set(e,l),l}function M(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function P(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?M(Object(n),!0).forEach((function(t){(0,i.default)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):M(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var H=m.default.bind(O.default),j={id:s.default.string.isRequired,rows:s.default.arrayOf(R.default),sections:s.default.arrayOf(S.default),ariaLabelledBy:s.default.string,ariaLabel:s.default.string,activeColumnIndex:s.default.number,isActiveColumnResizing:s.default.bool,columnResizeIncrement:s.default.number,pinnedColumns:s.default.arrayOf(w.columnShape),overflowColumns:s.default.arrayOf(w.columnShape),defaultColumnWidth:s.default.number,columnHeaderHeight:s.default.string,rowHeight:s.default.string,rowHeaderIndex:y.default,onColumnResize:s.default.func,onCellSelect:s.default.func,onRowSelect:s.default.func,onColumnSelect:s.default.func,onSectionSelect:s.default.func,onRowSelectionHeaderSelect:s.default.func,hasSelectableRows:s.default.bool,hasColumnHeaders:s.default.bool,isStriped:s.default.bool,intl:s.default.shape({formatMessage:s.default.func}).isRequired};function D(e){var t=e.id,n=e.ariaLabelledBy,l=e.ariaLabel,a=e.activeColumnIndex,i=e.isActiveColumnResizing,s=e.columnResizeIncrement,c=e.rows,m=e.sections,w=e.pinnedColumns,R=e.overflowColumns,y=e.onColumnResize,O=e.defaultColumnWidth,S=e.columnHeaderHeight,x=e.rowHeight,E=e.onColumnSelect,M=e.onCellSelect,j=e.onSectionSelect,D=e.onRowSelect,k=e.onRowSelectionHeaderSelect,N=e.hasSelectableRows,W=e.hasColumnHeaders,z=e.isStriped,T=e.rowHeaderIndex,A=e.intl;0===w.length&&console.warn(C.default.PINNED_COLUMNS_UNDEFINED);var L=(0,d.useState)(0),q=(0,u.default)(L,2),G=q[0],K=q[1],U=(0,d.useState)(null),Y=(0,u.default)(U,2),F=Y[0],X=Y[1],B=(0,d.useRef)(0),J=(0,d.useRef)(200),V=(0,d.useRef)(0),Z=(0,d.useState)([0]),Q=(0,u.default)(Z,2),$=Q[0],ee=Q[1],te=(0,d.useRef)(),ne=(0,d.useRef)(),le=(0,d.useState)(!1),ae=(0,u.default)(le,2),re=ae[0],oe=ae[1],ie=(0,d.useContext)(p.default),ue=(0,d.useContext)(I.default),de=ue.role===I.GridConstants.GRID,se=(0,d.useRef)(!1),ce=(0,d.useRef)([]),fe=(0,d.useState)(null),me=(0,u.default)(fe,2),be=me[0],pe=me[1],he=(0,d.useState)(null),_e=(0,u.default)(he,2),ge=_e[0],ve=_e[1],we=(0,d.useState)(null),Ce=(0,u.default)(we,2),Ie=Ce[0],Re=Ce[1],ye=(0,d.useMemo)((function(){return{pinnedColumnOffsets:$,setColumnHeaderAriaLiveMessage:Re}}),[$]),Oe=function(e){return P(P({},e),{},{width:e.width||O,minimumWidth:e.minimumWidth||60,maximumWidth:e.maximumWidth||300})},Se={id:"table-rowSelectionColumn",width:40,isSelectable:!!k,isResizable:!1},xe=(N?[Se]:[]).concat(w).concat(R),Ee=(0,d.useState)(xe.map((function(e){return Oe(e)}))),Me=(0,u.default)(Ee,2),Pe=Me[0],He=Me[1],je=(0,d.useRef)((0,f.v4)()),De=(0,d.useMemo)((function(){return m?(0,o.default)(m):[{id:je.current,rows:c}]}),[c,m]),ke=De.reduce((function(e,t){return t.id!==je.current?(t.sectionRowIndex=e+1,e+t.rows.length+1):(t.sectionRowIndex=0,e+t.rows.length)}),1),Ne=(0,d.useCallback)((function(e){de||!D?M&&M(e):D(e.rowId)}),[de,M,D]);(0,d.useEffect)((function(){se.current?(ve(A.formatMessage({id:N?"Terra.table.row-selection-mode-enabled":"Terra.table.row-selection-mode-disabled"})),He(xe.map((function(e){return Oe(e)})))):se.current=!0}),[N]),(0,d.useEffect)((function(){var e=(0,o.default)(ce.current),t=De.flatMap((function(e){return e.rows.map((function(e){return e}))}));if(ce.current=t.filter((function(e){return e.isSelected})).map((function(e){return e.id})),e.length>0&&0===ce.current.length)pe(A.formatMessage({id:"Terra.table.all-rows-unselected"}));else if(ce.current.length===t.length)pe(A.formatMessage({id:"Terra.table.all-rows-selected"}));else{var n=ce.current.filter((function(t){return!e.includes(t)})),l=e.filter((function(e){return!ce.current.includes(e)})),a="";if(1===n.length){var r=ne.current.querySelector("tr[data-row-id='".concat(n[0],"']")).getAttribute("aria-rowindex");a=A.formatMessage({id:"Terra.table.row-selection-template"},{row:r})}else n.length>1&&(a=A.formatMessage({id:"Terra.table.multiple-rows-selected"},{rowCount:n.length}));if(1===l.length){var i=ne.current.querySelector("tr[data-row-id='".concat(l[0],"']")).getAttribute("data-row-id");a+=A.formatMessage({id:"Terra.table.row-selection-cleared-template"},{row:i})}else l.length>1&&(a+=A.formatMessage({id:"Terra.table.multiple-rows-unselected"},{rowCount:l.length}));a&&pe(a)}}),[A,De]),(0,d.useEffect)((function(){He(xe.map((function(e){return Oe(e)})))}),[w,R]),(0,d.useEffect)((function(){var e,t=[],n=0;if(N&&0===w.length)return e=0,t.push(n),void ee(t);w.length>0&&(t.push(n),e=N?w.length:w.length-1,Pe.slice(0,e).forEach((function(e){n+=e.width,t.push(n)}))),ee(t)}),[Pe]),(0,d.useEffect)((function(){var e=new b.default((function(){K(ne.current.offsetHeight-1);var e=te.current;oe(e.scrollWidth>e.clientWidth||e.scrollHeight>e.clientHeight)}));return e.observe(ne.current),function(){e.disconnect()}}),[ne]);var We=(0,d.useCallback)((function(e){ue.tableRef&&(ue.tableRef.current=e),ne.current=e}),[ue.tableRef]),ze=(0,d.useCallback)((function(e){ue.tableContainerRef&&(ue.tableContainerRef.current=e),te.current=e}),[ue.tableContainerRef]),Te=(0,d.useCallback)((function(e){e===Se.id?k&&k():E&&E(e)}),[E,k,Se.id]),Ae=(0,d.useCallback)((function(e,t,n){V.current=ne.current.offsetWidth,B.current=e.pageX,J.current=n,X(t)}),[]),Le=function(){y&&y(Pe[F].id,Pe[F].width),X(null)},qe=(0,d.useCallback)((function(e,t){var n=Pe[e],l=n.minimumWidth,a=n.maximumWidth,r=n.width,i=Math.min(Math.max(r+t,l),a),u=(0,o.default)(Pe);u[e].width=i,He(u),ne.current.style.width="".concat(ne.current.offsetWidth+(i-r),"px"),y&&y(Pe[e].id,Pe[e].width)}),[Pe,y]);return d.default.createElement("div",{ref:ze,className:H("table-container"),tabIndex:!de&&re?0:void 0},d.default.createElement("table",(0,r.default)({ref:We,id:t,role:ue.role,"aria-labelledby":n,"aria-label":l,"aria-rowcount":ke,className:H("table",ie.className,{headerless:!W})},null!=F&&{onMouseUp:Le,onMouseMove:function(e){if(null!=F){var t=e.pageX-B.current,n=Pe[F],l=n.minimumWidth,a=n.maximumWidth,r=Math.min(Math.max(J.current+t,l),a),i=(0,o.default)(Pe);i[F].width=r,He(i),ne.current.style.width="".concat(V+(r-J.current),"px")}},onMouseLeave:Le}),d.default.createElement(v.default.Provider,{value:ye},d.default.createElement("colgroup",null,Pe.map((function(e){return d.default.createElement("col",{key:e.id,style:{width:"".concat(e.width,"px")}})}))),d.default.createElement(g.default,{tableId:t,isActiveColumnResizing:i,activeColumnIndex:a,columns:Pe,hasColumnHeaders:W,headerHeight:S,columnResizeIncrement:s,tableHeight:G,onResizeMouseDown:Ae,onColumnSelect:Te,onResizeHandleChange:qe}),De.map((function(e){return d.default.createElement(_.default,{id:e.id,tableId:t,key:e.id,sectionRowIndex:e.sectionRowIndex,isCollapsible:e.isCollapsible,isCollapsed:e.isCollapsed,isHidden:e.id===je.current,isTableStriped:z,text:e.text,rows:e.rows,rowHeight:x,hasRowSelection:N,displayedColumns:xe,rowHeaderIndex:T,onCellSelect:de||N?Ne:void 0,onSectionSelect:j})})))),d.default.createElement(h.default,{"aria-live":"polite",text:ge}),d.default.createElement(h.default,{"aria-live":"polite",text:be}),d.default.createElement(h.default,{"aria-live":"polite","aria-atomic":"true",text:Ie}))}D.propTypes=j,D.defaultProps={rowHeaderIndex:0,defaultColumnWidth:200,columnHeaderHeight:"2.5rem",rowHeight:"2.5rem",pinnedColumns:[],overflowColumns:[],rows:[],hasColumnHeaders:!0};t.default=d.default.memo((0,c.injectIntl)(D))},7270:function(e,t,n){var l=n(64836),a=n(18698);Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"GridConstants",{enumerable:!0,get:function(){return o.GridConstants}}),Object.defineProperty(t,"GridContext",{enumerable:!0,get:function(){return o.default}}),t.default=void 0;var r=l(n(21097)),o=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=a(e)&&"function"!=typeof e)return{default:e};var n=i(t);if(n&&n.has(e))return n.get(e);var l={__proto__:null},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var u=r?Object.getOwnPropertyDescriptor(e,o):null;u&&(u.get||u.set)?Object.defineProperty(l,o,u):l[o]=e[o]}return l.default=e,n&&n.set(e,l),l}(n(55667));function i(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(i=function(e){return e?n:t})(e)}t.default=r.default},9361:function(e,t,n){var l=n(64836);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=l(n(45697)),r=a.default.shape({content:a.default.node,isMasked:a.default.bool,maskedLabel:a.default.string,isSelectable:a.default.bool,isSelected:a.default.bool});t.default=r},28745:function(e,t,n){var l=n(64836);Object.defineProperty(t,"__esModule",{value:!0}),t.columnShape=t.SortIndicators=void 0;var a=l(n(45697)),r=t.SortIndicators={ASCENDING:"ascending",DESCENDING:"descending"};t.columnShape=a.default.shape({id:a.default.string.isRequired,displayName:a.default.string,hasError:a.default.bool,isResizable:a.default.bool,isSelectable:a.default.bool,minimumWidth:a.default.number,maximumWidth:a.default.number,width:a.default.number,sortIndicator:a.default.oneOf(Object.values(r))})},50568:function(e,t,n){var l=n(64836);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=l(n(45697)),r=l(n(9361)),o=a.default.shape({id:a.default.string.isRequired,cells:a.default.arrayOf(r.default),isSelected:a.default.bool,ariaLabel:a.default.string});t.default=o},73506:function(e,t,n){var l=n(64836);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=l(n(45697)),r=l(n(50568)),o=a.default.shape({id:a.default.string.isRequired,isCollapsible:a.default.bool,isCollapsed:a.default.bool,text:a.default.string,rows:a.default.arrayOf(r.default)});t.default=o},7840:function(e,t,n){var l=n(64836);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=l(n(49597));t.default=function(e){return Number.isInteger(e.rowHeaderIndex)?e.rowHeaderIndex<0?new Error(a.default.ROW_HEADER_INDEX_LESS_THAN_ZERO):e.pinnedColumns.length&&e.rowHeaderIndex>=e.pinnedColumns.length?new Error(a.default.ROW_HEADER_INDEX_EXCEEDS_PINNED):void 0:new Error(a.default.ROW_HEADER_INDEX_NOT_AN_INTEGER)}},51608:function(e,t,n){var l=n(64836),a=n(18698);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=l(n(10434)),o=l(n(861)),i=l(n(27424)),u=w(n(67294)),d=w(n(51051)),s=l(n(47166)),c=l(n(54483)),f=n(25387),m=l(n(45697)),b=l(n(50026)),p=l(n(29270)),h=l(n(67661)),_=w(n(55667)),g=l(n(75869));function v(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(v=function(e){return e?n:t})(e)}function w(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=a(e)&&"function"!=typeof e)return{default:e};var n=v(t);if(n&&n.has(e))return n.get(e);var l={__proto__:null},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var i=r?Object.getOwnPropertyDescriptor(e,o):null;i&&(i.get||i.set)?Object.defineProperty(l,o,i):l[o]=e[o]}return l.default=e,n&&n.set(e,l),l}var C=s.default.bind(g.default),I={intl:m.default.shape({formatMessage:m.default.func}).isRequired,rowId:m.default.string.isRequired,columnId:m.default.string.isRequired,rowIndex:m.default.number,columnIndex:m.default.number,sectionId:m.default.string,tableId:m.default.string.isRequired,children:m.default.node,isMasked:m.default.bool,maskedLabel:m.default.string,isSelectable:m.default.bool,isSelected:m.default.bool,ariaLabel:m.default.string,isRowHeader:m.default.bool,isHighlighted:m.default.bool,onCellSelect:m.default.func,height:m.default.string};function R(e){var t=e.rowId,n=e.columnId,l=e.rowIndex,a=e.columnIndex,s=e.sectionId,f=e.tableId,m=e.ariaLabel,g=e.isMasked,v=e.maskedLabel,w=e.isRowHeader,I=e.isSelectable,R=e.isSelected,y=e.isHighlighted,O=e.children,S=e.onCellSelect,x=e.height,E=e.intl,M=(0,u.useRef)(),P=(0,u.useContext)(b.default),H=(0,u.useContext)(_.default),j=(0,u.useContext)(h.default),D=(0,u.useState)(!1),k=(0,i.default)(D,2),N=k[0],W=k[1],z=(0,u.useState)(!1),T=(0,i.default)(z,2),A=T[0],L=T[1],q=H.role===_.GridConstants.GRID,G=function(){return(0,o.default)(M.current.querySelectorAll("".concat("a[href]:not([tabindex='-1']), area[href]:not([tabindex='-1']), input:not([disabled]):not([tabindex='-1']), select:not([disabled]):not([tabindex='-1']), textarea:not([disabled]):not([tabindex='-1']), button:not([disabled]):not([tabindex='-1']), iframe:not([tabindex='-1']), [tabindex]:not([tabindex='-1']), [contentEditable=true]:not([tabindex='-1'])"))).filter((function(e){return!e.hasAttribute("disabled")&&!e.getAttribute("aria-hidden")})).length>0};(0,u.useEffect)((function(){q&&W(G())}),[q]);var K,U=function(){L(!1),H.setCellAriaLiveMessage&&H.setCellAriaLiveMessage(E.formatMessage({id:"Terra.table.resume-navigation"}))};K=g?u.default.createElement("span",{className:C("no-data-cell",P.className)},v||E.formatMessage({id:"Terra.table.maskedCell"})):O||u.default.createElement("span",{className:C("no-data-cell",P.className)},E.formatMessage({id:"Terra.table.blank"}));var Y=C("cell",{masked:g,pinned:a<j.pinnedColumnOffsets.length,selectable:I&&!g,selected:R&&!g,highlighted:y,blank:!O},P.className),F=a<j.pinnedColumnOffsets.length?j.pinnedColumnOffsets[a]:null,X=w?"th":"td",B=u.default.createElement("div",{className:C("cell-content",P.className),style:{height:x}},K);q&&(B=u.default.createElement(c.default,{active:A,focusTrapOptions:{returnFocusOnDeactivate:!0,clickOutsideDeactivates:!0,escapeDeactivates:!1,onDeactivate:U}},B));var J=s?"".concat(f,"-").concat(s):"",V=w?"":"".concat(f,"-rowheader-").concat(t),Z="".concat(f,"-").concat(n);return u.default.createElement(X,(0,r.default)({id:w?"".concat(f,"-rowheader-").concat(t):void 0,ref:q?M:void 0,"aria-selected":R||void 0,"aria-label":m,headers:"".concat(J," ").concat(V," ").concat(Z),tabIndex:q?-1:void 0,className:Y},w&&{scope:"row",role:"rowheader"},{onMouseDown:S?function(e){A||S({sectionId:s,rowId:t,rowIndex:l,columnId:n,columnIndex:a,isShiftPressed:e.shiftKey,isCellSelectable:!g&&I})}:void 0,onKeyDown:function(e){var r=e.keyCode,o=e.target;if(A){if(r===d.KEY_ESCAPE)U();e.stopPropagation()}else switch(r){case d.KEY_RETURN:q&&G()&&(L(!0),H.setCellAriaLiveMessage&&H.setCellAriaLiveMessage(E.formatMessage({id:"Terra.table.cell-focus-trapped"})),e.stopPropagation(),e.preventDefault());break;case d.KEY_SPACE:S&&S({sectionId:s,rowId:t,rowIndex:l,columnId:n,columnIndex:a,isShiftPressed:e.shiftKey,isCellSelectable:!g&&I}),function(e){var t=e.tagName;if("input"===t.toLowerCase()){var n=e.type;return["text","password","number","email","tel","url","search","date","datetime","datetime-local","time","month","week"].indexOf(n)>=0}return["textarea","select"].indexOf(t.toLowerCase())>=0||!(!e.hasAttribute("contentEditable")||!1===e.getAttribute("contentEditable"))}(o)||e.preventDefault()}},style:{left:F}}),B,N&&u.default.createElement(p.default,{text:E.formatMessage({id:"Terra.table.cell-interactable"})}))}R.propTypes=I,R.defaultProps={isRowHeader:!1,isSelectable:!1,isMasked:!1,sectionId:""};t.default=u.default.memo((0,f.injectIntl)(R))},76343:function(e,t,n){var l=n(64836);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=l(n(67294)),r=l(n(45697)),o=l(n(47166)),i=l(n(54138)),u=n(28745),d=l(n(59346)),s=o.default.bind(d.default),c={tableId:r.default.string.isRequired,columns:r.default.arrayOf(u.columnShape).isRequired,headerHeight:r.default.string.isRequired,tableHeight:r.default.number,activeColumnIndex:r.default.number,isActiveColumnResizing:r.default.bool,columnResizeIncrement:r.default.number,onColumnSelect:r.default.func,onResizeMouseDown:r.default.func,onResizeHandleChange:r.default.func,hasColumnHeaders:r.default.bool},f=function(e){var t=e.tableId,n=e.activeColumnIndex,l=e.isActiveColumnResizing,r=e.columnResizeIncrement,o=e.columns,u=e.headerHeight,d=e.tableHeight,c=e.onColumnSelect,f=e.onResizeMouseDown,m=e.onResizeHandleChange,b=e.hasColumnHeaders;return a.default.createElement("thead",null,a.default.createElement("tr",{"aria-rowindex":1,className:s("column-header-row",{hidden:!b}),height:b?u:void 0},o.map((function(e,o){return a.default.createElement(i.default,{key:e.id,id:e.id,tableId:t,rowIndex:0,columnIndex:o,displayName:e.displayName,width:e.width,minimumWidth:e.minimumWidth,maximumWidth:e.maximumWidth,headerHeight:u,isResizable:b&&e.isResizable,isSelectable:b&&e.isSelectable,tableHeight:d,isActive:n===o,isResizeActive:n===o&&l,columnResizeIncrement:r,hasError:e.hasError,sortIndicator:e.sortIndicator,onColumnSelect:c,onResizeMouseDown:f,onResizeHandleChange:m})}))))};f.propTypes=c,f.defaultProps={hasColumnHeaders:!0};t.default=a.default.memo(f)},54138:function(e,t,n){var l=n(64836),a=n(18698);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=l(n(10434)),o=l(n(27424)),i=w(n(67294)),u=l(n(45697)),d=n(25387),s=w(n(51051)),c=l(n(47166)),f=l(n(50026)),m=n(34614),b=l(n(92090)),p=w(n(55667)),h=n(28745),_=l(n(67661)),g=l(n(28126));function v(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(v=function(e){return e?n:t})(e)}function w(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=a(e)&&"function"!=typeof e)return{default:e};var n=v(t);if(n&&n.has(e))return n.get(e);var l={__proto__:null},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var i=r?Object.getOwnPropertyDescriptor(e,o):null;i&&(i.get||i.set)?Object.defineProperty(l,o,i):l[o]=e[o]}return l.default=e,n&&n.set(e,l),l}var C=c.default.bind(g.default),I={id:u.default.string.isRequired,tableId:u.default.string.isRequired,displayName:u.default.string,sortIndicator:u.default.oneOf(Object.values(h.SortIndicators)),hasError:u.default.bool,minimumWidth:u.default.number,maximumWidth:u.default.number,isActive:u.default.bool,isSelectable:u.default.bool,isResizable:u.default.bool,tableHeight:u.default.number,isResizeActive:u.default.bool,columnResizeIncrement:u.default.number,width:u.default.number.isRequired,headerHeight:u.default.string.isRequired,rowIndex:u.default.number,columnIndex:u.default.number,onColumnSelect:u.default.func,onResizeMouseDown:u.default.func,onResizeHandleChange:u.default.func,intl:u.default.shape({formatMessage:u.default.func})},R=function(e){var t=e.id,n=e.tableId,l=e.displayName,a=e.sortIndicator,u=e.hasError,d=e.isActive,c=e.isSelectable,g=e.isResizable,v=e.tableHeight,w=e.isResizeActive,I=e.columnResizeIncrement,R=e.width,y=e.minimumWidth,O=e.maximumWidth,S=e.headerHeight,x=e.onColumnSelect,E=e.intl,M=e.rowIndex,P=e.columnIndex,H=e.onResizeMouseDown,j=e.onResizeHandleChange,D=(0,i.useContext)(_.default),k=(0,i.useContext)(p.default),N=(0,i.useRef)(),W=(0,i.useRef)(),z=(0,i.useState)(!1),T=(0,o.default)(z,2),A=T[0],L=T[1],q=k.role===p.GridConstants.GRID,G=(0,i.useCallback)((function(){return W.current?W.current:N.current}),[]);(0,i.useEffect)((function(){d?g&&w?L(!0):(G().focus(),L(!1)):L(!1)}),[G,d,g,w]);var K,U=(0,i.useCallback)((function(e){e.stopPropagation(),H&&H(e,P,N.current.offsetWidth)}),[P,H]),Y=(0,i.useCallback)((function(){G().focus(),L(!1)}),[G]),F=u&&i.default.createElement(m.IconError,{a11yLabel:E.formatMessage({id:"Terra.table.columnError"}),className:C("error-icon")});a===h.SortIndicators.ASCENDING?K=i.default.createElement(m.IconUp,null):a===h.SortIndicators.DESCENDING&&(K=i.default.createElement(m.IconDown,null));var X=(0,i.useContext)(f.default),B=P<D.pinnedColumnOffsets.length?D.pinnedColumnOffsets[P]:null,J=R-1,V=P===D.pinnedColumnOffsets.length-1?i.default.createElement("div",{className:C("pinned-columns-divider"),style:{height:v,left:J}}):null,Z=c?0:void 0;return q&&(Z=c&&l?-1:void 0),i.default.createElement("th",{id:"".concat(n,"-").concat(t),ref:N,key:t,className:C("column-header",X.className,{selectable:c,pinned:P<D.pinnedColumnOffsets.length}),tabIndex:q?-1:void 0,role:"columnheader",scope:"col","aria-sort":a,onMouseDown:c&&x?function(e){x(t,{row:M,col:P}),e.stopPropagation()}:void 0,onKeyDown:c||g?function(e){switch(e.keyCode){case s.KEY_SPACE:case s.KEY_RETURN:c&&x&&x(t,{row:M,col:P},c),e.stopPropagation(),e.preventDefault();break;case s.KEY_LEFT:g&&A&&q&&(G().focus(),L(!1),e.stopPropagation(),e.preventDefault());break;case s.KEY_RIGHT:g&&!A&&q&&(L(!0),e.stopPropagation(),e.preventDefault())}}:void 0,style:{width:"".concat(R,"px"),height:S,left:B}},i.default.createElement("div",(0,r.default)({className:C("header-container")},c&&l&&{ref:W,role:"button"},{tabIndex:Z}),F,i.default.createElement("span",null,l),K),g&&i.default.createElement(b.default,{columnIndex:P,columnText:l,columnWidth:R,columnResizeIncrement:I,isActive:A,setIsActive:L,height:v,minimumWidth:y,maximumWidth:O,onResizeMouseDown:U,onResizeMouseUp:Y,onResizeHandleChange:j}),V)};R.propTypes=I,R.defaultProps={hasError:!1,isSelectable:!1,isActive:!1,isResizable:!1,isResizeActive:!1};t.default=i.default.memo((0,d.injectIntl)(R))},92090:function(e,t,n){var l=n(64836),a=n(18698);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=l(n(27424)),o=h(n(67294)),i=l(n(47166)),u=n(25387),d=h(n(51051)),s=l(n(45697)),c=l(n(50026)),f=l(n(67661)),m=h(n(55667)),b=l(n(93339));function p(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(p=function(e){return e?n:t})(e)}function h(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=a(e)&&"function"!=typeof e)return{default:e};var n=p(t);if(n&&n.has(e))return n.get(e);var l={__proto__:null},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var i=r?Object.getOwnPropertyDescriptor(e,o):null;i&&(i.get||i.set)?Object.defineProperty(l,o,i):l[o]=e[o]}return l.default=e,n&&n.set(e,l),l}var _=i.default.bind(b.default),g={columnIndex:s.default.number,columnText:s.default.string.isRequired,columnWidth:s.default.number.isRequired,height:s.default.number.isRequired,columnResizeIncrement:s.default.number,isActive:s.default.bool,setIsActive:s.default.func,minimumWidth:s.default.number.isRequired,maximumWidth:s.default.number.isRequired,onResizeMouseDown:s.default.func.isRequired,onResizeMouseUp:s.default.func.isRequired,onResizeHandleChange:s.default.func,intl:s.default.shape({formatMessage:s.default.func}).isRequired},v=function(e){var t=e.columnIndex,n=e.columnResizeIncrement,l=e.columnText,a=e.columnWidth,i=e.height,u=e.intl,s=e.isActive,b=e.maximumWidth,p=e.minimumWidth,h=e.onResizeHandleChange,g=e.onResizeMouseDown,v=e.onResizeMouseUp,w=e.setIsActive,C=(0,o.useContext)(c.default),I=(0,o.useContext)(m.default),R=(0,o.useContext)(f.default),y=I.role===m.GridConstants.GRID,O=(0,o.useRef)(),S=(0,o.useState)(!0),x=(0,r.default)(S,2),E=x[0],M=x[1];(0,o.useEffect)((function(){s&&O.current.focus()}),[s]);var P=function(){O.current.style.height="".concat(i,"px")};return o.default.createElement("div",{ref:O,draggable:!0,role:E?null:"slider",tabIndex:y?-1:0,"aria-hidden":!!y&&!s,"aria-valuemin":s?p:null,"aria-valuenow":s?a:null,"aria-valuemax":s?b:null,"aria-label":s&&E?u.formatMessage({id:"Terra.table.resize-handle-template"},{columnText:l}):null,"aria-valuetext":E?null:u.formatMessage({id:"Terra.table.resize-handle-value-text"},{columnWidth:a}),style:{height:"".concat(i,"px")},onMouseDown:function(e){O.current.focus(),g(e),e.stopPropagation(),e.preventDefault()},onMouseUp:function(){v()},onMouseEnter:P,onMouseLeave:function(){document.activeElement!==O.current&&(O.current.style.height="100%")},onKeyDown:function(e){switch(e.keyCode){case d.KEY_SPACE:case d.KEY_RETURN:M(!1),O.current.focus(),R.setColumnHeaderAriaLiveMessage(u.formatMessage({id:"Terra.table.cell-focus-trapped"})),e.stopPropagation(),e.preventDefault();break;case d.KEY_ESCAPE:R.setColumnHeaderAriaLiveMessage(u.formatMessage({id:"Terra.table.resume-navigation"})),M(!0);break;case d.KEY_RIGHT:h&&!E&&h(t,n);break;case d.KEY_LEFT:h&&!E&&h(t,-n)}E||(e.stopPropagation(),e.preventDefault())},onClick:function(e){e.stopPropagation()},onFocus:P,onBlur:function(){M(!0),w(!1)},className:_("resize-handle",C.className,{"resize-handle-selected":!E})})};v.propTypes=g,v.defaultProps={columnResizeIncrement:10};t.default=(0,u.injectIntl)(v)},99853:function(e,t,n){var l=n(64836),a=n(18698);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=l(n(27424)),o=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=a(e)&&"function"!=typeof e)return{default:e};var n=p(t);if(n&&n.has(e))return n.get(e);var l={__proto__:null},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var i=r?Object.getOwnPropertyDescriptor(e,o):null;i&&(i.get||i.set)?Object.defineProperty(l,o,i):l[o]=e[o]}return l.default=e,n&&n.set(e,l),l}(n(67294)),i=l(n(47166)),u=l(n(45697)),d=l(n(50026)),s=l(n(51608)),c=l(n(9361)),f=n(28745),m=l(n(1317)),b=l(n(97002));function p(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(p=function(e){return e?n:t})(e)}var h=i.default.bind(b.default),_={id:u.default.string.isRequired,tableId:u.default.string.isRequired,rowIndex:u.default.number,sectionId:u.default.string,height:u.default.string,cells:u.default.arrayOf(c.default),isSelected:u.default.bool,isTableStriped:u.default.bool,ariaLabel:u.default.string,hasRowSelection:u.default.bool,displayedColumns:u.default.arrayOf(f.columnShape),onCellSelect:u.default.func,rowHeaderIndex:u.default.number};function g(e){var t=e.rowIndex,n=e.height,l=e.hasRowSelection,a=e.id,i=e.tableId,u=e.sectionId,c=e.isSelected,f=e.isTableStriped,b=e.cells,p=e.ariaLabel,_=e.displayedColumns,g=e.rowHeaderIndex,v=e.onCellSelect,w=(0,o.useContext)(d.default),C=(0,o.useState)(!1),I=(0,r.default)(C,2),R=I[0],y=I[1],O=l?1:0;return o.default.createElement("tr",{"aria-rowindex":t,"data-row-id":a,className:h("row",{selected:c,selectable:l,"striped-table-row":f},w.className),style:{height:n},onMouseEnter:l?function(){y(!0)}:void 0,onMouseLeave:l?function(){y(!1)}:void 0},l&&o.default.createElement(m.default,{rowId:a,columnId:_[0].id,rowIndex:t,columnIndex:0,sectionId:u,tableId:i,isSelected:c,ariaLabel:p,onCellSelect:v}),b.map((function(e,r){var d=r+O,f=_[d].id;return o.default.createElement(s.default,{rowId:a,columnId:f,rowIndex:t,columnIndex:d,sectionId:u,tableId:i,key:"".concat(a,"_").concat(f),isSelected:!l&&e.isSelected,isMasked:e.isMasked,maskedLabel:e.maskedLabel,isSelectable:e.isSelectable,isRowHeader:d===g+O,isHighlighted:R||c,onCellSelect:v,height:n},e.content)})))}g.propTypes=_,g.defaultProps={hasRowSelection:!1,rowHeaderIndex:0,isSelected:!1};t.default=o.default.memo(g)},1317:function(e,t,n){var l=n(64836),a=n(18698);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=b(n(67294)),o=l(n(47166)),i=n(25387),u=l(n(45697)),d=l(n(50026)),s=b(n(55667)),c=l(n(51608)),f=l(n(69170));function m(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(m=function(e){return e?n:t})(e)}function b(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=a(e)&&"function"!=typeof e)return{default:e};var n=m(t);if(n&&n.has(e))return n.get(e);var l={__proto__:null},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var i=r?Object.getOwnPropertyDescriptor(e,o):null;i&&(i.get||i.set)?Object.defineProperty(l,o,i):l[o]=e[o]}return l.default=e,n&&n.set(e,l),l}var p=o.default.bind(f.default),h={columnId:u.default.string.isRequired,tableId:u.default.string.isRequired,intl:u.default.shape({formatMessage:u.default.func}).isRequired,rowId:u.default.string.isRequired,rowIndex:u.default.number,columnIndex:u.default.number,sectionId:u.default.string,sectionIndex:u.default.number,isSelected:u.default.bool,ariaLabel:u.default.string,onCellSelect:u.default.func};function _(e){var t=e.rowId,n=e.columnId,l=e.tableId,a=e.rowIndex,o=e.columnIndex,i=e.sectionId,u=e.sectionIndex,f=e.isSelected,m=e.ariaLabel,b=e.onCellSelect,h=e.intl,_=(0,r.useContext)(d.default),g=(0,r.useContext)(s.default).role===s.GridConstants.GRID,v=h.formatMessage({id:"Terra.table.row-index"},{row:a+1}),w=r.default.createElement("input",{type:"checkbox","aria-label":m||v,readOnly:!0,tabIndex:g?-1:0,checked:f,className:p("input",_.className)});return r.default.createElement(c.default,{rowId:t,columnId:n,tableId:l,key:"".concat(t,"_").concat(n),rowIndex:a,columnIndex:o,sectionId:i,sectionIndex:u,isSelected:!1,onCellSelect:b},w)}_.propTypes=h;t.default=r.default.memo((0,i.injectIntl)(_))},25477:function(e,t,n){var l=n(64836),a=n(18698);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=a(e)&&"function"!=typeof e)return{default:e};var n=b(t);if(n&&n.has(e))return n.get(e);var l={__proto__:null},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var i=r?Object.getOwnPropertyDescriptor(e,o):null;i&&(i.get||i.set)?Object.defineProperty(l,o,i):l[o]=e[o]}return l.default=e,n&&n.set(e,l),l}(n(67294)),o=l(n(47166)),i=l(n(45697)),u=l(n(16772)),d=l(n(50026)),s=l(n(99853)),c=l(n(50568)),f=n(28745),m=l(n(61877));function b(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(b=function(e){return e?n:t})(e)}var p=o.default.bind(m.default),h={id:i.default.string.isRequired,tableId:i.default.string.isRequired,sectionRowIndex:i.default.number,isCollapsible:i.default.bool,isCollapsed:i.default.bool,isHidden:i.default.bool,text:i.default.string,rows:i.default.arrayOf(c.default),hasRowSelection:i.default.bool,displayedColumns:i.default.arrayOf(f.columnShape),onCellSelect:i.default.func,rowHeight:i.default.string,rowHeaderIndex:i.default.number,isTableStriped:i.default.bool,onSectionSelect:i.default.func};function _(e){var t=e.id,n=e.tableId,l=e.sectionRowIndex,a=e.isCollapsible,o=e.isCollapsed,i=e.isHidden,c=e.isTableStriped,f=e.text,m=e.hasRowSelection,b=e.displayedColumns,h=e.onCellSelect,_=e.rowHeight,g=e.rowHeaderIndex,v=e.rows,w=e.onSectionSelect,C=(0,r.useContext)(d.default);return r.default.createElement(r.default.Fragment,null,!i&&r.default.createElement("tr",{"aria-rowindex":l,className:p("header")},r.default.createElement("th",{id:"".concat(n,"-").concat(t),align:"left",colSpan:b.length,role:"columnheader",scope:"col"},r.default.createElement(u.default,{text:f,isOpen:!o,onClick:a&&w?function(e){w(t),e.stopPropagation()}:void 0}))),r.default.createElement("tbody",{className:p("section",{collapsed:o,collapsible:a},C.className)},v.map((function(e,a){return r.default.createElement(s.default,{rowIndex:l+(a+1),key:e.id,height:_,id:e.id,sectionId:i?void 0:t,tableId:n,cells:e.cells,ariaLabel:e.ariaLabel,hasRowSelection:m,displayedColumns:b,rowHeaderIndex:g,onCellSelect:h,isSelected:e.isSelected,isTableStriped:c})}))))}_.propTypes=h,_.defaultProps={isCollapsible:!1,isCollapsed:!1,isHidden:!1,rows:[]};t.default=r.default.memo(_)},67661:function(e,t,n){var l=n(64836);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=l(n(67294)).default.createContext({pinnedColumnOffsets:[]});t.default=a},55667:function(e,t,n){var l=n(64836);Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.GridConstants=void 0;var a=l(n(67294)).default.createContext({role:"table",setCellAriaLiveMessage:void 0,tableRef:void 0,tableContainerRef:void 0});t.GridConstants={GRID:"grid"},t.default=a},49597:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;t.default={ROW_HEADER_INDEX_EXCEEDS_PINNED:"Prop rowHeaderIndex exceeds the size of pinnedColumns.",ROW_HEADER_INDEX_LESS_THAN_ZERO:"Prop rowHeaderIndex must be a positive integer.",ROW_HEADER_INDEX_NOT_AN_INTEGER:"Prop rowHeaderIndex must be an integer.",PINNED_COLUMNS_UNDEFINED:"To be properly accessible, the row header column should be a pinned column. please set pinned columns"}}}]);