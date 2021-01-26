<template>
  <div class="container">
    <router-view ></router-view>
  </div>
</template>

<script>
import Toast from '@/components/Toast'

export default {
  data () {
    return {
      token: '',
      enter: false
    }
  },
  created () {
    this.checked()
  },
  methods: {
    checked () {
      this.token = document.cookie.replace(/(?:(?:^|.*;\s*)hexToken\s*=\s*([^;]*).*$)|^.*$/, '$1')
      const url = `${process.env.VUE_APP_APIPATH}auth/check`
      this.$http.post(url, { api_token: this.token })
        .then((res) => {
          if (this.data.success) {
            this.enter = true
          }
          this.$http.defaults.headers.Authorization = `Bearer ${this.token}`
        }).catch((err) => {
          // const errorData = err.response.data.errors
          if (err) {
            Toast.fire({
              title: `${err}`,
              icon: 'warning'
            })
            this.$router.push('login')
          }
        }
        )
    }
  }
}
</script>
