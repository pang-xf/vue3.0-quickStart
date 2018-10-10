import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
const router = new Router({
    // mode:'history',
    routes: [
        {
            path: '/',
            name: 'index',
            meta: {
                title: 'herox',
                auth:false,//需要登录
                keepAlive: false
            },
            component:resolve=>require(['@/views/index.vue'],resolve)
        },
    ]
})
/**
 * 路由前置检查
 */
router.beforeEach((to, from, next) => {
  // 合法性校验
  if (to.meta.auth) {
    console.log('into auth');
    next();
  }
  next();
});
router.afterEach(() => {  
  // 在即将进入新的页面组件前操作
})
export default router;