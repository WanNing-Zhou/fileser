const { customRandom, urlAlphabet, customAlphabet, nanoid} = require('nanoid');
// import {nanoid} from 'nanoid'

module.exports = {
    /**
     * 获取唯一名
     * @return {string}
     */
    getUName(size){
        // const nanoid = customAlphabet('ABCDEF1234567890', 12);
        // return nanoid(urlAlphabet, 10, customRandom(ABCDEF1234567890))
        if(size){
            return nanoid(size)
        }
        return nanoid(10)
    }
}
