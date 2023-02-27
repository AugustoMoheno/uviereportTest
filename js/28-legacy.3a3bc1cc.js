"use strict";(self["webpackChunkuviereport"]=self["webpackChunkuviereport"]||[]).push([[28],{2648:function(t,e,n){n.d(e,{Z:function(){return c}});var o=n(5082),i=(n(9653),n(7808)),r=n(7678),a=(0,r.Z)(i.Z),c=a.extend({name:"v-textarea",props:{autoGrow:Boolean,noResize:Boolean,rowHeight:{type:[Number,String],default:24,validator:function(t){return!isNaN(parseFloat(t))}},rows:{type:[Number,String],default:5,validator:function(t){return!isNaN(parseInt(t,10))}}},computed:{classes:function(){return(0,o.Z)({"v-textarea":!0,"v-textarea--auto-grow":this.autoGrow,"v-textarea--no-resize":this.noResizeHandle},i.Z.options.computed.classes.call(this))},noResizeHandle:function(){return this.noResize||this.autoGrow}},watch:{autoGrow:function(t){var e=this;this.$nextTick((function(){var n;t?e.calculateInputHeight():null==(n=e.$refs.input)||n.style.removeProperty("height")}))},lazyValue:function(){this.autoGrow&&this.$nextTick(this.calculateInputHeight)},rowHeight:function(){this.autoGrow&&this.$nextTick(this.calculateInputHeight)}},mounted:function(){var t=this;setTimeout((function(){t.autoGrow&&t.calculateInputHeight()}),0)},methods:{calculateInputHeight:function(){var t=this.$refs.input;if(t){t.style.height="0";var e=t.scrollHeight,n=parseInt(this.rows,10)*parseFloat(this.rowHeight);t.style.height=Math.max(n,e)+"px"}},genInput:function(){var t=i.Z.options.methods.genInput.call(this);return t.tag="textarea",delete t.data.attrs.type,t.data.attrs.rows=this.rows,t},onInput:function(t){i.Z.options.methods.onInput.call(this,t),this.autoGrow&&this.calculateInputHeight()},onKeyDown:function(t){this.isFocused&&13===t.keyCode&&t.stopPropagation(),this.$emit("keydown",t)}}})},6756:function(t,e,n){n.d(e,{Z:function(){return u}});var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",t._l(t.itemsPro,(function(t,e){return n("div",{key:e},[n(t.content,{tag:"component",attrs:{template:t},on:{setOption:function(e){return t.value=e},setModel:function(e){return t.model=e},setNote:function(e){return t.note=e},setOverallPhoto:function(e){return t.overallPhoto=e},setItemsT:function(e){return t.itemsT=e},setDate:function(e){return t.date=e}}})],1)})),0)},i=[],r=(n(1539),n(8783),n(3948),{components:{ItemBasic:function(){return n.e(594).then(n.bind(n,2594))},ItemBasicSelect:function(){return n.e(421).then(n.bind(n,4421))},ItemNote:function(){return n.e(513).then(n.bind(n,3513))},ItemThermography:function(){return n.e(290).then(n.bind(n,6290))},ItemBasicSelectNote:function(){return n.e(397).then(n.bind(n,9397))},ItemBasicDate:function(){return n.e(705).then(n.bind(n,3705))},ItemThermographicPhotos:function(){return n.e(774).then(n.bind(n,6774))},ItemOilLeaks:function(){return n.e(532).then(n.bind(n,3532))},ItemLand:function(){return n.e(249).then(n.bind(n,4405))}},name:"ItemGroup",props:{config:Array},watch:{itemsPro:function(t){this.init(),console.log("Se ha actualizado")}},created:function(){this.init()},data:function(){return{itemsPro:[],items:[{content:"ItemBasic",description:"Espacio de trabajo alrededor de equipo eléctrico. ",nom:"110-26",value:null},{content:"ItemBasic",description:"Ubicación con respecto a material fácilmente inflamable. ",nom:"408-17",value:null},{content:"ItemBasic",description:"Señales de advertencia contra arco eléctrico.",nom:"110-16",value:null},{content:"ItemBasic",description:"Identificación de los medios de desconexión.",nom:"110-22",value:null},{content:"ItemBasic",description:"Identificación de campo requerido. a) Directorio del circuito.",nom:"408-4",value:null},{content:"ItemBasic",description:"Aberturas sin utilizar.",nom:"408-7",value:null},{content:"ItemBasic",description:"Paneles.",nom:"408-50",value:null},{content:"ItemBasic",description:"Protección contra sobrecorriente.",nom:"408-36",value:null},{content:"ItemBasic",description:"Puesta a tierra de los tableros de alumbrado y control.",nom:"408-40",value:null},{content:"ItemBasic",description:"Ubicación en el circuito.",nom:"240-21",value:null},{content:"ItemBasic",description:"Conexiones eléctricas. a) Terminales.",nom:"110-14",value:null,model:"PREVENTIVO",items:["PREVENTIVO","CORRECTIVO"]},{content:"ItemThermography",description:"Conexiones eléctricas. c) Limitaciones por temperatura.",nom:"110-14",value:null,model:"Interruptor principal",items:["Interruptor principal","Interruptor derivado","Conductor alimentador","Conductor derivado","Borne","Zapata","Barra colectora","Barra de neutros","Barra de tierras","Gabinete","Empalme, terminal"]},{content:"ItemBasic",description:"Integridad de los equipos y de las conexiones.",nom:"110-12",value:null},{content:"ItemBasic",description:"Tubo conduit de polietileno.",nom:"364-4",value:null},{content:"ItemBasic",description:"Cables y cordones flexibles.",nom:"400-8",value:null},{content:"ItemBasic",description:"Instalación de canalizaciones.",nom:"300-18",value:null},{content:"ItemNote",description:"",nom:"Notas",value:null}],response:[]}},methods:{init:function(){this.itemsPro=this.config,console.log(this.itemsPro)},build:function(){}}}),a=r,c=n(3736),s=(0,c.Z)(a,o,i,!1,null,null,null),u=s.exports},5028:function(t,e,n){n.r(e),n.d(e,{default:function(){return B}});var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-card",{staticClass:"mx-auto",attrs:{elevation:"0",color:"#F2F4F4",height:"100vh"}},[n("v-container",[n("v-card-title",{staticClass:"text-h5",staticStyle:{color:"#273746"}},[t._v(" No conformidades - General ")]),n("v-textarea",{attrs:{"auto-grow":"",filled:"",color:"primary",label:"Observaciones",rows:"1"},model:{value:t.result,callback:function(e){t.result=e},expression:"result"}}),n("v-card-actions",[n("v-spacer"),n("v-btn",{attrs:{outlined:"",color:"#273746"},on:{click:function(e){return t.update()}}},[t._v(" Guardar ")])],1)],1)],1)},i=[],r=n(5082),a=n(629),c=n(6756),s={components:{ItemGroup:c.Z},name:"GeneralNonconformities",data:function(){return{result:""}},computed:(0,r.Z)((0,r.Z)({},(0,a.rn)({data:function(t){return t.customers.findCustomer}})),{},{config:function(){return this.data.generalNonconformities}}),created:function(){this.init()},methods:(0,r.Z)((0,r.Z)({},(0,a.nv)({saveItem:"customers/save"})),{},{init:function(){this.result=this.config},update:function(){console.log(this.result);var t=this.data;t.generalNonconformities=this.result,this.saveItem(t)}})},u=s,l=n(3736),d=n(3453),m=n.n(d),p=n(6190),h=n(4145),f=n(4886),v=n(2118),I=n(3687),g=n(2648),b=(0,l.Z)(u,o,i,!1,null,null,null),B=b.exports;m()(b,{VBtn:p.Z,VCard:h.Z,VCardActions:f.h7,VCardTitle:f.EB,VContainer:v.Z,VSpacer:I.Z,VTextarea:g.Z})}}]);
//# sourceMappingURL=28-legacy.3a3bc1cc.js.map