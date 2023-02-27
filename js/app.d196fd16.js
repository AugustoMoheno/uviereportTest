(function(){"use strict";var e={4017:function(e,t,n){var a=n(144),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-app",[n("v-main",[n("router-view")],1)],1)},r=[],i=n(629),s={name:"App",data:()=>({}),computed:{...(0,i.rn)({customers:e=>e.customers.customers})},methods:{...(0,i.nv)({getItems:"customers/getAll",saveItem:"customers/save",deleteItem:"customers/delete"}),newData(){const e={id:this.serial(),name:"Cesar"};this.saveItem(e),this.getItems()},deleteData(e){this.deleteItem(e),this.getItems()},serial(){var e=(new Date).getTime(),t="xxxxxxxxxxxx4xxxyxxxxxxxxxxxxxxx".replace(/[xy]/g,(function(t){var n=(e+16*Math.random())%16|0;return e=Math.floor(e/16),("x"==t?n:3&n|8).toString(16)}));return t}}},l=s,c=n(3736),d=n(3453),u=n.n(d),m=n(998),p=n(3059),v=(0,c.Z)(l,o,r,!1,null,null,null),f=v.exports;u()(v,{VApp:m.Z,VMain:p.Z});var b=n(5205);(0,b.z)("/uviereportTest/service-worker.js",{ready(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered(){console.log("Service worker has been registered.")},cached(){console.log("Content has been cached for offline use.")},updatefound(){console.log("New content is downloading.")},updated(){console.log("New content is available; please refresh.")},offline(){console.log("No internet connection found. App is running in offline mode.")},error(e){console.error("Error during service worker registration:",e)}});var h=n(8345),g=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("v-card",{staticClass:"mx-auto overflow-hidden",attrs:{color:"#F2F4F4",height:"100vh"}},[n("nav-bar-client"),n("v-subheader",[e._v(" Mis Clientes")]),n("scroll-client"),n("new-client")],1)],1)},x=[],y=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-row",[n("v-dialog",{attrs:{persistent:"",height:"100vh",width:"80vh"},scopedSlots:e._u([{key:"activator",fn:function(t){var a=t.on,o=t.attrs;return[n("v-btn",e._g(e._b({attrs:{fab:"",dark:"",color:"rgba(39,55,70,1)",fixed:"",right:"",bottom:""}},"v-btn",o,!1),a),[n("v-icon",{attrs:{size:"23",color:"#D5DBDB",dark:""}},[e._v("add")])],1)]}}]),model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[e.dialog?n("v-card",{staticClass:"white--text",attrs:{color:"#F2F4F4"}},[n("v-container",[n("v-card-title",{staticClass:"text-h5",staticStyle:{color:"#273746"}},[e._v(" Mi nuevo cliente ")]),n("v-card-text",{staticStyle:{color:"#273746"}},[e._v("Datos Generales")]),n("v-form",{ref:"form"},[n("v-text-field",{attrs:{outlined:"",label:"Nombre Comercial",required:""},model:{value:e.tradename,callback:function(t){e.tradename=t},expression:"tradename"}}),n("v-select",{attrs:{outlined:"",items:e.municipalityItems,label:"Municipio",required:""},model:{value:e.municipality,callback:function(t){e.municipality=t},expression:"municipality"}}),n("v-dialog",{ref:"dialog",attrs:{"return-value":e.date,persistent:"",width:"290px"},on:{"update:returnValue":function(t){e.date=t},"update:return-value":function(t){e.date=t}},scopedSlots:e._u([{key:"activator",fn:function(t){var a=t.on,o=t.attrs;return[n("v-text-field",e._g(e._b({attrs:{outlined:"",label:"Fecha",readonly:""},model:{value:e.dateSuper,callback:function(t){e.dateSuper=t},expression:"dateSuper"}},"v-text-field",o,!1),a))]}}],null,!1,3675516911),model:{value:e.modal,callback:function(t){e.modal=t},expression:"modal"}},[n("v-date-picker",{attrs:{scrollable:""},model:{value:e.dateSuper,callback:function(t){e.dateSuper=t},expression:"dateSuper"}},[n("v-spacer"),n("v-btn",{attrs:{text:"",color:"primary"},on:{click:function(t){e.modal=!1}}},[e._v(" Cancel ")]),n("v-btn",{attrs:{text:"",color:"primary"},on:{click:function(t){return e.$refs.dialog.save(e.dateSuper)}}},[e._v(" OK ")])],1)],1),n("v-text-field",{attrs:{outlined:"",label:"¿Quien nos atendió?",required:""},model:{value:e.whoAttendedUs,callback:function(t){e.whoAttendedUs=t},expression:"whoAttendedUs"}}),n("v-text-field",{attrs:{outlined:"",label:"Versión",required:""},model:{value:e.version,callback:function(t){e.version=t},expression:"version"}}),n("v-select",{attrs:{disabled:"",outlined:"",items:e.typeOfSetupItems,label:"Tipo de dictamen",required:""},model:{value:e.typeOfSetup,callback:function(t){e.typeOfSetup=t},expression:"typeOfSetup"}})],1),n("v-card-actions",[n("v-spacer"),n("v-btn",{attrs:{color:"#273746",text:""},on:{click:function(t){e.dialog=!1}}},[e._v(" Cancelar ")]),n("v-btn",{attrs:{outlined:"",color:"#273746"},on:{click:function(t){return e.create()}}},[e._v(" Crear ")])],1)],1)],1):e._e()],1)],1)},I=[],C={name:"NewClient",data(){return{date:new Date(Date.now()-6e4*(new Date).getTimezoneOffset()).toISOString().substr(0,10),dateSuper:new Date(Date.now()-6e4*(new Date).getTimezoneOffset()).toISOString().substr(0,10),municipalityItems:["Cozumel","Isla Mujeres","Benito Juárez","Solidaridad","Puerto Morelos","Felipe Carrillo Puerto","José María Morelos","Lázaro Cárdenas","Tulum","Othón P. Blanco","Bacalar"],typeOfSetupItems:["Baja tensión","Media tensión","Tableros","Preterminado"],modal:!1,dialog:!1,tradename:"",municipality:"",newDate:new Date(Date.now()-6e4*(new Date).getTimezoneOffset()).toISOString().substr(0,10),whoAttendedUs:"",version:"",typeOfSetup:"Preterminado"}},watch:{tradename(e){this.tradename=e.toUpperCase()},whoAttendedUs(e){this.whoAttendedUs=e.toUpperCase()},version(e){this.version=e.toUpperCase()}},methods:{...(0,i.nv)({getItems:"customers/getAll",saveItem:"customers/save",deleteItem:"customers/delete"}),create(){const e={tradename:this.tradename,municipality:this.municipality,date:this.date,whoAttendedUs:this.whoAttendedUs,version:this.version,typeOfSetup:this.typeOfSetup,generalNonconformities:"",section:[{icon:!0,tab:"description",content:"DocumentaryInformation"},{tab:"Acometida",content:"RushList"},{tab:"Subestaciones",content:"SubstationsList"},{tab:"Transformadores",content:"TransformersList"},{tab:"Tableros",content:"BoardList"},{tab:"Áreas",content:"AreaList"},{tab:"Contactos",content:"ContactList"},{tab:"Tierras",content:"LandList"},{icon:!0,tab:"notes",content:"GeneralNonconformities"}],boardList:{config:[{content:"ItemBasic",description:"Espacio de trabajo alrededor de equipo eléctrico. ",nom:"110-26",value:null},{content:"ItemBasic",description:"Ubicación con respecto a material fácilmente inflamable. ",nom:"408-17",value:null},{content:"ItemBasic",description:"Señales de advertencia contra arco eléctrico.",nom:"110-16",value:null},{content:"ItemBasic",description:"Identificación de los medios de desconexión.",nom:"110-22",value:null},{content:"ItemBasic",description:"Identificación de campo requerido. a) Directorio del circuito.",nom:"408-4",value:null},{content:"ItemBasic",description:"Aberturas sin utilizar.",nom:"408-7",value:null},{content:"ItemBasic",description:"Paneles.",nom:"408-50",value:null},{content:"ItemBasic",description:"Protección contra sobrecorriente.",nom:"408-36",value:null},{content:"ItemBasic",description:"Puesta a tierra de los tableros de alumbrado y control.",nom:"408-40",value:null},{content:"ItemBasic",description:"Ubicación en el circuito.",nom:"240-21",value:null},{content:"ItemBasic",description:"Conexiones eléctricas. a) Terminales.",nom:"110-14.A",value:null},{content:"ItemThermography",description:"Conexiones eléctricas. c) Limitaciones por temperatura.",nom:"110-14.C",value:null,overallPhoto:"",itemsT:[],model:"Interruptor principal",items:["Interruptor principal","Interruptor derivado","Conductor alimentador","Conductor derivado","Borne","Zapata","Barra colectora","Barra de neutros","Barra de tierras","Gabinete","Empalme, terminal"]},{content:"ItemBasicSelectNote",description:"Integridad de los equipos y de las conexiones.",nom:"110-12",value:null,model:"Preventivo",items:["Preventivo","Correctivo","Cambio total"],note:""},{content:"ItemBasic",description:"Tubo conduit de polietileno.",nom:"364-4",value:null},{content:"ItemBasicSelect",description:"Cables y cordones flexibles.",nom:"400-8",value:null,model:"Cable de uso rudo",items:["Cable de uso rudo","Cable dúplex","Cable de uso rudo y dúplex"]},{content:"ItemBasic",description:"Continuidad mecánica de las canalizaciones y de los cables.",nom:"300-12",value:null},{content:"ItemBasic",description:"Instalación de canalizaciones.",nom:"300-18",value:null},{content:"ItemNote",description:"",nom:"Notas",value:null}],data:[]},documentaryInformation:[{text:"Diagrama Unifilar",content:"ItemBasic",description:"Debe presentar diagrama unifilar de las instalaciones eléctricas.",nom:"4.2.13",value:null},{content:"ItemBasic",description:"Debe presentar constancia de mantenimiento del transformador eléctrico. ",nom:"924-14",value:null}],contactList:{config:{description:"Polaridad de las conexiones",nom:"200-11",itemsT:[],model:"Tierra abierta",items:["Tierra abierta","Neutro abierto","Línea abierta","Línea / tierra invertida","Línea / neutro invertido","Correcto"]},data:[]},areaList:{config:{description:"Polaridad de las conexiones",nom:"200-11",value:null,overallPhoto:"",itemsT:[],model:"Tierra abierta",items:[{label:"Se debe retirar cable de uso rudo.",nom:"400-8",value:!1},{label:"Se debe retirar cable dúplex.",nom:"400-8",value:!1},{label:"Se debe fijar contacto adecuadamente.",nom:"110-12",value:!1},{label:"Se debe retirar canaleta de datos e instalar tuberías eléctricas de pvc.",nom:"110-2",value:!1},{label:"Se debe colocar tapas a registros eléctricos.",nom:"314-28.C)",value:!1},{label:"Se debe reemplazar contactos dañados.",nom:"110-12",value:!1},{label:"Se debe instalar tuberias electricas de pvc a conductores expuestos.",nom:"300-18",value:!1},{label:"Se debe colocar tapas a apagadores electricos.",nom:"300-31",value:!1},{label:"Se debe reemplazar tubo poliflex por tubería eléctrica de pvc.",nom:"364-4",value:!1},{label:"Se debe asegurar continuidad mecánica de canalizaciones.",nom:"300-12",value:!1}],note:""},data:[]},substationsList:{config:[{content:"ItemBasic",description:"Resguardos de locales y espacios.Los locales y espacios en que se instalen subestaciones deben tener restringido y resguardado su acceso; por medio de cercas de malla, muros o bien en locales especiales para evitar la entrada de personas no calificadas.",nom:"924-3",value:null},{content:"ItemBasic",description:"Condiciones de los locales y espacios. b) No deben emplearse como almacenes, talleres o para otra actividad que no esté relacionada con el funcionamiento y operación del equipo.",nom:"924-4.B",value:null},{content:"ItemBasic",description:"Condiciones de los locales y espacios. d) Deben tener ventilación adecuada para que el equipo opere a su temperatura y para minimizar los contaminantes en el aire bajo cualquier condición de operación.",nom:"924-4.D",value:null},{content:"ItemBasic",description:"Condiciones de los locales y espacios. e) Deben mantenerse secos.",nom:"924-4.E",value:null},{content:"ItemBasic",description:"Instalación de alumbrado. b) Circuito independiente. En subestaciones, el circuito para alumbrado y contactos debe alimentar exclusivamente estas cargas y tener protección adecuada contra sobrecorriente independiente de los otros circuitos.",nom:"924-5.B",value:null},{content:"ItemBasic",description:"Instalación de alumbrado. e) Alumbrado de emergencia. Debe colocarse en el local, cuando menos, una lámpara para alumbrado de emergencia en cada puerta de salida del local.",nom:"924-5.E",value:null},{content:"ItemBasic",description:"Pisos, barreras y escaleras.a) Pisos. En las subestaciones los pisos deben ser planos, firmes y con superficie antiderrapante, se debe evitar que haya obstáculos en los mismos. Los huecos, registros y trincheras deben tener tapas adecuadas.",nom:"924-6.A",value:null},{content:"ItemBasic",description:"Accesos y salidas.Los locales y cada espacio de trabajo deben tener un acceso y salida libre de obstáculos.",nom:"924-7.1",value:null},{content:"ItemBasic",description:"Accesos y salidas. La puerta de acceso y salida de un local debe abrir hacia afuera y estar provista de un seguro que permita su apertura, desde adentro.",nom:"924-7.2",value:null},{content:"ItemBasic",description:"Accesos y salidas. Se permite el uso de puertas corredizas, siempre que éstas tengan claramente marcado su sentido de apertura y se mantengan abiertas mientras haya personas dentro del local.",nom:"924-7.3",value:null},{content:"ItemBasic",description:'Accesos y salidas. La puerta debe tener fijo en la parte exterior y en forma completamente visible, un aviso con la leyenda: "PELIGRO ALTA TENSIÓN"',nom:"924-7.4",value:null},{content:"ItemBasic",description:"Protección contra incendios. a) Extintores. Deben colocarse extintores portátiles, tantos como sean necesarios en lugares visibles, de fácil acceso, libres de obstáculos y debidamente señalizados, situando dos, cuando menos, a una distancia que no exceda de 15 metros de la entrada de las subestaciones.",nom:"924-8",value:null},{content:"ItemBasic",description:"Partes con movimientos repentinos. Todas las partes que se mueven repentinamente y que puedan lastimar a personas que se encuentren próximas, deben protegerse por medio de resguardos.",nom:"924-15",value:null},{content:"ItemBasic",description:"Tarimas y tapetes aislantes. En subestaciones de tipo interior, las tarimas y tapetes deben instalarse cubriendo la parte frontal de los equipos de accionamiento manual, que operen a más de 1000 volts entre conductores; su colocación no debe presentar obstáculo en la apertura de las puertas de los gabinetes.",nom:"924-24",value:null}],data:[]},transformersList:{config:[{content:"ItemThermography",description:"Conexiones eléctricas. c) Limitaciones por temperatura.",nom:"110-14.C",value:null,overallPhoto:"",itemsT:[],model:"",items:[]},{content:"ItemThermographicPhotos",description:"",nom:"FOTOS TERMOGRAFICAS",value:null,overallPhoto:"",itemsT:[],model:"",items:[]},{content:"ItemOilLeaks",description:"",nom:"FUGAS DE ACEITE",value:null,overallPhoto:"",itemsT:[],model:"",items:[]},{content:"ItemBasic",description:"Interconexión de X0 a tierra.",nom:"250-36",value:null},{content:"ItemBasicDate",description:"Instalación y mantenimiento del equipo eléctrico (pruebas de mantenimiento).",nom:"924-14",value:null,date:null},{content:"ItemBasic",description:"Cables subterráneos. D) Identificación",nom:"923-3.D",value:null},{content:"ItemBasic",description:"Identificación del equipo eléctrico.",nom:"924-16",value:null},{content:"ItemBasic",description:"Marcado.",nom:"450-11",value:null},{content:"ItemNote",description:"",nom:"Notas",value:null}],data:[]},rushList:{config:[{content:"ItemBasicDate",description:"Equipo de recepción del suministro cubierto o resguardado. B) Resguardadas.",nom:"230-62.B",value:null,date:null},{content:"ItemBasicDate",description:"Conexión de puesta a tierra de las pantallas metálicas.",nom:"923-3.C",value:null,date:null},{content:"ItemBasicDate",description:"Integridad de los equipos y de las conexiones.",nom:"110-12",value:null,date:null},{content:"ItemBasic",description:"Cables subterráneos. D) Identificación",nom:"923-3.D",value:null},{content:"ItemBasicDate",description:"Señales de advertencia contra arco eléctrico.",nom:"110-16",value:null,date:null},{content:"ItemThermography",description:"Conexiones eléctricas. c) Limitaciones por temperatura.",nom:"110-14.C",value:null,overallPhoto:"",itemsT:[],model:"",items:[]},{content:"ItemBasicDate",description:"Identificación de los medios de desconexión.",nom:"110-22",value:null,date:null},{content:"ItemNote",description:"",nom:"Notas",value:null}],data:[]},landList:{config:[{content:"ItemLand",itemsT:[]}],data:[]}};this.saveItem(e),this.getItems(),this.cleanForm()},cleanForm(){this.dialog=!1,this.tradename="",this.municipality=null,this.newDate=new Date(Date.now()-6e4*(new Date).getTimezoneOffset()).toISOString().substr(0,10),this.whoAttendedUs="",this.version=""},serial(){var e=(new Date).getTime(),t="xxxxxxxxxxxx4xxxyxxxxxxxxxxxxxxx".replace(/[xy]/g,(function(t){var n=(e+16*Math.random())%16|0;return e=Math.floor(e/16),("x"==t?n:3&n|8).toString(16)}));return t}}},S=C,w=n(6190),B=n(4145),_=n(4886),D=n(2118),T=n(1030),k=n(9930),A=n(5125),V=n(4324),Z=n(1713),O=n(1399),E=n(3687),P=n(7808),L=(0,c.Z)(S,y,I,!1,null,null,null),N=L.exports;u()(L,{VBtn:w.Z,VCard:B.Z,VCardActions:_.h7,VCardText:_.ZB,VCardTitle:_.EB,VContainer:D.Z,VDatePicker:T.Z,VDialog:k.Z,VForm:A.Z,VIcon:V.Z,VRow:Z.Z,VSelect:O.Z,VSpacer:E.Z,VTextField:P.Z});var j=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-app-bar",{staticStyle:{color:"#d5dbdb"},attrs:{elevation:"0",color:"#273746",dense:""}},[n("v-toolbar-title",[e._v("UVIEREPORT v1.8.9")]),n("v-spacer"),n("v-dialog",{attrs:{persistent:""},scopedSlots:e._u([{key:"activator",fn:function(t){var a=t.on,o=t.attrs;return[n("v-btn",e._g(e._b({attrs:{icon:""}},"v-btn",o,!1),a),[n("v-icon",{attrs:{size:"30",color:"#D5DBDB"}},[e._v("folder_open")])],1)]}}]),model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[n("v-card",[n("v-container",[n("v-card-title",{staticClass:"text-h5",staticStyle:{color:"#273746"}},[e._v(" Importar Dictamen ")])],1),n("v-card-text",[n("v-row",{attrs:{align:"center",justify:"space-around"}},[n("v-container",[n("v-file-input",{attrs:{color:"primary",counter:"",label:"Archivo .uvr",placeholder:"Select your files","prepend-icon":"mdi-paperclip",outlined:"","show-size":1e3},scopedSlots:e._u([{key:"selection",fn:function(t){var a=t.index,o=t.text;return[a<2?n("v-chip",{attrs:{color:"primary",dark:"",label:"",small:""}},[e._v(" "+e._s(o)+" ")]):2===a?n("span",{staticClass:"text-overline grey--text text--darken-3 mx-2"},[e._v(" +"+e._s(e.files.length-2)+" File(s) ")]):e._e()]}}]),model:{value:e.file,callback:function(t){e.file=t},expression:"file"}})],1),n("v-btn",{attrs:{depressed:"",color:"primary",disabled:!e.fileValidation},on:{click:function(t){return e.saveImport()}}},[e._v(" Importar ")])],1)],1),n("v-card-actions",[n("v-spacer"),n("v-btn",{attrs:{outlined:"",color:"#273746"},on:{click:function(t){e.dialog=!1,e.file=null}}},[e._v(" Cancelar ")])],1)],1)],1)],1)},q=[],F={name:"NavBarClient",data:()=>({file:null,dialog:!1}),computed:{fileValidation(){if(!this.file||!this.file.name)return!1;var e=/(\.uvr)$/i;return!!e.exec(this.file.name)}},methods:{...(0,i.nv)({getItems:"customers/getAll",saveItem:"customers/save",deleteItem:"customers/delete"}),deleteAll(){window.indexedDB.webkitGetDatabaseNames().onsuccess=function(e){var t=e.target.result;for(var n in t)indexedDB.deleteDatabase(t[n])}},saveImport(){var e=new FileReader;e.readAsText(this.file),e.onload=()=>{let t=JSON.parse(e.result);delete t.id,this.createClient(t),this.file=null,this.dialog=!1}},createClient(e){this.saveItem(e),this.getItems()}}},M=F,z=n(3497),U=n(4127),R=n(1625),$=n(7953),G=(0,c.Z)(M,j,q,!1,null,null,null),J=G.exports;u()(G,{VAppBar:z.Z,VBtn:w.Z,VCard:B.Z,VCardActions:_.h7,VCardText:_.ZB,VCardTitle:_.EB,VChip:U.Z,VContainer:D.Z,VDialog:k.Z,VFileInput:R.Z,VIcon:V.Z,VRow:Z.Z,VSpacer:E.Z,VToolbarTitle:$.qW});var K=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[0===e.items.length?n("div",[n("p",{staticClass:"text-center"},[e._v("..Sin Clientes...")])]):n("div",[n("v-virtual-scroll",{staticStyle:{height:"80vh"},attrs:{items:e.items,"item-height":80},scopedSlots:e._u([{key:"default",fn:function(t){var a=t.item;return[n("v-card",{attrs:{elevation:"0",outlined:""}},[n("div",[n("v-list-item",{on:{click:function(t){return e.open(a)}}},[n("v-list-item-avatar",[n("v-avatar",{staticClass:"white--text",attrs:{tile:"",color:"#273746"}},[e._v(" "+e._s(a.initials))])],1),n("v-list-item-content",[n("v-list-item-title",[e._v(" "+e._s(a.tradename))]),n("v-list-item-subtitle",[e._v(e._s(a.municipality))])],1),n("v-list-item-action",{staticStyle:{"font-style":"italic","font-size":"13px"}},[e._v(" "+e._s(a.date)+" "),n("v-menu",{attrs:{bottom:"",left:""},scopedSlots:e._u([{key:"activator",fn:function(t){var a=t.on,o=t.attrs;return[n("v-btn",e._g(e._b({attrs:{icon:""}},"v-btn",o,!1),a),[n("v-icon",{attrs:{color:"#273746"}},[e._v("fact_check ")])],1)]}}],null,!0)},[n("v-list",[n("v-list-item",{on:{click:function(t){return e.openDeleteModal(a)}}},[n("v-list-item",[e._v(" Borrar ")])],1)],1)],1)],1)],1)],1)])]}}])}),n("v-dialog",{attrs:{persistent:"","max-width":"290"},model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[n("v-card",[n("v-card-title",{staticClass:"text-h5"},[e._v(" Borrar ")]),n("v-card-text",[e._v(" ¿Seguro que desea borrar "+e._s(e.name)+"?")]),n("v-card-actions",[n("v-spacer"),n("v-btn",{attrs:{color:"#273746",text:""},on:{click:function(t){e.dialog=!1}}},[e._v(" Cancelar ")]),n("v-btn",{attrs:{outlined:"",color:"#273746"},on:{click:function(t){return e.remove(e.idItemDelete)}}},[e._v(" Si, Borrar ")])],1)],1)],1)],1)])},H=[],Q={name:"ScrollClient",data(){return{idItemDelete:null,dialog:!1,name:""}},computed:{...(0,i.rn)({items:e=>e.customers.customers})},created(){this.getItems()},methods:{...(0,i.nv)({getItems:"customers/getAll",deleteItem:"customers/delete"}),open(e){console.log(e.id),this.$router.push(`section/${e.id}`)},openDeleteModal(e){this.idItemDelete=e,this.dialog=!0,this.name=e.tradename},remove(e){this.deleteItem(e),this.getItems(),this.dialog=!1}}},W=Q,X=n(3423),Y=n(5808),ee=n(4525),te=n(5187),ne=n(6900),ae=n(8251),oe=n(4528),re=n(4924),ie=(0,c.Z)(W,K,H,!1,null,null,null),se=ie.exports;u()(ie,{VAvatar:X.Z,VBtn:w.Z,VCard:B.Z,VCardActions:_.h7,VCardText:_.ZB,VCardTitle:_.EB,VDialog:k.Z,VIcon:V.Z,VList:Y.Z,VListItem:ee.Z,VListItemAction:te.Z,VListItemAvatar:ne.Z,VListItemContent:ae.km,VListItemSubtitle:ae.oZ,VListItemTitle:ae.V9,VMenu:oe.Z,VSpacer:E.Z,VVirtualScroll:re.Z});var le={components:{NewClient:N,NavBarClient:J,ScrollClient:se}},ce=le,de=n(2540),ue=(0,c.Z)(ce,g,x,!1,null,null,null),me=ue.exports;u()(ue,{VCard:B.Z,VSubheader:de.Z}),a.Z.use(h.Z);const pe=[{path:"/",name:"home",component:me},{path:"/about",name:"about",component:()=>n.e(348).then(n.bind(n,5348))},{path:"/detail",name:"detail",component:()=>Promise.all([n.e(731),n.e(412)]).then(n.bind(n,1811))},{path:"/section/:id",name:"section",component:()=>Promise.all([n.e(731),n.e(708)]).then(n.bind(n,8811))}],ve=new h.Z({base:"/uviereportTest/",routes:pe});var fe=ve,be={DB_NAME:"uvrdb",DB_VERSION:1,STORES:["customers"]};let he;class ge{constructor(e,t){this.nombre=e,this.edad=t}static async getDb(){return new Promise(((e,t)=>{if(he)return e(he);console.log("OPENING DB",he);let n=window.indexedDB.open(be.DB_NAME,be.DB_VERSION);n.onerror=e=>{console.log("Error opening db",e),t("Error")},n.onsuccess=t=>{he=t.target.result,e(he)},n.onupgradeneeded=e=>{console.log("onupgradeneeded");let t=e.target.result;be.STORES.forEach((e=>{t.createObjectStore(e,{keyPath:"id",autoIncrement:!0})}))}}))}static async getAll(e){let t=await this.getDb();return new Promise((n=>{let a=t.transaction([e],"readonly");a.oncomplete=()=>{n(r)};let o=a.objectStore(e),r=[];o.openCursor().onsuccess=e=>{let t=e.target.result;t&&(r.push(t.value),t.continue())}}))}static async save(e,t){let n=await this.getDb();return new Promise((a=>{let o=n.transaction([e],"readwrite");o.oncomplete=()=>{a()};let r=o.objectStore(e);r.put(t)}))}static async delete(e,t){let n=await ge.getDb();return new Promise((a=>{let o=n.transaction([e],"readwrite");o.oncomplete=()=>{a()};let r=o.objectStore(e);r.delete(t.id)}))}static async search(e,t){let n=await ge.getDb();return new Promise((a=>{const o=n.transaction([e]).objectStore(e).get(t);o.onsuccess=e=>{var t=e.target.result;a(t?o.result:"No existe.")}}))}}const xe="customers";var ye={namespaced:!0,state:{customers:[],findCustomer:{}},getters:{},mutations:{},actions:{async getAll(e){e.state.customers=[];let t=await ge.getAll(xe);t.forEach((t=>{e.state.customers.push(t)}))},async save(e,t){await ge.save(xe,t)},async delete(e,t){await ge["delete"](xe,t)},async search(e,t){e.state.findCustomer=await ge.search(xe,t)}}};a.Z.use(i.ZP);var Ie=new i.ZP.Store({modules:{customers:ye}}),Ce=n(1705),Se=n(6808);a.Z.use(Ce.Z);var we=new Ce.Z({theme:{options:{customProperties:!0},themes:{light:{primary:"#273746",secondary:"#424242",accent:"#82B1FF",error:"#FF5252",info:"#2196F3",success:"#4CAF50",warning:"#FFC107"}}},lang:{locales:{es:Se.Z},current:"es"},icons:{iconfont:"md"}});a.Z.config.productionTip=!1,new a.Z({router:fe,store:Ie,vuetify:we,render:e=>e(f)}).$mount("#app")}},t={};function n(a){var o=t[a];if(void 0!==o)return o.exports;var r=t[a]={exports:{}};return e[a].call(r.exports,r,r.exports,n),r.exports}n.m=e,function(){var e=[];n.O=function(t,a,o,r){if(!a){var i=1/0;for(d=0;d<e.length;d++){a=e[d][0],o=e[d][1],r=e[d][2];for(var s=!0,l=0;l<a.length;l++)(!1&r||i>=r)&&Object.keys(n.O).every((function(e){return n.O[e](a[l])}))?a.splice(l--,1):(s=!1,r<i&&(i=r));if(s){e.splice(d--,1);var c=o();void 0!==c&&(t=c)}}return t}r=r||0;for(var d=e.length;d>0&&e[d-1][2]>r;d--)e[d]=e[d-1];e[d]=[a,o,r]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){var e,t=Object.getPrototypeOf?function(e){return Object.getPrototypeOf(e)}:function(e){return e.__proto__};n.t=function(a,o){if(1&o&&(a=this(a)),8&o)return a;if("object"===typeof a&&a){if(4&o&&a.__esModule)return a;if(16&o&&"function"===typeof a.then)return a}var r=Object.create(null);n.r(r);var i={};e=e||[null,t({}),t([]),t(t)];for(var s=2&o&&a;"object"==typeof s&&!~e.indexOf(s);s=t(s))Object.getOwnPropertyNames(s).forEach((function(e){i[e]=function(){return a[e]}}));return i["default"]=function(){return a},n.d(r,i),r}}(),function(){n.d=function(e,t){for(var a in t)n.o(t,a)&&!n.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})}}(),function(){n.f={},n.e=function(e){return Promise.all(Object.keys(n.f).reduce((function(t,a){return n.f[a](e,t),t}),[]))}}(),function(){n.u=function(e){return"js/"+e+"."+{4:"2a8f3f4b",28:"43994c3d",63:"b5b006b3",120:"e6406902",126:"6bfcb64f",210:"2d604b9e",249:"a00e81d8",290:"633df9a8",295:"1319a007",310:"16b5367e",323:"75e6f922",344:"26be9b01",348:"e1388fbd",397:"54358df3",412:"3028af9b",421:"d1c3b01a",496:"a5a2343f",513:"906fe6b7",532:"ae928736",577:"07185738",594:"90416ddd",635:"386263b0",705:"49c56ba6",708:"43240c37",731:"c3f0d129",774:"9bb26184",839:"1acc2aa0",856:"4df4fd56"}[e]+".js"}}(),function(){n.miniCssF=function(e){return"css/"+e+"."+{28:"56191d90",63:"0d714fc7",126:"5e96ca34",210:"9b12bbb0",249:"220c99ad",290:"46fa4aff",295:"278a7f22",310:"97b61ec8",344:"de42c8f6",397:"13f15d03",412:"66d617a3",421:"04deb6b0",496:"79f84579",513:"56191d90",532:"018c6979",594:"019d3075",635:"46fa4aff",705:"019d3075",708:"3e2b6cfe",774:"2e9e7322",839:"350ad3e8"}[e]+".css"}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="uviereport:";n.l=function(a,o,r,i){if(e[a])e[a].push(o);else{var s,l;if(void 0!==r)for(var c=document.getElementsByTagName("script"),d=0;d<c.length;d++){var u=c[d];if(u.getAttribute("src")==a||u.getAttribute("data-webpack")==t+r){s=u;break}}s||(l=!0,s=document.createElement("script"),s.charset="utf-8",s.timeout=120,n.nc&&s.setAttribute("nonce",n.nc),s.setAttribute("data-webpack",t+r),s.src=a),e[a]=[o];var m=function(t,n){s.onerror=s.onload=null,clearTimeout(p);var o=e[a];if(delete e[a],s.parentNode&&s.parentNode.removeChild(s),o&&o.forEach((function(e){return e(n)})),t)return t(n)},p=setTimeout(m.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=m.bind(null,s.onerror),s.onload=m.bind(null,s.onload),l&&document.head.appendChild(s)}}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.p="/uviereportTest/"}(),function(){var e=function(e,t,n,a){var o=document.createElement("link");o.rel="stylesheet",o.type="text/css";var r=function(r){if(o.onerror=o.onload=null,"load"===r.type)n();else{var i=r&&("load"===r.type?"missing":r.type),s=r&&r.target&&r.target.href||t,l=new Error("Loading CSS chunk "+e+" failed.\n("+s+")");l.code="CSS_CHUNK_LOAD_FAILED",l.type=i,l.request=s,o.parentNode.removeChild(o),a(l)}};return o.onerror=o.onload=r,o.href=t,document.head.appendChild(o),o},t=function(e,t){for(var n=document.getElementsByTagName("link"),a=0;a<n.length;a++){var o=n[a],r=o.getAttribute("data-href")||o.getAttribute("href");if("stylesheet"===o.rel&&(r===e||r===t))return o}var i=document.getElementsByTagName("style");for(a=0;a<i.length;a++){o=i[a],r=o.getAttribute("data-href");if(r===e||r===t)return o}},a=function(a){return new Promise((function(o,r){var i=n.miniCssF(a),s=n.p+i;if(t(i,s))return o();e(a,s,o,r)}))},o={143:0};n.f.miniCss=function(e,t){var n={28:1,63:1,126:1,210:1,249:1,290:1,295:1,310:1,344:1,397:1,412:1,421:1,496:1,513:1,532:1,594:1,635:1,705:1,708:1,774:1,839:1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=a(e).then((function(){o[e]=0}),(function(t){throw delete o[e],t})))}}(),function(){var e={143:0};n.f.j=function(t,a){var o=n.o(e,t)?e[t]:void 0;if(0!==o)if(o)a.push(o[2]);else{var r=new Promise((function(n,a){o=e[t]=[n,a]}));a.push(o[2]=r);var i=n.p+n.u(t),s=new Error,l=function(a){if(n.o(e,t)&&(o=e[t],0!==o&&(e[t]=void 0),o)){var r=a&&("load"===a.type?"missing":a.type),i=a&&a.target&&a.target.src;s.message="Loading chunk "+t+" failed.\n("+r+": "+i+")",s.name="ChunkLoadError",s.type=r,s.request=i,o[1](s)}};n.l(i,l,"chunk-"+t,t)}},n.O.j=function(t){return 0===e[t]};var t=function(t,a){var o,r,i=a[0],s=a[1],l=a[2],c=0;if(i.some((function(t){return 0!==e[t]}))){for(o in s)n.o(s,o)&&(n.m[o]=s[o]);if(l)var d=l(n)}for(t&&t(a);c<i.length;c++)r=i[c],n.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return n.O(d)},a=self["webpackChunkuviereport"]=self["webpackChunkuviereport"]||[];a.forEach(t.bind(null,0)),a.push=t.bind(null,a.push.bind(a))}();var a=n.O(void 0,[998],(function(){return n(4017)}));a=n.O(a)})();
//# sourceMappingURL=app.d196fd16.js.map