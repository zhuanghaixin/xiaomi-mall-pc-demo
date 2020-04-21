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
    },
    // 默认情况下，Vue CLI 会假设你的应用是被部署在一个域名的根路径上，例如 https://www.my-app.com/。如果应用被部署在一个子路径上，你就需要用这个选项指定这个子路径。例如，如果你的应用被部署在 https://www.my-app.com/my-app/，则设置 publicPath 为 /my-app/。    publicPath: '/app',
    //生成dest目录  默认是dist目录
    //outputDirL:'dest',
    // 指定生成的 index.html 的输出路径 (相对于 outputDir)。也可以是一个绝对路径。
    //indexPath:'index.html'

}
