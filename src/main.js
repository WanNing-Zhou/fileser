// main.js
const app = require('./app')

const config = require('./app/config')

// 启动服务器
app.listen(config.APP_PORT, () => {
    console.log(`请访问: http://127.0.0.1:${config.APP_PORT}`)
})
