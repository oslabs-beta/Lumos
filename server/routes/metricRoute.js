const express = require('express');
const router = express.Router();
//middleware
const metricController = require('../controllers/metricController.js');
const authController = require('../controllers/authController');

router.post(
  '/',
  authController.verifyToken,
  metricController.getMetrics,
  (req, res) => {
    res.status(200).json(res.locals.metrics);
  },
);

module.exports = router;
