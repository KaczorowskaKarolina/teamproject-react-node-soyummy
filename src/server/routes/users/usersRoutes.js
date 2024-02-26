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
import { getUsersRecipes } from '#controllers/user/getUsersRecipes.js';
import { validationMiddleware } from '#middlewares/validationMiddleware.js';
import { addRecipe } from '#controllers/user/addRecipe.js';
import { removeRecipe } from '#controllers/user/removeRecipe.js';
import { getShoppingList } from '#controllers/user/getShoppingList.js';
import { removeProduct } from '#controllers/user/removeProduct.js';
import { addProduct } from '#controllers/user/addProduct.js';

const router = Router();

router.post('/signup', validationMiddleware(userSignUpValidation), signUp);
router.post('/login', validationMiddleware(userLogInValidation), logIn);
router.post('/logout', authMiddleware, logout);
router.post('/current', authMiddleware, currentUser);
router.post('/verify', resendVerifyEmail);
router.get('/verify/:verificationToken', verify);
router.get('/ownRecipes', getUsersRecipes);
router.post('/ownRecipes', addRecipe);
router.delete('/ownRecipes/:recipeId', removeRecipe);
router.get('/shopping-list', getShoppingList);
router.post('/shopping-list', addProduct);
router.delete('/shopping-list/:idProduct', removeProduct);

export default router;
