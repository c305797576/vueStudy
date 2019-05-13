## vue-cli
- 下载一个全局生成的vue项目的脚手架
```
npm install vue-cli -g
vue init webpack <项目名>
cd 项目名
npm install 
npm run dev
```

## 模块
- nodeJs 模块的规范commonjs
- cmd seajs amd require
- esmodule
- umd 为了做兼容处理
    - 如何定义模块（一个js就是一个模块）
    - 如何导出模块（export）
    - 如何使用模块（import）
    
## 先下载webpack
```$xslt
npm init -y
npm install webpack --save-dev
```
>安装webpack或者less最好不要安装全局的，否则可能导致webpack的版本差异

- 在 package.json中配置一个脚本，这个脚本用的命令是webpack回去当前node_module下
找bin对应的webpack名字让其执行，执行的就是bin/webpack.js，webpack.js需要当前目录
下有个名字叫webpack.config.js的文件，我们通过npm run build执行的目录是当前文件的
目录，所以回去当前目录下找。

## babel转义es6->es5
- 安装babel
```$xslt
npm install babel-core --save-dev
npm instal babel-loader --save-dev
```

## babel-preset-es2015
- 让翻译官拥有解析es6语法的功能
```$xslt
npm install babel-preset-es2015 --save-dev
```
## Cannot find module '@babel/core'
- 回退低版本
```
npm install -D babel-loader@7 babel-core babel-preset-env
```

- 更新到最高版本:
```$xslt
npm install -D babel-loader @babel/core @babel/preset-env webpack
```

## babel-preset-stage-0
- 解析es7语法
```$xslt
npm install babel-preset-stage-0 --save-dev
```

## 解析样式
- css-loader将css解析成模块 将解析的内容插入到style标签内（style-loader）
```$xslt
npm install css-loader style-loader --save-dev
```

## less,sass,stylus(预处理语言)
- less-loader less
- sass-loader
- stylus-loader
```$xslt
npm install less less-loader --save-dev
```

## 解析图片
- file-loader url-loader(是依赖于file-loader)
```$xslt
npm install file-loader url-loader --save-dev
```




