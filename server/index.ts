import express, { Express } from 'express';
import dotenv from 'dotenv';

dotenv.config();

const app: Express = express();

app.listen(process.env.PORT, () =>
  console.log(`⚡️ Server running on http://localhost:${process.env.PORT} ⚡️`),
);
