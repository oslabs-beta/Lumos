const metricController = {};
const getMetrics = require('../aws/getMetrics.js');

metricController.getMetrics = (req, res, next) => {
    const {startTime, endTime, metricName, period} = req.body;

    console.log('entered getMetrics');
    res.locals.metrics = getMetrics(startTime, endTime, metricName, period);
    
    return next();
}

module.exports = metricController;
