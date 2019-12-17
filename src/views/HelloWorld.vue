<template>
  <div class="hello">
    <h1>{{ msg | toFixed(2) }}</h1>
    <h2>Essential Links</h2>
    <icon-svg icon-class="user"></icon-svg>
    <input type="text" v-focus>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 20.1235
    }
  },
  computed: {
    ...mapState({
      token: state => state.app.token
    })
  },
  mounted() {
    console.log('token:', this.token);
  },
}
</script>

<style lang="stylus" scoped>
.hello{
  .svg-icon{
    font-size 20px;
  }
}
</style>
