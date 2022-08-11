const metricController = {};
const getMetrics = require('../aws/getMetrics.js');

metricController.getMetrics = async(req, res, next) => {
    console.log('entered getMetrics');
    const {startTime, endTime, metricName, period} = req.body;

    // startTime: August 1, 2022 15:30:30
    // convertedStartTime: Mon Aug 01 2022 15:30:30 GMT-0400 (Eastern Daylight Time)

    const convertedStartTime = new Date(startTime) 
    const convertedEndTime = new Date(endTime)

    console.log(startTime, `converted startTime: ${convertedStartTime}`);

    try {
        
        let result = await getMetrics(convertedStartTime, convertedEndTime, metricName, period);
        console.log(result);
        res.locals[result.Label] = result.Values;
        return next();
    } catch(err) {
        console.log('error: ', err)
    }
}

metricController.consoleLog = (req, res, next) => {
    console.log('entered consoleLOg');

    return next();
}

module.exports = metricController;
