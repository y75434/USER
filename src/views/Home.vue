<template>
<!--導覽列-->
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
                        <a href="#">
                        <i class="fa fa-home"></i>
                        首頁</a>
                        <a href="#">
                        <i class="fa fa-heart"></i>
                        課程方案</a>
                        <a href="#">
                        <i class="fa fa-user"></i>
                        會員專區</a>
                        <a href="#">
                        <i class="fas fa-shopping-cart"></i>
                        購物車</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<!--導覽列結束-->

<!--輪播開始-->
<div id="carouselExampleIndicators" class="carousel slide" data-interval="3000" data-ride="carousel">
    <ol class="carousel-indicators">
      <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
      <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
      <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
    </ol>
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img class="d-block mh-100 " src="images/banner_1.jpg" alt="First slide">
      </div>
      <div class="carousel-item">
        <img class="d-block mh-100" src="images/banner_2.jpg" alt="Second slide">
      </div>
      <div class="carousel-item">
        <img class="d-block mh-100 " style="margin: left; top: 20%;" src="images/banner_3.jpeg" alt="Third slide">
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

<!--教材開始-->
<section class="featured">
    <div class="container">
        <div class="section-title mt-5"><h4>獨創教材</h4></div>
        <div class="row justify-content-center">
            <div class="card-deck">
              <div class="card">                  
                <img class="card-img-top" src="images/lesson_4.jpg">                 
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
                <img class="card-img-top" src="images/lesson_3.jpg">
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
                <img class="card-img-top" src="images/lesson_1.jpg" alt="Card image cap">
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
                <img class="card-img-top" src="images/lesson_2.jpg" alt="Card image cap">
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
        
    </div>
</section>
<!--教材結束-->


<!--footer-->
<footer class="footer-area">
  <div class="footer-top section-padding2">
      <div class="container">
          <div class="row">
              <div class="col-xs-12 col-sm-4 col-md-3">
                  <div class="footer-top-menu">
                      <h3 class="footer-widget-title">關於我們</h3>
                      <ul class="toggle-footer">
                          <li><a href="#" @click.prevent="">關於LearnFun團隊</a></li>
                          <li><a href="#" @click.prevent="">方案介紹</a></li>
                          <li><a href="#" @click.prevent="">師資介紹</a></li>
                          <li><a href="#" @click.prevent="">常見問題FAQ</a></li>
                      </ul>
                  </div>
              </div>
              <div class="col-xs-12 col-sm-4 col-md-3">
                  <div class="footer-top-menu">
                      <h3 class="footer-widget-title">須知守則</h3>
                      <ul class="toggle-footer">
                          <li><a href="#" @click.prevent="">課程使用條款</a></li>
                          <li><a href="#" @click.prevent="">隱私保護政策</a></li>
                          <li><a href="#" @click.prevent="">權益提醒</a></li>
                          <li><a href="#" @click.prevent="">注意事項</a></li>
                      </ul>
                  </div>
              </div>
              <div class="col-xs-12 col-sm-4 col-md-3">
                  <div class="footer-top-menu">
                      <h3 class="footer-widget-title">我的課程</h3>
                      <ul class="toggle-footer">
                          <li><a href="#" @click.prevent="">我的訂單</a></li>
                          <li><a href="#" @click.prevent="">我的教材</a></li>
                          <li><a href="#" @click.prevent="">課程紀錄</a></li>
                          <li><a href="#" @click.prevent="">我的訊息</a></li>
                      </ul>
                  </div>
              </div>
              <div class="col-xs-12 col-sm-3 col-md-3 hidden-sm">
                  <div class="footer-top-menu">
                      <h3 class="footer-widget-title">聯繫我們</h3>
                      <ul class="toggle-footer">
                          <li><p>高雄市苓雅區</p></li>
                          <li><p>電話：(07)540-3229</p></li>
                          <li><p>電子郵件：admin@.com.tw</p></li>
                          <li><a target="_blank" title="Facebook" href="#" @click.prevent="" class="social-icon"><i class="fab fa-facebook-square"></i></a></li>
                          <li><a target="_blank" title="Twitter" href="#"  @click.prevent="" class="social-icon"><i class="fab fa-twitter"></i></a></li>
                          <li><a target="_blank" title="Line" href="#"  @click.prevent="" class="social-icon"><i class="fab fa-line"></i></a></li>
                      </ul>
                  </div>
              </div>
          </div>
      </div>
  </div>                
</footer>


</template>

<script>



</script>
