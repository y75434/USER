<template>
  <div class="Home">
    <loading :active.sync="isLoading"></loading>
    <Banner></Banner>
    <router-view/>
  </div>
</template>

<script>
import Banner from '@/components/Banner.vue'

export default {
  data () {
    return {}
  },
  components: {
    Banner
  }
}
</script>
