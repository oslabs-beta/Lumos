const express = require("express");
const router = express.Router();
//middleware
const userController = require("../controllers/userController.js");
const authController = require("../controllers/authController");

router.post(
  "/register",
  userController.createUser,
  authController.sendToken,
  (req, res) => res.status(200).send("User created in database")
);

router.post(
  "/login",
  userController.verifyUser,
  // authController.verifyToken,
  (req, res) => res.status(200).json(res.locals.verifiedUser)
);

module.exports = router;
