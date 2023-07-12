import http from '@/utils/http'
import {
  ApartmentInterface,
  ApartmentListQueryInterface,
  AttrInfoInfoInterface,
  FacilityInfoInterface,
  FeeInfoInfoInterface,
  LabelInfoInterface,
  PaymentInfoInterface,
  RegionInterface,
  RoomInterface,
  RoomListQueryInterface,
  SaveRoomInterface,
  TermInfoInterface,
} from '@/api/apartmentManagement/types'
import { PageRes } from '@/api/types'
import { ApartmentReleaseStatus, RoomReleaseStatus } from '@/enums/constEnums'
//#region <公寓>
/**
 * @description 分页查询公寓信息列表
 * @param params
 */
export function getApartmentList(params: ApartmentListQueryInterface) {
  return http.get<PageRes<ApartmentInterface[]>>(`/admin/apartment/pageItem`, {
    current: params.pageNum,
    size: params.pageSize,
    provinceId: params.provinceId,
    cityId: params.cityId,
    districtId: params.districtId,
  })
}
/**
 * @description 查询省份列表
 */
export function getProvinceList() {
  return http.get<RegionInterface[]>(`/admin/region/province/list`)
}
/**
 * @description 查询城市列表
 * @param provinceId
 */
export function getCityList(provinceId: number | string) {
  return http.get<RegionInterface[]>(
    `/admin/region/city/listByProvinceId?id=${provinceId}`,
  )
}
/**
 * @description 查询区域列表
 * @param cityId
 */
export function getDistrictList(cityId: number | string) {
  return http.get<RegionInterface[]>(
    `/admin/region/district/listByCityId?id=${cityId}`,
  )
}
/**
 * @description 根据id修改公寓的发布状态
 * @param id
 * @param status
 */
export function updateApartmentReleaseStatus(
  id: number | string,
  status: ApartmentReleaseStatus,
) {
  return http.post(
    `/admin/apartment/updateReleaseStatusById?id=${id}&status=${status}`,
  )
}
/**
 * @description 保存或更新公寓信息
 * @param params
 */
export function saveOrUpdateApartment(params: Partial<ApartmentInterface>) {
  return http.post(`/admin/apartment/saveOrUpdate`, params)
}
/**
 * @description 根据id删除公寓
 * @param id
 */
export function deleteApartmentById(id: number | string) {
  return http.delete(`/admin/apartment/removeById?id=${id}`)
}
/**
 * @description 查询配套信息列表
 * @param type
 */
export function getFacilityInfoList(type: '公寓' | '房间' | null = null) {
  return http.get<FacilityInfoInterface[]>(
    `/admin/facility/list${type ? `?type=${type}` : ''}`,
  )
}
/**
 * @description 查询标签信息列表
 */
export function getLabelInfoList(type: '公寓' | '房间') {
  return http.get<LabelInfoInterface[]>(`/admin/label/list?type=${type}`)
}
/**
 * @description 查询杂费信息列表
 */
export function getFeeInfoList() {
  return http.get<FeeInfoInfoInterface[]>(`/admin/fee/list`)
}
/**
 * @description 根据id获取公寓信息
 */
export function getApartmentById(id: number | string) {
  return http.get<ApartmentInterface>(`/admin/apartment/getDetailById?id=${id}`)
}
//#endregion
//#region <房间>
/**
 * @description 分页查询房间的信息列表
 * @param params
 */
export function getRoomList(params: RoomListQueryInterface) {
  return http.get<PageRes<RoomInterface[]>>(`/admin/room/pageItem`, {
    current: params.pageNum,
    size: params.pageSize,
    provinceId: params.provinceId,
    cityId: params.cityId,
    districtId: params.districtId,
    apartmentId: params.apartmentId,
  })
}
/**
 * @description 根据区县id查询公寓信息列表
 * @param districtId
 */
export function getApartmentListByDistrictId(districtId: number | string) {
  return http.get<ApartmentInterface[]>(
    `/admin/apartment/listInfoByDistrictId?id=${districtId}`,
  )
}
/**
 * @description 根据id修改房间发布状态
 * @param id
 * @param status
 */
export function updateRoomReleaseStatus(
  id: number | string,
  status: RoomReleaseStatus,
) {
  return http.post(
    `/admin/room/updateReleaseStatusById?id=${id}&status=${status}`,
  )
}
/**
 * @description 根据id删除房间信息
 * @param id
 */
export function deleteRoomById(id: number | string) {
  return http.delete(`/admin/room/removeById?id=${id}`)
}
/**
 * @description 根据id获取房间信息
 * @param id
 */
export function getRoomById(id: number | string) {
  return http.get<RoomInterface>(`/admin/room/getDetailById?id=${id}`)
}
/**
 * @description 保存或更新房间的信息
 */
export function saveOrUpdateRoom(params: SaveRoomInterface) {
  return http.post(`/admin/room/saveOrUpdate`, params)
}
/**
 * @description 查询属性信息列表
 */
export function getAttrInfoList() {
  return http.get<AttrInfoInfoInterface[]>(`/admin/attr/list`)
}
/**
 * @description 查询支付方式列表
 */
export function getPaymentList() {
  return http.get<PaymentInfoInterface[]>(`/admin/payment/list`)
}
/**
 * @description 查询租期列表
 */
export function getTermList() {
  return http.get<TermInfoInterface[]>(`/admin/term/list`)
}
//#endregion
