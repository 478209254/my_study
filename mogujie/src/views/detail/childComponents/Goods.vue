<template>
  <div class="goods" v-if="Object.keys(goods).length !== 0">
    <h5>{{goods.title}}</h5>
    <div class="price">
      <span>￥{{goods.lowNowPrice}}</span>
      <span>{{goods.oldPrice}}</span>
      <span v-if="goods.discountDesc.length != 0" :style="{backgroundColor: goods.discountBgColor}">
        {{goods.discountDesc}}
      </span>
    </div>
    <div class="columns">
      <span>{{goods.columns[0]}}</span>
      <span>{{goods.columns[1]}}</span>
      <span>{{goods.services[goods.services.length - 1].name}}</span>
    </div>
    <div class="services">
      <div v-for="i in goods.services.length - 1" :key="i">
        <img :src="goods.services[i-1].icon" alt="">
        <span>{{goods.services[i-1].name}}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "GoodsInfo",
  props: {
    goods: {
      type: Object,
      default() {
        return {}
      }
    }
  }
};
</script>

<style scoped>
.goods h5 {
  font-weight: normal;
  padding: 10px 12px;
  font-size: 16px;
  color: #000;
}
.price {
  display: flex;
  padding: 0 12px;
  font-size: 12px;
}
.price span:first-child {
  font-size: 20px;
  color: #ff5777;
}
.price span:nth-child(2) {
  padding: 10px;
  font-size: 12px;
  color: #ccc;
  text-decoration: line-through;
}
.price span:nth-child(3) {
  padding: 0 5px;
  height: 18px;
  line-height: 18px;
  color: #fff;
  border-radius: 10px;
  align-self: flex-start;
}
.columns {
  display: flex;
  justify-content: space-between;
  font-size: 14px;
  color: #ccc;
  padding: 10px 12px;
  border-bottom: 1px solid #eee;
}
.services {
  display: flex;
  padding: 10px 12px;
  justify-content: space-between;
  font-size: 12px;
  color: #000;
}
.services>div {
  display: flex;
  align-items: center;
}
.services img {
  width: 15px;
  height: 15px;
  margin-right: 5px;
}
</style>