"use strict";(self["webpackChunkuviereport"]=self["webpackChunkuviereport"]||[]).push([[63],{6756:function(t,e,i){i.d(e,{Z:function(){return c}});var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",t._l(t.itemsPro,(function(t,e){return i("div",{key:e},[i(t.content,{tag:"component",attrs:{template:t},on:{setOption:function(e){return t.value=e},setModel:function(e){return t.model=e},setNote:function(e){return t.note=e},setOverallPhoto:function(e){return t.overallPhoto=e},setItemsT:function(e){return t.itemsT=e},setDate:function(e){return t.date=e}}})],1)})),0)},a=[],o={components:{ItemBasic:()=>i.e(594).then(i.bind(i,2594)),ItemBasicSelect:()=>i.e(421).then(i.bind(i,4421)),ItemNote:()=>i.e(513).then(i.bind(i,3513)),ItemThermography:()=>i.e(290).then(i.bind(i,6290)),ItemBasicSelectNote:()=>i.e(397).then(i.bind(i,9397)),ItemBasicDate:()=>i.e(705).then(i.bind(i,3705)),ItemThermographicPhotos:()=>i.e(774).then(i.bind(i,6774)),ItemOilLeaks:()=>i.e(532).then(i.bind(i,3532)),ItemLand:()=>i.e(249).then(i.bind(i,1249))},name:"ItemGroup",props:{config:Array},watch:{itemsPro(t){this.init(),console.log("Se ha actualizado")}},created(){this.init()},data(){return{itemsPro:[],items:[{content:"ItemBasic",description:"Espacio de trabajo alrededor de equipo eléctrico. ",nom:"110-26",value:null},{content:"ItemBasic",description:"Ubicación con respecto a material fácilmente inflamable. ",nom:"408-17",value:null},{content:"ItemBasic",description:"Señales de advertencia contra arco eléctrico.",nom:"110-16",value:null},{content:"ItemBasic",description:"Identificación de los medios de desconexión.",nom:"110-22",value:null},{content:"ItemBasic",description:"Identificación de campo requerido. a) Directorio del circuito.",nom:"408-4",value:null},{content:"ItemBasic",description:"Aberturas sin utilizar.",nom:"408-7",value:null},{content:"ItemBasic",description:"Paneles.",nom:"408-50",value:null},{content:"ItemBasic",description:"Protección contra sobrecorriente.",nom:"408-36",value:null},{content:"ItemBasic",description:"Puesta a tierra de los tableros de alumbrado y control.",nom:"408-40",value:null},{content:"ItemBasic",description:"Ubicación en el circuito.",nom:"240-21",value:null},{content:"ItemBasic",description:"Conexiones eléctricas. a) Terminales.",nom:"110-14",value:null,model:"PREVENTIVO",items:["PREVENTIVO","CORRECTIVO"]},{content:"ItemThermography",description:"Conexiones eléctricas. c) Limitaciones por temperatura.",nom:"110-14",value:null,model:"Interruptor principal",items:["Interruptor principal","Interruptor derivado","Conductor alimentador","Conductor derivado","Borne","Zapata","Barra colectora","Barra de neutros","Barra de tierras","Gabinete","Empalme, terminal"]},{content:"ItemBasic",description:"Integridad de los equipos y de las conexiones.",nom:"110-12",value:null},{content:"ItemBasic",description:"Tubo conduit de polietileno.",nom:"364-4",value:null},{content:"ItemBasic",description:"Cables y cordones flexibles.",nom:"400-8",value:null},{content:"ItemBasic",description:"Instalación de canalizaciones.",nom:"300-18",value:null},{content:"ItemNote",description:"",nom:"Notas",value:null}],response:[]}},methods:{init(){this.itemsPro=this.config,console.log(this.itemsPro)},build(){}}},r=o,s=i(3736),l=(0,s.Z)(r,n,a,!1,null,null,null),c=l.exports},2063:function(t,e,i){i.r(e),i.d(e,{default:function(){return L}});var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-card",{staticClass:"mx-auto",attrs:{elevation:"0",color:"#F2F4F4",height:"100vh"}},[0===t.items.length?i("div",[i("p",{staticClass:"text-center"},[t._v("..Sin Acometidas...")])]):i("div",[i("v-virtual-scroll",{staticStyle:{height:"91vh"},attrs:{items:t.items,"item-height":80},scopedSlots:t._u([{key:"default",fn:function(e){var n=e.item;return[i("v-card",{attrs:{elevation:"0",outlined:""}},[i("div",[i("v-list-item",{on:{click:function(e){return t.open(n)}}},[i("v-list-item-action",[i("v-btn",{staticClass:"white--text",attrs:{fab:"",small:"",depressed:"",color:"#273746"}},[t._v(" "+t._s(n.reference)+" ")])],1),i("v-list-item-content",[i("v-list-item-title",[i("strong",[t._v(" "+t._s(n.location))])]),i("v-list-item-subtitle",[t._v(t._s(n.name))])],1),i("v-list-item-action",[i("v-icon",[t._v(" toc ")])],1)],1)],1)])]}}])})],1),i("board-new",{ref:"form"})],1)},a=[],o=i(629),r=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-row",{attrs:{justify:"center"}},[i("v-dialog",{attrs:{fullscreen:"","hide-overlay":"",transition:"dialog-bottom-transition"},scopedSlots:t._u([{key:"activator",fn:function(e){var n=e.on,a=e.attrs;return[i("v-btn",t._g(t._b({attrs:{fab:"",dark:"",color:"rgba(39,55,70,1)",fixed:"",right:"",bottom:""},on:{click:function(e){return t.newForm()}}},"v-btn",a,!1),n),[i("v-icon",{attrs:{size:"23",color:"#D5DBDB",dark:""}},[t._v("add")])],1)]}}]),model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[i("v-card",{attrs:{color:"#F2F4F4"}},[i("v-card",{staticClass:"overflow-hidden"},[i("v-app-bar",{staticStyle:{"z-index":"20001 !important"},attrs:{absolute:"",dark:"",color:"primary","elevate-on-scroll":"","scroll-target":"#scrolling-techniques-7"}},[i("v-btn",{attrs:{icon:"",dark:""},on:{click:function(e){t.dialog=!1}}},[i("v-icon",[t._v("arrow_back")])],1),i("v-toolbar-title",[t._v(t._s(t.textDialog))]),i("v-spacer"),i("v-toolbar-items",[i("v-btn",{attrs:{dark:"",text:""},on:{click:function(e){return t.action()}}},[t._v(" "+t._s(t.textSave)+" ")])],1)],1),i("v-sheet",{staticClass:"overflow-y-auto",staticStyle:{color:"#273746"},attrs:{id:"scrolling-techniques-7",height:"100vh"}},[i("v-container",[i("v-card-title",{staticClass:"text-h5",staticStyle:{color:"#273746"}},[t._v(" Nueva Area ")]),i("v-card-text",{staticStyle:{color:"#273746"}},[t._v("Datos de Acometida")]),i("v-form",{ref:"form"},[i("v-text-field",{staticClass:"text-capitalize",attrs:{outlined:"",disabled:"",label:"Referencia",required:""},model:{value:t.reference,callback:function(e){t.reference=e},expression:"reference"}}),i("v-text-field",{attrs:{outlined:"",label:"Localización",required:""},model:{value:t.location,callback:function(e){t.location=e},expression:"location"}}),i("v-text-field",{attrs:{outlined:"",label:"Nomenclatura",required:""},model:{value:t.nomenclature,callback:function(e){t.nomenclature=e},expression:"nomenclature"}}),t.dialog?i("item-group",{attrs:{config:t.result}}):t._e()],1)],1)],1)],1)],1)],1)],1)},s=[],l=i(6756),c={components:{ItemGroup:l.Z},name:"RushNew",data(){return{editDialog:!1,value:null,reference:1,nomenclature:"",location:"",name:"",dialog:!1,nameEdit:"rushList"}},computed:{...(0,o.rn)({data:t=>t.customers.findCustomer}),items(){return this.data[this.nameEdit].data},config(){return this.data[this.nameEdit].config},textDialog(){return this.editDialog?"Editar Acometida":"Nueva Acometida"},textSave(){return this.editDialog?"Guardar":"Crear"}},methods:{...(0,o.nv)({getItem:"customers/search",saveItem:"customers/save"}),action(){this.editDialog?this.update():this.create()},toAssign(t){this.reference=t.reference,this.nomenclature=t.nomenclature,this.location=t.location,this.name=t.name},emptyData(){this.nomenclature="",this.location="",this.name="",this.value=null},newForm(){this.emptyData(),this.editDialog=!1,this.reference=this.items.length+1,this.result=JSON.parse(JSON.stringify(this.config))},openForm(t){console.log("se abre.."),this.editDialog=!0,this.dialog=!0,console.log(t),this.toAssign(t),this.result=t.result},update(){const t=this.data[this.nameEdit].data.map((t=>t.reference==this.reference?{...t,nomenclature:this.nomenclature,location:this.location,result:this.result,name:this.name}:t));this.data[this.nameEdit].data=t,this.saveItem(this.data),this.dialog=!1,this.emptyData()},create(){const t={reference:this.reference,location:this.location,result:this.result,name:this.name,nomenclature:this.nomenclature};this.data[this.nameEdit].data.push(t),this.saveItem(this.data),this.emptyData(),this.dialog=!1}}},u=c,d=i(3736),m=i(3453),h=i.n(m),v=i(3497),p=i(6190),f=i(4145),b=i(4886),g=i(2118),I=i(9930),B=i(5125),V=i(4324),x=i(1713),_=i(7423),C=i(3687),Z=i(7808),k=i(7953),y=(0,d.Z)(u,r,s,!1,null,"ec24b504",null),E=y.exports;h()(y,{VAppBar:v.Z,VBtn:p.Z,VCard:f.Z,VCardText:b.ZB,VCardTitle:b.EB,VContainer:g.Z,VDialog:I.Z,VForm:B.Z,VIcon:V.Z,VRow:x.Z,VSheet:_.Z,VSpacer:C.Z,VTextField:Z.Z,VToolbarItems:k.lj,VToolbarTitle:k.qW});var D={components:{BoardNew:E},name:"RushList",data(){return{nameEdit:"rushList"}},computed:{...(0,o.rn)({data:t=>t.customers.findCustomer}),items(){return this.data[this.nameEdit].data},config(){return this.data[this.nameEdit].config}},methods:{open(t){this.$refs.form.openForm(t)}}},S=D,T=i(4525),w=i(5187),N=i(8251),P=i(4924),F=(0,d.Z)(S,n,a,!1,null,null,null),L=F.exports;h()(F,{VBtn:p.Z,VCard:f.Z,VIcon:V.Z,VListItem:T.Z,VListItemAction:w.Z,VListItemContent:N.km,VListItemSubtitle:N.oZ,VListItemTitle:N.V9,VVirtualScroll:P.Z})}}]);
//# sourceMappingURL=63.b5b006b3.js.map