<template>
  <div class="tap-bar">
    <van-tabbar v-model="currentIndex" active-color="#ff9854">
      <template v-for="(item, index) in tapBarData">
        <van-tabbar-item :to="item.routePath" icon="home-o">
          <span>{{ item.text }}</span>
          <!-- <template #icon>
            <img :src="getAssets(item.imgAcitivePath)" :alt="item.text" v-show="currentIndex === index">
            <img :src="getAssets(item.imgPath)" :alt="item.text" v-show="currentIndex !== index">
          </template> -->
        </van-tabbar-item>
      </template>

    </van-tabbar>

  </div>
</template>

<script setup>
  import tapBarData from '@/assets/data/tapBar'
  import getAssets from '@/utils/get_assets'
  import { ref } from 'vue';

  let currentIndex = ref(0)
</script>

<style lang="less" scoped>
  .tap-bar {
    position: fixed;
    bottom: 0;
    width: 100%;
    height: 50px;
    display: flex;
    border-top: 1px solid #eee;

    :deep(.van-tabbar-item__icon) {
      font-size: 28px;
    }

    img {
      // width: 36px;
      height: 26px;
    }
  }
</style>
