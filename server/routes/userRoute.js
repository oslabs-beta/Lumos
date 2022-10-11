const express = require('express');

const router = express.Router();

const userController = require('../controllers/userController');

router.post('/register', userController.createUser, (_, res) =>
  res.status(200).send(res.locals.user),
);

module.exports = router;
