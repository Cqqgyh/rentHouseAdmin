// 分页查询公寓信息列表
import { ReqPage } from '@/api/types'

export interface ApartmentListQueryInterface extends ReqPage {
  // 省份id
  provinceId?: number | string
  // 城市id
  cityId?: number | string
  // 区域id
  districtId?: number | string
}
export interface ApartmentInterface {
  id: number
  name: string
  introduction: string
  districtId: number
  districtName: string
  cityId: number
  cityName: string
  provinceId: number
  provinceName: string
  addressDetail: string
  latitude: string
  longitude: string
  phone: string
  isRelease: string
  totalRoomCount: number
  freeRoomCount: number
}
// 省市区
export interface RegionInterface {
  id: number
  name: string
}
