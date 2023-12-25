const jwt = require('jsonwebtoken')
const config = require('../app/config')

function setToken(option=null){
    const def = {
        payload: {pwd: config.AUTH_PWD_NUM},
        privateKey: config.AUTH_SECRET,
        // expiresIn: '30m'
        options: {},
        callback: () => {}
    }
    let curOp = def
    if(option){
        curOp = {...def, ...option}
    }
    return jwt.sign(curOp.payload, curOp.privateKey,curOp.options)
}


module.exports = {setToken}
