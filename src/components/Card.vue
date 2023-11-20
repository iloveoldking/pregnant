<template>
  <div class="card">
    <div>{{ startTime }} ~~~ {{ endTime }}</div>
    <div class="flex mt-25">
      <div>孕周：{{ calcDate.weeks }}w</div>
      <div v-if="calcDate.days > 0">&nbsp;＋&nbsp;{{ calcDate.days }}d</div>
      <div>（ {{ calcDate.allWeeks.toFixed(1) }}w ）</div>
    </div>
    <div class="mt-25">
      已 {{ calcDate.allDays }} 天，剩余
      {{ calcDate.allDays >= WHOLE_PREGNANCY ? 0 : WHOLE_PREGNANCY - calcDate.allDays }} 天
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import dayjs, { Dayjs } from 'dayjs';
import duration from 'dayjs/plugin/duration';
import { WHOLE_PREGNANCY } from '@/constants';

dayjs.extend(duration);

const props = defineProps<{
  startTime: string;
  endTime: string;
  deadline: Dayjs;
}>();

const calcDate = computed(() => {
  const timeDuration = dayjs.duration(
    props.deadline.startOf('day').valueOf() - dayjs(props.startTime).startOf('day').valueOf()
  );
  const allDays = Math.ceil(timeDuration.asDays());
  const allWeeks = timeDuration.asWeeks();
  let weeks = Math.floor(allWeeks);
  let days = allDays - weeks * 7;

  return { allDays, allWeeks, weeks, days };
});
</script>

<style scoped lang="less">
.card {
  padding: 0 20px;
  margin-bottom: 20px;
}
.flex {
  display: flex;
  align-items: center;
}

.mt-25 {
  margin-top: 25px;
}
</style>
