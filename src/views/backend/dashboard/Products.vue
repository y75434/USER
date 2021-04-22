<template>
  <div class="container mt-3">
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
        <tr v-for="item in products" :key="item.id">
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

    <Modal :temp-product="tempProduct" ref="productModal" :isNew="isNew" @update="getProducts" />
  </div>
</template>

<script>
import Pagination from '@/components/dashboard/Pagination'
import Modal from '@/components/dashboard/Modal'
import Toast from '@/components/Toast'
import $ from 'jquery'

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
    Pagination,
    Modal
  },
  created () {
    this.getProducts()
  },
  methods: {
    getProducts (page = 1) {
      const url = `${process.env.VUE_APP_APIPATH}api/${process.env.VUE_APP_UUID}/admin/ec/products?page=${page}`
      this.isLoading = true
      this.$http.get(url).then((res) => {
        this.isLoading = false
        this.products = res.data.data
        this.pagination = res.data.meta.pagination
      }).catch((err) => {
        // const errorData = err.response.data.errors
        if (err) {
          Toast.fire({
            title: `${err}`,
            icon: 'warning'
          })
        }
      })
    },
    openModal (isNew, item) {
      switch (isNew) {
        case 'new':
          // 新增之前要先清除原有可能暫存的資料
          this.tempProduct = {
            imageUrl: []
          }
          this.isNew = true
          // 開啟Modal
          $('#productModal').modal('show')
          break
        case 'edit':
          // 取得單一產品
          this.getProduct(item.id)
          this.isNew = false
          break
        case 'delete':
          // 目前範本僅有一層物件，因此使用淺拷貝
          this.tempProduct = Object.assign({}, item)
          // 拷貝完畢後開啟Modal
          $('#delProductModal').modal('show')
          break
        default:
          break
      }
    },
    // 取得單一產品詳細資料
    getProduct (id) {
      const url = `${process.env.VUE_APP_APIPATH}api/${process.env.VUE_APP_UUID}/admin/ec/product/${id}`
      this.$http.get(url).then((res) => {
        // 若成功，資料寫入tempProduct
        this.tempProduct = res.data.data
        // 顯示該產品詳細資料頁面
        $('#productModal').modal('show')
        // 失敗
      }).catch((error) => {
        console.log(error)
      })
    },
    // 請看圖片
    uploadFile () {
    // 把檔案內容取出來(第一個檔案)
      const uploadedFile = this.$refs.file.file[0]
      const formData = new FormData()
      formData.append('file', uploadedFile)
      const url = `${process.env.VUE_APP_APIPATH}api/${process.env.VUE_APP_UUID}/admin/storage`
      this.status.fileUploading = true
      this.$http.post(url, formData, {
        // 聲明內容傳遞時需用formData格式，以便後端做判斷
        headers: {
          'Content-Type': 'multipart/form-data'
        }
        // 上傳成功
      }).then((response) => {
        this.status.fileUploading = false
        if (response.status === 200) {
          // 使圖片路徑等於剛上傳的路徑(把圖片路徑存下來)
          this.tempProduct.imageUrl.push(response.data.data.path)
        }
        // 上傳失敗
      }).catch(() => {
        console.log('不可超過 2 MB')
        this.status.fileUploading = false
      })
    }
  }
}
</script>
