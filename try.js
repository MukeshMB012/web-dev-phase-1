// ASSIGNMENTS OF THIS LECTURES
// Learn by doing, lets create an in memory hospital

// you need to create 4 routes(4 things that the hospital can do)
// 1. GET - userr can check how many kidney they have and their health 
// 2. POST - user can add a new kidney
// 3. PUT - user can replace a kidney, make it healthy
// 4. DELETE - user can remove a kidney

// Hints are below

// // hint 1
// var users = [{
//     name: "John",
//     kidneys: [{
//         healthy: false
//     }, {
//         healthy: true
//     }]
// }]
// console.log(users[0]);

// hint 2
const express= require("express");
const app= express();

var users = [{
    name: "John",
    kidneys: [{
        healthy: false
    }, {
        healthy: true
    }]
}]

app.get("/", function(req, res){
    
})

app.post("/", function(req, res){

})

app.put("/", function(req, res){

})

app.delete("/", function(req, res){

})