<template>
  <div class="search-box">
    <!-- 位置信息 -->
    <div class="location">
      <div class="city" @click="cityClick">{{ currentCity.cityName }}</div>
      <div class="position" @click="positionClick">
        <span class="text">我的位置</span>
        <img src="@/assets/imgs/home/icon_location.png" alt="">
      </div>
    </div>
    <!-- 日期选择 -->
    <div class="date-select" @click="showCalendar = true">
      <div class="start section">
        <div class="tip">入住</div>
        <div class="date">{{ startDate }}</div>
      </div>
      <div class="date-range">共{{ diffDays }}晚</div>
      <div class="end section">
        <div class="tip">离店</div>
        <div class="date">{{ endDate }}</div>
      </div>
    </div>
    <van-calendar v-model:show="showCalendar" type="range" @confirm="onConfirm" color="#ff9854" />
    <!-- 价格人数 -->
    <div class="desc">
      <div class="price">价格不限</div>
      <div class="person end">人数不限</div>
    </div>
    <!-- 关键词 -->
    <div class="keywords">关键词/位置/民宿名</div>
    <!-- 热门建议 -->
    <div class="hot-suggests">
      <template v-for="(item, index) in hotData">
        <div class="tag" :style="{ color: item.tagText.color, backgroundColor: item.tagText.background.color }">{{
          item.tagText.text }}</div>
      </template>
    </div>
    <!-- 搜索按钮 -->
    <div class="search-btn">
      <div class="btn" @click="searchBtnClick">开始搜索</div>
    </div>
  </div>
</template>

<script setup>
  import { ref } from 'vue';
  import useCityStore from '@/stores/modules/city';
  import { storeToRefs } from 'pinia';
  import { useRouter } from 'vue-router';

  // 位置信息操作
  const router = useRouter()
  const cityClick = () => {
    router.push("/city")
  }
  const positionClick = () => {
    navigator.geolocation.getCurrentPosition((res) => {
      console.log("获取位置成功", res)
    })
  }
  //当前城市显示
  const cityStore = useCityStore()
  const { currentCity } = storeToRefs(cityStore)

  //日期选择操作
  import { formatMonthDay, getDiffDays } from '@/utils/date_format';
  import useHomeStore from '@/stores/modules/home';

  const nowDate = new Date()
  const nextDate = new Date()
  nextDate.setDate(nextDate.getDate() + 1)
  const startDate = ref(formatMonthDay(nowDate))
  const endDate = ref(formatMonthDay(nextDate))
  const diffDays = ref(getDiffDays(nowDate, nextDate))
  const showCalendar = ref(false)
  const onConfirm = (value) => {
    const startSlect = value[0]
    const endSlect = value[1]
    startDate.value = formatMonthDay(startSlect)
    endDate.value = formatMonthDay(endSlect)
    diffDays.value = getDiffDays(startSlect, endSlect)
    showCalendar.value = false
  }

  //热门建议数据获取  
  const homeStore = useHomeStore()
  const { hotData } = storeToRefs(homeStore)

  //搜索按钮跳转
  const searchBtnClick = () => {
    router.push({
      path: "/search",
      query: {
        startDate: startDate.value,
        endDate: endDate.value
      }
    })
  }
</script>


<style lang="less" scoped>
  .search-box {
    padding: 0 40px 0 20px;

    .location {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 44px;

      .city {
        flex: 1;
        font-size: 15px;
        color: #333;
      }

      .position {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-right: -20px;

        .text {
          color: #666;
        }

        img {
          width: 18px;
          margin-left: 5px;
        }
      }

    }

    .date-select {
      display: flex;
      justify-content: space-around;
      align-items: center;

      .end {
        display: flex;
        flex-direction: column;
        align-items: end;
      }

      .section {
        flex: 1;
      }

    }

    .desc {
      display: flex;
      justify-content: space-between;
      font-size: 12px;
      height: 40px;
      align-items: center;
      color: #999;
    }

    .keywords {
      font-size: 12px;
      height: 30px;
      line-height: 30px;
      color: #999;
    }

    .hot-suggests {
      display: flex;
      flex-wrap: wrap;
      margin-left: -10px;

      .tag {
        // width: 50px;
        border-radius: 12px;
        margin: 5px 10px;
      }
    }

    .search-btn {
      margin: 20px 0;
      // margin-right: -50px;
      display: flex;
      justify-content: center;
      .btn {
        margin-left: 20px;
        width: 342px;
        height: 38px;
        font-size: 18px;
        line-height: 38px;
        text-align: center;
        border-radius: 20px;
        color: #fff;
        background-image: var(--theme-color-gradient);
      }
    }
  }
</style>
