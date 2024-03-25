const fs = require("fs");

function mkdir(dir) {
    return new Promise((resolve, reject) => {
        fs.mkdir(dir).then(function(){
            console.log('Directory created successfully:', dir);
            resolve(true)
        }).catch(function(){
            console.log('failed to create directory');
            resolve(false)
        })
    })
}

module.exports = {
    mkdir
}