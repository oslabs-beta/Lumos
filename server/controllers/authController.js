const jwt = require('jsonwebtoken');

const authController = {};

authController.sendToken = async (req, res, next) => {
  const token = jwt.sign(res.locals.password, process.env.JWT_SECRET);
  res.cookie('token', token);
  return next();
};

authController.verifyToken = async (req, res, next) => {
  try {
    const token = req.cookies['token'];
    if (!token) {
      return next({
        log: 'authController.verifyToken: No token exists',
        status: 401,
        message: 'You are not authorized to perform this action',
      });
    } else {
      jwt.verify(token, process.env.JWT_SECRET, (error, result) => {
        if (error) return next(error);
        req.user = result;
        return next();
      });
    }
  } catch (err) {
    return next({
      log: 'Error occurred in authController.verifyToken',
      status: 401,
      message: 'You are not authorized to perform this action',
    });
  }
};

module.exports = authController;
