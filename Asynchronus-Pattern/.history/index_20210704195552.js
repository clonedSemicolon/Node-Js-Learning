console.log("I am first and synchronus")
console.log()


getPerson=(id,callback)=>{

    setTimeout(()=>{
        console.log("Fetching");
        callback({
            id:id,
            name:"Avishak"
        })
    },2000)
}