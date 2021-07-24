const express=require('express');
const fs=require('fs')
const app=express();

import { studenInfo } from './db';


const port=3000;

app.use(express.json())

app.get('/',(req,res)=>{
    res.send("Hello From express Server")
})

app.get('/api/students',(req,res)=>{
   studenInfo().then(data=>{
       res.send(data)
   }) 
})



app.post('/api/students',(req,res)=>{
    const studentData=req.body;
        studenInfo()
        .then(data=>{
            data.push(studentData)
            fs.write
        })
        // fs.readFile('./db.json','utf-8',(err,data)=>{
        //     const students=JSON.parse(data)          
        //    students.push(studentData)
        //     fs.writeFile('./db.json',JSON.stringify(students),(err)=>{
        //         res.send(studentData)
        //     })
        // })
})

app.listen(port,()=>{
    console.log("Listening to port 3000")
})