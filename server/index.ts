import express, { Express } from 'express';
import session from 'express-session';
import dotenv from 'dotenv';
import morgan from 'morgan';
import cors from 'cors';

import metricRouter from './routes/metricRouter';
import authRouter from './routes/authRouter';
import passport from './config/passport';

dotenv.config();
const app: Express = express();

app.use(morgan('dev'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  session({
    secret: process.env.SESSION_SECRET as string,
    resave: true,
    saveUninitialized: true,
  }),
);
app.use(passport.initialize());
app.use(passport.session());

app.use('/auth', authRouter);
app.use('/metric', passport.authenticate('local'), metricRouter);

app.listen(process.env.PORT, () =>
  console.log(`⚡️ Server running on http://localhost:${process.env.PORT} ⚡️`),
);
