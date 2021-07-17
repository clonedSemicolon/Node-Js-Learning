const http=require('http');
const server=http.createServer((req,res)=>{

    if(req.url==='/'){
        res.write('Hello World')
    }

})

server.listen(3000)

console.log("listeni");