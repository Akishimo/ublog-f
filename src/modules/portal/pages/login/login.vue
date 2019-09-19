<template>
  <div class="login-wrapper">
    <div class="login-main">
      <input type="password" class="disable-autocomplate" />
      <ValidationObserver ref="form" v-slot="{ valid }">
        <text-input type="text" v-model="username" placeholder="username" rules-string="required|min:5|max:20|login-username"></text-input>
        <text-input type="password" v-model="password" placeholder="password" rules-string="required|min:8|max:20|login-password"></text-input>
        <div class="login-btn-wrapper">
          <input type="button" value="REGISTER" v-throttle:1000="toRigster" />
          <input type="submit" value="ENTER" v-throttle="toLogin" />
        </div>
      </ValidationObserver>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import APIS from '@/common/apis'
import AJAX from '@/common/ajax'
import TextInput from '@/common/component/login/input'
import STORE_MUTATIONS from '../../store/constant'

export default {
  data () {
    return {
      username: '',
      password: ''
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
    async toRigster () {
      this.$router.push({
        name: 'register'
      })
    },
    async toLogin () {
      const valid = await this.$refs.form.validate()
      if (!valid) return
      const response = await AJAX.call({
        method: 'post',
        url: APIS.LOGIN,
        data: {
          username: this.username,
          password: this.password
        }
      })
      if (response.data.code === '1') {
        this.$store.commit(STORE_MUTATIONS.SET_USER_INFO, response.data.data)
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
