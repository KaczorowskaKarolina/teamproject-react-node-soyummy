// NODE APP
import cors from 'cors';
import logger from 'morgan';
import dotenv from 'dotenv';
import express from 'express';
import './config/jwt-strategy.js';

import userRouter from './routes/users/usersRoutes.js';

dotenv.config();

const app = express();

const formatsLogger = app.get('env') === 'development' ? 'dev' : 'short';

app.use(logger(formatsLogger));
app.use(cors());
app.use(express.json());
app.use(express.static('src/server/public'));

// WE NEED JWT STRATEGY

app.use('/api', userRouter);

app.use((req, res) => {
  return res.status(404).json({ message: 'Not found' });
});

app.use((err, req, res, next) => {
  return res.status(500).json({ message: err.message });
});

export { app };
