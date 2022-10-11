const bcrypt = require('bcrypt');

const db = require('../db');

const userController = {};

userController.createUser = (req, res, next) => {
  try {
    bcrypt.hash(req.body.password, 10, (hashError, hash) => {
      if (hashError) return next(hashError);
      const REGISTER = `
      INSERT INTO users (email, password)
      VALUES ('${req.body.email}', '${hash}')
      RETURNING user_id, email
      `;
      db.query(REGISTER, (dbError, data) => {
        if (dbError) return next(dbError);
        res.locals.user = {
          id: data.rows[0].user_id,
          email: data.rows[0].email,
        };
        return next();
      });
    });
  } catch (err) {
    return next(err);
  }
};

module.exports = userController;
