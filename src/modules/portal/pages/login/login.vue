<template>
  <div class="login-wrapper">
    <div class="login-main">
      <input type="password" class="disable-autocomplate" />
      <text-input :type="'text'" v-model="username" :placeholder="'username'" :error-message="err"></text-input>
      <text-input :type="'password'" v-model="password" :placeholder="'password'"></text-input>
      <div class="login-btn-wrapper">
        <input type="button" value="REGISTER" @click="toRigster"/>
        <input type="submit" value="ENTER" @click="test" />
      </div>
    </div>
  </div>
</template>

<script>
import TextInput from '@/common/component/login/input'

export default {
  data () {
    return {
      username: '',
      password: '',
      err: ''
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
    },
    test () {
      console.log(this.password)
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
