/* eslint-disable linebreak-style */
require("dotenv").config();
const express = require("express");
const path = require("path");

const app = express();
const PORT = 3000;
const cookieParser = require("cookie-parser");

const userRouter = require("./routes/userRoute");
const metricRouter = require("./routes/metricRoute");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use("/user", userRouter);
app.use("/metric", metricRouter);

// app.get("/*", function (req, res) {
//   res.sendFile(path.join(__dirname, "client/index.html"), function (err) {
//     if (err) {
//       res.status(404).send(err);
//     }
//   });
// });

app.use(express.static(path.resolve(__dirname, "../dist")));

// catch all route handler
app.use("*", (req, res) =>
  res.status(404).send("This is not the page you're looking for...")
);

// Global error handler
app.use((err, req, res, next) => {
  const defaultErr = {
    log: "Express error handler caught unknown middleware error",
    status: 500,
    message: { err: "An error occurred" },
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
