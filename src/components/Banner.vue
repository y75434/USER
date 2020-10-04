<template>
  <div class="div">
    <!--輪播開始-->
    <div id="carouselExampleIndicators" class="carousel slide .d-sm-none" data-interval="3000" data-ride="carousel">
      <ol class="carousel-indicators">
        <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
      </ol>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img class="d-block mh-100 " src="../../public/images/banner_5.jpg" alt="First slide">
        </div>
        <div class="carousel-item">
          <img class="d-block mh-100" src="../../public/images/banner_2.jpg" alt="Second slide">
        </div>
        <div class="carousel-item">
          <img class="d-block mh-100 " src="../../public/images/banner_4.jpg" alt="Third slide">
        </div>
      </div>
      <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>
    </div>
    <!--輪播結束-->
    <!--教材開始-->
    <section class="featured">
      <div class="container">
        <div class="section-title mt-5"><h4>獨創教材</h4></div>
        <div class="row justify-content-center">
          <div class="card-deck col-sm-12">
            <div class="card">
              <router-link to="/product/Qg7crJF5EahzBuSz0AGvvpLedewi5nYUAiMzxEfSAuLwkvc0Roa1ZHMYVOcjc23B">
                <img class="card-img-top" src="images/lesson_4.jpg">
              </router-link>
              <div class="card-body">
                  <h5 class="card-title">主題會話</h5>
                  <div class="rating-icon float-left">
              </div>
              <div class="float-right">
                  <span class="new-price">Topic Conversation</span>
              </div>
              </div>
            </div>
            <div class="card">
              <router-link to="/product/omhiP9y75wc8LXoTBE9TX1kfCVGwEA2g3dhnzdIBZJuQBOWIFZrVJDN68DnxuNts">
                <img class="card-img-top" src="images/lesson_3.jpg">
              </router-link>
              <div class="card-body">
                  <h5 class="card-title">文法</h5>
                  <div class="rating-icon float-left">
              </div>
              <div class="float-right">
                  <span class="new-price">Grammar</span>
              </div>
              </div>
            </div>
            <div class="card">
              <router-link to="/product/OyZ3Yyt4P2J4lzBN2soSmfKztr02fSOxdXYT1hUyEfuwAMSItCf4dHE8o5ucYtrA">
                <img class="card-img-top" src="images/lesson_1.jpg">
              </router-link>
              <div class="card-body">
                  <h5 class="card-title">商務英文</h5>
                  <div class="rating-icon float-left">
              </div>
              <div class="float-right">
                  <span class="new-price">Business English</span>
              </div>
              </div>
            </div>
            <div class="card">
              <router-link to="/product/sY2grGoewXaLd8GWJWnllVmCzskq5wFsjMzDfb3VfGy0VgVqvhXt42hH295q4y91">
                <img class="card-img-top" src="images/lesson_2.jpg">
              </router-link>
              <div class="card-body">
                  <h5 class="card-title">旅遊英文</h5>
                  <div class="rating-icon float-left">
              </div>
              <div class="float-right">
                  <span class="new-price">Travel English</span>
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!--教材結束-->
    <!---swiper-->
    <div class="section-title mt-5"><h4>專業師資</h4></div>
    <Sale/>
    <!---swiper-->
    <!---優惠專區-->
    <div class="container">
      <div class="section-title mt-5"><h4>優惠專區</h4></div>
      <div class=" d-flex justify-content-around mb-5" id="subscribe">
        <img src="images/banner_7.jpg" class="img">
        <div class="subInput d-flex flex-column justify-content-center">
          <label for="subscribe" class="font-weight-bold text-main mb-5">
            填寫Email送您免費體驗課
          </label>
          <input id="subscribe" type="text" placeholder="請輸入電子郵件" class="mb-5"/>
          <button type="button" class="btn btn-danger px-3 py-1">確認</button>
        </div>
      </div>
    </div>
    <!---優惠專區-->
  </div>
</template>

<script>
import Swiper from 'swiper'
import 'swiper/swiper-bundle.css'
import Sale from '@/components/Swiper.vue'

export default {
  data () {
    return {
      bannerSwiper: {}
    }
  },
  components: {
    Sale
  },
  methods: {
    setSwiper () {
      this.bannerSwiper = new Swiper('.homeBanner', {
        slidesPerView: 'auto',
        loop: true,
        speed: 800,
        autoplay: {
          delay: 2500,
          disableOnInteraction: false
        }
      })
    }
  },
  mounted () {
    this.setSwiper()
  }
}
</script>

<style lang="scss">
.img {
  height: 300px;
  }

</style>
