const getMetrics = require('../aws/getMetrics.js');

const metricController = {};

metricController.getMetrics = async (req, res, next) => {

  const { startTime, endTime, period } = req.body;

  try {
    let result = await getMetrics(startTime, endTime, period);
    

    res.locals.metrics = { metrics: result };
    
    return next();
  } catch (err) {
    console.log('error: ', err);
  }
};

metricController.consoleLog = (req, res, next) => {
  console.log('entered consoleLOg');

  return next();
};

module.exports = metricController;
