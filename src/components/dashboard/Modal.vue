<template>
  <div>
    <!---modal-->
  <div id="productModal" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
    aria-hidden="true">
    <div class="modal-dialog modal-xl" role="document">
      <div class="modal-content border-0">
        <div class="modal-header bg-light text-black">
          <h5 id="exampleModalLabel" class="modal-title">
              <span>新增產品</span>
          </h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
          </button>
      </div>
      <div class="modal-body">
          <div class="row">
              <div class="col-sm-4">
                  <div class="form-group">
                      <label for="imageUrl">輸入圖片網址</label>
                      <input id="imageUrl" v-model="tempProduct.imageUrl" type="text" class="form-control" placeholder="請輸入圖片連結">
                  </div>

                  <img class="img-fluid" :src="tempProduct.imageUrl" alt="">
              </div>
              <div class="col-sm-8">
                  <div class="form-group">
                      <label for="title">標題</label>
                      <input id="title" v-model="tempProduct.title" type="text" class="form-control" placeholder="請輸入標題">
                  </div>
                  <div class="form-row">
                      <div class="form-group col-md-6">
                          <label for="category">分類</label>
                          <input id="category" v-model="tempProduct.category" type="text" class="form-control" placeholder="請輸入分類">
                      </div>
                      <div class="form-group col-md-6">
                          <label for="price">單位</label>
                          <input id="unit" v-model="tempProduct.unit" type="unit" class="form-control" placeholder="請輸入單位">
                      </div>
                  </div>
                  <div class="form-row">
                      <div class="form-group col-md-6">
                          <label for="origin_price">原價</label>
                          <input id="origin_price" v-model="tempProduct.origin_price" type="number" class="form-control" placeholder="請輸入原價">
                      </div>
                      <div class="form-group col-md-6">
                          <label for="price">售價</label>
                          <input id="price" v-model="tempProduct.price" type="number" class="form-control" placeholder="請輸入售價">
                      </div>
                  </div>
                  <hr>
                  <div class="form-group">
                      <label for="description">產品描述</label>
                      <textarea id="description" v-model="tempProduct.description" type="text" class="form-control"
                        placeholder="請輸入產品描述" >
                      </textarea>
                    </div>
                    <div class="form-group">
                      <label for="content">說明內容</label>
                      <textarea id="description" v-model="tempProduct.content" type="text" class="form-control"
                        placeholder="請輸入說明內容" >
                      </textarea>
                    </div>
                    <div class="form-group">
                      <div class="form-check">
                        <input id="enabled" v-model="tempProduct.enabled" class="form-check-input" type="checkbox">
                        <label class="form-check-label" for="enabled">是否啟用</label>
                      </div>
                  </div>
              </div>
          </div>
      </div>
      <div class="modal-footer">
          <button type="button" class="btn btn-outline-secondary" data-dismiss="modal">取消</button>
          <button type="button" class="btn btn-primary" @click="updateProduct">確認</button>
      </div>
  </div>
</div>
</div>
  </div>
</template>

<script>
import $ from 'jquery'
import Toast from '@/components/Toast'

export default {
  data () {
    return {
      tempProduct: {
        imageUrl: []
      }
    }
  },
  props: {
    isNew: {
      type: Boolean,
      required: true
    }
  },
  methods: {
    getProduct (id) {
      this.isLoading = true

      const url = `${process.env.VUE_APP_APIPATH}api/${process.env.VUE_APP_UUID}/admin/ec/product/${id}`
      this.$http.get(url).then(res => {
        this.tempProduct = res.data.data
        $('#productModal').modal('show')
        this.isLoading = false
      }).catch((err) => {
        this.isLoading = false
        Toast.fire({
          title: `${err}`,
          icon: 'warning'
        })
      })
    },
    // 新增更新產品資訊
    updateProduct () {
      let url = `${process.env.VUE_APP_APIPATH}api/${process.env.VUE_APP_UUID}/admin/ec/product`
      let httpMethod = 'post'
      // 若不是切換商品則切換成編輯商品API
      if (!this.isNew) {
        url = `${process.env.VUE_APP_APIPATH}api/${process.env.VUE_APP_UUID}/admin/ec/product/${this.tempProduct.id}`
        httpMethod = 'patch'
      }

      this.$http[httpMethod](url, this.tempProduct).then(() => {
        this.$emit('update')
        Toast.fire({
          title: '已更新',
          icon: 'success'
        })
        $('#productModal').modal('hide')
      }).catch(err => {
        const errorData = err.response.data.errors
        if (errorData) {
          Toast.fire({
            title: `${errorData}`,
            icon: 'warning'
          })
        }
        $('#productModal').modal('hide')
      })
    },
    uploadFile () {
      const url = `${process.env.VUE_APP_APIPATH}api/${process.env.VUE_APP_UUID}/admin/upload`
      const uploadedFile = this.$refs.files.files[0]
      const formData = new FormData()
      formData.append('file-to-upload', uploadedFile)
      this.status = true
      this.$http
        .post(url, formData, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        })
        .then(res => {
          this.status = false
          if (res.data.success) {
            this.$set(this.tempProduct, 'imageUrl', res.data.imageUrl)
          } else {
            this.$bus.$emit(res.data.message)
          }
        })
    }
  }
}
</script>
