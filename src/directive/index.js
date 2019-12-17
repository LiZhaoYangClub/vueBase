const vueFocus = {}
vueFocus.install = Vue => {
  // 注册一个全局自定义指令 `v-focus`
  Vue.directive('focus', {
    inserted: function (el) {
      // 聚焦元素
      el.focus()
    }
  })
}

export default vueFocus