console.log("I am first and synchronus")
getPerson(2,(person)=>{
    
})


getPerson=(id,callback)=>{

    setTimeout(()=>{
        console.log("Fetching");
        callback({
            id:id,
            name:"Avishak"
        })
    },2000)
}