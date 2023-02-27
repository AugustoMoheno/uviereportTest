"use strict";(self["webpackChunkuviereport"]=self["webpackChunkuviereport"]||[]).push([[295],{6756:function(e,t,n){n.d(t,{Z:function(){return c}});var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",e._l(e.itemsPro,(function(e,t){return n("div",{key:t},[n(e.content,{tag:"component",attrs:{template:e},on:{setOption:function(t){return e.value=t},setModel:function(t){return e.model=t},setNote:function(t){return e.note=t},setOverallPhoto:function(t){return e.overallPhoto=t},setItemsT:function(t){return e.itemsT=t},setDate:function(t){return e.date=t}}})],1)})),0)},a=[],r=(n(1539),n(8783),n(3948),{components:{ItemBasic:function(){return n.e(594).then(n.bind(n,2594))},ItemBasicSelect:function(){return n.e(421).then(n.bind(n,4421))},ItemNote:function(){return n.e(513).then(n.bind(n,3513))},ItemThermography:function(){return n.e(290).then(n.bind(n,6290))},ItemBasicSelectNote:function(){return n.e(397).then(n.bind(n,9397))},ItemBasicDate:function(){return n.e(705).then(n.bind(n,3705))},ItemThermographicPhotos:function(){return n.e(774).then(n.bind(n,6774))},ItemOilLeaks:function(){return n.e(532).then(n.bind(n,3532))},ItemLand:function(){return n.e(249).then(n.bind(n,4405))}},name:"ItemGroup",props:{config:Array},watch:{itemsPro:function(e){this.init(),console.log("Se ha actualizado")}},created:function(){this.init()},data:function(){return{itemsPro:[],items:[{content:"ItemBasic",description:"Espacio de trabajo alrededor de equipo eléctrico. ",nom:"110-26",value:null},{content:"ItemBasic",description:"Ubicación con respecto a material fácilmente inflamable. ",nom:"408-17",value:null},{content:"ItemBasic",description:"Señales de advertencia contra arco eléctrico.",nom:"110-16",value:null},{content:"ItemBasic",description:"Identificación de los medios de desconexión.",nom:"110-22",value:null},{content:"ItemBasic",description:"Identificación de campo requerido. a) Directorio del circuito.",nom:"408-4",value:null},{content:"ItemBasic",description:"Aberturas sin utilizar.",nom:"408-7",value:null},{content:"ItemBasic",description:"Paneles.",nom:"408-50",value:null},{content:"ItemBasic",description:"Protección contra sobrecorriente.",nom:"408-36",value:null},{content:"ItemBasic",description:"Puesta a tierra de los tableros de alumbrado y control.",nom:"408-40",value:null},{content:"ItemBasic",description:"Ubicación en el circuito.",nom:"240-21",value:null},{content:"ItemBasic",description:"Conexiones eléctricas. a) Terminales.",nom:"110-14",value:null,model:"PREVENTIVO",items:["PREVENTIVO","CORRECTIVO"]},{content:"ItemThermography",description:"Conexiones eléctricas. c) Limitaciones por temperatura.",nom:"110-14",value:null,model:"Interruptor principal",items:["Interruptor principal","Interruptor derivado","Conductor alimentador","Conductor derivado","Borne","Zapata","Barra colectora","Barra de neutros","Barra de tierras","Gabinete","Empalme, terminal"]},{content:"ItemBasic",description:"Integridad de los equipos y de las conexiones.",nom:"110-12",value:null},{content:"ItemBasic",description:"Tubo conduit de polietileno.",nom:"364-4",value:null},{content:"ItemBasic",description:"Cables y cordones flexibles.",nom:"400-8",value:null},{content:"ItemBasic",description:"Instalación de canalizaciones.",nom:"300-18",value:null},{content:"ItemNote",description:"",nom:"Notas",value:null}],response:[]}},methods:{init:function(){this.itemsPro=this.config,console.log(this.itemsPro)},build:function(){}}}),o=r,l=n(3736),s=(0,l.Z)(o,i,a,!1,null,null,null),c=s.exports},6295:function(e,t,n){n.r(t),n.d(t,{default:function(){return O}});var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-card",{staticClass:"mx-auto",attrs:{elevation:"0",color:"#F2F4F4",height:"100vh"}},[0===e.items.length?n("div",[n("p",{staticClass:"text-center"},[e._v("..Sin Transformadores...")])]):n("div",[n("v-virtual-scroll",{staticStyle:{height:"91vh"},attrs:{items:e.items,"item-height":80},scopedSlots:e._u([{key:"default",fn:function(t){var i=t.item;return[n("v-card",{attrs:{elevation:"0",outlined:""}},[n("div",[n("v-list-item",{on:{click:function(t){return e.open(i)}}},[n("v-list-item-action",[n("v-btn",{staticClass:"white--text",attrs:{fab:"",small:"",depressed:"",color:"#273746"}},[e._v(" "+e._s(i.reference)+" ")])],1),n("v-list-item-content",[n("v-list-item-title",[n("strong",[e._v(" "+e._s(i.nomenclature))])]),n("v-list-item-subtitle",[e._v(e._s(i.location))])],1),n("v-list-item-action",[n("v-icon",[e._v(" toc ")])],1)],1)],1)])]}}])})],1),n("board-new",{ref:"form"})],1)},a=[],r=n(5082),o=n(629),l=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-row",{attrs:{justify:"center"}},[n("v-dialog",{attrs:{fullscreen:"","hide-overlay":"",transition:"dialog-bottom-transition"},scopedSlots:e._u([{key:"activator",fn:function(t){var i=t.on,a=t.attrs;return[n("v-btn",e._g(e._b({attrs:{fab:"",dark:"",color:"rgba(39,55,70,1)",fixed:"",right:"",bottom:""},on:{click:function(t){return e.newForm()}}},"v-btn",a,!1),i),[n("v-icon",{attrs:{size:"23",color:"#D5DBDB",dark:""}},[e._v("add")])],1)]}}]),model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[n("v-card",{attrs:{color:"#F2F4F4"}},[n("v-card",{staticClass:"overflow-hidden"},[n("v-app-bar",{staticStyle:{"z-index":"20001 !important"},attrs:{absolute:"",dark:"",color:"primary","elevate-on-scroll":"","scroll-target":"#scrolling-techniques-7"}},[n("v-btn",{attrs:{icon:"",dark:""},on:{click:function(t){e.dialog=!1}}},[n("v-icon",[e._v("arrow_back")])],1),n("v-toolbar-title",[e._v(e._s(e.textDialog))]),n("v-spacer"),n("v-toolbar-items",[n("v-btn",{attrs:{dark:"",text:""},on:{click:function(t){return e.action()}}},[e._v(" "+e._s(e.textSave)+" ")])],1)],1),n("v-sheet",{staticClass:"overflow-y-auto",staticStyle:{color:"#273746"},attrs:{id:"scrolling-techniques-7",height:"100vh"}},[n("v-container",[n("v-card-title",{staticClass:"text-h5",staticStyle:{color:"#273746"}},[e._v(" Nueva Area ")]),n("v-card-text",{staticStyle:{color:"#273746"}},[e._v("Datos del Area")]),n("v-form",{ref:"form"},[n("v-text-field",{staticClass:"text-capitalize",attrs:{outlined:"",disabled:"",label:"REFERENCIA",required:""},model:{value:e.reference,callback:function(t){e.reference=t},expression:"reference"}}),n("v-text-field",{attrs:{outlined:"",label:"NOMENCLATURA",required:""},model:{value:e.nomenclature,callback:function(t){e.nomenclature=t},expression:"nomenclature"}}),n("v-text-field",{attrs:{outlined:"",label:"LOCALIZACIÓN",required:""},model:{value:e.location,callback:function(t){e.location=t},expression:"location"}}),n("v-text-field",{attrs:{outlined:"",label:"CAPACIDAD [KVA]",required:""},model:{value:e.capacity,callback:function(t){e.capacity=t},expression:"capacity"}}),n("v-select",{attrs:{outlined:"",items:e.typeItems,label:"TIPO"},model:{value:e.type,callback:function(t){e.type=t},expression:"type"}}),n("v-text-field",{attrs:{outlined:"",label:"Marca",required:""},model:{value:e.brand,callback:function(t){e.brand=t},expression:"brand"}}),n("v-text-field",{attrs:{outlined:"",label:"TEMPERATURA MÁXIMA REGISTRADA EN LÍQUIDO AISLANTE [⁰C]",required:""},model:{value:e.maximumRecordedTemperature,callback:function(t){e.maximumRecordedTemperature=t},expression:"maximumRecordedTemperature"}}),n("v-text-field",{attrs:{outlined:"",label:"TEMPERATURA ACTUAL EN LÍQUIDO AISLANTE [⁰C]",required:""},model:{value:e.currentTemperature,callback:function(t){e.currentTemperature=t},expression:"currentTemperature"}}),n("v-text-field",{attrs:{outlined:"",label:"ELEVACIÓN DE TEMPERATURA (PLACA DE DATOS)  [⁰C]",required:""},model:{value:e.temperatureRise,callback:function(t){e.temperatureRise=t},expression:"temperatureRise"}}),n("v-select",{attrs:{outlined:"",items:e.phasesWiresItems,label:"FASES / HILOS"},model:{value:e.phasesWires,callback:function(t){e.phasesWires=t},expression:"phasesWires"}}),n("v-select",{attrs:{outlined:"",items:e.frequencyItems,label:"FRECUENCIA"},model:{value:e.frequency,callback:function(t){e.frequency=t},expression:"frequency"}}),n("v-text-field",{attrs:{outlined:"",label:"TENSIÓN PRIMARIA [V]",required:""},model:{value:e.primaryVoltage,callback:function(t){e.primaryVoltage=t},expression:"primaryVoltage"}}),n("v-text-field",{attrs:{outlined:"",label:"TENSIÓN SECUNDARIA [V]",required:""},model:{value:e.secondaryVoltage,callback:function(t){e.secondaryVoltage=t},expression:"secondaryVoltage"}}),n("v-select",{attrs:{outlined:"",items:e.connectionItems,label:"CONEXIÓN"},model:{value:e.connection,callback:function(t){e.connection=t},expression:"connection"}}),n("v-select",{attrs:{outlined:"",items:e.insulationClassItems,label:"CLASE DE AISLAMIENTO"},model:{value:e.insulationClass,callback:function(t){e.insulationClass=t},expression:"insulationClass"}}),n("v-select",{attrs:{outlined:"",items:e.oilLevelItems,label:"NIVEL DE ACEITE"},model:{value:e.oilLevel,callback:function(t){e.oilLevel=t},expression:"oilLevel"}}),n("v-text-field",{attrs:{outlined:"",label:"ÚLTIMA FECHA DE MANTENIMIENTO",required:""},model:{value:e.lastMaintenanceDate,callback:function(t){e.lastMaintenanceDate=t},expression:"lastMaintenanceDate"}}),e.dialog?n("item-group",{attrs:{config:e.result}}):e._e()],1)],1)],1)],1)],1)],1)],1)},s=[],c=(n(8862),n(1249),n(6756)),u={components:{ItemGroup:c.Z},name:"TransformersNew",data:function(){return{editDialog:!1,value:null,reference:1,nomenclature:"",location:"",oilLevel:null,oilLevelItems:["ALTO","MEDIO","BAJO"],dialog:!1,nameEdit:"transformersList",capacity:"",type:"",typeItems:["PEDESTAL","DISTRIBUCIÓN","SUBESTACIÓN ABIERTA","GARGANTAS","POSTE"],brand:"",maximumRecordedTemperature:"",currentTemperature:"",temperatureRise:"",phasesWires:"",phasesWiresItems:["1F-3H","3F-4H"],frequency:"",frequencyItems:["60 Hz","50 Hz"],primaryVoltage:"",secondaryVoltage:"",connection:"",connectionItems:["DELTA - ESTRELLA","ESTRELLA - ESTRELLA"],insulationClass:"",insulationClassItems:["15 kV","34 kV"],lastMaintenanceDate:""}},computed:(0,r.Z)((0,r.Z)({},(0,o.rn)({data:function(e){return e.customers.findCustomer}})),{},{items:function(){return this.data[this.nameEdit].data},config:function(){return this.data[this.nameEdit].config},textDialog:function(){return this.editDialog?"Editar Transformador":"Nuevo Transformador"},textSave:function(){return this.editDialog?"Guardar":"Crear"}}),methods:(0,r.Z)((0,r.Z)({},(0,o.nv)({getItem:"customers/search",saveItem:"customers/save"})),{},{action:function(){this.editDialog?this.update():this.create()},toAssign:function(e){this.reference=e.reference,this.nomenclature=e.nomenclature,this.location=e.location,this.oilLevel=e.oilLevel,this.capacity=null===e||void 0===e?void 0:e.capacity,this.type=null===e||void 0===e?void 0:e.type,this.brand=null===e||void 0===e?void 0:e.brand,this.maximumRecordedTemperature=null===e||void 0===e?void 0:e.maximumRecordedTemperature,this.currentTemperature=null===e||void 0===e?void 0:e.currentTemperature,this.temperatureRise=null===e||void 0===e?void 0:e.temperatureRise,this.phasesWires=null===e||void 0===e?void 0:e.phasesWires,this.frequency=null===e||void 0===e?void 0:e.frequency,this.primaryVoltage=null===e||void 0===e?void 0:e.primaryVoltage,this.secondaryVoltage=null===e||void 0===e?void 0:e.secondaryVoltage,this.connection=null===e||void 0===e?void 0:e.connection,this.insulationClass=null===e||void 0===e?void 0:e.insulationClass,this.lastMaintenanceDate=null===e||void 0===e?void 0:e.lastMaintenanceDate},emptyData:function(){this.nomenclature="",this.location="",this.oilLevel=null,this.value=null,this.capacity=null,this.type=null,this.brand=null,this.maximumRecordedTemperature=null,this.currentTemperature=null,this.temperatureRise=null,this.phasesWires=null,this.frequency=null,this.primaryVoltage=null,this.secondaryVoltage=null,this.connection=null,this.insulationClass=null,this.lastMaintenanceDate=null},newForm:function(){console.log("hola"),this.emptyData(),this.editDialog=!1,this.reference=this.items.length+1,this.result=JSON.parse(JSON.stringify(this.config))},openForm:function(e){console.log("se abre.."),this.editDialog=!0,this.dialog=!0,console.log(e),this.toAssign(e),this.result=e.result},update:function(){var e=this,t=this.data[this.nameEdit].data.map((function(t){return t.reference==e.reference?(0,r.Z)((0,r.Z)({},t),{},{nomenclature:e.nomenclature,location:e.location,oilLevel:e.oilLevel,result:e.result,capacity:e.capacity,type:e.type,brand:e.brand,maximumRecordedTemperature:e.maximumRecordedTemperature,currentTemperature:e.currentTemperature,temperatureRise:e.temperatureRise,phasesWires:e.phasesWires,frequency:e.frequency,primaryVoltage:e.primaryVoltage,secondaryVoltage:e.secondaryVoltage,connection:e.connection,insulationClass:e.insulationClass,lastMaintenanceDate:e.lastMaintenanceDate}):t}));this.data[this.nameEdit].data=t,this.saveItem(this.data),this.dialog=!1,this.emptyData()},create:function(){var e={reference:this.reference,location:this.location,result:this.result,oilLevel:this.oilLevel,nomenclature:this.nomenclature,capacity:this.capacity,type:this.type,brand:this.brand,maximumRecordedTemperature:this.maximumRecordedTemperature,currentTemperature:this.currentTemperature,temperatureRise:this.temperatureRise,phasesWires:this.phasesWires,frequency:this.frequency,primaryVoltage:this.primaryVoltage,secondaryVoltage:this.secondaryVoltage,connection:this.connection,insulationClass:this.insulationClass,lastMaintenanceDate:this.lastMaintenanceDate};this.data[this.nameEdit].data.push(e),this.saveItem(this.data),this.emptyData(),this.dialog=!1}})},d=u,m=n(3736),p=n(3453),v=n.n(p),h=n(3497),f=n(6190),I=n(4145),b=n(4886),y=n(2118),g=n(9930),T=n(5125),E=n(4324),x=n(1713),A=n(1399),V=n(7423),C=n(3687),L=n(7808),R=n(7953),D=(0,m.Z)(d,l,s,!1,null,"fef24890",null),S=D.exports;v()(D,{VAppBar:h.Z,VBtn:f.Z,VCard:I.Z,VCardText:b.ZB,VCardTitle:b.EB,VContainer:y.Z,VDialog:g.Z,VForm:T.Z,VIcon:E.Z,VRow:x.Z,VSelect:A.Z,VSheet:V.Z,VSpacer:C.Z,VTextField:L.Z,VToolbarItems:R.lj,VToolbarTitle:R.qW});var k={components:{BoardNew:S},name:"TransformersList",data:function(){return{nameEdit:"transformersList"}},computed:(0,r.Z)((0,r.Z)({},(0,o.rn)({data:function(e){return e.customers.findCustomer}})),{},{items:function(){return this.data[this.nameEdit].data},config:function(){return this.data[this.nameEdit].config}}),methods:{open:function(e){this.$refs.form.openForm(e)}}},N=k,B=n(4525),Z=n(5187),q=n(8251),_=n(4924),M=(0,m.Z)(N,i,a,!1,null,null,null),O=M.exports;v()(M,{VBtn:f.Z,VCard:I.Z,VIcon:E.Z,VListItem:B.Z,VListItemAction:Z.Z,VListItemContent:q.km,VListItemSubtitle:q.oZ,VListItemTitle:q.V9,VVirtualScroll:_.Z})}}]);
//# sourceMappingURL=295-legacy.3360d3af.js.map