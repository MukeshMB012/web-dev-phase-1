// ASSIGNMENTS OF THIS LECTURES
// Learn by doing, lets create an in memory hospital

// you need to create 4 routes(4 things that the hospital can do)
// 1. GET - userr can check how many kidney they have and their health 
// 2. POST - user can add a new kidney
// 3. PUT - user can replace a kidney, make it healthy
// 4. DELETE - user can remove a kidney
// Following things needs to be included 
// 1. What should happen if they try to delete when there are no kidneys?
// 2. What should happen if they try to make a kidney healthy when all are already healthy..

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
        healthy: true
    }, {
        healthy: true
    }]
}]

app.use(express.json());

app.get("/", function(req, res){
    // logic
    // you can insert the input using route which is called query input.
    const johnKidneys = users[0].kidneys;
    const numberOfKindneys = johnKidneys.length;
    let numberOfHealthyKidneys = 0;
    for(let i= 0; i<johnKidneys.length; i++){
        if(johnKidneys[i].healthy){
            numberOfHealthyKidneys = numberOfHealthyKidneys +1;
        }
    }
    const numberOfUnhealthyKidneys = numberOfKindneys - numberOfHealthyKidneys;
    res.json({
        numberOfKindneys,
        numberOfHealthyKidneys,
        numberOfUnhealthyKidneys
    })
}) 

app.post("/", function(req, res){
    // send data from the body - another input type
    // const n = req.query.n; :- when you passes input from the route using (?)

    console.log(req.body)
    const isHealthy = req.body.isHealthy;
    users[0].kidneys.push({
        healthy: isHealthy
    })
    res.json({
        msg: "Done!"
    })

})

app.put("/", function(req, res){
     if(isThereAtleastOneUnhealthyKidney()){
        for(let i= 0; i< users[0].kidneys.length; i++){
        users[0].kidneys[i].healthy = true;
    }
    res.json({
        msg:"kidney replaced"
    })  //this line is must to do, so that it confirms it functionality.
     } else{
        res.status(411).json({
            msg: "Your all the kidney are allready healthy"
        })
    }
    
})

app.delete("/", function(req, res){
    // logic below will simply remove the unhealthy kidney and make new array consisting of healthy kidney
    // when there is no unhealthy kidney, and user ask for delete. you should return a 411(wrong input)
    if(isThereAtleastOneUnhealthyKidney()){
        const newKidneys = [];
    for(let i= 0; i<users[0].kidneys.length; i++){
        if(users[0].kidneys[i].healthy){
            newKidneys.push({
                healthy: true
            })
        }
    }
    users[0].kidneys = newKidneys;
    res.json({msg: "done!"})
    } else{
        res.status(411).json({
            msg: "You have no bad kidney to delete/remove it"
        })
    }
    
})

function isThereAtleastOneUnhealthyKidney(){
    let atleastOneUnhealthyKidney = false;
    for(let i = 0; i<users[0].kidneys.length; i++){
        if(!users[0].kidneys[i].healthy){
            atleastOneUnhealthyKidney = true;
        }
    }
    return atleastOneUnhealthyKidney;
}

app.listen(3002);