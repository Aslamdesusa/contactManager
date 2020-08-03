import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import NProgress from "nprogress";

Vue.use(VueRouter)

  const routes = [
  {
    path: '/contacts/:portal/deshboard',
    name: 'Home',
    component: Home
  },
  {
    path: '/contacts/:portal/companies',
    name: 'Company',
    // route level code-splitting
    // this generates a separate chunk (company.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "company" */ '../views/company_item/company.vue')
  },
  {
    path: '/contacts/:portal/contacts',
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
  },
  {
    path: '/contacts/:portal/companies/details/:id',
    name: 'CompanyDetails',
    // route level code-splitting
    // this generates a separate chunk (Company_Details.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "Company_Details" */ '../views/company_item/company_details.vue')
  },
  {
    path: '/contacts/:portal/companies/edit/:id',
    name: 'EditCompanyDetails',
    // route level code-splitting
    // this generates a separate chunk (Company_Details.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "Company_Details" */ '../views/company_item/company_form.vue')
  }
]

const router = new VueRouter({
  // mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeResolve((to, from, next) => {
  // If this isn't an initial page load.
  if (to.name) {
      // Start the route progress bar.
      NProgress.start()
  }
  next()
})

router.afterEach(() => {
  // Complete the animation of the route progress bar.
  NProgress.done()
})

export default router
