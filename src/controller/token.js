const {setToken} = require("../utils/token")

class TokenController { // 创建类
    async create (ctx, next) { // 中间件
        const t = setToken();
        console.log('token', t);
        ctx.body = {
            code:200,
            data:{
                token: setToken()
            },
            msg:'请求成功'
        }
    }
}

module.exports = new TokenController()

