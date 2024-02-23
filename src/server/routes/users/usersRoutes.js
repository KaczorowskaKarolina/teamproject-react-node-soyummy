import { Router } from 'express';

import { logIn } from '#controllers/user/logIn.js';
import { signUp } from '#controllers/user/signUp.js';
import { logout } from '#controllers/user/logout.js';
import { verify } from '#controllers/user/verify.js';
import { currentUser } from '#controllers/user/currentUser.js';
import {
  userSignUpValidation,
  userLogInValidation,
} from '#handlers/userValidation.js';
import { authMiddleware } from '#middlewares/authMiddleware.js';
import { resendVerifyEmail } from '#controllers/user/resendVerifyEmail.js';
import { validationMiddleware } from '#middlewares/validationMiddleware.js';

const router = Router();

router.post('/signup', validationMiddleware(userSignUpValidation), signUp);
router.post('/login', validationMiddleware(userLogInValidation), logIn);
router.post('/logout', authMiddleware, logout);
router.post('/current', authMiddleware, currentUser);
router.post('/verify', resendVerifyEmail);
router.get('/verify/:verificationToken', verify);

export default router;
