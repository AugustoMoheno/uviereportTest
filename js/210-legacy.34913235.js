"use strict";(self["webpackChunkuviereport"]=self["webpackChunkuviereport"]||[]).push([[210],{255:function(e,t,n){var i=n(5082),s=n(3037),a=n(4712),o=n(5352),l=n(7678);t["Z"]=(0,l.Z)((0,s.d)("expansionPanels","v-expansion-panel","v-expansion-panels"),(0,a.J)("expansionPanel",!0)).extend({name:"v-expansion-panel",props:{disabled:Boolean,readonly:Boolean},data:function(){return{content:null,header:null,nextIsActive:!1}},computed:{classes:function(){return(0,i.Z)({"v-expansion-panel--active":this.isActive,"v-expansion-panel--next-active":this.nextIsActive,"v-expansion-panel--disabled":this.isDisabled},this.groupClasses)},isDisabled:function(){return this.expansionPanels.disabled||this.disabled},isReadonly:function(){return this.expansionPanels.readonly||this.readonly}},methods:{registerContent:function(e){this.content=e},unregisterContent:function(){this.content=null},registerHeader:function(e){this.header=e,e.$on("click",this.onClick)},unregisterHeader:function(){this.header=null},onClick:function(e){e.detail&&this.header.$el.blur(),this.$emit("click",e),this.isReadonly||this.isDisabled||this.toggle()},toggle:function(){var e=this;this.$nextTick((function(){return e.$emit("change")}))}},render:function(e){return e("div",{staticClass:"v-expansion-panel",class:this.classes,attrs:{"aria-expanded":String(this.isActive)}},(0,o.z9)(this))}})},2348:function(e,t,n){var i=n(7394),s=n(8223),a=n(6878),o=n(4712),l=n(5352),r=n(7678),c=(0,r.Z)(s.Z,a.Z,(0,o.f)("expansionPanel","v-expansion-panel-content","v-expansion-panel"));t["Z"]=c.extend().extend({name:"v-expansion-panel-content",data:function(){return{isActive:!1}},computed:{parentIsActive:function(){return this.expansionPanel.isActive}},watch:{parentIsActive:{immediate:!0,handler:function(e,t){var n=this;e&&(this.isBooted=!0),null==t?this.isActive=e:this.$nextTick((function(){return n.isActive=e}))}}},created:function(){this.expansionPanel.registerContent(this)},beforeDestroy:function(){this.expansionPanel.unregisterContent()},render:function(e){var t=this;return e(i.Fx,this.showLazyContent((function(){return[e("div",t.setBackgroundColor(t.color,{staticClass:"v-expansion-panel-content",directives:[{name:"show",value:t.isActive}]}),[e("div",{class:"v-expansion-panel-content__wrap"},(0,l.z9)(t))])]})))}})},400:function(e,t,n){var i=n(5082),s=n(7394),a=n(2240),o=n(6878),l=n(4712),r=n(7069),c=n(5352),u=n(7678),h=(0,u.Z)(o.Z,(0,l.f)("expansionPanel","v-expansion-panel-header","v-expansion-panel"));t["Z"]=h.extend().extend({name:"v-expansion-panel-header",directives:{ripple:r.Z},props:{disableIconRotate:Boolean,expandIcon:{type:String,default:"$expand"},hideActions:Boolean,ripple:{type:[Boolean,Object],default:!1}},data:function(){return{hasMousedown:!1}},computed:{classes:function(){return{"v-expansion-panel-header--active":this.isActive,"v-expansion-panel-header--mousedown":this.hasMousedown}},isActive:function(){return this.expansionPanel.isActive},isDisabled:function(){return this.expansionPanel.isDisabled},isReadonly:function(){return this.expansionPanel.isReadonly}},created:function(){this.expansionPanel.registerHeader(this)},beforeDestroy:function(){this.expansionPanel.unregisterHeader()},methods:{onClick:function(e){this.$emit("click",e)},genIcon:function(){var e=(0,c.z9)(this,"actions")||[this.$createElement(a.Z,this.expandIcon)];return this.$createElement(s.Z5,[this.$createElement("div",{staticClass:"v-expansion-panel-header__icon",class:{"v-expansion-panel-header__icon--disable-rotate":this.disableIconRotate},directives:[{name:"show",value:!this.isDisabled}]},e)])}},render:function(e){var t=this;return e("button",this.setBackgroundColor(this.color,{staticClass:"v-expansion-panel-header",class:this.classes,attrs:{tabindex:this.isDisabled?-1:null,type:"button","aria-expanded":this.isActive},directives:[{name:"ripple",value:this.ripple}],on:(0,i.Z)((0,i.Z)({},this.$listeners),{},{click:this.onClick,mousedown:function(){return t.hasMousedown=!0},mouseup:function(){return t.hasMousedown=!1}})}),[(0,c.z9)(this,"default",{open:this.isActive},!0),this.hideActions||this.genIcon()])}})},1214:function(e,t,n){n.d(t,{Z:function(){return o}});var i=n(5082),s=(n(4944),n(3792),n(3385)),a=n(4101),o=s.y.extend({name:"v-expansion-panels",provide:function(){return{expansionPanels:this}},props:{accordion:Boolean,disabled:Boolean,flat:Boolean,hover:Boolean,focusable:Boolean,inset:Boolean,popout:Boolean,readonly:Boolean,tile:Boolean},computed:{classes:function(){return(0,i.Z)((0,i.Z)({},s.y.options.computed.classes.call(this)),{},{"v-expansion-panels":!0,"v-expansion-panels--accordion":this.accordion,"v-expansion-panels--flat":this.flat,"v-expansion-panels--hover":this.hover,"v-expansion-panels--focusable":this.focusable,"v-expansion-panels--inset":this.inset,"v-expansion-panels--popout":this.popout,"v-expansion-panels--tile":this.tile})}},created:function(){this.$attrs.hasOwnProperty("expand")&&(0,a.fK)("expand","multiple",this),Array.isArray(this.value)&&this.value.length>0&&"boolean"===typeof this.value[0]&&(0,a.fK)(':value="[true, false, true]"',':value="[0, 2]"',this)},methods:{updateItem:function(e,t){var n=this.getValue(e,t),i=this.getValue(e,t+1);e.isActive=this.toggleMethod(n),e.nextIsActive=this.toggleMethod(i)}}})},2648:function(e,t,n){n.d(t,{Z:function(){return l}});var i=n(5082),s=(n(9653),n(7808)),a=n(7678),o=(0,a.Z)(s.Z),l=o.extend({name:"v-textarea",props:{autoGrow:Boolean,noResize:Boolean,rowHeight:{type:[Number,String],default:24,validator:function(e){return!isNaN(parseFloat(e))}},rows:{type:[Number,String],default:5,validator:function(e){return!isNaN(parseInt(e,10))}}},computed:{classes:function(){return(0,i.Z)({"v-textarea":!0,"v-textarea--auto-grow":this.autoGrow,"v-textarea--no-resize":this.noResizeHandle},s.Z.options.computed.classes.call(this))},noResizeHandle:function(){return this.noResize||this.autoGrow}},watch:{autoGrow:function(e){var t=this;this.$nextTick((function(){var n;e?t.calculateInputHeight():null==(n=t.$refs.input)||n.style.removeProperty("height")}))},lazyValue:function(){this.autoGrow&&this.$nextTick(this.calculateInputHeight)},rowHeight:function(){this.autoGrow&&this.$nextTick(this.calculateInputHeight)}},mounted:function(){var e=this;setTimeout((function(){e.autoGrow&&e.calculateInputHeight()}),0)},methods:{calculateInputHeight:function(){var e=this.$refs.input;if(e){e.style.height="0";var t=e.scrollHeight,n=parseInt(this.rows,10)*parseFloat(this.rowHeight);e.style.height=Math.max(n,t)+"px"}},genInput:function(){var e=s.Z.options.methods.genInput.call(this);return e.tag="textarea",delete e.data.attrs.type,e.data.attrs.rows=this.rows,e},onInput:function(e){s.Z.options.methods.onInput.call(this,e),this.autoGrow&&this.calculateInputHeight()},onKeyDown:function(e){this.isFocused&&13===e.keyCode&&e.stopPropagation(),this.$emit("keydown",e)}}})},210:function(e,t,n){n.r(t),n.d(t,{default:function(){return E}});var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("v-card-title",{staticClass:"text-h5",staticStyle:{color:"#273746"}}),n("v-card-text",[n("div",[n("v-expansion-panels",{attrs:{accordion:""},model:{value:e.panel,callback:function(t){e.panel=t},expression:"panel"}},e._l(e.itemsT,(function(t,i){return n("v-expansion-panel",{key:i},[n("v-expansion-panel-header",[e._v(e._s(t.number)+") "+e._s(t.specificPoint)+" ")]),n("v-expansion-panel-content",[n("div",[n("v-card-text",[n("div",{staticClass:"text-right"},[n("v-btn",{attrs:{icon:""},on:{click:function(n){return e.openDeleteModal(t)}}},[n("v-icon",[e._v("delete")])],1)],1),n("v-text-field",{attrs:{outlined:"",label:"Punto específico",required:""},on:{change:e.sentChangeItems},model:{value:t.specificPoint,callback:function(n){e.$set(t,"specificPoint",n)},expression:"item.specificPoint"}}),e._l(t.items,(function(t,i,s){return n("div",{key:s},[n("v-checkbox",{attrs:{label:""+t.label},model:{value:t.value,callback:function(n){e.$set(t,"value",n)},expression:"itemLabel.value"}})],1)})),n("v-textarea",{attrs:{label:"Comentarios","auto-grow":"",outlined:"",name:"input-7-4"},on:{watch:e.sentChangeItems},model:{value:t.specs,callback:function(n){e.$set(t,"specs",n)},expression:"item.specs"}}),n("div",[n("br")])],2)],1)])],1)})),1)],1)]),n("div",{staticClass:"text-center"},[n("v-btn",{attrs:{rounded:"",color:"primary",dark:""},on:{click:function(t){return e.addPoint()}}},[e._v(" Nuevo punto especifico ")])],1),n("br"),n("v-dialog",{attrs:{persistent:"","max-width":"290"},model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[n("v-card",[n("v-card-title",{staticClass:"text-h5"},[e._v(" Borrar ")]),n("v-card-text",[e._v(" ¿Seguro que desea borrar?, Se ajustará el contador.")]),n("v-card-actions",[n("v-spacer"),n("v-btn",{attrs:{color:"#273746",text:""},on:{click:function(t){e.dialog=!1}}},[e._v(" Cancelar ")]),n("v-btn",{attrs:{outlined:"",color:"#273746"},on:{click:function(t){return e.deleteItem(e.idItemDelete)}}},[e._v(" Si, Borrar ")])],1)],1)],1)],1)},s=[],a=(n(2526),n(1817),n(8862),n(7327),n(1539),n(1249),{name:"ItemArea",props:{template:Object},data:function(){return{idItemDelete:null,dialog:!1,itemsT:[],description:null,nom:null,value:null,items:null,model:null,panel:null}},watch:{value:function(e){this.$emit("setOption",e)},itemsT:{deep:!0,handler:function(){console.log(this.itemsT),this.$emit("setItemsT",this.itemsT)}},template:function(){this.start()}},created:function(){this.start()},methods:{start:function(){console.log("datps"),console.log(this.template),this.description=this.template.description,this.nom=this.template.nom,this.value=this.template.value,this.items=this.template.items,this.model=this.template.model,this.template.itemsT&&(this.itemsT=this.template.itemsT)},addPoint:function(){var e=this.itemsT.length+1;this.panel=this.itemsT.length;var t={number:e,specificPoint:"",specs:"",value:null,model:this.model,items:JSON.parse(JSON.stringify(this.items))};this.itemsT.push(t)},show:function(){console.log(this.itemsT),this.$emit("setItemsT",this.itemsT)},sentChangeItems:function(){console.log("change")},openDeleteModal:function(e){this.idItemDelete=e,this.dialog=!0},deleteItem:function(e){var t=this.itemsT.filter((function(t){return t.number!=e.number}));if(console.log(t),t.length>0){var n=0,i=t.map((function(e){return n++,{number:n,specificPoint:e.specificPoint,specs:e.specs,value:null,model:"Tierra abierta"}}));this.itemsT=i,console.log("accommodate"),console.log(i)}0==t.length&&(this.itemsT=[]),this.panel=null,this.dialog=!1}}}),o=a,l=n(3736),r=n(3453),c=n.n(r),u=n(6190),h=n(4145),p=n(4886),d=n(2078),v=n(5082),f=(n(9714),n(2240)),m=n(573),x=n(7069),g=n(144),b=g.Z.extend({name:"rippleable",directives:{ripple:x.Z},props:{ripple:{type:[Boolean,Object],default:!0}},methods:{genRipple:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return this.ripple?(e.staticClass="v-input--selection-controls__ripple",e.directives=e.directives||[],e.directives.push({name:"ripple",value:{center:!0}}),this.$createElement("div",e)):null}}}),I=n(6174),k=n(7678);function C(e){e.preventDefault()}var y=(0,k.Z)(m.Z,b,I.Z).extend({name:"selectable",model:{prop:"inputValue",event:"change"},props:{id:String,inputValue:null,falseValue:null,trueValue:null,multiple:{type:Boolean,default:null},label:String},data:function(){return{hasColor:this.inputValue,lazyValue:this.inputValue}},computed:{computedColor:function(){if(this.isActive)return this.color?this.color:this.isDark&&!this.appIsDark?"white":"primary"},isMultiple:function(){return!0===this.multiple||null===this.multiple&&Array.isArray(this.internalValue)},isActive:function(){var e=this,t=this.value,n=this.internalValue;return this.isMultiple?!!Array.isArray(n)&&n.some((function(n){return e.valueComparator(n,t)})):void 0===this.trueValue||void 0===this.falseValue?t?this.valueComparator(t,n):Boolean(n):this.valueComparator(n,this.trueValue)},isDirty:function(){return this.isActive},rippleState:function(){return this.isDisabled||this.validationState?this.validationState:void 0}},watch:{inputValue:function(e){this.lazyValue=e,this.hasColor=e}},methods:{genLabel:function(){var e=m.Z.options.methods.genLabel.call(this);return e?(e.data.on={click:C},e):e},genInput:function(e,t){return this.$createElement("input",{attrs:Object.assign({"aria-checked":this.isActive.toString(),disabled:this.isDisabled,id:this.computedId,role:e,type:e},t),domProps:{value:this.value,checked:this.isActive},on:{blur:this.onBlur,change:this.onChange,focus:this.onFocus,keydown:this.onKeydown,click:C},ref:"input"})},onBlur:function(){this.isFocused=!1},onClick:function(e){this.onChange(),this.$emit("click",e)},onChange:function(){var e=this;if(this.isInteractive){var t=this.value,n=this.internalValue;if(this.isMultiple){Array.isArray(n)||(n=[]);var i=n.length;n=n.filter((function(n){return!e.valueComparator(n,t)})),n.length===i&&n.push(t)}else n=void 0!==this.trueValue&&void 0!==this.falseValue?this.valueComparator(n,this.trueValue)?this.falseValue:this.trueValue:t?this.valueComparator(n,t)?null:t:!n;this.validate(!0,n),this.internalValue=n,this.hasColor=n}},onFocus:function(){this.isFocused=!0},onKeydown:function(e){}}}),Z=["title"],w=y.extend({name:"v-checkbox",props:{indeterminate:Boolean,indeterminateIcon:{type:String,default:"$checkboxIndeterminate"},offIcon:{type:String,default:"$checkboxOff"},onIcon:{type:String,default:"$checkboxOn"}},data:function(){return{inputIndeterminate:this.indeterminate}},computed:{classes:function(){return(0,v.Z)((0,v.Z)({},m.Z.options.computed.classes.call(this)),{},{"v-input--selection-controls":!0,"v-input--checkbox":!0,"v-input--indeterminate":this.inputIndeterminate})},computedIcon:function(){return this.inputIndeterminate?this.indeterminateIcon:this.isActive?this.onIcon:this.offIcon},validationState:function(){if(!this.isDisabled||this.inputIndeterminate)return this.hasError&&this.shouldValidate?"error":this.hasSuccess?"success":null!==this.hasColor?this.computedColor:void 0}},watch:{indeterminate:function(e){var t=this;this.$nextTick((function(){return t.inputIndeterminate=e}))},inputIndeterminate:function(e){this.$emit("update:indeterminate",e)},isActive:function(){this.indeterminate&&(this.inputIndeterminate=!1)}},methods:{genCheckbox:function(){var e=this.attrs$,t=(e.title,(0,d.Z)(e,Z));return this.$createElement("div",{staticClass:"v-input--selection-controls__input"},[this.$createElement(f.Z,this.setTextColor(this.validationState,{props:{dense:this.dense,dark:this.dark,light:this.light}}),this.computedIcon),this.genInput("checkbox",(0,v.Z)((0,v.Z)({},t),{},{"aria-checked":this.inputIndeterminate?"mixed":this.isActive.toString()})),this.genRipple(this.setTextColor(this.rippleState))])},genDefaultSlot:function(){return[this.genCheckbox(),this.genLabel()]}}}),V=n(9930),A=n(255),$=n(2348),P=n(400),T=n(1214),B=n(4324),S=n(3687),D=n(7808),_=n(2648),H=(0,l.Z)(o,i,s,!1,null,null,null),E=H.exports;c()(H,{VBtn:u.Z,VCard:h.Z,VCardActions:p.h7,VCardText:p.ZB,VCardTitle:p.EB,VCheckbox:w,VDialog:V.Z,VExpansionPanel:A.Z,VExpansionPanelContent:$.Z,VExpansionPanelHeader:P.Z,VExpansionPanels:T.Z,VIcon:B.Z,VSpacer:S.Z,VTextField:D.Z,VTextarea:_.Z})}}]);
//# sourceMappingURL=210-legacy.34913235.js.map