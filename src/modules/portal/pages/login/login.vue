<template>
  <div class="login-wrapper">
    <div class="login-main">
      <input type="password" class="disable-autocomplate" />
      <ValidationObserver ref="form" v-slot="{ valid }">
        <text-input :type="'text'" v-model="username" :placeholder="'username'" :rules-string="'required|min:5|max:20|login-username'"></text-input>
        <text-input :type="'password'" v-model="password" :placeholder="'password'" :rules-string="'required|min:8|max:20|login-password'"></text-input>
        <div class="login-btn-wrapper">
          <input type="button" value="REGISTER" v-throttle:1000="toRigster" />
          <input type="submit" value="ENTER" v-throttle:1000="toLogin" />
        </div>
      </ValidationObserver>
    </div>
  </div>
</template>

<script>
import TextInput from '@/common/component/login/input'
import APIS from '@/common/apis'
import AJAX from '@/common/ajax'

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
    async toLogin () {
      const valid = await this.$refs.form.validate()
      if (!valid) return
      const response = await AJAX.call({
        method: 'get',
        url: APIS.LOGIN
      })
      if (response.data.code === '1') {
        console.log('login success', response.data)
      }
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
