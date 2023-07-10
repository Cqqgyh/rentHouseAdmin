// 分页查询公寓信息列表
import { ReqPage } from '@/api/types'
import { UploadFile } from 'element-plus/es/components/upload/src/upload'
//#region <公寓>
export interface ApartmentListQueryInterface extends ReqPage {
  // 省份id
  provinceId?: number | string
  // 城市id
  cityId?: number | string
  // 区域id
  districtId?: number | string
}
export interface ApartmentInterface {
  id: number | string
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
  facilityInfoIds?: number[]
  // 	公寓配套信息
  facilityInfoList?: FacilityInfoInterface[]
  // 	公寓标签id
  labelIds?: number[]
  // 公寓标签信息
  labelInfoList?: LabelInfoInterface[]
  // 	公寓杂费值id
  feeValueIds?: number[]
  // 	公寓杂费值信息
  feeValueVoList?: FeeInfoInfoInterface['feeValueList']
  // 图片信息
  graphVoList?:
    | {
        url: string
        name: number
      }[]
    | UploadFile[]
}
// 省市区
export interface RegionInterface {
  id: number
  name: string
}
export interface AddressOptionsInterface {
  label: string
  value: string
  location?: { lng: number | string; lat: number | string }
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
// 树形结构
export interface TreeData {
  id?: number | string
  value?: number | string
  label: string
  parentId?: number | string
  children?: TreeData[]
}
//#endregion
//#region <房间>
// 房间请求参数
export interface RoomListQueryInterface extends ReqPage {
  // 省份id
  provinceId?: number | string
  // 城市id
  cityId?: number | string
  // 区域id
  districtId?: number | string
  // 公寓id
  apartmentId?: number | string
}
// 房间的信息
export interface RoomInterface {
  id: number | string
  name: string
  roomNumber: string
  rent: number | string
  apartmentId: number | string
  isRelease: string
  leaseEndDate: string
  checkInStatus: string
  apartmentInfo: Omit<ApartmentInterface, 'totalRoomCount' | 'freeRoomCount'>
}
//#endregion
