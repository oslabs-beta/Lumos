const metricController = {};
const getMetrics = require('../aws/getMetrics.js');

metricController.getMetrics = async(req, res, next) => {
    console.log('entered getMetrics');
    const {startTime, endTime, metricName, period} = req.body;

    const convertedStartTime = new Date(startTime)
    const convertedEndTime = new Date(endTime)

    console.log(startTime, `converted startTime: ${convertedStartTime}`);

    try {
        
        let result = await getMetrics(convertedStartTime, convertedEndTime, metricName, period);
        console.log(result);
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
