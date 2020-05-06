<template>
  <div class="goods-list">
    <goods-list-item v-for="(item, index) in goods" :key="index" :goods-item="item" />
  </div> 
</template>

<script>
import GoodsListItem from './GoodsListItem'
export default {
  name: "GoodsList",
  components: {
    GoodsListItem
  },
  props: {
    goods: {
      type: Array,
      default() {
        return []
      }
    }
  },
  methods: {
    
  },
}
</script>

<style scoped>
.goods-list {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  padding: 2px;
}
</style>