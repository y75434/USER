<template>
  <div>
    <Loading :active.sync="isLoading"></Loading>
      <div id="nav">
        <router-link to="/">首頁</router-link> |
        <router-link to="/products">產品列表</router-link> |
        <router-link to="/cart">購物車</router-link> |
        <router-link to="/login">登入頁面</router-link>
      </div>
    <HelloWorld msg=""/>
    <router-view/>
  </div>
</template>

<script>

</script>
