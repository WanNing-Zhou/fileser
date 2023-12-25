const {decryptDes} = require("../utils/desAg");
const config = require('../app/config')

// 解签
const solveToken = (ctx, next) => {
    console.log('jieqian', ctx.request.query.key);
    // query可以使用 ctx request.query来获取query对象

    next()
}

const solveDES = (ctx, next) => {
    console.log('token', ctx.request.query.key);
    const sol = decryptDes(ctx.request.query.key, config.AUTH_SECRET)
    console.log('sol', sol)
    if(sol && sol.includes('ID')){
        next()
    }else {
        ctx.body = {
            code: 401,
            msg: 'token错误'
        }
    }
}

module.exports = {
    solveToken,
    solveDES
}
