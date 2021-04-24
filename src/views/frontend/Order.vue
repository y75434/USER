<template>
  <div class="container">
    <ul class="my-5 process d-flex justify-content-around">
      <li class="text-center">
        <span class="num processNum">1</span>
        <p>購物車內容</p>
      </li>
      <li class="text-center">
        <span class="num ">2</span>
        <p>訂單填寫</p>
      </li>
      <li class="text-center">
        <span class="num processNum">3</span>
        <p>結帳</p>
      </li>
    </ul>
    <div class="row justify-content-center">
      <loading :active.sync="isLoading"></loading>
      <div class="col-6 mb-5 orderForm">
        <h3 class="text-center text-secondary">請填寫聯絡資料</h3>
        <validation-observer v-slot="{ invalid }" class="col-md-8">
          <form @submit.prevent="createOrder">
            <div class="form-group">
              <validation-provider v-slot="{ errors, classes }" rules="required"><!--v-slot不加{ errors }會出錯-->
                <label for="name">姓名</label>
                <input id="name" v-model="form.name" type="text" class="form-control" :class="classes">
                <span class="invalid-feedback">{{ errors[0] }}</span><!--error[0]顯示錯誤題示字-->
              </validation-provider>
            </div>
            <div class="form-group">
              <validation-provider v-slot="{ errors,classes}" rules="required|email"><!--v-slot不加{ errors }會出錯-->
                <label for="email">Email</label>
                <input id="Email" v-model="form.email" type="email" class="form-control" :class="classes">
                <span class="text-danger">{{ errors[0] }}</span><!--error[0]顯示錯誤題示字-->
              </validation-provider>
            </div>
            <div class="form-group">
              <validation-provider v-slot="{ errors,classes}" rules="required|min:8|numeric"><!--至少要8碼，要輸入數字-->
                <label for="tel">聯絡電話</label>
                <input id="聯絡電話" v-model="form.tel" type="tel" class="form-control" :class="classes">
                <span v-if="errors[0]" class="text-danger">{{ errors[0] }}</span><!--error[0]顯示錯誤題示字-->
              </validation-provider>
            </div>
            <div class="form-group">
              <validation-provider v-slot="{ errors, classes }" rules="required|alpha_dash">
                <label for="skype">Skype 帳號</label>
                <input id="Skype 帳號" type="test" class="form-control" :class="classes" v-model="form.value">
                <span v-if="errors[0]" class="text-danger"> {{ errors[0] }} </span>
              </validation-provider>
            </div>
            <div class="form-group">
              <label for="payment">購買方式</label>
              <!-- 因為一定會選一個選項，所以不需要驗證 -->
              <select name="請輸入" v-model="form.payment" class="form-control required">
                <option value="" disabled>請選擇付款方式</option>
                <option value="ATM">ATM</option>
                <option value="CVS">CVS</option>
                <option value="Credit">Credit Card</option>
              </select>
            </div>
            <div class="form-group">
              <!-- 非必填，所以不需要驗證 -->
              <label for="message">留言</label>
              <!--rows為行數-->
              <textarea name="請輸入" id="message" v-model="form.message" class="form-control" cols="30" rows="3"></textarea>
            </div>
            <div class="text-center">
              <router-link to="/finished">
              <button type="submit" class="btn btn-secondary col-12 " :disabled="invalid">送出</button>
              </router-link>
            </div>
          </form>
        </validation-observer>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  data () {
    return {
      form: {
        email: '',
        name: '',
        tel: '',
        address: '',
        payment: '',
        message: ''
      }
    }
  }
}
</script>
