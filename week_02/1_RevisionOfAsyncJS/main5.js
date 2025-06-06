// async fnct:- 
// some sync task:-
// want my work async return:- 
// some other sync task

function myOwn(duration){
    const p= new Promise(function(resolve){
        setTimeout(resolve, duration);
    })
    return p;
}

const ans= myOwn(5000);
ans.then(function(){
    console.log("hi, it's done.");
    ans2=0;
    for(let i=0; i<10; i++){
        ans2= ans2+i;
    }
    console.log(ans2);
})

