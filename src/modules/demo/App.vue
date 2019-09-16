<template>
  <div>
    <router-view :key="activeDate"></router-view>
  </div>
</template>

<script>
export default {
  data () {
    return {
      activeDate: new Date().getTime()
    }
  },
  watch: {
    '$route': function (to, from) {
      this.activeDate = new Date().getTime()
    }
  }
}
</script>
