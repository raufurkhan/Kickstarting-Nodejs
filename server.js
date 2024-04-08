const http=require('http')

const server=http.createServer((req,res)=>{
    console.log("raufur")
})

server.listen(4000)
