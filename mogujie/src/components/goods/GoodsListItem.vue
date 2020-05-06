<template>
  <div class="goods-item">
    <img :src="getImg" alt width="80" @load="imgLoad" @click="toGoodDetail()" />
    <div>
      <p>{{goodsItem.title}}</p>
      <div class="goods-desc">
        <span>￥{{goodsItem.price}}</span>
        <span class="collect">{{goodsItem.cfav}}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "GoodsListItem",
  props: {
    goodsItem: Object
  },
  methods: {
    imgLoad() {
      this.$bus.$emit('itemImgLoad')
    },
    toGoodDetail() {
      if (this.$route.path.indexOf('home')) {
        this.$router.push({path: '/detail/' + this.goodsItem.iid})
      }
    }
  },
  computed: {
    getImg() {
      return  this.goodsItem.image || this.goodsItem.show.img
    }
  }
};
</script>

<style scoped>
.goods-item {
  position: relative;
  width: 48%;
  margin: 10px 0;
  padding-bottom: 40px;
  font-size: 12px;
  /* min-height: 310px; */
}
.goods-item img {
  width: 100%;
  border-radius: 5px;
  overflow: hidden;
}
.goods-item>div {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
}
.goods-item p {
  padding: 5px 0;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.goods-desc {
  display: flex;
  justify-content: space-around;
}
.goods-desc :first-child {
  color: var(--color-tint);
}
.collect {
  position: relative;
}
.collect::before {
  content: "";
  position: absolute;
  left: -15px;
  top: -2px;
  width: 14px;
  height: 14px;
  background: url("~assets/img/common/collect.svg") 0 0/14px 14px;
}
</style>