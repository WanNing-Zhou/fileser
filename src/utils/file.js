const multer = require('@koa/multer');
const fs = require('fs')
const {getUName} = require("./nanoId");

/**
 * 读取文件方法
 * @param  {string} 文件本地的绝对路径
 * @return {string|binary}
 */
function file ( filePath ) {

    let content = fs.readFileSync(filePath, 'binary' )
    return content
}

// 处理文件上传的中间件
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, '../../public'); // 指定上传文件的存储目录
    },
    filename: function (req, file, cb) {
        cb(null, `${Date.now()}-${file.originalname||''}-${getUName()}`); // 指定上传文件的文件名
    }
});
const upload = multer({ storage });


module.exports = { file, upload }
