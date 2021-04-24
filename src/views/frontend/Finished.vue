<template>
  <div class="container">
    <ul class="my-5 process d-flex justify-content-around">
    <li class="text-center">
      <span class="num processNum">1</span>
      <p>購物車內容</p>
    </li>
    <li class="text-center">
      <span class="num processNum">2</span>
      <p>訂單填寫</p>
    </li>
    <li class="text-center">
      <span class="num">3</span>
      <p>結帳</p>
    </li>
  </ul>
  <div class="my-5 row justify-content-center">
    <loading :active.sync="isLoading"></loading>
    <div class="position-relative d-flex flex-column align-items-center justify-content-center" style="min-height: 400px;">
      <h1 class="mb-3">付款成功，我們將盡快聯絡您</h1>
      <img src="images/finished.png" class="mb-3">
      <div class="justify-content-center">
        <router-link to="/" class=" btn btn-info h3 text-white mt-5 mt-3">
          <i class=" fas fa-chevron-left"></i> 回首頁
        </router-link>
      </div>
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
