const jwt = require('jsonwebtoken');

// Hide this later in env file
const JWT_SECRET = 'f2960658fe4135e6ab6e4f173b522c558c98d43cafb1a5ef8f8015f375529e31f91f05cde7b7d2ea730a45032a5653fe7d70ddb1a2bee093e87a5fc68afed5ad'

const authController = {};

authController.sendToken = async (req, res, next) => {
  const token = jwt.sign(res.locals.password, JWT_SECRET);
  res.send(token);
};

authController.verifyToken = async (req, res, next) => {
  try {
    const header = req.headers['authorization'];
  const token = header && header.split(' ')[1];

  if (token === null) {
    return next({
      log: "Error occurred in authController.verifyToken",
      status: 401,
      message: err,
    })
  } else {
    jwt.verify(token, JWT_SECRET, (error, result) => {
      if (err) return next(error)
      req.user = result;
      return next();
    })
  }
  } catch (err) {
    return next(err)
  }
  
};

module.exports = authController;