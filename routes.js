const fs = require("fs")
const requestHandler=(req,res)=>{

if (req.url === "/") {
    res.writeHead(200, { "Content-Type": "text/html" });
    fs.readFile("message.txt", "utf8", (err, data) => {
        if (err) {
            console.error("Error reading file:", err);
            return;
        }
        console.log("File content:", data);
        res.write(data)
        res.write("<form action=/message method=POST> <input type=text placeholder=enter name=message/> <button type=submit>submit</button></form>");
        return res.end();
    });
}

if (req.url === "/message" && req.method === "POST") {
    const body = []
    req.on("data", (chunk) => {
        body.push(chunk)
        console.log(chunk)
    })
    return req.on("end", () => {
        console.log("onend")
        const parsedBody = Buffer.concat(body).toString()
        const data = parsedBody.split("=")[0]
        console.log({ data })
        fs.writeFileSync("message.txt", data)

        res.statusCode = 302
        res.setHeader("Location", "/");//to redirect on localhost5000

        return res.end(data); // You can also use res.end("message"); here

    })
}
}
module.exports=requestHandler;