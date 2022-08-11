const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController.js");

router.post("/register", userController.createUser, (req, res) => {
  res.status(200).send("User got created in database");
});

router.post("/login", userController.verifyUser, (req, res) => {
  res.status(200).send(res.locals.verifiedUser);
});


module.exports = router;
