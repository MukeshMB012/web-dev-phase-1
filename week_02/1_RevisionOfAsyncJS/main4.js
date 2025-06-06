// promise
// defining a synchronous function(using promise)
function promisifiedMyOwnSetTimeout(duration){
    const p = new Promise(function(resolve){
        setTimeout(function(){
            resolve();
        }, duration);
    });
    return p;
}

// calling a synchronous function
const ans = promisifiedMyOwnSetTimeout(1000);
ans.then(function(){
    console.log("timeout is done")
});