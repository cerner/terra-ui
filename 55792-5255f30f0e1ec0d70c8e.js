"use strict";(self.webpackChunkterra_ui=self.webpackChunkterra_ui||[]).push([[55792],{55792:function(e,t,n){n.r(t),n.d(t,{default:function(){return o}});n(11504);var a=n(69788),r=["components"];function m(){return m=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},m.apply(this,arguments)}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},m=Object.keys(e);for(a=0;a<m.length;a++)n=m[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var m=Object.getOwnPropertySymbols(e);for(a=0;a<m.length;a++)n=m[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l={},d="wrapper";function o(e){var t=e.components,n=i(e,r);return(0,a.mdx)(d,m({},l,n,{components:t,mdxType:"MDXLayout"}),(0,a.mdx)("h1",{id:"event-emitter"},"Event Emitter"),(0,a.mdx)("p",null,(0,a.mdx)("inlineCode",{parentName:"p"},"EventEmitter"),' can be used to create and emit custom events to facilitate communications between the emitting component (emitter) and the listening component (listener). The behavior of the event emitter is similar to the "pub/sub" model. When EventEmitter emits an event, listeners that have registered to listen to this event can act upon receiving the event.'),(0,a.mdx)("h2",{id:"usage"},"Usage"),(0,a.mdx)("p",null,"EventEmitter is a singleton that is shared throughout your application. It is important to unsubscribe by removing all listeners to all events when your application is unmounted."),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-js"},"import EventEmitter from 'terra-application/lib/utils/event-emitter';\n")),(0,a.mdx)("h2",{id:"api"},"API"),(0,a.mdx)("table",null,(0,a.mdx)("thead",{parentName:"table"},(0,a.mdx)("tr",{parentName:"thead"},(0,a.mdx)("th",{parentName:"tr",align:null},"method"),(0,a.mdx)("th",{parentName:"tr",align:null},"syntax"),(0,a.mdx)("th",{parentName:"tr",align:null},"Description"))),(0,a.mdx)("tbody",{parentName:"table"},(0,a.mdx)("tr",{parentName:"tbody"},(0,a.mdx)("td",{parentName:"tr",align:null},(0,a.mdx)("inlineCode",{parentName:"td"},"once")),(0,a.mdx)("td",{parentName:"tr",align:null},(0,a.mdx)("inlineCode",{parentName:"td"},"eventEmitter.once('event-name', listener)")),(0,a.mdx)("td",{parentName:"tr",align:null},"Adds a one-time listener function for the event named ",(0,a.mdx)("inlineCode",{parentName:"td"},"event-name"),". The next time ",(0,a.mdx)("inlineCode",{parentName:"td"},"event-name")," is triggered, this listener is removed and then invoked.")),(0,a.mdx)("tr",{parentName:"tbody"},(0,a.mdx)("td",{parentName:"tr",align:null},(0,a.mdx)("inlineCode",{parentName:"td"},"on")),(0,a.mdx)("td",{parentName:"tr",align:null},(0,a.mdx)("inlineCode",{parentName:"td"},"eventEmitter.on('event-name', listener)")),(0,a.mdx)("td",{parentName:"tr",align:null},"Adds the listener function to the end of the listeners array for the event named ",(0,a.mdx)("inlineCode",{parentName:"td"},"event-name"),". No checks are made to see if the listener has already been added. Multiple calls passing the same combination of ",(0,a.mdx)("inlineCode",{parentName:"td"},"event-name")," and listener will result in the listener being added, and called, multiple times.")),(0,a.mdx)("tr",{parentName:"tbody"},(0,a.mdx)("td",{parentName:"tr",align:null},(0,a.mdx)("inlineCode",{parentName:"td"},"addListener")),(0,a.mdx)("td",{parentName:"tr",align:null},(0,a.mdx)("inlineCode",{parentName:"td"},"eventEmitter.addListener('event-name', listener)")),(0,a.mdx)("td",{parentName:"tr",align:null},"Alias to ",(0,a.mdx)("inlineCode",{parentName:"td"},"on"))),(0,a.mdx)("tr",{parentName:"tbody"},(0,a.mdx)("td",{parentName:"tr",align:null},(0,a.mdx)("inlineCode",{parentName:"td"},"off")),(0,a.mdx)("td",{parentName:"tr",align:null},(0,a.mdx)("inlineCode",{parentName:"td"},"eventEmitter.off('event-name', listener)")),(0,a.mdx)("td",{parentName:"tr",align:null},"Removes all specified listeners from the listener array for the event named ",(0,a.mdx)("inlineCode",{parentName:"td"},"event-name"),".")),(0,a.mdx)("tr",{parentName:"tbody"},(0,a.mdx)("td",{parentName:"tr",align:null},(0,a.mdx)("inlineCode",{parentName:"td"},"removeListener")),(0,a.mdx)("td",{parentName:"tr",align:null},(0,a.mdx)("inlineCode",{parentName:"td"},"eventEmitter.removeListener('event-name', listener)")),(0,a.mdx)("td",{parentName:"tr",align:null},"Alias to ",(0,a.mdx)("inlineCode",{parentName:"td"},"off"))),(0,a.mdx)("tr",{parentName:"tbody"},(0,a.mdx)("td",{parentName:"tr",align:null},(0,a.mdx)("inlineCode",{parentName:"td"},"removeAllListeners")),(0,a.mdx)("td",{parentName:"tr",align:null},(0,a.mdx)("inlineCode",{parentName:"td"},"eventEmitter.removeAllListeners('event-name')")),(0,a.mdx)("td",{parentName:"tr",align:null},"Removes all listeners if not event names are specified, or those of the specified 'event-name'.")),(0,a.mdx)("tr",{parentName:"tbody"},(0,a.mdx)("td",{parentName:"tr",align:null},(0,a.mdx)("inlineCode",{parentName:"td"},"emit")),(0,a.mdx)("td",{parentName:"tr",align:null},(0,a.mdx)("inlineCode",{parentName:"td"},"eventEmitter.emit('event-name', arg1, arg2);")),(0,a.mdx)("td",{parentName:"tr",align:null},"Synchronously calls each of the listeners registered for the event named 'event-name', in the order they were registered, passing the supplied arguments to each.")),(0,a.mdx)("tr",{parentName:"tbody"},(0,a.mdx)("td",{parentName:"tr",align:null},(0,a.mdx)("inlineCode",{parentName:"td"},"eventNames")),(0,a.mdx)("td",{parentName:"tr",align:null},(0,a.mdx)("inlineCode",{parentName:"td"},"eventEmitter.eventNames()")),(0,a.mdx)("td",{parentName:"tr",align:null},"Returns an array listing the event names for which the emitter has registered listeners. The values in the array will be strings.")),(0,a.mdx)("tr",{parentName:"tbody"},(0,a.mdx)("td",{parentName:"tr",align:null},(0,a.mdx)("inlineCode",{parentName:"td"},"listenerCount")),(0,a.mdx)("td",{parentName:"tr",align:null},(0,a.mdx)("inlineCode",{parentName:"td"},"eventEmitter.listenerCount('event-name')")),(0,a.mdx)("td",{parentName:"tr",align:null},"Returns the number of listeners listening to the event named 'event-name'.")),(0,a.mdx)("tr",{parentName:"tbody"},(0,a.mdx)("td",{parentName:"tr",align:null},(0,a.mdx)("inlineCode",{parentName:"td"},"listeners")),(0,a.mdx)("td",{parentName:"tr",align:null},(0,a.mdx)("inlineCode",{parentName:"td"},"eventEmitter.listeners('event-name')")),(0,a.mdx)("td",{parentName:"tr",align:null},"Returns a copy of the array of listeners for the event named 'event-name'.")))),(0,a.mdx)("h2",{id:"examples"},"Examples"),(0,a.mdx)("h3",{id:"once"},(0,a.mdx)("inlineCode",{parentName:"h3"},"once")),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-js"},"import eventEmitter from 'terra-application/lib/utils/event-emitter';\n\nlet listenCount = 0;\nconst listener = () => {listenCount += 1;}\n\neventEmitter.once('event-name', listener);\neventEmitter.emit('event-name');  // listenCount == 1\neventEmitter.emit('event-name');  // Ignored: listenCount == 1\n")),(0,a.mdx)("h3",{id:"on"},(0,a.mdx)("inlineCode",{parentName:"h3"},"on")),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-js"},"import eventEmitter from 'terra-application/lib/utils/event-emitter';\n\nlet listenCount = 0;\nconst listener = () => {listenCount += 1;}\n\neventEmitter.on('event-name', listener);\neventEmitter.emit('event-name');  // listenCount == 1\neventEmitter.emit('event-name');  // listenCount == 2\n")),(0,a.mdx)("h3",{id:"off"},(0,a.mdx)("inlineCode",{parentName:"h3"},"off")),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-js"},"import eventEmitter from 'terra-application/lib/utils/event-emitter';\n\nlet listenCount = 0;\nconst listener = () => {listenCount += 1;}\n\neventEmitter.on('event-name', listener);\neventEmitter.off('event-name', listener);\neventEmitter.emit('event-name');  // Ignored: listenCount == 0\n")),(0,a.mdx)("h3",{id:"removealllisteners"},(0,a.mdx)("inlineCode",{parentName:"h3"},"removeAllListeners")),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-js"},"import eventEmitter from 'terra-application/lib/utils/event-emitter';\n\nlet listenCount = 0;\nconst listener = () => {listenCount += 1;}\n\neventEmitter.on('event-name1', listener);\neventEmitter.on('event-name2', listener);\neventEmitter.on('event-name3', listener);\neventEmitter.removeAllListeners();\neventEmitter.emit('event-name1');  // Ignored: listenCount == 0\neventEmitter.emit('event-name2');  // Ignored: listenCount == 0\neventEmitter.emit('event-name3');  // Ignored: listenCount == 0\n")),(0,a.mdx)("h3",{id:"emit"},(0,a.mdx)("inlineCode",{parentName:"h3"},"emit")),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-js"},"import eventEmitter from 'terra-application/lib/utils/event-emitter';\n\nlet listenCount = 0;\nconst listener = (count) => {\n  if (count) {\n    listenCount += count;\n  } else {\n    listenCount += 1;\n  }\n\neventEmitter.on('event-name', listener);\neventEmitter.emit('event-name');      // listenCount == 1\neventEmitter.emit('event-name', 50);  // listenCount == 51\n")),(0,a.mdx)("h3",{id:"eventnames"},(0,a.mdx)("inlineCode",{parentName:"h3"},"eventNames")),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-js"},"import eventEmitter from 'terra-application/lib/utils/event-emitter';\n\nconst eventNames = ['event-name1', 'event-name2', 'event-name3']\n\neventEmitter.on(eventNames[0], () => {});\neventEmitter.on(eventNames[1], () => {});\neventEmitter.on(eventNames[2], () => {});\n\neventEmitter.eventNames();  // ['event-name1', 'event-name2', 'event-name3']\n")),(0,a.mdx)("h3",{id:"listenercount"},(0,a.mdx)("inlineCode",{parentName:"h3"},"listenerCount")),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-js"},"import eventEmitter from 'terra-application/lib/utils/event-emitter';\n\neventEmitter.on('event-name1', () => {});\neventEmitter.on('event-name2', () => {});\neventEmitter.on('event-name2', () => {});\n\neventEmitter.listenerCount('event-name1');  // 1\neventEmitter.listenerCount('event-name2');  // 2\n")),(0,a.mdx)("h3",{id:"listeners"},(0,a.mdx)("inlineCode",{parentName:"h3"},"listeners")),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-js"},"import eventEmitter from 'terra-application/lib/utils/event-emitter';\n\nconst listener1 = () => {};\nconst listener2 = () => {};\n\neventEmitter.on('event-name', listener1);\neventEmitter.on('event-name', listener2);\n\neventEmitter.listeners('event-name').length;  // 2\neventEmitter.listeners('event-name')[0];      // listener1\neventEmitter.listeners('event-name')[1];      // listener2\n")),(0,a.mdx)("p",null,"Follow the ",(0,a.mdx)("a",{parentName:"p",href:"https://nodejs.org/docs/latest-v10.x/api/events.html"},"official Node.js documentation")," for more examples and other less common APIs."))}o.isMDXComponent=!0}}]);