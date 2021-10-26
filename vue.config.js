module.exports = {
    devServer: {
        host: 'localhost',
        port: 12340, // 启动端口
        open: false,  // 启动后是否自动打开网页
        https: false,
        hotOnly: false,
        hot: true,
        proxy:{
            'api/':{
                target: 'http://localhost:12341/',
                ws: false,
                changeOrigin: true,
                pathRewrite: {
                    '^/api': '/'
                }
            }
        }
        // proxy: 'http://localhost:12341/'
    }
};
