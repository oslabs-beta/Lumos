const jwt = require("jsonwebtoken");

const authController = {};


authController.verifyToken = async (req, res, next) => {
  try {
    const token = req.cookies["token"];
    if (!token) {
      const token = await jwt.sign(res.locals.password, process.env.JWT_SECRET);
      console.log("token created: ", { token });
      res.cookie("token", token);
      return next();
    } else {
      jwt.verify(token, process.env.JWT_SECRET, (error, result) => {
        if (error)
          return next({
            log: "Token could not be verified in authController.verifyToken",
            status: 401,
            message: err,
          });
        req.user = result;
        console.log("TOKEN VERIFIED");
        return next();
      });
    }
  } catch (err) {
    return next({
      log: "Error occurred in authController.verifyToken",
      status: 401,
      message: err,
    });
  }
};

module.exports = authController;
