<template>
  <div class="login-wrapper">
    <div class="login-main">
      <input type="password" class="disable-autocomplate" />
      <ValidationObserver v-slot="{ valid }">
        <text-input :type="'text'" v-model="username" :placeholder="'username'" :rules-string="'required|min:5|max:20|login-username'"></text-input>
        <text-input :type="'password'" v-model="password" :placeholder="'password'" :rules-string="'required|min:8|max:20|login-password'"></text-input>
        <div class="login-btn-wrapper">
          <input type="button" value="REGISTER" @click="toRigster"/>
          <input type="submit" value="ENTER" @click="toLogin(valid)" />
        </div>
      </ValidationObserver>
    </div>
  </div>
</template>

<script>
import TextInput from '@/common/component/login/input'

export default {
  data () {
    return {
      username: '',
      password: ''
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
    toLogin (valid) {
      console.log(valid)
      if (!valid) return
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
