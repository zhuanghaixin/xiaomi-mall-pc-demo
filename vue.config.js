module.exports = {
    devServer:{
        host:'localhost',
        port:8080,
        proxy:{
            '/activity':{
                target:'https://www.imooc.com',
                changeOrigin:true,
                pathRewrite:{
                    //在App.vue中我想请求 /activity/servicetime ，然后因为proxy '/activity'拦截后，
                    // 我其实请求的是 https://www.imooc.com/activity/servicetime
                    //但是现在呢，我想访问https://www.imooc.com/course/list
                    //所以我需要这样重写
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
