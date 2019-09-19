<template>
  <div class="register-wrapper">
    <div class="register-main">

    </div>
  </div>
</template>

<script>
import AJAX from '@/common/ajax'

export default {
  data () {
    return {
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
    toRigster () {
      this.$router.push({
        name: 'register'
      })
    }
  }
}
</script>

<style lang="less">
@import './register.less';
</style>
