/*
 * @Author: Zhongyang Ren
 * @Date: 2019-09-04 10:40:04
 * @Last Modified by: Zhongyang Ren
 * @Last Modified time: 2019-09-04 10:53:58
 */
const throttle = window.throttle = function (func, delay) {
  var prev = Date.now()
  return function () {
    var context = this
    var args = arguments
    var now = Date.now()
    if (now - prev >= delay) {
      func.apply(context, args)
      prev = Date.now()
    }
  }
}

const touchDbClick = window.touchDbClick = (func) => {
  let clickTimes = 0
  return () => {
    clickTimes++
    setTimeout(() => {
      clickTimes = 0
    }, 500)
    if (clickTimes > 1) {
      clickTimes = 0
      func()
    }
  }
}

export default {
  throttle,
  touchDbClick
}
