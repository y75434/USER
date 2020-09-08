import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '@/views/frontend/Index.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Index,
    children: [
      {
        path: '',
        component: () => import('../views/Home.vue')
      },
      {
        path: 'products',
        component: () => import('../views/frontend/Products.vue')
      },
      {
        path: 'product/:id',
        component: () => import('../views/frontend/Product.vue')
      },
      {
        path: 'cart',
        component: () => import('../views/frontend/Cart.vue')
      },
      {
        path: 'order',
        component: () => import('../views/frontend/Order.vue')
      },
      {
        path: 'finished',
        component: () => import('../views/frontend/Finished.vue')
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
