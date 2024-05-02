const http = require("http");
const port = 5000;


const routes=require("./routes")
const server = http.createServer(routes)
    

   

server.listen(port, () => {
    console.log("Listening at port " + port);
});