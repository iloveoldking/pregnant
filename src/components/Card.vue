<template>
  <div class="card">
    <div>{{ startTime }} ~~~ {{ calcDate.endTime }}</div>
    <div class="flex mt-25">
      <div>孕周：{{ calcDate.weeks }}w</div>
      <div v-if="calcDate.days > 0">&nbsp;＋&nbsp;{{ calcDate.days }}d</div>
      <div>（ {{ calcDate.allWeeks.toFixed(1) }}w ）</div>
    </div>
    <div class="mt-25">
      已 {{ calcDate.allDays }} 天，剩余 {{ WHOLE_PREGNANCY - calcDate.allDays }} 天
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import dayjs from 'dayjs';
import duration from 'dayjs/plugin/duration';
dayjs.extend(duration);

const WHOLE_PREGNANCY = 280;

const props = defineProps<{ startTime: string }>();

const calcDate = computed(() => {
  const endTime = dayjs(props.startTime).add(WHOLE_PREGNANCY, 'd').format('YYYY-MM-DD');
  const timeDuration = dayjs.duration(
    dayjs().startOf('day').valueOf() - dayjs(props.startTime).startOf('day').valueOf()
  );
  const allDays = Math.ceil(timeDuration.asDays());
  const allWeeks = timeDuration.asWeeks();
  let weeks = Math.floor(allWeeks);
  let days = allDays - weeks * 7;

  return { endTime, allDays, allWeeks, weeks, days };
});
</script>

<style scoped lang="less">
.card {
  padding: 20px;
}
.flex {
  display: flex;
  align-items: center;
}

.mt-25 {
  margin-top: 25px;
}
</style>
