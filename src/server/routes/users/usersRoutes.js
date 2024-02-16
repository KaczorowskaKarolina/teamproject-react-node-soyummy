import { Router } from 'express';

import { logIn } from '../../controllers/logIn.js';
import { signUp } from '../../controllers/signUp.js';
import { logout } from '../../controllers/logout.js';
import { currentUser } from '../../controllers/currentUser.js';
import {
  userSignUpValidation,
  userLogInValidation,
} from '../../handlers/userValidation.js';
import { authMiddleware } from '../../middlewares/authMiddleware.js';
import { validationMiddleware } from '../../middlewares/validationMiddleware.js';

const router = Router();

router.post('/signup', validationMiddleware(userSignUpValidation), signUp);
router.post('/login', validationMiddleware(userLogInValidation), logIn);
router.post('/logout', authMiddleware, logout);
router.post('/current', authMiddleware, currentUser);

export default router;
