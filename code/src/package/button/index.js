/*
 * @Descripttion: 
 * @version: 
 * @Author: kevinzheng
 * @Date: 2021-08-24 10:06:41
 * @LastEditors: kevinzheng
 * @LastEditTime: 2021-10-08 16:30:02
 */
import Button from './src/button';

/* istanbul ignore next */
Button.install = function(Vue) {
  Vue.component(Button.name, Button);
};

export default Button;