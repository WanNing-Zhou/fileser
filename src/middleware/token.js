const {decryptDes} = require("../utils/desAg");
const config = require('../app/config')
const jwt = require("jsonwebtoken");

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

// 验证开发者权限
const solveDevToken =  (ctx, next) => {
    const token = ctx.headers["authorization"];

    if (!token) {
        ctx.body = {
            code: 40100,
            msg: '权限验证失败'
        }
    }

    jwt.verify(token, process.env.SECRET_KEY, (err, data) => {
        if (err) {
            ctx.body = {
                code: 40100,
                message: "权限验证失败"
            }
        }
        /**
         * auth: 0 管理者, 1 开发者, 2 普通用户
         */
        if(data.auth <= 2){
            ctx.body = {
                code: 40300,
                message: "权限不足"
            }
        }
        // req.user = data;
        next();
    });
}

module.exports = {
    solveToken,
    solveDES,
    solveDevToken
}
