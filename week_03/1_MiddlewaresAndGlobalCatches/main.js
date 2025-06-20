// dump way of doing input validation and authentication.
// why dump, because if i want to create a new route let say replacement(post) route, than again i need to write this logic(authentication and validation logic)

// before we proceed, lets add constraints to our route 
// 1. User needs to send a kidneys as a query param which should be a number from 1-2(humans only has 2 kidneys)
// 2. User should send a username and password in headers


// // 1st dump way
// const express = require("express");
// const app = express();

// app.get("/health-checkup", function(req, res){
//     // do health checkup
//     const kidneyId = req.query.kidneyId;
//     const username = req.headers.username;
//     const password = req.headers.password;

//     if(username != "mukesh" || password != "pass"){
//         res.status(403).json({
//             msg: "User doesnt exist"
//         })
//         return; 
//     }
//     if(kidneyId != 1 && kidneyId != 2){
//         res.status(411).json({
//             msg: "wrong inputs"
//         })
//         return;
//     }
//     // do something with kidney here

//     res.send("Your kidneys are healthy")
// })

// app.listen(3003);




// // 2nd dump way
// // when there are two route, and you do the validation and authentication two times separately.
// const express = require("express");

// const app = express();

// app.get("/health-checkup", function (req, res) {
//     // do health checks here
//     const kidneyId = req.query.kidneyId;
//     const username = req.headers.username;
//     const password = req.headers.password;

//     if (username != "mukesh" || password != "pass") {
//         res.status(403).json({
//             msg: "User doesnt exist",
//         });
//         return;
//     }

//     if (kidneyId != 1 && kidneyId != 2) {
//         res.status(411).json({
//             msg: "wrong inputs",
//         });
//         return;
//     }

//     // do something with kidney here

//     res.send("Your kidneys are healthy");
// });

// app.put("/replace-kidney", function (req, res) {
//     const kidneyId = req.query.kidneyId;
//     const username = req.headers.username;
//     const password = req.headers.password;

//     if (username != "mukesh" || password != "pass") {
//         res.status(403).json({
//             msg: "User doesnt exist",
//         });
//         return;
//     }

//     if (kidneyId != 1 && kidneyId != 2) {
//         res.status(411).json({
//             msg: "wrong inputs",
//         });
//         return;
//     }

//     // do kidney replacement logic here

//     res.send("Your heart is healthy");
// });

// app.listen(3003);




// // 3rd dump way
// // still we are doing the same thing, but this time we have introduced the function which will check the input validation and authentication.
// const express = require("express");
// const app = express();

// // Validator functions
// function usernameValidator(username, password) {
//     if (username != "mukesh" || password != "pass") {
//         return false;
//     }
//     return true;
// }

// function kidneyValidator(kidneyId) {
//     if (kidneyId != 1 && kidneyId != 2) {
//         return false;
//     }
//     return true;
// }

// // Health checkup route
// app.get("/health-checkup", function (req, res) {
//     const kidneyId = req.query.kidneyId;
//     const username = req.query.username;
//     const password = req.query.password;

//     if (!usernameValidator(username, password)) {
//         res.status(403).json({
//             msg: "User doesnt exist",
//         });
//         return;
//     }

//     if (!kidneyValidator(kidneyId)) {
//         res.status(411).json({
//             msg: "Wrong inputs",
//         });
//         return;
//     }

//     // do something with kidney here
//     res.send("Your kidneys are healthy");
// });

// // Kidney replacement route
// app.put("/replace-kidney", function (req, res) {
//     const kidneyId = req.query.kidneyId;
//     const username = req.headers.username;
//     const password = req.headers.password;

//     if (!usernameValidator(username, password)) {
//         res.status(403).json({
//             msg: "User doesnt exist",
//         });
//         return;
//     }

//     if (!kidneyValidator(kidneyId)) {
//         res.status(411).json({
//             msg: "Wrong inputs",
//         });
//         return;
//     }

//     // do kidney replacement logic here
//     res.send("Your heart is healthy");
// });

// app.listen(3003);


// we will solve the same question in smartest way in main2.js
