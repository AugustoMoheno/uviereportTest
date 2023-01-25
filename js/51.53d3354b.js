"use strict";(self["webpackChunkuviereport"]=self["webpackChunkuviereport"]||[]).push([[51],{255:function(e,t,n){var s=n(3037),a=n(4712),i=n(5352),o=n(7678);t["Z"]=(0,o.Z)((0,s.d)("expansionPanels","v-expansion-panel","v-expansion-panels"),(0,a.J)("expansionPanel",!0)).extend({name:"v-expansion-panel",props:{disabled:Boolean,readonly:Boolean},data(){return{content:null,header:null,nextIsActive:!1}},computed:{classes(){return{"v-expansion-panel--active":this.isActive,"v-expansion-panel--next-active":this.nextIsActive,"v-expansion-panel--disabled":this.isDisabled,...this.groupClasses}},isDisabled(){return this.expansionPanels.disabled||this.disabled},isReadonly(){return this.expansionPanels.readonly||this.readonly}},methods:{registerContent(e){this.content=e},unregisterContent(){this.content=null},registerHeader(e){this.header=e,e.$on("click",this.onClick)},unregisterHeader(){this.header=null},onClick(e){e.detail&&this.header.$el.blur(),this.$emit("click",e),this.isReadonly||this.isDisabled||this.toggle()},toggle(){this.$nextTick((()=>this.$emit("change")))}},render(e){return e("div",{staticClass:"v-expansion-panel",class:this.classes,attrs:{"aria-expanded":String(this.isActive)}},(0,i.z9)(this))}})},2348:function(e,t,n){var s=n(7394),a=n(8223),i=n(6878),o=n(4712),l=n(5352),r=n(7678);const c=(0,r.Z)(a.Z,i.Z,(0,o.f)("expansionPanel","v-expansion-panel-content","v-expansion-panel"));t["Z"]=c.extend().extend({name:"v-expansion-panel-content",data:()=>({isActive:!1}),computed:{parentIsActive(){return this.expansionPanel.isActive}},watch:{parentIsActive:{immediate:!0,handler(e,t){e&&(this.isBooted=!0),null==t?this.isActive=e:this.$nextTick((()=>this.isActive=e))}}},created(){this.expansionPanel.registerContent(this)},beforeDestroy(){this.expansionPanel.unregisterContent()},render(e){return e(s.Fx,this.showLazyContent((()=>[e("div",this.setBackgroundColor(this.color,{staticClass:"v-expansion-panel-content",directives:[{name:"show",value:this.isActive}]}),[e("div",{class:"v-expansion-panel-content__wrap"},(0,l.z9)(this))])])))}})},400:function(e,t,n){var s=n(7394),a=n(2240),i=n(6878),o=n(4712),l=n(7069),r=n(5352),c=n(7678);const d=(0,c.Z)(i.Z,(0,o.f)("expansionPanel","v-expansion-panel-header","v-expansion-panel"));t["Z"]=d.extend().extend({name:"v-expansion-panel-header",directives:{ripple:l.Z},props:{disableIconRotate:Boolean,expandIcon:{type:String,default:"$expand"},hideActions:Boolean,ripple:{type:[Boolean,Object],default:!1}},data:()=>({hasMousedown:!1}),computed:{classes(){return{"v-expansion-panel-header--active":this.isActive,"v-expansion-panel-header--mousedown":this.hasMousedown}},isActive(){return this.expansionPanel.isActive},isDisabled(){return this.expansionPanel.isDisabled},isReadonly(){return this.expansionPanel.isReadonly}},created(){this.expansionPanel.registerHeader(this)},beforeDestroy(){this.expansionPanel.unregisterHeader()},methods:{onClick(e){this.$emit("click",e)},genIcon(){const e=(0,r.z9)(this,"actions")||[this.$createElement(a.Z,this.expandIcon)];return this.$createElement(s.Z5,[this.$createElement("div",{staticClass:"v-expansion-panel-header__icon",class:{"v-expansion-panel-header__icon--disable-rotate":this.disableIconRotate},directives:[{name:"show",value:!this.isDisabled}]},e)])}},render(e){return e("button",this.setBackgroundColor(this.color,{staticClass:"v-expansion-panel-header",class:this.classes,attrs:{tabindex:this.isDisabled?-1:null,type:"button","aria-expanded":this.isActive},directives:[{name:"ripple",value:this.ripple}],on:{...this.$listeners,click:this.onClick,mousedown:()=>this.hasMousedown=!0,mouseup:()=>this.hasMousedown=!1}}),[(0,r.z9)(this,"default",{open:this.isActive},!0),this.hideActions||this.genIcon()])}})},1214:function(e,t,n){n.d(t,{Z:function(){return i}});var s=n(3385),a=n(4101),i=s.y.extend({name:"v-expansion-panels",provide(){return{expansionPanels:this}},props:{accordion:Boolean,disabled:Boolean,flat:Boolean,hover:Boolean,focusable:Boolean,inset:Boolean,popout:Boolean,readonly:Boolean,tile:Boolean},computed:{classes(){return{...s.y.options.computed.classes.call(this),"v-expansion-panels":!0,"v-expansion-panels--accordion":this.accordion,"v-expansion-panels--flat":this.flat,"v-expansion-panels--hover":this.hover,"v-expansion-panels--focusable":this.focusable,"v-expansion-panels--inset":this.inset,"v-expansion-panels--popout":this.popout,"v-expansion-panels--tile":this.tile}}},created(){this.$attrs.hasOwnProperty("expand")&&(0,a.fK)("expand","multiple",this),Array.isArray(this.value)&&this.value.length>0&&"boolean"===typeof this.value[0]&&(0,a.fK)(':value="[true, false, true]"',':value="[0, 2]"',this)},methods:{updateItem(e,t){const n=this.getValue(e,t),s=this.getValue(e,t+1);e.isActive=this.toggleMethod(n),e.nextIsActive=this.toggleMethod(s)}}})},2648:function(e,t,n){n.d(t,{Z:function(){return o}});var s=n(7808),a=n(7678);const i=(0,a.Z)(s.Z);var o=i.extend({name:"v-textarea",props:{autoGrow:Boolean,noResize:Boolean,rowHeight:{type:[Number,String],default:24,validator:e=>!isNaN(parseFloat(e))},rows:{type:[Number,String],default:5,validator:e=>!isNaN(parseInt(e,10))}},computed:{classes(){return{"v-textarea":!0,"v-textarea--auto-grow":this.autoGrow,"v-textarea--no-resize":this.noResizeHandle,...s.Z.options.computed.classes.call(this)}},noResizeHandle(){return this.noResize||this.autoGrow}},watch:{autoGrow(e){this.$nextTick((()=>{var t;e?this.calculateInputHeight():null==(t=this.$refs.input)||t.style.removeProperty("height")}))},lazyValue(){this.autoGrow&&this.$nextTick(this.calculateInputHeight)},rowHeight(){this.autoGrow&&this.$nextTick(this.calculateInputHeight)}},mounted(){setTimeout((()=>{this.autoGrow&&this.calculateInputHeight()}),0)},methods:{calculateInputHeight(){const e=this.$refs.input;if(!e)return;e.style.height="0";const t=e.scrollHeight,n=parseInt(this.rows,10)*parseFloat(this.rowHeight);e.style.height=Math.max(n,t)+"px"},genInput(){const e=s.Z.options.methods.genInput.call(this);return e.tag="textarea",delete e.data.attrs.type,e.data.attrs.rows=this.rows,e},onInput(e){s.Z.options.methods.onInput.call(this,e),this.autoGrow&&this.calculateInputHeight()},onKeyDown(e){this.isFocused&&13===e.keyCode&&e.stopPropagation(),this.$emit("keydown",e)}}})},51:function(e,t,n){n.r(t),n.d(t,{default:function(){return V}});var s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("v-card-title",{staticClass:"text-h5",staticStyle:{color:"#273746"}}),n("v-card",{attrs:{elevation:"0",outlined:""}},[n("v-divider",{staticClass:"mx-4"}),n("v-card-text",[n("div",[n("br"),n("v-expansion-panels",{attrs:{accordion:""},model:{value:e.panel,callback:function(t){e.panel=t},expression:"panel"}},e._l(e.itemsT,(function(t,s){return n("v-expansion-panel",{key:s},[n("v-expansion-panel-header",[e._v(e._s(t.number)+") "+e._s(t.specificPoint)+" ")]),n("v-expansion-panel-content",[n("div",[n("v-card",{attrs:{elevation:"0",outlined:""}},[n("v-card-text",[n("div",{staticClass:"text-right"},[n("v-btn",{attrs:{icon:""},on:{click:function(n){return e.openDeleteModal(t)}}},[n("v-icon",[e._v("delete")])],1)],1),n("v-text-field",{attrs:{outlined:"",label:"Punto específico",required:""},on:{change:e.sentChangeItems},model:{value:t.specificPoint,callback:function(n){e.$set(t,"specificPoint",n)},expression:"item.specificPoint"}}),n("v-select",{attrs:{outlined:"",items:e.typeItems,label:"Tipo","item-text":"name",required:"","return-object":""},on:{change:function(n){t.observation=e.automaticValue(t)}},model:{value:t.type,callback:function(n){e.$set(t,"type",n)},expression:"item.type"}}),n("v-text-field",{attrs:{outlined:"",label:"Valor medido",type:"number",required:""},on:{input:function(n){t.observation=e.automaticValue(t)}},model:{value:t.measuredValue,callback:function(n){e.$set(t,"measuredValue",n)},expression:"item.measuredValue"}}),n("v-text-field",{attrs:{outlined:"",value:"3",label:"Observación",required:"",disabled:""},on:{change:e.sentChangeItems},model:{value:t.observation,callback:function(n){e.$set(t,"observation",n)},expression:"item.observation"}}),n("v-textarea",{attrs:{label:"Notas","auto-grow":"",outlined:"",name:"input-7-4"},on:{change:e.sentChangeItems},model:{value:t.notes,callback:function(n){e.$set(t,"notes",n)},expression:"item.notes"}})],1)],1)],1)])],1)})),1)],1)]),n("div",{staticClass:"text-center"},[n("v-btn",{attrs:{rounded:"",color:"primary",dark:""},on:{click:function(t){return e.addPoint()}}},[e._v(" Nuevo punto específico ")])],1),n("br")],1),n("v-dialog",{attrs:{persistent:"","max-width":"290"},model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[n("v-card",[n("v-card-title",{staticClass:"text-h5"},[e._v(" Borrar ")]),n("v-card-text",[e._v(" ¿Seguro que desea borrar el punto específico?, Al borrar se ajustará el contador.")]),n("v-card-actions",[n("v-spacer"),n("v-btn",{attrs:{color:"#273746",text:""},on:{click:function(t){e.dialog=!1}}},[e._v(" Cancelar ")]),n("v-btn",{attrs:{outlined:"",color:"#273746"},on:{click:function(t){return e.deleteItem(e.idItemDelete)}}},[e._v(" Si, Borrar ")])],1)],1)],1)],1)},a=[],i={name:"ItemLand",props:{template:Object},data(){return{idItemDelete:null,dialog:!1,itemsT:[],typeItems:[{id:1,name:"Pararrayo",maxValue:10},{id:2,name:"Equipo de utilización",maxValue:25}],panel:null}},watch:{value(e){this.$emit("setOption",e)},overallPhoto(e){this.$emit("setOverallPhoto",e)},itemsT:{deep:!0,handler(){this.$emit("setItemsT",this.itemsT)}},template(){this.start()}},created(){this.start()},methods:{start(){this.template.itemsT&&(this.itemsT=this.template.itemsT)},addPoint(){const e=this.itemsT.length+1;this.panel=this.itemsT.length;const t={number:e,specificPoint:"",type:null,measuredValue:"",observation:"",notes:""};this.itemsT.push(t)},show(){console.log(this.itemsT),this.$emit("setItemsT",this.itemsT)},sentChangeItems(){console.log("change")},openDeleteModal(e){this.idItemDelete=e,this.dialog=!0},deleteItem(e){let t=this.itemsT.filter((t=>t.number!=e.number));if(console.log(t),t.length>0){let e=0,n=t.map((t=>(e++,{number:e,specificPoint:t.specificPoint,type:t.type,measuredValue:t.measuredValue,observation:t.observation,notes:t.notes})));this.itemsT=n,console.log("accommodate"),console.log(n)}0==t.length&&(this.itemsT=[]),this.panel=null,this.dialog=!1},automaticValue(e){return null==e.type||""==e.measuredValue||isNaN(e.measuredValue)?"":e.measuredValue>e.type.maxValue?"NO CUMPLE":"CUMPLE"}}},o=i,l=n(1001),r=n(3453),c=n.n(r),d=n(6190),u=n(4145),p=n(4886),h=n(9930),v=n(9223),m=n(255),x=n(2348),g=n(400),b=n(1214),f=n(4324),y=n(1399),I=n(3687),w=n(7808),P=n(2648),C=(0,l.Z)(o,s,a,!1,null,null,null),V=C.exports;c()(C,{VBtn:d.Z,VCard:u.Z,VCardActions:p.h7,VCardText:p.ZB,VCardTitle:p.EB,VDialog:h.Z,VDivider:v.Z,VExpansionPanel:m.Z,VExpansionPanelContent:x.Z,VExpansionPanelHeader:g.Z,VExpansionPanels:b.Z,VIcon:f.Z,VSelect:y.Z,VSpacer:I.Z,VTextField:w.Z,VTextarea:P.Z})}}]);
//# sourceMappingURL=51.53d3354b.js.map