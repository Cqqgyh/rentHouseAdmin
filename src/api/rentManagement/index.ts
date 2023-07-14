import http from '@/utils/http'
import {
  AppointmentInfoInterface,
  AppointmentInfoListQueryInterface,
} from '@/api/rentManagement/types'
import { PageRes } from '@/api/types'
/**
 * @description 分页查询预约信息
 * @param params
 */
export function getAppointmentInfoList(
  params: AppointmentInfoListQueryInterface,
) {
  return http.get<PageRes<AppointmentInfoInterface[]>>(
    `/admin/appointment/page`,
    {
      current: params.pageNum,
      size: params.pageSize,
      provinceId: params.provinceId,
      cityId: params.cityId,
      districtId: params.districtId,
      apartmentId: params.apartmentId,
      name: params.name,
      phone: params.phone,
    },
  )
}
