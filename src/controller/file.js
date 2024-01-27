const path = require('path');
const config = require('../app/config')


class fileController { // 创建类
  async create (ctx, next) { // 中间件
    // console.log('create')
    // console.log('request', ctx.request.files)
    // console.log('files.filepath', ctx.request.files.files.filepath)
    // 文件可能为file或者files
    const file =  ctx.request.files.file || ctx.request.files.files
    // console.log(file)
    // let headImg = config.BASE_URL+ '/' + file.filepath.split('/public/').pop();
    // const { body } = ctx.request;
    // const file = await ctx.request.files;
    // console.log('file',file)

    // 返回地址
    const headImg = `${config.BASE_URL}:${config.APP_PORT}/${path.basename(file.filepath)}`
    ctx.body = {
      code:200,
      data:{url: headImg},
      msg:'上传成功'
    }
  }
}

module.exports = new fileController()
