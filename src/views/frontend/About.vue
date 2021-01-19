<template>
  <section class="about">
    <loading :active.sync="isLoading"></loading>
    <!--說明開始-->
    <section class="">
      <div class="container-fluid bg-light p-5">
        <div class="col-md-8 d-none d-sm-block">
          <h3>關於我們</h3>
          <p class="text-muted">我們於2018年成立，致力提供多元化教材及服務，因應不同背景學生的需求，協助他們提升英文能力，並鼓勵終身學習。
我們的老師擁有豐富教學經驗，對教學充滿熱誠，透過線上即時互動的方式，讓學生快速吸收教學內容，促進學生學習英文的樂趣。</p>
        </div>
      </div>
      <section class="row text-center container-fluid bg-light">
        <div class="col-12 col-md-4">
          <div class="single-item">
            <i class="fa fa-thumbs-up fa-4"></i>
            <h4>優質師資團隊</h4>
            <p>多達20個國家的專業英文家教</p>
          </div>
        </div>
        <div class="col-12 col-md-4">
          <div class="single-item">
            <i class="fas fa-book fa-4"></i>
            <h4>專業英文教材</h4>
            <p>多種主題</p>
          </div>
        </div>
        <div class="col-12 col-md-4">
          <div class="single-item">
            <i class="fas fa-clock fa-4"></i>
            <h4>全年無休</h4>
            <p>24小時線上營運</p>
          </div>
        </div>
      </section>
    </section>
  </section>
</template>
