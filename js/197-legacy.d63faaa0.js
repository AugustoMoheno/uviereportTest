"use strict";(self["webpackChunkuviereport"]=self["webpackChunkuviereport"]||[]).push([[197],{6105:function(e,t,n){n.d(t,{Z:function(){return r}});var i=n(4367),a=n(1587),o=n(6952),s=n(3325),r=(0,s.Z)(a.Wk,o.Z).extend({name:"v-chip-group",provide:function(){return{chipGroup:this}},props:{column:Boolean},computed:{classes:function(){return(0,i.Z)((0,i.Z)({},a.Wk.options.computed.classes.call(this)),{},{"v-chip-group":!0,"v-chip-group--column":this.column})}},watch:{column:function(e){e&&(this.scrollOffset=0),this.$nextTick(this.onResize)}},methods:{genData:function(){return this.setTextColor(this.color,(0,i.Z)({},a.Wk.options.methods.genData.call(this)))}}})},6845:function(e,t,n){var i=n(4367),a=n(7352),o=n(6257),s=n(4589),r=n(3325);t["Z"]=(0,r.Z)((0,a.d)("expansionPanels","v-expansion-panel","v-expansion-panels"),(0,o.J)("expansionPanel",!0)).extend({name:"v-expansion-panel",props:{disabled:Boolean,readonly:Boolean},data:function(){return{content:null,header:null,nextIsActive:!1}},computed:{classes:function(){return(0,i.Z)({"v-expansion-panel--active":this.isActive,"v-expansion-panel--next-active":this.nextIsActive,"v-expansion-panel--disabled":this.isDisabled},this.groupClasses)},isDisabled:function(){return this.expansionPanels.disabled||this.disabled},isReadonly:function(){return this.expansionPanels.readonly||this.readonly}},methods:{registerContent:function(e){this.content=e},unregisterContent:function(){this.content=null},registerHeader:function(e){this.header=e,e.$on("click",this.onClick)},unregisterHeader:function(){this.header=null},onClick:function(e){e.detail&&this.header.$el.blur(),this.$emit("click",e),this.isReadonly||this.isDisabled||this.toggle()},toggle:function(){var e=this;this.$nextTick((function(){return e.$emit("change")}))}},render:function(e){return e("div",{staticClass:"v-expansion-panel",class:this.classes,attrs:{"aria-expanded":String(this.isActive)}},(0,s.z9)(this))}})},2443:function(e,t,n){var i=n(5827),a=n(8625),o=n(6952),s=n(6257),r=n(4589),l=n(3325),c=(0,l.Z)(a.Z,o.Z,(0,s.f)("expansionPanel","v-expansion-panel-content","v-expansion-panel"));t["Z"]=c.extend().extend({name:"v-expansion-panel-content",data:function(){return{isActive:!1}},computed:{parentIsActive:function(){return this.expansionPanel.isActive}},watch:{parentIsActive:{immediate:!0,handler:function(e,t){var n=this;e&&(this.isBooted=!0),null==t?this.isActive=e:this.$nextTick((function(){return n.isActive=e}))}}},created:function(){this.expansionPanel.registerContent(this)},beforeDestroy:function(){this.expansionPanel.unregisterContent()},render:function(e){var t=this;return e(i.Fx,this.showLazyContent((function(){return[e("div",t.setBackgroundColor(t.color,{staticClass:"v-expansion-panel-content",directives:[{name:"show",value:t.isActive}]}),[e("div",{class:"v-expansion-panel-content__wrap"},(0,r.z9)(t))])]})))}})},1192:function(e,t,n){var i=n(4367),a=n(5827),o=n(172),s=n(6952),r=n(6257),l=n(6286),c=n(4589),u=n(3325),d=(0,u.Z)(s.Z,(0,r.f)("expansionPanel","v-expansion-panel-header","v-expansion-panel"));t["Z"]=d.extend().extend({name:"v-expansion-panel-header",directives:{ripple:l.Z},props:{disableIconRotate:Boolean,expandIcon:{type:String,default:"$expand"},hideActions:Boolean,ripple:{type:[Boolean,Object],default:!1}},data:function(){return{hasMousedown:!1}},computed:{classes:function(){return{"v-expansion-panel-header--active":this.isActive,"v-expansion-panel-header--mousedown":this.hasMousedown}},isActive:function(){return this.expansionPanel.isActive},isDisabled:function(){return this.expansionPanel.isDisabled},isReadonly:function(){return this.expansionPanel.isReadonly}},created:function(){this.expansionPanel.registerHeader(this)},beforeDestroy:function(){this.expansionPanel.unregisterHeader()},methods:{onClick:function(e){this.$emit("click",e)},genIcon:function(){var e=(0,c.z9)(this,"actions")||[this.$createElement(o.Z,this.expandIcon)];return this.$createElement(a.Z5,[this.$createElement("div",{staticClass:"v-expansion-panel-header__icon",class:{"v-expansion-panel-header__icon--disable-rotate":this.disableIconRotate},directives:[{name:"show",value:!this.isDisabled}]},e)])}},render:function(e){var t=this;return e("button",this.setBackgroundColor(this.color,{staticClass:"v-expansion-panel-header",class:this.classes,attrs:{tabindex:this.isDisabled?-1:null,type:"button","aria-expanded":this.isActive},directives:[{name:"ripple",value:this.ripple}],on:(0,i.Z)((0,i.Z)({},this.$listeners),{},{click:this.onClick,mousedown:function(){return t.hasMousedown=!0},mouseup:function(){return t.hasMousedown=!1}})}),[(0,c.z9)(this,"default",{open:this.isActive},!0),this.hideActions||this.genIcon()])}})},5630:function(e,t,n){n.d(t,{Z:function(){return s}});var i=n(4367),a=(n(4944),n(3792),n(4622)),o=n(1824),s=a.y.extend({name:"v-expansion-panels",provide:function(){return{expansionPanels:this}},props:{accordion:Boolean,disabled:Boolean,flat:Boolean,hover:Boolean,focusable:Boolean,inset:Boolean,popout:Boolean,readonly:Boolean,tile:Boolean},computed:{classes:function(){return(0,i.Z)((0,i.Z)({},a.y.options.computed.classes.call(this)),{},{"v-expansion-panels":!0,"v-expansion-panels--accordion":this.accordion,"v-expansion-panels--flat":this.flat,"v-expansion-panels--hover":this.hover,"v-expansion-panels--focusable":this.focusable,"v-expansion-panels--inset":this.inset,"v-expansion-panels--popout":this.popout,"v-expansion-panels--tile":this.tile})}},created:function(){this.$attrs.hasOwnProperty("expand")&&(0,o.fK)("expand","multiple",this),Array.isArray(this.value)&&this.value.length>0&&"boolean"===typeof this.value[0]&&(0,o.fK)(':value="[true, false, true]"',':value="[0, 2]"',this)},methods:{updateItem:function(e,t){var n=this.getValue(e,t),i=this.getValue(e,t+1);e.isActive=this.toggleMethod(n),e.nextIsActive=this.toggleMethod(i)}}})},4197:function(e,t,n){n.r(t),n.d(t,{default:function(){return O}});var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-card",{staticClass:"mx-auto",attrs:{elevation:"0",color:"#F2F4F4",height:"100vh"}},[0==e.items.length?n("div",[n("p",{staticClass:"text-center"},[e._v("..Sin Contactos...")])]):n("div",[n("v-virtual-scroll",{staticStyle:{height:"91vh"},attrs:{items:e.items,"item-height":80},scopedSlots:e._u([{key:"default",fn:function(t){var i=t.item;return[n("v-card",{attrs:{elevation:"0",outlined:""}},[n("div",[n("v-list-item",{on:{click:function(t){return e.open(i)}}},[n("v-list-item-action",[n("v-btn",{staticClass:"white--text",attrs:{fab:"",small:"",depressed:"",color:"#273746"}},[e._v(" "+e._s(i.reference)+" ")])],1),n("v-list-item-content",[n("v-list-item-title",[n("strong",[e._v(" "+e._s(i.nomenclature))])]),n("v-list-item-subtitle",[e._v(e._s(i.location))])],1),n("v-list-item-action",[n("v-icon",[e._v(" toc ")])],1)],1)],1)])]}}])})],1),n("board-new",{ref:"board"})],1)},a=[],o=n(4367),s=n(629),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-row",{attrs:{justify:"center"}},[n("v-dialog",{attrs:{fullscreen:"","hide-overlay":"",transition:"dialog-bottom-transition"},scopedSlots:e._u([{key:"activator",fn:function(t){var i=t.on,a=t.attrs;return[n("v-btn",e._g(e._b({attrs:{fab:"",dark:"",color:"rgba(39,55,70,1)",fixed:"",right:"",bottom:""},on:{click:function(t){return e.newBoard()}}},"v-btn",a,!1),i),[n("v-icon",{attrs:{size:"23",color:"#D5DBDB",dark:""}},[e._v("add")])],1)]}}]),model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[n("v-card",{attrs:{color:"#F2F4F4"}},[n("v-card",{staticClass:"overflow-hidden"},[n("v-app-bar",{attrs:{absolute:"",dark:"",color:"primary","elevate-on-scroll":"","scroll-target":"#scrolling-techniques-7"}},[n("v-btn",{attrs:{icon:"",dark:""},on:{click:function(t){e.dialog=!1}}},[n("v-icon",[e._v("arrow_back")])],1),n("v-toolbar-title",[e._v("Nuevo Contacto")]),n("v-spacer"),n("v-toolbar-items",[n("v-btn",{attrs:{dark:"",text:"",disabled:""},on:{click:function(t){return e.create()}}},[e._v(" Crear ")])],1)],1),n("v-sheet",{staticClass:"overflow-y-auto",staticStyle:{color:"#273746"},attrs:{id:"scrolling-techniques-7",height:"100vh"}},[n("v-container",[n("v-card-title",{staticClass:"text-h5",staticStyle:{color:"#273746"}},[e._v(" Nuevo Tablero ")]),n("v-card-text",{staticStyle:{color:"#273746"}},[e._v("Datos del contacto")]),n("v-form",{ref:"form"},[n("v-text-field",{staticClass:"text-capitalize",attrs:{outlined:"",disabled:"",label:"Referencia",required:""},model:{value:e.reference,callback:function(t){e.reference=t},expression:"reference"}}),n("v-text-field",{attrs:{outlined:"",label:"Area",required:""},model:{value:e.nomenclature,callback:function(t){e.nomenclature=t},expression:"nomenclature"}})],1),n("v-expansion-panels",{attrs:{accordion:""}},e._l(e.items2,(function(t,i){return n("v-expansion-panel",{key:i},[n("v-expansion-panel-header",[e._v(e._s(t))]),n("v-expansion-panel-content",[n("div",[n("v-text-field",{attrs:{outlined:"",label:"Punto específico",required:""}}),n("v-card",{attrs:{elevation:"0",outlined:""}},[n("v-card-title",[e._v(" "+e._s(e.nom)+" ")]),n("v-card-text",[n("strong",[n("div",[e._v(" "+e._s(e.description)+" ")])])]),n("v-divider",{staticClass:"mx-4"}),n("v-card-text",[n("v-chip-group",{attrs:{"active-class":"primary white--text",column:""},model:{value:e.value,callback:function(t){e.value=t},expression:"value"}},[n("v-chip",{attrs:{value:"yes"}},[e._v(" cumple ")]),n("v-chip",{attrs:{value:"no"}},[e._v(" no cumple ")])],1),"no"==e.value?n("div",[n("br"),n("v-select",{attrs:{outlined:"",items:e.items,required:""},model:{value:e.model,callback:function(t){e.model=t},expression:"model"}})],1):e._e()],1)],1)],1)])],1)})),1),n("br"),n("br"),n("div",{staticClass:"text-center"},[n("v-btn",{attrs:{rounded:"",color:"primary",dark:""},on:{click:function(t){return e.addPoint()}}},[e._v(" Nuevo punto espefico ")])],1)],1)],1)],1)],1)],1)],1)},l=[],c=(n(8862),{name:"ContactNew",data:function(){return{editDialog:!1,items2:[],nom:"200-11",description:"Polaridad de las conexiones",value:null,nomenclature:"",location:"",dialog:!1,model:"Tierra abierta",result:[],items:["Tierra abierta","Neutro abierto","Línea abierta","Línea / tierra invertida","Línea / nuetro invertido","Correcto"]}},computed:{reference:function(){return this.items2.length+1},textDialog:function(){return this.editDialog?"Editar Contacto":"Nuevo Contacto"},textSave:function(){return this.editDialog?"Guardar":"Crear"}},methods:{addPoint:function(){this.items2.push(this.items2.length+1)},create:function(){var e={reference:1,nomenclature:this.nomenclature,location:this.location};console.log(e)},referenceAuto:function(){return this.items2.length+1},newBoard:function(){this.emptyData(),this.editDialog=!1,this.reference=this.items.length+1,this.result=JSON.parse(JSON.stringify(this.config))},openBoard:function(e){this.editDialog=!0,this.dialog=!0,this.toAssign(e),this.result=e.result},emptyData:function(){this.nomenclature="",this.location="",this.value=null}}}),u=c,d=n(3736),v=n(3453),p=n.n(v),h=n(6986),f=n(680),m=n(2371),x=n(7118),b=n(5424),g=n(6105),Z=n(9846),C=n(7336),k=n(1418),_=n(6845),y=n(2443),V=n(1192),B=n(5630),w=n(6232),A=n(6428),D=n(2877),P=n(7238),I=n(3385),S=n(9762),$=n(5978),T=n(7921),L=(0,d.Z)(u,r,l,!1,null,"38d3bd05",null),E=L.exports;p()(L,{VAppBar:h.Z,VBtn:f.Z,VCard:m.Z,VCardText:x.ZB,VCardTitle:x.EB,VChip:b.Z,VChipGroup:g.Z,VContainer:Z.Z,VDialog:C.Z,VDivider:k.Z,VExpansionPanel:_.Z,VExpansionPanelContent:y.Z,VExpansionPanelHeader:V.Z,VExpansionPanels:B.Z,VForm:w.Z,VIcon:A.Z,VRow:D.Z,VSelect:P.Z,VSheet:I.Z,VSpacer:S.Z,VTextField:$.Z,VToolbarItems:T.lj,VToolbarTitle:T.qW});var F={components:{BoardNew:E},name:"ContactList",data:function(){return{}},computed:(0,o.Z)((0,o.Z)({},(0,s.rn)({data:function(e){return e.customers.findCustomer}})),{},{items:function(){return this.data.contactList.data},config:function(){return this.data.boardList.config}}),methods:{open:function(e){this.$refs.board.openBoard(e)}}},N=F,R=n(7620),z=n(3099),q=n(6451),M=n(5683),H=(0,d.Z)(N,i,a,!1,null,null,null),O=H.exports;p()(H,{VBtn:f.Z,VCard:m.Z,VIcon:A.Z,VListItem:R.Z,VListItemAction:z.Z,VListItemContent:q.km,VListItemSubtitle:q.oZ,VListItemTitle:q.V9,VVirtualScroll:M.Z})}}]);
//# sourceMappingURL=197-legacy.d63faaa0.js.map