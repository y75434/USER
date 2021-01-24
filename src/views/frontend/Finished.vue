<template>
  <div class="my-5 row justify-content-center">
    <loading :active.sync="isLoading"></loading>
    <div class="position-relative d-flex flex-column align-items-center justify-content-center" style="min-height: 400px;">
      <h1 class="mb-3">付款成功，我們將盡快聯絡您</h1>
      <img src="images/finished.png" class="mb-3">
      <div class="">
        <router-link to="/" class="h3 text-dark mt-5 mt-3">
          <i class="fas fa-chevron-left"></i> 回首頁
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import Toast from '@/components/Toast'

export default {
  data () {
    return {

    }
  },
  created () {
    Toast.fire({
      title: '訂單完成',
      icon: 'success'
    })
  }
}
</script>
