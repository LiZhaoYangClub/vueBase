import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'

Vue.use(Vuex)

const modulesFiles = require.context('./modules', true, /\.js$/)
var modules = {};
modulesFiles.keys().map( singleModule => {
  const moduleName = singleModule.replace(/^\.\/(.*)\.\w+$/, '$1')
  modules[moduleName] = JSON.stringify(modulesFiles(singleModule)) !== '{}' ? modulesFiles(singleModule).default : {}
})
const store = new Vuex.Store({
  modules,
  getters
})

export default store
