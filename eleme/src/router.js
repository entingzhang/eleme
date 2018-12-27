import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Find from './views/Find.vue'
import List from './views/Find.vue'
import UserCenter from './views/UserCenter.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [{
      path: '/',
      name: 'home',
      component: Home
    },{
      path: '/find',
      name: 'find',
      component: Find
    },{
      path: '/list',
      name: 'list',
      component: List
    },{
      path: '/usercenter',
      name: 'usercenter',
      component: UserCenter
    }]
})
