/*
 * @Descripttion: 
 * @version: 
 * @Author: kevinzheng
 * @Date: 2021-08-19 11:38:17
 * @LastEditors: kevinzheng
 * @LastEditTime: 2021-11-29 10:00:41
 */
import Vue from 'vue'
import App from './App.vue'

import router from './router/index'
import VueRouter from 'vue-router'
import './cocoInstall'


window.$router = router

Vue.config.productionTip = false
Vue.use(VueRouter)

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
