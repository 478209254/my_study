<template>
  <div>
    <swiper class="detail-swiper">
      <swiper-item v-for="(item, i) in topImages" :key="i">
        <img :src="item" alt="">
      </swiper-item>
    </swiper>
  </div>
</template>

<script>
import {Swiper, SwiperItem} from 'components/swiper'
export default {
  name: "DetailSwiper",
  components:{
    Swiper,
    SwiperItem
  },
  props: {
    topImages: {
      type: Array,
      default() {
        return []
      }
    }
  }
};
</script>

<style scoped>
.detail-swiper {
  overflow: hidden;
  height: 300px;
}
</style>