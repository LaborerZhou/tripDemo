<template>
  <div class="city-group">
    <van-index-bar highlight-color="#ff9854" :index-list="indexList">
      <van-index-anchor index="热门" />
      <div class="hotCityGroup">
        <template v-for="(hotCity, index) in currentGroup.hotCities" :key="index">
          <div class="hotCityItem" @click="cityClick(hotCity)">{{ hotCity.cityName }}</div>
        </template>

      </div>
      <template v-for="(cityGroup, index) in currentGroup.cities" :key="index">
        <van-index-anchor :index="cityGroup.group" />
        <template v-for="(cityItem, indey) in cityGroup.cities" :key="indey">
          <van-cell :title="cityItem.cityName" @click="cityClick(cityItem)" />
        </template>
      </template>
    </van-index-bar>
  </div>
</template>

<script setup>
import useCityStore from '@/stores/modules/city';
import { computed } from 'vue';
import { useRouter } from 'vue-router';

  const props = defineProps({
    currentGroup: {
      type: Object,
      default: () => ({})
    }
  })

  const indexList = computed(() => {
    const list = props.currentGroup.cities.map((item) => item.group)
    list.unshift("#")
    return list
  })

  const router = useRouter()
  const cityStore = useCityStore()
  const cityClick = (city) => {
    cityStore.currentCity = city
    router.back()
  }
</script>
<style lang="less" scoped>
  .city-group {
    .hotCityGroup {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-around;
      padding: 10px;
      padding-right: 25px;
      .hotCityItem {
        width: 70px;
        height: 28px;
        border-radius: 14px;
        font-size: 12px;
        color: #000;
        text-align: center;
        line-height: 28px;
        background-color: #fff4ec;
        margin: 6px 0;
      }
      
    }
  }
</style>
