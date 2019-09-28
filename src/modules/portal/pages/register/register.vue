<template>
  <div class="register-wrapper">
    <div class="register-main">
      <input type="password" class="disable-autocomplate" />
      <ValidationObserver ref="form" v-slot="{ valid }">
        <text-input type="text" v-model="username" placeholder="username" rules-string="required|min:5|max:20|login-username"></text-input>
        <text-input type="password" v-model="password" placeholder="password" rules-string="required|min:8|max:20|login-password"></text-input>
        <text-input type="password" v-model="repassword" placeholder="repeat password" :rules-string="'required|min:8|max:20|login-password|register-repassword:' + password "></text-input>
        <div class="btn-wrapper">
          <input type="button" value="LOGIN" v-throttle:2000="toLogin" />
          <input type="button" value="REGISTER" v-throttle:2000="rigster" />
        </div>
      </ValidationObserver>
    </div>
  </div>
</template>

<script>
import APIS from '@/common/apis'
import AJAX from '@/common/ajax'
import md5 from 'crypto-js/md5'
import TextInput from '@/common/component/login/input'

const salt = 'tomoshibi' // 模拟盐值

export default {
  data () {
    return {
      username: '',
      password: '',
      repassword: ''
    }
  },
  created () {
  },
  computed: {
  },
  methods: {
    async rigster () {
      const valid = await this.$refs.form.validate()
      if (!valid) return
      const response = await AJAX.call({
        method: 'post',
        url: APIS.REGISTER,
        data: {
          username: this.username,
          password: md5(`${salt}${this.password}`).toString()
        }
      })
      if (response.data.code === '1') {
        this.$router.push({
          name: 'login'
        })
      }
    },
    toLogin () {
      this.$router.push({
        name: 'login'
      })
    }
  },
  components: {
    TextInput
  }
}
</script>

<style lang="less">
@import './register.less';
</style>
