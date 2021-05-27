<template>
  <div class="container">
    <loading :active.sync="isLoading"></loading>
      <ul class="my-5 process d-flex justify-content-around">
        <li class="text-center">
          <span class="num">1</span>
          <p>購物車內容</p>
        </li>
        <li class="text-center">
          <span class="num processNum">2</span>
          <p>訂單填寫</p>
        </li>
        <li class="text-center">
          <span class="num processNum">3</span>
          <p>結帳</p>
        </li>
      </ul>
      <section class="row justify-content-center" v-if="carts.length > 0">
        <div class="col-md-7 d-md-block d-none">
          <table class="table table-td">
            <thead>
              <tr class="border-0">
                <th scope="col" class="border-0 px-3" >產品名稱</th>
                <th scope="col" class="border-0 px-3">數量</th>
                <th scope="col" class="border-0">金額</th>
                <th scope="col" class="border-0">移除</th>
              </tr>
            </thead>
            <tbody>
              <tr class="cart" v-for="item in carts" :key="item.id">
                <td scope="row" class="border-0 px-0 font-weight-normal py-4" >
                  <img :src="item.product.imageUrl[0]" style="width: 90px; height: 90px; object-fit: cover;">
                  <p class="mb-0 font-weight-bold ml-3 d-inline-block">{{ item.product.title }}</p>
                </td>
                <td class="border-0 align-middle">
                  <div class=" d-flex">
                    <select @change="totalUpdate" v-model.number="item.quantity" class="form-control">
                      <option :value="num" v-for="num in 10" :key="num" >
                      {{ num }}
                      </option>
                    </select>
                  </div>
                </td>
                <td class="border-0 align-middle">
                  <p class="mb-0 ml-auto">{{ item.product.price | money }}/{{ item.product.unit }}</p>
                </td>
                <td class="border-0 align-middle">
                  <button @click.prevent="removeCartItem(item.product.id)" class="delBtn btn-sm btn btn-outline-danger">
                    <i class="fas fa-trash-alt"></i>
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="col-md-5 justify-content-center align-items-center">
          <div class="receipt p-5 mb-5">
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
            <div class="d-flex justify-content-between mt-4 border-outline-brown">
              <p class="mb-4 h4 font-weight-bold">總計</p>
              <p class="mb-0 h4 font-weight-bold float-right"  type="number">{{ cartTotal | money }}</p>
            </div>
            <div class="mb-4">
              <router-link to="/order" class="btn btn-block text-white float-right  goBtn" >前往結帳</router-link>
            </div>
          </div>
        </div>
      </section>
      <section v-else class="row justify-content-center" style="height: 80vh;">
        <div class="justify-content-center align-items-center flex-column h-100 w-100 m-5">
          <img src="images/neko.png" class="mx-auto mb-4 cart-pic d-flex justify-content-center">
          <h3 class="text-center text-secondary mb-4">目前購物車是空的</h3>
          <div class="text-center">
            <router-link to="/products" class="goBtn btn" type="button">
            繼續購物
            </router-link>
          </div>
        </div>
      </section>
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
