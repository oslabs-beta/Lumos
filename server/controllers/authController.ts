import { Request, Response, NextFunction } from 'express';
import { hashPassword } from '../helpers/auth';
import { validationResult } from 'express-validator';

import prisma from '../db';

export default {
  handleInputValidation: (req: Request, res: Response, next: NextFunction) => {
    const error = validationResult(req);
    if (!error.isEmpty()) {
      return res.status(400).send(error);
    }
    return next();
  },

  register: async (req: Request, res: Response, next: NextFunction) => {
    const { email, password } = req.body;
    try {
      const hashedPassword = await hashPassword(password);
      const user = await prisma.user.create({
        data: {
          email,
          password: hashedPassword,
        },
      });
      req.login(user, (err) => {
        if (err) return next(err);
        return next();
      });
    } catch (err) {
      return next(err);
    }
  },
};
