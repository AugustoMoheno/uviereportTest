"use strict";(self["webpackChunkuviereport"]=self["webpackChunkuviereport"]||[]).push([[5],{5504:function(e,t,n){n.d(t,{Z:function(){return s}});var o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",e._l(e.itemsPro,(function(e,t){return n("div",{key:t},[n(e.content,{tag:"component",attrs:{template:e},on:{setOption:function(t){return e.value=t},setModel:function(t){return e.model=t},setNote:function(t){return e.note=t},setOverallPhoto:function(t){return e.overallPhoto=t},setItemsT:function(t){return e.itemsT=t},setDate:function(t){return e.date=t}}})],1)})),0)},i=[],a={components:{ItemBasic:()=>n.e(615).then(n.bind(n,4615)),ItemBasicSelect:()=>n.e(109).then(n.bind(n,5109)),ItemNote:()=>n.e(724).then(n.bind(n,8724)),ItemThermography:()=>n.e(378).then(n.bind(n,2378)),ItemBasicSelectNote:()=>n.e(956).then(n.bind(n,2327)),ItemBasicDate:()=>n.e(246).then(n.bind(n,8246)),ItemThermographicPhotos:()=>n.e(864).then(n.bind(n,2864)),ItemOilLeaks:()=>n.e(921).then(n.bind(n,1921))},name:"ItemGroup",props:{config:Array},watch:{itemsPro(e){this.init(),console.log("Se ha actualizado")}},created(){this.init()},data(){return{itemsPro:[],items:[{content:"ItemBasic",description:"Espacio de trabajo alrededor de equipo eléctrico. ",nom:"110-26",value:null},{content:"ItemBasic",description:"Ubicación con respecto a material fácilmente inflamable. ",nom:"408-17",value:null},{content:"ItemBasic",description:"Señales de advertencia contra arco eléctrico.",nom:"110-16",value:null},{content:"ItemBasic",description:"Identificación de los medios de desconexión.",nom:"110-22",value:null},{content:"ItemBasic",description:"Identificación de campo requerido. a) Directorio del circuito.",nom:"408-4",value:null},{content:"ItemBasic",description:"Aberturas sin utilizar.",nom:"408-7",value:null},{content:"ItemBasic",description:"Paneles.",nom:"408-50",value:null},{content:"ItemBasic",description:"Protección contra sobrecorriente.",nom:"408-36",value:null},{content:"ItemBasic",description:"Puesta a tierra de los tableros de alumbrado y control.",nom:"408-40",value:null},{content:"ItemBasic",description:"Ubicación en el circuito.",nom:"240-21",value:null},{content:"ItemBasic",description:"Conexiones eléctricas. a) Terminales.",nom:"110-14",value:null,model:"PREVENTIVO",items:["PREVENTIVO","CORRECTIVO"]},{content:"ItemThermography",description:"Conexiones eléctricas. c) Limitaciones por temperatura.",nom:"110-14",value:null,model:"Interruptor principal",items:["Interruptor principal","Interruptor derivado","Conductor alimentador","Conductor derivado","Borne","Zapata","Barra colectora","Barra de neutros","Barra de tierras","Gabinete","Empalme, terminal"]},{content:"ItemBasic",description:"Integridad de los equipos y de las conexiones.",nom:"110-12",value:null},{content:"ItemBasic",description:"Tubo conduit de polietileno.",nom:"364-4",value:null},{content:"ItemBasic",description:"Cables y cordones flexibles.",nom:"400-8",value:null},{content:"ItemBasic",description:"Instalación de canalizaciones.",nom:"300-18",value:null},{content:"ItemNote",description:"",nom:"Notas",value:null}],response:[]}},methods:{init(){this.itemsPro=this.config,console.log(this.itemsPro)},build(){}}},r=a,c=n(1001),l=(0,c.Z)(r,o,i,!1,null,null,null),s=l.exports},7005:function(e,t,n){n.r(t),n.d(t,{default:function(){return B}});var o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-card",{staticClass:"mx-auto",attrs:{elevation:"0",color:"#F2F4F4",height:"100vh"}},[n("v-container",[n("v-card-title",{staticClass:"text-h5",staticStyle:{color:"#273746"}},[e._v(" Información Documental ")]),n("item-group",{attrs:{config:e.config}}),n("v-card-actions",[n("v-spacer"),n("v-btn",{attrs:{outlined:"",color:"#273746"},on:{click:function(t){return e.update()}}},[e._v(" Guardar ")])],1)],1)],1)},i=[],a=n(629),r=n(5504),c={components:{ItemGroup:r.Z},name:"DocumentaryInformation",data(){return{result:[]}},computed:{...(0,a.rn)({data:e=>e.customers.findCustomer}),config(){return this.data.documentaryInformation}},methods:{...(0,a.nv)({saveItem:"customers/save"}),update(){const e=this.data;console.log(e.documentaryInformation),e.documentaryInformation.forEach((e=>console.log(e.value))),this.saveItem(e)}}},l=c,s=n(1001),u=n(3453),m=n.n(u),d=n(6190),p=n(4145),v=n(4886),I=n(2118),h=n(3687),f=(0,s.Z)(l,o,i,!1,null,null,null),B=f.exports;m()(f,{VBtn:d.Z,VCard:p.Z,VCardActions:v.h7,VCardTitle:v.EB,VContainer:I.Z,VSpacer:h.Z})}}]);
//# sourceMappingURL=5.86423d9c.js.map