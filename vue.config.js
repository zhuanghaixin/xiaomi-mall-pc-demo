module.exports = {
    //scss
    css: {
        loaderOptions: {
            sass: {
                prependData: `
     @import '@/assets/scss/config.scss';
     @import '@/assets/scss/reset.scss';
     @import '@/assets/scss/mixin.scss';
     // @import '@/assets/scss/modal.scss';
    
        `
            }
        }
    },
    //接口代理
    devServer: {
        host: 'localhost', //主机
        port: 8080, //端口
        proxy: {
            '/api': {
                target: "http://mall-pre.springboot.cn", //目标地址
                changeOrigin: true, //将主机的点设为原点
                pathRewrite: { //路径转发规则
                    '/api': ''
                }
            }
        }
    }
}
