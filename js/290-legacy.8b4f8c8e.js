"use strict";(self["webpackChunkuviereport"]=self["webpackChunkuviereport"]||[]).push([[290],{8242:function(e,t,n){n.d(t,{Z:function(){return l}});var i=n(5082),s=n(4904),o=n(6878),a=n(7678),l=(0,a.Z)(s.Wk,o.Z).extend({name:"v-chip-group",provide:function(){return{chipGroup:this}},props:{column:Boolean},computed:{classes:function(){return(0,i.Z)((0,i.Z)({},s.Wk.options.computed.classes.call(this)),{},{"v-chip-group":!0,"v-chip-group--column":this.column})}},watch:{column:function(e){e&&(this.scrollOffset=0),this.$nextTick(this.onResize)}},methods:{genData:function(){return this.setTextColor(this.color,(0,i.Z)({},s.Wk.options.methods.genData.call(this)))}}})},255:function(e,t,n){var i=n(5082),s=n(3037),o=n(4712),a=n(5352),l=n(7678);t["Z"]=(0,l.Z)((0,s.d)("expansionPanels","v-expansion-panel","v-expansion-panels"),(0,o.J)("expansionPanel",!0)).extend({name:"v-expansion-panel",props:{disabled:Boolean,readonly:Boolean},data:function(){return{content:null,header:null,nextIsActive:!1}},computed:{classes:function(){return(0,i.Z)({"v-expansion-panel--active":this.isActive,"v-expansion-panel--next-active":this.nextIsActive,"v-expansion-panel--disabled":this.isDisabled},this.groupClasses)},isDisabled:function(){return this.expansionPanels.disabled||this.disabled},isReadonly:function(){return this.expansionPanels.readonly||this.readonly}},methods:{registerContent:function(e){this.content=e},unregisterContent:function(){this.content=null},registerHeader:function(e){this.header=e,e.$on("click",this.onClick)},unregisterHeader:function(){this.header=null},onClick:function(e){e.detail&&this.header.$el.blur(),this.$emit("click",e),this.isReadonly||this.isDisabled||this.toggle()},toggle:function(){var e=this;this.$nextTick((function(){return e.$emit("change")}))}},render:function(e){return e("div",{staticClass:"v-expansion-panel",class:this.classes,attrs:{"aria-expanded":String(this.isActive)}},(0,a.z9)(this))}})},2348:function(e,t,n){var i=n(7394),s=n(8223),o=n(6878),a=n(4712),l=n(5352),r=n(7678),c=(0,r.Z)(s.Z,o.Z,(0,a.f)("expansionPanel","v-expansion-panel-content","v-expansion-panel"));t["Z"]=c.extend().extend({name:"v-expansion-panel-content",data:function(){return{isActive:!1}},computed:{parentIsActive:function(){return this.expansionPanel.isActive}},watch:{parentIsActive:{immediate:!0,handler:function(e,t){var n=this;e&&(this.isBooted=!0),null==t?this.isActive=e:this.$nextTick((function(){return n.isActive=e}))}}},created:function(){this.expansionPanel.registerContent(this)},beforeDestroy:function(){this.expansionPanel.unregisterContent()},render:function(e){var t=this;return e(i.Fx,this.showLazyContent((function(){return[e("div",t.setBackgroundColor(t.color,{staticClass:"v-expansion-panel-content",directives:[{name:"show",value:t.isActive}]}),[e("div",{class:"v-expansion-panel-content__wrap"},(0,l.z9)(t))])]})))}})},400:function(e,t,n){var i=n(5082),s=n(7394),o=n(2240),a=n(6878),l=n(4712),r=n(7069),c=n(5352),u=n(7678),h=(0,u.Z)(a.Z,(0,l.f)("expansionPanel","v-expansion-panel-header","v-expansion-panel"));t["Z"]=h.extend().extend({name:"v-expansion-panel-header",directives:{ripple:r.Z},props:{disableIconRotate:Boolean,expandIcon:{type:String,default:"$expand"},hideActions:Boolean,ripple:{type:[Boolean,Object],default:!1}},data:function(){return{hasMousedown:!1}},computed:{classes:function(){return{"v-expansion-panel-header--active":this.isActive,"v-expansion-panel-header--mousedown":this.hasMousedown}},isActive:function(){return this.expansionPanel.isActive},isDisabled:function(){return this.expansionPanel.isDisabled},isReadonly:function(){return this.expansionPanel.isReadonly}},created:function(){this.expansionPanel.registerHeader(this)},beforeDestroy:function(){this.expansionPanel.unregisterHeader()},methods:{onClick:function(e){this.$emit("click",e)},genIcon:function(){var e=(0,c.z9)(this,"actions")||[this.$createElement(o.Z,this.expandIcon)];return this.$createElement(s.Z5,[this.$createElement("div",{staticClass:"v-expansion-panel-header__icon",class:{"v-expansion-panel-header__icon--disable-rotate":this.disableIconRotate},directives:[{name:"show",value:!this.isDisabled}]},e)])}},render:function(e){var t=this;return e("button",this.setBackgroundColor(this.color,{staticClass:"v-expansion-panel-header",class:this.classes,attrs:{tabindex:this.isDisabled?-1:null,type:"button","aria-expanded":this.isActive},directives:[{name:"ripple",value:this.ripple}],on:(0,i.Z)((0,i.Z)({},this.$listeners),{},{click:this.onClick,mousedown:function(){return t.hasMousedown=!0},mouseup:function(){return t.hasMousedown=!1}})}),[(0,c.z9)(this,"default",{open:this.isActive},!0),this.hideActions||this.genIcon()])}})},1214:function(e,t,n){n.d(t,{Z:function(){return a}});var i=n(5082),s=(n(4944),n(3792),n(3385)),o=n(4101),a=s.y.extend({name:"v-expansion-panels",provide:function(){return{expansionPanels:this}},props:{accordion:Boolean,disabled:Boolean,flat:Boolean,hover:Boolean,focusable:Boolean,inset:Boolean,popout:Boolean,readonly:Boolean,tile:Boolean},computed:{classes:function(){return(0,i.Z)((0,i.Z)({},s.y.options.computed.classes.call(this)),{},{"v-expansion-panels":!0,"v-expansion-panels--accordion":this.accordion,"v-expansion-panels--flat":this.flat,"v-expansion-panels--hover":this.hover,"v-expansion-panels--focusable":this.focusable,"v-expansion-panels--inset":this.inset,"v-expansion-panels--popout":this.popout,"v-expansion-panels--tile":this.tile})}},created:function(){this.$attrs.hasOwnProperty("expand")&&(0,o.fK)("expand","multiple",this),Array.isArray(this.value)&&this.value.length>0&&"boolean"===typeof this.value[0]&&(0,o.fK)(':value="[true, false, true]"',':value="[0, 2]"',this)},methods:{updateItem:function(e,t){var n=this.getValue(e,t),i=this.getValue(e,t+1);e.isActive=this.toggleMethod(n),e.nextIsActive=this.toggleMethod(i)}}})},2648:function(e,t,n){n.d(t,{Z:function(){return l}});var i=n(5082),s=(n(9653),n(7808)),o=n(7678),a=(0,o.Z)(s.Z),l=a.extend({name:"v-textarea",props:{autoGrow:Boolean,noResize:Boolean,rowHeight:{type:[Number,String],default:24,validator:function(e){return!isNaN(parseFloat(e))}},rows:{type:[Number,String],default:5,validator:function(e){return!isNaN(parseInt(e,10))}}},computed:{classes:function(){return(0,i.Z)({"v-textarea":!0,"v-textarea--auto-grow":this.autoGrow,"v-textarea--no-resize":this.noResizeHandle},s.Z.options.computed.classes.call(this))},noResizeHandle:function(){return this.noResize||this.autoGrow}},watch:{autoGrow:function(e){var t=this;this.$nextTick((function(){var n;e?t.calculateInputHeight():null==(n=t.$refs.input)||n.style.removeProperty("height")}))},lazyValue:function(){this.autoGrow&&this.$nextTick(this.calculateInputHeight)},rowHeight:function(){this.autoGrow&&this.$nextTick(this.calculateInputHeight)}},mounted:function(){var e=this;setTimeout((function(){e.autoGrow&&e.calculateInputHeight()}),0)},methods:{calculateInputHeight:function(){var e=this.$refs.input;if(e){e.style.height="0";var t=e.scrollHeight,n=parseInt(this.rows,10)*parseFloat(this.rowHeight);e.style.height=Math.max(n,t)+"px"}},genInput:function(){var e=s.Z.options.methods.genInput.call(this);return e.tag="textarea",delete e.data.attrs.type,e.data.attrs.rows=this.rows,e},onInput:function(e){s.Z.options.methods.onInput.call(this,e),this.autoGrow&&this.calculateInputHeight()},onKeyDown:function(e){this.isFocused&&13===e.keyCode&&e.stopPropagation(),this.$emit("keydown",e)}}})},6290:function(e,t,n){n.r(t),n.d(t,{default:function(){return I}});var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("v-card-title",{staticClass:"text-h5",staticStyle:{color:"#273746"}}),n("v-card",{attrs:{elevation:"0",outlined:""}},[n("v-card-title",[e._v(" "+e._s(e.nom)+" ")]),n("v-card-text",[n("strong",[n("div",[e._v(" "+e._s(e.description)+" ")])])]),n("v-divider",{staticClass:"mx-4"}),n("v-card-text",[n("v-chip-group",{attrs:{"active-class":"primary white--text",column:""},model:{value:e.value,callback:function(t){e.value=t},expression:"value"}},[n("v-chip",{attrs:{value:"yes"}},[e._v(" cumple ")]),n("v-chip",{attrs:{value:"no"}},[e._v(" no cumple ")])],1),"yes"==e.value?n("div",[n("br"),n("v-text-field",{staticClass:"text-capitalize",attrs:{outlined:"",label:"No. De foto general"},model:{value:e.overallPhoto,callback:function(t){e.overallPhoto=t},expression:"overallPhoto"}})],1):e._e(),"no"==e.value?n("div",[n("br"),n("v-expansion-panels",{attrs:{accordion:""},model:{value:e.panel,callback:function(t){e.panel=t},expression:"panel"}},e._l(e.itemsT,(function(t,i){return n("v-expansion-panel",{key:i},[n("v-expansion-panel-header",[e._v(e._s(t.number)+") "+e._s(t.specificPoint)+" ")]),n("v-expansion-panel-content",[n("div",[n("v-card",{attrs:{elevation:"0",outlined:""}},[n("v-card-text",[n("div",{staticClass:"text-right"},[n("v-btn",{attrs:{icon:""},on:{click:function(n){return e.openDeleteModal(t)}}},[n("v-icon",[e._v("delete")])],1)],1),n("v-text-field",{attrs:{outlined:"",label:"Punto específico",required:""},on:{change:e.sentChangeItems},model:{value:t.specificPoint,callback:function(n){e.$set(t,"specificPoint",n)},expression:"item.specificPoint"}}),n("v-text-field",{staticClass:"text-capitalize",attrs:{outlined:"",label:"No. De foto"},on:{change:e.sentChangeItems},model:{value:t.photoNumber,callback:function(n){e.$set(t,"photoNumber",n)},expression:"item.photoNumber"}}),n("v-textarea",{attrs:{label:"Especificaciones","auto-grow":"",outlined:"",name:"input-7-4"},on:{watch:e.sentChangeItems},model:{value:t.specs,callback:function(n){e.$set(t,"specs",n)},expression:"item.specs"}})],1)],1)],1)])],1)})),1)],1):e._e()],1),"no"==e.value?n("div",{staticClass:"text-center"},[n("v-btn",{attrs:{rounded:"",color:"primary",dark:""},on:{click:function(t){return e.addPoint()}}},[e._v(" Nuevo punto caliente ")])],1):e._e(),n("br")],1),n("v-dialog",{attrs:{persistent:"","max-width":"290"},model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[n("v-card",[n("v-card-title",{staticClass:"text-h5"},[e._v(" Borrar ")]),n("v-card-text",[e._v(" ¿Seguro que desea borrar el punto caliente?, Al borrar se ajustará el contador.")]),n("v-card-actions",[n("v-spacer"),n("v-btn",{attrs:{color:"#273746",text:""},on:{click:function(t){e.dialog=!1}}},[e._v(" Cancelar ")]),n("v-btn",{attrs:{outlined:"",color:"#273746"},on:{click:function(t){return e.deleteItem(e.idItemDelete)}}},[e._v(" Si, Borrar ")])],1)],1)],1)],1)},s=[],o=(n(2526),n(1817),n(7327),n(1539),n(1249),{name:"ItemThermography",props:{template:Object},data:function(){return{idItemDelete:null,dialog:!1,itemsT:[],description:null,nom:null,value:null,items:null,model:null,overallPhoto:null,panel:null}},watch:{value:function(e){this.$emit("setOption",e)},overallPhoto:function(e){console.log(e),this.$emit("setOverallPhoto",e)},itemsT:{deep:!0,handler:function(){console.log(this.itemsT),this.$emit("setItemsT",this.itemsT)}},template:function(){this.start()}},created:function(){this.start()},methods:{start:function(){console.log("datps"),console.log(this.template),this.description=this.template.description,this.nom=this.template.nom,this.value=this.template.value,this.items=this.template.items,this.model=this.template.model,this.overallPhoto=this.template.overallPhoto,this.template.itemsT&&(this.itemsT=this.template.itemsT)},addPoint:function(){var e=this.itemsT.length+1;this.panel=this.itemsT.length;var t={number:e,specificPoint:"",photoNumber:"",specs:""};this.itemsT.push(t)},show:function(){console.log(this.itemsT),this.$emit("setItemsT",this.itemsT)},sentChangeItems:function(){console.log("change")},openDeleteModal:function(e){this.idItemDelete=e,this.dialog=!0},deleteItem:function(e){var t=this.itemsT.filter((function(t){return t.number!=e.number}));if(console.log(t),t.length>0){var n=0,i=t.map((function(e){return n++,{number:n,photoNumber:e.photoNumber,specificPoint:e.specificPoint,specs:e.specs}}));this.itemsT=i,console.log("accommodate"),console.log(i)}0==t.length&&(this.itemsT=[]),this.panel=null,this.dialog=!1}}}),a=o,l=n(3736),r=n(3453),c=n.n(r),u=n(6190),h=n(4145),p=n(4886),d=n(4127),v=n(8242),m=n(9930),f=n(9223),x=n(255),g=n(2348),b=n(400),Z=n(1214),w=n(4324),P=n(3687),C=n(7808),k=n(2648),y=(0,l.Z)(a,i,s,!1,null,null,null),I=y.exports;c()(y,{VBtn:u.Z,VCard:h.Z,VCardActions:p.h7,VCardText:p.ZB,VCardTitle:p.EB,VChip:d.Z,VChipGroup:v.Z,VDialog:m.Z,VDivider:f.Z,VExpansionPanel:x.Z,VExpansionPanelContent:g.Z,VExpansionPanelHeader:b.Z,VExpansionPanels:Z.Z,VIcon:w.Z,VSpacer:P.Z,VTextField:C.Z,VTextarea:k.Z})}}]);
//# sourceMappingURL=290-legacy.8b4f8c8e.js.map