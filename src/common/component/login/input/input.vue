<template>
  <div class="login-input-wrapper">
    <input class="login-input" :type="type" :placeholder="placeholder" autocomplete="off" />
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  props: {
    placeholder: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: 'text'
    }
  }
}
</script>

<style lang="less">
@import './input.less';
</style>
