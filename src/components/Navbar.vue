<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light p-3">
      <router-link class="navbar-brand"  to="/">歡迎來到LearnEnglish</router-link>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
        <div class="navbar-nav">
          <router-link class="nav-link" to="/">首頁
            <i class="fa fa-home"></i>
          </router-link>
          <router-link class="nav-link" to="/about">關於我們
            <i class="fa fa-user"></i>
          </router-link>
          <router-link class="nav-link" to="/products">課程方案
            <i class="fa fa-heart"></i>
          </router-link>
          <router-link class="nav-link" to="/cart">購物車
            <i class="fas fa-shopping-cart"></i>
            <span class="badge badge-pill badge-danger"
              style="transform: translateX(-4px) translateY(6px);" v-if="cartTotal > 0">{{ cartTotal }}
            </span>
          </router-link>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  data () {
    return {
      cartTotal: 0
    }
  },
  methods: {
    // 取得購物車資訊
    getCart () {
      this.isLoading = true
      const url = `${process.env.VUE_APP_APIPATH}api/${process.env.VUE_APP_UUID}/ec/shopping`
      this.$http.get(url).then((response) => {
        this.cartTotal = response.data.data.length
      })
    }
  },
  created () {
    this.getCart()
    this.$bus.$on('get-cart', () => {
      this.getCart()
    })
  }
}
</script>

<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

@media (max-width: 768px) {
    .nav-link.active {
      background-color: rgb(189, 156, 114);
    }
  }
</style>
