"use strict";(self["webpackChunkuviereport"]=self["webpackChunkuviereport"]||[]).push([[618],{7635:function(t,e,n){n.d(e,{Z:function(){return c}});var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",t._l(t.itemsPro,(function(t,e){return n("div",{key:e},[n(t.content,{tag:"component",attrs:{template:t},on:{setOption:function(e){return t.value=e},setModel:function(e){return t.model=e},setNote:function(e){return t.note=e},setOverallPhoto:function(e){return t.overallPhoto=e},setItemsT:function(e){return t.itemsT=e},setDate:function(e){return t.date=e}}})],1)})),0)},o=[],a=(n(1539),n(8783),n(3948),{components:{ItemBasic:function(){return n.e(615).then(n.bind(n,4615))},ItemBasicSelect:function(){return n.e(109).then(n.bind(n,5109))},ItemNote:function(){return n.e(724).then(n.bind(n,8724))},ItemThermography:function(){return n.e(378).then(n.bind(n,2378))},ItemBasicSelectNote:function(){return n.e(956).then(n.bind(n,2327))},ItemBasicDate:function(){return n.e(246).then(n.bind(n,8246))},ItemThermographicPhotos:function(){return n.e(864).then(n.bind(n,2864))},ItemOilLeaks:function(){return n.e(921).then(n.bind(n,1921))},ItemLand:function(){return n.e(51).then(n.bind(n,51))}},name:"ItemGroup",props:{config:Array},watch:{itemsPro:function(t){this.init(),console.log("Se ha actualizado")}},created:function(){this.init()},data:function(){return{itemsPro:[],items:[{content:"ItemBasic",description:"Espacio de trabajo alrededor de equipo eléctrico. ",nom:"110-26",value:null},{content:"ItemBasic",description:"Ubicación con respecto a material fácilmente inflamable. ",nom:"408-17",value:null},{content:"ItemBasic",description:"Señales de advertencia contra arco eléctrico.",nom:"110-16",value:null},{content:"ItemBasic",description:"Identificación de los medios de desconexión.",nom:"110-22",value:null},{content:"ItemBasic",description:"Identificación de campo requerido. a) Directorio del circuito.",nom:"408-4",value:null},{content:"ItemBasic",description:"Aberturas sin utilizar.",nom:"408-7",value:null},{content:"ItemBasic",description:"Paneles.",nom:"408-50",value:null},{content:"ItemBasic",description:"Protección contra sobrecorriente.",nom:"408-36",value:null},{content:"ItemBasic",description:"Puesta a tierra de los tableros de alumbrado y control.",nom:"408-40",value:null},{content:"ItemBasic",description:"Ubicación en el circuito.",nom:"240-21",value:null},{content:"ItemBasic",description:"Conexiones eléctricas. a) Terminales.",nom:"110-14",value:null,model:"PREVENTIVO",items:["PREVENTIVO","CORRECTIVO"]},{content:"ItemThermography",description:"Conexiones eléctricas. c) Limitaciones por temperatura.",nom:"110-14",value:null,model:"Interruptor principal",items:["Interruptor principal","Interruptor derivado","Conductor alimentador","Conductor derivado","Borne","Zapata","Barra colectora","Barra de neutros","Barra de tierras","Gabinete","Empalme, terminal"]},{content:"ItemBasic",description:"Integridad de los equipos y de las conexiones.",nom:"110-12",value:null},{content:"ItemBasic",description:"Tubo conduit de polietileno.",nom:"364-4",value:null},{content:"ItemBasic",description:"Cables y cordones flexibles.",nom:"400-8",value:null},{content:"ItemBasic",description:"Instalación de canalizaciones.",nom:"300-18",value:null},{content:"ItemNote",description:"",nom:"Notas",value:null}],response:[]}},methods:{init:function(){this.itemsPro=this.config,console.log(this.itemsPro)},build:function(){}}}),r=a,l=n(1001),s=(0,l.Z)(r,i,o,!1,null,null,null),c=s.exports},8618:function(t,e,n){n.r(e),n.d(e,{default:function(){return O}});var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-card",{staticClass:"mx-auto",attrs:{elevation:"0",color:"#F2F4F4",height:"100vh"}},[0===t.items.length?n("div",[n("p",{staticClass:"text-center"},[t._v("..Sin Tableros...")])]):t._e(),n("div",[n("v-virtual-scroll",{staticStyle:{height:"91vh"},attrs:{items:t.items,"item-height":80},scopedSlots:t._u([{key:"default",fn:function(e){var i=e.item;return[n("v-card",{attrs:{elevation:"0",outlined:""}},[n("div",[n("v-list-item",{on:{click:function(e){return t.open(i)}}},[n("v-list-item-action",[n("v-btn",{staticClass:"white--text",attrs:{fab:"",small:"",depressed:"",color:"#273746"}},[t._v(" "+t._s(i.reference)+" ")])],1),n("v-list-item-content",[n("v-list-item-title",[n("strong",[t._v(" "+t._s(i.nomenclature))])]),n("v-list-item-subtitle",[t._v(t._s(i.location))])],1),n("BtnActionSection",{attrs:{item:i,nameEdit:"boardList"}})],1)],1)])]}}])})],1),n("board-new",{ref:"board"})],1)},o=[],a=n(5082),r=(n(1539),n(8783),n(3948),n(629)),l=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-row",{attrs:{justify:"center"}},[n("v-dialog",{attrs:{fullscreen:"","hide-overlay":"",transition:"dialog-bottom-transition"},scopedSlots:t._u([{key:"activator",fn:function(e){var i=e.on,o=e.attrs;return[n("v-btn",t._g(t._b({attrs:{fab:"",dark:"",color:"rgba(39,55,70,1)",fixed:"",right:"",bottom:""},on:{click:function(e){return t.newBoard()}}},"v-btn",o,!1),i),[n("v-icon",{attrs:{size:"23",color:"#D5DBDB",dark:""}},[t._v("add")])],1)]}}]),model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[n("v-card",{attrs:{color:"#F2F4F4"}},[n("v-card",{staticClass:"overflow-hidden"},[n("v-app-bar",{staticStyle:{"z-index":"20001 !important"},attrs:{absolute:"",dark:"",color:"primary","elevate-on-scroll":"","scroll-target":"#scrolling-techniques-7"}},[n("v-btn",{attrs:{icon:"",dark:""},on:{click:function(e){t.dialog=!1}}},[n("v-icon",[t._v("arrow_back")])],1),n("v-toolbar-title",[t._v(t._s(t.textDialog))]),n("v-spacer"),n("v-toolbar-items",[n("v-btn",{attrs:{dark:"",text:""},on:{click:function(e){return t.action()}}},[t._v(" "+t._s(t.textSave)+" ")])],1)],1),n("v-sheet",{staticClass:"overflow-y-auto",staticStyle:{color:"#273746"},attrs:{id:"scrolling-techniques-7","max-height":"100vh"}},[n("v-container",[n("v-card-title",{staticClass:"text-h5",staticStyle:{color:"#273746"}},[t._v(" Nuevo Tablero ")]),n("v-card-text",{staticStyle:{color:"#273746"}},[t._v("Datos del tablero")]),n("v-form",{ref:"form"},[n("v-text-field",{staticClass:"text-capitalize",attrs:{outlined:"",disabled:"",label:"Referencia",required:""},model:{value:t.reference,callback:function(e){t.reference=e},expression:"reference"}}),n("v-text-field",{attrs:{outlined:"",label:"Nomenclatura",required:""},model:{value:t.nomenclature,callback:function(e){t.nomenclature=e},expression:"nomenclature"}}),n("v-text-field",{attrs:{outlined:"",label:"Localización",required:""},model:{value:t.location,callback:function(e){t.location=e},expression:"location"}}),n("v-select",{attrs:{outlined:"",items:t.typeBoardItems,label:"Tipo de tablero"},model:{value:t.typeBoard,callback:function(e){t.typeBoard=e},expression:"typeBoard"}}),n("v-text-field",{attrs:{outlined:"",label:"Capacidad",required:""},model:{value:t.ability,callback:function(e){t.ability=e},expression:"ability"}}),n("v-select",{attrs:{outlined:"",items:t.brandItems,label:"MARCA"},model:{value:t.brand,callback:function(e){t.brand=e},expression:"brand"}})],1),t.editDialog?n("ResetSurveyItems",{attrs:{configDefault:JSON.parse(JSON.stringify(this.config))},on:{show:function(e){t.dialog=e},itemsResult:function(e){t.result=e}}}):t._e(),t.dialog?n("item-group",{attrs:{config:t.result}}):t._e()],1)],1)],1)],1)],1)],1)},s=[],c=(n(1249),n(8862),n(7635)),u={components:{ItemGroup:c.Z,ResetSurveyItems:function(){return n.e(947).then(n.bind(n,6947))}},name:"BoardNew",data:function(){return{reference:"",nomenclature:"",location:"",typeBoard:null,ability:"",brand:"",brandItems:["ABB","SQUARE D","SIEMENS","BTICINO","SCHNEIDER ELECTRIC","FEDERAL PACIFIC"],typeBoardItems:["Distribución","Alumbrado y control","Fuerza"],result:[],value:"",dialog:!1,editDialog:!1,dataEdit:null}},computed:(0,a.Z)((0,a.Z)({},(0,r.rn)({data:function(t){return t.customers.findCustomer}})),{},{textDialog:function(){return this.editDialog?"Editar Tablero":"Nuevo Tablero"},textSave:function(){return this.editDialog?"Guardar":"Crear"},items:function(){return this.data.boardList.data},config:function(){return this.data.boardList.config}}),methods:(0,a.Z)((0,a.Z)({},(0,r.nv)({getItem:"customers/search",saveItem:"customers/save"})),{},{show:function(){return this.items.length+1},action:function(){this.editDialog?this.update():this.create()},update:function(){var t=this,e=this.data.boardList.data.map((function(e){return e.reference==t.reference?(0,a.Z)((0,a.Z)({},e),{},{nomenclature:t.nomenclature,location:t.location,result:t.result,typeBoard:t.typeBoard,ability:t.ability,brand:t.brand}):e}));this.data.boardList.data=e,this.saveItem(this.data),this.dialog=!1,this.emptyData()},create:function(){var t=this.organizeData();this.data.boardList.data.push(t),this.saveItem(this.data),this.emptyData(),this.dialog=!1},newBoard:function(){this.emptyData(),this.editDialog=!1,this.reference=this.items.length+1,this.result=JSON.parse(JSON.stringify(this.config))},openBoard:function(t){this.editDialog=!0,this.dialog=!0,this.toAssign(t),this.result=t.result},organizeData:function(){return{reference:this.reference,nomenclature:this.nomenclature,location:this.location,result:this.result,typeBoard:this.typeBoard,ability:this.ability,brand:this.brand}},emptyData:function(){this.nomenclature="",this.location="",this.typeBoard=null,this.ability="",this.brand="",this.value=null},toAssign:function(t){this.reference=t.reference,this.nomenclature=t.nomenclature,this.location=t.location,this.typeBoard=t.typeBoard?t.typeBoard:null,this.ability=t.ability?t.ability:"",this.brand=t.brand?t.brand:""}})},d=u,m=n(1001),f=n(3453),h=n.n(f),v=n(3497),p=n(6190),b=n(4145),I=n(4886),g=n(2118),B=n(9930),y=n(5125),x=n(4324),C=n(1713),Z=n(1399),S=n(7423),V=n(3687),_=n(7808),D=n(7953),k=(0,m.Z)(d,l,s,!1,null,"b6eca3a0",null),T=k.exports;h()(k,{VAppBar:v.Z,VBtn:p.Z,VCard:b.Z,VCardText:I.ZB,VCardTitle:I.EB,VContainer:g.Z,VDialog:B.Z,VForm:y.Z,VIcon:x.Z,VRow:C.Z,VSelect:Z.Z,VSheet:S.Z,VSpacer:V.Z,VTextField:_.Z,VToolbarItems:D.lj,VToolbarTitle:D.qW});var E={components:{BoardNew:T,BtnActionSection:function(){return n.e(311).then(n.bind(n,5311))}},name:"BoardList",computed:(0,a.Z)((0,a.Z)({},(0,r.rn)({data:function(t){return t.customers.findCustomer}})),{},{items:function(){return this.data.boardList.data},config:function(){return this.data.boardList.config}}),methods:{open:function(t){this.$refs.board.openBoard(t)}}},L=E,N=n(4525),w=n(5187),A=n(8251),P=n(4924),R=(0,m.Z)(L,i,o,!1,null,null,null),O=R.exports;h()(R,{VBtn:p.Z,VCard:b.Z,VListItem:N.Z,VListItemAction:w.Z,VListItemContent:A.km,VListItemSubtitle:A.oZ,VListItemTitle:A.V9,VVirtualScroll:P.Z})}}]);
//# sourceMappingURL=618-legacy.6e10bf5f.js.map