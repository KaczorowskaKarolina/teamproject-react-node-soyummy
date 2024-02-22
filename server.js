// SERVER RUNNER FILE
import dotenv from 'dotenv';
import mongoose from 'mongoose';

import { app } from './src/server/app.js';

dotenv.config();

// Upload our PORT incase if you want to use different than 3000
const SERVER_PORT = process.env.SERVER_PORT || 3000;

// const PORT = 3000;
// Upload our MongoDB .env file and delete this comment line
const uriDb = process.env.DB_HOST;
// DONT FORGET ABOUT OUR SECRET

const connection = mongoose.connect(uriDb);

connection
  .then(() => {
    console.log(
      `Database connection successful on http://localhost:${SERVER_PORT}`
    );
    app.listen(SERVER_PORT, function () {
      console.log(`Server running. Use our API on port: ${SERVER_PORT}`);
    });
  })
  .catch(err => {
    console.log(`Server not running. Error message: ${err.messsage}`);
  });
