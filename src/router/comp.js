const Router = require("koa-router") // 引入依赖
const jwt = require('koa-jwt');
const config  = require("../app/config")

const { create } = require('../controller/comp')
const {getUName} = require("../utils/nanoId");
const {koaBody} = require("koa-body");
const {join} = require("path");
const fileRouter = new Router({ prefix: "/comp" }) // 设置接口前缀


// 使用文件上传服务
fileRouter.use(koaBody({
    // 支持文件格式
    multipart: true,
    formidable: {
        // 上传目录
        uploadDir: join(__dirname, '../../public/comp'),
        // 保留文件扩展名
        keepExtensions: true,
        multiples: true,
        // 文件命名
        filename:   (name, ext, part, form) => {
            return  'comp' + '-' + getUName(8) + ext
        },
        onError: (error) => {
            // app.status = 400;
            // log4js.error(error);
            // 这里可以定义自己的返回内容
            // app.body = { code: 40000, msg: "上传失败", data: {} };
            return;
        }
    }
}))



// const {upload} = require("../utils/file"); // 引入中间件

// fileRouter.use(jwt({secret: config.AUTH_SECRET})) // 使用中间件
fileRouter.post('/', create)

module.exports = fileRouter // 导出
