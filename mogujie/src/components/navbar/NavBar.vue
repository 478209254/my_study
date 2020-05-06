<template>
  <div class="nav-bar">
    <div class="left"><slot name="left"></slot></div>
    <div class="center"><slot name="center"></slot></div>
    <div class="right"><slot name="right"></slot></div>
  </div>
</template>

<script>
export default {
  name: "NavBar",
};
</script>

<style scoped>
.nav-bar {
  display: flex;
  align-items: center;
  height: 44px;
  box-shadow: 0 1px 1px rgba(100,100,100,.1);
}
.nav-bar>div {
  display: flex;
  height: 100%;
  justify-content: center;
  align-items: center;
}
.left, .right {
  flex-basis: 60px;
}
.center {
  flex: 1;
}
</style>