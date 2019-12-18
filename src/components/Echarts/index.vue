<template>
  <div class="echarts"></div>
</template>
<script>
import echarts from 'echarts'
export default {
  name: 'echarts',
  data() {
    return {
      chart: ''
    } 
  },
  methods: {
    chartresize() {
      this.chart.resize()
    }
  },
  watch: {
    "$attrs.option": {
      handler (newValue) {
        this.chartresize();
        // this.chart.dispose(this.$el);
        this.chart = echarts.init(this.$el)
        this.chart.setOption(newValue);
      },
      deep: true
    }
  },
  mounted () {
    this.chart = echarts.init(this.$el)
    this.option && this.chart.setOption(this.option)
  }
}
</script>

<style lang="stylus" scoped>
.echarts{
  width 100%
  height 100%
}
</style>