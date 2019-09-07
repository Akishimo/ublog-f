<template>
  <div class="login-wrapper">
    <div class="login-main">
      <input type="password" class="disable-autocomplate" />
      <input class="login-input" type="text" placeholder="username" autocomplete="off" />
      <input class="login-input" type="password" placeholder="password" autocomplete="off" />
      <div class="login-btn-wrapper">
        <input type="button" value="CREATE" />
        <input type="submit" value="ENTER" />
      </div>
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
  }
}
</script>

<style lang="less">
@import './login.less';
</style>
