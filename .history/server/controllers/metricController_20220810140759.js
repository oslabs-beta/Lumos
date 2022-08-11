const metricController = {};
const getMetrics = require('../aws/getMetrics.js');

metricController.getMetrics = async(req, res, next) => {
    console.log('entered getMetrics');
    const {startTime, endTime, metricName, period} = req.body;

    
    let result = await getMetrics(startTime, endTime, metricName, period);

    console.log(result);
    return next();
}

metricController.consoleLog = (req, res, next) => {
    console.log('entered consoleLOg');

    return next();
}

module.exports = metricController;
