(function(){"use strict";var e={1898:function(e,t,n){var r=n(144),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-app",[n("v-main",[n("router-view")],1)],1)},a=[],i=n(629),s={name:"App",data:()=>({}),computed:{...(0,i.rn)({customers:e=>e.customers.customers})},methods:{...(0,i.nv)({getItems:"customers/getAll",saveItem:"customers/save",deleteItem:"customers/delete"}),newData(){const e={id:this.serial(),name:"Cesar"};this.saveItem(e),this.getItems()},deleteData(e){this.deleteItem(e),this.getItems()},serial(){var e=(new Date).getTime(),t="xxxxxxxxxxxx4xxxyxxxxxxxxxxxxxxx".replace(/[xy]/g,(function(t){var n=(e+16*Math.random())%16|0;return e=Math.floor(e/16),("x"==t?n:3&n|8).toString(16)}));return t}}},l=s,c=n(3736),u=n(3453),d=n.n(u),m=n(7524),f=n(7877),v=(0,c.Z)(l,o,a,!1,null,null,null),p=v.exports;d()(v,{VApp:m.Z,VMain:f.Z});var h=n(5205);(0,h.z)("/uviereportTest/service-worker.js",{ready(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered(){console.log("Service worker has been registered.")},cached(){console.log("Content has been cached for offline use.")},updatefound(){console.log("New content is downloading.")},updated(){console.log("New content is available; please refresh.")},offline(){console.log("No internet connection found. App is running in offline mode.")},error(e){console.error("Error during service worker registration:",e)}});var b=n(8345),g=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("v-card",{staticClass:"mx-auto overflow-hidden",attrs:{color:"#F2F4F4",height:"100vh"}},[n("nav-bar-client"),n("v-subheader",[e._v(" Mis Clientes")]),n("scroll-client"),n("new-client")],1)],1)},x=[],y=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-row",[n("v-dialog",{attrs:{persistent:"",height:"100vh",width:"80vh"},scopedSlots:e._u([{key:"activator",fn:function(t){var r=t.on,o=t.attrs;return[n("v-btn",e._g(e._b({attrs:{fab:"",dark:"",color:"rgba(39,55,70,1)",fixed:"",right:"",bottom:""}},"v-btn",o,!1),r),[n("v-icon",{attrs:{size:"23",color:"#D5DBDB",dark:""}},[e._v("add")])],1)]}}]),model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[e.dialog?n("v-card",{staticClass:"white--text",attrs:{color:"#F2F4F4"}},[n("v-container",[n("v-card-title",{staticClass:"text-h5",staticStyle:{color:"#273746"}},[e._v(" Mi nuevo cliente ")]),n("v-card-text",{staticStyle:{color:"#273746"}},[e._v("Datos Generales")]),n("v-form",{ref:"form"},[n("v-text-field",{attrs:{outlined:"",label:"Nombre Comercial",required:""},model:{value:e.tradename,callback:function(t){e.tradename=t},expression:"tradename"}}),n("v-select",{attrs:{outlined:"",items:e.municipalityItems,label:"Municipio",required:""},model:{value:e.municipality,callback:function(t){e.municipality=t},expression:"municipality"}}),n("v-dialog",{ref:"dialog",attrs:{"return-value":e.date,persistent:"",width:"290px"},on:{"update:returnValue":function(t){e.date=t},"update:return-value":function(t){e.date=t}},scopedSlots:e._u([{key:"activator",fn:function(t){var r=t.on,o=t.attrs;return[n("v-text-field",e._g(e._b({attrs:{outlined:"",label:"Fecha",readonly:""},model:{value:e.dateSuper,callback:function(t){e.dateSuper=t},expression:"dateSuper"}},"v-text-field",o,!1),r))]}}],null,!1,3675516911),model:{value:e.modal,callback:function(t){e.modal=t},expression:"modal"}},[n("v-date-picker",{attrs:{scrollable:""},model:{value:e.dateSuper,callback:function(t){e.dateSuper=t},expression:"dateSuper"}},[n("v-spacer"),n("v-btn",{attrs:{text:"",color:"primary"},on:{click:function(t){e.modal=!1}}},[e._v(" Cancel ")]),n("v-btn",{attrs:{text:"",color:"primary"},on:{click:function(t){return e.$refs.dialog.save(e.dateSuper)}}},[e._v(" OK ")])],1)],1),n("v-text-field",{attrs:{outlined:"",label:"¿Quien nos atendió?",required:""},model:{value:e.whoAttendedUs,callback:function(t){e.whoAttendedUs=t},expression:"whoAttendedUs"}}),n("v-select",{attrs:{disabled:"",outlined:"",items:e.typeOfSetupItems,label:"Tipo de dictamen",required:""},model:{value:e.typeOfSetup,callback:function(t){e.typeOfSetup=t},expression:"typeOfSetup"}})],1),n("v-card-actions",[n("v-spacer"),n("v-btn",{attrs:{color:"#273746",text:""},on:{click:function(t){e.dialog=!1}}},[e._v(" Cancelar ")]),n("v-btn",{attrs:{outlined:"",color:"#273746"},on:{click:function(t){return e.create()}}},[e._v(" Crear ")])],1)],1)],1):e._e()],1)],1)},w=[],S={name:"NewClient",data(){return{date:new Date(Date.now()-6e4*(new Date).getTimezoneOffset()).toISOString().substr(0,10),dateSuper:new Date(Date.now()-6e4*(new Date).getTimezoneOffset()).toISOString().substr(0,10),municipalityItems:["Cozumel","Isla Mujeres","Benito Juárez","Solidaridad","Puerto Morelos","Felipe Carrillo Puerto","José María Morelos","Lázaro Cárdenas","Tulum","Othón P. Blanco","Bacalar"],typeOfSetupItems:["Baja tensión","Media tensión","Tableros"],modal:!1,dialog:!1,tradename:"",municipality:"",newDate:new Date(Date.now()-6e4*(new Date).getTimezoneOffset()).toISOString().substr(0,10),whoAttendedUs:"",typeOfSetup:"Tableros"}},methods:{...(0,i.nv)({getItems:"customers/getAll",saveItem:"customers/save",deleteItem:"customers/delete"}),create(){const e={tradename:this.tradename,municipality:this.municipality,date:this.date,whoAttendedUs:this.whoAttendedUs,typeOfSetup:this.typeOfSetup,generalNonconformities:"",section:[{icon:!0,tab:"description",content:"DocumentaryInformation"},{tab:"Tableros",content:"BoardList"},{icon:!0,tab:"notes",content:"GeneralNonconformities"}],boardList:{config:[{content:"ItemBasic",description:"Espacio de trabajo alrededor de equipo eléctrico. ",nom:"110-26",value:null},{content:"ItemBasic",description:"Ubicación con respecto a material fácilmente inflamable. ",nom:"408-17",value:null},{content:"ItemBasic",description:"Señales de advertencia contra arco eléctrico.",nom:"110-16",value:null},{content:"ItemBasic",description:"Identificación de los medios de desconexión.",nom:"110-22",value:null},{content:"ItemBasic",description:"Identificación de campo requerido. a) Directorio del circuito.",nom:"408-4",value:null},{content:"ItemBasic",description:"Aberturas sin utilizar.",nom:"408-7",value:null},{content:"ItemBasic",description:"Paneles.",nom:"408-50",value:null},{content:"ItemBasic",description:"Protección contra sobrecorriente.",nom:"408-36",value:null},{content:"ItemBasic",description:"Puesta a tierra de los tableros de alumbrado y control.",nom:"408-40",value:null},{content:"ItemBasic",description:"Ubicación en el circuito.",nom:"240-21",value:null},{content:"ItemBasic",description:"Conexiones eléctricas. a) Terminales.",nom:"110-14.A",value:null},{content:"ItemThermography",description:"Conexiones eléctricas. c) Limitaciones por temperatura.",nom:"110-14.C",value:null,overallPhoto:"",itemsT:[],model:"Interruptor principal",items:["Interruptor principal","Interruptor derivado","Conductor alimentador","Conductor derivado","Borne","Zapata","Barra colectora","Barra de neutros","Barra de tierras","Gabinete","Empalme, terminal"]},{content:"ItemBasicSelectNote",description:"Integridad de los equipos y de las conexiones.",nom:"110-12",value:null,model:"Preventivo",items:["Preventivo","Correctivo","Cambio total"],note:""},{content:"ItemBasic",description:"Tubo conduit de polietileno.",nom:"364-4",value:null},{content:"ItemBasicSelect",description:"Cables y cordones flexibles.",nom:"400-8",value:null,model:"Cable de uso rudo",items:["Cable de uso rudo","Cable dúplex","Cable de uso rudo y dúplex"]},{content:"ItemBasic",description:"Continuidad mecánica de las canalizaciones y de los cables.",nom:"300-12",value:null},{content:"ItemBasic",description:"Instalación de canalizaciones.",nom:"300-18",value:null},{content:"ItemNote",description:"",nom:"Notas",value:null}],data:[]},documentaryInformation:[{text:"Diagrama Unifilar",content:"ItemBasic",description:"Debe presentar diagrama unifilar de las instalaciones eléctricas.",nom:!1,value:null},{content:"ItemBasic",description:"Debe presentar constancia de mantenimiento del transformador eléctrico. ",nom:"924-14",value:null}]};this.saveItem(e),this.getItems(),this.cleanForm()},cleanForm(){this.dialog=!1,this.tradename="",this.municipality=null,this.newDate=new Date(Date.now()-6e4*(new Date).getTimezoneOffset()).toISOString().substr(0,10),this.whoAttendedUs=""},serial(){var e=(new Date).getTime(),t="xxxxxxxxxxxx4xxxyxxxxxxxxxxxxxxx".replace(/[xy]/g,(function(t){var n=(e+16*Math.random())%16|0;return e=Math.floor(e/16),("x"==t?n:3&n|8).toString(16)}));return t}}},I=S,C=n(680),_=n(2371),B=n(7118),O=n(9846),Z=n(4484),k=n(7336),D=n(6232),V=n(6428),A=n(2877),T=n(7238),E=n(9762),P=n(5978),N=(0,c.Z)(I,y,w,!1,null,null,null),j=N.exports;d()(N,{VBtn:C.Z,VCard:_.Z,VCardActions:B.h7,VCardText:B.ZB,VCardTitle:B.EB,VContainer:O.Z,VDatePicker:Z.Z,VDialog:k.Z,VForm:D.Z,VIcon:V.Z,VRow:A.Z,VSelect:T.Z,VSpacer:E.Z,VTextField:P.Z});var F=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-app-bar",{staticStyle:{color:"#d5dbdb"},attrs:{elevation:"0",color:"#273746",dense:""}},[n("v-toolbar-title",[e._v("UVIEREPORT v1.4")]),n("v-spacer")],1)},M=[],L={name:"NavBarClient",methods:{deleteAll(){window.indexedDB.webkitGetDatabaseNames().onsuccess=function(e){var t=e.target.result;for(var n in t)indexedDB.deleteDatabase(t[n])}}}},z=L,U=n(6986),q=n(7921),$=(0,c.Z)(z,F,M,!1,null,null,null),R=$.exports;d()($,{VAppBar:U.Z,VSpacer:E.Z,VToolbarTitle:q.qW});var G=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[0===e.items.length?n("div",[n("p",{staticClass:"text-center"},[e._v("..Sin Clientes...")])]):n("div",[n("v-virtual-scroll",{staticStyle:{height:"80vh"},attrs:{items:e.items,"item-height":80},scopedSlots:e._u([{key:"default",fn:function(t){var r=t.item;return[n("v-card",{attrs:{elevation:"0",outlined:""}},[n("div",[n("v-list-item",{on:{click:function(t){return e.open(r)}}},[n("v-list-item-avatar",[n("v-avatar",{staticClass:"white--text",attrs:{tile:"",color:"#273746"}},[e._v(" "+e._s(r.initials))])],1),n("v-list-item-content",[n("v-list-item-title",[e._v(" "+e._s(r.tradename))]),n("v-list-item-subtitle",[e._v(e._s(r.municipality))])],1),n("v-list-item-action",{staticStyle:{"font-style":"italic","font-size":"13px"}},[e._v(" "+e._s(r.date)+" "),n("v-menu",{attrs:{bottom:"",left:""},scopedSlots:e._u([{key:"activator",fn:function(t){var r=t.on,o=t.attrs;return[n("v-btn",e._g(e._b({attrs:{icon:""}},"v-btn",o,!1),r),[n("v-icon",{attrs:{color:"#273746"}},[e._v("fact_check ")])],1)]}}],null,!0)},[n("v-list",[n("v-list-item",{on:{click:function(t){return e.remove(r)}}},[n("v-list-item",[e._v(" Borrar ")])],1)],1)],1)],1)],1)],1)])]}}])})],1)])},J=[],K={name:"ScrollClient",data(){return{}},computed:{...(0,i.rn)({items:e=>e.customers.customers})},created(){this.getItems()},methods:{...(0,i.nv)({getItems:"customers/getAll",deleteItem:"customers/delete"}),open(e){console.log(e.id),this.$router.push(`section/${e.id}`)},remove(e){this.deleteItem(e),this.getItems()}}},H=K,Q=n(6370),W=n(6816),X=n(7620),Y=n(3099),ee=n(6421),te=n(6451),ne=n(6768),re=n(5683),oe=(0,c.Z)(H,G,J,!1,null,null,null),ae=oe.exports;d()(oe,{VAvatar:Q.Z,VBtn:C.Z,VCard:_.Z,VIcon:V.Z,VList:W.Z,VListItem:X.Z,VListItemAction:Y.Z,VListItemAvatar:ee.Z,VListItemContent:te.km,VListItemSubtitle:te.oZ,VListItemTitle:te.V9,VMenu:ne.Z,VVirtualScroll:re.Z});var ie={components:{NewClient:j,NavBarClient:R,ScrollClient:ae}},se=ie,le=n(5533),ce=(0,c.Z)(se,g,x,!1,null,null,null),ue=ce.exports;d()(ce,{VCard:_.Z,VSubheader:le.Z}),r.Z.use(b.Z);const de=[{path:"/",name:"home",component:ue},{path:"/about",name:"about",component:()=>n.e(348).then(n.bind(n,5348))},{path:"/detail",name:"detail",component:()=>Promise.all([n.e(748),n.e(942)]).then(n.bind(n,5496))},{path:"/section/:id",name:"section",component:()=>Promise.all([n.e(748),n.e(44)]).then(n.bind(n,4473))}],me=new b.Z({base:"/uviereportTest/",routes:de});var fe=me,ve={DB_NAME:"uvrdb",DB_VERSION:1,STORES:["customers"]};let pe;class he{constructor(e,t){this.nombre=e,this.edad=t}static async getDb(){return new Promise(((e,t)=>{if(pe)return e(pe);console.log("OPENING DB",pe);let n=window.indexedDB.open(ve.DB_NAME,ve.DB_VERSION);n.onerror=e=>{console.log("Error opening db",e),t("Error")},n.onsuccess=t=>{pe=t.target.result,e(pe)},n.onupgradeneeded=e=>{console.log("onupgradeneeded");let t=e.target.result;ve.STORES.forEach((e=>{t.createObjectStore(e,{keyPath:"id",autoIncrement:!0})}))}}))}static async getAll(e){let t=await this.getDb();return new Promise((n=>{let r=t.transaction([e],"readonly");r.oncomplete=()=>{n(a)};let o=r.objectStore(e),a=[];o.openCursor().onsuccess=e=>{let t=e.target.result;t&&(a.push(t.value),t.continue())}}))}static async save(e,t){let n=await this.getDb();return new Promise((r=>{let o=n.transaction([e],"readwrite");o.oncomplete=()=>{r()};let a=o.objectStore(e);a.put(t)}))}static async delete(e,t){let n=await he.getDb();return new Promise((r=>{let o=n.transaction([e],"readwrite");o.oncomplete=()=>{r()};let a=o.objectStore(e);a.delete(t.id)}))}static async search(e,t){let n=await he.getDb();return new Promise((r=>{const o=n.transaction([e]).objectStore(e).get(t);o.onsuccess=e=>{var t=e.target.result;r(t?o.result:"No existe.")}}))}}const be="customers";var ge={namespaced:!0,state:{customers:[],findCustomer:{}},getters:{},mutations:{},actions:{async getAll(e){e.state.customers=[];let t=await he.getAll(be);t.forEach((t=>{e.state.customers.push(t)}))},async save(e,t){await he.save(be,t)},async delete(e,t){await he["delete"](be,t)},async search(e,t){e.state.findCustomer=await he.search(be,t)}}};r.Z.use(i.ZP);var xe=new i.ZP.Store({modules:{customers:ge}}),ye=n(9132),we=n(6379);r.Z.use(ye.Z);var Se=new ye.Z({theme:{options:{customProperties:!0},themes:{light:{primary:"#273746",secondary:"#424242",accent:"#82B1FF",error:"#FF5252",info:"#2196F3",success:"#4CAF50",warning:"#FFC107"}}},lang:{locales:{es:we.Z},current:"es"},icons:{iconfont:"md"}});r.Z.config.productionTip=!1,new r.Z({router:fe,store:xe,vuetify:Se,render:e=>e(p)}).$mount("#app")}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var a=t[r]={exports:{}};return e[r].call(a.exports,a,a.exports,n),a.exports}n.m=e,function(){var e=[];n.O=function(t,r,o,a){if(!r){var i=1/0;for(u=0;u<e.length;u++){r=e[u][0],o=e[u][1],a=e[u][2];for(var s=!0,l=0;l<r.length;l++)(!1&a||i>=a)&&Object.keys(n.O).every((function(e){return n.O[e](r[l])}))?r.splice(l--,1):(s=!1,a<i&&(i=a));if(s){e.splice(u--,1);var c=o();void 0!==c&&(t=c)}}return t}a=a||0;for(var u=e.length;u>0&&e[u-1][2]>a;u--)e[u]=e[u-1];e[u]=[r,o,a]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){var e,t=Object.getPrototypeOf?function(e){return Object.getPrototypeOf(e)}:function(e){return e.__proto__};n.t=function(r,o){if(1&o&&(r=this(r)),8&o)return r;if("object"===typeof r&&r){if(4&o&&r.__esModule)return r;if(16&o&&"function"===typeof r.then)return r}var a=Object.create(null);n.r(a);var i={};e=e||[null,t({}),t([]),t(t)];for(var s=2&o&&r;"object"==typeof s&&!~e.indexOf(s);s=t(s))Object.getOwnPropertyNames(s).forEach((function(e){i[e]=function(){return r[e]}}));return i["default"]=function(){return r},n.d(a,i),a}}(),function(){n.d=function(e,t){for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}}(),function(){n.f={},n.e=function(e){return Promise.all(Object.keys(n.f).reduce((function(t,r){return n.f[r](e,t),t}),[]))}}(),function(){n.u=function(e){return"js/"+e+"."+{44:"15740ea4",120:"e6406902",193:"0fbeae01",199:"adb6edbd",203:"4ce49f7d",348:"e1388fbd",432:"6a3fe30b",601:"80e32d44",721:"627851bc",748:"6a3f9d0e",856:"4df4fd56",860:"5225d085",928:"fd237b62",939:"06cc79fe",942:"4844b2a5",962:"aa352ff3"}[e]+".js"}}(),function(){n.miniCssF=function(e){return"css/"+e+"."+{44:"3e2b6cfe",193:"56191d90",203:"019d3075",432:"af3a4bc6",601:"45d9a737",721:"6a57a8d8",860:"b34e1391",942:"c9feedc8",962:"56191d90"}[e]+".css"}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="uviereport:";n.l=function(r,o,a,i){if(e[r])e[r].push(o);else{var s,l;if(void 0!==a)for(var c=document.getElementsByTagName("script"),u=0;u<c.length;u++){var d=c[u];if(d.getAttribute("src")==r||d.getAttribute("data-webpack")==t+a){s=d;break}}s||(l=!0,s=document.createElement("script"),s.charset="utf-8",s.timeout=120,n.nc&&s.setAttribute("nonce",n.nc),s.setAttribute("data-webpack",t+a),s.src=r),e[r]=[o];var m=function(t,n){s.onerror=s.onload=null,clearTimeout(f);var o=e[r];if(delete e[r],s.parentNode&&s.parentNode.removeChild(s),o&&o.forEach((function(e){return e(n)})),t)return t(n)},f=setTimeout(m.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=m.bind(null,s.onerror),s.onload=m.bind(null,s.onload),l&&document.head.appendChild(s)}}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.p="/uviereportTest/"}(),function(){var e=function(e,t,n,r){var o=document.createElement("link");o.rel="stylesheet",o.type="text/css";var a=function(a){if(o.onerror=o.onload=null,"load"===a.type)n();else{var i=a&&("load"===a.type?"missing":a.type),s=a&&a.target&&a.target.href||t,l=new Error("Loading CSS chunk "+e+" failed.\n("+s+")");l.code="CSS_CHUNK_LOAD_FAILED",l.type=i,l.request=s,o.parentNode.removeChild(o),r(l)}};return o.onerror=o.onload=a,o.href=t,document.head.appendChild(o),o},t=function(e,t){for(var n=document.getElementsByTagName("link"),r=0;r<n.length;r++){var o=n[r],a=o.getAttribute("data-href")||o.getAttribute("href");if("stylesheet"===o.rel&&(a===e||a===t))return o}var i=document.getElementsByTagName("style");for(r=0;r<i.length;r++){o=i[r],a=o.getAttribute("data-href");if(a===e||a===t)return o}},r=function(r){return new Promise((function(o,a){var i=n.miniCssF(r),s=n.p+i;if(t(i,s))return o();e(r,s,o,a)}))},o={143:0};n.f.miniCss=function(e,t){var n={44:1,193:1,203:1,432:1,601:1,721:1,860:1,942:1,962:1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=r(e).then((function(){o[e]=0}),(function(t){throw delete o[e],t})))}}(),function(){var e={143:0};n.f.j=function(t,r){var o=n.o(e,t)?e[t]:void 0;if(0!==o)if(o)r.push(o[2]);else{var a=new Promise((function(n,r){o=e[t]=[n,r]}));r.push(o[2]=a);var i=n.p+n.u(t),s=new Error,l=function(r){if(n.o(e,t)&&(o=e[t],0!==o&&(e[t]=void 0),o)){var a=r&&("load"===r.type?"missing":r.type),i=r&&r.target&&r.target.src;s.message="Loading chunk "+t+" failed.\n("+a+": "+i+")",s.name="ChunkLoadError",s.type=a,s.request=i,o[1](s)}};n.l(i,l,"chunk-"+t,t)}},n.O.j=function(t){return 0===e[t]};var t=function(t,r){var o,a,i=r[0],s=r[1],l=r[2],c=0;if(i.some((function(t){return 0!==e[t]}))){for(o in s)n.o(s,o)&&(n.m[o]=s[o]);if(l)var u=l(n)}for(t&&t(r);c<i.length;c++)a=i[c],n.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return n.O(u)},r=self["webpackChunkuviereport"]=self["webpackChunkuviereport"]||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}();var r=n.O(void 0,[998],(function(){return n(1898)}));r=n.O(r)})();
//# sourceMappingURL=app.7e1f2565.js.map