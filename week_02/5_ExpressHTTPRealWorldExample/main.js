// Express and HTTP with real world examples and postman

// creating a http server
// we are using express for it
// express is not a part of node library like fs does(we have used fs previously)
// so to bring express into your machine give the following input in your terminal(note directory of the terminal should be same to your js file):-
// npm install express
// nodemon main.js  (nodemon yourFileName) (run it before opening the port(localhost) in the browser)



// // basic stuff like summing up the numbers
// const express = require("express");
// const app = express();

// function calculationSum(n){
//     let ans=0;
//     for(let i=0; i<=n; i++){
//         ans= ans +i;
//     }
//     return ans;
// }

// app.get("/", function(req, res){
//     const n = req.query.n;
//     const ans = calculationSum(n);
//     res.send(ans.toString());
// })

// app.listen(3001);



// Request methods
// 1. GET - going for a consultation to get a check up 
// 2. POST - going to get a new kidney inserted
// 3. PUT - going to get a kidney replaced 
// 4. DELETE - going to get a kidney removed

// Status codes
// 1. 200 - everything went fine 
// 2. 404 - doctor is not in the hospital
// 3. 500 - mid surgery light went away
// 4. 411 - inputs were incorrect, wrong person came to surgery
// 5. 403 - you were not allowed in the hospital(means no access)


// creating a hospital functionality 
const express = require("express");

const app = express();

// req, res => request and response
app.get("/", function(req, res){

    res.send("hello, world ha ha, i am mb012haha");
    
})

app.listen(3001);
