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
    @语法，在es6语法中叫做装饰器，装饰器是一个对类进行处理的函数
## observable函数
    装饰器函数：将普通数据转换成一个可被观测的数据
## computed计算属性
    是一个函数方法，但是当作属性来用；把获取结果的逻辑封装成一个计算属性，会缓存计算结果，多次调用只会计算一次，只有依赖数据改变才会重新计算
## action基本概念
    装饰器，用来修改observable数据
## action-bound绑定
    bound为action绑定this,保证this指向mobx容器对象
## runInAction
    不使用action的时候，直接调用runInAction修改数据
## action-异步action
    如何在action中异步结束后对数据进行修改；1.定义一个新的action函数，在异步中调用；2.直接调用action函数并立即执行；3.使用runInAction函数
## 监视数据的方式
    1.autorun,默认会执行一次，当内部被观测的数据发生改变时候会重新触发执行

    2.when:当满足某个条件时，执行一次，并且只执行一次

    3.reaction:执行一些业务逻辑操作，返回数据给下一个函数使用
## 购物车demo
