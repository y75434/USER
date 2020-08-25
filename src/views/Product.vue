<template>
<div class="row">
  <div class="col-lg-2 col-md-4">
    <div class="list-group" id="list-tab" role="tablist">
      <a class="list-group-item list-group-item-action active" data-toggle="list"  href="#" @click="category = 'all'">全部</a>
      <a class="list-group-item list-group-item-action" data-toggle="list"  href="#list-filter" @click="category = ''">會話</a>
      <a class="list-group-item list-group-item-action" data-toggle="list"  href="#list-filter" @click="category = ''">口說</a>
      <a class="list-group-item list-group-item-action" data-toggle="list"  href="#list-filter" @click="category = ''">考試</a>
    </div>
  </div>
  <div class="col-lg-10 col-md-8">
    <div class="tab-content" id="nav-tabContent">
      <div class="tab-pane fade show active" id="list-home" role="tabpanel" aria-labelledby="list-home-list"><div v-for="item in products" :key="item.id" class="col-md-4 mb-4">
        <div class="card border-0 shadow-sm" >
          <div style="height: 300px; background-size: cover; background-position: center" :style="{backgroundImage: `url(${item.imageUrl[0]})` }"></div>
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
    </div></div>
      <div class="tab-pane fade" id="list-profile" role="tabpanel" aria-labelledby="list-profile-list">...</div>
      <div class="tab-pane fade" id="list-messages" role="tabpanel" aria-labelledby="list-messages-list">...</div>
      <div class="tab-pane fade" id="list-settings" role="tabpanel" aria-labelledby="list-settings-list">...</div>

      </div>
    </div>
  </div>
</div>
</template>

<script type="module">
// eslint-disable-next-line no-unused-vars
/* global $ */
export default {
  name: 'Product',
  data () {
    return {
      products: []
    }
  },
  created () {
    this.$http.get(`${process.env.VUE_APP_APIPATH}api/${process.env.VUE_APP_UUID}/ec/products`)
      .then((res) => {
        this.products = res.data.data
      })
  },
  methods: {
    getProduct (id) {
      // 讀取效果
      this.status.loadingItem = id
      const url = `${this.apipath}/api/${this.UUID}/ec/product/${id}`
      console.log(id)
      axios.get(url).then((response) => {
        // 存取遠端資料
        this.tempProduct = response.data.data
        this.tempProduct.num = 1
        // 強制寫入預設值 this.$set(this.tempProduct, 'num', 1);
        this.status.loadingItem = ''// ajax結束後清除
      })
    },
    addToCart (item, quantity = 1) {
      this.status.loadingItem = item.id
      this.isLoading = false
      const url = `${this.apipath}/api/${this.UUID}/ec/shopping`
      const cart = {
        product: item.id,
        quantity// quantity:quantity,的簡寫
      }
      axios.post(url, cart).then(() => {
        this.isLoading = false
        this.status.loadingItem = ''
        this.getCart()
      }).catch((error) => {
        this.isLoading = false
        this.status.loadingItem = ''
        console.log(error.response.data.errors)
      })
    }
  }
}
</script>
