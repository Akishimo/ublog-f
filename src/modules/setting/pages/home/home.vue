<template>
  <div>
    <h1>{{ c }} {{ msg }} {{ cplusone }} {{ cplustwo }} {{ cpt }}</h1>
    <img src="../../img/a.jpg">
    <input type="text" v-model="msg">
  </div>
</template>

<script>
import API from '@/common/api'
import { mapState } from 'vuex'

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
      msg: '败者食尘',
      plus: 1
    }
  },
  async created () {
    setInterval(() => {
      this.$store.commit('increment')
    }, 1000)
    const data = await getData(this)
    this.msg = data.a
  },
  methods: {},
  computed: {
    cplustwo () {
      return this.plus + 1 + this.$store.state.count
    },
    cpt () {
      return this.$store.getters.countxqian
    },
    ... mapState({
      count: state => state.count,
      c: 'count',
      cplusone (state) {
        return this.plus + state.count
      }
    })
  }
}
</script>

<style lang="less">
@import './home.less';
</style>
