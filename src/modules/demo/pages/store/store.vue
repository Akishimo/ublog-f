<template>
  <div>
    <h1>{{ c }} {{ msg }} {{ cplusone }} {{ cplustwo }} {{ cpt }} {{ getabcc }} {{ tms }} {{ tmss }}</h1>
    <img src="../../img/a.jpg">
    <input type="text" v-model="msg">
  </div>
</template>

<script>
import API from '@/common/api'
import { mapState, mapActions, mapGetters, mapMutations } from 'vuex'

// const INC = 'increment'

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
      // tmss: ''
    }
  },
  async created () {
    setInterval(() => {
      // this.$store.commit(INC, {
      //   amount: 2
      // })
      this.inc({ amount: 998 })
      // this.$store.dispatch('inc', { amount: 998 })
      // this.$store.dispatch({
      //   type: 'inc',
      //   amount: 123
      // })
    }, 1000)
    this.abcinc({ amount: 10 })
    this.protest({ amount: 10 }).then((result) => {
      this.testpM({ amount: 10 })
    })
    // this.$store.getters['testModule/gettms']
    // this.tmss = this.$store.getters['testModule/gettms']
    const data = await getData(this)
    this.msg = data.a
  },
  computed: {
    cplustwo () {
      return this.plus + 1 + this.$store.state.count
    },
    cpt () {
      return this.$store.getters.countxqian
    },
    ...mapState({
      count: state => state.count,
      c: 'count',
      cplusone (state) {
        return this.plus + state.count
      },
      tms: state => state.testModule.tms
    }),
    ...mapGetters([
      'getabcc'
    ]),
    ...mapGetters('testModule', { // 或者数组
      tmss: 'gettms'
    })
  },
  methods: {
    ...mapActions([
      'inc',
      'abcinc',
      'protest'
    ]),
    ...mapMutations({
      testpM: 'abc'
    })
  }
}
</script>

<style lang="less">
@import './store.less';
</style>
