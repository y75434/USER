import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: () => import('../views/Index.vue'),
    children: [
      {
        path: '/home',
        component: () => import('../views/Home.vue')
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
      }
    ]
  },
  {
    path: '/login',
    component: () => import('../views/Login.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
