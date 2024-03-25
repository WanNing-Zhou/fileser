// node js 实现zip包解压

// 主要使用模块 compressing

// 安装方法  yarn / npm

// 关键代码解析

const compressing = require('compressing')
const fs = require('fs')
const {file} = require("./file");
const path = require("path");


// zipFileNameEncoding GBK 防止文件名中文乱码

/**
 * @description 解压文件
 * @param zipFilePath
 * @param destDir
 */
async function decompression(zipFilePath, destDir){
    const fileName = path.basename(zipFilePath);
    const extensionIndex = fileName.lastIndexOf('.');
    const newDir = fileName.slice(0, extensionIndex);
    const realDir =  `${destDir}/${newDir}`
    console.log('realDir', realDir)
    // await fs.mkdir(realDir)
    await compressing.zip.uncompress(zipFilePath, realDir, { zipFileNameEncoding: 'GBK' })
}


// compressing.zip.uncompress(被解压文件路径, 解压后存放路径, { zipFileNameEncoding: 'GBK' })

module.exports = {
    decompression
}

