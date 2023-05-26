import passport from 'passport';
import { Strategy as LocalStrategy } from 'passport-local';

import prisma from '../db';
import { comparePasswords } from '../helpers/auth';

passport.use(
  new LocalStrategy(
    { usernameField: 'email' },
    async (email, password, done) => {
      try {
        const user = await prisma.user.findUnique({
          where: { email },
        });
        if (!user) {
          return done(null, false, { message: 'Incorrect credentials' });
        }
        const isMatch = await comparePasswords(password, user.password!);
        if (isMatch) {
          return done(null, user);
        }
        return done(null, false);
      } catch (err) {
        return done(err);
      }
    },
  ),
);

passport.serializeUser((user, done) => {
  // @ts-ignore
  done(null, user.id);
});

passport.deserializeUser(async (id: string, done) => {
  try {
    const user = await prisma.user.findUnique({
      where: { id },
    });
    if (!user) {
      return done(null, false);
    }
    return done(null, user);
  } catch (err) {
    return done(err);
  }
});

export default passport;
