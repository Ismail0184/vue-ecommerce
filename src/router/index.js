import { createRouter, createWebHistory } from 'vue-router'


const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import(/* webpackChunkName: "home" */ '../views/HomeView.vue')
  },
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/contact',
    name: 'contact',
    component: () => import(/* webpackChunkName: "contact" */ '../views/ContactView.vue')
  },
  {
    path: '/category-product',
    name: 'category',
    component: () => import(/* webpackChunkName: "category" */ '../views/CategoryView.vue')
  },
  {
    path: '/product-details',
    name: 'product',
    component: () => import(/* webpackChunkName: "product" */ '../views/ProductView.vue')
  },
  {
    path: '/customer/login',
    name: 'login',
    component: () => import(/* webpackChunkName: "login" */ '../views/LoginView.vue')
  },
  {
    path: '/customer/register',
    name: 'register',
    component: () => import(/* webpackChunkName: "register" */ '../views/RegisterView.vue')
  },
  {
    path: '/customer/account-password-recovery',
    name: 'forgetpassword',
    component: () => import(/* webpackChunkName: "forgetpassword" */ '../views/AccountPasswordRecoveryView.vue')
  },
  {
    path: '/checkout',
    name: 'checkout',
    component: () => import(/* webpackChunkName: "checkout" */ '../views/CheckoutView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
