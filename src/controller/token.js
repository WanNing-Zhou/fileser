const {setToken} = require("../utils/token")
const {encryptDes} = require("../utils/desAg");
const config = require("../app/config")

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

    // 使用Des生成令牌
    async createDes (ctx, next){
        const prev = 'ID'
        const time = new Date().getTime()
        const token = encryptDes(prev + time, config.AUTH_SECRET)
        ctx.body = {
            code:200,
            data:{
                token
            },
            msg:'请求成功'
        }
    }
}

module.exports = new TokenController()

