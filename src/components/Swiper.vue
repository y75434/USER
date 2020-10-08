<template>
  <div>
    <div class="swiper-container sale mb-6">
      <div class="swiper-wrapper">
        <div class="swiper-slide ">
          <img src="https://images.unsplash.com/photo-1573496799652-408c2ac9fe98?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"  />
        </div>
        <div class="swiper-slide">
          <img src="https://images.unsplash.com/photo-1573496528816-a104a722b3db?ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"  />
        </div>
        <div class="swiper-slide">
          <img src="https://images.unsplash.com/photo-1561677843-39dee7a319ca?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"  />
        </div>
        <div class="swiper-slide">
          <img src="https://images.pexels.com/photos/4173115/pexels-photo-4173115.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
        </div>
        <div class="swiper-slide">
          <img src="https://images.unsplash.com/photo-1589386417686-0d34b5903d23?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80" />
        </div>
        <div class="swiper-slide">
          <img src="https://images.unsplash.com/photo-1590650213165-c1fef80648c4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80" />
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
.sale img{
  width: 300px;
  border-radius: 5%;
}
</style>
