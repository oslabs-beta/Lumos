const db = require("../models/UserModels");
const bcrypt = require("bcryptjs");

const userController = {};

userController.createUser = async (req, res, next) => {
  try {
    const { email, password, firstname, lastname } = req.body;
    bcrypt.hash(password, 10, (err, hash) => {
      if (err) return err;
      else {
        const query = `INSERT INTO users (email, password, firstname, lastname) VALUES ('${email}', '${hash}', '${firstname}', '${lastname}')`;
        db.query(query)
          .then(() => {
            res.locals.password = hash;
            return next();
          })
          .catch(() =>
            next({
              log: "Cannot create user",
              status: 400,
              message: "Cannot create user",
            })
          );
      }
    });
  } catch (err) {
    return next({
      log: "Error occurred in userController.createUser",
      status: 400,
      message: err,
    });
  }
};

userController.verifyUser = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    const query = `SELECT email, password, firstname, lastname FROM users WHERE email='${email}'`;
    db.query(query)
      .then((data) => {
        bcrypt.compare(password, data.rows[0].password, (err, result) => {
          if (result) {
            res.locals.password = result;

            console.log(data.rows[0]);
            res.locals.user = {
              verifiedUser: true,
              firstName: data.rows[0].firstname,
              lastName: data.rows[0].lastname,
            };
            return next();
          } else {
            res.locals.verifiedUser = false;
            return next({
              log: "Error occurred in userController.verifyUser",
              status: 401,
              message: err,
            });
          }
        });
      })
      .catch((err) => {
        console.log('err: ', err);
        next({
          log: "Error occurred in userController.verifyUser",
          status: 401,
          message: err,
        })
      }
      );
  } catch (err) {
    console.log('err: ', err)
    return next({
      log: "Error occurred in userController.verifyUser",
      status: 401,
      message: err,
    });
  }
};

module.exports = userController;
