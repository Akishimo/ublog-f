<template>
  <validation-provider rules="secret" v-slot="{ errors }">
    <div class="login-input-wrapper">
      <input class="login-input" :type="type" v-model="currentValue" :placeholder="placeholder" autocomplete="off" />
      <label class="error-message">{{ errors[0] }}</label>
    </div>
  </validation-provider>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  props: {
    value: String,
    placeholder: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: 'text'
    },
    errorMessage: {
      type: String,
      default: ''
    }
  },
  computed: {
    currentValue: {
      get: function () {
        return this.value
      },
      set: function (val) {
        this.$emit('input', val)
      }
    }
  }
}
</script>

<style lang="less">
@import './input.less';
</style>
