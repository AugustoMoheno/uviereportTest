"use strict";(self["webpackChunkuviereport"]=self["webpackChunkuviereport"]||[]).push([[720],{7635:function(e,t,a){a.d(t,{Z:function(){return c}});var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",e._l(e.itemsPro,(function(e,t){return a("div",{key:t},[a(e.content,{tag:"component",attrs:{template:e},on:{setOption:function(t){return e.value=t},setModel:function(t){return e.model=t},setNote:function(t){return e.note=t},setOverallPhoto:function(t){return e.overallPhoto=t},setItemsT:function(t){return e.itemsT=t},setDate:function(t){return e.date=t}}})],1)})),0)},n=[],r={components:{ItemBasic:()=>a.e(566).then(a.bind(a,1566)),ItemBasicSelect:()=>a.e(757).then(a.bind(a,3757)),ItemNote:()=>a.e(724).then(a.bind(a,8724)),ItemThermography:()=>a.e(289).then(a.bind(a,6289)),ItemBasicSelectNote:()=>a.e(847).then(a.bind(a,3847)),ItemBasicDate:()=>a.e(97).then(a.bind(a,4097)),ItemThermographicPhotos:()=>a.e(864).then(a.bind(a,2864)),ItemOilLeaks:()=>a.e(506).then(a.bind(a,1506)),ItemLand:()=>a.e(51).then(a.bind(a,51))},name:"ItemGroup",props:{config:Array},watch:{itemsPro(e){this.init(),console.log("Se ha actualizado")}},created(){this.init()},data(){return{itemsPro:[],items:[{content:"ItemBasic",description:"Espacio de trabajo alrededor de equipo eléctrico. ",nom:"110-26",value:null},{content:"ItemBasic",description:"Ubicación con respecto a material fácilmente inflamable. ",nom:"408-17",value:null},{content:"ItemBasic",description:"Señales de advertencia contra arco eléctrico.",nom:"110-16",value:null},{content:"ItemBasic",description:"Identificación de los medios de desconexión.",nom:"110-22",value:null},{content:"ItemBasic",description:"Identificación de campo requerido. a) Directorio del circuito.",nom:"408-4",value:null},{content:"ItemBasic",description:"Aberturas sin utilizar.",nom:"408-7",value:null},{content:"ItemBasic",description:"Paneles.",nom:"408-50",value:null},{content:"ItemBasic",description:"Protección contra sobrecorriente.",nom:"408-36",value:null},{content:"ItemBasic",description:"Puesta a tierra de los tableros de alumbrado y control.",nom:"408-40",value:null},{content:"ItemBasic",description:"Ubicación en el circuito.",nom:"240-21",value:null},{content:"ItemBasic",description:"Conexiones eléctricas. a) Terminales.",nom:"110-14",value:null,model:"PREVENTIVO",items:["PREVENTIVO","CORRECTIVO"]},{content:"ItemThermography",description:"Conexiones eléctricas. c) Limitaciones por temperatura.",nom:"110-14",value:null,model:"Interruptor principal",items:["Interruptor principal","Interruptor derivado","Conductor alimentador","Conductor derivado","Borne","Zapata","Barra colectora","Barra de neutros","Barra de tierras","Gabinete","Empalme, terminal"]},{content:"ItemBasic",description:"Integridad de los equipos y de las conexiones.",nom:"110-12",value:null},{content:"ItemBasic",description:"Tubo conduit de polietileno.",nom:"364-4",value:null},{content:"ItemBasic",description:"Cables y cordones flexibles.",nom:"400-8",value:null},{content:"ItemBasic",description:"Instalación de canalizaciones.",nom:"300-18",value:null},{content:"ItemNote",description:"",nom:"Notas",value:null}],response:[]}},methods:{init(){this.itemsPro=this.config,console.log(this.itemsPro)},build(){}}},s=r,o=a(1001),l=(0,o.Z)(s,i,n,!1,null,null,null),c=l.exports},4720:function(e,t,a){a.r(t),a.d(t,{default:function(){return M}});var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-card",{staticClass:"mx-auto",attrs:{elevation:"0",color:"#F2F4F4",height:"100vh"}},[0===e.items.length?a("div",[a("p",{staticClass:"text-center"},[e._v("..Sin Transformadores...")])]):a("div",[a("v-virtual-scroll",{staticStyle:{height:"91vh"},attrs:{items:e.items,"item-height":80},scopedSlots:e._u([{key:"default",fn:function(t){var i=t.item;return[a("v-card",{attrs:{elevation:"0",outlined:""}},[a("div",[a("v-list-item",{on:{click:function(t){return e.open(i)}}},[a("v-list-item-action",[a("v-btn",{staticClass:"white--text",attrs:{fab:"",small:"",depressed:"",color:"#273746"}},[e._v(" "+e._s(i.reference)+" ")])],1),a("v-list-item-content",[a("v-list-item-title",[a("strong",[e._v(" "+e._s(i.nomenclature))])]),a("v-list-item-subtitle",[e._v(e._s(i.location))])],1),a("BtnActionSection",{attrs:{item:i,nameEdit:e.nameEdit},on:{newItem:function(t){return e.$refs.form.create()}}})],1)],1)])]}}])})],1),a("board-new",{ref:"form"})],1)},n=[],r=a(629),s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-row",{attrs:{justify:"center"}},[a("v-dialog",{attrs:{fullscreen:"","hide-overlay":"",transition:"dialog-bottom-transition"},scopedSlots:e._u([{key:"activator",fn:function(t){var i=t.on,n=t.attrs;return[a("v-btn",e._g(e._b({attrs:{fab:"",dark:"",color:"rgba(39,55,70,1)",fixed:"",right:"",bottom:""},on:{click:function(t){return e.newForm()}}},"v-btn",n,!1),i),[a("v-icon",{attrs:{size:"23",color:"#D5DBDB",dark:""}},[e._v("add")])],1)]}}]),model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[a("v-card",{attrs:{color:"#F2F4F4"}},[a("v-card",{staticClass:"overflow-hidden"},[a("v-app-bar",{staticStyle:{"z-index":"20001 !important"},attrs:{absolute:"",dark:"",color:"primary","elevate-on-scroll":"","scroll-target":"#scrolling-techniques-7"}},[a("v-btn",{attrs:{icon:"",dark:""},on:{click:function(t){e.dialog=!1}}},[a("v-icon",[e._v("arrow_back")])],1),a("v-toolbar-title",[e._v(e._s(e.textDialog))]),a("v-spacer"),a("v-toolbar-items",[a("v-btn",{attrs:{dark:"",text:""},on:{click:function(t){return e.action()}}},[e._v(" "+e._s(e.textSave)+" ")])],1)],1),a("v-sheet",{staticClass:"overflow-y-auto",staticStyle:{color:"#273746"},attrs:{id:"scrolling-techniques-7",height:"100vh"}},[a("v-container",[a("v-card-title",{staticClass:"text-h5",staticStyle:{color:"#273746"}},[e._v(" Nueva Area ")]),a("v-card-text",{staticStyle:{color:"#273746"}},[e._v("Datos del Area")]),a("v-form",{ref:"form"},[a("v-text-field",{staticClass:"text-capitalize",attrs:{outlined:"",disabled:"",label:"REFERENCIA",required:""},model:{value:e.reference,callback:function(t){e.reference=t},expression:"reference"}}),a("v-text-field",{attrs:{outlined:"",label:"NOMENCLATURA",required:""},model:{value:e.nomenclature,callback:function(t){e.nomenclature=t},expression:"nomenclature"}}),a("v-text-field",{attrs:{outlined:"",label:"LOCALIZACIÓN",required:""},model:{value:e.location,callback:function(t){e.location=t},expression:"location"}}),a("v-text-field",{attrs:{outlined:"",label:"CAPACIDAD [KVA]",required:""},model:{value:e.capacity,callback:function(t){e.capacity=t},expression:"capacity"}}),a("v-select",{attrs:{outlined:"",items:e.typeItems,label:"TIPO"},model:{value:e.type,callback:function(t){e.type=t},expression:"type"}}),a("v-text-field",{attrs:{outlined:"",label:"Marca",required:""},model:{value:e.brand,callback:function(t){e.brand=t},expression:"brand"}}),a("v-text-field",{attrs:{outlined:"",label:"TEMPERATURA MÁXIMA REGISTRADA EN LÍQUIDO AISLANTE [⁰C]",required:""},model:{value:e.maximumRecordedTemperature,callback:function(t){e.maximumRecordedTemperature=t},expression:"maximumRecordedTemperature"}}),a("v-text-field",{attrs:{outlined:"",label:"TEMPERATURA ACTUAL EN LÍQUIDO AISLANTE [⁰C]",required:""},model:{value:e.currentTemperature,callback:function(t){e.currentTemperature=t},expression:"currentTemperature"}}),a("v-text-field",{attrs:{outlined:"",label:"ELEVACIÓN DE TEMPERATURA (PLACA DE DATOS)  [⁰C]",required:""},model:{value:e.temperatureRise,callback:function(t){e.temperatureRise=t},expression:"temperatureRise"}}),a("v-select",{attrs:{outlined:"",items:e.phasesWiresItems,label:"FASES / HILOS"},model:{value:e.phasesWires,callback:function(t){e.phasesWires=t},expression:"phasesWires"}}),a("v-select",{attrs:{outlined:"",items:e.frequencyItems,label:"FRECUENCIA"},model:{value:e.frequency,callback:function(t){e.frequency=t},expression:"frequency"}}),a("v-text-field",{attrs:{outlined:"",label:"TENSIÓN PRIMARIA [V]",required:""},model:{value:e.primaryVoltage,callback:function(t){e.primaryVoltage=t},expression:"primaryVoltage"}}),a("v-text-field",{attrs:{outlined:"",label:"TENSIÓN SECUNDARIA [V]",required:""},model:{value:e.secondaryVoltage,callback:function(t){e.secondaryVoltage=t},expression:"secondaryVoltage"}}),a("v-select",{attrs:{outlined:"",items:e.connectionItems,label:"CONEXIÓN"},model:{value:e.connection,callback:function(t){e.connection=t},expression:"connection"}}),a("v-select",{attrs:{outlined:"",items:e.insulationClassItems,label:"CLASE DE AISLAMIENTO"},model:{value:e.insulationClass,callback:function(t){e.insulationClass=t},expression:"insulationClass"}}),a("v-select",{attrs:{outlined:"",items:e.oilLevelItems,label:"NIVEL DE ACEITE"},model:{value:e.oilLevel,callback:function(t){e.oilLevel=t},expression:"oilLevel"}}),a("v-text-field",{attrs:{outlined:"",label:"ÚLTIMA FECHA DE MANTENIMIENTO",required:""},model:{value:e.lastMaintenanceDate,callback:function(t){e.lastMaintenanceDate=t},expression:"lastMaintenanceDate"}}),e.editDialog?a("ResetSurveyItems",{attrs:{configDefault:JSON.parse(JSON.stringify(this.config))},on:{show:function(t){e.dialog=t},itemsResult:function(t){e.result=t}}}):e._e(),e.dialog?a("item-group",{attrs:{config:e.result}}):e._e()],1)],1)],1)],1)],1)],1)],1)},o=[],l=a(7635),c={components:{ItemGroup:l.Z,ResetSurveyItems:()=>a.e(947).then(a.bind(a,6947))},name:"TransformersNew",data(){return{editDialog:!1,value:null,reference:1,nomenclature:"",location:"",oilLevel:null,oilLevelItems:["ALTO","MEDIO","BAJO"],dialog:!1,nameEdit:"transformersList",capacity:"",type:"",typeItems:["PEDESTAL","DISTRIBUCIÓN","SUBESTACIÓN ABIERTA","GARGANTAS","POSTE"],brand:"",maximumRecordedTemperature:"",currentTemperature:"",temperatureRise:"",phasesWires:"",phasesWiresItems:["1F-3H","3F-4H"],frequency:"",frequencyItems:["60 Hz","50 Hz"],primaryVoltage:"",secondaryVoltage:"",connection:"",connectionItems:["DELTA - ESTRELLA","ESTRELLA - ESTRELLA"],insulationClass:"",insulationClassItems:["15 kV","34 kV"],lastMaintenanceDate:""}},computed:{...(0,r.rn)({data:e=>e.customers.findCustomer}),items(){return this.data[this.nameEdit].data},config(){return this.data[this.nameEdit].config},textDialog(){return this.editDialog?"Editar Transformador":"Nuevo Transformador"},textSave(){return this.editDialog?"Guardar":"Crear"}},methods:{...(0,r.nv)({getItem:"customers/search",saveItem:"customers/save"}),action(){this.editDialog?this.update():this.create()},toAssign(e){this.reference=e.reference,this.nomenclature=e.nomenclature,this.location=e.location,this.oilLevel=e.oilLevel,this.capacity=e?.capacity,this.type=e?.type,this.brand=e?.brand,this.maximumRecordedTemperature=e?.maximumRecordedTemperature,this.currentTemperature=e?.currentTemperature,this.temperatureRise=e?.temperatureRise,this.phasesWires=e?.phasesWires,this.frequency=e?.frequency,this.primaryVoltage=e?.primaryVoltage,this.secondaryVoltage=e?.secondaryVoltage,this.connection=e?.connection,this.insulationClass=e?.insulationClass,this.lastMaintenanceDate=e?.lastMaintenanceDate},emptyData(){this.nomenclature="",this.location="",this.oilLevel=null,this.value=null,this.capacity=null,this.type=null,this.brand=null,this.maximumRecordedTemperature=null,this.currentTemperature=null,this.temperatureRise=null,this.phasesWires=null,this.frequency=null,this.primaryVoltage=null,this.secondaryVoltage=null,this.connection=null,this.insulationClass=null,this.lastMaintenanceDate=null},newForm(){console.log("hola"),this.emptyData(),this.editDialog=!1,this.reference=this.items.length+1,this.result=JSON.parse(JSON.stringify(this.config))},openForm(e){console.log("se abre.."),this.editDialog=!0,this.dialog=!0,console.log(e),this.toAssign(e),this.result=e.result},update(){const e=this.data[this.nameEdit].data.map((e=>e.reference==this.reference?{...e,nomenclature:this.nomenclature,location:this.location,oilLevel:this.oilLevel,result:this.result,capacity:this.capacity,type:this.type,brand:this.brand,maximumRecordedTemperature:this.maximumRecordedTemperature,currentTemperature:this.currentTemperature,temperatureRise:this.temperatureRise,phasesWires:this.phasesWires,frequency:this.frequency,primaryVoltage:this.primaryVoltage,secondaryVoltage:this.secondaryVoltage,connection:this.connection,insulationClass:this.insulationClass,lastMaintenanceDate:this.lastMaintenanceDate}:e));this.data[this.nameEdit].data=e,this.saveItem(this.data),this.dialog=!1,this.emptyData()},create(){const e={reference:this.reference,location:this.location,result:this.result,oilLevel:this.oilLevel,nomenclature:this.nomenclature,capacity:this.capacity,type:this.type,brand:this.brand,maximumRecordedTemperature:this.maximumRecordedTemperature,currentTemperature:this.currentTemperature,temperatureRise:this.temperatureRise,phasesWires:this.phasesWires,frequency:this.frequency,primaryVoltage:this.primaryVoltage,secondaryVoltage:this.secondaryVoltage,connection:this.connection,insulationClass:this.insulationClass,lastMaintenanceDate:this.lastMaintenanceDate};this.data[this.nameEdit].data.push(e),this.saveItem(this.data),this.emptyData(),this.dialog=!1}}},u=c,m=a(1001),d=a(3453),p=a.n(d),h=a(3497),v=a(6190),f=a(4145),I=a(4886),b=a(2118),y=a(9930),g=a(5125),T=a(4324),E=a(1713),A=a(1399),x=a(7423),V=a(3687),C=a(7808),R=a(7953),D=(0,m.Z)(u,s,o,!1,null,"3c0e72ec",null),L=D.exports;p()(D,{VAppBar:h.Z,VBtn:v.Z,VCard:f.Z,VCardText:I.ZB,VCardTitle:I.EB,VContainer:b.Z,VDialog:y.Z,VForm:g.Z,VIcon:T.Z,VRow:E.Z,VSelect:A.Z,VSheet:x.Z,VSpacer:V.Z,VTextField:C.Z,VToolbarItems:R.lj,VToolbarTitle:R.qW});var S={components:{BoardNew:L,BtnActionSection:()=>a.e(610).then(a.bind(a,8610))},name:"TransformersList",data(){return{nameEdit:"transformersList"}},computed:{...(0,r.rn)({data:e=>e.customers.findCustomer}),items(){return this.data[this.nameEdit].data},config(){return this.data[this.nameEdit].config}},methods:{open(e){this.$refs.form.openForm(e)}}},N=S,k=a(4525),B=a(5187),q=a(8251),_=a(4924),Z=(0,m.Z)(N,i,n,!1,null,null,null),M=Z.exports;p()(Z,{VBtn:v.Z,VCard:f.Z,VListItem:k.Z,VListItemAction:B.Z,VListItemContent:q.km,VListItemSubtitle:q.oZ,VListItemTitle:q.V9,VVirtualScroll:_.Z})}}]);
//# sourceMappingURL=720.ad1ccaed.js.map