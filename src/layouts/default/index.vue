<!--
 * @Descripttion: 基础layout
 * @version: 1.0
 * @Author: kevinzheng
 * @Date: 2021-08-19 16:27:28
 * @LastEditors: kevinzheng
 * @LastEditTime: 2021-08-19 17:11:36
-->
<template>
  <div class="layout-defalut">
    <div class="layout-defalut__nav">
      <div class="layout-nav__logo">
          <img src="/image/icon/logo.png">
      </div>
      <div class="layout-nav__select"></div>
      <div class="layout-nav__inputSelect"></div>
    </div>
    <aside class="layout-defalut__aside">
    </aside>
    <div class="layout-defalut__main">
        <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  //import引入的组件需要注入到对象中才能使用
  components: {},
  data() {
    //这里存放数据
    return {};
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {},
  //方法集合
  methods: {},
  beforeCreate() {}, //生命周期 - 创建之前
  beforeMount() {}, //生命周期 - 挂载之前
  beforeUpdate() {}, //生命周期 - 更新之前
  updated() {}, //生命周期 - 更新之后
  beforeDestroy() {}, //生命周期 - 销毁之前
  destroyed() {}, //生命周期 - 销毁完成
  activated() {}, //如果页面有keep-alive缓存功能，这个函数会触发
};
</script>
<style lang='scss' scoped>
//@import url(); 引入公共css类
</style>