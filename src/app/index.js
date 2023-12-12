// 入口文件
// app/index.js
const Koa = require("koa")

const app = new Koa()

const useRoutes = require('../router') // 引入router下的index.js文件

useRoutes(app)

module.exports = app
