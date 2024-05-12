const http = require("http");
//const port = 5000;

const express=require('express')
const bodyParser = require('body-parser');
const app= express()

app.use(bodyParser.urlencoded({ extended: false }));

app.use('/add-product',(req,res,next)=>{
    console.log("in another middleware")
    res.send(`<form action="/product" method="post">
 <label for="product">Product Name:</label>
    <input type="text" id="product" name="product">
    <br>
    <label for="size">Product Size:</label>
    <input type="text" id="size" name="size">
    <br>
    <button type="submit">Submit</button>
</form>`)
})


app.post('/product', (req, res) => {
    const productName = req.body.product;
    const productSize = req.body.size;
    console.log('Product Name:', productName);
    console.log('Product Size:', productSize);
    // res.send('Product added successfully!');
    res.send(productName+ ' '+productSize);
  });


app.use('/',(req,res,next)=>{
console.log("in middleware")
    res.send('<h1> hello from express</h1>');
})


//const routes=require("./routes")
//const server = http.createServer(routes)
const server = http.createServer(app)

   

//server.listen(port, () => {
 //   console.log("Listening at port " + port);
//});

server.listen(3000)