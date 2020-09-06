<template>
  <div class="mt-5 mb-5">
    <h3 class="mx-5">我的購物車</h3>
    <div class="row" style="justify-content: center;">
    <div class="col-md-7" >
      <table class="table">
        <thead>
          <tr>
            <th scope="col" class="border-0 px-3">產品名稱</th>
            <th scope="col" class="border-0 px-3">數量</th>
            <th scope="col" class="border-0">金額</th>
            <th scope="col" class="border-0">移除</th>
          </tr>
        </thead>
        <tbody>
          <tr class="cart">
            <th scope="row" class="border-0 px-0 font-weight-normal py-4 px-4">
              <img src="images/lesson_2.jpg" style="width: 90px; height: 90px; object-fit: cover;">
              <p class="mb-0 font-weight-bold ml-3 d-inline-block">{{ product.title }}</p>
            </th>
            <td class="border-0 align-middle" style="max-width: 160px;">
              <div class="input-group pr-5">
                <div class="input-group-prepend">
                  <button class="btn btn-outline-dark border-1 py-2" type="button"  @click.prevent="quantityUpdata(item.product.id, item.quantity -1)" :disabled="item.quantity === 1">
                    <i class="fas fa-minus"></i>
                  </button>
                </div>
                <input type="text" class="form-control border-1 text-center my-auto shadow-none" aria-describedby="button-addon1" value="1">
                <div class="input-group-prepend">
                  <button class="btn btn-outline-dark border-1 py-2" type="button" @click.prevent="quantityUpdata(item.product.id, item.quantity + 1);">
                    <i class="fas fa-plus"></i>
                  </button>
                </div>
              </div>
            </td>
            <td class="border-0 align-middle"><p class="mb-0 ml-auto">{{ (product.price * cartNum) }}</p></td>
            <td class="border-0 align-middle"><i class="fas fa-times"></i></td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="col-md-4 ">
      <div class="border p-4 mb-4">
        <h4 class="font-weight-bold mb-4">訂單</h4>
        <table class="table text-dark border-bottom">
          <tbody>
            <tr>
              <th scope="row" class="border-0 px-0 pt-4 font-weight-normal">品名</th>
              <td class="text-right border-0 px-0 pt-4">金額</td>
            </tr>
          </tbody>
        </table>
        <div class="d-flex justify-content-between mt-4">
          <p class="mb-0 h4 font-weight-bold">總計</p>
          <p class="mb-0 h4 font-weight-bold">{{ cartTotal | money }}</p>
        </div>
        <a href="#" class="btn btn-secondary btn-block mt-4 col-md-2" >確認</a>
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
    addToCart (item, quantity = 1) {
      this.status.loadingItem = item.id
      this.isLoading = false
      const url = `${process.env.VUE_APP_APIPATH}${process.env.VUE_APP_UUID}/ec/shopping`
      const cart = {
        product: item.id,
        quantity// quantity:quantity,的簡寫
      }
      this.$http.post(url, cart).then(() => {
        this.isLoading = false
        this.status.loadingItem = ''
        this.getCart()
      })
    },
    // 更新數量
    quantityUpdata (id, quantity) {
      this.isLoading = true
      const url = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_UUID}/ec/shopping`
      const data = {
        product: id,
        quantity
      }
      this.cart.forEach((item) => {
        this.cartTotal += item.product.price * this.quantity
      })
      this.isLoading = false
      this.$http.patch(url, data).then(() => {
        this.isLoading = false
        this.getCart()
      })
    },
    removeCartItem (id) {
      this.isLoading = true
      const url = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_UUID}/ec/shopping/${id}`
      this.$http.delete(url).then(() => {
        this.isLoading = false
        this.getCart()
      })
    },
    getCart () { // 購物車
      this.isLoading = true
      const url = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_UUID}/ec/shopping`
      this.$http.get(url).then((response) => {
        this.cart = response.data.data// 取得遠端購物車內容
        this.quantityUpdata()// 執行算式
        this.isLoading = false
      })
    }
  }
}
</script>

<style>
</style>
