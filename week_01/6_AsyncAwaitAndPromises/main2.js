// fs.readFile :- examples of asynchronous function
// there is unwanted problem, don't know what?  :- it is solved now

const fs= require("fs");
// filesystem module

fs.readFile("a.txt", "utf-8", function(err, data){
    console.log(data);
})

console.log("hi there");
let a=0;
// takes very long, longer than the file read
for(let i=0; i<1000000000; i++){
    a++;
   
}
console.log(a);
console.log("hi there 2");
