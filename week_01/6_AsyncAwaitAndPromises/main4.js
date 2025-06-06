// promises different stages

// // promises pending
// let p= new Promise(function(resolve){

// })
// console.log(p)

// simple promise example
let p= new Promise(function(resolve){
    resolve("hi there");
})
p.then(function(){
    console.log(p);
})


