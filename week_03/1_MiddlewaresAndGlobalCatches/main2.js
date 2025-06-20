// solving the previous problem using middleware

const express = require("express");
const app = express();

// Middleware to validate user information
function userMiddleware(req, res, next) {
    const username = req.headers.username;
    const password = req.headers.password;

    if (username !== "mukesh" || password !== "pass") {
         res.status(403).json({
            msg: "Incorrect user input",
        });
    } else {
        next();
    }
}

// Middleware to validate kidneyId
function kidneyMiddleware(req, res, next) {
    const kidneyId = parseInt(req.query.kidneyId);
 
    //Query Params Are Strings — Not Numbers
    //You're comparing the query string with numbers. But req.query.kidneyId is a string by default.
    // so always parse it into integers, as done in the above line

    if (kidneyId !== 1 && kidneyId !== 2) {
         res.status(403).json({
            msg: "Incorrect id inputs",
        });
    } else {
        next();
    }
}

// Routes
app.get("/health-checkup", userMiddleware, kidneyMiddleware, function (req, res) {
    // do something with kidney here
    res.send("Your heart is healthy");
});

app.get("/kidney-check", userMiddleware, kidneyMiddleware, function (req, res) {
    // do something with kidney here
    res.send("Your heart is healthy");
});

app.get("/heart-check", userMiddleware, function (req, res) {
    // do something with user here
    res.send("Your heart is healthy");
});

app.listen(3003);