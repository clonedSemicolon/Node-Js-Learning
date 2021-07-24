const fs=require('fs')

const studenInfo = () => {
    return new Promise((resolve,reject)=>{
        fs.readFile('./db.json','utf-8',(err,data)=>{
            console.log(data)
            const students=JSON.parse(data)
            res.send(students)
        })
    })

}