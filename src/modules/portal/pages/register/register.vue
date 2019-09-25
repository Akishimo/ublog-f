<template>
  <div class="register-wrapper">
    <div class="register-main">
      <input type="password" class="disable-autocomplate" />
      <ValidationObserver ref="form" v-slot="{ valid }">
        <text-input type="text" v-model="username" placeholder="username" rules-string="required|min:5|max:20|login-username"></text-input>
        <text-input type="password" v-model="password" placeholder="password" rules-string="required|min:8|max:20|login-password"></text-input>
        <text-input type="password" v-model="repassword" placeholder="repeat password" rules-string="required|min:8|max:20|login-password"></text-input>
        <div class="btn-wrapper">
          <input type="button" value="REGISTER" v-throttle:1000="rigster" />
        </div>
      </ValidationObserver>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import APIS from '@/common/apis'
import AJAX from '@/common/ajax'
import md5 from 'crypto-js/md5'
import TextInput from '@/common/component/login/input'
import STORE_MUTATIONS from '../../store/constant'

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
    if (this.userInfo !== null) {
      this.$router.push({
        name: 'index'
      })
    }
  },
  computed: {
    ...mapState([
      'userInfo'
    ])
  },
  methods: {
    async rigster () {
      const valid = await this.$refs.form.validate()
      if (!valid) return
      const response = await AJAX.call({
        method: 'post',
        url: APIS.LOGIN,
        data: {
          username: this.username,
          password: md5(`${salt}${this.password}`).toString()
        }
      })
      if (response.data.code === '1') {
        this.$store.commit(STORE_MUTATIONS.SET_USER_INFO, response.data.data)
        location.reload()
      }
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
