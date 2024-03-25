
const jwt = require('jsonwebtoken');


const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJrZXkiOiJhcHAiLCJhdXRoIjoiMCIsImV4cCI6MTcxMTM5ODI0NywibmJmIjoxNzExMzU0MDQ3LCJpYXQiOjE3MTEzNTUwNDcsImp0aSI6IjUwNTk0MzUxOTI3ODQwMDA1NCJ9._q0w6c4B78j3jsyWiYmj96-umaggaA7i0D3opWk7LOg"
const s = "3Bde3BGEbYqtqyEUzW3ry8jKFcaPH17fRmTmqE7MDr05Lwj95uruRKrrkb44TJ4s"
jwt.verify(token, s, (err, data) => {
    if(err){
        console.log(err)
    }
    console.log('data', data)
})