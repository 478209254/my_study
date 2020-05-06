import {debounce} from './utils'
export const imgLoadMixin = {
  data() {
    return {
      //图片加载事件
      imgLoadListener: null
    }
  },
  mounted() {
    // 监听item中图片加载完成
    const refresh = debounce(this.$refs.scroll.refresh, 100)
    this.imgLoadListener = () => {
      refresh()
    }
    this.$bus.$on('itemImgLoad', this.imgLoadListener)
    console.log('混入其中')
  }
}