import { AppointmentStatus } from '@/enums/constEnums'
import { ApartmentInterface } from '@/api/apartmentManagement/types'
import { ReqPage } from '@/api/types'
// 预约信息
export interface AppointmentInfoInterface {
  id: number | string
  userId: number | string
  name: string
  phone: string
  apartmentId: number | string
  appointmentTime: string
  additionalInfo: string
  appointmentStatus: AppointmentStatus
  apartmentInfo: Omit<ApartmentInterface, 'totalRoomCount' | 'freeRoomCount'>
}
export interface AppointmentInfoListQueryInterface extends ReqPage {
  // 省份id
  provinceId?: number | string
  // 城市id
  cityId?: number | string
  // 区域id
  districtId?: number | string
  // 公寓id
  apartmentId?: number | string
  // 预约用户姓名
  name?: string
  // 预约用户手机号码
  phone?: string
}
