import express from 'express';

// import { logIn } from '#controllers/logIn.js';
// import { signUp } from '#controllers/signUp.js';
// import { logout } from '#controllers/logout.js';
// import { verify } from '#controllers/verify.js';
// import { authMiddleware } from '#middlewares/authMiddleware.js';
// import { resendVerifyEmail } from '#controllers/resendVerifyEmail.js';
import {
  getAllRecipes,
  getCategoriesList,
  getRecipeById,
} from '../controllers/recipes/getAll.js';
import {
  getAllIngredients,
  getIngredientById,
} from './ingredients/ingredientsRoutes.js';

const router = express.Router();

router.get('/getAllRecipes', getAllRecipes);
router.get('/getAllCategoriesList', getCategoriesList);
router.get('/getRecipeById/:id', getRecipeById);
router.get('/getAllIngredients', getAllIngredients);
router.get('/getIngredientById/:id', getIngredientById);
// router.post('/signUp', signUp);
// router.post('/logIn', logIn);
// router.post('/verify', resendVerifyEmail);
// router.get('/logout', authMiddleware, logout);
// router.get('/verify/:verificationToken', verify);

export default router;
