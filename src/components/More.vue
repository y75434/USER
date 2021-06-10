<template>
  <div>
    <section class="row mb-5">
      <div class="card p-0 mx-2 col-md-3" :key="item.id" v-for="item in relatedFilter.slice(0, 3)">
        <a @click.prevent="goProduct(item.id)">
          <img class="card-img-top product-img" :src="item.imageUrl[0]" alt="img">
        </a>
        <div class="card-body">
          <h5 class="card-title text-center">{{ item.title }}</h5>
        </div>
      </div>
    </section>
  </div>
</template>

<script>

export default {
  data () {
    return {
      products: []
    }
  },
  props: {
    product: {
      type: Object
    }
  },
  created () {
    this.getProduct()
  },
  methods: {
    getProduct () {
      this.$http.get(`${process.env.VUE_APP_APIPATH}api/${process.env.VUE_APP_UUID}/ec/products`)
        .then((res) => {
          this.products = res.data.data
        }).catch(err => {
          console.log(err)
        })
    },
    goProduct (id) {
      this.$router.push(`/product/${id}`)
      this.$emit('update')
    }
  },
  computed: {
    relatedFilter () {
      return this.products.filter((item) =>
        item.id !== this.product.id && item.category === this.product.category)
    }
  }
}
</script>
