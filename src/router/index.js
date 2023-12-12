const fs = require('fs')

// 使用路由的方法
const useRoutes = (app) => {
    // 比案例目录下除去index.js的每个文件
    fs.readdirSync(__dirname).forEach(file => {
        if (file === 'index.js') return // index.js文件不需要
        const router = require(`./${file}`)
        app.use(router.routes()) // 使用路由
        app.use(router.allowedMethods())
    })
}

module.exports = useRoutes
