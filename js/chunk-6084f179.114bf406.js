(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6084f179"],{"0043":function(t,e,i){t.exports=i.p+"img/adventurealtitude.7f74d24a.jpg"},"02d4":function(t,e,i){t.exports=i.p+"img/greengrass.4c0f4c29.jpg"},"0634":function(t,e,i){t.exports=i.p+"img/garden.0ee8cac5.jpg"},"0f34":function(t,e,i){t.exports=i.p+"img/umbrella.62b01f45.jpg"},"11e9":function(t,e,i){var n=i("52a7"),a=i("4630"),s=i("6821"),r=i("6a99"),o=i("69a8"),c=i("c69a"),l=Object.getOwnPropertyDescriptor;e.f=i("9e1e")?l:function(t,e){if(t=s(t),e=r(e,!0),c)try{return l(t,e)}catch(i){}if(o(t,e))return a(!n.f.call(t,e),t[e])}},"17bc":function(t,e,i){t.exports=i.p+"img/snowcabin.b595e70f.jpg"},"20ed":function(t,e,i){t.exports=i.p+"img/christmas.4f9467fe.jpg"},"253d":function(t,e,i){},3501:function(t,e,i){t.exports=i.p+"img/marketgrains.d7d69cd3.jpg"},"3f9e":function(t,e,i){t.exports=i.p+"img/lightcave.52150edc.jpg"},"4c34":function(t,e,i){},"52a7":function(t,e){e.f={}.propertyIsEnumerable},5756:function(t,e,i){t.exports=i.p+"img/mountaincabin.f6547f5f.jpg"},"5dbc":function(t,e,i){var n=i("d3f4"),a=i("8b97").set;t.exports=function(t,e,i){var s,r=e.constructor;return r!==i&&"function"==typeof r&&(s=r.prototype)!==i.prototype&&n(s)&&a&&a(t,s),t}},6491:function(t,e,i){t.exports=i.p+"img/ancientruins.1c172655.jpg"},"6a54":function(t,e,i){t.exports=i.p+"img/snowcup.a42567f1.jpg"},"6b75":function(t,e,i){t.exports=i.p+"img/mountain.5394e7f1.jpg"},"75f0":function(t,e,i){t.exports=i.p+"img/spices.44578ba1.jpg"},"760e":function(t,e,i){t.exports=i.p+"img/july4.e77a6053.jpg"},"86b4":function(t,e,i){},"88ac":function(t,e,i){t.exports=i.p+"img/firepots.7fd55107.jpg"},"8b97":function(t,e,i){var n=i("d3f4"),a=i("cb7c"),s=function(t,e){if(a(t),!n(e)&&null!==e)throw TypeError(e+": can't set as prototype!")};t.exports={set:Object.setPrototypeOf||("__proto__"in{}?function(t,e,n){try{n=i("9b43")(Function.call,i("11e9").f(Object.prototype,"__proto__").set,2),n(t,[]),e=!(t instanceof Array)}catch(a){e=!0}return function(t,i){return s(t,i),e?t.__proto__=i:n(t,i),t}}({},!1):void 0),check:s}},9093:function(t,e,i){var n=i("ce10"),a=i("e11e").concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return n(t,a)}},"997b":function(t,e,i){t.exports=i.p+"img/jellyfish.0782ae1d.jpg"},"9d26":function(t,e,i){"use strict";var n=i("132d");e["a"]=n["a"]},a1e0:function(t,e,i){t.exports=i.p+"img/pigduck.6dc3cebb.jpg"},a35f:function(t,e,i){t.exports=i.p+"img/artoftravel.d2d68327.jpg"},aa77:function(t,e,i){var n=i("5ca1"),a=i("be13"),s=i("79e5"),r=i("fdef"),o="["+r+"]",c="​",l=RegExp("^"+o+o+"*"),p=RegExp(o+o+"*$"),u=function(t,e,i){var a={},o=s(function(){return!!r[t]()||c[t]()!=c}),l=a[t]=o?e(d):r[t];i&&(a[i]=l),n(n.P+n.F*o,"String",a)},d=u.trim=function(t,e){return t=String(a(t)),1&e&&(t=t.replace(l,"")),2&e&&(t=t.replace(p,"")),t};t.exports=u},aae1:function(t,e,i){t.exports=i.p+"img/blurcamera.d2d68327.jpg"},adda:function(t,e,i){"use strict";i("253d"),i("4c34");var n=i("23bf"),a=i("58df"),s=Object(a["a"])(n["a"]).extend({name:"v-responsive",props:{aspectRatio:[String,Number]},computed:{computedAspectRatio:function(){return Number(this.aspectRatio)},aspectStyle:function(){return this.computedAspectRatio?{paddingBottom:1/this.computedAspectRatio*100+"%"}:void 0},__cachedSizer:function(){return this.aspectStyle?this.$createElement("div",{style:this.aspectStyle,staticClass:"v-responsive__sizer"}):[]}},methods:{genContent:function(){return this.$createElement("div",{staticClass:"v-responsive__content"},this.$slots.default)}},render:function(t){return t("div",{staticClass:"v-responsive",style:this.measurableStyles,on:this.$listeners},[this.__cachedSizer,this.genContent()])}}),r=s,o=i("d9bd");e["a"]=r.extend({name:"v-img",props:{alt:String,contain:Boolean,src:{type:[String,Object],default:""},gradient:String,lazySrc:String,srcset:String,sizes:String,position:{type:String,default:"center center"},transition:{type:[Boolean,String],default:"fade-transition"}},data:function(){return{currentSrc:"",image:null,isLoading:!0,calculatedAspectRatio:void 0}},computed:{computedAspectRatio:function(){return this.normalisedSrc.aspect},normalisedSrc:function(){return"string"===typeof this.src?{src:this.src,srcset:this.srcset,lazySrc:this.lazySrc,aspect:Number(this.aspectRatio||this.calculatedAspectRatio)}:{src:this.src.src,srcset:this.srcset||this.src.srcset,lazySrc:this.lazySrc||this.src.lazySrc,aspect:Number(this.aspectRatio||this.src.aspect||this.calculatedAspectRatio)}},__cachedImage:function(){if(!this.normalisedSrc.src&&!this.normalisedSrc.lazySrc)return[];var t=[],e=this.isLoading?this.normalisedSrc.lazySrc:this.currentSrc;this.gradient&&t.push("linear-gradient("+this.gradient+")"),e&&t.push('url("'+e+'")');var i=this.$createElement("div",{staticClass:"v-image__image",class:{"v-image__image--preload":this.isLoading,"v-image__image--contain":this.contain,"v-image__image--cover":!this.contain},style:{backgroundImage:t.join(", "),backgroundPosition:this.position},key:+this.isLoading});return this.transition?this.$createElement("transition",{attrs:{name:this.transition,mode:"in-out"}},[i]):i}},watch:{src:function(){this.isLoading?this.loadImage():this.init()},"$vuetify.breakpoint.width":"getSrc"},mounted:function(){this.init()},methods:{init:function(){if(this.normalisedSrc.lazySrc){var t=new Image;t.src=this.normalisedSrc.lazySrc,this.pollForSize(t,null)}this.normalisedSrc.src&&this.loadImage()},onLoad:function(){this.getSrc(),this.isLoading=!1,this.$emit("load",this.src)},onError:function(){Object(o["a"])("Image load failed\n\nsrc: "+this.normalisedSrc.src,this),this.$emit("error",this.src)},getSrc:function(){this.image&&(this.currentSrc=this.image.currentSrc||this.image.src)},loadImage:function(){var t=this,e=new Image;this.image=e,e.onload=function(){e.decode?e.decode().catch(function(e){Object(o["b"])("Failed to decode image, trying to render anyway\n\nsrc: "+t.normalisedSrc.src+(e.message?"\nOriginal error: "+e.message:""),t)}).then(t.onLoad):t.onLoad()},e.onerror=this.onError,e.src=this.normalisedSrc.src,this.sizes&&(e.sizes=this.sizes),this.normalisedSrc.srcset&&(e.srcset=this.normalisedSrc.srcset),this.aspectRatio||this.pollForSize(e),this.getSrc()},pollForSize:function(t){var e=this,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:100,n=function n(){var a=t.naturalHeight,s=t.naturalWidth;a||s?e.calculatedAspectRatio=s/a:null!=i&&setTimeout(n,i)};n()},__genPlaceholder:function(){if(this.$slots.placeholder){var t=this.isLoading?[this.$createElement("div",{staticClass:"v-image__placeholder"},this.$slots.placeholder)]:[];return this.transition?this.$createElement("transition",{attrs:{name:this.transition}},t):t[0]}}},render:function(t){var e=r.options.render.call(this,t);return e.data.staticClass+=" v-image",e.data.attrs={role:this.alt?"img":void 0,"aria-label":this.alt},e.children=[this.__cachedSizer,this.__cachedImage,this.__genPlaceholder(),this.genContent()],t(e.tag,e.data,e.children)}})},aefc:function(t,e,i){"use strict";var n=i("86b4"),a=i.n(n);a.a},af8a:function(t,e,i){t.exports=i.p+"img/ancient.6211215e.jpg"},b22b:function(t,e,i){t.exports=i.p+"img/moroccandays.118acbab.jpg"},b406:function(t,e,i){t.exports=i.p+"img/rain.ec90ac2f.jpg"},bf03:function(t,e,i){t.exports=i.p+"img/beachjar.8c3df2fc.jpg"},bf5a:function(t,e,i){},c5f6:function(t,e,i){"use strict";var n=i("7726"),a=i("69a8"),s=i("2d95"),r=i("5dbc"),o=i("6a99"),c=i("79e5"),l=i("9093").f,p=i("11e9").f,u=i("86cc").f,d=i("aa77").trim,f="Number",g=n[f],h=g,m=g.prototype,v=s(i("2aeb")(m))==f,b="trim"in String.prototype,j=function(t){var e=o(t,!1);if("string"==typeof e&&e.length>2){e=b?e.trim():d(e,3);var i,n,a,s=e.charCodeAt(0);if(43===s||45===s){if(i=e.charCodeAt(2),88===i||120===i)return NaN}else if(48===s){switch(e.charCodeAt(1)){case 66:case 98:n=2,a=49;break;case 79:case 111:n=8,a=55;break;default:return+e}for(var r,c=e.slice(2),l=0,p=c.length;l<p;l++)if(r=c.charCodeAt(l),r<48||r>a)return NaN;return parseInt(c,n)}}return+e};if(!g(" 0o1")||!g("0b1")||g("+0x1")){g=function(t){var e=arguments.length<1?0:t,i=this;return i instanceof g&&(v?c(function(){m.valueOf.call(i)}):s(i)!=f)?r(new h(j(e)),i,g):j(e)};for(var _,y=i("9e1e")?l(h):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),S=0;y.length>S;S++)a(h,_=y[S])&&!a(g,_)&&u(g,_,p(h,_));g.prototype=m,m.constructor=g,i("2aba")(n,f,g)}},d138:function(t,e,i){var n={"./adventurealtitude.jpg":"0043","./adventurecave.jpg":"daee","./ancient.jpg":"af8a","./ancientruins.jpg":"6491","./artoftravel.jpg":"a35f","./autumnclouds.jpg":"ed40","./beachjar.jpg":"bf03","./blurcamera.jpg":"aae1","./christmas.jpg":"20ed","./firepots.jpg":"88ac","./garden.jpg":"0634","./greengrass.jpg":"02d4","./jellyfish.jpg":"997b","./july4.jpg":"760e","./lightcave.jpg":"3f9e","./marketgrains.jpg":"3501","./moroccandays.jpg":"b22b","./mountain.jpg":"6b75","./mountaincabin.jpg":"5756","./pigduck.jpg":"a1e0","./rain.jpg":"b406","./ruins.jpg":"e088","./snowcabin.jpg":"17bc","./snowcup.jpg":"6a54","./spices.jpg":"75f0","./swedishfishing.jpg":"e774","./umbrella.jpg":"0f34"};function a(t){var e=s(t);return i(e)}function s(t){var e=n[t];if(!(e+1)){var i=new Error("Cannot find module '"+t+"'");throw i.code="MODULE_NOT_FOUND",i}return e}a.keys=function(){return Object.keys(n)},a.resolve=s,t.exports=a,a.id="d138"},daee:function(t,e,i){t.exports=i.p+"img/adventurecave.0e8b8892.jpg"},e088:function(t,e,i){t.exports=i.p+"img/ruins.9a11d5b2.jpg"},e774:function(t,e,i){t.exports=i.p+"img/swedishfishing.1d2f0469.jpg"},eb3a:function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-flex",{class:t.classes,attrs:{xs12:""}},[n("base-card",{attrs:{height:t.value.prominent?450:350,color:"grey lighten-1",dark:"",href:"#!"}},[n("v-img",{attrs:{src:i("d138")("./"+t.value.hero),height:"100%",gradient:"rgba(0, 0, 0, .42), rgba(0, 0, 0, .42)"}},[t.value.prominent?t._e():n("v-layout",{attrs:{"fill-height":"",wrap:"","text-xs-right":"","ma-0":""}},[n("v-flex",{attrs:{xs12:""}},[n("v-chip",{staticClass:"mx-0 mb-2 text-uppercase",attrs:{label:"",color:"grey darken-3","text-color":"white",small:""},on:{click:function(t){t.stopPropagation()}}},[t._v("\n            "+t._s(t.value.category)+"\n          ")]),n("h3",{staticClass:"title font-weight-bold mb-2"},[t._v("\n            "+t._s(t.value.title)+"\n          ")]),n("div",{staticClass:"caption"},[t._v("\n            "+t._s(t.value.author)),n("br"),t._v("Date\n          ")])],1),n("v-flex",{attrs:{"align-self-end":""}},[n("v-chip",{staticClass:"text-uppercase ma-0",attrs:{color:"primary",label:"",small:""},on:{click:function(t){t.stopPropagation()}}},[t._v("\n            Read More\n          ")])],1)],1)],1)],1)],1)},a=[],s=(i("c5f6"),i("cadf"),i("551c"),i("097d"),{props:{size:{type:Number,required:!0},value:{type:Object,default:function(){return{}}}},computed:{classes:function(){return{md6:2===this.size,md4:3===this.size}}}}),r=s,o=(i("aefc"),i("2877")),c=i("6544"),l=i.n(c),p=(i("bf5a"),i("58df")),u=i("9d26"),d=i("b64a"),f=i("6a18"),g=i("98a1"),h=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var i=arguments[e];for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n])}return t},m=Object(p["a"])(d["a"],f["a"],g["a"]).extend({name:"v-chip",props:{close:Boolean,disabled:Boolean,label:Boolean,outline:Boolean,selected:Boolean,small:Boolean,textColor:String,value:{type:Boolean,default:!0}},computed:{classes:function(){return h({"v-chip--disabled":this.disabled,"v-chip--selected":this.selected&&!this.disabled,"v-chip--label":this.label,"v-chip--outline":this.outline,"v-chip--small":this.small,"v-chip--removable":this.close},this.themeClasses)}},methods:{genClose:function(t){var e=this,i={staticClass:"v-chip__close",on:{click:function(t){t.stopPropagation(),e.$emit("input",!1)}}};return t("div",i,[t(u["a"],"$vuetify.icons.delete")])},genContent:function(t){return t("span",{staticClass:"v-chip__content"},[this.$slots.default,this.close&&this.genClose(t)])}},render:function(t){var e=this.setBackgroundColor(this.color,{staticClass:"v-chip",class:this.classes,attrs:{tabindex:this.disabled?-1:0},directives:[{name:"show",value:this.isActive}],on:this.$listeners}),i=this.textColor||this.outline&&this.color;return t("span",this.setTextColor(i,e),[this.genContent(t)])}}),v=i("0e8f"),b=i("adda"),j=i("a722"),_=Object(o["a"])(r,n,a,!1,null,null,null);e["default"]=_.exports;l()(_,{VChip:m,VFlex:v["a"],VImg:b["a"],VLayout:j["a"]})},ed40:function(t,e,i){t.exports=i.p+"img/autumnclouds.e44135e5.jpg"},fdef:function(t,e){t.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"}}]);
//# sourceMappingURL=chunk-6084f179.114bf406.js.map