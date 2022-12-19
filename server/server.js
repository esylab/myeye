// Imports the http module and the app (which is the express app defined in index.js).
// Defines the port on which the server should listen for incoming requests (defaulting to 5000 if the PORT environment variable is not set).
// Creates an HTTP server using the http.createServer() method, passing in the app as the request handler.
// Starts the server and listens for incoming requests on the specified port.



const http = require('http');
const app = require('./index');

const port = process.env.PORT || 5000;

const server = http.createServer(app);

server.listen(port, () => console.log(`Server listening on port ${port}`));




