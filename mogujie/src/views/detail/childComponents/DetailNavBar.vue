<template>
  <div>
    <nav-bar>
      <template #left>
        <div @click="clickLeft()">
          <img src="~assets/img/common/back.svg" width="15" height="15" alt="">
        </div>
      </template>
      <template #center>
        <div class="titles">
          <span v-for="(item, i) in titles" 
            class="titles-item"
            :key="i"  
            :class="{'title-current': currentTitle === i}" 
            @click="titleClick(i)">
            {{item}}
          </span>
        </div>
      </template>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from 'components/navbar/NavBar'
export default {
  name: "DetailNavBar",
  components: {
    NavBar
  },
  data() {
    return {
      titles: ['商品', '参数', '评论', '推荐'],
      currentTitle: 0
    }
  },
  methods: {
    titleClick(i) {
      this.currentTitle = i
    },
    clickLeft() {
      this.$router.back()
    }
  }
}
</script>

<style scoped>
.titles {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-size: 13px;
}
.title-current {
  color: #ff5777;
}
</style>