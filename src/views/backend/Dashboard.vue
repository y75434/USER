<template>
  <div class="dashboard">
    <router-view v-if="enter"></router-view>
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
      this.token = document.cookie.replace(/(?:(?:^|.*;\s*)token\s*=\s*([^;]*).*$)|^.*$/, '$1')
      this.$http.defaults.headers.common.Authorization = `Bearer ${this.token}`

      const url = `${process.env.VUE_APP_APIPATH}api/auth/check`
      this.$http.post(url, { api_token: this.token })
        .then(() => {
          this.enter = true
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
