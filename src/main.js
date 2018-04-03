// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './stroe'
import Subscribe from '~common/plugin/Subscribe.js'
import 'normalize.css'
import iview from 'iview'
import 'iview/dist/styles/iview.css';
Vue.config.productionTip = false
Vue.use(Subscribe);
Vue.use(iview);
/* eslint-disable no-new */
router.afterEach(route => {
  if(route.meta&&route.meta.name){
    document.title=route.meta.name;
  }
});
router.beforeEach((to, from, next) => {
  if (to.meta&&to.meta.auth) {  // 判断该路由是否需要登录权限
    if (window.App&&window.App.$store.getters.user) {  // 通过vuex state获取当前的token是否存在
      next();
    }
    else {
      next({
        path: '/login',
        query: {redirect: to.name}  // 将跳转的路由path作为参数，登录成功后跳转到该路由
      });
      return
    }
  }
  else {
    next();
  }


});
window.App=new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})

