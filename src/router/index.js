import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/contacts/:portal/deshboard',
    name: 'Home',
    component: Home
  },
  {
    path: '/contacts/:portal/companies/:companies/details',
    name: 'Company',
    // route level code-splitting
    // this generates a separate chunk (company.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "company" */ '../views/company_item/company.vue')
  },
  {
    path: '/contacts/:portal',
    name: 'Contacts',
    // route level code-splitting
    // this generates a separate chunk (contacts.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "contacts" */ '../views/contacts_item/contacts.vue')
  },
  {
    path: '/contacts/:portal/companies/add',
    name: 'Company_Form',
    // route level code-splitting
    // this generates a separate chunk (company_form.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "company form" */ '../views/company_item/company_form.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
