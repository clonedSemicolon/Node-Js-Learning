const e = require('express');
const express=require('express');
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
 
app.get('/api/students/:id',(req,res)=>{
    //req.params will show the dynamic variable part of the URL
    const id=parseInt(req.params.id)
    db.studenInfo()
    .then(students=>{
        const student=students.find(s=>s.id===id)
        if(!student) res.status(404).send("No Student found with the id")
        else res.status(200).send(student)
    })
})



app.post('/api/students',(req,res)=>{
    const studentData=req.body;
        db.studenInfo()
        .then(students=> {
            students.push(studentData)
            db.insertInfo(students).then(data=>{
                res.send(studentData)
            })
 })
})

app.put('/api/students/:id',(req,res)=>{
    const id=parseInt(req.params.id)
    const updatestudentData=req.body;
    db.studenInfo()
    .then(students=>{
        const student=students.find(s=>s.id===id)
        if(!student) res.status(404).send("No Student found with the id")
        else {
            const i=students.findIndex(s =>s.id===id)
            students[i]=updatestudentData
            db.insertInfo(students).then(
                data=>res.send(updatestudentData)
            )
        }
    })
})

app.delete)()



app.listen(port,()=>{
    console.log("Listening to port 3000")
})