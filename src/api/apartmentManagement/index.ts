import http from '@/utils/http'
import {
  ApartmentInterface,
  ApartmentListQueryInterface,
  FacilityInfoInterface,
  FeeInfoInfoInterface,
  LabelInfoInterface,
  RegionInterface,
} from '@/api/apartmentManagement/types'
import { PageRes } from '@/api/types'

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
  status: string,
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
 */
export function getFacilityInfoList() {
  return http.get<FacilityInfoInterface[]>(`/admin/facility/list`)
}
/**
 * @description 查询标签信息列表
 */
export function getLabelInfoList() {
  return http.get<LabelInfoInterface[]>(`/admin/label/list`)
}
/**
 * @description 查询杂费信息列表
 */
export function getFeeInfoList() {
  return http.get<FeeInfoInfoInterface[]>(`/admin/fee/list`)
}
