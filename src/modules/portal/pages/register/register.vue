<template>
  <div class="register-wrapper">
    <div class="register-main">

    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  created () {
  },
  computed: {
  },
  methods: {
    toRigster () {
      this.$router.push({
        name: 'register'
      })
      // this.$router.push({
      //   path: 'register',
      //   query: {
      //     aaa: '123'
      //   }
      // })
    }
  }
}
</script>

<style lang="less">
@import './register.less';
</style>
