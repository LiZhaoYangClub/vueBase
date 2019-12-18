<template>
  <div class="hello">
    <h1>{{ msg | toFixed(2) }}</h1>
    <h2>Essential Links</h2>
    <icon-svg id="target" icon-class="user"></icon-svg>
    <input type="text" v-focus>
    <count-up :endVal="20000" :delay="1000" :options="options"/>
    <el-button type="primary">测试</el-button>
    <div class="echart">
      <echart :option="option"/>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 20.1235,
      options: {
        useEasing: true,
        useGrouping: true,
        separator: ',',
        decimal: '.',
        prefix: '',
        suffix: ''
      },
      option:{}
    }
  },
  computed: {
    ...mapState({
      token: state => state.app.token
    })
  }
}
</script>

<style lang="scss" scoped>
.hello{
  .svg-icon{
    font-size: 20px;
  }
  .echart{
    width: 500px;
    height: 500px;
  }
}
</style>
