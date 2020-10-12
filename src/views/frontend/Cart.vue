<template>
  <div class=" container mt-5 mb-5">
    <loading :active.sync="isLoading"></loading>
    <div><h3 class="mx-5">我的購物車</h3>
      <div class="row justify-content-center">
        <div class="col-md-7" v-if="carts.length > 0">
          <table class="table" >
            <thead>
              <tr>
                <th scope="col" class="border-0 px-3" >產品名稱</th>
                <th scope="col" class="border-0 px-3">數量</th>
                <th scope="col" class="border-0">金額</th>
                <th scope="col" class="border-0">移除</th>
              </tr>
            </thead>
            <tbody>
              <tr class="cart" v-for="item in carts" :key="item.id">
                <th scope="row" class="border-0 px-0 font-weight-normal py-4 px-4" >
                  <img :src="item.product.imageUrl[0]" style="width: 90px; height: 90px; object-fit: cover;">
                  <p class="mb-0 font-weight-bold ml-3 d-inline-block">{{ item.product.title }}</p>
                </th>
                <td class="border-0 align-middle" style="max-width: 160px;">
                  <div class="input-group pr-5">
                    <div class="input-group-prepend">
                      <button class="btn btn-outline-dark border-1 py-2" type="button"  @click.prevent="quantityUpdate(item.product.id, item.quantity -1)" :disabled="item.quantity === 1">
                        <i class="fas fa-minus"></i>
                      </button>
                    </div>
                    <input type="number"  min="1" class="form-control-plaintext  text-center  " readonly v-model.number="item.quantity" aria-describedby="button-addon1" value="1">
                    <div class="input-group-prepend">
                      <button class="btn btn-outline-dark border-1 py-2" type="button" @click.prevent="quantityUpdate(item.product.id, item.quantity + 1);">
                        <i class="fas fa-plus"></i>
                      </button>
                    </div>
                  </div>
                </td>
                <td class="border-0 align-middle">
                  <p class="mb-0 ml-auto">{{ item.product.price | money }}/{{ item.product.unit }}</p>
                </td>
                <td class="border-0 align-middle">
                  <button type="button" @click.prevent="removeCartItem(item.product.id)" class="btn btn-sm"><i class="fas fa-times"></i></button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div v-else class="col-md-7 row justify-content-center align-items-center">
          <h4 class="font-weight-bold ">目前購物車是空的</h4>
          <p class="font-weight-normal text-muted mt-2">
            <router-link to="/products" class="text-dark mt-5 mt-3">
            <i class="fas fa-chevron-left "></i>
            繼續購物
            </router-link>
          </p>
        </div>
        <div class="col-md-4  justify-content-center align-items-center">
          <div class="border p-4 mb-4">
            <h4 class="font-weight-bold mb-4">訂單</h4>
            <table class="table text-dark ">
              <tbody>
                <tr class="border-bottom">
                  <th scope="row" class="border-0 px-0 pt-4 font-weight-normal">品名</th>
                  <td class="text-right border-0 px-0 pt-4">金額</td>
                </tr>
                <tr class="cart" v-for="item in carts" :key="item.id">
                  <th scope="row" class="border-0 px-0 pt-4 font-weight-normal">{{ item.product.title }}</th>
                  <td class="text-right border-0 px-0 pt-4">{{ (item.product.price * item.quantity) | money }}</td>
                </tr>
              </tbody>
            </table>
            <div class="d-flex justify-content-between mt-4  mb-5 border-outline-brown">
              <p class="mb-0 h4 font-weight-bold">總計</p>
              <p class="mb-0 h4 font-weight-bold float-right"  type="number">{{ cartTotal | money }}</p>
            </div>
            <div class="   border-outline-brown ">
              <router-link to="/order" class="btn btn-warning btn-block col-md-8 float-right" >前往結帳</router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      carts: {},
      cartTotal: 0
    }
  },
  status: {
    loadingItem: ''// 需先給預設值不然會出錯
  },
  created () {
    this.getCart()
  },
  methods: {
    // 更新數量
    quantityUpdate (id, quantity) {
      this.isLoading = true
      const url = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_UUID}/ec/shopping`
      const cart = {
        product: id,
        quantity
      }
      this.$http.patch(url, cart).then(() => {
        this.getCart()
        this.$bus.$emit('get-cart')// 點擊後把數量傳到icon
      })
      this.isLoading = false
    },
    // 更新總額
    totalUpdate () {
      let total = 0
      this.carts.forEach((item) => {
        total += item.product.price * item.quantity
      })
      this.cartTotal = total
    },
    // 刪除單一產品
    removeCartItem (id) {
      this.isLoading = true
      const url = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_UUID}/ec/shopping/${id}`
      this.$http.delete(url).then(() => {
        this.isLoading = false
        this.getCart()
        this.$bus.$emit('get-cart')// 點擊後把數量傳到icon
      })
    },
    // 取得購物車資訊
    getCart () {
      this.isLoading = true
      const url = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_UUID}/ec/shopping`
      this.$http.get(url).then((response) => {
        this.carts = response.data.data// 取得遠端購物車內容
        this.totalUpdate()// 執行算式
        this.isLoading = false
      })
    }
  }
}
</script>

<style>
</style>
