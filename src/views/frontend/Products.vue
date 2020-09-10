<template>
  <div class="products">
    <loading :active.sync="isLoading"></loading>
    <div class="container mt-md-5 mt-3 mb-5 ">
      <div class="row">
        <div class="col-md-3">
          <div class="accordion border border-bottom border-top-0 border-left-0 border-right-0 mb-3" id="accordionExample">
            <div class="card border-0">
              <a class="list-group-item list-group-item-action px-0 py-4 bg-white border border-bottom-0 border-top border-left-0 border-right-0" href="#" @click.prevent="getFilter(filterType = '全部商品')">
                <h4 class="mb-0">
                  全部商品
                </h4>
              </a>
            </div>
            <div class="card border-0">
              <a class="list-group-item list-group-item-action px-0 py-4 bg-white border border-bottom-0 border-top border-left-0 border-right-0" href="#" @click.prevent="getFilter(filterType = '考試')">
                <h4 class="mb-0">
                  考試
                </h4>
              </a>
            </div>
            <div class="card border-0">
              <a class="list-group-item list-group-item-action px-0 py-4 bg-white border border-bottom-0 border-top border-left-0 border-right-0" href="#" @click.prevent="getFilter(filterType = '口說')">
                <h4 class="mb-0">
                  口說
                </h4>
              </a>
            </div>
            <div class="card border-0">
              <a class="list-group-item list-group-item-action px-0 py-4 bg-white border border-bottom-0 border-top border-left-0 border-right-0" href="#" @click.prevent="getFilter(filterType = '學習')">
                <h4 class="mb-0">
                  學習
                </h4>
              </a>
            </div>
          </div>
        </div>
        <div class="col-md-9">
          <div class="row">
            <div class="col-md-4" v-for="item in categories" :key="item.id">
              <div class="card border-0 mb-4 position-relative shadow-sm">
                <router-link :to="`/product/${ item.id }`">
                  <img class="card-img-top rounded" style="height: 180px; background-size: cover; background-position: center;" :style="{ backgroundImage: `url(${ item.imageUrl[0] })` }">
                </router-link>
                  <div class="card-body p-0 ">
                    <h4 class="mb-0 mt-3">{{ item.title }}<span class="badge badge-secondary float-right" >{{ item.category }}</span></h4>
                    <p class="card-text mb-0">特價 {{ item.price }} 元<span class="text-muted float-right"> <del>原價 {{ item.origin_price }} 元</del></span></p>
                    <button class="btn btn-lg btn-warning btn-block mt-2 rounded" style="color: #fff;" @click.prevent="addToCart(item, quantity=1)">加入購物車</button>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Toast from '@/components/Toast'

export default {
  data () {
    return {
      status: {
        loadingItem: ''// 需先給預設值不然會出錯
      },
      filterType: '',
      products: [],
      product: {
        num: 1
      },
      categories: []
    }
  },
  created () {
    this.isLoading = true
    /* console.log('UUID', process.env.VUE_APP_UUID); */
    this.$http.get(`${process.env.VUE_APP_APIPATH}api/${process.env.VUE_APP_UUID}/ec/products`)
      .then((res) => {
        this.products = res.data.data
        // 把分類顯示，沒放一點進此頁時看不到產品
        this.categories = this.products
      })
    this.isLoading = false
  },
  methods: {
    addToCart (item, quantity = 1) {
      this.status.loadingItem = item.id
      this.isLoading = true
      const url = `${process.env.VUE_APP_APIPATH}api/${process.env.VUE_APP_UUID}/ec/shopping`
      const cart = {
        product: item.id,
        quantity// quantity:quantity,的簡寫
      }
      this.$http.post(url, cart).then(() => {
        this.isLoading = false
        this.status.loadingItem = ''
        this.$bus.$emit('get-cart')// 點擊後把數量傳到icon
        Toast.fire({
          title: '已加入購物車',
          icon: 'success'
        })
      }).catch((err) => {
        const errorData = err.response.data.errors
        if (errorData) {
          Toast.fire({
            title: `${errorData}`,
            icon: 'warning'
          })
        }
      })
    },
    getCart () { // 購物車
      this.isLoading = true
      const url = `${process.env.VUE_APP_APIPATH}api/${process.env.VUE_APP_UUID}/ec/shopping`
      this.get(url).then((response) => {
        this.cart = response.data.data
        this.isLoading = false
        this.$bus.$emit('get-cart')// 點擊後把數量傳到icon
      })
    },
    // 產品分類
    getFilter () {
      switch (this.filterType) {
        case '全部商品':
          this.categories = this.products
          break
        case '口說':
          this.categories = this.products.filter((item) => item.category === '口說')
          break
        case '考試':
          this.categories = this.products.filter((item) => item.category === '考試')
          break
        case '學習':
          this.categories = this.products.filter((item) => item.category === '學習')
          break
        default:
          break
      }
    }
  }
}
</script>

<style>
</style>
