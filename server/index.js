const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const apiRoutes = require('./routes/api');
const errorHandler = require('./middlewares/errorHandler');

const app = express();

// Connect to the MongoDB database
mongoose.connect('mongodb://localhost/blindAssistant', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Set up body parser to parse request bodies
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Set up the API routes
app.use('/api', apiRoutes);

// Set up the error-handling middleware
app.use(errorHandler);

// Start the server
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server listening on port ${port}`));




// imports the required dependencies, including express for the server, body-parser for parsing request bodies, mongoose for interacting with the MongoDB database, and the API routes and error-handling middleware.
// Connects to the MongoDB database.
// Sets up the body parser to parse request bodies.
// Sets up the API routes using the apiRoutes imported from ./routes/api.
// Sets up the error-handling middleware using the errorHandler imported from ./middlewares/errorHandler.
// Starts the server and listens for incoming requests on the specified port (defaulting to 5000 if the PORT environment variable is not set).
