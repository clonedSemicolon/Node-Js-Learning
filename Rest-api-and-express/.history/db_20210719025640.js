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
    return new Promise((resolve,reject)=>{
        fs.writeFile('./db.json',JSON.stringify(data),err=>{
            res.send(studentData)
        })

    })
}

module.exports.studenInfo=studenInfo