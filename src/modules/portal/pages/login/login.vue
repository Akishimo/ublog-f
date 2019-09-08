<template>
  <div class="login-wrapper">
    <div class="login-main">
      <input type="password" class="disable-autocomplate" />
      <text-input :type="'text'" :placeholder="'username'"></text-input>
      <text-input :type="'password'" :placeholder="'password'"></text-input>
      <div class="login-btn-wrapper">
        <input type="button" value="REGISTER" @click="toRigster"/>
        <input type="submit" value="ENTER" />
      </div>
    </div>
  </div>
</template>

<script>
import TextInput from '@/common/component/login/input'

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
  },
  components: {
    TextInput
  }
}
</script>

<style lang="less">
@import './login.less';
</style>
