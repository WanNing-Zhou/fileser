class UserController { // 创建类
  async create (ctx, next) { // 中间件
    console.log("请求成功")
    ctx.body = "请求成功" // 请求响应
  }
}

module.exports = new UserController()
