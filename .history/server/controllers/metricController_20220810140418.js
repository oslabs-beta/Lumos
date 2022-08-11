const metricController = {};
const getMetrics = require('../aws/getMetrics.js');

metricController.getMetrics = (req, res, next) => {
    const {startTime, endTime, metricName, period} = req.body;

    console.log('entered getMetrics');
    let result = getMetrics(startTime, endTime, metricName, period);
    console.log(result);
    return next();
}

module.exports = metricController;
