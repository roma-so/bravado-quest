import Vue from 'vue'
import Router from 'vue-router'
import App from '@/App.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: App
    },

    {
      path: '/search/:search',
      name: 'Search',
      component: App
    }
  ]
})