## 项目用到less
```angular2html
npm install less less-loader axios vuex bootstrap@3
```
- mock模拟数据
- api代表所有接口
- base 基础组件
- components 页面组件

## 热门图书的功能
- 先写服务端，确保数据能正常返回
- 增加api方法，实现调取数据的功能
- 在哪个组建者应用这个api，如果是一个基础组件需要用这些数据，在使用这个组件的
父级中调用这个方法，将数据传递给组件
- 写一个基础组件
  - 1.创建.vue文件
  - 2.在需要使用这个组件的父级中引用这个组件
  - 3.在组建者注册
  - 4.以标签的形式引入
  

## 路由元信息


## 下拉加载
- 默认每次给5条。前端告诉后台现在要从第几条开始给我
- /page?offset=5
- 后台返回是否有更多

## coding split 代码分割


## TypeError: Cannot read property 'compilation' of undefined
- 安装环境的使用一定要-save-dev或者是-save
  - 1.首先定位到uglifyjs-webpack-plugin中的index.js文件中，将项目中的该包升级或者降级到1.0.0版本
  ```
  npm i uglifyjs-webpack-plugin@1.0.0 --save
  ```
  - 2.然后定位到optimize-css-assets-webpack-plugin\node_modules\last-call-webpack-plugin\src\index.js文件报错
  ```
    npm i optimize-css-assets-webpack-plugin@2 --save
  ```
  - 3.这个时候报缺少cssnano包，直接安装上即可
  ```angular2html
    npm i cssnano --save-dev
  ```

