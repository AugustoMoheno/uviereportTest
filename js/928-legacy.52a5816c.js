"use strict";(self["webpackChunkuviereport"]=self["webpackChunkuviereport"]||[]).push([[928],{7780:function(e,t,n){n.d(t,{Z:function(){return u}});var o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",e._l(e.itemsPro,(function(e,t){return n("div",{key:t},[n(e.content,{tag:"component",attrs:{template:e},on:{setOption:function(t){return e.value=t},setModel:function(t){return e.model=t},setNote:function(t){return e.note=t}}})],1)})),0)},i=[],r=(n(1539),n(8783),n(3948),{components:{ItemBasic:function(){return n.e(203).then(n.bind(n,7203))},ItemBasicSelect:function(){return n.e(860).then(n.bind(n,2860))},ItemNote:function(){return n.e(193).then(n.bind(n,3193))},ItemThermography:function(){return n.e(35).then(n.bind(n,7035))},ItemBasicSelectNote:function(){return n.e(601).then(n.bind(n,1601))}},name:"ItemGroup",props:{config:Array},watch:{itemsPro:function(e){this.init(),console.log("Se ha actualizado")}},created:function(){this.init()},data:function(){return{itemsPro:[],items:[{content:"ItemBasic",description:"Espacio de trabajo alrededor de equipo eléctrico. ",nom:"110-26",value:null},{content:"ItemBasic",description:"Ubicación con respecto a material fácilmente inflamable. ",nom:"408-17",value:null},{content:"ItemBasic",description:"Señales de advertencia contra arco eléctrico.",nom:"110-16",value:null},{content:"ItemBasic",description:"Identificación de los medios de desconexión.",nom:"110-22",value:null},{content:"ItemBasic",description:"Identificación de campo requerido. a) Directorio del circuito.",nom:"408-4",value:null},{content:"ItemBasic",description:"Aberturas sin utilizar.",nom:"408-7",value:null},{content:"ItemBasic",description:"Paneles.",nom:"408-50",value:null},{content:"ItemBasic",description:"Protección contra sobrecorriente.",nom:"408-36",value:null},{content:"ItemBasic",description:"Puesta a tierra de los tableros de alumbrado y control.",nom:"408-40",value:null},{content:"ItemBasic",description:"Ubicación en el circuito.",nom:"240-21",value:null},{content:"ItemBasic",description:"Conexiones eléctricas. a) Terminales.",nom:"110-14",value:null,model:"PREVENTIVO",items:["PREVENTIVO","CORRECTIVO"]},{content:"ItemThermography",description:"Conexiones eléctricas. c) Limitaciones por temperatura.",nom:"110-14",value:null,model:"Interruptor principal",items:["Interruptor principal","Interruptor derivado","Conductor alimentador","Conductor derivado","Borne","Zapata","Barra colectora","Barra de neutros","Barra de tierras","Gabinete","Empalme, terminal"]},{content:"ItemBasic",description:"Integridad de los equipos y de las conexiones.",nom:"110-12",value:null},{content:"ItemBasic",description:"Tubo conduit de polietileno.",nom:"364-4",value:null},{content:"ItemBasic",description:"Cables y cordones flexibles.",nom:"400-8",value:null},{content:"ItemBasic",description:"Instalación de canalizaciones.",nom:"300-18",value:null},{content:"ItemNote",description:"",nom:"Notas",value:null}],response:[]}},methods:{init:function(){this.itemsPro=this.config,console.log(this.itemsPro)},build:function(){}}}),c=r,a=n(3736),l=(0,a.Z)(c,o,i,!1,null,null,null),u=l.exports},928:function(e,t,n){n.r(t),n.d(t,{default:function(){return b}});var o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-card",{staticClass:"mx-auto",attrs:{elevation:"0",color:"#F2F4F4",height:"100vh"}},[n("v-container",[n("v-card-title",{staticClass:"text-h5",staticStyle:{color:"#273746"}},[e._v(" Información Documental ")]),n("item-group",{attrs:{config:e.config}}),n("v-card-actions",[n("v-spacer"),n("v-btn",{attrs:{outlined:"",color:"#273746"},on:{click:function(t){return e.update()}}},[e._v(" Guardar ")])],1)],1)],1)},i=[],r=n(4367),c=(n(1539),n(4747),n(629)),a=n(7780),l={components:{ItemGroup:a.Z},name:"DocumentaryInformation",data:function(){return{result:[]}},computed:(0,r.Z)((0,r.Z)({},(0,c.rn)({data:function(e){return e.customers.findCustomer}})),{},{config:function(){return this.data.documentaryInformation}}),methods:(0,r.Z)((0,r.Z)({},(0,c.nv)({saveItem:"customers/save"})),{},{update:function(){var e=this.data;console.log(e.documentaryInformation),e.documentaryInformation.forEach((function(e){return console.log(e.value)})),this.saveItem(e)}})},u=l,s=n(3736),m=n(3453),d=n.n(m),p=n(680),f=n(2371),v=n(7118),I=n(9846),h=n(9762),B=(0,s.Z)(u,o,i,!1,null,null,null),b=B.exports;d()(B,{VBtn:p.Z,VCard:f.Z,VCardActions:v.h7,VCardTitle:v.EB,VContainer:I.Z,VSpacer:h.Z})}}]);
//# sourceMappingURL=928-legacy.52a5816c.js.map