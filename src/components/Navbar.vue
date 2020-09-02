<template>
  <div id="nav">
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
                <router-link class="navbar-brand" to="/">首頁
                <i class="fa fa-home"></i>
                </router-link>
                <router-link class="navbar-brand" to="/products">課程方案
                <i class="fa fa-heart"></i>
                </router-link>
                <router-link class="navbar-brand" to="/login">會員專區
                <i class="fa fa-user"></i>
                </router-link>
                <router-link class="navbar-brand" to="/cart">購物車
                <i class="fas fa-shopping-cart"></i>
                </router-link>
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
    return {}
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
