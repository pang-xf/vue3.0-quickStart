import Vue from 'vue'
import App from './App.vue'
import store from './store/index'
import router from './router/index'
import Vuex from 'vuex'
import axios from './http/index' 
Vue.prototype.$http = axios
Vue.config.productionTip = false
Vue.use(Vuex)
new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
