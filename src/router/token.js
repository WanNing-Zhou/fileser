const Router = require("koa-router") // 引入依赖
const config  = require("../app/config")

const { create, createDes } = require('../controller/token')
const tokenRouter = new Router({ prefix: "/wat" }) // 设置接口前缀
tokenRouter.post('/ltoken', create)
tokenRouter.post('/stoken', createDes)
module.exports = tokenRouter
