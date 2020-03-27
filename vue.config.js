module.exports = {
    devServer:{
        host:'localhost',
        port:8080,
        proxy:{
            '/activity':{
                target:'https://www.imooc.com',
                changeOrigin:false,
                pathRewrite:{
                    '^/activity':'/course/list'
                }
            }
        }
    },
    // publicPath:'/app',
    // outputDir:'dist',
    // indexPath:'index2.html',
    // lintOnSave:false,
    // productionSourceMap:true,
    // chainWebpack:(config)=>{
    //     config.plugins.delete('prefetch');
    // }
}
