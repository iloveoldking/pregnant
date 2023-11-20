<template>
  <img class="gif" src="./assets/cat.webp" alt="" />
  <van-divider>超声孕周</van-divider>
  <Card :start-time="CHAO_SHENG_START" :end-time="CHAO_SHENG_END" :deadline="deadline" />
  <van-divider>临床孕周</van-divider>
  <Card :start-time="LIN_CHUANG_START" :end-time="LIN_CHUANG_END" :deadline="deadline" />
  <div style="padding: 0 20px; position: fixed; bottom: 20px; left: 0; right: 0">
    <van-button type="primary" block color="#fdb395" @click="calendarShow = true">{{
      deadlineText
    }}</van-button>
  </div>
  <van-calendar
    :formatter="calendarFormatter"
    v-model:show="calendarShow"
    :min-date="calendarMin"
    :max-date="calendarMax"
    @confirm="onCalendarConfirm"
  />
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import dayjs, { Dayjs } from 'dayjs';
import weekday from 'dayjs/plugin/weekday';
import 'dayjs/locale/zh-cn';
import { CalendarDayItem } from 'vant';
import { CHAO_SHENG_START, CHAO_SHENG_END, LIN_CHUANG_START, LIN_CHUANG_END } from '@/constants';

dayjs.locale('zh-cn');
dayjs.extend(weekday);

const deadline = ref<Dayjs>(dayjs());
const deadlineText = computed(() => deadline.value.format('YYYY-MM-DD dddd'));

const calendarShow = ref<boolean>(false);
const calendarMin = dayjs(CHAO_SHENG_START).toDate();
const calendarMax = dayjs(LIN_CHUANG_END).toDate();
const calendarFormatter = (day: CalendarDayItem) => {
  const dayDayjs = dayjs(day.date);
  switch (dayDayjs.format('YYYY-MM-DD')) {
    case dayjs().format('YYYY-MM-DD'):
      day.bottomInfo = '今天';
      break;
    case CHAO_SHENG_START:
      day.bottomInfo = '超声起始';
      break;
    case LIN_CHUANG_START:
      day.bottomInfo = '临床起始';
      break;
    case CHAO_SHENG_END:
      day.bottomInfo = '超声预产';
      break;
    case LIN_CHUANG_END:
      day.bottomInfo = '临床预产';
      break;
    default:
      break;
  }
  return day;
};
const onCalendarConfirm = (value: Date) => {
  deadline.value = dayjs(value);
  calendarShow.value = false;
};
</script>

<style scoped lang="less">
.gif {
  width: 100%;
}
</style>
