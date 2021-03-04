import Vue from 'vue'
import Router from 'vue-router'
import Maps from '@/components/Maps'
import UserManagement from '@/components/UserManagement'
import Dashboard from '@/components/Dashboard'
import BootstrapVue from "bootstrap-vue";

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';


Vue.use(Router)
Vue.use(BootstrapVue)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/dashboard'
    },
    {
      path: '/dashboard',
      // name: 'Dashboard',
      component: Dashboard
    },
    {
      path: '/maps',
      // name: 'Maps',
      component: Maps
    },
    {
      path: '/userManagement',
      // name: 'UserManagement',
      component: UserManagement
    }
  ]
})
