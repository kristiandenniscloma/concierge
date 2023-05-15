import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Basket from '../views/Basket.vue';
import Welcome from '../views/Welcome.vue'
import Pay from '../views/Pay.vue'
import Roulette from '../views/Roulette.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),

  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/view-basket',
      name: 'View Basket',
      component: Basket
    },
    {
      path: '/welcome',
      name: 'Welcome',
      component: Welcome
    },
    {
      path: '/pay',
      name: 'Pay',
      component: Pay
    },
    {
      path: '/roulette',
      name: 'Roulette',
      component: Roulette
    }
  ]
})

export default router
