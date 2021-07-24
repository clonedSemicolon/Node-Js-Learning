const fs=require('fs')

const studenInfo = () => {
    return new Promise((resolve,reject)=>{
        fs.readFile('./db.json','utf-8',(err,data)=>{
            const students=JSON.parse(data)
            resolve(students)
        })
    })
}

const insertInfo = (students) =>{
    return new Promise((resolve,reject)=>{
        fs.writeFile('./db.json',JSON.stringify(data),err=>{
            resolve("Successful")
        })
    })
}

module.exports.studenInfo=studenInfo
module.exports.insertInfo=insertInfo