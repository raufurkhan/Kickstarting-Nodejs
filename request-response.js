const http= require('http')


const server=http.createServer((req,res)=>{

    const url=req.url
res.setHeader('Content-Type', 'text/html')
    if(url==='/home'){
res.write('<html>')
res.write('<head><title>Welcome home</title></head>')
res.write('<body><h1>Welcome home</h1></body>')
res.write('</html>')

    return res.end()
    }
    else if(url==='/about'){
        res.write('<html>')
res.write('<head><title>Welcome about</title></head>')
res.write('<body><h1>Welcome about us</h1></body>')
res.write('</html>')
return res.end()
    }
    else if(url==='/node'){
        res.write('<html>')
res.write('<head><title>Welcome node</title></head>')
res.write('<body><h1>Welcome Nodfejs</h1></body>')
res.write('</html>')
return res.end()
    }

})

server.listen(3000)