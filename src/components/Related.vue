<template>
  <div>
    <swiper :options="swiperOption">
      <swiper-slide class="item mb-5" v-for="item in related" :key="item.id">
        <div class="card" style="width: 18rem;">
          <router-link :to="`/product/${ item.id }`">
            <img class="card-img-top rounded" style="height: 180px; background-size: cover; background-position: center;" :style="{ backgroundImage: `url(${ item.imageUrl[0] })` }">
          </router-link>
          <div class="card-body">
            <h5 class="card-title text-main font-weight-bold">{{ item.title }}</h5>
            <p class="card-text">{{ item.price | money }} 元</p>
          </div>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
import Swiper from 'swiper'
import 'swiper/swiper-bundle.css'
import Toast from '@/components/Toast'

export default {
  data () {
    return {
      products: [],
      swiperOption: {
        speed: 900,
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
      }
    }
  },
  components: {
    Swiper
  },
  created () {
    this.$http.get(`${process.env.VUE_APP_APIPATH}${process.env.VUE_APP_UUID}/ec/products`)
      .then((res) => {
        this.products = res.data.data
      }).catch((err) => {
        const errorData = err.response.data.errors
        if (errorData) {
          Toast.fire({
            title: `${errorData}`,
            icon: 'warning'
          })
        }
      })
  },
  computed: {
    related () {
      return this.products.filter(
        (item) => item.id !== this.product.id && item.category === this.item.category
      )
    }
  }
}
</script>
