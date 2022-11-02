(function(){"use strict";var e={6583:function(e,t,n){n(6992),n(8674),n(9601),n(7727);var a=n(144),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-app",[n("v-main",[n("router-view")],1)],1)},o=[],i=n(5082),s=(n(4916),n(5306),n(1539),n(9714),n(629)),c={name:"App",data:function(){return{}},computed:(0,i.Z)({},(0,s.rn)({customers:function(e){return e.customers.customers}})),methods:(0,i.Z)((0,i.Z)({},(0,s.nv)({getItems:"customers/getAll",saveItem:"customers/save",deleteItem:"customers/delete"})),{},{newData:function(){var e={id:this.serial(),name:"Cesar"};this.saveItem(e),this.getItems()},deleteData:function(e){this.deleteItem(e),this.getItems()},serial:function(){var e=(new Date).getTime(),t="xxxxxxxxxxxx4xxxyxxxxxxxxxxxxxxx".replace(/[xy]/g,(function(t){var n=(e+16*Math.random())%16|0;return e=Math.floor(e/16),("x"==t?n:3&n|8).toString(16)}));return t}})},l=c,u=n(1001),d=n(3453),m=n.n(d),p=n(998),f=n(3059),v=(0,u.Z)(l,r,o,!1,null,null,null),b=v.exports;m()(v,{VApp:p.Z,VMain:f.Z});var h=n(5205);(0,h.z)("".concat("/uviereportTest/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});n(8783),n(3948);var g=n(8345),x=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("v-card",{staticClass:"mx-auto overflow-hidden",attrs:{color:"#F2F4F4",height:"100vh"}},[n("nav-bar-client"),n("v-subheader",[e._v(" Mis Clientes")]),n("scroll-client"),n("new-client")],1)],1)},y=[],w=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-row",[n("v-dialog",{attrs:{persistent:"",height:"100vh",width:"80vh"},scopedSlots:e._u([{key:"activator",fn:function(t){var a=t.on,r=t.attrs;return[n("v-btn",e._g(e._b({attrs:{fab:"",dark:"",color:"rgba(39,55,70,1)",fixed:"",right:"",bottom:""}},"v-btn",r,!1),a),[n("v-icon",{attrs:{size:"23",color:"#D5DBDB",dark:""}},[e._v("add")])],1)]}}]),model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[e.dialog?n("v-card",{staticClass:"white--text",attrs:{color:"#F2F4F4"}},[n("v-container",[n("v-card-title",{staticClass:"text-h5",staticStyle:{color:"#273746"}},[e._v(" Mi nuevo cliente ")]),n("v-card-text",{staticStyle:{color:"#273746"}},[e._v("Datos Generales")]),n("v-form",{ref:"form"},[n("v-text-field",{attrs:{outlined:"",label:"Nombre Comercial",required:""},model:{value:e.tradename,callback:function(t){e.tradename=t},expression:"tradename"}}),n("v-select",{attrs:{outlined:"",items:e.municipalityItems,label:"Municipio",required:""},model:{value:e.municipality,callback:function(t){e.municipality=t},expression:"municipality"}}),n("v-dialog",{ref:"dialog",attrs:{"return-value":e.date,persistent:"",width:"290px"},on:{"update:returnValue":function(t){e.date=t},"update:return-value":function(t){e.date=t}},scopedSlots:e._u([{key:"activator",fn:function(t){var a=t.on,r=t.attrs;return[n("v-text-field",e._g(e._b({attrs:{outlined:"",label:"Fecha",readonly:""},model:{value:e.dateSuper,callback:function(t){e.dateSuper=t},expression:"dateSuper"}},"v-text-field",r,!1),a))]}}],null,!1,3675516911),model:{value:e.modal,callback:function(t){e.modal=t},expression:"modal"}},[n("v-date-picker",{attrs:{scrollable:""},model:{value:e.dateSuper,callback:function(t){e.dateSuper=t},expression:"dateSuper"}},[n("v-spacer"),n("v-btn",{attrs:{text:"",color:"primary"},on:{click:function(t){e.modal=!1}}},[e._v(" Cancel ")]),n("v-btn",{attrs:{text:"",color:"primary"},on:{click:function(t){return e.$refs.dialog.save(e.dateSuper)}}},[e._v(" OK ")])],1)],1),n("v-text-field",{attrs:{outlined:"",label:"¿Quien nos atendió?",required:""},model:{value:e.whoAttendedUs,callback:function(t){e.whoAttendedUs=t},expression:"whoAttendedUs"}}),n("v-select",{attrs:{disabled:"",outlined:"",items:e.typeOfSetupItems,label:"Tipo de dictamen",required:""},model:{value:e.typeOfSetup,callback:function(t){e.typeOfSetup=t},expression:"typeOfSetup"}})],1),n("v-card-actions",[n("v-spacer"),n("v-btn",{attrs:{color:"#273746",text:""},on:{click:function(t){e.dialog=!1}}},[e._v(" Cancelar ")]),n("v-btn",{attrs:{outlined:"",color:"#273746"},on:{click:function(t){return e.create()}}},[e._v(" Crear ")])],1)],1)],1):e._e()],1)],1)},I=[],S={name:"NewClient",data:function(){return{date:new Date(Date.now()-6e4*(new Date).getTimezoneOffset()).toISOString().substr(0,10),dateSuper:new Date(Date.now()-6e4*(new Date).getTimezoneOffset()).toISOString().substr(0,10),municipalityItems:["Cozumel","Isla Mujeres","Benito Juárez","Solidaridad","Puerto Morelos","Felipe Carrillo Puerto","José María Morelos","Lázaro Cárdenas","Tulum","Othón P. Blanco","Bacalar"],typeOfSetupItems:["Baja tensión","Media tensión","Tableros","Preterminado"],modal:!1,dialog:!1,tradename:"",municipality:"",newDate:new Date(Date.now()-6e4*(new Date).getTimezoneOffset()).toISOString().substr(0,10),whoAttendedUs:"",typeOfSetup:"Preterminado"}},methods:(0,i.Z)((0,i.Z)({},(0,s.nv)({getItems:"customers/getAll",saveItem:"customers/save",deleteItem:"customers/delete"})),{},{create:function(){var e={tradename:this.tradename,municipality:this.municipality,date:this.date,whoAttendedUs:this.whoAttendedUs,typeOfSetup:this.typeOfSetup,generalNonconformities:"",section:[{icon:!0,tab:"description",content:"DocumentaryInformation"},{tab:"Tableros",content:"BoardList"},{tab:"Contactos",content:"ContactList"},{tab:"Áreas",content:"AreaList"},{tab:"Subestaciones",content:"SubstationsList"},{tab:"Transformadores",content:"TransformersList"},{icon:!0,tab:"notes",content:"GeneralNonconformities"}],boardList:{config:[{content:"ItemBasic",description:"Espacio de trabajo alrededor de equipo eléctrico. ",nom:"110-26",value:null},{content:"ItemBasic",description:"Ubicación con respecto a material fácilmente inflamable. ",nom:"408-17",value:null},{content:"ItemBasic",description:"Señales de advertencia contra arco eléctrico.",nom:"110-16",value:null},{content:"ItemBasic",description:"Identificación de los medios de desconexión.",nom:"110-22",value:null},{content:"ItemBasic",description:"Identificación de campo requerido. a) Directorio del circuito.",nom:"408-4",value:null},{content:"ItemBasic",description:"Aberturas sin utilizar.",nom:"408-7",value:null},{content:"ItemBasic",description:"Paneles.",nom:"408-50",value:null},{content:"ItemBasic",description:"Protección contra sobrecorriente.",nom:"408-36",value:null},{content:"ItemBasic",description:"Puesta a tierra de los tableros de alumbrado y control.",nom:"408-40",value:null},{content:"ItemBasic",description:"Ubicación en el circuito.",nom:"240-21",value:null},{content:"ItemBasic",description:"Conexiones eléctricas. a) Terminales.",nom:"110-14.A",value:null},{content:"ItemThermography",description:"Conexiones eléctricas. c) Limitaciones por temperatura.",nom:"110-14.C",value:null,overallPhoto:"",itemsT:[],model:"Interruptor principal",items:["Interruptor principal","Interruptor derivado","Conductor alimentador","Conductor derivado","Borne","Zapata","Barra colectora","Barra de neutros","Barra de tierras","Gabinete","Empalme, terminal"]},{content:"ItemBasicSelectNote",description:"Integridad de los equipos y de las conexiones.",nom:"110-12",value:null,model:"Preventivo",items:["Preventivo","Correctivo","Cambio total"],note:""},{content:"ItemBasic",description:"Tubo conduit de polietileno.",nom:"364-4",value:null},{content:"ItemBasicSelect",description:"Cables y cordones flexibles.",nom:"400-8",value:null,model:"Cable de uso rudo",items:["Cable de uso rudo","Cable dúplex","Cable de uso rudo y dúplex"]},{content:"ItemBasic",description:"Continuidad mecánica de las canalizaciones y de los cables.",nom:"300-12",value:null},{content:"ItemBasic",description:"Instalación de canalizaciones.",nom:"300-18",value:null},{content:"ItemNote",description:"",nom:"Notas",value:null}],data:[]},documentaryInformation:[{text:"Diagrama Unifilar",content:"ItemBasic",description:"Debe presentar diagrama unifilar de las instalaciones eléctricas.",nom:!1,value:null},{content:"ItemBasic",description:"Debe presentar constancia de mantenimiento del transformador eléctrico. ",nom:"924-14",value:null}],contactList:{config:{description:"Polaridad de las conexiones",nom:"200-11",itemsT:[],model:"Tierra abierta",items:["Tierra abierta","Neutro abierto","Línea abierta","Línea / tierra invertida","Línea / neutro invertido","Correcto"]},data:[]},areaList:{config:{description:"Polaridad de las conexiones",nom:"200-11",value:null,overallPhoto:"",itemsT:[],model:"Tierra abierta",items:[{label:"Se debe retirar cable de uso rudo.",nom:"408",value:!1},{label:"Se debe retirar cable dúplex.",nom:"408",value:!1},{label:"Se debe fijar contacto adecuadamente.",nom:"110-12",value:!1},{label:"Se debe retirar canaleta de datos e instalar tuberías eléctricas de pvc.",nom:"110-2",value:!1},{label:"Se debe colocar tapas a registros eléctricos.",nom:"314-28.C)",value:!1},{label:"Se debe reemplazar contactos dañados.",nom:"110-12",value:!1},{label:"Se debe instalar tuberias electricas de pvc a conductores expuestos.",nom:"300-18",value:!1},{label:"Se debe colocar tapas a apagadores electricos.",nom:"300-31",value:!1},{label:"Se debe reemplazar tubo poliflex por tubería eléctrica de pvc.",nom:"364-4",value:!1},{label:"Se debe asegurar continuidad mecánica de canalizaciones.",nom:"300-12",value:!1}],note:""},data:[]},substationsList:{config:[{content:"ItemBasic",description:"Resguardos de locales y espacios.Los locales y espacios en que se instalen subestaciones deben tener restringido y resguardado su acceso; por medio de cercas de malla, muros o bien en locales especiales para evitar la entrada de personas no calificadas.",nom:"924-3",value:null},{content:"ItemBasic",description:"Condiciones de los locales y espacios. b) No deben emplearse como almacenes, talleres o para otra actividad que no esté relacionada con el funcionamiento y operación del equipo.",nom:"924-4.B",value:null},{content:"ItemBasic",description:"Condiciones de los locales y espacios. d) Deben tener ventilación adecuada para que el equipo opere a su temperatura y para minimizar los contaminantes en el aire bajo cualquier condición de operación.",nom:"924-4.D",value:null},{content:"ItemBasic",description:"Condiciones de los locales y espacios. e) Deben mantenerse secos.",nom:"924-4.E",value:null},{content:"ItemBasic",description:"Instalación de alumbrado. b) Circuito independiente. En subestaciones, el circuito para alumbrado y contactos debe alimentar exclusivamente estas cargas y tener protección adecuada contra sobrecorriente independiente de los otros circuitos.",nom:"924-5.B",value:null},{content:"ItemBasic",description:"Instalación de alumbrado. e) Alumbrado de emergencia. Debe colocarse en el local, cuando menos, una lámpara para alumbrado de emergencia en cada puerta de salida del local.",nom:"924-5.E",value:null},{content:"ItemBasic",description:"Pisos, barreras y escaleras.a) Pisos. En las subestaciones los pisos deben ser planos, firmes y con superficie antiderrapante, se debe evitar que haya obstáculos en los mismos. Los huecos, registros y trincheras deben tener tapas adecuadas.",nom:"924-6.A",value:null},{content:"ItemBasic",description:"Accesos y salidas.Los locales y cada espacio de trabajo deben tener un acceso y salida libre de obstáculos.",nom:"924-7.1",value:null},{content:"ItemBasic",description:"Accesos y salidas. La puerta de acceso y salida de un local debe abrir hacia afuera y estar provista de un seguro que permita su apertura, desde adentro.",nom:"924-7.2",value:null},{content:"ItemBasic",description:"Accesos y salidas. Se permite el uso de puertas corredizas, siempre que éstas tengan claramente marcado su sentido de apertura y se mantengan abiertas mientras haya personas dentro del local.",nom:"924-7.3",value:null},{content:"ItemBasic",description:'Accesos y salidas. La puerta debe tener fijo en la parte exterior y en forma completamente visible, un aviso con la leyenda: "PELIGRO ALTA TENSIÓN"',nom:"924-7.4",value:null},{content:"ItemBasic",description:"Protección contra incendios. a) Extintores. Deben colocarse extintores portátiles, tantos como sean necesarios en lugares visibles, de fácil acceso, libres de obstáculos y debidamente señalizados, situando dos, cuando menos, a una distancia que no exceda de 15 metros de la entrada de las subestaciones.",nom:"924-8",value:null},{content:"ItemBasic",description:"Partes con movimientos repentinos. Todas las partes que se mueven repentinamente y que puedan lastimar a personas que se encuentren próximas, deben protegerse por medio de resguardos.",nom:"924-15",value:null},{content:"ItemBasic",description:"Tarimas y tapetes aislantes. En subestaciones de tipo interior, las tarimas y tapetes deben instalarse cubriendo la parte frontal de los equipos de accionamiento manual, que operen a más de 1000 volts entre conductores; su colocación no debe presentar obstáculo en la apertura de las puertas de los gabinetes.",nom:"924-24",value:null}],data:[]},transformersList:{config:[{content:"ItemThermography",description:"",nom:"TEMPERATURA",value:null,overallPhoto:"",itemsT:[],model:"",items:[]},{content:"ItemThermographicPhotos",description:"",nom:"FOTOS TERMOGRAFICAS",value:null,overallPhoto:"",itemsT:[],model:"",items:[]},{content:"ItemOilLeaks",description:"",nom:"FUGAS DE ACEITE",value:null,overallPhoto:"",itemsT:[],model:"",items:[]},{content:"ItemBasic",description:"Interconexión de X0 a tierra.",nom:"250-36",value:null},{content:"ItemBasicDate",description:"Instalación y mantenimiento del equipo eléctrico.",nom:"924-14",value:null,date:null},{content:"ItemBasic",description:"Identificación del equipo eléctrico.",nom:"924-16",value:null},{content:"ItemBasic",description:"Marcado.",nom:"450-11",value:null},{content:"ItemBasic",description:"Accesibilidad.",nom:"450-13",value:null}],data:[]}};this.saveItem(e),this.getItems(),this.cleanForm()},cleanForm:function(){this.dialog=!1,this.tradename="",this.municipality=null,this.newDate=new Date(Date.now()-6e4*(new Date).getTimezoneOffset()).toISOString().substr(0,10),this.whoAttendedUs=""},serial:function(){var e=(new Date).getTime(),t="xxxxxxxxxxxx4xxxyxxxxxxxxxxxxxxx".replace(/[xy]/g,(function(t){var n=(e+16*Math.random())%16|0;return e=Math.floor(e/16),("x"==t?n:3&n|8).toString(16)}));return t}})},B=S,C=n(6190),Z=n(4145),k=n(4886),_=n(2118),T=n(1030),A=n(9930),D=n(5125),O=n(4324),E=n(1713),P=n(1399),V=n(3687),L=n(7808),N=(0,u.Z)(B,w,I,!1,null,null,null),j=N.exports;m()(N,{VBtn:C.Z,VCard:Z.Z,VCardActions:k.h7,VCardText:k.ZB,VCardTitle:k.EB,VContainer:_.Z,VDatePicker:T.Z,VDialog:A.Z,VForm:D.Z,VIcon:O.Z,VRow:E.Z,VSelect:P.Z,VSpacer:V.Z,VTextField:L.Z});var R=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-app-bar",{staticStyle:{color:"#d5dbdb"},attrs:{elevation:"0",color:"#273746",dense:""}},[n("v-toolbar-title",[e._v("UVIEREPORT v1.6.1")]),n("v-spacer")],1)},F=[],q={name:"NavBarClient",methods:{deleteAll:function(){window.indexedDB.webkitGetDatabaseNames().onsuccess=function(e){var t=e.target.result;for(var n in t)indexedDB.deleteDatabase(t[n])}}}},M=q,z=n(3497),U=n(7953),G=(0,u.Z)(M,R,F,!1,null,null,null),$=G.exports;m()(G,{VAppBar:z.Z,VSpacer:V.Z,VToolbarTitle:U.qW});var J=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[0===e.items.length?n("div",[n("p",{staticClass:"text-center"},[e._v("..Sin Clientes...")])]):n("div",[n("v-virtual-scroll",{staticStyle:{height:"80vh"},attrs:{items:e.items,"item-height":80},scopedSlots:e._u([{key:"default",fn:function(t){var a=t.item;return[n("v-card",{attrs:{elevation:"0",outlined:""}},[n("div",[n("v-list-item",{on:{click:function(t){return e.open(a)}}},[n("v-list-item-avatar",[n("v-avatar",{staticClass:"white--text",attrs:{tile:"",color:"#273746"}},[e._v(" "+e._s(a.initials))])],1),n("v-list-item-content",[n("v-list-item-title",[e._v(" "+e._s(a.tradename))]),n("v-list-item-subtitle",[e._v(e._s(a.municipality))])],1),n("v-list-item-action",{staticStyle:{"font-style":"italic","font-size":"13px"}},[e._v(" "+e._s(a.date)+" "),n("v-menu",{attrs:{bottom:"",left:""},scopedSlots:e._u([{key:"activator",fn:function(t){var a=t.on,r=t.attrs;return[n("v-btn",e._g(e._b({attrs:{icon:""}},"v-btn",r,!1),a),[n("v-icon",{attrs:{color:"#273746"}},[e._v("fact_check ")])],1)]}}],null,!0)},[n("v-list",[n("v-list-item",{on:{click:function(t){return e.remove(a)}}},[n("v-list-item",[e._v(" Borrar ")])],1)],1)],1)],1)],1)],1)])]}}])})],1)])},K=[],H={name:"ScrollClient",data:function(){return{}},computed:(0,i.Z)({},(0,s.rn)({items:function(e){return e.customers.customers}})),created:function(){this.getItems()},methods:(0,i.Z)((0,i.Z)({},(0,s.nv)({getItems:"customers/getAll",deleteItem:"customers/delete"})),{},{open:function(e){console.log(e.id),this.$router.push("section/".concat(e.id))},remove:function(e){this.deleteItem(e),this.getItems()}})},Q=H,W=n(3423),X=n(5808),Y=n(4525),ee=n(5187),te=n(6900),ne=n(8251),ae=n(4528),re=n(4924),oe=(0,u.Z)(Q,J,K,!1,null,null,null),ie=oe.exports;m()(oe,{VAvatar:W.Z,VBtn:C.Z,VCard:Z.Z,VIcon:O.Z,VList:X.Z,VListItem:Y.Z,VListItemAction:ee.Z,VListItemAvatar:te.Z,VListItemContent:ne.km,VListItemSubtitle:ne.oZ,VListItemTitle:ne.V9,VMenu:ae.Z,VVirtualScroll:re.Z});var se={components:{NewClient:j,NavBarClient:$,ScrollClient:ie}},ce=se,le=n(2540),ue=(0,u.Z)(ce,x,y,!1,null,null,null),de=ue.exports;m()(ue,{VCard:Z.Z,VSubheader:le.Z}),a.Z.use(g.Z);var me,pe=[{path:"/",name:"home",component:de},{path:"/about",name:"about",component:function(){return n.e(30).then(n.bind(n,9030))}},{path:"/detail",name:"detail",component:function(){return Promise.all([n.e(731),n.e(922)]).then(n.bind(n,6139))}},{path:"/section/:id",name:"section",component:function(){return Promise.all([n.e(731),n.e(376)]).then(n.bind(n,8431))}}],fe=new g.Z({base:"/uviereportTest/",routes:pe}),ve=fe,be=n(8534),he=(n(5666),n(4747),n(4765),n(3087)),ge=n(2833),xe={DB_NAME:"uvrdb",DB_VERSION:1,STORES:["customers"]},ye=function(){function e(t,n){(0,he.Z)(this,e),this.nombre=t,this.edad=n}return(0,ge.Z)(e,null,[{key:"getDb",value:function(){var e=(0,be.Z)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise((function(e,t){if(me)return e(me);console.log("OPENING DB",me);var n=window.indexedDB.open(xe.DB_NAME,xe.DB_VERSION);n.onerror=function(e){console.log("Error opening db",e),t("Error")},n.onsuccess=function(t){me=t.target.result,e(me)},n.onupgradeneeded=function(e){console.log("onupgradeneeded");var t=e.target.result;xe.STORES.forEach((function(e){t.createObjectStore(e,{keyPath:"id",autoIncrement:!0})}))}})));case 1:case"end":return e.stop()}}),e)})));function t(){return e.apply(this,arguments)}return t}()},{key:"getAll",value:function(){var e=(0,be.Z)(regeneratorRuntime.mark((function e(t){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.getDb();case 2:return n=e.sent,e.abrupt("return",new Promise((function(e){var a=n.transaction([t],"readonly");a.oncomplete=function(){e(o)};var r=a.objectStore(t),o=[];r.openCursor().onsuccess=function(e){var t=e.target.result;t&&(o.push(t.value),t.continue())}})));case 4:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}()},{key:"save",value:function(){var e=(0,be.Z)(regeneratorRuntime.mark((function e(t,n){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.getDb();case 2:return a=e.sent,e.abrupt("return",new Promise((function(e){var r=a.transaction([t],"readwrite");r.oncomplete=function(){e()};var o=r.objectStore(t);o.put(n)})));case 4:case"end":return e.stop()}}),e,this)})));function t(t,n){return e.apply(this,arguments)}return t}()},{key:"delete",value:function(){var t=(0,be.Z)(regeneratorRuntime.mark((function t(n,a){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.getDb();case 2:return r=t.sent,t.abrupt("return",new Promise((function(e){var t=r.transaction([n],"readwrite");t.oncomplete=function(){e()};var o=t.objectStore(n);o.delete(a.id)})));case 4:case"end":return t.stop()}}),t)})));function n(e,n){return t.apply(this,arguments)}return n}()},{key:"search",value:function(){var t=(0,be.Z)(regeneratorRuntime.mark((function t(n,a){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.getDb();case 2:return r=t.sent,t.abrupt("return",new Promise((function(e){var t=r.transaction([n]).objectStore(n).get(a);t.onsuccess=function(n){var a=n.target.result;e(a?t.result:"No existe.")}})));case 4:case"end":return t.stop()}}),t)})));function n(e,n){return t.apply(this,arguments)}return n}()}]),e}(),we="customers",Ie={namespaced:!0,state:{customers:[],findCustomer:{}},getters:{},mutations:{},actions:{getAll:function(e){return(0,be.Z)(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.state.customers=[],t.next=3,ye.getAll(we);case 3:n=t.sent,n.forEach((function(t){e.state.customers.push(t)}));case 5:case"end":return t.stop()}}),t)})))()},save:function(e,t){return(0,be.Z)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,ye.save(we,t);case 2:case"end":return e.stop()}}),e)})))()},delete:function(e,t){return(0,be.Z)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,ye["delete"](we,t);case 2:case"end":return e.stop()}}),e)})))()},search:function(e,t){return(0,be.Z)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,ye.search(we,t);case 2:e.state.findCustomer=n.sent;case 3:case"end":return n.stop()}}),n)})))()}}};a.Z.use(s.ZP);var Se=new s.ZP.Store({modules:{customers:Ie}}),Be=n(1705),Ce=n(6808);a.Z.use(Be.Z);var Ze=new Be.Z({theme:{options:{customProperties:!0},themes:{light:{primary:"#273746",secondary:"#424242",accent:"#82B1FF",error:"#FF5252",info:"#2196F3",success:"#4CAF50",warning:"#FFC107"}}},lang:{locales:{es:Ce.Z},current:"es"},icons:{iconfont:"md"}});a.Z.config.productionTip=!1,new a.Z({router:ve,store:Se,vuetify:Ze,render:function(e){return e(b)}}).$mount("#app")}},t={};function n(a){var r=t[a];if(void 0!==r)return r.exports;var o=t[a]={exports:{}};return e[a].call(o.exports,o,o.exports,n),o.exports}n.m=e,function(){var e=[];n.O=function(t,a,r,o){if(!a){var i=1/0;for(u=0;u<e.length;u++){a=e[u][0],r=e[u][1],o=e[u][2];for(var s=!0,c=0;c<a.length;c++)(!1&o||i>=o)&&Object.keys(n.O).every((function(e){return n.O[e](a[c])}))?a.splice(c--,1):(s=!1,o<i&&(i=o));if(s){e.splice(u--,1);var l=r();void 0!==l&&(t=l)}}return t}o=o||0;for(var u=e.length;u>0&&e[u-1][2]>o;u--)e[u]=e[u-1];e[u]=[a,r,o]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){var e,t=Object.getPrototypeOf?function(e){return Object.getPrototypeOf(e)}:function(e){return e.__proto__};n.t=function(a,r){if(1&r&&(a=this(a)),8&r)return a;if("object"===typeof a&&a){if(4&r&&a.__esModule)return a;if(16&r&&"function"===typeof a.then)return a}var o=Object.create(null);n.r(o);var i={};e=e||[null,t({}),t([]),t(t)];for(var s=2&r&&a;"object"==typeof s&&!~e.indexOf(s);s=t(s))Object.getOwnPropertyNames(s).forEach((function(e){i[e]=function(){return a[e]}}));return i["default"]=function(){return a},n.d(o,i),o}}(),function(){n.d=function(e,t){for(var a in t)n.o(t,a)&&!n.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})}}(),function(){n.f={},n.e=function(e){return Promise.all(Object.keys(n.f).reduce((function(t,a){return n.f[a](e,t),t}),[]))}}(),function(){n.u=function(e){return"js/"+e+"-legacy."+{5:"aba8616e",30:"16617607",109:"f536dd6a",120:"e6406902",191:"f076d4ff",248:"b49fa85d",376:"d5489ad7",378:"c3a4cbab",445:"b86146d8",497:"aa15c3a8",517:"a8e93b86",548:"1b8c29a2",549:"bcb59c80",563:"5da67a6b",611:"ec48a6f4",615:"b4416e1b",639:"74d42163",643:"71a5eeab",724:"a9c70a1d",731:"6e970692",856:"4df4fd56",864:"82e99ae1",921:"be663b13",922:"6b092e00",935:"9f2e416a",956:"e2c01020"}[e]+".js"}}(),function(){n.miniCssF=function(e){return"css/"+e+"."+{109:"b34e1391",248:"6382eff7",376:"3e2b6cfe",378:"af3a4bc6",445:"019d3075",497:"1e1f83d2",517:"60743d7c",548:"b4afca72",549:"af3a4bc6",563:"94810c30",611:"45719ede",615:"019d3075",639:"56191d90",643:"0a9f3fb1",724:"56191d90",864:"91f47dc2",921:"bbf6a973",922:"c9feedc8",956:"45d9a737"}[e]+".css"}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="uviereport:";n.l=function(a,r,o,i){if(e[a])e[a].push(r);else{var s,c;if(void 0!==o)for(var l=document.getElementsByTagName("script"),u=0;u<l.length;u++){var d=l[u];if(d.getAttribute("src")==a||d.getAttribute("data-webpack")==t+o){s=d;break}}s||(c=!0,s=document.createElement("script"),s.charset="utf-8",s.timeout=120,n.nc&&s.setAttribute("nonce",n.nc),s.setAttribute("data-webpack",t+o),s.src=a),e[a]=[r];var m=function(t,n){s.onerror=s.onload=null,clearTimeout(p);var r=e[a];if(delete e[a],s.parentNode&&s.parentNode.removeChild(s),r&&r.forEach((function(e){return e(n)})),t)return t(n)},p=setTimeout(m.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=m.bind(null,s.onerror),s.onload=m.bind(null,s.onload),c&&document.head.appendChild(s)}}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.p="/uviereportTest/"}(),function(){var e=function(e,t,n,a){var r=document.createElement("link");r.rel="stylesheet",r.type="text/css";var o=function(o){if(r.onerror=r.onload=null,"load"===o.type)n();else{var i=o&&("load"===o.type?"missing":o.type),s=o&&o.target&&o.target.href||t,c=new Error("Loading CSS chunk "+e+" failed.\n("+s+")");c.code="CSS_CHUNK_LOAD_FAILED",c.type=i,c.request=s,r.parentNode.removeChild(r),a(c)}};return r.onerror=r.onload=o,r.href=t,document.head.appendChild(r),r},t=function(e,t){for(var n=document.getElementsByTagName("link"),a=0;a<n.length;a++){var r=n[a],o=r.getAttribute("data-href")||r.getAttribute("href");if("stylesheet"===r.rel&&(o===e||o===t))return r}var i=document.getElementsByTagName("style");for(a=0;a<i.length;a++){r=i[a],o=r.getAttribute("data-href");if(o===e||o===t)return r}},a=function(a){return new Promise((function(r,o){var i=n.miniCssF(a),s=n.p+i;if(t(i,s))return r();e(a,s,r,o)}))},r={143:0};n.f.miniCss=function(e,t){var n={109:1,248:1,376:1,378:1,445:1,497:1,517:1,548:1,549:1,563:1,611:1,615:1,639:1,643:1,724:1,864:1,921:1,922:1,956:1};r[e]?t.push(r[e]):0!==r[e]&&n[e]&&t.push(r[e]=a(e).then((function(){r[e]=0}),(function(t){throw delete r[e],t})))}}(),function(){var e={143:0};n.f.j=function(t,a){var r=n.o(e,t)?e[t]:void 0;if(0!==r)if(r)a.push(r[2]);else{var o=new Promise((function(n,a){r=e[t]=[n,a]}));a.push(r[2]=o);var i=n.p+n.u(t),s=new Error,c=function(a){if(n.o(e,t)&&(r=e[t],0!==r&&(e[t]=void 0),r)){var o=a&&("load"===a.type?"missing":a.type),i=a&&a.target&&a.target.src;s.message="Loading chunk "+t+" failed.\n("+o+": "+i+")",s.name="ChunkLoadError",s.type=o,s.request=i,r[1](s)}};n.l(i,c,"chunk-"+t,t)}},n.O.j=function(t){return 0===e[t]};var t=function(t,a){var r,o,i=a[0],s=a[1],c=a[2],l=0;if(i.some((function(t){return 0!==e[t]}))){for(r in s)n.o(s,r)&&(n.m[r]=s[r]);if(c)var u=c(n)}for(t&&t(a);l<i.length;l++)o=i[l],n.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return n.O(u)},a=self["webpackChunkuviereport"]=self["webpackChunkuviereport"]||[];a.forEach(t.bind(null,0)),a.push=t.bind(null,a.push.bind(a))}();var a=n.O(void 0,[998],(function(){return n(6583)}));a=n.O(a)})();
//# sourceMappingURL=app-legacy.de523175.js.map