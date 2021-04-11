import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/cindys-portfolio',
    name: 'CindysPortfolio',
    component: () => import('../views/Portfolio.vue')

  },
  {
    path: '/cindys-portfolio/:project',
    name: 'CindysPortfolio',
    component: () => import('../views/SingleProject.vue')

  },
  {
    path: '/tw-projects',
    name: 'TWPortfolio',
    component: () => import('../views/Portfolio.vue')

  },
  {
    path: '/tw-projects/:project',
    name: 'TWProject',
    component: () => import('../views/SingleProject.vue')
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'not-found',
    component: () => import('../views/404.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
