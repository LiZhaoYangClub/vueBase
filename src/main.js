// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import './config'
import store from './store'
import './style/index.styl'
import * as filters from './filters'
import vueFocus from './directive'

Vue.config.productionTip = false;
// 全局过滤器
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})
// 插件
Vue.use(vueFocus)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
