const fs=require('fs')

const studenInfo = () => {
    return new Promise((resolve,reject)=>{
        fs.readFile('./db.json','utf-8',(err,data)=>{
            const students=JSON.parse(data)
            resolve(students)
        })
    })
}

const insertInfo =  ()=>{
    return new Promise
}

module.exports.studenInfo=studenInfo