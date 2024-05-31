<template>
  <div class="categories">
    <template v-for="(item, index) in categories" :key="index">
      <div class="category">
        <img :src="item.pictureUrl" alt="">
        <div class="info">{{ item.title }}</div>
      </div>
    </template>
  </div>
</template>

<script setup>
import useHomeStore from '@/stores/modules/home';
import { storeToRefs } from 'pinia';

  const homeStore = useHomeStore()
  const {categories} = storeToRefs(homeStore)
</script>

<style lang="less" scoped>
  .categories {
    display: flex;
    overflow-x: auto;
      &::-webkit-scrollbar {
        display: none;
      }
    .category {
      text-align: center;
      // font-size: 18px;
      width: 83px;
      flex: none;
      img {
        width: 32px;
        margin-bottom: 10px;
      }
    }
  }
</style>
