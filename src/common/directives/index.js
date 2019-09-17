import Vue from 'vue'
import utils from '@/common/utils'

Vue.directive('throttle', {
  bind: function (el, binding) {
    const func = binding.value
    const arg = binding.arg
    let delay = 3000
    if (arg !== undefined && Number.isInteger(arg * 1)) {
      delay = arg
    }
    const runner = utils.throttle(func, delay)
    el.addEventListener('click', runner)
  }
})
