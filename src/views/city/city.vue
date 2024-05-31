<template>
  <div class="city top-page">
    <div class="top">
      <form action="/">
      <van-search
        v-model="searchValue"
        show-action
        shape="round"
        placeholder="请输入搜索关键词"
        @search="onSearch"
        @cancel="onCancel"
      />
    </form>
    <van-tabs v-model:active="tabActive" color="#ff9854">
      <template v-for="(value, key, index) in allCity" :key="key">
        <van-tab :title="value.title" :name="key"></van-tab>
      </template>
    </van-tabs>
    </div>
    <div class="content">
      <!-- <template v-for="(item, index) in currentGroup?.cities">
        {{ item }}
      </template>
       -->
       <template v-for="(value, key, index) in allCity">
        <city-group :currentGroup="value" v-show="tabActive === key"></city-group>
       </template>
       
    </div>
  </div>
</template>

<script setup>
  import { computed, ref } from 'vue';
  import { showToast } from 'vant';
  import { useRouter } from 'vue-router';
  import useCityStore from '@/stores/modules/city';
  import { storeToRefs } from 'pinia';
  import CityGroup from './cpns/city-group.vue'
  const router = useRouter()
  const searchValue = ref('');
  const onSearch = (val) => showToast(val);
  const onCancel = () => { 
    router.back()
  };

  const tabActive = ref("")

//请求网络数据
  const cityStore = useCityStore()
  cityStore.fetchAllCitiesData()
  const { citys:allCity } = storeToRefs(cityStore)


</script>

<style lang="less" scoped>
  .city {
    .top {
      position: relative;
      z-index: 9;
    }
    .content {
      height: calc(100vh - 98px);
      overflow-y: auto;
    }
  }
</style>
