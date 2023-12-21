const Router = require("koa-router") // 引入依赖

const fileRouter = new Router({ prefix: "/file" }) // 设置接口前缀

const { create } = require('../controller/file')
const {upload} = require("../utils/file"); // 引入中间件

fileRouter.post('/', create)

module.exports = fileRouter // 导出
