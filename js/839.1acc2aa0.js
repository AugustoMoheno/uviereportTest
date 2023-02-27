"use strict";(self["webpackChunkuviereport"]=self["webpackChunkuviereport"]||[]).push([[839],{6756:function(t,e,i){i.d(e,{Z:function(){return c}});var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",t._l(t.itemsPro,(function(t,e){return i("div",{key:e},[i(t.content,{tag:"component",attrs:{template:t},on:{setOption:function(e){return t.value=e},setModel:function(e){return t.model=e},setNote:function(e){return t.note=e},setOverallPhoto:function(e){return t.overallPhoto=e},setItemsT:function(e){return t.itemsT=e},setDate:function(e){return t.date=e}}})],1)})),0)},n=[],o={components:{ItemBasic:()=>i.e(594).then(i.bind(i,2594)),ItemBasicSelect:()=>i.e(421).then(i.bind(i,4421)),ItemNote:()=>i.e(513).then(i.bind(i,3513)),ItemThermography:()=>i.e(290).then(i.bind(i,6290)),ItemBasicSelectNote:()=>i.e(397).then(i.bind(i,9397)),ItemBasicDate:()=>i.e(705).then(i.bind(i,3705)),ItemThermographicPhotos:()=>i.e(774).then(i.bind(i,6774)),ItemOilLeaks:()=>i.e(532).then(i.bind(i,3532)),ItemLand:()=>i.e(249).then(i.bind(i,1249))},name:"ItemGroup",props:{config:Array},watch:{itemsPro(t){this.init(),console.log("Se ha actualizado")}},created(){this.init()},data(){return{itemsPro:[],items:[{content:"ItemBasic",description:"Espacio de trabajo alrededor de equipo eléctrico. ",nom:"110-26",value:null},{content:"ItemBasic",description:"Ubicación con respecto a material fácilmente inflamable. ",nom:"408-17",value:null},{content:"ItemBasic",description:"Señales de advertencia contra arco eléctrico.",nom:"110-16",value:null},{content:"ItemBasic",description:"Identificación de los medios de desconexión.",nom:"110-22",value:null},{content:"ItemBasic",description:"Identificación de campo requerido. a) Directorio del circuito.",nom:"408-4",value:null},{content:"ItemBasic",description:"Aberturas sin utilizar.",nom:"408-7",value:null},{content:"ItemBasic",description:"Paneles.",nom:"408-50",value:null},{content:"ItemBasic",description:"Protección contra sobrecorriente.",nom:"408-36",value:null},{content:"ItemBasic",description:"Puesta a tierra de los tableros de alumbrado y control.",nom:"408-40",value:null},{content:"ItemBasic",description:"Ubicación en el circuito.",nom:"240-21",value:null},{content:"ItemBasic",description:"Conexiones eléctricas. a) Terminales.",nom:"110-14",value:null,model:"PREVENTIVO",items:["PREVENTIVO","CORRECTIVO"]},{content:"ItemThermography",description:"Conexiones eléctricas. c) Limitaciones por temperatura.",nom:"110-14",value:null,model:"Interruptor principal",items:["Interruptor principal","Interruptor derivado","Conductor alimentador","Conductor derivado","Borne","Zapata","Barra colectora","Barra de neutros","Barra de tierras","Gabinete","Empalme, terminal"]},{content:"ItemBasic",description:"Integridad de los equipos y de las conexiones.",nom:"110-12",value:null},{content:"ItemBasic",description:"Tubo conduit de polietileno.",nom:"364-4",value:null},{content:"ItemBasic",description:"Cables y cordones flexibles.",nom:"400-8",value:null},{content:"ItemBasic",description:"Instalación de canalizaciones.",nom:"300-18",value:null},{content:"ItemNote",description:"",nom:"Notas",value:null}],response:[]}},methods:{init(){this.itemsPro=this.config,console.log(this.itemsPro)},build(){}}},r=o,l=i(3736),s=(0,l.Z)(r,a,n,!1,null,null,null),c=s.exports},1839:function(t,e,i){i.r(e),i.d(e,{default:function(){return F}});var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-card",{staticClass:"mx-auto",attrs:{elevation:"0",color:"#F2F4F4",height:"100vh"}},[0===t.items.length?i("div",[i("p",{staticClass:"text-center"},[t._v("..Sin Tableros...")])]):t._e(),i("div",[i("v-virtual-scroll",{staticStyle:{height:"91vh"},attrs:{items:t.items,"item-height":80},scopedSlots:t._u([{key:"default",fn:function(e){var a=e.item;return[i("v-card",{attrs:{elevation:"0",outlined:""}},[i("div",[i("v-list-item",{on:{click:function(e){return t.open(a)}}},[i("v-list-item-action",[i("v-btn",{staticClass:"white--text",attrs:{fab:"",small:"",depressed:"",color:"#273746"}},[t._v(" "+t._s(a.reference)+" ")])],1),i("v-list-item-content",[i("v-list-item-title",[i("strong",[t._v(" "+t._s(a.nomenclature))])]),i("v-list-item-subtitle",[t._v(t._s(a.location))])],1),i("v-list-item-action",[i("v-icon",[t._v(" toc ")])],1)],1)],1)])]}}])})],1),i("board-new",{ref:"board"})],1)},n=[],o=i(629),r=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-row",{attrs:{justify:"center"}},[i("v-dialog",{attrs:{fullscreen:"","hide-overlay":"",transition:"dialog-bottom-transition"},scopedSlots:t._u([{key:"activator",fn:function(e){var a=e.on,n=e.attrs;return[i("v-btn",t._g(t._b({attrs:{fab:"",dark:"",color:"rgba(39,55,70,1)",fixed:"",right:"",bottom:""},on:{click:function(e){return t.newBoard()}}},"v-btn",n,!1),a),[i("v-icon",{attrs:{size:"23",color:"#D5DBDB",dark:""}},[t._v("add")])],1)]}}]),model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[i("v-card",{attrs:{color:"#F2F4F4"}},[i("v-card",{staticClass:"overflow-hidden"},[i("v-app-bar",{staticStyle:{"z-index":"20001 !important"},attrs:{absolute:"",dark:"",color:"primary","elevate-on-scroll":"","scroll-target":"#scrolling-techniques-7"}},[i("v-btn",{attrs:{icon:"",dark:""},on:{click:function(e){t.dialog=!1}}},[i("v-icon",[t._v("arrow_back")])],1),i("v-toolbar-title",[t._v(t._s(t.textDialog))]),i("v-spacer"),i("v-toolbar-items",[i("v-btn",{attrs:{dark:"",text:""},on:{click:function(e){return t.action()}}},[t._v(" "+t._s(t.textSave)+" ")])],1)],1),i("v-sheet",{staticClass:"overflow-y-auto",staticStyle:{color:"#273746"},attrs:{id:"scrolling-techniques-7","max-height":"100vh"}},[i("v-container",[i("v-card-title",{staticClass:"text-h5",staticStyle:{color:"#273746"}},[t._v(" Nuevo Tablero ")]),i("v-card-text",{staticStyle:{color:"#273746"}},[t._v("Datos del tablero")]),i("v-form",{ref:"form"},[i("v-text-field",{staticClass:"text-capitalize",attrs:{outlined:"",disabled:"",label:"Referencia",required:""},model:{value:t.reference,callback:function(e){t.reference=e},expression:"reference"}}),i("v-text-field",{attrs:{outlined:"",label:"Nomenclatura",required:""},model:{value:t.nomenclature,callback:function(e){t.nomenclature=e},expression:"nomenclature"}}),i("v-text-field",{attrs:{outlined:"",label:"Localización",required:""},model:{value:t.location,callback:function(e){t.location=e},expression:"location"}}),i("v-select",{attrs:{outlined:"",items:t.typeBoardItems,label:"Tipo de tablero"},model:{value:t.typeBoard,callback:function(e){t.typeBoard=e},expression:"typeBoard"}}),i("v-text-field",{attrs:{outlined:"",label:"Capacidad",required:""},model:{value:t.ability,callback:function(e){t.ability=e},expression:"ability"}}),i("v-select",{attrs:{outlined:"",items:t.brandItems,label:"MARCA"},model:{value:t.brand,callback:function(e){t.brand=e},expression:"brand"}})],1),t.dialog?i("item-group",{attrs:{config:t.result}}):t._e()],1)],1)],1)],1)],1)],1)},l=[],s=i(6756),c={components:{ItemGroup:s.Z},name:"BoardNew",data(){return{reference:"",nomenclature:"",location:"",typeBoard:null,ability:"",brand:"",brandItems:["ABB","SQUARE D","SIEMENS","BTICINO","SCHNEIDER ELECTRIC","FEDERAL PACIFIC"],typeBoardItems:["Distribución","Alumbrado y control","Fuerza"],result:[],value:"",dialog:!1,editDialog:!1,dataEdit:null}},computed:{...(0,o.rn)({data:t=>t.customers.findCustomer}),textDialog(){return this.editDialog?"Editar Tablero":"Nuevo Tablero"},textSave(){return this.editDialog?"Guardar":"Crear"},items(){return this.data.boardList.data},config(){return this.data.boardList.config}},methods:{...(0,o.nv)({getItem:"customers/search",saveItem:"customers/save"}),show(){return this.items.length+1},action(){this.editDialog?this.update():this.create()},update(){const t=this.data.boardList.data.map((t=>t.reference==this.reference?{...t,nomenclature:this.nomenclature,location:this.location,result:this.result,typeBoard:this.typeBoard,ability:this.ability,brand:this.brand}:t));this.data.boardList.data=t,this.saveItem(this.data),this.dialog=!1,this.emptyData()},create(){const t=this.organizeData();this.data.boardList.data.push(t),this.saveItem(this.data),this.emptyData(),this.dialog=!1},newBoard(){this.emptyData(),this.editDialog=!1,this.reference=this.items.length+1,this.result=JSON.parse(JSON.stringify(this.config))},openBoard(t){this.editDialog=!0,this.dialog=!0,this.toAssign(t),this.result=t.result},organizeData(){return{reference:this.reference,nomenclature:this.nomenclature,location:this.location,result:this.result,typeBoard:this.typeBoard,ability:this.ability,brand:this.brand}},emptyData(){this.nomenclature="",this.location="",this.typeBoard=null,this.ability="",this.brand="",this.value=null},toAssign(t){this.reference=t.reference,this.nomenclature=t.nomenclature,this.location=t.location,this.typeBoard=t.typeBoard?t.typeBoard:null,this.ability=t.ability?t.ability:"",this.brand=t.brand?t.brand:""}}},d=c,u=i(3736),m=i(3453),h=i.n(m),v=i(3497),p=i(6190),b=i(4145),f=i(4886),I=i(2118),g=i(9930),B=i(5125),y=i(4324),x=i(1713),C=i(1399),V=i(7423),_=i(3687),k=i(7808),D=i(7953),Z=(0,u.Z)(d,r,l,!1,null,"eb0ec828",null),S=Z.exports;h()(Z,{VAppBar:v.Z,VBtn:p.Z,VCard:b.Z,VCardText:f.ZB,VCardTitle:f.EB,VContainer:I.Z,VDialog:g.Z,VForm:B.Z,VIcon:y.Z,VRow:x.Z,VSelect:C.Z,VSheet:V.Z,VSpacer:_.Z,VTextField:k.Z,VToolbarItems:D.lj,VToolbarTitle:D.qW});var T={components:{BoardNew:S},name:"BoardList",computed:{...(0,o.rn)({data:t=>t.customers.findCustomer}),items(){return this.data.boardList.data},config(){return this.data.boardList.config}},methods:{open(t){this.$refs.board.openBoard(t)}}},E=T,L=i(4525),N=i(5187),w=i(8251),P=i(4924),A=(0,u.Z)(E,a,n,!1,null,null,null),F=A.exports;h()(A,{VBtn:p.Z,VCard:b.Z,VIcon:y.Z,VListItem:L.Z,VListItemAction:N.Z,VListItemContent:w.km,VListItemSubtitle:w.oZ,VListItemTitle:w.V9,VVirtualScroll:P.Z})}}]);
//# sourceMappingURL=839.1acc2aa0.js.map