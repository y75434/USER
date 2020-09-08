<template>
  <div class="my-5 row justify-content-center">
    <div class="position-relative d-flex align-items-center justify-content-center" style="min-height: 400px;">
      <div class="position-absolute" style="top:0; bottom: 0; left: 0; right: 0; background-image: '../../public/images/banner_4.jpg'; background-position: center center; opacity: 0.1;"></div>
      <h2 class="font-weight-bold">這是banner</h2>
    </div>
    <div><h3 class="mx-5">付款成功，我們將盡快聯絡您</h3>
      <div class="my-5 row justify-content-center">
        <router-link to="/" class="text-dark mt-5 mt-3">
          <i class="fas fa-chevron-left"></i>回首頁
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  data () {
    return {

    }
  }
}
</script>
