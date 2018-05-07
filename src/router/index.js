import Vue from 'vue'
import Router from 'vue-router'
import asyncLoad,{asyncImport} from './async-load'
Vue.use(Router)
const router=new Router({
  routes: [
    {
      path:"/",
      redirect:'/test'
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
    },
    {
      path: '/test',
      name: 'test',
      component: asyncImport('view/subject/Test','test')
    }
  ],
})


export default router
