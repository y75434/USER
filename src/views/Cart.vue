<template>
  <div class="mt-5">
    <h3 class=" mx-5">我的購物車</h3>
    <div class="row">
    <div class="col-md-7">
      <table class="table">
        <thead>
          <tr>
            <th scope="col" class="border-0 px-3">產品名稱</th>
            <th scope="col" class="border-0 px-3">數量</th>
            <th scope="col" class="border-0">金額</th>
            <th scope="col" class="border-0"></th>
          </tr>
        </thead>
        <tbody>
          <tr class="cart">
            <th scope="row" class="border-0 px-0 font-weight-normal py-4 px-4">
              <img src="images/lesson_2.jpg" alt="" style="width: 72px; height: 72px; object-fit: cover;">
              <p class="mb-0 font-weight-bold ml-3 d-inline-block">產品名稱</p>
            </th>
            <td class="border-0 align-middle" style="max-width: 160px;">
              <div class="input-group pr-5">
                <div class="input-group-prepend">
                  <button class="btn btn-outline-dark border-1 py-2" type="button" id="button-addon1">
                    <i class="fas fa-minus"></i>
                  </button>
                </div>
                <input type="text" class="form-control border-1 text-center my-auto shadow-none" aria-describedby="button-addon1" value="1">
                <div class="input-group-append">
                  <button class="btn btn-outline-dark border-1 py-2" type="button" id="button-addon2">
                    <i class="fas fa-plus"></i>
                  </button>
                </div>
              </div>
            </td>
            <td class="border-0 align-middle"><p class="mb-0 ml-auto">NT$12,000</p></td>
            <td class="border-0 align-middle"><i class="fas fa-times"></i></td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="col-md-4 ">
      <div class="border p-4 mb-4">
        <h4 class="font-weight-bold mb-4">訂單</h4>
        <table class="table text-dark border-bottom">
          <tbody>
            <tr>
              <th scope="row" class="border-0 px-0 pt-4 font-weight-normal">總額</th>
              <td class="text-right border-0 px-0 pt-4">NT$24,000</td>
            </tr>
          </tbody>
        </table>
        <div class="d-flex justify-content-between mt-4">
          <p class="mb-0 h4 font-weight-bold"></p>
          <p class="mb-0 h4 font-weight-bold">NT$24,000</p>
        </div>
        <a href="#" class="btn btn-secondary btn-block mt-4 col-md-2" >確認</a>
      </div>
    </div>
  </div>
  </div>
</template>

<script>

</script>


<style>

</style>