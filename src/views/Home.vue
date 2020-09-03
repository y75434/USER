<template>
  <div class="Home">
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
