<template>
  <div>
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
    <!--說明開始-->
    <section class="">
      <section class="row justify-content-center text-center container-fluid">
        <div class="vertical-line">
            <img src="../../public/images/vertical-line.svg" class="d-md-block d-none" alt="vertical line">
        </div>
        <div class="list">
          <div class="d-flex align-items-center benefit">
            <div class="adv">
              <img src="../../public/images/hand_good.png" class="adv_pic">
            </div>
            <div class="singleItem">
              <h4>優質師資團隊</h4>
              <p class="text-left text-muted">
                我們有來自美國、英國的Native Speaker，以及包括英語運用能力相當傑出優秀的菲律賓、塞爾維亞等世界120多國以上的不同國籍講師。透過活用各自的特色和經驗，為您提供豐富多元的一對一課程。
              </p>
            </div>
          </div>
          <div class="d-flex align-items-center benefit">
            <div class="adv">
              <img src="../../public/images/study_english.png" class="adv_pic">
            </div>
            <div class="singleItem">
              <h4>專業英文教材</h4>
              <p class="text-left text-muted">
                短時間內也能練習口說和聽力，持之以恆就能提高英語能力。不只侷限於課程。而是打造了輕鬆愉快的環境，進行「反覆學習」，為提升英語程度提供了最佳的學習方式。
              </p>
            </div>
          </div>
          <div class="d-flex align-items-center benefit">
            <div class="adv">
              <img src="../../public/images/clock.png" class="adv_pic">
            </div>
            <div class="singleItem">
              <h4>全年無休</h4>
              <p class="text-left text-muted">
                在24小時365天讓您在想到的瞬間，隨時都能上英語會話課程。
              </p>
            </div>
          </div>
        </div>
      </section>
    </section>
    <!-- 介紹 -->
    <section class="mb-5 d-flex flex-md-row flex-column intro">
      <div class="mb-5 d-flex flex-column justify-content-center align-items-center rounded p-4">
        <h3 class="mb-3 font-weight-bold ">隨時隨地英語會話課程</h3>
        <h5 class="mb-4 text-muted w-50">
          在家防疫也能同步學習。 與來至超過100個不同國籍的老師一同學習。迅速提升英語能力。
        </h5>
        <a href="about.html"><button class="learnBtn btn">瞭解更多</button></a>
      </div>
      <img src="../../public/images/womantel.jpg" class="pic d-md-block d-none">
      <img src="../../public/images/left-downward-arrow.svg" class="arrow d-md-block d-none" >
    </section>
    <!-- 介紹 -->
    <!---swiper-->
    <div class="section-title my-5"><h4>獨創教材</h4></div>
    <Sale/>
    <!---swiper-->
    <!---學員心得-->
    <div class="container-fluid my-5">
      <h4 class="section-title pb-5">學員心得</h4>
        <ul class="row mb-5">
          <li class="col-md-4  col-12 mb-5">
            <div class="card rounded-0 text-center text-primary" >
              <div class="cat bg-cover position-relative">
                <img class="card-img-top position-absolute rate_pic" src="images/rate_1.png" >
              </div>
              <div class="card-body">
                <h5 class="card-title mb-2">Evan</h5>
                <p class="card-text mb-2">上課的平台操作簡單方便</p>

              </div>
            </div>
          </li>
          <li class="col-md-4 col-12 mb-5">
            <div class="card rounded-0 text-center text-primary" >
              <div class="cardTop bg-cover position-relative">
                <img class="card-img-top position-absolute rate_pic" src="images/rate_2.png"  >
              </div>
              <div class="card-body">
                <h5 class="card-title mb-2">Linda</h5>
                <p class="card-text mb-2">老師非常親切有耐心</p>
              </div>
            </div>
          </li>
          <li class="col-md-4  col-12 mb-5">
            <div class="card rounded-0 text-center text-primary" >
              <div class="cardTop bg-cover position-relative">
                <img class="card-img-top position-absolute rate_pic" src="images/rate_3.png"  >
              </div>
              <div class="card-body">
                <h5 class="card-title mb-2">Kevin</h5>
                <p class="card-text mb-2">課程安排客製化</p>
              </div>
            </div>
          </li>
        </ul>
    </div>

    <!---優惠專區-->
    <section class="bg-email jumbotron jumbotron-fluid follow d-flex flex-column justify-content-center mb-0">
      <div class="container">
        <h2 class="font-weight-bold text-warning text-right mb-3">填寫Email送您免費體驗課</h2>
        <div class="row justify-content-end">
          <form class="input-group-lg justify-content-center d-flex">
            <input id="Email" placeholder="請輸入電子郵件" type="email" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg">
            <button class="btn btn-primary rounded" type="submit">傳送</button>
          </form>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
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
  }
}
</script>

<style lang="scss">
.img {
  height: 300px;
  }
</style>
