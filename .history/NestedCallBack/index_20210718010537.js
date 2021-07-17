console.log("I am first and synchronus")
getPerson(2,(person)=>{
    console.log(person)
    getCourses(person,(courses)=>{
        console.log(courses)
        getMarks(courses,(marks)=>{
            console.log(marks)
        })
    })
})


function getPerson(id){
    return new Promise ((res,rej) => {
       setTimeout(()=>{
            console.log("Fetching");
            res({
                id:id,
                name:"Avishak"
            })    
        },2000)
    })
    
}

function getCourses(student){
    return new Promise((res,rej)=>{
    setTimeout(()=>{
        console.log("Student Courses from Database...")
        res({id:student.id, name:student.name, courses:
            ["JavaScript","Java"]
        
    })

    },2000)
})}

function getMarks(courses){

    return new Promise((req,res))
    setTimeout(()=>{
        console.log("Getting Quiz Marks...")
        callback({
            courses:courses.courses,
            marks:[20,30]
        })
    },1000)
}