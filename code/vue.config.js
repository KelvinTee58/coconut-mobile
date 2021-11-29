/*
 * @Descripttion: 
 * @version: 
 * @Author: kevinzheng
 * @Date: 2021-10-08 15:46:25
 * @LastEditors: kevinzheng
 * @LastEditTime: 2021-10-08 16:04:35
 */
const path = require("path");
function resolve(dir) {
    return path.join(__dirname, dir);
}
module.exports = {
    lintOnSave: true,
    // 生产环境是否生成 sourceMap 文件
    productionSourceMap: false,
    // 开启 CSS source maps?
    css: {
        sourceMap: false,
    },
    chainWebpack: config => {
        config.resolve.alias
            .set("@", resolve("src"))
            .set("utils", resolve("src/utils"));
    }
};