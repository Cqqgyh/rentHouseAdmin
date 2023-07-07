import http from '@/utils/http'
import {
  ApartmentInterface,
  ApartmentListQueryInterface,
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
 */
export function getCityList(provinceId: number | string) {
  return http.get<RegionInterface[]>(
    `/admin/region/city/listByProvinceId?id=${provinceId}`,
  )
}
/**
 * @description 查询区域列表
 */
export function getDistrictList(cityId: number | string) {
  return http.get<RegionInterface[]>(
    `/admin/region/district/listByCityId?id=${cityId}`,
  )
}
/**
 * @description 根据id修改公寓的发布状态
 */
export function updateApartmentReleaseStatus(
  id: number | string,
  status: string,
) {
  return http.post(
    `/admin/apartment/updateReleaseStatusById?id=${id}&status=${status}`,
  )
}
