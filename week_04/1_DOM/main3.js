// sum of two numbers using the http request
// AND
// getting the simple interest of a number using the http request

const express = require("express");
const cors = require("cors");  // it let yours backend connect with frontend

const app = express();
app.use(cors());  // use cors to allow cross-origin requests

app.get("/sum", function(req, res){
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);
    const sum = a + b;
    res.send(sum.toString());

})

app.get("/interest", function(req,res){
    const principal = parseFloat(req.query.p);
    const rate = parseFloat(req.query.r);
    const time = parseFloat(req.query.t);
    const interest = (principal * rate * time)/ 100;
    const total = principal + interest;
    res.send({
        interest: interest,
        total: total
    });

})

app.listen(3000,  function(){
    console.log("server is running on port 3000")
});