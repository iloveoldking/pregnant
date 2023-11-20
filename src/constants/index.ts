import dayjs from 'dayjs';
/** 总天数 */
export const WHOLE_PREGNANCY = 280;

/** 超声孕周开始时间 */
export const CHAO_SHENG_START = '2023-07-21';
/** 超声孕周结束时间 */
export const CHAO_SHENG_END = dayjs(CHAO_SHENG_START)
  .add(WHOLE_PREGNANCY, 'd')
  .format('YYYY-MM-DD');

/** 临床孕周开始时间 */
export const LIN_CHUANG_START = '2023-07-27';
/** 临床孕周结束时间 */
export const LIN_CHUANG_END = dayjs(LIN_CHUANG_START)
  .add(WHOLE_PREGNANCY, 'd')
  .format('YYYY-MM-DD');
