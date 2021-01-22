<template>
  <div class="div">
    <!--輪播開始-->
    <div id="carouselExampleIndicators" class="carousel slide d-none d-md-block" data-interval="3000" data-ride="carousel">
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
    <!---swiper-->
    <div class="section-title my-5"><h4>獨創教材</h4></div>
    <Sale/>
    <!---swiper-->
     <!-- 介紹 -->
    <section class="mb-3 d-flex flex-md-row flex-column h-100">
      <img src="images/banner_6.jpg" class="w-50 rounded d-none d-md-block">
      <div class=" d-flex flex-column justify-content-center bg-light rounded w-50 p-4">
        <h3 class="font-weight-bold">關於我們</h3>
        <p>我們於2018年成立，致力提供多元化教材及服務，因應不同背景學生的需求，協助他們提升英文能力，並鼓勵終身學習。 我們的老師擁有豐富教學經驗，對教學充滿熱誠，透過線上即時互動的方式，讓學生快速吸收教學內容，促進學生學習英文的樂趣。</p>
      </div>
    </section>
    <!-- 介紹 -->
    <!--說明開始-->
    <section class="">
      <section class="row text-center container-fluid bg-light">
        <div class="col-12 col-md-4">
          <div class="single-item">
            <img src="images/hand_good.png" class="adv_pic">
            <h4>優質師資團隊</h4>
            <p>多達20個國家的專業英文家教</p>
          </div>
        </div>
        <div class="col-12 col-md-4">
          <div class="single-item">
            <img src="images/study_english.png" class="adv_pic">
            <h4>專業英文教材</h4>
            <p>多種主題</p>
          </div>
        </div>
        <div class="col-12 col-md-4">
          <div class="single-item">
            <img src="images/clock.png" class="adv_pic">
            <h4>全年無休</h4>
            <p>24小時線上營運</p>
          </div>
        </div>
      </section>
    </section>
    <!--說明開始-->
    <!---學員心得-->
    <section class="container mb-5">
      <h4 class="section-title mt-5">學員心得</h4>
      <div class="row justify-content-center">
        <div class="col-4 text-center">
          <img src="images/rate_1.png" class="rate_pic">
          <p>Evan</p>
          <span></span>
          <p>上課的平台在使用操作上簡單方便</p>
        </div>
        <div class="col-4 text-center">
          <img src="images/rate_2.png" class="rate_pic">
          <p>Linda</p>
          <span></span>
          <p>上課的平台在使用操作上簡單方便</p>
        </div>
        <div class="col-4 text-center">
          <img src="images/rate_3.png" class="rate_pic">
          <p>Kevin</p>
          <span></span>
          <p>上課的平台在使用操作上簡單方便</p>
        </div>
      </div>
    </section>
    <!---優惠專區-->
    <section class="jumbotron jumbotron-fluid follow d-flex flex-column justify-content-center mb-0">
      <div class="container">
        <div class="row justify-content-center">
          <h2 class="font-weight-bold text-secondary ">填寫Email送您免費體驗課</h2>
            <validation-observer v-slot="{ invalid }">
              <validation-provider v-slot="{ errors,classes}" rules="required|email">
                <div class=" input-group justify-content-center d-flex">
                  <input id="Email" v-model="email" placeholder="請輸入電子郵件" type="email" class="form-control mb-2" :class="classes" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg">
                  <button class="btn btn-primary rounded" @click.prevent="send()" :disabled="invalid">傳送</button>
                </div>
                <div class="input-group-append">
                  <span class="text-danger">{{ errors[0] }}</span>
                </div>
              </validation-provider>
            </validation-observer>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
// import Swiper from 'swiper'
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
    // setSwiper () {
    //   this.bannerSwiper = new Swiper('.homeBanner', {
    //     slidesPerView: 'auto',
    //     loop: true,
    //     speed: 800,
    //     autoplay: {
    //       delay: 2500,
    //       disableOnInteraction: false
    //     }
    //   })
    // },
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
