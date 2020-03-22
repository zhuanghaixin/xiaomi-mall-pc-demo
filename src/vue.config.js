module.exports = {
    devServer: {
        host: 'localhost', //主机
        port: 8080, //端口
        proxy: {
            '/api': {
                target: "https://test-www.imooc.com", //目标地址
                changeOrigin: true, //将主机的点设为原点
                pathRewrite: { //路径转发规则
                    '/api': ''
                }
            }
        }

    }
}
