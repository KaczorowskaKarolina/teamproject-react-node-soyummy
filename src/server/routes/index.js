import express from 'express';

import { logIn } from '#controllers/logIn.js';
import { signUp } from '#controllers/signUp.js';
import { logout } from '#controllers/logout.js';
import { verify } from '#controllers/verify.js';
import { authMiddleware } from '#middlewares/authMiddleware.js';
import { resendVerifyEmail } from '#controllers/resendVerifyEmail.js';
import { getAllRecipes, getCategoriesList } from './recipes/recipesRoutes.js';

const router = express.Router();

router.get('/getAllRecipes', getAllRecipes);
router.get('/getAllCategoriesList', getCategoriesList);
router.post('/signUp', signUp);
router.post('/logIn', logIn);
router.post('/verify', resendVerifyEmail);
router.get('/logout', authMiddleware, logout);
router.get('/verify/:verificationToken', verify);

export default router;

