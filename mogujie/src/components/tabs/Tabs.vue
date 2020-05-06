<template>
  <div>
    <div class="tabs">
      <div 
        v-for="(item, index) in titles"
        :key="index"
        :class="{active: currentIndex === index}"
        @click="itemClick(index)"
      >{{item}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Tabs",
  props: {
    titles: Array
  },
  data() {
    return {
      currentIndex: 0
    }
  },
  methods: {
    itemClick(index) {
      this.currentIndex = index
      this.$emit('tabClick', index)
    }
  }
};
</script>

<style scoped>
.tabs {
  display: flex;
  width: 100%;
  height: 40px;
  justify-content: space-around;
  align-items: center;
  font-size: 15px;
}
.tabs>div {
  padding: 5px;
}
.active {
  border-bottom: 3px solid var(--color-tint);
  color: var(--color-high-text);
}
</style>