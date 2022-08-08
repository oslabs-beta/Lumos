const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController.js");

// router.post('/login', (req, res) => {
//     return res.json({})
// })

router.post("/register", userController.createUser, (req, res) => {
  res.status(200).send("User got created in database");
});

module.exports = router;
