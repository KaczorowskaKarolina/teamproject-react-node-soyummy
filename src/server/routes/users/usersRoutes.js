import { Router } from 'express';
import { authMiddleware } from 'server/middlewares/authMiddleware.js';

import { logIn } from 'server/controllers/logIn.js';
import { signUp } from 'server/controllers/signUp.js';
import { logout } from 'server/controllers/logout.js';
import { currentUser } from 'server/controllers/currentUser.js';
import { userValidation } from 'server/handlers/userValidation.js';
import { validationMiddleware } from 'server/middlewares/validationMiddleware.js';
