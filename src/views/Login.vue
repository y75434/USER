<template>
  <div class="container">
    <form class="form-signin" @submit.prevent="signin">
      <h1 class="h3 mb-3 font-weight-normal text-muted">請先登入</h1>
      <div class="form-group">
        <label for="inputEmail" class="sr-only">Email address</label>
        <input id="inputEmail" v-model="user.email" type="email" class="form-control" placeholder="Email address" required autofocus>
      </div>
      <div class="form-group">
        <label for="inputPassword" class="sr-only">Password</label>
        <input id="inputPassword" v-model="user.password" type="password" class="form-control" placeholder="Password" required>
      </div>
      <button class="btn btn-lg btn-info btn-block text-white"  @click.prevent="login">登入</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      user: {
        email: '',
        password: ''
      }
    }
  },
  methods: {
    signin () {
      const api = `${process.env.VUE_APP_APIPATH}api/auth/login`
      this.$http.post(api, this.user).then((response) => {
        const { token } = response.data
        const { expired } = response.data
        document.cookie = `hexToken=${token};expires=${new Date(expired * 1000)};`
        // 登入成功或失敗提示
        this.$bus.$emit('message-push', '登入成功', 'success')

        // 轉換頁面
        this.$router.push('/admin/products')
      }).catch((error) => {
        console.log(error)
        this.$bus.$emit('message-push', '登入失敗', 'danger')
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
