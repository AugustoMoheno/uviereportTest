(function(){"use strict";var e={8232:function(e,t,n){n(6992),n(8674),n(9601),n(7727);var r=n(144),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-app",[n("v-main",[n("router-view")],1)],1)},o=[],i=n(5082),s=(n(4916),n(5306),n(1539),n(9714),n(629)),c={name:"App",data:function(){return{}},computed:(0,i.Z)({},(0,s.rn)({customers:function(e){return e.customers.customers}})),methods:(0,i.Z)((0,i.Z)({},(0,s.nv)({getItems:"customers/getAll",saveItem:"customers/save",deleteItem:"customers/delete"})),{},{newData:function(){var e={id:this.serial(),name:"Cesar"};this.saveItem(e),this.getItems()},deleteData:function(e){this.deleteItem(e),this.getItems()},serial:function(){var e=(new Date).getTime(),t="xxxxxxxxxxxx4xxxyxxxxxxxxxxxxxxx".replace(/[xy]/g,(function(t){var n=(e+16*Math.random())%16|0;return e=Math.floor(e/16),("x"==t?n:3&n|8).toString(16)}));return t}})},l=c,u=n(1001),d=n(3453),m=n.n(d),p=n(998),v=n(3059),f=(0,u.Z)(l,a,o,!1,null,null,null),b=f.exports;m()(f,{VApp:p.Z,VMain:v.Z});var h=n(5205);(0,h.z)("".concat("/uviereportTest/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});n(8783),n(3948);var g=n(8345),x=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("v-card",{staticClass:"mx-auto overflow-hidden",attrs:{color:"#F2F4F4",height:"100vh"}},[n("nav-bar-client"),n("v-subheader",[e._v(" Mis Clientes")]),n("scroll-client"),n("new-client")],1)],1)},y=[],I=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-row",[n("v-dialog",{attrs:{persistent:"",height:"100vh",width:"80vh"},scopedSlots:e._u([{key:"activator",fn:function(t){var r=t.on,a=t.attrs;return[n("v-btn",e._g(e._b({attrs:{fab:"",dark:"",color:"rgba(39,55,70,1)",fixed:"",right:"",bottom:""}},"v-btn",a,!1),r),[n("v-icon",{attrs:{size:"23",color:"#D5DBDB",dark:""}},[e._v("add")])],1)]}}]),model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[e.dialog?n("v-card",{staticClass:"white--text",attrs:{color:"#F2F4F4"}},[n("v-container",[n("v-card-title",{staticClass:"text-h5",staticStyle:{color:"#273746"}},[e._v(" Mi nuevo cliente ")]),n("v-card-text",{staticStyle:{color:"#273746"}},[e._v("Datos Generales")]),n("v-form",{ref:"form"},[n("v-text-field",{attrs:{outlined:"",label:"Nombre Comercial",required:""},model:{value:e.tradename,callback:function(t){e.tradename=t},expression:"tradename"}}),n("v-select",{attrs:{outlined:"",items:e.municipalityItems,label:"Municipio",required:""},model:{value:e.municipality,callback:function(t){e.municipality=t},expression:"municipality"}}),n("v-dialog",{ref:"dialog",attrs:{"return-value":e.date,persistent:"",width:"290px"},on:{"update:returnValue":function(t){e.date=t},"update:return-value":function(t){e.date=t}},scopedSlots:e._u([{key:"activator",fn:function(t){var r=t.on,a=t.attrs;return[n("v-text-field",e._g(e._b({attrs:{outlined:"",label:"Fecha",readonly:""},model:{value:e.dateSuper,callback:function(t){e.dateSuper=t},expression:"dateSuper"}},"v-text-field",a,!1),r))]}}],null,!1,3675516911),model:{value:e.modal,callback:function(t){e.modal=t},expression:"modal"}},[n("v-date-picker",{attrs:{scrollable:""},model:{value:e.dateSuper,callback:function(t){e.dateSuper=t},expression:"dateSuper"}},[n("v-spacer"),n("v-btn",{attrs:{text:"",color:"primary"},on:{click:function(t){e.modal=!1}}},[e._v(" Cancel ")]),n("v-btn",{attrs:{text:"",color:"primary"},on:{click:function(t){return e.$refs.dialog.save(e.dateSuper)}}},[e._v(" OK ")])],1)],1),n("v-text-field",{attrs:{outlined:"",label:"¿Quien nos atendió?",required:""},model:{value:e.whoAttendedUs,callback:function(t){e.whoAttendedUs=t},expression:"whoAttendedUs"}}),n("v-text-field",{attrs:{outlined:"",label:"Versión",required:""},model:{value:e.version,callback:function(t){e.version=t},expression:"version"}}),n("v-select",{attrs:{disabled:"",outlined:"",items:e.typeOfSetupItems,label:"Tipo de dictamen",required:""},model:{value:e.typeOfSetup,callback:function(t){e.typeOfSetup=t},expression:"typeOfSetup"}})],1),n("v-card-actions",[n("v-spacer"),n("v-btn",{attrs:{color:"#273746",text:""},on:{click:function(t){e.dialog=!1}}},[e._v(" Cancelar ")]),n("v-btn",{attrs:{outlined:"",color:"#273746"},on:{click:function(t){return e.create()}}},[e._v(" Crear ")])],1)],1)],1):e._e()],1)],1)},w=[],S={name:"NewClient",data:function(){return{date:new Date(Date.now()-6e4*(new Date).getTimezoneOffset()).toISOString().substr(0,10),dateSuper:new Date(Date.now()-6e4*(new Date).getTimezoneOffset()).toISOString().substr(0,10),municipalityItems:["Cozumel","Isla Mujeres","Benito Juárez","Solidaridad","Puerto Morelos","Felipe Carrillo Puerto","José María Morelos","Lázaro Cárdenas","Tulum","Othón P. Blanco","Bacalar"],typeOfSetupItems:["Baja tensión","Media tensión","Tableros","Preterminado"],modal:!1,dialog:!1,tradename:"",municipality:"",newDate:new Date(Date.now()-6e4*(new Date).getTimezoneOffset()).toISOString().substr(0,10),whoAttendedUs:"",version:"",typeOfSetup:"Preterminado"}},watch:{tradename:function(e){this.tradename=e.toUpperCase()},whoAttendedUs:function(e){this.whoAttendedUs=e.toUpperCase()},version:function(e){this.version=e.toUpperCase()}},methods:(0,i.Z)((0,i.Z)({},(0,s.nv)({getItems:"customers/getAll",saveItem:"customers/save",deleteItem:"customers/delete"})),{},{create:function(){var e={tradename:this.tradename,municipality:this.municipality,date:this.date,whoAttendedUs:this.whoAttendedUs,version:this.version,typeOfSetup:this.typeOfSetup,generalNonconformities:"",section:[{icon:!0,tab:"description",content:"DocumentaryInformation"},{tab:"Subestaciones",content:"SubstationsList"},{tab:"Transformadores",content:"TransformersList"},{tab:"Tableros",content:"BoardList"},{tab:"Áreas",content:"AreaList"},{tab:"Contactos",content:"ContactList"},{icon:!0,tab:"notes",content:"GeneralNonconformities"}],boardList:{config:[{content:"ItemBasic",description:"Espacio de trabajo alrededor de equipo eléctrico. ",nom:"110-26",value:null},{content:"ItemBasic",description:"Ubicación con respecto a material fácilmente inflamable. ",nom:"408-17",value:null},{content:"ItemBasic",description:"Señales de advertencia contra arco eléctrico.",nom:"110-16",value:null},{content:"ItemBasic",description:"Identificación de los medios de desconexión.",nom:"110-22",value:null},{content:"ItemBasic",description:"Identificación de campo requerido. a) Directorio del circuito.",nom:"408-4",value:null},{content:"ItemBasic",description:"Aberturas sin utilizar.",nom:"408-7",value:null},{content:"ItemBasic",description:"Paneles.",nom:"408-50",value:null},{content:"ItemBasic",description:"Protección contra sobrecorriente.",nom:"408-36",value:null},{content:"ItemBasic",description:"Puesta a tierra de los tableros de alumbrado y control.",nom:"408-40",value:null},{content:"ItemBasic",description:"Ubicación en el circuito.",nom:"240-21",value:null},{content:"ItemBasic",description:"Conexiones eléctricas. a) Terminales.",nom:"110-14.A",value:null},{content:"ItemThermography",description:"Conexiones eléctricas. c) Limitaciones por temperatura.",nom:"110-14.C",value:null,overallPhoto:"",itemsT:[],model:"Interruptor principal",items:["Interruptor principal","Interruptor derivado","Conductor alimentador","Conductor derivado","Borne","Zapata","Barra colectora","Barra de neutros","Barra de tierras","Gabinete","Empalme, terminal"]},{content:"ItemBasicSelectNote",description:"Integridad de los equipos y de las conexiones.",nom:"110-12",value:null,model:"Preventivo",items:["Preventivo","Correctivo","Cambio total"],note:""},{content:"ItemBasic",description:"Tubo conduit de polietileno.",nom:"364-4",value:null},{content:"ItemBasicSelect",description:"Cables y cordones flexibles.",nom:"400-8",value:null,model:"Cable de uso rudo",items:["Cable de uso rudo","Cable dúplex","Cable de uso rudo y dúplex"]},{content:"ItemBasic",description:"Continuidad mecánica de las canalizaciones y de los cables.",nom:"300-12",value:null},{content:"ItemBasic",description:"Instalación de canalizaciones.",nom:"300-18",value:null},{content:"ItemNote",description:"",nom:"Notas",value:null}],data:[]},documentaryInformation:[{text:"Diagrama Unifilar",content:"ItemBasic",description:"Debe presentar diagrama unifilar de las instalaciones eléctricas.",nom:"4.2.13",value:null},{content:"ItemBasic",description:"Debe presentar constancia de mantenimiento del transformador eléctrico. ",nom:"924-14",value:null}],contactList:{config:{description:"Polaridad de las conexiones",nom:"200-11",itemsT:[],model:"Tierra abierta",items:["Tierra abierta","Neutro abierto","Línea abierta","Línea / tierra invertida","Línea / neutro invertido","Correcto"]},data:[]},areaList:{config:{description:"Polaridad de las conexiones",nom:"200-11",value:null,overallPhoto:"",itemsT:[],model:"Tierra abierta",items:[{label:"Se debe retirar cable de uso rudo.",nom:"408",value:!1},{label:"Se debe retirar cable dúplex.",nom:"408",value:!1},{label:"Se debe fijar contacto adecuadamente.",nom:"110-12",value:!1},{label:"Se debe retirar canaleta de datos e instalar tuberías eléctricas de pvc.",nom:"110-2",value:!1},{label:"Se debe colocar tapas a registros eléctricos.",nom:"314-28.C)",value:!1},{label:"Se debe reemplazar contactos dañados.",nom:"110-12",value:!1},{label:"Se debe instalar tuberias electricas de pvc a conductores expuestos.",nom:"300-18",value:!1},{label:"Se debe colocar tapas a apagadores electricos.",nom:"300-31",value:!1},{label:"Se debe reemplazar tubo poliflex por tubería eléctrica de pvc.",nom:"364-4",value:!1},{label:"Se debe asegurar continuidad mecánica de canalizaciones.",nom:"300-12",value:!1}],note:""},data:[]},substationsList:{config:[{content:"ItemBasic",description:"Resguardos de locales y espacios.Los locales y espacios en que se instalen subestaciones deben tener restringido y resguardado su acceso; por medio de cercas de malla, muros o bien en locales especiales para evitar la entrada de personas no calificadas.",nom:"924-3",value:null},{content:"ItemBasic",description:"Condiciones de los locales y espacios. b) No deben emplearse como almacenes, talleres o para otra actividad que no esté relacionada con el funcionamiento y operación del equipo.",nom:"924-4.B",value:null},{content:"ItemBasic",description:"Condiciones de los locales y espacios. d) Deben tener ventilación adecuada para que el equipo opere a su temperatura y para minimizar los contaminantes en el aire bajo cualquier condición de operación.",nom:"924-4.D",value:null},{content:"ItemBasic",description:"Condiciones de los locales y espacios. e) Deben mantenerse secos.",nom:"924-4.E",value:null},{content:"ItemBasic",description:"Instalación de alumbrado. b) Circuito independiente. En subestaciones, el circuito para alumbrado y contactos debe alimentar exclusivamente estas cargas y tener protección adecuada contra sobrecorriente independiente de los otros circuitos.",nom:"924-5.B",value:null},{content:"ItemBasic",description:"Instalación de alumbrado. e) Alumbrado de emergencia. Debe colocarse en el local, cuando menos, una lámpara para alumbrado de emergencia en cada puerta de salida del local.",nom:"924-5.E",value:null},{content:"ItemBasic",description:"Pisos, barreras y escaleras.a) Pisos. En las subestaciones los pisos deben ser planos, firmes y con superficie antiderrapante, se debe evitar que haya obstáculos en los mismos. Los huecos, registros y trincheras deben tener tapas adecuadas.",nom:"924-6.A",value:null},{content:"ItemBasic",description:"Accesos y salidas.Los locales y cada espacio de trabajo deben tener un acceso y salida libre de obstáculos.",nom:"924-7.1",value:null},{content:"ItemBasic",description:"Accesos y salidas. La puerta de acceso y salida de un local debe abrir hacia afuera y estar provista de un seguro que permita su apertura, desde adentro.",nom:"924-7.2",value:null},{content:"ItemBasic",description:"Accesos y salidas. Se permite el uso de puertas corredizas, siempre que éstas tengan claramente marcado su sentido de apertura y se mantengan abiertas mientras haya personas dentro del local.",nom:"924-7.3",value:null},{content:"ItemBasic",description:'Accesos y salidas. La puerta debe tener fijo en la parte exterior y en forma completamente visible, un aviso con la leyenda: "PELIGRO ALTA TENSIÓN"',nom:"924-7.4",value:null},{content:"ItemBasic",description:"Protección contra incendios. a) Extintores. Deben colocarse extintores portátiles, tantos como sean necesarios en lugares visibles, de fácil acceso, libres de obstáculos y debidamente señalizados, situando dos, cuando menos, a una distancia que no exceda de 15 metros de la entrada de las subestaciones.",nom:"924-8",value:null},{content:"ItemBasic",description:"Partes con movimientos repentinos. Todas las partes que se mueven repentinamente y que puedan lastimar a personas que se encuentren próximas, deben protegerse por medio de resguardos.",nom:"924-15",value:null},{content:"ItemBasic",description:"Tarimas y tapetes aislantes. En subestaciones de tipo interior, las tarimas y tapetes deben instalarse cubriendo la parte frontal de los equipos de accionamiento manual, que operen a más de 1000 volts entre conductores; su colocación no debe presentar obstáculo en la apertura de las puertas de los gabinetes.",nom:"924-24",value:null}],data:[]},transformersList:{config:[{content:"ItemThermography",description:"Conexiones eléctricas. c) Limitaciones por temperatura.",nom:"110-14.C",value:null,overallPhoto:"",itemsT:[],model:"",items:[]},{content:"ItemThermographicPhotos",description:"",nom:"FOTOS TERMOGRAFICAS",value:null,overallPhoto:"",itemsT:[],model:"",items:[]},{content:"ItemOilLeaks",description:"",nom:"FUGAS DE ACEITE",value:null,overallPhoto:"",itemsT:[],model:"",items:[]},{content:"ItemBasic",description:"Interconexión de X0 a tierra.",nom:"250-36",value:null},{content:"ItemBasicDate",description:"Instalación y mantenimiento del equipo eléctrico.",nom:"924-14",value:null,date:null},{content:"ItemBasic",description:"Cables subterráneos. D) Identificación",nom:"923-3.D",value:null},{content:"ItemBasic",description:"Identificación del equipo eléctrico.",nom:"924-16",value:null},{content:"ItemBasic",description:"Marcado.",nom:"450-11",value:null},{content:"ItemNote",description:"",nom:"Notas",value:null}],data:[]}};this.saveItem(e),this.getItems(),this.cleanForm()},cleanForm:function(){this.dialog=!1,this.tradename="",this.municipality=null,this.newDate=new Date(Date.now()-6e4*(new Date).getTimezoneOffset()).toISOString().substr(0,10),this.whoAttendedUs="",this.version=""},serial:function(){var e=(new Date).getTime(),t="xxxxxxxxxxxx4xxxyxxxxxxxxxxxxxxx".replace(/[xy]/g,(function(t){var n=(e+16*Math.random())%16|0;return e=Math.floor(e/16),("x"==t?n:3&n|8).toString(16)}));return t}})},C=S,B=n(6190),Z=n(4145),_=n(4886),k=n(2118),D=n(1030),T=n(9930),V=n(5125),A=n(4324),O=n(1713),E=n(1399),P=n(3687),L=n(7808),N=(0,u.Z)(C,I,w,!1,null,null,null),j=N.exports;m()(N,{VBtn:B.Z,VCard:Z.Z,VCardActions:_.h7,VCardText:_.ZB,VCardTitle:_.EB,VContainer:k.Z,VDatePicker:D.Z,VDialog:T.Z,VForm:V.Z,VIcon:A.Z,VRow:O.Z,VSelect:E.Z,VSpacer:P.Z,VTextField:L.Z});var F=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-app-bar",{staticStyle:{color:"#d5dbdb"},attrs:{elevation:"0",color:"#273746",dense:""}},[n("v-toolbar-title",[e._v("UVIEREPORT v1.6.9")]),n("v-spacer"),n("v-dialog",{attrs:{persistent:""},scopedSlots:e._u([{key:"activator",fn:function(t){var r=t.on,a=t.attrs;return[n("v-btn",e._g(e._b({attrs:{icon:""}},"v-btn",a,!1),r),[n("v-icon",{attrs:{size:"30",color:"#D5DBDB"}},[e._v("folder_open")])],1)]}}]),model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[n("v-card",[n("v-container",[n("v-card-title",{staticClass:"text-h5",staticStyle:{color:"#273746"}},[e._v(" Importar Dictamen ")])],1),n("v-card-text",[n("v-row",{attrs:{align:"center",justify:"space-around"}},[n("v-container",[n("v-file-input",{attrs:{color:"primary",counter:"",label:"Archivo .uvr",placeholder:"Select your files","prepend-icon":"mdi-paperclip",outlined:"","show-size":1e3},scopedSlots:e._u([{key:"selection",fn:function(t){var r=t.index,a=t.text;return[r<2?n("v-chip",{attrs:{color:"primary",dark:"",label:"",small:""}},[e._v(" "+e._s(a)+" ")]):2===r?n("span",{staticClass:"text-overline grey--text text--darken-3 mx-2"},[e._v(" +"+e._s(e.files.length-2)+" File(s) ")]):e._e()]}}]),model:{value:e.file,callback:function(t){e.file=t},expression:"file"}})],1),n("v-btn",{attrs:{depressed:"",color:"primary",disabled:!e.fileValidation},on:{click:function(t){return e.saveImport()}}},[e._v(" Importar ")])],1)],1),n("v-card-actions",[n("v-spacer"),n("v-btn",{attrs:{outlined:"",color:"#273746"},on:{click:function(t){e.dialog=!1,e.file=null}}},[e._v(" Cancelar ")])],1)],1)],1)],1)},R=[],q=(n(8309),{name:"NavBarClient",data:function(){return{file:null,dialog:!1}},computed:{fileValidation:function(){if(!this.file||!this.file.name)return!1;var e=/(\.uvr)$/i;return!!e.exec(this.file.name)}},methods:(0,i.Z)((0,i.Z)({},(0,s.nv)({getItems:"customers/getAll",saveItem:"customers/save",deleteItem:"customers/delete"})),{},{deleteAll:function(){window.indexedDB.webkitGetDatabaseNames().onsuccess=function(e){var t=e.target.result;for(var n in t)indexedDB.deleteDatabase(t[n])}},saveImport:function(){var e=this,t=new FileReader;t.readAsText(this.file),t.onload=function(){var n=JSON.parse(t.result);delete n.id,e.createClient(n),e.file=null,e.dialog=!1}},createClient:function(e){this.saveItem(e),this.getItems()}})}),M=q,z=n(3497),U=n(4127),$=n(1625),G=n(7953),J=(0,u.Z)(M,F,R,!1,null,null,null),K=J.exports;m()(J,{VAppBar:z.Z,VBtn:B.Z,VCard:Z.Z,VCardActions:_.h7,VCardText:_.ZB,VCardTitle:_.EB,VChip:U.Z,VContainer:k.Z,VDialog:T.Z,VFileInput:$.Z,VIcon:A.Z,VRow:O.Z,VSpacer:P.Z,VToolbarTitle:G.qW});var H=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[0===e.items.length?n("div",[n("p",{staticClass:"text-center"},[e._v("..Sin Clientes...")])]):n("div",[n("v-virtual-scroll",{staticStyle:{height:"80vh"},attrs:{items:e.items,"item-height":80},scopedSlots:e._u([{key:"default",fn:function(t){var r=t.item;return[n("v-card",{attrs:{elevation:"0",outlined:""}},[n("div",[n("v-list-item",{on:{click:function(t){return e.open(r)}}},[n("v-list-item-avatar",[n("v-avatar",{staticClass:"white--text",attrs:{tile:"",color:"#273746"}},[e._v(" "+e._s(r.initials))])],1),n("v-list-item-content",[n("v-list-item-title",[e._v(" "+e._s(r.tradename))]),n("v-list-item-subtitle",[e._v(e._s(r.municipality))])],1),n("v-list-item-action",{staticStyle:{"font-style":"italic","font-size":"13px"}},[e._v(" "+e._s(r.date)+" "),n("v-menu",{attrs:{bottom:"",left:""},scopedSlots:e._u([{key:"activator",fn:function(t){var r=t.on,a=t.attrs;return[n("v-btn",e._g(e._b({attrs:{icon:""}},"v-btn",a,!1),r),[n("v-icon",{attrs:{color:"#273746"}},[e._v("fact_check ")])],1)]}}],null,!0)},[n("v-list",[n("v-list-item",{on:{click:function(t){return e.openDeleteModal(r)}}},[n("v-list-item",[e._v(" Borrar ")])],1)],1)],1)],1)],1)],1)])]}}])}),n("v-dialog",{attrs:{persistent:"","max-width":"290"},model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[n("v-card",[n("v-card-title",{staticClass:"text-h5"},[e._v(" Borrar ")]),n("v-card-text",[e._v(" ¿Seguro que desea borrar "+e._s(e.name)+"?")]),n("v-card-actions",[n("v-spacer"),n("v-btn",{attrs:{color:"#273746",text:""},on:{click:function(t){e.dialog=!1}}},[e._v(" Cancelar ")]),n("v-btn",{attrs:{outlined:"",color:"#273746"},on:{click:function(t){return e.remove(e.idItemDelete)}}},[e._v(" Si, Borrar ")])],1)],1)],1)],1)])},Q=[],W={name:"ScrollClient",data:function(){return{idItemDelete:null,dialog:!1,name:""}},computed:(0,i.Z)({},(0,s.rn)({items:function(e){return e.customers.customers}})),created:function(){this.getItems()},methods:(0,i.Z)((0,i.Z)({},(0,s.nv)({getItems:"customers/getAll",deleteItem:"customers/delete"})),{},{open:function(e){console.log(e.id),this.$router.push("section/".concat(e.id))},openDeleteModal:function(e){this.idItemDelete=e,this.dialog=!0,this.name=e.tradename},remove:function(e){this.deleteItem(e),this.getItems(),this.dialog=!1}})},X=W,Y=n(3423),ee=n(5808),te=n(4525),ne=n(5187),re=n(6900),ae=n(8251),oe=n(4528),ie=n(4924),se=(0,u.Z)(X,H,Q,!1,null,null,null),ce=se.exports;m()(se,{VAvatar:Y.Z,VBtn:B.Z,VCard:Z.Z,VCardActions:_.h7,VCardText:_.ZB,VCardTitle:_.EB,VDialog:T.Z,VIcon:A.Z,VList:ee.Z,VListItem:te.Z,VListItemAction:ne.Z,VListItemAvatar:re.Z,VListItemContent:ae.km,VListItemSubtitle:ae.oZ,VListItemTitle:ae.V9,VMenu:oe.Z,VSpacer:P.Z,VVirtualScroll:ie.Z});var le={components:{NewClient:j,NavBarClient:K,ScrollClient:ce}},ue=le,de=n(2540),me=(0,u.Z)(ue,x,y,!1,null,null,null),pe=me.exports;m()(me,{VCard:Z.Z,VSubheader:de.Z}),r.Z.use(g.Z);var ve,fe=[{path:"/",name:"home",component:pe},{path:"/about",name:"about",component:function(){return n.e(30).then(n.bind(n,9030))}},{path:"/detail",name:"detail",component:function(){return Promise.all([n.e(731),n.e(922)]).then(n.bind(n,6139))}},{path:"/section/:id",name:"section",component:function(){return Promise.all([n.e(731),n.e(875)]).then(n.bind(n,2897))}}],be=new g.Z({base:"/uviereportTest/",routes:fe}),he=be,ge=n(8534),xe=(n(5666),n(4747),n(4765),n(3087)),ye=n(2833),Ie={DB_NAME:"uvrdb",DB_VERSION:1,STORES:["customers"]},we=function(){function e(t,n){(0,xe.Z)(this,e),this.nombre=t,this.edad=n}return(0,ye.Z)(e,null,[{key:"getDb",value:function(){var e=(0,ge.Z)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise((function(e,t){if(ve)return e(ve);console.log("OPENING DB",ve);var n=window.indexedDB.open(Ie.DB_NAME,Ie.DB_VERSION);n.onerror=function(e){console.log("Error opening db",e),t("Error")},n.onsuccess=function(t){ve=t.target.result,e(ve)},n.onupgradeneeded=function(e){console.log("onupgradeneeded");var t=e.target.result;Ie.STORES.forEach((function(e){t.createObjectStore(e,{keyPath:"id",autoIncrement:!0})}))}})));case 1:case"end":return e.stop()}}),e)})));function t(){return e.apply(this,arguments)}return t}()},{key:"getAll",value:function(){var e=(0,ge.Z)(regeneratorRuntime.mark((function e(t){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.getDb();case 2:return n=e.sent,e.abrupt("return",new Promise((function(e){var r=n.transaction([t],"readonly");r.oncomplete=function(){e(o)};var a=r.objectStore(t),o=[];a.openCursor().onsuccess=function(e){var t=e.target.result;t&&(o.push(t.value),t.continue())}})));case 4:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}()},{key:"save",value:function(){var e=(0,ge.Z)(regeneratorRuntime.mark((function e(t,n){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.getDb();case 2:return r=e.sent,e.abrupt("return",new Promise((function(e){var a=r.transaction([t],"readwrite");a.oncomplete=function(){e()};var o=a.objectStore(t);o.put(n)})));case 4:case"end":return e.stop()}}),e,this)})));function t(t,n){return e.apply(this,arguments)}return t}()},{key:"delete",value:function(){var t=(0,ge.Z)(regeneratorRuntime.mark((function t(n,r){var a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.getDb();case 2:return a=t.sent,t.abrupt("return",new Promise((function(e){var t=a.transaction([n],"readwrite");t.oncomplete=function(){e()};var o=t.objectStore(n);o.delete(r.id)})));case 4:case"end":return t.stop()}}),t)})));function n(e,n){return t.apply(this,arguments)}return n}()},{key:"search",value:function(){var t=(0,ge.Z)(regeneratorRuntime.mark((function t(n,r){var a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.getDb();case 2:return a=t.sent,t.abrupt("return",new Promise((function(e){var t=a.transaction([n]).objectStore(n).get(r);t.onsuccess=function(n){var r=n.target.result;e(r?t.result:"No existe.")}})));case 4:case"end":return t.stop()}}),t)})));function n(e,n){return t.apply(this,arguments)}return n}()}]),e}(),Se="customers",Ce={namespaced:!0,state:{customers:[],findCustomer:{}},getters:{},mutations:{},actions:{getAll:function(e){return(0,ge.Z)(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.state.customers=[],t.next=3,we.getAll(Se);case 3:n=t.sent,n.forEach((function(t){e.state.customers.push(t)}));case 5:case"end":return t.stop()}}),t)})))()},save:function(e,t){return(0,ge.Z)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,we.save(Se,t);case 2:case"end":return e.stop()}}),e)})))()},delete:function(e,t){return(0,ge.Z)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,we["delete"](Se,t);case 2:case"end":return e.stop()}}),e)})))()},search:function(e,t){return(0,ge.Z)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,we.search(Se,t);case 2:e.state.findCustomer=n.sent;case 3:case"end":return n.stop()}}),n)})))()}}};r.Z.use(s.ZP);var Be=new s.ZP.Store({modules:{customers:Ce}}),Ze=n(1705),_e=n(6808);r.Z.use(Ze.Z);var ke=new Ze.Z({theme:{options:{customProperties:!0},themes:{light:{primary:"#273746",secondary:"#424242",accent:"#82B1FF",error:"#FF5252",info:"#2196F3",success:"#4CAF50",warning:"#FFC107"}}},lang:{locales:{es:_e.Z},current:"es"},icons:{iconfont:"md"}});r.Z.config.productionTip=!1,new r.Z({router:he,store:Be,vuetify:ke,render:function(e){return e(b)}}).$mount("#app")}},t={};function n(r){var a=t[r];if(void 0!==a)return a.exports;var o=t[r]={exports:{}};return e[r].call(o.exports,o,o.exports,n),o.exports}n.m=e,function(){var e=[];n.O=function(t,r,a,o){if(!r){var i=1/0;for(u=0;u<e.length;u++){r=e[u][0],a=e[u][1],o=e[u][2];for(var s=!0,c=0;c<r.length;c++)(!1&o||i>=o)&&Object.keys(n.O).every((function(e){return n.O[e](r[c])}))?r.splice(c--,1):(s=!1,o<i&&(i=o));if(s){e.splice(u--,1);var l=a();void 0!==l&&(t=l)}}return t}o=o||0;for(var u=e.length;u>0&&e[u-1][2]>o;u--)e[u]=e[u-1];e[u]=[r,a,o]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){var e,t=Object.getPrototypeOf?function(e){return Object.getPrototypeOf(e)}:function(e){return e.__proto__};n.t=function(r,a){if(1&a&&(r=this(r)),8&a)return r;if("object"===typeof r&&r){if(4&a&&r.__esModule)return r;if(16&a&&"function"===typeof r.then)return r}var o=Object.create(null);n.r(o);var i={};e=e||[null,t({}),t([]),t(t)];for(var s=2&a&&r;"object"==typeof s&&!~e.indexOf(s);s=t(s))Object.getOwnPropertyNames(s).forEach((function(e){i[e]=function(){return r[e]}}));return i["default"]=function(){return r},n.d(o,i),o}}(),function(){n.d=function(e,t){for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}}(),function(){n.f={},n.e=function(e){return Promise.all(Object.keys(n.f).reduce((function(t,r){return n.f[r](e,t),t}),[]))}}(),function(){n.u=function(e){return"js/"+e+"-legacy."+{5:"59d145e2",30:"16617607",109:"f536dd6a",120:"e6406902",246:"b4529eb3",248:"29901c9c",378:"3f634289",477:"114d16fa",497:"aa15c3a8",499:"7d3b56ba",549:"3ff5b257",563:"b1c848aa",613:"60846f19",615:"b4416e1b",639:"4b431367",724:"a9c70a1d",731:"e7b67574",759:"ee2e075d",812:"29d850b0",856:"4df4fd56",864:"59d7b405",875:"1b526034",921:"707d0a5f",922:"6b092e00",935:"9f2e416a",956:"e2c01020"}[e]+".js"}}(),function(){n.miniCssF=function(e){return"css/"+e+"."+{109:"b34e1391",246:"019d3075",248:"6382eff7",378:"af3a4bc6",477:"12888439",497:"1e1f83d2",499:"8155ded5",549:"af3a4bc6",563:"94810c30",615:"019d3075",639:"56191d90",724:"56191d90",759:"2242de04",812:"c3988445",864:"91f47dc2",875:"3e2b6cfe",921:"bbf6a973",922:"c9feedc8",956:"45d9a737"}[e]+".css"}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="uviereport:";n.l=function(r,a,o,i){if(e[r])e[r].push(a);else{var s,c;if(void 0!==o)for(var l=document.getElementsByTagName("script"),u=0;u<l.length;u++){var d=l[u];if(d.getAttribute("src")==r||d.getAttribute("data-webpack")==t+o){s=d;break}}s||(c=!0,s=document.createElement("script"),s.charset="utf-8",s.timeout=120,n.nc&&s.setAttribute("nonce",n.nc),s.setAttribute("data-webpack",t+o),s.src=r),e[r]=[a];var m=function(t,n){s.onerror=s.onload=null,clearTimeout(p);var a=e[r];if(delete e[r],s.parentNode&&s.parentNode.removeChild(s),a&&a.forEach((function(e){return e(n)})),t)return t(n)},p=setTimeout(m.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=m.bind(null,s.onerror),s.onload=m.bind(null,s.onload),c&&document.head.appendChild(s)}}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.p="/uviereportTest/"}(),function(){var e=function(e,t,n,r){var a=document.createElement("link");a.rel="stylesheet",a.type="text/css";var o=function(o){if(a.onerror=a.onload=null,"load"===o.type)n();else{var i=o&&("load"===o.type?"missing":o.type),s=o&&o.target&&o.target.href||t,c=new Error("Loading CSS chunk "+e+" failed.\n("+s+")");c.code="CSS_CHUNK_LOAD_FAILED",c.type=i,c.request=s,a.parentNode.removeChild(a),r(c)}};return a.onerror=a.onload=o,a.href=t,document.head.appendChild(a),a},t=function(e,t){for(var n=document.getElementsByTagName("link"),r=0;r<n.length;r++){var a=n[r],o=a.getAttribute("data-href")||a.getAttribute("href");if("stylesheet"===a.rel&&(o===e||o===t))return a}var i=document.getElementsByTagName("style");for(r=0;r<i.length;r++){a=i[r],o=a.getAttribute("data-href");if(o===e||o===t)return a}},r=function(r){return new Promise((function(a,o){var i=n.miniCssF(r),s=n.p+i;if(t(i,s))return a();e(r,s,a,o)}))},a={143:0};n.f.miniCss=function(e,t){var n={109:1,246:1,248:1,378:1,477:1,497:1,499:1,549:1,563:1,615:1,639:1,724:1,759:1,812:1,864:1,875:1,921:1,922:1,956:1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=r(e).then((function(){a[e]=0}),(function(t){throw delete a[e],t})))}}(),function(){var e={143:0};n.f.j=function(t,r){var a=n.o(e,t)?e[t]:void 0;if(0!==a)if(a)r.push(a[2]);else{var o=new Promise((function(n,r){a=e[t]=[n,r]}));r.push(a[2]=o);var i=n.p+n.u(t),s=new Error,c=function(r){if(n.o(e,t)&&(a=e[t],0!==a&&(e[t]=void 0),a)){var o=r&&("load"===r.type?"missing":r.type),i=r&&r.target&&r.target.src;s.message="Loading chunk "+t+" failed.\n("+o+": "+i+")",s.name="ChunkLoadError",s.type=o,s.request=i,a[1](s)}};n.l(i,c,"chunk-"+t,t)}},n.O.j=function(t){return 0===e[t]};var t=function(t,r){var a,o,i=r[0],s=r[1],c=r[2],l=0;if(i.some((function(t){return 0!==e[t]}))){for(a in s)n.o(s,a)&&(n.m[a]=s[a]);if(c)var u=c(n)}for(t&&t(r);l<i.length;l++)o=i[l],n.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return n.O(u)},r=self["webpackChunkuviereport"]=self["webpackChunkuviereport"]||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}();var r=n.O(void 0,[998],(function(){return n(8232)}));r=n.O(r)})();
//# sourceMappingURL=app-legacy.20d07167.js.map