const express = require('express');
const router = express.Router();

const userController = require('../controllers/userController.js');
const authController = require('../controllers/authController');

router.post('/register', userController.createUser);

router.post('/login', userController.verifyUser, authController.sendToken);

module.exports = router;
