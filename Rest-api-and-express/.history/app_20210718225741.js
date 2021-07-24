const express=require('express');
const fs=require('fs')
const app=express();


const port=3000;

app.get('/',(req,res)=>{
    res.send("Hello From express Server")
})

app.get('/api/students',(req,res)=>{
    fs.readFile('./db.json','utf-8',(err,data)=>{
        console.log(data)
        const students=JSON.parse(data)
        res.send(students)
    })
})

app.post('/api/students',(req,res)=>{
    const studentData=req.body;
    fs.readFile('./db.json','utf-8',(err,data)=>{
        const students=JSON.parse(data)
        
    })
})

app.listen(port,()=>{
    console.log("Listening to port 3000")
})