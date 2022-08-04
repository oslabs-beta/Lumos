const db = require("../models/UserModels");

const userController = {};

userController.createUser = async (req, res, next) => {
  try {
    const { email, password, firstname, lastname, arn } = req.body;

    const query = `INSERT INTO users (email, password, firstname, lastname, arn) VALUES (${email}, ${password}, ${firstname}, ${lastname}, ${arn})`;
    const getQuery = 'SELECT * FROM user'

    const table = await db.query(query);

    console.log(table);

    res.locals.table = table;

    return next();
  } catch (err) {
        console.log(err);
        return next({
        log: "Error occured in userController.createUser",
        status: 400,
        message: { err: "An error occurred" },
        });
  }
};

userController.verifyUser = (req, res, next) => {};

module.exports = userController;
