import { Router, Request, Response } from 'express';

import authController from '../controllers/authController';
import passport from '../config/passport';
import validationChain from '../middleware/validationChain';

const router = Router();

router.post(
  '/register/local',
  validationChain.createEmailChain(),
  validationChain.createUniqueEmailChain(),
  authController.handleInputValidation,
  validationChain.createPasswordChain(),
  authController.register,
  (_, res: Response) => res.status(200).send({ message: 'Registered' }),
);

router.get(
  '/login/local',
  validationChain.createEmailChain(),
  authController.handleInputValidation,
  validationChain.createPasswordChain(),
  passport.authenticate('local'),
  (_, res: Response) => {
    res.status(200).send({ message: 'Logged in' });
  },
);

router.get('/logout/local', (req: Request, res: Response) => {
  req.logout((err: Error) => {
    if (err) return err;
    return res.send({ message: 'Logged out' });
  });
});

export default router;
