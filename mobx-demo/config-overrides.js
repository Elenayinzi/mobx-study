//提供webpack一些配置项插件，用来重写webpack
const { override, addDecoratorsLegacy} = require("customize-cra")
module.exports = override(
    //配置bable装饰器插件到bable中
    addDecoratorsLegacy()
)