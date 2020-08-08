import Vue from 'vue'
import VueRouter from 'vue-router'
import NProgress from "nprogress";
import authenticate from './auth'

Vue.use(VueRouter)

const routes = [
  {
    path: '/', 
    component: () => import('../views'),
    redirect: "/contactManager",
    children: [
      { 
        path: 'contactmanager',
        component: () => import('../views/home/index.vue'), //home page
      },
    ]
  },
  
  // Deshboard
  {
    path: '/contacts/:portal/',
    beforeEnter: authenticate,
    component: () => import('../views'),
    children: [
      { 
        path: 'deshboard',
        name: 'Home',
        meta:{
          requiresAuth: true,
        },
        component: () => import( /* webpackChunkName: "about" */ '../views/deshboard/Home.vue'), 
      },
    ]
  },
  // end

  // companies
  {
    path: '/contacts/:portal/',
    beforeEnter: authenticate,
    component: () => import('../views'),
    children: [
      { 
        path: 'companies',
        name: 'Company',
        meta:{
          requiresAuth: true,
        },
        component: () => import( /* webpackChunkName: "about" */ '../views/company_item/company.vue'), 
      },
      { 
        path: 'companies/add',
        name: 'Company_Form',
        meta:{
          requiresAuth: true,
        },
        component: () => import( /* webpackChunkName: "about" */ '../views/company_item/company_form.vue'), 
      },
      { 
        path: 'companies/details/:id',
        name: 'CompanyDetails',
        meta:{
          requiresAuth: true,
        },
        component: () => import( /* webpackChunkName: "about" */ '../views/company_item/company_details.vue'), 
      },
      { 
        path: 'companies/edit/:id',
        name: 'EditCompanyDetails',
        meta:{
          requiresAuth: true,
        },
        component: () => import( /* webpackChunkName: "about" */ '../views/company_item/company_form.vue'), 
      },
    ]
  },
  // end

  // contacts routes
  {
    path: '/contacts/:portal/',
    beforeEnter: authenticate,
    component: () => import('../views'),
    children: [
      { 
        path: 'contacts',
        name: 'Contacts',
        meta:{
          requiresAuth: true,
        },
        component: () => import( /* webpackChunkName: "about" */ '../views/company_item/company.vue'), 
      },
      { 
        path: 'contacts/add',
        name: 'Contact_Form',
        meta:{
          requiresAuth: true,
        },
        component: () => import( /* webpackChunkName: "about" */ '../views/company_item/company_form.vue'), 
      },
      { 
        path: 'contacts/details/:id',
        name: 'ContactDetails',
        meta:{
          requiresAuth: true,
        },
        component: () => import( /* webpackChunkName: "about" */ '../views/company_item/company_details.vue'), 
      },
      { 
        path: '/contacts/edit/:id',
        name: 'EditContactDetails',
        meta:{
          requiresAuth: true,
        },
        component: () => import( /* webpackChunkName: "about" */ '../views/company_item/company_form.vue'), 
      },
    ]
  },

]

const router = new VueRouter({
  // mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior() {
      return {x: 0, y: 0}
  }
});

router.beforeEach((to, from, next) => {
  // If this isn't an initial page load.
  if (to.path) {
    // Start the route progress bar.

    NProgress.start();
    NProgress.set(0.1);
  }
  next();
});

router.afterEach(() => {
  // Complete the animation of the route progress bar.
  NProgress.done()
})


export default router
