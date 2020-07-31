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
    path: '/companies/:company',
    name: 'Company',
    // route level code-splitting
    // this generates a separate chunk (company.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "company" */ '../views/company.vue')
  },
  {
    path: '/contacts/:company',
    name: 'Contacts',
    // route level code-splitting
    // this generates a separate chunk (contacts.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "contacts" */ '../views/contacts.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
