const http=require('http');
const server=http.createServer((req,res)=>{

    if(req.url==='/'){
        res.write('Hello World')
    }

    if(req.url==='/students'){
        res.write(JSON.stringify([
            
        ]))
    }

})

server.listen(3000)

console.log("listening on Port 3000");