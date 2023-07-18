/*
 * @Author: cqq 945327638@qq.com
 * @Date: 2023-06-02 08:53:51
 * @LastEditors: cqq 945327638@qq.com
 * @LastEditTime: 2023-06-03 23:13:08
 * @FilePath: \InvestmentAdmin\src\router\devRouter.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
/**
 * @description 📚 路由参数配置简介
 * @param path ==> 菜单路径
 * @param name ==> 菜单别名
 * @param redirect ==> 重定向地址
 * @param component ==> 视图文件路径
 * @param meta ==> 菜单信息
 * @param meta.icon ==> 菜单图标
 * @param meta.title ==> 菜单标题
 * @param meta.activeMenu ==> 当前路由为详情页时，需要高亮的菜单
 * @param meta.isLink ==> 是否外链
 * @param meta.isHide ==> 是否隐藏
 * @param meta.isFull ==> 是否全屏(示例：数据大屏页面)
 * @param meta.isAffix ==> 是否固定在 tabs nav
 * @param meta.isKeepAlive ==> 是否缓存
 * */
// 方便dev环境调试开发的路由
import { RouteRecordRaw } from 'vue-router'
// const LAYOUT = () => import('@/layouts/index.vue')
export const devRoutes: RouteRecordRaw[] = [
  // // 系统权限管理
  // {
  //   name: 'system',
  //   path: '/system',
  //   component: LAYOUT,
  //   redirect: '/system/user',
  //   meta: {
  //     title: '系统管理',
  //     icon: 'Lock',
  //   },
  //   children: [
  //     {
  //       name: 'System/User',
  //       path: '/system/user',
  //       component: () => import('@/views/system/user/user.vue'),
  //       meta: {
  //         title: '用户管理',
  //         icon: 'UserFilled',
  //       },
  //     },
  //     {
  //       name: 'System/Role',
  //       path: '/system/role',
  //       component: () => import('@/views/system/role/role.vue'),
  //       meta: {
  //         title: '角色管理',
  //         icon: 'Avatar',
  //       },
  //     },
  //     {
  //       name: 'System/Permission',
  //       path: '/system/permission',
  //       component: () => import('@/views/system/permission/permission.vue'),
  //       meta: {
  //         title: '菜单管理',
  //         icon: 'Menu',
  //       },
  //     },
  //     {
  //       name: 'System/Post',
  //       path: '/system/post',
  //       component: () => import('@/views/system/post/post.vue'),
  //       meta: {
  //         title: '岗位管理',
  //         icon: 'Menu',
  //       },
  //     },
  //   ],
  // },
  // // 公寓管理
  // {
  //   name: 'apartmentManagement',
  //   path: '/apartmentManagement',
  //   component: LAYOUT,
  //   redirect: '/apartmentManagement/apartmentManagement',
  //   meta: {
  //     title: '公寓管理',
  //     icon: 'UserFilled',
  //   },
  //   children: [
  //     {
  //       name: 'apartmentManagement/apartmentManagement',
  //       path: '/apartmentManagement',
  //       redirect: '/apartmentManagement/apartmentManagement',
  //       meta: {
  //         title: '公寓管理',
  //         icon: 'UserFilled',
  //       },
  //       children: [
  //         {
  //           name: 'apartmentManagement/apartmentManagement',
  //           path: '/apartmentManagement/apartmentManagement',
  //           component: () =>
  //             import(
  //               '@/views/apartmentManagement/apartmentManagement/apartmentManagement.vue'
  //             ),
  //           meta: {
  //             title: '公寓管理',
  //             icon: 'UserFilled',
  //           },
  //           children: [],
  //         },
  //         {
  //           name: 'apartmentManagement/apartmentManagement/addOrEditApartment',
  //           path: '/apartmentManagement/apartmentManagement/addOrEditApartment',
  //           component: () =>
  //             import(
  //               '@/views/apartmentManagement/apartmentManagement/components/addOrEditApartment.vue'
  //             ),
  //           meta: {
  //             title: '公寓详情',
  //             icon: 'Document',
  //             isHide: true,
  //             activeMenu: '/apartmentManagement/apartmentManagement',
  //           },
  //         },
  //       ],
  //     },
  //     {
  //       name: 'apartmentManagement/roomManagement',
  //       path: '/apartmentManagement/roomManagement',
  //       redirect: '/apartmentManagement/roomManagement/roomManagement',
  //       meta: {
  //         title: '房间管理',
  //         icon: 'UserFilled',
  //       },
  //       children: [
  //         {
  //           name: 'apartmentManagement/roomManagement/roomManagement',
  //           path: '/apartmentManagement/roomManagement/roomManagement',
  //           component: () =>
  //             import(
  //               '@/views/apartmentManagement/roomManagement/roomManagement.vue'
  //             ),
  //           meta: {
  //             title: '房间管理',
  //             icon: 'UserFilled',
  //           },
  //           children: [],
  //         },
  //         {
  //           name: 'apartmentManagement/roomManagement/addOrEditRoom',
  //           path: '/apartmentManagement/roomManagement/addOrEditRoom',
  //           component: () =>
  //             import(
  //               '@/views/apartmentManagement/roomManagement/components/addOrEditRoom.vue'
  //             ),
  //           meta: {
  //             title: '房间详情',
  //             icon: 'Document',
  //             isHide: true,
  //             activeMenu: '/apartmentManagement/roomManagement',
  //           },
  //         },
  //       ],
  //     },
  //     {
  //       name: 'apartmentManagement/attributeManagement',
  //       path: '/apartmentManagement/attributeManagement',
  //       component: () =>
  //         import(
  //           '@/views/apartmentManagement/attributeManagement/attributeManagement.vue'
  //         ),
  //       meta: {
  //         title: '属性管理',
  //         icon: 'UserFilled',
  //       },
  //       children: [],
  //     },
  //   ],
  // },
  // // 租赁管理
  // {
  //   name: 'rentManagement',
  //   path: '/rentManagement',
  //   component: LAYOUT,
  //   redirect: '/rentManagement/appointment',
  //   meta: {
  //     title: '租赁管理',
  //     icon: 'UserFilled',
  //   },
  //   children: [
  //     {
  //       name: 'rentManagement/appointment',
  //       path: '/rentManagement/appointment',
  //       component: () =>
  //         import('@/views/rentManagement/appointment/appointment.vue'),
  //       meta: {
  //         title: '预约看房',
  //         icon: 'UserFilled',
  //       },
  //       children: [],
  //     },
  //     {
  //       name: 'rentManagement/term',
  //       path: '/rentManagement/term',
  //       redirect: '/rentManagement/term',
  //       meta: {
  //         title: '租约管理',
  //         icon: 'UserFilled',
  //       },
  //       children: [
  //         {
  //           name: 'rentManagement/term/termManagement',
  //           path: '/rentManagement/term/termManagement',
  //           component: () => import('@/views/rentManagement/term/term.vue'),
  //           meta: {
  //             title: '租约管理',
  //             icon: 'UserFilled',
  //           },
  //           children: [],
  //         },
  //         {
  //           name: 'rentManagement/term/addOrEditTerm',
  //           path: '/rentManagement/term/addOrEditTerm',
  //           component: () =>
  //             import(
  //               '@/views/rentManagement/term/components/addOrEditTerm.vue'
  //             ),
  //           meta: {
  //             title: '租约详情',
  //             icon: 'Document',
  //             isHide: true,
  //             activeMenu: '/rentManagement/term/termManagement',
  //           },
  //         },
  //       ],
  //     },
  //   ],
  // },
  // // 用户管理
  // {
  //   name: 'userManagement',
  //   path: '/userManagement',
  //   component: LAYOUT,
  //   redirect: '/userManagement/userManagement',
  //   meta: {
  //     title: '用户管理',
  //     icon: 'UserFilled',
  //   },
  //   children: [
  //     {
  //       name: 'userManagement/userManagement',
  //       path: '/userManagement/userManagement',
  //       component: () => import('@/views/userManagement/userManagement.vue'),
  //       meta: {
  //         title: '用户管理',
  //         icon: 'UserFilled',
  //       },
  //       children: [],
  //     },
  //   ],
  // },
]
