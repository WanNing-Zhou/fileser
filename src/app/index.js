// 入口文件
// app/index.js
const Koa = require("koa")
const {koaBody} = require('koa-body')
const staticResource = require('koa-static') // 静态资源中间件
const cors = require('koa2-cors'); //跨域处理
const jwt = require('koa-jwt'); // JWT权限校验
const path = require('path')
const {getUName} = require("../utils/nanoId");
const authError = require("../middleware/authentication");



const app = new Koa()
/**
 * static(root, option)
 * root: 为路径，表示文件所在的相对路径
 * option: {
 *     maxage: 浏览器默认的最大缓存时长  max-age, 单位为毫秒，默认值为0，也就是不启用缓存。
 *     hidden: 是否允许传输隐藏的文件，默认为false， 不传输。
 *     index: 默认的文件名，默认值为index.html。
 *     defer: 是否推迟响应，如果为true, koa-static 将会咋其他中间件执行完成之后在执行。
 *     gzip: 如果客户端支持gzip压缩且资源文件后缀为.gz， 则进行gzip压缩，默认为true, 也就是支持gzip压缩。
 *     setHeaders: 设置请求头函数，格式为： fn(res, path, stats)。
 *     extensions: 当资源匹配不到的时候。根据传入的数组参数依次进行匹配，返回匹配到的第一个资源。
 * }
 */
app.use(staticResource(path.join(__dirname, '../../public'))) // 静态资源目录
app.use(staticResource(path.join(__dirname, '../../static'))) // 静态资源目录

app.use(cors({
    // 任何地址都可以访问
    origin:"*",
    // 指定地址才可以访问
    // origin: 'http://localhost:8080',
    maxAge: 2592000,
    // credentials: true, //是否允许发送Cookie
    // 请求允许方法
    // allowMethods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'], //设置所允许的HTTP请求方法
    // 允许的请求头信息
    // allowHeaders: ['Content-Type', 'Authorization', 'Accept'], //设置服务器支持的所有头信息字段
    // exposeHeaders: ['WWW-Authenticate', 'Server-Authorization'] //设置获取其他自定义字段

 // 链接：https://juejin.cn/post/7136151612724084773
}))

// 文件上传
app.use(koaBody({
    // 支持文件格式
    multipart: true,
    formidable: {
        // 上传目录
        uploadDir: path.join(__dirname, '../../public'),
        // 保留文件扩展名
        keepExtensions: true,
        multiples: true,
        // 文件命名
        filename:   (name, ext, part, form) => {
            // console.log(name)
            // console.log(ext)
            // console.log('part', part)
            // console.log('form', form)
            // part这里包含请求的信息
            return Date.now() + '-' + getUName() + ext
        }
    }
}))
app.use(authError)

const useRoutes = require('../router')

// const {Part} = require("formidable"); // 引入router下的index.js文件

useRoutes(app)

module.exports = app
