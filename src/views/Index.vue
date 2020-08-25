<template>
  <div id="app">
    <Loading :active.sync="$store.state.Loading.loading" />
    <Navbar></Navbar>
    <router-view/>
  </div>
</template>

<script>
import Navbar from '../components/Navbar.vue'

export default {
  components: {
    Navbar
  }
}
</script>

<style lang="scss">
@import 'bootstrap';
</style>
