<template>
  <div class="shop">
    <div class="header">
      <div class="avatar">
        <img :src="shop.shopLogo" alt="">
      </div>
      <span>{{shop.name}}</span>
    </div>
    <div class="main">
      <div class="sell">
        <div>
          <span>{{shop.cSells}}</span>
          <p>总销量</p>
        </div>
        <div>
          <span>{{shop.cGoods}}</span>
          <p>全部宝贝</p>=
        </div>
      </div>
      <div class="score">
        <div v-for="(item, i) in shop.score" :key="i">
          <span>{{item.name}}</span>
          <span :style="{color: item.isBetter ? 'red' : 'green'}">{{item.score}}</span>
          <span :style="{background: item.isBetter ? 'red' : 'green'}">{{scoreCompare(item.isBetter)}}</span>
        </div>
      </div>
    </div>
    <div class="go-shop">
      <button>进店逛逛</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Shop",
  props: {
    shop: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  computed: {
    scoreCompare() {
      return function(isBetter) {
        return isBetter ? '高' : '低'
      }
    }
  }
};
</script>

<style scoped>
.shop {
  border-top: 5px solid #eee;
}
.header {
  display: flex;
  padding: 30px 12px;
  align-items: center;
  font-size: 18px;
}
.avatar {
  overflow: hidden;
  border: 1px solid #ccc;
  margin-right: 10px;
  border-radius: 50%;
}
.avatar img {
  width: 50px;
  height: 50px;
  vertical-align: top;
}
.main {
  display: flex;
  align-items: center;
  padding: 0 10px;
  color: #333;
}
.main>div {
  flex: 1;
}
.sell {
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 50px;
  border-right: 1px solid #ccc;
}
.sell>div {
  text-align: center;
}
.sell>div span {
  font-size: 18px;
}
.sell>div p {
  padding-top: 10px;
  font-size: 14px;
}
.score>div {
  display: flex;
  padding-left: 20px;
  justify-content: space-between;
  padding: 5px 0 5px 20px;
}
.score>div span {
  font-size: 14px;
}
.score>div span:last-child {
  color: #fff;
  width: 18px;
  text-align: center;
}
.go-shop {
  padding-top: 10px;
  padding-bottom: 20px;
  text-align: center;
}
.go-shop button {
  background-color: #f6f7fb;
  width: 120px;
  height: 30px;
  line-height: 30px;
  outline: 0;
  border: none;
  font-size: 14px;
}
</style>