"use strict";(self["webpackChunkuviereport"]=self["webpackChunkuviereport"]||[]).push([[199],{7199:function(e,t,a){a.r(t),a.d(t,{default:function(){return y}});var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-card",{staticClass:"white--text",attrs:{color:"#F2F4F4",outlined:"",height:"100vh"}},[a("v-container",[a("v-card-title",{staticClass:"text-h5",staticStyle:{color:"#273746"}},[e._v(" Datos del cliente ")]),a("v-card-text",{staticStyle:{color:"#273746"}},[e._v("Datos Generales")]),a("v-form",{ref:"form"},[e._v("p "),a("v-text-field",{attrs:{outlined:"",label:"Nombre Comercial",required:""},model:{value:e.item.tradename,callback:function(t){e.$set(e.item,"tradename",t)},expression:"item.tradename"}}),a("v-select",{attrs:{outlined:"",items:e.municipalityItems,label:"Municipio",required:""},model:{value:e.item.municipality,callback:function(t){e.$set(e.item,"municipality",t)},expression:"item.municipality"}}),a("v-dialog",{ref:"dialog",attrs:{"return-value":e.item.date,persistent:"",width:"290px"},on:{"update:returnValue":function(t){return e.$set(e.item,"date",t)},"update:return-value":function(t){return e.$set(e.item,"date",t)}},scopedSlots:e._u([{key:"activator",fn:function(t){var i=t.on,n=t.attrs;return[a("v-text-field",e._g(e._b({attrs:{outlined:"",label:"Fecha",readonly:""},model:{value:e.item.date,callback:function(t){e.$set(e.item,"date",t)},expression:"item.date"}},"v-text-field",n,!1),i))]}}]),model:{value:e.modal,callback:function(t){e.modal=t},expression:"modal"}},[a("v-date-picker",{attrs:{scrollable:""},model:{value:e.item.date,callback:function(t){e.$set(e.item,"date",t)},expression:"item.date"}},[a("v-spacer"),a("v-btn",{attrs:{text:"",color:"primary"},on:{click:function(t){e.modal=!1}}},[e._v(" Cancel ")]),a("v-btn",{attrs:{text:"",color:"primary"},on:{click:function(t){return e.$refs.dialog.save(e.item.date)}}},[e._v(" OK ")])],1)],1),a("v-text-field",{attrs:{outlined:"",label:"¿Quien nos atendió?",required:""},model:{value:e.item.whoAttendedUs,callback:function(t){e.$set(e.item,"whoAttendedUs",t)},expression:"item.whoAttendedUs"}})],1),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{color:"#273746",text:"",disabled:""},on:{click:function(t){return e.start()}}},[e._v(" Cancelar ")]),a("v-btn",{attrs:{outlined:"",color:"#273746"},on:{click:function(t){return e.update()}}},[e._v(" Guardar ")])],1)],1)],1)},n=[],r=a(629),o={name:"ClientDetail",data(){return{id:"",date:new Date(Date.now()-6e4*(new Date).getTimezoneOffset()).toISOString().substr(0,10),municipalityItems:["Cozumel","Isla Mujeres","Benito Juárez","Solidaridad","Puerto Morelos","Felipe Carrillo Puerto","José María Morelos","Lázaro Cárdenas","Tulum","Othón P. Blanco","Bacalar"],typeOfOpinionItems:["Basico"],modal:!1,dialog:!1,tradename:"",municipality:"",newDate:new Date(Date.now()-6e4*(new Date).getTimezoneOffset()).toISOString().substr(0,10),whoAttendedUs:"",typeOfOpinion:""}},computed:{...(0,r.rn)({item:e=>e.customers.findCustomer})},mounted(){this.init()},created(){this.init()},methods:{...(0,r.nv)({getItem:"customers/search",saveItem:"customers/save"}),update(){this.saveItem(this.item)},init(){this.getItem(Number(this.$route.params.id))}}},l=o,s=a(3736),c=a(3453),d=a.n(c),u=a(680),m=a(2371),v=a(7118),p=a(9846),f=a(4484),h=a(7336),b=a(6232),x=a(7238),k=a(9762),C=a(5978),w=(0,s.Z)(l,i,n,!1,null,null,null),y=w.exports;d()(w,{VBtn:u.Z,VCard:m.Z,VCardActions:v.h7,VCardText:v.ZB,VCardTitle:v.EB,VContainer:p.Z,VDatePicker:f.Z,VDialog:h.Z,VForm:b.Z,VSelect:x.Z,VSpacer:k.Z,VTextField:C.Z})}}]);
//# sourceMappingURL=199.adb6edbd.js.map