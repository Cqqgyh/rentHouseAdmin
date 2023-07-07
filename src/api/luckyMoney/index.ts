import http from '@/utils/http'
import { LuckyMoneyActive } from '@/api/luckyMoney/types'

/**
 * @description 添加红包活动
 * @param params
 * @returns {Promise<ResultData<string>>} 红包key
 */
export function addLuckyMoneyActive(params: LuckyMoneyActive) {
  return http.post<string>(`/api/add`, params)
}

/**
 * @description 获取活动列表
 * @returns {Promise<ResultData<LuckyMoneyActive[]>>} 红包活动列表
 */
export function getLuckyMoneyActiveList() {
  return http.get<LuckyMoneyActive[]>(`/api/list`)
}
