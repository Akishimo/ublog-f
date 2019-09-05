<template>
  <div>
    <a href="#/home">我是侧边栏 {{ count }}</a>
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
  },
  computed: {
    count () {
      return this.$store.state.count
    }
  }
}
</script>
