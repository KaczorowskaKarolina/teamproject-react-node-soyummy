// SERVER RUNNER FILE
import dotenv from 'dotenv';
import mongoose from 'mongoose';

import { app } from './src/server/app.js';

dotenv.config();

// Upload our PORT incase if you want to use different than 3000
const PORT = process.env.SERVER_PORT || 3000;

// const PORT = 3000;
// Upload our MongoDB .env file and delete this comment line
const uriDb = process.env.DB_HOST;
// DONT FORGET ABOUT OUR SECRET

const connection = mongoose.connect(uriDb);

connection
  .then(() => {
    console.log(`Database connection successful on http://localhost:${PORT}`);
    app.listen(PORT, function () {
      console.log(`Server running. Use our API on port: ${PORT}`);
    });
  })
  .catch(err => {
    console.log(`Server not running. Error message: ${err.messsage}`);
  });
