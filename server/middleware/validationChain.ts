import { body } from 'express-validator';

import prisma from '../db';

export default {
  createEmailChain() {
    return body('email').notEmpty().isEmail().withMessage('Invalid email');
  },

  createPasswordChain() {
    return body('password')
      .notEmpty()
      .isLength({ min: 6 })
      .withMessage('Invalid password');
  },

  createUniqueEmailChain() {
    return body('email').custom(async (email) => {
      const user = await prisma.user.findUnique({ where: { email } });
      if (user) {
        throw new Error('Email already exists');
      }
    });
  },
};
