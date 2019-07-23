const webpack = require("webpack");
const path = require("path");


module.exports = {
    outputDir:"./dist",//构建输出目录

    devServer:{
        host:"0.0.0.0",//ip
        port:"8080", //端口
        // proxy:{ //代理方式  注意：需要在连接前面添加"/api".不添加正则识别不了
            // "/api":{
            //     target:"https://api.apiopen.top",
            //     changeOrigin:true,
            //     ws:true,
            //     pathRewrite:{
            //         "^/api":''
            //     }
            // }
        // }
    },
    lintOnSave:false  //取消eslint 验证
}