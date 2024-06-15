const express = require('express'); // Import express
const app = express(); // Create an express app
const port = process.env.PORT || 3000; // Set the port

//Middleware to parse the request body as JSON
app.use(express.json()); // Parse JSON bodies
app.use(express.urlencoded({extended: true})); // Parse URL-encoded bodies

//Routes 
app.get('/', (req, res) => {
    res.send('Hello Robert');
})

//Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})