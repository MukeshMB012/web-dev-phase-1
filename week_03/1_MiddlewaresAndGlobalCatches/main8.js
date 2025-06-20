// zod schema
//Authentication was also covered but very basic, just theory. will be covered in next lecture


const express = require("express");
const zod = require("zod");
const app = express();

app.use(express.json());

// // if this is an array of number with atleast 1 input, return true, else return false
// function validateInput(arr){
//     const schema = zod.array(zod.number());
//     const response = schema.safeParse(arr);
//     console.log(response);
// }
// validateInput([1,2,3])



// create zod schema for the following
// {
//  email: string -> email
//  password: atleast 8 letters
//  country: "IN", "US"
// }
function validateInput(obj){
    const schema = zod.object({
    email: zod.string().email(),                      //  must be a valid email
    password: zod.string().min(8),                    //  at least 8 characters
    country: zod.enum(["IN", "US"]),                  //  only "IN" or "US"              
    });

    const response = schema.safeParse(obj);
    return response;
    
}

// validateInput({
//     email: "mukesh@gmail.com",
//     password: "124545356465",
//     country: "IN"
// })

// for HTTP server
app.post("/login", function(req, res){
    const response = validateInput(req.body);
    if(!response.success){
        res.json({
            msg: "your inputs are invalid"
        })
        return;
    }else{
        res.send({
            response
        })
    }

})




app.listen(3008)