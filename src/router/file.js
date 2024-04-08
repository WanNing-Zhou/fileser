const Router = require("koa-router") // 引入依赖
const jwt = require('koa-jwt');
const config  = require("../app/config")

const { create } = require('../controller/file')
const {koaBody} = require("koa-body");
const path = require("path");
const {getUName} = require("../utils/nanoId");


const fileRouter = new Router({ prefix: "/file" }) // 设置接口前缀

// 使用文件上传服务
fileRouter.use(koaBody({
    // 支持文件格式
    multipart: true,
    formidable: {
        // 上传目录
        uploadDir: path.join(__dirname, '../../public'),
        // 保留文件扩展名
        keepExtensions: true,
        multiples: true,
        // 文件命名
        filename:   (name, ext, part, form) => {
            // console.log(name)
            // console.log(ext)
            // console.log('part', part)
            // console.log('form', form)
            // part这里包含请求的信息
            // console.log('正在编写文件')
            return Date.now() + '-' + getUName() + ext
        },
        onError: (error) => {
            app.status = 40000;
            log4js.error(error);
            // 这里可以定义自己的返回内容
            app.body = { code: 40000, msg: "上传失败", data: {} };
            return;
        }
    }
}))


// const {upload} = require("../utils/file"); // 引入中间件

// fileRouter.use(jwt({secret: config.AUTH_SECRET})) // 使用中间件
fileRouter.post('/', create)

module.exports = fileRouter // 导出
