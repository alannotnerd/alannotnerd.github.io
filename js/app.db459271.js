(function(e){function t(t){for(var r,a,c=t[0],l=t[1],i=t[2],s=0,f=[];s<c.length;s++)a=c[s],o[a]&&f.push(o[a][0]),o[a]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(e[r]=l[r]);d&&d(t);while(f.length)f.shift()();return u.push.apply(u,i||[]),n()}function n(){for(var e,t=0;t<u.length;t++){for(var n=u[t],r=!0,a=1;a<n.length;a++){var c=n[a];0!==o[c]&&(r=!1)}r&&(u.splice(t--,1),e=l(l.s=n[0]))}return e}var r={},a={app:0},o={app:0},u=[];function c(e){return l.p+"js/"+({}[e]||e)+"."+{"chunk-2b80943e":"d1f0c482","chunk-310ea4fc":"eaa616c4","chunk-36a92f65":"9b4b4562","chunk-e43a9280":"6def3abd","chunk-16315430":"c9104815","chunk-377b39f7":"ad4e2e28","chunk-a8471bb0":"fbf1b934","chunk-f748a1a2":"41a891da","chunk-4aff65a8":"a8c59f09"}[e]+".js"}function l(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,l),n.l=!0,n.exports}l.e=function(e){var t=[],n={"chunk-2b80943e":1,"chunk-310ea4fc":1,"chunk-36a92f65":1,"chunk-e43a9280":1,"chunk-16315430":1,"chunk-377b39f7":1,"chunk-a8471bb0":1,"chunk-f748a1a2":1,"chunk-4aff65a8":1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=new Promise(function(t,n){for(var r="css/"+({}[e]||e)+"."+{"chunk-2b80943e":"59f08618","chunk-310ea4fc":"c69a78af","chunk-36a92f65":"b4e7e417","chunk-e43a9280":"daa8cfe1","chunk-16315430":"b2e8d1d3","chunk-377b39f7":"f0b59f3c","chunk-a8471bb0":"6b58c11d","chunk-f748a1a2":"0c10cd02","chunk-4aff65a8":"9bc47a94"}[e]+".css",o=l.p+r,u=document.getElementsByTagName("link"),c=0;c<u.length;c++){var i=u[c],s=i.getAttribute("data-href")||i.getAttribute("href");if("stylesheet"===i.rel&&(s===r||s===o))return t()}var f=document.getElementsByTagName("style");for(c=0;c<f.length;c++){i=f[c],s=i.getAttribute("data-href");if(s===r||s===o)return t()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=t,d.onerror=function(t){var r=t&&t.target&&t.target.src||o,u=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");u.request=r,delete a[e],d.parentNode.removeChild(d),n(u)},d.href=o;var h=document.getElementsByTagName("head")[0];h.appendChild(d)}).then(function(){a[e]=0}));var r=o[e];if(0!==r)if(r)t.push(r[2]);else{var u=new Promise(function(t,n){r=o[e]=[t,n]});t.push(r[2]=u);var i,s=document.createElement("script");s.charset="utf-8",s.timeout=120,l.nc&&s.setAttribute("nonce",l.nc),s.src=c(e),i=function(t){s.onerror=s.onload=null,clearTimeout(f);var n=o[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src,u=new Error("Loading chunk "+e+" failed.\n("+r+": "+a+")");u.type=r,u.request=a,n[1](u)}o[e]=void 0}};var f=setTimeout(function(){i({type:"timeout",target:s})},12e4);s.onerror=s.onload=i,document.head.appendChild(s)}return Promise.all(t)},l.m=e,l.c=r,l.d=function(e,t,n){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(l.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)l.d(n,r,function(t){return e[t]}.bind(null,r));return n},l.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="/",l.oe=function(e){throw console.error(e),e};var i=window["webpackJsonp"]=window["webpackJsonp"]||[],s=i.push.bind(i);i.push=t,i=i.slice();for(var f=0;f<i.length;f++)t(i[f]);var d=s;u.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("097d");var r=n("2b0e"),a=n("bb71");n("da64");r["a"].use(a["a"],{theme:{primary:"#CBAA5C",secondary:"#083759"},iconfont:"mdi"});n("7f7f");var o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-btn",e._g(e._b({style:e.styles,attrs:{fab:"",small:"",color:"alpha"}},"v-btn",e.$attrs,!1),e.$listeners),[e._t("default")],2)},u=[],c={name:"BaseBtn",inheritAttrs:!1,props:{square:Boolean},computed:{styles:function(){return{borderRadius:this.square?"2px":void 0}}}},l=c,i=n("2877"),s=n("6544"),f=n.n(s),d=n("8336"),h=Object(i["a"])(l,o,u,!1,null,null,null),p=h.exports;f()(h,{VBtn:d["a"]});var b=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-card",e._g(e._b({attrs:{tile:"",flat:""}},"v-card",e.$attrs,!1),e.$listeners),[e._t("default")],2)},m=[],v={name:"BaseCard",inheritAttrs:!1},g=v,k=n("b0af"),y=Object(i["a"])(g,b,m,!1,null,null,null),_=y.exports;f()(y,{VCard:k["a"]});var w=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("h2",e._g(e._b({staticClass:"subheading text-uppercase font-weight-medium mb-3"},"h2",e.$attrs,!1),e.$listeners),[e._t("default")],2)},x=[],A={name:"BaseSubheading",inheritAttrs:!1},j=A,E=Object(i["a"])(j,w,x,!1,null,null,null),C=E.exports;r["a"].component(p.name,p),r["a"].component(_.name,_),r["a"].component(C.name,C);var O=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-app",[n("core-toolbar"),n("core-drawer"),n("core-view"),n("core-footer")],1)},$=[],P=n("2f62"),S={name:"App",mounted:function(){console.log(this),this.$store.dispatch("loadArticles")},components:{CoreDrawer:function(){return n.e("chunk-36a92f65").then(n.bind(null,"41c0"))},CoreFooter:function(){return Promise.all([n.e("chunk-e43a9280"),n.e("chunk-f748a1a2")]).then(n.bind(null,"7a74"))},CoreToolbar:function(){return Promise.all([n.e("chunk-e43a9280"),n.e("chunk-377b39f7")]).then(n.bind(null,"d23b"))},CoreView:function(){return n.e("chunk-310ea4fc").then(n.bind(null,"9306"))}},data:function(){return{}}},T=S,B=n("7496"),q=Object(i["a"])(T,O,$,!1,null,null,null),L=q.exports;f()(q,{VApp:B["a"]});var M=n("8c4f"),N=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("agreement",[n("alexis")],1)},V=[],D={name:"Home",components:{Agreement:function(){return Promise.all([n.e("chunk-e43a9280"),n.e("chunk-a8471bb0")]).then(n.bind(null,"533d"))},Alexis:function(){return n.e("chunk-2b80943e").then(n.bind(null,"fbec"))}}},R=D,F=Object(i["a"])(R,N,V,!1,null,null,null),H=F.exports,I=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",{attrs:{id:"feed"}},[n("feed",{attrs:{category:e.$route.params.category}},[e._t("default")],2)],1)},J=[],z={components:{Feed:function(){return Promise.all([n.e("chunk-e43a9280"),n.e("chunk-16315430")]).then(n.bind(null,"f5bd"))}}},G=z,K=Object(i["a"])(G,I,J,!1,null,null,null),Q=K.exports;r["a"].use(M["a"]);var U=new M["a"]({mode:"hash",base:"/",routes:[{path:"/",name:"home",component:H},{path:"/category/:category",name:"category",component:Q}]}),W=(n("7514"),n("5d73")),X=n.n(W),Y=(n("55dd"),n("bc3a")),Z=n.n(Y),ee=n("a7fe"),te=n.n(ee);r["a"].use(P["a"]),r["a"].use(te.a,Z.a);var ne=new P["a"].Store({state:{articles:[],agreements:n("dc77"),drawer:!1,items:[{text:"Home",to:"/"},{text:"About",href:"#about"}]},getters:{categories:function(e){var t=[],n=!0,r=!1,a=void 0;try{for(var o,u=function(){var e=o.value;if(!e.category||t.find(function(t){return t.text===e.category}))return"continue";var n=e.category;t.push({text:n,to:"/category/".concat(n)})},c=X()(e.articles);!(n=(o=c.next()).done);n=!0)u()}catch(l){r=!0,a=l}finally{try{n||null==c.return||c.return()}finally{if(r)throw a}}return t.sort().slice(0,4)},links:function(e,t){return e.items.concat(t.categories)}},mutations:{setDrawer:function(e,t){return e.drawer=t},toggleDrawer:function(e){return e.drawer=!e.drawer},SET_ARTICLES:function(e,t){e.articles=t}},actions:{loadArticles:function(e){var t=e.commit;Z.a.get("/articles.json").then(function(e){return e.data}).then(function(e){t("SET_ARTICLES",e),console.log("dfdasf")})}}});new r["a"]({router:U,store:ne,render:function(e){return e(L)}}).$mount("#app")},dc77:function(e){e.exports=[{signer:"alan",clause:"don't be unhappy."},{signer:"alexis",clause:"try to make a traval."}]}});
//# sourceMappingURL=app.db459271.js.map