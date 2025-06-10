// http server 1 
// how to get package.json file(npm init -y:- run in terminal)
// how to get express(package-lock.json file + node_modules) lockelly(npm install express:- run in terminal)
// for taking the input from the user, need to install body parser(npm install body-parser)
// instead of using (node main.js) after every changes in the code, must use (nodemon main.js) it will automatically updates the changes in the terminal
 
// const fs = require("fs");  similar to this the below one
// const express = require("express");


// // Actual code of the pdf
// const express = require('express')
// const app = express()
// const port = 3000

// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`)
// })

 
// rough code
const express = require('express');
const bodyParser = require("body-parser"); // adding new library body-parser for taking the input from the user

const app = express();
const port = 3000;  //process.env.PORT?
// const port = process.env.POST || 3000 //:- find out about this

// middleware(below line code)
app.use(bodyParser.json());

app.get('/', function(req, res) {
  res.send('Hello World!')
})

app.get("/me", function(req, res){
    res.json({
        name: "mukesh",
        age: 20
    })
})

// Authorization(how to get)  
app.post('/conversation', function(req, res){
    console.log(req.headers)  //this will give you the whole bio data of headers
    console.log(req.headers["authorization"])  //this will only give you the authorization number(which you passes here for this case)
    // console.log(req.body)  //:-(taking input from the users)  it won’t work as expected unless you add middleware to parse the request body.
    
    // const message =req.query.message;  //(it allows the input from the route:- ?(now write your input)) and it is called query route. example:- ?n=30&a=23&c=41
    // console.log(message);
    const message =req.body.message;
    console.log(message);
    res.send({
        msg: "2+2=4"
    })
})

app.listen(port);
