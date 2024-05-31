<template>
  <div class="search top-page">
    <div>开始时间：{{ $route.query.startDate }}</div>
    <div>结束时间：{{ $route.query.endDate }}</div>
    <div>当前城市： {{ currentCity.cityName }}</div>
  </div>
</template>

<script setup>
import useCityStore from '@/stores/modules/city';
import { storeToRefs } from 'pinia';


  const cityStore = useCityStore()
  const { currentCity } = storeToRefs(cityStore)
</script>

<style lang="less" scoped>
  
</style>
