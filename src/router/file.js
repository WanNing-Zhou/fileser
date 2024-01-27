const Router = require("koa-router") // 引入依赖
const jwt = require('koa-jwt');
const config  = require("../app/config")

const { create } = require('../controller/file')
const fileRouter = new Router({ prefix: "/file" }) // 设置接口前缀



// const {upload} = require("../utils/file"); // 引入中间件

// fileRouter.use(jwt({secret: config.AUTH_SECRET})) // 使用中间件
fileRouter.post('/', create)

module.exports = fileRouter // 导出
