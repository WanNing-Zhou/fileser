const cryptoJs = require('crypto-js')

// DES 加密
function encryptDes(message, key) {
    const keyHex = cryptoJs.enc.Utf8.parse(key)
    /* 这里的模式参数需要和后端匹配 mode.ECB，mode.CBC*/
    const encrypted = cryptoJs.DES.encrypt(message, keyHex, {
        mode: cryptoJs.mode.ECB,
        padding: cryptoJs.pad.Pkcs7
    });
    return encrypted.ciphertext.toString();
}

//DES解密
function decryptDes(message, key) {
    const keyHex = cryptoJs.enc.Utf8.parse(key)
    const decrypted = cryptoJs.DES.decrypt(
        {
            ciphertext: cryptoJs.enc.Hex.parse(message)
        },
        keyHex,
        {
            mode: cryptoJs.mode.ECB,
            padding: cryptoJs.pad.Pkcs7
        }
    )
    return decrypted.toString(cryptoJs.enc.Utf8)
}

/*
const m = encryptDes('', '19491001')
const t = decryptDes( '', '19491001')

console.log('加密', m)
console.log('解密', t)
*/

module.exports = {
    encryptDes,
    decryptDes
}
