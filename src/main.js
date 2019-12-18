// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import store from './store'
import router from './router'
import ElementUI from 'element-ui';
import vueFocus from './directive'
import * as filters from './filters'

import './config'
Vue.config.productionTip = false;
// 全局过滤器
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})
// 插件
Vue.use(vueFocus)
Vue.use(ElementUI, { size: 'mini', zIndex: 3000 })
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
