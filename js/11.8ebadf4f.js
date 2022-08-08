"use strict";(self["webpackChunkuviereport"]=self["webpackChunkuviereport"]||[]).push([[11],{7780:function(t,e,i){i.d(e,{Z:function(){return c}});var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",t._l(t.itemsPro,(function(t,e){return i("div",{key:e},[i(t.content,{tag:"component",attrs:{template:t},on:{setOption:function(e){return t.value=e},setModel:function(e){return t.model=e},setNote:function(e){return t.note=e}}})],1)})),0)},o=[],a={components:{ItemBasic:()=>i.e(203).then(i.bind(i,7203)),ItemBasicSelect:()=>i.e(860).then(i.bind(i,2860)),ItemNote:()=>i.e(193).then(i.bind(i,3193)),ItemThermography:()=>i.e(35).then(i.bind(i,7035)),ItemBasicSelectNote:()=>i.e(601).then(i.bind(i,1601))},name:"ItemGroup",props:{config:Array},watch:{itemsPro(t){this.init(),console.log("Se ha actualizado")}},created(){this.init()},data(){return{itemsPro:[],items:[{content:"ItemBasic",description:"Espacio de trabajo alrededor de equipo eléctrico. ",nom:"110-26",value:null},{content:"ItemBasic",description:"Ubicación con respecto a material fácilmente inflamable. ",nom:"408-17",value:null},{content:"ItemBasic",description:"Señales de advertencia contra arco eléctrico.",nom:"110-16",value:null},{content:"ItemBasic",description:"Identificación de los medios de desconexión.",nom:"110-22",value:null},{content:"ItemBasic",description:"Identificación de campo requerido. a) Directorio del circuito.",nom:"408-4",value:null},{content:"ItemBasic",description:"Aberturas sin utilizar.",nom:"408-7",value:null},{content:"ItemBasic",description:"Paneles.",nom:"408-50",value:null},{content:"ItemBasic",description:"Protección contra sobrecorriente.",nom:"408-36",value:null},{content:"ItemBasic",description:"Puesta a tierra de los tableros de alumbrado y control.",nom:"408-40",value:null},{content:"ItemBasic",description:"Ubicación en el circuito.",nom:"240-21",value:null},{content:"ItemBasic",description:"Conexiones eléctricas. a) Terminales.",nom:"110-14",value:null,model:"PREVENTIVO",items:["PREVENTIVO","CORRECTIVO"]},{content:"ItemThermography",description:"Conexiones eléctricas. c) Limitaciones por temperatura.",nom:"110-14",value:null,model:"Interruptor principal",items:["Interruptor principal","Interruptor derivado","Conductor alimentador","Conductor derivado","Borne","Zapata","Barra colectora","Barra de neutros","Barra de tierras","Gabinete","Empalme, terminal"]},{content:"ItemBasic",description:"Integridad de los equipos y de las conexiones.",nom:"110-12",value:null},{content:"ItemBasic",description:"Tubo conduit de polietileno.",nom:"364-4",value:null},{content:"ItemBasic",description:"Cables y cordones flexibles.",nom:"400-8",value:null},{content:"ItemBasic",description:"Instalación de canalizaciones.",nom:"300-18",value:null},{content:"ItemNote",description:"",nom:"Notas",value:null}],response:[]}},methods:{init(){this.itemsPro=this.config,console.log(this.itemsPro)},build(){}}},r=a,s=i(3736),l=(0,s.Z)(r,n,o,!1,null,null,null),c=l.exports},6011:function(t,e,i){i.r(e),i.d(e,{default:function(){return q}});var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-card",{staticClass:"mx-auto",attrs:{elevation:"0",color:"#F2F4F4",height:"100vh"}},[0===t.items.length?i("div",[i("p",{staticClass:"text-center"},[t._v("..Sin Tableros...")])]):t._e(),i("div",[i("v-virtual-scroll",{staticStyle:{height:"91vh"},attrs:{items:t.items,"item-height":80},scopedSlots:t._u([{key:"default",fn:function(e){var n=e.item;return[i("v-card",{attrs:{elevation:"0",outlined:""}},[i("div",[i("v-list-item",{on:{click:function(e){return t.open(n)}}},[i("v-list-item-action",[i("v-btn",{staticClass:"white--text",attrs:{fab:"",small:"",depressed:"",color:"#273746"}},[t._v(" "+t._s(n.reference)+" ")])],1),i("v-list-item-content",[i("v-list-item-title",[i("strong",[t._v(" "+t._s(n.nomenclature))])]),i("v-list-item-subtitle",[t._v(t._s(n.location))])],1),i("v-list-item-action",[i("v-icon",[t._v(" toc ")])],1)],1)],1)])]}}])})],1),i("board-new",{ref:"board"})],1)},o=[],a=i(629),r=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-row",{attrs:{justify:"center"}},[i("v-dialog",{attrs:{fullscreen:"","hide-overlay":"",transition:"dialog-bottom-transition"},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on,o=e.attrs;return[i("v-btn",t._g(t._b({attrs:{fab:"",dark:"",color:"rgba(39,55,70,1)",fixed:"",right:"",bottom:""},on:{click:function(e){return t.newBoard()}}},"v-btn",o,!1),n),[i("v-icon",{attrs:{size:"23",color:"#D5DBDB",dark:""}},[t._v("add")])],1)]}}]),model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[i("v-card",{attrs:{color:"#F2F4F4"}},[i("v-card",{staticClass:"overflow-hidden"},[i("v-app-bar",{attrs:{absolute:"",dark:"",color:"primary","elevate-on-scroll":"","scroll-target":"#scrolling-techniques-7"}},[i("v-btn",{attrs:{icon:"",dark:""},on:{click:function(e){t.dialog=!1}}},[i("v-icon",[t._v("arrow_back")])],1),i("v-toolbar-title",[t._v(t._s(t.textDialog))]),i("v-spacer"),i("v-toolbar-items",[i("v-btn",{attrs:{dark:"",text:""},on:{click:function(e){return t.action()}}},[t._v(" "+t._s(t.textSave)+" ")])],1)],1),i("v-sheet",{staticClass:"overflow-y-auto",staticStyle:{color:"#273746"},attrs:{id:"scrolling-techniques-7","max-height":"100vh"}},[i("v-container",[i("v-card-title",{staticClass:"text-h5",staticStyle:{color:"#273746"}},[t._v(" Nuevo Tablero ")]),i("v-card-text",{staticStyle:{color:"#273746"}},[t._v("Datos del tablero")]),i("v-form",{ref:"form"},[i("v-text-field",{staticClass:"text-capitalize",attrs:{outlined:"",disabled:"",label:"Referencia",required:""},model:{value:t.reference,callback:function(e){t.reference=e},expression:"reference"}}),i("v-text-field",{attrs:{outlined:"",label:"Nomenclatura",required:""},model:{value:t.nomenclature,callback:function(e){t.nomenclature=e},expression:"nomenclature"}}),i("v-text-field",{attrs:{outlined:"",label:"Localización",required:""},model:{value:t.location,callback:function(e){t.location=e},expression:"location"}})],1),t.dialog?i("item-group",{attrs:{config:t.result}}):t._e()],1)],1)],1)],1)],1)],1)},s=[],l=i(7780),c={components:{ItemGroup:l.Z},name:"BoardNew",data(){return{reference:"",nomenclature:"",location:"",result:[],value:"",dialog:!1,editDialog:!1,dataEdit:null}},computed:{...(0,a.rn)({data:t=>t.customers.findCustomer}),textDialog(){return this.editDialog?"Editar Tablero":"Nuevo Tablero"},textSave(){return this.editDialog?"Guardar":"Crear"},items(){return this.data.boardList.data},config(){return this.data.boardList.config}},methods:{...(0,a.nv)({getItem:"customers/search",saveItem:"customers/save"}),show(){return this.items.length+1},action(){this.editDialog?this.update():this.create()},update(){const t=this.data.boardList.data.map((t=>t.reference==this.reference?{...t,nomenclature:this.nomenclature,location:this.location,result:this.result}:t));this.data.boardList.data=t,this.saveItem(this.data),console.log(t),this.dialog=!1,this.emptyData()},create(){const t=this.organizeData();this.data.boardList.data.push(t),this.saveItem(this.data),this.emptyData(),this.dialog=!1},newBoard(){this.emptyData(),this.editDialog=!1,this.reference=this.items.length+1,this.result=JSON.parse(JSON.stringify(this.config))},openBoard(t){this.editDialog=!0,this.dialog=!0,this.toAssign(t),this.result=t.result},organizeData(){return{reference:this.reference,nomenclature:this.nomenclature,location:this.location,result:this.result}},emptyData(){this.nomenclature="",this.location="",this.value=null},toAssign(t){this.reference=t.reference,this.nomenclature=t.nomenclature,this.location=t.location}}},u=c,d=i(3736),m=i(3453),v=i.n(m),h=i(6986),p=i(680),f=i(2371),b=i(7118),g=i(9846),I=i(7336),B=i(6232),V=i(6428),x=i(2877),_=i(3385),C=i(9762),Z=i(5978),k=i(7921),y=(0,d.Z)(u,r,s,!1,null,"86335f8c",null),D=y.exports;v()(y,{VAppBar:h.Z,VBtn:p.Z,VCard:f.Z,VCardText:b.ZB,VCardTitle:b.EB,VContainer:g.Z,VDialog:I.Z,VForm:B.Z,VIcon:V.Z,VRow:x.Z,VSheet:_.Z,VSpacer:C.Z,VTextField:Z.Z,VToolbarItems:k.lj,VToolbarTitle:k.qW});var S={components:{BoardNew:D},name:"BoardList",computed:{...(0,a.rn)({data:t=>t.customers.findCustomer}),items(){return this.data.boardList.data},config(){return this.data.boardList.config}},methods:{open(t){this.$refs.board.openBoard(t)}}},T=S,w=i(7620),L=i(3099),N=i(6451),E=i(5683),P=(0,d.Z)(T,n,o,!1,null,null,null),q=P.exports;v()(P,{VBtn:p.Z,VCard:f.Z,VIcon:V.Z,VListItem:w.Z,VListItemAction:L.Z,VListItemContent:N.km,VListItemSubtitle:N.oZ,VListItemTitle:N.V9,VVirtualScroll:E.Z})}}]);
//# sourceMappingURL=11.8ebadf4f.js.map