//Databases

// // Basic syntax for use of Database, by taking input from the code itself
// const mongoose = require("mongoose");
// mongoose.connect("mongodb+srv://nirvanamb012:BUeRRTmjxbHsWAtZ@cluster0.iyun8fr.mongodb.net/userappnew")

// const User = mongoose.model('Users', { name: String, email: String, password: String});

// const user = new User({ 
//     name: 'Mukesh',
//     email: 'mukesh423@gmail.com',
//     password: '123456'
// });
// user.save();



// Basic syntax for use of Database, by taking input from the body outside  
const express = require("express");
const mongoose = require("mongoose");
const app = express();

app.use(express.json());

mongoose.connect("mongodb+srv://nirvanamb012:BUeRRTmjxbHsWAtZ@cluster0.iyun8fr.mongodb.net/userappnew")

const User = mongoose.model('Users', { name: String, email: String, password: String});

app.post("/signup", async function(req,res){
    const username = req.body.username;
    const password = req.body.password;
    const name = req.body.name;
    
    const existingUser = await User.findOne({ email: username });
    //CRUD => create, update, delete, read
    if(existingUser){
        return res.status(480).send("Username already exists");
    }

    const user = new User({ 
    name: name,
    email: username,
    password: password
    });

    user.save();
    res.json({
        "msg": "User created successfully"
    })

})

app.listen(3000)







// // Detail explanation of the code

// // Import required libraries
// const express = require("express"); // Express framework for building APIs
// const mongoose = require("mongoose"); // Mongoose library to interact with MongoDB

// // Create an instance of an Express application
// const app = express();

// // Middleware to parse incoming JSON data from the request body
// app.use(express.json());

// // Connect to MongoDB using Mongoose
// // This URL includes username, password, and cluster info from MongoDB Atlas
// mongoose.connect("mongodb+srv://nirvanamb012:BUeRRTmjxbHsWAtZ@cluster0.iyun8fr.mongodb.net/userappnew")

// // Define a Mongoose model (like a schema for a MongoDB collection)
// // 'Users' will be the collection name in MongoDB
// const User = mongoose.model('Users', {
//     name: String,
//     email: String,
//     password: String
// });

// // Route handler for POST request at '/signup'
// // Used when a user signs up by sending data (name, username, password)
// app.post("/signup", async function(req, res) {
//     // Extract data from the request body
//     const username = req.body.username; // User's email (used as username)
//     const password = req.body.password; // User's password
//     const name = req.body.name;         // User's full name

//     // Check if a user already exists with the same email (username)
//     const existingUser = await User.findOne({ email: username });

//     // If user already exists, return a response with status code 480 (non-standard)
//     if(existingUser){
//         return res.status(480).send("Username already exists");
//     }

//     // If user doesn't exist, create a new user object using the User model
//     const user = new User({ 
//         name: name,
//         email: username,
//         password: password
//     });

//     // Save the new user to the MongoDB database
//     user.save(); //  Ideally use `await user.save()` for proper async handling

//     // Respond to the client with a success message in JSON format
//     res.json({
//         "msg": "User created successfully"
//     });
// });

// // Start the Express server and listen for incoming requests on port 3000
// app.listen(3000);
