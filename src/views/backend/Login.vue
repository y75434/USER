<template>
  <div class="container-fluid">
    <loading :active.sync="isLoading"></loading>
    <section class="row">
      <section class="col-md-5 vh-100 d-md-block d-none">
        <img src="images/banner_3.jpeg" class="h-100 bg-cover">
      </section>
      <section class="col-md-7 col-12 d-flex align-items-center vh-100">
        <form class="form-signin flex-column" @submit.prevent="signin">
          <h1 class="h3 mb-3 font-weight-normal text-muted">請先登入</h1>
          <div class="form-group">
            <label for="inputEmail" class="sr-only">Email address</label>
            <input id="inputEmail" v-model="user.email" type="email" class="form-control" placeholder="Email address" required autofocus>
          </div>
          <div class="form-group">
            <label for="inputPassword" class="sr-only">Password</label>
            <input id="inputPassword" v-model="user.password" type="password" class="form-control" placeholder="Password" required>
          </div>
          <div class="d-flex justify-content-center">
            <button class="btn btn-lg btn-info btn-block text-white mr-2 mb-2" type="submit">登入</button>
            <router-link to="/">
            <button class="btn btn-lg btn-primary btn-block text-white">回首頁</button>
            </router-link>
          </div>
        </form>
      </section>
    </section>
  </div>
</template>

<script>
import swal from 'sweetalert'

export default {
  name: 'Login',
  data () {
    return {
      user: {
        email: '',
        password: ''
      },
      isLoading: false,
      token: ''
    }
  },
  methods: {
    signin () {
      const url = `${process.env.VUE_APP_APIPATH}api/auth/login`
      this.$http.post(url, this.user).then((res) => {
        const token = res.data.token
        const expired = res.data.expired
        document.cookie = `token=${token};expires=${new Date(expired * 1000)}; path=/`
        // this.isLoading = false
        // 轉換頁面
        this.$router.push('/admin/products')
      }).catch(() => {
        this.isLoading = false
        swal({
          title: '登入失敗',
          text: '登入失敗，請重新嘗試',
          icon: 'error',
          buttons: false,
          timer: 1000
        })
      })
    }
  }
}
</script>

<style scoped lang="scss">

html,
body {
  height: 100%;

}
body {
  display: -ms-flexbox;
  display: flex;
  -ms-flex-align: center;
  align-items: center;
  padding-top: 40px;
  padding-bottom: 40px;
  background-color: #f5f5f5;
  margin: auto;
}
.form-signin {
  width: 100%;
  max-width: 330px;
  padding: 15px;
  margin: auto;
  justify-content: center;
  align-items: center;
}
.form-signin .checkbox {
  font-weight: 400;
}
.form-signin .form-control {
  position: relative;
  box-sizing: border-box;
  height: auto;
  padding: 10px;
  font-size: 16px;
}
.form-signin .form-control:focus {
  z-index: 2;
}
.form-signin input[type="email"] {
  margin-bottom: -1px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}
.form-signin input[type="password"] {
  margin-bottom: 10px;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}
</style>
