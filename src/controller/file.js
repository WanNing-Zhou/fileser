const config = require('../app/config')

class fileController { // 创建类
  async create (ctx, next) { // 中间件
    // console.log('create')
    // console.log('request', ctx.request.files)
    const file = ctx.request.files.file
    console.log(file)
    let headImg = config.BASE_URL+ '/' + file.filepath.split('/public/').pop();
    ctx.body = {
      code:200,
      data:{headImg},
      msg:'上传成功'
    }
  }
}

module.exports = new fileController()
