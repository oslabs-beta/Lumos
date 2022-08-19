const getMetrics = require('../aws/getMetrics.js');

const metricController = {};

metricController.getMetrics = async (req, res, next) => {
  // console.log('entered getMetrics');

  const { startTime, endTime, period } = req.body;
  // console.log('req.body: ', req.body);
  // startTime: August 1, 2022 15:30:30
  // convertedStartTime: Mon Aug 01 2022 15:30:30 GMT-0400 (Eastern Daylight Time)

  // console.log('startTime: ', startTime);
  // console.log('endTime: ', endTime);
  // const convertedStartTime = new Date(startTime)
  // const convertedEndTime = new Date(endTime)
  // console.log(startTime, `converted startTime: ${convertedStartTime}`);

  try {
    let result = await getMetrics(startTime, endTime, period);
    // console.log(result);

    res.locals.metrics = { metrics: result };
    // console.log('FINAL OBJECT ', result);
    return next();
  } catch (err) {
    return next({
      log: 'Error occurred in metricController.getMetrics',
      status: 401,
      message: err,
    });
  }
};

module.exports = metricController;
