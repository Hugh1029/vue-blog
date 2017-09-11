import Vue from 'vue'
import Router from 'vue-router'
import Index from 'pages/Index'
import Api from 'pages/Api'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/index'
    },{
        path: '/index',
        component: Index
    },{
        path: '/api',
        component: Api
    }
  ]
})
