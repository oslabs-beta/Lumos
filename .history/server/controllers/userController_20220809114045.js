const db = require("../models/UserModels");

const userController = {};

userController.createUser = async (req, res, next) => {
  try {
    const { email, password, firstname, lastname } = req.body;

    const query = `INSERT INTO users (email, password, firstname, lastname) VALUES ('${email}', '${password}', '${firstname}', '${lastname}')`;

    const table = await db.query(query);

    console.log('table: ', table)

    // res.locals.table = table;

    return next();
  } catch (err) {
    console.log(err);
    return next({
      log: "Error occurred in userController.createUser",
      status: 400,
      message: { err: "An error occurred" },
    });
  }
};

userController.verifyUser = (req, res, next) => {
  console.log('inside this shit')
  try {
    console.log('entered verify user: ')
    const {email, password} =req.body
    const query = `SELECT email, password FROM users WHERE email='${email}' AND password='${password}'`
    // const table = await db.query(query)
    // console.log('table: ', table)
    return next()

  } catch (err) {
    return next(err)
  }
};

module.exports = userController;
