<template>
  <div>
    <h1>{{ msg }}</h1>
    <img src="../../img/a.jpg">
    <input type="text" v-model="msg">
  </div>
</template>

<script>
import getData from '../../utils/util';

export default {
  data () {
    return {
      msg: 'Welcome to Your Vue.js'
    }
  },
  created() {
    this.fetchData();
  },
  methods: {
    async fetchData() {
      const data = await getData();
      this.msg = data;
    }
  }
}
</script>

<style lang="less" scoped>
@import './home.less';
</style>
