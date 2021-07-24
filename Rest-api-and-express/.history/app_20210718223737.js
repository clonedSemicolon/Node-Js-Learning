const express=require('express');
const fs=require('fs')
const app=express();


const port=3000;

app.get('/',(req,res)=>{
    res.send("Hello From express Server")
})

app.get('/api/students',(req,res)=>{
    fs.readFile('./db.json','utf')
})

app.listen(port,()=>{
    console.log("Listening to port 3000")
})