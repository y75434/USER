<template>
  <section class="about">
    <loading :active.sync="isLoading"></loading>
    <!--說明開始-->
    <section class="">
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
