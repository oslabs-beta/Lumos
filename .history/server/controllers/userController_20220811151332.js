// const db = require('../models/UserModels');
// const bcrypt = require('bcryptjs');

// const userController = {};

// userController.createUser = async (req, res, next) => {
//   try {
//     const { email, password, firstname, lastname } = req.body;
//     const hashedPassword = bcrypt.hash(password, salt, (err, hash) => {
//       if (err) return err;
//       return hash;
//     });
//     const query = `INSERT INTO users (email, password, firstname, lastname) VALUES ('${email}', '${hashedPassword}', '${firstname}', '${lastname}')`;
//     db.query(query);
//     return next();
//   } catch (err) {
//     console.log(err);
//     return next({
//       log: 'Error occurred in userController.createUser',
//       status: 400,
//       message: err,
//     });
//   }
// };

// userController.verifyUser = async (req, res, next) => {
//   console.log('inside this shit');
//   try {
//     console.log('entered verify user: ');
//     const { email, password } = req.body;

//     const query = `SELECT email, password FROM users WHERE email='${email}''`;
//     const res = db.query(query);

//     bcrypt.compare(password, hash, (err, result) => {
//       if (err) {
//         res.locals.verifiedUser = false;
//         return next({
//           log: 'Error occurred in userController.verifyUser',
//           status: 401,
//           message: err,
//         });
//       } else {
//         res.locals.verifiedUser = true;
//         return next();
//       }
//     });

//     // if (table.rowCount === 1) {
//     //   res.locals.verifiedUser = true;
//     //   console.log(
//     //     'after setting verified user before verified console log ' +
//     //       res.locals.verifiedUser,
//     //   );
//     //   // console.log('VERIFIED ,' + res.locals);
//     // } else {
//     //   res.locals.verifiedUser = false;
//     // }
//     // return next();
//   } catch (err) {
//     return next(err);
//   }
// };

// module.exports = userController;

const db = require("../models/UserModels");
const bcrypt = require('bcryptjs')

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

userController.verifyUser = async (req, res, next) => {
  console.log('inside this shit')
  try {
    console.log('entered verify user: ')
    const {email, password} =req.body
    const query = `SELECT email, password FROM users WHERE email='${email}' AND password='${password}'`
    const table = db.query(query)
    console.log('this is the table:', table);
    console.log('table: ', table.rowCount);

    if (table.rowCount === 1) {
      res.locals.verifiedUser = true;
      console.log('after setting verified user before verified console log ' + res.locals.verifiedUser)
      // console.log('VERIFIED ,' + res.locals);
    }

    else {
      res.locals.verifiedUser = false;
      // console.log('NOT VERIFIED ,' + res.locals);
    }
    // console.log('NOT TRIGGERED ,' + res.locals);
    return next()

  } catch (err) {
    return next(err)
  }
};

module.exports = userController;