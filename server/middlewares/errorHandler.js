// Exports a middleware function that takes in the following parameters:
// err: The error object.
// req: The request object.
// res: The response object.
// next: The next middleware function in the chain.
// Logs the error stack trace to the console using console.error().
// Sends a response to the client with a status code of 500 (Internal Server Error) and a message indicating that something went wrong.


module.exports = (err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send({ message: 'Something went wrong' });
};

