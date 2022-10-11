require('dotenv').config();
const express = require('express');

const app = express();
const cookieParser = require('cookie-parser');

const userRouter = require('./routes/userRoute');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use('/user', userRouter);

app.use('*', (_, res) =>
  res.status(404).send("This is not the page you're looking for..."),
);

app.use((err, _, res) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 500,
    message: { err: 'An error occurred' },
  };
  const errorObj = { ...defaultErr, ...err };
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});

app.listen(process.env.PORT, () =>
  console.log(`Listening on port ${process.env.PORT}`),
);

module.exports = app;
