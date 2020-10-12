<template>
  <div class="product pt-3">
    <loading :active.sync="isLoading"></loading>
    <div class="container pt-3" v-if="product.id">
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb bg-white">
          <li class="breadcrumb-item text-brown"><router-link to="/">首頁</router-link></li>
          <li class="breadcrumb-item text-brown"><router-link to="/products">課程方案</router-link></li>
          <li class="breadcrumb-item active" aria-current="page">{{ product.title }}</li>
        </ol>
      </nav>
      <div class="row mb-4">
        <div class="col-md-6 mb-5">
          <div class="d-flex justify-content-center">
            <img :src="product.imageUrl[0]" alt="" class="img-fluid rounded" />
          </div>
        </div>
        <div class="col-md-6 justify-content-center align-items-center">
          <div class="card border-0">
            <div class="card-body">
              <h2 class="card-title font-weight-bold" style="color: #6e6e6e;">{{ product.title }}</h2>
              <p class="card-text">
                {{ product.content }}
              </p>
              <div class="d-flex flex-column align-items-end mb-3">
                <del class="mb-0 mb-2">
                  原價 {{ product.origin_price }} / {{ product.unit }}
                </del>
                <p class="mb-0 h5 font-weight-bold" style="color:  #96827B;">
                特價 {{ product.price }} / {{ product.unit }}
                </p>
              </div>
              <p class="h5 text-right" type="number">小計 {{ (product.price * product.num) | product.price  }}</p>
              <div class="d-flex">
                <div class="input-group w-50 mr-3">
                  <select name="unit" class="form-control mr-3 rounded-0" v-model="product.num" >
                    <option :value="num" v-for="num in 10" :key="num" >
                      {{ num }} {{ product.unit }}
                    </option>
                  </select>
                </div>
                <button type="button" class="w-50 btn-block rounded" style="color: #fff; background: #96827B; border: 0;" @click.prevent="addToCart(product, product.num)">加入購物車</button>
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
        loadingItem: ''
      },
      products: [],
      product: {
        num: 1
      }
    }
  },
  created () {
    this.isLoading = true
    /* console.log(this.$route.params.id); */
    const { id } = this.$route.params
    this.$http.get(`${process.env.VUE_APP_APIPATH}api/${process.env.VUE_APP_UUID}/ec/product/${id}`)
      .then((res) => {
        this.isLoading = false
        this.product = res.data.data
        this.product.num = 1 // 忘記加入導致小計NaN
      })
  },
  methods: {
    addToCart (item, quantity = 1) {
      this.status.loadingItem = item.id
      this.isLoading = true
      const url = `${process.env.VUE_APP_APIPATH}api/${process.env.VUE_APP_UUID}/ec/shopping`
      const cart = {
        product: item.id,
        quantity // this.num
      }
      this.$http.post(url, cart).then(() => {
        this.isLoading = false
        this.status.loadingItem = ''
        this.$bus.$emit('get-cart')// 點擊後把數量傳到icon'
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
    getProduct () {
      this.$http.get(`${process.env.VUE_APP_APIPATH}${process.env.VUE_APP_UUID}/ec/products`)
        .then((res) => {
          this.product = res.data.data
        })
    }
  }
}
</script>
