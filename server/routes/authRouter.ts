import { Router, Request, Response } from 'express';

import authController from '../controllers/authController';
import passport from '../config/passport';

const router = Router();

router.post('/register/local', authController.register, (_, res: Response) =>
  res.send({ message: 'Registered' }),
);
router.get('/login/local', passport.authenticate('local'), (_, res: Response) =>
  res.send({ message: 'Logged in' }),
);
router.get('/logout/local', (req: Request, res: Response) => {
  req.logout((err) => {
    if (err) return err;
    return res.send({ message: 'Logged out' });
  });
});

export default router;
