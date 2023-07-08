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
  districtId: number | string
  districtName: string
  cityId: number | string
  cityName: string
  provinceId: number | string
  provinceName: string
  addressDetail: string
  latitude: number | string
  longitude: number | string
  phone: string
  isRelease: string
  totalRoomCount: number
  freeRoomCount: number
  // 	公寓配套id
  facilityInfoIds?: []
  // 	公寓标签id
  labelIds?: []
  // 	公寓杂费值id
  feeValueIds?: []
  // 图片信息
  graphVoList?: [
    {
      name: ''
      url: ''
    },
  ]
}
// 省市区
export interface RegionInterface {
  id: number
  name: string
}
export interface AddressOptionsInterface {
  label: string
  value: string
  location?: { lng: number; lat: number }
}
// 配套信息
export interface FacilityInfoInterface {
  id: number
  type: string
  name: string
  icon: string | null
}
// 标签信息
export interface LabelInfoInterface {
  id: number
  type: string
  name: string
}
// 杂费值信息
export interface FeeInfoInfoInterface {
  id: number
  name: string
  feeValueList: {
    id: number
    name: string
    unit: string
    feeKeyId: number
  }[]
}
