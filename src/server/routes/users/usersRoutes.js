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
import { fileMiddleware } from '#middlewares/filesMiddleware.js';
import { uploadAvatar } from '#controllers/user/uploadAvatar.js';

const router = Router();

router.post('/signup', validationMiddleware(userSignUpValidation), signUp);
router.post('/login', validationMiddleware(userLogInValidation), logIn);
router.post('/logout', authMiddleware, logout);
router.post('/current', authMiddleware, currentUser);
router.post('/verify', resendVerifyEmail);
router.get('/verify/:verificationToken', verify);
router.post(
  '/avatar',
  authMiddleware,
  fileMiddleware.single('avatar'),
  uploadAvatar
);
router.get('/ownRecipes', authMiddleware, getUsersRecipes);
router.post(
  '/ownRecipes',
  authMiddleware,
  fileMiddleware.single('recipeImage'),
  addRecipe
);
router.delete('/ownRecipes/:recipeId', authMiddleware, removeRecipe);
router.get('/shopping-list', authMiddleware, getShoppingList);
router.post('/shopping-list', authMiddleware, addProduct);
router.delete('/shopping-list/:idProduct', authMiddleware, removeProduct);

export default router;
