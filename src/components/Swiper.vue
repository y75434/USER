<template>
  <div>
    <div class="swiper-container sale mb-6">
      <div class="swiper-wrapper">
        <!-- 1 -->
        <div class="swiper-slide">
          <router-link to="product/sY2grGoewXaLd8GWJWnllVmCzskq5wFsjMzDfb3VfGy0VgVqvhXt42hH295q4y91">
            <img src="https://images.unsplash.com/photo-1504542982118-59308b40fe0c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"  />
          </router-link>
          <p class="text-main text-decoration-none mt-3">旅遊英文</p>
        </div>
        <!-- 2 -->
        <div class="swiper-slide">
          <router-link to="product/VQq5Q3PFNDHT5i7I492Sy5exYVTB3lmrzSWrB52STVyHY6abGI1WDmt8zirhF1Qw">
            <img src="https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=967&q=80"  />
          </router-link>
          <p class="text-main text-decoration-none mt-3">單字片語</p>
        </div>
        <!-- 3 -->
        <div class="swiper-slide">
          <router-link to="product/omhiP9y75wc8LXoTBE9TX1kfCVGwEA2g3dhnzdIBZJuQBOWIFZrVJDN68DnxuNts">
            <img src="https://images.unsplash.com/photo-1512820790803-83ca734da794?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1974&q=80"   />
          </router-link>
          <p class="text-main text-decoration-none mt-3">文法</p>
        </div>
        <!-- 4 -->
        <div class="swiper-slide">
          <router-link to="/product/OyZ3Yyt4P2J4lzBN2soSmfKztr02fSOxdXYT1hUyEfuwAMSItCf4dHE8o5ucYtrA">
            <img src="https://images.unsplash.com/photo-1444653614773-995cb1ef9efa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=755&q=80" />
          </router-link>
          <p class="text-main text-decoration-none mt-3">商務英文</p>
        </div>
      </div>
    </div>
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
        slidesPerView: 3,
        spaceBetween: 100,
        freeMode: true,
        autoplay: {
          delay: 2500,
          disableOnInteraction: false
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        },
        breakpoints: {
          960: {
            slidesPerView: 4,
            spaceBetween: 60
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

<style lang="scss">
.sale {
  img {
    width: 300px;
  }
}
.hotSlide:hover {
  opacity: 0.3;
}
</style>
