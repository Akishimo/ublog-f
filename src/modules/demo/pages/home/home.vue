<template>
  <div></div>
</template>

<script>
import AJAX from '@/common/ajax'

export default {
  data () {
    return {
      msg: '败者食尘'
    }
  },
  async created () {
    await AJAX.call({
      method: 'get',
      url: '/common/index'
    })
  },
  computed: {
  },
  methods: {
    // this.$router.push({
    //   path: 'register',
    //   query: {
    //     aaa: '123'
    //   }
    // })
  }
}
</script>

<style lang="less">
@import './home.less';
</style>
