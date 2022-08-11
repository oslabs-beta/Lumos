const bcrypt = require('bcryptjs')

const authController = {}

authController.verify = async (req, res, next) => {
  try {
    const {email, password} = req.body
  } catch (err) {
    //
  }
}

module.exports = authController;