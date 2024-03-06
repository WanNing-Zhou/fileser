/**
 * 用于设置跨域访问
 * @param ctx
 * @param next
 * @returns {Promise<void>}
 */
module.exports = async (ctx, next) => {
    ctx.set('Access-Control-Allow-Origin', '*');
    await next();
}