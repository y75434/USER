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
        name: 'Product',
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
      },
      {
        path: 'about',
        component: () => import('../views/frontend/About.vue')
      }
    ]
  },
  {
    path: '/login',
    component: () => import('../views/backend/Login.vue')
  },
  {
    path: '/admin',
    component: () => import('../views/backend/Dashboard.vue'),
    children: [
      {
        path: 'products',
        component: () => import('../views/backend/dashboard/Products.vue')
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
