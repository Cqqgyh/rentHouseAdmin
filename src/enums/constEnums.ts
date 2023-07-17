/*
 * @Author: cqq 945327638@qq.com
 * @Date: 2023-05-23 10:34:35
 * @LastEditors: cqq 945327638@qq.com
 * @LastEditTime: 2023-07-14 09:12:05
 * @FilePath: \listen-to-books-admin\src\enums\constEnums.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
export function getLabelByValue(
  arr: {
    label: string
    value: string | number
  }[],
  value: string | number,
): string {
  const item = arr.find((item) => item.value === value)
  return item ? item.label : ''
}
// 按钮权限
export const ButtonPermission = {
  // 用户管理
  SysUser: {
    List: 'bnt.sysUser.list',
    Add: 'bnt.sysUser.add',
    Update: 'bnt.sysUser.update',
    Remove: 'bnt.sysUser.remove',
    AssignRole: 'bnt.sysUser.assignRole',
  },
  // 角色管理
  SysRole: {
    List: 'bnt.sysRole.list',
    Add: 'bnt.sysRole.add',
    Update: 'bnt.sysRole.update',
    Remove: 'bnt.sysRole.remove',
    AssignAuth: 'bnt.sysRole.assignAuth',
  },
  // 菜单管理
  SysMenu: {
    List: 'bnt.sysMenu.list',
    Add: 'bnt.sysMenu.add',
    Update: 'bnt.sysMenu.update',
    Remove: 'bnt.sysMenu.remove',
  },
  // 部门管理
  SysDept: {
    List: 'bnt.sysDept.list',
    Add: 'bnt.sysDept.add',
    Update: 'bnt.sysDept.update',
    Remove: 'bnt.sysDept.remove',
  },
  // 岗位管理
  SysPost: {
    List: 'bnt.sysPost.list',
    Add: 'bnt.sysPost.add',
    Update: 'bnt.sysPost.update',
    Remove: 'bnt.sysPost.remove',
  },
  // 操作日志
  SysLog: {
    OperLogList: 'bnt.sysOperLog.list',
    LoginLogList: 'bnt.sysLoginLog.list',
  },
}
// 公寓的发布状态
export enum ApartmentReleaseStatus {
  NOT_RELEASED = 0,
  RELEASED = 1,
}
// 公寓的发布状态
export const ApartmentReleaseStatusMap = [
  { label: '未发布', value: ApartmentReleaseStatus.NOT_RELEASED },
  { label: '已发布', value: ApartmentReleaseStatus.RELEASED },
]
// 房间的发布状态
export enum RoomReleaseStatus {
  NOT_RELEASED = 0,
  RELEASED = 1,
}
export const RoomReleaseStatusMap = [
  { label: '未发布', value: RoomReleaseStatus.NOT_RELEASED },
  { label: '已发布', value: RoomReleaseStatus.RELEASED },
]
// 房间的入住状态
export enum RoomCheckInStatus {
  NOT_CHECK_IN = '未入住',
  CHECK_IN = '已入住',
}
export const RoomCheckInStatusMap = [
  { label: '未入住', value: RoomCheckInStatus.NOT_CHECK_IN },
  { label: '已入住', value: RoomCheckInStatus.CHECK_IN },
]
//type: '公寓' | '房间'
export enum BuildingType {
  APARTMENT = 1,
  ROOM = 2,
}
export const BuildingTypeTypeMap = [
  { label: '公寓', value: BuildingType.APARTMENT },
  { label: '房间', value: BuildingType.ROOM },
]
// 预约状态,可用值:1,2,3,4
export enum AppointmentStatus {
  WAITING = 1,
  CANCELLED = 2,
  VIEWED = 3,
  EXPIRED = 4,
}
export const AppointmentStatusMap = [
  { label: '待看房', value: AppointmentStatus.WAITING },
  { label: '已取消', value: AppointmentStatus.CANCELLED },
  { label: '已看房', value: AppointmentStatus.VIEWED },
  { label: '已过期', value: AppointmentStatus.EXPIRED },
]
// 	租约状态,可用值:1,2,3,4,5,6
export enum AgreementStatus {
  WAITING = 1,
  SIGNED = 2,
  CANCELLED = 3,
  EXPIRED = 4,
  TO_BE_CONFIRMED = 5,
  CONFIRMED = 6,
}
export const AgreementStatusMap = [
  { label: '签约待确认', value: AgreementStatus.WAITING },
  { label: '已签约', value: AgreementStatus.SIGNED },
  { label: '已取消', value: AgreementStatus.CANCELLED },
  { label: '已到期', value: AgreementStatus.EXPIRED },
  { label: '退租待确认', value: AgreementStatus.TO_BE_CONFIRMED },
  { label: '已退租', value: AgreementStatus.CONFIRMED },
]
// 租约来源,可用值:1,2
export enum AgreementSource {
  NEW = 1,
  RENEW = 2,
}
export const AgreementSourceMap = [
  { label: '新签', value: AgreementSource.NEW },
  { label: '续约', value: AgreementSource.RENEW },
]
//	用户账号状态 "0": "禁用","1": "正常"
export enum UserStatus {
  DISABLED = 0,
  NORMAL = 1,
}
export const UserStatusMap = [
  { label: '禁用', value: UserStatus.DISABLED },
  { label: '正常', value: UserStatus.NORMAL },
]
// 系统用户类型 "0": "管理员","1": "普通用户"
export enum SystemUserType {
  ADMIN = 0,
  NORMAL = 1,
}
export const SystemUserTypeMap = [
  { label: '管理员', value: SystemUserType.ADMIN },
  { label: '普通用户', value: SystemUserType.NORMAL },
]
// 系统用户状态  "0": "禁用","1": "正常"
export enum SystemUserStatus {
  DISABLED = 0,
  NORMAL = 1,
}
export const SystemUserStatusMap = [
  { label: '禁用', value: SystemUserStatus.DISABLED },
  { label: '正常', value: SystemUserStatus.NORMAL },
]
