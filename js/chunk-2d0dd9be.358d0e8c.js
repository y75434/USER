(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0dd9be"],{"81b1":function(t,i,r){"use strict";r.r(i);var e=function(){var t=this,i=t.$createElement,r=t._self._c||i;return r("div",{staticClass:"products"},[r("loading",{attrs:{active:t.isLoading},on:{"update:active":function(i){t.isLoading=i}}}),t._m(0),r("div",{staticClass:"container"},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-md-3 d-none d-md-block"},[r("div",{staticClass:"accordion border border-bottom border-top-0 border-left-0 border-right-0 mb-3",attrs:{id:"accordionExample"}},[r("div",{staticClass:"card border-0"},[r("a",{staticClass:"list-group-item list-group-item-action px-0 py-4 bg-white border border-bottom-0 border-top border-left-0 border-right-0",attrs:{href:"#"},on:{click:function(i){return i.preventDefault(),t.getFilter(t.filterType="全部商品")}}},[r("h4",{staticClass:"mb-0"},[t._v(" 全部商品 ")])])]),r("div",{staticClass:"card border-0"},[r("a",{staticClass:"list-group-item list-group-item-action px-0 py-4 bg-white border border-bottom-0 border-top border-left-0 border-right-0",attrs:{href:"#"},on:{click:function(i){return i.preventDefault(),t.getFilter(t.filterType="考試")}}},[r("h4",{staticClass:"mb-0"},[t._v(" 考試 ")])])]),r("div",{staticClass:"card border-0"},[r("a",{staticClass:"list-group-item list-group-item-action px-0 py-4 bg-white border border-bottom-0 border-top border-left-0 border-right-0",attrs:{href:"#"},on:{click:function(i){return i.preventDefault(),t.getFilter(t.filterType="口說")}}},[r("h4",{staticClass:"mb-0"},[t._v(" 口說 ")])])]),r("div",{staticClass:"card border-0"},[r("a",{staticClass:"list-group-item list-group-item-action px-0 py-4 bg-white border border-bottom-0 border-top border-left-0 border-right-0",attrs:{href:"#"},on:{click:function(i){return i.preventDefault(),t.getFilter(t.filterType="學習")}}},[r("h4",{staticClass:"mb-0"},[t._v(" 學習 ")])])])])]),r("div",{staticClass:"col-9 mx-auto"},[r("div",{staticClass:"row"},t._l(t.categories,(function(i){return r("div",{key:i.id,staticClass:"col-md-4"},[r("div",{staticClass:"card border-0 mb-4 position-relative"},[r("router-link",{attrs:{to:"/product/"+i.id}},[r("img",{staticClass:"card-img-top border-0 rounded product-img",style:{backgroundImage:"url("+i.imageUrl[0]+")"}})]),r("div",{staticClass:"card-body p-0 "},[r("h4",{staticClass:"mb-0 mt-3"},[t._v(t._s(i.title)),r("span",{staticClass:"badge badge-secondary float-right"},[t._v(t._s(i.category))])]),r("p",{staticClass:"card-text mb-4"},[t._v("特價 "+t._s(i.price)+" 元"),r("span",{staticClass:"text-muted float-right"},[r("del",[t._v("原價 "+t._s(i.origin_price)+" 元")])])]),r("button",{staticClass:"productBtn mt-2",staticStyle:{color:"#fff"},on:{click:function(r){return r.preventDefault(),t.addToCart(i,t.quantity=1)}}},[t._v("加入購物車")])])],1)])})),0)])])])],1)},a=[function(){var t=this,i=t.$createElement,r=t._self._c||i;return r("div",{staticClass:"mb-5 w-100"},[r("div",{staticClass:"productHeader"})])}],s=(r("99af"),r("4de4"),r("60c4")),o={data:function(){return{isLoading:!1,status:{loadingItem:""},filterType:"",products:[],product:{num:1},categories:[]}},created:function(){var t=this;this.isLoading=!0,this.$http.get("".concat("https://course-ec-api.hexschool.io/","api/").concat("11b11a35-2274-4e22-9f5b-dda3fb171d74","/ec/products")).then((function(i){t.products=i.data.data,t.categories=t.products})),this.isLoading=!1},methods:{addToCart:function(t){var i=this,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;this.status.loadingItem=t.id,this.isLoading=!0;var e="".concat("https://course-ec-api.hexschool.io/","api/").concat("11b11a35-2274-4e22-9f5b-dda3fb171d74","/ec/shopping"),a={product:t.id,quantity:r};this.$http.post(e,a).then((function(){i.isLoading=!1,i.status.loadingItem="",i.$bus.$emit("get-cart"),s["a"].fire({title:"已加入購物車",icon:"success"})})).catch((function(t){var r=t.response.data.errors;r&&s["a"].fire({title:"".concat(r),icon:"warning"}),i.isLoading=!1}))},getCart:function(){var t=this;this.isLoading=!0;var i="".concat("https://course-ec-api.hexschool.io/","api/").concat("11b11a35-2274-4e22-9f5b-dda3fb171d74","/ec/shopping");this.get(i).then((function(i){t.cart=i.data.data,t.isLoading=!1,t.$bus.$emit("get-cart")}))},getFilter:function(){switch(this.filterType){case"全部商品":this.categories=this.products;break;case"口說":this.categories=this.products.filter((function(t){return"口說"===t.category}));break;case"考試":this.categories=this.products.filter((function(t){return"考試"===t.category}));break;case"學習":this.categories=this.products.filter((function(t){return"學習"===t.category}));break;default:break}}}},c=o,d=r("2877"),n=Object(d["a"])(c,e,a,!1,null,null,null);i["default"]=n.exports}}]);
//# sourceMappingURL=chunk-2d0dd9be.358d0e8c.js.map