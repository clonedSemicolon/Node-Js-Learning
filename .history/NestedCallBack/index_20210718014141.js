console.log("I am first and synchronus")

getPerson(2).then(data=>console.log(data))


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

    return new Promise((res,rej)=>{

        setTimeout(()=>{
            console.log("Getting Quiz Marks...")
            res({
                courses:courses.courses,
                marks:[20,30]
            })
        },1000)

    })
    
}