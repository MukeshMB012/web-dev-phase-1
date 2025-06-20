// Zod:- a better way for input validation
//  it is an input validation library

const express = require("express");
const zod = require("zod");
const app = express();

const schema = zod.array(zod.number());   //very important line(also known as zod schema line).
// focuss on how to write the schema for different values


app.use(express.json());

app.post("/health-checkup", function(req, res){
    // kidneys = [1,2] should be an array
    const kidneys = req.body.kidneys;
    const response = schema.safeParse(kidneys);
    if(!response.success){
        res.status(411).json({
            msg: "input is invalid"
            
        })
    }else{
        res.send({
        response
        })

    }
   
    
})



app.listen(3007);











// // from the notes
// const express = require("express");
// const z = require("zod");
// const app = express();

// app.use(express.json());

// const kidneysInput = z.literal("1").or(z.literal("2"));

// app.post("/health-checkup", function (req, res) {
//     // do something with kidney here
//     const kidneyId = req.body.kidneyId;
//     const validation = kidneysInput.safeParse(kidneyId);
//     if (!validation.success) {
//         res.send("Incorrect input");
//         return;
//     }
//     res.send("Your kidney id is " + kidneyId);
// });

// app.listen(3000, () => {
//     console.log("Server running on http://localhost:3000");
// });
