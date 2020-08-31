<template>
  <div>
    <loading :active.sync="isLoading" color="#2D7487" background-color="#000"></loading>
    <header class="banner banner--prods">
      <h2 class="fz-m color-tertiary font-primary">SHOP NOW</h2>
    </header>
    <section class="pt-lg pb-lg">
      <div class="container">
        <div class="row">
          <menu class="col-3">
            <ul class="mt-1 font-primary fz-sm">
              <li class="cate-item mb-1">
                <a href="" class="links is-active" data-cate="new" @click.prevent="cateChoose($event)">New Arrive</a>
              </li>
              <li class="cate-item mb-1">
                <a href="" class="links" data-cate="Swimwear" @click.prevent="cateChoose($event)">Swimwear</a>
              </li>
              <li class="cate-item mb-1">
                <a href="" class="links" data-cate="T-shirt" @click.prevent="cateChoose($event)">T-shirt</a>
              </li>
              <li class="cate-item mb-1">
                <a href="" class="links" data-cate="Shirt" @click.prevent="cateChoose($event)">Shirt</a>
              </li>
              <li class="cate-item mb-1">
                <a href="" class="links" data-cate="Pants" @click.prevent="cateChoose($event)">Pants</a>
              </li>
              <li class="cate-item mb-1">
                <a href="" class="links" data-cate="Socks" @click.prevent="cateChoose($event)" >Socks</a>
              </li>
            </ul>
          </menu>
          <div class="col-9 d-flex flex-wrap-w p-0">
            <div class="col-4 card pointer mb-1" v-for="(item, id) in productsData" :key="id" @click.prevent="getAProducts(item)">
              <div class="card-head prod-pic">
                <img :src="item.imageUrl" />
              </div>
              <div class="card-content">
                <p class="card-tit mb-tiny">{{ item.title }}</p>
                <div class="d-flex">
                  <del class="mr-2 fz-ets color-secondary">{{ item.origin_price | thousands }}</del>
                  <p class="fz-xs">{{ item.price | thousands}}</p>
                  <!-- <span class="material-icons fz-xxs">shopping_cart</span> -->
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>

</template>

<script>

export default {
  name: 'Products',
  data () {
    return {
      products: []
    }
  },
  methods: {
    getProduct (id) {
      this.$router.push(`/product/${id}`)
    }
  },
  created () {
    const url = `${process.env.VUE_APP_APIPATH}api/${process.env.VUE_APP_UUID}/ec/products`
    this.$http.get(url)
      .then((res) => {
        this.products = res.data.data
      })
  }
}

</script>

<style>

</style>
