"use strict";(self["webpackChunkuviereport"]=self["webpackChunkuviereport"]||[]).push([[787],{7635:function(t,e,n){n.d(e,{Z:function(){return l}});var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",t._l(t.itemsPro,(function(t,e){return n("div",{key:e},[n(t.content,{tag:"component",attrs:{template:t},on:{setOption:function(e){return t.value=e},setModel:function(e){return t.model=e},setNote:function(e){return t.note=e},setOverallPhoto:function(e){return t.overallPhoto=e},setItemsT:function(e){return t.itemsT=e},setDate:function(e){return t.date=e}}})],1)})),0)},o=[],a=(n(1539),n(8783),n(3948),{components:{ItemBasic:function(){return n.e(566).then(n.bind(n,1566))},ItemBasicSelect:function(){return n.e(757).then(n.bind(n,3757))},ItemNote:function(){return n.e(724).then(n.bind(n,8724))},ItemThermography:function(){return n.e(289).then(n.bind(n,6289))},ItemBasicSelectNote:function(){return n.e(847).then(n.bind(n,3847))},ItemBasicDate:function(){return n.e(97).then(n.bind(n,4097))},ItemThermographicPhotos:function(){return n.e(864).then(n.bind(n,2864))},ItemOilLeaks:function(){return n.e(506).then(n.bind(n,1506))},ItemLand:function(){return n.e(51).then(n.bind(n,51))}},name:"ItemGroup",props:{config:Array},watch:{itemsPro:function(t){this.init(),console.log("Se ha actualizado")}},created:function(){this.init()},data:function(){return{itemsPro:[],items:[{content:"ItemBasic",description:"Espacio de trabajo alrededor de equipo eléctrico. ",nom:"110-26",value:null},{content:"ItemBasic",description:"Ubicación con respecto a material fácilmente inflamable. ",nom:"408-17",value:null},{content:"ItemBasic",description:"Señales de advertencia contra arco eléctrico.",nom:"110-16",value:null},{content:"ItemBasic",description:"Identificación de los medios de desconexión.",nom:"110-22",value:null},{content:"ItemBasic",description:"Identificación de campo requerido. a) Directorio del circuito.",nom:"408-4",value:null},{content:"ItemBasic",description:"Aberturas sin utilizar.",nom:"408-7",value:null},{content:"ItemBasic",description:"Paneles.",nom:"408-50",value:null},{content:"ItemBasic",description:"Protección contra sobrecorriente.",nom:"408-36",value:null},{content:"ItemBasic",description:"Puesta a tierra de los tableros de alumbrado y control.",nom:"408-40",value:null},{content:"ItemBasic",description:"Ubicación en el circuito.",nom:"240-21",value:null},{content:"ItemBasic",description:"Conexiones eléctricas. a) Terminales.",nom:"110-14",value:null,model:"PREVENTIVO",items:["PREVENTIVO","CORRECTIVO"]},{content:"ItemThermography",description:"Conexiones eléctricas. c) Limitaciones por temperatura.",nom:"110-14",value:null,model:"Interruptor principal",items:["Interruptor principal","Interruptor derivado","Conductor alimentador","Conductor derivado","Borne","Zapata","Barra colectora","Barra de neutros","Barra de tierras","Gabinete","Empalme, terminal"]},{content:"ItemBasic",description:"Integridad de los equipos y de las conexiones.",nom:"110-12",value:null},{content:"ItemBasic",description:"Tubo conduit de polietileno.",nom:"364-4",value:null},{content:"ItemBasic",description:"Cables y cordones flexibles.",nom:"400-8",value:null},{content:"ItemBasic",description:"Instalación de canalizaciones.",nom:"300-18",value:null},{content:"ItemNote",description:"",nom:"Notas",value:null}],response:[]}},methods:{init:function(){this.itemsPro=this.config,console.log(this.itemsPro)},build:function(){}}}),r=a,s=n(1001),c=(0,s.Z)(r,i,o,!1,null,null,null),l=c.exports},787:function(t,e,n){n.r(e),n.d(e,{default:function(){return O}});var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-card",{staticClass:"mx-auto",attrs:{elevation:"0",color:"#F2F4F4",height:"100vh"}},[0===t.items.length?n("div",[n("p",{staticClass:"text-center"},[t._v("..Sin Subestaciones...")])]):n("div",[n("v-virtual-scroll",{staticStyle:{height:"91vh"},attrs:{items:t.items,"item-height":80},scopedSlots:t._u([{key:"default",fn:function(e){var i=e.item;return[n("v-card",{attrs:{elevation:"0",outlined:""}},[n("div",[n("v-list-item",{on:{click:function(e){return t.open(i)}}},[n("v-list-item-action",[n("v-btn",{staticClass:"white--text",attrs:{fab:"",small:"",depressed:"",color:"#273746"}},[t._v(" "+t._s(i.reference)+" ")])],1),n("v-list-item-content",[n("v-list-item-title",[n("strong",[t._v(" "+t._s(i.location))])]),n("v-list-item-subtitle",[t._v(t._s(i.name))])],1),n("BtnActionSection",{attrs:{item:i,nameEdit:t.nameEdit},on:{newItem:function(e){return t.$refs.form.create()}}})],1)],1)])]}}])})],1),n("board-new",{ref:"form"})],1)},o=[],a=n(5082),r=(n(1539),n(8783),n(3948),n(629)),s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-row",{attrs:{justify:"center"}},[n("v-dialog",{attrs:{fullscreen:"","hide-overlay":"",transition:"dialog-bottom-transition"},scopedSlots:t._u([{key:"activator",fn:function(e){var i=e.on,o=e.attrs;return[n("v-btn",t._g(t._b({attrs:{fab:"",dark:"",color:"rgba(39,55,70,1)",fixed:"",right:"",bottom:""},on:{click:function(e){return t.newForm()}}},"v-btn",o,!1),i),[n("v-icon",{attrs:{size:"23",color:"#D5DBDB",dark:""}},[t._v("add")])],1)]}}]),model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[n("v-card",{attrs:{color:"#F2F4F4"}},[n("v-card",{staticClass:"overflow-hidden"},[n("v-app-bar",{attrs:{absolute:"",dark:"",color:"primary","elevate-on-scroll":"","scroll-target":"#scrolling-techniques-7"}},[n("v-btn",{attrs:{icon:"",dark:""},on:{click:function(e){t.dialog=!1}}},[n("v-icon",[t._v("arrow_back")])],1),n("v-toolbar-title",[t._v(t._s(t.textDialog))]),n("v-spacer"),n("v-toolbar-items",[n("v-btn",{attrs:{dark:"",text:""},on:{click:function(e){return t.action()}}},[t._v(" "+t._s(t.textSave)+" ")])],1)],1),n("v-sheet",{staticClass:"overflow-y-auto",staticStyle:{color:"#273746"},attrs:{id:"scrolling-techniques-7",height:"100vh"}},[n("v-container",[n("v-card-title",{staticClass:"text-h5",staticStyle:{color:"#273746"}},[t._v(" Nueva Area ")]),n("v-card-text",{staticStyle:{color:"#273746"}},[t._v("Datos del Area")]),n("v-form",{ref:"form"},[n("v-text-field",{staticClass:"text-capitalize",attrs:{outlined:"",disabled:"",label:"Referencia",required:""},model:{value:t.reference,callback:function(e){t.reference=e},expression:"reference"}}),n("v-text-field",{attrs:{outlined:"",label:"Nombre de la subestación",required:""},model:{value:t.name,callback:function(e){t.name=e},expression:"name"}}),n("v-text-field",{attrs:{outlined:"",label:"Localización",required:""},model:{value:t.location,callback:function(e){t.location=e},expression:"location"}}),t.editDialog?n("ResetSurveyItems",{attrs:{configDefault:JSON.parse(JSON.stringify(this.config))},on:{show:function(e){t.dialog=e},itemsResult:function(e){t.result=e}}}):t._e(),t.dialog?n("item-group",{attrs:{config:t.result}}):t._e()],1)],1)],1)],1)],1)],1)],1)},c=[],l=(n(8309),n(8862),n(1249),n(7635)),u={components:{ItemGroup:l.Z,ResetSurveyItems:function(){return n.e(947).then(n.bind(n,6947))}},name:"SubstationsNew",data:function(){return{editDialog:!1,value:null,reference:1,nomenclature:"",location:"",name:"",dialog:!1,nameEdit:"substationsList"}},computed:(0,a.Z)((0,a.Z)({},(0,r.rn)({data:function(t){return t.customers.findCustomer}})),{},{items:function(){return this.data[this.nameEdit].data},config:function(){return this.data[this.nameEdit].config},textDialog:function(){return this.editDialog?"Editar Subestación":"Nueva Subestación"},textSave:function(){return this.editDialog?"Guardar":"Crear"}}),methods:(0,a.Z)((0,a.Z)({},(0,r.nv)({getItem:"customers/search",saveItem:"customers/save"})),{},{action:function(){this.editDialog?this.update():this.create()},toAssign:function(t){this.reference=t.reference,this.nomenclature=t.nomenclature,this.location=t.location,this.name=t.name},emptyData:function(){this.nomenclature="",this.location="",this.name="",this.value=null},newForm:function(){console.log("hola"),this.emptyData(),this.editDialog=!1,this.reference=this.items.length+1,this.result=JSON.parse(JSON.stringify(this.config))},openForm:function(t){console.log("se abre.."),this.editDialog=!0,this.dialog=!0,console.log(t),this.toAssign(t),this.result=t.result},update:function(){var t=this,e=this.data[this.nameEdit].data.map((function(e){return e.reference==t.reference?(0,a.Z)((0,a.Z)({},e),{},{location:t.location,result:t.result,name:t.name}):e}));this.data[this.nameEdit].data=e,this.saveItem(this.data),this.dialog=!1,this.emptyData()},create:function(){var t={reference:this.reference,location:this.location,result:this.result,name:this.name};this.data[this.nameEdit].data.push(t),this.saveItem(this.data),this.emptyData(),this.dialog=!1}})},d=u,m=n(1001),f=n(3453),h=n.n(f),v=n(3497),p=n(6190),b=n(4145),g=n(4886),I=n(2118),B=n(9930),Z=n(5125),S=n(4324),V=n(1713),x=n(7423),_=n(3687),y=n(7808),C=n(7953),k=(0,m.Z)(d,s,c,!1,null,"41bd651a",null),E=k.exports;h()(k,{VAppBar:v.Z,VBtn:p.Z,VCard:b.Z,VCardText:g.ZB,VCardTitle:g.EB,VContainer:I.Z,VDialog:B.Z,VForm:Z.Z,VIcon:S.Z,VRow:V.Z,VSheet:x.Z,VSpacer:_.Z,VTextField:y.Z,VToolbarItems:C.lj,VToolbarTitle:C.qW});var D={components:{BoardNew:E,BtnActionSection:function(){return n.e(610).then(n.bind(n,8610))}},name:"SubstationsList",data:function(){return{nameEdit:"substationsList"}},computed:(0,a.Z)((0,a.Z)({},(0,r.rn)({data:function(t){return t.customers.findCustomer}})),{},{items:function(){return this.data[this.nameEdit].data},config:function(){return this.data[this.nameEdit].config}}),methods:{open:function(t){this.$refs.form.openForm(t)}}},T=D,w=n(4525),N=n(5187),P=n(8251),F=n(4924),L=(0,m.Z)(T,i,o,!1,null,null,null),O=L.exports;h()(L,{VBtn:p.Z,VCard:b.Z,VListItem:w.Z,VListItemAction:N.Z,VListItemContent:P.km,VListItemSubtitle:P.oZ,VListItemTitle:P.V9,VVirtualScroll:F.Z})}}]);
//# sourceMappingURL=787-legacy.153221c2.js.map