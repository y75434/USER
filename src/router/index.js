import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    component: () => import('../views/Home.vue'),
    children: [
      {
        path: '/shop',
        component: () => import('../views/Shop.vue')
      },
      {
        path: '/products',
        component: () => import('../views/Products.vue')
      },
      {
        path: '/product/:id',
        component: () => import('../views/Product.vue')
      },
      {
        path: '/cart',
        component: () => import('../views/Cart.vue')
      },
    ],
  },

]

const router = new VueRouter({
  routes,
});

export default router;
