<template>
  <div class="card">
    <div class="title text-red">{{ title }}</div>
    <div>，以 {{ startTime }} 作为周期计算开始时间</div>
  </div>
  <div class="flex text-red">
    <div>孕周：{{ weeks }}w</div>
    <div v-if="days > 0">&nbsp;+ {{ days }}</div>
    <div>（ {{ allWeeks.toFixed(1) }}w ），</div>
    <div>已 {{ allDays }} 天（{{ ((allDays / WHOLE_PREGNANCY) * 100).toFixed(0) }}%）</div>
  </div>
  <div class="flex text-red">
    <div>预产期：{{ endTime }}，</div>
    <div>
      剩余 {{ WHOLE_PREGNANCY - allDays }} 天（{{
        (((WHOLE_PREGNANCY - allDays) / WHOLE_PREGNANCY) * 100).toFixed(0)
      }}%）
    </div>
  </div>
</template>

<script setup lang="ts">
import dayjs from 'dayjs';
import duration from 'dayjs/plugin/duration';
dayjs.extend(duration);

const WHOLE_PREGNANCY = 280;

const { startTime } = defineProps<{ title: string; startTime: string }>();

const endTime = dayjs(startTime).add(WHOLE_PREGNANCY, 'd').format('YYYY-MM-DD');
const timeDuration = dayjs.duration(dayjs().valueOf() - dayjs(startTime).valueOf());
const allDays = Math.ceil(timeDuration.asDays());
const allWeeks = timeDuration.asWeeks();
let weeks = Math.floor(allWeeks);
let days = allDays - weeks * 7;
</script>

<style scoped lang="less">
.card {
  display: flex;
  align-items: center;

  .title {
    font-weight: bold;
    text-decoration: underline;
  }
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
</style>
