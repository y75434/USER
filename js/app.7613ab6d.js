(function(t){function e(e){for(var a,r,i=e[0],u=e[1],s=e[2],l=0,d=[];l<i.length;l++)r=i[l],Object.prototype.hasOwnProperty.call(c,r)&&c[r]&&d.push(c[r][0]),c[r]=0;for(a in u)Object.prototype.hasOwnProperty.call(u,a)&&(t[a]=u[a]);f&&f(e);while(d.length)d.shift()();return o.push.apply(o,s||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],a=!0,r=1;r<n.length;r++){var i=n[r];0!==c[i]&&(a=!1)}a&&(o.splice(e--,1),t=u(u.s=n[0]))}return t}var a={},r={app:0},c={app:0},o=[];function i(t){return u.p+"js/"+({}[t]||t)+"."+{"chunk-2d0b2197":"8ee231c1","chunk-2d0be179":"439c6037","chunk-2d22669c":"90eaee61","chunk-4395a337":"631705c0","chunk-5dc3958d":"93bb922c","chunk-67e462e5":"3b0da798","chunk-2d0dd9be":"358d0e8c","chunk-2d207747":"0a856f17","chunk-2d225006":"c8d725d9","chunk-32b40b16":"d0f1d41c","chunk-5dffac94":"80eff60e"}[t]+".js"}function u(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(t){var e=[],n={"chunk-4395a337":1,"chunk-5dc3958d":1,"chunk-5dffac94":1};r[t]?e.push(r[t]):0!==r[t]&&n[t]&&e.push(r[t]=new Promise((function(e,n){for(var a="css/"+({}[t]||t)+"."+{"chunk-2d0b2197":"31d6cfe0","chunk-2d0be179":"31d6cfe0","chunk-2d22669c":"31d6cfe0","chunk-4395a337":"a1796070","chunk-5dc3958d":"c8c466c1","chunk-67e462e5":"31d6cfe0","chunk-2d0dd9be":"31d6cfe0","chunk-2d207747":"31d6cfe0","chunk-2d225006":"31d6cfe0","chunk-32b40b16":"31d6cfe0","chunk-5dffac94":"56dfb23a"}[t]+".css",c=u.p+a,o=document.getElementsByTagName("link"),i=0;i<o.length;i++){var s=o[i],l=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(l===a||l===c))return e()}var d=document.getElementsByTagName("style");for(i=0;i<d.length;i++){s=d[i],l=s.getAttribute("data-href");if(l===a||l===c)return e()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=e,f.onerror=function(e){var a=e&&e.target&&e.target.src||c,o=new Error("Loading CSS chunk "+t+" failed.\n("+a+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=a,delete r[t],f.parentNode.removeChild(f),n(o)},f.href=c;var h=document.getElementsByTagName("head")[0];h.appendChild(f)})).then((function(){r[t]=0})));var a=c[t];if(0!==a)if(a)e.push(a[2]);else{var o=new Promise((function(e,n){a=c[t]=[e,n]}));e.push(a[2]=o);var s,l=document.createElement("script");l.charset="utf-8",l.timeout=120,u.nc&&l.setAttribute("nonce",u.nc),l.src=i(t);var d=new Error;s=function(e){l.onerror=l.onload=null,clearTimeout(f);var n=c[t];if(0!==n){if(n){var a=e&&("load"===e.type?"missing":e.type),r=e&&e.target&&e.target.src;d.message="Loading chunk "+t+" failed.\n("+a+": "+r+")",d.name="ChunkLoadError",d.type=a,d.request=r,n[1](d)}c[t]=void 0}};var f=setTimeout((function(){s({type:"timeout",target:l})}),12e4);l.onerror=l.onload=s,document.head.appendChild(l)}return Promise.all(e)},u.m=t,u.c=a,u.d=function(t,e,n){u.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},u.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},u.t=function(t,e){if(1&e&&(t=u(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)u.d(n,a,function(e){return t[e]}.bind(null,a));return n},u.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return u.d(e,"a",e),e},u.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},u.p="",u.oe=function(t){throw console.error(t),t};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=e,s=s.slice();for(var d=0;d<s.length;d++)e(s[d]);var f=l;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"109d":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("4160"),n("b64b"),n("159b"),n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),r=n("bc3a"),c=n.n(r),o=n("a7fe"),i=n.n(o),u=n("1157"),s=n.n(u),l=n("9062"),d=n.n(l),f=(n("e40d"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("router-view")],1)}),h=[],p={name:"App",data:function(){return{isLoading:!1}}},b=p,v=(n("5c0b"),n("2877")),g=Object(v["a"])(b,f,h,!1,null,null,null),m=g.exports,k=(n("d3b7"),n("8c4f")),y=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"index"},[n("Navbar"),n("router-view"),n("Footer")],1)},C=[],_=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("nav",{staticClass:"navbar navbar-expand-lg navbar-light p-3"},[n("a",{staticClass:"navbar-brand",attrs:{href:"#"}},[t._v("歡迎來到LearnEnglish")]),t._m(0),n("div",{staticClass:"collapse navbar-collapse justify-content-end",attrs:{id:"navbarNavAltMarkup"}},[n("div",{staticClass:"navbar-nav"},[n("router-link",{staticClass:"nav-link",attrs:{to:"/"}},[t._v("首頁 "),n("i",{staticClass:"fa fa-home"})]),n("router-link",{staticClass:"nav-link",attrs:{to:"/about"}},[t._v("關於我們 "),n("i",{staticClass:"fa fa-user"})]),n("router-link",{staticClass:"nav-link",attrs:{to:"/products"}},[t._v("課程方案 "),n("i",{staticClass:"fa fa-heart"})]),n("router-link",{staticClass:"nav-link",attrs:{to:"/cart"}},[t._v("購物車 "),n("i",{staticClass:"fas fa-shopping-cart"}),t.cartTotal>0?n("span",{staticClass:"badge badge-pill badge-danger",staticStyle:{transform:"translateX(-4px) translateY(6px)"}},[t._v(t._s(t.cartTotal)+" ")]):t._e()])],1)])])])},w=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-toggle":"collapse","data-target":"#navbarNavAltMarkup","aria-controls":"navbarNavAltMarkup","aria-expanded":"false","aria-label":"Toggle navigation"}},[n("span",{staticClass:"navbar-toggler-icon"})])}],j=(n("99af"),{data:function(){return{cartTotal:0}},methods:{getCart:function(){var t=this;this.isLoading=!0;var e="".concat("https://course-ec-api.hexschool.io/","api/").concat("11b11a35-2274-4e22-9f5b-dda3fb171d74","/ec/shopping");this.$http.get(e).then((function(e){t.cartTotal=e.data.data.length}))}},created:function(){var t=this;this.getCart(),this.$bus.$on("get-cart",(function(){t.getCart()}))}}),x=j,O=(n("8488"),Object(v["a"])(x,_,w,!1,null,"6c37ffae",null)),E=O.exports,P=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"bg-dark",staticStyle:{"background-color":"#e6ddce"}},[n("div",{staticClass:"container"},[n("div",{staticClass:"d-flex align-items-center justify-content-between text-white py-4"},[n("p",{staticClass:"mb-0"},[t._v("© 2021. All Rights Reserved.")]),n("ul",{staticClass:"d-flex list-unstyled mb-0 "},[n("li",[n("router-link",{attrs:{to:"/login"}},[n("a",{staticClass:" text-white ",attrs:{type:"submit"}},[t._v("後台管理頁面")])])],1)])])])])},T=[],S={data:function(){return{}}},$=S,A=Object(v["a"])($,P,T,!1,null,null,null),N=A.exports,L={components:{Navbar:E,Footer:N}},M=L,B=(n("eb63"),Object(v["a"])(M,y,C,!1,null,null,null)),F=B.exports;a["a"].use(k["a"]);var q=[{path:"/",component:F,children:[{path:"",component:function(){return n.e("chunk-4395a337").then(n.bind(null,"bb51"))}},{path:"products",component:function(){return Promise.all([n.e("chunk-67e462e5"),n.e("chunk-2d0dd9be")]).then(n.bind(null,"81b1"))}},{path:"product/:id",component:function(){return Promise.all([n.e("chunk-67e462e5"),n.e("chunk-5dffac94")]).then(n.bind(null,"0fd0"))}},{path:"cart",component:function(){return n.e("chunk-2d0b2197").then(n.bind(null,"2355"))}},{path:"order",component:function(){return n.e("chunk-2d22669c").then(n.bind(null,"e90b"))}},{path:"finished",component:function(){return Promise.all([n.e("chunk-67e462e5"),n.e("chunk-2d207747")]).then(n.bind(null,"a134"))}},{path:"about",component:function(){return n.e("chunk-2d0be179").then(n.bind(null,"2f7f"))}}]},{path:"/login",component:function(){return n.e("chunk-5dc3958d").then(n.bind(null,"294f"))}},{path:"/admin",component:function(){return Promise.all([n.e("chunk-67e462e5"),n.e("chunk-2d225006")]).then(n.bind(null,"e313"))},children:[{path:"products",component:function(){return Promise.all([n.e("chunk-67e462e5"),n.e("chunk-32b40b16")]).then(n.bind(null,"e7e9"))}}]}],D=new k["a"]({routes:q}),J=D;n("4989"),n("4de4"),n("a15b"),n("ac1f"),n("25f0"),n("5319"),n("1276");a["a"].filter("money",(function(t){var e=t.toString().split(".");return e[0]=e[0].replace(/\B(?=(\d{3})+(?!\d))/g,","),"$ ".concat(e.join("."))})),a["a"].prototype.$bus=new a["a"];var R=n("7bb1"),V=n("4c93"),z=n("60d4");a["a"].config.productionTip=!1,window.$=s.a,a["a"].component("Loading",d.a),a["a"].use(i.a,c.a),Object.keys(V).forEach((function(t){Object(R["c"])(t,V[t])})),Object(R["d"])("zh_TW",z),a["a"].component("ValidationObserver",R["a"]),a["a"].component("ValidationProvider",R["b"]),new a["a"]({router:J,render:function(t){return t(m)}}).$mount("#app")},"5c0b":function(t,e,n){"use strict";var a=n("9c0c"),r=n.n(a);r.a},8488:function(t,e,n){"use strict";var a=n("109d"),r=n.n(a);r.a},"9c0c":function(t,e,n){},c278:function(t,e,n){},eb63:function(t,e,n){"use strict";var a=n("c278"),r=n.n(a);r.a}});
//# sourceMappingURL=app.7613ab6d.js.map