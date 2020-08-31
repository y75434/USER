<template>
  <div id="nav">
      <router-link to="/">首頁</router-link> |
      <router-link to="/products">課程方案</router-link> |
      <router-link to="/login">會員專區</router-link> |
      <router-link to="/cart">購物車</router-link>
    <div class="header-area">
    <div class="header-top d-none d-sm-block navbar-fixed-top">
        <div class="container">
            <div class="row">
                <div class="col">
                    <div class="header-default">
                        <p>歡迎來到LearnEnglish</p>
                    </div>
                </div>
                <div class="col">
                    <div class="header-user-info">
                        <a href="#">
                        <i class="fa fa-home"></i>
                        首頁</a>
                        <a href="#">
                        <i class="fa fa-heart"></i>
                        課程方案</a>
                        <a href="#">
                        <i class="fa fa-user"></i>
                        會員專區</a>
                        <a href="#">
                        <i class="fas fa-shopping-cart"></i>
                        購物車</a>
                    </div>
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
      carts: []
    }
  },
  methods: {
    getCart () {
      const url = `${process.env.VUE_APP_APIPATH}api/${process.env.VUE_APP_UUID}/ec/shopping`
      this.$http.get(url)
        .then((res) => {
          this.carts = res.data.data
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
</style>
