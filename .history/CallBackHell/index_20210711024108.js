console.log("I am first and synchronus")
getPerson(2,(person)=>{
    console.log(person)
    getCourses(student,)
})


function getPerson(id,callback){
    setTimeout(()=>{
        console.log("Fetching");
        callback({
            id:id,
            name:"Avishak"
        })
    },2000)
}

function getCourses(student,callback){
    setTimeout(()=>{
        console.log("Student Courses from Database...")
        callback({id:student.id, name:student.name, courses:
            ["JavaScript","Java"]
        
    })

    },2000)
}