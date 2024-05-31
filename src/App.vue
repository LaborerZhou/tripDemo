<template>
  <div class="app">
    <router-view></router-view>
    <!-- <tap-bar v-show="!route.meta.hiddenTapBar" /> -->
    <tap-bar/>
  </div>
</template>

<script setup>
  import TapBar from '@/components/tap-bar/tap-bar01.vue'

  import { useRoute } from 'vue-router';
  const route = useRoute()
</script>

<style lang="less" scoped>
</style>
