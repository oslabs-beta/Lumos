const express = require('express');
const router = express.Router();

const metricController = require('../controllers/metricController.js');

router.post('/', metricController.consoleLog, metricController.getMetrics, (req, res) => {
    res.status(200).json(res.locals.metrics);
})

module.exports = router;