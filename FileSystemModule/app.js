const fs=require('fs') 

let txt=fs.readFileSync('./files/input.txt','utf-8')

txt=`Copied Text : ${txt}`

fs.writeFileSync('./files/output.txt',txt)

// console.log(txt)