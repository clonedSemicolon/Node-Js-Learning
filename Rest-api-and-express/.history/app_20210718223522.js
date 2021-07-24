const express=require('express');
const app=express();

const port=3000;

app.get('/',(req,res)=>{
    res.send("Hello From express Server")
})

app.get('/students/')

app.listen(port,()=>{
    console.log("Listening to port 3000")
})