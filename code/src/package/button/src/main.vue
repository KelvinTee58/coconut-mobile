<!--
 * @Descripttion: 
 * @version: 
 * @Author: kevinzheng
 * @Date: 2021-08-24 10:07:14
 * @LastEditors: kevinzheng
 * @LastEditTime: 2021-08-24 10:14:23
-->
<template>
  <button
    class="coo-button"
    @click="handleClick"
    :disabled="buttonDisabled || loading"
    :type="nativeType"
    :class="[
      type ? 'Coo-button--' + type : '',
      {
        'is-disabled': buttonDisabled,
        'is-loading': loading,
        'is-plain': plain,
        'is-round': round,
        'is-circle': circle,
      },
    ]"
  >
    <i class="el-icon-loading" v-if="loading"></i>
    <i :class="icon" v-if="icon && !loading"></i>
    <span v-if="$slots.default"><slot></slot></span>
  </button>
</template>

<script>
export default {
  //import引入的组件需要注入到对象中才能使用
  name: "CooButton",
  props: {
    type: {
      type: String,
      default: "default",
    },
    size: String,
    icon: {
      type: String,
      default: "",
    },
    nativeType: {
      type: String,
      default: "button",
    },
    loading: Boolean,
    disabled: Boolean,
    plain: Boolean,
    round: Boolean,
    circle: Boolean,
  },
  //监听属性 类似于data概念
  computed: {
    buttonDisabled() {
      return this.disabled || (this.elForm || {}).disabled;
    },
  },
  //方法集合
  methods: {
    handleClick(evt) {
      this.$emit("click", evt);
    },
  },
};
</script>
<style lang='scss' scoped>
//@import url(); 引入公共css类
</style>