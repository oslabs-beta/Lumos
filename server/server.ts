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

app.use(morgan('dev')); // log status codes for dev
app.use(cors()); // enable CORS
app.use(express.json()); // parse JSON
app.use(express.urlencoded({ extended: true })); // parse query params, form data
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

export default app.listen(process.env.PORT, () =>
  console.log(`⚡️ Server running on http://localhost:${process.env.PORT} ⚡️`),
);
