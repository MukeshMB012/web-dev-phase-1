// Database HOT Assignment

//Notes codes
const express = require("express");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const jwtPassword = "123456";

mongoose.connect(
  "your_mongo_url",
);

const User = mongoose.model("User", {
  name: String,
  username: String,
  pasword: String,
});

const app = express();
app.use(express.json());

function userExists(username, password) {
  // should check in the database
}

app.post("/signin", async function (req, res) {
  const username = req.body.username;
  const password = req.body.password;

  if (!userExists(username, password)) {
    return res.status(403).json({
      msg: "User doesnt exist in our in memory db",
    });
  }

  var token = jwt.sign({ username: username }, "shhhhh");
  return res.json({
    token,
  });
});

app.get("/users", function (req, res) {
  const token = req.headers.authorization;
  try {
    const decoded = jwt.verify(token, jwtPassword);
    const username = decoded.username;
    // return a list of users other than this username from the database
  } catch (err) {
    return res.status(403).json({
      msg: "Invalid token",
    });
  }
});

app.listen(3000);








// // Detail explanation of the code

// // Importing required modules
// const express = require("express");               // Express framework for building the API
// const jwt = require("jsonwebtoken");              // For generating and verifying JWT tokens
// const mongoose = require("mongoose");             // Mongoose library for MongoDB interactions

// // JWT secret password used for signing and verifying tokens (should be stored securely)
// const jwtPassword = "123456";

// // Connecting to MongoDB database (replace with your actual MongoDB URI)
// mongoose.connect("your_mongo_url");

// // Defining a User model (MongoDB collection name: 'users')
// //  'pasword' has a typo – should be 'password'
// const User = mongoose.model("User", {
//   name: String,
//   username: String,
//   pasword: String, //  Typo here, should be 'password'
// });

// const app = express();

// // Middleware to parse incoming JSON payload from request body
// app.use(express.json());

// // Placeholder function to check whether a user exists with given username and password
// function userExists(username, password) {
//   //  Currently not implemented
//   //  Should check in the MongoDB database using User.findOne({ username, password })
// }

// // POST endpoint for user sign-in/login
// app.post("/signin", async function (req, res) {
//   const username = req.body.username;   // Extracting username from request body
//   const password = req.body.password;   // Extracting password from request body

//   // Check if user exists in database (function not implemented yet, so always returns false)
//   if (!userExists(username, password)) {
//     return res.status(403).json({
//       msg: "User doesnt exist in our in memory db", // Respond with forbidden if user not found
//     });
//   }

//   // If user exists, generate a JWT token with payload containing username
//   var token = jwt.sign({ username: username }, "shhhhh"); //  Secret is hardcoded, use jwtPassword instead

//   // Send the generated token to the client
//   return res.json({
//     token,
//   });
// });

// // GET endpoint to retrieve user list (requires valid JWT token)
// app.get("/users", function (req, res) {
//   const token = req.headers.authorization; // Read token from the Authorization header

//   try {
//     // Verify the token using jwtPassword
//     const decoded = jwt.verify(token, jwtPassword); 

//     // Extract username from decoded token payload
//     const username = decoded.username;

//     //  Not implemented:
//     //  Should return list of users excluding the one with this username
//     // Example: const users = await User.find({ username: { $ne: username } });

//   } catch (err) {
//     // If token is invalid or expired, return error response
//     return res.status(403).json({
//       msg: "Invalid token",
//     });
//   }
// });

// // Start the Express server and listen on port 3000
// app.listen(3000);
