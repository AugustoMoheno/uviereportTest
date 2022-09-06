"use strict";(self["webpackChunkuviereport"]=self["webpackChunkuviereport"]||[]).push([[197],{6105:function(e,t,n){n.d(t,{Z:function(){return o}});var i=n(1587),a=n(6952),s=n(3325),o=(0,s.Z)(i.Wk,a.Z).extend({name:"v-chip-group",provide(){return{chipGroup:this}},props:{column:Boolean},computed:{classes(){return{...i.Wk.options.computed.classes.call(this),"v-chip-group":!0,"v-chip-group--column":this.column}}},watch:{column(e){e&&(this.scrollOffset=0),this.$nextTick(this.onResize)}},methods:{genData(){return this.setTextColor(this.color,{...i.Wk.options.methods.genData.call(this)})}}})},6845:function(e,t,n){var i=n(7352),a=n(6257),s=n(4589),o=n(3325);t["Z"]=(0,o.Z)((0,i.d)("expansionPanels","v-expansion-panel","v-expansion-panels"),(0,a.J)("expansionPanel",!0)).extend({name:"v-expansion-panel",props:{disabled:Boolean,readonly:Boolean},data(){return{content:null,header:null,nextIsActive:!1}},computed:{classes(){return{"v-expansion-panel--active":this.isActive,"v-expansion-panel--next-active":this.nextIsActive,"v-expansion-panel--disabled":this.isDisabled,...this.groupClasses}},isDisabled(){return this.expansionPanels.disabled||this.disabled},isReadonly(){return this.expansionPanels.readonly||this.readonly}},methods:{registerContent(e){this.content=e},unregisterContent(){this.content=null},registerHeader(e){this.header=e,e.$on("click",this.onClick)},unregisterHeader(){this.header=null},onClick(e){e.detail&&this.header.$el.blur(),this.$emit("click",e),this.isReadonly||this.isDisabled||this.toggle()},toggle(){this.$nextTick((()=>this.$emit("change")))}},render(e){return e("div",{staticClass:"v-expansion-panel",class:this.classes,attrs:{"aria-expanded":String(this.isActive)}},(0,s.z9)(this))}})},2443:function(e,t,n){var i=n(5827),a=n(8625),s=n(6952),o=n(6257),r=n(4589),l=n(3325);const c=(0,l.Z)(a.Z,s.Z,(0,o.f)("expansionPanel","v-expansion-panel-content","v-expansion-panel"));t["Z"]=c.extend().extend({name:"v-expansion-panel-content",data:()=>({isActive:!1}),computed:{parentIsActive(){return this.expansionPanel.isActive}},watch:{parentIsActive:{immediate:!0,handler(e,t){e&&(this.isBooted=!0),null==t?this.isActive=e:this.$nextTick((()=>this.isActive=e))}}},created(){this.expansionPanel.registerContent(this)},beforeDestroy(){this.expansionPanel.unregisterContent()},render(e){return e(i.Fx,this.showLazyContent((()=>[e("div",this.setBackgroundColor(this.color,{staticClass:"v-expansion-panel-content",directives:[{name:"show",value:this.isActive}]}),[e("div",{class:"v-expansion-panel-content__wrap"},(0,r.z9)(this))])])))}})},1192:function(e,t,n){var i=n(5827),a=n(172),s=n(6952),o=n(6257),r=n(6286),l=n(4589),c=n(3325);const d=(0,c.Z)(s.Z,(0,o.f)("expansionPanel","v-expansion-panel-header","v-expansion-panel"));t["Z"]=d.extend().extend({name:"v-expansion-panel-header",directives:{ripple:r.Z},props:{disableIconRotate:Boolean,expandIcon:{type:String,default:"$expand"},hideActions:Boolean,ripple:{type:[Boolean,Object],default:!1}},data:()=>({hasMousedown:!1}),computed:{classes(){return{"v-expansion-panel-header--active":this.isActive,"v-expansion-panel-header--mousedown":this.hasMousedown}},isActive(){return this.expansionPanel.isActive},isDisabled(){return this.expansionPanel.isDisabled},isReadonly(){return this.expansionPanel.isReadonly}},created(){this.expansionPanel.registerHeader(this)},beforeDestroy(){this.expansionPanel.unregisterHeader()},methods:{onClick(e){this.$emit("click",e)},genIcon(){const e=(0,l.z9)(this,"actions")||[this.$createElement(a.Z,this.expandIcon)];return this.$createElement(i.Z5,[this.$createElement("div",{staticClass:"v-expansion-panel-header__icon",class:{"v-expansion-panel-header__icon--disable-rotate":this.disableIconRotate},directives:[{name:"show",value:!this.isDisabled}]},e)])}},render(e){return e("button",this.setBackgroundColor(this.color,{staticClass:"v-expansion-panel-header",class:this.classes,attrs:{tabindex:this.isDisabled?-1:null,type:"button","aria-expanded":this.isActive},directives:[{name:"ripple",value:this.ripple}],on:{...this.$listeners,click:this.onClick,mousedown:()=>this.hasMousedown=!0,mouseup:()=>this.hasMousedown=!1}}),[(0,l.z9)(this,"default",{open:this.isActive},!0),this.hideActions||this.genIcon()])}})},5630:function(e,t,n){n.d(t,{Z:function(){return s}});var i=n(4622),a=n(1824),s=i.y.extend({name:"v-expansion-panels",provide(){return{expansionPanels:this}},props:{accordion:Boolean,disabled:Boolean,flat:Boolean,hover:Boolean,focusable:Boolean,inset:Boolean,popout:Boolean,readonly:Boolean,tile:Boolean},computed:{classes(){return{...i.y.options.computed.classes.call(this),"v-expansion-panels":!0,"v-expansion-panels--accordion":this.accordion,"v-expansion-panels--flat":this.flat,"v-expansion-panels--hover":this.hover,"v-expansion-panels--focusable":this.focusable,"v-expansion-panels--inset":this.inset,"v-expansion-panels--popout":this.popout,"v-expansion-panels--tile":this.tile}}},created(){this.$attrs.hasOwnProperty("expand")&&(0,a.fK)("expand","multiple",this),Array.isArray(this.value)&&this.value.length>0&&"boolean"===typeof this.value[0]&&(0,a.fK)(':value="[true, false, true]"',':value="[0, 2]"',this)},methods:{updateItem(e,t){const n=this.getValue(e,t),i=this.getValue(e,t+1);e.isActive=this.toggleMethod(n),e.nextIsActive=this.toggleMethod(i)}}})},4197:function(e,t,n){n.r(t),n.d(t,{default:function(){return H}});var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-card",{staticClass:"mx-auto",attrs:{elevation:"0",color:"#F2F4F4",height:"100vh"}},[0==e.items.length?n("div",[n("p",{staticClass:"text-center"},[e._v("..Sin Contactos...")])]):n("div",[n("v-virtual-scroll",{staticStyle:{height:"91vh"},attrs:{items:e.items,"item-height":80},scopedSlots:e._u([{key:"default",fn:function(t){var i=t.item;return[n("v-card",{attrs:{elevation:"0",outlined:""}},[n("div",[n("v-list-item",{on:{click:function(t){return e.open(i)}}},[n("v-list-item-action",[n("v-btn",{staticClass:"white--text",attrs:{fab:"",small:"",depressed:"",color:"#273746"}},[e._v(" "+e._s(i.reference)+" ")])],1),n("v-list-item-content",[n("v-list-item-title",[n("strong",[e._v(" "+e._s(i.nomenclature))])]),n("v-list-item-subtitle",[e._v(e._s(i.location))])],1),n("v-list-item-action",[n("v-icon",[e._v(" toc ")])],1)],1)],1)])]}}])})],1),n("board-new",{ref:"board"})],1)},a=[],s=n(629),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-row",{attrs:{justify:"center"}},[n("v-dialog",{attrs:{fullscreen:"","hide-overlay":"",transition:"dialog-bottom-transition"},scopedSlots:e._u([{key:"activator",fn:function(t){var i=t.on,a=t.attrs;return[n("v-btn",e._g(e._b({attrs:{fab:"",dark:"",color:"rgba(39,55,70,1)",fixed:"",right:"",bottom:""},on:{click:function(t){return e.newBoard()}}},"v-btn",a,!1),i),[n("v-icon",{attrs:{size:"23",color:"#D5DBDB",dark:""}},[e._v("add")])],1)]}}]),model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[n("v-card",{attrs:{color:"#F2F4F4"}},[n("v-card",{staticClass:"overflow-hidden"},[n("v-app-bar",{attrs:{absolute:"",dark:"",color:"primary","elevate-on-scroll":"","scroll-target":"#scrolling-techniques-7"}},[n("v-btn",{attrs:{icon:"",dark:""},on:{click:function(t){e.dialog=!1}}},[n("v-icon",[e._v("arrow_back")])],1),n("v-toolbar-title",[e._v("Nuevo Contacto")]),n("v-spacer"),n("v-toolbar-items",[n("v-btn",{attrs:{dark:"",text:"",disabled:""},on:{click:function(t){return e.create()}}},[e._v(" Crear ")])],1)],1),n("v-sheet",{staticClass:"overflow-y-auto",staticStyle:{color:"#273746"},attrs:{id:"scrolling-techniques-7",height:"100vh"}},[n("v-container",[n("v-card-title",{staticClass:"text-h5",staticStyle:{color:"#273746"}},[e._v(" Nuevo Tablero ")]),n("v-card-text",{staticStyle:{color:"#273746"}},[e._v("Datos del contacto")]),n("v-form",{ref:"form"},[n("v-text-field",{staticClass:"text-capitalize",attrs:{outlined:"",disabled:"",label:"Referencia",required:""},model:{value:e.reference,callback:function(t){e.reference=t},expression:"reference"}}),n("v-text-field",{attrs:{outlined:"",label:"Area",required:""},model:{value:e.nomenclature,callback:function(t){e.nomenclature=t},expression:"nomenclature"}})],1),n("v-expansion-panels",{attrs:{accordion:""}},e._l(e.items2,(function(t,i){return n("v-expansion-panel",{key:i},[n("v-expansion-panel-header",[e._v(e._s(t))]),n("v-expansion-panel-content",[n("div",[n("v-text-field",{attrs:{outlined:"",label:"Punto específico",required:""}}),n("v-card",{attrs:{elevation:"0",outlined:""}},[n("v-card-title",[e._v(" "+e._s(e.nom)+" ")]),n("v-card-text",[n("strong",[n("div",[e._v(" "+e._s(e.description)+" ")])])]),n("v-divider",{staticClass:"mx-4"}),n("v-card-text",[n("v-chip-group",{attrs:{"active-class":"primary white--text",column:""},model:{value:e.value,callback:function(t){e.value=t},expression:"value"}},[n("v-chip",{attrs:{value:"yes"}},[e._v(" cumple ")]),n("v-chip",{attrs:{value:"no"}},[e._v(" no cumple ")])],1),"no"==e.value?n("div",[n("br"),n("v-select",{attrs:{outlined:"",items:e.items,required:""},model:{value:e.model,callback:function(t){e.model=t},expression:"model"}})],1):e._e()],1)],1)],1)])],1)})),1),n("br"),n("br"),n("div",{staticClass:"text-center"},[n("v-btn",{attrs:{rounded:"",color:"primary",dark:""},on:{click:function(t){return e.addPoint()}}},[e._v(" Nuevo punto espefico ")])],1)],1)],1)],1)],1)],1)],1)},r=[],l={name:"ContactNew",data(){return{editDialog:!1,items2:[],nom:"200-11",description:"Polaridad de las conexiones",value:null,nomenclature:"",location:"",dialog:!1,model:"Tierra abierta",result:[],items:["Tierra abierta","Neutro abierto","Línea abierta","Línea / tierra invertida","Línea / nuetro invertido","Correcto"]}},computed:{reference(){return this.items2.length+1},textDialog(){return this.editDialog?"Editar Contacto":"Nuevo Contacto"},textSave(){return this.editDialog?"Guardar":"Crear"}},methods:{addPoint(){this.items2.push(this.items2.length+1)},create(){const e={reference:1,nomenclature:this.nomenclature,location:this.location};console.log(e)},referenceAuto(){return this.items2.length+1},newBoard(){this.emptyData(),this.editDialog=!1,this.reference=this.items.length+1,this.result=JSON.parse(JSON.stringify(this.config))},openBoard(e){this.editDialog=!0,this.dialog=!0,this.toAssign(e),this.result=e.result},emptyData(){this.nomenclature="",this.location="",this.value=null}}},c=l,d=n(3736),u=n(3453),h=n.n(u),p=n(6986),v=n(680),m=n(2371),x=n(7118),f=n(5424),b=n(6105),g=n(9846),C=n(7336),Z=n(1418),k=n(6845),_=n(2443),y=n(1192),V=n(5630),B=n(6232),w=n(6428),A=n(2877),D=n(7238),P=n(3385),I=n(9762),S=n(5978),$=n(7921),T=(0,d.Z)(c,o,r,!1,null,"38d3bd05",null),L=T.exports;h()(T,{VAppBar:p.Z,VBtn:v.Z,VCard:m.Z,VCardText:x.ZB,VCardTitle:x.EB,VChip:f.Z,VChipGroup:b.Z,VContainer:g.Z,VDialog:C.Z,VDivider:Z.Z,VExpansionPanel:k.Z,VExpansionPanelContent:_.Z,VExpansionPanelHeader:y.Z,VExpansionPanels:V.Z,VForm:B.Z,VIcon:w.Z,VRow:A.Z,VSelect:D.Z,VSheet:P.Z,VSpacer:I.Z,VTextField:S.Z,VToolbarItems:$.lj,VToolbarTitle:$.qW});var E={components:{BoardNew:L},name:"ContactList",data(){return{}},computed:{...(0,s.rn)({data:e=>e.customers.findCustomer}),items(){return this.data.contactList.data},config(){return this.data.boardList.config}},methods:{open(e){this.$refs.board.openBoard(e)}}},F=E,N=n(7620),R=n(3099),z=n(6451),q=n(5683),M=(0,d.Z)(F,i,a,!1,null,null,null),H=M.exports;h()(M,{VBtn:v.Z,VCard:m.Z,VIcon:w.Z,VListItem:N.Z,VListItemAction:R.Z,VListItemContent:z.km,VListItemSubtitle:z.oZ,VListItemTitle:z.V9,VVirtualScroll:q.Z})}}]);
//# sourceMappingURL=197.450b86c9.js.map