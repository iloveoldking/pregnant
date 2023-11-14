<template>
  <img class="gif" src="./assets/cat.webp" alt="" />
  <Card :start-time="activeData.startTime" />
  <van-tabbar v-model="tabbarActive">
    <van-tabbar-item name="chao_sheng" icon="like-o">超声孕周</van-tabbar-item>
    <van-tabbar-item name="lin_chuang" icon="like-o">临床孕周</van-tabbar-item>
  </van-tabbar>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';

const data = {
  chao_sheng: {
    title: '超声孕周',
    startTime: '2023-07-21',
  },
  lin_chuang: {
    title: '临床孕周',
    startTime: '2023-07-27',
  },
};

const tabbarActive = ref<'lin_chuang' | 'chao_sheng'>('chao_sheng');
const activeData = computed(() => data[tabbarActive.value]);
</script>

<style scoped lang="less">
.gif {
  width: 100%;
}
</style>
