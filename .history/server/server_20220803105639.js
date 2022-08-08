/* eslint-disable linebreak-style */
const express = require('express');

const app = express();
const PORT = 3000;

// catch all route handler
app.use('*', (req, res) => res.status(404).send("This is not the page you're looking for..."));

// Global error handler
app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 500,
    message: { err: 'An error occurred' },
  };
  const errorObj = { ...defaultErr, ...err };
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});

// start server
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}...`);
});

module.exports = app;
