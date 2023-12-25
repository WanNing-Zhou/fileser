const Router = require("koa-router") // 引入依赖
// const jwt = require('koa-jwt');
const config  = require("../app/config")

// const { create } = require('../controller/file')
const testRouter = new Router({ prefix: "/test" }) // 设置接口前缀
const {solveToken} = require("../middleware/token")


// const {upload} = require("../utils/file"); // 引入中间件

// fileRouter.use(jwt({secret: config.AUTH_SECRET})) // 使用中间件
testRouter.use(solveToken)
testRouter.post('/', (ctx)=>{
    console.log('请求成功')
    ctx.body = {
        code: 200,
        message: '请求成功'
    }
})

module.exports = testRouter // 导出
