const http = require("http");
//const port = 5000;

const express=require('express')

const app= express()


app.use((req,res,next)=>{
console.log("in middleware")
    next();
})

app.use((req,res,next)=>{
    console.log("in another middleware")
    res.send('<h1> hello from express</h1>')
})
//const routes=require("./routes")
//const server = http.createServer(routes)
const server = http.createServer(app)

   

//server.listen(port, () => {
 //   console.log("Listening at port " + port);
//});

server.listen(3000)