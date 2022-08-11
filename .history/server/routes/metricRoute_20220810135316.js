const express = require('express');
const router = express.Router();

const metricController = require('../controllers/metricController.js');

router.get('/metric', metricController.getMetrics, (req, res) => {
    res.status(200).send('it worked?');
})