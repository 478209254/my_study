<template>
  <div class="top">
    <img src="~assets/img/common/top.png" width="43" height="43" alt="">
  </div>
</template>
<script>
export default {
  name: "backTop",
  data() {
    return {}
  },
  methods: {}
}
</script>
<style scoped>
.top {
  position: fixed;
  z-index: 99;
  bottom: 50px;
  right: 10px;
}
</style>