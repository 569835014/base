import Vue from 'vue'
import Router from 'vue-router'
import asyncLoad,{asyncImport} from './async-load'
Vue.use(Router)
const router=new Router({
  routes: [
    {
      path:"/",
      redirect:'/user'
    },
    {
      path: '/user',
      name: 'user',
      meta:{
        auth:true
      },
      component: asyncLoad('view/User')
    },
    {
      path: '/login',
      name: 'login',
      component: asyncLoad('view/Login')
    },
    {
      path: '/about',
      name: 'about',
      auth:true,
      component: asyncImport('view/About','about')
    }
  ],
})


export default router
