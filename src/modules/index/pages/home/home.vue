<template>
  <div>
    <h1>{{ msg }}</h1>
    <img src="../../img/a.jpg">
    <input type="text" v-model="msg">
  </div>
</template>

<script>
import API from '@/common/api'

const getData = async (vm) => {
  const response = await API.call({
    method: 'get',
    url: '/common/index/',
    data: {
      ts: 123
    }
  })
  return response.data
}

export default {
  data () {
    return {
      msg: 'Welcome to Your Vue.js'
    }
  },
  async created() {
    const data = await getData(this)
    this.msg = data.a
  },
  methods: {}
}
</script>

<style lang="less" scoped>
@import './home.less';
</style>
