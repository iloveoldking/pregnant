<template>
  <img class="gif" src="./assets/cat.webp" alt="" />
  <div class="main">
    <Card title="临床孕周" :start-time="'2021-11-24'" />
    <Card title="超声孕周" :start-time="'2021-11-30'" />
  </div>
  <van-button type="primary">主要按钮</van-button>
</template>

<script setup lang="ts"></script>

<style scoped lang="less">
.gif {
  width: 100%;
  height: 1.01rem;
}

.main {
  padding: 0 0.1rem;
  position: relative;
  overflow: auto;
}
</style>
