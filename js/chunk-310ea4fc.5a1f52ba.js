(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-310ea4fc"],{"549c":function(t,n,e){"use strict";e("f134");var o=e("b57a");n["a"]={name:"v-content",mixins:[o["a"]],props:{tag:{type:String,default:"main"}},computed:{styles:function(){var t=this.$vuetify.application,n=t.bar,e=t.top,o=t.right,a=t.footer,i=t.insetFooter,s=t.bottom,r=t.left;return{paddingTop:e+n+"px",paddingRight:o+"px",paddingBottom:a+i+s+"px",paddingLeft:r+"px"}}},render:function(t){var n={staticClass:"v-content",style:this.styles,ref:"content"};return t(this.tag,n,[t("div",{staticClass:"v-content__wrap"},this.$slots.default)])}}},9306:function(t,n,e){"use strict";e.r(n);var o=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-content",{attrs:{id:"home"}},[e("router-view")],1)},a=[],i=e("2877"),s=e("6544"),r=e.n(s),u=e("549c"),c={},d=Object(i["a"])(c,o,a,!1,null,null,null);n["default"]=d.exports;r()(d,{VContent:u["a"]})},b57a:function(t,n,e){"use strict";var o=e("2b0e");n["a"]=o["a"].extend({name:"ssr-bootable",data:function(){return{isBooted:!1}},mounted:function(){var t=this;window.requestAnimationFrame(function(){t.$el.setAttribute("data-booted","true"),t.isBooted=!0})}})},f134:function(t,n,e){}}]);
//# sourceMappingURL=chunk-310ea4fc.5a1f52ba.js.map