<template>
  <div class="root-wrapper">
    <!-- <a href="#/">我是侧边栏</a> -->
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
