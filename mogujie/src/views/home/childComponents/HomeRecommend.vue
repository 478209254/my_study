<template>
  <div>
    <ul>
      <li v-for="(item, index) in recommends" :key="index">
        <a :href="item.link">
          <img :src="item.image" width="70" height="70" alt="" />
          <span>{{item.title}}</span>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "HomeRecommend",
  props: {
    recommends: Array
  },
  data() {
    return {};
  }
};
</script>

<style scoped>
ul {
  display: flex;
  justify-content: space-around;
  border-bottom: 10px solid #eee;
}
li {
  padding: 10px 0 20px;
}
li span {
  display: block;
  padding-top: 10px;
  font-size: 12px;
  text-align: center;
}
</style>