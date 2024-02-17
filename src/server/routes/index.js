import express from 'express';

import { logIn } from '#controllers/logIn.js';
import { signUp } from '#controllers/signUp.js';
import { logout } from '#controllers/logout.js';
import { verify } from '#controllers/verify.js';
import { authMiddleware } from '#middlewares/authMiddleware.js';
import { resendVerifyEmail } from '#controllers/resendVerifyEmail.js';
import { getAllCategoriesList } from '#server/models/schema/categoriesList/categoriesList.js';
import { getAllRecipes } from '#server/models/schema/recipes/recipes.js';

const router = express.Router();

router.get('/getAllRecipes', async (req, res, next) => {
  const response = await getAllRecipes();
  return res.status(200).json({
    status: 'success',
    code: 200,
    data: {
      file: response,
    },
    message: 'nothing to load',
  });
});

router.get('/getAllCategoriesList', async (req, res, next) => {
  const response = await getAllCategoriesList();
  return res.status(200).json({
    status: 'success',
    code: 200,
    data: {
      file: response,
    },
    message: 'nothing to load',
  });
});

router.post('/signUp', signUp);
router.post('/logIn', logIn);
router.post('/verify', resendVerifyEmail);
router.get('/logout', authMiddleware, logout);
router.get('/verify/:verificationToken', verify);

export default router;
