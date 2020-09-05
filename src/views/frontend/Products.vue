<template>
  <div class="products">
    <div class="position-relative d-flex align-items-center justify-content-center" style="min-height: 400px;">
      <div class="position-absolute" style="top:0; bottom: 0; left: 0; right: 0; background-image: url(https://images.unsplash.com/photo-1480399129128-2066acb5009e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80); background-position: center center; opacity: 0.1;"></div>
      <h2 class="font-weight-bold">這是banner</h2>
    </div>
    <div class="container mt-md-5 mt-3 mb-7 ">
      <div class="row" v-if="products.length>0">
        <div class="col-md-3">
          <div class="accordion border border-bottom border-top-0 border-left-0 border-right-0 mb-3" id="accordionExample">
            <div class="card border-0">
              <div class="card-header px-0 py-4 bg-white border border-bottom-0 border-top border-left-0 border-right-0" id="headingOne" data-toggle="collapse" data-target="#collapseOne">
                <div class="d-flex justify-content-between align-items-center pr-1">
                  <a href="#" @click.prevent="category = ''" :class="{ active: category === '' }">
                    <h4 class="mb-0">
                      全部商品
                    </h4>
                  </a>
                </div>
              </div>
            </div>
            <div class="card border-0">
              <div class="card-header px-0 py-4 bg-white border border-bottom-0 border-top border-left-0 border-right-0" id="headingTwo" data-toggle="collapse" data-target="#collapseTwo">
                <div class="d-flex justify-content-between align-items-center pr-1">
                  <a href="#" @click.prevent="category = '考試'" :class="{ active: category === '考試' }">
                    <h4 class="mb-0">
                      考試
                    </h4>
                  </a>
                </div>
              </div>
            </div>
            <div class="card border-0">
              <div class="card-header px-0 py-4 bg-white border border-bottom-0 border-top border-left-0 border-right-0" id="headingThree" data-toggle="collapse" data-target="#collapseThree">
                <div class="d-flex justify-content-between align-items-center pr-1">
                  <a href="#" @click.prevent="category = '考試'" :class="{ active: category === '考試' }">
                    <h4 class="mb-0">
                      口說
                    </h4>
                  </a>
                </div>
              </div>
            </div>
            <div class="card border-0">
              <div class="card-header px-0 py-4 bg-white border border-bottom-0 border-top border-left-0 border-right-0" id="headingThree" data-toggle="collapse" data-target="#collapseThree">
                <div class="d-flex justify-content-between align-items-center pr-1">
                  <a href="#" @click.prevent=" category = '考試' " :class="{ active: category === '考試' }">
                    <h4 class="mb-0">
                      學習
                    </h4>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-9">
          <div class="row">
            <div class="col-md-4" v-for="item in products" :key="item.id">
              <div class="card border-0 mb-4 position-relative position-relative">
                <router-link :to="`/product/${ item.id }`">
                  <img class="card-img-top rounded-0" style="height: 180px; background-size: cover; background-position: center;" :style="{ backgroundImage: `url(${ item.imageUrl[0] })` }">
                    <i class="far fa-heart position-absolute" style="right: 16px; top: 16px"></i>
                </router-link>
                  <div class="card-body p-0">
                    <h4 class="mb-0 mt-3">{{ item.title }}</h4>
                    <p class="card-text mb-0">{{ item.price }}<span class="text-muted "> <del>{{ item.origin_price }}</del></span></p>
                    <button class="btn btn-lg btn-info btn-block" @click.prevent="addToCart(item)">加入購物車</button>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Products',
  data () {
    return {
      category: '',
      products: []
    }
  },
  created () {
    /* console.log('UUID', process.env.VUE_APP_UUID); */
    this.$http.get(`${process.env.VUE_APP_APIPATH}api/${process.env.VUE_APP_UUID}/ec/products`)
      .then((res) => {
        this.products = res.data.data
      })
  }
}
</script>

<style>
</style>
