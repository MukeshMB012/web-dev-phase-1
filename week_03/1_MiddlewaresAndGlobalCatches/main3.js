// some popular middleware


// rate limiting middleware- do it later


// numberOfRequests middleware
let numberOfRequests = 0;
function calculateRequests(req, res, next){
    numberOfRequests ++;
    console.log(numberOfRequests);
    next();
}
// now call this function in different routes to get the number of requests


// global catches middleware( it is defined at the end of the code)
// it takes 4 inputs(not 3 inputs)
app.use(function(err, req, res, next){
    res.json({
        msg: "Sorry something is up with our server"
    })
})