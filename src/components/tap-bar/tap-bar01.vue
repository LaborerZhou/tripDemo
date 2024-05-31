<template>
  <div class="tap-bar">
    <template v-for="(item, index) in tapBarData">
      <div class="tap-bar-item" @click="tapBarClick(item.routePath, index)" :class="{ active: currentIndex === index}">
      <img :src="getAssets(item.imgAcitivePath)" :alt="item.text" v-show="currentIndex === index">
      <img :src="getAssets(item.imgPath)" :alt="item.text" v-show="currentIndex !== index">
      <span class="text">{{item.text}}</span>
    </div>
  </template>   
  </div>
</template>

<script setup>
  import tapBarData from '@/assets/data/tapBar'
  import router from '@/router';
  import getAssets from '@/utils/get_assets'
  import { ref } from 'vue';

  let currentIndex = ref(0)

  function tapBarClick(path, index) {
    router.push(path)
    currentIndex.value = index
  }
</script>

<style lang="less" scoped>
  .tap-bar {
    position: fixed;
    bottom: 0;
    width: 100%;
    height: 50px;
    display: flex;
    border-top: 1px solid #eee;
    background-color: #fff;
    .tap-bar-item {
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      &.active {
        color: var(--primary-color);
      }
    }
    img {
      width: 36px;
    }
    .text {
      margin-top: 2px;
      font-size: 12px;
    }
  }
</style>
