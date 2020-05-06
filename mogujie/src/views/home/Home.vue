<template>
  <div id="home">
    <nav-bar class="navbar">
      <template #center>蘑菇街</template>
    </nav-bar>
    <tabs :titles="['流行', '新款', '精选']" @tabClick="tabClick" ref="tabControl1" class="tab-control" v-show="isTabFixed"/>
    <scroll class="content" ref="scroll" :probe-type="3" :pull-up-load="true" @scroll="contentScroll" @pullingUp="pullingUp">
      <home-swiper :banners="banners" @swiperImageLoad="swiperImageLoad"/>
      <home-recommend :recommends="recommends"/>
      <home-popular/>
      <tabs :titles="['流行', '新款', '精选']" @tabClick="tabClick" ref="tabControl2"/>
      <goods-list :goods="goods[currentTab].list"/> 
    </scroll>
    <back-top @click.native="backTopClick" v-show="isShowBackTop"/>
  </div>
</template>

<script>
import NavBar from 'components/navbar/NavBar'
import HomeSwiper from './childComponents/HomeSwiper'
import HomeRecommend from './childComponents/HomeRecommend'
import HomePopular from './childComponents/HomePopular'
import Tabs from 'components/tabs/Tabs'
import GoodsList from 'components/goods/GoodsList'
import Scroll from 'components/scroll/Scroll'
import BackTop from 'components/backTop/BackTop'
import {getHomeMultidata, getHomeGoods} from 'network/home'
import {imgLoadMixin} from 'common/mixin'

export default {
  name: "Home",
  components: {
    NavBar,
    HomeSwiper,
    HomeRecommend,
    HomePopular,
    Tabs,
    GoodsList,
    Scroll,
    BackTop
  },
  mixins: [imgLoadMixin],
  data() {
    return {
      banners: [],
      recommends: [],
      goods: {
        //流行
        pop: {page: 0, list: []},
        //新品
        new: {page: 0, list: []},
        //精选
        sell: {page: 0, list: []},
      },
      currentTab: 'pop',
      // 是否显示回到顶部
      isShowBackTop: false,
      // tab吸顶的位置
      tabOffsetTop: 0,
      // tab是否吸顶
      isTabFixed: false,
      // 离开时的位置
      scrollY: 0
    }
  },
  methods: {
    /**
     * 事件监听相关的方法
     */
    // 切换tab
    tabClick(index) {
      switch (index) {
        case 0: 
          this.currentTab = 'pop'
          break
        case 1: 
          this.currentTab = 'new'
          break
        case 2: 
          this.currentTab = 'sell'
          break
      }
      this.$refs.tabControl1.currentIndex = index
      this.$refs.tabControl2.currentIndex = index
    },
    // 回到顶部
    backTopClick() {
      this.$refs.scroll.scrollTo(0, 0)
    },
    contentScroll(position) {
      // backTop的显示与隐藏
      this.isShowBackTop = (-position.y) > 1000
      // tabControl是否吸顶
      this.isTabFixed = (-position.y) > this.tabOffsetTop
    },
    // 下拉事件
    pullingUp() {
      this.getHomeGoods(this.currentTab)
       this.$refs.scroll.finishPullUp()
    },
    // tab吸顶
    swiperImageLoad() {
       this.tabOffsetTop = this.$refs.tabControl2.$el.offsetTop
    },

    /**
     * 网络请求相关的方法
     */
    getHomeMultidata() {
      getHomeMultidata().then(res => {
        this.banners = res.data.banner.list
        this.recommends = res.data.recommend.list
      })
    },
    getHomeGoods(type) {
      const page = this.goods[type].page + 1
      getHomeGoods(type, page).then(res => {
        // for (let item of res.data.list) {
        //   this.goods[type].list.push(item)
        // }
        //把res.data.list的每一项push到数组中，作用同上代码
        this.goods[type].list.push(...res.data.list)
        this.goods[type].page++
      }).catch(err => {
        console.log('data request error')
      })
    }
  },
  created() {
    // 请求banner数据
    this.getHomeMultidata()
    // 请求流行数据
    this.getHomeGoods('pop')
    // 请求新款数据
    this.getHomeGoods('new')
    // 请求精选数据
    this.getHomeGoods('sell')
  },
  deactivated() {
    // 离开home时记录位置
    this.scrollY = this.$refs.scroll.scroll.y
    //取消监听图片加载事件
    this.$bus.$off('imgLoad',this.imgLoadListener)
  },
  activated() {
    // 进入home时回到离开时的位置
    this.$refs.scroll.scrollTo(0, this.scrollY)
    this.$refs.scroll.refresh()
  }
};
</script>

<style scoped>
#home {
  /* padding-top: 44px; */
  /* margin-bottom: 49px; */
  position: relative;
  height: 100vh;
}
.navbar {
  background-color: var(--color-tint);
  color: #fff;
}
/* .tabsFixed {
  position: fixed;
  top: 44px;
  left: 0;
  right: 0;
  z-index: 5;
} */
.content {
  /* height: calc(100% - 93px);
  margin-top: 44px; */
  overflow: hidden;
  position: absolute;
  top: 44px;
  bottom: 49px;
  left: 0;
  right: 0;
}
.tab-control {
  position: relative;
  z-index: 10;
  background-color: #fff;
}
</style>