// config.js
const dotenv = require("dotenv")

dotenv.config()

module.exports = {
    APP_PORT,
    BASE_URL,
    AUTH_SECRET,
    AUTH_PWD_NUM
} = process.env
