/*
 * @Descripttion: 
 * @version: 
 * @Author: kevinzheng
 * @Date: 2021-08-24 10:06:41
 * @LastEditors: kevinzheng
 * @LastEditTime: 2021-08-24 10:07:28
 */
import Button from './src/main';

/* istanbul ignore next */
Button.install = function(Vue) {
  Vue.component(Button.name, Button);
};

export default Button;