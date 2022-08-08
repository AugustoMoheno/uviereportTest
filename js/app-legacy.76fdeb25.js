(function(){"use strict";var e={2534:function(e,t,n){n(6992),n(8674),n(9601),n(7727);var r=n(144),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-app",[n("v-main",[n("router-view")],1)],1)},i=[],a=n(4367),c=(n(4916),n(5306),n(1539),n(9714),n(629)),s={name:"App",data:function(){return{}},computed:(0,a.Z)({},(0,c.rn)({customers:function(e){return e.customers.customers}})),methods:(0,a.Z)((0,a.Z)({},(0,c.nv)({getItems:"customers/getAll",saveItem:"customers/save",deleteItem:"customers/delete"})),{},{newData:function(){var e={id:this.serial(),name:"Cesar"};this.saveItem(e),this.getItems()},deleteData:function(e){this.deleteItem(e),this.getItems()},serial:function(){var e=(new Date).getTime(),t="xxxxxxxxxxxx4xxxyxxxxxxxxxxxxxxx".replace(/[xy]/g,(function(t){var n=(e+16*Math.random())%16|0;return e=Math.floor(e/16),("x"==t?n:3&n|8).toString(16)}));return t}})},u=s,l=n(3736),d=n(3453),f=n.n(d),m=n(7524),v=n(7877),p=(0,l.Z)(u,o,i,!1,null,null,null),h=p.exports;f()(p,{VApp:m.Z,VMain:v.Z});var g=n(5205);(0,g.z)("".concat("/uviereportTest/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});n(8783),n(3948);var b=n(8345),x=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("v-card",{staticClass:"mx-auto overflow-hidden",attrs:{color:"#F2F4F4",height:"100vh"}},[n("nav-bar-client"),n("v-subheader",[e._v(" Mis Clientes")]),n("scroll-client"),n("new-client")],1)],1)},w=[],y=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-row",[n("v-dialog",{attrs:{persistent:"",height:"100vh",width:"80vh"},scopedSlots:e._u([{key:"activator",fn:function(t){var r=t.on,o=t.attrs;return[n("v-btn",e._g(e._b({attrs:{fab:"",dark:"",color:"rgba(39,55,70,1)",fixed:"",right:"",bottom:""}},"v-btn",o,!1),r),[n("v-icon",{attrs:{size:"23",color:"#D5DBDB",dark:""}},[e._v("add")])],1)]}}]),model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[e.dialog?n("v-card",{staticClass:"white--text",attrs:{color:"#F2F4F4"}},[n("v-container",[n("v-card-title",{staticClass:"text-h5",staticStyle:{color:"#273746"}},[e._v(" Mi nuevo cliente ")]),n("v-card-text",{staticStyle:{color:"#273746"}},[e._v("Datos Generales")]),n("v-form",{ref:"form"},[n("v-text-field",{attrs:{outlined:"",label:"Nombre Comercial",required:""},model:{value:e.tradename,callback:function(t){e.tradename=t},expression:"tradename"}}),n("v-select",{attrs:{outlined:"",items:e.municipalityItems,label:"Municipio",required:""},model:{value:e.municipality,callback:function(t){e.municipality=t},expression:"municipality"}}),n("v-dialog",{ref:"dialog",attrs:{"return-value":e.date,persistent:"",width:"290px"},on:{"update:returnValue":function(t){e.date=t},"update:return-value":function(t){e.date=t}},scopedSlots:e._u([{key:"activator",fn:function(t){var r=t.on,o=t.attrs;return[n("v-text-field",e._g(e._b({attrs:{outlined:"",label:"Fecha",readonly:""},model:{value:e.dateSuper,callback:function(t){e.dateSuper=t},expression:"dateSuper"}},"v-text-field",o,!1),r))]}}],null,!1,3675516911),model:{value:e.modal,callback:function(t){e.modal=t},expression:"modal"}},[n("v-date-picker",{attrs:{scrollable:""},model:{value:e.dateSuper,callback:function(t){e.dateSuper=t},expression:"dateSuper"}},[n("v-spacer"),n("v-btn",{attrs:{text:"",color:"primary"},on:{click:function(t){e.modal=!1}}},[e._v(" Cancel ")]),n("v-btn",{attrs:{text:"",color:"primary"},on:{click:function(t){return e.$refs.dialog.save(e.dateSuper)}}},[e._v(" OK ")])],1)],1),n("v-text-field",{attrs:{outlined:"",label:"¿Quien nos atendió?",required:""},model:{value:e.whoAttendedUs,callback:function(t){e.whoAttendedUs=t},expression:"whoAttendedUs"}}),n("v-select",{attrs:{disabled:"",outlined:"",items:e.typeOfSetupItems,label:"Tipo de dictamen",required:""},model:{value:e.typeOfSetup,callback:function(t){e.typeOfSetup=t},expression:"typeOfSetup"}})],1),n("v-card-actions",[n("v-spacer"),n("v-btn",{attrs:{color:"#273746",text:""},on:{click:function(t){e.dialog=!1}}},[e._v(" Cancelar ")]),n("v-btn",{attrs:{outlined:"",color:"#273746"},on:{click:function(t){return e.create()}}},[e._v(" Crear ")])],1)],1)],1):e._e()],1)],1)},S=[],I={name:"NewClient",data:function(){return{date:new Date(Date.now()-6e4*(new Date).getTimezoneOffset()).toISOString().substr(0,10),dateSuper:new Date(Date.now()-6e4*(new Date).getTimezoneOffset()).toISOString().substr(0,10),municipalityItems:["Cozumel","Isla Mujeres","Benito Juárez","Solidaridad","Puerto Morelos","Felipe Carrillo Puerto","José María Morelos","Lázaro Cárdenas","Tulum","Othón P. Blanco","Bacalar"],typeOfSetupItems:["Baja tensión","Media tensión","Tableros"],modal:!1,dialog:!1,tradename:"",municipality:"",newDate:new Date(Date.now()-6e4*(new Date).getTimezoneOffset()).toISOString().substr(0,10),whoAttendedUs:"",typeOfSetup:"Tableros"}},methods:(0,a.Z)((0,a.Z)({},(0,c.nv)({getItems:"customers/getAll",saveItem:"customers/save",deleteItem:"customers/delete"})),{},{create:function(){var e={tradename:this.tradename,municipality:this.municipality,date:this.date,whoAttendedUs:this.whoAttendedUs,typeOfSetup:this.typeOfSetup,generalNonconformities:"",section:[{icon:!0,tab:"description",content:"DocumentaryInformation"},{tab:"Tableros",content:"BoardList"},{icon:!0,tab:"notes",content:"GeneralNonconformities"}],boardList:{config:[{content:"ItemBasic",description:"Espacio de trabajo alrededor de equipo eléctrico. ",nom:"110-26",value:null},{content:"ItemBasic",description:"Ubicación con respecto a material fácilmente inflamable. ",nom:"408-17",value:null},{content:"ItemBasic",description:"Señales de advertencia contra arco eléctrico.",nom:"110-16",value:null},{content:"ItemBasic",description:"Identificación de los medios de desconexión.",nom:"110-22",value:null},{content:"ItemBasic",description:"Identificación de campo requerido. a) Directorio del circuito.",nom:"408-4",value:null},{content:"ItemBasic",description:"Aberturas sin utilizar.",nom:"408-7",value:null},{content:"ItemBasic",description:"Paneles.",nom:"408-50",value:null},{content:"ItemBasic",description:"Protección contra sobrecorriente.",nom:"408-36",value:null},{content:"ItemBasic",description:"Puesta a tierra de los tableros de alumbrado y control.",nom:"408-40",value:null},{content:"ItemBasic",description:"Ubicación en el circuito.",nom:"240-21",value:null},{content:"ItemBasic",description:"Conexiones eléctricas. a) Terminales.",nom:"110-14.A",value:null},{content:"ItemThermography",description:"Conexiones eléctricas. c) Limitaciones por temperatura.",nom:"110-14.C",value:null,model:"Interruptor principal",items:["Interruptor principal","Interruptor derivado","Conductor alimentador","Conductor derivado","Borne","Zapata","Barra colectora","Barra de neutros","Barra de tierras","Gabinete","Empalme, terminal"]},{content:"ItemBasicSelectNote",description:"Integridad de los equipos y de las conexiones.",nom:"110-12",value:null,model:"Preventivo",items:["Preventivo","Correctivo","Cambio total"],note:""},{content:"ItemBasic",description:"Tubo conduit de polietileno.",nom:"364-4",value:null},{content:"ItemBasicSelect",description:"Cables y cordones flexibles.",nom:"400-8",value:null,model:"Cable de uso rudo",items:["Cable de uso rudo","Cable dúplex"]},{content:"ItemBasic",description:"Continuidad mecánica de las canalizaciones y de los cables.",nom:"300-12",value:null},{content:"ItemBasic",description:"Instalación de canalizaciones.",nom:"300-18",value:null},{content:"ItemNote",description:"",nom:"Notas",value:null}],data:[]},documentaryInformation:[{text:"Diagrama Unifilar",content:"ItemBasic",description:"Debe presentar diagrama unifilar de las instalaciones eléctricas.",nom:!1,value:null},{content:"ItemBasic",description:"Debe presentar constancia de mantenimiento del transformador eléctrico. ",nom:"924-14",value:null}]};this.saveItem(e),this.getItems(),this.cleanForm()},cleanForm:function(){this.dialog=!1,this.tradename="",this.municipality=null,this.newDate=new Date(Date.now()-6e4*(new Date).getTimezoneOffset()).toISOString().substr(0,10),this.whoAttendedUs=""},serial:function(){var e=(new Date).getTime(),t="xxxxxxxxxxxx4xxxyxxxxxxxxxxxxxxx".replace(/[xy]/g,(function(t){var n=(e+16*Math.random())%16|0;return e=Math.floor(e/16),("x"==t?n:3&n|8).toString(16)}));return t}})},Z=I,k=n(680),C=n(2371),_=n(7118),B=n(9846),O=n(4484),D=n(7336),V=n(6232),A=n(6428),T=n(2877),E=n(7238),P=n(9762),N=n(5978),j=(0,l.Z)(Z,y,S,!1,null,null,null),F=j.exports;f()(j,{VBtn:k.Z,VCard:C.Z,VCardActions:_.h7,VCardText:_.ZB,VCardTitle:_.EB,VContainer:B.Z,VDatePicker:O.Z,VDialog:D.Z,VForm:V.Z,VIcon:A.Z,VRow:T.Z,VSelect:E.Z,VSpacer:P.Z,VTextField:N.Z});var R=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-app-bar",{staticStyle:{color:"#d5dbdb"},attrs:{elevation:"0",color:"#273746",dense:""}},[n("v-toolbar-title",[e._v("UVIEREPORT v1.3")]),n("v-spacer")],1)},M=[],L={name:"NavBarClient",methods:{deleteAll:function(){window.indexedDB.webkitGetDatabaseNames().onsuccess=function(e){var t=e.target.result;for(var n in t)indexedDB.deleteDatabase(t[n])}}}},z=L,U=n(6986),q=n(7921),$=(0,l.Z)(z,R,M,!1,null,null,null),G=$.exports;f()($,{VAppBar:U.Z,VSpacer:P.Z,VToolbarTitle:q.qW});var J=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[0===e.items.length?n("div",[n("p",{staticClass:"text-center"},[e._v("..Sin Clientes...")])]):n("div",[n("v-virtual-scroll",{staticStyle:{height:"80vh"},attrs:{items:e.items,"item-height":80},scopedSlots:e._u([{key:"default",fn:function(t){var r=t.item;return[n("v-card",{attrs:{elevation:"0",outlined:""}},[n("div",[n("v-list-item",{on:{click:function(t){return e.open(r)}}},[n("v-list-item-avatar",[n("v-avatar",{staticClass:"white--text",attrs:{tile:"",color:"#273746"}},[e._v(" "+e._s(r.initials))])],1),n("v-list-item-content",[n("v-list-item-title",[e._v(" "+e._s(r.tradename))]),n("v-list-item-subtitle",[e._v(e._s(r.municipality))])],1),n("v-list-item-action",{staticStyle:{"font-style":"italic","font-size":"13px"}},[e._v(" "+e._s(r.date)+" "),n("v-menu",{attrs:{bottom:"",left:""},scopedSlots:e._u([{key:"activator",fn:function(t){var r=t.on,o=t.attrs;return[n("v-btn",e._g(e._b({attrs:{icon:""}},"v-btn",o,!1),r),[n("v-icon",{attrs:{color:"#273746"}},[e._v("fact_check ")])],1)]}}],null,!0)},[n("v-list",[n("v-list-item",{on:{click:function(t){return e.remove(r)}}},[n("v-list-item",[e._v(" Borrar ")])],1)],1)],1)],1)],1)],1)])]}}])})],1)])},K=[],H={name:"ScrollClient",data:function(){return{}},computed:(0,a.Z)({},(0,c.rn)({items:function(e){return e.customers.customers}})),created:function(){this.getItems()},methods:(0,a.Z)((0,a.Z)({},(0,c.nv)({getItems:"customers/getAll",deleteItem:"customers/delete"})),{},{open:function(e){console.log(e.id),this.$router.push("section/".concat(e.id))},remove:function(e){this.deleteItem(e),this.getItems()}})},Q=H,W=n(6370),X=n(6816),Y=n(7620),ee=n(3099),te=n(6421),ne=n(6451),re=n(6768),oe=n(5683),ie=(0,l.Z)(Q,J,K,!1,null,null,null),ae=ie.exports;f()(ie,{VAvatar:W.Z,VBtn:k.Z,VCard:C.Z,VIcon:A.Z,VList:X.Z,VListItem:Y.Z,VListItemAction:ee.Z,VListItemAvatar:te.Z,VListItemContent:ne.km,VListItemSubtitle:ne.oZ,VListItemTitle:ne.V9,VMenu:re.Z,VVirtualScroll:oe.Z});var ce={components:{NewClient:F,NavBarClient:G,ScrollClient:ae}},se=ce,ue=n(5533),le=(0,l.Z)(se,x,w,!1,null,null,null),de=le.exports;f()(le,{VCard:C.Z,VSubheader:ue.Z}),r.Z.use(b.Z);var fe,me=[{path:"/",name:"home",component:de},{path:"/about",name:"about",component:function(){return n.e(348).then(n.bind(n,5348))}},{path:"/detail",name:"detail",component:function(){return Promise.all([n.e(748),n.e(942)]).then(n.bind(n,5496))}},{path:"/section/:id",name:"section",component:function(){return Promise.all([n.e(748),n.e(168)]).then(n.bind(n,7812))}}],ve=new b.Z({base:"/uviereportTest/",routes:me}),pe=ve,he=n(6198),ge=(n(5666),n(4747),n(4765),n(6133)),be=n(2751),xe={DB_NAME:"uvrdb",DB_VERSION:1,STORES:["customers"]},we=function(){function e(t,n){(0,ge.Z)(this,e),this.nombre=t,this.edad=n}return(0,be.Z)(e,null,[{key:"getDb",value:function(){var e=(0,he.Z)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise((function(e,t){if(fe)return e(fe);console.log("OPENING DB",fe);var n=window.indexedDB.open(xe.DB_NAME,xe.DB_VERSION);n.onerror=function(e){console.log("Error opening db",e),t("Error")},n.onsuccess=function(t){fe=t.target.result,e(fe)},n.onupgradeneeded=function(e){console.log("onupgradeneeded");var t=e.target.result;xe.STORES.forEach((function(e){t.createObjectStore(e,{keyPath:"id",autoIncrement:!0})}))}})));case 1:case"end":return e.stop()}}),e)})));function t(){return e.apply(this,arguments)}return t}()},{key:"getAll",value:function(){var e=(0,he.Z)(regeneratorRuntime.mark((function e(t){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.getDb();case 2:return n=e.sent,e.abrupt("return",new Promise((function(e){var r=n.transaction([t],"readonly");r.oncomplete=function(){e(i)};var o=r.objectStore(t),i=[];o.openCursor().onsuccess=function(e){var t=e.target.result;t&&(i.push(t.value),t.continue())}})));case 4:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}()},{key:"save",value:function(){var e=(0,he.Z)(regeneratorRuntime.mark((function e(t,n){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.getDb();case 2:return r=e.sent,e.abrupt("return",new Promise((function(e){var o=r.transaction([t],"readwrite");o.oncomplete=function(){e()};var i=o.objectStore(t);i.put(n)})));case 4:case"end":return e.stop()}}),e,this)})));function t(t,n){return e.apply(this,arguments)}return t}()},{key:"delete",value:function(){var t=(0,he.Z)(regeneratorRuntime.mark((function t(n,r){var o;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.getDb();case 2:return o=t.sent,t.abrupt("return",new Promise((function(e){var t=o.transaction([n],"readwrite");t.oncomplete=function(){e()};var i=t.objectStore(n);i.delete(r.id)})));case 4:case"end":return t.stop()}}),t)})));function n(e,n){return t.apply(this,arguments)}return n}()},{key:"search",value:function(){var t=(0,he.Z)(regeneratorRuntime.mark((function t(n,r){var o;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.getDb();case 2:return o=t.sent,t.abrupt("return",new Promise((function(e){var t=o.transaction([n]).objectStore(n).get(r);t.onsuccess=function(n){var r=n.target.result;e(r?t.result:"No existe.")}})));case 4:case"end":return t.stop()}}),t)})));function n(e,n){return t.apply(this,arguments)}return n}()}]),e}(),ye="customers",Se={namespaced:!0,state:{customers:[],findCustomer:{}},getters:{},mutations:{},actions:{getAll:function(e){return(0,he.Z)(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.state.customers=[],t.next=3,we.getAll(ye);case 3:n=t.sent,n.forEach((function(t){e.state.customers.push(t)}));case 5:case"end":return t.stop()}}),t)})))()},save:function(e,t){return(0,he.Z)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,we.save(ye,t);case 2:case"end":return e.stop()}}),e)})))()},delete:function(e,t){return(0,he.Z)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,we["delete"](ye,t);case 2:case"end":return e.stop()}}),e)})))()},search:function(e,t){return(0,he.Z)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,we.search(ye,t);case 2:e.state.findCustomer=n.sent;case 3:case"end":return n.stop()}}),n)})))()}}};r.Z.use(c.ZP);var Ie=new c.ZP.Store({modules:{customers:Se}}),Ze=n(9132),ke=n(6379);r.Z.use(Ze.Z);var Ce=new Ze.Z({theme:{options:{customProperties:!0},themes:{light:{primary:"#273746",secondary:"#424242",accent:"#82B1FF",error:"#FF5252",info:"#2196F3",success:"#4CAF50",warning:"#FFC107"}}},lang:{locales:{es:ke.Z},current:"es"},icons:{iconfont:"md"}});r.Z.config.productionTip=!1,new r.Z({router:pe,store:Ie,vuetify:Ce,render:function(e){return e(h)}}).$mount("#app")}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var i=t[r]={exports:{}};return e[r].call(i.exports,i,i.exports,n),i.exports}n.m=e,function(){var e=[];n.O=function(t,r,o,i){if(!r){var a=1/0;for(l=0;l<e.length;l++){r=e[l][0],o=e[l][1],i=e[l][2];for(var c=!0,s=0;s<r.length;s++)(!1&i||a>=i)&&Object.keys(n.O).every((function(e){return n.O[e](r[s])}))?r.splice(s--,1):(c=!1,i<a&&(a=i));if(c){e.splice(l--,1);var u=o();void 0!==u&&(t=u)}}return t}i=i||0;for(var l=e.length;l>0&&e[l-1][2]>i;l--)e[l]=e[l-1];e[l]=[r,o,i]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){var e,t=Object.getPrototypeOf?function(e){return Object.getPrototypeOf(e)}:function(e){return e.__proto__};n.t=function(r,o){if(1&o&&(r=this(r)),8&o)return r;if("object"===typeof r&&r){if(4&o&&r.__esModule)return r;if(16&o&&"function"===typeof r.then)return r}var i=Object.create(null);n.r(i);var a={};e=e||[null,t({}),t([]),t(t)];for(var c=2&o&&r;"object"==typeof c&&!~e.indexOf(c);c=t(c))Object.getOwnPropertyNames(c).forEach((function(e){a[e]=function(){return r[e]}}));return a["default"]=function(){return r},n.d(i,a),i}}(),function(){n.d=function(e,t){for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}}(),function(){n.f={},n.e=function(e){return Promise.all(Object.keys(n.f).reduce((function(t,r){return n.f[r](e,t),t}),[]))}}(),function(){n.u=function(e){return"js/"+e+"-legacy."+{11:"95df8143",35:"70c416da",120:"e6406902",168:"cfbbf8ed",193:"ed52fe33",199:"164e8e49",203:"a9ab1673",348:"e1388fbd",601:"b309c4c2",748:"f8f59200",856:"4df4fd56",860:"fc5077d7",928:"52a5816c",935:"fa844eb5",942:"e8c009ab",962:"d3aa63c1"}[e]+".js"}}(),function(){n.miniCssF=function(e){return"css/"+e+"."+{11:"30c54482",35:"45d9a737",168:"3e2b6cfe",193:"56191d90",203:"019d3075",601:"45d9a737",860:"b34e1391",942:"c9feedc8",962:"56191d90"}[e]+".css"}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="uviereport:";n.l=function(r,o,i,a){if(e[r])e[r].push(o);else{var c,s;if(void 0!==i)for(var u=document.getElementsByTagName("script"),l=0;l<u.length;l++){var d=u[l];if(d.getAttribute("src")==r||d.getAttribute("data-webpack")==t+i){c=d;break}}c||(s=!0,c=document.createElement("script"),c.charset="utf-8",c.timeout=120,n.nc&&c.setAttribute("nonce",n.nc),c.setAttribute("data-webpack",t+i),c.src=r),e[r]=[o];var f=function(t,n){c.onerror=c.onload=null,clearTimeout(m);var o=e[r];if(delete e[r],c.parentNode&&c.parentNode.removeChild(c),o&&o.forEach((function(e){return e(n)})),t)return t(n)},m=setTimeout(f.bind(null,void 0,{type:"timeout",target:c}),12e4);c.onerror=f.bind(null,c.onerror),c.onload=f.bind(null,c.onload),s&&document.head.appendChild(c)}}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.p="/uviereportTest/"}(),function(){var e=function(e,t,n,r){var o=document.createElement("link");o.rel="stylesheet",o.type="text/css";var i=function(i){if(o.onerror=o.onload=null,"load"===i.type)n();else{var a=i&&("load"===i.type?"missing":i.type),c=i&&i.target&&i.target.href||t,s=new Error("Loading CSS chunk "+e+" failed.\n("+c+")");s.code="CSS_CHUNK_LOAD_FAILED",s.type=a,s.request=c,o.parentNode.removeChild(o),r(s)}};return o.onerror=o.onload=i,o.href=t,document.head.appendChild(o),o},t=function(e,t){for(var n=document.getElementsByTagName("link"),r=0;r<n.length;r++){var o=n[r],i=o.getAttribute("data-href")||o.getAttribute("href");if("stylesheet"===o.rel&&(i===e||i===t))return o}var a=document.getElementsByTagName("style");for(r=0;r<a.length;r++){o=a[r],i=o.getAttribute("data-href");if(i===e||i===t)return o}},r=function(r){return new Promise((function(o,i){var a=n.miniCssF(r),c=n.p+a;if(t(a,c))return o();e(r,c,o,i)}))},o={143:0};n.f.miniCss=function(e,t){var n={11:1,35:1,168:1,193:1,203:1,601:1,860:1,942:1,962:1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=r(e).then((function(){o[e]=0}),(function(t){throw delete o[e],t})))}}(),function(){var e={143:0};n.f.j=function(t,r){var o=n.o(e,t)?e[t]:void 0;if(0!==o)if(o)r.push(o[2]);else{var i=new Promise((function(n,r){o=e[t]=[n,r]}));r.push(o[2]=i);var a=n.p+n.u(t),c=new Error,s=function(r){if(n.o(e,t)&&(o=e[t],0!==o&&(e[t]=void 0),o)){var i=r&&("load"===r.type?"missing":r.type),a=r&&r.target&&r.target.src;c.message="Loading chunk "+t+" failed.\n("+i+": "+a+")",c.name="ChunkLoadError",c.type=i,c.request=a,o[1](c)}};n.l(a,s,"chunk-"+t,t)}},n.O.j=function(t){return 0===e[t]};var t=function(t,r){var o,i,a=r[0],c=r[1],s=r[2],u=0;if(a.some((function(t){return 0!==e[t]}))){for(o in c)n.o(c,o)&&(n.m[o]=c[o]);if(s)var l=s(n)}for(t&&t(r);u<a.length;u++)i=a[u],n.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return n.O(l)},r=self["webpackChunkuviereport"]=self["webpackChunkuviereport"]||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}();var r=n.O(void 0,[998],(function(){return n(2534)}));r=n.O(r)})();
//# sourceMappingURL=app-legacy.76fdeb25.js.map