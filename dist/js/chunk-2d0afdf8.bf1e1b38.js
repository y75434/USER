(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0afdf8"],{"0fd0":function(t,a,s){"use strict";s.r(a);var i=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"product pt-3"},[s("loading",{attrs:{active:t.isLoading},on:{"update:active":function(a){t.isLoading=a}}}),t.product.id?s("div",{staticClass:"container pt-3"},[s("nav",{attrs:{"aria-label":"breadcrumb"}},[s("ol",{staticClass:"breadcrumb bg-white"},[s("li",{staticClass:"breadcrumb-item text-brown"},[s("router-link",{attrs:{to:"/"}},[t._v("首頁")])],1),s("li",{staticClass:"breadcrumb-item text-brown"},[s("router-link",{attrs:{to:"/products"}},[t._v("課程方案")])],1),s("li",{staticClass:"breadcrumb-item active",attrs:{"aria-current":"page"}},[t._v(t._s(t.product.title))])])]),s("div",{staticClass:"row mb-4"},[s("div",{staticClass:"col-md-6 mb-5"},[s("div",{staticClass:"d-flex justify-content-center"},[s("img",{staticClass:"img-fluid rounded",attrs:{src:t.product.imageUrl[0],alt:""}})])]),s("div",{staticClass:"col-md-6 justify-content-center align-items-center"},[s("div",{staticClass:"card border-0"},[s("div",{staticClass:"card-body"},[s("h2",{staticClass:"card-title font-weight-bold",staticStyle:{color:"#6e6e6e"}},[t._v(t._s(t.product.title))]),s("p",{staticClass:"card-text"},[t._v(" "+t._s(t.product.content)+" ")]),s("div",{staticClass:"d-flex flex-column align-items-end mb-3"},[s("del",{staticClass:"mb-0 mb-2"},[t._v(" 原價 "+t._s(t.product.origin_price)+" / "+t._s(t.product.unit)+" ")]),s("p",{staticClass:"mb-0 h5 font-weight-bold",staticStyle:{color:"#96827B"}},[t._v(" 特價 "+t._s(t.product.price)+" / "+t._s(t.product.unit)+" ")])]),s("p",{staticClass:"h5 text-right",attrs:{type:"number"}},[t._v("小計 "+t._s(t._f("0")(t.product.price*t.product.num)))]),s("div",{staticClass:"d-flex"},[s("div",{staticClass:"input-group w-50 mr-3"},[s("select",{directives:[{name:"model",rawName:"v-model",value:t.product.num,expression:"product.num"}],staticClass:"form-control mr-3 rounded-0",attrs:{name:"unit"},on:{change:function(a){var s=Array.prototype.filter.call(a.target.options,(function(t){return t.selected})).map((function(t){var a="_value"in t?t._value:t.value;return a}));t.$set(t.product,"num",a.target.multiple?s:s[0])}}},t._l(10,(function(a){return s("option",{key:a,domProps:{value:a}},[t._v(" "+t._s(a)+" "+t._s(t.product.unit)+" ")])})),0)]),s("button",{staticClass:"w-50 btn-block rounded",staticStyle:{color:"#fff",background:"#96827B",border:"0"},attrs:{type:"button"},on:{click:function(a){return a.preventDefault(),t.addToCart(t.product,t.product.num)}}},[t._v("加入購物車")])])])])])])]):t._e()],1)},e=[],c=(s("99af"),s("60c4")),r={data:function(){return{status:{loadingItem:""},products:[],product:{num:1}}},created:function(){var t=this,a=this.$route.params.id;this.$http.get("".concat("https://course-ec-api.hexschool.io/","api/").concat("11b11a35-2274-4e22-9f5b-dda3fb171d74","/ec/product/").concat(a)).then((function(a){t.product=a.data.data}))},methods:{addToCart:function(t){var a=this,s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;this.status.loadingItem=t.id,this.isLoading=!0;var i="".concat("https://course-ec-api.hexschool.io/","api/").concat("11b11a35-2274-4e22-9f5b-dda3fb171d74","/ec/shopping"),e={product:t.id,quantity:s};this.$http.post(i,e).then((function(){a.isLoading=!1,a.status.loadingItem="",a.$bus.$emit("get-cart"),c["a"].fire({title:"已加入購物車",icon:"success"})})).catch((function(t){var a=t.response.data.errors;a&&c["a"].fire({title:"".concat(a),icon:"warning"})}))}}},o=r,n=s("2877"),d=Object(n["a"])(o,i,e,!1,null,null,null);a["default"]=d.exports}}]);
//# sourceMappingURL=chunk-2d0afdf8.bf1e1b38.js.map