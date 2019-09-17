export default {
  throttle: function (func, delay) {
    var prev = Date.now() - delay
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
}
