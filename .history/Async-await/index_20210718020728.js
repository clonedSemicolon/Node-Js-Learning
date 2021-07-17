console.log("I am first and synchronus")

getPerson(2).then((data)=>{
    getCourses(data).then(courseData=>{
        getMarks(courseData).then(marksdata=>{
            console.log(marksdata)
        })
    })
})

//Await is used for handling promise request

const person=getPerson(3)
const course=getCourses(student)


function getPerson(id){
    return new Promise ((res,rej) => {
       setTimeout(()=>{
            console.log("Fetching");
            const person={id:id,name:"Avishak"}
            console.log(person)
            res(person) 
        },2000)
    })
    
}

function getCourses(student){
    return new Promise((res,rej)=>{
    setTimeout(()=>{
        console.log("Student Courses from Database...")
        const course={id:student.id, name:student.name, courses:
            ["JavaScript","Java"]}
        console.log(course)    
        res(course)  
    },2000)
})
}

function getMarks(courses){
    return new Promise((res,rej)=>{
       setTimeout(()=>{
            console.log("Getting Quiz Marks...")
            const marks={
                courses:courses.courses,
                marks:[20,30]
            }
            res(marks)
        },1000)
    })
    
}