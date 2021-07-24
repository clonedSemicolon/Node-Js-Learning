const express=require('express');
const fs=require('fs')
const app=express();
const db=require('./db')


const port=3000;

app.use(express.json())

app.get('/',(req,res)=>{
    res.send("Hello From express Server")
})

app.get('/api/students',(req,res)=>{
   db.studenInfo().then(data=>{
       res.send(data)
   })
})



app.post('/api/students',(req,res)=>{
    const studentData=req.body;
        db.studenInfo()
        .then(students => {
            students.push(studentData)
            db.insertInfo(students).then(
            data => {
                res.send(studentData)
            })
 })



app.listen(port,()=>{
    console.log("Listening to port 3000")
})