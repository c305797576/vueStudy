//webpack必须采用commonjs写法
let path=require('path');
module.exports={
    entry:'./src/main.js'   //打包的入口文件，webpack会自动查找相关的依赖进行打包
    ,output:{
        filename:'bundle.js',//打包后的名字
        path:path.resolve('./dist') //必须是绝对路径
    },
    //模块的解析规则
    //-js 匹配所有的js 用babel-loader转义 排除掉node_modules
    module:{
        rules:[
            {
                test:/\.js$/,
                use:{
                    loader:'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                },
                exclude:/node_modules/
            },
            //use时从右往左写
            {test:/\.css$/,use:['style-loader','css-loader']},
            {test:/\.less$/,use:['style-loader','css-loader','less-loader']},
            //转化base64只在8192字节以下转化，其他情况输出图片
            {test:/\.(jpg|png|gif|jpeg)$/,use:'url-loader?limit=8192'},
            {test:/\.(eot|svg|woff|woff2|wtf)$/,use:'url-loader'}
        ]
    },
    mode: 'production'

};