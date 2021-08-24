/*
 * @Descripttion: 
 * @version: 
 * @Author: kevinzheng
 * @Date: 2021-08-19 16:45:05
 * @LastEditors: kevinzheng
 * @LastEditTime: 2021-08-19 17:10:36
 */

import Vue from 'vue'
import Router from 'vue-router'
import defaultLayout from '@/layouts/default'
import errorLayout from '@/layouts/error'

Vue.use(Router)
const router = new Router({
    scrollBehavior() {
      return { x: 0, y: 0 }
    },
    routes: [
      {
        path: '/',
        redirect: 'home',
        component: defaultLayout,
        children: [
          {
            path: '/home',
            meta: {
              title: 'home',
            },
            component: () => import('../views/home'),
          },
        ],
      },
      {
        path: '/error',
        redirect: 'error/404',
        component:errorLayout,
        children: [
          {
            path: '/error/404',
            meta: {
              title: 'Error 404',
            },
            component: () => import('../views/error/404'),
          },
        ],
      },
      // Redirect to 404
      {
        path: '*',
        redirect: 'error/404',
        hidden: true,
      },
    ],
  })

  export default router