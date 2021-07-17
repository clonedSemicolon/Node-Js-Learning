console.log("I am first and synchronus")



getPerson=(id,callback)=>{

    setTimeout({
    callback(
        {id:id,name:"Rahim"}
        )
    },2000)
}