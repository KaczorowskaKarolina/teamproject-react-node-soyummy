// NODE APP
import cors from 'cors';
import logger from 'morgan';
import dotenv from 'dotenv';
import express from 'express';

import router from './routes/index.js';

dotenv.config();

const app = express();

const formatsLogger = app.get('env') === 'development' ? 'dev' : 'short';

app.use(logger(formatsLogger));
app.use(cors());
app.use(express.json());

app.use(express.urlencoded({ extended: false }));
app.use(express.static("src/server/public"));