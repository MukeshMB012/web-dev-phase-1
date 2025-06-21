// Authentication

//Lets start by creating our assignment for today, A website which has 2 endpoints-

// 1st end                                                            
// POST/signin
// Body-{
// username: string
// password: string
// }
// Return a json web token with username encrypted

// 2nd end
// GET/users
// Headers- 
// Authorization header
// Returns an array of all users if user is signed in (token is correct)
// Returns 403 status code if not

// Two function from jwt library is used here
// jwt.sign and jwt.verify

const express = require("express");
const jwt = require("jsonwebtoken");
const jwtPassword = "123456";

const app = express();

app.use(express.json());

const ALL_USERS = [
  {
    username: "harkirat@gmail.com",
    password: "123",
    name: "harkirat singh",
  },
  {
    username: "raman@gmail.com",
    password: "123321",
    name: "Raman singh",
  },
  {
    username: "priya@gmail.com",
    password: "123321",
    name: "Priya kumari",
  },
];

function userExists(username, password) {
  // write logic to return true or false if this user exists
  // in ALL_USERS array
  let userExistsFlag = false;
  for(let i=0; i<ALL_USERS.length; i++){
    if(ALL_USERS[i].username == username && ALL_USERS[i].password == password){
      userExistsFlag = true;
    }
  }
  return userExistsFlag;

}

app.post("/signin", function (req, res) {
  const username = req.body.username;
  const password = req.body.password;

  if (!userExists(username, password)) {
    return res.status(403).json({
      msg: "User doesnt exist in our in memory db",
    });
  }

  var token = jwt.sign({ username: username }, jwtPassword);
  // to check token details you can visit jwt.io
  return res.json({
    token,   
  });
});

app.get("/users", function (req, res) {
  const token = req.headers.authorization;

  const decoded = jwt.verify(token, jwtPassword);
  const username = decoded.username;

  // //return a list of all users
  // res.json({
  //   usersmuku: ALL_USERS
  // })

  // return a list of users other than this username
  // revise the use of filter
  res.json({
    users_output: ALL_USERS.filter(function(value){
      if(value.username == username){
        return false;
      }else{
        return true;
      }
    }) 
  })
  
  
});

app.listen(3000)








// // Detail explanation of the above codes 
// // Importing Express library to create our server and handle routes
// const express = require("express");

// // Importing jsonwebtoken library to create and verify JWT tokens
// const jwt = require("jsonwebtoken");

// // Secret key used for signing and verifying JWT tokens
// const jwtPassword = "123456";

// // Creating an instance of an Express application
// const app = express();

// // Middleware to parse incoming JSON request bodies (needed for POST requests)
// app.use(express.json());

// // In-memory list of all users (dummy database)
// const ALL_USERS = [
//   {
//     username: "harkirat@gmail.com",
//     password: "123",
//     name: "harkirat singh",
//   },
//   {
//     username: "raman@gmail.com",
//     password: "123321",
//     name: "Raman singh",
//   },
//   {
//     username: "priya@gmail.com",
//     password: "123321",
//     name: "Priya kumari",
//   },
// ];

// // Function to check if a user exists in ALL_USERS based on username and password
// function userExists(username, password) {
//   // Returns true if user with matching username and password is found, else false
//   return ALL_USERS.some(user => user.username === username && user.password === password);
// }

// // Route to handle user sign-in (login)
// // It expects username and password in the request body
// app.post("/signin", function (req, res) {
//   const username = req.body.username;
//   const password = req.body.password;

//   // If the user doesn't exist, send a 403 Forbidden response
//   if (!userExists(username, password)) {
//     return res.status(403).json({
//       msg: "User doesnt exist in our in memory db",
//     });
//   }

//   // If the user is valid, generate a JWT token
//   // The token contains the username and is signed using jwtPassword
//   var token = jwt.sign({ username: username }, jwtPassword);

//   // Send the token back to the user
//   return res.json({
//     token,
//   });
// });

// // Route to get list of users (excluding the one who made the request)
// // This route is protected and requires a valid JWT token in Authorization header
// app.get("/users", function (req, res) {
//   // Get token from the Authorization header
//   const token = req.headers.authorization;

//   try {
//     // Verify the token using the secret password
//     const decoded = jwt.verify(token, jwtPassword);

//     // Get the username from the decoded token
//     const username = decoded.username;

//     // Filter out the logged-in user from the list of all users
//     const otherUsers = ALL_USERS.filter(user => user.username !== username);

//     // Return the list of other users
//     return res.json(otherUsers);

//   } catch (err) {
//     // If token is invalid or expired, return 403 Forbidden
//     return res.status(403).json({
//       msg: "Invalid token",
//     });
//   }
// });

// // Start the server and listen on port 3000
// app.listen(3000, () => {
//   console.log("Server running on http://localhost:3000");
// });
