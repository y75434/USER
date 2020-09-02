<template>
  <div class="index">
    <!--<div id="nav">
      <div class="header-area">
        <div class="header-top d-none d-sm-block navbar-fixed-top">
          <div class="container">
            <div class="row">
              <div class="col">
                <div class="header-default">
                  <p>歡迎來到LearnEnglish</p>
                </div>
              </div>
              <div class="col">
                <div class="header-user-info">
                  <router-link to="/">首頁
                  <i class="fa fa-home"></i>
                  </router-link>
                  <router-link to="products">課程方案
                  <i class="fa fa-heart"></i>
                  </router-link>
                  <router-link to="/login">會員專區
                  <i class="fa fa-user"></i>
                  </router-link>
                  <router-link to="cart">購物車
                  <i class="fas fa-shopping-cart"></i>
                  </router-link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>--->
    <!--輪播開始-->
    <div id="carouselExampleIndicators" class="carousel slide" data-interval="3000" data-ride="carousel">
      <ol class="carousel-indicators">
        <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
      </ol>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img class="d-block mh-100 " src="images/banner_5.jpg" alt="First slide">
        </div>
        <div class="carousel-item">
          <img class="d-block mh-100" src="images/banner_2.jpg" alt="Second slide">
        </div>
        <div class="carousel-item">
          <img class="d-block mh-100 " src="images/banner_4.jpeg" alt="Third slide">
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
    <section class="service d-none d-sm-block">
      <div class="container">
        <div class="section-title mt-5"><h4>為什麼選擇我們</h4></div>
        <div class="row text-center">
          <div class="col-4">
            <div class="single-item border border-secondary rounded">
              <i class="fa fa-thumbs-up fa-4"></i>
              <h4>優質師資團隊</h4>
              <p>多達20個國家的專業英文家教</p>
            </div>
          </div>
          <div class="col-4">
            <div class="single-item border border-secondary rounded">
              <i class="fas fa-book fa-4"></i>
              <h4>專業英文教材</h4>
              <p>多種主題</p>
            </div>
          </div>
          <div class="col-4">
            <div class="single-item border border-secondary rounded">
              <i class="fas fa-clock fa-4"></i>
              <h4>全年無休</h4>
              <p>24小時線上營運</p>
            </div>
          </div>
        </div>
      </div>
    </section>

  </div>
</template>

<script>

</script>

<style>
@import  'http://fonts.googleapis.com/earlyaccess/notosanstc.css';

body{
  font-family: 'Noto Sans TC', sans-serif;
}

a{
    transition: all 0.3s ease 0s;
    text-decoration: none;
}

ul {
    list-style: outside none none;
    margin: 0;
    padding: 0;
}

/*導覽列會員功能 */
.header-area .header-top {
    border-bottom: 1px solid #d3d3d3;
    position: fixed top;
    top: 0;
    width: 100%;
}

.header-default {
    color: #6e6e6e;
    font-size: 20px;
    line-height: 70px;
}

.header-default p {
    margin: 0;
}

.header-user-info {
    padding: 20px;
    text-align: right;
}

.header-user-info a {
    border-left: 1px solid #f1f2f2;
    color: #252525;
    font-size: 15px;
    line-height: 0px;
    padding-left: 14px;
    margin-right: 10px;
}
.header-user-info a:hover {
    color: #96827B;
    text-decoration: none;
}

/*輪播*/
.carousel .carousel-item {
    height: 400px;
  }

.carousel .carousel-item img {
    min-height: 400px;
    max-height: 500px;
    object-fit: cover;
    display: block;
    width: 100%;
    height: 500px;
  }

/*說明*/
.service{
    padding: 60px 0;
    margin-top: 0px;
    margin-bottom: 40px;
    display: flex;
}

.single-item{
  display: float;
  position: relative;
  padding: 60px;
  justify-content: space-between;
}

.service .single-item .fa-4{
    font-size: 50px;
    color: #96827B;
    left: 15px;
    position: absolute;
    top: 15px;
}

/*教材*/
.section-title {
    margin-bottom: 40px;
    position: relative;
    text-align: center;

}

.section-title h4 {
    display: inline-block;
    padding: 0 20px;
    position: relative;
    color: #262b32;
    font-size: 24px;
}

.section-title h4::after {
    bottom: -27px;
    content: "";
    height: 23px;
    left: -75px;
    padding: 0 10px;
    position: absolute;
    right: 0;
    width: 283px;
}

.featured {
    margin-bottom: 70px;
}

/*footer*/

.footer-area {
    background: #E6DDCE;
}

.section-padding2 {
    padding: 15px ;
}

h3.footer-widget-title {
    color: #c38749;
    display: inline-block;
    font-size: 16px;
    font-weight: bold;
    margin: 0 0 20px;
    text-transform: uppercase;
}
.toggle-footer li {
    color:#96827B;
    font-size: 12px;
    font-weight: 300;
    line-height: 35px;
}

.toggle-footer li a {
    color: #96827B;
    font-size: 13px;
    transition: all 0.3s ease 0s;
}
.toggle-footer li a:hover {
    color:#ACABA7;
    text-decoration: none;
}

.social-icon ul {
    margin: 0;
    overflow: hidden;
}

.social-icon ul li {
    color: #ddd;
    display: inline-block;
    padding: 11px 0;
}
</style>
