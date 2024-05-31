<template>
  <div class="home">
    <home-nav-bar />
    <div class="banner">
      <img src="@/assets/imgs/home/banner.webp" alt="">
    </div>
    <home-search-box />
    <home-categories />
  </div>
</template>

<script setup>
  import useHomeStore from '@/stores/modules/home';
  import HomeNavBar from './cpns/home-nav-bar.vue'
  import HomeSearchBox from './cpns/home-search-box.vue'
import HomeCategories from './cpns/home-categories.vue'

  const homeStore = useHomeStore()
  homeStore.fetchHotSuggests()
  homeStore.fetchCategories()
</script>

<style lang="less" scoped>
  .home {
    .banner {
      img {
        width: 100%;
      }
    }


  }
</style>
