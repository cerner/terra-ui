"use strict";(self.webpackChunkterra_ui=self.webpackChunkterra_ui||[]).push([[19154],{27025:function(e,t,a){a.d(t,{C:function(){return s}});var i=a(67294),n=a(22863),s=function(e){var t=e.url;return i.createElement(n.Z,{src:"https://github.com/cerner/terra-framework/tree/main/packages/terra-date-time-picker",name:"terra-date-time-picker",version:"4.87.0",url:t})}},40368:function(e,t,a){a.r(t),t.default={"date-time-picker":"DateTimePicker-module__date-time-picker___55U1I","date-facade":"DateTimePicker-module__date-facade___QJnLm","time-facade":"DateTimePicker-module__time-facade___AD4Fb"}},68266:function(e,t,a){a.r(t),t.default={"orion-fusion-theme":"_TimeClarification-module__orion-fusion-theme___7mulH","time-clarification":"_TimeClarification-module__time-clarification___a-cWb",header:"_TimeClarification-module__header___DHi7K",title:"_TimeClarification-module__title___bNP9P",body:"_TimeClarification-module__body___xJUYS",buttons:"_TimeClarification-module__buttons___X700z","button-daylight":"_TimeClarification-module__button-daylight___Y2IWC","button-standard":"_TimeClarification-module__button-standard___ktUI+","button-offset":"_TimeClarification-module__button-offset___VG0Om","button-offset-hidden":"_TimeClarification-module__button-offset-hidden___QEVm2","offset-button-container":"_TimeClarification-module__offset-button-container___WDUv+"}},48978:function(e,t,a){var i=a(64836),n=a(18698);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var s=i(a(10434)),l=i(a(70215)),u=i(a(56690)),o=i(a(89728)),d=i(a(66115)),r=i(a(61655)),f=i(a(94993)),c=i(a(73808)),h=i(a(67294)),m=a(25387),p=i(a(45697)),T=i(a(47166)),D=i(a(50026)),v=i(a(50754)),g=i(a(37901)),C=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==n(e)&&"function"!=typeof e)return{default:e};var a=_(t);if(a&&a.has(e))return a.get(e);var i={},s=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var l in e)if("default"!==l&&Object.prototype.hasOwnProperty.call(e,l)){var u=s?Object.getOwnPropertyDescriptor(e,l):null;u&&(u.get||u.set)?Object.defineProperty(i,l,u):i[l]=e[l]}i.default=e,a&&a.set(e,i);return i}(a(51051)),b=i(a(57689)),k=i(a(40368)),y=i(a(81852)),S=i(a(47665)),O=["dateInputAttributes","disabled","excludeDates","filterDate","includeDates","initialTimeZone","isIncomplete","isInvalid","isInvalidMeridiem","onBlur","onChange","onChangeRaw","onClickOutside","onFocus","onRequestClose","onSelect","maxDate","minDate","name","required","showSeconds","timeInputAttributes","value","timeVariant"];function _(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,a=new WeakMap;return(_=function(e){return e?a:t})(e)}function V(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var a,i=(0,c.default)(e);if(t){var n=(0,c.default)(this).constructor;a=Reflect.construct(i,arguments,n)}else a=i.apply(this,arguments);return(0,f.default)(this,a)}}var B=T.default.bind(k.default),M={dateInputAttributes:p.default.object,disabled:p.default.bool,excludeDates:p.default.arrayOf(p.default.string),filterDate:p.default.func,includeDates:p.default.arrayOf(p.default.string),initialTimeZone:p.default.string,intl:p.default.shape({locale:p.default.string}).isRequired,isIncomplete:p.default.bool,isInvalid:p.default.bool,isInvalidMeridiem:p.default.bool,maxDate:p.default.string,minDate:p.default.string,name:p.default.string.isRequired,onBlur:p.default.func,onChange:p.default.func,onChangeRaw:p.default.func,onClickOutside:p.default.func,onFocus:p.default.func,onRequestClose:p.default.func,onSelect:p.default.func,required:p.default.bool,showSeconds:p.default.bool,timeInputAttributes:p.default.object,value:p.default.string,timeVariant:p.default.oneOf([y.default.FORMAT_12_HOUR,y.default.FORMAT_24_HOUR])},R={dateInputAttributes:void 0,disabled:!1,excludeDates:void 0,filterDate:void 0,includeDates:void 0,isIncomplete:!1,isInvalid:!1,isInvalidMeridiem:!1,maxDate:"2100-12-31",minDate:"1900-01-01",onBlur:void 0,onChange:void 0,onChangeRaw:void 0,onClickOutside:void 0,onFocus:void 0,onSelect:void 0,required:!1,showSeconds:!1,timeInputAttributes:void 0,value:void 0,timeVariant:y.default.FORMAT_24_HOUR,initialTimeZone:y.default.getLocalTimeZone()},w=function(e){(0,r.default)(a,e);var t=V(a);function a(e){var i;return(0,u.default)(this,a),(i=t.call(this,e)).initialTimeZone=y.default.checkIfTimeZoneIsValid(e.initialTimeZone),i.state={dateTime:y.default.createSafeDate(e.value,i.initialTimeZone),isAmbiguousTime:!1,isTimeClarificationOpen:!1,dateFormat:b.default.getFormatByLocale(e.intl.locale)},i.dateValue=b.default.formatMomentDate(i.state.dateTime,i.state.dateFormat)||"",i.timeValue=y.default.hasTime(i.props.value,i.initialTimeZone)?y.default.getTime(i.props.value,i.props.showSeconds,i.initialTimeZone):"",i.isDefaultDateTimeAcceptable=!0,i.wasOffsetButtonClicked=!1,i.handleDateChange=i.handleDateChange.bind((0,d.default)(i)),i.handleDateChangeRaw=i.handleDateChangeRaw.bind((0,d.default)(i)),i.handleTimeChange=i.handleTimeChange.bind((0,d.default)(i)),i.handleOnSelect=i.handleOnSelect.bind((0,d.default)(i)),i.handleOnDateBlur=i.handleOnDateBlur.bind((0,d.default)(i)),i.handleOnTimeBlur=i.handleOnTimeBlur.bind((0,d.default)(i)),i.handleBlur=i.handleBlur.bind((0,d.default)(i)),i.handleDaylightSavingButtonClick=i.handleDaylightSavingButtonClick.bind((0,d.default)(i)),i.handleStandardTimeButtonClick=i.handleStandardTimeButtonClick.bind((0,d.default)(i)),i.handleOnDateInputFocus=i.handleOnDateInputFocus.bind((0,d.default)(i)),i.handleOnTimeInputFocus=i.handleOnTimeInputFocus.bind((0,d.default)(i)),i.handleFocus=i.handleFocus.bind((0,d.default)(i)),i.handleOnCalendarButtonClick=i.handleOnCalendarButtonClick.bind((0,d.default)(i)),i.handleOffsetButtonClick=i.handleOffsetButtonClick.bind((0,d.default)(i)),i.handleOnRequestClose=i.handleOnRequestClose.bind((0,d.default)(i)),i.dateTimePickerContainer=h.default.createRef(),i.containerHasFocus=!1,i.prevDateTime=y.default.createSafeDate(e.value,i.initialTimeZone),i}return(0,o.default)(a,[{key:"componentDidMount",value:function(){this.isDefaultDateAcceptable=this.validateDefaultDate()}},{key:"componentDidUpdate",value:function(){if(this.state.dateTime&&y.default.isValidTime(this.timeValue,this.props.showSeconds)){var e=y.default.getTime(this.state.dateTime.format(),this.props.showSeconds,this.initialTimeZone);this.timeValue!==e&&(this.timeValue=e,this.forceUpdate())}}},{key:"handleOnSelect",value:function(e,t){this.dateValue=b.default.formatISODate(t,this.state.dateFormat);var a=this.state.dateTime?this.state.dateTime.clone():null,i=y.default.syncDateTime(a,t,this.timeValue,this.props.showSeconds);a&&a.format()===i.format()||this.checkAmbiguousTime(i),this.props.onSelect&&this.props.onSelect(e,i.format())}},{key:"handleOnDateBlur",value:function(e){var t=this,a=e.relatedTarget?e.relatedTarget:document.activeElement;if(!this.dateTimePickerContainer.current.contains(a)){var i=y.default.isValidDateTime(this.dateValue,this.timeValue,this.state.dateFormat,this.props.showSeconds)?this.state.dateTime:null;this.checkAmbiguousTime(i,(function(){e.persist(),t.state.isAmbiguousTime&&t.state.isTimeClarificationOpen||t.handleBlur(e,t.state.dateTime)}))}}},{key:"handleOnTimeBlur",value:function(e){var t,a=this,i=e.relatedTarget?e.relatedTarget:document.activeElement;this.dateTimePickerContainer.current.contains(i)||(y.default.isValidDateTime(this.dateValue,this.timeValue,this.state.dateFormat,this.props.showSeconds)&&(t=y.default.updateTime(this.state.dateTime,this.timeValue,this.props.showSeconds)),this.checkAmbiguousTime(t,(function(){e.persist(),a.state.isAmbiguousTime&&a.state.isTimeClarificationOpen||a.handleBlur(e,a.state.dateTime)})))}},{key:"handleBlur",value:function(e,t){if(this.props.onBlur){var a=this.getMetadata(t);this.props.onBlur(e,a)}this.containerHasFocus=!1}},{key:"handleDateChange",value:function(e,t){var a,i=b.default.formatISODate(t,"YYYY-MM-DD"),n=b.default.isValidDate(i,"YYYY-MM-DD"),s=y.default.isValidTime(this.timeValue,this.props.showSeconds);if(n&&(this.dateValue=b.default.formatISODate(t,this.state.dateFormat)),n){var l=this.state.dateTime?this.state.dateTime.clone():y.default.createSafeDate(i,this.initialTimeZone);if(a=y.default.syncDateTime(l,t,this.timeValue,this.props.showSeconds),l.isDST()&&3===l.hours()){var u=!1;a.isDST()||(a.subtract(1,"hours"),u=!0),!l.subtract(1,"days").isDST()&&a.isDST()&&(a.subtract(1,"hours"),u=!0),l&&3===l._a[3]&&u&&(a.add(1,"hours"),u=!1)}this.prevDateTime&&2===this.prevDateTime._a[3]&&3===this.prevDateTime.hours()&&a.subtract(1,"hours"),s&&(this.timeValue=y.default.getTime(a.format(),this.props.showSeconds,this.initialTimeZone))}n&&s||""===this.dateValue&&""===this.timeValue?this.handleChange(e,a):this.setState({dateTime:a})}},{key:"handleDateChangeRaw",value:function(e,t){this.dateValue=t,b.default.isValidDate(this.dateValue,this.state.dateFormat)&&this.isDateTimeAcceptable(y.default.convertDateTimeStringToMomentObject(this.dateValue,this.timeValue,this.state.dateFormat,this.props.showSeconds,this.initialTimeZone))||(this.prevDateTime=this.state.dateTime?this.state.dateTime:this.prevDateTime,this.setState({dateTime:null})),this.handleChangeRaw(e,t)}},{key:"handleTimeChange",value:function(e,t){this.timeValue=t;var a=b.default.isValidDate(this.dateValue,this.state.dateFormat)&&this.isDateTimeAcceptable(y.default.convertDateTimeStringToMomentObject(this.dateValue,this.timeValue,this.state.dateFormat,this.props.showSeconds,this.initialTimeZone)),i=y.default.isValidTime(this.timeValue,this.props.showSeconds),n=this.state.dateTime?this.state.dateTime.clone():null,s=!1;if("keydown"===e.type){var l=this.timeValue.split(":");if("n"===e.key||"N"===e.key)n=b.default.createSafeDate(b.default.getCurrentDate(),this.initialTimeZone),s=!0;else if("-"===e.key||"_"===e.key){a||(n=b.default.createSafeDate(b.default.getCurrentDate(),this.initialTimeZone),s=!0),"23"===l[0]&&"59"===l[1]&&(n=n.subtract(1,"d"),s=!0);var u=y.default.updateTime(n,this.timeValue,this.props.showSeconds),o=n.clone().subtract(1,"minute").hours();u.isDST()&&o!==u.hours()&&(l[0]="0".concat(o).slice(-2),this.timeValue=l.join(":")),n.isBefore(b.default.MIN_DATE.concat(" ","00:00:00"))&&(l[0]="00",l[1]="00",this.props.showSeconds&&(l[2]="00"),this.timeValue=l.join(":"),n=y.default.updateTime(b.default.createSafeDate(b.default.MIN_DATE,this.initialTimeZone),this.timeValue,this.props.showSeconds))}else"="===e.key||"+"===e.key?(a||(n=b.default.createSafeDate(b.default.getCurrentDate(),this.initialTimeZone),s=!0),"00"===l[0]&&"00"===l[1]&&(n=n.add(1,"d"),s=!0),n.isAfter(b.default.MAX_DATE.concat(" ","23:59:59"))&&(l[0]="23",l[1]="59",this.props.showSeconds&&(l[2]="59"),this.timeValue=l.join(":"),n=y.default.updateTime(b.default.createSafeDate(b.default.MAX_DATE,this.initialTimeZone),this.timeValue,this.props.showSeconds))):this.props.timeVariant!==y.default.FORMAT_12_HOUR||"a"!==e.key&&"A"!==e.key&&"p"!==e.key&&"P"!==e.key||a||(n=b.default.createSafeDate(b.default.getCurrentDate(),this.initialTimeZone),s=!0)}if(s&&(this.dateValue=b.default.formatISODate(n.format("YYYY-MM-DD"),this.state.dateFormat),a=b.default.isValidDate(this.dateValue,this.state.dateFormat)&&this.isDateTimeAcceptable(y.default.convertDateTimeStringToMomentObject(this.dateValue,this.timeValue,this.state.dateFormat,this.props.showSeconds,this.initialTimeZone))),a&&i){var d=y.default.updateTime(n,this.timeValue,this.props.showSeconds);e.keyCode===C.KEY_DOWN&&n&&d&&n.format()===d.format()&&d.subtract(1,"hours");var r=this.timeValue;d&&(r=y.default.getTime(d.format(),this.props.showSeconds,this.initialTimeZone)),this.handleChangeRaw(e,r),this.handleChange(e,d)}else if(""===this.dateValue&&""===this.timeValue)this.handleChangeRaw(e,this.timeValue),this.handleChange(e,null);else{if(!a&&i){var f=y.default.updateTime(n,this.timeValue,this.props.showSeconds);this.setState({dateTime:f})}this.handleChangeRaw(e,this.timeValue)}}},{key:"handleChange",value:function(e,t){if(this.setState({dateTime:t}),this.props.onChange&&(this.state.isAmbiguousTime||!y.default.checkAmbiguousTime(t))){var a=this.getMetadata(t);this.props.onChange(e,null!=t&&t.isValid()?t.format():"",a)}}},{key:"handleChangeRaw",value:function(e,t){if(this.props.onChangeRaw){var a=this.getMetadata(t);this.props.onChangeRaw(e,t,a)}}},{key:"handleOnDateInputFocus",value:function(e){this.handleOnInputFocus(e)}},{key:"handleOnTimeInputFocus",value:function(e){this.handleOnInputFocus(e)}},{key:"handleOnInputFocus",value:function(e){this.handleFocus(e),this.isDefaultDateAcceptable||(this.dateValue="",this.timeValue="",this.handleChange(e,null),this.isDefaultDateAcceptable=!0)}},{key:"handleFocus",value:function(e){!this.props.onFocus||this.containerHasFocus||this.dateTimePickerContainer.current.contains(e.relatedTarget)||(this.props.onFocus(e),this.containerHasFocus=!0)}},{key:"handleOnCalendarButtonClick",value:function(e){this.isDefaultDateAcceptable||this.validateDefaultDate()?this.isDefaultDateAcceptable=!0:(this.dateValue="",this.timeValue="",this.handleChange(e,null))}},{key:"handleDaylightSavingButtonClick",value:function(e){this.setState({isTimeClarificationOpen:!1});var t=this.state.dateTime.clone();if(t.isDST()){if(this.props.onChange&&!this.wasOffsetButtonClicked){var a=this.getMetadata(t);this.props.onChange(e,null!=t&&t.isValid()?t.format():"",a)}}else if(t.subtract(1,"hour"),this.setState({dateTime:t}),this.props.onChange){var i=this.getMetadata(t);this.props.onChange(e,null!=t&&t.isValid()?t.format():"",i)}this.wasOffsetButtonClicked||this.handleBlur(e,t),this.wasOffsetButtonClicked=!1}},{key:"handleStandardTimeButtonClick",value:function(e){this.setState({isTimeClarificationOpen:!1});var t=this.state.dateTime.clone();if(t.isDST()){if(t.add(1,"hour"),this.setState({dateTime:t}),this.props.onChange){var a=this.getMetadata(t);this.props.onChange(e,null!=t&&t.isValid()?t.format():"",a)}}else if(this.props.onChange&&!this.wasOffsetButtonClicked){var i=this.getMetadata(t);this.props.onChange(e,null!=t&&t.isValid()?t.format():"",i)}this.wasOffsetButtonClicked||this.handleBlur(e,t),this.wasOffsetButtonClicked=!1}},{key:"handleOffsetButtonClick",value:function(){this.wasOffsetButtonClicked=!0,this.setState((function(e){return{isTimeClarificationOpen:!e.isTimeClarificationOpen}}))}},{key:"handleOnRequestClose",value:function(){this.setState({isTimeClarificationOpen:!1})}},{key:"getMetadata",value:function(e){var t=e&&y.default.isMomentObject(e)?e.clone():null;if(b.default.isValidDate(this.dateValue,this.state.dateFormat)){var a=y.default.convertDateTimeStringToMomentObject(this.dateValue,this.timeValue,this.state.dateFormat,this.props.showSeconds,this.initialTimeZone);a&&!a.isSame(t,"day")&&(t=a)}var i="",n=y.default.isValidDateTime(this.dateValue,this.timeValue,this.state.dateFormat,this.props.showSeconds);n&&t&&(i=t.format());var s=this.timeValue||"";i&&(s=y.default.getTime(i,this.props.showSeconds,this.initialTimeZone));var l=!1,u="".concat(this.dateValue?this.dateValue:""," ").concat(s).trim();(""===u||n&&t&&this.isDateTimeAcceptable(t))&&(l=!0);var o=!1;return n&&t&&(o=y.default.checkAmbiguousTime(t)),{iSO:i,inputValue:u,dateValue:this.dateValue||"",timeValue:s,isAmbiguousHour:o,isCompleteValue:n,isValidValue:l}}},{key:"checkAmbiguousTime",value:function(e,t){if(!this.state.isTimeClarificationOpen){var a=!1,i=this.state.isAmbiguousTime;if(e&&e.isValid()){var n=e.clone();a=y.default.checkAmbiguousTime(n)}this.setState({isAmbiguousTime:a,isTimeClarificationOpen:a&&!i},t)}}},{key:"isDateTimeAcceptable",value:function(e){var t=!0;return b.default.isDateOutOfRange(e,y.default.createSafeDate(b.default.getMinDate(this.props.minDate),this.initialTimeZone),y.default.createSafeDate(b.default.getMaxDate(this.props.maxDate),this.initialTimeZone))&&(t=!1),b.default.isDateExcluded(e,this.props.excludeDates)&&(t=!1),t}},{key:"validateDefaultDate",value:function(){return this.isDateTimeAcceptable(this.state.dateTime)}},{key:"renderTimeClarification",value:function(){return h.default.createElement(S.default,{ambiguousDateTime:this.state.dateTime.format(),disabled:this.props.disabled,isOpen:this.state.isTimeClarificationOpen,isOffsetButtonHidden:!this.state.isAmbiguousTime,onDaylightSavingButtonClick:this.handleDaylightSavingButtonClick,onStandardTimeButtonClick:this.handleStandardTimeButtonClick,onOffsetButtonClick:this.handleOffsetButtonClick,onRequestClose:this.handleOnRequestClose,onBlur:this.handleOnTimeBlur,onFocus:this.handleFocus,initialTimeZone:this.initialTimeZone})}},{key:"render",value:function(){var e=this,t=this.props,a=t.dateInputAttributes,i=t.disabled,n=t.excludeDates,u=t.filterDate,o=t.includeDates,d=(t.initialTimeZone,t.isIncomplete),r=t.isInvalid,f=t.isInvalidMeridiem,c=(t.onBlur,t.onChange,t.onChangeRaw,t.onClickOutside),m=(t.onFocus,t.onRequestClose),p=(t.onSelect,t.maxDate),T=t.minDate,D=t.name,C=t.required,k=t.showSeconds,S=t.timeInputAttributes,_=(t.value,t.timeVariant),V=(0,l.default)(t,O),M=this.state.dateTime?this.state.dateTime.clone():null,R=b.default.formatMomentDate(M,"YYYY-MM-DD"),w=this.context,A=!!this.state.dateTime&&M.isAfter(y.default.createSafeDate(b.default.MAX_DATE.concat(" ","23:58:59"),this.initialTimeZone)),F=!!this.state.dateTime&&M.isBefore(y.default.createSafeDate(b.default.MIN_DATE.concat(" ","00:01:00"),this.initialTimeZone));return h.default.createElement("div",(0,s.default)({},V,{className:B("date-time-picker",w.className),ref:this.dateTimePickerContainer}),h.default.createElement("input",{"data-terra-date-time-input-hidden":!0,type:"hidden",name:D,value:null!=M&&M.isValid()?M.format():""}),h.default.createElement("div",{className:B("date-facade")},h.default.createElement(v.default,{onCalendarButtonClick:this.handleOnCalendarButtonClick,onChange:this.handleDateChange,onChangeRaw:this.handleDateChangeRaw,onSelect:this.handleOnSelect,onClickOutside:c,onRequestClose:m,onBlur:this.handleOnDateBlur,onFocus:this.handleOnDateInputFocus,excludeDates:n,filterDate:u,includeDates:o,inputAttributes:a,maxDate:b.default.getMaxDate(p),minDate:b.default.getMinDate(T),selectedDate:R,value:R,name:"input",disabled:i,disableButtonFocusOnClose:!0,isIncomplete:d,isInvalid:r,required:C,initialTimeZone:this.initialTimeZone,isDefaultDateAcceptable:!0})),h.default.createElement("div",{className:B("time-facade")},h.default.createElement(g.default,{onBlur:this.handleOnTimeBlur,onChange:this.handleTimeChange,onFocus:this.handleOnTimeInputFocus,inputAttributes:S,name:"input",value:this.timeValue,disabled:i,variant:_,refCallback:function(t){e.hourInput=t},showSeconds:k,isIncomplete:d,isInvalid:r,isInvalidMeridiem:f,required:C,atMaxDate:A,atMinDate:F}),this.state.isAmbiguousTime?this.renderTimeClarification():null))}}]),a}(h.default.Component);w.propTypes=M,w.defaultProps=R,w.contextType=D.default;var A=(0,m.injectIntl)(w);t.default=A},81852:function(e,t,a){var i=a(64836);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=i(a(56690)),s=i(a(89728)),l=i(a(80008)),u=i(a(57689)),o=i(a(7030)),d=function(){function e(){(0,n.default)(this,e)}return(0,s.default)(e,null,[{key:"hasTime",value:function(t,a){if(!e.createSafeDate(t,a))return!1;var i="";return t.indexOf(" ")>0&&(i=t.split(" ")[1]),t.indexOf("T")>0&&(i=t.split("T")[1]),i.length>0}},{key:"syncDateTime",value:function(t,a,i,n){var s=(0,l.default)(a);if(t&&t.isValid()){var u=t.clone();return s.isValid()&&u.year(s.get("year")).month(s.get("month")).date(s.get("date")),i&&(!n&&5===i.length||n&&8===i.length)&&(u=e.updateTime(u,i,n)),u}if(s.isValid()){var o=s.clone();return i&&(!n&&5===i.length||n&&8===i.length)&&(o=e.updateTime(o,i,n)),o}return t}},{key:"updateTime",value:function(t,a,i){if(!t||!t.isValid())return null;var n=t.clone(),s=i?"HH:mm:ss":"HH:mm",u=(0,l.default)(a,s,!0),o=t.tz()||e.getLocalTimeZone();if(u.isValid()){var d=n.format("YYYY-MM-DD").concat(" ").concat(u.format(s));return l.default.tz(d,o)}return t}},{key:"getTime",value:function(t,a,i){var n=a?"HH:mm:ss":"HH:mm",s=e.createSafeDate(t,i);return u.default.formatMomentDate(s,n)}},{key:"isValidDateTime",value:function(t,a,i,n){return u.default.isValidDate(t,i)&&e.isValidTime(a,n)}},{key:"isValidTime",value:function(e,t){var a=t?"HH:mm:ss":"HH:mm";return(0,l.default)(e,a,!0).isValid()}},{key:"checkAmbiguousTime",value:function(e){if(!e||!e.isValid())return!1;var t=l.default.tz(e.format(),e.tz()),a=t.clone(),i=t.clone();a.add(1,"hour"),i.subtract(1,"hour");var n=t.isDST()&&!a.isDST(),s=!t.isDST()&&i.isDST();return n||s}},{key:"getDaylightSavingTZDisplay",value:function(t,a){var i=e.createSafeDate(t,a);return i.isValid()?(i.subtract(1,"days"),i.tz(i.tz()).format("z")):""}},{key:"getDaylightSavingExpandedTZDisplay",value:function(t,a){var i=e.createSafeDate(t,a);if(!i.isValid())return"";i.subtract(1,"days");var n=i.tz(),s=i.tz(n);return l.default.tz.zone(n).name+s.format(" z Z")}},{key:"getStandardTZDisplay",value:function(t,a){var i=e.createSafeDate(t,a);return i.isValid()?(i.add(1,"days"),i.tz(i.tz()).format("z")):""}},{key:"getStandardExpandedTZDisplay",value:function(t,a){var i=e.createSafeDate(t,a);if(!i.isValid())return"";i.add(1,"days");var n=i.tz(),s=i.tz(n);return l.default.tz.zone(n).name+s.format(" z Z")}},{key:"convertDateTimeStringToMomentObject",value:function(t,a,i,n,s){var l=e.createSafeDate(u.default.convertToISO8601(t,i),s);return e.updateTime(l,a,n)}},{key:"createSafeDate",value:function(t,a){if(t){var i=a&&l.default.tz.zone(a)?l.default.tz(t,a):l.default.tz(t,e.getLocalTimeZone());return i.isValid()?i:void 0}}},{key:"isMomentObject",value:function(e){return l.default.isMoment(e)}},{key:"getLocalTimeZone",value:function(){return l.default.tz.guess()}},{key:"checkIfTimeZoneIsValid",value:function(t){return l.default.tz.zone(t)?t:e.getLocalTimeZone()}}]),e}();d.FORMAT_12_HOUR=o.default.FORMAT_12_HOUR,d.FORMAT_24_HOUR=o.default.FORMAT_24_HOUR;var r=d;t.default=r},47665:function(e,t,a){var i=a(64836);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=i(a(56690)),s=i(a(89728)),l=i(a(66115)),u=i(a(61655)),o=i(a(94993)),d=i(a(73808)),r=i(a(67294)),f=i(a(45697)),c=i(a(47166)),h=i(a(42570)),m=i(a(55281)),p=a(25387),T=i(a(81852)),D=i(a(68266));function v(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var a,i=(0,d.default)(e);if(t){var n=(0,d.default)(this).constructor;a=Reflect.construct(i,arguments,n)}else a=i.apply(this,arguments);return(0,o.default)(this,a)}}var g=c.default.bind(D.default),C={ambiguousDateTime:f.default.string,intl:f.default.shape({formatMessage:f.default.func}).isRequired,isOpen:f.default.bool.isRequired,isOffsetButtonHidden:f.default.bool.isRequired,onBlur:f.default.func,onDaylightSavingButtonClick:f.default.func.isRequired,onFocus:f.default.func,onStandardTimeButtonClick:f.default.func.isRequired,onOffsetButtonClick:f.default.func.isRequired,onRequestClose:f.default.func.isRequired,disabled:f.default.bool,initialTimeZone:f.default.string},b=function(e){(0,u.default)(a,e);var t=v(a);function a(e){var i;return(0,n.default)(this,a),(i=t.call(this,e)).state={offsetDisplay:"",offsetLongDisplay:""},i.handleDaylightSavingButtonClick=i.handleDaylightSavingButtonClick.bind((0,l.default)(i)),i.handleStandardTimeButtonClick=i.handleStandardTimeButtonClick.bind((0,l.default)(i)),i}return(0,s.default)(a,[{key:"handleDaylightSavingButtonClick",value:function(e){this.setState({offsetDisplay:T.default.getDaylightSavingTZDisplay(this.props.ambiguousDateTime,this.props.initialTimeZone),offsetLongDisplay:T.default.getDaylightSavingExpandedTZDisplay(this.props.ambiguousDateTime,this.props.initialTimeZone)}),this.props.onDaylightSavingButtonClick&&this.props.onDaylightSavingButtonClick(e)}},{key:"handleStandardTimeButtonClick",value:function(e){this.setState({offsetDisplay:T.default.getStandardTZDisplay(this.props.ambiguousDateTime,this.props.initialTimeZone),offsetLongDisplay:T.default.getStandardExpandedTZDisplay(this.props.ambiguousDateTime,this.props.initialTimeZone)}),this.props.onStandardTimeButtonClick&&this.props.onStandardTimeButtonClick(e)}},{key:"render",value:function(){this.props.isOffsetButtonHidden&&(this.state.offsetDisplay="");var e=g(["button-offset",{"button-offset-hidden":this.props.isOffsetButtonHidden||!this.state.offsetDisplay}]),t=this.props.intl,a=t.formatMessage({id:"Terra.dateTimePicker.timeClarification.title"}),i=t.formatMessage({id:"Terra.dateTimePicker.timeClarification.message"}),n=t.formatMessage({id:"Terra.dateTimePicker.timeClarification.button.daylightSaving"}),s=t.formatMessage({id:"Terra.dateTimePicker.timeClarification.button.standardTime"});return r.default.createElement(r.default.Fragment,null,r.default.createElement(h.default,{classNameModal:g("time-clarification"),ariaLabel:"Time Clarification",isOpen:this.props.isOpen,onRequestClose:this.props.onRequestClose,closeOnEsc:!1,closeOnOutsideClick:!1,zIndex:"9000"},r.default.createElement("div",null,r.default.createElement("header",{className:g("header")},r.default.createElement("h1",{className:g("title")},a)),r.default.createElement("div",{className:g("body")},r.default.createElement("p",null,i)),r.default.createElement("div",{className:g("buttons")},r.default.createElement(m.default,{text:n,onClick:this.handleDaylightSavingButtonClick,variant:m.default.Opts.Variants.EMPHASIS,className:g("button-daylight")}),r.default.createElement(m.default,{text:s,onClick:this.handleStandardTimeButtonClick,variant:m.default.Opts.Variants.EMPHASIS,className:g("button-standard")})))),r.default.createElement("div",{className:g("offset-button-container")},r.default.createElement(m.default,{title:this.state.offsetLongDisplay,"aria-label":this.state.offsetLongDisplay,className:e,onBlur:this.props.onBlur,onFocus:this.props.onFocus,onClick:this.props.onOffsetButtonClick,text:this.state.offsetDisplay,isCompact:!0,isDisabled:this.props.disabled})))}}]),a}(r.default.Component);b.propTypes=C,b.defaultProps={disabled:!1};var k=(0,p.injectIntl)(b);t.default=k}}]);