<template>
  <div>
    <swiper>
      <swiper-item v-for="(item, index) in banners" :key="index">
        <a :href="item.link">
          <img :src="item.image" alt="" @load="imageLoad">
        </a>
      </swiper-item>
    </swiper>
  </div>
</template>

<script>
import {Swiper, SwiperItem} from 'components/swiper/index'
export default {
  name: "HomeSwiper",
  components: {
    Swiper,
    SwiperItem
  },
  props: {
    banners: {
      type: Array
    }
  },
  data() {
    return {
      isLoading: true
    }
  },
  methods: {
    // 监听轮播图加载
    imageLoad() {
      //只发送一次
      if (this.isLoading) {
        this.$emit('swiperImageLoad')
        this.isLoading = false
      }
    }
  },
}
</script>