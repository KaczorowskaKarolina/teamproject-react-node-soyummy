import { Router } from 'express';

import { logIn } from 'server/controllers/logIn.js';
import { signUp } from 'server/controllers/signUp.js';
import { logout } from 'server/controllers/logout.js';
import { currentUser } from 'server/controllers/currentUser.js';
import { userValidation } from 'server/handlers/userValidation.js';
import { authMiddleware } from 'server/middlewares/authMiddleware.js';
import { validationMiddleware } from 'server/middlewares/validationMiddleware.js';

const router = Router();

router.post('/signup', validationMiddleware(userValidation), signUp);
router.post('/login', validationMiddleware(userValidation), logIn);
router.post('/logout', authMiddleware, logout);
router.post('/current', authMiddleware, currentUser);

export default router;
