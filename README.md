# mobx-study
## Mobx介绍
    1.一个简单的，可扩展的js状态管理库，MobX >=5 版本运行在任何支持 ES6 proxy 的浏览器

    2.核心思想：任何源自应用状态的东西都应该自动的获得

    3.数据操作流程：视图中调用actions-actions修改state-更新计算属性Computed values-更新视图Reactions
## 初始化
    1.create-react-app mobx-demo 初始化项目

    2.react-app-rewired:修改webpack的默认配置项；customize-cra:提供webpack配置插件;@babel/plugin-proposal-decorators：提供es6装饰器类的支持；yarn add -D react-app-rewired customize-cra @babel/plugin-proposal-decorators

    3.在项目根目录下创建config-overrides.js,并写入以下内容
      const { override, addDecoratorsLegacy} = require("customize-cra")
      module.exports = override(
          addDecoratorsLegacy()
      )
    
    4.替换package.json中scripts脚本：react-scripts改成react-app-rewired

    5.启动项目：yarn start;报错ERR_OSSL_EVP_UNSUPPORTED,降低版本；node --openssl-legacy-provider ./node_modules/.bin/gatsby build

    6.安装mobx: yarn add mobx mobx-react
## 装饰器语法
## observable函数
    1.装饰器函数：将普通数据转换成一个可被观测的数据

    2.
## computed计算属性
## action基本概念
## action-bound绑定
## action-runInAction
## action-异步action
## 监视数据的方式
## 购物车demo
