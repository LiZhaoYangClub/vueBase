<template>
  <div>
  </div>
</template>

<script>
import ICountUp from 'vue-countup-v2';
export default {
  name:'CountUp',
  props:{
    start: {
      type: Number,
      default: 1000
    },
  },
  components:{
    ICountUp
  },
  data() {
    return {

    }
  }
}
</script>

<style lang="stylus" scoped>
  
</style>