const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController.js");

router.post("/register", userController.createUser, (req, res) => {
  res.status(200).send("User got created in database");
});

router.post("/signIn", userController.consoleLog, userController.verifyUser, (req, res) => {
  res.status(200).send("User found in database");
});


module.exports = router;
