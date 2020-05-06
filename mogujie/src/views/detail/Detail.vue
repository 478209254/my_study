<template>
  <div id="detail">
    <detail-nav-bar class="detail-navbar"></detail-nav-bar>
    <scroll ref="scroll" class="content">
      <detail-swiper :top-images="topImages"></detail-swiper>
      <goods :goods="goods"/>
      <shop :shop="shop"/>
      <detail-goods-info :detail-goods-info="detailGoodsInfo" @imgLoad="imgLoad()"/>
      <detail-param-info ref="param" :param-info="paramInfo"/>
      <comment-info :comment-info="commentInfo"/>
      <goods-list :goods="recommend"/>
    </scroll>
  </div>
</template>

<script>
import Scroll from 'components/scroll/Scroll'
import DetailNavBar from './childComponents/DetailNavBar'
import DetailSwiper from './childComponents/DetailSwiper'
import Goods from './childComponents/Goods'
import Shop from './childComponents/Shop'
import DetailGoodsInfo from './childComponents/DetailGoodsInfo'
import DetailParamInfo from './childComponents/DetailParamInfo'
import CommentInfo from './childComponents/CommentInfo'
import GoodsList from 'components/goods/GoodsList'
import {getDetailDate, getRecommendDate, GoodsInfo, ShopInfo, GoodsParam} from 'network/detail'
import {imgLoadMixin} from 'common/mixin'

export default {
  name: "Detail",
  components: {
    Scroll,
    DetailNavBar,
    DetailSwiper,
    Goods,
    Shop,
    DetailGoodsInfo,
    DetailParamInfo,
    CommentInfo,
    GoodsList
  },
  mixins: [imgLoadMixin],
  data() {
    return {
      iid: '',
      topImages: [],
      goods: {},
      shop: {},
      detailGoodsInfo: {},
      paramInfo: {},
      commentInfo: {},
      recommend: []
    };
  },
  methods: {
    imgLoad() {
      this.$refs.scroll.refresh()
    }
  },
  created() {
    // 获取商品iid
    this.iid = this.$route.params.iid
    console.log(this.iid)
    // 获取详情数据
    getDetailDate(this.iid).then(res => {
      const data = res.result
      console.log(data)
      // 轮播图
      this.topImages = data.itemInfo.topImages
      // 商品信息
      this.goods = new GoodsInfo(data.itemInfo, data.columns, data.shopInfo.services)
      // 店铺信息
      this.shop = new ShopInfo(data.shopInfo)
      // 商品详情
      this.detailGoodsInfo = data.detailInfo
      // 参数信息
      this.paramInfo = new GoodsParam(data.itemParams.info, data.itemParams.rule)
      // 评论信息
      if (data.rate.list) {
        this.commentInfo = data.rate.list[0]
      }
    })
    // 获取推荐数据
    getRecommendDate().then(res => {
      this.recommend = res.data.list
    })
  },
  destroyed() {
    this.$bus.$off('imgLoad', this.imgLoadListener)
  }
};
</script>

<style scoped>
#detail {
  position: relative;
  z-index: 10;
  background-color: #fff;
  height: 100vh;
}
.detail-navbar {
  position: relative;
  z-index: 1;
  background-color: #fff;
}
.content {
  height: calc(100% - 44px);
}
</style>