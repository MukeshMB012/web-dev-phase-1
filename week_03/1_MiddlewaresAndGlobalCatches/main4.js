// last thing in middleware- app.use
// if you want to get the post body parameters than use app.use
// use app.use, where a middleware is needed to be called everywhere(means called in each routes).


const express = require("express");
const app = express();

let numberOfRequests = 0;
function calculateRequests(req, res, next){
    numberOfRequests ++;
    console.log(numberOfRequests);
    next();
}


//app.use
// app.use takes middleware as an input
app.use(calculateRequests)    // this middleware(calculateRequests) is going to get call in each routes below(or everywhere below this declaration).
app.use(express.json())  // here, () is there with the json because json itself calls a function and not any value or number, like calculateRequests(which is a middleware) do.

// Routes
app.post("/health-checkup", function (req, res) {
    console.log(req.body);
    res.json({
        msg: "hi there"
    })
});


app.listen(3004);