<template>
  <div class="card">
    <div class="title text-red">{{ title }}</div>
    <div>，以 {{ startTime }} 作为周期计算开始时间</div>
  </div>
  <!-- <div class="flex text-red">
    <div>孕周：{{ weeks }}w</div>
    <div v-if="days > 0">&nbsp;+ {{ days }}</div>
    <div>（ {{ allWeeks }}w ），</div>
    <div>已 {{ allDays }} 天（{{ ((allDays / 280) * 100).toFixed(0) }}%）</div>
  </div> -->
  <div class="flex text-red">
    <div>预产期：{{ endTime }}，</div>
    <!-- <div>剩余 {{ 280 - allDays }} 天（{{ (((280 - allDays) / 280) * 100).toFixed(0) }}%）</div> -->
  </div>
</template>

<script setup lang="ts">
import dayjs from 'dayjs';
import duration from 'dayjs/plugin/duration';
dayjs.extend(duration);

const { startTime } = defineProps<{ title: string; startTime: string }>();
const endTime = dayjs(startTime).add(280, 'd').format('YYYY-MM-DD');
// const timeDuration = dayjs.duration(280 * 24 * 60 * 60 * 1000);
// const allDays = Math.ceil(timeDuration.asDays());
// const allWeeks = timeDuration.asWeeks().toFixed(1);
</script>

<style scoped lang="less">
.card {
  display: flex;
  align-items: center;

  .title {
    font-weight: bold;
    text-decoration: underline;
  }

  .text-red {
    color: #f00;
  }
  .flex {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin-top: 0.15rem;
  }
}
</style>
