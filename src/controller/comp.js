const path = require('path');
const config = require('../app/config')
const {decompression} = require("../utils/decompression");
const {removeExtension} = require("../utils/file");


class CompController { // 创建类p

    async create (ctx, next) { // 中间件

        const file =  ctx.request.files.file || ctx.request.files.files
        // 返回地址
        const headComp = `${config.BASE_URL}:${config.APP_PORT}/comp/${removeExtension(path.basename(file.filepath))}/`
        // TODO: 根据路径解压文件 解压文件后保存文件路径 将路径返回给前端

        try {
            await decompression(file.filepath, path.dirname(file.filepath))
        }catch (err){
            console.log("文件解压失败", path.basename(file.filepath))
            throw err
        }

        ctx.body = {
            code:200,
            data:{url: headComp},
            msg:'上传成功'
        }
    }
}

module.exports = new CompController()
