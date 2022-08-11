const jwt = require('jsonwebtoken');

const authController = {};

authController.sendToken = async (req, res, next) => {
  const token = jwt.sign(res.locals.password, process.env.JWT_SECRET);
  return res.send(token);
};

authController.verifyToken = async (req, res, next) => {
  try {
    const header = req.headers['authorization'];
    const token = header && header.split(' ')[1];

    if (token === null) {
      return next({
        log: 'Error occurred in authController.verifyToken',
        status: 401,
        message: err,
      });
    } else {
      jwt.verify(token, JWT_SECRET, (error, result) => {
        if (err) return next(error);
        req.user = result;
        return next();
      });
    }
  } catch (err) {
    return next(err);
  }
};

module.exports = authController;
