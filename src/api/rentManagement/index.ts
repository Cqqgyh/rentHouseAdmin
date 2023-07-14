import http from '@/utils/http'
import {
  AppointmentInfoInterface,
  AppointmentInfoListQueryInterface,
} from '@/api/rentManagement/types'
import { PageRes } from '@/api/types'
import { AppointmentStatus } from '@/enums/constEnums'
//#region <预约看房>
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
/**
 * @description 根据id更新预约状态
 * @param id
 * @param status
 */
export function updateAppointmentStatusById(
  id: number | string,
  status: AppointmentStatus,
) {
  return http.post(
    `/admin/appointment/updateStatusById?id=${id}&status=${status}`,
  )
}
//#endregion
