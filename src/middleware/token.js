// 解签
const solveToken = (ctx, next) => {
    console.log('jieqian', ctx.request.query.key);
    // query可以使用 ctx request.query来获取query对象

    next()
}

module.exports = {
    solveToken
}
