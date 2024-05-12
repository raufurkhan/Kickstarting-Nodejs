const http = require("http");
//const port = 5000;

const express=require('express')
const bodyParser = require('body-parser');
const app= express()

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({ extended: false }));


app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use((req, res, next) => {
    res.status(404).send('<h1>Page is not there</h1>');
  });


//const routes=require("./routes")
//const server = http.createServer(routes)
const server = http.createServer(app)

   

//server.listen(port, () => {
 //   console.log("Listening at port " + port);
//});

server.listen(3000)