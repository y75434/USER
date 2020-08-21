<template>
<!---產品列表-->
<div class="row mt-4">
    <div v-for="item in products" :key="item.id" class="col-md-4 mb-4">
        <div class="card border-0 shadow-sm" >
          <div style="height: 300px; background-size: cover; background-position: center" :style="{backgroundImage: `url(${item.imageUrl})`}"></div>
            <div class="card-body">
                <span class="badge badge-secondary float-right ml-2">{{ item.category }}</span>
                <h5 class="card-title"><a href="#" class="text-dark">{{ item.title }}</a></h5>
                <p class="card-text" v-html="item.content">{{ item.content }}</p>
                <div class="d-flex justify-content-between align-items-baseline">
                    <div v-if="!item.price || item.price === item.origin_price" class="h5">{{ item.origin_price }} 元</div>
                    <div v-else>
                        <del class="h6">原價 {{ item.origin_price }} 元</del>
                        <div class="h5">現在只要 {{ item.price }} 元</div>
                    </div>
                </div>
            </div>
        </div>
        <div class="card-footer d-flex">
            <button type="button" class="btn btn-outline-secondary btn-sm" :disabled="status.loadingItem === item.id" @click="getProduct(item.id)">
                <i v-if="status.loadingItem === item.id" class="spinner-grow spinner-grow-sm"></i>查看更多
            </button>
            <button type="button" class="btn btn-outline-danger btn-sm ml-auto" :disabled="status.loadingItem === item.id" @click="addToCart(item)">
                <i v-if="status.loadingItem === item.id" class="spinner-grow spinner-grow-sm"></i>加到購物車
            </button>
        </div>
    </div>
</div>

</template>

<script>
import bus from "./bus.js";

export default {
    name: 'Products',
    data(){
        return{
            products: [],
        tempProduct: {
            num: 0,
        },
    status: {
        loadingItem: '',//需先給預設值不然會出錯
    },
    //form裡面是要傳出去的資料
    form: {
        name: '',
        email: '',
        tel: '',
        address: '',
        payment: '',
        message: ''
    },
    //以下資料不用傳出去
    cart: {},//陣列要習慣加s???????
    cartTotal: 0,
    isLoading: false,
    UUID: '11b11a35-2274-4e22-9f5b-dda3fb171d74',
    apipath: 'https://course-ec-api.hexschool.io',
    },
    methods: {
        getProducts(page = 1){//參數預設值
            this.isLoading = true;
            const url = `${this.apipath}/api/${this.UUID}/ec/products?page=${page}`;
            axios.get(url).then((response) => {
                //跑完後，loading消失
                this.products = response.data.data;
                this.isLoading = false;
            }).catch((error => {
                this.isLoading = false;
            })
            )},
        getProduct(id) {
            //讀取效果
            this.status.loadingItem = id;
            const url = `${this.apipath}/api/${this.UUID}/ec/product/${id}`;
            console.log(id);
            axios.get(url).then((response) => {
                //存取遠端資料
                this.tempProduct = response.data.data;
                this.tempProduct.num = 1;
                //強制寫入預設值 this.$set(this.tempProduct, 'num', 1);
                $('#productModal').modal('show');
                this.status.loadingItem = '';//ajax結束後清除
            });
        },
        addToCart(item, quantity = 1){
            this.status.loadingItem = item.id;
            this.isLoading = false;
            const url = `${this.apipath}/api/${this.UUID}/ec/shopping`;
            const cart = {
                product: item.id,
                quantity,//quantity:quantity,的簡寫
            };
            //取得資料無論成功失敗都關閉
            axios.post(url, cart).then(() =>{
                this.isLoading = false;
                this.status.loadingItem = '';
                $('#productModal').modal('hide');
                this.getCart();
            }).catch((error) => {
                this.isLoading = false;
                this.status.loadingItem = '';
                console.log(error.response.data.errors);
                $('#productModal').modal('hide');
            });
        },
        getCart(){//購物車
            this.isLoading = true;
            const url = `${this.apipath}/api/${this.UUID}/ec/shopping`;

            axios.get(url).then((response) => {
                this.cart = response.data.data;//取得遠端購物車內容
                this.quantityUpdata();//執行算式
                this.isLoading = false;
            });
        },
        //更新數量
        quantityUpdata(id, quantity) {
            this.isLoading = true;
            const url = `${this.apipath}/api/${this.UUID}/ec/shopping`;
            const data = {
                product: id,
                quantity: num,
            };

            this.cart.forEach((item) => {
                this.cartTotal += item.product.price * this.quantity;
            });
            this.isLoading = false;

            axios.patch(url, data).then(() => {
                this.isLoading = false;
                this.getCart();
            });
        },
        removeAllCartItem(){
            this.isLoading = true;
            const url = `${this.apipath}/api/${this.UUID}/ec/shopping/all/product`;
        
            axios.delete(url).then(() =>{
                this.isLoading = false;
                this.getCart();
            });
        },
        removeCartItem(id){
            this.isLoading = true;
            const url = `${this.apipath}/api/${this.UUID}/ec/shopping/${id}`;

            axios.delete(url).then(() => {
                this.isLoading = false;
                this.getCart();
            });
        },
        createOrder(){
            this.isLoading = true;
            const url = `${this.apipath}/api/${this.UUID}/ec/orders`;

            axios.post(url, this.form).then((response) =>　{
                if(response.data.data.id){
                    this.isLoading = false;
                    $('#orderModal').modal('show');
                }
                //重新渲染購物車
                this.getCart();
            }).catch((error) => {
                this.isLoading = false;
                console.log(error.response.data.errors);
            });
        },
    },
    created(){
        this.getProducts();
        this.getCart();
    },
});

</script>
