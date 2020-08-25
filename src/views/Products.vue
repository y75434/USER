<template>
<!---產品列表-->
<div class="row mt-4">
    <div v-for="item in products" :key="item.id" class="col-md-4 mb-4">
        <div class="card border-0 shadow-sm" >
          <div style="height: 300px; background-size: cover; background-position: center" :style="{backgroundImage: `url(${item.imageUrl})`}"></div>
            <div class="card-body">
                <span class="badge badge-secondary float-right ml-2">{{ item.category }}</span>
                <h5 class="card-title"><a href="#" class="text-dark">{{ item.title }}</a></h5>
                <p class="card-text" v-html="item.content">{{ item.content }}</p>
                <div class="d-flex justify-content-between align-items-baseline">
                    <div v-if="!item.price || item.price === item.origin_price" class="h5">{{ item.origin_price }} 元</div>
                    <div v-else>
                        <del class="h6">原價 {{ item.origin_price }} 元</del>
                        <div class="h5">現在只要 {{ item.price }} 元</div>
                    </div>
                </div>
            </div>
        </div>
        <div class="card-footer d-flex">
            <button type="button" class="btn btn-outline-secondary btn-sm" :disabled="status.loadingItem === item.id" @click="getProduct(item.id)">
                <i v-if="status.loadingItem === item.id" class="spinner-grow spinner-grow-sm"></i>查看更多
            </button>
            <button type="button" class="btn btn-outline-danger btn-sm ml-auto" :disabled="status.loadingItem === item.id" @click="addToCart(item)">
                <i v-if="status.loadingItem === item.id" class="spinner-grow spinner-grow-sm"></i>加到購物車
            </button>
        </div>
    </div>
</div>

</template>

<script type="module">
/* global $ */
export default {
  name: 'Home',
  data () {
    return {
      products: []
    }
  },
  methods: {
    getProduct (id) {
      this.$router.push(`/product/${id}`)
    }
  },
  created () {
    const url = `${process.env.VUE_APP_APIPATH}api/${process.env.VUE_APP_UUID}/ec/products`
    this.$http.get(url)
      .then((res) => {
        this.products = res.data.data
      })
  }
}

</script>
