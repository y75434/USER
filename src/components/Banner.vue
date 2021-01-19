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
    <!-- 介紹 -->
    <section class="container">
      <div class="row">
        <div class="col-md-7 pr-0">
          <img src="images/banner_6.jpg" class="rounded h-50">
        </div>
        <div class="col-md-5 bg-light p-5 ml-0 h-50">
          <h3>關於我們</h3>
          <p>我們於2018年成立，致力提供多元化教材及服務，因應不同背景學生的需求，協助他們提升英文能力，並鼓勵終身學習。 我們的老師擁有豐富教學經驗，對教學充滿熱誠，透過線上即時互動的方式，讓學生快速吸收教學內容，促進學生學習英文的樂趣。</p>
        </div>
      </div>
    </section>
    <!-- 介紹 -->
    <!---swiper-->
    <div class="section-title mt-5"><h4>獨創教材</h4></div>
    <Sale/>
    <!---swiper-->
    <!---學員心得-->
    <section class="container">
      <div class="row">
        <div class="col-4">
          <img src="">
          <p>Linda</p>
          <span></span>
          <p>上課的平台在使用操作上簡單方便</p>
        </div>
        <div class="col-4"></div>
        <div class="col-4"></div>
      </div>
    </section>
    <!---優惠專區-->
    <section class="jumbotron jumbotron-fluid follow d-flex flex-column justify-content-center mb-0">
      <div class="container">
        <div class="row justify-content-center">
          <h2 class="font-weight-bold text-secondary ">填寫Email送您免費體驗課</h2>
          <div class="input-group input-group-lg justify-content-center d-flex">
            <validation-observer v-slot="{ invalid }">
              <validation-provider v-slot="{ errors,classes}" rules="required|email">
                <input id="Email" v-model="email" placeholder="請輸入電子郵件" type="email" class="form-control mb-2" :class="classes" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg">
                <button class="btn btn-primary rounded" id="inputGroup-sizing-sm" @click.prevent="send()" :disabled="invalid">傳送</button>
                <div class="input-group-append">
                <span class="text-danger">{{ errors[0] }}</span>
                </div>
              </validation-provider>
            </validation-observer>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Swiper from 'swiper'
import 'swiper/swiper-bundle.css'
import Sale from '@/components/Swiper.vue'
import Toast from '@/components/Toast'

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
    },
    send () {
      Toast.fire({
        title: '填寫完成，請至信箱查看信件',
        icon: 'success'
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
