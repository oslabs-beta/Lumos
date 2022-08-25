const jwt = require("jsonwebtoken");

const authController = {};

// authController.sendToken = async (req, res, next) => {
//   console.log("entered authController.getToken");
//   console.log("res.locals.password: ", res.locals.password);
//   const token = await jwt.sign(res.locals.password, process.env.JWT_SECRET);

//   console.log("token created: ", { token });
//   res.cookie("token", token);
//   return next();
// };

authController.verifyToken = async (req, res, next) => {
  try {
    const token = req.cookies["token"];
    if (!token) {
      // console.log("YOU HAVE NO TOKEN");
      // return next({
      //   log: "authController.verifyToken: No token exists",
      //   status: 401,
      //   message: "You are not authorized to perform this action",
      // });

      //sent token

      console.log("res.locals.password: ", res.locals.password);
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
