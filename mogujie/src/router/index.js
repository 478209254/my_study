import Vue from 'vue'
import Router from 'vue-router'

// 重写路由push方法,阻止重复点击报错
// const originalPush = Router.prototype.push;
// Router.prototype.push = function push(location) {
//   return originalPush.call(this, location).catch(err => err);
// };

// 重写路由replace方法,阻止重复点击报错
// const originalReplace = Router.prototype.replace;
// Router.prototype.replace = function replace(location) {
//   return originalReplace.call(this, location).catch(err => err);
// };

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '',
      redirect: '/home'
    },
    {
      path: '/home',
      component: () => import('../views/home/Home')
    },
    {
      path: '/category',
      component: () => import('../views/category/Category')
    },
    {
      path: '/profile',
      component: () => import('../views/profile/Profile')
    },
    {
      path: '/cart',
      component: () => import('../views/cart/Cart')
    },
    {
      path: '/detail/:iid',
      component: () => import('../views/detail/Detail')
    }
  ],
  mode: 'history'
})
