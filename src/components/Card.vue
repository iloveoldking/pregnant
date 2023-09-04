<template>
  <div>孕周开始时间: {{ startTime }}</div>
  <div>预产期: {{ endTime }}</div>
  <div class="flex">
    <div>孕周：{{ weeks }}w</div>
    <div v-if="days > 0">&nbsp;+ {{ days }}</div>
    <div>（ {{ allWeeks.toFixed(1) }}w ），</div>
    <div>已 {{ allDays }} 天（{{ ((allDays / WHOLE_PREGNANCY) * 100).toFixed(0) }}%）</div>
  </div>
  <div class="flex">
    <div>
      剩余 {{ WHOLE_PREGNANCY - allDays }} 天（{{
        (((WHOLE_PREGNANCY - allDays) / WHOLE_PREGNANCY) * 100).toFixed(0)
      }}%）
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import dayjs from 'dayjs';
import duration from 'dayjs/plugin/duration';
dayjs.extend(duration);

const WHOLE_PREGNANCY = 280;

const { startTime } = defineProps<{ startTime: string }>();
console.log('%c startTime ===>', 'color:#ff4d4f', startTime);

const endTime = computed(() => {
  console.log(startTime);
  return dayjs(startTime).add(WHOLE_PREGNANCY, 'd').format('YYYY-MM-DD');
});
console.log('%c endTime ===>', 'color:#ff4d4f', endTime);
const timeDuration = dayjs.duration(dayjs().valueOf() - dayjs(startTime).valueOf());
const allDays = Math.ceil(timeDuration.asDays());
const allWeeks = timeDuration.asWeeks();
let weeks = Math.floor(allWeeks);
let days = allDays - weeks * 7;
</script>

<style scoped lang="less">
.flex {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-top: 15px;
}
</style>
