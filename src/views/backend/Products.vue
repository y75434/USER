<template>
  <div id="app" class="container mt-3">
    <div>
      <button class="btn btn-info" @click="openModal('new')">建立產品</button>
    </div>
    <table class="table mt-4">
      <thead class="thead-light">
        <tr>
          <th width="120">分類</th>
          <th>產品名稱</th>
          <th width="120">原價</th>
          <th width="120">售價</th>
          <th width="100">是否啟用</th>
          <th width="120">編輯</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in products" :key="index">
          <td>{{ item.category }}</td>
          <td>{{ item.title }}</td>
          <td class="text-right">{{ item.origin_price }}</td>
          <td class="text-right">{{ item.price }}</td>
          <td>
            <span v-if="item.enabled" class="text-success">啟用</span>
            <span v-else>未啟用</span>
          </td>
          <td>
            <div class="btn-group">
              <button class="btn btn-primary btn-sm" @click="openModal('edit', item)">
                  編輯
              </button>
              <button class="btn btn-danger btn-sm " @click="openModal('delete', item)">
                  刪除
              </button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
    <!-- 按鈕 -->
    <Pagination :pages="pagination" @emit-pages="getProducts"></Pagination>
  </div>
</template>

<script>
import Pagination from '@/components/dashboard/Pagination'
import Toast from '@/components/Toast'

export default {
  data () {
    return {
      products: [],
      tempProduct: {
        imageUrl: []
      },
      pagination: {}
    }
  },
  components: {
    Pagination
  },
  created () {
    this.getProducts()
  },
  methods: {
    getProducts (page = 1) {
      const url = `${process.env.VUE_APP_APIPATH}${process.env.VUE_APP_UUID}/admin/ec/products?page=${page}`
      this.isLoading = true
      this.$http.get(url).then((res) => {
        this.isLoading = false
        this.products = res.data.data
        // this.pagination = res.data.meta.pagination
      }).catch((err) => {
        // const errorData = err.response.data.errors
        if (err) {
          Toast.fire({
            title: `${err}`,
            icon: 'warning'
          })
        }
      })
    }
  }
}
</script>
