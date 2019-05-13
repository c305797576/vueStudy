//webpack必须采用commonjs写法
let path=require('path');
module.exports={
    entry:{
        main:'./src/main.js',
        main1:'./src/main1.js',
    }   //打包的入口文件，webpack会自动查找相关的依赖进行打包
    ,output:{
        filename:'[name].js', //打包后的名字
        path:path.resolve('./dist') //必须是绝对路径
    },
    //模块的解析规则
    //-js 匹配所有的js 用babel-loader转义 排除掉node_modules
    module:{
        rules:[
            {test:/\.js$/,use:'babel-loader',exclude:/node_modules/}
        ]
    }

};