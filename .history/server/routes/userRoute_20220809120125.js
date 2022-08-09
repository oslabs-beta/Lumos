const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController.js");

router.post("/bob", userController.consoleLog, userController.verifyUser, (req, res) => {
  res.status(200).send("User found in database");
});

router.post("/register", userController.createUser, (req, res) => {
  res.status(200).send("User got created in database");
});



module.exports = router;
