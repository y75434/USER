<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">首頁</router-link> |
      <router-link to="/products">課程方案</router-link> |
      <router-link to="/login">會員專區</router-link> |
      <router-link to="/cart">購物車</router-link>
    </div>
    <router-view/>
  </div>
</template>

<script>

</script>


<style lang="scss">
@import './assets/main';

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
