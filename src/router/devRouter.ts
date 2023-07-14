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
const LAYOUT = () => import('@/layouts/index.vue')
export const devRoutes: RouteRecordRaw[] = [
  // 公寓管理
  {
    name: 'apartmentManagement',
    path: '/apartmentManagement',
    component: LAYOUT,
    redirect: '/apartmentManagement/apartmentManagement',
    meta: {
      title: '公寓管理',
      icon: 'UserFilled',
    },
    children: [
      {
        name: 'apartmentManagement/apartmentManagement',
        path: '/apartmentManagement',
        redirect: '/apartmentManagement/apartmentManagement',
        meta: {
          title: '公寓管理',
          icon: 'UserFilled',
        },
        children: [
          {
            name: 'apartmentManagement/apartmentManagement',
            path: '/apartmentManagement/apartmentManagement',
            component: () =>
              import(
                '@/views/apartmentManagement/apartmentManagement/apartmentManagement.vue'
              ),
            meta: {
              title: '公寓管理',
              icon: 'UserFilled',
            },
            children: [],
          },
          {
            name: 'apartmentManagement/apartmentManagement/addOrEditApartment',
            path: '/apartmentManagement/apartmentManagement/addOrEditApartment',
            component: () =>
              import(
                '@/views/apartmentManagement/apartmentManagement/components/addOrEditApartment.vue'
              ),
            meta: {
              title: '公寓详情',
              icon: 'Document',
              isHide: true,
              activeMenu: '/apartmentManagement/apartmentManagement',
            },
          },
        ],
      },
      {
        name: 'apartmentManagement/roomManagement',
        path: '/apartmentManagement/roomManagement',
        redirect: '/apartmentManagement/roomManagement/roomManagement',
        meta: {
          title: '房间管理',
          icon: 'UserFilled',
        },
        children: [
          {
            name: 'apartmentManagement/roomManagement/roomManagement',
            path: '/apartmentManagement/roomManagement/roomManagement',
            component: () =>
              import(
                '@/views/apartmentManagement/roomManagement/roomManagement.vue'
              ),
            meta: {
              title: '房间管理',
              icon: 'UserFilled',
            },
            children: [],
          },
          {
            name: 'apartmentManagement/roomManagement/addOrEditRoom',
            path: '/apartmentManagement/roomManagement/addOrEditRoom',
            component: () =>
              import(
                '@/views/apartmentManagement/roomManagement/components/addOrEditRoom.vue'
              ),
            meta: {
              title: '房间详情',
              icon: 'Document',
              isHide: true,
              activeMenu: '/apartmentManagement/roomManagement',
            },
          },
        ],
      },
      {
        name: 'apartmentManagement/attributeManagement',
        path: '/apartmentManagement/attributeManagement',
        component: () =>
          import(
            '@/views/apartmentManagement/attributeManagement/attributeManagement.vue'
          ),
        meta: {
          title: '属性管理',
          icon: 'UserFilled',
        },
        children: [],
      },
    ],
  },
  // 租赁管理
  {
    name: 'rentManagement',
    path: '/rentManagement',
    component: LAYOUT,
    redirect: '/rentManagement/appointment',
    meta: {
      title: '租赁管理',
      icon: 'UserFilled',
    },
    children: [
      {
        name: 'rentManagement/appointment',
        path: '/rentManagement/appointment',
        component: () =>
          import('@/views/rentManagement/appointment/appointment.vue'),
        meta: {
          title: '预约看房',
          icon: 'UserFilled',
        },
        children: [],
      },
      {
        name: 'rentManagement/term',
        path: '/rentManagement/term',
        redirect: '/rentManagement/term',
        meta: {
          title: '租约管理',
          icon: 'UserFilled',
        },
        children: [
          {
            name: 'rentManagement/term/termManagement',
            path: '/rentManagement/term/termManagement',
            component: () => import('@/views/rentManagement/term/term.vue'),
            meta: {
              title: '租约管理',
              icon: 'UserFilled',
            },
            children: [],
          },
          {
            name: 'rentManagement/term/addOrEditTerm',
            path: '/rentManagement/term/addOrEditTerm',
            component: () =>
              import(
                '@/views/rentManagement/term/components/addOrEditTerm.vue'
              ),
            meta: {
              title: '租约详情',
              icon: 'Document',
              isHide: true,
              activeMenu: '/rentManagement/term/termManagement',
            },
          },
        ],
      },
    ],
  },
  // // 网站概述
  // {
  //   name: 'websiteOverview',
  //   path: '/websiteOverview',
  //   component: LAYOUT,
  //   redirect: '/websiteOverview/websiteOverview',
  //   meta: {
  //     title: '网站概述',
  //     icon: 'Management',
  //   },
  //   children: [
  //     {
  //       name: 'websiteOverview/websiteOverview',
  //       path: '/websiteOverview/websiteOverview',
  //       component: () => import('@/views/websiteOverview/websiteOverview.vue'),
  //       meta: {
  //         title: '网站概述',
  //         icon: 'Management',
  //       },
  //     },
  //   ],
  // },
  // // 流量
  // {
  //   name: 'websiteTraffic',
  //   path: '/websiteTraffic',
  //   component: LAYOUT,
  //   redirect: '/websiteTraffic/dailyData',
  //   meta: {
  //     title: '流量',
  //     icon: 'TrendCharts',
  //   },
  //   children: [
  //     {
  //       name: 'websiteTraffic/dailyData',
  //       path: '/websiteTraffic/dailyData',
  //       component: () =>
  //         import('@/views/websiteTraffic/dailyData/dailyData.vue'),
  //       meta: {
  //         title: '日流量',
  //         icon: 'TrendCharts',
  //       },
  //     },
  //     {
  //       name: 'websiteTraffic/weeklyData',
  //       path: '/websiteTraffic/weeklyData',
  //       component: () =>
  //         import('@/views/websiteTraffic/weeklyData/weeklyData.vue'),
  //       meta: {
  //         title: '周流量',
  //         icon: 'TrendCharts',
  //       },
  //     },
  //     {
  //       name: 'websiteTraffic/monthlyData',
  //       path: '/websiteTraffic/monthlyData',
  //       component: () =>
  //         import('@/views/websiteTraffic/monthlyData/monthlyData.vue'),
  //       meta: {
  //         title: '月流量',
  //         icon: 'TrendCharts',
  //       },
  //     },
  //   ],
  // },
  // // 活跃度
  // {
  //   name: 'liveness',
  //   path: '/liveness',
  //   component: LAYOUT,
  //   redirect: '/liveness/activeUserRetain/activeUserRetain',
  //   meta: {
  //     title: '活跃度',
  //     icon: 'DataLine',
  //   },
  //   children: [
  //     {
  //       name: 'liveness/newUserRetain',
  //       path: '/liveness/newUserRetain',
  //       component: () =>
  //         import('@/views/liveness/newUserRetain/newUserRetain.vue'),
  //       meta: {
  //         title: '新增用户留存',
  //         icon: 'UserFilled',
  //       },
  //     },
  //     {
  //       name: 'liveness/activeUserRetain',
  //       path: '/liveness/activeUserRetain',
  //       component: () =>
  //         import('@/views/liveness/activeUserRetain/activeUserRetain.vue'),
  //       meta: {
  //         title: '活跃用户留存',
  //         icon: 'Stamp',
  //       },
  //     },
  //   ],
  // },
  // // 产品黏性
  // {
  //   name: 'productStickiness',
  //   path: '/productStickiness',
  //   component: LAYOUT,
  //   redirect: '/productStickiness/productStickiness',
  //   meta: {
  //     title: '产品黏性',
  //     icon: 'MagicStick',
  //   },
  //   children: [
  //     {
  //       name: 'productStickiness/productStickiness',
  //       path: '/productStickiness/productStickiness',
  //       component: () =>
  //         import(
  //           '@/views/productStickiness/productStickiness/productStickiness.vue'
  //         ),
  //       meta: {
  //         title: '产品黏性',
  //         icon: 'MagicStick',
  //       },
  //     },
  //   ],
  // },
  // // 来源分析
  // {
  //   name: 'sourceAnalysis',
  //   path: '/sourceAnalysis',
  //   component: LAYOUT,
  //   redirect: '/sourceAnalysis/sourceAnalysis',
  //   meta: {
  //     title: '来源分析',
  //     icon: 'ScaleToOriginal',
  //   },
  //   children: [
  //     {
  //       name: 'sourceAnalysis/sourceAnalysis',
  //       path: '/sourceAnalysis/sourceAnalysis',
  //       component: () =>
  //         import('@/views/sourceAnalysis/sourceAnalysis/sourceAnalysis.vue'),
  //       meta: {
  //         title: '来源分析',
  //         icon: 'ScaleToOriginal',
  //       },
  //     },
  //   ],
  // },
  // // 用户分析
  // {
  //   name: 'userAnalysis',
  //   path: '/userAnalysis',
  //   component: LAYOUT,
  //   redirect: '/userAnalysis/userPortrait',
  //   meta: {
  //     title: '用户分析',
  //     icon: 'DataAnalysis',
  //   },
  //   children: [
  //     {
  //       name: 'userAnalysis/userPortrait',
  //       path: '/userAnalysis/userPortrait',
  //       component: () =>
  //         import('@/views/userAnalysis/userPortrait/userPortrait.vue'),
  //       meta: {
  //         title: '用户画像',
  //         icon: 'User',
  //       },
  //     },
  //     {
  //       name: 'userAnalysis/mainFeatures',
  //       path: '/userAnalysis/mainFeatures',
  //       component: () =>
  //         import('@/views/userAnalysis/mainFeatures/mainFeatures.vue'),
  //       meta: {
  //         title: '主要功能',
  //         icon: 'Document',
  //       },
  //     },
  //     {
  //       name: 'userAnalysis/hotFeatures',
  //       path: '/userAnalysis/hotFeatures',
  //       component: () =>
  //         import('@/views/userAnalysis/hotFeatures/hotFeatures.vue'),
  //       meta: {
  //         title: '热门功能',
  //         icon: 'DocumentRemove',
  //       },
  //     },
  //     {
  //       name: 'userAnalysis/pageAnalysis',
  //       path: '/userAnalysis/pageAnalysis',
  //       component: () =>
  //         import('@/views/userAnalysis/pageAnalysis/pageAnalysis.vue'),
  //       meta: {
  //         title: '页面分析',
  //         icon: 'Reading',
  //       },
  //     },
  //   ],
  // },
]
