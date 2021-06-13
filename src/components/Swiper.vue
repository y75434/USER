<template>
  <div>
    <!--教材開始-->
    <section class="swiper-container sale mb-5">
      <div class=" swiper-wrapper">
        <div class="card swiper-slide">
          <router-link to="/product/Qg7crJF5EahzBuSz0AGvvpLedewi5nYUAiMzxEfSAuLwkvc0Roa1ZHMYVOcjc23B">
            <img class="card-img-top swiperPic" src="images/lesson_4.jpg">
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
        <div class="card swiper-slide">
          <router-link to="/product/omhiP9y75wc8LXoTBE9TX1kfCVGwEA2g3dhnzdIBZJuQBOWIFZrVJDN68DnxuNts">
            <img class="card-img-top swiperPic" src="images/lesson_3.jpg">
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
        <div class="card swiper-slide">
          <router-link to="/product/OyZ3Yyt4P2J4lzBN2soSmfKztr02fSOxdXYT1hUyEfuwAMSItCf4dHE8o5ucYtrA">
            <img class="card-img-top swiperPic" src="images/lesson_1.jpg">
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
        <div class="card swiper-slide">
          <router-link to="/product/sY2grGoewXaLd8GWJWnllVmCzskq5wFsjMzDfb3VfGy0VgVqvhXt42hH295q4y91">
            <img class="card-img-top swiperPic" src="images/lesson_2.jpg">
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
    </section>
    <!--教材結束-->
  </div>
</template>

<script>
import Swiper from 'swiper'
import 'swiper/swiper-bundle.css'

export default {
  data () {
    return {
      sale: {}
    }
  },
  methods: {
    set () {
      this.sale = new Swiper('.sale', {
        loop: true,
        speed: 800,
        slidesPerView: 2,
        spaceBetween: 20,
        freeMode: true,
        autoplay: {
          delay: 2000,
          disableOnInteraction: true
        },
        breakpoints: {
          768: {
            slidesPerView: 4
          },
          425: {
            slidesPerView: 3
          }
        }
      })
    }
  },
  mounted () {
    this.set()
  }
}
</script>
