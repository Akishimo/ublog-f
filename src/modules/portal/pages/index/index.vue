<template>
  <div class="index-wrapper">{{ userInfo }}</div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  data () {
    return {
      msg: '败者食尘'
    }
  },
  created () {
    if (this.userInfo === null) {
      this.$router.push({
        name: 'login'
      })
    }
  },
  computed: {
    ...mapState([
      'userInfo'
    ])
  },
  methods: {
  }
}
</script>

<style lang="less">
@import './index.less';
</style>
