import { createRouter, createWebHistory } from 'vue-router'
import Produtos from '../views/Produtos.vue'

const routes = [
  {
    path: '/',
    name: 'Produtos',
    component: Produtos
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
