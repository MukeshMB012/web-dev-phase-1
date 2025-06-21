//Authentication

// Project for today - (will do it after understanding the authentication)
// Let people sign up to your website
// Only allow signed in users to see people (create a dummy people list)

// Before we get into authentication, lets understand some cryptography jargon
// 1. Hashing
// 2. Encryption
// 3. Json web tokens (decode, verify)
// 4. Local storage

//Details explanation of the above term

// 1. Hashing
// Definition:
// Hashing is the process of converting input data (like a password) into a fixed-size string using a mathematical algorithm.
// This output is called a hash and it cannot be reversed back to the original input.

// How it Works:
// A hashing algorithm (like SHA-256, bcrypt) takes input data and produces a hash.

// Even a tiny change in the input creates a very different hash.

// Hashing is one-way: you cannot get the original input from the hash.

// Example Use:
// Hashing is commonly used to store passwords securely in databases. Instead of saving the password, only its hash is stored.
// During login, the entered password is hashed and compared with the stored hash.



// 2. Encryption
// Definition:
// Encryption is the process of converting data into a secret format using a key, so that only authorized parties can read it. 
// It can be reversed (decrypted) using the correct key.

// How it Works:
// The original data (plaintext) is combined with a secret key using an encryption algorithm to create ciphertext.

// The ciphertext can later be decrypted back to the original data using the key.

// Types:
// A. Symmetric encryption: Same key is used for both encryption and decryption.

// B. Asymmetric encryption: A public key encrypts the data, and a private key decrypts it.

// Example Use:
// Encryption is used to protect sensitive data such as credit card details, personal information,
//  or any confidential message sent over the internet.



// 3. JSON Web Tokens (JWT)
// Definition:
// A JSON Web Token (JWT) is a compact and secure way of transmitting information between a server and a client as a JSON object.
// It is widely used for authentication in web applications.

// Structure:
// A JWT has three parts:

// Header.Payload.Signature

// These parts are encoded using Base64 and separated by dots (.).

// Header: Contains information about the algorithm used.

// Payload: Contains the actual data (e.g., user ID, role, expiration).

// Signature: Ensures the token has not been tampered with.

// How it Works:
// The server creates a JWT after the user logs in.

// The token is sent to the client and stored (typically in local storage).

// The client sends the token in future requests to access protected routes.

// The server verifies the token before allowing access.


// Decode (JWT):
// Decoding means extracting the payload from a JWT without checking if it’s secure or valid. 
// This only shows the data; it does not confirm its authenticity.

// Example (JavaScript):

// const payload = JSON.parse(atob(token.split('.')[1]));

// This extracts the second part (payload) of the token and decodes it using Base64.

// Note: This only reads the token; it does not ensure the data is trustworthy.


// Verify (JWT):
// Verification checks if the token is genuine and hasn’t been altered. 
// This is done using the signature part of the token and a secret key.

// How Verification Works:

// The server recalculates the signature using the header and payload.

// If the new signature matches the token’s signature, it is valid.

// If not, the token is considered invalid or tampered with.

// Example (Node.js):

// const jwt = require('jsonwebtoken');
// jwt.verify(token, 'your-secret-key');

// Verification must always be done on the server to ensure security.



// 4. Local Storage
// Definition:
// Local Storage is a browser feature that allows web applications to store data on the user's device as key-value pairs.
// This data remains saved even after the browser is closed.

// How it Works:
// Local Storage is accessed using JavaScript with localStorage.

// Examples:

// // Store data
// localStorage.setItem("username", "Mukesh");

// // Get data
// let user = localStorage.getItem("username");

// // Remove data
// localStorage.removeItem("username");

// Key Points:
// Only strings can be stored (objects must be stringified).

// Storage is local to the user's browser and not shared across devices.

// It is useful for storing things like JWTs, themes, user preferences, etc.