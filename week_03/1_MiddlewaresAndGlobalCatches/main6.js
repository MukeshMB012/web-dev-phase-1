// global cathes middleware

// why do you need input validation?
// Lets see with an example


const express = require("express");
const app = express();

app.use(express.json());

app.post("/health-checkup", function(req, res){
    // kidneys = [1,2] something like this or should be an array. this thing  we will see in the zod section.
    const kidneys = req.body.kidneys;
    const kidneysLength = kidneys.length;

    res.send("you have " + kidneysLength + " kidneys");
    // console.log("you have " + kidneysLength + " kidneys");
})

// global catches middleware( it is defined at the end of the code)
// it takes 4 inputs(not 3 inputs)
// global catches help you give the user a better error message 
app.use(function(err, req, res, next){
    res.json({
        msg: "Sorry something is up with our server"
    })
})

app.listen(3006);