console.log("I am first and synchronus")



getPerson=(id,callback)=>{

    setTimeout({
    console.log("Fetching")
    callback({id:id,name:"Rahim"})
    },2000)
}