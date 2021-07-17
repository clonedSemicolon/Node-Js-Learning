console.log("I am first and synchronus")

getPerson(2).then((data)=>{
    console.log(data);
    getCourses(data).then(courseData=>{
        console.log(courseData)
        getMarks(courseData).then(marksdata=>{
            console.log(marksdata)
        })
    })
})


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
        res(course)  
    },2000)
})
}

function getMarks(courses){

    return new Promise((res,rej)=>{

       setTimeout(()=>{
            console.log("Getting Quiz Marks...")
            const marks=
            res()
        },1000)

    })
    
}